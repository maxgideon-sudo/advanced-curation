import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check if email configuration is available
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Email configuration missing')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Create email transporter for GoDaddy/Outlook SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false, // STARTTLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false // For some GoDaddy setups
      },
      // Additional options for GoDaddy compatibility
      connectionTimeout: 60000, // 60 seconds
      greetingTimeout: 30000, // 30 seconds
      socketTimeout: 60000, // 60 seconds
    })

    // Verify transporter configuration with detailed error handling
    try {
      await transporter.verify()
      console.log('SMTP connection verified successfully')
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError)
      
      // Try alternative GoDaddy SMTP settings
      const alternativeTransporter = nodemailer.createTransport({
        host: 'smtpout.secureserver.net', // GoDaddy's SMTP server
        port: 465,
        secure: true, // SSL
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false
        }
      })
      
      try {
        await alternativeTransporter.verify()
        console.log('Alternative GoDaddy SMTP verified successfully')
        // Use the alternative transporter for sending
        const emailContent = `
New contact form submission from Advanced Curation website:

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Subject: ${subject}

Message:
${message}

---
This message was sent from the Advanced Curation contact form.
Reply directly to ${email} to respond to the sender.
        `.trim()

        await alternativeTransporter.sendMail({
          from: `"Advanced Curation Contact Form" <${process.env.EMAIL_USER}>`,
          to: 'max@advancedcuration.com',
          subject: `Contact Form: ${subject}`,
          text: emailContent,
          replyTo: email,
        })

        return NextResponse.json(
          { message: 'Email sent successfully' },
          { status: 200 }
        )
      } catch (altError) {
        console.error('Both SMTP configurations failed:', altError)
        return NextResponse.json(
          { error: 'Email service configuration error' },
          { status: 500 }
        )
      }
    }

    // If we reach here, the primary SMTP is working
    const emailContent = `
New contact form submission from Advanced Curation website:

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Subject: ${subject}

Message:
${message}

---
This message was sent from the Advanced Curation contact form.
Reply directly to ${email} to respond to the sender.
    `.trim()

    // Send email using primary transporter
    await transporter.sendMail({
      from: `"Advanced Curation Contact Form" <${process.env.EMAIL_USER}>`,
      to: 'max@advancedcuration.com',
      subject: `Contact Form: ${subject}`,
      text: emailContent,
      replyTo: email,
    })

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    
    // Log more specific error information
    if (error instanceof Error) {
      console.error('Error details:', error.message)
      console.error('Error stack:', error.stack)
      
      // Provide more specific error responses based on error type
      if (error.message.includes('authentication') || error.message.includes('auth')) {
        return NextResponse.json(
          { error: 'Email authentication failed - check credentials' },
          { status: 500 }
        )
      }
      
      if (error.message.includes('connection') || error.message.includes('timeout')) {
        return NextResponse.json(
          { error: 'Email server connection failed' },
          { status: 500 }
        )
      }
      
      if (error.message.includes('SMTP')) {
        return NextResponse.json(
          { error: 'SMTP configuration error' },
          { status: 500 }
        )
      }
    }
    
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
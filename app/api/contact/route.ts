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

    // Create email transporter (Outlook/Office 365 SMTP)
    const transporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        ciphers: 'SSLv3'
      }
    })

    // Verify transporter configuration
    await transporter.verify()

    // Email content
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

    // Send email
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
    }
    
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
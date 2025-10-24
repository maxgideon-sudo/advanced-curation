import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function GET() {
  try {
    console.log('🔍 Starting email configuration test...')
    
    // Check environment variables
    const emailUser = process.env.EMAIL_USER
    const emailPassword = process.env.EMAIL_PASSWORD
    
    if (!emailUser || !emailPassword) {
      console.error('❌ Missing environment variables')
      return NextResponse.json({
        success: false,
        error: 'Missing email configuration',
        details: {
          EMAIL_USER: emailUser ? 'Set' : 'Missing',
          EMAIL_PASSWORD: emailPassword ? 'Set' : 'Missing'
        }
      }, { status: 500 })
    }
    
    console.log('✅ Environment variables found')
    console.log('EMAIL_USER:', emailUser)
    
    const testResults = []
    
    // Test 1: Outlook SMTP
    console.log('📧 Testing Outlook SMTP...')
    const outlookTransporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false,
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false
      },
      connectionTimeout: 60000,
      greetingTimeout: 30000,
      socketTimeout: 60000,
    })
    
    try {
      await outlookTransporter.verify()
      console.log('✅ Outlook SMTP verification successful')
      testResults.push({
        service: 'Outlook SMTP',
        host: 'smtp-mail.outlook.com',
        port: 587,
        status: 'success',
        message: 'Connection verified'
      })
    } catch (outlookError) {
      const errorMessage = outlookError instanceof Error ? outlookError.message : 'Unknown error'
      console.log('❌ Outlook SMTP failed:', errorMessage)
      testResults.push({
        service: 'Outlook SMTP',
        host: 'smtp-mail.outlook.com',
        port: 587,
        status: 'failed',
        error: errorMessage
      })
    }
    
    // Test 2: GoDaddy SMTP (SSL)
    console.log('📧 Testing GoDaddy SMTP (SSL)...')
    const godaddyTransporter = nodemailer.createTransport({
      host: 'smtpout.secureserver.net',
      port: 465,
      secure: true,
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
      tls: {
        rejectUnauthorized: false
      }
    })
    
    try {
      await godaddyTransporter.verify()
      console.log('✅ GoDaddy SMTP (SSL) verification successful')
      testResults.push({
        service: 'GoDaddy SMTP (SSL)',
        host: 'smtpout.secureserver.net',
        port: 465,
        status: 'success',
        message: 'Connection verified'
      })
    } catch (godaddyError) {
      const errorMessage = godaddyError instanceof Error ? godaddyError.message : 'Unknown error'
      console.log('❌ GoDaddy SMTP (SSL) failed:', errorMessage)
      testResults.push({
        service: 'GoDaddy SMTP (SSL)',
        host: 'smtpout.secureserver.net',
        port: 465,
        status: 'failed',
        error: errorMessage
      })
    }
    
    // Test 3: GoDaddy SMTP (STARTTLS)
    console.log('📧 Testing GoDaddy SMTP (STARTTLS)...')
    const altGodaddyTransporter = nodemailer.createTransport({
      host: 'smtpout.secureserver.net',
      port: 587,
      secure: false,
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
      tls: {
        rejectUnauthorized: false
      }
    })
    
    try {
      await altGodaddyTransporter.verify()
      console.log('✅ GoDaddy SMTP (STARTTLS) verification successful')
      testResults.push({
        service: 'GoDaddy SMTP (STARTTLS)',
        host: 'smtpout.secureserver.net',
        port: 587,
        status: 'success',
        message: 'Connection verified'
      })
    } catch (altError) {
      const errorMessage = altError instanceof Error ? altError.message : 'Unknown error'
      console.log('❌ GoDaddy SMTP (STARTTLS) failed:', errorMessage)
      testResults.push({
        service: 'GoDaddy SMTP (STARTTLS)',
        host: 'smtpout.secureserver.net',
        port: 587,
        status: 'failed',
        error: errorMessage
      })
    }
    
    const successfulConfigs = testResults.filter(result => result.status === 'success')
    
    return NextResponse.json({
      success: successfulConfigs.length > 0,
      emailUser,
      testResults,
      recommendation: successfulConfigs.length > 0 
        ? `Use ${successfulConfigs[0].service} configuration`
        : 'All SMTP configurations failed. Check credentials and email provider settings.',
      troubleshooting: [
        'Verify email credentials are correct',
        'Check if 2FA is enabled - use app-specific password',
        'Ensure SMTP is enabled in email settings',
        'Try using full email address as username',
        'Check email provider security settings'
      ]
    })
    
  } catch (error) {
    console.error('🚨 Email test error:', error)
    return NextResponse.json({
      success: false,
      error: 'Email test failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
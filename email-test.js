// Email configuration test script
// Run this with: node email-test.js

const nodemailer = require('nodemailer');

async function testEmailConfig() {
  console.log('Testing email configuration...');
  
  // Check environment variables
  const emailUser = process.env.EMAIL_USER;
  const emailPassword = process.env.EMAIL_PASSWORD;
  
  if (!emailUser || !emailPassword) {
    console.error('❌ Missing environment variables:');
    console.error('EMAIL_USER:', emailUser ? '✓ Set' : '❌ Missing');
    console.error('EMAIL_PASSWORD:', emailPassword ? '✓ Set' : '❌ Missing');
    return;
  }
  
  console.log('✓ Environment variables found');
  console.log('EMAIL_USER:', emailUser);
  
  // Test Outlook SMTP
  console.log('\n📧 Testing Outlook SMTP...');
  const outlookTransporter = nodemailer.createTransporter({
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
  });
  
  try {
    await outlookTransporter.verify();
    console.log('✅ Outlook SMTP connection successful');
    
    // Try sending test email
    const testEmail = {
      from: `"Test" <${emailUser}>`,
      to: 'max@advancedcuration.com',
      subject: 'Test Email from Advanced Curation',
      text: 'This is a test email to verify SMTP configuration.'
    };
    
    await outlookTransporter.sendMail(testEmail);
    console.log('✅ Test email sent successfully via Outlook SMTP');
    return;
    
  } catch (outlookError) {
    console.log('❌ Outlook SMTP failed:', outlookError.message);
  }
  
  // Test GoDaddy SMTP
  console.log('\n📧 Testing GoDaddy SMTP...');
  const godaddyTransporter = nodemailer.createTransporter({
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
  });
  
  try {
    await godaddyTransporter.verify();
    console.log('✅ GoDaddy SMTP connection successful');
    
    // Try sending test email
    const testEmail = {
      from: `"Test" <${emailUser}>`,
      to: 'max@advancedcuration.com',
      subject: 'Test Email from Advanced Curation',
      text: 'This is a test email to verify SMTP configuration.'
    };
    
    await godaddyTransporter.sendMail(testEmail);
    console.log('✅ Test email sent successfully via GoDaddy SMTP');
    
  } catch (godaddyError) {
    console.log('❌ GoDaddy SMTP failed:', godaddyError.message);
  }
  
  // Test alternative GoDaddy settings
  console.log('\n📧 Testing alternative GoDaddy SMTP settings...');
  const altGodaddyTransporter = nodemailer.createTransporter({
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
  });
  
  try {
    await altGodaddyTransporter.verify();
    console.log('✅ Alternative GoDaddy SMTP connection successful');
    
    // Try sending test email
    const testEmail = {
      from: `"Test" <${emailUser}>`,
      to: 'max@advancedcuration.com',
      subject: 'Test Email from Advanced Curation',
      text: 'This is a test email to verify SMTP configuration.'
    };
    
    await altGodaddyTransporter.sendMail(testEmail);
    console.log('✅ Test email sent successfully via alternative GoDaddy SMTP');
    
  } catch (altError) {
    console.log('❌ Alternative GoDaddy SMTP failed:', altError.message);
    console.log('\n💡 Troubleshooting tips:');
    console.log('1. Verify your email credentials are correct');
    console.log('2. Check if 2FA is enabled and use an app password');
    console.log('3. Ensure SMTP is enabled in your email settings');
    console.log('4. Try using your full email address as username');
    console.log('5. Check GoDaddy/Outlook security settings');
  }
}

testEmailConfig().catch(console.error);
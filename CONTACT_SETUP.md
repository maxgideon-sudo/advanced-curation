# Contact Form Setup Guide

The contact form is now implemented and ready to use. Here's what was added:

## Files Created

1. **`/app/contact/page.tsx`** - The contact page with a comprehensive form
2. **`/app/api/contact/route.ts`** - API endpoint to handle form submissions and send emails
3. **`/app/api/test-email/route.ts`** - Diagnostic endpoint to test email configuration
4. **Updated `.env.example`** - Added email configuration variables

## Features

- ✅ Professional contact form with validation
- ✅ Email notifications sent to max@advancedcuration.com
- ✅ Form includes: Name, Email, Company, Subject, Message
- ✅ Success/error feedback for users
- ✅ Responsive design matching site theme
- ✅ Loading states and proper error handling

## Email Configuration

To enable email functionality, you need to set up environment variables:

### For Outlook/Office 365 (GoDaddy hosted):

1. Use your full email address and password
2. Ensure SMTP is enabled in your Outlook settings
3. If using 2-factor authentication, you may need an app-specific password
4. Set environment variables:
   ```bash
   EMAIL_USER=max@advancedcuration.com
   EMAIL_PASSWORD=your-outlook-password
   ```

### For Gmail (Alternative):

1. Enable 2-factor authentication on your Gmail account
2. Generate an "App Password":
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password
3. Set environment variables:
   ```bash
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-16-digit-app-password
   ```

### For Production:

Consider using a professional email service like:
- **SendGrid** (recommended)
- **Mailgun**
- **AWS SES**
- **Resend**

## Testing

1. Visit `/contact` on your site
2. Fill out the form
3. Submit and check for success message
4. Verify email arrives at max@advancedcuration.com

## Deployment Notes

- Set `EMAIL_USER` and `EMAIL_PASSWORD` in your Vercel environment variables
- The form will gracefully handle email service unavailability
- All form submissions are validated both client and server-side

## Troubleshooting Email Issues

If you're getting `{"error":"Failed to send email"}`, use these diagnostic steps:

### 1. Test Email Configuration
Visit `/api/test-email` on your deployed site to run diagnostic tests on all SMTP configurations.

### 2. Common GoDaddy/Outlook Issues
- **Authentication Error**: Use full email address as username
- **2FA Enabled**: Generate app-specific password instead of regular password
- **SMTP Not Enabled**: Check email provider settings to enable SMTP
- **Security Settings**: Disable "less secure apps" blocking or add exception

### 3. SMTP Server Options
The API now tries multiple configurations:
1. **Outlook SMTP**: `smtp-mail.outlook.com:587` (STARTTLS)
2. **GoDaddy SMTP (SSL)**: `smtpout.secureserver.net:465` (SSL)
3. **GoDaddy SMTP (STARTTLS)**: `smtpout.secureserver.net:587` (STARTTLS)

### 4. Environment Variables
Ensure these are set in Vercel:
```
EMAIL_USER=max@advancedcuration.com
EMAIL_PASSWORD=your-actual-password-or-app-password
```

### 5. Check Logs
Monitor Vercel function logs for detailed error messages including:
- Connection timeouts
- Authentication failures
- SMTP server responses

## Customization

You can easily modify:
- Email recipient (currently max@advancedcuration.com)
- Form fields in `/app/contact/page.tsx`
- Email template in `/app/api/contact/route.ts`
- SMTP configurations in `/app/api/contact/route.ts`
- Styling and layout as needed
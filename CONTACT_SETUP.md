# Contact Form Setup Guide

The contact form is now implemented and ready to use. Here's what was added:

## Files Created

1. **`/app/contact/page.tsx`** - The contact page with a comprehensive form
2. **`/app/api/contact/route.ts`** - API endpoint to handle form submissions and send emails
3. **Updated `.env.example`** - Added email configuration variables

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

## Customization

You can easily modify:
- Email recipient (currently max@advancedcuration.com)
- Form fields in `/app/contact/page.tsx`
- Email template in `/app/api/contact/route.ts`
- Styling and layout as needed
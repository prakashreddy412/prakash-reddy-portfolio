# EmailJS Setup Guide

This guide will help you configure EmailJS to receive contact form submissions directly to your email address.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for gmail.com addresses)
   - **Outlook** (for outlook.com/hotmail.com)
   - **Yahoo** (for yahoo.com)
   - **Custom SMTP** (for other providers)

### For Gmail:
1. Select **Gmail**
2. Click **Connect Account**
3. Sign in with your Gmail account
4. Grant permissions
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template configuration:

### Template Settings:
- **Template Name**: `portfolio_contact`
- **Template ID**: `template_contact` (or note down the generated ID)

### Email Template Content:
```html
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

### Template Variables:
Make sure these variables are included:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Email message

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (starts with `user_`)
3. Copy this key

## Step 5: Update Your Code

Update the contact form in `src/pages/Contact.jsx` with your actual EmailJS details:

```javascript
const result = await emailjs.send(
  'service_your_service_id',    // Replace with your Service ID
  'template_your_template_id',  // Replace with your Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: 'prakashreddy412@gmail.com'
  },
  'your_public_key_here'        // Replace with your Public Key
)
```

## Step 6: Test the Setup

1. Start your development server: `npm run dev`
2. Go to the contact form
3. Fill out the form with test data
4. Submit the form
5. Check your email inbox

## Troubleshooting

### Common Issues:

1. **"Invalid service ID"**
   - Double-check your Service ID in EmailJS dashboard
   - Make sure there are no extra spaces

2. **"Invalid template ID"**
   - Verify your Template ID
   - Ensure the template is published

3. **"Invalid public key"**
   - Check your Public Key in Account settings
   - Make sure it starts with `user_`

4. **Emails not received**
   - Check spam/junk folder
   - Verify email service connection
   - Check EmailJS logs in dashboard

### EmailJS Limits (Free Plan):
- 200 emails per month
- 2 email services
- 2 email templates

## Alternative: Environment Variables

For better security, you can use environment variables:

1. Create `.env` file in your project root:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update the code to use environment variables:
```javascript
const result = await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: 'prakashreddy412@gmail.com'
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
```

## Security Notes

- Never commit your EmailJS keys to public repositories
- Use environment variables for production
- Consider upgrading to a paid plan for higher limits
- Monitor your email usage in the EmailJS dashboard

## Support

If you encounter issues:
1. Check EmailJS documentation: [docs.emailjs.com](https://docs.emailjs.com/)
2. Check EmailJS status page
3. Contact EmailJS support
4. Review browser console for error messages

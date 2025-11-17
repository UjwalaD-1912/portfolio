# EmailJS Setup Instructions

## Step 1: Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (recommended) or your preferred email provider
4. Follow the connection steps:
   - For Gmail: You'll need to sign in with your Google account
   - Grant EmailJS permission to send emails on your behalf
5. Note down your **Service ID** (will look like `service_xxxxxxx`)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Template Name:** `template_contact`

**Subject:** `Portfolio Contact: {{subject}}`

**Content:**
```
Hello Ujwala,

You have received a new message from your portfolio website:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent through your portfolio contact form.
Reply directly to: {{reply_to}}
```

4. Save the template and note the **Template ID**

## Step 4: Get Your Public Key
1. Go to "Account" > "General"
2. Find your **Public Key** (starts with letters/numbers)
3. Copy this key

## Step 5: Update the Website Code
The code is already prepared! Just update these values in `script.js`:

```javascript
// Current setup (already configured):
emailjs.init("wMGWVOLHgUZzKT7mO"); // Replace with your Public Key
emailjs.send('service_portfolio', 'template_contact', templateParams) // Replace service and template IDs
```

## Step 6: Test the Contact Form
1. Deploy the updated code
2. Visit your portfolio website
3. Fill out and submit the contact form
4. Check your email inbox for the message

## Current Configuration
- **Public Key:** `wMGWVOLHgUZzKT7mO` (needs to be replaced with yours)
- **Service ID:** `service_portfolio` (needs to match your service)
- **Template ID:** `template_contact` (needs to match your template)

## Free Tier Limits
- 200 emails/month
- Perfect for portfolio contact forms
- No credit card required

## Troubleshooting
- Make sure your email service is properly connected
- Check that template variables match exactly: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
- Test with a simple message first
- Check browser console for any error messages

Once you complete these steps, your contact form will send emails directly to your inbox!
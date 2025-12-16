# EmailJS Setup Guide

This guide explains how to set up EmailJS for the contact form in your portfolio.

## Prerequisites

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Verify your email address

## Step 1: Set up Email Service

1. Go to [EmailJS Dashboard](https://www.emailjs.com/dashboard)
2. Click on "Email Services" in the left sidebar
3. Click "Add New Service"
4. Choose your email provider (Gmail, Outlook, etc.)
5. Follow the authentication steps

## Step 2: Create Email Template

1. Go to "Email Templates" in the left sidebar
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

Hi,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

Best regards,
{{from_name}}
```

4. Note down the Template ID (e.g., template_123abc)

## Step 3: Get Your Credentials

1. Go to "Account" → "General" in the left sidebar
2. Note down your User ID (e.g., user_123abc)
3. From the Email Services section, note down your Service ID (e.g., service_456def)

## Step 4: Configure Environment Variables

1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file and replace the placeholder values:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
   VITE_EMAILJS_USER_ID=your_actual_user_id
   ```

## Step 5: Test the Contact Form

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Go to the contact section of your portfolio
3. Fill out the form and submit it
4. You should see "Message sent successfully" if everything is configured correctly

## Troubleshooting

- If you get a "Failed to send message" error, double-check your credentials
- Make sure your email service is properly connected in EmailJS
- Check the EmailJS dashboard for any failed attempts in the "History" section
- Ensure your template variables match exactly (case-sensitive)

## Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already included in `.gitignore`
- EmailJS has rate limiting - be mindful of testing too frequently
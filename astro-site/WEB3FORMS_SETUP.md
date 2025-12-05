# Web3Forms Setup Guide

The contact form now uses Web3Forms - a free service for static sites.

## Setup Steps:

1. **Go to Web3Forms**: https://web3forms.com/

2. **Create a Free Account** (no credit card required):
   - Click "Get Started"
   - Sign up with your email
   - Verify your email

3. **Get Your Access Key**:
   - After login, click "Create New Form"
   - Enter your email: `podpora@akali.cz`
   - Copy the **Access Key** (looks like: `abc123def-4567-8901-xyz`)

4. **Add the Access Key to Your Site**:
   - Open: `astro-site/src/components/react/Contact.tsx`
   - Find line 73: `access_key: 'YOUR_WEB3FORMS_ACCESS_KEY'`
   - Replace with your actual key: `access_key: 'abc123def-4567-8901-xyz'`

5. **Test the Form**:
   - Run: `npm run dev`
   - Fill out the contact form
   - Submit and check your email at `podpora@akali.cz`

## Features:
✅ Works on desktop & mobile
✅ No backend needed
✅ Free forever (up to 250 submissions/month)
✅ Spam protection included
✅ Email notifications to `podpora@akali.cz`
✅ Auto-reply to users (optional)

## Free Tier Limits:
- 250 submissions per month
- Upgrade to unlimited for $4/month if needed

That's it! Your contact form will now send emails directly to your inbox.

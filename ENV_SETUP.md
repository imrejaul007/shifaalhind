# Environment Variables Setup Guide

This document explains all required and optional environment variables for the Shifa AlHind Medical Tourism platform.

## Required Environment Variables

### Database Configuration

```env
# PostgreSQL Database URL
# Format: postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public
# Example for local development:
DATABASE_URL="postgresql://postgres:password@localhost:5432/shifaalhind?schema=public"

# Example for Render PostgreSQL:
# DATABASE_URL="postgres://shifaalhind_user:PASSWORD@dpg-xxxxx-a.oregon-postgres.render.com/shifaalhind"
```

### NextAuth.js Configuration

```env
# NextAuth Secret (generate with: openssl rand -base64 32)
NEXTAUTH_SECRET="your-super-secret-key-min-32-chars"

# NextAuth URL (your application URL)
# Local development:
NEXTAUTH_URL="http://localhost:3000"

# Production:
# NEXTAUTH_URL="https://shifaalhind.com"
```

### Application URLs

```env
# Application Base URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# For production:
# NEXT_PUBLIC_APP_URL="https://shifaalhind.com"
```

## Optional Environment Variables

### Email Notifications (Choose ONE method)

#### Option 1: SendGrid (Recommended)

```env
# SendGrid API Key (get from https://sendgrid.com)
SENDGRID_API_KEY="SG.xxxxxxxxxxxxxxxxxxxxxxx"

# Sender email (must be verified in SendGrid)
EMAIL_FROM="noreply@shifaalhind.com"
EMAIL_FROM_NAME="Shifa AlHind"

# Admin notification email
ADMIN_EMAIL="admin@shifaalhind.com"
```

#### Option 2: SMTP (Alternative)

```env
# SMTP Server Configuration
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_SECURE="false"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# Sender email
EMAIL_FROM="noreply@shifaalhind.com"
EMAIL_FROM_NAME="Shifa AlHind"

# Admin notification email
ADMIN_EMAIL="admin@shifaalhind.com"
```

### WhatsApp Notifications (Optional)

```env
# Twilio Account SID (get from https://twilio.com)
TWILIO_ACCOUNT_SID="ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

# Twilio Auth Token
TWILIO_AUTH_TOKEN="your-auth-token"

# Twilio WhatsApp Number (format: whatsapp:+14155238886)
TWILIO_WHATSAPP_FROM="whatsapp:+14155238886"

# Admin WhatsApp Number (format: whatsapp:+971xxxxxxxxx)
ADMIN_WHATSAPP="+971xxxxxxxxx"
```

### Analytics & Monitoring (Optional)

```env
# Google Analytics Measurement ID
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"

# Google Tag Manager ID
NEXT_PUBLIC_GTM_ID="GTM-XXXXXXX"

# Sentry DSN (for error tracking)
NEXT_PUBLIC_SENTRY_DSN="https://xxxxx@xxxxx.ingest.sentry.io/xxxxx"
```

### File Storage (Optional)

```env
# AWS S3 Configuration (for file uploads)
AWS_ACCESS_KEY_ID="your-access-key"
AWS_SECRET_ACCESS_KEY="your-secret-key"
AWS_REGION="us-east-1"
AWS_S3_BUCKET="shifaalhind-uploads"

# Or Cloudflare R2
CLOUDFLARE_ACCOUNT_ID="your-account-id"
CLOUDFLARE_ACCESS_KEY_ID="your-access-key"
CLOUDFLARE_SECRET_ACCESS_KEY="your-secret-key"
CLOUDFLARE_BUCKET_NAME="shifaalhind"
```

## Environment Variable Priority

1. **Critical (Required for app to run):**
   - DATABASE_URL
   - NEXTAUTH_SECRET
   - NEXTAUTH_URL
   - NEXT_PUBLIC_APP_URL

2. **Important (Required for full functionality):**
   - Email configuration (SendGrid OR SMTP)
   - EMAIL_FROM
   - ADMIN_EMAIL

3. **Optional (Enhances functionality):**
   - WhatsApp notifications (Twilio)
   - Analytics (Google Analytics, GTM)
   - Error tracking (Sentry)
   - File storage (AWS S3, Cloudflare R2)

## Setup Instructions

### Local Development

1. Copy the example file:
   ```bash
   cp .env.example .env
   ```

2. Update `.env` with your local values:
   ```env
   DATABASE_URL="postgresql://postgres:password@localhost:5432/shifaalhind?schema=public"
   NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"
   NEXTAUTH_URL="http://localhost:3000"
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   ```

3. Run database migrations:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. Seed the database:
   ```bash
   npm run db:seed
   ```

### Production (Render)

1. In your Render dashboard, go to your Web Service

2. Navigate to "Environment" tab

3. Add environment variables one by one:
   - Click "Add Environment Variable"
   - Enter Key and Value
   - Click "Save Changes"

4. Required variables for Render:
   ```
   DATABASE_URL=<copy from Render PostgreSQL>
   NEXTAUTH_SECRET=<generate with openssl>
   NEXTAUTH_URL=https://your-app-name.onrender.com
   NEXT_PUBLIC_APP_URL=https://your-app-name.onrender.com
   ```

5. After adding variables, Render will automatically redeploy

## Testing Email Configuration

After setting up email variables, test by:

1. Visit `/contact` page
2. Submit the contact form
3. Check if email is received at ADMIN_EMAIL

Or use the test script:
```bash
npm run test:email
```

## Testing WhatsApp Configuration

After setting up Twilio variables, test by:

1. Submit a lead form on the website
2. Check if WhatsApp message is received at ADMIN_WHATSAPP

## Security Best Practices

1. **Never commit `.env` to Git**
   - It's already in `.gitignore`
   - Double-check before pushing

2. **Use strong secrets:**
   ```bash
   # Generate strong NEXTAUTH_SECRET
   openssl rand -base64 32
   ```

3. **Rotate secrets regularly:**
   - Change NEXTAUTH_SECRET every 90 days
   - Rotate API keys quarterly

4. **Use environment-specific values:**
   - Different secrets for dev/staging/prod
   - Different database URLs
   - Different API keys

5. **Restrict API permissions:**
   - SendGrid: Only "Mail Send" permission
   - Twilio: Only WhatsApp messaging
   - AWS S3: Only specific bucket access

## Troubleshooting

### Database Connection Issues

**Error:** `Environment variable not found: DATABASE_URL`
- **Solution:** Add DATABASE_URL to your `.env` file

**Error:** `Can't reach database server`
- **Solution:** Check if PostgreSQL is running
- **Solution:** Verify connection string format
- **Solution:** Check firewall/network settings

### Email Not Sending

**Using SendGrid:**
- Verify SENDGRID_API_KEY is correct
- Check EMAIL_FROM is verified in SendGrid
- Check SendGrid dashboard for errors

**Using SMTP:**
- Verify SMTP credentials are correct
- For Gmail: Use App Password, not regular password
- Check SMTP_PORT and SMTP_SECURE settings

### WhatsApp Not Sending

- Verify Twilio credentials
- Check Twilio WhatsApp is approved
- Verify phone number format (include country code)
- Check Twilio console for error logs

## Default Admin Credentials

After running seed script:
- **Email:** admin@shifaalhind.com
- **Password:** DemoPass123!

**⚠️ IMPORTANT:** Change this password immediately in production!

## Need Help?

1. Check [Render Documentation](https://render.com/docs)
2. Check [Next.js Documentation](https://nextjs.org/docs)
3. Check [Prisma Documentation](https://www.prisma.io/docs)
4. Open an issue in the GitHub repository

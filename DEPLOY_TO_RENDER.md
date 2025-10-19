# 🚀 Deploy Shifa AlHind to Render - Complete Guide

This guide will help you deploy Shifa AlHind to Render in **under 30 minutes**.

---

## 📋 Prerequisites

Before starting, make sure you have:
- ✅ GitHub repository pushed (https://github.com/imrejaul007/shifaalhind)
- ✅ Render account (sign up at https://render.com)
- ✅ Credit card (required for PostgreSQL, but free tier available)

---

## 🗄️ STEP 1: Create PostgreSQL Database

### 1.1 Navigate to Render Dashboard
1. Go to https://dashboard.render.com
2. Click **"New +"** button (top right)
3. Select **"PostgreSQL"**

### 1.2 Configure Database
Fill in the following:

```
Name: shifaalhind-db
Database: shifaalhind
User: shifaalhind
Region: Oregon (or closest to you)
```

**Plan Options:**
- **Free** - Good for testing (expires after 90 days, 1GB storage)
- **Starter ($7/month)** - Recommended for production (10GB storage)

### 1.3 Create Database
1. Click **"Create Database"**
2. Wait 2-3 minutes for provisioning
3. Database will show "Available" status

### 1.4 Copy Connection String
1. Click on your database name
2. Scroll to **"Connections"** section
3. Copy the **"Internal Database URL"** (starts with `postgresql://`)
4. Save this - you'll need it later!

Example format:
```
postgresql://shifaalhind:PASSWORD@dpg-xxxxx-a.oregon-postgres.render.com/shifaalhind
```

---

## 🌐 STEP 2: Create Web Service

### 2.1 Start New Web Service
1. Go back to Dashboard
2. Click **"New +"** → **"Web Service"**

### 2.2 Connect GitHub Repository

**Option A: First Time**
1. Click **"Connect GitHub"**
2. Authorize Render
3. Select your repository: `imrejaul007/shifaalhind`

**Option B: Already Connected**
1. Select repository from dropdown
2. Choose `imrejaul007/shifaalhind`

### 2.3 Configure Web Service

Fill in these details:

```
Name: shifaalhind
Region: Oregon (same as database)
Branch: main
Root Directory: (leave blank)
Runtime: Node
Build Command: npm install && npx prisma generate && npm run build
Start Command: npm start
```

**Plan:**
- **Free** - For testing (sleeps after 15 min inactivity)
- **Starter ($7/month)** - Recommended (always on, custom domain)

---

## 🔧 STEP 3: Configure Environment Variables

### 3.1 Add Environment Variables

Scroll down to **"Environment Variables"** section.

Click **"Add Environment Variable"** for each:

#### Required Variables:

**1. NODE_ENV**
```
Key: NODE_ENV
Value: production
```

**2. DATABASE_URL**
```
Key: DATABASE_URL
Value: [Paste your Internal Database URL from Step 1.4]
```

**3. NEXTAUTH_URL**
```
Key: NEXTAUTH_URL
Value: https://shifaalhind.onrender.com
```

**4. NEXTAUTH_SECRET**
```
Key: NEXTAUTH_SECRET
Value: [Click "Generate" button - Render will create a secure random string]
```

**5. NEXT_PUBLIC_APP_URL**
```
Key: NEXT_PUBLIC_APP_URL
Value: https://shifaalhind.onrender.com
```

#### Optional (Add Later):

**Email (SendGrid):**
```
EMAIL_FROM=noreply@shifaalhind.com
EMAIL_SERVER_HOST=smtp.sendgrid.net
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=apikey
EMAIL_SERVER_PASSWORD=your-sendgrid-api-key
SENDGRID_API_KEY=your-sendgrid-api-key
```

**AWS S3 (for media):**
```
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_REGION=us-east-1
AWS_S3_BUCKET=shifaalhind-media
```

**Analytics:**
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**WhatsApp (Twilio):**
```
TWILIO_ACCOUNT_SID=your-sid
TWILIO_AUTH_TOKEN=your-token
NEXT_PUBLIC_SUPPORT_WHATSAPP=+971501234567
```

### 3.2 Save Configuration
- Click **"Add Environment Variable"** after each entry
- Verify all required variables are added
- Click **"Create Web Service"**

---

## 🚀 STEP 4: Deploy & Monitor

### 4.1 Watch Deployment
Render will now:
1. ✅ Clone your repository
2. ✅ Install dependencies (~3-5 minutes)
3. ✅ Generate Prisma client
4. ✅ Build Next.js app (~2-4 minutes)
5. ✅ Start the server

**Total time**: ~5-10 minutes

### 4.2 Monitor Logs
Watch the **"Logs"** tab for:
```
==> Starting service...
npm start

> shifa-alhind@1.0.0 start
> next start

   ▲ Next.js 15.0.3
   - Local:        http://localhost:3000
   - Environments: .env

 ✓ Ready in xxxms
```

### 4.3 Check Status
- Status should show **"Live"** (green)
- If you see errors, check logs and troubleshooting section below

---

## 🗃️ STEP 5: Initialize Database

### 5.1 Access Shell
1. Go to your Web Service page
2. Click **"Shell"** tab (top right)
3. Wait for shell to connect

### 5.2 Run Database Migrations

```bash
# Push Prisma schema to database
npx prisma db push

# You should see:
# ✓ Database synchronized
```

### 5.3 Seed Database

```bash
# Seed with sample data
npm run db:seed

# You should see:
# ✅ Created admin user: admin@shifaalhind.com
# ✅ Created country: United Arab Emirates
# ✅ Created city: Dubai
# ✅ Seeding completed successfully!
```

### 5.4 Verify Database (Optional)

```bash
# Open Prisma Studio (in shell)
npx prisma studio

# Or run a quick query
npx prisma db execute --stdin <<EOF
SELECT COUNT(*) FROM "User";
EOF
```

---

## ✅ STEP 6: Verify Deployment

### 6.1 Visit Your Site

Open: **https://shifaalhind.onrender.com**

You should see:
- ✅ Home page loads
- ✅ Header with navigation
- ✅ Featured treatments
- ✅ Footer

### 6.2 Test Health Check

Visit: **https://shifaalhind.onrender.com/api/health**

Should return:
```json
{
  "status": "healthy",
  "timestamp": "2024-10-20T...",
  "services": {
    "database": "connected",
    "api": "operational"
  }
}
```

### 6.3 Test Admin Login

1. Visit: **https://shifaalhind.onrender.com/admin/login**
2. Login with:
   - Email: `admin@shifaalhind.com`
   - Password: `DemoPass123!`
3. ⚠️ **IMPORTANT**: Change this password immediately!

### 6.4 Test Sitemap

Visit: **https://shifaalhind.onrender.com/sitemap.xml**

Should show XML sitemap with your pages.

---

## 🎨 STEP 7: Custom Domain (Optional)

### 7.1 Add Custom Domain
1. Go to Web Service → **"Settings"**
2. Scroll to **"Custom Domain"**
3. Click **"Add Custom Domain"**
4. Enter: `shifaalhind.com` or `www.shifaalhind.com`

### 7.2 Configure DNS
Add these records to your domain registrar:

**For shifaalhind.com:**
```
Type: CNAME
Name: @
Value: shifaalhind.onrender.com
```

**For www.shifaalhind.com:**
```
Type: CNAME
Name: www
Value: shifaalhind.onrender.com
```

### 7.3 Update Environment Variables
After domain is verified:
1. Update `NEXTAUTH_URL` to `https://shifaalhind.com`
2. Update `NEXT_PUBLIC_APP_URL` to `https://shifaalhind.com`
3. Service will auto-redeploy

---

## 🔄 STEP 8: Enable Auto-Deploy

### 8.1 Configure Auto-Deploy
1. Go to Web Service → **"Settings"**
2. Scroll to **"Build & Deploy"**
3. Enable **"Auto-Deploy"** for `main` branch
4. Click **"Save Changes"**

Now, every time you push to `main`, Render will automatically deploy!

### 8.2 Get Deploy Hook (for CI/CD)
1. Scroll to **"Deploy Hook"**
2. Click **"Create Deploy Hook"**
3. Copy the webhook URL
4. Add to GitHub Secrets:
   - Go to GitHub repository → Settings → Secrets
   - Add `RENDER_DEPLOY_HOOK_PRODUCTION`
   - Paste webhook URL

---

## 🔍 Troubleshooting

### Build Fails

**Error**: `Cannot find module 'next'`
```bash
# Solution: Clear build cache
# In Render: Settings → Build & Deploy → Clear build cache
# Then: Manual Deploy → Deploy latest commit
```

**Error**: `Prisma Client not generated`
```bash
# Solution: Ensure build command includes prisma generate
Build Command: npm install && npx prisma generate && npm run build
```

### Database Connection Issues

**Error**: `Can't reach database server`
```bash
# Check:
1. DATABASE_URL is correct (Internal URL, not External)
2. Database and Web Service are in same region
3. Database status is "Available"

# In Shell, test connection:
npx prisma db pull
```

### Site Not Loading

**Error**: `Application failed to respond`
```bash
# Check Logs tab for errors
# Common issues:
1. Port binding - Next.js should use $PORT env variable
2. Build errors - Check build logs
3. Start command incorrect

# Verify start command:
Start Command: npm start
```

### Environment Variables Not Working

```bash
# After adding/changing env vars:
1. Go to "Manual Deploy"
2. Click "Clear build cache & deploy"
3. Wait for redeploy
```

### Health Check Failing

```bash
# In Shell, check:
curl http://localhost:3000/api/health

# If fails:
1. Check API route exists: src/app/api/health/route.ts
2. Check Prisma is working: npx prisma studio
3. Review logs for errors
```

---

## 📊 Monitor Your Deployment

### Metrics Dashboard
Render provides:
- ✅ CPU usage
- ✅ Memory usage
- ✅ Request count
- ✅ Response times

Access: Web Service → **"Metrics"** tab

### Logs
View real-time logs:
- Web Service → **"Logs"** tab
- Filter by: Error, Warning, Info

### Alerts
Set up alerts:
1. Settings → **"Notifications"**
2. Add email or Slack webhook
3. Configure thresholds

---

## 💰 Cost Breakdown

### Starter Setup ($14/month)
```
Web Service (Starter):    $7/month
PostgreSQL (Starter):     $7/month
---------------------------------
Total:                    $14/month
```

### Free Tier (Testing)
```
Web Service (Free):       $0 (with limitations)
PostgreSQL (Free):        $0 (90 days trial)
---------------------------------
Total:                    $0
```

**Free Tier Limitations:**
- ⚠️ Sleeps after 15 min inactivity
- ⚠️ Slower builds
- ⚠️ No custom domains
- ⚠️ Database expires in 90 days

---

## 🎯 Post-Deployment Checklist

### Immediate
- [ ] Site loads at your-app.onrender.com
- [ ] Health check returns "healthy"
- [ ] Admin login works
- [ ] Database seeded successfully
- [ ] Check for errors in logs

### Security
- [ ] Change admin password from demo password
- [ ] Review all environment variables
- [ ] Enable 2FA on Render account
- [ ] Set up backup strategy

### Performance
- [ ] Test page load speeds
- [ ] Check Core Web Vitals
- [ ] Configure CDN (Cloudflare)
- [ ] Enable caching

### SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Verify robots.txt
- [ ] Test structured data
- [ ] Set up Google Analytics

### Monitoring
- [ ] Set up Sentry (error tracking)
- [ ] Configure uptime monitoring
- [ ] Set up log alerts
- [ ] Create backup schedule

---

## 🚀 Next Steps

### Week 1
1. ✅ Deploy to production (you're here!)
2. Monitor for 48 hours
3. Fix any issues
4. Set up custom domain
5. Configure analytics

### Week 2-4
1. Complete page templates
2. Build admin dashboard
3. Generate core content
4. Set up email notifications
5. Implement booking flow

### Month 2
1. Scale to all content (2,550 pages)
2. Arabic translation
3. Hospital/doctor profiles
4. Performance optimization
5. Marketing launch

---

## 📞 Getting Help

### Render Support
- Docs: https://render.com/docs
- Community: https://community.render.com
- Status: https://status.render.com

### Shifa AlHind
- GitHub Issues: https://github.com/imrejaul007/shifaalhind/issues
- Documentation: Check README.md
- Email: support@shifaalhind.com

---

## ✅ Deployment Complete!

Once you see:
- ✅ Status: Live (green)
- ✅ Health check: healthy
- ✅ Admin login: working
- ✅ No errors in logs

**Congratulations! Your Shifa AlHind platform is LIVE! 🎉**

---

**Ready to deploy?** Follow the steps above and your site will be live in ~30 minutes!

**Need help?** Check the troubleshooting section or create a GitHub issue.

Good luck! 🚀

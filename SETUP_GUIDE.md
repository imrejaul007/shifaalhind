# Shifa AlHind - Quick Setup Guide

This guide will help you get Shifa AlHind running in **under 15 minutes**.

## Prerequisites

Make sure you have installed:
- ✅ Node.js 18.17+ ([Download](https://nodejs.org))
- ✅ PostgreSQL ([Download](https://www.postgresql.org/download/) or use [Supabase](https://supabase.com))
- ✅ Git

## Step 1: Get the Code

```bash
# If you have the repository
cd "shifa-alhind"

# Or clone if needed
# git clone <your-repo-url>
# cd shifa-alhind
```

## Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages (~500MB, takes 2-3 minutes).

## Step 3: Set Up Database

### Option A: Local PostgreSQL

1. Create a database:
```bash
createdb shifaalhind
```

2. Copy environment file:
```bash
cp .env.example .env
```

3. Edit `.env` and set your database URL:
```
DATABASE_URL="postgresql://username:password@localhost:5432/shifaalhind?schema=public"
```

### Option B: Supabase (Recommended for Quick Start)

1. Create account at [supabase.com](https://supabase.com)
2. Create new project
3. Copy database URL from Project Settings → Database → Connection String
4. Paste in `.env`:
```
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres?schema=public"
```

## Step 4: Configure Environment

Edit `.env` and set **minimum required** variables:

```bash
# Required
DATABASE_URL="your-database-url"                    # From Step 3
NEXTAUTH_SECRET="your-secret-key"                   # Generate with: openssl rand -base64 32
NEXTAUTH_URL="http://localhost:3000"

# Optional (can add later)
# AWS_ACCESS_KEY_ID=
# AWS_SECRET_ACCESS_KEY=
# SENDGRID_API_KEY=
# etc.
```

## Step 5: Initialize Database

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Seed with sample data
npm run db:seed
```

You should see:
```
✅ Created admin user: admin@shifaalhind.com
✅ Created country: United Arab Emirates
✅ Created city: Dubai
...
```

## Step 6: Start Development Server

```bash
npm run dev
```

Server will start at: http://localhost:3000

## Step 7: Access the Site

### Public Site
Open: http://localhost:3000

You should see the home page with:
- Hero section
- Search bar
- Featured treatments
- Top destinations

### Admin Panel
1. Open: http://localhost:3000/admin/login
2. Login with:
   - Email: `admin@shifaalhind.com`
   - Password: `DemoPass123!`

**🔒 IMPORTANT**: Change this password in production!

## Step 8: Verify Everything Works

Run the health check:
```bash
curl http://localhost:3000/api/health
```

Should return:
```json
{
  "status": "healthy",
  "services": {
    "database": "connected",
    "api": "operational"
  }
}
```

## ✅ You're Ready!

Your Shifa AlHind instance is now running. Next steps:

### For Development
1. Read `/README.md` for full documentation
2. Explore `/src/app/[locale]/page.tsx` to understand page structure
3. Check `/prisma/schema.prisma` for data models
4. Review `/output/audit_report.md` for technical details

### For Content Creation
1. Log into admin panel
2. Create treatments, hospitals, doctors
3. Generate articles
4. Translate to Arabic

### For Deployment
1. Push code to GitHub
2. Connect to Render
3. Follow deployment section in README.md

## Common Issues

### Database Connection Error

**Error**: `Can't reach database server`

**Fix**:
1. Check DATABASE_URL is correct
2. Ensure PostgreSQL is running
3. Test connection: `npx prisma db pull`

### Port Already in Use

**Error**: `Port 3000 is already in use`

**Fix**:
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill

# Or use different port
PORT=3001 npm run dev
```

### Prisma Generate Fails

**Error**: `Prisma schema not found`

**Fix**:
```bash
# Make sure you're in project root
cd /path/to/shifa-alhind

# Regenerate
npx prisma generate
```

### Can't Login to Admin

**Issue**: Invalid credentials

**Fix**:
1. Re-run seed script: `npm run db:seed`
2. Check console for admin user creation
3. Use exact credentials:
   - Email: `admin@shifaalhind.com`
   - Password: `DemoPass123!`

## Next Steps

### Beginner Path
1. ✅ Complete this setup guide
2. Browse the site at localhost:3000
3. Login to admin panel
4. Read the README.md
5. Start with small changes

### Advanced Path
1. ✅ Complete setup
2. Read `/output/audit_report.md`
3. Review `/output/DELIVERABLES.md`
4. Check GitHub Issues for tasks
5. Start contributing

## Need Help?

- 📖 Full docs: `/README.md`
- 🔍 Technical details: `/output/audit_report.md`
- 📋 Deliverables: `/output/DELIVERABLES.md`
- 💬 Create GitHub issue for bugs
- 📧 Email: support@shifaalhind.com

## Quick Reference

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start prod server

# Database
npm run db:seed          # Seed database
npm run db:studio        # Open Prisma Studio
npx prisma migrate dev   # Create migration

# Code Quality
npm run lint             # Check linting
npm run format           # Format code
npm run type-check       # TypeScript check

# Testing
npm test                 # Run unit tests
npm run test:e2e         # Run E2E tests
```

---

**Setup Time**: ~10 minutes
**Difficulty**: Beginner-friendly
**Support**: Available

Happy coding! 🚀

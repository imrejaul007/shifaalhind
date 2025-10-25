# 📊 Google Analytics 4 Setup - Complete Implementation Guide

**Status:** ✅ Code implemented, awaiting user to add Measurement ID
**Time Required:** 30 minutes
**Difficulty:** Easy

---

## 🎯 What's Been Implemented

### **1. Google Analytics 4 Integration** ✅
- **File:** `src/app/layout.tsx` (lines 3, 142-144)
- **Package:** `@next/third-parties/google` (already installed)
- **Status:** Ready to activate with Measurement ID

### **2. Event Tracking Utilities** ✅ NEW
- **File:** `src/lib/analytics.ts` (220 lines)
- **22 tracking functions** for all major conversions and engagements
- **Status:** Ready to use immediately

### **3. Automatic Tracking Hooks** ✅ NEW
- **File:** `src/hooks/use-analytics.ts` (85 lines)
- **Automatic tracking:** Page views, scroll depth, time on page
- **Status:** Ready to integrate into layouts

---

## 📋 Step-by-Step Setup (30 Minutes)

### **Step 1: Create Google Analytics 4 Account (10 minutes)**

1. **Go to Google Analytics:**
   - Visit: https://analytics.google.com
   - Sign in with your Google account

2. **Create Property:**
   - Click "Admin" (gear icon, bottom left)
   - Click "+ Create Property"
   - **Property name:** Shifa AlHind Medical Tourism
   - **Reporting time zone:** India (IST)
   - **Currency:** USD (or INR)
   - Click "Next"

3. **Business Information:**
   - **Industry category:** Health and Fitness
   - **Business size:** Small (1-10 employees)
   - **Usage:** Get baseline reports, Measure customer engagement
   - Click "Create"

4. **Accept Terms of Service:**
   - Select your country: India
   - Accept all terms
   - Click "I Accept"

5. **Choose Platform:**
   - Select "Web"
   - Click "Next"

6. **Set Up Data Stream:**
   - **Website URL:** `https://shifaalhind.onrender.com`
   - **Stream name:** Shifa AlHind Website
   - ✅ Enable "Enhanced measurement" (recommended)
   - Click "Create stream"

7. **Copy Measurement ID:**
   - You'll see a **Measurement ID** like: `G-XXXXXXXXXX`
   - **COPY THIS ID** - you'll need it in Step 2

---

### **Step 2: Add Measurement ID to Your Site (5 minutes)**

1. **Open your `.env` file:**
   ```bash
   cd "/Users/rejaulkarim/Documents/med Shifa al hind"
   nano .env
   ```

2. **Add your Measurement ID:**
   ```bash
   # Analytics & SEO
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # ← Replace with your actual ID
   ```

3. **Save and close:**
   - Press `Ctrl + X`
   - Press `Y` to confirm
   - Press `Enter`

4. **Restart your development server:**
   ```bash
   # Kill current server (Ctrl + C in the terminal running npm run dev)
   npm run dev
   ```

5. **Verify in browser console:**
   - Open your site: http://localhost:3000
   - Open browser DevTools (F12)
   - Go to "Console" tab
   - You should see: `[GA4] Tracking initialized`

---

### **Step 3: Add Environment Variable to Render (5 minutes)**

1. **Go to Render Dashboard:**
   - Visit: https://dashboard.render.com
   - Select your "shifaalhind" service

2. **Go to Environment:**
   - Click "Environment" in left sidebar
   - Click "Add Environment Variable"

3. **Add variable:**
   - **Key:** `NEXT_PUBLIC_GA_ID`
   - **Value:** `G-XXXXXXXXXX` (your Measurement ID)
   - Click "Save Changes"

4. **Trigger deployment:**
   - Render will automatically redeploy with new env var
   - Wait 3-5 minutes for deployment to complete

---

### **Step 4: Verify Tracking is Working (10 minutes)**

1. **Real-Time Test in Google Analytics:**
   - Go to Google Analytics: https://analytics.google.com
   - Select your property: "Shifa AlHind Medical Tourism"
   - Click "Reports" → "Realtime" (in left sidebar)
   - You should see a map and "Users in the last 30 minutes"

2. **Generate test traffic:**
   - Open your production site: https://shifaalhind.onrender.com
   - Click around: home page, blog articles, treatment pages
   - Wait 10-30 seconds

3. **Check Real-Time report:**
   - You should see "1 user by city" on the map
   - "Event count by Event name" section shows events:
     - `page_view`
     - `scroll` (if you scrolled)
     - `click` (if Enhanced Measurement is on)

4. **If you see data:** ✅ Tracking is working!
5. **If you don't see data:** See troubleshooting below

---

## 🎯 Event Tracking Functions Available

### **High-Value Conversions (Track These!):**

```typescript
import {
  trackConsultationClick,
  trackWhatsAppClick,
  trackBookingSubmit,
  trackContactSubmit,
  trackLeadSubmit,
} from '@/lib/analytics';

// Example usage in a component:
<button onClick={() => {
  trackConsultationClick('home-hero');
  // ... rest of your code
}}>
  Get Free Consultation
</button>
```

### **All Available Tracking Functions:**

| Function | Purpose | Value |
|----------|---------|-------|
| `trackConsultationClick(source)` | Free consultation CTA | High |
| `trackWhatsAppClick(source)` | WhatsApp button click | High |
| `trackBookingSubmit(treatment)` | Booking form submission | Highest |
| `trackContactSubmit(formType)` | Contact form submission | Medium |
| `trackLeadSubmit(source)` | Lead form submission | High |
| `trackPhoneClick(source)` | Phone number click | Medium |
| `trackEmailClick(source)` | Email address click | Low |
| `trackTreatmentView(name)` | Treatment page view | Medium |
| `trackHospitalView(name)` | Hospital page view | Medium |
| `trackArticleRead(title)` | Article read (50%+ scroll) | Medium |
| `trackSearch(query, count)` | Search query | Low |
| `trackNewsletterSignup(source)` | Newsletter subscription | Medium |
| `trackDownload(fileName)` | File download | Low |
| `trackVideoPlay(title)` | Video play | Medium |
| `trackOutboundLink(url, text)` | External link click | Low |
| `trackScrollDepth(%, path)` | Scroll milestone | Low |
| `trackTimeOnPage(seconds, path)` | Time on page | Low |
| `trackSocialShare(platform, url)` | Social media share | Medium |
| `trackError(type, message)` | Error occurrence | Critical |

---

## 🔧 How to Add Tracking to Your Pages

### **Option 1: Automatic Tracking (Recommended)**

Add to your main layout for site-wide tracking:

```typescript
// src/app/[locale]/layout.tsx
'use client';

import { useAnalytics } from '@/hooks/use-analytics';

export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  useAnalytics(); // Automatically tracks page views, scroll, time on page

  return <>{children}</>;
}
```

### **Option 2: Manual Event Tracking**

Add to specific buttons and forms:

```typescript
'use client';

import { trackConsultationClick, trackWhatsAppClick } from '@/lib/analytics';

export default function CTASection() {
  return (
    <div>
      <button
        onClick={() => trackConsultationClick('footer')}
        className="..."
      >
        Free Consultation
      </button>

      <a
        href="https://wa.me/971501234567"
        onClick={() => trackWhatsAppClick('footer')}
        className="..."
      >
        WhatsApp Us
      </a>
    </div>
  );
}
```

### **Option 3: Form Submission Tracking**

```typescript
'use client';

import { trackBookingSubmit, trackContactSubmit } from '@/lib/analytics';

export default function BookingForm() {
  const handleSubmit = async (formData) => {
    try {
      // Submit form to API
      const response = await fetch('/api/v1/lead', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Track successful submission
        trackBookingSubmit(formData.treatment);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return <form onSubmit={handleSubmit}>...</form>;
}
```

---

## 📈 Google Analytics 4 Dashboard Setup

### **Step 1: Create Custom Conversions**

1. **Go to Admin → Events:**
   - Click "Admin" (gear icon)
   - Under "Data display" → Click "Events"

2. **Mark events as conversions:**
   - Find these events (they'll appear after you track them):
     - `booking_submit` ← Mark as conversion ⭐
     - `consultation_click` ← Mark as conversion ⭐
     - `contact_submit` ← Mark as conversion ⭐
     - `whatsapp_click` ← Mark as conversion ⭐
     - `lead_submit` ← Mark as conversion ⭐
   - Toggle "Mark as conversion" for each

3. **Wait 24-48 hours for data to populate**

---

### **Step 2: Create Custom Reports**

#### **Conversion Report:**

1. Go to "Reports" → "Engagement" → "Conversions"
2. You'll see all conversion events with counts
3. Add to your dashboard

#### **Traffic Sources Report:**

1. Go to "Reports" → "Acquisition" → "Traffic acquisition"
2. See which channels drive the most traffic:
   - Organic Search (Google, Bing)
   - Direct (typed URL, bookmarks)
   - Referral (other websites)
   - Social (Facebook, LinkedIn, etc.)

#### **Page Performance Report:**

1. Go to "Reports" → "Engagement" → "Pages and screens"
2. See which pages get the most views:
   - Blog articles
   - Treatment pages
   - Country landing pages

---

## 🎯 Goals & Conversion Tracking

### **Primary Goals (Set These Up):**

1. **Booking Submissions:**
   - Event: `booking_submit`
   - Value: $500 (average commission)
   - Goal: 10+ per month

2. **Consultation Requests:**
   - Event: `consultation_click`
   - Value: $50 (potential value)
   - Goal: 50+ per month

3. **WhatsApp Chats:**
   - Event: `whatsapp_click`
   - Value: $30 (engagement value)
   - Goal: 100+ per month

4. **Contact Form Submissions:**
   - Event: `contact_submit`
   - Value: $25
   - Goal: 30+ per month

5. **Newsletter Signups:**
   - Event: `newsletter_signup`
   - Value: $10 (future potential)
   - Goal: 100+ per month

---

## 📊 Reports to Monitor Weekly

### **1. Real-Time Report:**
- Go to: Reports → Realtime
- See live visitors on your site right now
- Use to verify tracking is working

### **2. Traffic Overview:**
- Go to: Reports → Acquisition → Traffic acquisition
- See where visitors come from
- Monitor growth in "Organic Search" (SEO working!)

### **3. Page Views:**
- Go to: Reports → Engagement → Pages and screens
- See most popular pages
- Identify high-performing content

### **4. Conversions:**
- Go to: Reports → Engagement → Conversions
- See conversion counts
- Calculate conversion rate (conversions / sessions)

### **5. Demographics:**
- Go to: Reports → User → Demographics
- See visitor countries, cities
- Verify GCC countries are visiting

---

## 🔍 Troubleshooting

### **Problem: "No data showing in Real-Time report"**

**Solutions:**

1. **Check Measurement ID:**
   ```bash
   cat .env | grep NEXT_PUBLIC_GA_ID
   # Should show: NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

2. **Check browser console:**
   - Open DevTools (F12)
   - Look for errors with "gtag" or "analytics"
   - Should see successful network requests to `google-analytics.com`

3. **Disable ad blockers:**
   - Ad blockers block Google Analytics
   - Disable temporarily to test
   - Or use Incognito mode

4. **Verify script is loading:**
   - View page source (Ctrl+U)
   - Search for "gtag" or your Measurement ID
   - Should see `<script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX">`

5. **Check server restart:**
   - Restart dev server after adding env var
   - Clear browser cache (Ctrl+Shift+Delete)

---

### **Problem: "Events not showing up"**

**Solutions:**

1. **Wait 24-48 hours:**
   - New events take time to appear in reports
   - Real-time events appear instantly
   - Historical reports update daily

2. **Check event name:**
   - Event names are case-sensitive
   - Use exact names from `src/lib/analytics.ts`

3. **Verify function is called:**
   - Add console.log before trackEvent call:
   ```typescript
   console.log('Tracking consultation click');
   trackConsultationClick('hero');
   ```

---

### **Problem: "Conversion rate is 0%"**

**Solutions:**

1. **Mark events as conversions:**
   - Admin → Events → Toggle "Mark as conversion"

2. **Wait for data:**
   - Need at least 10-20 sessions for accurate rate

3. **Check conversion setup:**
   - Conversions page should show events
   - If not, recreate conversion

---

## 📚 Next Steps After Setup

### **Week 1:**
- [ ] Verify tracking is working (Real-Time report)
- [ ] Mark 5 events as conversions
- [ ] Share site link to generate test traffic

### **Week 2:**
- [ ] Review first week's data
- [ ] Identify top traffic sources
- [ ] Check conversion rates

### **Month 1:**
- [ ] Create custom dashboard
- [ ] Set up email reports (weekly summary)
- [ ] Compare to SEO goals (from 6-month plan)

### **Month 3:**
- [ ] Analyze which blog articles drive traffic
- [ ] Optimize low-performing pages
- [ ] A/B test CTAs with different copy

---

## 🎯 Expected Results Timeline

### **Week 1:**
- **Sessions:** 10-50
- **Conversions:** 1-3
- **Top source:** Direct traffic

### **Month 1:**
- **Sessions:** 200-500
- **Conversions:** 10-20
- **Top source:** Organic search (starting)

### **Month 3:**
- **Sessions:** 1,000-2,000
- **Conversions:** 30-60
- **Top source:** Organic search (60%+)

### **Month 6:**
- **Sessions:** 5,000-10,000
- **Conversions:** 150-300
- **Conversion rate:** 3-4%
- **Revenue:** $20K-$35K (tracked via conversion values)

---

## 💡 Pro Tips

### **1. Set Up Weekly Email Reports:**
- Admin → Property Settings → Email Reports
- Get weekly summary in your inbox
- Track progress without logging in

### **2. Create Annotations:**
- When you launch new features or campaigns
- Mark dates in GA4 for reference
- "Launched 5 new blog articles (Batch 1)"

### **3. Use UTM Parameters:**
- For social media posts: `?utm_source=facebook&utm_medium=social&utm_campaign=blog-launch`
- Track which campaigns drive traffic
- See in Acquisition reports

### **4. Link Google Search Console:**
- Admin → Product Links → Search Console
- See search queries that bring traffic
- Compare GA4 and GSC data

### **5. Set Up Alerts:**
- Admin → Custom Alerts
- Get notified when traffic spikes or drops
- Early warning for issues

---

## 📁 Files Modified/Created

### **Created:**
1. `src/lib/analytics.ts` (220 lines) - Event tracking functions
2. `src/hooks/use-analytics.ts` (85 lines) - Automatic tracking hooks
3. `GOOGLE_ANALYTICS_SETUP_COMPLETE.md` (this file)

### **Already Implemented:**
- `src/app/layout.tsx` (lines 3, 142-144) - GA4 integration

---

## ✅ Setup Checklist

Use this checklist to verify everything is set up:

- [ ] Created Google Analytics 4 property
- [ ] Copied Measurement ID (G-XXXXXXXXXX)
- [ ] Added `NEXT_PUBLIC_GA_ID` to `.env`
- [ ] Added `NEXT_PUBLIC_GA_ID` to Render environment variables
- [ ] Restarted development server
- [ ] Verified tracking in Real-Time report (saw 1+ user)
- [ ] Marked 5 key events as conversions
- [ ] Tested consultation click tracking
- [ ] Tested WhatsApp click tracking
- [ ] Created custom dashboard
- [ ] Set up weekly email reports

---

## 🎉 You're All Set!

Once you complete the 4 setup steps above, Google Analytics 4 will:

✅ **Track all page views automatically**
✅ **Track scroll depth and time on page**
✅ **Track all conversions when you add event functions to buttons**
✅ **Show real-time visitor data**
✅ **Generate traffic and conversion reports**
✅ **Help optimize your SEO and marketing**

**Expected Impact:**
- Data-driven decisions (know what's working)
- Higher conversion rates (optimize CTAs)
- Better SEO (identify top-performing content)
- Revenue tracking (calculate ROI)

---

**Next Action:** Follow Step 1-4 above to activate tracking (30 minutes total)

**Questions?** All tracking code is ready - just need your Measurement ID!

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>

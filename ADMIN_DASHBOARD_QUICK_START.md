# 🚀 Admin Dashboard Quick Start Guide

**Welcome to Shifa AlHind Admin Dashboard!**

This guide will help you quickly understand and use all admin features.

---

## 🔐 **Login**

**URL:** http://localhost:3003/admin/login (local) or https://shifaalhind.onrender.com/admin/login (production)

**Credentials:**
- Email: `admin@shifaalhind.com`
- Password: `DemoPass123!`

---

## 📊 **Dashboard Overview**

After login, you'll see the admin dashboard with a sidebar navigation containing 10 menu items:

### **Navigation Items:**

1. **Dashboard** - Overview and stats
2. **Bookings** - Patient booking management
3. **Hospitals** - Hospital directory management
4. **Doctors** - Doctor profiles management
5. **Packages** - Medical packages management
6. **Treatments** - Treatment types management ✨ NEW!
7. **Cities** - City locations management ✨ NEW!
8. **Articles** - Blog articles management ✨ NEW!
9. **Users** - User management (future)
10. **Settings** - System settings (future)

---

## 🏥 **1. HOSPITALS MANAGEMENT**

**URL:** `/admin/hospitals`

### **What You Can Do:**

✅ View all hospitals with ratings and review counts
✅ Create new hospital
✅ Edit existing hospital
✅ Delete hospital (with validation)

### **Hospital Fields:**

**Basic Info:**
- Name (EN/AR)
- Slug (auto from name)
- City (select from dropdown)
- Address (EN/AR)
- Phone, Email, Website

**Accreditation & Specialties:**
- Accreditations (comma-separated: JCI, NABH, ISO)
- Specialties (comma-separated: Cardiology, Oncology, etc.)
- Languages spoken (comma-separated: English, Hindi, Arabic)

**Content:**
- About hospital (EN/AR) - textarea
- Facilities (EN/AR) - textarea
- Logo URL (Cloudinary)
- Images gallery (multiple URLs)

**Ratings:**
- Rating (0-5)
- Review count

**Status:**
- Published (checkbox)
- Featured (checkbox)

### **Create New Hospital:**

1. Click "Add New Hospital" button
2. Fill required fields (name, city, address, phone, email)
3. Add accreditations (comma-separated)
4. Add specialties (comma-separated)
5. Add about content
6. Set published status
7. Click "Create Hospital"

### **Edit Hospital:**

1. Click "Edit" button on any hospital row
2. Update any field
3. Click "Update Hospital"

### **Delete Hospital:**

1. Click "Delete" button on any hospital row
2. Confirm deletion
3. If hospital has doctors → **ERROR** "Cannot delete hospital that has doctors"
4. Solution: Delete doctors first, then hospital

### **Sample Data:**

After seeding, you'll see:
- Apollo Hospital Mumbai (4.8/5, 1,250 reviews)
- Fortis Hospital New Delhi (4.7/5, 980 reviews)
- Manipal Hospital Bangalore (4.6/5, 850 reviews)

---

## 👨‍⚕️ **2. DOCTORS MANAGEMENT**

**URL:** `/admin/doctors`

### **What You Can Do:**

✅ View all doctors with hospital affiliations
✅ Create new doctor
✅ Edit existing doctor
✅ Delete doctor

### **Doctor Fields:**

**Basic Info:**
- Name (EN/AR)
- Slug (auto from name)
- Title (select: Dr., Prof., etc.)
- Hospital (select from dropdown - auto-populated)

**Specialization:**
- Specialties (comma-separated: Cardiac Surgery, Neurology)
- Qualifications (comma-separated: MBBS, MD, Fellowship)
- Experience (years)
- Languages (comma-separated: English, Hindi, Arabic)

**Content:**
- Bio/About (EN/AR) - textarea
- Profile image URL (Cloudinary)

**Consultation:**
- Consultation fee (USD)
- Available (checkbox)

**Ratings:**
- Rating (0-5)
- Review count

**Status:**
- Published (checkbox)
- Featured (checkbox)

### **Create New Doctor:**

1. Click "Add New Doctor" button
2. Fill name and select hospital (dropdown auto-populated)
3. Add specialties and qualifications
4. Enter experience years
5. Add bio content
6. Set consultation fee
7. Click "Create Doctor"

### **Sample Data:**

After seeding, you'll see:
- Dr. Rajesh Kumar - Cardiac Surgeon @ Apollo (4.9/5, $100)
- Dr. Priya Sharma - Neurologist @ Fortis (4.8/5, $90)
- Dr. Arun Menon - Orthopedic Surgeon @ Manipal (4.9/5, $120)
- Dr. Fatima Ali - Fertility Specialist @ Manipal (4.8/5, $80)

---

## 📦 **3. PACKAGES MANAGEMENT**

**URL:** `/admin/packages`

### **What You Can Do:**

✅ View all medical packages with pricing
✅ Create new package
✅ Edit existing package
✅ Delete package

### **Package Fields:**

**Basic Info:**
- Name (EN/AR)
- Slug (auto from name)
- Treatment (select from dropdown)
- Hospital (select from dropdown)

**Pricing:**
- Price estimate (USD)
- Currency (select: USD, EUR, GBP, AED, SAR)
- Duration (days)

**Content:**
- Description (EN/AR) - textarea
- Items included (EN/AR) - one per line, displayed as bullets

**Status:**
- Published (checkbox)
- Featured (checkbox)

### **Create New Package:**

1. Click "Add New Package" button
2. Enter package name
3. Select treatment from dropdown
4. Select hospital from dropdown
5. Enter price estimate and duration
6. Add description
7. Add items included (one per line)
8. Click "Create Package"

### **Items Format:**

Each line becomes a bullet point. Example:
```
Pre-surgery consultation and evaluation
Cardiac surgery (CABG/Valve Replacement)
7 days ICU care
10 days hospital stay
Post-surgery follow-up consultations
```

Displays as:
- ✅ Pre-surgery consultation and evaluation
- ✅ Cardiac surgery (CABG/Valve Replacement)
- ✅ 7 days ICU care
- ✅ 10 days hospital stay
- ✅ Post-surgery follow-up consultations

### **Sample Data:**

- Complete Heart Surgery Package - $8,500 (14 days)
- Total Knee Replacement Package - $6,000 (10 days)
- IVF & Fertility Treatment Package - $4,500 (21 days)

---

## 💊 **4. TREATMENTS MANAGEMENT** ✨ NEW!

**URL:** `/admin/treatments`

### **What You Can Do:**

✅ View all treatment types with cost ranges
✅ Create new treatment
✅ Edit existing treatment
✅ Delete treatment (with validation)

### **Treatment Fields:**

**Basic Info:**
- Title (EN/AR)
- Slug (auto from title)
- Category (EN/AR) - e.g., Cardiology, Orthopedics, Fertility

**Summary:**
- Summary (EN/AR) - brief description

**Cost & Duration:**
- Cost Min (USD)
- Cost Max (USD)
- Currency (select: USD, EUR, GBP, AED, SAR)
- Duration (e.g., "10-14 days")
- Recovery (e.g., "4-6 weeks")

**SEO:**
- Keywords (EN/AR) - comma-separated
- SEO Title (EN/AR)
- SEO Description (EN/AR)

**Status:**
- Published (checkbox)
- Featured (checkbox)

### **Create New Treatment:**

1. Click "Add New Treatment" button
2. Enter title (e.g., "Dental Implants")
3. Enter category (e.g., "Dentistry")
4. Add summary
5. Enter cost range ($3,000 - $8,000)
6. Add duration and recovery time
7. Add keywords (comma-separated: dental, implants, teeth)
8. Add SEO title and description
9. Click "Create Treatment"

### **Delete Treatment:**

**IMPORTANT:** Delete validation checks if treatment is used by:
- City-treatment combinations
- Packages
- Bookings

If treatment is referenced → **ERROR** with counts:
```
Cannot delete treatment that is referenced
Details:
- cityTreatments: 5
- packages: 2
- bookings: 10
```

**Solution:** Delete dependent entities first

### **Sample Data:**

- Heart Surgery ($5,000 - $15,000, 10-14 days)
- Knee Replacement ($4,000 - $8,000, 7-10 days)
- IVF & Fertility Treatment ($3,000 - $6,000, 3-4 weeks)

---

## 🌍 **5. CITIES MANAGEMENT** ✨ NEW!

**URL:** `/admin/cities`

### **What You Can Do:**

✅ View all cities with relation counts
✅ Create new city
✅ Edit existing city
✅ Delete city (with validation)

### **City Fields:**

**Basic Info:**
- Name (EN/AR)
- Slug (auto from name)
- Country (select from dropdown - auto-populated)
- Timezone (e.g., Asia/Dubai, Asia/Kolkata)

**Location:**
- Latitude (decimal: 25.2048)
- Longitude (decimal: 55.2708)

**Content:**
- Introduction (EN/AR) - textarea for landing pages

**SEO:**
- Keywords (EN/AR) - comma-separated
- SEO Title (EN/AR)
- SEO Description (EN/AR)
- Priority (0-100) - sitemap importance

**Status:**
- Published (checkbox)

### **Create New City:**

1. Click "Add New City" button
2. Enter city name (e.g., "Abu Dhabi")
3. Select country from dropdown (e.g., "United Arab Emirates")
4. Enter timezone (e.g., "Asia/Dubai")
5. Enter coordinates (use Google Maps)
6. Add introduction content
7. Add keywords
8. Set priority (80-90 for major cities)
9. Click "Create City"

### **Finding Coordinates:**

1. Go to Google Maps
2. Search for the city
3. Right-click on city center
4. Click coordinates to copy (e.g., "25.2048, 55.2708")
5. First number = Latitude, Second = Longitude

### **Delete City:**

**IMPORTANT:** Delete validation checks if city has:
- Hospitals
- City-treatment combinations
- Articles

If city is referenced → **ERROR** with counts

### **Relation Counts:**

The listing page shows:
- **Hospitals:** Number of hospitals in this city
- **Treatments:** Number of city-treatment combinations
- **Articles:** Number of blog articles about this city

### **Sample Data:**

GCC Cities (for patients):
- Dubai, UAE (3 articles, 3 treatments)
- Riyadh, Saudi Arabia (3 articles, 3 treatments)
- Doha, Qatar (3 articles, 3 treatments)

Indian Cities (for hospitals):
- Mumbai, India (1 hospital - Apollo)
- New Delhi, India (1 hospital - Fortis)
- Bangalore, India (1 hospital - Manipal)

---

## 📝 **6. ARTICLES MANAGEMENT** ✨ NEW!

**URL:** `/admin/articles`

### **What You Can Do:**

✅ View all blog articles with review status
✅ Create new article
✅ Edit existing article
✅ Delete article

### **Article Fields:**

**Basic Info:**
- Title (EN/AR)
- Slug (auto from title)
- City-Treatment (select from dropdown - shows "City - Treatment")

**Content:**
- Excerpt (EN/AR) - short preview (150-200 chars)
- Content (EN/AR) - full article (textarea)
- Thumbnail URL (Cloudinary)

**SEO:**
- Keywords (EN/AR) - comma-separated
- SEO Title (EN/AR)
- SEO Description (EN/AR)

**Publishing:**
- Published (checkbox)
- Publish Date (date picker)
- Priority (0-100) - sitemap importance

**Review Workflow:**
- Needs Native Review (checkbox) - for language/translation review
- Needs Medical Review (checkbox) - for medical accuracy review

### **Create New Article:**

1. Click "Add New Article" button
2. Enter title (e.g., "Complete Guide to Heart Surgery in India")
3. Select city-treatment combo (e.g., "Dubai - Heart Surgery")
4. Write excerpt (preview text)
5. Write full content (main article)
6. Add thumbnail URL
7. Add keywords
8. Add SEO metadata
9. Set publish date
10. Check review flags if needed
11. Click "Create Article"

### **City-Treatment Selection:**

The dropdown shows combinations like:
- Dubai - Heart Surgery
- Dubai - Knee Replacement
- Dubai - IVF & Fertility Treatment
- Riyadh - Heart Surgery
- Riyadh - Knee Replacement
- ... (all combinations)

When you select a city-treatment, the **cityId** is automatically set.

### **Review Status Badges:**

Articles display colored badges:
- 🟡 **Native Review** (yellow) - Needs language/translation check
- 🟠 **Medical Review** (orange) - Needs medical accuracy check
- 🟢 **Published** (green) - Published and live
- ⚪ **Draft** (gray) - Not published yet

### **Sample Data:**

After seeding, you'll see 27 articles:
- 3 articles per city-treatment combo
- 9 city-treatment combos (3 cities × 3 treatments)
- Total: 27 articles

Example:
- "Heart Surgery in India: Complete Guide for Dubai Patients (Part 1)"
- "Heart Surgery in India: Complete Guide for Dubai Patients (Part 2)"
- "Heart Surgery in India: Complete Guide for Dubai Patients (Part 3)"

---

## 📋 **7. BOOKINGS MANAGEMENT**

**URL:** `/admin/bookings`

### **What You Can Do:**

✅ View all patient bookings
✅ Update booking status
✅ Add internal notes
✅ Delete booking

### **Booking Status Flow:**

1. **PENDING** (yellow) - Initial submission
2. **CONTACTED** (blue) - First contact made
3. **CONSULTATION_SCHEDULED** (purple) - Consultation booked
4. **DOCUMENTS_REQUESTED** (indigo) - Requested medical docs
5. **DOCUMENTS_RECEIVED** (teal) - Received all documents
6. **QUOTE_SENT** (cyan) - Price quote sent
7. **CONFIRMED** (green) - Booking confirmed
8. **CANCELLED** (red) - Booking cancelled
9. **COMPLETED** (gray) - Treatment completed

### **View Booking Details:**

1. Click "View" button (Eye icon) on any booking
2. See patient information:
   - Name, email, phone
   - Country and city
   - Treatment/package requested
   - Preferred date
   - Message
3. See booking metadata:
   - Booking ID
   - Status
   - Created/updated timestamps

### **Update Status:**

1. Click "View" on a booking
2. Select new status from dropdown
3. Click "Update Status" button
4. Status updated immediately

### **Add Notes:**

1. Click "View" on a booking
2. Scroll to "Internal Notes" section
3. Type note in textarea
4. Click "Add Note" button
5. Note appears with your name and timestamp

**Notes Display:**
```
Rejaul Karim - Oct 24, 2025 at 3:45 PM
Patient confirmed documents will be sent by email tomorrow.
```

### **Delete Booking:**

1. Click "View" on a booking
2. Scroll to bottom
3. Click "Delete Booking" button
4. Confirm deletion

---

## 🎨 **DESIGN SYSTEM**

### **Colors:**

**Status Badges:**
- Yellow: PENDING, Native Review
- Blue: CONTACTED
- Purple: CONSULTATION_SCHEDULED
- Indigo: DOCUMENTS_REQUESTED
- Teal: DOCUMENTS_RECEIVED
- Cyan: QUOTE_SENT
- Green: CONFIRMED, Published
- Red: CANCELLED
- Orange: Medical Review
- Gray: COMPLETED, Draft

### **Buttons:**

- **Primary** (Emerald) - Create, Save, Update actions
- **Secondary** (Gray) - Cancel, Back actions
- **Danger** (Red) - Delete actions
- **Info** (Blue) - View, Details actions

### **Icons:**

- LayoutDashboard - Dashboard
- FileText - Bookings
- Building2 - Hospitals
- UserRound - Doctors
- Package - Packages
- Stethoscope - Treatments
- MapPin - Cities
- BookOpen - Articles
- Users - Users
- Settings - Settings

---

## 📱 **MOBILE MENU**

### **How to Use:**

1. **Open:** Click hamburger menu icon (☰) in top-left
2. **Navigate:** Click any menu item
3. **Close:** Click X icon or click outside sidebar

The mobile menu includes all 10 navigation items and works the same as desktop.

---

## 💡 **PRO TIPS**

### **1. Comma-Separated Fields:**

For fields like keywords, specialties, accreditations:
- Use commas to separate values
- Spaces after commas are optional
- Example: `JCI, NABH, ISO 9001` or `JCI,NABH,ISO 9001`

### **2. Slug Generation:**

Slugs are auto-generated from names/titles:
- "Heart Surgery" → `heart-surgery`
- "Apollo Hospital Mumbai" → `apollo-hospital-mumbai`

### **3. Bilingual Content:**

Always fill both EN (English) and AR (Arabic) fields:
- Improves SEO
- Better user experience
- Required for multilingual site

### **4. SEO Best Practices:**

**Keywords:**
- Use 5-10 relevant keywords
- Include location keywords (city, country)
- Include treatment keywords
- Example: `heart surgery, cardiac care, Mumbai, India, affordable`

**SEO Title:**
- 50-60 characters
- Include primary keyword
- Include location
- Example: "Heart Surgery in Mumbai | Apollo Hospital | Affordable Care"

**SEO Description:**
- 150-160 characters
- Include call-to-action
- Include benefits
- Example: "Get world-class heart surgery in Mumbai at Apollo Hospital. Save up to 70% with expert care. Free consultation. Book now!"

### **5. Image URLs:**

For now, use placeholder URLs:
- `https://via.placeholder.com/400x400` (logo)
- `https://via.placeholder.com/800x600` (thumbnail)

After Cloudinary setup, upload real images and use those URLs.

### **6. Delete Validation:**

Before deleting, check if entity is referenced:

**Can Delete:**
- Doctor with no packages/bookings
- Package with no bookings
- Article (no dependencies)

**Cannot Delete:**
- Hospital with doctors
- Treatment with packages or city-treatments
- City with hospitals or articles

**Solution:** Delete dependent entities first

### **7. Review Workflow:**

For articles:
1. Create article with review flags checked
2. Content team reviews (Native Review)
3. Medical team reviews (Medical Review)
4. Uncheck flags when reviews complete
5. Publish article

---

## 🔍 **SEARCH & FILTERS**

### **In Listing Pages:**

Most listing pages have:
- Search bar (by name/title)
- Status filter (Published/Draft)
- Sort options (by date, name, rating)

### **In Forms:**

Dropdowns are auto-populated:
- **Hospitals:** Country → Cities dropdown
- **Doctors:** All hospitals dropdown
- **Packages:** Treatments and hospitals dropdowns
- **Articles:** City-treatments dropdown

---

## 🚨 **ERROR MESSAGES**

### **Common Errors:**

**"Unauthorized"**
- You're not logged in or session expired
- Solution: Login again

**"Cannot delete X that has Y"**
- Entity has dependent records
- Solution: Delete dependencies first or reassign them

**"Validation failed"**
- Required field missing
- Invalid format (email, phone, URL)
- Solution: Check all required fields

**"Server error"**
- Database connection issue
- API endpoint error
- Solution: Check browser console, contact support

---

## 📚 **KEYBOARD SHORTCUTS**

Currently not implemented, but planned:
- `Ctrl+S` - Save form
- `Ctrl+K` - Open search
- `Esc` - Close modal/sidebar

---

## 🎯 **BEST PRACTICES**

### **1. Content Entry:**

- **Be consistent** with naming conventions
- **Use proper grammar** and punctuation
- **Fill all SEO fields** for better ranking
- **Add realistic data** (ratings, prices, durations)

### **2. Data Integrity:**

- **Don't delete** entities with dependencies
- **Check dependencies** before deletion
- **Use featured flag** sparingly (3-5 items max)
- **Keep slugs unique** (auto-generated, but check)

### **3. Performance:**

- **Don't upload huge images** (optimize before upload)
- **Use reasonable text lengths** (descriptions < 500 words)
- **Limit package items** (10-15 items max)

### **4. Security:**

- **Don't share admin credentials** publicly
- **Log out** when finished
- **Change password** regularly
- **Use strong passwords** (12+ chars, mixed case, symbols)

---

## 🆘 **GETTING HELP**

### **Documentation:**

- `PRODUCTION_READINESS_CHECKLIST.md` - Complete checklist
- `RENDER_DEPLOYMENT_COMPLETE.md` - Deployment guide
- `CLOUDINARY_SETUP_GUIDE.md` - Image upload setup
- `ENV_SETUP.md` - Environment variables

### **Support:**

- **Issues:** https://github.com/imrejaul007/shifaalhind/issues
- **Logs:** Check browser console (F12) for errors
- **Render Logs:** Check Render Dashboard → Logs

---

## 📊 **SAMPLE WORKFLOW**

### **Adding a New Hospital:**

1. Navigate to `/admin/hospitals`
2. Click "Add New Hospital"
3. Fill required fields:
   - Name: "Max Hospital Delhi"
   - City: Select "New Delhi"
   - Address: "1, Press Enclave Road, Saket, New Delhi"
   - Phone: "+91-11-26515050"
   - Email: "info@maxhealthcare.com"
   - Website: "https://www.maxhealthcare.in"
4. Add accreditations: `JCI, NABH`
5. Add specialties: `Cardiac Sciences, Oncology, Neurosciences`
6. Add languages: `English, Hindi`
7. Write about content (200-300 words)
8. Check "Published"
9. Click "Create Hospital"
10. Hospital created! ✅

### **Adding a Doctor to Hospital:**

1. Navigate to `/admin/doctors`
2. Click "Add New Doctor"
3. Fill fields:
   - Name: "Dr. Amit Singh"
   - Hospital: Select "Max Hospital Delhi"
   - Title: "Dr."
   - Specialties: `Cardiac Surgery, Minimally Invasive Surgery`
   - Qualifications: `MBBS, MS Cardiac Surgery, Fellowship Harvard`
   - Experience: 15
   - Languages: `English, Hindi`
   - Consultation Fee: 120
4. Write bio (200-300 words)
5. Check "Published" and "Available"
6. Click "Create Doctor"
7. Doctor created and linked to hospital! ✅

### **Creating a Package:**

1. Navigate to `/admin/packages`
2. Click "Add New Package"
3. Fill fields:
   - Name: "Complete Cardiac Care Package"
   - Treatment: Select "Heart Surgery"
   - Hospital: Select "Max Hospital Delhi"
   - Price: 9500
   - Currency: USD
   - Duration: 12
4. Write description
5. Add items (one per line):
   ```
   Cardiac consultation and evaluation
   Angiography and stress tests
   Bypass surgery or valve replacement
   5 days ICU care
   7 days hospital stay
   Post-surgery follow-ups
   Airport pickup and drop
   Medical coordinator support
   ```
6. Check "Published"
7. Click "Create Package"
8. Package created! ✅

---

**You're now ready to manage the Shifa AlHind platform! 🎉**

For any issues or questions, check the documentation or contact support.

---

Generated by Claude Code
Last Updated: October 24, 2025

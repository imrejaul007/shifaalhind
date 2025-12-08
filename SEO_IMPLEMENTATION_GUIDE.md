# 🚀 SEO Implementation Guide - Quick Technical Wins

**Date:** December 8, 2025
**Focus:** Implementing SEO improvements that don't require Google account or custom domain
**Timeline:** Can be completed in 1-2 days

---

## 📋 Table of Contents

1. [Breadcrumb Schema Implementation](#1-breadcrumb-schema-implementation)
2. [Article Schema for Blog Posts](#2-article-schema-for-blog-posts)
3. [Medical Procedure Schema for Treatments](#3-medical-procedure-schema-for-treatments)
4. [Image Alt Tag Audit](#4-image-alt-tag-audit)
5. [Arabic Translation Checklist](#5-arabic-translation-checklist)
6. [Automation Scripts](#6-automation-scripts)

---

## 1. Breadcrumb Schema Implementation

### Status: ✅ **Generator Function Already Exists**

**Location:** `src/lib/seo.ts` (line 88-99)

### Implementation Strategy:

#### Option A: Manual Implementation (Recommended for Learning)

**Step 1:** Create a reusable Breadcrumb component

Create: `src/components/seo/breadcrumb-schema.tsx`

```tsx
/**
 * Breadcrumb Schema Component
 * Generates structured data for breadcrumb navigation
 */

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

**Step 2:** Add to Treatment Pages

Example for `src/app/[locale]/treatments/heart-surgery-india/page.tsx`:

```tsx
import { BreadcrumbSchema } from '@/components/seo/breadcrumb-schema';

export default function HeartSurgeryPage() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://shifaalhind.onrender.com';

  const breadcrumbs = [
    { name: 'Home', url: baseUrl },
    { name: 'Treatments', url: `${baseUrl}/treatments` },
    { name: 'Heart Surgery', url: `${baseUrl}/treatments/heart-surgery-india` }
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Existing page content */}
    </>
  );
}
```

**Step 3:** Pages That Need Breadcrumbs

1. **Treatment Pages (40+):** Home > Treatments > [Treatment Name]
2. **Hospital Pages:** Home > Hospitals > [Hospital Name]
3. **Doctor Pages:** Home > Doctors > [Specialty] > [Doctor Name]
4. **Blog Articles:** Home > Blog > [Article Title]
5. **City Guides:** Home > Medical Tourism > [Country] > [City]
6. **Package Pages:** Home > Packages > [Package Name]

---

#### Option B: Automated Implementation (Faster)

**Create:** `add-breadcrumb-schema.js`

```javascript
const fs = require('fs');
const path = require('path');

// Treatment pages breadcrumb data
const treatments = {
  'heart-surgery-india': 'Heart Surgery',
  'kidney-stone-treatment-india': 'Kidney Stone Treatment',
  'dental-implants-india': 'Dental Implants',
  'hair-transplant-india': 'Hair Transplant',
  'ivf-fertility-treatment-india': 'IVF & Fertility Treatment',
  // ... add all 40+ treatments
};

const baseUrl = 'https://shifaalhind.onrender.com';

function addBreadcrumbToTreatmentPage(slug, treatmentName) {
  const filePath = path.join(__dirname, `src/app/[locale]/treatments/${slug}/page.tsx`);

  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${slug}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if breadcrumb already exists
  if (content.includes('BreadcrumbSchema')) {
    console.log(`⏭️  Skipping ${slug} - breadcrumb already exists`);
    return;
  }

  // Add import at top
  if (!content.includes("import { BreadcrumbSchema }")) {
    const importStatement = "import { BreadcrumbSchema } from '@/components/seo/breadcrumb-schema';\n";
    content = content.replace(/^/, importStatement);
  }

  // Find the return statement and add breadcrumb schema
  const breadcrumbCode = `
  {/* Breadcrumb Schema */}
  <BreadcrumbSchema items={[
    { name: 'Home', url: '${baseUrl}' },
    { name: 'Treatments', url: '${baseUrl}/treatments' },
    { name: '${treatmentName}', url: '${baseUrl}/treatments/${slug}' }
  ]} />
  `;

  // Insert after the first opening fragment or div in return
  content = content.replace(
    /return\s*\(\s*<>/,
    `return (\n    <>${breadcrumbCode}`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Added breadcrumb to ${slug}`);
}

// Process all treatment pages
Object.entries(treatments).forEach(([slug, name]) => {
  addBreadcrumbToTreatmentPage(slug, name);
});

console.log('\n✨ Breadcrumb schema addition complete!');
```

**Usage:**
```bash
node add-breadcrumb-schema.js
```

---

## 2. Article Schema for Blog Posts

### Status: ✅ **Component Already Exists**

**Location:** `src/components/seo/faq-schema.tsx` (line 141-196)

### Blog Articles That Need Article Schema:

```
src/app/[locale]/blog/
├── heart-surgery-cost-comparison/
├── medical-tourism-uae-patients/
├── knee-replacement-cost/
├── ivf-fertility-treatment-india-complete-guide/
├── best-hospitals-selection-guide/
├── cancer-treatment-cost/
├── dental-tourism-guide/
├── diabetes-treatment-india-guide/
├── liver-transplant-india-cost-guide/
├── spine-surgery-india-cost-hospitals/
├── cosmetic-surgery-cost-india/
├── bariatric-surgery-india-cost-guide/
├── kidney-transplant-cost-india-guide/
├── bone-marrow-transplant-india-guide/
├── neurosurgery-india-cost-hospitals/
├── dubai-to-india-medical-tourism/
├── riyadh-to-india-healthcare/
├── medical-visa-india-complete-guide/
├── medical-tourism-insurance-india/
├── best-time-visit-india-medical-tourism/
├── best-hospitals-mumbai-medical-tourism/
├── best-hospitals-delhi-medical-tourism/
├── best-hospitals-bangalore-medical-tourism/
└── best-hospitals-chennai-medical-tourism/
```

**Total:** 24 blog articles

### Implementation Example:

**File:** `src/app/[locale]/blog/heart-surgery-cost-comparison/page.tsx`

```tsx
import { ArticleSchema } from '@/components/seo/faq-schema';

export default function HeartSurgeryCostPage() {
  return (
    <>
      {/* Article Schema for SEO */}
      <ArticleSchema
        headline="Heart Surgery Cost Comparison: India vs World 2025"
        description="Complete cost comparison of heart surgery in India vs USA, UK, UAE with top hospitals, success rates, and patient guide."
        image="/images/heart-surgery-cost.jpg"
        datePublished="2025-01-15"
        dateModified="2025-01-20"
        author="Shifa AlHind Medical Team"
      />

      {/* Existing page content */}
    </>
  );
}
```

### Automation Script:

**Create:** `add-article-schema.js`

```javascript
const fs = require('fs');
const path = require('path');

// Blog article data
const articles = {
  'heart-surgery-cost-comparison': {
    headline: 'Heart Surgery Cost Comparison: India vs World 2025',
    description: 'Complete cost comparison of heart surgery in India vs USA, UK, UAE with top hospitals, success rates, and patient guide.',
    datePublished: '2025-01-15',
    dateModified: '2025-01-20',
  },
  'medical-tourism-uae-patients': {
    headline: 'Medical Tourism Guide for UAE Patients 2025',
    description: 'Complete medical tourism guide for UAE patients traveling to India for healthcare with visa, costs, and hospital information.',
    datePublished: '2025-01-18',
    dateModified: '2025-01-22',
  },
  // ... add all 24 articles
};

function addArticleSchemaToPost(slug, data) {
  const filePath = path.join(__dirname, `src/app/[locale]/blog/${slug}/page.tsx`);

  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${slug}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if article schema already exists
  if (content.includes('ArticleSchema')) {
    console.log(`⏭️  Skipping ${slug} - article schema already exists`);
    return;
  }

  // Add import
  if (!content.includes("import { ArticleSchema }")) {
    const importStatement = "import { ArticleSchema } from '@/components/seo/faq-schema';\n";
    content = content.replace(/^/, importStatement);
  }

  // Add schema
  const schemaCode = `
  {/* Article Schema for SEO */}
  <ArticleSchema
    headline="${data.headline}"
    description="${data.description}"
    datePublished="${data.datePublished}"
    dateModified="${data.dateModified}"
    author="Shifa AlHind Medical Team"
  />
  `;

  content = content.replace(
    /return\s*\(\s*<>/,
    `return (\n    <>${schemaCode}`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Added article schema to ${slug}`);
}

// Process all articles
Object.entries(articles).forEach(([slug, data]) => {
  addArticleSchemaToPost(slug, data);
});

console.log('\n✨ Article schema addition complete!');
```

---

## 3. Medical Procedure Schema for Treatments

### Status: ✅ **Component Already Exists**

**Location:** `src/components/seo/faq-schema.tsx` (line 85-122)

### Implementation Example:

**File:** `src/app/[locale]/treatments/heart-surgery-india/page.tsx`

```tsx
import { MedicalProcedureSchema } from '@/components/seo/faq-schema';

export default function HeartSurgeryPage() {
  return (
    <>
      {/* Medical Procedure Schema */}
      <MedicalProcedureSchema
        name="Heart Surgery (CABG)"
        description="Coronary Artery Bypass Grafting (CABG) is a surgical procedure to treat coronary heart disease by improving blood flow to the heart."
        procedureType="Cardiac Surgery"
        preparation="Pre-surgery consultation, cardiac tests including ECG, echocardiogram, blood tests, chest X-ray. Patient advised to stop certain medications 1 week before surgery."
        followup="Post-surgery ICU monitoring for 1-2 days, hospital stay 5-7 days, cardiac rehabilitation program, regular follow-up consultations for 6 months."
        howPerformed="Surgeon creates bypass using blood vessel from leg or chest to redirect blood around blocked artery. Performed under general anesthesia using heart-lung machine."
      />

      {/* Existing page content */}
    </>
  );
}
```

### Treatment Data for Schema:

I'll create a comprehensive data file for all treatments:

**Create:** `src/data/treatment-schema-data.ts`

```typescript
export interface TreatmentSchemaData {
  name: string;
  description: string;
  procedureType: string;
  preparation?: string;
  followup?: string;
  howPerformed?: string;
}

export const treatmentSchemaData: Record<string, TreatmentSchemaData> = {
  'heart-surgery-india': {
    name: 'Heart Surgery (CABG)',
    description: 'Coronary Artery Bypass Grafting (CABG) is a surgical procedure to treat coronary heart disease by improving blood flow to the heart.',
    procedureType: 'Cardiac Surgery',
    preparation: 'Pre-surgery consultation, cardiac tests including ECG, echocardiogram, blood tests, chest X-ray. Patient advised to stop certain medications 1 week before surgery.',
    followup: 'Post-surgery ICU monitoring for 1-2 days, hospital stay 5-7 days, cardiac rehabilitation program, regular follow-up consultations for 6 months.',
    howPerformed: 'Surgeon creates bypass using blood vessel from leg or chest to redirect blood around blocked artery. Performed under general anesthesia using heart-lung machine.'
  },
  'knee-replacement-india': {
    name: 'Knee Replacement Surgery (TKR)',
    description: 'Total Knee Replacement (TKR) is a surgical procedure to replace damaged knee joint with artificial implant to relieve pain and restore function.',
    procedureType: 'Orthopedic Surgery',
    preparation: 'Pre-surgery consultation, X-rays, MRI scans, blood tests, medical clearance. Patient may need to lose weight and strengthen leg muscles before surgery.',
    followup: 'Hospital stay 3-5 days, physical therapy starts day 1, outpatient physiotherapy for 3-6 months, full recovery in 3-6 months.',
    howPerformed: 'Surgeon removes damaged cartilage and bone, replaces with metal and plastic implant. Performed under spinal or general anesthesia.'
  },
  // ... add all 40+ treatments
};
```

---

## 4. Image Alt Tag Audit

### Current Status: ❌ **Needs Review**

### Audit Process:

**Step 1:** Find all images in the codebase

```bash
grep -r "<img" src/ --include="*.tsx" --include="*.jsx" | wc -l
grep -r "<Image" src/ --include="*.tsx" --include="*.jsx" | wc -l
```

**Step 2:** Check for missing or poor alt tags

```bash
# Find images without alt tags
grep -r "<img.*src" src/ --include="*.tsx" | grep -v "alt="

# Find images with empty alt tags
grep -r 'alt=""' src/ --include="*.tsx"

# Find images with generic alt tags
grep -r 'alt="image"' src/ --include="*.tsx"
grep -r 'alt="photo"' src/ --include="*.tsx"
grep -r 'alt="picture"' src/ --include="*.tsx"
```

### Best Practices for Alt Tags:

**❌ Bad Alt Tags:**
```tsx
<img src="/hospital.jpg" alt="hospital" />
<img src="/doctor.jpg" alt="image" />
<img src="/treatment.jpg" alt="" />
```

**✅ Good Alt Tags:**
```tsx
<img src="/apollo-hospital-chennai.jpg"
     alt="Apollo Hospital Chennai main entrance with JCI accreditation badge and modern medical facility" />

<img src="/dr-smith-cardiologist.jpg"
     alt="Dr. John Smith, Senior Cardiologist at Apollo Hospitals with 20 years experience in cardiac surgery" />

<img src="/heart-surgery-procedure.jpg"
     alt="Coronary artery bypass grafting (CABG) heart surgery procedure performed by cardiac surgeon at Indian hospital" />
```

### Alt Tag Guidelines:

1. **Be Descriptive:** Describe what's in the image
2. **Include Context:** Hospital name, location, procedure type
3. **Add Keywords:** But naturally, not stuffed
4. **Keep Under 125 Characters:** Optimal for screen readers
5. **Don't Say "Image of":** Screen readers already announce it's an image
6. **Include Text in Image:** If image contains text, include it in alt

### Automation Script:

**Create:** `audit-image-alt-tags.js`

```javascript
const fs = require('fs');
const path = require('path');
const glob = require('glob');

function auditImageAltTags() {
  const issues = {
    missingAlt: [],
    emptyAlt: [],
    genericAlt: [],
    goodAlt: []
  };

  // Find all TSX files
  const files = glob.sync('src/**/*.{tsx,jsx}', { cwd: __dirname });

  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');

    lines.forEach((line, index) => {
      // Check for images
      if (line.includes('<img') || line.includes('<Image')) {
        const lineNum = index + 1;

        // Missing alt
        if (!line.includes('alt=')) {
          issues.missingAlt.push({ file, line: lineNum, content: line.trim() });
        }
        // Empty alt
        else if (line.includes('alt=""')) {
          issues.emptyAlt.push({ file, line: lineNum, content: line.trim() });
        }
        // Generic alt
        else if (
          line.includes('alt="image"') ||
          line.includes('alt="photo"') ||
          line.includes('alt="picture"') ||
          line.includes('alt="hospital"') ||
          line.includes('alt="doctor"')
        ) {
          issues.genericAlt.push({ file, line: lineNum, content: line.trim() });
        }
        // Good alt (has descriptive text)
        else {
          const altMatch = line.match(/alt="([^"]+)"/);
          if (altMatch && altMatch[1].length > 20) {
            issues.goodAlt.push({ file, line: lineNum, alt: altMatch[1] });
          }
        }
      }
    });
  });

  // Generate report
  console.log('📊 IMAGE ALT TAG AUDIT REPORT\n');
  console.log(`✅ Good Alt Tags: ${issues.goodAlt.length}`);
  console.log(`⚠️  Generic Alt Tags: ${issues.genericAlt.length}`);
  console.log(`❌ Empty Alt Tags: ${issues.emptyAlt.length}`);
  console.log(`❌ Missing Alt Tags: ${issues.missingAlt.length}\n`);

  if (issues.missingAlt.length > 0) {
    console.log('❌ MISSING ALT TAGS:');
    issues.missingAlt.forEach(issue => {
      console.log(`   ${issue.file}:${issue.line}`);
      console.log(`   ${issue.content}\n`);
    });
  }

  if (issues.genericAlt.length > 0) {
    console.log('⚠️  GENERIC ALT TAGS (Need Improvement):');
    issues.genericAlt.forEach(issue => {
      console.log(`   ${issue.file}:${issue.line}`);
      console.log(`   ${issue.content}\n`);
    });
  }

  // Save report
  const report = JSON.stringify(issues, null, 2);
  fs.writeFileSync('image-alt-audit-report.json', report);
  console.log('💾 Full report saved to: image-alt-audit-report.json');
}

auditImageAltTags();
```

**Usage:**
```bash
node audit-image-alt-tags.js
```

---

## 5. Arabic Translation Checklist

### Pages Requiring Arabic Translation:

#### **Static Pages (15 pages)**
- [ ] Homepage (`src/app/[locale]/page.tsx`)
- [ ] About (`src/app/[locale]/about/page.tsx`)
- [ ] Contact (`src/app/[locale]/contact/page.tsx`)
- [ ] Medical Tourism (`src/app/[locale]/medical-tourism/page.tsx`)
- [ ] Services (`src/app/[locale]/services/page.tsx`)
- [ ] FAQ (`src/app/[locale]/faq/page.tsx`)
- [ ] Consultation (`src/app/[locale]/consultation/page.tsx`)
- [ ] Stories (`src/app/[locale]/stories/page.tsx`)
- [ ] Case Studies (`src/app/[locale]/case-studies/page.tsx`)
- [ ] Visa Assistance (`src/app/[locale]/visa-assistance/page.tsx`)
- [ ] Privacy Policy (`src/app/[locale]/privacy/page.tsx`)
- [ ] Terms of Service (`src/app/[locale]/terms/page.tsx`)
- [ ] Refund Policy (`src/app/[locale]/refunds/page.tsx`)
- [ ] Treatments Index (`src/app/[locale]/treatments/page.tsx`)
- [ ] Packages (`src/app/[locale]/packages/page.tsx`)

#### **Treatment Pages (40+ pages)**
- [ ] Heart Surgery
- [ ] Kidney Stone Treatment
- [ ] Dental Implants
- [ ] Hair Transplant
- [ ] IVF & Fertility
- [ ] Piles Surgery
- [ ] Hip Replacement
- [ ] Varicose Veins
- [ ] Cataract Surgery
- [ ] LASIK Eye Surgery
- [ ] Breast Cancer Treatment
- [ ] Lung Cancer Treatment
- [ ] Shoulder Surgery
- [ ] Gallbladder Surgery
- [ ] Colon Cancer Treatment
- [ ] Hernia Surgery
- [ ] Cervical Cancer Treatment
- [ ] Appendix Surgery
- [ ] Blood Cancer Treatment
- [ ] Thyroid Surgery
- [ ] Hysterectomy Surgery
- [ ] Prostate Cancer Treatment
- [ ] Rhinoplasty
- [ ] Angioplasty
- [ ] Liposuction
- [ ] ACL Reconstruction
- [ ] Breast Augmentation
- [ ] All-on-4 Dental Implants
- [ ] PCOS Treatment
- [ ] Egg Freezing
- [ ] Veneers
- [ ] Gastric Bypass
- [ ] Bariatric Surgery
- [ ] Cosmetic Surgery
- [ ] Diabetes Treatment
- [ ] Liver Transplant
- [ ] Spine Surgery
- [ ] Bone Marrow Transplant
- [ ] Neurosurgery
- [ ] Cancer Treatment (general)
- [ ] [Add remaining treatments...]

#### **Blog Articles (24 pages)**
- [ ] Heart Surgery Cost Comparison
- [ ] Medical Tourism UAE Patients
- [ ] Knee Replacement Cost
- [ ] IVF Fertility Treatment Guide
- [ ] Best Hospitals Selection Guide
- [ ] Cancer Treatment Cost
- [ ] Dental Tourism Guide
- [ ] Diabetes Treatment Guide
- [ ] Liver Transplant Cost Guide
- [ ] Spine Surgery Cost & Hospitals
- [ ] Cosmetic Surgery Cost
- [ ] Bariatric Surgery Cost Guide
- [ ] Kidney Transplant Cost Guide
- [ ] Bone Marrow Transplant Guide
- [ ] Neurosurgery Cost & Hospitals
- [ ] Dubai to India Medical Tourism
- [ ] Riyadh to India Healthcare
- [ ] Medical Visa India Guide
- [ ] Medical Tourism Insurance
- [ ] Best Time to Visit India for Treatment
- [ ] Best Hospitals Mumbai
- [ ] Best Hospitals Delhi
- [ ] Best Hospitals Bangalore
- [ ] Best Hospitals Chennai

#### **City Hospital Guides (4 pages)**
- [ ] Mumbai Medical Tourism
- [ ] Delhi Medical Tourism
- [ ] Bangalore Medical Tourism
- [ ] Chennai Medical Tourism

#### **GCC Country Pages (6 pages)**
- [ ] For UAE Patients
- [ ] For Saudi Patients
- [ ] For Qatar Patients
- [ ] For Oman Patients
- [ ] For Kuwait Patients
- [ ] For Bahrain Patients

#### **Components Requiring Translation:**
- [ ] Header/Navigation
- [ ] Footer
- [ ] Search functionality
- [ ] Filters
- [ ] Forms (consultation, contact, newsletter)
- [ ] CTAs (buttons, links)
- [ ] Error messages
- [ ] Success messages
- [ ] Loading states

#### **Database Content (From Admin):**
- [ ] Hospital descriptions
- [ ] Doctor profiles
- [ ] Package details
- [ ] Treatment descriptions
- [ ] City information
- [ ] Testimonials

---

### Translation Workflow:

**Priority 1 - High Traffic Pages (Week 1):**
1. Homepage
2. Top 5 treatment pages (heart, knee, IVF, dental, liver)
3. Consultation form
4. Contact page

**Priority 2 - Treatment Pages (Week 2-3):**
5. Remaining 35+ treatment pages

**Priority 3 - Blog Content (Week 3-4):**
6. All 24 blog articles
7. City guides

**Priority 4 - Supporting Pages (Week 4):**
8. About, Services, FAQ
9. GCC country pages
10. Legal pages (privacy, terms, refunds)

---

### Translation Tools Recommended:

1. **DeepL Pro** (https://www.deepl.com/pro)
   - Best for Arabic medical terminology
   - Cost: $7.49/month for 1M characters
   - API available for automation

2. **Google Translate API**
   - Good for bulk translation
   - Cost: $20 per 1M characters
   - Requires human review

3. **Human Translators:**
   - Upwork, Fiverr, or local agencies
   - Medical translation specialists
   - Cost: $0.08-0.15 per word

---

## 6. Automation Scripts

### Script 1: Add Breadcrumb Schema to All Treatment Pages

**File:** `scripts/add-breadcrumb-schema.js`

```javascript
const fs = require('fs');
const path = require('path');

const treatments = [
  'heart-surgery-india',
  'kidney-stone-treatment-india',
  'dental-implants-india',
  // ... add all treatment slugs
];

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://shifaalhind.onrender.com';

function addBreadcrumbSchema(slug) {
  const filePath = path.join(__dirname, `../src/app/[locale]/treatments/${slug}/page.tsx`);

  if (!fs.existsSync(filePath)) {
    console.log(`❌ Not found: ${slug}`);
    return false;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if already added
  if (content.includes('BreadcrumbSchema')) {
    console.log(`⏭️  Skip: ${slug} (already has breadcrumb)`);
    return false;
  }

  // Add import
  if (!content.includes("import { BreadcrumbSchema }")) {
    content = "import { BreadcrumbSchema } from '@/components/seo/breadcrumb-schema';\n" + content;
  }

  // Add schema
  const treatmentName = slug.replace(/-/g, ' ').replace(/india/gi, '').trim();
  const breadcrumbCode = `
      <BreadcrumbSchema items={[
        { name: 'Home', url: '${baseUrl}' },
        { name: 'Treatments', url: '${baseUrl}/treatments' },
        { name: '${treatmentName}', url: '${baseUrl}/treatments/${slug}' }
      ]} />
`;

  content = content.replace(
    /return\s*\(\s*(?:<>|<div)/,
    (match) => `return (\n    ${match.trim()}${breadcrumbCode}`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Added: ${slug}`);
  return true;
}

let added = 0;
treatments.forEach(slug => {
  if (addBreadcrumbSchema(slug)) added++;
});

console.log(`\n✨ Complete! Added breadcrumb schema to ${added}/${treatments.length} pages`);
```

---

### Script 2: Add Article Schema to All Blog Posts

**File:** `scripts/add-article-schema.js`

```javascript
const fs = require('fs');
const path = require('path');

const articles = {
  'heart-surgery-cost-comparison': {
    headline: 'Heart Surgery Cost Comparison: India vs World 2025',
    description: 'Complete cost comparison guide for heart surgery in India vs USA, UK, UAE.',
    datePublished: '2025-01-15',
    dateModified: '2025-01-20'
  },
  // ... add all articles
};

function addArticleSchema(slug, data) {
  const filePath = path.join(__dirname, `../src/app/[locale]/blog/${slug}/page.tsx`);

  if (!fs.existsSync(filePath)) {
    console.log(`❌ Not found: ${slug}`);
    return false;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes('ArticleSchema')) {
    console.log(`⏭️  Skip: ${slug}`);
    return false;
  }

  // Add import
  if (!content.includes("import { ArticleSchema }")) {
    content = "import { ArticleSchema } from '@/components/seo/faq-schema';\n" + content;
  }

  // Add schema
  const schemaCode = `
      <ArticleSchema
        headline="${data.headline}"
        description="${data.description}"
        datePublished="${data.datePublished}"
        dateModified="${data.dateModified}"
        author="Shifa AlHind Medical Team"
      />
`;

  content = content.replace(
    /return\s*\(\s*(?:<>|<div)/,
    (match) => `return (\n    ${match.trim()}${schemaCode}`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Added: ${slug}`);
  return true;
}

let added = 0;
Object.entries(articles).forEach(([slug, data]) => {
  if (addArticleSchema(slug, data)) added++;
});

console.log(`\n✨ Complete! Added article schema to ${added}/${Object.keys(articles).length} posts`);
```

---

### Script 3: Image Alt Tag Audit

**File:** `scripts/audit-images.js`

(See section 4 above for full script)

---

## 📊 Progress Tracking

### Week 1 Checklist:

**Day 1: Schema Setup**
- [ ] Create `BreadcrumbSchema` component
- [ ] Run breadcrumb automation script
- [ ] Verify on 5 sample pages
- [ ] Fix any errors

**Day 2: Article Schema**
- [ ] Run article schema automation script
- [ ] Verify on 5 sample blog posts
- [ ] Test with Google Rich Results Test
- [ ] Fix validation errors

**Day 3: Medical Procedure Schema**
- [ ] Create treatment schema data file
- [ ] Add to top 10 treatment pages manually
- [ ] Test with Rich Results Test

**Day 4: Image Audit**
- [ ] Run image alt tag audit script
- [ ] Fix critical issues (missing/empty alt)
- [ ] Improve generic alt tags

**Day 5: Translation Planning**
- [ ] Create detailed translation checklist
- [ ] Identify translation provider
- [ ] Get quotes
- [ ] Plan workflow

---

## 🎯 Success Criteria

### Breadcrumb Schema:
- ✅ Added to 100% of treatment pages (40+)
- ✅ Added to 100% of blog articles (24)
- ✅ Added to hospital/doctor pages
- ✅ Validates in Google Rich Results Test

### Article Schema:
- ✅ Added to all 24 blog posts
- ✅ Validates in Rich Results Test
- ✅ Includes proper dates and author

### Image Alt Tags:
- ✅ 0 missing alt tags
- ✅ 0 empty alt tags
- ✅ < 10 generic alt tags
- ✅ All images have descriptive 50+ character alt text

### Arabic Translation:
- ✅ Translation checklist complete
- ✅ Provider selected
- ✅ Timeline established
- ✅ Ready to begin Week 2

---

## 🚀 Next Steps After This Week:

1. **Google Search Console Setup** (requires your Google account)
2. **GA4 Enhanced Measurement** (requires analytics access)
3. **Complete Arabic Translation** (2-4 weeks)
4. **Hospital & Doctor Schema** (after translation)
5. **Backlink Building** (ongoing)

---

**Last Updated:** December 8, 2025
**Status:** Ready for implementation
**Estimated Time:** 1-2 days for technical tasks, 3-4 weeks for translation

/**
 * Add Hreflang Tags to All Content Pages
 * Adds alternates.languages configuration to metadata exports
 */

const fs = require('fs');
const path = require('path');

const baseUrl = 'https://shifaalhind.onrender.com';

// Treatment pages data
const treatments = [
  // Month 3-4 Treatment Pages (20)
  { slug: 'hair-transplant-india', name: 'Hair Transplant in India' },
  { slug: 'dental-implants-india', name: 'Dental Implants in India' },
  { slug: 'piles-surgery-india', name: 'Piles Surgery in India' },
  { slug: 'kidney-stone-treatment-india', name: 'Kidney Stone Treatment in India' },
  { slug: 'hip-replacement-india', name: 'Hip Replacement in India' },
  { slug: 'varicose-veins-treatment-india', name: 'Varicose Veins Treatment in India' },
  { slug: 'cataract-surgery-india', name: 'Cataract Surgery in India' },
  { slug: 'lasik-eye-surgery-india', name: 'LASIK Eye Surgery in India' },
  { slug: 'breast-cancer-treatment-india', name: 'Breast Cancer Treatment in India' },
  { slug: 'lung-cancer-treatment-india', name: 'Lung Cancer Treatment in India' },
  { slug: 'shoulder-surgery-india', name: 'Shoulder Surgery in India' },
  { slug: 'gallbladder-surgery-india', name: 'Gallbladder Surgery in India' },
  { slug: 'colon-cancer-treatment-india', name: 'Colon Cancer Treatment in India' },
  { slug: 'hernia-surgery-india', name: 'Hernia Surgery in India' },
  { slug: 'cervical-cancer-treatment-india', name: 'Cervical Cancer Treatment in India' },
  { slug: 'appendix-surgery-india', name: 'Appendix Surgery in India' },
  { slug: 'blood-cancer-treatment-india', name: 'Blood Cancer Treatment in India' },
  { slug: 'thyroid-surgery-india', name: 'Thyroid Surgery in India' },
  { slug: 'hysterectomy-surgery-india', name: 'Hysterectomy Surgery in India' },
  { slug: 'prostate-cancer-treatment-india', name: 'Prostate Cancer Treatment in India' },

  // Phase 1 Treatment Pages (10)
  { slug: 'rhinoplasty-india', name: 'Rhinoplasty in India' },
  { slug: 'angioplasty-india', name: 'Angioplasty in India' },
  { slug: 'liposuction-india', name: 'Liposuction in India' },
  { slug: 'acl-reconstruction-india', name: 'ACL Reconstruction in India' },
  { slug: 'breast-augmentation-india', name: 'Breast Augmentation in India' },
  { slug: 'all-on-4-dental-implants-india', name: 'All-on-4 Dental Implants in India' },
  { slug: 'pcos-treatment-india', name: 'PCOS Treatment in India' },
  { slug: 'egg-freezing-india', name: 'Egg Freezing in India' },
  { slug: 'veneers-india', name: 'Veneers in India' },
  { slug: 'gastric-bypass-india', name: 'Gastric Bypass in India' },
];

// Blog articles data
const blogs = [
  { slug: 'heart-surgery-cost-comparison-india-vs-world', name: 'Heart Surgery Cost Comparison' },
  { slug: 'medical-tourism-india-uae-patients-guide', name: 'Medical Tourism Guide for UAE Patients' },
  { slug: 'knee-replacement-cost-india-vs-world', name: 'Knee Replacement Cost' },
  { slug: 'ivf-fertility-treatment-india-complete-guide', name: 'IVF & Fertility Treatment Guide' },
  { slug: 'how-to-choose-best-hospital-india', name: 'How to Choose the Best Hospital in India' },
  { slug: 'cancer-treatment-cost-india-vs-world', name: 'Cancer Treatment Cost' },
  { slug: 'dental-tourism-india-complete-guide', name: 'Dental Tourism Guide' },
  { slug: 'diabetes-treatment-india-guide', name: 'Diabetes Treatment Guide' },
  { slug: 'liver-transplant-india-cost-guide', name: 'Liver Transplant Cost Guide' },
  { slug: 'spine-surgery-india-cost-hospitals', name: 'Spine Surgery Cost & Hospitals' },
  { slug: 'cosmetic-surgery-cost-india', name: 'Cosmetic Surgery Cost' },
  { slug: 'bariatric-surgery-india-cost-guide', name: 'Bariatric Surgery Cost Guide' },
  { slug: 'kidney-transplant-cost-india-guide', name: 'Kidney Transplant Cost Guide' },
  { slug: 'bone-marrow-transplant-india-guide', name: 'Bone Marrow Transplant Guide' },
  { slug: 'neurosurgery-india-cost-hospitals', name: 'Neurosurgery Cost & Hospitals' },
  { slug: 'dubai-to-india-medical-tourism', name: 'Dubai to India Medical Tourism' },
  { slug: 'riyadh-to-india-healthcare', name: 'Riyadh to India Healthcare' },
  { slug: 'medical-visa-india-complete-guide', name: 'Medical Visa India Complete Guide' },
  { slug: 'medical-tourism-insurance-india', name: 'Medical Tourism Insurance' },
  { slug: 'best-time-visit-india-medical-tourism', name: 'Best Time to Visit India for Medical Tourism' },
  { slug: 'best-hospitals-mumbai-medical-tourism', name: 'Best Hospitals in Mumbai' },
  { slug: 'best-hospitals-delhi-medical-tourism', name: 'Best Hospitals in Delhi' },
  { slug: 'best-hospitals-bangalore-medical-tourism', name: 'Best Hospitals in Bangalore' },
  { slug: 'best-hospitals-chennai-medical-tourism', name: 'Best Hospitals in Chennai' },
];

let successCount = 0;
let skipCount = 0;
let errorCount = 0;

function addHreflangToMetadata(filePath, pageType, slug) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if already has hreflang
    if (content.includes('alternates:') && content.includes('languages:')) {
      console.log(`⏭️  Skipping ${slug} - already has hreflang`);
      skipCount++;
      return;
    }

    // Determine the URL path based on page type
    const urlPath = pageType === 'treatment'
      ? `/treatments/${slug}`
      : `/blog/${slug}`;

    // Create hreflang configuration
    const hreflangConfig = `  alternates: {
    canonical: '${baseUrl}/en${urlPath}',
    languages: {
      'en-US': '${baseUrl}/en${urlPath}',
      'ar-SA': '${baseUrl}/ar${urlPath}',
      'x-default': '${baseUrl}/en${urlPath}',
    },
  },`;

    // Find the metadata export and add hreflang before the closing brace
    // Pattern: Look for the last property before the closing brace of metadata
    const metadataPattern = /export const metadata: Metadata = \{[\s\S]*?keywords: \[([\s\S]*?)\],?\s*\}/;
    const match = content.match(metadataPattern);

    if (match) {
      // Add hreflang after keywords array
      const replacement = match[0].replace(
        /keywords: \[([\s\S]*?)\],?(\s*)\}/,
        `keywords: [$1],\n${hreflangConfig}\n}`
      );

      content = content.replace(match[0], replacement);

      // Write back to file
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Added hreflang to ${slug}`);
      successCount++;
    } else {
      console.log(`⚠️  Could not find metadata pattern in ${slug}`);
      errorCount++;
    }
  } catch (error) {
    console.error(`❌ Error processing ${slug}:`, error.message);
    errorCount++;
  }
}

console.log('🔧 Starting hreflang implementation...\n');

// Process treatment pages
console.log('📋 Processing treatment pages (30 pages)...\n');
treatments.forEach(({ slug }) => {
  const filePath = path.join(__dirname, `src/app/[locale]/treatments/${slug}/page.tsx`);
  if (fs.existsSync(filePath)) {
    addHreflangToMetadata(filePath, 'treatment', slug);
  } else {
    console.log(`⚠️  File not found: ${filePath}`);
    errorCount++;
  }
});

console.log('\n📋 Processing blog articles (24 pages)...\n');
blogs.forEach(({ slug }) => {
  const filePath = path.join(__dirname, `src/app/[locale]/blog/${slug}/page.tsx`);
  if (fs.existsSync(filePath)) {
    addHreflangToMetadata(filePath, 'blog', slug);
  } else {
    console.log(`⚠️  File not found: ${filePath}`);
    errorCount++;
  }
});

// Summary
console.log('\n' + '='.repeat(80));
console.log('\n📊 HREFLANG IMPLEMENTATION SUMMARY:\n');
console.log(`✅ Successfully added hreflang: ${successCount} pages`);
console.log(`⏭️  Skipped (already had hreflang): ${skipCount} pages`);
console.log(`❌ Errors: ${errorCount} pages`);
console.log(`\n📈 Total pages processed: ${successCount + skipCount + errorCount} pages`);
console.log(`📈 Success rate: ${successCount > 0 ? Math.round((successCount / (successCount + errorCount)) * 100) : 0}%`);
console.log('\n' + '='.repeat(80));

if (successCount > 0) {
  console.log('\n✨ Hreflang tags successfully added!');
  console.log('\n📝 Next steps:');
  console.log('1. Run `npm run build` to verify no errors');
  console.log('2. Commit changes to git');
  console.log('3. Deploy to production');
  console.log('4. Verify hreflang tags in Google Search Console');
}

process.exit(errorCount > 0 ? 1 : 0);

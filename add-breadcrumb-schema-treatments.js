/**
 * Automation Script: Add Breadcrumb Schema to All Treatment Pages
 * This script adds BreadcrumbSchema to all treatment landing pages
 */

const fs = require('fs');
const path = require('path');

const baseUrl = 'https://shifaalhind.onrender.com';

// List of all treatment page slugs
const treatmentPages = [
  // Existing 20 treatment pages (Month 3-4)
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

  // Phase 1 treatment pages (10 high-value pages)
  { slug: 'rhinoplasty-india', name: 'Rhinoplasty in India' },
  { slug: 'angioplasty-india', name: 'Angioplasty in India' },
  { slug: 'liposuction-india', name: 'Liposuction in India' },
  { slug: 'acl-reconstruction-india', name: 'ACL Reconstruction in India' },
  { slug: 'breast-augmentation-india', name: 'Breast Augmentation in India' },
  { slug: 'all-on-4-dental-implants-india', name: 'All-on-4 Dental Implants in India' },
  { slug: 'pcos-treatment-india', name: 'PCOS Treatment in India' },
  { slug: 'egg-freezing-india', name: 'Egg Freezing in India' },
  { slug: 'veneers-india', name: 'Dental Veneers in India' },
  { slug: 'gastric-bypass-india', name: 'Gastric Bypass Surgery in India' },
];

let successCount = 0;
let skipCount = 0;
let errorCount = 0;

console.log('🚀 Starting breadcrumb schema implementation for treatment pages...\n');

treatmentPages.forEach(({ slug, name }) => {
  const filePath = path.join(__dirname, `src/app/[locale]/treatments/${slug}/page.tsx`);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${slug}`);
    errorCount++;
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if breadcrumb schema already exists
  if (content.includes('BreadcrumbSchema')) {
    console.log(`⏭️  Already has breadcrumb: ${slug}`);
    skipCount++;
    return;
  }

  // Add import if not present
  if (!content.includes("import { BreadcrumbSchema }")) {
    // Find the last import statement
    const importLines = content.split('\n').filter(line => line.trim().startsWith('import'));
    const lastImportIndex = content.lastIndexOf(importLines[importLines.length - 1]);
    const insertPosition = content.indexOf('\n', lastImportIndex) + 1;

    content = content.slice(0, insertPosition) +
              "import { BreadcrumbSchema } from '@/components/seo/breadcrumb-schema';\n" +
              content.slice(insertPosition);
  }

  // Add BreadcrumbSchema component after metadata export
  const breadcrumbCode = `
      {/* Breadcrumb Schema for SEO */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: '${baseUrl}' },
        { name: 'Treatments', url: '${baseUrl}/treatments' },
        { name: '${name}', url: '${baseUrl}/treatments/${slug}' }
      ]} />
`;

  // Find the return statement and add breadcrumb after first opening tag
  const returnMatch = content.match(/return\s*\(/);
  if (returnMatch) {
    const returnIndex = returnMatch.index + returnMatch[0].length;
    // Find the first element after return (usually <div> or <>)
    const firstElementMatch = content.slice(returnIndex).match(/\n\s*(<[^>]+>)/);
    if (firstElementMatch) {
      const insertIndex = returnIndex + firstElementMatch.index + firstElementMatch[1].length;
      content = content.slice(0, insertIndex) + breadcrumbCode + content.slice(insertIndex);

      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Added breadcrumb: ${slug}`);
      successCount++;
    } else {
      console.log(`❌ Could not find insertion point: ${slug}`);
      errorCount++;
    }
  } else {
    console.log(`❌ Could not find return statement: ${slug}`);
    errorCount++;
  }
});

console.log('\n📊 Summary:');
console.log(`✅ Successfully added: ${successCount}`);
console.log(`⏭️  Skipped (already exists): ${skipCount}`);
console.log(`❌ Errors: ${errorCount}`);
console.log(`📝 Total processed: ${treatmentPages.length}`);

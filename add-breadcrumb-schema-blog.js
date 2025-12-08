/**
 * Automation Script: Add Breadcrumb Schema to All Blog Articles
 * This script adds BreadcrumbSchema to all blog article pages
 */

const fs = require('fs');
const path = require('path');

const baseUrl = 'https://shifaalhind.onrender.com';

// List of all blog article slugs (24 articles from Month 1-2)
const blogArticles = [
  { slug: 'heart-surgery-cost-comparison', name: 'Heart Surgery Cost Comparison: India vs World 2025' },
  { slug: 'medical-tourism-uae-patients-guide', name: 'Medical Tourism Guide for UAE Patients' },
  { slug: 'knee-replacement-cost-india', name: 'Knee Replacement Cost in India 2025' },
  { slug: 'ivf-fertility-treatment-india-complete-guide', name: 'IVF & Fertility Treatment India - Complete Guide' },
  { slug: 'choosing-right-hospital-india', name: 'How to Choose the Right Hospital in India' },
  { slug: 'cancer-treatment-cost-india', name: 'Cancer Treatment Cost in India 2025' },
  { slug: 'dental-tourism-india-guide', name: 'Dental Tourism in India - Complete Guide' },
  { slug: 'diabetes-treatment-india-guide', name: 'Diabetes Treatment in India - Comprehensive Guide' },
  { slug: 'liver-transplant-india-cost-guide', name: 'Liver Transplant in India - Cost & Complete Guide' },
  { slug: 'spine-surgery-india-cost-hospitals', name: 'Spine Surgery in India - Cost & Best Hospitals' },
  { slug: 'cosmetic-surgery-cost-india', name: 'Cosmetic Surgery Cost in India 2025' },
  { slug: 'bariatric-surgery-india-cost-guide', name: 'Bariatric Surgery India - Cost & Complete Guide' },
  { slug: 'kidney-transplant-cost-india-guide', name: 'Kidney Transplant Cost in India - Complete Guide' },
  { slug: 'bone-marrow-transplant-india-guide', name: 'Bone Marrow Transplant in India - Complete Guide' },
  { slug: 'neurosurgery-india-cost-hospitals', name: 'Neurosurgery in India - Cost & Best Hospitals' },
  { slug: 'dubai-to-india-medical-tourism', name: 'Dubai to India Medical Tourism - Complete Guide' },
  { slug: 'riyadh-to-india-healthcare', name: 'Riyadh to India Healthcare Guide for Saudi Patients' },
  { slug: 'medical-visa-india-complete-guide', name: 'Medical Visa India - Complete Application Guide 2025' },
  { slug: 'medical-tourism-insurance-india', name: 'Medical Tourism Insurance for India - Complete Guide' },
  { slug: 'best-time-visit-india-medical-tourism', name: 'Best Time to Visit India for Medical Tourism' },
  { slug: 'best-hospitals-mumbai-medical-tourism', name: 'Best Hospitals in Mumbai for Medical Tourism' },
  { slug: 'best-hospitals-delhi-medical-tourism', name: 'Best Hospitals in Delhi NCR for Medical Tourism' },
  { slug: 'best-hospitals-bangalore-medical-tourism', name: 'Best Hospitals in Bangalore for Medical Tourism' },
  { slug: 'best-hospitals-chennai-medical-tourism', name: 'Best Hospitals in Chennai for Medical Tourism' },
];

let successCount = 0;
let skipCount = 0;
let errorCount = 0;

console.log('🚀 Starting breadcrumb schema implementation for blog articles...\n');

blogArticles.forEach(({ slug, name }) => {
  const filePath = path.join(__dirname, `src/app/[locale]/blog/${slug}/page.tsx`);

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
        { name: 'Blog', url: '${baseUrl}/blog' },
        { name: '${name.replace(/'/g, "\\'")}', url: '${baseUrl}/blog/${slug}' }
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
console.log(`📝 Total processed: ${blogArticles.length}`);

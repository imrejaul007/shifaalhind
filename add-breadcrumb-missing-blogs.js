/**
 * Automation Script: Add Breadcrumb Schema to Missing Blog Articles
 * This script adds BreadcrumbSchema to the 5 remaining blog articles with corrected folder names
 */

const fs = require('fs');
const path = require('path');

const baseUrl = 'https://shifaalhind.onrender.com';

// List of the 5 missing blog articles with corrected folder names
const missingBlogs = [
  { slug: 'medical-tourism-india-uae-patients-guide', name: 'Medical Tourism Guide for UAE Patients' },
  { slug: 'knee-replacement-cost-india-vs-world', name: 'Knee Replacement Cost in India 2025' },
  { slug: 'how-to-choose-best-hospital-india', name: 'How to Choose the Right Hospital in India' },
  { slug: 'cancer-treatment-cost-india-vs-world', name: 'Cancer Treatment Cost in India 2025' },
  { slug: 'dental-tourism-india-complete-guide', name: 'Dental Tourism in India - Complete Guide' },
];

let successCount = 0;
let skipCount = 0;
let errorCount = 0;

console.log('🚀 Starting breadcrumb schema implementation for missing blog articles...\n');

missingBlogs.forEach(({ slug, name }) => {
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
    // Find the first element after return (usually <div> or <BlogArticleLayout>)
    const firstElementMatch = content.slice(returnIndex).match(/\n\s*(<[^>]+>)/);
    if (firstElementMatch) {
      // Check if it's BlogArticleLayout, insert after its opening tag
      const layoutMatch = content.slice(returnIndex).match(/<BlogArticleLayout[^>]*>\s*\n/);
      if (layoutMatch) {
        const insertIndex = returnIndex + layoutMatch.index + layoutMatch[0].length;
        content = content.slice(0, insertIndex) + breadcrumbCode + content.slice(insertIndex);
      } else {
        const insertIndex = returnIndex + firstElementMatch.index + firstElementMatch[1].length;
        content = content.slice(0, insertIndex) + breadcrumbCode + content.slice(insertIndex);
      }

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
console.log(`📝 Total processed: ${missingBlogs.length}`);

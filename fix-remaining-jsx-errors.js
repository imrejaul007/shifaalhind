/**
 * Fix JSX syntax errors in remaining blog files
 * Move BreadcrumbSchema and ArticleSchema from between props to inside as children
 */

const fs = require('fs');
const path = require('path');

const files = [
  'best-time-visit-india-medical-tourism',
  'bone-marrow-transplant-india-guide',
  'cosmetic-surgery-cost-india',
  'diabetes-treatment-india-guide',
  'dubai-to-india-medical-tourism',
  'ivf-fertility-treatment-india-complete-guide',
  'kidney-transplant-cost-india-guide',
  'liver-transplant-india-cost-guide',
  'medical-tourism-insurance-india',
  'medical-visa-india-complete-guide',
  'neurosurgery-india-cost-hospitals',
  'riyadh-to-india-healthcare',
  'spine-surgery-india-cost-hospitals',
];

let successCount = 0;
let errorCount = 0;

files.forEach(slug => {
  const filePath = path.join(__dirname, `src/app/[locale]/blog/${slug}/page.tsx`);

  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Find the pattern where schemas are between BlogArticleLayout props
    // Pattern: breadcrumbTitle="..." \n\n      {/* Breadcrumb Schema
    // Replace with: breadcrumbTitle="..." \n    > \n      {/* Breadcrumb Schema

    // First, find and replace the pattern
    const regex = /(breadcrumbTitle="[^"]*")\s*\n\s*\n\s*(\{\/\* Breadcrumb Schema[\s\S]*?\/>)\s*\n\s*\n\s*(\{\/\* Article Schema[\s\S]*?\/>)\s*\n\s*\>/;

    if (regex.test(content)) {
      content = content.replace(regex, (match, breadcrumb, breadcrumbSchema, articleSchema) => {
        return `${breadcrumb}\n    >\n      ${breadcrumbSchema}\n\n      ${articleSchema}\n`;
      });

      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed ${slug}`);
      successCount++;
    } else {
      console.log(`⚠️  Pattern not found in ${slug}`);
      errorCount++;
    }
  } catch (error) {
    console.error(`❌ Error processing ${slug}:`, error.message);
    errorCount++;
  }
});

console.log(`\n✅ Fixed: ${successCount}`);
console.log(`❌ Errors: ${errorCount}`);

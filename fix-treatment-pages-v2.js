/**
 * Fix treatment landing pages - remove dynamic export from client components
 */

const fs = require('fs');
const path = require('path');

const pagesWithErrors = [
  'acl-reconstruction-india',
  'breast-augmentation-india',
  'egg-freezing-india',
  'liposuction-india',
  'all-on-4-dental-implants-india',
  'gastric-bypass-india',
  'pcos-treatment-india',
  'veneers-india'
];

for (const slug of pagesWithErrors) {
  const filePath = path.join(__dirname, `src/app/[locale]/treatments/${slug}/page.tsx`);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${slug}`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  // Remove dynamic export (cannot be used with 'use client')
  content = content.replace("export const dynamic = 'force-dynamic';\n\n", '');
  content = content.replace("export const dynamic = 'force-dynamic';\n", '');

  fs.writeFileSync(filePath, content);
  console.log(`✅ Fixed: ${slug}`);
}

console.log(`\n🎉 Fixed ${pagesWithErrors.length} treatment pages!`);

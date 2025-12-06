/**
 * Fix treatment landing pages - remove metadata export conflicts
 * These pages use client components so cannot export metadata
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

  // Remove Metadata import
  content = content.replace("import { Metadata } from 'next';\n", '');

  // Remove metadata export (including multi-line)
  content = content.replace(/export const metadata: Metadata = \{[\s\S]*?\};\n\n/, '');

  // Add 'use client' at the top if not present
  if (!content.includes("'use client'")) {
    content = `'use client';\n\n` + content;
  }

  fs.writeFileSync(filePath, content);
  console.log(`✅ Fixed: ${slug}`);
}

console.log(`\n🎉 Fixed ${pagesWithErrors.length} treatment pages!`);

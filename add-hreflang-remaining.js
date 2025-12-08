/**
 * Add Hreflang Tags to Remaining Pages (with string keywords)
 * For pages that have keywords as a string instead of array
 */

const fs = require('fs');
const path = require('path');

const baseUrl = 'https://shifaalhind.onrender.com';

// Remaining treatment pages that need hreflang
const treatments = [
  // Failed from previous script (have string keywords)
  { slug: 'blood-cancer-treatment-india' },
  { slug: 'hysterectomy-surgery-india' },
  { slug: 'prostate-cancer-treatment-india' },
  { slug: 'rhinoplasty-india' },
  { slug: 'angioplasty-india' },
  { slug: 'liposuction-india' },
  { slug: 'acl-reconstruction-india' },
  { slug: 'breast-augmentation-india' },
  { slug: 'all-on-4-dental-implants-india' },
  { slug: 'pcos-treatment-india' },
  { slug: 'egg-freezing-india' },
  { slug: 'veneers-india' },
  { slug: 'gastric-bypass-india' },
];

let successCount = 0;
let skipCount = 0;
let errorCount = 0;

function addHreflangToMetadata(filePath, slug) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if already has hreflang
    if (content.includes('alternates:') && content.includes('languages:')) {
      console.log(`⏭️  Skipping ${slug} - already has hreflang`);
      skipCount++;
      return;
    }

    const urlPath = `/treatments/${slug}`;

    // Create hreflang configuration
    const hreflangConfig = `  alternates: {
    canonical: '${baseUrl}/en${urlPath}',
    languages: {
      'en-US': '${baseUrl}/en${urlPath}',
      'ar-SA': '${baseUrl}/ar${urlPath}',
      'x-default': '${baseUrl}/en${urlPath}',
    },
  },`;

    // Pattern for string keywords (not array)
    const metadataPattern = /export const metadata: Metadata = \{[\s\S]*?keywords: ['"]([^'"]*)['"](,?)(\s*)\}/;
    const match = content.match(metadataPattern);

    if (match) {
      // Add hreflang after keywords string
      const replacement = match[0].replace(
        /keywords: ['"]([^'"]*)['"],(\s*)\}/,
        `keywords: '$1',\n${hreflangConfig}\n}`
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

console.log('🔧 Starting hreflang implementation for remaining pages...\n');

treatments.forEach(({ slug }) => {
  const filePath = path.join(__dirname, `src/app/[locale]/treatments/${slug}/page.tsx`);
  if (fs.existsSync(filePath)) {
    addHreflangToMetadata(filePath, slug);
  } else {
    console.log(`⚠️  File not found: ${filePath}`);
    errorCount++;
  }
});

// Summary
console.log('\n' + '='.repeat(80));
console.log('\n📊 HREFLANG IMPLEMENTATION SUMMARY (Remaining Pages):\n');
console.log(`✅ Successfully added hreflang: ${successCount} pages`);
console.log(`⏭️  Skipped (already had hreflang): ${skipCount} pages`);
console.log(`❌ Errors: ${errorCount} pages`);
console.log(`\n📈 Total pages processed: ${successCount + skipCount + errorCount} pages`);
console.log(`📈 Success rate: ${successCount > 0 ? Math.round((successCount / (successCount + errorCount)) * 100) : 0}%`);
console.log('\n' + '='.repeat(80));

if (successCount > 0) {
  console.log('\n✨ Hreflang tags successfully added to remaining pages!');
}

process.exit(errorCount > 0 ? 1 : 0);

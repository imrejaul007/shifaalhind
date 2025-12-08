/**
 * Carefully add hreflang + fix broken div JSX in treatment pages
 * Step 1: Add hreflang to metadata
 * Step 2: Fix broken div className without deleting content
 */

const fs = require('fs');
const path = require('path');

const baseUrl = 'https://shifaalhind.onrender.com';

const treatments = [
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

let successCount = 0;
let skipCount = 0;
let errorCount = 0;

function addHreflangToMetadata(filePath, slug) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Step 1: Add hreflang if not present
  if (!content.includes('alternates:') || !content.includes('languages:')) {
    const urlPath = `/treatments/${slug}`;
    const hreflangConfig = `  alternates: {
    canonical: '${baseUrl}/en${urlPath}',
    languages: {
      'en-US': '${baseUrl}/en${urlPath}',
      'ar-SA': '${baseUrl}/ar${urlPath}',
      'x-default': '${baseUrl}/en${urlPath}',
    },
  },`;

    // Handle both string and array keywords
    const arrayPattern = /keywords: \[([\s\S]*?)\],?(\s*)\}/;
    const stringPattern = /keywords: ['"]([^'"]*)['"],(\s*)\}/;

    if (arrayPattern.test(content)) {
      const match = content.match(arrayPattern);
      if (match) {
        const replacement = match[0].replace(
          /keywords: \[([\s\S]*?)\],?(\s*)\}/,
          `keywords: [$1],\n${hreflangConfig}\n}`
        );
        content = content.replace(match[0], replacement);
        modified = true;
        console.log(`  ✅ Added hreflang (array keywords)`);
      }
    } else if (stringPattern.test(content)) {
      const match = content.match(stringPattern);
      if (match) {
        const replacement = match[0].replace(
          /keywords: ['"]([^'"]*)['"],(\s*)\}/,
          `keywords: '$1',\n${hreflangConfig}\n}`
        );
        content = content.replace(match[0], replacement);
        modified = true;
        console.log(`  ✅ Added hreflang (string keywords)`);
      }
    } else {
      console.log(`  ⚠️  Could not find metadata pattern`);
    }
  } else {
    console.log(`  ⏭️  Hreflang already exists`);
  }

  // Step 2: Fix broken div className JSX (multiple patterns)
  // Pattern 1: from-gray-50 to-wh ... ite"
  if (content.includes('from-gray-50 to-wh')) {
    content = content.replace(
      /<div className="min-h-screen bg-gradient-to-b from-gray-50 to-wh\s*\n\s*(\{\/\*[\s\S]*?<BreadcrumbSchema[\s\S]*?\/\>\s*\n\s*\{\/\*[\s\S]*?<MedicalProcedureSchema[\s\S]*?\/\>\s*\n\s*)ite">/,
      (match, schemas) => {
        return `<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">\n${schemas.trim()}\n`;
      }
    );
    modified = true;
    console.log(`  ✅ Fixed broken div (pattern 1: to-wh...ite)`);
  }

  // Pattern 2: container mx-auto px-4 p ... y-8"
  if (content.includes('px-4 p') && (content.includes('y-8"') || content.includes('y-16"'))) {
    content = content.replace(
      /<div className="container mx-auto px-4 p\s*\n\s*(\{\/\*[\s\S]*?<BreadcrumbSchema[\s\S]*?\/\>\s*\n\s*\{\/\*[\s\S]*?<MedicalProcedureSchema[\s\S]*?\/\>\s*\n\s*)y-(8|16)">/g,
      (match, schemas, pyValue) => {
        return `<div className="container mx-auto px-4 py-${pyValue}">\n${schemas.trim()}\n`;
      }
    );
    modified = true;
    console.log(`  ✅ Fixed broken div (pattern 2: px-4 p...y-X)`);
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    successCount++;
    return true;
  } else {
    skipCount++;
    return false;
  }
}

console.log('\n🔧 Adding hreflang + fixing JSX in treatment pages...\n');

treatments.forEach(({ slug, name }) => {
  const filePath = path.join(__dirname, `src/app/[locale]/treatments/${slug}/page.tsx`);

  if (!fs.existsSync(filePath)) {
    console.log(`❌ ${name}: File not found`);
    errorCount++;
    return;
  }

  console.log(`📄 ${name}:`);
  try {
    addHreflangToMetadata(filePath, slug);
  } catch (error) {
    console.log(`  ❌ Error: ${error.message}`);
    errorCount++;
  }
  console.log('');
});

console.log('\n📊 Summary:');
console.log(`✅ Success: ${successCount}/${treatments.length} files`);
console.log(`⏭️  Skipped: ${skipCount} files (already had hreflang)`);
console.log(`❌ Errors: ${errorCount} files\n`);

/**
 * Automated Script to Add Testimonials and Trust Badges to All Treatment Pages
 *
 * This script will:
 * 1. Find all treatment page directories
 * 2. Add imports for Testimonials and TrustBadges components
 * 3. Insert components before the final CTA section
 * 4. Map treatment slugs to appropriate testimonial categories
 * 5. Handle various page structures
 */

const fs = require('fs');
const path = require('path');

// Treatment slug to testimonial category mapping
const TREATMENT_TO_TESTIMONIAL_MAP = {
  // Heart/Cardiac
  'angioplasty-india': 'heart-surgery',

  // Hair
  'hair-transplant-india': 'hair-transplant', // Already done, skip

  // Dental
  'dental-implants-india': 'dental',
  'all-on-4-dental-implants-india': 'dental',
  'veneers-india': 'dental',

  // IVF/Fertility
  'ivf-fertility-treatment-india-complete-guide': 'ivf-fertility',
  'pcos-treatment-india': 'ivf-fertility',
  'egg-freezing-india': 'ivf-fertility',

  // Orthopedic
  'knee-replacement-cost': 'knee-replacement',
  'hip-replacement-india': 'knee-replacement',
  'shoulder-surgery-india': 'knee-replacement',
  'acl-reconstruction-india': 'knee-replacement',
  'spine-surgery-india-cost-hospitals': 'knee-replacement',

  // Cancer (use generic)
  'breast-cancer-treatment-india': 'generic',
  'lung-cancer-treatment-india': 'generic',
  'colon-cancer-treatment-india': 'generic',
  'cervical-cancer-treatment-india': 'generic',
  'prostate-cancer-treatment-india': 'generic',
  'blood-cancer-treatment-india': 'generic',

  // Surgery (use generic)
  'piles-surgery-india': 'generic',
  'gallbladder-surgery-india': 'generic',
  'hernia-surgery-india': 'generic',
  'appendix-surgery-india': 'generic',
  'hysterectomy-surgery-india': 'generic',
  'thyroid-surgery-india': 'generic',

  // Transplants (use generic)
  'kidney-transplant-cost-india-guide': 'generic',
  'bone-marrow-transplant-india-guide': 'generic',
  'liver-transplant-india-cost-guide': 'generic',

  // Other procedures
  'kidney-stone-treatment-india': 'generic',
  'varicose-veins-treatment-india': 'generic',
  'cataract-surgery-india': 'generic',
  'lasik-eye-surgery-india': 'generic',
  'neurosurgery-india-cost-hospitals': 'generic',
  'diabetes-treatment-india-guide': 'generic',

  // Cosmetic/Bariatric
  'cosmetic-surgery-cost-india': 'generic',
  'liposuction-india': 'generic',
  'breast-augmentation-india': 'generic',
  'rhinoplasty-india': 'generic',
  'bariatric-surgery-india-cost-guide': 'generic',
  'gastric-bypass-india': 'generic',
};

const TREATMENTS_DIR = path.join(__dirname, 'src/app/[locale]/treatments');

// Get all treatment directories
function getAllTreatmentDirs() {
  const items = fs.readdirSync(TREATMENTS_DIR);
  const treatmentDirs = items.filter(item => {
    const fullPath = path.join(TREATMENTS_DIR, item);
    const isDir = fs.statSync(fullPath).isDirectory();
    const hasPageFile = isDir && fs.existsSync(path.join(fullPath, 'page.tsx'));
    const skipDirs = ['[slug]']; // Skip dynamic route
    return isDir && hasPageFile && !skipDirs.includes(item);
  });

  return treatmentDirs;
}

// Check if page already has testimonials (check for actual component usage, not just imports)
function hasTestimonials(content) {
  return content.includes('<Testimonials') ||
         content.includes('{/* Testimonials Section */}');
}

// Add imports to the file
function addImports(content) {
  // Check if imports already exist
  if (content.includes('testimonials/testimonials')) {
    return content;
  }

  // Find the last import statement
  const importRegex = /import[^;]+from[^;]+;/g;
  const imports = content.match(importRegex);

  if (!imports || imports.length === 0) {
    console.error('No imports found in file');
    return content;
  }

  const lastImport = imports[imports.length - 1];
  const lastImportIndex = content.indexOf(lastImport) + lastImport.length;

  const newImports = `
import { Testimonials, TREATMENT_TESTIMONIALS } from '@/components/testimonials/testimonials';
import { TrustBadges } from '@/components/trust-badges/trust-badges';`;

  return content.slice(0, lastImportIndex) + newImports + content.slice(lastImportIndex);
}

// Insert testimonials and trust badges before final CTA
function insertComponents(content, treatmentSlug) {
  const testimonialCategory = TREATMENT_TO_TESTIMONIAL_MAP[treatmentSlug] || 'generic';

  // Try to find the final CTA section - look for common patterns
  const ctaPatterns = [
    /{\/\* CTA Section \*\/}/,
    /{\/\* CTA \*\/}/,  // Simpler CTA comment
    /<Card className="[^"]*border-primary[^"]*bg-primary-50[^"]*">/,
    /<section className="bg-gradient-to-r from-primary-6/,  // Gradient CTA
    /<section className="[^"]*">\s*<div className="[^"]*">\s*<h2[^>]*>Ready to/,
  ];

  let insertPosition = -1;
  let matchedPattern = null;

  for (const pattern of ctaPatterns) {
    const match = content.match(pattern);
    if (match) {
      insertPosition = match.index;
      matchedPattern = pattern;
      break;
    }
  }

  if (insertPosition === -1) {
    console.error(`   ⚠️  Could not find CTA section - trying fallback`);
    // Fallback: insert before closing </div> of main component
    const lastDivMatch = content.lastIndexOf('</div>\n  );\n}');
    if (lastDivMatch !== -1) {
      // Find the section closing before this div
      const sectionCloseMatch = content.lastIndexOf('</section>', lastDivMatch);
      if (sectionCloseMatch !== -1) {
        insertPosition = sectionCloseMatch + '</section>'.length;
        console.log(`   📍 Using fallback position after last section`);
      }
    }
  }

  if (insertPosition === -1) {
    console.error(`   ❌ Could not find insertion point in ${treatmentSlug}`);
    return content;
  }

  // Get treatment name for title (capitalize and format)
  const treatmentName = treatmentSlug
    .replace('-india', '')
    .replace(/-/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const componentsCode = `
      {/* Testimonials Section */}
      <Testimonials
        testimonials={TREATMENT_TESTIMONIALS['${testimonialCategory}']}
        title="Success Stories from Our ${treatmentName} Patients"
        subtitle="Real transformations from GCC patients who achieved life-changing results"
      />

      {/* Trust Badges Section */}
      <TrustBadges />

      `;

  return content.slice(0, insertPosition) + componentsCode + content.slice(insertPosition);
}

// Process a single treatment page
function processTreatmentPage(treatmentSlug) {
  const pagePath = path.join(TREATMENTS_DIR, treatmentSlug, 'page.tsx');

  try {
    console.log(`\n📄 Processing: ${treatmentSlug}`);

    // Read the file
    let content = fs.readFileSync(pagePath, 'utf8');

    // Check if already has testimonials
    if (hasTestimonials(content)) {
      console.log(`   ⏭️  SKIP: Already has testimonials`);
      return { success: true, skipped: true };
    }

    // Add imports
    console.log(`   ➕ Adding imports...`);
    content = addImports(content);

    // Insert components
    console.log(`   🔧 Inserting testimonials and trust badges...`);
    content = insertComponents(content, treatmentSlug);

    // Write back to file
    fs.writeFileSync(pagePath, content, 'utf8');

    console.log(`   ✅ SUCCESS: Updated ${treatmentSlug}`);
    return { success: true, skipped: false };

  } catch (error) {
    console.error(`   ❌ ERROR processing ${treatmentSlug}:`, error.message);
    return { success: false, error: error.message };
  }
}

// Main execution
function main() {
  console.log('🚀 Starting automated enhancement of treatment pages...\n');
  console.log('='.repeat(60));

  const treatmentDirs = getAllTreatmentDirs();
  console.log(`\n📊 Found ${treatmentDirs.length} treatment directories\n`);

  const results = {
    total: treatmentDirs.length,
    success: 0,
    skipped: 0,
    failed: 0,
    errors: []
  };

  treatmentDirs.forEach(treatmentSlug => {
    const result = processTreatmentPage(treatmentSlug);

    if (result.success) {
      if (result.skipped) {
        results.skipped++;
      } else {
        results.success++;
      }
    } else {
      results.failed++;
      results.errors.push({ treatmentSlug, error: result.error });
    }
  });

  console.log('\n' + '='.repeat(60));
  console.log('\n📈 FINAL RESULTS:\n');
  console.log(`   Total pages found:     ${results.total}`);
  console.log(`   ✅ Successfully updated: ${results.success}`);
  console.log(`   ⏭️  Skipped (already done): ${results.skipped}`);
  console.log(`   ❌ Failed:              ${results.failed}`);

  if (results.errors.length > 0) {
    console.log('\n❌ ERRORS:\n');
    results.errors.forEach(({ treatmentSlug, error }) => {
      console.log(`   - ${treatmentSlug}: ${error}`);
    });
  }

  console.log('\n' + '='.repeat(60));
  console.log('\n🎉 Script execution completed!\n');

  if (results.success > 0) {
    console.log('✨ Next steps:');
    console.log('   1. Run: npm run build (to verify all pages compile)');
    console.log('   2. Test a few pages in the browser');
    console.log('   3. Commit changes: git add -A && git commit -m "Add testimonials to all treatment pages"');
    console.log('   4. Push to GitHub: git push\n');
  }
}

// Run the script
main();

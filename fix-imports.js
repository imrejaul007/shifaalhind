#!/usr/bin/env node

/**
 * Script to fix unused imports in blog articles
 * Only imports what each article actually uses
 */

const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, 'src/app/[locale]/blog');

// Article-specific import configurations
const articleImports = {
  'medical-tourism-india-uae-patients-guide': {
    relatedArticles: ['DENTAL_RELATED_ARTICLES'],
    linkComponents: ['CityLinks']
  },
  'knee-replacement-cost-india-vs-world': {
    relatedArticles: ['DIABETES_RELATED_ARTICLES'],
    linkComponents: ['TreatmentLinks']
  },
  'ivf-fertility-treatment-india-complete-guide': {
    relatedArticles: ['DENTAL_RELATED_ARTICLES'],
    linkComponents: ['InternalLinks']
  },
  'how-to-choose-best-hospital-india': {
    relatedArticles: ['CANCER_RELATED_ARTICLES'],
    linkComponents: ['InternalLinks']
  },
  'cancer-treatment-cost-india-vs-world': {
    relatedArticles: ['CANCER_RELATED_ARTICLES'],
    linkComponents: ['InternalLinks']
  },
  'dental-tourism-india-complete-guide': {
    relatedArticles: ['DENTAL_RELATED_ARTICLES'],
    linkComponents: ['InternalLinks']
  },
  'diabetes-treatment-india-guide': {
    relatedArticles: ['DIABETES_RELATED_ARTICLES'],
    linkComponents: ['InternalLinks']
  },
  'liver-transplant-india-cost-guide': {
    relatedArticles: ['CANCER_RELATED_ARTICLES'],
    linkComponents: ['InternalLinks']
  },
  'spine-surgery-india-cost-hospitals': {
    relatedArticles: ['DIABETES_RELATED_ARTICLES'],
    linkComponents: ['InternalLinks']
  }
};

function fixImports(slug, config) {
  const filePath = path.join(BLOG_DIR, slug, 'page.tsx');

  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${filePath}`);
    return false;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Remove the generic import block
  const genericImportRegex = /import { SocialShare } from '@\/components\/blog\/social-share';\nimport { RelatedArticles, CANCER_RELATED_ARTICLES, DENTAL_RELATED_ARTICLES, DIABETES_RELATED_ARTICLES } from '@\/components\/blog\/related-articles';\nimport { InternalLinks, CityLinks, TreatmentLinks } from '@\/components\/seo\/internal-links';/;

  // Generate specific imports
  const socialImport = `import { SocialShare } from '@/components/blog/social-share';`;
  const relatedImport = `import { RelatedArticles, ${config.relatedArticles.join(', ')} } from '@/components/blog/related-articles';`;
  const linksImport = `import { ${config.linkComponents.join(', ')} } from '@/components/seo/internal-links';`;

  const newImports = `${socialImport}\n${relatedImport}\n${linksImport}`;

  content = content.replace(genericImportRegex, newImports);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Fixed imports: ${slug}`);
  return true;
}

// Process all articles
console.log('🔧 Fixing unused imports...\n');
let fixed = 0;

Object.entries(articleImports).forEach(([slug, config]) => {
  if (fixImports(slug, config)) {
    fixed++;
  }
});

console.log(`\n✅ Fixed ${fixed} articles!`);
console.log('📝 Run "npm run build" to verify.');

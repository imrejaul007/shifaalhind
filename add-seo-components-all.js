#!/usr/bin/env node

/**
 * Script to add SEO components to all blog articles
 * Adds: Internal Links, Social Sharing, Related Articles
 */

const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, 'src/app/[locale]/blog');

// Article configurations
const articles = [
  {
    slug: 'medical-tourism-india-uae-patients-guide',
    title: 'Medical Tourism India: Complete Guide for UAE Patients 2025',
    description: 'Everything UAE patients need to know about medical treatment in India: costs, visa, flights, hospitals, and step-by-step process.',
    relatedArticles: 'DENTAL_RELATED_ARTICLES',
    internalLinksType: 'city', // Use CityLinks
    cities: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai']
  },
  {
    slug: 'knee-replacement-cost-india-vs-world',
    title: 'Knee Replacement Cost India vs World 2025: Save $20,000+',
    description: 'Complete guide to knee replacement surgery costs in India. Compare TKR, bilateral, partial, and revision knee replacement prices.',
    relatedArticles: 'DIABETES_RELATED_ARTICLES',
    internalLinksType: 'treatment',
    treatments: ['Hip Replacement', 'Spine Surgery', 'Shoulder Surgery']
  },
  {
    slug: 'ivf-fertility-treatment-india-complete-guide',
    title: 'IVF & Fertility Treatment India: Complete Guide 2025',
    description: 'Affordable IVF treatment in India with 65% success rates. Compare costs, clinics, and success rates for ICSI, FET, egg donation, and PGT.',
    relatedArticles: 'DENTAL_RELATED_ARTICLES',
    internalLinksType: 'custom',
    customLinks: [
      {
        title: 'Top Fertility Clinics in India',
        href: '/hospitals',
        description: 'JCI-accredited fertility centers with international standards and high success rates.'
      },
      {
        title: 'Medical Tourism from Saudi Arabia',
        href: '/for-saudi-patients',
        description: 'How Saudi patients access affordable fertility treatment in India.'
      },
      {
        title: 'Free Consultation',
        href: '/consultation',
        description: 'Get personalized success rate estimates and treatment plan.'
      }
    ]
  },
  {
    slug: 'how-to-choose-best-hospital-india',
    title: 'How to Choose the Best Hospital in India for Medical Tourism 2025',
    description: 'Essential guide to selecting JCI-accredited hospitals in India. 10 criteria, top hospital chains, common mistakes to avoid.',
    relatedArticles: 'CANCER_RELATED_ARTICLES',
    internalLinksType: 'custom',
    customLinks: [
      {
        title: 'Medical Tourism UAE Patients Guide',
        href: '/blog/medical-tourism-india-uae-patients-guide',
        description: 'Complete step-by-step guide for UAE patients seeking treatment in India.'
      },
      {
        title: 'Heart Surgery Cost Comparison',
        href: '/blog/heart-surgery-cost-comparison-india-vs-world',
        description: 'Compare heart surgery costs at top hospitals in India vs world.'
      },
      {
        title: 'Cancer Treatment in India',
        href: '/blog/cancer-treatment-cost-india-vs-world',
        description: 'JCI-accredited cancer hospitals with 85-92% success rates.'
      }
    ]
  },
  {
    slug: 'cancer-treatment-cost-india-vs-world',
    title: 'Cancer Treatment Cost India vs World 2025',
    description: 'Save 70-90% on cancer treatment at world-class hospitals with 85-92% success rates. Chemotherapy, radiation, surgery costs compared.',
    relatedArticles: 'CANCER_RELATED_ARTICLES',
    internalLinksType: 'custom',
    customLinks: [
      {
        title: 'Top Oncology Hospitals in India',
        href: '/hospitals',
        description: 'JCI-accredited cancer centers with latest technology and expert oncologists.'
      },
      {
        title: 'Hospital Selection Guide',
        href: '/blog/how-to-choose-best-hospital-india',
        description: 'How to choose the right hospital for your cancer treatment.'
      },
      {
        title: 'Free Consultation',
        href: '/consultation',
        description: 'Get personalized treatment plan and cost estimate from our experts.'
      }
    ]
  },
  {
    slug: 'dental-tourism-india-complete-guide',
    title: 'Dental Tourism India Complete Guide 2025',
    description: 'Save 60-80% on dental treatment in India. Implants, veneers, crowns, orthodontics at world-class clinics with international dentists.',
    relatedArticles: 'DENTAL_RELATED_ARTICLES',
    internalLinksType: 'custom',
    customLinks: [
      {
        title: 'Top Dental Clinics in India',
        href: '/hospitals',
        description: 'International standard dental clinics in Mumbai, Delhi, and Bangalore.'
      },
      {
        title: 'Knee Replacement Cost Guide',
        href: '/blog/knee-replacement-cost-india-vs-world',
        description: 'Another popular medical tourism procedure with huge cost savings.'
      },
      {
        title: 'Free Consultation',
        href: '/consultation',
        description: 'Get personalized dental treatment plan and quote.'
      }
    ]
  },
  {
    slug: 'diabetes-treatment-india-guide',
    title: 'Diabetes Treatment India Complete Guide 2025',
    description: 'Comprehensive diabetes management in India. Reversal programs, bariatric surgery, insulin therapy with expert endocrinologists.',
    relatedArticles: 'DIABETES_RELATED_ARTICLES',
    internalLinksType: 'custom',
    customLinks: [
      {
        title: 'Diabetes Specialty Centers',
        href: '/hospitals',
        description: 'Leading diabetes treatment centers with reversal programs.'
      },
      {
        title: 'Bariatric Surgery for Diabetes',
        href: '/treatments',
        description: '85% diabetes remission rate with weight loss surgery.'
      },
      {
        title: 'Free Consultation',
        href: '/consultation',
        description: 'Get personalized diabetes management plan.'
      }
    ]
  },
  {
    slug: 'liver-transplant-india-cost-guide',
    title: 'Liver Transplant Cost India: Complete Guide 2025',
    description: 'Liver transplant in India costs 70-80% less than Western countries. Living donor, deceased donor, pediatric transplants explained.',
    relatedArticles: 'CANCER_RELATED_ARTICLES',
    internalLinksType: 'custom',
    customLinks: [
      {
        title: 'Top Transplant Centers in India',
        href: '/hospitals',
        description: 'Leading liver transplant hospitals with high success rates.'
      },
      {
        title: 'Kidney Transplant Guide',
        href: '/treatments',
        description: 'Another major transplant procedure available in India.'
      },
      {
        title: 'Free Consultation',
        href: '/consultation',
        description: 'Get transplant evaluation and cost estimate.'
      }
    ]
  },
  {
    slug: 'spine-surgery-india-cost-hospitals',
    title: 'Spine Surgery India: Cost & Top Hospitals 2025',
    description: 'Minimally invasive spine surgery in India. Discectomy, fusion, laminectomy costs 65-85% lower than USA/UK.',
    relatedArticles: 'DIABETES_RELATED_ARTICLES',
    internalLinksType: 'custom',
    customLinks: [
      {
        title: 'Top Spine Surgery Centers',
        href: '/hospitals',
        description: 'Leading neurosurgery and spine surgery hospitals in India.'
      },
      {
        title: 'Knee Replacement Guide',
        href: '/blog/knee-replacement-cost-india-vs-world',
        description: 'Another orthopedic procedure popular with medical tourists.'
      },
      {
        title: 'Free Consultation',
        href: '/consultation',
        description: 'Get spine surgery evaluation and treatment plan.'
      }
    ]
  }
];

// Import statements to add
const imports = `import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles, CANCER_RELATED_ARTICLES, DENTAL_RELATED_ARTICLES, DIABETES_RELATED_ARTICLES } from '@/components/blog/related-articles';
import { InternalLinks, CityLinks, TreatmentLinks } from '@/components/seo/internal-links';`;

function generateInternalLinks(config) {
  if (config.internalLinksType === 'city') {
    return `
      {/* Internal Links */}
      <CityLinks cities={${JSON.stringify(config.cities)}} />
`;
  } else if (config.internalLinksType === 'treatment') {
    return `
      {/* Internal Links */}
      <TreatmentLinks treatments={${JSON.stringify(config.treatments)}} />
`;
  } else {
    return `
      {/* Internal Links */}
      <InternalLinks
        title="Related Medical Tourism Resources"
        links={${JSON.stringify(config.customLinks, null, 10)}}
        variant="compact"
      />
`;
  }
}

function generateSocialShare(config) {
  return `
      {/* Social Sharing */}
      <SocialShare
        title="${config.title}"
        url="/blog/${config.slug}"
        description="${config.description}"
      />
`;
}

function generateRelatedArticles(config) {
  return `
      {/* Related Articles */}
      <RelatedArticles articles={${config.relatedArticles}} />
`;
}

function processArticle(config) {
  const filePath = path.join(BLOG_DIR, config.slug, 'page.tsx');

  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${filePath}`);
    return false;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if already has components
  if (content.includes('SocialShare')) {
    console.log(`⏭️  Skipping ${config.slug} (already has components)`);
    return false;
  }

  // Add imports after Card import
  const cardImportRegex = /(import.*from '@\/components\/ui\/card';)/;
  if (cardImportRegex.test(content)) {
    content = content.replace(cardImportRegex, `$1\n${imports}`);
  }

  // Add internal links before closing </BlogArticleLayout>
  const internalLinksCode = generateInternalLinks(config);
  const socialShareCode = generateSocialShare(config);
  const relatedArticlesCode = generateRelatedArticles(config);

  // Find the closing tag
  const closingTag = '    </BlogArticleLayout>';
  if (content.includes(closingTag)) {
    const replacement = `${internalLinksCode}${socialShareCode}${relatedArticlesCode}${closingTag}`;
    content = content.replace(closingTag, replacement);
  }

  // Write back
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Updated: ${config.slug}`);
  return true;
}

// Process all articles
console.log('🚀 Adding SEO components to blog articles...\n');
let processed = 0;

articles.forEach(config => {
  if (processArticle(config)) {
    processed++;
  }
});

console.log(`\n✅ Processed ${processed} articles successfully!`);
console.log('📝 Run "npm run build" to verify all changes.');

/**
 * Automation Script: Add Article Schema to All Blog Posts
 * This script adds ArticleSchema to all 24 blog article pages
 */

const fs = require('fs');
const path = require('path');

const baseUrl = 'https://shifaalhind.onrender.com';

// All 24 blog articles with their data
const blogArticles = [
  {
    slug: 'heart-surgery-cost-comparison-india-vs-world',
    headline: 'Heart Surgery Cost in India vs USA, UK, UAE & Saudi Arabia: Complete 2025 Guide',
    description: 'Discover how much you can save on heart surgery in India compared to USA, UK, UAE, and Saudi Arabia. Complete cost breakdown, hospital comparison, and quality analysis for GCC patients.',
    image: `${baseUrl}/images/blog/heart-surgery-cost.jpg`,
    datePublished: '2025-01-15',
    dateModified: '2025-01-15',
  },
  {
    slug: 'medical-tourism-india-uae-patients-guide',
    headline: 'Medical Tourism Guide for UAE Patients - Complete 2025 Guide',
    description: 'Complete guide for UAE patients seeking medical treatment in India. Learn about costs, visa process, top hospitals, and how to plan your medical journey.',
    image: `${baseUrl}/images/blog/uae-medical-tourism.jpg`,
    datePublished: '2025-01-15',
    dateModified: '2025-01-15',
  },
  {
    slug: 'knee-replacement-cost-india-vs-world',
    headline: 'Knee Replacement Cost in India 2025 - Complete Cost & Quality Guide',
    description: 'Complete guide to knee replacement surgery cost in India vs USA, UK, and UAE. Learn about costs, recovery, top hospitals, and quality of care.',
    image: `${baseUrl}/images/blog/knee-replacement.jpg`,
    datePublished: '2025-01-15',
    dateModified: '2025-01-15',
  },
  {
    slug: 'ivf-fertility-treatment-india-complete-guide',
    headline: 'IVF & Fertility Treatment India - Complete Guide 2025',
    description: 'Comprehensive guide to IVF and fertility treatment in India. Learn about costs, success rates, top clinics, and treatment options.',
    image: `${baseUrl}/images/blog/ivf-treatment.jpg`,
    datePublished: '2025-01-15',
    dateModified: '2025-01-15',
  },
  {
    slug: 'how-to-choose-best-hospital-india',
    headline: 'How to Choose the Right Hospital in India for Medical Tourism',
    description: 'Essential guide to selecting the best hospital in India for your medical treatment. Learn about accreditation, specialties, and key factors.',
    image: `${baseUrl}/images/blog/hospital-selection.jpg`,
    datePublished: '2025-01-15',
    dateModified: '2025-01-15',
  },
  {
    slug: 'cancer-treatment-cost-india-vs-world',
    headline: 'Cancer Treatment Cost in India 2025 - Complete Cost Guide',
    description: 'Complete guide to cancer treatment costs in India vs global prices. Learn about treatment options, costs, and top oncology hospitals.',
    image: `${baseUrl}/images/blog/cancer-treatment.jpg`,
    datePublished: '2025-01-15',
    dateModified: '2025-01-15',
  },
  {
    slug: 'dental-tourism-india-complete-guide',
    headline: 'Dental Tourism in India - Complete Guide 2025',
    description: 'Complete guide to dental tourism in India. Learn about costs, procedures, top dental clinics, and quality of care.',
    image: `${baseUrl}/images/blog/dental-tourism.jpg`,
    datePublished: '2025-01-15',
    dateModified: '2025-01-15',
  },
  {
    slug: 'diabetes-treatment-india-guide',
    headline: 'Diabetes Treatment in India - Comprehensive Guide 2025',
    description: 'Comprehensive guide to diabetes management and treatment in India including costs, specialists, and treatment options.',
    image: `${baseUrl}/images/blog/diabetes-treatment.jpg`,
    datePublished: '2025-01-15',
    dateModified: '2025-01-15',
  },
  {
    slug: 'liver-transplant-india-cost-guide',
    headline: 'Liver Transplant in India - Cost & Complete Guide 2025',
    description: 'Complete guide to liver transplant in India including costs, success rates, top hospitals, and recovery process.',
    image: `${baseUrl}/images/blog/liver-transplant.jpg`,
    datePublished: '2025-01-15',
    dateModified: '2025-01-15',
  },
  {
    slug: 'spine-surgery-india-cost-hospitals',
    headline: 'Spine Surgery in India - Cost & Best Hospitals 2025',
    description: 'Complete guide to spine surgery in India including costs, procedures, top hospitals, and recovery information.',
    image: `${baseUrl}/images/blog/spine-surgery.jpg`,
    datePublished: '2025-10-01',
    dateModified: '2025-10-01',
  },
  {
    slug: 'cosmetic-surgery-cost-india',
    headline: 'Cosmetic Surgery Cost in India 2025 - Complete Price Guide',
    description: 'Complete cost guide for cosmetic surgery procedures in India vs global prices. Learn about procedures, costs, and top clinics.',
    image: `${baseUrl}/images/blog/cosmetic-surgery.jpg`,
    datePublished: '2025-10-01',
    dateModified: '2025-10-01',
  },
  {
    slug: 'bariatric-surgery-india-cost-guide',
    headline: 'Bariatric Surgery India - Cost & Complete Guide 2025',
    description: 'Complete guide to bariatric surgery in India including costs, procedures, top hospitals, and long-term results.',
    image: `${baseUrl}/images/blog/bariatric-surgery.jpg`,
    datePublished: '2025-10-01',
    dateModified: '2025-10-01',
  },
  {
    slug: 'kidney-transplant-cost-india-guide',
    headline: 'Kidney Transplant Cost in India - Complete Guide 2025',
    description: 'Complete guide to kidney transplant in India including costs, success rates, donor options, and top hospitals.',
    image: `${baseUrl}/images/blog/kidney-transplant.jpg`,
    datePublished: '2025-10-01',
    dateModified: '2025-10-01',
  },
  {
    slug: 'bone-marrow-transplant-india-guide',
    headline: 'Bone Marrow Transplant in India - Complete Guide 2025',
    description: 'Complete guide to bone marrow transplant in India including costs, success rates, types, and top hospitals.',
    image: `${baseUrl}/images/blog/bone-marrow-transplant.jpg`,
    datePublished: '2025-10-01',
    dateModified: '2025-10-01',
  },
  {
    slug: 'neurosurgery-india-cost-hospitals',
    headline: 'Neurosurgery in India - Cost & Best Hospitals 2025',
    description: 'Complete guide to neurosurgery in India including costs, procedures, advanced technology, and top neuroscience centers.',
    image: `${baseUrl}/images/blog/neurosurgery.jpg`,
    datePublished: '2025-10-01',
    dateModified: '2025-10-01',
  },
  {
    slug: 'dubai-to-india-medical-tourism',
    headline: 'Dubai to India Medical Tourism - Complete Guide 2025',
    description: 'Complete medical tourism guide for Dubai patients. Learn about costs, hospitals, visa process, and travel logistics.',
    image: `${baseUrl}/images/blog/dubai-medical-tourism.jpg`,
    datePublished: '2025-10-01',
    dateModified: '2025-10-01',
  },
  {
    slug: 'riyadh-to-india-healthcare',
    headline: 'Riyadh to India Healthcare Guide for Saudi Patients 2025',
    description: 'Complete healthcare guide for Riyadh patients seeking treatment in India. Costs, hospitals, visa, and travel information.',
    image: `${baseUrl}/images/blog/riyadh-healthcare.jpg`,
    datePublished: '2025-10-01',
    dateModified: '2025-10-01',
  },
  {
    slug: 'medical-visa-india-complete-guide',
    headline: 'Medical Visa India - Complete Application Guide 2025',
    description: 'Complete guide to medical visa for India including e-visa process, requirements, costs, and step-by-step application.',
    image: `${baseUrl}/images/blog/medical-visa.jpg`,
    datePublished: '2025-10-01',
    dateModified: '2025-10-01',
  },
  {
    slug: 'medical-tourism-insurance-india',
    headline: 'Medical Tourism Insurance for India - Complete Guide 2025',
    description: 'Complete guide to medical tourism insurance for India including coverage, costs, providers, and what to look for.',
    image: `${baseUrl}/images/blog/medical-insurance.jpg`,
    datePublished: '2025-10-01',
    dateModified: '2025-10-01',
  },
  {
    slug: 'best-time-visit-india-medical-tourism',
    headline: 'Best Time to Visit India for Medical Tourism - Season Guide 2025',
    description: 'Complete guide to the best time to visit India for medical treatment considering weather, festivals, and recovery.',
    image: `${baseUrl}/images/blog/best-time-visit.jpg`,
    datePublished: '2025-10-01',
    dateModified: '2025-10-01',
  },
  {
    slug: 'best-hospitals-mumbai-medical-tourism',
    headline: 'Best Hospitals in Mumbai for Medical Tourism - Top 10 Guide 2025',
    description: 'Complete guide to the best hospitals in Mumbai for medical tourism including specialties, costs, and achievements.',
    image: `${baseUrl}/images/blog/mumbai-hospitals.jpg`,
    datePublished: '2025-11-01',
    dateModified: '2025-11-01',
  },
  {
    slug: 'best-hospitals-delhi-medical-tourism',
    headline: 'Best Hospitals in Delhi NCR for Medical Tourism - Top 10 Guide 2025',
    description: 'Complete guide to the best hospitals in Delhi NCR for medical tourism including AIIMS, Medanta, and Fortis.',
    image: `${baseUrl}/images/blog/delhi-hospitals.jpg`,
    datePublished: '2025-11-01',
    dateModified: '2025-11-01',
  },
  {
    slug: 'best-hospitals-bangalore-medical-tourism',
    headline: 'Best Hospitals in Bangalore for Medical Tourism - Top 10 Guide 2025',
    description: 'Complete guide to the best hospitals in Bangalore for medical tourism including Narayana Health and Apollo.',
    image: `${baseUrl}/images/blog/bangalore-hospitals.jpg`,
    datePublished: '2025-11-01',
    dateModified: '2025-11-01',
  },
  {
    slug: 'best-hospitals-chennai-medical-tourism',
    headline: 'Best Hospitals in Chennai for Medical Tourism - Top 10 Guide 2025',
    description: 'Complete guide to the best hospitals in Chennai for medical tourism including Apollo and Global Health City.',
    image: `${baseUrl}/images/blog/chennai-hospitals.jpg`,
    datePublished: '2025-11-01',
    dateModified: '2025-11-01',
  },
];

let successCount = 0;
let skipCount = 0;
let errorCount = 0;

console.log('🚀 Starting article schema implementation for blog posts...\n');

blogArticles.forEach((article) => {
  const filePath = path.join(__dirname, `src/app/[locale]/blog/${article.slug}/page.tsx`);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${article.slug}`);
    errorCount++;
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if article schema already exists
  if (content.includes('ArticleSchema')) {
    console.log(`⏭️  Already has article schema: ${article.slug}`);
    skipCount++;
    return;
  }

  // Add import if not present
  if (!content.includes("import { ArticleSchema")) {
    // Find the BreadcrumbSchema import line
    const breadcrumbImportIndex = content.indexOf("import { BreadcrumbSchema }");
    if (breadcrumbImportIndex !== -1) {
      const insertPosition = content.indexOf('\n', breadcrumbImportIndex) + 1;
      content = content.slice(0, insertPosition) +
                "import { ArticleSchema, DEFAULT_AUTHOR, DEFAULT_PUBLISHER } from '@/components/seo/article-schema';\n" +
                content.slice(insertPosition);
    } else {
      // If no breadcrumb import, add after last import
      const importLines = content.split('\n').filter(line => line.trim().startsWith('import'));
      const lastImportIndex = content.lastIndexOf(importLines[importLines.length - 1]);
      const insertPosition = content.indexOf('\n', lastImportIndex) + 1;
      content = content.slice(0, insertPosition) +
                "import { ArticleSchema, DEFAULT_AUTHOR, DEFAULT_PUBLISHER } from '@/components/seo/article-schema';\n" +
                content.slice(insertPosition);
    }
  }

  // Add ArticleSchema component after BreadcrumbSchema
  const articleSchemaCode = `

      {/* Article Schema for SEO */}
      <ArticleSchema
        headline="${article.headline.replace(/"/g, '\\"')}"
        description="${article.description.replace(/"/g, '\\"')}"
        image="${article.image}"
        datePublished="${article.datePublished}"
        dateModified="${article.dateModified}"
        author={DEFAULT_AUTHOR}
        publisher={DEFAULT_PUBLISHER}
        url="${baseUrl}/blog/${article.slug}"
      />`;

  // Find BreadcrumbSchema and insert after it
  const breadcrumbSchemaIndex = content.indexOf('<BreadcrumbSchema');
  if (breadcrumbSchemaIndex !== -1) {
    // Find the end of BreadcrumbSchema component (closing />)
    const closingBracketIndex = content.indexOf('/>', breadcrumbSchemaIndex) + 2;
    content = content.slice(0, closingBracketIndex) + articleSchemaCode + content.slice(closingBracketIndex);

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Added article schema: ${article.slug}`);
    successCount++;
  } else {
    console.log(`❌ Could not find BreadcrumbSchema insertion point: ${article.slug}`);
    errorCount++;
  }
});

console.log('\n📊 Summary:');
console.log(`✅ Successfully added: ${successCount}`);
console.log(`⏭️  Skipped (already exists): ${skipCount}`);
console.log(`❌ Errors: ${errorCount}`);
console.log(`📝 Total processed: ${blogArticles.length}`);

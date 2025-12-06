/**
 * Fix treatment landing pages - restore as Server Components with proper metadata
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

const metadataMap = {
  'acl-reconstruction-india': {
    title: 'ACL Reconstruction India: Cost, Best Surgeons 2025',
    description: 'ACL reconstruction in India costs $3,500-5,500 vs $20,000-50,000 in USA (85% savings). Arthroscopic surgery, 95% success rate. Sports medicine experts.',
    keywords: 'acl reconstruction india, acl surgery india, acl surgery cost india, acl repair india, knee surgery india'
  },
  'breast-augmentation-india': {
    title: 'Breast Augmentation India: Cost, Best Surgeons 2025',
    description: 'Breast augmentation in India costs $2,800-4,500 vs $8,000-15,000 in USA (70% savings). Silicone/saline implants, board-certified surgeons, 95% satisfaction.',
    keywords: 'breast augmentation india, breast implants india, breast enlargement india, breast surgery india'
  },
  'egg-freezing-india': {
    title: 'Egg Freezing India: Cost, Best Clinics 2025',
    description: 'Egg freezing in India costs $1,800-3,000 vs $10,000-15,000 in USA (85% savings). Vitrification technique, 90-95% survival rate. Leading fertility centers.',
    keywords: 'egg freezing india, oocyte cryopreservation india, egg freezing cost india, fertility preservation india'
  },
  'liposuction-india': {
    title: 'Liposuction India: Cost, Best Surgeons 2025',
    description: 'Liposuction in India costs $1,800-3,500 vs $6,000-11,000 in USA (70% savings). VASER, laser, traditional techniques. Expert cosmetic surgeons.',
    keywords: 'liposuction india, lipo cost india, vaser liposuction india, body contouring india, fat removal india'
  },
  'all-on-4-dental-implants-india': {
    title: 'All-on-4 Dental Implants India: Cost, Best Dentists 2025',
    description: 'All-on-4 dental implants in India cost $4,000-6,000 vs $20,000-30,000 in USA (80% savings). Full arch restoration in one day. Nobel Biocare, Straumann.',
    keywords: 'all on 4 dental implants india, full arch dental implants india, teeth in a day india, full mouth dental implants india'
  },
  'gastric-bypass-india': {
    title: 'Gastric Bypass Surgery India: Cost, Best Surgeons 2025',
    description: 'Gastric bypass surgery in India costs $6,000-8,500 vs $20,000-35,000 in USA (75% savings). Laparoscopic Roux-en-Y, 70-80% weight loss. COE bariatric centers.',
    keywords: 'gastric bypass india, gastric bypass surgery cost india, roux en y india, bariatric surgery india, weight loss surgery india'
  },
  'pcos-treatment-india': {
    title: 'PCOS Treatment India: Cost, Best Doctors 2025',
    description: 'PCOS treatment in India costs $800-2,500 vs $5,000-12,000 in USA. Medication, lifestyle, surgery options. Expert gynecologists, endocrinologists.',
    keywords: 'pcos treatment india, polycystic ovary syndrome india, pcos cure india, pcos treatment cost india, infertility treatment india'
  },
  'veneers-india': {
    title: 'Dental Veneers India: Cost, Best Dentists 2025',
    description: 'Dental veneers in India cost $150-400 per tooth vs $925-2,500 in USA (80% savings). Porcelain, composite, eMax. Expert cosmetic dentists.',
    keywords: 'veneers india, dental veneers cost india, porcelain veneers india, smile makeover india, cosmetic dentistry india'
  }
};

for (const slug of pagesWithErrors) {
  const filePath = path.join(__dirname, `src/app/[locale]/treatments/${slug}/page.tsx`);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${slug}`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  // Remove 'use client' directive
  content = content.replace("'use client';\n\n", '');
  content = content.replace("'use client';\n", '');

  // Add Metadata import if not present
  if (!content.includes("import { Metadata } from 'next';")) {
    content = "import { Metadata } from 'next';\n" + content;
  }

  // Add metadata export if not present
  const meta = metadataMap[slug];
  if (meta && !content.includes('export const metadata: Metadata =')) {
    const metadataBlock = `
export const metadata: Metadata = {
  title: '${meta.title}',
  description: '${meta.description}',
  keywords: '${meta.keywords}',
};

export const dynamic = 'force-dynamic';
`;

    // Insert after imports, before RELATED const
    content = content.replace(
      /\n\nconst RELATED/,
      metadataBlock + '\nconst RELATED'
    );
  }

  fs.writeFileSync(filePath, content);
  console.log(`✅ Fixed: ${slug}`);
}

console.log(`\n🎉 Fixed ${pagesWithErrors.length} treatment pages!`);

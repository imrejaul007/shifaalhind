const fs = require('fs');
const path = require('path');

// All 8 remaining treatments
const treatments = {
  'liposuction-india': {
    title: 'Liposuction India: Cost, Best Surgeons & Results 2025',
    desc: 'Liposuction in India costs $1,800-3,500 vs $6,000-11,000 in USA (70% savings). VASER, laser lipo available. Top plastic surgeons, 96% satisfaction.',
    keywords: 'liposuction india, liposuction cost india, vaser lipo india',
    h1: 'Liposuction in India',
    subtitle: 'Advanced Body Contouring at 70% Lower Cost',
    cost: '$1,800 - $3,500',
    time: '1-3 hours',
    success: '96% satisfaction',
    procedures: [
      ['Traditional Liposuction', '$1,800 - $2,500', '$6,000 - $9,000'],
      ['VASER Liposuction', '$2,500 - $3,500', '$8,000 - $12,000'],
      ['Laser Liposuction', '$2,200 - $3,200', '$7,000 - $11,000']
    ],
    faqs: [
      ['How much does liposuction cost in India?', 'Liposuction costs $1,800-3,500 in India (traditional $1,800-2,500, VASER $2,500-3,500, laser $2,200-3,200) vs $6,000-11,000 in USA. Includes surgery, compression garment, follow-ups.'],
      ['Is liposuction safe in India?', 'Yes, liposuction is safe at JCI-accredited clinics. 96% satisfaction rate, <2% complications. Board-certified plastic surgeons with 1,000+ procedures.'],
      ['How long is recovery from liposuction?', 'Recovery: Week 1 (compression garment), Week 2 (return to work), Month 1 (light exercise), Month 3 (final results). Swelling subsides 80% by week 2.']
    ]
  },
  'acl-reconstruction-india': {
    title: 'ACL Reconstruction India: Cost, Best Surgeons 2025',
    desc: 'ACL reconstruction in India costs $3,500-5,500 vs $20,000-50,000 in USA (85% savings). Arthroscopic surgery, 95% success rate. Sports medicine experts.',
    keywords: 'acl reconstruction india, acl surgery india, acl surgery cost india',
    h1: 'ACL Reconstruction in India',
    subtitle: 'Return to Sports with World-Class Knee Surgery',
    cost: '$3,500 - $5,500',
    time: '1-2 hours',
    success: '95% success',
    procedures: [
      ['Hamstring Autograft', '$3,500 - $4,500', '$20,000 - $35,000'],
      ['Patellar Tendon Autograft', '$3,800 - $4,800', '$22,000 - $38,000'],
      ['Allograft Reconstruction', '$4,500 - $5,500', '$25,000 - $45,000']
    ],
    faqs: [
      ['How much does ACL reconstruction cost in India?', 'ACL reconstruction costs $3,500-5,500 in India vs $20,000-50,000 in USA (85% savings). Includes surgery, anesthesia, hospital stay, physiotherapy.'],
      ['What is success rate of ACL surgery in India?', 'ACL surgery success rate is 95-98%. 90% athletes return to sport within 9-12 months. Re-tear rate <5% with proper rehab.'],
      ['How long is ACL recovery?', 'Recovery: Month 1 (full weight bearing), Month 3 (light jogging), Month 6 (sport-specific training), Month 9-12 (return to competitive sports).']
    ]
  },
  'breast-augmentation-india': {
    title: 'Breast Augmentation India: Cost, Best Surgeons 2025',
    desc: 'Breast augmentation in India costs $2,800-4,500 vs $8,000-15,000 in USA (70% savings). Silicone/saline implants, 97% satisfaction.',
    keywords: 'breast augmentation india, breast implants india, breast augmentation cost india',
    h1: 'Breast Augmentation in India',
    subtitle: 'Natural-Looking Results at 70% Lower Cost',
    cost: '$2,800 - $4,500',
    time: '1-2 hours',
    success: '97% satisfaction',
    procedures: [
      ['Silicone Implants', '$3,200 - $4,500', '$8,000 - $12,000'],
      ['Saline Implants', '$2,800 - $3,800', '$7,000 - $10,000'],
      ['Fat Transfer (Natural)', '$3,500 - $5,000', '$10,000 - $15,000']
    ],
    faqs: [
      ['How much does breast augmentation cost in India?', 'Breast augmentation costs $2,800-4,500 in India (silicone $3,200-4,500, saline $2,800-3,800) vs $8,000-15,000 in USA.'],
      ['Is breast augmentation safe in India?', 'Yes, very safe at JCI-accredited clinics. 97% satisfaction, <1% major complications. FDA-approved implants.'],
      ['How long do breast implants last?', 'Modern implants last 10-20 years. Lifetime warranty on rupture. 15-year replacement rate is 20%.']
    ]
  },
  'all-on-4-dental-implants-india': {
    title: 'All-on-4 Dental Implants India: Cost, Best Clinics 2025',
    desc: 'All-on-4 dental implants in India cost $4,000-6,000 vs $20,000-40,000 in USA (80% savings). Same-day teeth, 98% success.',
    keywords: 'all on 4 dental implants india, all on 4 cost india, full mouth dental implants india',
    h1: 'All-on-4 Dental Implants in India',
    subtitle: 'Full Mouth Restoration in One Day',
    cost: '$4,000 - $6,000',
    time: 'Same day teeth',
    success: '98% success',
    procedures: [
      ['All-on-4 (Single Arch)', '$4,000 - $5,000', '$20,000 - $30,000'],
      ['All-on-6 (Single Arch)', '$5,000 - $6,000', '$25,000 - $35,000'],
      ['All-on-4 (Both Arches)', '$7,000 - $9,000', '$35,000 - $60,000']
    ],
    faqs: [
      ['How much does All-on-4 cost in India?', 'All-on-4 costs $4,000-6,000 per arch in India vs $20,000-40,000 in USA (80% savings). Includes 4-6 implants, temporary teeth same day, permanent teeth after 3-6 months.'],
      ['What is success rate of All-on-4 in India?', 'All-on-4 success rate is 98%. 10-year survival rate is 95%. Nobel Biocare, Straumann implants used.'],
      ['Can I get teeth same day with All-on-4?', 'Yes, temporary denture fitted immediately after surgery. Can eat soft foods same evening. Permanent teeth after 3-6 months healing.']
    ]
  },
  'pcos-treatment-india': {
    title: 'PCOS Treatment India: Cost, Best Doctors & Success Rates 2025',
    desc: 'PCOS treatment in India costs $800-2,500 vs $5,000-15,000 in USA (75% savings). Hormonal therapy, ovarian drilling, fertility treatment.',
    keywords: 'pcos treatment india, pcos treatment cost india, polycystic ovary syndrome india',
    h1: 'PCOS Treatment in India',
    subtitle: 'Comprehensive PCOS Management & Fertility Solutions',
    cost: '$800 - $2,500',
    time: '3-6 months',
    success: '85% improvement',
    procedures: [
      ['Medication & Lifestyle', '$800 - $1,500', '$3,000 - $8,000'],
      ['Ovarian Drilling', '$1,500 - $2,500', '$8,000 - $15,000'],
      ['IVF for PCOS', '$3,000 - $4,500', '$12,000 - $20,000']
    ],
    faqs: [
      ['How much does PCOS treatment cost in India?', 'PCOS treatment costs $800-2,500 in India (medication $800-1,500, ovarian drilling $1,500-2,500, IVF $3,000-4,500) vs $5,000-20,000 in USA.'],
      ['Can PCOS be cured in India?', 'PCOS cannot be cured but can be effectively managed. 85% achieve regular periods, 70% conceive naturally within 2 years.'],
      ['What is success rate of PCOS treatment in India?', 'PCOS treatment success: 85% regular menstruation, 70% ovulation restoration, 60-70% natural conception, 50-60% IVF success.']
    ]
  },
  'egg-freezing-india': {
    title: 'Egg Freezing India: Cost, Best Fertility Clinics 2025',
    desc: 'Egg freezing in India costs $1,800-3,000 per cycle vs $10,000-15,000 in USA (80% savings). Vitrification technology, 90%+ survival rate.',
    keywords: 'egg freezing india, egg freezing cost india, fertility preservation india',
    h1: 'Egg Freezing in India',
    subtitle: 'Preserve Your Fertility for the Future',
    cost: '$1,800 - $3,000',
    time: '2-3 weeks',
    success: '90% survival',
    procedures: [
      ['Single Cycle', '$1,800 - $2,500', '$10,000 - $15,000'],
      ['Two Cycle Package', '$3,200 - $4,500', '$18,000 - $28,000'],
      ['Annual Storage', '$200 - $400', '$500 - $1,000']
    ],
    faqs: [
      ['How much does egg freezing cost in India?', 'Egg freezing costs $1,800-3,000 per cycle in India vs $10,000-15,000 in USA. Includes medications, retrieval, vitrification, first year storage.'],
      ['What is success rate of egg freezing in India?', 'Egg freezing success: 90-95% egg survival after thaw, 75-80% fertilization, 50-60% pregnancy rate per IVF cycle (age <35).'],
      ['At what age should I freeze eggs?', 'Best age is 25-35 years. Under 35: 60-70% success, 35-37: 50-60%, 38-40: 40-50%, Over 40: 20-30%. Freeze 15-20 eggs for best chance.']
    ]
  },
  'veneers-india': {
    title: 'Dental Veneers India: Cost, Best Dentists 2025',
    desc: 'Dental veneers in India cost $150-400 per tooth vs $1,000-2,500 in USA (85% savings). Porcelain, composite available. 10-year warranty.',
    keywords: 'veneers india, dental veneers cost india, porcelain veneers india',
    h1: 'Dental Veneers in India',
    subtitle: 'Perfect Smile Transformation at 85% Lower Cost',
    cost: '$150 - $400/tooth',
    time: '2-3 visits',
    success: '98% satisfaction',
    procedures: [
      ['Porcelain Veneers', '$250 - $400', '$1,000 - $2,500'],
      ['Composite Veneers', '$150 - $250', '$500 - $1,500'],
      ['Full Smile (8-10 teeth)', '$2,000 - $3,500', '$10,000 - $20,000']
    ],
    faqs: [
      ['How much do veneers cost in India?', 'Veneers cost $150-400 per tooth (porcelain $250-400, composite $150-250) vs $1,000-2,500 in USA. Full smile makeover (8-10 teeth) costs $2,000-3,500.'],
      ['How long do veneers last in India?', 'Porcelain veneers last 10-20 years, composite 5-7 years. Top clinics offer 10-year warranty. Proper care extends lifespan to 20+ years.'],
      ['Are veneers in India good quality?', 'Yes, same brands as USA/UK (Ivoclar, 3M ESPE). 98% patient satisfaction, natural appearance, stain-resistant.']
    ]
  },
  'gastric-bypass-india': {
    title: 'Gastric Bypass Surgery India: Cost, Best Surgeons 2025',
    desc: 'Gastric bypass in India costs $6,000-8,500 vs $20,000-35,000 in USA (75% savings). 85% diabetes remission, 70% excess weight loss.',
    keywords: 'gastric bypass india, gastric bypass cost india, roux en y india',
    h1: 'Gastric Bypass (Roux-en-Y) in India',
    subtitle: 'Life-Changing Weight Loss Surgery',
    cost: '$6,000 - $8,500',
    time: '2-3 hours',
    success: '70% weight loss',
    procedures: [
      ['Roux-en-Y Bypass', '$6,000 - $8,000', '$20,000 - $30,000'],
      ['Mini Gastric Bypass', '$5,500 - $7,500', '$18,000 - $28,000'],
      ['Revision Surgery', '$8,000 - $11,000', '$25,000 - $40,000']
    ],
    faqs: [
      ['How much does gastric bypass cost in India?', 'Gastric bypass costs $6,000-8,500 in India vs $20,000-35,000 in USA (75% savings). Includes surgery, 3-day hospital, follow-ups, nutritionist for 1 year.'],
      ['What is success rate of gastric bypass in India?', 'Gastric bypass success: 70-80% excess weight loss, 85% diabetes remission, 75% hypertension cure. 5-year weight maintenance: 60-70%.'],
      ['Am I eligible for gastric bypass?', 'Eligible if: BMI 35+ (with conditions) or BMI 40+, age 18-65, failed diet/exercise 6+ months, psychologically stable.']
    ]
  }
};

const template = (slug, data) => {
  const displayName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
  return `import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Clock, DollarSign, Heart, ArrowRight } from 'lucide-react';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles } from '@/components/blog/related-articles';
import { InternalLinks } from '@/components/seo/internal-links';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: '${data.title}',
  description: '${data.desc}',
  keywords: '${data.keywords}',
};

const RELATED = [
  { title: "Cosmetic Surgery Cost India", href: "/blog/cosmetic-surgery-cost-india", description: "All procedures 60-75% cheaper" },
  { title: "Best Hospitals Mumbai", href: "/blog/best-hospitals-mumbai-medical-tourism", description: "Top JCI hospitals" },
  { title: "Medical Visa Guide", href: "/blog/medical-visa-india-complete-guide", description: "Complete guide" }
];

export default function ${displayName}Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-12 text-white md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">${data.h1}</h1>
            <p className="mb-6 text-xl text-primary-50">${data.subtitle}</p>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2"><DollarSign className="h-5 w-5" /><span>${data.cost}</span></div>
              <div className="flex items-center gap-2"><Clock className="h-5 w-5" /><span>${data.time}</span></div>
              <div className="flex items-center gap-2"><Heart className="h-5 w-5" /><span>${data.success}</span></div>
            </div>
            <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600">
              <Link href="/consultation">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container px-4 py-12">
        <h2 className="mb-6 text-center font-serif text-3xl font-bold">Cost Comparison</h2>
        <Card className="shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Procedure</th>
                  <th className="px-4 py-3 text-center">India</th>
                  <th className="px-4 py-3 text-center">USA</th>
                </tr>
              </thead>
              <tbody className="divide-y">
${data.procedures.map(p => `                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">${p[0]}</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">${p[1]}</td>
                  <td className="px-4 py-3 text-center text-gray-600">${p[2]}</td>
                </tr>`).join('\n')}
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      <FAQSchema faqs={${JSON.stringify(data.faqs.map(f => ({ question: f[0], answer: f[1] })))}} />

      <section className="container px-4 py-12">
        <h2 className="mb-6 font-serif text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-4">
${data.faqs.map(f => `          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 text-lg font-semibold">${f[0]}</h3>
              <p className="text-gray-600">${f[1]}</p>
            </CardContent>
          </Card>`).join('\n')}
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-12 text-white">
        <div className="container text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mb-6 text-xl">Get free consultation & cost estimate</p>
          <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600">
            <Link href="/consultation">Get Free Consultation<ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      <div className="container px-4 py-8"><SocialShare title="${data.title}" description="${data.desc}" /></div>
      <div className="container px-4 pb-12"><RelatedArticles articles={RELATED} /></div>
      <div className="container px-4 pb-12"><InternalLinks variant="compact" /></div>
    </div>
  );
}
`;
};

// Create all pages
let created = 0;
for (const [slug, data] of Object.entries(treatments)) {
  try {
    const dir = path.join(__dirname, `src/app/[locale]/treatments/${slug}`);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const filePath = path.join(dir, 'page.tsx');
    fs.writeFileSync(filePath, template(slug, data));
    console.log(`✅ Created: ${slug}/page.tsx`);
    created++;
  } catch (error) {
    console.error(`❌ Error creating ${slug}:`, error.message);
  }
}

console.log(`\n🎉 Successfully created ${created}/8 treatment pages!`);
console.log('Total pages: 10/10 Phase 1 complete (Rhinoplasty + Angioplasty + 8 new pages)');

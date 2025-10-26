/**
 * Add FAQ schemas to remaining 10 blog articles
 * Pattern: Articles with "FAQ" heading (not "Frequently Asked Questions")
 */

const fs = require('fs');
const path = require('path');

const basePath = './src/app/[locale]/blog';

// FAQ data for all remaining articles
const articleFAQs = {
  'spine-surgery-india-cost-hospitals': [
    { q: 'How much does spine surgery cost in India?', a: 'Discectomy: $4,000-$6,500, Spinal fusion: $6,500-$9,500, Laminectomy: $4,500-$7,000, MISS: $5,500-$8,500. Costs are 70-85% lower than USA. Includes hospital stay, surgeon fees, implants (if needed), physiotherapy, and follow-up.' },
    { q: 'What are success rates for spine surgery in India?', a: '95-98% success for discectomy and laminectomy. 92-96% for spinal fusion. Complication rates <2% at top centers (ISIC Delhi, Apollo, Medanta). Success depends on proper patient selection, experienced surgeon, and post-op rehabilitation adherence.' },
    { q: 'How long is recovery after spine surgery in India?', a: 'Hospital stay: 3-7 days (simple procedures), 5-10 days (fusion). Return to light activities: 2-4 weeks. Full recovery: 3-6 months. Physiotherapy starts 2-4 weeks post-op. Can fly home after 7-14 days with surgeon clearance. Avoid heavy lifting for 3 months.' },
    { q: 'Do Indian spine surgeons use the same techniques as USA/Europe?', a: 'Yes, top surgeons trained at Johns Hopkins, Mayo Clinic, or European centers. Techniques identical: minimally invasive spine surgery (MISS), endoscopic discectomy, robotic-assisted fusion. Equipment: Carl Zeiss microscopes, Medtronic navigation systems, same implants (Medtronic, DePuy Synthes) used in USA.' }
  ],
  'cosmetic-surgery-cost-india': [
    { q: 'How much does cosmetic surgery cost in India?', a: 'Rhinoplasty: $1,500-$3,000, Liposuction: $1,200-$2,500, Breast augmentation: $2,500-$4,000, Facelift: $3,000-$5,500. Costs are 60-75% lower than USA/UK. Includes consultation, surgery, anesthesia, hospital stay (if needed), post-op care, and follow-up visits.' },
    { q: 'Are Indian cosmetic surgeons qualified?', a: 'Yes, top surgeons have MCh (Plastic Surgery) from premier institutes, fellowship training from USA/Europe (ASPS, ISAPS), 10-15+ years experience, perform 200+ procedures annually. Check surgeon credentials, before/after photos, patient reviews.' },
    { q: 'How long do I need to stay in India for cosmetic surgery?', a: '7-14 days depending on procedure. Rhinoplasty/liposuction: 7-10 days, Facelift/breast surgery: 10-14 days, Tummy tuck: 10-14 days. Includes pre-op consultation, surgery, initial recovery, suture removal, surgeon clearance. Can return for final follow-up or do virtually.' },
    { q: 'What if I have complications after returning home?', a: 'Top hospitals provide 24/7 support via WhatsApp/video call. Minor issues managed remotely. For serious complications, hospital covers treatment costs (check warranty policy). Medical tourism insurance recommended for post-procedure complications coverage ($100-200).' }
  ],
  'bariatric-surgery-india-cost-guide': [
    { q: 'How much does bariatric surgery cost in India?', a: 'Gastric bypass: $5,500-$7,500, Sleeve gastrectomy: $5,000-$7,000, Gastric band: $4,500-$6,500, Mini gastric bypass: $5,000-$7,000. Costs are 70-80% lower than USA ($20,000-$35,000). Includes pre-op assessment, surgery, 3-5 day hospital stay, dietitian, 1-year follow-up.' },
    { q: 'What is the success rate of bariatric surgery in India?', a: '60-80% excess weight loss within 12-18 months. Type 2 diabetes remission: 85%, Hypertension improvement: 75%, Sleep apnea resolution: 90%. Success requires lifelong dietary changes, exercise, vitamin supplementation, and follow-up compliance.' },
    { q: 'Am I a candidate for bariatric surgery?', a: 'BMI 35+ (any patient), BMI 30-34.9 with comorbidities (diabetes, hypertension, sleep apnea), Failed diet/exercise attempts, Age 18-65, Psychologically prepared for lifestyle changes. Not suitable: Active substance abuse, untreated depression, certain medical conditions.' },
    { q: 'Can I reverse diabetes with bariatric surgery in India?', a: 'Yes! 85% of Type 2 diabetes patients achieve remission within 3-6 months post-surgery. Bariatric surgery is most effective diabetes treatment for obese patients (BMI 35+). Many patients stop insulin/medications within weeks. Long-term success requires dietary compliance and regular monitoring.' }
  ],
  'kidney-transplant-cost-india-guide': [
    { q: 'How much does kidney transplant cost in India?', a: 'Living donor kidney transplant: $15,000-$20,000, Deceased donor: $13,000-$18,000, Pediatric: $18,000-$25,000. Costs are 75-85% lower than USA ($300,000-$500,000). Includes pre-transplant evaluation, surgery, 2-3 week hospital stay, immunosuppressants (1 year), and follow-up.' },
    { q: 'What are kidney transplant success rates in India?', a: '1-year graft survival: 95-98% (living donor), 90-95% (deceased donor). 5-year survival: 85-90%. Top centers like Apollo, Medanta, Fortis perform 300+ transplants annually. Success depends on donor-recipient match, patient health, and immunosuppressant adherence.' },
    { q: 'Can I bring a family member as living donor?', a: 'Yes, blood relatives (parents, siblings, children, spouse) permitted. Donor must be 18-60 years, compatible blood type (or ABO incompatible with special prep), healthy kidney function (GFR >80), BMI <35, and pass psychological evaluation. Donor surgery and care included in package cost.' },
    { q: 'How long do I wait for deceased donor kidney in India?', a: 'Average wait: 6-24 months depending on blood type, age, MELD score, and region. Delhi/Chennai have better organ availability (6-12 months) vs other cities (12-24 months). Living donor transplant can be scheduled within 4-6 weeks after evaluation. Most GCC patients choose living donor.' }
  ],
  'bone-marrow-transplant-india-guide': [
    { q: 'How much does bone marrow transplant cost in India?', a: 'Autologous BMT: $25,000-$35,000, Allogeneic (matched sibling): $40,000-$60,000, Haploidentical (half-matched): $50,000-$70,000. Costs are 70-80% lower than USA ($200,000-$500,000). Includes donor workup, conditioning, transplant, 4-6 week hospital stay, medications, and 100-day follow-up.' },
    { q: 'What are BMT success rates in India?', a: 'Survival rates vary by disease and type: Leukemia (allogeneic): 65-75%, Lymphoma (autologous): 70-80%, Multiple myeloma: 75-85%, Thalassemia: 85-90%, Aplastic anemia: 80-85%. Top centers like Apollo, Tata Memorial, Fortis perform 200+ BMTs annually with outcomes matching USA/Europe.' },
    { q: 'Do I need a matched donor for BMT in India?', a: 'Depends on disease. Autologous (your own cells): No donor needed. Allogeneic: Matched sibling best (25% chance), Matched unrelated donor (MUD) via registries (50-70% find match), Haploidentical (parent/child, 100% available) now highly successful in India.' },
    { q: 'How long do I stay in India for BMT?', a: '6-8 weeks minimum. Pre-transplant evaluation: 1 week, Conditioning chemotherapy: 7-10 days, Transplant day: Day 0, Hospital stay post-transplant: 3-5 weeks (until engraftment), Outpatient monitoring: 2-4 weeks. Total stay: 8-12 weeks for international patients.' }
  ],
  'neurosurgery-india-cost-hospitals': [
    { q: 'How much does neurosurgery cost in India?', a: 'Brain tumor craniotomy: $8,000-$12,000, Spinal fusion: $6,500-$9,500, Aneurysm clipping: $10,000-$15,000, Gamma Knife radiosurgery: $5,000-$8,000. Costs are 65-80% lower than USA. Includes pre-op imaging, surgery, ICU/hospital stay, medications, and follow-up.' },
    { q: 'Do Indian neurosurgeons have advanced training?', a: 'Yes, top neurosurgeons have MCh (Neurosurgery) from AIIMS/NIMHANS, fellowship training from USA/Europe (Johns Hopkins, Mayo Clinic), 15-20+ years experience, perform 300+ complex surgeries annually. Many trained in minimally invasive techniques, Gamma Knife, CyberKnife.' },
    { q: 'What advanced technology is available in India?', a: 'Top centers have: Gamma Knife Icon (brain tumors without surgery), CyberKnife (robotic radiosurgery), Intraoperative MRI (iMRI), Neuronavigation (GPS for brain), Endoscopy (keyhole surgery), Awake craniotomy (speech preservation). Equipment from Carl Zeiss, Medtronic, Elekta - same as USA.' },
    { q: 'How long is recovery after brain surgery in India?', a: 'Hospital stay: 5-10 days (simple), 7-14 days (complex). ICU: 1-3 days. Return to light activities: 2-4 weeks. Full recovery: 3-6 months. Can fly home: 10-14 days post-op with clearance. Radiation therapy (if needed): Outpatient over 4-6 weeks, or continue at home.' }
  ],
  'dubai-to-india-medical-tourism': [
    { q: 'How much can Dubai patients save by choosing India?', a: 'Average savings: 65-75% on most procedures. Heart bypass: AED 144,000 saved (73%), Knee replacement: AED 52,000 (73%), IVF: AED 30,000 (65%), Liver transplant: AED 260,000 (74%). Total savings for complex procedures can exceed AED 100,000-200,000.' },
    { q: 'How long does it take to fly from Dubai to India?', a: 'Dubai to Mumbai: 3 hours direct, Delhi: 3.5 hours, Bangalore: 4 hours, Chennai: 4.5 hours. Multiple daily flights from Emirates, Air India, IndiGo, SpiceJet. Flights cost AED 1,000-2,500 round trip. Medical visa processed within 72 hours online.' },
    { q: 'Do Indian hospitals cater to UAE patients?', a: 'Yes! Top hospitals (Apollo, Fortis, Max, Manipal, Medanta) have dedicated UAE patient coordinators, Arabic-speaking staff, halal food options, prayer rooms, private suites, UAE payment methods (credit card, wire transfer), and direct partnerships with UAE insurance companies.' },
    { q: 'Is medical care in India as good as Dubai/UAE?', a: 'Yes, for top JCI-accredited hospitals. Same standards: Apollo/Fortis success rates match Cleveland Clinic/Mayo. Same doctors: Many trained at Johns Hopkins, Harvard, UK institutions. Same technology: Robotic surgery, Gamma Knife, advanced diagnostics. Same accreditation: JCI (international gold standard).' }
  ],
  'riyadh-to-india-healthcare': [
    { q: 'How much can Saudi patients save in India?', a: 'Average savings: 70-80% on most procedures. Heart bypass: SAR 142,500 saved (72%), Knee replacement: SAR 51,250 (73%), Liver transplant: SAR 256,250 (74%), IVF: SAR 26,250 (70%). For complex procedures, savings can exceed SAR 100,000-200,000 per patient.' },
    { q: 'How long does it take to fly from Riyadh to India?', a: 'Riyadh to Mumbai: 4 hours direct, Delhi: 4.5 hours, Bangalore: 5 hours, Chennai: 5.5 hours. Multiple weekly flights from Saudia, Air India, IndiGo. Flights cost SAR 1,500-3,000 round trip. Medical visa (e-Medical Visa) processed online within 3-5 days.' },
    { q: 'Do Indian hospitals accommodate Saudi cultural needs?', a: 'Yes! Top hospitals provide: Arabic-speaking coordinators, halal food (all meals), prayer rooms with Qibla direction, gender-specific care (female doctors for women), private family suites, Islamic dietary requirements, flexible prayer times during treatment. Many hospitals have 10+ years experience with Saudi patients.' },
    { q: 'Are Indian doctors qualified to treat Saudi patients?', a: 'Yes, top doctors have international training (USA, UK, Europe), 15-20+ years experience, perform 300+ procedures annually. Many hospitals have treated 5,000+ Saudi patients. Success rates match or exceed Saudi hospitals. All JCI-accredited hospitals follow international protocols identical to Gulf region hospitals.' }
  ],
  'medical-visa-india-complete-guide': [
    { q: 'How long does it take to get medical visa for India?', a: 'e-Medical Visa: 3-5 days online (fastest), Medical Visa on Arrival: Instant at 6 major airports, Regular Medical Visa: 7-10 days at embassy. e-Medical Visa recommended for GCC patients - apply at indianvisaonline.gov.in, receive approval via email, valid for 60 days triple entry.' },
    { q: 'How much does Indian medical visa cost?', a: 'e-Medical Visa: $80 (AED 294, SAR 300) online payment via credit card. Medical Visa on Arrival: $80 cash/card at airport. Regular Medical Visa (embassy): $50-120 depending on nationality and duration. Medical attendant visa (companion): $80 (up to 2 attendants allowed).' },
    { q: 'Can my family accompany me on medical visa?', a: 'Yes, up to 2 family members can apply for Medical Attendant Visa (linked to patient visa). Same process as e-Medical Visa, costs $80 per person, approved within 3-5 days. Family can stay entire treatment duration with patient. Extension possible up to 1 year via FRRO office.' },
    { q: 'What documents do I need for Indian medical visa?', a: 'Required: Valid passport (6 months validity), Recent photo (white background), Hospital letter (treatment details, estimated cost, duration), Round-trip flight booking, Proof of funds ($50-100/day). Optional but helpful: Medical reports, doctor referral letter, travel insurance. Upload documents during online application.' }
  ]
};

function addFAQSchemaToFile(articleFolder, faqs) {
  const filePath = path.join(basePath, articleFolder, 'page.tsx');

  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${filePath}`);
    return false;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if FAQSchema already added
  if (content.includes('FAQSchema')) {
    console.log(`⏭️  ${articleFolder} - Already has FAQ schema`);
    return false;
  }

  // Add import if not present
  if (!content.includes("import { FAQSchema }")) {
    const importPattern = /import { InternalLinks } from '@\/components\/seo\/internal-links';/;
    if (importPattern.test(content)) {
      content = content.replace(
        importPattern,
        "import { InternalLinks } from '@/components/seo/internal-links';\nimport { FAQSchema } from '@/components/seo/faq-schema-client';"
      );
    } else {
      console.log(`⚠️  ${articleFolder} - Could not find import insertion point`);
      return false;
    }
  }

  // Generate FAQ data
  const faqData = faqs.map(faq => {
    const escapedQ = faq.q.replace(/"/g, '\\"').replace(/'/g, "\\'");
    const escapedA = faq.a.replace(/"/g, '\\"').replace(/'/g, "\\'");
    return `        { question: "${escapedQ}", answer: "${escapedA}" }`;
  }).join(',\n');

  const schemaComponent = `      {/* FAQ Schema for Rich Snippets */}
      <FAQSchema faqs={[
${faqData}
      ]} />

      `;

  // Find FAQ section - try multiple patterns
  const patterns = [
    /{\/\* FAQs? \*\/}\s*<div className="my-12">/,
    /{\/\* FAQ \*\/}\s*<section className="mb-12">/,
    /<h2 className="mb-6 text-3xl font-bold">FAQ<\/h2>/,
    /{\/\* FAQ \*\/}\s*<Card>/,
    /{\/\* FAQ Section \*\/}\s*<Card>/
  ];

  let inserted = false;
  for (const pattern of patterns) {
    if (pattern.test(content)) {
      const match = content.match(pattern);
      if (match) {
        content = content.slice(0, match.index) + schemaComponent + content.slice(match.index);
        inserted = true;
        break;
      }
    }
  }

  if (!inserted) {
    console.log(`⚠️  ${articleFolder} - FAQ section not found`);
    return false;
  }

  // Write updated content
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ ${articleFolder} - FAQ schema added (${faqs.length} FAQs)`);
  return true;
}

// Process all articles
console.log('🚀 Adding FAQ schemas to remaining 10 articles...\n');

let successCount = 0;
let failCount = 0;

Object.entries(articleFAQs).forEach(([folder, faqs]) => {
  if (addFAQSchemaToFile(folder, faqs)) {
    successCount++;
  } else {
    failCount++;
  }
});

console.log(`\n✅ Success: ${successCount}/10 articles`);
console.log(`❌ Failed: ${failCount}/10 articles`);
console.log('\n🎯 Run: node add-remaining-faq-schemas.js');

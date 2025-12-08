/**
 * Transform Header Component to use Arabic translations from messages/ar.json
 * This script updates the navigation structure to use t('nav.xxx') pattern
 */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/layout/header-improved.tsx');
let content = fs.readFileSync(filePath, 'utf8');

console.log('🚀 Starting header transformation for Arabic support...\n');

// Transformation 1: Update main navigation items to use translation keys
const mainNavTransformations = [
  {
    name: 'Treatments menu item',
    old: `name: 'Treatments',`,
    new: `name: t('nav.treatments'),`
  },
  {
    name: 'Hospitals menu item',
    old: `name: 'Hospitals',`,
    new: `name: t('nav.hospitals'),`
  },
  {
    name: 'Doctors menu item',
    old: `name: 'Doctors',`,
    new: `name: t('nav.doctors'),`
  },
  {
    name: 'Resources menu item',
    old: `name: 'Resources',`,
    new: `name: t('nav.resources'),`
  },
  {
    name: 'For Patients menu item',
    old: `name: 'For Patients',`,
    new: `name: t('nav.forPatients'),`
  },
  {
    name: 'About menu item',
    old: `name: 'About',`,
    new: `name: t('nav.about'),`
  },
  {
    name: 'Contact menu item',
    old: `name: 'Contact',`,
    new: `name: t('nav.contact'),`
  }
];

// Transformation 2: Update treatment categories
const categoryTransformations = [
  {
    name: 'Cardiac category',
    old: `category: '❤️ Cardiac',`,
    new: `category: t('nav.categories.cardiac'),`
  },
  {
    name: 'Orthopedic category',
    old: `category: '🦴 Orthopedic',`,
    new: `category: t('nav.categories.orthopedic'),`
  },
  {
    name: 'Cancer category',
    old: `category: '🎗️ Cancer Treatment',`,
    new: `category: t('nav.categories.cancer'),`
  },
  {
    name: 'Eye Care category',
    old: `category: '👁️ Eye Care',`,
    new: `category: t('nav.categories.eyeCare'),`
  },
  {
    name: 'Dental category',
    old: `category: '🦷 Dental',`,
    new: `category: t('nav.categories.dental'),`
  },
  {
    name: 'Cosmetic category',
    old: `category: '✨ Cosmetic',`,
    new: `category: t('nav.categories.cosmetic'),`
  },
  {
    name: 'Bariatric category',
    old: `category: '⚖️ Bariatric',`,
    new: `category: t('nav.categories.bariatric'),`
  },
  {
    name: 'Fertility category',
    old: `category: '👶 Fertility',`,
    new: `category: t('nav.categories.fertility'),`
  },
  {
    name: 'General Surgery category',
    old: `category: '🏥 General Surgery',`,
    new: `category: t('nav.categories.generalSurgery'),`
  },
  {
    name: 'Urology category',
    old: `category: '🩺 Urology',`,
    new: `category: t('nav.categories.urology'),`
  },
  {
    name: "Women's Health category",
    old: `category: '👩‍⚕️ Women\\'s Health',`,
    new: `category: t('nav.categories.womensHealth'),`
  },
  {
    name: 'Neurology category',
    old: `category: '🧠 Neurology',`,
    new: `category: t('nav.categories.neurology'),`
  }
];

// Transformation 3: Update treatment items (50+ items)
const treatmentItemTransformations = [
  // Cardiac
  { old: `{ name: 'Heart Bypass Surgery',`, new: `{ name: t('nav.treatments.heartBypass'),` },
  { old: `{ name: 'Angioplasty & Stents',`, new: `{ name: t('nav.treatments.angioplasty'),` },
  { old: `{ name: 'Heart Valve Replacement',`, new: `{ name: t('nav.treatments.heartValve'),` },
  // Orthopedic
  { old: `{ name: 'Knee Replacement',`, new: `{ name: t('nav.treatments.kneeReplacement'),` },
  { old: `{ name: 'Hip Replacement',`, new: `{ name: t('nav.treatments.hipReplacement'),` },
  { old: `{ name: 'Spine Surgery',`, new: `{ name: t('nav.treatments.spineSurgery'),` },
  { old: `{ name: 'ACL Reconstruction',`, new: `{ name: t('nav.treatments.aclReconstruction'),` },
  { old: `{ name: 'Shoulder Surgery',`, new: `{ name: t('nav.treatments.shoulderSurgery'),` },
  // Cancer
  { old: `{ name: 'Breast Cancer',`, new: `{ name: t('nav.treatments.breastCancer'),` },
  { old: `{ name: 'Lung Cancer',`, new: `{ name: t('nav.treatments.lungCancer'),` },
  { old: `{ name: 'Colon Cancer',`, new: `{ name: t('nav.treatments.colonCancer'),` },
  { old: `{ name: 'Prostate Cancer',`, new: `{ name: t('nav.treatments.prostateCancer'),` },
  { old: `{ name: 'Blood Cancer',`, new: `{ name: t('nav.treatments.bloodCancer'),` },
  { old: `{ name: 'Cervical Cancer',`, new: `{ name: t('nav.treatments.cervicalCancer'),` },
  // Eye Care
  { old: `{ name: 'Cataract Surgery',`, new: `{ name: t('nav.treatments.cataractSurgery'),` },
  { old: `{ name: 'LASIK Eye Surgery',`, new: `{ name: t('nav.treatments.lasikEyeSurgery'),` },
  { old: `{ name: 'Retina Treatment',`, new: `{ name: t('nav.treatments.retinaTreatment'),` },
  // Dental
  { old: `{ name: 'Dental Implants',`, new: `{ name: t('nav.treatments.dentalImplants'),` },
  { old: `{ name: 'All-on-4 Implants',`, new: `{ name: t('nav.treatments.allOn4Implants'),` },
  { old: `{ name: 'Veneers',`, new: `{ name: t('nav.treatments.veneers'),` },
  { old: `{ name: 'Smile Makeover',`, new: `{ name: t('nav.treatments.smileMakeover'),` },
  // Cosmetic
  { old: `{ name: 'Rhinoplasty',`, new: `{ name: t('nav.treatments.rhinoplasty'),` },
  { old: `{ name: 'Hair Transplant',`, new: `{ name: t('nav.treatments.hairTransplant'),` },
  { old: `{ name: 'Liposuction',`, new: `{ name: t('nav.treatments.liposuction'),` },
  { old: `{ name: 'Breast Augmentation',`, new: `{ name: t('nav.treatments.breastAugmentation'),` },
  // Bariatric
  { old: `{ name: 'Gastric Bypass',`, new: `{ name: t('nav.treatments.gastricBypass'),` },
  { old: `{ name: 'Gastric Sleeve',`, new: `{ name: t('nav.treatments.gastricSleeve'),` },
  { old: `{ name: 'Bariatric Surgery',`, new: `{ name: t('nav.treatments.bariatricSurgery'),` },
  // Fertility
  { old: `{ name: 'IVF Treatment',`, new: `{ name: t('nav.treatments.ivfTreatment'),` },
  { old: `{ name: 'ICSI Treatment',`, new: `{ name: t('nav.treatments.icsiTreatment'),` },
  { old: `{ name: 'Egg Freezing',`, new: `{ name: t('nav.treatments.eggFreezing'),` },
  { old: `{ name: 'PCOS Treatment',`, new: `{ name: t('nav.treatments.pcosTreatment'),` },
  // General Surgery
  { old: `{ name: 'Piles Surgery',`, new: `{ name: t('nav.treatments.pilesSurgery'),` },
  { old: `{ name: 'Hernia Surgery',`, new: `{ name: t('nav.treatments.herniaSurgery'),` },
  { old: `{ name: 'Gallbladder Surgery',`, new: `{ name: t('nav.treatments.gallbladderSurgery'),` },
  { old: `{ name: 'Appendix Surgery',`, new: `{ name: t('nav.treatments.appendixSurgery'),` },
  { old: `{ name: 'Thyroid Surgery',`, new: `{ name: t('nav.treatments.thyroidSurgery'),` },
  // Urology
  { old: `{ name: 'Kidney Stone',`, new: `{ name: t('nav.treatments.kidneyStone'),` },
  { old: `{ name: 'Kidney Transplant',`, new: `{ name: t('nav.treatments.kidneyTransplant'),` },
  { old: `{ name: 'Prostate Treatment',`, new: `{ name: t('nav.treatments.prostateTreatment'),` },
  // Women's Health
  { old: `{ name: 'Hysterectomy',`, new: `{ name: t('nav.treatments.hysterectomy'),` },
  { old: `{ name: 'Fibroid Treatment',`, new: `{ name: t('nav.treatments.fibroidTreatment'),` },
  { old: `{ name: 'Endometriosis',`, new: `{ name: t('nav.treatments.endometriosis'),` },
  // Neurology
  { old: `{ name: 'Brain Surgery',`, new: `{ name: t('nav.treatments.brainSurgery'),` },
  { old: `{ name: 'Neurosurgery',`, new: `{ name: t('nav.treatments.neurosurgery'),` },
  { old: `{ name: 'Epilepsy Treatment',`, new: `{ name: t('nav.treatments.epilepsyTreatment'),` }
];

// Transformation 4: Update Resources submenu
const resourcesTransformations = [
  { old: `{ name: 'Blog & Articles',`, new: `{ name: t('nav.resources.blogArticles'),` },
  { old: `{ name: 'Success Stories',`, new: `{ name: t('nav.resources.successStories'),` },
  { old: `{ name: 'Patient Testimonials',`, new: `{ name: t('nav.resources.patientTestimonials'),` },
  { old: `{ name: 'Treatment Guides',`, new: `{ name: t('nav.resources.treatmentGuides'),` },
  { old: `{ name: 'FAQs',`, new: `{ name: t('nav.resources.faqs'),` },
  { old: `{ name: 'Cost Calculator',`, new: `{ name: t('nav.resources.costCalculator'),` }
];

// Transformation 5: Update For Patients submenu (GCC countries)
const countriesTransformations = [
  { old: `{ name: '🇦🇪 UAE Patients',`, new: `{ name: t('nav.countries.uaePatients'),` },
  { old: `{ name: '🇸🇦 Saudi Patients',`, new: `{ name: t('nav.countries.saudiPatients'),` },
  { old: `{ name: '🇶🇦 Qatar Patients',`, new: `{ name: t('nav.countries.qatarPatients'),` },
  { old: `{ name: '🇴🇲 Oman Patients',`, new: `{ name: t('nav.countries.omanPatients'),` },
  { old: `{ name: '🇰🇼 Kuwait Patients',`, new: `{ name: t('nav.countries.kuwaitPatients'),` },
  { old: `{ name: '🇧🇭 Bahrain Patients',`, new: `{ name: t('nav.countries.bahrainPatients'),` },
  { old: `{ name: '✈️ Visa Assistance',`, new: `{ name: t('nav.countries.visaAssistance'),` },
  { old: `{ name: '🗺️ Travel Guide',`, new: `{ name: t('nav.countries.travelGuide'),` }
];

// Transformation 6: Update announcement bar
const announcementTransformations = [
  {
    name: 'JCI Hospitals announcement',
    old: `<span>25+ JCI Hospitals</span>`,
    new: `<span>{t('nav.announcement.jciHospitals')}</span>`
  },
  {
    name: 'Save Money announcement',
    old: `<span>Save 60-80%</span>`,
    new: `<span>{t('nav.announcement.saveMoney')}</span>`
  },
  {
    name: 'Arabic Support announcement',
    old: `<span>Arabic Support 24/7</span>`,
    new: `<span>{t('nav.announcement.arabicSupport')}</span>`
  }
];

// Transformation 7: Update CTA buttons
const ctaTransformations = [
  {
    name: 'Free Consultation button',
    old: `Free Consultation`,
    new: `{t('nav.buttons.freeConsultation')}`
  },
  {
    name: 'WhatsApp button (first occurrence)',
    old: `WhatsApp في العربية`,
    new: `{t('nav.buttons.whatsapp')}`
  }
];

// Apply all transformations
let totalTransformed = 0;

console.log('📝 Transforming main navigation items...');
mainNavTransformations.forEach(t => {
  if (content.includes(t.old)) {
    content = content.replace(t.old, t.new);
    totalTransformed++;
    console.log(`  ✅ ${t.name}`);
  } else {
    console.log(`  ⚠️  ${t.name} - NOT FOUND`);
  }
});

console.log('\n📝 Transforming treatment categories...');
categoryTransformations.forEach(t => {
  if (content.includes(t.old)) {
    content = content.replace(t.old, t.new);
    totalTransformed++;
    console.log(`  ✅ ${t.name}`);
  } else {
    console.log(`  ⚠️  ${t.name} - NOT FOUND`);
  }
});

console.log('\n📝 Transforming treatment items (50+ items)...');
let treatmentCount = 0;
treatmentItemTransformations.forEach(t => {
  if (content.includes(t.old)) {
    content = content.replace(t.old, t.new);
    totalTransformed++;
    treatmentCount++;
  }
});
console.log(`  ✅ Transformed ${treatmentCount}/${treatmentItemTransformations.length} treatment items`);

console.log('\n📝 Transforming resources submenu...');
let resourcesCount = 0;
resourcesTransformations.forEach(t => {
  if (content.includes(t.old)) {
    content = content.replace(t.old, t.new);
    totalTransformed++;
    resourcesCount++;
  }
});
console.log(`  ✅ Transformed ${resourcesCount}/${resourcesTransformations.length} resources items`);

console.log('\n📝 Transforming countries submenu...');
let countriesCount = 0;
countriesTransformations.forEach(t => {
  if (content.includes(t.old)) {
    content = content.replace(t.old, t.new);
    totalTransformed++;
    countriesCount++;
  }
});
console.log(`  ✅ Transformed ${countriesCount}/${countriesTransformations.length} country items`);

console.log('\n📝 Transforming announcement bar...');
announcementTransformations.forEach(t => {
  if (content.includes(t.old)) {
    content = content.replace(t.old, t.new);
    totalTransformed++;
    console.log(`  ✅ ${t.name}`);
  } else {
    console.log(`  ⚠️  ${t.name} - NOT FOUND`);
  }
});

console.log('\n📝 Transforming CTA buttons...');
ctaTransformations.forEach(t => {
  if (content.includes(t.old)) {
    content = content.replace(t.old, t.new);
    totalTransformed++;
    console.log(`  ✅ ${t.name}`);
  } else {
    console.log(`  ⚠️  ${t.name} - NOT FOUND`);
  }
});

// Write the transformed content
fs.writeFileSync(filePath, content, 'utf8');

console.log(`\n✨ Header transformation complete!`);
console.log(`📊 Summary: ${totalTransformed} transformations applied`);
console.log('\n🎯 Next: Test http://localhost:3001/ar to see Arabic navigation!');

/**
 * Transform Footer Component to use Arabic translations
 */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/layout/footer-improved.tsx');
let content = fs.readFileSync(filePath, 'utf8');

console.log('🚀 Starting footer transformation for Arabic support...\n');

const transformations = [
  // Company Links
  { old: `{ name: 'About Us',`, new: `{ name: t('company.aboutUs'),` },
  { old: `{ name: 'Why Choose Us',`, new: `{ name: t('company.whyChooseUs'),` },
  { old: `{ name: 'Our Team',`, new: `{ name: t('company.ourTeam'),` },
  { old: `{ name: 'Success Stories',`, new: `{ name: t('company.successStories'),` },
  { old: `{ name: 'Patient Testimonials',`, new: `{ name: t('company.patientTestimonials'),` },
  { old: `{ name: 'Accreditations',`, new: `{ name: t('company.accreditations'),` },
  { old: `{ name: 'Career',`, new: `{ name: t('company.career'),` },
  { old: `{ name: 'Press & Media',`, new: `{ name: t('company.pressMedia'),` },

  // Services Links
  { old: `{ name: 'All Treatments',`, new: `{ name: t('services.allTreatments'),` },
  { old: `{ name: 'Cardiac Care',`, new: `{ name: t('services.cardiacCare'),` },
  { old: `{ name: 'Orthopedic',`, new: `{ name: t('services.orthopedic'),` },
  { old: `{ name: 'Cancer Treatment',`, new: `{ name: t('services.cancerTreatment'),` },
  { old: `{ name: 'Cosmetic Surgery',`, new: `{ name: t('services.cosmeticSurgery'),` },
  { old: `{ name: 'Dental Care',`, new: `{ name: t('services.dentalCare'),` },
  { old: `{ name: 'Eye Care',`, new: `{ name: t('services.eyeCare'),` },
  { old: `{ name: 'Fertility Treatment',`, new: `{ name: t('services.fertilityTreatment'),` },

  // Resources Links
  { old: `{ name: 'Blog & Articles',`, new: `{ name: t('resources.blogArticles'),` },
  { old: `{ name: 'Treatment Guides',`, new: `{ name: t('resources.treatmentGuides'),` },
  { old: `{ name: 'Cost Calculator',`, new: `{ name: t('resources.costCalculator'),` },
  { old: `{ name: 'FAQs',`, new: `{ name: t('resources.faqs'),` },
  { old: `{ name: 'Medical Glossary',`, new: `{ name: t('resources.medicalGlossary'),` },
  { old: `{ name: 'Insurance Guide',`, new: `{ name: t('resources.insuranceGuide'),` },
  { old: `{ name: 'Travel Tips',`, new: `{ name: t('resources.travelTips'),` },
  { old: `{ name: 'Recovery Guide',`, new: `{ name: t('resources.recoveryGuide'),` },

  // For Patients Links
  { old: `{ name: 'Visa Assistance',`, new: `{ name: t('forPatients.visaAssistance'),` },
  { old: `{ name: 'Travel Arrangements',`, new: `{ name: t('forPatients.travelArrangements'),` },
  { old: `{ name: 'Accommodation',`, new: `{ name: t('forPatients.accommodation'),` },
  { old: `{ name: 'Language Support',`, new: `{ name: t('forPatients.languageSupport'),` },
  { old: `{ name: 'Airport Pickup',`, new: `{ name: t('forPatients.airportPickup'),` },
  { old: `{ name: 'Medical Records',`, new: `{ name: t('forPatients.medicalRecords'),` },
  { old: `{ name: 'Second Opinion',`, new: `{ name: t('forPatients.secondOpinion'),` },
  { old: `{ name: 'Payment Options',`, new: `{ name: t('forPatients.paymentOptions'),` },

  // Trust Badges
  { old: `text: '25+ JCI Accredited'`, new: `text: t('trustBadges.jciAccredited')` },
  { old: `text: '100% Safe & Secure'`, new: `text: t('trustBadges.safeSecure')` },
  { old: `text: '15,000+ Patients'`, new: `text: t('trustBadges.patients')` },
  { old: `text: '4.9/5 Rating'`, new: `text: t('trustBadges.rating')` },
];

let successCount = 0;
transformations.forEach(t => {
  if (content.includes(t.old)) {
    content = content.replace(t.old, t.new);
    successCount++;
  }
});

fs.writeFileSync(filePath, content, 'utf8');

console.log(`✨ Footer transformation complete!`);
console.log(`📊 Summary: ${successCount}/${transformations.length} transformations applied`);
console.log('\n🎯 Footer is now ready for Arabic display!');

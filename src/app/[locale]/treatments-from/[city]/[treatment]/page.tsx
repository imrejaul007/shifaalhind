import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/seo/breadcrumb-schema';
import { MedicalProcedureSchema } from '@/components/seo/medical-procedure-schema';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { HowToSchema } from '@/components/seo/howto-schema';
import { OfferSchema } from '@/components/seo/offer-schema';
import { SpeakableSchema } from '@/components/seo/speakable-schema';
import { InternalLinks } from '@/components/seo/internal-links';
import { Testimonials, TREATMENT_TESTIMONIALS } from '@/components/testimonials/testimonials';
import { TrustBadges } from '@/components/trust-badges/trust-badges';
import { LastUpdatedBanner, MedicalReviewBadge } from '@/components/seo/eeat-signals';
import { gccCountries, treatments, currencies } from '@/config/gcc-countries';
import { getDefaultPatientJourneySteps } from '@/lib/schemas';

export const dynamic = 'force-dynamic';

// Treatment data with costs and descriptions
const treatmentData: Record<string, {
  indiaLow: number; indiaHigh: number; gccMultiplier: number;
  name: string; nameAr: string; successRate: string; duration: string; stay: string;
  description: string; descriptionAr: string;
}> = {
  'heart-surgery': { indiaLow: 5000, indiaHigh: 10000, gccMultiplier: 5, name: 'Heart Surgery', nameAr: 'جراحة القلب', successRate: '98%+', duration: '3-6 hours', stay: '7-10 days', description: 'World-class cardiac surgery including CABG, valve replacement, and minimally invasive procedures at JCI-accredited hospitals.', descriptionAr: 'عمليات قلب على مستوى عالمي تشمل القلب المفتوح وتبديل الصمامات في مستشفيات معتمدة من JCI.' },
  'knee-replacement': { indiaLow: 5000, indiaHigh: 7000, gccMultiplier: 4, name: 'Knee Replacement', nameAr: 'تبديل الركبة', successRate: '95%+', duration: '1-2 hours', stay: '5-7 days', description: 'Total and partial knee replacement using robotic-assisted surgery with rapid recovery protocols.', descriptionAr: 'تبديل ركبة كامل أو جزئي بالروبوت مع برنامج تعافي سريع.' },
  'hip-replacement': { indiaLow: 6000, indiaHigh: 8000, gccMultiplier: 4, name: 'Hip Replacement', nameAr: 'تبديل الورك', successRate: '95%+', duration: '1-2 hours', stay: '5-7 days', description: 'Anterior approach hip replacement with ceramic-on-ceramic implants for 20+ year durability.', descriptionAr: 'تبديل ورك بالطريقة الأمامية مع زراعات سيراميك تدوم أكثر من 20 سنة.' },
  'ivf': { indiaLow: 3000, indiaHigh: 5000, gccMultiplier: 3, name: 'IVF & Fertility', nameAr: 'أطفال الأنابيب', successRate: '55-65%', duration: '2-3 weeks', stay: '14-21 days', description: 'IVF, ICSI, and fertility treatments with latest embryo selection technology and high success rates.', descriptionAr: 'أطفال أنابيب وحقن مجهري بأحدث تقنيات اختيار الأجنة ونسب نجاح عالية.' },
  'dental-implants': { indiaLow: 500, indiaHigh: 1500, gccMultiplier: 4, name: 'Dental Implants', nameAr: 'زراعة الأسنان', successRate: '97%+', duration: '1-2 hours', stay: '5-7 days', description: 'Premium dental implants using Nobel Biocare and Straumann systems with same-day teeth options.', descriptionAr: 'زراعة أسنان بأحسن الأنظمة العالمية مع خيار الأسنان في نفس اليوم.' },
  'hair-transplant': { indiaLow: 1500, indiaHigh: 3000, gccMultiplier: 3, name: 'Hair Transplant', nameAr: 'زراعة الشعر', successRate: '95%+', duration: '6-8 hours', stay: '3-5 days', description: 'FUE and DHI hair transplant with 3000-5000 grafts using sapphire blade technology.', descriptionAr: 'زراعة شعر بتقنية FUE و DHI بشفرات الياقوت - من 3000 لين 5000 بصيلة.' },
  'cataract-surgery': { indiaLow: 1000, indiaHigh: 2500, gccMultiplier: 4, name: 'Cataract Surgery', nameAr: 'عملية الماء الأبيض', successRate: '99%+', duration: '15-30 min', stay: '2-3 days', description: 'Phacoemulsification cataract surgery with premium multifocal and toric IOL options.', descriptionAr: 'عملية الماء الأبيض بالفاكو مع عدسات متعددة البؤر.' },
  'cancer-treatment': { indiaLow: 5000, indiaHigh: 20000, gccMultiplier: 4, name: 'Cancer Treatment', nameAr: 'علاج السرطان', successRate: '70-90%', duration: 'Varies', stay: '2-8 weeks', description: 'Comprehensive oncology including chemotherapy, immunotherapy, radiation, and robotic surgery.', descriptionAr: 'علاج سرطان شامل يشمل الكيماوي والمناعي والإشعاعي والجراحة الروبوتية.' },
  'cosmetic-surgery': { indiaLow: 2000, indiaHigh: 6000, gccMultiplier: 3, name: 'Cosmetic Surgery', nameAr: 'جراحة التجميل', successRate: '95%+', duration: '1-4 hours', stay: '5-10 days', description: 'Rhinoplasty, liposuction, facelift, and body contouring by board-certified plastic surgeons.', descriptionAr: 'تجميل الأنف وشفط الدهون وشد الوجه من جراحين تجميل معتمدين.' },
  'bariatric-surgery': { indiaLow: 5000, indiaHigh: 8000, gccMultiplier: 4, name: 'Bariatric Surgery', nameAr: 'جراحة السمنة', successRate: '90%+', duration: '1-2 hours', stay: '3-5 days', description: 'Gastric sleeve and bypass surgery with comprehensive pre and post-operative support.', descriptionAr: 'تكميم المعدة وتحويل المسار مع دعم كامل قبل وبعد العملية.' },
  'organ-transplant': { indiaLow: 15000, indiaHigh: 30000, gccMultiplier: 4, name: 'Organ Transplant', nameAr: 'زراعة الأعضاء', successRate: '90-95%', duration: '4-12 hours', stay: '3-6 weeks', description: 'Kidney, liver, and bone marrow transplants at NOTTO-approved transplant centers.', descriptionAr: 'زراعة كلى وكبد ونخاع عظم في مراكز زراعة معتمدة من NOTTO.' },
  'neurosurgery': { indiaLow: 5000, indiaHigh: 15000, gccMultiplier: 5, name: 'Neurosurgery', nameAr: 'جراحة الأعصاب', successRate: '90%+', duration: '2-8 hours', stay: '7-14 days', description: 'Brain tumor removal, spinal cord surgery, and minimally invasive neurosurgical procedures.', descriptionAr: 'إزالة أورام الدماغ وعمليات الحبل الشوكي بأقل تدخل جراحي.' },
  'ophthalmology': { indiaLow: 1000, indiaHigh: 3000, gccMultiplier: 3, name: 'Ophthalmology', nameAr: 'طب العيون', successRate: '98%+', duration: '30-60 min', stay: '2-3 days', description: 'LASIK, retina surgery, glaucoma treatment, and corneal transplants.', descriptionAr: 'ليزك وعمليات الشبكية وعلاج الجلوكوما وزراعة القرنية.' },
  'ayurveda-wellness': { indiaLow: 1000, indiaHigh: 3000, gccMultiplier: 2, name: 'Ayurveda & Wellness', nameAr: 'الأيورفيدا والعافية', successRate: 'N/A', duration: '7-21 days', stay: '7-21 days', description: 'Traditional Ayurvedic treatments, Panchakarma detox, and holistic wellness programs.', descriptionAr: 'علاجات أيورفيدا تقليدية وبرامج ديتوكس وعافية شاملة.' },
};

// Flight data from GCC cities to India
const flightData: Record<string, { duration: string; airlines: string[]; airports: string }> = {
  'dubai': { duration: '3-3.5 hrs', airlines: ['Emirates', 'IndiGo', 'Air India'], airports: 'DXB → DEL/BOM/BLR' },
  'abu-dhabi': { duration: '3.5-4 hrs', airlines: ['Etihad', 'Air India', 'IndiGo'], airports: 'AUH → DEL/BOM/BLR' },
  'sharjah': { duration: '3-3.5 hrs', airlines: ['Air Arabia', 'IndiGo'], airports: 'SHJ → DEL/BOM/KOC' },
  'ajman': { duration: '3-3.5 hrs', airlines: ['Via Sharjah/Dubai'], airports: 'SHJ/DXB → DEL/BOM' },
  'fujairah': { duration: '3.5 hrs', airlines: ['Via Dubai'], airports: 'DXB → DEL/BOM' },
  'ras-al-khaimah': { duration: '3.5 hrs', airlines: ['Via Dubai'], airports: 'DXB → DEL/BOM' },
  'al-ain': { duration: '3.5 hrs', airlines: ['Via Abu Dhabi'], airports: 'AUH → DEL/BOM' },
  'riyadh': { duration: '4-4.5 hrs', airlines: ['Saudi Airlines', 'IndiGo', 'Air India'], airports: 'RUH → DEL/BOM/BLR' },
  'jeddah': { duration: '4.5-5 hrs', airlines: ['Saudi Airlines', 'Flynas', 'Air India'], airports: 'JED → DEL/BOM/HYD' },
  'dammam': { duration: '3.5-4 hrs', airlines: ['Saudi Airlines', 'IndiGo'], airports: 'DMM → DEL/BOM/KOC' },
  'khobar': { duration: '3.5-4 hrs', airlines: ['Via Dammam'], airports: 'DMM → DEL/BOM' },
  'mecca': { duration: '5 hrs', airlines: ['Via Jeddah'], airports: 'JED → DEL/BOM' },
  'medina': { duration: '5 hrs', airlines: ['Via Jeddah/Riyadh'], airports: 'JED/RUH → DEL/BOM' },
  'taif': { duration: '5 hrs', airlines: ['Via Jeddah'], airports: 'JED → DEL/BOM' },
  'tabuk': { duration: '5.5 hrs', airlines: ['Via Riyadh'], airports: 'RUH → DEL/BOM' },
  'doha': { duration: '4-4.5 hrs', airlines: ['Qatar Airways', 'IndiGo'], airports: 'DOH → DEL/BOM/BLR' },
  'al-wakrah': { duration: '4-4.5 hrs', airlines: ['Via Doha'], airports: 'DOH → DEL/BOM' },
  'al-khor': { duration: '4-4.5 hrs', airlines: ['Via Doha'], airports: 'DOH → DEL/BOM' },
  'muscat': { duration: '3-3.5 hrs', airlines: ['Oman Air', 'IndiGo', 'Air India'], airports: 'MCT → DEL/BOM/KOC' },
  'sohar': { duration: '3.5 hrs', airlines: ['Via Muscat'], airports: 'MCT → DEL/BOM' },
  'salalah': { duration: '4 hrs', airlines: ['Via Muscat'], airports: 'MCT → DEL/BOM' },
  'nizwa': { duration: '3.5 hrs', airlines: ['Via Muscat'], airports: 'MCT → DEL/BOM' },
  'kuwait-city': { duration: '4-4.5 hrs', airlines: ['Kuwait Airways', 'IndiGo', 'Air India'], airports: 'KWI → DEL/BOM/KOC' },
  'hawalli': { duration: '4-4.5 hrs', airlines: ['Via Kuwait'], airports: 'KWI → DEL/BOM' },
  'salmiya': { duration: '4-4.5 hrs', airlines: ['Via Kuwait'], airports: 'KWI → DEL/BOM' },
  'farwaniya': { duration: '4-4.5 hrs', airlines: ['Via Kuwait'], airports: 'KWI → DEL/BOM' },
  'manama': { duration: '3.5-4 hrs', airlines: ['Gulf Air', 'IndiGo'], airports: 'BAH → DEL/BOM/KOC' },
  'muharraq': { duration: '3.5-4 hrs', airlines: ['Via Bahrain'], airports: 'BAH → DEL/BOM' },
  'riffa': { duration: '3.5-4 hrs', airlines: ['Via Bahrain'], airports: 'BAH → DEL/BOM' },
};

// Top hospitals per treatment
const topHospitals: Record<string, Array<{ name: string; city: string; surgeon: string }>> = {
  'heart-surgery': [{ name: 'Fortis Escorts', city: 'New Delhi', surgeon: 'Dr. Ashok Seth' }, { name: 'Medanta', city: 'Gurugram', surgeon: 'Dr. Naresh Trehan' }, { name: 'Apollo', city: 'Chennai', surgeon: 'Dr. K.M. Cherian' }],
  'knee-replacement': [{ name: 'Fortis', city: 'Mumbai', surgeon: 'Dr. Sachin Tapasvi' }, { name: 'Apollo', city: 'Delhi', surgeon: 'Dr. Raju Vaishya' }, { name: 'Max', city: 'Delhi', surgeon: 'Dr. Saurabh Chugh' }],
  'hip-replacement': [{ name: 'Fortis', city: 'Mumbai', surgeon: 'Dr. Sachin Tapasvi' }, { name: 'Apollo', city: 'Chennai', surgeon: 'Dr. A.K. Venkatachalam' }, { name: 'Max', city: 'Delhi', surgeon: 'Dr. Saurabh Chugh' }],
  'ivf': [{ name: 'Nova IVF', city: 'Mumbai', surgeon: 'Dr. Hrishikesh Pai' }, { name: 'Cloudnine', city: 'Bangalore', surgeon: 'Dr. Kishore Kumar' }, { name: 'Apollo Fertility', city: 'Chennai', surgeon: 'Dr. Arun Muthuvel' }],
  'dental-implants': [{ name: 'Clove Dental', city: 'Delhi', surgeon: 'Dr. Arpit Gupta' }, { name: 'Apollo Dental', city: 'Chennai', surgeon: 'Dr. R. Ravindran' }, { name: 'FMS Dental', city: 'Hyderabad', surgeon: 'Dr. Mallesh Hiremath' }],
  'hair-transplant': [{ name: 'Eugenix', city: 'Delhi', surgeon: 'Dr. Pradeep Sethi' }, { name: 'Medispa', city: 'Jaipur', surgeon: 'Dr. Suneet Soni' }, { name: 'DHI India', city: 'Mumbai', surgeon: 'Dr. Gajanan Jadhao' }],
  'cataract-surgery': [{ name: 'Shankar Netralaya', city: 'Chennai', surgeon: 'Dr. S.S. Badrinath' }, { name: 'LVPEI', city: 'Hyderabad', surgeon: 'Dr. Prashant Garg' }, { name: 'Aravind Eye', city: 'Madurai', surgeon: 'Dr. R.D. Ravindran' }],
  'cancer-treatment': [{ name: 'Tata Memorial', city: 'Mumbai', surgeon: 'Dr. R.A. Badwe' }, { name: 'AIIMS', city: 'Delhi', surgeon: 'Dr. G.K. Rath' }, { name: 'Apollo Cancer', city: 'Chennai', surgeon: 'Dr. Venkata Pradeep' }],
  'cosmetic-surgery': [{ name: 'Kokilaben', city: 'Mumbai', surgeon: 'Dr. Debraj Shome' }, { name: 'Fortis', city: 'Delhi', surgeon: 'Dr. Ajaya Kashyap' }, { name: 'Apollo Cosmetic', city: 'Hyderabad', surgeon: 'Dr. V.S. Kumar' }],
  'bariatric-surgery': [{ name: 'Asian Bariatrics', city: 'Ahmedabad', surgeon: 'Dr. Mahendra Narwaria' }, { name: 'Apollo', city: 'Delhi', surgeon: 'Dr. Randeep Wadhawan' }, { name: 'Max', city: 'Delhi', surgeon: 'Dr. Pradeep Chowbey' }],
  'organ-transplant': [{ name: 'Medanta', city: 'Gurugram', surgeon: 'Dr. A.S. Soin' }, { name: 'Apollo', city: 'Chennai', surgeon: 'Dr. Anant Kumar' }, { name: 'Fortis', city: 'Delhi', surgeon: 'Dr. Avnish Seth' }],
  'neurosurgery': [{ name: 'AIIMS', city: 'Delhi', surgeon: 'Dr. A.K. Mahapatra' }, { name: 'Medanta', city: 'Gurugram', surgeon: 'Dr. Rana Patir' }, { name: 'Fortis', city: 'Delhi', surgeon: 'Dr. Sandeep Vaishya' }],
  'ophthalmology': [{ name: 'Shankar Netralaya', city: 'Chennai', surgeon: 'Dr. S.S. Badrinath' }, { name: 'LVPEI', city: 'Hyderabad', surgeon: 'Dr. Prashant Garg' }, { name: 'Centre for Sight', city: 'Delhi', surgeon: 'Dr. Mahipal Sachdev' }],
  'ayurveda-wellness': [{ name: 'Kottakkal Arya Vaidya Sala', city: 'Kerala', surgeon: 'Dr. P.K. Warrier' }, { name: 'Somatheeram', city: 'Kerala', surgeon: 'Dr. B. Raveendranath' }, { name: 'Nagarjuna', city: 'Kerala', surgeon: 'Dr. G. Nagabhushanam' }],
};

function findCity(citySlug: string) {
  for (const country of gccCountries) {
    const city = country.cities.find(c => c.slug === citySlug);
    if (city) return { city, country };
  }
  return null;
}

function findTreatment(treatmentSlug: string) {
  return treatments.find(t => t.slug === treatmentSlug);
}

export function generateStaticParams() {
  const params: Array<{ city: string; treatment: string }> = [];
  for (const country of gccCountries) {
    for (const city of country.cities) {
      for (const treatment of treatments) {
        params.push({ city: city.slug, treatment: treatment.slug });
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ city: string; treatment: string; locale: string }> }): Promise<Metadata> {
  const { city: citySlug, treatment: treatmentSlug, locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://shifaalhind.onrender.com';
  const cityInfo = findCity(citySlug);
  const treatmentInfo = findTreatment(treatmentSlug);
  const tData = treatmentData[treatmentSlug];

  const cityName = cityInfo?.city.name || citySlug;
  const countryName = cityInfo?.country.name || '';
  const treatmentName = tData?.name || treatmentInfo?.name || treatmentSlug;
  const treatmentNameAr = tData?.nameAr || treatmentName;

  const title = `${treatmentName} from ${cityName}: Cost $${tData?.indiaLow?.toLocaleString()}-${tData?.indiaHigh?.toLocaleString()} | Save 60-80%`;
  const titleAr = `${treatmentNameAr} من ${cityName}: وفّر 60-80% | شفاء الهند`;
  const description = `${treatmentName} in India for ${cityName}, ${countryName} patients. Cost $${tData?.indiaLow?.toLocaleString()}-${tData?.indiaHigh?.toLocaleString()} (save 60-80%). ${tData?.successRate} success rate. JCI hospitals, Arabic support, visa help.`;
  const path = `/treatments-from/${citySlug}/${treatmentSlug}`;

  return {
    title: locale === 'ar' ? titleAr : title,
    description,
    keywords: [
      `${treatmentName} ${cityName}`, `${treatmentName} from ${cityName}`,
      `${treatmentName} India cost`, `${treatmentName} India from ${countryName}`,
      `medical tourism ${cityName} India`, `best ${treatmentName} hospital India`,
      treatmentNameAr, `${treatmentNameAr} من ${cityName}`,
      `تكلفة ${treatmentNameAr} في الهند`, `شلون أسوي ${treatmentNameAr} في الهند`,
    ],
    alternates: {
      canonical: `${baseUrl}${locale === 'ar' ? '/ar' : ''}${path}`,
      languages: { 'en-US': `${baseUrl}${path}`, 'ar-SA': `${baseUrl}/ar${path}`, 'x-default': `${baseUrl}${path}` },
    },
    openGraph: { title: locale === 'ar' ? titleAr : title, description, url: `${baseUrl}${path}`, siteName: 'Shifa AlHind', locale: locale === 'ar' ? 'ar_SA' : 'en_US' },
  };
}

export default async function CityTreatmentPage({ params }: { params: Promise<{ city: string; treatment: string; locale: string }> }) {
  const { city: citySlug, treatment: treatmentSlug, locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://shifaalhind.onrender.com';
  const cityInfo = findCity(citySlug);
  const treatmentConfig = findTreatment(treatmentSlug);
  const tData = treatmentData[treatmentSlug] || treatmentData['heart-surgery'];
  const flight = flightData[citySlug] || flightData['dubai'];
  const hospitals = topHospitals[treatmentSlug] || topHospitals['heart-surgery'];

  const cityName = cityInfo?.city.name || citySlug;
  const countryName = cityInfo?.country.name || '';
  const countrySlug = cityInfo?.country.slug || '';
  const currencyCode = cityInfo?.country.currency || 'USD';
  const currencyInfo = currencies[currencyCode as keyof typeof currencies];
  const rate = currencyInfo?.rate || 1;

  const treatmentName = tData.name;
  const treatmentNameAr = tData.nameAr;
  const isAr = locale === 'ar';

  const gccLow = Math.round(tData.indiaLow * tData.gccMultiplier * rate);
  const gccHigh = Math.round(tData.indiaHigh * tData.gccMultiplier * rate);
  const indiaLowLocal = Math.round(tData.indiaLow * rate);
  const indiaHighLocal = Math.round(tData.indiaHigh * rate);
  const savingsPercent = Math.round((1 - 1 / tData.gccMultiplier) * 100);

  const steps = getDefaultPatientJourneySteps(treatmentName);
  const faqs = [
    { question: `How much does ${treatmentName} cost in India for ${cityName} patients?`, answer: `${treatmentName} in India costs $${tData.indiaLow.toLocaleString()}-${tData.indiaHigh.toLocaleString()} (${currencyInfo?.symbol}${indiaLowLocal.toLocaleString()}-${indiaHighLocal.toLocaleString()}), compared to ${currencyInfo?.symbol}${gccLow.toLocaleString()}-${gccHigh.toLocaleString()} in ${countryName}. This is ${savingsPercent}% savings including hospital stay, surgery, and follow-up.` },
    { question: `Is it safe to get ${treatmentName} in India?`, answer: `Yes. India has 30+ JCI-accredited hospitals with internationally trained surgeons. ${treatmentName} success rate is ${tData.successRate}. Many surgeons trained at Mayo Clinic, Johns Hopkins, and Cleveland Clinic. Over 15,000 GCC patients treated successfully.` },
    { question: `How long do I need to stay in India for ${treatmentName}?`, answer: `Typical stay for ${treatmentName} is ${tData.stay}. This includes pre-operative tests (1-2 days), the procedure (${tData.duration}), and post-operative recovery. Your coordinator will provide a detailed timeline.` },
    { question: `Are there direct flights from ${cityName} to India?`, answer: `Yes. ${flight.airlines.join(', ')} operate ${flight.airports} routes. Flight time is approximately ${flight.duration}. We help you choose the best route based on your hospital location.` },
    { question: `What is included in the ${treatmentName} package?`, answer: `Our all-inclusive package covers: hospital fees, surgeon fees, anesthesia, post-op medications, 24/7 Arabic coordinator, airport pickup, hotel/guest house near hospital, medical visa assistance, and 12-month virtual follow-up via WhatsApp.` },
    { question: `Do I need a medical visa for India from ${countryName}?`, answer: `Yes, you need an Indian Medical Visa (M-Visa). We handle the entire process: invitation letter from hospital, visa form assistance, and documentation. Processing takes 3-5 business days. Valid for 60 days with extensions available.` },
    { question: `Can I bring a companion to India for my ${treatmentName}?`, answer: `Absolutely. Your companion gets a Medical Attendant Visa (MX-Visa). We arrange accommodation for both of you near the hospital. Many GCC patients bring a spouse or family member for support during recovery.` },
    { question: `What payment methods are accepted?`, answer: `We accept wire transfer, credit/debit cards (Visa, MasterCard), and cash (USD, ${currencyCode}). No upfront deposit required for consultation. Payment plan: 30% advance, 70% before procedure. Full transparency with no hidden costs.` },
  ];

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema items={[
        { name: 'Home', url: `${baseUrl}/${locale}` },
        { name: isAr ? 'العلاجات' : 'Treatments', url: `${baseUrl}/${locale}/treatments` },
        { name: isAr ? `من ${cityName}` : `From ${cityName}`, url: `${baseUrl}/${locale}/treatments-from/${citySlug}/${treatmentSlug}` },
      ]} />
      <MedicalProcedureSchema name={treatmentName} description={tData.description} procedureType="SurgicalProcedure" url={`https://shifaalhind.onrender.com/${locale}/treatments-from/${citySlug}/${treatmentSlug}`} />
      <FAQSchema faqs={faqs} />
      <HowToSchema name={`How to Get ${treatmentName} in India from ${cityName}`} description={`Step-by-step guide for ${cityName} patients to get ${treatmentName} in India.`} steps={steps} />
      <OfferSchema name={`${treatmentName} in India`} description={`${treatmentName} for ${cityName} patients`} lowPrice={tData.indiaLow} highPrice={tData.indiaHigh} url={`/treatments-from/${citySlug}/${treatmentSlug}`} />
      <SpeakableSchema url={`/treatments-from/${citySlug}/${treatmentSlug}`} cssSelectors={['.hero-description', '.cost-summary']} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 px-4 py-16 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <LastUpdatedBanner lastUpdated="2026-03-06" medicallyReviewed="2026-03-01" reviewerName="Dr. Ahmad Al-Rashid, MBBS, FRCS" />
          <h1 className="hero-description mt-4 font-serif text-3xl font-bold md:text-4xl lg:text-5xl">
            {isAr ? `${treatmentNameAr} من ${cityName} | وفّر ${savingsPercent}%` : `${treatmentName} from ${cityName} | Save ${savingsPercent}%`}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-primary-100">
            {isAr
              ? `احصل على ${treatmentNameAr} في أحسن مستشفيات الهند المعتمدة من JCI. التكلفة تبدأ من $${tData.indiaLow.toLocaleString()} - وفّر لين ${savingsPercent}% مقارنة بـ${countryName}. دعم عربي كامل.`
              : `Get world-class ${treatmentName} at JCI-accredited hospitals in India. Starting from $${tData.indiaLow.toLocaleString()} — save up to ${savingsPercent}% compared to ${countryName}. Full Arabic support.`
            }
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-accent-500 text-lg hover:bg-accent-600">
              <Link href="/consultation">{isAr ? 'استشارة مجانية' : 'Get Free Consultation'}</Link>
            </Button>
            <Button asChild size="lg" className="border-2 border-green-400 bg-green-600 text-lg text-white hover:bg-green-700">
              <a href={`https://wa.me/919876543210?text=Hi%2C%20I%20need%20${treatmentName.replace(/ /g, '%20')}%20from%20${cityName}`} target="_blank" rel="noopener noreferrer">{isAr ? 'راسلنا واتساب' : 'WhatsApp Us'}</a>
            </Button>
          </div>
          <MedicalReviewBadge reviewerName="Dr. Ahmad Al-Rashid" credentials="MBBS, FRCS (UK)" date="March 2026" />
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container -mt-8 px-4">
        <div className="mx-auto grid max-w-5xl gap-4 grid-cols-2 md:grid-cols-4">
          <Card className="border-t-4 border-t-primary-500 shadow-lg"><CardContent className="pt-6 text-center">
            <p className="text-2xl font-bold text-primary-600">${tData.indiaLow.toLocaleString()}-${tData.indiaHigh.toLocaleString()}</p>
            <p className="text-sm text-gray-600 cost-summary">{isAr ? 'التكلفة في الهند' : 'Cost in India'}</p>
          </CardContent></Card>
          <Card className="border-t-4 border-t-green-500 shadow-lg"><CardContent className="pt-6 text-center">
            <p className="text-2xl font-bold text-green-600">{savingsPercent}%</p>
            <p className="text-sm text-gray-600">{isAr ? 'نسبة التوفير' : 'Savings'}</p>
          </CardContent></Card>
          <Card className="border-t-4 border-t-blue-500 shadow-lg"><CardContent className="pt-6 text-center">
            <p className="text-2xl font-bold text-blue-600">{flight.duration}</p>
            <p className="text-sm text-gray-600">{isAr ? 'مدة الرحلة' : 'Flight Time'}</p>
          </CardContent></Card>
          <Card className="border-t-4 border-t-accent-500 shadow-lg"><CardContent className="pt-6 text-center">
            <p className="text-2xl font-bold text-accent-600">{tData.successRate}</p>
            <p className="text-sm text-gray-600">{isAr ? 'نسبة النجاح' : 'Success Rate'}</p>
          </CardContent></Card>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-center font-serif text-2xl font-bold md:text-3xl">{isAr ? `تكلفة ${treatmentNameAr}: ${cityName} مقابل الهند` : `${treatmentName} Cost: ${cityName} vs India`}</h2>
        <div className="overflow-x-auto">
          <table className="mx-auto w-full max-w-4xl border-collapse rounded-lg border border-gray-200">
            <thead className="bg-primary-50">
              <tr>
                <th className="border-b px-6 py-3 text-left">{isAr ? 'البند' : 'Item'}</th>
                <th className="border-b px-6 py-3 text-center">{cityName} ({currencyInfo?.symbol})</th>
                <th className="border-b px-6 py-3 text-center">{isAr ? 'الهند' : 'India'} ({currencyInfo?.symbol})</th>
                <th className="border-b px-6 py-3 text-center">{isAr ? 'التوفير' : 'Savings'}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-6 py-3 font-medium">{isAr ? 'رسوم المستشفى والجراح' : 'Hospital & Surgeon Fees'}</td>
                <td className="px-6 py-3 text-center text-red-600">{currencyInfo?.symbol}{gccLow.toLocaleString()}-{gccHigh.toLocaleString()}</td>
                <td className="px-6 py-3 text-center text-green-600 font-bold">{currencyInfo?.symbol}{indiaLowLocal.toLocaleString()}-{indiaHighLocal.toLocaleString()}</td>
                <td className="px-6 py-3 text-center font-bold text-green-600">{savingsPercent}%</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-6 py-3 font-medium">{isAr ? 'الإقامة (فندقية)' : 'Accommodation (Hotel)'}</td>
                <td className="px-6 py-3 text-center">—</td>
                <td className="px-6 py-3 text-center text-green-600">$40-80/night</td>
                <td className="px-6 py-3 text-center">{isAr ? 'مشمول في الباقة' : 'Included in package'}</td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-3 font-medium">{isAr ? 'تذكرة الطيران' : 'Flights (Round Trip)'}</td>
                <td className="px-6 py-3 text-center">—</td>
                <td className="px-6 py-3 text-center">$300-600</td>
                <td className="px-6 py-3 text-center">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Why Choose India from [City] */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center font-serif text-2xl font-bold md:text-3xl">{isAr ? `ليش تختار الهند للعلاج من ${cityName}؟` : `Why Choose India for ${treatmentName} from ${cityName}?`}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card><CardContent className="pt-6"><h3 className="mb-2 font-bold">✈️ {isAr ? 'رحلات مباشرة' : 'Direct Flights'}</h3><p className="text-gray-600">{isAr ? `رحلات من ${cityName} للهند خلال ${flight.duration} فقط عبر ${flight.airlines[0]}` : `${flight.airlines.join(', ')} offer flights from ${cityName} to India in just ${flight.duration}`}</p></CardContent></Card>
            <Card><CardContent className="pt-6"><h3 className="mb-2 font-bold">💰 {isAr ? `وفّر ${savingsPercent}%` : `Save ${savingsPercent}%`}</h3><p className="text-gray-600">{isAr ? `${treatmentNameAr} في الهند يكلف وايد أقل من ${countryName} - نفس الجودة بسعر أقل بكثير` : `${treatmentName} in India costs ${savingsPercent}% less than ${countryName} — same quality, fraction of the price`}</p></CardContent></Card>
            <Card><CardContent className="pt-6"><h3 className="mb-2 font-bold">🏥 {isAr ? 'مستشفيات JCI' : 'JCI Hospitals'}</h3><p className="text-gray-600">{isAr ? '30+ مستشفى في الهند حاصل على اعتماد JCI الدولي - نفس معايير أمريكا وأوروبا' : '30+ JCI-accredited hospitals in India — same safety standards as US and European hospitals'}</p></CardContent></Card>
            <Card><CardContent className="pt-6"><h3 className="mb-2 font-bold">🗣️ {isAr ? 'دعم عربي كامل' : 'Full Arabic Support'}</h3><p className="text-gray-600">{isAr ? 'منسقين يتكلمون عربي متواجدين وياك من المطار لين ترجع بيتك - 24/7' : 'Arabic-speaking coordinators with you from airport to recovery — 24/7 support throughout your stay'}</p></CardContent></Card>
          </div>
        </div>
      </section>

      {/* Top 3 Hospitals */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-center font-serif text-2xl font-bold md:text-3xl">{isAr ? `أحسن 3 مستشفيات لـ${treatmentNameAr}` : `Top 3 Hospitals for ${treatmentName}`}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {hospitals.map((hospital, i) => (
            <Card key={i} className={i === 0 ? 'border-2 border-primary-500' : ''}>
              <CardHeader><CardTitle className="text-lg">#{i + 1} {hospital.name}</CardTitle></CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">📍 {hospital.city}, India</p>
                <p className="text-sm text-gray-600">👨‍⚕️ {hospital.surgeon}</p>
                <p className="mt-2 text-sm font-medium text-green-600">{isAr ? 'معتمد من JCI ✓' : 'JCI Accredited ✓'}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Patient Journey */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center font-serif text-2xl font-bold md:text-3xl">{isAr ? 'شلون الموضوع يمشي - خطوة بخطوة' : 'Your Patient Journey — Step by Step'}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.slice(0, 4).map((step, i) => (
              <Card key={i}><CardContent className="pt-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 text-white font-bold">{i + 1}</div>
                <h3 className="mb-2 font-bold">{step.name}</h3>
                <p className="text-sm text-gray-600">{step.text.slice(0, 120)}...</p>
              </CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-center font-serif text-2xl font-bold md:text-3xl">{isAr ? 'أسئلة شائعة' : 'Frequently Asked Questions'}</h2>
        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, i) => (
            <Card key={i}><CardContent className="pt-6">
              <h3 className="mb-2 font-bold text-primary-700">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </CardContent></Card>
          ))}
        </div>
      </section>

      <InternalLinks links={[
        { title: `${treatmentName} in India`, href: `/treatments/${treatmentSlug}-india` },
        { title: `Medical Tourism for ${countryName} Patients`, href: `/for-${countrySlug}-patients` },
        { title: `Cost Comparison: ${countryName} vs India`, href: `/cost-comparison/${countrySlug}` },
      ]} />

      <Testimonials testimonials={TREATMENT_TESTIMONIALS['generic']} />
      <TrustBadges />

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 px-4 py-16 text-center text-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-4 font-serif text-2xl font-bold md:text-3xl">{isAr ? `مستعد تسوي ${treatmentNameAr} في الهند؟` : `Ready for ${treatmentName} in India?`}</h2>
          <p className="mb-8 text-lg text-primary-100">{isAr ? 'تواصل وياّنا الحين واحصل على استشارة مجانية وتقدير التكلفة' : 'Contact us now for a free consultation and cost estimate'}</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-accent-500 text-lg hover:bg-accent-600">
              <Link href="/consultation">{isAr ? 'استشارة مجانية' : 'Get Free Consultation'}</Link>
            </Button>
            <Button asChild size="lg" className="border-2 border-green-400 bg-green-600 text-lg text-white hover:bg-green-700">
              <a href={`https://wa.me/919876543210?text=Hi%2C%20I%20need%20${treatmentName.replace(/ /g, '%20')}%20from%20${cityName}`} target="_blank" rel="noopener noreferrer">{isAr ? 'راسلنا واتساب' : 'WhatsApp Us'}</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

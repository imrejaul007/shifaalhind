import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrustBadges } from '@/components/trust-badges/trust-badges';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import {
  Heart, Bone, Baby, SmilePlus, Scissors, Eye, Brain, Pill,
  Stethoscope, Weight, Activity, Leaf, Clock, Plane, Building2,
  BadgePercent, Phone, ChevronRight, MessageCircle,
  HelpCircle, Star, Shield, Users,
} from 'lucide-react';

export const dynamic = 'force-dynamic';

// ---------------------------------------------------------------------------
// City data — all 29 GCC cities
// ---------------------------------------------------------------------------
const cityData: Record<string, {
  name: string; nameAr: string;
  country: string; countryAr: string;
  flightDuration: string; flightDurationAr: string;
  airlines: string[];
  currency: string; currencyCode: string;
}> = {
  // UAE
  'dubai': { name: 'Dubai', nameAr: 'دبي', country: 'UAE', countryAr: 'الإمارات', flightDuration: '3-3.5 hours', flightDurationAr: '٣-٣.٥ ساعات', airlines: ['Emirates', 'IndiGo', 'Air India'], currency: 'AED', currencyCode: 'AED' },
  'abu-dhabi': { name: 'Abu Dhabi', nameAr: 'أبوظبي', country: 'UAE', countryAr: 'الإمارات', flightDuration: '3.5-4 hours', flightDurationAr: '٣.٥-٤ ساعات', airlines: ['Etihad', 'Air India', 'IndiGo'], currency: 'AED', currencyCode: 'AED' },
  'sharjah': { name: 'Sharjah', nameAr: 'الشارقة', country: 'UAE', countryAr: 'الإمارات', flightDuration: '3-3.5 hours', flightDurationAr: '٣-٣.٥ ساعات', airlines: ['Air Arabia', 'IndiGo'], currency: 'AED', currencyCode: 'AED' },
  'ajman': { name: 'Ajman', nameAr: 'عجمان', country: 'UAE', countryAr: 'الإمارات', flightDuration: '3-3.5 hours', flightDurationAr: '٣-٣.٥ ساعات', airlines: ['Via Sharjah/Dubai'], currency: 'AED', currencyCode: 'AED' },
  'fujairah': { name: 'Fujairah', nameAr: 'الفجيرة', country: 'UAE', countryAr: 'الإمارات', flightDuration: '3.5 hours', flightDurationAr: '٣.٥ ساعات', airlines: ['Via Dubai'], currency: 'AED', currencyCode: 'AED' },
  'ras-al-khaimah': { name: 'Ras Al Khaimah', nameAr: 'رأس الخيمة', country: 'UAE', countryAr: 'الإمارات', flightDuration: '3.5 hours', flightDurationAr: '٣.٥ ساعات', airlines: ['Via Dubai'], currency: 'AED', currencyCode: 'AED' },
  'al-ain': { name: 'Al Ain', nameAr: 'العين', country: 'UAE', countryAr: 'الإمارات', flightDuration: '3.5 hours', flightDurationAr: '٣.٥ ساعات', airlines: ['Via Abu Dhabi'], currency: 'AED', currencyCode: 'AED' },
  // Saudi Arabia
  'riyadh': { name: 'Riyadh', nameAr: 'الرياض', country: 'Saudi Arabia', countryAr: 'السعودية', flightDuration: '4-4.5 hours', flightDurationAr: '٤-٤.٥ ساعات', airlines: ['Saudi Airlines', 'IndiGo', 'Air India'], currency: 'SAR', currencyCode: 'SAR' },
  'jeddah': { name: 'Jeddah', nameAr: 'جدة', country: 'Saudi Arabia', countryAr: 'السعودية', flightDuration: '4.5-5 hours', flightDurationAr: '٤.٥-٥ ساعات', airlines: ['Saudi Airlines', 'Flynas', 'Air India'], currency: 'SAR', currencyCode: 'SAR' },
  'dammam': { name: 'Dammam', nameAr: 'الدمام', country: 'Saudi Arabia', countryAr: 'السعودية', flightDuration: '3.5-4 hours', flightDurationAr: '٣.٥-٤ ساعات', airlines: ['Saudi Airlines', 'IndiGo'], currency: 'SAR', currencyCode: 'SAR' },
  'khobar': { name: 'Khobar', nameAr: 'الخبر', country: 'Saudi Arabia', countryAr: 'السعودية', flightDuration: '3.5-4 hours', flightDurationAr: '٣.٥-٤ ساعات', airlines: ['Via Dammam'], currency: 'SAR', currencyCode: 'SAR' },
  'mecca': { name: 'Mecca', nameAr: 'مكة المكرمة', country: 'Saudi Arabia', countryAr: 'السعودية', flightDuration: '5 hours', flightDurationAr: '٥ ساعات', airlines: ['Via Jeddah'], currency: 'SAR', currencyCode: 'SAR' },
  'medina': { name: 'Medina', nameAr: 'المدينة المنورة', country: 'Saudi Arabia', countryAr: 'السعودية', flightDuration: '5 hours', flightDurationAr: '٥ ساعات', airlines: ['Via Jeddah/Riyadh'], currency: 'SAR', currencyCode: 'SAR' },
  'taif': { name: 'Taif', nameAr: 'الطائف', country: 'Saudi Arabia', countryAr: 'السعودية', flightDuration: '5 hours', flightDurationAr: '٥ ساعات', airlines: ['Via Jeddah'], currency: 'SAR', currencyCode: 'SAR' },
  'tabuk': { name: 'Tabuk', nameAr: 'تبوك', country: 'Saudi Arabia', countryAr: 'السعودية', flightDuration: '5.5 hours', flightDurationAr: '٥.٥ ساعات', airlines: ['Via Riyadh'], currency: 'SAR', currencyCode: 'SAR' },
  // Qatar
  'doha': { name: 'Doha', nameAr: 'الدوحة', country: 'Qatar', countryAr: 'قطر', flightDuration: '4-4.5 hours', flightDurationAr: '٤-٤.٥ ساعات', airlines: ['Qatar Airways', 'IndiGo'], currency: 'QAR', currencyCode: 'QAR' },
  'al-wakrah': { name: 'Al Wakrah', nameAr: 'الوكرة', country: 'Qatar', countryAr: 'قطر', flightDuration: '4-4.5 hours', flightDurationAr: '٤-٤.٥ ساعات', airlines: ['Via Doha'], currency: 'QAR', currencyCode: 'QAR' },
  'al-khor': { name: 'Al Khor', nameAr: 'الخور', country: 'Qatar', countryAr: 'قطر', flightDuration: '4-4.5 hours', flightDurationAr: '٤-٤.٥ ساعات', airlines: ['Via Doha'], currency: 'QAR', currencyCode: 'QAR' },
  // Oman
  'muscat': { name: 'Muscat', nameAr: 'مسقط', country: 'Oman', countryAr: 'عُمان', flightDuration: '3-3.5 hours', flightDurationAr: '٣-٣.٥ ساعات', airlines: ['Oman Air', 'IndiGo', 'Air India'], currency: 'OMR', currencyCode: 'OMR' },
  'sohar': { name: 'Sohar', nameAr: 'صحار', country: 'Oman', countryAr: 'عُمان', flightDuration: '3.5 hours', flightDurationAr: '٣.٥ ساعات', airlines: ['Via Muscat'], currency: 'OMR', currencyCode: 'OMR' },
  'salalah': { name: 'Salalah', nameAr: 'صلالة', country: 'Oman', countryAr: 'عُمان', flightDuration: '4 hours', flightDurationAr: '٤ ساعات', airlines: ['Via Muscat'], currency: 'OMR', currencyCode: 'OMR' },
  'nizwa': { name: 'Nizwa', nameAr: 'نزوى', country: 'Oman', countryAr: 'عُمان', flightDuration: '3.5 hours', flightDurationAr: '٣.٥ ساعات', airlines: ['Via Muscat'], currency: 'OMR', currencyCode: 'OMR' },
  // Kuwait
  'kuwait-city': { name: 'Kuwait City', nameAr: 'مدينة الكويت', country: 'Kuwait', countryAr: 'الكويت', flightDuration: '4-4.5 hours', flightDurationAr: '٤-٤.٥ ساعات', airlines: ['Kuwait Airways', 'IndiGo', 'Air India'], currency: 'KWD', currencyCode: 'KWD' },
  'hawalli': { name: 'Hawalli', nameAr: 'حولي', country: 'Kuwait', countryAr: 'الكويت', flightDuration: '4-4.5 hours', flightDurationAr: '٤-٤.٥ ساعات', airlines: ['Via Kuwait'], currency: 'KWD', currencyCode: 'KWD' },
  'salmiya': { name: 'Salmiya', nameAr: 'السالمية', country: 'Kuwait', countryAr: 'الكويت', flightDuration: '4-4.5 hours', flightDurationAr: '٤-٤.٥ ساعات', airlines: ['Via Kuwait'], currency: 'KWD', currencyCode: 'KWD' },
  'farwaniya': { name: 'Farwaniya', nameAr: 'الفروانية', country: 'Kuwait', countryAr: 'الكويت', flightDuration: '4-4.5 hours', flightDurationAr: '٤-٤.٥ ساعات', airlines: ['Via Kuwait'], currency: 'KWD', currencyCode: 'KWD' },
  // Bahrain
  'manama': { name: 'Manama', nameAr: 'المنامة', country: 'Bahrain', countryAr: 'البحرين', flightDuration: '3.5-4 hours', flightDurationAr: '٣.٥-٤ ساعات', airlines: ['Gulf Air', 'IndiGo'], currency: 'BHD', currencyCode: 'BHD' },
  'muharraq': { name: 'Muharraq', nameAr: 'المحرق', country: 'Bahrain', countryAr: 'البحرين', flightDuration: '3.5-4 hours', flightDurationAr: '٣.٥-٤ ساعات', airlines: ['Via Bahrain'], currency: 'BHD', currencyCode: 'BHD' },
  'riffa': { name: 'Riffa', nameAr: 'الرفاع', country: 'Bahrain', countryAr: 'البحرين', flightDuration: '3.5-4 hours', flightDurationAr: '٣.٥-٤ ساعات', airlines: ['Via Bahrain'], currency: 'BHD', currencyCode: 'BHD' },
};

// ---------------------------------------------------------------------------
// Currency conversion rates (approximate USD multiplier)
// ---------------------------------------------------------------------------
const currencyRates: Record<string, number> = {
  AED: 3.67, SAR: 3.75, QAR: 3.64, OMR: 0.385, KWD: 0.307, BHD: 0.376,
};

// ---------------------------------------------------------------------------
// Treatment definitions
// ---------------------------------------------------------------------------
const treatments = [
  { slug: 'heart-surgery', name: 'Heart Surgery', nameAr: 'جراحة القلب', descEn: 'CABG, valve replacement & minimally invasive cardiac procedures at JCI-accredited hospitals.', descAr: 'عمليات القلب المفتوح وتبديل الصمامات بأقل تدخل جراحي في مستشفيات معتمدة دولياً.', priceUSD: 5000, savePct: 80, icon: Heart },
  { slug: 'knee-replacement', name: 'Knee Replacement', nameAr: 'تبديل الركبة', descEn: 'Robotic-assisted total & partial knee replacement with rapid recovery protocols.', descAr: 'تبديل ركبة كامل أو جزئي بالروبوت مع برنامج تعافي سريع.', priceUSD: 5000, savePct: 75, icon: Bone },
  { slug: 'hip-replacement', name: 'Hip Replacement', nameAr: 'تبديل الورك', descEn: 'Anterior approach hip replacement with ceramic-on-ceramic implants for 20+ year durability.', descAr: 'تبديل ورك بالطريقة الأمامية مع زراعات سيراميك عالية الجودة.', priceUSD: 6000, savePct: 75, icon: Bone },
  { slug: 'ivf', name: 'IVF & Fertility', nameAr: 'أطفال الأنابيب', descEn: 'IVF, ICSI & fertility treatments with cutting-edge embryo selection technology.', descAr: 'أطفال أنابيب وحقن مجهري بأحدث تقنيات اختيار الأجنة.', priceUSD: 3000, savePct: 65, icon: Baby },
  { slug: 'dental-implants', name: 'Dental Implants', nameAr: 'زراعة الأسنان', descEn: 'Premium Nobel Biocare & Straumann implants with same-day teeth options.', descAr: 'زراعة أسنان بأفضل الأنظمة العالمية مع خيار الأسنان في نفس اليوم.', priceUSD: 500, savePct: 75, icon: SmilePlus },
  { slug: 'hair-transplant', name: 'Hair Transplant', nameAr: 'زراعة الشعر', descEn: 'FUE & DHI techniques with sapphire blades — 3,000 to 5,000 grafts.', descAr: 'زراعة شعر بتقنية FUE و DHI بشفرات الياقوت.', priceUSD: 1500, savePct: 65, icon: Scissors },
  { slug: 'cataract-surgery', name: 'Cataract Surgery', nameAr: 'عملية الماء الأبيض', descEn: 'Phacoemulsification with premium multifocal & toric IOL options.', descAr: 'عملية الماء الأبيض بالفاكو مع عدسات متعددة البؤر.', priceUSD: 1000, savePct: 75, icon: Eye },
  { slug: 'cancer-treatment', name: 'Cancer Treatment', nameAr: 'علاج السرطان', descEn: 'Comprehensive oncology — chemotherapy, immunotherapy, radiation & robotic surgery.', descAr: 'علاج سرطان شامل: كيماوي ومناعي وإشعاعي وجراحة روبوتية.', priceUSD: 5000, savePct: 75, icon: Pill },
  { slug: 'cosmetic-surgery', name: 'Cosmetic Surgery', nameAr: 'جراحة التجميل', descEn: 'Rhinoplasty, liposuction, facelift & body contouring by board-certified surgeons.', descAr: 'تجميل الأنف وشفط الدهون وشد الوجه من جراحين معتمدين.', priceUSD: 2000, savePct: 65, icon: Scissors },
  { slug: 'bariatric-surgery', name: 'Bariatric Surgery', nameAr: 'جراحة السمنة', descEn: 'Gastric sleeve & bypass with comprehensive pre/post-operative support.', descAr: 'تكميم المعدة وتحويل المسار مع دعم كامل قبل وبعد العملية.', priceUSD: 5000, savePct: 75, icon: Weight },
  { slug: 'organ-transplant', name: 'Organ Transplant', nameAr: 'زراعة الأعضاء', descEn: 'Kidney, liver & bone marrow transplants at NOTTO-approved centres.', descAr: 'زراعة كلى وكبد ونخاع عظم في مراكز معتمدة.', priceUSD: 15000, savePct: 75, icon: Activity },
  { slug: 'neurosurgery', name: 'Neurosurgery', nameAr: 'جراحة الأعصاب', descEn: 'Brain tumour removal, spinal cord surgery & minimally invasive neuro procedures.', descAr: 'إزالة أورام الدماغ وعمليات الحبل الشوكي بأقل تدخل جراحي.', priceUSD: 5000, savePct: 80, icon: Brain },
  { slug: 'ophthalmology', name: 'Ophthalmology', nameAr: 'طب العيون', descEn: 'LASIK, retina surgery, glaucoma treatment & corneal transplants.', descAr: 'ليزك وعمليات الشبكية وعلاج الجلوكوما وزراعة القرنية.', priceUSD: 1000, savePct: 65, icon: Eye },
  { slug: 'ayurveda-wellness', name: 'Ayurveda & Wellness', nameAr: 'الأيورفيدا والعافية', descEn: 'Traditional Panchakarma detox, rejuvenation & holistic wellness programmes in Kerala.', descAr: 'علاجات أيورفيدا تقليدية وبرامج ديتوكس وعافية شاملة في كيرالا.', priceUSD: 1000, savePct: 50, icon: Leaf },
];

// ---------------------------------------------------------------------------
// generateStaticParams
// ---------------------------------------------------------------------------
export function generateStaticParams() {
  const cities = [
    'dubai', 'abu-dhabi', 'sharjah', 'ajman', 'fujairah', 'ras-al-khaimah', 'al-ain',
    'riyadh', 'jeddah', 'dammam', 'khobar', 'mecca', 'medina', 'taif', 'tabuk',
    'doha', 'al-wakrah', 'al-khor',
    'muscat', 'sohar', 'salalah', 'nizwa',
    'kuwait-city', 'hawalli', 'salmiya', 'farwaniya',
    'manama', 'muharraq', 'riffa',
  ];
  return cities.map((city) => ({ city }));
}

// ---------------------------------------------------------------------------
// generateMetadata
// ---------------------------------------------------------------------------
export async function generateMetadata({ params }: { params: Promise<{ locale: string; city: string }> }): Promise<Metadata> {
  const { locale, city } = await params;
  const c = cityData[city] || cityData['dubai'];

  return generateSEOMetadata({
    title_en: `Medical Treatment in India from ${c.name} | Top Hospitals & Affordable Care`,
    title_ar: `العلاج الطبي في الهند من ${c.nameAr} | أفضل المستشفيات بأسعار معقولة`,
    description_en: `Explore 14+ medical treatments in India for patients from ${c.name}, ${c.country}. Save up to 80% on heart surgery, knee replacement, IVF & more. JCI-accredited hospitals, ${c.flightDuration} flight, free consultation.`,
    description_ar: `اكتشف أكثر من ١٤ علاج طبي في الهند للمرضى من ${c.nameAr}، ${c.countryAr}. وفّر لين ٨٠٪ على جراحة القلب وتبديل الركبة وأطفال الأنابيب وغيرها. مستشفيات معتمدة من JCI، رحلة ${c.flightDurationAr}، استشارة مجانية.`,
    locale,
    path: `/treatments-from/${city}`,
    keywords: locale === 'ar'
      ? [`علاج طبي من ${c.nameAr}`, 'مستشفيات الهند', 'سياحة علاجية', 'شو أفضل مستشفى', 'وايد رخيص', 'الحين احجز']
      : [`medical treatment from ${c.name}`, 'India hospitals', `${c.name} to India`, 'medical tourism', 'affordable healthcare', 'JCI hospitals'],
  });
}

// ---------------------------------------------------------------------------
// Helper: format price in local currency
// ---------------------------------------------------------------------------
function formatPrice(usd: number, currencyCode: string): string {
  const rate = currencyRates[currencyCode] || 1;
  const local = Math.round(usd * rate);
  return `${local.toLocaleString()} ${currencyCode}`;
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------
export default async function CityTreatmentsPage({ params }: { params: Promise<{ locale: string; city: string }> }) {
  const { locale, city } = await params;
  const isAr = locale === 'ar';
  const dir = isAr ? 'rtl' : 'ltr';
  const c = cityData[city] || cityData['dubai'];

  // --- JSON-LD Schemas -------------------------------------------------------
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isAr ? 'الرئيسية' : 'Home', item: `/${locale}` },
      { '@type': 'ListItem', position: 2, name: isAr ? 'السياحة العلاجية' : 'Medical Tourism', item: `/${locale}/medical-tourism` },
      { '@type': 'ListItem', position: 3, name: isAr ? `العلاج من ${c.nameAr}` : `Treatments from ${c.name}`, item: `/${locale}/treatments-from/${city}` },
    ],
  };

  const faqItems = isAr ? [
    { question: `شو هي أفضل العلاجات الطبية في الهند للمرضى من ${c.nameAr}؟`, answer: `المرضى من ${c.nameAr} يسافرون وايد للهند لجراحة القلب وتبديل الركبة والورك وأطفال الأنابيب وزراعة الأسنان وعلاج السرطان. الأسعار أرخص بنسبة ٦٠-٨٠٪ مقارنة بـ${c.countryAr}.` },
    { question: `جم تكلفة العلاج الطبي في الهند من ${c.nameAr}؟`, answer: `الأسعار تبدأ من ${formatPrice(500, c.currencyCode)} لزراعة الأسنان ولين ${formatPrice(30000, c.currencyCode)} لزراعة الأعضاء. يشمل السعر العلاج والإقامة والمتابعة.` },
    { question: `شلون أسافر من ${c.nameAr} للهند للعلاج؟`, answer: `الرحلة من ${c.nameAr} للهند تاخذ تقريباً ${c.flightDurationAr}. أشهر الخطوط: ${c.airlines.join('، ')}. فريقنا يساعدك في التأشيرة والحجز والاستقبال.` },
    { question: `هل المستشفيات في الهند معتمدة دولياً؟`, answer: `نعم! نتعامل مع أكثر من ٤٠ مستشفى معتمد من JCI و NABH، منها Apollo و Fortis و Max و Medanta. كل المستشفيات فيها أقسام خاصة للمرضى الدوليين.` },
    { question: `هل أحتاج فيزا طبية للهند من ${c.countryAr}؟`, answer: `نعم، تحتاج فيزا طبية (Medical Visa). فريقنا يساعدك في كل الإجراءات — عادةً تطلع الفيزا خلال ٣-٥ أيام عمل.` },
    { question: `شو يشمل باكيج العلاج في الهند؟`, answer: `الباكيج يشمل: استشارة مجانية، تقرير طبي مفصّل، حجز المستشفى، استقبال المطار، إقامة مرافق، ترجمة عربي، ومتابعة بعد العلاج.` },
  ] : [
    { question: `What are the best medical treatments in India for patients from ${c.name}?`, answer: `Patients from ${c.name} commonly travel to India for heart surgery, knee & hip replacement, IVF, dental implants, and cancer treatment. Costs are 60-80% lower than in ${c.country} with the same quality of care at JCI-accredited hospitals.` },
    { question: `How much does medical treatment in India cost from ${c.name}?`, answer: `Prices start from ${formatPrice(500, c.currencyCode)} for dental implants up to ${formatPrice(30000, c.currencyCode)} for organ transplants. All-inclusive packages cover treatment, accommodation, airport transfers and post-op follow-up.` },
    { question: `How do I travel from ${c.name} to India for treatment?`, answer: `The flight from ${c.name} to India takes approximately ${c.flightDuration}. Popular airlines include ${c.airlines.join(', ')}. Our team assists with medical visa, hospital booking, airport pickup and accommodation.` },
    { question: `Are Indian hospitals internationally accredited?`, answer: `Yes! We partner with 40+ JCI and NABH accredited hospitals including Apollo, Fortis, Max, and Medanta. All hospitals have dedicated international patient departments with Arabic-speaking coordinators.` },
    { question: `Do I need a medical visa for India from ${c.country}?`, answer: `Yes, you need a Medical Visa (M-Visa). Our team handles the entire process — typically issued within 3-5 business days with the hospital's invitation letter.` },
    { question: `What is included in the treatment package?`, answer: `Our packages include: free initial consultation, detailed medical opinion, hospital reservation, airport pickup, companion accommodation, Arabic interpreter, and post-treatment follow-up.` },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((f) => ({
      '@type': 'Question', name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: isAr ? `العلاجات الطبية من ${c.nameAr} للهند` : `Medical Treatments from ${c.name} to India`,
    numberOfItems: treatments.length,
    itemListElement: treatments.map((t, i) => ({
      '@type': 'ListItem', position: i + 1,
      url: `/${locale}/treatments-from/${city}/${t.slug}`,
      name: isAr ? t.nameAr : t.name,
    })),
  };

  // --- Why-choose reasons ----------------------------------------------------
  const whyReasons = isAr ? [
    { title: 'وفّر وايد', desc: `وفّر من ٦٠٪ لين ٨٠٪ مقارنة بأسعار ${c.countryAr}. نفس الجودة العالمية بأسعار معقولة وايد.`, icon: BadgePercent },
    { title: 'مستشفيات معتمدة دولياً', desc: 'أكثر من ٤٠ مستشفى معتمد من JCI — نفس المعايير العالمية اللي في أوروبا وأمريكا.', icon: Shield },
    { title: `رحلة قصيرة — ${c.flightDurationAr}`, desc: `من ${c.nameAr} للهند بس ${c.flightDurationAr}. رحلات يومية على ${c.airlines[0]}.`, icon: Plane },
    { title: 'دعم عربي كامل', desc: 'منسقين يتكلمون عربي، ترجمة فورية، أكل حلال، وصلاة — كل شي مرتّب.', icon: Users },
  ] : [
    { title: 'Save 60-80%', desc: `Save significantly compared to ${c.country} prices. World-class quality at a fraction of the cost.`, icon: BadgePercent },
    { title: 'JCI-Accredited Hospitals', desc: '40+ internationally accredited hospitals — the same standards as top US and European facilities.', icon: Shield },
    { title: `Short Flight — ${c.flightDuration}`, desc: `${c.name} to India in just ${c.flightDuration}. Daily direct flights on ${c.airlines[0]}.`, icon: Plane },
    { title: 'Full Arabic Support', desc: 'Arabic-speaking coordinators, real-time translation, halal food and prayer facilities at every hospital.', icon: Users },
  ];

  // --- 5-step journey --------------------------------------------------------
  const steps = isAr ? [
    { step: '١', title: 'استشارة مجانية', desc: 'كلّمنا على الواتساب وأرسل لنا تقاريرك الطبية.' },
    { step: '٢', title: 'رأي طبي مفصّل', desc: 'نرسلك خطة علاج مفصّلة مع التكلفة خلال ٢٤ ساعة.' },
    { step: '٣', title: 'ترتيب السفر', desc: 'نساعدك في الفيزا والتذاكر والإقامة — كل شي جاهز.' },
    { step: '٤', title: 'العلاج في الهند', desc: 'استقبال VIP، منسق عربي، ومتابعة يومية طول فترة العلاج.' },
    { step: '٥', title: 'متابعة بعد العلاج', desc: 'متابعة مستمرة مع الدكتور بعد رجوعك لـ${c.nameAr}.' },
  ] : [
    { step: '1', title: 'Free Consultation', desc: 'Contact us on WhatsApp and share your medical reports.' },
    { step: '2', title: 'Detailed Medical Opinion', desc: 'Receive a treatment plan with cost estimate within 24 hours.' },
    { step: '3', title: 'Travel Arrangements', desc: 'We handle your medical visa, flights and accommodation.' },
    { step: '4', title: 'Treatment in India', desc: 'VIP airport pickup, Arabic coordinator, and daily follow-up throughout your stay.' },
    { step: '5', title: 'Post-Treatment Follow-up', desc: `Ongoing remote follow-up with your doctor after returning to ${c.name}.` },
  ];

  return (
    <div dir={dir} className="min-h-screen bg-white">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      {/* ── Hero Section ──────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="text-primary-200 font-medium mb-3 text-sm uppercase tracking-wider">
            {isAr ? `${c.countryAr} ← الهند` : `${c.country} → India`}
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            {isAr
              ? `العلاج الطبي في الهند من ${c.nameAr}`
              : `Medical Treatment in India from ${c.name}`}
          </h1>
          <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {isAr
              ? `١٤+ علاج طبي متاح للمرضى من ${c.nameAr}. وفّر لين ٨٠٪ في مستشفيات معتمدة من JCI — رحلة بس ${c.flightDurationAr}.`
              : `14+ medical treatments available for patients from ${c.name}. Save up to 80% at JCI-accredited hospitals — just ${c.flightDuration} away.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              {isAr ? 'احجز استشارة مجانية — واتساب' : 'Book Free Consultation — WhatsApp'}
            </a>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors border border-white/20"
            >
              <Phone className="w-5 h-5" />
              {isAr ? 'اتصل الحين' : 'Call Now'}
            </a>
          </div>
        </div>
      </section>

      {/* ── Quick Stats ───────────────────────────────────────────────────── */}
      <section className="bg-primary-50 border-b border-primary-100">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '14+', label: isAr ? 'علاج متاح' : 'Treatments', icon: Stethoscope },
              { value: '40+', label: isAr ? 'مستشفى JCI' : 'JCI Hospitals', icon: Building2 },
              { value: '80%', label: isAr ? 'توفير' : 'Savings', icon: BadgePercent },
              { value: c.flightDuration, label: isAr ? 'مدة الرحلة' : 'Flight Time', icon: Plane },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <stat.icon className="w-6 h-6 text-primary-600" />
                <span className="text-2xl md:text-3xl font-extrabold text-primary-900">{stat.value}</span>
                <span className="text-sm text-primary-700">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Treatment Grid ────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {isAr
                ? `العلاجات المتاحة للمرضى من ${c.nameAr}`
                : `Available Treatments for Patients from ${c.name}`}
            </h2>
            <p className="text-gray-600">
              {isAr
                ? 'اختر العلاج اللي تبيه واعرف التفاصيل والأسعار. كل علاج فيه صفحة مفصّلة.'
                : 'Select a treatment to view full details, pricing and top hospitals. Each treatment has a dedicated page.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {treatments.map((t) => {
              const TIcon = t.icon;
              return (
                <Link key={t.slug} href={`/${locale}/treatments-from/${city}/${t.slug}`} className="group">
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-gray-200 group-hover:border-primary-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="bg-primary-50 p-2.5 rounded-lg text-primary-600 group-hover:bg-primary-100 transition-colors">
                            <TIcon className="w-5 h-5" />
                          </div>
                          <CardTitle className="text-lg font-bold text-gray-900">
                            {isAr ? t.nameAr : t.name}
                          </CardTitle>
                        </div>
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                          {isAr ? `وفّر ${t.savePct}٪` : `Save ${t.savePct}%`}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {isAr ? t.descAr : t.descEn}
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs text-gray-500">{isAr ? 'تبدأ من' : 'Starting from'}</span>
                          <p className="text-lg font-bold text-primary-700">
                            {formatPrice(t.priceUSD, c.currencyCode)}
                          </p>
                        </div>
                        <span className="text-primary-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 text-sm font-semibold">
                          {isAr ? 'التفاصيل' : 'Details'}
                          <ChevronRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Trust Badges ──────────────────────────────────────────────────── */}
      <TrustBadges variant="compact" />

      {/* ── Why Patients Choose India ─────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            {isAr
              ? `ليش المرضى من ${c.nameAr} يختارون الهند؟`
              : `Why Patients from ${c.name} Choose India`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whyReasons.map((r, i) => {
              const RIcon = r.icon;
              return (
                <div key={i} className="flex gap-4 bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-primary-50 p-3 rounded-lg h-fit">
                    <RIcon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{r.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How It Works — 5 Steps ────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
            {isAr ? 'شلون تبدأ رحلتك العلاجية؟' : 'How It Works — Your Patient Journey'}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {isAr
              ? `من أول تواصل لين ترجع لـ${c.nameAr} — نرتّب لك كل شي.`
              : `From first contact to returning home to ${c.name} — we handle everything.`}
          </p>
          <div className="max-w-4xl mx-auto space-y-6">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {s.step}
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-gray-900 text-lg">{s.title}</h3>
                  <p className="text-gray-600 mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Flight & Travel Info ────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
            {isAr
              ? `معلومات السفر من ${c.nameAr} للهند`
              : `Travel Information: ${c.name} to India`}
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            {isAr
              ? 'كل اللي تحتاج تعرفه عن السفر من مدينتك للهند للعلاج الطبي.'
              : 'Everything you need to know about travelling from your city to India for medical treatment.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <Plane className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">
                {isAr ? 'مدة الرحلة' : 'Flight Duration'}
              </h3>
              <p className="text-2xl font-extrabold text-primary-700 mb-2">
                {isAr ? c.flightDurationAr : c.flightDuration}
              </p>
              <p className="text-sm text-gray-500">
                {isAr ? 'رحلات يومية متوفرة' : 'Daily flights available'}
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <Star className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">
                {isAr ? 'خطوط الطيران' : 'Airlines'}
              </h3>
              <p className="text-sm text-gray-700 font-medium">
                {c.airlines.join(' • ')}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                {isAr ? `العملة المحلية: ${c.currencyCode}` : `Local currency: ${c.currencyCode}`}
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">
                {isAr ? 'الفيزا الطبية' : 'Medical Visa'}
              </h3>
              <p className="text-2xl font-extrabold text-primary-700 mb-2">
                {isAr ? '٣-٥ أيام' : '3-5 Days'}
              </p>
              <p className="text-sm text-gray-500">
                {isAr ? 'نساعدك في كل الإجراءات' : 'We handle all paperwork'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ───────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            {isAr ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h2>
          <div className="space-y-6">
            {faqItems.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex gap-3 items-start">
                  <HelpCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {isAr
              ? `جاهز تبدأ رحلتك العلاجية من ${c.nameAr}؟`
              : `Ready to Start Your Medical Journey from ${c.name}?`}
          </h2>
          <p className="text-primary-100 mb-8 text-lg">
            {isAr
              ? 'كلّمنا الحين على الواتساب واحصل على استشارة مجانية وتقرير طبي مفصّل خلال ٢٤ ساعة.'
              : 'Contact us now on WhatsApp for a free consultation and detailed medical opinion within 24 hours.'}
          </p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-xl text-lg transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
            {isAr ? 'تواصل معنا على الواتساب' : 'Chat with Us on WhatsApp'}
          </a>
          <p className="text-primary-200 text-sm mt-4">
            {isAr
              ? `متوفرين ٢٤/٧ — نتكلم عربي وإنجليزي وهندي`
              : `Available 24/7 — We speak Arabic, English & Hindi`}
          </p>
        </div>
      </section>
    </div>
  );
}

export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import {
  Heart,
  Activity,
  ArrowRight,
  CheckCircle,
  MapPin,
  Users,
  Award,
  TrendingUp,
  DollarSign,
  Hotel,
  Languages,
  Building2,
  Plane
} from 'lucide-react';
import { gccCountries } from '@/config/gcc-countries';
import { CostCalculator } from '@/components/marketing/cost-calculator';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { SocialShare } from '@/components/blog/social-share';
import { PatientJourney } from '@/components/patient-journey/patient-journey';
import { HospitalLogos } from '@/components/hospital-logos/hospital-logos';
import { CertificationBadges, MedicalQualityStatement } from '@/components/trust-signals/certification-badges';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // Comprehensive keywords (English + Arabic)
  const keywords = [
    // English keywords
    'medical tourism india',
    'medical tourism india from uae',
    'medical tourism india from saudi arabia',
    'medical tourism india gcc',
    'treatment in india',
    'hospitals in india',
    'jci accredited hospitals india',
    'heart surgery india',
    'ivf treatment india',
    'knee replacement india',
    'cancer treatment india',
    'affordable healthcare india',
    'apollo hospital india',
    'fortis hospital india',
    'medical visa india',
    // Arabic keywords
    'السياحة العلاجية في الهند',
    'العلاج في الهند',
    'المستشفيات في الهند',
    'تكلفة العلاج في الهند',
    'جراحة القلب في الهند',
    'أطفال الأنابيب في الهند',
    'استبدال الركبة في الهند',
    'علاج السرطان في الهند',
    'السياحة العلاجية من الإمارات',
    'السياحة العلاجية من السعودية',
    'العلاج في الهند للسعوديين',
    'العلاج في الهند للإماراتيين',
    'مستشفيات معتمدة في الهند',
    'التأشيرة الطبية للهند',
  ];

  return generateSEOMetadata({
    title_en: 'Premium Medical Tourism to India',
    title_ar: 'سياحة علاجية متميزة إلى الهند',
    description_en:
      'Connect with world-class hospitals and treatments in India. Affordable, quality healthcare for patients from UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain.',
    description_ar:
      'اتصل بمستشفيات وعلاجات عالمية المستوى في الهند. رعاية صحية ميسورة التكلفة وعالية الجودة للمرضى من الإمارات والسعودية وقطر وعمان والكويت والبحرين.',
    locale,
    path: '/',
    type: 'website',
    keywords,
  });
}

// FAQ data for FAQ Schema (SEO rich snippets)
const faqData = [
  {
    question: 'How much can I save with medical tourism to India?',
    answer: 'Most patients save 60-80% compared to costs in the UAE, Saudi Arabia, or Western countries. For example, a knee replacement costs $30,000-50,000 in the US but only $6,000-8,000 in India. Heart bypass surgery costs $100,000+ in the West versus $8,000-12,000 in India. Even after including travel, accommodation, and other expenses, the savings are substantial.'
  },
  {
    question: 'Are Indian hospitals really as good as hospitals in the West?',
    answer: "Yes. India's top hospitals are JCI-accredited, which means they meet the same international standards as hospitals in the US and Europe. Many Indian doctors are trained at Harvard, Johns Hopkins, and other prestigious institutions. India performs over 200,000 cardiac surgeries annually with success rates matching or exceeding Western standards. Hospitals like Apollo, Fortis, and Max use the same advanced technology you'd find in New York or London."
  },
  {
    question: 'What treatments are most popular for GCC patients?',
    answer: 'The most sought-after treatments include cardiac surgery (bypass, valve replacement), orthopedic procedures (knee and hip replacement), fertility treatments (IVF), cosmetic surgery, dental implants, cancer treatment, and spinal surgery. India is also renowned for complex procedures like liver transplants and robotic surgery.'
  },
  {
    question: 'How long do I need to stay in India for treatment?',
    answer: 'It depends on the procedure. Simple treatments like dental work might require 5-7 days, while major surgeries like knee replacement typically need 10-14 days (including pre-op tests, surgery, and initial recovery). Heart surgery usually requires 2-3 weeks. We provide detailed timelines during your consultation based on your specific treatment.'
  },
  {
    question: 'Do you help with medical visas?',
    answer: 'Yes, we provide complete support for obtaining a medical visa for India. We supply the required invitation letter from the hospital, help you prepare the documentation, and guide you through the application process. Medical visas are typically processed within 3-5 days for GCC nationals.'
  },
  {
    question: 'What about language barriers?',
    answer: 'English is widely spoken in all major Indian hospitals, and most doctors are fluent. Additionally, we provide Arabic interpreters for GCC patients who prefer to communicate in Arabic. Our coordinators are bilingual and available 24/7 to help with any communication needs.'
  },
  {
    question: 'Is medical treatment in India safe for international patients?',
    answer: "Absolutely. India's top hospitals maintain the same safety standards as hospitals in the US and Europe. They have JCI accreditation, NABH certification, and ISO quality standards. Infection control protocols, patient safety measures, and post-operative care meet international benchmarks. Over 2 million international patients choose India annually for medical treatment."
  },
  {
    question: 'How do I get started with Shifa AlHind?',
    answer: "Getting started is simple: (1) Submit your medical reports through our free consultation form, (2) We'll connect you with the best hospitals and doctors for your condition, (3) Receive detailed cost estimates and treatment plans, (4) We handle all logistics including visa, flights, and accommodation, (5) Receive world-class treatment with 24/7 support. The entire process typically takes 7-14 days from initial consultation to arrival in India."
  }
];

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // Bilingual content structure
  const content = {
    en: {
      hero: {
        badge: 'Trusted by 10,000+ GCC Patients | Focus on Bangalore Hospitals | Accommodation at Pentouz Hotels',
        title: 'World-Class Medical Tourism to India from UAE, Saudi Arabia & GCC Countries',
        subtitle1: 'Save 60-80% on medical treatments without compromising quality. Connect with JCI-accredited hospitals and internationally trained doctors in Bangalore and across India for cardiac surgery, orthopedic procedures, fertility treatments, and more.',
        subtitle2: 'Trusted by over 10,000 patients from UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain. Get personalized care with Arabic-speaking coordinators who lived in GCC, no waiting lists, and comprehensive support from consultation to recovery. Stay at Pentouz Hotels near hospitals.',
        statBadge1: 'Cost Savings',
        statBadge2: 'GCC Patients',
        statBadge3: 'JCI Hospitals',
        statBadge4: 'Arabic Support',
        cta1: 'Get Free Consultation',
        cta2: 'View All Treatments',
        cta3: 'WhatsApp في العربية',
      },
      search: {
        placeholder: 'Search treatments, hospitals, cities...',
        button: 'Search',
      },
      statistics: {
        title: 'Trusted by Thousands of International Patients',
        subtitle: 'Leading the way in medical tourism with proven results and world-class care',
      },
      treatments: {
        title: 'Popular Medical Treatments',
        subtitle: 'Most requested procedures by international patients from UAE, Saudi Arabia & GCC countries',
        viewAll: 'View All 30+ Treatments',
        learnMore: 'Learn More',
        cards: [
          { title: 'Heart Surgery', description: 'CABG, valve replacement, angioplasty procedures', savings: 'Save $50K-$138K' },
          { title: 'Knee Replacement', description: 'Total knee replacement with advanced implants', savings: 'Save $14K-$42K' },
          { title: 'IVF & Fertility', description: 'Advanced fertility treatments and IVF procedures', savings: 'Save $4K-$11K' },
          { title: 'Dental Implants', description: 'Titanium and zirconia dental implant solutions', savings: 'Save $700-$3.7K' },
          { title: 'Hair Transplant', description: 'FUE, FUT, and DHI hair restoration techniques', savings: 'Save $6K-$10K' },
          { title: 'Cancer Treatment', description: 'Advanced oncology care and cancer treatments', savings: 'Save $100K+' },
          { title: 'Rhinoplasty', description: 'Cosmetic nose reshaping and rhinoplasty surgery', savings: 'Save $2.5K-$11K' },
          { title: 'LASIK Eye Surgery', description: 'Blade-free LASIK and vision correction', savings: 'Save $3K-$5K' }
        ]
      },
      costComparison: {
        title: 'Compare Treatment Costs: India vs World',
        subtitle: 'See how much you can save on popular medical procedures. All costs in USD.',
        treatment: 'Treatment',
        india: 'India',
        usa: 'USA',
        uk: 'UK',
        uae: 'UAE',
        savings: 'Your Savings',
        youSave: '💰 You Save',
        treatments: [
          'Heart Bypass Surgery (CABG)',
          'Knee Replacement (TKR)',
          'IVF (Single Cycle)',
          'Dental Implants (Single Tooth)',
          'Liver Transplant',
          'Cataract Surgery (Both Eyes)',
          'Rhinoplasty (Nose Job)',
          'Spinal Fusion Surgery'
        ]
      },
      pentouz: {
        title: 'Accommodation at Pentouz Hotels, Bangalore',
        subtitle: 'Your comfortable home away from home during medical treatment in Bangalore',
        nearHospitals: 'Near Major Hospitals',
        nearHospitalsDesc: '10-15 min from Narayana, Manipal, Apollo, Fortis',
        familyRooms: 'Family-Friendly Rooms',
        familyRoomsDesc: 'Spacious rooms for patients and companions',
        halalPrayer: 'Halal Food & Prayer Room',
        halalPrayerDesc: 'Multi-cuisine restaurant with halal options',
        cta: 'Visit Pentouz Hotels →',
        readyTitle: 'Ready to explore Bangalore hospitals?',
        readyDesc: 'View our complete list of JCI-accredited hospitals with doctor profiles.',
        viewHospitals: 'View All Bangalore Hospitals',
        meetDoctors: 'Meet Our Doctors'
      },
      destinations: {
        title: 'Top Destinations',
        subtitle: 'Medical tourism destinations across the GCC',
        forResidents: 'Medical tourism for {country} residents',
        explore: 'Explore Destinations'
      },
      whyIndia: {
        title: 'Why Choose India for Medical Tourism?',
        intro: 'India has emerged as a global leader in medical tourism, attracting over 2 million international patients annually. For GCC residents, India offers an unbeatable combination of world-class healthcare in Bangalore and other cities, significant cost savings, and cultural familiarity with Arabic-speaking coordinators.',
        bangalore: 'Bangalore - India\'s Medical Hub',
        bangaloreDesc: 'Bangalore is home to India\'s best hospitals like Narayana Health, Manipal, and Apollo with world-class facilities. Perfect weather year-round (15-30°C) for recovery. We arrange your stay at Pentouz Hotels - comfortable accommodation near all major hospitals with family-friendly rooms and halal food options.',
        costSavings: 'Massive Cost Savings',
        costSavingsDesc: 'Medical procedures in India cost 60-80% less than in the UAE, Saudi Arabia, or Western countries. A heart bypass surgery that costs $100,000 in the US is available for $8,000-12,000 in India\'s top hospitals, with the same success rates and quality standards.',
        noWaiting: 'No Waiting Lists',
        noWaitingDesc: 'Unlike many developed countries where you might wait months for surgery, India\'s healthcare system can schedule your treatment within days or weeks. This is crucial for time-sensitive procedures or patients in pain.',
        accreditation: 'International Accreditation',
        accreditationDesc: 'Our partner hospitals hold JCI (Joint Commission International), NABH (National Accreditation Board for Hospitals), and ISO certifications, ensuring they meet the same rigorous standards as hospitals in the US and Europe.',
        arabicSupport: 'Arabic Support Throughout Journey',
        arabicSupportDesc: 'All our coordinators speak fluent Arabic and have lived in GCC countries (UAE, Saudi Arabia, Qatar) for 5-15 years. They understand your culture, dietary needs (halal food), and prayer requirements. Available 24/7 via WhatsApp in Arabic!',
        doctors: 'Experienced Doctors',
        doctorsDesc: 'India\'s top doctors are trained at institutions like Harvard, Johns Hopkins, and Mayo Clinic. Many have decades of experience and have performed thousands of procedures. India produces over 50,000 specialist doctors annually.',
        technology: 'Advanced Technology',
        technologyDesc: 'Leading Indian hospitals invest heavily in cutting-edge medical technology, including robotic surgery systems, CyberKnife radiotherapy, PET-CT scanners, and advanced cardiac catheterization labs.',
        cultural: 'Cultural & Linguistic Comfort',
        culturalDesc: 'For GCC patients, India offers cultural familiarity, halal food options, and English-speaking medical staff. Many hospitals have dedicated international patient departments with Arabic interpreters.'
      },
      faq: {
        title: 'Frequently Asked Questions About Medical Tourism to India'
      },
      testimonials: {
        badge: '10,000+ GCC Patients Treated Successfully',
        title: 'What Our Patients Say',
        subtitle: 'Real stories from UAE, Saudi Arabia, and GCC patients who experienced our Arabic support, Bangalore hospitals, and comfortable stay at Pentouz Hotels'
      }
    },
    ar: {
      hero: {
        badge: 'موثوق من قبل أكثر من 10,000 مريض من دول الخليج | التركيز على مستشفيات بنغالور | الإقامة في فنادق بنتوز',
        title: 'سياحة علاجية عالمية المستوى إلى الهند من الإمارات والسعودية ودول الخليج',
        subtitle1: 'وفّر 60-80٪ على العلاجات الطبية دون المساس بالجودة. تواصل مع مستشفيات معتمدة من JCI وأطباء مدربين دولياً في بنغالور وعبر الهند لجراحة القلب، الإجراءات العظمية، علاجات الخصوبة، والمزيد.',
        subtitle2: 'موثوق من قبل أكثر من 10,000 مريض من الإمارات والسعودية وقطر وعمان والكويت والبحرين. احصل على رعاية شخصية مع منسقين ناطقين بالعربية عاشوا في دول الخليج، بدون قوائم انتظار، ودعم شامل من الاستشارة إلى التعافي. أقم في فنادق بنتوز بالقرب من المستشفيات.',
        statBadge1: 'التوفير',
        statBadge2: 'مرضى الخليج',
        statBadge3: 'مستشفيات JCI',
        statBadge4: 'دعم عربي',
        cta1: 'احصل على استشارة مجانية',
        cta2: 'عرض جميع العلاجات',
        cta3: 'واتساب بالعربية',
      },
      search: {
        placeholder: 'ابحث عن العلاجات، المستشفيات، المدن...',
        button: 'بحث',
      },
      statistics: {
        title: 'موثوق من آلاف المرضى الدوليين',
        subtitle: 'نقود الطريق في السياحة العلاجية مع نتائج مثبتة ورعاية عالمية المستوى',
      },
      treatments: {
        title: 'العلاجات الطبية الشائعة',
        subtitle: 'الإجراءات الأكثر طلباً من المرضى الدوليين من الإمارات والسعودية ودول الخليج',
        viewAll: 'عرض جميع العلاجات أكثر من 30',
        learnMore: 'اعرف المزيد',
        cards: [
          { title: 'جراحة القلب', description: 'عمليات القلب المفتوح، استبدال الصمامات، قسطرة الشرايين', savings: 'وفّر $50-138 ألف' },
          { title: 'استبدال الركبة', description: 'استبدال الركبة الكامل بزراعات متقدمة', savings: 'وفّر $14-42 ألف' },
          { title: 'التلقيح الصناعي والخصوبة', description: 'علاجات الخصوبة المتقدمة وإجراءات أطفال الأنابيب', savings: 'وفّر $4-11 ألف' },
          { title: 'زراعة الأسنان', description: 'حلول زراعة الأسنان من التيتانيوم والزركونيا', savings: 'وفّر $700-3,700' },
          { title: 'زراعة الشعر', description: 'تقنيات زراعة الشعر FUE و FUT و DHI', savings: 'وفّر $6-10 آلاف' },
          { title: 'علاج السرطان', description: 'رعاية متقدمة للأورام وعلاجات السرطان', savings: 'وفّر أكثر من $100 ألف' },
          { title: 'تجميل الأنف', description: 'عمليات تجميل وإعادة تشكيل الأنف', savings: 'وفّر $2,500-11,000' },
          { title: 'عملية الليزك للعيون', description: 'ليزك بدون شفرات وتصحيح النظر', savings: 'وفّر $3-5 آلاف' }
        ]
      },
      costComparison: {
        title: 'قارن تكاليف العلاج: الهند مقابل العالم',
        subtitle: 'شاهد كم يمكنك توفيره على الإجراءات الطبية الشائعة. جميع التكاليف بالدولار الأمريكي.',
        treatment: 'العلاج',
        india: 'الهند',
        usa: 'الولايات المتحدة',
        uk: 'المملكة المتحدة',
        uae: 'الإمارات',
        savings: 'توفيرك',
        youSave: '💰 توفيرك',
        treatments: [
          'جراحة القلب المفتوح (CABG)',
          'استبدال الركبة الكامل',
          'التلقيح الصناعي (دورة واحدة)',
          'زراعة الأسنان (سن واحد)',
          'زراعة الكبد',
          'عملية الساد (كلتا العينين)',
          'تجميل الأنف',
          'جراحة دمج العمود الفقري'
        ]
      },
      pentouz: {
        title: 'الإقامة في فنادق بنتوز، بنغالور',
        subtitle: 'منزلك المريح بعيداً عن المنزل أثناء العلاج الطبي في بنغالور',
        nearHospitals: 'بالقرب من المستشفيات الكبرى',
        nearHospitalsDesc: '10-15 دقيقة من نارايانا، مانيبال، أبولو، فورتيس',
        familyRooms: 'غرف عائلية مريحة',
        familyRoomsDesc: 'غرف واسعة للمرضى والمرافقين',
        halalPrayer: 'طعام حلال وغرفة صلاة',
        halalPrayerDesc: 'مطعم متعدد المأكولات مع خيارات حلال',
        cta: 'زُر فنادق بنتوز ←',
        readyTitle: 'هل أنت مستعد لاستكشاف مستشفيات بنغالور؟',
        readyDesc: 'عرض قائمتنا الكاملة للمستشفيات المعتمدة من JCI مع ملفات الأطباء.',
        viewHospitals: 'عرض جميع مستشفيات بنغالور',
        meetDoctors: 'تعرّف على أطبائنا'
      },
      destinations: {
        title: 'الوجهات الأولى',
        subtitle: 'وجهات السياحة العلاجية عبر دول الخليج',
        forResidents: 'السياحة العلاجية لسكان {country}',
        explore: 'استكشف الوجهات'
      },
      whyIndia: {
        title: 'لماذا تختار الهند للسياحة العلاجية؟',
        intro: 'برزت الهند كرائدة عالمية في السياحة العلاجية، حيث تجذب أكثر من 2 مليون مريض دولي سنوياً. لسكان دول الخليج، تقدم الهند مزيجاً لا يُضاهى من الرعاية الصحية عالمية المستوى في بنغالور ومدن أخرى، وتوفير كبير في التكاليف، والألفة الثقافية مع منسقين ناطقين بالعربية.',
        bangalore: 'بنغالور - المركز الطبي للهند',
        bangaloreDesc: 'تضم بنغالور أفضل مستشفيات الهند مثل نارايانا هيلث، مانيبال، وأبولو بمرافق عالمية المستوى. طقس مثالي على مدار العام (15-30 درجة مئوية) للتعافي. ننظم إقامتك في فنادق بنتوز - إقامة مريحة بالقرب من جميع المستشفيات الكبرى مع غرف عائلية وخيارات طعام حلال.',
        costSavings: 'توفير هائل في التكاليف',
        costSavingsDesc: 'تكلف الإجراءات الطبية في الهند 60-80٪ أقل من الإمارات أو السعودية أو الدول الغربية. جراحة القلب المفتوح التي تكلف $100,000 في الولايات المتحدة متاحة بـ $8,000-12,000 في أفضل مستشفيات الهند، بنفس معدلات النجاح ومعايير الجودة.',
        noWaiting: 'لا قوائم انتظار',
        noWaitingDesc: 'على عكس العديد من الدول المتقدمة حيث قد تنتظر شهوراً للجراحة، يمكن لنظام الرعاية الصحية الهندي جدولة علاجك خلال أيام أو أسابيع. هذا أمر حاسم للإجراءات الحساسة للوقت أو المرضى الذين يعانون من الألم.',
        accreditation: 'اعتماد دولي',
        accreditationDesc: 'تحمل مستشفياتنا الشريكة شهادات JCI (اللجنة الدولية المشتركة)، NABH (المجلس الوطني لاعتماد المستشفيات)، وشهادات ISO، مما يضمن استيفائها لنفس المعايير الصارمة للمستشفيات في الولايات المتحدة وأوروبا.',
        arabicSupport: 'دعم عربي طوال الرحلة',
        arabicSupportDesc: 'جميع منسقينا يتحدثون العربية بطلاقة وعاشوا في دول الخليج (الإمارات، السعودية، قطر) لمدة 5-15 سنة. يفهمون ثقافتك واحتياجاتك الغذائية (طعام حلال) ومتطلبات الصلاة. متاحون 24/7 عبر واتساب بالعربية!',
        doctors: 'أطباء ذوو خبرة',
        doctorsDesc: 'أفضل أطباء الهند مدربون في مؤسسات مثل هارفارد، جونز هوبكنز، ومايو كلينك. لدى العديد منهم عقود من الخبرة وأجروا آلاف الإجراءات. تخرّج الهند أكثر من 50,000 طبيب متخصص سنوياً.',
        technology: 'تكنولوجيا متقدمة',
        technologyDesc: 'تستثمر المستشفيات الهندية الرائدة بكثافة في التكنولوجيا الطبية المتطورة، بما في ذلك أنظمة الجراحة الروبوتية، العلاج الإشعاعي بالسايبر نايف، ماسحات PET-CT الضوئية، ومختبرات قسطرة القلب المتقدمة.',
        cultural: 'راحة ثقافية ولغوية',
        culturalDesc: 'بالنسبة لمرضى الخليج، تقدم الهند ألفة ثقافية وخيارات طعام حلال وموظفين طبيين يتحدثون الإنجليزية. العديد من المستشفيات لديها أقسام مخصصة للمرضى الدوليين مع مترجمين فوريين للعربية.'
      },
      faq: {
        title: 'الأسئلة الشائعة حول السياحة العلاجية إلى الهند'
      },
      testimonials: {
        badge: 'أكثر من 10,000 مريض من الخليج تم علاجهم بنجاح',
        title: 'ما يقوله مرضانا',
        subtitle: 'قصص حقيقية من الإمارات والسعودية ومرضى الخليج الذين جربوا دعمنا باللغة العربية، مستشفيات بنغالور، والإقامة المريحة في فنادق بنتوز'
      }
    },
  };

  // Safe locale resolution with fallback
  const safeLocale = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  const currentContent = content[safeLocale];

  // Statistics data
  const statistics = [
    {
      icon: Users,
      number: '2M+',
      label: 'International Patients Annually',
      description: 'From 150+ countries worldwide',
      color: 'text-primary-600'
    },
    {
      icon: Award,
      number: '40+',
      label: 'JCI-Accredited Hospitals',
      description: 'Meeting global quality standards',
      color: 'text-accent-600'
    },
    {
      icon: TrendingUp,
      number: '95%+',
      label: 'Success Rate',
      description: 'On par with USA/UK hospitals',
      color: 'text-green-600'
    },
    {
      icon: DollarSign,
      number: '60-80%',
      label: 'Average Savings',
      description: 'Compared to Western countries',
      color: 'text-blue-600'
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: 'JCI Accredited Hospitals',
      description: 'Top-rated hospitals with international accreditations',
    },
    {
      icon: Activity,
      title: 'Expert Doctors',
      description: 'Experienced specialists with global recognition',
    },
    {
      icon: MapPin,
      title: '24/7 Support',
      description: 'Dedicated support in English and Arabic',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 px-4 py-20 text-white md:py-32">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" style={{
          backgroundSize: '30px 30px',
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)'
        }} />

        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            {/* Trust Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <Award className="h-4 w-4 text-accent-300" />
              <span>{currentContent.hero.badge}</span>
            </div>

            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {currentContent.hero.title}
            </h1>
            <p className="mb-4 text-lg text-primary-50 md:text-xl">
              {locale === 'ar' ? currentContent.hero.subtitle1 : (
                <>
                  Save 60-80% on medical treatments without compromising quality. Connect with JCI-accredited hospitals and internationally trained doctors in <strong>Bangalore</strong> and across India for cardiac surgery, orthopedic procedures, fertility treatments, and more.
                </>
              )}
            </p>
            <p className="mb-8 text-base text-primary-100 md:text-lg">
              {locale === 'ar' ? currentContent.hero.subtitle2 : (
                <>
                  Trusted by over 10,000 patients from UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain. Get personalized care with <strong>Arabic-speaking coordinators who lived in GCC</strong>, no waiting lists, and comprehensive support from consultation to recovery. Stay at <strong>Pentouz Hotels</strong> near hospitals.
                </>
              )}
            </p>

            {/* Stats Badges */}
            <div className="mb-8 flex flex-wrap justify-center gap-3">
              <div className="rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm">
                <div className="text-2xl font-bold">60-80%</div>
                <div className="text-xs text-primary-100">{currentContent.hero.statBadge1}</div>
              </div>
              <div className="rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm">
                <div className="text-2xl font-bold">10,000+</div>
                <div className="text-xs text-primary-100">{currentContent.hero.statBadge2}</div>
              </div>
              <div className="rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm">
                <div className="text-2xl font-bold">40+</div>
                <div className="text-xs text-primary-100">{currentContent.hero.statBadge3}</div>
              </div>
              <div className="rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-xs text-primary-100">{currentContent.hero.statBadge4}</div>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" variant="secondary" className="shadow-xl">
                <Link href="/consultation">
                  {currentContent.hero.cta1}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 shadow-xl">
                <Link href="/treatments">{currentContent.hero.cta2}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-accent-500/20 border-accent-300 text-white hover:bg-accent-500/30 shadow-xl">
                <Link href="/contact">
                  <Languages className="mr-2 h-5 w-5" />
                  {currentContent.hero.cta3}
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary-400/20 blur-3xl" />
      </section>

      {/* Search Bar */}
      <section className="container -mt-8 px-4">
        <div className="glass mx-auto max-w-4xl rounded-2xl p-6">
          <form action="/search" method="get" className="flex flex-col gap-4 sm:flex-row">
            <input
              type="text"
              name="q"
              placeholder={currentContent.search.placeholder}
              className="flex-1 rounded-lg border-2 border-gray-200 bg-white px-4 py-3 focus:border-primary-500 focus:outline-none"
            />
            <Button type="submit" size="lg" className="sm:w-auto">
              {currentContent.search.button}
            </Button>
          </form>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="container px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            {currentContent.statistics.title}
          </h2>
          <p className="text-lg text-gray-600">
            {currentContent.statistics.subtitle}
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-50 ${stat.color}`}>
                  <Icon className="h-8 w-8" />
                </div>
                <div className={`mb-2 font-serif text-4xl font-bold ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="mb-1 font-semibold text-gray-900">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Features */}
      <section className="container px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
                  <feature.icon className="h-8 w-8 text-primary-500" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Popular Medical Treatments */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
              {currentContent.treatments.title}
            </h2>
            <p className="text-lg text-gray-600">
              {currentContent.treatments.subtitle}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="group cursor-pointer border-2 border-primary-100 transition-all hover:scale-105 hover:shadow-2xl">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 transition-all group-hover:from-primary-500 group-hover:to-primary-600 group-hover:shadow-xl">
                  <Heart className="h-6 w-6 text-primary-500 transition-colors group-hover:text-white" />
                </div>
                <CardTitle className="text-lg">{currentContent.treatments.cards[0].title}</CardTitle>
                <CardDescription>
                  {currentContent.treatments.cards[0].description}
                </CardDescription>
                <div className="mt-2 text-sm font-semibold text-green-600">{currentContent.treatments.cards[0].savings}</div>
              </CardHeader>
              <CardContent>
                <Link
                  href="/blog/heart-surgery-cost-comparison-india-vs-world"
                  className="flex items-center text-sm font-medium text-primary-500 hover:text-primary-600"
                >
                  {currentContent.treatments.learnMore}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer border-2 border-primary-100 transition-all hover:scale-105 hover:shadow-2xl">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 transition-all group-hover:from-primary-500 group-hover:to-primary-600 group-hover:shadow-xl">
                  <Activity className="h-6 w-6 text-primary-500 transition-colors group-hover:text-white" />
                </div>
                <CardTitle className="text-lg">{currentContent.treatments.cards[1].title}</CardTitle>
                <CardDescription>
                  {currentContent.treatments.cards[1].description}
                </CardDescription>
                <div className="mt-2 text-sm font-semibold text-green-600">{currentContent.treatments.cards[1].savings}</div>
              </CardHeader>
              <CardContent>
                <Link
                  href="/blog/knee-replacement-cost-india-vs-world"
                  className="flex items-center text-sm font-medium text-primary-500 hover:text-primary-600"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer border-2 border-primary-100 transition-all hover:scale-105 hover:shadow-2xl">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 transition-all group-hover:from-primary-500 group-hover:to-primary-600 group-hover:shadow-xl">
                  <Heart className="h-6 w-6 text-primary-500 transition-colors group-hover:text-white" />
                </div>
                <CardTitle className="text-lg">{currentContent.treatments.cards[2].title}</CardTitle>
                <CardDescription>
                  {currentContent.treatments.cards[2].description}
                </CardDescription>
                <div className="mt-2 text-sm font-semibold text-green-600">{currentContent.treatments.cards[2].savings}</div>
              </CardHeader>
              <CardContent>
                <Link
                  href="/blog/ivf-fertility-treatment-india-complete-guide"
                  className="flex items-center text-sm font-medium text-primary-500 hover:text-primary-600"
                >
                  {currentContent.treatments.learnMore}
$1<ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer border-2 border-primary-100 transition-all hover:scale-105 hover:shadow-2xl">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 transition-all group-hover:from-primary-500 group-hover:to-primary-600 group-hover:shadow-xl">
                  <Activity className="h-6 w-6 text-primary-500 transition-colors group-hover:text-white" />
                </div>
                <CardTitle className="text-lg">{currentContent.treatments.cards[3].title}</CardTitle>
                <CardDescription>
                  {currentContent.treatments.cards[3].description}
                </CardDescription>
                <div className="mt-2 text-sm font-semibold text-green-600">{currentContent.treatments.cards[3].savings}</div>
              </CardHeader>
              <CardContent>
                <Link
                  href="/treatments/dental-implants-india"
                  className="flex items-center text-sm font-medium text-primary-500 hover:text-primary-600"
                >
                  {currentContent.treatments.learnMore}
$1<ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer border-2 border-primary-100 transition-all hover:scale-105 hover:shadow-2xl">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 transition-all group-hover:from-primary-500 group-hover:to-primary-600 group-hover:shadow-xl">
                  <Heart className="h-6 w-6 text-primary-500 transition-colors group-hover:text-white" />
                </div>
                <CardTitle className="text-lg">{currentContent.treatments.cards[4].title}</CardTitle>
                <CardDescription>
                  {currentContent.treatments.cards[4].description}
                </CardDescription>
                <div className="mt-2 text-sm font-semibold text-green-600">{currentContent.treatments.cards[4].savings}</div>
              </CardHeader>
              <CardContent>
                <Link
                  href="/treatments/hair-transplant-india"
                  className="flex items-center text-sm font-medium text-primary-500 hover:text-primary-600"
                >
                  {currentContent.treatments.learnMore}
$1<ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer border-2 border-primary-100 transition-all hover:scale-105 hover:shadow-2xl">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 transition-all group-hover:from-primary-500 group-hover:to-primary-600 group-hover:shadow-xl">
                  <Activity className="h-6 w-6 text-primary-500 transition-colors group-hover:text-white" />
                </div>
                <CardTitle className="text-lg">{currentContent.treatments.cards[5].title}</CardTitle>
                <CardDescription>
                  {currentContent.treatments.cards[5].description}
                </CardDescription>
                <div className="mt-2 text-sm font-semibold text-green-600">{currentContent.treatments.cards[5].savings}</div>
              </CardHeader>
              <CardContent>
                <Link
                  href="/blog/cancer-treatment-cost-india-vs-world"
                  className="flex items-center text-sm font-medium text-primary-500 hover:text-primary-600"
                >
                  {currentContent.treatments.learnMore}
$1<ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer border-2 border-primary-100 transition-all hover:scale-105 hover:shadow-2xl">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 transition-all group-hover:from-primary-500 group-hover:to-primary-600 group-hover:shadow-xl">
                  <Heart className="h-6 w-6 text-primary-500 transition-colors group-hover:text-white" />
                </div>
                <CardTitle className="text-lg">{currentContent.treatments.cards[6].title}</CardTitle>
                <CardDescription>
                  {currentContent.treatments.cards[6].description}
                </CardDescription>
                <div className="mt-2 text-sm font-semibold text-green-600">{currentContent.treatments.cards[6].savings}</div>
              </CardHeader>
              <CardContent>
                <Link
                  href="/treatments/rhinoplasty-india"
                  className="flex items-center text-sm font-medium text-primary-500 hover:text-primary-600"
                >
                  {currentContent.treatments.learnMore}
$1<ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer border-2 border-primary-100 transition-all hover:scale-105 hover:shadow-2xl">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 transition-all group-hover:from-primary-500 group-hover:to-primary-600 group-hover:shadow-xl">
                  <Activity className="h-6 w-6 text-primary-500 transition-colors group-hover:text-white" />
                </div>
                <CardTitle className="text-lg">{currentContent.treatments.cards[7].title}</CardTitle>
                <CardDescription>
                  {currentContent.treatments.cards[7].description}
                </CardDescription>
                <div className="mt-2 text-sm font-semibold text-green-600">{currentContent.treatments.cards[7].savings}</div>
              </CardHeader>
              <CardContent>
                <Link
                  href="/treatments/lasik-eye-surgery-india"
                  className="flex items-center text-sm font-medium text-primary-500 hover:text-primary-600"
                >
                  {currentContent.treatments.learnMore}
$1<ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/treatments">{currentContent.treatments.viewAll}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="container px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            {currentContent.costComparison.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            {currentContent.costComparison.subtitle}
          </p>
        </div>

        {/* Desktop Table View (md and above) */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full border-collapse rounded-lg bg-white shadow-lg">
            <thead>
              <tr className="bg-primary-50">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                  {currentContent.costComparison.treatment}
                </th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">
                  {currentContent.costComparison.india}
                </th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">
                  {currentContent.costComparison.usa}
                </th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">
                  {currentContent.costComparison.uk}
                </th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">
                  {currentContent.costComparison.uae}
                </th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-primary-600">
                  {currentContent.costComparison.savings}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                  Heart Bypass Surgery (CABG)
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center font-semibold text-green-600">
                  $8,000-$12,000
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">
                  $120,000-$150,000
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">
                  $90,000-$110,000
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">
                  $50,000-$70,000
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center font-semibold text-primary-600">
                  $42K-$138K
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                  Knee Replacement (TKR)
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center font-semibold text-green-600">
                  $6,000-$8,000
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">
                  $40,000-$50,000
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">
                  $35,000-$45,000
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">
                  $20,000-$28,000
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center font-semibold text-primary-600">
                  $14K-$42K
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                  IVF (Single Cycle)
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center font-semibold text-green-600">
                  $2,500-$4,000
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">
                  $12,000-$15,000
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">
                  $10,000-$12,000
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">
                  $8,000-$10,000
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center font-semibold text-primary-600">
                  $4K-$11K
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                  Dental Implants (Single Tooth)
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center font-semibold text-green-600">
                  $500-$800
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">
                  $3,000-$4,500
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">
                  $2,500-$3,500
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">
                  $1,500-$2,000
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center font-semibold text-primary-600">
                  $700-$3.7K
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                  Liver Transplant
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center font-semibold text-green-600">
                  $35,000-$50,000
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">
                  $500,000-$800,000
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">
                  $400,000-$600,000
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">
                  $200,000-$300,000
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center font-semibold text-primary-600">
                  $150K-$750K
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                  Cataract Surgery (Both Eyes)
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center font-semibold text-green-600">
                  $1,500-$2,500
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">
                  $6,000-$8,000
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">
                  $5,000-$7,000
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">
                  $3,500-$5,000
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center font-semibold text-primary-600">
                  $2K-$5.5K
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                  Rhinoplasty (Nose Job)
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center font-semibold text-green-600">
                  $2,500-$4,000
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">
                  $8,000-$15,000
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">
                  $6,000-$10,000
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">
                  $5,000-$8,000
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center font-semibold text-primary-600">
                  $2.5K-$11K
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                  Spinal Fusion Surgery
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center font-semibold text-green-600">
                  $8,000-$12,000
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">
                  $80,000-$120,000
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">
                  $60,000-$90,000
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">
                  $35,000-$50,000
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center font-semibold text-primary-600">
                  $23K-$108K
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Card View (below md) */}
        <div className="space-y-4 md:hidden">
          {/* Treatment Card 1 */}
          <Card className="border-2 border-primary-100 bg-white">
            <CardHeader className="bg-primary-50 pb-3">
              <CardTitle className="text-base">Heart Bypass Surgery (CABG)</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-green-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇮🇳</span>
                    <span className="font-medium text-gray-900">India</span>
                  </div>
                  <span className="text-lg font-bold text-green-600">$8K-$12K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇺🇸</span>
                    <span className="font-medium text-gray-700">USA</span>
                  </div>
                  <span className="font-semibold text-gray-600">$120K-$150K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇬🇧</span>
                    <span className="font-medium text-gray-700">UK</span>
                  </div>
                  <span className="font-semibold text-gray-600">$90K-$110K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇦🇪</span>
                    <span className="font-medium text-gray-700">UAE</span>
                  </div>
                  <span className="font-semibold text-gray-600">$50K-$70K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-primary-50 p-3 border-2 border-primary-200">
                  <span className="font-bold text-primary-900">💰 You Save</span>
                  <span className="text-xl font-bold text-primary-600">$42K-$138K</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Treatment Card 2 */}
          <Card className="border-2 border-primary-100 bg-white">
            <CardHeader className="bg-primary-50 pb-3">
              <CardTitle className="text-base">Knee Replacement (TKR)</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-green-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇮🇳</span>
                    <span className="font-medium text-gray-900">India</span>
                  </div>
                  <span className="text-lg font-bold text-green-600">$6K-$8K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇺🇸</span>
                    <span className="font-medium text-gray-700">USA</span>
                  </div>
                  <span className="font-semibold text-gray-600">$40K-$50K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇬🇧</span>
                    <span className="font-medium text-gray-700">UK</span>
                  </div>
                  <span className="font-semibold text-gray-600">$35K-$45K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇦🇪</span>
                    <span className="font-medium text-gray-700">UAE</span>
                  </div>
                  <span className="font-semibold text-gray-600">$20K-$28K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-primary-50 p-3 border-2 border-primary-200">
                  <span className="font-bold text-primary-900">💰 You Save</span>
                  <span className="text-xl font-bold text-primary-600">$14K-$42K</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Treatment Card 3 */}
          <Card className="border-2 border-primary-100 bg-white">
            <CardHeader className="bg-primary-50 pb-3">
              <CardTitle className="text-base">IVF (Single Cycle)</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-green-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇮🇳</span>
                    <span className="font-medium text-gray-900">India</span>
                  </div>
                  <span className="text-lg font-bold text-green-600">$2.5K-$4K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇺🇸</span>
                    <span className="font-medium text-gray-700">USA</span>
                  </div>
                  <span className="font-semibold text-gray-600">$12K-$15K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇬🇧</span>
                    <span className="font-medium text-gray-700">UK</span>
                  </div>
                  <span className="font-semibold text-gray-600">$10K-$12K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇦🇪</span>
                    <span className="font-medium text-gray-700">UAE</span>
                  </div>
                  <span className="font-semibold text-gray-600">$8K-$10K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-primary-50 p-3 border-2 border-primary-200">
                  <span className="font-bold text-primary-900">💰 You Save</span>
                  <span className="text-xl font-bold text-primary-600">$4K-$11K</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Treatment Card 4 */}
          <Card className="border-2 border-primary-100 bg-white">
            <CardHeader className="bg-primary-50 pb-3">
              <CardTitle className="text-base">Dental Implants (Single Tooth)</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-green-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇮🇳</span>
                    <span className="font-medium text-gray-900">India</span>
                  </div>
                  <span className="text-lg font-bold text-green-600">$500-$800</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇺🇸</span>
                    <span className="font-medium text-gray-700">USA</span>
                  </div>
                  <span className="font-semibold text-gray-600">$3K-$4.5K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇬🇧</span>
                    <span className="font-medium text-gray-700">UK</span>
                  </div>
                  <span className="font-semibold text-gray-600">$2.5K-$3.5K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇦🇪</span>
                    <span className="font-medium text-gray-700">UAE</span>
                  </div>
                  <span className="font-semibold text-gray-600">$1.5K-$2K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-primary-50 p-3 border-2 border-primary-200">
                  <span className="font-bold text-primary-900">💰 You Save</span>
                  <span className="text-xl font-bold text-primary-600">$700-$3.7K</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Treatment Card 5 */}
          <Card className="border-2 border-primary-100 bg-white">
            <CardHeader className="bg-primary-50 pb-3">
              <CardTitle className="text-base">Liver Transplant</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-green-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇮🇳</span>
                    <span className="font-medium text-gray-900">India</span>
                  </div>
                  <span className="text-lg font-bold text-green-600">$35K-$50K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇺🇸</span>
                    <span className="font-medium text-gray-700">USA</span>
                  </div>
                  <span className="font-semibold text-gray-600">$500K-$800K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇬🇧</span>
                    <span className="font-medium text-gray-700">UK</span>
                  </div>
                  <span className="font-semibold text-gray-600">$400K-$600K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇦🇪</span>
                    <span className="font-medium text-gray-700">UAE</span>
                  </div>
                  <span className="font-semibold text-gray-600">$200K-$300K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-primary-50 p-3 border-2 border-primary-200">
                  <span className="font-bold text-primary-900">💰 You Save</span>
                  <span className="text-xl font-bold text-primary-600">$150K-$750K</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Treatment Card 6 */}
          <Card className="border-2 border-primary-100 bg-white">
            <CardHeader className="bg-primary-50 pb-3">
              <CardTitle className="text-base">Cataract Surgery (Both Eyes)</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-green-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇮🇳</span>
                    <span className="font-medium text-gray-900">India</span>
                  </div>
                  <span className="text-lg font-bold text-green-600">$1.5K-$2.5K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇺🇸</span>
                    <span className="font-medium text-gray-700">USA</span>
                  </div>
                  <span className="font-semibold text-gray-600">$6K-$8K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇬🇧</span>
                    <span className="font-medium text-gray-700">UK</span>
                  </div>
                  <span className="font-semibold text-gray-600">$5K-$7K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇦🇪</span>
                    <span className="font-medium text-gray-700">UAE</span>
                  </div>
                  <span className="font-semibold text-gray-600">$3.5K-$5K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-primary-50 p-3 border-2 border-primary-200">
                  <span className="font-bold text-primary-900">💰 You Save</span>
                  <span className="text-xl font-bold text-primary-600">$2K-$5.5K</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Treatment Card 7 */}
          <Card className="border-2 border-primary-100 bg-white">
            <CardHeader className="bg-primary-50 pb-3">
              <CardTitle className="text-base">Rhinoplasty (Nose Job)</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-green-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇮🇳</span>
                    <span className="font-medium text-gray-900">India</span>
                  </div>
                  <span className="text-lg font-bold text-green-600">$2.5K-$4K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇺🇸</span>
                    <span className="font-medium text-gray-700">USA</span>
                  </div>
                  <span className="font-semibold text-gray-600">$8K-$15K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇬🇧</span>
                    <span className="font-medium text-gray-700">UK</span>
                  </div>
                  <span className="font-semibold text-gray-600">$6K-$10K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇦🇪</span>
                    <span className="font-medium text-gray-700">UAE</span>
                  </div>
                  <span className="font-semibold text-gray-600">$5K-$8K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-primary-50 p-3 border-2 border-primary-200">
                  <span className="font-bold text-primary-900">💰 You Save</span>
                  <span className="text-xl font-bold text-primary-600">$2.5K-$11K</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Treatment Card 8 */}
          <Card className="border-2 border-primary-100 bg-white">
            <CardHeader className="bg-primary-50 pb-3">
              <CardTitle className="text-base">Spinal Fusion Surgery</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-green-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇮🇳</span>
                    <span className="font-medium text-gray-900">India</span>
                  </div>
                  <span className="text-lg font-bold text-green-600">$8K-$12K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇺🇸</span>
                    <span className="font-medium text-gray-700">USA</span>
                  </div>
                  <span className="font-semibold text-gray-600">$80K-$120K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇬🇧</span>
                    <span className="font-medium text-gray-700">UK</span>
                  </div>
                  <span className="font-semibold text-gray-600">$60K-$90K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇦🇪</span>
                    <span className="font-medium text-gray-700">UAE</span>
                  </div>
                  <span className="font-semibold text-gray-600">$35K-$50K</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-primary-50 p-3 border-2 border-primary-200">
                  <span className="font-bold text-primary-900">💰 You Save</span>
                  <span className="text-xl font-bold text-primary-600">$23K-$108K</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="mb-4 text-gray-700">
            <strong>Note:</strong> Costs include hospital stay, surgeon fees, anesthesia, and follow-up visits. Actual costs may vary based on patient condition and hospital choice.
          </p>
          <Button asChild size="lg" variant="outline">
            <Link href="/treatments">View All Treatment Costs</Link>
          </Button>
        </div>
      </section>

      {/* Cost Calculator */}
      <CostCalculator />

      {/* Bangalore Medical Hub - Featured Section */}
      <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 px-4 py-16">
        <div className="container">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            <Building2 className="h-4 w-4" />
            Our Primary Destination
          </div>
          <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Why We Focus on Bangalore Hospitals
          </h2>
          <p className="mb-12 max-w-3xl text-lg text-gray-700">
            <strong>Bangalore</strong> is India&apos;s medical tourism capital with the highest concentration of JCI-accredited hospitals, internationally trained doctors, and cutting-edge medical technology. Perfect climate year-round for recovery.
          </p>

          <div className="grid gap-8 md:grid-cols-4">
            <Card className="border-2 border-green-200 bg-white transition-all hover:scale-105 hover:shadow-2xl">
              <CardHeader>
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600 shadow-xl">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-lg">15+ JCI Hospitals</CardTitle>
                <CardDescription>
                  Highest concentration of internationally accredited hospitals in India
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-green-200 bg-white transition-all hover:scale-105 hover:shadow-2xl">
              <CardHeader>
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600 shadow-xl">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-lg">World-Class Doctors</CardTitle>
                <CardDescription>
                  Harvard, Johns Hopkins trained specialists with decades of experience
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-green-200 bg-white transition-all hover:scale-105 hover:shadow-2xl">
              <CardHeader>
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600 shadow-xl">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-lg">Perfect Weather</CardTitle>
                <CardDescription>
                  15-30°C year-round, ideal for post-surgery recovery unlike hot/humid cities
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-green-200 bg-white transition-all hover:scale-105 hover:shadow-2xl">
              <CardHeader>
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600 shadow-xl">
                  <Plane className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-lg">Direct Flights</CardTitle>
                <CardDescription>
                  4-5 hour direct flights from Dubai, Abu Dhabi, Riyadh, Doha, Kuwait
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Pentouz Hotels Featured */}
          <Card className="mt-12 border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-xl">
                  <Hotel className="h-10 w-10 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl">{currentContent.pentouz.title}</CardTitle>
                  <CardDescription className="text-base">
                    {currentContent.pentouz.subtitle}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="flex gap-3 rounded-lg bg-white/70 p-4">
                  <MapPin className="h-6 w-6 shrink-0 text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-900">{currentContent.pentouz.nearHospitals}</p>
                    <p className="text-sm text-gray-600">{currentContent.pentouz.nearHospitalsDesc}</p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-lg bg-white/70 p-4">
                  <Building2 className="h-6 w-6 shrink-0 text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-900">{currentContent.pentouz.familyRooms}</p>
                    <p className="text-sm text-gray-600">{currentContent.pentouz.familyRoomsDesc}</p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-lg bg-white/70 p-4">
                  <CheckCircle className="h-6 w-6 shrink-0 text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-900">{currentContent.pentouz.halalPrayer}</p>
                    <p className="text-sm text-gray-600">{currentContent.pentouz.halalPrayerDesc}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Button asChild size="lg" variant="default" className="bg-orange-600 hover:bg-orange-700 shadow-xl">
                  <Link href="https://pentouz.com/" target="_blank" rel="noopener noreferrer">
                    <Hotel className="mr-2 h-5 w-5" />
                    Visit Pentouz Hotels →
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="mb-4 text-gray-700">
              <strong>{currentContent.pentouz.readyTitle}</strong> {currentContent.pentouz.readyDesc}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg" variant="outline" className="border-green-300 text-green-700 hover:bg-green-50">
                <Link href="/hospitals">
                  <Building2 className="mr-2 h-5 w-5" />
                  View All Bangalore Hospitals
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-green-300 text-green-700 hover:bg-green-50">
                <Link href="/doctors">
                  <Users className="mr-2 h-5 w-5" />
                  Meet Our Doctors
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="container px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            {currentContent.destinations.title}
          </h2>
          <p className="text-lg text-gray-600">
            {currentContent.destinations.subtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gccCountries.slice(0, 6).map((country) => (
            <Card key={country.slug} className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600" />
              <CardHeader>
                <CardTitle>{country.name}</CardTitle>
                <CardDescription>
                  Medical tourism for {country.name} residents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href={`/for-${country.slug}-patients`}
                  className="flex items-center text-sm font-medium text-primary-500 hover:text-primary-600"
                >
                  Explore Destinations
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose India for Medical Tourism */}
      <section className="container px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            {currentContent.whyIndia.title}
          </h2>
          <div className="mb-8 text-center">
            <p className="text-lg leading-relaxed text-gray-700">
              {safeLocale === 'ar' ? currentContent.whyIndia.intro : (<>India has emerged as a global leader in medical tourism, attracting over 2 million international patients annually. For GCC residents, India offers an unbeatable combination of world-class healthcare in <strong className="text-green-600">Bangalore</strong> and other cities, significant cost savings, and cultural familiarity with <strong className="text-orange-600">Arabic-speaking coordinators</strong>.</>)}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-lg border-2 border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-green-600" />
                  <h3 className="text-xl font-semibold text-gray-900">{currentContent.whyIndia.bangalore}</h3>
                </div>
                <p className="text-gray-700">
                  <strong>Bangalore</strong> is home to India&apos;s best hospitals like Narayana Health, Manipal, and Apollo with world-class facilities. Perfect weather year-round (15-30°C) for recovery. We arrange your stay at <strong className="text-orange-600">Pentouz Hotels</strong> - comfortable accommodation near all major hospitals with family-friendly rooms and halal food options.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{currentContent.whyIndia.costSavings}</h3>
                <p className="text-gray-700">
                  Medical procedures in India cost 60-80% less than in the UAE, Saudi Arabia, or Western countries. A heart bypass surgery that costs $100,000 in the US is available for $8,000-12,000 in India&apos;s top hospitals, with the same success rates and quality standards.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{currentContent.whyIndia.noWaiting}</h3>
                <p className="text-gray-700">
                  Unlike many developed countries where you might wait months for surgery, India&apos;s healthcare system can schedule your treatment within days or weeks. This is crucial for time-sensitive procedures or patients in pain.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{currentContent.whyIndia.accreditation}</h3>
                <p className="text-gray-700">
                  Our partner hospitals hold JCI (Joint Commission International), NABH (National Accreditation Board for Hospitals), and ISO certifications, ensuring they meet the same rigorous standards as hospitals in the US and Europe.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-lg border-2 border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Languages className="h-5 w-5 text-orange-600" />
                  <h3 className="text-xl font-semibold text-gray-900">{currentContent.whyIndia.arabicSupport}</h3>
                </div>
                <p className="text-gray-700">
                  All our coordinators speak <strong>fluent Arabic</strong> and have lived in GCC countries (UAE, Saudi Arabia, Qatar) for 5-15 years. They understand your culture, dietary needs (halal food), and prayer requirements. Available 24/7 via WhatsApp in Arabic!
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{currentContent.whyIndia.doctors}</h3>
                <p className="text-gray-700">
                  India&apos;s top doctors are trained at institutions like Harvard, Johns Hopkins, and Mayo Clinic. Many have decades of experience and have performed thousands of procedures. India produces over 50,000 specialist doctors annually.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{currentContent.whyIndia.technology}</h3>
                <p className="text-gray-700">
                  Leading Indian hospitals invest heavily in cutting-edge medical technology, including robotic surgery systems, CyberKnife radiotherapy, PET-CT scanners, and advanced cardiac catheterization labs.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{currentContent.whyIndia.cultural}</h3>
                <p className="text-gray-700">
                  For GCC patients, India offers cultural familiarity, halal food options, and English-speaking medical staff. Many hospitals have dedicated international patient departments with Arabic interpreters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Certification Badges - Enhanced */}
      <section className="container px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            {safeLocale === 'ar' ? '🏅 الاعتمادات والشهادات الطبية' : '🏅 Medical Certifications & Trust Badges'}
          </h2>
          <p className="mb-8 text-center text-lg text-gray-600 dark:text-gray-400">
            {safeLocale === 'ar'
              ? 'جميع المستشفيات الشريكة حاصلة على اعتمادات دولية تضمن لك أعلى معايير الجودة والسلامة'
              : 'All partner hospitals hold international accreditations ensuring the highest standards of quality and safety'}
          </p>
          <CertificationBadges locale={safeLocale} variant="detailed" />
        </div>
      </section>

      {/* Medical Quality Statement */}
      <section className="container px-4 pb-12">
        <div className="mx-auto max-w-4xl">
          <MedicalQualityStatement locale={safeLocale} />
        </div>
      </section>

      {/* Enhanced Patient Journey - 8 Steps */}
      <PatientJourney locale={safeLocale} />

      {/* Hospital Partnership Logos & Trust Badges */}
      <HospitalLogos locale="en" showStats={true} />

      {/* FAQ Schema for Rich Snippets */}
      <FAQSchema faqs={faqData.map(faq => ({ question: faq.question, answer: faq.answer }))} />

      {/* FAQ Section */}
      <section className="container px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            {currentContent.faq.title}
          </h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>How much can I save with medical tourism to India?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Most patients save 60-80% compared to costs in the UAE, Saudi Arabia, or Western countries. For example, a knee replacement costs $30,000-50,000 in the US but only $6,000-8,000 in India. Heart bypass surgery costs $100,000+ in the West versus $8,000-12,000 in India. Even after including travel, accommodation, and other expenses, the savings are substantial.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Are Indian hospitals really as good as hospitals in the West?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Yes. India&apos;s top hospitals are JCI-accredited, which means they meet the same international standards as hospitals in the US and Europe. Many Indian doctors are trained at Harvard, Johns Hopkins, and other prestigious institutions. India performs over 200,000 cardiac surgeries annually with success rates matching or exceeding Western standards. Hospitals like Apollo, Fortis, and Max use the same advanced technology you&apos;d find in New York or London.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What treatments are most popular for GCC patients?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  The most sought-after treatments include cardiac surgery (bypass, valve replacement), orthopedic procedures (knee and hip replacement), fertility treatments (IVF), cosmetic surgery, dental implants, cancer treatment, and spinal surgery. India is also renowned for complex procedures like liver transplants and robotic surgery.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How long do I need to stay in India for treatment?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  It depends on the procedure. Simple treatments like dental work might require 5-7 days, while major surgeries like knee replacement typically need 10-14 days (including pre-op tests, surgery, and initial recovery). Heart surgery usually requires 2-3 weeks. We provide detailed timelines during your consultation based on your specific treatment.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Do you help with medical visas?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Yes, we provide complete support for obtaining a medical visa for India. We supply the required invitation letter from the hospital, help you prepare the documentation, and guide you through the application process. Medical visas are typically processed within 3-5 days for GCC nationals.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What about language barriers?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  English is widely spoken in all major Indian hospitals, and most doctors are fluent. Additionally, we provide Arabic interpreters for GCC patients who prefer to communicate in Arabic. Our coordinators are bilingual and available 24/7 to help with any communication needs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Is medical treatment in India safe for international patients?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Absolutely. India&apos;s top hospitals maintain the same safety standards as hospitals in the US and Europe. They have JCI accreditation, NABH certification, and ISO quality standards. Infection control protocols, patient safety measures, and post-operative care meet international benchmarks. Over 2 million international patients choose India annually for medical treatment.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How do I get started with Shifa AlHind?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Getting started is simple: (1) Submit your medical reports through our free consultation form, (2) We&apos;ll connect you with the best hospitals and doctors for your condition, (3) Receive detailed cost estimates and treatment plans, (4) We handle all logistics including visa, flights, and accommodation, (5) Receive world-class treatment with 24/7 support. The entire process typically takes 7-14 days from initial consultation to arrival in India.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Patient Success Stories / Testimonials */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 px-4 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
              <Users className="h-4 w-4" />
              10,000+ GCC Patients Treated Successfully
            </div>
            <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
              {currentContent.testimonials.title}
            </h2>
            <p className="mb-12 text-lg text-gray-600">
              {currentContent.testimonials.subtitle}
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-2 border-primary-100 bg-gradient-to-br from-white to-primary-50 transition-all hover:scale-105 hover:shadow-2xl">
                <CardHeader>
                  <div className="mb-4 flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent-500">★</span>
                    ))}
                  </div>
                  <CardTitle className="text-lg">Perfect Experience with Arabic Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-700">
                    &quot;Had bypass surgery at Narayana Health in Bangalore. My coordinator Amina spoke perfect Arabic - she lived in Dubai for 12 years! Stayed at Pentouz Hotels, very comfortable with halal food. Saved $92,000 compared to Dubai. Everything was arranged perfectly!&quot;
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    <span>Saved $92,000 (76%)</span>
                  </div>
                  <p className="mt-3 font-semibold text-gray-900">Mohammed Al-Hashimi</p>
                  <p className="text-sm text-gray-600">Heart Surgery, Dubai, UAE</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary-100 bg-gradient-to-br from-white to-primary-50 transition-all hover:scale-105 hover:shadow-2xl">
                <CardHeader>
                  <div className="mb-4 flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent-500">★</span>
                    ))}
                  </div>
                  <CardTitle className="text-lg">Dream Come True - We&apos;re Parents Now!</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-700">
                    &quot;After 2 failed IVF attempts in Riyadh, we came to Manipal Hospital Bangalore through Shifa AlHind. Dr. Rajesh and the Arabic coordinator made us feel at home. Pentouz Hotels was like a second home during our 3-week stay. Now we have beautiful twin girls!&quot;
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    <span>Saved $8,500 (68%)</span>
                  </div>
                  <p className="mt-3 font-semibold text-gray-900">Fatima & Ahmed Al-Rashid</p>
                  <p className="text-sm text-gray-600">IVF Treatment, Riyadh, Saudi Arabia</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary-100 bg-gradient-to-br from-white to-primary-50 transition-all hover:scale-105 hover:shadow-2xl">
                <CardHeader>
                  <div className="mb-4 flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent-500">★</span>
                    ))}
                  </div>
                  <CardTitle className="text-lg">Walking Pain-Free After 8 Years!</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-700">
                    &quot;Suffered knee pain for 8 years. Got bilateral knee replacement at Apollo Bangalore. The Mako robotic surgery was incredible! My family stayed at Pentouz Hotels - very clean, near hospital, prayer room available. Arabic support team was available 24/7 on WhatsApp!&quot;
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    <span>Saved $35,000 (73%)</span>
                  </div>
                  <p className="mt-3 font-semibold text-gray-900">Sarah Al-Mazrouei</p>
                  <p className="text-sm text-gray-600">Knee Replacement, Sharjah, UAE</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Link href="/stories" className="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-700">
                Read 50+ More Success Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Articles Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 px-4 py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
              Medical Tourism Resources & Guides
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Comprehensive guides to help you make informed decisions about medical treatment in India. Cost comparisons, hospital selection tips, and real patient stories.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Blog Article 1 */}
            <Card className="flex flex-col transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-3 flex items-center gap-2 text-sm text-primary-600">
                  <Heart className="h-4 w-4" />
                  <span className="font-medium">Cost Comparison</span>
                </div>
                <CardTitle className="text-xl">
                  <Link href="/blog/heart-surgery-cost-comparison-india-vs-world" className="hover:text-primary-600">
                    Heart Surgery Cost: India vs USA, UK, UAE
                  </Link>
                </CardTitle>
                <CardDescription>
                  Complete 2025 cost breakdown. Save 60-80% on cardiac surgery without compromising quality.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Link href="/blog/heart-surgery-cost-comparison-india-vs-world" className="inline-flex items-center text-primary-600 hover:text-primary-700">
                  Read Full Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Blog Article 2 */}
            <Card className="flex flex-col transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-3 flex items-center gap-2 text-sm text-primary-600">
                  <MapPin className="h-4 w-4" />
                  <span className="font-medium">Travel Guide</span>
                </div>
                <CardTitle className="text-xl">
                  <Link href="/blog/medical-tourism-india-uae-patients-guide" className="hover:text-primary-600">
                    Medical Tourism from UAE: Complete Guide
                  </Link>
                </CardTitle>
                <CardDescription>
                  Step-by-step process for UAE patients. Visa, flights, accommodation, and real success stories.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Link href="/blog/medical-tourism-india-uae-patients-guide" className="inline-flex items-center text-primary-600 hover:text-primary-700">
                  Read Full Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Blog Article 3 */}
            <Card className="flex flex-col transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-3 flex items-center gap-2 text-sm text-primary-600">
                  <Activity className="h-4 w-4" />
                  <span className="font-medium">Orthopedics</span>
                </div>
                <CardTitle className="text-xl">
                  <Link href="/blog/knee-replacement-cost-india-vs-world" className="hover:text-primary-600">
                    Knee Replacement Surgery Cost Guide
                  </Link>
                </CardTitle>
                <CardDescription>
                  TKR, bilateral, and partial knee replacement. Implant brands, hospitals, and patient savings.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Link href="/blog/knee-replacement-cost-india-vs-world" className="inline-flex items-center text-primary-600 hover:text-primary-700">
                  Read Full Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Blog Article 4 */}
            <Card className="flex flex-col transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-3 flex items-center gap-2 text-sm text-primary-600">
                  <Heart className="h-4 w-4" />
                  <span className="font-medium">Fertility</span>
                </div>
                <CardTitle className="text-xl">
                  <Link href="/blog/ivf-fertility-treatment-india-complete-guide" className="hover:text-primary-600">
                    IVF & Fertility Treatment Complete Guide
                  </Link>
                </CardTitle>
                <CardDescription>
                  IVF success rates by age, top clinics, costs, and real patient success stories from GCC.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Link href="/blog/ivf-fertility-treatment-india-complete-guide" className="inline-flex items-center text-primary-600 hover:text-primary-700">
                  Read Full Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Blog Article 5 */}
            <Card className="flex flex-col transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-3 flex items-center gap-2 text-sm text-primary-600">
                  <CheckCircle className="h-4 w-4" />
                  <span className="font-medium">Selection Guide</span>
                </div>
                <CardTitle className="text-xl">
                  <Link href="/blog/how-to-choose-best-hospital-india" className="hover:text-primary-600">
                    How to Choose the Best Hospital in India
                  </Link>
                </CardTitle>
                <CardDescription>
                  10 essential criteria, JCI accreditation, doctor credentials, and red flags to avoid.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Link href="/blog/how-to-choose-best-hospital-india" className="inline-flex items-center text-primary-600 hover:text-primary-700">
                  Read Full Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* View All Blog Link Card */}
            <Card className="flex flex-col items-center justify-center bg-primary-50 transition-shadow hover:shadow-lg">
              <CardContent className="flex flex-col items-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-white">
                  <ArrowRight className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">More Resources</h3>
                <p className="mb-4 text-gray-600">
                  Explore all our medical tourism guides and resources
                </p>
                <Link href="/blog" className="inline-flex items-center font-semibold text-primary-600 hover:text-primary-700">
                  View All Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Share Section */}
      <section className="container px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <SocialShare
            url="/"
            title="World-Class Medical Tourism to India from UAE, Saudi Arabia & GCC - Save 60-80%"
            description="Connect with JCI-accredited hospitals and internationally trained doctors in India. Trusted by 2M+ international patients annually. Get free consultation!"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-500 px-4 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            Ready to Start Your Medical Journey to India?
          </h2>
          <p className="mb-8 text-lg text-primary-50">
            Get a free consultation, personalized treatment plan, and cost estimate from our medical experts. No obligation, completely confidential.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/consultation">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

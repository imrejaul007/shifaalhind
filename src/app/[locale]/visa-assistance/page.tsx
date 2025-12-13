import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CheckCircle2,
  FileText,
  Plane,
  Calendar,
  Globe,
  Shield,
  Clock,
  Users,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  AlertCircle,
  Star,
  Award,
  Download,
} from 'lucide-react';
import { generateSEOMetadata } from '@/lib/seo';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return generateSEOMetadata({
    title_en: 'Medical Visa Assistance for India - Fast e-Visa in 3-5 Days | Shifa Al Hind',
    title_ar: 'مساعدة التأشيرة الطبية للهند - تأشيرة إلكترونية سريعة في 3-5 أيام | شفاء الهند',
    description_en:
      'Complete medical visa assistance for India. E-visa in 3-5 days, visa on arrival at 6 airports. Free support for UAE, Saudi, Qatar, Oman, Kuwait, Bahrain patients.',
    description_ar:
      'مساعدة شاملة في التأشيرة الطبية للهند. تأشيرة إلكترونية في 3-5 أيام، تأشيرة عند الوصول في 6 مطارات. دعم مجاني لمرضى الإمارات والسعودية وقطر وعمان والكويت والبحرين.',
    locale,
    path: '/visa-assistance',
  });
}

export default async function VisaAssistancePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const content = {
    en: {
      hero: {
        badge: '10,000+ Visas Approved Since 2013 • 100% Success Rate',
        title: 'Free Medical Visa Assistance\nfor India',
        subtitle: 'Get your e-visa in 3-5 days • No embassy visit required • 100% online',
        description:
          'Complete visa support in Arabic for UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain patients',
        buttons: {
          visa: 'Get Visa Help Now',
          whatsapp: 'WhatsApp Support',
        },
      },
      visaTypes: {
        title: '3 Types of Medical Visas for India',
        subtitle: 'Choose the best option for your situation. We help with all types.',
        recommended: '⭐ Recommended',
      },
      process: {
        title: 'Simple 4-Step Process',
        subtitle: 'We handle everything from document preparation to visa approval',
      },
      documents: {
        title: 'Required Documents',
        subtitle: 'Just 4 simple documents. We help prepare everything else.',
      },
      whyUs: {
        title: 'Why Choose Our Visa Service?',
        subtitle: '10,000+ visas approved since 2013 with 100% success rate',
      },
      faqs: {
        title: 'Frequently Asked Questions',
      },
      cta: {
        title: 'Ready to Get Your Medical Visa?',
        subtitle:
          'Free visa assistance • E-visa in 3-5 days • 100% success rate • Native Arabic support',
        buttons: {
          start: 'Start Visa Process',
          call: 'Call +971 50 123 4567',
          email: 'Email Us',
        },
      },
    },
    ar: {
      hero: {
        badge: 'أكثر من 10,000 تأشيرة معتمدة منذ 2013 • معدل نجاح 100٪',
        title: 'مساعدة مجانية في التأشيرة الطبية\nللهند',
        subtitle: 'احصل على تأشيرتك الإلكترونية في 3-5 أيام • لا حاجة لزيارة السفارة • 100٪ عبر الإنترنت',
        description:
          'دعم كامل للتأشيرة باللغة العربية لمرضى الإمارات والسعودية وقطر وعمان والكويت والبحرين',
        buttons: {
          visa: 'احصل على مساعدة التأشيرة الآن',
          whatsapp: 'دعم واتساب',
        },
      },
      visaTypes: {
        title: '3 أنواع من التأشيرات الطبية للهند',
        subtitle: 'اختر الخيار الأفضل لحالتك. نحن نساعد في جميع الأنواع.',
        recommended: '⭐ موصى به',
      },
      process: {
        title: 'عملية بسيطة من 4 خطوات',
        subtitle: 'نحن نتولى كل شيء من إعداد المستندات إلى الموافقة على التأشيرة',
      },
      documents: {
        title: 'الوثائق المطلوبة',
        subtitle: '4 مستندات بسيطة فقط. نحن نساعد في إعداد كل شيء آخر.',
      },
      whyUs: {
        title: 'لماذا تختار خدمة التأشيرة لدينا؟',
        subtitle: 'أكثر من 10,000 تأشيرة معتمدة منذ 2013 مع معدل نجاح 100٪',
      },
      faqs: {
        title: 'الأسئلة المتكررة',
      },
      cta: {
        title: 'هل أنت مستعد للحصول على تأشيرتك الطبية؟',
        subtitle:
          'مساعدة مجانية في التأشيرة • تأشيرة إلكترونية في 3-5 أيام • معدل نجاح 100٪ • دعم عربي أصلي',
        buttons: {
          start: 'ابدأ عملية التأشيرة',
          call: 'اتصل +971 50 123 4567',
          email: 'راسلنا عبر البريد',
        },
      },
    },
  };

  const t = content[locale as 'en' | 'ar'];

  const visaTypes = [
    {
      icon: Globe,
      title: locale === 'ar' ? 'التأشيرة الطبية الإلكترونية' : 'e-Medical Visa (Online)',
      time: locale === 'ar' ? '3-5 أيام' : '3-5 Days',
      cost: '$80 USD',
      validity: locale === 'ar' ? '60 يومًا (دخول ثلاثي)' : '60 days (triple entry)',
      features:
        locale === 'ar'
          ? [
              'التقديم 100٪ عبر الإنترنت',
              'لا حاجة لزيارة السفارة',
              'تتم الموافقة في 3-5 أيام عمل',
              'صالحة لمدة 60 يومًا',
              'دخول ثلاثي مسموح',
              'يمكن التمديد حتى سنة واحدة',
            ]
          : [
              'Apply 100% online',
              'No embassy visit required',
              'Approved in 3-5 business days',
              'Valid for 60 days',
              'Triple entry allowed',
              'Can extend up to 1 year',
            ],
      color: 'from-blue-500 to-blue-600',
      recommended: true,
    },
    {
      icon: Plane,
      title: locale === 'ar' ? 'التأشيرة الطبية عند الوصول' : 'Medical Visa on Arrival',
      time: locale === 'ar' ? 'فوري (في المطار)' : 'Instant (at airport)',
      cost: '$80 USD',
      validity: locale === 'ar' ? '60 يومًا (دخول مزدوج)' : '60 days (double entry)',
      features:
        locale === 'ar'
          ? [
              'موافقة فورية في المطار',
              'متاح في 6 مطارات رئيسية',
              'مومباي ودلهي وبنغالور وتشيناي وكولكاتا وحيدر أباد',
              'لا حاجة لطلب مسبق',
              'يجب أن يكون لديك وثائق طبية',
              'صالحة لمدة 60 يومًا',
            ]
          : [
              'Instant approval at airport',
              'Available at 6 major airports',
              'Mumbai, Delhi, Bangalore, Chennai, Kolkata, Hyderabad',
              'No prior application needed',
              'Must have medical documents',
              'Valid for 60 days',
            ],
      color: 'from-orange-500 to-orange-600',
      recommended: false,
    },
    {
      icon: Users,
      title: locale === 'ar' ? 'تأشيرة المرافق الطبي' : 'Medical Attendant Visa',
      time: locale === 'ar' ? '3-5 أيام' : '3-5 Days',
      cost: '$80 USD',
      validity: locale === 'ar' ? '60 يومًا (يجب أن تتطابق مع المريض)' : '60 days (must match patient)',
      features:
        locale === 'ar'
          ? [
              'للعائلة / المرافقين',
              'ما يصل إلى 2 مرافقين لكل مريض',
              'نفس صلاحية التأشيرة الطبية',
              'يمكن التمديد مع المريض',
              'يجب التقديم معًا',
              'يشمل الزوج والأطفال والوالدين',
            ]
          : [
              'For family/companions',
              'Up to 2 attendants per patient',
              'Same validity as medical visa',
              'Can extend with patient',
              'Must apply together',
              'Covers spouse, children, parents',
            ],
      color: 'from-green-500 to-green-600',
      recommended: false,
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: locale === 'ar' ? 'مشاركة الوثائق الطبية' : 'Share Medical Documents',
      description:
        locale === 'ar'
          ? 'أرسل لنا نسخة من جواز السفر والتقارير الطبية وخطاب المستشفى عبر واتساب أو البريد الإلكتروني.'
          : 'Send us your passport copy, medical reports, and hospital letter via WhatsApp or email.',
      icon: FileText,
      timeline: locale === 'ar' ? '15 دقيقة' : '15 minutes',
    },
    {
      step: '2',
      title: locale === 'ar' ? 'نحن نعد الطلب' : 'We Prepare Application',
      description:
        locale === 'ar'
          ? 'يقوم متخصصو التأشيرات لدينا بملء جميع النماذج وتحميل المستندات والتأكد من صحة كل شيء.'
          : 'Our visa specialists fill out all forms, upload documents, and ensure everything is correct.',
      icon: Shield,
      timeline: locale === 'ar' ? '2-3 ساعات' : '2-3 hours',
    },
    {
      step: '3',
      title: locale === 'ar' ? 'المعالجة الحكومية' : 'Government Processing',
      description:
        locale === 'ar'
          ? 'تراجع الحكومة الهندية طلب التأشيرة الإلكترونية وتوافق عليه. نتابع الحالة يوميًا.'
          : 'Indian government reviews and approves your e-visa application. We track status daily.',
      icon: Clock,
      timeline: locale === 'ar' ? '3-5 أيام عمل' : '3-5 business days',
    },
    {
      step: '4',
      title: locale === 'ar' ? 'استلام التأشيرة الإلكترونية' : 'Receive e-Visa',
      description:
        locale === 'ar'
          ? 'يتم إرسال التأشيرة الإلكترونية عبر البريد الإلكتروني. اطبع نسخة وأحضرها إلى المطار. صالحة لمدة 60 يومًا مع دخول ثلاثي.'
          : 'e-Visa emailed to you. Print copy and bring to airport. Valid for 60 days with triple entry.',
      icon: CheckCircle2,
      timeline: locale === 'ar' ? 'بريد إلكتروني فوري' : 'Instant email',
    },
  ];

  const requiredDocuments = [
    {
      title: locale === 'ar' ? 'نسخة من جواز السفر' : 'Passport Copy',
      description:
        locale === 'ar'
          ? 'يجب أن يكون صالحًا لمدة 6 أشهر على الأقل من تاريخ الوصول'
          : 'Must be valid for at least 6 months from date of arrival',
      icon: FileText,
    },
    {
      title: locale === 'ar' ? 'خطاب المستشفى' : 'Hospital Letter',
      description:
        locale === 'ar'
          ? 'خطاب دعوة من مستشفى هندي (نحن نوفر هذا)'
          : 'Invitation letter from Indian hospital (we provide this)',
      icon: Award,
    },
    {
      title: locale === 'ar' ? 'التقارير الطبية' : 'Medical Reports',
      description:
        locale === 'ar'
          ? 'تقارير طبية حديثة أو فحوصات أو تشخيص'
          : 'Recent medical reports, scans, or diagnosis',
      icon: FileText,
    },
    {
      title: locale === 'ar' ? 'صورة جواز السفر' : 'Passport Photo',
      description:
        locale === 'ar'
          ? 'صورة 2×2 بوصة خلفية بيضاء (حديثة)'
          : '2x2 inch white background photo (recent)',
      icon: Users,
    },
  ];

  const whyChooseUs = [
    {
      title: locale === 'ar' ? '100٪ معدل النجاح' : '100% Success Rate',
      description:
        locale === 'ar'
          ? 'أكثر من 10000 تأشيرة طبية تمت الموافقة عليها منذ عام 2013. لا يوجد رفض عند اكتمال الوثائق.'
          : 'Over 10,000 medical visas approved since 2013. Zero rejections when documents are complete.',
      icon: Star,
      color: 'text-yellow-600',
    },
    {
      title: locale === 'ar' ? 'خدمة مجانية' : 'Free Service',
      description:
        locale === 'ar'
          ? 'نتولى جميع الأوراق المتعلقة بالتأشيرة مجانًا. أنت تدفع فقط رسوم الحكومة (80 دولارًا).'
          : 'We handle all visa paperwork at no charge. You only pay government fees ($80).',
      icon: CheckCircle2,
      color: 'text-green-600',
    },
    {
      title: locale === 'ar' ? 'دعم عربي أصلي' : 'Native Arabic Support',
      description:
        locale === 'ar'
          ? 'يضم فريق التأشيرات لدينا متحدثين أصليين باللغة العربية الذين عاشوا في دبي والرياض والدوحة.'
          : 'Our visa team includes native Arabic speakers who lived in Dubai, Riyadh, and Doha.',
      icon: MessageCircle,
      color: 'text-blue-600',
    },
    {
      title: locale === 'ar' ? 'معالجة سريعة' : 'Fast Processing',
      description:
        locale === 'ar'
          ? '3-5 أيام للتأشيرة الإلكترونية مقابل 7-10 أيام عبر السفارة. نتابع الحالة يوميًا.'
          : '3-5 days for e-visa vs 7-10 days through embassy. We track status daily.',
      icon: Clock,
      color: 'text-orange-600',
    },
    {
      title: locale === 'ar' ? 'مساعدة في تمديد التأشيرة' : 'Visa Extension Help',
      description:
        locale === 'ar'
          ? 'يمكن التمديد حتى سنة واحدة من خلال مكتب FRRO. نتولى جميع الأوراق.'
          : 'Can extend up to 1 year through FRRO office. We handle all paperwork.',
      icon: Calendar,
      color: 'text-purple-600',
    },
    {
      title: locale === 'ar' ? 'إرشادات كاملة' : 'Complete Guidance',
      description:
        locale === 'ar'
          ? 'مساعدة خطوة بخطوة من التطبيق إلى الوصول. دعم واتساب 24/7.'
          : 'Step-by-step help from application to arrival. 24/7 WhatsApp support.',
      icon: Users,
      color: 'text-indigo-600',
    },
  ];

  const faqs = [
    {
      question: locale === 'ar' ? 'هل أحتاج إلى زيارة السفارة الهندية؟' : 'Do I need to visit the Indian embassy?',
      answer:
        locale === 'ar'
          ? 'لا! مع التأشيرة الطبية الإلكترونية، كل شيء يتم 100٪ عبر الإنترنت. لا تحتاج أبدًا إلى زيارة السفارة أو القنصلية.'
          : 'No! With e-Medical Visa, everything is done 100% online. You never need to visit an embassy or consulate.',
    },
    {
      question:
        locale === 'ar'
          ? 'كم من الوقت تستغرق عملية التأشيرة؟'
          : 'How long does the visa process take?',
      answer:
        locale === 'ar'
          ? 'تستغرق التأشيرة الإلكترونية 3-5 أيام عمل. التأشيرة عند الوصول فورية في المطار. نوصي بالتأشيرة الإلكترونية لراحة البال.'
          : 'E-visa takes 3-5 business days. Visa on arrival is instant at the airport. We recommend e-visa for peace of mind.',
    },
    {
      question: locale === 'ar' ? 'هل يمكن لعائلتي القدوم معي؟' : 'Can my family come with me?',
      answer:
        locale === 'ar'
          ? 'نعم! يمكن لما يصل إلى 2 من أفراد الأسرة التقدم بطلب للحصول على تأشيرة المرافق الطبي. الزوج والأطفال أو الوالدين مؤهلون.'
          : 'Yes! Up to 2 family members can apply for Medical Attendant Visa. Spouse, children, or parents are eligible.',
    },
    {
      question:
        locale === 'ar'
          ? 'ماذا لو احتجت إلى البقاء أكثر من 60 يومًا؟'
          : 'What if I need to stay longer than 60 days?',
      answer:
        locale === 'ar'
          ? 'يمكنك تمديد التأشيرة الطبية حتى سنة واحدة من خلال مكتب FRRO (مكتب التسجيل الإقليمي للأجانب). نتولى جميع الأوراق الخاصة بالتمديد مجانًا.'
          : 'You can extend the medical visa up to 1 year through the FRRO (Foreigners Regional Registration Office). We handle all extension paperwork for free.',
    },
    {
      question: locale === 'ar' ? 'ما هي تكلفة التأشيرة؟' : 'What is the visa cost?',
      answer:
        locale === 'ar'
          ? 'رسوم الحكومة 80 دولارًا أمريكيًا لكل شخص. خدمتنا مجانية تمامًا. أنت تدفع فقط رسوم الحكومة مباشرة.'
          : 'Government fee is $80 USD per person. Our service is completely free. You only pay the government fee directly.',
    },
    {
      question: locale === 'ar' ? 'هل يمكن رفض التأشيرة؟' : 'Can the visa be rejected?',
      answer:
        locale === 'ar'
          ? 'نادر جدًا عند اكتمال الوثائق. لدينا معدل موافقة 100٪ مع التوثيق المناسب. نتحقق من كل شيء قبل التقديم لتجنب الرفض.'
          : 'Very rare when documents are complete. We have 100% approval rate with proper documentation. We check everything before submission to avoid rejection.',
    },
    {
      question:
        locale === 'ar'
          ? 'هل هناك متطلبات محددة لدولة الإمارات والسعودية وقطر ودول الخليج الأخرى؟'
          : 'Are there specific requirements for UAE, Saudi Arabia, Qatar, and other GCC countries?',
      answer:
        locale === 'ar'
          ? 'جميع مواطني دول مجلس التعاون الخليجي (الإمارات، السعودية، قطر، عمان، الكويت، البحرين) يتبعون نفس العملية. المتطلبات متطابقة: جواز السفر، التقارير الطبية، خطاب المستشفى، والصورة. عادة ما تتم الموافقة على جوازات السفر الخليجية بشكل أسرع (2-4 أيام مقابل 3-5 أيام) بسبب العلاقات الدبلوماسية القوية بين الهند ودول الخليج.'
          : 'All GCC citizens (UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain) follow the same process. Requirements are identical: passport, medical reports, hospital letter, and photo. GCC passports are typically approved faster (2-4 days vs 3-5 days) due to strong diplomatic relations between India and GCC countries.',
    },
    {
      question:
        locale === 'ar'
          ? 'ما هي الأسباب الرئيسية لرفض التأشيرة وكيف يمكنني تجنبها؟'
          : 'What are the main reasons for visa rejection and how can I avoid them?',
      answer:
        locale === 'ar'
          ? 'أسباب الرفض الشائعة: (1) صلاحية جواز السفر أقل من 6 أشهر (2) صورة جواز سفر ضعيفة / ضبابية (3) تقارير طبية غير كاملة (4) خطاب المستشفى مفقود (5) عدم تطابق الاسم عبر الوثائق (6) تجاوز الإقامة السابقة في الهند. نمنع كل هذه من خلال فحص الوثائق بدقة قبل التقديم. مع خدمتنا، معدل الرفض صفر بشكل أساسي.'
          : 'Common rejection reasons: (1) Passport validity less than 6 months (2) Poor quality/blurry passport photo (3) Incomplete medical reports (4) Missing hospital letter (5) Name mismatch across documents (6) Previous overstay in India. We prevent all these by checking documents thoroughly before submission. With our service, rejection rate is essentially zero.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 px-4 py-20 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
            <CheckCircle2 className="h-4 w-4" />
            <span>{t.hero.badge}</span>
          </div>
          <h1 className="mb-6 whitespace-pre-line font-serif text-4xl font-bold md:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mx-auto mb-4 max-w-3xl text-xl text-primary-100">{t.hero.subtitle}</p>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-200">{t.hero.description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="shadow-xl">
              <Link href="/consultation">
                <CheckCircle2 className="mr-2 h-5 w-5" />
                {t.hero.buttons.visa}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary-700"
            >
              <Link href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t.hero.buttons.whatsapp}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Visa Types Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
              {t.visaTypes.title}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">{t.visaTypes.subtitle}</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {visaTypes.map((visa, index) => {
              const Icon = visa.icon;
              return (
                <Card
                  key={index}
                  className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl ${
                    visa.recommended ? 'border-primary-500 ring-4 ring-primary-100' : 'border-gray-200'
                  }`}
                >
                  {visa.recommended && (
                    <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                      {t.visaTypes.recommended}
                    </div>
                  )}
                  <CardHeader>
                    <div
                      className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${visa.color} shadow-lg`}
                    >
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-center text-xl">{visa.title}</CardTitle>
                    <CardDescription className="text-center">
                      <div className="mt-2 text-2xl font-bold text-gray-900">{visa.cost}</div>
                      <div className="mt-1 text-sm">
                        {locale === 'ar' ? 'المعالجة: ' : 'Processing: '}
                        {visa.time}
                      </div>
                      <div className="mt-1 text-xs">
                        {locale === 'ar' ? 'صالح: ' : 'Valid: '}
                        {visa.validity}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {visa.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-gradient-to-br from-gray-50 to-white px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">{t.process.title}</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">{t.process.subtitle}</p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="border-2 border-primary-100 transition-all hover:shadow-xl">
                  <CardHeader>
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-xl font-bold text-white">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{step.title}</CardTitle>
                        <div className="mt-1 text-xs text-gray-500">
                          <Clock className="mr-1 inline h-3 w-3" />
                          {step.timeline}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">{t.documents.title}</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">{t.documents.subtitle}</p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {requiredDocuments.map((doc, index) => {
              const Icon = doc.icon;
              return (
                <Card
                  key={index}
                  className="border-2 transition-all hover:border-primary-300 hover:shadow-lg"
                >
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary-100 to-primary-200">
                      <Icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-bold text-gray-900">{doc.title}</h3>
                      <p className="text-sm text-gray-600">{doc.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">{t.whyUs.title}</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">{t.whyUs.subtitle}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-white bg-white/80 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gray-50 to-gray-100">
                      <Icon className={`h-8 w-8 ${item.color}`} />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">{t.faqs.title}</h2>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-2 border-gray-100">
                <CardHeader>
                  <CardTitle className="flex items-start gap-3 text-lg">
                    <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary-600" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 px-4 py-20 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative mx-auto text-center">
          <Plane className="mx-auto mb-6 h-16 w-16 text-primary-200" />
          <h2 className="mb-4 font-serif text-4xl font-bold">{t.cta.title}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">{t.cta.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="shadow-xl">
              <Link href="/consultation">
                <CheckCircle2 className="mr-2 h-5 w-5" />
                {t.cta.buttons.start}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary-700"
            >
              <Link href="tel:+971501234567">
                <Phone className="mr-2 h-5 w-5" />
                {t.cta.buttons.call}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary-700"
            >
              <Link href="mailto:info@shifaalhind.com">
                <Mail className="mr-2 h-5 w-5" />
                {t.cta.buttons.email}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

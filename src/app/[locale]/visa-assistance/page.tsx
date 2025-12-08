import type { Metadata } from 'next';
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

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Medical Visa Assistance for India - Fast e-Visa in 3-5 Days | Shifa Al Hind',
  description: 'Complete medical visa assistance for India. E-visa in 3-5 days, visa on arrival at 6 airports. Free support for UAE, Saudi, Qatar, Oman, Kuwait, Bahrain patients.',
  keywords: [
    'medical visa india',
    'india medical visa assistance',
    'e-medical visa india',
    'medical visa on arrival india',
    'medical attendant visa',
    'india visa GCC',
    'التأشيرة الطبية للهند',
    'تأشيرة العلاج في الهند',
    'فيزا طبية الهند',
    'مساعدة التأشيرة الطبية',
  ],
  openGraph: {
    title: 'Medical Visa Assistance for India - Fast e-Visa in 3-5 Days',
    description: 'Free medical visa assistance. E-visa in 3-5 days, visa on arrival at 6 airports. Native Arabic support for GCC patients.',
    type: 'website',
  },
};

export default function VisaAssistancePage() {
  const visaTypes = [
    {
      icon: Globe,
      title: 'e-Medical Visa (Online)',
      titleAr: 'التأشيرة الطبية الإلكترونية',
      time: '3-5 Days',
      timeAr: '3-5 أيام',
      cost: '$80 USD',
      validity: '60 days (triple entry)',
      validityAr: '60 يومًا (دخول ثلاثي)',
      features: [
        'Apply 100% online',
        'No embassy visit required',
        'Approved in 3-5 business days',
        'Valid for 60 days',
        'Triple entry allowed',
        'Can extend up to 1 year',
      ],
      featuresAr: [
        'التقديم 100٪ عبر الإنترنت',
        'لا حاجة لزيارة السفارة',
        'تتم الموافقة في 3-5 أيام عمل',
        'صالحة لمدة 60 يومًا',
        'دخول ثلاثي مسموح',
        'يمكن التمديد حتى سنة واحدة',
      ],
      color: 'from-blue-500 to-blue-600',
      recommended: true,
    },
    {
      icon: Plane,
      title: 'Medical Visa on Arrival',
      titleAr: 'التأشيرة الطبية عند الوصول',
      time: 'Instant (at airport)',
      timeAr: 'فوري (في المطار)',
      cost: '$80 USD',
      validity: '60 days (double entry)',
      validityAr: '60 يومًا (دخول مزدوج)',
      features: [
        'Instant approval at airport',
        'Available at 6 major airports',
        'Mumbai, Delhi, Bangalore, Chennai, Kolkata, Hyderabad',
        'No prior application needed',
        'Must have medical documents',
        'Valid for 60 days',
      ],
      featuresAr: [
        'موافقة فورية في المطار',
        'متاح في 6 مطارات رئيسية',
        'مومباي ودلهي وبنغالور وتشيناي وكولكاتا وحيدر أباد',
        'لا حاجة لطلب مسبق',
        'يجب أن يكون لديك وثائق طبية',
        'صالحة لمدة 60 يومًا',
      ],
      color: 'from-orange-500 to-orange-600',
      recommended: false,
    },
    {
      icon: Users,
      title: 'Medical Attendant Visa',
      titleAr: 'تأشيرة المرافق الطبي',
      time: '3-5 Days',
      timeAr: '3-5 أيام',
      cost: '$80 USD',
      validity: '60 days (must match patient)',
      validityAr: '60 يومًا (يجب أن تتطابق مع المريض)',
      features: [
        'For family/companions',
        'Up to 2 attendants per patient',
        'Same validity as medical visa',
        'Can extend with patient',
        'Must apply together',
        'Covers spouse, children, parents',
      ],
      featuresAr: [
        'للعائلة / المرافقين',
        'ما يصل إلى 2 مرافقين لكل مريض',
        'نفس صلاحية التأشيرة الطبية',
        'يمكن التمديد مع المريض',
        'يجب التقديم معًا',
        'يشمل الزوج والأطفال والوالدين',
      ],
      color: 'from-green-500 to-green-600',
      recommended: false,
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Share Medical Documents',
      titleAr: 'مشاركة الوثائق الطبية',
      description: 'Send us your passport copy, medical reports, and hospital letter via WhatsApp or email.',
      descriptionAr: 'أرسل لنا نسخة من جواز السفر والتقارير الطبية وخطاب المستشفى عبر واتساب أو البريد الإلكتروني.',
      icon: FileText,
      timeline: '15 minutes',
      timelineAr: '15 دقيقة',
    },
    {
      step: '2',
      title: 'We Prepare Application',
      titleAr: 'نحن نعد الطلب',
      description: 'Our visa specialists fill out all forms, upload documents, and ensure everything is correct.',
      descriptionAr: 'يقوم متخصصو التأشيرات لدينا بملء جميع النماذج وتحميل المستندات والتأكد من صحة كل شيء.',
      icon: Shield,
      timeline: '2-3 hours',
      timelineAr: '2-3 ساعات',
    },
    {
      step: '3',
      title: 'Government Processing',
      titleAr: 'المعالجة الحكومية',
      description: 'Indian government reviews and approves your e-visa application. We track status daily.',
      descriptionAr: 'تراجع الحكومة الهندية طلب التأشيرة الإلكترونية وتوافق عليه. نتابع الحالة يوميًا.',
      icon: Clock,
      timeline: '3-5 business days',
      timelineAr: '3-5 أيام عمل',
    },
    {
      step: '4',
      title: 'Receive e-Visa',
      titleAr: 'استلام التأشيرة الإلكترونية',
      description: 'e-Visa emailed to you. Print copy and bring to airport. Valid for 60 days with triple entry.',
      descriptionAr: 'يتم إرسال التأشيرة الإلكترونية عبر البريد الإلكتروني. اطبع نسخة وأحضرها إلى المطار. صالحة لمدة 60 يومًا مع دخول ثلاثي.',
      icon: CheckCircle2,
      timeline: 'Instant email',
      timelineAr: 'بريد إلكتروني فوري',
    },
  ];

  const requiredDocuments = [
    {
      title: 'Passport Copy',
      titleAr: 'نسخة من جواز السفر',
      description: 'Must be valid for at least 6 months from date of arrival',
      descriptionAr: 'يجب أن يكون صالحًا لمدة 6 أشهر على الأقل من تاريخ الوصول',
      icon: FileText,
    },
    {
      title: 'Hospital Letter',
      titleAr: 'خطاب المستشفى',
      description: 'Invitation letter from Indian hospital (we provide this)',
      descriptionAr: 'خطاب دعوة من مستشفى هندي (نحن نوفر هذا)',
      icon: Award,
    },
    {
      title: 'Medical Reports',
      titleAr: 'التقارير الطبية',
      description: 'Recent medical reports, scans, or diagnosis',
      descriptionAr: 'تقارير طبية حديثة أو فحوصات أو تشخيص',
      icon: FileText,
    },
    {
      title: 'Passport Photo',
      titleAr: 'صورة جواز السفر',
      description: '2x2 inch white background photo (recent)',
      descriptionAr: 'صورة 2×2 بوصة خلفية بيضاء (حديثة)',
      icon: Users,
    },
  ];

  const whyChooseUs = [
    {
      title: '100% Success Rate',
      titleAr: '100٪ معدل النجاح',
      description: 'Over 10,000 medical visas approved since 2013. Zero rejections when documents are complete.',
      descriptionAr: 'أكثر من 10000 تأشيرة طبية تمت الموافقة عليها منذ عام 2013. لا يوجد رفض عند اكتمال الوثائق.',
      icon: Star,
      color: 'text-yellow-600',
    },
    {
      title: 'Free Service',
      titleAr: 'خدمة مجانية',
      description: 'We handle all visa paperwork at no charge. You only pay government fees ($80).',
      descriptionAr: 'نتولى جميع الأوراق المتعلقة بالتأشيرة مجانًا. أنت تدفع فقط رسوم الحكومة (80 دولارًا).',
      icon: CheckCircle2,
      color: 'text-green-600',
    },
    {
      title: 'Native Arabic Support',
      titleAr: 'دعم عربي أصلي',
      description: 'Our visa team includes native Arabic speakers who lived in Dubai, Riyadh, and Doha.',
      descriptionAr: 'يضم فريق التأشيرات لدينا متحدثين أصليين باللغة العربية الذين عاشوا في دبي والرياض والدوحة.',
      icon: MessageCircle,
      color: 'text-blue-600',
    },
    {
      title: 'Fast Processing',
      titleAr: 'معالجة سريعة',
      description: '3-5 days for e-visa vs 7-10 days through embassy. We track status daily.',
      descriptionAr: '3-5 أيام للتأشيرة الإلكترونية مقابل 7-10 أيام عبر السفارة. نتابع الحالة يوميًا.',
      icon: Clock,
      color: 'text-orange-600',
    },
    {
      title: 'Visa Extension Help',
      titleAr: 'مساعدة في تمديد التأشيرة',
      description: 'Can extend up to 1 year through FRRO office. We handle all paperwork.',
      descriptionAr: 'يمكن التمديد حتى سنة واحدة من خلال مكتب FRRO. نتولى جميع الأوراق.',
      icon: Calendar,
      color: 'text-purple-600',
    },
    {
      title: 'Complete Guidance',
      titleAr: 'إرشادات كاملة',
      description: 'Step-by-step help from application to arrival. 24/7 WhatsApp support.',
      descriptionAr: 'مساعدة خطوة بخطوة من التطبيق إلى الوصول. دعم واتساب 24/7.',
      icon: Users,
      color: 'text-indigo-600',
    },
  ];

  const faqs = [
    {
      question: 'Do I need to visit the Indian embassy?',
      questionAr: 'هل أحتاج إلى زيارة السفارة الهندية؟',
      answer: 'No! With e-Medical Visa, everything is done 100% online. You never need to visit an embassy or consulate.',
      answerAr: 'لا! مع التأشيرة الطبية الإلكترونية، كل شيء يتم 100٪ عبر الإنترنت. لا تحتاج أبدًا إلى زيارة السفارة أو القنصلية.',
    },
    {
      question: 'How long does the visa process take?',
      questionAr: 'كم من الوقت تستغرق عملية التأشيرة؟',
      answer: 'E-visa takes 3-5 business days. Visa on arrival is instant at the airport. We recommend e-visa for peace of mind.',
      answerAr: 'تستغرق التأشيرة الإلكترونية 3-5 أيام عمل. التأشيرة عند الوصول فورية في المطار. نوصي بالتأشيرة الإلكترونية لراحة البال.',
    },
    {
      question: 'Can my family come with me?',
      questionAr: 'هل يمكن لعائلتي القدوم معي؟',
      answer: 'Yes! Up to 2 family members can apply for Medical Attendant Visa. Spouse, children, or parents are eligible.',
      answerAr: 'نعم! يمكن لما يصل إلى 2 من أفراد الأسرة التقدم بطلب للحصول على تأشيرة المرافق الطبي. الزوج والأطفال أو الوالدين مؤهلون.',
    },
    {
      question: 'What if I need to stay longer than 60 days?',
      questionAr: 'ماذا لو احتجت إلى البقاء أكثر من 60 يومًا؟',
      answer: 'You can extend the medical visa up to 1 year through the FRRO (Foreigners Regional Registration Office). We handle all extension paperwork for free.',
      answerAr: 'يمكنك تمديد التأشيرة الطبية حتى سنة واحدة من خلال مكتب FRRO (مكتب التسجيل الإقليمي للأجانب). نتولى جميع الأوراق الخاصة بالتمديد مجانًا.',
    },
    {
      question: 'What is the visa cost?',
      questionAr: 'ما هي تكلفة التأشيرة؟',
      answer: 'Government fee is $80 USD per person. Our service is completely free. You only pay the government fee directly.',
      answerAr: 'رسوم الحكومة 80 دولارًا أمريكيًا لكل شخص. خدمتنا مجانية تمامًا. أنت تدفع فقط رسوم الحكومة مباشرة.',
    },
    {
      question: 'Can the visa be rejected?',
      questionAr: 'هل يمكن رفض التأشيرة؟',
      answer: 'Very rare when documents are complete. We have 100% approval rate with proper documentation. We check everything before submission to avoid rejection.',
      answerAr: 'نادر جدًا عند اكتمال الوثائق. لدينا معدل موافقة 100٪ مع التوثيق المناسب. نتحقق من كل شيء قبل التقديم لتجنب الرفض.',
    },
    {
      question: 'Are there specific requirements for UAE, Saudi Arabia, Qatar, and other GCC countries?',
      questionAr: 'هل هناك متطلبات محددة لدولة الإمارات والسعودية وقطر ودول الخليج الأخرى؟',
      answer: 'All GCC citizens (UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain) follow the same process. Requirements are identical: passport, medical reports, hospital letter, and photo. GCC passports are typically approved faster (2-4 days vs 3-5 days) due to strong diplomatic relations between India and GCC countries.',
      answerAr: 'جميع مواطني دول مجلس التعاون الخليجي (الإمارات، السعودية، قطر، عمان، الكويت، البحرين) يتبعون نفس العملية. المتطلبات متطابقة: جواز السفر، التقارير الطبية، خطاب المستشفى، والصورة. عادة ما تتم الموافقة على جوازات السفر الخليجية بشكل أسرع (2-4 أيام مقابل 3-5 أيام) بسبب العلاقات الدبلوماسية القوية بين الهند ودول الخليج.',
    },
    {
      question: 'What are the main reasons for visa rejection and how can I avoid them?',
      questionAr: 'ما هي الأسباب الرئيسية لرفض التأشيرة وكيف يمكنني تجنبها؟',
      answer: 'Common rejection reasons: (1) Passport validity less than 6 months (2) Poor quality/blurry passport photo (3) Incomplete medical reports (4) Missing hospital letter (5) Name mismatch across documents (6) Previous overstay in India. We prevent all these by checking documents thoroughly before submission. With our service, rejection rate is essentially zero.',
      answerAr: 'أسباب الرفض الشائعة: (1) صلاحية جواز السفر أقل من 6 أشهر (2) صورة جواز سفر ضعيفة / ضبابية (3) تقارير طبية غير كاملة (4) خطاب المستشفى مفقود (5) عدم تطابق الاسم عبر الوثائق (6) تجاوز الإقامة السابقة في الهند. نمنع كل هذه من خلال فحص الوثائق بدقة قبل التقديم. مع خدمتنا، معدل الرفض صفر بشكل أساسي.',
    },
    {
      question: 'Can I apply for visa before booking treatment/hospital?',
      questionAr: 'هل يمكنني التقدم بطلب للحصول على تأشيرة قبل حجز العلاج / المستشفى؟',
      answer: 'No, you need a hospital invitation letter to apply for medical visa. Process: (1) Contact us with your medical condition (2) We connect you with right hospital/doctor (3) Doctor reviews reports and provides treatment plan (4) Hospital issues invitation letter (5) Then we apply for visa. Total timeline: 5-7 days from first contact to visa approval.',
      answerAr: 'لا، تحتاج إلى خطاب دعوة من المستشفى للتقدم للحصول على تأشيرة طبية. العملية: (1) اتصل بنا مع حالتك الطبية (2) نقوم بتوصيلك بالمستشفى / الطبيب المناسب (3) يراجع الطبيب التقارير ويقدم خطة العلاج (4) يصدر المستشفى خطاب دعوة (5) ثم نقدم طلب التأشيرة. الجدول الزمني الإجمالي: 5-7 أيام من الاتصال الأول إلى موافقة التأشيرة.',
    },
    {
      question: 'What happens at the Indian airport immigration with medical visa?',
      questionAr: 'ماذا يحدث في الهجرة بالمطار الهندي مع التأشيرة الطبية؟',
      answer: 'Very smooth process: (1) Show printed e-visa copy and passport (2) Immigration officer stamps passport (takes 2-5 minutes) (3) Collect baggage (4) Exit through green channel (nothing to declare). Keep hospital letter and medical reports in hand baggage in case immigration asks (rare). No additional forms needed. Whole process: 15-30 minutes maximum.',
      answerAr: 'عملية سلسة للغاية: (1) أظهر نسخة مطبوعة من التأشيرة الإلكترونية وجواز السفر (2) يختم موظف الهجرة جواز السفر (يستغرق 2-5 دقائق) (3) جمع الأمتعة (4) الخروج عبر القناة الخضراء (لا شيء للإعلان عنه). احتفظ بخطاب المستشفى والتقارير الطبية في الأمتعة اليدوية في حالة سأل الهجرة (نادر). لا حاجة لنماذج إضافية. العملية بأكملها: 15-30 دقيقة كحد أقصى.',
    },
    {
      question: 'How does the visa extension process work?',
      questionAr: 'كيف تعمل عملية تمديد التأشيرة؟',
      answer: 'Extension process through FRRO office: (1) Apply 1-2 weeks before current visa expires (2) Submit: passport, current visa, medical reports, hospital letter stating need for extension (3) FRRO reviews and approves (2-7 days) (4) Can extend up to 1 year total. Extension fee: ₹200 ($2.50) per month. We handle entire process - you just provide updated medical reports. Most extensions approved in 3-5 days.',
      answerAr: 'عملية التمديد من خلال مكتب FRRO: (1) التقدم قبل 1-2 أسبوع من انتهاء التأشيرة الحالية (2) تقديم: جواز السفر، التأشيرة الحالية، التقارير الطبية، خطاب المستشفى يفيد بالحاجة إلى التمديد (3) يراجع FRRO ويوافق (2-7 أيام) (4) يمكن التمديد حتى سنة واحدة إجمالاً. رسوم التمديد: 200 روبية (2.50 دولار) شهريًا. نتولى العملية بأكملها - أنت تقدم فقط تقارير طبية محدثة. تتم الموافقة على معظم التمديدات في 3-5 أيام.',
    },
    {
      question: 'What if my passport expires while I&apos;m in India for treatment?',
      questionAr: 'ماذا لو انتهت صلاحية جواز سفري بينما أنا في الهند للعلاج؟',
      answer: 'If passport expires during your stay: (1) Immediately contact your country&apos;s embassy/consulate in India (UAE embassy in Delhi, Saudi embassy, etc.) (2) Apply for emergency travel document or passport renewal (3-7 days typically) (3) Once new passport issued, update with FRRO (1-2 days) (4) Medical visa transferred to new passport. We coordinate with embassy and FRRO. This happens occasionally with long treatments (cancer, transplants).',
      answerAr: 'إذا انتهت صلاحية جواز السفر أثناء إقامتك: (1) اتصل فورًا بسفارة / قنصلية بلدك في الهند (سفارة الإمارات في دلهي، السفارة السعودية، إلخ) (2) تقدم بطلب للحصول على وثيقة سفر طارئة أو تجديد جواز السفر (عادة 3-7 أيام) (3) بمجرد إصدار جواز السفر الجديد، قم بالتحديث مع FRRO (1-2 يوم) (4) يتم نقل التأشيرة الطبية إلى جواز السفر الجديد. نحن ننسق مع السفارة و FRRO. يحدث هذا أحيانًا مع العلاجات الطويلة (السرطان، الزرع).',
    },
    {
      question: 'Can I use multiple entries on medical visa? How does it work?',
      questionAr: 'هل يمكنني استخدام إدخالات متعددة على التأشيرة الطبية؟ كيف يعمل؟',
      answer: 'E-Medical Visa allows triple entry (3 separate trips) within 60 days. Example: (1) Trip 1: Arrive for consultation, tests (5 days) → Return home → (2) Trip 2: Return for surgery (10 days) → Go home for recovery → (3) Trip 3: Return for follow-up (3 days). Useful for IVF (multiple cycles), cancer treatment (chemo sessions), or gradual procedures. Each entry counted when you exit India.',
      answerAr: 'تسمح التأشيرة الطبية الإلكترونية بالدخول الثلاثي (3 رحلات منفصلة) خلال 60 يومًا. مثال: (1) الرحلة 1: الوصول للاستشارة والاختبارات (5 أيام) ← العودة إلى المنزل ← (2) الرحلة 2: العودة للجراحة (10 أيام) ← العودة إلى المنزل للتعافي ← (3) الرحلة 3: العودة للمتابعة (3 أيام). مفيد لعلاج IVF (دورات متعددة)، علاج السرطان (جلسات الكيميائي)، أو الإجراءات التدريجية. يتم احتساب كل دخول عند مغادرة الهند.',
    },
    {
      question: 'Do I need transit visa if flying via another country to India?',
      questionAr: 'هل أحتاج إلى تأشيرة عبور إذا كنت أسافر عبر بلد آخر إلى الهند؟',
      answer: 'Depends on layover country and duration: Dubai/Abu Dhabi layover (Emirates/Etihad): No transit visa needed for any duration if not leaving airport. Doha layover (Qatar Airways): No transit visa. Istanbul layover (Turkish Airlines): No transit visa if under 24 hours. Bangkok/Singapore layover: No transit visa if under 24 hours. If layover over 24 hours and want to leave airport for hotel: May need transit visa - check specific country rules.',
      answerAr: 'يعتمد على بلد التوقف والمدة: توقف دبي / أبوظبي (الإمارات / الاتحاد): لا حاجة لتأشيرة عبور لأي مدة إذا لم تغادر المطار. توقف الدوحة (الخطوط الجوية القطرية): لا تأشيرة عبور. توقف اسطنبول (الخطوط الجوية التركية): لا تأشيرة عبور إذا كانت أقل من 24 ساعة. توقف بانكوك / سنغافورة: لا تأشيرة عبور إذا كانت أقل من 24 ساعة. إذا كان التوقف أكثر من 24 ساعة وتريد مغادرة المطار للفندق: قد تحتاج إلى تأشيرة عبور - تحقق من قواعد البلد المحددة.',
    },
    {
      question: 'Is COVID vaccination required for medical visa to India?',
      questionAr: 'هل التطعيم ضد كوفيد مطلوب للحصول على تأشيرة طبية للهند؟',
      answer: 'As of 2024: No COVID vaccination required for entry to India. No COVID test required. No quarantine required. These rules changed in 2023. However, we recommend vaccination for your own safety (hospitals have high standards but you&apos;ll be around sick patients). If you have COVID symptoms at airport: May be asked to test or isolate briefly.',
      answerAr: 'اعتبارًا من عام 2024: لا يلزم التطعيم ضد كوفيد للدخول إلى الهند. لا يلزم اختبار كوفيد. لا يلزم الحجر الصحي. تغيرت هذه القواعد في عام 2023. ومع ذلك، نوصي بالتطعيم لسلامتك الخاصة (المستشفيات لديها معايير عالية ولكنك ستكون حول المرضى المرضى). إذا كان لديك أعراض كوفيد في المطار: قد يُطلب منك الاختبار أو العزل لفترة وجيزة.',
    },
    {
      question: 'Can I change hospitals during my stay on medical visa?',
      questionAr: 'هل يمكنني تغيير المستشفيات أثناء إقامتي بتأشيرة طبية؟',
      answer: 'Yes, but requires updating with FRRO: (1) Get discharge summary from first hospital (2) Get new invitation letter from second hospital (3) Submit both to FRRO with explanation (2-5 days processing) (4) FRRO updates records. Valid reasons: Second opinion needed, better specialist found, treatment complications, relocation to different city. We handle FRRO paperwork. Common when treatment plan changes or complications arise.',
      answerAr: 'نعم، ولكن يتطلب التحديث مع FRRO: (1) احصل على ملخص التفريغ من المستشفى الأول (2) احصل على خطاب دعوة جديد من المستشفى الثاني (3) قدم كليهما إلى FRRO مع الشرح (2-5 أيام معالجة) (4) يقوم FRRO بتحديث السجلات. أسباب صالحة: الحاجة إلى رأي ثاني، تم العثور على متخصص أفضل، مضاعفات العلاج، الانتقال إلى مدينة مختلفة. نتولى أوراق FRRO. شائع عندما تتغير خطة العلاج أو تنشأ مضاعفات.',
    },
    {
      question: 'What if my treatment takes longer than expected and visa is expiring?',
      questionAr: 'ماذا لو استغرق علاجي وقتًا أطول من المتوقع وانتهت صلاحية التأشيرة؟',
      answer: 'Don&apos;t worry - very common situation: (1) Doctor writes letter explaining medical need for extension (complications, additional surgery needed, recovery slower than expected) (2) We submit extension request to FRRO 1-2 weeks before expiry (3) FRRO almost always approves medical extensions (2-5 days) (4) You continue treatment uninterrupted. Emergency same-day extension possible if urgent. Never overstay without extension - penalties are severe.',
      answerAr: 'لا تقلق - حالة شائعة جدًا: (1) يكتب الطبيب خطابًا يشرح الحاجة الطبية للتمديد (المضاعفات، الحاجة إلى جراحة إضافية، التعافي أبطأ من المتوقع) (2) نقدم طلب التمديد إلى FRRO قبل 1-2 أسبوع من انتهاء الصلاحية (3) يوافق FRRO تقريبًا دائمًا على التمديدات الطبية (2-5 أيام) (4) تواصل العلاج دون انقطاع. التمديد الطارئ في نفس اليوم ممكن إذا كان عاجلاً. لا تتجاوز الإقامة أبدًا بدون تمديد - العقوبات شديدة.',
    },
    {
      question: 'Is there expedited/emergency visa processing available?',
      questionAr: 'هل هناك معالجة تأشيرة سريعة / طارئة متاحة؟',
      answer: 'For genuine medical emergencies (heart attack, stroke, severe accident, cancer emergency): (1) We mark application as "Emergency Medical" (2) Processing accelerated to 24-48 hours (vs normal 3-5 days) (3) Requires: Doctor&apos;s emergency certificate, hospital admission letter stating urgency, medical reports showing emergency (4) Government fee same ($80). Success rate: 95% approval within 48 hours. Alternative: Fly to Mumbai/Delhi and get visa on arrival (instant).',
      answerAr: 'للحالات الطبية الطارئة الحقيقية (نوبة قلبية، سكتة دماغية، حادث شديد، حالة طوارئ سرطانية): (1) نضع علامة على الطلب على أنه "طوارئ طبية" (2) تسريع المعالجة إلى 24-48 ساعة (مقابل 3-5 أيام عادي) (3) يتطلب: شهادة طوارئ الطبيب، خطاب قبول المستشفى يفيد بالاستعجال، تقارير طبية تظهر الطوارئ (4) رسوم الحكومة نفسها (80 دولارًا). معدل النجاح: 95٪ موافقة خلال 48 ساعة. البديل: الطيران إلى مومباي / دلهي والحصول على تأشيرة عند الوصول (فوري).',
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
            <span>10,000+ Visas Approved Since 2013 • 100% Success Rate</span>
          </div>
          <h1 className="mb-6 font-serif text-4xl font-bold md:text-6xl">
            Free Medical Visa Assistance<br />for India
          </h1>
          <p className="mx-auto mb-4 max-w-3xl text-xl text-primary-100">
            Get your e-visa in 3-5 days • No embassy visit required • 100% online
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-200">
            Complete visa support in Arabic for UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain patients
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="shadow-xl">
              <Link href="/consultation">
                <CheckCircle2 className="mr-2 h-5 w-5" />
                Get Visa Help Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary-700">
              <Link href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Support
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
              3 Types of Medical Visas for India
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Choose the best option for your situation. We help with all types.
            </p>
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
                      ⭐ Recommended
                    </div>
                  )}
                  <CardHeader>
                    <div className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${visa.color} shadow-lg`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-center text-xl">{visa.title}</CardTitle>
                    <CardDescription className="text-center">
                      <div className="mt-2 text-2xl font-bold text-gray-900">{visa.cost}</div>
                      <div className="mt-1 text-sm">Processing: {visa.time}</div>
                      <div className="mt-1 text-xs">Valid: {visa.validity}</div>
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
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
              Simple 4-Step Process
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              We handle everything from document preparation to visa approval
            </p>
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
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
              Required Documents
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Just 4 simple documents. We help prepare everything else.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {requiredDocuments.map((doc, index) => {
              const Icon = doc.icon;
              return (
                <Card key={index} className="border-2 transition-all hover:border-primary-300 hover:shadow-lg">
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
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
              Why Choose Our Visa Service?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              10,000+ visas approved since 2013 with 100% success rate
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border-2 border-white bg-white/80 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl">
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
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
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
          <h2 className="mb-4 font-serif text-4xl font-bold">
            Ready to Get Your Medical Visa?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
            Free visa assistance • E-visa in 3-5 days • 100% success rate • Native Arabic support
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="shadow-xl">
              <Link href="/consultation">
                <CheckCircle2 className="mr-2 h-5 w-5" />
                Start Visa Process
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary-700">
              <Link href="tel:+971501234567">
                <Phone className="mr-2 h-5 w-5" />
                Call +971 50 123 4567
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary-700">
              <Link href="mailto:info@shifaalhind.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

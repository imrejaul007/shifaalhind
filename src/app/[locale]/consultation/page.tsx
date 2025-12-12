export const dynamic = 'force-dynamic';

import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return generateSEOMetadata({
    title_en: 'Free Medical Consultation - Expert Doctors from India | Shifa AlHind',
    title_ar: 'استشارة طبية مجانية - أطباء خبراء من الهند | شفاء الهند',
    description_en: 'Get FREE medical consultation from India\'s top board-certified specialists. Expert advice, personalized treatment plans, cost estimates. Available 24/7. No hidden fees.',
    description_ar: 'احصل على استشارة طبية مجانية من كبار الأخصائيين المعتمدين في الهند. نصائح خبراء، خطط علاج مخصصة، تقديرات التكلفة. متاح على مدار الساعة. بدون رسوم خفية.',
    locale,
    path: '/consultation',
  });
}

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CheckCircle,
  Clock,
  Shield,
  Video,
  FileText,
  Phone,
  Heart,
  Bone,
  Activity,
  Baby,
  Eye,
  Brain,
  Stethoscope,
  Award,
  Globe,
  Users,
  TrendingUp,
} from 'lucide-react';

export default async function ConsultationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const content = {
    en: {
      hero: {
        title: 'Free Medical Consultation',
        subtitle: 'Get expert medical advice from India\'s top doctors - completely free with no obligations',
        cta: 'Request Free Consultation'
      },
      benefitsSection: {
        title: 'Why Choose Our Free Consultation?',
        benefits: [
          {
            title: '100% Free',
            description: 'No consultation fees or hidden charges'
          },
          {
            title: 'Confidential',
            description: 'Your medical information is completely secure'
          },
          {
            title: 'Multiple Options',
            description: 'Phone, video, or in-person consultation'
          },
          {
            title: 'Expert Review',
            description: 'Board-certified specialists review your case'
          },
          {
            title: 'Quick Response',
            description: 'Get answers within 24 hours'
          },
          {
            title: '24/7 Support',
            description: 'Round-the-clock assistance available'
          }
        ]
      },
      howItWorksSection: {
        title: 'How It Works',
        steps: [
          {
            step: '1',
            title: 'Submit Your Details',
            description: 'Fill out our simple consultation form with your medical concerns'
          },
          {
            step: '2',
            title: 'Doctor Review',
            description: 'Our specialists review your case and medical history'
          },
          {
            step: '3',
            title: 'Get Recommendations',
            description: 'Receive personalized treatment options and cost estimates'
          },
          {
            step: '4',
            title: 'Plan Your Journey',
            description: 'We help arrange travel, accommodation, and appointments'
          }
        ]
      },
      whatYouReceive: {
        title: 'What You\'ll Receive',
        items: [
          'Detailed medical evaluation by board-certified specialists',
          'Personalized treatment plan tailored to your condition',
          'Transparent cost breakdown with no hidden fees',
          'Hospital and doctor recommendations based on your needs',
          'Estimated timeline for treatment and recovery',
          'Assistance with travel and accommodation arrangements',
          'Dedicated case manager for ongoing support',
          'Second opinion service if needed'
        ]
      },
      consultationMethods: {
        title: 'Choose Your Consultation Method',
        methods: [
          {
            title: 'Phone Consultation',
            description: 'Speak directly with our medical coordinators',
            action: 'Call +971 50 123 4567'
          },
          {
            title: 'Video Consultation',
            description: 'Face-to-face consultation with doctors',
            action: 'Schedule Video Call'
          },
          {
            title: 'Online Form',
            description: 'Submit your medical details and documents',
            action: 'Fill Online Form'
          }
        ]
      },
      statistics: [
        {
          number: '500,000+',
          label: 'Patients Helped Annually'
        },
        {
          number: '40+',
          label: 'JCI-Accredited Hospitals'
        },
        {
          number: '1,000+',
          label: 'Specialist Doctors'
        },
        {
          number: '150+',
          label: 'Countries Served'
        }
      ],
      specialtyAreas: {
        title: 'Specialty Consultations Available',
        subtitle: 'Get expert consultation from board-certified specialists across all major medical fields',
        specialties: [
          {
            title: 'Cardiac Care',
            specialties: ['Heart Surgery', 'Angioplasty', 'Valve Replacement']
          },
          {
            title: 'Orthopedics',
            specialties: ['Joint Replacement', 'Spine Surgery', 'Sports Medicine']
          },
          {
            title: 'Oncology',
            specialties: ['Cancer Treatment', 'Chemotherapy', 'Radiation Therapy']
          },
          {
            title: 'Fertility',
            specialties: ['IVF', 'PCOS Treatment', 'Egg Freezing']
          },
          {
            title: 'Ophthalmology',
            specialties: ['LASIK', 'Cataract Surgery', 'Retinal Care']
          },
          {
            title: 'Neurosurgery',
            specialties: ['Brain Surgery', 'Spine Surgery', 'Tumor Removal']
          },
          {
            title: 'General Surgery',
            specialties: ['Laparoscopic', 'Hernia Repair', 'Gallbladder']
          },
          {
            title: 'Transplants',
            specialties: ['Liver', 'Kidney', 'Bone Marrow']
          }
        ]
      },
      doctorQualifications: {
        title: 'World-Class Medical Expertise',
        subtitle: 'Our panel of doctors includes some of India\'s most renowned specialists',
        qualifications: [
          {
            title: 'International Training',
            description: 'Many doctors trained at Harvard, Mayo Clinic, Johns Hopkins, and other prestigious institutions'
          },
          {
            title: 'Board Certified',
            description: 'All specialists are board-certified with 15-30+ years of experience'
          },
          {
            title: 'Published Research',
            description: 'Doctors with published research papers and contributions to medical science'
          }
        ]
      },
      faqSection: {
        title: 'Frequently Asked Questions',
        faqs: [
          {
            question: 'Is the consultation really free?',
            answer: 'Yes, absolutely! There are no consultation fees, hidden charges, or obligations. We provide free consultations to help you understand your treatment options and make informed decisions.'
          },
          {
            question: 'How quickly will I get a response?',
            answer: 'Our medical coordinators respond within 1-2 hours. For detailed consultation with specialists, you\'ll receive a response within 24 hours including treatment recommendations and cost estimates.'
          },
          {
            question: 'Can I consult with specialists for my specific condition?',
            answer: 'Yes! We connect you with board-certified specialists based on your specific medical condition. Whether it\'s cardiac, orthopedic, oncology, or any other specialty, we have experts available.'
          },
          {
            question: 'What information should I prepare for the consultation?',
            answer: 'Please have your medical reports, diagnosis, previous treatment history, current medications, and any recent test results ready. The more information you provide, the more accurate our recommendations will be.'
          },
          {
            question: 'Do you help with travel and accommodation?',
            answer: 'Yes! We provide end-to-end support including medical visa assistance, flight booking, airport pickup, accommodation near the hospital, and a dedicated case manager throughout your journey.'
          },
          {
            question: 'Are the doctors qualified and experienced?',
            answer: 'All our doctors are board-certified specialists with 15-30+ years of experience. Many have trained at international institutions like Harvard, Mayo Clinic, and Johns Hopkins.'
          }
        ]
      },
      successStories: {
        title: 'Patient Success Stories',
        subtitle: 'Hear from patients who trusted us with their healthcare journey',
        stories: [
          {
            name: 'Ahmed Al-Rashid',
            country: '🇸🇦 Saudi Arabia',
            treatment: 'Heart Bypass Surgery',
            story: 'I was facing a 6-month wait in Saudi Arabia. Through Shifa AlHind, I had my surgery within 2 weeks at Apollo Hospital. The doctors were excellent, and I saved over $80,000. Forever grateful!'
          },
          {
            name: 'Sarah Mohammed',
            country: '🇦🇪 UAE',
            treatment: 'IVF Treatment',
            story: 'After 5 failed IVF cycles in Dubai, we were losing hope. The consultation was so detailed and reassuring. We succeeded on the first try in India! Our baby is now 6 months old.'
          },
          {
            name: 'Fatima Al-Mansoori',
            country: '🇴🇲 Oman',
            treatment: 'Knee Replacement',
            story: 'The free consultation gave me confidence to proceed. The orthopedic surgeon was world-class. I\'m now pain-free and saved $35,000 compared to local treatment.'
          }
        ]
      },
      ctaSection: {
        title: 'Ready to Get Started?',
        subtitle: 'Take the first step towards better health. Get your free consultation today!',
        cta1: 'Request Free Consultation',
        cta2: 'Call +971 50 123 4567',
        cta3: 'WhatsApp Us'
      }
    },
    ar: {
      hero: {
        title: 'استشارة طبية مجانية',
        subtitle: 'احصل على مشورة طبية من كبار أطباء الهند - مجاناً تماماً بدون التزامات',
        cta: 'طلب استشارة مجانية'
      },
      benefitsSection: {
        title: 'لماذا تختار استشارتنا المجانية؟',
        benefits: [
          {
            title: '100٪ مجاني',
            description: 'لا توجد رسوم استشارة أو رسوم خفية'
          },
          {
            title: 'سري',
            description: 'معلوماتك الطبية آمنة تماماً'
          },
          {
            title: 'خيارات متعددة',
            description: 'استشارة هاتفية أو فيديو أو شخصية'
          },
          {
            title: 'مراجعة الخبراء',
            description: 'يراجع الأخصائيون المعتمدون حالتك'
          },
          {
            title: 'استجابة سريعة',
            description: 'احصل على إجابات خلال 24 ساعة'
          },
          {
            title: 'دعم على مدار الساعة',
            description: 'مساعدة على مدار الساعة متاحة'
          }
        ]
      },
      howItWorksSection: {
        title: 'كيف يعمل',
        steps: [
          {
            step: '1',
            title: 'قدم تفاصيلك',
            description: 'املأ نموذج الاستشارة البسيط الخاص بنا مع مخاوفك الطبية'
          },
          {
            step: '2',
            title: 'مراجعة الطبيب',
            description: 'يراجع متخصصونا حالتك وتاريخك الطبي'
          },
          {
            step: '3',
            title: 'احصل على التوصيات',
            description: 'تلقي خيارات العلاج المخصصة وتقديرات التكلفة'
          },
          {
            step: '4',
            title: 'خطط لرحلتك',
            description: 'نساعدك في ترتيب السفر والإقامة والمواعيد'
          }
        ]
      },
      whatYouReceive: {
        title: 'ما ستحصل عليه',
        items: [
          'تقييم طبي مفصل من قبل أخصائيين معتمدين',
          'خطة علاج مخصصة لحالتك',
          'تفصيل شفاف للتكلفة بدون رسوم خفية',
          'توصيات المستشفيات والأطباء بناءً على احتياجاتك',
          'جدول زمني تقديري للعلاج والتعافي',
          'المساعدة في ترتيبات السفر والإقامة',
          'مدير حالة مخصص للدعم المستمر',
          'خدمة الرأي الثاني إذا لزم الأمر'
        ]
      },
      consultationMethods: {
        title: 'اختر طريقة الاستشارة الخاصة بك',
        methods: [
          {
            title: 'استشارة هاتفية',
            description: 'تحدث مباشرة مع منسقينا الطبيين',
            action: 'اتصل بـ +971 50 123 4567'
          },
          {
            title: 'استشارة فيديو',
            description: 'استشارة وجهاً لوجه مع الأطباء',
            action: 'جدولة مكالمة فيديو'
          },
          {
            title: 'نموذج عبر الإنترنت',
            description: 'أرسل تفاصيلك الطبية والمستندات',
            action: 'املأ النموذج عبر الإنترنت'
          }
        ]
      },
      statistics: [
        {
          number: '500,000+',
          label: 'مريض تمت مساعدته سنوياً'
        },
        {
          number: '40+',
          label: 'مستشفيات معتمدة من JCI'
        },
        {
          number: '1,000+',
          label: 'طبيب متخصص'
        },
        {
          number: '150+',
          label: 'دولة تم خدمتها'
        }
      ],
      specialtyAreas: {
        title: 'استشارات التخصص متاحة',
        subtitle: 'احصل على استشارة خبيرة من أخصائيين معتمدين في جميع المجالات الطبية الرئيسية',
        specialties: [
          {
            title: 'رعاية القلب',
            specialties: ['جراحة القلب', 'رأب الأوعية', 'استبدال الصمام']
          },
          {
            title: 'جراحة العظام',
            specialties: ['استبدال المفاصل', 'جراحة العمود الفقري', 'الطب الرياضي']
          },
          {
            title: 'الأورام',
            specialties: ['علاج السرطان', 'العلاج الكيميائي', 'العلاج الإشعاعي']
          },
          {
            title: 'الخصوبة',
            specialties: ['أطفال الأنابيب', 'علاج متلازمة تكيس المبايض', 'تجميد البويضات']
          },
          {
            title: 'طب العيون',
            specialties: ['الليزك', 'جراحة الساد', 'رعاية الشبكية']
          },
          {
            title: 'جراحة الأعصاب',
            specialties: ['جراحة الدماغ', 'جراحة العمود الفقري', 'إزالة الورم']
          },
          {
            title: 'الجراحة العامة',
            specialties: ['المنظار', 'إصلاح الفتق', 'المرارة']
          },
          {
            title: 'زراعة الأعضاء',
            specialties: ['الكبد', 'الكلى', 'نخاع العظام']
          }
        ]
      },
      doctorQualifications: {
        title: 'خبرة طبية عالمية المستوى',
        subtitle: 'تضم لجنة الأطباء لدينا بعضاً من أشهر المتخصصين في الهند',
        qualifications: [
          {
            title: 'تدريب دولي',
            description: 'العديد من الأطباء تدربوا في هارفارد، مايو كلينك، جونز هوبكنز، ومؤسسات مرموقة أخرى'
          },
          {
            title: 'معتمد من مجلس الإدارة',
            description: 'جميع المتخصصين معتمدون من مجلس الإدارة مع خبرة 15-30+ سنة'
          },
          {
            title: 'أبحاث منشورة',
            description: 'أطباء لديهم أوراق بحثية منشورة ومساهمات في العلوم الطبية'
          }
        ]
      },
      faqSection: {
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            question: 'هل الاستشارة مجانية حقاً؟',
            answer: 'نعم، بالتأكيد! لا توجد رسوم استشارة أو رسوم خفية أو التزامات. نقدم استشارات مجانية لمساعدتك على فهم خيارات العلاج الخاصة بك واتخاذ قرارات مستنيرة.'
          },
          {
            question: 'ما مدى سرعة الحصول على رد؟',
            answer: 'يستجيب منسقونا الطبيون خلال 1-2 ساعة. للحصول على استشارة مفصلة مع المتخصصين، ستتلقى رداً خلال 24 ساعة بما في ذلك توصيات العلاج وتقديرات التكلفة.'
          },
          {
            question: 'هل يمكنني الاستشارة مع متخصصين لحالتي المحددة؟',
            answer: 'نعم! نربطك بأخصائيين معتمدين بناءً على حالتك الطبية المحددة. سواء كان القلب أو العظام أو الأورام أو أي تخصص آخر، لدينا خبراء متاحون.'
          },
          {
            question: 'ما المعلومات التي يجب أن أعدها للاستشارة؟',
            answer: 'يرجى الحصول على تقاريرك الطبية والتشخيص وتاريخ العلاج السابق والأدوية الحالية وأي نتائج اختبار حديثة جاهزة. كلما قدمت معلومات أكثر، كانت توصياتنا أكثر دقة.'
          },
          {
            question: 'هل تساعدون في السفر والإقامة؟',
            answer: 'نعم! نقدم دعماً شاملاً بما في ذلك المساعدة في التأشيرة الطبية وحجز الرحلات والاستقبال في المطار والإقامة بالقرب من المستشفى ومدير حالة مخصص طوال رحلتك.'
          },
          {
            question: 'هل الأطباء مؤهلون وذوو خبرة؟',
            answer: 'جميع أطبائنا متخصصون معتمدون من مجلس الإدارة مع خبرة 15-30+ سنة. العديد منهم تدربوا في مؤسسات دولية مثل هارفارد ومايو كلينك وجونز هوبكنز.'
          }
        ]
      },
      successStories: {
        title: 'قصص نجاح المرضى',
        subtitle: 'استمع من المرضى الذين وثقوا بنا في رحلتهم الصحية',
        stories: [
          {
            name: 'أحمد الراشد',
            country: '🇸🇦 السعودية',
            treatment: 'جراحة مجازة القلب',
            story: 'كنت أواجه انتظاراً لمدة 6 أشهر في السعودية. من خلال شفاء الهند، أجريت جراحتي في غضون أسبوعين في مستشفى أبولو. كان الأطباء ممتازين، ووفرت أكثر من 80,000 دولار. ممتن إلى الأبد!'
          },
          {
            name: 'سارة محمد',
            country: '🇦🇪 الإمارات',
            treatment: 'علاج أطفال الأنابيب',
            story: 'بعد 5 دورات فاشلة لأطفال الأنابيب في دبي، كنا نفقد الأمل. كانت الاستشارة مفصلة ومطمئنة للغاية. نجحنا في المحاولة الأولى في الهند! طفلنا الآن عمره 6 أشهر.'
          },
          {
            name: 'فاطمة المنصوري',
            country: '🇴🇲 عمان',
            treatment: 'استبدال الركبة',
            story: 'الاستشارة المجانية أعطتني الثقة للمضي قدماً. كان جراح العظام على مستوى عالمي. أنا الآن خالية من الألم ووفرت 35,000 دولار مقارنة بالعلاج المحلي.'
          }
        ]
      },
      ctaSection: {
        title: 'هل أنت مستعد للبدء؟',
        subtitle: 'اتخذ الخطوة الأولى نحو صحة أفضل. احصل على استشارتك المجانية اليوم!',
        cta1: 'طلب استشارة مجانية',
        cta2: 'اتصل بـ +971 50 123 4567',
        cta3: 'تواصل عبر واتساب'
      }
    }
  };

  const currentContent = content[locale as 'en' | 'ar'];

  const benefits = [
    {
      icon: Clock,
      title: currentContent.benefitsSection.benefits[0].title,
      description: currentContent.benefitsSection.benefits[0].description,
    },
    {
      icon: Shield,
      title: currentContent.benefitsSection.benefits[1].title,
      description: currentContent.benefitsSection.benefits[1].description,
    },
    {
      icon: Video,
      title: currentContent.benefitsSection.benefits[2].title,
      description: currentContent.benefitsSection.benefits[2].description,
    },
    {
      icon: FileText,
      title: currentContent.benefitsSection.benefits[3].title,
      description: currentContent.benefitsSection.benefits[3].description,
    },
    {
      icon: CheckCircle,
      title: currentContent.benefitsSection.benefits[4].title,
      description: currentContent.benefitsSection.benefits[4].description,
    },
    {
      icon: Phone,
      title: currentContent.benefitsSection.benefits[5].title,
      description: currentContent.benefitsSection.benefits[5].description,
    },
  ];

  const specialtyIcons = [Heart, Bone, Activity, Baby, Eye, Brain, Stethoscope, TrendingUp];
  const qualificationIcons = [Globe, Award, FileText];
  const statisticIcons = [Users, Award, Stethoscope, Globe];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            {currentContent.hero.title}
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-primary-100">
            {currentContent.hero.subtitle}
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/booking">{currentContent.hero.cta}</Link>
          </Button>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900">
          {currentContent.benefitsSection.title}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  <benefit.icon className="h-8 w-8 text-primary-600" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900">
            {currentContent.howItWorksSection.title}
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {currentContent.howItWorksSection.steps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 font-serif text-2xl font-bold text-white">
                    {item.step}
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Receive */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900">
          {currentContent.whatYouReceive.title}
        </h2>
        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {currentContent.whatYouReceive.items.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-green-600" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Methods */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900">
            {currentContent.consultationMethods.title}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {currentContent.consultationMethods.methods.map((method, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href="/booking">{method.action}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {currentContent.statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                {(() => {
                  const Icon = statisticIcons[index];
                  return <Icon className="h-8 w-8 text-primary-600" />;
                })()}
              </div>
              <div className="mb-2 font-serif text-3xl font-bold text-gray-900">{stat.number}</div>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Specialty Areas */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
            {currentContent.specialtyAreas.title}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            {currentContent.specialtyAreas.subtitle}
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {currentContent.specialtyAreas.specialties.map((specialty, index) => (
              <Card key={index} className="text-center transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary-100">
                    {(() => {
                      const Icon = specialtyIcons[index];
                      return <Icon className="h-7 w-7 text-primary-600" />;
                    })()}
                  </div>
                  <CardTitle className="text-lg">{specialty.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {specialty.specialties.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Qualifications */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
          {currentContent.doctorQualifications.title}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          {currentContent.doctorQualifications.subtitle}
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {currentContent.doctorQualifications.qualifications.map((item, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  {(() => {
                    const Icon = qualificationIcons[index];
                    return <Icon className="h-8 w-8 text-primary-600" />;
                  })()}
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900">
            {currentContent.faqSection.title}
          </h2>
          <div className="mx-auto max-w-3xl space-y-6">
            {currentContent.faqSection.faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
          {currentContent.successStories.title}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          {currentContent.successStories.subtitle}
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {currentContent.successStories.stories.map((story, index) => (
            <Card key={index} className="bg-gradient-to-br from-primary-50 to-accent-50">
              <CardHeader>
                <div className="mb-2 text-sm font-medium text-primary-600">{story.treatment}</div>
                <CardTitle className="text-lg">{story.name}</CardTitle>
                <CardDescription className="text-sm">{story.country}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm italic text-gray-700">&quot;{story.story}&quot;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold">
            {currentContent.ctaSection.title}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
            {currentContent.ctaSection.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/booking">{currentContent.ctaSection.cta1}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700">
              <Link href="tel:+971501234567">{currentContent.ctaSection.cta2}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700">
              <Link href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer">
                {currentContent.ctaSection.cta3}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

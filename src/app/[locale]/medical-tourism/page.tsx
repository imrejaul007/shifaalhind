export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Globe, Award, Clock, Heart, Bone, Baby, Smile, Eye, Users, CheckCircle, Star, DollarSign } from 'lucide-react';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { SocialShare } from '@/components/blog/social-share';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  return generateSEOMetadata({
    title_en: 'Medical Tourism to India 2025 - Save 60-80% on World-Class Healthcare',
    title_ar: 'السياحة العلاجية إلى الهند 2025 - وفر 60-80% على الرعاية الصحية',
    description_en: 'Experience premium medical tourism to India. 40+ JCI-accredited hospitals, expert doctors, no waiting times. Popular with UAE & Saudi patients. Save 60-80% on surgery, cancer treatment, IVF, dental & cosmetic procedures.',
    description_ar: 'استمتع بالسياحة العلاجية الممتازة إلى الهند. أكثر من 40 مستشفى معتمد من JCI، أطباء خبراء، لا أوقات انتظار. شائع لدى مرضى الإمارات والسعودية. وفر 60-80% على الجراحة، علاج السرطان، أطفال الأنابيب، الإجراءات السنية والتجميلية.',
    locale,
    path: '/medical-tourism',
  });
}

export default async function MedicalTourismPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // Bilingual content for Medical Tourism page
  const content = {
    en: {
      hero: {
        title: 'Medical Tourism to India 2025',
        subtitle: 'Save 60-80% on World-Class Healthcare with JCI-Accredited Hospitals',
        description: 'Trusted by 200,000+ patients from UAE, Saudi Arabia & GCC countries annually. No waiting times. Expert doctors. Complete support.',
        cta1: 'Get Free Consultation',
        cta2: 'Book Treatment Now',
        features: '✓ Free Second Opinion ✓ No Waiting Time ✓ Medical Visa Assistance ✓ Airport Pickup Included'
      },
      statistics: [
        { number: '500,000+', label: 'International Patients/Year', description: 'Patients from 150+ countries' },
        { number: '40+', label: 'JCI-Accredited Hospitals', description: 'International quality standards' },
        { number: '95%+', label: 'Success Rate', description: 'On par with USA/UK hospitals' },
        { number: '60-80%', label: 'Average Savings', description: 'Compared to Western countries' },
      ],
      benefits: {
        title: 'Why Choose India for Medical Treatment?',
        subtitle: 'India has become the world\'s leading medical tourism destination, attracting patients from 150+ countries',
      },
      popularTreatments: {
        title: 'Popular Medical Treatments',
        subtitle: 'Most requested procedures by international patients from UAE, Saudi Arabia & GCC countries',
        viewDetails: 'View Details & Hospitals',
        viewAll: 'View All 30+ Treatments →',
        indiaLabel: 'India Cost:',
      },
      costSavings: {
        title: 'Massive Cost Savings - Real Comparison',
        subtitle: 'See how much you can save on common medical procedures',
        headers: {
          treatment: 'Treatment',
          india: 'India',
          usa: 'USA',
          uk: 'UK',
          uae: 'UAE',
          savings: 'You Save'
        },
        note1: 'Average savings: 60-80%',
        note1Bold: ' compared to USA, UK, and UAE',
        note2: 'All prices include: Surgery, Hospital stay, Doctor fees, Medication, Post-op care'
      },
      destinations: {
        title: 'Top Medical Tourism Destinations in India',
        subtitle: 'JCI-accredited hospitals, expert doctors, direct flights from Dubai, Abu Dhabi, Riyadh',
        treatmentsAvailable: 'treatments available',
        jciHospitals: 'JCI-accredited hospitals',
        directFlights: 'Direct flights from GCC',
        viewButton: 'View Hospitals & Treatments'
      },
      gccSection: {
        title: 'Special Support for GCC Patients',
        subtitle: 'We understand the needs of patients from UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain',
        uae: {
          title: '🇦🇪 UAE Patients',
          features: [
            'Direct flights: Dubai/Abu Dhabi → Mumbai (3h), Delhi (3.5h), Bangalore (4h)',
            'Medical visa on arrival at 6 major airports (instant approval)',
            'Arabic-speaking coordinators available 24/7',
            'Halal food, prayer rooms in all major hospitals'
          ],
          button: 'UAE Patients Guide →'
        },
        saudi: {
          title: '🇸🇦 Saudi Arabia Patients',
          features: [
            'Direct flights: Riyadh/Jeddah → Mumbai (4h), Delhi (4.5h), Bangalore (5h)',
            'e-Medical visa online (approval in 3-5 days, $80 total)',
            'Arabic translators, Saudi-friendly accommodation',
            'Family/companion visa included (Medical Attendant Visa)'
          ],
          button: 'Saudi Patients Guide →'
        },
        allGcc: {
          title: '🌍 All GCC Countries',
          features: [
            'Qatar, Oman, Kuwait, Bahrain patients welcome',
            'Simple medical visa process (online or on arrival)',
            'Complete package: Visa, flights, hotel, treatment included',
            'Post-treatment follow-up via video call after return'
          ],
          button: 'Medical Visa Guide →'
        }
      },
      howItWorks: {
        title: 'Your Medical Journey - Step by Step',
        subtitle: 'From consultation to recovery, we handle everything',
        steps: [
          {
            title: 'Free Consultation',
            desc: 'Submit medical reports online. Get second opinion from Indian specialist within 48 hours. Video call with doctor (free).',
            timeline: 'Day 1-2'
          },
          {
            title: 'Treatment Plan & Visa',
            desc: 'Receive detailed treatment plan, cost estimate, hospital options. We assist with medical visa application (e-visa or on arrival).',
            timeline: 'Day 3-7'
          },
          {
            title: 'Travel & Arrival',
            desc: 'Book flights. We arrange: Airport pickup, hotel (patient + companion), hospital pre-admission, welcome coordinator.',
            timeline: 'Day 8-10'
          },
          {
            title: 'Treatment & Recovery',
            desc: 'Treatment in JCI-accredited hospital. Post-surgery care, recovery monitoring. Follow-up after returning home (video calls).',
            timeline: 'Week 2+'
          }
        ],
        finalCta: 'Start Your Journey - Free Consultation'
      },
      blogArticles: {
        title: 'Medical Tourism Guides & Resources',
        subtitle: 'Comprehensive guides to help you plan your medical journey to India',
        guides: [
          {
            title: 'Medical Tourism Guide for UAE Patients',
            desc: 'Complete guide for patients from Dubai, Abu Dhabi, Sharjah. Flights, visa, costs, best hospitals.',
            button: 'Read Guide →'
          },
          {
            title: 'Healthcare Guide for Riyadh Patients',
            desc: 'Saudi Arabia patients: Direct flights, medical visa process, top hospitals, cost savings in SAR.',
            button: 'Read Guide →'
          },
          {
            title: 'Medical Visa India Complete Guide',
            desc: 'e-Medical visa, visa on arrival, application process, documents required, processing time.',
            button: 'Read Guide →'
          },
          {
            title: 'Best Time to Visit India for Treatment',
            desc: 'Weather, peak seasons, hospital availability, travel tips by month. Best months: Oct-March.',
            button: 'Read Guide →'
          },
          {
            title: 'Medical Tourism Insurance Guide',
            desc: 'Do you need insurance? Best providers, coverage options, costs $50-$200. What\'s covered.',
            button: 'Read Guide →'
          },
          {
            title: 'Choosing the Right Hospital',
            desc: 'JCI accreditation, doctor credentials, success rates, international patient services, reviews.',
            button: 'Read Guide →'
          }
        ],
        viewAll: 'View All 24 Guides →'
      },
      faqSection: {
        title: 'Frequently Asked Questions',
        subtitle: 'Common questions from international patients about medical tourism to India'
      },
      finalCta: {
        title: 'Ready to Start Your Medical Journey to India?',
        subtitle: 'Get a free consultation, second opinion, and personalized treatment plan from India\'s top medical experts',
        cta1: 'Get Free Consultation Now',
        cta2: 'Contact Us',
        features1: '✓ 200,000+ International Patients/Year ✓ 40+ JCI-Accredited Hospitals',
        features2: '✓ 95%+ Success Rate ✓ Save 60-80% on Treatment Costs',
        support: 'Available 24/7 | WhatsApp Support | Arabic & English'
      }
    },
    ar: {
      hero: {
        title: 'السياحة العلاجية إلى الهند 2025',
        subtitle: 'وفّر 60-80% على رعاية صحية عالمية المستوى مع مستشفيات معتمدة من JCI',
        description: 'موثوق من قبل أكثر من 200,000 مريض من الإمارات والسعودية ودول الخليج سنوياً. لا أوقات انتظار. أطباء خبراء. دعم شامل.',
        cta1: 'احصل على استشارة مجانية',
        cta2: 'احجز علاجك الآن',
        features: '✓ رأي طبي ثاني مجاني ✓ لا وقت انتظار ✓ المساعدة في التأشيرة الطبية ✓ الاستقبال في المطار مشمول'
      },
      statistics: [
        { number: '500,000+', label: 'مريض دولي سنوياً', description: 'مرضى من أكثر من 150 دولة' },
        { number: '40+', label: 'مستشفى معتمد من JCI', description: 'معايير جودة عالمية' },
        { number: '95%+', label: 'معدل النجاح', description: 'مماثل لمستشفيات أمريكا وبريطانيا' },
        { number: '60-80%', label: 'متوسط التوفير', description: 'مقارنة بالدول الغربية' },
      ],
      benefits: {
        title: 'لماذا تختار الهند للعلاج الطبي؟',
        subtitle: 'أصبحت الهند الوجهة الرائدة عالمياً للسياحة العلاجية، وتجذب المرضى من أكثر من 150 دولة',
      },
      popularTreatments: {
        title: 'العلاجات الطبية الشائعة',
        subtitle: 'الإجراءات الأكثر طلباً من المرضى الدوليين من الإمارات والسعودية ودول الخليج',
        viewDetails: 'عرض التفاصيل والمستشفيات',
        viewAll: 'عرض جميع العلاجات (أكثر من 30) ←',
        indiaLabel: 'التكلفة في الهند:',
      },
      costSavings: {
        title: 'توفير كبير في التكاليف - مقارنة حقيقية',
        subtitle: 'شاهد كم يمكنك توفيره على الإجراءات الطبية الشائعة',
        headers: {
          treatment: 'العلاج',
          india: 'الهند',
          usa: 'أمريكا',
          uk: 'بريطانيا',
          uae: 'الإمارات',
          savings: 'توفيرك'
        },
        note1: 'متوسط التوفير: 60-80%',
        note1Bold: ' مقارنة بأمريكا وبريطانيا والإمارات',
        note2: 'جميع الأسعار تشمل: الجراحة، الإقامة في المستشفى، أتعاب الطبيب، الأدوية، الرعاية بعد العملية'
      },
      destinations: {
        title: 'أفضل وجهات السياحة العلاجية في الهند',
        subtitle: 'مستشفيات معتمدة من JCI، أطباء خبراء، رحلات مباشرة من دبي وأبوظبي والرياض',
        treatmentsAvailable: 'علاج متاح',
        jciHospitals: 'مستشفيات معتمدة من JCI',
        directFlights: 'رحلات مباشرة من دول الخليج',
        viewButton: 'عرض المستشفيات والعلاجات'
      },
      gccSection: {
        title: 'دعم خاص لمرضى دول الخليج',
        subtitle: 'نحن نفهم احتياجات المرضى من الإمارات والسعودية وقطر وعُمان والكويت والبحرين',
        uae: {
          title: '🇦🇪 مرضى الإمارات',
          features: [
            'رحلات مباشرة: دبي/أبوظبي ← مومباي (3 ساعات)، دلهي (3.5 ساعة)، بنغالور (4 ساعات)',
            'تأشيرة طبية عند الوصول في 6 مطارات رئيسية (موافقة فورية)',
            'منسقون ناطقون بالعربية متاحون على مدار الساعة',
            'طعام حلال، غرف صلاة في جميع المستشفيات الكبرى'
          ],
          button: 'دليل مرضى الإمارات ←'
        },
        saudi: {
          title: '🇸🇦 مرضى السعودية',
          features: [
            'رحلات مباشرة: الرياض/جدة ← مومباي (4 ساعات)، دلهي (4.5 ساعة)، بنغالور (5 ساعات)',
            'تأشيرة طبية إلكترونية عبر الإنترنت (موافقة خلال 3-5 أيام، $80 إجمالي)',
            'مترجمون عرب، إقامة مناسبة للسعوديين',
            'تأشيرة مرافق/عائلة مشمولة (تأشيرة مرافق طبي)'
          ],
          button: 'دليل المرضى السعوديين ←'
        },
        allGcc: {
          title: '🌍 جميع دول الخليج',
          features: [
            'مرحباً بمرضى قطر وعُمان والكويت والبحرين',
            'عملية تأشيرة طبية بسيطة (عبر الإنترنت أو عند الوصول)',
            'باقة كاملة: تأشيرة، رحلات، فندق، علاج مشمول',
            'متابعة ما بعد العلاج عبر مكالمة فيديو بعد العودة'
          ],
          button: 'دليل التأشيرة الطبية ←'
        }
      },
      howItWorks: {
        title: 'رحلتك العلاجية - خطوة بخطوة',
        subtitle: 'من الاستشارة إلى التعافي، نتولى كل شيء',
        steps: [
          {
            title: 'استشارة مجانية',
            desc: 'أرسل التقارير الطبية عبر الإنترنت. احصل على رأي ثاني من أخصائي هندي خلال 48 ساعة. مكالمة فيديو مع الطبيب (مجانية).',
            timeline: 'اليوم 1-2'
          },
          {
            title: 'خطة العلاج والتأشيرة',
            desc: 'استلم خطة علاج مفصلة، تقدير التكلفة، خيارات المستشفيات. نساعدك في طلب التأشيرة الطبية (إلكترونية أو عند الوصول).',
            timeline: 'اليوم 3-7'
          },
          {
            title: 'السفر والوصول',
            desc: 'احجز الرحلات. نرتب: الاستقبال في المطار، الفندق (المريض + المرافق)، التسجيل المسبق في المستشفى، منسق الاستقبال.',
            timeline: 'اليوم 8-10'
          },
          {
            title: 'العلاج والتعافي',
            desc: 'العلاج في مستشفى معتمد من JCI. رعاية ما بعد الجراحة، مراقبة التعافي. المتابعة بعد العودة للوطن (مكالمات فيديو).',
            timeline: 'الأسبوع 2+'
          }
        ],
        finalCta: 'ابدأ رحلتك - استشارة مجانية'
      },
      blogArticles: {
        title: 'أدلة وموارد السياحة العلاجية',
        subtitle: 'أدلة شاملة لمساعدتك في التخطيط لرحلتك العلاجية إلى الهند',
        guides: [
          {
            title: 'دليل السياحة العلاجية لمرضى الإمارات',
            desc: 'دليل شامل للمرضى من دبي وأبوظبي والشارقة. الرحلات، التأشيرة، التكاليف، أفضل المستشفيات.',
            button: 'اقرأ الدليل ←'
          },
          {
            title: 'دليل الرعاية الصحية لمرضى الرياض',
            desc: 'مرضى السعودية: رحلات مباشرة، عملية التأشيرة الطبية، أفضل المستشفيات، التوفير بالريال السعودي.',
            button: 'اقرأ الدليل ←'
          },
          {
            title: 'دليل التأشيرة الطبية للهند - شامل',
            desc: 'التأشيرة الطبية الإلكترونية، التأشيرة عند الوصول، عملية التقديم، المستندات المطلوبة، وقت المعالجة.',
            button: 'اقرأ الدليل ←'
          },
          {
            title: 'أفضل وقت لزيارة الهند للعلاج',
            desc: 'الطقس، المواسم، توفر المستشفيات، نصائح السفر حسب الشهر. أفضل الأشهر: أكتوبر-مارس.',
            button: 'اقرأ الدليل ←'
          },
          {
            title: 'دليل تأمين السياحة العلاجية',
            desc: 'هل تحتاج للتأمين؟ أفضل مقدمي الخدمة، خيارات التغطية، التكاليف $50-$200. ما هو مشمول.',
            button: 'اقرأ الدليل ←'
          },
          {
            title: 'اختيار المستشفى المناسب',
            desc: 'اعتماد JCI، شهادات الأطباء، معدلات النجاح، خدمات المرضى الدوليين، التقييمات.',
            button: 'اقرأ الدليل ←'
          }
        ],
        viewAll: 'عرض جميع الأدلة (24 دليل) ←'
      },
      faqSection: {
        title: 'الأسئلة الشائعة',
        subtitle: 'أسئلة شائعة من المرضى الدوليين حول السياحة العلاجية إلى الهند'
      },
      finalCta: {
        title: 'هل أنت مستعد لبدء رحلتك العلاجية إلى الهند؟',
        subtitle: 'احصل على استشارة مجانية، رأي طبي ثاني، وخطة علاج مخصصة من كبار الخبراء الطبيين في الهند',
        cta1: 'احصل على استشارة مجانية الآن',
        cta2: 'اتصل بنا',
        features1: '✓ أكثر من 200,000 مريض دولي سنوياً ✓ أكثر من 40 مستشفى معتمد من JCI',
        features2: '✓ معدل نجاح أكثر من 95% ✓ وفّر 60-80% على تكاليف العلاج',
        support: 'متاح 24/7 | دعم واتساب | عربي وإنجليزي'
      }
    }
  };

  // Safe locale resolution with fallback
  const safeLocale = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  const currentContent = content[safeLocale];

  // Fetch only Indian cities with their treatments
  const cities = await prisma.city.findMany({
    where: {
      country: {
        OR: [
          { name_en: 'India' },
          { code: 'IN' },
        ],
      },
    },
    include: {
      country: true,
      cityTreatments: {
        include: {
          treatment: true,
        },
      },
    },
  });

  const benefits = [
    {
      icon: DollarSign,
      title: '60-80% Cost Savings',
      description: 'Heart surgery $6K vs $120K USA. Hip replacement $7K vs $40K UK. IVF $3K vs $15K UAE.',
      highlight: 'Save $50K-$100K',
    },
    {
      icon: Award,
      title: 'JCI-Accredited Hospitals',
      description: '40+ JCI-accredited hospitals matching USA/UK standards. ISO certified facilities.',
      highlight: 'World-Class Quality',
    },
    {
      icon: Clock,
      title: 'No Waiting Times',
      description: 'Surgery within 1-2 weeks vs 6-12 months in UK/Canada. Immediate appointments.',
      highlight: 'Fast Treatment',
    },
    {
      icon: Users,
      title: 'Expert Doctors',
      description: 'Board-certified surgeons trained in USA/UK. 15-30 years experience. English-speaking.',
      highlight: '10,000+ Specialists',
    },
    {
      icon: Globe,
      title: 'Complete Medical Tourism Package',
      description: 'Visa assistance, airport pickup, hotel, translator, medical coordination included.',
      highlight: 'End-to-End Support',
    },
    {
      icon: Star,
      title: 'Trusted by GCC Patients',
      description: '200,000+ international patients annually from UAE, Saudi, Qatar, Oman, Kuwait.',
      highlight: '95% Satisfaction',
    },
  ];

  // Popular treatments to showcase
  const popularTreatments = [
    {
      slug: 'heart-surgery-cost-comparison',
      title: 'Heart Surgery',
      icon: Heart,
      savings: 'Save $90K-$114K',
      cost: '$5K-$10K',
      category: 'Cardiac',
      type: 'blog'
    },
    {
      slug: 'knee-replacement-cost',
      title: 'Knee Replacement',
      icon: Bone,
      savings: 'Save $28K-$33K',
      cost: '$6K-$8K',
      category: 'Orthopedic',
      type: 'blog'
    },
    {
      slug: 'ivf-fertility-treatment-india-complete-guide',
      title: 'IVF & Fertility',
      icon: Baby,
      savings: 'Save $9K-$12K',
      cost: '$2.5K-$4K',
      category: 'Fertility',
      type: 'blog'
    },
    {
      slug: 'dental-implants-india',
      title: 'Dental Implants',
      icon: Smile,
      savings: 'Save $3K-$4K',
      cost: '$500-$800',
      category: 'Dental',
      type: 'treatment'
    },
    {
      slug: 'cataract-surgery-india',
      title: 'Cataract Surgery',
      icon: Eye,
      savings: 'Save $4K-$6K',
      cost: '$800-$1.5K',
      category: 'Eye',
      type: 'treatment'
    },
    {
      slug: 'cancer-treatment-cost',
      title: 'Cancer Treatment',
      icon: Award,
      savings: 'Save $100K-$150K',
      cost: '$5K-$20K',
      category: 'Oncology',
      type: 'blog'
    },
  ];

  const faqData = [
    {
      question: 'Is medical treatment in India safe for international patients?',
      answer: 'Yes, India has 40+ JCI-accredited hospitals (same standards as USA/UK hospitals), board-certified doctors trained internationally, and treats 500,000+ international patients annually with 95%+ success rates matching Western standards.'
    },
    {
      question: 'How much can I save with medical tourism to India?',
      answer: 'You can save 60-80% compared to USA/UK/UAE. Examples: Heart surgery $6K vs $120K USA (save $114K), Hip replacement $7K vs $40K UK (save $33K), IVF $3K vs $15K UAE (save $12K), Dental implants $600 vs $4K USA (save $3.4K).'
    },
    {
      question: 'Do Indian doctors speak English?',
      answer: 'Yes, all doctors at international hospitals are fluent in English. Many are trained in USA/UK (Harvard, Johns Hopkins, Oxford). Hospitals also provide Arabic translators for GCC patients from UAE, Saudi Arabia, Qatar.'
    },
    {
      question: 'How long does it take to get treatment in India?',
      answer: 'Very fast: Free consultation within 24 hours, Medical reports review in 2-3 days, Visa approval in 3-5 days, Treatment starts within 1-2 weeks. No waiting lists unlike UK/Canada (6-12 months wait).'
    },
    {
      question: 'Which Indian cities are best for medical tourism?',
      answer: 'Top cities: Mumbai (25+ JCI hospitals, 150K international patients), Delhi (40+ NABH hospitals, 200K patients), Bangalore (30+ hospitals, best weather), Chennai (medical heritage capital, 150K patients). All have direct flights from UAE/Saudi Arabia (3-5 hours).'
    },
    {
      question: 'What is included in medical tourism packages?',
      answer: 'Complete support: Medical visa assistance, Airport pickup/drop, Hotel accommodation (patient + companion), Hospital coordination, English/Arabic translator, Post-treatment follow-up, All included in treatment cost - no hidden fees.'
    },
    {
      question: 'Are Indian hospitals accredited internationally?',
      answer: 'Yes, 40+ hospitals have JCI accreditation (Joint Commission International - USA standard), 500+ hospitals have NABH accreditation (Indian government quality standard), Many hospitals accredited by UK, Australian, Canadian bodies.'
    },
    {
      question: 'Can I get a second opinion before traveling to India?',
      answer: 'Yes, absolutely free! Submit your medical reports online, Get second opinion from Indian specialists within 48 hours, Video consultation with doctor (free), Treatment plan and cost estimate provided, No obligation to proceed. 90% of patients proceed after second opinion.'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* FAQ Schema for SEO */}
      <FAQSchema faqs={faqData} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-20 text-white">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-6xl">
            {currentContent.hero.title}
          </h1>
          <p className="mx-auto mb-6 max-w-3xl text-xl text-primary-100 md:text-2xl">
            {currentContent.hero.subtitle}
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-100">
            {currentContent.hero.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/consultation">{currentContent.hero.cta1}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary-700 text-lg px-8 py-6">
              <Link href="/booking">{currentContent.hero.cta2}</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-primary-100">
            {currentContent.hero.features}
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white px-4 py-12 border-b">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            {currentContent.statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary-600">{stat.number}</div>
                <div className="mb-1 text-lg font-semibold text-gray-900">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          {currentContent.benefits.title}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
          {currentContent.benefits.subtitle}
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="transition-shadow hover:shadow-xl border-2">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-100">
                  <benefit.icon className="h-7 w-7 text-primary-600" />
                </div>
                <div className="mb-2">
                  <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">
                    {benefit.highlight}
                  </span>
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Popular Treatments Section */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            {currentContent.popularTreatments.title}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
            {currentContent.popularTreatments.subtitle}
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popularTreatments.map((treatment) => {
              const Icon = treatment.icon;
              return (
                <Card key={treatment.slug} className="transition-shadow hover:shadow-xl">
                  <CardHeader className="bg-gradient-to-br from-primary-50 to-primary-100">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow">
                      <Icon className="h-7 w-7 text-primary-600" />
                    </div>
                    <CardTitle className="text-xl">{treatment.title}</CardTitle>
                    <CardDescription className="text-base font-medium text-primary-700">
                      {treatment.category}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="mb-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{currentContent.popularTreatments.indiaLabel}</span>
                        <span className="text-lg font-bold text-gray-900">{treatment.cost}</span>
                      </div>
                      <div className="rounded-lg bg-green-50 px-3 py-2 text-center">
                        <span className="text-sm font-semibold text-green-800">{treatment.savings}</span>
                      </div>
                    </div>
                    <Button asChild className="w-full">
                      <Link href={`/${treatment.type === 'blog' ? 'blog' : 'treatments'}/${treatment.slug}`}>
                        {currentContent.popularTreatments.viewDetails}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/treatments">{currentContent.popularTreatments.viewAll}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cost Savings Comparison */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          {currentContent.costSavings.title}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
          {currentContent.costSavings.subtitle}
        </p>

        <div className="mx-auto max-w-5xl overflow-x-auto">
          <table className="w-full border-collapse rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                <th className="px-6 py-4 text-left">{currentContent.costSavings.headers.treatment}</th>
                <th className="px-6 py-4 text-center">{currentContent.costSavings.headers.india}</th>
                <th className="px-6 py-4 text-center">{currentContent.costSavings.headers.usa}</th>
                <th className="px-6 py-4 text-center">{currentContent.costSavings.headers.uk}</th>
                <th className="px-6 py-4 text-center">{currentContent.costSavings.headers.uae}</th>
                <th className="px-6 py-4 text-center">{currentContent.costSavings.headers.savings}</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">Heart Bypass Surgery</td>
                <td className="px-6 py-4 text-center text-green-600 font-bold">$5,500</td>
                <td className="px-6 py-4 text-center">$120,000</td>
                <td className="px-6 py-4 text-center">$70,000</td>
                <td className="px-6 py-4 text-center">$30,000</td>
                <td className="px-6 py-4 text-center text-green-700 font-bold">$24K-$114K</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">Hip Replacement</td>
                <td className="px-6 py-4 text-center text-green-600 font-bold">$7,000</td>
                <td className="px-6 py-4 text-center">$40,000</td>
                <td className="px-6 py-4 text-center">$35,000</td>
                <td className="px-6 py-4 text-center">$18,000</td>
                <td className="px-6 py-4 text-center text-green-700 font-bold">$11K-$33K</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">Knee Replacement</td>
                <td className="px-6 py-4 text-center text-green-600 font-bold">$6,500</td>
                <td className="px-6 py-4 text-center">$35,000</td>
                <td className="px-6 py-4 text-center">$30,000</td>
                <td className="px-6 py-4 text-center">$16,000</td>
                <td className="px-6 py-4 text-center text-green-700 font-bold">$9.5K-$28.5K</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">IVF (Single Cycle)</td>
                <td className="px-6 py-4 text-center text-green-600 font-bold">$3,000</td>
                <td className="px-6 py-4 text-center">$15,000</td>
                <td className="px-6 py-4 text-center">$8,000</td>
                <td className="px-6 py-4 text-center">$7,000</td>
                <td className="px-6 py-4 text-center text-green-700 font-bold">$4K-$12K</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">Liver Transplant</td>
                <td className="px-6 py-4 text-center text-green-600 font-bold">$35,000</td>
                <td className="px-6 py-4 text-center">$500,000</td>
                <td className="px-6 py-4 text-center">$250,000</td>
                <td className="px-6 py-4 text-center">$150,000</td>
                <td className="px-6 py-4 text-center text-green-700 font-bold">$115K-$465K</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">Dental Implants (Single)</td>
                <td className="px-6 py-4 text-center text-green-600 font-bold">$600</td>
                <td className="px-6 py-4 text-center">$4,000</td>
                <td className="px-6 py-4 text-center">$3,000</td>
                <td className="px-6 py-4 text-center">$2,500</td>
                <td className="px-6 py-4 text-center text-green-700 font-bold">$1.9K-$3.4K</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">LASIK Eye Surgery</td>
                <td className="px-6 py-4 text-center text-green-600 font-bold">$1,000</td>
                <td className="px-6 py-4 text-center">$4,000</td>
                <td className="px-6 py-4 text-center">$3,500</td>
                <td className="px-6 py-4 text-center">$2,500</td>
                <td className="px-6 py-4 text-center text-green-700 font-bold">$1.5K-$3K</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">Rhinoplasty (Nose Job)</td>
                <td className="px-6 py-4 text-center text-green-600 font-bold">$2,500</td>
                <td className="px-6 py-4 text-center">$12,000</td>
                <td className="px-6 py-4 text-center">$8,000</td>
                <td className="px-6 py-4 text-center">$6,000</td>
                <td className="px-6 py-4 text-center text-green-700 font-bold">$3.5K-$9.5K</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg text-gray-700">
            <strong>{currentContent.costSavings.note1}</strong>{currentContent.costSavings.note1Bold}
          </p>
          <p className="mt-2 text-gray-600">
            {currentContent.costSavings.note2}
          </p>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            {currentContent.destinations.title}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
            {currentContent.destinations.subtitle}
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <Card key={city.id} className="overflow-hidden transition-shadow hover:shadow-xl">
                <CardHeader className="bg-gradient-to-br from-primary-500 to-primary-600 text-white">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <MapPin className="h-6 w-6" />
                    {city.name_en}
                  </CardTitle>
                  <CardDescription className="text-primary-100 text-base">
                    {city.country.name_en}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="mb-4 space-y-2">
                    <p className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {city.cityTreatments.length} {currentContent.destinations.treatmentsAvailable}
                    </p>
                    <p className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {currentContent.destinations.jciHospitals}
                    </p>
                    <p className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {currentContent.destinations.directFlights}
                    </p>
                  </div>
                  <Button asChild className="w-full">
                    <Link href={`/medical-tourism/${city.country.slug}/${city.slug}`}>
                      {currentContent.destinations.viewButton}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GCC-Specific Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          {currentContent.gccSection.title}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
          {currentContent.gccSection.subtitle}
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl">{currentContent.gccSection.uae.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {currentContent.gccSection.uae.features.map((feature, index) => (
                <p key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </p>
              ))}
              <Button asChild className="w-full mt-4">
                <Link href="/blog/dubai-to-india-medical-tourism">{currentContent.gccSection.uae.button}</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl">{currentContent.gccSection.saudi.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {currentContent.gccSection.saudi.features.map((feature, index) => (
                <p key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </p>
              ))}
              <Button asChild className="w-full mt-4">
                <Link href="/blog/riyadh-to-india-healthcare">{currentContent.gccSection.saudi.button}</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl">{currentContent.gccSection.allGcc.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {currentContent.gccSection.allGcc.features.map((feature, index) => (
                <p key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </p>
              ))}
              <Button asChild className="w-full mt-4">
                <Link href="/blog/medical-visa-india-complete-guide">{currentContent.gccSection.allGcc.button}</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            {currentContent.howItWorks.title}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
            {currentContent.howItWorks.subtitle}
          </p>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-4">
              {currentContent.howItWorks.steps.map((item, index) => (
                <Card key={index} className="text-center border-2 hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 font-serif text-3xl font-bold text-white shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div className="mb-2">
                      <span className="inline-block rounded-full bg-primary-200 px-3 py-1 text-xs font-semibold text-primary-800">
                        {item.timeline}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/consultation">{currentContent.howItWorks.finalCta}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Articles Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          {currentContent.blogArticles.title}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
          {currentContent.blogArticles.subtitle}
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentContent.blogArticles.guides.map((guide, index) => {
            const guideLinks = [
              '/blog/dubai-to-india-medical-tourism',
              '/blog/riyadh-to-india-healthcare',
              '/blog/medical-visa-india-complete-guide',
              '/blog/best-time-visit-india-medical-tourism',
              '/blog/medical-tourism-insurance-india',
              '/blog/selecting-right-hospital-india'
            ];

            return (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    {guide.desc}
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={guideLinks[index]}>{guide.button}</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/blog">{currentContent.blogArticles.viewAll}</Link>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            {currentContent.faqSection.title}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
            {currentContent.faqSection.subtitle}
          </p>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg text-primary-700">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Share */}
      <section className="container mx-auto px-4 py-8">
        <SocialShare
          url="/medical-tourism"
          title="Medical Tourism to India 2025 - Save 60-80% on World-Class Healthcare"
          description="JCI-accredited hospitals, expert doctors, no waiting times. Trusted by 200,000+ patients from UAE, Saudi Arabia & GCC."
        />
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 px-4 py-20 text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            {currentContent.finalCta.title}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
            {currentContent.finalCta.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/consultation">{currentContent.finalCta.cta1}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary-700 text-lg px-8 py-6">
              <Link href="/contact">{currentContent.finalCta.cta2}</Link>
            </Button>
          </div>
          <div className="space-y-2 text-primary-100">
            <p>{currentContent.finalCta.features1}</p>
            <p>{currentContent.finalCta.features2}</p>
            <p className="text-sm mt-4">{currentContent.finalCta.support}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

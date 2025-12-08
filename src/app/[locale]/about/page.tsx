export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Heart,
  Users,
  Award,
  Globe,
  MessageCircle,
  Languages,
  Sparkles,
  CheckCircle,
  Star,
  MapPin,
  Shield,
  Clock,
  UserCheck,
  Headset,
  BadgeCheck,
} from 'lucide-react';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return generateSEOMetadata({
    title_en: 'About Us - Native Arabic Speakers from GCC | Shifa AlHind',
    title_ar: 'من نحن - متحدثون أصليون بالعربية من الخليج | شفاء الهند',
    description_en: 'Learn about Shifa AlHind - your trusted partner since 2013. Our Arabic team members have lived in GCC countries and understand your culture perfectly.',
    description_ar: 'تعرف على شفاء الهند - شريكك الموثوق منذ 2013. فريقنا العربي عاش في دول الخليج ويفهم ثقافتك تمامًا.',
    locale,
    path: '/about',
  });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // Bilingual content
  const content = {
    en: {
      hero: {
        badge: 'Serving GCC Patients Since 2013',
        title: 'About Shifa AlHind',
        description: 'Your trusted medical tourism partner with native Arabic team members who have lived in GCC countries. We understand your culture, language, and healthcare expectations perfectly.',
        stats: {
          patients: 'GCC Patients',
          experience: 'Experience',
          satisfaction: 'Satisfaction'
        }
      },
      gccSection: {
        badge: 'Why GCC Patients Choose Us',
        title: 'Native Arabic Team from GCC Countries',
        description: "Our Arabic coordinators aren't just translators - they've lived in Dubai, Abu Dhabi, Riyadh, Jeddah, Doha, and other GCC cities. They understand your dialect, culture, and what matters to you and your family."
      },
      missionSection: {
        title: 'Our Mission & Story',
        paragraphs: [
          "Shifa AlHind was founded in 2013 with a simple yet powerful mission: to make world-class healthcare accessible and affordable for patients from the GCC region. Our story began when our founder, who experienced the challenges of navigating medical treatment abroad firsthand, recognized the need for a trusted partner who truly understands GCC culture and the Arabic language.",
          "What makes us different? We don't just hire translators - we've built a team of native Arabic speakers who have actually lived and worked in GCC countries for 5-15 years. Our coordinators have lived in Dubai's vibrant neighborhoods, worked in Riyadh's corporate offices, and experienced life in Doha's expatriate communities. They understand not just the language, but the culture, expectations, and what matters to GCC families.",
          "We bridge the gap between patients seeking quality medical care and India's renowned hospitals and specialists. What started as a small operation helping a handful of patients has grown into a comprehensive medical tourism facilitation service that has assisted over 10,000 international patients.",
          "With over a decade of experience in medical tourism, we've helped thousands of patients from UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain receive life-changing treatments at a fraction of the cost in their home countries. Our patients have undergone successful cardiac surgeries, orthopedic procedures, fertility treatments, cancer care, and numerous other specialized treatments. Our 98% patient satisfaction rate reflects our dedication to excellence in every aspect of care."
        ]
      },
      journeySection: {
        title: 'Our Journey',
        subtitle: '12 years of serving GCC patients with dedication and care'
      },
      whyChooseSection: {
        title: 'Why Choose Shifa AlHind?',
        reasons: [
          {
            title: 'Deep Network of Premier Hospitals',
            content: "We partner exclusively with JCI-accredited and NABH-certified hospitals in India's major cities - Mumbai, Delhi, Bangalore, Chennai, and Hyderabad. Our hospital network includes Apollo Hospitals, Fortis Healthcare, Max Healthcare, Manipal Hospitals, Narayana Health, and other institutions that rank among Asia's finest medical facilities. Each partner hospital has been carefully vetted for quality standards, success rates, and experience with international patients."
          },
          {
            title: 'Transparent Pricing with No Hidden Costs',
            content: "We believe in complete transparency. When we provide you with a cost estimate, it includes all medical fees, hospital charges, diagnostic tests, medications, and our coordination services. We clearly outline what's included and what's not, so you can budget accurately. Unlike some medical tourism companies, we don't mark up hospital prices or take hidden commissions - our service fee is clearly stated upfront."
          },
          {
            title: 'End-to-End Support in Your Language & Culture',
            content: "From your initial inquiry to post-treatment follow-up, we provide comprehensive support in English and Arabic. Our team assists with medical visa applications, airport pickup, accommodation arrangements, hospital admissions, doctor consultations, and everything in between. Our Arabic coordinators have lived in GCC countries and understand your cultural needs - from halal meals to prayer times to female doctors for women patients. We don't just connect you with a hospital and disappear - we stay with you throughout your entire journey and beyond."
          },
          {
            title: 'Muslim-Friendly & GCC Cultural Comfort',
            badges: '✅ 100% Certified Halal Food | ✅ Nearby Mosques (5-10 min) | ✅ Prayer Rooms in Hotels',
            content: "We understand the unique needs of GCC patients. Our partner hospitals provide 100% certified halal meals (Arabic, Indian, Continental cuisines), prayer facilities with Qibla direction, and female doctors for women patients when requested. All accommodations are within 5-15 minutes of mosques including Masjid Juma (Indiranagar), Frazer Town Mosque, and Shivaji Nagar Jama Masjid.",
            content2: "We arrange accommodation close to hospitals with amenities familiar to GCC travelers: Arabic TV channels, Arabic coffee & dates, prayer mats in rooms, wudu facilities, women-only floors, and family suites. In Bangalore, we partner with Pentouz Hotels, offering comfortable and convenient stays near major medical facilities. Our team understands cultural nuances and ensures your complete comfort throughout your medical journey."
          }
        ]
      },
      valuesSection: {
        title: 'Our Values'
      },
      statsSection: {
        title: 'Our Track Record',
        cards: [
          { value: '10,000+', label: 'Patients Served', description: 'From all 6 GCC countries' },
          { value: '50+', label: 'Partner Hospitals', description: 'JCI & NABH accredited' },
          { value: '98%', label: 'Satisfaction Rate', description: 'Verified patient reviews' }
        ]
      },
      ctaSection: {
        title: 'Ready to Start Your Medical Journey?',
        description: 'Get a free consultation from our GCC-experienced Arabic team',
        buttons: {
          consultation: 'Get Free Consultation',
          whatsapp: 'WhatsApp في العربية'
        }
      }
    },
    ar: {
      hero: {
        badge: 'نخدم مرضى دول الخليج منذ 2013',
        title: 'عن شفاء الهند',
        description: 'شريكك الموثوق للسياحة العلاجية مع فريق عربي أصلي عاش في دول الخليج. نحن نفهم ثقافتك ولغتك وتوقعاتك الصحية تمامًا.',
        stats: {
          patients: 'مرضى من الخليج',
          experience: 'سنوات خبرة',
          satisfaction: 'رضا العملاء'
        }
      },
      gccSection: {
        badge: 'لماذا يختارنا مرضى دول الخليج',
        title: 'فريق عربي أصلي من دول الخليج',
        description: 'منسقونا العرب ليسوا مجرد مترجمين - لقد عاشوا في دبي وأبو ظبي والرياض وجدة والدوحة ومدن خليجية أخرى. يفهمون لهجتك وثقافتك وما يهمك أنت وعائلتك.'
      },
      missionSection: {
        title: 'مهمتنا وقصتنا',
        paragraphs: [
          'تأسست شفاء الهند في عام 2013 بمهمة بسيطة لكنها قوية: جعل الرعاية الصحية العالمية في متناول الجميع وبأسعار معقولة للمرضى من منطقة الخليج. بدأت قصتنا عندما أدرك مؤسسنا، الذي عانى من تحديات التنقل في العلاج الطبي في الخارج بنفسه، الحاجة إلى شريك موثوق يفهم حقًا ثقافة الخليج واللغة العربية.',
          'ما يجعلنا مختلفين؟ نحن لا نوظف مترجمين فقط - بل قمنا ببناء فريق من المتحدثين الأصليين باللغة العربية الذين عاشوا وعملوا بالفعل في دول الخليج لمدة 5-15 عامًا. عاش منسقونا في أحياء دبي النابضة بالحياة، وعملوا في مكاتب الرياض، وعاشوا الحياة في مجتمعات الدوحة. إنهم يفهمون ليس فقط اللغة، بل الثقافة والتوقعات وما يهم العائلات الخليجية.',
          'نحن نربط بين المرضى الذين يسعون للحصول على رعاية طبية عالية الجودة والمستشفيات والأطباء المتخصصين المشهورين في الهند. ما بدأ كعملية صغيرة تساعد حفنة من المرضى نما ليصبح خدمة شاملة لتسهيل السياحة العلاجية ساعدت أكثر من 10,000 مريض دولي.',
          'مع أكثر من عقد من الخبرة في السياحة العلاجية، ساعدنا آلاف المرضى من الإمارات والسعودية وقطر وعمان والكويت والبحرين على تلقي علاجات تغير حياتهم بجزء بسيط من التكلفة في بلدانهم الأصلية. خضع مرضانا لعمليات جراحية ناجحة للقلب، وإجراءات العظام، وعلاجات الخصوبة، ورعاية السرطان، والعديد من العلاجات المتخصصة الأخرى. يعكس معدل رضا مرضانا البالغ 98٪ تفانينا في التميز في كل جانب من جوانب الرعاية.'
        ]
      },
      journeySection: {
        title: 'رحلتنا',
        subtitle: '12 عامًا من خدمة مرضى الخليج بتفانٍ ورعاية'
      },
      whyChooseSection: {
        title: 'لماذا تختار شفاء الهند؟',
        reasons: [
          {
            title: 'شبكة عميقة من المستشفيات الرائدة',
            content: 'نتشارك حصريًا مع المستشفيات المعتمدة من JCI و NABH في المدن الرئيسية في الهند - مومباي ودلهي وبنغالور وتشيناي وحيدر أباد. تشمل شبكة مستشفياتنا مستشفيات أبولو وفورتيس للرعاية الصحية وماكس للرعاية الصحية ومانيبال وناريانا هيلث ومؤسسات أخرى تُعد من أفضل المرافق الطبية في آسيا. تم فحص كل مستشفى شريك بعناية من حيث معايير الجودة ومعدلات النجاح والخبرة مع المرضى الدوليين.'
          },
          {
            title: 'أسعار شفافة بدون تكاليف خفية',
            content: 'نؤمن بالشفافية الكاملة. عندما نقدم لك تقدير التكلفة، فإنه يشمل جميع الرسوم الطبية ورسوم المستشفى والفحوصات التشخيصية والأدوية وخدمات التنسيق لدينا. نوضح بوضوح ما هو مدرج وما هو غير مدرج، حتى تتمكن من وضع ميزانية دقيقة. على عكس بعض شركات السياحة العلاجية، نحن لا نرفع أسعار المستشفيات أو نأخذ عمولات خفية - يتم ذكر رسوم خدماتنا بوضوح مقدمًا.'
          },
          {
            title: 'دعم شامل بلغتك وثقافتك',
            content: 'من استفسارك الأولي إلى المتابعة بعد العلاج، نوفر دعمًا شاملاً بالإنجليزية والعربية. يساعد فريقنا في طلبات التأشيرة الطبية والاستقبال في المطار وترتيبات الإقامة والقبول في المستشفى واستشارات الأطباء وكل شيء بينهما. عاش منسقونا العرب في دول الخليج ويفهمون احتياجاتك الثقافية - من الوجبات الحلال إلى أوقات الصلاة إلى الطبيبات للمريضات. نحن لا نربطك بالمستشفى ونختفي - بل نبقى معك طوال رحلتك وما بعدها.'
          },
          {
            title: 'راحة إسلامية وثقافة خليجية',
            badges: '✅ طعام حلال معتمد 100٪ | ✅ مساجد قريبة (5-10 دقائق) | ✅ غرف صلاة في الفنادق',
            content: 'نحن نفهم الاحتياجات الفريدة لمرضى الخليج. توفر مستشفياتنا الشريكة وجبات حلال معتمدة 100٪ (مأكولات عربية وهندية وقارية)، ومرافق صلاة باتجاه القبلة، وطبيبات للمريضات عند الطلب. جميع أماكن الإقامة على بعد 5-15 دقيقة من المساجد بما في ذلك مسجد الجمعة (إندرا ناجار) ومسجد فريزر تاون ومسجد شيفاجي ناجار الجامع.',
            content2: 'نرتب الإقامة بالقرب من المستشفيات مع وسائل راحة مألوفة للمسافرين من الخليج: قنوات تلفزيونية عربية، قهوة عربية وتمر، سجادات صلاة في الغرف، مرافق وضوء، طوابق للنساء فقط، وأجنحة عائلية. في بنغالور، نتشارك مع فنادق بنتوز، التي تقدم إقامة مريحة ومناسبة بالقرب من المرافق الطبية الرئيسية. يفهم فريقنا الفروق الثقافية الدقيقة ويضمن راحتك الكاملة طوال رحلتك الطبية.'
          }
        ]
      },
      valuesSection: {
        title: 'قيمنا'
      },
      statsSection: {
        title: 'سجلنا الحافل',
        cards: [
          { value: '+10,000', label: 'مريض تم خدمتهم', description: 'من جميع دول الخليج الستة' },
          { value: '+50', label: 'مستشفى شريك', description: 'معتمد من JCI و NABH' },
          { value: '%98', label: 'معدل الرضا', description: 'تقييمات مرضى موثقة' }
        ]
      },
      ctaSection: {
        title: 'مستعد لبدء رحلتك العلاجية؟',
        description: 'احصل على استشارة مجانية من فريقنا العربي ذي الخبرة في الخليج',
        buttons: {
          consultation: 'احصل على استشارة مجانية',
          whatsapp: 'واتساب بالعربية'
        }
      }
    }
  };

  const currentContent = content[locale as 'en' | 'ar'];

  // Values data
  const values = [
    {
      icon: Heart,
      title: locale === 'ar' ? 'المريض أولاً' : 'Patient First',
      description: locale === 'ar' ? 'صحتك ورفاهيتك هما أولويتنا القصوى في كل قرار نتخذه.' : 'Your health and wellbeing are our top priority in every decision we make.',
      gradient: 'from-red-500 to-pink-500',
    },
    {
      icon: Users,
      title: locale === 'ar' ? 'فريق خبراء' : 'Expert Team',
      description: locale === 'ar' ? 'منسقون طبيون ذوو خبرة ومهنيون في الرعاية الصحية يرشدونك.' : 'Experienced medical coordinators and healthcare professionals guiding you.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Award,
      title: locale === 'ar' ? 'رعاية عالية الجودة' : 'Quality Care',
      description: locale === 'ar' ? 'مستشفيات شريكة معتمدة من JCI و NABH مع سجلات مثبتة.' : 'Partner hospitals with JCI, NABH accreditations and proven track records.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Globe,
      title: locale === 'ar' ? 'انتشار عالمي' : 'Global Reach',
      description: locale === 'ar' ? 'نخدم المرضى من الإمارات والسعودية وقطر وعمان والكويت والبحرين.' : 'Serving patients from UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain.',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const gccAdvantages = [
    {
      icon: Languages,
      title: locale === 'ar' ? 'منسقون عرب أصليون' : 'Native Arabic Coordinators',
      description: locale === 'ar' ? 'يضم فريقنا متحدثين باللغة العربية عاشوا في دبي والرياض والدوحة ومدن خليجية أخرى لمدة 5-15 عامًا' : 'Our team includes Arabic speakers who have lived in Dubai, Riyadh, Doha, and other GCC cities for 5-15 years',
      stats: locale === 'ar' ? '8 أعضاء عرب' : '8 Arabic Team Members',
    },
    {
      icon: UserCheck,
      title: locale === 'ar' ? 'خبرة ثقافية' : 'Cultural Expertise',
      description: locale === 'ar' ? 'فهم عميق للعادات والتوقعات وتفضيلات الرعاية الصحية الإماراتية والسعودية والقطرية والخليجية' : 'Deep understanding of Emirati, Saudi, Qatari, and Gulf customs, expectations, and healthcare preferences',
      stats: locale === 'ar' ? '+10 سنوات خبرة خليجية' : '10+ Years GCC Experience',
    },
    {
      icon: MessageCircle,
      title: locale === 'ar' ? 'تطابق مثالي للهجة' : 'Perfect Dialect Match',
      description: locale === 'ar' ? 'نفهم اللهجات الإماراتية والسعودية والقطرية والعمانية والكويتية تمامًا - لا يوجد سوء فهم' : 'We understand Emirates, Saudi, Qatari, Omani, and Kuwaiti dialects perfectly - no miscommunication',
      stats: locale === 'ar' ? 'جميع اللهجات الخليجية' : 'All GCC Dialects',
    },
    {
      icon: Shield,
      title: locale === 'ar' ? 'موثوق من قبل عائلات الخليج' : 'Trusted by GCC Families',
      description: locale === 'ar' ? 'موصى به من قبل المرضى في جميع دول الخليج الستة مع تقييمات وشهادات موثقة' : 'Recommended by patients across all 6 GCC countries with verified reviews and testimonials',
      stats: locale === 'ar' ? '+10,000 مريض خليجي' : '10,000+ GCC Patients',
    },
  ];

  const milestones = [
    {
      year: '2013',
      title: locale === 'ar' ? 'تأسيس شفاء الهند' : 'Shifa AlHind Founded',
      description: locale === 'ar' ? 'بدأنا مهمتنا لربط مرضى الخليج بالرعاية الصحية الهندية عالية الجودة' : 'Started our mission to connect GCC patients with quality Indian healthcare',
      icon: Sparkles,
    },
    {
      year: '2015',
      title: locale === 'ar' ? 'توسيع الفريق العربي' : 'Arabic Team Expansion',
      description: locale === 'ar' ? 'وظفنا متحدثين أصليين باللغة العربية عاشوا في الإمارات والسعودية لخدمة مرضى الخليج بشكل أفضل' : 'Hired native Arabic speakers who lived in UAE and Saudi Arabia to better serve GCC patients',
      icon: Users,
    },
    {
      year: '2018',
      title: locale === 'ar' ? 'معلم 5,000 مريض' : '5,000 Patients Milestone',
      description: locale === 'ar' ? 'خدمنا بنجاح أكثر من 5,000 مريض من جميع دول الخليج' : 'Successfully served 5,000+ patients from across all GCC countries',
      icon: Heart,
    },
    {
      year: '2020',
      title: locale === 'ar' ? 'شراكة فنادق بنتوز' : 'Pentouz Hotels Partnership',
      description: locale === 'ar' ? 'شراكة مع فنادق فاخرة في بنغالور لإقامة مريحة للمرضى' : 'Partnered with premium hotels in Bangalore for comfortable patient accommodation',
      icon: Award,
    },
    {
      year: '2023',
      title: locale === 'ar' ? 'خدمنا أكثر من 10,000 مريض' : '10,000+ Patients Served',
      description: locale === 'ar' ? 'وصلنا إلى معلم 10,000 مريض دولي مع معدل رضا 98٪' : 'Reached milestone of 10,000+ international patients with 98% satisfaction rate',
      icon: BadgeCheck,
    },
    {
      year: '2025',
      title: locale === 'ar' ? 'شبكة أكثر من 50 مستشفى' : '50+ Hospital Network',
      description: locale === 'ar' ? 'توسعنا إلى أكثر من 50 مستشفى شريك معتمد من JCI في المدن الهندية الرئيسية' : 'Expanded to 50+ JCI-accredited partner hospitals across major Indian cities',
      icon: MapPin,
    },
  ];

  return (
    <div>
      {/* Enhanced Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 px-4 py-24 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>{currentContent.hero.badge}</span>
          </div>
          <h1 className="mb-6 font-serif text-5xl font-bold md:text-6xl">
            {currentContent.hero.title}
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-primary-100 leading-relaxed">
            {currentContent.hero.description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="rounded-lg bg-white/10 px-6 py-3 backdrop-blur-sm">
              <div className="font-serif text-3xl font-bold">{locale === 'ar' ? '+10,000' : '10,000+'}</div>
              <div className="text-sm text-primary-200">{currentContent.hero.stats.patients}</div>
            </div>
            <div className="rounded-lg bg-white/10 px-6 py-3 backdrop-blur-sm">
              <div className="font-serif text-3xl font-bold">{locale === 'ar' ? '12 سنة' : '12 Years'}</div>
              <div className="text-sm text-primary-200">{currentContent.hero.stats.experience}</div>
            </div>
            <div className="rounded-lg bg-white/10 px-6 py-3 backdrop-blur-sm">
              <div className="font-serif text-3xl font-bold">{locale === 'ar' ? '%98' : '98%'}</div>
              <div className="text-sm text-primary-200">{currentContent.hero.stats.satisfaction}</div>
            </div>
          </div>
        </div>
      </section>

      {/* GCC Advantages - Prominent Section */}
      <section className="border-b-2 border-primary-100 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 px-4 py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700">
              <Languages className="h-4 w-4" />
              {currentContent.gccSection.badge}
            </div>
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
              {currentContent.gccSection.title}
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
              {currentContent.gccSection.description}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {gccAdvantages.map((advantage, index) => (
              <Card key={index} className="group border-2 border-primary-100 bg-white/90 backdrop-blur-sm transition-all hover:scale-105 hover:border-primary-300 hover:shadow-2xl">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 shadow-xl transition-all group-hover:scale-110">
                    <advantage.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-center text-xl">{advantage.title}</CardTitle>
                  <div className="mt-2 text-center">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary-100 px-3 py-1 text-xs font-bold text-primary-700">
                      <CheckCircle className="h-3 w-3" />
                      {advantage.stats}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-sm leading-relaxed text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Story - Enhanced */}
      <section className="px-4 py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="mb-6 font-serif text-4xl font-bold text-gray-900">{currentContent.missionSection.title}</h2>
              <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
            </div>

            <div className="space-y-8">
              <Card className="border-2 border-primary-100 bg-gradient-to-br from-white to-primary-50 p-8">
                {currentContent.missionSection.paragraphs.map((paragraph, index) => (
                  <p key={index} className={`text-lg leading-relaxed text-gray-700 ${index < currentContent.missionSection.paragraphs.length - 1 ? 'mb-6' : ''}`}>
                    {paragraph}
                  </p>
                ))}
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 px-4 py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
              {currentContent.journeySection.title}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              {currentContent.journeySection.subtitle}
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="relative space-y-8">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-primary-500 to-primary-300 md:left-1/2" />

              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1" />
                  <div className="relative z-10 mx-8 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 shadow-xl">
                    <milestone.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <Card className="border-2 border-primary-200 bg-white/90 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl">
                      <CardHeader>
                        <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-sm font-bold text-primary-700">
                          <Clock className="h-3 w-3" />
                          {milestone.year}
                        </div>
                        <CardTitle className="text-xl">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Shifa AlHind - Enhanced */}
      <section className="px-4 py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center font-serif text-4xl font-bold text-gray-900">
              {currentContent.whyChooseSection.title}
            </h2>
            <div className="space-y-10">
              {/* Deep Network of Premier Hospitals */}
              <Card className="border-2 border-primary-100 bg-gradient-to-br from-white to-blue-50 p-8 transition-all hover:shadow-2xl">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600">
                    <Award className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-gray-900">{currentContent.whyChooseSection.reasons[0].title}</h3>
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                  {currentContent.whyChooseSection.reasons[0].content}
                </p>
              </Card>

              {/* Transparent Pricing */}
              <Card className="border-2 border-primary-100 bg-gradient-to-br from-white to-green-50 p-8 transition-all hover:shadow-2xl">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600">
                    <CheckCircle className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-gray-900">{currentContent.whyChooseSection.reasons[1].title}</h3>
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                  {currentContent.whyChooseSection.reasons[1].content}
                </p>
              </Card>

              {/* End-to-End Support */}
              <Card className="border-2 border-primary-100 bg-gradient-to-br from-white to-purple-50 p-8 transition-all hover:shadow-2xl">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-600">
                    <Languages className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-gray-900">{currentContent.whyChooseSection.reasons[2].title}</h3>
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                  {currentContent.whyChooseSection.reasons[2].content}
                </p>
              </Card>

              {/* Muslim-Friendly */}
              <Card className="border-4 border-green-200 bg-gradient-to-br from-white to-green-50 p-8 transition-all hover:border-green-400 hover:shadow-2xl">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600">
                    <Heart className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-gray-900">{currentContent.whyChooseSection.reasons[3].title}</h3>
                </div>
                <p className="mb-4 text-lg font-bold leading-relaxed text-gray-900">
                  {currentContent.whyChooseSection.reasons[3].badges}
                </p>
                <p className="mb-4 text-lg leading-relaxed text-gray-700">
                  {currentContent.whyChooseSection.reasons[3].content}
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  {currentContent.whyChooseSection.reasons[3].content2}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Enhanced */}
      <section className="bg-gray-50 px-4 py-20">
        <div className="container">
          <h2 className="mb-16 text-center font-serif text-4xl font-bold text-gray-900">{currentContent.valuesSection.title}</h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="group relative overflow-hidden border-2 text-center transition-all hover:scale-105 hover:shadow-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 transition-opacity group-hover:opacity-10`} />
                <CardContent className="relative pt-8">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-200 transition-all group-hover:scale-110">
                    <value.icon className="h-10 w-10 text-primary-600" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - Enhanced */}
      <section className="px-4 py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center font-serif text-4xl font-bold text-gray-900">
              {currentContent.statsSection.title}
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-2 border-primary-100 bg-gradient-to-br from-white to-primary-50 text-center transition-all hover:scale-105 hover:shadow-2xl">
                <CardContent className="pt-8">
                  <div className="mb-4 font-serif text-6xl font-bold text-primary-600">{currentContent.statsSection.cards[0].value}</div>
                  <div className="mb-2 text-xl font-semibold text-gray-900">{currentContent.statsSection.cards[0].label}</div>
                  <div className="text-sm text-gray-600">{currentContent.statsSection.cards[0].description}</div>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent-100 bg-gradient-to-br from-white to-accent-50 text-center transition-all hover:scale-105 hover:shadow-2xl">
                <CardContent className="pt-8">
                  <div className="mb-4 font-serif text-6xl font-bold text-accent-600">{currentContent.statsSection.cards[1].value}</div>
                  <div className="mb-2 text-xl font-semibold text-gray-900">{currentContent.statsSection.cards[1].label}</div>
                  <div className="text-sm text-gray-600">{currentContent.statsSection.cards[1].description}</div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-100 bg-gradient-to-br from-white to-green-50 text-center transition-all hover:scale-105 hover:shadow-2xl">
                <CardContent className="pt-8">
                  <div className="mb-4 font-serif text-6xl font-bold text-green-600">{currentContent.statsSection.cards[2].value}</div>
                  <div className="mb-2 text-xl font-semibold text-gray-900">{currentContent.statsSection.cards[2].label}</div>
                  <div className="text-sm text-gray-600">{currentContent.statsSection.cards[2].description}</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Enhanced */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 px-4 py-20 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative text-center">
          <Heart className="mx-auto mb-6 h-16 w-16 text-primary-200" />
          <h2 className="mb-4 font-serif text-4xl font-bold">
            {currentContent.ctaSection.title}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
            {currentContent.ctaSection.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="shadow-xl">
              <Link href={`/${locale}/consultation`}>
                <Star className="mr-2 h-5 w-5" />
                {currentContent.ctaSection.buttons.consultation}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary-700">
              <Link href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                {currentContent.ctaSection.buttons.whatsapp}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

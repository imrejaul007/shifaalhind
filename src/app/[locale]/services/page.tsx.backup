import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Medical Tourism Services - End-to-End Support | Shifa Al Hind',
  description: 'Complete medical tourism services: Free consultation, hospital selection, visa assistance, travel arrangements, 24/7 support. Native Arabic speakers who lived in GCC.',
  keywords: [
    'medical tourism services',
    'medical travel services India',
    'healthcare tourism package',
    'medical tourism coordinator',
    'India medical travel support',
    'medical tourism UAE',
    'Arabic medical translator GCC',
    'خدمات السياحة الطبية',
    'خدمات السفر الطبي',
    'دعم السياحة العلاجية',
    'مترجم عربي طبي',
  ],
  openGraph: {
    title: 'Complete Medical Tourism Services - End-to-End Support',
    description: 'Free consultation, hospital selection, travel arrangements, 24/7 support. Native Arabic speakers who lived in GCC.',
    type: 'website',
  },
};

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TabbedServices } from '@/components/services/tabbed-services';
import {
  Stethoscope,
  Plane,
  Hotel,
  FileText,
  Languages,
  CreditCard,
  Phone,
  Users,
  MapPin,
  Calendar,
  Heart,
  Shield,
  Building2 as Hospital,
  CheckCircle,
  Clock,
  Award,
  Globe,
  Star,
  MessageCircle,
  Headset,
  BadgeCheck,
  Sparkles,
  UserCheck,
} from 'lucide-react';

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // Bilingual content
  const content = {
    en: {
      hero: {
        badge: 'Trusted by 10,000+ GCC Patients Since 2013',
        title: 'Complete Medical Tourism Services',
        description: 'End-to-end support with native Arabic translators who lived in GCC',
        subtitle: 'From consultation to recovery - we handle everything so you can focus on getting better',
        cta1: 'Get Free Consultation',
        cta2: 'Call +971 50 123 4567',
      },
      gccSection: {
        badge: 'What Makes Us Different',
        title: 'Native Arabic Speakers from GCC',
        description: 'Our Arabic coordinators and translators have lived in Dubai, Riyadh, Doha, and other GCC cities. They understand your dialect, culture, and expectations perfectly.',
      },
      howItWorks: {
        title: 'How Our Service Works',
        description: 'A simple 4-step process with Arabic support at every stage',
      },
      testimonials: {
        title: 'What Our GCC Patients Say',
      },
      cta: {
        title: 'Let Our GCC-Experienced Team Help You',
        description: 'Get a free consultation with our Arabic-speaking medical coordinators who understand your needs',
        cta1: 'Book Free Consultation',
        cta2: 'Call +971 50 123 4567',
        cta3: 'WhatsApp في العربية',
      },
    },
    ar: {
      hero: {
        badge: 'موثوق من قبل أكثر من 10,000 مريض من دول الخليج منذ 2013',
        title: 'خدمات سياحة علاجية شاملة',
        description: 'دعم شامل من البداية إلى النهاية مع مترجمين عرب أصليين عاشوا في دول الخليج',
        subtitle: 'من الاستشارة إلى التعافي - نحن نتعامل مع كل شيء حتى تتمكن من التركيز على التحسن',
        cta1: 'احصل على استشارة مجانية',
        cta2: 'اتصل +971 50 123 4567',
      },
      gccSection: {
        badge: 'ما يجعلنا مختلفين',
        title: 'متحدثون عرب أصليون من دول الخليج',
        description: 'منسقونا ومترجمونا العرب عاشوا في دبي والرياض والدوحة ومدن خليجية أخرى. إنهم يفهمون لهجتك وثقافتك وتوقعاتك تمامًا.',
      },
      howItWorks: {
        title: 'كيف تعمل خدمتنا',
        description: 'عملية بسيطة من 4 خطوات مع دعم عربي في كل مرحلة',
      },
      testimonials: {
        title: 'ماذا يقول مرضانا من دول الخليج',
      },
      cta: {
        title: 'دع فريقنا ذو الخبرة الخليجية يساعدك',
        description: 'احصل على استشارة مجانية مع منسقينا الطبيين الناطقين بالعربية الذين يفهمون احتياجاتك',
        cta1: 'احجز استشارة مجانية',
        cta2: 'اتصل +971 50 123 4567',
        cta3: 'واتساب بالعربية',
      },
    },
  };

  const currentContent = content[locale as 'en' | 'ar'];

  // GCC Features - bilingual data arrays
  const gccFeatures = [
    {
      icon: MessageCircle,
      title: locale === 'ar' ? 'متحدثون عرب أصليون' : 'Native Arabic Speakers',
      description:
        locale === 'ar'
          ? 'فريقنا يضم متحدثين عرب أصليين عاشوا وعملوا في دول مجلس التعاون الخليجي'
          : 'Our team includes native Arabic speakers who have lived and worked in GCC countries',
      detail:
        locale === 'ar'
          ? 'نفهم اللهجات الإماراتية والسعودية والقطرية والكويتية بشكل مثالي'
          : 'We understand Emirates, Saudi, Qatari, and Kuwaiti dialects perfectly',
    },
    {
      icon: UserCheck,
      title: locale === 'ar' ? 'فهم ثقافي عميق' : 'Cultural Understanding',
      description:
        locale === 'ar'
          ? 'أعضاء الفريق مع 5-10+ سنوات من الخبرة في دول الخليج'
          : 'Team members with 5-10+ years of GCC experience',
      detail:
        locale === 'ar'
          ? 'على دراية بالثقافة والعادات والتوقعات الصحية الإماراتية والسعودية والخليجية'
          : 'Familiar with Emirati, Saudi, and Gulf culture, customs, and healthcare expectations',
    },
    {
      icon: Headset,
      title: locale === 'ar' ? '100% طعام حلال ومساجد قريبة' : '100% Halal Food & Nearby Mosques',
      description:
        locale === 'ar'
          ? '✅ وجبات حلال معتمدة (مأكولات عربية وهندية) | ✅ مساجد على بعد 5-10 دقائق سيرًا | ✅ غرف صلاة في الفنادق مع اتجاه القبلة'
          : '✅ Certified halal meals (Arabic, Indian cuisines) | ✅ Mosques within 5-10 min walk | ✅ Prayer rooms in hotels with Qibla direction',
      detail:
        locale === 'ar'
          ? 'طبيبات للمريضات • قنوات تلفزيونية عربية • سجادات صلاة ومرافق وضوء'
          : 'Female doctors available for women patients • Arabic TV channels • Prayer mats & wudu facilities',
    },
    {
      icon: BadgeCheck,
      title: locale === 'ar' ? 'موثوق من قبل +10,000 مريض خليجي' : 'Trusted by 10,000+ GCC Patients',
      description:
        locale === 'ar'
          ? 'نخدم الإمارات والسعودية وقطر وعُمان والكويت والبحرين منذ 2013'
          : 'Serving UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain since 2013',
      detail:
        locale === 'ar'
          ? 'معدل رضا المرضى 98٪ مع تقييمات موثقة'
          : '98% patient satisfaction rate with verified reviews',
    },
  ];

  // Process Steps - bilingual
  const processSteps = [
    {
      step: '1',
      title: locale === 'ar' ? 'استشارة مجانية' : 'Free Consultation',
      description:
        locale === 'ar'
          ? 'شارك تقاريرك الطبية عبر الواتساب أو البريد الإلكتروني. احصل على مراجعة خبير في غضون 24 ساعة.'
          : 'Share your medical reports via WhatsApp or email. Get expert review within 24 hours.',
      timeline: locale === 'ar' ? 'اليوم 1-2' : 'Day 1-2',
      icon: FileText,
    },
    {
      step: '2',
      title: locale === 'ar' ? 'التخطيط والحجز' : 'Planning & Booking',
      description:
        locale === 'ar'
          ? 'نقوم بترتيب مواعيد المستشفى والرحلات وخطابات التأشيرة والإقامة.'
          : 'We arrange hospital appointments, flights, visa letters, and accommodation.',
      timeline: locale === 'ar' ? 'اليوم 3-7' : 'Day 3-7',
      icon: Calendar,
    },
    {
      step: '3',
      title: locale === 'ar' ? 'الوصول والعلاج' : 'Arrival & Treatment',
      description:
        locale === 'ar'
          ? 'استقبال من المطار بواسطة منسق عربي، القبول في المستشفى، ودعم على مدار الساعة.'
          : 'Airport pickup by Arabic coordinator, hospital admission, and 24/7 support.',
      timeline: locale === 'ar' ? 'اليوم 8-21' : 'Day 8-21',
      icon: Hospital,
    },
    {
      step: '4',
      title: locale === 'ar' ? 'التعافي والمتابعة' : 'Recovery & Follow-up',
      description:
        locale === 'ar'
          ? 'رعاية ما بعد العلاج، ترتيبات العودة، ومتابعات طبية عن بعد.'
          : 'Post-treatment care, return arrangements, and telemedicine follow-ups.',
      timeline: locale === 'ar' ? 'اليوم 22+' : 'Day 22+',
      icon: Heart,
    },
  ];

  // Testimonials - bilingual
  const testimonials = [
    {
      name: locale === 'ar' ? 'أحمد المنصوري' : 'Ahmed Al-Mansouri',
      location: locale === 'ar' ? 'دبي، الإمارات - جراحة القلب' : 'Dubai, UAE - Heart Surgery',
      text:
        locale === 'ar'
          ? 'المنسقة العربية التي استقبلتنا من المطار جعلتنا نشعر بأننا في بيتنا على الفور. لقد عاشت في دبي لمدة 8 سنوات وفهمت بالضبط ما نحتاجه. وفرت 310,000 درهم إماراتي!'
          : 'The Arabic coordinator who picked us up from the airport made us feel at home immediately. She had lived in Dubai for 8 years and understood exactly what we needed. Saved $85,000!',
    },
    {
      name: locale === 'ar' ? 'فاطمة الدوسري' : 'Fatima Al-Dosari',
      location: locale === 'ar' ? 'الرياض، السعودية - علاج أطفال الأنابيب' : 'Riyadh, Saudi Arabia - IVF Treatment',
      text:
        locale === 'ar'
          ? 'وجود متحدثة عربية سعودية تفهم ثقافتنا أحدث فرقًا كبيرًا. رتبت وجبات حلال، أوقات الصلاة، وحتى ساعدت زوجي في الحصول على شرائح SIM محلية.'
          : 'Having a Saudi Arabic speaker who understood our culture made such a difference. She arranged halal meals, prayer times, and even helped my husband with local SIM cards.',
    },
    {
      name: locale === 'ar' ? 'محمد الثاني' : 'Mohammed Al-Thani',
      location: locale === 'ar' ? 'الدوحة، قطر - استبدال الركبة' : 'Doha, Qatar - Knee Replacement',
      text:
        locale === 'ar'
          ? 'من أول رسالة واتساب إلى مكالمات المتابعة بعد عودتي إلى قطر، كان كل شيء بالعربية المثالية. الفريق يعرف ثقافة الخليج من الداخل والخارج.'
          : 'From the first WhatsApp message to the follow-up calls after I returned to Qatar, everything was in perfect Arabic. The team knows Gulf culture inside out.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 px-4 py-20 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>{currentContent.hero.badge}</span>
          </div>
          <h1 className="mb-6 font-serif text-4xl font-bold md:text-6xl">{currentContent.hero.title}</h1>
          <p className="mx-auto mb-4 max-w-3xl text-xl text-primary-100">{currentContent.hero.description}</p>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-200">{currentContent.hero.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="shadow-xl">
              <Link href="/consultation">
                <Star className="mr-2 h-5 w-5" />
                {currentContent.hero.cta1}
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
                {currentContent.hero.cta2}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Arabic Translators - GCC Experience Section */}
      <section className="border-b-2 border-primary-100 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 px-4 py-16">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700">
              <Languages className="h-4 w-4" />
              {currentContent.gccSection.badge}
            </div>
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">{currentContent.gccSection.title}</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">{currentContent.gccSection.description}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {gccFeatures.map((feature, index) => (
              <Card
                key={index}
                className="border-2 border-primary-100 bg-white/80 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-2xl"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-center text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-center text-sm font-medium text-gray-700">{feature.description}</p>
                  <p className="text-center text-xs text-gray-500">{feature.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Services - Pre/During/Post Treatment */}
      <TabbedServices locale={locale} />

      {/* How It Works - Enhanced */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">{currentContent.howItWorks.title}</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">{currentContent.howItWorks.description}</p>
          </div>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="mb-6 flex justify-center">
                  <div className="relative flex h-24 w-24 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 opacity-20 blur-xl" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 shadow-xl">
                      <item.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                </div>
                <div className="mb-2 text-center">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1 text-sm font-bold text-primary-700">
                    <Clock className="h-3 w-3" />
                    {item.timeline}
                  </span>
                </div>
                <h3 className="mb-3 text-center text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-center text-gray-600">{item.description}</p>
                {index < processSteps.length - 1 && (
                  <div
                    className="absolute right-0 top-12 hidden h-1 w-full bg-gradient-to-r from-primary-200 to-transparent lg:block"
                    style={{ width: 'calc(100% - 6rem)' }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">{currentContent.testimonials.title}</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-primary-100 bg-gradient-to-br from-white to-primary-50">
                <CardHeader>
                  <div className="mb-2 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="italic text-gray-700">&quot;{testimonial.text}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 px-4 py-20 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative mx-auto text-center">
          <Heart className="mx-auto mb-6 h-16 w-16 text-primary-200" />
          <h2 className="mb-4 font-serif text-4xl font-bold">{currentContent.cta.title}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">{currentContent.cta.description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="shadow-xl">
              <Link href="/booking">
                <CheckCircle className="mr-2 h-5 w-5" />
                {currentContent.cta.cta1}
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
                {currentContent.cta.cta2}
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
                {currentContent.cta.cta3}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

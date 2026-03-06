import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return generateSEOMetadata({
    title_en: 'JCI-Accredited Partner Hospitals in India | World-Class Healthcare',
    title_ar: 'المستشفيات الشريكة المعتمدة من JCI في الهند | رعاية صحية عالمية المستوى',
    description_en: 'Browse 40+ JCI/NABH accredited hospitals in Bangalore and across India. World-class medical facilities with international patient services, Arabic-speaking coordinators, and accommodation at Pentouz Hotels. Save 60-80% on treatments.',
    description_ar: 'تصفح أكثر من 40 مستشفى معتمد من JCI/NABH في بنغالور وعبر الهند. مرافق طبية عالمية المستوى مع خدمات المرضى الدوليين، منسقين ناطقين بالعربية، وإقامة في فنادق بينتوز. وفر 60-80٪ على العلاجات.',
    locale,
    path: '/hospitals',
  });
}

export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Building2, Award, MapPin, Phone, CheckCircle, Star, Users, Sparkles,
  Globe, Heart, Bed, TrendingDown, MessageCircle, Clock, Hotel
} from 'lucide-react';

export default async function HospitalsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const hospitals = await prisma.hospital.findMany({
    where: { published: true },
    include: {
      city: {
        include: {
          country: true,
        },
      },
      doctors: true,
    },
    orderBy: [
      { featured: 'desc' },
      { rating: 'desc' },
    ],
  });

  // Filter hospitals by city for highlighting
  const bangaloreHospitals = hospitals.filter(h => h.city.slug === 'bangalore');

  // Bilingual content
  const content = {
    en: {
      hero: {
        badge: '40+ JCI/NABH Accredited Hospitals | Focus on Bangalore',
        title: 'World-Class Partner Hospitals',
        subtitle: 'JCI-accredited hospitals in Bangalore with cutting-edge technology, international patient services, and accommodation at Pentouz Hotels',
        stats: [
          { label: `${hospitals.length}+`, value: 'Partner Hospitals' },
          { label: `${bangaloreHospitals.length}+`, value: 'In Bangalore' },
          { label: '40+', value: 'JCI/NABH Certified' },
          { label: '60-80%', value: 'Cost Savings' },
        ],
        buttons: {
          find: 'Find Right Hospital',
          bangalore: 'Bangalore Hospitals',
        },
      },
      features: {
        title: 'Why Our Partner Hospitals?',
        items: [
          'JCI & NABH Accredited Hospitals',
          'State-of-the-art Medical Technology',
          'Board-Certified Specialist Doctors',
          'International Patient Services',
          'Native Arabic-Speaking Coordinators',
          '24/7 Emergency Services',
        ],
      },
      testimonials: {
        badge: 'Success Stories',
        title: 'GCC Patients Love Our Hospitals',
        items: [
          {
            name: 'Abdullah Al-Hamad',
            location: 'Doha, Qatar',
            hospital: 'Narayana Health City',
            treatment: 'Heart Bypass Surgery',
            quote: 'Narayana Health City is world-class. Dr. Devi Shetty performed my surgery. The hospital has more advanced equipment than many hospitals in GCC. Saved $95,000!',
            rating: 5,
          },
          {
            name: 'Layla Al-Saud',
            location: 'Riyadh, Saudi Arabia',
            hospital: 'Manipal Hospital',
            treatment: 'Hip Replacement',
            quote: 'Manipal Hospital Bangalore is outstanding. JCI-accredited with robotic surgery. The Arabic coordinator arranged everything including halal food. Highly recommend!',
            rating: 5,
          },
          {
            name: 'Rashid Al-Maktoum',
            location: 'Dubai, UAE',
            hospital: 'Apollo Hospital',
            treatment: 'Cancer Treatment',
            quote: 'Apollo Hospital has Proton Therapy, the most advanced cancer treatment. Stayed at Pentouz Hotels nearby - very comfortable. Saved $120,000 vs USA. Best decision!',
            rating: 5,
          },
        ],
      },
      bangalore: {
        badge: "India's Medical Tourism Capital",
        title: 'Best Hospitals in Bangalore',
        subtitle: "Bangalore (Bengaluru) is India's premier medical tourism destination with world-class hospitals, expert doctors, best weather year-round, and comfortable accommodation at Pentouz Hotels.",
        benefits: [
          {
            title: 'JCI-Accredited',
            description: '10+ JCI/NABH certified hospitals with international standards',
          },
          {
            title: 'World-Class Care',
            description: 'Cutting-edge technology including robotic surgery and Proton Therapy',
          },
          {
            title: 'Pentouz Hotels',
            description: 'Premium accommodation near hospitals with all amenities',
          },
          {
            title: 'Best Weather',
            description: '15-30°C year-round - perfect for recovery and tourism',
          },
        ],
        pentouz: {
          title: 'Accommodation at Pentouz Hotels',
          subtitle: 'Premium comfort during your medical journey in Bangalore',
          features: [
            { text: 'Near Major Hospitals', detail: 'Easy access to all our partner hospitals' },
            { text: 'Family-Friendly Rooms', detail: 'Spacious rooms with all modern amenities' },
            { text: 'Halal Food Available', detail: 'Multi-cuisine restaurant with halal options' },
          ],
          button: 'Visit Pentouz Hotels →',
        },
        showing: (shown: number, total: number) => `Showing ${shown} of ${total} hospitals in Bangalore`,
        labels: {
          featured: '⭐ Featured',
          topSpecialties: 'Top Specialties:',
          expertDoctors: 'Expert Doctors',
          viewDetails: 'View Details',
        },
      },
      allHospitals: {
        title: (count: number) => `All Partner Hospitals (${count})`,
        subtitle: 'Browse our complete network of JCI/NABH accredited hospitals across India',
        empty: {
          title: 'No hospitals available yet',
          subtitle: 'Check back soon for our partner hospitals',
          button: 'Contact Us',
        },
        labels: {
          bangalore: 'Bangalore',
          specialties: 'Specialties:',
          viewDetails: 'View Details',
        },
      },
      cta: {
        title: 'Find the Perfect Hospital for Your Treatment',
        subtitle: 'Our medical experts and native Arabic coordinators (from Dubai & Riyadh) will help you choose the best hospital. Available 24/7 on WhatsApp.',
        buttons: {
          selection: 'Free Hospital Selection',
          call: 'Call Now',
          whatsapp: 'WhatsApp في العربية',
        },
      },
    },
    ar: {
      hero: {
        badge: '40+ مستشفى معتمد من JCI/NABH | التركيز على بنغالور',
        title: 'مستشفيات شريكة عالمية المستوى',
        subtitle: 'مستشفيات معتمدة من JCI في بنغالور مع تكنولوجيا متطورة، خدمات المرضى الدوليين، والإقامة في فنادق بينتوز',
        stats: [
          { label: `${hospitals.length}+`, value: 'مستشفيات شريكة' },
          { label: `${bangaloreHospitals.length}+`, value: 'في بنغالور' },
          { label: '40+', value: 'معتمد JCI/NABH' },
          { label: '60-80%', value: 'توفير في التكاليف' },
        ],
        buttons: {
          find: 'ابحث عن المستشفى المناسب',
          bangalore: 'مستشفيات بنغالور',
        },
      },
      features: {
        title: 'لماذا مستشفياتنا الشريكة؟',
        items: [
          'مستشفيات معتمدة من JCI و NABH',
          'تكنولوجيا طبية حديثة',
          'أطباء متخصصون معتمدون',
          'خدمات المرضى الدوليين',
          'منسقون ناطقون بالعربية',
          'خدمات طوارئ على مدار الساعة',
        ],
      },
      testimonials: {
        badge: 'قصص النجاح',
        title: 'مرضى دول الخليج يحبون مستشفياتنا',
        items: [
          {
            name: 'عبد الله الحمد',
            location: 'الدوحة، قطر',
            hospital: 'Narayana Health City',
            treatment: 'جراحة القلب المفتوح',
            quote: 'نارايانا هيلث سيتي عالمي المستوى. قام الدكتور ديفي شيتي بإجراء جراحتي. المستشفى لديه معدات أكثر تطوراً من العديد من مستشفيات الخليج. وفرت 95,000 دولار!',
            rating: 5,
          },
          {
            name: 'ليلى السعود',
            location: 'الرياض، المملكة العربية السعودية',
            hospital: 'Manipal Hospital',
            treatment: 'استبدال مفصل الورك',
            quote: 'مستشفى مانيبال بنغالور متميز. معتمد من JCI مع الجراحة الروبوتية. المنسق العربي نظم كل شيء بما في ذلك الطعام الحلال. أوصي به بشدة!',
            rating: 5,
          },
          {
            name: 'راشد المكتوم',
            location: 'دبي، الإمارات العربية المتحدة',
            hospital: 'Apollo Hospital',
            treatment: 'علاج السرطان',
            quote: 'مستشفى أبولو لديه العلاج بالبروتون، أحدث علاج للسرطان. أقمت في فنادق بينتوز القريبة - مريحة جداً. وفرت 120,000 دولار مقابل أمريكا. أفضل قرار!',
            rating: 5,
          },
        ],
      },
      bangalore: {
        badge: 'عاصمة السياحة العلاجية في الهند',
        title: 'أفضل المستشفيات في بنغالور',
        subtitle: 'بنغالور (بنغالورو) هي وجهة السياحة العلاجية الرئيسية في الهند مع مستشفيات عالمية المستوى، أطباء خبراء، أفضل طقس على مدار العام، وإقامة مريحة في فنادق بينتوز.',
        benefits: [
          {
            title: 'معتمد من JCI',
            description: 'أكثر من 10 مستشفيات معتمدة من JCI/NABH بمعايير دولية',
          },
          {
            title: 'رعاية عالمية المستوى',
            description: 'تكنولوجيا متطورة بما في ذلك الجراحة الروبوتية والعلاج بالبروتون',
          },
          {
            title: 'فنادق بينتوز',
            description: 'إقامة فاخرة بالقرب من المستشفيات مع جميع وسائل الراحة',
          },
          {
            title: 'أفضل طقس',
            description: '15-30 درجة مئوية على مدار العام - مثالي للتعافي والسياحة',
          },
        ],
        pentouz: {
          title: 'الإقامة في فنادق بينتوز',
          subtitle: 'راحة فاخرة خلال رحلتك العلاجية في بنغالور',
          features: [
            { text: 'بالقرب من المستشفيات الرئيسية', detail: 'سهولة الوصول إلى جميع مستشفياتنا الشريكة' },
            { text: 'غرف مناسبة للعائلات', detail: 'غرف واسعة مع جميع وسائل الراحة الحديثة' },
            { text: 'طعام حلال متوفر', detail: 'مطعم متعدد المأكولات مع خيارات حلال' },
          ],
          button: 'زيارة فنادق بينتوز ←',
        },
        showing: (shown: number, total: number) => `عرض ${shown} من ${total} مستشفى في بنغالور`,
        labels: {
          featured: '⭐ مميز',
          topSpecialties: 'التخصصات الرئيسية:',
          expertDoctors: 'أطباء خبراء',
          viewDetails: 'عرض التفاصيل',
        },
      },
      allHospitals: {
        title: (count: number) => `جميع المستشفيات الشريكة (${count})`,
        subtitle: 'تصفح شبكتنا الكاملة من المستشفيات المعتمدة من JCI/NABH عبر الهند',
        empty: {
          title: 'لا توجد مستشفيات متاحة حتى الآن',
          subtitle: 'تحقق مرة أخرى قريباً للحصول على مستشفياتنا الشريكة',
          button: 'اتصل بنا',
        },
        labels: {
          bangalore: 'بنغالور',
          specialties: 'التخصصات:',
          viewDetails: 'عرض التفاصيل',
        },
      },
      cta: {
        title: 'ابحث عن المستشفى المثالي لعلاجك',
        subtitle: 'سيساعدك خبراؤنا الطبيون والمنسقون الناطقون بالعربية (من دبي والرياض) في اختيار أفضل مستشفى. متاحون على مدار الساعة طوال أيام الأسبوع على واتساب.',
        buttons: {
          selection: 'اختيار مستشفى مجاني',
          call: 'اتصل الآن',
          whatsapp: 'واتساب in English',
        },
      },
    },
  };

  const t = content[locale as 'en' | 'ar'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 px-4 py-20 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>{t.hero.badge}</span>
          </div>
          <h1 className="mb-6 font-serif text-4xl font-bold md:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-primary-100">
            {t.hero.subtitle}
          </p>

          {/* Stats */}
          <div className="mx-auto mb-8 grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
            {t.hero.stats.map((stat, idx) => (
              <div key={idx} className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                {idx === 0 && <Building2 className="mx-auto mb-2 h-6 w-6" />}
                {idx === 1 && <MapPin className="mx-auto mb-2 h-6 w-6" />}
                {idx === 2 && <Award className="mx-auto mb-2 h-6 w-6" />}
                {idx === 3 && <TrendingDown className="mx-auto mb-2 h-6 w-6" />}
                <p className="mb-1 text-lg font-bold">{stat.label}</p>
                <p className="text-sm text-primary-100">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="shadow-xl">
              <Link href="/consultation">{t.hero.buttons.find}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
              <Link href="#bangalore-hospitals">
                <MapPin className="mr-2 h-5 w-5" />
                {t.hero.buttons.bangalore}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b-2 border-primary-100 bg-white px-4 py-12">
        <div className="container mx-auto">
          <div className="mb-8 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900">
              {t.features.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.features.items.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 rounded-lg border-2 border-primary-100 bg-gradient-to-br from-white to-primary-50 p-4 transition-all hover:scale-105 hover:border-primary-300 hover:shadow-lg">
                <CheckCircle className="h-6 w-6 shrink-0 text-green-600" />
                <span className="font-medium text-gray-900">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GCC Patient Testimonials */}
      <section className="border-b-2 border-primary-100 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 px-4 py-16">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700">
              <Users className="h-4 w-4" />
              {t.testimonials.badge}
            </div>
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
              {t.testimonials.title}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {t.testimonials.items.map((testimonial, idx) => (
              <Card key={idx} className="border-2 border-primary-100 bg-gradient-to-br from-white to-primary-50 transition-all hover:scale-105 hover:shadow-2xl">
                <CardHeader>
                  <div className="mb-2 flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription className="space-y-1">
                    <div className="flex items-center gap-1 text-xs">
                      <Globe className="h-3 w-3" />
                      {testimonial.location}
                    </div>
                    <div className="text-xs font-semibold text-primary-600">
                      {testimonial.hospital} • {testimonial.treatment}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm italic text-gray-700">&quot;{testimonial.quote}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bangalore Hospitals Highlight */}
      {bangaloreHospitals.length > 0 && (
        <section id="bangalore-hospitals" className="bg-white px-4 py-16">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                <MapPin className="h-4 w-4" />
                {t.bangalore.badge}
              </div>
              <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
                {t.bangalore.title}
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                {t.bangalore.subtitle}
              </p>
            </div>

            {/* Bangalore Benefits */}
            <div className="mb-12 grid gap-6 md:grid-cols-4">
              {t.bangalore.benefits.map((benefit, idx) => (
                <Card key={idx} className="border-2 border-green-100 bg-gradient-to-br from-white to-green-50 text-center transition-all hover:scale-105 hover:shadow-xl">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg">
                      {idx === 0 && <Award className="h-8 w-8 text-white" />}
                      {idx === 1 && <Heart className="h-8 w-8 text-white" />}
                      {idx === 2 && <Hotel className="h-8 w-8 text-white" />}
                      {idx === 3 && <Globe className="h-8 w-8 text-white" />}
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    <CardDescription className="text-sm">{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Pentouz Hotels Info */}
            <Card className="mb-12 border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-xl">
                    <Hotel className="h-10 w-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl">{t.bangalore.pentouz.title}</CardTitle>
                    <CardDescription className="text-base">
                      {t.bangalore.pentouz.subtitle}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  {t.bangalore.pentouz.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-3 rounded-lg bg-white/70 p-4">
                      {idx === 0 && <MapPin className="h-6 w-6 shrink-0 text-orange-600" />}
                      {idx === 1 && <Bed className="h-6 w-6 shrink-0 text-orange-600" />}
                      {idx === 2 && <CheckCircle className="h-6 w-6 shrink-0 text-orange-600" />}
                      <div>
                        <p className="font-semibold text-gray-900">{feature.text}</p>
                        <p className="text-sm text-gray-600">{feature.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button asChild size="lg" variant="default" className="bg-orange-600 hover:bg-orange-700">
                    <Link href="https://pentouz.com/" target="_blank" rel="noopener noreferrer">
                      <Hotel className="mr-2 h-5 w-5" />
                      {t.bangalore.pentouz.button}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Bangalore Hospitals Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {bangaloreHospitals.map((hospital) => (
                <Card key={hospital.id} className="group border-2 border-green-100 bg-white transition-all hover:scale-105 hover:border-green-300 hover:shadow-2xl">
                  <CardHeader>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg transition-all group-hover:scale-110">
                        <Building2 className="h-8 w-8 text-white" />
                      </div>
                      {hospital.featured && (
                        <div className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                          {t.bangalore.labels.featured}
                        </div>
                      )}
                    </div>
                    <CardTitle className="text-xl">{locale === 'ar' ? hospital.name_ar : hospital.name_en}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {locale === 'ar' ? hospital.city.name_ar : hospital.city.name_en}, India
                    </CardDescription>
                    {hospital.rating && (
                      <div className="mt-2 flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{hospital.rating}/5</span>
                        <span className="text-gray-500">({hospital.reviewCount} reviews)</span>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {hospital.accreditations.length > 0 && (
                      <div className="flex flex-wrap items-center gap-2">
                        <Award className="h-4 w-4 text-green-600" />
                        {hospital.accreditations.map((accreditation, idx) => (
                          <span key={idx} className="rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-700">
                            {accreditation}
                          </span>
                        ))}
                      </div>
                    )}

                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-gray-900">
                        {t.bangalore.labels.topSpecialties}
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {hospital.specialties.slice(0, 4).map((specialty, idx) => (
                          <span
                            key={idx}
                            className="rounded-full bg-green-50 px-2 py-1 text-xs text-green-700"
                          >
                            {specialty}
                          </span>
                        ))}
                        {hospital.specialties.length > 4 && (
                          <span className="rounded-full bg-green-50 px-2 py-1 text-xs text-green-700">
                            +{hospital.specialties.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {hospital.doctors.length > 0 && (
                      <div className="rounded-lg bg-green-50 p-3">
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold text-green-700">{hospital.doctors.length}</span> {t.bangalore.labels.expertDoctors}
                        </p>
                      </div>
                    )}

                    <div className="flex gap-2">
                      <Button asChild className="flex-1" size="sm">
                        <Link href={`/hospitals/${hospital.slug}`}>{t.bangalore.labels.viewDetails}</Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link href="/contact">
                          <Phone className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {bangaloreHospitals.length > 6 && (
              <div className="mt-8 text-center">
                <p className="mb-4 text-gray-600">
                  {t.bangalore.showing(Math.min(6, bangaloreHospitals.length), bangaloreHospitals.length)}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* All Hospitals Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
            {t.allHospitals.title(hospitals.length)}
          </h2>
          <p className="text-gray-600">
            {t.allHospitals.subtitle}
          </p>
        </div>

        {hospitals.length === 0 ? (
          <div className="py-12 text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <Building2 className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">{t.allHospitals.empty.title}</h3>
            <p className="mb-6 text-gray-600">{t.allHospitals.empty.subtitle}</p>
            <Button asChild>
              <Link href="/contact">{t.allHospitals.empty.button}</Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hospitals.map((hospital) => (
              <Card key={hospital.id} className="border-2 transition-all hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 transition-all group-hover:bg-primary-200">
                      <Building2 className="h-8 w-8 text-primary-600" />
                    </div>
                    {hospital.city.slug === 'bangalore' && (
                      <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                        <MapPin className="mr-1 inline h-3 w-3" />
                        {t.allHospitals.labels.bangalore}
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-xl">{locale === 'ar' ? hospital.name_ar : hospital.name_en}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {locale === 'ar' ? hospital.city.name_ar : hospital.city.name_en}, {locale === 'ar' ? hospital.city.country.name_ar : hospital.city.country.name_en}
                  </CardDescription>
                  {hospital.rating && (
                    <div className="mt-2 flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{hospital.rating}/5</span>
                      <span className="text-gray-500">({hospital.reviewCount} reviews)</span>
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  {hospital.accreditations.length > 0 && (
                    <div className="mb-4 flex flex-wrap items-center gap-2 text-sm">
                      <Award className="h-4 w-4 text-accent-500" />
                      {hospital.accreditations.map((accreditation, idx) => (
                        <span key={idx} className="rounded-full bg-accent-50 px-2 py-1 text-xs font-semibold text-accent-700">
                          {accreditation}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-semibold text-gray-900">{t.allHospitals.labels.specialties}</h4>
                    <div className="flex flex-wrap gap-1">
                      {hospital.specialties.slice(0, 4).map((specialty, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700"
                        >
                          {specialty}
                        </span>
                      ))}
                      {hospital.specialties.length > 4 && (
                        <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700">
                          +{hospital.specialties.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button asChild className="flex-1" size="sm">
                      <Link href={`/hospitals/${hospital.slug}`}>{t.allHospitals.labels.viewDetails}</Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/contact">
                        <Phone className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 px-4 py-16 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative mx-auto text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            {t.cta.title}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="shadow-xl">
              <Link href="/consultation">
                <CheckCircle className="mr-2 h-5 w-5" />
                {t.cta.buttons.selection}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                {t.cta.buttons.call}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
              <Link href="https://wa.me/919876543210">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t.cta.buttons.whatsapp}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

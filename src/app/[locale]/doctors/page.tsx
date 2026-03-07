import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return generateSEOMetadata({
    title_en: 'Expert Medical Doctors in India | Board-Certified Specialists',
    title_ar: 'أطباء طبيون خبراء في الهند | متخصصون معتمدون',
    description_en: 'Consult with 25+ board-certified specialist doctors in Bangalore. International training, 15-35 years experience, Arabic-speaking support. Expert care in cardiac, orthopedic, oncology, IVF, neurosurgery, and more.',
    description_ar: 'استشر مع أكثر من 25 طبيباً متخصصاً معتمداً في بنغالور. تدريب دولي، خبرة 15-35 عاماً، دعم ناطق بالعربية. رعاية متخصصة في القلب والعظام والأورام وأطفال الأنابيب وجراحة الأعصاب والمزيد.',
    locale,
    path: '/doctors',
  });
}

export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  User, Award, GraduationCap, Languages, CheckCircle, Star, Briefcase,
  MapPin, Phone, MessageCircle, Globe, Users, Sparkles, Building2
} from 'lucide-react';

export default async function DoctorsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const doctors = await prisma.doctor.findMany({
    where: { published: true },
    include: {
      hospital: {
        include: {
          city: {
            include: {
              country: true,
            },
          },
        },
      },
    },
    orderBy: [
      { featured: 'desc' },
      { rating: 'desc' },
    ],
  });

  // Filter doctors by city for highlighting
  const bangaloreDoctors = doctors.filter(d => d.hospital.city.slug === 'bangalore');
  const arabicSpeakingDoctors = doctors.filter(d => d.languages.includes('Arabic'));

  // Bilingual content
  const content = {
    en: {
      hero: {
        badge: '25+ Expert Doctors in Bangalore | Arabic-Speaking Team',
        title: 'World-Class Medical Experts',
        subtitle: 'Board-certified specialists with international training, decades of experience, and Arabic-speaking support for GCC patients',
        stats: [
          { label: `${doctors.length}+`, value: 'Expert Doctors' },
          { label: `${arabicSpeakingDoctors.length}+`, value: 'Arabic Speaking' },
          { label: '15-35 Years', value: 'Experience' },
          { label: 'JCI/NABH', value: 'Accredited' },
        ],
        buttons: {
          book: 'Book Free Consultation',
          arabic: 'Arabic-Speaking Doctors',
        },
      },
      whyDoctors: {
        badge: 'Why Choose Our Doctors?',
        title: 'Trusted by 10,000+ GCC Patients',
        benefits: [
          {
            title: 'International Qualifications',
            description: 'MBBS, MS, MCh, DM degrees from top Indian & international medical colleges',
          },
          {
            title: '15-35 Years Experience',
            description: 'Senior consultants with thousands of successful surgeries and procedures',
          },
          {
            title: 'Multi-lingual Support',
            description: 'Doctors speak English, Hindi, and work with native Arabic coordinators from GCC',
          },
          {
            title: 'Patient-Centric Care',
            description: 'Personalized treatment plans, second opinions, and 24/7 support',
          },
        ],
      },
      testimonials: {
        badge: 'Patient Reviews',
        title: 'What GCC Patients Say About Our Doctors',
        items: [
          {
            name: 'Khalid Al-Mahmoud',
            location: 'Kuwait City, Kuwait',
            doctor: 'Dr. Devi Shetty',
            treatment: 'Heart Bypass Surgery',
            quote: 'Dr. Shetty is a world-renowned cardiac surgeon. The Arabic coordinator explained everything in my language. The care was exceptional and I saved $90,000 compared to USA.',
            rating: 5,
          },
          {
            name: 'Mariam Al-Sabah',
            location: 'Abu Dhabi, UAE',
            doctor: 'Dr. Rajesh Bendre',
            treatment: 'IVF Treatment',
            quote: "Dr. Bendre and his team were incredibly compassionate. After 2 failed cycles in UAE, we succeeded in Bangalore. The Arabic-speaking team made us feel at home.",
            rating: 5,
          },
          {
            name: 'Omar Al-Ghamdi',
            location: 'Jeddah, Saudi Arabia',
            doctor: 'Dr. Anil Arora',
            treatment: 'Knee Replacement',
            quote: "Dr. Arora is one of India's best orthopedic surgeons. I was walking without pain in 2 weeks. The coordinator arranged halal food and prayer facilities. Highly recommended!",
            rating: 5,
          },
        ],
      },
      bangalore: {
        badge: 'Bangalore Medical Hub',
        title: 'Top Doctors in Bangalore',
        subtitle: "Bangalore is India's medical tourism capital with world-class hospitals and expert doctors. We work with the best specialists across all major hospitals.",
        labels: {
          topDoctor: '⭐ Top Doctor',
          qualifications: 'Qualifications:',
          consultationFee: 'Consultation Fee',
          viewProfile: 'View Full Profile',
          showing: (count: number, total: number) => `Showing ${count} of ${total} doctors in Bangalore`,
          viewAll: 'View All Bangalore Doctors',
          experience: 'years experience',
        },
      },
      arabicDoctors: {
        badge: 'For GCC Patients',
        title: 'Arabic-Speaking Medical Team',
        subtitle: 'Our doctors work with native Arabic-speaking coordinators who lived in GCC countries for 5-15 years. They understand your language, culture, and medical needs.',
        labels: {
          arabic: 'Arabic',
          coordinator: '+ Native Arabic coordinator support',
          consultationFee: 'Consultation Fee',
          viewProfile: 'View Full Profile',
          experience: 'years experience',
        },
      },
      allDoctors: {
        title: (count: number) => `All Expert Doctors (${count})`,
        subtitle: 'Browse our complete network of board-certified specialists across India',
        empty: {
          title: 'No doctors available yet',
          subtitle: 'Check back soon for our medical experts',
          button: 'Contact Us',
        },
        labels: {
          arabic: 'Arabic',
          qualifications: 'Qualifications:',
          languages: 'Languages:',
          consultationFee: 'Consultation Fee',
          viewProfile: 'View Profile',
          experience: 'years experience',
        },
      },
      cta: {
        title: 'Consult with Our Medical Experts',
        subtitle: 'Get a free consultation with our specialists. Native Arabic coordinators (from Dubai & Riyadh) available 24/7 on WhatsApp.',
        buttons: {
          consultation: 'Free Medical Consultation',
          call: 'Call Now',
          whatsapp: 'WhatsApp في العربية',
        },
      },
    },
    ar: {
      hero: {
        badge: '25+ طبيب خبير في بنغالور | فريق ناطق بالعربية',
        title: 'خبراء طبيون عالميون',
        subtitle: 'متخصصون معتمدون مع تدريب دولي، عقود من الخبرة، ودعم ناطق بالعربية لمرضى دول الخليج',
        stats: [
          { label: `${doctors.length}+`, value: 'أطباء خبراء' },
          { label: `${arabicSpeakingDoctors.length}+`, value: 'ناطقون بالعربية' },
          { label: '15-35 سنة', value: 'خبرة' },
          { label: 'JCI/NABH', value: 'معتمد' },
        ],
        buttons: {
          book: 'احجز استشارة مجانية',
          arabic: 'أطباء ناطقون بالعربية',
        },
      },
      whyDoctors: {
        badge: 'لماذا تختار أطباءنا؟',
        title: 'موثوق به من قبل أكثر من 10,000 مريض من دول الخليج',
        benefits: [
          {
            title: 'مؤهلات دولية',
            description: 'درجات MBBS و MS و MCh و DM من أفضل الكليات الطبية الهندية والدولية',
          },
          {
            title: 'خبرة 15-35 عاماً',
            description: 'استشاريون كبار مع آلاف الجراحات والإجراءات الناجحة',
          },
          {
            title: 'دعم متعدد اللغات',
            description: 'الأطباء يتحدثون الإنجليزية والهندية ويعملون مع منسقين ناطقين بالعربية من دول الخليج',
          },
          {
            title: 'رعاية محورها المريض',
            description: 'خطط علاج شخصية، آراء ثانية، ودعم على مدار الساعة',
          },
        ],
      },
      testimonials: {
        badge: 'آراء المرضى',
        title: 'ماذا يقول مرضى دول الخليج عن أطبائنا',
        items: [
          {
            name: 'خالد المحمود',
            location: 'مدينة الكويت، الكويت',
            doctor: 'د. ديفي شيتي',
            treatment: 'جراحة القلب المفتوح',
            quote: 'الدكتور شيتي جراح قلب مشهور عالمياً. المنسق العربي شرح كل شيء بلغتي. الرعاية كانت استثنائية ووفرت 90,000 دولار مقارنة بأمريكا.',
            rating: 5,
          },
          {
            name: 'مريم الصباح',
            location: 'أبو ظبي، الإمارات العربية المتحدة',
            doctor: 'د. راجيش بيندري',
            treatment: 'علاج أطفال الأنابيب',
            quote: 'الدكتور بيندري وفريقه كانوا متعاطفين بشكل لا يصدق. بعد دورتين فاشلتين في الإمارات، نجحنا في بنغالور. الفريق الناطق بالعربية جعلنا نشعر وكأننا في بيتنا.',
            rating: 5,
          },
          {
            name: 'عمر الغامدي',
            location: 'جدة، المملكة العربية السعودية',
            doctor: 'د. أنيل أرورا',
            treatment: 'استبدال مفصل الركبة',
            quote: 'الدكتور أرورا واحد من أفضل جراحي العظام في الهند. كنت أمشي بدون ألم في أسبوعين. المنسق نظم الطعام الحلال ومرافق الصلاة. أوصي به بشدة!',
            rating: 5,
          },
        ],
      },
      bangalore: {
        badge: 'مركز بنغالور الطبي',
        title: 'أفضل الأطباء في بنغالور',
        subtitle: 'بنغالور هي عاصمة السياحة العلاجية في الهند مع مستشفيات عالمية المستوى وأطباء خبراء. نحن نعمل مع أفضل المتخصصين عبر جميع المستشفيات الرئيسية.',
        labels: {
          topDoctor: '⭐ طبيب متميز',
          qualifications: 'المؤهلات:',
          consultationFee: 'رسوم الاستشارة',
          viewProfile: 'عرض الملف الكامل',
          showing: (count: number, total: number) => `عرض ${count} من ${total} طبيب في بنغالور`,
          viewAll: 'عرض جميع أطباء بنغالور',
          experience: 'سنة خبرة',
        },
      },
      arabicDoctors: {
        badge: 'لمرضى دول الخليج',
        title: 'فريق طبي ناطق بالعربية',
        subtitle: 'يعمل أطباؤنا مع منسقين ناطقين بالعربية عاشوا في دول الخليج لمدة 5-15 عاماً. إنهم يفهمون لغتك وثقافتك واحتياجاتك الطبية.',
        labels: {
          arabic: 'عربي',
          coordinator: '+ دعم منسق ناطق بالعربية',
          consultationFee: 'رسوم الاستشارة',
          viewProfile: 'عرض الملف الكامل',
          experience: 'سنة خبرة',
        },
      },
      allDoctors: {
        title: (count: number) => `جميع الأطباء الخبراء (${count})`,
        subtitle: 'تصفح شبكتنا الكاملة من المتخصصين المعتمدين عبر الهند',
        empty: {
          title: 'لا يوجد أطباء متاحون حتى الآن',
          subtitle: 'تحقق مرة أخرى قريباً للحصول على خبرائنا الطبيين',
          button: 'اتصل بنا',
        },
        labels: {
          arabic: 'عربي',
          qualifications: 'المؤهلات:',
          languages: 'اللغات:',
          consultationFee: 'رسوم الاستشارة',
          viewProfile: 'عرض الملف',
          experience: 'سنة خبرة',
        },
      },
      cta: {
        title: 'استشر مع خبرائنا الطبيين',
        subtitle: 'احصل على استشارة مجانية مع متخصصينا. منسقون ناطقون بالعربية (من دبي والرياض) متاحون على مدار الساعة طوال أيام الأسبوع على واتساب.',
        buttons: {
          consultation: 'استشارة طبية مجانية',
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
                {idx === 0 && <Users className="mx-auto mb-2 h-6 w-6" />}
                {idx === 1 && <Languages className="mx-auto mb-2 h-6 w-6" />}
                {idx === 2 && <Award className="mx-auto mb-2 h-6 w-6" />}
                {idx === 3 && <Building2 className="mx-auto mb-2 h-6 w-6" />}
                <p className="mb-1 text-lg font-bold">{stat.label}</p>
                <p className="text-sm text-primary-100">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="shadow-xl">
              <Link href="/consultation">{t.hero.buttons.book}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
              <Link href="#arabic-doctors">
                <Languages className="mr-2 h-5 w-5" />
                {t.hero.buttons.arabic}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Our Doctors */}
      <section className="border-b-2 border-primary-100 bg-white px-4 py-16">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700">
              <Award className="h-4 w-4" />
              {t.whyDoctors.badge}
            </div>
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
              {t.whyDoctors.title}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {t.whyDoctors.benefits.map((item, index) => (
              <Card key={index} className="group border-2 transition-all hover:scale-105 hover:border-primary-300 hover:shadow-xl">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg transition-all group-hover:scale-110">
                    {index === 0 && <GraduationCap className="h-8 w-8 text-white" />}
                    {index === 1 && <Briefcase className="h-8 w-8 text-white" />}
                    {index === 2 && <Languages className="h-8 w-8 text-white" />}
                    {index === 3 && <CheckCircle className="h-8 w-8 text-white" />}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                </CardHeader>
              </Card>
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
                      {testimonial.doctor} • {testimonial.treatment}
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

      {/* Bangalore Doctors Highlight */}
      {bangaloreDoctors.length > 0 && (
        <section className="bg-white px-4 py-16">
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

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {bangaloreDoctors.slice(0, 6).map((doctor) => (
                <Card key={doctor.id} className="group border-2 border-green-100 bg-white transition-all hover:scale-105 hover:border-green-300 hover:shadow-2xl">
                  <CardHeader>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg transition-all group-hover:scale-110">
                        <User className="h-10 w-10 text-white" />
                      </div>
                      {doctor.featured && (
                        <div className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                          {t.bangalore.labels.topDoctor}
                        </div>
                      )}
                    </div>
                    <CardTitle className="text-xl">
                      {doctor.title_en} {locale === 'ar' ? doctor.name_ar : doctor.name_en}
                    </CardTitle>
                    <CardDescription>{doctor.specialties.join(', ')}</CardDescription>
                    {doctor.rating && (
                      <div className="mt-2 flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{doctor.rating}/5</span>
                        <span className="text-gray-500">({doctor.reviewCount} reviews)</span>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="mb-1 flex items-center gap-2 text-sm font-semibold text-gray-900">
                        <Building2 className="h-4 w-4 text-green-600" />
                        {locale === 'ar' ? doctor.hospital.name_ar : doctor.hospital.name_en}
                      </div>
                      <p className="text-sm text-gray-600">
                        {locale === 'ar' ? doctor.hospital.city.name_ar : doctor.hospital.city.name_en}, India
                      </p>
                      {doctor.experience && (
                        <div className="mt-1 flex items-center gap-1 text-sm text-gray-600">
                          <Briefcase className="h-3 w-3" />
                          <span>{doctor.experience}+ {t.bangalore.labels.experience}</span>
                        </div>
                      )}
                    </div>

                    {doctor.qualifications.length > 0 && (
                      <div>
                        <h4 className="mb-2 text-sm font-semibold text-gray-900">{t.bangalore.labels.qualifications}</h4>
                        <div className="flex flex-wrap gap-1">
                          {doctor.qualifications.slice(0, 2).map((qual, idx) => (
                            <span
                              key={idx}
                              className="rounded-full bg-green-50 px-2 py-1 text-xs text-green-700"
                            >
                              {qual}
                            </span>
                          ))}
                          {doctor.qualifications.length > 2 && (
                            <span className="rounded-full bg-green-50 px-2 py-1 text-xs text-green-700">
                              +{doctor.qualifications.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {doctor.languages.length > 0 && (
                      <div className="flex items-center gap-2 text-sm">
                        <Languages className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600">{doctor.languages.join(', ')}</span>
                      </div>
                    )}

                    {doctor.consultationFee && (
                      <div className="rounded-lg bg-green-50 p-3 text-center">
                        <p className="text-xs text-gray-600">{t.bangalore.labels.consultationFee}</p>
                        <p className="text-lg font-bold text-green-700">${doctor.consultationFee}</p>
                      </div>
                    )}

                    <Button asChild className="w-full">
                      <Link href={`/doctors/${doctor.slug}`}>{t.bangalore.labels.viewProfile}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {bangaloreDoctors.length > 6 && (
              <div className="mt-8 text-center">
                <p className="mb-4 text-gray-600">
                  {t.bangalore.labels.showing(6, bangaloreDoctors.length)}
                </p>
                <Button asChild variant="outline" size="lg">
                  <Link href="#all-doctors">{t.bangalore.labels.viewAll}</Link>
                </Button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Arabic-Speaking Doctors */}
      {arabicSpeakingDoctors.length > 0 && (
        <section id="arabic-doctors" className="border-b-2 border-primary-100 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 px-4 py-16">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
                <Languages className="h-4 w-4" />
                {t.arabicDoctors.badge}
              </div>
              <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
                {t.arabicDoctors.title}
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                {t.arabicDoctors.subtitle}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {arabicSpeakingDoctors.map((doctor) => (
                <Card key={doctor.id} className="group border-2 border-orange-100 bg-white transition-all hover:scale-105 hover:border-orange-300 hover:shadow-2xl">
                  <CardHeader>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg transition-all group-hover:scale-110">
                        <User className="h-10 w-10 text-white" />
                      </div>
                      <div className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                        <Languages className="mr-1 inline h-3 w-3" />
                        {t.arabicDoctors.labels.arabic}
                      </div>
                    </div>
                    <CardTitle className="text-xl">
                      {doctor.title_en} {locale === 'ar' ? doctor.name_ar : doctor.name_en}
                    </CardTitle>
                    <CardDescription>{doctor.specialties.join(', ')}</CardDescription>
                    {doctor.rating && (
                      <div className="mt-2 flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{doctor.rating}/5</span>
                        <span className="text-gray-500">({doctor.reviewCount} reviews)</span>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="mb-1 text-sm font-semibold text-gray-900">
                        {locale === 'ar' ? doctor.hospital.name_ar : doctor.hospital.name_en}
                      </p>
                      <p className="text-sm text-gray-600">
                        {locale === 'ar' ? doctor.hospital.city.name_ar : doctor.hospital.city.name_en}, {locale === 'ar' ? doctor.hospital.city.country.name_ar : doctor.hospital.city.country.name_en}
                      </p>
                      {doctor.experience && (
                        <div className="mt-1 flex items-center gap-1 text-sm text-gray-600">
                          <Briefcase className="h-3 w-3" />
                          <span>{doctor.experience}+ {t.arabicDoctors.labels.experience}</span>
                        </div>
                      )}
                    </div>

                    {doctor.qualifications.length > 0 && (
                      <div>
                        <h4 className="mb-2 text-sm font-semibold text-gray-900">{t.allDoctors.labels.qualifications}</h4>
                        <div className="flex flex-wrap gap-1">
                          {doctor.qualifications.slice(0, 3).map((qual, idx) => (
                            <span
                              key={idx}
                              className="rounded-full bg-orange-50 px-2 py-1 text-xs text-orange-700"
                            >
                              {qual}
                            </span>
                          ))}
                          {doctor.qualifications.length > 3 && (
                            <span className="rounded-full bg-orange-50 px-2 py-1 text-xs text-orange-700">
                              +{doctor.qualifications.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="rounded-lg bg-orange-50 p-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Languages className="h-4 w-4 text-orange-600" />
                        <span className="font-semibold text-orange-900">
                          {doctor.languages.join(', ')}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-orange-700">
                        {t.arabicDoctors.labels.coordinator}
                      </p>
                    </div>

                    {doctor.consultationFee && (
                      <div className="rounded-lg bg-green-50 p-3 text-center">
                        <p className="text-xs text-gray-600">{t.arabicDoctors.labels.consultationFee}</p>
                        <p className="text-lg font-bold text-green-700">${doctor.consultationFee}</p>
                      </div>
                    )}

                    <Button asChild className="w-full">
                      <Link href={`/doctors/${doctor.slug}`}>{t.arabicDoctors.labels.viewProfile}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Doctors Grid */}
      <section id="all-doctors" className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
            {t.allDoctors.title(doctors.length)}
          </h2>
          <p className="text-gray-600">
            {t.allDoctors.subtitle}
          </p>
        </div>

        {doctors.length === 0 ? (
          <div className="py-12 text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <User className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">{t.allDoctors.empty.title}</h3>
            <p className="mb-6 text-gray-600">{t.allDoctors.empty.subtitle}</p>
            <Button asChild>
              <Link href="/contact">{t.allDoctors.empty.button}</Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor) => (
              <Card key={doctor.id} className="border-2 transition-all hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-100 transition-all group-hover:bg-primary-200">
                      <User className="h-10 w-10 text-primary-600" />
                    </div>
                    {doctor.languages.includes('Arabic') && (
                      <div className="rounded-full bg-orange-100 px-2 py-1 text-xs font-semibold text-orange-700">
                        <Languages className="mr-1 inline h-3 w-3" />
                        {t.allDoctors.labels.arabic}
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-xl">
                    {doctor.title_en} {locale === 'ar' ? doctor.name_ar : doctor.name_en}
                  </CardTitle>
                  <CardDescription>{doctor.specialties.join(', ')}</CardDescription>
                  {doctor.rating && (
                    <div className="mt-2 flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{doctor.rating}/5</span>
                      <span className="text-gray-500">({doctor.reviewCount} reviews)</span>
                    </div>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="mb-1 text-sm font-semibold text-gray-900">
                      {locale === 'ar' ? doctor.hospital.name_ar : doctor.hospital.name_en}
                    </p>
                    <p className="text-sm text-gray-600">
                      {locale === 'ar' ? doctor.hospital.city.name_ar : doctor.hospital.city.name_en}, {locale === 'ar' ? doctor.hospital.city.country.name_ar : doctor.hospital.city.country.name_en}
                    </p>
                    {doctor.experience && (
                      <div className="mt-1 flex items-center gap-1 text-sm text-gray-600">
                        <Briefcase className="h-3 w-3" />
                        <span>{doctor.experience}+ {t.allDoctors.labels.experience}</span>
                      </div>
                    )}
                  </div>

                  {doctor.qualifications.length > 0 && (
                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-gray-900">{t.allDoctors.labels.qualifications}</h4>
                      <div className="flex flex-wrap gap-1">
                        {doctor.qualifications.slice(0, 3).map((qual, idx) => (
                          <span
                            key={idx}
                            className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700"
                          >
                            {qual}
                          </span>
                        ))}
                        {doctor.qualifications.length > 3 && (
                          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700">
                            +{doctor.qualifications.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {doctor.languages.length > 0 && (
                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-gray-900">{t.allDoctors.labels.languages}</h4>
                      <p className="text-sm text-gray-600">{doctor.languages.join(', ')}</p>
                    </div>
                  )}

                  {doctor.consultationFee && (
                    <div className="rounded-lg bg-green-50 p-2 text-center">
                      <p className="text-sm text-gray-600">{t.allDoctors.labels.consultationFee}</p>
                      <p className="text-lg font-bold text-green-700">${doctor.consultationFee}</p>
                    </div>
                  )}

                  <Button asChild className="w-full">
                    <Link href={`/doctors/${doctor.slug}`}>{t.allDoctors.labels.viewProfile}</Link>
                  </Button>
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
                {t.cta.buttons.consultation}
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

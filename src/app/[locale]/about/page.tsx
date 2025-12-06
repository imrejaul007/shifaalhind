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

  const values = [
    {
      icon: Heart,
      title: 'Patient First',
      description: 'Your health and wellbeing are our top priority in every decision we make.',
      gradient: 'from-red-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced medical coordinators and healthcare professionals guiding you.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Award,
      title: 'Quality Care',
      description: 'Partner hospitals with JCI, NABH accreditations and proven track records.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving patients from UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain.',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const gccAdvantages = [
    {
      icon: Languages,
      title: 'Native Arabic Coordinators',
      description: 'Our team includes Arabic speakers who have lived in Dubai, Riyadh, Doha, and other GCC cities for 5-15 years',
      stats: '8 Arabic Team Members',
    },
    {
      icon: UserCheck,
      title: 'Cultural Expertise',
      description: 'Deep understanding of Emirati, Saudi, Qatari, and Gulf customs, expectations, and healthcare preferences',
      stats: '10+ Years GCC Experience',
    },
    {
      icon: MessageCircle,
      title: 'Perfect Dialect Match',
      description: 'We understand Emirates, Saudi, Qatari, Omani, and Kuwaiti dialects perfectly - no miscommunication',
      stats: 'All GCC Dialects',
    },
    {
      icon: Shield,
      title: 'Trusted by GCC Families',
      description: 'Recommended by patients across all 6 GCC countries with verified reviews and testimonials',
      stats: '10,000+ GCC Patients',
    },
  ];

  const milestones = [
    {
      year: '2013',
      title: 'Shifa AlHind Founded',
      description: 'Started our mission to connect GCC patients with quality Indian healthcare',
      icon: Sparkles,
    },
    {
      year: '2015',
      title: 'Arabic Team Expansion',
      description: 'Hired native Arabic speakers who lived in UAE and Saudi Arabia to better serve GCC patients',
      icon: Users,
    },
    {
      year: '2018',
      title: '5,000 Patients Milestone',
      description: 'Successfully served 5,000+ patients from across all GCC countries',
      icon: Heart,
    },
    {
      year: '2020',
      title: 'Pentouz Hotels Partnership',
      description: 'Partnered with premium hotels in Bangalore for comfortable patient accommodation',
      icon: Award,
    },
    {
      year: '2023',
      title: '10,000+ Patients Served',
      description: 'Reached milestone of 10,000+ international patients with 98% satisfaction rate',
      icon: BadgeCheck,
    },
    {
      year: '2025',
      title: '50+ Hospital Network',
      description: 'Expanded to 50+ JCI-accredited partner hospitals across major Indian cities',
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
            <span>Serving GCC Patients Since 2013</span>
          </div>
          <h1 className="mb-6 font-serif text-5xl font-bold md:text-6xl">
            About Shifa AlHind
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-primary-100 leading-relaxed">
            Your trusted medical tourism partner with native Arabic team members who have lived in GCC countries.
            We understand your culture, language, and healthcare expectations perfectly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="rounded-lg bg-white/10 px-6 py-3 backdrop-blur-sm">
              <div className="font-serif text-3xl font-bold">10,000+</div>
              <div className="text-sm text-primary-200">GCC Patients</div>
            </div>
            <div className="rounded-lg bg-white/10 px-6 py-3 backdrop-blur-sm">
              <div className="font-serif text-3xl font-bold">12 Years</div>
              <div className="text-sm text-primary-200">Experience</div>
            </div>
            <div className="rounded-lg bg-white/10 px-6 py-3 backdrop-blur-sm">
              <div className="font-serif text-3xl font-bold">98%</div>
              <div className="text-sm text-primary-200">Satisfaction</div>
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
              Why GCC Patients Choose Us
            </div>
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
              Native Arabic Team from GCC Countries
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
              Our Arabic coordinators aren&apos;t just translators - they&apos;ve lived in Dubai, Abu Dhabi, Riyadh, Jeddah, Doha, and other GCC cities.
              They understand your dialect, culture, and what matters to you and your family.
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
              <h2 className="mb-6 font-serif text-4xl font-bold text-gray-900">Our Mission & Story</h2>
              <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
            </div>

            <div className="space-y-8">
              <Card className="border-2 border-primary-100 bg-gradient-to-br from-white to-primary-50 p-8">
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                  Shifa AlHind was founded in 2013 with a simple yet powerful mission: to make world-class healthcare accessible and affordable for patients from the GCC region. Our story began when our founder, who experienced the challenges of navigating medical treatment abroad firsthand, recognized the need for a <strong>trusted partner who truly understands GCC culture and the Arabic language</strong>.
                </p>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                  What makes us different? We don&apos;t just hire translators - we&apos;ve built a team of <strong>native Arabic speakers who have actually lived and worked in GCC countries for 5-15 years</strong>. Our coordinators have lived in Dubai&apos;s vibrant neighborhoods, worked in Riyadh&apos;s corporate offices, and experienced life in Doha&apos;s expatriate communities. They understand not just the language, but the culture, expectations, and what matters to GCC families.
                </p>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                  We bridge the gap between patients seeking quality medical care and India&apos;s renowned hospitals and specialists. What started as a small operation helping a handful of patients has grown into a comprehensive medical tourism facilitation service that has assisted over 10,000 international patients.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  With over a decade of experience in medical tourism, we&apos;ve helped thousands of patients from UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain receive life-changing treatments at a fraction of the cost in their home countries. Our patients have undergone successful cardiac surgeries, orthopedic procedures, fertility treatments, cancer care, and numerous other specialized treatments. Our <strong>98% patient satisfaction rate</strong> reflects our dedication to excellence in every aspect of care.
                </p>
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
              Our Journey
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              12 years of serving GCC patients with dedication and care
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
              Why Choose Shifa AlHind?
            </h2>
            <div className="space-y-10">
              <Card className="border-2 border-primary-100 bg-gradient-to-br from-white to-blue-50 p-8 transition-all hover:shadow-2xl">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600">
                    <Award className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-gray-900">Deep Network of Premier Hospitals</h3>
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                  We partner exclusively with JCI-accredited and NABH-certified hospitals in India&apos;s major cities - Mumbai, Delhi, Bangalore, Chennai, and Hyderabad. Our hospital network includes Apollo Hospitals, Fortis Healthcare, Max Healthcare, Manipal Hospitals, Narayana Health, and other institutions that rank among Asia&apos;s finest medical facilities. Each partner hospital has been carefully vetted for quality standards, success rates, and experience with international patients.
                </p>
              </Card>

              <Card className="border-2 border-primary-100 bg-gradient-to-br from-white to-green-50 p-8 transition-all hover:shadow-2xl">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600">
                    <CheckCircle className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-gray-900">Transparent Pricing with No Hidden Costs</h3>
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                  We believe in complete transparency. When we provide you with a cost estimate, it includes all medical fees, hospital charges, diagnostic tests, medications, and our coordination services. We clearly outline what&apos;s included and what&apos;s not, so you can budget accurately. Unlike some medical tourism companies, we don&apos;t mark up hospital prices or take hidden commissions - our service fee is clearly stated upfront.
                </p>
              </Card>

              <Card className="border-2 border-primary-100 bg-gradient-to-br from-white to-purple-50 p-8 transition-all hover:shadow-2xl">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-600">
                    <Languages className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-gray-900">End-to-End Support in Your Language & Culture</h3>
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                  From your initial inquiry to post-treatment follow-up, we provide comprehensive support in English and Arabic. Our team assists with medical visa applications, airport pickup, accommodation arrangements, hospital admissions, doctor consultations, and everything in between. <strong>Our Arabic coordinators have lived in GCC countries and understand your cultural needs</strong> - from halal meals to prayer times to female doctors for women patients. We don&apos;t just connect you with a hospital and disappear - we stay with you throughout your entire journey and beyond.
                </p>
              </Card>

              <Card className="border-4 border-green-200 bg-gradient-to-br from-white to-green-50 p-8 transition-all hover:border-green-400 hover:shadow-2xl">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600">
                    <Heart className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-gray-900">Muslim-Friendly & GCC Cultural Comfort</h3>
                </div>
                <p className="mb-4 text-lg font-bold leading-relaxed text-gray-900">
                  ✅ 100% Certified Halal Food | ✅ Nearby Mosques (5-10 min) | ✅ Prayer Rooms in Hotels
                </p>
                <p className="mb-4 text-lg leading-relaxed text-gray-700">
                  <strong>We understand the unique needs of GCC patients.</strong> Our partner hospitals provide <strong className="text-green-700">100% certified halal meals</strong> (Arabic, Indian, Continental cuisines), <strong className="text-green-700">prayer facilities with Qibla direction</strong>, and <strong className="text-green-700">female doctors for women patients</strong> when requested. All accommodations are within <strong className="text-green-700">5-15 minutes of mosques</strong> including Masjid Juma (Indiranagar), Frazer Town Mosque, and Shivaji Nagar Jama Masjid.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  We arrange accommodation close to hospitals with <strong>amenities familiar to GCC travelers</strong>: Arabic TV channels, Arabic coffee & dates, prayer mats in rooms, wudu facilities, women-only floors, and family suites. In Bangalore, we partner with <a href="https://pentouz.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-600 underline hover:text-primary-700">Pentouz Hotels</a>, offering comfortable and convenient stays near major medical facilities. Our team understands cultural nuances and ensures your complete comfort throughout your medical journey.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Enhanced */}
      <section className="bg-gray-50 px-4 py-20">
        <div className="container">
          <h2 className="mb-16 text-center font-serif text-4xl font-bold text-gray-900">Our Values</h2>

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
              Our Track Record
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-2 border-primary-100 bg-gradient-to-br from-white to-primary-50 text-center transition-all hover:scale-105 hover:shadow-2xl">
                <CardContent className="pt-8">
                  <div className="mb-4 font-serif text-6xl font-bold text-primary-600">10,000+</div>
                  <div className="mb-2 text-xl font-semibold text-gray-900">Patients Served</div>
                  <div className="text-sm text-gray-600">From all 6 GCC countries</div>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent-100 bg-gradient-to-br from-white to-accent-50 text-center transition-all hover:scale-105 hover:shadow-2xl">
                <CardContent className="pt-8">
                  <div className="mb-4 font-serif text-6xl font-bold text-accent-600">50+</div>
                  <div className="mb-2 text-xl font-semibold text-gray-900">Partner Hospitals</div>
                  <div className="text-sm text-gray-600">JCI & NABH accredited</div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-100 bg-gradient-to-br from-white to-green-50 text-center transition-all hover:scale-105 hover:shadow-2xl">
                <CardContent className="pt-8">
                  <div className="mb-4 font-serif text-6xl font-bold text-green-600">98%</div>
                  <div className="mb-2 text-xl font-semibold text-gray-900">Satisfaction Rate</div>
                  <div className="text-sm text-gray-600">Verified patient reviews</div>
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
            Ready to Start Your Medical Journey?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
            Get a free consultation from our GCC-experienced Arabic team
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="shadow-xl">
              <Link href={`/${locale}/consultation`}>
                <Star className="mr-2 h-5 w-5" />
                Get Free Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary-700">
              <Link href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp في العربية
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

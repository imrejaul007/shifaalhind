export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Building2, Globe, Award, Clock, Shield, Heart, Bone, Baby, Smile, Eye, TrendingDown, Users, CheckCircle, Star, DollarSign } from 'lucide-react';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { SocialShare } from '@/components/blog/social-share';

export const metadata: Metadata = {
  title: 'Medical Tourism to India 2025 - Save 60-80% on World-Class Healthcare | Shifa AlHind',
  description: 'Experience premium medical tourism to India. JCI-accredited hospitals, expert doctors, no waiting times. Popular with UAE & Saudi patients. Save 60-80% on surgery, cancer treatment, IVF, dental & cosmetic procedures.',
  keywords: [
    'medical tourism india',
    'medical tourism india from uae',
    'medical tourism india from saudi arabia',
    'medical tourism india cost',
    'medical tourism india hospitals',
    'medical tourism india packages',
    'medical tourism india dubai patients',
    'medical tourism india riyadh patients',
    'affordable healthcare india',
    'best hospitals india for international patients',
    // Arabic keywords for GCC market
    'السياحة العلاجية في الهند',
    'العلاج الطبي في الهند',
    'مستشفيات الهند للمرضى الدوليين',
    'تكلفة العلاج في الهند',
    'الرعاية الصحية في الهند من الإمارات',
    'العلاج في الهند من السعودية',
  ],
  openGraph: {
    title: 'Medical Tourism to India - Save 60-80% on World-Class Healthcare',
    description: 'JCI-accredited hospitals, expert doctors, no waiting times. Trusted by patients from UAE, Saudi Arabia & GCC.',
  },
};

export default async function MedicalTourismPage() {
  // Fetch all cities with their treatments
  const cities = await prisma.city.findMany({
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

  const statistics = [
    { number: '500,000+', label: 'International Patients/Year', description: 'Patients from 150+ countries' },
    { number: '40+', label: 'JCI-Accredited Hospitals', description: 'International quality standards' },
    { number: '95%+', label: 'Success Rate', description: 'On par with USA/UK hospitals' },
    { number: '60-80%', label: 'Average Savings', description: 'Compared to Western countries' },
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
            Medical Tourism to India 2025
          </h1>
          <p className="mx-auto mb-6 max-w-3xl text-xl text-primary-100 md:text-2xl">
            Save 60-80% on World-Class Healthcare with JCI-Accredited Hospitals
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-100">
            Trusted by 200,000+ patients from UAE, Saudi Arabia & GCC countries annually. No waiting times. Expert doctors. Complete support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/consultation">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary-700 text-lg px-8 py-6">
              <Link href="/booking">Book Treatment Now</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-primary-100">
            ✓ Free Second Opinion ✓ No Waiting Time ✓ Medical Visa Assistance ✓ Airport Pickup Included
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white px-4 py-12 border-b">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            {statistics.map((stat, index) => (
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
          Why Choose India for Medical Treatment?
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
          India has become the world&apos;s leading medical tourism destination, attracting patients from 150+ countries
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
            Popular Medical Treatments
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
            Most requested procedures by international patients from UAE, Saudi Arabia & GCC countries
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
                        <span className="text-sm text-gray-600">India Cost:</span>
                        <span className="text-lg font-bold text-gray-900">{treatment.cost}</span>
                      </div>
                      <div className="rounded-lg bg-green-50 px-3 py-2 text-center">
                        <span className="text-sm font-semibold text-green-800">{treatment.savings}</span>
                      </div>
                    </div>
                    <Button asChild className="w-full">
                      <Link href={`/${treatment.type === 'blog' ? 'blog' : 'treatments'}/${treatment.slug}`}>
                        View Details & Hospitals
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/treatments">View All 30+ Treatments →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cost Savings Comparison */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          Massive Cost Savings - Real Comparison
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
          See how much you can save on common medical procedures
        </p>

        <div className="mx-auto max-w-5xl overflow-x-auto">
          <table className="w-full border-collapse rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                <th className="px-6 py-4 text-left">Treatment</th>
                <th className="px-6 py-4 text-center">India</th>
                <th className="px-6 py-4 text-center">USA</th>
                <th className="px-6 py-4 text-center">UK</th>
                <th className="px-6 py-4 text-center">UAE</th>
                <th className="px-6 py-4 text-center">You Save</th>
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
            <strong>Average savings: 60-80%</strong> compared to USA, UK, and UAE
          </p>
          <p className="mt-2 text-gray-600">
            All prices include: Surgery, Hospital stay, Doctor fees, Medication, Post-op care
          </p>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Top Medical Tourism Destinations in India
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
            JCI-accredited hospitals, expert doctors, direct flights from Dubai, Abu Dhabi, Riyadh
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
                      {city.cityTreatments.length} treatments available
                    </p>
                    <p className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      JCI-accredited hospitals
                    </p>
                    <p className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Direct flights from GCC
                    </p>
                  </div>
                  <Button asChild className="w-full">
                    <Link href={`/medical-tourism/${city.country.slug}/${city.slug}`}>
                      View Hospitals & Treatments
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
          Special Support for GCC Patients
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
          We understand the needs of patients from UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl">🇦🇪 UAE Patients</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Direct flights: Dubai/Abu Dhabi → Mumbai (3h), Delhi (3.5h), Bangalore (4h)
              </p>
              <p className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Medical visa on arrival at 6 major airports (instant approval)
              </p>
              <p className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Arabic-speaking coordinators available 24/7
              </p>
              <p className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Halal food, prayer rooms in all major hospitals
              </p>
              <Button asChild className="w-full mt-4">
                <Link href="/blog/dubai-to-india-medical-tourism">UAE Patients Guide →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl">🇸🇦 Saudi Arabia Patients</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Direct flights: Riyadh/Jeddah → Mumbai (4h), Delhi (4.5h), Bangalore (5h)
              </p>
              <p className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                e-Medical visa online (approval in 3-5 days, $80 total)
              </p>
              <p className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Arabic translators, Saudi-friendly accommodation
              </p>
              <p className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Family/companion visa included (Medical Attendant Visa)
              </p>
              <Button asChild className="w-full mt-4">
                <Link href="/blog/riyadh-to-india-healthcare">Saudi Patients Guide →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl">🌍 All GCC Countries</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Qatar, Oman, Kuwait, Bahrain patients welcome
              </p>
              <p className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Simple medical visa process (online or on arrival)
              </p>
              <p className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Complete package: Visa, flights, hotel, treatment included
              </p>
              <p className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Post-treatment follow-up via video call after return
              </p>
              <Button asChild className="w-full mt-4">
                <Link href="/blog/medical-visa-india-complete-guide">Medical Visa Guide →</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Your Medical Journey - Step by Step
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
            From consultation to recovery, we handle everything
          </p>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  step: '1',
                  title: 'Free Consultation',
                  desc: 'Submit medical reports online. Get second opinion from Indian specialist within 48 hours. Video call with doctor (free).',
                  timeline: 'Day 1-2'
                },
                {
                  step: '2',
                  title: 'Treatment Plan & Visa',
                  desc: 'Receive detailed treatment plan, cost estimate, hospital options. We assist with medical visa application (e-visa or on arrival).',
                  timeline: 'Day 3-7'
                },
                {
                  step: '3',
                  title: 'Travel & Arrival',
                  desc: 'Book flights. We arrange: Airport pickup, hotel (patient + companion), hospital pre-admission, welcome coordinator.',
                  timeline: 'Day 8-10'
                },
                {
                  step: '4',
                  title: 'Treatment & Recovery',
                  desc: 'Treatment in JCI-accredited hospital. Post-surgery care, recovery monitoring. Follow-up after returning home (video calls).',
                  timeline: 'Week 2+'
                },
              ].map((item, index) => (
                <Card key={index} className="text-center border-2 hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 font-serif text-3xl font-bold text-white shadow-lg">
                        {item.step}
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
              <Link href="/consultation">Start Your Journey - Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Articles Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          Medical Tourism Guides & Resources
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
          Comprehensive guides to help you plan your medical journey to India
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Medical Tourism Guide for UAE Patients</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Complete guide for patients from Dubai, Abu Dhabi, Sharjah. Flights, visa, costs, best hospitals.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/blog/dubai-to-india-medical-tourism">Read Guide →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Healthcare Guide for Riyadh Patients</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Saudi Arabia patients: Direct flights, medical visa process, top hospitals, cost savings in SAR.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/blog/riyadh-to-india-healthcare">Read Guide →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Medical Visa India Complete Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                e-Medical visa, visa on arrival, application process, documents required, processing time.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/blog/medical-visa-india-complete-guide">Read Guide →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Best Time to Visit India for Treatment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Weather, peak seasons, hospital availability, travel tips by month. Best months: Oct-March.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/blog/best-time-visit-india-medical-tourism">Read Guide →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Medical Tourism Insurance Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Do you need insurance? Best providers, coverage options, costs $50-$200. What&apos;s covered.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/blog/medical-tourism-insurance-india">Read Guide →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Choosing the Right Hospital</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                JCI accreditation, doctor credentials, success rates, international patient services, reviews.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/blog/selecting-right-hospital-india">Read Guide →</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/blog">View All 24 Guides →</Link>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
            Common questions from international patients about medical tourism to India
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
          title="Medical Tourism to India 2025 - Save 60-80% on World-Class Healthcare"
          description="JCI-accredited hospitals, expert doctors, no waiting times. Trusted by 200,000+ patients from UAE, Saudi Arabia & GCC."
        />
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 px-4 py-20 text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            Ready to Start Your Medical Journey to India?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
            Get a free consultation, second opinion, and personalized treatment plan from India&apos;s top medical experts
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/consultation">Get Free Consultation Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary-700 text-lg px-8 py-6">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
          <div className="space-y-2 text-primary-100">
            <p>✓ 200,000+ International Patients/Year ✓ 40+ JCI-Accredited Hospitals</p>
            <p>✓ 95%+ Success Rate ✓ Save 60-80% on Treatment Costs</p>
            <p className="text-sm mt-4">Available 24/7 | WhatsApp Support | Arabic & English</p>
          </div>
        </div>
      </section>
    </div>
  );
}

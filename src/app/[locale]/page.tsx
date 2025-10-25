export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import {
  Heart,
  Activity,
  ArrowRight,
  CheckCircle,
  MapPin
} from 'lucide-react';
import { treatments, gccCountries } from '@/config/gcc-countries';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // Comprehensive keywords (English + Arabic)
  const keywords = [
    // English keywords
    'medical tourism india',
    'medical tourism india from uae',
    'medical tourism india from saudi arabia',
    'medical tourism india gcc',
    'treatment in india',
    'hospitals in india',
    'jci accredited hospitals india',
    'heart surgery india',
    'ivf treatment india',
    'knee replacement india',
    'cancer treatment india',
    'affordable healthcare india',
    'apollo hospital india',
    'fortis hospital india',
    'medical visa india',
    // Arabic keywords
    'السياحة العلاجية في الهند',
    'العلاج في الهند',
    'المستشفيات في الهند',
    'تكلفة العلاج في الهند',
    'جراحة القلب في الهند',
    'أطفال الأنابيب في الهند',
    'استبدال الركبة في الهند',
    'علاج السرطان في الهند',
    'السياحة العلاجية من الإمارات',
    'السياحة العلاجية من السعودية',
    'العلاج في الهند للسعوديين',
    'العلاج في الهند للإماراتيين',
    'مستشفيات معتمدة في الهند',
    'التأشيرة الطبية للهند',
  ];

  return generateSEOMetadata({
    title_en: 'Premium Medical Tourism to India',
    title_ar: 'سياحة علاجية متميزة إلى الهند',
    description_en:
      'Connect with world-class hospitals and treatments in India. Affordable, quality healthcare for patients from UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain.',
    description_ar:
      'اتصل بمستشفيات وعلاجات عالمية المستوى في الهند. رعاية صحية ميسورة التكلفة وعالية الجودة للمرضى من الإمارات والسعودية وقطر وعمان والكويت والبحرين.',
    locale,
    path: '/',
    type: 'website',
    keywords,
  });
}

export default function HomePage() {
  const features = [
    {
      icon: CheckCircle,
      title: 'JCI Accredited Hospitals',
      description: 'Top-rated hospitals with international accreditations',
    },
    {
      icon: Activity,
      title: 'Expert Doctors',
      description: 'Experienced specialists with global recognition',
    },
    {
      icon: MapPin,
      title: '24/7 Support',
      description: 'Dedicated support in English and Arabic',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 px-4 py-20 text-white md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              World-Class Medical Tourism to India from UAE, Saudi Arabia & GCC Countries
            </h1>
            <p className="mb-4 text-lg text-primary-50 md:text-xl">
              Save 60-80% on medical treatments without compromising quality. Connect with JCI-accredited hospitals and internationally trained doctors in India for cardiac surgery, orthopedic procedures, fertility treatments, and more.
            </p>
            <p className="mb-8 text-base text-primary-100 md:text-lg">
              Trusted by over 10,000 patients from UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain. Get personalized care, no waiting lists, and comprehensive medical tourism support from consultation to recovery.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/consultation">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                <Link href="/treatments">View All Treatments</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary-400/20 blur-3xl" />
      </section>

      {/* Search Bar */}
      <section className="container -mt-8 px-4">
        <div className="glass mx-auto max-w-4xl rounded-2xl p-6">
          <form action="/search" method="get" className="flex flex-col gap-4 sm:flex-row">
            <input
              type="text"
              name="q"
              placeholder="Search treatments, hospitals, cities..."
              className="flex-1 rounded-lg border-2 border-gray-200 bg-white px-4 py-3 focus:border-primary-500 focus:outline-none"
            />
            <Button type="submit" size="lg" className="sm:w-auto">
              Search
            </Button>
          </form>
        </div>
      </section>

      {/* Features */}
      <section className="container px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
                  <feature.icon className="h-8 w-8 text-primary-500" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Treatments */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
              Featured Treatments
            </h2>
            <p className="text-lg text-gray-600">
              Explore our most popular medical procedures
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {treatments.slice(0, 8).map((treatment) => (
              <Card key={treatment.slug} className="group cursor-pointer transition-transform hover:scale-105">
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 group-hover:bg-primary-500">
                    <Heart className="h-6 w-6 text-primary-500 group-hover:text-white" />
                  </div>
                  <CardTitle className="text-lg">{treatment.name}</CardTitle>
                  <CardDescription>
                    World-class {treatment.name.toLowerCase()} procedures
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={`/treatments/${treatment.slug}`}
                    className="flex items-center text-sm font-medium text-primary-500 hover:text-primary-600"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/treatments">View All Treatments</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="container px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Top Destinations
          </h2>
          <p className="text-lg text-gray-600">
            Medical tourism destinations across the GCC
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gccCountries.slice(0, 6).map((country) => (
            <Card key={country.slug} className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600" />
              <CardHeader>
                <CardTitle>{country.name}</CardTitle>
                <CardDescription>
                  Medical tourism for {country.name} residents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/medical-tourism"
                  className="flex items-center text-sm font-medium text-primary-500 hover:text-primary-600"
                >
                  Explore Destinations
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose India for Medical Tourism */}
      <section className="container px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Why Choose India for Medical Tourism?
          </h2>
          <div className="mb-8 text-center">
            <p className="text-lg leading-relaxed text-gray-700">
              India has emerged as a global leader in medical tourism, attracting over 2 million international patients annually. For GCC residents, India offers an unbeatable combination of world-class healthcare, significant cost savings, and cultural familiarity.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Massive Cost Savings</h3>
                <p className="text-gray-700">
                  Medical procedures in India cost 60-80% less than in the UAE, Saudi Arabia, or Western countries. A heart bypass surgery that costs $100,000 in the US is available for $8,000-12,000 in India&apos;s top hospitals, with the same success rates and quality standards.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">No Waiting Lists</h3>
                <p className="text-gray-700">
                  Unlike many developed countries where you might wait months for surgery, India&apos;s healthcare system can schedule your treatment within days or weeks. This is crucial for time-sensitive procedures or patients in pain.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">International Accreditation</h3>
                <p className="text-gray-700">
                  Our partner hospitals hold JCI (Joint Commission International), NABH (National Accreditation Board for Hospitals), and ISO certifications, ensuring they meet the same rigorous standards as hospitals in the US and Europe.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Experienced Doctors</h3>
                <p className="text-gray-700">
                  India&apos;s top doctors are trained at institutions like Harvard, Johns Hopkins, and Mayo Clinic. Many have decades of experience and have performed thousands of procedures. India produces over 50,000 specialist doctors annually.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Advanced Technology</h3>
                <p className="text-gray-700">
                  Leading Indian hospitals invest heavily in cutting-edge medical technology, including robotic surgery systems, CyberKnife radiotherapy, PET-CT scanners, and advanced cardiac catheterization labs.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Cultural & Linguistic Comfort</h3>
                <p className="text-gray-700">
                  For GCC patients, India offers cultural familiarity, halal food options, and English-speaking medical staff. Many hospitals have dedicated international patient departments with Arabic interpreters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            How Shifa AlHind Works - Your Medical Tourism Journey
          </h2>
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="relative">
                <div className="absolute -top-4 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-xl font-bold text-white">1</div>
                <CardHeader className="pt-10">
                  <CardTitle>Free Consultation & Evaluation</CardTitle>
                  <CardDescription>
                    Submit your medical reports and connect with our expert coordinators. We review your case, recommend the best hospitals and doctors, and provide detailed cost estimates - all at no charge.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="relative">
                <div className="absolute -top-4 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-xl font-bold text-white">2</div>
                <CardHeader className="pt-10">
                  <CardTitle>Complete Travel Arrangements</CardTitle>
                  <CardDescription>
                    We handle everything - medical visa assistance, flight bookings, airport pickup, hotel accommodation near the hospital, and interpreter services. You focus on your health, we handle the logistics.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="relative">
                <div className="absolute -top-4 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-xl font-bold text-white">3</div>
                <CardHeader className="pt-10">
                  <CardTitle>Treatment & Recovery</CardTitle>
                  <CardDescription>
                    Receive world-class treatment with 24/7 support from our team. We coordinate with doctors, arrange follow-up care, and ensure smooth communication. Post-treatment, we help with recovery accommodations and return travel.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <p className="mb-6 text-lg text-gray-700">
                After you return home, we continue to support you with telemedicine follow-ups, coordination with your local doctors, and any additional care you might need. Our relationship doesn&apos;t end when you leave India.
              </p>
              <Button asChild size="lg">
                <Link href="/services">Learn More About Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Frequently Asked Questions About Medical Tourism to India
          </h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>How much can I save with medical tourism to India?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Most patients save 60-80% compared to costs in the UAE, Saudi Arabia, or Western countries. For example, a knee replacement costs $30,000-50,000 in the US but only $6,000-8,000 in India. Heart bypass surgery costs $100,000+ in the West versus $8,000-12,000 in India. Even after including travel, accommodation, and other expenses, the savings are substantial.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Are Indian hospitals really as good as hospitals in the West?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Yes. India&apos;s top hospitals are JCI-accredited, which means they meet the same international standards as hospitals in the US and Europe. Many Indian doctors are trained at Harvard, Johns Hopkins, and other prestigious institutions. India performs over 200,000 cardiac surgeries annually with success rates matching or exceeding Western standards. Hospitals like Apollo, Fortis, and Max use the same advanced technology you&apos;d find in New York or London.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What treatments are most popular for GCC patients?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  The most sought-after treatments include cardiac surgery (bypass, valve replacement), orthopedic procedures (knee and hip replacement), fertility treatments (IVF), cosmetic surgery, dental implants, cancer treatment, and spinal surgery. India is also renowned for complex procedures like liver transplants and robotic surgery.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How long do I need to stay in India for treatment?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  It depends on the procedure. Simple treatments like dental work might require 5-7 days, while major surgeries like knee replacement typically need 10-14 days (including pre-op tests, surgery, and initial recovery). Heart surgery usually requires 2-3 weeks. We provide detailed timelines during your consultation based on your specific treatment.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Do you help with medical visas?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Yes, we provide complete support for obtaining a medical visa for India. We supply the required invitation letter from the hospital, help you prepare the documentation, and guide you through the application process. Medical visas are typically processed within 3-5 days for GCC nationals.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What about language barriers?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  English is widely spoken in all major Indian hospitals, and most doctors are fluent. Additionally, we provide Arabic interpreters for GCC patients who prefer to communicate in Arabic. Our coordinators are bilingual and available 24/7 to help with any communication needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Patient Success Stories / Testimonials */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
              What Our Patients Say
            </h2>
            <p className="mb-12 text-center text-lg text-gray-600">
              Join thousands of satisfied patients from UAE, Saudi Arabia, and across the GCC who chose India for world-class medical treatment
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="mb-4 flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent-500">★</span>
                    ))}
                  </div>
                  <CardTitle className="text-lg">Life-Changing Heart Surgery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-700">
                    &quot;I underwent bypass surgery at Fortis Hospital in Delhi. The care was exceptional, doctors were highly skilled, and I saved over $25,000 compared to Dubai. Six months later, I&apos;m healthier than ever. Highly recommend!&quot;
                  </p>
                  <p className="font-semibold text-gray-900">Mohammed K.</p>
                  <p className="text-sm text-gray-600">Heart Surgery Patient, Dubai, UAE</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mb-4 flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent-500">★</span>
                    ))}
                  </div>
                  <CardTitle className="text-lg">Successful IVF Journey</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-700">
                    &quot;After two failed IVF attempts in Saudi Arabia, we tried in Bangalore. The doctors were compassionate, the facility was world-class, and we&apos;re now proud parents of twins! Forever grateful to the team and Shifa AlHind.&quot;
                  </p>
                  <p className="font-semibold text-gray-900">Fatima & Ahmed R.</p>
                  <p className="text-sm text-gray-600">IVF Patients, Riyadh, Saudi Arabia</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mb-4 flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent-500">★</span>
                    ))}
                  </div>
                  <CardTitle className="text-lg">Pain-Free After Knee Replacement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-700">
                    &quot;I suffered from knee pain for years. The surgery at Apollo Chennai was smooth, recovery was faster than expected, and I&apos;m now walking pain-free. The cost was 70% less than UK prices. Incredible value!&quot;
                  </p>
                  <p className="font-semibold text-gray-900">Sarah M.</p>
                  <p className="text-sm text-gray-600">Knee Replacement Patient, Sharjah, UAE</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Link href="/stories" className="inline-flex items-center text-primary-600 hover:text-primary-700">
                Read More Success Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Articles Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 px-4 py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
              Medical Tourism Resources & Guides
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Comprehensive guides to help you make informed decisions about medical treatment in India. Cost comparisons, hospital selection tips, and real patient stories.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Blog Article 1 */}
            <Card className="flex flex-col transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-3 flex items-center gap-2 text-sm text-primary-600">
                  <Heart className="h-4 w-4" />
                  <span className="font-medium">Cost Comparison</span>
                </div>
                <CardTitle className="text-xl">
                  <Link href="/blog/heart-surgery-cost-comparison-india-vs-world" className="hover:text-primary-600">
                    Heart Surgery Cost: India vs USA, UK, UAE
                  </Link>
                </CardTitle>
                <CardDescription>
                  Complete 2025 cost breakdown. Save 60-80% on cardiac surgery without compromising quality.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Link href="/blog/heart-surgery-cost-comparison-india-vs-world" className="inline-flex items-center text-primary-600 hover:text-primary-700">
                  Read Full Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Blog Article 2 */}
            <Card className="flex flex-col transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-3 flex items-center gap-2 text-sm text-primary-600">
                  <MapPin className="h-4 w-4" />
                  <span className="font-medium">Travel Guide</span>
                </div>
                <CardTitle className="text-xl">
                  <Link href="/blog/medical-tourism-india-uae-patients-guide" className="hover:text-primary-600">
                    Medical Tourism from UAE: Complete Guide
                  </Link>
                </CardTitle>
                <CardDescription>
                  Step-by-step process for UAE patients. Visa, flights, accommodation, and real success stories.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Link href="/blog/medical-tourism-india-uae-patients-guide" className="inline-flex items-center text-primary-600 hover:text-primary-700">
                  Read Full Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Blog Article 3 */}
            <Card className="flex flex-col transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-3 flex items-center gap-2 text-sm text-primary-600">
                  <Activity className="h-4 w-4" />
                  <span className="font-medium">Orthopedics</span>
                </div>
                <CardTitle className="text-xl">
                  <Link href="/blog/knee-replacement-cost-india-vs-world" className="hover:text-primary-600">
                    Knee Replacement Surgery Cost Guide
                  </Link>
                </CardTitle>
                <CardDescription>
                  TKR, bilateral, and partial knee replacement. Implant brands, hospitals, and patient savings.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Link href="/blog/knee-replacement-cost-india-vs-world" className="inline-flex items-center text-primary-600 hover:text-primary-700">
                  Read Full Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Blog Article 4 */}
            <Card className="flex flex-col transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-3 flex items-center gap-2 text-sm text-primary-600">
                  <Heart className="h-4 w-4" />
                  <span className="font-medium">Fertility</span>
                </div>
                <CardTitle className="text-xl">
                  <Link href="/blog/ivf-fertility-treatment-india-complete-guide" className="hover:text-primary-600">
                    IVF & Fertility Treatment Complete Guide
                  </Link>
                </CardTitle>
                <CardDescription>
                  IVF success rates by age, top clinics, costs, and real patient success stories from GCC.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Link href="/blog/ivf-fertility-treatment-india-complete-guide" className="inline-flex items-center text-primary-600 hover:text-primary-700">
                  Read Full Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Blog Article 5 */}
            <Card className="flex flex-col transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-3 flex items-center gap-2 text-sm text-primary-600">
                  <CheckCircle className="h-4 w-4" />
                  <span className="font-medium">Selection Guide</span>
                </div>
                <CardTitle className="text-xl">
                  <Link href="/blog/how-to-choose-best-hospital-india" className="hover:text-primary-600">
                    How to Choose the Best Hospital in India
                  </Link>
                </CardTitle>
                <CardDescription>
                  10 essential criteria, JCI accreditation, doctor credentials, and red flags to avoid.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Link href="/blog/how-to-choose-best-hospital-india" className="inline-flex items-center text-primary-600 hover:text-primary-700">
                  Read Full Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* View All Blog Link Card */}
            <Card className="flex flex-col items-center justify-center bg-primary-50 transition-shadow hover:shadow-lg">
              <CardContent className="flex flex-col items-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-white">
                  <ArrowRight className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">More Resources</h3>
                <p className="mb-4 text-gray-600">
                  Explore all our medical tourism guides and resources
                </p>
                <Link href="/blog" className="inline-flex items-center font-semibold text-primary-600 hover:text-primary-700">
                  View All Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-500 px-4 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            Ready to Start Your Medical Journey to India?
          </h2>
          <p className="mb-8 text-lg text-primary-50">
            Get a free consultation, personalized treatment plan, and cost estimate from our medical experts. No obligation, completely confidential.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/consultation">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export const dynamic = 'force-dynamic';

import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Building2, ArrowRight, Plane, Check, DollarSign, Award, Users, Clock } from 'lucide-react';
import { Testimonials, TREATMENT_TESTIMONIALS } from '@/components/testimonials/testimonials';
import { TrustBadges } from '@/components/trust-badges/trust-badges';

interface PageProps {
  params: Promise<{
    locale: string;
    country: string;
    city: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { city: citySlug } = await params;
  const city = await prisma.city.findUnique({
    where: { slug: citySlug },
    include: { country: true },
  });

  if (!city) return {};

  const { locale, country, city: citySlugParam } = await params;

  return generateSEOMetadata({
    title_en: city.seoTitle_en || `Medical Tourism from ${city.name_en} to India`,
    title_ar: city.seoTitle_ar || `السياحة العلاجية من ${city.name_ar} إلى الهند`,
    description_en: city.seoDesc_en || undefined,
    description_ar: city.seoDesc_ar || undefined,
    locale,
    path: `/medical-tourism/${country}/${citySlugParam}`,
    keywords: city.keywords_en,
  });
}

export default async function CityPage({ params }: PageProps) {
  const { locale, country, city: citySlug } = await params;
  const t = await getTranslations({ locale });

  // Fetch city with treatments
  const city = await prisma.city.findUnique({
    where: { slug: citySlug },
    include: {
      country: true,
      cityTreatments: {
        where: { published: true },
        include: {
          treatment: true,
        },
        orderBy: {
          treatment: { featured: 'desc' },
        },
      },
      hospitals: {
        where: { published: true },
        take: 6,
      },
    },
  });

  if (!city) {
    notFound();
  }

  const isArabic = locale === 'ar';

  // Generate breadcrumb schema
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: `/${locale}` },
    { name: 'Medical Tourism', url: `/${locale}/medical-tourism` },
    { name: city.country.name_en, url: `/${locale}/for-${city.country.slug}-patients` },
    { name: city.name_en, url: `/${locale}/medical-tourism/${country}/${citySlug}` },
  ]);

  return (
    <div>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container">
          <div className="mb-4 flex items-center gap-2 text-sm text-primary-100">
            <Link href={`/${locale}`} className="hover:text-white">
              {t('common.home')}
            </Link>
            <span>/</span>
            <Link href={`/${locale}/medical-tourism`} className="hover:text-white">
              Medical Tourism
            </Link>
            <span>/</span>
            <span>{isArabic ? city.name_ar : city.name_en}</span>
          </div>

          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            Medical Tourism from {isArabic ? city.name_ar : city.name_en} to India
          </h1>

          <div className="mb-6 flex items-center gap-4 text-primary-100">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>{isArabic ? city.country.name_ar : city.country.name_en}</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              <span>{city.cityTreatments.length} Treatments Available</span>
            </div>
          </div>

          <p className="mb-8 max-w-3xl text-lg text-primary-50">
            {isArabic ? city.intro_ar : city.intro_en}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href={`/${locale}/consultation`}>
                Get Free Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white bg-white/10 text-white hover:bg-white/20">
              <Link href={`/${locale}/booking`}>
                Book Treatment
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="text-center">
            <CardContent className="pt-6">
              <DollarSign className="mx-auto mb-2 h-10 w-10 text-primary-600" />
              <h3 className="text-2xl font-bold text-primary-600">Save 60-80%</h3>
              <p className="text-sm text-gray-600">vs Home Country</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Award className="mx-auto mb-2 h-10 w-10 text-primary-600" />
              <h3 className="text-2xl font-bold text-primary-600">JCI Accredited</h3>
              <p className="text-sm text-gray-600">World-Class Hospitals</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="mx-auto mb-2 h-10 w-10 text-primary-600" />
              <h3 className="text-2xl font-bold text-primary-600">500K+ Patients</h3>
              <p className="text-sm text-gray-600">Treated Annually</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Clock className="mx-auto mb-2 h-10 w-10 text-primary-600" />
              <h3 className="text-2xl font-bold text-primary-600">95%+ Success</h3>
              <p className="text-sm text-gray-600">Treatment Success Rate</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold">
            Cost Comparison: {isArabic ? city.name_ar : city.name_en} vs India
          </h2>
          <div className="mx-auto max-w-4xl overflow-x-auto">
            <table className="w-full rounded-lg bg-white shadow-lg">
              <thead className="bg-primary-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Treatment</th>
                  <th className="px-6 py-4 text-right">{isArabic ? city.name_ar : city.name_en} Cost</th>
                  <th className="px-6 py-4 text-right">India Cost</th>
                  <th className="px-6 py-4 text-right">You Save</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Heart Bypass Surgery</td>
                  <td className="px-6 py-4 text-right">$120,000</td>
                  <td className="px-6 py-4 text-right font-semibold text-primary-600">$6,000-8,000</td>
                  <td className="px-6 py-4 text-right font-bold text-primary-600">$112,000 (93%)</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-medium">IVF Treatment</td>
                  <td className="px-6 py-4 text-right">$15,000</td>
                  <td className="px-6 py-4 text-right font-semibold text-primary-600">$2,500-4,000</td>
                  <td className="px-6 py-4 text-right font-bold text-primary-600">$11,000 (73%)</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Knee Replacement</td>
                  <td className="px-6 py-4 text-right">$40,000</td>
                  <td className="px-6 py-4 text-right font-semibold text-primary-600">$5,000-7,000</td>
                  <td className="px-6 py-4 text-right font-bold text-primary-600">$33,000 (83%)</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-medium">Dental Implants</td>
                  <td className="px-6 py-4 text-right">$5,000</td>
                  <td className="px-6 py-4 text-right font-semibold text-primary-600">$500-800</td>
                  <td className="px-6 py-4 text-right font-bold text-primary-600">$4,200 (84%)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-sm text-gray-600">
            *Prices include hospital stay, surgeon fees, and medications. Flights and accommodation not included.
          </p>
        </div>
      </section>

      {/* Why Choose This City */}
      <section className="container px-4 py-16">
        <h2 className="mb-8 text-center font-serif text-3xl font-bold">
          Why Choose India for Medical Treatment?
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-2 border-primary-100 transition-all hover:border-primary-300 hover:shadow-lg">
            <CardHeader>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                <Award className="h-6 w-6 text-primary-600" />
              </div>
              <CardTitle className="text-lg">World-Class Hospitals</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                40+ JCI-accredited hospitals with latest technology and internationally trained doctors.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary-100 transition-all hover:border-primary-300 hover:shadow-lg">
            <CardHeader>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                <DollarSign className="h-6 w-6 text-primary-600" />
              </div>
              <CardTitle className="text-lg">Affordable Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Save 60-80% compared to home country without compromising on quality or safety.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary-100 transition-all hover:border-primary-300 hover:shadow-lg">
            <CardHeader>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
              <CardTitle className="text-lg">Experienced Doctors</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Top surgeons with 15-30+ years experience and thousands of successful procedures.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary-100 transition-all hover:border-primary-300 hover:shadow-lg">
            <CardHeader>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                <Clock className="h-6 w-6 text-primary-600" />
              </div>
              <CardTitle className="text-lg">No Waiting Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Fast-track appointments, immediate treatment scheduling, and dedicated patient coordinators.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="container px-4 py-16">
        <h2 className="mb-8 font-serif text-3xl font-bold">
          Available Treatments for {isArabic ? city.name_ar : city.name_en} Patients
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {city.cityTreatments.map((ct) => (
            <Card key={ct.id} className="group transition-shadow hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl">
                  {isArabic ? ct.treatment.title_ar : ct.treatment.title_en}
                </CardTitle>
                <CardDescription>
                  {ct.costMin && ct.costMax && (
                    <span className="text-lg font-semibold text-primary-600">
                      ${ct.costMin.toLocaleString()} - ${ct.costMax.toLocaleString()}
                    </span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 line-clamp-3 text-sm text-gray-600">
                  {isArabic ? ct.intro_ar : ct.intro_en}
                </p>
                <Link
                  href={`/${locale}/medical-tourism/${country}/${citySlug}/${ct.treatment.slug}`}
                  className="flex items-center text-sm font-medium text-primary-500 hover:text-primary-600"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Top Hospitals */}
      {city.hospitals.length > 0 && (
        <section className="bg-gray-50 px-4 py-16">
          <div className="container">
            <h2 className="mb-8 font-serif text-3xl font-bold">
              Top Hospitals in India for {isArabic ? city.name_ar : city.name_en} Patients
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {city.hospitals.map((hospital) => (
                <Card key={hospital.id}>
                  <CardHeader>
                    <CardTitle>{isArabic ? hospital.name_ar : hospital.name_en}</CardTitle>
                    <CardDescription>
                      {hospital.accreditations.slice(0, 2).join(', ')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href={`/${locale}/hospitals/${hospital.slug}`}
                      className="text-sm font-medium text-primary-500 hover:text-primary-600"
                    >
                      View Details →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Getting There */}
      <section className="container px-4 py-16">
        <h2 className="mb-8 text-center font-serif text-3xl font-bold">
          Getting to India from {isArabic ? city.name_ar : city.name_en}
        </h2>
        <div className="mx-auto max-w-4xl">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plane className="h-6 w-6 text-primary-600" />
                Direct Flights Available
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-primary-50 p-4">
                    <h4 className="mb-2 font-semibold text-primary-900">Mumbai (BOM)</h4>
                    <p className="mb-1 text-sm text-gray-700">Flight time: 3-5 hours</p>
                    <p className="text-sm text-gray-700">Multiple daily flights</p>
                  </div>
                  <div className="rounded-lg bg-primary-50 p-4">
                    <h4 className="mb-2 font-semibold text-primary-900">Delhi (DEL)</h4>
                    <p className="mb-1 text-sm text-gray-700">Flight time: 4-5.5 hours</p>
                    <p className="text-sm text-gray-700">Multiple daily flights</p>
                  </div>
                  <div className="rounded-lg bg-primary-50 p-4">
                    <h4 className="mb-2 font-semibold text-primary-900">Bangalore (BLR)</h4>
                    <p className="mb-1 text-sm text-gray-700">Flight time: 4.5-6 hours</p>
                    <p className="text-sm text-gray-700">Daily flights available</p>
                  </div>
                </div>
                <div className="rounded-lg bg-blue-50 p-4">
                  <h4 className="mb-2 font-semibold text-blue-900">✈️ Flight Cost Estimate</h4>
                  <p className="text-sm text-gray-700">
                    Round-trip tickets typically range from <strong>$200-$600</strong> depending on season and booking time.
                    Book 2-3 months in advance for best prices.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Check className="h-6 w-6 text-primary-600" />
                Visa & Airport Transfer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary-600" />
                  <span className="text-sm text-gray-700">
                    <strong>e-Medical Visa:</strong> Apply online 3-5 days before travel. Valid for 60 days, $80 fee.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary-600" />
                  <span className="text-sm text-gray-700">
                    <strong>Airport Pickup:</strong> Free airport transfer included with treatment packages.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary-600" />
                  <span className="text-sm text-gray-700">
                    <strong>Accommodation:</strong> Partner hotels near hospitals starting from $30/night.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials
        testimonials={TREATMENT_TESTIMONIALS['generic'] || []}
        title="Success Stories from Our Patients"
        subtitle={`Real experiences from patients who traveled from ${isArabic ? city.name_ar : city.name_en} to India`}
        className="bg-gray-50"
      />

      {/* Trust Badges */}
      <TrustBadges />

      {/* FAQ Section */}
      <section className="container px-4 py-16">
        <h2 className="mb-8 text-center font-serif text-3xl font-bold">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto max-w-3xl space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How much can I save by getting treatment in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Patients from {isArabic ? city.name_ar : city.name_en} typically save 60-80% compared to local prices. For example,
                heart bypass surgery costs $120,000 at home but only $6,000-8,000 in India, a savings of over $110,000.
                This includes hospital stay, surgeon fees, and medications.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Are Indian hospitals safe and accredited?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Yes! India has 40+ JCI (Joint Commission International) accredited hospitals, the same standard used by
                top US hospitals. Indian doctors are internationally trained (many from USA, UK, Europe) and hospitals
                use the latest technology and follow strict safety protocols.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How long do I need to stay in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Stay duration depends on your treatment: minor procedures (3-7 days), major surgeries like heart bypass
                or knee replacement (10-14 days), IVF treatment (3-4 weeks). We provide complete support including
                accommodation, airport transfer, and follow-up care.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Will language be a barrier?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Not at all! All doctors and medical staff at top hospitals speak fluent English. We also provide
                dedicated patient coordinators who can communicate in Arabic, ensuring smooth communication throughout
                your treatment journey.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What is included in the treatment package?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Our packages typically include: pre-treatment consultations, all medical procedures, hospital stay,
                surgeon and doctor fees, medications, post-operative care, airport pickup/drop, and accommodation near
                the hospital. Flights and personal expenses are separate.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How do I book my treatment?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Simple! Click &quot;Get Free Consultation&quot; below, share your medical reports, and our team will recommend
                the best hospital and doctor. We&apos;ll arrange everything - appointments, visa support, travel, and
                accommodation. You can also call or WhatsApp us for immediate assistance.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-16">
        <div className="rounded-2xl bg-primary-50 p-8 text-center md:p-12">
          <h2 className="mb-4 font-serif text-3xl font-bold text-primary-900">
            Ready to Start Your Medical Journey?
          </h2>
          <p className="mb-8 text-lg text-primary-700">
            Get a free consultation and personalized treatment plan
          </p>
          <Button asChild size="lg">
            <Link href={`/${locale}/consultation`}>
              Get Free Consultation
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

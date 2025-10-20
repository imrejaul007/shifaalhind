import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Hospital, ArrowRight } from 'lucide-react';

interface PageProps {
  params: {
    locale: string;
    country: string;
    city: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const city = await prisma.city.findUnique({
    where: { slug: params.city },
    include: { country: true },
  });

  if (!city) return {};

  return generateSEOMetadata({
    title_en: city.seoTitle_en || `Medical Tourism from ${city.name_en} to India`,
    title_ar: city.seoTitle_ar || `السياحة العلاجية من ${city.name_ar} إلى الهند`,
    description_en: city.seoDesc_en,
    description_ar: city.seoDesc_ar,
    locale: params.locale,
    path: `/medical-tourism/${params.country}/${params.city}`,
    keywords: city.keywords_en,
  });
}

export default async function CityPage({ params }: PageProps) {
  const t = await getTranslations({ locale: params.locale });

  // Fetch city with treatments
  const city = await prisma.city.findUnique({
    where: { slug: params.city },
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

  const isArabic = params.locale === 'ar';

  // Generate breadcrumb schema
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: `/${params.locale}` },
    { name: 'Medical Tourism', url: `/${params.locale}/medical-tourism` },
    { name: city.country.name_en, url: `/${params.locale}/for-${city.country.slug}-patients` },
    { name: city.name_en, url: `/${params.locale}/medical-tourism/${params.country}/${params.city}` },
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
            <Link href={`/${params.locale}`} className="hover:text-white">
              {t('common.home')}
            </Link>
            <span>/</span>
            <Link href={`/${params.locale}/medical-tourism`} className="hover:text-white">
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
              <Hospital className="h-5 w-5" />
              <span>{city.cityTreatments.length} Treatments Available</span>
            </div>
          </div>

          <p className="mb-8 max-w-3xl text-lg text-primary-50">
            {isArabic ? city.intro_ar : city.intro_en}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href={`/${params.locale}/consultation`}>
                Get Free Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white bg-white/10 text-white hover:bg-white/20">
              <Link href={`/${params.locale}/booking`}>
                Book Treatment
              </Link>
            </Button>
          </div>
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
                  href={`/${params.locale}/medical-tourism/${params.country}/${params.city}/${ct.treatment.slug}`}
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
                      href={`/${params.locale}/hospitals/${hospital.slug}`}
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
            <Link href={`/${params.locale}/consultation`}>
              Get Free Consultation
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

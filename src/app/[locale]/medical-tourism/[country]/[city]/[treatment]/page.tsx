import { notFound } from 'next/navigation';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { generateMetadata as generateSEOMetadata, generateMedicalProcedureSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, DollarSign, Calendar, FileText } from 'lucide-react';

interface PageProps {
  params: {
    locale: string;
    country: string;
    city: string;
    treatment: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const cityTreatment = await prisma.cityTreatment.findFirst({
    where: {
      city: { slug: params.city },
      treatment: { slug: params.treatment },
    },
    include: {
      city: { include: { country: true } },
      treatment: true,
    },
  });

  if (!cityTreatment) return {};

  return generateSEOMetadata({
    title_en: cityTreatment.seoTitle_en || `${cityTreatment.treatment.title_en} for ${cityTreatment.city.name_en} Patients`,
    title_ar: cityTreatment.seoTitle_ar || `${cityTreatment.treatment.title_ar} لمرضى ${cityTreatment.city.name_ar}`,
    description_en: cityTreatment.seoDesc_en,
    description_ar: cityTreatment.seoDesc_ar,
    locale: params.locale,
    path: `/medical-tourism/${params.country}/${params.city}/${params.treatment}`,
    keywords: cityTreatment.keywords_en,
  });
}

export default async function TreatmentPage({ params }: PageProps) {
  const cityTreatment = await prisma.cityTreatment.findFirst({
    where: {
      city: { slug: params.city },
      treatment: { slug: params.treatment },
      published: true,
    },
    include: {
      city: { include: { country: true } },
      treatment: true,
      articles: {
        where: { published: true },
        take: 5,
        orderBy: { createdAt: 'desc' },
      },
    },
  });

  if (!cityTreatment) {
    notFound();
  }

  const isArabic = params.locale === 'ar';
  const { city, treatment, articles } = cityTreatment;

  // Generate schemas
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: `/${params.locale}` },
    { name: 'Medical Tourism', url: `/${params.locale}/medical-tourism` },
    { name: city.country.name_en, url: `/${params.locale}/for-${city.country.slug}-patients` },
    { name: city.name_en, url: `/${params.locale}/medical-tourism/${params.country}/${params.city}` },
    { name: treatment.title_en, url: `/${params.locale}/medical-tourism/${params.country}/${params.city}/${params.treatment}` },
  ]);

  const procedureSchema = generateMedicalProcedureSchema({
    name: treatment.title_en,
    description: treatment.summary_en || '',
    procedureType: treatment.category_en || 'Medical Procedure',
  });

  return (
    <div>
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-primary-100">
            <Link href={`/${params.locale}`} className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href={`/${params.locale}/medical-tourism/${params.country}/${params.city}`} className="hover:text-white">
              {isArabic ? city.name_ar : city.name_en}
            </Link>
            <span>/</span>
            <span>{isArabic ? treatment.title_ar : treatment.title_en}</span>
          </div>

          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            {isArabic ? treatment.title_ar : treatment.title_en} in India
          </h1>
          <p className="mb-2 text-xl text-primary-100">
            For patients from {isArabic ? city.name_ar : city.name_en}, {isArabic ? city.country.name_ar : city.country.name_en}
          </p>

          <div className="mb-8 grid gap-4 sm:grid-cols-3 md:w-2/3">
            {cityTreatment.costMin && cityTreatment.costMax && (
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                <div className="mb-1 flex items-center gap-2 text-sm text-primary-200">
                  <DollarSign className="h-4 w-4" />
                  <span>Cost Range</span>
                </div>
                <div className="text-xl font-bold">
                  ${cityTreatment.costMin.toLocaleString()} - ${cityTreatment.costMax.toLocaleString()}
                </div>
              </div>
            )}
            {treatment.duration && (
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                <div className="mb-1 flex items-center gap-2 text-sm text-primary-200">
                  <Calendar className="h-4 w-4" />
                  <span>Duration</span>
                </div>
                <div className="text-xl font-bold">{treatment.duration}</div>
              </div>
            )}
            {treatment.recovery && (
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                <div className="mb-1 flex items-center gap-2 text-sm text-primary-200">
                  <Clock className="h-4 w-4" />
                  <span>Recovery</span>
                </div>
                <div className="text-xl font-bold">{treatment.recovery}</div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href={`/${params.locale}/consultation?treatment=${treatment.slug}`}>
                Get Free Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white bg-white/10 text-white hover:bg-white/20">
              <Link href={`/${params.locale}/booking?treatment=${treatment.id}`}>
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2>About {isArabic ? treatment.title_ar : treatment.title_en}</h2>
              <p>{isArabic ? (treatment.summary_ar || cityTreatment.intro_ar) : (treatment.summary_en || cityTreatment.intro_en)}</p>

              <h3>Why Choose India for {isArabic ? treatment.title_ar : treatment.title_en}?</h3>
              <ul>
                <li>World-class hospitals with international accreditations (JCI, NABH)</li>
                <li>Experienced specialists with global recognition</li>
                <li>Cost savings of 60-80% compared to GCC countries</li>
                <li>Latest technology and treatment protocols</li>
                <li>English and Arabic speaking staff</li>
              </ul>

              <h3>Treatment Process</h3>
              <ol>
                <li><strong>Consultation:</strong> Free initial consultation with our medical team</li>
                <li><strong>Planning:</strong> Customized treatment plan and cost estimate</li>
                <li><strong>Travel:</strong> Visa assistance and travel arrangements</li>
                <li><strong>Treatment:</strong> World-class care at top hospitals</li>
                <li><strong>Recovery:</strong> Post-treatment care and follow-up</li>
              </ol>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Quick Inquiry</CardTitle>
                <CardDescription>Get a free consultation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild className="w-full">
                  <Link href={`/${params.locale}/consultation?treatment=${treatment.slug}&city=${city.slug}`}>
                    Request Consultation
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/${params.locale}/booking?treatment=${treatment.id}`}>
                    Book Treatment
                  </Link>
                </Button>
                <div className="border-t pt-4">
                  <p className="mb-2 text-sm font-semibold">Need Help?</p>
                  <p className="text-sm text-gray-600">Contact our support team 24/7</p>
                  <Button asChild variant="link" className="px-0">
                    <Link href={`/${params.locale}/contact`}>Contact Us →</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {articles.length > 0 && (
        <section className="bg-gray-50 px-4 py-16">
          <div className="container">
            <h2 className="mb-8 font-serif text-3xl font-bold">
              Related Articles & Guides
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <Card key={article.id} className="transition-shadow hover:shadow-xl">
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
                      <FileText className="h-4 w-4" />
                      <span>Article</span>
                    </div>
                    <CardTitle className="line-clamp-2 text-lg">
                      {isArabic ? article.title_ar : article.title_en}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {isArabic ? article.excerpt_ar : article.excerpt_en}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href={`/${params.locale}/blog/${params.country}/${params.city}/${params.treatment}/${article.slug}`}
                      className="text-sm font-medium text-primary-500 hover:text-primary-600"
                    >
                      Read More →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

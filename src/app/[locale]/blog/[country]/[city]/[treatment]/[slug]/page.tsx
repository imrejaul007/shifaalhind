import { notFound } from 'next/navigation';
import { getTranslations } from 'next/intl/server';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { generateMetadata as generateSEOMetadata, generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { formatDate } from '@/lib/utils';

interface PageProps {
  params: {
    locale: string;
    country: string;
    city: string;
    treatment: string;
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const article = await prisma.article.findUnique({
    where: { slug: params.slug },
    include: {
      city: { include: { country: true } },
      cityTreatment: { include: { treatment: true } },
    },
  });

  if (!article) return {};

  return generateSEOMetadata({
    title_en: article.seoTitle_en || article.title_en,
    title_ar: article.seoTitle_ar || article.title_ar,
    description_en: article.seoDesc_en || article.excerpt_en || undefined,
    description_ar: article.seoDesc_ar || article.excerpt_ar || undefined,
    locale: params.locale,
    path: `/blog/${params.country}/${params.city}/${params.treatment}/${params.slug}`,
    type: 'article',
    publishedTime: article.publishDate?.toISOString(),
    keywords: article.keywords_en,
    images: article.images,
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const article = await prisma.article.findUnique({
    where: { slug: params.slug, published: true },
    include: {
      city: { include: { country: true } },
      cityTreatment: { include: { treatment: true } },
    },
  });

  if (!article) {
    notFound();
  }

  const isArabic = params.locale === 'ar';

  // Get related articles
  const relatedArticles = await prisma.article.findMany({
    where: {
      cityTreatmentId: article.cityTreatmentId,
      published: true,
      id: { not: article.id },
    },
    take: 3,
    orderBy: { createdAt: 'desc' },
  });

  // Generate schemas
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: `/${params.locale}` },
    { name: 'Blog', url: `/${params.locale}/blog` },
    { name: article.city.name_en, url: `/${params.locale}/medical-tourism/${params.country}/${params.city}` },
    { name: article.cityTreatment.treatment.title_en, url: `/${params.locale}/medical-tourism/${params.country}/${params.city}/${params.treatment}` },
    { name: article.title_en, url: `/${params.locale}/blog/${params.country}/${params.city}/${params.treatment}/${params.slug}` },
  ]);

  const articleSchema = generateArticleSchema({
    headline: article.title_en,
    description: article.excerpt_en || '',
    author: 'Shifa AlHind Medical Team',
    datePublished: article.publishDate?.toISOString() || article.createdAt.toISOString(),
    dateModified: article.updatedAt.toISOString(),
    image: article.thumbnail || article.images[0],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumb */}
      <div className="border-b bg-gray-50 px-4 py-4">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href={`/${params.locale}`} className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href={`/${params.locale}/blog`} className="hover:text-primary-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-900">{isArabic ? article.title_ar : article.title_en}</span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <article className="container px-4 py-12">
        <div className="mx-auto max-w-4xl">
          {/* Back Link */}
          <Link
            href={`/${params.locale}/medical-tourism/${params.country}/${params.city}/${params.treatment}`}
            className="mb-6 inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {isArabic ? article.cityTreatment.treatment.title_ar : article.cityTreatment.treatment.title_en}
          </Link>

          {/* Title */}
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight md:text-5xl">
            {isArabic ? article.title_ar : article.title_en}
          </h1>

          {/* Meta */}
          <div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={article.publishDate?.toISOString() || article.createdAt.toISOString()}>
                {formatDate(article.publishDate || article.createdAt, params.locale)}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Shifa AlHind Medical Team</span>
            </div>
            <div className="rounded-full bg-primary-100 px-3 py-1 text-primary-700">
              {isArabic ? article.cityTreatment.treatment.title_ar : article.cityTreatment.treatment.title_en}
            </div>
          </div>

          {/* Excerpt */}
          {(article.excerpt_en || article.excerpt_ar) && (
            <div className="mb-8 rounded-xl bg-primary-50 p-6">
              <p className="text-lg leading-relaxed text-primary-900">
                {isArabic ? article.excerpt_ar : article.excerpt_en}
              </p>
            </div>
          )}

          {/* Featured Image */}
          {article.thumbnail && (
            <div className="mb-12 overflow-hidden rounded-2xl">
              <img
                src={article.thumbnail}
                alt={isArabic ? article.title_ar : article.title_en}
                className="h-auto w-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* This would render the rich content from article.content_en/ar */}
            <p className="text-gray-700">
              {isArabic ? article.excerpt_ar : article.excerpt_en}
            </p>

            <h2>Overview</h2>
            <p>
              This comprehensive guide covers everything {isArabic ? article.city.name_ar : article.city.name_en} patients need to know about{' '}
              {isArabic ? article.cityTreatment.treatment.title_ar : article.cityTreatment.treatment.title_en} in India.
            </p>

            <h3>Key Takeaways</h3>
            <ul>
              <li>World-class treatment facilities with international accreditations</li>
              <li>Experienced specialists with proven track records</li>
              <li>Cost-effective solutions with 60-80% savings</li>
              <li>Comprehensive support from consultation to recovery</li>
              <li>Arabic-speaking medical coordinators available</li>
            </ul>

            <h3>Treatment Process</h3>
            <p>
              The journey begins with a free consultation where our medical team reviews your case and provides recommendations.
            </p>

            <h3>What to Expect</h3>
            <p>
              Our team handles everything from visa assistance to post-treatment care, ensuring a smooth medical tourism experience.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 p-8 text-white">
            <h3 className="mb-4 font-serif text-2xl font-bold">
              Ready to Learn More?
            </h3>
            <p className="mb-6 text-primary-100">
              Get a free consultation from our medical team about {isArabic ? article.cityTreatment.treatment.title_ar : article.cityTreatment.treatment.title_en}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href={`/${params.locale}/consultation?treatment=${article.cityTreatment.treatment.slug}`}>
                  Get Free Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white bg-white/10 text-white hover:bg-white/20">
                <Link href={`/${params.locale}/booking?treatment=${article.cityTreatment.treatmentId}`}>
                  Book Treatment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="border-t bg-gray-50 px-4 py-16">
          <div className="container">
            <h2 className="mb-8 font-serif text-3xl font-bold">Related Articles</h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((related) => (
                <Card key={related.id} className="transition-shadow hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="line-clamp-2">
                      {isArabic ? related.title_ar : related.title_en}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {isArabic ? related.excerpt_ar : related.excerpt_en}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href={`/${params.locale}/blog/${params.country}/${params.city}/${params.treatment}/${related.slug}`}
                      className="text-sm font-medium text-primary-500 hover:text-primary-600"
                    >
                      Read Article →
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

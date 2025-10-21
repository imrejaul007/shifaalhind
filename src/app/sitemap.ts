import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://shifaalhind.onrender.com';

  // Static pages for both locales
  const locales = ['en', 'ar'];
  const staticPages = [
    '',
    '/about',
    '/medical-tourism',
    '/treatments',
    '/hospitals',
    '/doctors',
    '/packages',
    '/stories',
    '/services',
    '/consultation',
    '/faq',
    '/contact',
    '/blog',
    '/privacy',
    '/terms',
    '/refunds',
  ];

  const staticUrls: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of staticPages) {
      staticUrls.push({
        url: `${baseUrl}${locale === 'en' ? '' : '/ar'}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1.0 : 0.8,
      });
    }
  }

  // Dynamic pages from database
  try {
    // Treatments
    const treatments = await prisma.treatment.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
    });

    const treatmentUrls: MetadataRoute.Sitemap = treatments.flatMap((treatment) =>
      locales.map((locale) => ({
        url: `${baseUrl}${locale === 'en' ? '' : '/ar'}/treatments/${treatment.slug}`,
        lastModified: treatment.updatedAt,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
    );

    // Hospitals
    const hospitals = await prisma.hospital.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
    });

    const hospitalUrls: MetadataRoute.Sitemap = hospitals.flatMap((hospital) =>
      locales.map((locale) => ({
        url: `${baseUrl}${locale === 'en' ? '' : '/ar'}/hospitals/${hospital.slug}`,
        lastModified: hospital.updatedAt,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
    );

    // Doctors
    const doctors = await prisma.doctor.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
    });

    const doctorUrls: MetadataRoute.Sitemap = doctors.flatMap((doctor) =>
      locales.map((locale) => ({
        url: `${baseUrl}${locale === 'en' ? '' : '/ar'}/doctors/${doctor.slug}`,
        lastModified: doctor.updatedAt,
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      }))
    );

    // Packages
    const packages = await prisma.package.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
    });

    const packageUrls: MetadataRoute.Sitemap = packages.flatMap((pkg) =>
      locales.map((locale) => ({
        url: `${baseUrl}${locale === 'en' ? '' : '/ar'}/packages/${pkg.slug}`,
        lastModified: pkg.updatedAt,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
    );

    // Cities
    const cities = await prisma.city.findMany({
      where: { published: true },
      select: {
        slug: true,
        updatedAt: true,
        country: {
          select: { slug: true },
        },
      },
    });

    const cityUrls: MetadataRoute.Sitemap = cities.flatMap((city) =>
      locales.map((locale) => ({
        url: `${baseUrl}${locale === 'en' ? '' : '/ar'}/medical-tourism/${city.country.slug}/${city.slug}`,
        lastModified: city.updatedAt,
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      }))
    );

    // Articles
    const articles = await prisma.article.findMany({
      where: { published: true },
      select: {
        slug: true,
        updatedAt: true,
        city: {
          select: {
            slug: true,
            country: { select: { slug: true } },
          },
        },
        cityTreatment: {
          select: {
            treatment: { select: { slug: true } },
          },
        },
      },
    });

    const articleUrls: MetadataRoute.Sitemap = articles.flatMap((article) =>
      locales.map((locale) => ({
        url: `${baseUrl}${locale === 'en' ? '' : '/ar'}/blog/${article.city.country.slug}/${article.city.slug}/${article.cityTreatment.treatment.slug}/${article.slug}`,
        lastModified: article.updatedAt,
        changeFrequency: 'monthly' as const,
        priority: 0.5,
      }))
    );

    // Combine all URLs
    return [
      ...staticUrls,
      ...treatmentUrls,
      ...hospitalUrls,
      ...doctorUrls,
      ...packageUrls,
      ...cityUrls,
      ...articleUrls,
    ];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return static URLs if database query fails
    return staticUrls;
  }
}

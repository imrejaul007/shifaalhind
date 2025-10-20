import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getBaseUrl } from '@/lib/utils';

export async function GET() {
  const baseUrl = getBaseUrl();

  // Get all published entities
  const [cities, treatments, articles] = await Promise.all([
    prisma.city.findMany({
      where: { published: true },
      include: { country: true },
    }),
    prisma.treatment.findMany({
      where: { published: true },
    }),
    prisma.article.findMany({
      where: { published: true },
      include: {
        city: { include: { country: true } },
        cityTreatment: { include: { treatment: true } },
      },
    }),
  ]);

  interface SitemapEntry {
    url: string;
    lastmod: string;
    changefreq: string;
    priority: number;
  }

  const sitemap: SitemapEntry[] = [];

  // Static pages
  const staticPages = [
    { url: '', priority: 1.0, changefreq: 'daily' },
    { url: '/about', priority: 0.8, changefreq: 'monthly' },
    { url: '/services', priority: 0.8, changefreq: 'monthly' },
    { url: '/contact', priority: 0.8, changefreq: 'monthly' },
    { url: '/faq', priority: 0.7, changefreq: 'monthly' },
    { url: '/treatments', priority: 0.9, changefreq: 'weekly' },
    { url: '/hospitals', priority: 0.8, changefreq: 'weekly' },
    { url: '/doctors', priority: 0.8, changefreq: 'weekly' },
  ];

  for (const page of staticPages) {
    for (const locale of ['en', 'ar']) {
      const localePrefix = locale === 'ar' ? '/ar' : '';
      sitemap.push({
        url: `${baseUrl}${localePrefix}${page.url}`,
        lastmod: new Date().toISOString(),
        changefreq: page.changefreq,
        priority: page.priority,
      });
    }
  }

  // City pages
  for (const city of cities) {
    for (const locale of ['en', 'ar']) {
      const localePrefix = locale === 'ar' ? '/ar' : '';
      sitemap.push({
        url: `${baseUrl}${localePrefix}/medical-tourism/${city.country.slug}/${city.slug}`,
        lastmod: city.updatedAt.toISOString(),
        changefreq: 'weekly',
        priority: 0.9,
      });
    }
  }

  // Treatment pages
  for (const treatment of treatments) {
    for (const locale of ['en', 'ar']) {
      const localePrefix = locale === 'ar' ? '/ar' : '';
      sitemap.push({
        url: `${baseUrl}${localePrefix}/treatments/${treatment.slug}`,
        lastmod: treatment.updatedAt.toISOString(),
        changefreq: 'weekly',
        priority: 0.8,
      });
    }
  }

  // Article pages
  for (const article of articles) {
    for (const locale of ['en', 'ar']) {
      const localePrefix = locale === 'ar' ? '/ar' : '';
      sitemap.push({
        url: `${baseUrl}${localePrefix}/blog/${article.city.country.slug}/${article.city.slug}/${article.cityTreatment.treatment.slug}/${article.slug}`,
        lastmod: article.updatedAt.toISOString(),
        changefreq: 'monthly',
        priority: 0.6,
      });
    }
  }

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemap
  .map(
    (entry) => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

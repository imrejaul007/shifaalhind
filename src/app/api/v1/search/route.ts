export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';

// Validation schema
const searchSchema = z.object({
  q: z.string().min(1, 'Search query is required'),
  locale: z.string().optional().default('en'),
  limit: z.number().optional().default(20),
});

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('q');
    const locale = searchParams.get('locale') || 'en';
    const limitParam = searchParams.get('limit');

    // Validate input
    const validationResult = searchSchema.safeParse({
      q: query,
      locale,
      limit: limitParam ? parseInt(limitParam) : 20,
    });

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid search parameters',
          details: validationResult.error.errors,
        },
        { status: 400 }
      );
    }

    const { q, limit } = validationResult.data;
    const searchTerm = q.toLowerCase();

    // Search across multiple entities in parallel
    const [treatments, hospitals, cities, articles] = await Promise.all([
      // Search treatments
      prisma.treatment.findMany({
        where: {
          published: true,
          OR: [
            { title_en: { contains: searchTerm, mode: 'insensitive' } },
            { title_ar: { contains: searchTerm, mode: 'insensitive' } },
            { summary_en: { contains: searchTerm, mode: 'insensitive' } },
            { summary_ar: { contains: searchTerm, mode: 'insensitive' } },
            { category_en: { contains: searchTerm, mode: 'insensitive' } },
            { category_ar: { contains: searchTerm, mode: 'insensitive' } },
          ],
        },
        take: limit,
        orderBy: { title_en: 'asc' },
      }),

      // Search hospitals
      prisma.hospital.findMany({
        where: {
          published: true,
          OR: [
            { name_en: { contains: searchTerm, mode: 'insensitive' } },
            { name_ar: { contains: searchTerm, mode: 'insensitive' } },
            { about_en: { contains: searchTerm, mode: 'insensitive' } },
            { about_ar: { contains: searchTerm, mode: 'insensitive' } },
            { facilities_en: { contains: searchTerm, mode: 'insensitive' } },
            { facilities_ar: { contains: searchTerm, mode: 'insensitive' } },
          ],
        },
        include: {
          city: {
            include: {
              country: true,
            },
          },
        },
        take: limit,
        orderBy: [
          { featured: 'desc' },
          { rating: 'desc' },
        ],
      }),

      // Search cities
      prisma.city.findMany({
        where: {
          published: true,
          OR: [
            { name_en: { contains: searchTerm, mode: 'insensitive' } },
            { name_ar: { contains: searchTerm, mode: 'insensitive' } },
            { intro_en: { contains: searchTerm, mode: 'insensitive' } },
            { intro_ar: { contains: searchTerm, mode: 'insensitive' } },
            { seoDesc_en: { contains: searchTerm, mode: 'insensitive' } },
            { seoDesc_ar: { contains: searchTerm, mode: 'insensitive' } },
          ],
        },
        include: {
          country: true,
        },
        take: limit,
        orderBy: { name_en: 'asc' },
      }),

      // Search articles
      prisma.article.findMany({
        where: {
          published: true,
          OR: [
            { title_en: { contains: searchTerm, mode: 'insensitive' } },
            { title_ar: { contains: searchTerm, mode: 'insensitive' } },
            { excerpt_en: { contains: searchTerm, mode: 'insensitive' } },
            { excerpt_ar: { contains: searchTerm, mode: 'insensitive' } },
          ],
        },
        include: {
          city: {
            include: {
              country: true,
            },
          },
          cityTreatment: {
            include: {
              treatment: true,
            },
          },
        },
        take: limit,
        orderBy: [
          { publishDate: 'desc' },
          { createdAt: 'desc' },
        ],
      }),
    ]);

    // Format results
    const results = {
      treatments: treatments.map((treatment) => ({
        id: treatment.id,
        type: 'treatment' as const,
        title: locale === 'ar' ? treatment.title_ar : treatment.title_en,
        description: locale === 'ar' ? treatment.summary_ar : treatment.summary_en,
        url: `/treatments/${treatment.slug}`,
        slug: treatment.slug,
        category: locale === 'ar' ? treatment.category_ar : treatment.category_en,
      })),

      hospitals: hospitals.map((hospital) => ({
        id: hospital.id,
        type: 'hospital' as const,
        title: locale === 'ar' ? hospital.name_ar : hospital.name_en,
        description: locale === 'ar' ? hospital.about_ar : hospital.about_en,
        url: `/hospitals/${hospital.slug}`,
        slug: hospital.slug,
        location: `${hospital.city.name_en}, ${hospital.city.country.name_en}`,
        rating: hospital.rating,
        accreditations: hospital.accreditations,
      })),

      cities: cities.map((city) => ({
        id: city.id,
        type: 'city' as const,
        title: locale === 'ar' ? city.name_ar : city.name_en,
        description: locale === 'ar' ? (city.intro_ar || city.seoDesc_ar) : (city.intro_en || city.seoDesc_en),
        url: `/medical-tourism/${city.country.slug}/${city.slug}`,
        slug: city.slug,
        country: locale === 'ar' ? city.country.name_ar : city.country.name_en,
      })),

      articles: articles.map((article) => ({
        id: article.id,
        type: 'article' as const,
        title: locale === 'ar' ? article.title_ar : article.title_en,
        description: locale === 'ar' ? article.excerpt_ar : article.excerpt_en,
        url: `/blog/${article.city.country.slug}/${article.city.slug}/${article.cityTreatment.treatment.slug}/${article.slug}`,
        slug: article.slug,
        category: article.cityTreatment.treatment.title_en,
        publishDate: article.publishDate,
      })),
    };

    // Calculate total count
    const totalCount =
      results.treatments.length +
      results.hospitals.length +
      results.cities.length +
      results.articles.length;

    return NextResponse.json(
      {
        success: true,
        query: q,
        totalCount,
        results,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to perform search. Please try again later.',
      },
      { status: 500 }
    );
  }
}

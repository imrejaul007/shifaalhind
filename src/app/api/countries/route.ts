import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

// GET - List all countries
export async function GET(_request: NextRequest) {
  try {
    const countries = await prisma.country.findMany({
      select: {
        id: true,
        name_en: true,
        name_ar: true,
        slug: true,
        code: true,
      },
      orderBy: { name_en: 'asc' },
    });

    return NextResponse.json(countries);
  } catch (error) {
    console.error('Error fetching countries:', error);
    return NextResponse.json(
      { error: 'Failed to fetch countries' },
      { status: 500 }
    );
  }
}

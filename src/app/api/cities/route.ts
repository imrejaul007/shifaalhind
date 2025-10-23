import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

// GET - List all cities
export async function GET(_request: NextRequest) {
  try {
    const cities = await prisma.city.findMany({
      where: { published: true },
      include: {
        country: true,
      },
      orderBy: { name_en: 'asc' },
    });

    return NextResponse.json(cities);
  } catch (error) {
    console.error('Error fetching cities:', error);
    return NextResponse.json(
      { error: 'Failed to fetch cities' },
      { status: 500 }
    );
  }
}

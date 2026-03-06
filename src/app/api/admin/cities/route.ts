import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { cityCreateSchema } from '@/lib/validations/admin';

export const dynamic = 'force-dynamic';

// GET - List all cities
export async function GET(_request: NextRequest) {
  try {
    const session = await auth();
    if (!session || session.user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const cities = await prisma.city.findMany({
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

// POST - Create city
export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session || session.user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const parsed = cityCreateSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const city = await prisma.city.create({
      data: parsed.data,
    });

    return NextResponse.json(city, { status: 201 });
  } catch (error) {
    console.error('Error creating city:', error);
    return NextResponse.json(
      { error: 'Failed to create city' },
      { status: 500 }
    );
  }
}

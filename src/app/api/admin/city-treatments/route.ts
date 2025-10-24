import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';

export const dynamic = 'force-dynamic';

// GET - List all city treatments for dropdown
export async function GET(_request: NextRequest) {
  try {
    const session = await auth();
    if (!session || session.user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const cityTreatments = await prisma.cityTreatment.findMany({
      include: {
        city: {
          select: {
            id: true,
            name_en: true,
          },
        },
        treatment: {
          select: {
            title_en: true,
          },
        },
      },
      where: {
        published: true,
      },
      orderBy: [
        { city: { name_en: 'asc' } },
        { treatment: { title_en: 'asc' } },
      ],
    });

    return NextResponse.json(cityTreatments);
  } catch (error) {
    console.error('Error fetching city treatments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch city treatments' },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { treatmentCreateSchema } from '@/lib/validations/admin';

export const dynamic = 'force-dynamic';

// GET - List all treatments
export async function GET(_request: NextRequest) {
  try {
    const session = await auth();
    if (!session || session.user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const treatments = await prisma.treatment.findMany({
      orderBy: { title_en: 'asc' },
    });

    return NextResponse.json(treatments);
  } catch (error) {
    console.error('Error fetching treatments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch treatments' },
      { status: 500 }
    );
  }
}

// POST - Create treatment
export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session || session.user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const parsed = treatmentCreateSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const treatment = await prisma.treatment.create({
      data: parsed.data,
    });

    return NextResponse.json(treatment, { status: 201 });
  } catch (error) {
    console.error('Error creating treatment:', error);
    return NextResponse.json(
      { error: 'Failed to create treatment' },
      { status: 500 }
    );
  }
}

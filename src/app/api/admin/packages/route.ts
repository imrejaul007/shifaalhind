import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const dynamic = 'force-dynamic';

// GET - List all packages
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const packages = await prisma.package.findMany({
      include: {
        treatment: true,
        hospital: {
          include: {
            city: {
              include: {
                country: true,
              },
            },
          },
        },
        _count: {
          select: {
            bookings: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(packages);
  } catch (error) {
    console.error('Error fetching packages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch packages' },
      { status: 500 }
    );
  }
}

// POST - Create new package
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();

    // Validate required fields
    if (!body.name_en || !body.slug) {
      return NextResponse.json(
        { error: 'Missing required fields: name_en, slug' },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const existing = await prisma.package.findUnique({
      where: { slug: body.slug },
    });

    if (existing) {
      return NextResponse.json(
        { error: 'A package with this slug already exists' },
        { status: 400 }
      );
    }

    // Create package
    const pkg = await prisma.package.create({
      data: {
        name_en: body.name_en,
        name_ar: body.name_ar || body.name_en,
        slug: body.slug,
        treatmentId: body.treatmentId || null,
        hospitalId: body.hospitalId || null,
        items_en: body.items_en || [],
        items_ar: body.items_ar || [],
        priceEstimate: body.priceEstimate || null,
        currency: body.currency || 'USD',
        durationDays: body.durationDays || null,
        description_en: body.description_en || null,
        description_ar: body.description_ar || null,
        published: body.published || false,
        featured: body.featured || false,
      },
    });

    return NextResponse.json(pkg, { status: 201 });
  } catch (error) {
    console.error('Error creating package:', error);
    return NextResponse.json(
      { error: 'Failed to create package' },
      { status: 500 }
    );
  }
}

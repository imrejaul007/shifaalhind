import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';

export const dynamic = 'force-dynamic';

// GET - List all hospitals
export async function GET(_request: NextRequest) {
  try {
    const session = await auth();
    if (!session || session.user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const hospitals = await prisma.hospital.findMany({
      include: {
        city: {
          include: {
            country: true,
          },
        },
        _count: {
          select: {
            doctors: true,
            packages: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(hospitals);
  } catch (error) {
    console.error('Error fetching hospitals:', error);
    return NextResponse.json(
      { error: 'Failed to fetch hospitals' },
      { status: 500 }
    );
  }
}

// POST - Create new hospital
export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session || session.user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();

    // Validate required fields
    if (!body.name_en || !body.slug || !body.cityId) {
      return NextResponse.json(
        { error: 'Missing required fields: name_en, slug, cityId' },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const existing = await prisma.hospital.findUnique({
      where: { slug: body.slug },
    });

    if (existing) {
      return NextResponse.json(
        { error: 'A hospital with this slug already exists' },
        { status: 400 }
      );
    }

    // Create hospital
    const hospital = await prisma.hospital.create({
      data: {
        name_en: body.name_en,
        name_ar: body.name_ar || body.name_en,
        slug: body.slug,
        cityId: body.cityId,
        address_en: body.address_en || null,
        address_ar: body.address_ar || null,
        phone: body.phone || null,
        email: body.email || null,
        website: body.website || null,
        accreditations: body.accreditations || [],
        specialties: body.specialties || [],
        languages: body.languages || [],
        logo: body.logo || null,
        about_en: body.about_en || null,
        about_ar: body.about_ar || null,
        facilities_en: body.facilities_en || null,
        facilities_ar: body.facilities_ar || null,
        seoTitle_en: body.seoTitle_en || null,
        seoTitle_ar: body.seoTitle_ar || null,
        seoDesc_en: body.seoDesc_en || null,
        seoDesc_ar: body.seoDesc_ar || null,
        published: body.published || false,
        featured: body.featured || false,
      },
    });

    return NextResponse.json(hospital, { status: 201 });
  } catch (error) {
    console.error('Error creating hospital:', error);
    return NextResponse.json(
      { error: 'Failed to create hospital' },
      { status: 500 }
    );
  }
}

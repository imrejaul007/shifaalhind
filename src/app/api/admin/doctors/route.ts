import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const dynamic = 'force-dynamic';

// GET - List all doctors
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const doctors = await prisma.doctor.findMany({
      include: {
        hospital: {
          include: {
            city: {
              include: {
                country: true,
              },
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(doctors);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    return NextResponse.json(
      { error: 'Failed to fetch doctors' },
      { status: 500 }
    );
  }
}

// POST - Create new doctor
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();

    // Validate required fields
    if (!body.name_en || !body.slug || !body.hospitalId) {
      return NextResponse.json(
        { error: 'Missing required fields: name_en, slug, hospitalId' },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const existing = await prisma.doctor.findUnique({
      where: { slug: body.slug },
    });

    if (existing) {
      return NextResponse.json(
        { error: 'A doctor with this slug already exists' },
        { status: 400 }
      );
    }

    // Create doctor
    const doctor = await prisma.doctor.create({
      data: {
        name_en: body.name_en,
        name_ar: body.name_ar || body.name_en,
        slug: body.slug,
        title_en: body.title_en || 'Dr.',
        title_ar: body.title_ar || 'د.',
        hospitalId: body.hospitalId,
        specialties: body.specialties || [],
        qualifications: body.qualifications || [],
        experience: body.experience || null,
        languages: body.languages || [],
        bio_en: body.bio_en || null,
        bio_ar: body.bio_ar || null,
        consultationFee: body.consultationFee || null,
        available: body.available ?? true,
        published: body.published || false,
        featured: body.featured || false,
      },
    });

    return NextResponse.json(doctor, { status: 201 });
  } catch (error) {
    console.error('Error creating doctor:', error);
    return NextResponse.json(
      { error: 'Failed to create doctor' },
      { status: 500 }
    );
  }
}

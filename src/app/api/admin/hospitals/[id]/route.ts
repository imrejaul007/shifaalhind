import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const dynamic = 'force-dynamic';

// GET - Get single hospital
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const hospital = await prisma.hospital.findUnique({
      where: { id: params.id },
      include: {
        city: {
          include: {
            country: true,
          },
        },
        doctors: true,
        packages: true,
      },
    });

    if (!hospital) {
      return NextResponse.json({ error: 'Hospital not found' }, { status: 404 });
    }

    return NextResponse.json(hospital);
  } catch (error) {
    console.error('Error fetching hospital:', error);
    return NextResponse.json(
      { error: 'Failed to fetch hospital' },
      { status: 500 }
    );
  }
}

// PUT - Update hospital
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();

    // Check if hospital exists
    const existing = await prisma.hospital.findUnique({
      where: { id: params.id },
    });

    if (!existing) {
      return NextResponse.json({ error: 'Hospital not found' }, { status: 404 });
    }

    // Check if slug is being changed and already exists
    if (body.slug && body.slug !== existing.slug) {
      const slugExists = await prisma.hospital.findUnique({
        where: { slug: body.slug },
      });

      if (slugExists) {
        return NextResponse.json(
          { error: 'A hospital with this slug already exists' },
          { status: 400 }
        );
      }
    }

    // Update hospital
    const hospital = await prisma.hospital.update({
      where: { id: params.id },
      data: {
        name_en: body.name_en,
        name_ar: body.name_ar,
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
        published: body.published ?? existing.published,
        featured: body.featured ?? existing.featured,
        rating: body.rating ?? existing.rating,
        reviewCount: body.reviewCount ?? existing.reviewCount,
      },
    });

    return NextResponse.json(hospital);
  } catch (error) {
    console.error('Error updating hospital:', error);
    return NextResponse.json(
      { error: 'Failed to update hospital' },
      { status: 500 }
    );
  }
}

// DELETE - Delete hospital
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if hospital exists
    const existing = await prisma.hospital.findUnique({
      where: { id: params.id },
      include: {
        _count: {
          select: {
            doctors: true,
            packages: true,
          },
        },
      },
    });

    if (!existing) {
      return NextResponse.json({ error: 'Hospital not found' }, { status: 404 });
    }

    // Check if hospital has related doctors or packages
    if (existing._count.doctors > 0 || existing._count.packages > 0) {
      return NextResponse.json(
        {
          error: `Cannot delete hospital with ${existing._count.doctors} doctors and ${existing._count.packages} packages. Delete them first.`,
        },
        { status: 400 }
      );
    }

    // Delete hospital
    await prisma.hospital.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ success: true, message: 'Hospital deleted' });
  } catch (error) {
    console.error('Error deleting hospital:', error);
    return NextResponse.json(
      { error: 'Failed to delete hospital' },
      { status: 500 }
    );
  }
}

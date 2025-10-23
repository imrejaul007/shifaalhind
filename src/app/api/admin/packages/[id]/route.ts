import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';

export const dynamic = 'force-dynamic';

// GET - Get single package
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session || session.user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const pkg = await prisma.package.findUnique({
      where: { id },
      include: {
        treatment: true,
        hospital: true,
      },
    });

    if (!pkg) {
      return NextResponse.json({ error: 'Package not found' }, { status: 404 });
    }

    return NextResponse.json(pkg);
  } catch (error) {
    console.error('Error fetching package:', error);
    return NextResponse.json({ error: 'Failed to fetch package' }, { status: 500 });
  }
}

// PUT - Update package
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session || session.user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    const existing = await prisma.package.findUnique({ where: { id } });

    if (!existing) {
      return NextResponse.json({ error: 'Package not found' }, { status: 404 });
    }

    // Check slug uniqueness if changed
    if (body.slug && body.slug !== existing.slug) {
      const slugExists = await prisma.package.findUnique({ where: { slug: body.slug } });
      if (slugExists) {
        return NextResponse.json(
          { error: 'A package with this slug already exists' },
          { status: 400 }
        );
      }
    }

    const pkg = await prisma.package.update({
      where: { id },
      data: {
        name_en: body.name_en,
        name_ar: body.name_ar,
        slug: body.slug,
        treatmentId: body.treatmentId || null,
        hospitalId: body.hospitalId || null,
        items_en: body.items_en || [],
        items_ar: body.items_ar || [],
        priceEstimate: body.priceEstimate || null,
        currency: body.currency || existing.currency,
        durationDays: body.durationDays || null,
        description_en: body.description_en || null,
        description_ar: body.description_ar || null,
        published: body.published ?? existing.published,
        featured: body.featured ?? existing.featured,
      },
    });

    return NextResponse.json(pkg);
  } catch (error) {
    console.error('Error updating package:', error);
    return NextResponse.json({ error: 'Failed to update package' }, { status: 500 });
  }
}

// DELETE - Delete package
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session || session.user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const existing = await prisma.package.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            bookings: true,
          },
        },
      },
    });

    if (!existing) {
      return NextResponse.json({ error: 'Package not found' }, { status: 404 });
    }

    // Check if package has bookings
    if (existing._count.bookings > 0) {
      return NextResponse.json(
        {
          error: `Cannot delete package with ${existing._count.bookings} bookings. Cancel or complete them first.`,
        },
        { status: 400 }
      );
    }

    await prisma.package.delete({ where: { id } });
    return NextResponse.json({ success: true, message: 'Package deleted' });
  } catch (error) {
    console.error('Error deleting package:', error);
    return NextResponse.json({ error: 'Failed to delete package' }, { status: 500 });
  }
}

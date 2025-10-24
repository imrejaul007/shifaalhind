import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';

export const dynamic = 'force-dynamic';

// GET - Get single city
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session || session.user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    const city = await prisma.city.findUnique({
      where: { id },
      include: {
        country: true,
      },
    });

    if (!city) {
      return NextResponse.json({ error: 'City not found' }, { status: 404 });
    }

    return NextResponse.json(city);
  } catch (error) {
    console.error('Error fetching city:', error);
    return NextResponse.json({ error: 'Failed to fetch city' }, { status: 500 });
  }
}

// PUT - Update city
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

    const city = await prisma.city.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(city);
  } catch (error) {
    console.error('Error updating city:', error);
    return NextResponse.json({ error: 'Failed to update city' }, { status: 500 });
  }
}

// DELETE - Delete city
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session || session.user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    // Check if city has hospitals, city treatments, or articles
    const hospitals = await prisma.hospital.count({
      where: { cityId: id },
    });

    const cityTreatments = await prisma.cityTreatment.count({
      where: { cityId: id },
    });

    const articles = await prisma.article.count({
      where: { cityId: id },
    });

    if (hospitals > 0 || cityTreatments > 0 || articles > 0) {
      return NextResponse.json(
        {
          error: 'Cannot delete city that has hospitals, treatments, or articles',
          details: { hospitals, cityTreatments, articles }
        },
        { status: 400 }
      );
    }

    await prisma.city.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting city:', error);
    return NextResponse.json({ error: 'Failed to delete city' }, { status: 500 });
  }
}

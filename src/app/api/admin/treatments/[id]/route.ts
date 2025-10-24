import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';

export const dynamic = 'force-dynamic';

// GET - Get single treatment
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

    const treatment = await prisma.treatment.findUnique({
      where: { id },
    });

    if (!treatment) {
      return NextResponse.json({ error: 'Treatment not found' }, { status: 404 });
    }

    return NextResponse.json(treatment);
  } catch (error) {
    console.error('Error fetching treatment:', error);
    return NextResponse.json({ error: 'Failed to fetch treatment' }, { status: 500 });
  }
}

// PUT - Update treatment
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

    const treatment = await prisma.treatment.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(treatment);
  } catch (error) {
    console.error('Error updating treatment:', error);
    return NextResponse.json({ error: 'Failed to update treatment' }, { status: 500 });
  }
}

// DELETE - Delete treatment
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

    // Check if treatment is used in city treatments, packages, or bookings
    const cityTreatments = await prisma.cityTreatment.count({
      where: { treatmentId: id },
    });

    const packages = await prisma.package.count({
      where: { treatmentId: id },
    });

    const bookings = await prisma.booking.count({
      where: { treatmentId: id },
    });

    if (cityTreatments > 0 || packages > 0 || bookings > 0) {
      return NextResponse.json(
        {
          error: 'Cannot delete treatment that is referenced by city treatments, packages, or bookings',
          details: { cityTreatments, packages, bookings }
        },
        { status: 400 }
      );
    }

    await prisma.treatment.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting treatment:', error);
    return NextResponse.json({ error: 'Failed to delete treatment' }, { status: 500 });
  }
}

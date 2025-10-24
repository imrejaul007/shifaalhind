import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';

export const dynamic = 'force-dynamic';

// GET /api/admin/bookings/[id] - Get single booking
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    const booking = await prisma.booking.findUnique({
      where: { id },
      include: {
        treatment: true,
        package: true,
        user: true,
        assignedTranslator: true,
      },
    });

    if (!booking) {
      return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
    }

    return NextResponse.json(booking);
  } catch (error) {
    console.error('Error fetching booking:', error);
    return NextResponse.json({ error: 'Failed to fetch booking' }, { status: 500 });
  }
}

// PUT /api/admin/bookings/[id] - Update booking
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();

    const { status, notes, assignedTranslatorId, ...otherFields } = body;

    // Build update data
    const updateData: any = {
      ...otherFields,
    };

    if (status) {
      updateData.status = status;
    }

    if (assignedTranslatorId !== undefined) {
      updateData.assignedTranslatorId = assignedTranslatorId || null;
    }

    // If notes are provided, add new note to existing notes array
    if (notes && typeof notes === 'string' && notes.trim()) {
      const currentBooking = await prisma.booking.findUnique({
        where: { id },
        select: { notes: true },
      });

      const existingNotes = (currentBooking?.notes as any[]) || [];
      const newNote = {
        text: notes,
        author: session.user.name || session.user.email || 'Admin',
        createdAt: new Date().toISOString(),
      };

      updateData.notes = [...existingNotes, newNote];
    }

    const booking = await prisma.booking.update({
      where: { id },
      data: updateData,
      include: {
        treatment: true,
        package: true,
        user: true,
      },
    });

    return NextResponse.json(booking);
  } catch (error) {
    console.error('Error updating booking:', error);
    return NextResponse.json({ error: 'Failed to update booking' }, { status: 500 });
  }
}

// DELETE /api/admin/bookings/[id] - Delete booking
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    await prisma.booking.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting booking:', error);
    return NextResponse.json({ error: 'Failed to delete booking' }, { status: 500 });
  }
}

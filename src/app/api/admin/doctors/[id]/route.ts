import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const dynamic = 'force-dynamic';

// GET, PUT, DELETE for individual doctor
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const doctor = await prisma.doctor.findUnique({
      where: { id: params.id },
      include: { hospital: true },
    });

    if (!doctor) {
      return NextResponse.json({ error: 'Doctor not found' }, { status: 404 });
    }

    return NextResponse.json(doctor);
  } catch (error) {
    console.error('Error fetching doctor:', error);
    return NextResponse.json({ error: 'Failed to fetch doctor' }, { status: 500 });
  }
}

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
    const existing = await prisma.doctor.findUnique({ where: { id: params.id } });

    if (!existing) {
      return NextResponse.json({ error: 'Doctor not found' }, { status: 404 });
    }

    const doctor = await prisma.doctor.update({
      where: { id: params.id },
      data: {
        name_en: body.name_en,
        name_ar: body.name_ar,
        slug: body.slug,
        title_en: body.title_en,
        title_ar: body.title_ar,
        hospitalId: body.hospitalId,
        specialties: body.specialties || [],
        qualifications: body.qualifications || [],
        experience: body.experience || null,
        languages: body.languages || [],
        bio_en: body.bio_en || null,
        bio_ar: body.bio_ar || null,
        consultationFee: body.consultationFee || null,
        available: body.available ?? existing.available,
        published: body.published ?? existing.published,
        featured: body.featured ?? existing.featured,
      },
    });

    return NextResponse.json(doctor);
  } catch (error) {
    console.error('Error updating doctor:', error);
    return NextResponse.json({ error: 'Failed to update doctor' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const existing = await prisma.doctor.findUnique({ where: { id: params.id } });
    if (!existing) {
      return NextResponse.json({ error: 'Doctor not found' }, { status: 404 });
    }

    await prisma.doctor.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true, message: 'Doctor deleted' });
  } catch (error) {
    console.error('Error deleting doctor:', error);
    return NextResponse.json({ error: 'Failed to delete doctor' }, { status: 500 });
  }
}

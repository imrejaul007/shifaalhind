import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';

const leadSchema = z.object({
  userName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Phone number must be at least 8 characters'),
  countryOrigin: z.string().min(2, 'Country is required'),
  cityOrigin: z.string().optional(),
  treatmentId: z.string().optional(),
  packageId: z.string().optional(),
  preferredDate: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = leadSchema.parse(body);

    // Create booking/lead
    const booking = await prisma.booking.create({
      data: {
        userName: validatedData.userName,
        email: validatedData.email,
        phone: validatedData.phone,
        countryOrigin: validatedData.countryOrigin,
        cityOrigin: validatedData.cityOrigin,
        treatmentId: validatedData.treatmentId,
        packageId: validatedData.packageId,
        preferredDate: validatedData.preferredDate
          ? new Date(validatedData.preferredDate)
          : undefined,
        message: validatedData.message,
        status: 'PENDING',
      },
      include: {
        treatment: true,
        package: true,
      },
    });

    // TODO: Send email notification
    // TODO: Send WhatsApp notification
    // TODO: Add to CRM

    return NextResponse.json({
      success: true,
      data: {
        id: booking.id,
        message: 'Your request has been received. We will contact you shortly.',
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation error',
          details: error.errors,
        },
        { status: 400 }
      );
    }

    console.error('Lead creation error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process your request. Please try again.',
      },
      { status: 500 }
    );
  }
}

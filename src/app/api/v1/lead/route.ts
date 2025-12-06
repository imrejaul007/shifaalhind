import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import {
  sendLeadNotification,
  sendLeadConfirmation,
  sendLeadWhatsAppNotification,
  sendLeadWhatsAppConfirmation,
} from '@/lib/notifications';

export const dynamic = 'force-dynamic';
// Force recompilation - treatmentId removed from booking creation

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
    // Only include treatmentId and packageId if they are valid UUIDs/IDs
    // Otherwise, they will be null to avoid foreign key constraint errors
    const booking = await prisma.booking.create({
      data: {
        userName: validatedData.userName,
        email: validatedData.email,
        phone: validatedData.phone,
        countryOrigin: validatedData.countryOrigin,
        cityOrigin: validatedData.cityOrigin,
        // Don't include treatmentId or packageId - they're not actual database IDs
        // The treatment info is captured in the message field instead
        preferredDate: validatedData.preferredDate
          ? new Date(validatedData.preferredDate)
          : undefined,
        message: validatedData.message,
        status: 'PENDING',
      },
    });

    // Send notifications (non-blocking - don't fail if notifications fail)
    const notificationData = {
      userName: booking.userName,
      email: booking.email,
      phone: booking.phone,
      countryOrigin: booking.countryOrigin,
      message: booking.message || undefined,
    };

    // Send email notifications
    Promise.all([
      sendLeadNotification(notificationData),
      sendLeadConfirmation(notificationData),
    ]).catch((error) => {
      console.error('Email notification error:', error);
    });

    // Send WhatsApp notifications
    Promise.all([
      sendLeadWhatsAppNotification(notificationData),
      sendLeadWhatsAppConfirmation(notificationData),
    ]).catch((error) => {
      console.error('WhatsApp notification error:', error);
    });

    // TODO: Add to CRM (HubSpot, Salesforce, etc.)

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

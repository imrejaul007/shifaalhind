import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import {
  sendContactNotification,
  sendContactConfirmation,
  sendContactWhatsAppNotification,
} from '@/lib/notifications';
import { rateLimit, getClientIp } from '@/lib/rate-limit';

export const dynamic = 'force-dynamic';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(200),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(500),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
});

export async function POST(request: NextRequest) {
  try {
    // Rate limit: 5 requests per minute per IP
    const ip = getClientIp(request);
    const { success: withinLimit } = rateLimit(`contact:${ip}`, { limit: 5, windowSeconds: 60 });
    if (!withinLimit) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Send notifications (non-blocking - don't fail if notifications fail)
    const notificationData = {
      name: validatedData.name,
      email: validatedData.email,
      subject: validatedData.subject,
      message: validatedData.message,
    };

    // Send email notifications
    Promise.all([
      sendContactNotification(notificationData),
      sendContactConfirmation(notificationData),
    ]).catch((error) => {
      console.error('Email notification error:', error);
    });

    // Send WhatsApp notification to support
    sendContactWhatsAppNotification(notificationData).catch((error) => {
      console.error('WhatsApp notification error:', error);
    });

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully! We will get back to you soon.',
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

    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send message. Please try again.',
      },
      { status: 500 }
    );
  }
}

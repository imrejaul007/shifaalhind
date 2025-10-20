import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import {
  sendContactNotification,
  sendContactConfirmation,
  sendContactWhatsAppNotification,
} from '@/lib/notifications';

export const dynamic = 'force-dynamic';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Log the contact form submission
    console.log('[Contact Form Submission]', {
      name: validatedData.name,
      email: validatedData.email,
      subject: validatedData.subject,
      timestamp: new Date().toISOString(),
    });

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

    // TODO: Log to CRM or support system (Zendesk, HubSpot, etc.)

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

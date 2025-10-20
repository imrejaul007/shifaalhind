export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { sendEmail } from '@/lib/notifications/email';

// Validation schema
const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
  locale: z.string().optional().default('en'),
  source: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate input
    const validationResult = newsletterSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid email address',
          details: validationResult.error.errors,
        },
        { status: 400 }
      );
    }

    const { email, locale, source } = validationResult.data;

    // Check if email already exists
    const existingSubscription = await prisma.newsletter.findUnique({
      where: { email },
    });

    if (existingSubscription) {
      // If already subscribed
      if (existingSubscription.subscribed) {
        return NextResponse.json(
          {
            success: false,
            error: 'This email is already subscribed to our newsletter',
          },
          { status: 409 }
        );
      }

      // If previously unsubscribed, resubscribe
      await prisma.newsletter.update({
        where: { email },
        data: {
          subscribed: true,
          locale,
          source,
          updatedAt: new Date(),
        },
      });
    } else {
      // Create new subscription
      await prisma.newsletter.create({
        data: {
          email,
          locale,
          source: source || 'footer',
          subscribed: true,
          verified: false,
        },
      });
    }

    // Send welcome email (non-blocking)
    sendEmail({
      to: email,
      subject: 'Welcome to Shifa AlHind Newsletter',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #10b981 0%, #047857 100%); padding: 40px 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 32px;">Welcome to Shifa AlHind</h1>
          </div>

          <div style="padding: 40px 20px; background: #ffffff;">
            <h2 style="color: #047857; margin-top: 0;">Thank You for Subscribing!</h2>

            <p style="color: #374151; line-height: 1.6;">
              We're thrilled to have you join our community of health-conscious individuals seeking
              world-class medical care at affordable prices.
            </p>

            <p style="color: #374151; line-height: 1.6;">
              You'll receive:
            </p>

            <ul style="color: #374151; line-height: 1.8;">
              <li>Latest medical tourism news and updates</li>
              <li>Exclusive treatment packages and special offers</li>
              <li>Success stories from our patients</li>
              <li>Expert health tips and wellness advice</li>
              <li>Updates about new partner hospitals and specialists</li>
            </ul>

            <div style="margin: 30px 0; padding: 20px; background: #ecfdf5; border-left: 4px solid #10b981;">
              <p style="margin: 0; color: #047857; font-weight: 600;">
                💡 Start exploring our services today!
              </p>
              <p style="margin: 10px 0 0 0; color: #374151;">
                Visit our website to browse treatments, hospitals, and medical packages.
              </p>
            </div>

            <div style="text-align: center; margin-top: 30px;">
              <a href="${process.env.NEXT_PUBLIC_APP_URL || 'https://shifaalhind.com'}"
                 style="display: inline-block; background: #10b981; color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-weight: 600;">
                Explore Our Services
              </a>
            </div>
          </div>

          <div style="padding: 20px; background: #f9fafb; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              You're receiving this email because you subscribed to Shifa AlHind newsletter.
            </p>
            <p style="margin: 10px 0 0 0; color: #6b7280; font-size: 14px;">
              Don't want to receive these emails?
              <a href="${process.env.NEXT_PUBLIC_APP_URL || 'https://shifaalhind.com'}/unsubscribe?email=${email}"
                 style="color: #10b981; text-decoration: none;">Unsubscribe</a>
            </p>
          </div>
        </div>
      `,
      text: `
Welcome to Shifa AlHind Newsletter!

Thank you for subscribing to our newsletter. We're thrilled to have you join our community.

You'll receive:
- Latest medical tourism news and updates
- Exclusive treatment packages and special offers
- Success stories from our patients
- Expert health tips and wellness advice
- Updates about new partner hospitals and specialists

Visit our website: ${process.env.NEXT_PUBLIC_APP_URL || 'https://shifaalhind.com'}

---
You're receiving this email because you subscribed to Shifa AlHind newsletter.
Don't want to receive these emails? Unsubscribe: ${process.env.NEXT_PUBLIC_APP_URL || 'https://shifaalhind.com'}/unsubscribe?email=${email}
      `,
    }).catch((error) => {
      console.error('Failed to send welcome email:', error);
      // Don't fail the request if email fails
    });

    // Notify admin (non-blocking)
    if (process.env.ADMIN_EMAIL) {
      sendEmail({
        to: process.env.ADMIN_EMAIL,
        subject: 'New Newsletter Subscription',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px;">
            <h2 style="color: #047857;">New Newsletter Subscription</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Locale:</strong> ${locale}</p>
            <p><strong>Source:</strong> ${source || 'footer'}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
        `,
        text: `
New Newsletter Subscription

Email: ${email}
Locale: ${locale}
Source: ${source || 'footer'}
Time: ${new Date().toLocaleString()}
        `,
      }).catch((error) => {
        console.error('Failed to send admin notification:', error);
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully subscribed to the newsletter!',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to subscribe. Please try again later.',
      },
      { status: 500 }
    );
  }
}

// Unsubscribe endpoint
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email parameter is required',
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailSchema = z.string().email();
    const validationResult = emailSchema.safeParse(email);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid email address',
        },
        { status: 400 }
      );
    }

    // Update subscription status
    const subscription = await prisma.newsletter.findUnique({
      where: { email },
    });

    if (!subscription) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email not found in our newsletter list',
        },
        { status: 404 }
      );
    }

    await prisma.newsletter.update({
      where: { email },
      data: {
        subscribed: false,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully unsubscribed from the newsletter',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter unsubscribe error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to unsubscribe. Please try again later.',
      },
      { status: 500 }
    );
  }
}

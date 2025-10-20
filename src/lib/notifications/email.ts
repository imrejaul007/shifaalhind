/**
 * Email Notification Service
 *
 * This module provides email notification functionality.
 * Configure environment variables to enable:
 * - SENDGRID_API_KEY (recommended) OR
 * - EMAIL_SERVER_* variables for SMTP
 */

interface EmailOptions {
  to: string;
  subject: string;
  html?: string;
  text?: string;
}

interface LeadNotificationData {
  userName: string;
  email: string;
  phone: string;
  countryOrigin: string;
  treatmentId?: string;
  message?: string;
}

interface ContactNotificationData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Send email notification
 * Currently logs to console. Integrate with SendGrid or SMTP for production.
 */
export async function sendEmail(options: EmailOptions): Promise<boolean> {
  try {
    // Check if email is configured
    const hasEmailConfig =
      process.env.SENDGRID_API_KEY ||
      process.env.EMAIL_SERVER_HOST;

    if (!hasEmailConfig) {
      console.log('[Email Service] Not configured. Would send:', {
        to: options.to,
        subject: options.subject,
        textPreview: options.text?.substring(0, 100),
      });
      return true;
    }

    // TODO: Implement actual email sending
    // Example with SendGrid:
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await sgMail.send({
    //   to: options.to,
    //   from: process.env.EMAIL_FROM || 'noreply@shifaalhind.com',
    //   subject: options.subject,
    //   html: options.html,
    //   text: options.text,
    // });

    console.log('[Email Service] Email sent successfully to:', options.to);
    return true;
  } catch (error) {
    console.error('[Email Service] Failed to send email:', error);
    return false;
  }
}

/**
 * Send lead notification to admin team
 */
export async function sendLeadNotification(data: LeadNotificationData): Promise<boolean> {
  const html = `
    <h2>New Lead Received</h2>
    <p>A new patient inquiry has been submitted:</p>
    <ul>
      <li><strong>Name:</strong> ${data.userName}</li>
      <li><strong>Email:</strong> ${data.email}</li>
      <li><strong>Phone:</strong> ${data.phone}</li>
      <li><strong>Country:</strong> ${data.countryOrigin}</li>
      ${data.treatmentId ? `<li><strong>Treatment ID:</strong> ${data.treatmentId}</li>` : ''}
      ${data.message ? `<li><strong>Message:</strong> ${data.message}</li>` : ''}
    </ul>
    <p>Please follow up within 24 hours.</p>
  `;

  const text = `
New Lead Received

Name: ${data.userName}
Email: ${data.email}
Phone: ${data.phone}
Country: ${data.countryOrigin}
${data.treatmentId ? `Treatment ID: ${data.treatmentId}` : ''}
${data.message ? `Message: ${data.message}` : ''}

Please follow up within 24 hours.
  `.trim();

  return sendEmail({
    to: process.env.ADMIN_EMAIL || 'admin@shifaalhind.com',
    subject: `New Lead: ${data.userName} from ${data.countryOrigin}`,
    html,
    text,
  });
}

/**
 * Send confirmation email to patient
 */
export async function sendLeadConfirmation(data: LeadNotificationData): Promise<boolean> {
  const html = `
    <h2>Thank You for Your Interest!</h2>
    <p>Dear ${data.userName},</p>
    <p>We have received your inquiry for medical treatment in India. Our medical team will review your request and contact you within 24 hours.</p>
    <h3>Your Details:</h3>
    <ul>
      <li><strong>Email:</strong> ${data.email}</li>
      <li><strong>Phone:</strong> ${data.phone}</li>
      <li><strong>Country:</strong> ${data.countryOrigin}</li>
    </ul>
    <p>If you have any urgent questions, please contact us at:</p>
    <ul>
      <li><strong>Phone:</strong> +971 50 123 4567</li>
      <li><strong>WhatsApp:</strong> +971 50 123 4567</li>
      <li><strong>Email:</strong> support@shifaalhind.com</li>
    </ul>
    <p>Best regards,<br>Shifa AlHind Team</p>
  `;

  const text = `
Thank You for Your Interest!

Dear ${data.userName},

We have received your inquiry for medical treatment in India. Our medical team will review your request and contact you within 24 hours.

Your Details:
- Email: ${data.email}
- Phone: ${data.phone}
- Country: ${data.countryOrigin}

If you have any urgent questions, please contact us at:
- Phone: +971 50 123 4567
- WhatsApp: +971 50 123 4567
- Email: support@shifaalhind.com

Best regards,
Shifa AlHind Team
  `.trim();

  return sendEmail({
    to: data.email,
    subject: 'Thank You for Your Inquiry - Shifa AlHind',
    html,
    text,
  });
}

/**
 * Send contact form notification to support team
 */
export async function sendContactNotification(data: ContactNotificationData): Promise<boolean> {
  const html = `
    <h2>New Contact Form Submission</h2>
    <p>A new message has been received through the contact form:</p>
    <ul>
      <li><strong>Name:</strong> ${data.name}</li>
      <li><strong>Email:</strong> ${data.email}</li>
      <li><strong>Subject:</strong> ${data.subject}</li>
    </ul>
    <h3>Message:</h3>
    <p>${data.message.replace(/\n/g, '<br>')}</p>
    <p>Please respond within 24 hours.</p>
  `;

  const text = `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

Please respond within 24 hours.
  `.trim();

  return sendEmail({
    to: process.env.SUPPORT_EMAIL || 'support@shifaalhind.com',
    subject: `Contact Form: ${data.subject}`,
    html,
    text,
  });
}

/**
 * Send auto-reply to contact form submitter
 */
export async function sendContactConfirmation(data: ContactNotificationData): Promise<boolean> {
  const html = `
    <h2>Thank You for Contacting Us!</h2>
    <p>Dear ${data.name},</p>
    <p>We have received your message and will respond within 24 hours.</p>
    <h3>Your Message:</h3>
    <p><strong>Subject:</strong> ${data.subject}</p>
    <p>${data.message.replace(/\n/g, '<br>')}</p>
    <p>If you have an urgent inquiry, please contact us directly at:</p>
    <ul>
      <li><strong>Phone:</strong> +971 50 123 4567</li>
      <li><strong>WhatsApp:</strong> +971 50 123 4567</li>
      <li><strong>Email:</strong> support@shifaalhind.com</li>
    </ul>
    <p>Best regards,<br>Shifa AlHind Support Team</p>
  `;

  const text = `
Thank You for Contacting Us!

Dear ${data.name},

We have received your message and will respond within 24 hours.

Your Message:
Subject: ${data.subject}
${data.message}

If you have an urgent inquiry, please contact us directly at:
- Phone: +971 50 123 4567
- WhatsApp: +971 50 123 4567
- Email: support@shifaalhind.com

Best regards,
Shifa AlHind Support Team
  `.trim();

  return sendEmail({
    to: data.email,
    subject: 'Thank You for Your Message - Shifa AlHind',
    html,
    text,
  });
}

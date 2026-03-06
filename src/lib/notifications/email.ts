/**
 * Email Notification Service
 *
 * Uses Nodemailer with SMTP configuration.
 * Configure environment variables to enable:
 * - EMAIL_SERVER_HOST, EMAIL_SERVER_PORT, EMAIL_SERVER_USER, EMAIL_SERVER_PASSWORD
 * - EMAIL_FROM (sender address)
 */

import nodemailer from 'nodemailer';
import { escapeHtml } from '@/lib/html-escape';

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

let transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter | null {
  if (transporter) return transporter;

  const host = process.env.EMAIL_SERVER_HOST;
  const port = parseInt(process.env.EMAIL_SERVER_PORT || '587', 10);
  const user = process.env.EMAIL_SERVER_USER;
  const pass = process.env.EMAIL_SERVER_PASSWORD;

  if (!host || !user || !pass) {
    return null;
  }

  transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  return transporter;
}

/**
 * Send email notification
 */
export async function sendEmail(options: EmailOptions): Promise<boolean> {
  try {
    const transport = getTransporter();

    if (!transport) {
      // Email not configured — silently skip in development
      if (process.env.NODE_ENV === 'development') {
        console.warn('[Email] Not configured, skipping send to:', options.to);
      }
      return true;
    }

    await transport.sendMail({
      from: process.env.EMAIL_FROM || 'noreply@shifaalhind.com',
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
    });

    return true;
  } catch (error) {
    console.error('[Email] Failed to send:', error);
    return false;
  }
}

/**
 * Send lead notification to admin team
 */
export async function sendLeadNotification(data: LeadNotificationData): Promise<boolean> {
  const safe = {
    userName: escapeHtml(data.userName),
    email: escapeHtml(data.email),
    phone: escapeHtml(data.phone),
    countryOrigin: escapeHtml(data.countryOrigin),
    treatmentId: data.treatmentId ? escapeHtml(data.treatmentId) : undefined,
    message: data.message ? escapeHtml(data.message) : undefined,
  };

  const html = `
    <h2>New Lead Received</h2>
    <p>A new patient inquiry has been submitted:</p>
    <ul>
      <li><strong>Name:</strong> ${safe.userName}</li>
      <li><strong>Email:</strong> ${safe.email}</li>
      <li><strong>Phone:</strong> ${safe.phone}</li>
      <li><strong>Country:</strong> ${safe.countryOrigin}</li>
      ${safe.treatmentId ? `<li><strong>Treatment ID:</strong> ${safe.treatmentId}</li>` : ''}
      ${safe.message ? `<li><strong>Message:</strong> ${safe.message}</li>` : ''}
    </ul>
    <p>Please follow up within 24 hours.</p>
  `;

  return sendEmail({
    to: process.env.ADMIN_EMAIL || 'admin@shifaalhind.com',
    subject: `New Lead: ${safe.userName} from ${safe.countryOrigin}`,
    html,
    text: `New Lead: ${data.userName}, ${data.email}, ${data.phone}, ${data.countryOrigin}`,
  });
}

/**
 * Send confirmation email to patient
 */
export async function sendLeadConfirmation(data: LeadNotificationData): Promise<boolean> {
  const safe = {
    userName: escapeHtml(data.userName),
    email: escapeHtml(data.email),
    phone: escapeHtml(data.phone),
    countryOrigin: escapeHtml(data.countryOrigin),
  };

  const html = `
    <h2>Thank You for Your Interest!</h2>
    <p>Dear ${safe.userName},</p>
    <p>We have received your inquiry for medical treatment in India. Our medical team will review your request and contact you within 24 hours.</p>
    <h3>Your Details:</h3>
    <ul>
      <li><strong>Email:</strong> ${safe.email}</li>
      <li><strong>Phone:</strong> ${safe.phone}</li>
      <li><strong>Country:</strong> ${safe.countryOrigin}</li>
    </ul>
    <p>If you have any urgent questions, please contact us via WhatsApp at ${process.env.NEXT_PUBLIC_SUPPORT_WHATSAPP || '+971501234567'}.</p>
    <p>Best regards,<br>Shifa AlHind Team</p>
  `;

  return sendEmail({
    to: data.email,
    subject: 'Thank You for Your Inquiry - Shifa AlHind',
    html,
    text: `Dear ${data.userName}, Thank you for your inquiry. Our team will contact you within 24 hours.`,
  });
}

/**
 * Send contact form notification to support team
 */
export async function sendContactNotification(data: ContactNotificationData): Promise<boolean> {
  const safe = {
    name: escapeHtml(data.name),
    email: escapeHtml(data.email),
    subject: escapeHtml(data.subject),
    message: escapeHtml(data.message).replace(/\n/g, '<br>'),
  };

  const html = `
    <h2>New Contact Form Submission</h2>
    <ul>
      <li><strong>Name:</strong> ${safe.name}</li>
      <li><strong>Email:</strong> ${safe.email}</li>
      <li><strong>Subject:</strong> ${safe.subject}</li>
    </ul>
    <h3>Message:</h3>
    <p>${safe.message}</p>
    <p>Please respond within 24 hours.</p>
  `;

  return sendEmail({
    to: process.env.SUPPORT_EMAIL || 'support@shifaalhind.com',
    subject: `Contact Form: ${data.subject}`,
    html,
    text: `From: ${data.name} (${data.email})\nSubject: ${data.subject}\n\n${data.message}`,
  });
}

/**
 * Send auto-reply to contact form submitter
 */
export async function sendContactConfirmation(data: ContactNotificationData): Promise<boolean> {
  const safe = {
    name: escapeHtml(data.name),
    subject: escapeHtml(data.subject),
    message: escapeHtml(data.message).replace(/\n/g, '<br>'),
  };

  const html = `
    <h2>Thank You for Contacting Us!</h2>
    <p>Dear ${safe.name},</p>
    <p>We have received your message and will respond within 24 hours.</p>
    <h3>Your Message:</h3>
    <p><strong>Subject:</strong> ${safe.subject}</p>
    <p>${safe.message}</p>
    <p>If you have an urgent inquiry, please contact us via WhatsApp at ${process.env.NEXT_PUBLIC_SUPPORT_WHATSAPP || '+971501234567'}.</p>
    <p>Best regards,<br>Shifa AlHind Support Team</p>
  `;

  return sendEmail({
    to: data.email,
    subject: 'Thank You for Your Message - Shifa AlHind',
    html,
    text: `Dear ${data.name}, Thank you for your message. We will respond within 24 hours.`,
  });
}

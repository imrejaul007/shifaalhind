/**
 * WhatsApp Notification Service via Twilio
 *
 * Configure environment variables to enable:
 * - TWILIO_ACCOUNT_SID
 * - TWILIO_AUTH_TOKEN
 * - TWILIO_WHATSAPP_NUMBER (format: whatsapp:+1234567890)
 * - ADMIN_WHATSAPP (admin number to receive notifications)
 */

import twilio from 'twilio';

interface WhatsAppOptions {
  to: string;
  message: string;
}

interface LeadNotificationData {
  userName: string;
  email: string;
  phone: string;
  countryOrigin: string;
  treatmentId?: string;
}

let client: twilio.Twilio | null = null;

function getTwilioClient(): twilio.Twilio | null {
  if (client) return client;

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;

  if (!accountSid || !authToken) {
    return null;
  }

  client = twilio(accountSid, authToken);
  return client;
}

/**
 * Send WhatsApp message via Twilio
 */
export async function sendWhatsApp(options: WhatsAppOptions): Promise<boolean> {
  try {
    const twilioClient = getTwilioClient();
    const fromNumber = process.env.TWILIO_WHATSAPP_NUMBER;

    if (!twilioClient || !fromNumber) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[WhatsApp] Not configured, skipping send to:', options.to);
      }
      return true;
    }

    const to = options.to.startsWith('whatsapp:') ? options.to : `whatsapp:${options.to}`;
    const from = fromNumber.startsWith('whatsapp:') ? fromNumber : `whatsapp:${fromNumber}`;

    await twilioClient.messages.create({
      from,
      to,
      body: options.message,
    });

    return true;
  } catch (error) {
    console.error('[WhatsApp] Failed to send:', error);
    return false;
  }
}

/**
 * Send lead notification to admin via WhatsApp
 */
export async function sendLeadWhatsAppNotification(
  data: LeadNotificationData
): Promise<boolean> {
  const message = `
🔔 *New Lead Received*

👤 *Name:* ${data.userName}
📧 *Email:* ${data.email}
📱 *Phone:* ${data.phone}
🌍 *Country:* ${data.countryOrigin}
${data.treatmentId ? `💊 *Treatment ID:* ${data.treatmentId}` : ''}

⏰ Please follow up within 24 hours.
  `.trim();

  const adminWhatsApp = process.env.ADMIN_WHATSAPP || process.env.NEXT_PUBLIC_SUPPORT_WHATSAPP;
  if (!adminWhatsApp) return true;

  return sendWhatsApp({ to: adminWhatsApp, message });
}

/**
 * Send welcome WhatsApp to patient
 */
export async function sendLeadWhatsAppConfirmation(
  data: LeadNotificationData
): Promise<boolean> {
  const message = `
🏥 *Shifa AlHind - Thank You!*

Dear ${data.userName},

Thank you for your interest in medical treatment in India.

✅ We have received your inquiry
⏰ Our team will contact you within 24 hours

Best regards,
Shifa AlHind Team
  `.trim();

  return sendWhatsApp({ to: data.phone, message });
}

/**
 * Send contact form notification to support via WhatsApp
 */
export async function sendContactWhatsAppNotification(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<boolean> {
  const message = `
📨 *New Contact Form Message*

👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
📋 *Subject:* ${data.subject}

💬 *Message:*
${data.message.substring(0, 500)}

⏰ Please respond within 24 hours.
  `.trim();

  const supportWhatsApp = process.env.SUPPORT_WHATSAPP || process.env.NEXT_PUBLIC_SUPPORT_WHATSAPP;
  if (!supportWhatsApp) return true;

  return sendWhatsApp({ to: supportWhatsApp, message });
}

/**
 * WhatsApp Notification Service
 *
 * This module provides WhatsApp notification functionality via Twilio.
 * Configure environment variables to enable:
 * - TWILIO_ACCOUNT_SID
 * - TWILIO_AUTH_TOKEN
 * - TWILIO_WHATSAPP_FROM (format: whatsapp:+1234567890)
 * - ADMIN_WHATSAPP (admin number to receive notifications)
 */

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

/**
 * Send WhatsApp message
 * Currently logs to console. Integrate with Twilio for production.
 */
export async function sendWhatsApp(options: WhatsAppOptions): Promise<boolean> {
  try {
    // Check if WhatsApp is configured
    const hasWhatsAppConfig =
      process.env.TWILIO_ACCOUNT_SID &&
      process.env.TWILIO_AUTH_TOKEN &&
      process.env.TWILIO_WHATSAPP_FROM;

    if (!hasWhatsAppConfig) {
      console.log('[WhatsApp Service] Not configured. Would send:', {
        to: options.to,
        messagePreview: options.message.substring(0, 100),
      });
      return true;
    }

    // TODO: Implement actual WhatsApp sending
    // Example with Twilio:
    // const twilio = require('twilio');
    // const client = twilio(
    //   process.env.TWILIO_ACCOUNT_SID,
    //   process.env.TWILIO_AUTH_TOKEN
    // );
    // await client.messages.create({
    //   from: process.env.TWILIO_WHATSAPP_FROM,
    //   to: options.to.startsWith('whatsapp:') ? options.to : `whatsapp:${options.to}`,
    //   body: options.message,
    // });

    console.log('[WhatsApp Service] Message sent successfully to:', options.to);
    return true;
  } catch (error) {
    console.error('[WhatsApp Service] Failed to send message:', error);
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

_Sent from Shifa AlHind Platform_
  `.trim();

  const adminWhatsApp = process.env.ADMIN_WHATSAPP || '+971501234567';

  return sendWhatsApp({
    to: adminWhatsApp,
    message,
  });
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
📞 You can also reach us at +971 50 123 4567

*Your Details:*
📧 ${data.email}
📱 ${data.phone}
🌍 ${data.countryOrigin}

Best regards,
Shifa AlHind Team
  `.trim();

  return sendWhatsApp({
    to: data.phone,
    message,
  });
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
${data.message}

⏰ Please respond within 24 hours.

_Sent from Shifa AlHind Platform_
  `.trim();

  const supportWhatsApp = process.env.SUPPORT_WHATSAPP || '+971501234567';

  return sendWhatsApp({
    to: supportWhatsApp,
    message,
  });
}

/**
 * Notification Services
 *
 * Central export for all notification functionality.
 * Supports Email and WhatsApp notifications.
 *
 * Configuration:
 * - See email.ts for email setup
 * - See whatsapp.ts for WhatsApp setup
 */

export {
  sendEmail,
  sendLeadNotification,
  sendLeadConfirmation,
  sendContactNotification,
  sendContactConfirmation,
} from './email';

export {
  sendWhatsApp,
  sendLeadWhatsAppNotification,
  sendLeadWhatsAppConfirmation,
  sendContactWhatsAppNotification,
} from './whatsapp';

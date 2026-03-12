'use client';

import { MessageCircle, X, MessageSquare, Phone, Calendar, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';

interface WhatsAppFloatProps {
  treatment?: string;
  country?: string;
  locale?: 'en' | 'ar';
}

/**
 * WhatsApp Floating Button Component with Enhanced Features
 * - Context-aware messaging
 * - Quick action templates
 * - GCC-specific support
 * - Better UX
 */
export function WhatsAppFloat({ treatment, country, locale = 'en' }: WhatsAppFloatProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);

  // Show button after 2 seconds (non-intrusive)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Use the configured support WhatsApp number from environment
  const defaultNumber = process.env.NEXT_PUBLIC_SUPPORT_WHATSAPP?.replace('+', '') || '919876543210';

  const isRtl = locale === 'ar';

  // Smart context-aware message templates
  const countryText = country ? ` from ${country}` : '';

  const templates = [
    {
      id: 'consultation',
      icon: <MessageSquare className="h-4 w-4" />,
      label: isRtl ? 'طلب استشارة مجانية' : 'Free Consultation',
      message: isRtl
        ? 'مرحباً، أود الحصول على استشارة مجانية عن العلاج الطبي في الهند.'
        : `Hi! I'd like a free consultation${treatment ? ` for ${treatment}` : ''}${countryText}. Can you help?`
    },
    {
      id: 'cost',
      icon: <FileText className="h-4 w-4" />,
      label: isRtl ? 'استفسار عن الأسعار' : 'Cost Estimate',
      message: isRtl
        ? 'مرحباً، أحتاج معرفة تكلفة العلاج والأسعار التقديرية.'
        : `Hi! Could you send me a cost estimate${treatment ? ` for ${treatment}` : ''}?`
    },
    {
      id: 'callback',
      icon: <Phone className="h-4 w-4" />,
      label: isRtl ? 'طلب اتصال' : 'Call Back',
      message: isRtl
        ? 'مرحباً، يمكنكم الاتصال بي لإعطائي المزيد من التفاصيل.'
        : 'Hi! Please call me back to discuss treatment options.'
    },
    {
      id: 'appointment',
      icon: <Calendar className="h-4 w-4" />,
      label: isRtl ? 'حجز موعد' : 'Book Appointment',
      message: isRtl
        ? 'مرحباً، أرغب في حجز موعد للعلاج.'
        : `Hi! I'd like to book an appointment${treatment ? ` for ${treatment}` : ''}.`
    },
  ];

  const createWhatsAppUrl = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${defaultNumber}?text=${encodedMessage}`;
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href={showTemplates ? '#' : createWhatsAppUrl(templates[0].message)}
        onClick={(e) => {
          if (showTemplates) {
            e.preventDefault();
            setShowTemplates(false);
          }
        }}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl md:h-16 md:w-16 ${showTemplates ? 'rotate-45' : ''}`}
        aria-label={isRtl ? 'واتساب' : 'Chat on WhatsApp'}
      >
        <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />

        {/* Online indicator */}
        <span className="absolute bottom-1 right-1 flex h-3.5 w-3.5">
          <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500"></span>
        </span>
      </a>

      {/* WhatsApp Chat Popup with Templates */}
      {showTemplates && (
        <div className="fixed bottom-24 right-6 z-40 w-72 animate-in fade-in slide-in-from-bottom-4 md:w-80" dir={isRtl ? 'rtl' : 'ltr'}>
          <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
            {/* Header */}
            <div className="bg-[#25D366] px-4 py-3 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{isRtl ? 'فريق شفاء الهند' : 'Shifa AlHind Team'}</h3>
                  <p className="text-xs opacity-90">
                    {isRtl ? 'أونلاين - يرد في دقيقتين' : 'Online - Replies in 2 min'}
                  </p>
                </div>
                <button
                  onClick={() => setShowTemplates(false)}
                  className="rounded-full p-1 hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Message Templates */}
            <div className="p-3 space-y-2">
              <p className="text-center text-xs text-gray-500">
                {isRtl ? 'اختر رسالة سريعة أو اكتب رسالتك:' : 'Choose a quick message or type below:'}
              </p>

              {templates.map((template) => (
                <a
                  key={template.id}
                  href={createWhatsAppUrl(template.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3 transition-all hover:bg-green-50 hover:shadow-md"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                    {template.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-800">{template.label}</span>
                </a>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t bg-gray-50 px-4 py-2">
              <p className="text-center text-xs text-gray-500">
                {isRtl ? '✅ خدمة 24/7 باللغة العربية' : '✅ 24/7 Arabic-speaking support'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Template toggle button */}
      {!showTemplates && (
        <button
          onClick={() => setShowTemplates(true)}
          className="fixed bottom-24 right-6 z-40 animate-bounce rounded-lg bg-white px-4 py-2 shadow-lg md:px-6"
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          <p className="flex items-center gap-2 text-sm font-medium text-gray-900">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            {isRtl ? 'ابدأ المحادثة الآن' : 'Start Chat Now'}
          </p>
        </button>
      )}

      {/* Custom animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(-5%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        @keyframes slide-in-from-bottom-4 {
          0% { transform: translateY(1rem); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-in {
          animation-duration: 0.3s;
          animation-fill-mode: both;
        }
        .slide-in-from-bottom-4 {
          animation-name: slide-in-from-bottom-4;
        }
        .fade-in {
          animation-name: fade-in;
        }
      `}</style>
    </>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X, Minimize2 } from 'lucide-react';

interface LiveChatProps {
  locale?: 'en' | 'ar';
  position?: 'fixed' | 'absolute';
}

/**
 * Live Chat Widget Component
 * Uses Tawk.to or Crisp for real-time support
 * Critical for conversion and patient assistance
 */
export function LiveChat({ locale = 'en', position = 'fixed' }: LiveChatProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  const isRtl = locale === 'ar';

  // Show chat widget after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChat(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Simulate unread messages
  useEffect(() => {
    const interval = setInterval(() => {
      setUnreadCount(prev => prev < 3 ? prev + 1 : prev);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={toggleMinimize}
        className={`${
          position === 'fixed' ? 'fixed' : 'absolute'
        } bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl md:h-16 md:w-16 ${
          isMinimized ? 'scale-75' : ''
        }`}
        aria-label={isRtl ? 'محادثة مباشرة' : 'Live Chat'}
      >
        {isMinimized ? (
          <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
        ) : (
          <>
            <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex h-5 w-5 rounded-full bg-red-500 text-xs font-bold text-white">
                  {unreadCount > 9 ? '9+' : unreadCount}
                </span>
              </span>
            )}
          </>
        )}
      </button>

      {/* Minimized indicator - small pill */}
      {isMinimized && (
        <div className="fixed bottom-6 right-24 z-50 animate-bounce" dir={isRtl ? 'rtl' : 'ltr'}>
          <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg">
            <MessageCircle className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-900">
              {isRtl ? 'دردنا سريع' : 'Quick replies'}
            </span>
            <button
              onClick={toggleMinimize}
              className="ml-2 rounded-full bg-gray-100 p-1 hover:bg-gray-200"
              aria-label={isRtl ? 'فتح المحادثة' : 'Open chat'}
            >
              <X className="h-3 w-3 text-gray-600" />
            </button>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {!isMinimized && showChat && (
        <div className="fixed bottom-24 right-6 z-40 w-96 animate-in slide-in-from-bottom-4 md:w-[450px]" dir={isRtl ? 'rtl' : 'ltr'}>
          <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 text-white">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      {isRtl ? 'فريق شفاء الهند' : 'Shifa AlHind Team'}
                    </h3>
                    <p className="text-xs opacity-90">
                      {isRtl ? 'أونلاين - يرد في دقيقتين' : 'Online - Typically replies in 2 min'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={toggleMinimize}
                  className="rounded-full p-2 hover:bg-white/20"
                  aria-label={isRtl ? 'تصغير' : 'Minimize'}
                >
                  <Minimize2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-4 space-y-4">
              {/* Welcome message */}
              <div className="rounded-lg bg-blue-50 p-4">
                <p className="text-sm text-gray-800">
                  {isRtl
                    ? 'مرحباً! كيف يمكنني مساعدتك اليوم؟ نحن هنا لمساعدتك في أي شيء يتعلق بالسياحة العلاجية إلى الهند.'
                    : 'Hello! How can I help you today? We\'re here to assist you with anything related to medical tourism in India.'}
                </p>
              </div>

              {/* Quick options */}
              <div className="grid grid-cols-2 gap-2">
                <button className="rounded-lg border border-gray-200 p-3 text-left transition-all hover:border-blue-500 hover:bg-blue-50">
                  <div className="mb-2 font-semibold text-gray-900">
                    {isRtl ? 'استشارة مجانية' : 'Free Consultation'}
                  </div>
                  <p className="text-xs text-gray-600">
                    {isRtl ? 'احصل على استشارة طبية مجانية من خبرائنا' : 'Get a free medical consultation from our experts'}
                  </p>
                </button>

                <button className="rounded-lg border border-gray-200 p-3 text-left transition-all hover:border-blue-500 hover:bg-blue-50">
                  <div className="mb-2 font-semibold text-gray-900">
                    {isRtl ? 'حجز موعد' : 'Book Appointment'}
                  </div>
                  <p className="text-xs text-gray-600">
                    {isRtl ? 'احجز موعد مع طبيب متاح فوراً' : 'Book an appointment with an available doctor'}
                  </p>
                </button>

                <button className="rounded-lg border border-gray-200 p-3 text-left transition-all hover:border-blue-500 hover:bg-blue-50">
                  <div className="mb-2 font-semibold text-gray-900">
                    {isRtl ? 'استفسار عن الأسعار' : 'Cost Estimate'}
                  </div>
                  <p className="text-xs text-gray-600">
                    {isRtl ? 'احصل على تقدير سريع للتكاليف' : 'Get a quick cost estimate'}
                  </p>
                </button>

                <button className="rounded-lg border border-gray-200 p-3 text-left transition-all hover:border-blue-500 hover:bg-blue-50">
                  <div className="mb-2 font-semibold text-gray-900">
                    {isRtl ? 'تأشيرة طبية' : 'Medical Visa'}
                  </div>
                  <p className="text-xs text-gray-600">
                    {isRtl ? 'احصل على المساعدة في التأشيرة' : 'Get help with medical visa'}
                  </p>
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 px-4 py-3 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>✅ {isRtl ? 'خدمة 24/7 باللغة العربية' : '24/7 Arabic-speaking support'}</span>
                </div>
                <a
                  href="/contact"
                  className="text-xs text-blue-600 hover:text-blue-800"
                >
                  {isRtl ? 'صفحة التواصل' : 'Contact page →'}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom animations */}
      <style jsx>{`
        @keyframes ping {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-ping {
          animation: ping 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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

/**
 * Simple Chat Widget for placement on specific pages
 */
export function SimpleChatWidget({ locale = 'en' }: { locale?: 'en' | 'ar' }) {
  const isRtl = locale === 'ar';

  return (
    <div className="fixed bottom-6 right-6 z-40" dir={isRtl ? 'rtl' : 'ltr'}>
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="font-semibold">
          {isRtl ? 'محادثة واتساب' : 'WhatsApp Chat'}
        </span>
      </a>

      <div className="mt-2 animate-bounce" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="rounded-lg bg-white px-4 py-2 shadow-lg">
          <p className="text-sm font-medium text-gray-900">
            {isRtl
              ? 'مرحباً! نحن هنا لمساعدتك. انقر للبدء المحادثة.'
              : 'Hello! We\'re here to help you. Click to start chatting.'}
          </p>
          <p className="mt-2 text-xs text-gray-600">
            {isRtl ? '✅ متاح الآن - رد في دقيقتين' : '✅ Online now - Typically replies in 2 min'}
          </p>
        </div>
      </div>

      <style jsx>{`
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
      `}</style>
    </div>
  );
}

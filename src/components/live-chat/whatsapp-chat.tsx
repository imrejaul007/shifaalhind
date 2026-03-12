'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Clock, User, Phone } from 'lucide-react';

interface WhatsAppChatProps {
  phoneNumber?: string;
  defaultMessage?: string;
  locale?: 'en' | 'ar';
  position?: 'bottom-right' | 'bottom-left';
  showName?: string;
  showStatus?: boolean;
  showQuickQuestions?: boolean;
}

/**
 * Live WhatsApp Chat Widget
 * Direct connection to WhatsApp for instant communication
 *
 * Setup:
 * 1. Replace phoneNumber with your business WhatsApp number
 * 2. Format: Country code + number (no spaces, dashes, or +)
 *    Example: For +971 50 123 4567, use "971501234567"
 */
export function WhatsAppChat({
  phoneNumber = '971501234567', // Replace with your number
  defaultMessage = 'Hi, I need information about medical treatments in India',
  locale = 'en',
  position = 'bottom-right',
  showName = true,
  showStatus = true,
  showQuickQuestions = true,
}: WhatsAppChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(defaultMessage);
  const [isTyping, setIsTyping] = useState(false);

  const isRtl = locale === 'ar';

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6 rtl:right-6 rtl:left-auto',
  };

  const openWhatsApp = (msg: string = message) => {
    const encodedMessage = encodeURIComponent(msg);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  const quickQuestions = isRtl
    ? [
        'كم تبلغ تكلفة العلاج؟',
        'ما هي المستشفيات المتاحة؟',
        'هل يمكنني الحصول على عرض سعر؟',
        'ما هي الوثائق المطلوبة؟',
      ]
    : [
        'How much does treatment cost?',
        'Which hospitals are available?',
        'Can I get a price quote?',
        'What documents are required?',
      ];

  const handleQuickQuestion = (question: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      openWhatsApp(question);
    }, 800);
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed z-50 w-96 max-w-[calc(100vw-3rem)] rounded-2xl bg-white shadow-2xl ${positionClasses[position]} animate-in slide-in-from-bottom-5 duration-300`}
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          {/* Header */}
          <div className="flex items-center justify-between rounded-t-2xl bg-green-600 p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <User className="h-6 w-6" />
                </div>
                {showStatus && (
                  <div className="absolute bottom-0 right-0 flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
                  </div>
                )}
              </div>
              <div>
                {showName && <h3 className="font-semibold">Shifa AlHind</h3>}
                {showStatus && (
                  <p className="text-xs text-green-100">
                    {isRtl ? 'متصل الآن' : 'Online Now'}
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 hover:bg-green-700"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="max-h-96 overflow-y-auto p-4">
            {/* Welcome Message */}
            <div className="mb-4 rounded-2xl bg-gray-100 p-4 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              <p className="font-medium text-gray-900 dark:text-gray-100">
                {isRtl ? '👋 مرحباً!' : '👋 Hello!'}
              </p>
              <p className="mt-2">
                {isRtl
                  ? 'مرحباً بك في Shifa AlHind! كيف يمكنني مساعدتك في رحلتك العلاجية إلى الهند؟'
                  : 'Welcome to Shifa AlHind! How can I help you with your medical tourism journey to India?'}
              </p>
            </div>

            {/* Quick Questions */}
            {showQuickQuestions && (
              <div className="mb-4">
                <p className="mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
                  {isRtl ? 'أسئلة شائعة:' : 'Quick Questions:'}
                </p>
                <div className="space-y-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="w-full rounded-xl border border-gray-200 bg-white p-3 text-left text-sm text-gray-700 transition-all hover:border-green-500 hover:bg-green-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-green-500 dark:hover:bg-green-950"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <div className="flex gap-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4 dark:border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={isRtl ? 'اكتب رسالتك...' : 'Type your message...'}
                className="flex-1 rounded-full border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800"
                onKeyPress={(e) => e.key === 'Enter' && openWhatsApp()}
              />
              <button
                onClick={() => openWhatsApp()}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white transition-all hover:bg-green-700 hover:scale-105"
                aria-label="Send message"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {isRtl ? 'رد في أقل من 5 دقائق' : 'Response within 5 minutes'}
              </div>
              <div className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                <span className="font-mono">{phoneNumber}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`fixed z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white shadow-2xl transition-all hover:bg-green-700 hover:scale-110 ${positionClasses[position]} animate-bounce`}
          aria-label={isRtl ? 'فتح المحادثة' : 'Open chat'}
        >
          <MessageCircle className="h-8 w-8" />
          {/* Notification Badge */}
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold">
            1
          </span>
        </button>
      )}
    </>
  );
}

/**
 * Minimal WhatsApp Button (no chat window, direct link)
 */
export function WhatsAppButton({
  phoneNumber = '971501234567',
  message = 'Hi, I need information about medical treatments in India',
  locale = 'en',
  className = '',
}: {
  phoneNumber?: string;
  message?: string;
  locale?: 'en' | 'ar';
  className?: string;
}) {
  const isRtl = locale === 'ar';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 font-medium text-white transition-all hover:bg-green-700 hover:scale-105 ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      <span>{isRtl ? 'تواصل عبر واتساب' : 'WhatsApp Us'}</span>
    </button>
  );
}

/**
 * WhatsApp CTA Banner
 * Prominent WhatsApp call-to-action for landing pages
 */
export function WhatsAppCTABanner({
  phoneNumber = '971501234567',
  message = 'Hi, I need information about medical treatments in India',
  locale = 'en',
  treatment = 'medical treatment',
  className = '',
}: {
  phoneNumber?: string;
  message?: string;
  locale?: 'en' | 'ar';
  treatment?: string;
  className?: string;
}) {
  const isRtl = locale === 'ar';

  return (
    <div
      className={`rounded-2xl bg-gradient-to-r from-green-600 to-green-700 p-6 text-white ${className}`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/20">
          <MessageCircle className="h-8 w-8" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold">
            {isRtl ? 'احصل على استشارة فورية مجانية' : 'Get a Free Instant Consultation'}
          </h3>
          <p className="mt-1 text-green-100">
            {isRtl
              ? `تحدث مع خبير طبي عبر واتساب عن ${treatment}`
              : `Talk to a medical expert on WhatsApp about ${treatment}`}
          </p>
        </div>
        <WhatsAppButton
          phoneNumber={phoneNumber}
          message={message}
          locale={locale}
          className="bg-white text-green-600 hover:bg-green-50"
        />
      </div>
    </div>
  );
}

/**
 * WhatsApp Floating Action Button (Minimal)
 */
export function WhatsAppFAB({
  phoneNumber = '971501234567',
  message = 'Hi, I need information',
}: {
  phoneNumber?: string;
  message?: string;
}) {
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-2xl transition-all hover:bg-green-700 hover:scale-110 md:bottom-24 md:right-6"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </button>
  );
}

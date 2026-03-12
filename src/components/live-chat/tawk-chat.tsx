'use client';

import { useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

interface TawkChatProps {
  propertyId?: string;
  widgetId?: string;
  locale?: 'en' | 'ar';
  showButton?: boolean;
}

/**
 * Tawk.to Live Chat Widget
 * Free live chat solution for medical tourism website
 *
 * Setup:
 * 1. Go to https://www.tawk.to/
 * 2. Create a free account
 * 3. Add your propertyId and widgetId
 * 4. Optional: Customize widget appearance in Tawk dashboard
 */
export function TawkChat({
  propertyId = 'YOUR_PROPERTY_ID', // Replace with your Tawk property ID
  widgetId = 'YOUR_WIDGET_ID',    // Replace with your Tawk widget ID
  locale = 'en',
  showButton = false,
}: TawkChatProps) {
  useEffect(() => {
    // Skip if propertyId is not configured
    if (propertyId === 'YOUR_PROPERTY_ID' || widgetId === 'YOUR_WIDGET_ID') {
      console.warn('Tawk.to is not configured. Please add your propertyId and widgetId.');
      return;
    }

    // Create Tawk.to script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Add language setting
    if (locale === 'ar') {
      script.setAttribute('data-tawk-language', 'ar');
    }

    document.body.appendChild(script);

    // Cleanup
    return () => {
      const existingScript = document.querySelector(`script[src*="tawk.to/${propertyId}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [propertyId, widgetId, locale]);

  // Custom launch button (optional - Tawk has its own bubble)
  if (showButton) {
    return (
      <button
        onClick={() => {
          if ((window as any).Tawk_API) {
            (window as any).Tawk_API.maximize();
          }
        }}
        className="fixed bottom-24 right-6 z-50 flex items-center gap-3 rounded-full bg-green-600 px-6 py-3 text-white shadow-lg hover:bg-green-700 transition-all hover:scale-105"
        aria-label={locale === 'ar' ? 'فتح المحادثة' : 'Open chat'}
      >
        <MessageCircle className="h-6 w-6" />
        <span className="font-medium">
          {locale === 'ar' ? 'محادثة الآن' : 'Chat Now'}
        </span>
      </button>
    );
  }

  return null;
}

/**
 * Live Chat Context Provider for the entire app
 */
export function LiveChatProvider({
  children,
  propertyId,
  widgetId,
  locale = 'en',
}: {
  children: React.ReactNode;
  propertyId?: string;
  widgetId?: string;
  locale?: 'en' | 'ar';
}) {
  return (
    <>
      <TawkChat propertyId={propertyId} widgetId={widgetId} locale={locale} />
      {children}
    </>
  );
}

/**
 * Chat Trigger Button Component
 * Use this in your layout or specific pages where you want a custom chat button
 */
export function ChatTriggerButton({
  locale = 'en',
  className = '',
}: {
  locale?: 'en' | 'ar';
  className?: string;
}) {
  const handleClick = () => {
    if ((window as any).Tawk_API) {
      (window as any).Tawk_API.maximize();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 font-medium text-white transition-all hover:bg-green-700 hover:scale-105 ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      <span>{locale === 'ar' ? 'محادثة مباشرة' : 'Live Chat'}</span>
    </button>
  );
}

// Add TypeScript declarations for Tawk API
declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

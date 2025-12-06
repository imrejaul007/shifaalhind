'use client';

import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

/**
 * WhatsApp Floating Button Component
 * Shows a floating WhatsApp button on all pages for instant contact
 * Critical for GCC market where WhatsApp is the primary communication method
 */
export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after 2 seconds (non-intrusive)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // WhatsApp numbers for different regions
  // TODO: Replace with actual business numbers
  const whatsappNumbers = {
    uae: '971501234567',      // UAE: +971-50-123-4567
    saudi: '966501234567',     // Saudi: +966-50-123-4567
    india: '919876543210',     // India: +91-98765-43210
  };

  // Default to India number (can be made dynamic based on user location)
  const defaultNumber = whatsappNumbers.india;
  const message = encodeURIComponent(
    'Hi! I\'m interested in medical treatment in India. Can you help me with more information?'
  );
  const whatsappUrl = `https://wa.me/${defaultNumber}?text=${message}`;

  if (!isVisible) return null;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl md:h-16 md:w-16"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />

        {/* Pulse animation */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
        </span>
      </a>

      {/* Optional: WhatsApp tooltip */}
      <div className="fixed bottom-24 right-6 z-40 animate-bounce">
        <div className="hidden rounded-lg bg-white px-4 py-2 shadow-lg md:block">
          <p className="whitespace-nowrap text-sm font-medium text-gray-900">
            Chat with us on WhatsApp! 💬
          </p>
        </div>
      </div>

      {/* Add styles for pulse animation */}
      <style jsx>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
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
      `}</style>
    </>
  );
}

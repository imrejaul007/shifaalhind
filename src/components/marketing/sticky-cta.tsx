'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

/**
 * Sticky CTA Header Component
 * Shows a sticky call-to-action bar that appears when user scrolls
 * Keeps conversion opportunities visible throughout the page
 */
export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 300px down
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // WhatsApp numbers
  const whatsappNumber = '919876543210'; // India number
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  // Phone numbers for different regions
  const phoneNumbers = {
    uae: '+971-50-123-4567',
    saudi: '+966-50-123-4567',
    india: '+91-98765-43210',
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-40 animate-slideDown bg-gradient-to-r from-primary-600 to-primary-700 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Left side - Message */}
          <div className="hidden items-center gap-2 text-white md:flex">
            <span className="text-sm font-medium">
              💰 Save 60-80% on Medical Treatment in India
            </span>
          </div>

          {/* Mobile message */}
          <div className="flex items-center gap-2 text-white md:hidden">
            <span className="text-xs font-medium">Get Free Consultation</span>
          </div>

          {/* Right side - CTA Buttons */}
          <div className="flex items-center gap-2">
            {/* Phone button (Desktop only) */}
            <a
              href={`tel:${phoneNumbers.uae}`}
              className="hidden items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-primary-700 transition-colors hover:bg-primary-50 md:flex"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>

            {/* WhatsApp button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-[#25D366] px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-[#20BD5A] md:px-4"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden md:inline">WhatsApp</span>
              <span className="md:hidden">Chat</span>
            </a>

            {/* Consultation button */}
            <Button
              asChild
              size="sm"
              variant="secondary"
              className="bg-accent-500 hover:bg-accent-600 text-white"
            >
              <Link href="/consultation" className="flex items-center gap-1">
                <span className="hidden md:inline">Free Consultation</span>
                <span className="md:hidden">Consult</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Slide down animation */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

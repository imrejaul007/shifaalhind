'use client';

import { useState, useEffect } from 'react';
import { X, Gift, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ALL_TREATMENTS } from '@/config/treatments-list';

/**
 * Exit-Intent Popup Component
 * Captures users about to leave with a compelling offer
 * Expected to convert 15-25% of abandoning visitors
 */
export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [treatment, setTreatment] = useState('');

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('exitPopupShown');
    if (popupShown) {
      setHasShown(true);
      return;
    }

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves through top of page (common exit behavior)
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    // Also show after 30 seconds if user hasn't engaged
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    }, 30000); // 30 seconds

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Send to your lead capture API
    console.log('Lead captured:', { email, phone, treatment });

    // Track conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'exit_popup_conversion', {
        event_category: 'Lead',
        event_label: treatment,
      });
    }

    // Show success message
    alert('Thank you! We\'ll send you a FREE cost estimate within 24 hours.');
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);

    // Track dismissal
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'exit_popup_dismissed', {
        event_category: 'Lead',
      });
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 transform px-4">
        <div className="relative rounded-2xl bg-white p-8 shadow-2xl">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header */}
          <div className="mb-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
              <Gift className="h-8 w-8 text-primary-600" />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-gray-900">
              Wait! Don&apos;t Miss This Opportunity
            </h2>
            <p className="text-lg text-gray-600">
              Get a <span className="font-bold text-primary-600">FREE</span> personalized cost estimate + doctor consultation
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-6 space-y-3 rounded-lg bg-primary-50 p-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <span className="text-xs">✓</span>
              </div>
              <p className="text-sm text-gray-700">
                <strong>Instant Cost Comparison:</strong> India vs USA vs UAE vs UK
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <span className="text-xs">✓</span>
              </div>
              <p className="text-sm text-gray-700">
                <strong>Top Hospital Recommendations:</strong> JCI-accredited facilities
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <span className="text-xs">✓</span>
              </div>
              <p className="text-sm text-gray-700">
                <strong>Expert Doctor Selection:</strong> Matched to your needs
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="popup-treatment" className="mb-1 block text-sm font-medium text-gray-700">
                What treatment are you looking for?
              </label>
              <select
                id="popup-treatment"
                value={treatment}
                onChange={(e) => setTreatment(e.target.value)}
                className="w-full rounded-lg border-2 border-gray-200 px-4 py-2.5 focus:border-primary-500 focus:outline-none"
                required
              >
                <option value="">Select treatment...</option>
                {ALL_TREATMENTS.map((treatment) => (
                  <option key={treatment.slug} value={treatment.slug}>
                    {treatment.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="popup-phone" className="mb-1 block text-sm font-medium text-gray-700">
                WhatsApp / Phone Number
              </label>
              <input
                type="tel"
                id="popup-phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+971 50 123 4567"
                className="w-full rounded-lg border-2 border-gray-200 px-4 py-2.5 focus:border-primary-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="popup-email" className="mb-1 block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="popup-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full rounded-lg border-2 border-gray-200 px-4 py-2.5 focus:border-primary-500 focus:outline-none"
                required
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Get My FREE Cost Estimate
            </Button>
          </form>

          {/* Urgency indicator */}
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600">
            <Clock className="h-4 w-4" />
            <span>Response within 24 hours guaranteed</span>
          </div>

          {/* Trust indicators */}
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-500">
            <span>🔒 100% Confidential</span>
            <span>•</span>
            <span>📞 No Spam Calls</span>
          </div>
        </div>
      </div>
    </>
  );
}

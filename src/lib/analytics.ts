/**
 * Google Analytics 4 Event Tracking Utilities
 *
 * This file provides helper functions to track important user actions
 * for conversion optimization and SEO analysis.
 */

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'set',
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Track a custom event in Google Analytics 4
 */
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, unknown>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

/**
 * Track page view (automatically tracked by Next.js, but useful for SPAs)
 */
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
      page_path: url,
    });
  }
};

/**
 * Track consultation request (high-value conversion)
 */
export const trackConsultationClick = (source: string) => {
  trackEvent('consultation_click', {
    event_category: 'engagement',
    event_label: source,
    value: 1,
  });
};

/**
 * Track WhatsApp click (high-value conversion)
 */
export const trackWhatsAppClick = (source: string) => {
  trackEvent('whatsapp_click', {
    event_category: 'engagement',
    event_label: source,
    value: 1,
  });
};

/**
 * Track booking form submission (highest-value conversion)
 */
export const trackBookingSubmit = (treatment: string) => {
  trackEvent('booking_submit', {
    event_category: 'conversion',
    event_label: treatment,
    value: 10, // High value for actual booking
  });
};

/**
 * Track contact form submission
 */
export const trackContactSubmit = (formType: string) => {
  trackEvent('contact_submit', {
    event_category: 'conversion',
    event_label: formType,
    value: 5,
  });
};

/**
 * Track lead form submission
 */
export const trackLeadSubmit = (source: string) => {
  trackEvent('lead_submit', {
    event_category: 'conversion',
    event_label: source,
    value: 5,
  });
};

/**
 * Track phone number click
 */
export const trackPhoneClick = (source: string) => {
  trackEvent('phone_click', {
    event_category: 'engagement',
    event_label: source,
    value: 1,
  });
};

/**
 * Track email click
 */
export const trackEmailClick = (source: string) => {
  trackEvent('email_click', {
    event_category: 'engagement',
    event_label: source,
    value: 1,
  });
};

/**
 * Track treatment page view
 */
export const trackTreatmentView = (treatmentName: string) => {
  trackEvent('treatment_view', {
    event_category: 'engagement',
    event_label: treatmentName,
    value: 1,
  });
};

/**
 * Track hospital page view
 */
export const trackHospitalView = (hospitalName: string) => {
  trackEvent('hospital_view', {
    event_category: 'engagement',
    event_label: hospitalName,
    value: 1,
  });
};

/**
 * Track blog article read (scroll depth > 50%)
 */
export const trackArticleRead = (articleTitle: string) => {
  trackEvent('article_read', {
    event_category: 'engagement',
    event_label: articleTitle,
    value: 1,
  });
};

/**
 * Track search query
 */
export const trackSearch = (query: string, resultsCount: number) => {
  trackEvent('search', {
    search_term: query,
    event_category: 'engagement',
    results_count: resultsCount,
  });
};

/**
 * Track newsletter subscription
 */
export const trackNewsletterSignup = (source: string) => {
  trackEvent('newsletter_signup', {
    event_category: 'conversion',
    event_label: source,
    value: 2,
  });
};

/**
 * Track file download (brochures, guides)
 */
export const trackDownload = (fileName: string) => {
  trackEvent('file_download', {
    event_category: 'engagement',
    event_label: fileName,
    value: 1,
  });
};

/**
 * Track video play (if you add video content)
 */
export const trackVideoPlay = (videoTitle: string) => {
  trackEvent('video_play', {
    event_category: 'engagement',
    event_label: videoTitle,
    value: 1,
  });
};

/**
 * Track outbound link clicks (to partner hospitals, etc.)
 */
export const trackOutboundLink = (url: string, linkText: string) => {
  trackEvent('outbound_link', {
    event_category: 'engagement',
    event_label: linkText,
    outbound_url: url,
  });
};

/**
 * Track scroll depth (25%, 50%, 75%, 100%)
 */
export const trackScrollDepth = (percentage: number, pagePath: string) => {
  trackEvent('scroll_depth', {
    event_category: 'engagement',
    event_label: `${percentage}%`,
    page_path: pagePath,
  });
};

/**
 * Track time on page (when user leaves)
 */
export const trackTimeOnPage = (seconds: number, pagePath: string) => {
  trackEvent('time_on_page', {
    event_category: 'engagement',
    event_label: pagePath,
    value: Math.round(seconds),
  });
};

/**
 * Track social share
 */
export const trackSocialShare = (platform: string, url: string) => {
  trackEvent('social_share', {
    event_category: 'engagement',
    event_label: platform,
    share_url: url,
  });
};

/**
 * Track error occurrence (404, form errors, etc.)
 */
export const trackError = (errorType: string, errorMessage: string) => {
  trackEvent('error_occurred', {
    event_category: 'error',
    event_label: errorType,
    error_message: errorMessage,
  });
};

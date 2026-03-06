/**
 * Centralized Schema.org structured data generators
 * For SEO, GEO (Generative Engine Optimization), and AEO (Answer Engine Optimization)
 */

import { getBaseUrl } from './utils';

// ============================================================
// WebSite Schema with SearchAction (enables sitelinks searchbox)
// ============================================================
export function generateWebSiteSchema() {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Shifa AlHind',
    alternateName: ['شفاء الهند', 'Shifa Al Hind Medical Tourism'],
    url: baseUrl,
    description: 'Premium medical tourism facilitator connecting GCC patients with top JCI-accredited hospitals in India. Save 60-80% on world-class treatments.',
    inLanguage: ['en', 'ar'],
    potentialAction: [
      {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${baseUrl}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    ],
    publisher: {
      '@type': 'MedicalOrganization',
      name: 'Shifa AlHind',
      url: baseUrl,
    },
  };
}

// ============================================================
// MedicalClinic Schema (for local SEO + knowledge panel)
// ============================================================
export function generateMedicalClinicSchema() {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Shifa AlHind - Medical Tourism India',
    alternateName: 'شفاء الهند - السياحة العلاجية',
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    image: `${baseUrl}/og-image.png`,
    description: 'Leading medical tourism facilitator for GCC patients seeking affordable, world-class treatments in India. JCI-accredited hospitals, Arabic-speaking coordinators, 24/7 support.',
    telephone: '+919876543210',
    email: 'info@shifaalhind.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.6139',
      longitude: '77.2090',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    areaServed: [
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Country', name: 'Qatar' },
      { '@type': 'Country', name: 'Oman' },
      { '@type': 'Country', name: 'Kuwait' },
      { '@type': 'Country', name: 'Bahrain' },
    ],
    availableLanguage: [
      { '@type': 'Language', name: 'English', alternateName: 'en' },
      { '@type': 'Language', name: 'Arabic', alternateName: 'ar' },
    ],
    priceRange: '$$',
    currenciesAccepted: 'USD, AED, SAR, QAR, OMR, KWD, BHD, INR',
    paymentAccepted: 'Cash, Credit Card, Wire Transfer',
    medicalSpecialty: [
      'Cardiology', 'Orthopedics', 'Oncology', 'Neurosurgery',
      'Fertility', 'Cosmetic Surgery', 'Bariatric Surgery', 'Transplant Surgery',
      'Ophthalmology', 'Dental', 'Spine Surgery',
    ],
    sameAs: [
      'https://facebook.com/shifaalhind',
      'https://twitter.com/shifaalhind',
      'https://instagram.com/shifaalhind',
      'https://linkedin.com/company/shifaalhind',
    ],
  };
}

// ============================================================
// HowTo Schema (treatment process / patient journey)
// ============================================================
export interface HowToStep {
  name: string;
  text: string;
  url?: string;
  image?: string;
}

export function generateHowToSchema(data: {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string;
  estimatedCost?: { currency: string; value: string };
}) {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: data.name,
    description: data.description,
    ...(data.totalTime && { totalTime: data.totalTime }),
    ...(data.estimatedCost && {
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: data.estimatedCost.currency,
        value: data.estimatedCost.value,
      },
    }),
    step: data.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url && { url: `${baseUrl}${step.url}` }),
      ...(step.image && { image: step.image }),
    })),
  };
}

// Default patient journey steps
export function getDefaultPatientJourneySteps(treatmentName: string): HowToStep[] {
  return [
    { name: 'Free Consultation', text: `Contact Shifa AlHind via WhatsApp or website for a free consultation about ${treatmentName} in India. Our medical coordinators respond within 2 hours.`, url: '/consultation' },
    { name: 'Medical Records Review', text: 'Send your medical reports, scans, and test results. Our specialist doctors review your case and provide a detailed medical opinion within 24-48 hours.' },
    { name: 'Treatment Plan & Cost Estimate', text: `Receive a personalized ${treatmentName} treatment plan with transparent pricing, hospital options, and surgeon profiles. No hidden costs.`, url: '/booking' },
    { name: 'Medical Visa Assistance', text: 'We handle your Indian medical visa application. Provide passport copy and invitation letter from the hospital. Visa typically approved in 3-5 business days.', url: '/visa-assistance' },
    { name: 'Travel & Airport Pickup', text: 'Book your flights. Our team provides airport pickup, hotel/guest house arrangement near the hospital, and 24/7 Arabic-speaking coordinator.', url: '/accommodation' },
    { name: 'Treatment at JCI Hospital', text: `Undergo ${treatmentName} at a JCI-accredited hospital with internationally trained surgeons. Your coordinator accompanies you throughout.` },
    { name: 'Recovery & Follow-up', text: 'Post-treatment recovery with regular check-ups. After returning home, receive free virtual follow-ups via WhatsApp for 12 months.' },
  ];
}

// ============================================================
// AggregateRating Schema
// ============================================================
export function generateAggregateRatingSchema(data: {
  itemName: string;
  itemType?: string;
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
}) {
  return {
    '@type': 'AggregateRating',
    itemReviewed: {
      '@type': data.itemType || 'MedicalOrganization',
      name: data.itemName,
    },
    ratingValue: data.ratingValue,
    bestRating: data.bestRating || 5,
    worstRating: 1,
    reviewCount: data.reviewCount,
  };
}

// ============================================================
// Review Schema
// ============================================================
export function generateReviewSchema(data: {
  author: string;
  reviewBody: string;
  ratingValue: number;
  datePublished: string;
  itemReviewed: string;
}) {
  return {
    '@type': 'Review',
    author: { '@type': 'Person', name: data.author },
    reviewBody: data.reviewBody,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: data.ratingValue,
      bestRating: 5,
    },
    datePublished: data.datePublished,
    itemReviewed: {
      '@type': 'MedicalProcedure',
      name: data.itemReviewed,
    },
  };
}

// ============================================================
// Offer / AggregateOffer Schema (treatment pricing)
// ============================================================
export function generateOfferSchema(data: {
  name: string;
  description: string;
  lowPrice: number;
  highPrice: number;
  currency?: string;
  url?: string;
}) {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateOffer',
    name: data.name,
    description: data.description,
    lowPrice: data.lowPrice,
    highPrice: data.highPrice,
    priceCurrency: data.currency || 'USD',
    offerCount: 1,
    ...(data.url && { url: `${baseUrl}${data.url}` }),
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'MedicalOrganization',
      name: 'Shifa AlHind',
    },
  };
}

// ============================================================
// Service Schema (medical services)
// ============================================================
export function generateServiceSchema(data: {
  name: string;
  description: string;
  serviceType: string;
  provider?: string;
  areaServed?: string[];
  url?: string;
}) {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: data.name,
    description: data.description,
    procedureType: data.serviceType,
    ...(data.url && { url: `${baseUrl}${data.url}` }),
    provider: {
      '@type': 'MedicalOrganization',
      name: data.provider || 'Shifa AlHind',
    },
    ...(data.areaServed && {
      areaServed: data.areaServed.map(area => ({ '@type': 'Country', name: area })),
    }),
  };
}

// ============================================================
// ItemList Schema (for listing/ranking pages)
// ============================================================
export function generateItemListSchema(data: {
  name: string;
  description: string;
  items: Array<{ name: string; url?: string; position?: number; description?: string; image?: string }>;
  itemType?: string;
}) {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: data.name,
    description: data.description,
    numberOfItems: data.items.length,
    itemListElement: data.items.map((item, index) => ({
      '@type': 'ListItem',
      position: item.position || index + 1,
      name: item.name,
      ...(item.description && { description: item.description }),
      ...(item.url && { url: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}` }),
      ...(item.image && { image: item.image }),
      item: {
        '@type': data.itemType || 'Thing',
        name: item.name,
        ...(item.url && { url: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}` }),
      },
    })),
  };
}

// ============================================================
// Speakable Schema (voice search / AEO)
// ============================================================
export function generateSpeakableSchema(data: {
  url: string;
  cssSelectors: string[];
}) {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: data.url.startsWith('http') ? data.url : `${baseUrl}${data.url}`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: data.cssSelectors,
    },
  };
}

// ============================================================
// LocalBusiness Schema (for GCC country-specific pages)
// ============================================================
export function generateLocalBusinessSchema(data: {
  country: string;
  countryCode: string;
  phone: string;
  currency: string;
}) {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: `Shifa AlHind - ${data.country}`,
    url: baseUrl,
    telephone: data.phone,
    address: {
      '@type': 'PostalAddress',
      addressCountry: data.countryCode,
    },
    areaServed: {
      '@type': 'Country',
      name: data.country,
    },
    currenciesAccepted: `${data.currency}, USD`,
    availableLanguage: ['English', 'Arabic'],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  };
}

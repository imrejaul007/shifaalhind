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

// ============================================================
// Doctor Schema (for individual doctor profiles)
// ============================================================
export function generateDoctorSchema(data: {
  name: string;
  image?: string;
  specialty: string;
  hospitalName: string;
  hospitalUrl?: string;
  description?: string;
  worksFor?: string;
  languages?: string[];
  priceRange?: string;
  url?: string;
}) {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: data.name,
    image: data.image,
    jobTitle: data.specialty,
    description: data.description,
    url: data.url ? `${baseUrl}${data.url}` : undefined,
    worksFor: {
      '@type': 'MedicalOrganization',
      name: data.hospitalName,
      ...(data.hospitalUrl && { url: data.hospitalUrl }),
    },
    ...(data.worksFor && {
      worksFor: {
        '@type': 'Organization',
        name: data.worksFor,
      },
    }),
    medicalSpecialty: data.specialty,
    ...(data.languages && {
      knowsLanguage: data.languages,
    }),
    ...(data.priceRange && {
      priceRange: data.priceRange,
    }),
  };
}

// ============================================================
// Hospital Schema (for individual hospital profiles)
// ============================================================
export function generateHospitalSchema(data: {
  name: string;
  image?: string;
  description?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  telephone?: string;
  url?: string;
  accreditation?: string[];
  medicalSpecialty?: string[];
  numberOfBeds?: number;
  department?: string[];
  priceRange?: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}) {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'Hospital',
    name: data.name,
    image: data.image,
    description: data.description,
    url: data.url ? `${baseUrl}${data.url}` : undefined,
    ...(data.address && {
      address: {
        '@type': 'PostalAddress',
        ...data.address,
      },
    }),
    ...(data.telephone && { telephone: data.telephone }),
    ...(data.accreditation && { accreditation: data.accreditation }),
    ...(data.medicalSpecialty && { medicalSpecialty: data.medicalSpecialty }),
    ...(data.numberOfBeds && { numberOfBeds: data.numberOfBeds }),
    ...(data.department && { department: data.department }),
    ...(data.priceRange && { priceRange: data.priceRange }),
    ...(data.aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: data.aggregateRating.ratingValue,
        reviewCount: data.aggregateRating.reviewCount,
      },
    }),
  };
}

// ============================================================
// Video Schema (for treatment videos, testimonials, etc.)
// ============================================================
export function generateVideoSchema(data: {
  name: string;
  description?: string;
  thumbnailUrl: string;
  uploadDate?: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
  author?: string;
}) {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: data.name,
    description: data.description,
    thumbnailUrl: data.thumbnailUrl.startsWith('http') ? data.thumbnailUrl : `${baseUrl}${data.thumbnailUrl}`,
    ...(data.uploadDate && { uploadDate: data.uploadDate }),
    ...(data.duration && { duration: data.duration }),
    ...(data.contentUrl && {
      contentUrl: data.contentUrl.startsWith('http') ? data.contentUrl : `${baseUrl}${data.contentUrl}`,
    }),
    ...(data.embedUrl && {
      embedUrl: data.embedUrl.startsWith('http') ? data.embedUrl : `${baseUrl}${data.embedUrl}`,
    }),
    ...(data.author && { author: { '@type': 'Person', name: data.author } }),
  };
}

// ============================================================
// Image Schema (for image optimization and discovery)
// ============================================================
export function generateImageSchema(data: {
  url: string;
  caption?: string;
  width?: number;
  height?: number;
  author?: string;
  license?: string;
}) {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    url: data.url.startsWith('http') ? data.url : `${baseUrl}${data.url}`,
    ...(data.caption && { caption: data.caption }),
    ...(data.width && { width: data.width }),
    ...(data.height && { height: data.height }),
    ...(data.author && { author: { '@type': 'Person', name: data.author } }),
    ...(data.license && { license: data.license }),
  };
}

// ============================================================
// BreadcrumbList Schema (for breadcrumb navigation)
// ============================================================
export function generateBreadcrumbSchema(data: {
  items: Array<{
    name: string;
    url: string;
  }>;
}) {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: data.items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
    })),
  };
}

// ============================================================
// Organization Schema (comprehensive company information)
// ============================================================
export function generateOrganizationSchema(data?: {
  logo?: string;
  sameAs?: string[];
  contactPoint?: {
    telephone: string;
    contactType: string;
    areaServed?: string[];
  }[];
}) {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Shifa AlHind',
    alternateName: 'شفاء الهند',
    url: baseUrl,
    logo: data?.logo ? `${baseUrl}${data.logo}` : `${baseUrl}/images/logo.png`,
    description: 'Premium medical tourism facilitator connecting GCC patients with top JCI-accredited hospitals in India.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
    },
    telephone: '+919876543210',
    email: 'info@shifaalhind.com',
    ...(data?.contactPoint && {
      contactPoint: data.contactPoint.map(cp => ({
        '@type': 'ContactPoint',
        telephone: cp.telephone,
        contactType: cp.contactType,
        ...(cp.areaServed && { areaServed: cp.areaServed }),
      })),
    }),
    ...(data?.sameAs && { sameAs: data.sameAs }),
    areaServed: [
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Country', name: 'Qatar' },
      { '@type': 'Country', name: 'Oman' },
      { '@type': 'Country', name: 'Kuwait' },
      { '@type': 'Country', name: 'Bahrain' },
    ],
    availableLanguage: ['English', 'Arabic'],
  };
}

// ============================================================
// MedicalAudience Schema (for targeting specific patient groups)
// ============================================================
export function generateMedicalAudienceSchema(data: {
  audienceType?: string;
  suggestedMinAge?: number;
  suggestedMaxAge?: number;
  suggestedGender?: 'Male' | 'Female';
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalAudience',
    ...(data.audienceType && { audienceType: data.audienceType }),
    ...(data.suggestedMinAge && { suggestedMinAge: data.suggestedMinAge }),
    ...(data.suggestedMaxAge && { suggestedMaxAge: data.suggestedMaxAge }),
    ...(data.suggestedGender && { suggestedGender: data.suggestedGender }),
  };
}

// ============================================================
// MedicalCondition Schema (for treatment/disease information)
// ============================================================
export function generateMedicalConditionSchema(data: {
  name: string;
  alternateName?: string[];
  description?: string;
  signOrSymptom?: string[];
  possibleTreatment?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: data.name,
    ...(data.alternateName && { alternateName: data.alternateName }),
    ...(data.description && { description: data.description }),
    ...(data.signOrSymptom && { signOrSymptom: data.signOrSymptom }),
    ...(data.possibleTreatment && {
      possibleTreatment: data.possibleTreatment.map(treatment => ({
        '@type': 'MedicalProcedure',
        name: treatment,
      })),
    }),
  };
}

// ============================================================
// FAQPage Schema (comprehensive FAQ for voice search)
// ============================================================
export function generateFAQPageSchema(data: {
  mainEntity: Array<{
    question: string;
    acceptedAnswer: string;
    suggestedAnswer?: string[];
  }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.mainEntity.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.acceptedAnswer,
      },
      ...(faq.suggestedAnswer && {
        suggestedAnswer: {
          '@type': 'Answer',
          text: faq.suggestedAnswer.join(' '),
        },
      }),
    })),
  };
}

// ============================================================
// AboutPage Schema (for About page)
// ============================================================
export function generateAboutPageSchema(data: {
  name: string;
  description: string;
  url: string;
  foundingDate?: string;
  founders?: string[];
  numberOfEmployees?: number;
}) {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'Organization',
      name: data.name,
      url: data.url.startsWith('http') ? data.url : `${baseUrl}${data.url}`,
      description: data.description,
      ...(data.foundingDate && { foundingDate: data.foundingDate }),
      ...(data.founders && { founders: data.founders.map(f => ({ '@type': 'Person', name: f })) }),
      ...(data.numberOfEmployees && { numberOfEmployees: data.numberOfEmployees }),
    },
  };
}

import { Metadata } from 'next';
import { getBaseUrl } from './utils';

interface SEOProps {
  title_en?: string;
  title_ar?: string;
  description_en?: string;
  description_ar?: string;
  locale: string;
  path?: string;
  images?: string[];
  type?: 'website' | 'article';
  publishedTime?: string;
  authors?: string[];
  keywords?: string[];
}

export function generateMetadata({
  title_en,
  title_ar,
  description_en,
  description_ar,
  locale,
  path = '',
  images = [],
  type = 'website',
  publishedTime,
  authors,
  keywords = [],
}: SEOProps): Metadata {
  const baseUrl = getBaseUrl();
  const title = locale === 'ar' ? title_ar : title_en;
  const description = locale === 'ar' ? description_ar : description_en;
  const siteName = 'Shifa AlHind';

  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const url = `${baseUrl}${locale === 'ar' ? '/ar' : ''}${path}`;

  const defaultImages = [
    {
      url: `${baseUrl}/images/og-default.jpg`,
      width: 1200,
      height: 630,
      alt: siteName,
    },
  ];

  const ogImages = images.length
    ? images.map((img) => ({ url: img, width: 1200, height: 630 }))
    : defaultImages;

  return {
    title: fullTitle,
    description: description || undefined,
    keywords: keywords.length ? keywords : undefined,
    authors: authors ? authors.map((name) => ({ name })) : undefined,
    openGraph: {
      title: fullTitle,
      description: description || undefined,
      url,
      siteName,
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      type,
      images: ogImages,
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: description || undefined,
      images: ogImages.map((img) => img.url),
    },
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}${path}`,
        ar: `${baseUrl}/ar${path}`,
      },
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateOrganizationSchema() {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'Shifa AlHind',
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    description:
      'Premium medical tourism facilitator connecting international patients with top hospitals and treatments in India',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+971501234567',
      contactType: 'customer service',
      availableLanguage: ['en', 'ar'],
    },
    sameAs: [
      'https://facebook.com/shifaalhind',
      'https://twitter.com/shifaalhind',
      'https://instagram.com/shifaalhind',
      'https://linkedin.com/company/shifaalhind',
    ],
  };
}

export function generateMedicalProcedureSchema(data: {
  name: string;
  description: string;
  procedureType: string;
  bodyPart?: string;
  preparation?: string;
  followUp?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: data.name,
    description: data.description,
    procedureType: data.procedureType,
    bodyLocation: data.bodyPart,
    preparation: data.preparation,
    followup: data.followUp,
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(data: {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}) {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.headline,
    description: data.description,
    author: {
      '@type': 'Person',
      name: data.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Shifa AlHind',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo.png`,
      },
    },
    datePublished: data.datePublished,
    dateModified: data.dateModified,
    image: data.image || `${baseUrl}/images/og-default.jpg`,
  };
}

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
  type?: 'website' | 'article' | 'product' | 'profile' | 'video';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  keywords?: string[];
  // Enhanced Open Graph options
  ogTitle?: string;
  ogDescription?: string;
  ogImageAlt?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  // Twitter Card options
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterCreator?: string;
  twitterSite?: string;
  // Article specific
  articleSection?: string;
  articleTags?: string[];
  // Product specific
  productName?: string;
  productPrice?: number;
  productCurrency?: string;
  productAvailability?: 'InStock' | 'OutOfStock' | 'PreOrder';
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
  modifiedTime,
  authors,
  keywords = [],
  // Enhanced Open Graph
  ogTitle,
  ogDescription,
  ogImageAlt,
  ogImageWidth = 1200,
  ogImageHeight = 630,
  // Twitter Card
  twitterCard = 'summary_large_image',
  twitterCreator = '@shifaalhind',
  twitterSite = '@shifaalhind',
  // Article specific
  articleSection,
  articleTags,
  // Product specific
  productName,
  productPrice,
  productCurrency = 'USD',
  productAvailability = 'InStock',
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
      alt: ogImageAlt || siteName,
    },
  ];

  const ogImages = images.length
    ? images.map((img) => ({
        url: img,
        width: ogImageWidth,
        height: ogImageHeight,
        alt: ogImageAlt || title || siteName,
      }))
    : defaultImages;

  return {
    title: fullTitle,
    description: description || undefined,
    keywords: keywords.length ? keywords : undefined,
    authors: authors ? authors.map((name) => ({ name })) : undefined,
    // Robots meta
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    // Open Graph - Enhanced
    openGraph: {
      title: ogTitle || fullTitle,
      description: ogDescription || description || undefined,
      url,
      siteName,
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      alternateLocale: locale === 'ar' ? 'en_US' : 'ar_SA',
      type: type === 'video' || type === 'product' ? 'website' : type, // Limit to supported types for Next.js
      images: ogImages,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      // Article-specific
      ...(type === 'article' && {
        authors: authors?.map(name => ({ name })),
        section: articleSection,
        tags: articleTags || keywords,
      }),
      // Product-specific
      ...(type === 'product' && productName && {
        productName,
        priceAmount: productPrice,
        priceCurrency: productCurrency,
        availability: productAvailability,
      }),
    } as any, // Use type assertion to allow extended properties
    // Twitter Cards - Enhanced
    twitter: {
      card: twitterCard,
      title: ogTitle || fullTitle,
      description: ogDescription || description || undefined,
      images: ogImages.map((img) => img.url),
      creator: twitterCreator,
      site: twitterSite,
    },
    // Canonical & alternates
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}${path}`,
        ar: `${baseUrl}/ar${path}`,
      },
    },
    // Additional meta tags
    ...(type === 'article' && {
      article: {
        publishedTime,
        modifiedTime,
        authors: authors?.map(name => ({ name })),
        section: articleSection,
        tags: articleTags || keywords,
      },
    }),
    // Viewport optimization
    viewport: {
      width: 'device-width',
      initialScale: 1,
    },
    // Theme color
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#10B981' },
      { media: '(prefers-color-scheme: dark)', color: '#059669' },
    ],
    // Icons
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    // Application name
    applicationName: siteName,
    // Generator
    generator: 'Next.js',
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

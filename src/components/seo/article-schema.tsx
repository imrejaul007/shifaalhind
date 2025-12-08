/**
 * Article Schema Component
 * Generates Schema.org Article structured data for blog posts
 * Helps Google understand content better and can lead to rich results in search
 */

import React from 'react';

interface ArticleAuthor {
  name: string;
  url?: string;
}

interface ArticlePublisher {
  name: string;
  logo: {
    url: string;
    width: number;
    height: number;
  };
}

interface ArticleSchemaProps {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: ArticleAuthor;
  publisher: ArticlePublisher;
  url: string;
  keywords?: string[];
}

export function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
  publisher,
  url,
  keywords = [],
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: image,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: author.name,
      ...(author.url && { url: author.url }),
    },
    publisher: {
      '@type': 'Organization',
      name: publisher.name,
      logo: {
        '@type': 'ImageObject',
        url: publisher.logo.url,
        width: publisher.logo.width,
        height: publisher.logo.height,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    ...(keywords.length > 0 && { keywords: keywords.join(', ') }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Default publisher info for Shifa AlHind
export const DEFAULT_PUBLISHER = {
  name: 'Shifa AlHind',
  logo: {
    url: 'https://shifaalhind.onrender.com/logo.png',
    width: 600,
    height: 60,
  },
};

// Default author info
export const DEFAULT_AUTHOR = {
  name: 'Shifa AlHind Medical Team',
  url: 'https://shifaalhind.onrender.com/about',
};

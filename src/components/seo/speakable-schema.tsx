/**
 * Speakable Schema Component
 * Generates Schema.org SpeakableSpecification structured data
 * Optimizes content for voice search and AI answer engines (AEO)
 */

import React from 'react';
import { generateSpeakableSchema } from '@/lib/schemas';

interface SpeakableSchemaProps {
  url: string;
  cssSelectors: string[];
}

export function SpeakableSchema({ url, cssSelectors }: SpeakableSchemaProps) {
  const schema = generateSpeakableSchema({ url, cssSelectors });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Offer Schema Component
 * Generates Schema.org AggregateOffer structured data for treatment pricing
 * Helps display price ranges in Google search results
 */

import React from 'react';
import { generateOfferSchema } from '@/lib/schemas';

interface OfferSchemaProps {
  name: string;
  description: string;
  lowPrice: number;
  highPrice: number;
  currency?: string;
  url?: string;
}

export function OfferSchema({
  name,
  description,
  lowPrice,
  highPrice,
  currency,
  url,
}: OfferSchemaProps) {
  const schema = generateOfferSchema({
    name,
    description,
    lowPrice,
    highPrice,
    currency,
    url,
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

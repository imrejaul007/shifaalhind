/**
 * LocalBusiness Schema Component
 * Generates Schema.org MedicalBusiness structured data for GCC country-specific pages
 * Improves local SEO for patients searching from specific GCC countries
 */

import React from 'react';
import { generateLocalBusinessSchema } from '@/lib/schemas';

interface LocalBusinessSchemaProps {
  country: string;
  countryCode: string;
  phone: string;
  currency: string;
}

export function LocalBusinessSchema({
  country,
  countryCode,
  phone,
  currency,
}: LocalBusinessSchemaProps) {
  const schema = generateLocalBusinessSchema({
    country,
    countryCode,
    phone,
    currency,
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

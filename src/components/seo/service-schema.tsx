/**
 * Service Schema Component
 * Generates Schema.org MedicalProcedure structured data for medical services
 * Improves discoverability of treatment pages in search engines
 */

import React from 'react';
import { generateServiceSchema } from '@/lib/schemas';

interface ServiceSchemaProps {
  name: string;
  description: string;
  serviceType: string;
  provider?: string;
  areaServed?: string[];
  url?: string;
}

export function ServiceSchema({
  name,
  description,
  serviceType,
  provider,
  areaServed,
  url,
}: ServiceSchemaProps) {
  const schema = generateServiceSchema({
    name,
    description,
    serviceType,
    provider,
    areaServed,
    url,
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

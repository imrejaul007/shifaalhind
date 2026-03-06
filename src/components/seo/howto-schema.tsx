/**
 * HowTo Schema Component
 * Generates Schema.org HowTo structured data for treatment processes and patient journeys
 * Can appear as rich results in Google with step-by-step instructions
 */

import React from 'react';
import { generateHowToSchema, HowToStep } from '@/lib/schemas';

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string;
  estimatedCost?: {
    currency: string;
    value: string;
  };
}

export function HowToSchema({
  name,
  description,
  steps,
  totalTime,
  estimatedCost,
}: HowToSchemaProps) {
  const schema = generateHowToSchema({
    name,
    description,
    steps,
    totalTime,
    estimatedCost,
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Combined Treatment Schema Component
 * Adds HowTo, Offer, and Speakable schemas to treatment pages in one import
 * Usage: <TreatmentSchemas treatmentName="Heart Surgery" lowPrice={6000} highPrice={10000} url="/en/treatments/heart-surgery-india" />
 */

import React from 'react';
import { generateHowToSchema, getDefaultPatientJourneySteps, generateOfferSchema, generateSpeakableSchema } from '@/lib/schemas';

interface TreatmentSchemasProps {
  treatmentName: string;
  lowPrice: number;
  highPrice: number;
  currency?: string;
  url: string;
  /** Optional custom HowTo steps — defaults to standard patient journey */
  customSteps?: { name: string; text: string }[];
}

export function TreatmentSchemas({
  treatmentName,
  lowPrice,
  highPrice,
  currency = 'USD',
  url,
  customSteps,
}: TreatmentSchemasProps) {
  const steps = customSteps || getDefaultPatientJourneySteps(treatmentName);

  const howToSchema = generateHowToSchema({
    name: `How to Get ${treatmentName} in India`,
    description: `Step-by-step guide for GCC patients seeking ${treatmentName.toLowerCase()} treatment in India's top JCI-accredited hospitals.`,
    steps,
    totalTime: 'P21D',
    estimatedCost: {
      currency,
      value: `${lowPrice}-${highPrice}`,
    },
  });

  const offerSchema = generateOfferSchema({
    name: `${treatmentName} in India`,
    description: `${treatmentName} treatment packages in India's top JCI-accredited hospitals. All-inclusive pricing with hospital stay, surgery, medications, and follow-up care.`,
    lowPrice,
    highPrice,
    currency,
    url,
  });

  const speakableSchema = generateSpeakableSchema({
    url,
    cssSelectors: [
      'h1',
      '[data-speakable="cost"]',
      '[data-speakable="summary"]',
      '.faq-section h3',
      '.faq-section p',
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
    </>
  );
}

/**
 * Medical Procedure Schema Component
 * Generates Schema.org MedicalProcedure structured data for treatment pages
 * Helps Google understand medical procedure information and can lead to rich results
 */

import React from 'react';

interface MedicalProcedureSchemaProps {
  name: string;
  description: string;
  procedureType: string;
  bodyLocation?: string;
  preparation?: string;
  followup?: string;
  howPerformed?: string;
  url: string;
}

export function MedicalProcedureSchema({
  name,
  description,
  procedureType,
  bodyLocation,
  preparation,
  followup,
  howPerformed,
  url,
}: MedicalProcedureSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name,
    description,
    procedureType,
    ...(bodyLocation && { bodyLocation }),
    ...(preparation && { preparation }),
    ...(followup && { followup }),
    ...(howPerformed && { howPerformed }),
    url,
    medicineSystem: 'WesternConventional',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

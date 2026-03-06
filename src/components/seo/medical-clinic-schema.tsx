/**
 * MedicalClinic Schema Component
 * Generates Schema.org MedicalBusiness structured data
 * Improves local SEO and enables knowledge panel in Google search results
 */

import React from 'react';
import { generateMedicalClinicSchema } from '@/lib/schemas';

export function MedicalClinicSchema() {
  const schema = generateMedicalClinicSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

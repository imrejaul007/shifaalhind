/**
 * WebSite Schema Component
 * Generates Schema.org WebSite structured data with SearchAction
 * Enables sitelinks searchbox in Google and helps voice/AI search engines
 */

import React from 'react';
import { generateWebSiteSchema } from '@/lib/schemas';

export function WebSiteSchema() {
  const schema = generateWebSiteSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

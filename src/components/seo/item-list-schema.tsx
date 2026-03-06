/**
 * ItemList Schema Component
 * Generates Schema.org ItemList structured data for listing and ranking pages
 * Helps Google display carousel-style rich results for lists of items
 */

import React from 'react';
import { generateItemListSchema } from '@/lib/schemas';

interface ItemListSchemaProps {
  name: string;
  description: string;
  items: Array<{
    name: string;
    url?: string;
    position?: number;
    description?: string;
    image?: string;
  }>;
  itemType?: string;
}

export function ItemListSchema({
  name,
  description,
  items,
  itemType,
}: ItemListSchemaProps) {
  const schema = generateItemListSchema({
    name,
    description,
    items,
    itemType,
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

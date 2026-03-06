/**
 * Rating & Review Schema Components
 * Generates Schema.org AggregateRating and Review structured data
 * Enables star ratings in Google search results (rich snippets)
 */

import React from 'react';
import { generateAggregateRatingSchema, generateReviewSchema } from '@/lib/schemas';

interface AggregateRatingSchemaProps {
  itemName: string;
  itemType?: string;
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
}

export function AggregateRatingSchema({
  itemName,
  itemType,
  ratingValue,
  reviewCount,
  bestRating,
}: AggregateRatingSchemaProps) {
  const schema = generateAggregateRatingSchema({
    itemName,
    itemType,
    ratingValue,
    reviewCount,
    bestRating,
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ReviewSchemaProps {
  author: string;
  reviewBody: string;
  ratingValue: number;
  datePublished: string;
  itemReviewed: string;
}

export function ReviewSchema({
  author,
  reviewBody,
  ratingValue,
  datePublished,
  itemReviewed,
}: ReviewSchemaProps) {
  const schema = generateReviewSchema({
    author,
    reviewBody,
    ratingValue,
    datePublished,
    itemReviewed,
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

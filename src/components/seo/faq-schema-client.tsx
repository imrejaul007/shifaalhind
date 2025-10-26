/**
 * FAQ Schema Component (Client-side for Blog Articles)
 *
 * Generates JSON-LD structured data for FAQ sections
 * Helps articles appear in Google's "People Also Ask" boxes
 * and rich snippets with expandable Q&A
 *
 * Usage:
 * import { FAQSchema } from '@/components/seo/faq-schema-client';
 *
 * <FAQSchema faqs={[
 *   { question: "How much does X cost?", answer: "X costs $Y..." },
 *   { question: "How long does X take?", answer: "X takes Y days..." }
 * ]} />
 */

'use client';

import { useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined' || faqs.length === 0) {
      return;
    }

    // Check if schema already exists
    const existingSchema = document.querySelector('script[type="application/ld+json"][data-faq-schema]');
    if (existingSchema) {
      existingSchema.remove(); // Remove old schema before adding new one
    }

    // Create FAQ schema
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqs.map((faq) => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer,
        },
      })),
    };

    // Add schema to page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-faq-schema', 'true');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const schemaToRemove = document.querySelector('script[type="application/ld+json"][data-faq-schema]');
      if (schemaToRemove) {
        schemaToRemove.remove();
      }
    };
  }, [faqs]);

  return null; // This component doesn't render anything visible
}

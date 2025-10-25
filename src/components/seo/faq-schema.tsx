/**
 * FAQ Schema Component
 *
 * Adds structured data for FAQ sections to enable rich snippets in Google Search.
 *
 * Rich snippets show FAQ answers directly in search results, increasing click-through
 * rates by 20-35%.
 *
 * Usage:
 * ```tsx
 * <FAQSchema faqs={[
 *   {
 *     question: "How much does heart surgery cost in India?",
 *     answer: "Heart surgery in India costs $5,000-$15,000, which is 60-80% less than USA/UK."
 *   },
 *   {
 *     question: "Are Indian hospitals internationally accredited?",
 *     answer: "Yes, top hospitals like Apollo, Fortis, and Max are JCI and NABH accredited."
 *   }
 * ]} />
 * ```
 */

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQ[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Medical Procedure Schema Component
 *
 * Adds structured data for medical procedures to help Google understand the content.
 *
 * Usage:
 * ```tsx
 * <MedicalProcedureSchema
 *   name="Heart Surgery"
 *   description="Comprehensive heart surgery including bypass, valve replacement..."
 *   procedureType="Cardiac Surgery"
 *   preparation="Pre-surgery consultation, cardiac tests..."
 *   followup="Post-surgery care, follow-up consultations..."
 * />
 * ```
 */

interface MedicalProcedureSchemaProps {
  name: string;
  description: string;
  procedureType?: string;
  preparation?: string;
  followup?: string;
  howPerformed?: string;
}

export function MedicalProcedureSchema({
  name,
  description,
  procedureType,
  preparation,
  followup,
  howPerformed
}: MedicalProcedureSchemaProps) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": name,
    "description": description,
  };

  if (procedureType) {
    schema.procedureType = procedureType;
  }

  if (preparation) {
    schema.preparation = preparation;
  }

  if (followup) {
    schema.followup = followup;
  }

  if (howPerformed) {
    schema.howPerformed = howPerformed;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Article Schema Component
 *
 * Adds structured data for blog articles to improve SEO and enable rich snippets.
 *
 * Usage:
 * ```tsx
 * <ArticleSchema
 *   headline="Heart Surgery Cost India vs USA"
 *   description="Complete cost comparison of heart surgery..."
 *   image="/images/heart-surgery.jpg"
 *   datePublished="2025-01-15"
 *   dateModified="2025-01-20"
 *   author="Shifa AlHind Team"
 * />
 * ```
 */

interface ArticleSchemaProps {
  headline: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}

export function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author = "Shifa AlHind"
}: ArticleSchemaProps) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "author": {
      "@type": "Organization",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Shifa AlHind",
      "logo": {
        "@type": "ImageObject",
        "url": "https://shifaalhind.onrender.com/logo.png"
      }
    }
  };

  if (image) {
    schema.image = image;
  }

  if (datePublished) {
    schema.datePublished = datePublished;
  }

  if (dateModified) {
    schema.dateModified = dateModified;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

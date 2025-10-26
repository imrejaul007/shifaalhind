/**
 * Related Articles Component
 *
 * Shows related blog articles at the end of each article
 * Benefits:
 * - Increases pages per session
 * - Reduces bounce rate
 * - Improves SEO (internal linking)
 * - Better user experience
 */

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

interface RelatedArticle {
  title: string;
  excerpt: string;
  slug: string;
  readTime?: string;
  category?: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
  title?: string;
}

export function RelatedArticles({
  articles,
  title = 'Related Articles You May Find Helpful'
}: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="my-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <p className="mt-2 text-gray-600">
          Continue reading to learn more about medical tourism to India
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <Link
            key={index}
            href={`/blog/${article.slug}`}
            className="group"
          >
            <Card className="h-full border-2 border-gray-200 transition-all hover:border-primary-400 hover:shadow-lg">
              <CardContent className="p-6">
                {article.category && (
                  <div className="mb-3">
                    <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700">
                      {article.category}
                    </span>
                  </div>
                )}

                <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {article.title}
                </h3>

                <p className="mb-4 text-sm text-gray-600 line-clamp-3">
                  {article.excerpt}
                </p>

                {article.readTime && (
                  <div className="flex items-center text-xs text-gray-500">
                    <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {article.readTime}
                  </div>
                )}

                <div className="mt-4 flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-500">
                  Read Full Article
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center rounded-lg border-2 border-primary-600 bg-white px-6 py-3 text-base font-semibold text-primary-600 transition-all hover:bg-primary-600 hover:text-white"
        >
          View All Articles
          <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

/**
 * Pre-configured related articles for common topics
 */

export const CANCER_RELATED_ARTICLES: RelatedArticle[] = [
  {
    title: 'Heart Surgery Cost Comparison: India vs World',
    excerpt: 'Discover how heart surgery in India costs 70-90% less than USA/UK with the same quality and success rates.',
    slug: 'heart-surgery-cost-comparison-india-vs-world',
    readTime: '12 min read',
    category: 'Cost Comparison'
  },
  {
    title: 'Best Hospitals for Medical Tourism in India',
    excerpt: 'Complete guide to choosing JCI-accredited hospitals in India for international patients.',
    slug: 'how-to-choose-best-hospital-india',
    readTime: '10 min read',
    category: 'Hospital Guide'
  },
  {
    title: 'Liver Transplant Cost and Success Rates',
    excerpt: 'Comprehensive guide to liver transplant in India with costs 70-80% lower than Western countries.',
    slug: 'liver-transplant-india-cost-guide',
    readTime: '14 min read',
    category: 'Cost Comparison'
  }
];

export const DENTAL_RELATED_ARTICLES: RelatedArticle[] = [
  {
    title: 'Knee Replacement Cost in India',
    excerpt: 'Save $20,000+ on knee replacement surgery with top orthopedic surgeons in India.',
    slug: 'knee-replacement-cost-india-vs-world',
    readTime: '13 min read',
    category: 'Orthopedics'
  },
  {
    title: 'Medical Tourism India: Complete Guide for UAE Patients',
    excerpt: 'Everything UAE patients need to know about medical treatment in India including visa, flights, and costs.',
    slug: 'medical-tourism-india-uae-patients-guide',
    readTime: '15 min read',
    category: 'Travel Guide'
  },
  {
    title: 'IVF & Fertility Treatment in India',
    excerpt: 'Affordable IVF treatment with 65% success rates at leading fertility clinics in India.',
    slug: 'ivf-fertility-treatment-india-complete-guide',
    readTime: '14 min read',
    category: 'Fertility'
  }
];

export const DIABETES_RELATED_ARTICLES: RelatedArticle[] = [
  {
    title: 'Cancer Treatment Cost in India',
    excerpt: 'Save 70-90% on cancer treatment at world-class hospitals with 85-92% success rates.',
    slug: 'cancer-treatment-cost-india-vs-world',
    readTime: '13 min read',
    category: 'Oncology'
  },
  {
    title: 'Spine Surgery Costs and Top Hospitals',
    excerpt: 'Complete guide to minimally invasive spine surgery in India with costs 65-85% lower.',
    slug: 'spine-surgery-india-cost-hospitals',
    readTime: '12 min read',
    category: 'Neurosurgery'
  },
  {
    title: 'Medical Tourism from Saudi Arabia',
    excerpt: 'How Saudi patients save on medical treatment in India with halal food and Arabic-speaking staff.',
    slug: 'medical-tourism-india-uae-patients-guide',
    readTime: '15 min read',
    category: 'Travel Guide'
  }
];

/**
 * Internal Linking Component for SEO
 *
 * Helps with internal link building by providing:
 * - Related articles suggestions
 * - Treatment page links
 * - City page links
 * - Contextual anchor text
 *
 * Benefits:
 * - Improves SEO (Google loves internal links)
 * - Reduces bounce rate
 * - Increases pages per session
 * - Better user experience
 */

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

interface InternalLink {
  title: string;
  href: string;
  description?: string;
}

interface InternalLinksProps {
  title?: string;
  links: InternalLink[];
  variant?: 'default' | 'compact' | 'inline';
}

/**
 * Internal Links Component
 *
 * Usage:
 * <InternalLinks
 *   title="Related Articles"
 *   links={[
 *     { title: "Heart Surgery Cost", href: "/blog/heart-surgery-cost", description: "..." }
 *   ]}
 * />
 */
export function InternalLinks({
  title = 'Related Articles',
  links,
  variant = 'default'
}: InternalLinksProps) {
  // Return null if no links provided
  if (!links || links.length === 0) return null;

  if (variant === 'inline') {
    return (
      <div className="my-6">
        <p className="text-sm font-semibold text-gray-700 mb-2">{title}:</p>
        <div className="flex flex-wrap gap-2">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 hover:bg-primary-100 transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <Card className="my-8 border-2 border-primary-100 bg-gradient-to-r from-primary-50 to-blue-50">
        <CardContent className="p-6">
          <h3 className="mb-4 text-lg font-semibold text-primary-800">{title}</h3>
          <ul className="space-y-2">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="flex items-center text-primary-600 hover:text-primary-800 transition-colors group"
                >
                  <span className="mr-2 text-primary-400 group-hover:text-primary-600">→</span>
                  <span className="font-medium">{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    );
  }

  // Default variant with descriptions
  return (
    <div className="my-12">
      <h3 className="mb-6 text-2xl font-bold text-gray-900">{title}</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {links.map((link, index) => (
          <Link key={index} href={link.href} className="group">
            <Card className="h-full border-2 border-gray-200 transition-all hover:border-primary-400 hover:shadow-lg">
              <CardContent className="p-6">
                <h4 className="mb-2 text-lg font-semibold text-primary-700 group-hover:text-primary-600">
                  {link.title}
                </h4>
                {link.description && (
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {link.description}
                  </p>
                )}
                <div className="mt-4 flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-500">
                  Read More
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

/**
 * Treatment Links Component
 * Pre-configured for linking to treatment pages
 */
export function TreatmentLinks({ treatments }: { treatments: string[] }) {
  const treatmentLinks: InternalLink[] = treatments.map(treatment => ({
    title: treatment,
    href: `/treatments/${treatment.toLowerCase().replace(/\s+/g, '-')}`,
    description: `Learn more about ${treatment.toLowerCase()} in India.`
  }));

  return (
    <InternalLinks
      title="Related Treatments"
      links={treatmentLinks}
      variant="compact"
    />
  );
}

/**
 * City Links Component
 * Pre-configured for linking to city pages
 */
export function CityLinks({ cities }: { cities: string[] }) {
  const cityLinks: InternalLink[] = cities.map(city => ({
    title: city,
    href: `/medical-tourism/india/${city.toLowerCase()}`,
    description: `Explore medical tourism options in ${city}.`
  }));

  return (
    <InternalLinks
      title="Popular Medical Tourism Destinations"
      links={cityLinks}
      variant="compact"
    />
  );
}

/**
 * Blog Article Links Component
 * For related blog articles
 */
export function BlogArticleLinks({ articles }: { articles: InternalLink[] }) {
  return (
    <InternalLinks
      title="You May Also Be Interested In"
      links={articles}
      variant="default"
    />
  );
}

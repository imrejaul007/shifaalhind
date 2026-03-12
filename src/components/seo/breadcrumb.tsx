import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  locale?: 'en' | 'ar';
  className?: string;
}

/**
 * Comprehensive Breadcrumb Component with Schema.org markup
 * Provides navigation hierarchy and SEO benefits
 */
export function Breadcrumb({ items, locale = 'en', className = '' }: BreadcrumbProps) {
  const isRtl = locale === 'ar';
  const homeLabel = isRtl ? 'الرئيسية' : 'Home';
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';

  // Create full breadcrumb list with Home
  const fullItems = [
    { label: homeLabel, href: '/' },
    ...items.filter(item => item.label), // Filter out empty items
  ];

  // Generate Schema.org JSON-LD
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: fullItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href && {
        item: item.href.startsWith('http') ? item.href : `${baseUrl}${item.href}`,
      }),
    })),
  };

  return (
    <>
      {/* Schema.org markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Visual breadcrumb navigation */}
      <nav className={`flex items-center text-sm ${className}`} aria-label="Breadcrumb" dir={isRtl ? 'rtl' : 'ltr'}>
        <ol className="flex items-center flex-wrap gap-1 md:gap-2">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;
            const Icon = ChevronRight;

            return (
              <li key={item.label} className="flex items-center">
                {index === 0 ? (
                  <Link
                    href="/"
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <Home className="h-4 w-4" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </Link>
                ) : item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-900 dark:text-gray-100 font-medium">{item.label}</span>
                )}

                {!isLast && (
                  <Icon className="h-4 w-4 mx-1 text-gray-400 dark:text-gray-600" />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

/**
 * Simple breadcrumb without schema (for nested usage)
 */
export function SimpleBreadcrumb({ items, locale = 'en', className = '' }: BreadcrumbProps) {
  const isRtl = locale === 'ar';
  const homeLabel = isRtl ? 'الرئيسية' : 'Home';

  return (
    <nav className={`flex items-center text-sm ${className}`} aria-label="Breadcrumb" dir={isRtl ? 'rtl' : 'ltr'}>
      <ol className="flex items-center flex-wrap gap-1 md:gap-2">
        <li className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline">{homeLabel}</span>
          </Link>
        </li>
        {items.filter(item => item.label).map((item, index) => {
          const isLast = index === items.length - 1;
          const Icon = ChevronRight;

          return (
            <li key={item.label} className="flex items-center">
              <Icon className="h-4 w-4 mx-1 text-gray-400 dark:text-gray-600" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 dark:text-gray-100 font-medium">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/**
 * JSON-LD Schema generator (can be used in server components)
 */
export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const homeLabel = 'Home';
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: homeLabel,
        item: baseUrl,
      },
      ...items.filter(item => item.label).map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        ...(item.href && {
          item: item.href.startsWith('http') ? item.href : `${baseUrl}${item.href}`,
        }),
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

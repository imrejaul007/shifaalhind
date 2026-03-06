/**
 * Contextual Sidebar Component for Treatment Pages
 *
 * Provides contextual internal links on treatment pages to improve SEO.
 * Renders related treatments, same-category links, regional links,
 * cost-comparison links, and best-of links.
 *
 * Server component - no 'use client' directive needed.
 * Fully bilingual (EN/AR) with RTL support.
 */

import Link from 'next/link';
import {
  getRelatedTreatments,
  getCategoryTreatments,
  getCountryRelevantLinks,
  getCrossSellLinks,
  type InternalLink,
} from '@/config/internal-links';

interface ContextualSidebarProps {
  treatmentSlug: string;
  locale: 'en' | 'ar';
  city?: string;
}

const headings = {
  en: {
    relatedTreatments: 'Related Treatments',
    moreInCategory: 'More in This Category',
    popularFromRegion: 'Popular from Your Region',
    compareCosts: 'Compare Costs',
    topRanked: 'Top Ranked',
  },
  ar: {
    relatedTreatments: 'علاجات مرتبطة',
    moreInCategory: 'أكثر في نفس القسم',
    popularFromRegion: 'الأكثر طلباً من منطقتك',
    compareCosts: 'مقارنة التكاليف',
    topRanked: 'الأعلى تقييماً',
  },
} as const;

const ctaLabels = {
  en: {
    compareCosts: 'View Cost Comparison',
    topRanked: 'See Top Hospitals',
  },
  ar: {
    compareCosts: 'عرض مقارنة التكاليف',
    topRanked: 'عرض أفضل المستشفيات',
  },
} as const;

function SidebarSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
        {title}
      </h3>
      {children}
    </div>
  );
}

function LinkList({
  links,
  locale,
}: {
  links: InternalLink[];
  locale: 'en' | 'ar';
}) {
  if (links.length === 0) return null;

  const arrow = locale === 'ar' ? '\u2190' : '\u2192';

  return (
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="group flex items-center justify-between text-sm text-primary-700 transition-colors hover:text-primary-500"
          >
            <span className="line-clamp-1">
              {locale === 'ar' && link.labelAr ? link.labelAr : link.label}
            </span>
            <span className="flex-shrink-0 opacity-0 transition-opacity group-hover:opacity-100">
              {arrow}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function ContextualSidebar({
  treatmentSlug,
  locale,
  city,
}: ContextualSidebarProps) {
  const t = headings[locale];
  const cta = ctaLabels[locale];
  const arrow = locale === 'ar' ? '\u2190' : '\u2192';

  const relatedTreatments = getRelatedTreatments(treatmentSlug, 4);
  const categoryTreatments = getCategoryTreatments(treatmentSlug);
  const crossSell = getCrossSellLinks(treatmentSlug, city);
  const costComparison = crossSell.costComparisonPages[0] ?? null; // Default to UAE
  const topRanked = crossSell.bestOfPages[0] ?? null;
  const regionalLinks = crossSell.cityTreatmentLinks.length > 0
    ? crossSell.cityTreatmentLinks
    : getCountryRelevantLinks('uae').treatments.slice(0, 3);

  // If there is nothing to render, return null
  if (
    relatedTreatments.length === 0 &&
    categoryTreatments.length === 0 &&
    regionalLinks.length === 0 &&
    !costComparison &&
    !topRanked
  ) {
    return null;
  }

  return (
    <aside
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className="sticky top-24 space-y-4"
      aria-label={locale === 'ar' ? 'روابط ذات صلة' : 'Related links'}
    >
      {/* Related Treatments */}
      {relatedTreatments.length > 0 && (
        <SidebarSection title={t.relatedTreatments}>
          <LinkList links={relatedTreatments} locale={locale} />
        </SidebarSection>
      )}

      {/* More in This Category */}
      {categoryTreatments.length > 0 && (
        <SidebarSection title={t.moreInCategory}>
          <LinkList links={categoryTreatments} locale={locale} />
        </SidebarSection>
      )}

      {/* Popular from Your Region */}
      {regionalLinks.length > 0 && (
        <SidebarSection title={t.popularFromRegion}>
          <LinkList links={regionalLinks.slice(0, 3)} locale={locale} />
        </SidebarSection>
      )}

      {/* Compare Costs */}
      {costComparison && (
        <SidebarSection title={t.compareCosts}>
          <Link
            href={`/${locale}${costComparison.href}`}
            className="group flex items-center justify-between rounded-md bg-primary-50 px-3 py-2 text-sm font-medium text-primary-700 transition-colors hover:bg-primary-100"
          >
            <span>{cta.compareCosts}</span>
            <span className="transition-transform group-hover:translate-x-0.5">
              {arrow}
            </span>
          </Link>
        </SidebarSection>
      )}

      {/* Top Ranked */}
      {topRanked && (
        <SidebarSection title={t.topRanked}>
          <Link
            href={`/${locale}${topRanked.href}`}
            className="group flex items-center justify-between rounded-md bg-amber-50 px-3 py-2 text-sm font-medium text-amber-800 transition-colors hover:bg-amber-100"
          >
            <span>{cta.topRanked}</span>
            <span className="transition-transform group-hover:translate-x-0.5">
              {arrow}
            </span>
          </Link>
        </SidebarSection>
      )}
    </aside>
  );
}

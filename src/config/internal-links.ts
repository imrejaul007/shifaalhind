/**
 * Internal Linking Configuration for Shifa AlHind
 *
 * Comprehensive cross-linking between treatment pages, GCC country pages,
 * best-of ranking pages, cost comparison pages, and city-treatment pages.
 * Designed for SEO topical authority and user navigation.
 */

import { getTreatmentName } from './treatments-list';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface InternalLink {
  href: string;
  label: string;
  labelAr?: string;
}

export interface BreadcrumbLink {
  href: string;
  label: string;
}

export type TreatmentCategory =
  | 'cardiac'
  | 'orthopedic'
  | 'cancer'
  | 'transplant'
  | 'cosmetic'
  | 'fertility'
  | 'eye'
  | 'dental'
  | 'neurosurgery'
  | 'bariatric'
  | 'general'
  | 'urology'
  | 'vascular'
  | 'endocrine';

export type GCCCountry = 'uae' | 'saudi' | 'qatar' | 'oman' | 'kuwait' | 'bahrain';

export type BestOfTopic =
  | 'best-hospitals-medical-tourism'
  | 'best-cardiac-surgeons'
  | 'best-cancer-hospitals'
  | 'best-ivf-clinics'
  | 'best-orthopedic-hospitals'
  | 'best-dental-clinics';

// ---------------------------------------------------------------------------
// 1. treatmentRelatedMap
//    Maps each treatment slug to semantically related treatment slugs.
// ---------------------------------------------------------------------------

export const treatmentRelatedMap: Record<string, string[]> = {
  // Cardiac
  'heart-surgery-india': ['angioplasty-india', 'varicose-veins-treatment-india', 'diabetes-treatment-india'],
  'angioplasty-india': ['heart-surgery-india', 'varicose-veins-treatment-india', 'diabetes-treatment-india'],

  // Orthopedic
  'knee-replacement-india': ['hip-replacement-india', 'acl-reconstruction-india', 'shoulder-surgery-india', 'spine-surgery-india'],
  'hip-replacement-india': ['knee-replacement-india', 'shoulder-surgery-india', 'acl-reconstruction-india', 'spine-surgery-india'],
  'shoulder-surgery-india': ['knee-replacement-india', 'hip-replacement-india', 'acl-reconstruction-india'],
  'acl-reconstruction-india': ['knee-replacement-india', 'hip-replacement-india', 'shoulder-surgery-india'],

  // Oncology
  'cancer-treatment-india': ['breast-cancer-treatment-india', 'lung-cancer-treatment-india', 'colon-cancer-treatment-india', 'blood-cancer-treatment-india', 'bone-marrow-transplant-india'],
  'breast-cancer-treatment-india': ['cancer-treatment-india', 'cervical-cancer-treatment-india', 'cosmetic-surgery-india', 'breast-augmentation-india'],
  'lung-cancer-treatment-india': ['cancer-treatment-india', 'colon-cancer-treatment-india', 'prostate-cancer-treatment-india'],
  'colon-cancer-treatment-india': ['cancer-treatment-india', 'lung-cancer-treatment-india', 'prostate-cancer-treatment-india', 'gallbladder-surgery-india'],
  'cervical-cancer-treatment-india': ['cancer-treatment-india', 'breast-cancer-treatment-india', 'hysterectomy-surgery-india', 'pcos-treatment-india'],
  'prostate-cancer-treatment-india': ['cancer-treatment-india', 'kidney-stone-treatment-india', 'lung-cancer-treatment-india'],
  'blood-cancer-treatment-india': ['cancer-treatment-india', 'bone-marrow-transplant-india', 'liver-transplant-india'],

  // Transplants
  'liver-transplant-india': ['kidney-transplant-india', 'bone-marrow-transplant-india', 'cancer-treatment-india', 'gallbladder-surgery-india'],
  'kidney-transplant-india': ['liver-transplant-india', 'bone-marrow-transplant-india', 'kidney-stone-treatment-india'],
  'bone-marrow-transplant-india': ['blood-cancer-treatment-india', 'cancer-treatment-india', 'liver-transplant-india', 'kidney-transplant-india'],

  // Fertility & Gynecology
  'ivf-india': ['egg-freezing-india', 'pcos-treatment-india', 'hysterectomy-surgery-india'],
  'egg-freezing-india': ['ivf-india', 'pcos-treatment-india'],
  'pcos-treatment-india': ['ivf-india', 'egg-freezing-india', 'bariatric-surgery-india', 'diabetes-treatment-india'],
  'hysterectomy-surgery-india': ['ivf-india', 'cervical-cancer-treatment-india', 'pcos-treatment-india'],

  // Cosmetic
  'cosmetic-surgery-india': ['rhinoplasty-india', 'liposuction-india', 'breast-augmentation-india', 'hair-transplant-india'],
  'rhinoplasty-india': ['cosmetic-surgery-india', 'breast-augmentation-india', 'liposuction-india', 'hair-transplant-india'],
  'liposuction-india': ['cosmetic-surgery-india', 'bariatric-surgery-india', 'gastric-bypass-india', 'breast-augmentation-india'],
  'breast-augmentation-india': ['cosmetic-surgery-india', 'rhinoplasty-india', 'liposuction-india', 'breast-cancer-treatment-india'],
  'hair-transplant-india': ['cosmetic-surgery-india', 'rhinoplasty-india', 'dental-implants-india'],

  // Dental
  'dental-implants-india': ['all-on-4-dental-implants-india', 'veneers-india', 'cosmetic-surgery-india'],
  'all-on-4-dental-implants-india': ['dental-implants-india', 'veneers-india'],
  'veneers-india': ['dental-implants-india', 'all-on-4-dental-implants-india', 'cosmetic-surgery-india'],

  // Eye
  'cataract-surgery-india': ['lasik-eye-surgery-india', 'diabetes-treatment-india'],
  'lasik-eye-surgery-india': ['cataract-surgery-india', 'cosmetic-surgery-india'],

  // Neurosurgery & Spine
  'neurosurgery-india': ['spine-surgery-india', 'cancer-treatment-india'],
  'spine-surgery-india': ['neurosurgery-india', 'knee-replacement-india', 'shoulder-surgery-india'],

  // General Surgery
  'piles-surgery-india': ['hernia-surgery-india', 'gallbladder-surgery-india', 'appendix-surgery-india'],
  'hernia-surgery-india': ['piles-surgery-india', 'gallbladder-surgery-india', 'appendix-surgery-india', 'bariatric-surgery-india'],
  'gallbladder-surgery-india': ['hernia-surgery-india', 'appendix-surgery-india', 'liver-transplant-india', 'piles-surgery-india'],
  'appendix-surgery-india': ['hernia-surgery-india', 'gallbladder-surgery-india', 'piles-surgery-india'],

  // Bariatric
  'bariatric-surgery-india': ['gastric-bypass-india', 'liposuction-india', 'diabetes-treatment-india', 'pcos-treatment-india'],
  'gastric-bypass-india': ['bariatric-surgery-india', 'liposuction-india', 'diabetes-treatment-india', 'hernia-surgery-india'],

  // Urology
  'kidney-stone-treatment-india': ['kidney-transplant-india', 'prostate-cancer-treatment-india', 'hernia-surgery-india'],

  // Vascular
  'varicose-veins-treatment-india': ['heart-surgery-india', 'angioplasty-india', 'diabetes-treatment-india'],

  // Endocrine
  'thyroid-surgery-india': ['cancer-treatment-india', 'diabetes-treatment-india', 'pcos-treatment-india'],
  'diabetes-treatment-india': ['bariatric-surgery-india', 'cataract-surgery-india', 'kidney-stone-treatment-india', 'heart-surgery-india', 'thyroid-surgery-india'],
};

// ---------------------------------------------------------------------------
// 2. treatmentCategoryMap
//    Groups every treatment slug into its medical category.
// ---------------------------------------------------------------------------

export const treatmentCategoryMap: Record<TreatmentCategory, string[]> = {
  cardiac: ['heart-surgery-india', 'angioplasty-india'],
  orthopedic: ['knee-replacement-india', 'hip-replacement-india', 'shoulder-surgery-india', 'acl-reconstruction-india'],
  cancer: [
    'cancer-treatment-india', 'breast-cancer-treatment-india', 'lung-cancer-treatment-india',
    'colon-cancer-treatment-india', 'cervical-cancer-treatment-india', 'prostate-cancer-treatment-india',
    'blood-cancer-treatment-india',
  ],
  transplant: ['liver-transplant-india', 'kidney-transplant-india', 'bone-marrow-transplant-india'],
  cosmetic: ['cosmetic-surgery-india', 'rhinoplasty-india', 'liposuction-india', 'breast-augmentation-india', 'hair-transplant-india'],
  fertility: ['ivf-india', 'egg-freezing-india', 'pcos-treatment-india', 'hysterectomy-surgery-india'],
  eye: ['cataract-surgery-india', 'lasik-eye-surgery-india'],
  dental: ['dental-implants-india', 'all-on-4-dental-implants-india', 'veneers-india'],
  neurosurgery: ['neurosurgery-india', 'spine-surgery-india'],
  bariatric: ['bariatric-surgery-india', 'gastric-bypass-india'],
  general: ['piles-surgery-india', 'hernia-surgery-india', 'gallbladder-surgery-india', 'appendix-surgery-india'],
  urology: ['kidney-stone-treatment-india'],
  vascular: ['varicose-veins-treatment-india'],
  endocrine: ['thyroid-surgery-india', 'diabetes-treatment-india'],
};

// ---------------------------------------------------------------------------
// 3. categoryHubs
//    Hub page path and labels for each treatment category.
// ---------------------------------------------------------------------------

export const categoryHubs: Record<TreatmentCategory, InternalLink> = {
  cardiac:      { href: '/treatments/heart-surgery-india', label: 'Heart & Cardiac Surgery', labelAr: 'جراحة القلب' },
  orthopedic:   { href: '/treatments/knee-replacement-india', label: 'Orthopedic Surgery', labelAr: 'جراحة العظام' },
  cancer:       { href: '/treatments/cancer-treatment-india', label: 'Cancer Treatment', labelAr: 'علاج السرطان' },
  transplant:   { href: '/treatments/liver-transplant-india', label: 'Organ Transplants', labelAr: 'زراعة الأعضاء' },
  cosmetic:     { href: '/treatments/cosmetic-surgery-india', label: 'Cosmetic Surgery', labelAr: 'الجراحة التجميلية' },
  fertility:    { href: '/treatments/ivf-india', label: 'IVF & Fertility', labelAr: 'أطفال الأنابيب والخصوبة' },
  eye:          { href: '/treatments/cataract-surgery-india', label: 'Eye Surgery', labelAr: 'جراحة العيون' },
  dental:       { href: '/treatments/dental-implants-india', label: 'Dental Treatment', labelAr: 'علاج الأسنان' },
  neurosurgery: { href: '/treatments/neurosurgery-india', label: 'Brain & Spine Surgery', labelAr: 'جراحة المخ والعمود الفقري' },
  bariatric:    { href: '/treatments/bariatric-surgery-india', label: 'Weight Loss Surgery', labelAr: 'جراحة إنقاص الوزن' },
  general:      { href: '/treatments/hernia-surgery-india', label: 'General Surgery', labelAr: 'الجراحة العامة' },
  urology:      { href: '/treatments/kidney-stone-treatment-india', label: 'Urology', labelAr: 'المسالك البولية' },
  vascular:     { href: '/treatments/varicose-veins-treatment-india', label: 'Vascular Treatment', labelAr: 'علاج الأوعية الدموية' },
  endocrine:    { href: '/treatments/diabetes-treatment-india', label: 'Endocrine & Diabetes', labelAr: 'الغدد الصماء والسكري' },
};

// ---------------------------------------------------------------------------
// 4. gccCountryTreatmentLinks
//    Most popular / high-demand treatments per GCC country.
// ---------------------------------------------------------------------------

export const gccCountryTreatmentLinks: Record<GCCCountry, string[]> = {
  uae: [
    'heart-surgery-india', 'knee-replacement-india', 'ivf-india',
    'dental-implants-india', 'cosmetic-surgery-india', 'rhinoplasty-india',
    'hair-transplant-india', 'lasik-eye-surgery-india', 'bariatric-surgery-india',
    'cancer-treatment-india',
  ],
  saudi: [
    'heart-surgery-india', 'knee-replacement-india', 'hip-replacement-india',
    'ivf-india', 'cancer-treatment-india', 'liver-transplant-india',
    'bone-marrow-transplant-india', 'bariatric-surgery-india', 'spine-surgery-india',
    'cosmetic-surgery-india',
  ],
  qatar: [
    'heart-surgery-india', 'knee-replacement-india', 'ivf-india',
    'cosmetic-surgery-india', 'dental-implants-india', 'cancer-treatment-india',
    'lasik-eye-surgery-india', 'bariatric-surgery-india',
  ],
  oman: [
    'heart-surgery-india', 'knee-replacement-india', 'hip-replacement-india',
    'ivf-india', 'cancer-treatment-india', 'kidney-transplant-india',
    'dental-implants-india', 'spine-surgery-india',
  ],
  kuwait: [
    'heart-surgery-india', 'knee-replacement-india', 'bariatric-surgery-india',
    'ivf-india', 'cosmetic-surgery-india', 'cancer-treatment-india',
    'liver-transplant-india', 'rhinoplasty-india',
  ],
  bahrain: [
    'heart-surgery-india', 'knee-replacement-india', 'ivf-india',
    'dental-implants-india', 'cosmetic-surgery-india', 'hair-transplant-india',
    'lasik-eye-surgery-india', 'cancer-treatment-india',
  ],
};

// ---------------------------------------------------------------------------
// 5. bestOfLinks
//    Maps treatment categories to relevant best-of ranking pages.
// ---------------------------------------------------------------------------

export const bestOfLinks: Record<string, { topic: BestOfTopic; label: string; labelAr: string }[]> = {
  cardiac: [
    { topic: 'best-cardiac-surgeons', label: 'Best Cardiac Surgeons in India', labelAr: 'أفضل جراحي القلب في الهند' },
  ],
  orthopedic: [
    { topic: 'best-orthopedic-hospitals', label: 'Best Orthopedic Hospitals in India', labelAr: 'أفضل مستشفيات العظام في الهند' },
  ],
  cancer: [
    { topic: 'best-cancer-hospitals', label: 'Best Cancer Hospitals in India', labelAr: 'أفضل مستشفيات السرطان في الهند' },
  ],
  transplant: [
    { topic: 'best-hospitals-medical-tourism', label: 'Best Hospitals for Medical Tourism', labelAr: 'أفضل مستشفيات السياحة العلاجية' },
  ],
  cosmetic: [
    { topic: 'best-hospitals-medical-tourism', label: 'Best Hospitals for Medical Tourism', labelAr: 'أفضل مستشفيات السياحة العلاجية' },
  ],
  fertility: [
    { topic: 'best-ivf-clinics', label: 'Best IVF Clinics in India', labelAr: 'أفضل عيادات أطفال الأنابيب في الهند' },
  ],
  eye: [
    { topic: 'best-hospitals-medical-tourism', label: 'Best Hospitals for Medical Tourism', labelAr: 'أفضل مستشفيات السياحة العلاجية' },
  ],
  dental: [
    { topic: 'best-dental-clinics', label: 'Best Dental Clinics in India', labelAr: 'أفضل عيادات الأسنان في الهند' },
  ],
  neurosurgery: [
    { topic: 'best-hospitals-medical-tourism', label: 'Best Hospitals for Medical Tourism', labelAr: 'أفضل مستشفيات السياحة العلاجية' },
  ],
  bariatric: [
    { topic: 'best-hospitals-medical-tourism', label: 'Best Hospitals for Medical Tourism', labelAr: 'أفضل مستشفيات السياحة العلاجية' },
  ],
  general: [
    { topic: 'best-hospitals-medical-tourism', label: 'Best Hospitals for Medical Tourism', labelAr: 'أفضل مستشفيات السياحة العلاجية' },
  ],
  urology: [
    { topic: 'best-hospitals-medical-tourism', label: 'Best Hospitals for Medical Tourism', labelAr: 'أفضل مستشفيات السياحة العلاجية' },
  ],
  vascular: [
    { topic: 'best-cardiac-surgeons', label: 'Best Cardiac Surgeons in India', labelAr: 'أفضل جراحي القلب في الهند' },
  ],
  endocrine: [
    { topic: 'best-hospitals-medical-tourism', label: 'Best Hospitals for Medical Tourism', labelAr: 'أفضل مستشفيات السياحة العلاجية' },
  ],
};

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

/** Find the category for a given treatment slug */
function getCategoryForSlug(slug: string): TreatmentCategory | null {
  for (const [category, slugs] of Object.entries(treatmentCategoryMap)) {
    if (slugs.includes(slug)) return category as TreatmentCategory;
  }
  return null;
}

/** GCC country display names */
const gccCountryNames: Record<GCCCountry, { en: string; ar: string }> = {
  uae:     { en: 'UAE', ar: 'الإمارات' },
  saudi:   { en: 'Saudi Arabia', ar: 'السعودية' },
  qatar:   { en: 'Qatar', ar: 'قطر' },
  oman:    { en: 'Oman', ar: 'عمان' },
  kuwait:  { en: 'Kuwait', ar: 'الكويت' },
  bahrain: { en: 'Bahrain', ar: 'البحرين' },
};

/** Capitalize each word in a hyphenated slug */
function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

// ---------------------------------------------------------------------------
// 6. getRelatedTreatments
//    Returns related treatment InternalLinks for a given slug.
//    Uses the explicit map first, then falls back to same-category treatments.
// ---------------------------------------------------------------------------

export function getRelatedTreatments(slug: string, limit: number = 4): InternalLink[] {
  let related = treatmentRelatedMap[slug];

  // Fallback: same-category treatments
  if (!related || related.length === 0) {
    const category = getCategoryForSlug(slug);
    if (category) {
      related = treatmentCategoryMap[category].filter((s) => s !== slug);
    }
  }

  if (!related) return [];

  return related.slice(0, limit).map((relSlug) => ({
    href: `/treatments/${relSlug}`,
    label: getTreatmentName(relSlug),
  }));
}

// ---------------------------------------------------------------------------
// 7. getCategoryTreatments
//    Returns all treatments in the same category as the given slug
//    (excluding the slug itself).
// ---------------------------------------------------------------------------

export function getCategoryTreatments(slug: string): InternalLink[] {
  const category = getCategoryForSlug(slug);
  if (!category) return [];

  return treatmentCategoryMap[category]
    .filter((s) => s !== slug)
    .map((s) => ({
      href: `/treatments/${s}`,
      label: getTreatmentName(s),
    }));
}

// ---------------------------------------------------------------------------
// 8. getCountryRelevantLinks
//    Returns a collection of relevant links for a GCC country page:
//    popular treatments, cost comparison, best-of pages, and country page.
// ---------------------------------------------------------------------------

export function getCountryRelevantLinks(country: string): {
  treatments: InternalLink[];
  costComparison: InternalLink;
  bestOf: InternalLink[];
  countryPage: InternalLink;
} {
  const c = country as GCCCountry;
  const countryName = gccCountryNames[c]?.en ?? country;

  const treatmentSlugs = gccCountryTreatmentLinks[c] ?? [];
  const treatments: InternalLink[] = treatmentSlugs.map((slug) => ({
    href: `/treatments/${slug}`,
    label: getTreatmentName(slug),
  }));

  const costComparison: InternalLink = {
    href: `/cost-comparison/${c}`,
    label: `Treatment Cost: India vs ${countryName}`,
    labelAr: `تكاليف العلاج: الهند مقابل ${gccCountryNames[c]?.ar ?? country}`,
  };

  const bestOf: InternalLink[] = [
    { href: '/best/best-hospitals-medical-tourism', label: 'Best Hospitals for Medical Tourism', labelAr: 'أفضل مستشفيات السياحة العلاجية' },
    { href: '/best/best-cardiac-surgeons', label: 'Best Cardiac Surgeons in India', labelAr: 'أفضل جراحي القلب في الهند' },
    { href: '/best/best-cancer-hospitals', label: 'Best Cancer Hospitals in India', labelAr: 'أفضل مستشفيات السرطان في الهند' },
    { href: '/best/best-ivf-clinics', label: 'Best IVF Clinics in India', labelAr: 'أفضل عيادات أطفال الأنابيب في الهند' },
    { href: '/best/best-orthopedic-hospitals', label: 'Best Orthopedic Hospitals in India', labelAr: 'أفضل مستشفيات العظام في الهند' },
    { href: '/best/best-dental-clinics', label: 'Best Dental Clinics in India', labelAr: 'أفضل عيادات الأسنان في الهند' },
  ];

  const countryPage: InternalLink = {
    href: `/for-${c}-patients`,
    label: `Medical Tourism for ${countryName} Patients`,
    labelAr: `السياحة العلاجية لمرضى ${gccCountryNames[c]?.ar ?? country}`,
  };

  return { treatments, costComparison, bestOf, countryPage };
}

// ---------------------------------------------------------------------------
// 9. getBreadcrumbLinks
//    Generates breadcrumb link arrays for different page types.
// ---------------------------------------------------------------------------

export function getBreadcrumbLinks(
  type: 'treatment' | 'treatment-from-city' | 'cost-comparison' | 'country' | 'best-of',
  slug: string,
  locale: string = 'en',
  extra?: { city?: string; treatment?: string },
): BreadcrumbLink[] {
  const isAr = locale === 'ar';
  const home: BreadcrumbLink = { href: `/${locale}`, label: isAr ? 'الرئيسية' : 'Home' };

  switch (type) {
    case 'treatment': {
      const category = getCategoryForSlug(slug);
      const hub = category ? categoryHubs[category] : null;
      const crumbs: BreadcrumbLink[] = [
        home,
        { href: `/${locale}/treatments`, label: isAr ? 'العلاجات' : 'Treatments' },
      ];
      if (hub) {
        crumbs.push({
          href: `/${locale}${hub.href}`,
          label: isAr ? (hub.labelAr ?? hub.label) : hub.label,
        });
      }
      crumbs.push({
        href: `/${locale}/treatments/${slug}`,
        label: getTreatmentName(slug),
      });
      return crumbs;
    }

    case 'treatment-from-city': {
      const city = extra?.city ?? '';
      const treatment = extra?.treatment ?? slug;
      const cityLabel = slugToTitle(city);
      return [
        home,
        { href: `/${locale}/treatments`, label: isAr ? 'العلاجات' : 'Treatments' },
        {
          href: `/${locale}/treatments-from/${city}`,
          label: isAr ? `علاج من ${cityLabel}` : `Treatments from ${cityLabel}`,
        },
        {
          href: `/${locale}/treatments-from/${city}/${treatment}`,
          label: getTreatmentName(treatment),
        },
      ];
    }

    case 'cost-comparison': {
      const c = slug as GCCCountry;
      const countryName = gccCountryNames[c]?.en ?? slug;
      const countryNameAr = gccCountryNames[c]?.ar ?? slug;
      return [
        home,
        {
          href: `/${locale}/cost-comparison/${slug}`,
          label: isAr
            ? `مقارنة التكاليف: الهند مقابل ${countryNameAr}`
            : `Cost Comparison: India vs ${countryName}`,
        },
      ];
    }

    case 'country': {
      const c = slug as GCCCountry;
      const countryName = gccCountryNames[c]?.en ?? slug;
      const countryNameAr = gccCountryNames[c]?.ar ?? slug;
      return [
        home,
        {
          href: `/${locale}/for-${slug}-patients`,
          label: isAr ? `مرضى ${countryNameAr}` : `${countryName} Patients`,
        },
      ];
    }

    case 'best-of': {
      return [
        home,
        {
          href: `/${locale}/best/${slug}`,
          label: isAr ? 'الأفضل' : slugToTitle(slug),
        },
      ];
    }

    default:
      return [home];
  }
}

// ---------------------------------------------------------------------------
// 10. getCrossSellLinks
//     Returns cross-sell suggestions: related treatments, best-of pages,
//     cost comparison links, and optionally city-specific treatment links.
// ---------------------------------------------------------------------------

export function getCrossSellLinks(
  treatmentSlug: string,
  city?: string,
): {
  relatedTreatments: InternalLink[];
  bestOfPages: InternalLink[];
  costComparisonPages: InternalLink[];
  cityTreatmentLinks: InternalLink[];
} {
  // Related treatments (max 4)
  const relatedTreatments = getRelatedTreatments(treatmentSlug, 4);

  // Best-of pages for this treatment's category
  const category = getCategoryForSlug(treatmentSlug);
  const bestOfEntries = category ? (bestOfLinks[category] ?? []) : [];
  const bestOfPages: InternalLink[] = bestOfEntries.map((entry) => ({
    href: `/best/${entry.topic}`,
    label: entry.label,
    labelAr: entry.labelAr,
  }));
  // Always include the general best-hospitals page if not already present
  if (!bestOfPages.some((p) => p.href.includes('best-hospitals-medical-tourism'))) {
    bestOfPages.push({
      href: '/best/best-hospitals-medical-tourism',
      label: 'Best Hospitals for Medical Tourism',
      labelAr: 'أفضل مستشفيات السياحة العلاجية',
    });
  }

  // Cost comparison pages for all 6 GCC countries
  const allGCCCountries: GCCCountry[] = ['uae', 'saudi', 'qatar', 'oman', 'kuwait', 'bahrain'];
  const costComparisonPages: InternalLink[] = allGCCCountries.map((c) => ({
    href: `/cost-comparison/${c}`,
    label: `India vs ${gccCountryNames[c].en} Cost Comparison`,
    labelAr: `مقارنة التكاليف: الهند مقابل ${gccCountryNames[c].ar}`,
  }));

  // City-specific treatment links (when a GCC city context is provided)
  const cityTreatmentLinks: InternalLink[] = [];
  if (city) {
    const cityTitle = slugToTitle(city);
    const treatmentBase = treatmentSlug.replace(/-india$/, '');

    // The same treatment in this city
    cityTreatmentLinks.push({
      href: `/treatments-from/${city}/${treatmentBase}`,
      label: `${getTreatmentName(treatmentSlug)} from ${cityTitle}`,
    });

    // Related treatments in the same city (max 3)
    const related = treatmentRelatedMap[treatmentSlug] ?? [];
    related.slice(0, 3).forEach((relSlug) => {
      const relBase = relSlug.replace(/-india$/, '');
      cityTreatmentLinks.push({
        href: `/treatments-from/${city}/${relBase}`,
        label: `${getTreatmentName(relSlug)} from ${cityTitle}`,
      });
    });
  }

  return { relatedTreatments, bestOfPages, costComparisonPages, cityTreatmentLinks };
}

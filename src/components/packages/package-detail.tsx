'use client';

import Link from 'next/link';
import { CheckCircle, XCircle, Plane, Hotel, Calendar, User, MapPin, ArrowRight, Star, Shield, Clock, RefreshCw, Heart, FileText, Video, Stethoscope, Droplets } from 'lucide-react';

export interface PackageDetail {
  id: string;
  name: string;
  nameAr?: string;
  slug: string;
  treatment: string;
  treatmentAr?: string;
  hospital: string;
  hospitalAr?: string;
  city: string;
  cityAr?: string;
  country: string;
  countryAr?: string;
  price: {
    min: number;
    max: number;
    currency: string;
    includes: string[];
    excludes?: string[];
  };
  duration: number; // in days
  doctor?: string;
  doctorAr?: string;
  successRate: number;
  description: string;
  descriptionAr?: string;
  highlights: string[];
  highlightsAr?: string[];
  inclusions: string[];
  inclusionsAr?: string[];
  exclusions?: string[];
  exclusionsAr?: string[];
  itinerary?: {
    day: number;
    title: string;
    titleAr?: string;
    description: string;
    descriptionAr?: string;
    activities: string[];
  }[];
  faqs?: {
    question: string;
    questionAr?: string;
    answer: string;
    answerAr?: string;
  }[];
  images?: string[];
  videoUrl?: string;
  reviews: {
    count: number;
    rating: number;
  };
  available: boolean;
}

interface PackageDetailProps {
  package: PackageDetail;
  locale?: 'en' | 'ar';
  variant?: 'full' | 'summary' | 'compact';
  showBooking?: boolean;
  className?: string;
}

/**
 * Package Detail Component
 * Comprehensive medical tourism package display
 *
 * Features:
 * - Complete package information
 * - Inclusions/Exclusions
 * - Day-by-day itinerary
 * - FAQ section
 * - Booking CTA
 * - Price transparency
 * - Trust signals (success rate, hospital rating)
 */
export function PackageDetail({
  pkg,
  locale = 'en',
  variant = 'full',
  showBooking = true,
  className = '',
}: PackageDetailProps) {
  const isRtl = locale === 'ar';

  const getText = (en: string, ar?: string) => isRtl && ar ? ar : en;
  const getArray = (en: string[], ar?: string[]) => isRtl && ar ? ar : en;

  // Compact variant
  if (variant === 'compact') {
    return (
      <Link
        href={`/${locale}/packages/${pkg.slug}`}
        className={`group block rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800 ${className}`}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div className={`flex items-start justify-between gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {getText(pkg.name, pkg.nameAr)}
              </h3>
              {pkg.available ? (
                <span className="text-xs text-green-600 dark:text-green-400">● {isRtl ? 'متاح' : 'Available'}</span>
              ) : (
                <span className="text-xs text-red-600 dark:text-red-400">● {isRtl ? 'غير متاح' : 'Unavailable'}</span>
              )}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{getText(pkg.treatment, pkg.treatmentAr)}</p>
            <div className="mt-2 flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {getText(pkg.city, pkg.cityAr)}, {getText(pkg.country, pkg.countryAr)}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {pkg.duration} {isRtl ? 'أيام' : 'days'}
              </span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500 dark:text-gray-400">{isRtl ? 'من' : 'From'}</p>
            <p className="text-lg font-bold text-green-600 dark:text-green-400">
              {pkg.price.currency} {pkg.price.min.toLocaleString()}
            </p>
          </div>
        </div>
      </Link>
    );
  }

  // Summary variant
  if (variant === 'summary') {
    return (
      <div
        className={`overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all dark:border-gray-700 dark:bg-gray-800 ${className}`}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold">{getText(pkg.name, pkg.nameAr)}</h3>
              <p className="mt-1 text-blue-100">{getText(pkg.treatment, pkg.treatmentAr)}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-blue-100">{isRtl ? 'من' : 'From'}</p>
              <p className="text-2xl font-bold">
                {pkg.price.currency} {pkg.price.min.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Key Info */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="flex justify-center">
                <Calendar className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </div>
              <p className="mt-1 font-bold text-gray-900 dark:text-gray-100">{pkg.duration}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{isRtl ? 'أيام' : 'Days'}</p>
            </div>
            <div>
              <div className="flex justify-center">
                <Stethoscope className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </div>
              <p className="mt-1 font-bold text-gray-900 dark:text-gray-100">{pkg.successRate}%</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{isRtl ? 'معدل نجاح' : 'Success'}</p>
            </div>
            <div>
              <div className="flex justify-center">
                <Star className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </div>
              <p className="mt-1 font-bold text-gray-900 dark:text-gray-100">{pkg.reviews.rating}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">({pkg.reviews.count})</p>
            </div>
          </div>

          {/* Inclusions */}
          <div>
            <p className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              {isRtl ? 'يشمل' : 'Includes'}
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {getArray(pkg.inclusions, pkg.inclusionsAr).slice(0, 4).map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-4 w-4 shrink-0 text-green-600" />
                  <span className="line-clamp-1">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          {showBooking && (
            <div className="flex gap-3">
              <Link
                href={`/${locale}/packages/${pkg.slug}`}
                className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition-all hover:bg-blue-700"
              >
                {isRtl ? 'عرض التفاصيل' : 'View Details'}
                <ArrowRight className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="rounded-lg bg-green-600 px-4 py-3 text-white transition-all hover:bg-green-700"
              >
                {isRtl ? 'احجز الآن' : 'Book Now'}
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Full variant
  return (
    <div className={`space-y-8 ${className}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
        {pkg.images && pkg.images.length > 0 && (
          <div className="relative h-64 overflow-hidden sm:h-80 md:h-96">
            <img
              src={pkg.images[0]}
              alt={getText(pkg.name, pkg.nameAr)}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold">
                  {getText(pkg.treatment, pkg.treatmentAr)}
                </span>
                {pkg.available ? (
                  <span className="flex items-center gap-1 rounded-full bg-green-500 px-3 py-1 text-sm">
                    <CheckCircle className="h-3 w-3" />
                    {isRtl ? 'متاح للحجز' : 'Available Now'}
                  </span>
                ) : (
                  <span className="flex items-center gap-1 rounded-full bg-red-500 px-3 py-1 text-sm">
                    <XCircle className="h-3 w-3" />
                    {isRtl ? 'غير متاح حالياً' : 'Currently Unavailable'}
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold sm:text-4xl">{getText(pkg.name, pkg.nameAr)}</h1>
              <div className="mt-2 flex flex-wrap items-center gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {getText(pkg.hospital, pkg.hospitalAr)}, {getText(pkg.city, pkg.cityAr)}, {getText(pkg.country, pkg.countryAr)}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {pkg.duration} {isRtl ? 'أيام' : 'days'}
                </span>
                {pkg.doctor && (
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {getText(pkg.doctor, pkg.doctorAr)}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Price and Quick Info */}
        <div className={`flex flex-col gap-6 border-t border-gray-200 p-6 sm:flex-row sm:items-center sm:justify-between dark:border-gray-700`}>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{isRtl ? 'السعر يبدأ من' : 'Price starts from'}</p>
            <p className="text-4xl font-bold text-green-600 dark:text-green-400">
              {pkg.price.currency} {pkg.price.min.toLocaleString()}
              {pkg.price.max > pkg.price.min && (
                <span className="text-xl font-normal text-gray-600 dark:text-gray-400">
                  {' '}- {pkg.price.currency} {pkg.price.max.toLocaleString()}
                </span>
              )}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 dark:bg-gray-700">
              <Shield className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {pkg.successRate}% {isRtl ? 'معدل نجاح' : 'Success Rate'}
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 dark:bg-gray-700">
              <Star className="h-4 w-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {pkg.reviews.rating} ({pkg.reviews.count} {isRtl ? 'تقييم' : 'reviews'})
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="space-y-8 lg:col-span-2">
          {/* Description */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
              {isRtl ? 'عن الحزمة' : 'About This Package'}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {getText(pkg.description, pkg.descriptionAr)}
            </p>
          </section>

          {/* Highlights */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
              {isRtl ? 'أبرز المميزات' : 'Package Highlights'}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {getArray(pkg.highlights, pkg.highlightsAr).map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Heart className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Inclusions */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
              {isRtl ? 'ما يشمله الحزمة' : 'What\'s Included'}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {getArray(pkg.inclusions, pkg.inclusionsAr).map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Exclusions */}
          {pkg.exclusions && pkg.exclusions.length > 0 && (
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
                {isRtl ? 'ما لا يشمله الحزمة' : 'What\'s Not Included'}
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {getArray(pkg.exclusions, pkg.exclusionsAr).map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Itinerary */}
          {pkg.itinerary && pkg.itinerary.length > 0 && (
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
                {isRtl ? 'الجدول الزمني' : 'Daily Itinerary'}
              </h2>
              <div className="space-y-4">
                {pkg.itinerary.map((day) => (
                  <div key={day.day} className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                        {day.day}
                      </span>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                          {getText(day.title, day.titleAr)}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {isRtl ? 'يوم' : 'Day'} {day.day}
                        </p>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-700 dark:text-gray-300">
                      {getText(day.description, day.descriptionAr)}
                    </p>
                    {day.activities.length > 0 && (
                      <ul className="space-y-1">
                        {day.activities.map((activity, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="text-blue-600">›</span>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          {pkg.faqs && pkg.faqs.length > 0 && (
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
                {isRtl ? 'أسئلة شائعة' : 'Frequently Asked Questions'}
              </h2>
              <div className="space-y-4">
                {pkg.faqs.map((faq, index) => (
                  <div key={index} className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                    <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                      {getText(faq.question, faq.questionAr)}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">{getText(faq.answer, faq.answerAr)}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Booking Card */}
          <div className="sticky top-6 rounded-xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">
              {isRtl ? 'احجز الآن' : 'Book This Package'}
            </h3>
            <div className="mb-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Plane className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  {isRtl ? 'سفر طيران مدفوع' : 'Flight included'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Hotel className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  {isRtl ? 'إقامة فندقية' : 'Hotel stay included'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Video className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  {isRtl ? 'استشارة فيديو مجانية' : 'Free video consultation'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  {isRtl ? 'دعم 24/7' : '24/7 support'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Droplets className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  {isRtl ? 'سيارة مع سائق' : 'Airport pickup'}
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <Link
                href={`/${locale}/contact`}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 font-semibold text-white transition-all hover:bg-green-700"
              >
                {isRtl ? 'احجز الآن' : 'Book Now'}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-blue-600 px-4 py-3 font-semibold text-blue-600 transition-all hover:bg-blue-50 dark:hover:bg-blue-950"
              >
                <Video className="h-4 w-4" />
                {isRtl ? 'استشارة مجانية' : 'Free Consultation'}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-100 px-4 py-3 font-semibold text-gray-700 transition-all hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              >
                <FileText className="h-4 w-4" />
                {isRtl ? 'احصل على عرض سعر' : 'Get a Quote'}
              </Link>
            </div>
          </div>

          {/* Hospital Info */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">
              {isRtl ? 'المستشفى' : 'Hospital Information'}
            </h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">
                  {getText(pkg.hospital, pkg.hospitalAr)}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {getText(pkg.city, pkg.cityAr)}, {getText(pkg.country, pkg.countryAr)}
                </p>
              </div>
              {pkg.doctor && (
                <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {isRtl ? 'الطبيب المقترح' : 'Recommended Doctor'}
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    {getText(pkg.doctor, pkg.doctorAr)}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Package Grid Component
 */
export function PackageGrid({
  packages,
  locale = 'en',
  variant = 'compact',
  limit,
  className = '',
}: {
  packages: PackageDetail[];
  locale?: 'en' | 'ar';
  variant?: 'compact' | 'summary';
  limit?: number;
  className?: string;
}) {
  const displayPackages = limit ? packages.slice(0, limit) : packages;

  return (
    <div className={`grid gap-4 md:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {displayPackages.map((pkg) => (
        <PackageDetail key={pkg.id} pkg={pkg} locale={locale} variant={variant} />
      ))}
    </div>
  );
}

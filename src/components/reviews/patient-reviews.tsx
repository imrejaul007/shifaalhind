'use client';

import { useState } from 'react';
import { Star, Quote, ThumbsUp, Flag, ChevronLeft, ChevronRight, User, Calendar, MapPin, Heart } from 'lucide-react';

export interface PatientReview {
  id: string;
  patientName: string;
  patientInitials?: string;
  country: string;
  flag?: string;
  treatment: string;
  treatmentAr?: string;
  rating: number;
  date: string;
  review: string;
  reviewAr?: string;
  helpfulCount: number;
  isVerified: boolean;
  hospital?: string;
  doctor?: string;
  beforeAfterImages?: { before?: string; after?: string };
}

interface PatientReviewsProps {
  reviews: PatientReview[];
  locale?: 'en' | 'ar';
  variant?: 'grid' | 'slider' | 'compact';
  limit?: number;
  showFilters?: boolean;
  showBeforeAfter?: boolean;
  className?: string;
}

/**
 * Patient Reviews Component
 * Displays patient testimonials with trust signals
 *
 * Features:
 * - Verified patient badges
 * - Star ratings
 * - Before/after images
 * - Helpful voting
 * - Country flags for GCC patients
 * - Filter by treatment type
 * - Multi-language support
 */
export function PatientReviews({
  reviews,
  locale = 'en',
  variant = 'grid',
  limit = 6,
  showFilters = true,
  showBeforeAfter = false,
  className = '',
}: PatientReviewsProps) {
  const isRtl = locale === 'ar';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTreatment, setSelectedTreatment] = useState('all');
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, boolean>>({});

  const displayReviews = limit > 0 ? reviews.slice(0, limit) : reviews;

  // Filter reviews by treatment
  const filteredReviews = selectedTreatment === 'all'
    ? displayReviews
    : displayReviews.filter(r => r.treatment === selectedTreatment);

  // Get unique treatments for filter
  const treatments = ['all', ...Array.from(new Set(displayReviews.map(r => r.treatment)))];

  const getTreatmentName = (review: PatientReview) => {
    if (isRtl && review.treatmentAr) return review.treatmentAr;
    return review.treatment;
  };

  const getReviewText = (review: PatientReview) => {
    if (isRtl && review.reviewAr) return review.reviewAr;
    return review.review;
  };

  const handleHelpful = (reviewId: string) => {
    setHelpfulVotes(prev => ({
      ...prev,
      [reviewId]: !prev[reviewId],
    }));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredReviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredReviews.length) % filteredReviews.length);
  };

  const renderRating = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300 dark:text-gray-600'
            }`}
          />
        ))}
      </div>
    );
  };

  const ReviewCard = ({ review, isFeatured = false }: { review: PatientReview; isFeatured?: boolean }) => {
    const initials = review.patientInitials || review.patientName.split(' ').map(n => n[0]).join('').slice(0, 2);
    const isHelpful = helpfulVotes[review.id];

    return (
      <div
        className={`overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800 ${isFeatured ? 'ring-2 ring-blue-500' : ''}`}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <div className={`flex items-start justify-between gap-4 p-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-lg font-bold text-white">
              {initials}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">{review.patientName}</h4>
                {review.isVerified && (
                  <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-950 dark:text-green-400">
                    <Heart className="h-3 w-3" />
                    {isRtl ? 'موثق' : 'Verified'}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2 mt-1 text-xs text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  {review.flag || '🌍'} {review.country}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
          {renderRating(review.rating)}
        </div>

        {/* Treatment Info */}
        {review.treatment && (
          <div className={`px-4 pb-3 ${isRtl ? 'text-right' : 'text-left'}`}>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              <MapPin className="h-3.5 w-3.5" />
              {getTreatmentName(review)}
            </span>
          </div>
        )}

        {/* Review Text */}
        <div className="px-4 pb-3">
          <p className="relative text-gray-700 dark:text-gray-300">
            <Quote className="absolute -top-1 text-gray-300 dark:text-gray-600" />
            <span className="pl-4">{getReviewText(review)}</span>
          </p>
        </div>

        {/* Before/After Images */}
        {showBeforeAfter && review.beforeAfterImages && (review.beforeAfterImages.before || review.beforeAfterImages.after) && (
          <div className="flex gap-2 px-4 pb-3">
            {review.beforeAfterImages.before && (
              <div className="relative flex-1">
                <img
                  src={review.beforeAfterImages.before}
                  alt="Before"
                  className="h-32 w-full rounded-lg object-cover"
                />
                <span className="absolute top-2 left-2 rounded-full bg-gray-900/80 px-2 py-0.5 text-xs font-semibold text-white">
                  {isRtl ? 'قبل' : 'Before'}
                </span>
              </div>
            )}
            {review.beforeAfterImages.after && (
              <div className="relative flex-1">
                <img
                  src={review.beforeAfterImages.after}
                  alt="After"
                  className="h-32 w-full rounded-lg object-cover"
                />
                <span className="absolute top-2 left-2 rounded-full bg-green-600/80 px-2 py-0.5 text-xs font-semibold text-white">
                  {isRtl ? 'بعد' : 'After'}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className={`flex items-center justify-between border-t border-gray-200 p-4 dark:border-gray-700 ${isRtl ? 'flex-row-reverse' : ''}`}>
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            {review.hospital && (
              <span className="flex items-center gap-1">
                <User className="h-3 w-3" />
                {review.hospital}
              </span>
            )}
            {review.doctor && (
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {review.doctor}
              </span>
            )}
          </div>
          <button
            onClick={() => handleHelpful(review.id)}
            className={`flex items-center gap-1 text-xs transition-colors ${
              isHelpful
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            <ThumbsUp className={`h-3.5 w-3.5 ${isHelpful ? 'fill-current' : ''}`} />
            {isHelpful ? 'Helpful' : 'Helpful'} ({review.helpfulCount + (isHelpful ? 1 : 0)})
          </button>
        </div>
      </div>
    );
  };

  // Slider variant
  if (variant === 'slider' && filteredReviews.length > 0) {
    const currentReview = filteredReviews[currentIndex];

    return (
      <div className={`space-y-4 ${className}`}>
        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={prevReview}
            className="rounded-full bg-white p-2 shadow-md transition-all hover:scale-110 dark:bg-gray-800"
          >
            <ChevronLeft className={`h-5 w-5 ${isRtl ? 'rotate-180' : ''}`} />
          </button>
          <div className="flex gap-1">
            {filteredReviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextReview}
            className="rounded-full bg-white p-2 shadow-md transition-all hover:scale-110 dark:bg-gray-800"
          >
            <ChevronRight className={`h-5 w-5 ${isRtl ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Featured Review */}
        {currentReview && <ReviewCard review={currentReview} isFeatured />}
      </div>
    );
  }

  // Compact variant
  if (variant === 'compact') {
    return (
      <div className={`space-y-3 ${className}`}>
        {filteredReviews.map((review) => {
          const initials = review.patientInitials || review.patientName.split(' ').map(n => n[0]).join('').slice(0, 2);

          return (
            <div
              key={review.id}
              className="flex gap-3 rounded-lg border border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800"
              dir={isRtl ? 'rtl' : 'ltr'}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                {initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900 dark:text-gray-100">{review.patientName}</span>
                    {review.isVerified && (
                      <span className="text-xs text-green-600 dark:text-green-400">✓</span>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">{review.flag}</span>
                </div>
                <p className="mt-1 line-clamp-2 text-sm text-gray-700 dark:text-gray-300">
                  {getReviewText(review)}
                </p>
                {renderRating(review.rating)}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // Grid variant (default)
  return (
    <div className={`space-y-6 ${className}`}>
      {/* Filter */}
      {showFilters && treatments.length > 1 && (
        <div className="flex flex-wrap gap-2">
          {treatments.map((treatment) => (
            <button
              key={treatment}
              onClick={() => setSelectedTreatment(treatment)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedTreatment === treatment
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {treatment === 'all'
                ? (isRtl ? 'الكل' : 'All')
                : treatment}
            </button>
          ))}
        </div>
      )}

      {/* Reviews Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* Empty State */}
      {filteredReviews.length === 0 && (
        <div className="rounded-xl bg-gray-50 p-8 text-center dark:bg-gray-800">
          <Quote className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            {isRtl
              ? 'لم يتم العثور على تقييمات لهذا العلاج'
              : 'No reviews found for this treatment'}
          </p>
        </div>
      )}
    </div>
  );
}

/**
 * Rating Summary Component
 * Shows overall ratings and distribution
 */
export function RatingSummary({
  averageRating,
  totalReviews,
  ratingDistribution,
  locale = 'en',
}: {
  averageRating: number;
  totalReviews: number;
  ratingDistribution: { stars: number; count: number }[];
  locale?: 'en' | 'ar';
}) {
  const isRtl = locale === 'ar';

  const maxCount = Math.max(...ratingDistribution.map(d => d.count), 1);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
      {/* Overall Rating */}
      <div className={`flex items-center gap-6 sm:gap-8 ${isRtl ? 'flex-row-reverse' : ''}`}>
        <div className="text-center">
          <p className="text-5xl font-bold text-gray-900 dark:text-gray-100">{averageRating.toFixed(1)}</p>
          <div className="mt-2 flex justify-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-5 w-5 ${
                  star <= Math.round(averageRating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {isRtl ? 'تقييم' : 'Based on'} {totalReviews} {isRtl ? 'مراجعة' : 'reviews'}
          </p>
        </div>

        {/* Rating Distribution */}
        <div className="flex-1">
          {ratingDistribution.map((item) => (
            <div key={item.stars} className="mb-2">
              <div className={`flex items-center gap-2 text-sm ${isRtl ? 'flex-row-reverse' : ''}`}>
                <span className="w-3 text-gray-600 dark:text-gray-400">{item.stars}</span>
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <div className="flex-1 h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className="h-full rounded-full bg-yellow-400"
                    style={{ width: `${(item.count / maxCount) * 100}%` }}
                  />
                </div>
                <span className="w-8 text-right text-gray-600 dark:text-gray-400">{item.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Write Review Button Component
 */
export function WriteReviewButton({
  locale = 'en',
  treatment,
  className = '',
}: {
  locale?: 'en' | 'ar';
  treatment?: string;
  className?: string;
}) {
  const isRtl = locale === 'ar';

  return (
    <button
      className={`flex items-center gap-2 rounded-lg border-2 border-blue-600 bg-blue-50 px-4 py-2 font-semibold text-blue-600 transition-all hover:bg-blue-100 dark:bg-blue-950 dark:text-blue-400 dark:hover:bg-blue-900 ${className}`}
    >
      <Star className="h-5 w-5" />
      {isRtl ? 'اكتب تقييمك' : 'Write a Review'}
      {treatment && <span className="hidden sm:inline"> - {treatment}</span>}
    </button>
  );
}

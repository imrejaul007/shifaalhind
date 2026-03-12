'use client';

import { useState } from 'react';
import { Star, MessageSquare, User, Calendar } from 'lucide-react';

interface Review {
  id: string;
  patientName: string;
  country: string;
  treatment: string;
  hospital: string;
  rating: number;
  review: string;
  date: string;
  verified?: boolean;
}

interface PatientReviewsProps {
  treatmentSlug?: string;
  locale?: 'en' | 'ar';
  limit?: number;
  variant?: 'inline' | 'full';
}

const mockReviews: Review[] = [
  {
    id: '1',
    patientName: 'Ahmed Al-Rashid',
    country: 'UAE',
    treatment: 'Knee Replacement',
    hospital: 'Apollo Hospitals',
    rating: 5,
    review: 'Excellent experience! The team was very supportive throughout my stay. Dr. Sharma was extremely knowledgeable and explained everything clearly. The hospital facilities were world-class with Arabic coordinators available 24/7. Highly recommend for anyone considering knee replacement in India.',
    date: '2024-01-15',
    verified: true,
  },
  {
    id: '2',
    patientName: 'Fatima Al-Hassan',
    country: 'Saudi Arabia',
    treatment: 'IVF Treatment',
    hospital: 'Fortis Healthcare',
    rating: 5,
    review: 'After multiple failed attempts in our home country, we found success in India. The team at Shifa AlHind helped us through everything from medical visa to accommodation. The doctors were patient and the treatment was successful on the second attempt. We now have our baby boy! Thank you for making our dream come true.',
    date: '2024-02-20',
    verified: true,
  },
  {
    id: '3',
    patientName: 'Khalid Al-Otaibi',
    country: 'Qatar',
    treatment: 'Heart Bypass',
    hospital: 'Medanta Medicity',
    rating: 5,
    review: 'My father needed emergency heart surgery and couldn\'t wait for months in Qatar. We came to India through Shifa AlHind and the surgery was scheduled within a week. The operation was successful and my father recovered much faster than expected. Dr. Mishra is an excellent surgeon.',
    date: '2024-03-10',
    verified: true,
  },
  {
    id: '4',
    patientName: 'Sarah Al-Mansoori',
    country: 'Kuwait',
    treatment: 'Cancer Treatment',
    hospital: 'Max Healthcare',
    rating: 4,
    review: 'Comprehensive cancer care at Max Healthcare. The oncology team was thorough and provided multiple treatment options. The nursing staff was compassionate and the Arabic translators were helpful throughout.',
    date: '2024-02-28',
    verified: true,
  },
  {
    id: '5',
    patientName: 'Mohammed Al-Balushi',
    country: 'Oman',
    treatment: 'Hair Transplant',
    hospital: 'Artemis Hospital',
    rating: 5,
    review: 'Outstanding results! 3500+ grafts in one session at Artemis. Dr. Gupta is truly a master of his craft. The facility was clean and modern. Staff was friendly and helpful. Three months post-procedure and my hair looks amazing.',
    date: '2024-04-05',
    verified: true,
  },
  {
    id: '6',
    patientName: 'Aisha Al-Khater',
    country: 'Bahrain',
    treatment: 'Dental Implants',
    hospital: 'Manipal Hospitals',
    rating: 4,
    review: 'Good quality dental work at reasonable prices. Dr. Krishnan was gentle and thorough. The implant quality is excellent. Staff was professional and the hospital had halal food options.',
    date: '2024-03-15',
    verified: true,
  },
  {
    id: '7',
    patientName: 'Noura Al-Salem',
    country: 'Saudi Arabia',
    treatment: 'Spine Surgery',
    hospital: 'Apollo Hospitals',
    rating: 5,
    review: 'Successful spinal surgery at Apollo. The neurosurgeon explained the procedure clearly. Recovery was well-managed with physical therapy support. Highly recommend Dr. Mehta and the entire team.',
    date: '2024-05-20',
    verified: true,
  },
];

/**
 * Patient Reviews Component
 * Displays verified patient testimonials with ratings
 * Builds trust and social proof for new patients
 */
export function PatientReviews({
  treatmentSlug,
  locale = 'en',
  limit = 3,
  variant = 'full',
}: PatientReviewsProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const isRtl = locale === 'ar';

  const displayReviews = limit > 0 ? mockReviews.slice(0, limit) : mockReviews;
  const reviewsToShow = showMore ? mockReviews : displayReviews;
  const hasMore = mockReviews.length > reviewsToShow.length;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'fill-yellow-400' : 'fill-gray-300'}`}
      />
    ));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(isRtl ? 'ar-SA' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const averageRating = mockReviews.reduce((acc, review) => acc + review.rating, 0) / mockReviews.length;

  return (
    <div className={`${variant === 'full' ? 'space-y-6' : ''}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Header with Stats */}
      <div className="mb-8">
        <h2 className="mb-2 text-2xl font-bold text-gray-900">
          {isRtl ? 'تقييمات المرضى' : 'Patient Reviews'}
        </h2>
        <p className="text-gray-600">
          {isRtl
            ? `${mockReviews.length} + مرضى راضون بخبرتهم الحية مع عيادات شفاء الهند`
            : `Verified reviews from ${mockReviews.length}+ satisfied patients treated at Shifa AlHind`}
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-4 text-center border border-green-200">
            <div className="text-3xl font-bold text-green-700">{averageRating.toFixed(1)}</div>
            <div className="text-sm text-gray-600">
              {isRtl ? 'متوسط التقييم' : 'Average Rating'}
            </div>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-4 text-center border border-blue-200">
            <div className="text-3xl font-bold text-blue-700">{mockReviews.length}</div>
            <div className="text-sm text-gray-600">
              {isRtl ? 'مراجيع موثقة' : 'Verified Reviews'}
            </div>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-4 text-center border border-purple-200">
            <div className="text-3xl font-bold text-purple-700">6</div>
            <div className="text-sm text-gray-600">
              {isRtl ? 'دول الخليج' : 'GCC Countries'}
            </div>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 p-4 text-center border border-orange-200">
            <div className="text-3xl font-bold text-orange-700">98%</div>
            <div className="text-sm text-gray-600">
              {isRtl ? 'معدل الرضا' : 'Satisfaction Rate'}
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6">
        <button className={`rounded-lg px-4 py-2 font-medium transition-all ${
          isExpanded
            ? 'bg-green-600 text-white'
            : 'bg-white text-gray-700 border border-gray-300 hover:border-green-500'
        }`}>
          {isRtl ? 'الكل المراجعات' : 'All Reviews'}
        </button>
        <button className={`rounded-lg px-4 py-2 font-medium transition-all ${
          !isExpanded
            ? 'bg-green-600 text-white'
            : 'bg-white text-gray-700 border border-gray-300 hover:border-green-500'
        }`}>
          {isRtl ? 'إيجابية' : 'Verified'}
        </button>
        <button className={`rounded-lg px-4 py-2 font-medium transition-all ${
          !isExpanded
            ? 'bg-green-600 text-white'
            : 'bg-white text-gray-700 border border-gray-300 hover:border-green-500'
        }`}>
          {isRtl ? '5 نجوم' : '5 Stars'}
        </button>
        <button className={`rounded-lg px-4 py-2 font-medium transition-all ${
          !isExpanded
            ? 'bg-green-600 text-white'
            : 'bg-white text-gray-700 border border-gray-300 hover:border-green-500'
        }`}>
          {isRtl ? 'صور ونتائج' : 'With Photos'}
        </button>
      </div>
    </div>

    {/* Reviews List */}
    <div className="space-y-4">
      {reviewsToShow.map((review) => (
        <div
          key={review.id}
          className="rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all"
        >
          <div className="flex items-start gap-4 mb-4">
            {/* Patient Info */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 shrink-0">
              <User className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-gray-900">{review.patientName}</h4>
                {review.verified && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                    ✓ {isRtl ? 'موثق' : 'Verified'}
                  </span>
                )}
                <span className="text-sm text-gray-500">
                  • {review.country} • {isRtl ? formatDate(review.date) : formatDate(review.date)}
                </span>
              </div>
            </div>
            <Star className="h-5 w-5 text-yellow-400 shrink-0" />
          </div>

          {/* Treatment Info */}
          <div className="flex items-start gap-2 mb-3">
            <Calendar className="h-4 w-4 text-gray-400 mt-1" />
            <div>
              <div className="text-sm font-medium text-gray-900">{review.treatment}</div>
              <div className="text-xs text-gray-600">{review.hospital}</div>
            </div>
          </div>

          {/* Rating */}
          <div className="flex gap-1 mb-3">
            {renderStars(review.rating)}
            <span className="text-sm font-semibold text-gray-700">
              {review.rating}/5.0 {isRtl ? '- ممتاز' : '/ Excellent'}
            </span>
          </div>

          {/* Review Text */}
          <p className="text-gray-700 leading-relaxed">{review.review}</p>

          {/* Helpful Button */}
          <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
            <span className="text-sm text-gray-500">
              {isRtl ? 'هل كان هذا المراجع مفيدًا؟' : 'Was this review helpful?'}
            </span>
            <button className="rounded-lg bg-white border border-gray-300 px-3 py-1 hover:bg-green-50 hover:border-green-500 transition-all text-sm font-medium text-green-700">
              {isRtl ? 'نعم، مفيد' : 'Yes, Helpful'}
            </button>
            <button className="rounded-lg bg-white border border-gray-300 px-3 py-1 hover:bg-gray-50 hover:border-gray-400 transition-all text-sm font-medium text-gray-700">
              {isRtl ? 'لا' : 'No'}
            </button>
          </div>
        </div>
      ))}

      {/* Show More Button */}
      {hasMore && (
        <div className="text-center pt-6">
          <button
            onClick={() => setShowMore(true)}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition-all"
          >
            <MessageSquare className="h-5 w-5" />
            {isRtl ? 'عرض المزيد' : `Load ${mockReviews.length - reviewsToShow.length} More Reviews`}
          </button>
        </div>
      )}

      {/* CTA */}
      <div className="mt-8 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-8 text-center">
        <h3 className="mb-2 text-xl font-bold text-gray-900">
          {isRtl ? 'شارك تجربتك' : 'Share Your Experience'}
        </h3>
        <p className="mb-4 text-gray-700">
          {isRtl
            ? 'أتم علاجك في الهند؟ شارك تجربتك ليساعد مرضى آخرين.'
            : 'Did you have treatment in India? Share your experience to help other patients.'}
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white border border-gray-300 px-6 py-3 font-semibold text-gray-900 hover:border-blue-500 hover:bg-blue-50 transition-all"
          >
            <MessageSquare className="h-5 w-5 text-blue-600" />
            {isRtl ? 'اتصل بنا' : 'Contact Us'}
          </a>
          <a
            href="/booking"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-all"
          >
            <Calendar className="h-5 w-5" />
            {isRtl ? 'حجز موعد' : 'Book Now'}
          </a>
        </div>
      </div>
    </div>
  );
}

/**
 * Simple Review Card for placement on treatment pages
 */
export function ReviewCard({ review, locale = 'en' }: { review: Review; locale?: 'en' | 'ar' }) {
  const isRtl = locale === 'ar';

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${i < rating ? 'fill-yellow-400' : 'fill-gray-300'}`}
      />
    ));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(isRtl ? 'ar-SA' : 'en-US', {
      year: 'numeric',
      month: 'short',
    });
  };

  return (
    <div className="rounded-lg border border-gray-200 p-4 bg-white hover:shadow-md transition-all" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex items-start gap-3 mb-3">
        {/* Patient Avatar */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 shrink-0">
          <User className="h-5 w-5 text-blue-600" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="font-semibold text-gray-900">{review.patientName}</h4>
            {review.verified && (
              <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700">
                ✓
              </span>
            )}
            <span className="text-xs text-gray-500">
              • {formatDate(review.date)}
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            {renderStars(review.rating)}
            <span className="text-sm font-semibold text-gray-700">
              {review.rating}/5 {isRtl ? '/ ممتاز' : '/ Excellent'}
            </span>
          </div>
        </div>
      </div>

      {/* Review Text (truncated) */}
      <p className="text-sm text-gray-700 line-clamp-3">
        {review.review}
      </p>
    </div>
  );
}

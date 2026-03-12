'use client';

import { Link } from 'next/link';
import { Star, GraduationCap, Award, Calendar, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

export interface DoctorProfile {
  id: string;
  name: string;
  nameAr?: string;
  specialty: string;
  specialtyAr?: string;
  hospital: string;
  hospitalAr?: string;
  experience: number;
  rating: number;
  reviews: number;
  image?: string;
  education: string[];
  certifications: string[];
  languages: string[];
  price?: { min: number; max: number; currency: string };
  slug: string;
}

interface DoctorProfileCardProps {
  doctor: DoctorProfile;
  locale?: 'en' | 'ar';
  variant?: 'compact' | 'detailed' | 'minimal';
  showPrice?: boolean;
  className?: string;
}

/**
 * Doctor Profile Card Component
 * Displays doctor information with trust signals and CTA
 *
 * Features:
 * - Experience and credentials
 * - Ratings and reviews
 * - Hospital affiliation
 * - Price range
 * - Languages spoken
 * - Direct booking CTA
 */
export function DoctorProfileCard({
  doctor,
  locale = 'en',
  variant = 'detailed',
  showPrice = true,
  className = '',
}: DoctorProfileCardProps) {
  const isRtl = locale === 'ar';

  const getDoctorName = () => isRtl && doctor.nameAr ? doctor.nameAr : doctor.name;
  const getSpecialty = () => isRtl && doctor.specialtyAr ? doctor.specialtyAr : doctor.specialty;
  const getHospital = () => isRtl && doctor.hospitalAr ? doctor.hospitalAr : doctor.hospital;

  const renderRating = () => {
    return (
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-4 w-4 ${
                star <= Math.round(doctor.rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
          {doctor.rating.toFixed(1)}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          ({doctor.reviews} {isRtl ? 'تقييم' : 'reviews'})
        </span>
      </div>
    );
  };

  // Minimal variant - just key info
  if (variant === 'minimal') {
    return (
      <Link
        href={`/${locale}/doctors/${doctor.slug}`}
        className={`group block rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800 ${className}`}
      >
        <div className={`flex items-start gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
          {doctor.image ? (
            <img
              src={doctor.image}
              alt={getDoctorName()}
              className="h-16 w-16 shrink-0 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
              <GraduationCap className="h-8 w-8 text-gray-400 dark:text-gray-500" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              {getDoctorName()}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{getSpecialty()}</p>
            {renderRating()}
          </div>
          <ArrowRight className={`h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
        </div>
      </Link>
    );
  }

  // Compact variant
  if (variant === 'compact') {
    return (
      <div className={`rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-all dark:border-gray-700 dark:bg-gray-800 ${className}`}>
        <div className={`flex items-start gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
          {doctor.image ? (
            <img
              src={doctor.image}
              alt={getDoctorName()}
              className="h-20 w-20 shrink-0 rounded-lg object-cover"
            />
          ) : (
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700">
              <GraduationCap className="h-10 w-10 text-gray-400 dark:text-gray-500" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-900 dark:text-gray-100">{getDoctorName()}</h3>
            <p className="text-sm text-blue-600 dark:text-blue-400">{getSpecialty()}</p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{getHospital()}</p>
            <div className="mt-2 flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                <Calendar className="h-3 w-3" />
                {doctor.experience} {isRtl ? 'سنة' : 'years'}
              </span>
              {renderRating()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Detailed variant (default)
  return (
    <div
      className={`overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 ${className}`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Header with image and basic info */}
      <div className={`flex gap-4 p-4 sm:gap-6 ${isRtl ? 'flex-row-reverse' : ''}`}>
        {doctor.image ? (
          <img
            src={doctor.image}
            alt={getDoctorName()}
            className="h-24 w-24 shrink-0 rounded-xl object-cover sm:h-28 sm:w-28"
          />
        ) : (
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-gray-200 dark:bg-gray-700 sm:h-28 sm:w-28">
            <GraduationCap className="h-12 w-12 text-gray-400 dark:text-gray-500" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{getDoctorName()}</h3>
          <p className="text-base font-semibold text-blue-600 dark:text-blue-400">{getSpecialty()}</p>
          <div className="mt-1 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <MapPin className="h-3.5 w-3.5" />
            <span className="truncate">{getHospital()}</span>
          </div>
          {renderRating()}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-px bg-gray-200 dark:bg-gray-700">
        <div className="bg-gray-50 p-3 text-center dark:bg-gray-800">
          <div className="flex justify-center">
            <Calendar className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          </div>
          <p className="mt-1 text-lg font-bold text-gray-900 dark:text-gray-100">{doctor.experience}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {isRtl ? 'سنوات خبرة' : 'Years'}
          </p>
        </div>
        <div className="bg-gray-50 p-3 text-center dark:bg-gray-800">
          <div className="flex justify-center">
            <Star className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          </div>
          <p className="mt-1 text-lg font-bold text-gray-900 dark:text-gray-100">{doctor.rating.toFixed(1)}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Rating</p>
        </div>
        <div className="bg-gray-50 p-3 text-center dark:bg-gray-800">
          <div className="flex justify-center">
            <Award className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          </div>
          <p className="mt-1 text-lg font-bold text-gray-900 dark:text-gray-100">{doctor.certifications.length}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {isRtl ? 'شهادات' : 'Certs'}
          </p>
        </div>
      </div>

      {/* Education & Certifications */}
      <div className="p-4 space-y-3">
        {doctor.education.length > 0 && (
          <div>
            <p className="mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
              <GraduationCap className="inline h-3 w-3" /> {isRtl ? 'التعليم' : 'Education'}
            </p>
            <div className="space-y-1">
              {doctor.education.slice(0, 2).map((edu, index) => (
                <p key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-600" />
                  <span className="line-clamp-1">{edu}</span>
                </p>
              ))}
            </div>
          </div>
        )}

        {doctor.languages.length > 0 && (
          <div>
            <p className="mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
              {isRtl ? 'اللغات' : 'Languages'}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {doctor.languages.map((lang, index) => (
                <span
                  key={index}
                  className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Price and CTA */}
      <div className={`flex items-center justify-between gap-3 border-t border-gray-200 p-4 dark:border-gray-700 ${isRtl ? 'flex-row-reverse' : ''}`}>
        {showPrice && doctor.price && (
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {isRtl ? 'استشارة تبدأ من' : 'Consultation starts from'}
            </p>
            <p className="text-lg font-bold text-green-600 dark:text-green-400">
              {doctor.price.currency} {doctor.price.min.toLocaleString()}
            </p>
          </div>
        )}
        <Link
          href={`/${locale}/doctors/${doctor.slug}`}
          className={`flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-700 ${!showPrice ? 'w-full justify-center' : ''}`}
        >
          {isRtl ? 'عرض الملف الكامل' : 'View Full Profile'}
          <ArrowRight className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
        </Link>
      </div>
    </div>
  );
}

/**
 * Doctor Profile Card Grid
 * Displays multiple doctors in a responsive grid
 */
export function DoctorProfileCardGrid({
  doctors,
  locale = 'en',
  variant = 'detailed',
  limit,
  showPrice = true,
  className = '',
}: {
  doctors: DoctorProfile[];
  locale?: 'en' | 'ar';
  variant?: 'compact' | 'detailed' | 'minimal';
  limit?: number;
  showPrice?: boolean;
  className?: string;
}) {
  const displayDoctors = limit ? doctors.slice(0, limit) : doctors;

  return (
    <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {displayDoctors.map((doctor) => (
        <DoctorProfileCard
          key={doctor.id}
          doctor={doctor}
          locale={locale}
          variant={variant}
          showPrice={showPrice}
        />
      ))}
    </div>
  );
}

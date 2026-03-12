'use client';

import { User, GraduationCap, Star, MapPin, Mail, Phone, Calendar, Award } from 'lucide-react';

interface DoctorCardProps {
  name: string;
  specialty: string;
  hospital: string;
  experience?: string;
  education?: string[];
  languages?: string[];
  image?: string;
  rating?: number;
  reviewCount?: number;
  locale?: 'en' | 'ar';
}

/**
 * Doctor Profile Card Component
 * Displays doctor information with credentials and ratings
 * Can be used on treatment pages and hospital detail pages
 */
export function DoctorCard({
  name,
  specialty,
  hospital,
  experience = '15+ years',
  education = ['MBBS, MD'],
  languages = ['English', 'Arabic'],
  rating = 4.8,
  reviewCount = 127,
  locale = 'en',
}: DoctorCardProps) {
  const isRtl = locale === 'ar';

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex flex-col md:flex-row">
        {/* Doctor Image */}
        <div className={`relative h-48 md:h-auto md:w-48 shrink-0 ${isRtl ? 'md:rounded-br-none md:rounded-bl-none' : 'md:rounded-bl-none md:rounded-tl-none'}`}>
          {image ? (
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
              <User className="h-16 w-16 text-blue-200" />
            </div>
          )}
        </div>

        {/* Doctor Info */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            <p className="text-sm font-medium text-blue-600">{specialty}</p>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 mb-4">
            {rating && (
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-400 fill="currentColor" />
                <span className="font-semibold text-gray-900">{rating.toFixed(1)}</span>
                <span className="text-xs text-gray-500">
                  ({reviewCount} {isRtl ? 'مراجعات' : 'reviews'})
                </span>
              </div>
            )}
            {experience && (
              <div className="flex items-center gap-1 text-gray-600">
                <GraduationCap className="h-4 w-4" />
                <span className="text-sm">{experience}</span>
              </div>
            )}
          </div>

          {/* Hospital */}
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100">
            <MapPin className="h-4 w-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-700">{hospital}</span>
          </div>

          {/* Education */}
          {education && education.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">
                {isRtl ? 'المؤهل العلمي' : 'Education'}
              </h4>
              <div className="space-y-1">
                {education.map((edu, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Award className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{edu}</div>
                      <div className="text-xs text-gray-500">
                        {index === 0 && (
                          <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                            {isRtl ? 'الأساسي' : 'Primary'}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {languages && languages.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">
                {isRtl ? 'الغات' : 'Languages'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA Button */}
          <div className="flex gap-3">
            <button className="flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-white font-medium hover:bg-blue-700 transition-colors">
              <Calendar className="h-4 w-4" />
              <span>{isRtl ? 'احجز موعد' : 'Book Appointment'}</span>
            </button>
            <button className="flex-1 items-center justify-center gap-2 rounded-lg border border-blue-600 px-4 py-3 text-blue-600 font-medium hover:bg-blue-50 transition-colors">
              <Mail className="h-4 w-4" />
              <span>{isRtl ? 'إرسال رسالة' : 'Send Message'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Doctor Card Grid - displays multiple doctors
 */
export function DoctorCardGrid({ doctors, locale = 'en' }: { doctors: DoctorCardProps[]; locale?: 'en' | 'ar' }) {
  const isRtl = locale === 'ar';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" dir={isRtl ? 'rtl' : 'ltr'}>
      {doctors.map((doctor, index) => (
        <DoctorCard key={index} {...doctor} locale={locale} />
      ))}
    </div>
  );
}

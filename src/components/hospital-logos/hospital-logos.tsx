'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { CheckCircle2, Award, Shield, Users } from 'lucide-react';

/**
 * Hospital Partnership Logos Component
 *
 * Displays partner hospital logos and accreditation badges
 * Based on competitor analysis: MEDIUM/HIGH IMPACT trust element
 *
 * All competitors prominently display: Apollo, Fortis, Medanta, Max
 */

interface HospitalPartner {
  name: string;
  nameAr: string;
  city: string;
  cityAr: string;
  specialization: string;
  specializationAr: string;
  accreditation: 'JCI' | 'NABH' | 'Both';
}

const hospitalPartners: HospitalPartner[] = [
  {
    name: 'Apollo Hospitals',
    nameAr: 'مستشفيات أبولو',
    city: 'Multiple Cities',
    cityAr: 'مدن متعددة',
    specialization: 'Multi-Specialty',
    specializationAr: 'متعدد التخصصات',
    accreditation: 'Both'
  },
  {
    name: 'Fortis Healthcare',
    nameAr: 'فورتيس للرعاية الصحية',
    city: 'Delhi, Mumbai, Bangalore',
    cityAr: 'دلهي، مومباي، بنغالور',
    specialization: 'Cardiac & Orthopedics',
    specializationAr: 'القلب وجراحة العظام',
    accreditation: 'Both'
  },
  {
    name: 'Medanta - The Medicity',
    nameAr: 'ميدانتا - ذا ميديسيتي',
    city: 'Gurugram, Delhi NCR',
    cityAr: 'جوروجرام، منطقة دلهي',
    specialization: 'Heart & Neuro',
    specializationAr: 'القلب والأعصاب',
    accreditation: 'Both'
  },
  {
    name: 'Max Healthcare',
    nameAr: 'ماكس للرعاية الصحية',
    city: 'Delhi NCR',
    cityAr: 'منطقة دلهي',
    specialization: 'Cancer & Transplant',
    specializationAr: 'السرطان والزرع',
    accreditation: 'Both'
  },
  {
    name: 'Manipal Hospitals',
    nameAr: 'مستشفيات مانيبال',
    city: 'Bangalore, Delhi',
    cityAr: 'بنغالور، دلهي',
    specialization: 'Multi-Specialty',
    specializationAr: 'متعدد التخصصات',
    accreditation: 'NABH'
  },
  {
    name: 'Narayana Health',
    nameAr: 'نارايانا هيلث',
    city: 'Bangalore',
    cityAr: 'بنغالور',
    specialization: 'Cardiac Surgery',
    specializationAr: 'جراحة القلب',
    accreditation: 'Both'
  },
  {
    name: 'Kokilaben Hospital',
    nameAr: 'مستشفى كوكيلابين',
    city: 'Mumbai',
    cityAr: 'مومباي',
    specialization: 'Cancer & Robotics',
    specializationAr: 'السرطان والروبوتات',
    accreditation: 'Both'
  },
  {
    name: 'BLK-Max Super Speciality',
    nameAr: 'بي إل كي ماكس متخصص',
    city: 'Delhi',
    cityAr: 'دلهي',
    specialization: 'BMT & Organ Transplant',
    specializationAr: 'زرع النخاع والأعضاء',
    accreditation: 'Both'
  }
];

interface TrustBadge {
  icon: React.ReactNode;
  value: string;
  valueAr: string;
  label: string;
  labelAr: string;
  color: string;
}

const trustBadges: TrustBadge[] = [
  {
    icon: <Users className="h-6 w-6" />,
    value: '25+',
    valueAr: '٢٥+',
    label: 'Partner Hospitals',
    labelAr: 'مستشفيات شريكة',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: <Award className="h-6 w-6" />,
    value: '20+',
    valueAr: '٢٠+',
    label: 'JCI Accredited',
    labelAr: 'معتمد من JCI',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: <Shield className="h-6 w-6" />,
    value: '30+',
    valueAr: '٣٠+',
    label: 'NABH Certified',
    labelAr: 'معتمد من NABH',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: <CheckCircle2 className="h-6 w-6" />,
    value: '95%+',
    valueAr: '٩٥٪+',
    label: 'Success Rate',
    labelAr: 'معدل النجاح',
    color: 'from-orange-500 to-orange-600'
  }
];

interface HospitalLogosProps {
  locale?: string;
  showStats?: boolean;
}

export function HospitalLogos({ locale = 'en', showStats = true }: HospitalLogosProps) {
  const isArabic = locale === 'ar';

  return (
    <section className="bg-white py-16">
      <div className="container px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700">
            <Shield className="mr-2 h-4 w-4" />
            {isArabic ? 'شركاؤنا الطبيون' : 'Our Medical Partners'}
          </div>
          <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            {isArabic
              ? 'نتعاون مع أفضل المستشفيات في الهند'
              : 'We Partner with India\'s Best Hospitals'}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            {isArabic
              ? 'جميع شركائنا معتمدون من JCI/NABH مع معدل نجاح 95%+ ورعاية من الطراز العالمي'
              : 'All our partners are JCI/NABH accredited with 95%+ success rates and world-class care'}
          </p>
        </div>

        {/* Trust Badges */}
        {showStats && (
          <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustBadges.map((badge, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-primary-500 hover:shadow-lg"
              >
                <div className="flex flex-col items-center p-6 text-center">
                  <div className={`mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${badge.color} text-white shadow-lg`}>
                    {badge.icon}
                  </div>
                  <div className="mb-1 text-3xl font-bold text-gray-900">
                    {isArabic ? badge.valueAr : badge.value}
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    {isArabic ? badge.labelAr : badge.label}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Hospital Partner Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hospitalPartners.map((hospital, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-primary-500 hover:shadow-xl"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.05}s backwards`
              }}
            >
              <div className="p-6">
                {/* Accreditation Badges */}
                <div className="mb-4 flex gap-2">
                  {(hospital.accreditation === 'JCI' || hospital.accreditation === 'Both') && (
                    <div className="rounded bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                      JCI
                    </div>
                  )}
                  {(hospital.accreditation === 'NABH' || hospital.accreditation === 'Both') && (
                    <div className="rounded bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">
                      NABH
                    </div>
                  )}
                </div>

                {/* Hospital Name */}
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {isArabic ? hospital.nameAr : hospital.name}
                </h3>

                {/* City */}
                <div className="mb-2 flex items-center text-sm text-gray-600">
                  <svg
                    className="mr-1.5 h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {isArabic ? hospital.cityAr : hospital.city}
                </div>

                {/* Specialization */}
                <div className="mb-4 flex items-center text-sm text-gray-600">
                  <svg
                    className="mr-1.5 h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  {isArabic ? hospital.specializationAr : hospital.specialization}
                </div>

                {/* Learn More Link */}
                <a
                  href="/hospitals"
                  className="inline-flex items-center text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
                >
                  {isArabic ? 'اعرف المزيد' : 'Learn More'}
                  <svg
                    className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${isArabic ? 'mr-1 rotate-180' : 'ml-1'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>

              {/* Hover effect gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-accent-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-5" />
            </Card>
          ))}
        </div>

        {/* View All Hospitals CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/hospitals"
            className="inline-flex items-center justify-center rounded-lg border-2 border-primary-600 px-8 py-3 font-semibold text-primary-600 transition-all hover:bg-primary-50"
          >
            {isArabic ? 'عرض جميع المستشفيات الشريكة' : 'View All Partner Hospitals'}
            <svg
              className={`h-5 w-5 ${isArabic ? 'mr-2 rotate-180' : 'ml-2'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

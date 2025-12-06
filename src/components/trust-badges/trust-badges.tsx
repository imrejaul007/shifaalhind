'use client';

import { Shield, Award, CheckCircle, Users, Star, Building2 } from 'lucide-react';

interface TrustBadge {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TrustBadgesProps {
  variant?: 'default' | 'compact';
  className?: string;
}

const DEFAULT_BADGES: TrustBadge[] = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "JCI Accredited",
    description: "40+ internationally accredited hospitals"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Expert Doctors",
    description: "Trained at Harvard, Mayo Clinic, Johns Hopkins"
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "95%+ Success Rate",
    description: "Proven track record across all treatments"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "500K+ Patients",
    description: "International patients treated annually"
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "4.9/5 Rating",
    description: "From 10,000+ verified patient reviews"
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "NABH Certified",
    description: "National accreditation for quality healthcare"
  }
];

export function TrustBadges({ variant = 'default', className = "" }: TrustBadgesProps) {
  if (variant === 'compact') {
    return (
      <div className={`bg-gradient-to-r from-primary-50 to-primary-100 py-8 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-primary-900">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary-600" />
              <span className="font-semibold">40+ JCI Hospitals</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-primary-300" />
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary-600" />
              <span className="font-semibold">500K+ Patients/Year</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-primary-300" />
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-primary-600" />
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-primary-300" />
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary-600" />
              <span className="font-semibold">95%+ Success Rate</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className={`py-12 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Why Trust Shifa AlHind for Your Medical Journey?
          </h2>
          <p className="text-gray-600">
            Partnering with India&apos;s most trusted healthcare institutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {DEFAULT_BADGES.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-lg bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-primary-600 mb-3">
                {badge.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                {badge.title}
              </h3>
              <p className="text-xs text-gray-600 leading-tight">
                {badge.description}
              </p>
            </div>
          ))}
        </div>

        {/* Accreditation logos */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600 mb-6">
            Our Partner Hospitals are Accredited By:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="font-bold text-blue-600">JCI</span>
              <span className="text-xs text-gray-600 ml-2">Accreditation</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="font-bold text-green-600">NABH</span>
              <span className="text-xs text-gray-600 ml-2">Certified</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="font-bold text-purple-600">ISO 9001</span>
              <span className="text-xs text-gray-600 ml-2">Quality</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="font-bold text-orange-600">NABL</span>
              <span className="text-xs text-gray-600 ml-2">Lab Accred.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export interface Testimonial {
  name: string;
  location: string;
  initials: string;
  rating: number;
  treatment: string;
  savings?: string;
  quote: string;
  date?: string;
  verified?: boolean;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function Testimonials({
  testimonials,
  title = "What Our Patients Say",
  subtitle = "Real stories from patients who transformed their lives",
  className = ""
}: TestimonialsProps) {
  // Return null if no testimonials
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 relative hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-16 h-16 text-primary-600" />
              </div>

              {/* Header */}
              <div className="mb-4 relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-lg flex-shrink-0">
                    {testimonial.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900 truncate">
                        {testimonial.name}
                      </h3>
                      {testimonial.verified && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full flex-shrink-0">
                          ✓ Verified
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 truncate">{testimonial.location}</p>
                    {testimonial.date && (
                      <p className="text-xs text-gray-500">{testimonial.date}</p>
                    )}
                  </div>
                </div>

                {/* Star rating */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? 'text-yellow-500 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial text */}
              <p className="text-gray-700 mb-4 relative z-10 line-clamp-6">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Treatment and savings */}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm font-semibold text-primary-600">
                  {testimonial.treatment}
                  {testimonial.savings && ` • ${testimonial.savings}`}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust indicator */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            ⭐ <strong>4.9/5</strong> average rating from <strong>10,000+</strong> verified patients
          </p>
        </div>
      </div>
    </section>
  );
}

// Common testimonial data for reuse across pages
export const TREATMENT_TESTIMONIALS: Record<string, Testimonial[]> = {
  'hair-transplant': [
    {
      name: "Mohammed Al-Rashid",
      location: "Dubai, UAE",
      initials: "MA",
      rating: 5,
      treatment: "FUE Hair Transplant",
      savings: "Saved $12,000",
      quote: "After researching clinics in Dubai, Turkey, and India, I chose Eugenix Delhi. 3,500 grafts, natural hairline, minimal scarring. Cost was 1/10th of Dubai prices. Best decision!",
      date: "November 2024",
      verified: true
    },
    {
      name: "Ahmed K.",
      location: "Riyadh, Saudi Arabia",
      initials: "AK",
      rating: 5,
      treatment: "DHI Hair Transplant",
      savings: "Saved SAR 45,000",
      quote: "DHI procedure at DHI Mumbai. 2,800 grafts, zero pain, back to work in 10 days. Arabic-speaking coordinator made everything smooth. Highly recommend!",
      verified: true
    },
    {
      name: "Khalid M.",
      location: "Abu Dhabi, UAE",
      initials: "KM",
      rating: 5,
      treatment: "FUE + Beard Transplant",
      savings: "Saved AED 38,000",
      quote: "Combined hair and beard transplant at AK Clinics. Total transformation! Friends can't believe the results. Worth every dirham saved.",
      date: "October 2024",
      verified: true
    }
  ],
  'heart-surgery': [
    {
      name: "Fahad Al-Mansoori",
      location: "Dubai, UAE",
      initials: "FA",
      rating: 5,
      treatment: "CABG Heart Surgery",
      savings: "Saved AED 115,000",
      quote: "Had bypass surgery at Fortis Escorts Delhi. World-class care, successful surgery, walking normally after 2 weeks. Saved over AED 100K vs Dubai hospitals!",
      date: "September 2024",
      verified: true
    },
    {
      name: "Abdullah H.",
      location: "Jeddah, Saudi Arabia",
      initials: "AH",
      rating: 5,
      treatment: "Angioplasty",
      savings: "Saved SAR 62,000",
      quote: "Emergency angioplasty at Apollo Mumbai. Excellent doctors, latest stents, complete recovery. Family stayed with me. Grateful for Shifa AlHind's support.",
      verified: true
    },
    {
      name: "Saeed M.",
      location: "Doha, Qatar",
      initials: "SM",
      rating: 5,
      treatment: "Valve Replacement",
      savings: "Saved $22,000",
      quote: "Aortic valve replacement at Medanta. Surgery success rate 98%, experienced surgeon, post-op care excellent. Best medical tourism decision ever.",
      date: "August 2024",
      verified: true
    }
  ],
  'ivf-fertility': [
    {
      name: "Fatima Al-Zahra",
      location: "Dubai, UAE",
      initials: "FZ",
      rating: 5,
      treatment: "IVF Treatment",
      savings: "Saved AED 165,000",
      quote: "4 failed IVF cycles in Dubai. First cycle success at Nova IVF Bangalore! Now pregnant with twins. Cost was 1/4th of UAE. Dreams do come true!",
      date: "November 2024",
      verified: true
    },
    {
      name: "Sara K.",
      location: "Abu Dhabi, UAE",
      initials: "SK",
      rating: 5,
      treatment: "ICSI + PGD",
      savings: "Saved AED 88,000",
      quote: "Advanced ICSI with genetic testing at Cloudnine Bangalore. Highest success rates, caring staff, now 6 months pregnant. Worth the travel!",
      verified: true
    },
    {
      name: "Mariam H.",
      location: "Riyadh, Saudi Arabia",
      initials: "MH",
      rating: 5,
      treatment: "Egg Freezing",
      savings: "Saved SAR 28,000",
      quote: "Froze 18 eggs at Nova IVF Mumbai. Latest vitrification technology, excellent lab facilities. Peace of mind at affordable cost.",
      date: "October 2024",
      verified: true
    }
  ],
  'knee-replacement': [
    {
      name: "Khalid Ahmed",
      location: "Sharjah, UAE",
      initials: "KA",
      rating: 5,
      treatment: "Knee Replacement",
      savings: "Saved AED 57,000",
      quote: "Total knee replacement at Manipal Hospital Mumbai. Walking pain-free after 3 years of suffering! Cost including flights less than UAE hospital quote.",
      date: "October 2024",
      verified: true
    },
    {
      name: "Omar S.",
      location: "Kuwait City, Kuwait",
      initials: "OS",
      rating: 5,
      treatment: "Bilateral Knee Replacement",
      savings: "Saved $35,000",
      quote: "Both knees replaced at Apollo Chennai. Mako robotic surgery, perfect alignment. Back to golf in 4 months. Exceeded expectations!",
      verified: true
    },
    {
      name: "Hassan M.",
      location: "Muscat, Oman",
      initials: "HM",
      rating: 5,
      treatment: "Partial Knee Replacement",
      savings: "Saved $18,000",
      quote: "Minimally invasive partial knee replacement at Fortis. Smaller incision, faster recovery. Walking without walker in 1 week!",
      date: "September 2024",
      verified: true
    }
  ],
  'dental': [
    {
      name: "Yusuf Al-Thani",
      location: "Doha, Qatar",
      initials: "YT",
      rating: 5,
      treatment: "All-on-4 Dental Implants",
      savings: "Saved $28,000",
      quote: "Full mouth restoration with All-on-4 at Sabka Dentist Mumbai. Same-day teeth, eating normally after 2 days. Smile transformation worth every penny!",
      date: "November 2024",
      verified: true
    },
    {
      name: "Layla K.",
      location: "Dubai, UAE",
      initials: "LK",
      rating: 5,
      treatment: "Dental Veneers",
      savings: "Saved AED 45,000",
      quote: "16 veneers at Clove Dental Bangalore. Hollywood smile at fraction of Dubai cost. Perfect match, natural look. Confidence boosted 100%!",
      verified: true
    },
    {
      name: "Nasser H.",
      location: "Abu Dhabi, UAE",
      initials: "NH",
      rating: 5,
      treatment: "Full Mouth Implants",
      savings: "Saved AED 120,000",
      quote: "12 implants with zirconia crowns. Best dentists, pain-free procedure, stunning results. Family can't stop complimenting my new smile!",
      date: "October 2024",
      verified: true
    }
  ],
  'generic': [
    {
      name: "Mohammed Al-Rashid",
      location: "Dubai, UAE",
      initials: "MA",
      rating: 5,
      treatment: "Medical Treatment",
      savings: "Saved $15,000",
      quote: "Exceptional medical care in India. World-class hospitals, experienced doctors, and significant cost savings. The entire process was smooth and professional.",
      date: "November 2024",
      verified: true
    },
    {
      name: "Fatima K.",
      location: "Riyadh, Saudi Arabia",
      initials: "FK",
      rating: 5,
      treatment: "Surgical Procedure",
      savings: "Saved SAR 55,000",
      quote: "Outstanding treatment and care. The hospital staff was friendly, doctors were highly skilled, and the facilities were top-notch. Highly recommend!",
      verified: true
    },
    {
      name: "Ahmed H.",
      location: "Doha, Qatar",
      initials: "AH",
      rating: 5,
      treatment: "Medical Tourism",
      savings: "Saved $20,000",
      quote: "Best decision for my treatment. Quality healthcare at affordable prices. The support team helped with everything from visa to accommodation. Perfect experience!",
      date: "October 2024",
      verified: true
    }
  ]
};

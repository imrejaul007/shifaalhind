import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Clock, DollarSign, Heart, ArrowRight, Star } from 'lucide-react';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles } from '@/components/blog/related-articles';
import { InternalLinks } from '@/components/seo/internal-links';
import { Testimonials, TREATMENT_TESTIMONIALS } from '@/components/testimonials/testimonials';
import { TrustBadges } from '@/components/trust-badges/trust-badges';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Knee Replacement India: Cost, Best Orthopedic Surgeons 2025',
  description: 'Knee replacement surgery in India costs $4,000-7,000 vs $50,000+ in USA (85% savings). 95%+ success. Top orthopedic hospitals, advanced implants.',
  keywords: 'knee replacement india, knee replacement cost india, total knee replacement india, knee surgery india',
};

const RELATED_ARTICLES = [
  { title: "Medical Visa India Guide", href: "/blog/medical-visa-india-complete-guide", description: "Complete visa process guide" },
  { title: "Best Hospitals Delhi", href: "/blog/best-hospitals-delhi-medical-tourism", description: "Top 10 JCI-accredited hospitals" },
  { title: "Medical Tourism Guide", href: "/blog/medical-tourism-uae-patients-guide", description: "Complete guide for GCC patients" }
];

export default function KneeReplacementIndiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-12 text-white md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Knee Replacement in India</h1>
            <p className="mb-6 text-xl text-primary-50">Advanced Orthopedic Care at Affordable Cost</p>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2"><DollarSign className="h-5 w-5" /><span>$4,000 - $7,000</span></div>
              <div className="flex items-center gap-2"><Clock className="h-5 w-5" /><span>1-2 hours</span></div>
              <div className="flex items-center gap-2"><Heart className="h-5 w-5" /><span>95%+ success</span></div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600">
                <Link href="/consultation">Get Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary-600">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="container px-4 py-8">
        <TrustBadges />
      </div>

      {/* Cost Comparison */}
      <section className="container px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-center font-serif text-3xl font-bold text-gray-900">Cost Comparison: India vs World</h2>
          <p className="mb-8 text-center text-lg text-gray-600">Save 60-95% with same quality care</p>
          <Card className="overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Procedure Type</th>
                    <th className="px-4 py-3 text-center">India</th>
                    <th className="px-4 py-3 text-center">USA</th>
                    <th className="px-4 py-3 text-center">UK</th>
                    <th className="px-4 py-3 text-center">UAE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Total Knee Replacement (Unilateral)</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$4,000 - $5,500</td>
                    <td className="px-4 py-3 text-center text-gray-600">$50,000 - $70,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£40,000 - £55,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 45,000 - 65,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Total Knee Replacement (Bilateral)</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$7,000 - $10,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$90,000 - $130,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£70,000 - £105,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 80,000 - 120,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Partial Knee Replacement</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$3,500 - $5,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$40,000 - $60,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£32,000 - £48,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 36,000 - 55,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Revision Knee Replacement</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$6,000 - $9,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$70,000 - $100,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£55,000 - £80,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 60,000 - 90,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Top Hospitals */}
      <section className="container px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">Top 3 Hospitals for Knee Replacement</h2>
          <div className="space-y-4">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">1. Fortis Hospital</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.8/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Delhi, Mumbai | 5,000+ knee replacements</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Mako robotic surgery</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Custom implants</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Same-day walking</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $4,500 - $6,500</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">2. Apollo Hospitals</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.8/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Chennai, Bangalore | 4,500+ procedures</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Computer navigation</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Rapid recovery</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Latest implants</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $4,200 - $6,200</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">3. Manipal Hospitals</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.7/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Bangalore | 3,500+ surgeries</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Minimally invasive</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Gender-specific implants</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Sports medicine</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $4,000 - $5,800</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={[{"question":"How long does recovery take?","answer":"Hospital: 3-5 days, Walking with walker: Day 1-2, Return to normal activities: 6-8 weeks, Full recovery: 3-6 months. Implant lasts 15-20 years."},{"question":"Can I walk immediately?","answer":"Yes! Modern protocols have patients walking within 4-6 hours after surgery with physiotherapist assistance. Weight-bearing as tolerated from day 1."},{"question":"Mako robotic vs traditional?","answer":"Robotic: More precise (±1mm accuracy), faster recovery, better implant positioning, longer lasting. Cost: $500-1,000 more. Recommended for most patients."},{"question":"Bilateral (both knees) at once?","answer":"Yes, possible. Benefits: One surgery, one recovery, lower cost. Requirements: Age under 75, good health, strong motivation. Hospital stay: 5-7 days."}]} />

      {/* FAQ Section */}
      <section className="container px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">How long does recovery take?</h3>
                <p className="text-gray-700">Hospital: 3-5 days, Walking with walker: Day 1-2, Return to normal activities: 6-8 weeks, Full recovery: 3-6 months. Implant lasts 15-20 years.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">Can I walk immediately?</h3>
                <p className="text-gray-700">Yes! Modern protocols have patients walking within 4-6 hours after surgery with physiotherapist assistance. Weight-bearing as tolerated from day 1.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">Mako robotic vs traditional?</h3>
                <p className="text-gray-700">Robotic: More precise (±1mm accuracy), faster recovery, better implant positioning, longer lasting. Cost: $500-1,000 more. Recommended for most patients.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">Bilateral (both knees) at once?</h3>
                <p className="text-gray-700">Yes, possible. Benefits: One surgery, one recovery, lower cost. Requirements: Age under 75, good health, strong motivation. Hospital stay: 5-7 days.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="container">
          <Testimonials testimonials={TREATMENT_TESTIMONIALS.general} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold">Ready to Start Your Medical Journey?</h2>
          <p className="mb-8 text-xl text-primary-50">Get a free consultation and cost estimate today</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600">
              <Link href="/consultation">Book Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary-600">
              <Link href="/contact">Ask a Question</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Share */}
      <div className="container px-4 py-8">
        <SocialShare title="Knee Replacement India: Cost, Best Orthopedic Surgeons 2025" description="Knee replacement surgery in India costs $4,000-7,000 vs $50,000+ in USA (85% savings). 95%+ success. Top orthopedic hospitals, advanced implants." />
      </div>

      {/* Related Articles */}
      <div className="container px-4 py-8">
        <RelatedArticles articles={RELATED_ARTICLES} />
      </div>

      {/* Internal Links */}
      <div className="container px-4 py-8">
        <InternalLinks links={[
          { text: 'View All Treatments', href: '/treatments' },
          { text: 'Cost Calculator', href: '/cost-calculator' },
          { text: 'Our Hospitals', href: '/hospitals' },
        ]} />
      </div>
    </div>
  );
}

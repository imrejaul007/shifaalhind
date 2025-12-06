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
  title: 'Kidney Transplant India: Cost, Best Hospitals & Nephrologists 2025',
  description: 'Kidney transplant in India costs $13,000-18,000 vs $400,000+ in USA (95% savings). 95-98% 1-year success. Top renal transplant centers with 400+ procedures annually.',
  keywords: 'kidney transplant india, kidney transplant cost india, renal transplant india, best hospital kidney transplant',
};

const RELATED_ARTICLES = [
  { title: "Medical Visa India Guide", href: "/blog/medical-visa-india-complete-guide", description: "Complete visa process guide" },
  { title: "Best Hospitals Delhi", href: "/blog/best-hospitals-delhi-medical-tourism", description: "Top 10 JCI-accredited hospitals" },
  { title: "Medical Tourism Guide", href: "/blog/medical-tourism-uae-patients-guide", description: "Complete guide for GCC patients" }
];

export default function KidneyTransplantIndiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-12 text-white md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Kidney Transplant in India</h1>
            <p className="mb-6 text-xl text-primary-50">Expert Renal Care at 95% Savings</p>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2"><DollarSign className="h-5 w-5" /><span>$13,000 - $18,000</span></div>
              <div className="flex items-center gap-2"><Clock className="h-5 w-5" /><span>3-5 hours</span></div>
              <div className="flex items-center gap-2"><Heart className="h-5 w-5" /><span>95-98% 1-year success</span></div>
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
                    <td className="px-4 py-3 font-medium">Living Donor Kidney Transplant</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$13,000 - $16,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$400,000 - $500,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£320,000 - £400,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 350,000 - 450,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Deceased Donor Kidney Transplant</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$15,000 - $20,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$450,000 - $550,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£360,000 - £440,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 400,000 - 500,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Pediatric Kidney Transplant</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$14,000 - $18,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$420,000 - $530,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£335,000 - £425,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 375,000 - 475,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">ABO Incompatible Transplant</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$18,000 - $25,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$500,000 - $650,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£400,000 - £520,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 450,000 - 600,000</td>
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
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">Top 3 Hospitals for Kidney Transplant</h2>
          <div className="space-y-4">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">1. Apollo Hospitals</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.9/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Chennai, Delhi | 400+ kidney transplants</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">95-98% success</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">ABO incompatible</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Paired exchange</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $14,000 - $18,000</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">2. Medanta The Medicity</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.8/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Gurgaon | 350+ transplants</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Robotic surgery</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Living donor</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">24/7 dialysis</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $13,500 - $17,500</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">3. Fortis Hospital</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.8/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Delhi, Mumbai | 300+ procedures</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Laparoscopic donor</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Pediatric program</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Desensitization</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $13,000 - $17,000</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={[{"question":"What is success rate?","answer":"1-year graft survival: 95-98% (living donor), 90-95% (deceased donor). 5-year survival: 85-90%. Patient survival: 95%+ at 5 years."},{"question":"How long is recovery?","answer":"Hospital: 7-10 days, ICU: 2-3 days, Return to work: 6-8 weeks, Full recovery: 3-6 months. Immunosuppressive medications lifelong. Dialysis stopped immediately after transplant."},{"question":"Can family member donate?","answer":"Yes, if blood type compatible (or ABO incompatible with cross-match), age 18-65, healthy kidney function, no diabetes/hypertension. Donor evaluation: 1 week. Living donor preferred (better outcomes)."},{"question":"How long to stay in India?","answer":"4-6 weeks total. Pre-transplant tests: 3-7 days, Surgery & hospital: 7-10 days, Post-discharge monitoring: 2-3 weeks. Some stay 2-3 months for complete recovery."}]} />

      {/* FAQ Section */}
      <section className="container px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">What is success rate?</h3>
                <p className="text-gray-700">1-year graft survival: 95-98% (living donor), 90-95% (deceased donor). 5-year survival: 85-90%. Patient survival: 95%+ at 5 years.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">How long is recovery?</h3>
                <p className="text-gray-700">Hospital: 7-10 days, ICU: 2-3 days, Return to work: 6-8 weeks, Full recovery: 3-6 months. Immunosuppressive medications lifelong. Dialysis stopped immediately after transplant.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">Can family member donate?</h3>
                <p className="text-gray-700">Yes, if blood type compatible (or ABO incompatible with cross-match), age 18-65, healthy kidney function, no diabetes/hypertension. Donor evaluation: 1 week. Living donor preferred (better outcomes).</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">How long to stay in India?</h3>
                <p className="text-gray-700">4-6 weeks total. Pre-transplant tests: 3-7 days, Surgery & hospital: 7-10 days, Post-discharge monitoring: 2-3 weeks. Some stay 2-3 months for complete recovery.</p>
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
        <SocialShare title="Kidney Transplant India: Cost, Best Hospitals & Nephrologists 2025" description="Kidney transplant in India costs $13,000-18,000 vs $400,000+ in USA (95% savings). 95-98% 1-year success. Top renal transplant centers with 400+ procedures annually." />
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

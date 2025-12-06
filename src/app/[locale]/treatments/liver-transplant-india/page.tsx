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
  title: 'Liver Transplant India: Cost, Best Hospitals & Surgeons 2025',
  description: 'Liver transplant in India costs $50,000-70,000 vs $500,000+ in USA (85-90% savings). 90%+ success rate. Top transplant centers with 300+ procedures annually.',
  keywords: 'liver transplant india, liver transplant cost india, best hospital liver transplant india',
};

const RELATED_ARTICLES = [
  { title: "Medical Visa India Guide", href: "/blog/medical-visa-india-complete-guide", description: "Complete visa process guide" },
  { title: "Best Hospitals Delhi", href: "/blog/best-hospitals-delhi-medical-tourism", description: "Top 10 JCI-accredited hospitals" },
  { title: "Medical Tourism Guide", href: "/blog/medical-tourism-uae-patients-guide", description: "Complete guide for GCC patients" }
];

export default function LiverTransplantIndiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-12 text-white md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Liver Transplant in India</h1>
            <p className="mb-6 text-xl text-primary-50">Life-Saving Procedure at 85% Lower Cost</p>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2"><DollarSign className="h-5 w-5" /><span>$50,000 - $70,000</span></div>
              <div className="flex items-center gap-2"><Clock className="h-5 w-5" /><span>8-12 hours</span></div>
              <div className="flex items-center gap-2"><Heart className="h-5 w-5" /><span>90%+ 1-year success</span></div>
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
                    <td className="px-4 py-3 font-medium">Living Donor Liver Transplant</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$50,000 - $65,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$450,000 - $550,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£350,000 - £450,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 400,000 - 500,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Deceased Donor Liver Transplant</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$55,000 - $75,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$500,000 - $650,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£400,000 - £520,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 450,000 - 600,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Pediatric Liver Transplant</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$55,000 - $80,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$550,000 - $750,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£450,000 - £600,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 500,000 - 700,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Split Liver Transplant</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$60,000 - $85,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$600,000 - $800,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£480,000 - £640,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 550,000 - 750,000</td>
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
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">Top 3 Hospitals for Liver Transplant</h2>
          <div className="space-y-4">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">1. Global Health City</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.9/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Chennai | 300+ liver transplants annually</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Dr. Mohamed Rela</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">95% 1-year survival</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">ILTS accredited</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $55,000 - $75,000</p>
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
                    <p className="mb-3 text-gray-600">Chennai, Delhi | 250+ transplants</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Multi-organ transplant</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Living & deceased donor</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">24/7 Liver ICU</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $52,000 - $72,000</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">3. Medanta The Medicity</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.8/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Gurgaon | 200+ procedures</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Pediatric transplant</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">ABO incompatible</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">MELD score management</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $50,000 - $70,000</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={[{"question":"How long is recovery after liver transplant?","answer":"Hospital stay: 14-21 days, ICU: 5-7 days, Return to light activities: 6-8 weeks, Return to work: 3-4 months, Full recovery: 6-12 months."},{"question":"What is the success rate?","answer":"1-year survival: 90-95%, 5-year survival: 75-85%. Top centers achieve 95%+ success rates."},{"question":"Can I be a living donor?","answer":"Yes, if age 18-55, blood type compatible, healthy liver function, BMI under 30. Donor evaluation takes 1-2 weeks."},{"question":"How long to stay in India?","answer":"Total stay: 6-8 weeks minimum. Pre-transplant: 1 week, Surgery & hospital: 2-3 weeks, Post-discharge: 2-4 weeks."}]} />

      {/* FAQ Section */}
      <section className="container px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">How long is recovery after liver transplant?</h3>
                <p className="text-gray-700">Hospital stay: 14-21 days, ICU: 5-7 days, Return to light activities: 6-8 weeks, Return to work: 3-4 months, Full recovery: 6-12 months.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">What is the success rate?</h3>
                <p className="text-gray-700">1-year survival: 90-95%, 5-year survival: 75-85%. Top centers achieve 95%+ success rates.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">Can I be a living donor?</h3>
                <p className="text-gray-700">Yes, if age 18-55, blood type compatible, healthy liver function, BMI under 30. Donor evaluation takes 1-2 weeks.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">How long to stay in India?</h3>
                <p className="text-gray-700">Total stay: 6-8 weeks minimum. Pre-transplant: 1 week, Surgery & hospital: 2-3 weeks, Post-discharge: 2-4 weeks.</p>
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
        <SocialShare title="Liver Transplant India: Cost, Best Hospitals & Surgeons 2025" description="Liver transplant in India costs $50,000-70,000 vs $500,000+ in USA (85-90% savings). 90%+ success rate. Top transplant centers with 300+ procedures annually." />
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

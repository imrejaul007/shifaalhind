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
  title: 'Diabetes Treatment India: Comprehensive Diabetic Care 2025',
  description: 'Comprehensive diabetes management in India. Expert endocrinologists, latest medications, bariatric surgery for Type 2 diabetes. Affordable insulin, continuous glucose monitors.',
  keywords: 'diabetes treatment india, diabetes care india, diabetic treatment cost india, diabetes management india',
};

const RELATED_ARTICLES = [
  { title: "Medical Visa India Guide", href: "/blog/medical-visa-india-complete-guide", description: "Complete visa process guide" },
  { title: "Best Hospitals Delhi", href: "/blog/best-hospitals-delhi-medical-tourism", description: "Top 10 JCI-accredited hospitals" },
  { title: "Medical Tourism Guide", href: "/blog/medical-tourism-uae-patients-guide", description: "Complete guide for GCC patients" }
];

export default function DiabetesTreatmentIndiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-12 text-white md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Comprehensive Diabetes Treatment in India</h1>
            <p className="mb-6 text-xl text-primary-50">Expert Care for Type 1 & Type 2 Diabetes</p>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2"><DollarSign className="h-5 w-5" /><span>$500 - $5,000</span></div>
              <div className="flex items-center gap-2"><Clock className="h-5 w-5" /><span>Ongoing</span></div>
              <div className="flex items-center gap-2"><Heart className="h-5 w-5" /><span>85%+ controlled success</span></div>
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
                    <td className="px-4 py-3 font-medium">Diabetes Consultation & Management (3 months)</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$500 - $1,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$3,000 - $6,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£2,400 - £4,800</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 3,300 - 6,600</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Bariatric Surgery for Diabetes</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$5,000 - $8,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$20,000 - $30,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£16,000 - £24,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 22,000 - 33,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Continuous Glucose Monitor (CGM)</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$200 - $400/month</td>
                    <td className="px-4 py-3 text-center text-gray-600">$1,000 - $2,000/month</td>
                    <td className="px-4 py-3 text-center text-gray-600">£800 - £1,600/month</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 1,100 - 2,200/month</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Insulin Pump Therapy</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$2,500 - $4,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$6,000 - $10,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£4,800 - £8,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 6,600 - 11,000</td>
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
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">Top 3 Hospitals for Diabetes Treatment</h2>
          <div className="space-y-4">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">1. Apollo Sugar Clinics</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.8/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Pan-India | Diabetes specialists</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">85% reversal (Type 2)</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">CGM available</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Lifestyle coaching</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $600 - $1,200</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">2. Fortis C-DOC</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.7/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Delhi, Mumbai | Diabetes & Obesity Center</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Bariatric surgery</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Medication management</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Foot care</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $550 - $1,150</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">3. Medanta Endocrinology</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.7/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Gurgaon | Comprehensive diabetes care</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Type 1 & 2 specialists</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Insulin pump training</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Complication management</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $500 - $1,100</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={[{"question":"Can Type 2 diabetes be reversed?","answer":"85% reversal possible with bariatric surgery (BMI >35), 50-70% with intensive lifestyle intervention (diet, exercise, weight loss). Requires losing 10-15% body weight, maintaining for 2+ years. Remission possible!"},{"question":"How much does diabetes medication cost?","answer":"Insulin: $50-150/month vs $300-600 USA, Metformin: $5-15/month, SGLT2i: $30-60/month, GLP-1: $80-150/month. 60-75% cheaper than USA. Generic options available."},{"question":"What services are included?","answer":"Endocrinologist consultation, HbA1c & blood sugar tests, Kidney/eye screening, Medication adjustment, Diet counseling, Exercise planning, Complication monitoring, 24/7 helpline."},{"question":"How long is treatment program?","answer":"Initial assessment: 2-3 days, 3-month intensive program recommended, 6-12 months for reversal, Lifelong monitoring. Bariatric surgery patients: 1 week hospital + 3-4 week recovery. Telemedicine follow-up available."}]} />

      {/* FAQ Section */}
      <section className="container px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">Can Type 2 diabetes be reversed?</h3>
                <p className="text-gray-700">85% reversal possible with bariatric surgery (BMI &gt;35), 50-70% with intensive lifestyle intervention (diet, exercise, weight loss). Requires losing 10-15% body weight, maintaining for 2+ years. Remission possible!</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">How much does diabetes medication cost?</h3>
                <p className="text-gray-700">Insulin: $50-150/month vs $300-600 USA, Metformin: $5-15/month, SGLT2i: $30-60/month, GLP-1: $80-150/month. 60-75% cheaper than USA. Generic options available.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">What services are included?</h3>
                <p className="text-gray-700">Endocrinologist consultation, HbA1c & blood sugar tests, Kidney/eye screening, Medication adjustment, Diet counseling, Exercise planning, Complication monitoring, 24/7 helpline.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">How long is treatment program?</h3>
                <p className="text-gray-700">Initial assessment: 2-3 days, 3-month intensive program recommended, 6-12 months for reversal, Lifelong monitoring. Bariatric surgery patients: 1 week hospital + 3-4 week recovery. Telemedicine follow-up available.</p>
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
        <SocialShare title="Diabetes Treatment India: Comprehensive Diabetic Care 2025" description="Comprehensive diabetes management in India. Expert endocrinologists, latest medications, bariatric surgery for Type 2 diabetes. Affordable insulin, continuous glucose monitors." />
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

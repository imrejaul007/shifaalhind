import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, DollarSign, Heart, Star } from 'lucide-react';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles } from '@/components/blog/related-articles';
import { InternalLinks } from '@/components/seo/internal-links';
import { Testimonials, TREATMENT_TESTIMONIALS } from '@/components/testimonials/testimonials';
import { TrustBadges } from '@/components/trust-badges/trust-badges';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Cancer Treatment India: Comprehensive Oncology Care & Cost 2025',
  description: 'Cancer treatment in India costs 60-80% less than USA. World-class oncology centers with latest radiation, chemotherapy, immunotherapy. 70-90% success for early-stage cancers.',
  keywords: 'cancer treatment india, oncology india, cancer hospital india, cancer treatment cost india',
};

const RELATED_ARTICLES = [
  { title: "Medical Visa India Guide", href: "/blog/medical-visa-india-complete-guide", description: "Complete visa process guide" },
  { title: "Best Hospitals Delhi", href: "/blog/best-hospitals-delhi-medical-tourism", description: "Top 10 JCI-accredited hospitals" },
  { title: "Medical Tourism Guide", href: "/blog/medical-tourism-uae-patients-guide", description: "Complete guide for GCC patients" }
];

export default function CancerTreatmentIndiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-12 text-white md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Comprehensive Cancer Treatment in India</h1>
            <p className="mb-6 text-xl text-primary-50">World-Class Oncology Care at Fraction of Cost</p>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2"><DollarSign className="h-5 w-5" /><span>$3,000 - $25,000</span></div>
              <div className="flex items-center gap-2"><Clock className="h-5 w-5" /><span>Varies</span></div>
              <div className="flex items-center gap-2"><Heart className="h-5 w-5" /><span>70-90% success</span></div>
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
                    <td className="px-4 py-3 font-medium">Chemotherapy (per cycle)</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$800 - $2,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$10,000 - $30,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£8,000 - £24,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 9,000 - 27,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Radiation Therapy (full course)</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$3,000 - $6,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$30,000 - $50,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£24,000 - £40,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 27,000 - 45,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Cancer Surgery</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$5,000 - $15,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$50,000 - $150,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£40,000 - £120,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 45,000 - 135,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Immunotherapy (per cycle)</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$2,500 - $5,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$25,000 - $50,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£20,000 - £40,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 22,500 - 45,000</td>
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
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">Top 3 Hospitals for Cancer Treatment (General)</h2>
          <div className="space-y-4">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">1. Tata Memorial Hospital</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.9/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Mumbai | 75,000+ cancer patients</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Government rates</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Research center</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">All cancer types</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $3,000 - $12,000</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">2. Apollo Cancer Centres</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.8/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Chennai, Delhi | 50,000+ patients</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">CyberKnife</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Proton therapy</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Immunotherapy</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $5,000 - $18,000</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">3. HCG Cancer Centre</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.8/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Bangalore | 40,000+ cases</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Robotic surgery</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Targeted therapy</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Genetic testing</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $4,500 - $16,000</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={[{"question":"What types of cancer are treated?","answer":"All cancers: Breast, lung, colon, prostate, stomach, liver, pancreatic, ovarian, cervical, brain, leukemia, lymphoma, melanoma. Specialized centers for each cancer type."},{"question":"What is success rate?","answer":"Varies by cancer stage. Early stage (I-II): 70-90% cure rate. Advanced stage (III-IV): 30-70% 5-year survival. Best outcomes for breast, prostate, colorectal when detected early."},{"question":"What treatments are available?","answer":"Surgery (robotic, minimally invasive), Chemotherapy (latest drugs), Radiation (IMRT, CyberKnife, Proton), Immunotherapy (checkpoint inhibitors), Targeted therapy, Hormonal therapy, Stem cell transplant."},{"question":"How long is treatment?","answer":"Depends on cancer type/stage. Surgery: 1-2 weeks, Chemotherapy: 3-6 months (6-8 cycles), Radiation: 5-7 weeks (25-35 sessions), Follow-up: 5-10 years. Some stay 2-6 months for full treatment."}]} />

      {/* FAQ Section */}
      <section className="container px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">What types of cancer are treated?</h3>
                <p className="text-gray-700">All cancers: Breast, lung, colon, prostate, stomach, liver, pancreatic, ovarian, cervical, brain, leukemia, lymphoma, melanoma. Specialized centers for each cancer type.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">What is success rate?</h3>
                <p className="text-gray-700">Varies by cancer stage. Early stage (I-II): 70-90% cure rate. Advanced stage (III-IV): 30-70% 5-year survival. Best outcomes for breast, prostate, colorectal when detected early.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">What treatments are available?</h3>
                <p className="text-gray-700">Surgery (robotic, minimally invasive), Chemotherapy (latest drugs), Radiation (IMRT, CyberKnife, Proton), Immunotherapy (checkpoint inhibitors), Targeted therapy, Hormonal therapy, Stem cell transplant.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">How long is treatment?</h3>
                <p className="text-gray-700">Depends on cancer type/stage. Surgery: 1-2 weeks, Chemotherapy: 3-6 months (6-8 cycles), Radiation: 5-7 weeks (25-35 sessions), Follow-up: 5-10 years. Some stay 2-6 months for full treatment.</p>
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
        <SocialShare title="Cancer Treatment India: Comprehensive Oncology Care & Cost 2025" description="Cancer treatment in India costs 60-80% less than USA. World-class oncology centers with latest radiation, chemotherapy, immunotherapy. 70-90% success for early-stage cancers." />
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

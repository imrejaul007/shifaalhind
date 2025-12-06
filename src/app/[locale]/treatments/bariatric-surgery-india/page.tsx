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
  title: 'Bariatric Surgery India: Weight Loss Surgery Cost 2025',
  description: 'Bariatric surgery in India costs $5,000-10,000 vs $20,000-30,000 in USA (70-80% savings). Gastric bypass, sleeve gastrectomy. 60-80% excess weight loss. 85% diabetes remission.',
  keywords: 'bariatric surgery india, weight loss surgery india, gastric bypass india, bariatric surgery cost india',
};

const RELATED_ARTICLES = [
  { title: "Medical Visa India Guide", href: "/blog/medical-visa-india-complete-guide", description: "Complete visa process guide" },
  { title: "Best Hospitals Delhi", href: "/blog/best-hospitals-delhi-medical-tourism", description: "Top 10 JCI-accredited hospitals" },
  { title: "Medical Tourism Guide", href: "/blog/medical-tourism-uae-patients-guide", description: "Complete guide for GCC patients" }
];

export default function BariatricSurgeryIndiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-12 text-white md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Bariatric / Weight Loss Surgery in India</h1>
            <p className="mb-6 text-xl text-primary-50">Achieve Healthy Weight & Reverse Diabetes</p>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2"><DollarSign className="h-5 w-5" /><span>$5,000 - $10,000</span></div>
              <div className="flex items-center gap-2"><Clock className="h-5 w-5" /><span>1-3 hours</span></div>
              <div className="flex items-center gap-2"><Heart className="h-5 w-5" /><span>85% diabetes remission success</span></div>
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
                    <td className="px-4 py-3 font-medium">Gastric Bypass (Roux-en-Y)</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$6,000 - $9,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$20,000 - $30,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£16,000 - £24,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 22,000 - 33,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Sleeve Gastrectomy</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$5,000 - $7,500</td>
                    <td className="px-4 py-3 text-center text-gray-600">$17,000 - $26,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£13,500 - £21,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 18,500 - 28,500</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Gastric Band (Lap-Band)</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$4,000 - $6,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$14,000 - $20,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£11,000 - £16,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 15,000 - 22,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Revision Bariatric Surgery</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$7,000 - $11,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$25,000 - $35,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£20,000 - £28,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 27,000 - 38,000</td>
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
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">Top 3 Hospitals for Bariatric / Weight Loss Surgery (General)</h2>
          <div className="space-y-4">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">1. Apollo Bariatric Surgery</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.8/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Chennai, Delhi | 5,000+ bariatric surgeries</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">85% diabetes remission</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Robotic surgery</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Lifelong support</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $5,500 - $8,500</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">2. Fortis Obesity Center</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.7/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Delhi, Mumbai | 4,000+ procedures</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Multidisciplinary team</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Nutritionist support</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">60-70% weight loss</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $5,200 - $8,200</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">3. Narayana Health Bariatric</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.7/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Bangalore | 3,500+ surgeries</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Affordable rates</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Experienced surgeons</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Psychology support</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $4,800 - $7,800</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={[{"question":"Am I eligible for bariatric surgery?","answer":"BMI ≥40 (or ≥35 with comorbidities like diabetes, hypertension, sleep apnea), Age 18-65, Failed diet/exercise for 6+ months, Committed to lifestyle change, No contraindications."},{"question":"How much weight will I lose?","answer":"Gastric bypass: 60-80% excess weight loss, Sleeve: 50-70%, Gastric band: 40-60%. Most weight loss in first 12-18 months. Maintenance requires lifelong commitment."},{"question":"Will my diabetes be cured?","answer":"85% Type 2 diabetes remission within weeks (before weight loss!). 70-80% hypertension resolution. Sleep apnea improves 80%+. Cholesterol normalizes. Life-changing for metabolic syndrome."},{"question":"What is recovery time?","answer":"Hospital: 2-3 days, Return to work: 2-4 weeks, Full recovery: 4-6 weeks. Liquid diet 2 weeks, pureed 2 weeks, soft food 2 weeks, then normal. Follow-up at 1, 3, 6, 12 months, then yearly."}]} />

      {/* FAQ Section */}
      <section className="container px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">Am I eligible for bariatric surgery?</h3>
                <p className="text-gray-700">BMI ≥40 (or ≥35 with comorbidities like diabetes, hypertension, sleep apnea), Age 18-65, Failed diet/exercise for 6+ months, Committed to lifestyle change, No contraindications.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">How much weight will I lose?</h3>
                <p className="text-gray-700">Gastric bypass: 60-80% excess weight loss, Sleeve: 50-70%, Gastric band: 40-60%. Most weight loss in first 12-18 months. Maintenance requires lifelong commitment.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">Will my diabetes be cured?</h3>
                <p className="text-gray-700">85% Type 2 diabetes remission within weeks (before weight loss!). 70-80% hypertension resolution. Sleep apnea improves 80%+. Cholesterol normalizes. Life-changing for metabolic syndrome.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">What is recovery time?</h3>
                <p className="text-gray-700">Hospital: 2-3 days, Return to work: 2-4 weeks, Full recovery: 4-6 weeks. Liquid diet 2 weeks, pureed 2 weeks, soft food 2 weeks, then normal. Follow-up at 1, 3, 6, 12 months, then yearly.</p>
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
        <SocialShare title="Bariatric Surgery India: Weight Loss Surgery Cost 2025" description="Bariatric surgery in India costs $5,000-10,000 vs $20,000-30,000 in USA (70-80% savings). Gastric bypass, sleeve gastrectomy. 60-80% excess weight loss. 85% diabetes remission." />
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

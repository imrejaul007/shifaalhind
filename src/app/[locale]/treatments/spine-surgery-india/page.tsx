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
  title: 'Spine Surgery India: Cost, Best Spine Surgeons & Hospitals 2025',
  description: 'Spine surgery in India costs $4,500-10,000 vs $60,000-150,000 in USA (85-92% savings). 92-97% success. Top spine centers with minimally invasive techniques.',
  keywords: 'spine surgery india, spinal fusion india, spine surgery cost india, best spine surgeon india',
};

const RELATED_ARTICLES = [
  { title: "Medical Visa India Guide", href: "/blog/medical-visa-india-complete-guide", description: "Complete visa process guide" },
  { title: "Best Hospitals Delhi", href: "/blog/best-hospitals-delhi-medical-tourism", description: "Top 10 JCI-accredited hospitals" },
  { title: "Medical Tourism Guide", href: "/blog/medical-tourism-uae-patients-guide", description: "Complete guide for GCC patients" }
];

export default function SpineSurgeryIndiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-12 text-white md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Spine Surgery in India</h1>
            <p className="mb-6 text-xl text-primary-50">Advanced Spinal Care with Minimally Invasive Techniques</p>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2"><DollarSign className="h-5 w-5" /><span>$4,500 - $10,000</span></div>
              <div className="flex items-center gap-2"><Clock className="h-5 w-5" /><span>2-6 hours</span></div>
              <div className="flex items-center gap-2"><Heart className="h-5 w-5" /><span>92-97% success</span></div>
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
                    <td className="px-4 py-3 font-medium">Lumbar Spinal Fusion</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$5,500 - $8,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$80,000 - $150,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£65,000 - £120,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 70,000 - 130,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Cervical Disc Replacement</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$5,000 - $7,500</td>
                    <td className="px-4 py-3 text-center text-gray-600">$70,000 - $120,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£55,000 - £95,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 60,000 - 110,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Minimally Invasive Discectomy</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$4,500 - $6,500</td>
                    <td className="px-4 py-3 text-center text-gray-600">$50,000 - $80,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£40,000 - £65,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 45,000 - 75,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Scoliosis Correction</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$8,000 - $12,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$120,000 - $200,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£95,000 - £160,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 105,000 - 175,000</td>
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
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">Top 3 Hospitals for Spine Surgery</h2>
          <div className="space-y-4">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">1. Apollo Hospitals</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.8/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Chennai, Delhi | 5,000+ spine surgeries</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Minimally invasive</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Navigation</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Robotic assistance</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $5,500 - $9,000</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">2. Indian Spinal Injuries Centre</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.9/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Delhi | 4,500+ procedures</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Specialized spine center</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Complex deformities</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Rehabilitation</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $5,000 - $8,500</p>
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
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Endoscopic spine</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Disc replacement</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Sports injuries</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $4,800 - $8,000</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={[{"question":"What is success rate?","answer":"Spinal fusion: 92-97%, Disc replacement: 90-95%, Discectomy: 90-95%, Scoliosis correction: 85-92%. Success depends on severity, technique, patient compliance."},{"question":"Minimally invasive vs open?","answer":"MIS: Small incision (1-2cm), less pain, faster recovery (2-4 weeks), outpatient/1-day stay. Open: Traditional, larger incision, for complex cases, 3-5 day stay. MIS preferred when possible."},{"question":"How long is recovery?","answer":"Hospital: 2-5 days (MIS: 1-2 days), Walking: Day 1-2, Return to desk work: 2-4 weeks, Return to physical work: 6-12 weeks, Full recovery: 3-6 months."},{"question":"Will I need physiotherapy?","answer":"Yes, crucial for recovery. Starts 1-2 days after surgery. 4-8 weeks of structured rehab. Strengthens core, improves flexibility, prevents re-injury. Clinic provides physiotherapy plan."}]} />

      {/* FAQ Section */}
      <section className="container px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">What is success rate?</h3>
                <p className="text-gray-700">Spinal fusion: 92-97%, Disc replacement: 90-95%, Discectomy: 90-95%, Scoliosis correction: 85-92%. Success depends on severity, technique, patient compliance.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">Minimally invasive vs open?</h3>
                <p className="text-gray-700">MIS: Small incision (1-2cm), less pain, faster recovery (2-4 weeks), outpatient/1-day stay. Open: Traditional, larger incision, for complex cases, 3-5 day stay. MIS preferred when possible.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">How long is recovery?</h3>
                <p className="text-gray-700">Hospital: 2-5 days (MIS: 1-2 days), Walking: Day 1-2, Return to desk work: 2-4 weeks, Return to physical work: 6-12 weeks, Full recovery: 3-6 months.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">Will I need physiotherapy?</h3>
                <p className="text-gray-700">Yes, crucial for recovery. Starts 1-2 days after surgery. 4-8 weeks of structured rehab. Strengthens core, improves flexibility, prevents re-injury. Clinic provides physiotherapy plan.</p>
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
        <SocialShare title="Spine Surgery India: Cost, Best Spine Surgeons & Hospitals 2025" description="Spine surgery in India costs $4,500-10,000 vs $60,000-150,000 in USA (85-92% savings). 92-97% success. Top spine centers with minimally invasive techniques." />
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

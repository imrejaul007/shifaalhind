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
  title: 'Neurosurgery India: Brain Surgery Cost, Best Hospitals 2025',
  description: 'Neurosurgery in India costs $5,000-15,000 vs $50,000-150,000 in USA (85-90% savings). 90-95% success. Top neuroscience centers with advanced technology.',
  keywords: 'neurosurgery india, brain surgery india, neurosurgery cost india, best neurosurgeon india',
};

const RELATED_ARTICLES = [
  { title: "Medical Visa India Guide", href: "/blog/medical-visa-india-complete-guide", description: "Complete visa process guide" },
  { title: "Best Hospitals Delhi", href: "/blog/best-hospitals-delhi-medical-tourism", description: "Top 10 JCI-accredited hospitals" },
  { title: "Medical Tourism Guide", href: "/blog/medical-tourism-uae-patients-guide", description: "Complete guide for GCC patients" }
];

export default function NeurosurgeryIndiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-12 text-white md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Neurosurgery / Brain Surgery in India</h1>
            <p className="mb-6 text-xl text-primary-50">World-Class Neuroscience Care at Affordable Prices</p>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2"><DollarSign className="h-5 w-5" /><span>$5,000 - $15,000</span></div>
              <div className="flex items-center gap-2"><Clock className="h-5 w-5" /><span>2-8 hours</span></div>
              <div className="flex items-center gap-2"><Heart className="h-5 w-5" /><span>90-95% success</span></div>
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
                    <td className="px-4 py-3 font-medium">Brain Tumor Craniotomy</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$8,000 - $15,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$80,000 - $150,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£65,000 - £120,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 70,000 - 130,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Aneurysm Clipping</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$7,000 - $12,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$70,000 - $120,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£55,000 - £95,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 60,000 - 110,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Spinal Cord Tumor Surgery</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$6,000 - $11,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$60,000 - $110,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£48,000 - £90,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 55,000 - 100,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Gamma Knife Radiosurgery</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$5,000 - $8,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$50,000 - $100,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£40,000 - £80,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 45,000 - 85,000</td>
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
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">Top 3 Hospitals for Neurosurgery / Brain Surgery</h2>
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
                    <p className="mb-3 text-gray-600">Chennai, Delhi | 8,000+ neurosurgeries</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Gamma Knife</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">CyberKnife</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Neuronavigation</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $7,500 - $14,000</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">2. Fortis Memorial</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.8/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Gurgaon | 6,000+ procedures</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Awake craniotomy</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Endoscopic surgery</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Intraoperative MRI</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $7,000 - $13,500</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">3. Medanta Neurosciences</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.8/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Gurgaon | 5,500+ surgeries</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Brain mapping</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Minimally invasive</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Pediatric neurosurgery</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $6,500 - $13,000</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={[{"question":"What is success rate?","answer":"Brain tumor: 90-95%, Aneurysm clipping: 92-97%, Spinal cord tumor: 85-90%. Success depends on tumor type, location, size, patient age."},{"question":"How long is recovery?","answer":"Hospital: 5-10 days, ICU: 2-5 days, Return to light activities: 4-6 weeks, Return to work: 8-12 weeks, Full recovery: 6-12 months. Rehabilitation may be needed."},{"question":"Gamma Knife vs surgery?","answer":"Gamma Knife: Non-invasive, no incision, outpatient, for small tumors (less than 3cm), acoustic neuromas, AVMs. Surgery: For large tumors, mass effect, immediate decompression. Surgeon recommends based on MRI."},{"question":"How long to stay in India?","answer":"3-4 weeks total. Pre-surgery MRI/tests: 2-3 days, Surgery & hospital: 5-10 days, Post-discharge monitoring: 10-14 days before flying home."}]} />

      {/* FAQ Section */}
      <section className="container px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">What is success rate?</h3>
                <p className="text-gray-700">Brain tumor: 90-95%, Aneurysm clipping: 92-97%, Spinal cord tumor: 85-90%. Success depends on tumor type, location, size, patient age.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">How long is recovery?</h3>
                <p className="text-gray-700">Hospital: 5-10 days, ICU: 2-5 days, Return to light activities: 4-6 weeks, Return to work: 8-12 weeks, Full recovery: 6-12 months. Rehabilitation may be needed.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">Gamma Knife vs surgery?</h3>
                <p className="text-gray-700">Gamma Knife: Non-invasive, no incision, outpatient, for small tumors (&lt;3cm), acoustic neuromas, AVMs. Surgery: For large tumors, mass effect, immediate decompression. Surgeon recommends based on MRI.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">How long to stay in India?</h3>
                <p className="text-gray-700">3-4 weeks total. Pre-surgery MRI/tests: 2-3 days, Surgery & hospital: 5-10 days, Post-discharge monitoring: 10-14 days before flying home.</p>
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
        <SocialShare title="Neurosurgery India: Brain Surgery Cost, Best Hospitals 2025" description="Neurosurgery in India costs $5,000-15,000 vs $50,000-150,000 in USA (85-90% savings). 90-95% success. Top neuroscience centers with advanced technology." />
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

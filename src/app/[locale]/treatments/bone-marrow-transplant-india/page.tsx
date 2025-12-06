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
  title: 'Bone Marrow Transplant India: BMT Cost, Best Hospitals 2025',
  description: 'Bone marrow transplant in India costs $25,000-45,000 vs $300,000+ in USA (85% savings). 70-85% success for leukemia. Top BMT centers with 1,500+ transplants.',
  keywords: 'bone marrow transplant india, bmt india cost, stem cell transplant india, bmt hospitals india',
};

const RELATED_ARTICLES = [
  { title: "Medical Visa India Guide", href: "/blog/medical-visa-india-complete-guide", description: "Complete visa process guide" },
  { title: "Best Hospitals Delhi", href: "/blog/best-hospitals-delhi-medical-tourism", description: "Top 10 JCI-accredited hospitals" },
  { title: "Medical Tourism Guide", href: "/blog/medical-tourism-uae-patients-guide", description: "Complete guide for GCC patients" }
];

export default function BoneMarrowTransplantIndiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-12 text-white md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Bone Marrow Transplant in India</h1>
            <p className="mb-6 text-xl text-primary-50">Advanced BMT at 85% Lower Cost</p>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2"><DollarSign className="h-5 w-5" /><span>$25,000 - $45,000</span></div>
              <div className="flex items-center gap-2"><Clock className="h-5 w-5" /><span>4-6 hours</span></div>
              <div className="flex items-center gap-2"><Heart className="h-5 w-5" /><span>70-85% success</span></div>
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
                    <td className="px-4 py-3 font-medium">Autologous BMT</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$25,000 - $35,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$300,000 - $400,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£240,000 - £320,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 275,000 - 375,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Allogeneic BMT (Matched Sibling)</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$30,000 - $45,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$400,000 - $600,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£320,000 - £480,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 350,000 - 550,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Haploidentical BMT (Half-Match)</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$35,000 - $50,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$500,000 - $750,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£400,000 - £600,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 450,000 - 700,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Pediatric BMT</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$30,000 - $48,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$450,000 - $650,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£360,000 - £520,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 400,000 - 600,000</td>
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
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">Top 3 Hospitals for Bone Marrow Transplant (BMT)</h2>
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
                    <p className="mb-3 text-gray-600">Chennai, Delhi | 1,500+ BMT procedures</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">HEPA filter rooms</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Haploidentical BMT</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">75-85% success</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $32,000 - $48,000</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">2. Tata Memorial Hospital</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.8/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Mumbai | 1,200+ BMT</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Government pricing</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Research center</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Leukemia specialists</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $25,000 - $40,000</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">3. Fortis Memorial</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.8/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Gurgaon | 800+ procedures</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">CAR T-cell therapy</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Cord blood BMT</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">GvHD management</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $30,000 - $45,000</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={[{"question":"What diseases need BMT?","answer":"Leukemia (ALL, AML, CML, CLL), Lymphoma (Hodgkin, Non-Hodgkin), Multiple myeloma, Aplastic anemia, Thalassemia, Sickle cell disease, MDS, Immune deficiencies."},{"question":"What is success rate?","answer":"Leukemia: 65-75%, Lymphoma: 70-80%, Myeloma: 75-85%, Thalassemia: 85-90%, Aplastic anemia: 75-85%. Success depends on disease stage, age, donor match."},{"question":"Autologous vs Allogeneic?","answer":"Autologous: Own stem cells, less complications, for myeloma/lymphoma. Allogeneic: Donor cells, graft-vs-leukemia effect, for leukemia. Matched sibling best (better outcomes). Haploidentical (parent/child) if no match."},{"question":"How long is recovery?","answer":"Hospital: 21-30 days in isolation, Engraftment: 14-21 days, Return to normal: 3-6 months, Full recovery: 1-2 years. 100-day milestone critical. Regular monitoring lifelong."}]} />

      {/* FAQ Section */}
      <section className="container px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">What diseases need BMT?</h3>
                <p className="text-gray-700">Leukemia (ALL, AML, CML, CLL), Lymphoma (Hodgkin, Non-Hodgkin), Multiple myeloma, Aplastic anemia, Thalassemia, Sickle cell disease, MDS, Immune deficiencies.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">What is success rate?</h3>
                <p className="text-gray-700">Leukemia: 65-75%, Lymphoma: 70-80%, Myeloma: 75-85%, Thalassemia: 85-90%, Aplastic anemia: 75-85%. Success depends on disease stage, age, donor match.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">Autologous vs Allogeneic?</h3>
                <p className="text-gray-700">Autologous: Own stem cells, less complications, for myeloma/lymphoma. Allogeneic: Donor cells, graft-vs-leukemia effect, for leukemia. Matched sibling best (better outcomes). Haploidentical (parent/child) if no match.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">How long is recovery?</h3>
                <p className="text-gray-700">Hospital: 21-30 days in isolation, Engraftment: 14-21 days, Return to normal: 3-6 months, Full recovery: 1-2 years. 100-day milestone critical. Regular monitoring lifelong.</p>
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
        <SocialShare title="Bone Marrow Transplant India: BMT Cost, Best Hospitals 2025" description="Bone marrow transplant in India costs $25,000-45,000 vs $300,000+ in USA (85% savings). 70-85% success for leukemia. Top BMT centers with 1,500+ transplants." />
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

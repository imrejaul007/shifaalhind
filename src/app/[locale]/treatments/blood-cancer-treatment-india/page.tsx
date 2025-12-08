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
import { BreadcrumbSchema } from '@/components/seo/breadcrumb-schema';
import { MedicalProcedureSchema } from '@/components/seo/medical-procedure-schema';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Blood Cancer Treatment India: Cost, Best Hospitals & Success Rate 2025',
  description: 'Blood cancer treatment in India costs 70-85% less than USA. Leukemia, Lymphoma, Myeloma. Top oncology centers, 60-85% success. Chemotherapy, BMT, targeted therapy.',
  keywords: 'blood cancer treatment india, leukemia treatment india, lymphoma treatment india, blood cancer cost india',
  alternates: {
    canonical: 'https://shifaalhind.onrender.com/en/treatments/blood-cancer-treatment-india',
    languages: {
      'en-US': 'https://shifaalhind.onrender.com/en/treatments/blood-cancer-treatment-india',
      'ar-SA': 'https://shifaalhind.onrender.com/ar/treatments/blood-cancer-treatment-india',
      'x-default': 'https://shifaalhind.onrender.com/en/treatments/blood-cancer-treatment-india',
    },
  },
};

const RELATED_ARTICLES = [
  { title: "Medical Visa India Guide", href: "/blog/medical-visa-india-complete-guide", description: "Complete visa process guide" },
  { title: "Best Hospitals Mumbai", href: "/blog/best-hospitals-mumbai-medical-tourism", description: "Top 10 JCI-accredited hospitals" },
  { title: "Medical Tourism Guide", href: "/blog/medical-tourism-uae-patients-guide", description: "Complete guide for GCC patients" }
];

export default function BloodCancerTreatmentIndiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
{/* Breadcrumb Schema for SEO */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://shifaalhind.onrender.com' },
        { name: 'Treatments', url: 'https://shifaalhind.onrender.com/treatments' },
        { name: 'Blood Cancer Treatment in India', url: 'https://shifaalhind.onrender.com/treatments/blood-cancer-treatment-india' }
      ]} />

      {/* Medical Procedure Schema for SEO */}
      <MedicalProcedureSchema
        name="Blood Cancer Treatment"
        description="Blood cancer treatment includes chemotherapy, bone marrow transplant, targeted therapy, and immunotherapy."
        procedureType="TherapeuticProcedure"
        bodyLocation="Blood and Bone Marrow"
        
        
        url="https://shifaalhind.onrender.com/treatments/blood-cancer-treatment-india"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-12 text-white md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Blood Cancer Treatment in India</h1>
            <p className="mb-6 text-xl text-primary-50">Comprehensive Oncology Care at Fraction of Cost</p>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2"><DollarSign className="h-5 w-5" /><span>$1,500 - $45,000</span></div>
              <div className="flex items-center gap-2"><Clock className="h-5 w-5" /><span>Varies</span></div>
              <div className="flex items-center gap-2"><Heart className="h-5 w-5" /><span>60-85% success</span></div>
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
          <p className="mb-8 text-center text-lg text-gray-600">Save 70-85% with same quality care</p>
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
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$1,500 - $3,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$10,000 - $30,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£8,000 - £25,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 35,000 - 100,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Bone Marrow Transplant</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$25,000 - $45,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$300,000 - $500,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£250,000 - £400,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 350,000 - 550,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Targeted Therapy</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$5,000 - $12,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$50,000 - $150,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£40,000 - £120,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 60,000 - 180,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Immunotherapy</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$8,000 - $15,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$80,000 - $200,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£65,000 - £160,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 90,000 - 220,000</td>
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
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">Top 3 Hospitals for Blood Cancer Treatment</h2>
          <div className="space-y-4">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">1. Tata Memorial Hospital</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.8/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Mumbai | 15,000+ blood cancer patients annually</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Asia&apos;s largest cancer center</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Government-subsidized</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">CAR-T cell therapy</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $20,000 - $40,000</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">2. Apollo Cancer Centre</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.8/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Chennai | 1,500+ BMT annually</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Haploidentical BMT</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Pediatric blood cancer</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">International accredited</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $28,000 - $50,000</p>
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
                        <span className="text-sm font-semibold text-green-700">4.7/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Gurgaon | 1,200+ blood cancer cases</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Advanced BMT unit</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Flow cytometry</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Clinical trials</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $25,000 - $45,000</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={[{"question":"What is success rate?","answer":"Acute Lymphoblastic Leukemia (ALL): 80-90% in children, 40-50% in adults. Acute Myeloid Leukemia (AML): 60-70% complete remission. Hodgkin Lymphoma: 80-85% cure rate. Non-Hodgkin Lymphoma: 60-75%. Multiple Myeloma: 75-85% response rate with novel therapies."},{"question":"How long is treatment?","answer":"Chemotherapy: 4-8 cycles over 3-6 months. BMT: Hospital stay 4-6 weeks, recovery 3-6 months. Maintenance therapy: 1-2 years for some types. Total treatment duration: 1-3 years depending on cancer type and stage."},{"question":"Is BMT necessary?","answer":"Not always. BMT needed for: High-risk leukemia, Relapsed disease, Certain aggressive lymphomas. NOT needed for: Early-stage Hodgkin, Some indolent lymphomas, Elderly patients over 70. Your oncologist will determine based on disease subtype, risk factors, and molecular markers."},{"question":"What are side effects?","answer":"Chemotherapy: Nausea, hair loss, low blood counts, infection risk. BMT: Graft-versus-host disease, infections, organ toxicity. Targeted therapy: Rash, diarrhea, liver issues (generally milder than chemo). Most side effects are manageable with supportive care. Indian hospitals excel at supportive care."}]} />

      {/* FAQ Section */}
      <section className="container px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">What is success rate?</h3>
                <p className="text-gray-700">Acute Lymphoblastic Leukemia (ALL): 80-90% in children, 40-50% in adults. Acute Myeloid Leukemia (AML): 60-70% complete remission. Hodgkin Lymphoma: 80-85% cure rate. Non-Hodgkin Lymphoma: 60-75%. Multiple Myeloma: 75-85% response rate with novel therapies.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">How long is treatment?</h3>
                <p className="text-gray-700">Chemotherapy: 4-8 cycles over 3-6 months. BMT: Hospital stay 4-6 weeks, recovery 3-6 months. Maintenance therapy: 1-2 years for some types. Total treatment duration: 1-3 years depending on cancer type and stage.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">Is BMT necessary?</h3>
                <p className="text-gray-700">Not always. BMT needed for: High-risk leukemia, Relapsed disease, Certain aggressive lymphomas. NOT needed for: Early-stage Hodgkin, Some indolent lymphomas, Elderly patients over 70. Your oncologist will determine based on disease subtype, risk factors, and molecular markers.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">What are side effects?</h3>
                <p className="text-gray-700">Chemotherapy: Nausea, hair loss, low blood counts, infection risk. BMT: Graft-versus-host disease, infections, organ toxicity. Targeted therapy: Rash, diarrhea, liver issues (generally milder than chemo). Most side effects are manageable with supportive care. Indian hospitals excel at supportive care.</p>
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
        <SocialShare title="Blood Cancer Treatment India: Cost, Best Hospitals & Success Rate 2025" description="Blood cancer treatment in India costs 70-85% less than USA. Leukemia, Lymphoma, Myeloma. Top oncology centers, 60-85% success. Chemotherapy, BMT, targeted therapy." />
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

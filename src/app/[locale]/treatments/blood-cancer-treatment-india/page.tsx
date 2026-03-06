import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import { TreatmentSchemas } from '@/components/seo/treatment-schemas';
import { ContextualSidebar } from '@/components/seo/contextual-sidebar';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Blood Cancer Treatment India 2025: Cost, Best Hospitals',
  description: 'Blood cancer treatment in India costs $8,000-$25,000 (80-85% savings). Leukemia, Lymphoma, Myeloma treatment at top oncology centers. BMT, Chemotherapy, CAR-T cell therapy with 70-90% success rates.',
  keywords: 'blood cancer treatment india, leukemia treatment india, lymphoma treatment india, bone marrow transplant india, علاج سرطان الدم في الهند, blood cancer cost india, BMT india, CAR-T cell therapy india',
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
  { title: "Medical Tourism Guide", href: "/blog/medical-tourism-uae-patients-guide", description: "Complete guide for GCC patients" },
];

const FAQ_DATA = [
  { question: "What is the success rate of blood cancer treatment in India?", answer: "Success rates vary by type and stage. Acute Lymphoblastic Leukemia (ALL): 85-90% in children, 40-50% in adults. Hodgkin Lymphoma: 80-90% cure rate. Non-Hodgkin Lymphoma: 60-75% long-term survival. Multiple Myeloma: 70-85% response rate with modern therapies. Bone marrow transplant success: 60-80% depending on donor match and disease stage." },
  { question: "How much does blood cancer treatment cost in India?", answer: "Chemotherapy (6 cycles): $8,000-$12,000. Autologous BMT: $15,000-$20,000. Allogeneic BMT: $20,000-$35,000. Targeted therapy (per year): $5,000-$15,000. CAR-T cell therapy: $40,000-$65,000. Total savings of 80-85% compared to the USA." },
  { question: "How long does blood cancer treatment take in India?", answer: "Initial diagnosis and staging: 1-2 weeks. Chemotherapy cycles: 3-6 months (4-8 cycles). Bone marrow transplant: 4-6 weeks hospital stay plus 3-6 months recovery. Maintenance therapy: 1-2 years for certain cancers. Total stay in India: 3-8 months depending on treatment protocol." },
  { question: "Is bone marrow transplant always necessary for blood cancer?", answer: "No. BMT is recommended for high-risk or relapsed leukemia, aggressive lymphomas not responding to chemotherapy, and certain cases of multiple myeloma. Many patients achieve remission with chemotherapy and targeted therapy alone. Your oncologist will evaluate disease subtype, genetic markers, and risk stratification to determine the optimal approach." },
  { question: "What types of blood cancer are treated in India?", answer: "Indian hospitals treat all types: Acute Lymphoblastic Leukemia (ALL), Acute Myeloid Leukemia (AML), Chronic Myeloid Leukemia (CML), Chronic Lymphocytic Leukemia (CLL), Hodgkin Lymphoma, Non-Hodgkin Lymphoma, Multiple Myeloma, Myelodysplastic Syndromes (MDS), and Waldenstrom Macroglobulinemia." },
  { question: "What are the side effects of blood cancer treatment?", answer: "Chemotherapy: nausea, fatigue, hair loss, low blood counts, infection risk. BMT: graft-versus-host disease (GVHD), infections, organ toxicity, prolonged immune suppression. Targeted therapy: skin rash, diarrhea, liver changes (generally milder). CAR-T: cytokine release syndrome, neurological effects. Indian hospitals have dedicated supportive care teams managing all side effects." },
  { question: "Can international patients get CAR-T cell therapy in India?", answer: "Yes. Select centers like Tata Memorial Hospital and Apollo Cancer Centre now offer CAR-T cell therapy at $40,000-$65,000, compared to $400,000+ in the USA. India has developed indigenous CAR-T programs making this cutting-edge therapy accessible. Patients need 4-6 weeks for the manufacturing and treatment process." },
  { question: "How do I choose between hospitals for blood cancer treatment?", answer: "Consider: annual volume of blood cancer cases (higher is better), BMT program accreditation, availability of clinical trials, presence of specialized hemato-oncologists, HEPA-filtered transplant units, and international patient support services. Tata Memorial, Apollo Cancer Centre, and Rajiv Gandhi Cancer Institute are among the best choices." },
];

export default async function BloodCancerTreatmentIndiaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb Schema */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://shifaalhind.onrender.com' },
        { name: 'Treatments', url: 'https://shifaalhind.onrender.com/treatments' },
        { name: 'Blood Cancer Treatment in India', url: 'https://shifaalhind.onrender.com/treatments/blood-cancer-treatment-india' },
      ]} />

      {/* Medical Procedure Schema */}
      <MedicalProcedureSchema
        name="Blood Cancer Treatment (Leukemia/Lymphoma)"
        description="Comprehensive blood cancer treatment including chemotherapy, bone marrow transplant, targeted therapy, immunotherapy, and CAR-T cell therapy for leukemia, lymphoma, and myeloma."
        procedureType="TherapeuticProcedure"
        bodyLocation="Blood and Bone Marrow"
        url="https://shifaalhind.onrender.com/treatments/blood-cancer-treatment-india"
      />

      {/* FAQ Schema */}
      <FAQSchema faqs={FAQ_DATA} />

      {/* Hero Section */}
      <section className="mb-12 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-12 text-white md:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 font-serif text-3xl md:text-4xl font-bold md:text-5xl">Blood Cancer Treatment in India</h1>
          <p className="mb-6 text-xl text-primary-50">World-Class Hemato-Oncology Care -- Chemotherapy, Bone Marrow Transplant, CAR-T Cell Therapy at 80-85% Lower Cost Than USA</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600">
              <Link href="/booking">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary-600">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="mb-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="text-center shadow-lg">
            <CardHeader className="pb-2">
              <DollarSign className="mx-auto h-8 w-8 text-green-600" />
              <CardTitle className="text-lg">Treatment Cost</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-600">$8,000 - $25,000</p>
              <p className="text-sm text-gray-500">Chemo to BMT range</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg">
            <CardHeader className="pb-2">
              <Heart className="mx-auto h-8 w-8 text-red-500" />
              <CardTitle className="text-lg">Success Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-red-500">70 - 90%</p>
              <p className="text-sm text-gray-500">Depending on type and stage</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg">
            <CardHeader className="pb-2">
              <DollarSign className="mx-auto h-8 w-8 text-blue-600" />
              <CardTitle className="text-lg">Cost Savings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-blue-600">80 - 85%</p>
              <p className="text-sm text-gray-500">Compared to USA / UK</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg">
            <CardHeader className="pb-2">
              <Clock className="mx-auto h-8 w-8 text-purple-600" />
              <CardTitle className="text-lg">Treatment Duration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-purple-600">3 - 6 Months</p>
              <p className="text-sm text-gray-500">Varies by protocol</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="mb-12">
        <h2 className="mb-6 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">Cost Comparison: India vs World</h2>
        <p className="mb-8 text-center text-lg text-gray-600">Save 80-85% on blood cancer treatment with world-class outcomes</p>
        <Card className="overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Procedure</th>
                  <th className="px-4 py-3 text-center">India</th>
                  <th className="px-4 py-3 text-center">USA</th>
                  <th className="px-4 py-3 text-center">UK</th>
                  <th className="px-4 py-3 text-center">UAE</th>
                  <th className="px-4 py-3 text-center">Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Chemotherapy (6 Cycles)</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$8,000 - $12,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$60,000 - $120,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$50,000 - $100,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$40,000 - $80,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">~85%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">BMT (Autologous)</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$15,000 - $20,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$150,000 - $250,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$120,000 - $200,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$80,000 - $150,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">~88%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">BMT (Allogeneic)</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$20,000 - $35,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$300,000 - $500,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$250,000 - $400,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$150,000 - $300,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">~90%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Targeted Therapy (per year)</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$5,000 - $15,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$50,000 - $150,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$40,000 - $120,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$30,000 - $90,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">~85%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">CAR-T Cell Therapy</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$40,000 - $65,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$400,000 - $500,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$350,000 - $450,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">N/A</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">~87%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      {/* What&apos;s Included */}
      <section className="mb-12">
        <h2 className="mb-8 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">What&apos;s Included in Your Treatment Package</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <CheckCircle2 className="h-5 w-5 text-green-600" /> Diagnosis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Bone marrow biopsy and aspiration</li>
                <li>PET-CT full body scan</li>
                <li>Flow cytometry and immunophenotyping</li>
                <li>Cytogenetic and molecular testing</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <CheckCircle2 className="h-5 w-5 text-green-600" /> Treatment Plan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Multidisciplinary tumor board review</li>
                <li>Personalized protocol selection</li>
                <li>Risk stratification and staging</li>
                <li>Second opinion from senior oncologist</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <CheckCircle2 className="h-5 w-5 text-green-600" /> Treatment Phase
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Chemotherapy / immunotherapy cycles</li>
                <li>Radiation therapy if indicated</li>
                <li>Bone marrow transplant (if required)</li>
                <li>Supportive care and transfusions</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <CheckCircle2 className="h-5 w-5 text-green-600" /> Follow-up
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Post-treatment monitoring plan</li>
                <li>Regular blood tests and imaging</li>
                <li>Telemedicine consultations from home</li>
                <li>Survivorship care guidelines</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Procedure Comparison: Chemotherapy vs BMT */}
      <section className="mb-12">
        <h2 className="mb-8 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">Chemotherapy vs Bone Marrow Transplant</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="shadow-lg">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-xl text-blue-800">Chemotherapy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-4">
              <div><span className="font-semibold">Candidacy:</span> First-line for most blood cancers; suitable for all ages</div>
              <div><span className="font-semibold">Duration:</span> 4-8 cycles over 3-6 months</div>
              <div><span className="font-semibold">Success Rate:</span> 60-85% complete remission (varies by subtype)</div>
              <div><span className="font-semibold">Side Effects:</span> Nausea, hair loss, fatigue, low blood counts, infection risk</div>
              <div><span className="font-semibold">Cost in India:</span> $8,000 - $12,000 (6 cycles)</div>
              <div><span className="font-semibold">Recovery:</span> 2-4 weeks between cycles; 1-2 months after final cycle</div>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader className="bg-purple-50">
              <CardTitle className="text-xl text-purple-800">Bone Marrow Transplant</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-4">
              <div><span className="font-semibold">Candidacy:</span> High-risk leukemia, relapsed disease, aggressive lymphoma</div>
              <div><span className="font-semibold">Duration:</span> 4-6 weeks hospital stay + 3-6 months recovery</div>
              <div><span className="font-semibold">Success Rate:</span> 60-80% long-term survival (with matched donor)</div>
              <div><span className="font-semibold">Side Effects:</span> GVHD, infections, organ toxicity, prolonged immune suppression</div>
              <div><span className="font-semibold">Cost in India:</span> $15,000 - $35,000 (auto/allo)</div>
              <div><span className="font-semibold">Recovery:</span> 3-6 months post-transplant; immune recovery 6-12 months</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Top 3 Hospitals */}
      <section className="mb-12">
        <h2 className="mb-8 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">Top 3 Hospitals for Blood Cancer Treatment</h2>
        <div className="space-y-6">
          {/* Hospital 1 */}
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="mb-3 flex items-center gap-3">
                <h3 className="text-xl font-bold text-gray-900">1. Tata Memorial Hospital</h3>
                <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                  <Star className="h-4 w-4 fill-green-600 text-green-600" />
                  <span className="text-sm font-semibold text-green-700">4.9/5</span>
                </div>
              </div>
              <p className="mb-3 text-gray-600">Mumbai | Asia&apos;s Largest Cancer Centre | 15,000+ blood cancer patients annually</p>
              <div className="mb-4 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-gray-800">Key Oncologists</p>
                  <p className="text-sm text-gray-600">Dr. Navin Khattry (BMT), Dr. Manju Sengar (Lymphoma), Dr. Hasmukh Jain (Leukemia)</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Technology</p>
                  <p className="text-sm text-gray-600">CAR-T cell therapy, haploidentical BMT, flow cytometry, next-gen sequencing</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Cost Range</p>
                  <p className="text-sm font-semibold text-green-600">$8,000 - $45,000</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Why Choose</p>
                  <p className="text-sm text-gray-600">Government-subsidized, largest BMT program in India, indigenous CAR-T trials</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">NABH Accredited</span>
                <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">CAR-T Program</span>
                <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Clinical Trials</span>
              </div>
            </CardContent>
          </Card>

          {/* Hospital 2 */}
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="mb-3 flex items-center gap-3">
                <h3 className="text-xl font-bold text-gray-900">2. Apollo Cancer Centre</h3>
                <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                  <Star className="h-4 w-4 fill-green-600 text-green-600" />
                  <span className="text-sm font-semibold text-green-700">4.8/5</span>
                </div>
              </div>
              <p className="mb-3 text-gray-600">Chennai | JCI Accredited | 1,500+ BMT procedures annually</p>
              <div className="mb-4 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-gray-800">Key Oncologists</p>
                  <p className="text-sm text-gray-600">Dr. Revathi Raj (Pediatric BMT), Dr. TG Sagar (Medical Oncology), Dr. Dhananjay Kelkar</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Technology</p>
                  <p className="text-sm text-gray-600">Haploidentical BMT, reduced-intensity conditioning, HEPA-filtered transplant suites</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Cost Range</p>
                  <p className="text-sm font-semibold text-green-600">$10,000 - $50,000</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Why Choose</p>
                  <p className="text-sm text-gray-600">International patient wing, pediatric blood cancer expertise, multi-lingual support</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">JCI Accredited</span>
                <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Pediatric BMT</span>
                <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">International Wing</span>
              </div>
            </CardContent>
          </Card>

          {/* Hospital 3 */}
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="mb-3 flex items-center gap-3">
                <h3 className="text-xl font-bold text-gray-900">3. Rajiv Gandhi Cancer Institute</h3>
                <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                  <Star className="h-4 w-4 fill-green-600 text-green-600" />
                  <span className="text-sm font-semibold text-green-700">4.8/5</span>
                </div>
              </div>
              <p className="mb-3 text-gray-600">New Delhi | Dedicated Cancer Hospital | 1,200+ blood cancer cases annually</p>
              <div className="mb-4 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-gray-800">Key Oncologists</p>
                  <p className="text-sm text-gray-600">Dr. Dinesh Bhurani (BMT Head), Dr. Hari Goyal (Lymphoma), Dr. Rayaz Ahmed (Myeloma)</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Technology</p>
                  <p className="text-sm text-gray-600">Advanced flow cytometry, FISH testing, PET-CT, 20-bed HEPA BMT unit</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Cost Range</p>
                  <p className="text-sm font-semibold text-green-600">$9,000 - $40,000</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Why Choose</p>
                  <p className="text-sm text-gray-600">Dedicated BMT unit with 95%+ engraftment rate, comprehensive molecular diagnostics</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">NABH Accredited</span>
                <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Dedicated BMT Unit</span>
                <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Molecular Lab</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="mb-12">
        <h2 className="mb-8 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">Recovery Timeline</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-l-4 border-l-red-500 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-red-700">Week 1-2</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              <p className="font-semibold">Acute Treatment Phase</p>
              <ul className="mt-2 list-disc space-y-1 pl-4">
                <li>Initial chemotherapy or transplant conditioning</li>
                <li>Close monitoring of blood counts</li>
                <li>Supportive transfusions as needed</li>
                <li>Infection prevention protocols</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-orange-500 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-orange-700">Month 1-2</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              <p className="font-semibold">Recovery and Monitoring</p>
              <ul className="mt-2 list-disc space-y-1 pl-4">
                <li>Blood count recovery (for BMT: engraftment)</li>
                <li>Infection management and prophylaxis</li>
                <li>Gradual return to light activities</li>
                <li>Nutritional rehabilitation</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-yellow-500 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-yellow-700">Month 3-6</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              <p className="font-semibold">Consolidation Phase</p>
              <ul className="mt-2 list-disc space-y-1 pl-4">
                <li>Consolidation chemotherapy cycles (if needed)</li>
                <li>Immune system rebuilding</li>
                <li>Regular follow-up scans and biopsies</li>
                <li>Return to normal daily activities</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-green-500 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-green-700">Month 6-12+</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              <p className="font-semibold">Maintenance and Surveillance</p>
              <ul className="mt-2 list-disc space-y-1 pl-4">
                <li>Maintenance therapy (for some subtypes)</li>
                <li>Quarterly blood work and check-ups</li>
                <li>Vaccination schedule (post-BMT)</li>
                <li>Telemedicine follow-ups from home country</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Internal Links */}
      <div className="mb-8">
        <InternalLinks links={[
          { text: 'View All Treatments', href: '/treatments' },
          { text: 'Cost Calculator', href: '/cost-calculator' },
          { text: 'Our Hospitals', href: '/hospitals' },
          { text: 'Bone Marrow Transplant India', href: '/treatments/bone-marrow-transplant-india' },
        ]} />
      </div>

      {/* Social Share */}
      <div className="mb-8">
        <SocialShare
          title="Blood Cancer Treatment India 2025: Cost, Best Hospitals"
          description="Blood cancer treatment in India costs $8,000-$25,000 (80-85% savings). Leukemia, Lymphoma, Myeloma at top oncology centers."
        />
      </div>

      {/* Related Articles */}
      <div className="mb-12">
        <RelatedArticles articles={RELATED_ARTICLES} />
      </div>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="mb-8 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="mx-auto max-w-4xl space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <Card key={index} className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="mb-12 rounded-xl bg-gray-50 px-4 py-12">
        <Testimonials testimonials={TREATMENT_TESTIMONIALS['generic']} />
      </section>

      {/* Trust Badges */}
      <div className="mb-12">

      {/* Contextual Sidebar - Related Treatment Links */}
      <ContextualSidebar treatmentSlug="blood-cancer-treatment-india" locale={locale as 'en' | 'ar'} />
        <TrustBadges />
      </div>

      {/* Final CTA */}
      <section className="mb-8 rounded-2xl bg-green-600 px-6 py-12 text-center text-white">
        <h2 className="mb-4 font-serif text-2xl md:text-3xl font-bold">Start Your Blood Cancer Treatment Journey Today</h2>
        <p className="mb-8 text-lg text-green-50">Get a free consultation, cost estimate, and treatment plan from India&apos;s top hemato-oncologists. We are available 24/7.</p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="bg-white text-green-700 hover:bg-green-50">
            <Link href="/booking">Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-green-700">
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">WhatsApp Us Now</a>
          </Button>
        </div>
      </section>

      {/* SEO: HowTo + Offer + Speakable Schemas */}
      <TreatmentSchemas
        treatmentName="Blood Cancer Treatment"
        lowPrice={15000}
        highPrice={30000}
        url="/en/treatments/blood-cancer-treatment-india"
      />
    </div>
  );
}

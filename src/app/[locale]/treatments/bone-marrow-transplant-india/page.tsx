import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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

export const metadata: Metadata = {
  title: 'Bone Marrow Transplant India 2025: Cost $15,000-30,000, Best Hospitals',
  description: 'Bone marrow transplant (BMT) in India costs $15,000-30,000 vs $300,000+ in USA. 60-80% success rate at NABH-accredited hospitals. Autologous & allogeneic transplants for leukemia, lymphoma, thalassemia. Free consultation.',
  keywords: [
    'bone marrow transplant india',
    'bmt cost india',
    'stem cell transplant india',
    'bone marrow transplant cost india',
    'best bmt hospitals india',
    'allogeneic transplant india',
    'autologous transplant india',
    'leukemia treatment india',
    'thalassemia bone marrow transplant',
    'زراعة نخاع العظام في الهند',
    'تكلفة زراعة نخاع العظام في الهند',
    'أفضل مستشفيات زراعة نخاع العظام في الهند',
    'علاج سرطان الدم في الهند'
  ],
  alternates: {
    canonical: 'https://shifaalhind.onrender.com/en/treatments/bone-marrow-transplant-india',
    languages: {
      'en-US': 'https://shifaalhind.onrender.com/en/treatments/bone-marrow-transplant-india',
      'ar-SA': 'https://shifaalhind.onrender.com/ar/treatments/bone-marrow-transplant-india',
      'x-default': 'https://shifaalhind.onrender.com/en/treatments/bone-marrow-transplant-india',
    },
  },
};

export const dynamic = 'force-dynamic';

const FAQ_DATA = [
  { question: 'What are the types of bone marrow transplant available in India?', answer: 'India offers all major BMT types: Autologous (using your own stem cells, ideal for myeloma and lymphoma), Allogeneic with matched related donor (sibling match, best outcomes), Allogeneic with matched unrelated donor (from registry), Haploidentical (half-matched family donor), and Mini/Reduced-Intensity Transplant (for older or less-fit patients). Indian centers also perform cord blood transplants.' },
  { question: 'How is donor matching done for bone marrow transplant?', answer: 'Donor matching uses HLA (Human Leukocyte Antigen) typing via blood tests. A full match requires 10/10 HLA markers. Siblings have a 25% chance of being a perfect match. If no sibling match exists, haploidentical (half-match from parent/child) or matched unrelated donors from registries like DATRI are used. Indian hospitals have extensive HLA typing labs and access to international bone marrow registries.' },
  { question: 'How much does a bone marrow transplant cost in India?', answer: 'Autologous BMT costs $15,000-20,000, allogeneic BMT with related donor $20,000-30,000, unrelated donor allogeneic $25,000-35,000, and haploidentical transplant $22,000-32,000. These costs include pre-transplant workup, conditioning chemotherapy, stem cell infusion, 3-4 weeks hospitalization in isolation, and initial follow-up. This represents 75-85% savings vs USA where the same procedures cost $150,000-500,000+.' },
  { question: 'What is the recovery timeline after BMT?', answer: 'Day 0-14: Engraftment period with severe immunosuppression, patient in HEPA-filtered isolation room. Day 15-30: White cell counts begin recovering, gradually reducing infection risk. Day 30-100: Critical monitoring period for graft-versus-host disease (GVHD) and infections. Months 3-12+: Gradual immune reconstitution, tapering immunosuppressants, regular blood tests. Most patients can return to light activities at 3 months and normal life by 6-12 months.' },
  { question: 'What is the success rate of BMT in India?', answer: 'Success rates in India match global standards: Autologous BMT for myeloma/lymphoma: 70-80%, Allogeneic BMT for leukemia (in remission): 60-75%, Thalassemia major (pediatric, matched sibling): 85-90%, Aplastic anemia (matched sibling): 75-85%. Success depends on disease type, stage, patient age, donor match quality, and center expertise. Top Indian BMT centers like Tata Memorial perform 300+ transplants annually.' },
  { question: 'What are the main risks and complications of BMT?', answer: 'Key risks include Graft-versus-Host Disease (GVHD) where donor cells attack the patient body (30-50% in allogeneic), infections during neutropenic period, organ toxicity from conditioning chemotherapy, graft failure (2-5%), veno-occlusive disease of the liver, and late effects like secondary cancers or infertility. Indian hospitals have dedicated GVHD management teams, laminar airflow rooms, and 24/7 BMT-trained nursing to minimize complications.' },
  { question: 'How long do I need to stay in India for BMT?', answer: 'Plan for 2-3 months total stay. Pre-transplant workup takes 1-2 weeks (HLA typing, conditioning). Hospital stay is 3-4 weeks in isolation post-transplant. The critical 100-day post-transplant monitoring requires staying near the hospital with weekly visits. Some patients arrange to return home after 6-8 weeks if their local hematologist can manage follow-up. Shifa Al Hind arranges nearby serviced apartments for the extended stay.' },
  { question: 'Does insurance cover bone marrow transplant in India?', answer: 'Many international insurance plans cover BMT in India as it is significantly cheaper. Some Gulf-country government programs specifically fund BMT abroad. Indian hospitals provide detailed cost estimates and treatment plans required for insurance pre-authorization. Shifa Al Hind assists with insurance documentation, pre-approval letters, and itemized billing. Self-pay patients can save $100,000-400,000+ compared to USA pricing even without insurance coverage.' }
];

const RELATED_ARTICLES = [
  { title: 'Medical Visa India Guide', href: '/blog/medical-visa-india-complete-guide', description: 'Complete visa process for medical tourists' },
  { title: 'Best Hospitals Mumbai', href: '/blog/best-hospitals-mumbai-medical-tourism', description: 'Top JCI/NABH-accredited hospitals in Mumbai' },
  { title: 'Blood Cancer Treatment India', href: '/treatments/blood-cancer-treatment-india', description: 'Comprehensive blood cancer treatment guide' },
];

export default async function BoneMarrowTransplantIndiaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb Schema for SEO */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://shifaalhind.onrender.com' },
        { name: 'Treatments', url: 'https://shifaalhind.onrender.com/treatments' },
        { name: 'Bone Marrow Transplant in India', url: 'https://shifaalhind.onrender.com/treatments/bone-marrow-transplant-india' }
      ]} />

      {/* Medical Procedure Schema for SEO */}
      <MedicalProcedureSchema
        name="Bone Marrow Transplant (Stem Cell Transplant)"
        description="Bone marrow transplant replaces damaged or destroyed bone marrow with healthy stem cells to treat blood cancers, blood disorders, and immune deficiencies."
        procedureType="SurgicalProcedure"
        bodyLocation="Bone Marrow"
        preparation="HLA typing, conditioning chemotherapy/radiation, blood tests, donor evaluation, organ function assessment, dental clearance."
        followup="100-day critical monitoring, GVHD surveillance, immunosuppressant management, regular blood counts, infection prophylaxis, long-term immune reconstitution follow-up."
        url="https://shifaalhind.onrender.com/treatments/bone-marrow-transplant-india"
      />

      {/* FAQ Schema for SEO */}
      <FAQSchema faqs={FAQ_DATA} />

      {/* Hero Section */}
      <section className="mb-12">
        <h1 className="mb-4 text-3xl md:text-4xl font-bold text-gray-900">Bone Marrow Transplant in India: Complete Guide 2025</h1>
        <p className="text-xl text-gray-700 mb-6">
          Get life-saving bone marrow transplant (BMT) in India at 75-85% lower cost than USA/UK. Autologous and allogeneic stem cell transplants from $15,000-30,000 with 60-80% success rates at NABH-accredited BMT centers with HEPA-filtered isolation rooms.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/booking">
            <Button size="lg" className="w-full sm:w-auto">
              Get Free Consultation
            </Button>
          </Link>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              WhatsApp Us
            </Button>
          </a>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="mb-12">
        <div className="grid gap-6 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary-600">$15,000-30,000</div>
              <p className="text-sm text-gray-600">BMT Cost in India</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary-600">60-80%</div>
              <p className="text-sm text-gray-600">Success Rate</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary-600">75-85%</div>
              <p className="text-sm text-gray-600">Cost Savings vs USA</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary-600">2-3 Months</div>
              <p className="text-sm text-gray-600">Total Stay Duration</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl md:text-3xl font-bold text-gray-900">BMT Cost: India vs USA vs UK vs UAE</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Procedure Type</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">India</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">USA</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">UK</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">UAE</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Autologous BMT</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">$15,000 - $20,000</td>
                <td className="border border-gray-300 px-4 py-3">$150,000 - $250,000</td>
                <td className="border border-gray-300 px-4 py-3">$120,000 - $200,000</td>
                <td className="border border-gray-300 px-4 py-3">$80,000 - $120,000</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold">85-90%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Allogeneic BMT (Related Donor)</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">$20,000 - $30,000</td>
                <td className="border border-gray-300 px-4 py-3">$250,000 - $400,000</td>
                <td className="border border-gray-300 px-4 py-3">$200,000 - $350,000</td>
                <td className="border border-gray-300 px-4 py-3">$120,000 - $200,000</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold">85-92%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Allogeneic BMT (Unrelated Donor)</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">$25,000 - $35,000</td>
                <td className="border border-gray-300 px-4 py-3">$350,000 - $500,000</td>
                <td className="border border-gray-300 px-4 py-3">$280,000 - $420,000</td>
                <td className="border border-gray-300 px-4 py-3">$150,000 - $250,000</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold">85-93%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Haploidentical Transplant</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">$22,000 - $32,000</td>
                <td className="border border-gray-300 px-4 py-3">$300,000 - $450,000</td>
                <td className="border border-gray-300 px-4 py-3">$250,000 - $380,000</td>
                <td className="border border-gray-300 px-4 py-3">$130,000 - $220,000</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold">85-93%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Mini/Reduced Intensity Transplant</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">$18,000 - $25,000</td>
                <td className="border border-gray-300 px-4 py-3">$200,000 - $350,000</td>
                <td className="border border-gray-300 px-4 py-3">$160,000 - $280,000</td>
                <td className="border border-gray-300 px-4 py-3">$100,000 - $180,000</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold">86-91%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          <strong>Note:</strong> Costs include pre-transplant workup, conditioning chemotherapy, stem cell collection/infusion, 3-4 weeks hospitalization in isolation, medications, and initial 100-day follow-up. Donor search registry fees (for unrelated donors) may be additional.
        </p>
      </section>

      {/* What's Included */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl md:text-3xl font-bold text-gray-900">What&apos;s Included in BMT Package?</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Pre-Transplant Workup</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>HLA typing and donor matching</li>
                <li>Conditioning chemotherapy/radiation planning</li>
                <li>Complete blood tests (CBC, metabolic panel, viral screens)</li>
                <li>Donor evaluation and stem cell harvesting</li>
                <li>Cardiac, pulmonary, and organ function tests</li>
                <li>Central line (Hickman catheter) insertion</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Transplant Day (Day 0)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Stem cell infusion via central venous catheter</li>
                <li>Continuous vital sign monitoring</li>
                <li>Anti-rejection medication administration</li>
                <li>Dedicated BMT nursing team</li>
                <li>Transfusion support if needed</li>
                <li>HEPA-filtered positive-pressure isolation room</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Hospital Stay (3-4 Weeks Isolation)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Laminar airflow isolation room</li>
                <li>Daily blood counts and monitoring</li>
                <li>Infection prophylaxis (antiviral, antifungal, antibacterial)</li>
                <li>Platelet and red blood cell transfusions</li>
                <li>Nutritional support and dietitian consultation</li>
                <li>Engraftment monitoring (neutrophil recovery)</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Follow-Up (100-Day Monitoring)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>100-day critical post-transplant monitoring</li>
                <li>GVHD surveillance and management</li>
                <li>Regular blood tests (weekly then bi-weekly)</li>
                <li>Immunosuppressant dose adjustments</li>
                <li>Chimerism studies to assess donor cell engraftment</li>
                <li>Vaccination schedule planning post-immune reconstitution</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Procedure Comparison: Autologous vs Allogeneic */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl md:text-3xl font-bold text-gray-900">Autologous vs Allogeneic Transplant: Which Is Right for You?</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Factor</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Autologous Transplant</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Allogeneic Transplant</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Donor</td>
                <td className="border border-gray-300 px-4 py-3">Patient&apos;s own stem cells</td>
                <td className="border border-gray-300 px-4 py-3">Matched sibling, unrelated donor, or haploidentical</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Conditioning</td>
                <td className="border border-gray-300 px-4 py-3">High-dose chemotherapy</td>
                <td className="border border-gray-300 px-4 py-3">Myeloablative or reduced-intensity chemo +/- radiation</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">GVHD Risk</td>
                <td className="border border-gray-300 px-4 py-3">None (own cells)</td>
                <td className="border border-gray-300 px-4 py-3">30-50% (acute or chronic)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Engraftment</td>
                <td className="border border-gray-300 px-4 py-3">10-14 days (faster)</td>
                <td className="border border-gray-300 px-4 py-3">14-21 days</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Cost in India</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">$15,000 - $20,000</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">$20,000 - $35,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Best For</td>
                <td className="border border-gray-300 px-4 py-3">Multiple myeloma, relapsed lymphoma</td>
                <td className="border border-gray-300 px-4 py-3">Leukemia (AML, ALL), thalassemia, aplastic anemia, MDS</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Top 3 Hospitals */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl md:text-3xl font-bold text-gray-900">Top 3 Hospitals for Bone Marrow Transplant in India</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Tata Memorial Hospital, Mumbai</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Doctors</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Dr. Navin Khattry - BMT & Hematology Head</li>
                    <li>Dr. Sachin Punatar - Transplant Specialist</li>
                    <li>Dr. Anant Gokarn - Pediatric BMT</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technology</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>HEPA-filtered BMT suites (Class 100 clean rooms)</li>
                    <li>Flow cytometry and molecular diagnostics lab</li>
                    <li>In-house HLA typing laboratory</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cost</h4>
                  <p className="text-green-600 font-semibold">$15,000 - $28,000</p>
                  <p className="text-sm text-gray-600">300+ transplants annually, government-subsidized pricing</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Why Choose</h4>
                  <p className="text-gray-700">India&apos;s premier cancer center with highest transplant volume. Internationally recognized research in haploidentical BMT. Most affordable pricing among top-tier centers.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Apollo BMT Centre, Chennai & Delhi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Doctors</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Dr. Revathi Raj - Director BMT Program</li>
                    <li>Dr. Dinesh Bhurani - Senior Hematologist</li>
                    <li>Dr. Gaurav Kharya - Pediatric BMT Lead</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technology</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Dedicated 20-bed BMT unit with positive pressure rooms</li>
                    <li>CliniMACS cell processing system</li>
                    <li>Advanced apheresis and cryopreservation facility</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cost</h4>
                  <p className="text-green-600 font-semibold">$20,000 - $32,000</p>
                  <p className="text-sm text-gray-600">JCI-accredited, 1,500+ transplants performed to date</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Why Choose</h4>
                  <p className="text-gray-700">Multi-city presence with established international patient department. Arabic-speaking coordinators available. Comprehensive packages including accommodation for long-stay BMT patients.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Narayana Health, Bangalore</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Doctors</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Dr. Sunil Bhat - Director, Paediatric Haematology & BMT</li>
                    <li>Dr. Sharat Damodar - Clinical Hematologist</li>
                    <li>Dr. Niti Raizada - Adult BMT Specialist</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technology</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>State-of-the-art BMT unit with 15 isolation beds</li>
                    <li>CAR T-cell therapy capability</li>
                    <li>NGS-based minimal residual disease (MRD) testing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cost</h4>
                  <p className="text-green-600 font-semibold">$16,000 - $28,000</p>
                  <p className="text-sm text-gray-600">700+ BMT procedures, known for value-based care</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Why Choose</h4>
                  <p className="text-gray-700">Renowned for pediatric thalassemia BMT program with 90%+ cure rate. Most affordable pricing among private hospitals. Strong outcomes in haploidentical and cord blood transplants.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl md:text-3xl font-bold text-gray-900">Recovery Timeline After Bone Marrow Transplant</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Day 0-14: Engraftment Phase</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Severe neutropenia (near-zero white blood cells)</li>
                <li>Strict isolation in HEPA-filtered room</li>
                <li>Daily blood counts to track engraftment</li>
                <li>Platelet and red cell transfusions as needed</li>
                <li>IV antibiotics, antifungals, and antivirals</li>
                <li>Mucositis management and nutritional support</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Day 15-30: Early Recovery</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Neutrophil engraftment (ANC &gt; 500) typically by day 14-21</li>
                <li>Gradual reduction in transfusion requirements</li>
                <li>Transition from IV to oral medications</li>
                <li>Monitoring for acute GVHD signs (skin, gut, liver)</li>
                <li>Discharge from isolation when counts stable</li>
                <li>Begin light ambulation and physiotherapy</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Day 30-100: Critical Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Weekly outpatient visits for blood work</li>
                <li>GVHD assessment and immunosuppressant adjustment</li>
                <li>CMV and EBV viral load monitoring</li>
                <li>Chimerism studies at day 30 and day 100</li>
                <li>Gradual diet liberalization</li>
                <li>Day 100 milestone: major risk period ends</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Months 3-12+: Immune Reconstitution</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Gradual tapering of immunosuppressive medications</li>
                <li>Monthly then quarterly blood tests</li>
                <li>Chronic GVHD management if present</li>
                <li>Re-vaccination program (starting at 6-12 months)</li>
                <li>Return to normal activities by 6-12 months</li>
                <li>Long-term survivorship care and screening</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Internal Links */}
      <div className="mb-12">
        <InternalLinks links={[
          { text: 'View All Treatments', href: '/treatments' },
          { text: 'Blood Cancer Treatment India', href: '/treatments/blood-cancer-treatment-india' },
          { text: 'Cancer Treatment India', href: '/treatments/cancer-treatment-india' },
          { text: 'Our Hospitals', href: '/hospitals' },
        ]} />
      </div>

      {/* Social Share */}
      <div className="mb-12">
        <SocialShare title="Bone Marrow Transplant India 2025: Cost $15,000-30,000, Best Hospitals" description="Bone marrow transplant in India costs $15,000-30,000 vs $300,000+ in USA. 60-80% success rate at top BMT centers. Complete guide with hospitals, recovery timeline, and FAQ." />
      </div>

      {/* Related Articles */}
      <div className="mb-12">
        <RelatedArticles articles={RELATED_ARTICLES} />
      </div>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl md:text-3xl font-bold text-gray-900">Frequently Asked Questions About BMT in India</h2>
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="mb-12">
        <Testimonials testimonials={TREATMENT_TESTIMONIALS['generic']} />
      </section>

      {/* Trust Badges */}
      <section className="mb-12">

      {/* Contextual Sidebar - Related Treatment Links */}
      <ContextualSidebar treatmentSlug="bone-marrow-transplant-india" locale={locale as 'en' | 'ar'} />
        <TrustBadges />
      </section>

      {/* Final CTA */}
      <section className="mb-12">
        <Card className="bg-green-50 border-green-200">
          <CardContent className="pt-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Ready to Start Your BMT Journey in India?</h2>
            <p className="mb-6 text-gray-700">
              Get a free consultation with top BMT specialists. We help with hospital selection, donor coordination, visa, accommodation, and 100-day post-transplant support.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/booking">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Free Consultation
                </Button>
              </Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-green-600 text-green-700 hover:bg-green-100">
                  WhatsApp Us Now
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* SEO: HowTo + Offer + Speakable Schemas */}
      <TreatmentSchemas
        treatmentName="Bone Marrow Transplant"
        lowPrice={20000}
        highPrice={40000}
        url="/en/treatments/bone-marrow-transplant-india"
      />
    </div>
  );
}

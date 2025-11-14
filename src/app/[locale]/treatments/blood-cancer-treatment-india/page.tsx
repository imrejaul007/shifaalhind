import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles, CANCER_RELATED_ARTICLES } from '@/components/blog/related-articles';
import { InternalLinks } from '@/components/seo/internal-links';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blood Cancer Treatment in India 2025: Leukemia, Lymphoma, Myeloma | Cost, Best Oncology Hospitals, Success Rate',
  description: 'Comprehensive blood cancer treatment in India. Leukemia, Lymphoma, Myeloma treatment. Chemotherapy ($1,500-3,000/cycle), Bone Marrow Transplant ($25,000-45,000), Targeted Therapy ($5,000-12,000). Top oncology hospitals, 60-85% success rate, save 70-85% vs USA.',
  keywords: [
    'blood cancer treatment india',
    'leukemia treatment india',
    'lymphoma treatment india',
    'myeloma treatment india',
    'blood cancer hospital india',
    'blood cancer chemotherapy india',
    'bone marrow transplant india',
    'oncology hospital india',
    'علاج سرطان الدم في الهند',
    'تكلفة علاج سرطان الدم في الهند',
    'مستشفيات الأورام في الهند',
    'علاج اللوكيميا في الهند',
    'علاج الليمفوما في الهند',
  ],
};

export const dynamic = 'force-dynamic';

export default function BloodCancerTreatmentIndiaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* FAQ Schema for Rich Snippets */}
      <FAQSchema faqs={[
        { question: "How much does blood cancer treatment cost in India?", answer: "Chemotherapy: $1,500-3,000 per cycle (6-8 cycles typical), Bone Marrow Transplant (BMT): $25,000-45,000, Targeted Therapy: $5,000-12,000, Radiation: $4,000-6,000, Immunotherapy: $8,000-15,000. Total treatment cost: $30,000-80,000 vs $150,000-500,000 in USA (70-85% savings)." },
        { question: "What are the success rates for blood cancer treatment in India?", answer: "Success rates by cancer type: Acute Lymphoblastic Leukemia (ALL): 85-90% remission (children), 40-60% (adults); Acute Myeloid Leukemia (AML): 60-70% remission; Chronic Myeloid Leukemia (CML): 80-90% long-term survival with targeted therapy; Hodgkin Lymphoma: 85-90% cure rate; Non-Hodgkin Lymphoma: 60-80% 5-year survival; Multiple Myeloma: 70-80% with transplant + targeted therapy." },
        { question: "How long does blood cancer treatment take?", answer: "Treatment duration varies by type: Leukemia: 2-3 years (maintenance chemotherapy), Lymphoma: 6-12 months (chemotherapy + radiation), Myeloma: Ongoing treatment (transplant + maintenance therapy). Bone Marrow Transplant: 3-6 months in India (1 month hospital + 2-5 months recovery). Most patients stay 6-12 months for complete treatment protocol." },
        { question: "What is the difference between leukemia, lymphoma, and myeloma?", answer: "Leukemia: Cancer of blood-forming tissues (bone marrow), affects white blood cells, circulates in bloodstream. Lymphoma: Cancer of lymphatic system (lymph nodes, spleen), affects lymphocytes. Myeloma: Cancer of plasma cells in bone marrow, produces abnormal antibodies. All are blood cancers but originate in different cells and require different treatment approaches." },
        { question: "Is bone marrow transplant necessary for blood cancer?", answer: "Not always necessary. BMT recommended for: High-risk leukemia (relapsed/refractory cases), Multiple myeloma (after initial chemotherapy), Aggressive lymphoma (if chemotherapy insufficient). BMT not needed for: Chronic Myeloid Leukemia (targeted therapy very effective), Low-grade lymphomas (chemotherapy + radiation sufficient), Early-stage cancers with good response to treatment. Oncologist decides based on disease stage, risk factors, patient age/health." },
        { question: "Can blood cancer be cured completely?", answer: "Yes, many blood cancers are curable: Hodgkin Lymphoma: 85-90% cure rate, Acute Lymphoblastic Leukemia (children): 85-90% cure rate, Chronic Myeloid Leukemia: 80-90% long-term disease control. Some blood cancers are manageable but not always cured: Multiple Myeloma: long-term remission possible (5-10+ years), Chronic Lymphocytic Leukemia: manageable as chronic disease. Early diagnosis and modern treatments (targeted therapy, immunotherapy, BMT) have dramatically improved cure rates." },
        { question: "What are targeted therapies for blood cancer?", answer: "Targeted therapies attack cancer cells without harming normal cells. Examples: Imatinib (Gleevec) for CML ($500-800/month in India), Rituximab for lymphoma ($1,500-2,500/dose), Bortezomib for myeloma ($800-1,200/dose), CAR T-cell therapy (emerging in India, $50,000-80,000). Benefits: Fewer side effects than chemotherapy, better outcomes (80-90% response in CML), can be taken as pills at home (some), combined with chemotherapy for better results." },
        { question: "How safe is blood cancer treatment in India?", answer: "Very safe at JCI/NABH accredited hospitals. Top oncology centers have: International protocols (NCCN guidelines), Modern facilities (HEPA-filtered BMT units, state-of-the-art chemotherapy suites), Expert oncologists (trained at MD Anderson, Mayo Clinic, Memorial Sloan Kettering), Success rates comparable to USA/Europe (60-90% depending on cancer type), Complication rates: <5% with proper supportive care. India has world-class infrastructure for blood cancer treatment at affordable cost." }
      ]} />

      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Blood Cancer Treatment in India</h1>
        <p className="text-xl text-gray-600 mb-6">
          Comprehensive blood cancer treatment in India (Leukemia, Lymphoma, Myeloma). Chemotherapy, Bone Marrow Transplant, Targeted Therapy. Save 70-85% vs USA. Top oncology hospitals.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg">
            <Link href="/booking">Get Free Consultation</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">$30K-80K</div>
            <div className="text-gray-600">Total Treatment Cost</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">60-90%</div>
            <div className="text-gray-600">Success Rate</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">70-85%</div>
            <div className="text-gray-600">Savings vs USA</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">6-12 Months</div>
            <div className="text-gray-600">Treatment Duration</div>
          </CardContent>
        </Card>
      </div>

      {/* Cost Comparison */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Blood Cancer Treatment Cost Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-green-50">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Treatment Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left">India 🇮🇳</th>
                <th className="border border-gray-300 px-4 py-2 text-left">USA 🇺🇸</th>
                <th className="border border-gray-300 px-4 py-2 text-left">UK 🇬🇧</th>
                <th className="border border-gray-300 px-4 py-2 text-left">UAE 🇦🇪</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Chemotherapy (Per Cycle)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$1,500-3,000</td>
                <td className="border border-gray-300 px-4 py-2">$10,000-20,000</td>
                <td className="border border-gray-300 px-4 py-2">£8,000-16,000 ($10,120-20,240)</td>
                <td className="border border-gray-300 px-4 py-2">AED 30,000-60,000 ($8,175-16,350)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">70-85%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Bone Marrow Transplant (BMT)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$25,000-45,000</td>
                <td className="border border-gray-300 px-4 py-2">$200,000-400,000</td>
                <td className="border border-gray-300 px-4 py-2">£160,000-320,000 ($202,400-404,800)</td>
                <td className="border border-gray-300 px-4 py-2">AED 500,000-900,000 ($136,250-245,250)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">80-90%</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Targeted Therapy (Per Month)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$500-1,500</td>
                <td className="border border-gray-300 px-4 py-2">$5,000-15,000</td>
                <td className="border border-gray-300 px-4 py-2">£4,000-12,000 ($5,060-15,180)</td>
                <td className="border border-gray-300 px-4 py-2">AED 15,000-45,000 ($4,088-12,263)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">75-85%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Radiation Therapy (Full Course)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$4,000-6,000</td>
                <td className="border border-gray-300 px-4 py-2">$30,000-50,000</td>
                <td className="border border-gray-300 px-4 py-2">£24,000-40,000 ($30,360-50,600)</td>
                <td className="border border-gray-300 px-4 py-2">AED 90,000-150,000 ($24,525-40,875)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">75-85%</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Immunotherapy (Per Cycle)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$2,000-4,000</td>
                <td className="border border-gray-300 px-4 py-2">$15,000-30,000</td>
                <td className="border border-gray-300 px-4 py-2">£12,000-24,000 ($15,180-30,360)</td>
                <td className="border border-gray-300 px-4 py-2">AED 45,000-90,000 ($12,263-24,525)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">75-85%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Complete Treatment Package</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$30,000-80,000</td>
                <td className="border border-gray-300 px-4 py-2">$150,000-500,000</td>
                <td className="border border-gray-300 px-4 py-2">£120,000-400,000 ($151,800-506,000)</td>
                <td className="border border-gray-300 px-4 py-2">AED 400,000-1,200,000 ($109,000-327,000)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">70-85%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* What's Included */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">What&apos;s Included in Blood Cancer Treatment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Diagnosis &amp; Staging</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Complete blood count (CBC) and blood chemistry</li>
                <li>Bone marrow biopsy and aspiration</li>
                <li>Flow cytometry and immunophenotyping</li>
                <li>Genetic testing (chromosomal analysis, molecular markers)</li>
                <li>Imaging (PET-CT, MRI, X-ray for staging)</li>
                <li>Oncologist consultation and treatment planning</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Chemotherapy Treatment</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Chemotherapy drugs (6-8 cycles typical)</li>
                <li>Pre-medications (anti-nausea, hydration)</li>
                <li>Daycare or inpatient chemotherapy administration</li>
                <li>Blood tests before each cycle (CBC, liver/kidney function)</li>
                <li>Supportive care (growth factors, antibiotics if needed)</li>
                <li>Management of side effects</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Advanced Therapies</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Targeted therapy medications (oral or IV)</li>
                <li>Immunotherapy (monoclonal antibodies, checkpoint inhibitors)</li>
                <li>Bone Marrow Transplant (if indicated)</li>
                <li>Radiation therapy (if needed for lymphoma)</li>
                <li>CAR T-cell therapy (emerging in India)</li>
                <li>Clinical trials access (latest treatments)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Follow-up &amp; Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Regular blood tests (CBC, chemistry panel)</li>
                <li>Bone marrow biopsies (to check remission status)</li>
                <li>PET-CT scans (every 3-6 months for lymphoma)</li>
                <li>Oncologist follow-up appointments</li>
                <li>Management of long-term effects</li>
                <li>Telemedicine support for international patients</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Success Rates by Cancer Type */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Success Rates by Blood Cancer Type</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-green-50">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Blood Cancer Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Primary Treatment</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Success Rate</th>
                <th className="border border-gray-300 px-4 py-2 text-left">5-Year Survival</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Acute Lymphoblastic Leukemia (ALL) - Children</td>
                <td className="border border-gray-300 px-4 py-2">Chemotherapy (2-3 years)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">85-90% remission</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">85-90%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Acute Lymphoblastic Leukemia (ALL) - Adults</td>
                <td className="border border-gray-300 px-4 py-2">Chemotherapy + BMT (high-risk)</td>
                <td className="border border-gray-300 px-4 py-2 text-orange-600 font-semibold">40-60% remission</td>
                <td className="border border-gray-300 px-4 py-2 text-orange-600">40-60%</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Acute Myeloid Leukemia (AML)</td>
                <td className="border border-gray-300 px-4 py-2">Chemotherapy + BMT</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">60-70% remission</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">40-50%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Chronic Myeloid Leukemia (CML)</td>
                <td className="border border-gray-300 px-4 py-2">Targeted Therapy (Imatinib/Gleevec)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">80-90% long-term control</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">80-90%</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Chronic Lymphocytic Leukemia (CLL)</td>
                <td className="border border-gray-300 px-4 py-2">Watch &amp; Wait or Targeted Therapy</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">70-80% long-term control</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">75-85%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Hodgkin Lymphoma</td>
                <td className="border border-gray-300 px-4 py-2">Chemotherapy + Radiation</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">85-90% cure rate</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">85-90%</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Non-Hodgkin Lymphoma (Aggressive)</td>
                <td className="border border-gray-300 px-4 py-2">Chemotherapy + Immunotherapy</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">60-80% remission</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">60-70%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Multiple Myeloma</td>
                <td className="border border-gray-300 px-4 py-2">Chemotherapy + BMT + Targeted Therapy</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">70-80% remission</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">50-60%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Top Hospitals */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Top 5 Blood Cancer Treatment Hospitals in India</h2>
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Tata Memorial Hospital - Mumbai</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                <strong>Specialty:</strong> Hematology &amp; Oncology (Government Hospital)<br />
                <strong>Success Rate:</strong> 75-85% across all blood cancers<br />
                <strong>Infrastructure:</strong> 629 beds, dedicated BMT unit, advanced chemotherapy suites, research institute
              </p>
              <p className="mb-4">
                <strong>Key Doctors:</strong> Dr. Manju Sengar (ALL specialist), Dr. Navin Khattry (BMT expert)
              </p>
              <p className="mb-4">
                <strong>Technology:</strong> CAR T-cell therapy (India&apos;s first), Flow cytometry, Next-generation sequencing
              </p>
              <p className="mb-4">
                <strong>Cost:</strong> Chemotherapy $1,500-2,500/cycle, BMT $25,000-35,000 (subsidized rates available)
              </p>
              <p>
                <strong>Why Choose:</strong> India&apos;s premier cancer hospital, government pricing (50-70% cheaper), excellent outcomes, research-driven protocols, international referrals accepted
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Apollo Hospitals - Chennai, Delhi, Mumbai</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                <strong>Specialty:</strong> Hematology, Oncology &amp; BMT<br />
                <strong>Success Rate:</strong> 70-80% across all blood cancers<br />
                <strong>Infrastructure:</strong> HEPA-filtered BMT units, 100+ chemotherapy daycare beds, molecular diagnostics lab
              </p>
              <p className="mb-4">
                <strong>Key Doctors:</strong> Dr. Suresh Ramalingam (hematologist), Dr. Revathi Raj (BMT specialist)
              </p>
              <p className="mb-4">
                <strong>Technology:</strong> Advanced flow cytometry, Genetic testing, Targeted therapy access
              </p>
              <p className="mb-4">
                <strong>Cost:</strong> Chemotherapy $2,000-3,000/cycle, BMT $30,000-45,000
              </p>
              <p>
                <strong>Why Choose:</strong> JCI accredited, 1,500+ BMT procedures, international patient services, Arabic coordinators for GCC patients
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Fortis Memorial Research Institute - Gurgaon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                <strong>Specialty:</strong> Hemato-Oncology &amp; BMT<br />
                <strong>Success Rate:</strong> 75-85% for Hodgkin lymphoma, 60-70% for leukemia<br />
                <strong>Infrastructure:</strong> State-of-the-art BMT unit, advanced chemotherapy suites, 24/7 hematology lab
              </p>
              <p className="mb-4">
                <strong>Key Doctors:</strong> Dr. Rahul Bhargava (BMT expert, 1,000+ transplants), Dr. Gaurav Kharya (pediatric BMT)
              </p>
              <p className="mb-4">
                <strong>Technology:</strong> Haploidentical BMT, Cord blood transplant, CAR T-cell therapy (clinical trials)
              </p>
              <p className="mb-4">
                <strong>Cost:</strong> Chemotherapy $1,800-2,800/cycle, BMT $28,000-40,000
              </p>
              <p>
                <strong>Why Choose:</strong> NABH/JCI accredited, excellent pediatric BMT program, international insurance accepted, high success rates
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. BLK-Max Super Speciality Hospital - Delhi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                <strong>Specialty:</strong> Hemato-Oncology &amp; Bone Marrow Transplant<br />
                <strong>Success Rate:</strong> 70-80% across all blood cancers<br />
                <strong>Infrastructure:</strong> Dedicated BMT center (200+ transplants annually), advanced hematology lab
              </p>
              <p className="mb-4">
                <strong>Key Doctors:</strong> Dr. Dharma Choudhary (BMT specialist), Dr. Vinod Raina (medical oncologist)
              </p>
              <p className="mb-4">
                <strong>Technology:</strong> Advanced immunophenotyping, Minimal residual disease (MRD) monitoring, Targeted therapy
              </p>
              <p className="mb-4">
                <strong>Cost:</strong> Chemotherapy $1,700-2,700/cycle, BMT $27,000-38,000
              </p>
              <p>
                <strong>Why Choose:</strong> NABH accredited, specialized BMT unit, competitive pricing, excellent support for international patients
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. HCG Cancer Centre - Bangalore</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                <strong>Specialty:</strong> Medical Oncology &amp; Hemato-Oncology<br />
                <strong>Success Rate:</strong> 65-75% across all blood cancers<br />
                <strong>Infrastructure:</strong> Multi-specialty cancer hospital, advanced chemotherapy daycare, BMT facilities
              </p>
              <p className="mb-4">
                <strong>Key Doctors:</strong> Dr. K. Govind Babu (hemato-oncologist), Dr. Srinath B.S. (BMT specialist)
              </p>
              <p className="mb-4">
                <strong>Technology:</strong> PET-CT for staging, Genetic profiling, Immunotherapy access
              </p>
              <p className="mb-4">
                <strong>Cost:</strong> Chemotherapy $1,600-2,600/cycle, BMT $26,000-37,000
              </p>
              <p>
                <strong>Why Choose:</strong> Dedicated cancer center, NABH accredited, comprehensive care (diagnosis to follow-up), good value for money
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Treatment Timeline */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Blood Cancer Treatment Timeline</h2>
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Week 1-2: Diagnosis &amp; Staging</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2"><strong>What Happens:</strong></p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Complete blood tests (CBC, blood chemistry, liver/kidney function)</li>
                <li>Bone marrow biopsy and aspiration (diagnosis confirmation)</li>
                <li>Flow cytometry and immunophenotyping (identify cancer cell type)</li>
                <li>Genetic testing (chromosomal abnormalities, molecular markers)</li>
                <li>Imaging (PET-CT, MRI, chest X-ray for staging)</li>
                <li>Oncologist consultation (treatment plan discussion)</li>
              </ul>
              <p><strong>Activity:</strong> Outpatient appointments, awaiting test results, treatment planning</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Month 1-6: Induction Chemotherapy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2"><strong>What Happens:</strong></p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>First phase chemotherapy (induction) to achieve remission</li>
                <li>4-6 cycles of intensive chemotherapy (3-4 weeks per cycle)</li>
                <li>Daycare or short hospital stays (1-3 days per cycle)</li>
                <li>Supportive care (growth factors, antibiotics, blood transfusions if needed)</li>
                <li>Regular blood tests (before each cycle)</li>
                <li>Bone marrow biopsy (after 2-3 cycles to check response)</li>
              </ul>
              <p className="mb-2"><strong>Side Effects:</strong> Fatigue, nausea, hair loss, low blood counts (manageable with medications)</p>
              <p><strong>Activity:</strong> Rest between cycles, avoid infections (low immunity), continue light daily activities</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Month 6-12: Consolidation/Maintenance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2"><strong>What Happens:</strong></p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Bone Marrow Transplant (if indicated):</strong> 3-6 months in India (1 month hospital + 2-5 months recovery)</li>
                <li><strong>Consolidation chemotherapy:</strong> 2-4 additional cycles (lower doses, prevent relapse)</li>
                <li><strong>Maintenance therapy:</strong> Low-dose chemotherapy or targeted therapy (ongoing for 1-3 years)</li>
                <li><strong>Radiation (lymphoma):</strong> 2-4 weeks (daily treatments)</li>
                <li>Regular follow-up (blood tests, bone marrow biopsies every 3 months)</li>
              </ul>
              <p><strong>Activity:</strong> Gradual return to normal activities, avoid infections, maintain nutrition</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Year 1-5+: Long-Term Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2"><strong>What Happens:</strong></p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Regular follow-up appointments (every 3-6 months)</li>
                <li>Blood tests (CBC, chemistry panel) to monitor for relapse</li>
                <li>Bone marrow biopsies (every 6-12 months for first 2 years)</li>
                <li>PET-CT scans (every 6 months for lymphoma, first 2 years)</li>
                <li>Management of long-term effects (fatigue, secondary cancers, organ damage)</li>
                <li>Psychological support and survivorship programs</li>
              </ul>
              <p className="mb-2"><strong>Remission:</strong> Most patients achieve complete remission (no evidence of disease) after treatment</p>
              <p><strong>Activity:</strong> Full return to normal life, work, travel (after 1-2 years), continue healthy lifestyle</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Internal Links */}
      <InternalLinks
        title="Related Treatment Pages"
        links={[
          { title: 'Bone Marrow Transplant India', href: '/blog/bone-marrow-transplant-india-guide', description: 'BMT for leukemia, lymphoma, myeloma' },
          { title: 'Breast Cancer Treatment India', href: '/treatments/breast-cancer-treatment-india', description: 'Comprehensive breast cancer care' },
          { title: 'Best Oncology Hospitals Mumbai', href: '/blog/best-hospitals-mumbai-medical-tourism', description: 'Top cancer hospitals Mumbai' },
        ]}
        variant="compact"
      />

      {/* Social Share */}
      <SocialShare
        title="Blood Cancer Treatment in India 2025"
        url="/treatments/blood-cancer-treatment-india"
        description="Comprehensive blood cancer treatment in India (Leukemia, Lymphoma, Myeloma). Chemotherapy, Bone Marrow Transplant, Targeted Therapy. Save 70-85% vs USA."
      />

      {/* Related Articles */}
      <RelatedArticles articles={CANCER_RELATED_ARTICLES} />

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">FAQ</h2>
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Can I work during blood cancer treatment?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Depends on treatment intensity and side effects. Induction chemotherapy: Most patients cannot work (fatigue, low immunity, hospital stays). Consolidation/maintenance: Many return to light work (part-time, remote work). Targeted therapy (CML): 70-80% can work full-time (oral medication, fewer side effects). After remission: Most patients return to full work within 6-12 months. Discuss work plans with oncologist. Employers in India/GCC may offer medical leave (6-12 months). International patients typically stay in India for active treatment (6-12 months), then return home for maintenance/follow-up.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What is minimal residual disease (MRD) testing?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                MRD testing detects tiny amounts of cancer cells (1 in 10,000-1,000,000) that are undetectable by regular methods. Done by: Flow cytometry or PCR on bone marrow samples. Why important: Predicts relapse risk (high MRD = higher relapse risk), guides treatment intensity (may need BMT if MRD positive), monitors treatment effectiveness. When tested: After induction chemotherapy (to check remission quality), before BMT (to ensure deep remission), during follow-up (to detect early relapse). Available at top Indian hospitals (Tata Memorial, Apollo, Fortis). MRD-negative remission has better long-term survival (80-90% vs 40-60% MRD-positive).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How is blood cancer different from solid tumors?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Blood cancers (leukemia, lymphoma, myeloma) differ from solid tumors (breast, lung, colon) in: Origin: Blood cancers start in bone marrow or lymphatic system, solid tumors start in organs. Spread: Blood cancers circulate throughout body (cannot be surgically removed), solid tumors grow locally first. Treatment: Blood cancers primarily treated with chemotherapy/targeted therapy/BMT (not surgery), solid tumors often treated with surgery first. Staging: Different staging systems (Ann Arbor for lymphoma, risk stratification for leukemia vs TNM for solid tumors). Detection: Blood cancers often found in blood tests, solid tumors found with imaging. Both are serious but require different treatment approaches.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Should I get a second opinion for blood cancer?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Yes, highly recommended for blood cancer diagnosis and treatment planning. Why get second opinion: Blood cancers have many subtypes (requires expert diagnosis), treatment protocols vary (confirm best approach), BMT decision is major (verify if truly needed), clinical trials available (may offer better options). Where to get second opinion in India: Tata Memorial Hospital Mumbai (India&apos;s premier cancer hospital), Apollo Cancer Centre Chennai, Fortis Memorial Research Institute Gurgaon, BLK-Max Delhi, HCG Bangalore. Timeline: Diagnosis confirmation: 7-10 days (pathology review, flow cytometry), treatment planning: 2-3 weeks (review records, new tests if needed). Cost: $200-500 for comprehensive second opinion (includes expert review, new consultation, treatment plan). Many hospitals offer telemedicine second opinions (no travel required).
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <Card className="bg-green-50">
        <CardContent className="pt-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready for Blood Cancer Treatment in India?</h2>
          <p className="text-gray-600 mb-6">
            Get a free consultation with top hemato-oncologists. Second opinions available.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg">
              <Link href="/booking">Book Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">WhatsApp Now</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

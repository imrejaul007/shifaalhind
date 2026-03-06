import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
  title: 'Diabetes Treatment India 2025: Cost, Best Endocrinologists',
  description:
    'Diabetes treatment in India costs $3,000-8,000 vs $15,000-40,000 in USA. Top endocrinologists, insulin pump therapy, metabolic surgery, stem cell research. Save 75-85% on comprehensive diabetes care.',
  keywords: [
    'diabetes treatment india',
    'diabetes treatment cost india',
    'best endocrinologist india',
    'type 2 diabetes reversal india',
    'metabolic surgery india',
    'insulin pump therapy india',
    'stem cell therapy diabetes india',
    'pancreas transplant india',
    'علاج السكري في الهند',
    'تكلفة علاج السكري في الهند',
  ],
  alternates: {
    canonical: 'https://shifaalhind.onrender.com/en/treatments/diabetes-treatment-india',
    languages: {
      'en-US': 'https://shifaalhind.onrender.com/en/treatments/diabetes-treatment-india',
      'ar-SA': 'https://shifaalhind.onrender.com/ar/treatments/diabetes-treatment-india',
      'x-default': 'https://shifaalhind.onrender.com/en/treatments/diabetes-treatment-india',
    },
  },
};

const RELATED_ARTICLES = [
  { title: 'Medical Visa India Guide', href: '/blog/medical-visa-india-complete-guide', description: 'Complete visa process guide for medical tourists' },
  { title: 'Best Hospitals in Delhi', href: '/blog/best-hospitals-delhi-medical-tourism', description: 'Top 10 JCI-accredited hospitals in Delhi' },
  { title: 'Medical Tourism Guide', href: '/blog/medical-tourism-uae-patients-guide', description: 'Complete guide for GCC patients travelling to India' },
];

const FAQ_DATA = [
  {
    question: 'What types of diabetes are treated in India?',
    answer:
      'Indian hospitals treat all forms of diabetes: Type 1 (autoimmune, insulin-dependent), Type 2 (insulin resistance, lifestyle-related), Gestational Diabetes (pregnancy-related), LADA (Latent Autoimmune Diabetes in Adults), and MODY (Maturity-Onset Diabetes of the Young). Specialized centres also manage rare monogenic forms and secondary diabetes caused by pancreatitis or medications.',
  },
  {
    question: 'How much does insulin pump therapy cost in India?',
    answer:
      'Insulin pump therapy in India costs $2,500-4,500 including the pump device, initial supplies, and endocrinologist programming. In the USA the same setup runs $6,000-10,000. Annual consumables (infusion sets, reservoirs, CGM sensors) cost $1,200-2,400 in India versus $4,000-8,000 in the USA. Most centres offer Medtronic, Tandem, and Omnipod systems.',
  },
  {
    question: 'Can bariatric surgery cure Type 2 diabetes?',
    answer:
      'Metabolic/bariatric surgery achieves diabetes remission in 60-80% of eligible patients with BMI above 30. Procedures like gastric bypass and sleeve gastrectomy alter gut hormones (GLP-1, GIP), improving insulin sensitivity within days. Studies show 5-year remission rates of 60-70%. Cost in India is $4,500-7,000 versus $20,000-35,000 in the USA. Candidates need thorough evaluation by both an endocrinologist and bariatric surgeon.',
  },
  {
    question: 'Is stem cell therapy available for diabetes in India?',
    answer:
      'Several Indian centres offer investigational stem cell therapy for diabetes under clinical trial protocols. Mesenchymal stem cells (MSC) and bone-marrow-derived cells are being studied for Type 1 and Type 2 diabetes. Early results show improved C-peptide levels and reduced insulin requirements in select patients. Costs range from $5,000-8,000 per cycle. Patients should verify the centre holds ICMR approval and discuss realistic expectations with their endocrinologist.',
  },
  {
    question: 'What is the cost and success rate of pancreas transplant in India?',
    answer:
      'Pancreas transplant in India costs $25,000-35,000 versus $150,000-250,000 in the USA. Indicated primarily for Type 1 diabetes with severe hypoglycaemic unawareness or end-stage renal disease (simultaneous pancreas-kidney transplant). Indian centres report 85-90% one-year graft survival. Leading centres include Medanta Gurugram and AIIMS Delhi. Lifelong immunosuppression is required.',
  },
  {
    question: 'How is diet managed during diabetes treatment in India?',
    answer:
      'Each patient receives a personalized meal plan from a certified clinical dietitian. Plans consider cultural food preferences (Middle Eastern, South Asian cuisines), glycaemic index, carbohydrate counting, and calorie goals. Hospitals provide 7-day menu templates, cooking demonstrations, and mobile-app-based food logging. Patients also learn portion control, healthy snacking, and strategies for managing blood sugar during fasting (Ramadan-safe protocols available).',
  },
  {
    question: 'What HbA1c target should patients aim for?',
    answer:
      'The standard target is HbA1c below 7.0% for most adults, which corresponds to an estimated average glucose of approximately 154 mg/dL. Younger patients without complications may target below 6.5%. Older patients or those with hypoglycaemia risk may have a relaxed target of 7.5-8.0%. Indian endocrinologists follow ADA/EASD and RSSDI guidelines and adjust targets based on individual risk profiles, duration of diabetes, and comorbidities.',
  },
  {
    question: 'How do I travel to India with diabetes supplies?',
    answer:
      'Carry a doctor letter listing all medications, insulin, syringes, glucometer, and CGM sensors. Pack insulin in carry-on luggage with ice packs (insulin must not be checked in). Airlines permit syringes and lancets with a prescription letter. Indian pharmacies stock all major insulin brands (Novo Nordisk, Eli Lilly, Sanofi) at 60-80% lower prices. Hospital coordinators arrange pharmacy access and refrigerator storage upon arrival.',
  },
];

export default async function DiabetesTreatmentIndiaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://shifaalhind.onrender.com' },
          { name: 'Treatments', url: 'https://shifaalhind.onrender.com/treatments' },
          { name: 'Diabetes Treatment in India', url: 'https://shifaalhind.onrender.com/treatments/diabetes-treatment-india' },
        ]}
      />
      <MedicalProcedureSchema
        name="Diabetes Treatment & Management"
        description="Comprehensive diabetes treatment including medication optimization, insulin pump therapy, metabolic surgery for Type 2 diabetes, stem cell therapy research, and long-term remote monitoring by top Indian endocrinologists."
        procedureType="TherapeuticProcedure"
        bodyLocation="Pancreas"
        url="https://shifaalhind.onrender.com/treatments/diabetes-treatment-india"
      />
      <FAQSchema faqs={FAQ_DATA} />

      {/* ===== Hero Section ===== */}
      <section className="mb-12 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-16 text-white md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 font-serif text-3xl md:text-4xl font-bold md:text-5xl lg:text-6xl">
            Diabetes Treatment in India
          </h1>
          <p className="mb-8 text-xl text-primary-50 md:text-2xl">
            World-class endocrinology, metabolic surgery, and advanced diabetes technologies -- at 75-85% lower cost than the USA, UK, or UAE.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-accent-500 text-lg hover:bg-accent-600">
              <Link href="/booking">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white bg-transparent text-lg text-white hover:bg-white hover:text-primary-700">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ===== Quick Stats ===== */}
      <section className="mb-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-green-200 bg-green-50 text-center shadow">
            <CardContent className="p-6">
              <p className="text-3xl font-bold text-green-700">$3,000 - $8,000</p>
              <p className="mt-1 text-sm text-green-600">Comprehensive Treatment Cost</p>
            </CardContent>
          </Card>
          <Card className="border-blue-200 bg-blue-50 text-center shadow">
            <CardContent className="p-6">
              <p className="text-3xl font-bold text-blue-700">60 - 80%</p>
              <p className="mt-1 text-sm text-blue-600">T2D Remission with Metabolic Surgery</p>
            </CardContent>
          </Card>
          <Card className="border-purple-200 bg-purple-50 text-center shadow">
            <CardContent className="p-6">
              <p className="text-3xl font-bold text-purple-700">75 - 85%</p>
              <p className="mt-1 text-sm text-purple-600">Savings vs USA / UK / UAE</p>
            </CardContent>
          </Card>
          <Card className="border-amber-200 bg-amber-50 text-center shadow">
            <CardContent className="p-6">
              <p className="text-3xl font-bold text-amber-700">Personalized</p>
              <p className="mt-1 text-sm text-amber-600">Treatment Duration & Plan</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===== Cost Comparison Table ===== */}
      <section className="mb-12">
        <h2 className="mb-2 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">Cost Comparison: India vs World</h2>
        <p className="mb-8 text-center text-lg text-gray-600">Transparent pricing -- save 75-85% with equivalent clinical outcomes</p>
        <Card className="overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Procedure</th>
                  <th className="px-4 py-3 text-center font-semibold">India</th>
                  <th className="px-4 py-3 text-center font-semibold">USA</th>
                  <th className="px-4 py-3 text-center font-semibold">UK</th>
                  <th className="px-4 py-3 text-center font-semibold">UAE</th>
                  <th className="px-4 py-3 text-center font-semibold">Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Insulin Pump Therapy</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$2,500 - $4,500</td>
                  <td className="px-4 py-3 text-center text-gray-600">$6,000 - $10,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$5,500 - $9,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$5,000 - $8,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">55 - 60%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Metabolic / Bariatric Surgery for T2D</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$4,500 - $7,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$20,000 - $35,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$15,000 - $25,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$18,000 - $28,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">75 - 80%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Pancreas Transplant</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$25,000 - $35,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$150,000 - $250,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$100,000 - $180,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$80,000 - $120,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">75 - 85%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Stem Cell Therapy (per cycle)</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$5,000 - $8,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$20,000 - $30,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$18,000 - $28,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$15,000 - $25,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">70 - 75%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Comprehensive Diabetes Assessment</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$300 - $600</td>
                  <td className="px-4 py-3 text-center text-gray-600">$2,000 - $4,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$1,500 - $3,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$1,200 - $2,500</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">80 - 85%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Diabetic Foot Treatment</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$1,500 - $3,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$8,000 - $15,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$6,000 - $12,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$5,000 - $10,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">75 - 80%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      {/* ===== What is Included ===== */}
      <section className="mb-12">
        <h2 className="mb-2 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">What&apos;s Included in Your Treatment</h2>
        <p className="mb-8 text-center text-lg text-gray-600">End-to-end diabetes care from diagnosis to long-term management</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">1. Diagnosis</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>HbA1c and fasting glucose</li>
                <li>Oral glucose tolerance test (OGTT)</li>
                <li>C-peptide and insulin antibodies</li>
                <li>Retinal screening (fundoscopy)</li>
                <li>Kidney function (eGFR, microalbumin)</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">2. Treatment Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Endocrinologist consultation</li>
                <li>Certified clinical dietitian session</li>
                <li>Medication / insulin regimen design</li>
                <li>Metabolic surgery evaluation (if eligible)</li>
                <li>Personalized exercise prescription</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">3. Treatment Phase</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Medication optimization (oral + injectable)</li>
                <li>Insulin pump / CGM initiation</li>
                <li>Metabolic surgery (sleeve / bypass)</li>
                <li>Diabetic foot wound care</li>
                <li>Complication management (nephro, neuro)</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">4. Follow-up</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Remote glucose monitoring via app</li>
                <li>Telemedicine consultations</li>
                <li>Dietitian-led coaching sessions</li>
                <li>Quarterly HbA1c tracking</li>
                <li>Annual complication screening</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===== Procedure Comparison ===== */}
      <section className="mb-12">
        <h2 className="mb-2 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">Procedure Comparison</h2>
        <p className="mb-8 text-center text-lg text-gray-600">Medication Management vs Metabolic Surgery for Type 2 Diabetes</p>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="shadow-lg">
            <CardHeader className="bg-blue-50">
              <CardTitle>Medication Management</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3 text-sm text-gray-700">
                <li><strong>Approach:</strong> Oral drugs (metformin, SGLT2i, GLP-1 RA) plus lifestyle changes</li>
                <li><strong>HbA1c Reduction:</strong> 1.0 - 2.0% on average</li>
                <li><strong>Remission Rate:</strong> 10 - 30% with intensive lifestyle + medication</li>
                <li><strong>Duration:</strong> Lifelong medication; ongoing monitoring</li>
                <li><strong>Cost (India):</strong> $300 - $1,200/year</li>
                <li><strong>Best For:</strong> Early-stage T2D, BMI under 30, patients preferring non-surgical approach</li>
                <li><strong>Risk:</strong> Minimal; GI side effects, hypoglycaemia risk with some drugs</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader className="bg-green-50">
              <CardTitle>Metabolic Surgery for T2D</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3 text-sm text-gray-700">
                <li><strong>Approach:</strong> Gastric bypass or sleeve gastrectomy altering gut hormones</li>
                <li><strong>HbA1c Reduction:</strong> 2.0 - 4.0% within months</li>
                <li><strong>Remission Rate:</strong> 60 - 80% at 2 years; 50 - 70% at 5 years</li>
                <li><strong>Duration:</strong> One-time surgery; recovery 3 - 6 weeks</li>
                <li><strong>Cost (India):</strong> $4,500 - $7,000</li>
                <li><strong>Best For:</strong> T2D with BMI above 30, uncontrolled on medications, less than 10 years duration</li>
                <li><strong>Risk:</strong> Surgical risks, nutritional deficiency, requires lifelong vitamin supplementation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===== Top 3 Hospitals ===== */}
      <section className="mb-12">
        <h2 className="mb-2 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">Top 3 Hospitals for Diabetes Treatment</h2>
        <p className="mb-8 text-center text-lg text-gray-600">JCI / NABH-accredited centres with dedicated endocrinology departments</p>
        <div className="space-y-6">
          {/* Hospital 1 */}
          <Card className="shadow-lg">
            <CardHeader className="bg-primary-50">
              <CardTitle>1. Medanta - The Medicity, Gurugram</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold text-gray-900">Key Endocrinologists</h4>
                  <p className="text-sm text-gray-700">Dr. Ambrish Mithal (Chairman, Endocrinology & Diabetes), Dr. Sujeet Jha. Over 30 years of clinical and research experience in diabetes, thyroid, and metabolic bone disease.</p>
                  <h4 className="mb-2 mt-4 font-semibold text-gray-900">Technology</h4>
                  <p className="text-sm text-gray-700">Continuous Glucose Monitoring (CGM), advanced insulin pump programming (Medtronic 780G, Tandem t:slim), Flash Glucose Monitoring, closed-loop hybrid systems.</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-gray-900">Cost Range</h4>
                  <p className="text-sm text-gray-700">Comprehensive diabetes assessment: $400 - $600. Metabolic surgery: $5,000 - $7,000. Insulin pump setup: $3,000 - $4,500.</p>
                  <h4 className="mb-2 mt-4 font-semibold text-gray-900">Why Choose Medanta</h4>
                  <p className="text-sm text-gray-700">India&apos;s largest dedicated endocrinology department, multidisciplinary diabetes team (endocrinologist, dietitian, podiatrist, ophthalmologist), international patient lounge, Arabic-speaking coordinators.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hospital 2 */}
          <Card className="shadow-lg">
            <CardHeader className="bg-primary-50">
              <CardTitle>2. Max Healthcare, Delhi & NCR</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold text-gray-900">Key Endocrinologists</h4>
                  <p className="text-sm text-gray-700">Dr. S.K. Wangnoo (Senior Consultant Endocrinology), Dr. Shalini Jaggi. Expertise in Type 1 management, gestational diabetes, and diabetic neuropathy.</p>
                  <h4 className="mb-2 mt-4 font-semibold text-gray-900">Technology</h4>
                  <p className="text-sm text-gray-700">Dexcom G7 CGM, Omnipod DASH insulin pump system, AI-assisted insulin dose titration, 24/7 telemonitoring for international patients.</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-gray-900">Cost Range</h4>
                  <p className="text-sm text-gray-700">Comprehensive assessment: $350 - $550. Metabolic surgery: $4,500 - $6,500. Diabetic foot treatment: $1,500 - $3,000.</p>
                  <h4 className="mb-2 mt-4 font-semibold text-gray-900">Why Choose Max</h4>
                  <p className="text-sm text-gray-700">Multi-centre network across Delhi NCR, integrated diabetes-cardiology-nephrology clinics, dedicated international patient wing, visa assistance, airport pickup, and accommodation support.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hospital 3 */}
          <Card className="shadow-lg">
            <CardHeader className="bg-primary-50">
              <CardTitle>3. Fortis C-DOC Centre for Diabetes, Delhi</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold text-gray-900">Key Endocrinologists</h4>
                  <p className="text-sm text-gray-700">Dr. Anoop Misra (Chairman, Fortis C-DOC), Dr. Surya Kumar Kalaivani. Pioneers in metabolic surgery for Indian and Middle Eastern patients with Type 2 diabetes.</p>
                  <h4 className="mb-2 mt-4 font-semibold text-gray-900">Technology</h4>
                  <p className="text-sm text-gray-700">Robotic metabolic surgery (da Vinci Xi), continuous glucose monitoring, laser treatment for diabetic retinopathy, hyperbaric oxygen therapy for diabetic wounds.</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-gray-900">Cost Range</h4>
                  <p className="text-sm text-gray-700">Comprehensive assessment: $300 - $500. Metabolic surgery: $4,800 - $7,000. Stem cell therapy trial: $5,000 - $8,000.</p>
                  <h4 className="mb-2 mt-4 font-semibold text-gray-900">Why Choose Fortis C-DOC</h4>
                  <p className="text-sm text-gray-700">India&apos;s premier Centre for Diabetes, Obesity & Cholesterol. Published 500+ peer-reviewed papers on South Asian diabetes. Ramadan diabetes management programme. Arabic, Urdu, and Hindi language support.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===== Recovery Timeline ===== */}
      <section className="mb-12">
        <h2 className="mb-2 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">Recovery & Management Timeline</h2>
        <p className="mb-8 text-center text-lg text-gray-600">What to expect after starting treatment or undergoing metabolic surgery</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-l-4 border-l-blue-500 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Week 1 - 2</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Complete diagnostic workup</li>
                <li>Endocrinologist finalizes treatment plan</li>
                <li>Medication initiation or dose adjustment</li>
                <li>Surgery patients: liquid diet, wound care, daily glucose checks</li>
                <li>CGM sensor placement and training</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-green-500 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Month 1 - 3</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Blood glucose levels begin stabilizing</li>
                <li>Medication titration based on CGM data</li>
                <li>Surgery patients: transition to soft then regular diet</li>
                <li>Weight loss of 10 - 15 kg in surgical patients</li>
                <li>First follow-up HbA1c test at 3 months</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-purple-500 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Month 3 - 6</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>HbA1c typically drops 1.5 - 3.0% from baseline</li>
                <li>Many surgical patients off insulin entirely</li>
                <li>Dietitian adjusts meal plans for sustainability</li>
                <li>Retinal and kidney re-screening</li>
                <li>Remote telemedicine consultations from home country</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-amber-500 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Long-Term Management</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Quarterly HbA1c and lipid monitoring</li>
                <li>Annual comprehensive complication screening</li>
                <li>Ongoing dietitian and exercise coaching</li>
                <li>Medication step-down as glucose improves</li>
                <li>Lifelong vitamin supplementation (surgery patients)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===== Internal Links ===== */}
      <div className="mb-8">
        <InternalLinks
          links={[
            { text: 'View All Treatments', href: '/treatments' },
            { text: 'Cost Calculator', href: '/cost-calculator' },
            { text: 'Our Partner Hospitals', href: '/hospitals' },
            { text: 'Book a Consultation', href: '/booking' },
          ]}
        />
      </div>

      {/* ===== Social Share ===== */}
      <div className="mb-8">
        <SocialShare
          title="Diabetes Treatment India 2025: Cost, Best Endocrinologists"
          description="Diabetes treatment in India costs $3,000-8,000 vs $15,000-40,000 in USA. Top endocrinologists, insulin pump therapy, metabolic surgery. Save 75-85%."
        />
      </div>

      {/* ===== Related Articles ===== */}
      <div className="mb-12">
        <RelatedArticles articles={RELATED_ARTICLES} />
      </div>

      {/* ===== FAQ Section ===== */}
      <section className="mb-12">
        <h2 className="mb-8 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="mx-auto max-w-4xl space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <Card key={index} className="shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="mb-12 rounded-xl bg-gray-50 px-4 py-12">
        <Testimonials testimonials={TREATMENT_TESTIMONIALS['generic']} />
      </section>

      {/* ===== Trust Badges ===== */}
      <div className="mb-12">

      {/* Contextual Sidebar - Related Treatment Links */}
      <ContextualSidebar treatmentSlug="diabetes-treatment-india" locale={locale as 'en' | 'ar'} />
        <TrustBadges />
      </div>

      {/* ===== Final CTA ===== */}
      <Card className="mb-8 border-green-200 bg-green-50 shadow-xl">
        <CardContent className="p-8 text-center md:p-12">
          <h2 className="mb-4 font-serif text-2xl md:text-3xl font-bold text-gray-900">Ready for Diabetes Treatment in India?</h2>
          <p className="mb-8 text-lg text-gray-700">
            Get a free, no-obligation consultation with a top endocrinologist. Our medical coordinators will help you with treatment planning, hospital selection, visa assistance, and accommodation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-green-600 text-lg hover:bg-green-700">
              <Link href="/booking">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-green-600 text-lg text-green-700 hover:bg-green-600 hover:text-white">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* SEO: HowTo + Offer + Speakable Schemas */}
      <TreatmentSchemas
        treatmentName="Diabetes Treatment"
        lowPrice={2000}
        highPrice={5000}
        url="/en/treatments/diabetes-treatment-india"
      />
    </div>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles, CANCER_RELATED_ARTICLES } from '@/components/blog/related-articles';
import { InternalLinks } from '@/components/seo/internal-links';
import { Testimonials, TREATMENT_TESTIMONIALS } from '@/components/testimonials/testimonials';
import { TrustBadges } from '@/components/trust-badges/trust-badges';
import { BreadcrumbSchema } from '@/components/seo/breadcrumb-schema';
import { MedicalProcedureSchema } from '@/components/seo/medical-procedure-schema';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Breast Cancer Treatment in India 2025: Cost, Best Oncology Hospitals, Success Rate | Surgery, Chemotherapy, Radiation',
  description: 'Comprehensive breast cancer treatment in India. Lumpectomy ($3,500-5,000), Mastectomy ($4,000-6,000), Chemotherapy ($800-1,500/cycle), Radiation ($3,000-5,000). Top oncology hospitals, 85-95% survival rate, save 65-80% vs USA.',
  keywords: [
    'breast cancer treatment india',
    'breast cancer surgery cost india',
    'breast cancer hospital india',
    'lumpectomy india',
    'mastectomy india',
    'chemotherapy cost india',
    'radiation therapy india',
    'oncology hospital india',
    'علاج سرطان الثدي في الهند',
    'تكلفة علاج سرطان الثدي في الهند',
    'مستشفيات الأورام في الهند',
    'جراحة سرطان الثدي في الهند',
  ],
};

export default function BreastCancerTreatmentIndiaPage() {
  return (
    <div className="container mx-auto px-4 p
      {/* Breadcrumb Schema for SEO */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://shifaalhind.onrender.com' },
        { name: 'Treatments', url: 'https://shifaalhind.onrender.com/treatments' },
        { name: 'Breast Cancer Treatment in India', url: 'https://shifaalhind.onrender.com/treatments/breast-cancer-treatment-india' }
      ]} />

      {/* Medical Procedure Schema for SEO */}
      <MedicalProcedureSchema
        name="Breast Cancer Treatment"
        description="Comprehensive breast cancer treatment may include surgery, chemotherapy, radiation, targeted therapy, and hormone therapy based on cancer stage."
        procedureType="TherapeuticProcedure"
        bodyLocation="Breast"
        preparation="Complete diagnostic workup including biopsy, imaging, and staging. Multidisciplinary team evaluation."
        followup="Regular follow-ups every 3-6 months for 5 years, then annually. Ongoing imaging and blood tests."
        url="https://shifaalhind.onrender.com/treatments/breast-cancer-treatment-india"
      />
y-8">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Breast Cancer Treatment in India: Cost, Best Oncology Hospitals & Success Rate 2025
        </h1>
        <p className="mb-6 text-xl text-gray-700">
          World-class breast cancer care with 85-95% survival rates. Surgery + Chemotherapy + Radiation under $15,000.
          Save 65-80% vs USA. Top oncology hospitals with international protocols. Personalized treatment plans.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/booking">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Get Free Consultation
            </Button>
          </Link>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline">
              WhatsApp Us
            </Button>
          </a>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="mb-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-600">$10K-15K</p>
                <p className="text-gray-600">Complete Treatment Package</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-600">85-95%</p>
                <p className="text-gray-600">5-Year Survival Rate (Stage I-II)</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-600">65-80%</p>
                <p className="text-gray-600">Savings vs USA</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-600">6-12 Months</p>
                <p className="text-gray-600">Complete Treatment Duration</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Breast Cancer Treatment Cost Comparison: India vs World</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Treatment Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left">India</th>
                <th className="border border-gray-300 px-4 py-2 text-left">USA</th>
                <th className="border border-gray-300 px-4 py-2 text-left">UK</th>
                <th className="border border-gray-300 px-4 py-2 text-left">UAE</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Lumpectomy (Breast-Conserving Surgery)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$3,500-5,000</td>
                <td className="border border-gray-300 px-4 py-2">$15,000-25,000</td>
                <td className="border border-gray-300 px-4 py-2">£12,000-18,000 ($15,000-22,800)</td>
                <td className="border border-gray-300 px-4 py-2">AED 35,000-55,000 ($9,500-15,000)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">70-80%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Mastectomy (Complete Breast Removal)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$4,000-6,000</td>
                <td className="border border-gray-300 px-4 py-2">$18,000-30,000</td>
                <td className="border border-gray-300 px-4 py-2">£15,000-22,000 ($19,000-27,800)</td>
                <td className="border border-gray-300 px-4 py-2">AED 40,000-65,000 ($10,900-17,700)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">70-80%</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Chemotherapy (6-8 cycles)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$800-1,500/cycle ($5,000-12,000 total)</td>
                <td className="border border-gray-300 px-4 py-2">$3,000-7,000/cycle ($18,000-56,000 total)</td>
                <td className="border border-gray-300 px-4 py-2">£2,500-5,500/cycle ($15,000-44,000 total)</td>
                <td className="border border-gray-300 px-4 py-2">AED 8,000-18,000/cycle ($14,500-49,000 total)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">65-80%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Radiation Therapy (25-30 sessions)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$3,000-5,000</td>
                <td className="border border-gray-300 px-4 py-2">$15,000-30,000</td>
                <td className="border border-gray-300 px-4 py-2">£12,000-22,000 ($15,200-27,800)</td>
                <td className="border border-gray-300 px-4 py-2">AED 35,000-60,000 ($9,500-16,300)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">70-80%</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Targeted Therapy (Herceptin 1 year)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$6,000-10,000</td>
                <td className="border border-gray-300 px-4 py-2">$50,000-100,000</td>
                <td className="border border-gray-300 px-4 py-2">£40,000-75,000 ($50,600-95,000)</td>
                <td className="border border-gray-300 px-4 py-2">AED 150,000-280,000 ($40,850-76,250)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">85-90%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Breast Reconstruction (Implant)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$3,500-6,000</td>
                <td className="border border-gray-300 px-4 py-2">$15,000-35,000</td>
                <td className="border border-gray-300 px-4 py-2">£12,000-28,000 ($15,200-35,400)</td>
                <td className="border border-gray-300 px-4 py-2">AED 35,000-80,000 ($9,500-21,800)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">75-80%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          *Complete Package includes: Pre-treatment tests, surgery, hospital stay, medications, post-op care, follow-ups for 6 months.
          Chemotherapy/radiation prices per cycle/session.
        </p>
      </section>

      {/* What's Included */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">What&apos;s Included in Breast Cancer Treatment Package</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Pre-Treatment (Week 1-2)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Oncologist consultation (initial assessment)</li>
                <li>Diagnostic tests: Mammogram, Ultrasound, MRI (tumor size/location)</li>
                <li>Biopsy (confirm cancer type: Ductal, Lobular, Inflammatory)</li>
                <li>Receptor testing: ER, PR, HER2 (determines treatment approach)</li>
                <li>CT/PET scan (stage cancer, check for spread)</li>
                <li>Blood tests: Complete blood count, liver/kidney function</li>
                <li>Tumor Board Review (multidisciplinary team decides treatment plan)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Surgery (Day 1, 2-4 hours)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Lumpectomy (breast-conserving, Stage I-II) or Mastectomy (complete removal, Stage II-III)</li>
                <li>Sentinel lymph node biopsy (check if cancer spread to lymph nodes)</li>
                <li>Axillary lymph node dissection if needed (remove affected nodes)</li>
                <li>General anesthesia (3-4 hours surgery time)</li>
                <li>Hospital stay: 2-4 days post-surgery</li>
                <li>Pathology report (final cancer stage, grade, margins)</li>
                <li>Drain management (temporary drains to remove fluid)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Adjuvant Therapy (3-6 months post-surgery)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Chemotherapy: 6-8 cycles (AC-T, TAC, TCH regimens based on stage)</li>
                <li>Radiation: 25-30 sessions (5 days/week for 5-6 weeks) after lumpectomy</li>
                <li>Targeted therapy: Herceptin (HER2+) or Perjeta (advanced cases)</li>
                <li>Hormone therapy: Tamoxifen/Anastrozole (ER+/PR+ tumors, 5-10 years)</li>
                <li>Side effect management: Anti-nausea, pain relief, supportive care</li>
                <li>Nutritional support (maintain weight during chemo)</li>
                <li>Psychological counseling (cancer support groups)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Follow-Up Care (5+ Years)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Post-treatment mammogram (3-6 months, then annually)</li>
                <li>Clinical exams every 3-6 months for 5 years, then annually</li>
                <li>Blood tests (tumor markers CA 15-3, CEA every 6 months)</li>
                <li>CT/PET scans if symptoms suggest recurrence</li>
                <li>Breast reconstruction (if mastectomy, can be done immediately or delayed)</li>
                <li>Hormonal therapy continuation (5-10 years for ER+/PR+ patients)</li>
                <li>Lifestyle modifications: Exercise, diet, stress management</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Treatment Options by Stage */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Treatment Options by Stage</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Stage</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Surgery</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Chemotherapy</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Radiation</th>
                <th className="border border-gray-300 px-4 py-2 text-left">5-Year Survival</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Stage 0 (DCIS/LCIS)</td>
                <td className="border border-gray-300 px-4 py-2">Lumpectomy or Mastectomy</td>
                <td className="border border-gray-300 px-4 py-2">Not required</td>
                <td className="border border-gray-300 px-4 py-2">After lumpectomy (25-30 sessions)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">99%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Stage I (Tumor &lt;2cm, no spread)</td>
                <td className="border border-gray-300 px-4 py-2">Lumpectomy + Sentinel node biopsy</td>
                <td className="border border-gray-300 px-4 py-2">May be recommended (4-6 cycles)</td>
                <td className="border border-gray-300 px-4 py-2">Yes (after lumpectomy)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">95%</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Stage II (Tumor 2-5cm, 1-3 nodes)</td>
                <td className="border border-gray-300 px-4 py-2">Lumpectomy or Mastectomy + Axillary dissection</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">Yes (6-8 cycles AC-T or TAC)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">Yes (required)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">85-90%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Stage III (Tumor &gt;5cm, 4+ nodes)</td>
                <td className="border border-gray-300 px-4 py-2">Mastectomy + Full axillary dissection</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">Yes (8 cycles, may start before surgery)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">Yes (chest wall + nodes)</td>
                <td className="border border-gray-300 px-4 py-2 text-orange-600">65-75%</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Stage IV (Metastatic, spread to distant organs)</td>
                <td className="border border-gray-300 px-4 py-2">Palliative surgery (if needed for symptoms)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">Yes (systemic chemo + targeted therapy)</td>
                <td className="border border-gray-300 px-4 py-2">Palliative radiation (bone metastases)</td>
                <td className="border border-gray-300 px-4 py-2 text-red-600">22-28%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Top Oncology Hospitals */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Top 5 Breast Cancer Treatment Hospitals in India</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">#1: Tata Memorial Hospital (Mumbai)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                <strong>Specialty:</strong> Asia&apos;s #1 Cancer Hospital (Government-run, world-class care at affordable prices)<br />
                <strong>Breast Cancer Cases:</strong> 5,000+ new cases annually (largest volume in India)<br />
                <strong>Success Rate:</strong> 85-92% 5-year survival (Stage I-II), 98% surgical success<br />
                <strong>Key Doctors:</strong> Dr. Rajendra Badwe (Surgical Oncologist, 35+ years, 15,000+ breast surgeries)<br />
                <strong>Technology:</strong> PET-CT, 3T MRI, Intraoperative Radiation Therapy (IORT), Oncoplastic surgery<br />
                <strong>Cost:</strong> Lumpectomy $2,000-3,000, Mastectomy $2,500-4,000, Chemo $400-800/cycle (government rates)<br />
                <strong>Why Choose:</strong> Non-profit, most affordable, research institution, international protocols, no commercial bias
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">#2: Apollo Cancer Institute (Chennai, Hyderabad, Delhi)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                <strong>Specialty:</strong> Comprehensive Cancer Care (3,000+ breast cancer cases annually across 12 centers)<br />
                <strong>Success Rate:</strong> 88-94% 5-year survival (Stage I-II), 96% surgical success<br />
                <strong>Key Doctors:</strong> Dr. S. Subramanian (Surgical Oncologist, 25+ years), Dr. K.S. Gopinath (Radiation Oncologist)<br />
                <strong>Technology:</strong> CyberKnife, TrueBeam Radiotherapy, Genomic testing (Oncotype DX), Breast MRI<br />
                <strong>International Patients:</strong> 15,000+ annually, dedicated international desk, visa assistance<br />
                <strong>Cost:</strong> Lumpectomy $4,000-5,500, Mastectomy $5,000-7,000, Chemo $1,000-1,800/cycle<br />
                <strong>Why Choose:</strong> JCI accredited, all-in-one facility, airport pickup, medical tourism support
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">#3: Fortis Memorial Research Institute (Delhi NCR)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                <strong>Specialty:</strong> Advanced Oncology (2,500+ breast cancer cases annually, 350-bed cancer center)<br />
                <strong>Success Rate:</strong> 86-92% 5-year survival (Stage I-II), 97% surgical success<br />
                <strong>Key Doctors:</strong> Dr. Harit Chaturvedi (Surgical Oncologist, 30+ years, Max Healthcare fame)<br />
                <strong>Technology:</strong> da Vinci Robotic Surgery (nipple-sparing mastectomy), IMRT, Brachytherapy, PET-CT<br />
                <strong>Breast Reconstruction:</strong> Advanced oncoplastic techniques, DIEP flap reconstruction (autologous tissue)<br />
                <strong>Cost:</strong> Lumpectomy $4,500-6,000, Mastectomy $5,500-7,500, Chemo $1,200-2,000/cycle<br />
                <strong>Why Choose:</strong> Robotic surgery expertise, best cosmetic outcomes, luxury accommodation
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">#4: HCG Cancer Centre (Bangalore, Mumbai, Ahmedabad)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                <strong>Specialty:</strong> India&apos;s Largest Cancer Care Network (20 centers, 2,000+ breast cancer cases annually)<br />
                <strong>Success Rate:</strong> 84-90% 5-year survival (Stage I-II), 96% surgical success<br />
                <strong>Key Doctors:</strong> Dr. B.S. Ajai Kumar (Founder, Surgical Oncologist, 40+ years), Dr. K. Govind Babu (Medical Oncologist)<br />
                <strong>Technology:</strong> TrueBeam STx Radiotherapy, Molecular profiling, Breast MRI, Sentinel node mapping<br />
                <strong>Breast Preservation:</strong> Oncoplastic techniques in 70% of Stage I-II cases<br />
                <strong>Cost:</strong> Lumpectomy $3,800-5,200, Mastectomy $4,500-6,500, Chemo $900-1,600/cycle<br />
                <strong>Why Choose:</strong> Largest network, standardized protocols, second opinion service, EMI options
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">#5: Max Super Speciality Hospital (Delhi NCR)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                <strong>Specialty:</strong> Premium Oncology Care (1,500+ breast cancer cases annually, NABH accredited)<br />
                <strong>Success Rate:</strong> 86-92% 5-year survival (Stage I-II), 97% surgical success<br />
                <strong>Key Doctors:</strong> Dr. Anurag Srivastava (Surgical Oncologist, 20+ years, fellowship USA)<br />
                <strong>Technology:</strong> Intraoperative Radiation Therapy (IORT, single-dose during surgery), Advanced IMRT<br />
                <strong>Personalized Medicine:</strong> Genomic testing for all HER2+ cases, customized chemo regimens<br />
                <strong>Cost:</strong> Lumpectomy $4,200-5,800, Mastectomy $5,200-7,200, Chemo $1,100-1,900/cycle<br />
                <strong>Why Choose:</strong> IORT expertise (avoid 6 weeks radiation), luxury amenities, Arabic-speaking staff
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Treatment Timeline */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Breast Cancer Treatment Timeline</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Week 1-2: Diagnosis & Staging</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Mammogram, ultrasound, biopsy confirm breast cancer. Receptor testing (ER, PR, HER2) determines hormone sensitivity.
                CT/PET scan stages cancer (I, II, III, IV). Tumor Board meeting (surgical oncologist, medical oncologist, radiation oncologist)
                creates personalized treatment plan. Genetic testing (BRCA1/BRCA2) if family history. Decision: Lumpectomy vs Mastectomy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Week 3-4: Surgery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Lumpectomy (breast-conserving) or Mastectomy (complete removal) performed. Sentinel lymph node biopsy checks for spread.
                Surgery duration: 2-4 hours under general anesthesia. Hospital stay: 2-4 days. Drains placed to remove fluid.
                Pathology report (1 week) confirms final stage, grade, surgical margins. If margins positive (cancer cells at edge),
                re-excision may be needed. Recovery: 2-3 weeks before starting adjuvant therapy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Month 2-4: Chemotherapy (if recommended)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Stage II-III typically require chemo. Regimens: AC-T (Adriamycin, Cyclophosphamide, Taxol), TAC, or TCH (for HER2+).
                Cycles: 6-8 (every 2-3 weeks). Total duration: 3-6 months. Side effects: Hair loss (temporary), nausea (managed with meds),
                fatigue, low blood counts. Port catheter placed for easy IV access. Blood tests before each cycle. Most patients tolerate well,
                continue light activities. Hair regrows 3-6 months after completion.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Month 5-6: Radiation Therapy (after lumpectomy)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Required after lumpectomy to kill remaining cancer cells. Sessions: 25-30 (5 days/week for 5-6 weeks). Each session: 15-20 minutes.
                Side effects: Skin redness/darkening (like sunburn), fatigue, breast swelling. Permanent side effects rare. IORT (Intraoperative
                Radiation): Single dose during surgery, avoid 6 weeks radiation (available at Max, Fortis). Radiation after mastectomy only if
                Stage III or positive margins.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Year 1-5+: Hormone Therapy (ER+/PR+ patients)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Tamoxifen (premenopausal) or Aromatase Inhibitors (postmenopausal) for 5-10 years. Daily pill reduces recurrence risk by 40-50%.
                Side effects: Hot flashes, joint pain, mood changes (manageable). Regular mammograms every 6-12 months. Clinical exams every 3-6 months.
                Tumor markers (CA 15-3, CEA) monitored. Lifestyle: Maintain healthy weight, exercise 150 min/week, limit alcohol, balanced diet.
                Breast reconstruction (if mastectomy) can be immediate or delayed.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Year 5+: Long-Term Survival & Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Stage I-II: 85-95% cured after 5 years. Annual mammograms lifelong. Clinical exams annually. Most recurrences occur within first
                5 years. After 10 years, risk very low. Quality of life excellent for most survivors. Hormone therapy may continue 10 years for
                high-risk cases. Genetic counseling if BRCA1/BRCA2 positive (family screening, risk-reducing surgery options). Support groups
                help with emotional recovery.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Schema for Rich Snippets */}
      <FAQSchema faqs={[
        {
          question: "How much does breast cancer treatment cost in India?",
          answer: "Complete breast cancer treatment in India costs $10,000-15,000 (Stage I-II) vs $50,000-150,000 in USA (65-80% savings). Lumpectomy: $3,500-5,000. Mastectomy: $4,000-6,000. Chemotherapy: $800-1,500/cycle (6-8 cycles = $5,000-12,000). Radiation: $3,000-5,000 (25-30 sessions). Targeted therapy (Herceptin): $6,000-10,000/year vs $50,000-100,000 in USA. Prices include surgery, hospital stay, medications, follow-ups."
        },
        {
          question: "What is the success rate of breast cancer treatment in India?",
          answer: "Stage 0 (DCIS): 99% 5-year survival. Stage I: 95% 5-year survival. Stage II: 85-90% 5-year survival. Stage III: 65-75% 5-year survival. Stage IV: 22-28% 5-year survival. Surgical success rate: 96-98%. Top hospitals (Tata Memorial, Apollo, Fortis) match international standards. Treatment follows NCCN guidelines (USA protocols). Success depends on stage, receptor status (ER/PR/HER2), age, overall health."
        },
        {
          question: "How long does breast cancer treatment take?",
          answer: "Total duration: 6-12 months. Diagnosis & staging: 1-2 weeks. Surgery: Week 3-4 (2-4 hours operation, 2-4 days hospital, 2-3 weeks recovery). Chemotherapy: 3-6 months (6-8 cycles every 2-3 weeks). Radiation: 5-6 weeks (25-30 sessions, 5 days/week). Hormone therapy: 5-10 years (daily pill). Follow-up: Lifelong (every 3-6 months for 5 years, then annually). Stage I may skip chemo (faster treatment). Stage III requires all modalities (longer treatment)."
        },
        {
          question: "Should I choose lumpectomy or mastectomy?",
          answer: "Lumpectomy (breast-conserving): Stage I-II, single tumor <5cm, want to preserve breast. Requires radiation (5-6 weeks). 5-year survival same as mastectomy. Better cosmetic outcome. Mastectomy (complete removal): Stage II-III, multiple tumors, large tumor >5cm, don't want radiation, BRCA1/BRCA2 positive. Radiation may not be needed. Option for reconstruction. Decision based on tumor size, stage, patient preference. Oncologist discusses options."
        },
        {
          question: "What are ER, PR, HER2 receptors and why do they matter?",
          answer: "ER (Estrogen Receptor): 70% of breast cancers. Treated with hormone therapy (Tamoxifen, Aromatase Inhibitors) for 5-10 years. Good prognosis. PR (Progesterone Receptor): Often ER+/PR+ together. Similar hormone therapy. HER2 (Human Epidermal Growth Factor): 20% of cases. Aggressive but treatable with targeted therapy (Herceptin/Trastuzumab). Triple-Negative (ER-/PR-/HER2-): 15% of cases. More aggressive, treated with chemotherapy only (no hormone or targeted therapy). Receptor testing done on biopsy sample."
        },
        {
          question: "Do I need to stay in India for the entire treatment?",
          answer: "Surgery: Stay 2 weeks (1 week pre-op tests, surgery, 1 week post-op recovery, drain removal, pathology). Chemotherapy: Cycles every 2-3 weeks. Options: (1) Stay in India 3-6 months (accommodation $300-800/month), (2) Return home between cycles (fly back every 2-3 weeks), (3) Start in India, continue in home country (transfer care). Radiation: Stay 5-6 weeks (25-30 daily sessions). Hormone therapy: Prescription given, take at home (annual follow-ups only)."
        },
        {
          question: "What side effects should I expect from chemotherapy?",
          answer: "Common (90%): Hair loss (temporary, regrows 3-6 months post-treatment), nausea/vomiting (managed with anti-nausea meds), fatigue, low blood counts (infection risk). Occasional (30-50%): Mouth sores, diarrhea/constipation, neuropathy (tingling fingers/toes), taste changes. Rare (<10%): Heart damage (Adriamycin), allergic reactions. Management: Anti-nausea meds before each cycle, growth factors for blood counts, cold caps to reduce hair loss (50% effective), rest. Most side effects resolve within 6-12 months post-treatment."
        },
        {
          question: "Can I get breast reconstruction after mastectomy?",
          answer: "Yes, reconstruction available. Timing: Immediate (same surgery as mastectomy) or Delayed (3-12 months later). Options: (1) Implant reconstruction: $3,500-6,000, silicone or saline implant, 2-stage (expander + implant), 3-6 months total. (2) Autologous (own tissue, DIEP flap): $8,000-12,000, tissue from abdomen, natural look, longer surgery (6-8 hours), better long-term results. (3) No reconstruction: Some choose prosthetic bra. Insurance coverage varies. Discuss with plastic surgeon before mastectomy."
        }
      ]} />

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>How do I know if I&apos;m a good candidate for lumpectomy vs mastectomy?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Your surgical oncologist will recommend based on: (1) Tumor size: Lumpectomy if tumor &lt;5cm and single focus. Mastectomy if &gt;5cm or multiple tumors. (2) Tumor-to-breast ratio: Lumpectomy if removing tumor leaves acceptable breast shape. Mastectomy if lumpectomy would result in significant deformity. (3) Stage: Stage I-II usually lumpectomy candidates. Stage III often requires mastectomy. (4) Willingness for radiation: Lumpectomy requires 5-6 weeks radiation. Mastectomy may not. (5) Genetic factors: BRCA1/BRCA2 positive may prefer mastectomy (risk-reducing). (6) Patient preference: Some choose mastectomy for peace of mind. 5-year survival rates are EQUAL for lumpectomy + radiation vs mastectomy at Stage I-II.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What is the difference between AC-T, TAC, and TCH chemotherapy regimens?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                AC-T (Adriamycin + Cyclophosphamide, then Taxol): 4 cycles AC every 2-3 weeks, then 4 cycles Taxol every 2 weeks. Total: 8 cycles, 4-5 months. Most common for Stage II-III. TAC (Taxotere + Adriamycin + Cyclophosphamide): 6 cycles every 3 weeks. Total: 4.5 months. Alternative to AC-T, slightly more aggressive side effects. TCH (Taxotere + Carboplatin + Herceptin): For HER2-positive tumors. 6 cycles every 3 weeks. Total: 4.5 months. Avoids Adriamycin (heart-friendly). Your medical oncologist chooses based on stage, receptor status, cardiac health, and patient preference. All regimens have similar cure rates (80-90% for Stage II).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Will I lose all my hair during chemotherapy?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Hair loss depends on chemotherapy drugs. AC-T, TAC regimens: 90-95% lose hair (scalp, eyebrows, eyelashes, body hair). Starts 2-3 weeks after first cycle. Complete loss by Cycle 2-3. TCH (without Adriamycin): 60-70% lose hair (less severe, some thinning only). Hair regrowth: Starts 3-6 months after last cycle. New hair may be different texture/color initially (returns to normal by 12-18 months). Prevention: Cold caps (scalp cooling during infusion) can reduce loss by 50-70%. Available at Apollo, Fortis ($500-1,000 per cycle). Many patients choose wigs, scarves, or embrace baldness. Hair loss is TEMPORARY - all patients regrow hair post-treatment.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What if cancer comes back after treatment?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Recurrence rates: Stage I: 5-10% recur within 10 years. Stage II: 15-25% recur. Stage III: 30-40% recur. Most recurrences happen within first 5 years. Types: (1) Local recurrence (same breast or chest wall): Treated with surgery + radiation. 5-year survival: 60-80%. (2) Regional recurrence (lymph nodes): Treated with surgery + chemo + radiation. 5-year survival: 40-60%. (3) Distant metastasis (bones, lungs, liver, brain): Treated with systemic therapy (chemo + targeted + hormone). 5-year survival: 22-28% (Stage IV). Prevention: Complete initial treatment, hormone therapy adherence, regular follow-ups (mammograms every 6-12 months), healthy lifestyle. Early detection of recurrence improves outcomes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Is there a minimum or maximum age for breast cancer treatment?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Breast cancer can be treated at any age - from young adults (20s-30s) to elderly (80s-90s).</strong> Age considerations:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Young patients (age 20-40):</strong> Breast cancer rare but more aggressive (5% of cases). More likely triple-negative (ER-/PR-/HER2-). Higher grade tumors. Fertility preservation critical (egg freezing $2,000-3,500 before chemo). BRCA testing recommended (hereditary risk 25%). Longer life expectancy requires aggressive treatment. Success rate same as older patients with complete treatment.</li>
                <li><strong>Middle-aged (age 40-65):</strong> Most common age group (70% of cases). Standard treatment protocols (surgery, chemo, radiation, hormone therapy). Excellent tolerance for aggressive treatment. Best candidates for oncoplastic surgery (cosmetic-preserving techniques). 5-year survival: Stage I-II 85-95%.</li>
                <li><strong>Elderly (age 65-80):</strong> Treatment decisions balance cancer aggressiveness vs life expectancy. Many receive full treatment if healthy. Hormone-positive tumors (ER+/PR+) may skip chemotherapy (hormone therapy alone). Surgical success rate same as younger patients. Chemo side effects slightly higher but manageable. Lumpectomy preferred over mastectomy (shorter recovery).</li>
                <li><strong>Very elderly (age 80+):</strong> Treatment individualized based on overall health, comorbidities (heart disease, diabetes), tumor aggressiveness. Low-grade hormone-positive tumors: May treat with hormone therapy only (Tamoxifen, Aromatase Inhibitors, no surgery/chemo). High-grade or triple-negative: Surgery + chemotherapy if patient fit. Oldest patient at Tata Memorial: 92 years old (successful lumpectomy + radiation). Anesthesia risk assessment required. Geriatric oncology specialists available.</li>
              </ul>
              <p className="text-gray-700">
                <strong>GCC patients note:</strong> No age restrictions for international patients. Flying home safe 2-3 weeks post-surgery (before starting chemo/radiation). Elderly patients may bring companion for support.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Does smoking affect breast cancer treatment and recovery?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Yes, smoking significantly worsens treatment outcomes and complications. Quitting before treatment is critical.</strong> Impact on each treatment:
              </p>
              <p className="mb-3 text-gray-700"><strong>Surgery complications:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Wound healing:</strong> Smokers have 2-3× higher surgical site infection rate (incision, drains). Nicotine reduces oxygen to tissues (delayed healing by 40-50%). Mastectomy flap necrosis (tissue death) 3-4× higher in smokers (requires revision surgery).</li>
                <li><strong>Anesthesia risk:</strong> 2× higher pneumonia risk post-surgery. Longer intubation time (airway irritation). More post-op respiratory complications.</li>
                <li><strong>Breast reconstruction:</strong> Implant infection 4× higher. Flap failure (DIEP, TRAM) 2-3× higher. Many plastic surgeons refuse reconstruction for active smokers.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Chemotherapy impact:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Reduced effectiveness:</strong> Smoking may reduce chemo effectiveness (tumor blood supply compromised). Lower cure rates observed in studies (10-15% lower 5-year survival).</li>
                <li><strong>Increased side effects:</strong> Higher nausea, more severe neuropathy (nerve damage), worse fatigue. Longer recovery between cycles (low blood counts).</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Radiation therapy impact:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Radiation pneumonitis:</strong> 3-4× higher risk (lung inflammation, shortness of breath, cough). Can be serious if left breast treated (radiation affects nearby lung).</li>
                <li><strong>Skin toxicity:</strong> Worse radiation burns (delayed healing, permanent scarring).</li>
                <li><strong>Heart damage:</strong> Smoking + radiation to left breast increases cardiac risk (Adriamycin also affects heart).</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Smoking timeline for treatment:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>4-8 weeks before surgery:</strong> Quit or reduce to zero (improves wound healing capacity 50-70%, reduces infection risk).</li>
                <li><strong>During treatment (6-12 months):</strong> NO smoking (critical healing period for surgery, chemo, radiation).</li>
                <li><strong>Long-term:</strong> Quit permanently. Smoking increases risk of second breast cancer (other breast), lung cancer, recurrence.</li>
              </ul>
              <p className="text-gray-700">
                <strong>Success rates:</strong> Non-smokers Stage II: 88% 5-year survival. Smokers Stage II: 75-80% 5-year survival (10-15% lower due to complications, reduced treatment effectiveness). Quitting before treatment significantly improves outcomes. Smoking cessation programs available at all major oncology hospitals.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Can I exercise during and after breast cancer treatment?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Yes! Exercise improves outcomes, reduces side effects, and speeds recovery. Start gently and build up.</strong> Activity guidelines by treatment phase:
              </p>
              <p className="mb-3 text-gray-700"><strong>Post-surgery (Weeks 1-4):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Days 1-7:</strong> Walking only (10-15 minutes, 2-3× daily). Promotes healing, prevents blood clots. NO arm exercises on operated side (risk of seroma/fluid collection). Drains typically removed Day 7-10.</li>
                <li><strong>Weeks 2-4:</strong> Gradual arm mobilization (shoulder exercises given by physiotherapist, prevent frozen shoulder/lymphedema). Light walking 20-30 minutes daily. NO heavy lifting &gt;5kg operated side. NO gym, running, swimming yet.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>During chemotherapy (Months 2-4):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Exercise reduces fatigue by 30-40%</strong> (counterintuitive but proven). Walking 20-30 minutes daily (most important exercise). Light yoga (avoid inversions/headstands if low platelets). Stationary cycling 10-20 minutes.</li>
                <li><strong>Avoid:</strong> Heavy weightlifting (low blood counts increase injury risk), contact sports (infection/bruising risk), swimming in pools (infection risk if low white blood cells), outdoor exercise if ANC &lt;1,000 (infection risk).</li>
                <li><strong>Listen to body:</strong> Exercise Day 1-10 of cycle (feel best). Rest Days 11-14 (lowest blood counts, fatigue peaks). Resume Day 15 onwards.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>During radiation (Months 5-6):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Continue moderate exercise:</strong> Walking 30 minutes daily, light yoga, cycling. Exercise does NOT worsen radiation side effects.</li>
                <li><strong>Avoid:</strong> Tight sports bras (radiation skin irritation), swimming (chlorine irritates radiated skin, wait until 2 weeks after completion), heavy arm exercises if lymphedema risk.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Post-treatment recovery (Months 6-12+):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Goal: 150 minutes moderate exercise weekly</strong> (30 min × 5 days). Walking, jogging, cycling, swimming, yoga. Reduces recurrence risk by 25-30%. Improves quality of life.</li>
                <li><strong>Strength training:</strong> 2-3× weekly (builds muscle lost during chemo, improves bone density if on Aromatase Inhibitors). Start light (2-3kg weights), build gradually.</li>
                <li><strong>Lymphedema prevention:</strong> If lymph nodes removed, wear compression sleeve during exercise. Avoid heavy lifting &gt;10kg with affected arm. Gradual progression critical.</li>
              </ul>
              <p className="text-gray-700">
                <strong>Evidence-based benefits:</strong> Exercise during chemo reduces fatigue 40%, nausea 20%, improves mood, maintains weight. Post-treatment: 150 min/week reduces recurrence 25-30% (all stages). Survival benefit equivalent to chemotherapy in some studies. All oncology hospitals have physiotherapists, exercise counselors.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Can I preserve fertility before breast cancer treatment?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Yes, fertility preservation options available for women age &lt;40 who want future pregnancy.</strong> Critical timeline: Must be done BEFORE chemotherapy starts. Options and process:
              </p>
              <p className="mb-3 text-gray-700"><strong>Fertility preservation methods:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Egg freezing (oocyte cryopreservation):</strong> Most common. Hormone stimulation for 10-14 days (daily injections to grow multiple eggs). Egg retrieval procedure under sedation (20-30 minutes). Eggs frozen for future IVF. Success: 60-80% pregnancy rate per frozen cycle if age &lt;35. Cost: $2,500-4,000 in India (vs $10,000-15,000 USA). Storage: $200-400/year.</li>
                <li><strong>Embryo freezing:</strong> Similar to egg freezing but eggs fertilized with partner/donor sperm before freezing. Higher pregnancy success (70-85% per cycle) vs egg freezing alone. Requires male partner or sperm donor. Cost: $3,000-5,000 (includes sperm processing, fertilization).</li>
                <li><strong>Ovarian tissue freezing:</strong> For prepubertal girls or emergency cases (no time for egg stimulation). Ovarian tissue removed via laparoscopy, frozen, re-implanted after cancer treatment. Experimental, limited success (20-30 pregnancies worldwide). Cost: $5,000-8,000.</li>
                <li><strong>GnRH agonists during chemo:</strong> Monthly injection (Lupron/Zoladex) suppresses ovaries during chemotherapy. May protect ovarian function (50-70% effective). Controversial, not recommended as sole method. Cost: $300-600/month × 6 months.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Timeline and process:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Week 1-2 (diagnosis):</strong> Oncologist refers to fertility specialist immediately. Fertility consultation within 3-5 days (urgent).</li>
                <li><strong>Week 2-3:</strong> Hormone stimulation for egg freezing (10-14 days). Daily monitoring (ultrasound, blood tests). Egg retrieval procedure (Day 14).</li>
                <li><strong>Week 4:</strong> Start cancer treatment (surgery or chemotherapy). Fertility preservation does NOT delay cancer treatment significantly (2-3 weeks acceptable).</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Age-specific considerations:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Age &lt;30:</strong> Highly recommend fertility preservation (90%+ want future pregnancy, ovarian reserve excellent, high success rates 70-85%).</li>
                <li><strong>Age 30-35:</strong> Recommend fertility preservation (70% want future pregnancy, good ovarian reserve, success rates 60-75%).</li>
                <li><strong>Age 35-40:</strong> Discuss options (50% want future pregnancy, declining ovarian reserve, success rates 40-60%, may need multiple cycles).</li>
                <li><strong>Age &gt;40:</strong> Limited options (low ovarian reserve, low success rates &lt;30%, may not be cost-effective). Donor eggs alternative after treatment.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Pregnancy after breast cancer:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>When safe to conceive:</strong> Wait 2 years post-treatment (hormone-negative). Wait 5 years if hormone-positive (ER+/PR+, must complete hormone therapy). Studies show pregnancy does NOT increase recurrence risk.</li>
                <li><strong>IVF with frozen eggs:</strong> Success rates same as general IVF population (60-80% per cycle if age &lt;35 at freezing).</li>
                <li><strong>Natural pregnancy:</strong> Possible if ovarian function recovers post-chemo (50-70% of women &lt;35, 20-30% of women 35-40, &lt;10% of women &gt;40). Depends on chemo regimen, age.</li>
              </ul>
              <p className="text-gray-700">
                <strong>Fertility centers in India:</strong> Nova IVF (Delhi, Mumbai, Bangalore), Cloudnine Fertility (20+ centers), Indira IVF (60+ centers). Cost $2,500-4,000 vs $10,000-15,000 USA. All major oncology hospitals (Tata Memorial, Apollo, Fortis) have tie-ups with fertility clinics. Discuss with oncologist during Week 1 diagnosis appointment.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Can I continue working during breast cancer treatment?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Many patients work during treatment (50-70%), but requires flexibility and adjustments.</strong> Work feasibility by treatment phase:
              </p>
              <p className="mb-3 text-gray-700"><strong>Surgery phase (Weeks 1-4):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Time off needed:</strong> Lumpectomy: 2-3 weeks off. Mastectomy: 3-4 weeks off. Desk job: Return Week 3-4. Physical job (lifting, standing): 4-6 weeks off.</li>
                <li><strong>Considerations:</strong> Drains typically in for 7-10 days (uncomfortable, limits movement). Pain controlled with medication. Fatigue common first 2 weeks. Arm mobility restricted until drains removed.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Chemotherapy phase (Months 2-4, 6-8 cycles every 2-3 weeks):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Full-time work:</strong> 40-60% of patients work full-time during chemo (mostly desk jobs). Best Days: 1-10 of cycle (feel relatively normal). Worst Days: 11-14 (lowest blood counts, peak fatigue, nausea).</li>
                <li><strong>Part-time/flexible work:</strong> 70-80% manage part-time or work-from-home. Reduce hours to 20-30/week. Schedule chemo on Fridays (weekend recovery before Monday work).</li>
                <li><strong>Extended leave:</strong> 20-30% take full medical leave during chemo (physically demanding jobs, severe side effects, Stage III aggressive treatment). Employers usually grant 3-6 months medical leave.</li>
                <li><strong>Adjustments:</strong> Work from home 2-3 days/week. Flexible hours (avoid peak fatigue days). Reduce responsibilities temporarily. Inform employer about treatment schedule.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Radiation phase (Months 5-6, daily sessions 5 days/week):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Most patients work:</strong> 80-90% work during radiation (less fatiguing than chemo). Sessions: 15-20 minutes daily. Schedule early morning (8am) or evening (6pm) to minimize work disruption.</li>
                <li><strong>Fatigue increases:</strong> Week 1-2: Feel normal. Week 3-4: Mild fatigue. Week 5-6: Moderate fatigue (may need afternoon rest). Most continue working but reduce intensity.</li>
                <li><strong>Time off:</strong> Minimal time off needed (just 15-20 min daily for treatment). Consider 1 day/week off if fatigue significant.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Post-treatment (Months 6-12+):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Return to normal work:</strong> 90%+ return to full-time work by Month 9-12. Gradual energy recovery (50% energy Month 6, 75% Month 9, 90-100% Month 12).</li>
                <li><strong>Hormone therapy side effects:</strong> Joint pain, hot flashes may affect work (manageable with medication). Does not require time off.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>GCC patients working in India during treatment:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Remote work:</strong> Many continue working remotely for GCC employer during India stay. Stable internet, coworking spaces available. Time zone: India +2:30 hours ahead of UAE (manageable overlap).</li>
                <li><strong>Extended medical leave:</strong> Most GCC employers grant 3-6 months medical leave for cancer treatment. Inform HR early, provide medical documentation.</li>
                <li><strong>Insurance continuation:</strong> Verify company insurance covers treatment abroad. COBRA equivalent in UAE (some emirates).</li>
              </ul>
              <p className="text-gray-700">
                <strong>Legal protections:</strong> Most countries have disability/medical leave laws protecting cancer patients (USA: FMLA, UK: Statutory Sick Pay, UAE: Medical Leave). Employers cannot terminate for cancer treatment. Discuss accommodation needs (flexible hours, work-from-home) with HR. Many breast cancer patients successfully work throughout treatment with proper planning and support.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What diet should I follow during breast cancer treatment?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Balanced, high-protein diet essential. No need for extreme diets or restrictions.</strong> Nutrition guidelines by treatment phase:
              </p>
              <p className="mb-3 text-gray-700"><strong>General principles (all phases):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Protein critical:</strong> 1.2-1.5 g/kg body weight daily (repair tissues, prevent muscle loss). Sources: Eggs, chicken, fish, dal, paneer, Greek yogurt, protein shakes. Chemo destroys muscle - adequate protein prevents cachexia (wasting).</li>
                <li><strong>Calories:</strong> Maintain weight (neither gain nor lose &gt;5kg). Weight loss during treatment associated with worse outcomes. Small frequent meals if nausea (6 meals vs 3).</li>
                <li><strong>Hydration:</strong> 8-10 glasses water daily (prevents kidney damage from chemo, reduces constipation).</li>
                <li><strong>No extreme diets:</strong> Avoid ketogenic, vegan (protein deficiency risk), fasting, juicing cleanses. Focus on balanced nutrition, not cure claims.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Post-surgery (Weeks 1-4):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>High-protein for wound healing:</strong> 80-100g protein daily. Eggs, chicken soup, fish, dal, protein shakes.</li>
                <li><strong>Avoid:</strong> No restrictions. Some surgeons recommend avoiding soy in high amounts (phytoestrogens) but not proven harmful in moderate intake.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>During chemotherapy (Months 2-4):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Manage nausea:</strong> Bland foods (toast, crackers, bananas, rice, khichdi). Ginger tea, lemon water. Cold foods better tolerated than hot. Eat before nausea sets in (Days 2-3 post-chemo).</li>
                <li><strong>Boost white blood cells:</strong> No specific foods proven, but protein + vitamins help bone marrow recovery. Avoid raw foods if neutropenic (ANC &lt;500, infection risk from bacteria).</li>
                <li><strong>Manage taste changes:</strong> Metallic taste common (Adriamycin). Use plastic utensils (not metal). Marinate meats, add strong flavors (lemon, spices).</li>
                <li><strong>Weight maintenance:</strong> 60% of patients gain weight during chemo (steroids, decreased activity). Monitor calories, continue exercise.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>During radiation (Months 5-6):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Skin care nutrition:</strong> Vitamin C (citrus, peppers), vitamin E (nuts, avocado) support skin healing. Stay hydrated (prevents dry skin).</li>
                <li><strong>Energy support:</strong> Fatigue increases Week 3-6. Maintain calories, protein. Small frequent meals if appetite decreases.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Post-treatment (long-term):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Anti-recurrence diet:</strong> Plant-based (vegetables, fruits, whole grains, legumes). Limit red/processed meat (&lt;2 servings/week). Avoid alcohol or &lt;1 drink/day. Maintain healthy weight (BMI 20-25).</li>
                <li><strong>Evidence-based benefits:</strong> Mediterranean diet reduces recurrence 15-20%. Obesity increases recurrence risk 30-40% (especially hormone-positive). Weight loss after treatment reduces risk.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Foods to avoid/limit:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Alcohol:</strong> Limit to &lt;1 drink/day or avoid completely (alcohol increases breast cancer recurrence 10-20%).</li>
                <li><strong>Processed/red meat:</strong> Limit (&lt;2 servings/week). No strong evidence but general cancer prevention guideline.</li>
                <li><strong>High-sugar foods:</strong> Excess sugar linked to obesity (indirect risk). Moderate intake.</li>
                <li><strong>Raw/undercooked foods during chemo:</strong> If neutropenic (ANC &lt;1,000), avoid raw fish, sushi, unpasteurized dairy, unwashed fruits/vegetables (infection risk).</li>
              </ul>
              <p className="text-gray-700">
                <strong>Supplements:</strong> Multivitamin OK. Avoid mega-dose antioxidants during chemo/radiation (may protect cancer cells). Vitamin D if deficient. Omega-3 (fish oil) safe, may reduce inflammation. Always inform oncologist about supplements. All oncology hospitals have nutritionists/dietitians available for personalized meal plans.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Is breast cancer treatment covered by insurance for GCC patients?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Insurance coverage varies. Many GCC patients self-pay due to India&apos;s affordability, but some insurance policies cover.</strong> Coverage options:
              </p>
              <p className="mb-3 text-gray-700"><strong>Travel insurance:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Usually NOT covered:</strong> Cancer treatment is pre-existing condition (diagnosis before travel). Travel insurance for emergency only (accident, sudden illness). Denial: "Traveled to India specifically for cancer treatment."</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>International health insurance:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Sometimes covered:</strong> Comprehensive plans (Cigna Global, Allianz Worldwide, Bupa Global, AXA) may cover if: (1) Cancer diagnosed while insured (not pre-existing), (2) Pre-approval obtained before treatment, (3) Hospital is network/JCI-accredited (Apollo, Fortis, Tata Memorial).</li>
                <li><strong>Reimbursement:</strong> Submit hospital invoices, discharge summaries, pathology reports, treatment notes. Reimbursement 4-8 weeks. Coverage typically 60-80% of costs (policy limits, co-pay apply).</li>
                <li><strong>Direct billing:</strong> Some insurers have cashless tie-ups with Apollo, Fortis (hospital bills insurer directly, patient pays co-pay only). Verify before booking.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Company/employer insurance (expat/multinational):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>May be covered:</strong> Comprehensive corporate health plans may cover cancer treatment abroad. Requirements: Pre-approval from HR/insurance, medical necessity (not elective), network hospital (check list).</li>
                <li><strong>Coverage limits:</strong> Annual caps ($50K-200K). Breast cancer treatment in India ($10K-15K) usually within limits. Verify coverage for targeted therapy (Herceptin $6K-10K).</li>
                <li><strong>Continuation during leave:</strong> Verify insurance continues during medical leave (3-6 months in India). Some policies lapse if extended leave.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Why many GCC patients self-pay:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>India costs affordable:</strong> Complete treatment $10K-15K (vs $50K-150K in USA/UAE with insurance). Self-pay may be cheaper than insurance co-pay/deductible.</li>
                <li><strong>Avoid pre-approval delays:</strong> Insurance approval takes 2-4 weeks (medical records review, second opinion). Cancer treatment should not be delayed. Self-pay enables immediate treatment.</li>
                <li><strong>No insurance history:</strong> Self-pay avoids claim record (future premium increases for cancer history).</li>
                <li><strong>Payment flexibility:</strong> Tata Memorial offers government rates ($2K-4K surgery). Apollo/Fortis offer EMI (installments, 0% interest, 6-12 months). Medical loans available in India (low interest).</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>If using insurance:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Step 1:</strong> Contact insurer immediately after diagnosis (pre-approval required, submit pathology, imaging, doctor recommendation).</li>
                <li><strong>Step 2:</strong> Choose network hospital (Apollo, Fortis, Tata - verify with insurer). JCI accreditation usually required for international insurance.</li>
                <li><strong>Step 3:</strong> Obtain itemized quote from hospital (surgery, chemo, radiation breakdown). Submit to insurer.</li>
                <li><strong>Step 4:</strong> Wait for approval (2-4 weeks typically). If denied/delayed, proceed with self-pay (don&apos;t delay treatment).</li>
                <li><strong>Step 5:</strong> Keep all receipts, invoices, medical reports for reimbursement claim (even if initially denied, can appeal).</li>
              </ul>
              <p className="text-gray-700">
                <strong>Recommendation:</strong> Check policy for "international cancer treatment" coverage. If unclear, assume self-pay (most cost-effective in India). If insurance approves, use it. If denied, proceed self-pay immediately - cancer treatment should not be delayed for insurance negotiations. All major hospitals have international patient coordinators to help with insurance paperwork.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Should I get BRCA gene testing? What does it mean for my family?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>BRCA testing recommended if: Age &lt;40 at diagnosis, family history of breast/ovarian cancer, triple-negative cancer, or Ashkenazi Jewish descent.</strong> Testing details and implications:
              </p>
              <p className="mb-3 text-gray-700"><strong>What is BRCA testing?</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>BRCA1 and BRCA2 genes:</strong> Tumor suppressor genes that repair DNA damage. Mutations increase cancer risk dramatically. Inherited mutations passed from parents (50% chance to children).</li>
                <li><strong>Lifetime cancer risk:</strong> BRCA1 mutation: 55-72% breast cancer risk (vs 12% general population), 39-44% ovarian cancer risk. BRCA2 mutation: 45-69% breast cancer risk, 11-17% ovarian cancer risk. Also increased: Second breast cancer (other breast), male breast cancer (6-7% vs 0.1%), prostate, pancreatic cancer.</li>
                <li><strong>Testing method:</strong> Blood test or saliva sample. Genetic sequencing analyzes BRCA1/BRCA2 genes for pathogenic mutations. Results in 2-4 weeks.</li>
                <li><strong>Cost in India:</strong> BRCA1/BRCA2 testing: $300-600 (vs $3,000-5,000 in USA). Multi-gene panel (20-30 cancer genes): $800-1,500. Available at Tata Memorial, Apollo, HCG, Strand Life Sciences (Bangalore).</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Who should get BRCA testing?</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Age &lt;40 at diagnosis:</strong> 10-15% of young breast cancer patients have BRCA mutation. Testing recommended for all.</li>
                <li><strong>Family history:</strong> Mother, sister, or daughter with breast cancer (especially if age &lt;50). Multiple relatives with breast/ovarian cancer. Male relative with breast cancer. Ashkenazi Jewish heritage (10× higher BRCA mutation rate).</li>
                <li><strong>Triple-negative breast cancer:</strong> 15-20% have BRCA1 mutation. Testing recommended for all triple-negative patients.</li>
                <li><strong>Bilateral breast cancer:</strong> Cancer in both breasts suggests genetic predisposition.</li>
                <li><strong>No family history but young:</strong> 50% of BRCA mutation carriers have no family history (new mutation or paternal inheritance, incomplete penetrance).</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>If BRCA positive - treatment implications:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Surgical decision:</strong> May choose bilateral mastectomy (both breasts) even if cancer only one breast (reduces second breast cancer risk 90-95%). Prophylactic mastectomy other breast can be done immediately or later.</li>
                <li><strong>PARP inhibitors:</strong> New targeted therapy for BRCA-mutated cancers (Olaparib/Lynparza). Approved for metastatic BRCA+ breast cancer. Improves progression-free survival. Cost: $6,000-10,000/year in India (vs $150,000 in USA).</li>
                <li><strong>Ovarian cancer screening:</strong> Risk-reducing salpingo-oophorectomy (remove ovaries and fallopian tubes) recommended age 40-45 after childbearing complete. Reduces ovarian cancer risk 90%, breast cancer risk 50%.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Family implications (genetic counseling critical):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>50% inheritance risk:</strong> Each child (son/daughter) has 50% chance of inheriting mutation. Sisters, brothers also 50% risk if parent carrier.</li>
                <li><strong>Recommend testing for:</strong> All first-degree relatives (parents, siblings, children) if BRCA positive. Daughters age 18+ should test (start screening mammograms age 25 if positive). Sons should test (6-7% male breast cancer risk if BRCA2 positive, prostate cancer screening).</li>
                <li><strong>Cascade testing:</strong> Relatives who test positive should inform their children, siblings. Can prevent cancer through early screening, prophylactic surgery.</li>
                <li><strong>Emotional impact:</strong> BRCA result can cause anxiety, guilt (&quot;passing to children&quot;). Genetic counseling essential before and after testing. Support groups available.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>If BRCA negative:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Sporadic cancer:</strong> Cancer not due to inherited mutation (85-90% of breast cancers). Family members not at increased risk (general population risk only).</li>
                <li><strong>Other genes:</strong> Multi-gene panel may identify mutations in other genes (TP53, PALB2, CHEK2, ATM). Smaller risk increases but still significant.</li>
              </ul>
              <p className="text-gray-700">
                <strong>Recommendation:</strong> Discuss BRCA testing with oncologist during initial treatment planning (Week 1-2). If indicated, test before surgery (may influence surgical decision: lumpectomy vs bilateral mastectomy). Genetic counseling mandatory before testing (informed consent, understand implications). All major hospitals have genetic counselors. Testing particularly important if young (&lt;40) or strong family history - results guide treatment and protect family members through early screening/prevention.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Internal Links */}
      <InternalLinks
        title="Related Resources"
        variant="compact"
        links={[
          { title: "Cancer Treatment Cost India", href: "/blog/cancer-treatment-cost-india-vs-world" },
          { title: "Best Oncology Hospitals Mumbai", href: "/blog/best-hospitals-mumbai-medical-tourism" },
          { title: "Medical Tourism from UAE", href: "/blog/medical-tourism-india-uae-patients-guide" },
        ]}
      />

      {/* Social Share */}
      <SocialShare
        title="Breast Cancer Treatment in India 2025: Cost, Best Oncology Hospitals & Success Rate"
        url="/treatments/breast-cancer-treatment-india"
        description="Get world-class breast cancer treatment in India. Complete care $10K-15K, 85-95% survival rate, save 65-80%. Top oncology hospitals, personalized treatment plans."
      />

      {/* Related Articles */}
      <RelatedArticles articles={CANCER_RELATED_ARTICLES} />

      {/* Final CTA */}
      <section className="mb-12">
        <Card className="bg-emerald-50">
          <CardContent className="pt-6">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Get World-Class Breast Cancer Care in India</h2>
            <p className="mb-6 text-gray-700">
              Complete treatment package $10,000-15,000. 85-95% survival rate. Top oncology hospitals. Personalized treatment plans.
              Get your free consultation today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/booking">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Book Free Consultation
                </Button>
              </Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  WhatsApp: +91-98765-43210
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </section>
      {/* Testimonials Section */}
      <Testimonials
        testimonials={TREATMENT_TESTIMONIALS['generic']}
        title="Success Stories from Our Breast Cancer Treatment Patients"
        subtitle="Real transformations from GCC patients who achieved life-changing results"
      />

      {/* Trust Badges Section */}
      <TrustBadges />

      
    </div>
  );
}

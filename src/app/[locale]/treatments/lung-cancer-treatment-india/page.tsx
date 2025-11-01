import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles, CANCER_RELATED_ARTICLES } from '@/components/blog/related-articles';
import { InternalLinks } from '@/components/seo/internal-links';

export const metadata: Metadata = {
  title: 'Lung Cancer Treatment in India 2025: Cost, Best Oncology Hospitals, Success Rate | Surgery, Chemotherapy, Immunotherapy',
  description: 'Comprehensive lung cancer treatment in India. Lobectomy ($5,000-8,000), Chemotherapy ($1,000-2,000/cycle), Radiation ($4,000-6,000), Immunotherapy ($3,000-6,000/cycle). Top oncology hospitals, 60-80% survival rate, save 70-85% vs USA.',
  keywords: [
    'lung cancer treatment india',
    'lung cancer surgery cost india',
    'lung cancer hospital india',
    'lobectomy india',
    'lung cancer chemotherapy india',
    'immunotherapy lung cancer india',
    'radiation therapy lung cancer india',
    'oncology hospital india',
    'علاج سرطان الرئة في الهند',
    'تكلفة علاج سرطان الرئة في الهند',
    'مستشفيات الأورام في الهند',
    'جراحة سرطان الرئة في الهند',
  ],
};

export const dynamic = 'force-dynamic';

export default function LungCancerTreatmentIndiaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
          Lung Cancer Treatment in India: World-Class Care at 70-85% Lower Cost
        </h1>
        <p className="mb-6 text-xl text-gray-700">
          Comprehensive lung cancer treatment from $12,000-25,000 complete package vs $80,000-250,000 in USA.
          Top oncology hospitals with international accreditation, experienced oncologists, latest treatments (surgery, chemotherapy, radiation, targeted therapy, immunotherapy).
          60-80% survival rate for early-stage detection.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/booking">Get Free Consultation</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </Button>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="mb-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">💰 Cost Range</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$12K-25K</p>
              <p className="text-sm text-gray-600">Complete treatment package (surgery + chemo + radiation)</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">✅ Survival Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">60-80%</p>
              <p className="text-sm text-gray-600">5-year survival for Stage I-II NSCLC with treatment</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">💵 Savings vs USA</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">70-85%</p>
              <p className="text-sm text-gray-600">Save $68K-225K on complete treatment</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">⏱️ Treatment Duration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">6-12 months</p>
              <p className="text-sm text-gray-600">Surgery + post-op chemo/radiation + follow-up</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">
          Lung Cancer Treatment Cost Comparison: India vs USA vs UK vs UAE
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Treatment Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left">🇮🇳 India</th>
                <th className="border border-gray-300 px-4 py-2 text-left">🇺🇸 USA</th>
                <th className="border border-gray-300 px-4 py-2 text-left">🇬🇧 UK</th>
                <th className="border border-gray-300 px-4 py-2 text-left">🇦🇪 UAE</th>
                <th className="border border-gray-300 px-4 py-2 text-left">💰 Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Lobectomy (remove 1 lobe)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$5,000-8,000</td>
                <td className="border border-gray-300 px-4 py-2">$30,000-60,000</td>
                <td className="border border-gray-300 px-4 py-2">£20,000-40,000 ($25,300-50,600)</td>
                <td className="border border-gray-300 px-4 py-2">AED 80,000-150,000 ($21,800-40,850)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">73-87%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Pneumonectomy (remove entire lung)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$7,000-12,000</td>
                <td className="border border-gray-300 px-4 py-2">$50,000-80,000</td>
                <td className="border border-gray-300 px-4 py-2">£35,000-60,000 ($44,300-75,900)</td>
                <td className="border border-gray-300 px-4 py-2">AED 120,000-220,000 ($32,680-59,920)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">76-85%</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Chemotherapy (1 cycle 3 weeks)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$1,000-2,000</td>
                <td className="border border-gray-300 px-4 py-2">$7,000-12,000</td>
                <td className="border border-gray-300 px-4 py-2">£5,000-9,000 ($6,325-11,385)</td>
                <td className="border border-gray-300 px-4 py-2">AED 18,000-35,000 ($4,900-9,530)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">71-86%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Radiation Therapy (complete course)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$4,000-6,000</td>
                <td className="border border-gray-300 px-4 py-2">$25,000-45,000</td>
                <td className="border border-gray-300 px-4 py-2">£18,000-35,000 ($22,770-44,275)</td>
                <td className="border border-gray-300 px-4 py-2">AED 60,000-110,000 ($16,340-29,950)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">73-87%</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Targeted Therapy (Erlotinib, 6 months)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$6,000-10,000</td>
                <td className="border border-gray-300 px-4 py-2">$50,000-80,000</td>
                <td className="border border-gray-300 px-4 py-2">£40,000-65,000 ($50,600-82,225)</td>
                <td className="border border-gray-300 px-4 py-2">AED 130,000-210,000 ($35,405-57,195)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">81-88%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Immunotherapy (Pembrolizumab, 1 cycle)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$3,000-6,000</td>
                <td className="border border-gray-300 px-4 py-2">$15,000-20,000</td>
                <td className="border border-gray-300 px-4 py-2">£12,000-16,000 ($15,180-20,240)</td>
                <td className="border border-gray-300 px-4 py-2">AED 45,000-60,000 ($12,255-16,340)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">70-80%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* What's Included */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">What&apos;s Included in Lung Cancer Treatment Package</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">Pre-Treatment Evaluation</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Pulmonologist consultation</li>
                <li>✅ Medical oncologist consultation</li>
                <li>✅ PET-CT scan (full body staging)</li>
                <li>✅ Chest CT with contrast</li>
                <li>✅ Bronchoscopy with biopsy</li>
                <li>✅ Pulmonary function test (PFT)</li>
                <li>✅ Blood tests (tumor markers CEA, CYFRA 21-1)</li>
                <li>✅ Molecular testing (EGFR, ALK, PD-L1)</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">Surgery & Hospital Stay</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Thoracic surgery (open or VATS)</li>
                <li>✅ ICU stay (2-3 days post-op)</li>
                <li>✅ Private room (5-7 days hospital stay)</li>
                <li>✅ Chest tube drainage management</li>
                <li>✅ Pain management (epidural or PCA)</li>
                <li>✅ Respiratory physiotherapy</li>
                <li>✅ Pathology report (lymph node staging)</li>
                <li>✅ Post-op X-rays and monitoring</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">Post-Operative Treatment</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Adjuvant chemotherapy (4-6 cycles)</li>
                <li>✅ Radiation therapy (if needed 25-30 sessions)</li>
                <li>✅ Targeted therapy (if EGFR/ALK positive)</li>
                <li>✅ Immunotherapy (if PD-L1 positive)</li>
                <li>✅ Oncologist follow-up consultations</li>
                <li>✅ CT scans every 3 months (first year)</li>
                <li>✅ Nutritional counseling</li>
                <li>✅ Pain management medications</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">Long-Term Care & Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Surveillance CT scans (years 2-5)</li>
                <li>✅ Pulmonary rehabilitation</li>
                <li>✅ Symptom management (breathlessness, cough)</li>
                <li>✅ Smoking cessation support</li>
                <li>✅ Psycho-oncology counseling</li>
                <li>✅ Palliative care (if needed)</li>
                <li>✅ Recurrence detection and treatment</li>
                <li>✅ Telemedicine follow-up available</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Treatment Options by Stage */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">
          Lung Cancer Treatment Options by Stage (NSCLC - Non-Small Cell Lung Cancer)
        </h2>
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
                <td className="border border-gray-300 px-4 py-2 font-semibold">Stage I (Tumor &lt;3cm, no lymph nodes)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Lobectomy (primary treatment)</td>
                <td className="border border-gray-300 px-4 py-2">May be recommended (adjuvant 4 cycles)</td>
                <td className="border border-gray-300 px-4 py-2">Not typically required</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">68-92%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Stage II (Tumor 3-7cm, or 1-2 lymph nodes)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Lobectomy + lymph node dissection</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Yes (adjuvant 4-6 cycles)</td>
                <td className="border border-gray-300 px-4 py-2">If close margins or N1 disease</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">53-60%</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Stage III (Locally advanced, 3+ lymph nodes)</td>
                <td className="border border-gray-300 px-4 py-2">If resectable after neoadjuvant treatment</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Yes (neoadjuvant + adjuvant, 6-8 cycles)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Yes (concurrent or sequential)</td>
                <td className="border border-gray-300 px-4 py-2 text-orange-600 font-semibold">13-36%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Stage IV (Metastatic to other organs)</td>
                <td className="border border-gray-300 px-4 py-2">Not recommended (palliative only)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Yes (systemic chemotherapy)</td>
                <td className="border border-gray-300 px-4 py-2">Palliative radiation for symptoms</td>
                <td className="border border-gray-300 px-4 py-2 text-red-600 font-semibold">0-10%</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Stage IV (with targetable mutations)</td>
                <td className="border border-gray-300 px-4 py-2">Not recommended</td>
                <td className="border border-gray-300 px-4 py-2">Targeted therapy (Erlotinib, Osimertinib)</td>
                <td className="border border-gray-300 px-4 py-2">Palliative if needed</td>
                <td className="border border-gray-300 px-4 py-2 text-orange-600 font-semibold">15-30%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          <strong>Note:</strong> SCLC (Small Cell Lung Cancer) treatment protocols differ. SCLC is more aggressive but more responsive to chemotherapy and radiation.
          Limited-stage SCLC: concurrent chemo-radiation. Extensive-stage SCLC: systemic chemotherapy + immunotherapy.
        </p>
      </section>

      {/* Top Oncology Hospitals */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Top 5 Lung Cancer Treatment Hospitals in India</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">#1: Tata Memorial Hospital (Mumbai)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                <strong>Specialty:</strong> Asia&apos;s #1 Cancer Hospital (Government-run, world-class care at affordable prices)<br />
                <strong>Lung Cancer Cases:</strong> 3,500+ new cases annually (largest volume in India)<br />
                <strong>Success Rate:</strong> 70-85% 5-year survival (Stage I-II NSCLC), 95% surgical success<br />
                <strong>Key Doctors:</strong> Dr. Kumar Prabhash (Medical Oncologist, 25+ years), Dr. Prabhat Malik (Thoracic Surgeon, 15,000+ surgeries)<br />
                <strong>Technology:</strong> PET-CT, 3T MRI, da Vinci robotic thoracic surgery, VATS, IMRT, IGRT, CyberKnife<br />
                <strong>Cost:</strong> Lobectomy $3,000-5,000, Chemo $500-1,000/cycle, Radiation $2,500-4,000 (government rates)<br />
                <strong>Why Choose:</strong> Non-profit, most affordable, research institution, international protocols, no commercial bias
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">#2: Apollo Hospitals (Chennai, Delhi, Mumbai)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                <strong>Specialty:</strong> India&apos;s largest private hospital chain, 40+ years cancer care experience<br />
                <strong>Lung Cancer Cases:</strong> 2,500+ annually across all Apollo centers<br />
                <strong>Success Rate:</strong> 68-82% 5-year survival (Stage I-II), 97% surgical success<br />
                <strong>Key Doctors:</strong> Dr. Vinod Raina (Medical Oncologist, Delhi), Dr. Belson (Thoracic Surgeon, Chennai)<br />
                <strong>Technology:</strong> Proton Therapy (Delhi), CyberKnife, TrueBeam, VATS, Robotic surgery, Molecular profiling lab<br />
                <strong>Cost:</strong> Lobectomy $6,000-9,000, Chemo $1,200-2,200/cycle, Radiation $4,500-6,500<br />
                <strong>Why Choose:</strong> International accreditation (JCI), one-stop cancer care, dedicated thoracic oncology team
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">#3: Fortis Memorial Research Institute (Gurgaon)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                <strong>Specialty:</strong> North India&apos;s premier thoracic oncology center<br />
                <strong>Lung Cancer Cases:</strong> 1,800+ annually<br />
                <strong>Success Rate:</strong> 70-85% 5-year survival (Stage I-II), 98% surgical success<br />
                <strong>Key Doctors:</strong> Dr. Sajjan Rajpurohit (Thoracic Surgeon, 8,000+ surgeries), Dr. Manish Singhal (Medical Oncologist)<br />
                <strong>Technology:</strong> da Vinci Xi robot (300+ thoracic surgeries annually), EDGE Radiosurgery, Truebeam STx<br />
                <strong>Cost:</strong> Lobectomy $5,500-8,500, Chemo $1,000-2,000/cycle, Radiation $4,000-6,000<br />
                <strong>Why Choose:</strong> Highest robotic thoracic surgery volume in North India, dedicated thoracic ICU, fast-track protocols
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">#4: HCG Cancer Centre (Bangalore, Mumbai)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                <strong>Specialty:</strong> India&apos;s largest dedicated cancer care network (25+ centers)<br />
                <strong>Lung Cancer Cases:</strong> 2,000+ annually across centers<br />
                <strong>Success Rate:</strong> 68-80% 5-year survival (Stage I-II), 96% surgical success<br />
                <strong>Key Doctors:</strong> Dr. Vishal Rao (Head & Neck + Thoracic Oncology), Dr. K.G. Babu (Medical Oncologist)<br />
                <strong>Technology:</strong> CyberKnife M6, TrueBeam, VATS, Comprehensive genomic profiling (Foundation Medicine)<br />
                <strong>Cost:</strong> Lobectomy $5,000-7,500, Chemo $900-1,800/cycle, Radiation $3,500-5,500<br />
                <strong>Why Choose:</strong> Cancer-only focus, multidisciplinary tumor boards, clinical trials access
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">#5: Max Super Speciality Hospital (Saket, Delhi)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                <strong>Specialty:</strong> Premier thoracic surgery and oncology center in Delhi NCR<br />
                <strong>Lung Cancer Cases:</strong> 1,500+ annually<br />
                <strong>Success Rate:</strong> 70-82% 5-year survival (Stage I-II), 97% surgical success<br />
                <strong>Key Doctors:</strong> Dr. Harit Chaturvedi (Thoracic Surgeon, 12,000+ surgeries), Dr. Vinod Raina (Medical Oncologist)<br />
                <strong>Technology:</strong> TrueBeam STx, VATS, Endobronchial ultrasound (EBUS), Navigational bronchoscopy<br />
                <strong>Cost:</strong> Lobectomy $6,000-8,500, Chemo $1,100-2,100/cycle, Radiation $4,200-6,200<br />
                <strong>Why Choose:</strong> High-volume thoracic surgery center, experienced anesthesia team, excellent post-op outcomes
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Complete Treatment Timeline */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">
          Lung Cancer Treatment Timeline: What to Expect (Stage II NSCLC Example)
        </h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Week 1-2: Diagnosis & Staging</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Tests:</strong> PET-CT scan (full body staging), Chest CT with contrast, Bronchoscopy with biopsy, PFT (lung function), Blood tests (CEA tumor marker).<br />
                <strong>Consultations:</strong> Pulmonologist, Medical oncologist, Thoracic surgeon (multidisciplinary tumor board review).<br />
                <strong>Planning:</strong> Confirm Stage II NSCLC, Discuss surgery + adjuvant chemotherapy plan, Pre-operative cardiac clearance, Smoking cessation counseling.<br />
                <strong>International Patients:</strong> Coordinate medical records transfer, Visa processing if needed, Hotel booking near hospital.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Week 3-4: Surgery (Lobectomy)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Procedure:</strong> Lobectomy (remove cancerous lobe) + Systematic lymph node dissection. VATS (minimally invasive) or open thoracotomy based on tumor location.<br />
                <strong>Hospital Stay:</strong> 5-7 days total. ICU 2-3 days post-op (chest tube drainage, pain management with epidural or PCA). Then private room (respiratory physiotherapy, mobilization).<br />
                <strong>Recovery:</strong> Chest tube removed Day 3-4 when drainage minimal. Pain gradually improves. Breathing exercises critical (incentive spirometer 10x per hour).<br />
                <strong>Pathology:</strong> Final pathology report available 7-10 days post-surgery (confirms stage, lymph node involvement, margins).
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Month 2-3: Recovery & Adjuvant Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Home Recovery:</strong> Gradual return to activities. Avoid heavy lifting 6-8 weeks. Continue breathing exercises. Manage pain with oral medications.<br />
                <strong>Follow-up:</strong> Week 6 post-op: CT chest (check for complications, residual disease). Oncologist consultation: Review pathology, plan adjuvant chemotherapy.<br />
                <strong>Adjuvant Chemo Decision:</strong> Recommended for Stage II NSCLC (reduces recurrence risk by 5-15%). Standard regimen: Cisplatin + Vinorelbine or Pemetrexed. 4 cycles (12 weeks).<br />
                <strong>International Patients:</strong> Can return home for recovery, come back for chemotherapy. Or stay in India for continuous treatment.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Month 4-6: Adjuvant Chemotherapy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Schedule:</strong> 4 cycles, each cycle = 3 weeks (Day 1 + Day 8 chemo, then 1-week rest). Total duration: 12 weeks.<br />
                <strong>Side Effects:</strong> Nausea (anti-emetics given), Fatigue (improves between cycles), Low blood counts (monitored with weekly CBC), Hair thinning (not complete baldness with these drugs).<br />
                <strong>Monitoring:</strong> CT chest after 2 cycles (check for recurrence). CT chest after completing 4 cycles (baseline for surveillance).<br />
                <strong>Support:</strong> Nutritional counseling (maintain weight), Psycho-oncology support, Fatigue management strategies.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Month 7-12: Post-Treatment Surveillance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Follow-up Schedule:</strong> CT chest every 3 months for first year. Oncologist visit every 3 months.<br />
                <strong>Symptoms to Monitor:</strong> New cough (lasting &gt;2 weeks), Breathlessness, Chest pain, Weight loss, Bone pain (could indicate metastasis).<br />
                <strong>Lifestyle:</strong> Smoking cessation mandatory (doubles survival if quit). Pulmonary rehabilitation (breathing exercises, gradual exercise increase). Healthy diet.<br />
                <strong>Emotional Health:</strong> Cancer survivorship programs, Support groups, Mindfulness and stress management.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Year 2-5: Long-Term Surveillance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Years 2-3:</strong> CT chest every 6 months. Oncologist visit every 6 months.<br />
                <strong>Years 4-5:</strong> CT chest annually. Annual oncologist visit.<br />
                <strong>Second Primary Lung Cancer Risk:</strong> Smokers have 1-2% annual risk of new primary lung cancer (separate from recurrence). Annual low-dose CT screening recommended.<br />
                <strong>Recurrence:</strong> Most recurrences occur within 2 years. If detected early, potentially treatable with surgery, radiation, or systemic therapy.<br />
                <strong>5-Year Milestone:</strong> If cancer-free at 5 years, considered &quot;cured&quot; (though lifelong surveillance recommended for high-risk patients).
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema
        faqs={[
          {
            question: 'How much does lung cancer treatment cost in India?',
            answer: 'Complete lung cancer treatment in India costs $12,000-25,000 (surgery + chemotherapy + radiation) vs $80,000-250,000 in USA (70-85% savings). Lobectomy: $5,000-8,000. Chemotherapy: $1,000-2,000 per cycle. Radiation: $4,000-6,000. Targeted therapy: $6,000-10,000 for 6 months. Immunotherapy: $3,000-6,000 per cycle.',
          },
          {
            question: 'What is the success rate of lung cancer treatment in India?',
            answer: 'Stage I NSCLC: 68-92% 5-year survival with surgery. Stage II: 53-60% with surgery + chemotherapy. Stage III: 13-36% with multimodal treatment (surgery + chemo + radiation). Stage IV: 0-10% (but 15-30% with targeted therapy if EGFR/ALK positive). Early detection is critical for best outcomes.',
          },
          {
            question: 'Which hospitals in India are best for lung cancer treatment?',
            answer: 'Top 5: (1) Tata Memorial Hospital Mumbai - Asia #1, government rates, 3,500+ cases annually. (2) Apollo Hospitals Chennai/Delhi - Proton therapy, 2,500+ cases. (3) Fortis Gurgaon - Premier robotic surgery, 1,800+ cases. (4) HCG Bangalore - Largest cancer network, 2,000+ cases. (5) Max Delhi - High-volume thoracic center, 1,500+ cases.',
          },
          {
            question: 'How long does lung cancer treatment take?',
            answer: 'Total: 6-12 months. Surgery (lobectomy): 3-4 hour operation, 5-7 day hospital stay. Recovery: 6-8 weeks before chemotherapy. Adjuvant chemotherapy: 4 cycles = 12 weeks. Radiation: 5-6 weeks if needed. Then lifelong surveillance: CT chest every 3 months (Year 1), every 6 months (Years 2-3), annually (Years 4-5).',
          },
          {
            question: 'Can lung cancer be cured?',
            answer: 'Yes, if detected early. Stage I NSCLC: 68-92% cure rate with surgery alone. Stage II: 53-60% cure with surgery + chemotherapy. Stage III: 13-36% cure with aggressive multimodal treatment. Stage IV: Usually not curable, but treatable (targeted therapy/immunotherapy can extend survival by years). 5-year cancer-free = considered cured.',
          },
          {
            question: 'What is the difference between NSCLC and SCLC?',
            answer: 'NSCLC (Non-Small Cell Lung Cancer): 85% of lung cancers. Slower growing. Treatment: Surgery (if early), chemotherapy, radiation, targeted therapy, immunotherapy. Better prognosis. SCLC (Small Cell Lung Cancer): 15% of cases. Aggressive, fast-growing. Treatment: Chemotherapy + radiation (surgery rarely helpful). Responds well to chemo initially but higher recurrence.',
          },
          {
            question: 'Do I need targeted therapy or immunotherapy?',
            answer: 'Depends on molecular testing. Targeted therapy: Only if EGFR mutation (20-30% of NSCLC) or ALK rearrangement (5%). Drugs: Erlotinib, Osimertinib, Crizotinib. Very effective for Stage IV (months to years of disease control). Immunotherapy: If PD-L1 expression ≥50%. Drug: Pembrolizumab. Works by boosting immune system to fight cancer. Both dramatically improve Stage IV survival.',
          },
          {
            question: 'Can I travel back home during lung cancer treatment?',
            answer: 'Yes, with planning. After surgery: Stay 2 weeks post-discharge for follow-up (total 3-4 weeks in India). After chemotherapy cycle: Can travel 1 week after chemo (avoid infection exposure). Between cycles: Safe to travel home for 2-week break. Radiation: Requires 5-6 weeks continuous stay (daily treatments). Final surveillance: CT scans can be done locally, results shared with oncologist via telemedicine.',
          },
        ]}
      />

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Is lung cancer treatment in India safe for international patients?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Yes, extremely safe. Top hospitals (Tata Memorial, Apollo, Fortis, HCG, Max) have international accreditation (JCI, NABH).
                Success rates match or exceed Western standards. Infection rates &lt;2% (international benchmark). Dedicated international patient coordinators handle logistics.
                English-speaking staff throughout. 150,000+ international patients travel to India annually for cancer treatment.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Will I lose all my hair with chemotherapy?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Not necessarily. Lung cancer chemotherapy (Cisplatin + Vinorelbine or Pemetrexed) causes hair thinning, not complete baldness like some breast cancer regimens.
                50-70% of patients experience moderate hair thinning (manageable with short haircuts). Hair grows back fully 3-6 months after completing chemotherapy.
                Cooling caps available at premium hospitals to reduce hair loss by 50%. Eyelashes/eyebrows usually unaffected.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>What if my cancer comes back after treatment?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Recurrence rate: 30-40% for Stage II NSCLC despite optimal treatment. Most recurrences happen within 2 years. Treatment options depend on location and extent:
                (1) Local recurrence: Re-surgery or radiation. (2) Distant metastasis: Systemic therapy (chemotherapy, targeted therapy if EGFR+, immunotherapy if PD-L1+).
                (3) Second primary lung cancer: Treat as new cancer (potentially curable with surgery if early stage). Regular surveillance critical for early detection.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>How much smoking cessation improves survival?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Doubles survival! Continuing smoking after lung cancer diagnosis: 50-60% 5-year survival → 25-30% (50% reduction). Quitting immediately: Survival returns to baseline (50-60%).
                Benefits: (1) Better surgical healing (2) Lower chemotherapy side effects (3) Better radiation response (4) Reduced second primary cancer risk (1-2% annually vs 5-8% for continued smokers).
                Support available: Nicotine replacement therapy, Varenicline (Champix), Counseling. India cost: $50-200 for 3-month quit program.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Internal Links */}
      <InternalLinks
        title="Related Resources"
        links={[
          {
            title: 'Best Oncology Hospitals in India',
            href: '/hospitals',
            description: 'Top cancer treatment centers with international accreditation',
          },
          {
            title: 'Cancer Treatment Cost Guide',
            href: '/blog/cancer-treatment-cost-india-vs-world',
            description: 'Comprehensive cost comparison for all cancer types',
          },
          {
            title: 'Medical Tourism from UAE',
            href: '/for-uae-patients',
            description: 'Complete guide for patients from Dubai, Abu Dhabi, Sharjah',
          },
        ]}
        variant="compact"
      />

      {/* Social Share */}
      <SocialShare
        title="Lung Cancer Treatment in India: Cost, Best Hospitals & Survival Rates"
        url="/treatments/lung-cancer-treatment-india"
        description="Complete lung cancer treatment in India from $12K-25K vs $80K-250K in USA. Top oncology hospitals, 60-80% survival rate Stage I-II NSCLC. Save 70-85%."
      />

      {/* Related Articles */}
      <RelatedArticles articles={CANCER_RELATED_ARTICLES} />

      {/* Final CTA */}
      <Card className="bg-emerald-50">
        <CardContent className="pt-6">
          <h2 className="mb-4 text-2xl font-bold text-center text-emerald-900">
            Ready to Start Your Lung Cancer Treatment Journey in India?
          </h2>
          <p className="mb-6 text-center text-gray-700">
            Get personalized treatment plan and cost estimate from top oncology hospitals within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/booking">Book Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                WhatsApp: +91 98765 43210
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

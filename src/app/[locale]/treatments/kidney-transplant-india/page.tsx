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

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Kidney Transplant India 2025: Cost $12,000-18,000, Best Hospitals',
  description: 'Kidney transplant in India costs $12,000-18,000 vs $400,000+ in USA. 95% 1-year graft survival. Top renal transplant hospitals with 400+ annual procedures. Save 80-85%.',
  keywords: [
    'kidney transplant india',
    'kidney transplant cost india',
    'renal transplant india',
    'best hospital kidney transplant india',
    'living donor kidney transplant india',
    'kidney transplant success rate india',
    'kidney transplant delhi',
    'kidney transplant mumbai',
    'زراعة الكلى في الهند',
    'تكلفة زراعة الكلى في الهند',
    'أفضل مستشفيات زراعة الكلى في الهند',
    'زراعة الكلى من متبرع حي في الهند',
  ],
  alternates: {
    canonical: 'https://shifaalhind.onrender.com/en/treatments/kidney-transplant-india',
    languages: {
      'en-US': 'https://shifaalhind.onrender.com/en/treatments/kidney-transplant-india',
      'ar-SA': 'https://shifaalhind.onrender.com/ar/treatments/kidney-transplant-india',
      'x-default': 'https://shifaalhind.onrender.com/en/treatments/kidney-transplant-india',
    },
  },
};

const RELATED_ARTICLES = [
  { title: "Medical Visa India Guide", href: "/blog/medical-visa-india-complete-guide", description: "Complete visa process for medical tourists" },
  { title: "Best Hospitals Delhi", href: "/blog/best-hospitals-delhi-medical-tourism", description: "Top 10 JCI-accredited hospitals in Delhi" },
  { title: "Medical Tourism Guide", href: "/blog/medical-tourism-uae-patients-guide", description: "Complete guide for GCC patients visiting India" },
];

export default async function KidneyTransplantIndiaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb Schema */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://shifaalhind.onrender.com' },
        { name: 'Treatments', url: 'https://shifaalhind.onrender.com/treatments' },
        { name: 'Kidney Transplant in India', url: 'https://shifaalhind.onrender.com/treatments/kidney-transplant-india' },
      ]} />

      {/* Medical Procedure Schema */}
      <MedicalProcedureSchema
        name="Kidney Transplant (Renal Transplant)"
        description="A kidney transplant is a surgical procedure to place a healthy kidney from a living or deceased donor into a patient whose kidneys no longer function properly. It is the definitive treatment for end-stage renal disease (ESRD)."
        procedureType="SurgicalProcedure"
        bodyLocation="Kidney"
        preparation="HLA typing, crossmatch testing, donor evaluation, complete blood workup, cardiac clearance, dialysis optimization, immunological screening."
        followup="Lifelong immunosuppressive therapy, regular creatinine monitoring, protocol biopsies, monthly follow-ups for 6 months then quarterly."
        url="https://shifaalhind.onrender.com/treatments/kidney-transplant-india"
      />

      {/* Hero Section */}
      <section className="mb-12">
        <h1 className="mb-4 text-3xl md:text-4xl font-bold text-gray-900">Kidney Transplant in India: Complete Guide 2025</h1>
        <p className="mb-6 text-xl text-gray-700">
          Get a life-saving kidney transplant in India at 80-85% lower cost than USA/UK. Living and cadaver donor programs from $12,000-18,000 with 95% 1-year graft survival at JCI-accredited transplant centers.
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
              <div className="text-3xl font-bold text-primary-600">$12,000-18,000</div>
              <p className="text-sm text-gray-600">All-Inclusive Cost</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary-600">95%</div>
              <p className="text-sm text-gray-600">1-Year Graft Survival</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary-600">80-85%</div>
              <p className="text-sm text-gray-600">Savings vs USA</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary-600">2-3 Weeks</div>
              <p className="text-sm text-gray-600">Hospital Stay</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl md:text-3xl font-bold text-gray-900">Kidney Transplant Cost: India vs USA vs UK vs UAE</h2>
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
                <td className="border border-gray-300 px-4 py-3">Living Donor Kidney Transplant</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">$12,000 - $16,000</td>
                <td className="border border-gray-300 px-4 py-3">$400,000 - $500,000</td>
                <td className="border border-gray-300 px-4 py-3">$55,000 - $70,000</td>
                <td className="border border-gray-300 px-4 py-3">$80,000 - $120,000</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold">80-97%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Cadaver Donor Transplant</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">$15,000 - $20,000</td>
                <td className="border border-gray-300 px-4 py-3">$450,000 - $550,000</td>
                <td className="border border-gray-300 px-4 py-3">$60,000 - $80,000</td>
                <td className="border border-gray-300 px-4 py-3">$95,000 - $140,000</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold">75-96%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">ABO-Incompatible Transplant</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">$18,000 - $25,000</td>
                <td className="border border-gray-300 px-4 py-3">$500,000 - $650,000</td>
                <td className="border border-gray-300 px-4 py-3">$75,000 - $100,000</td>
                <td className="border border-gray-300 px-4 py-3">$120,000 - $180,000</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold">80-96%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Paired Kidney Exchange</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">$14,000 - $18,000</td>
                <td className="border border-gray-300 px-4 py-3">$420,000 - $520,000</td>
                <td className="border border-gray-300 px-4 py-3">$58,000 - $75,000</td>
                <td className="border border-gray-300 px-4 py-3">$90,000 - $130,000</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold">80-97%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Transplant with Desensitization</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">$20,000 - $30,000</td>
                <td className="border border-gray-300 px-4 py-3">$550,000 - $700,000</td>
                <td className="border border-gray-300 px-4 py-3">$85,000 - $110,000</td>
                <td className="border border-gray-300 px-4 py-3">$140,000 - $200,000</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold">78-96%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          <strong>Note:</strong> Costs include pre-transplant workup, surgery, hospital stay (10-14 days), immunosuppressants (3 months), follow-up consultations, and donor surgery expenses.
        </p>
      </section>

      {/* What's Included */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl md:text-3xl font-bold text-gray-900">What&apos;s Included in the Kidney Transplant Package?</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Pre-Transplant Evaluation</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>HLA tissue typing and crossmatch testing</li>
                <li>Panel Reactive Antibody (PRA) screening</li>
                <li>Comprehensive donor evaluation (medical, psychological)</li>
                <li>Blood group and antibody testing</li>
                <li>Cardiac clearance (ECG, echocardiogram)</li>
                <li>Viral screening (HIV, HBV, HCV, CMV, EBV)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Surgery Day (3-4 Hours)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>General anesthesia and surgical team</li>
                <li>Donor nephrectomy (laparoscopic, 2-3 hours)</li>
                <li>Recipient transplant surgery (3-4 hours)</li>
                <li>Vascular anastomosis and ureteral implantation</li>
                <li>ICU monitoring post-surgery (24-48 hours)</li>
                <li>Induction immunosuppression (Basiliximab/ATG)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hospital Stay (10-14 Days)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Private room with attendant bed</li>
                <li>Daily creatinine and electrolyte monitoring</li>
                <li>Immunosuppressant dose titration</li>
                <li>Ultrasound Doppler of graft kidney</li>
                <li>Physiotherapy and mobilization</li>
                <li>Dietitian consultation for renal diet</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Follow-Up Care</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Immunosuppressants (Tacrolimus, MMF, Prednisolone)</li>
                <li>Weekly creatinine and drug level monitoring</li>
                <li>Protocol biopsy if clinically indicated</li>
                <li>3-month medication supply included</li>
                <li>Virtual follow-up consultations after discharge</li>
                <li>Lifetime email/WhatsApp support</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Procedure Comparison: Living vs Cadaver Donor */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl md:text-3xl font-bold text-gray-900">Living Donor vs Cadaver Donor Kidney Transplant</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Factor</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Living Donor Transplant</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cadaver (Deceased) Donor Transplant</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Graft Survival (1 Year)</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">95-98%</td>
                <td className="border border-gray-300 px-4 py-3">88-93%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold">Graft Survival (5 Year)</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">85-90%</td>
                <td className="border border-gray-300 px-4 py-3">70-80%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Waiting Time</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">2-4 weeks (planned surgery)</td>
                <td className="border border-gray-300 px-4 py-3 text-orange-600">6-12 months (waitlist)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold">Cold Ischemia Time</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">Minimal (simultaneous surgery)</td>
                <td className="border border-gray-300 px-4 py-3 text-orange-600">12-24 hours</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Delayed Graft Function</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">Rare (2-5%)</td>
                <td className="border border-gray-300 px-4 py-3 text-orange-600">20-30% (may need dialysis initially)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold">Cost (India)</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">$12,000-16,000</td>
                <td className="border border-gray-300 px-4 py-3">$15,000-20,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Donor Source</td>
                <td className="border border-gray-300 px-4 py-3">Close relative (parent, sibling, spouse)</td>
                <td className="border border-gray-300 px-4 py-3">Brain-dead donor (NOTTO registry)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold">Best For</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">Best overall outcomes, planned procedure</td>
                <td className="border border-gray-300 px-4 py-3">Patients without living donor</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 rounded-lg border border-primary-200 bg-primary-50 p-6">
          <h3 className="mb-3 text-xl font-bold">Recommendation:</h3>
          <p className="text-gray-700">
            <strong>Living donor transplant is preferred</strong> whenever possible due to superior graft survival, minimal waiting time, and better long-term outcomes. India&apos;s Transplantation of Human Organs Act (THOA) permits near-relative donation (parents, siblings, spouse, children). For unrelated donors, authorization committee approval is required.
          </p>
        </div>
      </section>

      {/* Top 3 Hospitals */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl md:text-3xl font-bold text-gray-900">Top 3 Hospitals for Kidney Transplant in India</h2>
        <div className="space-y-6">
          <Card className="border-primary-200 bg-primary-50">
            <CardHeader>
              <CardTitle className="text-2xl">1. Medanta - The Medicity (Gurugram)</CardTitle>
              <p className="text-sm text-gray-600">JCI-Accredited | 500+ Kidney Transplants Annually</p>
            </CardHeader>
            <CardContent>
              <p className="mb-2"><strong>Key Nephrologists/Surgeons:</strong> Dr. Rajesh Ahlawat (Padma Shri awardee, 4,000+ transplants), Dr. Vijay Kher (pioneer in ABO-incompatible transplant)</p>
              <p className="mb-2"><strong>Technology:</strong> Robotic-assisted donor nephrectomy, HLA molecular typing, protocol biopsies, desensitization protocols</p>
              <p className="mb-2"><strong>Success Rate:</strong> 96% 1-year graft survival (living donor)</p>
              <p className="mb-2"><strong>Specialties:</strong> ABO-incompatible transplants, paired kidney exchange, pediatric transplant, re-transplantation</p>
              <p><strong>Cost:</strong> $13,000 - $18,000 (living donor) | $16,000 - $22,000 (cadaver)</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">2. Apollo Hospitals (Chennai & Delhi)</CardTitle>
              <p className="text-sm text-gray-600">JCI-Accredited | 450+ Transplants Annually</p>
            </CardHeader>
            <CardContent>
              <p className="mb-2"><strong>Key Nephrologists/Surgeons:</strong> Dr. Anant Kumar (3,500+ transplants, laparoscopic donor pioneer), Dr. Sandeep Guleria (complex re-transplants)</p>
              <p className="mb-2"><strong>Technology:</strong> Laparoscopic donor nephrectomy (3D HD), DSA monitoring, BK virus screening, Luminex crossmatch</p>
              <p className="mb-2"><strong>Success Rate:</strong> 95% 1-year graft survival</p>
              <p className="mb-2"><strong>Specialties:</strong> International patient program, Arabic-speaking coordinators, swap transplant program</p>
              <p><strong>Cost:</strong> $12,000 - $17,000 (living donor) | $15,000 - $20,000 (cadaver)</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">3. Fortis Hospital (Delhi & Mumbai)</CardTitle>
              <p className="text-sm text-gray-600">NABH & JCI-Accredited | 350+ Transplants Annually</p>
            </CardHeader>
            <CardContent>
              <p className="mb-2"><strong>Key Nephrologists/Surgeons:</strong> Dr. Salil Jain (nephrology head, 2,500+ transplants), Dr. Priyadarshi Ranjan (minimally invasive transplant surgery)</p>
              <p className="mb-2"><strong>Technology:</strong> Laparoscopic donor surgery, advanced immunosuppression protocols, in-house HLA lab, flow cytometry crossmatch</p>
              <p className="mb-2"><strong>Success Rate:</strong> 94% 1-year graft survival</p>
              <p className="mb-2"><strong>Specialties:</strong> Desensitization protocols, highly sensitized patients, pediatric renal transplant</p>
              <p><strong>Cost:</strong> $12,000 - $16,000 (living donor) | $14,000 - $19,000 (cadaver)</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl md:text-3xl font-bold text-gray-900">Kidney Transplant Recovery Timeline</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Week 1-2: Immediate Post-Op</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>ICU monitoring for 24-48 hours post-surgery</li>
                <li>Catheter removal by Day 5-7, drain removal Day 3-5</li>
                <li>Creatinine monitored daily (should drop from dialysis levels to near-normal)</li>
                <li>Immunosuppressant drug levels checked and adjusted daily</li>
                <li>Gentle mobilization from Day 2 (walking in ward)</li>
                <li>Dialysis stopped once graft functions (usually within 24-48 hours for living donor)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Month 1-3: Early Recovery</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Weekly blood tests (creatinine, tacrolimus levels, CBC, LFT)</li>
                <li>Strict infection precautions (mask in crowds, avoid raw food)</li>
                <li>Immunosuppressant doses gradually reduced and stabilized</li>
                <li>Avoid heavy lifting (&gt;5 kg) for 6-8 weeks</li>
                <li>Can return to light desk work by Week 4-6</li>
                <li>CMV and BK virus monitoring every 2 weeks</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Months 3-6: Stabilization</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Blood tests move to bi-weekly, then monthly</li>
                <li>Creatinine should stabilize at 1.0-1.5 mg/dL</li>
                <li>Resume moderate exercise (walking, swimming)</li>
                <li>Return to full work duties</li>
                <li>Protocol biopsy at 3 months if clinically indicated</li>
                <li>Annual skin cancer screening begins (immunosuppression risk)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary-200 bg-primary-50">
            <CardHeader>
              <CardTitle>Months 6-12+: Long-Term Management</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Blood tests every 1-2 months for life</li>
                <li>Stable immunosuppressant regimen (lowest effective doses)</li>
                <li>Annual cardiovascular screening (transplant patients at higher CV risk)</li>
                <li>Resume all normal activities including travel, sports</li>
                <li>Lifelong medication adherence is critical (missed doses cause rejection)</li>
                <li>Annual kidney function assessment (GFR, proteinuria screening)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Internal Links */}
      <InternalLinks links={[
        { text: 'View All Treatments', href: '/treatments' },
        { text: 'Cost Calculator', href: '/cost-calculator' },
        { text: 'Our Partner Hospitals', href: '/hospitals' },
        { text: 'Liver Transplant India', href: '/treatments/liver-transplant-india' },
      ]} />

      {/* Social Share */}
      <div className="my-8">
        <SocialShare
          title="Kidney Transplant India 2025: Cost $12,000-18,000, Best Hospitals"
          description="Kidney transplant in India costs $12,000-18,000 vs $400,000+ in USA. 95% 1-year graft survival. Save 80-85% at top JCI-accredited transplant centers."
        />
      </div>

      {/* Related Articles */}
      <div className="mb-12">
        <RelatedArticles articles={RELATED_ARTICLES} />
      </div>

      {/* FAQ Schema */}
      <FAQSchema faqs={[
        { question: "What are the donor requirements for kidney transplant in India?", answer: "Living donors must be a near relative (parent, sibling, spouse, or child) under India's THOA law. Donors must be aged 18-65, have two healthy kidneys, matching or compatible blood group, negative crossmatch, no diabetes, uncontrolled hypertension, or kidney disease. Donor evaluation takes 5-7 days and includes renal function tests, CT angiography, HLA typing, psychological assessment, and independent donor advocate clearance. For unrelated donors, an authorization committee must approve the transplant." },
        { question: "How much does kidney transplant cost in India?", answer: "Living donor kidney transplant costs $12,000-16,000 in India, cadaver donor transplant $15,000-20,000, ABO-incompatible transplant $18,000-25,000, paired exchange $14,000-18,000, and transplant with desensitization $20,000-30,000. This includes pre-transplant workup, donor and recipient surgery, 10-14 day hospital stay, ICU charges, immunosuppressants for 3 months, and follow-up care. Compare to $400,000-500,000 in USA or $80,000-120,000 in UAE." },
        { question: "What is the success rate of kidney transplant in India?", answer: "At top Indian transplant centers, 1-year graft survival is 95-98% for living donor transplants and 88-93% for cadaver donor transplants. 5-year graft survival is 85-90% (living) and 70-80% (cadaver). Patient survival exceeds 95% at 5 years. These outcomes are comparable to USA and European centers. Factors affecting success include HLA matching, donor type, immunosuppression adherence, and post-transplant monitoring." },
        { question: "How long is the waiting time for kidney transplant in India?", answer: "For living donor transplant, the entire process takes 3-4 weeks from arrival: donor evaluation (5-7 days), crossmatch and HLA testing (3-5 days), authorization committee approval if needed (7-10 days), and scheduled surgery. For cadaver donor transplant, patients are registered on the NOTTO waitlist and waiting time varies from 6 months to 2+ years depending on blood group and sensitization. Most international patients opt for living donor transplant with a family member." },
        { question: "What immunosuppression is required after kidney transplant?", answer: "Standard triple immunosuppression includes: Tacrolimus (calcineurin inhibitor, 0.05-0.1 mg/kg twice daily, target trough 8-12 ng/mL initially), Mycophenolate Mofetil (MMF, 500-1000mg twice daily), and Prednisolone (tapered from 20mg to 5mg over 3 months). Induction therapy with Basiliximab or ATG is given at surgery. Drug levels are monitored weekly for 3 months, then monthly. Lifelong medication adherence is essential - missed doses increase rejection risk by 7x." },
        { question: "Is kidney transplant better than dialysis?", answer: "Yes, kidney transplant is medically superior to long-term dialysis. Transplant provides: better quality of life (no 3x/week dialysis sessions), longer survival (transplant patients live 10-15 years longer than those on dialysis), lower long-term cost (dialysis costs $30,000-50,000/year in India), fewer dietary restrictions, better cardiovascular outcomes, and improved energy and work capacity. Pre-emptive transplant (before starting dialysis) offers the best outcomes. Most nephrologists recommend transplant as first-line treatment for ESRD." },
        { question: "What are the legal requirements for foreign patients getting kidney transplant in India?", answer: "Foreign patients must comply with India's THOA (Transplantation of Human Organs Act): the donor must be a near relative (parent, sibling, spouse, child) with documented proof of relationship. Required documents include passport copies, relationship proof (birth certificate, marriage certificate), embassy attestation of relationship, medical fitness reports, and no-objection certificates. An Authorization Committee at the hospital reviews all cases. Non-related living donation is strictly regulated and requires additional committee approval. Organ trafficking is a criminal offense in India." },
        { question: "What are the long-term outcomes after kidney transplant in India?", answer: "Long-term outcomes at top Indian centers match global standards: 10-year graft survival is 65-75% (living donor) and 50-60% (cadaver donor). Most transplanted kidneys function for 15-20 years (living donor) or 10-15 years (cadaver donor). Key long-term risks include chronic rejection (15-20% at 10 years), cardiovascular disease (leading cause of death post-transplant), infections (CMV, BK virus), skin cancer (2-3x higher risk), and new-onset diabetes (10-15%). Regular monitoring with creatinine, drug levels, and annual screening ensures early detection and intervention." }
      ]} />

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl md:text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>What are the donor requirements for kidney transplant in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3">
                <strong>Eligible donors:</strong> Near relatives (parent, sibling, spouse, child) aged 18-65 with two healthy kidneys, compatible blood group, negative crossmatch, and no diabetes/kidney disease.
              </p>
              <p>
                <strong>Evaluation process:</strong> 5-7 days including renal function tests, CT angiography of kidneys, HLA typing, psychological assessment, and independent donor advocate clearance. For unrelated donors, an authorization committee must approve the case under India&apos;s THOA law.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How much does kidney transplant cost in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3">
                Living donor transplant: $12,000-16,000. Cadaver donor: $15,000-20,000. ABO-incompatible: $18,000-25,000. Compare to $400,000-500,000 in USA.
              </p>
              <p>
                Cost includes: pre-transplant workup, donor and recipient surgery, 10-14 day hospital stay, ICU charges, 3 months of immunosuppressants, and follow-up consultations. Lifelong medications cost approximately $100-200/month in India.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What is the success rate of kidney transplant in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                At top centers: 1-year graft survival 95-98% (living donor), 88-93% (cadaver). 5-year graft survival 85-90% (living), 70-80% (cadaver). Patient survival exceeds 95% at 5 years. Outcomes comparable to USA/European centers. Key factors: HLA matching quality, donor type, medication adherence, and regular post-transplant monitoring.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How long is the waiting time for kidney transplant in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Living donor:</strong> 3-4 weeks from arrival (evaluation + surgery). <strong>Cadaver donor:</strong> 6 months to 2+ years on NOTTO waitlist. Most international patients bring a family member as living donor, allowing planned surgery within 3-4 weeks. Pre-emptive transplant (before starting dialysis) offers the best outcomes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What immunosuppression is required after kidney transplant?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3">
                <strong>Standard triple therapy:</strong> Tacrolimus + Mycophenolate Mofetil (MMF) + Prednisolone. Induction with Basiliximab or ATG at surgery.
              </p>
              <p>
                Drug levels monitored weekly for 3 months, then monthly for life. Medications are lifelong - never stop without nephrologist guidance. Missing doses increases rejection risk 7x. Cost of maintenance immunosuppression in India: $100-200/month (vs $1,000-2,000/month in USA).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Is kidney transplant better than dialysis?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Yes. Transplant patients live 10-15 years longer than dialysis patients. Benefits include: no 3x/week dialysis sessions, fewer dietary restrictions, better cardiovascular outcomes, improved energy and work capacity, and lower long-term cost (dialysis costs $30,000-50,000/year). Pre-emptive transplant before starting dialysis offers the best outcomes. Most nephrologists recommend transplant as first-line treatment for ESRD.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What are the legal requirements for foreign patients?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3">
                <strong>Required documents:</strong> Passport copies (donor and recipient), relationship proof (birth/marriage certificate), embassy attestation of relationship, medical fitness reports, no-objection certificates.
              </p>
              <p>
                An Authorization Committee at the hospital reviews all cases. The donor must be a near relative under India&apos;s THOA law. Medical visa is required (not tourist visa). Our team assists with all documentation and committee approvals.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What are the long-term outcomes after kidney transplant?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                10-year graft survival: 65-75% (living donor), 50-60% (cadaver). Most transplanted kidneys function 15-20 years (living) or 10-15 years (cadaver). Long-term risks include chronic rejection (15-20% at 10 years), cardiovascular disease, infections (CMV, BK virus), and new-onset diabetes (10-15%). Regular monitoring with creatinine levels, drug level checks, and annual screening ensures early detection and management.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials
        testimonials={TREATMENT_TESTIMONIALS['generic']}
        title="Patient Success Stories"
        subtitle="Hear from international patients who received world-class transplant care in India"
      />


      {/* Contextual Sidebar - Related Treatment Links */}
      <ContextualSidebar treatmentSlug="kidney-transplant-india" locale={locale as 'en' | 'ar'} />
      {/* Trust Badges */}
      <TrustBadges />

      {/* Final CTA */}
      <Card className="mb-12 border-green-200 bg-green-50">
        <CardContent className="pt-6">
          <h2 className="mb-4 text-2xl font-bold">Ready to Start Your Kidney Transplant Journey?</h2>
          <p className="mb-6 text-gray-700">
            Get a <strong>FREE consultation</strong> with India&apos;s top transplant nephrologists. We assist 2,000+ international patients annually with end-to-end transplant coordination including donor evaluation, legal documentation, hospital admission, and post-transplant follow-up.
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
        </CardContent>
      </Card>

      {/* SEO: HowTo + Offer + Speakable Schemas */}
      <TreatmentSchemas
        treatmentName="Kidney Transplant"
        lowPrice={13000}
        highPrice={18000}
        url="/en/treatments/kidney-transplant-india"
      />
    </div>
  );
}

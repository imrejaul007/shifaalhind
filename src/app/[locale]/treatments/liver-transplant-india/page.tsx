import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles } from '@/components/blog/related-articles';
import { InternalLinks } from '@/components/seo/internal-links';
import Link from 'next/link';
import { Testimonials, TREATMENT_TESTIMONIALS } from '@/components/testimonials/testimonials';
import { TrustBadges } from '@/components/trust-badges/trust-badges';
import { BreadcrumbSchema } from '@/components/seo/breadcrumb-schema';
import { MedicalProcedureSchema } from '@/components/seo/medical-procedure-schema';
import { TreatmentSchemas } from '@/components/seo/treatment-schemas';
import { ContextualSidebar } from '@/components/seo/contextual-sidebar';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Liver Transplant India 2025: Cost $25,000-40,000, Best Hospitals',
  description:
    'Liver transplant in India costs $25,000-$40,000 vs $300,000+ in USA. 90% 1-year survival rate, 75-85% savings. Top hepatobiliary surgeons performing 300+ transplants annually at JCI-accredited hospitals.',
  keywords: [
    'liver transplant india',
    'liver transplant cost india',
    'living donor liver transplant india',
    'best liver transplant hospital india',
    'pediatric liver transplant india',
    'cadaver liver transplant india',
    'زراعة الكبد في الهند',
    'تكلفة زراعة الكبد في الهند',
  ],
  alternates: {
    canonical: '/treatments/liver-transplant-india',
  },
};

const FAQS = [
  {
    question: 'What is a living donor liver transplant and how does it work?',
    answer:
      'In a living donor liver transplant (LDLT), a healthy person donates 50-60% of their liver to the recipient. The donor\'s liver regenerates to near-normal size within 6-8 weeks. India is a global leader in LDLT, with top centres like Medanta and Apollo performing 200-300 living donor procedures annually. LDLT has a 92-95% graft survival rate at 1 year and eliminates the wait for a cadaveric organ.',
  },
  {
    question: 'How much does a liver transplant cost in India?',
    answer:
      'A living donor liver transplant in India costs $25,000-$35,000, while a cadaver (deceased donor) liver transplant costs $30,000-$40,000. This includes pre-transplant evaluation, surgery, ICU stay, hospital stay of 3-4 weeks, immunosuppressive medications for the first year, and follow-up consultations. The same procedure costs $300,000-$500,000 in the USA and $200,000-$350,000 in the UK.',
  },
  {
    question: 'What is the MELD score and why is it important?',
    answer:
      'The Model for End-Stage Liver Disease (MELD) score ranges from 6 to 40 and predicts 3-month mortality in patients with chronic liver disease. It is calculated using bilirubin, creatinine, and INR values. A MELD score above 15 generally indicates the need for transplant evaluation. Patients with MELD scores above 30 are prioritised for cadaveric organs. Indian transplant centres evaluate patients across all MELD ranges and offer living donor options that bypass the wait list.',
  },
  {
    question: 'What is the recovery timeline after liver transplant?',
    answer:
      'ICU stay: 5-10 days. Hospital stay: 3-4 weeks total. Patients begin walking with assistance within 3-5 days post-surgery. Light daily activities resume at 6-8 weeks. Return to work: 3-6 months. Full recovery: 6-12 months. Lifelong immunosuppressive medications (tacrolimus, mycophenolate) are required with regular liver function monitoring.',
  },
  {
    question: 'What are the success rates for liver transplant in India?',
    answer:
      'Top Indian centres report 88-92% one-year survival and 75-80% five-year survival, comparable to leading Western transplant programmes. Living donor liver transplants have slightly higher success rates (90-95% at 1 year) than cadaveric transplants (85-90%). Paediatric liver transplant survival exceeds 90% at 5 years at specialised centres.',
  },
  {
    question: 'Is it safe for the living liver donor?',
    answer:
      'Living liver donation is considered safe with a donor mortality risk of 0.1-0.5% at experienced centres. The donor\'s liver regenerates to approximately 85-90% of its original volume within 6-8 weeks. Donors are thoroughly screened with CT volumetry, MRI cholangiography, and comprehensive blood tests. Most donors return to full activity within 4-6 weeks. Indian centres performing 100+ LDLTs per year have the lowest complication rates.',
  },
  {
    question: 'Can patients with alcohol-related liver disease get a transplant in India?',
    answer:
      'Yes. Indian transplant programmes require a minimum of 6 months of documented sobriety and psychosocial evaluation. Patients must demonstrate commitment to abstinence with family support. Alcohol-related cirrhosis is one of the leading indications for liver transplant globally. Post-transplant outcomes are comparable to other indications when sobriety is maintained, with 85-90% one-year survival.',
  },
  {
    question: 'Is paediatric liver transplant available in India?',
    answer:
      'Yes. India has dedicated paediatric liver transplant programmes at centres like Apollo Delhi (Dr. Subash Gupta) and Medanta Gurugram (Dr. A.S. Soin). Common indications include biliary atresia, Wilson disease, and metabolic liver disorders. The Kasai procedure is attempted first for biliary atresia, with transplant if unsuccessful. Paediatric LDLT in India costs $30,000-$40,000 with 90%+ five-year survival.',
  },
];

const RELATED_ARTICLES = [
  {
    title: 'Medical Visa India Guide',
    href: '/blog/medical-visa-india-complete-guide',
    description: 'Complete visa process guide for medical tourists',
  },
  {
    title: 'Best Hospitals in Delhi',
    href: '/blog/best-hospitals-delhi-medical-tourism',
    description: 'Top 10 JCI-accredited hospitals in Delhi NCR',
  },
  {
    title: 'Medical Tourism Guide for UAE Patients',
    href: '/blog/medical-tourism-uae-patients-guide',
    description: 'Everything GCC patients need to know',
  },
];

export default async function LiverTransplantIndiaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Treatments', url: '/treatments' },
          { name: 'Liver Transplant in India', url: '/treatments/liver-transplant-india' },
        ]}
      />
      <MedicalProcedureSchema
        name="Liver Transplant (Hepatic Transplant)"
        description="Liver transplant surgery in India performed by leading hepatobiliary surgeons at JCI-accredited hospitals, including living donor and cadaveric liver transplantation."
        procedureType="SurgicalProcedure"
        bodyLocation="Liver"
        preparation="Pre-transplant evaluation including MELD score assessment, CT volumetry, liver function tests, cardiac clearance, viral serology, and donor compatibility testing."
        followup="Lifelong immunosuppressive therapy (tacrolimus, mycophenolate), regular liver function tests, ultrasound surveillance, and transplant hepatology follow-up."
        howPerformed="The diseased liver is removed (hepatectomy) and replaced with a healthy liver graft from a living donor (right or left lobe) or deceased donor (whole organ). Vascular and biliary anastomoses are performed under microsurgical precision."
        url="/treatments/liver-transplant-india"
      />
      <FAQSchema faqs={FAQS} />

      {/* Hero Section */}
      <section className="mb-12 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-14 text-center text-white md:py-20">
        <h1 className="mb-4 font-serif text-3xl md:text-4xl font-bold md:text-5xl">
          Liver Transplant in India
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-100 md:text-xl">
          Life-saving hepatic transplantation at 75-85% savings. World-renowned surgeons performing
          300+ procedures annually at JCI-accredited centres -- starting from $25,000.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-accent-500 text-lg hover:bg-accent-600">
            <Link href="/booking">Get Free Consultation</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white bg-transparent text-lg text-white hover:bg-white hover:text-primary-700"
          >
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </Button>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="mb-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="text-center shadow-md">
            <CardContent className="p-6">
              <p className="mb-1 text-3xl font-bold text-primary-600">$25,000-40,000</p>
              <p className="text-sm text-gray-600">All-Inclusive Cost</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-md">
            <CardContent className="p-6">
              <p className="mb-1 text-3xl font-bold text-primary-600">90%</p>
              <p className="text-sm text-gray-600">1-Year Survival Rate</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-md">
            <CardContent className="p-6">
              <p className="mb-1 text-3xl font-bold text-primary-600">75-85%</p>
              <p className="text-sm text-gray-600">Savings vs USA/UK</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-md">
            <CardContent className="p-6">
              <p className="mb-1 text-3xl font-bold text-primary-600">3-4 Weeks</p>
              <p className="text-sm text-gray-600">Hospital Stay</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="mb-12">
        <h2 className="mb-6 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">
          Liver Transplant Cost Comparison
        </h2>
        <Card className="overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
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
                  <td className="px-4 py-3 font-medium">Living Donor Liver Transplant</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$25,000-$35,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$300,000-$400,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$200,000-$300,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$150,000-$200,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">Up to 90%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Cadaver Liver Transplant</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$30,000-$40,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$350,000-$500,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$250,000-$350,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$180,000-$250,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">Up to 92%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Pediatric Liver Transplant</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$30,000-$40,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$400,000-$550,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$280,000-$400,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$200,000-$280,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">Up to 93%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">ABO-Incompatible Transplant</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$35,000-$45,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$400,000-$550,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$300,000-$420,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$220,000-$300,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">Up to 91%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Auxiliary Liver Transplant</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$32,000-$42,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$380,000-$500,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$270,000-$380,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$200,000-$280,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">Up to 92%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      {/* What's Included */}
      <section className="mb-12">
        <h2 className="mb-6 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">
          What&apos;s Included in Your Package
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Pre-Transplant Evaluation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Complete blood work, liver function panel, MELD score assessment, CT volumetry,
                MRI cholangiography, cardiac evaluation, pulmonary function tests, viral serology,
                and donor compatibility screening.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Surgery (8-12 Hours)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Hepatectomy and graft implantation, vascular and biliary anastomoses, intra-operative
                Doppler ultrasound monitoring, cell-saver technology, dedicated transplant anaesthesia
                team, and post-operative ICU transfer.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Hospital Stay (3-4 Weeks)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Dedicated transplant ICU (5-10 days), private room with attendant bed, round-the-clock
                hepatology nursing, daily liver function monitoring, nutritionist-planned meals,
                physiotherapy, and infection surveillance.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Follow-Up Care</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Immunosuppressant titration (tacrolimus, mycophenolate, steroids), weekly liver
                function tests for the first 3 months, Doppler ultrasound surveillance, transplant
                hepatologist consultations, and tele-medicine support after departure.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Procedure Comparison: Living Donor vs Cadaver */}
      <section className="mb-12">
        <h2 className="mb-6 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">
          Living Donor vs Cadaver Liver Transplant
        </h2>
        <Card className="overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Factor</th>
                  <th className="px-4 py-3 text-center">Living Donor (LDLT)</th>
                  <th className="px-4 py-3 text-center">Cadaver (DDLT)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Wait Time</td>
                  <td className="px-4 py-3 text-center">2-4 weeks (once donor cleared)</td>
                  <td className="px-4 py-3 text-center">Months to years (organ availability)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">1-Year Survival</td>
                  <td className="px-4 py-3 text-center">90-95%</td>
                  <td className="px-4 py-3 text-center">85-90%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Graft Quality</td>
                  <td className="px-4 py-3 text-center">Excellent (healthy, screened donor)</td>
                  <td className="px-4 py-3 text-center">Variable (depends on donor condition)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Surgery Duration</td>
                  <td className="px-4 py-3 text-center">10-14 hours (two simultaneous operations)</td>
                  <td className="px-4 py-3 text-center">8-12 hours (single operation)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Cost in India</td>
                  <td className="px-4 py-3 text-center">$25,000-$35,000</td>
                  <td className="px-4 py-3 text-center">$30,000-$40,000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Donor Risk</td>
                  <td className="px-4 py-3 text-center">0.1-0.5% mortality; liver regenerates in 6-8 weeks</td>
                  <td className="px-4 py-3 text-center">No living donor involved</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      {/* Top 3 Hospitals */}
      <section className="mb-12">
        <h2 className="mb-6 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">
          Top 3 Hospitals for Liver Transplant in India
        </h2>
        <div className="space-y-6">
          {/* Medanta */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>1. Medanta - The Medicity, Gurugram</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Key Surgeons</p>
                  <p className="mb-4 text-sm text-gray-600">
                    Dr. A.S. Soin (2,500+ liver transplants, former President of ILTS), Dr. Vivek Vij
                    (ABO-incompatible transplant specialist)
                  </p>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Technology</p>
                  <p className="text-sm text-gray-600">
                    CT volumetry for precise graft sizing, intra-operative Doppler monitoring,
                    CUSA (Cavitron Ultrasonic Surgical Aspirator), dedicated transplant ICU with
                    1:1 nurse-patient ratio
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Cost</p>
                  <p className="mb-4 text-sm font-bold text-green-600">$28,000-$38,000</p>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Why Choose Medanta</p>
                  <p className="text-sm text-gray-600">
                    India&apos;s highest volume liver transplant centre with 300+ procedures annually.
                    92% one-year survival rate. JCI-accredited. Dedicated international patient wing
                    with Arabic interpreters. On-campus guest house for families.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Apollo */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>2. Apollo Hospitals, Delhi (Indraprastha)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Key Surgeons</p>
                  <p className="mb-4 text-sm text-gray-600">
                    Dr. Subash Gupta (4,000+ liver transplants, Limca Book of Records),
                    Dr. Neerav Goyal (paediatric liver transplant specialist)
                  </p>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Technology</p>
                  <p className="text-sm text-gray-600">
                    3D liver reconstruction for surgical planning, MRI cholangiography,
                    cell-saver autotransfusion, hybrid operating theatre with integrated imaging
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Cost</p>
                  <p className="mb-4 text-sm font-bold text-green-600">$25,000-$36,000</p>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Why Choose Apollo</p>
                  <p className="text-sm text-gray-600">
                    Asia&apos;s largest healthcare network. NABH and JCI dual accredited. Pioneered
                    living donor liver transplant in India. Dedicated GCC patient services with
                    Halal meals, prayer rooms, and Arabic-speaking coordinators.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sir Ganga Ram */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>3. Sir Ganga Ram Hospital, New Delhi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Key Surgeons</p>
                  <p className="mb-4 text-sm text-gray-600">
                    Dr. Sanjiv Saigal (transplant hepatologist, 20+ years experience),
                    Dr. Magnus Singh (hepatobiliary and transplant surgeon)
                  </p>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Technology</p>
                  <p className="text-sm text-gray-600">
                    Advanced CT angiography, fibroscan for liver assessment, state-of-the-art
                    transplant OT with laminar airflow, dedicated transplant ICU
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Cost</p>
                  <p className="mb-4 text-sm font-bold text-green-600">$25,000-$35,000</p>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Why Choose Sir Ganga Ram</p>
                  <p className="text-sm text-gray-600">
                    One of India&apos;s most trusted multi-speciality hospitals established in 1921.
                    NABH accredited. Competitive pricing with excellent outcomes. Strong hepatology
                    department for long-term post-transplant management.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="mb-12">
        <h2 className="mb-6 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">
          Recovery Timeline
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-l-4 border-l-red-500 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Week 1-2: ICU Phase</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Ventilator support for 24-48 hours. Continuous liver function and haemodynamic
                monitoring. Drain management. Immunosuppressant initiation (IV tacrolimus). Gradual
                oral feeding from day 3-5. Sitting up and assisted walking by day 5-7.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-orange-500 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Week 2-4: Ward Recovery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Transfer to transplant ward. Oral immunosuppressants stabilised. Drain removal.
                Independent walking and self-care. Regular liver function tests every 2-3 days.
                Dietary counselling. Discharge planning and medication education for patient
                and caregiver.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-yellow-500 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Months 1-3: Early Recovery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Weekly outpatient follow-up with liver function tests. Immunosuppressant dose
                titration based on drug levels. Gradual return to light daily activities. Infection
                surveillance (CMV, fungal). Nutritional rehabilitation. Most patients can fly home
                after 6-8 weeks.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-green-500 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Months 3-12+: Full Recovery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Monthly then quarterly liver function monitoring. Return to work at 3-6 months.
                Low-impact exercise from month 3. Liver biopsy at 1 year if indicated. Long-term
                immunosuppressant maintenance. Most patients achieve near-normal quality of life
                by 6-12 months.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Internal Links, Social Share, Related Articles */}
      <section className="mb-12">
        <InternalLinks
          links={[
            { text: 'View All Treatments', href: '/treatments' },
            { text: 'Cost Calculator', href: '/cost-calculator' },
            { text: 'Our Partner Hospitals', href: '/hospitals' },
            { text: 'Book a Consultation', href: '/booking' },
          ]}
        />
      </section>

      <section className="mb-12">
        <SocialShare
          title="Liver Transplant India 2025: Cost $25,000-40,000, Best Hospitals"
          description="Liver transplant in India costs $25,000-$40,000 vs $300,000+ in USA. 90% 1-year survival rate, 75-85% savings at JCI-accredited hospitals."
        />
      </section>

      <section className="mb-12">
        <RelatedArticles articles={RELATED_ARTICLES} />
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto max-w-4xl space-y-4">
          {FAQS.map((faq, index) => (
            <Card key={index} className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-12 rounded-xl bg-gray-50 p-8">
        <Testimonials testimonials={TREATMENT_TESTIMONIALS['generic']} />
      </section>

      {/* Trust Badges */}
      <section className="mb-12">

      {/* Contextual Sidebar - Related Treatment Links */}
      <ContextualSidebar treatmentSlug="liver-transplant-india" locale={locale as 'en' | 'ar'} />
        <TrustBadges />
      </section>

      {/* Final CTA */}
      <section className="mb-8 rounded-2xl bg-green-600 px-6 py-12 text-center text-white">
        <h2 className="mb-4 font-serif text-2xl md:text-3xl font-bold">
          Ready to Start Your Liver Transplant Journey?
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-lg text-green-100">
          Get a personalised treatment plan and cost estimate within 24 hours. Our medical
          coordinators speak English, Arabic, and Hindi.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-lg font-semibold text-green-700 hover:bg-green-50"
          >
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              WhatsApp Us Now
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white bg-transparent text-lg text-white hover:bg-white hover:text-green-700"
          >
            <Link href="/booking">Book Free Consultation</Link>
          </Button>
        </div>
      </section>

      {/* SEO: HowTo + Offer + Speakable Schemas */}
      <TreatmentSchemas
        treatmentName="Liver Transplant"
        lowPrice={25000}
        highPrice={40000}
        url="/en/treatments/liver-transplant-india"
      />
    </div>
  );
}

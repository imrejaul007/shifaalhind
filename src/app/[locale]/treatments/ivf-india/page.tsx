import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  DollarSign,
  Heart,
  ArrowRight,
  Star,
  Award,
  Calendar,
  Activity,
  Stethoscope,
  Baby,
  Microscope,
  MessageCircle,
} from 'lucide-react';
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
  title: 'IVF Treatment India 2025: Cost $3,000-5,000, Best Fertility Hospitals',
  description:
    'IVF treatment in India costs $3,000-5,000 per cycle vs $15,000-20,000 in USA. 45-55% success rate under 35. Top JCI-accredited fertility hospitals with PGT, ICSI, embryoscope technology. 70-80% savings.',
  keywords:
    'ivf treatment india, ivf cost india, best ivf hospital india, ivf success rate india, fertility treatment india, icsi india, egg freezing india, donor eggs india, pgt testing india, علاج أطفال الأنابيب في الهند, تكلفة التلقيح الصناعي في الهند',
  alternates: {
    canonical: 'https://shifaalhind.onrender.com/en/treatments/ivf-india',
    languages: {
      'en-US': 'https://shifaalhind.onrender.com/en/treatments/ivf-india',
      'ar-SA': 'https://shifaalhind.onrender.com/ar/treatments/ivf-india',
      'x-default': 'https://shifaalhind.onrender.com/en/treatments/ivf-india',
    },
  },
};

const RELATED_ARTICLES = [
  { title: 'Egg Freezing India', href: '/treatments/egg-freezing-india', description: 'Preserve fertility from $1,800' },
  { title: 'PCOS Treatment India', href: '/treatments/pcos-treatment-india', description: 'Comprehensive PCOS management' },
  { title: 'Medical Visa Guide', href: '/blog/medical-visa-india-complete-guide', description: 'Complete visa process guide' },
];

const FAQ_DATA = [
  {
    question: 'What are IVF success rates by age in India?',
    answer:
      'IVF success rates in India vary by age: Under 35: 45-55% per cycle, Age 35-37: 35-45%, Age 38-40: 25-35%, Age 41-42: 15-20%, Over 42: 5-10%. Top clinics like Nova IVF report rates up to 55-60% for women under 35. Cumulative success after 3 cycles reaches 70-80% for younger patients.',
  },
  {
    question: 'How much does one IVF cycle cost in India?',
    answer:
      'A single IVF cycle in India costs $3,000-5,000 including ovarian stimulation medications, monitoring ultrasounds, egg retrieval, fertilization, embryo culture (5-6 days), and embryo transfer. ICSI adds $500-800. PGT-A genetic testing adds $1,500-2,500. Donor eggs add $2,000-3,000. This compares to $15,000-20,000 in the USA.',
  },
  {
    question: 'What is the difference between ICSI and conventional IVF?',
    answer:
      'In conventional IVF, sperm and eggs are placed together in a dish for natural fertilization. In ICSI (Intracytoplasmic Sperm Injection), a single sperm is injected directly into each mature egg. ICSI is recommended for male factor infertility, low sperm count, poor motility, or previous IVF fertilization failure. ICSI adds $500-800 to the IVF cost in India.',
  },
  {
    question: 'Can I freeze eggs or embryos during my IVF cycle in India?',
    answer:
      'Yes. Egg freezing (vitrification) costs $1,500-2,500 per cycle in India. Embryo freezing is standard practice for surplus embryos after transfer. Frozen embryos can be stored for years and used in future Frozen Embryo Transfer (FET) cycles costing $1,500-2,500. Annual storage fees are $200-400. Vitrification achieves 95%+ survival rates.',
  },
  {
    question: 'Is donor egg IVF available in India and what does it cost?',
    answer:
      'Yes, donor egg IVF is legal and regulated in India under the ART (Regulation) Act 2021. It costs $5,000-7,000 including donor compensation, screening, stimulation, retrieval, ICSI, and embryo transfer. Donors are anonymous, aged 21-35, and undergo thorough medical and genetic screening. Success rates with donor eggs are 55-65% per cycle regardless of recipient age.',
  },
  {
    question: 'How many IVF cycles do most patients need?',
    answer:
      'Most patients conceive within 1-3 IVF cycles. Statistics show: 45-55% success in the first cycle (under 35), 65-75% cumulative success after 2 cycles, and 75-85% after 3 cycles. Doctors typically recommend up to 3-4 fresh cycles before considering alternatives like donor eggs or surrogacy. Each subsequent cycle protocol is optimized based on the previous response.',
  },
  {
    question: 'What is PGT (Preimplantation Genetic Testing) and should I do it?',
    answer:
      'PGT screens embryos for genetic abnormalities before transfer. PGT-A checks chromosome number (aneuploidy), PGT-M screens for specific inherited diseases, and PGT-SR detects structural chromosomal rearrangements. PGT-A is recommended for women over 35, recurrent miscarriage, or repeated IVF failure. It costs $1,500-2,500 in India and can improve implantation rates by selecting the healthiest embryo.',
  },
  {
    question: 'What are India legal regulations for IVF and ART?',
    answer:
      'India ART (Regulation) Act 2021 governs all fertility treatments. Key rules: gender selection is illegal except for sex-linked genetic disorders. Donor anonymity is mandatory. Single women and married couples can access IVF. Commercial surrogacy is restricted to altruistic surrogacy for Indian married couples. All ART clinics must be registered with the National ART Registry. Embryo storage is permitted up to 10 years.',
  },
];

export default async function IvfIndiaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Breadcrumb Schema */}
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://shifaalhind.onrender.com' },
          { name: 'Treatments', url: 'https://shifaalhind.onrender.com/treatments' },
          { name: 'IVF Treatment in India', url: 'https://shifaalhind.onrender.com/treatments/ivf-india' },
        ]}
      />

      {/* Medical Procedure Schema */}
      <MedicalProcedureSchema
        name="In Vitro Fertilization (IVF)"
        description="IVF is an assisted reproductive technology where eggs are retrieved from the ovaries, fertilized with sperm in a laboratory, and the resulting embryo is transferred to the uterus."
        procedureType="TherapeuticProcedure"
        bodyLocation="Reproductive System"
        url="https://shifaalhind.onrender.com/treatments/ivf-india"
      />

      {/* FAQ Schema */}
      <FAQSchema faqs={FAQ_DATA} />

      {/* ===== HERO SECTION ===== */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-3xl md:text-4xl font-bold md:text-5xl lg:text-6xl">
              IVF Treatment in India 2025
            </h1>
            <p className="mb-8 text-xl text-primary-50 md:text-2xl">
              World-Class Fertility Care at 70-80% Lower Cost -- Advanced IVF, ICSI, PGT and Donor Programs
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-accent-500 text-lg hover:bg-accent-600">
                <Link href="/booking">Get Free Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white bg-transparent text-lg text-white hover:bg-white hover:text-primary-600"
              >
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUICK STATS ===== */}
      <section className="container mx-auto px-4 py-8">
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-green-200 bg-green-50 text-center">
            <CardContent className="p-6">
              <DollarSign className="mx-auto mb-2 h-8 w-8 text-green-600" />
              <p className="text-2xl font-bold text-green-700">$3,000 - $5,000</p>
              <p className="text-sm text-green-600">Cost Per Cycle</p>
            </CardContent>
          </Card>
          <Card className="border-blue-200 bg-blue-50 text-center">
            <CardContent className="p-6">
              <Heart className="mx-auto mb-2 h-8 w-8 text-blue-600" />
              <p className="text-2xl font-bold text-blue-700">45-55%</p>
              <p className="text-sm text-blue-600">Success Rate (Under 35)</p>
            </CardContent>
          </Card>
          <Card className="border-purple-200 bg-purple-50 text-center">
            <CardContent className="p-6">
              <Award className="mx-auto mb-2 h-8 w-8 text-purple-600" />
              <p className="text-2xl font-bold text-purple-700">70-80%</p>
              <p className="text-sm text-purple-600">Savings vs USA/UK</p>
            </CardContent>
          </Card>
          <Card className="border-orange-200 bg-orange-50 text-center">
            <CardContent className="p-6">
              <Calendar className="mx-auto mb-2 h-8 w-8 text-orange-600" />
              <p className="text-2xl font-bold text-orange-700">4-6 Weeks</p>
              <p className="text-sm text-orange-600">Treatment Cycle</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===== COST COMPARISON TABLE ===== */}
      <section id="cost" className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-4 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900 md:text-4xl">
            IVF Cost Comparison: India vs World
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600">
            Save 70-80% on fertility treatment with world-class outcomes
          </p>
          <Card className="overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Procedure</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">India</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">USA</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">UK</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">UAE</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Basic IVF Cycle</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$3,000 - $5,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$15,000 - $20,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$12,000 - $16,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$8,000 - $12,000</td>
                    <td className="px-6 py-4 text-center font-bold text-green-600">70-80%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">IVF with ICSI</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$3,500 - $5,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">$18,000 - $25,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$14,000 - $19,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$10,000 - $15,000</td>
                    <td className="px-6 py-4 text-center font-bold text-green-600">75-80%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">IVF with Donor Eggs</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$5,000 - $7,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$25,000 - $35,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$18,000 - $28,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$15,000 - $22,000</td>
                    <td className="px-6 py-4 text-center font-bold text-green-600">75-80%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">IVF with PGT</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$5,000 - $7,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">$20,000 - $30,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$16,000 - $24,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$12,000 - $18,000</td>
                    <td className="px-6 py-4 text-center font-bold text-green-600">70-75%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Frozen Embryo Transfer</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$1,500 - $2,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">$5,000 - $7,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$4,000 - $6,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$3,500 - $5,000</td>
                    <td className="px-6 py-4 text-center font-bold text-green-600">60-70%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">IUI (3 Cycles)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$800 - $1,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">$3,000 - $5,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$2,500 - $4,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$2,000 - $3,500</td>
                    <td className="px-6 py-4 text-center font-bold text-green-600">65-75%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* ===== WHAT'S INCLUDED ===== */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900 md:text-4xl">
            What&apos;s Included in Your IVF Package
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600">
            Comprehensive fertility care from initial assessment to pregnancy confirmation
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-2 border-blue-100 transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Stethoscope className="h-5 w-5 text-blue-600" />
                  Initial Assessment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />Hormone panel (FSH, LH, E2, Prolactin)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />Transvaginal ultrasound (AFC count)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />Semen analysis and morphology</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />AMH test (ovarian reserve)</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2 border-purple-100 transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Activity className="h-5 w-5 text-purple-600" />
                  Stimulation Phase
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />Gonadotropin injections (10-12 days)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />Serial ultrasound monitoring</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />Blood work (E2, progesterone)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />Trigger shot timing</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2 border-pink-100 transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Microscope className="h-5 w-5 text-pink-600" />
                  Retrieval + Fertilization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />Ultrasound-guided egg retrieval</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />Sperm preparation and selection</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />IVF/ICSI fertilization</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />Embryo culture (Day 3-5 blastocyst)</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-100 transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Baby className="h-5 w-5 text-green-600" />
                  Transfer + Follow-up
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />Ultrasound-guided embryo transfer</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />Progesterone support protocol</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />Beta-hCG pregnancy test (Day 14)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />Early pregnancy monitoring ultrasound</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== PROCEDURE COMPARISON: IVF vs IUI ===== */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-4 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900 md:text-4xl">
            IVF vs IUI: Which Is Right for You?
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600">
            Understanding the key differences to make an informed decision
          </p>
          <Card className="overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Factor</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">IVF</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">IUI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Success Rate (per cycle)</td>
                    <td className="px-6 py-4 text-center text-gray-700">45-55% (under 35)</td>
                    <td className="px-6 py-4 text-center text-gray-700">10-20% (under 35)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Invasiveness</td>
                    <td className="px-6 py-4 text-center text-gray-700">Moderate (egg retrieval under sedation)</td>
                    <td className="px-6 py-4 text-center text-gray-700">Minimal (office procedure)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Cost in India</td>
                    <td className="px-6 py-4 text-center text-gray-700">$3,000 - $5,000</td>
                    <td className="px-6 py-4 text-center text-gray-700">$300 - $500</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Best Candidates</td>
                    <td className="px-6 py-4 text-center text-gray-700">Blocked tubes, severe male factor, failed IUI, age &gt;38</td>
                    <td className="px-6 py-4 text-center text-gray-700">Unexplained infertility, mild male factor, ovulation disorders</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Time Per Cycle</td>
                    <td className="px-6 py-4 text-center text-gray-700">4-6 weeks</td>
                    <td className="px-6 py-4 text-center text-gray-700">2-3 weeks</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Monitoring Required</td>
                    <td className="px-6 py-4 text-center text-gray-700">Frequent (every 2-3 days during stimulation)</td>
                    <td className="px-6 py-4 text-center text-gray-700">Moderate (3-4 ultrasounds per cycle)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* ===== TOP 3 HOSPITALS ===== */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-4 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900 md:text-4xl">
          Top 3 Fertility Hospitals in India
        </h2>
        <p className="mb-12 text-center text-lg text-gray-600">
          Internationally accredited centers with proven IVF outcomes
        </p>
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Nova IVF */}
          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Nova IVF Fertility</h3>
                  <p className="text-sm text-gray-500">Delhi, Mumbai, Bangalore -- 65+ Centers</p>
                </div>
                <div className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-800">#1</div>
              </div>
              <div className="mb-4 flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.9 (750+ reviews)</span>
              </div>
              <p className="mb-2 text-sm font-semibold text-gray-700">Key Specialists: Dr. Hrishikesh Pai, Dr. Kedar Ganla</p>
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">PGT-A/PGT-M</span>
                <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">EmbryoScope+</span>
                <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Vitrification</span>
              </div>
              <p className="mb-2 text-sm font-semibold text-primary-600">IVF Cost: $3,000 - $5,000</p>
              <p className="text-sm text-gray-600">Why Choose: Largest dedicated IVF chain in India with 15,000+ cycles annually. CAP-accredited embryology labs and international-trained fertility specialists.</p>
            </CardContent>
          </Card>
          {/* Cloudnine Fertility */}
          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Cloudnine Fertility</h3>
                  <p className="text-sm text-gray-500">Bangalore, Chennai, Mumbai, Delhi</p>
                </div>
                <div className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700">#2</div>
              </div>
              <div className="mb-4 flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.8 (600+ reviews)</span>
              </div>
              <p className="mb-2 text-sm font-semibold text-gray-700">Key Specialists: Dr. Anita Soni, Dr. Kishore Kumar</p>
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Time-Lapse Imaging</span>
                <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">ERA Testing</span>
                <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Vitrification</span>
              </div>
              <p className="mb-2 text-sm font-semibold text-primary-600">IVF Cost: $3,200 - $4,800</p>
              <p className="text-sm text-gray-600">Why Choose: Integrated fertility and maternity care under one roof. Personalized stimulation protocols with 50+ fertility specialists across India.</p>
            </CardContent>
          </Card>
          {/* Apollo Fertility */}
          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Apollo Fertility</h3>
                  <p className="text-sm text-gray-500">Pan-India -- 15+ Dedicated Fertility Centers</p>
                </div>
                <div className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700">#3</div>
              </div>
              <div className="mb-4 flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.7 (520+ reviews)</span>
              </div>
              <p className="mb-2 text-sm font-semibold text-gray-700">Key Specialists: Dr. Kamini Rao, Dr. Nandita Palshetkar</p>
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">PGT Screening</span>
                <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">EmbryoScope</span>
                <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Laser Hatching</span>
              </div>
              <p className="mb-2 text-sm font-semibold text-primary-600">IVF Cost: $3,000 - $4,500</p>
              <p className="text-sm text-gray-600">Why Choose: Backed by Apollo Hospitals Group (JCI-accredited). Comprehensive genetic testing, donor programs, and international patient coordination services.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===== RECOVERY TIMELINE ===== */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-4 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900 md:text-4xl">
            IVF Treatment Timeline
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600">
            What to expect during your 4-6 week treatment cycle
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="relative border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="mb-2 rounded-full bg-blue-100 px-3 py-1 text-center text-sm font-bold text-blue-700">
                  Day 1-3
                </div>
                <h3 className="mb-2 text-center font-semibold text-gray-900">Stimulation Begins</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>- Baseline ultrasound and blood work</li>
                  <li>- Start gonadotropin injections</li>
                  <li>- Daily self-administered injections</li>
                  <li>- Medication protocol review</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="relative border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <div className="mb-2 rounded-full bg-purple-100 px-3 py-1 text-center text-sm font-bold text-purple-700">
                  Week 1-2
                </div>
                <h3 className="mb-2 text-center font-semibold text-gray-900">Monitoring + Retrieval</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>- Ultrasound every 2-3 days</li>
                  <li>- Follicle growth tracking</li>
                  <li>- Trigger shot (Day 10-12)</li>
                  <li>- Egg retrieval (36h after trigger)</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="relative border-l-4 border-l-pink-500">
              <CardContent className="p-6">
                <div className="mb-2 rounded-full bg-pink-100 px-3 py-1 text-center text-sm font-bold text-pink-700">
                  Week 3-4
                </div>
                <h3 className="mb-2 text-center font-semibold text-gray-900">Embryo Transfer</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>- Fertilization and embryo culture</li>
                  <li>- Day 5-6 blastocyst selection</li>
                  <li>- Ultrasound-guided transfer</li>
                  <li>- Begin progesterone support</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="relative border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="mb-2 rounded-full bg-green-100 px-3 py-1 text-center text-sm font-bold text-green-700">
                  Week 4-8
                </div>
                <h3 className="mb-2 text-center font-semibold text-gray-900">Two-Week Wait + Confirmation</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>- Rest and limited activity</li>
                  <li>- Beta-hCG blood test (Day 14)</li>
                  <li>- Repeat hCG for doubling</li>
                  <li>- Early pregnancy ultrasound (Week 6-7)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== INTERNAL LINKS + SOCIAL SHARE + RELATED ===== */}
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <InternalLinks variant="compact" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-8">
        <SocialShare
          title="IVF Treatment India 2025: Cost $3,000-5,000, Best Fertility Hospitals"
          description="IVF treatment in India costs $3,000-5,000 per cycle vs $15,000-20,000 in USA. 45-55% success rate under 35. Top JCI-accredited fertility hospitals."
        />
      </div>

      <div className="container mx-auto max-w-6xl px-4 pb-12">
        <RelatedArticles articles={RELATED_ARTICLES} />
      </div>

      {/* ===== FAQ SECTION ===== */}
      <section className="container mx-auto max-w-4xl px-4 py-16">
        <h2 className="mb-8 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900 md:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <Testimonials
        testimonials={TREATMENT_TESTIMONIALS['generic']}
        title="Patient Success Stories"
        subtitle="Real experiences from international patients who chose India for fertility treatment"
      />

      {/* ===== TRUST BADGES ===== */}

      {/* Contextual Sidebar - Related Treatment Links */}
      <ContextualSidebar treatmentSlug="ivf-india" locale={locale as 'en' | 'ar'} />
      <TrustBadges />

      {/* ===== FINAL CTA ===== */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-green-200 bg-green-50 shadow-xl">
            <CardContent className="p-8 text-center">
              <h2 className="mb-4 font-serif text-2xl md:text-3xl font-bold text-gray-900">
                Start Your Fertility Journey Today
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                Get a free consultation with top fertility specialists in India. Our team will guide you through the entire process.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="bg-accent-500 text-lg hover:bg-accent-600">
                  <Link href="/booking">
                    Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-green-600 text-lg text-white hover:bg-green-700">
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SEO: HowTo + Offer + Speakable Schemas */}
      <TreatmentSchemas
        treatmentName="IVF Treatment"
        lowPrice={3000}
        highPrice={5000}
        url="/en/treatments/ivf-india"
      />
    </div>
  );
}

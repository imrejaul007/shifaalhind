import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  Clock,
  DollarSign,
  Heart,
  ArrowRight,
  Star,
  Shield,
  Activity,
  TrendingDown,
  Calendar,
  Stethoscope,
  Utensils,
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
  title: 'Bariatric Surgery India 2025: Cost, Best Hospitals',
  description:
    'Bariatric surgery in India costs $3,500-7,000 vs $15,000-25,000 in USA (80-85% savings). Gastric sleeve, gastric bypass, mini bypass. 95% success rate. Top JCI hospitals with experienced bariatric surgeons.',
  keywords:
    'bariatric surgery india, weight loss surgery india, gastric sleeve india, gastric bypass india, bariatric surgery cost india, obesity surgery india, جراحة السمنة في الهند, bariatric surgery best hospitals india',
  alternates: {
    canonical: 'https://shifaalhind.onrender.com/en/treatments/bariatric-surgery-india',
    languages: {
      'en-US': 'https://shifaalhind.onrender.com/en/treatments/bariatric-surgery-india',
      'ar-SA': 'https://shifaalhind.onrender.com/ar/treatments/bariatric-surgery-india',
      'x-default': 'https://shifaalhind.onrender.com/en/treatments/bariatric-surgery-india',
    },
  },
};

const RELATED_ARTICLES = [
  { title: 'Gastric Bypass India', href: '/treatments/gastric-bypass-india', description: 'Roux-en-Y from $6,000' },
  { title: 'Medical Visa India Guide', href: '/blog/medical-visa-india-complete-guide', description: 'Complete visa process guide' },
  { title: 'Best Hospitals Delhi', href: '/blog/best-hospitals-delhi-medical-tourism', description: 'Top 10 JCI-accredited hospitals' },
];

const FAQS = [
  {
    question: 'What types of bariatric surgery are available in India?',
    answer:
      'India offers all major bariatric procedures: Gastric Sleeve (most popular, 60% of cases), Roux-en-Y Gastric Bypass (gold standard for diabetes), Mini Gastric Bypass (single anastomosis, shorter surgery), Gastric Balloon (non-surgical, temporary), and Revision Bariatric Surgery. All performed laparoscopically with 3-5 small incisions at JCI/NABH accredited hospitals.',
  },
  {
    question: 'What is the BMI requirement for bariatric surgery?',
    answer:
      'International guidelines followed in India: BMI >= 40 (morbid obesity) qualifies without comorbidities. BMI >= 35 with comorbidities (Type 2 diabetes, hypertension, sleep apnea, PCOS, joint disease). BMI >= 30 with uncontrolled Type 2 diabetes (metabolic surgery). Age 18-65 preferred. Must have documented failed attempts at diet, exercise, and medical weight loss over 6+ months.',
  },
  {
    question: 'How much does bariatric surgery cost in India?',
    answer:
      'Bariatric surgery costs $3,500-7,000 in India: Gastric Sleeve $3,500-5,500, Gastric Bypass $5,000-7,000, Mini Gastric Bypass $4,500-6,500, Gastric Balloon $2,000-3,500, Revision Surgery $6,000-9,000. Price includes pre-op evaluation, surgery, 3-4 day hospital stay, nutritionist consultations, and 1-year follow-up. This is 80-85% less than USA/UK.',
  },
  {
    question: 'What is the recovery timeline after bariatric surgery?',
    answer:
      'Day 1-3: Hospital stay, walking within 6 hours, clear liquids. Week 1-2: Liquid diet, light walking, return to desk work. Weeks 3-8: Pureed then soft foods, gradual increase in activity. Months 3-12: Normal solid foods (small portions), regular exercise, rapid weight loss phase. Most patients lose 60-70% of excess weight in 12-18 months. Total stay in India: 7-10 days.',
  },
  {
    question: 'What diet must I follow after bariatric surgery?',
    answer:
      'Post-surgery diet progresses in stages: Week 1-2 clear liquids only (water, broth, sugar-free drinks). Week 3-4 full liquids (protein shakes, yogurt, thin soups). Week 5-6 pureed foods (blended proteins, mashed vegetables). Week 7-8 soft foods (fish, scrambled eggs, soft fruits). After 8 weeks, gradual return to solid foods in small portions (60-80g per meal). Lifelong: high protein (60-80g/day), daily multivitamins, avoid sugar and carbonated drinks.',
  },
  {
    question: 'What are the risks and complications of bariatric surgery?',
    answer:
      'Bariatric surgery is safe at accredited centers. Overall complication rate: 3-5%. Risks include staple line leak (1-2%), bleeding (1%), blood clots (0.5%), infection (1%), stricture (1-3%), nutritional deficiencies (managed with supplements). Mortality rate: 0.1-0.3% (lower than gallbladder surgery). Indian COE centers report complication rates comparable to top US hospitals. Laparoscopic approach significantly reduces all risks.',
  },
  {
    question: 'Does insurance cover bariatric surgery in India?',
    answer:
      'Many international insurance plans cover bariatric surgery when medically necessary (BMI >= 40 or BMI >= 35 with comorbidities). Some GCC government insurance programs provide coverage. Self-pay patients save 80-85% vs home country costs. Most Indian hospitals offer EMI/payment plans. Shifa AlHind assists with insurance pre-authorization documentation and cost estimates for reimbursement claims.',
  },
  {
    question: 'What are the long-term results of bariatric surgery?',
    answer:
      'Long-term outcomes (5-10 year data): 50-70% sustained excess weight loss, 85% Type 2 diabetes remission, 70% hypertension resolution, 80% sleep apnea cure, significant improvement in PCOS, joint pain, and quality of life. Studies show 10-15 year increase in life expectancy for morbidly obese patients. Success requires lifelong commitment to diet, exercise, supplements, and annual follow-up with your bariatric team.',
  },
];

export default async function BariatricSurgeryIndiaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb Schema */}
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://shifaalhind.onrender.com' },
          { name: 'Treatments', url: 'https://shifaalhind.onrender.com/treatments' },
          { name: 'Bariatric Surgery in India', url: 'https://shifaalhind.onrender.com/treatments/bariatric-surgery-india' },
        ]}
      />

      {/* Medical Procedure Schema */}
      <MedicalProcedureSchema
        name="Bariatric Surgery (Weight Loss Surgery)"
        description="Bariatric surgery encompasses surgical procedures that modify the digestive system to achieve significant, sustained weight loss and resolution of obesity-related comorbidities."
        procedureType="SurgicalProcedure"
        bodyLocation="Stomach"
        preparation="BMI assessment, comprehensive blood work, nutritionist consultation, psychological evaluation, cardiac clearance, pulmonary function tests"
        followup="Staged diet progression, lifelong vitamin supplementation, quarterly follow-ups for first year, annual monitoring"
        howPerformed="Performed laparoscopically through 3-5 small incisions under general anesthesia. Gastric sleeve removes 80% of stomach; gastric bypass creates small pouch and reroutes intestine."
        url="https://shifaalhind.onrender.com/treatments/bariatric-surgery-india"
      />

      {/* FAQ Schema */}
      <FAQSchema faqs={FAQS} />

      {/* Hero Section */}
      <section className="mb-12 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-16 text-white md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 font-serif text-3xl md:text-4xl font-bold md:text-5xl lg:text-6xl">
            Bariatric Surgery in India
          </h1>
          <p className="mb-8 text-xl text-primary-50 md:text-2xl">
            Transform Your Life with World-Class Weight Loss Surgery at 80-85% Lower Cost
          </p>

          <div className="mb-8 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <DollarSign className="h-6 w-6" />
              <span className="text-lg font-semibold">$3,500 - $7,000</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-6 w-6" />
              <span className="text-lg font-semibold">1-3 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6" />
              <span className="text-lg font-semibold">95% success rate</span>
            </div>
          </div>

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
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="mb-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-l-4 border-l-green-500 shadow-md">
            <CardContent className="p-6 text-center">
              <DollarSign className="mx-auto mb-2 h-8 w-8 text-green-600" />
              <p className="text-2xl font-bold text-gray-900">$3,500 - $7,000</p>
              <p className="text-sm text-gray-600">All-Inclusive Cost</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-blue-500 shadow-md">
            <CardContent className="p-6 text-center">
              <Activity className="mx-auto mb-2 h-8 w-8 text-blue-600" />
              <p className="text-2xl font-bold text-gray-900">95%</p>
              <p className="text-sm text-gray-600">Success Rate</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-purple-500 shadow-md">
            <CardContent className="p-6 text-center">
              <TrendingDown className="mx-auto mb-2 h-8 w-8 text-purple-600" />
              <p className="text-2xl font-bold text-gray-900">80-85%</p>
              <p className="text-sm text-gray-600">Savings vs USA/UK</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-orange-500 shadow-md">
            <CardContent className="p-6 text-center">
              <Calendar className="mx-auto mb-2 h-8 w-8 text-orange-600" />
              <p className="text-2xl font-bold text-gray-900">2-4 Weeks</p>
              <p className="text-sm text-gray-600">Full Recovery</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="mb-12">
        <h2 className="mb-4 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900 md:text-4xl">
          Cost Comparison: India vs World
        </h2>
        <p className="mb-8 text-center text-lg text-gray-600">
          Save 80-85% on bariatric surgery with the same quality care
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
                  <td className="px-6 py-4 font-medium text-gray-900">Gastric Sleeve</td>
                  <td className="px-6 py-4 text-center font-bold text-green-600">$3,500 - $5,500</td>
                  <td className="px-6 py-4 text-center text-gray-600">$15,000 - $25,000</td>
                  <td className="px-6 py-4 text-center text-gray-600">$12,000 - $18,000</td>
                  <td className="px-6 py-4 text-center text-gray-600">$12,000 - $20,000</td>
                  <td className="px-6 py-4 text-center font-semibold text-green-600">80-85%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Gastric Bypass (Roux-en-Y)</td>
                  <td className="px-6 py-4 text-center font-bold text-green-600">$5,000 - $7,000</td>
                  <td className="px-6 py-4 text-center text-gray-600">$20,000 - $35,000</td>
                  <td className="px-6 py-4 text-center text-gray-600">$16,000 - $25,000</td>
                  <td className="px-6 py-4 text-center text-gray-600">$18,000 - $28,000</td>
                  <td className="px-6 py-4 text-center font-semibold text-green-600">75-80%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Mini Gastric Bypass</td>
                  <td className="px-6 py-4 text-center font-bold text-green-600">$4,500 - $6,500</td>
                  <td className="px-6 py-4 text-center text-gray-600">$18,000 - $28,000</td>
                  <td className="px-6 py-4 text-center text-gray-600">$14,000 - $22,000</td>
                  <td className="px-6 py-4 text-center text-gray-600">$15,000 - $25,000</td>
                  <td className="px-6 py-4 text-center font-semibold text-green-600">75-80%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Gastric Balloon</td>
                  <td className="px-6 py-4 text-center font-bold text-green-600">$2,000 - $3,500</td>
                  <td className="px-6 py-4 text-center text-gray-600">$6,000 - $9,000</td>
                  <td className="px-6 py-4 text-center text-gray-600">$5,000 - $8,000</td>
                  <td className="px-6 py-4 text-center text-gray-600">$5,500 - $8,500</td>
                  <td className="px-6 py-4 text-center font-semibold text-green-600">60-70%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Revision Bariatric Surgery</td>
                  <td className="px-6 py-4 text-center font-bold text-green-600">$6,000 - $9,000</td>
                  <td className="px-6 py-4 text-center text-gray-600">$25,000 - $40,000</td>
                  <td className="px-6 py-4 text-center text-gray-600">$20,000 - $30,000</td>
                  <td className="px-6 py-4 text-center text-gray-600">$22,000 - $35,000</td>
                  <td className="px-6 py-4 text-center font-semibold text-green-600">75-80%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      {/* What's Included */}
      <section className="mb-12">
        <h2 className="mb-8 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900 md:text-4xl">
          What&apos;s Included in Your Package
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="shadow-md transition-shadow hover:shadow-lg">
            <CardHeader className="pb-3">
              <Stethoscope className="mb-2 h-8 w-8 text-primary-600" />
              <CardTitle className="text-lg">Pre-Surgery Evaluation</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />BMI assessment & body composition</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />Complete blood tests & panels</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />Nutritionist consultation</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />Psychological evaluation</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-md transition-shadow hover:shadow-lg">
            <CardHeader className="pb-3">
              <Shield className="mb-2 h-8 w-8 text-primary-600" />
              <CardTitle className="text-lg">Surgery Day</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />Laparoscopic procedure (1-3 hrs)</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />Senior bariatric surgeon</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />General anesthesia & monitoring</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />Advanced surgical staplers</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-md transition-shadow hover:shadow-lg">
            <CardHeader className="pb-3">
              <Heart className="mb-2 h-8 w-8 text-primary-600" />
              <CardTitle className="text-lg">Hospital Stay (3-4 Days)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />Private room with attendant bed</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />24/7 nursing & monitoring</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />Post-op leak test (Day 2)</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />Pain management & medications</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-md transition-shadow hover:shadow-lg">
            <CardHeader className="pb-3">
              <Utensils className="mb-2 h-8 w-8 text-primary-600" />
              <CardTitle className="text-lg">Follow-Up Program</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />Personalized diet plan</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />Nutritionist guidance (1 year)</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />Exercise & lifestyle program</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />Virtual follow-ups at 1, 3, 6, 12 months</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Procedure Comparison: Gastric Sleeve vs Gastric Bypass */}
      <section className="mb-12">
        <h2 className="mb-8 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900 md:text-4xl">
          Gastric Sleeve vs Gastric Bypass
        </h2>
        <Card className="overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Factor</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Gastric Sleeve</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Gastric Bypass</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Expected Weight Loss</td>
                  <td className="px-6 py-4 text-center text-gray-700">60-70% excess weight</td>
                  <td className="px-6 py-4 text-center text-gray-700">70-80% excess weight</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Procedure Time</td>
                  <td className="px-6 py-4 text-center text-gray-700">45-90 minutes</td>
                  <td className="px-6 py-4 text-center text-gray-700">2-3 hours</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Reversibility</td>
                  <td className="px-6 py-4 text-center text-gray-700">Not reversible</td>
                  <td className="px-6 py-4 text-center text-gray-700">Technically reversible</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Malabsorption</td>
                  <td className="px-6 py-4 text-center text-gray-700">No</td>
                  <td className="px-6 py-4 text-center text-gray-700">Yes (requires supplements)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Dumping Syndrome</td>
                  <td className="px-6 py-4 text-center text-gray-700">Rare</td>
                  <td className="px-6 py-4 text-center text-gray-700">Possible (10-15%)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Cost in India</td>
                  <td className="px-6 py-4 text-center font-semibold text-green-600">$3,500 - $5,500</td>
                  <td className="px-6 py-4 text-center font-semibold text-green-600">$5,000 - $7,000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Best For</td>
                  <td className="px-6 py-4 text-center text-gray-700">BMI 35-45, first-time patients</td>
                  <td className="px-6 py-4 text-center text-gray-700">BMI 45+, diabetes, revision</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      {/* Top 3 Hospitals */}
      <section className="mb-12">
        <h2 className="mb-8 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900 md:text-4xl">
          Top 3 Hospitals for Bariatric Surgery
        </h2>

        <div className="space-y-6">
          {/* Hospital 1: Apollo */}
          <Card className="border-2 border-gray-100 shadow-lg transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-gray-900">1. Apollo Hospitals</h3>
                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-800">#1 Choice</span>
                  </div>
                  <p className="text-sm text-gray-500">Chennai, Delhi, Hyderabad</p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-gray-700">4.9</span>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-1 text-sm font-semibold text-gray-700">Key Surgeons:</p>
                  <p className="text-sm text-gray-600">Dr. K. Praveen Reddy (3,000+ surgeries), Dr. Sunil Sharma (2,500+ cases)</p>
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold text-gray-700">Technology:</p>
                  <p className="text-sm text-gray-600">Robotic-assisted surgery, 3D laparoscopy, ICG staple-line assessment</p>
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold text-gray-700">Cost:</p>
                  <p className="text-sm font-semibold text-green-600">$4,000 - $7,000</p>
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold text-gray-700">Why Choose:</p>
                  <p className="text-sm text-gray-600">JCI accredited, COE for bariatric surgery, 10-year follow-up program, Arabic coordinators</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hospital 2: Max */}
          <Card className="border-2 border-gray-100 shadow-lg transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-gray-900">2. Max Super Speciality Hospital</h3>
                  </div>
                  <p className="text-sm text-gray-500">Saket (Delhi), Patparganj, Shalimar Bagh</p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-gray-700">4.8</span>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-1 text-sm font-semibold text-gray-700">Key Surgeons:</p>
                  <p className="text-sm text-gray-600">Dr. Vivek Bindal (2,000+ bariatric cases), Dr. Pradeep Chowbey (pioneer in India)</p>
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold text-gray-700">Technology:</p>
                  <p className="text-sm text-gray-600">4K laparoscopy, advanced energy devices, real-time leak testing</p>
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold text-gray-700">Cost:</p>
                  <p className="text-sm font-semibold text-green-600">$3,800 - $6,500</p>
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold text-gray-700">Why Choose:</p>
                  <p className="text-sm text-gray-600">NABH accredited, dedicated bariatric ward, multidisciplinary team, international patient lounge</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hospital 3: Fortis */}
          <Card className="border-2 border-gray-100 shadow-lg transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-gray-900">3. Fortis Hospital</h3>
                  </div>
                  <p className="text-sm text-gray-500">Delhi NCR, Mumbai, Bangalore</p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-gray-700">4.8</span>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-1 text-sm font-semibold text-gray-700">Key Surgeons:</p>
                  <p className="text-sm text-gray-600">Dr. Randeep Wadhawan (2,800+ procedures), Dr. Kapil Agrawal (1,500+ cases)</p>
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold text-gray-700">Technology:</p>
                  <p className="text-sm text-gray-600">Robotic surgery, SILS (single-incision), endoscopic sleeve gastroplasty</p>
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold text-gray-700">Cost:</p>
                  <p className="text-sm font-semibold text-green-600">$3,500 - $6,000</p>
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold text-gray-700">Why Choose:</p>
                  <p className="text-sm text-gray-600">NABH accredited, comprehensive obesity program, nutritionist & psychologist support, airport pickup</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="mb-12">
        <h2 className="mb-8 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900 md:text-4xl">
          Recovery Timeline
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-t-4 border-t-red-400 shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-red-600">Day 1-3: Hospital</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Walking within 4-6 hours post-op</li>
                <li>Clear liquids (water, broth)</li>
                <li>IV pain management</li>
                <li>Leak test on Day 2</li>
                <li>Discharge Day 3-4</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-orange-400 shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-orange-600">Week 1-2: Early Recovery</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Full liquid diet (protein shakes)</li>
                <li>Light walking 15-20 min/day</li>
                <li>Oral pain medication</li>
                <li>Return to desk work possible</li>
                <li>5-10 lbs weight loss</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-yellow-400 shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-yellow-600">Weeks 3-8: Progression</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Pureed foods (weeks 3-4)</li>
                <li>Soft foods (weeks 5-8)</li>
                <li>Moderate exercise allowed</li>
                <li>15-30 lbs total weight loss</li>
                <li>Energy levels improving</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-green-400 shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-green-600">Months 3-12: Results</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Normal solid foods (small portions)</li>
                <li>Full exercise regimen</li>
                <li>60-70% excess weight loss</li>
                <li>Diabetes/BP improvement</li>
                <li>Quarterly follow-ups</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Internal Links */}
      <div className="mb-8">
        <InternalLinks links={[
          { text: 'View All Treatments', href: '/treatments' },
          { text: 'Gastric Bypass Surgery', href: '/treatments/gastric-bypass-india' },
          { text: 'Cost Calculator', href: '/cost-calculator' },
          { text: 'Our Hospitals', href: '/hospitals' },
          { text: 'Book Consultation', href: '/booking' },
        ]} />
      </div>

      {/* Social Share */}
      <div className="mb-8">
        <SocialShare
          title="Bariatric Surgery India 2025: Cost, Best Hospitals"
          description="Bariatric surgery in India costs $3,500-7,000 vs $15,000-25,000 in USA (80-85% savings). Gastric sleeve, gastric bypass, mini bypass. 95% success rate."
        />
      </div>

      {/* Related Articles */}
      <div className="mb-12">
        <RelatedArticles articles={RELATED_ARTICLES} />
      </div>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="mb-8 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900 md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mx-auto max-w-4xl space-y-4">
          {FAQS.map((faq, index) => (
            <Card key={index} className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials
        testimonials={TREATMENT_TESTIMONIALS['generic']}
        title="Patient Success Stories"
        subtitle="Real experiences from international patients who chose India for bariatric surgery"
      />


      {/* Contextual Sidebar - Related Treatment Links */}
      <ContextualSidebar treatmentSlug="bariatric-surgery-india" locale={locale as 'en' | 'ar'} />
      {/* Trust Badges */}
      <TrustBadges />

      {/* Final CTA */}
      <section className="mt-12 overflow-hidden rounded-2xl bg-green-600 px-6 py-12 text-white md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-serif text-2xl md:text-3xl font-bold">Start Your Weight Loss Journey Today</h2>
          <p className="mb-8 text-lg text-green-50">
            Connect with our bariatric surgery specialists. Free consultation, no obligation.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-white text-lg font-semibold text-green-700 hover:bg-green-50">
              <Link href="/booking">
                Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent text-lg text-white hover:bg-white hover:text-green-700"
            >
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* SEO: HowTo + Offer + Speakable Schemas */}
      <TreatmentSchemas
        treatmentName="Bariatric Surgery"
        lowPrice={4000}
        highPrice={7000}
        url="/en/treatments/bariatric-surgery-india"
      />
    </div>
  );
}

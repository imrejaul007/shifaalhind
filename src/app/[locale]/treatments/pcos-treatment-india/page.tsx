import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  Clock,
  DollarSign,
  Heart,
  ArrowRight,
  Star,
  Award
} from 'lucide-react';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles } from '@/components/blog/related-articles';
import { InternalLinks } from '@/components/seo/internal-links';
import { Testimonials, TREATMENT_TESTIMONIALS } from '@/components/testimonials/testimonials';
import { TrustBadges } from '@/components/trust-badges/trust-badges';
import { BreadcrumbSchema } from '@/components/seo/breadcrumb-schema';
import { MedicalProcedureSchema } from '@/components/seo/medical-procedure-schema';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'PCOS Treatment India: Cost, Best Doctors 2025',
  description: 'PCOS treatment in India costs $800-2,500 vs $5,000-12,000 in USA. Comprehensive care: medication, lifestyle, surgery options. Expert gynecologists, endocrinologists.',
  keywords: 'pcos treatment india, polycystic ovary syndrome india, pcos cure india, pcos treatment cost india, infertility treatment india, pcos surgery india, علاج تكيس المبايض في الهند',
};

const RELATED_ARTICLES = [
  { title: "Rhinoplasty India", href: "/treatments/rhinoplasty-india", description: "Nose job $2,500-4,500" },
  { title: "Liposuction India", href: "/treatments/liposuction-india", description: "Body contouring $1,800-3,500" },
  { title: "Hair Transplant India", href: "/treatments/hair-transplant-india", description: "FUE/FUT from $800" }
];

export default function PcosTreatmentIndiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-wh
      {/* Breadcrumb Schema for SEO */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://shifaalhind.onrender.com' },
        { name: 'Treatments', url: 'https://shifaalhind.onrender.com/treatments' },
        { name: 'PCOS Treatment in India', url: 'https://shifaalhind.onrender.com/treatments/pcos-treatment-india' }
      ]} />

      {/* Medical Procedure Schema for SEO */}
      <MedicalProcedureSchema
        name="PCOS Treatment"
        description="PCOS treatment includes lifestyle modifications, medications, and fertility treatments to manage symptoms and improve reproductive health."
        procedureType="TherapeuticProcedure"
        bodyLocation="Ovaries"
        
        
        url="https://shifaalhind.onrender.com/treatments/pcos-treatment-india"
      />
ite">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              PCOS Treatment in India
            </h1>
            <p className="mb-6 text-xl text-primary-50 md:text-2xl">
              Comprehensive PCOS Management at Affordable Costs
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <DollarSign className="h-6 w-6" />
                <span className="text-lg font-semibold">$800 - $2,500</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6" />
                <span className="text-lg font-semibold">3-12 months</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6" />
                <span className="text-lg font-semibold">75-85% improvement</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-accent-500 text-lg hover:bg-accent-600">
                <Link href="/consultation">Get Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white bg-transparent text-lg text-white hover:bg-white hover:text-primary-600">
                <Link href="#cost">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section id="cost" className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Cost Comparison
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600">
            Save 70-85% compared to USA, UK, and UAE
          </p>

          <Card className="overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Procedure Type</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">India</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">USA</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">UK</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">UAE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Initial Consultation & Testing</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$150 - $300</td>
                    <td className="px-6 py-4 text-center text-gray-600">$800 - $1,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">£650 - £1,250</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 2,900 - 5,500</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Medication (3-month course)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$200 - $500</td>
                    <td className="px-6 py-4 text-center text-gray-600">$1,200 - $2,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">£1,000 - £2,100</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 4,400 - 9,200</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Ovarian Drilling (Laparoscopic)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$1,500 - $2,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">$8,000 - $15,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£6,500 - £12,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 29,000 - 55,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">IVF for PCOS (if needed)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$2,500 - $4,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$12,000 - $18,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£10,000 - £15,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 44,000 - 66,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Top Clinics */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          Top-Rated Clinics & Hospitals
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Nova IVF Fertility</h3>
                  <p className="text-sm text-gray-500">Pan India - 65 Centers</p>
                </div>
                <div className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-800">#1 Choice</div>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.9 (980+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 5,000+ PCOS patients treated annually</li>
                <li>• Dedicated PCOS clinic, lifestyle programs</li>
                <li>• 100+ reproductive endocrinologists</li>
                <li>• CAP-accredited labs</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $800</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Cloudnine Hospitals</h3>
                  <p className="text-sm text-gray-500">Bangalore, Delhi, Mumbai</p>
                </div>
                
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.8 (720+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 3,500+ PCOS cases/year</li>
                <li>• Multidisciplinary approach</li>
                <li>• Gynecologists, nutritionists, counselors</li>
                <li>• NABH accredited</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $900</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Apollo Fertility</h3>
                  <p className="text-sm text-gray-500">20+ Locations</p>
                </div>
                
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.9 (650+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Part of Apollo Hospitals</li>
                <li>• Comprehensive PCOS management</li>
                <li>• Endocrinologists & fertility specialists</li>
                <li>• JCI accredited</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $950</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={[{"question":"How much does PCOS treatment cost in India?","answer":"PCOS treatment costs $800-2,500 in India (initial consult + tests $150-300, 3-month medication $200-500, ovarian drilling $1,500-2,500) vs $5,000-12,000 in USA. Most patients need medication + lifestyle changes only. Surgery for 10-15% of cases."},{"question":"Can PCOS be cured permanently?","answer":"PCOS cannot be \"cured\" but can be effectively managed. 75-85% of women achieve regular periods, reduced symptoms with treatment. Weight loss (even 5-10%) dramatically improves symptoms. Medication helps regulate hormones. Symptoms may return if treatment stopped."},{"question":"What is success rate of PCOS treatment?","answer":"Success rates: Lifestyle changes improve symptoms in 70% of women, Metformin restores ovulation in 60-70%, Letrozole/Clomid achieves pregnancy in 50-60%, Ovarian drilling succeeds in 60-80%, IVF for PCOS has 60-65% success per cycle."},{"question":"How long does PCOS treatment take?","answer":"Timeline varies: 3-6 months for lifestyle changes to show effect, 3-6 cycles of ovulation induction (3-6 months), 6-12 months for weight loss benefits. Many women need ongoing management. Regular monitoring every 3-6 months recommended."}]} />

      {/* FAQ Section */}
      <section className="container mx-auto max-w-4xl px-4 py-16">
        <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">How much does PCOS treatment cost in India?</h3>
              <p className="text-gray-600">PCOS treatment costs $800-2,500 in India (initial consult + tests $150-300, 3-month medication $200-500, ovarian drilling $1,500-2,500) vs $5,000-12,000 in USA. Most patients need medication + lifestyle changes only. Surgery for 10-15% of cases.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Can PCOS be cured permanently?</h3>
              <p className="text-gray-600">PCOS cannot be "cured" but can be effectively managed. 75-85% of women achieve regular periods, reduced symptoms with treatment. Weight loss (even 5-10%) dramatically improves symptoms. Medication helps regulate hormones. Symptoms may return if treatment stopped.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">What is success rate of PCOS treatment?</h3>
              <p className="text-gray-600">Success rates: Lifestyle changes improve symptoms in 70% of women, Metformin restores ovulation in 60-70%, Letrozole/Clomid achieves pregnancy in 50-60%, Ovarian drilling succeeds in 60-80%, IVF for PCOS has 60-65% success per cycle.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">How long does PCOS treatment take?</h3>
              <p className="text-gray-600">Timeline varies: 3-6 months for lifestyle changes to show effect, 3-6 cycles of ovulation induction (3-6 months), 6-12 months for weight loss benefits. Many women need ongoing management. Regular monitoring every 3-6 months recommended.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      
      {/* Testimonials Section */}
      <Testimonials
        testimonials={TREATMENT_TESTIMONIALS['ivf-fertility']}
        title="Success Stories from Our Pcos Treatment Patients"
        subtitle="Real transformations from GCC patients who achieved life-changing results"
      />

      {/* Trust Badges Section */}
      <TrustBadges />

      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">Ready to Get Started?</h2>
          <p className="mb-8 text-xl text-primary-50">Get your personalized treatment plan today</p>
          <Button asChild size="lg" className="bg-accent-500 text-lg hover:bg-accent-600">
            <Link href="/consultation">Get Free Consultation<ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-8">
        <SocialShare title="PCOS Treatment India: Cost, Best Doctors 2025" description="PCOS treatment in India costs $800-2,500 vs $5,000-12,000 in USA. Comprehensive care: medication, lifestyle, surgery options. Expert gynecologists, endocrinologists." />
      </div>
      <div className="container mx-auto max-w-6xl px-4 pb-12">
        <RelatedArticles articles={RELATED_ARTICLES} />
      </div>
      <div className="container mx-auto max-w-6xl px-4 pb-12">
        <InternalLinks variant="compact" />
      </div>
    </div>
  );
}

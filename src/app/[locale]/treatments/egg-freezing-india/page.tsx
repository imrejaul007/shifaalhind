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
  title: 'Egg Freezing India: Cost, Best Clinics 2025',
  description: 'Egg freezing in India costs $1,800-3,000 vs $10,000-15,000 in USA (85% savings). Vitrification technique, 90-95% survival rate. Leading fertility centers.',
  keywords: 'egg freezing india, oocyte cryopreservation india, egg freezing cost india, fertility preservation india, social egg freezing india, تجميد البويضات في الهند',
};

const RELATED_ARTICLES = [
  { title: "Rhinoplasty India", href: "/treatments/rhinoplasty-india", description: "Nose job $2,500-4,500" },
  { title: "Liposuction India", href: "/treatments/liposuction-india", description: "Body contouring $1,800-3,500" },
  { title: "Hair Transplant India", href: "/treatments/hair-transplant-india", description: "FUE/FUT from $800" }
];

export default function EggFreezingIndiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-wh
      {/* Breadcrumb Schema for SEO */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://shifaalhind.onrender.com' },
        { name: 'Treatments', url: 'https://shifaalhind.onrender.com/treatments' },
        { name: 'Egg Freezing in India', url: 'https://shifaalhind.onrender.com/treatments/egg-freezing-india' }
      ]} />

      {/* Medical Procedure Schema for SEO */}
      <MedicalProcedureSchema
        name="Egg Freezing (Oocyte Cryopreservation)"
        description="Egg freezing preserves fertility by collecting and freezing eggs for future use in assisted reproduction."
        procedureType="TherapeuticProcedure"
        bodyLocation="Ovaries"
        
        
        url="https://shifaalhind.onrender.com/treatments/egg-freezing-india"
      />
ite">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Egg Freezing in India
            </h1>
            <p className="mb-6 text-xl text-primary-50 md:text-2xl">
              Preserve Your Fertility - 85% Cost Savings
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <DollarSign className="h-6 w-6" />
                <span className="text-lg font-semibold">$1,800 - $3,000</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6" />
                <span className="text-lg font-semibold">10-14 days</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6" />
                <span className="text-lg font-semibold">90-95% survival</span>
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
                    <td className="px-6 py-4 font-medium text-gray-900">Egg Freezing (1 Cycle)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$1,800 - $2,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">$10,000 - $15,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£8,300 - £12,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 37,000 - 55,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Egg Freezing (2 Cycles)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$3,200 - $4,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">$18,000 - $28,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£15,000 - £23,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 66,000 - 103,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Annual Storage Fee</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$200 - $400</td>
                    <td className="px-6 py-4 text-center text-gray-600">$500 - $1,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£400 - £830</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 1,800 - 3,700</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Egg Thawing + IVF (future)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$2,500 - $4,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$15,000 - $25,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£12,500 - £20,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 55,000 - 92,000</td>
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
                <span className="ml-2 text-sm text-gray-600">4.9 (720+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 2,000+ egg freezing cycles annually</li>
                <li>• State-of-art cryo labs, vitrification</li>
                <li>• CAP-accredited embryology labs</li>
                <li>• ISO 15189 certified labs</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $1,800</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Cloudnine Fertility</h3>
                  <p className="text-sm text-gray-500">Bangalore, Delhi, Mumbai, Pune</p>
                </div>
                
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.8 (580+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 1,500+ social egg freezing cases</li>
                <li>• Personalized protocols, AMH testing</li>
                <li>• 50+ fertility specialists</li>
                <li>• NABH accredited</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $2,000</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Indira IVF</h3>
                  <p className="text-sm text-gray-500">100+ Centers Pan India</p>
                </div>
                
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.7 (890+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Largest IVF chain in India</li>
                <li>• Affordable egg freezing packages</li>
                <li>• Network of 200+ doctors</li>
                <li>• ISO certified labs</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $1,900</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={[{"question":"How much does egg freezing cost in India?","answer":"Egg freezing costs $1,800-3,000 per cycle in India vs $10,000-15,000 in USA. Includes ovarian stimulation medications, egg retrieval, vitrification, and first year storage. Annual storage: $200-400. Most women freeze 15-20 eggs (1-2 cycles) for best outcomes."},{"question":"What is the best age to freeze eggs?","answer":"Best age is 30-35 years. Egg quality declines after 35. Women under 35: 15-20 eggs give 70-80% live birth chance. Age 35-37: need 25-30 eggs for same odds. After 38: success rates drop significantly. Earlier freezing = better outcomes."},{"question":"How long can frozen eggs be stored?","answer":"Frozen eggs can be stored indefinitely - 10, 20, even 30+ years. Vitrification prevents ice crystal damage. Survival rate after thawing: 90-95%. Age at freezing matters more than storage duration. No evidence of increased birth defects with long-term storage."},{"question":"What is egg freezing success rate?","answer":"Success rates depend on age at freezing: Under 35 (15-20 eggs): 70-80% live birth, Age 35-37 (20-25 eggs): 50-60% live birth, Age 38-40 (25-30 eggs): 30-40% live birth. Per egg success: 4-8% depending on age. Thaw survival: 90-95%."}]} />

      {/* FAQ Section */}
      <section className="container mx-auto max-w-4xl px-4 py-16">
        <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">How much does egg freezing cost in India?</h3>
              <p className="text-gray-600">Egg freezing costs $1,800-3,000 per cycle in India vs $10,000-15,000 in USA. Includes ovarian stimulation medications, egg retrieval, vitrification, and first year storage. Annual storage: $200-400. Most women freeze 15-20 eggs (1-2 cycles) for best outcomes.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">What is the best age to freeze eggs?</h3>
              <p className="text-gray-600">Best age is 30-35 years. Egg quality declines after 35. Women under 35: 15-20 eggs give 70-80% live birth chance. Age 35-37: need 25-30 eggs for same odds. After 38: success rates drop significantly. Earlier freezing = better outcomes.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">How long can frozen eggs be stored?</h3>
              <p className="text-gray-600">Frozen eggs can be stored indefinitely - 10, 20, even 30+ years. Vitrification prevents ice crystal damage. Survival rate after thawing: 90-95%. Age at freezing matters more than storage duration. No evidence of increased birth defects with long-term storage.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">What is egg freezing success rate?</h3>
              <p className="text-gray-600">Success rates depend on age at freezing: Under 35 (15-20 eggs): 70-80% live birth, Age 35-37 (20-25 eggs): 50-60% live birth, Age 38-40 (25-30 eggs): 30-40% live birth. Per egg success: 4-8% depending on age. Thaw survival: 90-95%.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      
      {/* Testimonials Section */}
      <Testimonials
        testimonials={TREATMENT_TESTIMONIALS['ivf-fertility']}
        title="Success Stories from Our Egg Freezing Patients"
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
        <SocialShare title="Egg Freezing India: Cost, Best Clinics 2025" description="Egg freezing in India costs $1,800-3,000 vs $10,000-15,000 in USA (85% savings). Vitrification technique, 90-95% survival rate. Leading fertility centers." />
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

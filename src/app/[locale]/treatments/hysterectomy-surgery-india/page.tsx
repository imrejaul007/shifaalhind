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
  title: 'Hysterectomy Surgery India: Cost, Best Gynecologists 2025',
  description: 'Hysterectomy in India. Laparoscopic $2,500-4,000 vs $20,000-35,000 in USA (75-85% savings). Robotic, vaginal, abdominal options. 2-6 weeks recovery.',
  keywords: 'hysterectomy surgery india, hysterectomy cost india, uterus removal india, robotic hysterectomy india, laparoscopic hysterectomy india, استئصال الرحم في الهند',
  alternates: {
    canonical: 'https://shifaalhind.onrender.com/en/treatments/hysterectomy-surgery-india',
    languages: {
      'en-US': 'https://shifaalhind.onrender.com/en/treatments/hysterectomy-surgery-india',
      'ar-SA': 'https://shifaalhind.onrender.com/ar/treatments/hysterectomy-surgery-india',
      'x-default': 'https://shifaalhind.onrender.com/en/treatments/hysterectomy-surgery-india',
    },
  },
};

const RELATED_ARTICLES = [
  { title: "Cervical Cancer Treatment India", href: "/treatments/cervical-cancer-treatment-india", description: "Hysterectomy, radiation from $4,000" },
  { title: "PCOS Treatment India", href: "/treatments/pcos-treatment-india", description: "Comprehensive PCOS management from $2,000" },
  { title: "IVF & Fertility India", href: "/blog/ivf-fertility-treatment-india-complete-guide", description: "IVF treatment from $2,500" }
];

export default function HysterectomySurgeryIndiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
{/* Breadcrumb Schema for SEO */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://shifaalhind.onrender.com' },
        { name: 'Treatments', url: 'https://shifaalhind.onrender.com/treatments' },
        { name: 'Hysterectomy Surgery in India', url: 'https://shifaalhind.onrender.com/treatments/hysterectomy-surgery-india' }
      ]} />

      {/* Medical Procedure Schema for SEO */}
      <MedicalProcedureSchema
        name="Hysterectomy"
        description="Hysterectomy removes the uterus to treat fibroids, endometriosis, cancer, or other conditions."
        procedureType="SurgicalProcedure"
        bodyLocation="Uterus"
        
        
        url="https://shifaalhind.onrender.com/treatments/hysterectomy-surgery-india"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Hysterectomy Surgery in India
            </h1>
            <p className="mb-6 text-xl text-primary-50 md:text-2xl">
              Minimally Invasive Surgery with 2-4 Weeks Recovery
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <DollarSign className="h-6 w-6" />
                <span className="text-lg font-semibold">$2,500 - $4,000</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6" />
                <span className="text-lg font-semibold">2-6 weeks recovery</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6" />
                <span className="text-lg font-semibold">95-98% success</span>
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
            Save 75-85% compared to USA, UK, and UAE
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
                    <td className="px-6 py-4 font-medium text-gray-900">Vaginal Hysterectomy</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$1,800 - $3,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$12,000 - $20,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£10,000 - £17,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 44,000 - 73,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Abdominal Hysterectomy</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$2,000 - $3,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">$15,000 - $25,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£12,500 - £21,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 55,000 - 92,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Laparoscopic Hysterectomy</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$2,500 - $4,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$20,000 - $35,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£17,000 - £30,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 73,000 - 128,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Robotic Hysterectomy (da Vinci)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$3,500 - $5,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">$25,000 - $45,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£21,000 - £38,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 92,000 - 165,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Total Hysterectomy (Uterus + Cervix)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$2,500 - $4,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">$18,000 - $32,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£15,000 - £27,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 66,000 - 117,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Radical Hysterectomy (with lymph nodes)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$4,000 - $6,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">$30,000 - $55,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£25,000 - £47,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 110,000 - 200,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Top Hospitals */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          Top-Rated Gynecology Hospitals
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Apollo Hospitals</h3>
                  <p className="text-sm text-gray-500">Chennai, Bangalore, Delhi</p>
                </div>
                <div className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-800">#1 Choice</div>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.9 (1800+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 5,000+ hysterectomies annually</li>
                <li>• Robotic, laparoscopic, vaginal options</li>
                <li>• Minimally invasive specialists</li>
                <li>• 98% patient satisfaction</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $2,500</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Fortis Hospital</h3>
                  <p className="text-sm text-gray-500">Delhi, Mumbai, Bangalore</p>
                </div>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.8 (1350+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 3,500+ robotic hysterectomies</li>
                <li>• da Vinci Xi robotic system</li>
                <li>• Same-day discharge available</li>
                <li>• Expert gynecologic oncologists</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $3,000</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Max Super Speciality Hospital</h3>
                  <p className="text-sm text-gray-500">Delhi, Gurgaon</p>
                </div>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.8 (940+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 2,500+ minimally invasive surgeries</li>
                <li>• Single-port laparoscopy</li>
                <li>• Fertility-sparing options</li>
                <li>• NABH, JCI accredited</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $2,800</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Cloudnine Hospital</h3>
                  <p className="text-sm text-gray-500">Bangalore, Chennai, Gurgaon</p>
                </div>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.9 (780+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Women&apos;s health specialists</li>
                <li>• 2,000+ gynecologic surgeries annually</li>
                <li>• Advanced laparoscopy center</li>
                <li>• Personalized care protocols</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $2,600</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Manipal Hospital</h3>
                  <p className="text-sm text-gray-500">Bangalore, Delhi, Jaipur</p>
                </div>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.7 (620+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 3,000+ hysterectomies performed</li>
                <li>• Vaginal natural orifice surgery</li>
                <li>• Comprehensive pre/post-op care</li>
                <li>• International patient support</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $2,400</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={[
        {"question":"How much does hysterectomy cost in India?","answer":"Hysterectomy costs $1,800-5,500 in India depending on type: Vaginal $1,800-3,000, Abdominal $2,000-3,500, Laparoscopic $2,500-4,000, Robotic $3,500-5,500. USA costs $12,000-45,000 (75-85% savings). Price includes pre-op tests, surgery, anesthesia, 2-4 days hospital stay, medications, and 2 follow-up visits."},
        {"question":"What is the recovery time after hysterectomy?","answer":"Recovery varies by approach: Vaginal/Laparoscopic/Robotic 2-4 weeks (return to work 2-3 weeks, full activity 4-6 weeks). Abdominal 6-8 weeks (return to work 6-8 weeks, full activity 8-12 weeks). Hospital stay: 1-2 days (minimally invasive) or 3-4 days (abdominal). Avoid heavy lifting for 6-8 weeks."},
        {"question":"Which type of hysterectomy is best?","answer":"Best approach depends on indication: Robotic/Laparoscopic (minimally invasive, fastest recovery, less pain, small scars) best for benign conditions, fibroids, endometriosis. Vaginal (no external incisions, natural route) best for uterine prolapse. Abdominal (large incision) only for very large fibroids, cancer, or complex cases. 75% of hysterectomies now minimally invasive."},
        {"question":"What are the side effects of hysterectomy?","answer":"Common effects: No more periods, cannot get pregnant. If ovaries removed (before menopause): Immediate menopause, hot flashes, mood changes (hormone replacement helps). If ovaries preserved: Natural menopause at normal age. Recovery effects: Fatigue 4-6 weeks, temporary bladder/bowel changes, emotional adjustment. Sexual function typically normal or improved after 6-8 weeks."}
      ]} />

      {/* FAQ Section */}
      <section className="container mx-auto max-w-4xl px-4 py-16">
        <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">How much does hysterectomy cost in India?</h3>
              <p className="text-gray-600">Hysterectomy costs $1,800-5,500 in India depending on type: Vaginal $1,800-3,000, Abdominal $2,000-3,500, Laparoscopic $2,500-4,000, Robotic $3,500-5,500. USA costs $12,000-45,000 (75-85% savings). Price includes pre-op tests, surgery, anesthesia, 2-4 days hospital stay, medications, and 2 follow-up visits.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">What is the recovery time after hysterectomy?</h3>
              <p className="text-gray-600">Recovery varies by approach: Vaginal/Laparoscopic/Robotic 2-4 weeks (return to work 2-3 weeks, full activity 4-6 weeks). Abdominal 6-8 weeks (return to work 6-8 weeks, full activity 8-12 weeks). Hospital stay: 1-2 days (minimally invasive) or 3-4 days (abdominal). Avoid heavy lifting for 6-8 weeks.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Which type of hysterectomy is best?</h3>
              <p className="text-gray-600">Best approach depends on indication: Robotic/Laparoscopic (minimally invasive, fastest recovery, less pain, small scars) best for benign conditions, fibroids, endometriosis. Vaginal (no external incisions, natural route) best for uterine prolapse. Abdominal (large incision) only for very large fibroids, cancer, or complex cases. 75% of hysterectomies now minimally invasive.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">What are the side effects of hysterectomy?</h3>
              <p className="text-gray-600">Common effects: No more periods, cannot get pregnant. If ovaries removed (before menopause): Immediate menopause, hot flashes, mood changes (hormone replacement helps). If ovaries preserved: Natural menopause at normal age. Recovery effects: Fatigue 4-6 weeks, temporary bladder/bowel changes, emotional adjustment. Sexual function typically normal or improved after 6-8 weeks.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      
      {/* Testimonials Section */}
      <Testimonials
        testimonials={TREATMENT_TESTIMONIALS['generic']}
        title="Success Stories from Our Hysterectomy Surgery Patients"
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
        <SocialShare title="Hysterectomy Surgery India: Cost, Best Gynecologists 2025" description="Hysterectomy in India. Laparoscopic $2,500-4,000 vs $20,000-35,000 in USA (75-85% savings). Robotic, vaginal, abdominal options. 2-6 weeks recovery." />
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

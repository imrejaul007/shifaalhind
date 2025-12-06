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

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Prostate Cancer Treatment India: Cost, Best Oncologists 2025',
  description: 'Prostate cancer treatment in India. Robotic prostatectomy $8,000-12,000 vs $50,000-100,000 in USA (75-85% savings). 85-95% success rate, expert oncologists.',
  keywords: 'prostate cancer treatment india, prostate cancer surgery india, radical prostatectomy india, robotic prostatectomy india, prostate cancer hospital india, علاج سرطان البروستاتا في الهند',
};

const RELATED_ARTICLES = [
  { title: "Breast Cancer Treatment India", href: "/treatments/breast-cancer-treatment-india", description: "Surgery, chemo, radiation from $3,500" },
  { title: "Blood Cancer Treatment India", href: "/treatments/blood-cancer-treatment-india", description: "Leukemia, lymphoma, BMT from $10,000" },
  { title: "Colon Cancer Treatment India", href: "/treatments/colon-cancer-treatment-india", description: "Colorectal surgery from $4,000" }
];

export default function ProstateCancerTreatmentIndiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Prostate Cancer Treatment in India
            </h1>
            <p className="mb-6 text-xl text-primary-50 md:text-2xl">
              Advanced Robotic Surgery with 85-95% Success Rate
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <DollarSign className="h-6 w-6" />
                <span className="text-lg font-semibold">$8,000 - $12,000</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6" />
                <span className="text-lg font-semibold">2-4 hours surgery</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6" />
                <span className="text-lg font-semibold">85-95% success</span>
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
                    <th className="px-6 py-4 text-left text-sm font-semibold">Treatment Type</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">India</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">USA</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">UK</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">UAE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Radical Prostatectomy (Open)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$5,000 - $8,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$25,000 - $50,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£20,000 - £40,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 90,000 - 180,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Robotic Prostatectomy (da Vinci)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$8,000 - $12,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$50,000 - $100,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£40,000 - £80,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 180,000 - 360,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Radiation Therapy (IMRT/IGRT)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$5,000 - $8,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$30,000 - $60,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£25,000 - £50,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 110,000 - 220,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Brachytherapy (Seed Implants)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$6,000 - $10,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$35,000 - $70,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£30,000 - £60,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 130,000 - 260,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Hormone Therapy (1 year)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$3,000 - $5,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$15,000 - $30,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£12,000 - £25,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 55,000 - 110,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Complete Treatment Package (Stage II-III)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$12,000 - $20,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$80,000 - $150,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£65,000 - £125,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 290,000 - 550,000</td>
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
          Top-Rated Oncology Hospitals
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Tata Memorial Hospital</h3>
                  <p className="text-sm text-gray-500">Mumbai</p>
                </div>
                <div className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-800">#1 Cancer</div>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.9 (1200+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• India&apos;s premier cancer hospital</li>
                <li>• 2,500+ prostate cancer surgeries annually</li>
                <li>• 3 da Vinci robotic systems</li>
                <li>• 95% 5-year survival (early stage)</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $8,000</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Apollo Hospitals</h3>
                  <p className="text-sm text-gray-500">Chennai, Bangalore, Delhi</p>
                </div>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.8 (2500+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 8,000+ prostate cancer patients treated</li>
                <li>• Robotic, laparoscopic, open surgery</li>
                <li>• Advanced IMRT, IGRT radiation</li>
                <li>• International oncology protocols</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $7,500</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Fortis Memorial Hospital</h3>
                  <p className="text-sm text-gray-500">Gurgaon, Delhi NCR</p>
                </div>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.8 (890+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 1,500+ robotic prostatectomies annually</li>
                <li>• da Vinci Xi robotic system</li>
                <li>• Focal therapy, HIFU available</li>
                <li>• 92% continence recovery at 1 year</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $8,500</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">HCG Cancer Hospitals</h3>
                  <p className="text-sm text-gray-500">Bangalore, Mumbai, Ahmedabad</p>
                </div>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.7 (750+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Cancer specialist chain</li>
                <li>• 4,000+ prostate cancer cases annually</li>
                <li>• Precision oncology, genomic testing</li>
                <li>• Multidisciplinary tumor board</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $7,000</p>
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
                <span className="ml-2 text-sm text-gray-600">4.8 (640+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• NABH, JCI accredited</li>
                <li>• 1,200+ prostate surgeries annually</li>
                <li>• CyberKnife radiosurgery</li>
                <li>• 90% potency preservation (nerve-sparing)</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $8,000</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={[
        {"question":"How much does prostate cancer treatment cost in India?","answer":"Radical prostatectomy costs $5,000-8,000 in India vs $25,000-50,000 in USA (75-85% savings). Robotic prostatectomy $8,000-12,000 vs $50,000-100,000. Radiation therapy $5,000-8,000 vs $30,000-60,000. Complete treatment package (surgery + radiation + hormone therapy) $12,000-20,000 in India vs $80,000-150,000 abroad. Includes pre-op tests, surgery, hospital stay, medications, and follow-up."},
        {"question":"What is the success rate for prostate cancer treatment in India?","answer":"Early-stage (localized) prostate cancer: 95-100% 5-year survival rate. Locally advanced: 85-90% 5-year survival. Regional spread: 70-80% 5-year survival. Metastatic: 30-40% 5-year survival. Success depends on stage at diagnosis, Gleason score, PSA level, and patient age. Nerve-sparing robotic surgery achieves 90% continence recovery and 60-70% potency preservation."},
        {"question":"Is robotic prostatectomy better than open surgery?","answer":"Robotic (da Vinci) prostatectomy offers: Less blood loss (100ml vs 500ml), shorter hospital stay (2-3 days vs 5-7 days), faster recovery (2-3 weeks vs 6-8 weeks), better continence recovery (92% vs 85% at 1 year), improved potency preservation (70% vs 50% with nerve-sparing). Cancer cure rates are equivalent (95%). Robotic surgery costs $8,000-12,000 vs $5,000-8,000 for open surgery in India."},
        {"question":"How long is recovery after prostate cancer surgery?","answer":"Hospital stay: 2-3 days (robotic), 5-7 days (open). Catheter removal: 7-14 days. Return to light activities: 2-3 weeks. Return to work: 3-4 weeks (robotic), 6-8 weeks (open). Full recovery: 3-6 months. Continence recovery: 70% at 3 months, 92% at 1 year. Potency recovery: Gradual over 6-24 months with nerve-sparing technique. Avoid heavy lifting for 6 weeks."}
      ]} />

      {/* FAQ Section */}
      <section className="container mx-auto max-w-4xl px-4 py-16">
        <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">How much does prostate cancer treatment cost in India?</h3>
              <p className="text-gray-600">Radical prostatectomy costs $5,000-8,000 in India vs $25,000-50,000 in USA (75-85% savings). Robotic prostatectomy $8,000-12,000 vs $50,000-100,000. Radiation therapy $5,000-8,000 vs $30,000-60,000. Complete treatment package (surgery + radiation + hormone therapy) $12,000-20,000 in India vs $80,000-150,000 abroad. Includes pre-op tests, surgery, hospital stay, medications, and follow-up.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">What is the success rate for prostate cancer treatment in India?</h3>
              <p className="text-gray-600">Early-stage (localized) prostate cancer: 95-100% 5-year survival rate. Locally advanced: 85-90% 5-year survival. Regional spread: 70-80% 5-year survival. Metastatic: 30-40% 5-year survival. Success depends on stage at diagnosis, Gleason score, PSA level, and patient age. Nerve-sparing robotic surgery achieves 90% continence recovery and 60-70% potency preservation.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Is robotic prostatectomy better than open surgery?</h3>
              <p className="text-gray-600">Robotic (da Vinci) prostatectomy offers: Less blood loss (100ml vs 500ml), shorter hospital stay (2-3 days vs 5-7 days), faster recovery (2-3 weeks vs 6-8 weeks), better continence recovery (92% vs 85% at 1 year), improved potency preservation (70% vs 50% with nerve-sparing). Cancer cure rates are equivalent (95%). Robotic surgery costs $8,000-12,000 vs $5,000-8,000 for open surgery in India.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">How long is recovery after prostate cancer surgery?</h3>
              <p className="text-gray-600">Hospital stay: 2-3 days (robotic), 5-7 days (open). Catheter removal: 7-14 days. Return to light activities: 2-3 weeks. Return to work: 3-4 weeks (robotic), 6-8 weeks (open). Full recovery: 3-6 months. Continence recovery: 70% at 3 months, 92% at 1 year. Potency recovery: Gradual over 6-24 months with nerve-sparing technique. Avoid heavy lifting for 6 weeks.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
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
        <SocialShare title="Prostate Cancer Treatment India: Cost, Best Oncologists 2025" description="Prostate cancer treatment in India. Robotic prostatectomy $8,000-12,000 vs $50,000-100,000 in USA (75-85% savings). 85-95% success rate, expert oncologists." />
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

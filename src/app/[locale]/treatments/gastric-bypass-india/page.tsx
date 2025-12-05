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
  title: 'Gastric Bypass Surgery India: Cost, Best Surgeons 2025',
  description: 'Gastric bypass surgery in India costs $6,000-8,500 vs $20,000-35,000 in USA (75% savings). Laparoscopic Roux-en-Y, 70-80% weight loss. COE bariatric centers.',
  keywords: 'gastric bypass india, gastric bypass surgery cost india, roux en y india, bariatric surgery india, weight loss surgery india, obesity surgery india, جراحة تحويل المعدة في الهند',
};

const RELATED_ARTICLES = [
  { title: "Rhinoplasty India", href: "/treatments/rhinoplasty-india", description: "Nose job $2,500-4,500" },
  { title: "Liposuction India", href: "/treatments/liposuction-india", description: "Body contouring $1,800-3,500" },
  { title: "Hair Transplant India", href: "/treatments/hair-transplant-india", description: "FUE/FUT from $800" }
];

export default function GastricBypassIndiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Gastric Bypass Surgery in India
            </h1>
            <p className="mb-6 text-xl text-primary-50 md:text-2xl">
              Life-Changing Weight Loss at 75% Lower Cost
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <DollarSign className="h-6 w-6" />
                <span className="text-lg font-semibold">$6,000 - $8,500</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6" />
                <span className="text-lg font-semibold">2-4 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6" />
                <span className="text-lg font-semibold">70-80% weight loss</span>
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
                    <td className="px-6 py-4 font-medium text-gray-900">Roux-en-Y Gastric Bypass</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$6,000 - $8,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$20,000 - $30,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£16,500 - £25,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 73,000 - 110,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Mini Gastric Bypass (MGB)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$5,500 - $7,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">$18,000 - $28,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£15,000 - £23,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 66,000 - 103,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Revision Gastric Bypass</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$7,500 - $10,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$25,000 - $40,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£20,500 - £33,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 92,000 - 147,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Gastric Bypass + Hiatal Hernia</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$7,000 - $9,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$22,000 - $35,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£18,000 - £29,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 81,000 - 129,000</td>
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
                  <h3 className="text-xl font-bold text-gray-900">Apollo Bariatric Surgery</h3>
                  <p className="text-sm text-gray-500">Chennai, Hyderabad, Delhi</p>
                </div>
                <div className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-800">#1 Choice</div>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.9 (650+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 3,500+ bariatric surgeries annually</li>
                <li>• COE for bariatric surgery, 10-year follow-up</li>
                <li>• Dr. K. Praveen Reddy - 2,000+ bypass surgeries</li>
                <li>• JCI & NABH accredited</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $6,500</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Fortis Obesity Centre</h3>
                  <p className="text-sm text-gray-500">Delhi NCR, Mumbai, Bangalore</p>
                </div>
                
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.9 (580+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 2,800+ bypass procedures/year</li>
                <li>• Comprehensive pre/post-op program</li>
                <li>• Multidisciplinary team: surgeons, dietitians, psychologists</li>
                <li>• COE certification</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $6,000</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Medanta Bariatrics</h3>
                  <p className="text-sm text-gray-500">Gurugram, Indore, Lucknow</p>
                </div>
                
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.8 (470+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 2,000+ bariatric cases annually</li>
                <li>• Robotic-assisted bypass available</li>
                <li>• Dr. Tarun Mittal - Bariatric surgeon</li>
                <li>• NABH accredited</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $7,000</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={[{"question":"How much does gastric bypass cost in India?","answer":"Gastric bypass costs $6,000-8,500 in India (Roux-en-Y $6,000-8,000, Mini bypass $5,500-7,500) vs $20,000-35,000 in USA. Includes pre-op evaluation, surgery, 3-5 day hospital stay, nutritionist consultations, and 2-year follow-up program."},{"question":"How much weight will I lose after gastric bypass?","answer":"Average weight loss: 60-80% of excess body weight in first 12-18 months. Month 1: 20-30 lbs, Month 6: 50-70 lbs, Year 1: 80-120 lbs, Year 2: 100-150 lbs. Most patients reach goal weight by 18-24 months. 85% diabetes remission, 75% hypertension resolution."},{"question":"Is gastric bypass safe in India?","answer":"Yes, gastric bypass at COE (Center of Excellence) bariatric centers is very safe. Mortality rate: 0.1-0.3% (same as USA). Complication rate: 2-5% (leak 1%, bleeding 1%). Surgeons perform 200+ procedures annually. Laparoscopic approach reduces risks vs open surgery."},{"question":"What is the recovery time?","answer":"Recovery timeline: Day 1 (walk, sips of water), Day 2-3 (liquid diet), Day 4-5 (discharge home), Week 2 (return to light work), Week 4 (resume normal activities), Month 3 (full recovery, exercise). Pain minimal with laparoscopic approach. Stay in India: 7-10 days total."}]} />

      {/* FAQ Section */}
      <section className="container mx-auto max-w-4xl px-4 py-16">
        <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">How much does gastric bypass cost in India?</h3>
              <p className="text-gray-600">Gastric bypass costs $6,000-8,500 in India (Roux-en-Y $6,000-8,000, Mini bypass $5,500-7,500) vs $20,000-35,000 in USA. Includes pre-op evaluation, surgery, 3-5 day hospital stay, nutritionist consultations, and 2-year follow-up program.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">How much weight will I lose after gastric bypass?</h3>
              <p className="text-gray-600">Average weight loss: 60-80% of excess body weight in first 12-18 months. Month 1: 20-30 lbs, Month 6: 50-70 lbs, Year 1: 80-120 lbs, Year 2: 100-150 lbs. Most patients reach goal weight by 18-24 months. 85% diabetes remission, 75% hypertension resolution.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Is gastric bypass safe in India?</h3>
              <p className="text-gray-600">Yes, gastric bypass at COE (Center of Excellence) bariatric centers is very safe. Mortality rate: 0.1-0.3% (same as USA). Complication rate: 2-5% (leak 1%, bleeding 1%). Surgeons perform 200+ procedures annually. Laparoscopic approach reduces risks vs open surgery.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">What is the recovery time?</h3>
              <p className="text-gray-600">Recovery timeline: Day 1 (walk, sips of water), Day 2-3 (liquid diet), Day 4-5 (discharge home), Week 2 (return to light work), Week 4 (resume normal activities), Month 3 (full recovery, exercise). Pain minimal with laparoscopic approach. Stay in India: 7-10 days total.</p>
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
        <SocialShare title="Gastric Bypass Surgery India: Cost, Best Surgeons 2025" description="Gastric bypass surgery in India costs $6,000-8,500 vs $20,000-35,000 in USA (75% savings). Laparoscopic Roux-en-Y, 70-80% weight loss. COE bariatric centers." />
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

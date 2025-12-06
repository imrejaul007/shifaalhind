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

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'All-on-4 Dental Implants India: Cost, Best Dentists 2025',
  description: 'All-on-4 dental implants in India cost $4,000-6,000 vs $20,000-30,000 in USA (80% savings). Full arch restoration in one day. Nobel Biocare, Straumann implants.',
  keywords: 'all on 4 dental implants india, full arch dental implants india, teeth in a day india, full mouth dental implants india, nobel biocare india, زراعة الأسنان الكاملة في الهند',
};

const RELATED_ARTICLES = [
  { title: "Rhinoplasty India", href: "/treatments/rhinoplasty-india", description: "Nose job $2,500-4,500" },
  { title: "Liposuction India", href: "/treatments/liposuction-india", description: "Body contouring $1,800-3,500" },
  { title: "Hair Transplant India", href: "/treatments/hair-transplant-india", description: "FUE/FUT from $800" }
];

export default function AllOn4DentalImplantsIndiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              All-on-4 Dental Implants in India
            </h1>
            <p className="mb-6 text-xl text-primary-50 md:text-2xl">
              Full Arch Restoration in One Day - 80% Savings
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <DollarSign className="h-6 w-6" />
                <span className="text-lg font-semibold">$4,000 - $6,000</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6" />
                <span className="text-lg font-semibold">4-6 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6" />
                <span className="text-lg font-semibold">98% success</span>
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
                    <td className="px-6 py-4 font-medium text-gray-900">All-on-4 (Nobel Biocare)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$4,500 - $6,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$20,000 - $30,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£16,500 - £25,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 73,000 - 110,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">All-on-4 (Straumann)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$4,800 - $6,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">$22,000 - $32,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£18,000 - £26,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 81,000 - 117,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">All-on-6 (Upper + Lower)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$8,500 - $11,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$40,000 - $60,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£33,000 - £50,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 147,000 - 220,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Zygomatic Implants</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$6,000 - $8,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$25,000 - $40,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£20,500 - £33,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 92,000 - 147,000</td>
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
                  <h3 className="text-xl font-bold text-gray-900">Sabka Dentist</h3>
                  <p className="text-sm text-gray-500">Mumbai, Pune, Bangalore</p>
                </div>
                <div className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-800">#1 Choice</div>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.9 (850+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 500+ All-on-4 procedures annually</li>
                <li>• Same-day teeth, Nobel Biocare center</li>
                <li>• Dr. Taruna Aswani - Implantologist</li>
                <li>• ISO 9001:2015 certified</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $4,500</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Clove Dental</h3>
                  <p className="text-sm text-gray-500">Pan India - 450+ Clinics</p>
                </div>
                
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.8 (1200+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 1,000+ full arch cases per year</li>
                <li>• 3D planning, immediate loading</li>
                <li>• Network of 500+ dentists</li>
                <li>• Largest dental chain in India</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $4,000</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Apollo White Dental</h3>
                  <p className="text-sm text-gray-500">Bangalore, Hyderabad, Chennai</p>
                </div>
                
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.9 (620+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Part of Apollo Hospitals Group</li>
                <li>• Straumann & Nobel implants</li>
                <li>• Prosthodontists & oral surgeons</li>
                <li>• NABH accredited</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $5,000</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={[{"question":"How much do All-on-4 dental implants cost in India?","answer":"All-on-4 implants cost $4,000-6,000 per arch in India (Nobel Biocare $4,500-6,000, Straumann $4,800-6,500) vs $20,000-30,000 in USA. Includes 4 implants, temporary teeth same day, final prosthesis after 3-6 months, and 5-year warranty."},{"question":"Can I get teeth in one day?","answer":"Yes, All-on-4 provides immediate temporary teeth same day as implant surgery. You leave with functional teeth within 4-6 hours. Temporary prosthesis worn 3-6 months while implants integrate. Then replaced with permanent zirconia/porcelain bridge."},{"question":"How long do All-on-4 implants last?","answer":"All-on-4 implants last 15-20+ years with proper care. 98% success rate at 10 years. Implants themselves can last lifetime, prosthetic teeth may need replacement after 10-15 years. Daily cleaning and 6-month checkups essential."},{"question":"Is All-on-4 better than dentures?","answer":"Yes, All-on-4 is superior: fixed (no removal), better chewing (90% vs 25% efficiency), preserves jawbone, more comfortable, no slipping, looks natural. Only needs 4 implants vs 6-8 for traditional. Same-day teeth possible."}]} />

      {/* FAQ Section */}
      <section className="container mx-auto max-w-4xl px-4 py-16">
        <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">How much do All-on-4 dental implants cost in India?</h3>
              <p className="text-gray-600">All-on-4 implants cost $4,000-6,000 per arch in India (Nobel Biocare $4,500-6,000, Straumann $4,800-6,500) vs $20,000-30,000 in USA. Includes 4 implants, temporary teeth same day, final prosthesis after 3-6 months, and 5-year warranty.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Can I get teeth in one day?</h3>
              <p className="text-gray-600">Yes, All-on-4 provides immediate temporary teeth same day as implant surgery. You leave with functional teeth within 4-6 hours. Temporary prosthesis worn 3-6 months while implants integrate. Then replaced with permanent zirconia/porcelain bridge.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">How long do All-on-4 implants last?</h3>
              <p className="text-gray-600">All-on-4 implants last 15-20+ years with proper care. 98% success rate at 10 years. Implants themselves can last lifetime, prosthetic teeth may need replacement after 10-15 years. Daily cleaning and 6-month checkups essential.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Is All-on-4 better than dentures?</h3>
              <p className="text-gray-600">Yes, All-on-4 is superior: fixed (no removal), better chewing (90% vs 25% efficiency), preserves jawbone, more comfortable, no slipping, looks natural. Only needs 4 implants vs 6-8 for traditional. Same-day teeth possible.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      
      {/* Testimonials Section */}
      <Testimonials
        testimonials={TREATMENT_TESTIMONIALS['dental']}
        title="Success Stories from Our All On 4 Dental Implants Patients"
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
        <SocialShare title="All-on-4 Dental Implants India: Cost, Best Dentists 2025" description="All-on-4 dental implants in India cost $4,000-6,000 vs $20,000-30,000 in USA (80% savings). Full arch restoration in one day. Nobel Biocare, Straumann implants." />
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

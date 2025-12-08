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
  title: 'Dental Veneers India: Cost, Best Dentists 2025',
  description: 'Dental veneers in India cost $150-400 per tooth vs $925-2,500 in USA (80% savings). Porcelain, composite, eMax veneers. Expert cosmetic dentists.',
  keywords: 'veneers india, dental veneers cost india, porcelain veneers india, emax veneers india, smile makeover india, cosmetic dentistry india, قشور الأسنان في الهند',
};

const RELATED_ARTICLES = [
  { title: "Rhinoplasty India", href: "/treatments/rhinoplasty-india", description: "Nose job $2,500-4,500" },
  { title: "Liposuction India", href: "/treatments/liposuction-india", description: "Body contouring $1,800-3,500" },
  { title: "Hair Transplant India", href: "/treatments/hair-transplant-india", description: "FUE/FUT from $800" }
];

export default function VeneersIndiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-wh
      {/* Breadcrumb Schema for SEO */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://shifaalhind.onrender.com' },
        { name: 'Treatments', url: 'https://shifaalhind.onrender.com/treatments' },
        { name: 'Dental Veneers in India', url: 'https://shifaalhind.onrender.com/treatments/veneers-india' }
      ]} />

      {/* Medical Procedure Schema for SEO */}
      <MedicalProcedureSchema
        name="Dental Veneers"
        description="Dental veneers are thin shells placed over teeth to improve appearance by correcting discoloration, chips, or alignment issues."
        procedureType="TherapeuticProcedure"
        bodyLocation="Teeth"
        
        
        url="https://shifaalhind.onrender.com/treatments/veneers-india"
      />
ite">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Dental Veneers in India
            </h1>
            <p className="mb-6 text-xl text-primary-50 md:text-2xl">
              Hollywood Smile at 80% Lower Cost
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <DollarSign className="h-6 w-6" />
                <span className="text-lg font-semibold">$150 - $400</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6" />
                <span className="text-lg font-semibold">2-3 visits</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6" />
                <span className="text-lg font-semibold">98% satisfaction</span>
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
                    <td className="px-6 py-4 font-medium text-gray-900">Composite Veneers (per tooth)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$150 - $250</td>
                    <td className="px-6 py-4 text-center text-gray-600">$925 - $1,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">£770 - £1,250</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 3,400 - 5,500</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Porcelain Veneers (per tooth)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$250 - $400</td>
                    <td className="px-6 py-4 text-center text-gray-600">$1,500 - $2,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">£1,250 - £2,100</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 5,500 - 9,200</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">eMax Veneers (per tooth)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$300 - $450</td>
                    <td className="px-6 py-4 text-center text-gray-600">$1,800 - $3,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£1,500 - £2,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 6,600 - 11,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Full Smile Makeover (10-12 teeth)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$2,500 - $4,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">$15,000 - $30,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£12,500 - £25,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 55,000 - 110,000</td>
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
                  <p className="text-sm text-gray-500">Mumbai, Pune, Bangalore, Delhi</p>
                </div>
                <div className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-800">#1 Choice</div>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.9 (950+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 25,000+ veneers placed annually</li>
                <li>• German Cerec technology, same-day</li>
                <li>• Cosmetic dentistry specialists</li>
                <li>• ISO 9001:2015</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $200</p>
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
                <span className="ml-2 text-sm text-gray-600">4.8 (1400+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Largest dental chain, 50,000+ veneers</li>
                <li>• Digital smile design, 3D preview</li>
                <li>• 500+ cosmetic dentists</li>
                <li>• Most trusted brand</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $150</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Dr. Teeth Dental Care</h3>
                  <p className="text-sm text-gray-500">Delhi, Mumbai, Bangalore</p>
                </div>
                
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.9 (680+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Celebrity smile makeovers</li>
                <li>• Minimal prep veneers, Lumineers</li>
                <li>• Award-winning cosmetic dentists</li>
                <li>• International standards</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $250</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={[{"question":"How much do veneers cost in India?","answer":"Veneers cost $150-450 per tooth in India (composite $150-250, porcelain $250-400, eMax $300-450) vs $925-2,500 in USA. Full smile makeover (10-12 teeth): $2,500-4,500 in India vs $15,000-30,000 abroad. Includes design, preparation, temporary veneers, and final bonding."},{"question":"Which type of veneers is best?","answer":"eMax veneers are strongest and most natural-looking (best choice). Porcelain veneers are good balance of aesthetics and cost. Composite veneers are most affordable, done in one visit but last 5-7 years vs 10-15 for porcelain/eMax."},{"question":"Do veneers damage your teeth?","answer":"Minimal prep veneers (Lumineers) require little to no tooth reduction. Traditional veneers remove 0.5-0.7mm of enamel (irreversible). However, this protects teeth long-term. With proper care, veneers last 10-15 years. Performed by experienced cosmetic dentists, risk is minimal."},{"question":"How long do veneers last in India?","answer":"Veneer lifespan: Composite 5-7 years, Porcelain 10-15 years, eMax 15-20 years. Quality same as USA/Europe - materials imported from same suppliers. Longevity depends on oral hygiene, avoid hard foods, wear night guard if grinding teeth. Regular checkups every 6 months."}]} />

      {/* FAQ Section */}
      <section className="container mx-auto max-w-4xl px-4 py-16">
        <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">How much do veneers cost in India?</h3>
              <p className="text-gray-600">Veneers cost $150-450 per tooth in India (composite $150-250, porcelain $250-400, eMax $300-450) vs $925-2,500 in USA. Full smile makeover (10-12 teeth): $2,500-4,500 in India vs $15,000-30,000 abroad. Includes design, preparation, temporary veneers, and final bonding.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Which type of veneers is best?</h3>
              <p className="text-gray-600">eMax veneers are strongest and most natural-looking (best choice). Porcelain veneers are good balance of aesthetics and cost. Composite veneers are most affordable, done in one visit but last 5-7 years vs 10-15 for porcelain/eMax.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Do veneers damage your teeth?</h3>
              <p className="text-gray-600">Minimal prep veneers (Lumineers) require little to no tooth reduction. Traditional veneers remove 0.5-0.7mm of enamel (irreversible). However, this protects teeth long-term. With proper care, veneers last 10-15 years. Performed by experienced cosmetic dentists, risk is minimal.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">How long do veneers last in India?</h3>
              <p className="text-gray-600">Veneer lifespan: Composite 5-7 years, Porcelain 10-15 years, eMax 15-20 years. Quality same as USA/Europe - materials imported from same suppliers. Longevity depends on oral hygiene, avoid hard foods, wear night guard if grinding teeth. Regular checkups every 6 months.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials
        testimonials={TREATMENT_TESTIMONIALS['dental']}
        title="Success Stories from Our Veneers Patients"
        subtitle="Real transformations from GCC patients who achieved life-changing results"
      />

      {/* Trust Badges Section */}
      <TrustBadges />

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
        <SocialShare title="Dental Veneers India: Cost, Best Dentists 2025" description="Dental veneers in India cost $150-400 per tooth vs $925-2,500 in USA (80% savings). Porcelain, composite, eMax veneers. Expert cosmetic dentists." />
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

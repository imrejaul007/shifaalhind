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
  title: 'Breast Augmentation India: Cost, Best Surgeons 2025',
  description: 'Breast augmentation in India costs $2,800-4,500 vs $8,000-15,000 in USA (70% savings). Silicone/saline implants, board-certified surgeons, 97% satisfaction.',
  keywords: 'breast augmentation india, breast implants india, breast enlargement india, breast surgery india, silicone implants india, cosmetic surgery india, تكبير الثدي في الهند',
};

const RELATED_ARTICLES = [
  { title: "Rhinoplasty India", href: "/treatments/rhinoplasty-india", description: "Nose job $2,500-4,500" },
  { title: "Liposuction India", href: "/treatments/liposuction-india", description: "Body contouring $1,800-3,500" },
  { title: "Hair Transplant India", href: "/treatments/hair-transplant-india", description: "FUE/FUT from $800" }
];

export default function BreastAugmentationIndiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Breast Augmentation in India
            </h1>
            <p className="mb-6 text-xl text-primary-50 md:text-2xl">
              Natural-Looking Results at 70% Lower Cost
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <DollarSign className="h-6 w-6" />
                <span className="text-lg font-semibold">$2,800 - $4,500</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6" />
                <span className="text-lg font-semibold">1-2 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6" />
                <span className="text-lg font-semibold">97% satisfaction</span>
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
                    <td className="px-6 py-4 font-medium text-gray-900">Silicone Implants (Round)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$2,800 - $3,800</td>
                    <td className="px-6 py-4 text-center text-gray-600">$8,000 - $12,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£6,500 - £10,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 29,000 - 44,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Silicone Implants (Teardrop)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$3,200 - $4,200</td>
                    <td className="px-6 py-4 text-center text-gray-600">$9,000 - $14,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£7,500 - £11,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 33,000 - 51,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Saline Implants</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$2,500 - $3,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">$6,500 - $10,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£5,400 - £8,300</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 24,000 - 37,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Fat Transfer Augmentation</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$3,500 - $4,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">$10,000 - $15,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£8,300 - £12,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 37,000 - 55,000</td>
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
                  <h3 className="text-xl font-bold text-gray-900">Cocoona Centre for Aesthetic</h3>
                  <p className="text-sm text-gray-500">Mumbai, Delhi, Bangalore</p>
                </div>
                <div className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-800">#1 Choice</div>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">5.0 (420+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 18,000+ cosmetic procedures annually</li>
                <li>• Motiva & Mentor implant specialists</li>
                <li>• Dr. Sanjay Parashar - Board certified plastic surgeon</li>
                <li>• JCI accredited, ISO certified</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $3,200</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Apollo Cosmetic Clinics</h3>
                  <p className="text-sm text-gray-500">Pan India - 12 Locations</p>
                </div>
                
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.9 (680+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 5,000+ breast augmentations/year</li>
                <li>• FDA-approved implants only</li>
                <li>• 20+ plastic surgeons, international training</li>
                <li>• NABH accredited facilities</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $2,800</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Fortis Bloom Aesthetics</h3>
                  <p className="text-sm text-gray-500">Delhi NCR, Mumbai</p>
                </div>
                
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.9 (510+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 4,500+ breast surgeries annually</li>
                <li>• All incision approaches available</li>
                <li>• Celebrity clientele, privacy assured</li>
                <li>• JCI & NABH accredited</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $3,000</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={[{"question":"How much does breast augmentation cost in India?","answer":"Breast augmentation costs $2,800-4,500 in India (round silicone $2,800-3,800, teardrop $3,200-4,200, saline $2,500-3,500) vs $8,000-15,000 in USA. Includes implants (Mentor/Motiva/Allergan), surgery, post-op bras, and 1-year follow-ups."},{"question":"Are breast implants safe in India?","answer":"Yes, Indian clinics use FDA-approved implants (Mentor, Allergan, Motiva) same as USA/Europe. Surgeons are board-certified with 1,000+ procedures. 97% satisfaction rate, less than 3% capsular contracture. 10-15 year implant warranty included."},{"question":"What size implants should I get?","answer":"Size determined by: chest width, existing breast tissue, desired look (natural vs dramatic). Typical range: 250-400cc (1-2 cup increase). 3D imaging helps visualize results. Most popular: 300-350cc for natural look. Surgeon recommends based on body proportions."},{"question":"How long is breast augmentation recovery?","answer":"Recovery: Week 1 (light activities, surgical bra), Week 2 (return to desk work), Week 4 (light exercise), Week 6 (full activities, underwire bras). Swelling reduces 70% by week 2. Final shape at 3-6 months when implants settle."}]} />

      {/* FAQ Section */}
      <section className="container mx-auto max-w-4xl px-4 py-16">
        <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">How much does breast augmentation cost in India?</h3>
              <p className="text-gray-600">Breast augmentation costs $2,800-4,500 in India (round silicone $2,800-3,800, teardrop $3,200-4,200, saline $2,500-3,500) vs $8,000-15,000 in USA. Includes implants (Mentor/Motiva/Allergan), surgery, post-op bras, and 1-year follow-ups.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Are breast implants safe in India?</h3>
              <p className="text-gray-600">Yes, Indian clinics use FDA-approved implants (Mentor, Allergan, Motiva) same as USA/Europe. Surgeons are board-certified with 1,000+ procedures. 97% satisfaction rate, less than 3% capsular contracture. 10-15 year implant warranty included.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">What size implants should I get?</h3>
              <p className="text-gray-600">Size determined by: chest width, existing breast tissue, desired look (natural vs dramatic). Typical range: 250-400cc (1-2 cup increase). 3D imaging helps visualize results. Most popular: 300-350cc for natural look. Surgeon recommends based on body proportions.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">How long is breast augmentation recovery?</h3>
              <p className="text-gray-600">Recovery: Week 1 (light activities, surgical bra), Week 2 (return to desk work), Week 4 (light exercise), Week 6 (full activities, underwire bras). Swelling reduces 70% by week 2. Final shape at 3-6 months when implants settle.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      
      {/* Testimonials Section */}
      <Testimonials
        testimonials={TREATMENT_TESTIMONIALS['generic']}
        title="Success Stories from Our Breast Augmentation Patients"
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
        <SocialShare title="Breast Augmentation India: Cost, Best Surgeons 2025" description="Breast augmentation in India costs $2,800-4,500 vs $8,000-15,000 in USA (70% savings). Silicone/saline implants, board-certified surgeons, 97% satisfaction." />
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

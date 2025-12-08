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
  Shield,
  Users,
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
  title: 'Liposuction India: Cost, Best Surgeons & Results 2025',
  description: 'Liposuction in India costs $1,800-3,500 vs $6,000-11,000 in USA (70% savings). VASER, laser, traditional techniques. Expert cosmetic surgeons, 96% satisfaction.',
  keywords: 'liposuction india, liposuction cost india, vaser liposuction india, laser lipo india, body contouring india, fat removal india, liposuction mumbai, liposuction delhi, شفط الدهون في الهند, تكلفة شفط الدهون في الهند',
};

const RELATED_ARTICLES = [
  {
    title: "Rhinoplasty India",
    href: "/treatments/rhinoplasty-india",
    description: "Nose job $2,500-4,500 vs $8,000-15,000 USA"
  },
  {
    title: "Breast Augmentation India",
    href: "/treatments/breast-augmentation-india",
    description: "Breast implants $2,800-4,500 vs $8,000-15,000 USA"
  },
  {
    title: "Hair Transplant India",
    href: "/treatments/hair-transplant-india",
    description: "FUE/FUT from $800 vs $8,000+ abroad"
  }
];

export default function LiposuctionIndiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Liposuction in India
            </h1>
            <p className="mb-6 text-xl text-primary-50 md:text-2xl">
              Advanced Body Contouring at 70% Lower Cost
            </p>

            {/* Key Stats */}
            <div className="mb-8 flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <DollarSign className="h-6 w-6" />
                <span className="text-lg font-semibold">$1,800 - $3,500</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6" />
                <span className="text-lg font-semibold">1-3 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6" />
                <span className="text-lg font-semibold">96% satisfaction</span>
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

      {/* Why Choose Section */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          Why Choose India for Liposuction?
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-2 border-primary-100 transition-shadow hover:shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                <DollarSign className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">70% Cost Savings</h3>
              <p className="text-gray-600">
                Pay $1,800-3,500 in India vs $6,000-11,000 in USA. Same quality, massive savings on VASER and laser lipo.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary-100 transition-shadow hover:shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                <Award className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Expert Surgeons</h3>
              <p className="text-gray-600">
                Board-certified plastic surgeons with 1,000+ liposuction procedures. Fellowship-trained in body contouring.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary-100 transition-shadow hover:shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                <Shield className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Advanced Technology</h3>
              <p className="text-gray-600">
                Latest VASER ultrasound and laser-assisted liposuction. Power-assisted and water-jet techniques available.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary-100 transition-shadow hover:shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                <Star className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">96% Satisfaction</h3>
              <p className="text-gray-600">
                Exceptional patient satisfaction with natural-looking results. Less than 2% complication rate at top clinics.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost Comparison */}
      <section id="cost" className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Liposuction Cost Comparison
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600">
            Save 70-75% on liposuction procedures in India
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
                    <td className="px-6 py-4 font-medium text-gray-900">Traditional Liposuction</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$1,800 - $2,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">$6,000 - $9,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£5,000 - £7,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 22,000 - 33,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">VASER Liposuction</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$2,500 - $3,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">$8,000 - $12,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£6,500 - £10,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 29,000 - 44,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Laser Liposuction</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$2,200 - $3,200</td>
                    <td className="px-6 py-4 text-center text-gray-600">$7,000 - $11,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£5,800 - £9,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 25,000 - 40,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Power-Assisted Lipo</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$2,000 - $2,800</td>
                    <td className="px-6 py-4 text-center text-gray-600">$6,500 - $10,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£5,400 - £8,300</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 24,000 - 37,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Multiple Areas (3-4)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$3,000 - $4,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">$9,000 - $15,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£7,500 - £12,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 33,000 - 55,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <div className="mt-6 rounded-lg bg-blue-50 p-6">
            <h3 className="mb-2 flex items-center gap-2 font-semibold text-blue-900">
              <CheckCircle2 className="h-5 w-5" />
              What&apos;s Included in the Cost
            </h3>
            <ul className="ml-7 space-y-1 text-blue-800">
              <li>• Surgeon fees and anesthesiologist charges</li>
              <li>• Operating room and medical equipment</li>
              <li>• Compression garments (2-3 sets)</li>
              <li>• Post-operative medications and care</li>
              <li>• Follow-up consultations (3-6 months)</li>
              <li>• Airport pickup and local transfers</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          Your Liposuction Journey in India
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-l-4 border-l-primary-500">
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Pre-Procedure (Week 1)</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Comprehensive consultation with board-certified plastic surgeon</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Body contouring analysis and area marking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Blood tests, ECG, and medical clearance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>3D body imaging and before photos</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary-500">
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Surgery Day</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>1-3 hour procedure under general or local anesthesia</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Small incisions (3-5mm) with minimal scarring</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>VASER/Laser fat emulsification and removal</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Compression garment fitted immediately after</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary-500">
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Recovery (Week 1-2)</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Day 1-2: Rest at hotel with nursing care available</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Day 3-5: Light walking, compression garment 24/7</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Week 2: Swelling reduces 50%, return to desk work</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Follow-up appointments and drain removal (if applicable)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary-500">
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Long-term Results</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Month 1: 70% of swelling resolved, contouring visible</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Month 3: Final shape emerges, skin tightening begins</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Month 6-12: Complete skin retraction, final results</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Virtual follow-ups and progress photos</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Top Clinics */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Top Liposuction Clinics in India
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600">
            JCI-accredited cosmetic surgery centers with international standards
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
              <CardContent className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Cocoona Centre for Aesthetic</h3>
                    <p className="text-sm text-gray-500">Mumbai, Delhi, Bangalore</p>
                  </div>
                  <div className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-800">
                    #1 Choice
                  </div>
                </div>
                <div className="mb-4 flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-2 text-sm text-gray-600">5.0 (450+ reviews)</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 15,000+ cosmetic procedures annually</li>
                  <li>• VASER Hi-Def and 4D liposuction specialists</li>
                  <li>• Dr. Sanjay Parashar - 20+ years experience</li>
                  <li>• JCI accredited, ISO 9001 certified</li>
                </ul>
                <p className="mt-4 text-sm font-semibold text-primary-600">
                  From $2,200 • VASER Lipo Available
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Apollo Cosmetic Clinics</h3>
                  <p className="text-sm text-gray-500">Pan India - 12 Locations</p>
                </div>
                <div className="mb-4 flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-2 text-sm text-gray-600">4.9 (680+ reviews)</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Part of Apollo Hospitals Group</li>
                  <li>• 8,000+ liposuction procedures/year</li>
                  <li>• Laser and water-jet liposuction</li>
                  <li>• International patient coordinators</li>
                </ul>
                <p className="mt-4 text-sm font-semibold text-primary-600">
                  From $1,800 • Multiple Locations
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Fortis Bloom Aesthetics</h3>
                  <p className="text-sm text-gray-500">Delhi NCR, Mumbai</p>
                </div>
                <div className="mb-4 flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-2 text-sm text-gray-600">4.9 (520+ reviews)</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 6,000+ body contouring procedures</li>
                  <li>• Power-assisted and tumescent lipo</li>
                  <li>• Celebrity clientele, privacy assured</li>
                  <li>• NABH & JCI accredited facilities</li>
                </ul>
                <p className="mt-4 text-sm font-semibold text-primary-600">
                  From $2,000 • Premium Service
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Patient Success Story */}
      <section className="container mx-auto max-w-4xl px-4 py-16">
        <Card className="border-2 border-primary-100 bg-gradient-to-r from-primary-50 to-white">
          <CardContent className="p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-2xl font-bold text-white">
                S
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Sarah M.</h3>
                <p className="text-sm text-gray-600">Dubai, UAE • VASER Liposuction</p>
              </div>
            </div>
            <p className="mb-4 text-lg italic text-gray-700">
              &quot;After trying diet and exercise for years, I still had stubborn fat on my abdomen and thighs. I chose Cocoona in Mumbai for VASER liposuction after extensive research. The results exceeded my expectations!&quot;
            </p>
            <p className="text-gray-600">
              Sarah saved <span className="font-bold text-green-600">$7,800 (72%)</span> compared to Dubai pricing. She had 3 areas treated (abdomen, flanks, thighs) for $2,900 vs $10,700 in UAE. Recovery took 2 weeks, with final results visible at 4 months showing dramatic contouring and skin tightening.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="rounded-lg bg-white px-4 py-2">
                <span className="text-sm text-gray-600">Treatment Cost:</span>
                <span className="ml-2 font-bold text-green-600">$2,900</span>
              </div>
              <div className="rounded-lg bg-white px-4 py-2">
                <span className="text-sm text-gray-600">Areas Treated:</span>
                <span className="ml-2 font-bold text-gray-900">3 zones</span>
              </div>
              <div className="rounded-lg bg-white px-4 py-2">
                <span className="text-sm text-gray-600">Satisfaction:</span>
                <span className="ml-2 font-bold text-yellow-600">★★★★★</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FAQ Schema for SEO */}
      <FAQSchema faqs={[
        {
          question: "How much does liposuction cost in India?",
          answer: "Liposuction costs $1,800-3,500 in India (traditional $1,800-2,500, VASER $2,500-3,500, laser $2,200-3,200) vs $6,000-11,000 in USA. Includes surgery, anesthesia, compression garments, and 3-6 month follow-ups. Multiple area discounts available."
        },
        {
          question: "Is liposuction safe in India?",
          answer: "Yes, liposuction is safe at JCI-accredited clinics with board-certified plastic surgeons. 96% satisfaction rate, less than 2% complication rate. Surgeons perform 1,000+ procedures annually with extensive experience in VASER and laser techniques."
        },
        {
          question: "How long is recovery from liposuction?",
          answer: "Recovery timeline: Week 1 (compression garment 24/7, light walking), Week 2 (return to desk work, 50% swelling reduced), Month 1 (70% results visible, light exercise), Month 3-6 (final contouring and skin tightening). Full recovery 3-6 months."
        },
        {
          question: "What is VASER liposuction?",
          answer: "VASER (Vibration Amplification of Sound Energy at Resonance) uses ultrasound to liquefy fat before removal. Benefits: less bruising, faster recovery, better skin tightening, precise contouring. Costs $2,500-3,500 in India vs $8,000-12,000 abroad. Ideal for abdominal definition."
        },
        {
          question: "How many areas can be treated in one session?",
          answer: "Typically 3-4 areas in one session (e.g., abdomen, flanks, thighs). Maximum safe fat removal is 5 liters. Larger volume cases (6-8 liters) may require staging. Multi-area packages save 15-20% vs individual pricing."
        },
        {
          question: "Will fat come back after liposuction?",
          answer: "Fat cells removed permanently don't return. However, remaining fat cells can expand with weight gain. Maintaining weight within 10 lbs of post-lipo weight preserves results. 85% of patients maintain results 5+ years with healthy lifestyle."
        },
        {
          question: "Do I need to stay in hospital overnight?",
          answer: "Most liposuction is outpatient (day surgery). Overnight stay recommended for: multiple large areas (4+), high-volume lipo (>4 liters), or medical conditions. Hotels near clinics offer post-op nursing care if needed."
        },
        {
          question: "What's the difference between laser and VASER lipo?",
          answer: "Laser lipo uses heat to melt fat (better skin tightening, smaller areas), VASER uses ultrasound (larger volumes, less bruising, hi-def results possible). Laser: $2,200-3,200, VASER: $2,500-3,500. Both superior to traditional liposuction for precision and recovery."
        }
      ]} />

      {/* FAQ Section */}
      <section className="container mx-auto max-w-4xl px-4 py-16">
        <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                How much does liposuction cost in India?
              </h3>
              <p className="text-gray-600">
                Liposuction costs $1,800-3,500 in India (traditional $1,800-2,500, VASER $2,500-3,500, laser $2,200-3,200) vs $6,000-11,000 in USA. The price includes surgery, anesthesia, compression garments, and 3-6 month follow-ups. Multiple area discounts available, typically saving 15-20%.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Is liposuction safe in India?
              </h3>
              <p className="text-gray-600">
                Yes, liposuction is very safe at JCI-accredited clinics with board-certified plastic surgeons. Top clinics report 96% satisfaction rate and less than 2% complication rate. Surgeons perform 1,000+ procedures annually with extensive experience in advanced VASER and laser techniques.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                How long is recovery from liposuction?
              </h3>
              <p className="text-gray-600">
                Recovery timeline: Week 1 (compression garment 24/7, light walking allowed), Week 2 (return to desk work, 50% of swelling reduced), Month 1 (70% of results visible, can resume light exercise), Month 3-6 (final contouring and skin tightening complete). Full recovery takes 3-6 months.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                What is VASER liposuction and is it better?
              </h3>
              <p className="text-gray-600">
                VASER (Vibration Amplification of Sound Energy at Resonance) uses ultrasound technology to liquefy fat before removal. Benefits include less bruising, faster recovery, better skin tightening, and more precise contouring. It costs $2,500-3,500 in India vs $8,000-12,000 abroad. Ideal for achieving abdominal definition and treating fibrous areas.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Will the fat come back after liposuction?
              </h3>
              <p className="text-gray-600">
                The fat cells removed during liposuction are permanently gone and won't return. However, remaining fat cells can expand if you gain significant weight. Maintaining your weight within 10 lbs of your post-liposuction weight preserves results. Studies show 85% of patients maintain their results for 5+ years with a healthy lifestyle.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                How many areas can be treated in one session?
              </h3>
              <p className="text-gray-600">
                Typically 3-4 areas can be safely treated in one session (e.g., abdomen, flanks, and thighs). The maximum safe fat removal is about 5 liters. For larger volume cases (6-8 liters), staging may be recommended with procedures 3-6 months apart. Multi-area packages typically save 15-20% compared to individual area pricing.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                What is the minimum age and BMI for liposuction?
              </h3>
              <p className="mb-3 text-gray-600">
                <strong>Minimum age: 18 years</strong> (some surgeons prefer 21+ for best skin elasticity). <strong>BMI requirements:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li><strong>Ideal candidates: BMI 25-30</strong> (overweight but not obese, localized fat deposits)</li>
                <li><strong>Acceptable: BMI 30-35</strong> (mild obesity, realistic expectations, commitment to lifestyle changes)</li>
                <li><strong>Not recommended: BMI 35+</strong> (significant obesity, weight loss surgery more appropriate)</li>
                <li><strong>Best results: BMI under 32</strong> (better skin retraction, lower complication risk)</li>
              </ul>
              <p className="mt-3 text-gray-600">
                Liposuction is <strong>not a weight loss solution</strong> - it&apos;s body contouring for stubborn fat that won&apos;t respond to diet/exercise. Ideal patients are within 20-30 lbs of goal weight with good skin tone. Younger patients (18-40) have better skin elasticity and results.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Can I smoke before or after liposuction?
              </h3>
              <p className="mb-3 text-gray-600">
                <strong>No, smoking significantly increases risks and delays healing.</strong> Smoking timeline:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li><strong>4 weeks before surgery:</strong> Stop smoking completely (nicotine constricts blood vessels, reduces oxygen to tissues)</li>
                <li><strong>6 weeks after surgery:</strong> Continue abstaining (critical healing period, prevents skin necrosis)</li>
                <li><strong>Long-term:</strong> Ideally quit permanently for best results and overall health</li>
                <li><strong>Vaping equally harmful:</strong> E-cigarettes contain nicotine, same risks as traditional smoking</li>
                <li><strong>Risks of smoking:</strong> 3-6× higher infection rate, delayed wound healing, skin death (necrosis), poor scarring, uneven results</li>
              </ul>
              <p className="mt-3 text-gray-600">
                Some surgeons refuse to operate on active smokers due to high complication risk. Nicotine patches/gum also discouraged (still contain nicotine). Blood test may be required to verify nicotine-free status before surgery. If you can&apos;t quit, postpone surgery until you can commit to tobacco-free period.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                When can I fly home after liposuction surgery?
              </h3>
              <p className="mb-3 text-gray-600">
                <strong>Safe to fly 7-10 days after liposuction</strong> (after surgeon clearance and drain removal if applicable). Timeline:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li><strong>Single area (1-2 zones):</strong> Can fly after 5-7 days (minimal swelling, quick recovery)</li>
                <li><strong>Multiple areas (3-4 zones):</strong> Wait 7-10 days (more swelling, need stability)</li>
                <li><strong>High-volume lipo (4+ liters):</strong> Wait 10-14 days (major surgery, ensure healing started)</li>
                <li><strong>With drains:</strong> Drains removed Day 3-7, can fly 2-3 days after removal</li>
                <li><strong>Clearance required:</strong> Surgeon must approve fitness to fly (check incisions, swelling, vital signs)</li>
              </ul>
              <p className="mt-3 text-gray-600">
                <strong>Flying precautions:</strong> Wear compression garment during flight (reduces swelling from cabin pressure), walk every 2 hours (prevent blood clots - DVT risk), aisle seat preferred (easier to move), pack extra garments and medications in carry-on, bring surgeon&apos;s letter explaining recent surgery. Avoid heavy lifting of luggage (ask for assistance). Stay hydrated but limit alcohol (worsens swelling).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                When can I exercise after liposuction?
              </h3>
              <p className="mb-3 text-gray-600">
                <strong>Gradual return to exercise over 6-8 weeks.</strong> Timeline by activity:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                <li><strong>Walking:</strong> Immediately after surgery (encouraged from Day 1, reduces blood clot risk)</li>
                <li><strong>Light cardio (treadmill, bike):</strong> Week 2-3 (heart rate under 120 bpm, no jarring movements)</li>
                <li><strong>Jogging/running:</strong> Week 4-6 (once swelling reduced 70%+, surgeon clearance required)</li>
                <li><strong>Weight training (upper body):</strong> Week 3-4 if no upper body lipo, Week 6 if arms/chest treated</li>
                <li><strong>Weight training (lower body):</strong> Week 4-6 (no squats/deadlifts until Week 6)</li>
                <li><strong>Swimming:</strong> Week 4-6 (incisions must be fully healed, no scabs)</li>
                <li><strong>High-impact sports:</strong> Week 6-8 (contact sports, CrossFit, HIIT classes)</li>
              </ul>
              <p className="mb-3 text-gray-600"><strong>Signs to stop exercising:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li>Increased swelling or pain</li>
                <li>Bleeding from incision sites</li>
                <li>Excessive fatigue or dizziness</li>
                <li>Fluid drainage or separation of incisions</li>
              </ul>
              <p className="mt-3 text-gray-600">
                <strong>Compression garment:</strong> Must wear during all exercise for first 6 weeks (supports healing, reduces swelling). Start slow and increase intensity 10-20% per week. Listen to your body - if it hurts, you&apos;re doing too much too soon.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Is liposuction painful? What anesthesia is used?
              </h3>
              <p className="mb-3 text-gray-600">
                <strong>Pain is moderate and well-managed with medications.</strong> Pain timeline and anesthesia options:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                <li><strong>During procedure:</strong> No pain (under anesthesia)</li>
                <li><strong>Day 1-3:</strong> Moderate soreness (feels like intense workout, muscle ache), pain 4-6/10, managed with prescription painkillers</li>
                <li><strong>Week 1:</strong> Pain reduces to 2-4/10, switch to over-the-counter meds (ibuprofen)</li>
                <li><strong>Week 2+:</strong> Minimal pain 0-2/10, tenderness when touching treated areas</li>
                <li><strong>Month 1-3:</strong> Occasional numbness or tingling (nerve regeneration, normal)</li>
              </ul>
              <p className="mb-3 text-gray-600"><strong>Anesthesia options:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li><strong>General anesthesia:</strong> Completely asleep (for multiple areas, high-volume lipo, 3+ hours surgery)</li>
                <li><strong>IV sedation (twilight):</strong> Drowsy but responsive (for 1-2 areas, 1-2 hour procedures)</li>
                <li><strong>Local with sedation:</strong> Numbed areas + relaxation meds (small areas only, not common)</li>
                <li><strong>Most common:</strong> General anesthesia (safer for longer procedures, patient comfort)</li>
              </ul>
              <p className="mt-3 text-gray-600">
                <strong>Pain comparison:</strong> Most patients say liposuction pain is less than expected - similar to severe muscle soreness after extreme workout. Compression garment helps reduce pain by supporting tissues. VASER and laser lipo cause less pain than traditional liposuction (gentler on tissues).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Will I have loose skin after liposuction?
              </h3>
              <p className="mb-3 text-gray-600">
                <strong>Depends on age, skin elasticity, and volume removed.</strong> Skin tightening expectations:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                <li><strong>Good skin retraction (minimal/no loose skin):</strong> Age under 40, good skin elasticity, moderate fat removal (2-4 liters), non-smoker, healthy weight, VASER/laser lipo used</li>
                <li><strong>Moderate loose skin (improves over time):</strong> Age 40-55, moderate elasticity, larger volume removal (4-5 liters), will tighten 30-50% over 6-12 months</li>
                <li><strong>Significant loose skin (may need tummy tuck):</strong> Age 55+, poor elasticity, massive weight loss history, 5+ liters removed, smoking history</li>
              </ul>
              <p className="mb-3 text-gray-600"><strong>Skin tightening timeline:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li><strong>Month 1-3:</strong> Skin appears loose (swelling masks contraction)</li>
                <li><strong>Month 3-6:</strong> Skin begins tightening (collagen remodeling)</li>
                <li><strong>Month 6-12:</strong> Maximum skin retraction achieved (70-80% of final tightening)</li>
                <li><strong>Year 2:</strong> Final 20% improvement (full collagen maturation)</li>
              </ul>
              <p className="mt-3 text-gray-600">
                <strong>Improving skin tightening:</strong> VASER/laser lipo (stimulates collagen, 20-30% better tightening vs traditional), compression garment 24/7 for 6 weeks (supports skin contraction), radiofrequency treatments Month 3-6 (additional tightening), maintain weight (fluctuations worsen loose skin). If significant loose skin anticipated, surgeon may recommend combining lipo with tummy tuck/arm lift/thigh lift for best cosmetic result.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      
      {/* Testimonials Section */}
      <Testimonials
        testimonials={TREATMENT_TESTIMONIALS['generic']}
        title="Success Stories from Our Liposuction Patients"
        subtitle="Real transformations from GCC patients who achieved life-changing results"
      />

      {/* Trust Badges Section */}
      <TrustBadges />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            Ready to Transform Your Body?
          </h2>
          <p className="mb-8 text-xl text-primary-50">
            Get your personalized treatment plan and cost estimate today
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-accent-500 text-lg hover:bg-accent-600">
              <Link href="/consultation">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white bg-transparent text-lg text-white hover:bg-white hover:text-primary-600">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-primary-100">
            Free consultation • No obligation • Response within 24 hours
          </p>
        </div>
      </section>

      {/* Social Share */}
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <SocialShare
          title="Liposuction India: Cost, Best Surgeons & Results 2025"
          description="Liposuction in India costs $1,800-3,500 vs $6,000-11,000 in USA (70% savings). VASER, laser, traditional techniques. Expert cosmetic surgeons, 96% satisfaction."
        />
      </div>

      {/* Related Articles */}
      <div className="container mx-auto max-w-6xl px-4 pb-12">
        <RelatedArticles articles={RELATED_ARTICLES} />
      </div>

      {/* Internal Links */}
      <div className="container mx-auto max-w-6xl px-4 pb-12">
        <InternalLinks variant="compact" />
      </div>
    </div>
  );
}

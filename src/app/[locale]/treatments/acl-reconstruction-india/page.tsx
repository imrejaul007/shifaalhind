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
  title: 'ACL Reconstruction India: Cost, Best Surgeons 2025',
  description: 'ACL reconstruction in India costs $3,500-5,500 vs $20,000-50,000 in USA (85% savings). Arthroscopic surgery, 95% success rate. Sports medicine experts.',
  keywords: 'acl reconstruction india, acl surgery india, acl surgery cost india, acl repair india, knee surgery india, sports medicine india, arthroscopic surgery india, إعادة بناء الرباط الصليبي في الهند',
};

const RELATED_ARTICLES = [
  { title: "Rhinoplasty India", href: "/treatments/rhinoplasty-india", description: "Nose job $2,500-4,500" },
  { title: "Liposuction India", href: "/treatments/liposuction-india", description: "Body contouring $1,800-3,500" },
  { title: "Hair Transplant India", href: "/treatments/hair-transplant-india", description: "FUE/FUT from $800" }
];

export default function AclReconstructionIndiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              ACL Reconstruction in India
            </h1>
            <p className="mb-6 text-xl text-primary-50 md:text-2xl">
              Return to Sports with World-Class Knee Surgery
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <DollarSign className="h-6 w-6" />
                <span className="text-lg font-semibold">$3,500 - $5,500</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6" />
                <span className="text-lg font-semibold">1-2 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6" />
                <span className="text-lg font-semibold">95% success</span>
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
                    <td className="px-6 py-4 font-medium text-gray-900">Hamstring Autograft ACL</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$3,500 - $4,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">$20,000 - $35,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£16,500 - £29,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 73,000 - 129,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Patellar Tendon Autograft</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$3,800 - $4,800</td>
                    <td className="px-6 py-4 text-center text-gray-600">$22,000 - $38,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£18,000 - £31,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 81,000 - 140,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Allograft Reconstruction</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$4,500 - $5,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">$25,000 - $45,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£20,500 - £37,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 92,000 - 165,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Double-Bundle ACL</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$5,000 - $6,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$30,000 - $50,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£25,000 - £41,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 110,000 - 184,000</td>
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
                  <h3 className="text-xl font-bold text-gray-900">Fortis Hospital</h3>
                  <p className="text-sm text-gray-500">Delhi NCR, Mumbai</p>
                </div>
                <div className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-800">#1 Choice</div>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.9 (580+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 8,500+ orthopedic surgeries annually</li>
                <li>• Sports medicine specialists, Mako robotic system</li>
                <li>• Dr. Ramakant Kumar - 25+ years experience</li>
                <li>• JCI accredited, FIFA Medical Centre</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $3,800</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Apollo Hospitals</h3>
                  <p className="text-sm text-gray-500">Chennai, Bangalore, Hyderabad</p>
                </div>
                
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.9 (720+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 12,000+ knee surgeries/year</li>
                <li>• Arthroscopic ACL specialists</li>
                <li>• 50+ orthopedic surgeons, fellowship-trained</li>
                <li>• NABH & JCI accredited</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $3,500</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Manipal Hospitals</h3>
                  <p className="text-sm text-gray-500">Bangalore, Delhi</p>
                </div>
                
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.8 (450+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 6,000+ sports medicine procedures</li>
                <li>• Dedicated sports injury center</li>
                <li>• Team doctors for IPL cricket teams</li>
                <li>• ISO 9001:2015 certified</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $4,000</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={[{"question":"How much does ACL reconstruction cost in India?","answer":"ACL reconstruction costs $3,500-5,500 in India (hamstring graft $3,500-4,500, patellar tendon $3,800-4,800, allograft $4,500-5,500) vs $20,000-50,000 in USA. Includes surgery, anesthesia, hospital stay, brace, and 6-month physiotherapy program."},{"question":"What is success rate of ACL surgery in India?","answer":"ACL surgery success rate is 95-98% at top hospitals. 90% of athletes return to pre-injury sports level within 9-12 months. Re-tear rate is less than 5% with proper rehabilitation. Return to play protocols strictly followed."},{"question":"How long is ACL recovery?","answer":"Recovery timeline: Month 1 (full weight bearing with brace), Month 3 (light jogging possible), Month 6 (sport-specific training begins), Month 9-12 (clearance for competitive sports). Physical therapy 3-5 times per week for first 3 months."},{"question":"Which ACL graft is best?","answer":"Hamstring autograft is most popular (70% of cases) - faster recovery, less pain. Patellar tendon offers strongest fixation - best for high-level athletes. Allograft (donor tissue) - no harvest site pain, faster surgery. Choice depends on age, activity level, surgeon preference."}]} />

      {/* FAQ Section */}
      <section className="container mx-auto max-w-4xl px-4 py-16">
        <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">How much does ACL reconstruction cost in India?</h3>
              <p className="text-gray-600">ACL reconstruction costs $3,500-5,500 in India (hamstring graft $3,500-4,500, patellar tendon $3,800-4,800, allograft $4,500-5,500) vs $20,000-50,000 in USA. Includes surgery, anesthesia, hospital stay, brace, and 6-month physiotherapy program.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">What is success rate of ACL surgery in India?</h3>
              <p className="text-gray-600">ACL surgery success rate is 95-98% at top hospitals. 90% of athletes return to pre-injury sports level within 9-12 months. Re-tear rate is less than 5% with proper rehabilitation. Return to play protocols strictly followed.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">How long is ACL recovery?</h3>
              <p className="text-gray-600">Recovery timeline: Month 1 (full weight bearing with brace), Month 3 (light jogging possible), Month 6 (sport-specific training begins), Month 9-12 (clearance for competitive sports). Physical therapy 3-5 times per week for first 3 months.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Which ACL graft is best?</h3>
              <p className="text-gray-600">Hamstring autograft is most popular (70% of cases) - faster recovery, less pain. Patellar tendon offers strongest fixation - best for high-level athletes. Allograft (donor tissue) - no harvest site pain, faster surgery. Choice depends on age, activity level, surgeon preference.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      
      {/* Testimonials Section */}
      <Testimonials
        testimonials={TREATMENT_TESTIMONIALS['knee-replacement']}
        title="Success Stories from Our Acl Reconstruction Patients"
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
        <SocialShare title="ACL Reconstruction India: Cost, Best Surgeons 2025" description="ACL reconstruction in India costs $3,500-5,500 vs $20,000-50,000 in USA (85% savings). Arthroscopic surgery, 95% success rate. Sports medicine experts." />
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

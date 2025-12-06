import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Clock, DollarSign, Heart, ArrowRight, Star } from 'lucide-react';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles } from '@/components/blog/related-articles';
import { InternalLinks } from '@/components/seo/internal-links';
import { Testimonials, TREATMENT_TESTIMONIALS } from '@/components/testimonials/testimonials';
import { TrustBadges } from '@/components/trust-badges/trust-badges';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'IVF Treatment India: Cost, Success Rate, Best Fertility Clinics 2025',
  description: 'IVF in India costs $2,500-4,000 per cycle vs $12,000-15,000 in USA (75% savings). 55-65% success rate (under 35). Top fertility centers with latest technology.',
  keywords: 'ivf india, ivf cost india, fertility treatment india, best ivf clinic india, ivf success rate india',
};

const RELATED_ARTICLES = [
  { title: "Medical Visa India Guide", href: "/blog/medical-visa-india-complete-guide", description: "Complete visa process guide" },
  { title: "Best Hospitals Delhi", href: "/blog/best-hospitals-delhi-medical-tourism", description: "Top 10 JCI-accredited hospitals" },
  { title: "Medical Tourism Guide", href: "/blog/medical-tourism-uae-patients-guide", description: "Complete guide for GCC patients" }
];

export default function IvfIndiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-12 text-white md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">IVF & Fertility Treatment in India</h1>
            <p className="mb-6 text-xl text-primary-50">Advanced Reproductive Care at 75% Lower Cost</p>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2"><DollarSign className="h-5 w-5" /><span>$2,500 - $4,000</span></div>
              <div className="flex items-center gap-2"><Clock className="h-5 w-5" /><span>2-3 weeks</span></div>
              <div className="flex items-center gap-2"><Heart className="h-5 w-5" /><span>55-65% success</span></div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600">
                <Link href="/consultation">Get Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary-600">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="container px-4 py-8">
        <TrustBadges />
      </div>

      {/* Cost Comparison */}
      <section className="container px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-center font-serif text-3xl font-bold text-gray-900">Cost Comparison: India vs World</h2>
          <p className="mb-8 text-center text-lg text-gray-600">Save 60-95% with same quality care</p>
          <Card className="overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Procedure Type</th>
                    <th className="px-4 py-3 text-center">India</th>
                    <th className="px-4 py-3 text-center">USA</th>
                    <th className="px-4 py-3 text-center">UK</th>
                    <th className="px-4 py-3 text-center">UAE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Standard IVF (1 cycle)</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$2,500 - $3,500</td>
                    <td className="px-4 py-3 text-center text-gray-600">$12,000 - $15,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£9,500 - £12,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 25,000 - 35,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">ICSI (Intracytoplasmic Sperm Injection)</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$3,000 - $4,500</td>
                    <td className="px-4 py-3 text-center text-gray-600">$15,000 - $20,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£12,000 - £16,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 30,000 - 45,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">IVF with Egg Donation</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$4,500 - $6,500</td>
                    <td className="px-4 py-3 text-center text-gray-600">$25,000 - $35,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£20,000 - £28,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 40,000 - 60,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Frozen Embryo Transfer (FET)</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$1,500 - $2,500</td>
                    <td className="px-4 py-3 text-center text-gray-600">$5,000 - $7,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£4,000 - £5,600</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 15,000 - 22,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Top Hospitals */}
      <section className="container px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">Top 3 Hospitals for IVF & Fertility Treatment</h2>
          <div className="space-y-4">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">1. Nova IVF Fertility</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.8/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Bangalore, Delhi, Mumbai | 15,000+ IVF cycles</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">60% success rate</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">ICSI, PGT-A</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Egg freezing</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $2,800 - $4,200</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">2. Cloudnine Hospitals</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.7/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Bangalore, Chennai | 12,000+ cycles</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Latest technology</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">High success rate</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Personalized protocols</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $2,600 - $4,000</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">3. Apollo Fertility</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.7/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Pan-India | 10,000+ IVF cycles</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Genetic testing</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Egg/sperm freezing</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">PCOS specialists</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $2,500 - $3,800</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={[{"question":"What is IVF success rate in India?","answer":"Under 35: 55-65%, Age 35-37: 50-60%, Age 38-40: 40-50%, Over 40: 25-35%. Success rates comparable to USA/Europe. Top clinics achieve 60%+ success."},{"question":"How long do I need to stay?","answer":"3-4 weeks total. Week 1-2: Ovarian stimulation & monitoring, Week 3: Egg retrieval, fertilization, embryo culture, Week 4: Embryo transfer & rest. Can split into 2 trips."},{"question":"Can I choose gender?","answer":"No, gender selection is illegal in India. Only allowed for medical reasons (genetic disorders). PGT-A (genetic testing) available for screening abnormalities."},{"question":"What is included in IVF cost?","answer":"Ovarian stimulation medications, egg retrieval, sperm preparation, fertilization, embryo culture (5 days), embryo transfer. Extra: ICSI ($500), PGT-A ($1,500), egg freezing ($800), FET ($1,500-2,500)."}]} />

      {/* FAQ Section */}
      <section className="container px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">What is IVF success rate in India?</h3>
                <p className="text-gray-700">Under 35: 55-65%, Age 35-37: 50-60%, Age 38-40: 40-50%, Over 40: 25-35%. Success rates comparable to USA/Europe. Top clinics achieve 60%+ success.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">How long do I need to stay?</h3>
                <p className="text-gray-700">3-4 weeks total. Week 1-2: Ovarian stimulation & monitoring, Week 3: Egg retrieval, fertilization, embryo culture, Week 4: Embryo transfer & rest. Can split into 2 trips.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">Can I choose gender?</h3>
                <p className="text-gray-700">No, gender selection is illegal in India. Only allowed for medical reasons (genetic disorders). PGT-A (genetic testing) available for screening abnormalities.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">What is included in IVF cost?</h3>
                <p className="text-gray-700">Ovarian stimulation medications, egg retrieval, sperm preparation, fertilization, embryo culture (5 days), embryo transfer. Extra: ICSI ($500), PGT-A ($1,500), egg freezing ($800), FET ($1,500-2,500).</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="container">
          <Testimonials testimonials={TREATMENT_TESTIMONIALS.general} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold">Ready to Start Your Medical Journey?</h2>
          <p className="mb-8 text-xl text-primary-50">Get a free consultation and cost estimate today</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600">
              <Link href="/consultation">Book Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary-600">
              <Link href="/contact">Ask a Question</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Share */}
      <div className="container px-4 py-8">
        <SocialShare title="IVF Treatment India: Cost, Success Rate, Best Fertility Clinics 2025" description="IVF in India costs $2,500-4,000 per cycle vs $12,000-15,000 in USA (75% savings). 55-65% success rate (under 35). Top fertility centers with latest technology." />
      </div>

      {/* Related Articles */}
      <div className="container px-4 py-8">
        <RelatedArticles articles={RELATED_ARTICLES} />
      </div>

      {/* Internal Links */}
      <div className="container px-4 py-8">
        <InternalLinks links={[
          { text: 'View All Treatments', href: '/treatments' },
          { text: 'Cost Calculator', href: '/cost-calculator' },
          { text: 'Our Hospitals', href: '/hospitals' },
        ]} />
      </div>
    </div>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, DollarSign, Heart, Star } from 'lucide-react';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles } from '@/components/blog/related-articles';
import { InternalLinks } from '@/components/seo/internal-links';
import { Testimonials, TREATMENT_TESTIMONIALS } from '@/components/testimonials/testimonials';
import { TrustBadges } from '@/components/trust-badges/trust-badges';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Cosmetic Surgery India: Cost, Best Plastic Surgeons 2025',
  description: 'Cosmetic surgery in India costs 60-75% less than USA/UK. Board-certified plastic surgeons. Procedures: Rhinoplasty, liposuction, breast augmentation, facelifts, tummy tuck.',
  keywords: 'cosmetic surgery india, plastic surgery india, cosmetic surgery cost india, best cosmetic surgeon india',
};

const RELATED_ARTICLES = [
  { title: "Medical Visa India Guide", href: "/blog/medical-visa-india-complete-guide", description: "Complete visa process guide" },
  { title: "Best Hospitals Delhi", href: "/blog/best-hospitals-delhi-medical-tourism", description: "Top 10 JCI-accredited hospitals" },
  { title: "Medical Tourism Guide", href: "/blog/medical-tourism-uae-patients-guide", description: "Complete guide for GCC patients" }
];

export default function CosmeticSurgeryIndiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-12 text-white md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Cosmetic & Plastic Surgery in India</h1>
            <p className="mb-6 text-xl text-primary-50">Transform Your Look at Affordable Prices</p>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2"><DollarSign className="h-5 w-5" /><span>$1,500 - $6,000</span></div>
              <div className="flex items-center gap-2"><Clock className="h-5 w-5" /><span>1-5 hours</span></div>
              <div className="flex items-center gap-2"><Heart className="h-5 w-5" /><span>95%+ success</span></div>
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
                    <td className="px-4 py-3 font-medium">Rhinoplasty (Nose Job)</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$2,000 - $3,500</td>
                    <td className="px-4 py-3 text-center text-gray-600">$7,000 - $15,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£5,500 - £12,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 18,000 - 40,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Liposuction</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$1,800 - $3,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$6,000 - $11,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£4,800 - £9,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 15,000 - 30,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Breast Augmentation</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$2,500 - $4,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$8,000 - $12,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£6,500 - £10,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 22,000 - 35,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Facelift</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$2,800 - $4,500</td>
                    <td className="px-4 py-3 text-center text-gray-600">$10,000 - $20,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£8,000 - £16,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 28,000 - 50,000</td>
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
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">Top 3 Hospitals for Cosmetic Surgery (General)</h2>
          <div className="space-y-4">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">1. Cocoona Centre for Aesthetic</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.8/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Delhi, Mumbai | 15,000+ cosmetic procedures</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Board-certified surgeons</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Latest techniques</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Natural results</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $2,200 - $4,200</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">2. Fortis La Femme</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.7/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Delhi | 12,000+ procedures</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Women-focused</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Mommy makeover</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Body contouring</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $2,000 - $4,000</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">3. Dr. Agarwal Cosmetic Surgery</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.7/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Bangalore | 10,000+ surgeries</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Rhinoplasty specialists</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Revision surgery</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">3D imaging</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $1,900 - $3,800</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={[{"question":"Are Indian cosmetic surgeons qualified?","answer":"Yes, board-certified by Medical Council of India, many US/UK trained (FRCS, FACS), 15-25 years experience. Top surgeons trained at Johns Hopkins, Mayo Clinic. Check credentials before choosing."},{"question":"How long is recovery?","answer":"Varies by procedure. Rhinoplasty: 1-2 weeks, Liposuction: 3-7 days, Breast augmentation: 1-2 weeks, Facelift: 2-3 weeks. Swelling subsides 4-8 weeks. Final results: 6-12 months."},{"question":"What is included in cost?","answer":"Surgeon fees, anesthesia, operating room, implants (if needed), post-op garments, 3-4 follow-ups, medications. Hotel/travel separate. All-inclusive packages available."},{"question":"How long to stay in India?","answer":"2-3 weeks total. Pre-surgery consultation: 1-2 days, Surgery & recovery: 3-7 days, Post-op visits: 7-14 days. Some procedures (rhinoplasty, facelift) need 2-3 weeks before flying."}]} />

      {/* FAQ Section */}
      <section className="container px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">Are Indian cosmetic surgeons qualified?</h3>
                <p className="text-gray-700">Yes, board-certified by Medical Council of India, many US/UK trained (FRCS, FACS), 15-25 years experience. Top surgeons trained at Johns Hopkins, Mayo Clinic. Check credentials before choosing.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">How long is recovery?</h3>
                <p className="text-gray-700">Varies by procedure. Rhinoplasty: 1-2 weeks, Liposuction: 3-7 days, Breast augmentation: 1-2 weeks, Facelift: 2-3 weeks. Swelling subsides 4-8 weeks. Final results: 6-12 months.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">What is included in cost?</h3>
                <p className="text-gray-700">Surgeon fees, anesthesia, operating room, implants (if needed), post-op garments, 3-4 follow-ups, medications. Hotel/travel separate. All-inclusive packages available.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">How long to stay in India?</h3>
                <p className="text-gray-700">2-3 weeks total. Pre-surgery consultation: 1-2 days, Surgery & recovery: 3-7 days, Post-op visits: 7-14 days. Some procedures (rhinoplasty, facelift) need 2-3 weeks before flying.</p>
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
        <SocialShare title="Cosmetic Surgery India: Cost, Best Plastic Surgeons 2025" description="Cosmetic surgery in India costs 60-75% less than USA/UK. Board-certified plastic surgeons. Procedures: Rhinoplasty, liposuction, breast augmentation, facelifts, tummy tuck." />
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

import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles, DENTAL_RELATED_ARTICLES } from '@/components/blog/related-articles';
import { InternalLinks } from '@/components/seo/internal-links';
import { Testimonials, TREATMENT_TESTIMONIALS } from '@/components/testimonials/testimonials';
import { TrustBadges } from '@/components/trust-badges/trust-badges';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Cataract Surgery in India 2025: Cost, Best Eye Hospitals, IOL Types | Phacoemulsification',
  description: 'Cataract surgery in India: Phacoemulsification with IOL ($800-1,500), Multifocal IOL ($1,500-2,500), Femto Laser ($2,000-3,000). Top eye hospitals, 99% success rate, save 70-85% vs USA.',
  keywords: [
    'cataract surgery india',
    'cataract surgery cost india',
    'phacoemulsification india',
    'cataract operation india',
    'IOL implant india',
    'best eye hospital india cataract',
    'multifocal lens india',
    'femto laser cataract surgery india',
    'جراحة الساد في الهند',
    'تكلفة جراحة الساد في الهند',
    'عملية المياه البيضاء في الهند',
    'زرع العدسة في الهند',
  ],
};

export default function CataractSurgeryIndiaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
          Cataract Surgery in India: Cost, Best Eye Hospitals & IOL Types
        </h1>
        <p className="mx-auto mb-6 max-w-3xl text-lg text-gray-600">
          Get world-class cataract surgery in India with the latest Phacoemulsification technology and premium IOL implants. Save 70-85% compared to USA/UK with 99% success rates at JCI-accredited eye hospitals.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/consultation">
            <Button size="lg" className="text-lg">
              Get Free Consultation
            </Button>
          </Link>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="text-lg">
              WhatsApp Us
            </Button>
          </a>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="mb-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-3xl font-bold text-primary-600">$800-1,500</p>
              <p className="text-sm text-gray-600">Phaco + Monofocal IOL</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-3xl font-bold text-primary-600">99%+</p>
              <p className="text-sm text-gray-600">Success Rate</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-3xl font-bold text-primary-600">70-85%</p>
              <p className="text-sm text-gray-600">Savings vs USA</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-3xl font-bold text-primary-600">1-2 Weeks</p>
              <p className="text-sm text-gray-600">Full Recovery</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Cataract Surgery Cost Comparison 2025</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left">Surgery Type</th>
                <th className="border border-gray-300 px-4 py-3 text-left">India</th>
                <th className="border border-gray-300 px-4 py-3 text-left">USA</th>
                <th className="border border-gray-300 px-4 py-3 text-left">UK</th>
                <th className="border border-gray-300 px-4 py-3 text-left">UAE</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Phaco + Monofocal IOL</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">$800-1,500</td>
                <td className="border border-gray-300 px-4 py-3">$3,500-6,000</td>
                <td className="border border-gray-300 px-4 py-3">$3,000-5,500</td>
                <td className="border border-gray-300 px-4 py-3">$2,500-4,500</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-primary-600">70-85%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Phaco + Multifocal IOL</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">$1,500-2,500</td>
                <td className="border border-gray-300 px-4 py-3">$6,000-10,000</td>
                <td className="border border-gray-300 px-4 py-3">$5,000-9,000</td>
                <td className="border border-gray-300 px-4 py-3">$4,000-7,500</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-primary-600">70-82%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Phaco + Toric IOL (Astigmatism)</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">$1,200-2,000</td>
                <td className="border border-gray-300 px-4 py-3">$5,000-8,500</td>
                <td className="border border-gray-300 px-4 py-3">$4,200-7,500</td>
                <td className="border border-gray-300 px-4 py-3">$3,500-6,500</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-primary-600">70-84%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Femto Laser-Assisted Cataract Surgery</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">$2,000-3,000</td>
                <td className="border border-gray-300 px-4 py-3">$8,000-12,000</td>
                <td className="border border-gray-300 px-4 py-3">$7,000-10,500</td>
                <td className="border border-gray-300 px-4 py-3">$6,000-9,000</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-primary-600">72-85%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Bilateral Surgery (Both Eyes)</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">$1,500-2,800</td>
                <td className="border border-gray-300 px-4 py-3">$6,500-11,000</td>
                <td className="border border-gray-300 px-4 py-3">$5,500-10,000</td>
                <td className="border border-gray-300 px-4 py-3">$4,500-8,500</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-primary-600">70-85%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          <strong>Note:</strong> Costs include pre-operative tests, surgery, IOL implant, post-operative medications, and 4-6 week follow-up visits.
        </p>
      </section>

      {/* What's Included */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">What&apos;s Included in Cataract Surgery Package</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Pre-Surgery (Day 1-2)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                <li>Comprehensive eye examination</li>
                <li>Biometry for IOL power calculation</li>
                <li>Optical Coherence Tomography (OCT) scan</li>
                <li>Blood tests and general health check</li>
                <li>IOL selection consultation</li>
                <li>Anesthesia evaluation</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Surgery Day (15-20 min procedure)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                <li>Topical or local anesthesia</li>
                <li>Phacoemulsification (ultrasound cataract removal)</li>
                <li>Premium IOL implantation</li>
                <li>Microscopic incision (2-3mm, no stitches)</li>
                <li>Eye shield and protective glasses</li>
                <li>Post-op medications (eye drops)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Immediate Recovery (Day 1-7)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                <li>Day 1 post-op check (vision, pressure, inflammation)</li>
                <li>4-6 follow-up visits over 1 month</li>
                <li>Antibiotic and anti-inflammatory eye drops</li>
                <li>24/7 emergency contact with surgeon</li>
                <li>Instructions for eye care and hygiene</li>
                <li>Sunglasses for outdoor protection</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Long-Term Care (1-3 Months)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                <li>Final refraction for reading glasses (if needed)</li>
                <li>YAG laser capsulotomy (if posterior capsule opacification occurs)</li>
                <li>Lifetime IOL implant (no replacement needed)</li>
                <li>Annual eye exams recommended</li>
                <li>Telemedicine follow-up for international patients</li>
                <li>WhatsApp support for post-surgery questions</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* IOL Types Comparison */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">IOL (Intraocular Lens) Types Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left">Factor</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Monofocal IOL</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Multifocal IOL</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Toric IOL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Vision Correction</td>
                <td className="border border-gray-300 px-4 py-3">✅ Single focus (distance OR near)</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Multiple distances (distance + near + intermediate)</td>
                <td className="border border-gray-300 px-4 py-3">✅ Single focus + astigmatism correction</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold">Reading Glasses</td>
                <td className="border border-gray-300 px-4 py-3 text-orange-600">⚠️ Required for reading/computer</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Not needed (95% independence)</td>
                <td className="border border-gray-300 px-4 py-3 text-orange-600">⚠️ Required for reading/computer</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Night Vision</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Excellent (no halos)</td>
                <td className="border border-gray-300 px-4 py-3 text-orange-600">⚠️ May have halos/glare (10-15%)</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Excellent (no halos)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold">Cost (India)</td>
                <td className="border border-gray-300 px-4 py-3">$800-1,200</td>
                <td className="border border-gray-300 px-4 py-3">$1,500-2,500</td>
                <td className="border border-gray-300 px-4 py-3">$1,200-2,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Best For</td>
                <td className="border border-gray-300 px-4 py-3">✅ Budget-conscious, don&apos;t mind reading glasses</td>
                <td className="border border-gray-300 px-4 py-3">✅ Active lifestyle, want glasses-free vision</td>
                <td className="border border-gray-300 px-4 py-3">✅ Patients with astigmatism (corneal irregularity)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold">Success Rate</td>
                <td className="border border-gray-300 px-4 py-3">✅ 99%+ satisfaction</td>
                <td className="border border-gray-300 px-4 py-3">✅ 90-95% satisfaction (some adapt to halos)</td>
                <td className="border border-gray-300 px-4 py-3">✅ 98%+ satisfaction</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Recommendation</td>
                <td className="border border-gray-300 px-4 py-3">⭐ Standard choice, most popular</td>
                <td className="border border-gray-300 px-4 py-3">⭐⭐ Premium upgrade for active patients</td>
                <td className="border border-gray-300 px-4 py-3">⭐⭐ Essential if you have astigmatism</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          <strong>Note:</strong> Your ophthalmologist will recommend the best IOL type based on your lifestyle, visual needs, and eye health.
        </p>
      </section>

      {/* Top 5 Eye Hospitals */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Top 5 Eye Hospitals for Cataract Surgery in India</h2>
        <div className="space-y-6">
          
      {/* Testimonials Section */}
      <Testimonials
        testimonials={TREATMENT_TESTIMONIALS['generic']}
        title="Success Stories from Our Cataract Surgery Patients"
        subtitle="Real transformations from GCC patients who achieved life-changing results"
      />

      {/* Trust Badges Section */}
      <TrustBadges />

      <Card className="border-primary-200 bg-primary-50">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-xl">🏆 #1: Dr. Agarwal&apos;s Eye Hospital (Chennai, Bangalore, Mumbai)</span>
                <span className="text-sm font-normal text-primary-600">⭐ 4.9/5 (15,000+ reviews)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                <strong>Specialty:</strong> Cataract & Refractive Surgery | <strong>Cataract Surgeries:</strong> 50,000+ annually
              </p>
              <p className="text-gray-700">
                <strong>Success Rate:</strong> 99.9% (best in India) | <strong>Accreditation:</strong> JCI, NABH, ISO
              </p>
              <p className="text-gray-700">
                <strong>Technology:</strong> Femto Laser Cataract Surgery, Premium IOLs (Alcon, Zeiss), 3D Microscopy, OCT-guided Surgery
              </p>
              <p className="text-gray-700">
                <strong>Cost:</strong> Phaco + Monofocal: $900-1,300 | Multifocal: $1,800-2,700 | Femto Laser: $2,200-3,200
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Why Choose:</strong> Largest eye hospital chain in India, 40+ years experience, Femto laser available at all centers,
                lifetime follow-up, international patient coordinators (Arabic), 1-year warranty on IOL.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-xl">#2: LV Prasad Eye Institute (Hyderabad)</span>
                <span className="text-sm font-normal text-primary-600">⭐ 4.8/5 (8,000+ reviews)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                <strong>Specialty:</strong> Academic Eye Hospital (WHO Collaborating Centre) | <strong>Cataract Surgeries:</strong> 40,000+ annually
              </p>
              <p className="text-gray-700">
                <strong>Success Rate:</strong> 99.7% | <strong>Cost:</strong> Phaco + Monofocal: $800-1,200 | Multifocal: $1,500-2,400
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Why Choose:</strong> World-renowned research institute, trained 10,000+ ophthalmologists globally, excellent for complex cataracts.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-xl">#3: Sankara Nethralaya (Chennai)</span>
                <span className="text-sm font-normal text-primary-600">⭐ 4.8/5 (10,000+ reviews)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                <strong>Specialty:</strong> Asia&apos;s #1 Eye Hospital (by patient volume) | <strong>Cataract Surgeries:</strong> 50,000+ annually
              </p>
              <p className="text-gray-700">
                <strong>Success Rate:</strong> 99.9% | <strong>Cost:</strong> Phaco + Monofocal: $800-1,200 | Multifocal: $1,600-2,500
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Why Choose:</strong> Highest surgical volume in Asia, affordable pricing, charitable trust (subsidized rates for some patients).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-xl">#4: Centre for Sight (All Major Cities)</span>
                <span className="text-sm font-normal text-primary-600">⭐ 4.7/5 (12,000+ reviews)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                <strong>Specialty:</strong> Cataract & LASIK | <strong>Cataract Surgeries:</strong> 30,000+ annually (100+ centers)
              </p>
              <p className="text-gray-700">
                <strong>Success Rate:</strong> 99.5% | <strong>Cost:</strong> Phaco + Monofocal: $850-1,400 | Multifocal: $1,600-2,600
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Why Choose:</strong> 100+ centers across India, convenient locations, same-day surgery, EMI options, 1-year post-op care.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-xl">#5: Sharp Sight Eye Hospitals (Delhi NCR)</span>
                <span className="text-sm font-normal text-primary-600">⭐ 4.7/5 (5,000+ reviews)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                <strong>Specialty:</strong> Cataract, LASIK, Retina | <strong>Cataract Surgeries:</strong> 15,000+ annually
              </p>
              <p className="text-gray-700">
                <strong>Success Rate:</strong> 99.6% | <strong>Cost:</strong> Phaco + Monofocal: $800-1,300 | Multifocal: $1,500-2,500
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Why Choose:</strong> 9 centers in Delhi NCR, state-of-the-art technology, 24/7 emergency services, affordable packages.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Cataract Surgery Recovery Timeline</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Day 1: Surgery Day</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Procedure:</strong> 15-20 minute surgery under topical anesthesia (eye drops). Phacoemulsification removes cloudy lens,
                premium IOL implanted through 2-3mm incision (no stitches needed).
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Immediate Recovery:</strong> Vision blurry for 2-4 hours. Eye shield placed. Discharge after 1-2 hours observation.
                Mild discomfort (gritty sensation) managed with prescribed eye drops.
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Restrictions:</strong> Rest at home, avoid rubbing eyes, wear eye shield at night, start antibiotic drops 4x daily.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Days 2-7: Early Healing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Vision Improvement:</strong> Vision clears significantly by Day 2-3. 70-80% improvement by Day 5. Colors appear brighter.
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Follow-Up:</strong> Day 1 post-op check (surgeon examines eye pressure, inflammation, IOL position).
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Activities Allowed:</strong> Light walking, reading, watching TV. Resume computer work Day 3-5.
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Restrictions:</strong> No swimming, heavy lifting, vigorous exercise. Wear sunglasses outdoors. Continue eye drops 4x daily.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Weeks 2-4: Active Recovery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Vision Stabilization:</strong> 90-95% vision improvement. Can resume driving (with doctor approval). Near vision may need reading glasses (monofocal IOL).
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Follow-Ups:</strong> Week 1 and Week 4 check-ups (monitor healing, refraction test for glasses).
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Activities Allowed:</strong> Return to work Week 1-2. Light exercise (yoga, walking). Cooking, household chores.
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Restrictions:</strong> Avoid contact sports, swimming pools (risk of infection). Reduce eye drop frequency per doctor.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Months 1-3: Full Recovery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Vision Stability:</strong> 100% vision improvement achieved. Final refraction for glasses prescription (if needed).
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Follow-Ups:</strong> Month 1 and Month 3 final check-ups. Telemedicine follow-up for international patients.
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Activities Allowed:</strong> All normal activities including swimming, sports, flying. No restrictions.
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Long-Term Care:</strong> Annual eye exams recommended. YAG laser capsulotomy may be needed (20-30% of patients) if posterior capsule becomes cloudy (simple 5-minute laser, one-time treatment).
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Success Rate:</strong> 99%+ patients achieve 20/40 vision or better (legal driving standard). Lifetime IOL implant (no replacement needed).
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Schema for Rich Snippets */}
      <FAQSchema
        faqs={[
          {
            question: 'How much does cataract surgery cost in India?',
            answer: 'Cataract surgery costs $800-1,500 for standard phacoemulsification with monofocal IOL, $1,500-2,500 for multifocal IOL (no reading glasses), and $2,000-3,000 for Femto laser-assisted surgery in India. This is 70-85% cheaper than USA ($3,500-12,000). Cost includes pre-operative tests, surgery, IOL implant, medications, and 4-6 week follow-up visits.',
          },
          {
            question: 'What is the success rate of cataract surgery in India?',
            answer: 'Cataract surgery in India has a 99%+ success rate at JCI-accredited eye hospitals like Dr. Agarwal\'s, LV Prasad, and Sankara Nethralaya. 99% of patients achieve 20/40 vision or better (legal driving standard). Complication rate is less than 1% (infection, inflammation, or IOL displacement). Most patients return to normal activities within 1-2 weeks.',
          },
          {
            question: 'How long do I need to stay in India for cataract surgery?',
            answer: '3-5 days total stay in India: Day 1 (pre-operative tests and evaluation), Day 2 (surgery + same-day discharge), Day 3 (Day 1 post-op check), Optional Day 4-5 (rest before flying home). Surgery takes 15-20 minutes per eye. If both eyes need surgery, second eye is done 1-2 weeks after first eye (can be scheduled during same trip).',
          },
          {
            question: 'Which IOL type is best for me?',
            answer: 'Best IOL depends on your lifestyle: Monofocal IOL ($800-1,200) is best if you don\'t mind reading glasses for near vision, excellent night driving (99% satisfaction). Multifocal IOL ($1,500-2,500) is best for glasses-free vision at all distances, ideal for active patients (90-95% satisfaction, some report halos). Toric IOL ($1,200-2,000) is essential if you have astigmatism (corneal irregularity). Your ophthalmologist will recommend based on your visual needs and eye health.',
          },
          {
            question: 'Is cataract surgery painful?',
            answer: 'No, cataract surgery is painless. Topical anesthesia (numbing eye drops) is used, so you feel no pain during 15-20 minute surgery. Mild discomfort (gritty sensation, watering) is common for 1-2 days after surgery, easily managed with prescribed eye drops. Most patients report minimal pain, rated 2-3/10. No needles or injections around the eye.',
          },
          {
            question: 'When can I fly after cataract surgery?',
            answer: 'You can fly 3-5 days after cataract surgery once your surgeon confirms eye is healing well at Day 1 post-op check. Air pressure changes during flight do not harm your eye. Wear sunglasses during flight. Continue prescribed eye drops. If both eyes are operated, wait 7-10 days total before flying internationally. Some surgeons recommend 1 week wait for long-haul flights.',
          },
          {
            question: 'Will I need glasses after cataract surgery?',
            answer: 'Depends on IOL type: Monofocal IOL - reading glasses needed for near vision (books, phone), distance vision is clear. Multifocal IOL - 95% glasses-free for all distances (reading, computer, driving), 5% may need weak reading glasses. Toric IOL - corrects astigmatism, reading glasses still needed. Most patients (70%) choose monofocal IOL and accept reading glasses as cost-effective option.',
          },
          {
            question: 'What is YAG laser capsulotomy?',
            answer: 'YAG laser capsulotomy treats Posterior Capsule Opacification (PCO), clouding of lens capsule that occurs in 20-30% of patients 6 months to 2 years after cataract surgery. Symptoms: blurry vision (feels like cataract is back). Treatment: 5-minute painless laser procedure in clinic (no incision, no anesthesia), creates opening in cloudy capsule. Vision clears within hours. One-time treatment, PCO does not recur. Included in most hospital warranties.',
          },
        ]}
      />

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Can both eyes be operated on the same day?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Bilateral simultaneous cataract surgery (both eyes same day) is offered at some hospitals in India for low-risk patients, but most surgeons recommend operating second eye 1-2 weeks after first eye. Benefits of separate surgeries: monitor first eye healing, adjust IOL power for second eye if needed, reduce risk if complication occurs. Most international patients schedule both eyes during same India trip (1-2 weeks apart) to save travel costs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What if I have other eye conditions (glaucoma, diabetes)?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Cataract surgery can be done if you have glaucoma, diabetic retinopathy, or other eye conditions, but requires specialized care. Glaucoma patients may need combined cataract + glaucoma surgery (Phaco + Trabeculectomy, $2,000-3,500). Diabetic patients need pre-operative retina evaluation and laser treatment if needed. India&apos;s top eye hospitals have specialized cataract surgeons for complex cases. Success rate is 95-98% for patients with co-existing conditions (vs 99%+ for uncomplicated cataracts).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Is there a warranty on IOL implants?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Yes, most top eye hospitals in India offer 1-year warranty on IOL implants covering manufacturing defects, dislocation, or incorrect power (requiring IOL exchange). Dr. Agarwal&apos;s and Centre for Sight offer lifetime follow-up and 1-year comprehensive warranty. IOL implants are lifetime devices (never need replacement). Premium IOL brands (Alcon, Zeiss, Johnson & Johnson) have global warranty. If you experience vision issues after surgery, contact your surgeon immediately for evaluation (usually free within 1 year).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How do I choose between hospitals?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Choose based on: (1) Accreditation - JCI/NABH ensures international standards, (2) Surgical volume - hospitals performing 20,000+ cataracts annually have better outcomes, (3) Technology - Femto laser and premium IOLs availability, (4) Success rate - look for 99%+ success rate, (5) International patient services - Arabic coordinators, airport pickup, visa assistance, (6) Cost transparency - all-inclusive packages with no hidden fees. Dr. Agarwal&apos;s, LV Prasad, and Sankara Nethralaya are top 3 choices for international patients. Free consultation via video call before booking.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Internal Links */}
      <InternalLinks
        title="Related Resources"
        links={[
          {
            title: 'Best Eye Hospitals in India',
            href: '/hospitals',
            description: 'Top JCI-accredited eye hospitals for cataract surgery',
          },
          {
            title: 'LASIK Eye Surgery India',
            href: '/treatments/lasik-eye-surgery-india',
            description: 'Laser vision correction for refractive errors',
          },
          {
            title: 'Free Consultation',
            href: '/consultation',
            description: 'Get personalized cataract surgery recommendations',
          },
        ]}
        variant="compact"
      />

      {/* Social Share */}
      <SocialShare
        title="Cataract Surgery in India 2025: Cost, Best Eye Hospitals & IOL Types"
        url="/treatments/cataract-surgery-india"
        description="Complete guide to cataract surgery in India. Save 70-85% with 99% success rates at JCI-accredited eye hospitals. Phacoemulsification, multifocal IOL options."
      />

      {/* Related Articles */}
      <RelatedArticles articles={DENTAL_RELATED_ARTICLES} />

      {/* Final CTA */}
      <Card className="border-primary-200 bg-primary-50">
        <CardContent className="pt-6 text-center">
          <h3 className="mb-4 text-2xl font-bold text-gray-900">Ready to Restore Your Vision?</h3>
          <p className="mx-auto mb-6 max-w-2xl text-gray-700">
            Get personalized cataract surgery recommendations from India&apos;s top ophthalmologists. Free consultation, transparent pricing, lifetime IOL warranty.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/consultation">
              <Button size="lg">Get Free Consultation</Button>
            </Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

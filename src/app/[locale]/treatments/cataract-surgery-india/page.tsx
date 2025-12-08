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

          <Card>
            <CardHeader>
              <CardTitle>What is the minimum age for cataract surgery?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Cataract surgery can be performed at any age - from newborns to 100+ years old.</strong> Age considerations:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Pediatric cataracts (birth-18 years):</strong> Congenital cataracts operated in first 6-8 weeks of life (critical for visual development, prevents amblyopia/lazy eye). Childhood cataracts (trauma, genetic) operated as soon as diagnosed. Requires specialized pediatric ophthalmologist. Excellent success rate with early intervention.</li>
                <li><strong>Young adults (18-40 years):</strong> Rare unless trauma, steroid use, diabetes, genetic. Standard phacoemulsification with IOL. Success rate 99%+. May choose multifocal IOL for active lifestyle (no reading glasses).</li>
                <li><strong>Adults (40-70 years):</strong> Most common age group for cataracts (90% of patients). Ideal treatment candidates. Quick recovery, return to work in 1-2 weeks. Success rate 99%+.</li>
                <li><strong>Elderly (70-90 years):</strong> Excellent candidates if healthy. Age not a barrier. Success rate same as younger patients. May need medical clearance if heart disease, diabetes. Recovery slightly slower but still excellent outcomes.</li>
                <li><strong>Very elderly (90+ years):</strong> Oldest cataract patient at Dr. Agarwal&apos;s: 104 years old (successful surgery). Treatment decision based on overall health and quality of life improvement. Anesthesia risk assessment required. Success rate 95-98% (slightly lower due to co-existing conditions).</li>
              </ul>
              <p className="text-gray-700">
                <strong>GCC patients note:</strong> No age restrictions for international patients. Flying home safe at any age 3-5 days post-surgery.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Does smoking affect cataract surgery and recovery?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Smoking increases cataract formation rate and slows healing after surgery, but surgery can still be performed successfully.</strong> Impact and recommendations:
              </p>
              <p className="mb-3 text-gray-700"><strong>How smoking affects cataracts and surgery:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Accelerates cataract formation:</strong> Smokers develop cataracts 2-3 years earlier than non-smokers (toxins damage lens proteins)</li>
                <li><strong>Slows wound healing:</strong> Reduced oxygen to corneal incision (healing delayed 30-40%, 2-3mm incision takes 5-7 days vs 3-5 days for non-smokers)</li>
                <li><strong>Higher inflammation risk:</strong> 1.5-2× higher risk of post-op inflammation (more eye drops needed, longer recovery)</li>
                <li><strong>Dry eye worsening:</strong> Smoking worsens dry eye symptoms (gritty feeling, watering) common after cataract surgery</li>
                <li><strong>Increased infection risk:</strong> Slightly higher (0.5% vs 0.1% for non-smokers) but still very low</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Smoking timeline for surgery:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>2-4 weeks before:</strong> Quit or reduce to &lt;5 cigarettes/day (improves wound healing capacity, reduces inflammation)</li>
                <li><strong>Week 1-2 after:</strong> NO smoking (critical corneal healing period, incision sealing itself)</li>
                <li><strong>Weeks 3-4 after:</strong> Avoid smoking if possible (healing continues, still vulnerable to infection)</li>
                <li><strong>Long-term:</strong> Quit permanently to prevent cataracts in second eye or secondary cataracts (PCO)</li>
              </ul>
              <p className="text-gray-700">
                <strong>Success rates:</strong> Non-smokers: 99.5% success. Smokers who quit 4 weeks before: 98.5% success. Current smokers: 97% success (higher inflammation, slower healing but still excellent). Smoking does NOT disqualify you from surgery.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>When can I exercise, lift weights, and swim after cataract surgery?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Light activities immediately, but strenuous exercise delayed 2-4 weeks to prevent increased eye pressure.</strong> Detailed timeline:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Day 1 (surgery day):</strong> Rest at home (lie down or sit, watch TV, read with operated eye). Walking around house OK. NO bending below waist (increases eye pressure), heavy lifting, exercise, swimming.</li>
                <li><strong>Days 2-7:</strong> Light walking encouraged (20-30 minutes, fresh air). Light household chores OK (cooking, washing dishes). Resume computer work Day 3-5. Avoid: Bending, heavy lifting &gt;5kg, running, yoga, gym, swimming (infection risk).</li>
                <li><strong>Weeks 2-3:</strong> Gradual activity resumption. Allowed: Brisk walking, light yoga (no inversions/headstands), stationary cycling, light weights &lt;5kg. Avoid: Running, heavy lifting, swimming, contact sports, hot yoga.</li>
                <li><strong>Week 3-4:</strong> Resume normal exercise with doctor clearance. Allowed: Running, gym, moderate weightlifting (&lt;20kg), outdoor cycling. Avoid: Heavy squats/deadlifts (increases intraocular pressure), swimming pools (wait Week 4-6), contact sports (boxing, basketball - risk of eye trauma).</li>
                <li><strong>Week 4-6:</strong> Swimming pools allowed (chlorine safe, 2-3mm incision fully healed). Heavy weightlifting allowed (&gt;20kg). Contact sports allowed with protective eyewear.</li>
                <li><strong>Month 2+:</strong> All activities unrestricted (eye fully healed, IOL stable)</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Exercise-specific guidelines:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Walking:</strong> Day 1 onwards (encouraged for circulation)</li>
                <li><strong>Running/jogging:</strong> Week 3-4 (bouncing movement safe once incision healed)</li>
                <li><strong>Yoga:</strong> Week 2 for gentle poses, Week 4 for inversions (downward dog, headstand increase eye pressure temporarily)</li>
                <li><strong>Gym/weights:</strong> Week 2 for light (&lt;5kg), Week 3-4 for moderate, Week 4-6 for heavy lifting</li>
                <li><strong>Swimming:</strong> Week 4-6 (wait for complete incision seal, avoid infection). Ocean swimming OK Week 3-4 (saltwater less risky than chlorine).</li>
                <li><strong>Golf/tennis:</strong> Week 3-4 (eye safe from sudden movements)</li>
                <li><strong>Contact sports:</strong> Week 6+ with protective eyewear (risk of trauma to eye)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>When can I drive after cataract surgery?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Most patients can drive 2-7 days after surgery once vision clears and surgeon approves.</strong> Driving timeline and safety:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Day 1 (surgery day):</strong> NO driving (vision blurry, pupil dilated, mild sedation if oral medication given). Arrange pickup from hospital. Rest at home.</li>
                <li><strong>Days 2-3:</strong> Vision improving but may still be blurry (70-80% clear). NO driving yet (depth perception affected if only one eye operated, glare sensitivity high). Use taxi, family driver, or Uber.</li>
                <li><strong>Days 3-7:</strong> Vision clears significantly (90-95% improvement). Can drive Day 3-7 if: (1) Day 1 post-op check shows good healing, (2) Vision meets legal standard (20/40 or better), (3) No double vision or significant glare, (4) Surgeon gives written clearance. Start with short daytime drives only (avoid night driving first week).</li>
                <li><strong>Week 1-2:</strong> Most patients driving comfortably. Night driving allowed if no halos/glare (monofocal IOL patients usually fine, multifocal IOL patients may experience halos for 2-4 weeks). Long-distance driving OK with breaks.</li>
                <li><strong>Week 2-4:</strong> All driving unrestricted if vision stable and surgeon approves. Night vision excellent (monofocal IOL) or adapted to halos (multifocal IOL).</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>GCC patients (international travel):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Driving home from airport:</strong> Wait 5-7 days after surgery before flying + driving home. Have someone pick you up from airport first few days. Arrange taxi/Uber first week.</li>
                <li><strong>Driving in unfamiliar roads:</strong> Wait until Week 2 (depth perception fully adapted to new IOL, confident in vision).</li>
                <li><strong>Desert/bright sun driving:</strong> Wear sunglasses (UV protection mandatory first 3 months). Glare sensitivity higher first 2-4 weeks.</li>
              </ul>
              <p className="text-gray-700">
                <strong>Legal requirements:</strong> Most countries require 20/40 vision (6/12 in metric) in at least one eye for driving license. 99% of cataract patients achieve this or better. Bring surgeon&apos;s clearance letter if stopped by traffic police first few weeks.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Can I watch TV, use phone, and work on computer after cataract surgery?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Yes! Screen time does NOT harm your eyes after cataract surgery. Start with short sessions and increase gradually.</strong> Screen time guidelines:
              </p>
              <p className="mb-3 text-gray-700"><strong>Day 1 (surgery day):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Watching TV:</strong> YES, safe and encouraged (2-4 hours after surgery once home). Vision will be blurry first 4-6 hours (normal, wear eye shield if concerned). Keep brightness low, sit 6-8 feet away. Watching TV does NOT delay healing or damage IOL.</li>
                <li><strong>Phone use:</strong> YES, safe (texting, calls, social media). Hold phone 12-15 inches away. Vision blurry first 4-6 hours. Use phone with non-operated eye or wait till Day 2 for clearer vision.</li>
                <li><strong>Computer work:</strong> WAIT until Day 3-5 (extended focusing tires eye, may cause headache). Short computer use OK Day 1-2 if urgent (emails), but avoid &gt;30 minutes.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Days 2-7:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Watching TV:</strong> Unlimited (no harm to healing eye). Vision clears significantly Day 2-3. Enjoy your improved color vision (colors appear brighter after cataract removal).</li>
                <li><strong>Phone use:</strong> Unlimited (safe for healing eye). Vision clear enough for comfortable reading Day 2-3. Use adequate lighting to reduce eye strain.</li>
                <li><strong>Computer work:</strong> Resume Day 3-5 (start with 2-3 hours, increase gradually). Take breaks every 30 minutes (20-20-20 rule: every 20 minutes, look 20 feet away for 20 seconds). Use lubricating eye drops if dry eye (screen time reduces blink rate).</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Week 1-2:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>All screen time:</strong> Unrestricted (TV, phone, computer all safe). Return to normal work schedule if desk job. Vision stabilizes 90-95% by Week 1.</li>
                <li><strong>Reading print books:</strong> Easier than before surgery (better contrast, brighter colors). May need reading glasses if monofocal IOL chosen (distance vision clear, near vision needs glasses). Multifocal IOL patients usually glasses-free for reading.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Common myths debunked:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Myth:</strong> Watching TV delays healing. <strong>Truth:</strong> No evidence. Modern cataract surgery (2-3mm incision, no stitches) heals independently of eye movement.</li>
                <li><strong>Myth:</strong> Screen light damages new IOL. <strong>Truth:</strong> IOL is inert plastic/silicone (not affected by light, TV, phone, sun). UV-blocking IOLs protect retina.</li>
                <li><strong>Myth:</strong> Reading/screens increase eye pressure. <strong>Truth:</strong> Eye pressure affected by bending, heavy lifting, straining - NOT by looking at screens.</li>
              </ul>
              <p className="text-gray-700">
                <strong>Bottom line:</strong> Screen time safe from Day 1. Start slowly first 2-3 days (vision blurry), then unlimited as vision clears. Use lubricating drops if dry eye. Enjoy your improved vision!
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What&apos;s included in the surgery cost? Any hidden fees?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Reputable hospitals offer all-inclusive packages with no hidden fees.</strong> Cost breakdown and what to expect:
              </p>
              <p className="mb-3 text-gray-700"><strong>What&apos;s included in standard package ($800-1,500 for monofocal IOL):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Pre-operative tests (Day 1):</strong> Comprehensive eye exam, biometry for IOL power calculation, OCT scan, blood tests, anesthesia evaluation. Value: $150-250.</li>
                <li><strong>Surgery (Day 2):</strong> Surgeon fee, phacoemulsification procedure (15-20 min), operating room charges, anesthesia (topical or local), basic monofocal IOL (Alcon, Zeiss, or equivalent), microscopic instruments, sterilization. Value: $500-800.</li>
                <li><strong>Post-operative care (Days 3-30):</strong> Eye shield, sunglasses, antibiotic eye drops (1 week), anti-inflammatory drops (3-4 weeks), Day 1 check-up, Week 1 check-up, Week 4 check-up, 24/7 emergency contact with surgeon. Value: $150-250.</li>
                <li><strong>Hospital stay:</strong> Same-day discharge (2-4 hours observation), recovery room. No overnight stay needed. Value: $50-100.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>What costs EXTRA (not included in basic package):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Premium IOL upgrades:</strong> Multifocal IOL (glasses-free vision): +$700-1,300 per eye. Toric IOL (astigmatism correction): +$400-800. Femto laser-assisted surgery (blade-free): +$1,000-1,500. These are optional upgrades.</li>
                <li><strong>Second eye surgery:</strong> If both eyes need cataract removal, second eye is separate charge (usually discounted 10-20% if done during same trip).</li>
                <li><strong>Complications (rare):</strong> If infection, IOL dislocation, or other complication occurs (&lt;1% of cases), additional treatment needed. Some hospitals include 1-year complication warranty (free treatment), others charge separately.</li>
                <li><strong>YAG laser capsulotomy:</strong> If posterior capsule becomes cloudy (20-30% of patients, 6 months-2 years later), YAG laser treatment needed. Cost: $200-400. Some hospitals include free YAG laser for 1-2 years.</li>
                <li><strong>Reading glasses:</strong> If monofocal IOL chosen (distance vision clear), reading glasses needed for near vision. Cost: $50-200 (buy locally or in India).</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Additional costs for international patients:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Flights:</strong> GCC to India roundtrip: $300-600 (budget airlines). Not included in medical package.</li>
                <li><strong>Hotel (3-5 nights):</strong> $30-100 per night ($90-500 total). Many hospitals have guest houses ($20-40/night). Not included unless specified.</li>
                <li><strong>Airport pickup:</strong> Free at most top hospitals (Dr. Agarwal&apos;s, LV Prasad, Sankara). If not included: $10-20 Uber from airport.</li>
                <li><strong>Meals:</strong> Hospital cafeteria $3-8/meal. Not included in surgery cost.</li>
                <li><strong>Companion visa/travel:</strong> If family member accompanies you, their flight + hotel separate. Companion not medically necessary (many solo patients).</li>
              </ul>
              <p className="text-gray-700">
                <strong>Getting written quote:</strong> Request detailed written quote before booking (itemized costs, inclusions, exclusions). Ask specifically: (1) Is IOL included or extra? (2) How many follow-ups included? (3) Is YAG laser free if needed? (4) Is 1-year warranty included? Reputable hospitals provide transparent quotes with no surprise bills.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Is cataract surgery covered by insurance for international patients?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Insurance coverage varies by policy type. Most GCC patients self-pay due to India&apos;s low cost.</strong> Insurance options:
              </p>
              <p className="mb-3 text-gray-700"><strong>Travel insurance:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Usually NOT covered:</strong> Travel insurance excludes pre-existing conditions and elective procedures. Cataract surgery is considered elective (not emergency). Denial reason: &quot;Traveled to India specifically for surgery.&quot;</li>
                <li><strong>Rarely covered:</strong> If cataract suddenly worsens during India trip (e.g., trauma), emergency cataract surgery may be covered. Requires proof of emergency (medical reports, doctor letter). Very rare scenario.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>International health insurance:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Sometimes covered:</strong> Comprehensive international health plans (Cigna Global, Allianz Worldwide, Bupa Global) may cover cataract surgery in India if: (1) Medically necessary (not cosmetic), (2) Pre-approval obtained, (3) Hospital is in network (JCI-accredited). Check policy carefully.</li>
                <li><strong>Reimbursement process:</strong> Submit: Hospital invoice, discharge summary, surgeon report, IOL details, payment receipts. Reimbursement in 4-8 weeks. Usually covers 60-80% of costs (policy limits apply).</li>
                <li><strong>Network hospitals:</strong> Some insurers have direct billing with Apollo, Fortis, Max (no upfront payment). Verify before booking.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Company/employer insurance (expat plans):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>May be covered:</strong> If you work for multinational company in GCC with comprehensive health benefits, cataract surgery in India may be covered. Requires: Pre-approval from HR, network hospital (Apollo, Fortis, Medanta), medical necessity letter from ophthalmologist.</li>
                <li><strong>Cashless option:</strong> Some corporate plans offer cashless treatment at network hospitals in India (company directly pays hospital). Verify with HR before booking.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Why most GCC patients self-pay:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Insurance hassle:</strong> Pre-approval requires 2-4 weeks (medical reports, photos, waiting period). Many patients prefer to pay and avoid delays.</li>
                <li><strong>India costs already low:</strong> $800-1,500 for monofocal IOL cataract surgery (affordable even without insurance). Compare: USA $3,500-6,000 (insurance still requires $500-1,500 deductible/co-pay).</li>
                <li><strong>No insurance increase:</strong> Self-pay avoids insurance claim history (future premium increases for claiming cataract surgery).</li>
                <li><strong>Faster booking:</strong> Pay directly, book surgery within 1 week. No waiting for insurance approval.</li>
              </ul>
              <p className="text-gray-700">
                <strong>Recommendation:</strong> Check your insurance policy specifically for &quot;international elective surgery&quot; coverage. If unclear, assume self-pay (most affordable option given India&apos;s low costs). If insurance approves, great - get reimbursement later. Don&apos;t delay surgery waiting for insurance (cataracts worsen over time, earlier treatment = better outcomes).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>When should I operate the second eye? Can I do both eyes during one India trip?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Most surgeons recommend 1-2 weeks gap between eyes for safety and IOL power adjustment.</strong> Second eye timing and planning:
              </p>
              <p className="mb-3 text-gray-700"><strong>Recommended timeline:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Option 1: One India trip, both eyes (most common):</strong> Day 1 (arrival + tests), Day 2 (first eye surgery), Days 3-14 (recovery, sightseeing if feeling well), Day 14-15 (second eye surgery + Day 1 post-op check), Day 16 (fly home). Total: 15-16 days in India. Saves flight costs, completes treatment in one trip.</li>
                <li><strong>Option 2: Two separate India trips:</strong> Trip 1 (first eye, 5-7 days). Wait 4-8 weeks at home (ensure good healing). Trip 2 (second eye, 5-7 days). More expensive (two flights) but safer if first eye complications or if unsure about IOL choice.</li>
                <li><strong>Option 3: Same-day bilateral surgery (both eyes same day):</strong> Offered at some hospitals for low-risk patients (age &lt;70, no diabetes, no glaucoma). Saves time (3-5 days in India total). Higher risk if rare complication occurs (both eyes affected). Most surgeons do NOT recommend unless exceptional circumstances.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Why 1-2 week gap preferred:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Monitor first eye healing:</strong> If complication develops (infection, inflammation, IOL dislocation) in first eye, postpone second eye until resolved. Complication rate &lt;1%, but important to detect early.</li>
                <li><strong>Adjust second eye IOL power:</strong> After first eye surgery, if vision outcome slightly off target (e.g., still -0.5 diopters myopic instead of perfect 0), surgeon can fine-tune second eye IOL power for better match. Results in more balanced vision between eyes.</li>
                <li><strong>Patient comfort:</strong> Recovery easier if one eye sees clearly while second eye heals. Both eyes operated same day means blurry vision bilaterally for 1-2 days (disorienting for some patients).</li>
                <li><strong>Reduced infection risk:</strong> If infection occurs in first eye (0.1% risk), waiting prevents spread to second eye during vulnerable healing period.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Planning one-trip bilateral surgery (both eyes, one India visit):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Day 1:</strong> Arrival + pre-operative tests (both eyes evaluated, IOL power calculated for each eye separately)</li>
                <li><strong>Day 2:</strong> First eye surgery (worse eye operated first, or dominant eye - discuss with surgeon)</li>
                <li><strong>Day 3:</strong> Post-op check for first eye (vision, pressure, inflammation)</li>
                <li><strong>Days 4-13:</strong> Recovery, use eye drops, follow restrictions (no swimming, heavy lifting). Light sightseeing OK if feeling well (many patients visit Taj Mahal, local temples during this gap). Vision improving daily in operated eye.</li>
                <li><strong>Day 14:</strong> Second eye surgery (repeat same procedure, IOL power may be slightly adjusted based on first eye outcome)</li>
                <li><strong>Day 15:</strong> Post-op check for second eye + final consultation</li>
                <li><strong>Day 16:</strong> Fly home (both eyes healed sufficiently for safe flight, 3-5 days post-surgery for second eye meets flying guidelines)</li>
              </ul>
              <p className="text-gray-700">
                <strong>Cost advantage of one-trip bilateral:</strong> Flight savings $300-600, hotel savings $200-400 (vs two trips). Total savings: $500-1,000 by combining both eyes into one India visit. 90% of international patients choose this option. Discuss with surgeon during free video consultation to plan timeline.
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

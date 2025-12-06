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
  title: 'LASIK Eye Surgery in India 2025: Cost, Best Eye Hospitals, Success Rate | Laser Vision Correction',
  description: 'LASIK eye surgery in India: Blade-Free LASIK ($800-1,200), Contoura Vision LASIK ($1,200-1,800), SMILE ($1,500-2,200). Top eye hospitals, 98% success rate, save 70-85% vs USA. Safe, painless, 20 min procedure.',
  keywords: [
    'lasik eye surgery india',
    'lasik surgery cost india',
    'lasik india',
    'laser eye surgery india',
    'blade free lasik india',
    'contoura vision lasik india',
    'smile lasik india',
    'جراحة العيون بالليزر في الهند',
    'تكلفة الليزك في الهند',
    'تصحيح النظر بالليزر في الهند',
    'مستشفيات العيون في الهند',
    'ليزك بدون شفرة في الهند',
  ],
};

export default function LasikEyeSurgeryIndiaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          LASIK Eye Surgery in India: Cost, Best Eye Hospitals & Success Rate 2025
        </h1>
        <p className="mb-6 text-xl text-gray-700">
          Get crystal-clear vision in 20 minutes. Blade-Free LASIK starts at $800. Save 70-85% vs USA.
          World-class eye hospitals. 98% success rate. Painless, walk out the same day.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/booking">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Get Free Consultation
            </Button>
          </Link>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline">
              WhatsApp Us
            </Button>
          </a>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="mb-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-600">$800-1,200</p>
                <p className="text-gray-600">Blade-Free LASIK</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-600">98%</p>
                <p className="text-gray-600">Success Rate (20/20 vision)</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-600">70-85%</p>
                <p className="text-gray-600">Savings vs USA</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-600">24 Hours</p>
                <p className="text-gray-600">Return to Normal Activities</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">LASIK Surgery Cost Comparison: India vs World</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Procedure Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left">India</th>
                <th className="border border-gray-300 px-4 py-2 text-left">USA</th>
                <th className="border border-gray-300 px-4 py-2 text-left">UK</th>
                <th className="border border-gray-300 px-4 py-2 text-left">UAE</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Blade-Free LASIK (both eyes)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$800-1,200</td>
                <td className="border border-gray-300 px-4 py-2">$4,000-6,000</td>
                <td className="border border-gray-300 px-4 py-2">£3,500-5,000 ($4,400-6,300)</td>
                <td className="border border-gray-300 px-4 py-2">AED 8,000-12,000 ($2,180-3,270)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">70-85%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Contoura Vision LASIK</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$1,200-1,800</td>
                <td className="border border-gray-300 px-4 py-2">$5,000-7,000</td>
                <td className="border border-gray-300 px-4 py-2">£4,500-6,500 ($5,700-8,200)</td>
                <td className="border border-gray-300 px-4 py-2">AED 12,000-18,000 ($3,270-4,900)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">70-80%</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">SMILE (Small Incision)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$1,500-2,200</td>
                <td className="border border-gray-300 px-4 py-2">$6,000-8,000</td>
                <td className="border border-gray-300 px-4 py-2">£5,500-7,500 ($6,900-9,500)</td>
                <td className="border border-gray-300 px-4 py-2">AED 15,000-22,000 ($4,090-6,000)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">70-75%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">PRK (Photorefractive)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$700-1,000</td>
                <td className="border border-gray-300 px-4 py-2">$3,500-5,000</td>
                <td className="border border-gray-300 px-4 py-2">£3,000-4,500 ($3,800-5,700)</td>
                <td className="border border-gray-300 px-4 py-2">AED 7,000-10,000 ($1,910-2,725)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">75-80%</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Femto-LASIK (Advanced)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$1,000-1,500</td>
                <td className="border border-gray-300 px-4 py-2">$4,500-6,500</td>
                <td className="border border-gray-300 px-4 py-2">£4,000-6,000 ($5,000-7,600)</td>
                <td className="border border-gray-300 px-4 py-2">AED 10,000-15,000 ($2,725-4,090)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">70-80%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          *Prices include pre-operative evaluation, surgery for both eyes, post-operative medications, and 3 follow-up visits.
          Lifetime enhancement warranty at select hospitals.
        </p>
      </section>

      {/* What's Included */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">What&apos;s Included in LASIK Package</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Pre-Operative (Day -7 to -1)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Comprehensive eye examination (refraction, corneal thickness, pupil size)</li>
                <li>Corneal topography mapping (Pentacam/Orbscan)</li>
                <li>Wavefront analysis for custom LASIK</li>
                <li>Tear film evaluation (dry eye assessment)</li>
                <li>Stop contact lens wear: 2 weeks for soft, 4 weeks for hard lenses</li>
                <li>Pre-op medications (antibiotic eye drops)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Procedure Day (20-30 min)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Numbing eye drops (no injections, completely painless)</li>
                <li>Femtosecond laser creates corneal flap (10 seconds per eye)</li>
                <li>Excimer laser reshapes cornea (20-60 seconds per eye)</li>
                <li>Flap repositioned (self-healing, no stitches)</li>
                <li>Protective shield placed over eyes</li>
                <li>Rest in recovery room for 30 minutes, vision check, go home same day</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recovery (Day 1-30)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Vision improvement starts within 24 hours (80-90% clarity)</li>
                <li>Antibiotic and anti-inflammatory eye drops (4x daily for 1 week)</li>
                <li>Wear protective eye shields while sleeping (1 week)</li>
                <li>Avoid rubbing eyes, swimming, makeup, dusty environments (2 weeks)</li>
                <li>Follow-up visits: Day 1, Week 1, Month 1, Month 3</li>
                <li>Return to work/normal activities: Day 1-2</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Long-Term Care (Lifetime)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Final vision stabilizes: 3-6 months (98% achieve 20/20 or better)</li>
                <li>Annual eye exams recommended (general eye health)</li>
                <li>Enhancement (touch-up) available if needed: 5% of patients, usually free</li>
                <li>Lifetime results: Vision correction is permanent</li>
                <li>Age-related changes: May need reading glasses after age 40+ (presbyopia)</li>
                <li>UV protection: Wear sunglasses outdoors (cornea healed but UV protection always important)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* LASIK Types Comparison */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">LASIK Types Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Factor</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Blade-Free LASIK</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Contoura Vision LASIK</th>
                <th className="border border-gray-300 px-4 py-2 text-left">SMILE</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Technology</td>
                <td className="border border-gray-300 px-4 py-2">✅ Femtosecond laser flap + Excimer laser reshaping</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Topography-guided custom ablation (22,000 data points)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Single laser, no flap, 2-4mm incision</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Suitable For</td>
                <td className="border border-gray-300 px-4 py-2">-1 to -10 power (myopia), +1 to +4 (hyperopia), 1-4 (astigmatism)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">-1 to -10 myopia, irregular corneas, higher-order aberrations</td>
                <td className="border border-gray-300 px-4 py-2">-1 to -10 myopia, 1-3 astigmatism, dry eyes</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Success Rate</td>
                <td className="border border-gray-300 px-4 py-2">✅ 95-98% achieve 20/20 or better</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">✅ 98-99% achieve 20/20 or better</td>
                <td className="border border-gray-300 px-4 py-2">✅ 96-98% achieve 20/20 or better</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Dry Eyes Risk</td>
                <td className="border border-gray-300 px-4 py-2 text-orange-600">⚠️ Moderate (flap creation cuts nerves)</td>
                <td className="border border-gray-300 px-4 py-2 text-orange-600">⚠️ Moderate (similar to blade-free)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Low (minimal nerve disruption)</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Recovery Time</td>
                <td className="border border-gray-300 px-4 py-2">✅ 24 hours clear vision, back to work Day 1-2</td>
                <td className="border border-gray-300 px-4 py-2">✅ 24 hours clear vision, back to work Day 1-2</td>
                <td className="border border-gray-300 px-4 py-2 text-orange-600">⚠️ 3-7 days clear vision, back to work Day 3-5</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Cost (Both Eyes)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">✅ $800-1,200 (most affordable)</td>
                <td className="border border-gray-300 px-4 py-2">$1,200-1,800</td>
                <td className="border border-gray-300 px-4 py-2">$1,500-2,200</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Best For</td>
                <td className="border border-gray-300 px-4 py-2">✅ Standard myopia, budget-conscious, fast recovery</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Night vision issues, irregular corneas, best possible outcomes</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Dry eye prone, contact sports, military/pilots</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Recommendation</td>
                <td className="border border-gray-300 px-4 py-2">Most popular (70% of patients)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">Best visual outcomes (sharper night vision)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">Best for active lifestyle</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Top Eye Hospitals */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Top 5 Eye Hospitals for LASIK in India</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">#1: Centre for Sight (New Delhi, Mumbai, Bangalore)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                <strong>Specialty:</strong> LASIK Excellence (40,000+ surgeries annually)<br />
                <strong>Technology:</strong> VISUMAX 800 (world&apos;s fastest femtosecond laser), Contoura Vision, SMILE<br />
                <strong>Success Rate:</strong> 98.5% achieve 20/20 or better<br />
                <strong>Key Doctors:</strong> Dr. Mahipal Sachdev (20+ years LASIK experience, trained in USA)<br />
                <strong>Cost:</strong> Blade-Free LASIK $900-1,200, Contoura $1,400-1,800, SMILE $1,800-2,200<br />
                <strong>Why Choose:</strong> Lifetime free enhancement policy, 24/7 emergency support, ISO 9001 certified
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">#2: Dr. Agarwal&apos;s Eye Hospital (Chennai, Mumbai, Delhi)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                <strong>Specialty:</strong> Comprehensive Eye Care (100+ centers across India, 50,000+ LASIK annually)<br />
                <strong>Technology:</strong> Zeiss MEL 90 Excimer, WaveLight FS200 Femto, Contoura Vision<br />
                <strong>Success Rate:</strong> 98% achieve 20/20 or better, 99.7% complication-free<br />
                <strong>Key Achievement:</strong> 1+ million successful LASIK surgeries since 1997<br />
                <strong>Cost:</strong> Blade-Free LASIK $800-1,100, Contoura $1,200-1,600<br />
                <strong>Why Choose:</strong> Most experienced team, free lifetime check-ups, EMI available
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">#3: Sankara Nethralaya (Chennai)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                <strong>Specialty:</strong> Research-Driven Eye Care (Asia&apos;s #1 eye hospital, 25,000+ LASIK annually)<br />
                <strong>Technology:</strong> Schwind Amaris 1050RS (world&apos;s fastest excimer laser), Contoura Vision, PRK<br />
                <strong>Success Rate:</strong> 98.8% achieve 20/20 or better<br />
                <strong>Key Doctors:</strong> Dr. S.S. Badrinath (Padma Shri awardee, 45+ years experience)<br />
                <strong>Cost:</strong> Blade-Free LASIK $900-1,300, Contoura $1,300-1,700<br />
                <strong>Why Choose:</strong> Non-profit trust (no commercial bias), research institution, affordable pricing
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">#4: Apollo Hospitals Eye Clinic (Pan-India network)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                <strong>Specialty:</strong> Premium Multi-Specialty Care (30,000+ LASIK annually across 15 centers)<br />
                <strong>Technology:</strong> Carl Zeiss VisuMax, WaveLight EX500, Contoura Vision, SMILE<br />
                <strong>Success Rate:</strong> 97.5% achieve 20/20 or better<br />
                <strong>International Patients:</strong> 20,000+ annually, dedicated international patient desk<br />
                <strong>Cost:</strong> Blade-Free LASIK $1,000-1,400, Contoura $1,400-1,900, SMILE $1,800-2,400<br />
                <strong>Why Choose:</strong> JCI accredited, all-in-one medical tourism, visa assistance, airport pickup
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">#5: Sharp Sight Eye Hospitals (Delhi NCR)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                <strong>Specialty:</strong> Affordable Excellence (15,000+ LASIK annually, 10 centers in Delhi NCR)<br />
                <strong>Technology:</strong> Technolas Femto LDV Z8, MEL 90 Excimer, Contoura Vision<br />
                <strong>Success Rate:</strong> 97% achieve 20/20 or better<br />
                <strong>Key Doctors:</strong> Dr. Aditya Verma (15+ years LASIK, AIIMS trained)<br />
                <strong>Cost:</strong> Blade-Free LASIK $750-1,050, Contoura $1,100-1,500 (most affordable in Delhi)<br />
                <strong>Why Choose:</strong> Best value for money, no hidden costs, transparent pricing, 0% EMI
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">LASIK Recovery Timeline</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Hour 0-6: Immediate Post-Op</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Vision:</strong> Blurry, hazy, watery eyes (like looking through foggy glass).<br />
                <strong>Sensation:</strong> Mild burning, gritty feeling, light sensitivity (like sand in eyes).<br />
                <strong>Activity:</strong> Rest with eyes closed, sleep recommended (healing happens fastest when eyes closed).
                Wear protective eye shields. No TV, phone, computer.<br />
                <strong>Medications:</strong> Start antibiotic and anti-inflammatory eye drops immediately (4x daily).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Day 1: First Follow-Up</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Vision:</strong> 80-90% clear (most patients can see 20/30 or better). Halos, glare, starbursts around lights (normal, temporary).<br />
                <strong>Sensation:</strong> Mild dryness, occasional gritty feeling (artificial tears help).<br />
                <strong>Activity:</strong> Return to desk work, watching TV, light walking okay. Avoid makeup, swimming, dusty environments, rubbing eyes.<br />
                <strong>Follow-Up:</strong> Doctor checks flap healing, confirms no complications. Vision test shows improvement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Week 1: Rapid Healing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Vision:</strong> 90-95% clear (most achieve 20/25 or better). Night vision improving but halos persist (normal).<br />
                <strong>Sensation:</strong> Dry eyes common (peak dryness), use preservative-free artificial tears every 1-2 hours.<br />
                <strong>Activity:</strong> Return to all normal activities except swimming, contact sports, heavy lifting. Can drive during day (not at night yet).
                Wear sunglasses outdoors.<br />
                <strong>Follow-Up:</strong> Week 1 check-up, flap fully healed, cornea stabilizing.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Month 1-3: Vision Stabilization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Vision:</strong> 95-100% clear (98% achieve 20/20 or better by Month 3). Halos and glare resolving. Night vision back to normal.<br />
                <strong>Sensation:</strong> Dry eyes improving, use artificial tears 3-4x daily. Dryness peaks Week 2-4, then improves.<br />
                <strong>Activity:</strong> All restrictions lifted. Swimming, contact sports, gym, makeup okay after Month 1. Resume contact sports after Month 3.<br />
                <strong>Follow-Up:</strong> Month 1 check-up (confirm 20/20 or better), Month 3 final check (vision stabilized).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Month 6-12: Long-Term Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Vision:</strong> Final vision achieved (99% stable, no further changes). Permanent correction maintained.<br />
                <strong>Sensation:</strong> Dry eyes resolved (may need occasional artificial tears in dry climates).<br />
                <strong>Activity:</strong> Normal life, no restrictions. Annual eye exams recommended for general health.<br />
                <strong>Enhancement:</strong> If needed (5% of patients), free enhancement available after 6 months (prescription &gt; -0.50 or visual dissatisfaction).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Lifetime: Permanent Vision Correction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Vision:</strong> LASIK results are permanent. Cornea remains reshaped lifelong.<br />
                <strong>Age-Related Changes:</strong> After age 40+, may develop presbyopia (need reading glasses for close work) - this is normal aging, not LASIK reverting.<br />
                <strong>Rare Regression:</strong> &lt;2% experience slight regression (0.25-0.50 power return) after 10+ years. Free enhancement available at most hospitals.<br />
                <strong>Annual Check-Ups:</strong> Recommended for general eye health (glaucoma, cataract screening), not LASIK-related.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Schema for Rich Snippets */}
      <FAQSchema faqs={[
        {
          question: "How much does LASIK surgery cost in India?",
          answer: "Blade-Free LASIK costs $800-1,200 for both eyes in India vs $4,000-6,000 in USA (70-85% savings). Contoura Vision LASIK: $1,200-1,800. SMILE (Small Incision): $1,500-2,200. Prices include pre-op evaluation, surgery, post-op medications, and 3-6 month follow-ups. Lifetime enhancement warranty at select hospitals."
        },
        {
          question: "Is LASIK surgery safe and what is the success rate?",
          answer: "LASIK is extremely safe with 98% success rate (patients achieve 20/20 or better vision). Serious complications are rare (<0.5%). Common temporary side effects: dry eyes (peak Week 2-4, resolves by Month 3-6), halos/glare at night (resolves by Month 1-3), light sensitivity (resolves Week 1). FDA approved since 1999. Over 40 million procedures worldwide. Top Indian eye hospitals match USA safety standards with JCI accreditation."
        },
        {
          question: "How long does LASIK recovery take?",
          answer: "Vision improvement starts within 24 hours (80-90% clear). Return to work: Day 1-2 for desk jobs. Resume normal activities: Week 1. Swimming/contact sports: Month 1-3. Final vision stabilizes: Month 3-6 (98% achieve 20/20 or better). Dry eyes peak Week 2-4, resolve by Month 3-6. Halos/glare at night resolve by Month 1-3. No bed rest needed, walk out same day."
        },
        {
          question: "What power is suitable for LASIK?",
          answer: "Myopia (nearsightedness): -1.00 to -10.00 suitable. Hyperopia (farsightedness): +1.00 to +4.00 suitable. Astigmatism: 1.00 to 4.00 suitable. Not suitable: Power >-10 (consider ICL instead), corneal thickness <480 microns, unstable prescription (changed >0.50 in last year), keratoconus, uncontrolled diabetes, pregnancy. Age: 18+ years (prescription stable)."
        },
        {
          question: "Is LASIK permanent or does eyesight deteriorate again?",
          answer: "LASIK is permanent - cornea remains reshaped lifelong. 99% maintain clear vision. Age-related changes after 40+ (presbyopia) require reading glasses - this is normal aging, not LASIK reverting. Rare regression: <2% experience slight power return (0.25-0.50) after 10+ years, free enhancement available. If prescription changes due to aging, cataract, or disease, LASIK result itself doesn't reverse."
        },
        {
          question: "Which is better: Blade-Free LASIK, Contoura Vision, or SMILE?",
          answer: "Blade-Free LASIK (70% choose): Best for standard myopia, fastest recovery (24 hours), most affordable ($800-1,200). Contoura Vision LASIK (20% choose): Best for night vision issues, irregular corneas, sharpest vision outcomes (98-99% achieve 20/20), worth extra cost for pilots, drivers ($1,200-1,800). SMILE (10% choose): Best for dry eye prone, contact sports, military, minimal nerve disruption, slower recovery 3-7 days ($1,500-2,200). Consult surgeon for personalized recommendation."
        },
        {
          question: "Can I get LASIK if I have dry eyes or thin corneas?",
          answer: "Dry eyes: Mild-moderate okay with treatment. Severe dry eyes: SMILE recommended (less nerve disruption) or treat dry eyes first for 3-6 months. Thin corneas (<480 microns): LASIK not suitable. Alternatives: PRK (surface ablation, no flap), ICL (implantable lens), SMILE (less corneal tissue removed). Comprehensive pre-op screening determines candidacy. 10-15% not suitable for LASIK but qualify for alternatives."
        },
        {
          question: "Do I need to stay in India for follow-ups after LASIK?",
          answer: "Day 1 follow-up mandatory (24 hours post-op). Stay in India: Minimum 3 days recommended. Week 1 follow-up: Can be done via telemedicine or local eye doctor in home country (we provide detailed report). Month 1, 3, 6 follow-ups: Not mandatory but recommended, can be done locally. Emergency support: 24/7 via WhatsApp/phone. Enhancement (if needed): Return after 6 months. Most international patients stay 5-7 days for peace of mind."
        }
      ]} />

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Is LASIK painful?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                LASIK is completely painless. Numbing eye drops are used (no injections). You may feel slight pressure on your eye for 10-20 seconds (like someone gently pressing on your eyelid) but no pain. After surgery, mild burning/gritty feeling for 2-4 hours (like wearing contact lenses too long) - easily managed with lubricating drops. 99% of patients report no significant discomfort.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Can both eyes be done on the same day?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Yes, both eyes done same day (standard practice). Advantages: Single anesthesia, single recovery period, vision balanced immediately, one trip to India. Time: 20-30 minutes total (10-15 min per eye). Safety: No increased risk. Alternative: Some patients prefer one eye at a time (1-2 weeks apart) for peace of mind, but 95% choose both eyes same day. International patients always do both same day to avoid second trip.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What if my prescription is too high for LASIK?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Power &gt;-10.00: ICL (Implantable Collamer Lens) recommended instead of LASIK. ICL suitable for -3.00 to -20.00 myopia. Procedure: Thin lens implanted inside eye (like permanent contact lens), reversible, no corneal tissue removed. Cost: $2,500-3,500 per eye in India vs $8,000-10,000 in USA. Recovery: Similar to LASIK (1-2 days). Success rate: 99%. Alternative for high myopia with thin corneas. Top ICL centers: Centre for Sight, Apollo, Dr. Agarwal&apos;s.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Can LASIK treat astigmatism and farsightedness?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Yes, LASIK treats all refractive errors. Myopia (nearsightedness): -1.00 to -10.00 ✅. Hyperopia (farsightedness): +1.00 to +4.00 ✅. Astigmatism (cylindrical): 1.00 to 4.00 ✅. Mixed astigmatism: Combination of myopia/hyperopia + astigmatism ✅. Success rates similar for all types (95-98% achieve 20/20). Some patients have all three corrected in one procedure. Pre-op evaluation determines exact candidacy.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Internal Links */}
      <InternalLinks
        title="Related Resources"
        variant="compact"
        links={[
          { title: "Cataract Surgery in India", href: "/treatments/cataract-surgery-india" },
          { title: "Best Eye Hospitals in Mumbai", href: "/blog/best-hospitals-mumbai-medical-tourism" },
          { title: "Medical Tourism from Dubai", href: "/blog/dubai-to-india-medical-tourism" },
        ]}
      />

      {/* Social Share */}
      <SocialShare
        title="LASIK Eye Surgery in India 2025: Cost, Best Eye Hospitals & Success Rate"
        url="/treatments/lasik-eye-surgery-india"
        description="Get LASIK in India - Blade-Free LASIK $800-1,200, 98% success rate, save 70-85%. Top eye hospitals, painless procedure, 24-hour recovery."
      />

      {/* Related Articles */}
      <RelatedArticles articles={DENTAL_RELATED_ARTICLES} />

      {/* Final CTA */}
      <section className="mb-12">
        <Card className="bg-emerald-50">
          <CardContent className="pt-6">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Ready to Get Crystal-Clear Vision?</h2>
            <p className="mb-6 text-gray-700">
              Blade-Free LASIK starts at $800. Walk out glasses-free in 20 minutes. World-class eye hospitals. 98% success rate.
              Get your free consultation today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/booking">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Book Free Consultation
                </Button>
              </Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  WhatsApp: +91-98765-43210
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </section>
      {/* Testimonials Section */}
      <Testimonials
        testimonials={TREATMENT_TESTIMONIALS['generic']}
        title="Success Stories from Our Lasik Eye Surgery Patients"
        subtitle="Real transformations from GCC patients who achieved life-changing results"
      />

      {/* Trust Badges Section */}
      <TrustBadges />

      
    </div>
  );
}

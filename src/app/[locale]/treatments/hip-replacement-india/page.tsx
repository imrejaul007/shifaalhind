import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles, DIABETES_RELATED_ARTICLES } from '@/components/blog/related-articles';
import { InternalLinks } from '@/components/seo/internal-links';
import { Testimonials, TREATMENT_TESTIMONIALS } from '@/components/testimonials/testimonials';
import { TrustBadges } from '@/components/trust-badges/trust-badges';
import { BreadcrumbSchema } from '@/components/seo/breadcrumb-schema';
import { MedicalProcedureSchema } from '@/components/seo/medical-procedure-schema';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Hip Replacement Surgery in India 2025: Cost, Best Hospitals, Recovery | Total Hip Arthroplasty',
  description: 'Complete guide to hip replacement surgery in India. Total hip replacement ($5,000-7,500), Birmingham Hip Resurfacing ($6,000-9,000). Top orthopedic hospitals, 95% success rate, save 70-80% vs USA.',
  keywords: [
    'hip replacement india',
    'hip replacement surgery india',
    'hip replacement cost india',
    'total hip replacement india',
    'hip arthroplasty india',
    'استبدال مفصل الورك في الهند',
    'تكلفة استبدال الورك في الهند',
    'جراحة مفصل الورك في الهند',
    'best hospital hip replacement india',
    'hip replacement surgery cost',
    'hip resurfacing india',
    'bilateral hip replacement india',
    'revision hip replacement india',
    'أفضل مستشفى استبدال الورك في الهند'
  ],
};

export default function HipReplacementIndiaPage() {
  return (
    <div className="container mx-auto px-4 p
      {/* Breadcrumb Schema for SEO */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://shifaalhind.onrender.com' },
        { name: 'Treatments', url: 'https://shifaalhind.onrender.com/treatments' },
        { name: 'Hip Replacement in India', url: 'https://shifaalhind.onrender.com/treatments/hip-replacement-india' }
      ]} />

      {/* Medical Procedure Schema for SEO */}
      <MedicalProcedureSchema
        name="Hip Replacement Surgery"
        description="Hip replacement surgery replaces damaged hip joint components with artificial implants to restore mobility and relieve pain from arthritis or injury."
        procedureType="SurgicalProcedure"
        bodyLocation="Hip Joint"
        preparation="Medical evaluation, blood tests, X-rays, physical therapy preparation, arrange home care."
        followup="Physical therapy starts immediately, follow-ups at 2 weeks, 6 weeks, 3 months, 6 months, and annually."
        url="https://shifaalhind.onrender.com/treatments/hip-replacement-india"
      />
y-8">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
          Hip Replacement Surgery in India: Cost, Methods & Recovery
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600">
          Get world-class total hip replacement surgery in India from $5,000-7,500 (vs $40,000-60,000 in USA).
          95%+ success rate. Save 70-80% with JCI-accredited orthopedic hospitals.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/consultation">
            <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
              Get Free Consultation
            </Button>
          </Link>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline">
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
              <div className="mb-2 text-3xl font-bold text-primary-600">$5,000-7,500</div>
              <div className="text-sm text-gray-600">Total Hip Replacement Cost</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="mb-2 text-3xl font-bold text-primary-600">95-98%</div>
              <div className="text-sm text-gray-600">Success Rate (20+ years)</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="mb-2 text-3xl font-bold text-primary-600">70-80%</div>
              <div className="text-sm text-gray-600">Savings vs USA/UK</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="mb-2 text-3xl font-bold text-primary-600">6-12 weeks</div>
              <div className="text-sm text-gray-600">Full Recovery Time</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Hip Replacement Cost Comparison (2025)</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left">Procedure Type</th>
                <th className="border border-gray-300 px-4 py-3 text-left">India</th>
                <th className="border border-gray-300 px-4 py-3 text-left">USA</th>
                <th className="border border-gray-300 px-4 py-3 text-left">UK</th>
                <th className="border border-gray-300 px-4 py-3 text-left">UAE</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Total Hip Replacement (Unilateral)</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">$5,000-7,500</td>
                <td className="border border-gray-300 px-4 py-3">$40,000-60,000</td>
                <td className="border border-gray-300 px-4 py-3">$18,000-25,000</td>
                <td className="border border-gray-300 px-4 py-3">$15,000-20,000</td>
                <td className="border border-gray-300 px-4 py-3 text-primary-600 font-semibold">70-85%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold">Bilateral Hip Replacement (Both Hips)</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">$9,000-13,000</td>
                <td className="border border-gray-300 px-4 py-3">$70,000-100,000</td>
                <td className="border border-gray-300 px-4 py-3">$30,000-45,000</td>
                <td className="border border-gray-300 px-4 py-3">$28,000-38,000</td>
                <td className="border border-gray-300 px-4 py-3 text-primary-600 font-semibold">75-87%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Hip Resurfacing (Birmingham Hip)</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">$6,000-9,000</td>
                <td className="border border-gray-300 px-4 py-3">$45,000-70,000</td>
                <td className="border border-gray-300 px-4 py-3">$20,000-28,000</td>
                <td className="border border-gray-300 px-4 py-3">$18,000-24,000</td>
                <td className="border border-gray-300 px-4 py-3 text-primary-600 font-semibold">70-87%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold">Revision Hip Replacement</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">$7,000-10,000</td>
                <td className="border border-gray-300 px-4 py-3">$50,000-80,000</td>
                <td className="border border-gray-300 px-4 py-3">$25,000-35,000</td>
                <td className="border border-gray-300 px-4 py-3">$22,000-30,000</td>
                <td className="border border-gray-300 px-4 py-3 text-primary-600 font-semibold">70-86%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Minimally Invasive Hip Replacement</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">$6,500-9,500</td>
                <td className="border border-gray-300 px-4 py-3">$48,000-75,000</td>
                <td className="border border-gray-300 px-4 py-3">$22,000-32,000</td>
                <td className="border border-gray-300 px-4 py-3">$20,000-28,000</td>
                <td className="border border-gray-300 px-4 py-3 text-primary-600 font-semibold">72-87%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold">Partial Hip Replacement (Hemiarthroplasty)</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">$4,000-6,000</td>
                <td className="border border-gray-300 px-4 py-3">$30,000-50,000</td>
                <td className="border border-gray-300 px-4 py-3">$15,000-22,000</td>
                <td className="border border-gray-300 px-4 py-3">$12,000-18,000</td>
                <td className="border border-gray-300 px-4 py-3 text-primary-600 font-semibold">70-87%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          * Prices include: Pre-op evaluation, surgery, implant (Johnson & Johnson/Zimmer/Stryker), hospital stay (3-5 days),
          physiotherapy, post-op follow-up. International patient support included.
        </p>
      </section>

      {/* What's Included */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">What&apos;s Included in Hip Replacement Package</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">✅</span> Pre-Surgery Evaluation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Orthopedic consultation with senior surgeon</li>
                <li>• X-rays (AP/Lateral hip views)</li>
                <li>• Blood tests (CBC, coagulation profile)</li>
                <li>• ECG and cardiac clearance</li>
                <li>• Anesthesia evaluation</li>
                <li>• Pre-op medical optimization</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">✅</span> Surgery Day
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Total hip replacement surgery (2-3 hours)</li>
                <li>• Premium implant (Zimmer/DePuy/Stryker)</li>
                <li>• Spinal or general anesthesia</li>
                <li>• Operating room charges</li>
                <li>• Surgical team and assistants</li>
                <li>• ICU bed (1 day if needed)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">✅</span> Hospital Stay & Recovery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Private room (3-5 days)</li>
                <li>• Nursing care 24/7</li>
                <li>• Pain management</li>
                <li>• Physiotherapy (10-15 sessions in hospital)</li>
                <li>• Walker/crutches provided</li>
                <li>• Post-op X-rays</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">✅</span> Long-Term Care
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Follow-up consultation (2 weeks)</li>
                <li>• Physiotherapy exercise plan</li>
                <li>• Rehabilitation guidance (6-12 weeks)</li>
                <li>• Virtual follow-ups (3, 6, 12 months)</li>
                <li>• Airport pickup/drop (optional)</li>
                <li>• International patient coordinator</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Implant Types Comparison */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Hip Implant Types & Materials</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left">Factor</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Metal-on-Polyethylene</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Ceramic-on-Ceramic</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Durability</td>
                <td className="border border-gray-300 px-4 py-3">✅ 15-20 years (standard)</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">✅ 25-30+ years (superior)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold">Wear Rate</td>
                <td className="border border-gray-300 px-4 py-3">⚠️ Moderate wear over time</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Minimal wear (scratch-resistant)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Friction</td>
                <td className="border border-gray-300 px-4 py-3">⚠️ Higher friction</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Low friction (smoother movement)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold">Metal Allergies</td>
                <td className="border border-gray-300 px-4 py-3 text-orange-600">⚠️ Risk for metal-sensitive patients</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Hypoallergenic (no metal)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Cost</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">✅ $5,000-6,500 (more affordable)</td>
                <td className="border border-gray-300 px-4 py-3">⚠️ $6,500-9,000 (premium)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold">Best For</td>
                <td className="border border-gray-300 px-4 py-3">Patients 60+ years, lower activity</td>
                <td className="border border-gray-300 px-4 py-3">Younger patients (&lt;60), active lifestyle</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Squeaking Risk</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">✅ No squeaking</td>
                <td className="border border-gray-300 px-4 py-3 text-orange-600">⚠️ Rare squeaking (1-3% cases)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold">Recommendation</td>
                <td className="border border-gray-300 px-4 py-3">✅ Reliable standard choice</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Premium long-term option</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          <strong>Popular Brands:</strong> Zimmer Biomet (USA), DePuy Synthes (Johnson & Johnson), Stryker, Smith & Nephew.
          All FDA-approved implants with 20+ year track record.
        </p>
      </section>

      {/* Top Hospitals */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Top 5 Hip Replacement Hospitals in India</h2>
        <div className="space-y-6">
          
      {/* Testimonials Section */}
      <Testimonials
        testimonials={TREATMENT_TESTIMONIALS['knee-replacement']}
        title="Success Stories from Our Hip Replacement Patients"
        subtitle="Real transformations from GCC patients who achieved life-changing results"
      />

      {/* Trust Badges Section */}
      <TrustBadges />

      <Card className="border-primary-200 bg-primary-50">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-xl">🏆 #1: Fortis Hospital (Delhi, Mumbai, Bangalore)</span>
                <span className="text-sm font-normal text-primary-600">⭐ 4.8/5 (2,500+ reviews)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                <strong>Specialty:</strong> Orthopedics & Joint Replacement |
                <strong> Hip Replacements:</strong> 8,000+ annually (all centers combined)
              </p>
              <p className="text-gray-700">
                <strong>Success Rate:</strong> 98% (20-year implant survival) |
                <strong> Accreditation:</strong> JCI, NABH
              </p>
              <p className="text-gray-700">
                <strong>Technology:</strong> Mako Robotic-Arm Assisted Surgery, Computer Navigation, Minimally Invasive Techniques
              </p>
              <p className="text-gray-700">
                <strong>Cost:</strong> Total Hip: $6,000-8,000 | Bilateral: $11,000-14,000 | Hip Resurfacing: $7,000-10,000
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Why Choose:</strong> Largest orthopedic volume in India, Mako robotic surgery (faster recovery),
                international patient department with Arabic coordinators, 3-year implant warranty.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-xl">#2: Apollo Hospitals (Chennai, Hyderabad, Delhi)</span>
                <span className="text-sm font-normal text-primary-600">⭐ 4.7/5 (2,200+ reviews)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                <strong>Hip Replacements:</strong> 7,500+ annually | <strong>Success Rate:</strong> 97%
              </p>
              <p className="text-gray-700">
                <strong>Cost:</strong> Total Hip: $5,500-7,500 | Bilateral: $10,000-13,500
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Why Choose:</strong> 40+ years orthopedic experience, all major implant brands available,
                dedicated international wing, comprehensive physiotherapy program (3 months).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-xl">#3: Max Super Speciality Hospital (Delhi, Saket)</span>
                <span className="text-sm font-normal text-primary-600">⭐ 4.8/5 (1,800+ reviews)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                <strong>Hip Replacements:</strong> 5,000+ annually | <strong>Success Rate:</strong> 97.5%
              </p>
              <p className="text-gray-700">
                <strong>Cost:</strong> Total Hip: $6,500-9,000 | Revision Hip: $8,000-11,000
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Why Choose:</strong> Premier orthopedic center, ceramic-on-ceramic implants specialist,
                minimally invasive anterior approach (faster recovery), luxury international patient suites.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-xl">#4: Medanta The Medicity (Gurgaon)</span>
                <span className="text-sm font-normal text-primary-600">⭐ 4.7/5 (1,600+ reviews)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                <strong>Hip Replacements:</strong> 4,500+ annually | <strong>Success Rate:</strong> 98% (highest)
              </p>
              <p className="text-gray-700">
                <strong>Cost:</strong> Total Hip: $6,000-8,500 | Bilateral: $11,000-15,000
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Why Choose:</strong> Highest success rate (98%), revision surgery specialists,
                Dr. Yash Gulati (renowned hip surgeon, 10,000+ surgeries), advanced gait analysis lab.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-xl">#5: Manipal Hospital (Bangalore)</span>
                <span className="text-sm font-normal text-primary-600">⭐ 4.6/5 (1,400+ reviews)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                <strong>Hip Replacements:</strong> 3,500+ annually | <strong>Success Rate:</strong> 96%
              </p>
              <p className="text-gray-700">
                <strong>Cost:</strong> Total Hip: $5,000-7,000 | Bilateral: $9,500-12,500
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Why Choose:</strong> Best value for money, experienced surgeons (15+ years),
                NABH accredited, comprehensive rehabilitation center, ideal weather year-round for recovery.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Hip Replacement Recovery Timeline</h2>
        <div className="space-y-4">
          <Card className="border-primary-200 bg-primary-50">
            <CardHeader>
              <CardTitle>Day 1: Surgery Day</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>What Happens:</strong> Hip replacement surgery (2-3 hours), recovery in ICU/room (6-8 hours).
                Physiotherapist visits same day to teach breathing exercises and ankle pumps.
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Pain Level:</strong> 5-7/10 (controlled with IV pain medication)
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Mobility:</strong> Bed rest with position restrictions (no crossing legs, no bending &gt;90°)
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Days 2-5: Hospital Stay</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>What Happens:</strong> Stand with walker on Day 2, walk short distances Day 3-4.
                Physiotherapy twice daily (strengthening, gait training, stair climbing).
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Pain Level:</strong> 3-5/10 (oral pain medication)
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Mobility:</strong> Walk 50-100 meters with walker, climb stairs with assistance
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Weeks 2-6: Early Recovery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>What Happens:</strong> Progress from walker to crutches (Week 3-4), then to single cane (Week 5-6).
                Outpatient physiotherapy 3x/week. Wound heals completely (stitches removed Week 2).
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Pain Level:</strong> 1-3/10 (minimal pain medication)
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Mobility:</strong> Independent walking indoors, light household activities, drive car (Week 4-6 if right hip)
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Weeks 6-12: Active Recovery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>What Happens:</strong> Walk without aids, return to desk work (Week 8), swimming/cycling allowed.
                Physiotherapy 2x/week focusing on strengthening.
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Pain Level:</strong> 0-2/10 (occasional discomfort)
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Mobility:</strong> 80% normal function, walk 1-2 km, climb stairs normally, return to light work
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary-200 bg-primary-50">
            <CardHeader>
              <CardTitle>Months 3-6: Full Recovery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>What Happens:</strong> Return to all normal activities (except high-impact sports).
                Hip feels natural, full range of motion achieved. Resume golf, tennis (Month 4-6).
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Pain Level:</strong> 0/10 (no pain)
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Mobility:</strong> 90-95% function, unlimited walking, return to active work/sports
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Year 1+: Long-Term Success</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>What Happens:</strong> Hip functions like natural joint. Annual check-ups (X-ray) to monitor implant.
                Most patients forget they had surgery.
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Activity Level:</strong> Normal life - walking, jogging, cycling, swimming, golf, dancing.
                Avoid high-impact (running marathons, jumping sports).
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Implant Life:</strong> 15-25+ years depending on type (ceramic lasts longer)
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={[
        { question: "How much does hip replacement surgery cost in India?", answer: "Hip replacement surgery in India costs $5,000-7,500 for total hip replacement (unilateral) vs $40,000-60,000 in USA (70-85% savings). Bilateral hip replacement: $9,000-13,000. Hip resurfacing: $6,000-9,000. Revision hip replacement: $7,000-10,000. Prices include premium implants (Zimmer/DePuy/Stryker), 3-5 day hospital stay, physiotherapy, and post-op care." },
        { question: "What is the success rate of hip replacement in India?", answer: "Hip replacement success rate in India is 95-98% for 20-year implant survival at top JCI-accredited hospitals. Fortis achieves 98% success rate, Medanta 98%, Max 97.5%, Apollo 97%. Success depends on implant type (ceramic lasts 25-30 years vs metal-poly 15-20 years), surgeon experience (choose 1,000+ surgeries), and patient compliance with physiotherapy." },
        { question: "How long is recovery after hip replacement surgery?", answer: "Hip replacement recovery takes 6-12 weeks for full recovery. Walk with walker Day 2, progress to crutches Week 3-4, walk without aids Week 6-8. Return to desk work Week 8, driving Week 4-6, swimming/cycling Week 6-8, golf/tennis Month 4-6. Pain reduces significantly by Week 2 (3-5/10 to 1-3/10). Full 90-95% function achieved by Month 3-6." },
        { question: "Which is the best implant for hip replacement in India?", answer: "Best hip implant depends on age and activity: For patients under 60 years - Ceramic-on-Ceramic (25-30 year life, low wear, $6,500-9,000). For patients 60+ years - Metal-on-Polyethylene (15-20 year life, reliable, $5,000-6,500). Top brands: Zimmer Biomet, DePuy Synthes (Johnson & Johnson), Stryker, Smith & Nephew. All FDA-approved with 20+ year track records. Surgeons at Fortis/Apollo/Max use all types." },
        { question: "Can I have both hips replaced at the same time?", answer: "Yes, bilateral hip replacement (both hips at once) is safe at top Indian hospitals. Advantages: One surgery, one recovery period ($9,000-13,000 vs $10,000-15,000 for two separate surgeries). Best for: Patients under 70 years, good health, both hips severely damaged. Recovery: 8-12 weeks (vs 12-24 weeks for two separate surgeries). Not recommended for: Patients over 75, heart disease, diabetes complications. Success rate: 95% at Fortis/Medanta." },
        { question: "What are the risks of hip replacement surgery in India?", answer: "Hip replacement risks in India are low (2-5% complications at JCI hospitals): Infection: 1-2% (antibiotic prophylaxis reduces risk), Blood clots (DVT): 2-3% (blood thinners prevent), Dislocation: 2-3% (proper technique prevents), Leg length difference: 1-2%, Nerve damage: <1%. Fortis/Apollo/Max follow international protocols. Mortality risk: <0.1% (extremely rare). Factors that reduce risk: Choose JCI-accredited hospital, experienced surgeon (1,000+ surgeries), follow post-op restrictions." },
        { question: "How long do hip implants last in India?", answer: "Hip implants last 15-30+ years in India depending on type: Metal-on-Polyethylene: 15-20 years (standard, $5,000-6,500), Ceramic-on-Ceramic: 25-30+ years (premium, $6,500-9,000). Factors affecting life: Patient age (younger = more wear), activity level (high-impact sports wear faster), weight (obesity reduces life), implant quality (Zimmer/DePuy/Stryker last longest). 95-98% of implants still function at 20 years. If implant fails, revision surgery available ($7,000-10,000)." },
        { question: "Do I need to stay in India after hip replacement surgery?", answer: "Yes, stay 10-14 days in India after hip replacement: Days 1-5: Hospital stay (3-5 days average), Days 6-10: Hotel recovery with daily physiotherapy (outpatient), Days 11-14: Follow-up with surgeon, final X-ray, travel clearance. Can fly home Day 10-14 if progressing well. Many patients extend to 3 weeks for more physiotherapy. Hospital arranges: Airport pickup, hotel near hospital, physiotherapist visits, follow-up appointments. Virtual follow-ups at 3, 6, 12 months via video call." }
      ]} />

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Can I walk immediately after hip replacement?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Yes! You&apos;ll start walking with walker assistance on Day 2 after surgery. Physiotherapist helps you stand
                and take first steps. By Day 3-4, you&apos;ll walk 50-100 meters. Week 3-4: Progress to crutches. Week 6-8:
                Walk without aids. Early mobilization prevents blood clots and speeds recovery. Top hospitals have dedicated
                physiotherapy teams who work with you twice daily during hospital stay.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What activities are restricted after hip replacement?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Avoid forever:</strong> High-impact sports (running marathons, jumping, contact sports like football/rugby).
                <strong>First 6-8 weeks:</strong> No bending hip &gt;90°, no crossing legs, no pivoting/twisting, no sitting on low chairs/toilets.
                <strong>Allowed after 3-6 months:</strong> Walking/hiking, swimming, cycling, golf, tennis, dancing, yoga (modified).
                Use raised toilet seat, grab bars, long-handled shoe horn. Most patients return to 90-95% normal activities.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Will I set off metal detectors at airports?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Yes, hip implants may trigger airport metal detectors (metal-on-polyethylene implants more likely than ceramic).
                <strong>What to do:</strong> Carry your hip replacement surgery card (hospital provides), inform security before screening,
                request hand-wand check or full-body scanner (less sensitive). TSA/airport security are familiar with implants -
                millions of people fly with hip replacements. Some patients get medical certificate from surgeon (optional, not required).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How do I choose the best hospital for hip replacement in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Key factors:</strong> (1) JCI/NABH accreditation - ensures international standards, (2) Surgeon experience -
                choose 1,000+ hip surgeries, (3) Hospital volume - 2,000+ hip replacements yearly, (4) Technology - Mako robotic surgery,
                computer navigation (faster recovery), (5) Success rate - ask for 20-year implant survival data (should be 95%+).
                <strong>Top choices:</strong> Fortis (Mako robotic, 98% success), Medanta (highest success 98%), Apollo (40+ years experience).
                All have international patient departments with Arabic-speaking coordinators for GCC patients.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What is the minimum age for hip replacement surgery in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>No strict minimum age - hip replacement performed from age 40 to 90+.</strong> Age considerations:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Under 40:</strong> Avoided if possible (implant wear - younger patients more active, may need 2-3 revisions in lifetime), alternatives tried first (hip resurfacing, osteotomy, pain management), only if severe arthritis, AVN (avascular necrosis), failed trauma causing disability</li>
                <li><strong>40-60 years:</strong> Common age group for hip replacement (active patients with severe arthritis, osteoarthritis, rheumatoid arthritis), ceramic-on-ceramic implant recommended (25-30 year life, withstands higher activity), success rate 98%, full return to active lifestyle</li>
                <li><strong>60-75 years:</strong> Ideal age for hip replacement (most patients in this group, excellent outcomes 95-98% success), either ceramic or metal-poly implant suitable, faster recovery than younger patients (more compliant with restrictions), most surgeons highly experienced with this age group</li>
                <li><strong>75-85 years:</strong> Surgery safe if medically fit (comprehensive cardiac evaluation required, diabetes well-controlled, good bone quality assessed), metal-poly implant preferred (15-20 years sufficient for age), success rate 94-96%, benefits often outweigh risks (improved quality of life, mobility, independence)</li>
                <li><strong>85+ years:</strong> Case-by-case decision (anesthesia risk slightly higher, recovery slower, bone quality may be poor - osteoporosis), partial hip replacement (hemiarthroplasty) often chosen over total (faster surgery, lower risk), oldest patient at Fortis: 94 years old (successful outcome)</li>
              </ul>
              <p className="text-gray-700">
                <strong>Bottom line:</strong> Age is a number - physiological health matters more than chronological age. Top Indian hospitals assess: cardiac function (stress test if needed), bone quality (DEXA scan for osteoporosis), diabetes control (HbA1c &lt;7%), kidney/liver function, ability to participate in physiotherapy. If medically fit, hip replacement improves quality of life dramatically at any age. Younger patients need durable implants (ceramic), older patients need low-risk procedures (careful anesthesia, infection prevention).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Can I smoke after hip replacement surgery in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Smoking dramatically increases complications - should quit 4-6 weeks before and 3 months after surgery.</strong> Impact:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Before surgery:</strong> Stop 4-6 weeks before (reduces surgical complications 50%, improves lung function for anesthesia, better wound healing, reduces infection risk from 5-7% to 1-2%), nicotine constricts blood vessels limiting oxygen to tissues (critical for bone healing around implant)</li>
                <li><strong>Immediately after (Week 1-4):</strong> Absolutely NO smoking (wound healing critical phase, smoking delays healing 2-3× longer, increases deep infection risk around implant 3-5× higher, impairs bone integration with implant - may cause loosening)</li>
                <li><strong>First 3 months:</strong> Continue avoiding smoking (implant osseointegration period - bone grows into implant surface, smoking reduces bone density around implant, increases risk of dislocation, aseptic loosening)</li>
                <li><strong>Long-term:</strong> Quit permanently for best outcomes (smokers have 2-3× higher revision surgery rate at 10-15 years, chronic smoking causes bone loss around implant, early implant failure 20-30% more common in smokers)</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Smoking-specific complications for hip replacement:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li>Wound infection: 5-7% in smokers vs 1-2% in non-smokers (deep infection requires implant removal, 6-12 month treatment)</li>
                <li>Delayed wound healing: 3-4 weeks vs 2 weeks (wound breakdown, requires re-suturing)</li>
                <li>Deep vein thrombosis (blood clots): 50% higher risk in smokers</li>
                <li>Pneumonia: 2-3× higher in smokers (general anesthesia affects lungs)</li>
                <li>Implant loosening: Aseptic loosening 30% more common (smoking reduces bone density, poor osseointegration)</li>
                <li>Revision surgery needed earlier: 12-15 years vs 20-25 years in non-smokers</li>
              </ul>
              <p className="text-gray-700">
                <strong>Surgeon&apos;s perspective:</strong> Many orthopedic surgeons at top hospitals (Fortis, Apollo, Medanta) counsel patients strongly on smoking cessation - some refuse elective hip replacement if patient unwon&apos;t quit (risk too high). If you smoke, be honest with surgeon (don&apos;t hide it - they need to plan extra precautions: longer antibiotic course, extended wound care, closer monitoring). Nicotine replacement therapy (patches, gum) acceptable before/after surgery (nicotine alone less harmful than smoking - no carbon monoxide, tar, heat damage). Vaping equally harmful (nicotine still constricts blood vessels). Quitting smoking best thing you can do for hip replacement success - even quitting 2 weeks before helps (every day counts).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>When can I drive after hip replacement surgery?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Driving timeline depends on which hip operated and transmission type.</strong> Breakdown:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Left hip replacement + automatic transmission:</strong> Can drive at 2-3 weeks if pain-free, off strong pain medications (opioids impair reaction time), can perform emergency stop safely (tested in parking lot first), most patients comfortable driving Week 3-4</li>
                <li><strong>Right hip replacement + automatic transmission:</strong> Wait 4-6 weeks minimum (right foot controls brake/accelerator - critical for safety), must have: no pain when pressing brake hard, reaction time &lt;0.5 seconds, surgeon clearance (usually Week 4-6 checkup), off all opioid pain medications</li>
                <li><strong>Either hip + manual transmission:</strong> Wait 6-8 weeks (clutch requires significant hip flexion and force, may strain healing hip, risk of dislocation if pivot/twist while pressing clutch), automatic transmission strongly recommended first 3 months</li>
                <li><strong>Bilateral hip replacement (both hips):</strong> Wait 8-12 weeks (need both hips stable, pain-free, full control of both legs), automatic transmission only</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Safety considerations before driving:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Test emergency stop:</strong> In empty parking lot, can you slam brake hard without hip pain? (critical safety check)</li>
                <li><strong>Reaction time:</strong> Can you move foot from accelerator to brake in &lt;0.5 seconds? (pain/stiffness slows reaction)</li>
                <li><strong>Hip flexion:</strong> Can you sit in driver&apos;s seat without hip flexing &gt;90°? (use firm cushion if seat too low, avoid low sports cars)</li>
                <li><strong>Pain medication:</strong> Completely off opioids (codeine, tramadol, morphine impair judgment - illegal to drive), NSAIDs (ibuprofen, naproxen) okay</li>
                <li><strong>Surgeon clearance:</strong> Get written clearance from surgeon (some insurance policies require this after surgery)</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Practical driving tips post-hip replacement:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Getting in car:</strong> Back into seat, sit down, then swing both legs together into car (avoid pivoting on operated hip)</li>
                <li><strong>Getting out:</strong> Swing both legs out together, then stand (use door frame for support)</li>
                <li><strong>Seat position:</strong> Adjust seat higher if possible (prevents &gt;90° hip flexion), recline backrest slightly (more comfortable for hip)</li>
                <li><strong>First drives:</strong> Short trips only (10-15 minutes, to grocery store, not highway), avoid rush hour (high-stress driving requires quick reactions)</li>
                <li><strong>Passenger role:</strong> Easier than driving (can be passenger after 2 weeks for short trips, 3-4 weeks for long trips)</li>
              </ul>
              <p className="text-gray-700">
                <strong>Insurance and legal considerations:</strong> Check your car insurance policy (some require medical clearance after surgery before coverage valid). In India, no specific law prevents driving after hip replacement (use your judgment), but if accident occurs and you&apos;re within 6 weeks of surgery, insurance may question fitness to drive. International patients: If flying home before 6 weeks, arrange driver for first month home (family, Uber, taxi). GCC countries: Similar driving timeline applies - check local regulations. Most patients very comfortable driving by Week 6-8 and forget they had surgery. Automatic transmission makes life much easier - if you have manual, consider automatic rental first 2-3 months.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>When can I have sex after hip replacement surgery?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Safe to resume sexual activity 4-6 weeks after hip replacement with position modifications.</strong> Timeline and guidance:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Week 1-3:</strong> Avoid all sexual activity (hip dislocation risk highest first 6 weeks, any vigorous movement dangerous, intimacy possible without intercourse - kissing, cuddling, hand stimulation)</li>
                <li><strong>Week 4-6:</strong> Can resume sexual activity cautiously with surgeon clearance (hip more stable but still vulnerable, pain should be minimal, must follow position restrictions strictly)</li>
                <li><strong>Week 6-12:</strong> Resume normal sexual activity with some position modifications (hip stronger, dislocation risk lower but still present, most patients comfortable by Week 8)</li>
                <li><strong>After 3 months:</strong> All positions safe (hip fully healed, dislocation risk &lt;1%, no restrictions on positions or frequency)</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Safe positions (avoid hip flexion &gt;90°, adduction/crossing legs, internal rotation):</strong></p>
              <table className="min-w-full border-collapse border border-gray-300 mb-3">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Position</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Safe if Hip Replaced</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Instructions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Operated person on bottom (back)</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ SAFE (Week 4-6+)</td>
                    <td className="border border-gray-300 px-4 py-2">Lie on back, keep legs apart (no crossing/adduction), knees bent &lt;90°, pillow between legs if needed, partner on top controls depth/angle</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Operated person on side (non-operated side down)</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ SAFE (Week 6+)</td>
                    <td className="border border-gray-300 px-4 py-2">Lie on non-operated side, operated leg on top, pillow between legs, partner behind (spooning), very comfortable position for hip patients</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Operated person on top (kneeling)</td>
                    <td className="border border-gray-300 px-4 py-2 text-orange-600">⚠️ CAUTION (Week 8+ only)</td>
                    <td className="border border-gray-300 px-4 py-2">Only after Week 8, avoid deep hip flexion, keep hips extended, not recommended until 12 weeks for safety</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Standing/rear entry</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ SAFE (Week 6+)</td>
                    <td className="border border-gray-300 px-4 py-2">Operated person standing/bending forward slightly, partner from behind, minimal hip flexion (&lt;90°), good option for early resumption</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Missionary (operated person bottom, legs up)</td>
                    <td className="border border-gray-300 px-4 py-2 text-red-600">❌ AVOID (hip flexion &gt;90°)</td>
                    <td className="border border-gray-300 px-4 py-2">Never bring knees to chest (causes &gt;90° flexion, high dislocation risk), keep legs lower, flat on bed or bent &lt;90° only</td>
                  </tr>
                </tbody>
              </table>
              <p className="mb-3 text-gray-700"><strong>Communication with partner:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li>Discuss restrictions before resuming (partner needs to understand dislocation risk, no spontaneous position changes first 3 months)</li>
                <li>Pain is warning sign (any sharp hip pain during activity - STOP immediately, pain means you&apos;re stressing hip beyond safe range)</li>
                <li>Go slow first time (be gentle, test range of motion, build confidence over 2-3 sessions)</li>
                <li>Use pillows strategically (between legs prevents adduction, under hips prevents excessive flexion)</li>
                <li>Let partner do most movement (operated person stays relatively still, partner controls pace/depth/angle)</li>
              </ul>
              <p className="text-gray-700">
                <strong>Medical perspective:</strong> Sexual function not affected by hip replacement (no nerve damage to sexual organs, no hormonal changes, erectile function/lubrication normal). Most patients report BETTER sex life after hip replacement (no more chronic hip pain that limited intimacy for years pre-surgery). Dislocation during sex is rare (&lt;0.5%) if following position guidelines - most dislocations occur from falls, getting in/out of low chairs, not from sexual activity. Surgeon won&apos;t ask about sexual activity unless you bring it up (perfectly normal medical question - don&apos;t be embarrassed to ask specifics). Some hospitals provide illustrated position guides for post-hip replacement patients (discreet pamphlet). By 3-6 months, most patients forget they had hip surgery during intimate moments - hip feels natural, no restrictions needed long-term.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Will I need a blood transfusion during hip replacement surgery?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Blood transfusion needed in 10-30% of hip replacements depending on technique and patient factors.</strong> Details:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Transfusion rates by technique:</strong> Minimally invasive anterior approach: 5-10% (less tissue damage, less bleeding), Standard posterior approach: 15-25%, Bilateral hip replacement: 30-50% (two surgeries = more blood loss), Revision hip replacement: 30-60% (complex surgery, more bleeding)</li>
                <li><strong>Average blood loss:</strong> Total hip replacement: 300-800ml (1-2 units of blood), about 1-2 pints, Bilateral hip: 600-1,200ml (2-4 units), Revision hip: 500-1,500ml depending on complexity</li>
                <li><strong>When transfusion needed:</strong> Pre-op hemoglobin &lt;12 g/dL (anemic patients), Post-op hemoglobin &lt;8 g/dL (severe anemia symptoms - dizziness, weakness, rapid heart rate), Blood loss &gt;800ml during surgery (surgeon&apos;s judgment), Patient symptomatic (extremely tired, short of breath, chest pain)</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Blood conservation strategies (reduce transfusion need):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Pre-op optimization:</strong> Iron supplements 4 weeks before surgery (if hemoglobin 11-12, bring to 13-14), EPO injections (erythropoietin - stimulates red blood cell production, used in anemic patients, 2-3 injections pre-op), stop blood thinners 5-7 days before (aspirin, clopidogrel - resume after surgery)</li>
                <li><strong>During surgery:</strong> Tranexamic acid (TXA) injection (reduces blood loss 30-50%, standard at all top hospitals, very safe medication), Careful surgical technique (minimally invasive approach, meticulous hemostasis - stopping bleeding), Cell saver device (collects your own blood during surgery, filters and returns it - autologous transfusion)</li>
                <li><strong>After surgery:</strong> Drain blood collection (first 24 hours, usually &lt;200ml), TXA continued for 24 hours, compression stockings (reduce bleeding, prevent blood clots)</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Blood transfusion options in India:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Allogeneic transfusion (donor blood):</strong> Most common (95% of transfusions), screened for HIV, Hepatitis B/C, malaria, syphilis (very safe in India at JCI hospitals), blood type matched (O, A, B, AB, Rh), typically 1-2 units if needed</li>
                <li><strong>Autologous donation (your own blood):</strong> Donate 1-2 units of your own blood 2-4 weeks before surgery, stored and given back during/after surgery, eliminates infection risk, not common in India (logistically complex for international patients)</li>
                <li><strong>Cell saver (intra-operative blood salvage):</strong> Available at top hospitals (Fortis, Apollo, Medanta, Max), collects blood lost during surgery, washes and returns it, reduces donor blood need 50%</li>
              </ul>
              <p className="text-gray-700">
                <strong>Should you be concerned about blood transfusion?</strong> No. Blood supply at JCI-accredited hospitals in India is extremely safe (rigorous screening, infection rate &lt;0.01% for HIV/Hepatitis). Tranexamic acid (TXA) has dramatically reduced transfusion rates last 5-10 years (now standard practice, reduces need 50%+). Most patients (70-90%) do NOT need transfusion with modern techniques. If you&apos;re anemic pre-op (hemoglobin &lt;12), notify surgeon 4 weeks before (time to optimize with iron/EPO). Jehovah&apos;s Witnesses or patients refusing transfusion: Inform surgeon (they can use cell saver, TXA, EPO, minimize blood loss - bloodless hip replacement possible but requires extra precautions). Overall, blood transfusion is safe, sometimes necessary, and shouldn&apos;t deter you from hip replacement - benefits far outweigh minor transfusion risk.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Anterior vs Posterior Hip Replacement Approach - Which is better?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Both approaches excellent - choice depends on surgeon experience and patient anatomy.</strong> Detailed comparison:
              </p>
              <table className="min-w-full border-collapse border border-gray-300 mb-3">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Factor</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Anterior Approach (Front)</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Posterior Approach (Back)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Muscle Damage</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ No muscles cut (goes between muscles)</td>
                    <td className="border border-gray-300 px-4 py-2">⚠️ Gluteal muscles cut/detached then repaired</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Recovery Speed</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Faster (walk Day 1, less pain)</td>
                    <td className="border border-gray-300 px-4 py-2">⚠️ Slightly slower (walk Day 2, more muscle pain)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Hospital Stay</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ 2-3 days average</td>
                    <td className="border border-gray-300 px-4 py-2">3-5 days average</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Dislocation Risk</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Lower (1-2% lifetime risk)</td>
                    <td className="border border-gray-300 px-4 py-2">⚠️ Slightly higher (2-4% lifetime risk)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Post-Op Restrictions</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Fewer (can cross legs after 6 weeks)</td>
                    <td className="border border-gray-300 px-4 py-2">⚠️ More (no crossing legs 3 months, no bending &gt;90°)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Surgeon Learning Curve</td>
                    <td className="border border-gray-300 px-4 py-2 text-orange-600">⚠️ Steep (requires 100+ cases to master, newer technique)</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Easier (all surgeons trained, 50+ years standard approach)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Complications</td>
                    <td className="border border-gray-300 px-4 py-2">⚠️ Lateral femoral cutaneous nerve injury 10-15% (thigh numbness, temporary), femoral nerve injury &lt;1%</td>
                    <td className="border border-gray-300 px-4 py-2">⚠️ Sciatic nerve injury &lt;1%, heterotopic ossification (bone growth) 3-5%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Scar Location</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Front of hip (hidden when lying on back, 3-4 inches)</td>
                    <td className="border border-gray-300 px-4 py-2">⚠️ Side/back of hip (visible when lying down, 6-8 inches often)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Suitable For</td>
                    <td className="border border-gray-300 px-4 py-2">Younger patients (&lt;70), thin to moderate build (BMI &lt;35), primary hip replacement</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ All patients (obese, muscular, revision surgery, complex anatomy)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Success Rate</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ 97-98% (same as posterior if experienced surgeon)</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ 97-98% (gold standard, proven 50+ years)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Availability in India</td>
                    <td className="border border-gray-300 px-4 py-2">⚠️ Available at top centers only (Fortis, Max, Apollo - limited surgeons)</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Available everywhere (all surgeons perform)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Cost</td>
                    <td className="border border-gray-300 px-4 py-2">⚠️ $6,500-9,000 (specialized technique, longer OR time)</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ $5,000-7,500 (standard pricing)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Recommendation</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Excellent if surgeon very experienced (&gt;200 anterior cases)</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Reliable choice, proven results, any surgeon</td>
                  </tr>
                </tbody>
              </table>
              <p className="mb-3 text-gray-700"><strong>Which to choose?</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Choose anterior if:</strong> You want fastest recovery (important for international patients - minimize India stay), surgeon is very experienced (&gt;200 anterior cases - ask specifically), you&apos;re younger/active patient wanting quicker return to sports, you want lowest dislocation risk</li>
                <li><strong>Choose posterior if:</strong> Surgeon has more posterior experience (1,000+ posterior vs 50 anterior - go with expertise), you&apos;re obese/muscular (BMI &gt;35 - anterior technically difficult), you need revision surgery (posterior gives better exposure for complex cases), you want proven technique with 50+ years track record</li>
                <li><strong>Either approach fine if:</strong> Surgeon equally experienced in both (let surgeon choose based on your anatomy), you&apos;re average build, healthy, primary hip replacement (outcomes essentially identical at 1-2 years)</li>
              </ul>
              <p className="text-gray-700">
                <strong>Bottom line:</strong> Surgeon experience matters MORE than approach chosen. A highly experienced surgeon doing posterior (1,000+ cases) will have better outcomes than inexperienced surgeon doing anterior (50 cases). Don&apos;t choose surgeon based solely on anterior approach marketing - ask: &quot;How many anterior hip replacements have YOU personally done?&quot; (Should be &gt;200 minimum, ideally 500+). In India, most top surgeons still prefer posterior (Dr. Yash Gulati at Medanta, Dr. Rajesh Ahlawat at Fortis Bangalore) with excellent outcomes. Some surgeons trained in USA/Europe offer anterior (Max Hospital Delhi, Fortis Gurgaon). Both approaches result in pain-free, functional hip at 6 months - recovery speed difference is only 1-2 weeks. Long-term (5-10 years), no difference in outcomes, implant survival, or patient satisfaction between approaches.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>When can I fly after hip replacement surgery?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Safe to fly 10-14 days after hip replacement with precautions.</strong> Detailed timeline:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Minimum wait time:</strong> 10 days after surgery (wound healed, stitches removed or dissolving well, pain controlled with oral meds, can walk 100+ meters with walker/crutches, surgeon clearance obtained)</li>
                <li><strong>Recommended wait time:</strong> 14-21 days (more comfortable flight, less pain/swelling, better mobility in airport, can walk without walker - just cane, less deep vein thrombosis DVT risk)</li>
                <li><strong>Too early to fly (&lt;7 days):</strong> High DVT risk (blood clot), wound not healed (infection risk on plane), pain too severe for long flight, can&apos;t walk through airport safely</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Flying precautions to prevent DVT (blood clots):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Blood thinner:</strong> Continue low molecular weight heparin (LMWH) injections or rivaroxaban tablets for 6 weeks post-op (don&apos;t stop early just because flying home - DVT risk lasts 6 weeks, not just first week)</li>
                <li><strong>Compression stockings:</strong> Wear knee-high medical compression stockings during flight (20-30 mmHg pressure, provided by hospital)</li>
                <li><strong>Walk every hour:</strong> Walk up/down aisle every 60 minutes (keeps blood flowing, prevents pooling in legs, ask for aisle seat)</li>
                <li><strong>Ankle exercises:</strong> When seated, pump ankles up/down 10 times every 30 minutes, rotate ankles clockwise/counter-clockwise</li>
                <li><strong>Hydration:</strong> Drink water every hour (dehydration thickens blood, increases clot risk, avoid alcohol/caffeine - dehydrating)</li>
                <li><strong>Seat selection:</strong> Aisle seat essential (need to walk frequently, easier to stand/stretch, business class better - more leg room, can elevate operated leg)</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Airport navigation after hip replacement:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Wheelchair service:</strong> Request at booking (free at most airports, attendant pushes you to gate, you can walk short distances as comfortable but have wheelchair for long terminals)</li>
                <li><strong>Priority boarding:</strong> Inform airline of recent surgery (board early, extra time to settle in seat, avoid being bumped in aisle by rush)</li>
                <li><strong>Metal detector:</strong> Hip implant may trigger (carry surgery card from hospital, inform security before screening, hand wand check or full-body scanner available)</li>
                <li><strong>Carry-on medications:</strong> Pack pain meds, blood thinner in carry-on (checked luggage lost = disaster, include prescriptions in English)</li>
                <li><strong>Walker/crutches:</strong> Airline allows as medical equipment (doesn&apos;t count as carry-on, can gate-check, staff will help)</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Surgeon clearance letter (bring copy):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li>Date of surgery and procedure performed (total hip replacement, right/left)</li>
                <li>Cleared for air travel (date of clearance)</li>
                <li>Implant type and serial number (for airport security)</li>
                <li>Current medications (blood thinner, pain meds)</li>
                <li>Emergency contact in India and home country</li>
              </ul>
              <p className="text-gray-700">
                <strong>GCC patient tips for flying home:</strong> Delhi/Mumbai to Dubai: 3-3.5 hour flight (manageable, walk once mid-flight), Delhi to Riyadh: 4-4.5 hours (walk twice - at 1.5hr and 3hr marks), Book business class if possible (fully reclining seat helps, extra space to elevate leg on ottoman/footrest, easier boarding/deplaning), Arrive airport 3 hours early (extra time for wheelchair service, priority boarding, security with implant). Most GCC patients fly home Day 12-16 post-surgery very comfortably. Some extend to 3-4 weeks for extra physiotherapy (ideal but not necessary - can continue physio at home). No increased risk of complications flying early as long as: wound healed, no signs of infection (fever, redness, drainage), pain controlled, on blood thinner, following DVT precautions. After arriving home, continue physiotherapy 3x/week for 6-12 weeks (hospital provides exercise plan, can send to your home physiotherapist, or virtual sessions with India physiotherapist via video call).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Can I kneel or squat after hip replacement surgery?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Kneeling: Yes after 3 months. Deep squatting: Avoid forever.</strong> Detailed breakdown:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Kneeling timeline:</strong> First 3 months: Avoid kneeling (high dislocation risk - kneeling requires &gt;90° hip flexion), Months 3-6: Can kneel with caution (one knee at a time, use cushion under knees, avoid prolonged kneeling), After 6 months: Kneeling safe (hip fully healed, capsule scarred - stable, dislocation risk &lt;1%)</li>
                <li><strong>Kneeling for prayer (important for Muslim patients):</strong> First 3 months: Pray sitting in chair (permissible in Islam for medical reasons), use raised prayer table (keeps hips &lt;90° flexion), Months 3-6+: Can resume floor prayer with modifications (use thick cushion under knees, hands on chair for support getting up/down, take extra time - no rushing), most patients comfortable with floor prayer by Month 6</li>
                <li><strong>Kneeling for gardening/chores:</strong> After 3 months okay briefly (use knee pads, gardening stool better - keeps hips higher, limit to 10-15 minutes at a time), long-term: Kneeling is safe but may be uncomfortable (some patients report knee/hip stiffness after prolonged kneeling - not dangerous, just uncomfortable)</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Squatting restrictions:</strong></p>
              <table className="min-w-full border-collapse border border-gray-300 mb-3">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Squat Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Allowed?</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Guidance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Partial squat (knees bent &lt;90°)</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ SAFE after 6 weeks</td>
                    <td className="border border-gray-300 px-4 py-2">Like sitting in chair, hips bent &lt;90°, safe for life, good for leg strengthening physiotherapy exercises</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Deep squat (knees &gt;90°, buttocks toward heels)</td>
                    <td className="border border-gray-300 px-4 py-2 text-red-600">❌ AVOID FOREVER</td>
                    <td className="border border-gray-300 px-4 py-2">Causes &gt;120° hip flexion, high dislocation risk, even after 1 year - permanently avoid</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Asian squat (flat-footed deep squat)</td>
                    <td className="border border-gray-300 px-4 py-2 text-red-600">❌ AVOID FOREVER</td>
                    <td className="border border-gray-300 px-4 py-2">Common in India for toilet/cooking, but causes extreme hip flexion (&gt;130°), use raised Western toilet, cooking stool instead</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Squatting to pick up object</td>
                    <td className="border border-gray-300 px-4 py-2 text-orange-600">⚠️ Use modified technique</td>
                    <td className="border border-gray-300 px-4 py-2">Don&apos;t squat down - use grabber tool (long-handled reacher), or kneel on one knee (good knee down, operated hip stays extended), or sit in chair and lean forward</td>
                  </tr>
                </tbody>
              </table>
              <p className="mb-3 text-gray-700"><strong>Lifestyle modifications for squatting restrictions:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Toilets:</strong> Use Western raised toilet seat forever (Indian squat toilets permanently avoid - install Western toilet at home, use seated public restrooms), raised toilet seat adds 3-4 inches height (keeps hips &lt;90°)</li>
                <li><strong>Picking up objects:</strong> Use grabber/reacher tool (24-32 inch long-handled tool, available for ₹500-1,000 / $10-15), or ask someone to pick up, or use dustpan with long handle</li>
                <li><strong>Cooking:</strong> Use high stool in kitchen (traditional Indian cooking involves floor sitting - use counter height stool instead), or stand at counter for food prep</li>
                <li><strong>Washing floors:</strong> Use mop with long handle (avoid squatting to wash, hire help if needed - small cost vs dislocation risk)</li>
                <li><strong>Putting on shoes/socks:</strong> Use sock aid device, long-handled shoe horn (avoid bending down to tie shoes - slip-on shoes easiest)</li>
              </ul>
              <p className="text-gray-700">
                <strong>Why deep squatting dangerous:</strong> Deep squat causes extreme hip flexion (&gt;120-130°), brings femoral head to edge of socket (acetabular cup), one more inch of movement = dislocation (femoral head pops out of socket), dislocation requires emergency reduction (ER visit, sedation, manipulation to pop back in - very painful), 50% of patients who dislocate once will dislocate again (recurrent instability), may need revision surgery with constrained implant (restricts range of motion, less comfortable). Bottom line: You can live a full, active, comfortable life without deep squatting - it&apos;s the one permanent restriction worth following religiously. Kneeling is okay after 3-6 months, but deep squatting stay away from forever. 99% of daily activities don&apos;t require deep squat - with minor adaptations (raised toilet, grabber tool, cooking stool), most patients never miss squatting ability.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Internal Links */}
      <InternalLinks
        title="Related Treatment Information"
        links={[
          { title: "Knee Replacement Cost India", href: "/blog/knee-replacement-cost-india-vs-world", description: "Compare knee replacement costs and success rates" },
          { title: "Best Orthopedic Hospitals", href: "/hospitals", description: "Find top-rated orthopedic hospitals in India" },
          { title: "Free Consultation", href: "/consultation", description: "Get personalized treatment plan from experts" }
        ]}
        variant="compact"
      />

      {/* Social Share */}
      <SocialShare
        title="Hip Replacement Surgery in India 2025: Cost, Best Hospitals & Recovery"
        url="/treatments/hip-replacement-india"
        description="Save 70-80% on hip replacement surgery in India. Total hip: $5,000-7,500 vs $40,000-60,000 in USA. 95% success rate at JCI hospitals."
      />

      {/* Related Articles */}
      <RelatedArticles articles={DIABETES_RELATED_ARTICLES} />

      {/* Final CTA */}
      <Card className="border-primary-200 bg-primary-50">
        <CardContent className="pt-6 text-center">
          <h3 className="mb-4 text-2xl font-bold text-gray-900">
            Ready to Get World-Class Hip Replacement in India?
          </h3>
          <p className="mb-6 text-gray-700">
            Get free consultation, personalized treatment plan, and cost estimate from top orthopedic surgeons.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/consultation">
              <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                Get Free Consultation
              </Button>
            </Link>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                WhatsApp Us Now
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

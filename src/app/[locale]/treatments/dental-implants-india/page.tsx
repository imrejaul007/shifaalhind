import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { Testimonials, TREATMENT_TESTIMONIALS } from '@/components/testimonials/testimonials';
import { TrustBadges } from '@/components/trust-badges/trust-badges';
import { BreadcrumbSchema } from '@/components/seo/breadcrumb-schema';
import { MedicalProcedureSchema } from '@/components/seo/medical-procedure-schema';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Dental Implants in India 2025: Cost, Best Clinics, Success Rate | Single & Full Mouth',
  description: 'Complete guide to dental implants in India. Compare single tooth ($500-800) vs full mouth implants ($4,000-7,000). Top clinics, 95-98% success rate, save 70-80% vs USA. Free consultation.',
  keywords: [
    'dental implants india',
    'dental implants cost india',
    'single tooth implant india',
    'full mouth dental implants india',
    'best dental implants india',
    'dental implant clinics india',
    'dental implants delhi',
    'dental implants mumbai',
    'dental implants bangalore',
    'titanium dental implants',
    'زراعة الأسنان في الهند',
    'تكلفة زراعة الأسنان في الهند',
    'أفضل عيادات زراعة الأسنان في الهند',
    'زراعة الأسنان الكاملة في الهند'
  ],
};

export default function DentalImplantsIndiaPage() {
  return (
    <div className="container mx-auto px-4 p
      {/* Breadcrumb Schema for SEO */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://shifaalhind.onrender.com' },
        { name: 'Treatments', url: 'https://shifaalhind.onrender.com/treatments' },
        { name: 'Dental Implants in India', url: 'https://shifaalhind.onrender.com/treatments/dental-implants-india' }
      ]} />

      {/* Medical Procedure Schema for SEO */}
      <MedicalProcedureSchema
        name="Dental Implants"
        description="Dental implant surgery replaces tooth roots with metal posts and replaces damaged or missing teeth with artificial teeth that look and function like real ones."
        procedureType="SurgicalProcedure"
        bodyLocation="Jaw and Teeth"
        preparation="Comprehensive dental exam, X-rays or 3D imaging, treatment plan, bone grafting if needed."
        followup="Regular check-ups every 3-6 months for the first year, then annually. Professional cleaning every 6 months."
        url="https://shifaalhind.onrender.com/treatments/dental-implants-india"
      />
y-8">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
          Dental Implants in India: World-Class Quality at 70-80% Lower Cost
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-700">
          Get permanent dental implants from India&apos;s top JCI-accredited dental clinics. Single tooth implants from <strong>$500-800</strong>, full mouth implants from <strong>$4,000-7,000</strong>. 95-98% success rate with lifetime warranty.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/consultation">
            <Button size="lg">Get Free Consultation</Button>
          </Link>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline">WhatsApp Us</Button>
          </a>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="mb-12">
        <div className="grid gap-6 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary-600">$500-800</div>
              <p className="text-sm text-gray-600">Single Tooth Implant</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary-600">95-98%</div>
              <p className="text-sm text-gray-600">Success Rate</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary-600">70-80%</div>
              <p className="text-sm text-gray-600">Cost Savings</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary-600">3-6 months</div>
              <p className="text-sm text-gray-600">Complete Recovery</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Dental Implants Cost: India vs USA vs UK vs UAE</h2>
        <Card>
          <CardContent className="overflow-x-auto pt-6">
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
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Single Tooth Implant (Titanium)</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-green-600">$500 - $800</td>
                  <td className="border border-gray-300 px-4 py-2">$3,000 - $4,500</td>
                  <td className="border border-gray-300 px-4 py-2">$2,500 - $4,000</td>
                  <td className="border border-gray-300 px-4 py-2">$2,000 - $3,500</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">75-83%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Single Tooth Implant (Zirconia)</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-green-600">$800 - $1,200</td>
                  <td className="border border-gray-300 px-4 py-2">$4,000 - $6,000</td>
                  <td className="border border-gray-300 px-4 py-2">$3,500 - $5,500</td>
                  <td className="border border-gray-300 px-4 py-2">$3,000 - $4,500</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">73-80%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Full Mouth Implants (All-on-4)</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-green-600">$4,000 - $6,000</td>
                  <td className="border border-gray-300 px-4 py-2">$20,000 - $30,000</td>
                  <td className="border border-gray-300 px-4 py-2">$18,000 - $25,000</td>
                  <td className="border border-gray-300 px-4 py-2">$15,000 - $22,000</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">73-80%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Full Mouth Implants (All-on-6)</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-green-600">$5,000 - $7,000</td>
                  <td className="border border-gray-300 px-4 py-2">$25,000 - $35,000</td>
                  <td className="border border-gray-300 px-4 py-2">$22,000 - $30,000</td>
                  <td className="border border-gray-300 px-4 py-2">$18,000 - $25,000</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">71-80%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Implant-Supported Bridge (3-4 teeth)</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-green-600">$1,500 - $2,500</td>
                  <td className="border border-gray-300 px-4 py-2">$8,000 - $12,000</td>
                  <td className="border border-gray-300 px-4 py-2">$7,000 - $10,000</td>
                  <td className="border border-gray-300 px-4 py-2">$6,000 - $9,000</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">72-81%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Bone Grafting (if needed)</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-green-600">$300 - $600</td>
                  <td className="border border-gray-300 px-4 py-2">$1,500 - $3,000</td>
                  <td className="border border-gray-300 px-4 py-2">$1,200 - $2,500</td>
                  <td className="border border-gray-300 px-4 py-2">$1,000 - $2,000</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">70-80%</td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
      </section>

      {/* What's Included */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">What&apos;s Included in India Dental Implant Packages</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>✅ Pre-Procedure (Day 1-2)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Consultation with implant dentist/prosthodontist</li>
                <li>Digital X-rays and 3D CBCT scan</li>
                <li>Bone density assessment</li>
                <li>Treatment plan and cost breakdown</li>
                <li>Pre-op photos and measurements</li>
                <li>Blood tests (if required for surgery)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>✅ Implant Placement Day (Day 3-7)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Local anesthesia or IV sedation</li>
                <li>Titanium or zirconia implant placement</li>
                <li>Bone grafting (if jawbone inadequate)</li>
                <li>Surgical guide for precision placement</li>
                <li>Post-op medications (antibiotics, painkillers)</li>
                <li>Temporary crown/bridge (if immediate loading)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>✅ Healing Period (3-6 months)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Osseointegration (implant fuses with jawbone)</li>
                <li>Follow-up X-rays to check healing</li>
                <li>Virtual consultations every 4-6 weeks</li>
                <li>Temporary denture/bridge provided</li>
                <li>Dietary guidance and care instructions</li>
                <li>WhatsApp support 24/7 from clinic</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>✅ Crown Placement (After Healing)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Abutment placement surgery (minor procedure)</li>
                <li>Impressions for permanent crown/bridge</li>
                <li>Custom porcelain or zirconia crown fabrication</li>
                <li>Crown fitting and bite adjustment</li>
                <li>Final X-rays and polishing</li>
                <li>1-year warranty on implant and crown</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Titanium vs Zirconia */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Titanium vs Zirconia Implants: Which to Choose?</h2>
        <Card>
          <CardContent className="overflow-x-auto pt-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Factor</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Titanium Implants</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Zirconia Implants</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Material</td>
                  <td className="border border-gray-300 px-4 py-2">Medical-grade titanium alloy (Ti-6Al-4V)</td>
                  <td className="border border-gray-300 px-4 py-2">Ceramic (yttria-stabilized zirconia)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Success Rate</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600">✅ 95-98% (gold standard, 40+ years data)</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600">✅ 92-95% (newer, less long-term data)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Aesthetics</td>
                  <td className="border border-gray-300 px-4 py-2 text-orange-600">⚠️ Gray metal may show through gums</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600">✅ White color, no gray show-through</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Biocompatibility</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Excellent (99.9% no allergic reaction)</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Excellent (100% metal-free, hypoallergenic)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Strength</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Extremely strong, can withstand heavy bite force</td>
                  <td className="border border-gray-300 px-4 py-2 text-orange-600">⚠️ Strong but slightly more brittle than titanium</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Cost</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600">✅ $500-800 per tooth</td>
                  <td className="border border-gray-300 px-4 py-2">$800-1,200 per tooth (20-40% more expensive)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Best For</td>
                  <td className="border border-gray-300 px-4 py-2">Molars, full mouth implants, patients with thick gums</td>
                  <td className="border border-gray-300 px-4 py-2">Front teeth, patients with thin gums, metal allergies</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Recommendation</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Recommended for most patients (proven track record)</td>
                  <td className="border border-gray-300 px-4 py-2">Good for front teeth aesthetics, metal-sensitive patients</td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
      </section>

      {/* Top Clinics */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Top 5 Dental Implant Clinics in India</h2>
        <div className="space-y-6">
          
      {/* Testimonials Section */}
      <Testimonials
        testimonials={TREATMENT_TESTIMONIALS['dental']}
        title="Success Stories from Our Dental Implants Patients"
        subtitle="Real transformations from GCC patients who achieved life-changing results"
      />

      {/* Trust Badges Section */}
      <TrustBadges />

      <Card className="border-primary-200 bg-primary-50">
            <CardHeader>
              <CardTitle className="text-2xl">1. Sabka Dentist (Mumbai, Delhi, Bangalore, 180+ Clinics)</CardTitle>
              <p className="text-sm text-gray-600">🏆 #1 Dental Chain in India | 15,000+ Implants Annually</p>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="mb-2"><strong>Specialty:</strong> Single tooth implants, All-on-4/6 full mouth implants, Immediate loading implants</p>
                <p className="mb-2"><strong>Success Rate:</strong> 97% implant survival rate, 95% patient satisfaction</p>
                <p className="mb-2"><strong>Key Doctors:</strong> Dr. Anurag Bhargava (Chief Implantologist, 20+ years), Dr. Taruna Bhargava (Prosthodontist)</p>
                <p className="mb-2"><strong>Technology:</strong> 3D CBCT imaging, guided surgery, CAD/CAM crowns, Swiss/German implants (Straumann, Nobel Biocare)</p>
                <p className="mb-2"><strong>Cost:</strong> Single tooth: $550-750 | Full mouth All-on-4: $4,500-5,500</p>
                <p><strong>Why Choose:</strong> Most affordable without compromising quality. 180+ locations across India. 1-year implant warranty. International patient coordinators available.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">2. Clove Dental (Delhi NCR, Bangalore, 300+ Clinics)</CardTitle>
              <p className="text-sm text-gray-600">🥈 Largest Dental Chain in India | 20,000+ Implants Annually</p>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="mb-2"><strong>Specialty:</strong> Advanced implantology, full mouth rehabilitation, zygomatic implants (for severe bone loss)</p>
                <p className="mb-2"><strong>Success Rate:</strong> 96% implant survival, 93% patient satisfaction</p>
                <p className="mb-2"><strong>Key Doctors:</strong> Dr. Aman Sharma (25+ years implant experience), Dr. Priya Mehta (Cosmetic dentistry)</p>
                <p className="mb-2"><strong>Technology:</strong> 3D digital smile design, robotic-guided implant placement, same-day crowns, premium implants (Straumann, Osstem)</p>
                <p className="mb-2"><strong>Cost:</strong> Single tooth: $600-850 | All-on-6: $5,500-6,500</p>
                <p><strong>Why Choose:</strong> Most clinics nationwide. Corporate backing ensures quality standards. Advanced technology. 5-year warranty on premium implants.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">3. Dr. Teeth Dental Care (Hyderabad, 30+ Clinics)</CardTitle>
              <p className="text-sm text-gray-600">🥉 Best Regional Chain | 5,000+ Implants Annually</p>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="mb-2"><strong>Specialty:</strong> Full mouth implants, mini implants for denture stabilization, immediate loading</p>
                <p className="mb-2"><strong>Success Rate:</strong> 98% implant survival (highest in South India)</p>
                <p className="mb-2"><strong>Key Doctors:</strong> Dr. Madhusudhan Reddy (Founder, 30+ years), Dr. Srikanth (Prosthodontist, 15+ years)</p>
                <p className="mb-2"><strong>Technology:</strong> Laser dentistry, digital impressions, in-house lab for faster crowns, premium Swiss implants</p>
                <p className="mb-2"><strong>Cost:</strong> Single tooth: $650-900 | Full mouth: $5,000-6,000</p>
                <p><strong>Why Choose:</strong> Highest success rates in South India. In-house dental lab (faster turnaround). Excellent post-op care. 2-year implant warranty.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">4. Apollo White Dental (Bangalore, Hyderabad, Chennai, 80+ Clinics)</CardTitle>
              <p className="text-sm text-gray-600">Part of Apollo Hospitals Group | 8,000+ Implants Annually</p>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="mb-2"><strong>Specialty:</strong> Premium dental implants, cosmetic implantology, full mouth reconstruction</p>
                <p className="mb-2"><strong>Success Rate:</strong> 97% implant survival, 94% patient satisfaction</p>
                <p className="mb-2"><strong>Key Doctors:</strong> Dr. Anil Reddy (Chief Implantologist), Dr. Shalini Kumar (Aesthetic dentistry)</p>
                <p className="mb-2"><strong>Technology:</strong> 4D cone beam CT, computer-guided surgery, Swiss implants (Nobel Biocare, Straumann), zirconia options</p>
                <p className="mb-2"><strong>Cost:</strong> Single tooth: $700-1,000 | Zirconia: $900-1,200 | Full mouth: $5,500-7,000</p>
                <p><strong>Why Choose:</strong> Premium quality backed by Apollo Hospitals. International standard protocols. Excellent for GCC patients (Arabic coordinators, halal food).</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">5. Dental Roots (Mumbai, 12 Clinics)</CardTitle>
              <p className="text-sm text-gray-600">Premium Boutique Chain | 3,000+ Implants Annually</p>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="mb-2"><strong>Specialty:</strong> High-end cosmetic implantology, Hollywood smile makeovers, zirconia implants</p>
                <p className="mb-2"><strong>Success Rate:</strong> 98% implant survival, 96% patient satisfaction (highest in Mumbai)</p>
                <p className="mb-2"><strong>Key Doctors:</strong> Dr. Hema Singh (25+ years, USA trained), Dr. Rajesh Bhatia (Prosthodontist, 18+ years)</p>
                <p className="mb-2"><strong>Technology:</strong> 3D smile simulation, all-zirconia solutions, CAD/CAM milling, premium German implants (Camlog, Ankylos)</p>
                <p className="mb-2"><strong>Cost:</strong> Single tooth: $800-1,100 | Zirconia: $1,000-1,400 | Full mouth: $6,000-8,000</p>
                <p><strong>Why Choose:</strong> Best for cosmetic results and front teeth. Luxury clinic experience. Premium materials only. Lifetime warranty on implants with proper care.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Dental Implant Recovery Timeline</h2>
        <div className="space-y-4">
          <Card className="border-primary-200 bg-primary-50">
            <CardHeader>
              <CardTitle>Day 1-3: Immediate Post-Op</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Swelling and bruising</strong> around implant site (normal)</li>
                <li><strong>Pain manageable</strong> with prescribed painkillers</li>
                <li><strong>Soft diet only</strong> (soups, smoothies, yogurt, mashed potatoes)</li>
                <li><strong>Avoid:</strong> Hot foods, alcohol, smoking, hard/crunchy foods</li>
                <li><strong>Rest required:</strong> No strenuous activities for 3 days</li>
                <li><strong>Can fly home</strong> after 3-5 days with surgeon clearance</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Week 1-2: Early Healing</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Suture removal</strong> after 7-10 days (can be done at home dentist)</li>
                <li><strong>Swelling subsides</strong> significantly by Day 7</li>
                <li><strong>Return to normal diet</strong> gradually (still avoid hard foods on implant side)</li>
                <li><strong>Resume work</strong> after 2-3 days (office work)</li>
                <li><strong>Oral hygiene:</strong> Gentle brushing, saltwater rinses 3x daily</li>
                <li><strong>Virtual follow-up</strong> with clinic via WhatsApp/video call</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Month 1-3: Osseointegration Phase</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Implant fuses with jawbone</strong> (osseointegration process)</li>
                <li><strong>No pain or discomfort</strong> during this period</li>
                <li><strong>Temporary crown/bridge</strong> worn to maintain appearance</li>
                <li><strong>X-ray checkup</strong> at Month 3 to confirm healing (can do locally)</li>
                <li><strong>Normal activities</strong> resume fully after Month 1</li>
                <li><strong>Avoid excessive force</strong> on implant area (no hard nuts, ice chewing)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Month 3-6: Crown Placement Preparation</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Healing complete</strong> for most patients by Month 3-4</li>
                <li><strong>Return to India</strong> for abutment and crown placement (or complete remotely with local dentist coordination)</li>
                <li><strong>Abutment surgery:</strong> Minor 30-minute procedure to expose implant</li>
                <li><strong>Impressions taken</strong> for custom permanent crown fabrication</li>
                <li><strong>Temporary crown</strong> replaced with permanent porcelain/zirconia crown</li>
                <li><strong>Final X-rays and adjustments</strong> to ensure perfect fit and bite</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary-200 bg-primary-50">
            <CardHeader>
              <CardTitle>Month 6+: Final Results & Maintenance</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Implant fully functional</strong> - can eat anything (even hard foods)</li>
                <li><strong>Looks and feels like natural tooth</strong> - no discomfort</li>
                <li><strong>Lifetime durability</strong> with proper care (95% last 15+ years)</li>
                <li><strong>Maintenance:</strong> Brush 2x daily, floss, regular dental cleanings every 6 months</li>
                <li><strong>Annual checkup recommended</strong> (can be done locally, send X-rays to India clinic)</li>
                <li><strong>Warranty active:</strong> 1-2 years on implant, lifetime on premium implants with proper care</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Schema for Rich Snippets */}
      <FAQSchema faqs={[
        { question: "How much do dental implants cost in India?", answer: "Dental implants in India cost $500-800 for single tooth (titanium), $800-1,200 for zirconia, $4,000-6,000 for full mouth All-on-4, and $5,000-7,000 for All-on-6. This is 70-80% cheaper than USA ($3,000-4,500 per tooth, $20,000-35,000 full mouth). Price includes consultation, 3D CBCT scan, implant placement, bone grafting if needed, temporary crown, healing checkups, permanent crown, and 1-year warranty." },
        { question: "What is the success rate of dental implants in India?", answer: "Dental implant success rate in India is 95-98% at top JCI-accredited clinics. Success means implant fuses with jawbone (osseointegration) and lasts 15+ years. Top clinics like Sabka Dentist (97%), Clove Dental (96%), Dr. Teeth (98%) have international-standard success rates matching USA/Europe. Factors affecting success: surgeon experience, proper oral hygiene, no smoking, adequate bone density, and following post-op care instructions." },
        { question: "How long do dental implants last in India?", answer: "Dental implants in India last 15-25+ years with proper care, same as USA/Europe. Studies show: 95% survive 10+ years, 90% survive 15+ years, 85% last 20+ years. Implants can last lifetime if: Good oral hygiene (brush/floss daily), Regular dental cleanings every 6 months, No smoking, Avoid excessive force (hard candy, ice), Proper bone density maintained. Premium implants (Straumann, Nobel Biocare) have lifetime warranty with proper care at top clinics." },
        { question: "Can I get dental implants done in one trip to India?", answer: "No, dental implants require 2 trips to India or 1 long stay (4-6 months). Standard timeline: Trip 1 (7-10 days): Consultation, scans, implant placement surgery, healing starts, temporary crown/denture provided, return home. Healing period (3-6 months at home): Osseointegration (implant fuses with bone), virtual follow-ups via WhatsApp. Trip 2 (7-10 days): Abutment placement, permanent crown fabrication and fitting, final adjustments. Total stay: 14-20 days over 4-6 months. Immediate loading implants (same-day teeth) available for full mouth cases." },
        { question: "What if I have bone loss - can I still get implants in India?", answer: "Yes, bone loss doesn't disqualify you from dental implants in India. Options available: Bone grafting ($300-600 per site): Adds bone material to strengthen jawbone, heals in 3-6 months before implant placement. Sinus lift ($500-800): For upper jaw bone loss, lifts sinus membrane and adds bone. All-on-4 implants: Angled placement uses existing bone, avoids grafting in many cases. Zygomatic implants: Anchor in cheekbone for severe upper jaw bone loss ($8,000-12,000 full mouth). Mini implants: Smaller diameter for denture stabilization when bone inadequate for standard implants. 3D CBCT scan during consultation determines best approach for your bone condition." },
        { question: "Are Indian dentists qualified to do dental implants?", answer: "Yes, top Indian implant dentists are highly qualified with international training. Qualifications include: MDS (Master of Dental Surgery) in Prosthodontics or Oral Surgery (3-year specialization), Fellowship in Implantology from USA/Europe (ICOI, AO, ITI), 10-20+ years implant experience, 200-500+ implants placed annually. Many trained at: University of California, New York University College of Dentistry, King's College London, Goethe University Frankfurt. Top clinics use same implant brands as USA: Straumann (Swiss), Nobel Biocare (Swedish), Osstem (Korean FDA approved). JCI accreditation ensures international standards." },
        { question: "What are the risks of dental implants in India?", answer: "Dental implant risks in India are same as anywhere (1-3% complication rate at top clinics). Possible risks: Infection (1-2%): Prevented with antibiotics and proper hygiene. Implant failure (2-5%): Implant doesn't integrate with bone, requires removal and re-implant after healing. Nerve damage (<1%): Temporary numbness if implant placed too deep (rare with 3D planning). Sinus issues (<1%): For upper jaw implants placed too close to sinus. Bone loss around implant (2-3%): If oral hygiene poor or smoking. Top clinics minimize risks with: 3D CBCT planning, computer-guided surgery, experienced surgeons (500+ implants annually), sterile protocols, post-op follow-up. Most complications treatable if addressed early." },
        { question: "How do I choose the best dental implant clinic in India?", answer: "Choose best dental implant clinic in India by checking: 1. Qualifications: MDS in Prosthodontics/Oral Surgery, fellowship in implantology, 10+ years experience. 2. Success rate: Ask for data (should be 95%+). 3. Technology: 3D CBCT scan, guided surgery, CAD/CAM crowns, premium implants (Straumann, Nobel Biocare). 4. Implant brands: Swiss/German/Korean FDA-approved brands only (avoid Chinese generic implants). 5. Accreditation: JCI or NABH accreditation ensures quality standards. 6. Warranty: Minimum 1 year on implants, 5+ years on premium implants. 7. Patient reviews: Google reviews, international patient testimonials. 8. Post-op support: 24/7 WhatsApp support, virtual follow-ups, coordination with home dentist. Top recommendations: Sabka Dentist (best value), Clove Dental (most clinics), Dr. Teeth (highest success rate), Apollo White (premium), Dental Roots (cosmetic excellence)." }
      ]} />

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Can I eat normally with dental implants?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Yes! After full healing (6 months), dental implants function exactly like natural teeth. You can eat anything - hard foods, sticky foods, crunchy foods, etc. Implants are stronger than natural teeth and won&apos;t decay. During healing (first 3 months), stick to soft foods on the implant side to avoid disrupting osseointegration.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Do dental implants look natural?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Yes, dental implants look completely natural. The crown (visible part) is custom-made from porcelain or zirconia to match your natural teeth color, shape, and size. Even dentists can&apos;t tell the difference between implants and natural teeth. For front teeth, zirconia implants ($800-1,200) are recommended over titanium as they prevent any gray show-through if gums recede.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Is dental implant surgery painful?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                No, dental implant surgery is not painful during the procedure (done under local anesthesia or IV sedation). Most patients report feeling pressure but no pain. Post-surgery: Mild to moderate discomfort for 3-5 days (manageable with painkillers). Swelling and bruising are normal for 5-7 days. Pain level similar to tooth extraction. By Day 10, most patients have no pain. Much less painful than patients expect.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Can I get full mouth implants in one day in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Yes, &quot;Teeth in a Day&quot; (immediate loading) is available for full mouth implants using All-on-4 or All-on-6 technique. Same-day process: Morning (9am-12pm): Implant placement surgery under IV sedation. Afternoon (2pm-5pm): Temporary acrylic teeth fabricated and attached to implants. Evening: Leave clinic with functional temporary teeth same day. After 3-6 months healing: Return for permanent porcelain/zirconia teeth. Cost: $5,000-8,000 for same-day full mouth (both upper and lower jaws). Available at Sabka Dentist, Clove Dental, and Apollo White.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What is the minimum age for dental implants?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3">
                <strong>Minimum age: 18-21 years</strong> (after jaw growth completes). Age considerations:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Under 18:</strong> Not recommended (jaw still growing, implant position shifts)</li>
                <li><strong>18-21 years:</strong> Case-by-case basis (women 18+, men 21+, confirm growth complete via X-ray)</li>
                <li><strong>21+ years:</strong> Ideal age, jaw growth complete, implants stable</li>
                <li><strong>No upper age limit:</strong> 70+ year olds get implants successfully if healthy</li>
                <li><strong>Health matters more than age:</strong> Good bone density, no uncontrolled diabetes, non-smoker</li>
              </ul>
              <p className="mt-3">
                Youngest patient at top clinics: 18 (trauma case). Oldest: 87 (full mouth All-on-4). Surgeon evaluates bone quality and health, not just age.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Can I smoke after getting dental implants?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3">
                <strong>No, smoking is the #1 risk factor for implant failure.</strong> Smoking reduces success rate from 95% to 85% or lower. Impact:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Before surgery:</strong> Stop 2-4 weeks before (improves healing, reduces infection risk)</li>
                <li><strong>After surgery:</strong> Absolutely NO smoking for minimum 2-3 months (osseointegration critical period)</li>
                <li><strong>Long-term:</strong> Quit permanently for best results (smoking causes bone loss around implants over time)</li>
                <li><strong>Vaping equally harmful:</strong> Nicotine constricts blood vessels, delays healing</li>
                <li><strong>Failure rate:</strong> Smokers have 2-3× higher implant failure rate vs non-smokers</li>
              </ul>
              <p className="mt-3">
                If you can&apos;t quit: Some clinics refuse implants for active smokers. Others proceed with signed consent acknowledging higher risk. Nicotine patches/gum okay (no smoke/heat damage). Quitting smoking is most important thing you can do for implant success.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>When can I fly home after dental implant surgery?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3">
                <strong>Safe to fly home 3-5 days after implant surgery</strong> (after surgeon clearance). Timeline by procedure:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Single tooth implant:</strong> Fly after 3 days (minimal surgery, quick healing)</li>
                <li><strong>Multiple implants (2-4):</strong> Fly after 4-5 days (more swelling, need extra healing time)</li>
                <li><strong>Full mouth implants:</strong> Fly after 5-7 days (major surgery, ensure bleeding stopped, swelling manageable)</li>
                <li><strong>With bone grafting:</strong> Fly after 5-7 days (bone graft needs stability before air pressure changes)</li>
                <li><strong>With sinus lift:</strong> Fly after 7-10 days (avoid cabin pressure affecting sinus)</li>
              </ul>
              <p className="mt-3">
                <strong>Flying concerns addressed:</strong> Cabin pressure won&apos;t damage implants (implants securely placed in bone). Pack extra painkillers and antibiotics in carry-on. Clinic provides post-op medications for 2 weeks. Schedule 24-hour post-op checkup before flying. Bring surgeon&apos;s clearance letter for airline/immigration.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What if dental implants fail - is it covered?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3">
                <strong>Top clinics offer 1-2 year warranty</strong> on implant failures (not patient fault). Coverage details:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Covered (FREE re-implant):</strong> Implant doesn&apos;t integrate (2-5% chance), infection not caused by poor hygiene, surgical complications, implant defect/fracture</li>
                <li><strong>NOT covered:</strong> Failure due to smoking, poor oral hygiene (no brushing/flossing), trauma/accident, patient ignores post-op instructions, bone loss from medical conditions (uncontrolled diabetes)</li>
                <li><strong>Standard warranty:</strong> 1 year on standard implants, 2 years on premium implants (Straumann, Nobel Biocare), 5 years on All-on-4/6 full mouth (some clinics)</li>
                <li><strong>Lifetime warranty:</strong> Available at premium clinics (Dental Roots, Apollo White) if: Annual checkups maintained, X-rays submitted yearly, proper hygiene documented</li>
              </ul>
              <p className="mt-3">
                <strong>Failure signs:</strong> Implant feels loose/mobile after 3 months, persistent pain/swelling after 2 weeks, pus/discharge around implant, X-ray shows bone loss. Contact clinic immediately if suspected - early intervention prevents complete failure.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How do I care for dental implants after returning home?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3">
                <strong>Implants need same care as natural teeth</strong> to last 20+ years. Daily care routine:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li><strong>Brush 2× daily:</strong> Use soft-bristle brush, fluoride toothpaste, 2 minutes each time (same as natural teeth)</li>
                <li><strong>Floss daily:</strong> Use implant-specific floss or water flosser to clean around implant and under crown</li>
                <li><strong>Mouthwash:</strong> Antibacterial mouthwash 1× daily (reduces plaque, prevents gum disease)</li>
                <li><strong>Avoid:</strong> Hard foods that can crack crown (ice, hard candy, bones), smoking (causes bone loss), excessive alcohol (delays healing first 3 months)</li>
              </ul>
              <p className="mb-3"><strong>Professional care:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Dental cleaning:</strong> Every 6 months at local dentist (professional cleaning prevents gum disease around implants)</li>
                <li><strong>Annual X-ray:</strong> Check bone level around implant, send to India clinic via WhatsApp for evaluation</li>
                <li><strong>Report issues early:</strong> Bleeding, pain, looseness - contact India clinic immediately (early treatment prevents failure)</li>
              </ul>
              <p className="mt-3">
                Clinic provides detailed care instructions in English/Arabic, 24/7 WhatsApp support for questions, virtual follow-ups at Month 1, 3, 6, and 12. Most patients never have issues with proper care.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Do I need bone grafting - how much does it cost?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3">
                <strong>30-40% of implant patients need bone grafting</strong> (adds $300-600 per site). Bone grafting needed if:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li><strong>Long time since tooth loss:</strong> Jawbone shrinks without tooth stimulation (lose 25% bone height in first year, 40-60% after 3+ years)</li>
                <li><strong>Gum disease history:</strong> Periodontitis causes bone loss before tooth falls out</li>
                <li><strong>Tooth extracted due to infection:</strong> Infection destroys bone before extraction</li>
                <li><strong>Denture wearer:</strong> Dentures accelerate bone loss over time (no chewing pressure on bone)</li>
                <li><strong>Upper jaw implants:</strong> Upper jaw has naturally thinner bone vs lower jaw</li>
              </ul>
              <p className="mb-3"><strong>Bone grafting procedure:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Material used:</strong> Synthetic bone (most common), donor bone (human/bovine), patient&apos;s own bone (from chin/jaw)</li>
                <li><strong>Procedure:</strong> Bone graft placed in implant site, covered with membrane, stitched, heals 3-6 months before implant placement</li>
                <li><strong>Cost:</strong> $300-600 per site (India) vs $1,500-3,000 (USA)</li>
                <li><strong>Success rate:</strong> 90-95% grafts successful, allows normal implant placement after healing</li>
              </ul>
              <p className="mt-3">
                <strong>Alternative (no grafting):</strong> All-on-4 full mouth implants use angled placement to avoid areas with bone loss ($4,000-6,000 vs $6,000-10,000 with grafting). 3D CBCT scan at consultation determines if you need grafting.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Can I get dental implants if I have diabetes?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3">
                <strong>Yes, diabetics can get implants if blood sugar well-controlled</strong> (HbA1c below 7%). Diabetes considerations:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li><strong>Well-controlled diabetes (HbA1c &lt; 7%):</strong> Success rate 90-95% (slightly lower than non-diabetics but still excellent)</li>
                <li><strong>Moderately controlled (HbA1c 7-9%):</strong> Success rate 85-90%, requires extra monitoring, longer healing time (4-6 months vs 3-4 months)</li>
                <li><strong>Poorly controlled (HbA1c &gt; 9%):</strong> Not recommended (high failure risk, severe infection risk), must get diabetes under control first</li>
              </ul>
              <p className="mb-3"><strong>Extra precautions for diabetics:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Pre-surgery:</strong> Submit HbA1c test (within 3 months), stabilize blood sugar 2-4 weeks before surgery</li>
                <li><strong>During surgery:</strong> Monitor blood glucose levels, adjust medications as needed</li>
                <li><strong>Post-surgery:</strong> Longer antibiotic course (10-14 days vs 5-7 days), more frequent checkups (weekly vs bi-weekly), strict wound care (infection risk higher)</li>
                <li><strong>Healing:</strong> Takes 25-50% longer than non-diabetics (4-6 months osseointegration vs 3-4 months)</li>
              </ul>
              <p className="mt-3">
                <strong>Bottom line:</strong> Diabetics get successful implants daily at top India clinics. Key is good diabetes control (HbA1c &lt; 7%), excellent oral hygiene, and following post-op care strictly. Surgeon evaluates individually based on your HbA1c and overall health.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Why are dental implants so much cheaper in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3">
                <strong>70-80% lower cost in India, same quality as USA/UK.</strong> Price difference reasons:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li><strong>Lower operating costs:</strong> Clinic rent/overhead 80% lower than USA ($2K/month vs $15K+/month in NYC)</li>
                <li><strong>Lower labor costs:</strong> Dental staff salaries 70% lower (still highly qualified, MDS degree = USA DDS equivalent)</li>
                <li><strong>Lower lab costs:</strong> Crown/bridge fabrication $50-100 vs $300-500 in USA (in-house labs common)</li>
                <li><strong>Volume pricing:</strong> Top clinics do 1,000-5,000 implants annually, negotiate bulk discounts on implants/materials</li>
                <li><strong>Government support:</strong> Medical tourism incentives, tax breaks for accredited hospitals</li>
                <li><strong>Currency exchange:</strong> Strong USD/GBP/AED vs INR (exchange rate advantage)</li>
              </ul>
              <p className="mb-3"><strong>Same quality materials used:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Implant brands:</strong> Same Swiss (Straumann, Nobel Biocare), German (Camlog, Ankylos), Korean (Osstem - FDA approved) implants as USA</li>
                <li><strong>Crown materials:</strong> Same porcelain, zirconia, titanium abutments</li>
                <li><strong>Technology:</strong> Same 3D CBCT scanners, guided surgery software, CAD/CAM milling machines</li>
                <li><strong>Sterilization:</strong> International protocols (autoclaves, single-use instruments)</li>
              </ul>
              <p className="mt-3">
                <strong>Quality assurance:</strong> JCI accreditation (USA-based Joint Commission International) verifies India clinics meet same standards as USA hospitals. 500,000+ medical tourists choose India annually for dental work - proven track record. You pay 20-30% of USA price, get same results.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <Card className="mb-12 border-primary-200 bg-primary-50">
        <CardContent className="pt-6">
          <h2 className="mb-4 text-2xl font-bold">Ready to Restore Your Smile?</h2>
          <p className="mb-6 text-gray-700">
            Get <strong>FREE consultation</strong> with India&apos;s top implant dentists. We help 10,000+ international patients annually achieve permanent, natural-looking smiles at 70-80% lower cost than USA/UK/UAE. Single tooth from <strong>$500</strong>, full mouth from <strong>$4,000</strong>.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/consultation">
              <Button size="lg" className="w-full sm:w-auto">Get Free Consultation</Button>
            </Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">WhatsApp Us</Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

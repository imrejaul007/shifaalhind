import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { Testimonials, TREATMENT_TESTIMONIALS } from '@/components/testimonials/testimonials';
import { TrustBadges } from '@/components/trust-badges/trust-badges';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Kidney Stone Treatment in India 2025: Cost, Best Hospitals, ESWL & Laser Surgery',
  description: 'Complete guide to kidney stone treatment in India. ESWL ($400-800), PCNL ($1,200-2,000), laser lithotripsy ($1,000-1,500). Top hospitals, 95% success rate, save 70-80% vs USA.',
  keywords: [
    'kidney stone treatment india',
    'kidney stone surgery india',
    'kidney stone removal india',
    'ESWL india cost',
    'laser kidney stone surgery india',
    'best kidney stone hospital india',
    'kidney stone doctor india',
    'PCNL surgery india',
    'ureteroscopy india',
    'kidney stone cost india',
    'علاج حصوات الكلى في الهند',
    'تكلفة علاج حصوات الكلى في الهند',
    'أفضل مستشفى حصوات الكلى في الهند'
  ],
};

export default function KidneyStoneTreatmentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
          Kidney Stone Treatment in India: ESWL, Laser & Advanced Procedures
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-700">
          Get painless kidney stone removal at India&apos;s top urology centers. ESWL from <strong>$400-800</strong>, Laser lithotripsy from <strong>$1,000-1,500</strong>, PCNL from <strong>$1,200-2,000</strong>. 95% stone-free rate, minimal hospital stay.
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
              <div className="text-3xl font-bold text-primary-600">$400-2,000</div>
              <p className="text-sm text-gray-600">Treatment Cost</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary-600">95%+</div>
              <p className="text-sm text-gray-600">Stone-Free Rate</p>
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
              <div className="text-3xl font-bold text-primary-600">1-3 days</div>
              <p className="text-sm text-gray-600">Hospital Stay</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Kidney Stone Treatment Cost: India vs USA vs UK vs UAE</h2>
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
                  <td className="border border-gray-300 px-4 py-2">ESWL (Extracorporeal Shock Wave Lithotripsy)</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-green-600">$400 - $800</td>
                  <td className="border border-gray-300 px-4 py-2">$3,000 - $5,000</td>
                  <td className="border border-gray-300 px-4 py-2">$2,500 - $4,000</td>
                  <td className="border border-gray-300 px-4 py-2">$2,000 - $3,500</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">77-87%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">RIRS (Retrograde Intrarenal Surgery) - Laser</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-green-600">$1,000 - $1,500</td>
                  <td className="border border-gray-300 px-4 py-2">$6,000 - $10,000</td>
                  <td className="border border-gray-300 px-4 py-2">$5,000 - $8,000</td>
                  <td className="border border-gray-300 px-4 py-2">$4,500 - $7,000</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">78-85%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Ureteroscopy (URS) with Laser</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-green-600">$800 - $1,200</td>
                  <td className="border border-gray-300 px-4 py-2">$5,000 - $8,000</td>
                  <td className="border border-gray-300 px-4 py-2">$4,000 - $6,500</td>
                  <td className="border border-gray-300 px-4 py-2">$3,500 - $5,500</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">76-85%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">PCNL (Percutaneous Nephrolithotomy)</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-green-600">$1,200 - $2,000</td>
                  <td className="border border-gray-300 px-4 py-2">$8,000 - $15,000</td>
                  <td className="border border-gray-300 px-4 py-2">$7,000 - $12,000</td>
                  <td className="border border-gray-300 px-4 py-2">$6,000 - $10,000</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">80-87%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Mini-PCNL (Smaller Stones)</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-green-600">$1,000 - $1,600</td>
                  <td className="border border-gray-300 px-4 py-2">$7,000 - $12,000</td>
                  <td className="border border-gray-300 px-4 py-2">$6,000 - $10,000</td>
                  <td className="border border-gray-300 px-4 py-2">$5,000 - $8,500</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">81-87%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Open Stone Surgery (Complex Cases)</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-green-600">$1,500 - $2,500</td>
                  <td className="border border-gray-300 px-4 py-2">$10,000 - $20,000</td>
                  <td className="border border-gray-300 px-4 py-2">$8,000 - $15,000</td>
                  <td className="border border-gray-300 px-4 py-2">$7,000 - $12,000</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">79-88%</td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
      </section>

      {/* What's Included */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">What&apos;s Included in Kidney Stone Treatment Packages</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>✅ Pre-Treatment (Day 1-2)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Consultation with urologist/nephrologist</li>
                <li>KUB X-ray (Kidney-Ureter-Bladder imaging)</li>
                <li>CT scan (non-contrast) for stone size/location</li>
                <li>Ultrasound (if CT not needed)</li>
                <li>Blood tests (creatinine, urea, CBC, electrolytes)</li>
                <li>Urine tests (culture, analysis)</li>
                <li>Treatment plan and procedure selection</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>✅ Procedure Day (Day 2-4)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Anesthesia (general/spinal based on procedure)</li>
                <li>Stone removal procedure (ESWL/RIRS/PCNL/URS)</li>
                <li>Stent placement (if needed - removed after 2-4 weeks)</li>
                <li>Post-op monitoring (recovery room 2-6 hours)</li>
                <li>Hospital stay (daycare for ESWL, 1-3 days for others)</li>
                <li>Pain medications and antibiotics</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>✅ Recovery Period (1-4 weeks)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Post-op X-ray/ultrasound to confirm stone clearance</li>
                <li>Follow-up consultation (Day 7-10)</li>
                <li>Stent removal (if placed - simple office procedure)</li>
                <li>Pain management protocol</li>
                <li>Dietary guidance (increase fluids to 3-4 liters/day)</li>
                <li>WhatsApp support for any concerns</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>✅ Prevention & Long-Term (1 year+)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Stone analysis (chemical composition testing)</li>
                <li>24-hour urine metabolic study (for recurrent stones)</li>
                <li>Prevention plan (diet, medications if needed)</li>
                <li>Annual ultrasound to monitor for new stones</li>
                <li>Virtual follow-up consultations</li>
                <li>90%+ patients remain stone-free with prevention</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Procedure Comparison */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Which Kidney Stone Procedure is Best for You?</h2>
        <Card>
          <CardContent className="overflow-x-auto pt-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Procedure</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Best For</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Success Rate</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Hospital Stay</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Recovery</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">ESWL</td>
                  <td className="border border-gray-300 px-4 py-2">Stones &lt;20mm in kidney/upper ureter</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600">✅ 75-85% (single session)</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Daycare (4-6 hours)</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600">✅ 2-3 days</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-semibold">RIRS (Laser)</td>
                  <td className="border border-gray-300 px-4 py-2">Stones &lt;15mm in kidney, any location</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600">✅ 90-95% (single session)</td>
                  <td className="border border-gray-300 px-4 py-2">1 day</td>
                  <td className="border border-gray-300 px-4 py-2">5-7 days</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">URS (Laser)</td>
                  <td className="border border-gray-300 px-4 py-2">Stones in ureter (any size)</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600">✅ 95-98%</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Daycare/1 day</td>
                  <td className="border border-gray-300 px-4 py-2">3-5 days</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-semibold">PCNL</td>
                  <td className="border border-gray-300 px-4 py-2">Stones &gt;20mm, staghorn stones</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600">✅ 95-98%</td>
                  <td className="border border-gray-300 px-4 py-2">2-3 days</td>
                  <td className="border border-gray-300 px-4 py-2">7-10 days</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Mini-PCNL</td>
                  <td className="border border-gray-300 px-4 py-2">Stones 10-20mm</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600">✅ 92-96%</td>
                  <td className="border border-gray-300 px-4 py-2">1-2 days</td>
                  <td className="border border-gray-300 px-4 py-2">5-7 days</td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
      </section>

      {/* Top Hospitals */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Top 5 Kidney Stone Treatment Hospitals in India</h2>
        <div className="space-y-6">
          <Card className="border-primary-200 bg-primary-50">
            <CardHeader>
              <CardTitle className="text-2xl">1. Fortis Hospital (Delhi, Mumbai, Bangalore, Kolkata)</CardTitle>
              <p className="text-sm text-gray-600">🏆 #1 Urology Centers | 12,000+ Stone Procedures Annually</p>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="mb-2"><strong>Specialty:</strong> All kidney stone procedures, complex staghorn stones, pediatric stones</p>
                <p className="mb-2"><strong>Success Rate:</strong> 96% stone-free rate, &lt;2% complication rate, 95% patient satisfaction</p>
                <p className="mb-2"><strong>Key Doctors:</strong> Dr. Rajesh Ahlawat (Bangalore, 25+ years), Dr. Anant Kumar (Delhi, 30+ years)</p>
                <p className="mb-2"><strong>Technology:</strong> Latest Holmium laser (100W), Swiss LithoClast, Olympus flexible ureteroscopes, 4th gen ESWL</p>
                <p className="mb-2"><strong>Cost:</strong> ESWL: $500-800 | RIRS: $1,100-1,500 | PCNL: $1,400-2,000</p>
                <p><strong>Why Choose:</strong> JCI accredited. Best infrastructure. International patient services with Arabic coordinators. Insurance accepted.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">2. Apollo Hospitals (Chennai, Bangalore, Delhi, Hyderabad)</CardTitle>
              <p className="text-sm text-gray-600">🥈 Asia&apos;s #1 Hospital Chain | 15,000+ Kidney Stone Treatments Annually</p>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="mb-2"><strong>Specialty:</strong> Advanced laser lithotripsy, mini-PCNL, robotic-assisted stone surgery</p>
                <p className="mb-2"><strong>Success Rate:</strong> 95% stone-free rate, 97% patient satisfaction</p>
                <p className="mb-2"><strong>Key Doctors:</strong> Dr. Ananthakrishnan Sivaraman (Chennai, 28+ years), Dr. K. Sriram (Bangalore, 22+ years)</p>
                <p className="mb-2"><strong>Technology:</strong> Holmium YAG laser, RIRS with flexible scopes, ultra-mini PCNL, 3D stone imaging</p>
                <p className="mb-2"><strong>Cost:</strong> ESWL: $550-850 | RIRS: $1,200-1,600 | PCNL: $1,500-2,200</p>
                <p><strong>Why Choose:</strong> 40+ years experience. 10+ JCI hospitals. Best for complex cases. Excellent international patient care.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">3. Max Super Speciality Hospital (Delhi NCR, Punjab)</CardTitle>
              <p className="text-sm text-gray-600">🥉 Premium Urology Services | 8,000+ Stone Procedures Annually</p>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="mb-2"><strong>Specialty:</strong> Minimally invasive stone surgery, RIRS, tubeless PCNL</p>
                <p className="mb-2"><strong>Success Rate:</strong> 97% stone-free rate (highest in North India), 2% complication rate</p>
                <p className="mb-2"><strong>Key Doctors:</strong> Dr. Vipin Arora (30+ years, USA trained), Dr. Ashok Hemal (25+ years, pioneer in PCNL)</p>
                <p className="mb-2"><strong>Technology:</strong> Latest laser systems, digital ureteroscopy, tubeless PCNL technique, 3D navigation</p>
                <p className="mb-2"><strong>Cost:</strong> ESWL: $550-800 | RIRS: $1,150-1,550 | PCNL: $1,400-2,100</p>
                <p><strong>Why Choose:</strong> NABH accredited. Premium care. Comfortable rooms. Best for GCC patients (halal food, prayer rooms).</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">4. Medanta The Medicity (Gurugram, Delhi NCR)</CardTitle>
              <p className="text-sm text-gray-600">World-Class Urology Institute | 6,000+ Stone Treatments Annually</p>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="mb-2"><strong>Specialty:</strong> Complex staghorn stones, robotic stone surgery, pediatric urology</p>
                <p className="mb-2"><strong>Success Rate:</strong> 98% stone-free rate (highest overall), 1% complication rate</p>
                <p className="mb-2"><strong>Key Doctors:</strong> Dr. Amlesh Seth (35+ years, global expert), Dr. Gagan Gautam (20+ years)</p>
                <p className="mb-2"><strong>Technology:</strong> Robotic-assisted surgery, high-power lasers, ultra-mini PCNL, stone analysis lab</p>
                <p className="mb-2"><strong>Cost:</strong> ESWL: $600-900 | RIRS: $1,300-1,700 | PCNL: $1,600-2,300</p>
                <p><strong>Why Choose:</strong> Best infrastructure in India. 1,250-bed super-specialty hospital. Excellent for complex/recurrent stones.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">5. Kokilaben Dhirubhai Ambani Hospital (Mumbai)</CardTitle>
              <p className="text-sm text-gray-600">Premium Multi-Specialty | 4,000+ Kidney Stone Procedures Annually</p>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="mb-2"><strong>Specialty:</strong> Advanced laser surgery, mini-PCNL, endourology</p>
                <p className="mb-2"><strong>Success Rate:</strong> 96% stone-free rate, 94% patient satisfaction</p>
                <p className="mb-2"><strong>Key Doctors:</strong> Dr. Mahesh Desai (30+ years, international speaker), Dr. Abhay Mahajan (22+ years)</p>
                <p className="mb-2"><strong>Technology:</strong> Latest Holmium laser, Swiss quality instruments, hybrid OR for complex cases</p>
                <p className="mb-2"><strong>Cost:</strong> ESWL: $600-900 | RIRS: $1,250-1,650 | PCNL: $1,500-2,200</p>
                <p><strong>Why Choose:</strong> Best hospital in Mumbai. Luxury accommodation. Excellent for international patients. Airport close.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Kidney Stone Treatment Recovery Timeline</h2>
        <div className="space-y-4">
          <Card className="border-primary-200 bg-primary-50">
            <CardHeader>
              <CardTitle>Day 1: Procedure Day</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>ESWL:</strong> 45-60 min procedure, 4-6 hours observation, go home same day</li>
                <li><strong>RIRS/URS:</strong> 1-2 hour procedure, overnight stay, discharge next morning</li>
                <li><strong>PCNL:</strong> 2-3 hour procedure, 2-3 day hospital stay, nephrostomy tube placed</li>
                <li><strong>Pain:</strong> Mild to moderate (controlled with medications)</li>
                <li><strong>Diet:</strong> Liquids initially, normal diet within 6-12 hours</li>
                <li><strong>Fluids:</strong> Encouraged to drink 3-4 liters water daily to flush fragments</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Days 2-7: Early Recovery</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Pain:</strong> Minimal with oral painkillers (ESWL/URS), moderate for PCNL</li>
                <li><strong>Stone passage:</strong> May pass small fragments in urine (normal, not painful)</li>
                <li><strong>Blood in urine:</strong> Common for 3-7 days (normal), drink plenty of water</li>
                <li><strong>Activity:</strong> Light walking encouraged, avoid strenuous exercise for 1 week</li>
                <li><strong>Return to work:</strong> 2-3 days for ESWL, 5-7 days for RIRS/URS, 7-10 days for PCNL</li>
                <li><strong>Follow-up X-ray:</strong> Day 5-7 to check stone clearance</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Weeks 2-4: Complete Healing</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Stent removal:</strong> If placed, removed at Week 2-4 (simple office procedure, 2 minutes)</li>
                <li><strong>Nephrostomy tube removal:</strong> PCNL patients, removed after 5-7 days</li>
                <li><strong>Physical activity:</strong> Resume normal exercise after Week 2-3</li>
                <li><strong>Final imaging:</strong> CT scan/ultrasound to confirm 100% stone clearance</li>
                <li><strong>Stone analysis results:</strong> Reveals calcium oxalate/uric acid/struvite type</li>
                <li><strong>Prevention plan:</strong> Dietary modifications based on stone type</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary-200 bg-primary-50">
            <CardHeader>
              <CardTitle>Months 1-12: Prevention & Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Hydration:</strong> Maintain 3-4 liters fluid intake daily (most important prevention)</li>
                <li><strong>Diet modifications:</strong> Based on stone type (reduce oxalate/salt/protein as needed)</li>
                <li><strong>Medications:</strong> If recurrent stones (citrate supplements, allopurinol, etc.)</li>
                <li><strong>6-month ultrasound:</strong> Monitor for new stone formation</li>
                <li><strong>Annual checkup:</strong> Ultrasound + urine tests to ensure stone-free status</li>
                <li><strong>Success rate:</strong> 90%+ remain stone-free with proper prevention measures</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Schema for Rich Snippets */}
      <FAQSchema faqs={[
        { question: "How much does kidney stone treatment cost in India?", answer: "Kidney stone treatment in India costs $400-2,000 depending on procedure: ESWL (shock wave): $400-800, Laser lithotripsy (RIRS): $1,000-1,500, Ureteroscopy (URS): $800-1,200, PCNL (large stones): $1,200-2,000, Mini-PCNL: $1,000-1,600. This is 70-80% cheaper than USA ($3,000-20,000). Price includes consultation, imaging (CT/ultrasound), procedure, hospital stay (daycare to 3 days), stent if needed, medications, and follow-up visits." },
        { question: "Which is the best procedure for kidney stones in India?", answer: "Best procedure depends on stone size and location: Stones <10mm: ESWL ($400-800) - non-invasive, daycare, 75-85% success. Stones 10-20mm in kidney: RIRS laser ($1,000-1,500) - 90-95% success, 1-day stay, minimal pain. Stones in ureter: URS ($800-1,200) - 95-98% success, daycare/1-day. Stones >20mm or staghorn: PCNL ($1,200-2,000) - 95-98% success, 2-3 day stay. Your urologist will recommend best option after CT scan shows exact size/location. In India, all procedures done with latest technology (Holmium laser, Swiss instruments)." },
        { question: "How long is recovery after kidney stone surgery in India?", answer: "Recovery time depends on procedure: ESWL: 2-3 days return to work, minimal pain, daycare procedure. RIRS/URS laser: 5-7 days return to work, 1-day hospital stay, stent removed after 2-4 weeks. PCNL: 7-10 days return to work, 2-3 day stay, nephrostomy tube for 5-7 days. All procedures: Complete healing 2-4 weeks, resume exercise after Week 2-3, blood in urine normal for 3-7 days, drink 3-4 liters water daily to flush stone fragments. 95%+ patients stone-free after single procedure." },
        { question: "What is ESWL and how does it work in India?", answer: "ESWL (Extracorporeal Shock Wave Lithotripsy) is non-invasive kidney stone treatment: How it works: Shock waves from outside body target stone, Breaks stone into small fragments (2-3mm), Fragments pass naturally in urine over 2-3 weeks. Procedure: 45-60 minutes, No incisions/surgery, Sedation only (not general anesthesia), Daycare (go home after 4-6 hours). Best for: Stones <20mm in kidney or upper ureter. Success rate: 75-85% in single session, may need 2nd session for large stones. Cost in India: $400-800 (vs $3,000-5,000 USA). Recovery: 2-3 days, minimal pain. Top hospitals use latest 4th generation ESWL machines (Dornier, Siemens) for maximum effectiveness." },
        { question: "Can I fly home after kidney stone treatment in India?", answer: "Yes, you can fly home after kidney stone treatment: ESWL: Safe to fly after 3-5 days. Ensure stone fragments passing, pain controlled. RIRS/URS: Safe to fly after 5-7 days. Wait until urine clear, stent comfortable (if placed). PCNL: Safe to fly after 7-10 days. Nephrostomy tube removed, wound healing well. Flight tips: Drink extra water during flight (prevent dehydration), Carry pain medications, Avoid alcohol/caffeine, Walk around cabin every hour. Stent in place: Can fly with stent (remove after 2-4 weeks at home or return to India). Virtual follow-up via WhatsApp. Final imaging (ultrasound) can be done locally and sent to India doctor." },
        { question: "What causes kidney stones and how to prevent recurrence?", answer: "Kidney stone causes: Dehydration (most common): <2 liters water daily, Diet: High salt, protein, oxalate (spinach, nuts, chocolate), Genetics: Family history increases risk, Medical conditions: Hyperparathyroidism, gout, UTIs, Medications: Certain diuretics, calcium supplements. Prevention (90% effective): Drink 3-4 liters water daily (most important - dilutes urine), Reduce salt intake (<5g/day), Moderate protein (avoid excess meat), Calcium oxalate stones: Reduce oxalate foods (spinach, nuts, tea, chocolate), Uric acid stones: Reduce meat, alcohol; take citrate supplements, Calcium needed: Don't avoid calcium (myth) - adequate calcium prevents stones. Stone analysis: Lab test identifies stone type for targeted prevention. 24-hour urine study: For recurrent stones, guides medication. With prevention, 90%+ patients remain stone-free long-term." },
        { question: "Are Indian urologists qualified for kidney stone treatment?", answer: "Yes, top Indian urologists are world-class with international training: Qualifications: MCh (Urology) or DNB (Urology) - 3-year specialization after MS (General Surgery), Fellowship in Endourology from USA/Europe/Australia, 15-30+ years experience performing 500-1,000+ stone procedures annually. International training: Many trained at Cleveland Clinic, Johns Hopkins, Mayo Clinic, UK institutions, Participate in international conferences (AUA, EAU), publish research in top urology journals. Technology: Same as USA/Europe - Holmium YAG laser (100W), Swiss LithoClast, Olympus flexible ureteroscopes, 4th gen ESWL machines. Hospitals: Fortis, Apollo, Max, Medanta have JCI/NABH accreditation (international standards). Success rates match or exceed Western hospitals: 95-98% stone-free rates. Many international patients from Middle East, Africa, Southeast Asia choose India for quality + affordability." },
        { question: "What is the success rate of kidney stone surgery in India?", answer: "Kidney stone surgery success rates in India are excellent: ESWL: 75-85% stone-free in single session, 90%+ with 2nd session if needed. RIRS (laser): 90-95% stone-free, single procedure. URS (ureter stones): 95-98% stone-free (highest success). PCNL (large stones): 95-98% stone-free, even for complex staghorn stones. Mini-PCNL: 92-96% success. Complication rates: <2% at top hospitals (bleeding, infection, ureteral injury). Top hospitals like Medanta (98% success), Fortis (96%), Apollo (95%) have outcomes matching/exceeding USA/Europe. Factors affecting success: Stone size/location, Surgeon experience (500+ procedures/year at top hospitals), Latest technology (Holmium laser, flexible scopes), Patient compliance with post-op care. Recurrence prevention: 90%+ remain stone-free with proper hydration + diet modifications." }
      ]} />

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Is kidney stone surgery painful in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Modern kidney stone procedures in India are minimally painful. ESWL is non-invasive (no surgery) with only mild discomfort. Laser procedures (RIRS/URS) cause minimal pain managed with oral painkillers for 3-5 days. PCNL causes moderate pain for 2-3 days but controlled with medications. All procedures done under anesthesia - you feel nothing during procedure. Post-op pain much less than people expect with proper pain management protocol.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How long do I need to stay in India for kidney stone treatment?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Minimum 5-7 days for simple cases, 10-14 days for complex stones: Day 1-2: Arrival, consultation, imaging (CT/ultrasound). Day 2-4: Procedure (ESWL/RIRS/PCNL). Day 3-7: Recovery, post-op imaging to confirm clearance. Day 7: Surgeon clearance to fly home. ESWL patients can leave after 3-5 days. PCNL patients should stay 10-14 days. Stent removal: Can be done at home after 2-4 weeks or return to India. Virtual follow-up via WhatsApp supported.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Which city in India is best for kidney stone treatment?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Best cities for kidney stone treatment: Delhi NCR (Fortis, Max, Medanta - excellent urology centers, close to airport), Bangalore (Apollo, Fortis - good weather, IT hub), Mumbai (Kokilaben, Fortis - international airport, cosmopolitan), Chennai (Apollo headquarters - South India hub). All cities have JCI-accredited hospitals with latest technology. Choose based on: Flight connectivity from your country, Hospital preference, Budget (Delhi/Bangalore slightly cheaper than Mumbai).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Can kidney stones recur after treatment in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Yes, kidney stones can recur if prevention not followed, but 90%+ remain stone-free with proper measures. Recurrence rates: 50% within 5 years without prevention, 10% with proper prevention (hydration + diet). Prevention: Drink 3-4 liters water daily (most important), Dietary modifications based on stone type, Medications if needed (citrate for calcium stones, allopurinol for uric acid). India hospitals provide: Stone analysis to identify type, 24-hour urine study for recurrent cases, Detailed prevention plan, Annual ultrasound monitoring, WhatsApp support for any concerns.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What is the minimum age for kidney stone treatment in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>All ages can be treated - kidney stones occur from infancy to 90+ years.</strong> Age-specific approaches:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Children (under 12):</strong> Pediatric urology specialists required, ESWL preferred (non-invasive, least trauma), smaller instruments used for laser procedures, success rate 90%+ same as adults, hospitals: Apollo, Fortis, Medanta have dedicated pediatric urology units</li>
                <li><strong>Teenagers (12-18):</strong> Treated same as adults with age-appropriate anesthesia, all procedures available (ESWL, laser, PCNL), excellent outcomes due to faster healing, common causes: dehydration (sports, academics), excessive junk food, genetic predisposition</li>
                <li><strong>Young adults (18-50):</strong> Most common age group for kidney stones, ideal candidates for all procedures, fastest recovery (5-7 days return to work), 95-98% success rates, lifestyle modifications critical to prevent recurrence</li>
                <li><strong>Middle age (50-70):</strong> Surgery safe with proper cardiac/diabetes management, may need slightly longer hospital stay (1 extra day), success rates same as younger patients, comorbidities well-controlled before procedure</li>
                <li><strong>Elderly (70+):</strong> Age not a barrier if medically fit, comprehensive pre-op evaluation (cardiac stress test, kidney function), laser procedures preferred over PCNL (less invasive), oldest patient treated: 92 years at Fortis Delhi, anesthesia risk slightly higher but manageable</li>
              </ul>
              <p className="text-gray-700">
                <strong>Special populations:</strong> Pregnant women: Most procedures postponed to 2nd trimester or after delivery, ureteral stent temporary solution, ESWL contraindicated in pregnancy. Single kidney patients: Extra caution, experienced surgeon essential, success rate same but monitoring more intensive. Recurrent stone formers: Any age, multiple procedures safe with proper spacing (3-6 months between procedures). India&apos;s top hospitals have treated patients from 6 months to 95 years with excellent outcomes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Can I smoke after kidney stone surgery in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Smoking not directly contraindicated but strongly discouraged for healing and prevention.</strong> Impact:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Before surgery:</strong> Stop 1-2 weeks before if possible (improves anesthesia tolerance, better lung function, reduced coughing post-op which can cause stent discomfort)</li>
                <li><strong>Immediately after (Week 1-2):</strong> Avoid smoking (coughing from smoking can dislodge stent, increase pain, cause bleeding, nicotine constricts blood vessels, delays healing)</li>
                <li><strong>First month:</strong> Minimize smoking (healing period for any internal wounds from laser/PCNL, infection risk slightly higher in smokers)</li>
                <li><strong>Long-term:</strong> Smoking increases kidney stone recurrence risk (chronic dehydration from smoking, reduced kidney blood flow, altered urine chemistry making stones more likely)</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Smoking-related complications for kidney stone surgery:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li>Post-op coughing causes stent migration or displacement (very painful)</li>
                <li>Increased urinary tract infection risk (2-3× higher in smokers)</li>
                <li>Delayed wound healing (PCNL patients - nephrostomy tube site takes longer to close)</li>
                <li>Chronic kidney disease progression (smoking damages kidney microvasculature over time)</li>
                <li>Higher stone recurrence rate (smokers 40% more likely to form new stones)</li>
              </ul>
              <p className="text-gray-700">
                <strong>Bottom line:</strong> Unlike piles surgery where smoking is absolutely prohibited, kidney stone surgery can proceed in smokers - but outcomes better if you quit. Post-surgery, main concern is coughing causing stent discomfort. If you must smoke post-op, wait 2-3 days, take cough suppressants, and minimize frequency. Long-term, quitting smoking is one of best things you can do for kidney health and stone prevention. Nicotine patches acceptable (no coughing from patches).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>When can I exercise after kidney stone treatment in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Exercise resumption varies by procedure type.</strong> Timeline by procedure:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>ESWL (shock wave):</strong> Walking: Day 1 (encouraged immediately), Light exercise (treadmill, yoga): Day 3-5, Jogging/running: Week 2, Gym/weights: Week 2-3, Swimming: Week 3-4 (after blood in urine resolves), High-impact sports: Week 4</li>
                <li><strong>RIRS/URS (laser):</strong> Walking: Day 1-2, Light exercise: Week 1-2, Jogging: Week 2-3, Gym/weights (light): Week 3, Heavy lifting (&gt;20 lbs): Week 4, Swimming: Week 4 (after stent removed if placed), Contact sports: Week 4-6</li>
                <li><strong>PCNL (large stones):</strong> Walking: Day 2-3 (start slowly), Light exercise: Week 2-3, Jogging: Week 4, Gym/weights: Week 4-6, Heavy lifting: Week 6-8, Swimming: Week 6 (after nephrostomy site fully healed), Contact sports: Week 8</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Exercise restrictions explained:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Stent in place:</strong> Avoid exercises causing bouncing/jarring (jumping jacks, running, trampoline), stent can migrate with excessive movement, swimming okay once incisions healed (chlorine doesn&apos;t affect stent)</li>
                <li><strong>Blood in urine:</strong> Common for 3-10 days post-procedure, exercise can temporarily increase bleeding (normal, not dangerous), if blood increases significantly during exercise - you&apos;re doing too much too soon</li>
                <li><strong>Hydration critical:</strong> Drink 3-4 liters water daily especially when exercising, dehydration increases pain, risk of new stones, and slows fragment passage</li>
                <li><strong>Core exercises:</strong> Crunches, planks, heavy squats increase intra-abdominal pressure, can cause stent discomfort or migration, wait until stent removed for heavy core work</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Warning signs to stop exercise:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li>Sudden severe flank pain (could be stone fragment blocking ureter)</li>
                <li>Significant increase in blood in urine (bright red, clots)</li>
                <li>Fever &gt;100.4°F (could indicate infection)</li>
                <li>Extreme stent discomfort (sharp stabbing pain in bladder)</li>
                <li>Difficulty urinating or complete blockage</li>
              </ul>
              <p className="text-gray-700">
                <strong>Exercise tips for kidney stone recovery:</strong> Start slow and increase 10-15% weekly. Listen to your body - mild discomfort okay, sharp pain means stop. Empty bladder before exercise (reduces stent discomfort). Wear supportive compression shorts if stent in place. Avoid contact sports until surgeon clearance (usually Week 4-8). Swimming excellent low-impact exercise once allowed (promotes circulation, hydration). Most athletes back to full training by Week 4-6 (ESWL/laser) or Week 8-12 (PCNL).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What can I eat and drink after kidney stone surgery? Diet restrictions?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Hydration is #1 priority - drink 3-4 liters water daily.</strong> Diet timeline and stone-specific restrictions:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Day 1 (procedure day):</strong> Clear liquids first 6-8 hours (water, coconut water, clear juice), avoid caffeine/alcohol, normal food once fully awake from anesthesia</li>
                <li><strong>Days 2-7:</strong> Eat normally - no specific restrictions for healing, focus on hydration (3-4 liters daily to flush stone fragments), avoid excessive salt (can cause swelling), limit caffeine (dehydrating)</li>
                <li><strong>Week 2-4:</strong> Resume completely normal diet, continue high fluid intake, begin stone-specific diet modifications based on stone analysis results</li>
                <li><strong>Long-term prevention diet (depends on stone type):</strong> Implemented after stone chemical analysis reveals composition</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Stone-specific diet modifications (for prevention):</strong></p>
              <table className="min-w-full border-collapse border border-gray-300 mb-3">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Stone Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Foods to Avoid/Limit</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Foods to Eat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Calcium Oxalate (80% of stones)</td>
                    <td className="border border-gray-300 px-4 py-2">Reduce: Spinach, nuts, chocolate, tea, beetroot, sweet potato | Moderate: Salt, animal protein</td>
                    <td className="border border-gray-300 px-4 py-2">Adequate calcium (milk, yogurt), citrus fruits (lemon water), low-oxalate vegetables</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Uric Acid (5-10%)</td>
                    <td className="border border-gray-300 px-4 py-2">Reduce: Red meat, organ meats, seafood, alcohol (especially beer) | Limit: Protein to 1g/kg body weight</td>
                    <td className="border border-gray-300 px-4 py-2">Alkaline foods (fruits, vegetables), citrate-rich: lemon, orange, take citrate supplements if prescribed</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Struvite (infection stones)</td>
                    <td className="border border-gray-300 px-4 py-2">No specific diet restrictions | Prevent UTIs (main cause)</td>
                    <td className="border border-gray-300 px-4 py-2">Cranberry juice, probiotics, adequate hydration, prompt antibiotic treatment for UTIs</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Cystine (rare, genetic)</td>
                    <td className="border border-gray-300 px-4 py-2">Reduce: Protein, especially methionine-rich (meat, eggs, fish)</td>
                    <td className="border border-gray-300 px-4 py-2">Very high fluid intake (4-5 liters), alkaline diet, take cystine-binding medications (tiopronin)</td>
                  </tr>
                </tbody>
              </table>
              <p className="mb-3 text-gray-700"><strong>Universal prevention diet (all stone types):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Fluids:</strong> 3-4 liters daily (most important factor), water best, lemon water excellent (citrate prevents stones), avoid excessive cola/soda (phosphoric acid increases risk)</li>
                <li><strong>Salt:</strong> &lt;5g/day (excess salt increases calcium in urine)</li>
                <li><strong>Calcium:</strong> Don&apos;t avoid calcium (myth!) - adequate calcium (1,000mg/day) binds oxalate in gut, preventing absorption</li>
                <li><strong>Protein:</strong> Moderate animal protein (1-1.2g/kg body weight), excessive protein increases uric acid, calcium excretion</li>
                <li><strong>Vitamin C:</strong> Limit supplements &gt;1,000mg daily (converts to oxalate), dietary vitamin C fine</li>
              </ul>
              <p className="text-gray-700">
                <strong>Practical hydration tips:</strong> Urine should be light yellow to clear (dark yellow means dehydrated). Drink 500ml water upon waking. Carry water bottle everywhere. Drink before thirsty (thirst means already dehydrated). Hot climates/exercise: add extra 1-2 liters. With proper hydration + stone-specific diet, 90% of patients remain stone-free long-term.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Do I need someone to accompany me for kidney stone treatment in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Companion helpful but not mandatory for most procedures.</strong> Breakdown by procedure:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>ESWL (shock wave):</strong> Can manage alone (daycare procedure, sedation only - you&apos;re awake, go home after 4-6 hours, can walk independently), companion nice-to-have for: emotional support, help with taxi/hotel, picking up medications, first 24 hours at hotel</li>
                <li><strong>RIRS/URS (laser):</strong> Companion recommended (general/spinal anesthesia used, 1-day hospital stay, some grogginess first 12 hours), but many solo patients manage fine with hospital support</li>
                <li><strong>PCNL (large stones):</strong> Companion strongly recommended (2-3 day hospital stay, general anesthesia, nephrostomy tube requires some care, mobility limited first 24-48 hours, helpful for hospital paperwork, communicating with doctors)</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Hospital support for solo international patients:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Fortis/Apollo/Max/Medanta all provide:</strong> Airport pickup/drop service (free or ₹1,500-2,000/$20-25), dedicated international patient coordinator (handles all logistics), 24/7 WhatsApp support (English/Arabic), hotel booking assistance (partner hotels near hospital), attendant services if needed (₹1,500-2,000 per day for personal helper)</li>
                <li><strong>Medical tourism companies:</strong> Offer complete packages including companion services, visa assistance, hotel, local transport, some GCC patients use these for complete peace of mind</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>What companion can help with:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li>Admission/discharge paperwork (can be overwhelming in large Indian hospitals)</li>
                <li>Communicating with doctors/nurses (language barrier for some, though most doctors speak English)</li>
                <li>Managing medications, follow-up appointment scheduling</li>
                <li>Emotional support during anxious moments</li>
                <li>Help with mobility first 24-48 hours post-procedure</li>
                <li>Filtering stone fragments in urine (doctor may ask to collect fragments for analysis)</li>
              </ul>
              <p className="text-gray-700">
                <strong>Practical tips for solo patients:</strong> Book hotel within 2 km of hospital (easy for follow-up visits, emergency if needed). Have hospital coordinator&apos;s direct WhatsApp number. Video call family daily for moral support. Stock up on bottled water at hotel (need 3-4 liters daily). Many GCC patients come alone for ESWL/laser procedures - very manageable. PCNL patients: consider bringing companion or hiring local attendant (hospitals can arrange). International patient coordinators are excellent - they hold your hand through entire process.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What is a ureteral stent and is it painful? How long does it stay?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Ureteral stent is temporary plastic tube placed from kidney to bladder after laser procedures.</strong> Everything you need to know:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>What it is:</strong> Soft plastic tube 6-8 inches long, 2-3mm diameter, coiled ends (pigtail shape prevents migration), allows urine to flow from kidney to bladder bypassing any swelling/fragments, placed during RIRS/URS, NOT needed for ESWL or most PCNL cases</li>
                <li><strong>Why placed:</strong> Prevents blockage from post-procedure swelling, allows stone fragments to pass without obstruction, reduces risk of kidney damage from blocked ureter, stays in place while ureter heals (2-4 weeks typically)</li>
                <li><strong>Duration:</strong> RIRS/URS: 2-4 weeks (average 3 weeks), removed in simple office procedure (2-5 minutes), can be removed at home country or return to India</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Is stent painful? Honest answer:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Most patients (60-70%):</strong> Mild to moderate discomfort (not severe pain), pressure/fullness sensation in bladder, urgency to urinate frequently, worse when moving/exercising, manageable with mild painkillers, improves after first week as body adjusts</li>
                <li><strong>Some patients (20-30%):</strong> More uncomfortable, sharp bladder spasms when urinating, flank pain during urination (urine reflux into kidney), difficulty sleeping due to frequent urination, may need stronger pain medications (tamsulosin helps relax stent)</li>
                <li><strong>Few patients (5-10%):</strong> Minimal to no discomfort, barely notice stent is there, able to work/exercise normally</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Common stent symptoms (normal, not complications):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li>Frequent urination (every 1-2 hours) - stent irritates bladder</li>
                <li>Urgency (sudden strong urge to pee) - bladder spasm from stent end</li>
                <li>Blood in urine (pink/red tinge) - stent rubs bladder lining, normal</li>
                <li>Flank pain during/after urination - some urine refluxes back to kidney</li>
                <li>Feeling of incomplete bladder emptying</li>
                <li>Worse with physical activity, better when lying down</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Stent removal:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Procedure:</strong> Simple office procedure, no anesthesia needed, cystoscopy (small camera in urethra), grasps stent with forceps and pulls out, takes 2-5 minutes total, slight discomfort but not painful, immediate relief once stent out</li>
                <li><strong>Options for international patients:</strong> Return to India for removal (ideal, surgeon who placed it removes it, included in package cost), Removal at home country (send stent details to local urologist, costs $200-500 abroad, completely acceptable option), String attached to stent (some surgeons attach removal string, you can pull out yourself - rare practice)</li>
              </ul>
              <p className="text-gray-700">
                <strong>Living with stent (GCC patients):</strong> Can fly with stent safely (no restrictions). Drink extra water during flight. Can work with stent (desk jobs easier than physical labor). Avoid heavy lifting &gt;20 lbs. Sex possible but may be uncomfortable (discuss with partner). Most patients tolerate stent reasonably well for 2-4 weeks. Tamsulosin medication helps 80% of patients with stent discomfort. Removal brings instant relief - patients universally report feeling much better within hours of stent removal.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>ESWL vs Laser (RIRS) - which kidney stone procedure is better?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Both excellent procedures - choice depends on stone size, location, and patient preference.</strong> Detailed comparison:
              </p>
              <table className="min-w-full border-collapse border border-gray-300 mb-3">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Factor</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">ESWL (Shock Wave)</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">RIRS (Laser)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Invasiveness</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Non-invasive (no incisions, external only)</td>
                    <td className="border border-gray-300 px-4 py-2">Minimally invasive (scope through urethra, no external cuts)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Anesthesia</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Sedation only (not general)</td>
                    <td className="border border-gray-300 px-4 py-2">General or spinal anesthesia</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Hospital Stay</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Daycare (4-6 hours, go home same day)</td>
                    <td className="border border-gray-300 px-4 py-2">1 day (overnight stay)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Recovery Time</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ 2-3 days return to work</td>
                    <td className="border border-gray-300 px-4 py-2">5-7 days return to work</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Success Rate (Single Session)</td>
                    <td className="border border-gray-300 px-4 py-2">75-85% (&lt;10mm stones), 60-70% (10-20mm stones)</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ 90-95% (stones up to 15mm)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Stone Size Limit</td>
                    <td className="border border-gray-300 px-4 py-2">Best for &lt;20mm, less effective for larger</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Effective up to 20-25mm</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Stone Location</td>
                    <td className="border border-gray-300 px-4 py-2">Best: Kidney upper/mid pole, upper ureter | Poor: Lower pole kidney (low clearance)</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Works for ALL locations (including difficult lower pole)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Sessions Needed</td>
                    <td className="border border-gray-300 px-4 py-2">Often need 2-3 sessions for complete clearance (20-40% need repeat)</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Usually single session sufficient</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Stone Passage</td>
                    <td className="border border-gray-300 px-4 py-2">Fragments pass naturally over 2-3 weeks (may be painful if fragments large)</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Stone removed during procedure (minimal passage needed)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Stent Needed?</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ No stent (major advantage)</td>
                    <td className="border border-gray-300 px-4 py-2">Yes, stent placed for 2-4 weeks (causes some discomfort)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Pain Post-Procedure</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Minimal (mild soreness)</td>
                    <td className="border border-gray-300 px-4 py-2">Moderate (mainly from stent discomfort)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Cost in India</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ $400-800 (cheaper)</td>
                    <td className="border border-gray-300 px-4 py-2">$1,000-1,500 (more expensive but higher success)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Complications</td>
                    <td className="border border-gray-300 px-4 py-2">Bruising on skin, blood in urine (mild), steinstrasse (fragment blockage 5%)</td>
                    <td className="border border-gray-300 px-4 py-2">Ureteral injury (&lt;1%), UTI (2-3%), stent migration (rare)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Best For</td>
                    <td className="border border-gray-300 px-4 py-2">Small stones (&lt;10mm), kidney/upper ureter, patients wanting quickest recovery, non-invasive preference</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Medium stones (10-20mm), lower pole kidney (ESWL poor clearance), patients wanting single-session cure</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Overall Recommendation</td>
                    <td className="border border-gray-300 px-4 py-2">Good first-line for simple cases, may need repeat sessions</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Gold standard for most stones 5-20mm (higher success, one-time cure)</td>
                  </tr>
                </tbody>
              </table>
              <p className="mb-3 text-gray-700"><strong>Doctor&apos;s recommendation by scenario:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>5mm kidney stone, upper pole:</strong> ESWL first choice (80% success, non-invasive, daycare, cheap)</li>
                <li><strong>12mm kidney stone, lower pole:</strong> RIRS laser (ESWL only 40% clearance for lower pole, laser 95% success)</li>
                <li><strong>8mm ureter stone:</strong> Either works, RIRS slightly better (98% vs 85% success)</li>
                <li><strong>15mm kidney stone, any location:</strong> RIRS laser (ESWL needs 2-3 sessions, laser one-shot cure)</li>
                <li><strong>Multiple small stones (&lt;5mm each):</strong> ESWL (can treat multiple stones in single session)</li>
                <li><strong>Hard stone (calcium oxalate monohydrate):</strong> RIRS laser (ESWL less effective on very hard stones)</li>
              </ul>
              <p className="text-gray-700">
                <strong>GCC patient perspective:</strong> If flying from UAE/Saudi for treatment, RIRS laser often better choice despite higher cost - single session with 95% success means one trip to India vs potentially 2-3 trips for ESWL repeat sessions. Stent can be removed at home (saves return trip). Overall, most urologists in India recommend RIRS laser for stones 10-20mm (higher success justifies slightly higher cost and stent discomfort). ESWL excellent for small stones &lt;10mm where success rate comparable to laser.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>When can I have sex after kidney stone treatment in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Safe to resume sexual activity after 1-2 weeks for most procedures.</strong> Timeline by procedure:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>ESWL (shock wave):</strong> Sex safe after 5-7 days (minimal invasiveness, no internal healing needed, wait until blood in urine resolves, mild soreness on treated kidney side may make positions uncomfortable first week)</li>
                <li><strong>RIRS/URS (laser) WITHOUT stent:</strong> Sex safe after 1 week (ureter healing, wait until any bleeding stops, no restrictions on positions)</li>
                <li><strong>RIRS/URS WITH stent in place:</strong> Sex possible after 1-2 weeks BUT may be uncomfortable (stent can cause bladder spasms during orgasm, especially in women, positions putting pressure on lower abdomen may increase stent discomfort, some patients prefer waiting until stent removed for comfort), many patients have sex with stent - just less comfortable than usual</li>
                <li><strong>PCNL (large stones):</strong> Wait 2-3 weeks minimum (nephrostomy tube site needs healing, flank wound can be tender, avoid positions putting pressure on treated side, safe once tube removed and pain-free)</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Considerations with ureteral stent:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Women:</strong> Stent end in bladder can cause discomfort during penetration/orgasm, bladder spasms common during climax (not dangerous, just uncomfortable), side-lying or woman-on-top positions may be more comfortable, some women prefer waiting until stent removed (2-4 weeks)</li>
                <li><strong>Men:</strong> Stent less noticeable during sex for men than women, prostate contraction during orgasm can cause temporary sharp bladder/flank pain (normal, resolves in seconds), erectile function not affected by kidney stone procedures, retrograde ejaculation not a concern</li>
                <li><strong>Blood in semen:</strong> Rare but possible with stent (hematospermia), not dangerous, resolves after stent removal, no impact on fertility</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>General sexual health after kidney stone treatment:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li>Fertility not affected by any kidney stone procedure (sperm production, ovulation continue normally)</li>
                <li>Kidney function unchanged (unless severe recurrent stones causing chronic damage)</li>
                <li>No long-term sexual dysfunction from procedures</li>
                <li>Medications (tamsulosin for stent) can rarely cause retrograde ejaculation (temporary, stops when medication stopped)</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Warning signs to avoid sexual activity:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li>Active urinary tract infection (fever, burning urination) - wait until infection cleared with antibiotics</li>
                <li>Significant bleeding (bright red blood in urine, not just pink tinge)</li>
                <li>Severe flank/bladder pain making movement difficult</li>
                <li>Recent nephrostomy tube still in place (PCNL patients - wait until removed)</li>
              </ul>
              <p className="text-gray-700">
                <strong>Practical advice:</strong> Communicate with partner about any discomfort. Start gently - if painful, stop and wait another week. Hydration important - drink water before/after sex (maintains good urine flow past stent). Empty bladder before sex (reduces stent-related bladder spasms). Most patients resume normal sexual activity by Week 2-3 without issues. Stent removal brings immediate improvement in comfort for those who found stent bothersome during sex. If concerned, ask your urologist directly - this is common medical question, nothing to be embarrassed about.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials
        testimonials={TREATMENT_TESTIMONIALS['generic']}
        title="Success Stories from Our Kidney Stone Treatment Patients"
        subtitle="Real transformations from GCC patients who achieved life-changing results"
      />

      {/* Trust Badges Section */}
      <TrustBadges />

      {/* Final CTA */}
      <Card className="mb-12 border-primary-200 bg-primary-50">
        <CardContent className="pt-6">
          <h2 className="mb-4 text-2xl font-bold">Ready for Pain-Free Kidney Stone Removal?</h2>
          <p className="mb-6 text-gray-700">
            Get <strong>FREE consultation</strong> with India&apos;s top urologists. We help 20,000+ international patients annually achieve complete stone clearance at 70-80% lower cost than USA/UK/UAE. ESWL from <strong>$400</strong>, laser from <strong>$1,000</strong>.
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

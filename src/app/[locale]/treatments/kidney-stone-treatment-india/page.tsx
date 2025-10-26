import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FAQSchema } from '@/components/seo/faq-schema-client';

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
        </div>
      </section>

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

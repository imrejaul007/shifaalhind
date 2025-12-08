import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { Testimonials, TREATMENT_TESTIMONIALS } from '@/components/testimonials/testimonials';
import { TrustBadges } from '@/components/trust-badges/trust-badges';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Piles Surgery in India 2025: Cost, Best Hospitals, Laser Treatment | Hemorrhoids',
  description: 'Complete guide to piles (hemorrhoids) surgery in India. Laser treatment ($800-1,200), traditional surgery ($600-1,000). Top hospitals, 95% success rate, save 70-80% vs USA. Free consultation.',
  keywords: [
    'piles surgery india',
    'piles treatment india',
    'hemorrhoids surgery india',
    'laser piles treatment india',
    'piles surgery cost india',
    'best piles hospital india',
    'piles doctor india',
    'hemorrhoid surgery cost',
    'laser hemorrhoid treatment',
    'piles operation india',
    'جراحة البواسير في الهند',
    'علاج البواسير في الهند',
    'تكلفة جراحة البواسير في الهند',
    'أفضل مستشفى البواسير في الهند'
  ],
};

export default function PilesSurgeryIndiaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
          Piles (Hemorrhoids) Surgery in India: Laser & Traditional Treatment
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-700">
          Get permanent relief from piles at India&apos;s top colorectal surgery centers. Laser treatment from <strong>$800-1,200</strong>, traditional surgery from <strong>$600-1,000</strong>. 95% success rate, minimal pain, faster recovery.
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
              <div className="text-3xl font-bold text-primary-600">$600-1,200</div>
              <p className="text-sm text-gray-600">Surgery Cost</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary-600">95%+</div>
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
              <div className="text-3xl font-bold text-primary-600">1-2 weeks</div>
              <p className="text-sm text-gray-600">Recovery Time</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Piles Surgery Cost: India vs USA vs UK vs UAE</h2>
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
                  <td className="border border-gray-300 px-4 py-2">Laser Hemorrhoidoplasty (Grade 2-3)</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-green-600">$800 - $1,200</td>
                  <td className="border border-gray-300 px-4 py-2">$4,500 - $7,000</td>
                  <td className="border border-gray-300 px-4 py-2">$4,000 - $6,000</td>
                  <td className="border border-gray-300 px-4 py-2">$3,500 - $5,000</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">73-82%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Stapler Hemorrhoidopexy (Grade 3-4)</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-green-600">$900 - $1,400</td>
                  <td className="border border-gray-300 px-4 py-2">$5,000 - $8,000</td>
                  <td className="border border-gray-300 px-4 py-2">$4,500 - $7,000</td>
                  <td className="border border-gray-300 px-4 py-2">$4,000 - $6,000</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">72-82%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Traditional Hemorrhoidectomy (Grade 3-4)</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-green-600">$600 - $1,000</td>
                  <td className="border border-gray-300 px-4 py-2">$3,500 - $6,000</td>
                  <td className="border border-gray-300 px-4 py-2">$3,000 - $5,000</td>
                  <td className="border border-gray-300 px-4 py-2">$2,500 - $4,000</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">71-83%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">MIPH (Minimally Invasive Procedure for Hemorrhoids)</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-green-600">$1,000 - $1,500</td>
                  <td className="border border-gray-300 px-4 py-2">$6,000 - $9,000</td>
                  <td className="border border-gray-300 px-4 py-2">$5,000 - $7,500</td>
                  <td className="border border-gray-300 px-4 py-2">$4,500 - $6,500</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">77-83%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Rubber Band Ligation (Grade 1-2)</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-green-600">$300 - $500</td>
                  <td className="border border-gray-300 px-4 py-2">$1,500 - $2,500</td>
                  <td className="border border-gray-300 px-4 py-2">$1,200 - $2,000</td>
                  <td className="border border-gray-300 px-4 py-2">$1,000 - $1,800</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">70-80%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Sclerotherapy (Grade 1-2)</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-green-600">$200 - $400</td>
                  <td className="border border-gray-300 px-4 py-2">$1,000 - $2,000</td>
                  <td className="border border-gray-300 px-4 py-2">$800 - $1,500</td>
                  <td className="border border-gray-300 px-4 py-2">$700 - $1,300</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">70-80%</td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
      </section>

      {/* What's Included */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">What&apos;s Included in India Piles Surgery Packages</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>✅ Pre-Procedure (Day 1)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Consultation with colorectal surgeon/proctologist</li>
                <li>Digital rectal examination (DRE)</li>
                <li>Anoscopy or proctoscopy examination</li>
                <li>Grade assessment (Grade 1-4 hemorrhoids)</li>
                <li>Blood tests (CBC, coagulation profile)</li>
                <li>Treatment plan and cost breakdown</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>✅ Surgery Day (Day 2-3)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Spinal or local anesthesia (30-60 minute procedure)</li>
                <li>Laser/stapler/traditional hemorrhoidectomy</li>
                <li>Post-op observation (4-8 hours daycare or 1-night stay)</li>
                <li>Post-op medications (painkillers, stool softeners, antibiotics)</li>
                <li>Wound care instructions and diet guidance</li>
                <li>Follow-up appointment scheduled</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>✅ Recovery Period (1-4 weeks)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Pain management (oral painkillers for 5-7 days)</li>
                <li>Sitz baths (warm water baths 3-4 times daily)</li>
                <li>High-fiber diet and increased water intake</li>
                <li>Stool softeners to prevent constipation</li>
                <li>Follow-up consultation at Week 1 and Week 4</li>
                <li>WhatsApp support for any concerns</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>✅ Long-Term Care (1 year+)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>1-year follow-up to check for recurrence</li>
                <li>Lifestyle modification guidance (diet, exercise)</li>
                <li>Prevention tips to avoid future hemorrhoids</li>
                <li>Virtual consultations for any issues</li>
                <li>95%+ patients remain symptom-free long-term</li>
                <li>Warranty on procedure (re-treatment if needed within 1 year)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Laser vs Traditional */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Laser vs Traditional Piles Surgery: Which to Choose?</h2>
        <Card>
          <CardContent className="overflow-x-auto pt-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Factor</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Laser Hemorrhoidoplasty</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Traditional Hemorrhoidectomy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Pain Level</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Minimal pain (2-3/10 post-op)</td>
                  <td className="border border-gray-300 px-4 py-2 text-orange-600">⚠️ Moderate to severe pain (6-8/10 post-op)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Hospital Stay</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Daycare (4-8 hours), go home same day</td>
                  <td className="border border-gray-300 px-4 py-2 text-orange-600">⚠️ 1-2 day hospital stay</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Recovery Time</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600">✅ 5-7 days return to work</td>
                  <td className="border border-gray-300 px-4 py-2 text-orange-600">⚠️ 2-4 weeks return to work</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Bleeding</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Minimal bleeding (laser seals blood vessels)</td>
                  <td className="border border-gray-300 px-4 py-2 text-orange-600">⚠️ Moderate bleeding risk</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Recurrence Rate</td>
                  <td className="border border-gray-300 px-4 py-2">5-10% recurrence (slightly higher)</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600">✅ 2-5% recurrence (lower)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Cost</td>
                  <td className="border border-gray-300 px-4 py-2">$800-1,200 (20-40% more expensive)</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600">✅ $600-1,000 (more affordable)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Best For</td>
                  <td className="border border-gray-300 px-4 py-2">Grade 2-3 hemorrhoids, patients wanting faster recovery, minimal pain</td>
                  <td className="border border-gray-300 px-4 py-2">Grade 3-4 severe hemorrhoids, budget-conscious patients</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Recommendation</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Recommended for most patients (better experience)</td>
                  <td className="border border-gray-300 px-4 py-2">Good for severe cases, lower recurrence rate</td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
      </section>

      {/* Top Hospitals */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Top 5 Piles Surgery Hospitals in India</h2>
        <div className="space-y-6">
          
      {/* Testimonials Section */}
      <Testimonials
        testimonials={TREATMENT_TESTIMONIALS['generic']}
        title="Success Stories from Our Piles Surgery Patients"
        subtitle="Real transformations from GCC patients who achieved life-changing results"
      />

      {/* Trust Badges Section */}
      <TrustBadges />

      <Card className="border-primary-200 bg-primary-50">
            <CardHeader>
              <CardTitle className="text-2xl">1. Pristyn Care (Pan-India, 30+ Cities)</CardTitle>
              <p className="text-sm text-gray-600">🏆 #1 Piles Surgery Specialists | 50,000+ Procedures Annually</p>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="mb-2"><strong>Specialty:</strong> Laser piles surgery, fissure treatment, fistula surgery, pilonidal sinus</p>
                <p className="mb-2"><strong>Success Rate:</strong> 97% success, 2% recurrence rate, 95% patient satisfaction</p>
                <p className="mb-2"><strong>Key Doctors:</strong> Network of 100+ colorectal surgeons across India</p>
                <p className="mb-2"><strong>Technology:</strong> Advanced laser (1470nm diode laser), daycare facility, insurance cashless</p>
                <p className="mb-2"><strong>Cost:</strong> Laser: $900-1,200 | Traditional: $700-1,000</p>
                <p><strong>Why Choose:</strong> Largest piles surgery network in India. Free pickup/drop. Insurance accepted. 1-year warranty. 30-day post-op free care.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">2. Fortis Hospital (Delhi, Mumbai, Bangalore)</CardTitle>
              <p className="text-sm text-gray-600">🥈 JCI Accredited | 5,000+ Piles Surgeries Annually</p>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="mb-2"><strong>Specialty:</strong> Complex hemorrhoids, stapler hemorrhoidopexy, MIPH procedures</p>
                <p className="mb-2"><strong>Success Rate:</strong> 98% success, 1-2% recurrence, 96% patient satisfaction</p>
                <p className="mb-2"><strong>Key Doctors:</strong> Dr. Tarun Mittal (Delhi, 20+ years), Dr. Rajesh Ahlawat (Bangalore, 18+ years)</p>
                <p className="mb-2"><strong>Technology:</strong> Advanced stapler devices, laser hemorrhoidoplasty, minimally invasive techniques</p>
                <p className="mb-2"><strong>Cost:</strong> Laser: $1,000-1,400 | Stapler: $1,100-1,500 | Traditional: $800-1,200</p>
                <p><strong>Why Choose:</strong> International standards. Excellent post-op care. Arabic coordinators for GCC patients. Insurance accepted.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">3. Apollo Hospitals (Chennai, Bangalore, Delhi, Hyderabad)</CardTitle>
              <p className="text-sm text-gray-600">🥉 Asia&apos;s #1 Hospital Chain | 6,000+ Piles Procedures Annually</p>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="mb-2"><strong>Specialty:</strong> All types of hemorrhoid surgery, advanced colorectal procedures</p>
                <p className="mb-2"><strong>Success Rate:</strong> 97% success, 3% recurrence, 94% patient satisfaction</p>
                <p className="mb-2"><strong>Key Doctors:</strong> Dr. P. Raghu Ram (Chennai, 25+ years), Dr. Somashekhar S.P. (Bangalore, 22+ years)</p>
                <p className="mb-2"><strong>Technology:</strong> Laser, radiofrequency ablation, stapler hemorrhoidopexy, robotic surgery for complex cases</p>
                <p className="mb-2"><strong>Cost:</strong> Laser: $1,100-1,500 | Stapler: $1,200-1,600 | Traditional: $900-1,300</p>
                <p><strong>Why Choose:</strong> 40+ years experience. Best infrastructure. International patient services. 10+ JCI-accredited hospitals.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">4. Max Super Speciality Hospital (Delhi NCR, Punjab)</CardTitle>
              <p className="text-sm text-gray-600">Top Private Hospital | 3,000+ Piles Surgeries Annually</p>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="mb-2"><strong>Specialty:</strong> Minimally invasive piles surgery, complex colorectal procedures</p>
                <p className="mb-2"><strong>Success Rate:</strong> 96% success, 3-4% recurrence, 93% patient satisfaction</p>
                <p className="mb-2"><strong>Key Doctors:</strong> Dr. Anil Arora (GI Surgeon, 30+ years), Dr. Rajesh Agarwal (Colorectal, 20+ years)</p>
                <p className="mb-2"><strong>Technology:</strong> Harmonic scalpel, laser, stapler, THD (Transanal Hemorrhoidal Dearterialization)</p>
                <p className="mb-2"><strong>Cost:</strong> Laser: $950-1,350 | THD: $1,200-1,600 | Traditional: $750-1,100</p>
                <p><strong>Why Choose:</strong> Premium care. NABH accredited. Insurance cashless. Comfortable private rooms. Good for GCC patients.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">5. Medanta The Medicity (Gurugram, Delhi NCR)</CardTitle>
              <p className="text-sm text-gray-600">World-Class Multi-Specialty | 2,500+ Piles Procedures Annually</p>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="mb-2"><strong>Specialty:</strong> Advanced colorectal surgery, complex hemorrhoids with comorbidities</p>
                <p className="mb-2"><strong>Success Rate:</strong> 98% success (highest in North India), 1% recurrence, 97% patient satisfaction</p>
                <p className="mb-2"><strong>Key Doctors:</strong> Dr. Kapil Kumar (GI Surgery, 28+ years), Dr. Sameer Kaushal (Colorectal, 18+ years)</p>
                <p className="mb-2"><strong>Technology:</strong> Latest laser systems, harmonic scalpel, robotic surgery, advanced stapler devices</p>
                <p className="mb-2"><strong>Cost:</strong> Laser: $1,100-1,500 | Robotic-assisted: $2,000-2,500 | Traditional: $900-1,300</p>
                <p><strong>Why Choose:</strong> Best infrastructure in India. 1,250-bed super-specialty hospital. Excellent outcomes for complex cases.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Piles Surgery Recovery Timeline</h2>
        <div className="space-y-4">
          <Card className="border-primary-200 bg-primary-50">
            <CardHeader>
              <CardTitle>Day 1: Surgery Day</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Morning:</strong> Surgery (30-60 minutes) under spinal/local anesthesia</li>
                <li><strong>Afternoon:</strong> Observation in recovery room (4-8 hours for laser, 1-2 days for traditional)</li>
                <li><strong>Pain level:</strong> 3-5/10 for laser, 6-8/10 for traditional (managed with painkillers)</li>
                <li><strong>Diet:</strong> Liquid diet initially, soft foods by evening</li>
                <li><strong>Mobility:</strong> Can walk slowly with assistance</li>
                <li><strong>Discharge:</strong> Same day for laser (6-8pm), next day for traditional</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Days 2-7: Early Recovery</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Pain:</strong> Moderate for 3-5 days (oral painkillers 3-4 times daily)</li>
                <li><strong>Bowel movements:</strong> First BM can be painful (use stool softeners), improves after Day 3-4</li>
                <li><strong>Sitz baths:</strong> 3-4 warm water baths daily (10-15 minutes each) for pain relief</li>
                <li><strong>Activity:</strong> Light walking encouraged, no heavy lifting, no strenuous exercise</li>
                <li><strong>Diet:</strong> High-fiber foods (fruits, vegetables, whole grains), 8-10 glasses water daily</li>
                <li><strong>Follow-up:</strong> Clinic visit at Day 5-7 to check healing</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Weeks 2-4: Full Healing</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Pain:</strong> Minimal to no pain after Week 2</li>
                <li><strong>Return to work:</strong> Week 1-2 for laser (office jobs), Week 3-4 for traditional surgery</li>
                <li><strong>Physical activity:</strong> Light exercise (walking, yoga) from Week 2, normal exercise after Week 4</li>
                <li><strong>Wound healing:</strong> Complete healing by Week 3-4</li>
                <li><strong>Bowel movements:</strong> Normal, painless by Week 2-3</li>
                <li><strong>Follow-up:</strong> Final checkup at Week 4 to confirm healing</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary-200 bg-primary-50">
            <CardHeader>
              <CardTitle>Months 1-12: Long-Term Results</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Symptom relief:</strong> 95%+ patients completely symptom-free</li>
                <li><strong>Normal life:</strong> All activities resumed - no restrictions</li>
                <li><strong>Recurrence prevention:</strong> High-fiber diet, adequate water, regular exercise, avoid constipation</li>
                <li><strong>Follow-up:</strong> 1-year checkup to monitor for any recurrence</li>
                <li><strong>Success rate:</strong> 95-98% remain piles-free long-term with lifestyle modifications</li>
                <li><strong>Warranty:</strong> Re-treatment free if recurrence within 1 year (at select hospitals)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Schema for Rich Snippets */}
      <FAQSchema faqs={[
        { question: "How much does piles surgery cost in India?", answer: "Piles surgery in India costs $600-1,500 depending on procedure type: Laser hemorrhoidoplasty: $800-1,200, Stapler hemorrhoidopexy: $900-1,400, Traditional hemorrhoidectomy: $600-1,000, MIPH: $1,000-1,500, Rubber band ligation: $300-500. This is 70-80% cheaper than USA ($3,500-9,000). Price includes consultation, anoscopy, surgery, hospital stay (daycare or 1-night), medications, and 1-year follow-up." },
        { question: "Is laser piles surgery better than traditional surgery?", answer: "Yes, laser piles surgery is generally better for most patients: Advantages: Less pain (2-3/10 vs 6-8/10), faster recovery (5-7 days vs 2-4 weeks), daycare procedure (go home same day), minimal bleeding, less complications. Disadvantages: Slightly higher recurrence rate (5-10% vs 2-5%), 20-40% more expensive ($800-1,200 vs $600-1,000). Laser recommended for Grade 2-3 piles and patients wanting faster recovery. Traditional surgery better for severe Grade 4 piles and budget-conscious patients." },
        { question: "How long is recovery after piles surgery in India?", answer: "Recovery time depends on procedure type: Laser surgery: 5-7 days return to work (office jobs), 2 weeks full recovery, minimal pain after Day 5. Traditional surgery: 2-4 weeks return to work, 4-6 weeks full recovery, moderate pain for 1 week. Rubber band ligation: 3-5 days recovery, minimal pain. All procedures: Complete healing in 3-4 weeks, normal bowel movements by Week 2-3, all activities resumed after Week 4. Sitz baths 3-4 times daily speed healing. High-fiber diet prevents constipation." },
        { question: "What is the success rate of piles surgery in India?", answer: "Piles surgery success rate in India is 95-98% at top hospitals. Success means: Permanent relief from bleeding, pain, prolapse, 95%+ patients symptom-free long-term, Recurrence rates: 2-5% for traditional surgery, 5-10% for laser surgery, 10-15% for rubber band ligation. Top hospitals like Pristyn Care (97%), Fortis (98%), Apollo (97%) have international-standard outcomes. Factors affecting success: Surgeon experience (500+ procedures annually), proper post-op care (high-fiber diet, avoid constipation), lifestyle modifications (exercise, hydration, no straining). Most recurrences preventable with dietary changes." },
        { question: "Can I fly home after piles surgery in India?", answer: "Yes, you can fly home after piles surgery: Laser surgery: Safe to fly after 3-5 days with surgeon clearance. Minimal pain by Day 3-4, wound healing progressing. Traditional surgery: Safe to fly after 7-10 days. Wait until pain controlled, wound healing stable, first bowel movement passed comfortably. Flight tips: Use donut cushion for sitting comfort, Walk around cabin every hour, Avoid constipation (stay hydrated, take stool softeners), Carry pain medications, Continue sitz baths at home. Virtual follow-up via WhatsApp after returning home. Final checkup at 4 weeks can be done with local doctor or return to India." },
        { question: "What grade of piles can be treated with laser in India?", answer: "Laser piles surgery in India is effective for Grade 2 and Grade 3 hemorrhoids: Grade 1 (internal, no prolapse): Usually treated with rubber band ligation or sclerotherapy ($200-500), laser not needed. Grade 2 (prolapse during bowel movement, reduces spontaneously): Ideal for laser ($800-1,200), 95%+ success rate. Grade 3 (prolapse, requires manual reduction): Laser effective ($900-1,300), sometimes combined with stapler. Grade 4 (permanently prolapsed, cannot be reduced): Traditional surgery or stapler hemorrhoidopexy preferred ($900-1,400), laser less effective. Your doctor will assess grade during anoscopy and recommend best treatment. All grades treatable in India with high success rates." },
        { question: "Do Indian piles surgeons have proper training?", answer: "Yes, top Indian colorectal surgeons are highly qualified: Education: MS (General Surgery) + MCh (Surgical Gastroenterology) or DNB (Colorectal Surgery), 3-5 years specialization after basic degree. Experience: Top surgeons perform 500-1,000+ piles surgeries annually, 15-25+ years experience, Trained at AIIMS, CMC Vellore, or international centers (USA, UK, Europe). Hospitals: Pristyn Care network has 100+ trained surgeons nationwide, Fortis, Apollo, Max employ board-certified colorectal specialists, JCI/NABH accreditation ensures quality standards. Technology: Latest laser systems (1470nm diode laser), Advanced stapler devices (PPH, MIPH), Harmonic scalpel, robotic surgery for complex cases. Same equipment and techniques as USA/Europe." },
        { question: "How to prevent piles recurrence after surgery in India?", answer: "Prevent piles recurrence after surgery with these steps: Dietary changes: High-fiber diet (25-30g daily): fruits, vegetables, whole grains, beans, Drink 8-10 glasses water daily, Avoid spicy, oily foods for 2-3 months. Bowel habits: Never strain during bowel movements, Don't delay when you feel urge to go, Spend <5 minutes on toilet, Use stool softeners if needed. Lifestyle: Regular exercise (walking 30 min daily), Maintain healthy weight, Avoid prolonged sitting (take breaks every hour), Practice good anal hygiene. Follow-up: 1-year checkup to monitor healing, Early treatment if symptoms return (90% preventable with lifestyle changes). With these modifications, 95%+ patients remain piles-free long-term. Hospitals provide detailed written instructions and dietitian consultation." }
      ]} />

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Is piles surgery painful in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Modern piles surgery in India is much less painful than traditional methods. Laser surgery causes minimal pain (2-3/10 post-op) managed easily with oral painkillers. Traditional surgery causes moderate pain (6-8/10) for 3-5 days but controlled with medications. Surgery itself is painless (done under spinal/local anesthesia). Most patients surprised at how manageable pain is with proper pain management protocol.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Can piles be cured permanently in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Yes, piles surgery in India provides permanent cure for 95-98% of patients. Grade 2-4 hemorrhoids rarely resolve without surgery. After laser or traditional surgery, hemorrhoid tissue is removed permanently. Recurrence rates: 2-5% for traditional surgery, 5-10% for laser. Most recurrences preventable with lifestyle changes (high-fiber diet, adequate water, regular exercise, no straining). With proper post-op care, 95%+ patients remain symptom-free for life.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Which is the best hospital for piles surgery in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Best hospitals for piles surgery in India: Pristyn Care (Pan-India, 50,000+ procedures annually, best for laser), Fortis Hospitals (JCI accredited, 98% success rate), Apollo Hospitals (40+ years experience, international standards), Max Super Speciality (premium care, insurance accepted), Medanta The Medicity (highest success rate 98%, best infrastructure). Choose based on: Location preference, Budget ($600-1,500), Procedure type (laser vs traditional), Insurance coverage, International patient services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How long do I need to stay in India for piles surgery?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Minimum 5-7 days stay in India for piles surgery: Day 1: Arrival, consultation, tests. Day 2-3: Surgery (30-60 min procedure). Day 3-5: Post-op recovery, pain management. Day 5-7: Follow-up checkup, surgeon clearance to fly. Laser surgery patients can fly after 3-5 days. Traditional surgery patients should wait 7-10 days. For GCC patients, many choose to stay 10-14 days for complete initial healing before flying home. Final checkup at Week 4 can be virtual or with local doctor.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What is the minimum age for piles surgery in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Minimum 18 years old for elective piles surgery.</strong> Age considerations by group:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Under 18:</strong> Surgery rarely needed (piles uncommon in children/teens), conservative treatment preferred (fiber, sitz baths, creams), surgery only if severe bleeding causing anemia or prolapse interfering with daily life</li>
                <li><strong>18-40 years:</strong> Ideal age for surgery (faster healing, fewer comorbidities), most common age group for elective piles surgery, excellent recovery outcomes</li>
                <li><strong>40-65 years:</strong> Surgery safe and effective, may have slightly longer recovery due to slower healing, comorbidities (diabetes, hypertension) well-managed before surgery</li>
                <li><strong>65+ years:</strong> Surgery possible if medically fit, comprehensive pre-op evaluation required (cardiac, kidney function), anesthesia risk slightly higher but manageable, oldest patient treated at Fortis: 82 years old</li>
              </ul>
              <p className="text-gray-700">
                <strong>Special considerations:</strong> Pregnancy: Surgery postponed until 3-6 months after delivery (piles often resolve postpartum). Young adults (18-25): Lifestyle modifications tried first for 3-6 months before surgery. Elderly patients: Laser surgery preferred (daycare, less anesthesia time, faster recovery). Age is not a barrier - fitness and overall health more important than chronological age.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Can I smoke after piles surgery in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>No, smoking severely impairs healing and increases complications.</strong> Impact timeline:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Before surgery:</strong> Stop smoking 2-4 weeks before procedure (improves wound healing, reduces infection risk 50%+, better anesthesia tolerance)</li>
                <li><strong>Immediately after (Week 1-4):</strong> Absolutely NO smoking during critical healing period (wound healing most vulnerable first 2 weeks, nicotine constricts blood vessels reducing blood flow to surgical site, smoking increases infection risk 3-4× higher)</li>
                <li><strong>First 3 months:</strong> Continue avoiding smoking (delayed wound healing can cause anal fissures, chronic wounds, prolonged pain)</li>
                <li><strong>Long-term:</strong> Quit permanently for best results (smoking is risk factor for piles recurrence, chronic constipation from smoking damages anal tissues)</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Smoking complications specific to piles surgery:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li>Delayed wound healing (4-6 weeks instead of 2-3 weeks)</li>
                <li>Increased pain and bleeding</li>
                <li>Higher infection rates (15-20% vs 3-5% in non-smokers)</li>
                <li>Anal fissure formation (painful tears in anal lining)</li>
                <li>Poor tissue repair leading to recurrence</li>
              </ul>
              <p className="text-gray-700">
                <strong>Alternatives:</strong> Nicotine replacement therapy (patches, gum) slightly better than cigarettes but still delays healing - discuss with surgeon. Vaping/e-cigarettes equally harmful (nicotine is the problem, not just smoke). Many hospitals require you to sign waiver if smoking - surgeon may refuse surgery if you won&apos;t quit. Quitting smoking is single most important thing you can do for successful piles surgery outcome.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>When can I exercise and lift weights after piles surgery?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Gradual return to exercise over 4-6 weeks.</strong> Timeline by activity level:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Walking:</strong> Start Day 1 post-surgery (encouraged immediately, reduces blood clot risk, promotes healing, start with 5-10 minutes 3-4 times daily, increase to 20-30 minutes by Week 2)</li>
                <li><strong>Light stretching/yoga:</strong> Week 2-3 (gentle poses only, avoid inversions, downward dog, anything putting pressure on anal area)</li>
                <li><strong>Swimming:</strong> Week 3-4 (after wound completely healed, no bleeding/discharge, chlorine can irritate if wounds not fully closed)</li>
                <li><strong>Cycling:</strong> Week 4-6 (sitting on bike seat puts pressure on surgical site, wait until pain-free, use padded seat/shorts)</li>
                <li><strong>Running/jogging:</strong> Week 4-6 (jarring motion can strain healing tissues, start slow - 10-15 minutes, increase gradually)</li>
                <li><strong>Weight training (upper body):</strong> Week 3-4 (light weights only, no straining, avoid holding breath)</li>
                <li><strong>Weight training (lower body):</strong> Week 6-8 (no heavy squats/deadlifts until Week 8, avoid exercises causing anal pressure)</li>
                <li><strong>Heavy lifting (&gt;20 lbs):</strong> Week 6-8 minimum (straining can cause bleeding, wound reopening, recurrence)</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Warning signs to stop exercise:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li>Bleeding from surgical site (fresh red blood)</li>
                <li>Increased pain or swelling in anal area</li>
                <li>Feeling of pressure or straining in rectum</li>
                <li>Fever or signs of infection</li>
              </ul>
              <p className="text-gray-700">
                <strong>Exercise tips for piles surgery recovery:</strong> Always empty bowels before exercise (no straining with full rectum). Wear supportive underwear during exercise. Stay hydrated (8-10 glasses water daily). Never hold breath during exercise (causes intra-abdominal pressure spike). If activity causes pain - you&apos;re doing too much too soon. Surgeon clearance required before resuming gym/sports (usually Week 4-6 checkup).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What can I eat after piles surgery? Any diet restrictions?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>High-fiber diet is critical for healing and preventing constipation.</strong> Diet timeline:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Day 1 (Surgery day):</strong> Clear liquids (water, coconut water, clear soup, apple juice) for 6-8 hours post-op, then soft foods (khichdi, porridge, mashed potatoes, yogurt)</li>
                <li><strong>Days 2-7:</strong> Soft, high-fiber foods (well-cooked vegetables, fruits without skin like banana/papaya, whole grain porridge, lentil soup, prunes/dates for natural laxative effect)</li>
                <li><strong>Week 2-4:</strong> Regular high-fiber diet (25-30g fiber daily, all fruits and vegetables, whole grains - brown rice, whole wheat, oats, beans and legumes)</li>
                <li><strong>Long-term:</strong> Continue high-fiber diet to prevent recurrence</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Foods to eat (promotes soft stools, easy bowel movements):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li>Fruits: Papaya, banana, apple (peeled), pears, prunes, figs, berries</li>
                <li>Vegetables: Spinach, bottle gourd, ridge gourd, carrots (cooked), beans</li>
                <li>Grains: Oats, brown rice, whole wheat bread, quinoa</li>
                <li>Protein: Dal (lentils), eggs, fish, chicken (avoid red meat first 2 weeks)</li>
                <li>Fluids: 8-10 glasses water daily, buttermilk, fresh fruit juice</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Foods to avoid (causes constipation, irritation, straining):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>First 4 weeks avoid:</strong> Spicy foods (can burn during bowel movements), red meat (hard to digest), fried/oily foods, white bread/white rice (low fiber), cheese and dairy (constipating), alcohol (dehydrating), caffeine (can irritate)</li>
                <li><strong>Forever avoid (recurrence triggers):</strong> Processed foods low in fiber, excessive junk food, chronically low water intake</li>
              </ul>
              <p className="text-gray-700">
                <strong>First bowel movement after surgery:</strong> Usually Day 2-3. Will be uncomfortable but not as painful as feared (stool softeners prescribed to ease passage). Key is to not strain - let it happen naturally. Sitz bath immediately after BM reduces pain. Each subsequent BM gets easier. By Week 2, bowel movements should be comfortable and pain-free with high-fiber diet.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Do I need someone to accompany me for piles surgery in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Companion recommended but not mandatory for laser surgery, required for traditional surgery.</strong> Breakdown:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Laser piles surgery (daycare):</strong> Can manage alone if needed (procedure under local/spinal anesthesia - you&apos;re awake, discharged same day after 6-8 hours, can walk and take care of basic needs), but companion helpful for: picking up medications, helping with first sitz bath at hotel, emotional support first 24-48 hours, accompanying to follow-up visit</li>
                <li><strong>Traditional piles surgery (1-2 night stay):</strong> Companion strongly recommended (general anesthesia often used, more post-op pain requiring assistance, 1-2 day hospital stay with caregiver helpful, mobility limited first 24 hours)</li>
                <li><strong>International patients:</strong> Many GCC patients come alone for laser surgery (hospitals provide: Airport pickup/drop, dedicated international patient coordinator, 24/7 WhatsApp support, hotel booking assistance, nurse visit at hotel Day 1-2 if needed for ₹1,500-2,000/$20-25)</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Hospital support for solo patients:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li>Pristyn Care: Free pickup/drop, WhatsApp support 24/7, hotel recommendations near hospital</li>
                <li>Fortis/Apollo: International patient coordinator handles all logistics, hotel arrangements</li>
                <li>Max/Medanta: Concierge services, language translators (Arabic available)</li>
              </ul>
              <p className="text-gray-700">
                <strong>Practical tips for solo patients:</strong> Book hotel within 2-3 km of hospital (easy for follow-up visits). Stock up on supplies before surgery (stool softeners, pain meds, high-fiber snacks, water). Have emergency contact numbers (surgeon, hospital, coordinator). Video call family/friends for emotional support. Consider staying extra 2-3 days for peace of mind. Most solo patients manage fine - piles surgery is not major surgery requiring intensive care.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Can piles come back during pregnancy after surgery?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Yes, piles can recur during pregnancy even after successful surgery.</strong> Details:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Recurrence risk:</strong> 20-30% of women develop piles during pregnancy (even if previously treated surgically), 50% resolve spontaneously within 3-6 months after delivery, only 10-15% require repeat surgery post-pregnancy</li>
                <li><strong>Why pregnancy causes piles:</strong> Increased blood volume puts pressure on pelvic veins, growing uterus compresses inferior vena cava, hormonal changes relax vein walls, constipation common in pregnancy, pushing during labor strains hemorrhoidal veins</li>
                <li><strong>Timeline:</strong> Most pregnancy-related piles develop in third trimester (Months 7-9), worsen during labor/delivery, improve significantly within 6-12 weeks postpartum</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Planning pregnancy after piles surgery:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Wait 3-6 months:</strong> Allow complete healing before pregnancy (reduces recurrence risk from 30% to 20%)</li>
                <li><strong>Surgery if pregnant:</strong> Avoid elective piles surgery during pregnancy (only emergency surgery for severe bleeding, gangrene), conservative treatment preferred (sitz baths, fiber, creams), surgery postponed until 3-6 months postpartum</li>
                <li><strong>C-section vs vaginal delivery:</strong> Vaginal delivery increases piles risk more than C-section, but C-section not recommended solely to prevent piles</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Prevention during pregnancy (if you&apos;ve had surgery):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li>High-fiber diet from Day 1 of pregnancy (30-35g daily)</li>
                <li>Drink 10-12 glasses water daily</li>
                <li>Regular gentle exercise (walking, prenatal yoga)</li>
                <li>Kegel exercises to improve pelvic floor strength</li>
                <li>Never strain during bowel movements (use stool softeners if needed)</li>
                <li>Sleep on left side (reduces pressure on pelvic veins)</li>
              </ul>
              <p className="text-gray-700">
                <strong>Bottom line:</strong> Previous piles surgery doesn&apos;t guarantee freedom from pregnancy-related piles, but it doesn&apos;t increase risk either. Most pregnancy piles resolve after delivery without repeat surgery. If planning pregnancy within 1-2 years, discuss timing with surgeon - may recommend delaying surgery until after delivery unless severe symptoms interfering with quality of life.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What is the difference between internal and external piles treatment in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Different treatment approaches based on piles location and severity.</strong> Comparison:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Internal piles (inside rectum, above dentate line):</strong> Not usually painful (no pain nerve endings inside rectum), main symptom: painless bleeding during bowel movements, prolapse (Grade 1-4 based on how far they bulge out), treated based on grade</li>
                <li><strong>External piles (under skin around anus):</strong> Painful (many nerve endings in anal skin), can form thrombosed pile (blood clot inside - extremely painful), visible/palpable lump outside anus, may bleed if skin tears</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Treatment options by type:</strong></p>
              <table className="min-w-full border-collapse border border-gray-300 mb-3">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Piles Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Treatment Options</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Cost in India</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Internal Grade 1-2</td>
                    <td className="border border-gray-300 px-4 py-2">Rubber band ligation, sclerotherapy, infrared coagulation (non-surgical)</td>
                    <td className="border border-gray-300 px-4 py-2">$200-500</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Internal Grade 3</td>
                    <td className="border border-gray-300 px-4 py-2">Laser hemorrhoidoplasty, stapler hemorrhoidopexy (minimally invasive)</td>
                    <td className="border border-gray-300 px-4 py-2">$800-1,400</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Internal Grade 4</td>
                    <td className="border border-gray-300 px-4 py-2">Traditional hemorrhoidectomy, stapler hemorrhoidopexy (surgery required)</td>
                    <td className="border border-gray-300 px-4 py-2">$900-1,400</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">External piles (small)</td>
                    <td className="border border-gray-300 px-4 py-2">Conservative (sitz baths, creams, lifestyle changes), excision under local anesthesia</td>
                    <td className="border border-gray-300 px-4 py-2">$200-600</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Thrombosed external piles</td>
                    <td className="border border-gray-300 px-4 py-2">Incision &amp; drainage (emergency procedure within 72 hours for best results)</td>
                    <td className="border border-gray-300 px-4 py-2">$300-700</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Mixed (internal + external)</td>
                    <td className="border border-gray-300 px-4 py-2">Combined approach: laser/stapler for internal + excision for external (single procedure)</td>
                    <td className="border border-gray-300 px-4 py-2">$1,000-1,600</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-gray-700">
                <strong>Diagnosis:</strong> Doctor performs digital rectal examination (DRE) + anoscopy/proctoscopy to visualize internal piles (can&apos;t see them from outside). External piles visible on inspection. Your surgeon will explain exactly which type you have, which grade, and recommend appropriate treatment. Most patients have mixed internal + external piles requiring combination treatment. All treatments available at same hospitals - no need to go to different facilities.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>When can I have sex after piles surgery in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Safe to resume sex after 3-4 weeks (once wound fully healed).</strong> Detailed timeline:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Week 1-2:</strong> Avoid all sexual activity (wound healing critical phase, any pressure/strain on anal/rectal area can cause bleeding, pain levels still moderate, infection risk highest first 2 weeks)</li>
                <li><strong>Week 3-4:</strong> Light sexual activity may be possible (vaginal sex okay if comfortable for women, anal sex absolutely avoid for 6-8 weeks minimum, oral sex safe, masturbation okay if doesn&apos;t cause straining)</li>
                <li><strong>After Week 4:</strong> Normal sexual activity can resume (wound should be fully healed, pain-free, surgeon clearance at Week 4 follow-up recommended)</li>
                <li><strong>Anal sex:</strong> Wait minimum 6-8 weeks, even then approach with extreme caution (anal sex puts direct pressure on surgical site, high risk of wound reopening, bleeding, infection, many surgeons recommend avoiding permanently or waiting 3-6 months), use plenty of lubrication if attempting, stop immediately if any pain/bleeding</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Gender-specific considerations:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Women:</strong> Vaginal sex safe after 3-4 weeks (avoid positions putting pressure on rectum initially like missionary with legs up, side-lying or woman-on-top positions more comfortable), pregnancy should wait 3-6 months after surgery for complete healing</li>
                <li><strong>Men:</strong> Erectile function not affected by piles surgery, prostate stimulation during sex may cause discomfort first 4-6 weeks, normal sexual function returns fully by Week 6-8</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Warning signs to stop sexual activity:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li>Bleeding from anal area during or after sex</li>
                <li>Severe pain in rectal area</li>
                <li>Swelling or feeling of pressure in anus</li>
                <li>Discharge or signs of infection</li>
              </ul>
              <p className="text-gray-700">
                <strong>Communication with surgeon:</strong> This is medical question - don&apos;t be embarrassed to ask your surgeon directly. They can examine wound healing and give personalized clearance. General rule: If it hurts, don&apos;t do it. Your body will tell you when it&apos;s ready. Rushing back to sex too soon risks complications that delay total healing by weeks. Patience for 3-4 weeks ensures lifetime of comfortable sexual activity without piles pain/bleeding.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <Card className="mb-12 border-primary-200 bg-primary-50">
        <CardContent className="pt-6">
          <h2 className="mb-4 text-2xl font-bold">Ready for Permanent Relief from Piles?</h2>
          <p className="mb-6 text-gray-700">
            Get <strong>FREE consultation</strong> with India&apos;s top colorectal surgeons. We help 15,000+ international patients annually achieve permanent relief at 70-80% lower cost than USA/UK/UAE. Laser surgery from <strong>$800</strong>, traditional from <strong>$600</strong>.
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

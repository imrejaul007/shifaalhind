import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FAQSchema } from '@/components/seo/faq-schema-client';

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

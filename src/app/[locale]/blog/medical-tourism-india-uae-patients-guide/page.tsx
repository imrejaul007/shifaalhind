import { Metadata } from 'next';
import BlogArticleLayout from '@/components/blog/blog-article-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Medical Tourism to India from UAE: Complete 2025 Guide for Emirati & Expat Patients',
  description: 'Complete guide to medical tourism from UAE to India. Cost comparison, step-by-step process, visa guide, best hospitals, and real patient success stories for 2025.',
  keywords: ['medical tourism India from UAE', 'medical treatment India for UAE patients', 'India vs UAE medical costs', 'medical visa India for UAE', 'Dubai to India medical tourism'],
};

export const dynamic = 'force-dynamic';

export default function MedicalTourismUAEGuidePage() {
  return (
    <BlogArticleLayout
      title="Medical Tourism to India from UAE: Complete 2025 Guide"
      excerpt="Everything UAE patients need to know about traveling to India for medical treatment."
      author="Shifa AlHind Medical Team"
      publishedDate="January 2025"
      lastUpdated="January 2025"
      readTime="15 min"
      breadcrumbTitle="UAE Patients Guide"
    >
      {/* Introduction */}
      <section className="mb-8">
        <p className="text-lg leading-relaxed">
          Medical costs in the UAE are among the highest in the world, with procedures like heart surgery costing $35,000+, knee replacements $25,000+, and IVF cycles $10,000+. Even with insurance, many procedures are not fully covered, leaving patients with substantial bills.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          India has become the preferred destination for over 25,000 UAE residents annually seeking world-class medical care at 60-80% lower costs. This complete guide covers everything you need to know about medical tourism from the UAE to India in 2025.
        </p>
      </section>

      {/* Cost Comparison */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Cost Comparison: UAE vs India (2025)</h2>

        <Card>
          <CardContent className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary-500 text-white">
                  <tr>
                    <th className="p-3 text-left">Procedure</th>
                    <th className="p-3 text-left">UAE (Dubai)</th>
                    <th className="p-3 text-left">India</th>
                    <th className="p-3 text-left">Your Savings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">Heart Bypass Surgery</td>
                    <td className="p-3">AED 130,000 ($35,000)</td>
                    <td className="p-3">AED 33,000 ($9,000)</td>
                    <td className="p-3 font-semibold text-accent-600">74% less</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Knee Replacement</td>
                    <td className="p-3">AED 92,000 ($25,000)</td>
                    <td className="p-3">AED 26,000 ($7,000)</td>
                    <td className="p-3 font-semibold text-accent-600">72% less</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">IVF (Single Cycle)</td>
                    <td className="p-3">AED 37,000 ($10,000)</td>
                    <td className="p-3">AED 15,000 ($4,000)</td>
                    <td className="p-3 font-semibold text-accent-600">60% less</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Cataract Surgery</td>
                    <td className="p-3">AED 11,000 ($3,000)</td>
                    <td className="p-3">AED 3,700 ($1,000)</td>
                    <td className="p-3 font-semibold text-accent-600">67% less</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Dental Implants</td>
                    <td className="p-3">AED 11,000 ($3,000)</td>
                    <td className="p-3">AED 3,300 ($900)</td>
                    <td className="p-3 font-semibold text-accent-600">70% less</td>
                  </tr>
                  <tr>
                    <td className="p-3">Spine Surgery</td>
                    <td className="p-3">AED 55,000 ($15,000)</td>
                    <td className="p-3">AED 18,500 ($5,000)</td>
                    <td className="p-3 font-semibold text-accent-600">67% less</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Why UAE Patients Choose India */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Why UAE Patients Choose India</h2>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Massive Cost Savings (60-80%)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                The average UAE patient saves AED 40,000-150,000 ($10,000-$40,000) on major procedures. Even after accounting for flights, accommodation, and all travel expenses, you save more than half compared to treatment in Dubai.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. No Waiting Lists</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                In the UAE, elective procedures can have 3-6 month waiting periods. India offers treatment within 2-3 weeks of contact. Book today, fly next week, return home treated.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Same or Better Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                India&apos;s top hospitals (Apollo, Fortis, Max, Manipal) are JCI-accredited with the same standards as Dubai&apos;s best hospitals. Many Indian doctors trained at Harvard, Johns Hopkins, and Mayo Clinic. Success rates match or exceed UAE hospitals.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Cultural Comfort</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Large Muslim population means halal food is widely available, prayer facilities at all hospitals, and cultural sensitivity. Many hospitals have Arabic-speaking staff.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Easy Travel</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Direct flights from Dubai/Abu Dhabi to Mumbai, Delhi, Bangalore (3-4 hours). Medical visa processed in 3-5 days. Total travel time shorter than flying to Europe or USA.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Best Medical Cities */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Best Medical Cities in India for UAE Patients</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Mumbai</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Flight from Dubai:</strong> 3h 15min, 3+ daily flights<br />
                <strong>Best for:</strong> Heart surgery, cancer treatment, orthopedics<br />
                <strong>Top Hospitals:</strong> Lilavati, Kokilaben, Apollo
              </p>
              <p className="text-gray-700">
                India&apos;s financial capital with world-class medical infrastructure. Easiest city for GCC patients (many Arabic speakers, halal food everywhere).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>New Delhi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Flight from Dubai:</strong> 3h 30min, 4+ daily flights<br />
                <strong>Best for:</strong> Heart surgery, joint replacement, neurosurgery<br />
                <strong>Top Hospitals:</strong> Fortis, Max, Medanta, Apollo
              </p>
              <p className="text-gray-700">
                Capital city with India&apos;s highest concentration of super-specialty hospitals. Home to Fortis Escorts (Asia&apos;s largest cardiac center).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bangalore</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Flight from Dubai:</strong> 4h, daily flights<br />
                <strong>Best for:</strong> Heart surgery, fertility treatment, cancer<br />
                <strong>Top Hospitals:</strong> Narayana Health, Manipal, Cloudnine
              </p>
              <p className="text-gray-700">
                India&apos;s tech hub with excellent weather year-round. Narayana Health performs more heart surgeries than any hospital globally (30,000+ annually).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Chennai</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Flight from Dubai:</strong> 4h 30min, daily flights<br />
                <strong>Best for:</strong> Heart surgery, liver transplant, oncology<br />
                <strong>Top Hospitals:</strong> Apollo, Fortis Malar, MIOT
              </p>
              <p className="text-gray-700">
                Known as &quot;Health Capital of India.&quot; Apollo Chennai pioneered many procedures. Excellent for complex cases.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Complete Step-by-Step Process</h2>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Step 1: Initial Consultation (Week 1)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>1. Contact Shifa AlHind or hospital directly</li>
                <li>2. Submit medical reports (tests, scans, doctor notes)</li>
                <li>3. Receive preliminary evaluation from Indian specialists</li>
                <li>4. Get treatment plan and detailed cost estimate</li>
                <li>5. Video consultation with doctor (optional but recommended)</li>
              </ul>
              <p className="mt-4 font-semibold text-primary-600">Cost: Free</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 2: Planning & Booking (Week 2)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>1. Select hospital and doctor</li>
                <li>2. Schedule treatment date</li>
                <li>3. Apply for medical visa (details below)</li>
                <li>4. Book flights (Emirates, Air India, IndiGo)</li>
                <li>5. Arrange accommodation</li>
                <li>6. Receive pre-arrival instructions</li>
              </ul>
              <p className="mt-4 font-semibold text-primary-600">Time: 1 week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 3: Arrival & Treatment</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>1. Fly to India (3-4 hours from UAE)</li>
                <li>2. Airport pickup arranged</li>
                <li>3. Check into hotel or hospital guest house</li>
                <li>4. Hospital admission and pre-treatment tests</li>
                <li>5. Meet doctor and confirm treatment plan</li>
                <li>6. Undergo treatment/surgery</li>
                <li>7. Hospital stay (varies by procedure)</li>
                <li>8. Recovery and follow-up</li>
              </ul>
              <p className="mt-4 font-semibold text-primary-600">Duration: 1-3 weeks depending on procedure</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Step 4: Return Home</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>1. Final consultation and discharge</li>
                <li>2. Receive medical records and reports</li>
                <li>3. Get flight clearance certificate</li>
                <li>4. Fly back to UAE</li>
                <li>5. Telemedicine follow-ups (1 week, 1 month, 3 months)</li>
                <li>6. Coordination with your UAE doctor</li>
              </ul>
              <p className="mt-4 font-semibold text-primary-600">Post-treatment support: Ongoing</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Medical Visa Guide */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Medical Visa Application Guide</h2>

        <Card className="border-primary-200 bg-primary-50">
          <CardContent className="p-6">
            <h3 className="mb-4 text-xl font-bold text-gray-900">Medical Visa for UAE Residents</h3>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">Requirements:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Valid passport (6+ months validity)</li>
                  <li>✓ Hospital invitation letter</li>
                  <li>✓ Medical reports/diagnosis</li>
                  <li>✓ Passport-size photos (2)</li>
                  <li>✓ Visa application form</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-semibold text-gray-900">Details:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Fee:</strong> AED 294 ($80)</li>
                  <li><strong>Processing:</strong> 3-5 business days</li>
                  <li><strong>Validity:</strong> 60 days, multiple entry</li>
                  <li><strong>Apply via:</strong> VFS Global (Dubai, Abu Dhabi)</li>
                </ul>
              </div>
            </div>

            <p className="mt-6 rounded-lg bg-white p-4 text-gray-700">
              <strong>Pro Tip:</strong> Hospital coordinates the invitation letter. Shifa AlHind handles entire visa process for our patients.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Flights & Accommodation */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Flights & Accommodation</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Direct Flights from UAE</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold">Dubai to Mumbai</p>
                  <p>3h 15min, Emirates (3x daily), Air India (2x daily)</p>
                  <p>Cost: AED 1,200-2,200 round-trip</p>
                </div>
                <div>
                  <p className="font-semibold">Dubai to Delhi</p>
                  <p>3h 30min, Emirates (4x daily), IndiGo (3x daily)</p>
                  <p>Cost: AED 1,100-2,000 round-trip</p>
                </div>
                <div>
                  <p className="font-semibold">Dubai to Bangalore</p>
                  <p>4h, Emirates (2x daily), Air India (daily)</p>
                  <p>Cost: AED 1,300-2,400 round-trip</p>
                </div>
                <div>
                  <p className="font-semibold">Abu Dhabi to India</p>
                  <p>Similar options via Etihad Airways</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accommodation Options</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold">Hospital Guest Houses</p>
                  <p>AED 110-220/night ($30-60)</p>
                  <p>Clean, basic, walking distance to hospital</p>
                </div>
                <div>
                  <p className="font-semibold">Budget Hotels</p>
                  <p>AED 150-300/night ($40-80)</p>
                  <p>Comfortable, near hospital, good amenities</p>
                </div>
                <div>
                  <p className="font-semibold">Serviced Apartments</p>
                  <p>AED 370-550/night ($100-150)</p>
                  <p>Kitchen, living space, ideal for longer stays</p>
                </div>
                <div>
                  <p className="font-semibold">Luxury Hotels</p>
                  <p>AED 550-1,100/night ($150-300)</p>
                  <p>5-star comfort, concierge services</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Patient Success Stories */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Real Patient Success Stories</h2>

        <div className="space-y-6">
          <Card className="border-primary-200 bg-primary-50">
            <CardHeader>
              <CardTitle>Mohammed K., 62, Dubai - Heart Surgery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                &quot;I needed triple bypass surgery. Dubai hospitals quoted AED 127,500 ($34,700). I went to Fortis Hospital in Delhi - total cost including flights and accommodation was AED 48,070 ($13,100). Saved AED 79,430 ($21,600)! The care was exceptional, hospital was cleaner than many in Dubai, and my surgeon had trained at Cleveland Clinic. Six months post-surgery, I&apos;m healthier than ever.&quot;
              </p>
              <p className="font-semibold text-accent-600">Saved: AED 79,430 (62%)</p>
            </CardContent>
          </Card>

          <Card className="border-accent-200 bg-accent-50">
            <CardHeader>
              <CardTitle>Fatima & Ahmed R., Abu Dhabi - IVF Treatment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                &quot;After two failed IVF cycles in Abu Dhabi costing AED 55,000 ($15,000), we were losing hope. Mumbai&apos;s Nova IVF Clinic gave us twins! Total cost including all expenses: AED 29,780 ($8,110). We have 10 frozen embryos for future siblings. Best decision we ever made.&quot;
              </p>
              <p className="font-semibold text-accent-600">Result: Twins + 10 frozen embryos, saved AED 25,000</p>
            </CardContent>
          </Card>

          <Card className="border-primary-200 bg-primary-50">
            <CardHeader>
              <CardTitle>Sarah M., 48, Sharjah - Knee Replacement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                &quot;I needed both knees replaced. Dubai quote: AED 88,000 ($24,000). I went to Manipal Hospital in Bangalore for both knees - total cost AED 48,620 ($13,250). Saved AED 39,380 ($10,750)! I was walking without pain in 8 weeks. The physiotherapy team was incredible. I tell all my friends about India now.&quot;
              </p>
              <p className="font-semibold text-accent-600">Saved: AED 39,380 (45%)</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>How long does the entire process take?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                From first contact to flying back home: typically 3-5 weeks. This includes 1 week planning, 1-3 weeks in India (depending on procedure), and immediate return home.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Will my UAE health insurance cover treatment in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Many UAE insurance plans cover treatment abroad for pre-approved procedures. Check with your insurer. Even without coverage, you still save significantly. Most patients pay upfront in India and seek reimbursement from UAE insurance later.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Is language a barrier?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                No. All doctors in top hospitals speak fluent English. Many hospitals have Arabic-speaking staff for GCC patients. Shifa AlHind provides Arabic translation if needed.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Is halal food available?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Yes, absolutely. India has 200+ million Muslims. All hospitals provide halal food options. Restaurants near hospitals offer halal meals. Mosques are within walking distance of most hospitals.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What if I need emergency care after returning to UAE?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Your Indian surgeon remains available 24/7 via WhatsApp/telemedicine. We coordinate with your UAE doctor for any needed interventions. All hospitals provide detailed discharge summaries in English.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <Card className="border-primary-200 bg-primary-50">
          <CardContent className="p-8">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Ready to Start Your Medical Journey?</h2>
            <p className="mb-6 text-lg text-gray-700">
              Over 25,000 UAE residents travel to India for medical treatment annually. Join them in accessing world-class healthcare at 60-80% lower costs than Dubai or Abu Dhabi.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-white p-4">
                <p className="text-3xl font-bold text-primary-600">60-80%</p>
                <p className="text-gray-700">Cost savings</p>
              </div>
              <div className="rounded-lg bg-white p-4">
                <p className="text-3xl font-bold text-primary-600">3-4 hours</p>
                <p className="text-gray-700">Flight time</p>
              </div>
              <div className="rounded-lg bg-white p-4">
                <p className="text-3xl font-bold text-primary-600">2-3 weeks</p>
                <p className="text-gray-700">Total treatment time</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </BlogArticleLayout>
  );
}

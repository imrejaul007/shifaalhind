import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles, CANCER_RELATED_ARTICLES } from '@/components/blog/related-articles';
import { InternalLinks } from '@/components/seo/internal-links';
import { Testimonials, TREATMENT_TESTIMONIALS } from '@/components/testimonials/testimonials';
import { TrustBadges } from '@/components/trust-badges/trust-badges';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Varicose Veins Treatment in India 2025: Laser EVLT, Cost, Best Vascular Surgeons',
  description: 'Varicose veins treatment in India: Laser EVLT ($800-1,200), Sclerotherapy ($300-600), RFA ($900-1,400). Top vascular hospitals, 95% success, save 70-80% vs USA. Pain-free laser treatment.',
  keywords: [
    'varicose veins treatment india',
    'varicose veins surgery india',
    'laser treatment varicose veins india',
    'EVLT india cost',
    'varicose veins removal india',
    'علاج الدوالي في الهند',
    'تكلفة علاج الدوالي في الهند',
    'الليزر للدوالي في الهند',
    'best vascular surgeon india',
    'sclerotherapy india',
    'RFA varicose veins india',
    'أفضل جراح أوعية دموية في الهند'
  ],
};

export default function VaricoseVeinsTreatmentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
          Varicose Veins Treatment in India: Laser EVLT & Cost
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600">
          Get pain-free laser varicose veins treatment (EVLT) in India from $800-1,200 (vs $5,000-8,000 in USA).
          95% success rate. Walk out same day. Save 70-80%.
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
              <div className="mb-2 text-3xl font-bold text-primary-600">$800-1,200</div>
              <div className="text-sm text-gray-600">Laser EVLT Cost (One Leg)</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="mb-2 text-3xl font-bold text-primary-600">95%+</div>
              <div className="text-sm text-gray-600">Success Rate (No Recurrence)</div>
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
              <div className="mb-2 text-3xl font-bold text-primary-600">Same Day</div>
              <div className="text-sm text-gray-600">Walk Out (No Hospital Stay)</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Varicose Veins Treatment Cost (2025)</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left">Treatment Type</th>
                <th className="border border-gray-300 px-4 py-3 text-left">India</th>
                <th className="border border-gray-300 px-4 py-3 text-left">USA</th>
                <th className="border border-gray-300 px-4 py-3 text-left">UK</th>
                <th className="border border-gray-300 px-4 py-3 text-left">UAE</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Laser EVLT (One Leg)</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">$800-1,200</td>
                <td className="border border-gray-300 px-4 py-3">$5,000-8,000</td>
                <td className="border border-gray-300 px-4 py-3">$3,000-5,000</td>
                <td className="border border-gray-300 px-4 py-3">$2,500-4,000</td>
                <td className="border border-gray-300 px-4 py-3 text-primary-600 font-semibold">70-85%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold">Radiofrequency Ablation (RFA)</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">$900-1,400</td>
                <td className="border border-gray-300 px-4 py-3">$5,500-9,000</td>
                <td className="border border-gray-300 px-4 py-3">$3,500-6,000</td>
                <td className="border border-gray-300 px-4 py-3">$3,000-5,000</td>
                <td className="border border-gray-300 px-4 py-3 text-primary-600 font-semibold">72-84%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Sclerotherapy (Injection)</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">$300-600</td>
                <td className="border border-gray-300 px-4 py-3">$2,000-4,000</td>
                <td className="border border-gray-300 px-4 py-3">$1,500-2,500</td>
                <td className="border border-gray-300 px-4 py-3">$1,200-2,000</td>
                <td className="border border-gray-300 px-4 py-3 text-primary-600 font-semibold">70-85%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold">Surgical Stripping (Traditional)</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">$1,200-1,800</td>
                <td className="border border-gray-300 px-4 py-3">$7,000-12,000</td>
                <td className="border border-gray-300 px-4 py-3">$4,000-7,000</td>
                <td className="border border-gray-300 px-4 py-3">$3,500-6,000</td>
                <td className="border border-gray-300 px-4 py-3 text-primary-600 font-semibold">70-83%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Bilateral Treatment (Both Legs)</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">$1,400-2,200</td>
                <td className="border border-gray-300 px-4 py-3">$9,000-15,000</td>
                <td className="border border-gray-300 px-4 py-3">$5,500-9,000</td>
                <td className="border border-gray-300 px-4 py-3">$4,500-7,500</td>
                <td className="border border-gray-300 px-4 py-3 text-primary-600 font-semibold">72-85%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          * Prices include: Doppler ultrasound, local anesthesia, procedure, compression stockings, follow-up. Same-day discharge.
        </p>
      </section>

      {/* Treatment Methods Comparison */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Laser EVLT vs Traditional Surgery</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left">Factor</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Laser EVLT</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Traditional Surgery</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Pain Level</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Minimal pain (local anesthesia)</td>
                <td className="border border-gray-300 px-4 py-3 text-orange-600">⚠️ Moderate pain (general anesthesia)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold">Procedure Time</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">✅ 30-45 minutes</td>
                <td className="border border-gray-300 px-4 py-3 text-orange-600">⚠️ 2-3 hours</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Hospital Stay</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Same-day discharge (2-4 hours)</td>
                <td className="border border-gray-300 px-4 py-3 text-orange-600">⚠️ 1-2 days in hospital</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold">Recovery Time</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Walk immediately, work in 2-3 days</td>
                <td className="border border-gray-300 px-4 py-3 text-orange-600">⚠️ 2-4 weeks off work</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Scarring</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Tiny needle mark (3mm)</td>
                <td className="border border-gray-300 px-4 py-3 text-orange-600">⚠️ Visible surgical scars (5-10cm)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold">Success Rate</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">✅ 95% (no recurrence at 5 years)</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">✅ 90% (higher recurrence risk)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Cost</td>
                <td className="border border-gray-300 px-4 py-3">$800-1,200 per leg</td>
                <td className="border border-gray-300 px-4 py-3">$1,200-1,800 per leg</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold">Recommendation</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Best choice for most patients</td>
                <td className="border border-gray-300 px-4 py-3">Only if laser not suitable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Top Hospitals */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Top 5 Varicose Veins Treatment Centers</h2>
        <div className="space-y-6">
          
      {/* Testimonials Section */}
      <Testimonials
        testimonials={TREATMENT_TESTIMONIALS['generic']}
        title="Success Stories from Our Varicose Veins Treatment Patients"
        subtitle="Real transformations from GCC patients who achieved life-changing results"
      />

      {/* Trust Badges Section */}
      <TrustBadges />

      <Card className="border-primary-200 bg-primary-50">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-xl">🏆 #1: Pristyn Care (All Major Cities)</span>
                <span className="text-sm font-normal text-primary-600">⭐ 4.7/5 (5,000+ reviews)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                <strong>Specialty:</strong> Laser Varicose Veins Treatment | <strong>Procedures:</strong> 25,000+ EVLT annually
              </p>
              <p className="text-gray-700">
                <strong>Success Rate:</strong> 96% (no recurrence) | <strong>Cost:</strong> EVLT: $900-1,200, RFA: $1,000-1,400
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Why Choose:</strong> Largest varicose veins network in India, 50+ clinics, same-day procedure,
                1-year warranty, free compression stockings, EMI options available, WhatsApp follow-up.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-xl">#2: Apollo Hospitals (Chennai, Delhi, Bangalore)</span>
                <span className="text-sm font-normal text-primary-600">⭐ 4.6/5 (3,500+ reviews)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                <strong>Procedures:</strong> 12,000+ annually | <strong>Cost:</strong> EVLT: $1,000-1,500
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Why Choose:</strong> JCI accredited, experienced vascular surgeons (15+ years),
                advanced Doppler ultrasound, international patient wing.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-xl">#3: Fortis Vascular Institute (Delhi, Mumbai)</span>
                <span className="text-sm font-normal text-primary-600">⭐ 4.6/5 (2,800+ reviews)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                <strong>Procedures:</strong> 8,000+ annually | <strong>Cost:</strong> EVLT: $1,100-1,600
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Why Choose:</strong> Premier vascular center, RFA and EVLT both available,
                same-day discharge, 95% success rate.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Recovery Timeline (Laser EVLT)</h2>
        <div className="space-y-4">
          <Card className="border-primary-200 bg-primary-50">
            <CardHeader>
              <CardTitle>Day 1: Procedure Day</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>What Happens:</strong> Laser EVLT procedure (30-45 minutes), local anesthesia. Walk immediately after.
                Wear compression stockings. Discharge in 2-4 hours.
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Pain Level:</strong> 1-2/10 (minimal discomfort)
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Days 2-7: Early Recovery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Activity:</strong> Walk 20-30 minutes daily, return to desk work Day 2-3, avoid standing &gt;2 hours.
                Wear compression stockings 24/7 (first week).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Weeks 2-4: Full Recovery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Activity:</strong> Return to all normal activities, exercise/gym allowed Week 3, remove compression stockings Week 2-3.
                Veins fade completely by Week 4-6.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={[
        { question: "How much does varicose veins laser treatment cost in India?", answer: "Varicose veins laser treatment (EVLT) in India costs $800-1,200 for one leg vs $5,000-8,000 in USA (70-85% savings). Bilateral (both legs): $1,400-2,200. RFA: $900-1,400. Sclerotherapy: $300-600. Includes Doppler ultrasound, procedure, compression stockings, follow-up. Same-day discharge. Pristyn Care offers EMI options and 1-year warranty." },
        { question: "Is laser varicose veins treatment painful?", answer: "No, laser EVLT is minimally painful. Local anesthesia numbs the leg (no general anesthesia needed). During procedure: No pain (may feel slight tugging). After procedure: 1-2/10 discomfort for 1-2 days (mild painkillers sufficient). Walk immediately after. Return to work in 2-3 days. Much less painful than traditional surgery (which requires 2-4 weeks recovery)." },
        { question: "What is the success rate of laser treatment for varicose veins?", answer: "Laser EVLT success rate is 95-96% with no recurrence at 5 years (higher than traditional surgery at 90%). Pristyn Care reports 96% success rate with 25,000+ procedures. Apollo/Fortis: 95% success. Factors for success: Experienced surgeon (1,000+ procedures), proper technique, wearing compression stockings for 2-3 weeks, follow-up ultrasound at 3 months." },
        { question: "Can I walk immediately after varicose veins laser treatment?", answer: "Yes! Walking immediately after laser EVLT is required and encouraged. You&apos;ll walk out of clinic same day (2-4 hours after procedure). Walk 20-30 minutes daily for first week (prevents blood clots, speeds healing). Return to desk work: Day 2-3. Avoid: Standing >2 hours continuously, heavy lifting for 1 week, running/gym for 2-3 weeks. Much faster recovery than surgery (which requires 2-4 weeks bed rest)." },
        { question: "How long do I need to wear compression stockings after treatment?", answer: "Wear compression stockings 24/7 for first 1-2 weeks after laser EVLT (except when showering). Week 2-3: Wear during day only. Week 4+: Optional (some doctors recommend for flying/long drives). Stockings provided by hospital. Purpose: Reduce swelling, prevent blood clots, speed healing, improve results. Pristyn Care provides free stockings with treatment package." },
        { question: "Will varicose veins come back after laser treatment?", answer: "Recurrence rate is low (4-5%) with laser EVLT vs 10-15% with traditional surgery. Treated veins are permanently sealed and absorbed by body (do not reopen). New varicose veins can develop in other veins if: Obesity, prolonged standing, pregnancy, genetics. Prevention: Maintain healthy weight, exercise regularly, elevate legs when resting, wear compression stockings during long flights. 5-year follow-up shows 95% patients remain vein-free." },
        { question: "Am I a good candidate for laser varicose veins treatment?", answer: "You&apos;re a good candidate if: (1) Visible bulging varicose veins, (2) Symptoms: leg pain, heaviness, swelling, night cramps, (3) Doppler ultrasound shows reflux (backward blood flow), (4) Veins suitable size (3-12mm diameter). Not suitable if: Very small spider veins only (use sclerotherapy instead), very large tortuous veins (may need surgery), active leg infection, pregnancy (wait until after delivery). Free consultation with Doppler ultrasound determines best treatment." },
        { question: "Do I need to stay in India after varicose veins treatment?", answer: "Minimum 5-7 days stay recommended: Day 1: Procedure day (same-day discharge), Days 2-3: Rest in hotel, short walks, Days 4-5: Follow-up ultrasound with surgeon, travel clearance, Days 6-7: Buffer before flight (ensure no complications). Can fly home Day 5-7 if healing well. Wear compression stockings during flight. Virtual follow-up at 1 month, 3 months via WhatsApp/video call. Many patients stay 3-5 days only." }
      ]} />

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">FAQ</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>What causes varicose veins?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Varicose veins caused by weak vein valves that allow blood to flow backward and pool (reflux).
                <strong>Risk factors:</strong> Genetics (family history), prolonged standing (teachers, nurses, retail workers),
                obesity, pregnancy, aging (valves weaken), gender (women 3x more likely).
                <strong>Symptoms:</strong> Visible bulging veins, leg pain/heaviness (worse end of day), swelling ankles,
                night cramps, skin discoloration near ankle. Left untreated can lead to ulcers, blood clots.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How is laser EVLT procedure performed?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Step 1:</strong> Doppler ultrasound to map veins (10 min).
                <strong>Step 2:</strong> Local anesthesia injection around vein (feels like mosquito bites).
                <strong>Step 3:</strong> Tiny needle inserted into vein (3mm incision).
                <strong>Step 4:</strong> Laser fiber threaded through vein under ultrasound guidance.
                <strong>Step 5:</strong> Laser activated - heats vein wall to seal it shut (30-45 min). No pain during procedure.
                <strong>Step 6:</strong> Compression stocking applied. Walk immediately. Discharge in 2-4 hours.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What&apos;s the difference between EVLT, RFA, and sclerotherapy?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Laser EVLT:</strong> Laser fiber seals vein ($800-1,200, 95% success, best for medium-large veins).
                <strong>RFA (Radiofrequency):</strong> Catheter heats vein with radio waves ($900-1,400, 95% success, less bruising than EVLT).
                <strong>Sclerotherapy:</strong> Injection of foam chemical to close vein ($300-600, 85% success, best for small veins/spider veins).
                <strong>Which to choose:</strong> Doppler ultrasound determines best option based on vein size/location. Most patients need EVLT or RFA for main veins, plus sclerotherapy for small surface veins.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How do I choose the best varicose veins treatment center?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Key factors:</strong> (1) Surgeon experience - choose 1,000+ EVLT procedures, (2) Success rate - ask for 5-year recurrence data (should be &lt;5%), (3) Technology - proper Doppler ultrasound mapping, latest laser equipment, (4) Volume - clinics doing 100+ procedures monthly have better results, (5) Warranty - check if complications covered.
                <strong>Top choices:</strong> Pristyn Care (largest network, 96% success, 1-year warranty), Apollo (JCI accredited), Fortis Vascular Institute (95% success).
                All offer same-day discharge, compression stockings included, WhatsApp follow-up.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What is the minimum age for varicose veins treatment?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Most patients 30-70 years old, but treatment available for all ages (18-90+).</strong> Age considerations:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Age 18-30:</strong> Usually wait unless severe symptoms (painful, ulcers, blood clots). Young veins may improve with lifestyle changes (weight loss, compression stockings, exercise). Pregnancy often causes temporary varicose veins that resolve after delivery.</li>
                <li><strong>Age 30-60:</strong> Ideal treatment age (most common). Laser EVLT highly successful (95%+). Quick recovery, return to work in 2-3 days. Best time to treat before complications develop (ulcers, clots, skin damage).</li>
                <li><strong>Age 60-80:</strong> Excellent treatment option if healthy (no heart/lung issues). Success rate same as younger patients. May need medical clearance if diabetes, heart disease. Recovery slightly slower (add 2-3 days) but still walk same day.</li>
                <li><strong>Age 80+:</strong> Oldest patient at Pristyn Care: 87 years old (successful EVLT). Treatment depends on overall health, not just age. Cardiologist clearance required if heart conditions. Alternative: Sclerotherapy (injection, no anesthesia needed).</li>
              </ul>
              <p className="text-gray-700">
                <strong>GCC patients note:</strong> Flying home safe at any age 5-7 days post-procedure. Compression stockings mandatory during flight.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Does smoking affect varicose veins treatment and recovery?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Yes, smoking significantly worsens varicose veins and slows healing after treatment.</strong> Impact and recommendations:
              </p>
              <p className="mb-3 text-gray-700"><strong>How smoking worsens varicose veins:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Damages vein walls:</strong> Nicotine and toxins weaken vein structure (accelerates valve failure)</li>
                <li><strong>Increases blood clotting:</strong> 2-3× higher risk of DVT (deep vein thrombosis) after procedure</li>
                <li><strong>Reduces oxygen delivery:</strong> Slows wound healing by 40-50% (tiny needle puncture takes longer to close)</li>
                <li><strong>Increases inflammation:</strong> More swelling, bruising, pain after laser EVLT</li>
                <li><strong>Higher recurrence rate:</strong> Smokers 2× more likely to develop new varicose veins (vein damage continues)</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Smoking timeline for treatment:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>2-4 weeks before:</strong> Quit or reduce to &lt;5 cigarettes/day (improves circulation, reduces clot risk)</li>
                <li><strong>Week 1-2 after:</strong> NO smoking (critical healing period, vein sealing itself)</li>
                <li><strong>Weeks 3-4 after:</strong> Avoid smoking if possible (healing continues, compression stockings still worn)</li>
                <li><strong>Long-term:</strong> Quit permanently to prevent new varicose veins (smoking damages all veins over time)</li>
              </ul>
              <p className="text-gray-700">
                <strong>Success rates:</strong> Non-smokers: 96% success. Smokers who quit 4 weeks before: 92% success. Current smokers: 85% success (higher recurrence, complications).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>When can I exercise, run, and lift weights after varicose veins treatment?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Walking encouraged immediately, but high-impact exercise delayed 2-3 weeks to allow vein healing.</strong> Detailed timeline:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Day 1 (procedure day):</strong> Walk immediately after EVLT (20-30 minutes in clinic/hotel). NO running, gym, yoga, heavy lifting. Walking promotes healing, prevents blood clots.</li>
                <li><strong>Days 2-7:</strong> Walk 20-30 minutes 2-3× daily (mandatory). Light activities OK (cooking, desk work, driving). Avoid: Standing &gt;2 hours, running, jumping, weightlifting, yoga, swimming (water pressure can dislodge clot).</li>
                <li><strong>Weeks 2-3:</strong> Gradual exercise resumption with compression stockings. Allowed: Brisk walking, light cycling (stationary bike), gentle yoga (no inversions/headstands), light weights (&lt;10kg). Avoid: Running, jumping, heavy squats, deadlifts, contact sports.</li>
                <li><strong>Week 3-4:</strong> Resume normal exercise (surgeon clearance recommended). Allowed: Running, gym, weightlifting, swimming, sports, yoga (all poses). Wear compression stockings during workout first 2 weeks back. Listen to leg - any pain/swelling means reduce intensity.</li>
                <li><strong>Month 2+:</strong> All activities unrestricted (vein fully healed and absorbed by body)</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Exercise-specific guidance:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Running:</strong> Week 3-4 (start slow: 1-2km, build up gradually)</li>
                <li><strong>Gym/weights:</strong> Week 3 for light weights, Week 4 for heavy lifting (avoid leg press Week 1-3)</li>
                <li><strong>Swimming:</strong> Week 2-3 (wait until needle puncture fully healed to prevent infection)</li>
                <li><strong>Yoga:</strong> Week 2 for gentle poses, Week 3-4 for inversions/headstands (blood flow to legs needs time to normalize)</li>
                <li><strong>Cycling:</strong> Week 2 (gentle, no racing). Outdoor cycling Week 3-4 (risk of falls/injury)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Can I get varicose veins treatment during pregnancy? What about after delivery?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Avoid laser treatment during pregnancy (hormones worsen veins temporarily). Wait 3-6 months after delivery for best results.</strong> Pregnancy and varicose veins:
              </p>
              <p className="mb-3 text-gray-700"><strong>Why pregnancy causes varicose veins:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Hormone changes:</strong> Progesterone relaxes vein walls (valves become weak and leaky)</li>
                <li><strong>Increased blood volume:</strong> 50% more blood during pregnancy (veins dilate to accommodate)</li>
                <li><strong>Uterus pressure:</strong> Growing baby compresses pelvic veins (blocks blood flow from legs)</li>
                <li><strong>Weight gain:</strong> Extra 10-15kg puts pressure on leg veins</li>
                <li><strong>Result:</strong> 40-50% of pregnant women develop varicose veins (especially 2nd-3rd trimester)</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Treatment timeline:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>During pregnancy:</strong> NO laser/injection treatment (wait until after delivery). Management: Compression stockings (15-20 mmHg), elevate legs 3-4× daily, walk 20-30 minutes daily, sleep on left side (reduces vein pressure). Safe and recommended.</li>
                <li><strong>Immediately after delivery:</strong> Wait - many pregnancy varicose veins improve on their own (40-60% disappear within 3-6 months as hormones normalize, uterus shrinks, blood volume decreases)</li>
                <li><strong>3 months after delivery:</strong> Assess if veins persisted (if still present, likely permanent). Can start planning treatment. Safe to treat if not breastfeeding (local anesthesia crosses into milk).</li>
                <li><strong>6 months after delivery:</strong> Ideal time for laser EVLT (hormones normalized, veins stabilized). Breastfeeding OK if pump and dump for 24 hours (local anesthesia clears quickly).</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Planning future pregnancies:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>If planning more children soon (within 1 year):</strong> Wait until done having children (pregnancy may cause new varicose veins, treatment is wasted money/time)</li>
                <li><strong>If 2+ years until next pregnancy:</strong> Safe to treat now (get 2 years relief, repeat if needed after next delivery)</li>
                <li><strong>If done having children:</strong> Perfect time to treat (permanent solution, prevent worsening with age)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Can varicose veins be prevented? What lifestyle changes help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Cannot prevent if genetic, but lifestyle changes reduce risk by 40-60% and slow progression.</strong> Evidence-based prevention strategies:
              </p>
              <p className="mb-3 text-gray-700"><strong>High-impact prevention (proven effective):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Maintain healthy weight:</strong> Every 5kg weight loss reduces vein pressure by 15%. BMI &lt;25 ideal (obesity increases risk 3-4×). Even 5-10kg loss helps significantly.</li>
                <li><strong>Daily walking/exercise:</strong> 30 minutes daily walking improves calf muscle pump (pushes blood back to heart). Swimming, cycling, yoga also excellent (strengthens leg muscles, improves circulation). Avoid: Prolonged sitting/standing.</li>
                <li><strong>Avoid prolonged standing:</strong> If job requires standing (teacher, nurse, retail, chef), take 5-minute sitting break every hour. Shift weight from leg to leg. Walk in place. Use anti-fatigue mat if possible.</li>
                <li><strong>Elevate legs daily:</strong> Elevate above heart level 15-20 minutes 2-3× daily (lie on bed, legs on pillow/wall). Especially important end of day (reduces swelling, gives valves a break). Watch TV/read in this position.</li>
                <li><strong>Wear compression stockings:</strong> 15-20 mmHg compression stockings for high-risk jobs (nurse, teacher, flight attendant). Wear during work hours, remove at night. Reduces vein dilation by 30-40% (prevents valve damage). Available on Amazon/pharmacy ($15-30).</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Moderate-impact prevention:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Avoid high heels:</strong> Heels &gt;5cm weaken calf muscle pump (wear flat shoes/sneakers when possible, save heels for special occasions)</li>
                <li><strong>Avoid tight clothing:</strong> Tight jeans, belts around waist compress veins (choose loose-fitting pants)</li>
                <li><strong>Sleep position:</strong> Sleep on left side with pillow between legs (reduces pressure on pelvic veins, especially during pregnancy)</li>
                <li><strong>Manage constipation:</strong> Straining increases abdominal pressure (damages vein valves). Eat high-fiber diet (fruits, vegetables, whole grains), drink 8 glasses water daily.</li>
              </ul>
              <p className="text-gray-700">
                <strong>Reality check:</strong> If genetics/family history of varicose veins, prevention only delays onset (doesn&apos;t eliminate risk). First signs (spider veins, leg heaviness): Start aggressive prevention + see vascular surgeon early (early treatment prevents complications).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Is varicose veins treatment covered by insurance in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Usually YES if symptomatic (pain, ulcers, blood clots). NO if cosmetic only (no symptoms).</strong> Insurance coverage details:
              </p>
              <p className="mb-3 text-gray-700"><strong>Indian insurance (for local patients):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Covered conditions:</strong> Painful varicose veins, leg ulcers (skin breakdown), superficial thrombophlebitis (vein clots), chronic venous insufficiency (swelling, skin changes), bleeding varicose veins. Requires doctor documentation of symptoms.</li>
                <li><strong>Not covered:</strong> Asymptomatic bulging veins (cosmetic concern only), spider veins (small red/blue veins, cosmetic)</li>
                <li><strong>Cashless hospitals:</strong> Pristyn Care (cashless with all major insurers), Apollo, Fortis (check network list). Pre-authorization required (2-3 days).</li>
                <li><strong>Reimbursement:</strong> Submit: Hospital bills, discharge summary, doctor prescription, Doppler ultrasound report. Typically reimbursed in 2-4 weeks. Coverage: 70-100% of costs (depending on policy).</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>International insurance (GCC patients):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Travel insurance:</strong> Usually NOT covered (pre-existing condition exclusion). Some policies cover emergency treatment only (e.g., vein clot during trip).</li>
                <li><strong>International health insurance:</strong> Some policies cover elective treatment in India (check policy). Requires: Pre-approval, medical necessity letter from doctor, Doppler ultrasound showing reflux.</li>
                <li><strong>Company insurance (expats):</strong> Some multinational company policies cover treatment in India (verify with HR). May require local network hospital (Apollo, Fortis).</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Self-pay (no insurance):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Cost advantage:</strong> Even without insurance, India 70-85% cheaper than UAE/USA/UK</li>
                <li><strong>Payment options:</strong> Cash, credit card, bank transfer. Pristyn Care offers 0% EMI (installment plans, no interest, 3-12 months).</li>
                <li><strong>Package pricing:</strong> Most hospitals offer all-inclusive packages (Doppler ultrasound, procedure, compression stockings, follow-up). No hidden costs. Get written quote before treatment.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>EVLT vs RFA vs Sclerotherapy - detailed comparison for choosing treatment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>All three are minimally invasive, same-day procedures with 85-96% success. Choice depends on vein size, location, and patient preference.</strong> Comprehensive comparison:
              </p>
              <table className="min-w-full border-collapse border border-gray-300 mb-3">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Factor</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Laser EVLT</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Radiofrequency (RFA)</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Sclerotherapy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Mechanism</td>
                    <td className="border border-gray-300 px-4 py-2">Laser fiber heats vein wall (900°C)</td>
                    <td className="border border-gray-300 px-4 py-2">Catheter heats with radio waves (120°C)</td>
                    <td className="border border-gray-300 px-4 py-2">Foam chemical injected to irritate/close vein</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Best For</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Medium-large veins (4-12mm)</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Large veins (6-20mm)</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Small veins, spider veins (&lt;4mm)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Success Rate</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">95-96% (5-year data)</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">94-96% (5-year data)</td>
                    <td className="border border-gray-300 px-4 py-2">85-90% (may need 2-3 sessions)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Procedure Time</td>
                    <td className="border border-gray-300 px-4 py-2">30-45 minutes per leg</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ 20-30 minutes (faster)</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ 10-20 minutes</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Pain/Discomfort</td>
                    <td className="border border-gray-300 px-4 py-2">2-3/10 (slight burning sensation, local anesthesia)</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ 1-2/10 (less discomfort than EVLT)</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ 1/10 (just needle prick)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Bruising</td>
                    <td className="border border-gray-300 px-4 py-2">Moderate (20-40% of patients, resolves 1-2 weeks)</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Minimal (10-20% of patients)</td>
                    <td className="border border-gray-300 px-4 py-2">Variable (30-50% with foam, less with liquid)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Cost (One Leg)</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ $800-1,200</td>
                    <td className="border border-gray-300 px-4 py-2">$900-1,400</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ $300-600 (cheapest)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Recovery</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Walk immediately, work Day 2-3</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Walk immediately, work Day 2-3</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Walk immediately, work same/next day</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Sessions Needed</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ 1 session (one-time treatment)</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ 1 session</td>
                    <td className="border border-gray-300 px-4 py-2 text-orange-600">⚠️ 2-4 sessions (2-3 weeks apart)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Anesthesia</td>
                    <td className="border border-gray-300 px-4 py-2">Local (tumescent anesthesia around vein)</td>
                    <td className="border border-gray-300 px-4 py-2">Local (tumescent anesthesia)</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ None (just needle prick, topical numbing cream optional)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Equipment Cost</td>
                    <td className="border border-gray-300 px-4 py-2">High (laser machine expensive, disposable fiber)</td>
                    <td className="border border-gray-300 px-4 py-2">High (RF generator, disposable catheter)</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Low (syringe, chemical only)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Compression Stockings</td>
                    <td className="border border-gray-300 px-4 py-2">Mandatory 1-2 weeks (24/7 first week)</td>
                    <td className="border border-gray-300 px-4 py-2">Mandatory 1-2 weeks</td>
                    <td className="border border-gray-300 px-4 py-2">Mandatory 2-3 weeks (longer duration)</td>
                  </tr>
                </tbody>
              </table>
              <p className="mb-3 text-gray-700"><strong>Doctor&apos;s recommendation by scenario:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Large bulging varicose veins (6-12mm), symptomatic (pain, swelling):</strong> EVLT or RFA (both 95%+ success, one session, permanent). RFA if concerned about bruising (less bruising than EVLT). EVLT slightly cheaper.</li>
                <li><strong>Small-medium varicose veins (3-6mm), mild symptoms:</strong> Sclerotherapy or EVLT. Sclerotherapy cheaper ($300-600 vs $800-1,200) but may need 2-3 sessions. EVLT one-time treatment. Choose based on budget/time.</li>
                <li><strong>Spider veins only (cosmetic, &lt;3mm, red/blue):</strong> Sclerotherapy only option (EVLT/RFA not suitable for tiny veins). May need 2-4 sessions for full clearance. Excellent cosmetic results.</li>
                <li><strong>Very large tortuous veins (&gt;12mm):</strong> RFA preferred (handles larger veins better than EVLT). Alternative: Combination RFA + phlebectomy (remove bulging sections through 2-3mm punctures).</li>
                <li><strong>Pregnant/breastfeeding:</strong> Compression stockings only (no procedures). Wait until 3-6 months post-delivery. If severe: Sclerotherapy possible (no anesthesia), but EVLT/RFA preferred after breastfeeding.</li>
                <li><strong>Budget-conscious patient:</strong> Sclerotherapy if small veins ($300-600, 2-3 sessions). EVLT if medium-large veins ($800-1,200, one session, better long-term value). Pristyn Care offers 0% EMI (installments).</li>
              </ul>
              <p className="text-gray-700">
                <strong>Most common approach:</strong> EVLT/RFA for main varicose veins + Sclerotherapy for remaining spider veins (combination treatment, 2-3 weeks apart). Total cost: $1,100-1,800. Best cosmetic and functional result.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What long-term care is needed after varicose veins treatment to prevent recurrence?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-gray-700">
                <strong>Treated veins don&apos;t come back (permanently sealed), but new varicose veins can develop in other veins if risk factors persist.</strong> Long-term management:
              </p>
              <p className="mb-3 text-gray-700"><strong>Follow-up schedule:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Week 1:</strong> In-person or virtual follow-up (check healing, remove bandage, assess for complications). Doppler ultrasound to confirm vein closure (100% of patients should have closed vein).</li>
                <li><strong>Month 1:</strong> Virtual follow-up via WhatsApp (send leg photos, report symptoms). Veins should be fading (50-70% improvement visible). Still wear compression stockings if needed for long standing/flights.</li>
                <li><strong>Month 3:</strong> Doppler ultrasound recommended (confirm permanent vein closure, check for new veins). 95%+ of patients show complete vein closure and absorption.</li>
                <li><strong>Month 6:</strong> Visual assessment (veins should be 90-100% faded). Final Doppler ultrasound if any concerns.</li>
                <li><strong>Yearly:</strong> Self-monitoring for new varicose veins (check legs every 3 months in good lighting, mirror). Annual vascular check-up if high-risk (family history, standing job, obesity).</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Lifestyle modifications to prevent new varicose veins:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Maintain healthy weight:</strong> Weight gain increases vein pressure (every 5kg gain increases recurrence risk by 10%). If BMI &gt;30: Aim to lose 10-15kg (reduces new vein formation by 40-50%).</li>
                <li><strong>Stay active:</strong> 30 minutes daily walking/exercise (strengthens calf muscle pump). Avoid prolonged sitting (take 5-minute walk breaks every hour, especially desk jobs). Avoid prolonged standing (shift weight, take sitting breaks if teacher/nurse/retail worker).</li>
                <li><strong>Elevate legs daily:</strong> 15-20 minutes 2-3× daily (legs above heart level, lie on bed with legs on wall/pillow). Especially important end of day if legs feel heavy/swollen. Reduces vein pressure by 60%.</li>
                <li><strong>Wear compression stockings:</strong> For high-risk situations - Long flights (4+ hours, reduces DVT risk), Long standing days (conferences, events, shopping), Pregnancy (if planning future pregnancies). 15-20 mmHg compression sufficient (available on Amazon $15-30).</li>
                <li><strong>Monitor for early signs:</strong> Spider veins appearing (tiny red/blue veins, may indicate valve failure starting), Leg heaviness end of day, Mild ankle swelling, Visible bulging veins starting. See vascular surgeon early if noticed (early treatment prevents progression to severe varicose veins).</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Recurrence rates and expectations:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Treated vein recurrence:</strong> &lt;5% (treated vein permanently sealed, absorbed by body, cannot reopen)</li>
                <li><strong>New varicose veins in other locations:</strong> 10-20% over 10 years (depends on genetics, lifestyle). Higher if: Family history strong (parent + sibling both have), Obesity (BMI &gt;30), Pregnancy (each pregnancy increases risk 10-15%), Prolonged standing job. Lower if: Maintain healthy weight, stay active, wear compression stockings preventively.</li>
                <li><strong>If new varicose veins develop:</strong> Repeat treatment very successful (same 95%+ success rate). Often less extensive than first treatment (fewer veins need treating). Can be done 2+ years after initial treatment (no limitations on repeat procedures).</li>
              </ul>
              <p className="text-gray-700">
                <strong>Reality check:</strong> If genetic predisposition strong (family history), new veins may develop despite best efforts. Think of it like dental cavities - brush/floss prevents most, but genetics play a role. Good news: Early treatment of new veins prevents severe complications (ulcers, clots, skin damage). Annual check-up recommended if high-risk.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Internal Links */}
      <InternalLinks
        title="Related Information"
        links={[
          { title: "Best Vascular Hospitals", href: "/hospitals", description: "Top-rated vascular surgery centers" },
          { title: "Piles Laser Treatment", href: "/treatments/piles-surgery-india", description: "Similar laser procedure for piles" },
          { title: "Free Consultation", href: "/consultation", description: "Get treatment plan from experts" }
        ]}
        variant="compact"
      />

      {/* Social Share */}
      <SocialShare
        title="Varicose Veins Laser Treatment India 2025: EVLT Cost & Best Centers"
        url="/treatments/varicose-veins-treatment-india"
        description="Save 70-80% on varicose veins laser treatment in India. EVLT: $800-1,200 vs $5,000-8,000 USA. 95% success, same-day discharge."
      />

      {/* Related Articles */}
      <RelatedArticles articles={CANCER_RELATED_ARTICLES} />

      {/* Final CTA */}
      <Card className="border-primary-200 bg-primary-50">
        <CardContent className="pt-6 text-center">
          <h3 className="mb-4 text-2xl font-bold text-gray-900">
            Get Pain-Free Laser Treatment for Varicose Veins
          </h3>
          <p className="mb-6 text-gray-700">
            Free Doppler ultrasound, same-day procedure, walk out in 2-4 hours. Save 70-80%.
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

import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles, CANCER_RELATED_ARTICLES } from '@/components/blog/related-articles';
import { InternalLinks } from '@/components/seo/internal-links';

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

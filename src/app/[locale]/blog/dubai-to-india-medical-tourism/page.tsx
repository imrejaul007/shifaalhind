import { Metadata } from 'next';
import BlogArticleLayout from '@/components/blog/blog-article-layout';
import { Card, CardContent } from '@/components/ui/card';
import { InternalLinks } from '@/components/seo/internal-links';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles, DENTAL_RELATED_ARTICLES } from '@/components/blog/related-articles';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Dubai to India Medical Tourism 2025 | Complete Guide - Save 60-75%',
  description: 'Complete guide for Dubai patients traveling to India for medical treatment. Direct flights (3-4 hours), save 60-75% on surgeries, JCI-accredited hospitals. Visa, costs, hospitals, and step-by-step process.',
  keywords: [
    'dubai to india medical tourism',
    'medical treatment india from dubai',
    'dubai india hospital',
    'uae to india healthcare',
    'dubai patients india',
    'medical tourism dubai to mumbai',
    'medical tourism dubai to delhi',
    'السياحة العلاجية من دبي إلى الهند',
    'العلاج في الهند من دبي',
    'مستشفيات الهند لمرضى دبي',
  ],
};

export default function DubaiToIndiaMedicalTourismPage() {
  return (
    <BlogArticleLayout
      title="Dubai to India Medical Tourism 2025: Complete Guide for UAE Patients"
      excerpt="Complete guide for Dubai patients seeking medical treatment in India. Save 60-75% on world-class healthcare. Direct flights (3-4 hours), JCI-accredited hospitals, easy visa process, and dedicated UAE patient services."
      author="Shifa AlHind Medical Team"
      publishedDate="October 2025"
      lastUpdated="October 2025"
      readTime="15 min"
      breadcrumbTitle="Dubai to India Medical Tourism"
    >
      {/* Introduction */}
      <Card>
        <CardContent className="pt-6">
          <p className="text-lg leading-relaxed mb-4">
            Dubai and UAE residents are increasingly choosing India for medical treatment, and for good reason.
            With <strong>direct flights taking just 3-4 hours</strong>, <strong>world-class JCI-accredited hospitals</strong>,
            and <strong>60-75% cost savings</strong> compared to Dubai healthcare, India has become the preferred
            medical tourism destination for UAE patients.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Every year, over <strong>50,000 UAE patients</strong> travel to India for medical treatment, from routine
            procedures like dental work and knee replacement to complex surgeries like heart bypass and cancer treatment.
            India&apos;s top hospitals offer the same international standards as Dubai, but at a fraction of the cost.
          </p>
          <p className="text-lg leading-relaxed">
            This comprehensive guide covers everything Dubai patients need to know: flights, visas, costs, top hospitals,
            treatment process, and real patient experiences. Whether you&apos;re considering a simple dental procedure or
            a complex organ transplant, this guide will help you make an informed decision.
          </p>
        </CardContent>
      </Card>

      {/* Why Dubai Patients Choose India */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">Why Dubai Patients Choose India for Medical Treatment</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">1. Massive Cost Savings (60-75%)</h3>
              <p className="text-muted-foreground mb-3">
                Healthcare in Dubai is expensive, even with insurance. A heart bypass surgery costs AED 180,000-250,000
                ($50,000-$70,000) in Dubai, but only AED 36,000-50,000 ($10,000-$14,000) in India - a savings of
                <strong> AED 144,000 ($40,000)</strong>.
              </p>
              <p className="text-muted-foreground">
                Even after including flights (AED 1,800), accommodation (AED 3,000/week), and visa (AED 250),
                Dubai patients save <strong>60-75% on total medical expenses</strong>. For many procedures, the
                savings pay for a family vacation to India!
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">2. Same International Quality Standards</h3>
              <p className="text-muted-foreground mb-3">
                India has <strong>over 50 JCI-accredited hospitals</strong> (same accreditation as Dubai&apos;s top
                hospitals like Cleveland Clinic, Mediclinic, NMC). These hospitals use the same equipment, follow the
                same protocols, and employ doctors trained at Harvard, Johns Hopkins, Cleveland Clinic, and Mayo Clinic.
              </p>
              <p className="text-muted-foreground">
                Success rates for major procedures are comparable or better: <strong>98.5% for heart surgery</strong>,
                <strong>95-98% for knee replacement</strong>, and <strong>85-92% for cancer treatment</strong> (early stage).
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">3. Direct Flights (3-4 Hours)</h3>
              <p className="text-muted-foreground mb-3">
                <strong>8-12 daily direct flights</strong> from Dubai to Mumbai (3h), Delhi (3.5h), and Bangalore (4h)
                on Emirates, Air India, IndiGo, and SpiceJet. Flight time is shorter than Dubai to London!
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Dubai → Mumbai: 3 hours (8 daily flights)</li>
                <li>Dubai → Delhi: 3.5 hours (10 daily flights)</li>
                <li>Dubai → Bangalore: 4 hours (6 daily flights)</li>
                <li>Dubai → Chennai: 4.5 hours (4 daily flights)</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">4. Easy Medical Visa Process</h3>
              <p className="text-muted-foreground mb-3">
                UAE residents get <strong>medical visa on arrival</strong> or can apply online in 2-3 days. No lengthy
                paperwork or appointments required. Medical visa is valid for 60 days (extendable) and allows 3 entries.
              </p>
              <p className="text-muted-foreground">
                Family members can accompany on medical attendant visa. We help with the entire visa process at no extra cost.
              </p>
            </div>

            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">5. UAE Patient Services</h3>
              <p className="text-muted-foreground mb-3">
                Top Indian hospitals have dedicated <strong>International Patient Departments</strong> specifically for
                UAE patients, with:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Arabic-speaking coordinators</strong> and translators</li>
                <li><strong>Halal food</strong> in hospital cafeterias</li>
                <li><strong>Prayer rooms</strong> with Qibla direction</li>
                <li><strong>Airport pickup/drop</strong> in Dubai-based vehicles</li>
                <li><strong>Accommodation</strong> in nearby hotels (AED 150-400/night)</li>
                <li><strong>Video consultations</strong> before travel</li>
                <li><strong>Follow-up care</strong> via WhatsApp/video calls</li>
              </ul>
            </div>

            <div className="border-l-4 border-pink-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">6. Cultural Comfort & Familiarity</h3>
              <p className="text-muted-foreground">
                Large Indian expat community in Dubai means many patients already know friends/family who&apos;ve been
                treated in India. Dubai patients appreciate India&apos;s hospitality, English proficiency, and respect
                for Islamic values. Many UAE doctors themselves trained in India and refer their own patients there.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cost Comparison Dubai vs India */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">Cost Comparison: Dubai vs India (All Amounts in AED)</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">Medical Procedure</th>
                  <th className="border p-3 text-right">Dubai Cost (AED)</th>
                  <th className="border p-3 text-right">India Cost (AED)</th>
                  <th className="border p-3 text-right">Savings (AED)</th>
                  <th className="border p-3 text-center">% Saved</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-medium">Heart Bypass (CABG)</td>
                  <td className="border p-3 text-right">180,000 - 250,000</td>
                  <td className="border p-3 text-right">36,000 - 50,000</td>
                  <td className="border p-3 text-right text-green-600 font-semibold">144,000</td>
                  <td className="border p-3 text-center">75%</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border p-3 font-medium">Knee Replacement</td>
                  <td className="border p-3 text-right">70,000 - 95,000</td>
                  <td className="border p-3 text-right">18,000 - 25,000</td>
                  <td className="border p-3 text-right text-green-600 font-semibold">52,000</td>
                  <td className="border p-3 text-center">72%</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Liver Transplant</td>
                  <td className="border p-3 text-right">350,000 - 500,000</td>
                  <td className="border p-3 text-right">90,000 - 140,000</td>
                  <td className="border p-3 text-right text-green-600 font-semibold">260,000</td>
                  <td className="border p-3 text-center">70%</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border p-3 font-medium">IVF Treatment (1 cycle)</td>
                  <td className="border p-3 text-right">36,000 - 55,000</td>
                  <td className="border p-3 text-right">10,000 - 16,000</td>
                  <td className="border p-3 text-right text-green-600 font-semibold">26,000</td>
                  <td className="border p-3 text-center">70%</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Spine Surgery</td>
                  <td className="border p-3 text-right">90,000 - 130,000</td>
                  <td className="border p-3 text-right">22,000 - 36,000</td>
                  <td className="border p-3 text-right text-green-600 font-semibold">68,000</td>
                  <td className="border p-3 text-center">72%</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border p-3 font-medium">Cancer Treatment (6 cycles chemo)</td>
                  <td className="border p-3 text-right">110,000 - 180,000</td>
                  <td className="border p-3 text-right">25,000 - 45,000</td>
                  <td className="border p-3 text-right text-green-600 font-semibold">85,000</td>
                  <td className="border p-3 text-center">75%</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Dental Implants (full mouth)</td>
                  <td className="border p-3 text-right">70,000 - 110,000</td>
                  <td className="border p-3 text-right">14,000 - 22,000</td>
                  <td className="border p-3 text-right text-green-600 font-semibold">56,000</td>
                  <td className="border p-3 text-center">78%</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border p-3 font-medium">Bariatric Surgery (Gastric Bypass)</td>
                  <td className="border p-3 text-right">55,000 - 85,000</td>
                  <td className="border p-3 text-right">14,000 - 22,000</td>
                  <td className="border p-3 text-right text-green-600 font-semibold">41,000</td>
                  <td className="border p-3 text-center">72%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">
              💰 Total Costs Including Travel (Example: Heart Bypass)
            </p>
            <ul className="space-y-1 text-sm text-green-700 dark:text-green-300">
              <li>• Surgery in India: AED 43,000</li>
              <li>• Round-trip flights (2 people): AED 3,600</li>
              <li>• Accommodation (2 weeks): AED 6,000</li>
              <li>• Food & transport: AED 2,000</li>
              <li>• <strong>Total: AED 54,600 (vs AED 215,000 in Dubai) = AED 160,400 saved!</strong></li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Top 5 Hospitals for Dubai Patients */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">Top 5 Hospitals for Dubai Patients</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">1. Apollo Hospitals - Mumbai, Delhi, Bangalore, Chennai</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Why Dubai patients choose Apollo:</strong> Largest private hospital network in Asia.
                JCI-accredited. 1,000+ UAE patients treated monthly.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Specialties:</strong> Heart surgery, cancer, transplants, orthopedics</li>
                <li><strong>Success rates:</strong> 98.5% heart surgery, 95% knee replacement</li>
                <li><strong>UAE patient perks:</strong> Dubai office for pre-consultation, Arabic coordinators, Etihad partnership</li>
                <li><strong>Accreditations:</strong> JCI, NABH, ISO 9001</li>
                <li><strong>Annual procedures:</strong> 150,000+ surgeries</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">2. Fortis Healthcare - Delhi, Mumbai, Bangalore</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Why Dubai patients choose Fortis:</strong> 54 hospitals across India. Partnership with
                Dubai Health Authority. Direct billing with some UAE insurance.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Specialties:</strong> Cardiac sciences, neurosciences, oncology, renal sciences</li>
                <li><strong>Success rates:</strong> 97.8% cardiac surgery, 92% cancer remission (early stage)</li>
                <li><strong>UAE patient perks:</strong> Video consultation, airport lounge, halal food guarantee</li>
                <li><strong>Accreditations:</strong> JCI, NABH, NABL</li>
                <li><strong>Annual procedures:</strong> 200,000+ surgeries</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">3. Medanta - The Medicity, Gurugram (Delhi NCR)</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Why Dubai patients choose Medanta:</strong> World&apos;s 2nd largest multi-specialty hospital.
                Founded by Dr. Naresh Trehan (trained at NYU, performed 48,000+ heart surgeries).
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Specialties:</strong> Heart, liver transplant, cancer, neurosciences</li>
                <li><strong>Success rates:</strong> 99.6% heart surgery (Dr. Trehan&apos;s team)</li>
                <li><strong>UAE patient perks:</strong> Dedicated UAE desk, Arabic translators, Emirates shuttle</li>
                <li><strong>Accreditations:</strong> JCI, NABH</li>
                <li><strong>Annual procedures:</strong> 22,000+ cardiac surgeries</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">4. Max Healthcare - Delhi, Mumbai</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Why Dubai patients choose Max:</strong> Partnership with American Hospital Dubai.
                Pre-consultation at Dubai office before travel.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Specialties:</strong> Orthopedics, bariatric surgery, IVF, cancer</li>
                <li><strong>Success rates:</strong> 96% knee replacement, 65% IVF (under 35)</li>
                <li><strong>UAE patient perks:</strong> Dubai office at DAFZA, UAE insurance billing</li>
                <li><strong>Accreditations:</strong> JCI, NABH</li>
                <li><strong>Annual procedures:</strong> 50,000+ surgeries</li>
              </ul>
            </div>

            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">5. Manipal Hospitals - Bangalore, Mumbai, Delhi</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Why Dubai patients choose Manipal:</strong> 28 hospitals across India. Strong reputation
                in GCC countries (many UAE doctors trained at Manipal).
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Specialties:</strong> Orthopedics, nephrology, fertility, oncology</li>
                <li><strong>Success rates:</strong> 95% kidney transplant, 60% IVF</li>
                <li><strong>UAE patient perks:</strong> Free video consultation, 24/7 Arabic helpline</li>
                <li><strong>Accreditations:</strong> NABH, ISO</li>
                <li><strong>Annual procedures:</strong> 120,000+ surgeries</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Step-by-Step Process */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">Step-by-Step Process for Dubai Patients</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Phase 1: Before You Travel (1-2 Weeks)</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li><strong>Contact us via WhatsApp:</strong> Share your medical reports, scans, and treatment history</li>
                <li><strong>Doctor selection:</strong> We recommend 2-3 specialists based on your condition</li>
                <li><strong>Video consultation:</strong> FREE 15-30 minute consultation with the doctor (via Zoom/WhatsApp)</li>
                <li><strong>Treatment plan & quote:</strong> Detailed breakdown of costs, duration, success rates</li>
                <li><strong>Book appointment:</strong> We schedule your surgery/treatment dates</li>
                <li><strong>Medical visa:</strong> We send visa invitation letter (you apply online or get on arrival)</li>
                <li><strong>Book flights:</strong> We recommend flights that align with your appointment</li>
                <li><strong>Book accommodation:</strong> We arrange hotel near hospital (AED 150-400/night)</li>
              </ol>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Phase 2: Arrival in India (Day 1-2)</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li><strong>Airport pickup:</strong> Our representative meets you at arrivals with name sign</li>
                <li><strong>Hotel check-in:</strong> Comfortable hotel within 5-10 minutes of hospital</li>
                <li><strong>Hospital registration:</strong> We handle all paperwork, no waiting in queues</li>
                <li><strong>Meet your doctor:</strong> In-person consultation, review of reports</li>
                <li><strong>Pre-treatment tests:</strong> Blood work, ECG, X-rays (same day results)</li>
                <li><strong>Treatment plan finalized:</strong> Confirm surgery date and procedure details</li>
              </ol>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Phase 3: Treatment & Recovery (Week 1-2)</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li><strong>Surgery day:</strong> Family waiting area with WiFi, refreshments, updates every 30 min</li>
                <li><strong>Hospital stay:</strong> Private room with attached bathroom, TV, family bed</li>
                <li><strong>Post-op care:</strong> 24/7 nursing, physiotherapy, dietician consultations</li>
                <li><strong>Doctor visits:</strong> Daily rounds to monitor recovery</li>
                <li><strong>Discharge:</strong> Detailed medication list, follow-up instructions, emergency contacts</li>
                <li><strong>Hotel recovery:</strong> Rest at hotel while attending follow-up appointments</li>
              </ol>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Phase 4: Return to Dubai (Week 2-3)</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li><strong>Final check-up:</strong> Doctor clears you for travel (usually 7-14 days post-surgery)</li>
                <li><strong>Medications:</strong> 1-3 months supply provided with prescription</li>
                <li><strong>Medical records:</strong> Complete discharge summary, surgery report, imaging CDs</li>
                <li><strong>Airport drop:</strong> We arrange transport to airport 3 hours before flight</li>
                <li><strong>Fit-to-fly certificate:</strong> If required by airline (for recent surgeries)</li>
              </ol>
            </div>

            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Phase 5: Post-Return Care (Ongoing)</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li><strong>WhatsApp support:</strong> 24/7 access to our team for questions/concerns</li>
                <li><strong>Video follow-ups:</strong> Weekly check-ins with doctor for first month</li>
                <li><strong>Local doctor coordination:</strong> We share reports with your Dubai doctor</li>
                <li><strong>Medication refills:</strong> We can courier medicines to Dubai if needed</li>
                <li><strong>Long-term follow-up:</strong> Annual check-up reminders, health monitoring</li>
              </ol>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2">
              🎯 Typical Timeline (Knee Replacement Example)
            </p>
            <ul className="space-y-1 text-sm text-blue-700 dark:text-blue-300">
              <li>• Week 0: Video consultation, book appointment</li>
              <li>• Week 1: Fly to India (Monday), pre-op tests (Tuesday), surgery (Wednesday)</li>
              <li>• Week 1-2: Hospital stay (3-5 days), hotel recovery (4-7 days)</li>
              <li>• Week 2: Final check-up, fly back to Dubai (total trip: 10-14 days)</li>
              <li>• Week 3+: Video follow-ups, physiotherapy in Dubai</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Real Patient Story */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">Real Patient Story: Ahmed from Dubai</h2>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg">
            <p className="text-lg font-semibold mb-4">
              &quot;I saved AED 92,000 on my heart bypass surgery and got better care than I expected.&quot;
            </p>

            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <strong>Patient:</strong> Ahmed M., 58-year-old Dubai resident, owns a trading business
              </p>
              <p>
                <strong>Condition:</strong> Triple vessel coronary artery disease (blockages in 3 heart arteries)
              </p>
              <p>
                <strong>Treatment needed:</strong> CABG (Coronary Artery Bypass Grafting) - triple bypass
              </p>

              <div className="my-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded">
                <p className="font-semibold mb-2">Dubai Quote:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>American Hospital Dubai: AED 215,000</li>
                  <li>Mediclinic City Hospital: AED 198,000</li>
                  <li>Cleveland Clinic Abu Dhabi: AED 230,000</li>
                  <li>Insurance coverage: AED 50,000 (balance AED 148,000-180,000 out of pocket)</li>
                </ul>
              </div>

              <div className="my-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded">
                <p className="font-semibold mb-2">India Experience:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Video consultation with Dr. Naresh Trehan at Medanta (FREE)</li>
                  <li>Flew Emirates (Dubai → Delhi): AED 1,800 roundtrip for 2 people</li>
                  <li>Surgery cost at Medanta: AED 43,000 (all-inclusive package)</li>
                  <li>Hospital stay: 6 days in private room with family bed</li>
                  <li>Hotel: AED 250/night × 8 nights = AED 2,000</li>
                  <li>Food & transport: AED 1,500</li>
                  <li><strong>Total cost: AED 48,300 (vs AED 148,000-180,000 in Dubai)</strong></li>
                  <li><strong>Savings: AED 100,000-132,000 (68-73%)</strong></li>
                </ul>
              </div>

              <p className="italic">
                &quot;The quality of care at Medanta was exceptional. Dr. Trehan himself performed my surgery.
                The nurses were attentive, the room was spotless, and I had an Arabic coordinator who explained
                everything. My Dubai cardiologist was amazed at how well the surgery was done. Best decision I
                ever made. I tell all my friends - don&apos;t waste money in Dubai, go to India!&quot;
              </p>

              <p className="font-semibold text-green-600 dark:text-green-400 mt-4">
                ✅ Result: Successful surgery, no complications, back to work in Dubai after 6 weeks
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Flights & Logistics */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">Flights & Travel Logistics</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Dubai → Mumbai (3 hours)</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Airlines:</strong> Emirates (4 daily), Air India (2 daily), IndiGo (2 daily)</li>
                <li><strong>Flight time:</strong> 3 hours direct</li>
                <li><strong>Cost:</strong> AED 800-1,500 roundtrip (economy), AED 3,500-6,000 (business)</li>
                <li><strong>Best for:</strong> Apollo Mumbai, Fortis Mulund, Nanavati Hospital, Breach Candy</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Dubai → Delhi (3.5 hours)</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Airlines:</strong> Emirates (6 daily), Air India (3 daily), IndiGo (1 daily)</li>
                <li><strong>Flight time:</strong> 3.5 hours direct</li>
                <li><strong>Cost:</strong> AED 900-1,600 roundtrip (economy), AED 3,800-6,500 (business)</li>
                <li><strong>Best for:</strong> Medanta Gurugram, Fortis Escorts, Apollo Indraprastha, Max Saket</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Dubai → Bangalore (4 hours)</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Airlines:</strong> Emirates (3 daily), Air India (2 daily), IndiGo (1 daily)</li>
                <li><strong>Flight time:</strong> 4 hours direct</li>
                <li><strong>Cost:</strong> AED 850-1,400 roundtrip (economy), AED 3,600-6,200 (business)</li>
                <li><strong>Best for:</strong> Manipal Hospital, Apollo Hospitals, Fortis Bangalore, Narayana Health</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Dubai → Chennai (4.5 hours)</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Airlines:</strong> Emirates (2 daily), Air India (2 daily)</li>
                <li><strong>Flight time:</strong> 4.5 hours direct</li>
                <li><strong>Cost:</strong> AED 900-1,500 roundtrip (economy), AED 3,700-6,300 (business)</li>
                <li><strong>Best for:</strong> Apollo Chennai, Fortis Malar, Global Health City (liver transplant)</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
              💡 Pro Tip: Book Flexible Tickets
            </p>
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              Recovery timelines can vary. Book flexible or refundable tickets (or add AED 150-250 for change fee coverage).
              Most patients stay 10-14 days, but complex cases may need 3-4 weeks. We&apos;ll help you reschedule flights if needed.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Internal Links */}
      <InternalLinks
        title="Related Resources for Dubai Patients"
        links={[
          {
            title: 'Best Hospitals for Medical Tourism',
            href: '/hospitals',
            description: 'Browse JCI-accredited hospitals across India',
          },
          {
            title: 'Medical Tourism Guide for UAE Patients',
            href: '/for-uae-patients',
            description: 'Complete guide for all UAE patients',
          },
          {
            title: 'Free Consultation',
            href: '/consultation',
            description: 'Get your personalized treatment plan',
          },
        ]}
        variant="compact"
      />

      {/* FAQ Section */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions (Dubai Patients)</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">1. Is medical treatment in India safe for Dubai patients?</h3>
              <p className="text-muted-foreground">
                <strong>Yes, absolutely.</strong> India&apos;s top hospitals (JCI-accredited) follow the same international
                safety standards as Dubai hospitals. Success rates for major procedures are comparable or better. Over 50,000
                UAE patients travel to India annually for medical treatment. India is the #1 medical tourism destination globally,
                treating 500,000+ international patients per year.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">2. How much can I save compared to Dubai?</h3>
              <p className="text-muted-foreground">
                <strong>60-75% on average.</strong> Even after including flights (AED 1,800), accommodation (AED 2,000-6,000),
                and other expenses, you save AED 40,000-260,000 depending on the procedure. Heart surgery saves ~AED 144,000,
                knee replacement saves ~AED 52,000, liver transplant saves ~AED 260,000.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">3. What about the medical visa process?</h3>
              <p className="text-muted-foreground">
                <strong>Very easy for UAE residents.</strong> You can get medical visa on arrival (free) or apply online
                (AED 250, approved in 2-3 days). We send you a visa invitation letter from the hospital. Medical visa is
                valid for 60 days and allows 3 entries. Family members can accompany on medical attendant visa.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">4. Do hospitals have Arabic-speaking staff?</h3>
              <p className="text-muted-foreground">
                <strong>Yes, all major hospitals have International Patient Departments with Arabic coordinators.</strong>
                Apollo, Fortis, Medanta, Max, and Manipal all have dedicated Arabic-speaking staff for UAE patients. You&apos;ll
                also have WhatsApp access to your coordinator 24/7.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">5. Can I use my Dubai health insurance?</h3>
              <p className="text-muted-foreground">
                <strong>Some insurance plans cover treatment abroad.</strong> Check with your insurance provider about
                international coverage. Some hospitals (like Fortis and Max) have tie-ups with UAE insurers and can do direct
                billing. If not covered, you pay upfront and claim reimbursement upon return (submit hospital invoices, discharge
                summary, and receipts).
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">6. How long do I need to stay in India?</h3>
              <p className="text-muted-foreground">
                <strong>Depends on the procedure:</strong> Simple procedures (dental, cataract, endoscopy): 3-5 days.
                Moderate procedures (knee replacement, hernia): 10-14 days. Complex procedures (heart surgery, transplants):
                3-4 weeks. We provide estimated timelines during consultation. Most patients fly back within 2 weeks.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">7. What if there are complications after I return to Dubai?</h3>
              <p className="text-muted-foreground">
                <strong>You have 24/7 support from our team and the hospital.</strong> WhatsApp/video consultations with
                your doctor are free. We can coordinate with your Dubai doctor and share all medical records. In rare cases
                requiring re-hospitalization, we arrange treatment at a partner hospital in Dubai or you can return to India
                (medical visa allows 3 entries). Major hospitals offer 30-90 day complication coverage.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">8. Can I bring my family with me?</h3>
              <p className="text-muted-foreground">
                <strong>Yes, absolutely encouraged!</strong> Family members can accompany you on medical attendant visa
                (applied along with your medical visa). Hospital rooms have family beds. Having a family member helps with
                emotional support and post-surgery care. Some hotels offer family suites at discounted rates.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Share */}
      <SocialShare
        title="Dubai to India Medical Tourism 2025: Complete Guide"
        url="/blog/dubai-to-india-medical-tourism"
        description="Complete guide for Dubai patients seeking medical treatment in India. Save 60-75% on world-class healthcare. Direct flights, JCI hospitals, easy visa process."
      />

      {/* Related Articles */}
      <RelatedArticles articles={DENTAL_RELATED_ARTICLES} />
    </BlogArticleLayout>
  );
}

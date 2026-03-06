import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles } from '@/components/blog/related-articles';
import { InternalLinks } from '@/components/seo/internal-links';
import Link from 'next/link';
import { Testimonials, TREATMENT_TESTIMONIALS } from '@/components/testimonials/testimonials';
import { TrustBadges } from '@/components/trust-badges/trust-badges';
import { BreadcrumbSchema } from '@/components/seo/breadcrumb-schema';
import { MedicalProcedureSchema } from '@/components/seo/medical-procedure-schema';
import { TreatmentSchemas } from '@/components/seo/treatment-schemas';
import { ContextualSidebar } from '@/components/seo/contextual-sidebar';

export const metadata: Metadata = {
  title: 'Heart Surgery India: CABG Cost, Best Cardiac Hospitals 2025 | Bypass Surgery',
  description: 'Heart bypass (CABG) surgery in India costs $6,000-10,000 vs $70,000-200,000 in USA (92-95% savings). 98%+ success rate. JCI-accredited cardiac centers. Beating heart & traditional CABG.',
  keywords: [
    'heart surgery india',
    'cabg surgery india',
    'heart bypass india',
    'coronary artery bypass india',
    'beating heart surgery india',
    'off-pump cabg india',
    'cardiac surgery cost india',
    'best heart hospital india',
    'جراحة القلب في الهند',
    'تكلفة جراحة القلب في الهند',
    'جراحة مجازة الشريان التاجي في الهند',
    'أفضل مستشفيات القلب في الهند',
  ],
  alternates: {
    canonical: 'https://shifaalhind.onrender.com/en/treatments/heart-surgery-india',
    languages: {
      'en-US': 'https://shifaalhind.onrender.com/en/treatments/heart-surgery-india',
      'ar-SA': 'https://shifaalhind.onrender.com/ar/treatments/heart-surgery-india',
      'x-default': 'https://shifaalhind.onrender.com/en/treatments/heart-surgery-india',
    },
  },
};

export const dynamic = 'force-dynamic';

const RELATED_ARTICLES = [
  { title: "Medical Visa India Guide", href: "/blog/medical-visa-india-complete-guide", description: "Complete visa process guide" },
  { title: "Best Hospitals Delhi", href: "/blog/best-hospitals-delhi-medical-tourism", description: "Top 10 JCI-accredited hospitals" },
  { title: "Medical Tourism Guide", href: "/blog/medical-tourism-uae-patients-guide", description: "Complete guide for GCC patients" }
];

export default async function HeartSurgeryIndiaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb Schema for SEO */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://shifaalhind.onrender.com' },
        { name: 'Treatments', url: 'https://shifaalhind.onrender.com/treatments' },
        { name: 'Heart Surgery in India', url: 'https://shifaalhind.onrender.com/treatments/heart-surgery-india' }
      ]} />

      {/* Medical Procedure Schema for SEO */}
      <MedicalProcedureSchema
        name="Coronary Artery Bypass Grafting (CABG)"
        description="CABG surgery restores blood flow to the heart by grafting healthy blood vessels to bypass blocked coronary arteries, relieving angina and reducing heart attack risk."
        procedureType="SurgicalProcedure"
        bodyLocation="Heart"
        url="https://shifaalhind.onrender.com/treatments/heart-surgery-india"
      />

      {/* FAQ Schema for Rich Snippets */}
      <FAQSchema faqs={[
        { question: "How much does heart bypass (CABG) surgery cost in India?", answer: "CABG surgery in India costs $6,000-12,000 depending on the number of bypasses needed. Single bypass: $6,000-8,000, Double bypass: $7,000-9,000, Triple bypass: $8,000-10,500, Quadruple bypass: $9,000-12,000. This is 92-95% cheaper than the USA ($70,000-200,000). All-inclusive packages cover surgery, hospital stay, ICU, medications, and follow-up." },
        { question: "How long is recovery after CABG heart surgery?", answer: "Hospital stay: 5-7 days total (ICU 2-3 days, ward 3-4 days). Return to light activities: 4-6 weeks. Return to work (desk job): 6-8 weeks. Full recovery: 3-6 months. Cardiac rehabilitation is strongly recommended starting 2-4 weeks after surgery and continues for 12 weeks." },
        { question: "What is the difference between beating heart (off-pump) and traditional (on-pump) CABG?", answer: "Off-pump (beating heart) CABG is performed on a beating heart without a heart-lung machine. Benefits: lower stroke risk, less blood loss, shorter ICU stay, faster recovery. On-pump (traditional) CABG uses a heart-lung machine to stop the heart during surgery. Benefits: better access for complex multi-vessel disease, more precise grafting. Surgeon recommends based on your specific condition." },
        { question: "What are the risks of heart bypass surgery?", answer: "Overall mortality risk: 1-2% for elective CABG at top Indian hospitals. Common risks include: bleeding (2-3%), wound infection (1-3%), atrial fibrillation (20-30%, usually temporary), stroke (1-2%), kidney complications (2-5%), and sternal wound complications (1-2%). Risk is higher for emergency surgery, elderly patients, and those with diabetes or kidney disease." },
        { question: "How long do I need to stay in India for CABG surgery?", answer: "Total stay: 3-4 weeks. Pre-surgery evaluation and tests: 3-5 days. Surgery and hospital stay: 5-7 days. Post-discharge recovery and monitoring: 10-14 days before flying home. Follow-up appointment with surgeon before departure. Some patients may need longer if complications arise." },
        { question: "What is the success rate of heart surgery in India?", answer: "Top cardiac hospitals in India report 98%+ survival rate for elective CABG surgery, comparable to the best centers in the USA and Europe. 95%+ patients experience complete relief from angina. Graft patency: internal mammary artery grafts last 20+ years (95% at 10 years), saphenous vein grafts last 10-15 years (60-70% at 10 years). India performs 150,000+ cardiac surgeries annually." },
        { question: "Does insurance cover heart surgery in India?", answer: "Many international insurance policies cover cardiac surgery abroad with pre-authorization. Most GCC health insurance plans include India as a covered destination. Self-pay is common due to massive savings ($6,000-12,000 vs $70,000-200,000 in USA). Major Indian hospitals accept international insurance, offer cashless treatment at network hospitals, and provide detailed cost estimates upfront for insurance claims." },
        { question: "When can I fly back home after heart bypass surgery?", answer: "Most patients can safely fly 2-3 weeks after uncomplicated CABG surgery. Requirements before flying: stable heart rhythm, no chest fluid collection, wounds healing well, able to walk without breathlessness. Get written clearance from your cardiac surgeon. Avoid long-haul flights (>6 hours) for 4 weeks. Wear compression stockings during flight. Stay hydrated and walk in the cabin every 2 hours." }
      ]} />

      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Heart Surgery / CABG in India</h1>
        <p className="text-xl text-gray-600 mb-6">
          World-class coronary artery bypass surgery in India at 92-95% savings. 98%+ success rate at JCI-accredited cardiac centers. Beating heart and traditional CABG by internationally trained surgeons.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg">
            <Link href="/consultation">Get Free Consultation</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">$6,000-10,000</div>
            <div className="text-gray-600">CABG Surgery Cost</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">98%+</div>
            <div className="text-gray-600">Success Rate</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">92-95%</div>
            <div className="text-gray-600">Savings vs USA</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">3-6 Months</div>
            <div className="text-gray-600">Full Recovery</div>
          </CardContent>
        </Card>
      </div>

      {/* Cost Comparison */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Heart Surgery (CABG) Cost Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-green-50">
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
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">CABG (Single Bypass)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$6,000-8,000</td>
                <td className="border border-gray-300 px-4 py-2">$70,000-100,000</td>
                <td className="border border-gray-300 px-4 py-2">$55,000-80,000</td>
                <td className="border border-gray-300 px-4 py-2">AED 60,000-90,000</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">92-94%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">CABG (Double Bypass)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$7,000-9,000</td>
                <td className="border border-gray-300 px-4 py-2">$90,000-130,000</td>
                <td className="border border-gray-300 px-4 py-2">$70,000-105,000</td>
                <td className="border border-gray-300 px-4 py-2">AED 75,000-110,000</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">92-95%</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">CABG (Triple Bypass)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$8,000-10,500</td>
                <td className="border border-gray-300 px-4 py-2">$120,000-170,000</td>
                <td className="border border-gray-300 px-4 py-2">$95,000-135,000</td>
                <td className="border border-gray-300 px-4 py-2">AED 100,000-145,000</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">93-95%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">CABG (Quadruple Bypass)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$9,000-12,000</td>
                <td className="border border-gray-300 px-4 py-2">$150,000-200,000</td>
                <td className="border border-gray-300 px-4 py-2">$120,000-160,000</td>
                <td className="border border-gray-300 px-4 py-2">AED 130,000-175,000</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">94-95%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* What's Included */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">What&apos;s Included in the Package</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Pre-Surgery Evaluation</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Coronary angiography (cardiac catheterization)</li>
                <li>Echocardiogram (2D Echo with Doppler)</li>
                <li>Blood tests (CBC, lipid profile, kidney/liver function, coagulation)</li>
                <li>Chest X-ray and pulmonary function tests</li>
                <li>Anesthesia evaluation and risk assessment</li>
                <li>Cardiologist and cardiac surgeon consultation</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Surgery Day</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>CABG procedure (4-6 hours, on-pump or off-pump)</li>
                <li>Heart-lung machine (on-pump) or stabilizer device (off-pump)</li>
                <li>Arterial and venous graft harvesting (LIMA, saphenous vein)</li>
                <li>Surgical team (cardiac surgeon, anesthesiologist, perfusionist)</li>
                <li>ICU admission and continuous hemodynamic monitoring</li>
                <li>Ventilator support and post-operative stabilization</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hospital Stay (5-7 Days)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>ICU stay (2-3 days) with 24/7 cardiac monitoring</li>
                <li>Step-down ward transfer with telemetry monitoring</li>
                <li>Cardiac rehabilitation initiation (breathing exercises, walking)</li>
                <li>Medications (anticoagulants, statins, beta-blockers, pain management)</li>
                <li>Daily echocardiogram and blood tests</li>
                <li>Chest physiotherapy and deep breathing exercises</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Follow-up Care</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Sternal wound care and dressing instructions</li>
                <li>Structured cardiac rehabilitation program (12 weeks)</li>
                <li>Medications prescription (3-6 months supply)</li>
                <li>Follow-up echocardiogram before departure</li>
                <li>Telemedicine follow-up for international patients</li>
                <li>Detailed medical report for home cardiologist</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Procedure Comparison: Beating Heart vs Traditional */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Beating Heart (Off-Pump) vs Traditional (On-Pump) CABG</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-green-50">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Factor</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Beating Heart (Off-Pump)</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Traditional (On-Pump)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Heart-Lung Machine</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">Not required (heart continues beating)</td>
                <td className="border border-gray-300 px-4 py-2">Required (heart is temporarily stopped)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Recovery Time</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">Faster (4-5 days hospital, 2-3 months full)</td>
                <td className="border border-gray-300 px-4 py-2">Standard (5-7 days hospital, 3-6 months full)</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Blood Loss</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">Lower (less need for blood transfusion)</td>
                <td className="border border-gray-300 px-4 py-2">Higher (30-50% may need transfusion)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Stroke Risk</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">Lower (0.5-1%, no aortic manipulation)</td>
                <td className="border border-gray-300 px-4 py-2">Slightly higher (1-2%, aortic cannulation)</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Kidney Complications</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">Lower risk (better kidney perfusion)</td>
                <td className="border border-gray-300 px-4 py-2">Higher risk (2-5% temporary dysfunction)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">ICU Stay</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">1-2 days (earlier extubation)</td>
                <td className="border border-gray-300 px-4 py-2">2-3 days</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Cost in India</td>
                <td className="border border-gray-300 px-4 py-2">$7,000-11,000 (slightly higher)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$6,000-10,000 (slightly lower)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Best For</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">Single/double bypass, elderly, kidney disease, prior stroke, calcified aorta</td>
                <td className="border border-gray-300 px-4 py-2">Complex multi-vessel disease, triple/quadruple bypass, combined valve + CABG</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Recommendation</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">Preferred for eligible patients (lower complication rates, faster recovery)</td>
                <td className="border border-gray-300 px-4 py-2">Gold standard for complex coronary disease requiring multiple bypasses</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Top Hospitals */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Top 3 Hospitals for Heart Surgery in India</h2>
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Fortis Escorts Heart Institute - New Delhi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                <strong>Specialty:</strong> Cardiac Surgery, Interventional Cardiology &amp; Heart Failure<br />
                <strong>Success Rate:</strong> 98.5% (15,000+ cardiac surgeries annually)<br />
                <strong>Infrastructure:</strong> Dedicated cardiac OR suites, hybrid cath lab, 50-bed cardiac ICU, heart failure unit
              </p>
              <p className="mb-4">
                <strong>Key Surgeons:</strong> Dr. Ashok Seth (pioneer in interventional cardiology, 50,000+ procedures), Dr. Z.S. Meharwal (senior cardiac surgeon, 15,000+ open heart surgeries)
              </p>
              <p className="mb-4">
                <strong>Technology:</strong> Hybrid OR with advanced imaging, off-pump CABG expertise, minimally invasive cardiac surgery (MICS CABG), intra-aortic balloon pump, ECMO support
              </p>
              <p className="mb-4">
                <strong>Cost:</strong> CABG: $7,000-11,000 (off-pump and on-pump)
              </p>
              <p>
                <strong>Why Choose:</strong> NABH/JCI accredited, India&apos;s first dedicated heart institute (est. 1988), 98.5% CABG success rate, beating heart surgery pioneer in Asia, Arabic-speaking patient coordinators, international patient lounge
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Narayana Health (Narayana Hrudayalaya) - Bangalore</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                <strong>Specialty:</strong> High-Volume Cardiac Surgery &amp; Affordable Heart Care<br />
                <strong>Success Rate:</strong> 98.2% (12,000+ cardiac surgeries annually, highest volume in India)<br />
                <strong>Infrastructure:</strong> 21 operating rooms, 300+ cardiac ICU beds, dedicated pediatric cardiac wing, cardiac rehabilitation center
              </p>
              <p className="mb-4">
                <strong>Key Surgeons:</strong> Dr. Devi Shetty (founder, world-renowned cardiac surgeon, 15,000+ heart surgeries), Dr. Raghu (senior cardiac surgeon specializing in complex CABG)
              </p>
              <p className="mb-4">
                <strong>Technology:</strong> State-of-the-art catheterization labs, robotic-assisted cardiac surgery, advanced perfusion systems, 3D echocardiography, cardiac MRI
              </p>
              <p className="mb-4">
                <strong>Cost:</strong> CABG: $6,000-9,000 (most affordable among top centers)
              </p>
              <p>
                <strong>Why Choose:</strong> NABH accredited, highest cardiac surgery volume in the world, pioneered affordable heart surgery model, outcomes comparable to Cleveland Clinic, GCC patient department with Arabic translators, telemedicine follow-up
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Asian Heart Institute - Mumbai</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                <strong>Specialty:</strong> Exclusive Cardiac Care &amp; Minimally Invasive Heart Surgery<br />
                <strong>Success Rate:</strong> 98.7% (8,000+ cardiac procedures annually)<br />
                <strong>Infrastructure:</strong> Dedicated cardiac hospital, 5 cardiac ORs, cardiac catheterization labs, 40-bed cardiac ICU, cardiac rehab center
              </p>
              <p className="mb-4">
                <strong>Key Surgeons:</strong> Dr. Ramakanta Panda (chief cardiac surgeon, 30,000+ surgeries, operated on India&apos;s former PM), Dr. Samuel Mathew (beating heart CABG specialist)
              </p>
              <p className="mb-4">
                <strong>Technology:</strong> Off-pump CABG expertise (90% of cases done beating heart), minimally invasive direct coronary artery bypass (MIDCAB), robotic cardiac surgery, 24/7 emergency cardiac care
              </p>
              <p className="mb-4">
                <strong>Cost:</strong> CABG: $7,500-11,500 (premium cardiac-only facility)
              </p>
              <p>
                <strong>Why Choose:</strong> JCI accredited, India&apos;s only dedicated heart hospital, 99.6% CABG survival rate (among world&apos;s best), Dr. Panda recognized as one of world&apos;s top cardiac surgeons, personalized care with low patient-to-nurse ratio, airport pickup and stay coordination
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Recovery Timeline After CABG Heart Surgery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Days 1-3 (ICU Phase)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2"><strong>What Happens:</strong></p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Ventilator support for 6-24 hours post-surgery, then extubation</li>
                <li>Continuous ECG, blood pressure, and oxygen monitoring</li>
                <li>Chest tubes for drainage (removed Day 2-3)</li>
                <li>IV medications (pain relief, antibiotics, blood thinners)</li>
                <li>Sitting up in bed by Day 2, standing by Day 3</li>
              </ul>
              <p><strong>Pain Level:</strong> 5-7/10 (managed with IV analgesics, epidural, or PCA pump)</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Week 1-2 (Ward Recovery)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2"><strong>What Happens:</strong></p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Transfer to cardiac step-down ward with telemetry</li>
                <li>Walking in hallways (gradually increasing distance daily)</li>
                <li>Diet progression from liquids to soft foods to regular cardiac diet</li>
                <li>Chest physiotherapy and incentive spirometry 4-6 times daily</li>
                <li>Discharge typically Day 5-7 with detailed home care instructions</li>
              </ul>
              <p><strong>Pain Level:</strong> 3-5/10 (oral pain medications, decreasing daily)</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Weeks 3-8 (Early Rehabilitation)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2"><strong>What Happens:</strong></p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Outpatient cardiac rehabilitation begins (supervised exercise)</li>
                <li>Gradual increase in walking distance (aim for 30 min daily by Week 6)</li>
                <li>Sternal precautions: no lifting &gt;5 kg, no driving for 6 weeks</li>
                <li>Wound check and sternal healing assessment at Week 4</li>
                <li>Light household activities permitted from Week 4</li>
              </ul>
              <p><strong>Pain Level:</strong> 1-3/10 (mild sternal discomfort, occasional chest wall tightness)</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Months 3-12+ (Full Recovery)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2"><strong>What Happens:</strong></p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Return to work (desk job Month 2-3, physical labor Month 4-6)</li>
                <li>Resume driving after 6-8 weeks (once sternum healed)</li>
                <li>Full exercise including gym, swimming, sports by Month 3-6</li>
                <li>Lifelong medications: aspirin, statins, beta-blockers as prescribed</li>
                <li>Annual cardiac checkup with stress test and echocardiogram</li>
              </ul>
              <p><strong>Long-term:</strong> 90%+ patients report improved quality of life. Arterial grafts last 20+ years with proper medication and lifestyle changes.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Internal Links */}
      <InternalLinks
        title="Related Treatment Pages"
        links={[
          { title: 'Angioplasty India', href: '/treatments/angioplasty-india', description: 'Coronary stenting, save 80-90%' },
          { title: 'Varicose Veins Treatment India', href: '/treatments/varicose-veins-treatment-india', description: 'Laser varicose vein treatment' },
          { title: 'All Treatments', href: '/treatments', description: 'View all available treatments' },
        ]}
        variant="compact"
      />

      {/* Social Share */}
      <SocialShare
        title="Heart Surgery (CABG) in India 2025: Cost, Best Hospitals, Recovery"
        url="/treatments/heart-surgery-india"
        description="Heart bypass (CABG) surgery in India costs $6,000-10,000 vs $70,000-200,000 in USA (92-95% savings). 98%+ success rate at JCI-accredited cardiac centers."
      />

      {/* Related Articles */}
      <RelatedArticles articles={RELATED_ARTICLES} />

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>How much does heart bypass (CABG) surgery cost in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                CABG surgery in India costs $6,000-12,000 depending on the number of bypasses. Single bypass: $6,000-8,000, Double: $7,000-9,000, Triple: $8,000-10,500, Quadruple: $9,000-12,000. This represents 92-95% savings compared to the USA ($70,000-200,000). All-inclusive packages cover pre-operative tests, surgery, ICU stay, hospital room, medications, cardiac rehabilitation, and follow-up consultations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How long is recovery after CABG heart surgery?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Hospital stay is 5-7 days (ICU 2-3 days, ward 3-4 days). You can return to light activities in 4-6 weeks and desk work in 6-8 weeks. Full recovery takes 3-6 months. Cardiac rehabilitation starting 2-4 weeks post-surgery significantly improves outcomes and is included in most treatment packages. Sternal healing takes 6-8 weeks, during which you must avoid lifting heavy objects.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What is the difference between beating heart and traditional CABG?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Off-pump (beating heart) CABG is performed without stopping the heart or using a heart-lung machine. It offers faster recovery, lower stroke risk, less blood loss, and shorter ICU stay. Traditional on-pump CABG stops the heart and uses cardiopulmonary bypass, providing better access for complex multi-vessel disease. Your surgeon will recommend the best approach based on the number of blockages, vessel location, and your overall health.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What are the risks of heart bypass surgery?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Elective CABG at top Indian hospitals carries 1-2% mortality risk. Common complications include: temporary atrial fibrillation (20-30%), wound infection (1-3%), bleeding requiring re-exploration (2-3%), stroke (1-2%), and temporary kidney dysfunction (2-5%). Risk factors that increase complications include emergency surgery, age over 75, diabetes, chronic kidney disease, and poor left ventricular function. Most complications are treatable and temporary.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How long do I need to stay in India for CABG surgery?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Plan for 3-4 weeks total. Pre-surgery evaluation and testing takes 3-5 days (coronary angiography, echocardiogram, blood work, fitness assessment). Surgery and hospital stay is 5-7 days. Post-discharge recovery and monitoring requires 10-14 days in India before you are cleared to fly home. A follow-up appointment with your surgeon is scheduled before departure to ensure safe travel.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What is the success rate of heart surgery in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Leading cardiac centers in India report 98%+ survival rates for elective CABG, on par with the best hospitals in the USA and Europe. Over 95% of patients experience complete relief from chest pain (angina). Internal mammary artery grafts have 95% patency at 10 years and last 20+ years. India performs over 150,000 cardiac surgeries annually, giving surgeons extensive experience with complex cases.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Does insurance cover heart surgery in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Many international insurance policies cover cardiac surgery abroad with pre-authorization. Most GCC health insurance plans include India as a covered destination for cardiac procedures. Self-pay patients benefit from massive savings ($6,000-12,000 vs $70,000-200,000 in USA). Major Indian hospitals accept international insurance, provide cashless treatment, and issue detailed documentation for reimbursement claims. Payment plans and medical loans are also available.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>When can I fly back home after heart bypass surgery?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Most patients can safely fly 2-3 weeks after uncomplicated CABG surgery. Before flying you must have: stable heart rhythm, no chest fluid collection, healing wounds, and ability to walk without breathlessness. Written clearance from your cardiac surgeon is required. Avoid flights longer than 6 hours for 4 weeks post-surgery. During the flight, wear compression stockings, stay hydrated, and walk in the cabin every 2 hours to prevent blood clots.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials
        testimonials={TREATMENT_TESTIMONIALS['generic']}
        title="Success Stories from Our Heart Surgery Patients"
        subtitle="Real transformations from GCC patients who achieved life-changing results"
      />


      {/* Contextual Sidebar - Related Treatment Links */}
      <ContextualSidebar treatmentSlug="heart-surgery-india" locale={locale as 'en' | 'ar'} />
      {/* Trust Badges Section */}
      <TrustBadges />

      {/* Final CTA */}
      <Card className="bg-green-50">
        <CardContent className="pt-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready for Heart Surgery in India?</h2>
          <p className="text-gray-600 mb-6">
            Get a free consultation with India&apos;s top cardiac surgeons. Share your angiography report for a personalized treatment plan and cost estimate.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/consultation">Book Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">WhatsApp Now</a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* SEO: HowTo + Offer + Speakable Schemas */}
      <TreatmentSchemas
        treatmentName="Heart Surgery"
        lowPrice={6000}
        highPrice={10000}
        url="/en/treatments/heart-surgery-india"
      />
    </div>
  );
}

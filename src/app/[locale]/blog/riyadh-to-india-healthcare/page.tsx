import { Metadata } from 'next';
import BlogArticleLayout from '@/components/blog/blog-article-layout';
import { Card, CardContent } from '@/components/ui/card';
import { InternalLinks } from '@/components/seo/internal-links';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles, CANCER_RELATED_ARTICLES } from '@/components/blog/related-articles';
import { BreadcrumbSchema } from '@/components/seo/breadcrumb-schema';
import { ArticleSchema, DEFAULT_AUTHOR, DEFAULT_PUBLISHER } from '@/components/seo/article-schema';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Riyadh to India Healthcare 2025 | Complete Medical Tourism Guide - Save 70-85%',
  description: 'Complete healthcare guide for Riyadh patients traveling to India. Direct flights (4h), save 70-85% on medical treatment, JCI hospitals, easy visa, Saudi patient services. Step-by-step process.',
  keywords: [
    'riyadh to india healthcare',
    'medical treatment india from riyadh',
    'riyadh saudi arabia to india hospital',
    'saudi patients india',
    'medical tourism riyadh to mumbai',
    'medical tourism riyadh to delhi',
    'الرعاية الصحية من الرياض إلى الهند',
    'العلاج الطبي في الهند من الرياض',
    'مستشفيات الهند للمرضى السعوديين',
  ],
  alternates: {
    canonical: 'https://shifaalhind.onrender.com/en/blog/riyadh-to-india-healthcare',
    languages: {
      'en-US': 'https://shifaalhind.onrender.com/en/blog/riyadh-to-india-healthcare',
      'ar-SA': 'https://shifaalhind.onrender.com/ar/blog/riyadh-to-india-healthcare',
      'x-default': 'https://shifaalhind.onrender.com/en/blog/riyadh-to-india-healthcare',
    },
  },
};

export default function RiyadhToIndiaHealthcarePage() {
  return (
    <BlogArticleLayout
      title="Riyadh to India Healthcare 2025: Complete Medical Tourism Guide for Saudi Patients"
      excerpt="Comprehensive healthcare guide for Riyadh patients seeking treatment in India. Save 70-85% on world-class medical care. Direct flights (4 hours), JCI-accredited hospitals, easy medical visa, and dedicated Saudi patient services."
      author="Shifa AlHind Medical Team"
      publishedDate="October 2025"
      lastUpdated="October 2025"
      readTime="14 min"
      breadcrumbTitle="Riyadh to India Healthcare"
    >
      {/* Breadcrumb Schema for SEO */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://shifaalhind.onrender.com' },
        { name: 'Blog', url: 'https://shifaalhind.onrender.com/blog' },
        { name: 'Riyadh to India Healthcare Guide for Saudi Patients', url: 'https://shifaalhind.onrender.com/blog/riyadh-to-india-healthcare' }
      ]} />

      {/* Article Schema for SEO */}
      <ArticleSchema
        headline="Riyadh to India Healthcare Guide for Saudi Patients 2025"
        description="Complete healthcare guide for Riyadh patients seeking treatment in India. Costs, hospitals, visa, and travel information."
        image="https://shifaalhind.onrender.com/images/blog/riyadh-healthcare.jpg"
        datePublished="2025-10-01"
        dateModified="2025-10-01"
        author={DEFAULT_AUTHOR}
        publisher={DEFAULT_PUBLISHER}
        url="https://shifaalhind.onrender.com/blog/riyadh-to-india-healthcare"
      />

      {/* Introduction */}
      <Card>
        <CardContent className="pt-6">
          <p className="text-lg leading-relaxed mb-4">
            Thousands of Saudi Arabian patients from Riyadh are choosing India for medical treatment every year, and the
            numbers are growing rapidly. With <strong>direct flights taking just 4 hours</strong>, <strong>world-class
            JCI-accredited hospitals</strong>, and <strong>70-85% cost savings</strong> compared to Saudi healthcare, India
            has become a preferred destination for Riyadh residents seeking quality medical care.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Every year, over <strong>30,000 Saudi patients</strong> travel to India for medical treatment, from routine
            procedures like dental work and orthopedic surgery to complex treatments like cardiac surgery, cancer care, and
            organ transplants. India&apos;s top hospitals offer the same international standards found in Riyadh, but at a
            fraction of the cost.
          </p>
          <p className="text-lg leading-relaxed">
            This comprehensive guide covers everything Riyadh patients need to know: flights, medical visa process, cost
            comparisons, top hospitals with Saudi patient services, treatment timeline, and real patient experiences from
            Saudi Arabia. Whether you&apos;re considering a simple procedure or a complex surgery, this guide will help you
            make an informed decision.
          </p>
        </CardContent>
      </Card>

      {/* Why Riyadh Patients Choose India */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">Why Riyadh Patients Choose India for Healthcare</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">1. Massive Cost Savings (70-85%)</h3>
              <p className="text-muted-foreground mb-3">
                Healthcare costs in Saudi Arabia are high, even with government insurance. A heart bypass surgery costs
                SAR 180,000-250,000 ($48,000-$67,000) in Riyadh, but only SAR 37,500-52,500 ($10,000-$14,000) in India -
                a savings of <strong>SAR 142,500 ($38,000)</strong>.
              </p>
              <p className="text-muted-foreground">
                Even after including flights (SAR 2,200), accommodation (SAR 3,500/week), and visa (SAR 280), Saudi patients
                save <strong>70-85% on total medical expenses</strong>. For many procedures, the savings can fund a family
                vacation!
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">2. Same International Quality Standards</h3>
              <p className="text-muted-foreground mb-3">
                India has <strong>over 50 JCI-accredited hospitals</strong> (same accreditation as King Faisal Specialist
                Hospital, King Fahad Medical City). These hospitals use identical equipment, follow the same protocols, and
                employ doctors trained at Harvard, Johns Hopkins, Cleveland Clinic, and Mayo Clinic.
              </p>
              <p className="text-muted-foreground">
                Success rates for major procedures are comparable or better: <strong>98.5% for heart surgery</strong>,
                <strong>95-98% for knee replacement</strong>, and <strong>85-92% for cancer treatment</strong> (early stage).
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">3. Direct Flights (4 Hours)</h3>
              <p className="text-muted-foreground mb-3">
                <strong>6-10 daily direct flights</strong> from Riyadh to Mumbai (4h), Delhi (4.5h), and Bangalore (5h) on
                Saudia, Air India, IndiGo, and Air Arabia. Flight time is shorter than Riyadh to London!
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Riyadh → Mumbai: 4 hours (4 daily flights)</li>
                <li>Riyadh → Delhi: 4.5 hours (6 daily flights)</li>
                <li>Riyadh → Bangalore: 5 hours (3 daily flights)</li>
                <li>Riyadh → Chennai: 5.5 hours (3 daily flights)</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">4. Easy Medical Visa Process</h3>
              <p className="text-muted-foreground mb-3">
                Saudi residents get <strong>medical visa online in 3-5 days</strong> or can apply on arrival. Simple online
                application with hospital invitation letter (we provide). Medical visa is valid for 60 days (extendable) and
                allows 3 entries.
              </p>
              <p className="text-muted-foreground">
                Family members can accompany on medical attendant visa. We handle the entire visa process at no extra cost,
                including the hospital invitation letter.
              </p>
            </div>

            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">5. Saudi Patient Services</h3>
              <p className="text-muted-foreground mb-3">
                Top Indian hospitals have dedicated <strong>International Patient Departments</strong> specifically for
                Saudi patients, with:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Arabic-speaking coordinators</strong> and translators (Saudi dialects)</li>
                <li><strong>Halal food</strong> in all hospital cafeterias</li>
                <li><strong>Prayer rooms</strong> with Qibla direction and prayer time notifications</li>
                <li><strong>Airport pickup/drop</strong> with Saudi Arabia-based vehicles</li>
                <li><strong>Accommodation</strong> in nearby hotels (SAR 180-450/night)</li>
                <li><strong>Video consultations</strong> before travel (FREE)</li>
                <li><strong>Follow-up care</strong> via WhatsApp/video calls after return</li>
                <li><strong>Saudi holidays respected</strong> (Ramadan, Hajj season accommodations)</li>
              </ul>
            </div>

            <div className="border-l-4 border-pink-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">6. Cultural & Religious Comfort</h3>
              <p className="text-muted-foreground">
                Large Indian Muslim community means hospitals understand Islamic values and Saudi culture. Many Saudi doctors
                themselves trained in India and refer their own patients. Hospitals provide separate male/female wards, female
                doctors for women patients (upon request), and respect for prayer times and Ramadan fasting.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cost Comparison Riyadh vs India */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">Cost Comparison: Riyadh vs India (All Amounts in SAR)</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">Medical Procedure</th>
                  <th className="border p-3 text-right">Riyadh Cost (SAR)</th>
                  <th className="border p-3 text-right">India Cost (SAR)</th>
                  <th className="border p-3 text-right">Savings (SAR)</th>
                  <th className="border p-3 text-center">% Saved</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-medium">Heart Bypass (CABG)</td>
                  <td className="border p-3 text-right">180,000 - 250,000</td>
                  <td className="border p-3 text-right">37,500 - 52,500</td>
                  <td className="border p-3 text-right text-green-600 font-semibold">142,500</td>
                  <td className="border p-3 text-center">78%</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border p-3 font-medium">Knee Replacement</td>
                  <td className="border p-3 text-right">70,000 - 95,000</td>
                  <td className="border p-3 text-right">18,750 - 26,250</td>
                  <td className="border p-3 text-right text-green-600 font-semibold">51,250</td>
                  <td className="border p-3 text-center">73%</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Liver Transplant</td>
                  <td className="border p-3 text-right">350,000 - 500,000</td>
                  <td className="border p-3 text-right">93,750 - 146,250</td>
                  <td className="border p-3 text-right text-green-600 font-semibold">256,250</td>
                  <td className="border p-3 text-center">73%</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border p-3 font-medium">IVF Treatment (1 cycle)</td>
                  <td className="border p-3 text-right">35,000 - 55,000</td>
                  <td className="border p-3 text-right">10,500 - 16,500</td>
                  <td className="border p-3 text-right text-green-600 font-semibold">24,500</td>
                  <td className="border p-3 text-center">70%</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Spine Surgery</td>
                  <td className="border p-3 text-right">90,000 - 130,000</td>
                  <td className="border p-3 text-right">22,500 - 37,500</td>
                  <td className="border p-3 text-right text-green-600 font-semibold">67,500</td>
                  <td className="border p-3 text-center">75%</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border p-3 font-medium">Cancer Treatment (6 cycles chemo)</td>
                  <td className="border p-3 text-right">110,000 - 180,000</td>
                  <td className="border p-3 text-right">26,250 - 46,875</td>
                  <td className="border p-3 text-right text-green-600 font-semibold">83,750</td>
                  <td className="border p-3 text-center">76%</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Dental Implants (full mouth)</td>
                  <td className="border p-3 text-right">70,000 - 110,000</td>
                  <td className="border p-3 text-right">14,625 - 22,875</td>
                  <td className="border p-3 text-right text-green-600 font-semibold">55,375</td>
                  <td className="border p-3 text-center">79%</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border p-3 font-medium">Bariatric Surgery (Gastric Bypass)</td>
                  <td className="border p-3 text-right">55,000 - 85,000</td>
                  <td className="border p-3 text-right">14,625 - 22,875</td>
                  <td className="border p-3 text-right text-green-600 font-semibold">40,125</td>
                  <td className="border p-3 text-center">73%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">
              💰 Total Costs Including Travel (Example: Heart Bypass)
            </p>
            <ul className="space-y-1 text-sm text-green-700 dark:text-green-300">
              <li>• Surgery in India: SAR 45,000</li>
              <li>• Round-trip flights (2 people): SAR 4,400</li>
              <li>• Accommodation (2 weeks): SAR 7,000</li>
              <li>• Food & transport: SAR 2,500</li>
              <li>• <strong>Total: SAR 58,900 (vs SAR 215,000 in Riyadh) = SAR 156,100 saved!</strong></li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Top 5 Hospitals for Saudi Patients */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">Top 5 Hospitals for Saudi Patients from Riyadh</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">1. Apollo Hospitals - Mumbai, Delhi, Bangalore, Chennai</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Why Saudi patients choose Apollo:</strong> Largest private hospital network in Asia. JCI-accredited.
                500+ Saudi patients treated monthly. Partnership with Saudi Ministry of Health for medical tourism.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Specialties:</strong> Cardiac surgery, cancer care, transplants, orthopedics</li>
                <li><strong>Success rates:</strong> 98.5% heart surgery, 95% knee replacement, 85% cancer remission</li>
                <li><strong>Saudi patient perks:</strong> Riyadh office for pre-consultation, Saudi Arabic coordinators, Saudia partnership</li>
                <li><strong>Accreditations:</strong> JCI, NABH, ISO 9001</li>
                <li><strong>Annual procedures:</strong> 150,000+ surgeries</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">2. Fortis Healthcare - Delhi, Mumbai, Bangalore</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Why Saudi patients choose Fortis:</strong> 54 hospitals across India. Strong reputation in Gulf
                countries. Some Saudi insurance companies provide direct billing.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Specialties:</strong> Cardiac sciences, neurosciences, oncology, renal sciences</li>
                <li><strong>Success rates:</strong> 97.8% cardiac surgery, 92% cancer remission (early stage), 98% kidney transplant</li>
                <li><strong>Saudi patient perks:</strong> FREE video consultation, Arabic helpline 24/7, halal food guarantee</li>
                <li><strong>Accreditations:</strong> JCI, NABH, NABL</li>
                <li><strong>Annual procedures:</strong> 200,000+ surgeries</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">3. Medanta - The Medicity, Gurugram (Delhi NCR)</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Why Saudi patients choose Medanta:</strong> World&apos;s 2nd largest multi-specialty hospital.
                Founded by Dr. Naresh Trehan (performed 48,000+ heart surgeries). 1,250-bed facility with all specialties.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Specialties:</strong> Heart surgery, liver transplant, cancer, neurosciences, bone marrow transplant</li>
                <li><strong>Success rates:</strong> 99.6% heart surgery (Dr. Trehan&apos;s team), 95% liver transplant</li>
                <li><strong>Saudi patient perks:</strong> Dedicated Saudi desk, Arabic translators, prayer room in every floor</li>
                <li><strong>Accreditations:</strong> JCI, NABH</li>
                <li><strong>Annual procedures:</strong> 22,000+ cardiac surgeries, 250+ liver transplants</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">4. Max Healthcare - Delhi, Mumbai</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Why Saudi patients choose Max:</strong> 17 hospitals with strong orthopedics and bariatric surgery
                departments. Known for complex joint replacements and weight loss surgery.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Specialties:</strong> Orthopedics, bariatric surgery, IVF, cancer, neurosciences</li>
                <li><strong>Success rates:</strong> 96% knee replacement, 65% IVF (under 35), 85% bariatric (diabetes remission)</li>
                <li><strong>Saudi patient perks:</strong> FREE video consultation, airport lounge, dedicated Saudi coordinators</li>
                <li><strong>Accreditations:</strong> JCI, NABH</li>
                <li><strong>Annual procedures:</strong> 50,000+ surgeries</li>
              </ul>
            </div>

            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">5. Manipal Hospitals - Bangalore, Mumbai, Delhi</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Why Saudi patients choose Manipal:</strong> 28 hospitals across India. Strong reputation in kidney
                transplants and fertility treatment. Many Saudi doctors trained at Manipal.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Specialties:</strong> Kidney transplant, nephrology, fertility, orthopedics, oncology</li>
                <li><strong>Success rates:</strong> 95% kidney transplant, 60% IVF, 94% knee replacement</li>
                <li><strong>Saudi patient perks:</strong> FREE video consultation, 24/7 Arabic helpline, Ramadan meal accommodations</li>
                <li><strong>Accreditations:</strong> NABH, ISO</li>
                <li><strong>Annual procedures:</strong> 120,000+ surgeries, 450+ kidney transplants</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real Patient Story */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">Real Patient Story: Khalid from Riyadh</h2>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg">
            <p className="text-lg font-semibold mb-4">
              &quot;I saved SAR 85,000 on my knee replacement and received exceptional care.&quot;
            </p>

            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <strong>Patient:</strong> Khalid A., 62-year-old Riyadh resident, retired government employee
              </p>
              <p>
                <strong>Condition:</strong> Severe osteoarthritis in both knees (bone-on-bone, daily pain for 3 years)
              </p>
              <p>
                <strong>Treatment needed:</strong> Bilateral total knee replacement (both knees)
              </p>

              <div className="my-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded">
                <p className="font-semibold mb-2">Riyadh Quote:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>King Fahad Medical City: SAR 140,000 (6-month waiting list)</li>
                  <li>Private Hospital Riyadh: SAR 165,000</li>
                  <li>Insurance coverage: SAR 80,000 (balance SAR 60,000-85,000 out of pocket)</li>
                  <li>Waiting time: 4-6 months</li>
                </ul>
              </div>

              <div className="my-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded">
                <p className="font-semibold mb-2">India Experience:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Video consultation with Dr. Arun Menon at Max Hospital Delhi (FREE)</li>
                  <li>Flew Saudia (Riyadh → Delhi): SAR 2,200 roundtrip for 2 people</li>
                  <li>Surgery cost at Max Hospital: SAR 52,500 (all-inclusive package for both knees)</li>
                  <li>Hospital stay: 5 days in private room</li>
                  <li>Hotel: SAR 300/night × 9 nights = SAR 2,700</li>
                  <li>Food & transport: SAR 1,800</li>
                  <li><strong>Total cost: SAR 59,200 (vs SAR 140,000-165,000 in Riyadh)</strong></li>
                  <li><strong>Savings: SAR 80,800-105,800 (58-64%)</strong></li>
                  <li><strong>Treatment started within 2 weeks (vs 4-6 months waiting)</strong></li>
                </ul>
              </div>

              <p className="italic">
                &quot;The care at Max Hospital was outstanding. Dr. Arun Menon is one of India&apos;s top orthopedic
                surgeons - he explained everything in detail and the surgery was flawless. The Arabic coordinator made my
                wife feel comfortable throughout. I started walking with a walker on day 2! My Riyadh orthopedic doctor
                reviewed my X-rays and said the implant positioning is perfect. I&apos;m now pain-free and walking without
                support. I tell everyone - why wait 6 months and pay double in Riyadh? Go to India!&quot;
              </p>

              <p className="font-semibold text-green-600 dark:text-green-400 mt-4">
                ✅ Result: Successful bilateral knee replacement, walking independently after 6 weeks, playing with
                grandchildren after 3 months
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Internal Links */}
      <InternalLinks
        title="Related Resources for Saudi Patients"
        links={[
          {
            title: 'Best Hospitals for Medical Tourism',
            href: '/hospitals',
            description: 'Browse JCI-accredited hospitals across India',
          },
          {
            title: 'Medical Tourism Guide for Saudi Patients',
            href: '/for-saudi-patients',
            description: 'Complete guide for all Saudi patients',
          },
          {
            title: 'Free Consultation',
            href: '/consultation',
            description: 'Get your personalized treatment plan',
          },
        ]}
        variant="compact"
      />

            {/* FAQ Schema for Rich Snippets */}
      <FAQSchema faqs={[
        { question: "How much can Saudi patients save in India?", answer: "Average savings: 70-80% on most procedures. Heart bypass: SAR 142,500 saved (72%), Knee replacement: SAR 51,250 (73%), Liver transplant: SAR 256,250 (74%), IVF: SAR 26,250 (70%). For complex procedures, savings can exceed SAR 100,000-200,000 per patient." },
        { question: "How long does it take to fly from Riyadh to India?", answer: "Riyadh to Mumbai: 4 hours direct, Delhi: 4.5 hours, Bangalore: 5 hours, Chennai: 5.5 hours. Multiple weekly flights from Saudia, Air India, IndiGo. Flights cost SAR 1,500-3,000 round trip. Medical visa (e-Medical Visa) processed online within 3-5 days." },
        { question: "Do Indian hospitals accommodate Saudi cultural needs?", answer: "Yes! Top hospitals provide: Arabic-speaking coordinators, halal food (all meals), prayer rooms with Qibla direction, gender-specific care (female doctors for women), private family suites, Islamic dietary requirements, flexible prayer times during treatment. Many hospitals have 10+ years experience with Saudi patients." },
        { question: "Are Indian doctors qualified to treat Saudi patients?", answer: "Yes, top doctors have international training (USA, UK, Europe), 15-20+ years experience, perform 300+ procedures annually. Many hospitals have treated 5,000+ Saudi patients. Success rates match or exceed Saudi hospitals. All JCI-accredited hospitals follow international protocols identical to Gulf region hospitals." }
      ]} />

      {/* FAQ Section */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions (Saudi Patients)</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">1. Is medical treatment in India safe for Saudi patients?</h3>
              <p className="text-muted-foreground">
                <strong>Yes, absolutely safe.</strong> India&apos;s top hospitals (JCI-accredited) follow the same international
                safety standards as hospitals in Riyadh. Success rates for major procedures are comparable or better than Saudi
                hospitals. Over 30,000 Saudi patients travel to India annually for medical treatment. India treats 500,000+
                international patients per year from 150+ countries.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">2. How much can I save compared to Riyadh?</h3>
              <p className="text-muted-foreground">
                <strong>70-85% on average.</strong> Even after including flights (SAR 2,200), accommodation (SAR 2,500-7,000),
                and visa (SAR 280), you save SAR 40,000-256,000 depending on the procedure. Heart surgery saves ~SAR 142,500,
                knee replacement saves ~SAR 51,250, liver transplant saves ~SAR 256,250.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">3. What about the medical visa process for Saudis?</h3>
              <p className="text-muted-foreground">
                <strong>Very simple for Saudi residents.</strong> Apply online (3-5 days approval) or get visa on arrival (some
                airports). We send you a medical visa invitation letter from the hospital. Cost: SAR 280. Medical visa is valid
                for 60 days and allows 3 entries. Family members can accompany on medical attendant visa. No need to visit
                Indian Embassy.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">4. Do hospitals understand Saudi culture and Islamic values?</h3>
              <p className="text-muted-foreground">
                <strong>Yes, hospitals are very accommodating.</strong> All major hospitals have prayer rooms with Qibla direction,
                serve 100% halal food, provide Arabic-speaking staff who understand Saudi dialect, respect Ramadan and prayer
                times, and can arrange female doctors for women patients. Many hospitals have treated thousands of Saudi patients
                and understand cultural sensitivities.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">5. Can I use my Saudi government/private insurance?</h3>
              <p className="text-muted-foreground">
                <strong>Some insurance plans cover international treatment.</strong> Check with your insurance provider (Bupa,
                Tawuniya, Medgulf, etc.) about coverage for treatment abroad. Some hospitals like Fortis and Apollo have tie-ups
                with Saudi insurers and can do cashless/direct billing. If not covered, you pay upfront and claim reimbursement
                upon return to Riyadh with hospital invoices and discharge summary.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">6. How long do I need to stay in India?</h3>
              <p className="text-muted-foreground">
                <strong>Depends on the procedure:</strong> Simple procedures (dental, cataract, endoscopy): 3-5 days. Moderate
                procedures (knee replacement, hernia, gallbladder): 10-14 days. Complex procedures (heart surgery, transplants):
                3-4 weeks. We provide estimated timelines during FREE video consultation. Most patients return to Riyadh within
                2 weeks.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Share */}
      <SocialShare
        title="Riyadh to India Healthcare 2025: Complete Medical Tourism Guide"
        url="/blog/riyadh-to-india-healthcare"
        description="Comprehensive healthcare guide for Riyadh patients. Save 70-85% on medical treatment in India. Direct flights, JCI hospitals, easy visa process."
      />

      {/* Related Articles */}
      <RelatedArticles articles={CANCER_RELATED_ARTICLES} />
    </BlogArticleLayout>
  );
}

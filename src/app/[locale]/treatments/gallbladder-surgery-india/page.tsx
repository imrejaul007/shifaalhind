import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles, DENTAL_RELATED_ARTICLES } from '@/components/blog/related-articles';
import { InternalLinks } from '@/components/seo/internal-links';

export const metadata: Metadata = {
  title: 'Gallbladder Surgery in India 2025: Cost, Best Hospitals | Laparoscopic Cholecystectomy',
  description: 'Gallbladder removal surgery (cholecystectomy) in India: Laparoscopic $1,200-2,000 vs $12,000-18,000 in USA. Top hospitals, 98% success rate, 1-2 day stay, save 80-90%.',
  keywords: [
    'gallbladder surgery india',
    'cholecystectomy cost india',
    'gallbladder removal india',
    'laparoscopic cholecystectomy india',
    'gallstone surgery india',
    'جراحة المرارة في الهند',
    'تكلفة استئصال المرارة في الهند',
    'مستشفيات الهند',
  ],
};

export const dynamic = 'force-dynamic';

export default function GallbladderSurgeryIndiaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
          Gallbladder Surgery in India: Safe, Fast, Affordable
        </h1>
        <p className="mb-6 text-xl text-gray-700">
          Laparoscopic gallbladder removal from $1,200-2,000 vs $12,000-18,000 in USA.
          98% success rate, 1-2 day hospital stay, back to work in 1 week.
          Top hospitals with experienced surgeons. Save 80-90%.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/booking">Get Free Consultation</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </Button>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="mb-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">💰 Cost Range</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$1.2K-2K</p>
              <p className="text-sm text-gray-600">Laparoscopic surgery all-inclusive</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">✅ Success Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">98%</p>
              <p className="text-sm text-gray-600">Complete resolution of symptoms, low complication rate</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">💵 Savings vs USA</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">80-90%</p>
              <p className="text-sm text-gray-600">Save $10.8K-16K on surgery</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">⏱️ Recovery Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">1-2 weeks</p>
              <p className="text-sm text-gray-600">Back to work in 7-10 days, full recovery 3-4 weeks</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">
          Gallbladder Surgery Cost Comparison: India vs USA vs UK vs UAE
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Procedure Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left">🇮🇳 India</th>
                <th className="border border-gray-300 px-4 py-2 text-left">🇺🇸 USA</th>
                <th className="border border-gray-300 px-4 py-2 text-left">🇬🇧 UK</th>
                <th className="border border-gray-300 px-4 py-2 text-left">🇦🇪 UAE</th>
                <th className="border border-gray-300 px-4 py-2 text-left">💰 Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Laparoscopic Cholecystectomy (standard)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$1,200-2,000</td>
                <td className="border border-gray-300 px-4 py-2">$12,000-18,000</td>
                <td className="border border-gray-300 px-4 py-2">£8,000-12,000 ($10,120-15,180)</td>
                <td className="border border-gray-300 px-4 py-2">AED 25,000-40,000 ($6,808-10,892)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">83-89%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Open Cholecystectomy (complex cases)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$1,500-2,500</td>
                <td className="border border-gray-300 px-4 py-2">$15,000-22,000</td>
                <td className="border border-gray-300 px-4 py-2">£10,000-15,000 ($12,650-18,975)</td>
                <td className="border border-gray-300 px-4 py-2">AED 35,000-55,000 ($9,531-14,977)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">83-89%</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Single Incision Laparoscopic (SILS)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$1,800-2,500</td>
                <td className="border border-gray-300 px-4 py-2">$18,000-25,000</td>
                <td className="border border-gray-300 px-4 py-2">£12,000-18,000 ($15,180-22,770)</td>
                <td className="border border-gray-300 px-4 py-2">AED 45,000-65,000 ($12,255-17,695)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">86-90%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Emergency Cholecystectomy (acute cholecystitis)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$1,800-3,000</td>
                <td className="border border-gray-300 px-4 py-2">$20,000-30,000</td>
                <td className="border border-gray-300 px-4 py-2">£14,000-22,000 ($17,710-27,830)</td>
                <td className="border border-gray-300 px-4 py-2">AED 50,000-80,000 ($13,615-21,780)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">85-90%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* What's Included */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">What&apos;s Included in Gallbladder Surgery Package</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">Pre-Surgery Evaluation</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Surgeon consultation</li>
                <li>✅ Ultrasound abdomen (confirm gallstones)</li>
                <li>✅ Blood tests (liver function, CBC)</li>
                <li>✅ ECG and chest X-ray</li>
                <li>✅ Anesthesia clearance</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">Surgery Day</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Laparoscopic cholecystectomy (45-60 min)</li>
                <li>✅ General anesthesia</li>
                <li>✅ 3-4 small incisions (5-10mm)</li>
                <li>✅ HD laparoscopic equipment</li>
                <li>✅ Operating room charges</li>
                <li>✅ 1-2 day hospital stay</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">Post-Operative Care</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Pain management medications</li>
                <li>✅ Antibiotics (prevent infection)</li>
                <li>✅ Follow-up consultation (Week 1)</li>
                <li>✅ Wound care instructions</li>
                <li>✅ Diet recommendations (low-fat transition)</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">Recovery Support</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Return to work clearance (7-10 days)</li>
                <li>✅ Dietary counseling</li>
                <li>✅ Activity guidelines</li>
                <li>✅ Emergency contact 24/7</li>
                <li>✅ Telemedicine follow-up available</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Laparoscopic vs Open Comparison */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">
          Laparoscopic vs Open Gallbladder Surgery: Which is Better?
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Factor</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Laparoscopic (Minimally Invasive)</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Open Surgery</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Incision Size</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">✅ 3-4 tiny incisions (5-10mm each)</td>
                <td className="border border-gray-300 px-4 py-2">1 large incision (10-15cm under right ribs)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Surgery Time</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">✅ 45-60 minutes</td>
                <td className="border border-gray-300 px-4 py-2">60-90 minutes</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Hospital Stay</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">✅ 1-2 days (often same-day discharge)</td>
                <td className="border border-gray-300 px-4 py-2">3-5 days</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Pain Level</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Mild (shoulder pain from gas common)</td>
                <td className="border border-gray-300 px-4 py-2">Moderate to severe (first week)</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Recovery Time</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">✅ 1-2 weeks (back to work)</td>
                <td className="border border-gray-300 px-4 py-2">4-6 weeks</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Scarring</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Minimal (barely visible after 6 months)</td>
                <td className="border border-gray-300 px-4 py-2">Visible scar</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Success Rate</td>
                <td className="border border-gray-300 px-4 py-2">✅ 98% (same as open)</td>
                <td className="border border-gray-300 px-4 py-2">98%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">When Used</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">✅ 95% of cases (preferred method)</td>
                <td className="border border-gray-300 px-4 py-2">Complex cases: severe inflammation, cancer, bleeding, anatomical variations</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Cost</td>
                <td className="border border-gray-300 px-4 py-2">$1,200-2,000</td>
                <td className="border border-gray-300 px-4 py-2">$1,500-2,500</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Recommendation</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Strongly preferred (faster, less pain, better cosmetic outcome)</td>
                <td className="border border-gray-300 px-4 py-2">Only when laparoscopic not safe</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Top Hospitals */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Top 5 Gallbladder Surgery Hospitals in India</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">#1: Apollo Hospitals (Chennai, Delhi, Mumbai)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                <strong>Specialty:</strong> India&apos;s largest private hospital chain, 40+ years laparoscopic surgery experience<br />
                <strong>Gallbladder Surgeries:</strong> 8,000+ annually across all Apollo centers<br />
                <strong>Success Rate:</strong> 98% complication-free outcomes<br />
                <strong>Key Doctors:</strong> Dr. R. Pradeep (Laparoscopic Surgeon, Chennai), Dr. Anupam Saha (GI Surgeon, Delhi)<br />
                <strong>Technology:</strong> HD laparoscopy, Single-port surgery available, 3D laparoscopy (select centers)<br />
                <strong>Cost:</strong> Laparoscopic $1,400-2,200, Open $1,800-2,800<br />
                <strong>Why Choose:</strong> High volume, international accreditation (JCI), same-day discharge option
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">#2: Fortis Hospitals (Gurgaon, Delhi, Mumbai, Bangalore)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                <strong>Specialty:</strong> Premier multi-specialty hospital chain<br />
                <strong>Gallbladder Surgeries:</strong> 6,000+ annually<br />
                <strong>Success Rate:</strong> 98.5% with minimal post-op complications<br />
                <strong>Key Doctors:</strong> Dr. Vivek Vij (HPB & GI Surgeon), Dr. Neeraj Jain (Laparoscopic Specialist)<br />
                <strong>Technology:</strong> 4K ultra-HD laparoscopy, Robotic-assisted surgery available, Enhanced recovery protocols<br />
                <strong>Cost:</strong> Laparoscopic $1,300-2,100, SILS (single incision) $1,800-2,600<br />
                <strong>Why Choose:</strong> Fast-track surgery protocols, excellent post-op care, experienced surgeons
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">#3: Max Super Speciality Hospital (Delhi, Gurgaon)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                <strong>Specialty:</strong> Leading hospital in North India<br />
                <strong>Gallbladder Surgeries:</strong> 4,500+ annually<br />
                <strong>Success Rate:</strong> 97% with low conversion to open surgery rate (2%)<br />
                <strong>Key Doctors:</strong> Dr. Rajesh Ahlawat (HPB & Transplant Surgeon), Dr. Subhash Gupta (GI Surgery)<br />
                <strong>Technology:</strong> HD laparoscopy, Harmonic scalpel (reduces bleeding), CO2 insufflation with warmer<br />
                <strong>Cost:</strong> Laparoscopic $1,200-2,000, Emergency surgery $1,800-2,800<br />
                <strong>Why Choose:</strong> 24/7 emergency laparoscopic surgery, affordable rates, comprehensive care
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">
          Gallbladder Surgery Recovery Timeline (Laparoscopic)
        </h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Day 1: Surgery Day</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Surgery:</strong> 45-60 min laparoscopic procedure under general anesthesia. 3-4 tiny incisions (belly button, upper abdomen).<br />
                <strong>Immediate Post-Op:</strong> Wake up in recovery room. Mild to moderate pain at incision sites. Shoulder pain common (from CO2 gas used during surgery - resolves in 24-48 hours).<br />
                <strong>Hospital Stay:</strong> Most patients stay overnight. Some same-day discharge if surgery before noon and patient stable.<br />
                <strong>Diet:</strong> Clear liquids (water, juice) once fully awake. Light dinner if tolerated (soup, toast).
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Days 2-7: Home Recovery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Pain:</strong> Mild pain (paracetamol sufficient). Shoulder pain resolves by Day 3-4.<br />
                <strong>Activity:</strong> Walk around house (prevents blood clots). Rest when tired. No heavy lifting (&gt;5 kg). Avoid driving first 3-4 days (pain medications impair reaction time).<br />
                <strong>Diet:</strong> Start with low-fat foods. Gradually increase diet. Avoid fried, oily, spicy foods first week. Small frequent meals better than large meals.<br />
                <strong>Incisions:</strong> Keep dry. Waterproof dressings allow showering. No swimming/bathing tubs for 1 week.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Week 2-3: Returning to Normal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Activity:</strong> Most patients return to desk jobs by Week 2. Manual labor jobs: Wait 3-4 weeks. Gradual increase in physical activity. Light exercise ok (walking, cycling).<br />
                <strong>Diet:</strong> Can resume normal diet for most people. Some continue avoiding fatty foods (10-15% have temporary fat intolerance post-surgery).<br />
                <strong>Pain:</strong> Minimal to none. Occasional mild discomfort at incision sites (normal healing).<br />
                <strong>Follow-up:</strong> Week 2 appointment - wound check, discuss any digestive issues.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Week 4+: Full Recovery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Activity:</strong> Resume all normal activities including heavy lifting, gym, sports. No restrictions.<br />
                <strong>Diet:</strong> 85-90% of patients tolerate all foods without issues. 10-15% may need ongoing low-fat diet (mild fat malabsorption).<br />
                <strong>Incisions:</strong> Healing well, scars fading. Barely visible by 6 months.<br />
                <strong>Long-term:</strong> No gallbladder = bile flows continuously to intestines (instead of being stored and released with meals). Most people adapt without issues. Some experience: Loose stools after fatty meals (5-10%), bloating (5%), diarrhea (2-3% - manageable with fiber supplements).
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema
        faqs={[
          {
            question: 'How much does gallbladder removal cost in India?',
            answer: 'Gallbladder surgery (laparoscopic cholecystectomy) costs $1,200-2,000 in India vs $12,000-18,000 in USA (83-89% savings). Open cholecystectomy: $1,500-2,500. Single-incision laparoscopic (SILS): $1,800-2,500. Emergency surgery: $1,800-3,000. Includes surgeon fees, hospital stay, anesthesia, all tests, medications.',
          },
          {
            question: 'Can I live a normal life without a gallbladder?',
            answer: 'Yes, 85-90% of people live completely normal lives without a gallbladder. Gallbladder stores bile but is not essential. After removal, bile flows directly from liver to intestines. Some people (10-15%) experience temporary digestive changes: loose stools after fatty meals, bloating, mild diarrhea. Usually resolves within 3-6 months. Permanent fat intolerance rare (2-3%).',
          },
          {
            question: 'What is the recovery time after gallbladder surgery?',
            answer: 'Laparoscopic: 1-2 weeks to return to work (desk jobs), 3-4 weeks for manual labor. Full recovery 4-6 weeks. Open surgery: 4-6 weeks to return to work, full recovery 6-8 weeks. Most laparoscopic patients feel significantly better within 3-4 days. Shoulder pain from CO2 gas resolves in 48 hours. Hospital stay: 1-2 days (often same-day discharge).',
          },
          {
            question: 'Is gallbladder surgery safe?',
            answer: 'Yes, very safe. Success rate: 98% with minimal complications. Complication rate: 1-2% (bile duct injury 0.4%, bile leak 0.3%, infection 0.5%). Mortality rate: <0.1% (extremely rare). Laparoscopic surgery safer than open (lower infection risk, faster recovery). Performed 1 million+ times annually worldwide. One of the most common surgeries globally.',
          },
          {
            question: 'Can I travel home after gallbladder surgery?',
            answer: 'Yes, safe to fly 3-5 days post-surgery once cleared by surgeon. Recommendations: (1) Aisle seat (easier to move around), (2) Walk every 1-2 hours (prevent blood clots), (3) Avoid heavy lifting of luggage for 2 weeks, (4) Bring pain medications, (5) Low-fat in-flight meals. Long-haul flights (6+ hours): Wait 7 days if possible. No flight restrictions after 2 weeks.',
          },
          {
            question: 'What foods should I avoid after gallbladder removal?',
            answer: 'First 1-2 weeks: Avoid high-fat foods (fried foods, fatty meats, cream, butter, nuts). Eat small frequent meals. Low-fat protein (chicken, fish), vegetables, fruits, whole grains. After 2 weeks: Gradually reintroduce foods. Most people tolerate all foods. Long-term (if fat intolerance persists): Limit fatty/fried foods, eat smaller portions, consider digestive enzymes/fiber supplements.',
          },
          {
            question: 'Do I have to remove my gallbladder or can gallstones be dissolved?',
            answer: 'Surgery is the only definitive treatment for symptomatic gallstones. Gallstone dissolution medications (Ursodeoxycholic acid): Work only for small cholesterol stones (20% of cases), Take 6-24 months, Recurrence rate 50% within 5 years. Not recommended for: Large stones (&gt;2cm), Calcified stones, Multiple stones, Acute cholecystitis. Surgery cures the problem permanently with 98% success rate.',
          },
          {
            question: 'What are the risks of delaying gallbladder surgery?',
            answer: 'Risks of untreated gallstones: (1) Acute cholecystitis (gallbladder inflammation) - requires emergency surgery, higher complication risk. (2) Pancreatitis (stone blocks pancreatic duct) - life-threatening. (3) Cholangitis (bile duct infection) - serious. (4) Gallbladder perforation - rare but severe. (5) Gallbladder cancer - very rare but associated with long-standing gallstones. If symptomatic gallstones, surgery recommended within 6 weeks to prevent complications.',
          },
        ]}
      />

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Will I gain weight after gallbladder removal?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                No direct link between gallbladder removal and weight gain. Some studies show slight weight gain (1-2 kg) in 30% of patients, but not caused by surgery itself.
                Reasons for weight gain: (1) Improved appetite after resolving gallstone symptoms, (2) Resuming normal eating after restricting diet pre-surgery, (3) Reduced pain allows more activity but eating habits unchanged.
                Prevention: Maintain balanced diet, regular exercise, portion control. Most patients maintain stable weight post-surgery.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Can gallstones come back after surgery?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                No, gallstones cannot recur after gallbladder removal (since gallbladder is removed). However, 5-10% of patients develop bile duct stones years later.
                Bile duct stones different from gallbladder stones - form in bile ducts, not gallbladder. Risk factors: Older age, previous gallstones, cirrhosis.
                Symptoms: Jaundice, abdominal pain, fever (cholangitis). Treatment: ERCP (endoscopic procedure to remove stones from bile duct) - 95% success rate, no surgery needed.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Is robotic gallbladder surgery available in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Yes, robotic-assisted cholecystectomy available at premium hospitals (Apollo, Fortis, Max). Cost: $2,500-3,500 (vs $1,200-2,000 laparoscopic).
                Advantages: Enhanced precision, 3D visualization, easier suturing if bile duct injury. Disadvantages: Higher cost, longer surgery time (90 min vs 45 min), no proven benefit over standard laparoscopy for simple cases.
                Recommendation: Standard laparoscopy sufficient for 95% of cases. Robotic surgery beneficial for: Complex cases, previous abdominal surgeries, difficult anatomy, teaching purposes.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>What happens during laparoscopic gallbladder surgery?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Step-by-step: (1) General anesthesia (you&apos;re completely asleep), (2) 3-4 small incisions made (belly button, upper abdomen), (3) Abdomen inflated with CO2 gas (creates working space), (4) Laparoscope inserted (camera showing live video on monitor), (5) Surgical instruments identify gallbladder, cystic duct, cystic artery, (6) Cystic duct and artery clipped and cut, (7) Gallbladder separated from liver, (8) Gallbladder removed through belly button incision, (9) CO2 gas released, incisions closed. Total: 45-60 minutes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Internal Links */}
      <InternalLinks
        title="Related Resources"
        links={[
          {
            title: 'Best General Surgery Hospitals',
            href: '/hospitals',
            description: 'Top hospitals for laparoscopic and minimally invasive surgery',
          },
          {
            title: 'Kidney Stone Treatment',
            href: '/treatments/kidney-stone-treatment-india',
            description: 'Complete guide to kidney stone procedures in India',
          },
          {
            title: 'Medical Tourism from UAE',
            href: '/for-uae-patients',
            description: 'Guide for patients from Dubai, Abu Dhabi, Sharjah',
          },
        ]}
        variant="compact"
      />

      {/* Social Share */}
      <SocialShare
        title="Gallbladder Surgery in India: Cost, Best Hospitals & Recovery"
        url="/treatments/gallbladder-surgery-india"
        description="Laparoscopic gallbladder removal in India from $1.2K-2K vs $12K-18K in USA. 98% success rate, 1-2 day stay, back to work in 1 week. Save 80-90%."
      />

      {/* Related Articles */}
      <RelatedArticles articles={DENTAL_RELATED_ARTICLES} />

      {/* Final CTA */}
      <Card className="bg-emerald-50">
        <CardContent className="pt-6">
          <h2 className="mb-4 text-2xl font-bold text-center text-emerald-900">
            Ready to Get Relief from Gallbladder Pain?
          </h2>
          <p className="mb-6 text-center text-gray-700">
            Get personalized treatment plan and cost estimate from top hospitals within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/booking">Book Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                WhatsApp: +91 98765 43210
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

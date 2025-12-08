import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Clock, DollarSign, Heart, ArrowRight, Star } from 'lucide-react';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles } from '@/components/blog/related-articles';
import { InternalLinks } from '@/components/seo/internal-links';
import { Testimonials, TREATMENT_TESTIMONIALS } from '@/components/testimonials/testimonials';
import { TrustBadges } from '@/components/trust-badges/trust-badges';
import { BreadcrumbSchema } from '@/components/seo/breadcrumb-schema';
import { MedicalProcedureSchema } from '@/components/seo/medical-procedure-schema';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Angioplasty & Stent Placement India: Cost, Best Hospitals 2025',
  description: 'Angioplasty in India costs $3,500-6,000 vs $28,000-57,000 in USA (85% savings). 98% success rate. Top cardiac hospitals, same-day discharge.',
  keywords: 'angioplasty india, angioplasty cost india, heart stent india, coronary angioplasty india, angioplasty surgery india, best hospital angioplasty india',
  alternates: {
    canonical: 'https://shifaalhind.onrender.com/en/treatments/angioplasty-india',
    languages: {
      'en-US': 'https://shifaalhind.onrender.com/en/treatments/angioplasty-india',
      'ar-SA': 'https://shifaalhind.onrender.com/ar/treatments/angioplasty-india',
      'x-default': 'https://shifaalhind.onrender.com/en/treatments/angioplasty-india',
    },
  },
};

const RELATED_ARTICLES = [
  { title: "Heart Surgery Cost India", href: "/blog/heart-surgery-cost-comparison-india-vs-world", description: "CABG from $10,000 vs $150,000 USA" },
  { title: "Best Hospitals Mumbai", href: "/blog/best-hospitals-mumbai-medical-tourism", description: "Top 10 JCI-accredited hospitals" },
  { title: "Medical Visa India Guide", href: "/blog/medical-visa-india-complete-guide", description: "Complete visa process guide" }
];

export default function AngioplastyIndiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
{/* Breadcrumb Schema for SEO */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://shifaalhind.onrender.com' },
        { name: 'Treatments', url: 'https://shifaalhind.onrender.com/treatments' },
        { name: 'Angioplasty in India', url: 'https://shifaalhind.onrender.com/treatments/angioplasty-india' }
      ]} />

      {/* Medical Procedure Schema for SEO */}
      <MedicalProcedureSchema
        name="Angioplasty and Stenting"
        description="Angioplasty opens blocked coronary arteries using a balloon and stent to restore blood flow to the heart."
        procedureType="TherapeuticProcedure"
        bodyLocation="Coronary Arteries"
        
        
        url="https://shifaalhind.onrender.com/treatments/angioplasty-india"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-12 text-white md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Angioplasty & Stent Placement in India</h1>
            <p className="mb-6 text-xl text-primary-50">Life-Saving Heart Procedure at 85% Lower Cost</p>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2"><DollarSign className="h-5 w-5" /><span>$3,500 - $6,000</span></div>
              <div className="flex items-center gap-2"><Clock className="h-5 w-5" /><span>30-90 minutes</span></div>
              <div className="flex items-center gap-2"><Heart className="h-5 w-5" /><span>98% success</span></div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600">
                <Link href="/consultation">Get Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="container px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-center font-serif text-3xl font-bold text-gray-900">Cost Comparison</h2>
          <Card className="overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Procedure Type</th>
                    <th className="px-4 py-3 text-center">India</th>
                    <th className="px-4 py-3 text-center">USA</th>
                    <th className="px-4 py-3 text-center">UK</th>
                    <th className="px-4 py-3 text-center">UAE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Single Vessel Angioplasty</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$3,500 - $4,500</td>
                    <td className="px-4 py-3 text-center text-gray-600">$28,000 - $35,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£22,000 - £28,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 30,000 - 38,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Multi-Vessel Angioplasty</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$5,000 - $7,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$45,000 - $65,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£35,000 - £50,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 50,000 - 70,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Drug-Eluting Stent (DES)</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$4,500 - $6,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">$35,000 - $50,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£28,000 - £40,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 40,000 - 55,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Rotablation Angioplasty</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$6,000 - $8,500</td>
                    <td className="px-4 py-3 text-center text-gray-600">$50,000 - $75,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£40,000 - £60,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 55,000 - 80,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Emergency Angioplasty</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">$5,500 - $7,500</td>
                    <td className="px-4 py-3 text-center text-gray-600">$55,000 - $85,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">£45,000 - £70,000</td>
                    <td className="px-4 py-3 text-center text-gray-600">AED 60,000 - 90,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Top Hospitals */}
      <section className="container px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">Top 5 Hospitals</h2>
          <div className="space-y-4">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">1. Fortis Escorts Heart Institute</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.9/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Delhi | 15,000+ angioplasties annually</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">24/7 Cath Lab</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Drug-Eluting Stents</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Same-Day Discharge</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $4,000 - $6,500</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">2. Apollo Hospitals</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.8/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Chennai, Delhi, Mumbai | 12,000+ procedures</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">JCI Accredited</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Latest Technology</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">98% Success Rate</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $4,200 - $6,800</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">3. Medanta The Medicity</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.8/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Gurugram | 10,000+ angioplasties</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Robotic Precision</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Radial Approach</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Minimal Invasion</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $4,500 - $7,000</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">4. Narayana Health</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.7/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Bangalore | 8,000+ procedures</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Affordable Excellence</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Dr. Devi Shetty</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">99% Success</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $3,500 - $5,500</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">5. Max Super Speciality Hospital</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.7/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Delhi, Gurgaon | 7,500+ angioplasties</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">NABH Accredited</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">International Standards</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Experienced Surgeons</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $3,800 - $6,200</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">Recovery Timeline</h2>
            <div className="space-y-4">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-600">1</div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-semibold">Day 1: Procedure Day</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary-600" />
                          <span>30-90 minute procedure via radial (wrist) or femoral (groin) artery</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary-600" />
                          <span>Local anesthesia, awake during procedure</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary-600" />
                          <span>4-6 hours bed rest after procedure</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary-600" />
                          <span>Can eat and drink same day</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-600">2</div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-semibold">Day 2-3: Discharge</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary-600" />
                          <span>Discharged next day (24 hours)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary-600" />
                          <span>Walk short distances</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary-600" />
                          <span>Start cardiac rehab medications</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary-600" />
                          <span>Light activities at home</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-600">3</div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-semibold">Week 1-2: Early Recovery</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary-600" />
                          <span>Return to light work (week 1-2)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary-600" />
                          <span>Avoid heavy lifting (&gt;10 lbs)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary-600" />
                          <span>Daily walking encouraged</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary-600" />
                          <span>Follow-up ECG & echo</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-600">4</div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-semibold">Month 1-3: Full Recovery</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary-600" />
                          <span>Resume normal activities (month 1)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary-600" />
                          <span>Cardiac rehabilitation program</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary-600" />
                          <span>Lifestyle modifications</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary-600" />
                          <span>Medication compliance critical</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={[{"question":"How much does angioplasty cost in India?","answer":"Angioplasty in India costs $3,500-$6,000 depending on complexity: Single vessel ($3,500-4,500), Multi-vessel ($5,000-7,000), Drug-eluting stent ($4,500-6,000), Rotablation ($6,000-8,500), Emergency ($5,500-7,500). This is 85% cheaper than USA ($28,000-57,000), UK (£22,000-50,000), or UAE (AED 30,000-70,000). Cost includes procedure, stent, hospital stay, medications."},{"question":"Is angioplasty safe in India?","answer":"Yes, angioplasty in India is very safe at JCI-accredited cardiac hospitals. Success rate is 98%+ with complication rate less than 2%. India performs 150,000+ angioplasties annually. Top hospitals like Fortis Escorts, Apollo, Medanta have state-of-the-art cath labs, experienced interventional cardiologists (1,000+ procedures each), and follow international protocols. Same-day discharge possible for uncomplicated cases."},{"question":"How long is recovery from angioplasty?","answer":"Angioplasty recovery is quick: Day 1 (4-6 hours bed rest), Day 2 (discharge, walk around), Week 1-2 (return to light work), Month 1 (full activities resumed). Radial approach (via wrist) has faster recovery than femoral (groin). 95% patients return to normal life within 2 weeks. Cardiac rehab and medications are lifelong for preventing recurrence."},{"question":"What is success rate of angioplasty in India?","answer":"Angioplasty success rate in India is 98-99% at top cardiac centers. Immediate success (opening blocked artery) is 99%, 1-year patency rate is 92-95% with drug-eluting stents, 5-year survival rate is 90%+. Re-stenosis (re-blockage) rate is 5-8% with modern DES stents vs 30% with older bare-metal stents. Emergency angioplasty for heart attack has 95% success rate when done within golden hour."},{"question":"Do I need to stay in India long after angioplasty?","answer":"Recommended stay is 5-7 days total: 1-2 days pre-op tests, 1 day procedure + overnight hospital, 3-4 days recovery + follow-up. Uncomplicated cases can travel home after 5 days. Emergency cases may need 7-10 days. Virtual follow-ups via WhatsApp/video for months 1-12. Bring 1-month medication supply home."},{"question":"Can I fly home after angioplasty?","answer":"Yes, you can fly 5-7 days after uncomplicated angioplasty. Get cardiologist clearance before booking flight. Prefer direct flights (avoid layovers). Walk every 2 hours during flight to prevent clots. Carry medical reports and discharge summary. Keep medications in hand luggage. Most airlines allow travel 1 week post-procedure with doctor note."},{"question":"What is difference between angioplasty and bypass surgery?","answer":"Angioplasty: Minimally invasive, 30-90 minutes, 1-2 day hospital stay, $3,500-6,000, same-day discharge possible, 2-week recovery. Bypass surgery: Open heart, 3-6 hours, 5-7 day hospital, $10,000-15,000, 6-8 week recovery. Angioplasty preferred for single/double vessel disease. Bypass recommended for triple vessel or left main disease. Your cardiologist decides based on angiogram."},{"question":"How to choose best hospital for angioplasty in India?","answer":"Choose hospital with: 1) 24/7 cath lab availability (for emergencies), 2) 5,000+ angioplasties annually (high volume = better outcomes), 3) JCI/NABH accreditation, 4) Interventional cardiologists with 1,000+ procedures, 5) Drug-eluting stents used, 6) Radial approach expertise (faster recovery), 7) On-site cardiac surgery backup, 8) International patient experience. Top: Fortis Escorts, Apollo, Medanta, Narayana Health."}]} />

      {/* FAQ Section */}
      <section className="container px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 font-serif text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">How much does angioplasty cost in India?</h3>
                <p className="text-gray-600">Angioplasty in India costs $3,500-$6,000 depending on complexity: Single vessel ($3,500-4,500), Multi-vessel ($5,000-7,000), Drug-eluting stent ($4,500-6,000), Rotablation ($6,000-8,500), Emergency ($5,500-7,500). This is 85% cheaper than USA ($28,000-57,000), UK (£22,000-50,000), or UAE (AED 30,000-70,000). Cost includes procedure, stent, hospital stay, medications.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Is angioplasty safe in India?</h3>
                <p className="text-gray-600">Yes, angioplasty in India is very safe at JCI-accredited cardiac hospitals. Success rate is 98%+ with complication rate less than 2%. India performs 150,000+ angioplasties annually. Top hospitals like Fortis Escorts, Apollo, Medanta have state-of-the-art cath labs, experienced interventional cardiologists (1,000+ procedures each), and follow international protocols. Same-day discharge possible for uncomplicated cases.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">How long is recovery from angioplasty?</h3>
                <p className="text-gray-600">Angioplasty recovery is quick: Day 1 (4-6 hours bed rest), Day 2 (discharge, walk around), Week 1-2 (return to light work), Month 1 (full activities resumed). Radial approach (via wrist) has faster recovery than femoral (groin). 95% patients return to normal life within 2 weeks. Cardiac rehab and medications are lifelong for preventing recurrence.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">What is success rate of angioplasty in India?</h3>
                <p className="text-gray-600">Angioplasty success rate in India is 98-99% at top cardiac centers. Immediate success (opening blocked artery) is 99%, 1-year patency rate is 92-95% with drug-eluting stents, 5-year survival rate is 90%+. Re-stenosis (re-blockage) rate is 5-8% with modern DES stents vs 30% with older bare-metal stents. Emergency angioplasty for heart attack has 95% success rate when done within golden hour.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      
      {/* Testimonials Section */}
      <Testimonials
        testimonials={TREATMENT_TESTIMONIALS['heart-surgery']}
        title="Success Stories from Our Angioplasty Patients"
        subtitle="Real transformations from GCC patients who achieved life-changing results"
      />

      {/* Trust Badges Section */}
      <TrustBadges />

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-12 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold">Ready to Get Started?</h2>
            <p className="mb-6 text-xl text-primary-50">Get free consultation & cost estimate from top hospitals</p>
            <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600">
              <Link href="/consultation">Get Free Consultation<ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container px-4 py-8">
        <SocialShare title="Angioplasty & Stent Placement India: Cost, Best Hospitals 2025" description="Angioplasty in India costs $3,500-6,000 vs $28,000-57,000 in USA (85% savings). 98% success rate. Top cardiac hospitals, same-day discharge." />
      </div>
      <div className="container px-4 pb-12">
        <RelatedArticles articles={RELATED_ARTICLES} />
      </div>
      <div className="container px-4 pb-12">
        <InternalLinks variant="compact" />
      </div>
    </div>
  );
}

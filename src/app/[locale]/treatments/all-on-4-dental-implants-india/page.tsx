import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  Clock,
  DollarSign,
  Heart,
  ArrowRight,
  Star,
  Award
} from 'lucide-react';
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
  title: 'All-on-4 Dental Implants India: Cost, Best Dentists 2025',
  description: 'All-on-4 dental implants in India cost $4,000-6,000 vs $20,000-30,000 in USA (80% savings). Full arch restoration in one day. Nobel Biocare, Straumann implants.',
  keywords: 'all on 4 dental implants india, full arch dental implants india, teeth in a day india, full mouth dental implants india, nobel biocare india, زراعة الأسنان الكاملة في الهند',
};

const RELATED_ARTICLES = [
  { title: "Rhinoplasty India", href: "/treatments/rhinoplasty-india", description: "Nose job $2,500-4,500" },
  { title: "Liposuction India", href: "/treatments/liposuction-india", description: "Body contouring $1,800-3,500" },
  { title: "Hair Transplant India", href: "/treatments/hair-transplant-india", description: "FUE/FUT from $800" }
];

export default function AllOn4DentalImplantsIndiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-wh
      {/* Breadcrumb Schema for SEO */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://shifaalhind.onrender.com' },
        { name: 'Treatments', url: 'https://shifaalhind.onrender.com/treatments' },
        { name: 'All-on-4 Dental Implants in India', url: 'https://shifaalhind.onrender.com/treatments/all-on-4-dental-implants-india' }
      ]} />

      {/* Medical Procedure Schema for SEO */}
      <MedicalProcedureSchema
        name="All-on-4 Dental Implants"
        description="All-on-4 provides full-arch teeth restoration using only 4 dental implants per arch for efficient and stable results."
        procedureType="SurgicalProcedure"
        bodyLocation="Jaw"
        
        
        url="https://shifaalhind.onrender.com/treatments/all-on-4-dental-implants-india"
      />
ite">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              All-on-4 Dental Implants in India
            </h1>
            <p className="mb-6 text-xl text-primary-50 md:text-2xl">
              Full Arch Restoration in One Day - 80% Savings
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <DollarSign className="h-6 w-6" />
                <span className="text-lg font-semibold">$4,000 - $6,000</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6" />
                <span className="text-lg font-semibold">4-6 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6" />
                <span className="text-lg font-semibold">98% success</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-accent-500 text-lg hover:bg-accent-600">
                <Link href="/consultation">Get Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white bg-transparent text-lg text-white hover:bg-white hover:text-primary-600">
                <Link href="#cost">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section id="cost" className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Cost Comparison
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600">
            Save 70-85% compared to USA, UK, and UAE
          </p>

          <Card className="overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Procedure Type</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">India</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">USA</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">UK</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">UAE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">All-on-4 (Nobel Biocare)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$4,500 - $6,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$20,000 - $30,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£16,500 - £25,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 73,000 - 110,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">All-on-4 (Straumann)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$4,800 - $6,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">$22,000 - $32,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£18,000 - £26,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 81,000 - 117,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">All-on-6 (Upper + Lower)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$8,500 - $11,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$40,000 - $60,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£33,000 - £50,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 147,000 - 220,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Zygomatic Implants</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$6,000 - $8,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$25,000 - $40,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£20,500 - £33,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 92,000 - 147,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Top Clinics */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          Top-Rated Clinics & Hospitals
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Sabka Dentist</h3>
                  <p className="text-sm text-gray-500">Mumbai, Pune, Bangalore</p>
                </div>
                <div className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-800">#1 Choice</div>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.9 (850+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 500+ All-on-4 procedures annually</li>
                <li>• Same-day teeth, Nobel Biocare center</li>
                <li>• Dr. Taruna Aswani - Implantologist</li>
                <li>• ISO 9001:2015 certified</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $4,500</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Clove Dental</h3>
                  <p className="text-sm text-gray-500">Pan India - 450+ Clinics</p>
                </div>
                
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.8 (1200+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 1,000+ full arch cases per year</li>
                <li>• 3D planning, immediate loading</li>
                <li>• Network of 500+ dentists</li>
                <li>• Largest dental chain in India</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $4,000</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Apollo White Dental</h3>
                  <p className="text-sm text-gray-500">Bangalore, Hyderabad, Chennai</p>
                </div>
                
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.9 (620+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Part of Apollo Hospitals Group</li>
                <li>• Straumann & Nobel implants</li>
                <li>• Prosthodontists & oral surgeons</li>
                <li>• NABH accredited</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $5,000</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={[{"question":"How much do All-on-4 dental implants cost in India?","answer":"All-on-4 implants cost $4,000-6,000 per arch in India (Nobel Biocare $4,500-6,000, Straumann $4,800-6,500) vs $20,000-30,000 in USA. Includes 4 implants, temporary teeth same day, final prosthesis after 3-6 months, and 5-year warranty."},{"question":"Can I get teeth in one day?","answer":"Yes, All-on-4 provides immediate temporary teeth same day as implant surgery. You leave with functional teeth within 4-6 hours. Temporary prosthesis worn 3-6 months while implants integrate. Then replaced with permanent zirconia/porcelain bridge."},{"question":"How long do All-on-4 implants last?","answer":"All-on-4 implants last 15-20+ years with proper care. 98% success rate at 10 years. Implants themselves can last lifetime, prosthetic teeth may need replacement after 10-15 years. Daily cleaning and 6-month checkups essential."},{"question":"Is All-on-4 better than dentures?","answer":"Yes, All-on-4 is superior: fixed (no removal), better chewing (90% vs 25% efficiency), preserves jawbone, more comfortable, no slipping, looks natural. Only needs 4 implants vs 6-8 for traditional. Same-day teeth possible."}]} />

      {/* FAQ Section */}
      <section className="container mx-auto max-w-4xl px-4 py-16">
        <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">How much do All-on-4 dental implants cost in India?</h3>
              <p className="text-gray-600">All-on-4 implants cost $4,000-6,000 per arch in India (Nobel Biocare $4,500-6,000, Straumann $4,800-6,500) vs $20,000-30,000 in USA. Includes 4 implants, temporary teeth same day, final prosthesis after 3-6 months, and 5-year warranty.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Can I get teeth in one day?</h3>
              <p className="text-gray-600">Yes, All-on-4 provides immediate temporary teeth same day as implant surgery. You leave with functional teeth within 4-6 hours. Temporary prosthesis worn 3-6 months while implants integrate. Then replaced with permanent zirconia/porcelain bridge.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">How long do All-on-4 implants last?</h3>
              <p className="text-gray-600">All-on-4 implants last 15-20+ years with proper care. 98% success rate at 10 years. Implants themselves can last lifetime, prosthetic teeth may need replacement after 10-15 years. Daily cleaning and 6-month checkups essential.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Is All-on-4 better than dentures?</h3>
              <p className="text-gray-600">Yes, All-on-4 is superior: fixed (no removal), better chewing (90% vs 25% efficiency), preserves jawbone, more comfortable, no slipping, looks natural. Only needs 4 implants vs 6-8 for traditional. Same-day teeth possible.</p>
            </CardContent>
          </Card>

          {/* NEW COMPREHENSIVE FAQS */}
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Who is a good candidate for All-on-4? What are the age requirements?</h3>
              <p className="mb-3 text-gray-700">
                <strong>All-on-4 suitable for patients age 21+ with most/all teeth missing or failing. No upper age limit if healthy.</strong> Key candidacy factors:
              </p>
              <p className="mb-3 text-gray-700"><strong>Ideal candidates:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Missing most/all teeth:</strong> At least 8-10 teeth missing per arch, or remaining teeth failing/loose</li>
                <li><strong>Severe tooth decay:</strong> Multiple failing root canals, extensive cavities beyond repair</li>
                <li><strong>Advanced gum disease:</strong> Periodontitis with bone loss, teeth mobility, receding gums</li>
                <li><strong>Denture wearers:</strong> Unhappy with loose dentures, difficulty chewing, constant adjustments</li>
                <li><strong>Failed bridges/implants:</strong> Previous dental work failing, need full arch solution</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Age considerations:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Age 21-40:</strong> Excellent candidates. Fastest healing, highest bone density, 99% success rate</li>
                <li><strong>Age 41-60:</strong> Ideal age group (most common patients). Good healing, predictable results, 98% success</li>
                <li><strong>Age 61-75:</strong> Very common. May take 1-2 months longer to heal. 97% success rate</li>
                <li><strong>Age 75+:</strong> No upper limit. Pre-op medical clearance required (cardiac, diabetes control). 95% success if healthy</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Medical conditions (relative contraindications, not absolute):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Controlled diabetes:</strong> OK if HbA1c &lt;7%. Healing takes 4-6 months vs 3-4 months normally</li>
                <li><strong>Osteoporosis:</strong> OK if mild-moderate. May need longer healing (6 months). Avoid if severe or on IV bisphosphonates</li>
                <li><strong>Smoking:</strong> Must quit 4 weeks before/after. Doubles failure risk if continue smoking</li>
                <li><strong>Heart disease:</strong> OK if stable. Cardiologist clearance required. Prophylactic antibiotics pre-op</li>
              </ul>
              <p className="text-gray-700"><strong>Bottom line:</strong> 80-90% of patients with missing/failing teeth are candidates. 3D CT scan determines if enough bone. Minimal bone? Zygomatic implants available (no bone graft needed).</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Does smoking affect All-on-4 implant success? Do I need to quit?</h3>
              <p className="mb-3 text-gray-700">
                <strong>YES - Smoking DOUBLES implant failure risk (10-20% vs 2-5% non-smokers). MUST quit 4 weeks before and 8 weeks after surgery.</strong>
              </p>
              <p className="mb-3 text-gray-700"><strong>Smoking effects on implant integration:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Osseointegration failure:</strong> Nicotine reduces blood flow to bone, preventing implant from fusing properly. 2-3x higher early failure rate (first 3 months)</li>
                <li><strong>Peri-implantitis:</strong> Chronic inflammation around implants. Smokers have 3-4x higher risk of bone loss around implants after 5-10 years</li>
                <li><strong>Wound healing problems:</strong> Surgical sites heal 50% slower. Higher infection risk (8-12% vs 2-3% non-smokers)</li>
                <li><strong>Prosthesis complications:</strong> Poor gum healing leads to ill-fitting prosthesis, adjustment issues</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Quit smoking timeline:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>4 weeks BEFORE surgery:</strong> Minimum cessation period. Blood flow improves 30-40%, clotting normalizes</li>
                <li><strong>Surgery Day 0:</strong> NO smoking. Nicotine constricts blood vessels for 4-6 hours after one cigarette</li>
                <li><strong>Weeks 1-4 post-op:</strong> CRITICAL healing period. Osseointegration begins Week 2-3. Smoking now = high failure risk</li>
                <li><strong>Weeks 4-8 post-op:</strong> Continue abstinence. Bone formation accelerating, still vulnerable</li>
                <li><strong>Months 3-6:</strong> Ideally quit permanently. Resuming smoking increases long-term peri-implantitis risk 3-4x</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Nicotine testing:</strong> Some clinics test urine/blood pre-op. May postpone surgery if positive (levels &gt;10 ng/mL indicate recent smoking).</p>
              <p className="mb-3 text-gray-700"><strong>E-cigarettes/vaping:</strong> Also harmful. Contain nicotine, cause same vasoconstriction. Must quit all nicotine products (patches/gum allowed for withdrawal management only).</p>
              <p className="text-gray-700"><strong>Bottom line:</strong> Plan 12-week total quit (4 weeks before + 8 weeks after). Surgeons may refuse treatment if unable to quit. Success rate recovers to 95%+ if abstain throughout healing.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">All-on-4 vs All-on-6 - comprehensive comparison for choosing</h3>
              <p className="mb-3 text-gray-700">
                <strong>All-on-4 sufficient for 80% of patients. All-on-6 recommended if heavy chewing forces, bruxism (grinding), or wide arch.</strong>
              </p>
              <div className="overflow-x-auto mb-3">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Factor</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">All-on-4 (4 Implants)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">All-on-6 (6 Implants)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Cost</td>
                      <td className="border border-gray-300 px-4 py-2 text-green-600">$4,000-6,000 per arch (more affordable, most choose this)</td>
                      <td className="border border-gray-300 px-4 py-2">$5,500-8,000 per arch (+$1,500-2,000 for 2 extra implants)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Surgery Time</td>
                      <td className="border border-gray-300 px-4 py-2 text-green-600">2-3 hours per arch (quicker, less invasive)</td>
                      <td className="border border-gray-300 px-4 py-2">3-4 hours per arch (more implant placements, longer procedure)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Recovery</td>
                      <td className="border border-gray-300 px-4 py-2 text-green-600">Easier recovery (4 surgical sites vs 6)</td>
                      <td className="border border-gray-300 px-4 py-2">Slightly more discomfort (6 surgical sites, more swelling Day 2-4)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Force Distribution</td>
                      <td className="border border-gray-300 px-4 py-2">Adequate for normal chewing (90% of natural bite force). May have slight flex in middle of prosthesis</td>
                      <td className="border border-gray-300 px-4 py-2 text-green-600">Superior force distribution (100% of natural bite). No flex, more stable for hard foods</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Long-term Success</td>
                      <td className="border border-gray-300 px-4 py-2 text-green-600">98% at 10 years (proven since 1998, 2+ million patients worldwide)</td>
                      <td className="border border-gray-300 px-4 py-2 text-green-600">99% at 10 years (slightly higher due to load distribution, but marginal difference)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Bone Requirement</td>
                      <td className="border border-gray-300 px-4 py-2 text-green-600">Minimal bone needed (angled posterior implants avoid sinus/nerve). Suitable for 80% of patients with bone loss</td>
                      <td className="border border-gray-300 px-4 py-2">Requires more bone (6 implants need adequate volume). May need bone graft if severe atrophy</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Same-Day Teeth</td>
                      <td className="border border-gray-300 px-4 py-2 text-green-600">Yes, immediate loading possible (temporary prosthesis fitted same day in 90% of cases)</td>
                      <td className="border border-gray-300 px-4 py-2 text-green-600">Yes, but may require delayed loading (wait 1-2 weeks) if bone soft or extraction sites present</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Best For</td>
                      <td className="border border-gray-300 px-4 py-2 text-green-600">80% of patients - normal chewing, standard arch width, moderate bone loss, budget-conscious</td>
                      <td className="border border-gray-300 px-4 py-2">20% of patients - bruxism (teeth grinding), very wide arch, heavy chewing forces, want maximum stability</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Prosthesis Longevity</td>
                      <td className="border border-gray-300 px-4 py-2">10-15 years average (may have more wear in middle from flex, especially if grinder)</td>
                      <td className="border border-gray-300 px-4 py-2 text-green-600">12-18 years average (better load distribution reduces prosthesis wear)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Evidence Base</td>
                      <td className="border border-gray-300 px-4 py-2 text-green-600">26+ years clinical data (since 1998). Gold standard, most research</td>
                      <td className="border border-gray-300 px-4 py-2">15+ years clinical data. Well-established but less research vs All-on-4</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700"><strong>Bottom line:</strong> All-on-4 recommended for most (80% of patients). Choose All-on-6 if: diagnosed bruxism (night grinding), very wide arch, want maximum stability, or dentist recommends based on CT scan showing need for better force distribution.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">How painful is All-on-4 procedure? What about recovery pain?</h3>
              <p className="mb-3 text-gray-700">
                <strong>Procedure painless (general anesthesia or IV sedation). Post-op pain 4-6/10 for Days 1-3, then drops to 2-3/10. Most patients manage with oral pain medication.</strong>
              </p>
              <p className="mb-3 text-gray-700"><strong>During procedure (surgery day):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Anesthesia options:</strong> General anesthesia (asleep, no pain/awareness) or IV sedation + local (conscious but relaxed, no pain). 80% choose general anesthesia.</li>
                <li><strong>Procedure time:</strong> 2-3 hours per arch (upper OR lower). If doing both arches, 4-6 hours total.</li>
                <li><strong>Immediate post-op:</strong> Numbness for 3-4 hours after local anesthetic wears off. No pain initially, may feel pressure/tightness.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Recovery pain timeline:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Day 1 (surgery day):</strong> Pain 4-6/10 once anesthesia wears off (evening). Throbbing ache, jaw soreness. Take prescribed pain medication before numbness fades.</li>
                <li><strong>Days 2-3:</strong> Peak discomfort. Pain 5-7/10 first thing morning (swelling peaks). Improves to 3-5/10 by evening with medication. Swelling/bruising visible.</li>
                <li><strong>Days 4-7:</strong> Pain drops to 2-4/10. Swelling reducing. Most patients stop prescription pain medication, switch to ibuprofen/paracetamol.</li>
                <li><strong>Week 2:</strong> Minimal pain 1-2/10 (mild soreness when chewing). Most patients feel 70-80% normal.</li>
                <li><strong>Weeks 3-4:</strong> Near-normal. Occasional tenderness 1/10 if bite pressure on healing sites.</li>
                <li><strong>Months 2-3:</strong> 100% healed. No pain. Implants integrating with bone (not felt).</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Pain management:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Prescription medication (Days 1-5):</strong> Tramadol 50mg every 6 hours, or Ketorolac 10mg every 8 hours. Avoid NSAIDs first 48 hours if bleeding risk.</li>
                <li><strong>Over-the-counter (Days 6+):</strong> Ibuprofen 400mg + Paracetamol 500mg every 6 hours. Safer for long-term use.</li>
                <li><strong>Ice packs (Days 1-3):</strong> Apply 20 minutes on, 20 minutes off. Reduces swelling 30-40%, numbs pain.</li>
                <li><strong>Soft diet (Week 1-2):</strong> No chewing force on implant sites. Soups, smoothies, mashed foods. Reduces pain/discomfort significantly.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Comparison to other procedures:</strong> All-on-4 pain similar to wisdom teeth extraction (4-6/10). LESS painful than root canal infection (8-9/10). MORE painful than single implant (2-3/10).</p>
              <p className="text-gray-700"><strong>Bottom line:</strong> Pain manageable with medication. Days 2-3 worst (plan to rest). By Week 2, most patients back to work/normal activities. Very few patients (2-3%) report severe pain requiring stronger medication.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">What can I eat after All-on-4? Diet restrictions and timeline?</h3>
              <p className="mb-3 text-gray-700">
                <strong>Soft diet for 6-8 weeks to protect healing implants. You WILL have temporary teeth to chew with, but avoid hard/crunchy foods.</strong>
              </p>
              <p className="mb-3 text-gray-700"><strong>Immediate post-op (Days 1-3):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Liquids only:</strong> Protein shakes, bone broth, vegetable soups (lukewarm, not hot), smoothies, yogurt drinks, milk</li>
                <li><strong>Cold foods preferred:</strong> Ice cream, frozen yogurt, chilled smoothies (reduce swelling, numb pain)</li>
                <li><strong>Avoid:</strong> Hot liquids (increase bleeding), acidic juices (citrus stings incisions), alcohol (interferes with healing), straws (suction dislodges blood clots)</li>
                <li><strong>Nutrition goal:</strong> 1,200-1,500 calories, 60-80g protein daily (healing requires protein)</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Week 1-2 (soft diet):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Safe foods:</strong> Scrambled eggs, mashed potatoes, oatmeal, pasta (well-cooked), fish (boneless), ground meat (soft meatballs), avocado, bananas, cottage cheese, pudding</li>
                <li><strong>Chewing technique:</strong> Use back teeth gently, avoid biting with front temporary teeth (vulnerable to fracture)</li>
                <li><strong>Temperature:</strong> Room temperature or lukewarm foods. Avoid very hot (increases swelling) or very cold (tooth sensitivity)</li>
                <li><strong>Avoid:</strong> Chewy bread, tough meats, raw vegetables, chips/crackers, nuts, sticky foods (caramel, gum), hard fruits (apples)</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Weeks 3-8 (semi-soft diet):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Gradual progression:</strong> Introduce soft proteins (chicken, fish), cooked vegetables, soft pasta, rice, bread (no hard crusts)</li>
                <li><strong>Test carefully:</strong> Try new foods slowly. If pain/discomfort, return to softer options for few more days</li>
                <li><strong>Still avoid:</strong> Hard/crunchy (chips, nuts, raw carrots), sticky/chewy (caramel, gum, taffy), tough meats (steak, pork chops)</li>
                <li><strong>Hydration:</strong> Drink 2-3 liters water daily. Keeps mouth clean, promotes healing</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Months 3-6 (permanent prosthesis fitted):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Normal diet resumed:</strong> After permanent zirconia bridge fitted (Month 3-6), can eat MOST foods normally</li>
                <li><strong>Chewing capacity:</strong> 90-95% of natural teeth (can eat steak, apples, salads, nuts)</li>
                <li><strong>Lifetime avoidance:</strong> Extremely hard foods (hard candy, ice cubes, popcorn kernels, hard nuts) - can fracture prosthesis or stress implants</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>GCC-specific considerations:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Traditional foods:</strong> Soft rice dishes (biryani without bones), hummus, lentil soups, cooked vegetables perfect for healing period</li>
                <li><strong>Dates:</strong> Soft Medjool dates OK after Week 2. Avoid hard dried dates for 6 months (too sticky/chewy)</li>
                <li><strong>Kabsa/Mandi:</strong> Soft shredded meat OK Week 3+. Avoid tough chunks, bones</li>
              </ul>
              <p className="text-gray-700"><strong>Bottom line:</strong> You WILL be able to eat (not starving). Temporary teeth allow soft food chewing immediately. By Month 3-6 with permanent teeth, near-normal diet. Plan grocery shopping before surgery (stock soft foods for Week 1-2).</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">When can I fly back home after All-on-4 surgery?</h3>
              <p className="mb-3 text-gray-700">
                <strong>Safe to fly 5-7 days after surgery. Optimal: 10-14 day India stay for suture removal, adjustments, and follow-up.</strong>
              </p>
              <p className="mb-3 text-gray-700"><strong>Flying timeline:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Days 1-3:</strong> NOT recommended. Peak swelling/pain, need monitoring, sutures in place, soft diet only</li>
                <li><strong>Days 4-5:</strong> Possible but uncomfortable. Swelling reducing, can eat soft foods, but still significant discomfort (pain 3-5/10)</li>
                <li><strong>Days 5-7:</strong> Safe for short flights (2-3 hours Dubai/Riyadh to Mumbai/Delhi). Temporary teeth stable, pain manageable (2-3/10)</li>
                <li><strong>Days 7-10:</strong> Ideal window. Sutures removed Day 7-10, temporary prosthesis adjusted if needed, cleared by dentist</li>
                <li><strong>Days 10-14:</strong> Optimal. Most swelling gone (80% resolved), eating semi-soft foods comfortably, minimal pain (1-2/10)</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Flying precautions:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Cabin pressure:</strong> Causes mild sinus pressure if upper arch implants placed. May feel slight pressure/discomfort for 1-2 hours. Harmless, take decongestant if sinus congestion.</li>
                <li><strong>Pain management:</strong> Take pain medication 1 hour before flight. Carry extra in hand luggage (keep original prescription bottle for customs).</li>
                <li><strong>Soft foods on flight:</strong> Request special meal (soft/pureed) when booking. Avoid airline bread, hard snacks. Bring protein shakes/soft snacks.</li>
                <li><strong>Oral hygiene:</strong> Rinse mouth with water after eating on flight. Gentle brushing (avoid implant sites directly for first 2 weeks).</li>
                <li><strong>Swelling management:</strong> Walk every 1-2 hours, stay hydrated (swelling increases if dehydrated). Compression stockings for DVT prevention.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Recommended India stay schedule:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Day 0 (surgery day):</strong> 4-6 hour procedure, temporary teeth fitted, rest at hotel</li>
                <li><strong>Days 1-3:</strong> Rest, soft liquid diet, clinic visit Day 2 for check (remove gauze, assess healing)</li>
                <li><strong>Days 4-7:</strong> Reducing swelling/pain, soft diet, light activities (short walks OK)</li>
                <li><strong>Day 7-10:</strong> Suture removal appointment, prosthesis adjustment if needed, final photos/documentation</li>
                <li><strong>Day 10-14:</strong> Final check-up, clearance to fly, soft diet instructions for home</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Virtual follow-up after returning home:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Week 2-3:</strong> Video call to check healing, answer questions, review oral hygiene</li>
                <li><strong>Month 1-2:</strong> Photo submission (healing assessment, soft tissue maturation)</li>
                <li><strong>Month 3-6:</strong> Return to India for permanent prosthesis fitting (7-10 day trip, takes impressions, fits final zirconia bridge)</li>
                <li><strong>Optional:</strong> Send impressions by mail (dental courier service), permanent bridge shipped to home country dentist for fitting</li>
              </ul>
              <p className="text-gray-700"><strong>Bottom line:</strong> Minimum 7 days in India (adequate for most). Optimal 10-14 days for best experience. If flying Day 5-7, expect some discomfort but safe. Pack soft foods, pain medication, and compression stockings for flight.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">How do I care for and maintain All-on-4 implants long-term?</h3>
              <p className="mb-3 text-gray-700">
                <strong>Daily cleaning ESSENTIAL (like natural teeth). Brush 2x daily, floss under bridge 1x daily, professional cleaning every 6 months.</strong> Proper care extends lifespan 15-20+ years.
              </p>
              <p className="mb-3 text-gray-700"><strong>Daily oral hygiene routine (10 minutes):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Brushing (2x daily):</strong> Use soft-bristle toothbrush or electric brush (Oral-B/Philips Sonicare recommended). Brush all surfaces of prosthesis (inside, outside, chewing surface). Focus on gumline where prosthesis meets gums (plaque accumulates here).</li>
                <li><strong>Water flosser (1x daily):</strong> Waterpik or similar. ESSENTIAL for cleaning under bridge where food traps. Set medium pressure, angle nozzle 45° to gumline, flush under entire bridge 2-3 minutes.</li>
                <li><strong>Interdental brushes (1x daily):</strong> Tiny brushes that fit under bridge. Size 0.6-0.7mm works for All-on-4. Gently scrub under bridge from front to back, both sides.</li>
                <li><strong>Antimicrobial mouthwash (2x daily):</strong> Chlorhexidine 0.12% or Listerine. Swish 30 seconds, spit (do NOT rinse after). Reduces bacteria 60-70%.</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Professional maintenance (every 6 months):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Professional cleaning:</strong> Hygienist removes calculus/tartar buildup under bridge using special plastic scalers (metal tools can scratch implant surface)</li>
                <li><strong>X-ray check (annual):</strong> Panoramic X-ray to assess bone levels around implants. Normal: &lt;0.2mm bone loss per year. Warning sign: &gt;2mm loss indicates peri-implantitis</li>
                <li><strong>Prosthesis inspection:</strong> Check for cracks, chips, loose screws. Tighten abutment screws if needed (prevents screw fracture)</li>
                <li><strong>Bite adjustment:</strong> Minor occlusion refinement if uneven wear pattern develops</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Foods to avoid lifetime (can damage prosthesis):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Extremely hard:</strong> Ice cubes, hard candy, popcorn kernels, hard nuts (can crack zirconia prosthesis - $2,000-3,000 repair)</li>
                <li><strong>Very sticky:</strong> Chewing gum, taffy, caramel (can loosen prosthesis screws over time)</li>
                <li><strong>Biting non-food items:</strong> Pen caps, fingernails, bottle caps (stress implants unevenly)</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Warning signs needing immediate dentist visit:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Bleeding gums:</strong> Persistent bleeding when brushing (sign of peri-implant mucositis - inflammation around implant)</li>
                <li><strong>Bad breath/taste:</strong> Persistent despite good hygiene (may indicate infection/food trap under bridge)</li>
                <li><strong>Looseness:</strong> Bridge feels mobile or wobbly (screw loosening or implant integration issue)</li>
                <li><strong>Pain/discomfort:</strong> New pain around implant (should be painless after healing - may indicate peri-implantitis)</li>
                <li><strong>Cracks/chips:</strong> Any visible damage to prosthesis (repair before worsens)</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Expected prosthesis lifespan:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Implants:</strong> Lifetime (98% still functioning at 20 years with proper care)</li>
                <li><strong>Zirconia prosthesis:</strong> 10-15 years average (may need replacement due to wear, not implant failure)</li>
                <li><strong>Acrylic prosthesis:</strong> 5-7 years (temporary option, less durable than zirconia)</li>
              </ul>
              <p className="text-gray-700"><strong>Bottom line:</strong> All-on-4 requires commitment to daily cleaning (10 min/day) + professional care (every 6 months). Good hygiene = 15-20+ year lifespan. Poor hygiene = peri-implantitis risk (bone loss around implants) within 5-10 years. Invest in Waterpik ($60-100) and interdental brushes ($10-15) - essential tools.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">What if I don&apos;t have enough bone? Do I need bone grafting?</h3>
              <p className="mb-3 text-gray-700">
                <strong>All-on-4 designed to AVOID bone grafting in 80% of cases. Angled posterior implants bypass areas with low bone. Zygomatic implants available if severe bone loss.</strong>
              </p>
              <p className="mb-3 text-gray-700"><strong>How All-on-4 avoids bone grafting:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Anterior implants (front 2):</strong> Placed vertically in front of mouth where bone typically denser (even after tooth loss for years)</li>
                <li><strong>Posterior implants (back 2):</strong> Angled 30-45° to bypass sinus cavity (upper jaw) or inferior alveolar nerve (lower jaw). Engages thicker bone posteriorly.</li>
                <li><strong>Increased implant-to-bone contact:</strong> Angling increases surface area contact with bone by 30-40% vs vertical implants, providing better stability</li>
                <li><strong>Immediate loading:</strong> Prosthesis connects all 4 implants into rigid structure, distributing forces evenly (splinting effect)</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Bone assessment (3D CT scan required):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Adequate bone:</strong> Minimum 10mm height × 5mm width at implant sites. 80% of patients meet this (All-on-4 suitable, no grafting)</li>
                <li><strong>Moderate bone loss:</strong> 7-9mm height available. May need short implants (7-8mm) or slight angle modification. Still no grafting needed (success rate 96-98%)</li>
                <li><strong>Severe bone loss:</strong> &lt;7mm height or &lt;4mm width. Only 10-15% of patients. Options: Zygomatic implants (no graft) or bone grafting + delayed implants</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Zygomatic implants (for severe upper jaw bone loss):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>What are they:</strong> Extra-long implants (30-55mm) anchored in cheekbone (zygomatic bone) instead of maxilla. Bypasses atrophied jaw bone completely.</li>
                <li><strong>When needed:</strong> Severe maxillary atrophy (upper jaw bone loss after denture wear for 10+ years, maxillary sinus pneumatization)</li>
                <li><strong>Procedure:</strong> 2 standard implants (front) + 2 zygomatic implants (back) = Quad Zygoma. Same-day teeth possible. No bone grafting required.</li>
                <li><strong>Cost:</strong> $6,000-8,000 (vs $4,000-6,000 standard All-on-4). Extra $2,000 for specialized implants/expertise</li>
                <li><strong>Success rate:</strong> 95-98% at 10 years. Slightly more complex surgery (4-5 hours vs 2-3 hours), but excellent outcomes</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Bone grafting option (if patient prefers over zygomatic):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Sinus lift (upper jaw):</strong> Raises sinus membrane, fills space with bone graft material. Healing 6-9 months before implant placement. Cost: +$1,500-2,500</li>
                <li><strong>Ridge augmentation (lower jaw):</strong> Adds bone graft to widen/heighten jaw ridge. Healing 4-6 months. Cost: +$1,000-2,000</li>
                <li><strong>Downside:</strong> Delays treatment 4-9 months, requires second surgery for implant placement, no immediate teeth, higher cost</li>
                <li><strong>Advantage:</strong> Some patients prefer standard implants over zygomatic (less invasive, more familiar technique)</li>
              </ul>
              <p className="mb-3 text-gray-700"><strong>Lower jaw bone loss:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li><strong>Less common:</strong> Lower jaw (mandible) retains bone better than upper jaw (maxilla) after tooth loss</li>
                <li><strong>Solution:</strong> All-on-4 works in 95% of lower jaw cases, even with moderate bone loss. Angle implants to avoid nerve, use shorter/wider implants</li>
                <li><strong>Rare extreme cases:</strong> Block bone graft (from hip/chin) if severe atrophy. Adds 6-9 months healing, +$2,500-4,000 cost</li>
              </ul>
              <p className="text-gray-700"><strong>Bottom line:</strong> 3D CT scan pre-op determines bone availability. 80% have enough bone (standard All-on-4, no grafting). 10-15% need zygomatic implants (same-day teeth, no grafting, +$2,000). Only 5% truly need bone grafting (can opt for this or zygomatic). Discuss options during consultation after CT scan review.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      
      {/* Testimonials Section */}
      <Testimonials
        testimonials={TREATMENT_TESTIMONIALS['dental']}
        title="Success Stories from Our All On 4 Dental Implants Patients"
        subtitle="Real transformations from GCC patients who achieved life-changing results"
      />

      {/* Trust Badges Section */}
      <TrustBadges />

      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">Ready to Get Started?</h2>
          <p className="mb-8 text-xl text-primary-50">Get your personalized treatment plan today</p>
          <Button asChild size="lg" className="bg-accent-500 text-lg hover:bg-accent-600">
            <Link href="/consultation">Get Free Consultation<ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-8">
        <SocialShare title="All-on-4 Dental Implants India: Cost, Best Dentists 2025" description="All-on-4 dental implants in India cost $4,000-6,000 vs $20,000-30,000 in USA (80% savings). Full arch restoration in one day. Nobel Biocare, Straumann implants." />
      </div>
      <div className="container mx-auto max-w-6xl px-4 pb-12">
        <RelatedArticles articles={RELATED_ARTICLES} />
      </div>
      <div className="container mx-auto max-w-6xl px-4 pb-12">
        <InternalLinks variant="compact" />
      </div>
    </div>
  );
}

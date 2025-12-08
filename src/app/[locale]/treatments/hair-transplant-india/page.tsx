import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { Testimonials, TREATMENT_TESTIMONIALS } from '@/components/testimonials/testimonials';
import { TrustBadges } from '@/components/trust-badges/trust-badges';
import { PricingGuarantee } from '@/components/pricing-guarantee/pricing-guarantee';

export const metadata: Metadata = {
  title: 'Hair Transplant in India 2025: Cost, Best Clinics, Success Rate | FUE & FUT',
  description: 'Complete guide to hair transplant in India. Compare FUE and FUT costs ($800-2,500), top clinics, 95% success rate, and save 70-80% vs USA. Free consultation.',
  keywords: [
    'hair transplant india',
    'hair transplant cost india',
    'FUE hair transplant india',
    'FUT hair transplant india',
    'best hair transplant india',
    'hair transplant clinics india',
    'hair transplant delhi',
    'hair transplant mumbai',
    'hair transplant cost',
    'زراعة الشعر في الهند',
    'تكلفة زراعة الشعر في الهند',
    'أفضل عيادات زراعة الشعر في الهند',
    'زراعة الشعر FUE في الهند'
  ],
};

export const dynamic = 'force-dynamic';

export default function HairTransplantIndiaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Hair Transplant in India: Complete Guide 2025</h1>
        <p className="text-xl text-gray-700 mb-6">
          Get natural-looking hair restoration in India at 70-80% lower cost than USA/UK. FUE & FUT procedures from $800-2,500 with 95%+ success rate at world-class clinics.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/consultation">
            <Button size="lg" className="w-full sm:w-auto">
              Get Free Consultation
            </Button>
          </Link>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              WhatsApp Us
            </Button>
          </a>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="mb-12">
        <div className="grid gap-6 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary-600">$800-2,500</div>
              <p className="text-sm text-gray-600">FUE/FUT Cost</p>
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
              <p className="text-sm text-gray-600">Cost Savings vs USA</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary-600">7-10 days</div>
              <p className="text-sm text-gray-600">Recovery Time</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Hair Transplant Cost: India vs USA vs UK vs UAE</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Procedure Type</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">India</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">USA</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">UK</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">UAE</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">FUE (1,000 grafts)</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">$800 - $1,200</td>
                <td className="border border-gray-300 px-4 py-3">$4,000 - $6,000</td>
                <td className="border border-gray-300 px-4 py-3">$3,500 - $5,500</td>
                <td className="border border-gray-300 px-4 py-3">$3,000 - $4,500</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold">75-80%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">FUE (2,000 grafts)</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">$1,200 - $1,800</td>
                <td className="border border-gray-300 px-4 py-3">$7,000 - $10,000</td>
                <td className="border border-gray-300 px-4 py-3">$6,500 - $9,500</td>
                <td className="border border-gray-300 px-4 py-3">$5,500 - $8,000</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold">75-82%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">FUE (3,000+ grafts)</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">$1,800 - $2,500</td>
                <td className="border border-gray-300 px-4 py-3">$10,000 - $15,000</td>
                <td className="border border-gray-300 px-4 py-3">$9,000 - $13,000</td>
                <td className="border border-gray-300 px-4 py-3">$7,500 - $11,000</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold">77-83%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">FUT Strip Method</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">$1,000 - $1,500</td>
                <td className="border border-gray-300 px-4 py-3">$5,000 - $8,000</td>
                <td className="border border-gray-300 px-4 py-3">$4,500 - $7,000</td>
                <td className="border border-gray-300 px-4 py-3">$4,000 - $6,500</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold">73-80%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">DHI (Direct Hair Implantation)</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">$2,000 - $3,000</td>
                <td className="border border-gray-300 px-4 py-3">$12,000 - $18,000</td>
                <td className="border border-gray-300 px-4 py-3">$10,000 - $15,000</td>
                <td className="border border-gray-300 px-4 py-3">$8,000 - $12,000</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold">75-83%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Beard/Mustache Transplant</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">$600 - $1,000</td>
                <td className="border border-gray-300 px-4 py-3">$3,000 - $5,000</td>
                <td className="border border-gray-300 px-4 py-3">$2,500 - $4,500</td>
                <td className="border border-gray-300 px-4 py-3">$2,000 - $3,500</td>
                <td className="border border-gray-300 px-4 py-3 font-semibold">70-80%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          <strong>Note:</strong> Costs include consultation, local anesthesia, grafts extraction/implantation, medications, and 1-year follow-up. PRP therapy add-on: $100-200 per session.
        </p>
      </section>

      {/* What's Included */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">What&apos;s Included in Hair Transplant Package?</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>✅ Pre-Procedure (Day 1)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Consultation with hair transplant surgeon</li>
                <li>Scalp analysis & hairline design</li>
                <li>Blood tests (CBC, HbsAg, HIV screening)</li>
                <li>Graft count estimation</li>
                <li>Pre-op photos and documentation</li>
                <li>Treatment plan and cost breakdown</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>✅ Procedure Day (6-8 hours)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Local anesthesia (painless procedure)</li>
                <li>Donor area extraction (FUE/FUT method)</li>
                <li>Graft preparation under microscope</li>
                <li>Recipient site creation & implantation</li>
                <li>Post-op bandaging & care instructions</li>
                <li>Medications (antibiotics, pain relief)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>✅ Post-Procedure Care</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>First hair wash at clinic (Day 2)</li>
                <li>Daily follow-up calls (Week 1)</li>
                <li>Weekly check-ups (Month 1)</li>
                <li>Monthly progress photos (6 months)</li>
                <li>PRP therapy sessions (optional, $100-200)</li>
                <li>1-year unlimited follow-up consultations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>✅ Additional Services</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Airport pickup & drop (complimentary)</li>
                <li>Hotel booking assistance</li>
                <li>Medical visa invitation letter</li>
                <li>Post-op care kit (shampoo, lotion, spray)</li>
                <li>Lifetime email/WhatsApp support</li>
                <li>Virtual follow-ups after returning home</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FUE vs FUT Comparison */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">FUE vs FUT: Which Hair Transplant Method is Best?</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Factor</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">FUE (Follicular Unit Extraction)</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">FUT (Follicular Unit Transplant)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Technique</td>
                <td className="border border-gray-300 px-4 py-3">Individual follicles extracted with micro-punch</td>
                <td className="border border-gray-300 px-4 py-3">Strip of scalp removed, dissected into grafts</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold">Scarring</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Minimal dot scars (invisible)</td>
                <td className="border border-gray-300 px-4 py-3 text-orange-600">⚠️ Linear scar on donor area</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Pain Level</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Less pain (1-2/10)</td>
                <td className="border border-gray-300 px-4 py-3 text-orange-600">⚠️ Moderate pain (3-4/10)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold">Recovery Time</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">✅ 7-10 days</td>
                <td className="border border-gray-300 px-4 py-3 text-orange-600">⚠️ 10-14 days</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Procedure Time</td>
                <td className="border border-gray-300 px-4 py-3">6-8 hours</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">✅ 4-6 hours (faster)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold">Max Grafts</td>
                <td className="border border-gray-300 px-4 py-3">3,000-4,000 grafts per session</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">✅ 4,000-5,000 grafts (more)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Cost (India)</td>
                <td className="border border-gray-300 px-4 py-3">$800-2,500</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">✅ $1,000-1,500 (cheaper)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold">Success Rate</td>
                <td className="border border-gray-300 px-4 py-3">95-98%</td>
                <td className="border border-gray-300 px-4 py-3">95-98%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Best For</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Short hair, active lifestyle, no visible scar</td>
                <td className="border border-gray-300 px-4 py-3">Large bald areas, budget-conscious, long hair</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 p-6 bg-primary-50 rounded-lg border border-primary-200">
          <h3 className="text-xl font-bold mb-3">💡 Recommendation:</h3>
          <p className="text-gray-700 mb-2">
            <strong>Choose FUE if:</strong> You want minimal scarring, keep short hair, active sports, willing to pay 20-30% more for convenience.
          </p>
          <p className="text-gray-700">
            <strong>Choose FUT if:</strong> You need maximum grafts (4,000+), budget-conscious, keep longer hair that covers donor scar.
          </p>
        </div>
      </section>

      {/* Top 5 Clinics */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Top 5 Hair Transplant Clinics in India</h2>
        <div className="space-y-6">
          <Card className="border-primary-200 bg-primary-50">
            <CardHeader>
              <CardTitle className="text-2xl">1. Eugenix Hair Sciences (Delhi & Mumbai)</CardTitle>
              <p className="text-sm text-gray-600">🏆 #1 Hair Transplant Clinic in India | 15,000+ Successful Procedures</p>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="mb-2"><strong>Specialty:</strong> FUE, FUT, Body Hair Transplant, Eyebrow/Beard Transplant</p>
                <p className="mb-2"><strong>Success Rate:</strong> 98% graft survival, 95% patient satisfaction</p>
                <p className="mb-2"><strong>Key Doctors:</strong> Dr. Pradeep Sethi (20+ years, trained in USA), Dr. Arika Bansal (FUE specialist)</p>
                <p className="mb-2"><strong>Technology:</strong> Advanced FUE micro-punch (0.6-0.8mm), DHI Choi Implanter, Sapphire FUE</p>
                <p className="mb-2"><strong>Cost:</strong> FUE 2,000 grafts: $1,500-1,800 | FUT: $1,200-1,500</p>
                <p><strong>Why Choose:</strong> India&apos;s most awarded clinic. International standard procedures. 1-year guarantee on graft survival.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">2. DHI India (Delhi, Mumbai, Bangalore, Hyderabad)</CardTitle>
              <p className="text-sm text-gray-600">🏆 Global DHI Network | 50,000+ Procedures Worldwide</p>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="mb-2"><strong>Specialty:</strong> DHI (Direct Hair Implantation) exclusive method</p>
                <p className="mb-2"><strong>Success Rate:</strong> 97% graft survival with DHI method</p>
                <p className="mb-2"><strong>Key Doctors:</strong> Team of 15+ certified DHI surgeons (Greece training)</p>
                <p className="mb-2"><strong>Technology:</strong> Patented DHI Implanter (45-degree angle, no channel creation)</p>
                <p className="mb-2"><strong>Cost:</strong> DHI 2,000 grafts: $2,200-2,800 (premium pricing for DHI method)</p>
                <p><strong>Why Choose:</strong> Best for maximum density and natural hairline. Faster recovery. International DHI protocol.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">3. AK Clinics (Delhi & Ludhiana)</CardTitle>
              <p className="text-sm text-gray-600">🏆 Pioneer of FUE in North India | 12,000+ Happy Patients</p>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="mb-2"><strong>Specialty:</strong> Advanced FUE, Sapphire FUE, Body Hair to Scalp Transplant</p>
                <p className="mb-2"><strong>Success Rate:</strong> 96% graft survival, specializes in Norwood Scale 5-7 (advanced baldness)</p>
                <p className="mb-2"><strong>Key Doctors:</strong> Dr. Kapil Dua (India&apos;s FUE pioneer, ISHRS member, 15+ years)</p>
                <p className="mb-2"><strong>Technology:</strong> Sapphire blades (less trauma), ice-cold graft preservation, PRP integration</p>
                <p className="mb-2"><strong>Cost:</strong> FUE 2,000 grafts: $1,300-1,600 | Sapphire FUE: +$200</p>
                <p><strong>Why Choose:</strong> Excellent for extensive hair loss. Body hair donor option. Affordable premium quality.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">4. Dermaclinix (Delhi)</CardTitle>
              <p className="text-sm text-gray-600">🏆 Best Value for Money | 8,000+ Procedures</p>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="mb-2"><strong>Specialty:</strong> FUE, FUT, Female Hair Transplant, Eyebrow Restoration</p>
                <p className="mb-2"><strong>Success Rate:</strong> 94% graft survival, 92% patient return rate</p>
                <p className="mb-2"><strong>Key Doctors:</strong> Dr. Kavish Chouhan (MD Dermatology, 10+ years hair transplant)</p>
                <p className="mb-2"><strong>Technology:</strong> Standard FUE punch, FUT strip method, PRP therapy</p>
                <p className="mb-2"><strong>Cost:</strong> FUE 2,000 grafts: $1,000-1,300 (30% cheaper than premium clinics)</p>
                <p><strong>Why Choose:</strong> Best for budget-conscious patients. Good quality at lower price. Excellent female hair transplant.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">5. Rejuvenate Hair Transplant Centre (Mumbai)</CardTitle>
              <p className="text-sm text-gray-600">🏆 Mumbai&apos;s Premier Clinic | 10,000+ International Patients</p>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="mb-2"><strong>Specialty:</strong> FUE, Robotic Hair Transplant (ARTAS), Beard Design</p>
                <p className="mb-2"><strong>Success Rate:</strong> 97% graft survival, 60% GCC patients</p>
                <p className="mb-2"><strong>Key Doctors:</strong> Dr. Sanjay Parashar (20+ years, UK & USA trained)</p>
                <p className="mb-2"><strong>Technology:</strong> ARTAS Robotic System (precision FUE), Advanced imaging, No-shave FUE option</p>
                <p className="mb-2"><strong>Cost:</strong> FUE 2,000 grafts: $1,600-2,000 | Robotic: $2,500-3,000</p>
                <p><strong>Why Choose:</strong> Best technology in India. Robotic precision. Excellent for GCC patients (Arabic coordinators).</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Hair Transplant Recovery Timeline</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Day 1-3: Immediate Post-Op</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Mild swelling on forehead and donor area (normal)</li>
                <li>Sleep with head elevated 45 degrees (2-3 pillows)</li>
                <li>No touching transplanted area</li>
                <li>Take prescribed antibiotics and pain relievers</li>
                <li>First hair wash at clinic (Day 2)</li>
                <li>Can return to hotel/home same day</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Day 4-7: Early Healing</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Scabs forming on recipient area (do NOT pick them)</li>
                <li>Daily gentle hair washing allowed (baby shampoo)</li>
                <li>Swelling subsides by Day 5-7</li>
                <li>Can fly home after Day 7 (surgeon clearance)</li>
                <li>Return to light desk work (avoid heavy physical activity)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Week 2-4: Shock Loss Phase</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Scabs fully shed by Week 2 (natural process)</li>
                <li>Transplanted hair falls out (NORMAL - shock loss)</li>
                <li>Follicles remain intact and will regrow</li>
                <li>Can resume normal activities (no heavy lifting)</li>
                <li>Can wear loose hat if needed (not tight caps)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Month 2-4: Dormant Phase</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>No visible hair growth (follicles resting)</li>
                <li>New hair growth starts end of Month 3</li>
                <li>PRP sessions recommended (Month 3, optional)</li>
                <li>Can resume all activities including exercise, swimming</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Month 4-8: Active Growth Phase</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>New hair growth visible (thin, wispy initially)</li>
                <li>50-60% hair growth by Month 6</li>
                <li>Hair thickens and becomes more natural</li>
                <li>Can cut and style new hair</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary-200 bg-primary-50">
            <CardHeader>
              <CardTitle>Month 9-12: Final Results</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>80-90% full growth by Month 9-10</strong></li>
                <li><strong>100% final results by Month 12-18</strong></li>
                <li>Hair density maximized</li>
                <li>Natural appearance fully achieved</li>
                <li>Permanent hair (will NOT fall out)</li>
                <li>Can undergo second session if needed (rare)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={[
        { question: "How much does hair transplant cost in India?", answer: "Hair transplant in India costs $800-2,500 depending on grafts and method: FUE 1,000 grafts ($800-1,200), FUE 2,000 grafts ($1,200-1,800), FUE 3,000+ grafts ($1,800-2,500), FUT strip method ($1,000-1,500), DHI method ($2,000-3,000). This is 70-80% cheaper than USA ($4,000-15,000) or UK ($3,500-13,000). Price includes consultation, procedure, medications, and 1-year follow-up." },
        { question: "What is the success rate of hair transplant in India?", answer: "Hair transplant success rate in India is 95-98% at top clinics. Success means: 95%+ grafts survive and grow permanent hair, natural-looking hairline, no visible scarring (FUE), full results visible by Month 12-18. Top clinics like Eugenix (98%), DHI India (97%), AK Clinics (96%) have international-standard success rates matching USA/Europe. Factors affecting success: surgeon experience, proper technique, post-op care compliance." },
        { question: "Is FUE or FUT better for hair transplant?", answer: "FUE is better for most patients: minimal scarring (invisible dots), less pain (1-2/10 vs 3-4/10), faster recovery (7-10 days vs 10-14 days), can keep short hair. FUT is better if: you need maximum grafts (4,000-5,000 vs FUE 3,000-4,000), budget-conscious (30% cheaper), keep long hair that covers linear scar. Both have same 95-98% success rate. 80% of patients choose FUE in India." },
        { question: "How long does hair transplant take to show results?", answer: "Hair transplant results timeline: Month 1-2: Transplanted hair falls (shock loss - NORMAL), Month 3-4: New growth starts (thin hair), Month 6: 50-60% growth visible, Month 9-10: 80-90% full growth, Month 12-18: 100% final results. Hair is permanent and will NOT fall out. Can cut, style, dye after Month 6. Most patients very happy by Month 9. Patience required for full results." },
        { question: "Can I fly home after hair transplant?", answer: "Yes, you can fly home 7-10 days after hair transplant with surgeon clearance. Stay in India: Minimum 7 days (Day 1: consultation, Day 2: procedure, Day 3-7: initial healing, first wash at clinic Day 2). Most international patients stay 8-10 days. Can fly economy class (no restrictions). Wear loose hat during flight (not tight cap). Virtual follow-ups available after returning home." },
        { question: "Is hair transplant in India safe for international patients?", answer: "Yes, hair transplant in India is very safe for international patients at JCI/NABH-accredited clinics. Top clinics follow USA/Europe protocols: sterile procedure rooms, single-use instruments, experienced surgeons (15-20+ years, USA/UK trained), international safety standards. 50,000+ international patients annually undergo hair transplant in India. Complication rate <1% at reputable clinics. Choose clinics with 10+ years experience and 5,000+ procedures performed." },
        { question: "Will transplanted hair fall out again?", answer: "No, transplanted hair is PERMANENT and will NOT fall out. Hair taken from donor area (back/sides of head) is genetically resistant to DHT hormone (causes baldness). This hair retains same property when transplanted to bald area. Grows for lifetime just like original donor hair. Can cut, style, dye normally. Original (non-transplanted) hair may continue thinning - some patients need Finasteride medication to prevent further loss." },
        { question: "How many grafts do I need for hair transplant?", answer: "Grafts needed depend on baldness level (Norwood Scale): Norwood 2-3 (receding hairline): 1,000-1,500 grafts, Norwood 4 (front + crown thinning): 2,000-2,500 grafts, Norwood 5-6 (large bald area): 3,000-4,000 grafts, Norwood 7 (extensive baldness): 4,000-5,000+ grafts (may need 2 sessions). Average patient needs 2,000-2,500 grafts. Consultation includes scalp analysis and precise graft count. One graft = 1-4 hairs (average 2 hairs/graft)." }
      ]} />

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>What causes hair loss and who is a good candidate?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3">
                <strong>Common causes:</strong> Male pattern baldness (90% of cases, genetic DHT sensitivity), female pattern thinning, trauma/burns, over-plucked eyebrows/beard.
              </p>
              <p>
                <strong>Good candidates:</strong> Age 25+ (hair loss pattern stabilized), sufficient donor hair on back/sides, realistic expectations, healthy scalp (no active infections), non-smoker (or willing to quit 2 weeks before/after). Free scalp analysis determines candidacy (95% of people qualify).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Does hair transplant hurt? What about anesthesia?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3">
                <strong>During procedure:</strong> Completely painless. Local anesthesia injections cause mild pinch (2-3/10 pain for 10 seconds), then 100% numb for 6-8 hours. You are awake, can watch movies, use phone, eat lunch during procedure. No general anesthesia needed.
              </p>
              <p>
                <strong>After procedure:</strong> Mild soreness for 2-3 days (manageable with paracetamol). FUE less painful than FUT. Most patients rate post-op pain 1-2/10. Sleeping propped up helps reduce swelling and discomfort.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Can women get hair transplant? What about beard/eyebrow transplant?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3">
                <strong>Female hair transplant:</strong> Yes! 20% of hair transplant patients are women. Best for: frontal hairline restoration, widening part line, temple filling, traction alopecia (tight hairstyles). Dermaclinix and Eugenix specialize in female hair transplant. Same FUE technique, excellent natural results.
              </p>
              <p>
                <strong>Beard/Mustache/Eyebrow transplant:</strong> Very popular in GCC countries. Beard transplant: $600-1,000 (1,000-2,000 grafts), Eyebrow: $500-800 (200-400 grafts), Mustache: $400-600. Same permanent results. Natural growth and styling possible.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What if I don&apos;t have enough donor hair on my head?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Body Hair Transplant (BHT):</strong> If scalp donor area insufficient (advanced baldness Norwood 6-7), hair can be extracted from chest, beard, arms, legs, or back. AK Clinics and Eugenix specialize in BHT. Body hair is slightly different texture but blends well when mixed with scalp hair. Success rate: 85-90% (slightly lower than scalp donor). Best combined with scalp grafts for optimal results. Adds 1,000-2,000 extra grafts.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What is the minimum age for hair transplant?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Recommended minimum age: 25 years.</strong> Hair loss pattern must be stabilized before transplant. Younger patients (under 25) still experiencing hair loss - transplanted area stays but surrounding areas may thin. Exceptions: trauma/burn victims (any age), stable baldness documented 2+ years. Most surgeons prefer 28-30+ for best long-term results. Free consultation determines candidacy regardless of age.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How much does hair transplant cost per graft?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3">
                <strong>Cost per graft in India: $0.40-$0.80 (₹35-₹65)</strong> vs $3-$8 in USA/UK. Total cost depends on grafts needed:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>1,000 grafts: $400-800</li>
                <li>2,000 grafts: $800-1,600</li>
                <li>3,000 grafts: $1,200-2,400</li>
                <li>4,000+ grafts: $1,600-3,200</li>
              </ul>
              <p className="mt-3">
                Price includes: surgeon fees, clinic facilities, anesthesia, post-op medications, follow-up consultations. No hidden charges. FUE slightly more expensive than FUT (30% premium for minimal scarring).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Should I quit smoking before hair transplant?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Yes, absolutely quit 2 weeks before and 2 weeks after surgery.</strong> Nicotine restricts blood flow to scalp, reducing graft survival rate from 95-98% to 70-80%. Smokers have 3x higher risk of: poor graft survival, infection, delayed healing, shock loss. Some clinics refuse surgery if patient continues smoking. E-cigarettes/vaping also prohibited (same nicotine effect). Worth quitting for successful result - you&apos;re investing $1,000-3,000!
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Can I wear hats or caps after hair transplant?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Avoid tight hats for 10-14 days.</strong> Timeline: Days 1-5: NO hats (grafts vulnerable to dislodging), Days 6-10: Loose baseball cap okay (not touching transplanted area), Day 11+: Normal hats allowed. During flying home: wear loose hat (sun protection). Avoid: tight caps, beanies, helmets for 2 weeks. After 2 weeks, resume normal hat wearing. Transplanted grafts fully secure after 10 days.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>When can I wash my hair after hair transplant?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3">
                <strong>First wash at clinic Day 2 post-op</strong> (gentle, supervised). Then:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Days 3-10:</strong> Gentle washing daily (baby shampoo, cup method - no direct spray)</li>
                <li><strong>Days 11-14:</strong> Light shower okay (low pressure, lukewarm water)</li>
                <li><strong>Day 15+:</strong> Normal washing allowed (still avoid hot water)</li>
                <li><strong>Month 1+:</strong> Resume regular hair care routine</li>
              </ul>
              <p className="mt-3">
                Clinic provides special shampoo and detailed washing instructions. Proper washing prevents scabs and infection. Never scratch or pick scabs (let them fall naturally).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>When can I exercise after hair transplant?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3">
                <strong>Exercise timeline:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Walking:</strong> Immediately (helps circulation)</li>
                <li><strong>Light cardio:</strong> 2 weeks (avoid sweating first 10 days)</li>
                <li><strong>Running/jogging:</strong> 3 weeks</li>
                <li><strong>Weight lifting:</strong> 4 weeks (avoid straining/blood pressure spikes)</li>
                <li><strong>Swimming:</strong> 1 month (chlorine irritation risk)</li>
                <li><strong>Contact sports:</strong> 2-3 months (head trauma risk)</li>
              </ul>
              <p className="mt-3">
                Excessive sweating in first 2 weeks can cause infection and graft loss. Patience ensures 95-98% graft survival vs 80-85% if exercising too early.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Can I cut, style, or dye transplanted hair?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Yes! Transplanted hair is 100% natural and grows for life.</strong> Timeline: <strong>Cutting:</strong> 6 weeks (after shock loss phase), <strong>Styling (gel, wax):</strong> 3 months, <strong>Hair dye:</strong> 6 months (avoid harsh chemicals earlier). Can use blow dryer, straightener, curler after 6 months. Get regular haircuts, style as desired. Transplanted hair has same growth rate, texture, and properties as your original donor hair. Treat it like normal hair after first 6 months.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Do I need medication after hair transplant?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3">
                <strong>Post-op medications (7-10 days):</strong> Antibiotics (prevent infection), painkillers (mild discomfort), anti-inflammatory (reduce swelling). All included in package.
              </p>
              <p>
                <strong>Long-term medication (optional but recommended):</strong> <strong>Finasteride 1mg daily</strong> - prevents further hair loss in non-transplanted areas. Stops DHT hormone that causes baldness. 90% of patients maintain existing hair, 65% see new growth. Cost: $5-10/month in India. <strong>Minoxidil 5% topical</strong> - stimulates growth. Optional for better density. Discuss with surgeon during consultation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What is the success rate of hair transplant in India?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Overall success rate: 95-98% graft survival at top clinics.</strong> Eugenix, AK Clinics, DHI India, Dermaclinix all report 95%+ success rates. International standards same as USA/Europe. Factors affecting success: surgeon experience (choose 10+ years), clinic accreditation (JCI/NABH), patient compliance (no smoking, proper aftercare), realistic graft count. Failed grafts (&lt;5%) don&apos;t grow - usually due to patient factors (smoking, infection, poor aftercare). Choose experienced clinic for best results.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Will I need multiple hair transplant sessions?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Depends on baldness severity and goals:</strong> <strong>Single session sufficient:</strong> 80% of patients (Norwood 2-5, need 1,500-3,000 grafts). <strong>Two sessions needed:</strong> Advanced baldness (Norwood 6-7, need 4,000-6,000 total grafts), maximum density desired, large front + crown coverage. <strong>Session spacing:</strong> 9-12 months between sessions (allow full healing and growth assessment). Some patients return after 5-10 years for age-related crown thinning (mini touch-up 500-1,000 grafts).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Will I have visible scars from hair transplant?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>FUE: No visible scars.</strong> Tiny dot scars (0.8-1mm) completely hidden by surrounding hair. Can keep hair very short (buzz cut #1-2) without visible scarring. 99% of patients report no noticeable scarring. <strong>FUT: Linear scar on back of head.</strong> Length: 15-25cm, Width: 1-2mm (expert surgeon). Easily hidden by shoulder-length or longer hair. Visible only if you shave head completely bald. Scar fades to thin white line after 12 months. Choose FUE if you prefer short hair.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>When can I return to work after hair transplant?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Most patients return to work in 7-10 days.</strong> Timeline by job type: <strong>Office/desk job:</strong> 7 days (wear loose hat if desired), <strong>Physical labor:</strong> 10-14 days (avoid heavy lifting, sweating), <strong>Customer-facing roles:</strong> 10-14 days (redness fades, look presentable), <strong>Outdoor work:</strong> 2 weeks (sun exposure, dust risk). Work from home option: 3-5 days. Transplanted area has small scabs (look like dandruff) for first 10 days - easily concealed with hat. Plan accordingly for international patients.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials
        testimonials={TREATMENT_TESTIMONIALS['hair-transplant']}
        title="Success Stories from Our Hair Transplant Patients"
        subtitle="Real transformations from GCC patients who regained their confidence"
      />

      {/* Pricing Guarantee - Transparent Pricing */}
      <PricingGuarantee locale="en" />

      {/* Trust Badges Section */}
      <TrustBadges />

      {/* CTA Section */}
      <Card className="mb-12 border-primary-200 bg-primary-50">
        <CardContent className="pt-6">
          <h2 className="mb-4 text-2xl font-bold">Ready to Restore Your Hair?</h2>
          <p className="mb-6 text-gray-700">
            Get <strong>FREE consultation</strong> with India&apos;s top hair transplant surgeons. We help 5,000+ international patients annually achieve natural-looking hair restoration at 70-80% lower cost than USA/UK/UAE.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/consultation">
              <Button size="lg" className="w-full sm:w-auto">
                Get Free Consultation
              </Button>
            </Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

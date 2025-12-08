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
  title: 'ACL Reconstruction India: Cost, Best Surgeons 2025',
  description: 'ACL reconstruction in India costs $3,500-5,500 vs $20,000-50,000 in USA (85% savings). Arthroscopic surgery, 95% success rate. Sports medicine experts.',
  keywords: 'acl reconstruction india, acl surgery india, acl surgery cost india, acl repair india, knee surgery india, sports medicine india, arthroscopic surgery india, إعادة بناء الرباط الصليبي في الهند',
};

const RELATED_ARTICLES = [
  { title: "Rhinoplasty India", href: "/treatments/rhinoplasty-india", description: "Nose job $2,500-4,500" },
  { title: "Liposuction India", href: "/treatments/liposuction-india", description: "Body contouring $1,800-3,500" },
  { title: "Hair Transplant India", href: "/treatments/hair-transplant-india", description: "FUE/FUT from $800" }
];

export default function AclReconstructionIndiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-wh
      {/* Breadcrumb Schema for SEO */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://shifaalhind.onrender.com' },
        { name: 'Treatments', url: 'https://shifaalhind.onrender.com/treatments' },
        { name: 'ACL Reconstruction in India', url: 'https://shifaalhind.onrender.com/treatments/acl-reconstruction-india' }
      ]} />

      {/* Medical Procedure Schema for SEO */}
      <MedicalProcedureSchema
        name="ACL Reconstruction Surgery"
        description="ACL reconstruction repairs torn anterior cruciate ligament using graft tissue to restore knee stability."
        procedureType="SurgicalProcedure"
        bodyLocation="Knee Joint"
        
        
        url="https://shifaalhind.onrender.com/treatments/acl-reconstruction-india"
      />
ite">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              ACL Reconstruction in India
            </h1>
            <p className="mb-6 text-xl text-primary-50 md:text-2xl">
              Return to Sports with World-Class Knee Surgery
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <DollarSign className="h-6 w-6" />
                <span className="text-lg font-semibold">$3,500 - $5,500</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6" />
                <span className="text-lg font-semibold">1-2 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6" />
                <span className="text-lg font-semibold">95% success</span>
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
                    <td className="px-6 py-4 font-medium text-gray-900">Hamstring Autograft ACL</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$3,500 - $4,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">$20,000 - $35,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£16,500 - £29,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 73,000 - 129,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Patellar Tendon Autograft</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$3,800 - $4,800</td>
                    <td className="px-6 py-4 text-center text-gray-600">$22,000 - $38,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£18,000 - £31,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 81,000 - 140,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Allograft Reconstruction</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$4,500 - $5,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">$25,000 - $45,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£20,500 - £37,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 92,000 - 165,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Double-Bundle ACL</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$5,000 - $6,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$30,000 - $50,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£25,000 - £41,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 110,000 - 184,000</td>
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
                  <h3 className="text-xl font-bold text-gray-900">Fortis Hospital</h3>
                  <p className="text-sm text-gray-500">Delhi NCR, Mumbai</p>
                </div>
                <div className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-800">#1 Choice</div>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.9 (580+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 8,500+ orthopedic surgeries annually</li>
                <li>• Sports medicine specialists, Mako robotic system</li>
                <li>• Dr. Ramakant Kumar - 25+ years experience</li>
                <li>• JCI accredited, FIFA Medical Centre</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $3,800</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Apollo Hospitals</h3>
                  <p className="text-sm text-gray-500">Chennai, Bangalore, Hyderabad</p>
                </div>
                
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.9 (720+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 12,000+ knee surgeries/year</li>
                <li>• Arthroscopic ACL specialists</li>
                <li>• 50+ orthopedic surgeons, fellowship-trained</li>
                <li>• NABH & JCI accredited</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $3,500</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Manipal Hospitals</h3>
                  <p className="text-sm text-gray-500">Bangalore, Delhi</p>
                </div>
                
              </div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /><Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">4.8 (450+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 6,000+ sports medicine procedures</li>
                <li>• Dedicated sports injury center</li>
                <li>• Team doctors for IPL cricket teams</li>
                <li>• ISO 9001:2015 certified</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">From $4,000</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={[{"question":"How much does ACL reconstruction cost in India?","answer":"ACL reconstruction costs $3,500-5,500 in India (hamstring graft $3,500-4,500, patellar tendon $3,800-4,800, allograft $4,500-5,500) vs $20,000-50,000 in USA. Includes surgery, anesthesia, hospital stay, brace, and 6-month physiotherapy program."},{"question":"What is success rate of ACL surgery in India?","answer":"ACL surgery success rate is 95-98% at top hospitals. 90% of athletes return to pre-injury sports level within 9-12 months. Re-tear rate is less than 5% with proper rehabilitation. Return to play protocols strictly followed."},{"question":"How long is ACL recovery?","answer":"Recovery timeline: Month 1 (full weight bearing with brace), Month 3 (light jogging possible), Month 6 (sport-specific training begins), Month 9-12 (clearance for competitive sports). Physical therapy 3-5 times per week for first 3 months."},{"question":"Which ACL graft is best?","answer":"Hamstring autograft is most popular (70% of cases) - faster recovery, less pain. Patellar tendon offers strongest fixation - best for high-level athletes. Allograft (donor tissue) - no harvest site pain, faster surgery. Choice depends on age, activity level, surgeon preference."}]} />

      {/* FAQ Section */}
      <section className="container mx-auto max-w-4xl px-4 py-16">
        <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">How much does ACL reconstruction cost in India?</h3>
              <p className="text-gray-600">ACL reconstruction costs $3,500-5,500 in India (hamstring graft $3,500-4,500, patellar tendon $3,800-4,800, allograft $4,500-5,500) vs $20,000-50,000 in USA. Includes surgery, anesthesia, hospital stay, brace, and 6-month physiotherapy program.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">What is success rate of ACL surgery in India?</h3>
              <p className="text-gray-600">ACL surgery success rate is 95-98% at top hospitals. 90% of athletes return to pre-injury sports level within 9-12 months. Re-tear rate is less than 5% with proper rehabilitation. Return to play protocols strictly followed.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">How long is ACL recovery?</h3>
              <p className="text-gray-600">Recovery timeline: Month 1 (full weight bearing with brace), Month 3 (light jogging possible), Month 6 (sport-specific training begins), Month 9-12 (clearance for competitive sports). Physical therapy 3-5 times per week for first 3 months.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Which ACL graft is best?</h3>
              <p className="text-gray-600">Hamstring autograft is most popular (70% of cases) - faster recovery, less pain. Patellar tendon offers strongest fixation - best for high-level athletes. Allograft (donor tissue) - no harvest site pain, faster surgery. Choice depends on age, activity level, surgeon preference.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">What is the minimum/maximum age for ACL reconstruction?</h3>
              <p className="mb-3 text-gray-600">
                <strong>Treatable age range: 14 years to 65+ years, depending on activity level and health status.</strong> Age-specific considerations:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                <li><strong>Adolescents (14-18 years):</strong> Surgery recommended for active athletes to prevent early arthritis. Use physeal-sparing techniques (avoid growth plate damage) if growth plates still open. Best outcomes in this age group - young knees heal faster, return to sports 90%+.</li>
                <li><strong>Young adults (18-40 years):</strong> Standard ACL reconstruction. Most common age group (70% of ACL tears). Excellent outcomes - 95%+ return to pre-injury activity level. Critical to prevent early knee arthritis (ACL-deficient knee develops arthritis 10-20 years later).</li>
                <li><strong>Middle-aged (40-55 years):</strong> Surgery still beneficial if active lifestyle. Lower sports demands but knee stability still important for daily activities (hiking, gym, stairs). Outcomes excellent if compliant with physiotherapy.</li>
                <li><strong>Older adults (55-65+ years):</strong> Individualized decision. Surgery recommended if: (1) High activity level (still playing sports, running), (2) Knee instability affecting daily life (giving way on stairs, walking). Conservative treatment (brace + physiotherapy) option for low-demand patients. Oldest successful ACL reconstruction: 68 years old at Fortis Hospital (marathon runner, returned to running within 1 year).</li>
              </ul>
              <p className="text-gray-600">
                <strong>Growth plate considerations (adolescents):</strong> If growth plates open (boys &lt;16, girls &lt;14 typically), use all-epiphyseal or partial transphyseal techniques. Standard ACL reconstruction can damage growth plates → leg length discrepancy. Experienced pediatric sports surgeons at Apollo, Fortis handle young athletes routinely.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Does smoking affect ACL graft healing?</h3>
              <p className="mb-3 text-gray-600">
                <strong>Yes, significantly. Smoking delays graft incorporation by 30-40% and doubles re-tear risk. Strongly recommended to quit 4 weeks before surgery.</strong> Impact on healing:
              </p>
              <p className="mb-3 text-gray-600"><strong>How smoking affects ACL graft:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                <li><strong>Graft revascularization (blood vessel ingrowth):</strong> Normally takes 3-6 months. Smoking delays by additional 1-2 months. Graft remains weak longer → higher risk of re-tear during rehab phase.</li>
                <li><strong>Tendon-to-bone healing:</strong> Hamstring/patellar tendon graft must integrate into bone tunnels (biological process). Smoking reduces collagen production 40-50% → weaker fixation. Re-tear risk doubles (5% → 10%) in smokers.</li>
                <li><strong>Inflammation:</strong> Smoking increases inflammatory markers → synovitis (knee joint inflammation) → pain, swelling persist longer (3-6 months vs 1-2 months in non-smokers).</li>
                <li><strong>Infection risk:</strong> Post-op knee infection 3-4× higher in smokers (though overall infection rate low &lt;1%). Infection after ACL = catastrophic outcome (remove graft, salvage procedures).</li>
              </ul>
              <p className="mb-3 text-gray-600"><strong>Quitting timeline benefits:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                <li><strong>Week 1-2 after quitting:</strong> Nicotine levels drop. Blood flow to knee improves 10-15%.</li>
                <li><strong>Week 3-4:</strong> Inflammatory markers decrease. Optimal surgical timing. Graft healing approaches non-smoker rates.</li>
                <li><strong>Month 3-6 post-surgery:</strong> Continue not smoking. Critical graft incorporation phase. Even occasional smoking impairs healing.</li>
              </ul>
              <p className="text-gray-600">
                <strong>Nicotine replacement therapy (NRT):</strong> Patches/gum safer than smoking (no carbon monoxide, tar), but still impair healing 10-20%. Best to quit completely 4 weeks before surgery. Smoking cessation programs available at all top hospitals ($50-100 for 3-month support program).
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Return to sports timeline - when can I play cricket, football, running?</h3>
              <p className="mb-3 text-gray-600">
                <strong>Return to sports depends on ACL graft maturity (9-12 months) and functional testing, not just time. Clearance requires: Quad/hamstring strength 90%+ of uninjured leg, hop tests passed, no knee instability.</strong> Sport-specific timelines:
              </p>
              <p className="mb-3 text-gray-600"><strong>Low-demand sports (light jogging, cycling, swimming):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                <li><strong>Cycling:</strong> Month 2-3 (stationary bike Month 1, outdoor cycling Month 3 when balance better)</li>
                <li><strong>Swimming:</strong> Month 3-4 (excellent rehab - no impact, builds quad strength)</li>
                <li><strong>Light jogging (straight line):</strong> Month 3-4 (on treadmill initially, progress to outdoor)</li>
              </ul>
              <p className="mb-3 text-gray-600"><strong>Medium-demand sports (running, tennis):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                <li><strong>Running (moderate pace):</strong> Month 6 (once hop tests passed, quad strength 80%+)</li>
                <li><strong>Tennis:</strong> Month 9 (requires lateral movements, quick stops - high re-tear risk if return too early)</li>
                <li><strong>Badminton:</strong> Month 9-10 (similar to tennis, lots of pivoting)</li>
              </ul>
              <p className="mb-3 text-gray-600"><strong>High-demand sports (cricket, football, basketball):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                <li><strong>Cricket (bowling):</strong> Month 10-12 (most demanding - requires explosive running, pivoting, deceleration). Batsman: Month 9 (less demanding). Fielding: Month 9-10.</li>
                <li><strong>Football/Soccer:</strong> Month 10-12 (requires cutting, pivoting, contact). Start with light practice Month 9, competitive matches Month 12.</li>
                <li><strong>Basketball:</strong> Month 10-12 (high re-tear risk if return too early - lots of jumping, landing, pivoting)</li>
              </ul>
              <p className="mb-3 text-gray-600"><strong>Functional testing before sports clearance:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                <li><strong>Isokinetic strength testing:</strong> Quad strength must be 90%+ of uninjured leg. Hamstring 90%+ (if hamstring graft used - donor site weakness).</li>
                <li><strong>Hop tests:</strong> Single-leg hop, triple hop, crossover hop. Must achieve 90%+ distance vs uninjured leg.</li>
                <li><strong>Balance/proprioception:</strong> Single-leg stance eyes closed, Y-balance test.</li>
                <li><strong>Return-to-sport protocol:</strong> Gradual progression over 4-6 weeks (agility drills → sport-specific drills → practice → competitive play).</li>
              </ul>
              <p className="text-gray-600">
                <strong>Why waiting full 9-12 months critical:</strong> ACL graft weakest at Month 6-9 (remodeling phase). Re-tear rate if return before Month 9: 15-20%. If wait until Month 12: 3-5%. Career-ending re-tear not worth 2-3 months earlier return.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">When can I walk without crutches after ACL surgery?</h3>
              <p className="mb-3 text-gray-600">
                <strong>Most patients walk without crutches by Week 2-4, depending on pain tolerance and quad muscle control. Brace worn 4-6 weeks.</strong> Timeline:
              </p>
              <p className="mb-3 text-gray-600"><strong>Post-op Day 1-7:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                <li><strong>Day 1 (surgery day):</strong> Start walking same day (weight bearing as tolerated with crutches). Brace locked in extension (straight). Ice, elevation, pain control.</li>
                <li><strong>Day 2-3:</strong> Walk 50-100 meters with crutches 3-4 times daily (hospital hallway or hotel corridor). Quad activation exercises (isometric quad sets - tighten thigh muscle, hold 5 seconds × 20 reps hourly).</li>
                <li><strong>Day 4-7:</strong> Gradually increase walking distance. May bear partial weight without crutches (30-50% body weight if quad control good). Crutches still primary support.</li>
              </ul>
              <p className="mb-3 text-gray-600"><strong>Week 2-4 (crutch weaning):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                <li><strong>Week 2:</strong> Walk with 1 crutch (opposite side) for longer distances. Around house: No crutches if quad control excellent (can do straight leg raise without lag).</li>
                <li><strong>Week 3:</strong> Most patients off crutches completely for indoor walking. Brace still worn (unlocked - allows 0-90 degrees flexion). Use crutches for longer outdoor walks.</li>
                <li><strong>Week 4:</strong> Walk normally without crutches or brace for short distances. Gait training in physiotherapy (correcting limping pattern).</li>
              </ul>
              <p className="mb-3 text-gray-600"><strong>Factors affecting timeline:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                <li><strong>Graft type:</strong> Hamstring graft - walk without crutches Week 2-3 (less pain). Patellar tendon - Week 3-4 (more anterior knee pain initially).</li>
                <li><strong>Quad strength:</strong> Critical. If quad weak (can&apos;t do straight leg raise) → Knee buckles → Need crutches longer. Aggressive quad exercises Day 1 speeds recovery.</li>
                <li><strong>Pain/swelling:</strong> Persistent swelling inhibits quad muscle. Ice 4-6 times daily (20 min each) reduces swelling faster.</li>
                <li><strong>Age:</strong> Younger patients (teens, 20s) walk without crutches Week 2. Older patients (50s+) may need Week 4-6 (slower quad recovery).</li>
              </ul>
              <p className="text-gray-600">
                <strong>Brace usage:</strong> Worn for 4-6 weeks total (protects graft during early healing). Unlocked from Week 2 (allows knee bending for sitting, sleeping). Removed for physiotherapy exercises, showering. Continue wearing for walking until Month 2.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Hamstring vs Patellar Tendon graft - comprehensive comparison for choosing</h3>
              <p className="mb-3 text-gray-600">
                <strong>Both grafts have 95%+ success rate. Choice depends on age, sport, donor site morbidity tolerance.</strong> Detailed comparison:
              </p>
              <table className="min-w-full border-collapse border border-gray-300 mb-3">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Factor</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Hamstring Autograft</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Patellar Tendon (Bone-Tendon-Bone)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Popularity</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">Most common (70% of cases globally)</td>
                    <td className="border border-gray-300 px-4 py-2">30% of cases (preferred by some high-level athletes)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Pain Level</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">Low (pain 3-4/10 post-op, minimal donor site pain)</td>
                    <td className="border border-gray-300 px-4 py-2">Moderate-High (pain 5-7/10, anterior knee pain common for 3-6 months)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Kneeling Pain</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">Rare (&lt;5% have kneeling discomfort)</td>
                    <td className="border border-gray-300 px-4 py-2">Common (20-30% have persistent kneeling pain - major drawback)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Return to Work</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">Desk job: Week 2. Physical labor: Week 6-8.</td>
                    <td className="border border-gray-300 px-4 py-2">Desk job: Week 3-4 (more pain initially). Physical: Week 8-10.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Graft Strength</td>
                    <td className="border border-gray-300 px-4 py-2">4,000-4,500 N (quadrupled semitendinosus + gracilis tendons)</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">5,500-6,000 N (strongest graft - bone blocks in tunnels)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Fixation Strength</td>
                    <td className="border border-gray-300 px-4 py-2">Tendon-to-bone healing (8-12 weeks for full integration)</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">Bone-to-bone healing (6-8 weeks - faster, stronger fixation)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Re-Tear Rate</td>
                    <td className="border border-gray-300 px-4 py-2">4-5% in first 2 years (slightly higher than patellar)</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">3-4% (lowest re-tear rate)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Donor Site Morbidity</td>
                    <td className="border border-gray-300 px-4 py-2">Hamstring weakness (10-15% permanent weakness - affects sprinting)</td>
                    <td className="border border-gray-300 px-4 py-2">Anterior knee pain, kneeling pain (20-30% long-term)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Incision</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">Small (3-4cm vertical incision on inner knee - less visible)</td>
                    <td className="border border-gray-300 px-4 py-2">Larger (5-7cm vertical incision on front of knee - more visible)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Cosmetic Outcome</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">Better (scar hidden on inner knee)</td>
                    <td className="border border-gray-300 px-4 py-2">More visible scar (front of knee)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Best For</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">Most patients, especially those who kneel frequently (prayer, work)</td>
                    <td className="border border-gray-300 px-4 py-2">High-level contact athletes (rugby, football), revision ACL surgery</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Cost</td>
                    <td className="border border-gray-300 px-4 py-2">$3,500-4,500 India</td>
                    <td className="border border-gray-300 px-4 py-2">$3,800-4,800 India (slightly higher due to bone harvesting complexity)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Surgeon Recommendation</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">First choice for 70% of patients (proven track record, less pain)</td>
                    <td className="border border-gray-300 px-4 py-2">Recommended for elite athletes wanting absolute strongest graft</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-gray-600">
                <strong>Bottom line:</strong> Hamstring graft = less pain, faster return to work, better cosmetics. Patellar tendon = slightly stronger, faster healing, but more pain and kneeling issues. For GCC patients (prayer 5 times daily requires kneeling) → Hamstring graft usually better choice.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">When can I fly home after ACL surgery?</h3>
              <p className="mb-3 text-gray-600">
                <strong>Safe to fly 5-7 days after surgery (once cleared by surgeon). Total India stay: 1.5-2 weeks recommended for follow-up and physiotherapy initiation.</strong> Flying considerations:
              </p>
              <p className="mb-3 text-gray-600"><strong>Why early flying is safe after ACL:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                <li><strong>Unlike lung surgery:</strong> No pneumothorax risk. ACL is knee surgery - cabin pressure doesn&apos;t affect knee joint.</li>
                <li><strong>Minimal bleeding risk:</strong> Arthroscopic surgery (3 small incisions) - minimal tissue trauma. Bleeding stops within 24-48 hours.</li>
                <li><strong>Early mobilization encouraged:</strong> Walking Day 1 post-op. No bedrest required. Flying with crutches + brace entirely feasible Week 1.</li>
              </ul>
              <p className="mb-3 text-gray-600"><strong>Recommended India stay timeline:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                <li><strong>Day 0 (surgery):</strong> Arthroscopic ACL reconstruction (1-2 hour surgery). Discharge same day or Day 1 morning (some hospitals keep overnight for observation).</li>
                <li><strong>Day 1-3:</strong> Stay near hospital. Daily physiotherapy sessions (quad activation exercises, ice, elevation). Wound check Day 2. Drain removal if placed (Day 1-2).</li>
                <li><strong>Day 5-7:</strong> Follow-up appointment (X-ray, ensure no complications, physiotherapy progress check). Surgeon clearance for flying.</li>
                <li><strong>Day 7-14:</strong> Optional extended stay for intensive physiotherapy (recommended if going back to GCC with limited physio access). Accelerates recovery significantly.</li>
              </ul>
              <p className="mb-3 text-gray-600"><strong>Flying precautions:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                <li><strong>DVT (blood clot) risk:</strong> Moderate risk after knee surgery. Prevention: (1) Compression stockings worn during flight, (2) Low-dose aspirin 75-100mg daily for 2 weeks post-op (surgeon prescribes), (3) Walk every 60-90 minutes during flight (crutches allowed on plane), (4) Ankle pumps hourly (tighten/relax calf muscles while seated).</li>
                <li><strong>Knee positioning:</strong> Request bulkhead seat or business class (extra legroom - keeps knee straight reduces swelling). Elevate leg on carry-on bag if possible. Ice packs allowed through security (bring frozen gel packs).</li>
                <li><strong>Medications:</strong> Carry pain medications in hand luggage (prescriptions from Indian surgeon). Bring copy of surgical summary (if airport security questions brace, crutches).</li>
                <li><strong>Wheelchair assistance:</strong> Request at both airports (Delhi/Mumbai → Dubai/Riyadh). Navigating long terminals on crutches exhausting Week 1 post-op.</li>
              </ul>
              <p className="mb-3 text-gray-600"><strong>Physiotherapy continuation at home:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                <li><strong>Critical:</strong> ACL rehab success depends 90% on physiotherapy compliance (not surgical technique). Must continue 3-5 times per week in GCC.</li>
                <li><strong>Options:</strong> (1) Physiotherapist in Dubai/Riyadh (surgeon provides detailed protocol), (2) Telemedicine follow-up with Indian physiotherapist (weekly video calls for exercise progression), (3) Return to India for Month 3 and Month 6 checkups (ensure rehab on track).</li>
                <li><strong>Home exercise program:</strong> Surgeon provides detailed protocol (quad sets, ankle pumps, heel slides, straight leg raises). Videos demonstrate proper technique. Progress exercises monthly based on strength milestones.</li>
              </ul>
              <p className="text-gray-600">
                <strong>Hospital support:</strong> All top hospitals coordinate discharge with patient travel plans. Provide medications for 2 weeks, detailed physiotherapy protocol, telemedicine follow-up option. Ensure smooth transition back to GCC.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">What is included in ACL surgery cost? Are there hidden charges?</h3>
              <p className="mb-3 text-gray-600">
                <strong>Quoted price $3,500-5,500 is all-inclusive for surgery and hospital stay. Physiotherapy, medications, brace are additional but affordable ($500-1,000 total).</strong> Complete cost breakdown:
              </p>
              <p className="mb-3 text-gray-600"><strong>Included in surgery package ($3,500-5,500):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                <li><strong>Pre-operative:</strong> Surgeon consultation, MRI review, Pre-anesthesia check-up, Blood tests (CBC, coagulation profile), ECG, Chest X-ray (if age &gt;40).</li>
                <li><strong>Surgery day:</strong> Arthroscopic ACL reconstruction (1-2 hours), Anesthesia (spinal or general - your choice), Operating room charges, Arthroscopic equipment use, ACL graft (hamstring/patellar tendon autograft), Graft fixation devices (screws, buttons - bioabsorbable or titanium).</li>
                <li><strong>Post-operative (Day 0-1):</strong> Recovery room monitoring, Medications (pain relief, antibiotics, anti-inflammatory), Wound dressing, Ice machine (cryotherapy), Hospital room (private/semi-private - typically Day 0 only or overnight if needed).</li>
              </ul>
              <p className="mb-3 text-gray-600"><strong>Additional costs (NOT included in surgery package):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                <li><strong>Knee brace:</strong> $100-200 (hinged post-op brace worn for 4-6 weeks). Essential. Provided by hospital at cost.</li>
                <li><strong>Crutches:</strong> $20-40 (adjustable aluminum crutches). Hospital provides or rent.</li>
                <li><strong>Physiotherapy:</strong> $15-30 per session. Recommended 10-15 sessions in first 4 weeks in India ($150-450 total). Then continue in home country. Some hospitals include 5-7 sessions in package - ask when booking.</li>
                <li><strong>Medications (2-4 weeks supply):</strong> $50-100. Pain relief (Tramadol, Paracetamol), Anti-inflammatory (Ibuprofen), Stomach protection (Pantoprazole), Aspirin (DVT prevention).</li>
                <li><strong>Follow-up X-rays:</strong> $15-30 each. Needed Day 1 post-op, Day 5-7 (pre-departure), Month 6, Month 12. Total $60-120 over 1 year.</li>
              </ul>
              <p className="mb-3 text-gray-600"><strong>Optional costs (enhanced care):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                <li><strong>Double-bundle ACL:</strong> +$1,000-1,500 (more anatomic reconstruction, debated benefit vs standard single-bundle).</li>
                <li><strong>Allograft (donor tissue):</strong> +$800-1,200 (vs autograft - no donor site pain, faster surgery, but slightly higher re-tear risk 6-8% vs 4-5%).</li>
                <li><strong>Meniscus repair (if torn):</strong> +$1,000-1,500 (50% of ACL tears have associated meniscus tear discovered during arthroscopy).</li>
                <li><strong>Cartilage treatment (microfracture/OATS):</strong> +$1,500-2,500 (if cartilage damage found during arthroscopy).</li>
                <li><strong>Extended hospital stay:</strong> $100-150 per additional night (if complications or patient preference).</li>
              </ul>
              <p className="mb-3 text-gray-600"><strong>Total realistic budget for GCC patients:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                <li><strong>Surgery + hospital:</strong> $3,500-5,500</li>
                <li><strong>Brace + crutches + meds:</strong> $200-400</li>
                <li><strong>Physiotherapy (2 weeks India):</strong> $150-450</li>
                <li><strong>Hotel (2 weeks near hospital):</strong> $400-800 ($30-60/night)</li>
                <li><strong>Flights (Dubai ↔ Delhi):</strong> $300-600 (economy round trip)</li>
                <li><strong>Food, transport:</strong> $200-400</li>
                <li><strong>TOTAL:</strong> $4,750-8,150 (still 75-85% cheaper than UAE/USA)</li>
              </ul>
              <p className="text-gray-600">
                <strong>Transparency:</strong> All top hospitals provide detailed written cost estimate before admission (no surprises). If additional procedures needed (meniscus repair found during surgery) → Surgeon discusses with patient/family before proceeding (informed consent). Final bill provided Day 1 post-discharge - typically matches estimate within 5-10%.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Can I work during ACL recovery?</h3>
              <p className="mb-3 text-gray-600">
                <strong>Depends on job type. Desk job: Return Week 2-3. Physical labor: 6-12 weeks. Remote work ideal for first month.</strong> Job-specific timeline:
              </p>
              <p className="mb-3 text-gray-600"><strong>Desk job / Office work (sitting most of day):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                <li><strong>Week 1:</strong> Work from home possible 4-6 hours daily (if pain controlled, can elevate leg while working). Fatigue significant - short workdays.</li>
                <li><strong>Week 2-3:</strong> Full-time remote work feasible. Commuting to office possible if: (1) Short distance (&lt;30 min drive), (2) Can elevate leg at desk, (3) Parking close to entrance.</li>
                <li><strong>Week 4+:</strong> Return to office full-time. Still using crutches/brace initially but manageable. Fatigue improves. Productivity back to 80-90%.</li>
              </ul>
              <p className="mb-3 text-gray-600"><strong>Standing job (retail, teaching, nursing):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                <li><strong>Week 4-6:</strong> Return possible if: (1) Can sit intermittently (30 min standing, 15 min sitting cycle), (2) Light duty assignment available (no heavy lifting, minimal walking).</li>
                <li><strong>Week 6-8:</strong> Full duty feasible if quad strength good (can do single-leg balance, go up stairs without crutches). Fatigue still present - shorter shifts recommended initially.</li>
                <li><strong>Week 8-12:</strong> Normal work tolerance returns. May still have end-of-day swelling if standing &gt;6 hours (ice, elevate after work).</li>
              </ul>
              <p className="mb-3 text-gray-600"><strong>Physical labor (construction, warehouse, military):</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                <li><strong>Month 3-6:</strong> Light duty only (no heavy lifting &gt;10kg, no climbing ladders, no squatting/kneeling). Administrative role or modified duties.</li>
                <li><strong>Month 6-9:</strong> Gradual return to physical work. Start 50% duty (alternate physical tasks with lighter tasks). Increase to full duty by Month 9 if strength testing passed.</li>
                <li><strong>Month 9-12:</strong> Full unrestricted duty. Can lift heavy, squat, kneel (though kneeling may remain uncomfortable long-term if patellar tendon graft).</li>
              </ul>
              <p className="mb-3 text-gray-600"><strong>GCC employment considerations:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                <li><strong>Medical leave:</strong> Most GCC employers provide 30-90 days medical leave. Provide surgeon letter stating &quot;Expected return to work: 3-4 weeks for desk job, 8-12 weeks for physical labor.&quot;</li>
                <li><strong>Light duty assignment:</strong> Request temporary administrative duties if physical job. Most employers accommodate for 2-3 months post-surgery.</li>
                <li><strong>Remote work:</strong> If job allows, work from home first month (ideal - eliminates commute fatigue, allows frequent ice/elevation breaks).</li>
                <li><strong>Physiotherapy during work hours:</strong> Need 1-2 hours, 3 times per week for sessions. Schedule before/after work or request accommodation for mid-day sessions.</li>
              </ul>
              <p className="text-gray-600">
                <strong>Financial planning:</strong> If self-employed or no paid leave, budget for 1-2 months reduced income. Disability insurance (if have policy) may cover portion of lost wages during recovery (usually after 30-day waiting period). Timing surgery during off-season or slower work period minimizes financial impact.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}

      {/* Testimonials Section */}
      <Testimonials
        testimonials={TREATMENT_TESTIMONIALS['knee-replacement']}
        title="Success Stories from Our Acl Reconstruction Patients"
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
        <SocialShare title="ACL Reconstruction India: Cost, Best Surgeons 2025" description="ACL reconstruction in India costs $3,500-5,500 vs $20,000-50,000 in USA (85% savings). Arthroscopic surgery, 95% success rate. Sports medicine experts." />
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

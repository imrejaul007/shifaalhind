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
import { DoctorProfileCardGrid } from '@/components/doctors/doctor-profile-card';
import { PatientReviews, RatingSummary } from '@/components/reviews/patient-reviews';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Knee Replacement in India 2025: Cost ($5,000-8,000), Top Surgeons & Hospitals',
  description:
    'Knee replacement surgery in India costs $5,000-$8,000 vs $50,000+ in USA. 97% success rate, 85-90% savings, JCI-accredited hospitals. Get a free quote today.',
  keywords: [
    'knee replacement india',
    'knee replacement cost india',
    'total knee replacement india',
    'robotic knee replacement india',
    'best orthopedic surgeon india',
    'استبدال الركبة في الهند',
    'تكلفة استبدال الركبة',
  ],
  alternates: {
    canonical: '/treatments/knee-replacement-india',
  },
};

const FAQS = [
  {
    question: 'How much does knee replacement cost in India?',
    answer:
      'Total knee replacement in India costs $5,000-$8,000 including hospital stay, surgeon fees, implant, physiotherapy, and medication. This is 85-90% less than the USA ($50,000-$70,000) and 80% less than the UK ($35,000-$45,000).',
  },
  {
    question: 'What is the success rate of knee replacement in India?',
    answer:
      'Top Indian hospitals report a 97% success rate for total knee replacement, comparable to leading Western centres. Implants from brands like Zimmer, Stryker, and Smith & Nephew typically last 20-25 years with modern designs.',
  },
  {
    question: 'How long is the hospital stay after knee replacement?',
    answer:
      'Most patients stay 4-5 days in hospital after a total knee replacement. You can begin walking with a walker within 4-6 hours of surgery under physiotherapist guidance. Full weight-bearing is encouraged from day 1.',
  },
  {
    question: 'Is robotic knee replacement available in India?',
    answer:
      'Yes. Leading hospitals like Fortis and Apollo offer Mako and ROSA robotic-assisted knee replacement. Robotic surgery provides sub-millimetre accuracy in implant positioning, faster recovery, and longer implant life. It costs $1,000-$1,500 more than conventional surgery.',
  },
  {
    question: 'Can I get both knees replaced at the same time?',
    answer:
      'Bilateral (simultaneous) knee replacement is performed in India for eligible patients under 75 with good cardiac and pulmonary health. Benefits include a single anaesthesia event, one recovery period, and 30-40% cost savings compared to two separate surgeries.',
  },
  {
    question: 'What physiotherapy is needed after knee replacement?',
    answer:
      'Post-operative physiotherapy typically starts within hours of surgery and continues for 8-12 weeks. It includes range-of-motion exercises, quadriceps strengthening, gait training, and balance exercises. Most hospitals provide an in-house physiotherapy programme during your stay.',
  },
  {
    question: 'How long before I can fly home after knee replacement?',
    answer:
      'Most international patients can fly home 10-14 days after surgery. Your surgeon will confirm fitness to fly based on wound healing, range of motion (target 90 degrees flexion), and absence of complications such as DVT.',
  },
  {
    question: 'What implant brands are used in India?',
    answer:
      'Indian hospitals use the same FDA-approved implants as Western hospitals: Zimmer Biomet Persona, Stryker Triathlon, Smith & Nephew Journey II, and DePuy Synthes Attune. Your surgeon will recommend the best implant based on your age, activity level, and bone quality.',
  },
];

const RELATED_ARTICLES = [
  {
    title: 'Medical Visa India Guide',
    href: '/blog/medical-visa-india-complete-guide',
    description: 'Complete visa process guide for medical tourists',
  },
  {
    title: 'Best Hospitals in Delhi',
    href: '/blog/best-hospitals-delhi-medical-tourism',
    description: 'Top 10 JCI-accredited hospitals in Delhi NCR',
  },
  {
    title: 'Medical Tourism Guide for UAE Patients',
    href: '/blog/medical-tourism-uae-patients-guide',
    description: 'Everything GCC patients need to know',
  },
];

export default async function KneeReplacementIndiaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Treatments', url: '/treatments' },
          { name: 'Knee Replacement in India', url: '/treatments/knee-replacement-india' },
        ]}
      />
      <MedicalProcedureSchema
        name="Total Knee Replacement (TKR)"
        description="Total knee replacement surgery in India performed by board-certified orthopedic surgeons at JCI-accredited hospitals using FDA-approved implants."
        procedureType="SurgicalProcedure"
        bodyLocation="Knee Joint"
        preparation="Pre-operative blood tests, X-rays, MRI, cardiac clearance, and physiotherapy assessment."
        followup="Structured physiotherapy programme for 8-12 weeks, follow-up X-rays at 6 weeks, 3 months, and 1 year."
        howPerformed="Damaged cartilage and bone are removed and replaced with metal and polyethylene implant components. Can be performed using conventional, computer-navigated, or robotic-assisted techniques."
        url="/treatments/knee-replacement-india"
      />
      <FAQSchema faqs={FAQS} />

      {/* Hero Section */}
      <section className="mb-12 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-14 text-center text-white md:py-20">
        <h1 className="mb-4 font-serif text-3xl md:text-4xl font-bold md:text-5xl">
          Knee Replacement Surgery in India
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-100 md:text-xl">
          World-class orthopedic care at 85-90% savings. FDA-approved implants, robotic-assisted
          surgery, and JCI-accredited hospitals -- all starting from $5,000.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-accent-500 text-lg hover:bg-accent-600">
            <Link href="/booking">Get Free Consultation</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white bg-transparent text-lg text-white hover:bg-white hover:text-primary-700"
          >
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </Button>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="mb-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="text-center shadow-md">
            <CardContent className="p-6">
              <p className="mb-1 text-3xl font-bold text-primary-600">$5,000-8,000</p>
              <p className="text-sm text-gray-600">All-Inclusive Cost</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-md">
            <CardContent className="p-6">
              <p className="mb-1 text-3xl font-bold text-primary-600">97%</p>
              <p className="text-sm text-gray-600">Success Rate</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-md">
            <CardContent className="p-6">
              <p className="mb-1 text-3xl font-bold text-primary-600">85-90%</p>
              <p className="text-sm text-gray-600">Savings vs USA/UK</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-md">
            <CardContent className="p-6">
              <p className="mb-1 text-3xl font-bold text-primary-600">6-8 Weeks</p>
              <p className="text-sm text-gray-600">Recovery Time</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="mb-12">
        <h2 className="mb-6 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">
          Knee Replacement Cost Comparison
        </h2>
        <Card className="overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Procedure</th>
                  <th className="px-4 py-3 text-center">India</th>
                  <th className="px-4 py-3 text-center">USA</th>
                  <th className="px-4 py-3 text-center">UK</th>
                  <th className="px-4 py-3 text-center">UAE</th>
                  <th className="px-4 py-3 text-center">Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Total Knee Replacement</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$5,000-$7,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$50,000-$70,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$35,000-$45,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$18,000-$25,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">Up to 90%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Partial Knee Replacement</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$4,000-$5,500</td>
                  <td className="px-4 py-3 text-center text-gray-600">$35,000-$50,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$28,000-$38,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$14,000-$20,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">Up to 89%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Bilateral Knee Replacement</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$8,000-$12,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$90,000-$130,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$65,000-$85,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$32,000-$45,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">Up to 91%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Robotic Knee Replacement</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$6,500-$9,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$60,000-$80,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$42,000-$55,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$22,000-$30,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">Up to 89%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Revision Knee Replacement</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$7,000-$10,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$70,000-$100,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$50,000-$70,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$28,000-$40,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">Up to 90%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      {/* What's Included */}
      <section className="mb-12">
        <h2 className="mb-6 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">
          What&apos;s Included in Your Package
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Pre-Surgery Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Complete blood work, X-rays, MRI scan, cardiac evaluation, anaesthesia fitness
                assessment, and consultation with your orthopedic surgeon.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Surgery Day</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Operating theatre charges, surgeon and anaesthetist fees, FDA-approved implant
                (Zimmer/Stryker/DePuy), intra-operative monitoring, and recovery room care.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Hospital Stay (4-5 Days)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Private room with attendant bed, round-the-clock nursing, medications, daily
                physiotherapy sessions, nutritionist-planned meals, and post-op X-rays.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Follow-Up & Physiotherapy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Surgeon follow-up visits, structured physiotherapy programme, walking aids, discharge
                summary, home exercise plan, and tele-consultation after departure.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Procedure Comparison: Total vs Partial */}
      <section className="mb-12">
        <h2 className="mb-6 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">
          Total vs Partial Knee Replacement
        </h2>
        <Card className="overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Factor</th>
                  <th className="px-4 py-3 text-center">Total Knee Replacement</th>
                  <th className="px-4 py-3 text-center">Partial Knee Replacement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Candidacy</td>
                  <td className="px-4 py-3 text-center">All three compartments affected; severe arthritis</td>
                  <td className="px-4 py-3 text-center">Single compartment affected; intact ligaments</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Recovery</td>
                  <td className="px-4 py-3 text-center">6-8 weeks for daily activities</td>
                  <td className="px-4 py-3 text-center">4-6 weeks for daily activities</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Implant Life</td>
                  <td className="px-4 py-3 text-center">20-25 years</td>
                  <td className="px-4 py-3 text-center">15-20 years</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Cost in India</td>
                  <td className="px-4 py-3 text-center">$5,000-$7,000</td>
                  <td className="px-4 py-3 text-center">$4,000-$5,500</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Scarring</td>
                  <td className="px-4 py-3 text-center">8-12 inch incision</td>
                  <td className="px-4 py-3 text-center">3-4 inch incision (minimally invasive)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Rehab Duration</td>
                  <td className="px-4 py-3 text-center">8-12 weeks structured physiotherapy</td>
                  <td className="px-4 py-3 text-center">4-8 weeks structured physiotherapy</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      {/* Top 3 Hospitals */}
      <section className="mb-12">
        <h2 className="mb-6 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">
          Top 3 Hospitals for Knee Replacement in India
        </h2>
        <div className="space-y-6">
          {/* Fortis */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>1. Fortis Memorial Research Institute, Gurugram</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Key Surgeons</p>
                  <p className="mb-4 text-sm text-gray-600">
                    Dr. Ashok Rajgopal (25,000+ joint replacements), Dr. Biren Nadkarni (Robotic
                    surgery specialist)
                  </p>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Technology</p>
                  <p className="text-sm text-gray-600">
                    Mako Robotic Arm, computer-navigated surgery, 3D-printed patient-specific
                    instrumentation, laminar airflow OT
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Cost</p>
                  <p className="mb-4 text-sm font-bold text-green-600">$5,500-$8,000</p>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Why Choose Fortis</p>
                  <p className="text-sm text-gray-600">
                    India&apos;s highest volume joint replacement centre. JCI-accredited. Dedicated
                    international patient lounge with Arabic interpreters. Same-day mobilisation
                    protocol.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Apollo */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>2. Apollo Hospitals, Chennai</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Key Surgeons</p>
                  <p className="mb-4 text-sm text-gray-600">
                    Dr. A.K. Venkatachalam (pioneer in minimally invasive TKR), Dr. David Rajan
                    (sports knee specialist)
                  </p>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Technology</p>
                  <p className="text-sm text-gray-600">
                    ROSA Robotic System, BodyTom intra-operative CT, gender-specific implants,
                    cryotherapy recovery units
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Cost</p>
                  <p className="mb-4 text-sm font-bold text-green-600">$5,000-$7,500</p>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Why Choose Apollo</p>
                  <p className="text-sm text-gray-600">
                    Asia&apos;s largest healthcare network with 72+ hospitals. NABH &amp; JCI dual
                    accredited. Rapid recovery programme discharges patients in 3 days. Dedicated
                    GCC patient services.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Medanta */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>3. Medanta - The Medicity, Gurugram</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Key Surgeons</p>
                  <p className="mb-4 text-sm text-gray-600">
                    Dr. Saurabh Chandra (revision specialist), Dr. Rakesh Mahajan (bilateral TKR
                    expert)
                  </p>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Technology</p>
                  <p className="text-sm text-gray-600">
                    Mako SmartRobotics, kinematic alignment technique, patient-matched cutting
                    blocks, negative-pressure wound therapy
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Cost</p>
                  <p className="mb-4 text-sm font-bold text-green-600">$5,000-$7,000</p>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Why Choose Medanta</p>
                  <p className="text-sm text-gray-600">
                    Founded by renowned cardiac surgeon Dr. Naresh Trehan. 1,500-bed
                    super-speciality facility. Infection rate below 0.5%. On-campus guest house and
                    rehabilitation centre.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="mb-12">
        <h2 className="mb-6 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">
          Recovery Timeline
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-l-4 border-l-blue-500 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Day 1-3</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Walking with walker within 4-6 hours. Continuous passive motion (CPM) machine.
                Pain managed with multimodal analgesia. Physiotherapy twice daily. Target: 60-70
                degrees knee flexion.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-green-500 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Week 1-2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Transition from walker to cane. Staple/suture removal at 10-14 days. Independent
                bathroom use. Stair climbing with support. Target: 90 degrees knee flexion. Cleared
                to fly home.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-yellow-500 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Weeks 3-8</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Walking without aid by week 4-6. Driving by week 6. Return to desk work. Active
                physiotherapy: strengthening, balance, and proprioception exercises. Target: 110-120
                degrees flexion.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-purple-500 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Months 3-12</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Full return to daily activities. Low-impact sports (swimming, cycling, golf) from
                month 3. Gradual improvement continues up to 12 months. Final implant settling and
                maximum range of motion achieved.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Internal Links, Social Share, Related Articles */}
      <section className="mb-12">
        <InternalLinks
          links={[
            { text: 'View All Treatments', href: '/treatments' },
            { text: 'Cost Calculator', href: '/cost-calculator' },
            { text: 'Our Partner Hospitals', href: '/hospitals' },
            { text: 'Book a Consultation', href: '/booking' },
          ]}
        />
      </section>

      <section className="mb-12">
        <SocialShare
          title="Knee Replacement in India 2025: Cost, Top Surgeons & Hospitals"
          description="Knee replacement surgery in India costs $5,000-$8,000 vs $50,000+ in USA. 97% success rate, JCI-accredited hospitals."
        />
      </section>

      <section className="mb-12">
        <RelatedArticles articles={RELATED_ARTICLES} />
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto max-w-4xl space-y-4">
          {FAQS.map((faq, index) => (
            <Card key={index} className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-12 rounded-xl bg-gray-50 p-8">
        <Testimonials testimonials={TREATMENT_TESTIMONIALS['generic']} />
      </section>

      {/* Expert Doctors for Knee Replacement */}
      <section className="mb-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">
            Expert Knee Surgeons in India
          </h2>
          <DoctorProfileCardGrid
            doctors={[
              {
                id: '1',
                name: 'Dr. A.K. Venkatachalam',
                nameAr: 'د. أ. ك. فينكاتاتشالام',
                specialty: 'Orthopedic Surgeon',
                specialtyAr: 'جراح العظام',
                hospital: 'Fortis Memorial Research Institute',
                hospitalAr: 'معهد فورتيس للأبحاث الطبية',
                experience: 25,
                rating: 4.9,
                reviews: 1500,
                price: { min: 5000, max: 8000, currency: 'USD' },
                education: ['MBBS, MS (Orthopedics)', 'Fellowship in Joint Replacement'],
                certifications: ['MCh Orthopedics', 'Fellowship Royal College Surgeons'],
                languages: ['English', 'Hindi', 'Arabic'],
                slug: 'dr-ak-venkatachalam',
              },
              {
                id: '2',
                name: 'Dr. David Rajan',
                nameAr: 'د. ديفيد راجان',
                specialty: 'Knee Replacement Specialist',
                specialtyAr: 'أخصائي استبدال الركبة',
                hospital: 'Apollo Hospitals, Chennai',
                hospitalAr: 'مستشفيات أبولو، تشيناي',
                experience: 22,
                rating: 4.8,
                reviews: 1200,
                price: { min: 5000, max: 7500, currency: 'USD' },
                education: ['MBBS, MS (Orthopedics)', 'Fellowship in Arthroscopy'],
                certifications: ['Fellowship International Society of Arthroscopy'],
                languages: ['English', 'Tamil', 'Arabic'],
                slug: 'dr-david-rajan',
              },
              {
                id: '3',
                name: 'Dr. Saurabh Chandra',
                nameAr: 'د. سوراب شاندرا',
                specialty: 'Revision Knee Surgery',
                specialtyAr: 'جراحة الركبة التصحيحية',
                hospital: 'Medanta - The Medicity',
                hospitalAr: 'ميدانتا - المديسيتي',
                experience: 18,
                rating: 4.7,
                reviews: 980,
                price: { min: 6000, max: 9000, currency: 'USD' },
                education: ['MBBS, MS (Orthopedics)', 'Fellowship Revision Surgery'],
                certifications: ['Fellowship German Knee Society'],
                languages: ['English', 'Hindi', 'Arabic'],
                slug: 'dr-saurabh-chandra',
              },
            ]}
            locale={locale as 'en' | 'ar'}
            variant="detailed"
            limit={6}
            showPrice={true}
          />
        </div>
      </section>

      {/* Patient Reviews */}
      <section className="mb-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">
            Patient Reviews & Success Stories
          </h2>
          <PatientReviews
            reviews={[
              {
                id: '1',
                patientName: 'Ahmed Al-Mansoori',
                country: 'UAE',
                flag: '🇦🇪',
                treatment: 'Knee Replacement',
                treatmentAr: 'استبدال الركبة',
                rating: 5,
                date: '2024-12-15',
                review: 'Amazing experience at Fortis! Dr. Venkatachalam is a true expert. My knee pain is completely gone after 6 months of suffering. The staff was incredibly helpful, especially the Arabic interpreter. The recovery was smooth and I was walking within 2 days. Highly recommend for anyone considering knee surgery in India.',
                reviewAr: 'تجربة رائعة في فورتيس! د. فينكاتاتشالام خبير حقيقي. ألم الركبة اختفى تماماً بعد 6 أشهر من المعاناة. كان الموظفون مفيدون للغاية، خاصة المترجم العربي. كان التعافي سلساً وكنت أمشي خلال يومين. أنصح بشدة لأي شخص يفكر في جراحة الركبة في الهند.',
                helpfulCount: 234,
                isVerified: true,
                hospital: 'Fortis Memorial Research Institute',
                beforeAfterImages: {
                  before: '/images/patient-knee-before.jpg',
                  after: '/images/patient-knee-after.jpg',
                },
              },
              {
                id: '2',
                patientName: 'Sarah Al-Hassan',
                country: 'Saudi Arabia',
                flag: '🇸🇦',
                treatment: 'Knee Replacement',
                treatmentAr: 'استبدال الركبة',
                rating: 5,
                date: '2024-11-28',
                review: 'Words cannot describe how grateful I am to Dr. David Rajan at Apollo. After years of struggling with knee issues, I can now walk pain-free. The hospital was excellent - clean, modern, and very professional. The cost was just a fraction of what I would have paid in Saudi Arabia. Thank you Shifa AlHind for making this possible!',
                reviewAr: 'لا يمكن للكلمات أن تعبر عن مدى امتناني لد. ديفيد راجان في أبولو. بعد سنوات من المعاناة مع مشاكل الركبة، يمكنني المشي الآن دون ألم. كان المستشفى ممتازًا - نظيفًا وعصريًا ومحترفًا للغاية. كانت التكلفة مجرد جزء صغير مما سأدفعه في السعودية. شكرًا لك شفاء الهند لجعل هذا ممكنًا!',
                helpfulCount: 189,
                isVerified: true,
                hospital: 'Apollo Hospitals, Chennai',
              },
              {
                id: '3',
                patientName: 'Mohammad Al-Kuwari',
                country: 'Kuwait',
                flag: '🇰🇼',
                treatment: 'Knee Replacement',
                treatmentAr: 'استبدال الركبة',
                rating: 4.5,
                date: '2024-10-05',
                review: 'I had bilateral knee replacement at Medanta with Dr. Chandra. Complex surgery handled very professionally. Recovery was faster than expected - walking without support in 10 days. The rehabilitation program was excellent. Total cost including 3 weeks stay was very reasonable compared to Kuwait.',
                reviewAr: 'أجريت استبدال ركبة ثنائي في ميدانتا مع د. شاندرا. جراحة معقدة تم التعامل معها باحترافية عالية. كان التعافي أسرع من المتوقع - المشي دون دعم في 10 أيام. كان برنامج إعادة التأهيل ممتازًا. كانت التكلفة الإجمالية بما في ذلك 3 أسابيع من الإقامة معقولة جدًا مقارنة بالكويت.',
                helpfulCount: 156,
                isVerified: true,
                hospital: 'Medanta - The Medicity',
              },
            ]}
            locale={locale as 'en' | 'ar'}
            variant="grid"
            limit={6}
            showFilters={false}
            showBeforeAfter={true}
          />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="mb-12">

      {/* Contextual Sidebar - Related Treatment Links */}
      <ContextualSidebar treatmentSlug="knee-replacement-india" locale={locale as 'en' | 'ar'} />
        <TrustBadges />
      </section>

      {/* Final CTA */}
      <section className="mb-8 rounded-2xl bg-green-600 px-6 py-12 text-center text-white">
        <h2 className="mb-4 font-serif text-2xl md:text-3xl font-bold">
          Ready to Reclaim Pain-Free Mobility?
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-lg text-green-100">
          Get a personalised treatment plan and cost estimate within 24 hours. Our medical
          coordinators speak English, Arabic, and Hindi.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-lg font-semibold text-green-700 hover:bg-green-50"
          >
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              WhatsApp Us Now
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white bg-transparent text-lg text-white hover:bg-white hover:text-green-700"
          >
            <Link href="/booking">Book Free Consultation</Link>
          </Button>
        </div>
      </section>

      {/* SEO: HowTo + Offer + Speakable Schemas */}
      <TreatmentSchemas
        treatmentName="Knee Replacement"
        lowPrice={5000}
        highPrice={8000}
        url="/en/treatments/knee-replacement-india"
      />
    </div>
  );
}

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

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Spine Surgery India 2025: Cost $4,000-15,000, Best Hospitals',
  description:
    'Spine surgery in India costs $4,000-$15,000 vs $50,000-$150,000 in USA. 90-95% success rate, 80-85% savings. Top spine surgeons, robotic-assisted surgery, and JCI-accredited hospitals.',
  keywords: [
    'spine surgery india',
    'spinal fusion cost india',
    'disc replacement india',
    'minimally invasive spine surgery india',
    'best spine surgeon india',
    'scoliosis correction india',
    'laminectomy india',
    'جراحة العمود الفقري في الهند',
    'تكلفة جراحة العمود الفقري',
  ],
  alternates: {
    canonical: '/treatments/spine-surgery-india',
  },
};

const FAQS = [
  {
    question: 'How much does disc replacement cost in India?',
    answer:
      'Artificial disc replacement in India costs $6,000-$10,000 including hospital stay, surgeon fees, the prosthetic disc, and follow-up care. This compares to $80,000-$120,000 in the USA and $50,000-$80,000 in the UK, representing savings of 85-90%. Cervical disc replacement is typically at the lower end, while lumbar disc replacement costs slightly more due to procedural complexity.',
  },
  {
    question: 'What is the success rate of spinal fusion in India?',
    answer:
      'Top Indian spine centres report 90-95% success rates for spinal fusion, comparable to leading Western hospitals. Single-level lumbar fusion has the highest success rate (92-97%), while multi-level fusions are slightly lower (88-93%). Success depends on accurate patient selection, surgeon experience, and adherence to post-operative rehabilitation protocols.',
  },
  {
    question: 'Can scoliosis be corrected with surgery in India?',
    answer:
      'Yes. Indian spine centres perform complex scoliosis correction surgery for adolescent idiopathic scoliosis, degenerative scoliosis, and congenital deformities. Techniques include posterior spinal fusion with pedicle screw fixation, anterior release, and vertebral body tethering for growing spines. Correction of 50-70% of the curve is typically achieved. Cost ranges from $8,000 to $15,000 vs $100,000-$200,000 in the USA.',
  },
  {
    question: 'What is minimally invasive spine surgery (MISS)?',
    answer:
      'MISS uses small incisions (1-2 cm), tubular retractors, and microscopic or endoscopic guidance to access the spine with minimal muscle and tissue disruption. Benefits include 60-70% less blood loss, 50% less post-operative pain, shorter hospital stays (1-3 days vs 5-7 days for open surgery), and faster return to work (2-4 weeks vs 6-12 weeks). Common MISS procedures include microdiscectomy, endoscopic decompression, and percutaneous pedicle screw fixation.',
  },
  {
    question: 'How long is the recovery after spine surgery in India?',
    answer:
      'Recovery varies by procedure. Microdiscectomy: walking same day, return to desk work in 2-3 weeks. Spinal fusion: walking day 1-2, return to desk work in 4-6 weeks, full recovery 3-6 months. Scoliosis correction: hospital stay 5-7 days, return to school/desk work in 6-8 weeks, full recovery 6-12 months. All patients receive structured physiotherapy starting within 24 hours of surgery.',
  },
  {
    question: 'How much can I save on spine surgery in India?',
    answer:
      'International patients typically save 80-85% on spine surgery in India compared to the USA and 70-80% compared to the UK. For example, a spinal fusion costing $80,000-$150,000 in the USA costs $5,000-$9,000 in India. Even including flights, accommodation, and a companion&apos;s expenses, total savings exceed 75% for most procedures.',
  },
  {
    question: 'What are the success rates for different spine surgeries?',
    answer:
      'Microdiscectomy: 90-95% pain relief. Spinal fusion (single level): 92-97%. Artificial disc replacement: 90-95% for carefully selected patients. Laminectomy for spinal stenosis: 85-90%. Scoliosis correction: 85-92% curve improvement. Robotic-assisted procedures may further improve accuracy by 20-30% compared to conventional freehand techniques.',
  },
  {
    question: 'Is robotic spine surgery available in India?',
    answer:
      'Yes. Leading hospitals like Indian Spinal Injuries Centre, Fortis, and Apollo offer robotic-assisted spine surgery using systems such as Mazor X and ExcelsiusGPS. Robotic guidance provides sub-millimetre accuracy for pedicle screw placement (98-99% accuracy vs 90-92% freehand), reduced radiation exposure, shorter operative times, and lower revision rates. It costs $1,000-$2,000 more than conventional surgery.',
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

export default async function SpineSurgeryIndiaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Treatments', url: '/treatments' },
          { name: 'Spine Surgery in India', url: '/treatments/spine-surgery-india' },
        ]}
      />
      <MedicalProcedureSchema
        name="Spine Surgery"
        description="Spine surgery in India performed by board-certified spine surgeons at JCI-accredited hospitals using robotic navigation, O-arm imaging, and minimally invasive techniques."
        procedureType="SurgicalProcedure"
        bodyLocation="Spine"
        preparation="Pre-operative MRI, X-ray, CT scan, nerve conduction studies, blood work, cardiac clearance, and consultation with a spine specialist."
        followup="Structured physiotherapy and spine rehabilitation programme for 8-12 weeks, follow-up MRI and X-rays at 6 weeks, 3 months, and 1 year. Telemedicine consultations for international patients."
        howPerformed="Depending on the condition, procedures include microdiscectomy, spinal fusion with pedicle screws and rods, artificial disc replacement, laminectomy, or scoliosis correction with instrumentation. Minimally invasive and robotic-assisted approaches are used when appropriate."
        url="/treatments/spine-surgery-india"
      />
      <FAQSchema faqs={FAQS} />

      {/* Hero Section */}
      <section className="mb-12 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-14 text-center text-white md:py-20">
        <h1 className="mb-4 font-serif text-3xl md:text-4xl font-bold md:text-5xl">
          Spine Surgery in India
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-100 md:text-xl">
          Advanced spinal care with robotic navigation, minimally invasive techniques, and
          world-class spine surgeons -- at 80-85% savings compared to the USA and UK.
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
              <p className="mb-1 text-3xl font-bold text-primary-600">$4,000-15,000</p>
              <p className="text-sm text-gray-600">All-Inclusive Cost</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-md">
            <CardContent className="p-6">
              <p className="mb-1 text-3xl font-bold text-primary-600">90-95%</p>
              <p className="text-sm text-gray-600">Success Rate</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-md">
            <CardContent className="p-6">
              <p className="mb-1 text-3xl font-bold text-primary-600">80-85%</p>
              <p className="text-sm text-gray-600">Savings vs USA/UK</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-md">
            <CardContent className="p-6">
              <p className="mb-1 text-3xl font-bold text-primary-600">4-12 Weeks</p>
              <p className="text-sm text-gray-600">Recovery Time</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="mb-12">
        <h2 className="mb-6 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">
          Spine Surgery Cost Comparison
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
                  <td className="px-4 py-3 font-medium">Microdiscectomy</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$4,000-$5,500</td>
                  <td className="px-4 py-3 text-center text-gray-600">$30,000-$50,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$20,000-$35,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$12,000-$20,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">Up to 87%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Spinal Fusion (1-2 Levels)</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$5,000-$9,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$80,000-$150,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$50,000-$90,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$25,000-$45,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">Up to 94%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Disc Replacement</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$6,000-$10,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$80,000-$120,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$50,000-$80,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$30,000-$50,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">Up to 92%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Scoliosis Correction</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$8,000-$15,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$100,000-$200,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$70,000-$130,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$45,000-$80,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">Up to 93%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Laminectomy</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$4,000-$6,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$40,000-$70,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$25,000-$45,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$15,000-$25,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">Up to 91%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Minimally Invasive Spine Surgery</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$4,500-$8,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$50,000-$90,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$35,000-$60,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$18,000-$35,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">Up to 91%</td>
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
              <CardTitle className="text-lg">Diagnosis &amp; Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                MRI scan, digital X-rays, nerve conduction studies, blood work, cardiac clearance,
                and detailed consultation with a fellowship-trained spine specialist.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Surgery Day</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Operating theatre charges, surgeon and anaesthetist fees, implants and instrumentation,
                intra-operative neuromonitoring, O-arm navigation, and recovery room care.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Hospital Stay (3-7 Days)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Private room with attendant bed, round-the-clock nursing, medications, daily
                physiotherapy sessions, nutritionist-planned meals, and post-op imaging.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Follow-Up &amp; Rehabilitation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Structured physiotherapy programme, spine rehabilitation exercises, surgeon
                follow-up visits, discharge summary, home exercise plan, and telemedicine
                consultations after departure.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Procedure Comparison: Spinal Fusion vs Disc Replacement */}
      <section className="mb-12">
        <h2 className="mb-6 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">
          Spinal Fusion vs Disc Replacement
        </h2>
        <Card className="overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Factor</th>
                  <th className="px-4 py-3 text-center">Spinal Fusion</th>
                  <th className="px-4 py-3 text-center">Disc Replacement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Candidacy</td>
                  <td className="px-4 py-3 text-center">Instability, spondylolisthesis, multi-level disease, failed conservative care</td>
                  <td className="px-4 py-3 text-center">Single-level disc disease, preserved facet joints, no significant arthritis</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Motion Preservation</td>
                  <td className="px-4 py-3 text-center">Eliminates motion at fused segment</td>
                  <td className="px-4 py-3 text-center">Preserves near-normal spinal motion</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Recovery</td>
                  <td className="px-4 py-3 text-center">6-12 weeks for daily activities; brace worn 6-8 weeks</td>
                  <td className="px-4 py-3 text-center">4-6 weeks for daily activities; no brace typically needed</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Cost in India</td>
                  <td className="px-4 py-3 text-center">$5,000-$9,000</td>
                  <td className="px-4 py-3 text-center">$6,000-$10,000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Adjacent Segment Risk</td>
                  <td className="px-4 py-3 text-center">Higher risk of adjacent segment degeneration (15-20% over 10 years)</td>
                  <td className="px-4 py-3 text-center">Lower risk due to preserved motion (5-10% over 10 years)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Long-Term Outcome</td>
                  <td className="px-4 py-3 text-center">Proven track record over 50+ years; gold standard for instability</td>
                  <td className="px-4 py-3 text-center">Excellent 10-15 year data; preferred for younger, active patients</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      {/* Top 3 Hospitals */}
      <section className="mb-12">
        <h2 className="mb-6 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">
          Top 3 Hospitals for Spine Surgery in India
        </h2>
        <div className="space-y-6">
          {/* Indian Spinal Injuries Centre */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>1. Indian Spinal Injuries Centre (ISIC), New Delhi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Key Spine Surgeons</p>
                  <p className="mb-4 text-sm text-gray-600">
                    Dr. H.S. Chhabra (15,000+ spine surgeries, former president of International
                    Spinal Cord Society), Dr. Ankur Nanda (complex deformity specialist)
                  </p>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Technology</p>
                  <p className="text-sm text-gray-600">
                    Mazor X robotic spine surgery, O-arm intra-operative 3D navigation,
                    intra-operative neuromonitoring, endoscopic spine surgery suite
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Cost</p>
                  <p className="mb-4 text-sm font-bold text-green-600">$4,500-$12,000</p>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Why Choose ISIC</p>
                  <p className="text-sm text-gray-600">
                    India&apos;s only dedicated spine hospital. NABH-accredited. 200-bed facility
                    exclusively for spinal disorders with an integrated rehabilitation centre.
                    Handles the most complex revision and deformity cases in the country.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fortis */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>2. Fortis Memorial Research Institute, Gurugram</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Key Spine Surgeons</p>
                  <p className="mb-4 text-sm text-gray-600">
                    Dr. Arun Saroha (10,000+ spine procedures, endoscopic spine pioneer),
                    Dr. Puneet Girdhar (minimally invasive fusion specialist)
                  </p>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Technology</p>
                  <p className="text-sm text-gray-600">
                    ExcelsiusGPS robotic navigation, O-arm with StealthStation, biplanar
                    fluoroscopy, microscope-assisted micro-decompression
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Cost</p>
                  <p className="mb-4 text-sm font-bold text-green-600">$5,000-$13,000</p>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Why Choose Fortis</p>
                  <p className="text-sm text-gray-600">
                    JCI-accredited multi-speciality hospital with a dedicated spine centre. 1,000+
                    beds. International patient lounge with Arabic interpreters. Same-day
                    mobilisation protocols for minimally invasive procedures.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Apollo */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>3. Apollo Hospitals, Chennai &amp; Delhi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Key Spine Surgeons</p>
                  <p className="mb-4 text-sm text-gray-600">
                    Dr. S. Rajasekaran (internationally renowned spine researcher, Padma Shri
                    awardee), Dr. Sajan K. Hegde (artificial disc replacement specialist)
                  </p>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Technology</p>
                  <p className="text-sm text-gray-600">
                    Robotic spine surgery system, O-arm navigation, intra-operative CT,
                    endoscopic and percutaneous fusion techniques, motion preservation implants
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Cost</p>
                  <p className="mb-4 text-sm font-bold text-green-600">$4,500-$14,000</p>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Why Choose Apollo</p>
                  <p className="text-sm text-gray-600">
                    Asia&apos;s largest healthcare network with 72+ hospitals. NABH &amp; JCI dual
                    accredited. Published spine research in international journals. Dedicated GCC
                    patient services with Arabic-speaking coordinators.
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
                Assisted walking within 12-24 hours. Pain managed with multimodal analgesia.
                Wound check and drain removal. Physiotherapy begins with gentle mobilisation,
                breathing exercises, and log-rolling technique for bed mobility.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-green-500 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Week 1-2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Independent walking with support. Suture or staple removal at 10-14 days.
                Light daily activities resumed. Spinal brace fitted if required. Post-op
                imaging to confirm implant position. Most patients cleared to fly home by
                day 10-14.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-yellow-500 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Weeks 3-8</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Return to desk work (microdiscectomy patients: week 2-3, fusion patients:
                week 4-6). Progressive core strengthening and flexibility exercises. Walking
                without aid. Gradual increase in activity under physiotherapist guidance.
                Driving resumed by week 4-6.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-purple-500 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Months 3-12+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Full return to daily activities. Low-impact sports (swimming, walking, yoga)
                from month 3. Spinal fusion patients: bone graft consolidation confirmed by
                CT at 6-12 months. Maximum functional improvement typically reached at 12
                months. Ongoing core maintenance exercises.
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
          title="Spine Surgery India 2025: Cost $4,000-15,000, Best Hospitals"
          description="Spine surgery in India costs $4,000-$15,000 vs $50,000-$150,000 in USA. 90-95% success rate, JCI-accredited hospitals."
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

      {/* Trust Badges */}
      <section className="mb-12">

      {/* Contextual Sidebar - Related Treatment Links */}
      <ContextualSidebar treatmentSlug="spine-surgery-india" locale={locale as 'en' | 'ar'} />
        <TrustBadges />
      </section>

      {/* Final CTA */}
      <section className="mb-8 rounded-2xl bg-green-600 px-6 py-12 text-center text-white">
        <h2 className="mb-4 font-serif text-2xl md:text-3xl font-bold">
          Ready to Resolve Your Spine Condition?
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
        treatmentName="Spine Surgery"
        lowPrice={5000}
        highPrice={12000}
        url="/en/treatments/spine-surgery-india"
      />
    </div>
  );
}

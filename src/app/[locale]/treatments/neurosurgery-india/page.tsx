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
  title: 'Neurosurgery India 2025: Cost, Best Brain & Spine Hospitals',
  description:
    'Neurosurgery in India costs $5,000-$20,000 vs $50,000-$200,000 in USA (80-85% savings). 92-98% success rate at NABH/JCI-accredited neuroscience centres. Brain tumour, DBS, epilepsy surgery, aneurysm clipping by top neurosurgeons.',
  keywords: [
    'neurosurgery india',
    'brain surgery india',
    'neurosurgery cost india',
    'best neurosurgeon india',
    'brain tumor surgery india',
    'deep brain stimulation india',
    'epilepsy surgery india',
    'craniotomy india',
    'spine surgery india',
    'جراحة الأعصاب في الهند',
    'جراحة المخ في الهند',
  ],
  alternates: {
    canonical: '/treatments/neurosurgery-india',
  },
};

const FAQS = [
  {
    question: 'How much does brain tumour surgery cost in India?',
    answer:
      'Brain tumour surgery (craniotomy) in India costs $8,000-$15,000 depending on tumour location, size, and grade. This includes pre-operative MRI/CT, surgeon and anaesthetist fees, intraoperative neuronavigation, ICU stay (2-5 days), and 7-14 days of hospitalisation. The same procedure costs $80,000-$150,000 in the USA and $60,000-$120,000 in the UK.',
  },
  {
    question: 'What is a craniotomy and when is it needed?',
    answer:
      'A craniotomy is a surgical procedure where a section of the skull (bone flap) is temporarily removed to access the brain. It is performed for brain tumour removal, aneurysm clipping, AVM repair, subdural haematoma evacuation, and epilepsy surgery. Indian neurosurgeons perform both conventional and awake craniotomies, the latter allowing real-time speech and motor mapping to preserve critical brain functions.',
  },
  {
    question: 'Is deep brain stimulation (DBS) available in India?',
    answer:
      'Yes. Deep brain stimulation is available at leading centres like AIIMS Delhi, Medanta, and Fortis. DBS costs $12,000-$20,000 in India vs $80,000-$150,000 in the USA. It is used for Parkinson disease, essential tremor, dystonia, and treatment-resistant OCD. The procedure involves implanting electrodes in specific brain targets (subthalamic nucleus or globus pallidus) connected to a pulse generator in the chest.',
  },
  {
    question: 'What is the success rate of epilepsy surgery in India?',
    answer:
      'Epilepsy surgery in India has a 60-80% seizure-free rate for temporal lobe resections and 50-70% for extra-temporal procedures, consistent with global benchmarks. Pre-surgical evaluation includes video-EEG monitoring, PET-CT, SPECT, and neuropsychological testing. Leading epilepsy programmes at AIIMS and NIMHANS perform 200+ epilepsy surgeries annually.',
  },
  {
    question: 'How is aneurysm clipping different from coiling?',
    answer:
      'Aneurysm clipping is an open surgical procedure (craniotomy) where a titanium clip is placed across the neck of the aneurysm. Endovascular coiling is a minimally invasive approach where platinum coils are inserted through a catheter via the femoral artery. Clipping costs $7,000-$12,000 and coiling $8,000-$14,000 in India. The choice depends on aneurysm location, morphology, patient age, and surgeon expertise.',
  },
  {
    question: 'How long is the recovery after brain surgery in India?',
    answer:
      'ICU stay is typically 2-5 days, followed by 5-10 days in the ward. Most patients can fly home 3-4 weeks after surgery. Light activities resume at 4-6 weeks, return to work at 8-16 weeks, and full neurological recovery can take 6-12 months. Recovery depends on the type of surgery, tumour grade, and whether adjuvant chemotherapy or radiation is needed.',
  },
  {
    question: 'What are the risks of neurosurgery?',
    answer:
      'Risks include infection (1-3%), bleeding or haematoma (2-4%), seizures (5-10% in craniotomy patients), neurological deficits (varies by location -- speech, motor, or visual changes), CSF leak (2-5%), and deep vein thrombosis. Top Indian hospitals mitigate risks using intraoperative MRI, neuronavigation, cortical mapping, and dedicated neuro-ICU units with 24/7 neurocritical care specialists.',
  },
  {
    question: 'What is minimally invasive neurosurgery?',
    answer:
      'Minimally invasive neurosurgery uses endoscopes, tubular retractors, or stereotactic frames to access brain lesions through small incisions or natural openings (nose for pituitary tumours). Benefits include less brain retraction, shorter ICU stays, reduced infection risk, and faster recovery. Techniques include endoscopic transsphenoidal surgery, keyhole craniotomy, and stereotactic biopsy. Cost is $6,000-$15,000 in India.',
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

export default async function NeurosurgeryIndiaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Treatments', url: '/treatments' },
          { name: 'Neurosurgery in India', url: '/treatments/neurosurgery-india' },
        ]}
      />
      <MedicalProcedureSchema
        name="Neurosurgery (Brain & Spine Surgery)"
        description="Advanced neurosurgical procedures in India performed by fellowship-trained neurosurgeons at NABH/JCI-accredited hospitals using neuronavigation, intraoperative MRI, and cortical mapping."
        procedureType="SurgicalProcedure"
        bodyLocation="Brain and Spinal Cord"
        preparation="Pre-operative MRI with contrast, CT angiography, neurological assessment, blood work, cardiac clearance, and anaesthesia evaluation."
        followup="Neuro-rehabilitation programme, follow-up MRI at 3 and 6 months, neurological assessments, and telemedicine consultations after departure."
        howPerformed="Depending on the condition, performed via open craniotomy, endoscopic surgery, stereotactic techniques, or endovascular approaches. Intraoperative neuronavigation and cortical mapping guide safe tumour resection and lesion treatment."
        url="/treatments/neurosurgery-india"
      />
      <FAQSchema faqs={FAQS} />

      {/* Hero Section */}
      <section className="mb-12 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-14 text-center text-white md:py-20">
        <h1 className="mb-4 font-serif text-3xl md:text-4xl font-bold md:text-5xl">
          Neurosurgery / Brain &amp; Spine Surgery in India
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-100 md:text-xl">
          World-class neuroscience care at 80-85% savings. Neuronavigation-guided surgery,
          intraoperative MRI, and dedicated neuro-ICU at JCI-accredited hospitals -- starting
          from $5,000.
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
              <p className="mb-1 text-3xl font-bold text-primary-600">$5,000-20,000</p>
              <p className="text-sm text-gray-600">All-Inclusive Cost</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-md">
            <CardContent className="p-6">
              <p className="mb-1 text-3xl font-bold text-primary-600">92-98%</p>
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
              <p className="mb-1 text-3xl font-bold text-primary-600">Varies</p>
              <p className="text-sm text-gray-600">Recovery (procedure-dependent)</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="mb-12">
        <h2 className="mb-6 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">
          Neurosurgery Cost Comparison
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
                  <td className="px-4 py-3 font-medium">Brain Tumour Surgery</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$8,000-$15,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$80,000-$150,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$60,000-$120,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$40,000-$80,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">Up to 90%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Deep Brain Stimulation (DBS)</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$12,000-$20,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$80,000-$150,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$55,000-$100,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$45,000-$90,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">Up to 85%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Epilepsy Surgery</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$7,000-$14,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$60,000-$120,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$50,000-$90,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$35,000-$70,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">Up to 88%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Aneurysm Clipping / Coiling</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$7,000-$14,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$70,000-$130,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$55,000-$100,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$40,000-$80,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">Up to 90%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Craniotomy</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$6,000-$12,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$60,000-$120,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$45,000-$90,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$35,000-$70,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">Up to 90%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Minimally Invasive Brain Surgery</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">$6,000-$15,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$55,000-$120,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$40,000-$85,000</td>
                  <td className="px-4 py-3 text-center text-gray-600">$30,000-$65,000</td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">Up to 89%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      {/* What's Included */}
      <section className="mb-12">
        <h2 className="mb-6 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">
          What&apos;s Included in Your Neurosurgery Package
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Diagnosis &amp; Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Brain MRI with contrast, CT angiography, digital subtraction angiography (DSA),
                comprehensive neurological assessment, blood work, cardiac clearance, and
                neurosurgeon consultation.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Surgery Day</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Operating theatre with neuronavigation suite, craniotomy or endoscopic approach,
                surgeon and neuroanaesthetist fees, intraoperative cortical mapping,
                electrophysiological monitoring, and neuro-ICU transfer.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">ICU + Hospital Stay</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Dedicated neuro-ICU (2-5 days) with 24/7 neurocritical care, private ward room
                (5-10 days), round-the-clock nursing, medications, post-operative CT/MRI scans,
                and nutritionist-planned meals.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Follow-Up &amp; Rehabilitation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Neuro-rehabilitation programme (physiotherapy, occupational therapy, speech therapy
                as needed), follow-up MRI at 3 and 6 months, discharge summary, and telemedicine
                consultations after departure.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Procedure Comparison */}
      <section className="mb-12">
        <h2 className="mb-6 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">
          Open Craniotomy vs Minimally Invasive / Endoscopic Neurosurgery
        </h2>
        <Card className="overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Factor</th>
                  <th className="px-4 py-3 text-center">Open Craniotomy</th>
                  <th className="px-4 py-3 text-center">Minimally Invasive / Endoscopic</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Candidacy</td>
                  <td className="px-4 py-3 text-center">Large tumours, complex vascular lesions, mass effect</td>
                  <td className="px-4 py-3 text-center">Pituitary tumours, small deep lesions, hydrocephalus, colloid cysts</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Incision</td>
                  <td className="px-4 py-3 text-center">6-12 inch scalp incision with bone flap removal</td>
                  <td className="px-4 py-3 text-center">1-2 inch keyhole or transnasal (no external incision)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">ICU Stay</td>
                  <td className="px-4 py-3 text-center">3-5 days</td>
                  <td className="px-4 py-3 text-center">1-2 days</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Hospital Stay</td>
                  <td className="px-4 py-3 text-center">7-14 days</td>
                  <td className="px-4 py-3 text-center">3-7 days</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Recovery</td>
                  <td className="px-4 py-3 text-center">6-12 weeks to resume normal activities</td>
                  <td className="px-4 py-3 text-center">3-6 weeks to resume normal activities</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Cost in India</td>
                  <td className="px-4 py-3 text-center">$8,000-$15,000</td>
                  <td className="px-4 py-3 text-center">$6,000-$15,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      {/* Top 3 Hospitals */}
      <section className="mb-12">
        <h2 className="mb-6 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900">
          Top 3 Hospitals for Neurosurgery in India
        </h2>
        <div className="space-y-6">
          {/* AIIMS */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>1. AIIMS (All India Institute of Medical Sciences), New Delhi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Key Neurosurgeons</p>
                  <p className="mb-4 text-sm text-gray-600">
                    Faculty includes professors with 30+ years of experience in skull base surgery,
                    neuro-oncology, and functional neurosurgery. AIIMS trains the majority of
                    India&apos;s neurosurgeons through its MCh programme.
                  </p>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Technology</p>
                  <p className="text-sm text-gray-600">
                    Intraoperative MRI (3T), neuronavigation (StealthStation), Gamma Knife
                    radiosurgery, intraoperative ultrasound, cortical and subcortical mapping
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Cost</p>
                  <p className="mb-4 text-sm font-bold text-green-600">$5,000-$12,000</p>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Why Choose AIIMS</p>
                  <p className="text-sm text-gray-600">
                    India&apos;s premier government medical institute. Highest volume of complex
                    neurosurgeries in South Asia (3,000+ annually). World-class research output.
                    Most affordable option with unmatched clinical expertise.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Medanta */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>2. Medanta - The Medicity, Gurugram</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Key Neurosurgeons</p>
                  <p className="mb-4 text-sm text-gray-600">
                    Dr. Rana Patir (Head of Neurosurgery, 25+ years experience, fellowship-trained
                    in skull base and vascular neurosurgery), supported by a team of 10+
                    subspecialised neurosurgeons.
                  </p>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Technology</p>
                  <p className="text-sm text-gray-600">
                    Intraoperative MRI, BrainLab neuronavigation, O-arm imaging, awake craniotomy
                    suite, deep brain stimulation programming lab, CyberKnife
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Cost</p>
                  <p className="mb-4 text-sm font-bold text-green-600">$7,000-$18,000</p>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Why Choose Medanta</p>
                  <p className="text-sm text-gray-600">
                    1,500-bed super-speciality facility with a dedicated Institute of Neurosciences.
                    JCI-accredited. Arabic-speaking international patient coordinators. Infection
                    rate below 1%. On-campus guest house and rehabilitation centre.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fortis Memorial */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>3. Fortis Memorial Research Institute, Gurugram</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Key Neurosurgeons</p>
                  <p className="mb-4 text-sm text-gray-600">
                    Team of fellowship-trained neurosurgeons specialising in brain tumour surgery,
                    endoscopic skull base surgery, paediatric neurosurgery, and complex spinal
                    procedures. 5,000+ neurosurgeries performed.
                  </p>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Technology</p>
                  <p className="text-sm text-gray-600">
                    Neuronavigation (Medtronic StealthStation S8), intraoperative MRI, endoscopic
                    neurosurgery suite, Gamma Knife Perfexion, intraoperative neurophysiological
                    monitoring
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Cost</p>
                  <p className="mb-4 text-sm font-bold text-green-600">$7,500-$18,000</p>
                  <p className="mb-2 text-sm font-semibold text-gray-700">Why Choose Fortis</p>
                  <p className="text-sm text-gray-600">
                    JCI-accredited with a dedicated Neurosciences Centre of Excellence. International
                    patient lounge with Arabic interpreters. Laminar airflow neurosurgery OTs.
                    Same-day second opinions via telemedicine.
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
          <Card className="border-l-4 border-l-red-500 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Day 1-3 (ICU)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Neuro-ICU monitoring with continuous EEG, intracranial pressure monitoring if
                needed. Neurological assessments every 2-4 hours. Pain management with
                multimodal analgesia. Gradual reduction of sedation. Early mobilisation
                assessment by physiotherapist.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-orange-500 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Week 1-2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Transfer to ward. Post-operative MRI/CT to confirm surgical outcome. Suture or
                staple removal at 10-14 days. Speech, occupational, and physical therapy begin.
                Walking with assistance. Assessment of neurological function and cognitive status.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-yellow-500 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Weeks 3-8</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Cleared to fly home (3-4 weeks post-surgery). Continued outpatient neuro-rehab.
                Gradual return to light daily activities. Adjuvant treatment (radiation or
                chemotherapy) may begin for tumour patients. Telemedicine follow-ups with
                surgeon. Anti-seizure medication management.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-green-500 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Months 3-12+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Follow-up MRI at 3 and 6 months. Gradual return to work and normal activities.
                Neuropsychological assessment if needed. DBS patients undergo programming
                optimisation. Seizure medication tapering (epilepsy patients). Full neurological
                recovery continues up to 12-18 months.
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
          title="Neurosurgery India 2025: Cost, Best Brain & Spine Hospitals"
          description="Neurosurgery in India costs $5,000-$20,000 vs $50,000-$200,000 in USA. 92-98% success rate at JCI-accredited hospitals."
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
      <ContextualSidebar treatmentSlug="neurosurgery-india" locale={locale as 'en' | 'ar'} />
        <TrustBadges />
      </section>

      {/* Final CTA */}
      <section className="mb-8 rounded-2xl bg-green-600 px-6 py-12 text-center text-white">
        <h2 className="mb-4 font-serif text-2xl md:text-3xl font-bold">
          Get Expert Neurosurgery Care in India
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-lg text-green-100">
          Receive a personalised treatment plan and cost estimate within 24 hours. Our medical
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
        treatmentName="Neurosurgery"
        lowPrice={6000}
        highPrice={15000}
        url="/en/treatments/neurosurgery-india"
      />
    </div>
  );
}

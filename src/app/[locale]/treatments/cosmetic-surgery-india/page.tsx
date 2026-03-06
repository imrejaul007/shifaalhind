import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  Clock,
  DollarSign,
  Heart,
  ArrowRight,
  Star,
  Shield,
  Users,
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
import { TreatmentSchemas } from '@/components/seo/treatment-schemas';
import { ContextualSidebar } from '@/components/seo/contextual-sidebar';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Cosmetic Surgery India 2025: Cost, Best Plastic Surgeons',
  description: 'Cosmetic surgery in India costs 70-85% less than USA/UK. Board-certified plastic surgeons for rhinoplasty, liposuction, facelift, tummy tuck, breast augmentation & hair transplant. 98% success rate at JCI-accredited hospitals.',
  keywords: 'cosmetic surgery india, plastic surgery india cost, best cosmetic surgeon india, rhinoplasty india, liposuction india, facelift india, tummy tuck india, breast augmentation india, hair transplant india, جراحة التجميل في الهند, عمليات التجميل في الهند, تجميل الأنف في الهند',
  alternates: {
    canonical: 'https://shifaalhind.onrender.com/en/treatments/cosmetic-surgery-india',
    languages: {
      'en-US': 'https://shifaalhind.onrender.com/en/treatments/cosmetic-surgery-india',
      'ar-SA': 'https://shifaalhind.onrender.com/ar/treatments/cosmetic-surgery-india',
      'x-default': 'https://shifaalhind.onrender.com/en/treatments/cosmetic-surgery-india',
    },
  },
};

const COSMETIC_FAQS = [
  {
    question: 'How much does rhinoplasty cost in India?',
    answer: 'Rhinoplasty (nose job) in India costs $2,000-$3,500 compared to $8,000-$15,000 in the USA and $6,000-$12,000 in the UK. This includes surgeon fees, anesthesia, hospital stay, 3D imaging consultation, and 3-4 follow-up visits. Revision rhinoplasty ranges from $3,000-$5,000.'
  },
  {
    question: 'What is the cost of liposuction in India?',
    answer: 'Liposuction in India costs $1,500-$3,500 depending on the number of areas treated. VASER liposuction (ultrasound-assisted) costs $2,500-$4,000. In the USA, the same procedures cost $6,000-$12,000. The price includes compression garments, medications, and post-op care.'
  },
  {
    question: 'How much does a facelift cost in India?',
    answer: 'A full facelift in India costs $3,000-$5,000 vs $12,000-$25,000 in the USA. Mini-facelift starts at $2,000. Deep-plane facelift costs $4,000-$6,000. All packages include general anesthesia, 1-2 night hospital stay, drain care, and follow-up visits.'
  },
  {
    question: 'What is the tummy tuck (abdominoplasty) cost in India?',
    answer: 'Full tummy tuck (abdominoplasty) in India costs $2,500-$4,500 vs $8,000-$15,000 in the USA. Mini tummy tuck starts at $2,000. Extended abdominoplasty with liposuction costs $4,000-$6,000. Includes compression garments, drain management, and scar care.'
  },
  {
    question: 'How safe is cosmetic surgery in India?',
    answer: 'Cosmetic surgery in India has a 98%+ success rate at JCI-accredited hospitals. Top surgeons are board-certified by the Medical Council of India, many with additional US (ABPS), UK (FRCS), or European credentials. Hospitals follow international safety protocols with modern anesthesia, ICU backup, and infection control matching Western standards.'
  },
  {
    question: 'What are the recovery times for common cosmetic procedures?',
    answer: 'Recovery varies: Rhinoplasty 1-2 weeks, Liposuction 1-2 weeks, Facelift 2-3 weeks, Tummy Tuck 2-4 weeks, Breast Augmentation 1-2 weeks, Hair Transplant 7-10 days. Most patients can fly home within 10-21 days. Final cosmetic results appear after 3-6 months as swelling fully resolves.'
  },
  {
    question: 'What credentials should I verify for my plastic surgeon in India?',
    answer: 'Verify: MCh (Plastic Surgery) degree, Medical Council of India registration, membership in ISAPS (International Society of Aesthetic Plastic Surgery) or APSI (Association of Plastic Surgeons of India). Top surgeons also hold FRCS (UK), FACS (USA), or fellowships from American Board of Plastic Surgery. Ask for before/after photos and patient reviews.'
  },
  {
    question: 'Can I combine multiple cosmetic procedures in one trip?',
    answer: 'Yes, combining procedures (e.g., rhinoplasty + chin augmentation, or tummy tuck + liposuction as a "mommy makeover") is common and cost-effective. Combined procedures reduce total recovery time and anesthesia exposure compared to separate surgeries. Your surgeon will assess safety based on total operating time (typically under 6 hours) and your overall health.'
  }
];

const RELATED_ARTICLES = [
  {
    title: 'Cosmetic Surgery Cost India Guide',
    href: '/blog/cosmetic-surgery-cost-india',
    description: 'Complete pricing breakdown for all procedures'
  },
  {
    title: 'Medical Visa India Guide',
    href: '/blog/medical-visa-india-complete-guide',
    description: 'Step-by-step visa process for medical tourists'
  },
  {
    title: 'Best Hospitals Delhi',
    href: '/blog/best-hospitals-delhi-medical-tourism',
    description: 'Top 10 JCI-accredited hospitals in Delhi NCR'
  }
];

export default async function CosmeticSurgeryIndiaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Breadcrumb Schema for SEO */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://shifaalhind.onrender.com' },
        { name: 'Treatments', url: 'https://shifaalhind.onrender.com/treatments' },
        { name: 'Cosmetic Surgery in India', url: 'https://shifaalhind.onrender.com/treatments/cosmetic-surgery-india' }
      ]} />

      {/* Medical Procedure Schema for SEO */}
      <MedicalProcedureSchema
        name="Cosmetic & Plastic Surgery"
        description="Comprehensive cosmetic and plastic surgery procedures including rhinoplasty, liposuction, facelift, tummy tuck, breast augmentation, and hair transplant performed by board-certified surgeons at JCI-accredited hospitals in India."
        procedureType="SurgicalProcedure"
        bodyLocation="Various"
        url="https://shifaalhind.onrender.com/treatments/cosmetic-surgery-india"
      />

      {/* FAQ Schema for SEO */}
      <FAQSchema faqs={COSMETIC_FAQS} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-12 text-white md:py-20">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-serif text-3xl md:text-4xl font-bold md:text-5xl lg:text-6xl">
              Cosmetic & Plastic Surgery in India
            </h1>
            <p className="mb-8 text-xl text-primary-50 md:text-2xl">
              Transform Your Appearance with World-Class Surgeons at 70-85% Lower Cost
            </p>
            <div className="mb-8 flex flex-wrap items-center justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <DollarSign className="h-6 w-6" />
                <span>$2,000 - $8,000</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6" />
                <span>1-5 hours procedure</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6" />
                <span>98% success rate</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600">
                <Link href="/consultation">Get Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary-600">
                <Link href="https://wa.me/919876543210?text=I%20am%20interested%20in%20cosmetic%20surgery%20in%20India">
                  WhatsApp Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container mx-auto -mt-8 px-4">
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-4">
          <Card className="border-t-4 border-t-primary-500 shadow-lg">
            <CardContent className="pt-6 text-center">
              <DollarSign className="mx-auto mb-2 h-8 w-8 text-primary-600" />
              <div className="mb-1 text-2xl font-bold text-primary-600">$2,000 - $8,000</div>
              <div className="text-sm text-gray-600">Procedure Cost Range</div>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-green-500 shadow-lg">
            <CardContent className="pt-6 text-center">
              <CheckCircle2 className="mx-auto mb-2 h-8 w-8 text-green-600" />
              <div className="mb-1 text-2xl font-bold text-green-600">98%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-blue-500 shadow-lg">
            <CardContent className="pt-6 text-center">
              <Shield className="mx-auto mb-2 h-8 w-8 text-blue-600" />
              <div className="mb-1 text-2xl font-bold text-blue-600">70-85%</div>
              <div className="text-sm text-gray-600">Cost Savings</div>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-purple-500 shadow-lg">
            <CardContent className="pt-6 text-center">
              <Clock className="mx-auto mb-2 h-8 w-8 text-purple-600" />
              <div className="mb-1 text-2xl font-bold text-purple-600">1-4 Weeks</div>
              <div className="text-sm text-gray-600">Recovery Time</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900 md:text-4xl">
            Cosmetic Surgery Cost: India vs World
          </h2>
          <Card className="overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Procedure</th>
                    <th className="px-6 py-4 text-center">India</th>
                    <th className="px-6 py-4 text-center">USA</th>
                    <th className="px-6 py-4 text-center">UK</th>
                    <th className="px-6 py-4 text-center">UAE</th>
                    <th className="px-6 py-4 text-center">Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Rhinoplasty (Nose Job)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$2,000 - $3,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">$8,000 - $15,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$7,000 - $13,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$5,000 - $11,000</td>
                    <td className="px-6 py-4 text-center font-bold text-green-600">75%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Liposuction</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$1,500 - $3,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">$6,000 - $12,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$5,500 - $10,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$4,500 - $9,000</td>
                    <td className="px-6 py-4 text-center font-bold text-green-600">70%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Facelift</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$3,000 - $5,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$12,000 - $25,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$10,000 - $20,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$8,000 - $18,000</td>
                    <td className="px-6 py-4 text-center font-bold text-green-600">80%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Tummy Tuck (Abdominoplasty)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$2,500 - $4,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">$8,000 - $15,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$7,000 - $12,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$6,000 - $12,000</td>
                    <td className="px-6 py-4 text-center font-bold text-green-600">70%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Breast Augmentation</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$2,500 - $4,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$8,000 - $12,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$7,000 - $11,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$6,000 - $10,000</td>
                    <td className="px-6 py-4 text-center font-bold text-green-600">70%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Hair Transplant (FUE)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$1,500 - $3,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$8,000 - $15,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$6,000 - $12,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$5,000 - $10,000</td>
                    <td className="px-6 py-4 text-center font-bold text-green-600">80%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
          <p className="mt-4 text-center text-sm text-gray-600">
            * Costs include surgeon fees, hospital charges, anesthesia, implants (if applicable), and post-operative care
          </p>
        </div>
      </section>

      {/* What&apos;s Included */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900 md:text-4xl">
              What&apos;s Included in Your Cosmetic Surgery Package
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                    <CheckCircle2 className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">Consultation & Planning</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Detailed consultation with board-certified surgeon</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>3D imaging and computer simulation of results</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Pre-operative blood work, ECG, and imaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Anesthesia fitness assessment</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">Surgery Day</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>General or local anesthesia by certified anesthesiologist</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>State-of-the-art laminar airflow operating theater</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>FDA-approved implants and materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Continuous monitoring during and after procedure</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">Hospital Stay</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>1-3 night stay in private room (procedure-dependent)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Round-the-clock nursing care</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Pain management and medications included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Compression garments and post-op supplies</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">Follow-up & Scar Management</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>3-5 post-operative follow-up visits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Silicone-based scar management protocol</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Virtual follow-up via WhatsApp/video after return home</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Detailed medical reports for your local physician</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Procedure Comparison: Surgical vs Non-Surgical */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900 md:text-4xl">
            Surgical vs Non-Surgical Cosmetic Procedures
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-t-4 border-t-primary-500 shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-xl text-primary-700">Surgical Procedures</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-primary-600" />
                    <span><strong>Rhinoplasty:</strong> Permanent nose reshaping, bone/cartilage modification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-primary-600" />
                    <span><strong>Liposuction:</strong> Permanent fat removal via suction (VASER, laser-assisted)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-primary-600" />
                    <span><strong>Facelift:</strong> SMAS layer tightening, results last 7-10 years</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-primary-600" />
                    <span><strong>Tummy Tuck:</strong> Excess skin removal, muscle repair, long-lasting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-primary-600" />
                    <span><strong>Recovery:</strong> 1-4 weeks, general anesthesia</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-green-500 shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-xl text-green-700">Non-Surgical Procedures</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span><strong>Botox:</strong> Wrinkle relaxation, lasts 3-6 months ($150-$400)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span><strong>Dermal Fillers:</strong> Volume restoration, lasts 6-18 months ($200-$600)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span><strong>Thread Lift:</strong> Minimally invasive lift, lasts 1-2 years ($800-$1,500)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span><strong>CoolSculpting:</strong> Non-invasive fat reduction ($300-$800/area)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span><strong>Recovery:</strong> 0-3 days, local/no anesthesia</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Top 3 Hospitals */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900 md:text-4xl">
              Top 3 Hospitals for Cosmetic Surgery in India
            </h2>
            <div className="space-y-6">
              <Card className="shadow-lg transition-shadow hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-3">
                        <h3 className="text-xl font-bold text-gray-900">1. Apollo Cosmetic Clinics</h3>
                        <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                          <Star className="h-4 w-4 fill-green-600 text-green-600" />
                          <span className="text-sm font-semibold text-green-700">4.9/5</span>
                        </div>
                      </div>
                      <p className="mb-3 text-gray-600">Chennai, Delhi, Hyderabad | 20,000+ cosmetic procedures | JCI Accredited</p>
                      <div className="mb-3 flex flex-wrap gap-2">
                        <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Key Surgeon: Dr. S. Rajgopal (FRCS)</span>
                        <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">VASER Liposuction</span>
                        <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">3D Imaging Suite</span>
                      </div>
                      <p className="text-sm font-semibold text-primary-600">Cost: $2,500 - $6,000</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg transition-shadow hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-3">
                        <h3 className="text-xl font-bold text-gray-900">2. Fortis Healthcare</h3>
                        <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                          <Star className="h-4 w-4 fill-green-600 text-green-600" />
                          <span className="text-sm font-semibold text-green-700">4.8/5</span>
                        </div>
                      </div>
                      <p className="mb-3 text-gray-600">Delhi NCR, Mumbai, Bangalore | 15,000+ procedures | NABH Accredited</p>
                      <div className="mb-3 flex flex-wrap gap-2">
                        <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Key Surgeon: Dr. Ajaya Kashyap (FACS)</span>
                        <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Mommy Makeover</span>
                        <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Robotic Hair Transplant</span>
                      </div>
                      <p className="text-sm font-semibold text-primary-600">Cost: $2,000 - $5,500</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg transition-shadow hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-3">
                        <h3 className="text-xl font-bold text-gray-900">3. Medanta - The Medicity</h3>
                        <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                          <Star className="h-4 w-4 fill-green-600 text-green-600" />
                          <span className="text-sm font-semibold text-green-700">4.8/5</span>
                        </div>
                      </div>
                      <p className="mb-3 text-gray-600">Gurugram (Delhi NCR) | 12,000+ procedures | NABH & JCI Accredited</p>
                      <div className="mb-3 flex flex-wrap gap-2">
                        <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Key Surgeon: Dr. Anup Dhir (MCh Plastic)</span>
                        <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Laser Liposuction</span>
                        <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">International Patient Wing</span>
                      </div>
                      <p className="text-sm font-semibold text-primary-600">Cost: $2,800 - $6,500</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900 md:text-4xl">
            Cosmetic Surgery Recovery Timeline
          </h2>
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-600">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold">Day 1-3: Immediate Post-Op</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary-600" />
                        <span>Swelling, bruising, and mild-to-moderate discomfort (managed with prescribed medication)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary-600" />
                        <span>Dressings, drains (if applicable), and compression garments applied</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary-600" />
                        <span>Bed rest with head elevation; cold compresses to reduce swelling</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold">Week 1: Early Healing</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
                        <span>Sutures and splints removed (day 5-7); drains removed if placed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
                        <span>Bruising begins to fade; light walking encouraged to prevent blood clots</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
                        <span>Follow-up visit to assess healing and check for complications</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-green-600">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold">Week 2-4: Visible Recovery</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                        <span>80% of swelling resolved; initial results becoming visible</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                        <span>Return to desk work (week 2); light exercise allowed (week 3-4)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                        <span>Most patients cleared to fly home after surgeon approval</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-lg font-bold text-purple-600">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold">Month 2-6: Final Results</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-purple-600" />
                        <span>Residual swelling fully resolves; scars mature and fade</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-purple-600" />
                        <span>All physical activities and sports resume (month 3+)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-purple-600" />
                        <span>Virtual follow-ups with your surgeon via WhatsApp/video call</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <div className="container mx-auto px-4 py-8">
        <InternalLinks links={[
          { text: 'Rhinoplasty India', href: '/treatments/rhinoplasty-india' },
          { text: 'Liposuction India', href: '/treatments/liposuction-india' },
          { text: 'Hair Transplant India', href: '/treatments/hair-transplant-india' },
          { text: 'Breast Augmentation India', href: '/treatments/breast-augmentation-india' },
          { text: 'View All Treatments', href: '/treatments' },
          { text: 'Cost Calculator', href: '/cost-calculator' },
          { text: 'Our Hospitals', href: '/hospitals' },
        ]} />
      </div>

      {/* Social Share */}
      <div className="container mx-auto px-4 py-8">
        <SocialShare
          title="Cosmetic Surgery India 2025: Cost, Best Plastic Surgeons"
          description="Cosmetic surgery in India costs 70-85% less than USA/UK. Board-certified plastic surgeons for rhinoplasty, liposuction, facelift, tummy tuck, breast augmentation & hair transplant."
        />
      </div>

      {/* Related Articles */}
      <div className="container mx-auto px-4 py-8">
        <RelatedArticles articles={RELATED_ARTICLES} />
      </div>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center font-serif text-2xl md:text-3xl font-bold text-gray-900 md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {COSMETIC_FAQS.map((faq, index) => (
              <Card key={index} className="shadow-md">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-lg font-bold text-gray-900">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="container mx-auto">
          <Testimonials testimonials={TREATMENT_TESTIMONIALS['generic']} />
        </div>
      </section>

      {/* Trust Badges */}
      <div className="container mx-auto px-4 py-8">

      {/* Contextual Sidebar - Related Treatment Links */}
      <ContextualSidebar treatmentSlug="cosmetic-surgery-india" locale={locale as 'en' | 'ar'} />
        <TrustBadges />
      </div>

      {/* Final CTA - Green Card with WhatsApp */}
      <section className="container mx-auto px-4 py-16">
        <Card className="mx-auto max-w-4xl border-0 bg-green-600 shadow-2xl">
          <CardContent className="p-8 text-center text-white md:p-12">
            <h2 className="mb-4 font-serif text-2xl md:text-3xl font-bold">
              Ready for Your Cosmetic Transformation?
            </h2>
            <p className="mb-6 text-lg text-green-50">
              Connect with India&apos;s top plastic surgeons. Get a free personalized quote with before/after photos of similar cases.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-white text-green-700 hover:bg-green-50">
                <Link href="https://wa.me/919876543210?text=I%20want%20a%20free%20quote%20for%20cosmetic%20surgery%20in%20India">
                  WhatsApp Us Now
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-green-700">
                <Link href="/consultation">Book Free Consultation</Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-green-100">
              Response within 2 hours. No obligation. 100% confidential.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* SEO: HowTo + Offer + Speakable Schemas */}
      <TreatmentSchemas
        treatmentName="Cosmetic Surgery"
        lowPrice={2000}
        highPrice={8000}
        url="/en/treatments/cosmetic-surgery-india"
      />
    </div>
  );
}

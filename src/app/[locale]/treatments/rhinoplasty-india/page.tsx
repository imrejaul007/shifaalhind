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

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Rhinoplasty India: Nose Job Cost, Best Surgeons & Results 2025',
  description: 'Rhinoplasty (nose job) in India costs $2,500-4,500 vs $8,000-15,000 in USA (70% savings). Top plastic surgeons, 95%+ satisfaction. Get consultation.',
  keywords: 'rhinoplasty india, nose job india, rhinoplasty cost india, nose surgery india, nose reshaping india, best rhinoplasty surgeon india, rhinoplasty mumbai delhi, جراحة تجميل الأنف في الهند, عملية الأنف في الهند',
  alternates: {
    canonical: 'https://shifaalhind.onrender.com/en/treatments/rhinoplasty-india',
    languages: {
      'en-US': 'https://shifaalhind.onrender.com/en/treatments/rhinoplasty-india',
      'ar-SA': 'https://shifaalhind.onrender.com/ar/treatments/rhinoplasty-india',
      'x-default': 'https://shifaalhind.onrender.com/en/treatments/rhinoplasty-india',
    },
  },
};

const DENTAL_RELATED_ARTICLES = [
  {
    title: "Dental Implants India Cost",
    href: "/treatments/dental-implants-india",
    description: "Single tooth $500-800 vs $4,000 USA"
  },
  {
    title: "Hair Transplant India",
    href: "/treatments/hair-transplant-india",
    description: "FUE/FUT from $800 vs $8,000+ abroad"
  },
  {
    title: "Cosmetic Surgery Cost India",
    href: "/blog/cosmetic-surgery-cost-india",
    description: "All procedures 60-75% cheaper"
  }
];

export default function RhinoplastyIndiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
{/* Breadcrumb Schema for SEO */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://shifaalhind.onrender.com' },
        { name: 'Treatments', url: 'https://shifaalhind.onrender.com/treatments' },
        { name: 'Rhinoplasty in India', url: 'https://shifaalhind.onrender.com/treatments/rhinoplasty-india' }
      ]} />

      {/* Medical Procedure Schema for SEO */}
      <MedicalProcedureSchema
        name="Rhinoplasty (Nose Reshaping Surgery)"
        description="Rhinoplasty reshapes the nose for aesthetic or functional improvement by modifying bone, cartilage, and soft tissue."
        procedureType="SurgicalProcedure"
        bodyLocation="Nose"
        
        
        url="https://shifaalhind.onrender.com/treatments/rhinoplasty-india"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-12 text-white md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Rhinoplasty (Nose Job) in India
            </h1>
            <p className="mb-8 text-xl text-primary-50 md:text-2xl">
              World-Class Nose Reshaping Surgery at 70% Lower Cost
            </p>
            <div className="mb-8 flex flex-wrap items-center justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <DollarSign className="h-6 w-6" />
                <span>$2,500 - $4,500</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6" />
                <span>1-2 hours procedure</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6" />
                <span>95%+ satisfaction</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600">
                <Link href="/consultation">Get Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary-600">
                <Link href="/booking">View Before & After</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container -mt-8 px-4">
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-4">
          <Card className="border-t-4 border-t-primary-500 shadow-lg">
            <CardContent className="pt-6 text-center">
              <DollarSign className="mx-auto mb-2 h-8 w-8 text-primary-600" />
              <div className="mb-1 text-2xl font-bold text-primary-600">70% Savings</div>
              <div className="text-sm text-gray-600">vs USA/UK/UAE</div>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-green-500 shadow-lg">
            <CardContent className="pt-6 text-center">
              <CheckCircle2 className="mx-auto mb-2 h-8 w-8 text-green-600" />
              <div className="mb-1 text-2xl font-bold text-green-600">95%+</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-blue-500 shadow-lg">
            <CardContent className="pt-6 text-center">
              <Clock className="mx-auto mb-2 h-8 w-8 text-blue-600" />
              <div className="mb-1 text-2xl font-bold text-blue-600">1-2 Weeks</div>
              <div className="text-sm text-gray-600">Recovery Time</div>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-purple-500 shadow-lg">
            <CardContent className="pt-6 text-center">
              <Users className="mx-auto mb-2 h-8 w-8 text-purple-600" />
              <div className="mb-1 text-2xl font-bold text-purple-600">15,000+</div>
              <div className="text-sm text-gray-600">Procedures Annually</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="container px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Rhinoplasty Cost Comparison
          </h2>
          <Card className="overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Procedure Type</th>
                    <th className="px-6 py-4 text-center">India</th>
                    <th className="px-6 py-4 text-center">USA</th>
                    <th className="px-6 py-4 text-center">UK</th>
                    <th className="px-6 py-4 text-center">UAE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Primary Rhinoplasty</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$2,500 - $3,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">$8,000 - $12,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£6,000 - £9,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 25,000 - 35,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Revision Rhinoplasty</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$3,500 - $5,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$12,000 - $18,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£9,000 - £14,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 35,000 - 50,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Ethnic Rhinoplasty</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$2,800 - $4,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$9,000 - $14,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£7,000 - £10,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 28,000 - 40,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Septoplasty (Functional)</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$1,800 - $2,800</td>
                    <td className="px-6 py-4 text-center text-gray-600">$6,000 - $10,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£4,500 - £7,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 18,000 - 28,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Tip Rhinoplasty</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$2,000 - $3,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">$7,000 - $11,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£5,500 - £8,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 22,000 - 32,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Non-Surgical Rhinoplasty</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">$400 - $800</td>
                    <td className="px-6 py-4 text-center text-gray-600">$1,500 - $3,000</td>
                    <td className="px-6 py-4 text-center text-gray-600">£1,200 - £2,500</td>
                    <td className="px-6 py-4 text-center text-gray-600">AED 5,000 - 10,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
          <p className="mt-4 text-center text-sm text-gray-600">
            * Costs include surgeon fees, hospital charges, anesthesia, and post-operative care
          </p>
        </div>
      </section>

      {/* What&apos;s Included */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
              What&apos;s Included in Your Rhinoplasty Package
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                    <CheckCircle2 className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">Pre-Procedure</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Detailed consultation with surgeon</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>3D imaging & computer simulation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Medical tests (blood work, X-rays, CT scan)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Pre-op counseling & instructions</span>
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
                      <span>General or local anesthesia (as needed)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>1-2 hour procedure by expert surgeon</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>State-of-the-art operation theater</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>1 night hospital stay (if required)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">Post-Operative Care</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Pain medication & antibiotics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Nasal splint & dressings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Follow-up consultations (3-4 visits)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>24/7 emergency support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">Long-Term Support</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>6-month & 1-year follow-up</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Virtual consultations (WhatsApp/video)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Revision policy (if needed)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Medical reports for insurance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Top Clinics */}
      <section className="container px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Top 5 Rhinoplasty Clinics in India
          </h2>
          <div className="space-y-6">
            <Card className="shadow-lg transition-shadow hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">1. Sabka Cosmetic Centre</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.9/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Mumbai, Delhi, Bangalore | 15,000+ rhinoplasty procedures | 98% satisfaction</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">3D Imaging</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Ethnic Expertise</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">25+ Years</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $2,500 - $4,000</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg transition-shadow hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">2. Apollo Cosmetic Clinics</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.8/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Chennai, Hyderabad, Delhi | 12,000+ procedures | ISO certified</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">JCI Accredited</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Latest Technology</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">International Patients</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $2,800 - $4,200</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg transition-shadow hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">3. Fortis La Femme</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.8/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Delhi NCR, Mumbai | 10,000+ procedures | Award-winning surgeons</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Women-Focused</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Luxury Facilities</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">97% Success</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $3,000 - $4,500</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg transition-shadow hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">4. AK Clinics</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.7/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Delhi, Ludhiana, Bangalore | 8,000+ procedures | Celebrity surgeon</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Revision Specialist</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Natural Results</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">GCC Patients</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $2,600 - $3,800</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg transition-shadow hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">5. Cocoona Centre for Aesthetic Transformation</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">4.7/5</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">Delhi, Pune | 6,500+ procedures | European-trained surgeons</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Luxury Setting</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Non-Surgical Options</span>
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">Privacy Focused</span>
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: $2,700 - $4,200</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
              Rhinoplasty Recovery Timeline
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
                          <span>Nasal splint & packing applied, mild pain (managed with medication)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary-600" />
                          <span>Swelling & bruising around eyes and nose (peak at 48 hours)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary-600" />
                          <span>Sleep with head elevated, apply cold compress</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary-600" />
                          <span>Liquid/soft food diet, avoid hot foods</span>
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
                          <span>Splint & stitches removed (day 5-7)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
                          <span>Bruising starts fading (50% reduction)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
                          <span>Can resume light activities (walking)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
                          <span>Avoid blowing nose, strenuous activity</span>
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
                          <span>80% of swelling & bruising resolved</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                          <span>Can return to work (week 2)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                          <span>Light exercise allowed (week 3)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                          <span>Social activities resume, makeup can cover residual bruising</span>
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
                      <h3 className="mb-2 text-xl font-semibold">Month 1-3: Continued Refinement</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-purple-600" />
                          <span>90% of swelling gone, new nose shape visible</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-purple-600" />
                          <span>Resume all normal activities (month 2)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-purple-600" />
                          <span>Nasal tip still settling</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-purple-600" />
                          <span>Can wear glasses (with support)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-lg font-bold text-amber-600">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-semibold">Month 6-12: Final Results</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
                          <span>All swelling resolved (month 12)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
                          <span>Final nose shape and definition visible</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
                          <span>Scar tissue fully matured</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
                          <span>Full sensation returned to nose tip</span>
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

      {/* FAQ Schema for Rich Snippets */}
      <FAQSchema faqs={[
        { question: "How much does rhinoplasty cost in India?", answer: "Rhinoplasty (nose job) in India costs $2,500-4,500 depending on the type: Primary rhinoplasty ($2,500-3,500), Revision rhinoplasty ($3,500-5,000), Ethnic rhinoplasty ($2,800-4,000), Septoplasty ($1,800-2,800), Tip rhinoplasty ($2,000-3,000). This is 70% cheaper than USA ($8,000-15,000), UK (£6,000-9,000), or UAE (AED 25,000-35,000)." },
        { question: "Is rhinoplasty safe in India?", answer: "Yes, rhinoplasty in India is very safe when performed at JCI-accredited hospitals by board-certified plastic surgeons. India has 15,000+ rhinoplasty procedures annually with 95%+ satisfaction rates. Top clinics like Sabka Cosmetic Centre, Apollo, and Fortis use latest technology (3D imaging, computer simulation) and follow international safety protocols. Success rate is 97%+ for primary rhinoplasty." },
        { question: "How long is recovery from nose job?", answer: "Rhinoplasty recovery timeline: Week 1 (splint removal, 50% swelling reduced), Week 2 (return to work, 80% swelling gone), Month 1 (90% final result visible), Month 6-12 (100% final shape, all swelling resolved). Most patients resume social activities in 2 weeks and exercise in 3-4 weeks. Full healing takes 12 months." },
        { question: "What is the success rate of rhinoplasty in India?", answer: "Rhinoplasty success rate in India is 95-98% at top clinics. Primary rhinoplasty has 97% success rate, revision rhinoplasty 90-92%, ethnic rhinoplasty 96%, and septoplasty 98%. Patient satisfaction is 95%+ with natural-looking results. Complication rate is less than 2% when done by experienced surgeons at accredited facilities." },
        { question: "Can rhinoplasty fix breathing problems?", answer: "Yes, functional rhinoplasty (septoplasty) corrects breathing problems caused by deviated septum, nasal valve collapse, or turbinate hypertrophy. Cost in India: $1,800-2,800 vs $6,000-10,000 in USA. Success rate: 98% for improved breathing. Often combined with cosmetic rhinoplasty in one procedure. Recovery: 1-2 weeks." },
        { question: "Is rhinoplasty permanent?", answer: "Yes, rhinoplasty results are permanent. The reshaped nose structure remains for life. However, nose continues subtle aging changes like rest of face. Revision rate is 5-10% (usually minor adjustments). Proper surgical technique, experienced surgeon, and following post-op care ensure long-lasting natural results. Most patients need only one procedure." },
        { question: "What is ethnic rhinoplasty?", answer: "Ethnic rhinoplasty is nose reshaping that preserves ethnic features while improving aesthetics. Common for Middle Eastern, Asian, African patients. Focuses on subtle refinements (tip definition, bridge augmentation, nostril reshaping) while maintaining cultural identity. Indian surgeons have expertise in diverse ethnicities. Cost: $2,800-4,000. Success rate: 96%." },
        { question: "How to choose best rhinoplasty surgeon in India?", answer: "Choose surgeon with: 1) Board certification in plastic surgery, 2) 1,000+ rhinoplasty procedures experience, 3) Before/after photo portfolio, 4) JCI-accredited hospital affiliation, 5) 3D imaging technology, 6) Positive patient reviews (4.7+ rating), 7) Revision rhinoplasty expertise, 8) International patient experience. Top surgeons: Dr. Rajat Gupta, Dr. Debraj Shome, Dr. Anup Dhir." }
      ]} />

      {/* FAQ Section */}
      <section className="container px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Do I need to stay in India long after rhinoplasty?</h3>
                <p className="text-gray-600">
                  Recommended stay is 10-14 days total: 1-2 days pre-op consultations, 1 day procedure + 1 night hospital, 7-10 days recovery + splint removal. You can travel home after splint removal. Virtual follow-ups via WhatsApp/video for months 1-12.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Will my nose look natural after surgery?</h3>
                <p className="text-gray-600">
                  Yes, modern rhinoplasty focuses on natural-looking results that complement your facial features. Indian surgeons use 3D computer simulation to preview results before surgery. Goal is subtle refinement, not drastic change. 95%+ patient satisfaction with natural appearance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">What if I&apos;m not happy with results?</h3>
                <p className="text-gray-600">
                  Most clinics offer revision policy within 6-12 months if medically indicated. However, 95%+ patients are satisfied with primary rhinoplasty results. Final judgment should be made after 12 months when all swelling resolves. Minor touch-ups cost 30-50% of original price.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Can I combine rhinoplasty with other procedures?</h3>
                <p className="text-gray-600">
                  Yes, rhinoplasty is commonly combined with: chin augmentation (balanced profile), eyelid surgery (facial harmony), facelift (anti-aging), septoplasty (breathing improvement). Combining procedures saves cost and recovery time. Total cost: $4,000-7,000 for multiple procedures.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">What is the minimum age for rhinoplasty?</h3>
                <p className="text-gray-600">
                  Minimum age is 18 years (after facial growth complete). For females: 16-17 with parental consent. For males: 18-19 years. Exceptions for breathing problems or severe deformity. Psychological maturity important. Most surgeons prefer 20+ for cosmetic rhinoplasty to ensure realistic expectations and stable facial structure.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Can I wear glasses after rhinoplasty?</h3>
                <p className="text-gray-600">
                  Avoid glasses for 6-8 weeks post-op. Use contact lenses or tape glasses to forehead (not nose bridge). After 8 weeks, lightweight glasses okay with surgeon approval. Heavy frames require 3-4 months healing. Alternative: headband-style glasses holders during recovery. Final clearance at 3-month follow-up.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">What about smoking before/after rhinoplasty?</h3>
                <p className="text-gray-600">
                  Stop smoking 4 weeks before and 4 weeks after surgery. Nicotine restricts blood flow, increases infection risk (5x higher), delays healing, causes skin necrosis, and poor scar formation. Vaping/e-cigarettes also prohibited. Nicotine patches not recommended. Smokers have 40% higher complication rate. Some surgeons refuse surgery if patient smokes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">When can I see final rhinoplasty results?</h3>
                <p className="text-gray-600">
                  60% visible at 2 weeks (social activities), 80% at 2 months (most swelling gone), 90% at 6 months (refinement visible), 100% at 12-18 months (all swelling resolved). Nasal tip takes longest to refine. Thick skin patients need 18-24 months. Patience crucial - final result worth the wait.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">What anesthesia is used for rhinoplasty?</h3>
                <p className="text-gray-600">
                  General anesthesia (asleep) for most rhinoplasties - safest for 1-2 hour procedure. Local anesthesia + IV sedation for minor revisions or tip-only surgery (30-45 min). Experienced anesthesiologist monitors vitals throughout. Wake up in recovery room after 15-30 minutes. Minimal nausea with modern anesthetics.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Are there risks or complications with rhinoplasty?</h3>
                <p className="text-gray-600">
                  Serious complications are rare (&lt;2% at top clinics). Common minor issues: temporary numbness (90% resolve), minor asymmetry (correctable), breathing difficulty initially (swelling), prolonged swelling (thick skin). Serious risks: infection (1%), bleeding requiring re-operation (0.5%), poor scarring (&lt;1%), anesthesia reactions. Choosing experienced surgeon at JCI hospital minimizes all risks.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">What is open vs closed rhinoplasty?</h3>
                <p className="text-gray-600">
                  <strong>Open:</strong> External incision on columella (vertical strip between nostrils), better visibility for complex cases, slight scar (fades in 6 months). <strong>Closed:</strong> All incisions inside nose, no visible scars, less swelling, faster recovery. Surgeon decides based on complexity. 70% use open for better precision. Both achieve excellent results.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Can I fly immediately after rhinoplasty?</h3>
                <p className="text-gray-600">
                  Wait 7-10 days minimum before flying (after splint removal). Air pressure changes can increase swelling and discomfort. If emergency travel needed: use nasal decongestant spray, stay hydrated, walk every hour, sleep upright, avoid alcohol. Best to wait 2 weeks for long international flights. Get surgeon clearance before booking return flight.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">When can I use makeup and skincare after rhinoplasty?</h3>
                <p className="text-gray-600">
                  Face makeup: 1 week (avoid nose area). Nose makeup: 3-4 weeks (after stitches dissolve). Gentle face washing: 3 days. Sunscreen: 2 weeks (SPF 50+ essential for 6 months). Avoid: exfoliants (2 months), facials (3 months), nose threading/waxing (6 months). Moisturizer okay after 1 week. Cover bruising with concealer after week 2.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Does insurance cover rhinoplasty in India?</h3>
                <p className="text-gray-600">
                  Cosmetic rhinoplasty: Not covered by insurance (elective procedure). Functional rhinoplasty for breathing (septoplasty): Sometimes covered if medically necessary. Submit pre-authorization to insurer with medical reports. GCC insurance rarely covers treatment in India. However, 70% cost savings make self-pay affordable ($2,500-4,500 vs $12,000+ insured cost abroad).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">How painful is rhinoplasty recovery?</h3>
                <p className="text-gray-600">
                  Pain level: 3-4/10 (moderate discomfort, not severe pain). Day 1-2: Throbbing headache, sinus pressure (controlled with painkillers). Week 1: Stuffiness, mild ache (like bad sinus infection). Week 2+: Minimal pain, mostly discomfort from swelling. Pain medication needed 3-5 days only. Most patients surprised it&apos;s less painful than expected.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Will I have visible scars after rhinoplasty?</h3>
                <p className="text-gray-600">
                  Closed rhinoplasty: No external scars (all incisions inside nose). Open rhinoplasty: Small scar on columella - barely visible after 6 months, undetectable after 1 year. Scar treatment: silicone gel, massage, avoid sun exposure. Indian surgeons expert in scar minimization techniques. 99% of patients report no noticeable scarring at 1-year follow-up.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Can I exercise after rhinoplasty?</h3>
                <p className="text-gray-600">
                  Walking: Immediately (helps circulation). Light cardio: 3 weeks. Running/cycling: 4-6 weeks. Weight lifting: 6-8 weeks. Contact sports: 3-6 months. Yoga: 3 weeks (avoid inversions 2 months). Swimming: 6 weeks (chlorine irritation risk). Swimming pools okay after 2 months. Listen to body - stop if pain or bleeding occurs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">How long do rhinoplasty results last?</h3>
                <p className="text-gray-600">
                  Rhinoplasty results are permanent - reshaped bone and cartilage don&apos;t change. Nose continues natural aging (skin thickens, tip drops slightly after 20+ years), but surgical changes remain. Trauma or injury can alter shape. Revision rate 5-10% (usually minor tweaks, not structural failure). Proper technique and care ensure lifelong results in 90%+ patients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      
      {/* Testimonials Section */}
      <Testimonials
        testimonials={TREATMENT_TESTIMONIALS['generic']}
        title="Success Stories from Our Rhinoplasty Patients"
        subtitle="Real transformations from GCC patients who achieved life-changing results"
      />

      {/* Trust Badges Section */}
      <TrustBadges />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-16 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
              Ready for Your Transformation?
            </h2>
            <p className="mb-8 text-xl text-primary-50">
              Get free consultation, cost estimate & before/after photos from top rhinoplasty surgeons
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600">
                <Link href="/consultation">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary-600">
                <Link href="/booking">View Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Share */}
      <div className="container px-4 py-8">
        <SocialShare
          title="Rhinoplasty India: Nose Job Cost, Best Surgeons & Results 2025"
          description="Rhinoplasty (nose job) in India costs $2,500-4,500 vs $8,000-15,000 in USA (70% savings). Top plastic surgeons, 95%+ satisfaction."
        />
      </div>

      {/* Related Articles */}
      <div className="container px-4 pb-16">
        <RelatedArticles articles={DENTAL_RELATED_ARTICLES} />
      </div>

      {/* Internal Links */}
      <div className="container px-4 pb-16">
        <InternalLinks variant="compact" />
      </div>
    </div>
  );
}

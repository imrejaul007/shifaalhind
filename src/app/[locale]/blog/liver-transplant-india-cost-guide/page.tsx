import { Metadata } from 'next';
import Link from 'next/link';
import BlogArticleLayout from '@/components/blog/blog-article-layout';
import { Card, CardContent } from '@/components/ui/card';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles, CANCER_RELATED_ARTICLES } from '@/components/blog/related-articles';
import { InternalLinks } from '@/components/seo/internal-links';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { BreadcrumbSchema } from '@/components/seo/breadcrumb-schema';
import { ArticleSchema, DEFAULT_AUTHOR, DEFAULT_PUBLISHER } from '@/components/seo/article-schema';

export const metadata: Metadata = {
  title: 'Liver Transplant Cost India [2025] - Save 75% | Success Rate 90%+',
  description: 'Complete liver transplant cost guide for India. Living donor & deceased donor options. Top JCI hospitals with 90%+ success rates. Save $100,000+ vs USA. Free consultation.',
  keywords: [
    'liver transplant cost india',
    'liver transplant india vs usa',
    'living donor liver transplant india',
    'best liver transplant hospitals india',
    'liver transplant success rate india',
    'liver transplant surgery india',
    'hepatic transplant india cost',
    'liver disease treatment india',
    'liver failure treatment india',
    'liver transplant india for gcc patients',
    'تكلفة زرع الكبد في الهند',
    'زراعة الكبد في الهند',
    'مستشفيات زراعة الكبد الهند',
  ],
  alternates: {
    canonical: 'https://shifaalhind.onrender.com/en/blog/liver-transplant-india-cost-guide',
    languages: {
      'en-US': 'https://shifaalhind.onrender.com/en/blog/liver-transplant-india-cost-guide',
      'ar-SA': 'https://shifaalhind.onrender.com/ar/blog/liver-transplant-india-cost-guide',
      'x-default': 'https://shifaalhind.onrender.com/en/blog/liver-transplant-india-cost-guide',
    },
  },
};

export const dynamic = 'force-dynamic';

export default function LiverTransplantIndiaPage() {
  return (
    <BlogArticleLayout
      title="Liver Transplant Cost India [2025] - Complete Guide with 90%+ Success Rate"
      excerpt="Comprehensive guide to liver transplant in India. Living donor & deceased donor options available. Top JCI hospitals with 90%+ success rates. Save $100,000-$150,000 compared to USA/UK. World-class hepatology care."
      author="Shifa AlHind Medical Team"
      publishedDate="January 2025"
      lastUpdated="January 2025"
      readTime="15 min"
      breadcrumbTitle="Liver Transplant India Cost"
    >
      {/* Breadcrumb Schema for SEO */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://shifaalhind.onrender.com' },
        { name: 'Blog', url: 'https://shifaalhind.onrender.com/blog' },
        { name: 'Liver Transplant in India - Cost & Complete Guide', url: 'https://shifaalhind.onrender.com/blog/liver-transplant-india-cost-guide' }
      ]} />

      {/* Article Schema for SEO */}
      <ArticleSchema
        headline="Liver Transplant in India - Cost & Complete Guide 2025"
        description="Complete guide to liver transplant in India including costs, success rates, top hospitals, and recovery process."
        image="https://shifaalhind.onrender.com/images/blog/liver-transplant.jpg"
        datePublished="2025-01-15"
        dateModified="2025-01-15"
        author={DEFAULT_AUTHOR}
        publisher={DEFAULT_PUBLISHER}
        url="https://shifaalhind.onrender.com/blog/liver-transplant-india-cost-guide"
      />

      {/* Introduction */}
      <div className="prose prose-lg max-w-none">
        <p className="text-lg leading-relaxed text-gray-700">
          India has emerged as a global leader in <strong>liver transplantation</strong>, performing over 2,500
          successful transplants annually with success rates exceeding 90% at top centers. Indian surgeons have
          pioneered innovative techniques including living donor liver transplants, making life-saving surgery
          accessible to thousands of patients worldwide.
        </p>

        <p className="text-lg leading-relaxed text-gray-700">
          For GCC patients (UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain), India offers
          <strong> 70-80% cost savings</strong> on liver transplants while maintaining the highest international
          standards. A complete liver transplant package in India costs $35,000-$60,000 compared to $250,000-$400,000
          in the USA, with comparable or better outcomes.
        </p>

        <p className="text-lg leading-relaxed text-gray-700">
          Whether you need a <strong>living donor transplant, deceased donor transplant, or pediatric liver
          transplant</strong>, India&apos;s top hepatology centers provide comprehensive care with experienced teams
          that have performed thousands of successful procedures.
        </p>
      </div>

      {/* Cost Comparison Table */}
      <div className="my-12">
        <h2 className="mb-6 text-3xl font-bold text-primary-700">
          Liver Transplant Cost: India vs USA vs UK vs UAE/GCC
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full rounded-lg bg-white shadow-lg">
            <thead className="bg-primary-500 text-white">
              <tr>
                <th className="p-3 text-left">Transplant Type</th>
                <th className="p-3 text-left">India</th>
                <th className="p-3 text-left">USA</th>
                <th className="p-3 text-left">UK</th>
                <th className="p-3 text-left">UAE/GCC</th>
                <th className="p-3 text-left">Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">Living Donor Liver Transplant</td>
                <td className="p-3 font-semibold text-primary-600">$40,000-$55,000</td>
                <td className="p-3">$250,000-$400,000</td>
                <td className="p-3">£180,000-£300,000</td>
                <td className="p-3">$180,000-$320,000</td>
                <td className="p-3 font-bold text-primary-600">80%</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-3">Deceased Donor Liver Transplant</td>
                <td className="p-3 font-semibold text-primary-600">$35,000-$50,000</td>
                <td className="p-3">$220,000-$350,000</td>
                <td className="p-3">£160,000-£280,000</td>
                <td className="p-3">$160,000-$300,000</td>
                <td className="p-3 font-bold text-primary-600">78%</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Pediatric Liver Transplant</td>
                <td className="p-3 font-semibold text-primary-600">$38,000-$52,000</td>
                <td className="p-3">$240,000-$380,000</td>
                <td className="p-3">£170,000-£290,000</td>
                <td className="p-3">$170,000-$310,000</td>
                <td className="p-3 font-bold text-primary-600">79%</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-3">Split Liver Transplant</td>
                <td className="p-3 font-semibold text-primary-600">$42,000-$58,000</td>
                <td className="p-3">$260,000-$420,000</td>
                <td className="p-3">£190,000-£310,000</td>
                <td className="p-3">$190,000-$330,000</td>
                <td className="p-3 font-bold text-primary-600">80%</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Pre-Transplant Evaluation (Complete Workup)</td>
                <td className="p-3 font-semibold text-primary-600">$1,500-$2,500</td>
                <td className="p-3">$8,000-$15,000</td>
                <td className="p-3">$6,000-$12,000</td>
                <td className="p-3">$5,500-$11,000</td>
                <td className="p-3 font-bold text-primary-600">75%</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-3">Post-Transplant Care (1st Year, Including Medications)</td>
                <td className="p-3 font-semibold text-primary-600">$8,000-$12,000</td>
                <td className="p-3">$50,000-$80,000</td>
                <td className="p-3">$40,000-$70,000</td>
                <td className="p-3">$35,000-$65,000</td>
                <td className="p-3 font-bold text-primary-600">80%</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Complete Package (Surgery + 6 Months Follow-Up)</td>
                <td className="p-3 font-semibold text-primary-600">$45,000-$65,000</td>
                <td className="p-3">$280,000-$450,000</td>
                <td className="p-3">$200,000-$350,000</td>
                <td className="p-3">$200,000-$380,000</td>
                <td className="p-3 font-bold text-primary-600">78%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-lg bg-gradient-to-r from-primary-50 to-blue-50 p-6">
          <p className="text-lg font-semibold text-primary-800">
            💰 Average Savings for GCC Patients: <span className="text-2xl">$150,000-$250,000</span>
          </p>
          <p className="mt-2 text-gray-700">
            Example: A living donor liver transplant in India costs $40,000-$55,000 all-inclusive (surgery, hospital stay,
            ICU, medications, follow-up) vs $250,000-$400,000 in the USA. Most GCC patients save over $200,000.
          </p>
        </div>
      </div>

      {/* What's Included Section */}
      <div className="my-12">
        <h2 className="mb-6 text-3xl font-bold text-primary-700">
          What&apos;s Included in India&apos;s Liver Transplant Package?
        </h2>

        <Card className="bg-gradient-to-r from-green-50 to-blue-50">
          <CardContent className="p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-3 font-semibold text-primary-700">Pre-Transplant (2-4 Weeks):</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Complete medical evaluation & blood tests</li>
                  <li>• CT/MRI angiography of liver</li>
                  <li>• Liver biopsy (if needed)</li>
                  <li>• Cardiac & pulmonary assessment</li>
                  <li>• Infectious disease screening (HIV, Hep B/C)</li>
                  <li>• Psychological evaluation</li>
                  <li>• Nutritionist & physical therapy consultation</li>
                  <li>• Donor evaluation (if living donor)</li>
                  <li>• Insurance/financial counseling</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-primary-700">Surgery & Hospital Stay (21-30 Days):</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Liver transplant surgery (8-12 hours)</li>
                  <li>• Surgeon team fees (2-3 surgeons)</li>
                  <li>• Anesthesia team</li>
                  <li>• ICU care (7-10 days)</li>
                  <li>• General ward (10-14 days)</li>
                  <li>• All medications & immunosuppressants</li>
                  <li>• Blood products & transfusions</li>
                  <li>• Post-op imaging & lab tests</li>
                  <li>• 24/7 hepatology team support</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-primary-700">Post-Discharge Follow-Up (6 Months):</h4>
                <ul className="space-y-2 text-sm">
                  <li>• 6-month immunosuppression medication supply</li>
                  <li>• Weekly follow-ups (first month)</li>
                  <li>• Monthly consultations (months 2-6)</li>
                  <li>• Liver function tests & drug level monitoring</li>
                  <li>• Ultrasound & Doppler studies</li>
                  <li>• Biopsy (if rejection suspected)</li>
                  <li>• Dietary & lifestyle counseling</li>
                  <li>• 24/7 emergency helpline</li>
                  <li>• Telemedicine follow-up for GCC patients</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-primary-700">For International Patients:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Airport pickup & drop (patient + 2 attendants)</li>
                  <li>• Medical visa assistance</li>
                  <li>• Accommodation (patient family, 30 days)</li>
                  <li>• Language interpreter (Arabic/English)</li>
                  <li>• Medical tourism coordinator</li>
                  <li>• Halal food & prayer facilities</li>
                  <li>• SIM card & local travel assistance</li>
                  <li>• Medical reports translation</li>
                  <li>• Insurance documentation</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Liver Transplant Centers */}
      <div className="my-12">
        <h2 className="mb-6 text-3xl font-bold text-primary-700">
          Top 5 Liver Transplant Centers in India
        </h2>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 text-2xl font-semibold text-primary-600">1. Global Health City, Chennai</h3>
              <p className="mb-4 text-gray-600">Asia&apos;s Largest Liver Transplant Center - JCI & NABH Accredited</p>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 font-semibold">Achievements:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>4,500+ liver transplants performed</strong></li>
                    <li>• 90%+ success rate (5-year survival)</li>
                    <li>• Highest volume in India (400+ transplants/year)</li>
                    <li>• Pioneered living donor techniques in India</li>
                    <li>• Team led by Dr. Mohamed Rela (15,000+ surgeries)</li>
                    <li>• Pediatric liver transplant specialists</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 font-semibold">Specialties:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Living donor liver transplant (LDLT)</li>
                    <li>• Deceased donor liver transplant (DDLT)</li>
                    <li>• Pediatric & infant liver transplants</li>
                    <li>• ABO incompatible transplants</li>
                    <li>• Re-transplantation for graft failure</li>
                    <li>• Complex hepatobiliary surgery</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 rounded-lg bg-primary-50 p-4">
                <p className="text-sm font-semibold text-primary-800">
                  Cost: $40,000-$55,000 (complete package)
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 text-2xl font-semibold text-primary-600">2. Apollo Hospitals, Chennai & Delhi</h3>
              <p className="mb-4 text-gray-600">India&apos;s First Successful Liver Transplant - JCI Accredited</p>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 font-semibold">Achievements:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>3,000+ liver transplants since 1998</strong></li>
                    <li>• 88% success rate (5-year survival)</li>
                    <li>• Multi-city liver transplant program</li>
                    <li>• 250+ transplants annually</li>
                    <li>• Advanced ECMO & liver support systems</li>
                    <li>• International patient services in 120+ languages</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 font-semibold">Specialties:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Adult & pediatric liver transplants</li>
                    <li>• Hepatitis B/C & liver cirrhosis</li>
                    <li>• Liver cancer (HCC) with transplant</li>
                    <li>• Acute liver failure management</li>
                    <li>• Living & deceased donor programs</li>
                    <li>• Post-transplant long-term care</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 rounded-lg bg-primary-50 p-4">
                <p className="text-sm font-semibold text-primary-800">
                  Cost: $42,000-$58,000 (complete package)
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 text-2xl font-semibold text-primary-600">3. Fortis Memorial Research Institute, Gurgaon</h3>
              <p className="mb-4 text-gray-600">North India&apos;s Premier Liver Transplant Center - JCI & NABH Accredited</p>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 font-semibold">Achievements:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>2,000+ liver transplants performed</strong></li>
                    <li>• 92% success rate (highest in North India)</li>
                    <li>• 200+ transplants annually</li>
                    <li>• Dedicated 40-bed transplant ICU</li>
                    <li>• Advanced robotic liver surgery program</li>
                    <li>• Bloodless liver transplant techniques</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 font-semibold">Specialties:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Living & deceased donor transplants</li>
                    <li>• Swap donor transplants</li>
                    <li>• Domino liver transplants</li>
                    <li>• Combined liver-kidney transplants</li>
                    <li>• Minimally invasive donor surgery</li>
                    <li>• Comprehensive hepatology services</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 rounded-lg bg-primary-50 p-4">
                <p className="text-sm font-semibold text-primary-800">
                  Cost: $38,000-$52,000 (complete package)
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 text-2xl font-semibold text-primary-600">4. Medanta - The Medicity, Gurgaon</h3>
              <p className="mb-4 text-gray-600">State-of-the-Art Liver & Biliary Sciences - NABH Accredited</p>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 font-semibold">Achievements:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>1,800+ liver transplants since 2009</strong></li>
                    <li>• 89% success rate (5-year survival)</li>
                    <li>• 180+ transplants annually</li>
                    <li>• Dedicated liver transplant tower</li>
                    <li>• Advanced ECMO & dialysis support</li>
                    <li>• 24/7 liver transplant services</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 font-semibold">Specialties:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Adult & pediatric liver transplants</li>
                    <li>• ABO incompatible transplants</li>
                    <li>• High MELD score patients</li>
                    <li>• Re-transplantation</li>
                    <li>• Living donor liver transplant</li>
                    <li>• Hepatocellular carcinoma treatment</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 rounded-lg bg-primary-50 p-4">
                <p className="text-sm font-semibold text-primary-800">
                  Cost: $39,000-$54,000 (complete package)
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 text-2xl font-semibold text-primary-600">5. Max Super Speciality Hospital, Delhi NCR</h3>
              <p className="mb-4 text-gray-600">Comprehensive Liver Care & Transplantation - JCI & NABH Accredited</p>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 font-semibold">Achievements:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>1,500+ liver transplants performed</strong></li>
                    <li>• 88% success rate (5-year survival)</li>
                    <li>• 150+ transplants annually</li>
                    <li>• Comprehensive pre & post-transplant care</li>
                    <li>• Dedicated transplant coordinators</li>
                    <li>• International patient department</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 font-semibold">Specialties:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Living & deceased donor transplants</li>
                    <li>• Pediatric liver transplants</li>
                    <li>• Acute & chronic liver failure</li>
                    <li>• Liver cancer management</li>
                    <li>• Post-transplant care & monitoring</li>
                    <li>• Hepatitis management programs</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 rounded-lg bg-primary-50 p-4">
                <p className="text-sm font-semibold text-primary-800">
                  Cost: $37,000-$51,000 (complete package)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Living vs Deceased Donor */}
      <div className="my-12">
        <h2 className="mb-6 text-3xl font-bold text-primary-700">
          Living Donor vs Deceased Donor Liver Transplant
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-2 border-primary-200">
            <CardContent className="p-6">
              <h3 className="mb-4 text-2xl font-semibold text-primary-600">Living Donor Transplant (LDLT)</h3>

              <div className="space-y-4">
                <div>
                  <p className="mb-2 font-semibold text-gray-800">How It Works:</p>
                  <p className="text-sm text-gray-700">
                    A healthy family member (parent, sibling, adult child, spouse) donates a portion (usually right lobe,
                    60-70%) of their liver. Both donor and recipient livers regenerate to near-normal size within 6-8 weeks.
                  </p>
                </div>

                <div>
                  <p className="mb-2 font-semibold text-gray-800">Advantages:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>✓ No waiting list - surgery scheduled when ready</li>
                    <li>✓ Better survival rates (90%+ at 5 years)</li>
                    <li>✓ Shorter ischemia time (better graft function)</li>
                    <li>✓ Planned surgery (better preparation)</li>
                    <li>✓ Younger, healthier livers typically</li>
                  </ul>
                </div>

                <div>
                  <p className="mb-2 font-semibold text-gray-800">Donor Requirements:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Age 18-55 years</li>
                    <li>• Blood type compatible (or ABO incompatible protocols)</li>
                    <li>• BMI &lt; 30</li>
                    <li>• No chronic diseases</li>
                    <li>• Voluntarily willing (no coercion)</li>
                    <li>• Psychological evaluation cleared</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-primary-50 p-4">
                  <p className="text-sm font-semibold text-primary-800">
                    💰 Cost: $40,000-$55,000 | Success Rate: 90%+ (5-year)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200">
            <CardContent className="p-6">
              <h3 className="mb-4 text-2xl font-semibold text-blue-600">Deceased Donor Transplant (DDLT)</h3>

              <div className="space-y-4">
                <div>
                  <p className="mb-2 font-semibold text-gray-800">How It Works:</p>
                  <p className="text-sm text-gray-700">
                    Liver from a brain-dead donor (accident victim, stroke) is matched with recipients on transplant
                    waiting list based on blood type, severity (MELD score), and waiting time. India has growing
                    organ donation programs.
                  </p>
                </div>

                <div>
                  <p className="mb-2 font-semibold text-gray-800">Advantages:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>✓ No family member needs surgery</li>
                    <li>✓ Whole liver available (vs partial lobe)</li>
                    <li>✓ No donor risk/recovery</li>
                    <li>✓ Suitable when no living donor available</li>
                    <li>✓ Slightly lower cost</li>
                  </ul>
                </div>

                <div>
                  <p className="mb-2 font-semibold text-gray-800">Considerations:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Waiting list (typically 6-18 months in India)</li>
                    <li>• Unpredictable timing (must be ready 24/7)</li>
                    <li>• Longer ischemia time (transport delays)</li>
                    <li>• MELD score priority system</li>
                    <li>• Emergency surgery preparation needed</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-blue-50 p-4">
                  <p className="text-sm font-semibold text-blue-800">
                    💰 Cost: $35,000-$50,000 | Success Rate: 85-88% (5-year)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Patient Success Story */}
      <div className="my-12">
        <h2 className="mb-6 text-3xl font-bold text-primary-700">
          Real Patient Success Story
        </h2>

        <Card className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-blue-50">
          <CardContent className="p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-2xl text-white">
                👤
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-700">Ahmed Al-Mansoori, 48 years</h3>
                <p className="text-sm text-gray-600">From Abu Dhabi, UAE | Transplanted at Global Health City, Chennai</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Condition:</strong> End-stage liver cirrhosis due to Hepatitis C. MELD score: 24 (high priority).
                Developed hepatic encephalopathy and ascites. Listed for transplant in UAE with 18-24 month wait time.
              </p>

              <p>
                <strong>Why India:</strong> &quot;My brother volunteered to donate, but waiting period in UAE was 18+ months
                and cost estimate was $280,000. Through Shifa AlHind, I connected with Global Health City Chennai where
                Dr. Rela&apos;s team performed 400+ transplants annually with 92% success rate. Total cost: $48,000 including
                my brother&apos;s donor evaluation and surgery.&quot;
              </p>

              <p>
                <strong>Experience:</strong> &quot;We arrived in Chennai 3 weeks before surgery. My brother&apos;s donor workup
                took 2 weeks - every test was thorough. Surgery day: 10-hour operation. I spent 9 days in ICU with amazing care.
                Hospital stay: 24 days total. Recovery was challenging but the hepatology team visited daily. Arabic interpreter
                helped us tremendously.&quot;
              </p>

              <p>
                <strong>Outcome:</strong> &quot;It&apos;s been 3 years since my transplant. My liver function is perfect
                (normal ALT, AST, bilirubin). I take immunosuppressants (tacrolimus, mycophenolate) and follow up via telemedicine
                every 3 months. My brother fully recovered within 8 weeks and is back to normal life. We both consider this a
                miracle - we saved $230,000 and I got my life back.&quot;
              </p>

              <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
                <p className="mb-2 text-lg font-semibold text-primary-800">Cost Breakdown:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Surgery (donor + recipient): $38,000</li>
                  <li>• Hospital stay (24 days): $6,000</li>
                  <li>• Post-transplant medications (6 months): $2,500</li>
                  <li>• Follow-up consultations (6 months): $1,500</li>
                  <li>• <strong>Total: $48,000</strong> (vs $280,000 in UAE)</li>
                  <li>• <strong>Savings: $232,000 (83%)</strong></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* FAQ Schema for Rich Snippets */}
      <FAQSchema faqs={[
        { question: "How much does liver transplant cost in India?", answer: "Living donor liver transplant costs $40,000-$60,000 in India vs $400,000-$800,000 in USA (85-92% savings). Deceased donor: $35,000-$55,000, Pediatric: $45,000-$65,000. Includes pre-transplant evaluation, surgery, 3-4 week hospital stay, immunosuppressants, and 1-year follow-up." },
        { question: "What are liver transplant success rates in India?", answer: "1-year survival: 90-95% (living donor), 85-90% (deceased donor). 5-year survival: 75-85%. Top centers like Apollo, Fortis, Global Health City perform 200+ transplants annually with outcomes matching USA/Europe. Success depends on patient health, donor quality, and post-transplant care adherence." },
        { question: "How long is the wait for deceased donor liver in India?", answer: "Average wait: 6-18 months depending on blood type, MELD score, and region. Chennai/Delhi have shorter waits (6-12 months) vs other cities (12-18 months). Living donor transplant can be scheduled within 4-6 weeks after evaluation. GCC patients often opt for living donor to avoid wait time." },
        { question: "Can I bring a family member as living donor?", answer: "Yes, blood relatives (parents, siblings, children) are permitted. Spouse allowed with approval. Non-relatives not permitted in India. Donor must be 18-60 years, compatible blood type, healthy liver function, and pass psychological evaluation. Donor surgery costs included in package price." }
      ]} />

      {/* FAQs */}
      <div className="my-12">
        <h2 className="mb-6 text-3xl font-bold text-primary-700">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-xl font-semibold text-primary-600">
                1. What is the success rate of liver transplant in India?
              </h3>
              <p className="text-gray-700">
                Top liver transplant centers in India achieve <strong>85-92% success rates (5-year survival)</strong>,
                comparable to USA/UK. Global Health City Chennai reports 90%+ survival for living donor transplants.
                Factors affecting success: donor type (living vs deceased), recipient MELD score (lower is better), center
                experience (choose high-volume centers with 200+ transplants/year), and post-transplant compliance. India&apos;s
                best surgeons have performed 4,500+ transplants with excellent outcomes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-xl font-semibold text-primary-600">
                2. How much does a liver transplant cost in India for GCC patients?
              </h3>
              <p className="text-gray-700">
                Liver transplant costs in India range from <strong>$35,000-$60,000 (all-inclusive package)</strong> depending
                on hospital, transplant type, and complications. Living donor transplant: $40,000-$55,000. Deceased donor:
                $35,000-$50,000. Package includes pre-transplant evaluation, surgery, 21-30 day hospital stay, ICU care,
                medications, 6-month follow-up, and international patient services. This is 75-80% cheaper than USA ($250,000-$400,000)
                or UAE ($180,000-$320,000). Most GCC patients save $150,000-$250,000.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-xl font-semibold text-primary-600">
                3. Who can be a living liver donor in India?
              </h3>
              <p className="text-gray-700">
                Living donor criteria: <strong>Age 18-55 years, blood type compatible</strong> (or ABO incompatible protocols
                available at advanced centers), <strong>BMI &lt; 30</strong>, no chronic diseases (diabetes, hypertension, heart
                disease), <strong>emotionally related</strong> (parent, sibling, child, spouse) or altruistic non-related donors
                (requires ethics committee approval), <strong>voluntarily willing</strong> (no financial coercion), liver anatomy
                suitable (right lobe 60-70% of total), and <strong>psychological fitness</strong>. Donor evaluation takes 2-3 weeks
                with extensive testing. Donor safety: 99.5%+ (mortality risk &lt; 0.3%). Full recovery in 8-12 weeks.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-xl font-semibold text-primary-600">
                4. How long is the waiting time for deceased donor liver transplant in India?
              </h3>
              <p className="text-gray-700">
                Waiting time varies by region and MELD score: <strong>South India (Tamil Nadu, Karnataka): 6-12 months</strong>
                (better organ donation rates). <strong>North India (Delhi, Punjab): 12-24 months</strong>. High MELD scores
                (&gt; 25) get priority and may receive organ within 3-6 months. Low MELD (&lt; 15) may wait 18-24 months.
                Living donor transplant eliminates waiting - surgery scheduled when donor evaluation complete (3-4 weeks).
                For GCC patients, <strong>living donor option is recommended</strong> as deceased donor waiting may require
                extended stay in India or multiple trips.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-xl font-semibold text-primary-600">
                5. How long do I need to stay in India for liver transplant?
              </h3>
              <p className="text-gray-700">
                Total stay: <strong>6-8 weeks minimum</strong>. Pre-transplant evaluation: 2-3 weeks (recipient + donor workup,
                can be done partially remotely). Hospital stay post-surgery: 21-30 days (ICU 7-10 days, general ward 14-20 days).
                Post-discharge recovery: 2-3 weeks (close monitoring, weekly follow-ups, adjustment of medications). After discharge,
                remain near hospital for weekly visits. Most international patients stay <strong>8-10 weeks total</strong> before
                returning home. Long-term follow-up via telemedicine. Plan for family member to accompany patient for entire duration.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-xl font-semibold text-primary-600">
                6. What are the risks and complications of liver transplant?
              </h3>
              <p className="text-gray-700">
                <strong>Early complications (first 3 months):</strong> Rejection (15-20%, usually treatable with steroids),
                infection (10-15%, bacterial/viral/fungal), bile leak/stricture (5-10%), bleeding (3-5%), vascular complications
                (2-3%). <strong>Late complications (after 3 months):</strong> Chronic rejection (5%), recurrent disease
                (Hepatitis C, cancer), immunosuppression side effects (kidney damage, diabetes). <strong>Mortality risk:</strong>
                In-hospital: 2-5%, 1-year: 10-15%, 5-year: 8-12%. Top Indian centers have <strong>lower complication rates</strong>
                due to experience and advanced ICU care. Most complications are manageable with prompt treatment.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-xl font-semibold text-primary-600">
                7. Will my insurance cover liver transplant in India?
              </h3>
              <p className="text-gray-700">
                <strong>Coverage varies by policy:</strong> Many international insurance plans cover medical tourism if prior approved.
                GCC insurance companies increasingly approve Indian hospitals (especially JCI-accredited) due to cost savings.
                <strong>Steps:</strong> (1) Get pre-authorization letter from hospital with cost estimate, (2) Submit to insurance
                with medical necessity documents, (3) Request for approval (highlight cost savings - insurer saves $150,000+).
                <strong>Common scenarios:</strong> Full coverage approved (insurer saves money), partial coverage (patient pays
                deductible/co-pay), no coverage (patient self-pay but still saves 75%). Many hospitals have insurance coordinators
                to assist. Most GCC patients self-pay and still save significantly vs local costs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-xl font-semibold text-primary-600">
                8. What is post-transplant life like? What medications are needed?
              </h3>
              <p className="text-gray-700">
                <strong>Lifelong immunosuppression required</strong> to prevent rejection: Tacrolimus or Cyclosporine (calcineurin
                inhibitors), Mycophenolate (anti-proliferative), Steroids (prednisone, tapered over time). <strong>Monitoring:</strong>
                Weekly blood tests (first month), monthly (months 2-6), quarterly (after 6 months). <strong>Lifestyle:</strong>
                Avoid alcohol permanently, healthy diet (low salt, balanced nutrition), regular exercise, infection prevention
                (avoid crowds, sick contacts). <strong>Medication costs in India:</strong> $150-$250/month (80% cheaper than USA).
                <strong>Quality of life:</strong> 90%+ patients return to normal activities within 6 months. Life expectancy approaches
                normal with good compliance. Annual follow-up recommended.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="my-12">
        <Card className="border-2 border-primary-500 bg-gradient-to-r from-primary-50 to-blue-50">
          <CardContent className="p-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-700">
              Ready to Explore Liver Transplant in India?
            </h2>
            <p className="mb-6 text-lg text-gray-700">
              Connect with India&apos;s top liver transplant centers. Get expert evaluation, living donor assessment,
              and transparent cost estimates. Save $150,000-$250,000 with 90%+ success rates.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/consultation"
                className="rounded-lg bg-primary-600 px-8 py-3 font-semibold text-white transition hover:bg-primary-700"
              >
                Free Consultation
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border-2 border-primary-600 px-8 py-3 font-semibold text-primary-600 transition hover:bg-primary-50"
              >
                Contact Us
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-600">
              📞 WhatsApp: +91-XXXXXXXXXX | 📧 Email: info@shifaalhind.com
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Internal Links */}
      <InternalLinks
        title="Related Medical Tourism Resources"
        links={[
          {
                    "title": "Top Transplant Centers in India",
                    "href": "/hospitals",
                    "description": "Leading liver transplant hospitals with high success rates."
          },
          {
                    "title": "Kidney Transplant Guide",
                    "href": "/treatments",
                    "description": "Another major transplant procedure available in India."
          },
          {
                    "title": "Free Consultation",
                    "href": "/consultation",
                    "description": "Get transplant evaluation and cost estimate."
          }
]}
        variant="compact"
      />

      {/* Social Sharing */}
      <SocialShare
        title="Liver Transplant Cost India: Complete Guide 2025"
        url="/blog/liver-transplant-india-cost-guide"
        description="Liver transplant in India costs 70-80% less than Western countries. Living donor, deceased donor, pediatric transplants explained."
      />

      {/* Related Articles */}
      <RelatedArticles articles={CANCER_RELATED_ARTICLES} />
    </BlogArticleLayout>
  );
}

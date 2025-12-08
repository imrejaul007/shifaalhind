import { Metadata } from 'next';
import BlogArticleLayout from '@/components/blog/blog-article-layout';
import { Card, CardContent } from '@/components/ui/card';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles, DENTAL_RELATED_ARTICLES } from '@/components/blog/related-articles';
import { InternalLinks } from '@/components/seo/internal-links';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { BreadcrumbSchema } from '@/components/seo/breadcrumb-schema';
import { ArticleSchema, DEFAULT_AUTHOR, DEFAULT_PUBLISHER } from '@/components/seo/article-schema';

export const metadata: Metadata = {
  title: 'Dental Tourism India - Complete Guide [2025] Save 70-80%',
  description: 'Complete dental tourism India guide. Dental implants $300-$800 vs $3,000-$5,000 USA. Top clinics, procedures, quality standards.',
  keywords: [
    'dental tourism india',
    'dental implants cost india',
    'dental treatment india',
    'india dental tourism',
    'cheap dental implants india',
    'cosmetic dentistry india',
    'veneers cost india',
    'dental tourism india from uae',
    'dental tourism india dubai',
    'السياحة الأسنان في الهند',
    'تكلفة زراعة الأسنان في الهند',
  ],
};

export const dynamic = 'force-dynamic';

export default function DentalTourismIndiaPage() {
  return (
    <BlogArticleLayout
      title="Dental Tourism India - Complete Guide [2025]"
      excerpt="Discover how you can save 70-80% on dental treatments in India while receiving world-class care from internationally trained dentists."
      author="Shifa AlHind Medical Team"
      publishedDate="January 2025"
      lastUpdated="January 2025"
      readTime="10 min"
      breadcrumbTitle="Dental Tourism India"
    >

      {/* Breadcrumb Schema for SEO */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://shifaalhind.onrender.com' },
        { name: 'Blog', url: 'https://shifaalhind.onrender.com/blog' },
        { name: 'Dental Tourism in India - Complete Guide', url: 'https://shifaalhind.onrender.com/blog/dental-tourism-india-complete-guide' }
      ]} />

      {/* Article Schema for SEO */}
      <ArticleSchema
        headline="Dental Tourism in India - Complete Guide 2025"
        description="Complete guide to dental tourism in India. Learn about costs, procedures, top dental clinics, and quality of care."
        image="https://shifaalhind.onrender.com/images/blog/dental-tourism.jpg"
        datePublished="2025-01-15"
        dateModified="2025-01-15"
        author={DEFAULT_AUTHOR}
        publisher={DEFAULT_PUBLISHER}
        url="https://shifaalhind.onrender.com/blog/dental-tourism-india-complete-guide"
      />
      <section className="mb-8">
        <p className="text-lg leading-relaxed">
          Dental tourism in India offers <strong>70-80% cost savings</strong> on implants, crowns, veneers,
          and orthodontics compared to USA, UK, and GCC countries. With ISO-certified clinics, US/Europe-trained
          dentists, and German/Swiss implants, India has become the top destination for affordable dental care.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          This guide covers dental treatment costs, top clinics, quality standards, and what to expect
          when traveling to India for dental work.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Dental Treatment Cost Comparison</h2>

        <div className="overflow-x-auto">
          <table className="w-full rounded-lg bg-white shadow-lg">
            <thead className="bg-primary-500 text-white">
              <tr>
                <th className="p-3 text-left">Procedure</th>
                <th className="p-3 text-left">India</th>
                <th className="p-3 text-left">USA</th>
                <th className="p-3 text-left">UK</th>
                <th className="p-3 text-left">UAE/GCC</th>
                <th className="p-3 text-left">Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">Dental Implant (single)</td>
                <td className="p-3 font-semibold text-primary-600">$300-$800</td>
                <td className="p-3">$3,000-$5,000</td>
                <td className="p-3">$2,500-$4,000</td>
                <td className="p-3">$2,000-$3,500</td>
                <td className="p-3 font-bold text-primary-600">75-80%</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-3">Porcelain Crown</td>
                <td className="p-3 font-semibold text-primary-600">$150-$300</td>
                <td className="p-3">$1,000-$2,000</td>
                <td className="p-3">$800-$1,500</td>
                <td className="p-3">$700-$1,200</td>
                <td className="p-3 font-bold text-primary-600">80%</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Porcelain Veneers (per tooth)</td>
                <td className="p-3 font-semibold text-primary-600">$200-$400</td>
                <td className="p-3">$1,000-$2,500</td>
                <td className="p-3">$800-$2,000</td>
                <td className="p-3">$700-$1,800</td>
                <td className="p-3 font-bold text-primary-600">78%</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-3">Full Mouth Implants (All-on-4)</td>
                <td className="p-3 font-semibold text-primary-600">$4,000-$6,500</td>
                <td className="p-3">$25,000-$50,000</td>
                <td className="p-3">$20,000-$40,000</td>
                <td className="p-3">$18,000-$35,000</td>
                <td className="p-3 font-bold text-primary-600">85%</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Root Canal Treatment</td>
                <td className="p-3 font-semibold text-primary-600">$80-$150</td>
                <td className="p-3">$800-$1,500</td>
                <td className="p-3">$600-$1,200</td>
                <td className="p-3">$500-$1,000</td>
                <td className="p-3 font-bold text-primary-600">82%</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-3">Teeth Whitening (professional)</td>
                <td className="p-3 font-semibold text-primary-600">$100-$200</td>
                <td className="p-3">$500-$1,000</td>
                <td className="p-3">$400-$800</td>
                <td className="p-3">$350-$700</td>
                <td className="p-3 font-bold text-primary-600">75%</td>
              </tr>
              <tr>
                <td className="p-3">Invisalign (full treatment)</td>
                <td className="p-3 font-semibold text-primary-600">$1,500-$2,500</td>
                <td className="p-3">$5,000-$8,000</td>
                <td className="p-3">$4,000-$6,500</td>
                <td className="p-3">$3,500-$6,000</td>
                <td className="p-3 font-bold text-primary-600">70%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm italic text-gray-600">
          *Costs include procedure, materials, and follow-up. Prices vary by clinic and implant brand
          (Straumann, Nobel Biocare, Zimmer).
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Top 5 Dental Clinics in India</h2>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 text-2xl font-semibold text-primary-600">1. Sabka Dentist</h3>
              <p className="mb-4 text-gray-600">India&apos;s Largest Dental Chain - ISO Certified</p>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 font-semibold">Specialties:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Dental implants (Nobel Biocare, Straumann)</li>
                    <li>• Cosmetic dentistry (veneers, smile design)</li>
                    <li>• Orthodontics (braces, Invisalign)</li>
                    <li>• Full mouth rehabilitation</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 font-semibold">Achievements:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• 200+ clinics across India</li>
                    <li>• 1 million+ patients treated</li>
                    <li>• US/UK-trained dentists</li>
                    <li>• 5-year implant warranty</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 text-2xl font-semibold text-primary-600">2. Dr. Teeth Dental Care</h3>
              <p className="mb-4 text-gray-600">Premium Dental Care - Multiple Locations</p>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 font-semibold">Specialties:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Advanced implantology</li>
                    <li>• Laser dentistry</li>
                    <li>• Smile makeovers</li>
                    <li>• Sedation dentistry</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 font-semibold">Achievements:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• ISO 9001:2015 certified</li>
                    <li>• German technology (Sirona, Dentsply)</li>
                    <li>• 98% success rate for implants</li>
                    <li>• International patient services</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 text-2xl font-semibold text-primary-600">3. Clove Dental</h3>
              <p className="mb-4 text-gray-600">Multi-Specialty Dental Chain</p>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 font-semibold">Specialties:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Single sitting root canal</li>
                    <li>• Immediate loading implants</li>
                    <li>• Pediatric dentistry</li>
                    <li>• Geriatric dental care</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 font-semibold">Achievements:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• 400+ clinics pan-India</li>
                    <li>• Digital dentistry (CAD/CAM)</li>
                    <li>• 24/7 emergency dental care</li>
                    <li>• Transparent pricing</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 text-2xl font-semibold text-primary-600">4. Apollo White Dental</h3>
              <p className="mb-4 text-gray-600">Part of Apollo Hospitals Group</p>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 font-semibold">Specialties:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Full mouth reconstruction</li>
                    <li>• Zirconia implants & crowns</li>
                    <li>• Gum disease treatment</li>
                    <li>• TMJ disorder treatment</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 font-semibold">Achievements:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• 100+ centers in 30+ cities</li>
                    <li>• Apollo Hospitals backing</li>
                    <li>• Swiss implant systems</li>
                    <li>• Lifetime support guarantee</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 text-2xl font-semibold text-primary-600">5. The Dental Roots</h3>
              <p className="mb-4 text-gray-600">Specialized Implant & Cosmetic Center</p>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 font-semibold">Specialties:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Zygomatic implants</li>
                    <li>• Bone grafting & sinus lift</li>
                    <li>• Hollywood smile makeovers</li>
                    <li>• Full arch restoration</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 font-semibold">Achievements:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• 10,000+ implants placed</li>
                    <li>• 3D treatment planning</li>
                    <li>• Guided implant surgery</li>
                    <li>• Specialized in complex cases</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">What to Expect: Dental Tourism Timeline</h2>

        <Card className="bg-gradient-to-r from-primary-50 to-blue-50">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div>
                <h4 className="mb-2 font-semibold text-primary-700">Before You Travel:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Share dental X-rays/scans for treatment planning</li>
                  <li>• Receive cost estimate and treatment plan</li>
                  <li>• Book appointments (most procedures completed in 5-10 days)</li>
                  <li>• Arrange medical visa (e-visa available)</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 font-semibold text-primary-700">Week 1 (Days 1-3):</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Comprehensive dental exam and 3D imaging</li>
                  <li>• Finalize treatment plan</li>
                  <li>• Begin procedures (impressions, extractions if needed)</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 font-semibold text-primary-700">Week 1-2 (Days 4-10):</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Implant placement (healing time: 3-6 months typically)</li>
                  <li>• Temporary crowns/veneers fitted</li>
                  <li>• OR immediate loading implants (same day teeth)</li>
                  <li>• Final crowns/veneers cemented (if no implants)</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 font-semibold text-primary-700">Follow-Up:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Virtual follow-ups after 1, 3, 6 months</li>
                  <li>• Final crowns placed (can return or done locally)</li>
                  <li>• Lifetime support via telemedicine</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

            {/* FAQ Schema for Rich Snippets */}
      <FAQSchema faqs={[
        { question: "How much do dental implants cost in India?", answer: "Single implant: $400-800 (vs $3,000-6,000 USA, 85-90% savings). Full mouth reconstruction: $3,000-8,000 (vs $30,000-80,000 USA). Includes implant, abutment, crown, all consultations." },
        { question: "Are Indian dentists qualified for complex procedures?", answer: "Yes. Top dentists have BDS/MDS degrees, 10-20 years experience, trained at NYU, UCLA, King's College London. Many are members of American Dental Association, International Congress of Oral Implantologists." },
        { question: "How long do I need to stay for dental treatment?", answer: "Depends on procedure: Implants (5-7 days for temporary crowns, return after 3-4 months for permanent), Veneers (2-3 visits over 5-7 days), Root canal (1-2 days), Smile makeover (7-10 days)." },
        { question: "What dental materials are used in India?", answer: "Same brands as USA/Europe: Straumann, Nobel Biocare (implants), 3M ESPE, IPS e.max (crowns/veneers), Dentsply Sirona (materials). FDA/CE certified materials with 10-25 year warranties." },
        { question: "Is dental work in India painful?", answer: "No. Modern pain management with local anesthesia, laughing gas, IV sedation, or general anesthesia for complex procedures. Many clinics offer pain-free laser dentistry for gum treatments." },
        { question: "What if I have problems after returning home?", answer: "Most clinics offer 1-5 year warranties on dental work. If issues arise, they'll coordinate with local dentist for repairs or offer free revision on return visit. Tele-dentistry follow-up available." }
      ]} />

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-xl font-semibold">
                Are dental implants in India the same quality as USA/Europe?
              </h3>
              <p className="text-gray-700">
                Yes. Top clinics use the same brands (Straumann, Nobel Biocare, Zimmer) that are FDA/CE approved.
                Dentists are trained in US/Europe and follow international protocols. The quality is identical;
                the cost is lower due to reduced overhead and labor costs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-xl font-semibold">
                How long does it take to complete dental work in India?
              </h3>
              <p className="text-gray-700">
                <strong>Veneers/Crowns:</strong> 5-7 days.
                <strong> Implants (traditional):</strong> 2 visits - placement (7 days) + crowns after 3-6 months.
                <strong> Immediate loading:</strong> 7-10 days for complete treatment.
                <strong> Orthodontics:</strong> Initial setup in 3-5 days, remote monitoring afterward.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-xl font-semibold">
                What if my implant fails after returning home?
              </h3>
              <p className="text-gray-700">
                Top clinics offer 5-10 year warranties on implants. If failure occurs, replacement is free (you only
                pay travel). Most implants have 95-98% success rates. Clinics coordinate with local dentists for
                minor issues and provide telemedicine support.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-xl font-semibold">
                Can I combine dental work with a vacation?
              </h3>
              <p className="text-gray-700">
                Yes! Many patients visit tourist destinations after recovery. Popular: Taj Mahal (Agra), Goa beaches,
                Kerala backwaters, Rajasthan palaces. Most dental work allows light tourism after 2-3 days. Clinics
                can help arrange accommodation near tourist spots.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-xl font-semibold">
                How do I choose the right dental clinic?
              </h3>
              <p className="text-gray-700">
                Look for: (1) ISO/international certification, (2) US/Europe-trained dentists, (3) Premium implant
                brands (Straumann, Nobel), (4) Before/after portfolio, (5) International patient reviews, (6) Warranty
                on work, (7) 3D imaging and digital dentistry. We help match you to the best clinic for your needs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-xl font-semibold">
                Is dental tourism worth it even with travel costs?
              </h3>
              <p className="text-gray-700">
                Absolutely. Example: Full mouth implants cost $4,500 in India vs $30,000 in USA. Even with $2,000
                for flights, hotel, and meals, you save $23,500 (78%). Most patients save $10,000-$50,000 depending
                on procedures. The savings far exceed travel expenses.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Internal Links */}
      <InternalLinks
        title="Related Medical Tourism Resources"
        links={[
          {
                    "title": "Top Dental Clinics in India",
                    "href": "/hospitals",
                    "description": "International standard dental clinics in Mumbai, Delhi, and Bangalore."
          },
          {
                    "title": "Knee Replacement Cost Guide",
                    "href": "/blog/knee-replacement-cost-india-vs-world",
                    "description": "Another popular medical tourism procedure with huge cost savings."
          },
          {
                    "title": "Free Consultation",
                    "href": "/consultation",
                    "description": "Get personalized dental treatment plan and quote."
          }
]}
        variant="compact"
      />

      {/* Social Sharing */}
      <SocialShare
        title="Dental Tourism India Complete Guide 2025"
        url="/blog/dental-tourism-india-complete-guide"
        description="Save 60-80% on dental treatment in India. Implants, veneers, crowns, orthodontics at world-class clinics with international dentists."
      />

      {/* Related Articles */}
      <RelatedArticles articles={DENTAL_RELATED_ARTICLES} />
    </BlogArticleLayout>
  );
}

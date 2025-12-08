import { Metadata } from 'next';
import BlogArticleLayout from '@/components/blog/blog-article-layout';
import { Card, CardContent } from '@/components/ui/card';
import { InternalLinks } from '@/components/seo/internal-links';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles, DIABETES_RELATED_ARTICLES } from '@/components/blog/related-articles';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { BreadcrumbSchema } from '@/components/seo/breadcrumb-schema';
import { ArticleSchema, DEFAULT_AUTHOR, DEFAULT_PUBLISHER } from '@/components/seo/article-schema';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Medical Tourism Insurance India 2025 | Coverage, Cost & Best Plans',
  description: 'Complete guide to medical tourism insurance for India. Coverage options, costs, best international insurers, claim process. Protect yourself during medical treatment abroad.',
  keywords: [
    'medical tourism insurance india',
    'travel insurance medical treatment india',
    'international medical insurance india',
    'medical tourism insurance cost',
    'best insurance for medical tourism',
  ],
};

export default function MedicalTourismInsuranceIndiaPage() {
  return (
    <BlogArticleLayout
      title="Medical Tourism Insurance India 2025: Complete Guide"
      excerpt="Comprehensive guide to medical tourism insurance for patients traveling to India. Learn about coverage options, costs ($50-200), best insurers, what's covered, claim process, and whether you need it."
      author="Shifa AlHind Medical Team"
      publishedDate="October 2025"
      lastUpdated="October 2025"
      readTime="12 min"
      breadcrumbTitle="Medical Tourism Insurance"

      {/* Breadcrumb Schema for SEO */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://shifaalhind.onrender.com' },
        { name: 'Blog', url: 'https://shifaalhind.onrender.com/blog' },
        { name: 'Medical Tourism Insurance for India - Complete Guide', url: 'https://shifaalhind.onrender.com/blog/medical-tourism-insurance-india' }
      ]} />

      {/* Article Schema for SEO */}
      <ArticleSchema
        headline="Medical Tourism Insurance for India - Complete Guide 2025"
        description="Complete guide to medical tourism insurance for India including coverage, costs, providers, and what to look for."
        image="https://shifaalhind.onrender.com/images/blog/medical-insurance.jpg"
        datePublished="2025-10-01"
        dateModified="2025-10-01"
        author={DEFAULT_AUTHOR}
        publisher={DEFAULT_PUBLISHER}
        url="https://shifaalhind.onrender.com/blog/medical-tourism-insurance-india"
      />
    >
      {/* Introduction - Shorter content for context limits */}
      <Card>
        <CardContent className="pt-6">
          <p className="text-lg leading-relaxed mb-4">
            Planning medical treatment in India? <strong>Medical tourism insurance</strong> provides crucial protection during your trip, covering complications, emergency care, and travel-related issues. While India&apos;s hospitals are world-class, having insurance gives you peace of mind.
          </p>
          <p className="text-lg leading-relaxed">
            This guide covers everything about medical tourism insurance: what&apos;s covered, costs ($50-200), best insurers, whether you need it, and how to claim.
          </p>
        </CardContent>
      </Card>

      {/* What is Covered */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">What Medical Tourism Insurance Covers</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold mb-2">Post-Procedure Complications</h3>
              <p className="text-sm text-muted-foreground">Covers emergency care if complications arise after planned surgery (infections, bleeding, readmission). Typical limit: $50,000-100,000.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-2">Emergency Medical Treatment</h3>
              <p className="text-sm text-muted-foreground">Covers unrelated medical emergencies (heart attack, accident, sudden illness). Does not cover pre-existing conditions.</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold mb-2">Medical Evacuation</h3>
              <p className="text-sm text-muted-foreground">Air ambulance to home country if treatment unavailable in India (rare but expensive). Covered up to $500,000.</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold mb-2">Trip Cancellation/Delays</h3>
              <p className="text-sm text-muted-foreground">Reimburses non-refundable costs if you must cancel/delay trip due to medical emergency before departure.</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="font-semibold mb-2">Lost Luggage/Documents</h3>
              <p className="text-sm text-muted-foreground">Covers lost baggage, passport, medical documents during travel. Typically $1,000-3,000 limit.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cost Comparison */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">Medical Tourism Insurance Cost</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">Coverage Level</th>
                  <th className="border p-3 text-right">Cost (2 weeks)</th>
                  <th className="border p-3 text-right">Medical Coverage</th>
                  <th className="border p-3 text-left">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-medium">Basic</td>
                  <td className="border p-3 text-right">$50-80</td>
                  <td className="border p-3 text-right">$25,000-50,000</td>
                  <td className="border p-3">Simple procedures (dental, cataract)</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border p-3 font-medium">Standard</td>
                  <td className="border p-3 text-right">$100-150</td>
                  <td className="border p-3 text-right">$50,000-100,000</td>
                  <td className="border p-3">Moderate surgeries (knee, spine)</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Comprehensive</td>
                  <td className="border p-3 text-right">$150-200</td>
                  <td className="border p-3 text-right">$100,000-250,000</td>
                  <td className="border p-3">Complex surgeries (heart, transplant)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Best Insurers */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">Best Medical Tourism Insurance Providers</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold">1. IMG Global (International Medical Group)</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Patriot Travel Medical Insurance: $50-150 for 2 weeks</li>
                <li>Coverage: $50,000-$1,000,000</li>
                <li>Benefits: Post-procedure complications, emergency evacuation, 24/7 support</li>
              </ul>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">2. Seven Corners</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>RoundTrip Choice: $100-200 for 2 weeks</li>
                <li>Coverage: $100,000-$500,000</li>
                <li>Benefits: Covers medical tourism complications, trip cancellation</li>
              </ul>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold">3. Allianz Global Assistance</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>OneTrip Prime: $80-180 for 2 weeks</li>
                <li>Coverage: $50,000-$250,000</li>
                <li>Benefits: Emergency medical, trip interruption, baggage loss</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Do You Need It */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">Do You Need Medical Tourism Insurance?</h2>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="font-semibold text-green-800 dark:text-green-200 mb-2">✅ Recommended For:</p>
              <ul className="list-disc list-inside text-sm text-green-700 dark:text-green-300 space-y-1">
                <li>Complex surgeries (heart, transplants, cancer)</li>
                <li>Patients over 60 years old</li>
                <li>Multiple pre-existing conditions</li>
                <li>Long recovery period (&gt;3 weeks)</li>
                <li>Traveling alone without family support</li>
              </ul>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">⚠️ Optional For:</p>
              <ul className="list-disc list-inside text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                <li>Simple procedures (dental, cataract, minor surgeries)</li>
                <li>Young, healthy patients</li>
                <li>Short stay (&lt;1 week)</li>
                <li>If hospital offers complication coverage</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Internal Links */}
      <InternalLinks
        title="Related Resources"
        links={[
          {
            title: 'Medical Visa India Guide',
            href: '/blog/medical-visa-india-complete-guide',
            description: 'Complete visa application guide',
          },
          {
            title: 'Dubai to India Medical Tourism',
            href: '/blog/dubai-to-india-medical-tourism',
            description: 'Guide for UAE patients',
          },
          {
            title: 'Free Consultation',
            href: '/consultation',
            description: 'Discuss insurance options',
          },
        ]}
        variant="compact"
      />

      {/* FAQ */}
            {/* FAQ Schema for Rich Snippets */}
      <FAQSchema faqs={[
        { question: "Does my home insurance cover treatment abroad?", answer: "Usually no. Most domestic insurance policies don't cover planned treatment abroad. Check with your insurer. Some international plans (like Cigna Global, Bupa International) may cover pre-approved medical tourism." },
        { question: "Does medical tourism insurance cover the planned surgery?", answer: "No, it covers complications, not the surgery itself. You pay for the surgery as planned. Insurance covers emergencies, complications, evacuation, and travel issues." },
        { question: "How do I file a claim?", answer: "Keep all receipts and medical reports. File claim within 30 days of treatment. Submit: hospital bills, doctor reports, receipts, policy number. Most insurers reimburse within 2-4 weeks." },
        { question: "What if I have complications after returning home?", answer: "Coverage extends 30-90 days post-return (depends on policy). Must be directly related to procedure in India. Contact insurer immediately if complications arise at home." }
      ]} />

      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">1. Does my home insurance cover treatment abroad?</h3>
              <p className="text-muted-foreground">
                <strong>Usually no.</strong> Most domestic insurance policies don&apos;t cover planned treatment abroad. Check with your insurer. Some international plans (like Cigna Global, Bupa International) may cover pre-approved medical tourism.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">2. Does medical tourism insurance cover the planned surgery?</h3>
              <p className="text-muted-foreground">
                <strong>No, it covers complications, not the surgery itself.</strong> You pay for the surgery as planned. Insurance covers emergencies, complications, evacuation, and travel issues.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">3. How do I file a claim?</h3>
              <p className="text-muted-foreground">
                <strong>Keep all receipts and medical reports.</strong> File claim within 30 days of treatment. Submit: hospital bills, doctor reports, receipts, policy number. Most insurers reimburse within 2-4 weeks.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">4. What if I have complications after returning home?</h3>
              <p className="text-muted-foreground">
                <strong>Coverage extends 30-90 days post-return</strong> (depends on policy). Must be directly related to procedure in India. Contact insurer immediately if complications arise at home.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Share */}
      <SocialShare
        title="Medical Tourism Insurance India 2025"
        url="/blog/medical-tourism-insurance-india"
        description="Complete guide to medical tourism insurance for India. Coverage, costs, best insurers, and claim process."
      />

      {/* Related Articles */}
      <RelatedArticles articles={DIABETES_RELATED_ARTICLES} />
    </BlogArticleLayout>
  );
}

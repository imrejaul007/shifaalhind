import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles, DIABETES_RELATED_ARTICLES } from '@/components/blog/related-articles';
import { InternalLinks } from '@/components/seo/internal-links';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thyroid Surgery in India 2025: Thyroidectomy Cost, Best Hospitals, Recovery | Total vs Partial',
  description: 'Thyroid surgery (thyroidectomy) in India. Total thyroidectomy $1,800-3,000, Partial thyroidectomy $1,500-2,500, Thyroid nodule removal $1,200-2,200. Top hospitals, 98% success rate, save 75-85% vs USA. 1-2 weeks recovery.',
  keywords: [
    'thyroid surgery india',
    'thyroidectomy cost india',
    'thyroid removal india',
    'thyroid hospital india',
    'thyroid nodule surgery india',
    'thyroid cancer surgery india',
    'جراحة الغدة الدرقية في الهند',
    'تكلفة استئصال الغدة الدرقية في الهند',
    'مستشفيات الغدة الدرقية في الهند',
  ],
};

export const dynamic = 'force-dynamic';

export default function ThyroidSurgeryIndiaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* FAQ Schema for Rich Snippets */}
      <FAQSchema faqs={[
        { question: "How much does thyroid surgery cost in India?", answer: "Total thyroidectomy costs $1,800-3,000 in India vs $12,000-25,000 in USA (75-85% savings). Partial thyroidectomy: $1,500-2,500, Thyroid nodule removal: $1,200-2,200, Thyroid cancer surgery: $2,200-3,500. All-inclusive packages available." },
        { question: "What are the risks of thyroid surgery?", answer: "Overall complication rate: 2-5% at top hospitals. Risks include: Temporary hoarseness (5-10%, recurrent laryngeal nerve injury), Temporary low calcium (10-20%, hypoparathyroidism), Bleeding/hematoma (1-2%), Infection (rare, <1%). Permanent hoarseness: <1% with experienced surgeons. Permanent hypoparathyroidism: 1-2%. Most complications are temporary and resolve within weeks." },
        { question: "How long is recovery after thyroid surgery?", answer: "Hospital stay: 1-2 days. Return to light activities: 1 week. Return to work: 1-2 weeks. Full recovery: 2-4 weeks. Avoid heavy lifting for 2-3 weeks. Scar fades significantly within 6-12 months. Most patients feel normal within 2-3 weeks." },
        { question: "Will I need thyroid medication after surgery?", answer: "Total thyroidectomy: Yes, lifelong thyroid hormone replacement (levothyroxine) required. Taken once daily, inexpensive ($5-10/month in India). Partial thyroidectomy: Maybe, 50% of patients need replacement (depends on remaining thyroid function). Blood tests (TSH) every 6 months to monitor levels. Most patients maintain normal life with medication." },
        { question: "Is minimally invasive thyroid surgery available in India?", answer: "Yes, available at top hospitals. Options: Endoscopic thyroidectomy (small incisions, minimal scarring), Robotic-assisted thyroidectomy (da Vinci robot, no neck scar - incision in armpit), Minimally invasive video-assisted (MIVAT). Benefits: better cosmetic outcome, less pain, faster recovery. Cost: $2,500-4,000 (higher than open but worth it for cosmesis). Best for: small thyroid nodules/cancers (<4 cm), selected patients." },
        { question: "How do I know if I need thyroid surgery?", answer: "Surgery indicated for: Thyroid cancer (confirmed by biopsy), Large goiter causing breathing/swallowing difficulty, Hyperthyroidism not controlled by medication, Suspicious thyroid nodules (indeterminate biopsy), Cosmetic concerns (large visible goiter). Not all thyroid nodules need surgery - most are benign and can be monitored. Endocrinologist and surgeon will evaluate need for surgery." },
        { question: "What happens to my voice after thyroid surgery?", answer: "Voice changes are possible but usually temporary. Common: Hoarseness/weak voice (5-10% of patients, lasts 2-6 weeks), Temporary vocal fatigue. Permanent hoarseness: <1% with experienced surgeons (recurrent laryngeal nerve injury). Prevention: Intraoperative nerve monitoring (used at top hospitals), experienced surgeon (>100 thyroid surgeries/year). Voice therapy available if needed. Most patients have normal voice within 1 month." },
        { question: "Can I fly back home after thyroid surgery?", answer: "Yes, safe to fly 3-5 days after surgery (after drain removal and surgeon clearance). International patients typically stay 7-10 days in India (2 days hospital + 5-8 days recovery hotel). Bring thyroid medication prescription. Avoid talking excessively on flight (voice rest). Follow-up via telemedicine possible. Remove stitches at home (10-14 days post-op, non-dissolvable stitches) or use dissolvable stitches." }
      ]} />

      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Thyroid Surgery (Thyroidectomy) in India</h1>
        <p className="text-xl text-gray-600 mb-6">
          Thyroid removal surgery in India. Total thyroidectomy $1,800-3,000, save 75-85% vs USA. Top hospitals, 98% success rate, 1-2 weeks recovery.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg">
            <Link href="/booking">Get Free Consultation</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">$1,800-3,000</div>
            <div className="text-gray-600">Total Thyroidectomy</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">75-85%</div>
            <div className="text-gray-600">Savings vs USA</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">1-2 Weeks</div>
            <div className="text-gray-600">Recovery Time</div>
          </CardContent>
        </Card>
      </div>

      {/* Cost Comparison */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Thyroid Surgery Cost Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-green-50">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Procedure Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left">India 🇮🇳</th>
                <th className="border border-gray-300 px-4 py-2 text-left">USA 🇺🇸</th>
                <th className="border border-gray-300 px-4 py-2 text-left">UK 🇬🇧</th>
                <th className="border border-gray-300 px-4 py-2 text-left">UAE 🇦🇪</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Total Thyroidectomy</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$1,800-3,000</td>
                <td className="border border-gray-300 px-4 py-2">$12,000-25,000</td>
                <td className="border border-gray-300 px-4 py-2">£9,600-20,000 ($12,144-25,300)</td>
                <td className="border border-gray-300 px-4 py-2">AED 30,000-65,000 ($8,175-17,713)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">75-85%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Partial Thyroidectomy (Hemithyroidectomy)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$1,500-2,500</td>
                <td className="border border-gray-300 px-4 py-2">$10,000-20,000</td>
                <td className="border border-gray-300 px-4 py-2">£8,000-16,000 ($10,120-20,240)</td>
                <td className="border border-gray-300 px-4 py-2">AED 25,000-55,000 ($6,813-14,988)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">75-85%</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Thyroid Nodule Removal</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$1,200-2,200</td>
                <td className="border border-gray-300 px-4 py-2">$8,000-18,000</td>
                <td className="border border-gray-300 px-4 py-2">£6,400-14,400 ($8,096-18,216)</td>
                <td className="border border-gray-300 px-4 py-2">AED 20,000-50,000 ($5,450-13,625)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">75-85%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Thyroid Cancer Surgery + Neck Dissection</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$2,200-3,500</td>
                <td className="border border-gray-300 px-4 py-2">$15,000-30,000</td>
                <td className="border border-gray-300 px-4 py-2">£12,000-24,000 ($15,180-30,360)</td>
                <td className="border border-gray-300 px-4 py-2">AED 40,000-75,000 ($10,900-20,438)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">75-85%</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Minimally Invasive Thyroidectomy (Endoscopic)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$2,500-4,000</td>
                <td className="border border-gray-300 px-4 py-2">$18,000-35,000</td>
                <td className="border border-gray-300 px-4 py-2">£14,400-28,000 ($18,216-35,420)</td>
                <td className="border border-gray-300 px-4 py-2">AED 50,000-90,000 ($13,625-24,525)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">75-85%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Robotic Thyroidectomy (da Vinci)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$3,500-5,500</td>
                <td className="border border-gray-300 px-4 py-2">$25,000-45,000</td>
                <td className="border border-gray-300 px-4 py-2">£20,000-36,000 ($25,300-45,540)</td>
                <td className="border border-gray-300 px-4 py-2">AED 70,000-120,000 ($19,075-32,700)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">75-85%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* What's Included */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">What&apos;s Included in Thyroid Surgery Package</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Pre-Surgery Evaluation</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Endocrinologist consultation</li>
                <li>Thyroid function tests (TSH, T3, T4)</li>
                <li>Thyroid ultrasound and biopsy review</li>
                <li>Vocal cord assessment (laryngoscopy)</li>
                <li>Calcium and vitamin D levels</li>
                <li>Anesthesia evaluation</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Surgery Day</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Thyroidectomy procedure (2-3 hours)</li>
                <li>General anesthesia</li>
                <li>Intraoperative nerve monitoring (recurrent laryngeal nerve protection)</li>
                <li>Surgical team (surgeon + assistants)</li>
                <li>Operating room charges</li>
                <li>Post-operative monitoring</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hospital Stay (1-2 Days)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Private room accommodation</li>
                <li>Nursing care (24/7 monitoring)</li>
                <li>Pain management</li>
                <li>Calcium monitoring (prevent low calcium)</li>
                <li>Wound drain management (if placed)</li>
                <li>Soft diet and voice rest</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Follow-up Care</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Thyroid hormone prescription (levothyroxine if total thyroidectomy)</li>
                <li>Calcium supplements (if low calcium)</li>
                <li>Wound care instructions</li>
                <li>Follow-up appointment (7-14 days)</li>
                <li>Stitch removal (10-14 days, or dissolvable stitches)</li>
                <li>Telemedicine support for international patients</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Internal Links */}
      <InternalLinks
        title="Related Treatment Pages"
        links={[
          { title: 'Breast Cancer Treatment India', href: '/treatments/breast-cancer-treatment-india', description: 'Comprehensive breast cancer care' },
          { title: 'Cervical Cancer Treatment India', href: '/treatments/cervical-cancer-treatment-india', description: 'Gynecologic oncology treatment' },
          { title: 'Best Hospitals Delhi', href: '/blog/best-hospitals-delhi-medical-tourism', description: 'Top hospitals for thyroid surgery' },
        ]}
        variant="compact"
      />

      {/* Social Share */}
      <SocialShare
        title="Thyroid Surgery in India 2025"
        url="/treatments/thyroid-surgery-india"
        description="Thyroid removal surgery in India. Total thyroidectomy $1,800-3,000, save 75-85% vs USA. Top hospitals, 98% success rate."
      />

      {/* Related Articles */}
      <RelatedArticles articles={DIABETES_RELATED_ARTICLES} />

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">FAQ</h2>
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>How visible is the thyroid surgery scar?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Open thyroidectomy: 4-5 cm horizontal scar at base of neck (follows natural neck crease). Initial appearance: red and raised (first 2-3 months). After 6 months: fades to thin white line. After 1-2 years: barely visible in most patients. Minimization tips: silicone scar sheets (use for 6-12 months), sunscreen protection (prevent darkening), massage scar tissue (improve appearance). Minimally invasive/robotic: no neck scar (incision in armpit or behind ear), better cosmetic outcome but not suitable for all patients. Most patients are satisfied with scar appearance after healing.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Can thyroid cancer be cured with surgery?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Yes, thyroid cancer has excellent cure rates with surgery. Papillary thyroid cancer: 98% 10-year survival (most common type, 80% of thyroid cancers). Follicular thyroid cancer: 95% 10-year survival. Medullary thyroid cancer: 85% 10-year survival. Treatment: Total thyroidectomy + radioactive iodine (RAI) ablation (if needed) + lifelong thyroid hormone suppression therapy. Follow-up: Regular blood tests (thyroglobulin tumor marker), ultrasound neck (monitor for recurrence). Prognosis: Excellent for early-stage disease (Stage I-II), detected early in 70% of cases. Thyroid cancer is one of the most curable cancers.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What is radioactive iodine treatment?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Radioactive iodine (RAI or I-131) destroys remaining thyroid tissue after total thyroidectomy. When used: Thyroid cancer (papillary or follicular types), large tumors (&gt;4 cm), lymph node involvement, high-risk features. How it works: Thyroid cells absorb iodine (including cancer cells), radioactive iodine destroys these cells, doesn&apos;t harm other organs. Procedure: Take capsule/liquid (one dose), isolation for 2-5 days (radiation safety), low-iodine diet before treatment (2 weeks). Side effects: Temporary (nausea, dry mouth, altered taste), rare long-term effects. Available in India at major cancer centers ($800-1,500 vs $5,000-10,000 USA).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How often do I need blood tests after thyroid surgery?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Monitoring depends on surgery type. Total thyroidectomy: Every 6-8 weeks initially (adjust thyroid hormone dose), then every 6-12 months once stable. Partial thyroidectomy: Every 3-6 months first year (monitor remaining thyroid function), then annually if stable. Thyroid cancer: Every 3-6 months for 2 years (thyroglobulin tumor marker + TSH), then every 6-12 months for life. Tests include: TSH (thyroid stimulating hormone - most important), Free T4 (thyroid hormone level), Thyroglobulin (tumor marker for thyroid cancer), Calcium level (if hypoparathyroidism). Most patients achieve stable levels within 3-6 months. Telemedicine follow-up possible (blood tests done locally, results reviewed remotely).
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <Card className="bg-green-50">
        <CardContent className="pt-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready for Thyroid Surgery in India?</h2>
          <p className="text-gray-600 mb-6">
            Get a free consultation with top thyroid surgeons and endocrinologists.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg">
              <Link href="/booking">Book Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">WhatsApp Now</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

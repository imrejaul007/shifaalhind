import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/seo/breadcrumb-schema';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { ItemListSchema } from '@/components/seo/item-list-schema';
import { InternalLinks } from '@/components/seo/internal-links';
import { Testimonials, TREATMENT_TESTIMONIALS } from '@/components/testimonials/testimonials';
import { TrustBadges } from '@/components/trust-badges/trust-badges';
import { gccCountries, currencies } from '@/config/gcc-countries';

export const dynamic = 'force-dynamic';

// ============================================================
// Treatment cost data (USD prices in India, multiplied by local rate)
// ============================================================
const treatmentCosts: Record<string, { name: string; nameAr: string; indiaUsd: number; localMultiplier: number; savings: number; slug: string }> = {
  'heart-surgery': { name: 'Heart Bypass Surgery (CABG)', nameAr: 'جراحة القلب المفتوح', indiaUsd: 5500, localMultiplier: 4.5, savings: 78, slug: 'heart-surgery-india' },
  'knee-replacement': { name: 'Knee Replacement (Total)', nameAr: 'تبديل الركبة الكامل', indiaUsd: 5000, localMultiplier: 4.0, savings: 75, slug: 'knee-replacement-india' },
  'hip-replacement': { name: 'Hip Replacement (Total)', nameAr: 'تبديل مفصل الورك', indiaUsd: 6000, localMultiplier: 4.2, savings: 76, slug: 'hip-replacement-india' },
  'ivf': { name: 'IVF Treatment (1 Cycle)', nameAr: 'علاج أطفال الأنابيب', indiaUsd: 3500, localMultiplier: 3.5, savings: 72, slug: 'ivf-treatment-india' },
  'dental-implants': { name: 'Dental Implants (Per Tooth)', nameAr: 'زراعة الأسنان', indiaUsd: 600, localMultiplier: 5.0, savings: 80, slug: 'dental-implants-india' },
  'hair-transplant': { name: 'Hair Transplant (3000 Grafts)', nameAr: 'زراعة الشعر', indiaUsd: 1500, localMultiplier: 4.0, savings: 75, slug: 'hair-transplant-india' },
  'cataract-surgery': { name: 'Cataract Surgery (Per Eye)', nameAr: 'جراحة المياه البيضاء', indiaUsd: 1200, localMultiplier: 4.5, savings: 78, slug: 'cataract-surgery-india' },
  'cancer-treatment': { name: 'Cancer Treatment (Chemotherapy)', nameAr: 'علاج السرطان (كيماوي)', indiaUsd: 4000, localMultiplier: 5.0, savings: 80, slug: 'cancer-treatment-india' },
  'cosmetic-surgery': { name: 'Cosmetic Surgery (Facelift)', nameAr: 'جراحة التجميل', indiaUsd: 3000, localMultiplier: 4.5, savings: 78, slug: 'cosmetic-surgery-india' },
  'bariatric-surgery': { name: 'Bariatric Surgery (Gastric Sleeve)', nameAr: 'جراحة السمنة', indiaUsd: 5000, localMultiplier: 3.8, savings: 74, slug: 'bariatric-surgery-india' },
  'liver-transplant': { name: 'Liver Transplant', nameAr: 'زراعة الكبد', indiaUsd: 30000, localMultiplier: 3.5, savings: 71, slug: 'liver-transplant-india' },
  'kidney-transplant': { name: 'Kidney Transplant', nameAr: 'زراعة الكلى', indiaUsd: 15000, localMultiplier: 4.0, savings: 75, slug: 'kidney-transplant-india' },
  'bone-marrow-transplant': { name: 'Bone Marrow Transplant', nameAr: 'زراعة نخاع العظم', indiaUsd: 25000, localMultiplier: 4.0, savings: 75, slug: 'bone-marrow-transplant-india' },
  'spine-surgery': { name: 'Spine Surgery (Fusion)', nameAr: 'جراحة العمود الفقري', indiaUsd: 6000, localMultiplier: 4.5, savings: 78, slug: 'spine-surgery-india' },
  'neurosurgery': { name: 'Brain Tumor Surgery', nameAr: 'جراحة المخ والأعصاب', indiaUsd: 7000, localMultiplier: 4.5, savings: 78, slug: 'neurosurgery-india' },
  'rhinoplasty': { name: 'Rhinoplasty (Nose Job)', nameAr: 'تجميل الأنف', indiaUsd: 2500, localMultiplier: 4.0, savings: 75, slug: 'rhinoplasty-india' },
  'lasik': { name: 'LASIK Eye Surgery (Both Eyes)', nameAr: 'عملية الليزك', indiaUsd: 1000, localMultiplier: 4.5, savings: 78, slug: 'lasik-eye-surgery-india' },
  'angioplasty': { name: 'Angioplasty (With Stent)', nameAr: 'قسطرة القلب مع دعامة', indiaUsd: 4000, localMultiplier: 4.0, savings: 75, slug: 'angioplasty-india' },
  'hernia-surgery': { name: 'Hernia Repair (Laparoscopic)', nameAr: 'جراحة الفتق بالمنظار', indiaUsd: 2000, localMultiplier: 3.5, savings: 72, slug: 'hernia-surgery-india' },
  'gallbladder-surgery': { name: 'Gallbladder Removal', nameAr: 'استئصال المرارة', indiaUsd: 1500, localMultiplier: 4.0, savings: 75, slug: 'gallbladder-surgery-india' },
};

// ============================================================
// Country-specific display data
// ============================================================
const countryData: Record<string, {
  nameEn: string;
  nameAr: string;
  demonymEn: string;
  demonymAr: string;
  currency: string;
  currencyCode: keyof typeof currencies;
}> = {
  uae: { nameEn: 'UAE', nameAr: 'الإمارات', demonymEn: 'Emirati', demonymAr: 'إماراتي', currency: 'AED', currencyCode: 'AED' },
  saudi: { nameEn: 'Saudi Arabia', nameAr: 'السعودية', demonymEn: 'Saudi', demonymAr: 'سعودي', currency: 'SAR', currencyCode: 'SAR' },
  qatar: { nameEn: 'Qatar', nameAr: 'قطر', demonymEn: 'Qatari', demonymAr: 'قطري', currency: 'QAR', currencyCode: 'QAR' },
  oman: { nameEn: 'Oman', nameAr: 'عمان', demonymEn: 'Omani', demonymAr: 'عماني', currency: 'OMR', currencyCode: 'OMR' },
  kuwait: { nameEn: 'Kuwait', nameAr: 'الكويت', demonymEn: 'Kuwaiti', demonymAr: 'كويتي', currency: 'KWD', currencyCode: 'KWD' },
  bahrain: { nameEn: 'Bahrain', nameAr: 'البحرين', demonymEn: 'Bahraini', demonymAr: 'بحريني', currency: 'BHD', currencyCode: 'BHD' },
};

// ============================================================
// Static params & metadata
// ============================================================
export function generateStaticParams() {
  return gccCountries.map((c) => ({ country: c.slug }));
}

interface PageProps {
  params: Promise<{ locale: string; country: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, country } = await params;
  const cd = countryData[country];
  if (!cd) return {};
  const isAr = locale === 'ar';

  const title = isAr
    ? `تكلفة العلاج: ${cd.nameAr} مقابل الهند 2026 | وفر 60-80% | شفاء الهند`
    : `Medical Treatment Cost: ${cd.nameEn} vs India 2026 | Save 60-80% | Shifa AlHind`;
  const description = isAr
    ? `قارن أسعار العلاج الطبي بين ${cd.nameAr} والهند. وفر وايد من فلوسك - 60-80% على أكثر من 20 علاج. جراحة القلب، زراعة الركبة، أطفال الأنابيب وأكثر. مستشفيات معتمدة JCI.`
    : `Compare medical treatment costs between ${cd.nameEn} and India. Save 60-80% on 20+ treatments including heart surgery, knee replacement, IVF and more. JCI-accredited hospitals.`;

  return {
    title,
    description,
    keywords: [
      `medical treatment cost ${cd.nameEn.toLowerCase()} vs india`,
      `${cd.nameEn.toLowerCase()} india healthcare cost comparison`,
      `save money medical tourism india ${cd.nameEn.toLowerCase()}`,
      `affordable surgery india ${cd.demonymEn.toLowerCase()} patients`,
      `تكلفة العلاج ${cd.nameAr} مقابل الهند`,
      `السياحة العلاجية الهند ${cd.nameAr}`,
      `أسعار العمليات في الهند`,
      `وفر فلوسك علاج الهند`,
    ],
    alternates: {
      canonical: `https://shifaalhind.onrender.com/en/cost-comparison/${country}`,
      languages: {
        'en-US': `https://shifaalhind.onrender.com/en/cost-comparison/${country}`,
        'ar-SA': `https://shifaalhind.onrender.com/ar/cost-comparison/${country}`,
        'x-default': `https://shifaalhind.onrender.com/en/cost-comparison/${country}`,
      },
    },
  };
}

// ============================================================
// Helper: format price in local currency
// ============================================================
function formatLocalPrice(usd: number, multiplier: number, currencyCode: keyof typeof currencies): string {
  const localAmount = Math.round(usd * multiplier);
  const { symbol } = currencies[currencyCode];
  return `${symbol} ${localAmount.toLocaleString()}`;
}

// ============================================================
// Page Component
// ============================================================
export default async function CostComparisonCountryPage({ params }: PageProps) {
  const { locale, country } = await params;
  const cd = countryData[country];
  const isAr = locale === 'ar';
  const dir = isAr ? 'rtl' : 'ltr';

  if (!cd) return null;

  const treatmentList = Object.entries(treatmentCosts);
  const rate = currencies[cd.currencyCode].rate;

  // FAQ data
  const faqs = isAr
    ? [
        { question: `شو الفرق بالأسعار بين ${cd.nameAr} والهند؟`, answer: `الفرق وايد كبير! المرضى من ${cd.nameAr} يوفرون من 60% لين 80% على أغلب العلاجات في الهند. يعني لو عملية القلب عندكم تكلف ${formatLocalPrice(5500, 4.5, cd.currencyCode)} تقريباً، في الهند بتكلف بس $5,500 (يعني ربع السعر تقريباً). وهالأسعار تشمل المستشفى والدكتور والأدوية.` },
        { question: 'ليش أسعار العلاج في الهند أرخص وايد؟', answer: 'الأسعار في الهند أقل بسبب تكلفة المعيشة الأقل، المنافسة العالية بين المستشفيات، والدعم الحكومي للسياحة العلاجية. بس هالشي ما يأثر على الجودة - المستشفيات معتمدة JCI ودولياً والأطباء متدربين في أمريكا وبريطانيا.' },
        { question: 'هل الأسعار المذكورة شاملة كل شي؟', answer: 'إي نعم! الأسعار تشمل: رسوم الجراح والمستشفى، التخدير، الغرفة، الأدوية، والفحوصات. بعض الباقات تشمل حتى الإقامة في فندق والنقل من المطار. ما في تكاليف مخفية - كل شي واضح من البداية.' },
        { question: `هل التأمين الصحي من ${cd.nameAr} يغطي العلاج في الهند؟`, answer: `بعض شركات التأمين في ${cd.nameAr} تغطي العلاج في الهند، خاصة لو العلاج مش متوفر محلياً. لازم تتواصل مع شركة التأمين حقتك وتاخذ موافقة مسبقة. فريقنا يساعدك في تجهيز كل الأوراق المطلوبة.` },
        { question: 'شلون أقدر أدفع تكاليف العلاج؟', answer: 'نقبل عدة طرق دفع: تحويل بنكي، بطاقة ائتمان (فيزا/ماستركارد)، دفع كاش بالدولار أو العملة المحلية. تقدر تدفع بالأقساط في بعض المستشفيات. ما نطلب الدفع الكامل مقدماً - بس عربون بسيط لتأكيد الحجز.' },
        { question: 'هل في تكاليف إضافية ما مذكورة؟', answer: 'لا، إحنا نتبع سياسة الشفافية الكاملة. التكاليف الوحيدة الإضافية هي: تذكرة الطيران (تحجزها بنفسك)، تأشيرة طبية ($25 تقريباً)، والمصاريف الشخصية. كل تكاليف العلاج والإقامة الطبية محسوبة في السعر اللي نعطيك إياه.' },
        { question: 'الحين شو أسوي لو أبي أعرف السعر الدقيق لحالتي؟', answer: 'تواصل معنا على الواتساب وأرسل لنا تقاريرك الطبية. خلال 24-48 ساعة بنرسل لك تقدير دقيق بالأسعار مع خيارات المستشفيات والأطباء. الاستشارة مجانية 100% وبدون أي التزام.' },
        { question: 'هل أقدر أقارن أسعار أكثر من مستشفى؟', answer: 'طبعاً! إحنا نرسل لك عروض أسعار من 2-3 مستشفيات معتمدة عشان تقارن وتختار اللي يناسبك. كل عرض يتضمن تفاصيل المستشفى، الدكتور، والسعر الشامل. هالخدمة مجانية بالكامل.' },
      ]
    : [
        { question: `What is the price difference between ${cd.nameEn} and India?`, answer: `Patients from ${cd.nameEn} save 60-80% on most treatments in India. For example, heart bypass surgery costs approximately ${formatLocalPrice(5500, 4.5, cd.currencyCode)} in ${cd.nameEn} but only $5,500 in India. These prices include hospital, surgeon, medications, and post-operative care at JCI-accredited hospitals.` },
        { question: 'Why is medical treatment cheaper in India?', answer: 'Lower cost of living, high competition between hospitals, and government support for medical tourism keep prices down without compromising quality. Indian hospitals are JCI-accredited, use cutting-edge technology, and employ surgeons trained at top US/UK institutions.' },
        { question: 'Are the prices all-inclusive?', answer: 'Yes! Prices include surgeon fees, hospital charges, anesthesia, room, medications, and diagnostic tests. Many packages also include hotel accommodation and airport transfers. No hidden costs - everything is transparent from the start.' },
        { question: `Does ${cd.nameEn} health insurance cover treatment in India?`, answer: `Some ${cd.nameEn} insurance providers cover treatment in India, especially when the procedure is unavailable locally. Contact your insurer for pre-authorization. Our team assists with all required documentation and insurance claim paperwork.` },
        { question: 'What payment methods are accepted?', answer: 'We accept bank transfers, credit cards (Visa/Mastercard), and cash payments in USD or local currency. Installment plans are available at select hospitals. Only a small deposit is required to confirm your booking - not the full amount upfront.' },
        { question: 'Are there any hidden costs?', answer: 'No, we follow a full transparency policy. The only additional costs are: flight tickets (booked by you), medical visa (~$25), and personal expenses. All treatment and medical accommodation costs are included in the quoted price.' },
        { question: 'How do I get an exact price for my case?', answer: 'Contact us on WhatsApp and send your medical reports. Within 24-48 hours, we will send you an accurate cost estimate with hospital and doctor options. The consultation is 100% free with no obligations.' },
        { question: 'Can I compare prices from multiple hospitals?', answer: 'Absolutely! We send you price quotes from 2-3 accredited hospitals so you can compare and choose what suits you best. Each quote includes hospital details, doctor profiles, and all-inclusive pricing. This service is completely free.' },
      ];

  return (
    <div className="container mx-auto px-4 py-8" dir={dir}>
      {/* Structured Data */}
      <BreadcrumbSchema items={[
        { name: isAr ? 'الرئيسية' : 'Home', url: 'https://shifaalhind.onrender.com' },
        { name: isAr ? 'مقارنة التكاليف' : 'Cost Comparison', url: 'https://shifaalhind.onrender.com/cost-comparison' },
        { name: isAr ? `${cd.nameAr} مقابل الهند` : `${cd.nameEn} vs India`, url: `https://shifaalhind.onrender.com/cost-comparison/${country}` },
      ]} />

      <FAQSchema faqs={faqs} />

      <ItemListSchema
        name={isAr ? `مقارنة تكاليف العلاج: ${cd.nameAr} مقابل الهند` : `Treatment Cost Comparison: ${cd.nameEn} vs India`}
        description={isAr ? `أسعار أكثر من 20 علاج طبي - ${cd.nameAr} مقابل الهند` : `Prices for 20+ medical treatments - ${cd.nameEn} vs India`}
        items={treatmentList.map(([key, t], i) => ({
          name: isAr ? t.nameAr : t.name,
          url: `/treatments/${t.slug}`,
          position: i + 1,
        }))}
      />

      {/* ============================================================ */}
      {/* Hero Section */}
      {/* ============================================================ */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {isAr
            ? `شو قد يوفرون مرضى ${cd.nameAr} في الهند؟`
            : `How Much Can ${cd.nameEn} Patients Save in India?`}
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          {isAr
            ? `قارن أسعار أكثر من 20 علاج طبي بين ${cd.nameAr} والهند. المرضى يوفرون وايد - من 60% لين 80% على العلاجات في مستشفيات معتمدة JCI.`
            : `Compare prices for 20+ medical treatments between ${cd.nameEn} and India. Patients save 60-80% at JCI-accredited hospitals with world-class surgeons.`}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg">
            <Link href="/booking">{isAr ? 'احصل على استشارة مجانية' : 'Get Free Consultation'}</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              {isAr ? 'تواصل واتساب' : 'WhatsApp Us'}
            </a>
          </Button>
        </div>
      </div>

      {/* ============================================================ */}
      {/* Quick Stats */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">60-80%</div>
            <div className="text-gray-600">{isAr ? 'نسبة التوفير' : 'Average Savings'}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
            <div className="text-gray-600">{isAr ? 'علاجات متوفرة' : 'Treatments Available'}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600">{isAr ? 'مستشفيات معتمدة JCI' : 'JCI-Accredited Hospitals'}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">10,000+</div>
            <div className="text-gray-600">{isAr ? `مرضى ${cd.demonymAr} عالجناهم` : `${cd.demonymEn} Patients Treated`}</div>
          </CardContent>
        </Card>
      </div>

      {/* ============================================================ */}
      {/* LARGE Cost Comparison Table */}
      {/* ============================================================ */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {isAr
            ? `جدول مقارنة الأسعار: ${cd.nameAr} مقابل الهند`
            : `Cost Comparison Table: ${cd.nameEn} vs India`}
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-green-50">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left">{isAr ? 'العلاج' : 'Treatment'}</th>
                <th className="border border-gray-300 px-4 py-3 text-left">{isAr ? `السعر في ${cd.nameAr} (${cd.currency})` : `${cd.nameEn} Price (${cd.currency})`}</th>
                <th className="border border-gray-300 px-4 py-3 text-left">{isAr ? 'السعر في الهند (USD)' : 'India Price (USD)'}</th>
                <th className="border border-gray-300 px-4 py-3 text-left">{isAr ? 'نسبة التوفير' : 'Savings %'}</th>
                <th className="border border-gray-300 px-4 py-3 text-left">{isAr ? 'التفاصيل' : 'Details'}</th>
              </tr>
            </thead>
            <tbody>
              {treatmentList.map(([key, t], index) => (
                <tr key={key} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">
                    {isAr ? t.nameAr : t.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    {formatLocalPrice(t.indiaUsd, t.localMultiplier, cd.currencyCode)}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">
                    ${t.indiaUsd.toLocaleString()}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-bold">
                    {t.savings}%
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    <Link href={`/treatments/${t.slug}`} className="text-blue-600 hover:underline">
                      {isAr ? 'اعرف أكثر' : 'Learn More'}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-3">
          {isAr
            ? `* الأسعار تقريبية وممكن تختلف حسب المستشفى وحالة المريض. آخر تحديث: 2026. تواصل معنا للحصول على سعر دقيق لحالتك.`
            : `* Prices are approximate and may vary by hospital and patient condition. Last updated: 2026. Contact us for an accurate quote for your case.`}
        </p>
      </section>

      {/* ============================================================ */}
      {/* Why Choose India Section - 6 Cards */}
      {/* ============================================================ */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {isAr ? `ليش مرضى ${cd.nameAr} يختارون الهند؟` : `Why ${cd.nameEn} Patients Choose India`}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>{isAr ? 'وفر 60-80% من التكاليف' : 'Save 60-80% on Costs'}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{isAr
                ? 'أسعار العلاج في الهند أقل وايد من أسعار دول الخليج. نفس الجودة العالمية بأسعار معقولة - يعني توفر آلاف الدولارات على كل عملية.'
                : 'Treatment costs in India are 60-80% lower than GCC countries. Same world-class quality at affordable prices - saving you thousands on every procedure.'}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{isAr ? 'مستشفيات معتمدة دولياً' : 'Internationally Accredited Hospitals'}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{isAr
                ? 'أكثر من 50 مستشفى في الهند حاصلة على اعتماد JCI الدولي. أحدث التقنيات الطبية وغرف عمليات متطورة ومعايير نظافة عالمية.'
                : 'Over 50 JCI-accredited hospitals in India with cutting-edge medical technology, state-of-the-art operating rooms, and international hygiene standards.'}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{isAr ? 'أطباء متدربين عالمياً' : 'Globally Trained Doctors'}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{isAr
                ? 'الأطباء في الهند متدربين في أفضل المراكز الطبية بأمريكا وبريطانيا وأوروبا. خبرة وايد كبيرة في علاج المرضى الدوليين من الخليج.'
                : 'Indian doctors are trained at top medical centers in the USA, UK, and Europe. Extensive experience treating international patients from GCC countries.'}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{isAr ? 'بدون قائمة انتظار' : 'No Waiting Lists'}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{isAr
                ? 'ما في انتظار طويل مثل بعض الدول. تقدر تحجز موعدك خلال أيام وتبدأ العلاج فوراً. الحين تواصل معنا ونرتب لك كل شي بسرعة.'
                : 'No long waiting lists like some countries. Book your appointment within days and start treatment immediately. Contact us now and we arrange everything quickly.'}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{isAr ? 'منسقين يتكلمون عربي' : 'Arabic-Speaking Coordinators'}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{isAr
                ? 'فريقنا يتكلم عربي ويفهم ثقافتكم. من أول استشارة لين ترجع بلدك - منسق عربي يرافقك في كل خطوة ويترجم لك عند الدكتور.'
                : 'Our team speaks Arabic and understands your culture. From initial consultation to your return home - an Arabic coordinator accompanies you at every step and translates during doctor visits.'}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{isAr ? 'أكل حلال وبيئة مريحة' : 'Halal Food & Comfortable Environment'}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{isAr
                ? 'المستشفيات توفر أكل حلال، مصلى، وغرف خاصة تناسب ثقافتنا. إقامة في فنادق قريبة من المستشفى مع كل وسائل الراحة اللي تحتاجها.'
                : 'Hospitals provide halal food, prayer rooms, and private rooms that respect your culture. Stay in nearby hotels with all the amenities you need for a comfortable recovery.'}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ============================================================ */}
      {/* How It Works - 4 Steps */}
      {/* ============================================================ */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {isAr ? 'شلون تبدأ رحلتك العلاجية؟' : 'How It Works'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="relative">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold text-lg mb-2">{isAr ? 'أرسل تقاريرك' : 'Send Your Reports'}</h3>
              <p className="text-gray-600">{isAr
                ? 'أرسل لنا تقاريرك الطبية على الواتساب. فريقنا يراجعها خلال 24 ساعة ويرد عليك بخطة العلاج والأسعار.'
                : 'Send us your medical reports via WhatsApp. Our team reviews them within 24 hours and responds with a treatment plan and pricing.'}</p>
            </CardContent>
          </Card>
          <Card className="relative">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold text-lg mb-2">{isAr ? 'اختر المستشفى' : 'Choose Your Hospital'}</h3>
              <p className="text-gray-600">{isAr
                ? 'نرسل لك 2-3 عروض من مستشفيات معتمدة مع تفاصيل الأطباء والأسعار. اختر اللي يناسبك وإحنا نرتب كل شي.'
                : 'We send you 2-3 quotes from accredited hospitals with doctor details and prices. Choose what suits you and we arrange everything.'}</p>
            </CardContent>
          </Card>
          <Card className="relative">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold text-lg mb-2">{isAr ? 'سافر وعالج' : 'Travel & Treat'}</h3>
              <p className="text-gray-600">{isAr
                ? 'نساعدك في التأشيرة الطبية والحجوزات. منسقنا يستقبلك من المطار ويرافقك طوال فترة العلاج والتعافي.'
                : 'We help with medical visa and bookings. Our coordinator picks you up from the airport and accompanies you throughout treatment and recovery.'}</p>
            </CardContent>
          </Card>
          <Card className="relative">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-bold text-lg mb-2">{isAr ? 'متابعة بعد الرجوع' : 'Follow-Up at Home'}</h3>
              <p className="text-gray-600">{isAr
                ? 'بعد ما ترجع بلدك، نتابع حالتك على الواتساب لمدة 12 شهر. استشارات مجانية مع الدكتور عن بعد.'
                : 'After returning home, we follow up on your condition via WhatsApp for 12 months. Free virtual consultations with your doctor.'}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ Section */}
      {/* ============================================================ */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {isAr ? 'أسئلة شائعة عن التكاليف والدفع' : 'Frequently Asked Questions About Costs & Payments'}
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* WhatsApp CTA */}
      {/* ============================================================ */}
      <Card className="bg-green-50 mb-12">
        <CardContent className="pt-6 text-center">
          <h2 className="text-2xl font-bold mb-4">
            {isAr
              ? `جاهز تعرف شو قد توفر على علاجك في الهند؟`
              : `Ready to Find Out How Much You Can Save?`}
          </h2>
          <p className="text-gray-600 mb-6">
            {isAr
              ? `أرسل لنا تقاريرك الطبية الحين وخلال 24 ساعة بنرسل لك عرض أسعار شامل من أفضل المستشفيات في الهند. الاستشارة مجانية 100%.`
              : `Send us your medical reports now and within 24 hours we will send you a comprehensive price quote from the best hospitals in India. Consultation is 100% free.`}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/booking">{isAr ? 'احجز استشارة مجانية' : 'Book Free Consultation'}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                {isAr ? 'واتساب الحين' : 'WhatsApp Now'}
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* ============================================================ */}
      {/* Internal Links */}
      {/* ============================================================ */}
      <InternalLinks
        title={isAr ? 'صفحات ذات صلة' : 'Related Pages'}
        links={[
          { title: isAr ? 'جراحة القلب في الهند' : 'Heart Surgery in India', href: '/treatments/heart-surgery-india', description: isAr ? 'جراحة القلب المفتوح، وفر 78%' : 'Open heart surgery, save 78%' },
          { title: isAr ? 'تبديل الركبة في الهند' : 'Knee Replacement in India', href: '/treatments/knee-replacement-india', description: isAr ? 'تبديل ركبة كامل، وفر 75%' : 'Total knee replacement, save 75%' },
          { title: isAr ? 'أطفال الأنابيب في الهند' : 'IVF Treatment in India', href: '/treatments/ivf-treatment-india', description: isAr ? 'علاج الخصوبة، وفر 72%' : 'Fertility treatment, save 72%' },
          { title: isAr ? 'زراعة الأسنان في الهند' : 'Dental Implants in India', href: '/treatments/dental-implants-india', description: isAr ? 'زراعة أسنان، وفر 80%' : 'Dental implants, save 80%' },
          { title: isAr ? 'زراعة الشعر في الهند' : 'Hair Transplant in India', href: '/treatments/hair-transplant-india', description: isAr ? 'زراعة شعر، وفر 75%' : 'Hair transplant, save 75%' },
        ]}
        variant="compact"
      />

      {/* ============================================================ */}
      {/* Testimonials */}
      {/* ============================================================ */}
      <Testimonials
        testimonials={TREATMENT_TESTIMONIALS['generic']}
        title={isAr ? `قصص نجاح مرضى ${cd.nameAr}` : `Success Stories from ${cd.nameEn} Patients`}
        subtitle={isAr ? 'تجارب حقيقية من مرضى الخليج اللي عالجوا في الهند' : 'Real experiences from GCC patients who received treatment in India'}
      />

      {/* ============================================================ */}
      {/* Trust Badges */}
      {/* ============================================================ */}
      <TrustBadges />
    </div>
  );
}

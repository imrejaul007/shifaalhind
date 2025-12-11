import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Check,
  Plane,
  Phone
} from 'lucide-react';
import { TrustBadges } from '@/components/trust-badges/trust-badges';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return generateSEOMetadata({
    title_en: 'Medical Tourism India for Kuwait Patients | Save 70-80% on Treatment',
    title_ar: 'السياحة العلاجية في الهند لمرضى الكويت | وفر 70-80% على العلاج',
    description_en: 'Discover why 20,000+ Kuwait patients choose India for medical treatment. Save 70-80% on heart surgery, IVF, knee replacement. Direct flights from Kuwait City.',
    description_ar: 'اكتشف لماذا يختار أكثر من 20,000 مريض كويتي الهند للعلاج الطبي. وفر 70-80% على جراحة القلب، أطفال الأنابيب، استبدال الركبة. رحلات مباشرة من مدينة الكويت.',
    locale,
    path: '/for-kuwait-patients',
  });
}

export const dynamic = 'force-dynamic';

export default async function KuwaitPatientsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const content = {
    en: {
      hero: {
        title: 'Medical Tourism to India for Kuwait Patients',
        subtitle: 'Join 20,000+ Kuwait patients who saved 70-80% on world-class medical treatment in India\'s top JCI-accredited hospitals',
        cta1: 'Get Free Consultation',
        cta2: 'View Top Hospitals'
      },
      costComparison: {
        title: 'Kuwait vs India: Cost Comparison',
        tableHeaders: {
          treatment: 'Treatment',
          kuwaitCost: 'Kuwait Cost',
          indiaCost: 'India Cost',
          savings: 'You Save'
        },
        treatments: [
          { name: 'Heart Bypass Surgery', kuwait: 'KWD 9,000', india: 'KWD 1,800', save: 'KWD 7,200 (80%)' },
          { name: 'IVF Treatment', kuwait: 'KWD 3,500', india: 'KWD 750', save: 'KWD 2,750 (79%)' },
          { name: 'Knee Replacement', kuwait: 'KWD 5,000', india: 'KWD 1,200', save: 'KWD 3,800 (76%)' }
        ],
        note: '*Prices include hospital stay, surgeon fees, medications. Flights extra.'
      },
      flights: {
        title: 'Direct Flights from Kuwait to India',
        cardTitle: 'Kuwait City (KWI) to India',
        routes: [
          'Mumbai (BOM) - 4 hours, 2 flights/day (Kuwait Airways, Air India)',
          'Delhi (DEL) - 4.5 hours, 2 flights/day',
          'Bangalore (BLR) - 5 hours, 1 flight/day'
        ],
        cost: 'Flight Cost: KWD 80-150 round-trip'
      },
      finalCta: {
        title: 'Ready to Save 70-80% on Your Medical Treatment?',
        subtitle: 'Join thousands of Kuwait patients who transformed their health with India\'s top hospitals',
        cta1: 'Get Free Consultation',
        cta2: 'WhatsApp Us'
      }
    },
    ar: {
      hero: {
        title: 'السياحة العلاجية في الهند لمرضى الكويت',
        subtitle: 'انضم إلى أكثر من 20,000 مريض كويتي وفروا 70-80% على العلاج الطبي عالمي المستوى في أفضل مستشفيات الهند المعتمدة من JCI',
        cta1: 'احصل على استشارة مجانية',
        cta2: 'عرض أفضل المستشفيات'
      },
      costComparison: {
        title: 'مقارنة التكاليف: الكويت مقابل الهند',
        tableHeaders: {
          treatment: 'العلاج',
          kuwaitCost: 'تكلفة الكويت',
          indiaCost: 'تكلفة الهند',
          savings: 'ما توفره'
        },
        treatments: [
          { name: 'جراحة القلب المفتوح', kuwait: '9,000 دينار', india: '1,800 دينار', save: '7,200 دينار (80%)' },
          { name: 'علاج أطفال الأنابيب', kuwait: '3,500 دينار', india: '750 دينار', save: '2,750 دينار (79%)' },
          { name: 'استبدال الركبة', kuwait: '5,000 دينار', india: '1,200 دينار', save: '3,800 دينار (76%)' }
        ],
        note: '*الأسعار تشمل الإقامة في المستشفى، أتعاب الجراح، الأدوية. الرحلات الجوية إضافية.'
      },
      flights: {
        title: 'رحلات مباشرة من الكويت إلى الهند',
        cardTitle: 'مدينة الكويت (KWI) إلى الهند',
        routes: [
          'مومباي (BOM) - 4 ساعات، رحلتان/يوم (الخطوط الكويتية، إير إنديا)',
          'دلهي (DEL) - 4.5 ساعات، رحلتان/يوم',
          'بنغالور (BLR) - 5 ساعات، رحلة واحدة/يوم'
        ],
        cost: 'تكلفة الرحلة: 80-150 دينار ذهاباً وإياباً'
      },
      finalCta: {
        title: 'جاهز لتوفير 70-80% على علاجك الطبي؟',
        subtitle: 'انضم إلى آلاف المرضى الكويتيين الذين غيروا صحتهم مع أفضل مستشفيات الهند',
        cta1: 'احصل على استشارة مجانية',
        cta2: 'تواصل عبر واتساب'
      }
    }
  };

  const safeLocale = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  const currentContent = content[safeLocale];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {currentContent.hero.title}
            </h1>
            <p className="text-xl mb-8">
              {currentContent.hero.subtitle}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/booking">
                <Button size="lg" variant="secondary">
                  {currentContent.hero.cta1}
                </Button>
              </Link>
              <Link href="/hospitals">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-emerald-600">
                  {currentContent.hero.cta2}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {currentContent.costComparison.title}
          </h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow">
              <thead className="bg-emerald-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">{currentContent.costComparison.tableHeaders.treatment}</th>
                  <th className="px-6 py-4 text-right">{currentContent.costComparison.tableHeaders.kuwaitCost}</th>
                  <th className="px-6 py-4 text-right">{currentContent.costComparison.tableHeaders.indiaCost}</th>
                  <th className="px-6 py-4 text-right">{currentContent.costComparison.tableHeaders.savings}</th>
                </tr>
              </thead>
              <tbody>
                {currentContent.costComparison.treatments.map((treatment, index) => (
                  <tr key={index} className={index % 2 === 1 ? 'bg-gray-50' : 'border-b'}>
                    <td className="px-6 py-4 font-medium">{treatment.name}</td>
                    <td className="px-6 py-4 text-right">{treatment.kuwait}</td>
                    <td className="px-6 py-4 text-right text-emerald-600 font-semibold">{treatment.india}</td>
                    <td className="px-6 py-4 text-right text-emerald-600 font-bold">{treatment.save}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center mt-6 text-gray-600">
            {currentContent.costComparison.note}
          </p>
        </div>
      </section>

      {/* Flights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {currentContent.flights.title}
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Plane className="w-6 h-6 text-emerald-600" />
                {currentContent.flights.cardTitle}
              </h3>
              <ul className="space-y-2">
                {currentContent.flights.routes.map((route, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-600" />
                    <span>{route}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                <strong>{locale === 'ar' ? 'تكلفة الرحلة:' : 'Flight Cost:'}</strong> {currentContent.flights.cost.split(': ')[1]}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <TrustBadges />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {currentContent.finalCta.title}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {currentContent.finalCta.subtitle}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/booking">
              <Button size="lg" variant="secondary">
                {currentContent.finalCta.cta1}
              </Button>
            </Link>
            <a href="https://wa.me/965501234567" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-emerald-600">
                <Phone className="w-5 h-5 mr-2" />
                {currentContent.finalCta.cta2}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

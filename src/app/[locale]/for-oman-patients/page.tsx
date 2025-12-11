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
    title_en: 'Medical Tourism India for Oman Patients | Save 70-80% on Treatment',
    title_ar: 'السياحة العلاجية في الهند لمرضى عمان | وفر 70-80% على العلاج',
    description_en: 'Join 12,000+ Oman patients who saved 70-80% on medical treatment in India. JCI hospitals, direct flights from Muscat.',
    description_ar: 'انضم إلى أكثر من 12,000 مريض عماني وفروا 70-80% على العلاج الطبي في الهند. مستشفيات معتمدة من JCI، رحلات مباشرة من مسقط.',
    locale,
    path: '/for-oman-patients',
  });
}

export const dynamic = 'force-dynamic';

export default async function OmanPatientsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const content = {
    en: {
      hero: {
        title: 'Medical Tourism to India for Oman Patients',
        subtitle: 'Join 12,000+ Oman patients who saved 70-80% on world-class medical treatment in India\'s top JCI-accredited hospitals',
        cta1: 'Get Free Consultation',
        cta2: 'View Top Hospitals'
      },
      costComparison: {
        title: 'Oman vs India: Cost Comparison',
        tableHeaders: {
          treatment: 'Treatment',
          omanCost: 'Oman Cost',
          indiaCost: 'India Cost',
          savings: 'You Save'
        },
        treatments: [
          { name: 'Heart Bypass Surgery', oman: 'OMR 10,000', india: 'OMR 2,000', save: 'OMR 8,000 (80%)' },
          { name: 'IVF Treatment', oman: 'OMR 4,500', india: 'OMR 900', save: 'OMR 3,600 (80%)' },
          { name: 'Knee Replacement', oman: 'OMR 6,000', india: 'OMR 1,400', save: 'OMR 4,600 (77%)' }
        ],
        note: '*Prices include hospital stay, surgeon fees, medications. Flights extra.'
      },
      flights: {
        title: 'Direct Flights from Muscat to India',
        cardTitle: 'Muscat (MCT) to India',
        routes: [
          'Mumbai (BOM) - 3 hours, 2 flights/day (Oman Air, Air India)',
          'Delhi (DEL) - 3.5 hours, 2 flights/day',
          'Bangalore (BLR) - 4 hours, 1-2 flights/day'
        ],
        cost: 'Flight Cost: OMR 80-150 round-trip'
      },
      finalCta: {
        title: 'Ready to Save 70-80% on Your Medical Treatment?',
        subtitle: 'Join thousands of Oman patients who transformed their health with India\'s top hospitals',
        cta1: 'Get Free Consultation',
        cta2: 'WhatsApp Us'
      }
    },
    ar: {
      hero: {
        title: 'السياحة العلاجية في الهند لمرضى عمان',
        subtitle: 'انضم إلى أكثر من 12,000 مريض عماني وفروا 70-80% على العلاج الطبي عالمي المستوى في أفضل مستشفيات الهند المعتمدة من JCI',
        cta1: 'احصل على استشارة مجانية',
        cta2: 'عرض أفضل المستشفيات'
      },
      costComparison: {
        title: 'مقارنة التكاليف: عمان مقابل الهند',
        tableHeaders: {
          treatment: 'العلاج',
          omanCost: 'تكلفة عمان',
          indiaCost: 'تكلفة الهند',
          savings: 'ما توفره'
        },
        treatments: [
          { name: 'جراحة القلب المفتوح', oman: '10,000 ريال', india: '2,000 ريال', save: '8,000 ريال (80%)' },
          { name: 'علاج أطفال الأنابيب', oman: '4,500 ريال', india: '900 ريال', save: '3,600 ريال (80%)' },
          { name: 'استبدال الركبة', oman: '6,000 ريال', india: '1,400 ريال', save: '4,600 ريال (77%)' }
        ],
        note: '*الأسعار تشمل الإقامة في المستشفى، أتعاب الجراح، الأدوية. الرحلات الجوية إضافية.'
      },
      flights: {
        title: 'رحلات مباشرة من مسقط إلى الهند',
        cardTitle: 'مسقط (MCT) إلى الهند',
        routes: [
          'مومباي (BOM) - 3 ساعات، رحلتان/يوم (الطيران العماني، إير إنديا)',
          'دلهي (DEL) - 3.5 ساعات، رحلتان/يوم',
          'بنغالور (BLR) - 4 ساعات، 1-2 رحلات/يوم'
        ],
        cost: 'تكلفة الرحلة: 80-150 ريال ذهاباً وإياباً'
      },
      finalCta: {
        title: 'جاهز لتوفير 70-80% على علاجك الطبي؟',
        subtitle: 'انضم إلى آلاف المرضى العمانيين الذين غيروا صحتهم مع أفضل مستشفيات الهند',
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
                  <th className="px-6 py-4 text-right">{currentContent.costComparison.tableHeaders.omanCost}</th>
                  <th className="px-6 py-4 text-right">{currentContent.costComparison.tableHeaders.indiaCost}</th>
                  <th className="px-6 py-4 text-right">{currentContent.costComparison.tableHeaders.savings}</th>
                </tr>
              </thead>
              <tbody>
                {currentContent.costComparison.treatments.map((treatment, index) => (
                  <tr key={index} className={index % 2 === 1 ? 'bg-gray-50' : 'border-b'}>
                    <td className="px-6 py-4 font-medium">{treatment.name}</td>
                    <td className="px-6 py-4 text-right">{treatment.oman}</td>
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
            <a href="https://wa.me/968501234567" target="_blank" rel="noopener noreferrer">
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

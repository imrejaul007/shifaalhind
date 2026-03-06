export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { Phone, MessageCircle, Mail, AlertTriangle, Clock, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generateSEOMetadata({
    title_en: 'Emergency Contact - Shifa AlHind 24/7 Support',
    title_ar: 'اتصال الطوارئ - شفاء الهند دعم 24/7',
    description_en: '24/7 emergency medical support for patients. Contact Shifa AlHind for urgent medical tourism assistance, hospital emergencies, and immediate help.',
    description_ar: 'دعم طبي طارئ على مدار الساعة للمرضى. اتصل بشفاء الهند للمساعدة العاجلة في السياحة العلاجية وحالات الطوارئ في المستشفى.',
    locale,
    path: '/emergency',
  });
}

export default async function EmergencyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const content = {
    en: {
      title: 'Emergency Contact',
      subtitle: '24/7 Support for Our Patients',
      warning: 'If you are experiencing a life-threatening emergency, call your local emergency services (911, 999, 112) immediately.',
      indiaEmergency: 'India Emergency Numbers',
      ambulance: 'Ambulance',
      police: 'Police',
      fireAndRescue: 'Fire & Rescue',
      ourSupport: 'Shifa AlHind 24/7 Support',
      hotline: 'Emergency Hotline',
      whatsapp: 'WhatsApp (Fastest)',
      email: 'Email Support',
      available: 'Available 24/7',
      responseTime: 'Response within 15 minutes',
      responseTime24h: 'Response within 2 hours',
      whatWeHelp: 'How We Can Help in Emergencies',
      helpItems: [
        'Immediate coordination with your treating hospital',
        'Translation and communication assistance',
        'Travel and accommodation changes',
        'Insurance and payment coordination',
        'Family communication and updates',
        'Medical record transfer assistance',
      ],
      tipsTitle: 'Important Tips for Patients in India',
      tips: [
        'Keep your medical records and insurance documents accessible at all times',
        'Save our emergency number in your phone contacts',
        'Know the nearest hospital to your accommodation',
        'Keep a copy of your passport and visa with you',
        'Inform your family about your travel itinerary',
      ],
      backToHome: 'Back to Home',
      contactUs: 'Contact Us',
    },
    ar: {
      title: 'اتصال الطوارئ',
      subtitle: 'دعم على مدار الساعة لمرضانا',
      warning: 'إذا كنت تعاني من حالة طوارئ تهدد الحياة، اتصل بخدمات الطوارئ المحلية (911، 999، 112) فوراً.',
      indiaEmergency: 'أرقام الطوارئ في الهند',
      ambulance: 'الإسعاف',
      police: 'الشرطة',
      fireAndRescue: 'الإطفاء والإنقاذ',
      ourSupport: 'دعم شفاء الهند على مدار الساعة',
      hotline: 'خط الطوارئ',
      whatsapp: 'واتساب (الأسرع)',
      email: 'البريد الإلكتروني',
      available: 'متاح على مدار الساعة',
      responseTime: 'الرد خلال 15 دقيقة',
      responseTime24h: 'الرد خلال ساعتين',
      whatWeHelp: 'كيف يمكننا المساعدة في حالات الطوارئ',
      helpItems: [
        'التنسيق الفوري مع المستشفى المعالج',
        'المساعدة في الترجمة والتواصل',
        'تغييرات السفر والإقامة',
        'تنسيق التأمين والدفع',
        'التواصل مع العائلة والتحديثات',
        'المساعدة في نقل السجلات الطبية',
      ],
      tipsTitle: 'نصائح مهمة للمرضى في الهند',
      tips: [
        'احتفظ بسجلاتك الطبية ووثائق التأمين في متناول يدك في جميع الأوقات',
        'احفظ رقم الطوارئ الخاص بنا في جهات اتصال هاتفك',
        'اعرف أقرب مستشفى لمكان إقامتك',
        'احتفظ بنسخة من جواز سفرك وتأشيرتك معك',
        'أبلغ عائلتك عن برنامج سفرك',
      ],
      backToHome: 'العودة للرئيسية',
      contactUs: 'اتصل بنا',
    }
  };

  const safeLocale = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  const c = content[safeLocale];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 px-4 py-16 text-white">
        <div className="container text-center">
          <AlertTriangle className="mx-auto mb-4 h-16 w-16" />
          <h1 className="mb-4 font-serif text-4xl font-bold">{c.title}</h1>
          <p className="text-xl text-red-100">{c.subtitle}</p>
        </div>
      </section>

      {/* Warning Banner */}
      <div className="bg-yellow-50 border-b-2 border-yellow-200 px-4 py-4">
        <div className="container flex items-center justify-center gap-3 text-center">
          <AlertTriangle className="h-5 w-5 flex-shrink-0 text-yellow-600" />
          <p className="font-semibold text-yellow-800">{c.warning}</p>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 py-12 space-y-12">
        {/* India Emergency Numbers */}
        <div>
          <h2 className="mb-6 text-2xl font-bold text-gray-900">{c.indiaEmergency}</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <Card className="border-2 border-red-200 bg-red-50">
              <CardContent className="p-6 text-center">
                <Phone className="mx-auto mb-2 h-8 w-8 text-red-600" />
                <p className="text-sm text-gray-600">{c.ambulance}</p>
                <a href="tel:102" className="text-2xl font-bold text-red-700">102</a>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6 text-center">
                <Shield className="mx-auto mb-2 h-8 w-8 text-blue-600" />
                <p className="text-sm text-gray-600">{c.police}</p>
                <a href="tel:100" className="text-2xl font-bold text-blue-700">100</a>
              </CardContent>
            </Card>
            <Card className="border-2 border-orange-200 bg-orange-50">
              <CardContent className="p-6 text-center">
                <AlertTriangle className="mx-auto mb-2 h-8 w-8 text-orange-600" />
                <p className="text-sm text-gray-600">{c.fireAndRescue}</p>
                <a href="tel:101" className="text-2xl font-bold text-orange-700">101</a>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Support Numbers */}
        <div>
          <h2 className="mb-6 text-2xl font-bold text-gray-900">{c.ourSupport}</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <Card className="border-2 border-primary-200">
              <CardContent className="p-6 text-center">
                <Phone className="mx-auto mb-2 h-8 w-8 text-primary-600" />
                <p className="text-sm text-gray-600">{c.hotline}</p>
                <a href="tel:+971501234567" className="text-xl font-bold text-primary-700">+971 50 123 4567</a>
                <div className="mt-2 flex items-center justify-center gap-1 text-xs text-green-600">
                  <Clock className="h-3 w-3" /> {c.available}
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-200">
              <CardContent className="p-6 text-center">
                <MessageCircle className="mx-auto mb-2 h-8 w-8 text-green-600" />
                <p className="text-sm text-gray-600">{c.whatsapp}</p>
                <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-green-700">+971 50 123 4567</a>
                <div className="mt-2 flex items-center justify-center gap-1 text-xs text-green-600">
                  <Clock className="h-3 w-3" /> {c.responseTime}
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-gray-200">
              <CardContent className="p-6 text-center">
                <Mail className="mx-auto mb-2 h-8 w-8 text-gray-600" />
                <p className="text-sm text-gray-600">{c.email}</p>
                <a href="mailto:emergency@shifaalhind.com" className="text-lg font-bold text-gray-700">emergency@shifaalhind.com</a>
                <div className="mt-2 flex items-center justify-center gap-1 text-xs text-gray-500">
                  <Clock className="h-3 w-3" /> {c.responseTime24h}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How We Help */}
        <div>
          <h2 className="mb-6 text-2xl font-bold text-gray-900">{c.whatWeHelp}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {c.helpItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">{i + 1}</span>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="rounded-xl bg-blue-50 p-8">
          <h2 className="mb-4 text-xl font-bold text-blue-900">{c.tipsTitle}</h2>
          <ul className="space-y-2">
            {c.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-blue-800">
                <span className="mt-1 text-blue-500">&#10003;</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* CTAs */}
        <div className="flex justify-center gap-4">
          <Link href="/">
            <Button variant="outline" size="lg">{c.backToHome}</Button>
          </Link>
          <Link href="/contact">
            <Button size="lg">{c.contactUs}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

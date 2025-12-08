'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Phone,
  FileText,
  Calendar,
  Plane,
  Hotel,
  Car,
  Languages,
  Heart,
  Users,
  Stethoscope,
  MessageCircle,
  Shield,
  CheckCircle2,
  ClipboardCheck,
  Globe,
  CreditCard,
  Award,
  Clock,
  MapPin,
  Utensils,
  Building2 as Hospital,
} from 'lucide-react';

/**
 * Tabbed Services Component for Services Page
 *
 * Based on competitor analysis: NoorMediCare has tabbed interface showing services timeline
 * Enhances user experience by organizing services into clear phases:
 * - Pre-Arrival: Before you travel
 * - During Treatment: While you're in India
 * - Post-Treatment: After you return home
 */

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  details: string;
  detailsAr: string;
  color: string;
}

interface TabbedServicesProps {
  locale?: string;
}

type TabType = 'pre' | 'during' | 'post';

const preArrivalServices: Service[] = [
  {
    icon: Phone,
    title: 'Free Tele-Consultation',
    titleAr: 'استشارة طبية مجانية عن بعد',
    description: 'Initial assessment via WhatsApp, phone, or video call',
    descriptionAr: 'تقييم أولي عبر الواتساب، الهاتف، أو مكالمة الفيديو',
    details: 'Expert doctor review within 24 hours • Second opinion available • Preliminary diagnosis',
    detailsAr: 'مراجعة الطبيب الخبير في غضون 24 ساعة • رأي ثانٍ متاح • تشخيص أولي',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FileText,
    title: 'Medical Records Analysis',
    titleAr: 'تحليل السجلات الطبية',
    description: 'Professional review and translation of all medical documents',
    descriptionAr: 'مراجعة احترافية وترجمة جميع المستندات الطبية',
    details: 'Certified translators • Report organization • Digital archiving • Sent to specialists',
    detailsAr: 'مترجمون معتمدون • تنظيم التقارير • أرشفة رقمية • إرسال للمتخصصين',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Stethoscope,
    title: 'Hospital & Doctor Selection',
    titleAr: 'اختيار المستشفى والطبيب',
    description: 'Matching you with the best hospital and specialist for your condition',
    descriptionAr: 'مطابقتك مع أفضل مستشفى ومتخصص لحالتك',
    details: 'JCI-accredited hospitals • 15-30+ years experience • Video introduction • Success rates verified',
    detailsAr: 'مستشفيات معتمدة من JCI • خبرة 15-30+ سنة • مقدمة فيديو • معدلات نجاح موثقة',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: CreditCard,
    title: 'Treatment Plan & Cost Estimate',
    titleAr: 'خطة العلاج وتقدير التكلفة',
    description: 'Detailed treatment plan with transparent, written cost breakdown',
    descriptionAr: 'خطة علاج مفصلة مع تفصيل تكلفة شفاف ومكتوب',
    details: 'All costs upfront • Price match guarantee • Comparison vs USA/UK/UAE • Flexible payment options',
    detailsAr: 'جميع التكاليف مقدمًا • ضمان مطابقة السعر • مقارنة مع الولايات المتحدة/المملكة المتحدة/الإمارات • خيارات دفع مرنة',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Plane,
    title: 'Medical Visa Processing',
    titleAr: 'معالجة التأشيرة الطبية',
    description: 'Complete visa assistance with invitation letters and documentation',
    descriptionAr: 'مساعدة كاملة في التأشيرة مع خطابات الدعوة والوثائق',
    details: 'E-visa in 3-5 days • Medical visa on arrival (6 airports) • Attendant visa for family • 60 days validity',
    detailsAr: 'تأشيرة إلكترونية في 3-5 أيام • تأشيرة طبية عند الوصول (6 مطارات) • تأشيرة مرافق للعائلة • صلاحية 60 يوم',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Hotel,
    title: 'Travel & Accommodation Booking',
    titleAr: 'حجز السفر والإقامة',
    description: 'Flight and hotel arrangements with medical-friendly amenities',
    descriptionAr: 'ترتيبات الطيران والفنادق مع وسائل راحة صديقة للمرضى',
    details: 'Best flight routes • Wheelchair assistance • Hotels near hospital • Family suites available',
    detailsAr: 'أفضل طرق الطيران • مساعدة الكراسي المتحركة • فنادق بالقرب من المستشفى • أجنحة عائلية متاحة',
    color: 'from-pink-500 to-pink-600',
  },
];

const duringTreatmentServices: Service[] = [
  {
    icon: Car,
    title: 'Airport Pickup & Transfer',
    titleAr: 'استقبال من المطار ونقل',
    description: 'Personal driver with name board waiting at arrival gate',
    descriptionAr: 'سائق شخصي مع لوحة اسم في انتظارك عند بوابة الوصول',
    details: 'AC vehicles • Free Wi-Fi • All hospital transfers • Shopping assistance • 24/7 availability',
    detailsAr: 'مركبات مكيفة • واي فاي مجاني • جميع التنقلات إلى المستشفى • مساعدة التسوق • متاح 24/7',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Languages,
    title: '24/7 Arabic Translator',
    titleAr: 'مترجم عربي على مدار الساعة',
    description: 'Native Arabic speaker who lived in GCC accompanies you',
    descriptionAr: 'متحدث عربي أصلي عاش في دول مجلس التعاون الخليجي يرافقك',
    details: 'Emirati, Saudi, Qatari dialects • Medical terminology expert • Doctor consultations • All paperwork',
    detailsAr: 'لهجات إماراتية، سعودية، قطرية • خبير في المصطلحات الطبية • استشارات الطبيب • جميع الأوراق',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: Users,
    title: 'Dedicated Case Manager',
    titleAr: 'مدير حالة مخصص',
    description: 'Single point of contact managing your entire treatment journey',
    descriptionAr: 'نقطة اتصال واحدة تدير رحلة علاجك بالكامل',
    details: 'Bilingual coordinator • Appointment scheduling • Medication management • Family support • 24/7 phone',
    detailsAr: 'منسق ثنائي اللغة • جدولة المواعيد • إدارة الأدوية • دعم العائلة • هاتف 24/7',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: Heart,
    title: 'Hospital Admission & Treatment',
    titleAr: 'القبول بالمستشفى والعلاج',
    description: 'Seamless admission process with pre-arranged appointments',
    descriptionAr: 'عملية قبول سلسة مع مواعيد محددة مسبقًا',
    details: 'Private/semi-private room • JCI standards • Latest technology • Expert doctors • Post-op ICU',
    detailsAr: 'غرفة خاصة/شبه خاصة • معايير JCI • أحدث التقنيات • أطباء خبراء • وحدة العناية المركزة',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Utensils,
    title: '100% Certified Halal Food',
    titleAr: 'طعام حلال معتمد 100%',
    description: 'Guaranteed halal meals during hospital stay and recovery',
    descriptionAr: 'وجبات حلال مضمونة أثناء الإقامة في المستشفى والتعافي',
    details: 'Arabic & Indian cuisines • Special dietary needs • Family meals • Halal certification verified',
    detailsAr: 'المأكولات العربية والهندية • احتياجات غذائية خاصة • وجبات عائلية • شهادة حلال موثقة',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: MapPin,
    title: 'Prayer Facilities & Mosques',
    titleAr: 'مرافق الصلاة والمساجد',
    description: 'Prayer rooms in hotels, hospitals within 5-10 min walk to mosques',
    descriptionAr: 'غرف صلاة في الفنادق، مساجد على بعد 5-10 دقائق سيرًا',
    details: 'Qibla direction marked • Prayer mats provided • Wudu facilities • Friday prayer arrangements',
    detailsAr: 'اتجاه القبلة محدد • سجادات صلاة متوفرة • مرافق الوضوء • ترتيبات صلاة الجمعة',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Clock,
    title: 'Daily Progress Updates',
    titleAr: 'تحديثات التقدم اليومية',
    description: 'Regular updates to family via WhatsApp and phone calls',
    descriptionAr: 'تحديثات منتظمة للعائلة عبر الواتساب والمكالمات الهاتفية',
    details: 'Post-surgery updates • Video calls with doctor • Lab results explained • Daily health reports',
    detailsAr: 'تحديثات ما بعد الجراحة • مكالمات فيديو مع الطبيب • نتائج المختبر موضحة • تقارير صحية يومية',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Shield,
    title: 'Emergency Support 24/7',
    titleAr: 'دعم الطوارئ على مدار الساعة',
    description: 'Immediate response for any concerns or emergencies',
    descriptionAr: 'استجابة فورية لأي مخاوف أو حالات طوارئ',
    details: 'Emergency hotline • Arabic-speaking doctors on call • ICU access • Ambulance coordination',
    detailsAr: 'خط ساخن للطوارئ • أطباء يتحدثون العربية على الهاتف • الوصول إلى وحدة العناية المركزة • تنسيق الإسعاف',
    color: 'from-red-500 to-red-600',
  },
];

const postTreatmentServices: Service[] = [
  {
    icon: MessageCircle,
    title: 'Telemedicine Follow-ups',
    titleAr: 'متابعات الرعاية الصحية عن بعد',
    description: 'Video consultations with your doctor after returning home',
    descriptionAr: 'استشارات الفيديو مع طبيبك بعد العودة إلى الوطن',
    details: 'Free for first 3 months • Arabic translator included • WhatsApp/Zoom • Progress monitoring',
    detailsAr: 'مجانًا لأول 3 أشهر • مترجم عربي مشمول • واتساب/زوم • مراقبة التقدم',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FileText,
    title: 'Medical Report Translation',
    titleAr: 'ترجمة التقارير الطبية',
    description: 'All discharge papers, lab results, and prescriptions translated',
    descriptionAr: 'جميع أوراق الخروج، نتائج المختبر، والوصفات الطبية مترجمة',
    details: 'Certified medical translation • Arabic & English • Digital copies • Sent to your local doctor',
    detailsAr: 'ترجمة طبية معتمدة • عربي وإنجليزي • نسخ رقمية • إرسال إلى طبيبك المحلي',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: ClipboardCheck,
    title: 'Medication Guidance',
    titleAr: 'إرشادات الأدوية',
    description: 'Detailed instructions on post-treatment medications',
    descriptionAr: 'تعليمات مفصلة حول الأدوية بعد العلاج',
    details: 'Dosage schedule • Side effects explained • Refill assistance • Alternative options in GCC',
    detailsAr: 'جدول الجرعات • الآثار الجانبية موضحة • مساعدة في إعادة التعبئة • خيارات بديلة في دول مجلس التعاون',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Hospital,
    title: 'Discharge Planning',
    titleAr: 'تخطيط الخروج',
    description: 'Comprehensive exit planning with recovery instructions',
    descriptionAr: 'تخطيط خروج شامل مع تعليمات التعافي',
    details: 'Recovery timeline • Do&apos;s and don&apos;ts • Exercise guidance • Diet plan • Warning signs',
    detailsAr: 'جدول التعافي • ما يجب وما لا يجب فعله • إرشادات التمارين • خطة النظام الغذائي • علامات التحذير',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Plane,
    title: 'Return Travel Arrangements',
    titleAr: 'ترتيبات العودة',
    description: 'Safe return flights with medical clearance and assistance',
    descriptionAr: 'رحلات عودة آمنة مع تصريح طبي ومساعدة',
    details: 'Fit-to-fly certificate • Wheelchair service • Medical escort if needed • Airport transfers',
    detailsAr: 'شهادة اللياقة للسفر • خدمة الكراسي المتحركة • مرافق طبي إذا لزم الأمر • تنقلات المطار',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Globe,
    title: 'Lifetime Support Network',
    titleAr: 'شبكة دعم مدى الحياة',
    description: 'Ongoing access to our team for questions and concerns',
    descriptionAr: 'وصول مستمر إلى فريقنا للأسئلة والمخاوف',
    details: 'WhatsApp group • Annual health checks • Re-treatment discounts • VIP fast-track for future visits',
    detailsAr: 'مجموعة واتساب • فحوصات صحية سنوية • خصومات إعادة العلاج • مسار سريع VIP للزيارات المستقبلية',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: Award,
    title: 'Second Opinion Service',
    titleAr: 'خدمة الرأي الثاني',
    description: 'Free second opinion from another specialist if desired',
    descriptionAr: 'رأي ثانٍ مجاني من متخصص آخر إذا رغبت',
    details: 'Different hospital network • Independent review • Treatment comparison • Peace of mind',
    detailsAr: 'شبكة مستشفيات مختلفة • مراجعة مستقلة • مقارنة العلاج • راحة البال',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: CheckCircle2,
    title: 'Recovery Monitoring',
    titleAr: 'مراقبة التعافي',
    description: 'Weekly check-ins for first month, then monthly for 6 months',
    descriptionAr: 'فحوصات أسبوعية للشهر الأول، ثم شهرية لمدة 6 أشهر',
    details: 'Health questionnaires • Photo assessments • Lab test coordination • Doctor consultations as needed',
    detailsAr: 'استبيانات صحية • تقييمات الصور • تنسيق الفحوصات المخبرية • استشارات الطبيب حسب الحاجة',
    color: 'from-teal-500 to-teal-600',
  },
];

export function TabbedServices({ locale = 'en' }: TabbedServicesProps) {
  const [activeTab, setActiveTab] = useState<TabType>('pre');
  const isArabic = locale === 'ar';

  const tabs = [
    {
      id: 'pre' as TabType,
      label: isArabic ? 'قبل الوصول' : 'Pre-Arrival',
      description: isArabic ? 'قبل سفرك إلى الهند' : 'Before you travel to India',
      icon: Calendar,
      services: preArrivalServices,
    },
    {
      id: 'during' as TabType,
      label: isArabic ? 'أثناء العلاج' : 'During Treatment',
      description: isArabic ? 'أثناء وجودك في الهند' : 'While you&apos;re in India',
      icon: Heart,
      services: duringTreatmentServices,
    },
    {
      id: 'post' as TabType,
      label: isArabic ? 'بعد العلاج' : 'Post-Treatment',
      description: isArabic ? 'بعد عودتك إلى الوطن' : 'After you return home',
      icon: MessageCircle,
      services: postTreatmentServices,
    },
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab)!;

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white px-4 py-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700">
            <CheckCircle2 className="h-4 w-4" />
            {isArabic ? 'خدمات شاملة في كل مرحلة' : 'Comprehensive Services at Every Stage'}
          </div>
          <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
            {isArabic ? 'خدماتنا حسب مرحلة العلاج' : 'Our Services by Treatment Phase'}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            {isArabic
              ? 'من الاستشارة الأولى إلى المتابعة مدى الحياة - نحن معك في كل خطوة من رحلتك الطبية'
              : 'From initial consultation to lifetime follow-up - we&apos;re with you every step of your medical journey'}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group flex flex-col items-center gap-2 rounded-xl border-2 px-6 py-4 transition-all ${
                  isActive
                    ? 'border-primary-500 bg-gradient-to-br from-primary-50 to-primary-100 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-primary-300 hover:shadow-md'
                }`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full transition-all ${
                    isActive
                      ? 'bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg'
                      : 'bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-primary-100 group-hover:to-primary-200'
                  }`}
                >
                  <Icon className={`h-7 w-7 ${isActive ? 'text-white' : 'text-gray-600 group-hover:text-primary-600'}`} />
                </div>
                <div className="text-center">
                  <div className={`text-lg font-bold ${isActive ? 'text-primary-700' : 'text-gray-700'}`}>
                    {tab.label}
                  </div>
                  <div className="text-xs text-gray-500">{tab.description}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="rounded-2xl border-2 border-primary-200 bg-white p-6 shadow-xl md:p-10">
          <div className="mb-8 text-center">
            <h3 className="mb-2 font-serif text-2xl font-bold text-gray-900">
              {activeTabData.label}
            </h3>
            <p className="text-gray-600">{activeTabData.description}</p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {activeTabData.services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-2 transition-all duration-300 hover:border-primary-300 hover:shadow-xl"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${index * 0.05}s backwards`,
                  }}
                >
                  <CardHeader>
                    {/* Gradient Icon */}
                    <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${service.color} shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Title */}
                    <CardTitle className="text-center text-base">
                      {isArabic ? service.titleAr : service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    {/* Description */}
                    <CardDescription className="mb-3 text-center text-sm font-medium text-gray-700">
                      {isArabic ? service.descriptionAr : service.description}
                    </CardDescription>

                    {/* Details */}
                    <p className="text-center text-xs leading-relaxed text-gray-500">
                      {isArabic ? service.detailsAr : service.details}
                    </p>
                  </CardContent>

                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
                </Card>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="mb-4 text-lg font-medium text-gray-700">
            {isArabic
              ? 'هل تريد معرفة المزيد عن خدماتنا الشاملة؟'
              : 'Want to learn more about our comprehensive services?'}
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:from-primary-700 hover:to-accent-700 hover:shadow-xl"
          >
            <CheckCircle2 className="h-5 w-5" />
            {isArabic ? 'احصل على استشارة مجانية' : 'Get Free Consultation'}
          </Link>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

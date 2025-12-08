'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import {
  Phone,
  FileText,
  DollarSign,
  Plane,
  Hotel,
  Car,
  Heart,
  MessageCircle,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

/**
 * Patient Journey Visualization Component
 *
 * Shows the complete step-by-step medical tourism journey
 * Based on competitor analysis: HIGH IMPACT feature
 *
 * Inspired by Innayat Medical's 8-step journey
 */

interface JourneyStep {
  number: number;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  icon: React.ReactNode;
  timeline: string;
  timelineAr: string;
  color: string;
}

const journeySteps: JourneyStep[] = [
  {
    number: 1,
    title: 'Free Consultation',
    titleAr: 'استشارة مجانية',
    description: 'Share your medical condition via WhatsApp, email, or phone. Get initial assessment within 2 hours.',
    descriptionAr: 'شارك حالتك الطبية عبر واتساب أو البريد الإلكتروني أو الهاتف. احصل على التقييم الأولي خلال ساعتين.',
    icon: <Phone className="h-8 w-8" />,
    timeline: 'Day 1-2',
    timelineAr: 'يوم 1-2',
    color: 'from-blue-500 to-blue-600'
  },
  {
    number: 2,
    title: 'Medical Records Review',
    titleAr: 'مراجعة السجلات الطبية',
    description: 'Our expert team analyzes your medical history, reports, and scans with top specialists.',
    descriptionAr: 'يقوم فريقنا الخبير بتحليل تاريخك الطبي والتقارير والفحوصات مع كبار المختصين.',
    icon: <FileText className="h-8 w-8" />,
    timeline: 'Day 3-5',
    timelineAr: 'يوم 3-5',
    color: 'from-purple-500 to-purple-600'
  },
  {
    number: 3,
    title: 'Treatment Plan & Cost Estimate',
    titleAr: 'خطة العلاج وتقدير التكلفة',
    description: 'Receive detailed treatment plan with transparent costs. Compare with USA, UK, UAE pricing.',
    descriptionAr: 'احصل على خطة علاج مفصلة بتكاليف شفافة. قارن مع أسعار الولايات المتحدة وبريطانيا والإمارات.',
    icon: <DollarSign className="h-8 w-8" />,
    timeline: 'Day 6-7',
    timelineAr: 'يوم 6-7',
    color: 'from-green-500 to-green-600'
  },
  {
    number: 4,
    title: 'Visa Assistance',
    titleAr: 'المساعدة في التأشيرة',
    description: 'We handle medical visa application, documents, and invitation letters. E-visa in 3-5 days.',
    descriptionAr: 'نتولى طلب التأشيرة الطبية والوثائق ورسائل الدعوة. تأشيرة إلكترونية خلال 3-5 أيام.',
    icon: <Plane className="h-8 w-8" />,
    timeline: 'Day 8-12',
    timelineAr: 'يوم 8-12',
    color: 'from-orange-500 to-orange-600'
  },
  {
    number: 5,
    title: 'Travel & Accommodation',
    titleAr: 'السفر والإقامة',
    description: 'Book flights and hotels near hospital. Family suites, halal food, prayer facilities arranged.',
    descriptionAr: 'احجز الرحلات والفنادق بالقرب من المستشفى. أجنحة عائلية وطعام حلال ومرافق صلاة.',
    icon: <Hotel className="h-8 w-8" />,
    timeline: 'Day 13-15',
    timelineAr: 'يوم 13-15',
    color: 'from-pink-500 to-pink-600'
  },
  {
    number: 6,
    title: 'Airport Pickup',
    titleAr: 'الاستقبال من المطار',
    description: 'Personal driver with name board welcomes you. Direct transfer to hotel or hospital.',
    descriptionAr: 'سائق شخصي مع لوحة اسم يرحب بك. نقل مباشر للفندق أو المستشفى.',
    icon: <Car className="h-8 w-8" />,
    timeline: 'Arrival Day',
    timelineAr: 'يوم الوصول',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    number: 7,
    title: 'Treatment & Care',
    titleAr: 'العلاج والرعاية',
    description: '24/7 Arabic translator, dedicated patient coordinator, halal meals, prayer room access.',
    descriptionAr: 'مترجم عربي على مدار الساعة، منسق مرضى مخصص، وجبات حلال، مصلى.',
    icon: <Heart className="h-8 w-8" />,
    timeline: 'Varies by treatment',
    timelineAr: 'يختلف حسب العلاج',
    color: 'from-red-500 to-red-600'
  },
  {
    number: 8,
    title: 'Post-Treatment Follow-up',
    titleAr: 'المتابعة بعد العلاج',
    description: 'Telemedicine consultations, medication delivery, report translation, lifetime support.',
    descriptionAr: 'استشارات طبية عن بعد، توصيل الأدوية، ترجمة التقارير، دعم مدى الحياة.',
    icon: <MessageCircle className="h-8 w-8" />,
    timeline: 'Ongoing',
    timelineAr: 'مستمر',
    color: 'from-indigo-500 to-indigo-600'
  }
];

interface PatientJourneyProps {
  locale?: string;
  compact?: boolean;
}

export function PatientJourney({ locale = 'en', compact = false }: PatientJourneyProps) {
  const isArabic = locale === 'ar';

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700">
            <CheckCircle2 className="mr-2 h-4 w-4" />
            {isArabic ? 'رحلتك الطبية' : 'Your Medical Journey'}
          </div>
          <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            {isArabic
              ? 'عملية بسيطة من 8 خطوات من الاستشارة إلى التعافي'
              : 'Simple 8-Step Process from Consultation to Recovery'
            }
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            {isArabic
              ? 'نتولى كل شيء من التخطيط للسفر إلى الرعاية بعد العلاج. أنت تركز على الشفاء، ونحن نتعامل مع الباقي.'
              : "We handle everything from travel planning to post-treatment care. You focus on healing, we handle the rest."
            }
          </p>
        </div>

        {/* Journey Steps */}
        <div className="relative">
          {/* Connecting line (hidden on mobile) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary-200 via-primary-300 to-primary-400 md:block" />

          {/* Steps */}
          <div className="space-y-8">
            {journeySteps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col items-center gap-6 md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-5/12">
                  <Card
                    className="group relative overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-primary-500 hover:shadow-xl"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
                    }}
                  >
                    <CardContent className="p-6">
                      {/* Timeline Badge */}
                      <div className="mb-3 inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                        <span className="mr-1">⏱️</span>
                        {isArabic ? step.timelineAr : step.timeline}
                      </div>

                      {/* Step Number */}
                      <div className="mb-3 flex items-center gap-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${step.color} text-white shadow-lg`}>
                          <span className="font-bold">{step.number}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {isArabic ? step.titleAr : step.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-sm leading-relaxed text-gray-600">
                        {isArabic ? step.descriptionAr : step.description}
                      </p>

                      {/* Arrow indicator (desktop only) */}
                      <div className={`absolute top-1/2 hidden -translate-y-1/2 md:block ${
                        index % 2 === 0 ? '-right-6' : '-left-6'
                      }`}>
                        <ArrowRight className={`h-6 w-6 text-primary-400 ${
                          index % 2 !== 0 ? 'rotate-180' : ''
                        }`} />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Center Icon */}
                <div className="relative z-10 flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-xl ring-4 ring-primary-50 md:h-24 md:w-24">
                  <div className={`flex items-center justify-center rounded-full bg-gradient-to-br ${step.color} p-3 text-white md:p-4`}>
                    {step.icon}
                  </div>
                </div>

                {/* Spacer for alignment */}
                <div className="hidden w-5/12 md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            {isArabic
              ? 'الوقت الإجمالي: 2-4 أسابيع (يختلف حسب العلاج)'
              : 'Total Time: 2-4 weeks (varies by treatment)'
            }
          </div>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:from-primary-700 hover:to-accent-700 hover:shadow-xl"
            >
              {isArabic ? 'ابدأ رحلتك اليوم' : 'Start Your Journey Today'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-primary-600 px-8 py-3 font-semibold text-primary-600 transition-all hover:bg-primary-50"
            >
              {isArabic ? 'تحدث مع منسق' : 'Talk to a Coordinator'}
            </Link>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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

'use client';

import Link from 'next/link';
import { Shield, DollarSign, FileText, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

/**
 * Pricing Guarantee Component for Treatment Pages
 *
 * Based on competitor analysis: Innayat Medical emphasizes "transparent pricing", "no hidden costs"
 * HIGH IMPACT for building trust and reducing price anxiety
 */

interface PricingGuaranteeProps {
  locale?: string;
  variant?: 'default' | 'compact';
}

interface GuaranteeBadge {
  icon: React.ReactNode;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  color: string;
}

const guarantees: GuaranteeBadge[] = [
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: 'Transparent Pricing',
    titleAr: 'أسعار شفافة',
    description: 'All costs disclosed upfront. No surprises or hidden charges.',
    descriptionAr: 'جميع التكاليف معلنة مقدمًا. لا مفاجآت أو رسوم مخفية.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Price Match Guarantee',
    titleAr: 'ضمان مطابقة السعر',
    description: 'We match or beat any comparable quote from accredited hospitals.',
    descriptionAr: 'نطابق أو نتفوق على أي عرض سعر مماثل من المستشفيات المعتمدة.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: 'Written Cost Estimate',
    titleAr: 'تقدير تكلفة مكتوب',
    description: 'Detailed breakdown before your arrival. Lock in your price.',
    descriptionAr: 'تفصيل مفصل قبل وصولك. تثبيت السعر الخاص بك.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: <CheckCircle2 className="h-8 w-8" />,
    title: 'All-Inclusive Packages',
    titleAr: 'باقات شاملة',
    description: 'Hospital, doctor, medications, accommodation - everything included.',
    descriptionAr: 'المستشفى، الطبيب، الأدوية، الإقامة - كل شيء مشمول.',
    color: 'from-orange-500 to-orange-600'
  }
];

export function PricingGuarantee({ locale = 'en', variant = 'default' }: PricingGuaranteeProps) {
  const isArabic = locale === 'ar';

  if (variant === 'compact') {
    return (
      <div className="bg-gradient-to-r from-primary-50 to-accent-50 py-8">
        <div className="container px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${guarantee.color} text-white shadow-md`}>
                  {guarantee.icon}
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">
                    {isArabic ? guarantee.titleAr : guarantee.title}
                  </div>
                  <div className="text-xs text-gray-600">
                    {isArabic ? guarantee.descriptionAr : guarantee.description}
                  </div>
                </div>
                {index < guarantees.length - 1 && (
                  <div className="hidden h-8 w-px bg-primary-200 md:block ml-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-12">
      <div className="container px-4">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700">
            <Shield className="mr-2 h-4 w-4" />
            {isArabic ? 'ضمان التسعير الخاص بنا' : 'Our Pricing Guarantee'}
          </div>
          <h2 className="mb-3 font-serif text-3xl font-bold text-gray-900">
            {isArabic
              ? 'تسعير شفاف - بدون رسوم مخفية'
              : 'Transparent Pricing - No Hidden Fees'
            }
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            {isArabic
              ? 'كل التكاليف معلنة مقدمًا. احصل على تقدير مكتوب قبل السفر. سعرك مضمون.'
              : 'All costs disclosed upfront. Get a written estimate before you travel. Your price is guaranteed.'
            }
          </p>
        </div>

        {/* Guarantee Cards */}
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((guarantee, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-primary-500 hover:shadow-xl"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
              }}
            >
              <CardContent className="p-6 text-center">
                {/* Icon with gradient background */}
                <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${guarantee.color} text-white shadow-lg`}>
                  {guarantee.icon}
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {isArabic ? guarantee.titleAr : guarantee.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-600">
                  {isArabic ? guarantee.descriptionAr : guarantee.description}
                </p>

                {/* Hover effect gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${guarantee.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What's Included Section */}
        <div className="mt-12 rounded-lg border-2 border-primary-200 bg-white p-6 md:p-8">
          <h3 className="mb-6 text-center text-xl font-bold text-gray-900">
            {isArabic ? 'ما هو مشمول في السعر المقتبس' : "What's Included in Your Quote"}
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
              <div>
                <div className="font-semibold text-gray-900">
                  {isArabic ? 'رسوم المستشفى الكاملة' : 'Complete Hospital Fees'}
                </div>
                <div className="text-sm text-gray-600">
                  {isArabic
                    ? 'غرفة العمليات، وحدة العناية المركزة، غرفة الاستشفاء، الممرضات'
                    : 'Operating room, ICU, recovery room, nursing care'
                  }
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
              <div>
                <div className="font-semibold text-gray-900">
                  {isArabic ? 'أتعاب الطبيب' : 'Surgeon & Doctor Fees'}
                </div>
                <div className="text-sm text-gray-600">
                  {isArabic
                    ? 'الجراح الرئيسي، طبيب التخدير، الاستشاريون'
                    : 'Lead surgeon, anesthesiologist, consultants'
                  }
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
              <div>
                <div className="font-semibold text-gray-900">
                  {isArabic ? 'جميع الأدوية' : 'All Medications'}
                </div>
                <div className="text-sm text-gray-600">
                  {isArabic
                    ? 'الأدوية أثناء الإقامة + الخروج من المستشفى'
                    : 'During hospital stay + discharge medications'
                  }
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
              <div>
                <div className="font-semibold text-gray-900">
                  {isArabic ? 'الفحوصات المختبرية' : 'Lab Tests & Imaging'}
                </div>
                <div className="text-sm text-gray-600">
                  {isArabic
                    ? 'الفحوصات قبل العملية، الأشعة السينية، التصوير بالرنين المغناطيسي، التصوير المقطعي'
                    : 'Pre-op tests, X-rays, MRI, CT scans as needed'
                  }
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
              <div>
                <div className="font-semibold text-gray-900">
                  {isArabic ? 'الاستقبال من المطار' : 'Airport Pickup & Transfers'}
                </div>
                <div className="text-sm text-gray-600">
                  {isArabic
                    ? 'النقل من وإلى المطار، جميع الرحلات إلى المستشفى'
                    : 'Airport-hotel-hospital-airport transfers'
                  }
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
              <div>
                <div className="font-semibold text-gray-900">
                  {isArabic ? 'منسق مخصص' : 'Dedicated Coordinator'}
                </div>
                <div className="text-sm text-gray-600">
                  {isArabic
                    ? 'مساعدة شخصية، مترجم عربي على مدار الساعة'
                    : 'Personal assistance, 24/7 Arabic translator'
                  }
                </div>
              </div>
            </div>
          </div>

          {/* Additional Note */}
          <div className="mt-6 rounded-lg bg-blue-50 p-4">
            <div className="flex items-start gap-3">
              <Shield className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
              <p className="text-sm text-blue-900">
                {isArabic
                  ? '💯 نحن نرسل لك تقدير التكلفة المكتوب الكامل قبل الموافقة على العلاج. لا توجد رسوم مفاجئة.'
                  : "💯 We send you a complete written cost estimate before you approve treatment. No surprise charges."}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:from-primary-700 hover:to-accent-700 hover:shadow-xl"
          >
            {isArabic ? 'احصل على تقدير التكلفة المجاني' : 'Get Your Free Cost Estimate'}
          </Link>
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

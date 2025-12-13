export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, DollarSign, Calendar, Building2, ArrowRight, CheckCircle } from 'lucide-react';
import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return generateSEOMetadata({
    title_en: 'Medical Tourism Packages - All-Inclusive Healthcare | Shifa AlHind',
    title_ar: 'باقات السياحة العلاجية - رعاية صحية شاملة | شفاء الهند',
    description_en:
      'All-inclusive medical tourism packages with transparent pricing. Airport transfers, accommodation, medical coordinator, and post-treatment follow-up included.',
    description_ar:
      'باقات السياحة العلاجية الشاملة مع أسعار شفافة. تشمل النقل من المطار، الإقامة، منسق طبي، والمتابعة بعد العلاج.',
    locale,
    path: '/packages',
  });
}

export default async function PackagesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const packages = await prisma.package.findMany({
    where: { published: true },
    include: {
      treatment: true,
      hospital: {
        include: {
          city: {
            include: {
              country: true,
            },
          },
        },
      },
    },
    orderBy: [
      { featured: 'desc' },
      { priceEstimate: 'asc' },
    ],
  });

  const content = {
    en: {
      hero: {
        title: 'Medical Tourism Packages',
        subtitle: 'All-inclusive healthcare packages with transparent pricing and comprehensive support',
      },
      benefits: {
        title: "What's Included in Our Packages",
        items: [
          'All-inclusive medical packages',
          'Transparent pricing with no hidden costs',
          'Airport transfers included',
          'Accommodation assistance',
          'Dedicated medical coordinator',
          'Post-treatment follow-up',
        ],
      },
      emptyState: {
        title: 'No packages available yet',
        subtitle: 'Check back soon for our medical tourism packages',
        button: 'Contact Us',
      },
      packageCard: {
        startingFrom: 'Starting from',
        daysTotal: 'days total',
        includes: 'Includes:',
        moreItems: (count: number) => `+${count} more items...`,
        viewFullPackage: 'View Full Package',
        getCustomQuote: 'Get Custom Quote',
      },
      cta: {
        title: 'Need a Custom Package?',
        subtitle:
          'Our medical coordinators can create a personalized package tailored to your specific needs',
        freeConsultation: 'Free Consultation',
        contactUs: 'Contact Us',
      },
    },
    ar: {
      hero: {
        title: 'باقات السياحة العلاجية',
        subtitle: 'باقات رعاية صحية شاملة مع أسعار شفافة ودعم شامل',
      },
      benefits: {
        title: 'ما هو مشمول في باقاتنا',
        items: [
          'باقات طبية شاملة',
          'أسعار شفافة بدون تكاليف مخفية',
          'نقل من المطار مشمول',
          'المساعدة في الإقامة',
          'منسق طبي مخصص',
          'متابعة بعد العلاج',
        ],
      },
      emptyState: {
        title: 'لا توجد باقات متاحة حتى الآن',
        subtitle: 'تحقق قريبًا من باقات السياحة العلاجية لدينا',
        button: 'اتصل بنا',
      },
      packageCard: {
        startingFrom: 'ابتداءً من',
        daysTotal: 'أيام إجمالي',
        includes: 'يشمل:',
        moreItems: (count: number) => `+${count} عناصر إضافية...`,
        viewFullPackage: 'عرض الباقة الكاملة',
        getCustomQuote: 'احصل على عرض مخصص',
      },
      cta: {
        title: 'هل تحتاج إلى باقة مخصصة؟',
        subtitle: 'يمكن لمنسقينا الطبيين إنشاء باقة شخصية مصممة خصيصًا لاحتياجاتك المحددة',
        freeConsultation: 'استشارة مجانية',
        contactUs: 'اتصل بنا',
      },
    },
  };

  const t = content[locale as 'en' | 'ar'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">{t.hero.title}</h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-primary-100">{t.hero.subtitle}</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b bg-white px-4 py-12">
        <div className="container mx-auto">
          <h2 className="mb-8 text-center font-serif text-2xl font-bold text-gray-900">
            {t.benefits.title}
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.benefits.items.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 shrink-0 text-green-600" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="container mx-auto px-4 py-16">
        {packages.length === 0 ? (
          <div className="py-12 text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <Heart className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">{t.emptyState.title}</h3>
            <p className="mb-6 text-gray-600">{t.emptyState.subtitle}</p>
            <Button asChild>
              <Link href="/contact">{t.emptyState.button}</Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => {
              // Get locale-specific fields
              const packageName = locale === 'ar' ? pkg.name_ar : pkg.name_en;
              const packageDescription = locale === 'ar' ? pkg.description_ar : pkg.description_en;
              const packageItems = locale === 'ar' ? pkg.items_ar : pkg.items_en;
              const treatmentTitle = pkg.treatment
                ? locale === 'ar'
                  ? pkg.treatment.title_ar
                  : pkg.treatment.title_en
                : null;
              const hospitalName = pkg.hospital
                ? locale === 'ar'
                  ? pkg.hospital.name_ar
                  : pkg.hospital.name_en
                : null;

              return (
                <Card key={pkg.id} className="flex flex-col transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                      <Heart className="h-8 w-8 text-primary-600" />
                    </div>
                    <CardTitle className="text-xl">{packageName}</CardTitle>
                    {treatmentTitle && (
                      <CardDescription className="flex items-center gap-2">
                        {treatmentTitle}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    {/* Price */}
                    {pkg.priceEstimate && (
                      <div className="mb-4 rounded-lg bg-primary-50 p-4">
                        <div className="mb-1 text-sm text-gray-600">{t.packageCard.startingFrom}</div>
                        <div className="flex items-baseline gap-2">
                          <DollarSign className="h-5 w-5 text-primary-600" />
                          <span className="text-3xl font-bold text-primary-700">
                            {pkg.priceEstimate.toLocaleString()}
                          </span>
                          <span className="text-sm text-gray-600">{pkg.currency}</span>
                        </div>
                      </div>
                    )}

                    {/* Quick Info */}
                    <div className="mb-4 space-y-2 text-sm">
                      {pkg.durationDays && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {pkg.durationDays} {t.packageCard.daysTotal}
                          </span>
                        </div>
                      )}
                      {hospitalName && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <Building2 className="h-4 w-4" />
                          <span className="line-clamp-1">{hospitalName}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    {packageDescription && (
                      <p className="mb-4 line-clamp-3 text-sm text-gray-600">{packageDescription}</p>
                    )}

                    {/* What's Included Preview */}
                    {packageItems.length > 0 && (
                      <div className="mb-4">
                        <h4 className="mb-2 text-sm font-semibold text-gray-900">
                          {t.packageCard.includes}
                        </h4>
                        <ul className="space-y-1">
                          {packageItems.slice(0, 3).map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-green-600" />
                              <span className="line-clamp-1">{item}</span>
                            </li>
                          ))}
                          {packageItems.length > 3 && (
                            <li className="text-sm text-primary-600">
                              {t.packageCard.moreItems(packageItems.length - 3)}
                            </li>
                          )}
                        </ul>
                      </div>
                    )}

                    {/* CTA */}
                    <div className="mt-auto space-y-2">
                      <Button asChild className="w-full">
                        <Link href={`/packages/${pkg.slug}`}>
                          {t.packageCard.viewFullPackage}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/consultation">{t.packageCard.getCustomQuote}</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold">{t.cta.title}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">{t.cta.subtitle}</p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/consultation">{t.cta.freeConsultation}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-700"
            >
              <Link href="/contact">{t.cta.contactUs}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

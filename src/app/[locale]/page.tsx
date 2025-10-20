import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import {
  Heart,
  Activity,
  ArrowRight,
  CheckCircle,
  MapPin
} from 'lucide-react';
import { treatments, gccCountries } from '@/config/gcc-countries';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale });

  return generateSEOMetadata({
    title_en: 'Premium Medical Tourism to India',
    title_ar: 'سياحة علاجية متميزة إلى الهند',
    description_en:
      'Connect with world-class hospitals and treatments in India. Affordable, quality healthcare for patients from UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain.',
    description_ar:
      'اتصل بمستشفيات وعلاجات عالمية المستوى في الهند. رعاية صحية ميسورة التكلفة وعالية الجودة للمرضى من الإمارات والسعودية وقطر وعمان والكويت والبحرين.',
    locale,
    path: '/',
    type: 'website',
  });
}

export default function HomePage() {
  const t = useTranslations();

  const features = [
    {
      icon: CheckCircle,
      title: 'JCI Accredited Hospitals',
      description: 'Top-rated hospitals with international accreditations',
    },
    {
      icon: Activity,
      title: 'Expert Doctors',
      description: 'Experienced specialists with global recognition',
    },
    {
      icon: MapPin,
      title: '24/7 Support',
      description: 'Dedicated support in English and Arabic',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 px-4 py-20 text-white md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {t('hero.title')}
            </h1>
            <p className="mb-8 text-lg text-primary-50 md:text-xl">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/consultation">
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                <Link href="/treatments">{t('common.treatments')}</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary-400/20 blur-3xl" />
      </section>

      {/* Search Bar */}
      <section className="container -mt-8 px-4">
        <div className="glass mx-auto max-w-4xl rounded-2xl p-6">
          <div className="flex flex-col gap-4 sm:flex-row">
            <input
              type="text"
              placeholder={t('hero.searchPlaceholder')}
              className="flex-1 rounded-lg border-2 border-gray-200 bg-white px-4 py-3 focus:border-primary-500 focus:outline-none"
            />
            <Button size="lg" className="sm:w-auto">
              {t('common.search')}
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
                  <feature.icon className="h-8 w-8 text-primary-500" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Treatments */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
              {t('home.featuredTreatments')}
            </h2>
            <p className="text-lg text-gray-600">
              Explore our most popular medical procedures
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {treatments.slice(0, 8).map((treatment) => (
              <Card key={treatment.slug} className="group cursor-pointer transition-transform hover:scale-105">
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 group-hover:bg-primary-500">
                    <Heart className="h-6 w-6 text-primary-500 group-hover:text-white" />
                  </div>
                  <CardTitle className="text-lg">{treatment.name}</CardTitle>
                  <CardDescription>
                    World-class {treatment.name.toLowerCase()} procedures
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={`/treatments/${treatment.slug}`}
                    className="flex items-center text-sm font-medium text-primary-500 hover:text-primary-600"
                  >
                    {t('common.learnMore')}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/treatments">{t('common.viewAll')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="container px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            {t('home.topDestinations')}
          </h2>
          <p className="text-lg text-gray-600">
            Medical tourism destinations across the GCC
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gccCountries.slice(0, 6).map((country) => (
            <Card key={country.slug} className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600" />
              <CardHeader>
                <CardTitle>{country.name}</CardTitle>
                <CardDescription>
                  Medical tourism for {country.name} residents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href={`/for-${country.slug}-patients`}
                  className="flex items-center text-sm font-medium text-primary-500 hover:text-primary-600"
                >
                  Explore packages
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-500 px-4 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            Ready to Start Your Medical Journey?
          </h2>
          <p className="mb-8 text-lg text-primary-50">
            Get a free consultation and personalized treatment plan
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/consultation">{t('common.consultation')}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
              <Link href="/contact">{t('common.contact')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

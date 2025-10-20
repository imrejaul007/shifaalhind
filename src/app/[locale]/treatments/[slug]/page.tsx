export const dynamic = 'force-dynamic';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, DollarSign, Award, CheckCircle, ArrowRight } from 'lucide-react';

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function TreatmentDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const treatment = await prisma.treatment.findUnique({
    where: { slug },
    include: {
      cityTreatments: {
        include: {
          city: {
            include: {
              country: true,
            },
          },
        },
      },
    },
  });

  if (!treatment) {
    notFound();
  }

  const benefits = [
    'World-class medical facilities',
    'Experienced specialist doctors',
    'Cost-effective treatment (60-80% savings)',
    'No waiting lists',
    'International quality standards',
    'Comprehensive aftercare support',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
              {treatment.title_en}
            </h1>
            <p className="mb-8 text-xl text-primary-100">
              Get world-class {treatment.title_en.toLowerCase()} in India at affordable prices
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/consultation">Get Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700">
                <Link href="/booking">Book Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-b bg-white px-4 py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">2-4 weeks</div>
              <div className="text-sm text-gray-600">Typical Duration</div>
            </div>
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">60-80%</div>
              <div className="text-sm text-gray-600">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <Award className="h-8 w-8 text-accent-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900">JCI</div>
              <div className="text-sm text-gray-600">Accredited</div>
            </div>
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{treatment.cityTreatments.length}+</div>
              <div className="text-sm text-gray-600">Cities Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Overview */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 font-serif text-3xl font-bold text-gray-900">
            About {treatment.title_en}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              {treatment.title_en} is one of the most sought-after medical procedures for international patients
              traveling to India. India has become a global leader in providing high-quality {treatment.title_en.toLowerCase()} with
              state-of-the-art facilities and highly experienced medical professionals.
            </p>
            <p className="mb-4">
              Our partner hospitals offer comprehensive {treatment.title_en.toLowerCase()} services with international
              quality standards at a fraction of the cost you would pay in Western countries.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose India */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">
              Why Choose India for {treatment.title_en}?
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-green-600" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Available Locations */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">
          Available Locations
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {treatment.cityTreatments.map((cityTreatment) => (
            <Card key={cityTreatment.id} className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary-600" />
                  {cityTreatment.city.name_en}
                </CardTitle>
                <CardDescription>
                  {cityTreatment.city.country.name_en}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 space-y-2 text-sm">
                  {(cityTreatment.costMin || cityTreatment.costMax) && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Estimated Cost:</span>
                      <span className="font-semibold text-gray-900">
                        {cityTreatment.costMin && cityTreatment.costMax
                          ? `$${cityTreatment.costMin} - $${cityTreatment.costMax}`
                          : cityTreatment.costMin
                          ? `From $${cityTreatment.costMin}`
                          : `Up to $${cityTreatment.costMax}`}
                      </span>
                    </div>
                  )}
                  {treatment.duration && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold text-gray-900">
                        {treatment.duration}
                      </span>
                    </div>
                  )}
                </div>
                <Button asChild className="w-full">
                  <Link
                    href={`/medical-tourism/${cityTreatment.city.country.slug}/${cityTreatment.city.slug}/${treatment.slug}`}
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
            Get a free consultation and personalized treatment plan for {treatment.title_en}
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/consultation">Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

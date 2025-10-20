export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Building2, Globe, Award, Clock, Shield } from 'lucide-react';

export default async function MedicalTourismPage() {
  // Fetch all cities with their treatments
  const cities = await prisma.city.findMany({
    include: {
      country: true,
      cityTreatments: {
        include: {
          treatment: true,
        },
      },
    },
  });

  const benefits = [
    {
      icon: Award,
      title: 'World-Class Quality',
      description: 'JCI-accredited hospitals with international standards',
    },
    {
      icon: Clock,
      title: 'No Waiting Times',
      description: 'Immediate treatment without long waiting lists',
    },
    {
      icon: Shield,
      title: 'Cost Savings',
      description: 'Save 60-80% compared to Western countries',
    },
    {
      icon: Building2,
      title: 'Expert Doctors',
      description: 'Board-certified specialists with global experience',
    },
    {
      icon: Globe,
      title: 'Complete Support',
      description: 'Travel, accommodation, and medical coordination',
    },
    {
      icon: MapPin,
      title: 'Top Destinations',
      description: 'Delhi, Mumbai, Bangalore, Chennai, and more',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            Medical Tourism to India
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-primary-100">
            Experience world-class healthcare at affordable prices. India offers the perfect
            combination of expert doctors, advanced technology, and comprehensive care.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/consultation">Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700">
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
          Why Choose India for Medical Treatment?
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          India has become a global leader in medical tourism, attracting patients from around the world
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                  <benefit.icon className="h-6 w-6 text-primary-600" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
            Popular Medical Destinations
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Explore top cities in India for medical treatment
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <Card key={city.id} className="overflow-hidden transition-shadow hover:shadow-lg">
                <CardHeader className="bg-gradient-to-br from-primary-500 to-primary-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    {city.name_en}
                  </CardTitle>
                  <CardDescription className="text-primary-100">
                    {city.country.name_en}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4 text-sm text-gray-600">
                    {city.cityTreatments.length} treatments available
                  </p>
                  <Button asChild className="w-full">
                    <Link href={`/medical-tourism/${city.country.slug}/${city.slug}`}>
                      View Treatments
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
          How It Works
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          Simple steps to your medical journey
        </p>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { step: '1', title: 'Consult', desc: 'Free medical consultation' },
              { step: '2', title: 'Plan', desc: 'Treatment plan & quote' },
              { step: '3', title: 'Travel', desc: 'We arrange everything' },
              { step: '4', title: 'Heal', desc: 'Treatment & recovery' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 font-serif text-2xl font-bold text-white">
                    {item.step}
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold">
            Ready to Start Your Medical Journey?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
            Get a free consultation and personalized treatment plan from our medical experts
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/consultation">Get Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

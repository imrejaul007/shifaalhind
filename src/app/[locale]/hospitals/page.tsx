export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Award, MapPin, Phone, CheckCircle, Star } from 'lucide-react';

export default async function HospitalsPage() {
  const hospitals = await prisma.hospital.findMany({
    where: { published: true },
    include: {
      city: {
        include: {
          country: true,
        },
      },
    },
    orderBy: [
      { featured: 'desc' },
      { rating: 'desc' },
    ],
  });

  const features = [
    'JCI & NABH Accredited Hospitals',
    'State-of-the-art Medical Technology',
    'Board-Certified Specialist Doctors',
    'International Patient Services',
    'English-Speaking Medical Staff',
    '24/7 Emergency Services',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            Our Partner Hospitals
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-primary-100">
            World-class healthcare facilities with international accreditation and expert medical teams
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="border-b bg-white px-4 py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-5 w-5 shrink-0 text-green-600" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospitals Grid */}
      <section className="container mx-auto px-4 py-16">
        {hospitals.length === 0 ? (
          <div className="py-12 text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <Building2 className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">No hospitals available yet</h3>
            <p className="mb-6 text-gray-600">Check back soon for our partner hospitals</p>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hospitals.map((hospital) => (
              <Card key={hospital.id} className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                    <Building2 className="h-8 w-8 text-primary-600" />
                  </div>
                  <CardTitle className="text-xl">{hospital.name_en}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {hospital.city.name_en}, {hospital.city.country.name_en}
                  </CardDescription>
                  {hospital.rating && (
                    <div className="mt-2 flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{hospital.rating}/5</span>
                      <span className="text-gray-500">({hospital.reviewCount} reviews)</span>
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  {hospital.accreditations.length > 0 && (
                    <div className="mb-4 flex flex-wrap items-center gap-2 text-sm">
                      <Award className="h-4 w-4 text-accent-500" />
                      {hospital.accreditations.map((accreditation, idx) => (
                        <span key={idx} className="font-medium text-accent-600">
                          {accreditation}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-semibold text-gray-900">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {hospital.specialties.slice(0, 4).map((specialty, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700"
                        >
                          {specialty}
                        </span>
                      ))}
                      {hospital.specialties.length > 4 && (
                        <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700">
                          +{hospital.specialties.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button asChild className="flex-1" size="sm">
                      <Link href={`/hospitals/${hospital.slug}`}>View Details</Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/contact">
                        <Phone className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold">
            Find the Right Hospital for Your Treatment
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
            Our medical experts will help you choose the best hospital for your specific needs
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/consultation">Get Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Award, GraduationCap, Languages, CheckCircle, Star, Briefcase } from 'lucide-react';

export default async function DoctorsPage() {
  const doctors = await prisma.doctor.findMany({
    where: { published: true },
    include: {
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
      { rating: 'desc' },
    ],
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            Our Medical Experts
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-primary-100">
            Board-certified specialists with international training and decades of experience
          </p>
        </div>
      </section>

      {/* Why Our Doctors */}
      <section className="border-b bg-white px-4 py-12">
        <div className="container mx-auto">
          <h2 className="mb-8 text-center font-serif text-2xl font-bold text-gray-900">
            Why Choose Our Doctors?
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { icon: GraduationCap, text: 'International Qualifications' },
              { icon: Award, text: '15-30 Years Experience' },
              { icon: Languages, text: 'Multi-lingual Support' },
              { icon: CheckCircle, text: 'Patient-Centric Care' },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  <item.icon className="h-8 w-8 text-primary-600" />
                </div>
                <p className="font-medium text-gray-900">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="container mx-auto px-4 py-16">
        {doctors.length === 0 ? (
          <div className="py-12 text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <User className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">No doctors available yet</h3>
            <p className="mb-6 text-gray-600">Check back soon for our medical experts</p>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor) => (
              <Card key={doctor.id} className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary-100">
                    <User className="h-10 w-10 text-primary-600" />
                  </div>
                  <CardTitle className="text-xl">
                    {doctor.title_en} {doctor.name_en}
                  </CardTitle>
                  <CardDescription>{doctor.specialties.join(', ')}</CardDescription>
                  {doctor.rating && (
                    <div className="mt-2 flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{doctor.rating}/5</span>
                      <span className="text-gray-500">({doctor.reviewCount} reviews)</span>
                    </div>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{doctor.hospital.name_en}</p>
                    <p className="text-sm text-gray-600">
                      {doctor.hospital.city.name_en}, {doctor.hospital.city.country.name_en}
                    </p>
                    {doctor.experience && (
                      <div className="mt-1 flex items-center gap-1 text-sm text-gray-600">
                        <Briefcase className="h-3 w-3" />
                        <span>{doctor.experience}+ years experience</span>
                      </div>
                    )}
                  </div>

                  {doctor.qualifications.length > 0 && (
                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-gray-900">Qualifications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {doctor.qualifications.slice(0, 3).map((qual, idx) => (
                          <span
                            key={idx}
                            className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700"
                          >
                            {qual}
                          </span>
                        ))}
                        {doctor.qualifications.length > 3 && (
                          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700">
                            +{doctor.qualifications.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {doctor.languages.length > 0 && (
                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-gray-900">Languages:</h4>
                      <p className="text-sm text-gray-600">{doctor.languages.join(', ')}</p>
                    </div>
                  )}

                  {doctor.consultationFee && (
                    <div className="rounded-lg bg-green-50 p-2 text-center">
                      <p className="text-sm text-gray-600">Consultation Fee</p>
                      <p className="text-lg font-bold text-green-700">${doctor.consultationFee}</p>
                    </div>
                  )}

                  <Button asChild className="w-full">
                    <Link href={`/doctors/${doctor.slug}`}>View Profile</Link>
                  </Button>
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
            Consult with Our Medical Experts
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
            Get a second opinion or discuss your treatment options with our specialists
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/consultation">Free Medical Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

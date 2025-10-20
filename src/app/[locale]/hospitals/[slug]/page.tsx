export const dynamic = 'force-dynamic';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Award,
  Star,
  CheckCircle,
  Building2,
  ArrowRight,
  Languages,
  Stethoscope
} from 'lucide-react';

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function HospitalDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const hospital = await prisma.hospital.findUnique({
    where: { slug, published: true },
    include: {
      city: {
        include: {
          country: true,
        },
      },
      doctors: {
        where: { published: true },
        take: 6,
      },
    },
  });

  if (!hospital) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl">
            {/* Breadcrumb */}
            <div className="mb-4 flex items-center gap-2 text-sm text-primary-100">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/hospitals" className="hover:text-white">Hospitals</Link>
              <span>/</span>
              <span className="text-white">{hospital.name_en}</span>
            </div>

            <div className="flex items-start gap-4">
              {hospital.logo ? (
                <div className="h-20 w-20 rounded-lg bg-white p-2">
                  <img src={hospital.logo} alt={hospital.name_en} className="h-full w-full object-contain" />
                </div>
              ) : (
                <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-white/10">
                  <Building2 className="h-10 w-10 text-white" />
                </div>
              )}
              <div className="flex-1">
                <h1 className="mb-2 font-serif text-4xl font-bold md:text-5xl">
                  {hospital.name_en}
                </h1>
                <div className="mb-4 flex items-center gap-4 text-primary-100">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-5 w-5" />
                    <span>{hospital.city.name_en}, {hospital.city.country.name_en}</span>
                  </div>
                  {hospital.rating && (
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span>{hospital.rating}/5</span>
                      <span className="text-sm">({hospital.reviewCount} reviews)</span>
                    </div>
                  )}
                </div>
                {hospital.accreditations.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {hospital.accreditations.map((accreditation, index) => (
                      <span
                        key={index}
                        className="flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-sm"
                      >
                        <Award className="h-4 w-4" />
                        {accreditation}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
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

      {/* Quick Info Bar */}
      <section className="border-b bg-white px-4 py-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {hospital.specialties.length > 0 && (
              <div className="text-center">
                <div className="mb-2 flex justify-center">
                  <Stethoscope className="h-6 w-6 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{hospital.specialties.length}+</div>
                <div className="text-sm text-gray-600">Specialties</div>
              </div>
            )}
            {hospital.doctors.length > 0 && (
              <div className="text-center">
                <div className="mb-2 flex justify-center">
                  <Building2 className="h-6 w-6 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{hospital.doctors.length}+</div>
                <div className="text-sm text-gray-600">Expert Doctors</div>
              </div>
            )}
            {hospital.accreditations.length > 0 && (
              <div className="text-center">
                <div className="mb-2 flex justify-center">
                  <Award className="h-6 w-6 text-accent-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{hospital.accreditations.length}</div>
                <div className="text-sm text-gray-600">Accreditations</div>
              </div>
            )}
            {hospital.languages.length > 0 && (
              <div className="text-center">
                <div className="mb-2 flex justify-center">
                  <Languages className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{hospital.languages.length}</div>
                <div className="text-sm text-gray-600">Languages</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* About */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl font-bold text-gray-900">
                About {hospital.name_en}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  {hospital.about_en || `${hospital.name_en} is a leading healthcare facility in ${hospital.city.name_en}, ${hospital.city.country.name_en}, committed to providing world-class medical services to international patients. With state-of-the-art infrastructure and experienced medical professionals, the hospital offers comprehensive healthcare solutions across multiple specialties.`}
                </p>
              </div>
            </div>

            {/* Specialties */}
            {hospital.specialties.length > 0 && (
              <div className="mb-12">
                <h2 className="mb-6 font-serif text-3xl font-bold text-gray-900">
                  Medical Specialties
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {hospital.specialties.map((specialty, index) => (
                    <div key={index} className="flex items-start gap-3 rounded-lg border p-4">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                      <span className="text-gray-700">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Facilities */}
            {hospital.facilities_en && (
              <div className="mb-12">
                <h2 className="mb-6 font-serif text-3xl font-bold text-gray-900">
                  Facilities & Infrastructure
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>{hospital.facilities_en}</p>
                </div>
              </div>
            )}

            {/* Doctors */}
            {hospital.doctors.length > 0 && (
              <div className="mb-12">
                <h2 className="mb-6 font-serif text-3xl font-bold text-gray-900">
                  Our Medical Experts
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {hospital.doctors.map((doctor) => (
                    <Card key={doctor.id}>
                      <CardHeader>
                        <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
                          <Building2 className="h-8 w-8 text-primary-600" />
                        </div>
                        <CardTitle className="text-lg">
                          {doctor.title_en} {doctor.name_en}
                        </CardTitle>
                        <CardDescription>
                          {doctor.specialties.join(', ')}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        {doctor.experience && (
                          <p className="mb-2 text-sm text-gray-600">
                            {doctor.experience}+ years experience
                          </p>
                        )}
                        <Button asChild variant="outline" size="sm" className="w-full">
                          <Link href={`/doctors/${doctor.slug}`}>
                            View Profile
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Contact & Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {hospital.address_en && (
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 h-5 w-5 shrink-0 text-gray-500" />
                      <div>
                        <div className="font-medium text-gray-900">Address</div>
                        <div className="text-sm text-gray-600">{hospital.address_en}</div>
                        <div className="text-sm text-gray-600">
                          {hospital.city.name_en}, {hospital.city.country.name_en}
                        </div>
                      </div>
                    </div>
                  )}

                  {hospital.phone && (
                    <div className="flex items-start gap-3">
                      <Phone className="mt-1 h-5 w-5 shrink-0 text-gray-500" />
                      <div>
                        <div className="font-medium text-gray-900">Phone</div>
                        <a href={`tel:${hospital.phone}`} className="text-sm text-primary-600 hover:text-primary-700">
                          {hospital.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  {hospital.email && (
                    <div className="flex items-start gap-3">
                      <Mail className="mt-1 h-5 w-5 shrink-0 text-gray-500" />
                      <div>
                        <div className="font-medium text-gray-900">Email</div>
                        <a href={`mailto:${hospital.email}`} className="text-sm text-primary-600 hover:text-primary-700">
                          {hospital.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {hospital.website && (
                    <div className="flex items-start gap-3">
                      <Globe className="mt-1 h-5 w-5 shrink-0 text-gray-500" />
                      <div>
                        <div className="font-medium text-gray-900">Website</div>
                        <a
                          href={hospital.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary-600 hover:text-primary-700"
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>
                  )}

                  {hospital.languages.length > 0 && (
                    <div className="flex items-start gap-3">
                      <Languages className="mt-1 h-5 w-5 shrink-0 text-gray-500" />
                      <div>
                        <div className="font-medium text-gray-900">Languages</div>
                        <div className="text-sm text-gray-600">
                          {hospital.languages.join(', ')}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="pt-4">
                    <Button asChild className="w-full" size="lg">
                      <Link href="/consultation">Get Free Consultation</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
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
            Contact us today to learn more about treatments at {hospital.name_en}
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

export const dynamic = 'force-dynamic';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  MapPin,
  Award,
  Star,
  CheckCircle,
  Building2,
  ArrowRight,
  Languages,
  GraduationCap,
  Briefcase,
  DollarSign
} from 'lucide-react';

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function DoctorDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const doctor = await prisma.doctor.findUnique({
    where: { slug, published: true },
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
  });

  if (!doctor) {
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
              <Link href="/doctors" className="hover:text-white">Doctors</Link>
              <span>/</span>
              <span className="text-white">{doctor.name_en}</span>
            </div>

            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
              {/* Doctor Image/Avatar */}
              <div className="shrink-0">
                {doctor.profileImage ? (
                  <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white/20">
                    <img src={doctor.profileImage} alt={doctor.name_en} className="h-full w-full object-cover" />
                  </div>
                ) : (
                  <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-white/20 bg-white/10">
                    <Building2 className="h-16 w-16 text-white" />
                  </div>
                )}
              </div>

              {/* Doctor Info */}
              <div className="flex-1">
                <h1 className="mb-2 font-serif text-4xl font-bold md:text-5xl">
                  {doctor.title_en} {doctor.name_en}
                </h1>
                <p className="mb-4 text-xl text-primary-100">
                  {doctor.specialties.join(', ')}
                </p>

                <div className="mb-4 flex flex-wrap gap-4 text-primary-100">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    <Link href={`/hospitals/${doctor.hospital.slug}`} className="hover:text-white">
                      {doctor.hospital.name_en}
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span>{doctor.hospital.city.name_en}, {doctor.hospital.city.country.name_en}</span>
                  </div>
                  {doctor.rating && (
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span>{doctor.rating}/5</span>
                      <span className="text-sm">({doctor.reviewCount} reviews)</span>
                    </div>
                  )}
                </div>

                {doctor.available && (
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-2 text-sm">
                    <div className="h-2 w-2 rounded-full bg-green-400"></div>
                    <span>Available for consultation</span>
                  </div>
                )}

                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/consultation">Book Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-b bg-white px-4 py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {doctor.experience && (
              <div className="text-center">
                <div className="mb-2 flex justify-center">
                  <Briefcase className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{doctor.experience}+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            )}
            {doctor.specialties.length > 0 && (
              <div className="text-center">
                <div className="mb-2 flex justify-center">
                  <Award className="h-8 w-8 text-accent-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{doctor.specialties.length}</div>
                <div className="text-sm text-gray-600">Specialties</div>
              </div>
            )}
            {doctor.qualifications.length > 0 && (
              <div className="text-center">
                <div className="mb-2 flex justify-center">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{doctor.qualifications.length}</div>
                <div className="text-sm text-gray-600">Qualifications</div>
              </div>
            )}
            {doctor.languages.length > 0 && (
              <div className="text-center">
                <div className="mb-2 flex justify-center">
                  <Languages className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{doctor.languages.length}</div>
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
                About {doctor.title_en} {doctor.name_en}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  {doctor.bio_en || `${doctor.title_en} ${doctor.name_en} is a highly experienced medical professional specializing in ${doctor.specialties.join(', ')}. With ${doctor.experience || 'extensive'} years of experience, they have helped countless international patients achieve their health goals at ${doctor.hospital.name_en} in ${doctor.hospital.city.name_en}.`}
                </p>
              </div>
            </div>

            {/* Specialties */}
            {doctor.specialties.length > 0 && (
              <div className="mb-12">
                <h2 className="mb-6 font-serif text-3xl font-bold text-gray-900">
                  Areas of Expertise
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {doctor.specialties.map((specialty, index) => (
                    <div key={index} className="flex items-start gap-3 rounded-lg border p-4">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                      <span className="text-gray-700">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Qualifications */}
            {doctor.qualifications.length > 0 && (
              <div className="mb-12">
                <h2 className="mb-6 font-serif text-3xl font-bold text-gray-900">
                  Education & Qualifications
                </h2>
                <div className="space-y-3">
                  {doctor.qualifications.map((qualification, index) => (
                    <div key={index} className="flex items-start gap-3 rounded-lg border p-4">
                      <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                      <span className="text-gray-700">{qualification}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Hospital Affiliation */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl font-bold text-gray-900">
                Hospital Affiliation
              </h2>
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-primary-50">
                      <Building2 className="h-8 w-8 text-primary-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{doctor.hospital.name_en}</CardTitle>
                      <CardDescription>
                        {doctor.hospital.city.name_en}, {doctor.hospital.city.country.name_en}
                      </CardDescription>
                      {doctor.hospital.accreditations.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {doctor.hospital.accreditations.map((accreditation, index) => (
                            <span
                              key={index}
                              className="flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700"
                            >
                              <Award className="h-3 w-3" />
                              {accreditation}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/hospitals/${doctor.hospital.slug}`}>
                      View Hospital Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Consultation Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <Card>
                <CardHeader>
                  <CardTitle>Consultation Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {doctor.consultationFee && (
                    <div className="flex items-start gap-3">
                      <DollarSign className="mt-1 h-5 w-5 shrink-0 text-gray-500" />
                      <div>
                        <div className="font-medium text-gray-900">Consultation Fee</div>
                        <div className="text-sm text-gray-600">${doctor.consultationFee}</div>
                      </div>
                    </div>
                  )}

                  {doctor.languages.length > 0 && (
                    <div className="flex items-start gap-3">
                      <Languages className="mt-1 h-5 w-5 shrink-0 text-gray-500" />
                      <div>
                        <div className="font-medium text-gray-900">Languages</div>
                        <div className="text-sm text-gray-600">
                          {doctor.languages.join(', ')}
                        </div>
                      </div>
                    </div>
                  )}

                  {doctor.experience && (
                    <div className="flex items-start gap-3">
                      <Briefcase className="mt-1 h-5 w-5 shrink-0 text-gray-500" />
                      <div>
                        <div className="font-medium text-gray-900">Experience</div>
                        <div className="text-sm text-gray-600">
                          {doctor.experience}+ years
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-gray-500" />
                    <div>
                      <div className="font-medium text-gray-900">Location</div>
                      <div className="text-sm text-gray-600">
                        {doctor.hospital.city.name_en}, {doctor.hospital.city.country.name_en}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-primary-50 p-4">
                    <p className="text-sm text-primary-900">
                      {doctor.available ? '✓ Currently accepting new patients' : 'Contact us for availability'}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4">
                    <Button asChild className="w-full" size="lg">
                      <Link href="/consultation">Book Free Consultation</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Send Inquiry</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose This Doctor */}
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle className="text-lg">Why Choose This Doctor?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      <span>Extensive experience in specialized care</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      <span>International quality standards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      <span>Multilingual consultation available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      <span>Part of accredited hospital</span>
                    </li>
                  </ul>
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
            Ready to Schedule a Consultation?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
            Get expert medical advice from {doctor.title_en} {doctor.name_en} at {doctor.hospital.name_en}
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/consultation">Book Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700">
              <Link href="/booking">Book Treatment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

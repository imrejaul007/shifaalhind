export const dynamic = 'force-dynamic';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CheckCircle,
  DollarSign,
  Calendar,
  Building2,
  ArrowRight,
  Heart,
  Clock,
  Shield
} from 'lucide-react';

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const packageItem = await prisma.package.findUnique({
    where: { slug, published: true },
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
  });

  if (!packageItem) {
    notFound();
  }

  const whatsIncluded = [
    'Pre-treatment consultation and evaluation',
    'All medical procedures as per package',
    'Post-procedure follow-up consultations',
    'Medical reports and documentation',
    'Assistance with visa documentation',
    'Airport pickup and drop-off',
    'Accommodation assistance',
    '24/7 medical support hotline',
    'Language interpretation services',
    'Travel coordination support',
  ];

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
              <Link href="/services" className="hover:text-white">Packages</Link>
              <span>/</span>
              <span className="text-white">{packageItem.name_en}</span>
            </div>

            <div className="flex items-start gap-4">
              {packageItem.thumbnail ? (
                <div className="h-20 w-20 overflow-hidden rounded-lg">
                  <img src={packageItem.thumbnail} alt={packageItem.name_en} className="h-full w-full object-cover" />
                </div>
              ) : (
                <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-white/10">
                  <Heart className="h-10 w-10 text-white" />
                </div>
              )}
              <div className="flex-1">
                <h1 className="mb-2 font-serif text-4xl font-bold md:text-5xl">
                  {packageItem.name_en}
                </h1>
                <p className="mb-4 text-xl text-primary-100">
                  Comprehensive medical tourism package
                </p>
                {packageItem.priceEstimate && (
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-2">
                    <DollarSign className="h-5 w-5" />
                    <span className="text-2xl font-bold">
                      From ${packageItem.priceEstimate.toLocaleString()}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/consultation">Get Custom Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700">
                <Link href="/booking">Book This Package</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="border-b bg-white px-4 py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {packageItem.durationDays && (
              <div className="text-center">
                <div className="mb-2 flex justify-center">
                  <Calendar className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{packageItem.durationDays}</div>
                <div className="text-sm text-gray-600">Days Total</div>
              </div>
            )}
            {packageItem.treatment && (
              <div className="text-center">
                <div className="mb-2 flex justify-center">
                  <Heart className="h-8 w-8 text-red-500" />
                </div>
                <div className="text-lg font-bold text-gray-900">{packageItem.treatment.title_en}</div>
                <div className="text-sm text-gray-600">Treatment Type</div>
              </div>
            )}
            {packageItem.hospital && (
              <div className="text-center">
                <div className="mb-2 flex justify-center">
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-lg font-bold text-gray-900">{packageItem.hospital.name_en}</div>
                <div className="text-sm text-gray-600">Partner Hospital</div>
              </div>
            )}
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Package Overview */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl font-bold text-gray-900">
                Package Overview
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  {packageItem.description_en || `Our ${packageItem.name_en} is a comprehensive medical tourism package designed to provide you with world-class healthcare at an affordable price. This all-inclusive package takes care of every aspect of your medical journey, from initial consultation to post-treatment follow-up.`}
                </p>
              </div>
            </div>

            {/* What's Included */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl font-bold text-gray-900">
                What&apos;s Included
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {packageItem.items_en.length > 0
                  ? packageItem.items_en.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 rounded-lg border p-4">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))
                  : whatsIncluded.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 rounded-lg border p-4">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
              </div>
            </div>

            {/* Hospital Information */}
            {packageItem.hospital && (
              <div className="mb-12">
                <h2 className="mb-6 font-serif text-3xl font-bold text-gray-900">
                  Hospital Information
                </h2>
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-primary-50">
                        <Building2 className="h-8 w-8 text-primary-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{packageItem.hospital.name_en}</CardTitle>
                        <CardDescription>
                          {packageItem.hospital.city.name_en}, {packageItem.hospital.city.country.name_en}
                        </CardDescription>
                        {packageItem.hospital.accreditations.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-2">
                            {packageItem.hospital.accreditations.map((accreditation, index) => (
                              <span
                                key={index}
                                className="flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700"
                              >
                                <Shield className="h-3 w-3" />
                                {accreditation}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 text-sm text-gray-700">
                      {packageItem.hospital.about_en?.substring(0, 200) || 'World-class medical facility with international standards.'}...
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/hospitals/${packageItem.hospital.slug}`}>
                        View Hospital Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Treatment Information */}
            {packageItem.treatment && (
              <div className="mb-12">
                <h2 className="mb-6 font-serif text-3xl font-bold text-gray-900">
                  Treatment Information
                </h2>
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-red-50">
                        <Heart className="h-8 w-8 text-red-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{packageItem.treatment.title_en}</CardTitle>
                        <CardDescription>
                          {packageItem.treatment.category_en || 'Medical Treatment'}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 space-y-2 text-sm">
                      {packageItem.treatment.duration && (
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Duration:</span>
                          <span className="font-semibold text-gray-900">{packageItem.treatment.duration}</span>
                        </div>
                      )}
                      {packageItem.treatment.recovery && (
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Recovery Time:</span>
                          <span className="font-semibold text-gray-900">{packageItem.treatment.recovery}</span>
                        </div>
                      )}
                      {(packageItem.treatment.costMin || packageItem.treatment.costMax) && (
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Cost Range:</span>
                          <span className="font-semibold text-gray-900">
                            ${packageItem.treatment.costMin?.toLocaleString()} - ${packageItem.treatment.costMax?.toLocaleString()}
                          </span>
                        </div>
                      )}
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/treatments/${packageItem.treatment.slug}`}>
                        View Treatment Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* How It Works */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl font-bold text-gray-900">
                How It Works
              </h2>
              <div className="space-y-6">
                {[
                  {
                    step: '1',
                    title: 'Initial Consultation',
                    description: 'Contact us for a free consultation. Our team will assess your needs and provide detailed information about the package.',
                  },
                  {
                    step: '2',
                    title: 'Treatment Planning',
                    description: 'We work with you to customize the package, schedule appointments, and arrange all necessary logistics.',
                  },
                  {
                    step: '3',
                    title: 'Travel & Arrival',
                    description: 'We assist with travel arrangements, visa documentation, and provide airport pickup upon your arrival.',
                  },
                  {
                    step: '4',
                    title: 'Medical Treatment',
                    description: 'Receive world-class treatment at our partner hospital with dedicated care and support throughout.',
                  },
                  {
                    step: '5',
                    title: 'Recovery & Follow-up',
                    description: 'Post-treatment care and follow-up consultations to ensure successful recovery and patient satisfaction.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-500 text-xl font-bold text-white">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Package Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <Card>
                <CardHeader>
                  <CardTitle>Package Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {packageItem.priceEstimate && (
                    <div className="rounded-lg bg-primary-50 p-4">
                      <div className="mb-1 text-sm text-gray-600">Starting from</div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-primary-700">
                          ${packageItem.priceEstimate.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-600">{packageItem.currency}</span>
                      </div>
                    </div>
                  )}

                  {packageItem.durationDays && (
                    <div className="flex items-start gap-3">
                      <Clock className="mt-1 h-5 w-5 shrink-0 text-gray-500" />
                      <div>
                        <div className="font-medium text-gray-900">Duration</div>
                        <div className="text-sm text-gray-600">{packageItem.durationDays} days total</div>
                      </div>
                    </div>
                  )}

                  {packageItem.hospital && (
                    <div className="flex items-start gap-3">
                      <Building2 className="mt-1 h-5 w-5 shrink-0 text-gray-500" />
                      <div>
                        <div className="font-medium text-gray-900">Hospital</div>
                        <div className="text-sm text-gray-600">{packageItem.hospital.name_en}</div>
                        <div className="text-xs text-gray-500">
                          {packageItem.hospital.city.name_en}, {packageItem.hospital.city.country.name_en}
                        </div>
                      </div>
                    </div>
                  )}

                  {packageItem.treatment && (
                    <div className="flex items-start gap-3">
                      <Heart className="mt-1 h-5 w-5 shrink-0 text-gray-500" />
                      <div>
                        <div className="font-medium text-gray-900">Treatment</div>
                        <div className="text-sm text-gray-600">{packageItem.treatment.title_en}</div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2 border-t pt-4">
                    <Button asChild className="w-full" size="lg">
                      <Link href="/consultation">Get Custom Quote</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/booking">Book This Package</Link>
                    </Button>
                    <Button asChild variant="ghost" className="w-full">
                      <Link href="/contact">Ask Questions</Link>
                    </Button>
                  </div>

                  <div className="rounded-lg bg-green-50 p-3 text-sm text-green-900">
                    <div className="mb-1 font-semibold">✓ Best Price Guarantee</div>
                    <div className="text-xs">We ensure you get the best value for your medical journey</div>
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
            Ready to Begin Your Medical Journey?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
            Get a personalized quote for the {packageItem.name_en} today
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

export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, DollarSign, Calendar, Building2, ArrowRight, CheckCircle } from 'lucide-react';

export default async function PackagesPage() {
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

  const benefits = [
    'All-inclusive medical packages',
    'Transparent pricing with no hidden costs',
    'Airport transfers included',
    'Accommodation assistance',
    'Dedicated medical coordinator',
    'Post-treatment follow-up',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            Medical Tourism Packages
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-primary-100">
            All-inclusive healthcare packages with transparent pricing and comprehensive support
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b bg-white px-4 py-12">
        <div className="container mx-auto">
          <h2 className="mb-8 text-center font-serif text-2xl font-bold text-gray-900">
            What&apos;s Included in Our Packages
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
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
            <h3 className="mb-2 text-xl font-semibold text-gray-900">No packages available yet</h3>
            <p className="mb-6 text-gray-600">Check back soon for our medical tourism packages</p>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <Card key={pkg.id} className="flex flex-col transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                    <Heart className="h-8 w-8 text-primary-600" />
                  </div>
                  <CardTitle className="text-xl">{pkg.name_en}</CardTitle>
                  {pkg.treatment && (
                    <CardDescription className="flex items-center gap-2">
                      {pkg.treatment.title_en}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  {/* Price */}
                  {pkg.priceEstimate && (
                    <div className="mb-4 rounded-lg bg-primary-50 p-4">
                      <div className="mb-1 text-sm text-gray-600">Starting from</div>
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
                        <span>{pkg.durationDays} days total</span>
                      </div>
                    )}
                    {pkg.hospital && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Building2 className="h-4 w-4" />
                        <span className="line-clamp-1">{pkg.hospital.name_en}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  {pkg.description_en && (
                    <p className="mb-4 line-clamp-3 text-sm text-gray-600">
                      {pkg.description_en}
                    </p>
                  )}

                  {/* What's Included Preview */}
                  {pkg.items_en.length > 0 && (
                    <div className="mb-4">
                      <h4 className="mb-2 text-sm font-semibold text-gray-900">Includes:</h4>
                      <ul className="space-y-1">
                        {pkg.items_en.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-green-600" />
                            <span className="line-clamp-1">{item}</span>
                          </li>
                        ))}
                        {pkg.items_en.length > 3 && (
                          <li className="text-sm text-primary-600">
                            +{pkg.items_en.length - 3} more items...
                          </li>
                        )}
                      </ul>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="mt-auto space-y-2">
                    <Button asChild className="w-full">
                      <Link href={`/packages/${pkg.slug}`}>
                        View Full Package
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/consultation">Get Custom Quote</Link>
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
            Need a Custom Package?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
            Our medical coordinators can create a personalized package tailored to your specific needs
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

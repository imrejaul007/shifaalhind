export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Bone, Baby, Smile, Eye, Brain, Activity, Scissors } from 'lucide-react';

const treatmentIcons: Record<string, any> = {
  'heart-surgery': Heart,
  'knee-replacement': Bone,
  'ivf': Baby,
  'dental-implants': Smile,
  'cataract-surgery': Eye,
  'brain-surgery': Brain,
  'cancer-treatment': Activity,
  'cosmetic-surgery': Scissors,
};

export default async function TreatmentsPage() {
  const treatments = await prisma.treatment.findMany({
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            Our Treatments
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-primary-100">
            Comprehensive medical treatments with world-class facilities and expert doctors
          </p>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {treatments.map((treatment) => {
            const Icon = treatmentIcons[treatment.slug] || Activity;
            return (
              <Card key={treatment.id} className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <CardTitle className="text-xl">{treatment.title_en}</CardTitle>
                  <CardDescription>{treatment.slug.replace(/-/g, ' ')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-gray-600">
                    Available in {treatment.cityTreatments.length} cities
                  </p>
                  {treatment.cityTreatments.length > 0 && (
                    <Button asChild className="w-full">
                      <Link
                        href={`/medical-tourism/${treatment.cityTreatments[0].city.country.slug}/${treatment.cityTreatments[0].city.slug}/${treatment.slug}`}
                      >
                        View Details
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900">
            Can&apos;t Find Your Treatment?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600">
            We offer a wide range of medical treatments. Contact us for personalized assistance.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/consultation">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

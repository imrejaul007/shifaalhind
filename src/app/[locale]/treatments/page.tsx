export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Bone, Baby, Smile, Eye, Brain, Activity, Scissors, Droplet, Salad, Egg, Pill, Syringe } from 'lucide-react';

const treatmentIcons: Record<string, any> = {
  'heart-surgery': Heart,
  'knee-replacement': Bone,
  'ivf': Baby,
  'dental-implants': Smile,
  'cataract-surgery': Eye,
  'brain-surgery': Brain,
  'cancer-treatment': Activity,
  'cosmetic-surgery': Scissors,
  // Phase 1 treatments
  'rhinoplasty-india': Scissors,
  'angioplasty-india': Heart,
  'liposuction-india': Droplet,
  'acl-reconstruction-india': Bone,
  'breast-augmentation-india': Scissors,
  'all-on-4-dental-implants-india': Smile,
  'pcos-treatment-india': Pill,
  'egg-freezing-india': Egg,
  'veneers-india': Smile,
  'gastric-bypass-india': Salad,
};

// All static treatment pages
const staticTreatments = [
  // Phase 1 High-Value Treatments
  { slug: 'rhinoplasty-india', title: 'Rhinoplasty (Nose Job)', description: 'Cosmetic nose reshaping surgery', category: 'Cosmetic Surgery' },
  { slug: 'angioplasty-india', title: 'Angioplasty & Stenting', description: 'Minimally invasive cardiac procedures', category: 'Cardiac Surgery' },
  { slug: 'liposuction-india', title: 'Liposuction', description: 'Body contouring and fat removal', category: 'Cosmetic Surgery' },
  { slug: 'acl-reconstruction-india', title: 'ACL Reconstruction', description: 'Knee ligament repair for athletes', category: 'Orthopedic Surgery' },
  { slug: 'breast-augmentation-india', title: 'Breast Augmentation', description: 'Breast enhancement and reconstruction', category: 'Cosmetic Surgery' },
  { slug: 'all-on-4-dental-implants-india', title: 'All-on-4 Dental Implants', description: 'Full arch dental restoration', category: 'Dental Surgery' },
  { slug: 'pcos-treatment-india', title: 'PCOS Treatment', description: 'Comprehensive PCOS management', category: 'Fertility & Gynecology' },
  { slug: 'egg-freezing-india', title: 'Egg Freezing', description: 'Fertility preservation for future', category: 'Fertility & Gynecology' },
  { slug: 'veneers-india', title: 'Dental Veneers', description: 'Cosmetic dental enhancement', category: 'Dental Surgery' },
  { slug: 'gastric-bypass-india', title: 'Gastric Bypass Surgery', description: 'Weight loss and bariatric surgery', category: 'Bariatric Surgery' },

  // Month 3-4 Treatment Pages
  { slug: 'hair-transplant-india', title: 'Hair Transplant', description: 'FUE, FUT, and DHI hair restoration', category: 'Cosmetic Surgery' },
  { slug: 'dental-implants-india', title: 'Dental Implants', description: 'Titanium and zirconia implants', category: 'Dental Surgery' },
  { slug: 'piles-surgery-india', title: 'Piles Surgery', description: 'Laser and traditional hemorrhoid treatment', category: 'General Surgery' },
  { slug: 'kidney-stone-treatment-india', title: 'Kidney Stone Treatment', description: 'ESWL, RIRS, and PCNL procedures', category: 'Urology' },
  { slug: 'hip-replacement-india', title: 'Hip Replacement', description: 'Total and partial hip arthroplasty', category: 'Orthopedic Surgery' },
  { slug: 'varicose-veins-treatment-india', title: 'Varicose Veins Treatment', description: 'Laser EVLT and traditional surgery', category: 'Vascular Surgery' },
  { slug: 'cataract-surgery-india', title: 'Cataract Surgery', description: 'Phacoemulsification with IOL implants', category: 'Ophthalmology' },
  { slug: 'lasik-eye-surgery-india', title: 'LASIK Eye Surgery', description: 'Blade-free, Contoura, and SMILE', category: 'Ophthalmology' },
  { slug: 'breast-cancer-treatment-india', title: 'Breast Cancer Treatment', description: 'Surgery, chemo, radiation, and targeted therapy', category: 'Oncology' },
  { slug: 'lung-cancer-treatment-india', title: 'Lung Cancer Treatment', description: 'VATS, lobectomy, and advanced therapies', category: 'Oncology' },
  { slug: 'shoulder-surgery-india', title: 'Shoulder Surgery', description: 'Rotator cuff, arthroscopy, and replacement', category: 'Orthopedic Surgery' },
  { slug: 'gallbladder-surgery-india', title: 'Gallbladder Surgery', description: 'Laparoscopic cholecystectomy', category: 'General Surgery' },
  { slug: 'colon-cancer-treatment-india', title: 'Colon Cancer Treatment', description: 'Colorectal surgery and advanced oncology', category: 'Oncology' },
  { slug: 'hernia-surgery-india', title: 'Hernia Surgery', description: 'Laparoscopic and open hernia repair', category: 'General Surgery' },
  { slug: 'cervical-cancer-treatment-india', title: 'Cervical Cancer Treatment', description: 'Hysterectomy, radiation, and chemotherapy', category: 'Oncology' },
  { slug: 'appendix-surgery-india', title: 'Appendix Surgery', description: 'Laparoscopic appendectomy', category: 'General Surgery' },
  { slug: 'blood-cancer-treatment-india', title: 'Blood Cancer Treatment', description: 'Leukemia, lymphoma, and BMT', category: 'Oncology' },
  { slug: 'thyroid-surgery-india', title: 'Thyroid Surgery', description: 'Thyroidectomy and minimally invasive procedures', category: 'Endocrine Surgery' },
  { slug: 'hysterectomy-surgery-india', title: 'Hysterectomy Surgery', description: 'Laparoscopic and robotic hysterectomy', category: 'Gynecology' },
  { slug: 'prostate-cancer-treatment-india', title: 'Prostate Cancer Treatment', description: 'Prostatectomy, radiation, and hormone therapy', category: 'Oncology' },
];

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

      {/* All Treatment Pages */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="mb-2 font-serif text-3xl font-bold text-gray-900">
            All Treatments ({staticTreatments.length})
          </h2>
          <p className="text-gray-600">
            Browse our complete range of medical treatments with detailed cost guides and information
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {staticTreatments.map((treatment) => {
            const Icon = treatmentIcons[treatment.slug] || Activity;
            return (
              <Card key={treatment.slug} className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <CardTitle className="text-xl">{treatment.title}</CardTitle>
                  <CardDescription>{treatment.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-gray-600">
                    {treatment.category}
                  </p>
                  <Button asChild className="w-full">
                    <Link href={`/treatments/${treatment.slug}`}>
                      View Details
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Database Treatments (if any) */}
      {treatments.length > 0 && (
        <section className="container mx-auto px-4 py-16 bg-gray-50">
          <div className="mb-8">
            <h2 className="mb-2 font-serif text-3xl font-bold text-gray-900">
              Additional Treatments
            </h2>
            <p className="text-gray-600">
              More specialized treatments available through our hospital network
            </p>
          </div>
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
      )}

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

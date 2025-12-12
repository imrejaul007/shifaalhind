export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Heart, Bone, Baby, Smile, Eye, Brain, Activity, Scissors, Droplet, Salad, Egg, Pill, Syringe,
  TrendingDown, Users, Award, Clock, Star, Sparkles, CheckCircle, Phone, MessageCircle, Globe
} from 'lucide-react';

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
  'hair-transplant-india': Scissors,
  'dental-implants-india': Smile,
  'piles-surgery-india': Activity,
  'kidney-stone-treatment-india': Activity,
  'hip-replacement-india': Bone,
  'varicose-veins-treatment-india': Activity,
  'cataract-surgery-india': Eye,
  'lasik-eye-surgery-india': Eye,
  'breast-cancer-treatment-india': Activity,
  'lung-cancer-treatment-india': Activity,
  'shoulder-surgery-india': Bone,
  'gallbladder-surgery-india': Activity,
  'colon-cancer-treatment-india': Activity,
  'hernia-surgery-india': Activity,
  'cervical-cancer-treatment-india': Activity,
  'appendix-surgery-india': Activity,
  'blood-cancer-treatment-india': Activity,
  'thyroid-surgery-india': Activity,
  'hysterectomy-surgery-india': Activity,
  'prostate-cancer-treatment-india': Activity,
};

// All static treatment pages organized by category
const treatmentsByCategory = {
  'Cosmetic Surgery': [
    { slug: 'rhinoplasty-india', title: 'Rhinoplasty (Nose Job)', description: 'Cosmetic nose reshaping surgery', savings: '$12K-$16K' },
    { slug: 'liposuction-india', title: 'Liposuction', description: 'Body contouring and fat removal', savings: '$8K-$12K' },
    { slug: 'breast-augmentation-india', title: 'Breast Augmentation', description: 'Breast enhancement and reconstruction', savings: '$10K-$14K' },
    { slug: 'hair-transplant-india', title: 'Hair Transplant', description: 'FUE, FUT, and DHI hair restoration', savings: '$6K-$10K' },
  ],
  'Cardiac Surgery': [
    { slug: 'angioplasty-india', title: 'Angioplasty & Stenting', description: 'Minimally invasive cardiac procedures', savings: '$25K-$35K' },
  ],
  'Orthopedic Surgery': [
    { slug: 'acl-reconstruction-india', title: 'ACL Reconstruction', description: 'Knee ligament repair for athletes', savings: '$15K-$20K' },
    { slug: 'knee-replacement', title: 'Knee Replacement', description: 'Total and partial knee arthroplasty', savings: '$18K-$25K' },
    { slug: 'hip-replacement-india', title: 'Hip Replacement', description: 'Total and partial hip arthroplasty', savings: '$18K-$25K' },
    { slug: 'shoulder-surgery-india', title: 'Shoulder Surgery', description: 'Rotator cuff, arthroscopy, and replacement', savings: '$12K-$18K' },
  ],
  'Dental Surgery': [
    { slug: 'all-on-4-dental-implants-india', title: 'All-on-4 Dental Implants', description: 'Full arch dental restoration', savings: '$20K-$28K' },
    { slug: 'dental-implants-india', title: 'Dental Implants', description: 'Titanium and zirconia implants', savings: '$3K-$5K' },
    { slug: 'veneers-india', title: 'Dental Veneers', description: 'Cosmetic dental enhancement', savings: '$4K-$6K' },
  ],
  'Fertility & Gynecology': [
    { slug: 'pcos-treatment-india', title: 'PCOS Treatment', description: 'Comprehensive PCOS management', savings: '$5K-$8K' },
    { slug: 'egg-freezing-india', title: 'Egg Freezing', description: 'Fertility preservation for future', savings: '$8K-$12K' },
    { slug: 'ivf', title: 'IVF & Fertility', description: 'Advanced fertility treatments', savings: '$10K-$15K' },
    { slug: 'hysterectomy-surgery-india', title: 'Hysterectomy Surgery', description: 'Laparoscopic and robotic hysterectomy', savings: '$8K-$12K' },
  ],
  'Bariatric Surgery': [
    { slug: 'gastric-bypass-india', title: 'Gastric Bypass Surgery', description: 'Weight loss and bariatric surgery', savings: '$15K-$20K' },
  ],
  'Ophthalmology': [
    { slug: 'cataract-surgery-india', title: 'Cataract Surgery', description: 'Phacoemulsification with IOL implants', savings: '$4K-$6K' },
    { slug: 'lasik-eye-surgery-india', title: 'LASIK Eye Surgery', description: 'Blade-free, Contoura, and SMILE', savings: '$3K-$5K' },
  ],
  'Oncology': [
    { slug: 'breast-cancer-treatment-india', title: 'Breast Cancer Treatment', description: 'Surgery, chemo, radiation, and targeted therapy', savings: '$20K-$35K' },
    { slug: 'lung-cancer-treatment-india', title: 'Lung Cancer Treatment', description: 'VATS, lobectomy, and advanced therapies', savings: '$25K-$40K' },
    { slug: 'colon-cancer-treatment-india', title: 'Colon Cancer Treatment', description: 'Colorectal surgery and advanced oncology', savings: '$18K-$30K' },
    { slug: 'cervical-cancer-treatment-india', title: 'Cervical Cancer Treatment', description: 'Hysterectomy, radiation, and chemotherapy', savings: '$15K-$25K' },
    { slug: 'blood-cancer-treatment-india', title: 'Blood Cancer Treatment', description: 'Leukemia, lymphoma, and BMT', savings: '$30K-$50K' },
    { slug: 'prostate-cancer-treatment-india', title: 'Prostate Cancer Treatment', description: 'Prostatectomy, radiation, and hormone therapy', savings: '$20K-$35K' },
    { slug: 'cancer-treatment', title: 'General Cancer Treatment', description: 'Comprehensive oncology care', savings: '$25K-$45K' },
  ],
  'General Surgery': [
    { slug: 'piles-surgery-india', title: 'Piles Surgery', description: 'Laser and traditional hemorrhoid treatment', savings: '$2K-$4K' },
    { slug: 'gallbladder-surgery-india', title: 'Gallbladder Surgery', description: 'Laparoscopic cholecystectomy', savings: '$3K-$5K' },
    { slug: 'hernia-surgery-india', title: 'Hernia Surgery', description: 'Laparoscopic and open hernia repair', savings: '$3K-$6K' },
    { slug: 'appendix-surgery-india', title: 'Appendix Surgery', description: 'Laparoscopic appendectomy', savings: '$2K-$4K' },
  ],
  'Urology': [
    { slug: 'kidney-stone-treatment-india', title: 'Kidney Stone Treatment', description: 'ESWL, RIRS, and PCNL procedures', savings: '$4K-$8K' },
  ],
  'Vascular Surgery': [
    { slug: 'varicose-veins-treatment-india', title: 'Varicose Veins Treatment', description: 'Laser EVLT and traditional surgery', savings: '$3K-$6K' },
  ],
  'Neurosurgery': [
    { slug: 'brain-surgery', title: 'Brain Surgery', description: 'Advanced neurosurgical procedures', savings: '$20K-$40K' },
  ],
  'Endocrine Surgery': [
    { slug: 'thyroid-surgery-india', title: 'Thyroid Surgery', description: 'Thyroidectomy and minimally invasive procedures', savings: '$4K-$8K' },
  ],
};

// Popular treatments for GCC patients
const popularForGCC = [
  'rhinoplasty-india',
  'hair-transplant-india',
  'ivf',
  'dental-implants-india',
  'knee-replacement',
  'cataract-surgery-india',
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
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 px-4 py-20 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>30+ World-Class Treatments Available</span>
          </div>
          <h1 className="mb-6 font-serif text-4xl font-bold md:text-6xl">
            Medical Treatments in India
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-primary-100">
            Save 60-80% on world-class medical treatments with JCI-accredited hospitals
            and native Arabic-speaking coordinators from GCC
          </p>

          {/* Stats */}
          <div className="mx-auto mb-8 grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { icon: TrendingDown, label: '60-80% Savings', value: 'vs USA/UK/UAE' },
              { icon: Users, label: '10,000+', value: 'GCC Patients' },
              { icon: Award, label: '40+', value: 'JCI Hospitals' },
              { icon: Clock, label: '24/7', value: 'Arabic Support' },
            ].map((stat, idx) => (
              <div key={idx} className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <stat.icon className="mx-auto mb-2 h-6 w-6" />
                <p className="mb-1 text-lg font-bold">{stat.label}</p>
                <p className="text-sm text-primary-100">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="shadow-xl">
              <Link href="/consultation">Free Medical Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
              <Link href="#popular-gcc">
                <Globe className="mr-2 h-5 w-5" />
                Popular for GCC Patients
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* GCC Patient Testimonials */}
      <section className="border-b-2 border-primary-100 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 px-4 py-16">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700">
              <Users className="h-4 w-4" />
              Patient Success Stories
            </div>
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
              Why GCC Patients Choose India
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Thousands of patients from UAE, Saudi Arabia, Qatar, and other GCC countries
              save significantly while receiving world-class treatment
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: 'Ahmed Al-Mansouri',
                location: 'Dubai, UAE',
                treatment: 'Rhinoplasty',
                quote: 'Saved $14,000 on my nose surgery. The Arabic coordinator who lived in Dubai for 10 years made everything seamless. Hospital was more advanced than private clinics in UAE!',
                rating: 5,
              },
              {
                name: 'Fatima Al-Rashid',
                location: 'Riyadh, Saudi Arabia',
                treatment: 'IVF Treatment',
                quote: 'After 3 failed IVF cycles in Riyadh, we succeeded on our first attempt in Bangalore. Saved 75% and finally became parents. The Arabic-speaking team understood our needs perfectly.',
                rating: 5,
              },
              {
                name: 'Mohammed Al-Thani',
                location: 'Doha, Qatar',
                treatment: 'Knee Replacement',
                quote: 'Bilateral knee replacement cost me $8,000 vs $50,000 in Qatar. Back to playing tennis in 3 months. The coordinator arranged everything including halal food and prayer rooms.',
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="border-2 border-primary-100 bg-gradient-to-br from-white to-primary-50 transition-all hover:scale-105 hover:shadow-2xl">
                <CardHeader>
                  <div className="mb-2 flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Globe className="h-3 w-3" />
                    {testimonial.location} • {testimonial.treatment}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="italic text-gray-700">&quot;{testimonial.quote}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular for GCC Patients */}
      <section id="popular-gcc" className="bg-white px-4 py-16">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              <Sparkles className="h-4 w-4" />
              Most Popular
            </div>
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
              Top Treatments for GCC Patients
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              These treatments are most frequently chosen by patients from UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(treatmentsByCategory)
              .flatMap(([category, items]) =>
                items
                  .filter(treatment => popularForGCC.includes(treatment.slug))
                  .map(treatment => ({ ...treatment, category }))
              )
              .map((treatment) => {
                const Icon = treatmentIcons[treatment.slug] || Activity;
                return (
                  <Card key={treatment.slug} className="group border-2 border-green-100 bg-white transition-all hover:scale-105 hover:border-green-300 hover:shadow-2xl">
                    <CardHeader>
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg transition-all group-hover:scale-110">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                          ⭐ Popular
                        </div>
                      </div>
                      <CardTitle className="text-xl">{treatment.title}</CardTitle>
                      <CardDescription>{treatment.description}</CardDescription>
                      <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-green-700">
                        <TrendingDown className="h-4 w-4" />
                        Save {treatment.savings}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-gray-600">
                        {treatment.category}
                      </p>
                      <Button asChild className="w-full">
                        <Link href={`/treatments/${treatment.slug}`}>
                          View Details & Pricing
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        </div>
      </section>

      {/* All Treatments by Category */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
              Browse All Treatments by Specialty
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Explore our complete range of medical treatments organized by specialty
            </p>
          </div>

          {Object.entries(treatmentsByCategory).map(([category, items]) => (
            <div key={category} className="mb-12">
              <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900">
                <div className="h-1 w-12 rounded-full bg-primary-500" />
                {category}
                <span className="text-lg font-normal text-gray-500">({items.length} treatments)</span>
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((treatment) => {
                  const Icon = treatmentIcons[treatment.slug] || Activity;
                  const isPopular = popularForGCC.includes(treatment.slug);
                  return (
                    <Card key={treatment.slug} className="group border-2 transition-all hover:scale-105 hover:shadow-xl">
                      <CardHeader>
                        <div className="mb-4 flex items-center justify-between">
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 transition-all group-hover:bg-primary-200">
                            <Icon className="h-7 w-7 text-primary-600" />
                          </div>
                          {isPopular && (
                            <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                              Popular
                            </div>
                          )}
                        </div>
                        <CardTitle className="text-lg leading-tight">{treatment.title}</CardTitle>
                        <CardDescription className="text-sm">{treatment.description}</CardDescription>
                        <div className="mt-2 flex items-center gap-1 text-xs font-semibold text-green-700">
                          <TrendingDown className="h-3 w-3" />
                          Save {treatment.savings}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Button asChild className="w-full" size="sm">
                          <Link href={`/treatments/${treatment.slug}`}>
                            View Details
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Database Treatments (if any) */}
      {treatments.length > 0 && (
        <section className="container mx-auto px-4 py-16">
          <div className="mb-8">
            <h2 className="mb-2 font-serif text-3xl font-bold text-gray-900">
              Additional Specialized Treatments
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
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 px-4 py-16 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative mx-auto text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            Can&apos;t Find Your Treatment?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
            Our native Arabic-speaking medical coordinators (from Dubai & Riyadh) will help you
            find the right treatment and hospital. Available 24/7 on WhatsApp.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="shadow-xl">
              <Link href="/consultation">
                <CheckCircle className="mr-2 h-5 w-5" />
                Free Medical Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
              <Link href="https://wa.me/919876543210">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp في العربية
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

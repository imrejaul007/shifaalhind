export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Building2, Award, MapPin, Phone, CheckCircle, Star, Users, Sparkles,
  Globe, Heart, Bed, TrendingDown, MessageCircle, Clock, Hotel
} from 'lucide-react';

export default async function HospitalsPage() {
  const hospitals = await prisma.hospital.findMany({
    where: { published: true },
    include: {
      city: {
        include: {
          country: true,
        },
      },
      doctors: true,
    },
    orderBy: [
      { featured: 'desc' },
      { rating: 'desc' },
    ],
  });

  // Filter hospitals by city for highlighting
  const bangaloreHospitals = hospitals.filter(h => h.city.slug === 'bangalore');

  const features = [
    'JCI & NABH Accredited Hospitals',
    'State-of-the-art Medical Technology',
    'Board-Certified Specialist Doctors',
    'International Patient Services',
    'Native Arabic-Speaking Coordinators',
    '24/7 Emergency Services',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 px-4 py-20 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>40+ JCI/NABH Accredited Hospitals | Focus on Bangalore</span>
          </div>
          <h1 className="mb-6 font-serif text-4xl font-bold md:text-6xl">
            World-Class Partner Hospitals
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-primary-100">
            JCI-accredited hospitals in Bangalore with cutting-edge technology,
            international patient services, and accommodation at Pentouz Hotels
          </p>

          {/* Stats */}
          <div className="mx-auto mb-8 grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { icon: Building2, label: `{hospitals.length}+`, value: 'Partner Hospitals' },
              { icon: MapPin, label: `{bangaloreHospitals.length}+`, value: 'In Bangalore' },
              { icon: Award, label: '40+', value: 'JCI/NABH Certified' },
              { icon: TrendingDown, label: '60-80%', value: 'Cost Savings' },
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
              <Link href="/consultation">Find Right Hospital</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
              <Link href="#bangalore-hospitals">
                <MapPin className="mr-2 h-5 w-5" />
                Bangalore Hospitals
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b-2 border-primary-100 bg-white px-4 py-12">
        <div className="container mx-auto">
          <div className="mb-8 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900">
              Why Our Partner Hospitals?
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 rounded-lg border-2 border-primary-100 bg-gradient-to-br from-white to-primary-50 p-4 transition-all hover:scale-105 hover:border-primary-300 hover:shadow-lg">
                <CheckCircle className="h-6 w-6 shrink-0 text-green-600" />
                <span className="font-medium text-gray-900">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GCC Patient Testimonials */}
      <section className="border-b-2 border-primary-100 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 px-4 py-16">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700">
              <Users className="h-4 w-4" />
              Success Stories
            </div>
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
              GCC Patients Love Our Hospitals
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: 'Abdullah Al-Hamad',
                location: 'Doha, Qatar',
                hospital: 'Narayana Health City',
                treatment: 'Heart Bypass Surgery',
                quote: 'Narayana Health City is world-class. Dr. Devi Shetty performed my surgery. The hospital has more advanced equipment than many hospitals in GCC. Saved $95,000!',
                rating: 5,
              },
              {
                name: 'Layla Al-Saud',
                location: 'Riyadh, Saudi Arabia',
                hospital: 'Manipal Hospital',
                treatment: 'Hip Replacement',
                quote: 'Manipal Hospital Bangalore is outstanding. JCI-accredited with robotic surgery. The Arabic coordinator arranged everything including halal food. Highly recommend!',
                rating: 5,
              },
              {
                name: 'Rashid Al-Maktoum',
                location: 'Dubai, UAE',
                hospital: 'Apollo Hospital',
                treatment: 'Cancer Treatment',
                quote: 'Apollo Hospital has Proton Therapy, the most advanced cancer treatment. Stayed at Pentouz Hotels nearby - very comfortable. Saved $120,000 vs USA. Best decision!',
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
                  <CardDescription className="space-y-1">
                    <div className="flex items-center gap-1 text-xs">
                      <Globe className="h-3 w-3" />
                      {testimonial.location}
                    </div>
                    <div className="text-xs font-semibold text-primary-600">
                      {testimonial.hospital} • {testimonial.treatment}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm italic text-gray-700">&quot;{testimonial.quote}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bangalore Hospitals Highlight */}
      {bangaloreHospitals.length > 0 && (
        <section id="bangalore-hospitals" className="bg-white px-4 py-16">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                <MapPin className="h-4 w-4" />
                India's Medical Tourism Capital
              </div>
              <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
                Best Hospitals in Bangalore
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Bangalore (Bengaluru) is India&apos;s premier medical tourism destination with world-class hospitals,
                expert doctors, best weather year-round, and comfortable accommodation at Pentouz Hotels.
              </p>
            </div>

            {/* Bangalore Benefits */}
            <div className="mb-12 grid gap-6 md:grid-cols-4">
              {[
                {
                  icon: Award,
                  title: 'JCI-Accredited',
                  description: '10+ JCI/NABH certified hospitals with international standards',
                },
                {
                  icon: Heart,
                  title: 'World-Class Care',
                  description: 'Cutting-edge technology including robotic surgery and Proton Therapy',
                },
                {
                  icon: Hotel,
                  title: 'Pentouz Hotels',
                  description: 'Premium accommodation near hospitals with all amenities',
                },
                {
                  icon: Globe,
                  title: 'Best Weather',
                  description: '15-30°C year-round - perfect for recovery and tourism',
                },
              ].map((benefit, idx) => (
                <Card key={idx} className="border-2 border-green-100 bg-gradient-to-br from-white to-green-50 text-center transition-all hover:scale-105 hover:shadow-xl">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    <CardDescription className="text-sm">{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Pentouz Hotels Info */}
            <Card className="mb-12 border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-xl">
                    <Hotel className="h-10 w-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl">Accommodation at Pentouz Hotels</CardTitle>
                    <CardDescription className="text-base">
                      Premium comfort during your medical journey in Bangalore
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    { icon: MapPin, text: 'Near Major Hospitals', detail: 'Easy access to all our partner hospitals' },
                    { icon: Bed, text: 'Family-Friendly Rooms', detail: 'Spacious rooms with all modern amenities' },
                    { icon: CheckCircle, text: 'Halal Food Available', detail: 'Multi-cuisine restaurant with halal options' },
                  ].map((feature, idx) => (
                    <div key={idx} className="flex gap-3 rounded-lg bg-white/70 p-4">
                      <feature.icon className="h-6 w-6 shrink-0 text-orange-600" />
                      <div>
                        <p className="font-semibold text-gray-900">{feature.text}</p>
                        <p className="text-sm text-gray-600">{feature.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button asChild size="lg" variant="default" className="bg-orange-600 hover:bg-orange-700">
                    <Link href="https://pentouz.com/" target="_blank" rel="noopener noreferrer">
                      <Hotel className="mr-2 h-5 w-5" />
                      Visit Pentouz Hotels →
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Bangalore Hospitals Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {bangaloreHospitals.map((hospital) => (
                <Card key={hospital.id} className="group border-2 border-green-100 bg-white transition-all hover:scale-105 hover:border-green-300 hover:shadow-2xl">
                  <CardHeader>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg transition-all group-hover:scale-110">
                        <Building2 className="h-8 w-8 text-white" />
                      </div>
                      {hospital.featured && (
                        <div className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                          ⭐ Featured
                        </div>
                      )}
                    </div>
                    <CardTitle className="text-xl">{hospital.name_en}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {hospital.city.name_en}, India
                    </CardDescription>
                    {hospital.rating && (
                      <div className="mt-2 flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{hospital.rating}/5</span>
                        <span className="text-gray-500">({hospital.reviewCount} reviews)</span>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {hospital.accreditations.length > 0 && (
                      <div className="flex flex-wrap items-center gap-2">
                        <Award className="h-4 w-4 text-green-600" />
                        {hospital.accreditations.map((accreditation, idx) => (
                          <span key={idx} className="rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-700">
                            {accreditation}
                          </span>
                        ))}
                      </div>
                    )}

                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-gray-900">
                        Top Specialties:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {hospital.specialties.slice(0, 4).map((specialty, idx) => (
                          <span
                            key={idx}
                            className="rounded-full bg-green-50 px-2 py-1 text-xs text-green-700"
                          >
                            {specialty}
                          </span>
                        ))}
                        {hospital.specialties.length > 4 && (
                          <span className="rounded-full bg-green-50 px-2 py-1 text-xs text-green-700">
                            +{hospital.specialties.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {hospital.doctors.length > 0 && (
                      <div className="rounded-lg bg-green-50 p-3">
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold text-green-700">{hospital.doctors.length}</span> Expert Doctors
                        </p>
                      </div>
                    )}

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

            {bangaloreHospitals.length > 6 && (
              <div className="mt-8 text-center">
                <p className="mb-4 text-gray-600">
                  Showing {Math.min(6, bangaloreHospitals.length)} of {bangaloreHospitals.length} hospitals in Bangalore
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* All Hospitals Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
            All Partner Hospitals ({hospitals.length})
          </h2>
          <p className="text-gray-600">
            Browse our complete network of JCI/NABH accredited hospitals across India
          </p>
        </div>

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
              <Card key={hospital.id} className="border-2 transition-all hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 transition-all group-hover:bg-primary-200">
                      <Building2 className="h-8 w-8 text-primary-600" />
                    </div>
                    {hospital.city.slug === 'bangalore' && (
                      <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                        <MapPin className="mr-1 inline h-3 w-3" />
                        Bangalore
                      </div>
                    )}
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
                        <span key={idx} className="rounded-full bg-accent-50 px-2 py-1 text-xs font-semibold text-accent-700">
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
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 px-4 py-16 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative mx-auto text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            Find the Perfect Hospital for Your Treatment
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
            Our medical experts and native Arabic coordinators (from Dubai & Riyadh)
            will help you choose the best hospital. Available 24/7 on WhatsApp.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="shadow-xl">
              <Link href="/consultation">
                <CheckCircle className="mr-2 h-5 w-5" />
                Free Hospital Selection
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
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

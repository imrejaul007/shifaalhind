export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  User, Award, GraduationCap, Languages, CheckCircle, Star, Briefcase,
  MapPin, Phone, MessageCircle, Globe, Users, Sparkles, TrendingDown, Building2
} from 'lucide-react';

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

  // Filter doctors by city for highlighting
  const bangaloreDoctors = doctors.filter(d => d.hospital.city.slug === 'bangalore');
  const arabicSpeakingDoctors = doctors.filter(d => d.languages.includes('Arabic'));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 px-4 py-20 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>25+ Expert Doctors in Bangalore | Arabic-Speaking Team</span>
          </div>
          <h1 className="mb-6 font-serif text-4xl font-bold md:text-6xl">
            World-Class Medical Experts
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-primary-100">
            Board-certified specialists with international training, decades of experience,
            and Arabic-speaking support for GCC patients
          </p>

          {/* Stats */}
          <div className="mx-auto mb-8 grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { icon: Users, label: '{doctors.length}+', value: 'Expert Doctors' },
              { icon: Languages, label: '{arabicSpeakingDoctors.length}+', value: 'Arabic Speaking' },
              { icon: Award, label: '15-35 Years', value: 'Experience' },
              { icon: Building2, label: 'JCI/NABH', value: 'Accredited' },
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
              <Link href="/consultation">Book Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
              <Link href="#arabic-doctors">
                <Languages className="mr-2 h-5 w-5" />
                Arabic-Speaking Doctors
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Our Doctors */}
      <section className="border-b-2 border-primary-100 bg-white px-4 py-16">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700">
              <Award className="h-4 w-4" />
              Why Choose Our Doctors?
            </div>
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
              Trusted by 10,000+ GCC Patients
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                icon: GraduationCap,
                title: 'International Qualifications',
                description: 'MBBS, MS, MCh, DM degrees from top Indian & international medical colleges',
              },
              {
                icon: Briefcase,
                title: '15-35 Years Experience',
                description: 'Senior consultants with thousands of successful surgeries and procedures',
              },
              {
                icon: Languages,
                title: 'Multi-lingual Support',
                description: 'Doctors speak English, Hindi, and work with native Arabic coordinators from GCC',
              },
              {
                icon: CheckCircle,
                title: 'Patient-Centric Care',
                description: 'Personalized treatment plans, second opinions, and 24/7 support',
              },
            ].map((item, index) => (
              <Card key={index} className="group border-2 transition-all hover:scale-105 hover:border-primary-300 hover:shadow-xl">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg transition-all group-hover:scale-110">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                </CardHeader>
              </Card>
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
              Patient Reviews
            </div>
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
              What GCC Patients Say About Our Doctors
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: 'Khalid Al-Mahmoud',
                location: 'Kuwait City, Kuwait',
                doctor: 'Dr. Devi Shetty',
                treatment: 'Heart Bypass Surgery',
                quote: 'Dr. Shetty is a world-renowned cardiac surgeon. The Arabic coordinator explained everything in my language. The care was exceptional and I saved $90,000 compared to USA.',
                rating: 5,
              },
              {
                name: 'Mariam Al-Sabah',
                location: 'Abu Dhabi, UAE',
                doctor: 'Dr. Rajesh Bendre',
                treatment: 'IVF Treatment',
                quote: 'Dr. Bendre and his team were incredibly compassionate. After 2 failed cycles in UAE, we succeeded in Bangalore. The Arabic-speaking team made us feel at home.',
                rating: 5,
              },
              {
                name: 'Omar Al-Ghamdi',
                location: 'Jeddah, Saudi Arabia',
                doctor: 'Dr. Anil Arora',
                treatment: 'Knee Replacement',
                quote: 'Dr. Arora is one of India&apos;s best orthopedic surgeons. I was walking without pain in 2 weeks. The coordinator arranged halal food and prayer facilities. Highly recommended!',
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
                      {testimonial.doctor} • {testimonial.treatment}
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

      {/* Bangalore Doctors Highlight */}
      {bangaloreDoctors.length > 0 && (
        <section className="bg-white px-4 py-16">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                <MapPin className="h-4 w-4" />
                Bangalore Medical Hub
              </div>
              <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
                Top Doctors in Bangalore
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Bangalore is India&apos;s medical tourism capital with world-class hospitals and expert doctors.
                We work with the best specialists across all major hospitals.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {bangaloreDoctors.slice(0, 6).map((doctor) => (
                <Card key={doctor.id} className="group border-2 border-green-100 bg-white transition-all hover:scale-105 hover:border-green-300 hover:shadow-2xl">
                  <CardHeader>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg transition-all group-hover:scale-110">
                        <User className="h-10 w-10 text-white" />
                      </div>
                      {doctor.featured && (
                        <div className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                          ⭐ Top Doctor
                        </div>
                      )}
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
                      <div className="mb-1 flex items-center gap-2 text-sm font-semibold text-gray-900">
                        <Building2 className="h-4 w-4 text-green-600" />
                        {doctor.hospital.name_en}
                      </div>
                      <p className="text-sm text-gray-600">
                        {doctor.hospital.city.name_en}, India
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
                          {doctor.qualifications.slice(0, 2).map((qual, idx) => (
                            <span
                              key={idx}
                              className="rounded-full bg-green-50 px-2 py-1 text-xs text-green-700"
                            >
                              {qual}
                            </span>
                          ))}
                          {doctor.qualifications.length > 2 && (
                            <span className="rounded-full bg-green-50 px-2 py-1 text-xs text-green-700">
                              +{doctor.qualifications.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {doctor.languages.length > 0 && (
                      <div className="flex items-center gap-2 text-sm">
                        <Languages className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600">{doctor.languages.join(', ')}</span>
                      </div>
                    )}

                    {doctor.consultationFee && (
                      <div className="rounded-lg bg-green-50 p-3 text-center">
                        <p className="text-xs text-gray-600">Consultation Fee</p>
                        <p className="text-lg font-bold text-green-700">${doctor.consultationFee}</p>
                      </div>
                    )}

                    <Button asChild className="w-full">
                      <Link href={`/doctors/${doctor.slug}`}>View Full Profile</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {bangaloreDoctors.length > 6 && (
              <div className="mt-8 text-center">
                <p className="mb-4 text-gray-600">
                  Showing 6 of {bangaloreDoctors.length} doctors in Bangalore
                </p>
                <Button asChild variant="outline" size="lg">
                  <Link href="#all-doctors">View All Bangalore Doctors</Link>
                </Button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Arabic-Speaking Doctors */}
      {arabicSpeakingDoctors.length > 0 && (
        <section id="arabic-doctors" className="border-b-2 border-primary-100 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 px-4 py-16">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
                <Languages className="h-4 w-4" />
                For GCC Patients
              </div>
              <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
                Arabic-Speaking Medical Team
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Our doctors work with native Arabic-speaking coordinators who lived in GCC countries
                for 5-15 years. They understand your language, culture, and medical needs.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {arabicSpeakingDoctors.map((doctor) => (
                <Card key={doctor.id} className="group border-2 border-orange-100 bg-white transition-all hover:scale-105 hover:border-orange-300 hover:shadow-2xl">
                  <CardHeader>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg transition-all group-hover:scale-110">
                        <User className="h-10 w-10 text-white" />
                      </div>
                      <div className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                        <Languages className="mr-1 inline h-3 w-3" />
                        Arabic
                      </div>
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
                      <p className="mb-1 text-sm font-semibold text-gray-900">{doctor.hospital.name_en}</p>
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
                              className="rounded-full bg-orange-50 px-2 py-1 text-xs text-orange-700"
                            >
                              {qual}
                            </span>
                          ))}
                          {doctor.qualifications.length > 3 && (
                            <span className="rounded-full bg-orange-50 px-2 py-1 text-xs text-orange-700">
                              +{doctor.qualifications.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="rounded-lg bg-orange-50 p-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Languages className="h-4 w-4 text-orange-600" />
                        <span className="font-semibold text-orange-900">
                          {doctor.languages.join(', ')}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-orange-700">
                        + Native Arabic coordinator support
                      </p>
                    </div>

                    {doctor.consultationFee && (
                      <div className="rounded-lg bg-green-50 p-3 text-center">
                        <p className="text-xs text-gray-600">Consultation Fee</p>
                        <p className="text-lg font-bold text-green-700">${doctor.consultationFee}</p>
                      </div>
                    )}

                    <Button asChild className="w-full">
                      <Link href={`/doctors/${doctor.slug}`}>View Full Profile</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Doctors Grid */}
      <section id="all-doctors" className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
            All Expert Doctors ({doctors.length})
          </h2>
          <p className="text-gray-600">
            Browse our complete network of board-certified specialists across India
          </p>
        </div>

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
              <Card key={doctor.id} className="border-2 transition-all hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-100 transition-all group-hover:bg-primary-200">
                      <User className="h-10 w-10 text-primary-600" />
                    </div>
                    {doctor.languages.includes('Arabic') && (
                      <div className="rounded-full bg-orange-100 px-2 py-1 text-xs font-semibold text-orange-700">
                        <Languages className="mr-1 inline h-3 w-3" />
                        Arabic
                      </div>
                    )}
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
                    <p className="mb-1 text-sm font-semibold text-gray-900">{doctor.hospital.name_en}</p>
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
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 px-4 py-16 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative mx-auto text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            Consult with Our Medical Experts
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
            Get a free consultation with our specialists. Native Arabic coordinators
            (from Dubai & Riyadh) available 24/7 on WhatsApp.
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

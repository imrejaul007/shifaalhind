export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Award, MapPin, Phone, CheckCircle } from 'lucide-react';

export default function HospitalsPage() {
  const hospitals = [
    {
      name: 'Apollo Hospital Delhi',
      city: 'New Delhi',
      specialties: ['Cardiology', 'Oncology', 'Neurology', 'Orthopedics'],
      accreditation: 'JCI Accredited',
      rating: 4.8,
    },
    {
      name: 'Fortis Memorial Research Institute',
      city: 'Gurgaon',
      specialties: ['Cardiac Sciences', 'Neurosciences', 'Oncology', 'Renal Sciences'],
      accreditation: 'NABH & JCI Accredited',
      rating: 4.7,
    },
    {
      name: 'Medanta - The Medicity',
      city: 'Gurgaon',
      specialties: ['Heart Institute', 'Cancer Institute', 'Neurosciences', 'Orthopedics'],
      accreditation: 'NABH & JCI Accredited',
      rating: 4.9,
    },
    {
      name: 'Manipal Hospital Bangalore',
      city: 'Bangalore',
      specialties: ['Cardiology', 'Neurology', 'Orthopedics', 'Gastroenterology'],
      accreditation: 'NABH Accredited',
      rating: 4.6,
    },
    {
      name: 'Kokilaben Dhirubhai Ambani Hospital',
      city: 'Mumbai',
      specialties: ['Cardiology', 'Oncology', 'Neurology', 'Transplant'],
      accreditation: 'NABH & JCI Accredited',
      rating: 4.8,
    },
    {
      name: 'Max Super Speciality Hospital',
      city: 'New Delhi',
      specialties: ['Cancer Care', 'Cardiac Sciences', 'Neurosciences', 'Orthopedics'],
      accreditation: 'NABH & JCI Accredited',
      rating: 4.7,
    },
  ];

  const features = [
    'JCI & NABH Accredited Hospitals',
    'State-of-the-art Medical Technology',
    'Board-Certified Specialist Doctors',
    'International Patient Services',
    'English-Speaking Medical Staff',
    '24/7 Emergency Services',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            Our Partner Hospitals
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-primary-100">
            World-class healthcare facilities with international accreditation and expert medical teams
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="border-b bg-white px-4 py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-5 w-5 shrink-0 text-green-600" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospitals Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hospitals.map((hospital, index) => (
            <Card key={index} className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  <Building2 className="h-8 w-8 text-primary-600" />
                </div>
                <CardTitle className="text-xl">{hospital.name}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {hospital.city}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex items-center gap-2 text-sm">
                  <Award className="h-4 w-4 text-accent-500" />
                  <span className="font-medium text-accent-600">{hospital.accreditation}</span>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 text-sm font-semibold text-gray-900">Specialties:</h4>
                  <div className="flex flex-wrap gap-1">
                    {hospital.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button asChild className="flex-1" size="sm">
                    <Link href="/consultation">Get Quote</Link>
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
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold">
            Find the Right Hospital for Your Treatment
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
            Our medical experts will help you choose the best hospital for your specific needs
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/consultation">Get Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

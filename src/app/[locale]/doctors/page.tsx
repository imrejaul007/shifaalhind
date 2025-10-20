export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Award, GraduationCap, Languages, CheckCircle } from 'lucide-react';

export default function DoctorsPage() {
  const doctors = [
    {
      name: 'Dr. Rajesh Kumar',
      specialty: 'Cardiac Surgeon',
      hospital: 'Apollo Hospital Delhi',
      experience: '25+ years',
      qualifications: ['MBBS', 'MS', 'MCh Cardiothoracic Surgery', 'FRCS'],
      languages: ['English', 'Hindi', 'Arabic'],
    },
    {
      name: 'Dr. Priya Sharma',
      specialty: 'Oncologist',
      hospital: 'Fortis Memorial Research Institute',
      experience: '18+ years',
      qualifications: ['MBBS', 'MD', 'DM Medical Oncology'],
      languages: ['English', 'Hindi'],
    },
    {
      name: 'Dr. Mohammed Ahmed',
      specialty: 'Orthopedic Surgeon',
      hospital: 'Medanta - The Medicity',
      experience: '20+ years',
      qualifications: ['MBBS', 'MS Orthopedics', 'Fellowship Joint Replacement'],
      languages: ['English', 'Hindi', 'Urdu', 'Arabic'],
    },
    {
      name: 'Dr. Sunita Reddy',
      specialty: 'IVF Specialist',
      hospital: 'Manipal Hospital Bangalore',
      experience: '15+ years',
      qualifications: ['MBBS', 'MD', 'Fellowship Reproductive Medicine'],
      languages: ['English', 'Hindi', 'Tamil'],
    },
    {
      name: 'Dr. Anil Patel',
      specialty: 'Neurosurgeon',
      hospital: 'Kokilaben Hospital Mumbai',
      experience: '22+ years',
      qualifications: ['MBBS', 'MS', 'MCh Neurosurgery', 'FACS'],
      languages: ['English', 'Hindi', 'Gujarati'],
    },
    {
      name: 'Dr. Fatima Khan',
      specialty: 'Cosmetic Surgeon',
      hospital: 'Max Super Speciality Hospital',
      experience: '12+ years',
      qualifications: ['MBBS', 'MS', 'DNB Plastic Surgery'],
      languages: ['English', 'Hindi', 'Urdu'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            Our Medical Experts
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-primary-100">
            Board-certified specialists with international training and decades of experience
          </p>
        </div>
      </section>

      {/* Why Our Doctors */}
      <section className="border-b bg-white px-4 py-12">
        <div className="container mx-auto">
          <h2 className="mb-8 text-center font-serif text-2xl font-bold text-gray-900">
            Why Choose Our Doctors?
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { icon: GraduationCap, text: 'International Qualifications' },
              { icon: Award, text: '15-30 Years Experience' },
              { icon: Languages, text: 'Multi-lingual Support' },
              { icon: CheckCircle, text: 'Patient-Centric Care' },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  <item.icon className="h-8 w-8 text-primary-600" />
                </div>
                <p className="font-medium text-gray-900">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor, index) => (
            <Card key={index} className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary-100">
                  <User className="h-10 w-10 text-primary-600" />
                </div>
                <CardTitle className="text-xl">{doctor.name}</CardTitle>
                <CardDescription>{doctor.specialty}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-900">{doctor.hospital}</p>
                  <p className="text-sm text-gray-600">{doctor.experience} experience</p>
                </div>

                <div>
                  <h4 className="mb-2 text-sm font-semibold text-gray-900">Qualifications:</h4>
                  <div className="flex flex-wrap gap-1">
                    {doctor.qualifications.map((qual, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700"
                      >
                        {qual}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 text-sm font-semibold text-gray-900">Languages:</h4>
                  <p className="text-sm text-gray-600">{doctor.languages.join(', ')}</p>
                </div>

                <Button asChild className="w-full">
                  <Link href="/consultation">Book Consultation</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold">
            Consult with Our Medical Experts
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
            Get a second opinion or discuss your treatment options with our specialists
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/consultation">Free Medical Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

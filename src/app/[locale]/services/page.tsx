export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Stethoscope,
  Plane,
  Hotel,
  FileText,
  Languages,
  CreditCard,
  Phone,
  Users,
  MapPin,
  Calendar,
  Heart,
  Shield,
} from 'lucide-react';

export default function ServicesPage() {
  const coreServices = [
    {
      icon: Stethoscope,
      title: 'Medical Consultation',
      description: 'Free consultation with board-certified specialists to review your case and recommend treatment options.',
    },
    {
      icon: FileText,
      title: 'Medical Records Management',
      description: 'We help organize and translate your medical records for Indian hospitals.',
    },
    {
      icon: Calendar,
      title: 'Appointment Scheduling',
      description: 'Coordinate all your medical appointments, tests, and procedures in advance.',
    },
    {
      icon: Hospital,
      title: 'Hospital Selection',
      description: 'Recommendations for the best hospitals and doctors based on your specific needs.',
    },
  ];

  const travelServices = [
    {
      icon: Plane,
      title: 'Travel Arrangements',
      description: 'Flight booking assistance and airport pickup services.',
    },
    {
      icon: Hotel,
      title: 'Accommodation',
      description: 'Hotel bookings near hospitals with special rates for patients and families.',
    },
    {
      icon: MapPin,
      title: 'Local Transportation',
      description: 'Chauffeur services for hospital visits and local sightseeing.',
    },
    {
      icon: Languages,
      title: 'Interpreter Services',
      description: 'Professional interpreters for medical consultations and daily assistance.',
    },
  ];

  const supportServices = [
    {
      icon: Phone,
      title: '24/7 Support',
      description: 'Round-the-clock assistance via phone, WhatsApp, and email.',
    },
    {
      icon: Users,
      title: 'Dedicated Coordinator',
      description: 'Personal case manager to guide you through every step.',
    },
    {
      icon: CreditCard,
      title: 'Payment Assistance',
      description: 'Transparent pricing and help with payment arrangements.',
    },
    {
      icon: Shield,
      title: 'Post-Treatment Care',
      description: 'Follow-up coordination and ongoing support after you return home.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-primary-100">
            Comprehensive medical tourism services to make your treatment journey smooth and stress-free
          </p>
        </div>
      </section>

      {/* Core Medical Services */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
          Medical Services
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          Expert medical coordination and support throughout your treatment
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreServices.map((service, index) => (
            <Card key={index} className="text-center transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  <service.icon className="h-8 w-8 text-primary-600" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Travel & Accommodation */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
            Travel & Accommodation
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            We take care of all your travel and stay arrangements
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {travelServices.map((service, index) => (
              <Card key={index} className="text-center transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-100">
                    <service.icon className="h-8 w-8 text-accent-600" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
          Support & Coordination
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          Dedicated support before, during, and after your treatment
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {supportServices.map((service, index) => (
            <Card key={index} className="text-center transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <service.icon className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Complete Package */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <Heart className="mx-auto mb-6 h-16 w-16 text-primary-600" />
            <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900">
              Complete Medical Tourism Package
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Everything you need for a successful medical journey, all in one place
            </p>
            <div className="grid gap-4 text-left md:grid-cols-2">
              {[
                'Free medical consultation',
                'Hospital & doctor selection',
                'Visa assistance letters',
                'Flight booking support',
                'Airport pickup & drop',
                'Accommodation arrangements',
                'Medical interpreter',
                'Local SIM card',
                'Emergency assistance',
                'Follow-up coordination',
                'Medical reports translation',
                '24/7 support hotline',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary-500" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/consultation">Get Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold">
            Let Us Take Care of Everything
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
            Focus on your health while we handle all the logistics
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/booking">Book Your Treatment</Link>
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

// Import Hospital icon
import { Building2 as Hospital } from 'lucide-react';

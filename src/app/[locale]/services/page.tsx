import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Medical Tourism Services - End-to-End Support | Shifa Al Hind',
  description: 'Complete medical tourism services: Free consultation, hospital selection, visa assistance, travel arrangements, 24/7 support. Make your medical journey to India stress-free.',
  keywords: [
    'medical tourism services',
    'medical travel services India',
    'healthcare tourism package',
    'medical tourism coordinator',
    'India medical travel support',
    'medical tourism UAE',
    'خدمات السياحة الطبية',
    'خدمات السفر الطبي',
    'دعم السياحة العلاجية',
  ],
  openGraph: {
    title: 'Complete Medical Tourism Services - End-to-End Support',
    description: 'Free consultation, hospital selection, travel arrangements, 24/7 support for your medical journey to India.',
    type: 'website',
  },
};

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
  Building2 as Hospital,
  CheckCircle,
  Clock,
  DollarSign,
  Award,
  Globe,
  Headphones,
  FileCheck,
  Briefcase,
} from 'lucide-react';

export default function ServicesPage() {
  const coreServices = [
    {
      icon: Stethoscope,
      title: 'Medical Consultation',
      description: 'Free consultation with board-certified specialists to review your case and recommend treatment options.',
      details: 'Expert medical review within 24 hours with personalized treatment plan and cost estimates.',
    },
    {
      icon: Hospital,
      title: 'Hospital Selection',
      description: 'Recommendations for the best hospitals and doctors based on your specific needs.',
      details: 'Access to 40+ JCI-accredited hospitals and 1,000+ specialist doctors across India.',
    },
    {
      icon: FileText,
      title: 'Medical Records Management',
      description: 'We help organize and translate your medical records for Indian hospitals.',
      details: 'Professional medical document translation and organization for seamless hospital admission.',
    },
    {
      icon: Calendar,
      title: 'Appointment Scheduling',
      description: 'Coordinate all your medical appointments, tests, and procedures in advance.',
      details: 'Pre-arranged appointments to minimize wait times and optimize your treatment schedule.',
    },
  ];

  const travelServices = [
    {
      icon: Plane,
      title: 'Travel Arrangements',
      description: 'Flight booking assistance and airport pickup services.',
      details: 'Best flight options, visa support letters, and complimentary airport transfers.',
    },
    {
      icon: Hotel,
      title: 'Accommodation',
      description: 'Hotel bookings near hospitals with special rates for patients and families.',
      details: 'Partner hotels with medical-friendly amenities, special rates, and hospital proximity.',
    },
    {
      icon: MapPin,
      title: 'Local Transportation',
      description: 'Chauffeur services for hospital visits and local sightseeing.',
      details: 'Dedicated transportation for all medical appointments and optional city tours.',
    },
    {
      icon: Languages,
      title: 'Interpreter Services',
      description: 'Professional interpreters for medical consultations and daily assistance.',
      details: 'Arabic, English interpreters available for all medical interactions and daily needs.',
    },
  ];

  const supportServices = [
    {
      icon: Phone,
      title: '24/7 Support',
      description: 'Round-the-clock assistance via phone, WhatsApp, and email.',
      details: 'Immediate response to emergencies and queries at any time of day or night.',
    },
    {
      icon: Users,
      title: 'Dedicated Coordinator',
      description: 'Personal case manager to guide you through every step.',
      details: 'Single point of contact who manages your entire medical journey from start to finish.',
    },
    {
      icon: CreditCard,
      title: 'Payment Assistance',
      description: 'Transparent pricing and help with payment arrangements.',
      details: 'Clear cost breakdowns, no hidden fees, flexible payment options available.',
    },
    {
      icon: Shield,
      title: 'Post-Treatment Care',
      description: 'Follow-up coordination and ongoing support after you return home.',
      details: 'Continued medical coordination, report sharing, and telemedicine follow-ups.',
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'Share your medical reports and we provide free expert consultation with treatment recommendations.',
      timeline: 'Day 1-2',
    },
    {
      step: '2',
      title: 'Planning & Booking',
      description: 'We arrange hospital appointments, book flights, hotels, and handle all visa documentation.',
      timeline: 'Day 3-7',
    },
    {
      step: '3',
      title: 'Arrival & Treatment',
      description: 'Airport pickup, hospital admission, interpreter support, and 24/7 assistance during treatment.',
      timeline: 'Day 8-21',
    },
    {
      step: '4',
      title: 'Recovery & Return',
      description: 'Post-treatment care, follow-up coordination, and continued support after you return home.',
      timeline: 'Day 22+',
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Verified Network',
      stat: '40+ JCI Hospitals',
      description: 'Access to India\'s top internationally-accredited medical facilities',
    },
    {
      icon: Users,
      title: 'Experienced Team',
      stat: '15+ Years',
      description: 'Expertise in medical tourism and patient coordination',
    },
    {
      icon: Globe,
      title: 'International Reach',
      stat: '150+ Countries',
      description: 'Helping patients from across the world',
    },
    {
      icon: CheckCircle,
      title: 'Success Rate',
      stat: '98% Satisfaction',
      description: 'Consistently high patient satisfaction ratings',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            Complete Medical Tourism Services
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-primary-100">
            End-to-end support for your medical journey to India - from consultation to recovery
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/consultation">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700">
              <Link href="tel:+971501234567">Call +971 50 123 4567</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900">
          Why Choose Shifa Al Hind?
        </h2>
        <div className="grid gap-8 md:grid-cols-4">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                <item.icon className="h-8 w-8 text-primary-600" />
              </div>
              <div className="mb-2 font-serif text-2xl font-bold text-primary-600">{item.stat}</div>
              <h3 className="mb-2 font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Medical Services */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
            Medical Services
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Expert medical coordination and support throughout your treatment
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreServices.map((service, index) => (
              <Card key={index} className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                    <service.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <CardTitle className="text-center text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-3 text-center">{service.description}</CardDescription>
                  <p className="text-center text-sm text-gray-500">{service.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Travel & Accommodation */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
          Travel & Accommodation
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          We take care of all your travel and stay arrangements
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {travelServices.map((service, index) => (
            <Card key={index} className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-100">
                  <service.icon className="h-8 w-8 text-accent-600" />
                </div>
                <CardTitle className="text-center text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-3 text-center">{service.description}</CardDescription>
                <p className="text-center text-sm text-gray-500">{service.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Support Services */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
            Support & Coordination
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Dedicated support before, during, and after your treatment
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {supportServices.map((service, index) => (
              <Card key={index} className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <service.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-center text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-3 text-center">{service.description}</CardDescription>
                  <p className="text-center text-sm text-gray-500">{service.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
          How Our Service Works
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          A simple 4-step process from consultation to recovery
        </p>
        <div className="grid gap-8 md:grid-cols-4">
          {processSteps.map((item, index) => (
            <div key={index} className="relative text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 font-serif text-2xl font-bold text-white">
                  {item.step}
                </div>
              </div>
              <div className="mb-2 text-sm font-medium text-primary-600">{item.timeline}</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              {index < processSteps.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-1 w-full bg-primary-200 md:block" style={{ width: 'calc(100% - 4rem)' }} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Service Packages */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
            Service Packages
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Choose the level of support that fits your needs
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Basic Package */}
            <Card className="relative">
              <CardHeader className="text-center">
                <div className="mb-2 text-sm font-medium text-primary-600">Essential</div>
                <CardTitle className="mb-4 text-2xl">Basic Support</CardTitle>
                <CardDescription>For independent travelers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span>Free medical consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span>Hospital & doctor recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span>Appointment scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span>Medical records assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span>Email & phone support</span>
                  </li>
                </ul>
                <Button asChild className="mt-6 w-full" variant="outline">
                  <Link href="/consultation">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Standard Package */}
            <Card className="relative border-2 border-primary-500">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary-500 px-4 py-1 text-sm font-medium text-white">
                Most Popular
              </div>
              <CardHeader className="text-center">
                <div className="mb-2 text-sm font-medium text-primary-600">Recommended</div>
                <CardTitle className="mb-4 text-2xl">Full Support</CardTitle>
                <CardDescription>Complete peace of mind</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span className="font-medium">Everything in Basic, plus:</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span>Airport pickup & drop-off</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span>Accommodation booking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span>Local transportation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span>Dedicated coordinator</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span>24/7 WhatsApp support</span>
                  </li>
                </ul>
                <Button asChild className="mt-6 w-full">
                  <Link href="/consultation">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="relative">
              <CardHeader className="text-center">
                <div className="mb-2 text-sm font-medium text-primary-600">Premium</div>
                <CardTitle className="mb-4 text-2xl">VIP Experience</CardTitle>
                <CardDescription>Concierge-level service</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span className="font-medium">Everything in Full Support, plus:</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span>Professional interpreter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span>Premium hotel arrangements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span>Priority scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span>City tours & sightseeing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span>Post-return telemedicine</span>
                  </li>
                </ul>
                <Button asChild className="mt-6 w-full" variant="outline">
                  <Link href="/consultation">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Complete Package */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <Heart className="mx-auto mb-6 h-16 w-16 text-primary-600" />
          <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900">
            Everything Included in Our Service
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Comprehensive support at every stage of your medical journey
          </p>
          <div className="grid gap-4 text-left md:grid-cols-2">
            {[
              'Free medical consultation with specialists',
              'Hospital & doctor selection',
              'Appointment scheduling & coordination',
              'Visa assistance letters',
              'Flight booking support',
              'Airport pickup & drop-off',
              'Accommodation arrangements',
              'Medical interpreter services',
              'Local transportation',
              'Local SIM card & connectivity',
              'Emergency assistance 24/7',
              'Post-treatment follow-up coordination',
              'Medical reports translation',
              'Telemedicine support after return',
              'Family support services',
              'Cultural & dietary accommodations',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-green-600" />
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
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl space-y-6">
            {[
              {
                question: 'Are your services really free?',
                answer:
                  'Yes! We provide free consultation, coordination, and support services. Our revenue comes from partnerships with hospitals, not from patient fees. You only pay for your medical treatment, accommodation, and travel.',
              },
              {
                question: 'How do you select hospitals and doctors?',
                answer:
                  'We work only with JCI-accredited hospitals and board-certified specialists with 15-30+ years of experience. We match you with facilities and doctors based on your specific condition, budget, and preferences.',
              },
              {
                question: 'What languages do you support?',
                answer:
                  'We provide support in English and Arabic. Our team includes native Arabic speakers, and we can arrange professional interpreters for medical consultations if needed.',
              },
              {
                question: 'How far in advance should I book?',
                answer:
                  'Ideally 2-4 weeks before your planned travel date. This allows time for medical consultation, appointment scheduling, visa processing, and travel arrangements. However, we can accommodate urgent cases.',
              },
              {
                question: 'What if I need to cancel or reschedule?',
                answer:
                  'We understand medical situations can change. We help coordinate with hospitals for rescheduling. Our services are free, so there are no cancellation fees from our end. Hospital and travel provider policies apply.',
              },
              {
                question: 'Do you help with medical visas?',
                answer:
                  'Yes! We provide all necessary documentation for medical visa applications, including hospital invitation letters, treatment plans, and cost estimates. We also guide you through the visa application process.',
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
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
            Focus on your health while we handle all the logistics. Get started with a free consultation today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/booking">Book Your Treatment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700">
              <Link href="tel:+971501234567">Call +971 50 123 4567</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700">
              <Link href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

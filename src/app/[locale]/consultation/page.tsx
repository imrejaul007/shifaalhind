export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, Shield, Video, FileText, Phone } from 'lucide-react';

export default function ConsultationPage() {
  const benefits = [
    {
      icon: Clock,
      title: '100% Free',
      description: 'No consultation fees or hidden charges',
    },
    {
      icon: Shield,
      title: 'Confidential',
      description: 'Your medical information is completely secure',
    },
    {
      icon: Video,
      title: 'Multiple Options',
      description: 'Phone, video, or in-person consultation',
    },
    {
      icon: FileText,
      title: 'Expert Review',
      description: 'Board-certified specialists review your case',
    },
    {
      icon: CheckCircle,
      title: 'Quick Response',
      description: 'Get answers within 24 hours',
    },
    {
      icon: Phone,
      title: '24/7 Support',
      description: 'Round-the-clock assistance available',
    },
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Submit Your Details',
      description: 'Fill out our simple consultation form with your medical concerns',
    },
    {
      step: '2',
      title: 'Doctor Review',
      description: 'Our specialists review your case and medical history',
    },
    {
      step: '3',
      title: 'Get Recommendations',
      description: 'Receive personalized treatment options and cost estimates',
    },
    {
      step: '4',
      title: 'Plan Your Journey',
      description: 'We help arrange travel, accommodation, and appointments',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            Free Medical Consultation
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-primary-100">
            Get expert medical advice from India&apos;s top doctors - completely free with no obligations
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/booking">Request Free Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900">
          Why Choose Our Free Consultation?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  <benefit.icon className="h-8 w-8 text-primary-600" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900">
            How It Works
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 font-serif text-2xl font-bold text-white">
                    {item.step}
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Receive */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900">
          What You&apos;ll Receive
        </h2>
        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {[
              'Detailed medical evaluation by board-certified specialists',
              'Personalized treatment plan tailored to your condition',
              'Transparent cost breakdown with no hidden fees',
              'Hospital and doctor recommendations based on your needs',
              'Estimated timeline for treatment and recovery',
              'Assistance with travel and accommodation arrangements',
              'Dedicated case manager for ongoing support',
              'Second opinion service if needed',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-green-600" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Methods */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900">
            Choose Your Consultation Method
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Phone Consultation',
                description: 'Speak directly with our medical coordinators',
                action: 'Call +971 50 123 4567',
              },
              {
                title: 'Video Consultation',
                description: 'Face-to-face consultation with doctors',
                action: 'Schedule Video Call',
              },
              {
                title: 'Online Form',
                description: 'Submit your medical details and documents',
                action: 'Fill Online Form',
              },
            ].map((method, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href="/booking">{method.action}</Link>
                  </Button>
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
            Ready to Get Started?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
            Take the first step towards better health. Get your free consultation today!
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/booking">Request Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700">
              <Link href="tel:+971501234567">Call Us Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

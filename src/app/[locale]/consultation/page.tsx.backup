import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Free Medical Consultation - Expert Doctors from India | Shifa Al Hind',
  description: 'Get FREE medical consultation from India\'s top board-certified specialists. Expert advice, personalized treatment plans, cost estimates. Available 24/7. No hidden fees.',
  keywords: [
    'free medical consultation',
    'online doctor consultation India',
    'medical consultation UAE',
    'free medical advice',
    'India specialist consultation',
    'medical consultation Saudi Arabia',
    'استشارة طبية مجانية',
    'استشارة طبية عبر الإنترنت',
    'استشارة متخصص هندي',
  ],
  openGraph: {
    title: 'Free Medical Consultation - Expert Doctors from India',
    description: 'Get FREE consultation from board-certified specialists. Personalized treatment plans, cost estimates, 24/7 support.',
    type: 'website',
  },
};

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CheckCircle,
  Clock,
  Shield,
  Video,
  FileText,
  Phone,
  Heart,
  Bone,
  Activity,
  Baby,
  Eye,
  Brain,
  Stethoscope,
  Award,
  Globe,
  Users,
  TrendingUp,
} from 'lucide-react';

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

      {/* Statistics Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Users,
              number: '500,000+',
              label: 'Patients Helped Annually',
            },
            {
              icon: Award,
              number: '40+',
              label: 'JCI-Accredited Hospitals',
            },
            {
              icon: Stethoscope,
              number: '1,000+',
              label: 'Specialist Doctors',
            },
            {
              icon: Globe,
              number: '150+',
              label: 'Countries Served',
            },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                <stat.icon className="h-8 w-8 text-primary-600" />
              </div>
              <div className="mb-2 font-serif text-3xl font-bold text-gray-900">{stat.number}</div>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Specialty Areas */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
            Specialty Consultations Available
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Get expert consultation from board-certified specialists across all major medical fields
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Heart,
                title: 'Cardiac Care',
                specialties: ['Heart Surgery', 'Angioplasty', 'Valve Replacement'],
              },
              {
                icon: Bone,
                title: 'Orthopedics',
                specialties: ['Joint Replacement', 'Spine Surgery', 'Sports Medicine'],
              },
              {
                icon: Activity,
                title: 'Oncology',
                specialties: ['Cancer Treatment', 'Chemotherapy', 'Radiation Therapy'],
              },
              {
                icon: Baby,
                title: 'Fertility',
                specialties: ['IVF', 'PCOS Treatment', 'Egg Freezing'],
              },
              {
                icon: Eye,
                title: 'Ophthalmology',
                specialties: ['LASIK', 'Cataract Surgery', 'Retinal Care'],
              },
              {
                icon: Brain,
                title: 'Neurosurgery',
                specialties: ['Brain Surgery', 'Spine Surgery', 'Tumor Removal'],
              },
              {
                icon: Stethoscope,
                title: 'General Surgery',
                specialties: ['Laparoscopic', 'Hernia Repair', 'Gallbladder'],
              },
              {
                icon: TrendingUp,
                title: 'Transplants',
                specialties: ['Liver', 'Kidney', 'Bone Marrow'],
              },
            ].map((specialty, index) => (
              <Card key={index} className="text-center transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary-100">
                    <specialty.icon className="h-7 w-7 text-primary-600" />
                  </div>
                  <CardTitle className="text-lg">{specialty.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {specialty.specialties.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Qualifications */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
          World-Class Medical Expertise
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          Our panel of doctors includes some of India&apos;s most renowned specialists
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: 'International Training',
              description: 'Many doctors trained at Harvard, Mayo Clinic, Johns Hopkins, and other prestigious institutions',
              icon: Globe,
            },
            {
              title: 'Board Certified',
              description: 'All specialists are board-certified with 15-30+ years of experience',
              icon: Award,
            },
            {
              title: 'Published Research',
              description: 'Doctors with published research papers and contributions to medical science',
              icon: FileText,
            },
          ].map((item, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  <item.icon className="h-8 w-8 text-primary-600" />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
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
                question: 'Is the consultation really free?',
                answer:
                  'Yes, absolutely! There are no consultation fees, hidden charges, or obligations. We provide free consultations to help you understand your treatment options and make informed decisions.',
              },
              {
                question: 'How quickly will I get a response?',
                answer:
                  'Our medical coordinators respond within 1-2 hours. For detailed consultation with specialists, you&apos;ll receive a response within 24 hours including treatment recommendations and cost estimates.',
              },
              {
                question: 'Can I consult with specialists for my specific condition?',
                answer:
                  'Yes! We connect you with board-certified specialists based on your specific medical condition. Whether it&apos;s cardiac, orthopedic, oncology, or any other specialty, we have experts available.',
              },
              {
                question: 'What information should I prepare for the consultation?',
                answer:
                  'Please have your medical reports, diagnosis, previous treatment history, current medications, and any recent test results ready. The more information you provide, the more accurate our recommendations will be.',
              },
              {
                question: 'Do you help with travel and accommodation?',
                answer:
                  'Yes! We provide end-to-end support including medical visa assistance, flight booking, airport pickup, accommodation near the hospital, and a dedicated case manager throughout your journey.',
              },
              {
                question: 'Are the doctors qualified and experienced?',
                answer:
                  'All our doctors are board-certified specialists with 15-30+ years of experience. Many have trained at international institutions like Harvard, Mayo Clinic, and Johns Hopkins.',
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

      {/* Success Stories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
          Patient Success Stories
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          Hear from patients who trusted us with their healthcare journey
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              name: 'Ahmed Al-Rashid',
              country: '🇸🇦 Saudi Arabia',
              treatment: 'Heart Bypass Surgery',
              story:
                'I was facing a 6-month wait in Saudi Arabia. Through Shifa Al Hind, I had my surgery within 2 weeks at Apollo Hospital. The doctors were excellent, and I saved over $80,000. Forever grateful!',
            },
            {
              name: 'Sarah Mohammed',
              country: '🇦🇪 UAE',
              treatment: 'IVF Treatment',
              story:
                'After 5 failed IVF cycles in Dubai, we were losing hope. The consultation was so detailed and reassuring. We succeeded on the first try in India! Our baby is now 6 months old.',
            },
            {
              name: 'Fatima Al-Mansoori',
              country: '🇴🇲 Oman',
              treatment: 'Knee Replacement',
              story:
                'The free consultation gave me confidence to proceed. The orthopedic surgeon was world-class. I&apos;m now pain-free and saved $35,000 compared to local treatment.',
            },
          ].map((story, index) => (
            <Card key={index} className="bg-gradient-to-br from-primary-50 to-accent-50">
              <CardHeader>
                <div className="mb-2 text-sm font-medium text-primary-600">{story.treatment}</div>
                <CardTitle className="text-lg">{story.name}</CardTitle>
                <CardDescription className="text-sm">{story.country}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm italic text-gray-700">&quot;{story.story}&quot;</p>
              </CardContent>
            </Card>
          ))}
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
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/booking">Request Free Consultation</Link>
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

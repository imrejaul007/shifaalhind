import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Medical Tourism Services - End-to-End Support | Shifa Al Hind',
  description: 'Complete medical tourism services: Free consultation, hospital selection, visa assistance, travel arrangements, 24/7 support. Native Arabic speakers who lived in GCC.',
  keywords: [
    'medical tourism services',
    'medical travel services India',
    'healthcare tourism package',
    'medical tourism coordinator',
    'India medical travel support',
    'medical tourism UAE',
    'Arabic medical translator GCC',
    'خدمات السياحة الطبية',
    'خدمات السفر الطبي',
    'دعم السياحة العلاجية',
    'مترجم عربي طبي',
  ],
  openGraph: {
    title: 'Complete Medical Tourism Services - End-to-End Support',
    description: 'Free consultation, hospital selection, travel arrangements, 24/7 support. Native Arabic speakers who lived in GCC.',
    type: 'website',
  },
};

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TabbedServices } from '@/components/services/tabbed-services';
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
  Award,
  Globe,
  Star,
  MessageCircle,
  Headset,
  BadgeCheck,
  Sparkles,
  UserCheck,
} from 'lucide-react';

export default function ServicesPage() {
  const gccFeatures = [
    {
      icon: MessageCircle,
      title: 'Native Arabic Speakers',
      description: 'Our team includes native Arabic speakers who have lived and worked in GCC countries',
      detail: 'We understand Emirates, Saudi, Qatari, and Kuwaiti dialects perfectly',
    },
    {
      icon: UserCheck,
      title: 'Cultural Understanding',
      description: 'Team members with 5-10+ years of GCC experience',
      detail: 'Familiar with Emirati, Saudi, and Gulf culture, customs, and healthcare expectations',
    },
    {
      icon: Headset,
      title: '100% Halal Food & Nearby Mosques',
      description: '✅ Certified halal meals (Arabic, Indian cuisines) | ✅ Mosques within 5-10 min walk | ✅ Prayer rooms in hotels with Qibla direction',
      detail: 'Female doctors available for women patients • Arabic TV channels • Prayer mats & wudu facilities',
    },
    {
      icon: BadgeCheck,
      title: 'Trusted by 10,000+ GCC Patients',
      description: 'Serving UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain since 2013',
      detail: '98% patient satisfaction rate with verified reviews',
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Free Consultation',
      description: 'Share your medical reports via WhatsApp or email. Get expert review within 24 hours.',
      timeline: 'Day 1-2',
      icon: FileText,
    },
    {
      step: '2',
      title: 'Planning & Booking',
      description: 'We arrange hospital appointments, flights, visa letters, and accommodation.',
      timeline: 'Day 3-7',
      icon: Calendar,
    },
    {
      step: '3',
      title: 'Arrival & Treatment',
      description: 'Airport pickup by Arabic coordinator, hospital admission, and 24/7 support.',
      timeline: 'Day 8-21',
      icon: Hospital,
    },
    {
      step: '4',
      title: 'Recovery & Follow-up',
      description: 'Post-treatment care, return arrangements, and telemedicine follow-ups.',
      timeline: 'Day 22+',
      icon: Heart,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 px-4 py-20 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>Trusted by 10,000+ GCC Patients Since 2013</span>
          </div>
          <h1 className="mb-6 font-serif text-4xl font-bold md:text-6xl">
            Complete Medical Tourism Services
          </h1>
          <p className="mx-auto mb-4 max-w-3xl text-xl text-primary-100">
            End-to-end support with native Arabic translators who lived in GCC
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-200">
            From consultation to recovery - we handle everything so you can focus on getting better
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="shadow-xl">
              <Link href="/consultation">
                <Star className="mr-2 h-5 w-5" />
                Get Free Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary-700">
              <Link href="tel:+971501234567">
                <Phone className="mr-2 h-5 w-5" />
                Call +971 50 123 4567
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Arabic Translators - GCC Experience Section */}
      <section className="border-b-2 border-primary-100 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 px-4 py-16">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700">
              <Languages className="h-4 w-4" />
              What Makes Us Different
            </div>
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
              Native Arabic Speakers from GCC
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Our Arabic coordinators and translators have lived in Dubai, Riyadh, Doha, and other GCC cities.
              They understand your dialect, culture, and expectations perfectly.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {gccFeatures.map((feature, index) => (
              <Card key={index} className="border-2 border-primary-100 bg-white/80 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-2xl">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-center text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-center text-sm font-medium text-gray-700">{feature.description}</p>
                  <p className="text-center text-xs text-gray-500">{feature.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Services - Pre/During/Post Treatment */}
      <TabbedServices locale="en" />

      {/* How It Works - Enhanced */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
              How Our Service Works
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              A simple 4-step process with Arabic support at every stage
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="mb-6 flex justify-center">
                  <div className="relative flex h-24 w-24 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 opacity-20 blur-xl" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 shadow-xl">
                      <item.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                </div>
                <div className="mb-2 text-center">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1 text-sm font-bold text-primary-700">
                    <Clock className="h-3 w-3" />
                    {item.timeline}
                  </span>
                </div>
                <h3 className="mb-3 text-center text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-center text-gray-600">{item.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="absolute right-0 top-12 hidden h-1 w-full bg-gradient-to-r from-primary-200 to-transparent lg:block" style={{ width: 'calc(100% - 6rem)' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
              What Our GCC Patients Say
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 border-primary-100 bg-gradient-to-br from-white to-primary-50">
              <CardHeader>
                <div className="mb-2 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Ahmed Al-Mansouri</CardTitle>
                <CardDescription>Dubai, UAE - Heart Surgery</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="italic text-gray-700">
                  &quot;The Arabic coordinator who picked us up from the airport made us feel at home immediately.
                  She had lived in Dubai for 8 years and understood exactly what we needed. Saved $85,000!&quot;
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary-100 bg-gradient-to-br from-white to-primary-50">
              <CardHeader>
                <div className="mb-2 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Fatima Al-Dosari</CardTitle>
                <CardDescription>Riyadh, Saudi Arabia - IVF Treatment</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="italic text-gray-700">
                  &quot;Having a Saudi Arabic speaker who understood our culture made such a difference.
                  She arranged halal meals, prayer times, and even helped my husband with local SIM cards.&quot;
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary-100 bg-gradient-to-br from-white to-primary-50">
              <CardHeader>
                <div className="mb-2 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Mohammed Al-Thani</CardTitle>
                <CardDescription>Doha, Qatar - Knee Replacement</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="italic text-gray-700">
                  &quot;From the first WhatsApp message to the follow-up calls after I returned to Qatar,
                  everything was in perfect Arabic. The team knows Gulf culture inside out.&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 px-4 py-20 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative mx-auto text-center">
          <Heart className="mx-auto mb-6 h-16 w-16 text-primary-200" />
          <h2 className="mb-4 font-serif text-4xl font-bold">
            Let Our GCC-Experienced Team Help You
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
            Get a free consultation with our Arabic-speaking medical coordinators who understand your needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="shadow-xl">
              <Link href="/booking">
                <CheckCircle className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary-700">
              <Link href="tel:+971501234567">
                <Phone className="mr-2 h-5 w-5" />
                Call +971 50 123 4567
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary-700">
              <Link href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer">
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

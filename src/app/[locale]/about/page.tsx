export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Award, Globe } from 'lucide-react';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return generateSEOMetadata({
    title_en: 'About Us - Shifa AlHind Medical Tourism',
    title_ar: 'من نحن - شفاء الهند السياحة العلاجية',
    description_en: 'Learn about Shifa AlHind, your trusted partner for medical tourism from GCC countries to India. Quality healthcare, affordable costs, complete support.',
    description_ar: 'تعرف على شفاء الهند، شريكك الموثوق للسياحة العلاجية من دول مجلس التعاون الخليجي إلى الهند.',
    locale,
    path: '/about',
  });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const values = [
    {
      icon: Heart,
      title: 'Patient First',
      description: 'Your health and wellbeing are our top priority in every decision we make.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced medical coordinators and healthcare professionals guiding you.',
    },
    {
      icon: Award,
      title: 'Quality Care',
      description: 'Partner hospitals with JCI, NABH accreditations and proven track records.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving patients from UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain.',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-20 text-white">
        <div className="container text-center">
          <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
            About Shifa AlHind
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-primary-100">
            Connecting GCC patients with world-class healthcare in India. Your trusted partner for affordable, quality medical treatment.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="container px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 font-serif text-3xl font-bold">Our Mission</h2>
          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            Shifa AlHind was founded with a simple yet powerful mission: to make world-class healthcare accessible and affordable for patients from the GCC region. We bridge the gap between patients seeking quality medical care and India&apos;s renowned hospitals and specialists.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            With over a decade of experience in medical tourism, we&apos;ve helped thousands of patients from UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain receive life-changing treatments at a fraction of the cost in their home countries.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold">Our Values</h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                    <value.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="mb-2 font-semibold text-gray-900">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container px-4 py-16">
        <div className="grid gap-8 text-center sm:grid-cols-3">
          <div>
            <div className="mb-2 font-serif text-5xl font-bold text-primary-600">10,000+</div>
            <div className="text-lg text-gray-600">Patients Served</div>
          </div>
          <div>
            <div className="mb-2 font-serif text-5xl font-bold text-primary-600">50+</div>
            <div className="text-lg text-gray-600">Partner Hospitals</div>
          </div>
          <div>
            <div className="mb-2 font-serif text-5xl font-bold text-primary-600">98%</div>
            <div className="text-lg text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-500 px-4 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold">
            Ready to Start Your Medical Journey?
          </h2>
          <p className="mb-8 text-lg text-primary-100">
            Get a free consultation from our medical team
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href={`/${locale}/consultation`}>
              Get Free Consultation
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

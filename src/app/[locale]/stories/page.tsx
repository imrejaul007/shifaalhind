export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Quote } from 'lucide-react';

export default function SuccessStoriesPage() {
  const stories = [
    {
      name: 'Ahmed Al-Mansouri',
      country: 'UAE',
      treatment: 'Heart Surgery',
      story: 'I came to India for a complex heart surgery. The doctors were exceptional, and the care I received was world-class. The cost was 70% less than what I would have paid in my country, and the results exceeded my expectations.',
      year: '2024',
    },
    {
      name: 'Sarah Johnson',
      country: 'UK',
      treatment: 'Knee Replacement',
      story: 'After waiting 18 months for surgery in the UK, I decided to come to India. The entire process was smooth - from consultation to surgery to recovery. I was walking within days and returned home pain-free after 2 weeks.',
      year: '2023',
    },
    {
      name: 'Mohammed Al-Khalifa',
      country: 'Saudi Arabia',
      treatment: 'IVF Treatment',
      story: 'After years of trying, we were blessed with twins thanks to the excellent fertility specialists in Bangalore. The doctors were compassionate, professional, and gave us hope when we had lost it.',
      year: '2023',
    },
    {
      name: 'Fatima Ahmed',
      country: 'Qatar',
      treatment: 'Cosmetic Surgery',
      story: 'I was nervous about traveling abroad for surgery, but the team made everything so easy. The hospital was ultra-modern, the doctor was highly experienced, and the results are amazing. I feel more confident than ever.',
      year: '2024',
    },
    {
      name: 'Abdullah Rahman',
      country: 'Oman',
      treatment: 'Cancer Treatment',
      story: 'When I was diagnosed with cancer, I wanted the best treatment available. India provided me with cutting-edge care, experienced oncologists, and a complete support system. I am now cancer-free and grateful every day.',
      year: '2023',
    },
    {
      name: 'Mariam Al-Dosari',
      country: 'Kuwait',
      treatment: 'Dental Implants',
      story: 'I needed multiple dental implants and was quoted an astronomical price back home. In India, I received the same quality treatment at a fraction of the cost. My smile is perfect, and I couldn&apos;t be happier!',
      year: '2024',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            Success Stories
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-primary-100">
            Real patients, real results. Read how we&apos;ve helped patients from around the world achieve their health goals
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b bg-white px-4 py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { number: '10,000+', label: 'Patients Treated' },
              { number: '50+', label: 'Partner Hospitals' },
              { number: '98%', label: 'Success Rate' },
              { number: '25+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 font-serif text-3xl font-bold text-primary-600">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {stories.map((story, index) => (
            <Card key={index} className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary-300" />
                </div>
                <CardTitle className="text-xl">{story.name}</CardTitle>
                <CardDescription>
                  {story.country} • {story.treatment} • {story.year}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="italic text-gray-700">&ldquo;{story.story}&rdquo;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Video Testimonials (Placeholder) */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900">
            Video Testimonials
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600">
            Hear directly from our patients about their experiences
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="aspect-video rounded-lg bg-gray-200 flex items-center justify-center"
              >
                <Heart className="h-12 w-12 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold">
            Ready to Write Your Success Story?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
            Join thousands of satisfied patients who chose India for their medical treatment
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/consultation">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700">
              <Link href="/booking">Book Your Treatment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

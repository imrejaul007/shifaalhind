export const dynamic = 'force-dynamic';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, DollarSign, Award, CheckCircle, ArrowRight } from 'lucide-react';

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function TreatmentDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const treatment = await prisma.treatment.findUnique({
    where: { slug },
    include: {
      cityTreatments: {
        include: {
          city: {
            include: {
              country: true,
            },
          },
        },
      },
    },
  });

  if (!treatment) {
    notFound();
  }

  const benefits = [
    'World-class medical facilities',
    'Experienced specialist doctors',
    'Cost-effective treatment (60-80% savings)',
    'No waiting lists',
    'International quality standards',
    'Comprehensive aftercare support',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
              {treatment.title_en}
            </h1>
            <p className="mb-8 text-xl text-primary-100">
              Get world-class {treatment.title_en.toLowerCase()} in India at affordable prices
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/consultation">Get Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700">
                <Link href="/booking">Book Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-b bg-white px-4 py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">2-4 weeks</div>
              <div className="text-sm text-gray-600">Typical Duration</div>
            </div>
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">60-80%</div>
              <div className="text-sm text-gray-600">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <Award className="h-8 w-8 text-accent-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900">JCI</div>
              <div className="text-sm text-gray-600">Accredited</div>
            </div>
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{treatment.cityTreatments.length}+</div>
              <div className="text-sm text-gray-600">Cities Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Overview */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 font-serif text-3xl font-bold text-gray-900">
            About {treatment.title_en} in India
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              {treatment.title_en} is one of the most sought-after medical procedures for international patients
              traveling to India. India has become a global leader in providing high-quality {treatment.title_en.toLowerCase()} with
              state-of-the-art facilities and highly experienced medical professionals. Each year, over 200,000 international patients choose India for {treatment.title_en.toLowerCase()}, making it one of the world&apos;s premier destinations for this procedure.
            </p>
            <p className="mb-4">
              Our partner hospitals offer comprehensive {treatment.title_en.toLowerCase()} services with international
              quality standards at a fraction of the cost you would pay in Western countries or even in GCC nations. India&apos;s medical infrastructure for {treatment.title_en.toLowerCase()} rivals that of the United States and Europe, with the added benefits of no waiting lists, personalized care, and significant cost savings of 60-80%.
            </p>
            <p className="mb-4">
              Indian hospitals specializing in {treatment.title_en.toLowerCase()} are equipped with the latest medical technology, including advanced surgical systems, diagnostic imaging equipment, and post-operative care facilities. The doctors performing {treatment.title_en.toLowerCase()} in India are often trained at prestigious institutions worldwide and have performed thousands of successful procedures.
            </p>
            <p>
              For GCC patients, India offers the added advantage of geographical proximity, cultural familiarity, and extensive experience treating patients from the Middle East. Most major hospitals have dedicated international patient departments with Arabic-speaking staff and facilities that cater to Islamic dietary and cultural requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Procedure Details */}
      <section className="bg-white px-4 py-16">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 font-serif text-3xl font-bold text-gray-900">
              Understanding the {treatment.title_en} Procedure
            </h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="mb-3 text-2xl font-semibold text-gray-900">Pre-Treatment Evaluation</h3>
                <p className="mb-3 text-lg leading-relaxed">
                  Before undergoing {treatment.title_en.toLowerCase()}, you&apos;ll undergo a comprehensive medical evaluation. This typically includes blood tests, imaging studies, cardiac evaluation, and consultations with specialist doctors. Our medical coordinators will help you prepare all necessary documents and medical records, which can often be reviewed by Indian doctors before you travel, saving time and ensuring you&apos;re a suitable candidate for the procedure.
                </p>
                <p className="text-lg leading-relaxed">
                  Once you arrive in India, you&apos;ll meet with your assigned surgeon and medical team. They&apos;ll review your case in detail, answer all your questions, and finalize the treatment plan. This consultation is typically scheduled within 24-48 hours of your arrival, allowing for prompt treatment.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-semibold text-gray-900">The Treatment Process</h3>
                <p className="mb-3 text-lg leading-relaxed">
                  The {treatment.title_en.toLowerCase()} procedure in India follows internationally recognized protocols and best practices. Your surgical team will consist of highly experienced surgeons, anesthesiologists, nurses, and support staff. The procedure is performed in state-of-the-art operation theaters equipped with advanced monitoring and safety systems.
                </p>
                <p className="text-lg leading-relaxed">
                  Depending on the specific type of {treatment.title_en.toLowerCase()} you require, the procedure duration and complexity may vary. Your surgeon will explain the entire process in detail, including the techniques that will be used, expected outcomes, and any potential risks or complications. India&apos;s hospitals maintain success rates comparable to or better than international standards.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-semibold text-gray-900">Recovery & Post-Operative Care</h3>
                <p className="mb-3 text-lg leading-relaxed">
                  After your {treatment.title_en.toLowerCase()}, you&apos;ll be closely monitored in the hospital&apos;s recovery area or intensive care unit if needed. The length of hospital stay varies depending on the procedure&apos;s complexity and your individual recovery progress. Most patients remain in the hospital for several days to ensure stable recovery before being discharged.
                </p>
                <p className="text-lg leading-relaxed">
                  Following discharge, you&apos;ll stay in India for additional recovery time before being cleared to travel home. During this period, you&apos;ll have follow-up appointments with your surgeon to monitor healing and address any concerns. We arrange comfortable accommodation near the hospital and provide 24/7 support throughout your recovery. After returning home, we facilitate telemedicine follow-ups to ensure your continued recovery progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">
              {treatment.title_en} Cost Comparison
            </h2>
            <div className="mb-8 overflow-hidden rounded-lg bg-white shadow-md">
              <table className="w-full">
                <thead className="bg-primary-500 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Country</th>
                    <th className="px-6 py-4 text-right">Average Cost (USD)</th>
                    <th className="px-6 py-4 text-right">Savings vs India</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">India</td>
                    <td className="px-6 py-4 text-right text-green-600 font-semibold">
                      {treatment.cityTreatments.length > 0 && (treatment.cityTreatments[0].costMin || treatment.cityTreatments[0].costMax)
                        ? `$${treatment.cityTreatments[0].costMin || treatment.cityTreatments[0].costMax}`
                        : '$5,000 - $15,000'}
                    </td>
                    <td className="px-6 py-4 text-right text-gray-700">-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">United States</td>
                    <td className="px-6 py-4 text-right text-gray-700">$50,000 - $150,000</td>
                    <td className="px-6 py-4 text-right text-red-600 font-semibold">70-80%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-700">United Kingdom</td>
                    <td className="px-6 py-4 text-right text-gray-700">$40,000 - $100,000</td>
                    <td className="px-6 py-4 text-right text-red-600 font-semibold">65-75%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">UAE / Saudi Arabia</td>
                    <td className="px-6 py-4 text-right text-gray-700">$30,000 - $80,000</td>
                    <td className="px-6 py-4 text-right text-red-600 font-semibold">60-70%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-4 text-center text-lg text-gray-700">
              <strong>Note:</strong> Costs include hospital fees, surgeon fees, anesthesia, medications, and hospital stay. Travel and accommodation costs are additional but even with these expenses, total savings remain substantial.
            </p>
            <p className="text-center text-lg text-gray-700">
              We provide transparent, all-inclusive cost estimates with no hidden fees. Contact us for a personalized quote based on your specific medical condition and treatment requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose India */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">
              Why Choose India for {treatment.title_en}?
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-green-600" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Available Locations */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">
          Available Locations
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {treatment.cityTreatments.map((cityTreatment) => (
            <Card key={cityTreatment.id} className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary-600" />
                  {cityTreatment.city.name_en}
                </CardTitle>
                <CardDescription>
                  {cityTreatment.city.country.name_en}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 space-y-2 text-sm">
                  {(cityTreatment.costMin || cityTreatment.costMax) && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Estimated Cost:</span>
                      <span className="font-semibold text-gray-900">
                        {cityTreatment.costMin && cityTreatment.costMax
                          ? `$${cityTreatment.costMin} - $${cityTreatment.costMax}`
                          : cityTreatment.costMin
                          ? `From $${cityTreatment.costMin}`
                          : `Up to $${cityTreatment.costMax}`}
                      </span>
                    </div>
                  )}
                  {treatment.duration && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold text-gray-900">
                        {treatment.duration}
                      </span>
                    </div>
                  )}
                </div>
                <Button asChild className="w-full">
                  <Link
                    href={`/medical-tourism/${cityTreatment.city.country.slug}/${cityTreatment.city.slug}/${treatment.slug}`}
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900">
            Frequently Asked Questions About {treatment.title_en} in India
          </h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>How much does {treatment.title_en.toLowerCase()} cost in India compared to other countries?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  {treatment.title_en} in India costs approximately 60-80% less than in Western countries and GCC nations. While the exact cost depends on the specific procedure type, hospital, and your medical condition, you can expect to save tens of thousands of dollars. Our partner hospitals offer transparent pricing with all-inclusive packages that cover surgery, hospital stay, medications, and follow-up care. We provide detailed cost estimates during your free consultation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How long do I need to stay in India for {treatment.title_en.toLowerCase()}?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  The total stay in India typically ranges from 10 days to 3 weeks, depending on the complexity of your procedure and your recovery progress. This includes pre-operative consultations and tests (2-3 days), the procedure itself, hospital stay (3-7 days), and post-operative recovery before you&apos;re cleared to travel (5-10 days). We provide detailed timelines specific to your case during the consultation phase.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Are the doctors performing {treatment.title_en.toLowerCase()} in India qualified?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Absolutely. The surgeons performing {treatment.title_en.toLowerCase()} at our partner hospitals are among the most experienced in the world. Many are trained at prestigious institutions like Harvard, Johns Hopkins, Mayo Clinic, and leading European medical schools. They hold international board certifications, have performed thousands of successful procedures, and regularly publish research in medical journals. You&apos;ll receive their complete credentials and can research them before your treatment.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What are the success rates for {treatment.title_en.toLowerCase()} in India?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Indian hospitals report success rates for {treatment.title_en.toLowerCase()} that meet or exceed international standards. The exact success rate depends on various factors including the specific procedure type, patient health condition, and hospital. Our partner hospitals maintain comprehensive outcome data and are accredited by international bodies that verify their results. During your consultation, we&apos;ll provide specific success rate information relevant to your case.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Can I bring a family member or companion with me?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Yes, we strongly encourage patients to bring a family member or companion. We assist with medical visa applications for companions and arrange appropriate accommodation for both you and your companion near the hospital. Having a familiar face during your medical journey provides emotional support and helps with your recovery. We can accommodate companions in the hospital room when possible.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What if complications arise after I return home?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We provide comprehensive post-treatment support including telemedicine follow-ups with your Indian surgeon, coordination with your local doctors, and 24/7 availability for any concerns. If complications require in-person evaluation, we work with your local healthcare providers. In rare cases where return to India is necessary, we assist with all arrangements. Our partner hospitals stand behind their work and committed to your long-term wellbeing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold">
            Ready to Get Started with {treatment.title_en}?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
            Get a free consultation and personalized treatment plan for {treatment.title_en}. Our medical experts will review your case, recommend the best hospitals and doctors, and provide a detailed cost estimate - all at no charge.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/consultation">Get Free Consultation</Link>
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

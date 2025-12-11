export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle } from 'lucide-react';

export default function FAQPage() {
  const faqs = [
    {
      category: 'General Questions',
      questions: [
        {
          q: 'Why should I choose India for medical treatment?',
          a: 'India offers world-class medical care at 60-80% lower costs compared to Western countries. With JCI-accredited hospitals, highly trained doctors, advanced technology, and no waiting times, India has become a leading destination for medical tourism.',
        },
        {
          q: 'Is medical tourism safe?',
          a: 'Yes, medical tourism to India is very safe when you work with reputable hospitals and coordinators like us. Our partner hospitals are internationally accredited (JCI/NABH) and follow strict quality and safety protocols.',
        },
        {
          q: 'How much can I save by getting treatment in India?',
          a: 'Patients typically save 60-80% on medical procedures compared to prices in the USA, UK, or Middle East countries. For example, a heart surgery that costs $100,000 in the US might cost $15,000-25,000 in India.',
        },
        {
          q: 'Do Indian doctors speak English?',
          a: 'Yes, all doctors and medical staff in our partner hospitals are fluent in English. Many have trained or worked internationally. We also provide Arabic interpreters if needed.',
        },
      ],
    },
    {
      category: 'Treatment & Hospitals',
      questions: [
        {
          q: 'What treatments are available?',
          a: 'We facilitate all major treatments including cardiac surgery, orthopedic procedures, cancer treatment, organ transplants, IVF, cosmetic surgery, dental work, and more. If you have a specific procedure in mind, contact us for details.',
        },
        {
          q: 'Are Indian hospitals internationally accredited?',
          a: 'Yes, all our partner hospitals hold international accreditations like JCI (Joint Commission International), ISO, and NABH. These are the same standards used to evaluate hospitals globally.',
        },
        {
          q: 'How do I know which hospital is right for me?',
          a: 'After your free consultation, our medical experts will recommend hospitals and doctors based on your specific condition, budget, and preferences. We only work with the best facilities.',
        },
        {
          q: 'Can I get a second opinion?',
          a: 'Absolutely! We encourage patients to seek second opinions. Our doctors can review your existing diagnosis and treatment plan and provide expert recommendations.',
        },
      ],
    },
    {
      category: 'Booking & Travel',
      questions: [
        {
          q: 'How do I start the process?',
          a: 'Simply request a free consultation through our website, phone, or WhatsApp. Share your medical reports, and our team will coordinate with hospitals to provide a treatment plan and cost estimate.',
        },
        {
          q: 'Do you help with visa arrangements?',
          a: 'Yes, we provide medical visa invitation letters and guidance for the Indian medical visa (M-Visa) application process. We can also assist with visa extensions if needed.',
        },
        {
          q: 'What about accommodation for my family?',
          a: 'We arrange comfortable accommodation near the hospital at special rates. Options include hotel rooms, serviced apartments, and hospital guest houses to fit different budgets.',
        },
        {
          q: 'How long will I need to stay in India?',
          a: 'It depends on your procedure. Minor treatments may require 5-7 days, while major surgeries might need 2-4 weeks. We provide an estimated timeline during consultation.',
        },
      ],
    },
    {
      category: 'Costs & Payments',
      questions: [
        {
          q: 'What is included in the treatment cost?',
          a: 'Treatment costs typically include hospital stay, surgery, medications, tests, and post-operative care. We provide a detailed breakdown with no hidden charges.',
        },
        {
          q: 'Are consultation and coordination services free?',
          a: 'Yes! Our consultation, treatment planning, and coordination services are completely free. You only pay the hospital directly for your treatment.',
        },
        {
          q: 'What payment methods do you accept?',
          a: 'Hospitals accept international wire transfers, credit cards, and cash payments. We help coordinate payments and provide transparent cost breakdowns.',
        },
        {
          q: 'What if I need to cancel or postpone?',
          a: 'We understand plans can change. Contact us as soon as possible, and we will work with the hospital to reschedule. Refund policies vary by hospital and are explained upfront.',
        },
      ],
    },
    {
      category: 'Safety & Quality',
      questions: [
        {
          q: 'What if something goes wrong?',
          a: 'Our partner hospitals have comprehensive emergency protocols and insurance coverage. Your dedicated coordinator will assist with any issues 24/7.',
        },
        {
          q: 'Will I receive follow-up care after I return home?',
          a: 'Yes, we coordinate with your local doctors for follow-up care. Indian doctors will also be available via telemedicine for consultations after you return.',
        },
        {
          q: 'How are medical records handled?',
          a: 'All medical records are kept confidential and secure. You will receive complete documentation of your treatment to share with your home doctors.',
        },
        {
          q: 'What languages are supported?',
          a: 'We provide services in English, Arabic, Hindi, and other languages. Professional medical interpreters are available during consultations and hospital stays.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <HelpCircle className="mx-auto mb-6 h-16 w-16" />
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-primary-100">
            Find answers to common questions about medical tourism to India
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="container mx-auto px-4 py-16">
        <div className="space-y-12">
          {faqs.map((section, index) => (
            <div key={index}>
              <h2 className="mb-6 font-serif text-2xl font-bold text-gray-900">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.questions.map((item, qIndex) => (
                  <Card key={qIndex}>
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900">{item.q}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-gray-700">
                        {item.a}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900">
            Still Have Questions?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600">
            Our team is here to help. Get in touch with us for personalized answers.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/consultation">Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="border-t bg-white px-4 py-12">
        <div className="container mx-auto">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2 text-sm text-gray-600">24/7 Support</p>
                <a href="tel:+971501234567" className="text-primary-600 hover:text-primary-700">
                  +971 50 123 4567
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2 text-sm text-gray-600">Instant Messaging</p>
                <a href="https://wa.me/971501234567" className="text-primary-600 hover:text-primary-700">
                  Chat on WhatsApp
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2 text-sm text-gray-600">24-Hour Response</p>
                <a href="mailto:support@shifaalhind.com" className="text-primary-600 hover:text-primary-700">
                  support@shifaalhind.com
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

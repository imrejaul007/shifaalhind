'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { ALL_TREATMENTS } from '@/config/treatments-list';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().optional(),
  country: z.string().optional(),
  treatmentInterest: z.string().optional(),
  subject: z.string().min(5, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/v1/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+971 50 123 4567',
      link: 'tel:+971501234567',
      description: '24/7 Support',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'support@shifaalhind.com',
      link: 'mailto:support@shifaalhind.com',
      description: 'Response within 24 hours',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+971 50 123 4567',
      link: 'https://wa.me/971501234567',
      description: 'Chat with us',
    },
    {
      icon: MapPin,
      title: 'Office',
      value: 'Dubai, UAE',
      link: '#',
      description: 'Visit us',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            Get in Touch
          </h1>
          <p className="text-xl text-primary-100">
            We&apos;re here to help 24/7. Reach out to us anytime!
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="container px-4 py-16">
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                  <method.icon className="h-6 w-6 text-primary-600" />
                </div>
                <CardTitle className="text-lg">{method.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={method.link}
                  className="mb-1 block font-semibold text-primary-600 hover:text-primary-700"
                >
                  {method.value}
                </a>
                <p className="text-sm text-gray-600">{method.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <div className="mx-auto max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">Name *</label>
                    <Input {...register('name')} placeholder="Your name" />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">Email *</label>
                    <Input {...register('email')} type="email" placeholder="your@email.com" />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">Phone / WhatsApp</label>
                    <Input {...register('phone')} type="tel" placeholder="+971 50 123 4567" />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">Your Country</label>
                    <select
                      {...register('country')}
                      className="flex h-12 w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-base focus:border-primary-500 focus:outline-none"
                    >
                      <option value="">Select country...</option>

                      <optgroup label="🌟 GCC Countries">
                        <option value="AE">🇦🇪 United Arab Emirates</option>
                        <option value="SA">🇸🇦 Saudi Arabia</option>
                        <option value="QA">🇶🇦 Qatar</option>
                        <option value="OM">🇴🇲 Oman</option>
                        <option value="KW">🇰🇼 Kuwait</option>
                        <option value="BH">🇧🇭 Bahrain</option>
                      </optgroup>

                      <optgroup label="🌍 MENA Region">
                        <option value="EG">🇪🇬 Egypt</option>
                        <option value="JO">🇯🇴 Jordan</option>
                        <option value="LB">🇱🇧 Lebanon</option>
                        <option value="IQ">🇮🇶 Iraq</option>
                        <option value="YE">🇾🇪 Yemen</option>
                        <option value="SY">🇸🇾 Syria</option>
                        <option value="PS">🇵🇸 Palestine</option>
                        <option value="MA">🇲🇦 Morocco</option>
                        <option value="DZ">🇩🇿 Algeria</option>
                        <option value="TN">🇹🇳 Tunisia</option>
                        <option value="LY">🇱🇾 Libya</option>
                        <option value="SD">🇸🇩 Sudan</option>
                      </optgroup>

                      <optgroup label="🌎 Other Countries">
                        <option value="US">🇺🇸 United States</option>
                        <option value="GB">🇬🇧 United Kingdom</option>
                        <option value="CA">🇨🇦 Canada</option>
                        <option value="AU">🇦🇺 Australia</option>
                        <option value="SG">🇸🇬 Singapore</option>
                        <option value="MY">🇲🇾 Malaysia</option>
                        <option value="TH">🇹🇭 Thailand</option>
                        <option value="OTHER">🌍 Other</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Treatment of Interest</label>
                  <select
                    {...register('treatmentInterest')}
                    className="flex h-12 w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-base focus:border-primary-500 focus:outline-none"
                  >
                    <option value="">Select treatment (optional)...</option>
                    {ALL_TREATMENTS.map((treatment) => (
                      <option key={treatment.slug} value={treatment.slug}>
                        {treatment.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Subject *</label>
                  <Input {...register('subject')} placeholder="How can we help?" />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Message *</label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    className="flex w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-base focus:border-primary-500 focus:outline-none"
                    placeholder="Tell us more about your medical tourism needs..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                {isSubmitted && (
                  <p className="text-center text-sm text-green-600">
                    Message sent successfully! We&apos;ll get back to you soon.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

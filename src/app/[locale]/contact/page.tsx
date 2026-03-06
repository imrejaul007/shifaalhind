'use client';

export const dynamic = 'force-dynamic';

import { useState, useMemo, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { ALL_TREATMENTS } from '@/config/treatments-list';
import { trackContactSubmit } from '@/lib/analytics';
import { captureUTMParams, formatUTMString, type UTMParams } from '@/lib/utm';

type ContactForm = {
  name: string;
  email: string;
  phone?: string;
  country?: string;
  treatmentInterest?: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [utmParams, setUtmParams] = useState<UTMParams>({});

  useEffect(() => {
    setUtmParams(captureUTMParams());
  }, []);

  const locale = useLocale();

  // Bilingual content for Contact page
  const content = {
    en: {
      hero: {
        title: 'Get in Touch',
        subtitle: "We're here to help 24/7. Reach out to us anytime!"
      },
      contactMethods: {
        phone: 'Phone',
        email: 'Email',
        whatsapp: 'WhatsApp',
        office: 'Office',
        support247: '24/7 Support',
        response24h: 'Response within 24 hours',
        chatWithUs: 'Chat with us',
        visitUs: 'Visit us'
      },
      form: {
        title: 'Send Us a Message',
        name: 'Name',
        nameRequired: 'Name is required',
        namePlaceholder: 'Your name',
        email: 'Email',
        invalidEmail: 'Invalid email',
        emailPlaceholder: 'your@email.com',
        phone: 'Phone / WhatsApp',
        phonePlaceholder: '+971 50 123 4567',
        country: 'Your Country',
        selectCountry: 'Select country...',
        gccCountries: '🌟 GCC Countries',
        menaRegion: '🌍 MENA Region',
        otherCountries: '🌎 Other Countries',
        treatmentInterest: 'Treatment of Interest',
        selectTreatment: 'Select treatment (optional)...',
        subject: 'Subject',
        subjectRequired: 'Subject is required',
        subjectPlaceholder: 'How can we help?',
        message: 'Message',
        messageMinLength: 'Message must be at least 10 characters',
        messagePlaceholder: 'Tell us more about your medical tourism needs...',
        sendButton: 'Send Message',
        sending: 'Sending...',
        successMessage: "Message sent successfully! We'll get back to you soon.",
        errorMessage: 'Failed to send message. Please try again.',
        required: '*'
      },
      countries: {
        uae: 'United Arab Emirates',
        saudi: 'Saudi Arabia',
        qatar: 'Qatar',
        oman: 'Oman',
        kuwait: 'Kuwait',
        bahrain: 'Bahrain',
        egypt: 'Egypt',
        jordan: 'Jordan',
        lebanon: 'Lebanon',
        iraq: 'Iraq',
        yemen: 'Yemen',
        syria: 'Syria',
        palestine: 'Palestine',
        morocco: 'Morocco',
        algeria: 'Algeria',
        tunisia: 'Tunisia',
        libya: 'Libya',
        sudan: 'Sudan',
        usa: 'United States',
        uk: 'United Kingdom',
        canada: 'Canada',
        australia: 'Australia',
        singapore: 'Singapore',
        malaysia: 'Malaysia',
        thailand: 'Thailand',
        other: 'Other'
      }
    },
    ar: {
      hero: {
        title: 'تواصل معنا',
        subtitle: 'نحن هنا لمساعدتك على مدار الساعة طوال أيام الأسبوع. تواصل معنا في أي وقت!'
      },
      contactMethods: {
        phone: 'الهاتف',
        email: 'البريد الإلكتروني',
        whatsapp: 'واتساب',
        office: 'المكتب',
        support247: 'دعم 24/7',
        response24h: 'الرد خلال 24 ساعة',
        chatWithUs: 'تحدث معنا',
        visitUs: 'زرنا'
      },
      form: {
        title: 'أرسل لنا رسالة',
        name: 'الاسم',
        nameRequired: 'الاسم مطلوب',
        namePlaceholder: 'اسمك',
        email: 'البريد الإلكتروني',
        invalidEmail: 'بريد إلكتروني غير صالح',
        emailPlaceholder: 'your@email.com',
        phone: 'الهاتف / واتساب',
        phonePlaceholder: '+971 50 123 4567',
        country: 'بلدك',
        selectCountry: 'اختر البلد...',
        gccCountries: '🌟 دول مجلس التعاون الخليجي',
        menaRegion: '🌍 منطقة الشرق الأوسط وشمال أفريقيا',
        otherCountries: '🌎 دول أخرى',
        treatmentInterest: 'العلاج المهتم به',
        selectTreatment: 'اختر العلاج (اختياري)...',
        subject: 'الموضوع',
        subjectRequired: 'الموضوع مطلوب',
        subjectPlaceholder: 'كيف يمكننا مساعدتك؟',
        message: 'الرسالة',
        messageMinLength: 'يجب أن تكون الرسالة 10 أحرف على الأقل',
        messagePlaceholder: 'أخبرنا المزيد عن احتياجاتك للسياحة العلاجية...',
        sendButton: 'إرسال الرسالة',
        sending: 'جاري الإرسال...',
        successMessage: 'تم إرسال الرسالة بنجاح! سنتواصل معك قريباً.',
        errorMessage: 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.',
        required: '*'
      },
      countries: {
        uae: 'الإمارات العربية المتحدة',
        saudi: 'المملكة العربية السعودية',
        qatar: 'قطر',
        oman: 'عمان',
        kuwait: 'الكويت',
        bahrain: 'البحرين',
        egypt: 'مصر',
        jordan: 'الأردن',
        lebanon: 'لبنان',
        iraq: 'العراق',
        yemen: 'اليمن',
        syria: 'سوريا',
        palestine: 'فلسطين',
        morocco: 'المغرب',
        algeria: 'الجزائر',
        tunisia: 'تونس',
        libya: 'ليبيا',
        sudan: 'السودان',
        usa: 'الولايات المتحدة',
        uk: 'المملكة المتحدة',
        canada: 'كندا',
        australia: 'أستراليا',
        singapore: 'سنغافورة',
        malaysia: 'ماليزيا',
        thailand: 'تايلاند',
        other: 'أخرى'
      }
    }
  };

  const safeLocale = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  const currentContent = content[safeLocale];

  // Create dynamic schema with localized error messages
  const contactSchema = useMemo(() => z.object({
    name: z.string().min(2, currentContent.form.nameRequired),
    email: z.string().email(currentContent.form.invalidEmail),
    phone: z.string().optional(),
    country: z.string().optional(),
    treatmentInterest: z.string().optional(),
    subject: z.string().min(5, currentContent.form.subjectRequired),
    message: z.string().min(10, currentContent.form.messageMinLength),
  }), [currentContent]);

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
    setFormError(null);

    try {
      const response = await fetch('/api/v1/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          ...(formatUTMString(utmParams) ? { utm: formatUTMString(utmParams) } : {}),
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        reset();
        trackContactSubmit('contact-page');
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setFormError(result.error || currentContent.form.errorMessage);
      }
    } catch {
      setFormError(currentContent.form.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: currentContent.contactMethods.phone,
      value: '+971 50 123 4567',
      link: 'tel:+971501234567',
      description: currentContent.contactMethods.support247,
    },
    {
      icon: Mail,
      title: currentContent.contactMethods.email,
      value: 'support@shifaalhind.com',
      link: 'mailto:support@shifaalhind.com',
      description: currentContent.contactMethods.response24h,
    },
    {
      icon: MessageCircle,
      title: currentContent.contactMethods.whatsapp,
      value: '+971 50 123 4567',
      link: 'https://wa.me/971501234567',
      description: currentContent.contactMethods.chatWithUs,
    },
    {
      icon: MapPin,
      title: currentContent.contactMethods.office,
      value: 'Dubai, UAE',
      link: '#',
      description: currentContent.contactMethods.visitUs,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            {currentContent.hero.title}
          </h1>
          <p className="text-xl text-primary-100">
            {currentContent.hero.subtitle}
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
              <CardTitle className="text-2xl">{currentContent.form.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">{currentContent.form.name} {currentContent.form.required}</label>
                    <Input {...register('name')} placeholder={currentContent.form.namePlaceholder} />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">{currentContent.form.email} {currentContent.form.required}</label>
                    <Input {...register('email')} type="email" placeholder={currentContent.form.emailPlaceholder} />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">{currentContent.form.phone}</label>
                    <Input {...register('phone')} type="tel" placeholder={currentContent.form.phonePlaceholder} />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">{currentContent.form.country}</label>
                    <select
                      {...register('country')}
                      className="flex h-12 w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-base focus:border-primary-500 focus:outline-none"
                    >
                      <option value="">{currentContent.form.selectCountry}</option>

                      <optgroup label={currentContent.form.gccCountries}>
                        <option value="AE">🇦🇪 {currentContent.countries.uae}</option>
                        <option value="SA">🇸🇦 {currentContent.countries.saudi}</option>
                        <option value="QA">🇶🇦 {currentContent.countries.qatar}</option>
                        <option value="OM">🇴🇲 {currentContent.countries.oman}</option>
                        <option value="KW">🇰🇼 {currentContent.countries.kuwait}</option>
                        <option value="BH">🇧🇭 {currentContent.countries.bahrain}</option>
                      </optgroup>

                      <optgroup label={currentContent.form.menaRegion}>
                        <option value="EG">🇪🇬 {currentContent.countries.egypt}</option>
                        <option value="JO">🇯🇴 {currentContent.countries.jordan}</option>
                        <option value="LB">🇱🇧 {currentContent.countries.lebanon}</option>
                        <option value="IQ">🇮🇶 {currentContent.countries.iraq}</option>
                        <option value="YE">🇾🇪 {currentContent.countries.yemen}</option>
                        <option value="SY">🇸🇾 {currentContent.countries.syria}</option>
                        <option value="PS">🇵🇸 {currentContent.countries.palestine}</option>
                        <option value="MA">🇲🇦 {currentContent.countries.morocco}</option>
                        <option value="DZ">🇩🇿 {currentContent.countries.algeria}</option>
                        <option value="TN">🇹🇳 {currentContent.countries.tunisia}</option>
                        <option value="LY">🇱🇾 {currentContent.countries.libya}</option>
                        <option value="SD">🇸🇩 {currentContent.countries.sudan}</option>
                      </optgroup>

                      <optgroup label={currentContent.form.otherCountries}>
                        <option value="US">🇺🇸 {currentContent.countries.usa}</option>
                        <option value="GB">🇬🇧 {currentContent.countries.uk}</option>
                        <option value="CA">🇨🇦 {currentContent.countries.canada}</option>
                        <option value="AU">🇦🇺 {currentContent.countries.australia}</option>
                        <option value="SG">🇸🇬 {currentContent.countries.singapore}</option>
                        <option value="MY">🇲🇾 {currentContent.countries.malaysia}</option>
                        <option value="TH">🇹🇭 {currentContent.countries.thailand}</option>
                        <option value="OTHER">🌍 {currentContent.countries.other}</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">{currentContent.form.treatmentInterest}</label>
                  <select
                    {...register('treatmentInterest')}
                    className="flex h-12 w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-base focus:border-primary-500 focus:outline-none"
                  >
                    <option value="">{currentContent.form.selectTreatment}</option>
                    {ALL_TREATMENTS.map((treatment) => (
                      <option key={treatment.slug} value={treatment.slug}>
                        {treatment.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">{currentContent.form.subject} {currentContent.form.required}</label>
                  <Input {...register('subject')} placeholder={currentContent.form.subjectPlaceholder} />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">{currentContent.form.message} {currentContent.form.required}</label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    className="flex w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-base focus:border-primary-500 focus:outline-none"
                    placeholder={currentContent.form.messagePlaceholder}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? currentContent.form.sending : currentContent.form.sendButton}
                </Button>

                {formError && (
                  <div className="rounded-lg bg-red-50 p-4 text-center text-sm text-red-700">
                    {formError}
                  </div>
                )}

                {isSubmitted && (
                  <div className="rounded-lg bg-green-50 p-4 text-center text-sm text-green-700">
                    {currentContent.form.successMessage}
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

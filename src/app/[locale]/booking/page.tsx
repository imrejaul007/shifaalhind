'use client';

import { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { ALL_TREATMENTS } from '@/config/treatments-list';

type BookingForm = {
  userName: string;
  email: string;
  phone: string;
  countryOrigin: string;
  cityOrigin?: string;
  treatmentId?: string;
  preferredDate?: string;
  message?: string;
  medicalConditions?: string;
};

export default function BookingPage() {
  const locale = useLocale();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const content = {
    en: {
      pageTitle: 'Book Your Treatment',
      pageSubtitle: 'Complete this form to get started with your medical journey',
      steps: [
        { id: 1, name: 'Personal Details', icon: '1️⃣' },
        { id: 2, name: 'Treatment Selection', icon: '2️⃣' },
        { id: 3, name: 'Medical Information', icon: '3️⃣' },
        { id: 4, name: 'Confirmation', icon: '✅' },
      ],
      stepOf: 'Step',
      of: 'of',
      // Step 1
      fullName: 'Full Name',
      fullNamePlaceholder: 'John Doe',
      email: 'Email',
      emailPlaceholder: 'john@example.com',
      phone: 'Phone Number',
      phonePlaceholder: '+971 50 123 4567',
      country: 'Country',
      selectCountry: 'Select Country',
      city: 'City (Optional)',
      cityPlaceholder: 'Dubai, Riyadh, Doha...',
      // Step 2
      selectTreatment: 'Select Treatment',
      chooseTreatment: 'Choose Treatment',
      preferredDate: 'Preferred Date (Optional)',
      // Step 3
      medicalConditions: 'Medical Conditions or Questions (Optional)',
      medicalConditionsPlaceholder: 'Please describe any existing medical conditions, allergies, or specific questions...',
      additionalNotes: 'Additional Notes (Optional)',
      additionalNotesPlaceholder: 'Any other information you\'d like to share...',
      // Step 4
      reviewInfo: 'Review Your Information',
      name: 'Name',
      whatNext: 'What happens next?',
      nextSteps: [
        'Our medical team will review your request',
        'You\'ll receive a call within 24 hours',
        'We\'ll create a personalized treatment plan',
        'Cost estimate and timeline will be provided',
        'Complete support from travel to recovery'
      ],
      // Buttons
      previous: 'Previous',
      next: 'Next',
      submitting: 'Submitting...',
      submitButton: 'Submit Booking Request',
      // Success screen
      successTitle: 'Booking Request Submitted!',
      successMessage: 'Thank you for your booking request. Our medical team will contact you within 24 hours to discuss your treatment plan.',
      whatHappensNext: 'What Happens Next?',
      successSteps: [
        'Medical team reviews your request',
        'You\'ll receive a call within 24 hours',
        'Personalized treatment plan created',
        'Cost estimate and timeline provided',
        'Travel and accommodation assistance'
      ],
      // Help
      helpText: 'Need help? Contact us at',
      or: 'or',
      // Errors
      nameMinLength: 'Name must be at least 2 characters',
      invalidEmail: 'Invalid email address',
      phoneRequired: 'Phone number is required',
      countryRequired: 'Country is required',
      errorAlert: 'Error submitting booking. Please try again.',
      // Country groups
      gccCountries: '🌟 GCC Countries (Primary Target)',
      menaRegion: '🌍 MENA Region',
      otherCountries: '🌎 Other Countries'
    },
    ar: {
      pageTitle: 'احجز علاجك',
      pageSubtitle: 'أكمل هذا النموذج لبدء رحلتك الطبية',
      steps: [
        { id: 1, name: 'التفاصيل الشخصية', icon: '1️⃣' },
        { id: 2, name: 'اختيار العلاج', icon: '2️⃣' },
        { id: 3, name: 'المعلومات الطبية', icon: '3️⃣' },
        { id: 4, name: 'التأكيد', icon: '✅' },
      ],
      stepOf: 'الخطوة',
      of: 'من',
      // Step 1
      fullName: 'الاسم الكامل',
      fullNamePlaceholder: 'محمد أحمد',
      email: 'البريد الإلكتروني',
      emailPlaceholder: 'mohammed@example.com',
      phone: 'رقم الهاتف',
      phonePlaceholder: '٩٧١٥٠١٢٣٤٥٦٧+',
      country: 'الدولة',
      selectCountry: 'اختر الدولة',
      city: 'المدينة (اختياري)',
      cityPlaceholder: 'دبي، الرياض، الدوحة...',
      // Step 2
      selectTreatment: 'اختر العلاج',
      chooseTreatment: 'اختر العلاج',
      preferredDate: 'التاريخ المفضل (اختياري)',
      // Step 3
      medicalConditions: 'الحالات الطبية أو الأسئلة (اختياري)',
      medicalConditionsPlaceholder: 'يرجى وصف أي حالات طبية موجودة، حساسية، أو أسئلة محددة...',
      additionalNotes: 'ملاحظات إضافية (اختياري)',
      additionalNotesPlaceholder: 'أي معلومات أخرى ترغب في مشاركتها...',
      // Step 4
      reviewInfo: 'راجع معلوماتك',
      name: 'الاسم',
      whatNext: 'ما الذي سيحدث بعد ذلك؟',
      nextSteps: [
        'سيراجع فريقنا الطبي طلبك',
        'ستتلقى مكالمة خلال 24 ساعة',
        'سننشئ خطة علاجية مخصصة لك',
        'سيتم تقديم تقدير التكلفة والجدول الزمني',
        'دعم كامل من السفر إلى التعافي'
      ],
      // Buttons
      previous: 'السابق',
      next: 'التالي',
      submitting: 'جارٍ الإرسال...',
      submitButton: 'إرسال طلب الحجز',
      // Success screen
      successTitle: 'تم إرسال طلب الحجز!',
      successMessage: 'شكراً لك على طلب الحجز. سيتواصل معك فريقنا الطبي خلال 24 ساعة لمناقشة خطة علاجك.',
      whatHappensNext: 'ما الذي سيحدث بعد ذلك؟',
      successSteps: [
        'يراجع الفريق الطبي طلبك',
        'ستتلقى مكالمة خلال 24 ساعة',
        'يتم إنشاء خطة علاجية مخصصة',
        'يتم تقديم تقدير التكلفة والجدول الزمني',
        'المساعدة في السفر والإقامة'
      ],
      // Help
      helpText: 'تحتاج مساعدة؟ اتصل بنا على',
      or: 'أو',
      // Errors
      nameMinLength: 'يجب أن يكون الاسم على الأقل حرفين',
      invalidEmail: 'عنوان بريد إلكتروني غير صالح',
      phoneRequired: 'رقم الهاتف مطلوب',
      countryRequired: 'الدولة مطلوبة',
      errorAlert: 'خطأ في إرسال الحجز. يرجى المحاولة مرة أخرى.',
      // Country groups
      gccCountries: '🌟 دول مجلس التعاون الخليجي (الهدف الأساسي)',
      menaRegion: '🌍 منطقة الشرق الأوسط وشمال أفريقيا',
      otherCountries: '🌎 دول أخرى'
    }
  };

  const safeLocale = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  const currentContent = content[safeLocale];

  // Create dynamic schema with localized error messages
  const bookingSchema = useMemo(() => z.object({
    userName: z.string().min(2, currentContent.nameMinLength),
    email: z.string().email(currentContent.invalidEmail),
    phone: z.string().min(8, currentContent.phoneRequired),
    countryOrigin: z.string().min(2, currentContent.countryRequired),
    cityOrigin: z.string().optional(),
    treatmentId: z.string().optional(),
    preferredDate: z.string().optional(),
    message: z.string().optional(),
    medicalConditions: z.string().optional(),
  }), [currentContent]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
  } = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
  });

  const formData = watch();

  const nextStep = async () => {
    let fieldsToValidate: (keyof BookingForm)[] = [];

    if (currentStep === 1) {
      fieldsToValidate = ['userName', 'email', 'phone', 'countryOrigin'];
    } else if (currentStep === 2) {
      fieldsToValidate = ['treatmentId'];
    }

    const isValid = await trigger(fieldsToValidate);

    if (isValid && currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: BookingForm) => {
    setIsSubmitting(true);

    try {
      const treatmentIndex = data.treatmentId ? parseInt(data.treatmentId) - 1 : -1;
      const treatmentName = treatmentIndex >= 0 ? ALL_TREATMENTS[treatmentIndex]?.name : 'Not specified';

      const submissionData = {
        userName: data.userName,
        email: data.email,
        phone: data.phone,
        countryOrigin: data.countryOrigin,
        cityOrigin: data.cityOrigin,
        preferredDate: data.preferredDate,
        message: `Treatment: ${treatmentName}\n\n${data.medicalConditions || ''}${data.message ? '\n\n' + data.message : ''}`.trim(),
      };

      const response = await fetch('/api/v1/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert(currentContent.errorAlert);
      }
    } catch (error) {
      console.error('Booking error:', error);
      alert(currentContent.errorAlert);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="container px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-green-100 p-6">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
          </div>
          <h1 className="mb-4 font-serif text-4xl font-bold text-gray-900">
            {currentContent.successTitle}
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            {currentContent.successMessage}
          </p>
          <div className="rounded-xl bg-primary-50 p-6">
            <h3 className="mb-2 font-semibold text-primary-900">{currentContent.whatHappensNext}</h3>
            <ul className="space-y-2 text-left text-primary-700">
              {currentContent.successSteps.map((step, index) => (
                <li key={index}>✅ {step}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 font-serif text-4xl font-bold text-gray-900">
            {currentContent.pageTitle}
          </h1>
          <p className="text-lg text-gray-600">
            {currentContent.pageSubtitle}
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {currentContent.steps.map((step, index) => (
              <div key={step.id} className="flex flex-1 items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full text-xl ${
                      currentStep >= step.id
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step.icon}
                  </div>
                  <span
                    className={`mt-2 text-xs font-medium ${
                      currentStep >= step.id ? 'text-primary-600' : 'text-gray-500'
                    }`}
                  >
                    {step.name}
                  </span>
                </div>
                {index < currentContent.steps.length - 1 && (
                  <div
                    className={`mx-2 h-1 flex-1 ${
                      currentStep > step.id ? 'bg-primary-500' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card>
            <CardHeader>
              <CardTitle>{currentContent.steps[currentStep - 1].name}</CardTitle>
              <CardDescription>
                {currentContent.stepOf} {currentStep} {currentContent.of} {currentContent.steps.length}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1: Personal Details */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium">{currentContent.fullName} *</label>
                    <Input {...register('userName')} placeholder={currentContent.fullNamePlaceholder} />
                    {errors.userName && (
                      <p className="mt-1 text-sm text-red-600">{errors.userName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">{currentContent.email} *</label>
                    <Input {...register('email')} type="email" placeholder={currentContent.emailPlaceholder} />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">{currentContent.phone} *</label>
                    <Input {...register('phone')} type="tel" placeholder={currentContent.phonePlaceholder} />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">{currentContent.country} *</label>
                    <select
                      {...register('countryOrigin')}
                      className="flex h-12 w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-base focus:border-primary-500 focus:outline-none"
                    >
                      <option value="">{currentContent.selectCountry}</option>

                      <optgroup label={currentContent.gccCountries}>
                        <option value="AE">🇦🇪 {safeLocale === 'ar' ? 'الإمارات العربية المتحدة' : 'United Arab Emirates (UAE)'}</option>
                        <option value="SA">🇸🇦 {safeLocale === 'ar' ? 'المملكة العربية السعودية' : 'Saudi Arabia'}</option>
                        <option value="QA">🇶🇦 {safeLocale === 'ar' ? 'قطر' : 'Qatar'}</option>
                        <option value="OM">🇴🇲 {safeLocale === 'ar' ? 'عمان' : 'Oman'}</option>
                        <option value="KW">🇰🇼 {safeLocale === 'ar' ? 'الكويت' : 'Kuwait'}</option>
                        <option value="BH">🇧🇭 {safeLocale === 'ar' ? 'البحرين' : 'Bahrain'}</option>
                      </optgroup>

                      <optgroup label={currentContent.menaRegion}>
                        <option value="EG">🇪🇬 {safeLocale === 'ar' ? 'مصر' : 'Egypt'}</option>
                        <option value="JO">🇯🇴 {safeLocale === 'ar' ? 'الأردن' : 'Jordan'}</option>
                        <option value="LB">🇱🇧 {safeLocale === 'ar' ? 'لبنان' : 'Lebanon'}</option>
                        <option value="IQ">🇮🇶 {safeLocale === 'ar' ? 'العراق' : 'Iraq'}</option>
                        <option value="YE">🇾🇪 {safeLocale === 'ar' ? 'اليمن' : 'Yemen'}</option>
                        <option value="SY">🇸🇾 {safeLocale === 'ar' ? 'سوريا' : 'Syria'}</option>
                        <option value="PS">🇵🇸 {safeLocale === 'ar' ? 'فلسطين' : 'Palestine'}</option>
                        <option value="MA">🇲🇦 {safeLocale === 'ar' ? 'المغرب' : 'Morocco'}</option>
                        <option value="DZ">🇩🇿 {safeLocale === 'ar' ? 'الجزائر' : 'Algeria'}</option>
                        <option value="TN">🇹🇳 {safeLocale === 'ar' ? 'تونس' : 'Tunisia'}</option>
                        <option value="LY">🇱🇾 {safeLocale === 'ar' ? 'ليبيا' : 'Libya'}</option>
                        <option value="SD">🇸🇩 {safeLocale === 'ar' ? 'السودان' : 'Sudan'}</option>
                      </optgroup>

                      <optgroup label={currentContent.otherCountries}>
                        <option value="US">🇺🇸 {safeLocale === 'ar' ? 'الولايات المتحدة' : 'United States'}</option>
                        <option value="GB">🇬🇧 {safeLocale === 'ar' ? 'المملكة المتحدة' : 'United Kingdom'}</option>
                        <option value="CA">🇨🇦 {safeLocale === 'ar' ? 'كندا' : 'Canada'}</option>
                        <option value="AU">🇦🇺 {safeLocale === 'ar' ? 'أستراليا' : 'Australia'}</option>
                        <option value="SG">🇸🇬 {safeLocale === 'ar' ? 'سنغافورة' : 'Singapore'}</option>
                        <option value="MY">🇲🇾 {safeLocale === 'ar' ? 'ماليزيا' : 'Malaysia'}</option>
                        <option value="TH">🇹🇭 {safeLocale === 'ar' ? 'تايلاند' : 'Thailand'}</option>
                        <option value="OTHER">🌍 {safeLocale === 'ar' ? 'أخرى' : 'Other'}</option>
                      </optgroup>
                    </select>
                    {errors.countryOrigin && (
                      <p className="mt-1 text-sm text-red-600">{errors.countryOrigin.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">{currentContent.city}</label>
                    <Input {...register('cityOrigin')} placeholder={currentContent.cityPlaceholder} />
                  </div>
                </div>
              )}

              {/* Step 2: Treatment Selection */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium">{currentContent.selectTreatment} *</label>
                    <select
                      {...register('treatmentId')}
                      className="flex h-12 w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-base focus:border-primary-500 focus:outline-none"
                    >
                      <option value="">{currentContent.chooseTreatment}</option>
                      {ALL_TREATMENTS.map((treatment, index) => (
                        <option key={treatment.slug} value={String(index + 1)}>
                          {treatment.name}
                        </option>
                      ))}
                    </select>
                    {errors.treatmentId && (
                      <p className="mt-1 text-sm text-red-600">{errors.treatmentId.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">{currentContent.preferredDate}</label>
                    <Input {...register('preferredDate')} type="date" />
                  </div>
                </div>
              )}

              {/* Step 3: Medical Information */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      {currentContent.medicalConditions}
                    </label>
                    <textarea
                      {...register('medicalConditions')}
                      rows={4}
                      className="flex w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-base focus:border-primary-500 focus:outline-none"
                      placeholder={currentContent.medicalConditionsPlaceholder}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      {currentContent.additionalNotes}
                    </label>
                    <textarea
                      {...register('message')}
                      rows={3}
                      className="flex w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-base focus:border-primary-500 focus:outline-none"
                      placeholder={currentContent.additionalNotesPlaceholder}
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Confirmation */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="rounded-xl bg-gray-50 p-6">
                    <h3 className="mb-4 font-semibold text-gray-900">{currentContent.reviewInfo}</h3>

                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">{currentContent.name}:</span>
                        <span className="font-medium">{formData.userName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">{currentContent.email}:</span>
                        <span className="font-medium">{formData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">{currentContent.phone}:</span>
                        <span className="font-medium">{formData.phone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">{currentContent.country}:</span>
                        <span className="font-medium">{formData.countryOrigin}</span>
                      </div>
                      {formData.preferredDate && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">{currentContent.preferredDate}:</span>
                          <span className="font-medium">{formData.preferredDate}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="rounded-xl border-2 border-primary-200 bg-primary-50 p-6">
                    <h4 className="mb-2 font-semibold text-primary-900">{currentContent.whatNext}</h4>
                    <ul className="space-y-2 text-sm text-primary-700">
                      {currentContent.nextSteps.map((step, index) => (
                        <li key={index}>✓ {step}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                {currentStep > 1 && (
                  <Button type="button" variant="outline" onClick={prevStep}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {currentContent.previous}
                  </Button>
                )}

                {currentStep < 4 ? (
                  <Button type="button" onClick={nextStep} className="ml-auto">
                    {currentContent.next}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button type="submit" disabled={isSubmitting} className="ml-auto">
                    {isSubmitting ? currentContent.submitting : currentContent.submitButton}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </form>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            {currentContent.helpText}{' '}
            <a href="tel:+971501234567" className="text-primary-600 hover:text-primary-700">
              +971 50 123 4567
            </a>{' '}
            {currentContent.or}{' '}
            <a href="mailto:support@shifaalhind.com" className="text-primary-600 hover:text-primary-700">
              support@shifaalhind.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

const bookingSchema = z.object({
  // Step 1: Personal Info
  userName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Phone number is required'),
  countryOrigin: z.string().min(2, 'Country is required'),
  cityOrigin: z.string().optional(),

  // Step 2: Treatment Info
  treatmentId: z.string().optional(),
  preferredDate: z.string().optional(),

  // Step 3: Medical Info
  message: z.string().optional(),
  medicalConditions: z.string().optional(),
});

type BookingForm = z.infer<typeof bookingSchema>;

const steps = [
  { id: 1, name: 'Personal Details', icon: '1️⃣' },
  { id: 2, name: 'Treatment Selection', icon: '2️⃣' },
  { id: 3, name: 'Medical Information', icon: '3️⃣' },
  { id: 4, name: 'Confirmation', icon: '✅' },
];

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      const response = await fetch('/api/v1/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('Error submitting booking. Please try again.');
      }
    } catch (error) {
      console.error('Booking error:', error);
      alert('Error submitting booking. Please try again.');
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
            Booking Request Submitted!
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            Thank you for your booking request. Our medical team will contact you within 24 hours to discuss your treatment plan.
          </p>
          <div className="rounded-xl bg-primary-50 p-6">
            <h3 className="mb-2 font-semibold text-primary-900">What Happens Next?</h3>
            <ul className="space-y-2 text-left text-primary-700">
              <li>✅ Medical team reviews your request</li>
              <li>✅ You&apos;ll receive a call within 24 hours</li>
              <li>✅ Personalized treatment plan created</li>
              <li>✅ Cost estimate and timeline provided</li>
              <li>✅ Travel and accommodation assistance</li>
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
            Book Your Treatment
          </h1>
          <p className="text-lg text-gray-600">
            Complete this form to get started with your medical journey
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
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
                {index < steps.length - 1 && (
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
              <CardTitle>{steps[currentStep - 1].name}</CardTitle>
              <CardDescription>
                Step {currentStep} of {steps.length}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1: Personal Details */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium">Full Name *</label>
                    <Input {...register('userName')} placeholder="John Doe" />
                    {errors.userName && (
                      <p className="mt-1 text-sm text-red-600">{errors.userName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">Email *</label>
                    <Input {...register('email')} type="email" placeholder="john@example.com" />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">Phone Number *</label>
                    <Input {...register('phone')} type="tel" placeholder="+971 50 123 4567" />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">Country *</label>
                    <select
                      {...register('countryOrigin')}
                      className="flex h-12 w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-base focus:border-primary-500 focus:outline-none"
                    >
                      <option value="">Select Country</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="QA">Qatar</option>
                      <option value="OM">Oman</option>
                      <option value="KW">Kuwait</option>
                      <option value="BH">Bahrain</option>
                    </select>
                    {errors.countryOrigin && (
                      <p className="mt-1 text-sm text-red-600">{errors.countryOrigin.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">City (Optional)</label>
                    <Input {...register('cityOrigin')} placeholder="Dubai, Riyadh, Doha..." />
                  </div>
                </div>
              )}

              {/* Step 2: Treatment Selection */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium">Select Treatment *</label>
                    <select
                      {...register('treatmentId')}
                      className="flex h-12 w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-base focus:border-primary-500 focus:outline-none"
                    >
                      <option value="">Choose Treatment</option>
                      <option value="1">Heart Surgery</option>
                      <option value="2">Knee Replacement</option>
                      <option value="3">IVF & Fertility</option>
                      <option value="4">Dental Implants</option>
                      <option value="5">Hair Transplant</option>
                      <option value="6">Cataract Surgery</option>
                      <option value="7">Cancer Treatment</option>
                      <option value="8">Cosmetic Surgery</option>
                    </select>
                    {errors.treatmentId && (
                      <p className="mt-1 text-sm text-red-600">{errors.treatmentId.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">Preferred Date (Optional)</label>
                    <Input {...register('preferredDate')} type="date" />
                  </div>
                </div>
              )}

              {/* Step 3: Medical Information */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Medical Conditions or Questions (Optional)
                    </label>
                    <textarea
                      {...register('medicalConditions')}
                      rows={4}
                      className="flex w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-base focus:border-primary-500 focus:outline-none"
                      placeholder="Please describe any existing medical conditions, allergies, or specific questions..."
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      {...register('message')}
                      rows={3}
                      className="flex w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-base focus:border-primary-500 focus:outline-none"
                      placeholder="Any other information you&apos;d like to share..."
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Confirmation */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="rounded-xl bg-gray-50 p-6">
                    <h3 className="mb-4 font-semibold text-gray-900">Review Your Information</h3>

                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Name:</span>
                        <span className="font-medium">{formData.userName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Email:</span>
                        <span className="font-medium">{formData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Phone:</span>
                        <span className="font-medium">{formData.phone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Country:</span>
                        <span className="font-medium">{formData.countryOrigin}</span>
                      </div>
                      {formData.preferredDate && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Preferred Date:</span>
                          <span className="font-medium">{formData.preferredDate}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="rounded-xl border-2 border-primary-200 bg-primary-50 p-6">
                    <h4 className="mb-2 font-semibold text-primary-900">What happens next?</h4>
                    <ul className="space-y-2 text-sm text-primary-700">
                      <li>✓ Our medical team will review your request</li>
                      <li>✓ You&apos;ll receive a call within 24 hours</li>
                      <li>✓ We&apos;ll create a personalized treatment plan</li>
                      <li>✓ Cost estimate and timeline will be provided</li>
                      <li>✓ Complete support from travel to recovery</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                {currentStep > 1 && (
                  <Button type="button" variant="outline" onClick={prevStep}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                )}

                {currentStep < 4 ? (
                  <Button type="button" onClick={nextStep} className="ml-auto">
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button type="submit" disabled={isSubmitting} className="ml-auto">
                    {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </form>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Need help? Contact us at{' '}
            <a href="tel:+971501234567" className="text-primary-600 hover:text-primary-700">
              +971 50 123 4567
            </a>{' '}
            or{' '}
            <a href="mailto:support@shifaalhind.com" className="text-primary-600 hover:text-primary-700">
              support@shifaalhind.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

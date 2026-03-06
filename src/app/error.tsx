'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  const isArabic = typeof window !== 'undefined' && window.location.pathname.startsWith('/ar');

  const content = isArabic ? {
    title: 'حدث خطأ ما!',
    description: 'نعتذر عن الإزعاج. حدث خطأ.',
    errorDetails: 'تفاصيل الخطأ:',
    errorId: 'معرف الخطأ:',
    tryAgain: 'حاول مرة أخرى',
    goHome: 'الصفحة الرئيسية',
    persistMessage: 'إذا استمرت هذه المشكلة، يرجى التواصل مع الدعم:',
  } : {
    title: 'Something went wrong!',
    description: 'We apologize for the inconvenience. An error has occurred.',
    errorDetails: 'Error Details:',
    errorId: 'Error ID:',
    tryAgain: 'Try Again',
    goHome: 'Go Home',
    persistMessage: 'If this problem persists, please contact support:',
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-16" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="text-center">
        <h1 className="mb-4 font-serif text-4xl font-bold text-gray-900">
          {content.title}
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          {content.description}
        </p>

        <div className="mb-8 rounded-lg bg-red-50 p-6">
          <p className="mb-2 font-semibold text-red-800">{content.errorDetails}</p>
          <p className="text-sm text-red-700">{error.message}</p>
          {error.digest && (
            <p className="mt-2 text-xs text-red-600">{content.errorId} {error.digest}</p>
          )}
        </div>

        <div className="flex justify-center gap-4">
          <Button
            onClick={() => reset()}
            className="bg-primary-600 hover:bg-primary-700"
          >
            {content.tryAgain}
          </Button>
          <Button
            onClick={() => (window.location.href = '/')}
            variant="outline"
          >
            {content.goHome}
          </Button>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>{content.persistMessage}</p>
          <p className="mt-2">
            <a
              href="mailto:support@shifaalhind.com"
              className="text-primary-600 hover:text-primary-700"
            >
              support@shifaalhind.com
            </a>
            {' | '}
            <a
              href="tel:+971501234567"
              className="text-primary-600 hover:text-primary-700"
            >
              +971 50 123 4567
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

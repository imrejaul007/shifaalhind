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
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-16">
      <div className="text-center">
        <h1 className="mb-4 font-serif text-4xl font-bold text-gray-900">
          Something went wrong!
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          We apologize for the inconvenience. An error has occurred.
        </p>

        <div className="mb-8 rounded-lg bg-red-50 p-6">
          <p className="mb-2 font-semibold text-red-800">Error Details:</p>
          <p className="text-sm text-red-700">{error.message}</p>
          {error.digest && (
            <p className="mt-2 text-xs text-red-600">Error ID: {error.digest}</p>
          )}
        </div>

        <div className="flex justify-center gap-4">
          <Button
            onClick={() => reset()}
            className="bg-primary-600 hover:bg-primary-700"
          >
            Try Again
          </Button>
          <Button
            onClick={() => (window.location.href = '/')}
            variant="outline"
          >
            Go Home
          </Button>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>If this problem persists, please contact support:</p>
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

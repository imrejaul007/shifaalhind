import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-16">
      <div className="text-center">
        <h1 className="mb-4 font-serif text-6xl font-bold text-primary-600">404</h1>
        <h2 className="mb-4 text-3xl font-bold text-gray-900">Page Not Found</h2>
        <p className="mb-8 text-lg text-gray-600">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>

        <div className="mb-12 flex justify-center gap-4">
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        <div className="mx-auto max-w-md">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">Popular Pages</h3>
          <div className="space-y-2 text-sm">
            <Link
              href="/about"
              className="block text-primary-600 hover:text-primary-700 hover:underline"
            >
              About Us
            </Link>
            <Link
              href="/medical-tourism/united-arab-emirates/dubai"
              className="block text-primary-600 hover:text-primary-700 hover:underline"
            >
              Medical Tourism in Dubai
            </Link>
            <Link
              href="/booking"
              className="block text-primary-600 hover:text-primary-700 hover:underline"
            >
              Book a Treatment
            </Link>
            <Link
              href="/contact"
              className="block text-primary-600 hover:text-primary-700 hover:underline"
            >
              Contact Support
            </Link>
          </div>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>Need help? Contact us:</p>
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

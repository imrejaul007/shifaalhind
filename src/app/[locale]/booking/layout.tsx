import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Book Your Medical Treatment in India | Shifa AlHind',
  description: 'Book affordable, world-class medical treatment in India. Free consultation, visa assistance, and end-to-end support for GCC patients.',
  robots: { index: true, follow: true },
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

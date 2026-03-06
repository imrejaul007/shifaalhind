import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Search Treatments & Hospitals | Shifa AlHind',
  description: 'Search for medical treatments, hospitals, doctors, and packages in India. Find the best healthcare options for your needs.',
  robots: { index: false, follow: true },
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

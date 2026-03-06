import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Contact Us | Shifa AlHind - Medical Tourism India',
  description: 'Get in touch with Shifa AlHind for medical tourism inquiries. Free consultation, treatment quotes, and 24/7 support for patients from GCC countries.',
  robots: { index: true, follow: true },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

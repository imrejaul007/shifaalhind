import type { Metadata } from 'next';
import { Inter, Playfair_Display, Cairo } from 'next/font/google';
import './globals.css';
import { generateOrganizationSchema } from '@/lib/seo';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://shifa-alhind.onrender.com'),
  title: {
    default: 'Shifa AlHind | Premium Medical Tourism to India',
    template: '%s | Shifa AlHind',
  },
  description:
    'Connect with world-class hospitals and treatments in India. Affordable, quality healthcare for patients from UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain.',
  keywords: [
    'medical tourism',
    'India healthcare',
    'medical treatment India',
    'hospitals in India',
    'affordable healthcare',
    'GCC medical tourism',
  ],
  authors: [{ name: 'Shifa AlHind' }],
  creator: 'Shifa AlHind',
  publisher: 'Shifa AlHind',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${cairo.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

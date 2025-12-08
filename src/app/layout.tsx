import type { Metadata } from 'next';
import { Inter, Playfair_Display, Cairo } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import { generateOrganizationSchema } from '@/lib/seo';
import { ClarityScript } from '@/components/analytics/clarity-script';

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://shifaalhind.onrender.com'),
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
    'medical tourism India',
    'healthcare India',
    'best hospitals India',
    'medical packages India',
    'surgery India',
    'treatment India',
  ],
  authors: [{ name: 'Shifa AlHind' }],
  creator: 'Shifa AlHind',
  publisher: 'Shifa AlHind',
  applicationName: 'Shifa AlHind',
  category: 'health',
  classification: 'Medical Tourism',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ar_SA'],
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://shifaalhind.onrender.com',
    title: 'Shifa AlHind | Premium Medical Tourism to India',
    description:
      'Connect with world-class hospitals and treatments in India. Affordable, quality healthcare for patients from GCC countries.',
    siteName: 'Shifa AlHind',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shifa AlHind - Medical Tourism to India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shifa AlHind | Premium Medical Tourism to India',
    description:
      'Connect with world-class hospitals and treatments in India. Affordable, quality healthcare for patients from GCC countries.',
    images: ['/og-image.png'],
    creator: '@shifaalhind',
    site: '@shifaalhind',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION || '',
    },
  },
  alternates: {
    canonical: 'https://shifaalhind.onrender.com/en',
    languages: {
      'en-US': 'https://shifaalhind.onrender.com/en',
      'ar-SA': 'https://shifaalhind.onrender.com/ar',
      'x-default': 'https://shifaalhind.onrender.com/en',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#10b981',
      },
    ],
  },
  manifest: '/manifest.webmanifest',
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
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <ClarityScript />
      </body>
    </html>
  );
}

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { WhatsAppFloat } from '@/components/marketing/whatsapp-float';
import { ExitIntentPopup } from '@/components/marketing/exit-intent-popup';
import { StickyCTA } from '@/components/marketing/sticky-cta';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="flex min-h-screen flex-col" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <Header />
        <StickyCTA />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <ExitIntentPopup />
      </div>
    </NextIntlClientProvider>
  );
}

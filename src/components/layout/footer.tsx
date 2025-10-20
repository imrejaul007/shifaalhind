'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { gccCountries, treatments } from '@/config/gcc-countries';

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/shifaalhind' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/shifaalhind' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/shifaalhind' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/shifaalhind' },
  ];

  return (
    <footer className="border-t bg-gray-50" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 font-serif text-xl font-bold text-primary-500">Shifa AlHind</h3>
            <p className="mb-4 text-sm text-gray-600">{t('tagline')}</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-white p-2 shadow transition-colors hover:bg-primary-500 hover:text-white"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">{t('quickLinks')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-primary-500">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-primary-500">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">{t('treatments')}</h4>
            <ul className="space-y-2 text-sm">
              {treatments.slice(0, 6).map((treatment) => (
                <li key={treatment.slug}>
                  <Link
                    href="/treatments"
                    className="text-gray-600 hover:text-primary-500"
                  >
                    {treatment.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">{t('destinations')}</h4>
            <ul className="space-y-2 text-sm">
              {gccCountries.slice(0, 6).map((country) => (
                <li key={country.slug}>
                  <Link
                    href="/medical-tourism"
                    className="text-gray-600 hover:text-primary-500"
                  >
                    For {country.name} Patients
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 border-t pt-8">
          <div className="mx-auto max-w-md text-center">
            <h4 className="mb-2 font-semibold text-gray-900">{t('newsletter')}</h4>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder={t('emailPlaceholder')}
                className="flex-1 rounded-lg border-2 border-gray-300 px-4 py-2 focus:border-primary-500 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-lg bg-primary-500 px-6 py-2 text-white hover:bg-primary-600"
              >
                {t('subscribe')}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t pt-8 text-center">
          <div className="mb-4 flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/privacy" className="text-gray-600 hover:text-primary-500">
              {t('privacy')}
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-primary-500">
              {t('terms')}
            </Link>
            <Link href="/refunds" className="text-gray-600 hover:text-primary-500">
              {t('refunds')}
            </Link>
          </div>
          <p className="text-sm text-gray-600">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}

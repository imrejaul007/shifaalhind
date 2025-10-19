'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';
import { Menu, X, Phone, Mail, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: t('common.home'), href: '/' },
    { name: t('nav.medicalTourism'), href: '/medical-tourism' },
    { name: t('common.treatments'), href: '/treatments' },
    { name: t('common.hospitals'), href: '/hospitals' },
    { name: t('common.doctors'), href: '/doctors' },
    { name: t('nav.successStories'), href: '/stories' },
    { name: t('common.about'), href: '/about' },
    { name: t('common.contact'), href: '/contact' },
  ];

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    const path = window.location.pathname;
    const newPath = locale === 'en' ? `/ar${path}` : path.replace('/ar', '');
    window.location.href = newPath || '/';
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      {/* Top bar */}
      <div className="border-b bg-primary-500 px-4 py-2 text-white">
        <div className="container mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+971501234567" className="flex items-center gap-1 hover:text-accent-300">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+971 50 123 4567</span>
            </a>
            <a
              href="mailto:info@shifaalhind.com"
              className="flex items-center gap-1 hover:text-accent-300"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">info@shifaalhind.com</span>
            </a>
          </div>
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1 hover:text-accent-300"
          >
            <Globe className="h-4 w-4" />
            <span>{locale === 'en' ? 'العربية' : 'English'}</span>
          </button>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="font-serif text-2xl font-bold text-primary-500">
              Shifa AlHind
              <span className="ml-2 text-accent-500">شفاء الهند</span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-600"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-2 lg:flex">
            <Button asChild variant="outline" size="sm">
              <Link href="/consultation">{t('common.consultation')}</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/booking">{t('common.booking')}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="border-t py-4 lg:hidden">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 px-4 pt-4">
                <Button asChild variant="outline">
                  <Link href="/consultation">{t('common.consultation')}</Link>
                </Button>
                <Button asChild>
                  <Link href="/booking">{t('common.booking')}</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

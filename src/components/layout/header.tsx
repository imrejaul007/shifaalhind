'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';
import {
  Menu,
  X,
  Phone,
  Mail,
  Globe,
  MessageCircle,
  Award,
  Shield,
  Users,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);

  const navigation = [
    {
      name: t('common.treatments'),
      href: '/treatments',
      hasDropdown: true,
      megaMenu: true,
      submenu: [
        {
          category: '🫀 Cardiac',
          items: [
            { name: 'Angioplasty', href: '/treatments/angioplasty-india' },
          ]
        },
        {
          category: '🦴 Orthopedic',
          items: [
            { name: 'ACL Reconstruction', href: '/treatments/acl-reconstruction-india' },
            { name: 'Hip Replacement', href: '/treatments/hip-replacement-india' },
            { name: 'Shoulder Surgery', href: '/treatments/shoulder-surgery-india' },
          ]
        },
        {
          category: '🎗️ Cancer Treatment',
          items: [
            { name: 'Blood Cancer', href: '/treatments/blood-cancer-treatment-india' },
            { name: 'Breast Cancer', href: '/treatments/breast-cancer-treatment-india' },
            { name: 'Cervical Cancer', href: '/treatments/cervical-cancer-treatment-india' },
            { name: 'Colon Cancer', href: '/treatments/colon-cancer-treatment-india' },
            { name: 'Lung Cancer', href: '/treatments/lung-cancer-treatment-india' },
            { name: 'Prostate Cancer', href: '/treatments/prostate-cancer-treatment-india' },
          ]
        },
        {
          category: '👁️ Eye Care',
          items: [
            { name: 'Cataract Surgery', href: '/treatments/cataract-surgery-india' },
            { name: 'LASIK Eye Surgery', href: '/treatments/lasik-eye-surgery-india' },
          ]
        },
        {
          category: '🦷 Dental',
          items: [
            { name: 'All-on-4 Dental Implants', href: '/treatments/all-on-4-dental-implants-india' },
            { name: 'Dental Implants', href: '/treatments/dental-implants-india' },
            { name: 'Veneers', href: '/treatments/veneers-india' },
          ]
        },
        {
          category: '✨ Cosmetic',
          items: [
            { name: 'Breast Augmentation', href: '/treatments/breast-augmentation-india' },
            { name: 'Hair Transplant', href: '/treatments/hair-transplant-india' },
            { name: 'Liposuction', href: '/treatments/liposuction-india' },
            { name: 'Rhinoplasty', href: '/treatments/rhinoplasty-india' },
          ]
        },
        {
          category: '⚖️ Bariatric',
          items: [
            { name: 'Gastric Bypass', href: '/treatments/gastric-bypass-india' },
          ]
        },
        {
          category: '🏥 General Surgery',
          items: [
            { name: 'Appendix Surgery', href: '/treatments/appendix-surgery-india' },
            { name: 'Gallbladder Surgery', href: '/treatments/gallbladder-surgery-india' },
            { name: 'Hernia Surgery', href: '/treatments/hernia-surgery-india' },
            { name: 'Piles Surgery', href: '/treatments/piles-surgery-india' },
            { name: 'Thyroid Surgery', href: '/treatments/thyroid-surgery-india' },
            { name: 'Varicose Veins', href: '/treatments/varicose-veins-treatment-india' },
          ]
        },
        {
          category: '🩺 Urology',
          items: [
            { name: 'Kidney Stone Treatment', href: '/treatments/kidney-stone-treatment-india' },
          ]
        },
        {
          category: '👩‍⚕️ Women\'s Health',
          items: [
            { name: 'Egg Freezing', href: '/treatments/egg-freezing-india' },
            { name: 'Hysterectomy Surgery', href: '/treatments/hysterectomy-surgery-india' },
            { name: 'PCOS Treatment', href: '/treatments/pcos-treatment-india' },
          ]
        },
      ]
    },
    { name: t('common.hospitals'), href: '/hospitals' },
    { name: t('common.doctors'), href: '/doctors' },
    { name: t('common.about'), href: '/about' },
    { name: t('common.contact'), href: '/contact' },
  ];

  const toggleLocale = () => {
    const path = window.location.pathname;
    const newPath = locale === 'en' ? `/ar${path}` : path.replace('/ar', '');
    window.location.href = newPath || '/';
  };

  const whatsappNumber = '919876543210';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-3 sm:gap-6">
              <div className="flex items-center gap-1.5">
                <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="font-medium">JCI Accredited</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="font-medium">Save 60-80%</span>
              </div>
              <div className="hidden items-center gap-1.5 md:flex">
                <Users className="h-4 w-4" />
                <span className="font-medium">10,000+ Patients</span>
              </div>
            </div>
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1.5 font-medium transition-colors hover:text-accent-300"
            >
              <Globe className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>{locale === 'en' ? 'العربية' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between gap-4 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold leading-tight text-primary-600 sm:text-2xl lg:text-3xl">
                  Shifa AlHind
                </span>
                <span className="text-[10px] text-gray-500 sm:text-xs">Premium Medical Tourism</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-2 lg:flex" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="group"
                      onMouseEnter={() => setTreatmentsOpen(true)}
                      onMouseLeave={() => setTreatmentsOpen(false)}
                    >
                      <button className="flex h-10 items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-600">
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      {treatmentsOpen && (
                        <div className={`absolute left-0 top-full z-50 mt-1.5 rounded-lg border border-gray-100 bg-white shadow-xl ${item.megaMenu ? 'w-[950px] p-6' : 'w-60 py-2'}`}>
                          {item.megaMenu ? (
                            // Mega Menu with categories
                            <div className="grid grid-cols-4 gap-5">
                              {item.submenu?.map((category: any) => (
                                <div key={category.category}>
                                  <h3 className="mb-2.5 text-xs font-bold text-gray-900 border-b border-gray-200 pb-1.5">
                                    {category.category}
                                  </h3>
                                  <div className="space-y-0.5">
                                    {category.items.map((subItem: any) => (
                                      <Link
                                        key={subItem.name}
                                        href={subItem.href}
                                        className="block rounded-md px-2.5 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-600"
                                      >
                                        {subItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                              {/* View All Link */}
                              <div className="col-span-4 border-t border-gray-200 pt-3 mt-2">
                                <Link
                                  href="/treatments"
                                  className="flex items-center justify-center rounded-lg bg-primary-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
                                >
                                  View All Treatments →
                                </Link>
                              </div>
                            </div>
                          ) : (
                            // Regular dropdown
                            item.submenu?.map((subItem: any) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-600"
                              >
                                {subItem.name}
                              </Link>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex h-10 items-center rounded-lg px-3.5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-600"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA Section */}
            <div className="hidden items-center gap-3 xl:flex">
              {/* Quick Contact */}
              <div className="flex flex-col items-end justify-center text-right">
                <a
                  href="tel:+971501234567"
                  className="flex items-center gap-1.5 text-sm font-semibold leading-tight text-gray-900 transition-colors hover:text-primary-600"
                >
                  <Phone className="h-4 w-4 text-primary-600" />
                  <span>+971 50 123 4567</span>
                </a>
                <span className="text-[11px] leading-tight text-gray-500">24/7 Support</span>
              </div>

              {/* WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 items-center gap-1.5 rounded-lg bg-[#25D366] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#20BD5A] hover:shadow-md"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>

              {/* Primary CTA */}
              <Button asChild className="h-10 bg-accent-500 px-4 text-sm font-medium hover:bg-accent-600">
                <Link href="/consultation">Free Consultation</Link>
              </Button>
            </div>

            {/* Mobile: WhatsApp + Menu */}
            <div className="flex items-center gap-2 lg:hidden">
              {/* Mobile WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#25D366] text-white sm:h-10 sm:w-10"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 sm:h-10 sm:w-10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Bar - Desktop Only */}
      <div className="hidden border-b border-gray-100 bg-gray-50 lg:block">
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a
                href="tel:+971501234567"
                className="flex items-center gap-2 text-gray-700 transition-colors hover:text-primary-600"
              >
                <Phone className="h-3.5 w-3.5" />
                <span className="font-medium">🇦🇪 UAE: +971 50 123 4567</span>
              </a>
              <a
                href="tel:+966501234567"
                className="flex items-center gap-2 text-gray-700 transition-colors hover:text-primary-600"
              >
                <Phone className="h-3.5 w-3.5" />
                <span className="font-medium">🇸🇦 KSA: +966 50 123 4567</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-gray-700 transition-colors hover:text-primary-600"
              >
                <Phone className="h-3.5 w-3.5" />
                <span className="font-medium">🇮🇳 India: +91 98765 43210</span>
              </a>
            </div>
            <a
              href="mailto:info@shifaalhind.com"
              className="flex items-center gap-2 text-gray-700 transition-colors hover:text-primary-600"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>info@shifaalhind.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          {/* Mobile Contact Info */}
          <div className="border-b border-gray-100 bg-gray-50 px-4 py-3">
            <div className="space-y-2.5">
              <a
                href="tel:+971501234567"
                className="flex items-center gap-2 text-sm font-medium text-gray-900"
              >
                <Phone className="h-4 w-4 text-primary-600" />
                <span>🇦🇪 +971 50 123 4567</span>
              </a>
              <a
                href="tel:+966501234567"
                className="flex items-center gap-2 text-sm font-medium text-gray-900"
              >
                <Phone className="h-4 w-4 text-primary-600" />
                <span>🇸🇦 +966 50 123 4567</span>
              </a>
              <a
                href="mailto:info@shifaalhind.com"
                className="flex items-center gap-2 text-sm font-medium text-gray-900"
              >
                <Mail className="h-4 w-4 text-primary-600" />
                <span>info@shifaalhind.com</span>
              </a>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <div className="max-h-[60vh] overflow-y-auto py-4">
            <div className="flex flex-col space-y-1 px-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setMobileTreatmentsOpen(!mobileTreatmentsOpen)}
                        className="flex h-12 w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-600"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileTreatmentsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileTreatmentsOpen && item.megaMenu && (
                        <div className="mt-2 space-y-4 pl-4">
                          {item.submenu?.map((category: any) => (
                            <div key={category.category}>
                              <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">
                                {category.category}
                              </h4>
                              <div className="space-y-1">
                                {category.items.map((subItem: any) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-600"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                          <Link
                            href="/treatments"
                            className="block mt-3 rounded-lg bg-primary-500 px-4 py-2.5 text-center text-sm font-semibold text-white"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            View All Treatments →
                          </Link>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex h-12 items-center rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile CTA Buttons */}
            <div className="mt-4 flex flex-col gap-3 border-t border-gray-100 px-4 pt-4">
              <Button asChild variant="outline" className="h-12 w-full text-base font-medium">
                <Link href="/consultation" onClick={() => setMobileMenuOpen(false)}>
                  {t('common.consultation')}
                </Link>
              </Button>
              <Button asChild className="h-12 w-full bg-accent-500 text-base font-medium hover:bg-accent-600">
                <Link href="/booking" onClick={() => setMobileMenuOpen(false)}>
                  {t('common.booking')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

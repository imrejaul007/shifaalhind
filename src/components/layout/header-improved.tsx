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
  ChevronDown,
  Heart,
  Bone,
  Eye,
  Smile,
  Baby,
  Stethoscope,
  BookOpen,
  FileText,
  HelpCircle,
  Star,
  Plane,
  Search,
  Calendar,
  MapPin,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeaderImproved() {
  const t = useTranslations();
  const locale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [countriesOpen, setCountriesOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileCountriesOpen, setMobileCountriesOpen] = useState(false);

  const navigation = [
    {
      name: 'Treatments',
      href: '/treatments',
      icon: Heart,
      hasDropdown: true,
      megaMenu: true,
      submenu: [
        {
          category: '❤️ Cardiac',
          icon: Heart,
          items: [
            { name: 'Heart Bypass Surgery', href: '/treatments/heart-surgery-india' },
            { name: 'Angioplasty & Stents', href: '/treatments/angioplasty-india' },
            { name: 'Heart Valve Replacement', href: '/treatments/heart-valve-india' },
          ]
        },
        {
          category: '🦴 Orthopedic',
          icon: Bone,
          items: [
            { name: 'Knee Replacement', href: '/treatments/knee-replacement-india' },
            { name: 'Hip Replacement', href: '/treatments/hip-replacement-india' },
            { name: 'Spine Surgery', href: '/treatments/spine-surgery-india' },
            { name: 'ACL Reconstruction', href: '/treatments/acl-reconstruction-india' },
            { name: 'Shoulder Surgery', href: '/treatments/shoulder-surgery-india' },
          ]
        },
        {
          category: '🎗️ Cancer Treatment',
          icon: Shield,
          items: [
            { name: 'Breast Cancer', href: '/treatments/breast-cancer-treatment-india' },
            { name: 'Lung Cancer', href: '/treatments/lung-cancer-treatment-india' },
            { name: 'Colon Cancer', href: '/treatments/colon-cancer-treatment-india' },
            { name: 'Prostate Cancer', href: '/treatments/prostate-cancer-treatment-india' },
            { name: 'Blood Cancer', href: '/treatments/blood-cancer-treatment-india' },
            { name: 'Cervical Cancer', href: '/treatments/cervical-cancer-treatment-india' },
          ]
        },
        {
          category: '👁️ Eye Care',
          icon: Eye,
          items: [
            { name: 'Cataract Surgery', href: '/treatments/cataract-surgery-india' },
            { name: 'LASIK Eye Surgery', href: '/treatments/lasik-eye-surgery-india' },
            { name: 'Retina Treatment', href: '/treatments/retina-treatment-india' },
          ]
        },
        {
          category: '🦷 Dental',
          icon: Smile,
          items: [
            { name: 'Dental Implants', href: '/treatments/dental-implants-india' },
            { name: 'All-on-4 Implants', href: '/treatments/all-on-4-dental-implants-india' },
            { name: 'Veneers', href: '/treatments/veneers-india' },
            { name: 'Smile Makeover', href: '/treatments/smile-makeover-india' },
          ]
        },
        {
          category: '✨ Cosmetic',
          icon: Star,
          items: [
            { name: 'Rhinoplasty', href: '/treatments/rhinoplasty-india' },
            { name: 'Hair Transplant', href: '/treatments/hair-transplant-india' },
            { name: 'Liposuction', href: '/treatments/liposuction-india' },
            { name: 'Breast Augmentation', href: '/treatments/breast-augmentation-india' },
          ]
        },
        {
          category: '⚖️ Bariatric',
          icon: Heart,
          items: [
            { name: 'Gastric Bypass', href: '/treatments/gastric-bypass-india' },
            { name: 'Gastric Sleeve', href: '/treatments/gastric-sleeve-india' },
            { name: 'Bariatric Surgery', href: '/treatments/bariatric-surgery-india' },
          ]
        },
        {
          category: '👶 Fertility',
          icon: Baby,
          items: [
            { name: 'IVF Treatment', href: '/treatments/ivf-india' },
            { name: 'ICSI Treatment', href: '/treatments/icsi-india' },
            { name: 'Egg Freezing', href: '/treatments/egg-freezing-india' },
            { name: 'PCOS Treatment', href: '/treatments/pcos-treatment-india' },
          ]
        },
        {
          category: '🏥 General Surgery',
          icon: Stethoscope,
          items: [
            { name: 'Piles Surgery', href: '/treatments/piles-surgery-india' },
            { name: 'Hernia Surgery', href: '/treatments/hernia-surgery-india' },
            { name: 'Gallbladder Surgery', href: '/treatments/gallbladder-surgery-india' },
            { name: 'Appendix Surgery', href: '/treatments/appendix-surgery-india' },
            { name: 'Thyroid Surgery', href: '/treatments/thyroid-surgery-india' },
          ]
        },
        {
          category: '🩺 Urology',
          icon: Heart,
          items: [
            { name: 'Kidney Stone', href: '/treatments/kidney-stone-treatment-india' },
            { name: 'Kidney Transplant', href: '/treatments/kidney-transplant-india' },
            { name: 'Prostate Treatment', href: '/treatments/prostate-treatment-india' },
          ]
        },
        {
          category: '👩‍⚕️ Women\'s Health',
          icon: Heart,
          items: [
            { name: 'Hysterectomy', href: '/treatments/hysterectomy-surgery-india' },
            { name: 'Fibroid Treatment', href: '/treatments/fibroid-treatment-india' },
            { name: 'Endometriosis', href: '/treatments/endometriosis-india' },
          ]
        },
        {
          category: '🧠 Neurology',
          icon: Brain,
          items: [
            { name: 'Brain Surgery', href: '/treatments/brain-surgery-india' },
            { name: 'Neurosurgery', href: '/treatments/neurosurgery-india' },
            { name: 'Epilepsy Treatment', href: '/treatments/epilepsy-india' },
          ]
        },
      ]
    },
    {
      name: 'Hospitals',
      href: '/hospitals',
      icon: Building2,
    },
    {
      name: 'Doctors',
      href: '/doctors',
      icon: UserCheck,
    },
    {
      name: 'Resources',
      href: '#',
      icon: BookOpen,
      hasDropdown: true,
      submenu: [
        { name: 'Blog & Articles', href: '/blog', icon: FileText },
        { name: 'Success Stories', href: '/case-studies', icon: Star },
        { name: 'Patient Testimonials', href: '/testimonials', icon: MessageCircle },
        { name: 'Treatment Guides', href: '/guides', icon: BookOpen },
        { name: 'FAQs', href: '/faq', icon: HelpCircle },
        { name: 'Cost Calculator', href: '/cost-calculator', icon: Calculator },
      ]
    },
    {
      name: 'For Patients',
      href: '#',
      icon: Plane,
      hasDropdown: true,
      submenu: [
        { name: '🇦🇪 UAE Patients', href: '/for-uae-patients' },
        { name: '🇸🇦 Saudi Patients', href: '/for-saudi-patients' },
        { name: '🇶🇦 Qatar Patients', href: '/for-qatar-patients' },
        { name: '🇴🇲 Oman Patients', href: '/for-oman-patients' },
        { name: '🇰🇼 Kuwait Patients', href: '/for-kuwait-patients' },
        { name: '🇧🇭 Bahrain Patients', href: '/for-bahrain-patients' },
        { name: '✈️ Visa Assistance', href: '/visa-assistance' },
        { name: '🗺️ Travel Guide', href: '/travel-guide' },
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: Info,
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: MessageSquare,
    },
  ];

  const toggleLocale = () => {
    const path = window.location.pathname;
    const newPath = locale === 'en' ? `/ar${path}` : path.replace('/ar', '');
    window.location.href = newPath || '/';
  };

  const whatsappNumber = '919876543210';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* Top Announcement Bar - Enhanced */}
      <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 text-white">
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-3 sm:gap-6">
              <div className="flex items-center gap-1.5 font-semibold">
                <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>25+ JCI Hospitals</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold">
                <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>Save 60-80%</span>
              </div>
              <div className="hidden items-center gap-1.5 font-semibold md:flex">
                <Users className="h-4 w-4" />
                <span>15,000+ Happy Patients</span>
              </div>
              <div className="hidden items-center gap-1.5 font-semibold lg:flex">
                <Star className="h-4 w-4 fill-white" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
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
      </div>

      {/* Main Header - Enhanced */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between gap-4 sm:h-20">
            {/* Logo - Enhanced */}
            <Link href="/" className="flex-shrink-0">
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold leading-tight text-primary-600 sm:text-2xl lg:text-3xl">
                  Shifa AlHind
                </span>
                <span className="text-[10px] font-medium text-gray-500 sm:text-xs">
                  🏆 India&apos;s #1 Medical Tourism
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Enhanced */}
            <nav className="hidden items-center gap-1 lg:flex" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="group"
                      onMouseEnter={() => {
                        if (item.name === 'Treatments') setTreatmentsOpen(true);
                        if (item.name === 'Resources') setResourcesOpen(true);
                        if (item.name === 'For Patients') setCountriesOpen(true);
                      }}
                      onMouseLeave={() => {
                        if (item.name === 'Treatments') setTreatmentsOpen(false);
                        if (item.name === 'Resources') setResourcesOpen(false);
                        if (item.name === 'For Patients') setCountriesOpen(false);
                      }}
                    >
                      <button className="flex h-10 items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-semibold text-gray-700 transition-all hover:bg-primary-50 hover:text-primary-600">
                        {item.icon && <item.icon className="h-4 w-4" />}
                        {item.name}
                        <ChevronDown className="h-3.5 w-3.5" />
                      </button>

                      {/* Mega Menu for Treatments */}
                      {item.megaMenu && item.name === 'Treatments' && treatmentsOpen && (
                        <div className="absolute left-0 top-full z-50 mt-1.5 w-[1100px] rounded-xl border border-gray-200 bg-white p-6 shadow-2xl">
                          <div className="mb-4 flex items-center justify-between border-b border-gray-200 pb-3">
                            <h3 className="text-lg font-bold text-gray-900">
                              Browse 100+ Treatments
                            </h3>
                            <Link
                              href="/treatments"
                              className="text-sm font-semibold text-primary-600 hover:text-primary-700"
                            >
                              View All →
                            </Link>
                          </div>
                          <div className="grid grid-cols-4 gap-5">
                            {item.submenu?.map((category: any) => (
                              <div key={category.category}>
                                <h4 className="mb-2.5 flex items-center gap-1.5 text-xs font-bold text-gray-900">
                                  <span className="text-base">{category.category.split(' ')[0]}</span>
                                  <span>{category.category.split(' ').slice(1).join(' ')}</span>
                                </h4>
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
                          </div>
                          <div className="mt-4 border-t border-gray-200 pt-4">
                            <div className="grid grid-cols-3 gap-4">
                              <div className="flex items-center gap-2 rounded-lg bg-primary-50 p-3">
                                <Shield className="h-5 w-5 text-primary-600" />
                                <div>
                                  <div className="text-sm font-bold text-gray-900">60-80% Savings</div>
                                  <div className="text-xs text-gray-600">vs USA/UK/UAE</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3">
                                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                                <div>
                                  <div className="text-sm font-bold text-gray-900">98% Success</div>
                                  <div className="text-xs text-gray-600">Treatment Success Rate</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3">
                                <Award className="h-5 w-5 text-blue-600" />
                                <div>
                                  <div className="text-sm font-bold text-gray-900">JCI Certified</div>
                                  <div className="text-xs text-gray-600">World-Class Care</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Regular Dropdown for Resources & Countries */}
                      {!item.megaMenu && ((item.name === 'Resources' && resourcesOpen) || (item.name === 'For Patients' && countriesOpen)) && (
                        <div className="absolute left-0 top-full z-50 mt-1.5 w-64 rounded-lg border border-gray-100 bg-white py-2 shadow-xl">
                          {item.submenu?.map((subItem: any) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-600"
                            >
                              {subItem.icon && <subItem.icon className="h-4 w-4" />}
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex h-10 items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-semibold text-gray-700 transition-all hover:bg-primary-50 hover:text-primary-600"
                    >
                      {item.icon && <item.icon className="h-4 w-4" />}
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA Section - Enhanced */}
            <div className="hidden items-center gap-3 xl:flex">
              {/* Emergency Badge */}
              <div className="flex flex-col items-end justify-center text-right">
                <a
                  href="tel:+971501234567"
                  className="flex items-center gap-1.5 text-sm font-bold leading-tight text-gray-900 transition-colors hover:text-primary-600"
                >
                  <Phone className="h-4 w-4 text-primary-600" />
                  <span>+971 50 123 4567</span>
                </a>
                <span className="text-[11px] font-semibold leading-tight text-green-600">
                  ⚡ 24/7 Emergency
                </span>
              </div>

              {/* WhatsApp Button - Enhanced */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 items-center gap-1.5 rounded-lg bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#20BD5A] hover:shadow-lg"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>

              {/* Primary CTA - Enhanced */}
              <Button asChild className="h-10 bg-accent-500 px-5 text-sm font-semibold shadow-md hover:bg-accent-600 hover:shadow-lg">
                <Link href="/consultation" className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  Free Consultation
                </Link>
              </Button>
            </div>

            {/* Mobile: WhatsApp + Menu */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#25D366] text-white shadow-md"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>

              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-primary-600 text-primary-600 hover:bg-primary-50"
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

      {/* Quick Contact Bar - Desktop Only - Enhanced */}
      <div className="hidden border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white lg:block">
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a
                href="tel:+971501234567"
                className="flex items-center gap-2 font-medium text-gray-700 transition-colors hover:text-primary-600"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>🇦🇪 UAE: +971 50 123 4567</span>
              </a>
              <a
                href="tel:+966501234567"
                className="flex items-center gap-2 font-medium text-gray-700 transition-colors hover:text-primary-600"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>🇸🇦 KSA: +966 50 123 4567</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 font-medium text-gray-700 transition-colors hover:text-primary-600"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>🇮🇳 India: +91 98765 43210</span>
              </a>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="mailto:info@shifaalhind.com"
                className="flex items-center gap-2 font-medium text-gray-700 transition-colors hover:text-primary-600"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>info@shifaalhind.com</span>
              </a>
              <Link
                href="/emergency"
                className="flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-600 transition-colors hover:bg-red-100"
              >
                <span className="animate-pulse">🚨</span>
                <span>Emergency Help</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Enhanced (keeping original structure but improved) */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          {/* Mobile Contact Info */}
          <div className="border-b border-gray-100 bg-gradient-to-r from-primary-50 to-accent-50 px-4 py-3">
            <div className="space-y-2.5">
              <a
                href="tel:+971501234567"
                className="flex items-center gap-2 text-sm font-semibold text-gray-900"
              >
                <Phone className="h-4 w-4 text-primary-600" />
                <span>🇦🇪 +971 50 123 4567</span>
              </a>
              <a
                href="tel:+966501234567"
                className="flex items-center gap-2 text-sm font-semibold text-gray-900"
              >
                <Phone className="h-4 w-4 text-primary-600" />
                <span>🇸🇦 +966 50 123 4567</span>
              </a>
              <a
                href="mailto:info@shifaalhind.com"
                className="flex items-center gap-2 text-sm font-semibold text-gray-900"
              >
                <Mail className="h-4 w-4 text-primary-600" />
                <span>info@shifaalhind.com</span>
              </a>
            </div>
          </div>

          {/* Mobile Navigation Links - Enhanced */}
          <div className="max-h-[60vh] overflow-y-auto py-4">
            <div className="flex flex-col space-y-1 px-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => {
                          if (item.name === 'Treatments') setMobileTreatmentsOpen(!mobileTreatmentsOpen);
                          if (item.name === 'Resources') setMobileResourcesOpen(!mobileResourcesOpen);
                          if (item.name === 'For Patients') setMobileCountriesOpen(!mobileCountriesOpen);
                        }}
                        className="flex h-12 w-full items-center justify-between rounded-lg px-4 py-3 text-base font-semibold text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-600"
                      >
                        <span className="flex items-center gap-2">
                          {item.icon && <item.icon className="h-5 w-5" />}
                          {item.name}
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            (item.name === 'Treatments' && mobileTreatmentsOpen) ||
                            (item.name === 'Resources' && mobileResourcesOpen) ||
                            (item.name === 'For Patients' && mobileCountriesOpen)
                              ? 'rotate-180'
                              : ''
                          }`}
                        />
                      </button>
                      {((item.name === 'Treatments' && mobileTreatmentsOpen) ||
                        (item.name === 'Resources' && mobileResourcesOpen) ||
                        (item.name === 'For Patients' && mobileCountriesOpen)) && (
                        <div className="mt-2 space-y-3 pl-4">
                          {item.megaMenu ? (
                            item.submenu?.map((category: any) => (
                              <div key={category.category}>
                                <h4 className="mb-2 text-xs font-bold uppercase text-gray-500">
                                  {category.category}
                                </h4>
                                <div className="space-y-1">
                                  {category.items.map((subItem: any) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                      className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-600"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))
                          ) : (
                            item.submenu?.map((subItem: any) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-600"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.icon && <subItem.icon className="h-4 w-4" />}
                                {subItem.name}
                              </Link>
                            ))
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex h-12 items-center gap-2 rounded-lg px-4 py-3 text-base font-semibold text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.icon && <item.icon className="h-5 w-5" />}
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile CTA Buttons */}
            <div className="mt-4 flex flex-col gap-3 border-t border-gray-100 px-4 pt-4">
              <Button asChild variant="outline" className="h-12 w-full text-base font-semibold">
                <Link href="/consultation" onClick={() => setMobileMenuOpen(false)}>
                  <Calendar className="mr-2 h-5 w-5" />
                  Free Consultation
                </Link>
              </Button>
              <Button asChild className="h-12 w-full bg-accent-500 text-base font-semibold hover:bg-accent-600">
                <Link href="/booking" onClick={() => setMobileMenuOpen(false)}>
                  <MapPin className="mr-2 h-5 w-5" />
                  Book Treatment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// Missing icon imports - add these at the top
import { Building2, UserCheck, Info, MessageSquare, Brain, Calculator } from 'lucide-react';

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Shield,
  Star,
  CheckCircle,
  Heart,
  Send,
  Globe,
  Building2,
  Stethoscope,
  Users,
  Calendar,
  FileText,
  HelpCircle,
  BookOpen,
  Plane,
  CreditCard,
  Lock,
} from 'lucide-react';
import { gccCountries } from '@/config/gcc-countries';
import { Button } from '@/components/ui/button';

export function FooterImproved() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/shifaalhind', color: 'hover:bg-blue-600' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/shifaalhind', color: 'hover:bg-sky-500' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/shifaalhind', color: 'hover:bg-pink-600' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/shifaalhind', color: 'hover:bg-blue-700' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@shifaalhind', color: 'hover:bg-red-600' },
  ];

  const companyLinks = [
    { name: t('company.aboutUs'), href: '/about', icon: Building2 },
    { name: t('company.whyChooseUs'), href: '/why-choose-us', icon: Star },
    { name: t('company.ourTeam'), href: '/team', icon: Users },
    { name: t('company.successStories'), href: '/case-studies', icon: Heart },
    { name: t('company.patientTestimonials'), href: '/testimonials', icon: Star },
    { name: t('company.accreditations'), href: '/accreditations', icon: Award },
    { name: t('company.career'), href: '/career', icon: Users },
    { name: t('company.pressMedia'), href: '/press', icon: FileText },
  ];

  const servicesLinks = [
    { name: t('services.allTreatments'), href: '/treatments', icon: Stethoscope },
    { name: t('services.cardiacCare'), href: '/treatments/cardiac', icon: Heart },
    { name: t('services.orthopedic'), href: '/treatments/orthopedic', icon: Stethoscope },
    { name: t('services.cancerTreatment'), href: '/treatments/cancer', icon: Shield },
    { name: t('services.cosmeticSurgery'), href: '/treatments/cosmetic', icon: Star },
    { name: t('services.dentalCare'), href: '/treatments/dental', icon: Smile },
    { name: t('services.eyeCare'), href: '/treatments/eye', icon: Eye },
    { name: t('services.fertilityTreatment'), href: '/treatments/fertility', icon: Baby },
  ];

  const resourcesLinks = [
    { name: t('resources.blogArticles'), href: '/blog', icon: FileText },
    { name: t('resources.treatmentGuides'), href: '/guides', icon: BookOpen },
    { name: t('resources.costCalculator'), href: '/cost-calculator', icon: Calculator },
    { name: t('resources.faqs'), href: '/faq', icon: HelpCircle },
    { name: t('resources.medicalGlossary'), href: '/glossary', icon: BookOpen },
    { name: t('resources.insuranceGuide'), href: '/insurance', icon: Shield },
    { name: t('resources.travelTips'), href: '/travel-tips', icon: Plane },
    { name: t('resources.recoveryGuide'), href: '/recovery', icon: Heart },
  ];

  const forPatientsLinks = [
    { name: t('forPatients.visaAssistance'), href: '/visa-assistance', icon: Plane },
    { name: t('forPatients.travelArrangements'), href: '/travel', icon: Plane },
    { name: t('forPatients.accommodation'), href: '/accommodation', icon: Building2 },
    { name: t('forPatients.languageSupport'), href: '/language-support', icon: Globe },
    { name: t('forPatients.airportPickup'), href: '/airport-pickup', icon: Plane },
    { name: t('forPatients.medicalRecords'), href: '/medical-records', icon: FileText },
    { name: t('forPatients.secondOpinion'), href: '/second-opinion', icon: Stethoscope },
    { name: t('forPatients.paymentOptions'), href: '/payment', icon: CreditCard },
  ];

  const topHospitals = [
    { name: 'Apollo Hospitals', href: '/hospitals/apollo' },
    { name: 'Fortis Healthcare', href: '/hospitals/fortis' },
    { name: 'Medanta', href: '/hospitals/medanta' },
    { name: 'Max Healthcare', href: '/hospitals/max' },
    { name: 'Narayana Health', href: '/hospitals/narayana' },
    { name: 'Manipal Hospitals', href: '/hospitals/manipal' },
  ];

  const trustBadges = [
    { icon: Award, text: t('trustBadges.jciAccredited'), color: 'text-yellow-600' },
    { icon: Shield, text: t('trustBadges.safeSecure'), color: 'text-green-600' },
    { icon: Users, text: t('trustBadges.patients'), color: 'text-blue-600' },
    { icon: Star, text: t('trustBadges.rating'), color: 'text-orange-600' },
  ];

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/v1/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          locale,
          source: 'footer',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: 'success', text: data.message || 'Successfully subscribed!' });
        setEmail('');
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to subscribe' });
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setMessage({ type: 'error', text: 'Failed to subscribe. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="border-t-4 border-primary-500 bg-gradient-to-br from-gray-50 to-gray-100" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* Newsletter Section - Enhanced */}
      <div className="border-b border-gray-200 bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <Send className="h-4 w-4" />
              <span className="text-sm font-semibold">Stay Updated</span>
            </div>
            <h3 className="mb-3 font-serif text-3xl font-bold">
              Get Health Tips & Treatment Updates
            </h3>
            <p className="mb-6 text-lg text-primary-100">
              Subscribe for free consultation offers, medical travel tips, and success stories
            </p>
            <form onSubmit={handleNewsletterSubmit} className="mx-auto flex max-w-xl gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                disabled={loading}
                className="flex-1 rounded-lg border-2 border-white/20 bg-white/10 px-6 py-3.5 text-white placeholder-white/70 backdrop-blur-sm focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 disabled:cursor-not-allowed disabled:bg-white/5"
              />
              <Button
                type="submit"
                disabled={loading}
                className="h-auto bg-white px-8 py-3.5 font-semibold text-primary-700 hover:bg-gray-100 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
            {message && (
              <p
                className={`mt-3 text-sm font-medium ${
                  message.type === 'success' ? 'text-green-200' : 'text-red-200'
                }`}
              >
                {message.text}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Company Info - Span 2 columns */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-block">
              <h3 className="font-serif text-3xl font-bold text-primary-600">Shifa AlHind</h3>
              <p className="text-sm font-semibold text-gray-600">India&apos;s #1 Medical Tourism</p>
            </Link>
            <p className="mb-4 text-sm leading-relaxed text-gray-600">
              Connecting international patients with India&apos;s top JCI-accredited hospitals since 2013.
              Experience world-class healthcare at 60-80% lower costs with our comprehensive medical tourism services.
            </p>

            {/* Trust Badges */}
            <div className="mb-6 grid grid-cols-2 gap-3">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-lg bg-white p-3 shadow-sm"
                >
                  <badge.icon className={`h-5 w-5 ${badge.color}`} />
                  <span className="text-xs font-bold text-gray-900">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mb-4">
              <p className="mb-3 text-sm font-bold text-gray-900">Follow Us:</p>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm transition-all hover:shadow-md ${social.color} hover:text-white`}
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* 24/7 Support Badge */}
            <div className="inline-flex items-center gap-2 rounded-lg bg-green-50 px-4 py-2.5 shadow-sm">
              <Clock className="h-5 w-5 text-green-600" />
              <div>
                <div className="text-sm font-bold text-gray-900">24/7 Support</div>
                <div className="text-xs text-gray-600">Emergency Assistance Available</div>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 font-bold text-gray-900">
              <Building2 className="h-5 w-5 text-primary-600" />
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-primary-600"
                  >
                    <link.icon className="h-3.5 w-3.5" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 font-bold text-gray-900">
              <Stethoscope className="h-5 w-5 text-primary-600" />
              Services
            </h4>
            <ul className="space-y-2.5">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-primary-600"
                  >
                    <link.icon className="h-3.5 w-3.5" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 font-bold text-gray-900">
              <BookOpen className="h-5 w-5 text-primary-600" />
              Resources
            </h4>
            <ul className="space-y-2.5">
              {resourcesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-primary-600"
                  >
                    <link.icon className="h-3.5 w-3.5" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Patients */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 font-bold text-gray-900">
              <Users className="h-5 w-5 text-primary-600" />
              For Patients
            </h4>
            <ul className="space-y-2.5">
              {forPatientsLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-primary-600"
                  >
                    <link.icon className="h-3.5 w-3.5" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Countries Section */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <h4 className="mb-4 flex items-center gap-2 font-bold text-gray-900">
            <Plane className="h-5 w-5 text-primary-600" />
            We Serve Patients From:
          </h4>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {gccCountries.map((country) => (
              <Link
                key={country.slug}
                href={`/for-${country.slug}-patients`}
                className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:border-primary-500 hover:shadow-md"
              >
                <span className="text-lg">{country.flag}</span>
                <span>{country.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Top Hospitals Section */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <h4 className="mb-4 flex items-center gap-2 font-bold text-gray-900">
            <Award className="h-5 w-5 text-primary-600" />
            Our Partner Hospitals:
          </h4>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {topHospitals.map((hospital) => (
              <Link
                key={hospital.name}
                href={hospital.href}
                className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-center text-sm font-semibold text-gray-700 shadow-sm transition-all hover:border-primary-500 hover:shadow-md"
              >
                {hospital.name}
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link
              href="/hospitals"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 hover:text-primary-700"
            >
              View All 50+ Partner Hospitals
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Emergency Contact */}
            <div className="rounded-xl border-2 border-red-200 bg-red-50 p-6">
              <div className="mb-3 flex items-center gap-2">
                <div className="rounded-full bg-red-600 p-2">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <h5 className="font-bold text-gray-900">Emergency 24/7</h5>
              </div>
              <a href="tel:+971501234567" className="mb-1 block text-lg font-bold text-red-600">
                +971 50 123 4567
              </a>
              <p className="text-sm text-gray-600">UAE Hotline</p>
            </div>

            {/* Email Contact */}
            <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
              <div className="mb-3 flex items-center gap-2">
                <div className="rounded-full bg-blue-600 p-2">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <h5 className="font-bold text-gray-900">Email Us</h5>
              </div>
              <a
                href="mailto:info@shifaalhind.com"
                className="mb-1 block text-lg font-bold text-blue-600"
              >
                info@shifaalhind.com
              </a>
              <p className="text-sm text-gray-600">Response within 2 hours</p>
            </div>

            {/* WhatsApp Contact */}
            <div className="rounded-xl border-2 border-green-200 bg-green-50 p-6">
              <div className="mb-3 flex items-center gap-2">
                <div className="rounded-full bg-green-600 p-2">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <h5 className="font-bold text-gray-900">WhatsApp</h5>
              </div>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-1 block text-lg font-bold text-green-600"
              >
                +91 98765 43210
              </a>
              <p className="text-sm text-gray-600">Instant messaging</p>
            </div>
          </div>
        </div>

        {/* Payment & Security Badges */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-sm">
              <Lock className="h-5 w-5 text-green-600" />
              <span className="text-sm font-bold text-gray-900">SSL Secured</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-sm">
              <CreditCard className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-bold text-gray-900">Multiple Payment Options</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-sm">
              <Shield className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-bold text-gray-900">HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-sm">
              <Award className="h-5 w-5 text-yellow-600" />
              <span className="text-sm font-bold text-gray-900">ISO Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/privacy" className="font-medium text-gray-600 hover:text-primary-600">
                Privacy Policy
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/terms" className="font-medium text-gray-600 hover:text-primary-600">
                Terms & Conditions
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/refunds" className="font-medium text-gray-600 hover:text-primary-600">
                Refund Policy
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/disclaimer" className="font-medium text-gray-600 hover:text-primary-600">
                Medical Disclaimer
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/sitemap" className="font-medium text-gray-600 hover:text-primary-600">
                Sitemap
              </Link>
            </div>
            <p className="text-sm font-medium text-gray-600">
              © {new Date().getFullYear()} Shifa AlHind. All rights reserved.
            </p>
          </div>
          <div className="mt-4 text-center text-xs text-gray-500">
            <p>
              Medical tourism facilitator connecting patients with JCI-accredited hospitals in India.
              Individual results may vary. Consult qualified medical professionals for personalized advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Missing imports - add these at the top
import { MessageCircle, Smile, Eye, Baby, ChevronRight, Calculator } from 'lucide-react';

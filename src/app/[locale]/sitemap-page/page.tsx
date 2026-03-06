export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generateSEOMetadata({
    title_en: 'Sitemap - Shifa AlHind',
    title_ar: 'خريطة الموقع - شفاء الهند',
    description_en: 'Browse all pages on Shifa AlHind - medical treatments, hospitals, doctors, and resources for medical tourism in India.',
    description_ar: 'تصفح جميع صفحات شفاء الهند - العلاجات الطبية والمستشفيات والأطباء والموارد للسياحة العلاجية في الهند.',
    locale,
    path: '/sitemap-page',
  });
}

const siteLinks = {
  en: {
    title: 'Sitemap',
    subtitle: 'Browse all pages on our website',
    sections: [
      {
        title: 'Main Pages',
        links: [
          { name: 'Home', href: '/' },
          { name: 'About Us', href: '/about' },
          { name: 'Contact Us', href: '/contact' },
          { name: 'Book Treatment', href: '/booking' },
          { name: 'Free Consultation', href: '/consultation' },
          { name: 'Services', href: '/services' },
        ],
      },
      {
        title: 'Medical Services',
        links: [
          { name: 'All Treatments', href: '/treatments' },
          { name: 'Hospitals', href: '/hospitals' },
          { name: 'Doctors', href: '/doctors' },
          { name: 'Medical Packages', href: '/packages' },
          { name: 'Medical Tourism', href: '/medical-tourism' },
          { name: 'Accommodation', href: '/accommodation' },
        ],
      },
      {
        title: 'For GCC Patients',
        links: [
          { name: 'UAE Patients', href: '/for-uae-patients' },
          { name: 'Saudi Patients', href: '/for-saudi-patients' },
          { name: 'Qatar Patients', href: '/for-qatar-patients' },
          { name: 'Oman Patients', href: '/for-oman-patients' },
          { name: 'Kuwait Patients', href: '/for-kuwait-patients' },
          { name: 'Bahrain Patients', href: '/for-bahrain-patients' },
          { name: 'Visa Assistance', href: '/visa-assistance' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { name: 'Blog', href: '/blog' },
          { name: 'Case Studies', href: '/case-studies' },
          { name: 'Success Stories', href: '/stories' },
          { name: 'FAQs', href: '/faq' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { name: 'Privacy Policy', href: '/privacy' },
          { name: 'Terms & Conditions', href: '/terms' },
          { name: 'Refund Policy', href: '/refunds' },
          { name: 'Disclaimer', href: '/disclaimer' },
        ],
      },
    ],
  },
  ar: {
    title: 'خريطة الموقع',
    subtitle: 'تصفح جميع صفحات موقعنا',
    sections: [
      {
        title: 'الصفحات الرئيسية',
        links: [
          { name: 'الرئيسية', href: '/' },
          { name: 'من نحن', href: '/about' },
          { name: 'اتصل بنا', href: '/contact' },
          { name: 'احجز علاجك', href: '/booking' },
          { name: 'استشارة مجانية', href: '/consultation' },
          { name: 'الخدمات', href: '/services' },
        ],
      },
      {
        title: 'الخدمات الطبية',
        links: [
          { name: 'جميع العلاجات', href: '/treatments' },
          { name: 'المستشفيات', href: '/hospitals' },
          { name: 'الأطباء', href: '/doctors' },
          { name: 'الباقات الطبية', href: '/packages' },
          { name: 'السياحة العلاجية', href: '/medical-tourism' },
          { name: 'الإقامة', href: '/accommodation' },
        ],
      },
      {
        title: 'لمرضى دول الخليج',
        links: [
          { name: 'مرضى الإمارات', href: '/for-uae-patients' },
          { name: 'مرضى السعودية', href: '/for-saudi-patients' },
          { name: 'مرضى قطر', href: '/for-qatar-patients' },
          { name: 'مرضى عمان', href: '/for-oman-patients' },
          { name: 'مرضى الكويت', href: '/for-kuwait-patients' },
          { name: 'مرضى البحرين', href: '/for-bahrain-patients' },
          { name: 'المساعدة في التأشيرة', href: '/visa-assistance' },
        ],
      },
      {
        title: 'الموارد',
        links: [
          { name: 'المدونة', href: '/blog' },
          { name: 'دراسات الحالة', href: '/case-studies' },
          { name: 'قصص النجاح', href: '/stories' },
          { name: 'الأسئلة الشائعة', href: '/faq' },
        ],
      },
      {
        title: 'القانونية',
        links: [
          { name: 'سياسة الخصوصية', href: '/privacy' },
          { name: 'الشروط والأحكام', href: '/terms' },
          { name: 'سياسة الاسترداد', href: '/refunds' },
          { name: 'إخلاء المسؤولية', href: '/disclaimer' },
        ],
      },
    ],
  },
};

export default async function SitemapPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safeLocale = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  const c = siteLinks[safeLocale];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold">{c.title}</h1>
          <p className="text-primary-100">{c.subtitle}</p>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {c.sections.map((section, index) => (
            <div key={index} className="rounded-xl bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-bold text-gray-900 border-b border-gray-200 pb-2">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-primary-600 hover:text-primary-800 hover:underline text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

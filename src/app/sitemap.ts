import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://shifaalhind.onrender.com';

  // Static pages for both locales
  const locales = ['en', 'ar'];
  const staticPages = [
    '',
    '/about',
    '/medical-tourism',
    '/treatments',
    '/hospitals',
    '/doctors',
    '/packages',
    '/stories',
    '/services',
    '/consultation',
    '/faq',
    '/contact',
    '/blog',
    '/privacy',
    '/terms',
    '/refunds',
    '/accommodation',
    '/visa-assistance',
    '/for-uae-patients',
    '/for-saudi-patients',
    '/for-qatar-patients',
    '/for-oman-patients',
    '/for-kuwait-patients',
    '/for-bahrain-patients',
    '/cost-comparison/uae',
    '/cost-comparison/saudi',
    '/cost-comparison/qatar',
    '/cost-comparison/oman',
    '/cost-comparison/kuwait',
    '/cost-comparison/bahrain',
    '/blog/qatar-to-india-medical-tourism',
    '/blog/oman-to-india-medical-tourism',
    '/blog/kuwait-to-india-medical-tourism',
    '/blog/bahrain-to-india-medical-tourism',
    '/blog/dubai-to-india-medical-tourism',
    '/blog/riyadh-to-india-healthcare',
    '/blog/medical-tourism-india-uae-patients-guide',
    '/blog/heart-surgery-cost-comparison-india-vs-world',
    '/blog/cancer-treatment-cost-india-vs-world',
    '/blog/knee-replacement-cost-india-vs-world',
    '/blog/ivf-fertility-treatment-india-complete-guide',
    '/blog/dental-tourism-india-complete-guide',
    '/blog/medical-visa-india-complete-guide',
    '/blog/best-hospitals-delhi-medical-tourism',
    '/blog/best-hospitals-mumbai-medical-tourism',
    '/blog/best-hospitals-bangalore-medical-tourism',
    '/blog/best-hospitals-chennai-medical-tourism',
    '/blog/bariatric-surgery-india-cost-guide',
    '/blog/cosmetic-surgery-cost-india',
    '/blog/bone-marrow-transplant-india-guide',
    '/blog/kidney-transplant-cost-india-guide',
    '/blog/liver-transplant-india-cost-guide',
    '/blog/diabetes-treatment-india-guide',
    '/blog/neurosurgery-india-cost-hospitals',
    '/blog/spine-surgery-india-cost-hospitals',
    '/blog/medical-tourism-insurance-india',
    '/blog/how-to-choose-best-hospital-india',
    '/blog/best-time-visit-india-medical-tourism',
  ];

  // 42 static treatment pages (hardcoded, not in database)
  const staticTreatmentSlugs = [
    'heart-surgery-india', 'knee-replacement-india', 'hip-replacement-india',
    'bariatric-surgery-india', 'blood-cancer-treatment-india', 'bone-marrow-transplant-india',
    'cancer-treatment-india', 'cosmetic-surgery-india', 'diabetes-treatment-india',
    'ivf-india', 'kidney-transplant-india', 'liver-transplant-india',
    'neurosurgery-india', 'spine-surgery-india', 'appendix-surgery-india',
    'acl-reconstruction-india', 'all-on-4-dental-implants-india', 'angioplasty-india',
    'breast-augmentation-india', 'breast-cancer-treatment-india', 'cataract-surgery-india',
    'cervical-cancer-treatment-india', 'colon-cancer-treatment-india', 'dental-implants-india',
    'egg-freezing-india', 'gallbladder-surgery-india', 'gastric-bypass-india',
    'hair-transplant-india', 'hernia-surgery-india', 'hysterectomy-surgery-india',
    'kidney-stone-treatment-india', 'lasik-eye-surgery-india', 'liposuction-india',
    'lung-cancer-treatment-india', 'pcos-treatment-india', 'piles-surgery-india',
    'prostate-cancer-treatment-india', 'rhinoplasty-india', 'shoulder-surgery-india',
    'thyroid-surgery-india', 'varicose-veins-treatment-india', 'veneers-india',
  ];

  const staticTreatmentUrls: MetadataRoute.Sitemap = staticTreatmentSlugs.flatMap((slug) =>
    locales.map((locale) => ({
      url: `${baseUrl}${locale === 'en' ? '' : '/ar'}/treatments/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }))
  );

  const staticUrls: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of staticPages) {
      staticUrls.push({
        url: `${baseUrl}${locale === 'en' ? '' : '/ar'}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1.0 : 0.8,
      });
    }
  }

  // Dynamic pages from database
  try {
    // Treatments
    const treatments = await prisma.treatment.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
    });

    const treatmentUrls: MetadataRoute.Sitemap = treatments.flatMap((treatment) =>
      locales.map((locale) => ({
        url: `${baseUrl}${locale === 'en' ? '' : '/ar'}/treatments/${treatment.slug}`,
        lastModified: treatment.updatedAt,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
    );

    // Hospitals
    const hospitals = await prisma.hospital.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
    });

    const hospitalUrls: MetadataRoute.Sitemap = hospitals.flatMap((hospital) =>
      locales.map((locale) => ({
        url: `${baseUrl}${locale === 'en' ? '' : '/ar'}/hospitals/${hospital.slug}`,
        lastModified: hospital.updatedAt,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
    );

    // Doctors
    const doctors = await prisma.doctor.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
    });

    const doctorUrls: MetadataRoute.Sitemap = doctors.flatMap((doctor) =>
      locales.map((locale) => ({
        url: `${baseUrl}${locale === 'en' ? '' : '/ar'}/doctors/${doctor.slug}`,
        lastModified: doctor.updatedAt,
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      }))
    );

    // Packages
    const packages = await prisma.package.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
    });

    const packageUrls: MetadataRoute.Sitemap = packages.flatMap((pkg) =>
      locales.map((locale) => ({
        url: `${baseUrl}${locale === 'en' ? '' : '/ar'}/packages/${pkg.slug}`,
        lastModified: pkg.updatedAt,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
    );

    // Cities
    const cities = await prisma.city.findMany({
      where: { published: true },
      select: {
        slug: true,
        updatedAt: true,
        country: {
          select: { slug: true },
        },
      },
    });

    const cityUrls: MetadataRoute.Sitemap = cities.flatMap((city) =>
      locales.map((locale) => ({
        url: `${baseUrl}${locale === 'en' ? '' : '/ar'}/medical-tourism/${city.country.slug}/${city.slug}`,
        lastModified: city.updatedAt,
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      }))
    );

    // Articles
    const articles = await prisma.article.findMany({
      where: { published: true },
      select: {
        slug: true,
        updatedAt: true,
        city: {
          select: {
            slug: true,
            country: { select: { slug: true } },
          },
        },
        cityTreatment: {
          select: {
            treatment: { select: { slug: true } },
          },
        },
      },
    });

    const articleUrls: MetadataRoute.Sitemap = articles.flatMap((article) =>
      locales.map((locale) => ({
        url: `${baseUrl}${locale === 'en' ? '' : '/ar'}/blog/${article.city.country.slug}/${article.city.slug}/${article.cityTreatment.treatment.slug}/${article.slug}`,
        lastModified: article.updatedAt,
        changeFrequency: 'monthly' as const,
        priority: 0.5,
      }))
    );

    // City-treatment pages (29 cities x 14 treatments)
    const gccCities = [
      'dubai', 'abu-dhabi', 'sharjah', 'ajman', 'fujairah', 'ras-al-khaimah', 'al-ain',
      'riyadh', 'jeddah', 'dammam', 'khobar', 'mecca', 'medina', 'taif', 'tabuk',
      'doha', 'al-wakrah', 'al-khor',
      'muscat', 'sohar', 'salalah', 'nizwa',
      'kuwait-city', 'hawalli', 'salmiya', 'farwaniya',
      'manama', 'muharraq', 'riffa',
    ];
    const treatmentSlugsForCities = [
      'heart-surgery', 'knee-replacement', 'hip-replacement', 'ivf',
      'dental-implants', 'hair-transplant', 'cataract-surgery', 'cancer-treatment',
      'cosmetic-surgery', 'bariatric-surgery', 'organ-transplant', 'neurosurgery',
      'ophthalmology', 'ayurveda-wellness',
    ];

    const cityTreatmentUrls: MetadataRoute.Sitemap = gccCities.flatMap((city) =>
      treatmentSlugsForCities.flatMap((treatment) =>
        locales.map((locale) => ({
          url: `${baseUrl}${locale === 'en' ? '' : '/ar'}/treatments-from/${city}/${treatment}`,
          lastModified: new Date(),
          changeFrequency: 'weekly' as const,
          priority: 0.8,
        }))
      )
    );

    // City hub pages (29 cities)
    const cityHubUrls: MetadataRoute.Sitemap = gccCities.flatMap((city) =>
      locales.map((locale) => ({
        url: `${baseUrl}${locale === 'en' ? '' : '/ar'}/treatments-from/${city}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.85,
      }))
    );

    // Specialist pages (10 specialties)
    const specialties = [
      'cardiologists', 'oncologists', 'orthopedic-surgeons', 'neurosurgeons',
      'ivf-specialists', 'cosmetic-surgeons', 'ophthalmologists', 'dentists',
      'bariatric-surgeons', 'transplant-surgeons',
    ];
    const specialistUrls: MetadataRoute.Sitemap = specialties.flatMap((specialty) =>
      locales.map((locale) => ({
        url: `${baseUrl}${locale === 'en' ? '' : '/ar'}/specialists/${specialty}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }))
    );

    // Combine all URLs
    return [
      ...staticUrls,
      ...staticTreatmentUrls,
      ...treatmentUrls,
      ...hospitalUrls,
      ...doctorUrls,
      ...packageUrls,
      ...cityUrls,
      ...articleUrls,
      ...cityTreatmentUrls,
      ...cityHubUrls,
      ...specialistUrls,
    ];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return static URLs if database query fails
    return staticUrls;
  }
}

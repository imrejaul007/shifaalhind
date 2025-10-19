import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create admin user
  const hashedPassword = await bcrypt.hash('DemoPass123!', 10);
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@shifaalhind.com' },
    update: {},
    create: {
      email: 'admin@shifaalhind.com',
      name: 'Admin User',
      password: hashedPassword,
      role: 'ADMIN',
      locale: 'en',
    },
  });
  console.log('✅ Created admin user:', adminUser.email);

  // Create GCC Countries
  const countries = [
    {
      slug: 'united-arab-emirates',
      name_en: 'United Arab Emirates',
      name_ar: 'الإمارات العربية المتحدة',
      code: 'AE',
      phonePrefix: '+971',
      currency: 'AED',
      seoTitle_en: 'Medical Tourism from UAE to India | Shifa AlHind',
      seoTitle_ar: 'السياحة العلاجية من الإمارات إلى الهند',
      seoDesc_en:
        'Premium medical tourism services for UAE residents. World-class treatments in India at affordable costs.',
      seoDesc_ar: 'خدمات سياحة علاجية متميزة لسكان الإمارات. علاجات عالمية المستوى في الهند بأسعار معقولة.',
      published: true,
    },
    {
      slug: 'saudi-arabia',
      name_en: 'Saudi Arabia',
      name_ar: 'المملكة العربية السعودية',
      code: 'SA',
      phonePrefix: '+966',
      currency: 'SAR',
      seoTitle_en: 'Medical Tourism from Saudi Arabia to India | Shifa AlHind',
      seoTitle_ar: 'السياحة العلاجية من السعودية إلى الهند',
      seoDesc_en:
        'Premium medical tourism services for Saudi residents. World-class treatments in India at affordable costs.',
      seoDesc_ar: 'خدمات سياحة علاجية متميزة لسكان السعودية. علاجات عالمية المستوى في الهند بأسعار معقولة.',
      published: true,
    },
    {
      slug: 'qatar',
      name_en: 'Qatar',
      name_ar: 'قطر',
      code: 'QA',
      phonePrefix: '+974',
      currency: 'QAR',
      seoTitle_en: 'Medical Tourism from Qatar to India | Shifa AlHind',
      seoTitle_ar: 'السياحة العلاجية من قطر إلى الهند',
      seoDesc_en:
        'Premium medical tourism services for Qatar residents. World-class treatments in India at affordable costs.',
      seoDesc_ar: 'خدمات سياحة علاجية متميزة لسكان قطر. علاجات عالمية المستوى في الهند بأسعار معقولة.',
      published: true,
    },
  ];

  for (const country of countries) {
    await prisma.country.upsert({
      where: { slug: country.slug },
      update: {},
      create: country,
    });
    console.log(`✅ Created country: ${country.name_en}`);
  }

  // Create Cities
  const cities = [
    {
      slug: 'dubai',
      name_en: 'Dubai',
      name_ar: 'دبي',
      countrySlug: 'united-arab-emirates',
      timezone: 'Asia/Dubai',
      latitude: 25.2048,
      longitude: 55.2708,
      seoTitle_en: 'Medical Tourism from Dubai to India | Affordable Healthcare',
      seoTitle_ar: 'السياحة العلاجية من دبي إلى الهند',
      seoDesc_en:
        'Dubai residents: Get world-class medical treatments in India. Heart surgery, orthopedics, fertility, and more at 60-80% lower costs.',
      seoDesc_ar: 'سكان دبي: احصلوا على علاجات طبية عالمية المستوى في الهند بتكلفة أقل بنسبة 60-80%.',
      intro_en:
        'Dubai residents seeking world-class medical care at affordable prices choose India as their preferred destination. With JCI-accredited hospitals, experienced doctors, and comprehensive medical tourism support, we make your healthcare journey seamless.',
      intro_ar:
        'سكان دبي الباحثون عن رعاية طبية عالمية المستوى بأسعار معقولة يختارون الهند كوجهة مفضلة لهم.',
      published: true,
      priority: 90,
    },
    {
      slug: 'riyadh',
      name_en: 'Riyadh',
      name_ar: 'الرياض',
      countrySlug: 'saudi-arabia',
      timezone: 'Asia/Riyadh',
      latitude: 24.7136,
      longitude: 46.6753,
      seoTitle_en: 'Medical Tourism from Riyadh to India | Premium Healthcare',
      seoTitle_ar: 'السياحة العلاجية من الرياض إلى الهند',
      seoDesc_en:
        'Riyadh residents: Access premium medical treatments in India. Cardiac care, joint replacement, cancer treatment at world-class facilities.',
      seoDesc_ar: 'سكان الرياض: احصلوا على علاجات طبية متميزة في الهند بمرافق عالمية المستوى.',
      intro_en:
        'Riyadh residents choose India for advanced medical treatments with excellent outcomes. Our comprehensive services include treatment planning, travel arrangements, and Arabic-speaking support throughout your journey.',
      intro_ar:
        'سكان الرياض يختارون الهند للعلاجات الطبية المتقدمة مع نتائج ممتازة.',
      published: true,
      priority: 85,
    },
    {
      slug: 'doha',
      name_en: 'Doha',
      name_ar: 'الدوحة',
      countrySlug: 'qatar',
      timezone: 'Asia/Qatar',
      latitude: 25.2854,
      longitude: 51.5310,
      seoTitle_en: 'Medical Tourism from Doha to India | Quality Healthcare',
      seoTitle_ar: 'السياحة العلاجية من الدوحة إلى الهند',
      seoDesc_en:
        'Doha residents: Experience exceptional medical care in India. Specialized treatments with personalized care and Arabic support.',
      seoDesc_ar: 'سكان الدوحة: تجربة رعاية طبية استثنائية في الهند مع دعم باللغة العربية.',
      intro_en:
        'Doha residents benefit from India\'s advanced medical facilities and expert healthcare professionals. We provide end-to-end support for your medical journey.',
      intro_ar:
        'سكان الدوحة يستفيدون من المرافق الطبية المتقدمة في الهند.',
      published: true,
      priority: 80,
    },
  ];

  const createdCities = [];
  for (const city of cities) {
    const country = await prisma.country.findUnique({
      where: { slug: city.countrySlug },
    });
    if (country) {
      const createdCity = await prisma.city.upsert({
        where: { slug: city.slug },
        update: {},
        create: {
          slug: city.slug,
          name_en: city.name_en,
          name_ar: city.name_ar,
          countryId: country.id,
          timezone: city.timezone,
          latitude: city.latitude,
          longitude: city.longitude,
          seoTitle_en: city.seoTitle_en,
          seoTitle_ar: city.seoTitle_ar,
          seoDesc_en: city.seoDesc_en,
          seoDesc_ar: city.seoDesc_ar,
          intro_en: city.intro_en,
          intro_ar: city.intro_ar,
          published: city.published,
          priority: city.priority,
        },
      });
      createdCities.push(createdCity);
      console.log(`✅ Created city: ${city.name_en}`);
    }
  }

  // Create Treatments
  const treatments = [
    {
      slug: 'heart-surgery',
      title_en: 'Heart Surgery',
      title_ar: 'جراحة القلب',
      category_en: 'Cardiology',
      category_ar: 'أمراض القلب',
      summary_en:
        'Advanced cardiac surgery including bypass, valve replacement, and minimally invasive procedures performed by experienced cardiac surgeons.',
      summary_ar:
        'جراحة القلب المتقدمة بما في ذلك المجازة واستبدال الصمامات والإجراءات طفيفة التوغل.',
      costMin: 5000,
      costMax: 15000,
      currency: 'USD',
      duration: '10-14 days',
      recovery: '4-6 weeks',
      seoTitle_en: 'Heart Surgery in India | Cardiac Care | Bypass & Valve Surgery',
      seoTitle_ar: 'جراحة القلب في الهند | رعاية القلب',
      seoDesc_en:
        'World-class heart surgery in India at JCI-accredited hospitals. CABG, valve replacement, angioplasty by expert cardiac surgeons. Save up to 70%.',
      seoDesc_ar: 'جراحة القلب عالمية المستوى في الهند بمستشفيات معتمدة من JCI.',
      published: true,
      featured: true,
    },
    {
      slug: 'knee-replacement',
      title_en: 'Knee Replacement',
      title_ar: 'استبدال الركبة',
      category_en: 'Orthopedics',
      category_ar: 'جراحة العظام',
      summary_en:
        'Total and partial knee replacement surgery using latest implants and techniques. Robotic-assisted surgery available.',
      summary_ar:
        'جراحة استبدال الركبة الكلية والجزئية باستخدام أحدث التقنيات.',
      costMin: 4000,
      costMax: 8000,
      currency: 'USD',
      duration: '7-10 days',
      recovery: '6-8 weeks',
      seoTitle_en: 'Knee Replacement Surgery in India | Total & Partial Knee',
      seoTitle_ar: 'جراحة استبدال الركبة في الهند',
      seoDesc_en:
        'Advanced knee replacement surgery in India. Total and partial knee replacement with robotic assistance. Premium implants at affordable costs.',
      seoDesc_ar: 'جراحة استبدال الركبة المتقدمة في الهند بتكاليف معقولة.',
      published: true,
      featured: true,
    },
    {
      slug: 'ivf',
      title_en: 'IVF & Fertility Treatment',
      title_ar: 'التلقيح الصناعي وعلاج الخصوبة',
      category_en: 'Fertility',
      category_ar: 'الخصوبة',
      summary_en:
        'Comprehensive fertility treatments including IVF, ICSI, IUI, and egg freezing. High success rates with experienced fertility specialists.',
      summary_ar:
        'علاجات خصوبة شاملة بما في ذلك التلقيح الصناعي بمعدلات نجاح عالية.',
      costMin: 3000,
      costMax: 6000,
      currency: 'USD',
      duration: '3-4 weeks',
      recovery: '2-3 days',
      seoTitle_en: 'IVF Treatment in India | Fertility & Reproductive Care',
      seoTitle_ar: 'علاج التلقيح الصناعي في الهند',
      seoDesc_en:
        'Advanced IVF and fertility treatments in India. High success rates, latest technology, experienced specialists. Affordable packages available.',
      seoDesc_ar: 'علاجات التلقيح الصناعي المتقدمة في الهند بمعدلات نجاح عالية.',
      published: true,
      featured: true,
    },
  ];

  const createdTreatments = [];
  for (const treatment of treatments) {
    const created = await prisma.treatment.upsert({
      where: { slug: treatment.slug },
      update: {},
      create: treatment,
    });
    createdTreatments.push(created);
    console.log(`✅ Created treatment: ${treatment.title_en}`);
  }

  // Create CityTreatments
  for (const city of createdCities) {
    for (const treatment of createdTreatments) {
      const cityTreatment = await prisma.cityTreatment.upsert({
        where: {
          cityId_treatmentId: {
            cityId: city.id,
            treatmentId: treatment.id,
          },
        },
        update: {},
        create: {
          cityId: city.id,
          treatmentId: treatment.id,
          intro_en: `Get ${treatment.title_en} in India for ${city.name_en} residents. World-class care at affordable prices.`,
          intro_ar: `احصل على ${treatment.title_ar} في الهند لسكان ${city.name_ar}.`,
          costMin: treatment.costMin,
          costMax: treatment.costMax,
          seoTitle_en: `${treatment.title_en} for ${city.name_en} Residents | Shifa AlHind`,
          seoTitle_ar: `${treatment.title_ar} لسكان ${city.name_ar}`,
          seoDesc_en: `${city.name_en} residents: Get ${treatment.title_en} in India. Expert care, JCI hospitals, affordable costs. Free consultation available.`,
          seoDesc_ar: `سكان ${city.name_ar}: احصلوا على ${treatment.title_ar} في الهند.`,
          published: true,
          priority: 70,
        },
      });

      // Create 3 sample articles for each city-treatment
      for (let i = 1; i <= 3; i++) {
        await prisma.article.upsert({
          where: {
            slug: `${city.slug}-${treatment.slug}-guide-${i}`,
          },
          update: {},
          create: {
            slug: `${city.slug}-${treatment.slug}-guide-${i}`,
            cityTreatmentId: cityTreatment.id,
            cityId: city.id,
            title_en: `${treatment.title_en} in India: Complete Guide for ${city.name_en} Patients (Part ${i})`,
            title_ar: `${treatment.title_ar} في الهند: دليل شامل لمرضى ${city.name_ar} (الجزء ${i})`,
            excerpt_en: `Comprehensive guide to ${treatment.title_en} in India for ${city.name_en} residents. Learn about costs, procedures, and recovery.`,
            excerpt_ar: `دليل شامل عن ${treatment.title_ar} في الهند لسكان ${city.name_ar}.`,
            seoTitle_en: `${treatment.title_en} Guide for ${city.name_en} Patients | Part ${i}`,
            seoTitle_ar: `دليل ${treatment.title_ar} لمرضى ${city.name_ar} | الجزء ${i}`,
            seoDesc_en: `Everything ${city.name_en} patients need to know about ${treatment.title_en} in India. Costs, hospitals, procedures, and recovery tips.`,
            seoDesc_ar: `كل ما يحتاج مرضى ${city.name_ar} معرفته عن ${treatment.title_ar} في الهند.`,
            published: true,
            needsNativeReview: true,
            needsMedicalReview: true,
            priority: 30,
          },
        });
      }

      console.log(
        `✅ Created city-treatment and articles: ${city.name_en} - ${treatment.title_en}`
      );
    }
  }

  console.log('✅ Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

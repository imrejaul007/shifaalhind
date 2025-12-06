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

  // Create India country for hospitals
  const india = await prisma.country.upsert({
    where: { slug: 'india' },
    update: {},
    create: {
      slug: 'india',
      name_en: 'India',
      name_ar: 'الهند',
      code: 'IN',
      phonePrefix: '+91',
      currency: 'INR',
      seoTitle_en: 'Medical Tourism in India | World-Class Healthcare',
      seoTitle_ar: 'السياحة العلاجية في الهند',
      seoDesc_en: 'India offers world-class medical treatments at affordable costs with JCI-accredited hospitals.',
      seoDesc_ar: 'الهند تقدم علاجات طبية عالمية المستوى بتكاليف معقولة.',
      published: true,
    },
  });
  console.log(`✅ Created country: ${india.name_en}`);

  // Create Indian cities for hospitals
  const indianCities = [
    {
      slug: 'mumbai',
      name_en: 'Mumbai',
      name_ar: 'مومباي',
      timezone: 'Asia/Kolkata',
      latitude: 19.0760,
      longitude: 72.8777,
      published: true,
    },
    {
      slug: 'delhi',
      name_en: 'New Delhi',
      name_ar: 'نيودلهي',
      timezone: 'Asia/Kolkata',
      latitude: 28.6139,
      longitude: 77.2090,
      published: true,
    },
    {
      slug: 'bangalore',
      name_en: 'Bangalore',
      name_ar: 'بنغالور',
      timezone: 'Asia/Kolkata',
      latitude: 12.9716,
      longitude: 77.5946,
      published: true,
    },
  ];

  const createdIndianCities = [];
  for (const city of indianCities) {
    const created = await prisma.city.upsert({
      where: { slug: city.slug },
      update: {},
      create: {
        slug: city.slug,
        name_en: city.name_en,
        name_ar: city.name_ar,
        countryId: india.id,
        timezone: city.timezone,
        latitude: city.latitude,
        longitude: city.longitude,
        seoTitle_en: `Medical Tourism in ${city.name_en} | Top Hospitals`,
        seoTitle_ar: `السياحة العلاجية في ${city.name_ar}`,
        seoDesc_en: `World-class medical treatments in ${city.name_en}. JCI-accredited hospitals and experienced doctors.`,
        seoDesc_ar: `علاجات طبية عالمية المستوى في ${city.name_ar}.`,
        published: city.published,
        priority: 80,
      },
    });
    createdIndianCities.push(created);
    console.log(`✅ Created Indian city: ${city.name_en}`);
  }

  // Create Hospitals
  const hospitals = [
    {
      slug: 'apollo-hospital-mumbai',
      name_en: 'Apollo Hospital Mumbai',
      name_ar: 'مستشفى أبولو مومباي',
      citySlug: 'mumbai',
      address_en: 'Parsik Hill Road, Sector 23, CBD Belapur, Navi Mumbai',
      address_ar: 'طريق بارسيك هيل، القطاع 23، نافي مومباي',
      phone: '+91-22-39267700',
      email: 'info@apollohospitals.com',
      website: 'https://www.apollohospitals.com',
      accreditations: ['JCI', 'NABH', 'ISO 9001'],
      specialties: ['Cardiology', 'Oncology', 'Neurology', 'Orthopedics', 'Gastroenterology'],
      languages: ['English', 'Hindi', 'Arabic', 'Urdu'],
      about_en:
        'Apollo Hospital Mumbai is a 500-bed multi-specialty tertiary care hospital equipped with state-of-the-art technology and internationally trained doctors. Accredited by JCI and NABH, the hospital provides world-class healthcare services to international patients.',
      about_ar: 'مستشفى أبولو مومباي هو مستشفى متعدد التخصصات مجهز بأحدث التقنيات.',
      facilities_en:
        'Advanced ICU, Cardiac Cath Lab, Modular OTs, Emergency Services, Robotic Surgery, PET-CT Scanner',
      facilities_ar: 'وحدة العناية المركزة المتقدمة، مختبر قسطرة القلب، غرف عمليات حديثة',
      published: true,
      featured: true,
      rating: 4.8,
      reviewCount: 1250,
    },
    {
      slug: 'fortis-hospital-delhi',
      name_en: 'Fortis Hospital New Delhi',
      name_ar: 'مستشفى فورتيس نيودلهي',
      citySlug: 'delhi',
      address_en: 'Sector B, Pocket 1, Aruna Asaf Ali Marg, Vasant Kunj, New Delhi',
      address_ar: 'قطاع ب، جيب 1، فاسانت كونج، نيودلهي',
      phone: '+91-11-47135000',
      email: 'info@fortishealthcare.com',
      website: 'https://www.fortishealthcare.com',
      accreditations: ['JCI', 'NABH'],
      specialties: ['Cardiac Sciences', 'Neurosciences', 'Orthopedics', 'Kidney & Urology', 'Cancer Care'],
      languages: ['English', 'Hindi', 'Arabic'],
      about_en:
        'Fortis Hospital New Delhi is a flagship hospital with 400 beds, offering comprehensive healthcare across 50+ specialties. Known for cardiac care and neurosciences with internationally acclaimed doctors.',
      about_ar: 'مستشفى فورتيس نيودلهي هو مستشفى رائد مع 400 سرير.',
      facilities_en:
        'Cath Labs, Modular OTs, Neonatal ICU, Stroke Unit, Bone Marrow Transplant Unit',
      facilities_ar: 'مختبرات القسطرة، غرف عمليات حديثة، وحدة العناية المركزة للأطفال حديثي الولادة',
      published: true,
      featured: true,
      rating: 4.7,
      reviewCount: 980,
    },
    {
      slug: 'manipal-hospital-bangalore',
      name_en: 'Manipal Hospital Bangalore',
      name_ar: 'مستشفى مانيبال بنغالور',
      citySlug: 'bangalore',
      address_en: '98, HAL Airport Road, Bangalore',
      address_ar: '98، طريق مطار هال، بنغالور',
      phone: '+91-80-25023344',
      email: 'info@manipalhospitals.com',
      website: 'https://www.manipalhospitals.com',
      accreditations: ['NABH', 'ISO 14001'],
      specialties: ['Orthopedics', 'Fertility', 'Nephrology', 'Pediatrics', 'Oncology', 'IVF', 'Joint Replacement', 'Kidney Stone Treatment'],
      languages: ['English', 'Hindi', 'Kannada', 'Arabic'],
      about_en:
        'Manipal Hospital Bangalore is a 650-bed multi-specialty hospital providing comprehensive healthcare. Excellence in orthopedics, fertility treatments, and kidney care with cutting-edge technology.',
      about_ar: 'مستشفى مانيبال بنغالور هو مستشفى متعدد التخصصات مع 650 سرير.',
      facilities_en:
        'Robotic Surgery, Fertility Center, Joint Replacement Unit, Dialysis Unit, Advanced Imaging',
      facilities_ar: 'الجراحة الروبوتية، مركز الخصوبة، وحدة استبدال المفاصل',
      published: true,
      featured: true,
      rating: 4.6,
      reviewCount: 850,
    },
    {
      slug: 'narayana-health-city-bangalore',
      name_en: 'Narayana Health City Bangalore',
      name_ar: 'مدينة نارايانا الصحية بنغالور',
      citySlug: 'bangalore',
      address_en: '258/A, Bommasandra Industrial Area, Anekal Taluk, Bangalore',
      address_ar: '258/A، منطقة بوماساندرا الصناعية، بنغالور',
      phone: '+91-80-71222222',
      email: 'info@narayanahealth.org',
      website: 'https://www.narayanahealth.org',
      accreditations: ['NABH', 'JCI', 'ISO 9001'],
      specialties: ['Cardiac Surgery', 'Cardiac Sciences', 'Angioplasty', 'Heart Surgery', 'Pediatric Cardiology', 'Oncology', 'Neurosurgery'],
      languages: ['English', 'Hindi', 'Kannada', 'Tamil', 'Arabic'],
      about_en:
        'Narayana Health City is Asia\'s largest multi-specialty hospital with 1,400 beds. Founded by renowned cardiac surgeon Dr. Devi Shetty, it\'s known for world-class cardiac care at affordable costs. The hospital performs over 10,000 cardiac surgeries annually.',
      about_ar: 'مدينة نارايانا الصحية أكبر مستشفى متعدد التخصصات في آسيا مع 1400 سرير.',
      facilities_en:
        '50 ICU Beds, 15 Cardiac Cath Labs, Robotic Surgery, Advanced Imaging, Pediatric ICU, Bone Marrow Transplant Unit',
      facilities_ar: '50 سرير عناية مركزة، 15 مختبر قسطرة قلبية، جراحة روبوتية',
      published: true,
      featured: true,
      rating: 4.8,
      reviewCount: 2150,
    },
    {
      slug: 'apollo-hospital-bangalore',
      name_en: 'Apollo Hospital Bangalore',
      name_ar: 'مستشفى أبولو بنغالور',
      citySlug: 'bangalore',
      address_en: '154/11, Opposite IIM-B, Bannerghatta Road, Bangalore',
      address_ar: '154/11، طريق بانيرغاتا، بنغالور',
      phone: '+91-80-26304050',
      email: 'info@apollobangalore.com',
      website: 'https://www.apollohospitals.com/bangalore',
      accreditations: ['JCI', 'NABH', 'ISO 9001'],
      specialties: ['Cancer Treatment', 'Oncology', 'Proton Therapy', 'Radiation Oncology', 'Breast Cancer', 'Lung Cancer', 'Prostate Cancer', 'Orthopedics'],
      languages: ['English', 'Hindi', 'Kannada', 'Telugu', 'Arabic'],
      about_en:
        'Apollo Hospital Bangalore is a 250-bed tertiary care hospital with India\'s first Proton Therapy Center in Bangalore. Specialized in comprehensive cancer care with international protocols and multidisciplinary tumor boards.',
      about_ar: 'مستشفى أبولو بنغالور مستشفى رعاية ثالثية 250 سرير مع أول مركز للعلاج البروتوني.',
      facilities_en:
        'Proton Therapy Center, PET-CT Scanner, Brachytherapy Unit, BMT Unit, Robotic Surgery, da Vinci System',
      facilities_ar: 'مركز العلاج البروتوني، ماسح PET-CT، وحدة المعالجة الإشعاعية الموضعية',
      published: true,
      featured: true,
      rating: 4.7,
      reviewCount: 1580,
    },
    {
      slug: 'fortis-hospital-bangalore',
      name_en: 'Fortis Hospital Bangalore',
      name_ar: 'مستشفى فورتيس بنغالور',
      citySlug: 'bangalore',
      address_en: '154/9, Opposite IIM-B, Bannerghatta Road, Bangalore',
      address_ar: '154/9، طريق بانيرغاتا، بنغالور',
      phone: '+91-80-66214444',
      email: 'info@fortisbangalore.com',
      website: 'https://www.fortishealthcare.com/india/bangalore',
      accreditations: ['NABH', 'ISO 14001'],
      specialties: ['Neurosurgery', 'Spine Surgery', 'Brain Surgery', 'Shoulder Surgery', 'Joint Replacement', 'Minimally Invasive Surgery'],
      languages: ['English', 'Hindi', 'Kannada', 'Tamil', 'Arabic'],
      about_en:
        'Fortis Hospital Bangalore is a 400-bed multi-specialty hospital with centers of excellence in neurosciences and orthopedics. Known for complex spine surgeries and minimally invasive procedures.',
      about_ar: 'مستشفى فورتيس بنغالور مستشفى متعدد التخصصات 400 سرير متخصص في جراحة المخ والأعصاب.',
      facilities_en:
        'Neuro Navigation System, Intraoperative MRI, Spine Surgery Unit, Advanced OT Complex, Robotic Rehabilitation',
      facilities_ar: 'نظام الملاحة العصبية، التصوير بالرنين المغناطيسي أثناء العملية',
      published: true,
      featured: true,
      rating: 4.6,
      reviewCount: 1240,
    },
    {
      slug: 'columbia-asia-hospital-bangalore',
      name_en: 'Columbia Asia Hospital Bangalore',
      name_ar: 'مستشفى كولومبيا آسيا بنغالور',
      citySlug: 'bangalore',
      address_en: 'Kirloskar Business Park, Hebbal, Bangalore',
      address_ar: 'كيرلوسكار بيزنس بارك، هيبال، بنغالور',
      phone: '+91-80-39897979',
      email: 'info@columbiaasia.com',
      website: 'https://www.columbiaasia.com/india/bangalore',
      accreditations: ['NABH', 'ISO 9001'],
      specialties: ['Gastroenterology', 'Laparoscopic Surgery', 'Gallbladder Surgery', 'Hernia Surgery', 'Appendix Surgery', 'Bariatric Surgery', 'Gastric Bypass'],
      languages: ['English', 'Hindi', 'Kannada', 'Arabic'],
      about_en:
        'Columbia Asia Hospital is a 200-bed multi-specialty hospital focusing on minimally invasive procedures. Known for excellent outcomes in laparoscopic surgeries and quick recovery times.',
      about_ar: 'مستشفى كولومبيا آسيا مستشفى 200 سرير متخصص في الإجراءات طفيفة التوغل.',
      facilities_en:
        'Advanced Laparoscopy Center, Bariatric Surgery Unit, Endoscopy Suite, 24/7 Emergency, ICU',
      facilities_ar: 'مركز تنظير البطن المتقدم، وحدة جراحة السمنة، جناح التنظير الداخلي',
      published: true,
      featured: true,
      rating: 4.5,
      reviewCount: 980,
    },
    {
      slug: 'sakra-world-hospital-bangalore',
      name_en: 'Sakra World Hospital Bangalore',
      name_ar: 'مستشفى ساكرا العالمي بنغالور',
      citySlug: 'bangalore',
      address_en: 'SY NO 52/2 & 52/3, Devarabeesanahalli, Varthur Hobli, Bangalore',
      address_ar: 'ديفارابيساناهالي، فارثور هوبلي، بنغالور',
      phone: '+91-80-46444444',
      email: 'info@sakraworldhospital.com',
      website: 'https://www.sakraworldhospital.com',
      accreditations: ['NABH', 'JCI', 'ISO 9001'],
      specialties: ['Cosmetic Surgery', 'Plastic Surgery', 'Rhinoplasty', 'Liposuction', 'Breast Augmentation', 'Hair Transplant', 'Aesthetic Medicine'],
      languages: ['English', 'Hindi', 'Kannada', 'Japanese', 'Arabic'],
      about_en:
        'Sakra World Hospital is a 350-bed super-specialty hospital with Japanese management standards. International Center for Cosmetic & Plastic Surgery with board-certified plastic surgeons.',
      about_ar: 'مستشفى ساكرا العالمي مستشفى 350 سرير بمعايير الإدارة اليابانية.',
      facilities_en:
        'International Cosmetic Surgery Center, Laser Skin Clinic, Hair Transplant Unit, Recovery Suites, VIP Rooms',
      facilities_ar: 'مركز الجراحة التجميلية الدولي، عيادة البشرة بالليزر، وحدة زراعة الشعر',
      published: true,
      featured: true,
      rating: 4.7,
      reviewCount: 1120,
    },
    {
      slug: 'aster-cmi-hospital-bangalore',
      name_en: 'Aster CMI Hospital Bangalore',
      name_ar: 'مستشفى أستر CMI بنغالور',
      citySlug: 'bangalore',
      address_en: '43/2, New Airport Road, NH-7, Sahakar Nagar, Bangalore',
      address_ar: '43/2، طريق المطار الجديد، بنغالور',
      phone: '+91-80-43420100',
      email: 'info@astercmi.com',
      website: 'https://www.astercmi.com',
      accreditations: ['NABH', 'LEED Platinum'],
      specialties: ['Ophthalmology', 'Eye Care', 'Cataract Surgery', 'LASIK', 'Retina Surgery', 'Cornea Transplant', 'Glaucoma Treatment'],
      languages: ['English', 'Hindi', 'Kannada', 'Malayalam', 'Arabic'],
      about_en:
        'Aster CMI is a 500-bed quaternary care hospital with a world-class eye care center. Performs over 15,000 eye surgeries annually with state-of-the-art Femto LASIK and advanced cataract technology.',
      about_ar: 'مستشفى أستر CMI مستشفى رعاية رباعية 500 سرير مع مركز عيون عالمي المستوى.',
      facilities_en:
        'Femto LASIK Suite, Phaco Machine, OCT Scanner, Fundus Camera, Optical Biometry, Surgical Microscopes',
      facilities_ar: 'جناح ليزك فيمتو، ماكينة فاكو، ماسح OCT، كاميرا قاع العين',
      published: true,
      featured: true,
      rating: 4.8,
      reviewCount: 1670,
    },
    {
      slug: 'bgs-gleneagles-hospital-bangalore',
      name_en: 'BGS Gleneagles Hospital Bangalore',
      name_ar: 'مستشفى BGS جلينيجلز بنغالور',
      citySlug: 'bangalore',
      address_en: 'Uttarahalli Road, Kengeri, Bangalore',
      address_ar: 'طريق أوتاراهالي، كينجيري، بنغالور',
      phone: '+91-80-61055555',
      email: 'info@bgshospitals.com',
      website: 'https://www.bgshospitals.com',
      accreditations: ['NABH', 'ACHS'],
      specialties: ['Urology', 'Kidney Stone Treatment', 'Prostate Surgery', 'Varicose Veins', 'Vascular Surgery', 'Piles Surgery', 'General Surgery'],
      languages: ['English', 'Hindi', 'Kannada', 'Tamil', 'Arabic'],
      about_en:
        'BGS Gleneagles is a 300-bed multi-specialty hospital with centers of excellence in urology and minimally invasive surgery. Performs advanced RIRS, PCNL, and laser treatments for kidney stones.',
      about_ar: 'مستشفى BGS جلينيجلز مستشفى 300 سرير متخصص في جراحة المسالك البولية.',
      facilities_en:
        'Lithotripsy Unit, Laser Center, Endoscopy Suite, Laparoscopic Surgery, Dialysis Unit',
      facilities_ar: 'وحدة تفتيت الحصى، مركز الليزر، جناح التنظير الداخلي',
      published: true,
      featured: true,
      rating: 4.6,
      reviewCount: 890,
    },
    {
      slug: 'st-johns-medical-college-hospital-bangalore',
      name_en: 'St. John\'s Medical College Hospital',
      name_ar: 'مستشفى كلية سانت جونز الطبية',
      citySlug: 'bangalore',
      address_en: 'Sarjapur Road, Bangalore',
      address_ar: 'طريق سارجابور، بنغالور',
      phone: '+91-80-49467000',
      email: 'info@stjohns.in',
      website: 'https://www.stjohns.in',
      accreditations: ['NABH', 'NAAC A++'],
      specialties: ['Endocrine Surgery', 'Thyroid Surgery', 'Diabetes Care', 'Endocrinology', 'Metabolic Surgery', 'General Surgery'],
      languages: ['English', 'Hindi', 'Kannada', 'Tamil', 'Arabic'],
      about_en:
        'St. John\'s is a 1,200-bed teaching hospital affiliated with a premier medical college. Known for thyroid and endocrine surgeries with minimally invasive techniques and robotic-assisted procedures.',
      about_ar: 'مستشفى سانت جونز مستشفى تعليمي 1200 سرير متخصص في جراحة الغدة الدرقية.',
      facilities_en:
        'Robotic Surgery Suite, Endocrinology Department, Diabetes Care Center, Research Facility, Advanced Imaging',
      facilities_ar: 'جناح الجراحة الروبوتية، قسم الغدد الصماء، مركز رعاية مرضى السكري',
      published: true,
      featured: true,
      rating: 4.7,
      reviewCount: 1380,
    },
    {
      slug: 'cloudnine-hospital-bangalore',
      name_en: 'Cloudnine Hospital Bangalore',
      name_ar: 'مستشفى كلاود ناين بنغالور',
      citySlug: 'bangalore',
      address_en: '1533, 9th Cross, 5th Block, Jayanagar, Bangalore',
      address_ar: '1533، جايناجار، بنغالور',
      phone: '+91-80-45455555',
      email: 'info@cloudninehospitals.com',
      website: 'https://www.cloudninehospitals.com',
      accreditations: ['NABH', 'ISO 9001'],
      specialties: ['Women\'s Health', 'IVF', 'Fertility', 'PCOS Treatment', 'Egg Freezing', 'Hysterectomy', 'Gynecology', 'Obstetrics'],
      languages: ['English', 'Hindi', 'Kannada', 'Tamil', 'Malayalam', 'Arabic'],
      about_en:
        'Cloudnine is India\'s leading women and child healthcare chain with 150 beds dedicated to fertility and gynecology. IVF success rate of 68% with personalized treatment protocols and emotional support.',
      about_ar: 'كلاود ناين سلسلة رائدة في رعاية النساء والأطفال مع 150 سرير.',
      facilities_en:
        'State-of-art IVF Lab, Embryology Lab, Andrology Lab, PCOS Clinic, Fetal Medicine, NICU',
      facilities_ar: 'مختبر التلقيح الصناعي، مختبر الأجنة، عيادة PCOS، طب الجنين',
      published: true,
      featured: true,
      rating: 4.9,
      reviewCount: 2340,
    },
  ];

  const createdHospitals = [];
  for (const hospital of hospitals) {
    const city = await prisma.city.findUnique({
      where: { slug: hospital.citySlug },
    });
    if (city) {
      const created = await prisma.hospital.upsert({
        where: { slug: hospital.slug },
        update: {},
        create: {
          slug: hospital.slug,
          name_en: hospital.name_en,
          name_ar: hospital.name_ar,
          cityId: city.id,
          address_en: hospital.address_en,
          address_ar: hospital.address_ar,
          phone: hospital.phone,
          email: hospital.email,
          website: hospital.website,
          accreditations: hospital.accreditations,
          specialties: hospital.specialties,
          languages: hospital.languages,
          about_en: hospital.about_en,
          about_ar: hospital.about_ar,
          facilities_en: hospital.facilities_en,
          facilities_ar: hospital.facilities_ar,
          published: hospital.published,
          featured: hospital.featured,
          rating: hospital.rating,
          reviewCount: hospital.reviewCount,
        },
      });
      createdHospitals.push(created);
      console.log(`✅ Created hospital: ${hospital.name_en}`);
    }
  }

  // Create Doctors
  const doctors = [
    {
      slug: 'dr-rajesh-kumar',
      hospitalSlug: 'apollo-hospital-mumbai',
      name_en: 'Dr. Rajesh Kumar',
      name_ar: 'د. راجيش كومار',
      title_en: 'Dr.',
      title_ar: 'د.',
      specialties: ['Cardiac Surgery', 'Minimally Invasive Surgery'],
      qualifications: [
        'MBBS - All India Institute of Medical Sciences',
        'MS - Cardiothoracic Surgery',
        'MCh - Cardiovascular Surgery',
        'Fellowship - Cleveland Clinic, USA',
      ],
      experience: 18,
      languages: ['English', 'Hindi', 'Arabic'],
      bio_en:
        'Dr. Rajesh Kumar is a renowned cardiac surgeon with 18 years of experience. He has performed over 3,000 cardiac surgeries including complex valve replacements and bypass surgeries. Trained at Cleveland Clinic, he brings international expertise to Apollo Hospital.',
      bio_ar: 'د. راجيش كومار جراح قلب مشهور مع 18 عاماً من الخبرة.',
      consultationFee: 100,
      available: true,
      published: true,
      featured: true,
      rating: 4.9,
      reviewCount: 450,
    },
    {
      slug: 'dr-priya-sharma',
      hospitalSlug: 'fortis-hospital-delhi',
      name_en: 'Dr. Priya Sharma',
      name_ar: 'د. بريا شارما',
      title_en: 'Dr.',
      title_ar: 'د.',
      specialties: ['Neurology', 'Stroke Management'],
      qualifications: [
        'MBBS - Maulana Azad Medical College',
        'MD - Neurology',
        'DM - Neurology',
        'Fellowship - Johns Hopkins, USA',
      ],
      experience: 15,
      languages: ['English', 'Hindi'],
      bio_en:
        'Dr. Priya Sharma is a leading neurologist specializing in stroke management and neurological disorders. With training from Johns Hopkins, she has treated over 5,000 patients and published extensively in international journals.',
      bio_ar: 'د. بريا شارما أخصائية أمراض الأعصاب الرائدة.',
      consultationFee: 90,
      available: true,
      published: true,
      featured: true,
      rating: 4.8,
      reviewCount: 380,
    },
    {
      slug: 'dr-arun-menon',
      hospitalSlug: 'manipal-hospital-bangalore',
      name_en: 'Dr. Arun Menon',
      name_ar: 'د. أرون مينون',
      title_en: 'Dr.',
      title_ar: 'د.',
      specialties: ['Orthopedic Surgery', 'Joint Replacement'],
      qualifications: [
        'MBBS - Christian Medical College',
        'MS - Orthopedics',
        'Fellowship - Robotic Joint Replacement',
        'Training - Mayo Clinic, USA',
      ],
      experience: 20,
      languages: ['English', 'Hindi', 'Malayalam', 'Arabic'],
      bio_en:
        'Dr. Arun Menon is a pioneer in robotic-assisted joint replacement surgery. With 20 years of experience and training from Mayo Clinic, he has successfully performed over 4,000 joint replacement surgeries with excellent outcomes.',
      bio_ar: 'د. أرون مينون رائد في جراحة استبدال المفاصل بمساعدة الروبوت.',
      consultationFee: 120,
      available: true,
      published: true,
      featured: true,
      rating: 4.9,
      reviewCount: 520,
    },
    {
      slug: 'dr-fatima-ali',
      hospitalSlug: 'manipal-hospital-bangalore',
      name_en: 'Dr. Fatima Ali',
      name_ar: 'د. فاطمة علي',
      title_en: 'Dr.',
      title_ar: 'د.',
      specialties: ['Fertility & IVF', 'Reproductive Medicine'],
      qualifications: [
        'MBBS - Kasturba Medical College',
        'MD - Obstetrics & Gynecology',
        'Fellowship - Reproductive Medicine',
        'Training - Bourn Hall Clinic, UK',
      ],
      experience: 12,
      languages: ['English', 'Hindi', 'Arabic', 'Urdu'],
      bio_en:
        'Dr. Fatima Ali is a fertility specialist with expertise in IVF and advanced reproductive techniques. Trained at the world-renowned Bourn Hall Clinic, she has helped over 2,000 couples achieve their dream of parenthood with a success rate of 65%.',
      bio_ar: 'د. فاطمة علي أخصائية خصوبة مع خبرة في التلقيح الصناعي.',
      consultationFee: 80,
      available: true,
      published: true,
      featured: true,
      rating: 4.8,
      reviewCount: 390,
    },
    // Narayana Health City Bangalore Doctors
    {
      slug: 'dr-devi-shetty',
      hospitalSlug: 'narayana-health-city-bangalore',
      name_en: 'Dr. Devi Shetty',
      name_ar: 'د. ديفي شيتي',
      title_en: 'Dr.',
      title_ar: 'د.',
      specialties: ['Cardiac Surgery', 'Cardiothoracic Surgery', 'Heart Transplant'],
      qualifications: ['MBBS - Kasturba Medical College', 'MS - General Surgery', 'MCh - Cardiothoracic Surgery', 'Training - Guy\'s Hospital, London'],
      experience: 35,
      languages: ['English', 'Hindi', 'Kannada'],
      bio_en: 'Dr. Devi Shetty is India\'s most renowned cardiac surgeon and founder of Narayana Health. With over 35 years of experience and 15,000+ cardiac surgeries, he pioneered affordable cardiac care in India. Awarded Padma Shri and Padma Bhushan.',
      bio_ar: 'د. ديفي شيتي جراح القلب الأكثر شهرة في الهند ومؤسس نارايانا هيلث.',
      consultationFee: 150,
      available: true,
      published: true,
      featured: true,
      rating: 5.0,
      reviewCount: 3500,
    },
    {
      slug: 'dr-ashwin-mehta',
      hospitalSlug: 'narayana-health-city-bangalore',
      name_en: 'Dr. Ashwin Mehta',
      name_ar: 'د. أشوين ميهتا',
      title_en: 'Dr.',
      title_ar: 'د.',
      specialties: ['Interventional Cardiology', 'Angioplasty', 'Cardiac Cath Lab'],
      qualifications: ['MBBS', 'MD - Internal Medicine', 'DM - Cardiology', 'Fellowship - Interventional Cardiology'],
      experience: 16,
      languages: ['English', 'Hindi', 'Gujarati', 'Arabic'],
      bio_en: 'Dr. Ashwin Mehta specializes in complex angioplasty and stenting procedures. Performed over 8,000 interventional procedures with 98% success rate. Expert in primary angioplasty for acute heart attacks.',
      bio_ar: 'د. أشوين ميهتا متخصص في إجراءات القسطرة المعقدة والدعامات.',
      consultationFee: 110,
      available: true,
      published: true,
      featured: true,
      rating: 4.9,
      reviewCount: 920,
    },
    // Apollo Hospital Bangalore Doctors
    {
      slug: 'dr-shekar-patil',
      hospitalSlug: 'apollo-hospital-bangalore',
      name_en: 'Dr. Shekar Patil',
      name_ar: 'د. شيكار باتيل',
      title_en: 'Dr.',
      title_ar: 'د.',
      specialties: ['Surgical Oncology', 'Breast Cancer Surgery', 'Oncoplastic Surgery'],
      qualifications: ['MBBS', 'MS - General Surgery', 'MCh - Surgical Oncology', 'Fellowship - MD Anderson Cancer Center, USA'],
      experience: 18,
      languages: ['English', 'Hindi', 'Kannada', 'Marathi'],
      bio_en: 'Dr. Shekar Patil is a leading surgical oncologist specializing in breast cancer and oncoplastic surgery. Trained at MD Anderson, he has performed over 4,500 cancer surgeries with excellent cosmetic outcomes.',
      bio_ar: 'د. شيكار باتيل جراح أورام رائد متخصص في جراحة سرطان الثدي.',
      consultationFee: 120,
      available: true,
      published: true,
      featured: true,
      rating: 4.8,
      reviewCount: 780,
    },
    {
      slug: 'dr-ramesh-biligi',
      hospitalSlug: 'apollo-hospital-bangalore',
      name_en: 'Dr. Ramesh Biligi',
      name_ar: 'د. راميش بيليجي',
      title_en: 'Dr.',
      title_ar: 'د.',
      specialties: ['Radiation Oncology', 'Proton Therapy', 'Cancer Treatment'],
      qualifications: ['MBBS', 'MD - Radiation Oncology', 'Fellowship - Proton Therapy, USA'],
      experience: 15,
      languages: ['English', 'Hindi', 'Kannada', 'Telugu'],
      bio_en: 'Dr. Ramesh Biligi is India\'s leading proton therapy specialist. Pioneer in treating lung and prostate cancers with precision radiation. Treated over 3,000 patients with advanced radiation techniques.',
      bio_ar: 'د. راميش بيليجي متخصص رائد في العلاج البروتوني في الهند.',
      consultationFee: 130,
      available: true,
      published: true,
      featured: true,
      rating: 4.9,
      reviewCount: 650,
    },
    // Fortis Hospital Bangalore Doctors
    {
      slug: 'dr-anandh-balasubramaniam',
      hospitalSlug: 'fortis-hospital-bangalore',
      name_en: 'Dr. Anandh Balasubramaniam',
      name_ar: 'د. أناند بالاسوبرامانيام',
      title_en: 'Dr.',
      title_ar: 'د.',
      specialties: ['Neurosurgery', 'Spine Surgery', 'Brain Tumor Surgery'],
      qualifications: ['MBBS', 'MS - General Surgery', 'MCh - Neurosurgery', 'Fellowship - Spine Surgery, Germany'],
      experience: 20,
      languages: ['English', 'Hindi', 'Tamil', 'Kannada'],
      bio_en: 'Dr. Anandh Balasubramaniam is a renowned neurosurgeon with expertise in complex spine and brain surgeries. Performed over 5,000 neurosurgeries with minimally invasive techniques. Expert in robotic spine surgery.',
      bio_ar: 'د. أناند جراح أعصاب مشهور متخصص في جراحات العمود الفقري والدماغ المعقدة.',
      consultationFee: 140,
      available: true,
      published: true,
      featured: true,
      rating: 4.9,
      reviewCount: 1120,
    },
    {
      slug: 'dr-vivek-kumar',
      hospitalSlug: 'fortis-hospital-bangalore',
      name_en: 'Dr. Vivek Kumar',
      name_ar: 'د. فيفيك كومار',
      title_en: 'Dr.',
      title_ar: 'د.',
      specialties: ['Orthopedic Surgery', 'Shoulder Surgery', 'Sports Medicine'],
      qualifications: ['MBBS', 'MS - Orthopedics', 'Fellowship - Shoulder & Elbow Surgery', 'Training - Hospital for Special Surgery, USA'],
      experience: 14,
      languages: ['English', 'Hindi', 'Kannada'],
      bio_en: 'Dr. Vivek Kumar specializes in arthroscopic shoulder surgery and sports injuries. Team doctor for several cricket teams. Performed 3,000+ shoulder surgeries with excellent recovery outcomes.',
      bio_ar: 'د. فيفيك كومار متخصص في جراحة الكتف بالمنظار وإصابات الرياضة.',
      consultationFee: 95,
      available: true,
      published: true,
      featured: false,
      rating: 4.7,
      reviewCount: 540,
    },
    // Columbia Asia Bangalore Doctors
    {
      slug: 'dr-mohammed-rafi',
      hospitalSlug: 'columbia-asia-hospital-bangalore',
      name_en: 'Dr. Mohammed Rafi',
      name_ar: 'د. محمد رافي',
      title_en: 'Dr.',
      title_ar: 'د.',
      specialties: ['Laparoscopic Surgery', 'Bariatric Surgery', 'Gastric Bypass'],
      qualifications: ['MBBS', 'MS - General Surgery', 'Fellowship - Bariatric & Metabolic Surgery', 'Training - Minimal Access Surgery, Singapore'],
      experience: 16,
      languages: ['English', 'Hindi', 'Urdu', 'Arabic', 'Kannada'],
      bio_en: 'Dr. Mohammed Rafi is a leading bariatric surgeon specializing in gastric bypass and sleeve gastrectomy. Helped over 2,500 patients achieve significant weight loss with 85% diabetes remission rate.',
      bio_ar: 'د. محمد رافي جراح سمنة رائد متخصص في تحويل مسار المعدة.',
      consultationFee: 100,
      available: true,
      published: true,
      featured: true,
      rating: 4.8,
      reviewCount: 890,
    },
    {
      slug: 'dr-sunita-reddy',
      hospitalSlug: 'columbia-asia-hospital-bangalore',
      name_en: 'Dr. Sunita Reddy',
      name_ar: 'د. سونيتا ريدي',
      title_en: 'Dr.',
      title_ar: 'د.',
      specialties: ['General Surgery', 'Laparoscopic Surgery', 'Hernia Repair'],
      qualifications: ['MBBS', 'MS - General Surgery', 'Fellowship - Minimal Access Surgery'],
      experience: 12,
      languages: ['English', 'Hindi', 'Telugu', 'Kannada'],
      bio_en: 'Dr. Sunita Reddy specializes in laparoscopic hernia repair, gallbladder surgery, and appendix surgery. Known for minimally invasive techniques with same-day discharge. Performed 4,000+ laparoscopic surgeries.',
      bio_ar: 'د. سونيتا ريدي متخصصة في إصلاح الفتق بالمنظار وجراحة المرارة.',
      consultationFee: 85,
      available: true,
      published: true,
      featured: false,
      rating: 4.6,
      reviewCount: 560,
    },
    // Sakra World Hospital Doctors
    {
      slug: 'dr-sanjay-parashar',
      hospitalSlug: 'sakra-world-hospital-bangalore',
      name_en: 'Dr. Sanjay Parashar',
      name_ar: 'د. سانجاي باراشار',
      title_en: 'Dr.',
      title_ar: 'د.',
      specialties: ['Plastic & Cosmetic Surgery', 'Rhinoplasty', 'Liposuction', 'Breast Augmentation'],
      qualifications: ['MBBS', 'MS - General Surgery', 'MCh - Plastic Surgery', 'Fellowship - Aesthetic Surgery, USA'],
      experience: 18,
      languages: ['English', 'Hindi', 'Punjabi'],
      bio_en: 'Dr. Sanjay Parashar is one of India\'s top cosmetic surgeons. Expert in rhinoplasty, body contouring, and breast procedures. Featured in international beauty magazines. Performed 6,000+ aesthetic surgeries.',
      bio_ar: 'د. سانجاي باراشار واحد من أفضل جراحي التجميل في الهند.',
      consultationFee: 120,
      available: true,
      published: true,
      featured: true,
      rating: 4.9,
      reviewCount: 1340,
    },
    {
      slug: 'dr-neha-khanna',
      hospitalSlug: 'sakra-world-hospital-bangalore',
      name_en: 'Dr. Neha Khanna',
      name_ar: 'د. نيها خانا',
      title_en: 'Dr.',
      title_ar: 'د.',
      specialties: ['Hair Transplant', 'FUE', 'Hair Restoration'],
      qualifications: ['MBBS', 'MD - Dermatology', 'Fellowship - Hair Transplant Surgery'],
      experience: 10,
      languages: ['English', 'Hindi', 'Punjabi'],
      bio_en: 'Dr. Neha Khanna specializes in FUE hair transplant with natural-looking results. Performed 3,500+ hair transplant procedures. Expert in hairline design and facial hair transplants.',
      bio_ar: 'د. نيها خانا متخصصة في زراعة الشعر بتقنية FUE.',
      consultationFee: 75,
      available: true,
      published: true,
      featured: false,
      rating: 4.7,
      reviewCount: 720,
    },
    // Aster CMI Hospital Doctors
    {
      slug: 'dr-bhujang-shetty',
      hospitalSlug: 'aster-cmi-hospital-bangalore',
      name_en: 'Dr. Bhujang Shetty',
      name_ar: 'د. بوجانج شيتي',
      title_en: 'Dr.',
      title_ar: 'د.',
      specialties: ['Ophthalmology', 'Cataract Surgery', 'Cornea Specialist'],
      qualifications: ['MBBS', 'MS - Ophthalmology', 'Fellowship - Cornea & Refractive Surgery'],
      experience: 22,
      languages: ['English', 'Hindi', 'Kannada', 'Malayalam'],
      bio_en: 'Dr. Bhujang Shetty is founder of Narayana Nethralaya Eye Hospital network. Performed over 100,000 cataract surgeries. Pioneer in no-injection cataract surgery in India. International speaker on eye care.',
      bio_ar: 'د. بوجانج شيتي مؤسس شبكة مستشفيات نارايانا نيثرالايا للعيون.',
      consultationFee: 90,
      available: true,
      published: true,
      featured: true,
      rating: 4.9,
      reviewCount: 2180,
    },
    {
      slug: 'dr-rohit-shetty',
      hospitalSlug: 'aster-cmi-hospital-bangalore',
      name_en: 'Dr. Rohit Shetty',
      name_ar: 'د. روهيت شيتي',
      title_en: 'Dr.',
      title_ar: 'د.',
      specialties: ['LASIK Surgery', 'Refractive Surgery', 'Corneal Surgery'],
      qualifications: ['MBBS', 'MS - Ophthalmology', 'Fellowship - Cornea & Refractive Surgery, USA'],
      experience: 15,
      languages: ['English', 'Hindi', 'Kannada'],
      bio_en: 'Dr. Rohit Shetty is an international authority on LASIK and corneal surgery. Performed 25,000+ LASIK procedures with blade-free Femto technology. Published 100+ research papers in international journals.',
      bio_ar: 'د. روهيت شيتي سلطة دولية في جراحة الليزك والقرنية.',
      consultationFee: 95,
      available: true,
      published: true,
      featured: true,
      rating: 4.9,
      reviewCount: 1560,
    },
    // BGS Gleneagles Doctors
    {
      slug: 'dr-prabhu-nayak',
      hospitalSlug: 'bgs-gleneagles-hospital-bangalore',
      name_en: 'Dr. Prabhu Nayak',
      name_ar: 'د. برابهو ناياك',
      title_en: 'Dr.',
      title_ar: 'د.',
      specialties: ['Urology', 'Kidney Stone Treatment', 'RIRS', 'PCNL'],
      qualifications: ['MBBS', 'MS - General Surgery', 'MCh - Urology', 'Fellowship - Endourology'],
      experience: 17,
      languages: ['English', 'Hindi', 'Kannada', 'Tulu'],
      bio_en: 'Dr. Prabhu Nayak is a leading urologist specializing in laser kidney stone treatment. Expert in RIRS and PCNL procedures. Performed 8,000+ stone removal surgeries with 98% success rate and minimal complications.',
      bio_ar: 'د. برابهو ناياك أخصائي مسالك بولية رائد متخصص في علاج حصوات الكلى بالليزر.',
      consultationFee: 95,
      available: true,
      published: true,
      featured: true,
      rating: 4.8,
      reviewCount: 980,
    },
    {
      slug: 'dr-rakesh-singh',
      hospitalSlug: 'bgs-gleneagles-hospital-bangalore',
      name_en: 'Dr. Rakesh Singh',
      name_ar: 'د. راكيش سينغ',
      title_en: 'Dr.',
      title_ar: 'د.',
      specialties: ['General Surgery', 'Piles Surgery', 'Varicose Veins', 'Laser Surgery'],
      qualifications: ['MBBS', 'MS - General Surgery', 'Fellowship - Proctology & Laser Surgery'],
      experience: 13,
      languages: ['English', 'Hindi', 'Kannada'],
      bio_en: 'Dr. Rakesh Singh specializes in laser treatment for piles and varicose veins. Known for painless procedures with same-day discharge. Performed 5,500+ laser surgeries with 97% patient satisfaction.',
      bio_ar: 'د. راكيش سينغ متخصص في علاج البواسير والدوالي بالليزر.',
      consultationFee: 70,
      available: true,
      published: true,
      featured: false,
      rating: 4.7,
      reviewCount: 810,
    },
    // St. John's Hospital Doctors
    {
      slug: 'dr-thomas-paul',
      hospitalSlug: 'st-johns-medical-college-hospital-bangalore',
      name_en: 'Dr. Thomas Paul',
      name_ar: 'د. توماس بول',
      title_en: 'Dr.',
      title_ar: 'د.',
      specialties: ['Endocrine Surgery', 'Thyroid Surgery', 'Parathyroid Surgery'],
      qualifications: ['MBBS', 'MS - General Surgery', 'MCh - Endocrine Surgery', 'Fellowship - Robotic Surgery'],
      experience: 19,
      languages: ['English', 'Hindi', 'Malayalam', 'Kannada'],
      bio_en: 'Dr. Thomas Paul is India\'s leading endocrine surgeon. Expert in minimally invasive thyroid surgery and robotic thyroidectomy. Performed 6,000+ thyroid surgeries with voice preservation techniques.',
      bio_ar: 'د. توماس بول جراح الغدد الصماء الرائد في الهند.',
      consultationFee: 105,
      available: true,
      published: true,
      featured: true,
      rating: 4.8,
      reviewCount: 1140,
    },
    {
      slug: 'dr-anjali-mukherjee',
      hospitalSlug: 'st-johns-medical-college-hospital-bangalore',
      name_en: 'Dr. Anjali Mukherjee',
      name_ar: 'د. أنجالي موخيرجي',
      title_en: 'Dr.',
      title_ar: 'د.',
      specialties: ['Endocrinology', 'Diabetes Care', 'Thyroid Disorders'],
      qualifications: ['MBBS', 'MD - Internal Medicine', 'DM - Endocrinology'],
      experience: 14,
      languages: ['English', 'Hindi', 'Bengali', 'Kannada'],
      bio_en: 'Dr. Anjali Mukherjee specializes in diabetes and thyroid disorder management. Known for personalized treatment plans with lifestyle modifications. Helped 10,000+ patients achieve better glucose control.',
      bio_ar: 'د. أنجالي موخيرجي متخصصة في إدارة مرض السكري واضطرابات الغدة الدرقية.',
      consultationFee: 75,
      available: true,
      published: true,
      featured: false,
      rating: 4.7,
      reviewCount: 720,
    },
    // Cloudnine Hospital Doctors
    {
      slug: 'dr-hrishikesh-pai',
      hospitalSlug: 'cloudnine-hospital-bangalore',
      name_en: 'Dr. Hrishikesh Pai',
      name_ar: 'د. هريشيكيش باي',
      title_en: 'Dr.',
      title_ar: 'د.',
      specialties: ['IVF', 'Fertility', 'Reproductive Medicine', 'PCOS Treatment'],
      qualifications: ['MBBS', 'MD - Obstetrics & Gynecology', 'Fellowship - Reproductive Medicine', 'Training - Cornell University, USA'],
      experience: 28,
      languages: ['English', 'Hindi', 'Marathi'],
      bio_en: 'Dr. Hrishikesh Pai is one of India\'s most renowned fertility specialists. Pioneer in IVF technology in India. Helped 15,000+ couples with 68% success rate. President of Indian Society of Assisted Reproduction.',
      bio_ar: 'د. هريشيكيش باي واحد من أشهر أخصائيي الخصوبة في الهند.',
      consultationFee: 130,
      available: true,
      published: true,
      featured: true,
      rating: 4.9,
      reviewCount: 2840,
    },
    {
      slug: 'dr-madhuri-burande',
      hospitalSlug: 'cloudnine-hospital-bangalore',
      name_en: 'Dr. Madhuri Burande',
      name_ar: 'د. مادهوري بوراندي',
      title_en: 'Dr.',
      title_ar: 'د.',
      specialties: ['Gynecology', 'Hysterectomy', 'PCOS', 'Women\'s Health'],
      qualifications: ['MBBS', 'MD - Obstetrics & Gynecology', 'Fellowship - Minimal Access Surgery'],
      experience: 16,
      languages: ['English', 'Hindi', 'Marathi', 'Kannada'],
      bio_en: 'Dr. Madhuri Burande specializes in laparoscopic hysterectomy and PCOS management. Expert in robotic gynecologic surgery. Performed 4,500+ minimally invasive gynecologic procedures with excellent outcomes.',
      bio_ar: 'د. مادهوري بوراندي متخصصة في استئصال الرحم بالمنظار وإدارة PCOS.',
      consultationFee: 85,
      available: true,
      published: true,
      featured: true,
      rating: 4.8,
      reviewCount: 1240,
    },
    {
      slug: 'dr-gayathri-kamath',
      hospitalSlug: 'cloudnine-hospital-bangalore',
      name_en: 'Dr. Gayathri Kamath',
      name_ar: 'د. غاياثري كاماث',
      title_en: 'Dr.',
      title_ar: 'د.',
      specialties: ['Fertility', 'Egg Freezing', 'IVF', 'Embryology'],
      qualifications: ['MBBS', 'MD - Obstetrics & Gynecology', 'Fellowship - Reproductive Medicine & IVF'],
      experience: 11,
      languages: ['English', 'Hindi', 'Kannada', 'Tamil'],
      bio_en: 'Dr. Gayathri Kamath specializes in egg freezing and fertility preservation. Expert in embryo cryopreservation with vitrification technique. Helped 2,000+ women preserve fertility with 72% success rate.',
      bio_ar: 'د. غاياثري كاماث متخصصة في تجميد البويضات والحفاظ على الخصوبة.',
      consultationFee: 80,
      available: true,
      published: true,
      featured: false,
      rating: 4.8,
      reviewCount: 680,
    },
  ];

  for (const doctor of doctors) {
    const hospital = await prisma.hospital.findUnique({
      where: { slug: doctor.hospitalSlug },
    });
    if (hospital) {
      await prisma.doctor.upsert({
        where: { slug: doctor.slug },
        update: {},
        create: {
          slug: doctor.slug,
          hospitalId: hospital.id,
          name_en: doctor.name_en,
          name_ar: doctor.name_ar,
          title_en: doctor.title_en,
          title_ar: doctor.title_ar,
          specialties: doctor.specialties,
          qualifications: doctor.qualifications,
          experience: doctor.experience,
          languages: doctor.languages,
          bio_en: doctor.bio_en,
          bio_ar: doctor.bio_ar,
          consultationFee: doctor.consultationFee,
          available: doctor.available,
          published: doctor.published,
          featured: doctor.featured,
          rating: doctor.rating,
          reviewCount: doctor.reviewCount,
        },
      });
      console.log(`✅ Created doctor: ${doctor.name_en}`);
    }
  }

  // Create Packages
  const packages = [
    {
      slug: 'heart-surgery-package',
      name_en: 'Complete Heart Surgery Package',
      name_ar: 'باقة جراحة القلب الكاملة',
      treatmentSlug: 'heart-surgery',
      hospitalSlug: 'apollo-hospital-mumbai',
      items_en: [
        'Pre-surgery consultation and evaluation',
        'Cardiac surgery (CABG/Valve Replacement)',
        '7 days ICU care',
        '10 days hospital stay',
        'Post-surgery follow-up consultations',
        'All diagnostic tests and imaging',
        'Medications during hospital stay',
        'Airport pickup and drop',
        '24/7 medical support',
        'Visa assistance',
      ],
      items_ar: [
        'استشارة وتقييم ما قبل الجراحة',
        'جراحة القلب',
        '7 أيام في العناية المركزة',
        '10 أيام إقامة في المستشفى',
        'استشارات متابعة ما بعد الجراحة',
      ],
      priceEstimate: 8500,
      currency: 'USD',
      durationDays: 14,
      description_en:
        'Our comprehensive heart surgery package includes everything from pre-surgery evaluation to post-operative care. Performed by experienced cardiac surgeons at JCI-accredited Apollo Hospital Mumbai with state-of-the-art facilities.',
      description_ar: 'باقة جراحة القلب الشاملة تشمل كل شيء من التقييم قبل الجراحة إلى الرعاية بعد العملية.',
      published: true,
      featured: true,
    },
    {
      slug: 'knee-replacement-package',
      name_en: 'Total Knee Replacement Package',
      name_ar: 'باقة استبدال الركبة الكاملة',
      treatmentSlug: 'knee-replacement',
      hospitalSlug: 'manipal-hospital-bangalore',
      items_en: [
        'Orthopedic consultation and X-rays',
        'Total knee replacement surgery',
        'Premium knee implant',
        '5 days hospital stay',
        'Physiotherapy sessions (10 sessions)',
        'Post-surgery medications',
        'Follow-up consultations',
        'Airport transfers',
        'Accommodation assistance',
        'Medical coordinator support',
      ],
      items_ar: [
        'استشارة جراحة العظام والأشعة السينية',
        'جراحة استبدال الركبة الكاملة',
        'زرع ركبة ممتاز',
        '5 أيام إقامة في المستشفى',
        'جلسات العلاج الطبيعي',
      ],
      priceEstimate: 6000,
      currency: 'USD',
      durationDays: 10,
      description_en:
        'Complete knee replacement package with premium implants and robotic-assisted surgery. Includes comprehensive physiotherapy program for faster recovery at Manipal Hospital Bangalore.',
      description_ar: 'باقة استبدال الركبة الكاملة مع زراعات ممتازة وجراحة بمساعدة الروبوت.',
      published: true,
      featured: true,
    },
    {
      slug: 'ivf-fertility-package',
      name_en: 'IVF & Fertility Treatment Package',
      name_ar: 'باقة التلقيح الصناعي وعلاج الخصوبة',
      treatmentSlug: 'ivf',
      hospitalSlug: 'manipal-hospital-bangalore',
      items_en: [
        'Fertility specialist consultation',
        'Complete fertility assessment (both partners)',
        'Hormone testing and ultrasounds',
        'IVF/ICSI procedure',
        'Embryo transfer',
        'Pregnancy test and follow-up',
        'Medications and injections',
        'Accommodation for 3 weeks',
        'Airport transfers',
        'Counseling support',
      ],
      items_ar: [
        'استشارة أخصائي الخصوبة',
        'تقييم الخصوبة الكامل',
        'اختبار الهرمونات والموجات فوق الصوتية',
        'إجراء التلقيح الصناعي',
        'نقل الأجنة',
      ],
      priceEstimate: 4500,
      currency: 'USD',
      durationDays: 21,
      description_en:
        'Comprehensive IVF package with high success rates (65%). Includes complete fertility evaluation, IVF procedure, and post-procedure care by experienced fertility specialists at Manipal Hospital.',
      description_ar: 'باقة التلقيح الصناعي الشاملة بمعدلات نجاح عالية.',
      published: true,
      featured: true,
    },
  ];

  for (const pkg of packages) {
    const treatment = await prisma.treatment.findUnique({
      where: { slug: pkg.treatmentSlug },
    });
    const hospital = await prisma.hospital.findUnique({
      where: { slug: pkg.hospitalSlug },
    });

    if (treatment && hospital) {
      await prisma.package.upsert({
        where: { slug: pkg.slug },
        update: {},
        create: {
          slug: pkg.slug,
          name_en: pkg.name_en,
          name_ar: pkg.name_ar,
          treatmentId: treatment.id,
          hospitalId: hospital.id,
          items_en: pkg.items_en,
          items_ar: pkg.items_ar,
          priceEstimate: pkg.priceEstimate,
          currency: pkg.currency,
          durationDays: pkg.durationDays,
          description_en: pkg.description_en,
          description_ar: pkg.description_ar,
          published: pkg.published,
          featured: pkg.featured,
        },
      });
      console.log(`✅ Created package: ${pkg.name_en}`);
    }
  }

  console.log('✅ Seeding completed successfully!');
  console.log('📊 Database summary:');
  console.log(`   - Countries: ${await prisma.country.count()}`);
  console.log(`   - Cities: ${await prisma.city.count()}`);
  console.log(`   - Treatments: ${await prisma.treatment.count()}`);
  console.log(`   - Hospitals: ${await prisma.hospital.count()}`);
  console.log(`   - Doctors: ${await prisma.doctor.count()}`);
  console.log(`   - Packages: ${await prisma.package.count()}`);
  console.log(`   - Articles: ${await prisma.article.count()}`);
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

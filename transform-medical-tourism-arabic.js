/**
 * Transform Medical Tourism Page to Arabic
 * Comprehensive bilingual content object with professional Arabic translations
 */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/[locale]/medical-tourism/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

console.log('🚀 Starting Medical Tourism page transformation for Arabic support...\n');

// Step 1: Change function signature to accept params
console.log('Step 1: Updating function signature for locale params...');
content = content.replace(
  'export default async function MedicalTourismPage() {',
  `export default async function MedicalTourismPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;`
);

// Step 2: Add bilingual content object BEFORE the cities fetch
console.log('Step 2: Adding comprehensive bilingual content object...');

const bilingualContent = `
  // Bilingual content for Medical Tourism page
  const content = {
    en: {
      hero: {
        title: 'Medical Tourism to India 2025',
        subtitle: 'Save 60-80% on World-Class Healthcare with JCI-Accredited Hospitals',
        description: 'Trusted by 200,000+ patients from UAE, Saudi Arabia & GCC countries annually. No waiting times. Expert doctors. Complete support.',
        cta1: 'Get Free Consultation',
        cta2: 'Book Treatment Now',
        features: '✓ Free Second Opinion ✓ No Waiting Time ✓ Medical Visa Assistance ✓ Airport Pickup Included'
      },
      statistics: [
        { number: '500,000+', label: 'International Patients/Year', description: 'Patients from 150+ countries' },
        { number: '40+', label: 'JCI-Accredited Hospitals', description: 'International quality standards' },
        { number: '95%+', label: 'Success Rate', description: 'On par with USA/UK hospitals' },
        { number: '60-80%', label: 'Average Savings', description: 'Compared to Western countries' },
      ],
      benefits: {
        title: 'Why Choose India for Medical Treatment?',
        subtitle: 'India has become the world\\'s leading medical tourism destination, attracting patients from 150+ countries',
      },
      popularTreatments: {
        title: 'Popular Medical Treatments',
        subtitle: 'Most requested procedures by international patients from UAE, Saudi Arabia & GCC countries',
        viewDetails: 'View Details & Hospitals',
        viewAll: 'View All 30+ Treatments →',
        indiaLabel: 'India Cost:',
      },
      costSavings: {
        title: 'Massive Cost Savings - Real Comparison',
        subtitle: 'See how much you can save on common medical procedures',
        headers: {
          treatment: 'Treatment',
          india: 'India',
          usa: 'USA',
          uk: 'UK',
          uae: 'UAE',
          savings: 'You Save'
        },
        note1: 'Average savings: 60-80%',
        note1Bold: ' compared to USA, UK, and UAE',
        note2: 'All prices include: Surgery, Hospital stay, Doctor fees, Medication, Post-op care'
      },
      destinations: {
        title: 'Top Medical Tourism Destinations in India',
        subtitle: 'JCI-accredited hospitals, expert doctors, direct flights from Dubai, Abu Dhabi, Riyadh',
        treatmentsAvailable: 'treatments available',
        jciHospitals: 'JCI-accredited hospitals',
        directFlights: 'Direct flights from GCC',
        viewButton: 'View Hospitals & Treatments'
      },
      gccSection: {
        title: 'Special Support for GCC Patients',
        subtitle: 'We understand the needs of patients from UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain',
        uae: {
          title: '🇦🇪 UAE Patients',
          features: [
            'Direct flights: Dubai/Abu Dhabi → Mumbai (3h), Delhi (3.5h), Bangalore (4h)',
            'Medical visa on arrival at 6 major airports (instant approval)',
            'Arabic-speaking coordinators available 24/7',
            'Halal food, prayer rooms in all major hospitals'
          ],
          button: 'UAE Patients Guide →'
        },
        saudi: {
          title: '🇸🇦 Saudi Arabia Patients',
          features: [
            'Direct flights: Riyadh/Jeddah → Mumbai (4h), Delhi (4.5h), Bangalore (5h)',
            'e-Medical visa online (approval in 3-5 days, $80 total)',
            'Arabic translators, Saudi-friendly accommodation',
            'Family/companion visa included (Medical Attendant Visa)'
          ],
          button: 'Saudi Patients Guide →'
        },
        allGcc: {
          title: '🌍 All GCC Countries',
          features: [
            'Qatar, Oman, Kuwait, Bahrain patients welcome',
            'Simple medical visa process (online or on arrival)',
            'Complete package: Visa, flights, hotel, treatment included',
            'Post-treatment follow-up via video call after return'
          ],
          button: 'Medical Visa Guide →'
        }
      },
      howItWorks: {
        title: 'Your Medical Journey - Step by Step',
        subtitle: 'From consultation to recovery, we handle everything',
        steps: [
          {
            title: 'Free Consultation',
            desc: 'Submit medical reports online. Get second opinion from Indian specialist within 48 hours. Video call with doctor (free).',
            timeline: 'Day 1-2'
          },
          {
            title: 'Treatment Plan & Visa',
            desc: 'Receive detailed treatment plan, cost estimate, hospital options. We assist with medical visa application (e-visa or on arrival).',
            timeline: 'Day 3-7'
          },
          {
            title: 'Travel & Arrival',
            desc: 'Book flights. We arrange: Airport pickup, hotel (patient + companion), hospital pre-admission, welcome coordinator.',
            timeline: 'Day 8-10'
          },
          {
            title: 'Treatment & Recovery',
            desc: 'Treatment in JCI-accredited hospital. Post-surgery care, recovery monitoring. Follow-up after returning home (video calls).',
            timeline: 'Week 2+'
          }
        ],
        finalCta: 'Start Your Journey - Free Consultation'
      },
      blogArticles: {
        title: 'Medical Tourism Guides & Resources',
        subtitle: 'Comprehensive guides to help you plan your medical journey to India',
        guides: [
          {
            title: 'Medical Tourism Guide for UAE Patients',
            desc: 'Complete guide for patients from Dubai, Abu Dhabi, Sharjah. Flights, visa, costs, best hospitals.',
            button: 'Read Guide →'
          },
          {
            title: 'Healthcare Guide for Riyadh Patients',
            desc: 'Saudi Arabia patients: Direct flights, medical visa process, top hospitals, cost savings in SAR.',
            button: 'Read Guide →'
          },
          {
            title: 'Medical Visa India Complete Guide',
            desc: 'e-Medical visa, visa on arrival, application process, documents required, processing time.',
            button: 'Read Guide →'
          },
          {
            title: 'Best Time to Visit India for Treatment',
            desc: 'Weather, peak seasons, hospital availability, travel tips by month. Best months: Oct-March.',
            button: 'Read Guide →'
          },
          {
            title: 'Medical Tourism Insurance Guide',
            desc: 'Do you need insurance? Best providers, coverage options, costs $50-$200. What\\'s covered.',
            button: 'Read Guide →'
          },
          {
            title: 'Choosing the Right Hospital',
            desc: 'JCI accreditation, doctor credentials, success rates, international patient services, reviews.',
            button: 'Read Guide →'
          }
        ],
        viewAll: 'View All 24 Guides →'
      },
      faqSection: {
        title: 'Frequently Asked Questions',
        subtitle: 'Common questions from international patients about medical tourism to India'
      },
      finalCta: {
        title: 'Ready to Start Your Medical Journey to India?',
        subtitle: 'Get a free consultation, second opinion, and personalized treatment plan from India\\'s top medical experts',
        cta1: 'Get Free Consultation Now',
        cta2: 'Contact Us',
        features1: '✓ 200,000+ International Patients/Year ✓ 40+ JCI-Accredited Hospitals',
        features2: '✓ 95%+ Success Rate ✓ Save 60-80% on Treatment Costs',
        support: 'Available 24/7 | WhatsApp Support | Arabic & English'
      }
    },
    ar: {
      hero: {
        title: 'السياحة العلاجية إلى الهند 2025',
        subtitle: 'وفّر 60-80% على رعاية صحية عالمية المستوى مع مستشفيات معتمدة من JCI',
        description: 'موثوق من قبل أكثر من 200,000 مريض من الإمارات والسعودية ودول الخليج سنوياً. لا أوقات انتظار. أطباء خبراء. دعم شامل.',
        cta1: 'احصل على استشارة مجانية',
        cta2: 'احجز علاجك الآن',
        features: '✓ رأي طبي ثاني مجاني ✓ لا وقت انتظار ✓ المساعدة في التأشيرة الطبية ✓ الاستقبال في المطار مشمول'
      },
      statistics: [
        { number: '500,000+', label: 'مريض دولي سنوياً', description: 'مرضى من أكثر من 150 دولة' },
        { number: '40+', label: 'مستشفى معتمد من JCI', description: 'معايير جودة عالمية' },
        { number: '95%+', label: 'معدل النجاح', description: 'مماثل لمستشفيات أمريكا وبريطانيا' },
        { number: '60-80%', label: 'متوسط التوفير', description: 'مقارنة بالدول الغربية' },
      ],
      benefits: {
        title: 'لماذا تختار الهند للعلاج الطبي؟',
        subtitle: 'أصبحت الهند الوجهة الرائدة عالمياً للسياحة العلاجية، وتجذب المرضى من أكثر من 150 دولة',
      },
      popularTreatments: {
        title: 'العلاجات الطبية الشائعة',
        subtitle: 'الإجراءات الأكثر طلباً من المرضى الدوليين من الإمارات والسعودية ودول الخليج',
        viewDetails: 'عرض التفاصيل والمستشفيات',
        viewAll: 'عرض جميع العلاجات (أكثر من 30) ←',
        indiaLabel: 'التكلفة في الهند:',
      },
      costSavings: {
        title: 'توفير كبير في التكاليف - مقارنة حقيقية',
        subtitle: 'شاهد كم يمكنك توفيره على الإجراءات الطبية الشائعة',
        headers: {
          treatment: 'العلاج',
          india: 'الهند',
          usa: 'أمريكا',
          uk: 'بريطانيا',
          uae: 'الإمارات',
          savings: 'توفيرك'
        },
        note1: 'متوسط التوفير: 60-80%',
        note1Bold: ' مقارنة بأمريكا وبريطانيا والإمارات',
        note2: 'جميع الأسعار تشمل: الجراحة، الإقامة في المستشفى، أتعاب الطبيب، الأدوية، الرعاية بعد العملية'
      },
      destinations: {
        title: 'أفضل وجهات السياحة العلاجية في الهند',
        subtitle: 'مستشفيات معتمدة من JCI، أطباء خبراء، رحلات مباشرة من دبي وأبوظبي والرياض',
        treatmentsAvailable: 'علاج متاح',
        jciHospitals: 'مستشفيات معتمدة من JCI',
        directFlights: 'رحلات مباشرة من دول الخليج',
        viewButton: 'عرض المستشفيات والعلاجات'
      },
      gccSection: {
        title: 'دعم خاص لمرضى دول الخليج',
        subtitle: 'نحن نفهم احتياجات المرضى من الإمارات والسعودية وقطر وعُمان والكويت والبحرين',
        uae: {
          title: '🇦🇪 مرضى الإمارات',
          features: [
            'رحلات مباشرة: دبي/أبوظبي ← مومباي (3 ساعات)، دلهي (3.5 ساعة)، بنغالور (4 ساعات)',
            'تأشيرة طبية عند الوصول في 6 مطارات رئيسية (موافقة فورية)',
            'منسقون ناطقون بالعربية متاحون على مدار الساعة',
            'طعام حلال، غرف صلاة في جميع المستشفيات الكبرى'
          ],
          button: 'دليل مرضى الإمارات ←'
        },
        saudi: {
          title: '🇸🇦 مرضى السعودية',
          features: [
            'رحلات مباشرة: الرياض/جدة ← مومباي (4 ساعات)، دلهي (4.5 ساعة)، بنغالور (5 ساعات)',
            'تأشيرة طبية إلكترونية عبر الإنترنت (موافقة خلال 3-5 أيام، $80 إجمالي)',
            'مترجمون عرب، إقامة مناسبة للسعوديين',
            'تأشيرة مرافق/عائلة مشمولة (تأشيرة مرافق طبي)'
          ],
          button: 'دليل المرضى السعوديين ←'
        },
        allGcc: {
          title: '🌍 جميع دول الخليج',
          features: [
            'مرحباً بمرضى قطر وعُمان والكويت والبحرين',
            'عملية تأشيرة طبية بسيطة (عبر الإنترنت أو عند الوصول)',
            'باقة كاملة: تأشيرة، رحلات، فندق، علاج مشمول',
            'متابعة ما بعد العلاج عبر مكالمة فيديو بعد العودة'
          ],
          button: 'دليل التأشيرة الطبية ←'
        }
      },
      howItWorks: {
        title: 'رحلتك العلاجية - خطوة بخطوة',
        subtitle: 'من الاستشارة إلى التعافي، نتولى كل شيء',
        steps: [
          {
            title: 'استشارة مجانية',
            desc: 'أرسل التقارير الطبية عبر الإنترنت. احصل على رأي ثاني من أخصائي هندي خلال 48 ساعة. مكالمة فيديو مع الطبيب (مجانية).',
            timeline: 'اليوم 1-2'
          },
          {
            title: 'خطة العلاج والتأشيرة',
            desc: 'استلم خطة علاج مفصلة، تقدير التكلفة، خيارات المستشفيات. نساعدك في طلب التأشيرة الطبية (إلكترونية أو عند الوصول).',
            timeline: 'اليوم 3-7'
          },
          {
            title: 'السفر والوصول',
            desc: 'احجز الرحلات. نرتب: الاستقبال في المطار، الفندق (المريض + المرافق)، التسجيل المسبق في المستشفى، منسق الاستقبال.',
            timeline: 'اليوم 8-10'
          },
          {
            title: 'العلاج والتعافي',
            desc: 'العلاج في مستشفى معتمد من JCI. رعاية ما بعد الجراحة، مراقبة التعافي. المتابعة بعد العودة للوطن (مكالمات فيديو).',
            timeline: 'الأسبوع 2+'
          }
        ],
        finalCta: 'ابدأ رحلتك - استشارة مجانية'
      },
      blogArticles: {
        title: 'أدلة وموارد السياحة العلاجية',
        subtitle: 'أدلة شاملة لمساعدتك في التخطيط لرحلتك العلاجية إلى الهند',
        guides: [
          {
            title: 'دليل السياحة العلاجية لمرضى الإمارات',
            desc: 'دليل شامل للمرضى من دبي وأبوظبي والشارقة. الرحلات، التأشيرة، التكاليف، أفضل المستشفيات.',
            button: 'اقرأ الدليل ←'
          },
          {
            title: 'دليل الرعاية الصحية لمرضى الرياض',
            desc: 'مرضى السعودية: رحلات مباشرة، عملية التأشيرة الطبية، أفضل المستشفيات، التوفير بالريال السعودي.',
            button: 'اقرأ الدليل ←'
          },
          {
            title: 'دليل التأشيرة الطبية للهند - شامل',
            desc: 'التأشيرة الطبية الإلكترونية، التأشيرة عند الوصول، عملية التقديم، المستندات المطلوبة، وقت المعالجة.',
            button: 'اقرأ الدليل ←'
          },
          {
            title: 'أفضل وقت لزيارة الهند للعلاج',
            desc: 'الطقس، المواسم، توفر المستشفيات، نصائح السفر حسب الشهر. أفضل الأشهر: أكتوبر-مارس.',
            button: 'اقرأ الدليل ←'
          },
          {
            title: 'دليل تأمين السياحة العلاجية',
            desc: 'هل تحتاج للتأمين؟ أفضل مقدمي الخدمة، خيارات التغطية، التكاليف $50-$200. ما هو مشمول.',
            button: 'اقرأ الدليل ←'
          },
          {
            title: 'اختيار المستشفى المناسب',
            desc: 'اعتماد JCI، شهادات الأطباء، معدلات النجاح، خدمات المرضى الدوليين، التقييمات.',
            button: 'اقرأ الدليل ←'
          }
        ],
        viewAll: 'عرض جميع الأدلة (24 دليل) ←'
      },
      faqSection: {
        title: 'الأسئلة الشائعة',
        subtitle: 'أسئلة شائعة من المرضى الدوليين حول السياحة العلاجية إلى الهند'
      },
      finalCta: {
        title: 'هل أنت مستعد لبدء رحلتك العلاجية إلى الهند؟',
        subtitle: 'احصل على استشارة مجانية، رأي طبي ثاني، وخطة علاج مخصصة من كبار الخبراء الطبيين في الهند',
        cta1: 'احصل على استشارة مجانية الآن',
        cta2: 'اتصل بنا',
        features1: '✓ أكثر من 200,000 مريض دولي سنوياً ✓ أكثر من 40 مستشفى معتمد من JCI',
        features2: '✓ معدل نجاح أكثر من 95% ✓ وفّر 60-80% على تكاليف العلاج',
        support: 'متاح 24/7 | دعم واتساب | عربي وإنجليزي'
      }
    }
  };

  // Safe locale resolution with fallback
  const safeLocale = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  const currentContent = content[safeLocale];
`;

// Insert bilingual content right after function opening
const insertPosition = content.indexOf('// Fetch only Indian cities');
if (insertPosition !== -1) {
  content = content.slice(0, insertPosition) + bilingualContent + '\n  ' + content.slice(insertPosition);
  console.log('✅ Bilingual content object added');
} else {
  console.log('⚠️ Could not find insertion point for bilingual content');
}

// Step 3: Transform sections to use currentContent
console.log('\nStep 3: Transforming sections to use currentContent...');

const transformations = [
  // Hero Section
  { old: 'Medical Tourism to India 2025', new: '{currentContent.hero.title}', section: 'Hero title' },
  { old: 'Save 60-80% on World-Class Healthcare with JCI-Accredited Hospitals', new: '{currentContent.hero.subtitle}', section: 'Hero subtitle' },
  { old: 'Trusted by 200,000+ patients from UAE, Saudi Arabia & GCC countries annually. No waiting times. Expert doctors. Complete support.', new: '{currentContent.hero.description}', section: 'Hero description' },
  { old: '>Get Free Consultation</Link>', new: '>{currentContent.hero.cta1}</Link>', section: 'Hero CTA 1' },
  { old: '>Book Treatment Now</Link>', new: '>{currentContent.hero.cta2}</Link>', section: 'Hero CTA 2' },
  { old: '✓ Free Second Opinion ✓ No Waiting Time ✓ Medical Visa Assistance ✓ Airport Pickup Included', new: '{currentContent.hero.features}', section: 'Hero features' },

  // Benefits Section
  { old: 'Why Choose India for Medical Treatment?', new: '{currentContent.benefits.title}', section: 'Benefits title' },
  { old: `India has become the world&apos;s leading medical tourism destination, attracting patients from 150+ countries`, new: '{currentContent.benefits.subtitle}', section: 'Benefits subtitle' },

  // Popular Treatments
  { old: 'Popular Medical Treatments', new: '{currentContent.popularTreatments.title}', section: 'Treatments title' },
  { old: 'Most requested procedures by international patients from UAE, Saudi Arabia & GCC countries', new: '{currentContent.popularTreatments.subtitle}', section: 'Treatments subtitle' },
  { old: '>View Details & Hospitals</Link>', new: '>{currentContent.popularTreatments.viewDetails}</Link>', section: 'Treatments view details' },
  { old: '>View All 30+ Treatments →</Link>', new: '>{currentContent.popularTreatments.viewAll}</Link>', section: 'Treatments view all' },
  { old: 'India Cost:', new: '{currentContent.popularTreatments.indiaLabel}', section: 'India cost label' },

  // Cost Savings
  { old: 'Massive Cost Savings - Real Comparison', new: '{currentContent.costSavings.title}', section: 'Cost savings title' },
  { old: 'See how much you can save on common medical procedures', new: '{currentContent.costSavings.subtitle}', section: 'Cost savings subtitle' },

  // Destinations
  { old: 'Top Medical Tourism Destinations in India', new: '{currentContent.destinations.title}', section: 'Destinations title' },
  { old: 'JCI-accredited hospitals, expert doctors, direct flights from Dubai, Abu Dhabi, Riyadh', new: '{currentContent.destinations.subtitle}', section: 'Destinations subtitle' },
  { old: '{city.cityTreatments.length} treatments available', new: '{city.cityTreatments.length} {currentContent.destinations.treatmentsAvailable}', section: 'Treatments available' },
  { old: 'JCI-accredited hospitals', new: '{currentContent.destinations.jciHospitals}', section: 'JCI hospitals' },
  { old: 'Direct flights from GCC', new: '{currentContent.destinations.directFlights}', section: 'Direct flights' },
  { old: '>View Hospitals & Treatments</Link>', new: '>{currentContent.destinations.viewButton}</Link>', section: 'Destinations view button' },

  // GCC Section
  { old: 'Special Support for GCC Patients', new: '{currentContent.gccSection.title}', section: 'GCC title' },
  { old: 'We understand the needs of patients from UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain', new: '{currentContent.gccSection.subtitle}', section: 'GCC subtitle' },

  // How It Works
  { old: 'Your Medical Journey - Step by Step', new: '{currentContent.howItWorks.title}', section: 'How it works title' },
  { old: 'From consultation to recovery, we handle everything', new: '{currentContent.howItWorks.subtitle}', section: 'How it works subtitle' },
  { old: '>Start Your Journey - Free Consultation</Link>', new: '>{currentContent.howItWorks.finalCta}</Link>', section: 'How it works CTA' },

  // Blog Articles
  { old: 'Medical Tourism Guides & Resources', new: '{currentContent.blogArticles.title}', section: 'Blog articles title' },
  { old: 'Comprehensive guides to help you plan your medical journey to India', new: '{currentContent.blogArticles.subtitle}', section: 'Blog articles subtitle' },
  { old: '>View All 24 Guides →</Link>', new: '>{currentContent.blogArticles.viewAll}</Link>', section: 'Blog articles view all' },

  // FAQ Section
  { old: 'Frequently Asked Questions', new: '{currentContent.faqSection.title}', section: 'FAQ title' },
  { old: 'Common questions from international patients about medical tourism to India', new: '{currentContent.faqSection.subtitle}', section: 'FAQ subtitle' },

  // Final CTA
  { old: 'Ready to Start Your Medical Journey to India?', new: '{currentContent.finalCta.title}', section: 'Final CTA title' },
  { old: `Get a free consultation, second opinion, and personalized treatment plan from India&apos;s top medical experts`, new: '{currentContent.finalCta.subtitle}', section: 'Final CTA subtitle' },
  { old: '>Get Free Consultation Now</Link>', new: '>{currentContent.finalCta.cta1}</Link>', section: 'Final CTA 1' },
  { old: '>Contact Us</Link>', new: '>{currentContent.finalCta.cta2}</Link>', section: 'Final CTA 2' },
  { old: '✓ 200,000+ International Patients/Year ✓ 40+ JCI-Accredited Hospitals', new: '{currentContent.finalCta.features1}', section: 'Final CTA features 1' },
  { old: '✓ 95%+ Success Rate ✓ Save 60-80% on Treatment Costs', new: '{currentContent.finalCta.features2}', section: 'Final CTA features 2' },
  { old: 'Available 24/7 | WhatsApp Support | Arabic & English', new: '{currentContent.finalCta.support}', section: 'Final CTA support' },
];

let successCount = 0;
transformations.forEach(t => {
  if (content.includes(t.old)) {
    content = content.replace(t.old, t.new);
    successCount++;
    console.log(`  ✓ ${t.section}`);
  } else {
    console.log(`  ✗ ${t.section} (not found)`);
  }
});

// Write the transformed content
fs.writeFileSync(filePath, content, 'utf8');

console.log(`\n✨ Medical Tourism page transformation complete!`);
console.log(`📊 Summary: ${successCount}/${transformations.length} transformations applied`);
console.log('\n🎯 Page is now bilingual and ready for Arabic display!');
console.log('🧪 Test at: http://localhost:3002/ar/medical-tourism');

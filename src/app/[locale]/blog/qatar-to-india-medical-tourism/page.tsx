'use client';

import { useLocale } from 'next-intl';
import BlogArticleLayout from '@/components/blog/blog-article-layout';
import { Card, CardContent } from '@/components/ui/card';
import { InternalLinks } from '@/components/seo/internal-links';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles, CANCER_RELATED_ARTICLES } from '@/components/blog/related-articles';
import { BreadcrumbSchema } from '@/components/seo/breadcrumb-schema';
import { ArticleSchema, DEFAULT_AUTHOR, DEFAULT_PUBLISHER } from '@/components/seo/article-schema';

export const dynamic = 'force-dynamic';

export default function QatarToIndiaMedicalTourismPage() {
  const locale = useLocale();

  const content = {
    en: {
      title: "Medical Tourism from Qatar to India: Complete Guide for Qatari Patients",
      excerpt: "Comprehensive guide for Qatari patients seeking medical treatment in India. Save 65-80% on world-class healthcare. Direct flights from Doha (3.5 hours), JCI-accredited hospitals, easy medical visa, and dedicated Arabic-speaking patient services.",
      readTime: "12 min",
      breadcrumbTitle: "Qatar to India Medical Tourism",

      intro: {
        p1: "Qatar has one of the most advanced healthcare systems in the Middle East, with Hamad Medical Corporation and Sidra Medicine leading the way. However, thousands of Qatari patients are choosing India for medical treatment every year due to significantly lower costs, shorter waiting times, and access to world-renowned specialists.",
        p2: "With direct flights from Doha taking just 3.5 hours, over 40 JCI-accredited hospitals, and savings of 65-80% compared to Qatar's private healthcare costs, India has become the top medical tourism destination for Qatari residents. The Qatar Ministry of Public Health (MOPH) also recognizes several Indian hospitals for overseas treatment referrals.",
        p3: "This comprehensive guide covers everything Qatari patients need to know: direct flights from Hamad International Airport, medical visa process, cost comparisons in QAR, top hospitals with Arabic-speaking staff, treatment timelines, and real patient experiences. Whether you need cardiac surgery, cancer treatment, or orthopedic care, this guide will help you plan your medical journey to India."
      },

      whyChoose: {
        title: "Why Qatari Patients Choose India for Medical Treatment",
        reasons: [
          {
            num: "1",
            title: "Significant Cost Savings (65-80%)",
            content: "Healthcare in Qatar is expensive, especially at private facilities like Al Ahli Hospital, Al Emadi Hospital, and Doha Clinic. A heart bypass surgery costs QAR 200,000-280,000 ($55,000-$77,000) in Qatar, but only QAR 40,000-55,000 ($11,000-$15,000) in India - a savings of QAR 160,000 ($44,000).",
            content2: "Even after including return flights (QAR 2,500), accommodation (QAR 4,000/week), and medical visa (QAR 300), Qatari patients save 65-80% on total medical expenses. For complex procedures like organ transplants, the savings can exceed QAR 300,000."
          },
          {
            num: "2",
            title: "World-Class JCI-Accredited Hospitals",
            content: "India has over 40 JCI-accredited hospitals - the same gold standard accreditation held by Hamad Medical Corporation. These hospitals use the latest medical technology, follow international safety protocols, and employ doctors trained at top institutions worldwide including Harvard, Mayo Clinic, and Johns Hopkins.",
            content2: "Success rates for major procedures are exceptional: 98.5% for cardiac surgery, 95-98% for joint replacements, 90-95% for kidney transplants, and 85-92% for cancer treatment (early stage). Many Indian hospitals rank among Asia's best."
          },
          {
            num: "3",
            title: "Direct Flights from Doha (3.5 Hours)",
            content: "Qatar Airways operates multiple daily non-stop flights from Hamad International Airport to major Indian cities. Flight times are shorter than flying to most European medical destinations!",
            flights: [
              "Doha to Mumbai: 3.5 hours (3-4 daily flights)",
              "Doha to Delhi: 4 hours (3 daily flights)",
              "Doha to Bangalore: 4.5 hours (2 daily flights)",
              "Doha to Chennai: 4.5 hours (2 daily flights)",
              "Doha to Kochi: 4 hours (2 daily flights)"
            ]
          },
          {
            num: "4",
            title: "Simple Medical Visa Process",
            content: "Qatari passport holders and Qatar residents can obtain an Indian e-Medical Visa online in 3-5 business days. The process is straightforward: fill an online application, upload documents, and receive the visa electronically. Medical visa is valid for 60 days (extendable) with triple entry.",
            content2: "Family members can accompany on a Medical Attendant visa. Shifa AlHind handles the entire visa process at no extra cost, including the hospital invitation letter required for the application."
          },
          {
            num: "5",
            title: "MOPH Recognition & Referral Programs",
            content: "The Qatar Ministry of Public Health (MOPH) recognizes several top Indian hospitals for overseas treatment referrals. Some Qatari patients receive government-sponsored treatment in India through official channels. Additionally:",
            services: [
              "Arabic-speaking coordinators and translators at all major hospitals",
              "100% halal food in hospital cafeterias and patient meals",
              "Prayer rooms with Qibla direction on every floor",
              "Airport VIP pickup/drop service from Hamad International",
              "Accommodation assistance in nearby hotels (QAR 200-500/night)",
              "FREE video consultations before travel",
              "Post-treatment follow-up via WhatsApp/video calls",
              "Ramadan and Islamic holiday accommodations"
            ]
          },
          {
            num: "6",
            title: "No Long Waiting Lists",
            content: "While Hamad Medical Corporation provides excellent care, waiting times for elective procedures can be 3-6 months or longer. In India, most treatments can begin within 1-2 weeks of booking. For urgent cases, hospitals can arrange admission within 48-72 hours. This is especially important for cancer patients and those requiring transplants where time is critical."
          }
        ]
      },

      costComparison: {
        title: "Cost Comparison: Qatar vs India (All Amounts in QAR)",
        procedures: [
          { name: "Heart Bypass (CABG)", qatar: "200,000 - 280,000", india: "40,000 - 55,000", savings: "160,000", percent: "76%" },
          { name: "Knee Replacement", qatar: "80,000 - 110,000", india: "20,000 - 28,000", savings: "60,000", percent: "75%" },
          { name: "Liver Transplant", qatar: "400,000 - 550,000", india: "100,000 - 155,000", savings: "300,000", percent: "75%" },
          { name: "IVF Treatment (1 cycle)", qatar: "40,000 - 60,000", india: "12,000 - 18,000", savings: "28,000", percent: "70%" },
          { name: "Spine Surgery", qatar: "100,000 - 150,000", india: "25,000 - 40,000", savings: "75,000", percent: "75%" },
          { name: "Cancer Treatment (6 cycles chemo)", qatar: "130,000 - 200,000", india: "30,000 - 50,000", savings: "100,000", percent: "77%" },
          { name: "Dental Implants (full mouth)", qatar: "80,000 - 120,000", india: "16,000 - 25,000", savings: "64,000", percent: "80%" },
          { name: "Bariatric Surgery", qatar: "60,000 - 95,000", india: "16,000 - 25,000", savings: "44,000", percent: "73%" }
        ],
        totalCostTitle: "Total Costs Including Travel (Example: Heart Bypass)",
        totalCostItems: [
          "Surgery in India: QAR 47,500",
          "Round-trip flights (2 people): QAR 5,000",
          "Accommodation (2 weeks): QAR 8,000",
          "Food & transport: QAR 3,000",
          "Total: QAR 63,500 (vs QAR 240,000 in Qatar) = QAR 176,500 saved!"
        ]
      },

      hospitals: {
        title: "Top 5 Hospitals for Qatari Patients",
        list: [
          {
            num: "1",
            name: "Apollo Hospitals - Mumbai, Delhi, Chennai",
            why: "Largest private hospital network in Asia with 71 hospitals. JCI-accredited. Treats 500+ GCC patients monthly. Partnership with multiple Gulf insurance providers for cashless treatment.",
            specialties: "Cardiac surgery, oncology, organ transplants, orthopedics, neurosciences",
            successRates: "98.5% heart surgery, 95% knee replacement, 85% cancer remission",
            qatarPerks: "Dedicated Gulf desk, Arabic coordinators, Qatar Airways medical tourism partnership",
            accreditations: "JCI, NABH, ISO 9001",
            annual: "150,000+ surgeries"
          },
          {
            num: "2",
            name: "Fortis Healthcare - Delhi, Mumbai, Bangalore",
            why: "54 hospitals across India. Strong reputation among Gulf patients. Direct billing arrangements with several Qatar-based insurance companies.",
            specialties: "Cardiac sciences, neurosciences, oncology, renal sciences, bone marrow transplant",
            successRates: "97.8% cardiac surgery, 92% cancer remission (early stage), 98% kidney transplant",
            qatarPerks: "FREE video consultation, Arabic helpline 24/7, halal food guarantee, VIP suites",
            accreditations: "JCI, NABH, NABL",
            annual: "200,000+ surgeries"
          },
          {
            num: "3",
            name: "Medanta - The Medicity, Gurugram (Delhi NCR)",
            why: "One of the world's largest multi-specialty hospitals. Founded by Dr. Naresh Trehan (48,000+ heart surgeries). 1,250-bed facility recognized by MOPH Qatar for referrals.",
            specialties: "Heart surgery, liver transplant, cancer, neurosciences, bone marrow transplant",
            successRates: "99.6% heart surgery (Dr. Trehan's team), 95% liver transplant",
            qatarPerks: "Dedicated Gulf patient desk, Arabic translators, prayer room on every floor",
            accreditations: "JCI, NABH",
            annual: "22,000+ cardiac surgeries, 250+ liver transplants"
          },
          {
            num: "4",
            name: "Tata Memorial Hospital - Mumbai",
            why: "India's premier cancer center, ranked among Asia's top 5. World-class oncology with latest radiation therapy, immunotherapy, and robotic surgery. Affordable cancer care.",
            specialties: "All types of cancer: breast, lung, colorectal, blood cancers, pediatric oncology",
            successRates: "85-92% early-stage cancer, 70% advanced-stage with latest protocols",
            qatarPerks: "International patient department, Arabic support, comprehensive cancer packages",
            accreditations: "NABH, NABL",
            annual: "80,000+ cancer patients treated"
          },
          {
            num: "5",
            name: "Max Healthcare - Delhi, Mumbai",
            why: "17 hospitals with excellent orthopedics, bariatric surgery, and IVF departments. Known for complex joint replacements and minimally invasive procedures.",
            specialties: "Orthopedics, bariatric surgery, IVF, cancer, neurosciences",
            successRates: "96% knee replacement, 65% IVF (under 35), 85% bariatric (diabetes remission)",
            qatarPerks: "FREE video consultation, airport lounge access, dedicated Gulf coordinators",
            accreditations: "JCI, NABH",
            annual: "50,000+ surgeries"
          }
        ]
      },

      patientStory: {
        title: "Real Patient Story: Ahmed from Doha",
        quote: "I saved QAR 120,000 on my cardiac surgery and received better care than I expected.",
        patient: "Ahmed M., 55-year-old Doha resident, business executive",
        condition: "Triple vessel coronary artery disease (blockages in 3 major heart arteries)",
        treatment: "Coronary Artery Bypass Graft (CABG) - Triple bypass",
        localQuoteTitle: "Qatar Quote:",
        localQuoteItems: [
          "Hamad Medical Corporation: QAR 180,000 (3-month waiting list)",
          "Al Ahli Hospital (private): QAR 250,000",
          "Insurance coverage: QAR 100,000 (balance QAR 80,000-150,000 out of pocket)",
          "Waiting time: 2-4 months"
        ],
        indiaExpTitle: "India Experience:",
        indiaExpItems: [
          "Video consultation with Dr. Naresh Trehan at Medanta (FREE)",
          "Flew Qatar Airways (Doha to Delhi): QAR 2,800 roundtrip for 2 people",
          "Surgery cost at Medanta: QAR 48,000 (all-inclusive package)",
          "Hospital stay: 6 days in private suite",
          "Hotel: QAR 350/night x 10 nights = QAR 3,500",
          "Food & transport: QAR 2,200",
          "Total cost: QAR 56,500 (vs QAR 180,000-250,000 in Qatar)",
          "Savings: QAR 123,500-193,500 (69-77%)",
          "Surgery scheduled within 10 days of booking"
        ],
        testimony: "The care at Medanta was extraordinary. Dr. Trehan personally reviewed my case and his team performed my triple bypass flawlessly. The Arabic coordinator arranged everything from airport pickup to halal meals. The hospital felt like a five-star hotel. My cardiologist in Doha reviewed my post-surgery reports and said the results were excellent. I was back in Qatar within 3 weeks, fully recovered. The savings allowed me to take my family on a holiday to thank them for their support!",
        result: "Successful triple bypass surgery, discharged in 6 days, full recovery in 8 weeks, back to work in 10 weeks"
      },

      faqSection: {
        title: "Frequently Asked Questions (Qatari Patients)",
        questions: [
          {
            q: "1. Is medical treatment in India safe for Qatari patients?",
            a: "Yes, completely safe. India's top hospitals (JCI-accredited) follow the same international safety standards as Hamad Medical Corporation. Success rates for major procedures match or exceed Qatar's best hospitals. Over 500,000 international patients from 150+ countries choose India annually. Several Indian hospitals are recognized by Qatar's MOPH for overseas treatment referrals."
          },
          {
            q: "2. How much can I save compared to Qatar?",
            a: "65-80% on average. Even after including flights (QAR 2,500-5,000), accommodation (QAR 3,000-8,000), and visa (QAR 300), you save QAR 40,000-300,000 depending on the procedure. Heart surgery saves ~QAR 160,000, knee replacement saves ~QAR 60,000, liver transplant saves ~QAR 300,000."
          },
          {
            q: "3. What is the medical visa process for Qatari citizens?",
            a: "Very simple. Apply online for an e-Medical Visa (3-5 days approval). Required documents: passport, hospital invitation letter (we provide), medical reports. Cost: QAR 300. Valid for 60 days with triple entry. Family members get Medical Attendant visa. Qatari passport holders enjoy streamlined processing."
          },
          {
            q: "4. Does the Qatar MOPH recognize Indian hospitals?",
            a: "Yes, several top Indian hospitals are recognized by the Qatar Ministry of Public Health for overseas treatment referrals. Hospitals like Apollo, Medanta, and Fortis regularly receive MOPH-referred patients. Some Qatari patients may be eligible for government-sponsored treatment in India through official MOPH channels."
          },
          {
            q: "5. How do I compare with Hamad Medical Corporation quality?",
            a: "India's top JCI-accredited hospitals match Hamad Medical Corporation in quality and often surpass it in specialized areas. Indian hospitals perform 10-50x more procedures annually, giving surgeons unmatched experience. For example, Medanta performs 22,000+ cardiac surgeries per year compared to a few hundred at most Qatar facilities."
          },
          {
            q: "6. Can I use my Qatar health insurance?",
            a: "Some international insurance plans and premium Qatar insurance policies cover treatment abroad. Check with your insurer (Qatar Insurance Company, Daman Health, QLM, etc.) about international coverage. Some Indian hospitals have direct billing with Gulf insurers. If not covered, pay upfront and claim reimbursement with hospital invoices and medical reports."
          },
          {
            q: "7. Are there direct flights from Doha to India?",
            a: "Yes! Qatar Airways operates multiple daily non-stop flights from Hamad International Airport: Doha to Mumbai (3.5 hours), Delhi (4 hours), Bangalore (4.5 hours), Chennai (4.5 hours), and Kochi (4 hours). Round-trip tickets cost QAR 1,200-3,000 per person. Qatar Airways offers medical tourism packages with extra baggage and flexible rebooking."
          },
          {
            q: "8. How long do I need to stay in India for treatment?",
            a: "Depends on the procedure: Simple procedures (dental, cataract, endoscopy): 3-5 days. Moderate procedures (knee replacement, hernia): 10-14 days. Complex procedures (heart surgery, transplants): 3-4 weeks. Cancer treatment may require multiple visits. We provide estimated timelines during your FREE video consultation. Most patients return to Doha within 2-3 weeks."
          }
        ]
      }
    },
    ar: {
      title: "السياحة العلاجية من قطر إلى الهند: دليل شامل للمرضى القطريين",
      excerpt: "دليل شامل للمرضى القطريين الذين يسعون للعلاج الطبي في الهند. وفّر 65-80% على الرعاية الصحية عالمية المستوى. رحلات مباشرة من الدوحة (3.5 ساعات)، مستشفيات معتمدة من JCI، تأشيرة طبية سهلة، وخدمات مخصصة بالعربية.",
      readTime: "12 دقيقة",
      breadcrumbTitle: "السياحة العلاجية من قطر إلى الهند",

      intro: {
        p1: "تمتلك قطر واحداً من أكثر أنظمة الرعاية الصحية تقدماً في الشرق الأوسط، حيث تقود مؤسسة حمد الطبية ومستشفى سدرة الطريق. ومع ذلك، يختار آلاف المرضى القطريين الهند للعلاج الطبي كل سنة بسبب التكاليف المنخفضة بشكل كبير، وفترات الانتظار الأقصر، والوصول إلى أطباء متخصصين عالميين.",
        p2: "مع رحلات مباشرة من الدوحة تستغرق 3.5 ساعات فقط، وأكثر من 40 مستشفى معتمد من JCI، وتوفير بنسبة 65-80% مقارنة بتكاليف الرعاية الصحية الخاصة في قطر، أصبحت الهند الوجهة الأولى للسياحة العلاجية لسكان قطر. كما تعترف وزارة الصحة العامة القطرية (MOPH) بعدة مستشفيات هندية لإحالات العلاج في الخارج.",
        p3: "يغطي هذا الدليل الشامل كل ما يحتاج المرضى القطريون معرفته: الرحلات المباشرة من مطار حمد الدولي، عملية التأشيرة الطبية، مقارنات التكاليف بالريال القطري، أفضل المستشفيات مع طاقم ناطق بالعربية، الجداول الزمنية للعلاج، وتجارب المرضى الحقيقية. سواء كنت بحاجة لجراحة قلب أو علاج سرطان أو رعاية عظام، سيساعدك هذا الدليل في التخطيط لرحلتك العلاجية إلى الهند."
      },

      whyChoose: {
        title: "لماذا يختار المرضى القطريون الهند للعلاج الطبي",
        reasons: [
          {
            num: "1",
            title: "توفير كبير في التكاليف (65-80%)",
            content: "الرعاية الصحية في قطر مكلفة، خاصة في المرافق الخاصة مثل مستشفى الأهلي ومستشفى العمادي وعيادة الدوحة. تكلف جراحة القلب المفتوح 200,000-280,000 ريال قطري (55,000-77,000 دولار) في قطر، لكنها تكلف فقط 40,000-55,000 ريال قطري (11,000-15,000 دولار) في الهند - توفير قدره 160,000 ريال قطري (44,000 دولار).",
            content2: "حتى بعد إضافة تكاليف الرحلات (2,500 ريال قطري)، والإقامة (4,000 ريال قطري/أسبوع)، والتأشيرة الطبية (300 ريال قطري)، يوفر المرضى القطريون 65-80% من إجمالي النفقات الطبية. بالنسبة للإجراءات المعقدة مثل زراعة الأعضاء، يمكن أن يتجاوز التوفير 300,000 ريال قطري."
          },
          {
            num: "2",
            title: "مستشفيات عالمية المستوى معتمدة من JCI",
            content: "تمتلك الهند أكثر من 40 مستشفى معتمد من JCI - نفس معيار الاعتماد الذهبي الذي تحمله مؤسسة حمد الطبية. تستخدم هذه المستشفيات أحدث التقنيات الطبية، وتتبع بروتوكولات السلامة الدولية، وتوظف أطباء مدربين في أفضل المؤسسات العالمية بما في ذلك هارفارد ومايو كلينك وجونز هوبكنز.",
            content2: "معدلات النجاح للإجراءات الكبرى استثنائية: 98.5% لجراحة القلب، 95-98% لاستبدال المفاصل، 90-95% لزراعة الكلى، و85-92% لعلاج السرطان (المرحلة المبكرة). العديد من المستشفيات الهندية تصنف ضمن الأفضل في آسيا."
          },
          {
            num: "3",
            title: "رحلات مباشرة من الدوحة (3.5 ساعات)",
            content: "تشغل الخطوط الجوية القطرية عدة رحلات يومية مباشرة من مطار حمد الدولي إلى المدن الهندية الرئيسية. أوقات الرحلات أقصر من السفر إلى معظم الوجهات الطبية الأوروبية!",
            flights: [
              "الدوحة إلى مومباي: 3.5 ساعات (3-4 رحلات يومياً)",
              "الدوحة إلى دلهي: 4 ساعات (3 رحلات يومياً)",
              "الدوحة إلى بنغالور: 4.5 ساعات (رحلتان يومياً)",
              "الدوحة إلى تشيناي: 4.5 ساعات (رحلتان يومياً)",
              "الدوحة إلى كوتشي: 4 ساعات (رحلتان يومياً)"
            ]
          },
          {
            num: "4",
            title: "إجراءات تأشيرة طبية بسيطة",
            content: "يمكن لحاملي جوازات السفر القطرية والمقيمين في قطر الحصول على تأشيرة طبية إلكترونية هندية عبر الإنترنت في 3-5 أيام عمل. العملية بسيطة: ملء طلب إلكتروني، تحميل المستندات، واستلام التأشيرة إلكترونياً. التأشيرة الطبية صالحة لمدة 60 يوماً (قابلة للتمديد) مع دخول ثلاثي.",
            content2: "يمكن لأفراد العائلة المرافقة بتأشيرة مرافق طبي. تتعامل شفاء الهند مع عملية التأشيرة بأكملها بدون تكلفة إضافية، بما في ذلك خطاب الدعوة من المستشفى المطلوب للتقديم."
          },
          {
            num: "5",
            title: "اعتراف وزارة الصحة العامة وبرامج الإحالة",
            content: "تعترف وزارة الصحة العامة القطرية (MOPH) بعدة مستشفيات هندية كبرى لإحالات العلاج في الخارج. بعض المرضى القطريين يتلقون علاجاً مدعوماً حكومياً في الهند عبر القنوات الرسمية. بالإضافة إلى ذلك:",
            services: [
              "منسقون ومترجمون ناطقون بالعربية في جميع المستشفيات الكبرى",
              "طعام حلال 100% في كافتيريات المستشفى ووجبات المرضى",
              "غرف صلاة باتجاه القبلة في كل طابق",
              "خدمة استقبال VIP من مطار حمد الدولي",
              "مساعدة في الإقامة في فنادق قريبة (200-500 ريال قطري/ليلة)",
              "استشارات فيديو مجانية قبل السفر",
              "متابعة بعد العلاج عبر واتساب/مكالمات فيديو",
              "تسهيلات رمضان والأعياد الإسلامية"
            ]
          },
          {
            num: "6",
            title: "لا قوائم انتظار طويلة",
            content: "بينما تقدم مؤسسة حمد الطبية رعاية ممتازة، يمكن أن تكون فترات الانتظار للإجراءات الاختيارية 3-6 أشهر أو أكثر. في الهند، يمكن بدء معظم العلاجات خلال 1-2 أسبوع من الحجز. للحالات العاجلة، يمكن للمستشفيات ترتيب القبول خلال 48-72 ساعة. هذا مهم بشكل خاص لمرضى السرطان والذين يحتاجون زراعة أعضاء حيث الوقت حرج."
          }
        ]
      },

      costComparison: {
        title: "مقارنة التكاليف: قطر مقابل الهند (جميع المبالغ بالريال القطري)",
        procedures: [
          { name: "جراحة القلب المفتوح (CABG)", qatar: "200,000 - 280,000", india: "40,000 - 55,000", savings: "160,000", percent: "76%" },
          { name: "استبدال الركبة", qatar: "80,000 - 110,000", india: "20,000 - 28,000", savings: "60,000", percent: "75%" },
          { name: "زراعة الكبد", qatar: "400,000 - 550,000", india: "100,000 - 155,000", savings: "300,000", percent: "75%" },
          { name: "علاج أطفال الأنابيب (دورة واحدة)", qatar: "40,000 - 60,000", india: "12,000 - 18,000", savings: "28,000", percent: "70%" },
          { name: "جراحة العمود الفقري", qatar: "100,000 - 150,000", india: "25,000 - 40,000", savings: "75,000", percent: "75%" },
          { name: "علاج السرطان (6 دورات كيماوي)", qatar: "130,000 - 200,000", india: "30,000 - 50,000", savings: "100,000", percent: "77%" },
          { name: "زراعة الأسنان (الفم بالكامل)", qatar: "80,000 - 120,000", india: "16,000 - 25,000", savings: "64,000", percent: "80%" },
          { name: "جراحة السمنة", qatar: "60,000 - 95,000", india: "16,000 - 25,000", savings: "44,000", percent: "73%" }
        ],
        totalCostTitle: "إجمالي التكاليف بما في ذلك السفر (مثال: جراحة القلب المفتوح)",
        totalCostItems: [
          "الجراحة في الهند: 47,500 ريال قطري",
          "تذاكر الطيران ذهاباً وإياباً (شخصان): 5,000 ريال قطري",
          "الإقامة (أسبوعان): 8,000 ريال قطري",
          "الطعام والنقل: 3,000 ريال قطري",
          "الإجمالي: 63,500 ريال قطري (مقابل 240,000 ريال قطري في قطر) = توفير 176,500 ريال قطري!"
        ]
      },

      hospitals: {
        title: "أفضل 5 مستشفيات للمرضى القطريين",
        list: [
          {
            num: "1",
            name: "مستشفيات أبولو - مومباي، دلهي، تشيناي",
            why: "أكبر شبكة مستشفيات خاصة في آسيا مع 71 مستشفى. معتمد من JCI. يعالج أكثر من 500 مريض خليجي شهرياً. شراكة مع عدة شركات تأمين خليجية للعلاج بدون نقد.",
            specialties: "جراحة القلب، الأورام، زراعة الأعضاء، جراحة العظام، علوم الأعصاب",
            successRates: "98.5% جراحة القلب، 95% استبدال الركبة، 85% شفاء من السرطان",
            qatarPerks: "مكتب خليجي مخصص، منسقون عرب، شراكة مع الخطوط القطرية للسياحة العلاجية",
            accreditations: "JCI، NABH، ISO 9001",
            annual: "أكثر من 150,000 جراحة"
          },
          {
            num: "2",
            name: "فورتيس للرعاية الصحية - دلهي، مومباي، بنغالور",
            why: "54 مستشفى في جميع أنحاء الهند. سمعة قوية بين المرضى الخليجيين. ترتيبات فوترة مباشرة مع عدة شركات تأمين قطرية.",
            specialties: "علوم القلب، علوم الأعصاب، الأورام، علوم الكلى، زراعة نخاع العظام",
            successRates: "97.8% جراحة القلب، 92% شفاء من السرطان (المرحلة المبكرة)، 98% زراعة الكلى",
            qatarPerks: "استشارة فيديو مجانية، خط مساعدة عربي 24/7، ضمان طعام حلال، أجنحة VIP",
            accreditations: "JCI، NABH، NABL",
            annual: "أكثر من 200,000 جراحة"
          },
          {
            num: "3",
            name: "ميدانتا - ذا ميديسيتي، جورجاون (دلهي)",
            why: "أحد أكبر المستشفيات متعددة التخصصات في العالم. أسسه د. نريش تريهان (48,000+ جراحة قلب). منشأة 1,250 سرير معترف بها من وزارة الصحة العامة القطرية للإحالات.",
            specialties: "جراحة القلب، زراعة الكبد، السرطان، علوم الأعصاب، زراعة نخاع العظام",
            successRates: "99.6% جراحة القلب (فريق د. تريهان)، 95% زراعة الكبد",
            qatarPerks: "مكتب مخصص للمرضى الخليجيين، مترجمون عرب، غرفة صلاة في كل طابق",
            accreditations: "JCI، NABH",
            annual: "أكثر من 22,000 جراحة قلب، أكثر من 250 زراعة كبد"
          },
          {
            num: "4",
            name: "مستشفى تاتا التذكاري - مومباي",
            why: "المركز الأول للسرطان في الهند، يصنف ضمن أفضل 5 في آسيا. أورام عالمية المستوى مع أحدث العلاج الإشعاعي والعلاج المناعي والجراحة الروبوتية. رعاية سرطان بأسعار معقولة.",
            specialties: "جميع أنواع السرطان: الثدي، الرئة، القولون، سرطانات الدم، أورام الأطفال",
            successRates: "85-92% سرطان المرحلة المبكرة، 70% المرحلة المتقدمة مع أحدث البروتوكولات",
            qatarPerks: "قسم مرضى دوليين، دعم بالعربية، باقات سرطان شاملة",
            accreditations: "NABH، NABL",
            annual: "أكثر من 80,000 مريض سرطان تم علاجهم"
          },
          {
            num: "5",
            name: "ماكس للرعاية الصحية - دلهي، مومباي",
            why: "17 مستشفى مع أقسام ممتازة لجراحة العظام والسمنة وأطفال الأنابيب. معروف باستبدال المفاصل المعقدة والإجراءات طفيفة التوغل.",
            specialties: "جراحة العظام، جراحة السمنة، أطفال الأنابيب، السرطان، علوم الأعصاب",
            successRates: "96% استبدال الركبة، 65% أطفال الأنابيب (تحت 35)، 85% جراحة السمنة (شفاء من السكري)",
            qatarPerks: "استشارة فيديو مجانية، صالة المطار، منسقون خليجيون مخصصون",
            accreditations: "JCI، NABH",
            annual: "أكثر من 50,000 جراحة"
          }
        ]
      },

      patientStory: {
        title: "قصة مريض حقيقية: أحمد من الدوحة",
        quote: "وفّرت 120,000 ريال قطري على جراحة القلب وتلقيت رعاية أفضل مما توقعت.",
        patient: "أحمد م.، 55 عاماً من سكان الدوحة، رجل أعمال",
        condition: "مرض الشريان التاجي ثلاثي الأوعية (انسدادات في 3 شرايين قلبية رئيسية)",
        treatment: "جراحة مجازة الشريان التاجي (CABG) - مجازة ثلاثية",
        localQuoteTitle: "عرض الأسعار في قطر:",
        localQuoteItems: [
          "مؤسسة حمد الطبية: 180,000 ريال قطري (قائمة انتظار 3 أشهر)",
          "مستشفى الأهلي (خاص): 250,000 ريال قطري",
          "تغطية التأمين: 100,000 ريال قطري (الرصيد من الجيب 80,000-150,000 ريال قطري)",
          "وقت الانتظار: 2-4 أشهر"
        ],
        indiaExpTitle: "تجربة الهند:",
        indiaExpItems: [
          "استشارة فيديو مع د. نريش تريهان في ميدانتا (مجانية)",
          "طار على الخطوط القطرية (الدوحة إلى دلهي): 2,800 ريال قطري ذهاباً وإياباً لشخصين",
          "تكلفة الجراحة في ميدانتا: 48,000 ريال قطري (باقة شاملة)",
          "الإقامة في المستشفى: 6 أيام في جناح خاص",
          "الفندق: 350 ريال قطري/ليلة × 10 ليالٍ = 3,500 ريال قطري",
          "الطعام والنقل: 2,200 ريال قطري",
          "إجمالي التكلفة: 56,500 ريال قطري (مقابل 180,000-250,000 ريال قطري في قطر)",
          "التوفير: 123,500-193,500 ريال قطري (69-77%)",
          "تم جدولة الجراحة خلال 10 أيام من الحجز"
        ],
        testimony: "كانت الرعاية في ميدانتا استثنائية. د. تريهان شخصياً راجع حالتي وفريقه أجرى جراحة المجازة الثلاثية بشكل مثالي. المنسق العربي رتب كل شيء من استقبال المطار إلى الوجبات الحلال. المستشفى كان يشبه فندق خمس نجوم. طبيب القلب في الدوحة راجع تقاريري بعد الجراحة وقال إن النتائج ممتازة. عدت إلى قطر خلال 3 أسابيع، متعافي بالكامل. التوفير سمح لي بأخذ عائلتي في عطلة لشكرهم على دعمهم!",
        result: "جراحة مجازة ثلاثية ناجحة، خروج في 6 أيام، تعافي كامل في 8 أسابيع، عودة للعمل في 10 أسابيع"
      },

      faqSection: {
        title: "الأسئلة الشائعة (المرضى القطريون)",
        questions: [
          {
            q: "1. هل العلاج الطبي في الهند آمن للمرضى القطريين؟",
            a: "نعم، آمن تماماً. تتبع أفضل مستشفيات الهند (المعتمدة من JCI) نفس معايير السلامة الدولية الموجودة في مؤسسة حمد الطبية. معدلات النجاح للإجراءات الكبرى تطابق أو تتجاوز أفضل مستشفيات قطر. أكثر من 500,000 مريض دولي من 150+ دولة يختارون الهند سنوياً. عدة مستشفيات هندية معترف بها من وزارة الصحة العامة القطرية لإحالات العلاج في الخارج."
          },
          {
            q: "2. كم يمكنني التوفير مقارنة بقطر؟",
            a: "65-80% في المتوسط. حتى بعد إضافة تكاليف الرحلات (2,500-5,000 ريال قطري)، والإقامة (3,000-8,000 ريال قطري)، والتأشيرة (300 ريال قطري)، توفر 40,000-300,000 ريال قطري حسب الإجراء. جراحة القلب توفر ~160,000 ريال قطري، استبدال الركبة ~60,000 ريال قطري، زراعة الكبد ~300,000 ريال قطري."
          },
          {
            q: "3. ما هي عملية التأشيرة الطبية للمواطنين القطريين؟",
            a: "بسيطة جداً. قدم عبر الإنترنت للحصول على تأشيرة طبية إلكترونية (موافقة في 3-5 أيام). المستندات المطلوبة: جواز السفر، خطاب دعوة من المستشفى (نوفره نحن)، التقارير الطبية. التكلفة: 300 ريال قطري. صالحة لمدة 60 يوماً مع دخول ثلاثي. أفراد العائلة يحصلون على تأشيرة مرافق طبي. حاملو الجوازات القطرية يتمتعون بمعالجة مبسطة."
          },
          {
            q: "4. هل تعترف وزارة الصحة العامة القطرية بالمستشفيات الهندية؟",
            a: "نعم، عدة مستشفيات هندية كبرى معترف بها من وزارة الصحة العامة القطرية لإحالات العلاج في الخارج. مستشفيات مثل أبولو وميدانتا وفورتيس تستقبل بانتظام مرضى محالين من الوزارة. بعض المرضى القطريين قد يكونون مؤهلين للعلاج المدعوم حكومياً في الهند عبر قنوات الوزارة الرسمية."
          },
          {
            q: "5. كيف أقارن مع جودة مؤسسة حمد الطبية؟",
            a: "أفضل المستشفيات الهندية المعتمدة من JCI تطابق مؤسسة حمد الطبية في الجودة وغالباً تتفوق عليها في المجالات المتخصصة. المستشفيات الهندية تجري 10-50 ضعف الإجراءات سنوياً، مما يمنح الجراحين خبرة لا مثيل لها. على سبيل المثال، ميدانتا تجري أكثر من 22,000 جراحة قلب سنوياً مقارنة ببضع مئات في معظم مرافق قطر."
          },
          {
            q: "6. هل يمكنني استخدام تأميني الصحي القطري؟",
            a: "بعض خطط التأمين الدولية وخطط التأمين القطرية المميزة تغطي العلاج في الخارج. تحقق مع شركة التأمين (شركة قطر للتأمين، ضمان، QLM، إلخ) حول التغطية الدولية. بعض المستشفيات الهندية لديها فوترة مباشرة مع شركات تأمين خليجية. إذا لم يتم التغطية، ادفع مقدماً وقدم مطالبة سداد مع فواتير المستشفى والتقارير الطبية."
          },
          {
            q: "7. هل توجد رحلات مباشرة من الدوحة إلى الهند؟",
            a: "نعم! تشغل الخطوط القطرية عدة رحلات يومية مباشرة من مطار حمد الدولي: الدوحة إلى مومباي (3.5 ساعات)، دلهي (4 ساعات)، بنغالور (4.5 ساعات)، تشيناي (4.5 ساعات)، وكوتشي (4 ساعات). تكلفة التذاكر ذهاباً وإياباً 1,200-3,000 ريال قطري للشخص. الخطوط القطرية تقدم باقات سياحة علاجية مع أمتعة إضافية وإعادة حجز مرنة."
          },
          {
            q: "8. كم من الوقت أحتاج للبقاء في الهند للعلاج؟",
            a: "يعتمد على الإجراء: الإجراءات البسيطة (الأسنان، الساد، التنظير): 3-5 أيام. الإجراءات المتوسطة (استبدال الركبة، الفتق): 10-14 يوماً. الإجراءات المعقدة (جراحة القلب، زراعة الأعضاء): 3-4 أسابيع. علاج السرطان قد يتطلب زيارات متعددة. نوفر جداول زمنية مقدرة خلال استشارة الفيديو المجانية. يعود معظم المرضى إلى الدوحة خلال 2-3 أسابيع."
          }
        ]
      }
    }
  };

  const currentContent = content[locale as 'en' | 'ar'];

  return (
    <BlogArticleLayout
      title={currentContent.title}
      excerpt={currentContent.excerpt}
      author="Shifa AlHind Medical Team"
      publishedDate={locale === 'ar' ? "مارس 2026" : "March 2026"}
      lastUpdated={locale === 'ar' ? "مارس 2026" : "March 2026"}
      readTime={currentContent.readTime}
      breadcrumbTitle={currentContent.breadcrumbTitle}
    >
      {/* Breadcrumb Schema for SEO */}
      <BreadcrumbSchema items={[
        { name: locale === 'ar' ? 'الرئيسية' : 'Home', url: 'https://shifaalhind.onrender.com' },
        { name: locale === 'ar' ? 'المدونة' : 'Blog', url: 'https://shifaalhind.onrender.com/blog' },
        { name: locale === 'ar' ? 'السياحة العلاجية من قطر إلى الهند' : 'Qatar to India Medical Tourism Guide', url: 'https://shifaalhind.onrender.com/blog/qatar-to-india-medical-tourism' }
      ]} />

      {/* Article Schema for SEO */}
      <ArticleSchema
        headline={locale === 'ar' ? "السياحة العلاجية من قطر إلى الهند: دليل شامل للمرضى القطريين" : "Medical Tourism from Qatar to India: Complete Guide for Qatari Patients"}
        description={locale === 'ar' ? "دليل شامل للمرضى القطريين الذين يسعون للعلاج في الهند. التكاليف، المستشفيات، التأشيرة، ومعلومات السفر." : "Complete guide for Qatari patients seeking treatment in India. Costs, hospitals, visa, and travel information."}
        image="https://shifaalhind.onrender.com/images/blog/qatar-medical-tourism.jpg"
        datePublished="2026-03-01"
        dateModified="2026-03-01"
        author={DEFAULT_AUTHOR}
        publisher={DEFAULT_PUBLISHER}
        url="https://shifaalhind.onrender.com/blog/qatar-to-india-medical-tourism"
      />

      {/* Introduction */}
      <Card>
        <CardContent className="pt-6">
          <p className="text-lg leading-relaxed mb-4">
            {currentContent.intro.p1}
          </p>
          <p className="text-lg leading-relaxed mb-4">
            {currentContent.intro.p2}
          </p>
          <p className="text-lg leading-relaxed">
            {currentContent.intro.p3}
          </p>
        </CardContent>
      </Card>

      {/* WhatsApp CTA */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200">
        <CardContent className="pt-6 text-center">
          <h2 className="text-xl font-bold mb-3">
            {locale === 'ar' ? 'احصل على استشارة مجانية اليوم' : 'Get Your FREE Consultation Today'}
          </h2>
          <p className="text-muted-foreground mb-4">
            {locale === 'ar'
              ? 'تحدث مع منسقنا الطبي الناطق بالعربية واحصل على خطة علاج مخصصة مع تقدير التكلفة.'
              : 'Speak with our Arabic-speaking medical coordinator and get a personalized treatment plan with cost estimate.'}
          </p>
          <a
            href="https://wa.me/919876543210?text=Hello%20Shifa%20AlHind%2C%20I%20am%20from%20Qatar%20and%20interested%20in%20medical%20treatment%20in%20India"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            {locale === 'ar' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
          </a>
        </CardContent>
      </Card>

      {/* Why Qatari Patients Choose India */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">{currentContent.whyChoose.title}</h2>

          <div className="space-y-6">
            {currentContent.whyChoose.reasons.map((reason, idx) => (
              <div key={idx} className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-lg mb-2">{reason.num}. {reason.title}</h3>
                <p className="text-muted-foreground mb-3">
                  {reason.content}
                </p>
                {reason.content2 && (
                  <p className="text-muted-foreground">
                    {reason.content2}
                  </p>
                )}
                {reason.flights && (
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mt-3">
                    {reason.flights.map((flight, i) => (
                      <li key={i}>{flight}</li>
                    ))}
                  </ul>
                )}
                {reason.services && (
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mt-3">
                    {reason.services.map((service, i) => (
                      <li key={i}>{service}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Cost Comparison */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">{currentContent.costComparison.title}</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">
                    {locale === 'ar' ? 'الإجراء الطبي' : 'Medical Procedure'}
                  </th>
                  <th className="border p-3 text-right">
                    {locale === 'ar' ? 'تكلفة قطر (ر.ق)' : 'Qatar Cost (QAR)'}
                  </th>
                  <th className="border p-3 text-right">
                    {locale === 'ar' ? 'تكلفة الهند (ر.ق)' : 'India Cost (QAR)'}
                  </th>
                  <th className="border p-3 text-right">
                    {locale === 'ar' ? 'التوفير (ر.ق)' : 'Savings (QAR)'}
                  </th>
                  <th className="border p-3 text-center">
                    {locale === 'ar' ? '% الموفرة' : '% Saved'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentContent.costComparison.procedures.map((proc, idx) => (
                  <tr key={idx} className={idx % 2 === 1 ? "bg-muted/50" : ""}>
                    <td className="border p-3 font-medium">{proc.name}</td>
                    <td className="border p-3 text-right">{proc.qatar}</td>
                    <td className="border p-3 text-right">{proc.india}</td>
                    <td className="border p-3 text-right text-green-600 font-semibold">{proc.savings}</td>
                    <td className="border p-3 text-center">{proc.percent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">
              {currentContent.costComparison.totalCostTitle}
            </p>
            <ul className="space-y-1 text-sm text-green-700 dark:text-green-300">
              {currentContent.costComparison.totalCostItems.map((item, idx) => (
                <li key={idx}>&#8226; {item}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Top Hospitals */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">{currentContent.hospitals.title}</h2>

          <div className="space-y-6">
            {currentContent.hospitals.list.map((hospital, idx) => (
              <div key={idx} className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-lg mb-2">{hospital.num}. {hospital.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>{locale === 'ar' ? 'لماذا يختار المرضى القطريون' : 'Why Qatari patients choose'} {hospital.name.split(' - ')[0]}:</strong> {hospital.why}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li><strong>{locale === 'ar' ? 'التخصصات:' : 'Specialties:'}</strong> {hospital.specialties}</li>
                  <li><strong>{locale === 'ar' ? 'معدلات النجاح:' : 'Success rates:'}</strong> {hospital.successRates}</li>
                  <li><strong>{locale === 'ar' ? 'مزايا للمرضى القطريين:' : 'Qatar patient perks:'}</strong> {hospital.qatarPerks}</li>
                  <li><strong>{locale === 'ar' ? 'الاعتمادات:' : 'Accreditations:'}</strong> {hospital.accreditations}</li>
                  <li><strong>{locale === 'ar' ? 'الإجراءات السنوية:' : 'Annual procedures:'}</strong> {hospital.annual}</li>
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Real Patient Story */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">{currentContent.patientStory.title}</h2>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg">
            <p className="text-lg font-semibold mb-4">
              &quot;{currentContent.patientStory.quote}&quot;
            </p>

            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <strong>{locale === 'ar' ? 'المريض:' : 'Patient:'}</strong> {currentContent.patientStory.patient}
              </p>
              <p>
                <strong>{locale === 'ar' ? 'الحالة:' : 'Condition:'}</strong> {currentContent.patientStory.condition}
              </p>
              <p>
                <strong>{locale === 'ar' ? 'العلاج المطلوب:' : 'Treatment needed:'}</strong> {currentContent.patientStory.treatment}
              </p>

              <div className="my-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded">
                <p className="font-semibold mb-2">{currentContent.patientStory.localQuoteTitle}</p>
                <ul className="list-disc list-inside space-y-1">
                  {currentContent.patientStory.localQuoteItems.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="my-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded">
                <p className="font-semibold mb-2">{currentContent.patientStory.indiaExpTitle}</p>
                <ul className="list-disc list-inside space-y-1">
                  {currentContent.patientStory.indiaExpItems.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <p className="italic">
                &quot;{currentContent.patientStory.testimony}&quot;
              </p>

              <p className="font-semibold text-green-600 dark:text-green-400 mt-4">
                {currentContent.patientStory.result}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* WhatsApp CTA Bottom */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200">
        <CardContent className="pt-6 text-center">
          <h2 className="text-xl font-bold mb-3">
            {locale === 'ar' ? 'ابدأ رحلتك العلاجية اليوم' : 'Start Your Medical Journey Today'}
          </h2>
          <p className="text-muted-foreground mb-4">
            {locale === 'ar'
              ? 'انضم إلى آلاف المرضى القطريين الذين وفروا 65-80% على العلاج الطبي في الهند. استشارة مجانية ومساعدة في التأشيرة.'
              : 'Join thousands of Qatari patients who saved 65-80% on medical treatment in India. Free consultation and visa assistance.'}
          </p>
          <a
            href="https://wa.me/919876543210?text=Hello%20Shifa%20AlHind%2C%20I%20am%20from%20Qatar%20and%20need%20medical%20treatment%20in%20India"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            {locale === 'ar' ? 'تواصل عبر واتساب الآن' : 'WhatsApp Us Now'}
          </a>
        </CardContent>
      </Card>

      {/* Internal Links */}
      <InternalLinks
        title={locale === 'ar' ? "موارد ذات صلة للمرضى القطريين" : "Related Resources for Qatari Patients"}
        links={[
          {
            title: locale === 'ar' ? 'أفضل المستشفيات للسياحة العلاجية' : 'Best Hospitals for Medical Tourism',
            href: '/hospitals',
            description: locale === 'ar' ? 'تصفح المستشفيات المعتمدة من JCI في جميع أنحاء الهند' : 'Browse JCI-accredited hospitals across India',
          },
          {
            title: locale === 'ar' ? 'علاجات القلب في الهند' : 'Heart Treatment in India',
            href: '/treatments/cardiology',
            description: locale === 'ar' ? 'جراحة القلب والأوعية الدموية في أفضل المستشفيات' : 'Cardiac surgery at top hospitals',
          },
          {
            title: locale === 'ar' ? 'استشارة مجانية' : 'Free Consultation',
            href: '/consultation',
            description: locale === 'ar' ? 'احصل على خطة العلاج الشخصية الخاصة بك' : 'Get your personalized treatment plan',
          },
        ]}
        variant="compact"
      />

      {/* FAQ Schema for Rich Snippets */}
      <FAQSchema faqs={locale === 'ar' ? [
        { question: "كم يمكن للمرضى القطريين التوفير في الهند؟", answer: "متوسط التوفير: 65-80% في معظم الإجراءات. جراحة القلب المفتوح: توفير 160,000 ريال قطري (76%)، استبدال الركبة: 60,000 ريال قطري (75%)، زراعة الكبد: 300,000 ريال قطري (75%)، أطفال الأنابيب: 28,000 ريال قطري (70%). للإجراءات المعقدة، يمكن أن يتجاوز التوفير 100,000-300,000 ريال قطري لكل مريض." },
        { question: "كم يستغرق الطيران من الدوحة إلى الهند؟", answer: "الدوحة إلى مومباي: 3.5 ساعات مباشرة، دلهي: 4 ساعات، بنغالور: 4.5 ساعات، تشيناي: 4.5 ساعات، كوتشي: 4 ساعات. رحلات يومية متعددة من الخطوط القطرية. التذاكر 1,200-3,000 ريال قطري ذهاباً وإياباً. التأشيرة الطبية الإلكترونية تتم عبر الإنترنت في 3-5 أيام." },
        { question: "هل تعترف وزارة الصحة العامة القطرية بالمستشفيات الهندية؟", answer: "نعم، عدة مستشفيات هندية كبرى معترف بها من وزارة الصحة العامة القطرية لإحالات العلاج في الخارج. مستشفيات مثل أبولو وميدانتا وفورتيس تستقبل بانتظام مرضى محالين من الوزارة." },
        { question: "هل تلبي المستشفيات الهندية الاحتياجات الثقافية القطرية؟", answer: "نعم! توفر أفضل المستشفيات: منسقين ناطقين بالعربية، طعام حلال (جميع الوجبات)، غرف صلاة باتجاه القبلة، رعاية خاصة بالجنس (طبيبات للنساء)، أجنحة عائلية خاصة، تسهيلات رمضان والأعياد الإسلامية. لدى العديد من المستشفيات خبرة 10+ سنوات مع المرضى الخليجيين." },
        { question: "هل الأطباء الهنود مؤهلون لعلاج المرضى القطريين؟", answer: "نعم، أفضل الأطباء لديهم تدريب دولي (الولايات المتحدة، المملكة المتحدة، أوروبا)، خبرة 15-20+ سنة. المستشفيات الهندية تجري إجراءات أكثر بكثير سنوياً مما يمنح الجراحين خبرة لا مثيل لها. معدلات النجاح تطابق أو تتجاوز أفضل المستشفيات القطرية." },
        { question: "كيف تبدأ عملية العلاج في الهند؟", answer: "1) تواصل معنا عبر واتساب مع تقاريرك الطبية. 2) نرتب استشارة فيديو مجانية مع الطبيب المختص. 3) تحصل على خطة علاج مفصلة وتقدير التكلفة. 4) نساعد في التأشيرة والسفر. 5) استقبال VIP في المطار وبدء العلاج. العملية كاملة تستغرق 1-2 أسبوع من الاتصال الأول." },
        { question: "هل يمكن لعائلتي مرافقتي؟", answer: "نعم بالتأكيد! يمكن لأفراد العائلة الحصول على تأشيرة مرافق طبي. نساعد في ترتيب الإقامة العائلية في فنادق قريبة من المستشفى. المستشفيات توفر غرف خاصة بأسرة إضافية للمرافقين. نوفر أيضاً مترجمين ومنسقين لمساعدة العائلة طوال فترة الإقامة." },
        { question: "ماذا يحدث بعد العودة إلى قطر؟", answer: "نوفر متابعة شاملة بعد العلاج: تقارير طبية مفصلة لطبيبك في قطر، استشارات فيديو مجانية مع الطبيب المعالج في الهند، متابعة عبر واتساب لمدة 6 أشهر، مساعدة في تنسيق أي رعاية متابعة مطلوبة محلياً." }
      ] : [
        { question: "How much can Qatari patients save in India?", answer: "Average savings: 65-80% on most procedures. Heart bypass: QAR 160,000 saved (76%), Knee replacement: QAR 60,000 (75%), Liver transplant: QAR 300,000 (75%), IVF: QAR 28,000 (70%). For complex procedures, savings can exceed QAR 100,000-300,000 per patient." },
        { question: "How long does it take to fly from Doha to India?", answer: "Doha to Mumbai: 3.5 hours direct, Delhi: 4 hours, Bangalore: 4.5 hours, Chennai: 4.5 hours, Kochi: 4 hours. Multiple daily flights on Qatar Airways. Tickets cost QAR 1,200-3,000 round trip. e-Medical Visa processed online within 3-5 days." },
        { question: "Does Qatar MOPH recognize Indian hospitals?", answer: "Yes, several top Indian hospitals are recognized by Qatar's Ministry of Public Health for overseas treatment referrals. Hospitals like Apollo, Medanta, and Fortis regularly receive MOPH-referred patients." },
        { question: "Do Indian hospitals accommodate Qatari cultural needs?", answer: "Yes! Top hospitals provide: Arabic-speaking coordinators, halal food (all meals), prayer rooms with Qibla direction, gender-specific care (female doctors for women), private family suites, Ramadan and Islamic holiday accommodations. Many hospitals have 10+ years experience with Gulf patients." },
        { question: "Are Indian doctors qualified to treat Qatari patients?", answer: "Yes, top doctors have international training (USA, UK, Europe), 15-20+ years experience. Indian hospitals perform significantly more procedures annually, giving surgeons unmatched experience. Success rates match or exceed Qatar's best hospitals." },
        { question: "How does the treatment process start?", answer: "1) Contact us via WhatsApp with your medical reports. 2) We arrange a FREE video consultation with the specialist. 3) You receive a detailed treatment plan and cost estimate. 4) We assist with visa and travel. 5) VIP airport pickup and treatment begins. The entire process takes 1-2 weeks from first contact." },
        { question: "Can my family accompany me?", answer: "Yes, absolutely! Family members can obtain Medical Attendant visas. We help arrange family accommodation near the hospital. Hospitals provide private rooms with extra beds for attendants. We also provide translators and coordinators to assist the family throughout the stay." },
        { question: "What happens after I return to Qatar?", answer: "We provide comprehensive post-treatment follow-up: detailed medical reports for your Qatar doctor, free video consultations with the treating doctor in India, WhatsApp follow-up for 6 months, assistance coordinating any required local follow-up care." }
      ]} />

      {/* FAQ Section */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">{currentContent.faqSection.title}</h2>

          <div className="space-y-6">
            {currentContent.faqSection.questions.map((faq, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Social Share */}
      <SocialShare
        title={locale === 'ar' ? "السياحة العلاجية من قطر إلى الهند: دليل شامل" : "Medical Tourism from Qatar to India: Complete Guide"}
        url="/blog/qatar-to-india-medical-tourism"
        description={locale === 'ar' ? "دليل شامل للمرضى القطريين. وفّر 65-80% على العلاج الطبي في الهند. رحلات مباشرة، مستشفيات JCI، عملية تأشيرة سهلة." : "Complete guide for Qatari patients. Save 65-80% on medical treatment in India. Direct flights, JCI hospitals, easy visa process."}
      />

      {/* Related Articles */}
      <RelatedArticles articles={CANCER_RELATED_ARTICLES} />
    </BlogArticleLayout>
  );
}

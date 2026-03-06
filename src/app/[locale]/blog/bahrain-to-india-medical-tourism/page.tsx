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

export default function BahrainToIndiaMedicalTourismPage() {
  const locale = useLocale();

  const content = {
    en: {
      title: "Medical Tourism from Bahrain to India: Complete Guide for Bahraini Patients",
      excerpt: "Comprehensive guide for Bahraini patients seeking medical treatment in India. Save 65-80% on world-class healthcare. Direct flights from Bahrain (3.5 hours), JCI-accredited hospitals, easy medical visa, NHRA-recognized facilities, and dedicated Arabic-speaking patient services.",
      readTime: "12 min",
      breadcrumbTitle: "Bahrain to India Medical Tourism",

      intro: {
        p1: "Bahrain has made significant investments in healthcare through institutions like Salmaniya Medical Complex, King Hamad University Hospital, and the Royal Bahrain Hospital. However, for complex procedures, specialized treatments, and cost-effective medical care, a growing number of Bahraini patients are choosing India as their preferred medical tourism destination.",
        p2: "With direct flights from Bahrain International Airport taking just 3.5 hours, savings of 65-80% compared to private healthcare costs in Bahrain, and over 40 JCI-accredited hospitals, India offers Bahraini patients unmatched value. The National Health Regulatory Authority (NHRA) of Bahrain recognizes several Indian hospitals, and the strong Bahraini Dinar gives patients excellent purchasing power in India.",
        p3: "This comprehensive guide covers everything Bahraini patients need to know: direct flights from Bahrain, medical visa process, cost comparisons in BHD, top hospitals with Arabic-speaking staff, the NHRA framework for overseas treatment, and real patient experiences. Whether you need cardiac surgery, cancer treatment, organ transplant, or orthopedic care, this guide will help you plan your medical journey to India."
      },

      whyChoose: {
        title: "Why Bahraini Patients Choose India for Medical Treatment",
        reasons: [
          {
            num: "1",
            title: "Significant Cost Savings (65-80%)",
            content: "Healthcare in Bahrain's private sector is expensive. A heart bypass surgery costs BHD 18,000-25,000 ($48,000-$66,000) at private hospitals in Bahrain, but only BHD 3,800-5,200 ($10,000-$14,000) in India - a savings of BHD 14,200 ($38,000). While government healthcare is subsidized for Bahraini citizens, waiting times and limited specialties push many toward private options or overseas treatment.",
            content2: "Including return flights (BHD 200-350), accommodation (BHD 350/week), and medical visa (BHD 30), Bahraini patients still save 65-80% on total expenses. The Bahraini Dinar (pegged to USD at ~$2.65) provides strong purchasing power in India, making world-class treatment remarkably affordable."
          },
          {
            num: "2",
            title: "Access to Advanced Treatments Not Available Locally",
            content: "While Bahrain has good general healthcare, certain advanced treatments are limited: complex organ transplants, advanced robotic surgery, proton beam therapy for cancer, and specialized pediatric procedures. India offers all of these at JCI-accredited hospitals with surgeons who perform hundreds of complex cases annually.",
            content2: "Success rates are excellent: 98.5% for cardiac surgery, 95-98% for joint replacements, 90-95% for kidney transplants, and 85-92% for cancer treatment (early stage). Indian hospitals rank among Asia's top medical facilities with the latest technology."
          },
          {
            num: "3",
            title: "Direct Flights from Bahrain (3.5 Hours)",
            content: "Gulf Air, Air India, and other carriers operate daily non-stop flights from Bahrain International Airport to major Indian cities. The flight time is shorter than traveling to most European medical destinations!",
            flights: [
              "Bahrain to Mumbai: 3.5 hours (2-3 daily flights)",
              "Bahrain to Delhi: 4 hours (1-2 daily flights)",
              "Bahrain to Kochi: 4 hours (1-2 daily flights)",
              "Bahrain to Chennai: 4.5 hours (1 daily flight)",
              "Bahrain to Hyderabad: 4 hours (1 daily flight)"
            ]
          },
          {
            num: "4",
            title: "Simple Medical Visa Process",
            content: "Bahraini passport holders and residents can obtain an Indian e-Medical Visa online in 3-5 business days. The process is straightforward: fill an online application, upload passport and medical documents, and receive the visa electronically. Medical visa is valid for 60 days (extendable) with triple entry.",
            content2: "Family members can accompany on Medical Attendant visas. Shifa AlHind handles the entire visa process at no extra cost, including the hospital invitation letter. Bahraini passport holders enjoy streamlined visa processing."
          },
          {
            num: "5",
            title: "NHRA Recognition & Quality Framework",
            content: "The National Health Regulatory Authority (NHRA) of Bahrain maintains quality standards for healthcare and recognizes international accreditations held by top Indian hospitals. Several Indian hospitals meet NHRA standards for overseas treatment. Indian hospitals provide comprehensive services for Bahraini patients:",
            services: [
              "Arabic-speaking coordinators and translators (Gulf Arabic)",
              "100% halal food in hospital cafeterias and patient meals",
              "Prayer rooms with Qibla direction on every floor",
              "Airport VIP pickup/drop service from Bahrain International",
              "Accommodation in nearby hotels (BHD 20-50/night)",
              "FREE video consultations before travel",
              "Post-treatment follow-up via WhatsApp/video calls",
              "Ramadan and Islamic holiday accommodations"
            ]
          },
          {
            num: "6",
            title: "Strong Bahrain-India Cultural & Economic Ties",
            content: "Bahrain and India share deep historical, cultural, and economic ties. There is a large Indian community in Bahrain (over 350,000 people), making it the largest expatriate group. Many Bahrainis have visited India for business and tourism. Indian hospitals in Mumbai, Delhi, and Kochi are well-accustomed to Bahraini patients. The cultural familiarity, combined with Arabic-speaking staff and halal facilities, ensures a comfortable medical experience."
          }
        ]
      },

      costComparison: {
        title: "Cost Comparison: Bahrain vs India (All Amounts in BHD)",
        procedures: [
          { name: "Heart Bypass (CABG)", bahrain: "18,000 - 25,000", india: "3,800 - 5,200", savings: "14,200", percent: "76%" },
          { name: "Knee Replacement", bahrain: "7,000 - 9,500", india: "1,800 - 2,500", savings: "5,200", percent: "74%" },
          { name: "Liver Transplant", bahrain: "35,000 - 48,000", india: "9,000 - 14,000", savings: "26,000", percent: "74%" },
          { name: "IVF Treatment (1 cycle)", bahrain: "3,500 - 5,200", india: "1,050 - 1,600", savings: "2,450", percent: "70%" },
          { name: "Spine Surgery", bahrain: "9,000 - 13,000", india: "2,250 - 3,500", savings: "6,750", percent: "75%" },
          { name: "Cancer Treatment (6 cycles chemo)", bahrain: "12,000 - 18,000", india: "2,800 - 4,500", savings: "9,200", percent: "77%" },
          { name: "Dental Implants (full mouth)", bahrain: "7,000 - 10,500", india: "1,400 - 2,200", savings: "5,600", percent: "80%" },
          { name: "Bariatric Surgery", bahrain: "5,500 - 8,500", india: "1,400 - 2,200", savings: "4,100", percent: "75%" }
        ],
        totalCostTitle: "Total Costs Including Travel (Example: Heart Bypass)",
        totalCostItems: [
          "Surgery in India: BHD 4,500",
          "Round-trip flights (2 people): BHD 450",
          "Accommodation (2 weeks): BHD 700",
          "Food & transport: BHD 250",
          "Total: BHD 5,900 (vs BHD 21,500 in Bahrain) = BHD 15,600 saved!"
        ]
      },

      hospitals: {
        title: "Top 5 Hospitals for Bahraini Patients",
        list: [
          {
            num: "1",
            name: "Apollo Hospitals - Mumbai, Delhi, Chennai",
            why: "Asia's largest private hospital network with 71 hospitals. JCI-accredited. Extensive experience with Bahraini and Gulf patients. Partnership with Gulf insurance providers for cashless treatment. Comprehensive medical tourism packages.",
            specialties: "Cardiac surgery, oncology, organ transplants, orthopedics, neurosciences",
            successRates: "98.5% heart surgery, 95% knee replacement, 85% cancer remission",
            bahrainPerks: "Dedicated Gulf desk, Arabic coordinators, Gulf Air partnership, NHRA-standard facility",
            accreditations: "JCI, NABH, ISO 9001",
            annual: "150,000+ surgeries"
          },
          {
            num: "2",
            name: "Fortis Healthcare - Delhi, Mumbai, Bangalore",
            why: "54 hospitals across India. Strong track record with Bahraini patients. Direct billing with select Gulf insurance companies. Known for cardiac sciences, cancer care, and organ transplants.",
            specialties: "Cardiac sciences, neurosciences, oncology, renal sciences, bone marrow transplant",
            successRates: "97.8% cardiac surgery, 92% cancer remission (early stage), 98% kidney transplant",
            bahrainPerks: "FREE video consultation, Arabic helpline 24/7, halal food guarantee, VIP suites",
            accreditations: "JCI, NABH, NABL",
            annual: "200,000+ surgeries"
          },
          {
            num: "3",
            name: "Medanta - The Medicity, Gurugram (Delhi NCR)",
            why: "World-renowned multi-specialty hospital. Founded by Dr. Naresh Trehan (48,000+ heart surgeries). 1,250-bed facility. Popular among Bahraini cardiac and liver transplant patients.",
            specialties: "Heart surgery, liver transplant, cancer, neurosciences, bone marrow transplant",
            successRates: "99.6% heart surgery (Dr. Trehan's team), 95% liver transplant",
            bahrainPerks: "Dedicated Gulf patient desk, Arabic translators, prayer room every floor, VIP coordination",
            accreditations: "JCI, NABH",
            annual: "22,000+ cardiac surgeries, 250+ liver transplants"
          },
          {
            num: "4",
            name: "Aster Medcity - Kochi, Kerala",
            why: "Part of Aster DM Healthcare (headquartered in Dubai). Deep understanding of Gulf patients' needs. Convenient location with direct flights from Bahrain to Kochi. Known for affordable quality care.",
            specialties: "Cardiac sciences, oncology, neurosciences, organ transplant, orthopedics",
            successRates: "97% cardiac surgery, 93% kidney transplant, 90% cancer remission (early stage)",
            bahrainPerks: "Aster presence in Bahrain ensures seamless referrals, Arabic staff, halal food, Gulf patient coordinators",
            accreditations: "JCI, NABH",
            annual: "30,000+ surgeries"
          },
          {
            num: "5",
            name: "Max Healthcare - Delhi, Mumbai",
            why: "17 hospitals with excellent orthopedics, bariatric surgery, and IVF departments. Known for complex joint replacements, minimally invasive procedures, and comprehensive cancer care.",
            specialties: "Orthopedics, bariatric surgery, IVF, cancer, neurosciences",
            successRates: "96% knee replacement, 65% IVF (under 35), 85% bariatric (diabetes remission)",
            bahrainPerks: "FREE video consultation, airport lounge, dedicated Gulf coordinators, Arabic support",
            accreditations: "JCI, NABH",
            annual: "50,000+ surgeries"
          }
        ]
      },

      patientStory: {
        title: "Real Patient Story: Noora from Manama",
        quote: "I saved BHD 4,800 on my IVF treatment and am now expecting twins!",
        patient: "Noora A., 34-year-old Manama resident, accountant",
        condition: "Primary infertility for 5 years (PCOS with low ovarian reserve)",
        treatment: "IVF with ICSI (2 cycles in India)",
        localQuoteTitle: "Bahrain Quote:",
        localQuoteItems: [
          "Royal Bahrain Hospital (private): BHD 4,200 per IVF cycle",
          "Al Hilal Hospital: BHD 3,800 per cycle",
          "2 cycles needed: BHD 7,600-8,400 total",
          "Success rate locally: 35-40% per cycle",
          "Waiting time: 2-3 months per cycle"
        ],
        indiaExpTitle: "India Experience:",
        indiaExpItems: [
          "Video consultation with IVF specialist at Max Hospital Delhi (FREE)",
          "Flew Gulf Air (Bahrain to Delhi): BHD 220 roundtrip for 2 people",
          "2 IVF cycles at Max Hospital: BHD 2,800 total (all-inclusive)",
          "Hospital visits: Multiple over 2 trips (3 weeks each)",
          "Hotel: BHD 25/night x 40 nights = BHD 1,000",
          "Food & transport: BHD 400",
          "Total cost: BHD 4,420 (vs BHD 7,600-8,400 in Bahrain)",
          "Savings: BHD 3,180-3,980 (42-47%)",
          "Higher success rate: 55-65% per cycle (under 35)"
        ],
        testimony: "After 5 years of trying to conceive naturally and 1 failed IVF cycle in Bahrain, I was heartbroken and running out of options. A friend recommended Shifa AlHind. The video consultation with the IVF specialist at Max Hospital gave me hope - she had a clear plan. The first cycle in India didn't work, but the team adjusted the protocol. The second cycle was successful - twins! The care was incredible. The hospital had female Arabic-speaking staff who understood our cultural needs. The cost was almost half of what I would have paid in Bahrain for 2 cycles, and the success rate was higher. I cannot recommend this enough to Bahraini couples struggling with fertility.",
        result: "Successful IVF in second cycle, twin pregnancy confirmed, healthy delivery at 37 weeks in Bahrain"
      },

      faqSection: {
        title: "Frequently Asked Questions (Bahraini Patients)",
        questions: [
          {
            q: "1. Is medical treatment in India safe for Bahraini patients?",
            a: "Yes, completely safe. India's top hospitals (JCI-accredited) follow the same international safety standards recognized by Bahrain's NHRA. Success rates for major procedures match or exceed the best hospitals worldwide. Over 500,000 international patients from 150+ countries choose India annually. Several Indian hospitals meet NHRA quality standards."
          },
          {
            q: "2. How much can I save compared to Bahrain?",
            a: "65-80% on average. Even after including flights (BHD 200-350), accommodation (BHD 350-700), and visa (BHD 30), you save BHD 2,000-26,000 depending on the procedure. Heart surgery saves ~BHD 14,200, knee replacement saves ~BHD 5,200, liver transplant saves ~BHD 26,000. The Bahraini Dinar's strong value makes India exceptionally affordable."
          },
          {
            q: "3. What is the medical visa process for Bahraini citizens?",
            a: "Very simple. Apply online for an e-Medical Visa (3-5 days approval). Required: passport, hospital invitation letter (we provide), medical reports. Cost: BHD 30. Valid for 60 days with triple entry. Family members get Medical Attendant visa. Bahraini passport holders enjoy streamlined processing."
          },
          {
            q: "4. What role does the NHRA play in overseas treatment?",
            a: "The National Health Regulatory Authority (NHRA) of Bahrain sets quality and safety standards for healthcare. While NHRA primarily regulates local healthcare, it recognizes international accreditations (JCI, NABH) held by top Indian hospitals. Patients can verify that their chosen Indian hospital meets international standards through NHRA guidelines."
          },
          {
            q: "5. Are there direct flights from Bahrain to India?",
            a: "Yes! Gulf Air and Air India operate daily non-stop flights: Bahrain to Mumbai (3.5 hours), Delhi (4 hours), Kochi (4 hours), Chennai (4.5 hours), and Hyderabad (4 hours). Round-trip tickets cost BHD 100-180 per person. Gulf Air offers medical tourism packages with extra baggage allowance."
          },
          {
            q: "6. Can I use my Bahrain health insurance?",
            a: "Some Bahraini insurance plans cover international treatment. Check with your insurer (AXA, Solidarity, Gulf Union, BKIC, etc.) about overseas coverage. Some Indian hospitals have direct billing with Gulf insurers. If not covered, pay upfront and claim reimbursement with hospital invoices and discharge summary when you return to Bahrain."
          },
          {
            q: "7. Is India good for fertility treatment (IVF)?",
            a: "Yes, India is one of the top IVF destinations globally. Success rates are 55-65% per cycle for women under 35 (compared to 35-40% in many Gulf clinics). India's top fertility centers have advanced labs, experienced reproductive endocrinologists, and offer comprehensive packages at 50-60% lower cost. Many Bahraini couples choose India for IVF after unsuccessful local attempts."
          },
          {
            q: "8. How long do I need to stay in India for treatment?",
            a: "Depends on the procedure: Simple procedures (dental, cataract, endoscopy): 3-5 days. Moderate procedures (knee replacement, hernia): 10-14 days. Complex procedures (heart surgery, transplants): 3-4 weeks. IVF typically requires 2-3 weeks per cycle. Cancer treatment may require multiple visits. We provide estimated timelines during your FREE video consultation."
          }
        ]
      }
    },
    ar: {
      title: "السياحة العلاجية من البحرين إلى الهند: دليل شامل للمرضى البحرينيين",
      excerpt: "دليل شامل للمرضى البحرينيين الذين يسعون للعلاج الطبي في الهند. وفّر 65-80% على الرعاية الصحية عالمية المستوى. رحلات مباشرة من البحرين (3.5 ساعات)، مستشفيات معتمدة من JCI، تأشيرة طبية سهلة، منشآت معترف بها من NHRA، وخدمات مخصصة بالعربية.",
      readTime: "12 دقيقة",
      breadcrumbTitle: "السياحة العلاجية من البحرين إلى الهند",

      intro: {
        p1: "استثمرت البحرين بشكل كبير في الرعاية الصحية من خلال مؤسسات مثل مجمع السلمانية الطبي ومستشفى الملك حمد الجامعي ومستشفى البحرين الملكي. ومع ذلك، للإجراءات المعقدة والعلاجات المتخصصة والرعاية الطبية الفعالة من حيث التكلفة، يختار عدد متزايد من المرضى البحرينيين الهند كوجهتهم المفضلة للسياحة العلاجية.",
        p2: "مع رحلات مباشرة من مطار البحرين الدولي تستغرق 3.5 ساعات فقط، وتوفير بنسبة 65-80% مقارنة بتكاليف الرعاية الصحية الخاصة في البحرين، وأكثر من 40 مستشفى معتمد من JCI، تقدم الهند للمرضى البحرينيين قيمة لا مثيل لها. تعترف الهيئة الوطنية لتنظيم المهن والخدمات الصحية (NHRA) في البحرين بعدة مستشفيات هندية، والدينار البحريني القوي يمنح المرضى قوة شرائية ممتازة في الهند.",
        p3: "يغطي هذا الدليل الشامل كل ما يحتاج المرضى البحرينيون معرفته: الرحلات المباشرة من البحرين، عملية التأشيرة الطبية، مقارنات التكاليف بالدينار البحريني، أفضل المستشفيات مع طاقم ناطق بالعربية، إطار NHRA للعلاج في الخارج، وتجارب المرضى الحقيقية. سواء كنت بحاجة لجراحة قلب أو علاج سرطان أو زراعة أعضاء أو رعاية عظام، سيساعدك هذا الدليل في التخطيط لرحلتك العلاجية إلى الهند."
      },

      whyChoose: {
        title: "لماذا يختار المرضى البحرينيون الهند للعلاج الطبي",
        reasons: [
          {
            num: "1",
            title: "توفير كبير في التكاليف (65-80%)",
            content: "الرعاية الصحية في القطاع الخاص بالبحرين مكلفة. تكلف جراحة القلب المفتوح 18,000-25,000 دينار بحريني (48,000-66,000 دولار) في المستشفيات الخاصة بالبحرين، لكنها تكلف فقط 3,800-5,200 دينار بحريني (10,000-14,000 دولار) في الهند - توفير قدره 14,200 دينار بحريني (38,000 دولار). بينما الرعاية الصحية الحكومية مدعومة للمواطنين البحرينيين، فإن فترات الانتظار ومحدودية التخصصات تدفع الكثيرين نحو الخيارات الخاصة أو العلاج في الخارج.",
            content2: "مع إضافة تكاليف الرحلات (200-350 دينار بحريني)، والإقامة (350 دينار بحريني/أسبوع)، والتأشيرة الطبية (30 دينار بحريني)، يوفر المرضى البحرينيون 65-80% من إجمالي النفقات. الدينار البحريني (المربوط بالدولار عند ~2.65 دولار) يوفر قوة شرائية قوية في الهند، مما يجعل العلاج عالمي المستوى ميسور التكلفة بشكل ملحوظ."
          },
          {
            num: "2",
            title: "الوصول لعلاجات متقدمة غير متوفرة محلياً",
            content: "بينما تمتلك البحرين رعاية صحية عامة جيدة، بعض العلاجات المتقدمة محدودة: زراعة الأعضاء المعقدة، الجراحة الروبوتية المتقدمة، العلاج بالبروتون للسرطان، وإجراءات الأطفال المتخصصة. تقدم الهند كل هذا في مستشفيات معتمدة من JCI مع جراحين يجرون مئات الحالات المعقدة سنوياً.",
            content2: "معدلات النجاح ممتازة: 98.5% لجراحة القلب، 95-98% لاستبدال المفاصل، 90-95% لزراعة الكلى، و85-92% لعلاج السرطان (المرحلة المبكرة). المستشفيات الهندية تصنف ضمن أفضل المرافق الطبية في آسيا مع أحدث التقنيات."
          },
          {
            num: "3",
            title: "رحلات مباشرة من البحرين (3.5 ساعات)",
            content: "تشغل طيران الخليج وإير إنديا وشركات أخرى رحلات يومية مباشرة من مطار البحرين الدولي إلى المدن الهندية الرئيسية. وقت الرحلة أقصر من السفر إلى معظم الوجهات الطبية الأوروبية!",
            flights: [
              "البحرين إلى مومباي: 3.5 ساعات (2-3 رحلات يومياً)",
              "البحرين إلى دلهي: 4 ساعات (1-2 رحلات يومياً)",
              "البحرين إلى كوتشي: 4 ساعات (1-2 رحلات يومياً)",
              "البحرين إلى تشيناي: 4.5 ساعات (رحلة واحدة يومياً)",
              "البحرين إلى حيدر آباد: 4 ساعات (رحلة واحدة يومياً)"
            ]
          },
          {
            num: "4",
            title: "إجراءات تأشيرة طبية بسيطة",
            content: "يمكن لحاملي جوازات السفر البحرينية والمقيمين في البحرين الحصول على تأشيرة طبية إلكترونية هندية عبر الإنترنت في 3-5 أيام عمل. العملية بسيطة: ملء طلب إلكتروني، تحميل جواز السفر والمستندات الطبية، واستلام التأشيرة إلكترونياً. التأشيرة الطبية صالحة لمدة 60 يوماً (قابلة للتمديد) مع دخول ثلاثي.",
            content2: "يمكن لأفراد العائلة المرافقة بتأشيرة مرافق طبي. تتعامل شفاء الهند مع عملية التأشيرة بأكملها بدون تكلفة إضافية، بما في ذلك خطاب الدعوة من المستشفى. حاملو الجوازات البحرينية يتمتعون بمعالجة تأشيرة مبسطة."
          },
          {
            num: "5",
            title: "اعتراف NHRA وإطار الجودة",
            content: "تحافظ الهيئة الوطنية لتنظيم المهن والخدمات الصحية (NHRA) في البحرين على معايير الجودة للرعاية الصحية وتعترف بالاعتمادات الدولية التي تحملها المستشفيات الهندية الكبرى. عدة مستشفيات هندية تلبي معايير NHRA للعلاج في الخارج. تقدم المستشفيات الهندية خدمات شاملة للمرضى البحرينيين:",
            services: [
              "منسقون ومترجمون ناطقون بالعربية (العربية الخليجية)",
              "طعام حلال 100% في كافتيريات المستشفى ووجبات المرضى",
              "غرف صلاة باتجاه القبلة في كل طابق",
              "خدمة استقبال VIP من مطار البحرين الدولي",
              "إقامة في فنادق قريبة (20-50 دينار بحريني/ليلة)",
              "استشارات فيديو مجانية قبل السفر",
              "متابعة بعد العلاج عبر واتساب/مكالمات فيديو",
              "تسهيلات رمضان والأعياد الإسلامية"
            ]
          },
          {
            num: "6",
            title: "روابط ثقافية واقتصادية قوية بين البحرين والهند",
            content: "تتشارك البحرين والهند روابط تاريخية وثقافية واقتصادية عميقة. يوجد مجتمع هندي كبير في البحرين (أكثر من 350,000 شخص)، مما يجعله أكبر مجموعة وافدة. العديد من البحرينيين زاروا الهند للأعمال والسياحة. المستشفيات الهندية في مومباي ودلهي وكوتشي معتادة على المرضى البحرينيين. الألفة الثقافية، مع الطاقم الناطق بالعربية والمرافق الحلال، تضمن تجربة طبية مريحة."
          }
        ]
      },

      costComparison: {
        title: "مقارنة التكاليف: البحرين مقابل الهند (جميع المبالغ بالدينار البحريني)",
        procedures: [
          { name: "جراحة القلب المفتوح (CABG)", bahrain: "18,000 - 25,000", india: "3,800 - 5,200", savings: "14,200", percent: "76%" },
          { name: "استبدال الركبة", bahrain: "7,000 - 9,500", india: "1,800 - 2,500", savings: "5,200", percent: "74%" },
          { name: "زراعة الكبد", bahrain: "35,000 - 48,000", india: "9,000 - 14,000", savings: "26,000", percent: "74%" },
          { name: "علاج أطفال الأنابيب (دورة واحدة)", bahrain: "3,500 - 5,200", india: "1,050 - 1,600", savings: "2,450", percent: "70%" },
          { name: "جراحة العمود الفقري", bahrain: "9,000 - 13,000", india: "2,250 - 3,500", savings: "6,750", percent: "75%" },
          { name: "علاج السرطان (6 دورات كيماوي)", bahrain: "12,000 - 18,000", india: "2,800 - 4,500", savings: "9,200", percent: "77%" },
          { name: "زراعة الأسنان (الفم بالكامل)", bahrain: "7,000 - 10,500", india: "1,400 - 2,200", savings: "5,600", percent: "80%" },
          { name: "جراحة السمنة", bahrain: "5,500 - 8,500", india: "1,400 - 2,200", savings: "4,100", percent: "75%" }
        ],
        totalCostTitle: "إجمالي التكاليف بما في ذلك السفر (مثال: جراحة القلب المفتوح)",
        totalCostItems: [
          "الجراحة في الهند: 4,500 دينار بحريني",
          "تذاكر الطيران ذهاباً وإياباً (شخصان): 450 دينار بحريني",
          "الإقامة (أسبوعان): 700 دينار بحريني",
          "الطعام والنقل: 250 دينار بحريني",
          "الإجمالي: 5,900 دينار بحريني (مقابل 21,500 دينار بحريني في البحرين) = توفير 15,600 دينار بحريني!"
        ]
      },

      hospitals: {
        title: "أفضل 5 مستشفيات للمرضى البحرينيين",
        list: [
          {
            num: "1",
            name: "مستشفيات أبولو - مومباي، دلهي، تشيناي",
            why: "أكبر شبكة مستشفيات خاصة في آسيا مع 71 مستشفى. معتمد من JCI. خبرة واسعة مع المرضى البحرينيين والخليجيين. شراكة مع شركات تأمين خليجية للعلاج بدون نقد. باقات سياحة علاجية شاملة.",
            specialties: "جراحة القلب، الأورام، زراعة الأعضاء، جراحة العظام، علوم الأعصاب",
            successRates: "98.5% جراحة القلب، 95% استبدال الركبة، 85% شفاء من السرطان",
            bahrainPerks: "مكتب خليجي مخصص، منسقون عرب، شراكة مع طيران الخليج، منشأة بمعايير NHRA",
            accreditations: "JCI، NABH، ISO 9001",
            annual: "أكثر من 150,000 جراحة"
          },
          {
            num: "2",
            name: "فورتيس للرعاية الصحية - دلهي، مومباي، بنغالور",
            why: "54 مستشفى في جميع أنحاء الهند. سجل حافل مع المرضى البحرينيين. فوترة مباشرة مع شركات تأمين خليجية مختارة. معروف بعلوم القلب ورعاية السرطان وزراعة الأعضاء.",
            specialties: "علوم القلب، علوم الأعصاب، الأورام، علوم الكلى، زراعة نخاع العظام",
            successRates: "97.8% جراحة القلب، 92% شفاء من السرطان (المرحلة المبكرة)، 98% زراعة الكلى",
            bahrainPerks: "استشارة فيديو مجانية، خط مساعدة عربي 24/7، ضمان طعام حلال، أجنحة VIP",
            accreditations: "JCI، NABH، NABL",
            annual: "أكثر من 200,000 جراحة"
          },
          {
            num: "3",
            name: "ميدانتا - ذا ميديسيتي، جورجاون (دلهي)",
            why: "مستشفى متعدد التخصصات مشهور عالمياً. أسسه د. نريش تريهان (48,000+ جراحة قلب). منشأة 1,250 سرير. شائع بين المرضى البحرينيين لجراحة القلب وزراعة الكبد.",
            specialties: "جراحة القلب، زراعة الكبد، السرطان، علوم الأعصاب، زراعة نخاع العظام",
            successRates: "99.6% جراحة القلب (فريق د. تريهان)، 95% زراعة الكبد",
            bahrainPerks: "مكتب مخصص للمرضى الخليجيين، مترجمون عرب، غرفة صلاة في كل طابق، تنسيق VIP",
            accreditations: "JCI، NABH",
            annual: "أكثر من 22,000 جراحة قلب، أكثر من 250 زراعة كبد"
          },
          {
            num: "4",
            name: "أستر ميدسيتي - كوتشي، كيرالا",
            why: "جزء من أستر دي إم للرعاية الصحية (مقرها دبي). فهم عميق لاحتياجات المرضى الخليجيين. موقع مريح مع رحلات مباشرة من البحرين إلى كوتشي. معروف بالرعاية الجيدة بأسعار معقولة.",
            specialties: "علوم القلب، الأورام، علوم الأعصاب، زراعة الأعضاء، جراحة العظام",
            successRates: "97% جراحة القلب، 93% زراعة الكلى، 90% شفاء من السرطان (المرحلة المبكرة)",
            bahrainPerks: "وجود أستر في البحرين يضمن إحالات سلسة، طاقم عربي، طعام حلال، منسقون للمرضى الخليجيين",
            accreditations: "JCI، NABH",
            annual: "أكثر من 30,000 جراحة"
          },
          {
            num: "5",
            name: "ماكس للرعاية الصحية - دلهي، مومباي",
            why: "17 مستشفى مع أقسام ممتازة لجراحة العظام والسمنة وأطفال الأنابيب. معروف باستبدال المفاصل المعقدة والإجراءات طفيفة التوغل ورعاية السرطان الشاملة.",
            specialties: "جراحة العظام، جراحة السمنة، أطفال الأنابيب، السرطان، علوم الأعصاب",
            successRates: "96% استبدال الركبة، 65% أطفال الأنابيب (تحت 35)، 85% جراحة السمنة (شفاء من السكري)",
            bahrainPerks: "استشارة فيديو مجانية، صالة المطار، منسقون خليجيون مخصصون، دعم بالعربية",
            accreditations: "JCI، NABH",
            annual: "أكثر من 50,000 جراحة"
          }
        ]
      },

      patientStory: {
        title: "قصة مريضة حقيقية: نورة من المنامة",
        quote: "وفّرت 4,800 دينار بحريني على علاج أطفال الأنابيب وأنا الآن حامل بتوأم!",
        patient: "نورة أ.، 34 عاماً من سكان المنامة، محاسبة",
        condition: "عقم أولي لمدة 5 سنوات (تكيس المبايض مع انخفاض مخزون المبيض)",
        treatment: "أطفال الأنابيب مع الحقن المجهري (دورتان في الهند)",
        localQuoteTitle: "عرض الأسعار في البحرين:",
        localQuoteItems: [
          "مستشفى البحرين الملكي (خاص): 4,200 دينار بحريني لكل دورة أطفال أنابيب",
          "مستشفى الهلال: 3,800 دينار بحريني لكل دورة",
          "دورتان مطلوبتان: 7,600-8,400 دينار بحريني إجمالي",
          "معدل النجاح محلياً: 35-40% لكل دورة",
          "وقت الانتظار: 2-3 أشهر لكل دورة"
        ],
        indiaExpTitle: "تجربة الهند:",
        indiaExpItems: [
          "استشارة فيديو مع أخصائية أطفال أنابيب في مستشفى ماكس دلهي (مجانية)",
          "طارت على طيران الخليج (البحرين إلى دلهي): 220 دينار بحريني ذهاباً وإياباً لشخصين",
          "دورتا أطفال أنابيب في مستشفى ماكس: 2,800 دينار بحريني إجمالي (شاملة الكل)",
          "زيارات المستشفى: متعددة على مدار رحلتين (3 أسابيع لكل رحلة)",
          "الفندق: 25 دينار بحريني/ليلة × 40 ليلة = 1,000 دينار بحريني",
          "الطعام والنقل: 400 دينار بحريني",
          "إجمالي التكلفة: 4,420 دينار بحريني (مقابل 7,600-8,400 دينار بحريني في البحرين)",
          "التوفير: 3,180-3,980 دينار بحريني (42-47%)",
          "معدل نجاح أعلى: 55-65% لكل دورة (تحت 35)"
        ],
        testimony: "بعد 5 سنوات من محاولة الحمل طبيعياً ودورة أطفال أنابيب فاشلة في البحرين، كنت محطمة وتنفد خياراتي. صديقة نصحت بشفاء الهند. استشارة الفيديو مع أخصائية أطفال الأنابيب في مستشفى ماكس أعطتني أمل - كان لديها خطة واضحة. الدورة الأولى في الهند لم تنجح، لكن الفريق عدّل البروتوكول. الدورة الثانية نجحت - توأم! الرعاية كانت لا تصدق. المستشفى لديه طاقم نسائي ناطق بالعربية يفهم احتياجاتنا الثقافية. التكلفة كانت تقريباً نصف ما كنت سأدفعه في البحرين لدورتين، ومعدل النجاح أعلى. لا أستطيع أن أنصح بهذا بما يكفي للأزواج البحرينيين الذين يعانون من مشاكل الخصوبة.",
        result: "نجاح أطفال الأنابيب في الدورة الثانية، تأكيد حمل بتوأم، ولادة صحية في الأسبوع 37 في البحرين"
      },

      faqSection: {
        title: "الأسئلة الشائعة (المرضى البحرينيون)",
        questions: [
          {
            q: "1. هل العلاج الطبي في الهند آمن للمرضى البحرينيين؟",
            a: "نعم، آمن تماماً. تتبع أفضل مستشفيات الهند (المعتمدة من JCI) نفس معايير السلامة الدولية المعترف بها من NHRA البحرين. معدلات النجاح للإجراءات الكبرى تطابق أو تتجاوز أفضل المستشفيات عالمياً. أكثر من 500,000 مريض دولي من 150+ دولة يختارون الهند سنوياً. عدة مستشفيات هندية تلبي معايير جودة NHRA."
          },
          {
            q: "2. كم يمكنني التوفير مقارنة بالبحرين؟",
            a: "65-80% في المتوسط. حتى بعد إضافة تكاليف الرحلات (200-350 دينار بحريني)، والإقامة (350-700 دينار بحريني)، والتأشيرة (30 دينار بحريني)، توفر 2,000-26,000 دينار بحريني حسب الإجراء. جراحة القلب توفر ~14,200 دينار بحريني، استبدال الركبة ~5,200 دينار بحريني، زراعة الكبد ~26,000 دينار بحريني. القيمة العالية للدينار البحريني تجعل الهند ميسورة التكلفة بشكل استثنائي."
          },
          {
            q: "3. ما هي عملية التأشيرة الطبية للمواطنين البحرينيين؟",
            a: "بسيطة جداً. قدم عبر الإنترنت للحصول على تأشيرة طبية إلكترونية (موافقة في 3-5 أيام). المطلوب: جواز السفر، خطاب دعوة من المستشفى (نوفره نحن)، التقارير الطبية. التكلفة: 30 دينار بحريني. صالحة لمدة 60 يوماً مع دخول ثلاثي. أفراد العائلة يحصلون على تأشيرة مرافق طبي. حاملو الجوازات البحرينية يتمتعون بمعالجة مبسطة."
          },
          {
            q: "4. ما دور NHRA في العلاج في الخارج؟",
            a: "الهيئة الوطنية لتنظيم المهن والخدمات الصحية (NHRA) في البحرين تضع معايير الجودة والسلامة للرعاية الصحية. بينما تنظم NHRA بشكل رئيسي الرعاية الصحية المحلية، فإنها تعترف بالاعتمادات الدولية (JCI، NABH) التي تحملها المستشفيات الهندية الكبرى. يمكن للمرضى التحقق من أن مستشفاهم الهندي المختار يلبي المعايير الدولية من خلال إرشادات NHRA."
          },
          {
            q: "5. هل توجد رحلات مباشرة من البحرين إلى الهند؟",
            a: "نعم! طيران الخليج وإير إنديا يشغلان رحلات يومية مباشرة: البحرين إلى مومباي (3.5 ساعات)، دلهي (4 ساعات)، كوتشي (4 ساعات)، تشيناي (4.5 ساعات)، وحيدر آباد (4 ساعات). تكلفة التذاكر ذهاباً وإياباً 100-180 دينار بحريني للشخص. طيران الخليج يقدم باقات سياحة علاجية مع سماح أمتعة إضافي."
          },
          {
            q: "6. هل يمكنني استخدام تأميني الصحي البحريني؟",
            a: "بعض خطط التأمين البحرينية تغطي العلاج الدولي. تحقق مع شركة التأمين (أكسا، سوليداريتي، الاتحاد الخليجي، BKIC، إلخ) حول التغطية في الخارج. بعض المستشفيات الهندية لديها فوترة مباشرة مع شركات تأمين خليجية. إذا لم يتم التغطية، ادفع مقدماً وقدم مطالبة سداد مع فواتير المستشفى وملخص الخروج عند عودتك إلى البحرين."
          },
          {
            q: "7. هل الهند جيدة لعلاج الخصوبة (أطفال الأنابيب)؟",
            a: "نعم، الهند هي واحدة من أفضل وجهات أطفال الأنابيب عالمياً. معدلات النجاح 55-65% لكل دورة للنساء تحت 35 (مقارنة بـ 35-40% في العديد من عيادات الخليج). مراكز الخصوبة الهندية الكبرى لديها مختبرات متقدمة وأطباء خبراء في الغدد الصماء التناسلية وتقدم باقات شاملة بتكلفة أقل 50-60%. العديد من الأزواج البحرينيين يختارون الهند لأطفال الأنابيب بعد محاولات محلية غير ناجحة."
          },
          {
            q: "8. كم من الوقت أحتاج للبقاء في الهند للعلاج؟",
            a: "يعتمد على الإجراء: الإجراءات البسيطة (الأسنان، الساد، التنظير): 3-5 أيام. الإجراءات المتوسطة (استبدال الركبة، الفتق): 10-14 يوماً. الإجراءات المعقدة (جراحة القلب، زراعة الأعضاء): 3-4 أسابيع. أطفال الأنابيب عادة يتطلب 2-3 أسابيع لكل دورة. علاج السرطان قد يتطلب زيارات متعددة. نوفر جداول زمنية مقدرة خلال استشارة الفيديو المجانية."
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
        { name: locale === 'ar' ? 'السياحة العلاجية من البحرين إلى الهند' : 'Bahrain to India Medical Tourism Guide', url: 'https://shifaalhind.onrender.com/blog/bahrain-to-india-medical-tourism' }
      ]} />

      {/* Article Schema for SEO */}
      <ArticleSchema
        headline={locale === 'ar' ? "السياحة العلاجية من البحرين إلى الهند: دليل شامل للمرضى البحرينيين" : "Medical Tourism from Bahrain to India: Complete Guide for Bahraini Patients"}
        description={locale === 'ar' ? "دليل شامل للمرضى البحرينيين الذين يسعون للعلاج في الهند. التكاليف، المستشفيات، التأشيرة، ومعلومات السفر." : "Complete guide for Bahraini patients seeking treatment in India. Costs, hospitals, visa, and travel information."}
        image="https://shifaalhind.onrender.com/images/blog/bahrain-medical-tourism.jpg"
        datePublished="2026-03-01"
        dateModified="2026-03-01"
        author={DEFAULT_AUTHOR}
        publisher={DEFAULT_PUBLISHER}
        url="https://shifaalhind.onrender.com/blog/bahrain-to-india-medical-tourism"
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
            href="https://wa.me/919876543210?text=Hello%20Shifa%20AlHind%2C%20I%20am%20from%20Bahrain%20and%20interested%20in%20medical%20treatment%20in%20India"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            {locale === 'ar' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
          </a>
        </CardContent>
      </Card>

      {/* Why Bahraini Patients Choose India */}
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
                    {locale === 'ar' ? 'تكلفة البحرين (د.ب)' : 'Bahrain Cost (BHD)'}
                  </th>
                  <th className="border p-3 text-right">
                    {locale === 'ar' ? 'تكلفة الهند (د.ب)' : 'India Cost (BHD)'}
                  </th>
                  <th className="border p-3 text-right">
                    {locale === 'ar' ? 'التوفير (د.ب)' : 'Savings (BHD)'}
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
                    <td className="border p-3 text-right">{proc.bahrain}</td>
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
                  <strong>{locale === 'ar' ? 'لماذا يختار المرضى البحرينيون' : 'Why Bahraini patients choose'} {hospital.name.split(' - ')[0]}:</strong> {hospital.why}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li><strong>{locale === 'ar' ? 'التخصصات:' : 'Specialties:'}</strong> {hospital.specialties}</li>
                  <li><strong>{locale === 'ar' ? 'معدلات النجاح:' : 'Success rates:'}</strong> {hospital.successRates}</li>
                  <li><strong>{locale === 'ar' ? 'مزايا للمرضى البحرينيين:' : 'Bahrain patient perks:'}</strong> {hospital.bahrainPerks}</li>
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
              ? 'انضم إلى آلاف المرضى البحرينيين الذين وفروا 65-80% على العلاج الطبي في الهند. استشارة مجانية ومساعدة في التأشيرة.'
              : 'Join thousands of Bahraini patients who saved 65-80% on medical treatment in India. Free consultation and visa assistance.'}
          </p>
          <a
            href="https://wa.me/919876543210?text=Hello%20Shifa%20AlHind%2C%20I%20am%20from%20Bahrain%20and%20need%20medical%20treatment%20in%20India"
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
        title={locale === 'ar' ? "موارد ذات صلة للمرضى البحرينيين" : "Related Resources for Bahraini Patients"}
        links={[
          {
            title: locale === 'ar' ? 'أفضل المستشفيات للسياحة العلاجية' : 'Best Hospitals for Medical Tourism',
            href: '/hospitals',
            description: locale === 'ar' ? 'تصفح المستشفيات المعتمدة من JCI في جميع أنحاء الهند' : 'Browse JCI-accredited hospitals across India',
          },
          {
            title: locale === 'ar' ? 'علاج الخصوبة وأطفال الأنابيب في الهند' : 'IVF & Fertility Treatment in India',
            href: '/treatments/ivf-fertility',
            description: locale === 'ar' ? 'مراكز خصوبة عالمية المستوى بمعدلات نجاح عالية' : 'World-class fertility centers with high success rates',
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
        { question: "كم يمكن للمرضى البحرينيين التوفير في الهند؟", answer: "متوسط التوفير: 65-80% في معظم الإجراءات. جراحة القلب المفتوح: توفير 14,200 دينار بحريني (76%)، استبدال الركبة: 5,200 دينار بحريني (74%)، زراعة الكبد: 26,000 دينار بحريني (74%). الدينار البحريني القوي يمنح قوة شرائية ممتازة في الهند." },
        { question: "ما دور NHRA البحرين في العلاج بالخارج؟", answer: "الهيئة الوطنية لتنظيم المهن والخدمات الصحية (NHRA) تضع معايير الجودة وتعترف بالاعتمادات الدولية (JCI، NABH) التي تحملها المستشفيات الهندية الكبرى. يمكن للمرضى التحقق من أن مستشفاهم المختار يلبي المعايير الدولية." },
        { question: "كم يستغرق الطيران من البحرين إلى الهند؟", answer: "البحرين إلى مومباي: 3.5 ساعات، دلهي: 4 ساعات، كوتشي: 4 ساعات. رحلات يومية من طيران الخليج وإير إنديا. التذاكر 100-180 دينار بحريني ذهاباً وإياباً. التأشيرة الطبية الإلكترونية تتم في 3-5 أيام." },
        { question: "هل تلبي المستشفيات الهندية الاحتياجات الثقافية البحرينية؟", answer: "نعم! توفر أفضل المستشفيات: منسقين ناطقين بالعربية الخليجية، طعام حلال، غرف صلاة باتجاه القبلة، رعاية خاصة بالجنس، تسهيلات رمضان. المستشفيات لديها خبرة طويلة مع المرضى الخليجيين والبحرينيين." },
        { question: "هل الهند جيدة لعلاج أطفال الأنابيب؟", answer: "نعم، الهند واحدة من أفضل وجهات أطفال الأنابيب عالمياً. معدلات النجاح 55-65% للنساء تحت 35 (مقارنة بـ 35-40% في عيادات الخليج). باقات شاملة بتكلفة أقل 50-60%. العديد من الأزواج البحرينيين يختارون الهند بعد محاولات محلية غير ناجحة." },
        { question: "هل يمكنني استخدام تأميني البحريني؟", answer: "بعض خطط التأمين البحرينية (أكسا، سوليداريتي، الاتحاد الخليجي، BKIC) تغطي العلاج الدولي. بعض المستشفيات الهندية لديها فوترة مباشرة مع شركات تأمين خليجية. إذا لم يتم التغطية، ادفع مقدماً وقدم مطالبة سداد." },
        { question: "هل يمكن لعائلتي مرافقتي؟", answer: "نعم! أفراد العائلة يحصلون على تأشيرة مرافق طبي. نساعد في ترتيب إقامة عائلية قريبة من المستشفى. المستشفيات توفر غرف خاصة بأسرة إضافية ومنسقين عرب لمساعدة العائلة." },
        { question: "ماذا يحدث بعد العودة إلى البحرين؟", answer: "نوفر متابعة شاملة: تقارير طبية مفصلة لطبيبك في البحرين، استشارات فيديو مجانية مع الطبيب المعالج في الهند، متابعة عبر واتساب لمدة 6 أشهر، مساعدة في تنسيق رعاية المتابعة المحلية." }
      ] : [
        { question: "How much can Bahraini patients save in India?", answer: "Average savings: 65-80% on most procedures. Heart bypass: BHD 14,200 saved (76%), Knee replacement: BHD 5,200 (74%), Liver transplant: BHD 26,000 (74%). The strong Bahraini Dinar gives excellent purchasing power in India." },
        { question: "What role does Bahrain's NHRA play in overseas treatment?", answer: "The National Health Regulatory Authority (NHRA) sets quality standards and recognizes international accreditations (JCI, NABH) held by top Indian hospitals. Patients can verify their chosen hospital meets international standards through NHRA guidelines." },
        { question: "How long does it take to fly from Bahrain to India?", answer: "Bahrain to Mumbai: 3.5 hours, Delhi: 4 hours, Kochi: 4 hours. Daily flights on Gulf Air and Air India. Tickets cost BHD 100-180 round trip. e-Medical Visa processed in 3-5 days." },
        { question: "Do Indian hospitals accommodate Bahraini cultural needs?", answer: "Yes! Top hospitals provide: Arabic-speaking coordinators (Gulf Arabic), halal food, prayer rooms with Qibla direction, gender-specific care, Ramadan accommodations. Hospitals have extensive experience with Gulf and Bahraini patients." },
        { question: "Is India good for IVF treatment?", answer: "Yes, India is one of the top IVF destinations globally. Success rates are 55-65% for women under 35 (vs 35-40% at Gulf clinics). Comprehensive packages at 50-60% lower cost. Many Bahraini couples choose India after unsuccessful local IVF attempts." },
        { question: "Can I use my Bahrain health insurance?", answer: "Some Bahraini insurance plans (AXA, Solidarity, Gulf Union, BKIC) cover international treatment. Some Indian hospitals have direct billing with Gulf insurers. If not covered, pay upfront and claim reimbursement with hospital invoices." },
        { question: "Can my family accompany me?", answer: "Yes! Family members get Medical Attendant visas. We arrange family accommodation near the hospital. Hospitals provide private rooms with extra beds and Arabic coordinators to assist the family." },
        { question: "What happens after I return to Bahrain?", answer: "We provide comprehensive follow-up: detailed medical reports for your Bahrain doctor, free video consultations with the treating doctor in India, WhatsApp follow-up for 6 months, assistance coordinating local follow-up care." }
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
        title={locale === 'ar' ? "السياحة العلاجية من البحرين إلى الهند: دليل شامل" : "Medical Tourism from Bahrain to India: Complete Guide"}
        url="/blog/bahrain-to-india-medical-tourism"
        description={locale === 'ar' ? "دليل شامل للمرضى البحرينيين. وفّر 65-80% على العلاج الطبي في الهند. رحلات مباشرة، مستشفيات JCI، عملية تأشيرة سهلة." : "Complete guide for Bahraini patients. Save 65-80% on medical treatment in India. Direct flights, JCI hospitals, easy visa process."}
      />

      {/* Related Articles */}
      <RelatedArticles articles={CANCER_RELATED_ARTICLES} />
    </BlogArticleLayout>
  );
}

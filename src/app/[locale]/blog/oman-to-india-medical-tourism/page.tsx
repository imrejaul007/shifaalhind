import BlogArticleLayout from '@/components/blog/blog-article-layout';
import { Card, CardContent } from '@/components/ui/card';
import { InternalLinks } from '@/components/seo/internal-links';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles, CANCER_RELATED_ARTICLES } from '@/components/blog/related-articles';
import { BreadcrumbSchema } from '@/components/seo/breadcrumb-schema';
import { ArticleSchema, DEFAULT_AUTHOR, DEFAULT_PUBLISHER } from '@/components/seo/article-schema';

export const dynamic = 'force-dynamic';

export default async function OmanToIndiaMedicalTourismPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const content = {
    en: {
      title: "Medical Tourism from Oman to India: Complete Guide for Omani Patients",
      excerpt: "Comprehensive guide for Omani patients seeking medical treatment in India. Save 60-80% on world-class healthcare. Direct flights from Muscat (3 hours), JCI-accredited hospitals, easy medical visa, and dedicated Arabic-speaking patient services.",
      readTime: "12 min",
      breadcrumbTitle: "Oman to India Medical Tourism",

      intro: {
        p1: "Oman has been steadily developing its healthcare infrastructure, with institutions like Royal Hospital, Sultan Qaboos University Hospital, and Khoula Hospital providing quality care. However, for specialized treatments, complex surgeries, and cost-effective medical procedures, thousands of Omani patients travel to India every year.",
        p2: "India is the closest major medical tourism destination for Omanis, with direct flights from Muscat taking just 3 hours to Mumbai and Kochi. With savings of 60-80% compared to private healthcare in Oman, JCI-accredited hospitals, and a large Indian community that shares cultural ties with Oman, India offers the ideal combination of quality, affordability, and comfort.",
        p3: "This comprehensive guide covers everything Omani patients need to know: direct flights from Muscat International Airport, medical visa process, cost comparisons in OMR, top hospitals with Arabic-speaking staff, the role of Oman's Ministry of Health in overseas treatment, and real patient experiences. Whether you need cardiac surgery, cancer treatment, or orthopedic care, this guide will help you plan your medical journey."
      },

      whyChoose: {
        title: "Why Omani Patients Choose India for Medical Treatment",
        reasons: [
          {
            num: "1",
            title: "Major Cost Savings (60-80%)",
            content: "Healthcare costs in Oman's private sector are rising. A heart bypass surgery costs OMR 18,000-25,000 ($47,000-$65,000) at private hospitals in Muscat, but only OMR 3,800-5,300 ($10,000-$14,000) in India - a savings of OMR 14,200 ($37,000). Even government hospitals have long waiting lists for complex procedures.",
            content2: "Including return flights (OMR 220-350), accommodation (OMR 350/week), and medical visa (OMR 30), Omani patients still save 60-80% on total medical expenses. The Omani Rial's strong purchasing power in India makes treatment incredibly affordable."
          },
          {
            num: "2",
            title: "World-Class Hospitals with International Standards",
            content: "India has over 40 JCI-accredited hospitals matching the highest international standards. These hospitals use cutting-edge technology including robotic surgery, proton beam therapy, and the latest immunotherapy protocols. Doctors are trained at top global institutions and perform thousands of procedures annually.",
            content2: "Success rates are exceptional: 98.5% for cardiac surgery, 95-98% for joint replacements, 90-95% for kidney transplants, and 85-92% for cancer treatment (early stage). India ranks among the top 5 global destinations for medical tourism."
          },
          {
            num: "3",
            title: "Direct Flights from Muscat (3 Hours)",
            content: "Oman Air and other carriers operate multiple daily non-stop flights from Muscat International Airport to major Indian cities. India is the closest major medical hub for Omani patients, closer than any European destination!",
            flights: [
              "Muscat to Mumbai: 3 hours (3-4 daily flights)",
              "Muscat to Kochi: 3.5 hours (2-3 daily flights)",
              "Muscat to Delhi: 4 hours (2-3 daily flights)",
              "Muscat to Chennai: 4 hours (2 daily flights)",
              "Muscat to Bangalore: 4 hours (1-2 daily flights)"
            ]
          },
          {
            num: "4",
            title: "Simple Medical Visa Process",
            content: "Omani passport holders and residents can obtain an Indian e-Medical Visa online in 3-5 business days. The application is straightforward: fill an online form, upload passport and medical documents, and receive the visa electronically. Medical visa is valid for 60 days (extendable) with triple entry.",
            content2: "Family members can accompany on Medical Attendant visas. Shifa AlHind handles the complete visa process at no extra cost, including the hospital invitation letter required for application."
          },
          {
            num: "5",
            title: "Oman MOH Overseas Treatment Program",
            content: "The Oman Ministry of Health has an established overseas treatment program that sends patients to India for specialized procedures not available locally. Several top Indian hospitals are on the MOH-approved list. Additionally, Indian hospitals offer:",
            services: [
              "Arabic-speaking coordinators and translators familiar with Omani dialect",
              "100% halal food in hospital cafeterias and patient meals",
              "Prayer rooms with Qibla direction on every floor",
              "Airport pickup/drop service from Muscat International",
              "Accommodation in nearby hotels (OMR 20-50/night)",
              "FREE video consultations before travel",
              "Post-treatment follow-up via WhatsApp/video calls",
              "Ramadan and Islamic holiday accommodations"
            ]
          },
          {
            num: "6",
            title: "Strong Oman-India Cultural Connection",
            content: "Oman and India share centuries of trade and cultural ties. There is a large Indian community in Oman (over 600,000 people) and many Omanis have visited India. Hospitals in Mumbai and Kochi are especially familiar with Omani patients and culture. Many Indian doctors have trained or worked in Oman's hospitals, creating a comfortable bridge for medical tourism. The Omani Balochi and Lawati communities have particularly strong Indian connections."
          }
        ]
      },

      costComparison: {
        title: "Cost Comparison: Oman vs India (All Amounts in OMR)",
        procedures: [
          { name: "Heart Bypass (CABG)", oman: "18,000 - 25,000", india: "3,800 - 5,300", savings: "14,200", percent: "76%" },
          { name: "Knee Replacement", oman: "7,500 - 10,000", india: "1,900 - 2,700", savings: "5,600", percent: "75%" },
          { name: "Liver Transplant", oman: "38,000 - 50,000", india: "9,600 - 15,000", savings: "28,400", percent: "75%" },
          { name: "IVF Treatment (1 cycle)", oman: "3,800 - 5,500", india: "1,150 - 1,700", savings: "2,650", percent: "70%" },
          { name: "Spine Surgery", oman: "9,600 - 14,000", india: "2,400 - 3,800", savings: "7,200", percent: "75%" },
          { name: "Cancer Treatment (6 cycles chemo)", oman: "12,000 - 19,000", india: "2,900 - 4,800", savings: "9,100", percent: "76%" },
          { name: "Dental Implants (full mouth)", oman: "7,500 - 11,000", india: "1,500 - 2,400", savings: "6,000", percent: "80%" },
          { name: "Bariatric Surgery", oman: "5,800 - 9,000", india: "1,500 - 2,400", savings: "4,300", percent: "74%" }
        ],
        totalCostTitle: "Total Costs Including Travel (Example: Heart Bypass)",
        totalCostItems: [
          "Surgery in India: OMR 4,550",
          "Round-trip flights (2 people): OMR 500",
          "Accommodation (2 weeks): OMR 700",
          "Food & transport: OMR 250",
          "Total: OMR 6,000 (vs OMR 21,500 in Oman) = OMR 15,500 saved!"
        ]
      },

      hospitals: {
        title: "Top 5 Hospitals for Omani Patients",
        list: [
          {
            num: "1",
            name: "Apollo Hospitals - Mumbai, Delhi, Chennai",
            why: "Asia's largest private hospital network with 71 hospitals. JCI-accredited. Strong presence in Oman through partnerships. Direct billing with some Omani insurance providers.",
            specialties: "Cardiac surgery, oncology, organ transplants, orthopedics, neurosciences",
            successRates: "98.5% heart surgery, 95% knee replacement, 85% cancer remission",
            omanPerks: "Dedicated Oman desk, Arabic coordinators, Oman Air partnership for medical tourism",
            accreditations: "JCI, NABH, ISO 9001",
            annual: "150,000+ surgeries"
          },
          {
            num: "2",
            name: "Aster Medcity - Kochi, Kerala",
            why: "Part of Aster DM Healthcare (headquartered in Dubai, founded by Indian-Omani Dr. Azad Moopen). Deep understanding of Omani patients. The closest major hospital to Muscat (3-hour flight to Kochi).",
            specialties: "Cardiac sciences, oncology, neurosciences, organ transplant, orthopedics",
            successRates: "97% cardiac surgery, 93% kidney transplant, 90% cancer remission (early stage)",
            omanPerks: "Aster presence in Oman means seamless referrals, Arabic staff, halal food, Omani patient coordinators",
            accreditations: "JCI, NABH",
            annual: "30,000+ surgeries"
          },
          {
            num: "3",
            name: "Fortis Healthcare - Delhi, Mumbai, Bangalore",
            why: "54 hospitals across India. Strong reputation among Gulf patients. Direct billing arrangements with several Omani insurance companies.",
            specialties: "Cardiac sciences, neurosciences, oncology, renal sciences, bone marrow transplant",
            successRates: "97.8% cardiac surgery, 92% cancer remission (early stage), 98% kidney transplant",
            omanPerks: "FREE video consultation, Arabic helpline 24/7, halal food guarantee, VIP suites",
            accreditations: "JCI, NABH, NABL",
            annual: "200,000+ surgeries"
          },
          {
            num: "4",
            name: "Medanta - The Medicity, Gurugram (Delhi NCR)",
            why: "One of the world's largest multi-specialty hospitals. Founded by Dr. Naresh Trehan (48,000+ heart surgeries). 1,250-bed facility with all specialties under one roof.",
            specialties: "Heart surgery, liver transplant, cancer, neurosciences, bone marrow transplant",
            successRates: "99.6% heart surgery (Dr. Trehan's team), 95% liver transplant",
            omanPerks: "Dedicated Gulf patient desk, Arabic translators, prayer room on every floor",
            accreditations: "JCI, NABH",
            annual: "22,000+ cardiac surgeries, 250+ liver transplants"
          },
          {
            num: "5",
            name: "Amrita Hospital - Kochi & Faridabad",
            why: "Leading hospital in Kerala with strong ties to Omani community. Excellent for cardiac care, orthopedics, and cancer treatment. Known for affordable pricing without compromising quality.",
            specialties: "Cardiac surgery, orthopedics, oncology, gastroenterology, neurosciences",
            successRates: "96% cardiac surgery, 94% knee replacement, 88% cancer remission",
            omanPerks: "Arabic support, halal meals, Omani patient experience team, proximity to Kochi airport",
            accreditations: "NABH, NABL",
            annual: "50,000+ surgeries"
          }
        ]
      },

      patientStory: {
        title: "Real Patient Story: Fatima from Muscat",
        quote: "I saved OMR 5,200 on my knee replacement and was walking again in 2 weeks.",
        patient: "Fatima S., 58-year-old Muscat resident, schoolteacher",
        condition: "Severe osteoarthritis in right knee (bone-on-bone, daily pain for 4 years)",
        treatment: "Total knee replacement (right knee)",
        localQuoteTitle: "Oman Quote:",
        localQuoteItems: [
          "Royal Hospital: OMR 8,500 (8-month waiting list)",
          "Muscat Private Hospital: OMR 10,000",
          "Insurance coverage: OMR 5,000 (balance OMR 3,500-5,000 out of pocket)",
          "Waiting time: 6-10 months at government hospitals"
        ],
        indiaExpTitle: "India Experience:",
        indiaExpItems: [
          "Video consultation with orthopedic surgeon at Aster Medcity Kochi (FREE)",
          "Flew Oman Air (Muscat to Kochi): OMR 240 roundtrip for 2 people",
          "Surgery cost at Aster Medcity: OMR 2,700 (all-inclusive package)",
          "Hospital stay: 4 days in private room",
          "Hotel: OMR 25/night x 8 nights = OMR 200",
          "Food & transport: OMR 120",
          "Total cost: OMR 3,260 (vs OMR 8,500-10,000 in Oman)",
          "Savings: OMR 5,240-6,740 (62-67%)",
          "Surgery completed within 1 week of booking"
        ],
        testimony: "I was amazed by the quality of care at Aster Medcity in Kochi. The hospital felt like home - they understood our Omani culture perfectly. My surgeon Dr. Thomas was excellent and explained everything in simple terms. The Arabic coordinator helped with everything from hospital admission to hotel booking. I was walking with a walker on day 2 after surgery! The physiotherapy team was outstanding. My Omani orthopedic doctor reviewed my X-rays and said the alignment is perfect. I'm now pain-free and back to teaching. The flight from Muscat to Kochi is so short, it felt like going to another city in Oman!",
        result: "Successful knee replacement, walking with walker on day 2, independent walking in 4 weeks, back to full activities in 3 months"
      },

      faqSection: {
        title: "Frequently Asked Questions (Omani Patients)",
        questions: [
          {
            q: "1. Is medical treatment in India safe for Omani patients?",
            a: "Yes, completely safe. India's top hospitals (JCI-accredited) follow the same international safety standards as Royal Hospital and Sultan Qaboos University Hospital. Success rates for major procedures match or exceed Oman's best hospitals. Over 500,000 international patients from 150+ countries choose India annually. The Oman MOH has an established overseas treatment program with Indian hospitals."
          },
          {
            q: "2. How much can I save compared to Oman?",
            a: "60-80% on average. Even after including flights (OMR 220-350), accommodation (OMR 200-700), and visa (OMR 30), you save OMR 2,000-28,000 depending on the procedure. Heart surgery saves ~OMR 14,200, knee replacement saves ~OMR 5,600, liver transplant saves ~OMR 28,400. The strong Omani Rial makes India exceptionally affordable."
          },
          {
            q: "3. What is the medical visa process for Omani citizens?",
            a: "Very simple. Apply online for an e-Medical Visa (3-5 days approval). Required documents: passport, hospital invitation letter (we provide), medical reports. Cost: OMR 30. Valid for 60 days with triple entry. Family members get Medical Attendant visa. Omani passport holders enjoy streamlined processing with no embassy visit required."
          },
          {
            q: "4. Does the Oman MOH support treatment in India?",
            a: "Yes, the Oman Ministry of Health has an established overseas treatment program. For specialized procedures not available locally, the MOH can refer patients to approved Indian hospitals with government funding. Even without MOH sponsorship, many Omanis choose India independently due to the massive cost savings and quality of care."
          },
          {
            q: "5. Which Indian city is best for Omani patients?",
            a: "Kochi (Kerala) is the closest and most popular - just 3 hours from Muscat with strong cultural ties. Mumbai is also excellent - 3 hours away with the largest number of top hospitals. Delhi offers the most hospital options including Medanta and Max. Chennai is great for cardiac and cancer treatment. We recommend based on your specific medical needs."
          },
          {
            q: "6. Can I use my Omani health insurance?",
            a: "Some insurance plans cover international treatment. Check with your insurer about overseas coverage. Hospitals like Apollo and Aster have tie-ups with Gulf insurers for cashless or direct billing. If not covered, pay upfront and claim reimbursement with hospital invoices, discharge summary, and medical reports when you return to Oman."
          },
          {
            q: "7. How close is Kochi to Muscat by flight?",
            a: "Kochi is just 3-3.5 hours from Muscat by direct flight. Oman Air and Air India Express operate multiple daily flights. Round-trip tickets cost OMR 100-180 per person. Kerala has a strong connection with Oman - many Keralites work in Oman, so the cultural understanding is excellent. Kochi has multiple world-class hospitals including Aster Medcity and Amrita Hospital."
          },
          {
            q: "8. How long do I need to stay in India for treatment?",
            a: "Depends on the procedure: Simple procedures (dental, cataract, endoscopy): 3-5 days. Moderate procedures (knee replacement, hernia): 10-14 days. Complex procedures (heart surgery, transplants): 3-4 weeks. Cancer treatment may require multiple visits. We provide estimated timelines during your FREE video consultation. Most patients return to Muscat within 2-3 weeks."
          }
        ]
      }
    },
    ar: {
      title: "السياحة العلاجية من عمان إلى الهند: دليل شامل للمرضى العمانيين",
      excerpt: "دليل شامل للمرضى العمانيين الذين يسعون للعلاج الطبي في الهند. وفّر 60-80% على الرعاية الصحية عالمية المستوى. رحلات مباشرة من مسقط (3 ساعات)، مستشفيات معتمدة من JCI، تأشيرة طبية سهلة، وخدمات مخصصة بالعربية.",
      readTime: "12 دقيقة",
      breadcrumbTitle: "السياحة العلاجية من عمان إلى الهند",

      intro: {
        p1: "تعمل عمان باستمرار على تطوير بنيتها التحتية للرعاية الصحية، حيث تقدم مؤسسات مثل المستشفى السلطاني ومستشفى جامعة السلطان قابوس ومستشفى خولة رعاية عالية الجودة. ومع ذلك، للعلاجات المتخصصة والجراحات المعقدة والإجراءات الطبية الفعالة من حيث التكلفة، يسافر آلاف المرضى العمانيين إلى الهند كل سنة.",
        p2: "الهند هي أقرب وجهة رئيسية للسياحة العلاجية للعمانيين، مع رحلات مباشرة من مسقط تستغرق 3 ساعات فقط إلى مومباي وكوتشي. مع توفير بنسبة 60-80% مقارنة بالرعاية الصحية الخاصة في عمان، ومستشفيات معتمدة من JCI، ومجتمع هندي كبير يشترك في روابط ثقافية مع عمان، تقدم الهند المزيج المثالي من الجودة والقدرة على تحمل التكاليف والراحة.",
        p3: "يغطي هذا الدليل الشامل كل ما يحتاج المرضى العمانيون معرفته: الرحلات المباشرة من مطار مسقط الدولي، عملية التأشيرة الطبية، مقارنات التكاليف بالريال العماني، أفضل المستشفيات مع طاقم ناطق بالعربية، دور وزارة الصحة العمانية في العلاج بالخارج، وتجارب المرضى الحقيقية. سواء كنت بحاجة لجراحة قلب أو علاج سرطان أو رعاية عظام، سيساعدك هذا الدليل في التخطيط لرحلتك العلاجية."
      },

      whyChoose: {
        title: "لماذا يختار المرضى العمانيون الهند للعلاج الطبي",
        reasons: [
          {
            num: "1",
            title: "توفير كبير في التكاليف (60-80%)",
            content: "تكاليف الرعاية الصحية في القطاع الخاص بعمان في ارتفاع. تكلف جراحة القلب المفتوح 18,000-25,000 ريال عماني (47,000-65,000 دولار) في المستشفيات الخاصة بمسقط، لكنها تكلف فقط 3,800-5,300 ريال عماني (10,000-14,000 دولار) في الهند - توفير قدره 14,200 ريال عماني (37,000 دولار). حتى المستشفيات الحكومية لديها قوائم انتظار طويلة للإجراءات المعقدة.",
            content2: "مع إضافة تكاليف الرحلات (220-350 ريال عماني)، والإقامة (350 ريال عماني/أسبوع)، والتأشيرة الطبية (30 ريال عماني)، يوفر المرضى العمانيون 60-80% من إجمالي النفقات الطبية. القوة الشرائية للريال العماني في الهند تجعل العلاج ميسور التكلفة بشكل لا يصدق."
          },
          {
            num: "2",
            title: "مستشفيات عالمية المستوى بمعايير دولية",
            content: "تمتلك الهند أكثر من 40 مستشفى معتمد من JCI يطابق أعلى المعايير الدولية. تستخدم هذه المستشفيات أحدث التقنيات بما في ذلك الجراحة الروبوتية والعلاج بالبروتون وأحدث بروتوكولات العلاج المناعي. الأطباء مدربون في أفضل المؤسسات العالمية ويجرون آلاف الإجراءات سنوياً.",
            content2: "معدلات النجاح استثنائية: 98.5% لجراحة القلب، 95-98% لاستبدال المفاصل، 90-95% لزراعة الكلى، و85-92% لعلاج السرطان (المرحلة المبكرة). الهند تصنف ضمن أفضل 5 وجهات عالمية للسياحة العلاجية."
          },
          {
            num: "3",
            title: "رحلات مباشرة من مسقط (3 ساعات)",
            content: "تشغل الطيران العماني وشركات أخرى عدة رحلات يومية مباشرة من مطار مسقط الدولي إلى المدن الهندية الرئيسية. الهند هي أقرب مركز طبي رئيسي للمرضى العمانيين، أقرب من أي وجهة أوروبية!",
            flights: [
              "مسقط إلى مومباي: 3 ساعات (3-4 رحلات يومياً)",
              "مسقط إلى كوتشي: 3.5 ساعات (2-3 رحلات يومياً)",
              "مسقط إلى دلهي: 4 ساعات (2-3 رحلات يومياً)",
              "مسقط إلى تشيناي: 4 ساعات (رحلتان يومياً)",
              "مسقط إلى بنغالور: 4 ساعات (1-2 رحلات يومياً)"
            ]
          },
          {
            num: "4",
            title: "إجراءات تأشيرة طبية بسيطة",
            content: "يمكن لحاملي جوازات السفر العمانية والمقيمين في عمان الحصول على تأشيرة طبية إلكترونية هندية عبر الإنترنت في 3-5 أيام عمل. التطبيق بسيط: ملء نموذج إلكتروني، تحميل جواز السفر والمستندات الطبية، واستلام التأشيرة إلكترونياً. التأشيرة الطبية صالحة لمدة 60 يوماً (قابلة للتمديد) مع دخول ثلاثي.",
            content2: "يمكن لأفراد العائلة المرافقة بتأشيرة مرافق طبي. تتعامل شفاء الهند مع عملية التأشيرة بأكملها بدون تكلفة إضافية، بما في ذلك خطاب الدعوة من المستشفى المطلوب للتقديم."
          },
          {
            num: "5",
            title: "برنامج العلاج في الخارج لوزارة الصحة العمانية",
            content: "لدى وزارة الصحة العمانية برنامج علاج في الخارج راسخ يرسل المرضى إلى الهند للإجراءات المتخصصة غير المتوفرة محلياً. عدة مستشفيات هندية كبرى على قائمة الوزارة المعتمدة. بالإضافة إلى ذلك، تقدم المستشفيات الهندية:",
            services: [
              "منسقون ومترجمون ناطقون بالعربية يعرفون اللهجة العمانية",
              "طعام حلال 100% في كافتيريات المستشفى ووجبات المرضى",
              "غرف صلاة باتجاه القبلة في كل طابق",
              "خدمة استقبال/توديع من مطار مسقط الدولي",
              "إقامة في فنادق قريبة (20-50 ريال عماني/ليلة)",
              "استشارات فيديو مجانية قبل السفر",
              "متابعة بعد العلاج عبر واتساب/مكالمات فيديو",
              "تسهيلات رمضان والأعياد الإسلامية"
            ]
          },
          {
            num: "6",
            title: "رابطة ثقافية قوية بين عمان والهند",
            content: "تتشارك عمان والهند قروناً من التجارة والروابط الثقافية. يوجد مجتمع هندي كبير في عمان (أكثر من 600,000 شخص) والعديد من العمانيين زاروا الهند. المستشفيات في مومباي وكوتشي على دراية خاصة بالمرضى العمانيين وثقافتهم. العديد من الأطباء الهنود تدربوا أو عملوا في مستشفيات عمان، مما يخلق جسراً مريحاً للسياحة العلاجية. مجتمعات البلوشي واللواتية العمانية لديها روابط هندية قوية بشكل خاص."
          }
        ]
      },

      costComparison: {
        title: "مقارنة التكاليف: عمان مقابل الهند (جميع المبالغ بالريال العماني)",
        procedures: [
          { name: "جراحة القلب المفتوح (CABG)", oman: "18,000 - 25,000", india: "3,800 - 5,300", savings: "14,200", percent: "76%" },
          { name: "استبدال الركبة", oman: "7,500 - 10,000", india: "1,900 - 2,700", savings: "5,600", percent: "75%" },
          { name: "زراعة الكبد", oman: "38,000 - 50,000", india: "9,600 - 15,000", savings: "28,400", percent: "75%" },
          { name: "علاج أطفال الأنابيب (دورة واحدة)", oman: "3,800 - 5,500", india: "1,150 - 1,700", savings: "2,650", percent: "70%" },
          { name: "جراحة العمود الفقري", oman: "9,600 - 14,000", india: "2,400 - 3,800", savings: "7,200", percent: "75%" },
          { name: "علاج السرطان (6 دورات كيماوي)", oman: "12,000 - 19,000", india: "2,900 - 4,800", savings: "9,100", percent: "76%" },
          { name: "زراعة الأسنان (الفم بالكامل)", oman: "7,500 - 11,000", india: "1,500 - 2,400", savings: "6,000", percent: "80%" },
          { name: "جراحة السمنة", oman: "5,800 - 9,000", india: "1,500 - 2,400", savings: "4,300", percent: "74%" }
        ],
        totalCostTitle: "إجمالي التكاليف بما في ذلك السفر (مثال: جراحة القلب المفتوح)",
        totalCostItems: [
          "الجراحة في الهند: 4,550 ريال عماني",
          "تذاكر الطيران ذهاباً وإياباً (شخصان): 500 ريال عماني",
          "الإقامة (أسبوعان): 700 ريال عماني",
          "الطعام والنقل: 250 ريال عماني",
          "الإجمالي: 6,000 ريال عماني (مقابل 21,500 ريال عماني في عمان) = توفير 15,500 ريال عماني!"
        ]
      },

      hospitals: {
        title: "أفضل 5 مستشفيات للمرضى العمانيين",
        list: [
          {
            num: "1",
            name: "مستشفيات أبولو - مومباي، دلهي، تشيناي",
            why: "أكبر شبكة مستشفيات خاصة في آسيا مع 71 مستشفى. معتمد من JCI. حضور قوي في عمان من خلال شراكات. فوترة مباشرة مع بعض شركات التأمين العمانية.",
            specialties: "جراحة القلب، الأورام، زراعة الأعضاء، جراحة العظام، علوم الأعصاب",
            successRates: "98.5% جراحة القلب، 95% استبدال الركبة، 85% شفاء من السرطان",
            omanPerks: "مكتب عماني مخصص، منسقون عرب، شراكة مع الطيران العماني للسياحة العلاجية",
            accreditations: "JCI، NABH، ISO 9001",
            annual: "أكثر من 150,000 جراحة"
          },
          {
            num: "2",
            name: "أستر ميدسيتي - كوتشي، كيرالا",
            why: "جزء من أستر دي إم للرعاية الصحية (مقرها دبي، أسسها د. آزاد موبين الهندي-العماني). فهم عميق للمرضى العمانيين. أقرب مستشفى رئيسي لمسقط (رحلة 3 ساعات إلى كوتشي).",
            specialties: "علوم القلب، الأورام، علوم الأعصاب، زراعة الأعضاء، جراحة العظام",
            successRates: "97% جراحة القلب، 93% زراعة الكلى، 90% شفاء من السرطان (المرحلة المبكرة)",
            omanPerks: "وجود أستر في عمان يعني إحالات سلسة، طاقم عربي، طعام حلال، منسقون للمرضى العمانيين",
            accreditations: "JCI، NABH",
            annual: "أكثر من 30,000 جراحة"
          },
          {
            num: "3",
            name: "فورتيس للرعاية الصحية - دلهي، مومباي، بنغالور",
            why: "54 مستشفى في جميع أنحاء الهند. سمعة قوية بين المرضى الخليجيين. ترتيبات فوترة مباشرة مع عدة شركات تأمين عمانية.",
            specialties: "علوم القلب، علوم الأعصاب، الأورام، علوم الكلى، زراعة نخاع العظام",
            successRates: "97.8% جراحة القلب، 92% شفاء من السرطان (المرحلة المبكرة)، 98% زراعة الكلى",
            omanPerks: "استشارة فيديو مجانية، خط مساعدة عربي 24/7، ضمان طعام حلال، أجنحة VIP",
            accreditations: "JCI، NABH، NABL",
            annual: "أكثر من 200,000 جراحة"
          },
          {
            num: "4",
            name: "ميدانتا - ذا ميديسيتي، جورجاون (دلهي)",
            why: "أحد أكبر المستشفيات متعددة التخصصات في العالم. أسسه د. نريش تريهان (48,000+ جراحة قلب). منشأة 1,250 سرير مع جميع التخصصات تحت سقف واحد.",
            specialties: "جراحة القلب، زراعة الكبد، السرطان، علوم الأعصاب، زراعة نخاع العظام",
            successRates: "99.6% جراحة القلب (فريق د. تريهان)، 95% زراعة الكبد",
            omanPerks: "مكتب مخصص للمرضى الخليجيين، مترجمون عرب، غرفة صلاة في كل طابق",
            accreditations: "JCI، NABH",
            annual: "أكثر من 22,000 جراحة قلب، أكثر من 250 زراعة كبد"
          },
          {
            num: "5",
            name: "مستشفى أمريتا - كوتشي وفريد آباد",
            why: "مستشفى رائد في كيرالا مع روابط قوية بالمجتمع العماني. ممتاز لرعاية القلب وجراحة العظام وعلاج السرطان. معروف بالأسعار المعقولة دون المساومة على الجودة.",
            specialties: "جراحة القلب، جراحة العظام، الأورام، أمراض الجهاز الهضمي، علوم الأعصاب",
            successRates: "96% جراحة القلب، 94% استبدال الركبة، 88% شفاء من السرطان",
            omanPerks: "دعم بالعربية، وجبات حلال، فريق تجربة المرضى العمانيين، قرب من مطار كوتشي",
            accreditations: "NABH، NABL",
            annual: "أكثر من 50,000 جراحة"
          }
        ]
      },

      patientStory: {
        title: "قصة مريضة حقيقية: فاطمة من مسقط",
        quote: "وفّرت 5,200 ريال عماني على استبدال الركبة وعدت أمشي مرة أخرى خلال أسبوعين.",
        patient: "فاطمة س.، 58 عاماً من سكان مسقط، معلمة",
        condition: "التهاب مفاصل حاد في الركبة اليمنى (عظم على عظم، ألم يومي لمدة 4 سنوات)",
        treatment: "استبدال كامل للركبة (الركبة اليمنى)",
        localQuoteTitle: "عرض الأسعار في عمان:",
        localQuoteItems: [
          "المستشفى السلطاني: 8,500 ريال عماني (قائمة انتظار 8 أشهر)",
          "مستشفى مسقط الخاص: 10,000 ريال عماني",
          "تغطية التأمين: 5,000 ريال عماني (الرصيد من الجيب 3,500-5,000 ريال عماني)",
          "وقت الانتظار: 6-10 أشهر في المستشفيات الحكومية"
        ],
        indiaExpTitle: "تجربة الهند:",
        indiaExpItems: [
          "استشارة فيديو مع جراح عظام في أستر ميدسيتي كوتشي (مجانية)",
          "طارت على الطيران العماني (مسقط إلى كوتشي): 240 ريال عماني ذهاباً وإياباً لشخصين",
          "تكلفة الجراحة في أستر ميدسيتي: 2,700 ريال عماني (باقة شاملة)",
          "الإقامة في المستشفى: 4 أيام في غرفة خاصة",
          "الفندق: 25 ريال عماني/ليلة × 8 ليالٍ = 200 ريال عماني",
          "الطعام والنقل: 120 ريال عماني",
          "إجمالي التكلفة: 3,260 ريال عماني (مقابل 8,500-10,000 ريال عماني في عمان)",
          "التوفير: 5,240-6,740 ريال عماني (62-67%)",
          "تمت الجراحة خلال أسبوع واحد من الحجز"
        ],
        testimony: "اندهشت من جودة الرعاية في أستر ميدسيتي في كوتشي. المستشفى كان يشبه البيت - فهموا ثقافتنا العمانية بشكل مثالي. جراحي د. توماس كان ممتازاً وشرح كل شيء ببساطة. المنسق العربي ساعد في كل شيء من القبول في المستشفى إلى حجز الفندق. بدأت أمشي بالمشاية في اليوم الثاني بعد الجراحة! فريق العلاج الطبيعي كان رائعاً. طبيب العظام العماني راجع الأشعة السينية وقال إن المحاذاة مثالية. أنا الآن خالية من الألم وعدت للتدريس. الرحلة من مسقط إلى كوتشي قصيرة جداً، شعرت وكأنني أذهب إلى مدينة أخرى في عمان!",
        result: "استبدال ناجح للركبة، المشي بمشاية في اليوم الثاني، المشي المستقل في 4 أسابيع، العودة للأنشطة الكاملة في 3 أشهر"
      },

      faqSection: {
        title: "الأسئلة الشائعة (المرضى العمانيون)",
        questions: [
          {
            q: "1. هل العلاج الطبي في الهند آمن للمرضى العمانيين؟",
            a: "نعم، آمن تماماً. تتبع أفضل مستشفيات الهند (المعتمدة من JCI) نفس معايير السلامة الدولية الموجودة في المستشفى السلطاني ومستشفى جامعة السلطان قابوس. معدلات النجاح للإجراءات الكبرى تطابق أو تتجاوز أفضل مستشفيات عمان. أكثر من 500,000 مريض دولي من 150+ دولة يختارون الهند سنوياً. لدى وزارة الصحة العمانية برنامج علاج في الخارج راسخ مع المستشفيات الهندية."
          },
          {
            q: "2. كم يمكنني التوفير مقارنة بعمان؟",
            a: "60-80% في المتوسط. حتى بعد إضافة تكاليف الرحلات (220-350 ريال عماني)، والإقامة (200-700 ريال عماني)، والتأشيرة (30 ريال عماني)، توفر 2,000-28,000 ريال عماني حسب الإجراء. جراحة القلب توفر ~14,200 ريال عماني، استبدال الركبة ~5,600 ريال عماني، زراعة الكبد ~28,400 ريال عماني. الريال العماني القوي يجعل الهند ميسورة التكلفة بشكل استثنائي."
          },
          {
            q: "3. ما هي عملية التأشيرة الطبية للمواطنين العمانيين؟",
            a: "بسيطة جداً. قدم عبر الإنترنت للحصول على تأشيرة طبية إلكترونية (موافقة في 3-5 أيام). المستندات المطلوبة: جواز السفر، خطاب دعوة من المستشفى (نوفره نحن)، التقارير الطبية. التكلفة: 30 ريال عماني. صالحة لمدة 60 يوماً مع دخول ثلاثي. أفراد العائلة يحصلون على تأشيرة مرافق طبي. حاملو الجوازات العمانية يتمتعون بمعالجة مبسطة بدون زيارة السفارة."
          },
          {
            q: "4. هل تدعم وزارة الصحة العمانية العلاج في الهند؟",
            a: "نعم، لدى وزارة الصحة العمانية برنامج علاج في الخارج راسخ. للإجراءات المتخصصة غير المتوفرة محلياً، يمكن للوزارة إحالة المرضى إلى مستشفيات هندية معتمدة مع تمويل حكومي. حتى بدون رعاية الوزارة، يختار العديد من العمانيين الهند بشكل مستقل بسبب التوفير الكبير وجودة الرعاية."
          },
          {
            q: "5. أي مدينة هندية هي الأفضل للمرضى العمانيين؟",
            a: "كوتشي (كيرالا) هي الأقرب والأكثر شعبية - 3 ساعات فقط من مسقط مع روابط ثقافية قوية. مومباي ممتازة أيضاً - 3 ساعات بعيداً مع أكبر عدد من المستشفيات الكبرى. دلهي تقدم أكثر خيارات المستشفيات بما في ذلك ميدانتا وماكس. تشيناي رائعة لعلاج القلب والسرطان. ننصح بناءً على احتياجاتك الطبية المحددة."
          },
          {
            q: "6. هل يمكنني استخدام تأميني الصحي العماني؟",
            a: "بعض خطط التأمين تغطي العلاج الدولي. تحقق مع شركة التأمين حول التغطية في الخارج. مستشفيات مثل أبولو وأستر لديها اتفاقيات مع شركات تأمين خليجية للفوترة النقدية أو المباشرة. إذا لم يتم التغطية، ادفع مقدماً وقدم مطالبة سداد مع فواتير المستشفى وملخص الخروج والتقارير الطبية عند عودتك إلى عمان."
          },
          {
            q: "7. ما مدى قرب كوتشي من مسقط بالطيران؟",
            a: "كوتشي على بعد 3-3.5 ساعات فقط من مسقط برحلة مباشرة. الطيران العماني وإير إنديا إكسبرس يشغلان عدة رحلات يومية. تكلفة التذاكر ذهاباً وإياباً 100-180 ريال عماني للشخص. كيرالا لديها رابطة قوية مع عمان - العديد من الكيراليين يعملون في عمان، لذا الفهم الثقافي ممتاز. كوتشي لديها عدة مستشفيات عالمية المستوى بما في ذلك أستر ميدسيتي ومستشفى أمريتا."
          },
          {
            q: "8. كم من الوقت أحتاج للبقاء في الهند للعلاج؟",
            a: "يعتمد على الإجراء: الإجراءات البسيطة (الأسنان، الساد، التنظير): 3-5 أيام. الإجراءات المتوسطة (استبدال الركبة، الفتق): 10-14 يوماً. الإجراءات المعقدة (جراحة القلب، زراعة الأعضاء): 3-4 أسابيع. علاج السرطان قد يتطلب زيارات متعددة. نوفر جداول زمنية مقدرة خلال استشارة الفيديو المجانية. يعود معظم المرضى إلى مسقط خلال 2-3 أسابيع."
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
        { name: locale === 'ar' ? 'السياحة العلاجية من عمان إلى الهند' : 'Oman to India Medical Tourism Guide', url: 'https://shifaalhind.onrender.com/blog/oman-to-india-medical-tourism' }
      ]} />

      {/* Article Schema for SEO */}
      <ArticleSchema
        headline={locale === 'ar' ? "السياحة العلاجية من عمان إلى الهند: دليل شامل للمرضى العمانيين" : "Medical Tourism from Oman to India: Complete Guide for Omani Patients"}
        description={locale === 'ar' ? "دليل شامل للمرضى العمانيين الذين يسعون للعلاج في الهند. التكاليف، المستشفيات، التأشيرة، ومعلومات السفر." : "Complete guide for Omani patients seeking treatment in India. Costs, hospitals, visa, and travel information."}
        image="https://shifaalhind.onrender.com/images/blog/oman-medical-tourism.jpg"
        datePublished="2026-03-01"
        dateModified="2026-03-01"
        author={DEFAULT_AUTHOR}
        publisher={DEFAULT_PUBLISHER}
        url="https://shifaalhind.onrender.com/blog/oman-to-india-medical-tourism"
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
            href="https://wa.me/919876543210?text=Hello%20Shifa%20AlHind%2C%20I%20am%20from%20Oman%20and%20interested%20in%20medical%20treatment%20in%20India"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            {locale === 'ar' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
          </a>
        </CardContent>
      </Card>

      {/* Why Omani Patients Choose India */}
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
                    {locale === 'ar' ? 'تكلفة عمان (ر.ع)' : 'Oman Cost (OMR)'}
                  </th>
                  <th className="border p-3 text-right">
                    {locale === 'ar' ? 'تكلفة الهند (ر.ع)' : 'India Cost (OMR)'}
                  </th>
                  <th className="border p-3 text-right">
                    {locale === 'ar' ? 'التوفير (ر.ع)' : 'Savings (OMR)'}
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
                    <td className="border p-3 text-right">{proc.oman}</td>
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
                  <strong>{locale === 'ar' ? 'لماذا يختار المرضى العمانيون' : 'Why Omani patients choose'} {hospital.name.split(' - ')[0]}:</strong> {hospital.why}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li><strong>{locale === 'ar' ? 'التخصصات:' : 'Specialties:'}</strong> {hospital.specialties}</li>
                  <li><strong>{locale === 'ar' ? 'معدلات النجاح:' : 'Success rates:'}</strong> {hospital.successRates}</li>
                  <li><strong>{locale === 'ar' ? 'مزايا للمرضى العمانيين:' : 'Oman patient perks:'}</strong> {hospital.omanPerks}</li>
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
              ? 'انضم إلى آلاف المرضى العمانيين الذين وفروا 60-80% على العلاج الطبي في الهند. استشارة مجانية ومساعدة في التأشيرة.'
              : 'Join thousands of Omani patients who saved 60-80% on medical treatment in India. Free consultation and visa assistance.'}
          </p>
          <a
            href="https://wa.me/919876543210?text=Hello%20Shifa%20AlHind%2C%20I%20am%20from%20Oman%20and%20need%20medical%20treatment%20in%20India"
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
        title={locale === 'ar' ? "موارد ذات صلة للمرضى العمانيين" : "Related Resources for Omani Patients"}
        links={[
          {
            title: locale === 'ar' ? 'أفضل المستشفيات للسياحة العلاجية' : 'Best Hospitals for Medical Tourism',
            href: '/hospitals',
            description: locale === 'ar' ? 'تصفح المستشفيات المعتمدة من JCI في جميع أنحاء الهند' : 'Browse JCI-accredited hospitals across India',
          },
          {
            title: locale === 'ar' ? 'جراحة العظام في الهند' : 'Orthopedic Surgery in India',
            href: '/treatments/orthopedics',
            description: locale === 'ar' ? 'استبدال المفاصل وجراحة العمود الفقري في أفضل المستشفيات' : 'Joint replacement and spine surgery at top hospitals',
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
        { question: "كم يمكن للمرضى العمانيين التوفير في الهند؟", answer: "متوسط التوفير: 60-80% في معظم الإجراءات. جراحة القلب المفتوح: توفير 14,200 ريال عماني (76%)، استبدال الركبة: 5,600 ريال عماني (75%)، زراعة الكبد: 28,400 ريال عماني (75%). الريال العماني القوي يجعل العلاج في الهند ميسور التكلفة بشكل استثنائي." },
        { question: "كم يستغرق الطيران من مسقط إلى الهند؟", answer: "مسقط إلى مومباي: 3 ساعات مباشرة، كوتشي: 3.5 ساعات، دلهي: 4 ساعات، تشيناي: 4 ساعات. رحلات يومية متعددة من الطيران العماني وإير إنديا إكسبرس. التذاكر 100-180 ريال عماني ذهاباً وإياباً. التأشيرة الطبية الإلكترونية تتم في 3-5 أيام." },
        { question: "هل تدعم وزارة الصحة العمانية العلاج في الهند؟", answer: "نعم، لدى وزارة الصحة العمانية برنامج علاج في الخارج راسخ يرسل المرضى إلى مستشفيات هندية معتمدة للإجراءات المتخصصة غير المتوفرة محلياً مع تمويل حكومي." },
        { question: "هل تلبي المستشفيات الهندية الاحتياجات الثقافية العمانية؟", answer: "نعم! توفر أفضل المستشفيات: منسقين ناطقين بالعربية يعرفون اللهجة العمانية، طعام حلال، غرف صلاة باتجاه القبلة، رعاية خاصة بالجنس، تسهيلات رمضان. المستشفيات في كوتشي ومومباي لديها خبرة طويلة مع المرضى العمانيين." },
        { question: "أي مدينة هندية هي الأقرب لعمان؟", answer: "كوتشي (كيرالا) هي الأقرب - 3 ساعات فقط من مسقط. مومباي أيضاً 3 ساعات. كلتا المدينتين لديهما مستشفيات عالمية المستوى مع خبرة كبيرة في علاج المرضى العمانيين." },
        { question: "ما هي تكلفة السفر الإجمالية من عمان إلى الهند؟", answer: "التذاكر: 100-180 ريال عماني ذهاباً وإياباً للشخص. الفنادق: 20-50 ريال عماني/ليلة. الطعام والنقل: 10-15 ريال عماني/يوم. التأشيرة: 30 ريال عماني. إجمالي تكاليف السفر والإقامة عادة 500-1,000 ريال عماني لشخصين لمدة أسبوعين." },
        { question: "هل يمكن لعائلتي مرافقتي؟", answer: "نعم بالتأكيد! يمكن لأفراد العائلة الحصول على تأشيرة مرافق طبي. نساعد في ترتيب الإقامة العائلية في فنادق قريبة من المستشفى. المستشفيات توفر غرف خاصة بأسرة إضافية للمرافقين ومنسقين لمساعدة العائلة." },
        { question: "ماذا يحدث بعد العودة إلى عمان؟", answer: "نوفر متابعة شاملة: تقارير طبية مفصلة لطبيبك في عمان، استشارات فيديو مجانية مع الطبيب المعالج في الهند، متابعة عبر واتساب لمدة 6 أشهر، مساعدة في تنسيق أي رعاية متابعة مطلوبة محلياً." }
      ] : [
        { question: "How much can Omani patients save in India?", answer: "Average savings: 60-80% on most procedures. Heart bypass: OMR 14,200 saved (76%), Knee replacement: OMR 5,600 (75%), Liver transplant: OMR 28,400 (75%). The strong Omani Rial makes treatment in India exceptionally affordable." },
        { question: "How long does it take to fly from Muscat to India?", answer: "Muscat to Mumbai: 3 hours direct, Kochi: 3.5 hours, Delhi: 4 hours, Chennai: 4 hours. Multiple daily flights on Oman Air and Air India Express. Tickets cost OMR 100-180 round trip. e-Medical Visa processed in 3-5 days." },
        { question: "Does Oman MOH support treatment in India?", answer: "Yes, the Oman Ministry of Health has an established overseas treatment program that sends patients to approved Indian hospitals for specialized procedures not available locally, with government funding." },
        { question: "Do Indian hospitals accommodate Omani cultural needs?", answer: "Yes! Top hospitals provide: Arabic-speaking coordinators familiar with Omani dialect, halal food, prayer rooms with Qibla direction, gender-specific care, Ramadan accommodations. Hospitals in Kochi and Mumbai have extensive experience with Omani patients." },
        { question: "Which Indian city is closest to Oman?", answer: "Kochi (Kerala) is the closest - just 3 hours from Muscat. Mumbai is also 3 hours away. Both cities have world-class hospitals with extensive experience treating Omani patients." },
        { question: "What is the total travel cost from Oman to India?", answer: "Flights: OMR 100-180 round trip per person. Hotels: OMR 20-50/night. Food and transport: OMR 10-15/day. Visa: OMR 30. Total travel and accommodation costs typically OMR 500-1,000 for two people for two weeks." },
        { question: "Can my family accompany me?", answer: "Yes! Family members can obtain Medical Attendant visas. We help arrange family accommodation near the hospital. Hospitals provide private rooms with extra beds for attendants and coordinators to assist the family." },
        { question: "What happens after I return to Oman?", answer: "We provide comprehensive follow-up: detailed medical reports for your Oman doctor, free video consultations with the treating doctor in India, WhatsApp follow-up for 6 months, assistance coordinating any required local follow-up care." }
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
        title={locale === 'ar' ? "السياحة العلاجية من عمان إلى الهند: دليل شامل" : "Medical Tourism from Oman to India: Complete Guide"}
        url="/blog/oman-to-india-medical-tourism"
        description={locale === 'ar' ? "دليل شامل للمرضى العمانيين. وفّر 60-80% على العلاج الطبي في الهند. رحلات مباشرة، مستشفيات JCI، عملية تأشيرة سهلة." : "Complete guide for Omani patients. Save 60-80% on medical treatment in India. Direct flights, JCI hospitals, easy visa process."}
      />

      {/* Related Articles */}
      <RelatedArticles articles={CANCER_RELATED_ARTICLES} />
    </BlogArticleLayout>
  );
}

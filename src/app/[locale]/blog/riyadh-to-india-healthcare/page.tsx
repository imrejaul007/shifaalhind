import BlogArticleLayout from '@/components/blog/blog-article-layout';
import { Card, CardContent } from '@/components/ui/card';
import { InternalLinks } from '@/components/seo/internal-links';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles, CANCER_RELATED_ARTICLES } from '@/components/blog/related-articles';
import { BreadcrumbSchema } from '@/components/seo/breadcrumb-schema';
import { ArticleSchema, DEFAULT_AUTHOR, DEFAULT_PUBLISHER } from '@/components/seo/article-schema';

export const dynamic = 'force-dynamic';

export default async function RiyadhToIndiaHealthcarePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const content = {
    en: {
      title: "Riyadh to India Healthcare 2025: Complete Medical Tourism Guide for Saudi Patients",
      excerpt: "Comprehensive healthcare guide for Riyadh patients seeking treatment in India. Save 70-85% on world-class medical care. Direct flights (4 hours), JCI-accredited hospitals, easy medical visa, and dedicated Saudi patient services.",
      readTime: "14 min",
      breadcrumbTitle: "Riyadh to India Healthcare",

      intro: {
        p1: "Thousands of Saudi Arabian patients from Riyadh are choosing India for medical treatment every year, and the numbers are growing rapidly. With direct flights taking just 4 hours, world-class JCI-accredited hospitals, and 70-85% cost savings compared to Saudi healthcare, India has become a preferred destination for Riyadh residents seeking quality medical care.",
        p2: "Every year, over 30,000 Saudi patients travel to India for medical treatment, from routine procedures like dental work and orthopedic surgery to complex treatments like cardiac surgery, cancer care, and organ transplants. India's top hospitals offer the same international standards found in Riyadh, but at a fraction of the cost.",
        p3: "This comprehensive guide covers everything Riyadh patients need to know: flights, medical visa process, cost comparisons, top hospitals with Saudi patient services, treatment timeline, and real patient experiences from Saudi Arabia. Whether you're considering a simple procedure or a complex surgery, this guide will help you make an informed decision."
      },

      whyChoose: {
        title: "Why Riyadh Patients Choose India for Healthcare",
        reasons: [
          {
            num: "1",
            title: "Massive Cost Savings (70-85%)",
            content: "Healthcare costs in Saudi Arabia are high, even with government insurance. A heart bypass surgery costs SAR 180,000-250,000 ($48,000-$67,000) in Riyadh, but only SAR 37,500-52,500 ($10,000-$14,000) in India - a savings of SAR 142,500 ($38,000).",
            content2: "Even after including flights (SAR 2,200), accommodation (SAR 3,500/week), and visa (SAR 280), Saudi patients save 70-85% on total medical expenses. For many procedures, the savings can fund a family vacation!"
          },
          {
            num: "2",
            title: "Same International Quality Standards",
            content: "India has over 50 JCI-accredited hospitals (same accreditation as King Faisal Specialist Hospital, King Fahad Medical City). These hospitals use identical equipment, follow the same protocols, and employ doctors trained at Harvard, Johns Hopkins, Cleveland Clinic, and Mayo Clinic.",
            content2: "Success rates for major procedures are comparable or better: 98.5% for heart surgery, 95-98% for knee replacement, and 85-92% for cancer treatment (early stage)."
          },
          {
            num: "3",
            title: "Direct Flights (4 Hours)",
            content: "6-10 daily direct flights from Riyadh to Mumbai (4h), Delhi (4.5h), and Bangalore (5h) on Saudia, Air India, IndiGo, and Air Arabia. Flight time is shorter than Riyadh to London!",
            flights: [
              "Riyadh → Mumbai: 4 hours (4 daily flights)",
              "Riyadh → Delhi: 4.5 hours (6 daily flights)",
              "Riyadh → Bangalore: 5 hours (3 daily flights)",
              "Riyadh → Chennai: 5.5 hours (3 daily flights)"
            ]
          },
          {
            num: "4",
            title: "Easy Medical Visa Process",
            content: "Saudi residents get medical visa online in 3-5 days or can apply on arrival. Simple online application with hospital invitation letter (we provide). Medical visa is valid for 60 days (extendable) and allows 3 entries.",
            content2: "Family members can accompany on medical attendant visa. We handle the entire visa process at no extra cost, including the hospital invitation letter."
          },
          {
            num: "5",
            title: "Saudi Patient Services",
            content: "Top Indian hospitals have dedicated International Patient Departments specifically for Saudi patients, with:",
            services: [
              "Arabic-speaking coordinators and translators (Saudi dialects)",
              "Halal food in all hospital cafeterias",
              "Prayer rooms with Qibla direction and prayer time notifications",
              "Airport pickup/drop with Saudi Arabia-based vehicles",
              "Accommodation in nearby hotels (SAR 180-450/night)",
              "Video consultations before travel (FREE)",
              "Follow-up care via WhatsApp/video calls after return",
              "Saudi holidays respected (Ramadan, Hajj season accommodations)"
            ]
          },
          {
            num: "6",
            title: "Cultural & Religious Comfort",
            content: "Large Indian Muslim community means hospitals understand Islamic values and Saudi culture. Many Saudi doctors themselves trained in India and refer their own patients. Hospitals provide separate male/female wards, female doctors for women patients (upon request), and respect for prayer times and Ramadan fasting."
          }
        ]
      },

      costComparison: {
        title: "Cost Comparison: Riyadh vs India (All Amounts in SAR)",
        procedures: [
          { name: "Heart Bypass (CABG)", riyadh: "180,000 - 250,000", india: "37,500 - 52,500", savings: "142,500", percent: "78%" },
          { name: "Knee Replacement", riyadh: "70,000 - 95,000", india: "18,750 - 26,250", savings: "51,250", percent: "73%" },
          { name: "Liver Transplant", riyadh: "350,000 - 500,000", india: "93,750 - 146,250", savings: "256,250", percent: "73%" },
          { name: "IVF Treatment (1 cycle)", riyadh: "35,000 - 55,000", india: "10,500 - 16,500", savings: "24,500", percent: "70%" },
          { name: "Spine Surgery", riyadh: "90,000 - 130,000", india: "22,500 - 37,500", savings: "67,500", percent: "75%" },
          { name: "Cancer Treatment (6 cycles chemo)", riyadh: "110,000 - 180,000", india: "26,250 - 46,875", savings: "83,750", percent: "76%" },
          { name: "Dental Implants (full mouth)", riyadh: "70,000 - 110,000", india: "14,625 - 22,875", savings: "55,375", percent: "79%" },
          { name: "Bariatric Surgery (Gastric Bypass)", riyadh: "55,000 - 85,000", india: "14,625 - 22,875", savings: "40,125", percent: "73%" }
        ],
        totalCostTitle: "💰 Total Costs Including Travel (Example: Heart Bypass)",
        totalCostItems: [
          "Surgery in India: SAR 45,000",
          "Round-trip flights (2 people): SAR 4,400",
          "Accommodation (2 weeks): SAR 7,000",
          "Food & transport: SAR 2,500",
          "Total: SAR 58,900 (vs SAR 215,000 in Riyadh) = SAR 156,100 saved!"
        ]
      },

      hospitals: {
        title: "Top 5 Hospitals for Saudi Patients from Riyadh",
        list: [
          {
            num: "1",
            name: "Apollo Hospitals - Mumbai, Delhi, Bangalore, Chennai",
            why: "Largest private hospital network in Asia. JCI-accredited. 500+ Saudi patients treated monthly. Partnership with Saudi Ministry of Health for medical tourism.",
            specialties: "Cardiac surgery, cancer care, transplants, orthopedics",
            successRates: "98.5% heart surgery, 95% knee replacement, 85% cancer remission",
            saudiPerks: "Riyadh office for pre-consultation, Saudi Arabic coordinators, Saudia partnership",
            accreditations: "JCI, NABH, ISO 9001",
            annual: "150,000+ surgeries"
          },
          {
            num: "2",
            name: "Fortis Healthcare - Delhi, Mumbai, Bangalore",
            why: "54 hospitals across India. Strong reputation in Gulf countries. Some Saudi insurance companies provide direct billing.",
            specialties: "Cardiac sciences, neurosciences, oncology, renal sciences",
            successRates: "97.8% cardiac surgery, 92% cancer remission (early stage), 98% kidney transplant",
            saudiPerks: "FREE video consultation, Arabic helpline 24/7, halal food guarantee",
            accreditations: "JCI, NABH, NABL",
            annual: "200,000+ surgeries"
          },
          {
            num: "3",
            name: "Medanta - The Medicity, Gurugram (Delhi NCR)",
            why: "World's 2nd largest multi-specialty hospital. Founded by Dr. Naresh Trehan (performed 48,000+ heart surgeries). 1,250-bed facility with all specialties.",
            specialties: "Heart surgery, liver transplant, cancer, neurosciences, bone marrow transplant",
            successRates: "99.6% heart surgery (Dr. Trehan's team), 95% liver transplant",
            saudiPerks: "Dedicated Saudi desk, Arabic translators, prayer room in every floor",
            accreditations: "JCI, NABH",
            annual: "22,000+ cardiac surgeries, 250+ liver transplants"
          },
          {
            num: "4",
            name: "Max Healthcare - Delhi, Mumbai",
            why: "17 hospitals with strong orthopedics and bariatric surgery departments. Known for complex joint replacements and weight loss surgery.",
            specialties: "Orthopedics, bariatric surgery, IVF, cancer, neurosciences",
            successRates: "96% knee replacement, 65% IVF (under 35), 85% bariatric (diabetes remission)",
            saudiPerks: "FREE video consultation, airport lounge, dedicated Saudi coordinators",
            accreditations: "JCI, NABH",
            annual: "50,000+ surgeries"
          },
          {
            num: "5",
            name: "Manipal Hospitals - Bangalore, Mumbai, Delhi",
            why: "28 hospitals across India. Strong reputation in kidney transplants and fertility treatment. Many Saudi doctors trained at Manipal.",
            specialties: "Kidney transplant, nephrology, fertility, orthopedics, oncology",
            successRates: "95% kidney transplant, 60% IVF, 94% knee replacement",
            saudiPerks: "FREE video consultation, 24/7 Arabic helpline, Ramadan meal accommodations",
            accreditations: "NABH, ISO",
            annual: "120,000+ surgeries, 450+ kidney transplants"
          }
        ]
      },

      patientStory: {
        title: "Real Patient Story: Khalid from Riyadh",
        quote: "I saved SAR 85,000 on my knee replacement and received exceptional care.",
        patient: "Khalid A., 62-year-old Riyadh resident, retired government employee",
        condition: "Severe osteoarthritis in both knees (bone-on-bone, daily pain for 3 years)",
        treatment: "Bilateral total knee replacement (both knees)",
        riyadhQuoteTitle: "Riyadh Quote:",
        riyadhQuoteItems: [
          "King Fahad Medical City: SAR 140,000 (6-month waiting list)",
          "Private Hospital Riyadh: SAR 165,000",
          "Insurance coverage: SAR 80,000 (balance SAR 60,000-85,000 out of pocket)",
          "Waiting time: 4-6 months"
        ],
        indiaExpTitle: "India Experience:",
        indiaExpItems: [
          "Video consultation with Dr. Arun Menon at Max Hospital Delhi (FREE)",
          "Flew Saudia (Riyadh → Delhi): SAR 2,200 roundtrip for 2 people",
          "Surgery cost at Max Hospital: SAR 52,500 (all-inclusive package for both knees)",
          "Hospital stay: 5 days in private room",
          "Hotel: SAR 300/night × 9 nights = SAR 2,700",
          "Food & transport: SAR 1,800",
          "Total cost: SAR 59,200 (vs SAR 140,000-165,000 in Riyadh)",
          "Savings: SAR 80,800-105,800 (58-64%)",
          "Treatment started within 2 weeks (vs 4-6 months waiting)"
        ],
        testimony: "The care at Max Hospital was outstanding. Dr. Arun Menon is one of India's top orthopedic surgeons - he explained everything in detail and the surgery was flawless. The Arabic coordinator made my wife feel comfortable throughout. I started walking with a walker on day 2! My Riyadh orthopedic doctor reviewed my X-rays and said the implant positioning is perfect. I'm now pain-free and walking without support. I tell everyone - why wait 6 months and pay double in Riyadh? Go to India!",
        result: "✅ Result: Successful bilateral knee replacement, walking independently after 6 weeks, playing with grandchildren after 3 months"
      },

      faqSection: {
        title: "Frequently Asked Questions (Saudi Patients)",
        questions: [
          {
            q: "1. Is medical treatment in India safe for Saudi patients?",
            a: "Yes, absolutely safe. India's top hospitals (JCI-accredited) follow the same international safety standards as hospitals in Riyadh. Success rates for major procedures are comparable or better than Saudi hospitals. Over 30,000 Saudi patients travel to India annually for medical treatment. India treats 500,000+ international patients per year from 150+ countries."
          },
          {
            q: "2. How much can I save compared to Riyadh?",
            a: "70-85% on average. Even after including flights (SAR 2,200), accommodation (SAR 2,500-7,000), and visa (SAR 280), you save SAR 40,000-256,000 depending on the procedure. Heart surgery saves ~SAR 142,500, knee replacement saves ~SAR 51,250, liver transplant saves ~SAR 256,250."
          },
          {
            q: "3. What about the medical visa process for Saudis?",
            a: "Very simple for Saudi residents. Apply online (3-5 days approval) or get visa on arrival (some airports). We send you a medical visa invitation letter from the hospital. Cost: SAR 280. Medical visa is valid for 60 days and allows 3 entries. Family members can accompany on medical attendant visa. No need to visit Indian Embassy."
          },
          {
            q: "4. Do hospitals understand Saudi culture and Islamic values?",
            a: "Yes, hospitals are very accommodating. All major hospitals have prayer rooms with Qibla direction, serve 100% halal food, provide Arabic-speaking staff who understand Saudi dialect, respect Ramadan and prayer times, and can arrange female doctors for women patients. Many hospitals have treated thousands of Saudi patients and understand cultural sensitivities."
          },
          {
            q: "5. Can I use my Saudi government/private insurance?",
            a: "Some insurance plans cover international treatment. Check with your insurance provider (Bupa, Tawuniya, Medgulf, etc.) about coverage for treatment abroad. Some hospitals like Fortis and Apollo have tie-ups with Saudi insurers and can do cashless/direct billing. If not covered, you pay upfront and claim reimbursement upon return to Riyadh with hospital invoices and discharge summary."
          },
          {
            q: "6. How long do I need to stay in India?",
            a: "Depends on the procedure: Simple procedures (dental, cataract, endoscopy): 3-5 days. Moderate procedures (knee replacement, hernia, gallbladder): 10-14 days. Complex procedures (heart surgery, transplants): 3-4 weeks. We provide estimated timelines during FREE video consultation. Most patients return to Riyadh within 2 weeks."
          }
        ]
      }
    },
    ar: {
      title: "الرعاية الصحية من الرياض إلى الهند 2025: دليل شامل للسياحة العلاجية للمرضى السعوديين",
      excerpt: "دليل شامل للرعاية الصحية لمرضى الرياض الذين يسعون للعلاج في الهند. وفّر 70-85٪ على الرعاية الطبية عالمية المستوى. رحلات مباشرة (4 ساعات)، مستشفيات معتمدة من JCI، تأشيرة طبية سهلة، وخدمات مخصصة للمرضى السعوديين.",
      readTime: "14 دقيقة",
      breadcrumbTitle: "الرعاية الصحية من الرياض إلى الهند",

      intro: {
        p1: "يختار آلاف المرضى السعوديين من الرياض الهند للعلاج الطبي كل عام، والأرقام تتزايد بسرعة. مع رحلات مباشرة تستغرق 4 ساعات فقط، ومستشفيات عالمية المستوى معتمدة من JCI، وتوفير في التكاليف بنسبة 70-85٪ مقارنة بالرعاية الصحية السعودية، أصبحت الهند وجهة مفضلة لسكان الرياض الذين يبحثون عن رعاية طبية عالية الجودة.",
        p2: "كل عام، يسافر أكثر من 30,000 مريض سعودي إلى الهند للعلاج الطبي، من الإجراءات الروتينية مثل طب الأسنان وجراحة العظام إلى العلاجات المعقدة مثل جراحة القلب، ورعاية السرطان، وزراعة الأعضاء. تقدم أفضل مستشفيات الهند نفس المعايير الدولية الموجودة في الرياض، ولكن بجزء بسيط من التكلفة.",
        p3: "يغطي هذا الدليل الشامل كل ما يحتاج مرضى الرياض معرفته: الرحلات الجوية، عملية التأشيرة الطبية، مقارنات التكاليف، أفضل المستشفيات مع خدمات المرضى السعوديين، الجدول الزمني للعلاج، وتجارب المرضى الحقيقية من المملكة العربية السعودية. سواء كنت تفكر في إجراء بسيط أو جراحة معقدة، سيساعدك هذا الدليل على اتخاذ قرار مستنير."
      },

      whyChoose: {
        title: "لماذا يختار مرضى الرياض الهند للرعاية الصحية",
        reasons: [
          {
            num: "1",
            title: "توفير هائل في التكاليف (70-85٪)",
            content: "تكاليف الرعاية الصحية في المملكة العربية السعودية مرتفعة، حتى مع التأمين الحكومي. تكلف جراحة القلب المفتوح 180,000-250,000 ريال سعودي (48,000-67,000 دولار) في الرياض، لكنها تكلف فقط 37,500-52,500 ريال سعودي (10,000-14,000 دولار) في الهند - توفير قدره 142,500 ريال سعودي (38,000 دولار).",
            content2: "حتى بعد إضافة تكاليف الرحلات الجوية (2,200 ريال)، والإقامة (3,500 ريال/أسبوع)، والتأشيرة (280 ريال)، يوفر المرضى السعوديون 70-85٪ من إجمالي النفقات الطبية. بالنسبة للعديد من الإجراءات، يمكن للتوفير أن يموّل عطلة عائلية!"
          },
          {
            num: "2",
            title: "نفس المعايير الدولية للجودة",
            content: "تمتلك الهند أكثر من 50 مستشفى معتمد من JCI (نفس الاعتماد الموجود في مستشفى الملك فيصل التخصصي، مدينة الملك فهد الطبية). تستخدم هذه المستشفيات نفس المعدات، وتتبع نفس البروتوكولات، وتوظف أطباء مدربين في هارفارد، جونز هوبكنز، كليفلاند كلينك، ومايو كلينك.",
            content2: "معدلات النجاح للإجراءات الكبرى مماثلة أو أفضل: 98.5٪ لجراحة القلب، 95-98٪ لاستبدال الركبة، و85-92٪ لعلاج السرطان (المرحلة المبكرة)."
          },
          {
            num: "3",
            title: "رحلات مباشرة (4 ساعات)",
            content: "6-10 رحلات مباشرة يومياً من الرياض إلى مومباي (4 ساعات)، دلهي (4.5 ساعات)، وبنغالور (5 ساعات) على الخطوط السعودية، إير إنديا، إنديجو، وإير أرابيا. وقت الرحلة أقصر من الرياض إلى لندن!",
            flights: [
              "الرياض ← مومباي: 4 ساعات (4 رحلات يومياً)",
              "الرياض ← دلهي: 4.5 ساعات (6 رحلات يومياً)",
              "الرياض ← بنغالور: 5 ساعات (3 رحلات يومياً)",
              "الرياض ← تشيناي: 5.5 ساعات (3 رحلات يومياً)"
            ]
          },
          {
            num: "4",
            title: "إجراءات تأشيرة طبية سهلة",
            content: "يحصل سكان السعودية على التأشيرة الطبية عبر الإنترنت في 3-5 أيام أو يمكنهم التقديم عند الوصول. تطبيق بسيط عبر الإنترنت مع خطاب دعوة من المستشفى (نوفره نحن). التأشيرة الطبية صالحة لمدة 60 يوماً (قابلة للتمديد) وتسمح بـ 3 دخولات.",
            content2: "يمكن لأفراد العائلة المرافقة بتأشيرة مرافق طبي. نتعامل مع عملية التأشيرة بأكملها بدون تكلفة إضافية، بما في ذلك خطاب الدعوة من المستشفى."
          },
          {
            num: "5",
            title: "خدمات خاصة للمرضى السعوديين",
            content: "تمتلك أفضل المستشفيات الهندية أقسام مرضى دوليين مخصصة للمرضى السعوديين، مع:",
            services: [
              "منسقون ومترجمون ناطقون بالعربية (اللهجات السعودية)",
              "طعام حلال في جميع كافتيريات المستشفى",
              "غرف صلاة باتجاه القبلة مع إشعارات أوقات الصلاة",
              "خدمة التوصيل من وإلى المطار بمركبات من السعودية",
              "إقامة في فنادق قريبة (180-450 ريال/ليلة)",
              "استشارات فيديو قبل السفر (مجانية)",
              "رعاية متابعة عبر واتساب/مكالمات فيديو بعد العودة",
              "احترام العطلات السعودية (تسهيلات رمضان وموسم الحج)"
            ]
          },
          {
            num: "6",
            title: "راحة ثقافية ودينية",
            content: "وجود جالية مسلمة هندية كبيرة يعني أن المستشفيات تفهم القيم الإسلامية والثقافة السعودية. العديد من الأطباء السعوديين أنفسهم تدربوا في الهند ويحيلون مرضاهم. توفر المستشفيات أجنحة منفصلة للرجال/النساء، طبيبات للمريضات (عند الطلب)، واحترام أوقات الصلاة وصيام رمضان."
          }
        ]
      },

      costComparison: {
        title: "مقارنة التكاليف: الرياض مقابل الهند (جميع المبالغ بالريال السعودي)",
        procedures: [
          { name: "جراحة القلب المفتوح (CABG)", riyadh: "180,000 - 250,000", india: "37,500 - 52,500", savings: "142,500", percent: "78%" },
          { name: "استبدال الركبة", riyadh: "70,000 - 95,000", india: "18,750 - 26,250", savings: "51,250", percent: "73%" },
          { name: "زراعة الكبد", riyadh: "350,000 - 500,000", india: "93,750 - 146,250", savings: "256,250", percent: "73%" },
          { name: "علاج أطفال الأنابيب (دورة واحدة)", riyadh: "35,000 - 55,000", india: "10,500 - 16,500", savings: "24,500", percent: "70%" },
          { name: "جراحة العمود الفقري", riyadh: "90,000 - 130,000", india: "22,500 - 37,500", savings: "67,500", percent: "75%" },
          { name: "علاج السرطان (6 دورات كيماوي)", riyadh: "110,000 - 180,000", india: "26,250 - 46,875", savings: "83,750", percent: "76%" },
          { name: "زراعة الأسنان (الفم بالكامل)", riyadh: "70,000 - 110,000", india: "14,625 - 22,875", savings: "55,375", percent: "79%" },
          { name: "جراحة السمنة (تحويل المعدة)", riyadh: "55,000 - 85,000", india: "14,625 - 22,875", savings: "40,125", percent: "73%" }
        ],
        totalCostTitle: "💰 إجمالي التكاليف بما في ذلك السفر (مثال: جراحة القلب المفتوح)",
        totalCostItems: [
          "الجراحة في الهند: 45,000 ريال",
          "تذاكر الطيران ذهاباً وإياباً (شخصان): 4,400 ريال",
          "الإقامة (أسبوعان): 7,000 ريال",
          "الطعام والنقل: 2,500 ريال",
          "الإجمالي: 58,900 ريال (مقابل 215,000 ريال في الرياض) = توفير 156,100 ريال!"
        ]
      },

      hospitals: {
        title: "أفضل 5 مستشفيات للمرضى السعوديين من الرياض",
        list: [
          {
            num: "1",
            name: "مستشفيات أبولو - مومباي، دلهي، بنغالور، تشيناي",
            why: "أكبر شبكة مستشفيات خاصة في آسيا. معتمد من JCI. يعالج أكثر من 500 مريض سعودي شهرياً. شراكة مع وزارة الصحة السعودية للسياحة العلاجية.",
            specialties: "جراحة القلب، رعاية السرطان، زراعة الأعضاء، جراحة العظام",
            successRates: "98.5٪ جراحة القلب، 95٪ استبدال الركبة، 85٪ شفاء من السرطان",
            saudiPerks: "مكتب في الرياض للاستشارة المسبقة، منسقون سعوديون ناطقون بالعربية، شراكة مع الخطوط السعودية",
            accreditations: "JCI، NABH، ISO 9001",
            annual: "أكثر من 150,000 جراحة"
          },
          {
            num: "2",
            name: "فورتيس للرعاية الصحية - دلهي، مومباي، بنغالور",
            why: "54 مستشفى في جميع أنحاء الهند. سمعة قوية في دول الخليج. بعض شركات التأمين السعودية توفر الفواتير المباشرة.",
            specialties: "علوم القلب، علوم الأعصاب، الأورام، علوم الكلى",
            successRates: "97.8٪ جراحة القلب، 92٪ شفاء من السرطان (المرحلة المبكرة)، 98٪ زراعة الكلى",
            saudiPerks: "استشارة فيديو مجانية، خط مساعدة عربي على مدار 24/7، ضمان الطعام الحلال",
            accreditations: "JCI، NABH، NABL",
            annual: "أكثر من 200,000 جراحة"
          },
          {
            num: "3",
            name: "ميدانتا - ذا ميديسيتي، جورجاون (دلهي)",
            why: "ثاني أكبر مستشفى متعدد التخصصات في العالم. أسسه د. نريش تريهان (أجرى أكثر من 48,000 جراحة قلب). منشأة بها 1,250 سرير مع جميع التخصصات.",
            specialties: "جراحة القلب، زراعة الكبد، السرطان، علوم الأعصاب، زراعة نخاع العظام",
            successRates: "99.6٪ جراحة القلب (فريق د. تريهان)، 95٪ زراعة الكبد",
            saudiPerks: "مكتب سعودي مخصص، مترجمون عرب، غرفة صلاة في كل طابق",
            accreditations: "JCI، NABH",
            annual: "أكثر من 22,000 جراحة قلب، أكثر من 250 زراعة كبد"
          },
          {
            num: "4",
            name: "ماكس للرعاية الصحية - دلهي، مومباي",
            why: "17 مستشفى مع أقسام قوية لجراحة العظام وجراحة السمنة. معروف باستبدال المفاصل المعقدة وجراحة فقدان الوزن.",
            specialties: "جراحة العظام، جراحة السمنة، أطفال الأنابيب، السرطان، علوم الأعصاب",
            successRates: "96٪ استبدال الركبة، 65٪ أطفال الأنابيب (تحت 35)، 85٪ جراحة السمنة (شفاء من السكري)",
            saudiPerks: "استشارة فيديو مجانية، صالة المطار، منسقون سعوديون مخصصون",
            accreditations: "JCI، NABH",
            annual: "أكثر من 50,000 جراحة"
          },
          {
            num: "5",
            name: "مستشفيات مانيبال - بنغالور، مومباي، دلهي",
            why: "28 مستشفى في جميع أنحاء الهند. سمعة قوية في زراعة الكلى وعلاج الخصوبة. العديد من الأطباء السعوديين تدربوا في مانيبال.",
            specialties: "زراعة الكلى، أمراض الكلى، الخصوبة، جراحة العظام، الأورام",
            successRates: "95٪ زراعة الكلى، 60٪ أطفال الأنابيب، 94٪ استبدال الركبة",
            saudiPerks: "استشارة فيديو مجانية، خط مساعدة عربي على مدار 24/7، وجبات رمضان",
            accreditations: "NABH، ISO",
            annual: "أكثر من 120,000 جراحة، أكثر من 450 زراعة كلى"
          }
        ]
      },

      patientStory: {
        title: "قصة مريض حقيقية: خالد من الرياض",
        quote: "وفّرت 85,000 ريال على استبدال الركبة وتلقيت رعاية استثنائية.",
        patient: "خالد أ.، 62 عاماً من سكان الرياض، موظف حكومي متقاعد",
        condition: "التهاب مفاصل حاد في كلتا الركبتين (عظم على عظم، ألم يومي لمدة 3 سنوات)",
        treatment: "استبدال كامل لكلتا الركبتين",
        riyadhQuoteTitle: "عرض الأسعار في الرياض:",
        riyadhQuoteItems: [
          "مدينة الملك فهد الطبية: 140,000 ريال (قائمة انتظار 6 أشهر)",
          "مستشفى خاص في الرياض: 165,000 ريال",
          "تغطية التأمين: 80,000 ريال (الرصيد من الجيب 60,000-85,000 ريال)",
          "وقت الانتظار: 4-6 أشهر"
        ],
        indiaExpTitle: "تجربة الهند:",
        indiaExpItems: [
          "استشارة فيديو مع د. أرون مينون في مستشفى ماكس دلهي (مجانية)",
          "طار على الخطوط السعودية (الرياض ← دلهي): 2,200 ريال ذهاباً وإياباً لشخصين",
          "تكلفة الجراحة في مستشفى ماكس: 52,500 ريال (باقة شاملة لكلتا الركبتين)",
          "الإقامة في المستشفى: 5 أيام في غرفة خاصة",
          "الفندق: 300 ريال/ليلة × 9 ليالٍ = 2,700 ريال",
          "الطعام والنقل: 1,800 ريال",
          "إجمالي التكلفة: 59,200 ريال (مقابل 140,000-165,000 ريال في الرياض)",
          "التوفير: 80,800-105,800 ريال (58-64٪)",
          "بدأ العلاج في غضون أسبوعين (مقابل 4-6 أشهر انتظار)"
        ],
        testimony: "كانت الرعاية في مستشفى ماكس متميزة. د. أرون مينون هو أحد أفضل جراحي العظام في الهند - شرح كل شيء بالتفصيل وكانت الجراحة مثالية. جعل المنسق العربي زوجتي تشعر بالراحة طوال الوقت. بدأت المشي بالمشاية في اليوم الثاني! راجع طبيب العظام في الرياض الأشعة السينية وقال إن وضع الزرعة مثالي. أنا الآن خالٍ من الألم وأمشي بدون دعم. أخبر الجميع - لماذا تنتظر 6 أشهر وتدفع الضعف في الرياض؟ اذهب إلى الهند!",
        result: "✅ النتيجة: استبدال ناجح لكلتا الركبتين، المشي بشكل مستقل بعد 6 أسابيع، اللعب مع الأحفاد بعد 3 أشهر"
      },

      faqSection: {
        title: "الأسئلة الشائعة (المرضى السعوديون)",
        questions: [
          {
            q: "1. هل العلاج الطبي في الهند آمن للمرضى السعوديين؟",
            a: "نعم، آمن تماماً. تتبع أفضل المستشفيات في الهند (المعتمدة من JCI) نفس معايير السلامة الدولية الموجودة في مستشفيات الرياض. معدلات النجاح للإجراءات الكبرى مماثلة أو أفضل من المستشفيات السعودية. يسافر أكثر من 30,000 مريض سعودي إلى الهند سنوياً للعلاج الطبي. تعالج الهند أكثر من 500,000 مريض دولي سنوياً من أكثر من 150 دولة."
          },
          {
            q: "2. كم يمكنني التوفير مقارنة بالرياض؟",
            a: "70-85٪ في المتوسط. حتى بعد إضافة تكاليف الرحلات الجوية (2,200 ريال)، والإقامة (2,500-7,000 ريال)، والتأشيرة (280 ريال)، توفر 40,000-256,000 ريال حسب الإجراء. جراحة القلب توفر ~142,500 ريال، استبدال الركبة ~51,250 ريال، زراعة الكبد ~256,250 ريال."
          },
          {
            q: "3. ماذا عن عملية التأشيرة الطبية للسعوديين؟",
            a: "بسيطة جداً لسكان السعودية. قدم عبر الإنترنت (موافقة في 3-5 أيام) أو احصل على التأشيرة عند الوصول (بعض المطارات). نرسل لك خطاب دعوة تأشيرة طبية من المستشفى. التكلفة: 280 ريال. التأشيرة الطبية صالحة لمدة 60 يوماً وتسمح بـ 3 دخولات. يمكن لأفراد العائلة المرافقة بتأشيرة مرافق طبي. لا حاجة لزيارة السفارة الهندية."
          },
          {
            q: "4. هل تفهم المستشفيات الثقافة السعودية والقيم الإسلامية؟",
            a: "نعم، المستشفيات متعاونة جداً. جميع المستشفيات الكبرى لديها غرف صلاة باتجاه القبلة، تقدم طعاماً حلالاً 100٪، توفر موظفين ناطقين بالعربية يفهمون اللهجة السعودية، تحترم رمضان وأوقات الصلاة، ويمكنها ترتيب طبيبات للمريضات. عالجت العديد من المستشفيات آلاف المرضى السعوديين وتفهم الحساسيات الثقافية."
          },
          {
            q: "5. هل يمكنني استخدام تأميني الحكومي/الخاص السعودي؟",
            a: "بعض خطط التأمين تغطي العلاج الدولي. تحقق مع مزود التأمين الخاص بك (بوبا، تعاونية، مدجلف، إلخ) حول التغطية للعلاج في الخارج. بعض المستشفيات مثل فورتيس وأبولو لديها اتفاقيات مع شركات التأمين السعودية ويمكنها إجراء فواتير نقدية/مباشرة. إذا لم يتم تغطيته، تدفع مقدماً وتطالب بالسداد عند العودة إلى الرياض مع فواتير المستشفى وملخص الخروج."
          },
          {
            q: "6. كم من الوقت أحتاج للبقاء في الهند؟",
            a: "يعتمد على الإجراء: الإجراءات البسيطة (الأسنان، الساد، التنظير): 3-5 أيام. الإجراءات المتوسطة (استبدال الركبة، الفتق، المرارة): 10-14 يوماً. الإجراءات المعقدة (جراحة القلب، زراعة الأعضاء): 3-4 أسابيع. نوفر جداول زمنية مقدرة أثناء استشارة الفيديو المجانية. يعود معظم المرضى إلى الرياض في غضون أسبوعين."
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
      publishedDate={locale === 'ar' ? "أكتوبر 2025" : "October 2025"}
      lastUpdated={locale === 'ar' ? "أكتوبر 2025" : "October 2025"}
      readTime={currentContent.readTime}
      breadcrumbTitle={currentContent.breadcrumbTitle}
    >
      {/* Breadcrumb Schema for SEO */}
      <BreadcrumbSchema items={[
        { name: locale === 'ar' ? 'الرئيسية' : 'Home', url: 'https://shifaalhind.onrender.com' },
        { name: locale === 'ar' ? 'المدونة' : 'Blog', url: 'https://shifaalhind.onrender.com/blog' },
        { name: locale === 'ar' ? 'دليل الرعاية الصحية من الرياض إلى الهند للمرضى السعوديين' : 'Riyadh to India Healthcare Guide for Saudi Patients', url: 'https://shifaalhind.onrender.com/blog/riyadh-to-india-healthcare' }
      ]} />

      {/* Article Schema for SEO */}
      <ArticleSchema
        headline={locale === 'ar' ? "دليل الرعاية الصحية من الرياض إلى الهند للمرضى السعوديين 2025" : "Riyadh to India Healthcare Guide for Saudi Patients 2025"}
        description={locale === 'ar' ? "دليل شامل للرعاية الصحية لمرضى الرياض الذين يسعون للعلاج في الهند. التكاليف، المستشفيات، التأشيرة، ومعلومات السفر." : "Complete healthcare guide for Riyadh patients seeking treatment in India. Costs, hospitals, visa, and travel information."}
        image="https://shifaalhind.onrender.com/images/blog/riyadh-healthcare.jpg"
        datePublished="2025-10-01"
        dateModified="2025-10-01"
        author={DEFAULT_AUTHOR}
        publisher={DEFAULT_PUBLISHER}
        url="https://shifaalhind.onrender.com/blog/riyadh-to-india-healthcare"
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

      {/* Why Riyadh Patients Choose India */}
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

      {/* Cost Comparison Riyadh vs India */}
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
                    {locale === 'ar' ? 'تكلفة الرياض (ريال)' : 'Riyadh Cost (SAR)'}
                  </th>
                  <th className="border p-3 text-right">
                    {locale === 'ar' ? 'تكلفة الهند (ريال)' : 'India Cost (SAR)'}
                  </th>
                  <th className="border p-3 text-right">
                    {locale === 'ar' ? 'التوفير (ريال)' : 'Savings (SAR)'}
                  </th>
                  <th className="border p-3 text-center">
                    {locale === 'ar' ? '٪ الموفرة' : '% Saved'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentContent.costComparison.procedures.map((proc, idx) => (
                  <tr key={idx} className={idx % 2 === 1 ? "bg-muted/50" : ""}>
                    <td className="border p-3 font-medium">{proc.name}</td>
                    <td className="border p-3 text-right">{proc.riyadh}</td>
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
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Top 5 Hospitals for Saudi Patients */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">{currentContent.hospitals.title}</h2>

          <div className="space-y-6">
            {currentContent.hospitals.list.map((hospital, idx) => (
              <div key={idx} className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-lg mb-2">{hospital.num}. {hospital.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>{locale === 'ar' ? 'لماذا يختار المرضى السعوديون' : 'Why Saudi patients choose'} {hospital.name.split(' - ')[0]}:</strong> {hospital.why}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li><strong>{locale === 'ar' ? 'التخصصات:' : 'Specialties:'}</strong> {hospital.specialties}</li>
                  <li><strong>{locale === 'ar' ? 'معدلات النجاح:' : 'Success rates:'}</strong> {hospital.successRates}</li>
                  <li><strong>{locale === 'ar' ? 'مزايا للمرضى السعوديين:' : 'Saudi patient perks:'}</strong> {hospital.saudiPerks}</li>
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
                <p className="font-semibold mb-2">{currentContent.patientStory.riyadhQuoteTitle}</p>
                <ul className="list-disc list-inside space-y-1">
                  {currentContent.patientStory.riyadhQuoteItems.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="my-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded">
                <p className="font-semibold mb-2">{currentContent.patientStory.indiaExpTitle}</p>
                <ul className="list-disc list-inside space-y-1">
                  {currentContent.patientStory.indiaExpItems.map((item, idx) => (
                    <li key={idx}><strong>{item.includes('Total') || item.includes('Savings') || item.includes('Treatment') || item.includes('إجمالي') || item.includes('التوفير') || item.includes('بدأ') ? item : ''}</strong>{!item.includes('Total') && !item.includes('Savings') && !item.includes('Treatment') && !item.includes('إجمالي') && !item.includes('التوفير') && !item.includes('بدأ') ? item : ''}</li>
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

      {/* Internal Links */}
      <InternalLinks
        title={locale === 'ar' ? "موارد ذات صلة للمرضى السعوديين" : "Related Resources for Saudi Patients"}
        links={[
          {
            title: locale === 'ar' ? 'أفضل المستشفيات للسياحة العلاجية' : 'Best Hospitals for Medical Tourism',
            href: '/hospitals',
            description: locale === 'ar' ? 'تصفح المستشفيات المعتمدة من JCI في جميع أنحاء الهند' : 'Browse JCI-accredited hospitals across India',
          },
          {
            title: locale === 'ar' ? 'دليل السياحة العلاجية للمرضى السعوديين' : 'Medical Tourism Guide for Saudi Patients',
            href: '/for-saudi-patients',
            description: locale === 'ar' ? 'دليل شامل لجميع المرضى السعوديين' : 'Complete guide for all Saudi patients',
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
        { question: "كم يمكن للمرضى السعوديين التوفير في الهند؟", answer: "متوسط التوفير: 70-80٪ في معظم الإجراءات. جراحة القلب المفتوح: توفير 142,500 ريال (72٪)، استبدال الركبة: 51,250 ريال (73٪)، زراعة الكبد: 256,250 ريال (74٪)، أطفال الأنابيب: 26,250 ريال (70٪). بالنسبة للإجراءات المعقدة، يمكن أن يتجاوز التوفير 100,000-200,000 ريال لكل مريض." },
        { question: "كم من الوقت يستغرق الطيران من الرياض إلى الهند؟", answer: "الرياض إلى مومباي: 4 ساعات مباشرة، دلهي: 4.5 ساعات، بنغالور: 5 ساعات، تشيناي: 5.5 ساعات. رحلات أسبوعية متعددة من الخطوط السعودية، إير إنديا، إنديجو. تكلف الرحلات 1,500-3,000 ريال ذهاباً وإياباً. يتم معالجة التأشيرة الطبية (e-Medical Visa) عبر الإنترنت في غضون 3-5 أيام." },
        { question: "هل تلبي المستشفيات الهندية الاحتياجات الثقافية السعودية؟", answer: "نعم! توفر أفضل المستشفيات: منسقين ناطقين بالعربية، طعام حلال (جميع الوجبات)، غرف صلاة باتجاه القبلة، رعاية خاصة بالجنس (طبيبات للنساء)، أجنحة عائلية خاصة، متطلبات غذائية إسلامية، أوقات صلاة مرنة أثناء العلاج. لدى العديد من المستشفيات خبرة 10+ سنوات مع المرضى السعوديين." },
        { question: "هل الأطباء الهنود مؤهلون لعلاج المرضى السعوديين؟", answer: "نعم، أفضل الأطباء لديهم تدريب دولي (الولايات المتحدة، المملكة المتحدة، أوروبا)، خبرة 15-20+ سنة، يجرون أكثر من 300 إجراء سنوياً. عالجت العديد من المستشفيات أكثر من 5,000 مريض سعودي. معدلات النجاح تطابق أو تتجاوز المستشفيات السعودية. جميع المستشفيات المعتمدة من JCI تتبع البروتوكولات الدولية المماثلة لمستشفيات منطقة الخليج." }
      ] : [
        { question: "How much can Saudi patients save in India?", answer: "Average savings: 70-80% on most procedures. Heart bypass: SAR 142,500 saved (72%), Knee replacement: SAR 51,250 (73%), Liver transplant: SAR 256,250 (74%), IVF: SAR 26,250 (70%). For complex procedures, savings can exceed SAR 100,000-200,000 per patient." },
        { question: "How long does it take to fly from Riyadh to India?", answer: "Riyadh to Mumbai: 4 hours direct, Delhi: 4.5 hours, Bangalore: 5 hours, Chennai: 5.5 hours. Multiple weekly flights from Saudia, Air India, IndiGo. Flights cost SAR 1,500-3,000 round trip. Medical visa (e-Medical Visa) processed online within 3-5 days." },
        { question: "Do Indian hospitals accommodate Saudi cultural needs?", answer: "Yes! Top hospitals provide: Arabic-speaking coordinators, halal food (all meals), prayer rooms with Qibla direction, gender-specific care (female doctors for women), private family suites, Islamic dietary requirements, flexible prayer times during treatment. Many hospitals have 10+ years experience with Saudi patients." },
        { question: "Are Indian doctors qualified to treat Saudi patients?", answer: "Yes, top doctors have international training (USA, UK, Europe), 15-20+ years experience, perform 300+ procedures annually. Many hospitals have treated 5,000+ Saudi patients. Success rates match or exceed Saudi hospitals. All JCI-accredited hospitals follow international protocols identical to Gulf region hospitals." }
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
        title={locale === 'ar' ? "الرعاية الصحية من الرياض إلى الهند 2025: دليل السياحة العلاجية الشامل" : "Riyadh to India Healthcare 2025: Complete Medical Tourism Guide"}
        url="/blog/riyadh-to-india-healthcare"
        description={locale === 'ar' ? "دليل شامل للرعاية الصحية لمرضى الرياض. وفّر 70-85٪ على العلاج الطبي في الهند. رحلات مباشرة، مستشفيات JCI، عملية تأشيرة سهلة." : "Comprehensive healthcare guide for Riyadh patients. Save 70-85% on medical treatment in India. Direct flights, JCI hospitals, easy visa process."}
      />

      {/* Related Articles */}
      <RelatedArticles articles={CANCER_RELATED_ARTICLES} />
    </BlogArticleLayout>
  );
}

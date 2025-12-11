import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Check,
  Heart,
  DollarSign,
  Plane,
  Shield,
  Clock,
  Users,
  Phone,
  Star
} from 'lucide-react';
import { TrustBadges } from '@/components/trust-badges/trust-badges';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return generateSEOMetadata({
    title_en: 'Medical Tourism India for UAE Patients | Save 60-80% on Treatment',
    title_ar: 'السياحة العلاجية في الهند لمرضى الإمارات | وفر 60-80% على العلاج',
    description_en: 'Discover why 50,000+ UAE patients choose India for medical treatment. Save 60-80% on heart surgery, IVF, knee replacement with JCI-accredited hospitals. Direct flights from Dubai.',
    description_ar: 'اكتشف لماذا يختار أكثر من 50,000 مريض إماراتي الهند للعلاج الطبي. وفر 60-80% على جراحة القلب، أطفال الأنابيب، استبدال الركبة في مستشفيات معتمدة من JCI. رحلات مباشرة من دبي.',
    locale,
    path: '/for-uae-patients',
  });
}

export const dynamic = 'force-dynamic';

export default async function UAEPatientsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // Bilingual content
  const content = {
    en: {
      hero: {
        title: 'Medical Tourism to India for UAE Patients',
        subtitle: 'Join 50,000+ UAE patients who saved 60-80% on world-class medical treatment in India\'s top JCI-accredited hospitals',
        cta1: 'Get Free Consultation',
        cta2: 'View Top Hospitals'
      },
      whyChoose: {
        title: 'Why 50,000+ UAE Patients Choose India Every Year',
        reasons: [
          {
            title: 'Save 60-80% on Costs',
            description: 'Heart surgery: AED 150K in UAE → AED 30K in India\nIVF: AED 55K in UAE → AED 12K in India\nKnee replacement: AED 75K in UAE → AED 18K in India'
          },
          {
            title: 'JCI-Accredited Hospitals',
            description: 'Apollo, Fortis, Max, Manipal hospitals meet international standards. Same quality as UAE hospitals at a fraction of the cost.'
          },
          {
            title: 'Direct Flights from Dubai',
            description: '3-4 hour flights to Mumbai, Delhi, Bangalore. Multiple daily flights from Dubai, Abu Dhabi, Sharjah to all major Indian cities.'
          },
          {
            title: 'No Waiting Times',
            description: 'Book surgery within 7-14 days vs 3-6 months wait in UAE. Immediate consultations with top specialists.'
          },
          {
            title: 'Arabic-Speaking Staff',
            description: 'Many hospitals have Arabic-speaking coordinators, translators, and staff to ensure comfortable communication.'
          },
          {
            title: '98%+ Success Rates',
            description: 'India\'s top hospitals match or exceed UAE success rates. Over 500,000 international patients treated annually.'
          }
        ]
      },
      costComparison: {
        title: 'UAE vs India: Cost Comparison',
        tableHeaders: {
          treatment: 'Treatment',
          uaeCost: 'UAE Cost',
          indiaCost: 'India Cost',
          savings: 'You Save'
        },
        treatments: [
          { name: 'Heart Bypass Surgery (CABG)', uae: 'AED 150,000', india: 'AED 30,000', save: 'AED 120,000 (80%)' },
          { name: 'Heart Valve Replacement', uae: 'AED 165,000', india: 'AED 35,000', save: 'AED 130,000 (79%)' },
          { name: 'Total Knee Replacement', uae: 'AED 75,000', india: 'AED 18,000', save: 'AED 57,000 (76%)' },
          { name: 'IVF Treatment (1 cycle)', uae: 'AED 55,000', india: 'AED 12,000', save: 'AED 43,000 (78%)' },
          { name: 'Spinal Fusion Surgery', uae: 'AED 110,000', india: 'AED 25,000', save: 'AED 85,000 (77%)' },
          { name: 'Liver Transplant', uae: 'AED 550,000', india: 'AED 120,000', save: 'AED 430,000 (78%)' },
          { name: 'Hip Replacement', uae: 'AED 85,000', india: 'AED 20,000', save: 'AED 65,000 (76%)' },
          { name: 'Kidney Transplant', uae: 'AED 400,000', india: 'AED 90,000', save: 'AED 310,000 (78%)' }
        ],
        note: '*Prices include hospital stay, surgeon fees, medications, and post-operative care. Flights and accommodation extra.'
      },
      flights: {
        title: 'Direct Flights from UAE to India',
        dubai: {
          title: 'Dubai (DXB) to India',
          routes: [
            'Mumbai (BOM) - 3 hours, 5-6 flights/day (Emirates, Air India, IndiGo)',
            'Delhi (DEL) - 3.5 hours, 4-5 flights/day',
            'Bangalore (BLR) - 4 hours, 3-4 flights/day',
            'Chennai (MAA) - 4 hours, 3 flights/day'
          ]
        },
        abudhabi: {
          title: 'Abu Dhabi & Sharjah to India',
          routes: [
            'Abu Dhabi (AUH) to Mumbai - 3 hours, 2-3 flights/day (Etihad)',
            'Abu Dhabi to Delhi - 3.5 hours, 2 flights/day',
            'Sharjah (SHJ) to multiple Indian cities - Budget airlines (Air Arabia)'
          ],
          cost: 'Flight Cost: AED 800-2,000 round-trip (economy)'
        }
      },
      visa: {
        title: 'Medical Visa for UAE Passport Holders',
        steps: [
          {
            title: 'Apply Online',
            description: 'Visit: indianvisaonline.gov.in/evisa\nSelect "e-Medical Visa" option'
          },
          {
            title: 'Documents Required',
            items: [
              'Passport copy (valid 6+ months)',
              'Recent passport photo',
              'Medical letter from hospital in India',
              'Proof of funds (bank statement)'
            ]
          },
          {
            title: 'Processing Time & Cost',
            description: 'Processing: 3-5 business days\nCost: $80 USD (AED 295)\nValidity: 60 days, triple entry'
          },
          {
            title: 'We Help You!',
            description: 'Shifa AlHind provides complete visa assistance:\n• Hospital invitation letter\n• Document checklist\n• Application support\n• Fast-track processing (if needed)'
          }
        ]
      },
      stories: {
        title: 'Success Stories from UAE Patients',
        testimonials: [
          {
            initials: 'AM',
            name: 'Ahmed M.',
            location: 'Dubai, UAE',
            quote: 'Had bypass surgery at Apollo Mumbai. Saved AED 120,000! Doctors were Harvard-trained, hospital was world-class. Recovery went smoothly. Highly recommend!',
            treatment: 'Heart Bypass Surgery • Saved AED 120,000'
          },
          {
            initials: 'FH',
            name: 'Fatima H.',
            location: 'Abu Dhabi, UAE',
            quote: 'After 4 failed IVF cycles in UAE, went to Nova IVF Bangalore. First cycle success! Cost was 1/4th of UAE. Now expecting twins. Thank you Shifa AlHind!',
            treatment: 'IVF Treatment • Saved AED 165,000 (3 cycles)'
          },
          {
            initials: 'KA',
            name: 'Khalid A.',
            location: 'Sharjah, UAE',
            quote: 'Knee replacement at Manipal Hospital. Walking pain-free after 3 years! Total cost including flights was less than UAE hospital quote. Excellent care.',
            treatment: 'Knee Replacement • Saved AED 57,000'
          }
        ]
      },
      faq: {
        title: 'Frequently Asked Questions',
        questions: [
          {
            q: 'How long does medical treatment take in India?',
            a: 'Most procedures take 7-21 days including recovery. Heart surgery: 10-14 days, knee replacement: 10-15 days, IVF: 21-28 days. You can fly back home after doctor clearance.'
          },
          {
            q: 'Are Indian hospitals really as good as UAE hospitals?',
            a: 'Yes! Apollo, Fortis, Max, Manipal are JCI-accredited with international standards. Many doctors trained at Harvard, Johns Hopkins, Mayo Clinic. Success rates match or exceed UAE hospitals.'
          },
          {
            q: 'What about language barriers?',
            a: 'Top hospitals have Arabic-speaking coordinators and staff. All doctors speak fluent English. We provide translators if needed at no extra cost.'
          },
          {
            q: 'Can my family accompany me?',
            a: 'Yes! Medical visa allows 1 attendant. We arrange accommodation near hospital (AED 100-300/night). Family can stay with you during recovery.'
          },
          {
            q: 'What if something goes wrong?',
            a: 'All procedures covered by hospital\'s malpractice insurance. We provide 24/7 support. Follow-up consultations available via video call after returning to UAE.'
          },
          {
            q: 'How much money should I bring?',
            a: 'Most costs paid in advance. Bring AED 2,000-5,000 for accommodation, meals, local transport. We accept UAE bank transfers and international credit cards.'
          }
        ]
      },
      finalCta: {
        title: 'Ready to Save 60-80% on Your Medical Treatment?',
        subtitle: 'Join thousands of UAE patients who transformed their health and saved money with India\'s top hospitals',
        cta1: 'Get Free Consultation',
        cta2: 'WhatsApp Us',
        note: 'Free consultation • No obligation • Response within 1 hour'
      }
    },
    ar: {
      hero: {
        title: 'السياحة العلاجية في الهند لمرضى الإمارات',
        subtitle: 'انضم إلى أكثر من 50,000 مريض إماراتي وفروا 60-80% على العلاج الطبي عالي المستوى في أفضل مستشفيات الهند المعتمدة من JCI',
        cta1: 'احصل على استشارة مجانية',
        cta2: 'عرض أفضل المستشفيات'
      },
      whyChoose: {
        title: 'لماذا يختار أكثر من 50,000 مريض إماراتي الهند كل عام',
        reasons: [
          {
            title: 'وفر 60-80% من التكاليف',
            description: 'جراحة القلب: 150 ألف درهم في الإمارات ← 30 ألف درهم في الهند\nأطفال الأنابيب: 55 ألف درهم في الإمارات ← 12 ألف درهم في الهند\nاستبدال الركبة: 75 ألف درهم في الإمارات ← 18 ألف درهم في الهند'
          },
          {
            title: 'مستشفيات معتمدة من JCI',
            description: 'مستشفيات أبولو وفورتيس وماكس ومانيبال تلبي المعايير الدولية. نفس الجودة كمستشفيات الإمارات بجزء بسيط من التكلفة.'
          },
          {
            title: 'رحلات مباشرة من دبي',
            description: 'رحلات من 3-4 ساعات إلى مومباي ودلهي وبنغالور. رحلات يومية متعددة من دبي وأبوظبي والشارقة إلى جميع المدن الهندية الرئيسية.'
          },
          {
            title: 'بدون أوقات انتظار',
            description: 'احجز الجراحة خلال 7-14 يومًا مقابل 3-6 أشهر انتظار في الإمارات. استشارات فورية مع أفضل المتخصصين.'
          },
          {
            title: 'طاقم يتحدث العربية',
            description: 'العديد من المستشفيات لديها منسقون ومترجمون وموظفون يتحدثون العربية لضمان التواصل المريح.'
          },
          {
            title: 'معدلات نجاح تزيد عن 98%',
            description: 'أفضل مستشفيات الهند تضاهي أو تتجاوز معدلات نجاح مستشفيات الإمارات. أكثر من 500,000 مريض دولي يتم علاجهم سنويًا.'
          }
        ]
      },
      costComparison: {
        title: 'مقارنة التكاليف: الإمارات مقابل الهند',
        tableHeaders: {
          treatment: 'العلاج',
          uaeCost: 'تكلفة الإمارات',
          indiaCost: 'تكلفة الهند',
          savings: 'توفيرك'
        },
        treatments: [
          { name: 'جراحة القلب المفتوح (CABG)', uae: '150,000 درهم', india: '30,000 درهم', save: '120,000 درهم (80%)' },
          { name: 'استبدال صمام القلب', uae: '165,000 درهم', india: '35,000 درهم', save: '130,000 درهم (79%)' },
          { name: 'استبدال الركبة الكامل', uae: '75,000 درهم', india: '18,000 درهم', save: '57,000 درهم (76%)' },
          { name: 'علاج أطفال الأنابيب (دورة واحدة)', uae: '55,000 درهم', india: '12,000 درهم', save: '43,000 درهم (78%)' },
          { name: 'جراحة دمج العمود الفقري', uae: '110,000 درهم', india: '25,000 درهم', save: '85,000 درهم (77%)' },
          { name: 'زراعة الكبد', uae: '550,000 درهم', india: '120,000 درهم', save: '430,000 درهم (78%)' },
          { name: 'استبدال الورك', uae: '85,000 درهم', india: '20,000 درهم', save: '65,000 درهم (76%)' },
          { name: 'زراعة الكلى', uae: '400,000 درهم', india: '90,000 درهم', save: '310,000 درهم (78%)' }
        ],
        note: '*الأسعار تشمل الإقامة في المستشفى ورسوم الجراح والأدوية والرعاية بعد العملية. الرحلات والإقامة إضافية.'
      },
      flights: {
        title: 'رحلات مباشرة من الإمارات إلى الهند',
        dubai: {
          title: 'دبي (DXB) إلى الهند',
          routes: [
            'مومباي (BOM) - 3 ساعات، 5-6 رحلات/يوم (طيران الإمارات، الهند، إنديجو)',
            'دلهي (DEL) - 3.5 ساعات، 4-5 رحلات/يوم',
            'بنغالور (BLR) - 4 ساعات، 3-4 رحلات/يوم',
            'تشيناي (MAA) - 4 ساعات، 3 رحلات/يوم'
          ]
        },
        abudhabi: {
          title: 'أبوظبي والشارقة إلى الهند',
          routes: [
            'أبوظبي (AUH) إلى مومباي - 3 ساعات، 2-3 رحلات/يوم (الاتحاد)',
            'أبوظبي إلى دلهي - 3.5 ساعات، رحلتان/يوم',
            'الشارقة (SHJ) إلى مدن هندية متعددة - شركات طيران اقتصادية (العربية للطيران)'
          ],
          cost: 'تكلفة الرحلة: 800-2,000 درهم ذهابًا وإيابًا (درجة اقتصادية)'
        }
      },
      visa: {
        title: 'التأشيرة الطبية لحاملي جوازات سفر الإمارات',
        steps: [
          {
            title: 'التقديم عبر الإنترنت',
            description: 'الموقع: indianvisaonline.gov.in/evisa\nاختر خيار "التأشيرة الطبية الإلكترونية"'
          },
          {
            title: 'المستندات المطلوبة',
            items: [
              'نسخة من جواز السفر (صالح لمدة 6+ أشهر)',
              'صورة حديثة لجواز السفر',
              'خطاب طبي من المستشفى في الهند',
              'إثبات الأموال (كشف حساب بنكي)'
            ]
          },
          {
            title: 'وقت المعالجة والتكلفة',
            description: 'المعالجة: 3-5 أيام عمل\nالتكلفة: 80 دولار أمريكي (295 درهم)\nالصلاحية: 60 يومًا، دخول ثلاثي'
          },
          {
            title: 'نحن نساعدك!',
            description: 'شفاء الهند توفر مساعدة كاملة في التأشيرة:\n• خطاب دعوة من المستشفى\n• قائمة المستندات المطلوبة\n• دعم في التقديم\n• معالجة سريعة (إذا لزم الأمر)'
          }
        ]
      },
      stories: {
        title: 'قصص نجاح من مرضى الإمارات',
        testimonials: [
          {
            initials: 'AM',
            name: 'أحمد م.',
            location: 'دبي، الإمارات',
            quote: 'أجريت جراحة القلب المفتوح في مستشفى أبولو مومباي. وفرت 120,000 درهم! الأطباء متدربون من هارفارد، المستشفى عالمي المستوى. التعافي كان سلسًا. أوصي به بشدة!',
            treatment: 'جراحة القلب المفتوح • وفر 120,000 درهم'
          },
          {
            initials: 'FH',
            name: 'فاطمة ح.',
            location: 'أبوظبي، الإمارات',
            quote: 'بعد 4 دورات فاشلة لأطفال الأنابيب في الإمارات، ذهبت إلى نوفا IVF بنغالور. نجحت الدورة الأولى! التكلفة كانت ربع تكلفة الإمارات. الآن أنتظر توأمين. شكرًا شفاء الهند!',
            treatment: 'علاج أطفال الأنابيب • وفرت 165,000 درهم (3 دورات)'
          },
          {
            initials: 'KA',
            name: 'خالد أ.',
            location: 'الشارقة، الإمارات',
            quote: 'استبدال الركبة في مستشفى مانيبال. أمشي بدون ألم بعد 3 سنوات! التكلفة الإجمالية بما في ذلك الرحلات كانت أقل من عرض مستشفى الإمارات. رعاية ممتازة.',
            treatment: 'استبدال الركبة • وفر 57,000 درهم'
          }
        ]
      },
      faq: {
        title: 'الأسئلة الشائعة',
        questions: [
          {
            q: 'كم من الوقت يستغرق العلاج الطبي في الهند؟',
            a: 'معظم الإجراءات تستغرق 7-21 يومًا بما في ذلك التعافي. جراحة القلب: 10-14 يومًا، استبدال الركبة: 10-15 يومًا، أطفال الأنابيب: 21-28 يومًا. يمكنك العودة إلى المنزل بعد موافقة الطبيب.'
          },
          {
            q: 'هل المستشفيات الهندية جيدة حقًا مثل مستشفيات الإمارات؟',
            a: 'نعم! أبولو وفورتيس وماكس ومانيبال معتمدة من JCI بمعايير دولية. العديد من الأطباء تدربوا في هارفارد وجونز هوبكنز ومايو كلينك. معدلات النجاح تضاهي أو تتجاوز مستشفيات الإمارات.'
          },
          {
            q: 'ماذا عن حواجز اللغة؟',
            a: 'أفضل المستشفيات لديها منسقون وموظفون يتحدثون العربية. جميع الأطباء يتحدثون الإنجليزية بطلاقة. نوفر مترجمين إذا لزم الأمر بدون تكلفة إضافية.'
          },
          {
            q: 'هل يمكن لعائلتي مرافقتي؟',
            a: 'نعم! التأشيرة الطبية تسمح بمرافق واحد. نرتب الإقامة بالقرب من المستشفى (100-300 درهم/ليلة). يمكن للعائلة البقاء معك أثناء التعافي.'
          },
          {
            q: 'ماذا لو حدث خطأ ما؟',
            a: 'جميع الإجراءات مغطاة بتأمين سوء الممارسة الطبية للمستشفى. نوفر دعمًا على مدار 24/7. استشارات المتابعة متاحة عبر مكالمة فيديو بعد العودة إلى الإمارات.'
          },
          {
            q: 'كم من المال يجب أن أحضر معي؟',
            a: 'معظم التكاليف تدفع مقدمًا. احضر 2,000-5,000 درهم للإقامة والوجبات والنقل المحلي. نقبل التحويلات البنكية من الإمارات وبطاقات الائتمان الدولية.'
          }
        ]
      },
      finalCta: {
        title: 'هل أنت مستعد لتوفير 60-80% على علاجك الطبي؟',
        subtitle: 'انضم إلى آلاف مرضى الإمارات الذين حولوا صحتهم ووفروا المال مع أفضل مستشفيات الهند',
        cta1: 'احصل على استشارة مجانية',
        cta2: 'واتساب',
        note: 'استشارة مجانية • بدون التزام • رد خلال ساعة واحدة'
      }
    }
  };

  const safeLocale = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  const currentContent = content[safeLocale];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {currentContent.hero.title}
            </h1>
            <p className="text-xl mb-8">
              {currentContent.hero.subtitle}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href={`/${locale}/booking`}>
                <Button size="lg" variant="secondary">
                  {currentContent.hero.cta1}
                </Button>
              </Link>
              <Link href={`/${locale}/hospitals`}>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-emerald-600">
                  {currentContent.hero.cta2}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why UAE Patients Choose India */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {currentContent.whyChoose.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentContent.whyChoose.reasons.map((reason, index) => {
              const icons = [DollarSign, Shield, Plane, Clock, Users, Heart];
              const Icon = icons[index];
              return (
                <Card key={index} className="p-6">
                  <Icon className="w-12 h-12 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line">
                    {reason.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {currentContent.costComparison.title}
          </h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow">
              <thead className="bg-emerald-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">{currentContent.costComparison.tableHeaders.treatment}</th>
                  <th className="px-6 py-4 text-right">{currentContent.costComparison.tableHeaders.uaeCost}</th>
                  <th className="px-6 py-4 text-right">{currentContent.costComparison.tableHeaders.indiaCost}</th>
                  <th className="px-6 py-4 text-right">{currentContent.costComparison.tableHeaders.savings}</th>
                </tr>
              </thead>
              <tbody>
                {currentContent.costComparison.treatments.map((treatment, index) => (
                  <tr key={index} className={index % 2 === 1 ? 'border-b bg-gray-50' : 'border-b'}>
                    <td className="px-6 py-4 font-medium">{treatment.name}</td>
                    <td className="px-6 py-4 text-right">{treatment.uae}</td>
                    <td className="px-6 py-4 text-right text-emerald-600 font-semibold">{treatment.india}</td>
                    <td className="px-6 py-4 text-right text-emerald-600 font-bold">{treatment.save}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center mt-6 text-gray-600">
            {currentContent.costComparison.note}
          </p>
        </div>
      </section>

      {/* Flights from UAE to India */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {currentContent.flights.title}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Plane className="w-6 h-6 text-emerald-600" />
                  {currentContent.flights.dubai.title}
                </h3>
                <ul className="space-y-2">
                  {currentContent.flights.dubai.routes.map((route, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span>{route}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Plane className="w-6 h-6 text-emerald-600" />
                  {currentContent.flights.abudhabi.title}
                </h3>
                <ul className="space-y-2">
                  {currentContent.flights.abudhabi.routes.map((route, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span>{route}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  <strong>{currentContent.flights.abudhabi.cost}</strong>
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Visa Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {currentContent.visa.title}
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="p-8">
              <div className="space-y-6">
                {currentContent.visa.steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{step.title}</h3>
                      {step.description && (
                        <p className="text-gray-600 whitespace-pre-line">
                          {step.description}
                        </p>
                      )}
                      {step.items && (
                        <ul className="text-gray-600 space-y-1">
                          {step.items.map((item, i) => (
                            <li key={i}>• {item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories from UAE Patients */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {currentContent.stories.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentContent.stories.testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-xl">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="text-yellow-500 flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="text-sm text-emerald-600 font-semibold">
                  {testimonial.treatment}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {currentContent.faq.title}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {currentContent.faq.questions.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600">
                  {faq.a}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <TrustBadges />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {currentContent.finalCta.title}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {currentContent.finalCta.subtitle}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href={`/${locale}/booking`}>
              <Button size="lg" variant="secondary">
                {currentContent.finalCta.cta1}
              </Button>
            </Link>
            <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer" className="inline-flex">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-emerald-600">
                <Phone className="w-5 h-5 mr-2" />
                {currentContent.finalCta.cta2}
              </Button>
            </a>
          </div>
          <p className="mt-6 text-emerald-100">
            {currentContent.finalCta.note}
          </p>
        </div>
      </section>
    </div>
  );
}

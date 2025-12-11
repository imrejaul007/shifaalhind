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
    title_en: 'Medical Tourism India for Saudi Patients | Save 70-85% on Treatment',
    title_ar: 'السياحة العلاجية في الهند للمرضى السعوديين | وفر 70-85% على العلاج',
    description_en: 'Discover why 80,000+ Saudi patients choose India for medical treatment. Save 70-85% on heart surgery, IVF, knee replacement with JCI-accredited hospitals. Direct flights from Riyadh, Jeddah, Dammam.',
    description_ar: 'اكتشف لماذا يختار أكثر من 80,000 مريض سعودي الهند للعلاج الطبي. وفر 70-85% على جراحة القلب، أطفال الأنابيب، استبدال الركبة مع مستشفيات معتمدة من JCI. رحلات مباشرة من الرياض وجدة والدمام.',
    locale,
    path: '/for-saudi-patients',
  });
}

export const dynamic = 'force-dynamic';

export default async function SaudiPatientsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const content = {
    en: {
      hero: {
        title: 'Medical Tourism to India for Saudi Patients',
        subtitle: 'Join 80,000+ Saudi patients who saved 70-85% on world-class medical treatment in India\'s top JCI-accredited hospitals',
        cta1: 'Get Free Consultation',
        cta2: 'View Top Hospitals'
      },
      whyChoose: {
        title: 'Why 80,000+ Saudi Patients Choose India Every Year',
        reasons: [
          {
            title: 'Save 70-85% on Costs',
            description: 'Heart surgery: SAR 450K in Saudi → SAR 70K in India\nIVF: SAR 150K in Saudi → SAR 25K in India\nKnee replacement: SAR 200K in Saudi → SAR 35K in India'
          },
          {
            title: 'JCI-Accredited Hospitals',
            description: 'Apollo, Fortis, Max, Manipal hospitals are JCI-accredited. Same quality as Saudi hospitals like King Faisal Specialist at much lower cost.'
          },
          {
            title: 'Direct Flights from Saudi Arabia',
            description: '3-5 hour flights to Mumbai, Delhi, Bangalore. Daily flights from Riyadh, Jeddah, Dammam to all major Indian cities.'
          },
          {
            title: 'No Waiting Lists',
            description: 'Book surgery within 7-14 days vs 4-8 months wait in Saudi Arabia. Immediate consultations with top specialists.'
          },
          {
            title: 'Arabic-Speaking Staff',
            description: 'Arabic-speaking coordinators, translators, and medical staff. Halal food options available. Prayer facilities in all hospitals.'
          },
          {
            title: '98.5%+ Success Rates',
            description: 'India\'s top hospitals match King Faisal, King Fahad success rates. Over 600,000 international patients treated annually.'
          }
        ]
      },
      costComparison: {
        title: 'Saudi Arabia vs India: Cost Comparison',
        tableHeaders: {
          treatment: 'Treatment',
          saudiCost: 'Saudi Cost',
          indiaCost: 'India Cost',
          savings: 'You Save'
        },
        treatments: [
          { name: 'Heart Bypass Surgery (CABG)', saudi: 'SAR 450,000', india: 'SAR 70,000', save: 'SAR 380,000 (84%)' },
          { name: 'Heart Valve Replacement', saudi: 'SAR 500,000', india: 'SAR 80,000', save: 'SAR 420,000 (84%)' },
          { name: 'Total Knee Replacement', saudi: 'SAR 200,000', india: 'SAR 35,000', save: 'SAR 165,000 (83%)' },
          { name: 'IVF Treatment (1 cycle)', saudi: 'SAR 150,000', india: 'SAR 25,000', save: 'SAR 125,000 (83%)' },
          { name: 'Spinal Fusion Surgery', saudi: 'SAR 300,000', india: 'SAR 50,000', save: 'SAR 250,000 (83%)' },
          { name: 'Liver Transplant', saudi: 'SAR 1,500,000', india: 'SAR 250,000', save: 'SAR 1,250,000 (83%)' },
          { name: 'Hip Replacement', saudi: 'SAR 220,000', india: 'SAR 40,000', save: 'SAR 180,000 (82%)' },
          { name: 'Cancer Treatment (Chemotherapy)', saudi: 'SAR 400,000', india: 'SAR 75,000', save: 'SAR 325,000 (81%)' }
        ],
        note: '*Prices include hospital stay, surgeon fees, medications, and post-operative care. Flights and accommodation extra.'
      },
      flights: {
        title: 'Direct Flights from Saudi Arabia to India',
        riyadh: {
          title: 'Riyadh (RUH) to India',
          routes: [
            'Mumbai (BOM) - 4.5 hours, 3-4 flights/day (Saudia, Air India)',
            'Delhi (DEL) - 4 hours, 3-4 flights/day',
            'Hyderabad (HYD) - 4.5 hours, 2 flights/day'
          ]
        },
        jeddahDammam: {
          title: 'Jeddah & Dammam to India',
          routes: [
            'Jeddah (JED) to Mumbai - 4 hours, 3-4 flights/day',
            'Jeddah to Delhi - 4.5 hours, 2-3 flights/day',
            'Dammam (DMM) to multiple cities - 3-4 hours'
          ],
          cost: 'Flight Cost: SAR 1,200-2,500 round-trip (economy)'
        }
      },
      visa: {
        title: 'Medical Visa for Saudi Citizens',
        steps: [
          {
            title: 'Apply Online',
            description: 'Visit: indianvisaonline.gov.in/evisa\nSelect "e-Medical Visa"'
          },
          {
            title: 'Documents Required',
            items: [
              'Passport copy (valid 6+ months)',
              'Recent passport-size photo',
              'Medical letter from hospital in India',
              'Proof of financial capability (bank statement)'
            ]
          },
          {
            title: 'Processing Time & Cost',
            description: 'Processing: 3-5 business days\nCost: $80 USD (SAR 300)\nValidity: 60 days, triple entry'
          },
          {
            title: 'We Help You!',
            description: 'Shifa AlHind provides complete visa assistance:',
            items: [
              'Hospital invitation letter',
              'Document checklist',
              'Application support',
              'Fast-track processing'
            ]
          }
        ]
      },
      stories: {
        title: 'Success Stories from Saudi Patients',
        testimonials: [
          {
            initials: 'MA',
            name: 'Mohammed A.',
            location: 'Riyadh, Saudi Arabia',
            quote: 'Had triple bypass at Fortis Delhi. Saved SAR 380,000! Dr. Sharma trained at Cleveland Clinic. Hospital had prayer room, halal food. Alhamdulillah, complete recovery.',
            treatment: 'Heart Bypass Surgery • Saved SAR 380,000'
          },
          {
            initials: 'NK',
            name: 'Noura K.',
            location: 'Jeddah, Saudi Arabia',
            quote: '5 years of trying for baby in Saudi hospitals. Nova IVF Bangalore - first cycle pregnant! Arabic coordinator made everything easy. Cost 1/6th of Saudi. Baby girl born healthy!',
            treatment: 'IVF Treatment • Saved SAR 125,000'
          },
          {
            initials: 'AH',
            name: 'Abdullah H.',
            location: 'Dammam, Saudi Arabia',
            quote: 'Both knees replaced at Manipal Bangalore. Couldn\'t walk for years. Now playing with grandchildren! Total cost less than 1 knee in Saudi. Worth every riyal!',
            treatment: 'Bilateral Knee Replacement • Saved SAR 330,000'
          }
        ]
      },
      faq: {
        title: 'Frequently Asked Questions',
        questions: [
          {
            q: 'How long does medical treatment take in India?',
            a: 'Most procedures take 7-21 days including recovery. Heart surgery: 10-14 days, knee replacement: 10-15 days, IVF: 21-28 days. You can fly back to Saudi Arabia after doctor clearance.'
          },
          {
            q: 'Are Indian hospitals as good as Saudi hospitals?',
            a: 'Yes! Apollo, Fortis, Max, Manipal are JCI-accredited. Many doctors trained at top US/UK universities. Success rates match King Faisal Specialist Hospital, King Fahad Medical City.'
          },
          {
            q: 'Is halal food and prayer facilities available?',
            a: 'Yes! All major hospitals provide halal food options. Prayer rooms (مصلى) available in hospitals. Qibla direction marked in rooms. Many hotels near hospitals also cater to Muslim patients.'
          },
          {
            q: 'Do hospitals accept Saudi insurance?',
            a: 'Some hospitals accept Bupa Arabia, Tawuniya if you have international coverage. Most patients pay directly (much cheaper) and claim reimbursement. We provide detailed invoices for insurance claims.'
          },
          {
            q: 'Can my family accompany me?',
            a: 'Yes! Medical visa allows 2 attendants for Saudi patients. We arrange family accommodation (SAR 150-400/night). Translator provided for family communication with doctors.'
          },
          {
            q: 'How do I pay for treatment?',
            a: 'We accept international bank transfers (SWIFT), credit cards (Visa, Mastercard), and Saudi Riyal exchange. Payment plan available for expensive procedures. No hidden costs.'
          }
        ]
      },
      finalCta: {
        title: 'Ready to Save 70-85% on Your Medical Treatment?',
        subtitle: 'Join thousands of Saudi patients who transformed their health and saved hundreds of thousands of Riyals with India\'s top hospitals',
        cta1: 'Get Free Consultation',
        cta2: 'WhatsApp',
        note: 'Free consultation • No obligation • Response within 1 hour'
      }
    },
    ar: {
      hero: {
        title: 'السياحة العلاجية في الهند للمرضى السعوديين',
        subtitle: 'انضم إلى أكثر من 80,000 مريض سعودي وفروا 70-85% على العلاج الطبي عالمي المستوى في أفضل مستشفيات الهند المعتمدة من JCI',
        cta1: 'احصل على استشارة مجانية',
        cta2: 'عرض أفضل المستشفيات'
      },
      whyChoose: {
        title: 'لماذا يختار أكثر من 80,000 مريض سعودي الهند كل عام',
        reasons: [
          {
            title: 'وفر 70-85% على التكاليف',
            description: 'جراحة القلب: 450,000 ريال في السعودية ← 70,000 ريال في الهند\nأطفال الأنابيب: 150,000 ريال في السعودية ← 25,000 ريال في الهند\nاستبدال الركبة: 200,000 ريال في السعودية ← 35,000 ريال في الهند'
          },
          {
            title: 'مستشفيات معتمدة دولياً',
            description: 'مستشفيات أبولو وفورتيس وماكس ومانيبال معتمدة من JCI. نفس الجودة مثل مستشفيات السعودية مثل تخصصي الملك فيصل بتكلفة أقل بكثير.'
          },
          {
            title: 'رحلات مباشرة من السعودية',
            description: 'رحلات 3-5 ساعات إلى مومباي ودلهي وبنغالور. رحلات يومية من الرياض وجدة والدمام إلى جميع المدن الهندية الرئيسية.'
          },
          {
            title: 'لا قوائم انتظار',
            description: 'احجز الجراحة خلال 7-14 يوماً مقابل 4-8 أشهر انتظار في السعودية. استشارات فورية مع أفضل الأخصائيين.'
          },
          {
            title: 'طاقم عربي متخصص',
            description: 'منسقون ومترجمون وموظفون طبيون يتحدثون العربية. خيارات طعام حلال متاحة. مرافق صلاة في جميع المستشفيات.'
          },
          {
            title: 'معدلات نجاح 98.5%+',
            description: 'أفضل مستشفيات الهند تضاهي معدلات نجاح مستشفى الملك فيصل والملك فهد. أكثر من 600,000 مريض دولي يتم علاجهم سنوياً.'
          }
        ]
      },
      costComparison: {
        title: 'مقارنة التكاليف: السعودية مقابل الهند',
        tableHeaders: {
          treatment: 'العلاج',
          saudiCost: 'تكلفة السعودية',
          indiaCost: 'تكلفة الهند',
          savings: 'ما توفره'
        },
        treatments: [
          { name: 'جراحة القلب المفتوح (CABG)', saudi: '450,000 ريال', india: '70,000 ريال', save: '380,000 ريال (84%)' },
          { name: 'استبدال صمام القلب', saudi: '500,000 ريال', india: '80,000 ريال', save: '420,000 ريال (84%)' },
          { name: 'استبدال الركبة الكامل', saudi: '200,000 ريال', india: '35,000 ريال', save: '165,000 ريال (83%)' },
          { name: 'علاج أطفال الأنابيب (دورة واحدة)', saudi: '150,000 ريال', india: '25,000 ريال', save: '125,000 ريال (83%)' },
          { name: 'جراحة دمج الفقرات', saudi: '300,000 ريال', india: '50,000 ريال', save: '250,000 ريال (83%)' },
          { name: 'زراعة الكبد', saudi: '1,500,000 ريال', india: '250,000 ريال', save: '1,250,000 ريال (83%)' },
          { name: 'استبدال الورك', saudi: '220,000 ريال', india: '40,000 ريال', save: '180,000 ريال (82%)' },
          { name: 'علاج السرطان (العلاج الكيماوي)', saudi: '400,000 ريال', india: '75,000 ريال', save: '325,000 ريال (81%)' }
        ],
        note: '*الأسعار تشمل الإقامة في المستشفى، أتعاب الجراح، الأدوية، والرعاية بعد العملية. الرحلات الجوية والإقامة إضافية.'
      },
      flights: {
        title: 'رحلات مباشرة من السعودية إلى الهند',
        riyadh: {
          title: 'الرياض (RUH) إلى الهند',
          routes: [
            'مومباي (BOM) - 4.5 ساعات، 3-4 رحلات/يوم (الخطوط السعودية، الهندية)',
            'دلهي (DEL) - 4 ساعات، 3-4 رحلات/يوم',
            'حيدر أباد (HYD) - 4.5 ساعات، رحلتان/يوم'
          ]
        },
        jeddahDammam: {
          title: 'جدة والدمام إلى الهند',
          routes: [
            'جدة (JED) إلى مومباي - 4 ساعات، 3-4 رحلات/يوم',
            'جدة إلى دلهي - 4.5 ساعات، 2-3 رحلات/يوم',
            'الدمام (DMM) إلى مدن متعددة - 3-4 ساعات'
          ],
          cost: 'تكلفة الرحلة: 1,200-2,500 ريال ذهاباً وإياباً (درجة اقتصادية)'
        }
      },
      visa: {
        title: 'التأشيرة الطبية للمواطنين السعوديين',
        steps: [
          {
            title: 'التقديم عبر الإنترنت',
            description: 'زيارة: indianvisaonline.gov.in/evisa\nاختر "التأشيرة الطبية الإلكترونية"'
          },
          {
            title: 'المستندات المطلوبة',
            items: [
              'نسخة من جواز السفر (صالح لمدة 6 أشهر+)',
              'صورة حديثة بحجم جواز السفر',
              'خطاب طبي من المستشفى في الهند',
              'إثبات القدرة المالية (كشف حساب بنكي)'
            ]
          },
          {
            title: 'وقت المعالجة والتكلفة',
            description: 'المعالجة: 3-5 أيام عمل\nالتكلفة: 80 دولار أمريكي (300 ريال)\nالصلاحية: 60 يوماً، دخول ثلاثي'
          },
          {
            title: 'نحن نساعدك!',
            description: 'توفر شفاء الهند مساعدة كاملة للتأشيرة:',
            items: [
              'خطاب الدعوة من المستشفى',
              'قائمة المستندات',
              'دعم التقديم',
              'معالجة سريعة'
            ]
          }
        ]
      },
      stories: {
        title: 'قصص نجاح من المرضى السعوديين',
        testimonials: [
          {
            initials: 'MA',
            name: 'محمد أ.',
            location: 'الرياض، السعودية',
            quote: 'أجريت عملية قلب ثلاثية في فورتيس دلهي. وفرت 380,000 ريال! الدكتور شارما تدرب في كليفلاند كلينك. المستشفى بها مصلى وطعام حلال. الحمد لله، تعافيت تماماً.',
            treatment: 'جراحة القلب المفتوح • وفرت 380,000 ريال'
          },
          {
            initials: 'NK',
            name: 'نورة ك.',
            location: 'جدة، السعودية',
            quote: '5 سنوات من المحاولة للحمل في مستشفيات السعودية. نوفا IVF بنغالور - حملت في الدورة الأولى! المنسقة العربية جعلت كل شيء سهلاً. التكلفة 1/6 من السعودية. ولدت طفلة سليمة!',
            treatment: 'علاج أطفال الأنابيب • وفرت 125,000 ريال'
          },
          {
            initials: 'AH',
            name: 'عبدالله ح.',
            location: 'الدمام، السعودية',
            quote: 'استبدلت كلتا الركبتين في مانيبال بنغالور. لم أستطع المشي لسنوات. الآن ألعب مع أحفادي! التكلفة الإجمالية أقل من ركبة واحدة في السعودية. يستحق كل ريال!',
            treatment: 'استبدال الركبة الثنائي • وفرت 330,000 ريال'
          }
        ]
      },
      faq: {
        title: 'الأسئلة الشائعة',
        questions: [
          {
            q: 'كم من الوقت يستغرق العلاج الطبي في الهند؟',
            a: 'معظم الإجراءات تستغرق 7-21 يوماً بما في ذلك التعافي. جراحة القلب: 10-14 يوماً، استبدال الركبة: 10-15 يوماً، أطفال الأنابيب: 21-28 يوماً. يمكنك العودة إلى السعودية بعد موافقة الطبيب.'
          },
          {
            q: 'هل المستشفيات الهندية جيدة مثل مستشفيات السعودية؟',
            a: 'نعم! أبولو وفورتيس وماكس ومانيبال معتمدة من JCI. العديد من الأطباء تدربوا في أفضل الجامعات الأمريكية/البريطانية. معدلات النجاح تضاهي مستشفى الملك فيصل التخصصي ومدينة الملك فهد الطبية.'
          },
          {
            q: 'هل يتوفر طعام حلال ومرافق صلاة؟',
            a: 'نعم! جميع المستشفيات الرئيسية توفر خيارات طعام حلال. غرف صلاة (مصلى) متاحة في المستشفيات. اتجاه القبلة محدد في الغرف. العديد من الفنادق القريبة من المستشفيات تلبي احتياجات المرضى المسلمين أيضاً.'
          },
          {
            q: 'هل تقبل المستشفيات التأمين السعودي؟',
            a: 'بعض المستشفيات تقبل بوبا العربية والتعاونية إذا كان لديك تغطية دولية. معظم المرضى يدفعون مباشرة (أرخص بكثير) ويطالبون بالتعويض. نوفر فواتير تفصيلية لمطالبات التأمين.'
          },
          {
            q: 'هل يمكن لعائلتي مرافقتي؟',
            a: 'نعم! التأشيرة الطبية تسمح بـ 2 مرافقين للمرضى السعوديين. نرتب إقامة العائلة (150-400 ريال/ليلة). يتم توفير مترجم للتواصل العائلي مع الأطباء.'
          },
          {
            q: 'كيف أدفع ثمن العلاج؟',
            a: 'نقبل التحويلات البنكية الدولية (SWIFT) وبطاقات الائتمان (فيزا، ماستركارد) وتبادل الريال السعودي. خطة دفع متاحة للإجراءات باهظة الثمن. لا توجد تكاليف مخفية.'
          }
        ]
      },
      finalCta: {
        title: 'جاهز لتوفير 70-85% على علاجك الطبي؟',
        subtitle: 'انضم إلى آلاف المرضى السعوديين الذين غيروا صحتهم ووفروا مئات الآلاف من الريالات مع أفضل مستشفيات الهند',
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
              <Link href="/booking">
                <Button size="lg" variant="secondary">
                  {currentContent.hero.cta1}
                </Button>
              </Link>
              <Link href="/hospitals">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-emerald-600">
                  {currentContent.hero.cta2}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Saudi Patients Choose India */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {currentContent.whyChoose.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6">
              <DollarSign className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{currentContent.whyChoose.reasons[0].title}</h3>
              <p className="text-gray-600 whitespace-pre-line">
                {currentContent.whyChoose.reasons[0].description}
              </p>
            </Card>

            <Card className="p-6">
              <Shield className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{currentContent.whyChoose.reasons[1].title}</h3>
              <p className="text-gray-600">
                {currentContent.whyChoose.reasons[1].description}
              </p>
            </Card>

            <Card className="p-6">
              <Plane className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{currentContent.whyChoose.reasons[2].title}</h3>
              <p className="text-gray-600">
                {currentContent.whyChoose.reasons[2].description}
              </p>
            </Card>

            <Card className="p-6">
              <Clock className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{currentContent.whyChoose.reasons[3].title}</h3>
              <p className="text-gray-600">
                {currentContent.whyChoose.reasons[3].description}
              </p>
            </Card>

            <Card className="p-6">
              <Users className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{currentContent.whyChoose.reasons[4].title}</h3>
              <p className="text-gray-600">
                {currentContent.whyChoose.reasons[4].description}
              </p>
            </Card>

            <Card className="p-6">
              <Heart className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{currentContent.whyChoose.reasons[5].title}</h3>
              <p className="text-gray-600">
                {currentContent.whyChoose.reasons[5].description}
              </p>
            </Card>
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
                  <th className="px-6 py-4 text-right">{currentContent.costComparison.tableHeaders.saudiCost}</th>
                  <th className="px-6 py-4 text-right">{currentContent.costComparison.tableHeaders.indiaCost}</th>
                  <th className="px-6 py-4 text-right">{currentContent.costComparison.tableHeaders.savings}</th>
                </tr>
              </thead>
              <tbody>
                {currentContent.costComparison.treatments.map((treatment, index) => (
                  <tr key={index} className={index % 2 === 1 ? 'bg-gray-50' : 'border-b'}>
                    <td className="px-6 py-4 font-medium">{treatment.name}</td>
                    <td className="px-6 py-4 text-right">{treatment.saudi}</td>
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

      {/* Flights from Saudi Arabia to India */}
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
                  {currentContent.flights.riyadh.title}
                </h3>
                <ul className="space-y-2">
                  {currentContent.flights.riyadh.routes.map((route, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-emerald-600" />
                      <span>{route}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Plane className="w-6 h-6 text-emerald-600" />
                  {currentContent.flights.jeddahDammam.title}
                </h3>
                <ul className="space-y-2">
                  {currentContent.flights.jeddahDammam.routes.map((route, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-emerald-600" />
                      <span>{route}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  <strong>{locale === 'ar' ? 'تكلفة الرحلة:' : 'Flight Cost:'}</strong> {currentContent.flights.jeddahDammam.cost.split(': ')[1]}
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

      {/* Success Stories from Saudi Patients */}
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
            {currentContent.faq.questions.map((question, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  {question.q}
                </h3>
                <p className="text-gray-600">
                  {question.a}
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
            <Link href="/booking">
              <Button size="lg" variant="secondary">
                {currentContent.finalCta.cta1}
              </Button>
            </Link>
            <a href="https://wa.me/966501234567" target="_blank" rel="noopener noreferrer" className="inline-flex">
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

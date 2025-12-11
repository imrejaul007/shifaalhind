export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle } from 'lucide-react';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return generateSEOMetadata({
    title_en: 'Frequently Asked Questions - Medical Tourism to India | Shifa AlHind',
    title_ar: 'الأسئلة الشائعة - السياحة العلاجية إلى الهند | شفاء الهند',
    description_en: 'Get answers to common questions about medical tourism to India: costs, safety, hospitals, treatments, visa, travel arrangements, and more.',
    description_ar: 'احصل على إجابات للأسئلة الشائعة حول السياحة العلاجية إلى الهند: التكاليف، السلامة، المستشفيات، العلاجات، التأشيرة، ترتيبات السفر، والمزيد.',
    locale,
    path: '/faq',
  });
}

export default async function FAQPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // Bilingual content
  const content = {
    en: {
      hero: {
        title: 'Frequently Asked Questions',
        subtitle: 'Find answers to common questions about medical tourism to India'
      },
      faqs: [
        {
          category: 'General Questions',
          questions: [
            {
              q: 'Why should I choose India for medical treatment?',
              a: 'India offers world-class medical care at 60-80% lower costs compared to Western countries. With JCI-accredited hospitals, highly trained doctors, advanced technology, and no waiting times, India has become a leading destination for medical tourism.',
            },
            {
              q: 'Is medical tourism safe?',
              a: 'Yes, medical tourism to India is very safe when you work with reputable hospitals and coordinators like us. Our partner hospitals are internationally accredited (JCI/NABH) and follow strict quality and safety protocols.',
            },
            {
              q: 'How much can I save by getting treatment in India?',
              a: 'Patients typically save 60-80% on medical procedures compared to prices in the USA, UK, or Middle East countries. For example, a heart surgery that costs $100,000 in the US might cost $15,000-25,000 in India.',
            },
            {
              q: 'Do Indian doctors speak English?',
              a: 'Yes, all doctors and medical staff in our partner hospitals are fluent in English. Many have trained or worked internationally. We also provide Arabic interpreters if needed.',
            },
          ],
        },
        {
          category: 'Treatment & Hospitals',
          questions: [
            {
              q: 'What treatments are available?',
              a: 'We facilitate all major treatments including cardiac surgery, orthopedic procedures, cancer treatment, organ transplants, IVF, cosmetic surgery, dental work, and more. If you have a specific procedure in mind, contact us for details.',
            },
            {
              q: 'Are Indian hospitals internationally accredited?',
              a: 'Yes, all our partner hospitals hold international accreditations like JCI (Joint Commission International), ISO, and NABH. These are the same standards used to evaluate hospitals globally.',
            },
            {
              q: 'How do I know which hospital is right for me?',
              a: 'After your free consultation, our medical experts will recommend hospitals and doctors based on your specific condition, budget, and preferences. We only work with the best facilities.',
            },
            {
              q: 'Can I get a second opinion?',
              a: 'Absolutely! We encourage patients to seek second opinions. Our doctors can review your existing diagnosis and treatment plan and provide expert recommendations.',
            },
          ],
        },
        {
          category: 'Booking & Travel',
          questions: [
            {
              q: 'How do I start the process?',
              a: 'Simply request a free consultation through our website, phone, or WhatsApp. Share your medical reports, and our team will coordinate with hospitals to provide a treatment plan and cost estimate.',
            },
            {
              q: 'Do you help with visa arrangements?',
              a: 'Yes, we provide medical visa invitation letters and guidance for the Indian medical visa (M-Visa) application process. We can also assist with visa extensions if needed.',
            },
            {
              q: 'What about accommodation for my family?',
              a: 'We arrange comfortable accommodation near the hospital at special rates. Options include hotel rooms, serviced apartments, and hospital guest houses to fit different budgets.',
            },
            {
              q: 'How long will I need to stay in India?',
              a: 'It depends on your procedure. Minor treatments may require 5-7 days, while major surgeries might need 2-4 weeks. We provide an estimated timeline during consultation.',
            },
          ],
        },
        {
          category: 'Costs & Payments',
          questions: [
            {
              q: 'What is included in the treatment cost?',
              a: 'Treatment costs typically include hospital stay, surgery, medications, tests, and post-operative care. We provide a detailed breakdown with no hidden charges.',
            },
            {
              q: 'Are consultation and coordination services free?',
              a: 'Yes! Our consultation, treatment planning, and coordination services are completely free. You only pay the hospital directly for your treatment.',
            },
            {
              q: 'What payment methods do you accept?',
              a: 'Hospitals accept international wire transfers, credit cards, and cash payments. We help coordinate payments and provide transparent cost breakdowns.',
            },
            {
              q: 'What if I need to cancel or postpone?',
              a: 'We understand plans can change. Contact us as soon as possible, and we will work with the hospital to reschedule. Refund policies vary by hospital and are explained upfront.',
            },
          ],
        },
        {
          category: 'Safety & Quality',
          questions: [
            {
              q: 'What if something goes wrong?',
              a: 'Our partner hospitals have comprehensive emergency protocols and insurance coverage. Your dedicated coordinator will assist with any issues 24/7.',
            },
            {
              q: 'Will I receive follow-up care after I return home?',
              a: 'Yes, we coordinate with your local doctors for follow-up care. Indian doctors will also be available via telemedicine for consultations after you return.',
            },
            {
              q: 'How are medical records handled?',
              a: 'All medical records are kept confidential and secure. You will receive complete documentation of your treatment to share with your home doctors.',
            },
            {
              q: 'What languages are supported?',
              a: 'We provide services in English, Arabic, Hindi, and other languages. Professional medical interpreters are available during consultations and hospital stays.',
            },
          ],
        },
      ],
      stillHaveQuestions: {
        title: 'Still Have Questions?',
        subtitle: 'Our team is here to help. Get in touch with us for personalized answers.',
        cta1: 'Free Consultation',
        cta2: 'Contact Us'
      },
      quickContact: {
        call: {
          title: 'Call Us',
          subtitle: '24/7 Support',
          link: 'tel:+971501234567',
          text: '+971 50 123 4567'
        },
        whatsapp: {
          title: 'WhatsApp',
          subtitle: 'Instant Messaging',
          link: 'https://wa.me/971501234567',
          text: 'Chat on WhatsApp'
        },
        email: {
          title: 'Email',
          subtitle: '24-Hour Response',
          link: 'mailto:support@shifaalhind.com',
          text: 'support@shifaalhind.com'
        }
      }
    },
    ar: {
      hero: {
        title: 'الأسئلة الشائعة',
        subtitle: 'ابحث عن إجابات للأسئلة الشائعة حول السياحة العلاجية إلى الهند'
      },
      faqs: [
        {
          category: 'أسئلة عامة',
          questions: [
            {
              q: 'لماذا يجب علي اختيار الهند للعلاج الطبي؟',
              a: 'توفر الهند رعاية طبية عالمية المستوى بتكاليف أقل بنسبة 60-80٪ مقارنة بالدول الغربية. مع مستشفيات معتمدة من JCI، أطباء مدربين تدريباً عالياً، تكنولوجيا متقدمة، ولا أوقات انتظار، أصبحت الهند وجهة رائدة للسياحة العلاجية.',
            },
            {
              q: 'هل السياحة العلاجية آمنة؟',
              a: 'نعم، السياحة العلاجية إلى الهند آمنة جداً عندما تعمل مع مستشفيات ومنسقين موثوقين مثلنا. مستشفياتنا الشريكة معتمدة دولياً (JCI/NABH) وتتبع بروتوكولات صارمة للجودة والسلامة.',
            },
            {
              q: 'كم يمكنني التوفير بالحصول على العلاج في الهند؟',
              a: 'عادة ما يوفر المرضى 60-80٪ على الإجراءات الطبية مقارنة بالأسعار في الولايات المتحدة أو المملكة المتحدة أو دول الشرق الأوسط. على سبيل المثال، جراحة القلب التي تكلف 100,000 دولار في الولايات المتحدة قد تكلف 15,000-25,000 دولار في الهند.',
            },
            {
              q: 'هل يتحدث الأطباء الهنود الإنجليزية؟',
              a: 'نعم، جميع الأطباء والطاقم الطبي في مستشفياتنا الشريكة يتقنون اللغة الإنجليزية. كثير منهم تدربوا أو عملوا دولياً. نحن نوفر أيضاً مترجمين عرب إذا لزم الأمر.',
            },
          ],
        },
        {
          category: 'العلاج والمستشفيات',
          questions: [
            {
              q: 'ما هي العلاجات المتاحة؟',
              a: 'نحن نسهل جميع العلاجات الرئيسية بما في ذلك جراحة القلب، إجراءات العظام، علاج السرطان، زراعة الأعضاء، أطفال الأنابيب، الجراحة التجميلية، العمل السني، والمزيد. إذا كان لديك إجراء محدد في الاعتبار، اتصل بنا للحصول على التفاصيل.',
            },
            {
              q: 'هل المستشفيات الهندية معتمدة دولياً؟',
              a: 'نعم، جميع مستشفياتنا الشريكة تحمل اعتمادات دولية مثل JCI (اللجنة المشتركة الدولية)، ISO، و NABH. هذه هي نفس المعايير المستخدمة لتقييم المستشفيات عالمياً.',
            },
            {
              q: 'كيف أعرف أي مستشفى مناسب لي؟',
              a: 'بعد استشارتك المجانية، سيوصي خبراؤنا الطبيون بالمستشفيات والأطباء بناءً على حالتك المحددة وميزانيتك وتفضيلاتك. نحن نعمل فقط مع أفضل المرافق.',
            },
            {
              q: 'هل يمكنني الحصول على رأي ثان؟',
              a: 'بالتأكيد! نحن نشجع المرضى على طلب آراء ثانية. يمكن لأطبائنا مراجعة تشخيصك وخطة العلاج الحالية وتقديم توصيات الخبراء.',
            },
          ],
        },
        {
          category: 'الحجز والسفر',
          questions: [
            {
              q: 'كيف أبدأ العملية؟',
              a: 'ببساطة اطلب استشارة مجانية من خلال موقعنا الإلكتروني أو الهاتف أو الواتساب. شارك تقاريرك الطبية، وسيقوم فريقنا بالتنسيق مع المستشفيات لتوفير خطة علاج وتقدير التكلفة.',
            },
            {
              q: 'هل تساعدون في ترتيبات التأشيرة؟',
              a: 'نعم، نوفر رسائل دعوة للتأشيرة الطبية وإرشادات لعملية طلب التأشيرة الطبية الهندية (M-Visa). يمكننا أيضاً المساعدة في تمديد التأشيرة إذا لزم الأمر.',
            },
            {
              q: 'ماذا عن الإقامة لعائلتي؟',
              a: 'نحن نرتب إقامة مريحة بالقرب من المستشفى بأسعار خاصة. تشمل الخيارات غرف الفنادق والشقق المخدومة ودور ضيافة المستشفيات لتناسب ميزانيات مختلفة.',
            },
            {
              q: 'كم من الوقت سأحتاج للبقاء في الهند؟',
              a: 'يعتمد ذلك على إجراءك. قد تتطلب العلاجات البسيطة 5-7 أيام، بينما قد تحتاج الجراحات الكبرى 2-4 أسابيع. نحن نوفر جدولاً زمنياً تقديرياً أثناء الاستشارة.',
            },
          ],
        },
        {
          category: 'التكاليف والمدفوعات',
          questions: [
            {
              q: 'ما الذي يتضمنه تكلفة العلاج؟',
              a: 'عادة ما تشمل تكاليف العلاج الإقامة في المستشفى والجراحة والأدوية والفحوصات والرعاية بعد العملية. نحن نوفر تفصيلاً مفصلاً بدون رسوم خفية.',
            },
            {
              q: 'هل خدمات الاستشارة والتنسيق مجانية؟',
              a: 'نعم! خدمات الاستشارة والتخطيط للعلاج والتنسيق لدينا مجانية تماماً. أنت تدفع فقط للمستشفى مباشرة لعلاجك.',
            },
            {
              q: 'ما هي طرق الدفع التي تقبلونها؟',
              a: 'تقبل المستشفيات التحويلات البنكية الدولية وبطاقات الائتمان والمدفوعات النقدية. نحن نساعد في تنسيق المدفوعات ونوفر تفصيلاً شفافاً للتكاليف.',
            },
            {
              q: 'ماذا لو احتجت إلى الإلغاء أو التأجيل؟',
              a: 'نحن نتفهم أن الخطط يمكن أن تتغير. اتصل بنا في أقرب وقت ممكن، وسنعمل مع المستشفى لإعادة الجدولة. سياسات الاسترداد تختلف حسب المستشفى ويتم شرحها مقدماً.',
            },
          ],
        },
        {
          category: 'السلامة والجودة',
          questions: [
            {
              q: 'ماذا لو حدث خطأ ما؟',
              a: 'لدى مستشفياتنا الشريكة بروتوكولات طوارئ شاملة وتغطية تأمينية. سيساعدك منسقك المخصص في أي قضايا على مدار الساعة طوال أيام الأسبوع.',
            },
            {
              q: 'هل سأتلقى رعاية متابعة بعد عودتي إلى المنزل؟',
              a: 'نعم، نحن ننسق مع أطبائك المحليين لرعاية المتابعة. سيكون الأطباء الهنود أيضاً متاحين عبر الطب عن بعد للاستشارات بعد عودتك.',
            },
            {
              q: 'كيف يتم التعامل مع السجلات الطبية؟',
              a: 'يتم الاحتفاظ بجميع السجلات الطبية بشكل سري وآمن. ستتلقى وثائق كاملة لعلاجك لمشاركتها مع أطبائك المحليين.',
            },
            {
              q: 'ما هي اللغات المدعومة؟',
              a: 'نوفر الخدمات بالإنجليزية والعربية والهندية ولغات أخرى. المترجمون الطبيون المحترفون متاحون أثناء الاستشارات والإقامة في المستشفى.',
            },
          ],
        },
      ],
      stillHaveQuestions: {
        title: 'لا تزال لديك أسئلة؟',
        subtitle: 'فريقنا هنا للمساعدة. تواصل معنا للحصول على إجابات مخصصة.',
        cta1: 'استشارة مجانية',
        cta2: 'اتصل بنا'
      },
      quickContact: {
        call: {
          title: 'اتصل بنا',
          subtitle: 'دعم على مدار الساعة',
          link: 'tel:+971501234567',
          text: '+971 50 123 4567'
        },
        whatsapp: {
          title: 'واتساب',
          subtitle: 'رسائل فورية',
          link: 'https://wa.me/971501234567',
          text: 'دردش على واتساب'
        },
        email: {
          title: 'البريد الإلكتروني',
          subtitle: 'استجابة خلال 24 ساعة',
          link: 'mailto:support@shifaalhind.com',
          text: 'support@shifaalhind.com'
        }
      }
    }
  };

  const currentContent = content[locale as 'en' | 'ar'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <HelpCircle className="mx-auto mb-6 h-16 w-16" />
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            {currentContent.hero.title}
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-primary-100">
            {currentContent.hero.subtitle}
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="container mx-auto px-4 py-16">
        <div className="space-y-12">
          {currentContent.faqs.map((section, index) => (
            <div key={index}>
              <h2 className="mb-6 font-serif text-2xl font-bold text-gray-900">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.questions.map((item, qIndex) => (
                  <Card key={qIndex}>
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900">{item.q}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-gray-700">
                        {item.a}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900">
            {currentContent.stillHaveQuestions.title}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600">
            {currentContent.stillHaveQuestions.subtitle}
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/consultation">{currentContent.stillHaveQuestions.cta1}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">{currentContent.stillHaveQuestions.cta2}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="border-t bg-white px-4 py-12">
        <div className="container mx-auto">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">{currentContent.quickContact.call.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2 text-sm text-gray-600">{currentContent.quickContact.call.subtitle}</p>
                <a href={currentContent.quickContact.call.link} className="text-primary-600 hover:text-primary-700">
                  {currentContent.quickContact.call.text}
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">{currentContent.quickContact.whatsapp.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2 text-sm text-gray-600">{currentContent.quickContact.whatsapp.subtitle}</p>
                <a href={currentContent.quickContact.whatsapp.link} className="text-primary-600 hover:text-primary-700">
                  {currentContent.quickContact.whatsapp.text}
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">{currentContent.quickContact.email.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2 text-sm text-gray-600">{currentContent.quickContact.email.subtitle}</p>
                <a href={currentContent.quickContact.email.link} className="text-primary-600 hover:text-primary-700">
                  {currentContent.quickContact.email.text}
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

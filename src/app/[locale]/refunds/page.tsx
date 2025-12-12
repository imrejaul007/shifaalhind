export const dynamic = 'force-dynamic';

import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return generateSEOMetadata({
    title_en: 'Refund & Cancellation Policy - Shifa AlHind Medical Tourism',
    title_ar: 'سياسة الاسترداد والإلغاء - شفاء الهند للسياحة العلاجية',
    description_en: 'Understand our refund and cancellation policies for medical tourism services, including hospital treatments, travel arrangements, and coordination services.',
    description_ar: 'افهم سياسات الاسترداد والإلغاء لخدمات السياحة العلاجية، بما في ذلك العلاجات في المستشفيات وترتيبات السفر وخدمات التنسيق.',
    locale,
    path: '/refunds',
  });
}

export default async function RefundPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const content = {
    en: {
      title: 'Refund & Cancellation Policy',
      lastUpdated: 'Last Updated: October 20, 2024',
      sections: [
        {
          title: '1. Overview',
          content: 'This policy outlines the refund and cancellation procedures for medical tourism services facilitated by Shifa AlHind. As we coordinate services with multiple third-party providers, refund eligibility depends on the specific service and timing of cancellation.'
        },
        {
          title: '2. Our Coordination Services',
          intro: "Shifa AlHind's consultation and coordination services are FREE OF CHARGE. Therefore:",
          items: [
            'No refunds are applicable for our coordination services',
            'You may cancel at any time without financial penalty to Shifa AlHind',
            'We will assist you with cancellations with hospitals and other service providers'
          ]
        },
        {
          title: '3. Hospital and Medical Services',
          intro: 'Refunds for medical services are subject to individual hospital policies:',
          subsections: [
            {
              subtitle: 'Pre-Treatment Cancellation',
              items: [
                { label: 'More than 30 days before:', text: 'Usually full refund of deposits (minus processing fees)' },
                { label: '15-30 days before:', text: 'Typically 50-75% refund' },
                { label: '7-14 days before:', text: 'Typically 25-50% refund' },
                { label: 'Less than 7 days:', text: 'Usually no refund' }
              ]
            },
            {
              subtitle: 'Post-Treatment',
              items: [
                'No refunds once treatment has begun',
                'Partial refunds may be available for unused services',
                'Complications or dissatisfaction do not automatically qualify for refunds'
              ]
            }
          ]
        },
        {
          title: '4. Travel and Accommodation',
          subsections: [
            {
              subtitle: 'Flight Tickets',
              items: [
                'Subject to airline policies and ticket type',
                'Cancellation fees typically apply',
                'We recommend travel insurance for flexibility'
              ]
            },
            {
              subtitle: 'Hotel Bookings',
              items: [
                'Usually free cancellation 24-48 hours before check-in',
                'Some advance bookings may be non-refundable',
                'We will clearly communicate cancellation terms before booking'
              ]
            }
          ]
        },
        {
          title: '5. Medical Emergencies',
          intro: 'Special considerations for medical emergencies or complications:',
          items: [
            'If you cannot travel due to medical reasons, provide documentation',
            'Most hospitals will reschedule without penalty',
            'Some deposits may be transferable to future dates',
            'Travel insurance may cover cancellation costs'
          ]
        },
        {
          title: '6. Refund Process',
          intro: 'To request a refund:',
          orderedItems: [
            'Contact your case manager or email refunds@shifaalhind.com',
            'Provide booking details and reason for cancellation',
            'We will coordinate with hospitals and service providers',
            'Refunds are processed by the original payment method',
            'Processing time: 7-14 business days after approval'
          ]
        },
        {
          title: '7. Force Majeure',
          intro: 'In cases of force majeure (natural disasters, pandemics, war, etc.):',
          items: [
            'We will work with all parties to find solutions',
            'Rescheduling is prioritized over cancellation',
            'Refund terms may be more flexible',
            'Travel insurance is strongly recommended'
          ]
        },
        {
          title: '8. Dispute Resolution',
          intro: 'If you dispute a refund decision:',
          items: [
            'Contact our customer service team',
            'Provide supporting documentation',
            'We will review and respond within 5 business days',
            'Escalate to management if necessary'
          ]
        },
        {
          title: '9. Recommendations',
          highlight: {
            title: 'We Strongly Recommend:',
            items: [
              'Purchase comprehensive travel and medical insurance',
              'Book refundable or flexible travel options when possible',
              'Read and understand all terms before making payments',
              'Keep all booking confirmations and receipts',
              'Communicate cancellations as early as possible'
            ]
          }
        },
        {
          title: '10. Contact Us',
          intro: 'For refund requests or questions:',
          contact: {
            department: 'Shifa AlHind Refunds Department',
            email: 'refunds@shifaalhind.com',
            phone: '+971 50 123 4567',
            whatsapp: '+971 50 123 4567',
            hours: '24/7 Support'
          }
        }
      ]
    },
    ar: {
      title: 'سياسة الاسترداد والإلغاء',
      lastUpdated: 'آخر تحديث: 20 أكتوبر 2024',
      sections: [
        {
          title: '1. نظرة عامة',
          content: 'توضح هذه السياسة إجراءات الاسترداد والإلغاء لخدمات السياحة العلاجية التي تسهلها شفاء الهند. نظراً لأننا ننسق الخدمات مع مقدمي خدمات متعددين من الأطراف الثالثة، تعتمد أهلية الاسترداد على الخدمة المحددة وتوقيت الإلغاء.'
        },
        {
          title: '2. خدمات التنسيق لدينا',
          intro: 'خدمات الاستشارة والتنسيق لدى شفاء الهند مجانية تماماً. لذلك:',
          items: [
            'لا تنطبق استردادات على خدمات التنسيق لدينا',
            'يمكنك الإلغاء في أي وقت دون عقوبة مالية لشفاء الهند',
            'سنساعدك في الإلغاءات مع المستشفيات ومقدمي الخدمات الآخرين'
          ]
        },
        {
          title: '3. المستشفى والخدمات الطبية',
          intro: 'تخضع استردادات الخدمات الطبية لسياسات المستشفيات الفردية:',
          subsections: [
            {
              subtitle: 'إلغاء ما قبل العلاج',
              items: [
                { label: 'أكثر من 30 يوماً قبل:', text: 'عادة استرداد كامل للودائع (مطروحاً منها رسوم المعالجة)' },
                { label: '15-30 يوماً قبل:', text: 'عادة استرداد 50-75٪' },
                { label: '7-14 يوماً قبل:', text: 'عادة استرداد 25-50٪' },
                { label: 'أقل من 7 أيام:', text: 'عادة لا استرداد' }
              ]
            },
            {
              subtitle: 'ما بعد العلاج',
              items: [
                'لا استرداد بمجرد بدء العلاج',
                'قد تتوفر استردادات جزئية للخدمات غير المستخدمة',
                'المضاعفات أو عدم الرضا لا تؤهل تلقائياً للاسترداد'
              ]
            }
          ]
        },
        {
          title: '4. السفر والإقامة',
          subsections: [
            {
              subtitle: 'تذاكر الطيران',
              items: [
                'تخضع لسياسات شركات الطيران ونوع التذكرة',
                'رسوم الإلغاء تنطبق عادة',
                'نوصي بتأمين السفر للمرونة'
              ]
            },
            {
              subtitle: 'حجوزات الفنادق',
              items: [
                'عادة إلغاء مجاني قبل 24-48 ساعة من تسجيل الوصول',
                'بعض الحجوزات المسبقة قد تكون غير قابلة للاسترداد',
                'سنوضح بوضوح شروط الإلغاء قبل الحجز'
              ]
            }
          ]
        },
        {
          title: '5. حالات الطوارئ الطبية',
          intro: 'اعتبارات خاصة لحالات الطوارئ الطبية أو المضاعفات:',
          items: [
            'إذا لم تتمكن من السفر لأسباب طبية، قدم الوثائق',
            'معظم المستشفيات ستعيد الجدولة دون عقوبة',
            'بعض الودائع قد تكون قابلة للتحويل إلى تواريخ مستقبلية',
            'تأمين السفر قد يغطي تكاليف الإلغاء'
          ]
        },
        {
          title: '6. عملية الاسترداد',
          intro: 'لطلب استرداد:',
          orderedItems: [
            'اتصل بمدير حالتك أو أرسل بريداً إلكترونياً إلى refunds@shifaalhind.com',
            'قدم تفاصيل الحجز وسبب الإلغاء',
            'سنقوم بالتنسيق مع المستشفيات ومقدمي الخدمات',
            'تتم معالجة الاستردادات بطريقة الدفع الأصلية',
            'وقت المعالجة: 7-14 يوم عمل بعد الموافقة'
          ]
        },
        {
          title: '7. القوة القاهرة',
          intro: 'في حالات القوة القاهرة (الكوارث الطبيعية، الأوبئة، الحروب، إلخ):',
          items: [
            'سنعمل مع جميع الأطراف لإيجاد حلول',
            'إعادة الجدولة لها الأولوية على الإلغاء',
            'قد تكون شروط الاسترداد أكثر مرونة',
            'يوصى بشدة بتأمين السفر'
          ]
        },
        {
          title: '8. حل النزاعات',
          intro: 'إذا كنت تعترض على قرار الاسترداد:',
          items: [
            'اتصل بفريق خدمة العملاء لدينا',
            'قدم الوثائق الداعمة',
            'سنراجع ونرد خلال 5 أيام عمل',
            'تصعيد إلى الإدارة إذا لزم الأمر'
          ]
        },
        {
          title: '9. التوصيات',
          highlight: {
            title: 'نوصي بشدة:',
            items: [
              'شراء تأمين سفر وطبي شامل',
              'حجز خيارات سفر قابلة للاسترداد أو مرنة عندما يكون ذلك ممكناً',
              'قراءة وفهم جميع الشروط قبل إجراء المدفوعات',
              'الاحتفاظ بجميع تأكيدات الحجز والإيصالات',
              'الإبلاغ عن الإلغاءات في أقرب وقت ممكن'
            ]
          }
        },
        {
          title: '10. اتصل بنا',
          intro: 'لطلبات الاسترداد أو الأسئلة:',
          contact: {
            department: 'قسم استردادات شفاء الهند',
            email: 'refunds@shifaalhind.com',
            phone: '+971 50 123 4567',
            whatsapp: '+971 50 123 4567',
            hours: 'دعم على مدار الساعة طوال أيام الأسبوع'
          }
        }
      ]
    }
  };

  const currentContent = content[locale as 'en' | 'ar'];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-16">
      <div className="container mx-auto max-w-4xl">
        <div className="rounded-lg bg-white p-8 shadow-sm md:p-12">
          <h1 className="mb-8 font-serif text-4xl font-bold text-gray-900">{currentContent.title}</h1>
          <p className="mb-8 text-sm text-gray-600">{currentContent.lastUpdated}</p>

          <div className="prose prose-gray max-w-none">
            {currentContent.sections.map((section, index) => (
              <section key={index} className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">{section.title}</h2>

                {section.content && (
                  <p className="text-gray-700">{section.content}</p>
                )}

                {section.intro && (
                  <p className="mb-4 text-gray-700">{section.intro}</p>
                )}

                {section.items && (
                  <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.orderedItems && (
                  <ol className="mb-4 list-decimal space-y-2 pl-6 text-gray-700">
                    {section.orderedItems.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ol>
                )}

                {section.subsections && section.subsections.map((subsection, subIndex) => (
                  <div key={subIndex} className="mb-4">
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">{subsection.subtitle}</h3>
                    <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                      {subsection.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          {typeof item === 'string' ? (
                            item
                          ) : (
                            <>
                              <strong>{item.label}</strong> {item.text}
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {section.highlight && (
                  <div className="rounded-lg bg-blue-50 p-6">
                    <p className="mb-2 font-semibold text-blue-900">{section.highlight.title}</p>
                    <ul className="list-disc space-y-2 pl-6 text-blue-800">
                      {section.highlight.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.contact && (
                  <div className="rounded-lg bg-gray-50 p-6">
                    <p className="font-semibold text-gray-900">{section.contact.department}</p>
                    <p className="text-gray-700">{locale === 'ar' ? 'البريد الإلكتروني:' : 'Email:'} {section.contact.email}</p>
                    <p className="text-gray-700">{locale === 'ar' ? 'الهاتف:' : 'Phone:'} {section.contact.phone}</p>
                    <p className="text-gray-700">{locale === 'ar' ? 'واتساب:' : 'WhatsApp:'} {section.contact.whatsapp}</p>
                    <p className="text-gray-700">{locale === 'ar' ? 'ساعات العمل:' : 'Business Hours:'} {section.contact.hours}</p>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const dynamic = 'force-dynamic';

import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return generateSEOMetadata({
    title_en: 'Terms of Service - Shifa AlHind Medical Tourism',
    title_ar: 'شروط الخدمة - شفاء الهند للسياحة العلاجية',
    description_en: 'Read our terms of service to understand your rights and responsibilities when using our medical tourism coordination services.',
    description_ar: 'اقرأ شروط الخدمة لفهم حقوقك ومسؤولياتك عند استخدام خدمات تنسيق السياحة العلاجية لدينا.',
    locale,
    path: '/terms',
  });
}

export default async function TermsOfServicePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const content = {
    en: {
      title: 'Terms of Service',
      lastUpdated: 'Last Updated: October 20, 2024',
      sections: [
        {
          title: '1. Acceptance of Terms',
          content: 'By accessing and using Shifa AlHind services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.'
        },
        {
          title: '2. Services Provided',
          intro: 'Shifa AlHind is a medical tourism facilitator that provides:',
          items: [
            'Medical consultation coordination',
            'Hospital and doctor recommendations',
            'Travel and accommodation assistance',
            'Treatment planning and cost estimation',
            'Ongoing patient support and coordination'
          ],
          note: 'Important: We are NOT a medical provider. All medical services are provided by independent, licensed healthcare facilities and professionals in India.'
        },
        {
          title: '3. User Responsibilities',
          intro: 'As a user of our services, you agree to:',
          items: [
            'Provide accurate and complete medical information',
            'Obtain necessary travel documents and medical visas',
            'Follow medical advice from qualified healthcare providers',
            'Make timely payments for services as agreed',
            'Respect the policies of hospitals and healthcare facilities',
            'Maintain travel and medical insurance as appropriate'
          ]
        },
        {
          title: '4. Medical Disclaimer',
          intro: 'IMPORTANT MEDICAL DISCLAIMER:',
          items: [
            'We do not provide medical advice, diagnosis, or treatment',
            'All medical decisions should be made in consultation with qualified healthcare professionals',
            'Treatment outcomes cannot be guaranteed',
            'Medical procedures carry inherent risks that should be discussed with your doctor',
            'We are not liable for medical outcomes or complications'
          ]
        },
        {
          title: '5. Fees and Payments',
          intro: 'Our coordination services are FREE. You pay hospitals directly for:',
          items: [
            'Medical consultations and treatments',
            'Hospital stays and procedures',
            'Medications and medical supplies',
            'Diagnostic tests and imaging'
          ],
          optionalTitle: 'Optional paid services (if requested):',
          optionalItems: [
            'Travel and flight bookings',
            'Hotel accommodations',
            'Visa assistance services',
            'Interpreter services'
          ]
        },
        {
          title: '6. Cancellation and Refunds',
          content: 'Cancellation and refund policies are determined by the individual hospitals and service providers. Please refer to our Refund Policy page for detailed information.'
        },
        {
          title: '7. Limitation of Liability',
          intro: 'To the maximum extent permitted by law:',
          items: [
            'We are not liable for medical outcomes or complications',
            'We are not responsible for delays or cancellations by third parties',
            'We are not liable for losses due to travel disruptions',
            'Our liability is limited to the fees paid for our coordination services'
          ]
        },
        {
          title: '8. Intellectual Property',
          content: 'All content on our website, including text, graphics, logos, and software, is owned by or licensed to Shifa AlHind and protected by copyright and trademark laws.'
        },
        {
          title: '9. Privacy',
          content: 'Your use of our services is also governed by our Privacy Policy. Please review it to understand how we collect and use your information.'
        },
        {
          title: '10. Governing Law',
          content: 'These Terms of Service are governed by the laws of the United Arab Emirates. Any disputes will be resolved in the courts of Dubai, UAE.'
        },
        {
          title: '11. Changes to Terms',
          content: 'We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.'
        },
        {
          title: '12. Contact Information',
          intro: 'For questions about these Terms of Service:',
          contact: {
            company: 'Shifa AlHind',
            email: 'legal@shifaalhind.com',
            phone: '+971 50 123 4567',
            address: 'Dubai, UAE'
          }
        }
      ]
    },
    ar: {
      title: 'شروط الخدمة',
      lastUpdated: 'آخر تحديث: 20 أكتوبر 2024',
      sections: [
        {
          title: '1. قبول الشروط',
          content: 'من خلال الوصول إلى واستخدام خدمات شفاء الهند، فإنك تقبل وتوافق على الالتزام بشروط الخدمة هذه. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام خدماتنا.'
        },
        {
          title: '2. الخدمات المقدمة',
          intro: 'شفاء الهند هي جهة تسهيل للسياحة العلاجية تقدم:',
          items: [
            'تنسيق الاستشارات الطبية',
            'توصيات المستشفيات والأطباء',
            'المساعدة في السفر والإقامة',
            'تخطيط العلاج وتقدير التكلفة',
            'الدعم والتنسيق المستمر للمرضى'
          ],
          note: 'مهم: نحن لسنا مقدم خدمات طبية. يتم تقديم جميع الخدمات الطبية من قبل مرافق ومهنيي الرعاية الصحية المستقلين والمرخصين في الهند.'
        },
        {
          title: '3. مسؤوليات المستخدم',
          intro: 'كمستخدم لخدماتنا، فإنك توافق على:',
          items: [
            'تقديم معلومات طبية دقيقة وكاملة',
            'الحصول على وثائق السفر اللازمة والتأشيرات الطبية',
            'اتباع النصائح الطبية من مقدمي الرعاية الصحية المؤهلين',
            'إجراء المدفوعات في الوقت المحدد للخدمات المتفق عليها',
            'احترام سياسات المستشفيات ومرافق الرعاية الصحية',
            'الحفاظ على تأمين السفر والتأمين الطبي حسب الاقتضاء'
          ]
        },
        {
          title: '4. إخلاء المسؤولية الطبية',
          intro: 'إخلاء مسؤولية طبية مهم:',
          items: [
            'نحن لا نقدم المشورة الطبية أو التشخيص أو العلاج',
            'يجب اتخاذ جميع القرارات الطبية بالتشاور مع مهنيي الرعاية الصحية المؤهلين',
            'لا يمكن ضمان نتائج العلاج',
            'تحمل الإجراءات الطبية مخاطر متأصلة يجب مناقشتها مع طبيبك',
            'نحن غير مسؤولين عن النتائج الطبية أو المضاعفات'
          ]
        },
        {
          title: '5. الرسوم والمدفوعات',
          intro: 'خدمات التنسيق لدينا مجانية. تدفع للمستشفيات مباشرة مقابل:',
          items: [
            'الاستشارات والعلاجات الطبية',
            'الإقامة في المستشفى والإجراءات',
            'الأدوية واللوازم الطبية',
            'الفحوصات التشخيصية والتصوير'
          ],
          optionalTitle: 'الخدمات المدفوعة الاختيارية (إذا طُلب ذلك):',
          optionalItems: [
            'حجوزات السفر والطيران',
            'أماكن الإقامة في الفنادق',
            'خدمات المساعدة في التأشيرة',
            'خدمات الترجمة الفورية'
          ]
        },
        {
          title: '6. الإلغاء والاسترداد',
          content: 'يتم تحديد سياسات الإلغاء والاسترداد من قبل المستشفيات ومقدمي الخدمات الفرديين. يرجى الرجوع إلى صفحة سياسة الاسترداد للحصول على معلومات مفصلة.'
        },
        {
          title: '7. حدود المسؤولية',
          intro: 'إلى أقصى حد يسمح به القانون:',
          items: [
            'نحن غير مسؤولين عن النتائج الطبية أو المضاعفات',
            'نحن غير مسؤولين عن التأخيرات أو الإلغاءات من قبل أطراف ثالثة',
            'نحن غير مسؤولين عن الخسائر بسبب اضطرابات السفر',
            'تقتصر مسؤوليتنا على الرسوم المدفوعة لخدمات التنسيق لدينا'
          ]
        },
        {
          title: '8. الملكية الفكرية',
          content: 'جميع المحتويات الموجودة على موقعنا الإلكتروني، بما في ذلك النصوص والرسومات والشعارات والبرامج، مملوكة أو مرخصة لشفاء الهند ومحمية بقوانين حقوق النشر والعلامات التجارية.'
        },
        {
          title: '9. الخصوصية',
          content: 'يخضع استخدامك لخدماتنا أيضاً لسياسة الخصوصية الخاصة بنا. يرجى مراجعتها لفهم كيفية جمع واستخدام معلوماتك.'
        },
        {
          title: '10. القانون الحاكم',
          content: 'تخضع شروط الخدمة هذه لقوانين الإمارات العربية المتحدة. سيتم حل أي نزاعات في محاكم دبي، الإمارات العربية المتحدة.'
        },
        {
          title: '11. التغييرات على الشروط',
          content: 'نحتفظ بالحق في تعديل هذه الشروط في أي وقت. يشكل الاستمرار في استخدام خدماتنا بعد التغييرات قبولاً للشروط المعدلة.'
        },
        {
          title: '12. معلومات الاتصال',
          intro: 'للأسئلة حول شروط الخدمة هذه:',
          contact: {
            company: 'شفاء الهند',
            email: 'legal@shifaalhind.com',
            phone: '+971 50 123 4567',
            address: 'دبي، الإمارات العربية المتحدة'
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

                {section.note && (
                  <p className="text-gray-700">
                    <strong>{locale === 'ar' ? 'مهم:' : 'Important:'}</strong> {section.note.replace(/^Important:\s*/i, '')}
                  </p>
                )}

                {section.optionalTitle && (
                  <>
                    <p className="text-gray-700">{section.optionalTitle}</p>
                    <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                      {section.optionalItems?.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}

                {section.contact && (
                  <div className="rounded-lg bg-gray-50 p-6">
                    <p className="font-semibold text-gray-900">{section.contact.company}</p>
                    <p className="text-gray-700">{locale === 'ar' ? 'البريد الإلكتروني:' : 'Email:'} {section.contact.email}</p>
                    <p className="text-gray-700">{locale === 'ar' ? 'الهاتف:' : 'Phone:'} {section.contact.phone}</p>
                    <p className="text-gray-700">{locale === 'ar' ? 'العنوان:' : 'Address:'} {section.contact.address}</p>
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

export const dynamic = 'force-dynamic';

import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return generateSEOMetadata({
    title_en: 'Privacy Policy - Shifa AlHind Medical Tourism',
    title_ar: 'سياسة الخصوصية - شفاء الهند للسياحة العلاجية',
    description_en: 'Our privacy policy explains how we collect, use, and protect your personal and medical information when using our medical tourism services.',
    description_ar: 'تشرح سياسة الخصوصية لدينا كيفية جمع واستخدام وحماية معلوماتك الشخصية والطبية عند استخدام خدمات السياحة العلاجية لدينا.',
    locale,
    path: '/privacy',
  });
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const content = {
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated: October 20, 2024',
      sections: [
        {
          title: '1. Introduction',
          content: 'Shifa AlHind ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our medical tourism services.'
        },
        {
          title: '2. Information We Collect',
          subsections: [
            {
              subtitle: 'Personal Information',
              items: [
                'Name, email address, phone number',
                'Date of birth, nationality, passport information',
                'Medical history and health information',
                'Travel preferences and requirements'
              ]
            },
            {
              subtitle: 'Automatically Collected Information',
              items: [
                'IP address, browser type, device information',
                'Pages visited, time spent on pages',
                'Referring website, exit pages',
                'Cookies and similar tracking technologies'
              ]
            }
          ]
        },
        {
          title: '3. How We Use Your Information',
          items: [
            'To provide medical consultation and treatment coordination services',
            'To communicate with you about your medical journey',
            'To arrange travel, accommodation, and hospital appointments',
            'To share your medical information with partner hospitals and doctors (with your consent)',
            'To improve our services and user experience',
            'To send promotional communications (with your opt-in consent)',
            'To comply with legal obligations and prevent fraud'
          ]
        },
        {
          title: '4. Information Sharing',
          intro: 'We may share your information with:',
          items: [
            { label: 'Healthcare Providers:', text: 'Hospitals, doctors, and medical facilities in India' },
            { label: 'Service Providers:', text: 'Travel agencies, hotels, interpreters, and coordinators' },
            { label: 'Legal Authorities:', text: 'When required by law or to protect rights and safety' },
            { label: 'Business Partners:', text: 'With your explicit consent for specific purposes' }
          ],
          note: 'We do NOT sell your personal information to third parties.'
        },
        {
          title: '5. Data Security',
          intro: 'We implement appropriate technical and organizational measures to protect your personal information:',
          items: [
            'SSL encryption for data transmission',
            'Secure servers with restricted access',
            'Regular security audits and updates',
            'Employee confidentiality agreements',
            'Compliance with HIPAA and GDPR standards where applicable'
          ]
        },
        {
          title: '6. Your Rights',
          intro: 'You have the right to:',
          items: [
            'Access your personal information',
            'Correct inaccurate or incomplete data',
            'Request deletion of your data',
            'Object to processing of your information',
            'Withdraw consent at any time',
            'Receive a copy of your data in portable format'
          ],
          contact: 'To exercise these rights, contact us at privacy@shifaalhind.com'
        },
        {
          title: '7. Cookies',
          content: 'We use cookies and similar technologies to enhance your experience. You can control cookie preferences through your browser settings.'
        },
        {
          title: '8. International Data Transfers',
          content: 'Your information may be transferred to and processed in India or other countries where our service providers operate. We ensure appropriate safeguards are in place for such transfers.'
        },
        {
          title: "9. Children's Privacy",
          content: 'Our services are not directed to individuals under 18. We do not knowingly collect information from children without parental consent.'
        },
        {
          title: '10. Changes to This Policy',
          content: 'We may update this Privacy Policy from time to time. We will notify you of significant changes via email or website notice.'
        },
        {
          title: '11. Contact Us',
          intro: 'For questions about this Privacy Policy or to exercise your rights:',
          contact: {
            company: 'Shifa AlHind',
            email: 'privacy@shifaalhind.com',
            phone: '+971 50 123 4567',
            address: 'Dubai, UAE'
          }
        }
      ]
    },
    ar: {
      title: 'سياسة الخصوصية',
      lastUpdated: 'آخر تحديث: 20 أكتوبر 2024',
      sections: [
        {
          title: '1. المقدمة',
          content: 'شفاء الهند ("نحن" أو "لنا") ملتزمون بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع واستخدام والكشف عن معلوماتك وحمايتها عند زيارة موقعنا الإلكتروني أو استخدام خدمات السياحة العلاجية لدينا.'
        },
        {
          title: '2. المعلومات التي نجمعها',
          subsections: [
            {
              subtitle: 'المعلومات الشخصية',
              items: [
                'الاسم، عنوان البريد الإلكتروني، رقم الهاتف',
                'تاريخ الميلاد، الجنسية، معلومات جواز السفر',
                'التاريخ الطبي والمعلومات الصحية',
                'تفضيلات ومتطلبات السفر'
              ]
            },
            {
              subtitle: 'المعلومات المجمعة تلقائياً',
              items: [
                'عنوان IP، نوع المتصفح، معلومات الجهاز',
                'الصفحات التي تمت زيارتها، الوقت المستغرق في الصفحات',
                'موقع الإحالة، صفحات الخروج',
                'ملفات تعريف الارتباط وتقنيات التتبع المماثلة'
              ]
            }
          ]
        },
        {
          title: '3. كيف نستخدم معلوماتك',
          items: [
            'لتقديم خدمات الاستشارة الطبية وتنسيق العلاج',
            'للتواصل معك بشأن رحلتك الطبية',
            'لترتيب السفر والإقامة ومواعيد المستشفى',
            'لمشاركة معلوماتك الطبية مع المستشفيات والأطباء الشركاء (بموافقتك)',
            'لتحسين خدماتنا وتجربة المستخدم',
            'لإرسال اتصالات ترويجية (بموافقتك)',
            'للامتثال للالتزامات القانونية ومنع الاحتيال'
          ]
        },
        {
          title: '4. مشاركة المعلومات',
          intro: 'قد نشارك معلوماتك مع:',
          items: [
            { label: 'مقدمو الرعاية الصحية:', text: 'المستشفيات والأطباء والمرافق الطبية في الهند' },
            { label: 'مقدمو الخدمات:', text: 'وكالات السفر والفنادق والمترجمون والمنسقون' },
            { label: 'السلطات القانونية:', text: 'عندما يقتضي القانون ذلك أو لحماية الحقوق والسلامة' },
            { label: 'شركاء الأعمال:', text: 'بموافقتك الصريحة لأغراض محددة' }
          ],
          note: 'نحن لا نبيع معلوماتك الشخصية لأطراف ثالثة.'
        },
        {
          title: '5. أمن البيانات',
          intro: 'نطبق تدابير تقنية وتنظيمية مناسبة لحماية معلوماتك الشخصية:',
          items: [
            'تشفير SSL لنقل البيانات',
            'خوادم آمنة مع وصول محدود',
            'عمليات تدقيق وتحديثات أمنية منتظمة',
            'اتفاقيات سرية الموظفين',
            'الامتثال لمعايير HIPAA وGDPR حيثما ينطبق'
          ]
        },
        {
          title: '6. حقوقك',
          intro: 'لديك الحق في:',
          items: [
            'الوصول إلى معلوماتك الشخصية',
            'تصحيح البيانات غير الدقيقة أو غير الكاملة',
            'طلب حذف بياناتك',
            'الاعتراض على معالجة معلوماتك',
            'سحب الموافقة في أي وقت',
            'الحصول على نسخة من بياناتك بتنسيق قابل للنقل'
          ],
          contact: 'لممارسة هذه الحقوق، اتصل بنا على privacy@shifaalhind.com'
        },
        {
          title: '7. ملفات تعريف الارتباط',
          content: 'نستخدم ملفات تعريف الارتباط وتقنيات مشابهة لتحسين تجربتك. يمكنك التحكم في تفضيلات ملفات تعريف الارتباط من خلال إعدادات متصفحك.'
        },
        {
          title: '8. نقل البيانات الدولي',
          content: 'قد يتم نقل معلوماتك ومعالجتها في الهند أو دول أخرى حيث يعمل مقدمو الخدمات لدينا. نضمن وجود ضمانات مناسبة لمثل هذه التحويلات.'
        },
        {
          title: '9. خصوصية الأطفال',
          content: 'خدماتنا غير موجهة للأفراد الذين تقل أعمارهم عن 18 عاماً. نحن لا نجمع معلومات من الأطفال عن علم دون موافقة الوالدين.'
        },
        {
          title: '10. التغييرات على هذه السياسة',
          content: 'قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بالتغييرات المهمة عبر البريد الإلكتروني أو إشعار على الموقع.'
        },
        {
          title: '11. اتصل بنا',
          intro: 'للأسئلة حول سياسة الخصوصية هذه أو لممارسة حقوقك:',
          contact: {
            company: 'شفاء الهند',
            email: 'privacy@shifaalhind.com',
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

                {section.subsections && section.subsections.map((subsection, subIndex) => (
                  <div key={subIndex} className="mb-4">
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">{subsection.subtitle}</h3>
                    <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                      {subsection.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                {section.intro && (
                  <p className="mb-4 text-gray-700">{section.intro}</p>
                )}

                {section.items && (
                  <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
                    {section.items.map((item, itemIndex) => (
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
                )}

                {section.note && (
                  <p className="text-gray-700">{section.note}</p>
                )}

                {section.contact && typeof section.contact === 'string' && (
                  <p className="text-gray-700">{section.contact}</p>
                )}

                {section.contact && typeof section.contact === 'object' && (
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

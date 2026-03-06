export const dynamic = 'force-dynamic';

import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generateSEOMetadata({
    title_en: 'Medical Disclaimer - Shifa AlHind',
    title_ar: 'إخلاء المسؤولية الطبية - شفاء الهند',
    description_en: 'Medical disclaimer for Shifa AlHind medical tourism services. Important information about medical advice, treatment outcomes, and liability.',
    description_ar: 'إخلاء المسؤولية الطبية لخدمات شفاء الهند للسياحة العلاجية. معلومات مهمة حول المشورة الطبية ونتائج العلاج والمسؤولية.',
    locale,
    path: '/disclaimer',
  });
}

export default async function DisclaimerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const content = {
    en: {
      title: 'Medical Disclaimer',
      lastUpdated: 'Last Updated: January 15, 2025',
      sections: [
        {
          title: '1. General Information',
          content: 'The information provided on the Shifa AlHind website is for general informational purposes only. It is not intended as, and should not be considered, a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.'
        },
        {
          title: '2. No Doctor-Patient Relationship',
          content: 'Use of this website does not create a doctor-patient relationship between you and Shifa AlHind or any of our partner hospitals, doctors, or healthcare providers. The information on this site is provided "as is" without any warranty of any kind.'
        },
        {
          title: '3. Treatment Outcomes',
          content: 'All medical treatments carry inherent risks. Treatment outcomes, success rates, and recovery times mentioned on this website are based on general statistics and may vary significantly based on individual patient conditions, medical history, and other factors. Past results do not guarantee future outcomes.'
        },
        {
          title: '4. Cost Estimates',
          content: 'Treatment costs displayed on our website are estimates only and may vary based on the specific medical condition, hospital chosen, doctor\'s fees, length of hospital stay, and other factors. Final costs will be confirmed after medical evaluation by the treating physician.'
        },
        {
          title: '5. Hospital & Doctor Information',
          content: 'While we make every effort to ensure the accuracy of hospital and doctor information on our website, credentials, accreditations, and affiliations may change. We recommend verifying current information directly with the healthcare provider before making any decisions.'
        },
        {
          title: '6. Third-Party Content',
          content: 'Our website may contain links to third-party websites or references to third-party services. We are not responsible for the content, accuracy, or practices of these external sites. Inclusion of any link does not imply endorsement by Shifa AlHind.'
        },
        {
          title: '7. Limitation of Liability',
          content: 'Shifa AlHind acts as a facilitator connecting patients with healthcare providers in India. We are not a healthcare provider and do not practice medicine. We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our services or reliance on information provided on this website.'
        },
        {
          title: '8. Emergency Situations',
          content: 'If you are experiencing a medical emergency, please call your local emergency services immediately. Do not rely on this website for emergency medical guidance.'
        },
        {
          title: '9. Changes to This Disclaimer',
          content: 'We reserve the right to update this disclaimer at any time. Changes will be posted on this page with an updated revision date.'
        },
        {
          title: '10. Contact Us',
          content: 'If you have questions about this disclaimer, please contact us at support@shifaalhind.com or call +971 50 123 4567.'
        }
      ]
    },
    ar: {
      title: 'إخلاء المسؤولية الطبية',
      lastUpdated: 'آخر تحديث: 15 يناير 2025',
      sections: [
        {
          title: '1. معلومات عامة',
          content: 'المعلومات المقدمة على موقع شفاء الهند هي لأغراض إعلامية عامة فقط. لا يُقصد بها أن تكون بديلاً عن المشورة الطبية المهنية أو التشخيص أو العلاج. استشر طبيبك أو مقدم الرعاية الصحية المؤهل دائماً بخصوص أي حالة طبية.'
        },
        {
          title: '2. لا توجد علاقة طبيب-مريض',
          content: 'استخدام هذا الموقع لا ينشئ علاقة طبيب-مريض بينك وبين شفاء الهند أو أي من مستشفياتنا الشريكة أو أطبائنا أو مقدمي الرعاية الصحية. المعلومات على هذا الموقع مقدمة "كما هي" بدون أي ضمان من أي نوع.'
        },
        {
          title: '3. نتائج العلاج',
          content: 'جميع العلاجات الطبية تحمل مخاطر كامنة. نتائج العلاج ومعدلات النجاح وأوقات التعافي المذكورة على هذا الموقع مبنية على إحصائيات عامة وقد تختلف بشكل كبير بناءً على حالة المريض الفردية والتاريخ الطبي وعوامل أخرى.'
        },
        {
          title: '4. تقديرات التكلفة',
          content: 'تكاليف العلاج المعروضة على موقعنا هي تقديرات فقط وقد تختلف بناءً على الحالة الطبية المحددة والمستشفى المختار ورسوم الطبيب ومدة الإقامة في المستشفى وعوامل أخرى. سيتم تأكيد التكاليف النهائية بعد التقييم الطبي من قبل الطبيب المعالج.'
        },
        {
          title: '5. معلومات المستشفيات والأطباء',
          content: 'بينما نبذل قصارى جهدنا لضمان دقة معلومات المستشفيات والأطباء على موقعنا، قد تتغير أوراق الاعتماد والاعتمادات والانتماءات. نوصي بالتحقق من المعلومات الحالية مباشرة مع مقدم الرعاية الصحية قبل اتخاذ أي قرارات.'
        },
        {
          title: '6. محتوى الطرف الثالث',
          content: 'قد يحتوي موقعنا على روابط لمواقع طرف ثالث أو إشارات لخدمات طرف ثالث. نحن غير مسؤولين عن محتوى أو دقة أو ممارسات هذه المواقع الخارجية. لا يعني تضمين أي رابط تأييداً من شفاء الهند.'
        },
        {
          title: '7. تحديد المسؤولية',
          content: 'شفاء الهند يعمل كميسّر يربط المرضى بمقدمي الرعاية الصحية في الهند. نحن لسنا مقدم رعاية صحية ولا نمارس الطب. لن نكون مسؤولين عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو تبعية أو عقابية ناشئة عن استخدامك لخدماتنا.'
        },
        {
          title: '8. حالات الطوارئ',
          content: 'إذا كنت تعاني من حالة طبية طارئة، يرجى الاتصال بخدمات الطوارئ المحلية فوراً. لا تعتمد على هذا الموقع للحصول على إرشادات طبية طارئة.'
        },
        {
          title: '9. التغييرات على هذا الإخلاء',
          content: 'نحتفظ بالحق في تحديث إخلاء المسؤولية هذا في أي وقت. سيتم نشر التغييرات على هذه الصفحة مع تاريخ مراجعة محدث.'
        },
        {
          title: '10. اتصل بنا',
          content: 'إذا كانت لديك أسئلة حول إخلاء المسؤولية هذا، يرجى الاتصال بنا على support@shifaalhind.com أو الاتصال على +971 50 123 4567.'
        }
      ]
    }
  };

  const safeLocale = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  const c = content[safeLocale];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold">{c.title}</h1>
          <p className="text-primary-100">{c.lastUpdated}</p>
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-4 py-12">
        <div className="space-y-8">
          {c.sections.map((section, index) => (
            <div key={index}>
              <h2 className="mb-3 text-xl font-bold text-gray-900">{section.title}</h2>
              <p className="leading-relaxed text-gray-700">{section.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

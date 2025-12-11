/**
 * Transform Contact Page to Arabic - Client Component Approach
 * Using useLocale() hook for Client Component
 */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/[locale]/contact/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

console.log('🚀 Starting Contact page transformation for Arabic support...\n');

// Step 1: Add useLocale import
console.log('Step 1: Adding useLocale import...');
content = content.replace(
  `import { useState } from 'react';`,
  `import { useState } from 'react';
import { useLocale } from 'next-intl';`
);
console.log('  ✓ useLocale import added');

// Step 2: Add bilingual content object inside the component
console.log('\nStep 2: Adding bilingual content object...');

const bilingualContent = `
  const locale = useLocale();

  // Bilingual content for Contact page
  const content = {
    en: {
      hero: {
        title: 'Get in Touch',
        subtitle: "We're here to help 24/7. Reach out to us anytime!"
      },
      contactMethods: {
        phone: 'Phone',
        email: 'Email',
        whatsapp: 'WhatsApp',
        office: 'Office',
        support247: '24/7 Support',
        response24h: 'Response within 24 hours',
        chatWithUs: 'Chat with us',
        visitUs: 'Visit us'
      },
      form: {
        title: 'Send Us a Message',
        name: 'Name',
        nameRequired: 'Name is required',
        namePlaceholder: 'Your name',
        email: 'Email',
        invalidEmail: 'Invalid email',
        emailPlaceholder: 'your@email.com',
        phone: 'Phone / WhatsApp',
        phonePlaceholder: '+971 50 123 4567',
        country: 'Your Country',
        selectCountry: 'Select country...',
        gccCountries: '🌟 GCC Countries',
        menaRegion: '🌍 MENA Region',
        otherCountries: '🌎 Other Countries',
        treatmentInterest: 'Treatment of Interest',
        selectTreatment: 'Select treatment (optional)...',
        subject: 'Subject',
        subjectRequired: 'Subject is required',
        subjectPlaceholder: 'How can we help?',
        message: 'Message',
        messageMinLength: 'Message must be at least 10 characters',
        messagePlaceholder: 'Tell us more about your medical tourism needs...',
        sendButton: 'Send Message',
        sending: 'Sending...',
        successMessage: "Message sent successfully! We'll get back to you soon.",
        errorMessage: 'Failed to send message. Please try again.',
        required: '*'
      }
    },
    ar: {
      hero: {
        title: 'تواصل معنا',
        subtitle: 'نحن هنا لمساعدتك على مدار الساعة طوال أيام الأسبوع. تواصل معنا في أي وقت!'
      },
      contactMethods: {
        phone: 'الهاتف',
        email: 'البريد الإلكتروني',
        whatsapp: 'واتساب',
        office: 'المكتب',
        support247: 'دعم 24/7',
        response24h: 'الرد خلال 24 ساعة',
        chatWithUs: 'تحدث معنا',
        visitUs: 'زرنا'
      },
      form: {
        title: 'أرسل لنا رسالة',
        name: 'الاسم',
        nameRequired: 'الاسم مطلوب',
        namePlaceholder: 'اسمك',
        email: 'البريد الإلكتروني',
        invalidEmail: 'بريد إلكتروني غير صالح',
        emailPlaceholder: 'your@email.com',
        phone: 'الهاتف / واتساب',
        phonePlaceholder: '+971 50 123 4567',
        country: 'بلدك',
        selectCountry: 'اختر البلد...',
        gccCountries: '🌟 دول مجلس التعاون الخليجي',
        menaRegion: '🌍 منطقة الشرق الأوسط وشمال أفريقيا',
        otherCountries: '🌎 دول أخرى',
        treatmentInterest: 'العلاج المهتم به',
        selectTreatment: 'اختر العلاج (اختياري)...',
        subject: 'الموضوع',
        subjectRequired: 'الموضوع مطلوب',
        subjectPlaceholder: 'كيف يمكننا مساعدتك؟',
        message: 'الرسالة',
        messageMinLength: 'يجب أن تكون الرسالة 10 أحرف على الأقل',
        messagePlaceholder: 'أخبرنا المزيد عن احتياجاتك للسياحة العلاجية...',
        sendButton: 'إرسال الرسالة',
        sending: 'جاري الإرسال...',
        successMessage: 'تم إرسال الرسالة بنجاح! سنتواصل معك قريباً.',
        errorMessage: 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.',
        required: '*'
      }
    }
  };

  const safeLocale = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  const currentContent = content[safeLocale];
`;

// Insert after the useState hooks, before the useForm hook
const insertPosition = content.indexOf('const {');
if (insertPosition !== -1) {
  content = content.slice(0, insertPosition) + bilingualContent + '\n  ' + content.slice(insertPosition);
  console.log('  ✓ Bilingual content object added');
} else {
  console.log('  ✗ Could not find insertion point');
}

// Step 3: Update validation schema error messages
console.log('\nStep 3: Updating validation schema...');
content = content.replace(
  `z.string().min(2, 'Name is required')`,
  `z.string().min(2, currentContent.form.nameRequired)`
);
content = content.replace(
  `z.string().email('Invalid email')`,
  `z.string().email(currentContent.form.invalidEmail)`
);
content = content.replace(
  `z.string().min(5, 'Subject is required')`,
  `z.string().min(5, currentContent.form.subjectRequired)`
);
content = content.replace(
  `z.string().min(10, 'Message must be at least 10 characters')`,
  `z.string().min(10, currentContent.form.messageMinLength)`
);
console.log('  ✓ Validation schema updated');

// Step 4: Update error alert message
console.log('\nStep 4: Updating alert messages...');
content = content.replace(
  `alert(result.error || 'Failed to send message. Please try again.');`,
  `alert(result.error || currentContent.form.errorMessage);`
);
content = content.replace(
  `alert('Failed to send message. Please try again.');`,
  `alert(currentContent.form.errorMessage);`
);
console.log('  ✓ Alert messages updated');

// Step 5: Update contact methods array to use currentContent
console.log('\nStep 5: Transforming contact methods array...');
const contactMethodsTransformations = [
  { old: `title: 'Phone',`, new: `title: currentContent.contactMethods.phone,` },
  { old: `title: 'Email',`, new: `title: currentContent.contactMethods.email,` },
  { old: `title: 'WhatsApp',`, new: `title: currentContent.contactMethods.whatsapp,` },
  { old: `title: 'Office',`, new: `title: currentContent.contactMethods.office,` },
  { old: `description: '24/7 Support',`, new: `description: currentContent.contactMethods.support247,` },
  { old: `description: 'Response within 24 hours',`, new: `description: currentContent.contactMethods.response24h,` },
  { old: `description: 'Chat with us',`, new: `description: currentContent.contactMethods.chatWithUs,` },
  { old: `description: 'Visit us',`, new: `description: currentContent.contactMethods.visitUs,` },
];

let methodsCount = 0;
contactMethodsTransformations.forEach(t => {
  if (content.includes(t.old)) {
    content = content.replace(t.old, t.new);
    methodsCount++;
  }
});
console.log(`  ✓ ${methodsCount} contact methods transformations applied`);

// Step 6: Transform JSX content
console.log('\nStep 6: Transforming JSX content...');

const jsxTransformations = [
  // Hero section
  { old: 'Get in Touch', new: '{currentContent.hero.title}', section: 'Hero title' },
  { old: `We&apos;re here to help 24/7. Reach out to us anytime!`, new: '{currentContent.hero.subtitle}', section: 'Hero subtitle' },

  // Form title
  { old: 'Send Us a Message', new: '{currentContent.form.title}', section: 'Form title' },

  // Form labels
  { old: 'Name *', new: '{currentContent.form.name} {currentContent.form.required}', section: 'Name label' },
  { old: 'Email *', new: '{currentContent.form.email} {currentContent.form.required}', section: 'Email label' },
  { old: 'Phone / WhatsApp', new: '{currentContent.form.phone}', section: 'Phone label' },
  { old: 'Your Country', new: '{currentContent.form.country}', section: 'Country label' },
  { old: 'Treatment of Interest', new: '{currentContent.form.treatmentInterest}', section: 'Treatment label' },
  { old: 'Subject *', new: '{currentContent.form.subject} {currentContent.form.required}', section: 'Subject label' },
  { old: 'Message *', new: '{currentContent.form.message} {currentContent.form.required}', section: 'Message label' },

  // Placeholders
  { old: `placeholder="Your name"`, new: `placeholder={currentContent.form.namePlaceholder}` },
  { old: `placeholder="your@email.com"`, new: `placeholder={currentContent.form.emailPlaceholder}` },
  { old: `placeholder="+971 50 123 4567"`, new: `placeholder={currentContent.form.phonePlaceholder}` },
  { old: `placeholder="How can we help?"`, new: `placeholder={currentContent.form.subjectPlaceholder}` },
  { old: `placeholder="Tell us more about your medical tourism needs..."`, new: `placeholder={currentContent.form.messagePlaceholder}` },

  // Select options
  { old: '>Select country...</option>', new: '>{currentContent.form.selectCountry}</option>' },
  { old: 'label="🌟 GCC Countries">', new: 'label={currentContent.form.gccCountries}>' },
  { old: 'label="🌍 MENA Region">', new: 'label={currentContent.form.menaRegion}>' },
  { old: 'label="🌎 Other Countries">', new: 'label={currentContent.form.otherCountries}>' },
  { old: '>Select treatment (optional)...</option>', new: '>{currentContent.form.selectTreatment}</option>' },

  // Button text
  { old: `{isSubmitting ? 'Sending...' : 'Send Message'}`, new: `{isSubmitting ? currentContent.form.sending : currentContent.form.sendButton}` },

  // Success message
  { old: `Message sent successfully! We&apos;ll get back to you soon.`, new: '{currentContent.form.successMessage}' },
];

let jsxCount = 0;
jsxTransformations.forEach(t => {
  if (content.includes(t.old)) {
    content = content.replace(t.old, t.new);
    jsxCount++;
    if (t.section) console.log(`  ✓ ${t.section}`);
  } else {
    if (t.section) console.log(`  ✗ ${t.section} (not found)`);
  }
});

console.log(`  ✓ ${jsxCount} JSX transformations applied`);

// Write the transformed content
fs.writeFileSync(filePath, content, 'utf8');

console.log(`\n✨ Contact page transformation complete!`);
console.log(`📊 Summary: ${methodsCount + jsxCount + 4} total transformations applied`);
console.log(`   - 4 validation schema updates`);
console.log(`   - ${methodsCount} contact methods updates`);
console.log(`   - ${jsxCount} JSX content updates`);
console.log('\n🎯 Contact page is now bilingual and ready for Arabic display!');
console.log('🧪 Test at: http://localhost:3003/ar/contact');

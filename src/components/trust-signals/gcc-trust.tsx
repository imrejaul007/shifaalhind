import { Shield, CheckCircle, MessageCircle, Building2 } from 'lucide-react';

interface GCCProps {
  country: string;
  locale: 'en' | 'ar';
}

const countryBadges: Record<string, { en: string; ar: string }[]> = {
  uae: [
    { en: 'MOHAP Approved', ar: 'معتمد من وزارة الصحة ووقاية المجتمع' },
    { en: 'DHA Recognized', ar: 'معترف به من هيئة الصحة بدبي' },
    { en: 'HAAD Accredited', ar: 'معتمد من هيئة الصحة أبوظبي' },
  ],
  saudi: [
    { en: 'MOH Approved', ar: 'معتمد من وزارة الصحة' },
    { en: 'SCFHS Recognized', ar: 'معترف به من الهيئة السعودية للتخصصات الصحية' },
  ],
  qatar: [
    { en: 'MOPH Approved', ar: 'معتمد من وزارة الصحة العامة' },
    { en: 'HMC Partnership', ar: 'شراكة مع مؤسسة حمد الطبية' },
  ],
  oman: [{ en: 'MOH Oman Approved', ar: 'معتمد من وزارة الصحة العمانية' }],
  kuwait: [{ en: 'MOH Kuwait Approved', ar: 'معتمد من وزارة الصحة الكويتية' }],
  bahrain: [{ en: 'NHRA Approved', ar: 'معتمد من الهيئة الوطنية لتنظيم المهن الصحية' }],
};

const universalBadges: { en: string; ar: string }[] = [
  { en: 'JCI Accredited Hospitals', ar: 'مستشفيات معتمدة من JCI' },
  { en: 'NABH Certified', ar: 'حاصل على شهادة NABH' },
  { en: 'ISO Certified', ar: 'حاصل على شهادة ISO' },
];

export function GCCTrustBadges({ country, locale }: GCCProps) {
  const key = country.toLowerCase();
  const specific = countryBadges[key] || [];
  const allBadges = [...specific, ...universalBadges];
  const isRtl = locale === 'ar';

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {allBadges.map((badge, i) => (
        <div
          key={i}
          className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-3 py-2"
        >
          {i < specific.length ? (
            <Shield className="h-5 w-5 shrink-0 text-green-700" />
          ) : (
            <CheckCircle className="h-5 w-5 shrink-0 text-blue-600" />
          )}
          <span className="text-sm font-medium text-gray-800">
            {isRtl ? badge.ar : badge.en}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */

const countryInsurance: Record<string, string[]> = {
  uae: ['Daman', 'ADNIC', 'Oman Insurance', 'Sukoon', 'Tawuniya'],
  saudi: ['Tawuniya', 'Bupa Arabia', 'MedGulf', 'CCHI Approved'],
  qatar: ['QLM', 'Doha Insurance', 'Qatar Insurance'],
};

export function InsurancePartners({ country, locale }: GCCProps) {
  const key = country.toLowerCase();
  const partners = countryInsurance[key];
  const isRtl = locale === 'ar';
  const fallback = isRtl ? 'معظم تأمينات دول الخليج مقبولة' : 'Most GCC insurance accepted';

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="flex gap-2 overflow-x-auto pb-2">
      {partners
        ? partners.map((name) => (
            <span
              key={name}
              className="inline-flex shrink-0 items-center rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-sm font-medium text-blue-800"
            >
              {name}
            </span>
          ))
        : (
          <span className="inline-flex items-center rounded-full bg-blue-50 border border-blue-200 px-4 py-1 text-sm font-medium text-blue-800">
            {fallback}
          </span>
        )}
    </div>
  );
}

/* ------------------------------------------------------------------ */

const govStatements: Record<string, { en: string; ar: string }> = {
  uae: {
    en: 'Recognized by UAE Ministry of Health and Prevention. Medical visa facilitated through the UAE embassy.',
    ar: 'معترف به من وزارة الصحة ووقاية المجتمع الإماراتية. التأشيرة الطبية ميسّرة عبر السفارة الإماراتية.',
  },
  saudi: {
    en: 'Recognized by Saudi Ministry of Health. Medical visa facilitated through the Saudi embassy.',
    ar: 'معترف به من وزارة الصحة السعودية. التأشيرة الطبية ميسّرة عبر السفارة السعودية.',
  },
  qatar: {
    en: 'Recognized by Qatar Ministry of Public Health. Medical visa facilitated through the Qatari embassy.',
    ar: 'معترف به من وزارة الصحة العامة القطرية. التأشيرة الطبية ميسّرة عبر السفارة القطرية.',
  },
  oman: {
    en: 'Recognized by Oman Ministry of Health. Medical visa facilitated through the Omani embassy.',
    ar: 'معترف به من وزارة الصحة العمانية. التأشيرة الطبية ميسّرة عبر السفارة العمانية.',
  },
  kuwait: {
    en: 'Recognized by Kuwait Ministry of Health. Medical visa facilitated through the Kuwaiti embassy.',
    ar: 'معترف به من وزارة الصحة الكويتية. التأشيرة الطبية ميسّرة عبر السفارة الكويتية.',
  },
  bahrain: {
    en: 'Recognized by Bahrain NHRA. Medical visa facilitated through the Bahraini embassy.',
    ar: 'معترف به من الهيئة الوطنية لتنظيم المهن الصحية البحرينية. التأشيرة الطبية ميسّرة عبر السفارة البحرينية.',
  },
};

export function GovernmentPartnership({ country, locale }: GCCProps) {
  const key = country.toLowerCase();
  const statement = govStatements[key] || govStatements.uae;
  const isRtl = locale === 'ar';

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="flex items-start gap-3 rounded-lg bg-amber-50 border border-amber-200 p-4"
    >
      <Building2 className="h-6 w-6 shrink-0 text-amber-700 mt-0.5" />
      <p className="text-sm leading-relaxed text-gray-800">
        {isRtl ? statement.ar : statement.en}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */

const greetings: Record<string, { text: string; display: string }> = {
  uae: { text: 'هلا! تواصل وياّنا', display: '+971' },
  bahrain: { text: 'هلا! تواصل وياّنا', display: '+973' },
  saudi: { text: 'مرحبا! تواصل معانا', display: '+966' },
  qatar: { text: 'هلا! تواصل وياّنا', display: '+974' },
  oman: { text: 'مرحبا! تواصل معانا', display: '+968' },
  kuwait: { text: 'هلا! تواصل وياّنا', display: '+965' },
};

const WHATSAPP_NUMBER = '919876543210';

export function WhatsAppLocalNumber({ country, locale }: GCCProps) {
  const key = country.toLowerCase();
  const info = greetings[key] || greetings.uae;
  const isRtl = locale === 'ar';
  const greeting = isRtl
    ? info.text
    : 'Hello! Connect with us';

  const url = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      dir={isRtl ? 'rtl' : 'ltr'}
      className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-md transition-transform hover:scale-105"
    >
      <MessageCircle className="h-5 w-5 shrink-0" />
      <span className="text-sm font-semibold">{greeting}</span>
      <span className="text-xs opacity-80">({info.display})</span>
    </a>
  );
}

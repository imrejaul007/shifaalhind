// =============================================================================
// Emirati Arabic (Gulf Dialect) Configuration
// Used across the site instead of MSA for relatability with GCC patients
// =============================================================================

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

export interface EmiratiGreeting {
  arabic: string;
  transliteration: string;
  meaning: string;
}

export interface EmiratiPhrase {
  msa: string;
  emirati: string;
  meaning: string;
}

export interface EmiratiMedicalTerm {
  english: string;
  arabic: string;
  alternativeArabic?: string;
}

export interface EmiratiSearchKeyword {
  keyword: string;
  transliteration: string;
  meaning: string;
}

export type CTAType = 'book' | 'contact' | 'whatsapp' | 'learn' | 'compare' | 'consult';

export type GCCCountryCode = 'uae' | 'saudi' | 'qatar' | 'oman' | 'kuwait' | 'bahrain';

// -----------------------------------------------------------------------------
// 1. Common Emirati Greetings
// -----------------------------------------------------------------------------

export const emiratiGreetings: EmiratiGreeting[] = [
  { arabic: 'هلا', transliteration: 'hala', meaning: 'hi / hello' },
  { arabic: 'مرحبا', transliteration: 'marhaba', meaning: 'welcome / hello' },
  { arabic: 'السلام عليكم', transliteration: 'as-salamu alaykum', meaning: 'peace be upon you' },
  { arabic: 'هلا والله', transliteration: 'hala wallah', meaning: 'hello indeed (warm hello)' },
  { arabic: 'أهلين', transliteration: 'ahlain', meaning: 'double welcome' },
];

// -----------------------------------------------------------------------------
// 2. Conversational Phrases — MSA to Emirati Mapping
// -----------------------------------------------------------------------------

export const emiratiPhrases: EmiratiPhrase[] = [
  { msa: 'ماذا', emirati: 'شو', meaning: 'what' },
  { msa: 'لماذا', emirati: 'ليش', meaning: 'why' },
  { msa: 'كيف', emirati: 'شلون', meaning: 'how' },
  { msa: 'كثير / جداً', emirati: 'وايد', meaning: 'very / a lot' },
  { msa: 'جيد', emirati: 'زين', meaning: 'good' },
  { msa: 'الآن', emirati: 'الحين', meaning: 'now' },
  { msa: 'أريد', emirati: 'أبي / أبا', meaning: 'I want' },
  { msa: 'أين', emirati: 'وين', meaning: 'where' },
  { msa: 'هل', emirati: 'شي', meaning: 'question marker' },
  { msa: 'لا بأس', emirati: 'عادي', meaning: "it's fine / no problem" },
  { msa: 'ممتاز', emirati: 'تمام / خوش', meaning: 'excellent / great' },
  { msa: 'صحيح', emirati: 'صح', meaning: 'correct / true' },
  { msa: 'بسرعة', emirati: 'بسرعة / على طول', meaning: 'quickly / right away' },
  { msa: 'هذا', emirati: 'هذا / ها', meaning: 'this' },
];

// -----------------------------------------------------------------------------
// 3. Medical Terms in Emirati Arabic
// -----------------------------------------------------------------------------

export const emiratiMedicalTerms: EmiratiMedicalTerm[] = [
  { english: 'Hospital', arabic: 'مستشفى' },
  { english: 'Doctor', arabic: 'دكتور', alternativeArabic: 'حكيم' },
  { english: 'Surgery', arabic: 'عملية' },
  { english: 'Treatment', arabic: 'علاج' },
  { english: 'Consultation', arabic: 'استشارة' },
  { english: 'Cost / Price', arabic: 'سعر', alternativeArabic: 'تكلفة' },
  { english: 'Appointment', arabic: 'موعد' },
  { english: 'Recovery', arabic: 'تعافي' },
  { english: 'Heart Surgery', arabic: 'عملية القلب' },
  { english: 'Knee Replacement', arabic: 'تبديل الركبة' },
  { english: 'Cancer', arabic: 'سرطان' },
  { english: 'IVF', arabic: 'أطفال أنابيب', alternativeArabic: 'تلقيح صناعي' },
  { english: 'Dental', arabic: 'أسنان' },
  { english: 'Eye Surgery', arabic: 'عملية العيون' },
];

// -----------------------------------------------------------------------------
// 4. Search Keywords — Terms GCC users commonly type in Arabic
// -----------------------------------------------------------------------------

export const emiratiSearchKeywords: EmiratiSearchKeyword[] = [
  // Travel & logistics
  { keyword: 'شلون أسافر الهند للعلاج', transliteration: 'shlon asafir al-hind lil-ilaj', meaning: 'how to travel to India for treatment' },
  { keyword: 'وين أحسن مستشفى في الهند', transliteration: 'wain ahsan mustashfa fi al-hind', meaning: "where's the best hospital in India" },
  { keyword: 'كم تكلفة العلاج في الهند', transliteration: 'kam taklufat al-ilaj fi al-hind', meaning: 'how much does treatment cost in India' },
  { keyword: 'أبي أسوي عملية في الهند', transliteration: 'abi asawi amaliya fi al-hind', meaning: 'I want to do surgery in India' },
  { keyword: 'أحسن دكتور قلب في الهند', transliteration: 'ahsan duktur galb fi al-hind', meaning: 'best heart doctor in India' },
  { keyword: 'تجربتي مع العلاج في الهند', transliteration: 'tajrubati ma al-ilaj fi al-hind', meaning: 'my experience with treatment in India' },

  // Cost-related
  { keyword: 'أسعار العمليات في الهند', transliteration: "as'ar al-amaliyat fi al-hind", meaning: 'surgery prices in India' },
  { keyword: 'تكلفة عملية القلب في الهند', transliteration: 'taklufat amaliyat al-galb fi al-hind', meaning: 'heart surgery cost in India' },
  { keyword: 'أرخص مستشفى في الهند', transliteration: 'arkhas mustashfa fi al-hind', meaning: 'cheapest hospital in India' },
  { keyword: 'كم سعر عملية الركبة في الهند', transliteration: "kam si'r amaliyat al-rukba fi al-hind", meaning: 'how much is knee surgery in India' },
  { keyword: 'تكلفة أطفال أنابيب في الهند', transliteration: 'taklufat atfal anabib fi al-hind', meaning: 'IVF cost in India' },

  // Specialty searches
  { keyword: 'أحسن دكتور عظام في الهند', transliteration: 'ahsan duktur idam fi al-hind', meaning: 'best orthopedic doctor in India' },
  { keyword: 'أحسن دكتور سرطان في الهند', transliteration: 'ahsan duktur saratan fi al-hind', meaning: 'best cancer doctor in India' },
  { keyword: 'أحسن دكتور عيون في الهند', transliteration: 'ahsan duktur uyun fi al-hind', meaning: 'best eye doctor in India' },
  { keyword: 'أحسن دكتور أسنان في الهند', transliteration: 'ahsan duktur asnan fi al-hind', meaning: 'best dentist in India' },
  { keyword: 'علاج السرطان في الهند', transliteration: 'ilaj al-saratan fi al-hind', meaning: 'cancer treatment in India' },
  { keyword: 'زراعة الكبد في الهند', transliteration: "zira'at al-kabid fi al-hind", meaning: 'liver transplant in India' },
  { keyword: 'عملية تجميل في الهند', transliteration: 'amaliyat tajmil fi al-hind', meaning: 'cosmetic surgery in India' },

  // Logistics & visa
  { keyword: 'فيزا علاجية للهند', transliteration: 'visa ilajiya lil-hind', meaning: 'medical visa for India' },
  { keyword: 'سكن قريب من المستشفى في الهند', transliteration: 'sakan garib min al-mustashfa fi al-hind', meaning: 'accommodation near hospital in India' },
  { keyword: 'مترجم عربي في مستشفى الهند', transliteration: 'mutarjim arabi fi mustashfa al-hind', meaning: 'Arabic translator in Indian hospital' },
  { keyword: 'رحلة علاج في الهند', transliteration: 'rihlat ilaj fi al-hind', meaning: 'treatment trip to India' },

  // Comparison & trust
  { keyword: 'الهند ولا تايلند للعلاج', transliteration: 'al-hind walla tailand lil-ilaj', meaning: 'India or Thailand for treatment' },
  { keyword: 'هل العلاج في الهند آمن', transliteration: 'hal al-ilaj fi al-hind amin', meaning: 'is treatment in India safe' },
  { keyword: 'مستشفيات معتمدة في الهند', transliteration: "mustashfayat mu'tamada fi al-hind", meaning: 'accredited hospitals in India' },
  { keyword: 'تقييمات مستشفيات الهند', transliteration: 'taqyimat mustashfayat al-hind', meaning: 'India hospital reviews' },
  { keyword: 'تجارب المرضى العرب في الهند', transliteration: "tajarib al-marda al-arab fi al-hind", meaning: 'Arab patient experiences in India' },
];

// -----------------------------------------------------------------------------
// 5. CTA Text in Emirati Arabic
// -----------------------------------------------------------------------------

const emiratiCTAs: Record<CTAType, string> = {
  book: 'احجز الحين',
  contact: 'تواصل وياّنا',
  whatsapp: 'راسلنا واتساب',
  learn: 'اعرف أكثر',
  compare: 'قارن الأسعار',
  consult: 'احصل على استشارة مجانية',
};

export function getEmiratiCTA(type: string): string {
  const key = type as CTAType;
  return emiratiCTAs[key] ?? emiratiCTAs.contact;
}

// -----------------------------------------------------------------------------
// 6. Country-Specific Greetings for Each GCC Nation
// -----------------------------------------------------------------------------

const countryGreetings: Record<GCCCountryCode, string> = {
  uae: 'هلا! شلونك؟',
  saudi: 'مرحبا! كيف حالك؟',
  qatar: 'هلا! شلونك؟',
  oman: 'مرحبا! كيف الحال؟',
  kuwait: 'هلا! شلونك؟',
  bahrain: 'هلا! شخبارك؟',
};

export function getCountrySpecificGreeting(country: string): string {
  const key = country.toLowerCase() as GCCCountryCode;
  return countryGreetings[key] ?? countryGreetings.uae;
}

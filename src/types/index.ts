import { Prisma } from '@prisma/client';

// Extended types with relations
export type CityWithCountry = Prisma.CityGetPayload<{
  include: { country: true };
}>;

export type HospitalWithCity = Prisma.HospitalGetPayload<{
  include: { city: { include: { country: true } } };
}>;

export type DoctorWithHospital = Prisma.DoctorGetPayload<{
  include: { hospital: { include: { city: true } } };
}>;

export type TreatmentWithCities = Prisma.TreatmentGetPayload<{
  include: { cityTreatments: { include: { city: true } } };
}>;

export type CityTreatmentFull = Prisma.CityTreatmentGetPayload<{
  include: {
    city: { include: { country: true } };
    treatment: true;
    articles: true;
  };
}>;

export type ArticleFull = Prisma.ArticleGetPayload<{
  include: {
    city: { include: { country: true } };
    cityTreatment: { include: { treatment: true } };
  };
}>;

export type BookingWithRelations = Prisma.BookingGetPayload<{
  include: {
    treatment: true;
    package: true;
    user: true;
    assignedTranslator: { include: { user: true } };
  };
}>;

// Currency types
export type Currency = 'AED' | 'SAR' | 'QAR' | 'OMR' | 'KWD' | 'BHD' | 'INR' | 'USD';

export interface CurrencyInfo {
  code: Currency;
  symbol: string;
  name: string;
  rate: number; // Exchange rate to USD
}

// GCC Country types
export interface GCCCountryConfig {
  slug: string;
  name: string;
  code: string;
  currency: Currency;
  phonePrefix: string;
  cities: Array<{
    slug: string;
    name: string;
  }>;
}

// Form types
export interface BookingFormData {
  userName: string;
  email: string;
  phone: string;
  countryOrigin: string;
  cityOrigin?: string;
  treatmentId?: string;
  packageId?: string;
  preferredDate?: Date;
  message?: string;
}

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  treatment?: string;
  message?: string;
}

// SEO types
export interface SEOData {
  title_en?: string;
  title_ar?: string;
  description_en?: string;
  description_ar?: string;
  keywords_en?: string[];
  keywords_ar?: string[];
}

// Content Block types (for rich content)
export interface ContentBlock {
  type: 'paragraph' | 'heading' | 'list' | 'image' | 'video' | 'quote' | 'cta';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
}

// Search result types
export interface SearchResult {
  type: 'city' | 'treatment' | 'hospital' | 'doctor' | 'article';
  id: string;
  slug: string;
  title: string;
  description?: string;
  image?: string;
  url: string;
}

// Analytics event types
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

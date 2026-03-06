import { z } from 'zod';

// ============================================
// TREATMENT SCHEMAS
// ============================================

export const treatmentCreateSchema = z.object({
  slug: z.string().min(1).max(200),
  title_en: z.string().min(1).max(500),
  title_ar: z.string().min(1).max(500),
  category_en: z.string().max(200).optional().nullable(),
  category_ar: z.string().max(200).optional().nullable(),
  summary_en: z.string().optional().nullable(),
  summary_ar: z.string().optional().nullable(),
  content_en: z.any().optional().nullable(),
  content_ar: z.any().optional().nullable(),
  costMin: z.number().min(0).optional().nullable(),
  costMax: z.number().min(0).optional().nullable(),
  currency: z.string().max(10).default('USD'),
  duration: z.string().max(100).optional().nullable(),
  recovery: z.string().max(100).optional().nullable(),
  thumbnail: z.string().url().optional().nullable(),
  images: z.array(z.string().url()).default([]),
  video: z.string().url().optional().nullable(),
  faq_en: z.any().optional().nullable(),
  faq_ar: z.any().optional().nullable(),
  seoTitle_en: z.string().max(200).optional().nullable(),
  seoTitle_ar: z.string().max(200).optional().nullable(),
  seoDesc_en: z.string().max(500).optional().nullable(),
  seoDesc_ar: z.string().max(500).optional().nullable(),
  keywords_en: z.array(z.string()).default([]),
  keywords_ar: z.array(z.string()).default([]),
  published: z.boolean().default(false),
  featured: z.boolean().default(false),
});

export const treatmentUpdateSchema = treatmentCreateSchema.partial();

// ============================================
// CITY SCHEMAS
// ============================================

export const cityCreateSchema = z.object({
  slug: z.string().min(1).max(200),
  name_en: z.string().min(1).max(200),
  name_ar: z.string().min(1).max(200),
  countryId: z.string().min(1),
  timezone: z.string().max(100).optional().nullable(),
  latitude: z.number().optional().nullable(),
  longitude: z.number().optional().nullable(),
  seoTitle_en: z.string().max(200).optional().nullable(),
  seoTitle_ar: z.string().max(200).optional().nullable(),
  seoDesc_en: z.string().max(500).optional().nullable(),
  seoDesc_ar: z.string().max(500).optional().nullable(),
  keywords_en: z.array(z.string()).default([]),
  keywords_ar: z.array(z.string()).default([]),
  intro_en: z.string().optional().nullable(),
  intro_ar: z.string().optional().nullable(),
  published: z.boolean().default(false),
  priority: z.number().int().min(0).max(100).default(50),
});

export const cityUpdateSchema = cityCreateSchema.partial();

// ============================================
// ARTICLE SCHEMAS
// ============================================

export const articleCreateSchema = z.object({
  slug: z.string().min(1).max(500),
  cityTreatmentId: z.string().min(1),
  cityId: z.string().min(1),
  title_en: z.string().min(1).max(500),
  title_ar: z.string().min(1).max(500),
  excerpt_en: z.string().optional().nullable(),
  excerpt_ar: z.string().optional().nullable(),
  content_en: z.any().optional().nullable(),
  content_ar: z.any().optional().nullable(),
  thumbnail: z.string().optional().nullable(),
  images: z.array(z.string()).default([]),
  seoTitle_en: z.string().max(200).optional().nullable(),
  seoTitle_ar: z.string().max(200).optional().nullable(),
  seoDesc_en: z.string().max(500).optional().nullable(),
  seoDesc_ar: z.string().max(500).optional().nullable(),
  keywords_en: z.array(z.string()).default([]),
  keywords_ar: z.array(z.string()).default([]),
  published: z.boolean().default(false),
  publishDate: z.string().datetime().optional().nullable(),
  needsNativeReview: z.boolean().default(true),
  needsMedicalReview: z.boolean().default(false),
  priority: z.number().int().min(0).max(100).default(30),
});

export const articleUpdateSchema = articleCreateSchema.partial();

// ============================================
// BOOKING UPDATE SCHEMA
// ============================================

const bookingStatusEnum = z.enum([
  'PENDING',
  'CONTACTED',
  'CONSULTATION_SCHEDULED',
  'DOCUMENTS_REQUESTED',
  'DOCUMENTS_RECEIVED',
  'QUOTE_SENT',
  'CONFIRMED',
  'CANCELLED',
  'COMPLETED',
]);

export const bookingUpdateSchema = z.object({
  status: bookingStatusEnum.optional(),
  notes: z.string().max(5000).optional(),
  assignedTranslatorId: z.string().optional().nullable(),
  userName: z.string().max(200).optional(),
  email: z.string().email().optional(),
  phone: z.string().max(50).optional(),
  preferredDate: z.string().datetime().optional().nullable(),
  message: z.string().max(5000).optional().nullable(),
});

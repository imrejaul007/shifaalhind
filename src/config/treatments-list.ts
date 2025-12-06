/**
 * Complete list of all 30 treatments for forms, calculators, and popups
 * Centralized configuration to ensure consistency across all components
 */

export interface Treatment {
  slug: string;
  name: string;
  category: string;
}

export const ALL_TREATMENTS: Treatment[] = [
  // Cardiac & Heart (2)
  // { slug: 'heart-surgery', name: 'Heart Surgery / CABG', category: 'Cardiac' }, // TODO: Create page
  { slug: 'angioplasty-india', name: 'Angioplasty & Stenting', category: 'Cardiac' },

  // Orthopedic (4)
  // { slug: 'knee-replacement', name: 'Knee Replacement', category: 'Orthopedic' }, // TODO: Create page
  { slug: 'hip-replacement-india', name: 'Hip Replacement', category: 'Orthopedic' },
  { slug: 'shoulder-surgery-india', name: 'Shoulder Surgery', category: 'Orthopedic' },
  { slug: 'acl-reconstruction-india', name: 'ACL Reconstruction', category: 'Orthopedic' },

  // Oncology / Cancer (7)
  // { slug: 'cancer-treatment', name: 'Cancer Treatment (General)', category: 'Oncology' }, // TODO: Create page
  { slug: 'breast-cancer-treatment-india', name: 'Breast Cancer Treatment', category: 'Oncology' },
  { slug: 'lung-cancer-treatment-india', name: 'Lung Cancer Treatment', category: 'Oncology' },
  { slug: 'colon-cancer-treatment-india', name: 'Colon Cancer Treatment', category: 'Oncology' },
  { slug: 'cervical-cancer-treatment-india', name: 'Cervical Cancer Treatment', category: 'Oncology' },
  { slug: 'prostate-cancer-treatment-india', name: 'Prostate Cancer Treatment', category: 'Oncology' },
  { slug: 'blood-cancer-treatment-india', name: 'Blood Cancer / Leukemia Treatment', category: 'Oncology' },

  // Transplants (3)
  // { slug: 'liver-transplant', name: 'Liver Transplant', category: 'Transplant' }, // TODO: Create page - USER REPORTED 404
  // { slug: 'kidney-transplant', name: 'Kidney Transplant', category: 'Transplant' }, // TODO: Create page
  // { slug: 'bone-marrow-transplant', name: 'Bone Marrow Transplant (BMT)', category: 'Transplant' }, // TODO: Create page

  // Fertility & Gynecology (4)
  // { slug: 'ivf', name: 'IVF & Fertility Treatment', category: 'Fertility' }, // TODO: Create page
  { slug: 'pcos-treatment-india', name: 'PCOS Treatment', category: 'Fertility' },
  { slug: 'egg-freezing-india', name: 'Egg Freezing', category: 'Fertility' },
  { slug: 'hysterectomy-surgery-india', name: 'Hysterectomy Surgery', category: 'Gynecology' },

  // Cosmetic & Plastic Surgery (5)
  // { slug: 'cosmetic-surgery', name: 'Cosmetic Surgery (General)', category: 'Cosmetic' }, // TODO: Create page
  { slug: 'rhinoplasty-india', name: 'Rhinoplasty (Nose Job)', category: 'Cosmetic' },
  { slug: 'liposuction-india', name: 'Liposuction', category: 'Cosmetic' },
  { slug: 'breast-augmentation-india', name: 'Breast Augmentation', category: 'Cosmetic' },
  { slug: 'hair-transplant-india', name: 'Hair Transplant', category: 'Cosmetic' },

  // Dental (3)
  { slug: 'dental-implants-india', name: 'Dental Implants', category: 'Dental' },
  { slug: 'all-on-4-dental-implants-india', name: 'All-on-4 Dental Implants', category: 'Dental' },
  { slug: 'veneers-india', name: 'Dental Veneers', category: 'Dental' },

  // Ophthalmology / Eye (2)
  { slug: 'cataract-surgery-india', name: 'Cataract Surgery', category: 'Ophthalmology' },
  { slug: 'lasik-eye-surgery-india', name: 'LASIK Eye Surgery', category: 'Ophthalmology' },

  // Neurosurgery & Spine (2)
  // { slug: 'neurosurgery', name: 'Neurosurgery / Brain Surgery', category: 'Neurosurgery' }, // TODO: Create page
  // { slug: 'spine-surgery', name: 'Spine Surgery', category: 'Neurosurgery' }, // TODO: Create page

  // General Surgery (4)
  { slug: 'piles-surgery-india', name: 'Piles / Hemorrhoid Surgery', category: 'General Surgery' },
  { slug: 'hernia-surgery-india', name: 'Hernia Surgery', category: 'General Surgery' },
  { slug: 'gallbladder-surgery-india', name: 'Gallbladder Surgery', category: 'General Surgery' },
  { slug: 'appendix-surgery-india', name: 'Appendix Surgery', category: 'General Surgery' },

  // Bariatric & Weight Loss (2)
  // { slug: 'bariatric-surgery', name: 'Bariatric / Weight Loss Surgery (General)', category: 'Bariatric' }, // TODO: Create page
  { slug: 'gastric-bypass-india', name: 'Gastric Bypass Surgery', category: 'Bariatric' },

  // Urology (1)
  { slug: 'kidney-stone-treatment-india', name: 'Kidney Stone Treatment', category: 'Urology' },

  // Vascular (1)
  { slug: 'varicose-veins-treatment-india', name: 'Varicose Veins Treatment', category: 'Vascular' },

  // Endocrine (1)
  { slug: 'thyroid-surgery-india', name: 'Thyroid Surgery', category: 'Endocrine' },

  // Other
  // { slug: 'diabetes-treatment', name: 'Diabetes Treatment', category: 'Endocrinology' }, // TODO: Create page
  { slug: 'other', name: 'Other Treatment', category: 'Other' },
];

// Group treatments by category for better UX
export const TREATMENTS_BY_CATEGORY = {
  'Popular Treatments': [
    // 'heart-surgery', // TODO: Create page
    // 'knee-replacement', // TODO: Create page
    'hip-replacement-india',
    // 'ivf', // TODO: Create page
    'breast-cancer-treatment-india',
    'dental-implants-india',
    'lasik-eye-surgery-india',
    'rhinoplasty-india',
  ],
  'Cardiac': [
    // 'heart-surgery', // TODO: Create page
    'angioplasty-india'
  ],
  'Orthopedic': [
    // 'knee-replacement', // TODO: Create page
    'hip-replacement-india',
    'shoulder-surgery-india',
    'acl-reconstruction-india'
  ],
  'Oncology': [
    // 'cancer-treatment', // TODO: Create page
    'breast-cancer-treatment-india',
    'lung-cancer-treatment-india',
    'colon-cancer-treatment-india',
    'cervical-cancer-treatment-india',
    'prostate-cancer-treatment-india',
    'blood-cancer-treatment-india'
  ],
  'Transplants': [
    // 'liver-transplant', // TODO: Create page
    // 'kidney-transplant', // TODO: Create page
    // 'bone-marrow-transplant' // TODO: Create page
  ],
  'Fertility': [
    // 'ivf', // TODO: Create page
    'pcos-treatment-india',
    'egg-freezing-india'
  ],
  'Cosmetic': [
    // 'cosmetic-surgery', // TODO: Create page
    'rhinoplasty-india',
    'liposuction-india',
    'breast-augmentation-india',
    'hair-transplant-india'
  ],
  'Dental': [
    'dental-implants-india',
    'all-on-4-dental-implants-india',
    'veneers-india'
  ],
  'Eye': [
    'cataract-surgery-india',
    'lasik-eye-surgery-india'
  ],
  'Brain & Spine': [
    // 'neurosurgery', // TODO: Create page
    // 'spine-surgery' // TODO: Create page
  ],
  'General Surgery': [
    'piles-surgery-india',
    'hernia-surgery-india',
    'gallbladder-surgery-india',
    'appendix-surgery-india'
  ],
  'Weight Loss': [
    // 'bariatric-surgery', // TODO: Create page
    'gastric-bypass-india'
  ],
  'Other': [
    'kidney-stone-treatment-india',
    'varicose-veins-treatment-india',
    'thyroid-surgery-india',
    // 'diabetes-treatment', // TODO: Create page
    'hysterectomy-surgery-india',
    'other'
  ],
};

// Helper function to get treatment name by slug
export function getTreatmentName(slug: string): string {
  const treatment = ALL_TREATMENTS.find(t => t.slug === slug);
  return treatment?.name || slug;
}

// Helper function to get treatment by slug
export function getTreatment(slug: string): Treatment | undefined {
  return ALL_TREATMENTS.find(t => t.slug === slug);
}

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
  { slug: 'heart-surgery', name: 'Heart Surgery / CABG', category: 'Cardiac' },
  { slug: 'angioplasty', name: 'Angioplasty & Stenting', category: 'Cardiac' },

  // Orthopedic (4)
  { slug: 'knee-replacement', name: 'Knee Replacement', category: 'Orthopedic' },
  { slug: 'hip-replacement', name: 'Hip Replacement', category: 'Orthopedic' },
  { slug: 'shoulder-surgery', name: 'Shoulder Surgery', category: 'Orthopedic' },
  { slug: 'acl-reconstruction', name: 'ACL Reconstruction', category: 'Orthopedic' },

  // Oncology / Cancer (6)
  { slug: 'cancer-treatment', name: 'Cancer Treatment', category: 'Oncology' },
  { slug: 'breast-cancer', name: 'Breast Cancer Treatment', category: 'Oncology' },
  { slug: 'lung-cancer', name: 'Lung Cancer Treatment', category: 'Oncology' },
  { slug: 'colon-cancer', name: 'Colon Cancer Treatment', category: 'Oncology' },
  { slug: 'cervical-cancer', name: 'Cervical Cancer Treatment', category: 'Oncology' },
  { slug: 'prostate-cancer', name: 'Prostate Cancer Treatment', category: 'Oncology' },
  { slug: 'blood-cancer', name: 'Blood Cancer / Leukemia Treatment', category: 'Oncology' },

  // Transplants (3)
  { slug: 'liver-transplant', name: 'Liver Transplant', category: 'Transplant' },
  { slug: 'kidney-transplant', name: 'Kidney Transplant', category: 'Transplant' },
  { slug: 'bone-marrow-transplant', name: 'Bone Marrow Transplant (BMT)', category: 'Transplant' },

  // Fertility & Gynecology (3)
  { slug: 'ivf', name: 'IVF & Fertility Treatment', category: 'Fertility' },
  { slug: 'pcos-treatment', name: 'PCOS Treatment', category: 'Fertility' },
  { slug: 'egg-freezing', name: 'Egg Freezing', category: 'Fertility' },
  { slug: 'hysterectomy', name: 'Hysterectomy Surgery', category: 'Gynecology' },

  // Cosmetic & Plastic Surgery (3)
  { slug: 'cosmetic-surgery', name: 'Cosmetic Surgery', category: 'Cosmetic' },
  { slug: 'rhinoplasty', name: 'Rhinoplasty (Nose Job)', category: 'Cosmetic' },
  { slug: 'liposuction', name: 'Liposuction', category: 'Cosmetic' },
  { slug: 'breast-augmentation', name: 'Breast Augmentation', category: 'Cosmetic' },

  // Dental (3)
  { slug: 'dental-implants', name: 'Dental Implants', category: 'Dental' },
  { slug: 'all-on-4-dental', name: 'All-on-4 Dental Implants', category: 'Dental' },
  { slug: 'veneers', name: 'Dental Veneers', category: 'Dental' },

  // Ophthalmology / Eye (2)
  { slug: 'cataract-surgery', name: 'Cataract Surgery', category: 'Ophthalmology' },
  { slug: 'lasik', name: 'LASIK Eye Surgery', category: 'Ophthalmology' },

  // Neurosurgery & Spine (2)
  { slug: 'neurosurgery', name: 'Neurosurgery / Brain Surgery', category: 'Neurosurgery' },
  { slug: 'spine-surgery', name: 'Spine Surgery', category: 'Neurosurgery' },

  // General Surgery (5)
  { slug: 'piles-surgery', name: 'Piles / Hemorrhoid Surgery', category: 'General Surgery' },
  { slug: 'hernia-surgery', name: 'Hernia Surgery', category: 'General Surgery' },
  { slug: 'gallbladder-surgery', name: 'Gallbladder Surgery', category: 'General Surgery' },
  { slug: 'appendix-surgery', name: 'Appendix Surgery', category: 'General Surgery' },

  // Bariatric & Weight Loss (2)
  { slug: 'bariatric-surgery', name: 'Bariatric / Weight Loss Surgery', category: 'Bariatric' },
  { slug: 'gastric-bypass', name: 'Gastric Bypass Surgery', category: 'Bariatric' },

  // Urology (2)
  { slug: 'kidney-stone', name: 'Kidney Stone Treatment', category: 'Urology' },

  // Vascular (1)
  { slug: 'varicose-veins', name: 'Varicose Veins Treatment', category: 'Vascular' },

  // Endocrine (1)
  { slug: 'thyroid-surgery', name: 'Thyroid Surgery', category: 'Endocrine' },

  // Other
  { slug: 'diabetes-treatment', name: 'Diabetes Treatment', category: 'Endocrinology' },
  { slug: 'other', name: 'Other Treatment', category: 'Other' },
];

// Group treatments by category for better UX
export const TREATMENTS_BY_CATEGORY = {
  'Popular Treatments': [
    'heart-surgery',
    'knee-replacement',
    'hip-replacement',
    'ivf',
    'cancer-treatment',
    'dental-implants',
    'lasik',
    'cosmetic-surgery',
  ],
  'Cardiac': ['heart-surgery', 'angioplasty'],
  'Orthopedic': ['knee-replacement', 'hip-replacement', 'shoulder-surgery', 'acl-reconstruction'],
  'Oncology': ['cancer-treatment', 'breast-cancer', 'lung-cancer', 'colon-cancer', 'cervical-cancer', 'prostate-cancer', 'blood-cancer'],
  'Transplants': ['liver-transplant', 'kidney-transplant', 'bone-marrow-transplant'],
  'Fertility': ['ivf', 'pcos-treatment', 'egg-freezing'],
  'Cosmetic': ['cosmetic-surgery', 'rhinoplasty', 'liposuction', 'breast-augmentation'],
  'Dental': ['dental-implants', 'all-on-4-dental', 'veneers'],
  'Eye': ['cataract-surgery', 'lasik'],
  'Brain & Spine': ['neurosurgery', 'spine-surgery'],
  'General Surgery': ['piles-surgery', 'hernia-surgery', 'gallbladder-surgery', 'appendix-surgery'],
  'Weight Loss': ['bariatric-surgery', 'gastric-bypass'],
  'Other': ['kidney-stone', 'varicose-veins', 'thyroid-surgery', 'diabetes-treatment', 'hysterectomy', 'other'],
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

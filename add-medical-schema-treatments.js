/**
 * Automation Script: Add Medical Procedure Schema to Treatment Pages
 * This script adds MedicalProcedureSchema to all 30 treatment pages
 */

const fs = require('fs');
const path = require('path');

const baseUrl = 'https://shifaalhind.onrender.com';

// All 30 treatment pages with their specific medical procedure data
const treatments = [
  {
    slug: 'hair-transplant-india',
    name: 'Hair Transplant',
    description: 'Hair transplantation is a surgical procedure to restore hair growth by moving hair follicles from donor areas to balding or thinning areas.',
    procedureType: 'SurgicalProcedure',
    bodyLocation: 'Scalp',
    preparation: 'Avoid blood-thinning medications, stop smoking 2 weeks before, arrange for post-op care.',
    followup: 'Follow-up visits at 1 week, 1 month, 3 months, 6 months, and 1 year to monitor growth progress.',
  },
  {
    slug: 'dental-implants-india',
    name: 'Dental Implants',
    description: 'Dental implant surgery replaces tooth roots with metal posts and replaces damaged or missing teeth with artificial teeth that look and function like real ones.',
    procedureType: 'SurgicalProcedure',
    bodyLocation: 'Jaw and Teeth',
    preparation: 'Comprehensive dental exam, X-rays or 3D imaging, treatment plan, bone grafting if needed.',
    followup: 'Regular check-ups every 3-6 months for the first year, then annually. Professional cleaning every 6 months.',
  },
  {
    slug: 'piles-surgery-india',
    name: 'Piles Surgery (Hemorrhoid Surgery)',
    description: 'Hemorrhoid surgery removes enlarged hemorrhoids using techniques like laser, stapler, or traditional methods to provide relief from painful symptoms.',
    procedureType: 'SurgicalProcedure',
    bodyLocation: 'Rectum and Anus',
    preparation: 'Bowel preparation, fasting before surgery, stop certain medications as advised.',
    followup: 'Follow-up at 1 week, 2 weeks, and 4 weeks. Maintain high-fiber diet and proper hygiene.',
  },
  {
    slug: 'kidney-stone-treatment-india',
    name: 'Kidney Stone Treatment',
    description: 'Kidney stone treatment uses various techniques like ESWL, RIRS, or PCNL to break down and remove kidney stones causing pain and urinary blockage.',
    procedureType: 'TherapeuticProcedure',
    bodyLocation: 'Kidney and Urinary Tract',
    preparation: 'Blood tests, urine tests, imaging studies (CT/Ultrasound), fasting before procedure.',
    followup: 'Follow-up imaging at 2 weeks and 3 months. Dietary modifications and increased water intake.',
  },
  {
    slug: 'hip-replacement-india',
    name: 'Hip Replacement Surgery',
    description: 'Hip replacement surgery replaces damaged hip joint components with artificial implants to restore mobility and relieve pain from arthritis or injury.',
    procedureType: 'SurgicalProcedure',
    bodyLocation: 'Hip Joint',
    preparation: 'Medical evaluation, blood tests, X-rays, physical therapy preparation, arrange home care.',
    followup: 'Physical therapy starts immediately, follow-ups at 2 weeks, 6 weeks, 3 months, 6 months, and annually.',
  },
  {
    slug: 'varicose-veins-treatment-india',
    name: 'Varicose Veins Treatment',
    description: 'Varicose veins treatment uses minimally invasive techniques like laser EVLT or traditional surgery to close or remove enlarged, twisted veins in the legs.',
    procedureType: 'TherapeuticProcedure',
    bodyLocation: 'Leg Veins',
    preparation: 'Ultrasound evaluation, stop certain medications, arrange for someone to drive you home.',
    followup: 'Wear compression stockings for 2-4 weeks, walk regularly, follow-up at 1 week and 1 month.',
  },
  {
    slug: 'cataract-surgery-india',
    name: 'Cataract Surgery',
    description: 'Cataract surgery removes the cloudy lens and replaces it with an artificial intraocular lens (IOL) to restore clear vision.',
    procedureType: 'SurgicalProcedure',
    bodyLocation: 'Eye Lens',
    preparation: 'Comprehensive eye exam, measurements for IOL, stop certain medications, arrange transportation.',
    followup: 'Eye drops for 4 weeks, follow-up visits at 1 day, 1 week, and 1 month. Vision stabilizes in 4-6 weeks.',
  },
  {
    slug: 'lasik-eye-surgery-india',
    name: 'LASIK Eye Surgery',
    description: 'LASIK reshapes the cornea using laser technology to correct refractive errors like myopia, hyperopia, and astigmatism.',
    procedureType: 'SurgicalProcedure',
    bodyLocation: 'Cornea',
    preparation: 'Stop wearing contact lenses 2 weeks before, comprehensive eye exam, arrange transportation.',
    followup: 'Follow-up at 1 day, 1 week, 1 month, 3 months, 6 months, and 1 year. Use prescribed eye drops.',
  },
  {
    slug: 'breast-cancer-treatment-india',
    name: 'Breast Cancer Treatment',
    description: 'Comprehensive breast cancer treatment may include surgery, chemotherapy, radiation, targeted therapy, and hormone therapy based on cancer stage.',
    procedureType: 'TherapeuticProcedure',
    bodyLocation: 'Breast',
    preparation: 'Complete diagnostic workup including biopsy, imaging, and staging. Multidisciplinary team evaluation.',
    followup: 'Regular follow-ups every 3-6 months for 5 years, then annually. Ongoing imaging and blood tests.',
  },
  {
    slug: 'lung-cancer-treatment-india',
    name: 'Lung Cancer Treatment',
    description: 'Lung cancer treatment includes surgery, chemotherapy, radiation, targeted therapy, and immunotherapy depending on cancer type and stage.',
    procedureType: 'TherapeuticProcedure',
    bodyLocation: 'Lungs',
    preparation: 'Comprehensive staging workup, pulmonary function tests, cardiac evaluation if surgery planned.',
    followup: 'Regular follow-ups every 3-4 months for first 2 years, then every 6 months. CT scans as recommended.',
  },
  // Additional 20 treatments with similar structure
  {
    slug: 'shoulder-surgery-india',
    name: 'Shoulder Surgery',
    description: 'Shoulder surgery repairs rotator cuff tears, treats arthritis, or corrects instability to restore function and relieve pain.',
    procedureType: 'SurgicalProcedure',
    bodyLocation: 'Shoulder Joint',
  },
  {
    slug: 'gallbladder-surgery-india',
    name: 'Gallbladder Surgery (Cholecystectomy)',
    description: 'Laparoscopic cholecystectomy removes the gallbladder to treat gallstones and related complications.',
    procedureType: 'SurgicalProcedure',
    bodyLocation: 'Gallbladder',
  },
  {
    slug: 'colon-cancer-treatment-india',
    name: 'Colon Cancer Treatment',
    description: 'Colon cancer treatment includes surgery, chemotherapy, and targeted therapy based on stage and location.',
    procedureType: 'TherapeuticProcedure',
    bodyLocation: 'Colon',
  },
  {
    slug: 'hernia-surgery-india',
    name: 'Hernia Repair Surgery',
    description: 'Hernia surgery repairs weakened abdominal wall using laparoscopic or open techniques with mesh reinforcement.',
    procedureType: 'SurgicalProcedure',
    bodyLocation: 'Abdominal Wall',
  },
  {
    slug: 'cervical-cancer-treatment-india',
    name: 'Cervical Cancer Treatment',
    description: 'Cervical cancer treatment includes surgery, radiation, chemotherapy, and targeted therapy depending on stage.',
    procedureType: 'TherapeuticProcedure',
    bodyLocation: 'Cervix',
  },
  {
    slug: 'appendix-surgery-india',
    name: 'Appendectomy (Appendix Removal)',
    description: 'Appendectomy removes inflamed appendix to prevent rupture and complications.',
    procedureType: 'SurgicalProcedure',
    bodyLocation: 'Appendix',
  },
  {
    slug: 'blood-cancer-treatment-india',
    name: 'Blood Cancer Treatment',
    description: 'Blood cancer treatment includes chemotherapy, bone marrow transplant, targeted therapy, and immunotherapy.',
    procedureType: 'TherapeuticProcedure',
    bodyLocation: 'Blood and Bone Marrow',
  },
  {
    slug: 'thyroid-surgery-india',
    name: 'Thyroid Surgery (Thyroidectomy)',
    description: 'Thyroid surgery removes part or all of the thyroid gland to treat cancer, nodules, or hyperthyroidism.',
    procedureType: 'SurgicalProcedure',
    bodyLocation: 'Thyroid Gland',
  },
  {
    slug: 'hysterectomy-surgery-india',
    name: 'Hysterectomy',
    description: 'Hysterectomy removes the uterus to treat fibroids, endometriosis, cancer, or other conditions.',
    procedureType: 'SurgicalProcedure',
    bodyLocation: 'Uterus',
  },
  {
    slug: 'prostate-cancer-treatment-india',
    name: 'Prostate Cancer Treatment',
    description: 'Prostate cancer treatment includes surgery, radiation, hormone therapy, and active surveillance based on stage.',
    procedureType: 'TherapeuticProcedure',
    bodyLocation: 'Prostate',
  },
  // Phase 1 treatments
  {
    slug: 'rhinoplasty-india',
    name: 'Rhinoplasty (Nose Reshaping Surgery)',
    description: 'Rhinoplasty reshapes the nose for aesthetic or functional improvement by modifying bone, cartilage, and soft tissue.',
    procedureType: 'SurgicalProcedure',
    bodyLocation: 'Nose',
  },
  {
    slug: 'angioplasty-india',
    name: 'Angioplasty and Stenting',
    description: 'Angioplasty opens blocked coronary arteries using a balloon and stent to restore blood flow to the heart.',
    procedureType: 'TherapeuticProcedure',
    bodyLocation: 'Coronary Arteries',
  },
  {
    slug: 'liposuction-india',
    name: 'Liposuction',
    description: 'Liposuction removes excess fat deposits from specific body areas to improve body contours and proportions.',
    procedureType: 'SurgicalProcedure',
    bodyLocation: 'Various Body Areas',
  },
  {
    slug: 'acl-reconstruction-india',
    name: 'ACL Reconstruction Surgery',
    description: 'ACL reconstruction repairs torn anterior cruciate ligament using graft tissue to restore knee stability.',
    procedureType: 'SurgicalProcedure',
    bodyLocation: 'Knee Joint',
  },
  {
    slug: 'breast-augmentation-india',
    name: 'Breast Augmentation',
    description: 'Breast augmentation enhances breast size and shape using implants or fat transfer for aesthetic improvement.',
    procedureType: 'SurgicalProcedure',
    bodyLocation: 'Breast',
  },
  {
    slug: 'all-on-4-dental-implants-india',
    name: 'All-on-4 Dental Implants',
    description: 'All-on-4 provides full-arch teeth restoration using only 4 dental implants per arch for efficient and stable results.',
    procedureType: 'SurgicalProcedure',
    bodyLocation: 'Jaw',
  },
  {
    slug: 'pcos-treatment-india',
    name: 'PCOS Treatment',
    description: 'PCOS treatment includes lifestyle modifications, medications, and fertility treatments to manage symptoms and improve reproductive health.',
    procedureType: 'TherapeuticProcedure',
    bodyLocation: 'Ovaries',
  },
  {
    slug: 'egg-freezing-india',
    name: 'Egg Freezing (Oocyte Cryopreservation)',
    description: 'Egg freezing preserves fertility by collecting and freezing eggs for future use in assisted reproduction.',
    procedureType: 'TherapeuticProcedure',
    bodyLocation: 'Ovaries',
  },
  {
    slug: 'veneers-india',
    name: 'Dental Veneers',
    description: 'Dental veneers are thin shells placed over teeth to improve appearance by correcting discoloration, chips, or alignment issues.',
    procedureType: 'TherapeuticProcedure',
    bodyLocation: 'Teeth',
  },
  {
    slug: 'gastric-bypass-india',
    name: 'Gastric Bypass Surgery',
    description: 'Gastric bypass surgery reduces stomach size and reroutes digestive system to achieve significant weight loss.',
    procedureType: 'SurgicalProcedure',
    bodyLocation: 'Stomach and Small Intestine',
  },
];

let successCount = 0;
let skipCount = 0;
let errorCount = 0;

console.log('🚀 Starting medical procedure schema implementation for treatment pages...\n');

treatments.forEach((treatment) => {
  const filePath = path.join(__dirname, `src/app/[locale]/treatments/${treatment.slug}/page.tsx`);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${treatment.slug}`);
    errorCount++;
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if medical procedure schema already exists
  if (content.includes('MedicalProcedureSchema')) {
    console.log(`⏭️  Already has medical schema: ${treatment.slug}`);
    skipCount++;
    return;
  }

  // Add import if not present
  if (!content.includes("import { MedicalProcedureSchema")) {
    // Find the BreadcrumbSchema import line
    const breadcrumbImportIndex = content.indexOf("import { BreadcrumbSchema }");
    if (breadcrumbImportIndex !== -1) {
      const insertPosition = content.indexOf('\n', breadcrumbImportIndex) + 1;
      content = content.slice(0, insertPosition) +
                "import { MedicalProcedureSchema } from '@/components/seo/medical-procedure-schema';\n" +
                content.slice(insertPosition);
    } else {
      // If no breadcrumb import, add after last import
      const importLines = content.split('\n').filter(line => line.trim().startsWith('import'));
      const lastImportIndex = content.lastIndexOf(importLines[importLines.length - 1]);
      const insertPosition = content.indexOf('\n', lastImportIndex) + 1;
      content = content.slice(0, insertPosition) +
                "import { MedicalProcedureSchema } from '@/components/seo/medical-procedure-schema';\n" +
                content.slice(insertPosition);
    }
  }

  // Build medical procedure schema code with optional fields
  let medicalSchemaCode = `

      {/* Medical Procedure Schema for SEO */}
      <MedicalProcedureSchema
        name="${treatment.name}"
        description="${treatment.description.replace(/"/g, '\\"')}"
        procedureType="${treatment.procedureType}"
        ${treatment.bodyLocation ? `bodyLocation="${treatment.bodyLocation}"` : ''}
        ${treatment.preparation ? `preparation="${treatment.preparation.replace(/"/g, '\\"')}"` : ''}
        ${treatment.followup ? `followup="${treatment.followup.replace(/"/g, '\\"')}"` : ''}
        url="${baseUrl}/treatments/${treatment.slug}"
      />`;

  // Find BreadcrumbSchema and insert after it
  const breadcrumbSchemaIndex = content.indexOf('<BreadcrumbSchema');
  if (breadcrumbSchemaIndex !== -1) {
    // Find the end of BreadcrumbSchema component (closing />)
    const closingBracketIndex = content.indexOf('/>', breadcrumbSchemaIndex) + 2;
    content = content.slice(0, closingBracketIndex) + medicalSchemaCode + content.slice(closingBracketIndex);

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Added medical schema: ${treatment.slug}`);
    successCount++;
  } else {
    console.log(`❌ Could not find BreadcrumbSchema insertion point: ${treatment.slug}`);
    errorCount++;
  }
});

console.log('\n📊 Summary:');
console.log(`✅ Successfully added: ${successCount}`);
console.log(`⏭️  Skipped (already exists): ${skipCount}`);
console.log(`❌ Errors: ${errorCount}`);
console.log(`📝 Total processed: ${treatments.length}`);

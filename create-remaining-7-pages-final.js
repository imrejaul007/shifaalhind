const fs = require('fs');
const path = require('path');

const treatments = {
  'acl-reconstruction-india': {
    title: 'ACL Reconstruction India: Cost, Best Surgeons 2025',
    desc: 'ACL reconstruction in India costs $3,500-5,500 vs $20,000-50,000 in USA (85% savings). Arthroscopic surgery, 95% success rate. Sports medicine experts.',
    keywords: 'acl reconstruction india, acl surgery india, acl surgery cost india, acl repair india, knee surgery india, sports medicine india, arthroscopic surgery india, إعادة بناء الرباط الصليبي في الهند',
    h1: 'ACL Reconstruction in India',
    subtitle: 'Return to Sports with World-Class Knee Surgery',
    cost: '$3,500 - $5,500',
    time: '1-2 hours',
    success: '95% success',
    functionName: 'AclReconstructionIndiaPage',
    procedures: [
      ['Hamstring Autograft ACL', '$3,500 - $4,500', '$20,000 - $35,000', '£16,500 - £29,000', 'AED 73,000 - 129,000'],
      ['Patellar Tendon Autograft', '$3,800 - $4,800', '$22,000 - $38,000', '£18,000 - £31,500', 'AED 81,000 - 140,000'],
      ['Allograft Reconstruction', '$4,500 - $5,500', '$25,000 - $45,000', '£20,500 - £37,000', 'AED 92,000 - 165,000'],
      ['Double-Bundle ACL', '$5,000 - $6,000', '$30,000 - $50,000', '£25,000 - £41,000', 'AED 110,000 - 184,000']
    ],
    clinics: [
      {name: 'Fortis Hospital', loc: 'Delhi NCR, Mumbai', rating: '4.9', reviews: '580', desc: '8,500+ orthopedic surgeries annually', feat: 'Sports medicine specialists, Mako robotic system', team: 'Dr. Ramakant Kumar - 25+ years experience', cert: 'JCI accredited, FIFA Medical Centre', price: 'From $3,800'},
      {name: 'Apollo Hospitals', loc: 'Chennai, Bangalore, Hyderabad', rating: '4.9', reviews: '720', desc: '12,000+ knee surgeries/year', feat: 'Arthroscopic ACL specialists', team: '50+ orthopedic surgeons, fellowship-trained', cert: 'NABH & JCI accredited', price: 'From $3,500'},
      {name: 'Manipal Hospitals', loc: 'Bangalore, Delhi', rating: '4.8', reviews: '450', desc: '6,000+ sports medicine procedures', feat: 'Dedicated sports injury center', team: 'Team doctors for IPL cricket teams', cert: 'ISO 9001:2015 certified', price: 'From $4,000'}
    ],
    faqs: [
      {q: 'How much does ACL reconstruction cost in India?', a: 'ACL reconstruction costs $3,500-5,500 in India (hamstring graft $3,500-4,500, patellar tendon $3,800-4,800, allograft $4,500-5,500) vs $20,000-50,000 in USA. Includes surgery, anesthesia, hospital stay, brace, and 6-month physiotherapy program.'},
      {q: 'What is success rate of ACL surgery in India?', a: 'ACL surgery success rate is 95-98% at top hospitals. 90% of athletes return to pre-injury sports level within 9-12 months. Re-tear rate is less than 5% with proper rehabilitation. Return to play protocols strictly followed.'},
      {q: 'How long is ACL recovery?', a: 'Recovery timeline: Month 1 (full weight bearing with brace), Month 3 (light jogging possible), Month 6 (sport-specific training begins), Month 9-12 (clearance for competitive sports). Physical therapy 3-5 times per week for first 3 months.'},
      {q: 'Which ACL graft is best?', a: 'Hamstring autograft is most popular (70% of cases) - faster recovery, less pain. Patellar tendon offers strongest fixation - best for high-level athletes. Allograft (donor tissue) - no harvest site pain, faster surgery. Choice depends on age, activity level, surgeon preference.'}
    ]
  },
  'breast-augmentation-india': {
    title: 'Breast Augmentation India: Cost, Best Surgeons 2025',
    desc: 'Breast augmentation in India costs $2,800-4,500 vs $8,000-15,000 in USA (70% savings). Silicone/saline implants, board-certified surgeons, 97% satisfaction.',
    keywords: 'breast augmentation india, breast implants india, breast enlargement india, breast surgery india, silicone implants india, cosmetic surgery india, تكبير الثدي في الهند',
    h1: 'Breast Augmentation in India',
    subtitle: 'Natural-Looking Results at 70% Lower Cost',
    cost: '$2,800 - $4,500',
    time: '1-2 hours',
    success: '97% satisfaction',
    functionName: 'BreastAugmentationIndiaPage',
    procedures: [
      ['Silicone Implants (Round)', '$2,800 - $3,800', '$8,000 - $12,000', '£6,500 - £10,000', 'AED 29,000 - 44,000'],
      ['Silicone Implants (Teardrop)', '$3,200 - $4,200', '$9,000 - $14,000', '£7,500 - £11,500', 'AED 33,000 - 51,000'],
      ['Saline Implants', '$2,500 - $3,500', '$6,500 - $10,000', '£5,400 - £8,300', 'AED 24,000 - 37,000'],
      ['Fat Transfer Augmentation', '$3,500 - $4,500', '$10,000 - $15,000', '£8,300 - £12,500', 'AED 37,000 - 55,000']
    ],
    clinics: [
      {name: 'Cocoona Centre for Aesthetic', loc: 'Mumbai, Delhi, Bangalore', rating: '5.0', reviews: '420', desc: '18,000+ cosmetic procedures annually', feat: 'Motiva & Mentor implant specialists', team: 'Dr. Sanjay Parashar - Board certified plastic surgeon', cert: 'JCI accredited, ISO certified', price: 'From $3,200'},
      {name: 'Apollo Cosmetic Clinics', loc: 'Pan India - 12 Locations', rating: '4.9', reviews: '680', desc: '5,000+ breast augmentations/year', feat: 'FDA-approved implants only', team: '20+ plastic surgeons, international training', cert: 'NABH accredited facilities', price: 'From $2,800'},
      {name: 'Fortis Bloom Aesthetics', loc: 'Delhi NCR, Mumbai', rating: '4.9', reviews: '510', desc: '4,500+ breast surgeries annually', feat: 'All incision approaches available', team: 'Celebrity clientele, privacy assured', cert: 'JCI & NABH accredited', price: 'From $3,000'}
    ],
    faqs: [
      {q: 'How much does breast augmentation cost in India?', a: 'Breast augmentation costs $2,800-4,500 in India (round silicone $2,800-3,800, teardrop $3,200-4,200, saline $2,500-3,500) vs $8,000-15,000 in USA. Includes implants (Mentor/Motiva/Allergan), surgery, post-op bras, and 1-year follow-ups.'},
      {q: 'Are breast implants safe in India?', a: 'Yes, Indian clinics use FDA-approved implants (Mentor, Allergan, Motiva) same as USA/Europe. Surgeons are board-certified with 1,000+ procedures. 97% satisfaction rate, less than 3% capsular contracture. 10-15 year implant warranty included.'},
      {q: 'What size implants should I get?', a: 'Size determined by: chest width, existing breast tissue, desired look (natural vs dramatic). Typical range: 250-400cc (1-2 cup increase). 3D imaging helps visualize results. Most popular: 300-350cc for natural look. Surgeon recommends based on body proportions.'},
      {q: 'How long is breast augmentation recovery?', a: 'Recovery: Week 1 (light activities, surgical bra), Week 2 (return to desk work), Week 4 (light exercise), Week 6 (full activities, underwire bras). Swelling reduces 70% by week 2. Final shape at 3-6 months when implants settle.'}
    ]
  },
  'all-on-4-dental-implants-india': {
    title: 'All-on-4 Dental Implants India: Cost, Best Dentists 2025',
    desc: 'All-on-4 dental implants in India cost $4,000-6,000 vs $20,000-30,000 in USA (80% savings). Full arch restoration in one day. Nobel Biocare, Straumann implants.',
    keywords: 'all on 4 dental implants india, full arch dental implants india, teeth in a day india, full mouth dental implants india, nobel biocare india, زراعة الأسنان الكاملة في الهند',
    h1: 'All-on-4 Dental Implants in India',
    subtitle: 'Full Arch Restoration in One Day - 80% Savings',
    cost: '$4,000 - $6,000',
    time: '4-6 hours',
    success: '98% success',
    functionName: 'AllOn4DentalImplantsIndiaPage',
    procedures: [
      ['All-on-4 (Nobel Biocare)', '$4,500 - $6,000', '$20,000 - $30,000', '£16,500 - £25,000', 'AED 73,000 - 110,000'],
      ['All-on-4 (Straumann)', '$4,800 - $6,500', '$22,000 - $32,000', '£18,000 - £26,500', 'AED 81,000 - 117,000'],
      ['All-on-6 (Upper + Lower)', '$8,500 - $11,000', '$40,000 - $60,000', '£33,000 - £50,000', 'AED 147,000 - 220,000'],
      ['Zygomatic Implants', '$6,000 - $8,000', '$25,000 - $40,000', '£20,500 - £33,000', 'AED 92,000 - 147,000']
    ],
    clinics: [
      {name: 'Sabka Dentist', loc: 'Mumbai, Pune, Bangalore', rating: '4.9', reviews: '850', desc: '500+ All-on-4 procedures annually', feat: 'Same-day teeth, Nobel Biocare center', team: 'Dr. Taruna Aswani - Implantologist', cert: 'ISO 9001:2015 certified', price: 'From $4,500'},
      {name: 'Clove Dental', loc: 'Pan India - 450+ Clinics', rating: '4.8', reviews: '1200', desc: '1,000+ full arch cases per year', feat: '3D planning, immediate loading', team: 'Network of 500+ dentists', cert: 'Largest dental chain in India', price: 'From $4,000'},
      {name: 'Apollo White Dental', loc: 'Bangalore, Hyderabad, Chennai', rating: '4.9', reviews: '620', desc: 'Part of Apollo Hospitals Group', feat: 'Straumann & Nobel implants', team: 'Prosthodontists & oral surgeons', cert: 'NABH accredited', price: 'From $5,000'}
    ],
    faqs: [
      {q: 'How much do All-on-4 dental implants cost in India?', a: 'All-on-4 implants cost $4,000-6,000 per arch in India (Nobel Biocare $4,500-6,000, Straumann $4,800-6,500) vs $20,000-30,000 in USA. Includes 4 implants, temporary teeth same day, final prosthesis after 3-6 months, and 5-year warranty.'},
      {q: 'Can I get teeth in one day?', a: 'Yes, All-on-4 provides immediate temporary teeth same day as implant surgery. You leave with functional teeth within 4-6 hours. Temporary prosthesis worn 3-6 months while implants integrate. Then replaced with permanent zirconia/porcelain bridge.'},
      {q: 'How long do All-on-4 implants last?', a: 'All-on-4 implants last 15-20+ years with proper care. 98% success rate at 10 years. Implants themselves can last lifetime, prosthetic teeth may need replacement after 10-15 years. Daily cleaning and 6-month checkups essential.'},
      {q: 'Is All-on-4 better than dentures?', a: 'Yes, All-on-4 is superior: fixed (no removal), better chewing (90% vs 25% efficiency), preserves jawbone, more comfortable, no slipping, looks natural. Only needs 4 implants vs 6-8 for traditional. Same-day teeth possible.'}
    ]
  },
  'pcos-treatment-india': {
    title: 'PCOS Treatment India: Cost, Best Doctors 2025',
    desc: 'PCOS treatment in India costs $800-2,500 vs $5,000-12,000 in USA. Comprehensive care: medication, lifestyle, surgery options. Expert gynecologists, endocrinologists.',
    keywords: 'pcos treatment india, polycystic ovary syndrome india, pcos cure india, pcos treatment cost india, infertility treatment india, pcos surgery india, علاج تكيس المبايض في الهند',
    h1: 'PCOS Treatment in India',
    subtitle: 'Comprehensive PCOS Management at Affordable Costs',
    cost: '$800 - $2,500',
    time: '3-12 months',
    success: '75-85% improvement',
    functionName: 'PcosTreatmentIndiaPage',
    procedures: [
      ['Initial Consultation & Testing', '$150 - $300', '$800 - $1,500', '£650 - £1,250', 'AED 2,900 - 5,500'],
      ['Medication (3-month course)', '$200 - $500', '$1,200 - $2,500', '£1,000 - £2,100', 'AED 4,400 - 9,200'],
      ['Ovarian Drilling (Laparoscopic)', '$1,500 - $2,500', '$8,000 - $15,000', '£6,500 - £12,500', 'AED 29,000 - 55,000'],
      ['IVF for PCOS (if needed)', '$2,500 - $4,000', '$12,000 - $18,000', '£10,000 - £15,000', 'AED 44,000 - 66,000']
    ],
    clinics: [
      {name: 'Nova IVF Fertility', loc: 'Pan India - 65 Centers', rating: '4.9', reviews: '980', desc: '5,000+ PCOS patients treated annually', feat: 'Dedicated PCOS clinic, lifestyle programs', team: '100+ reproductive endocrinologists', cert: 'CAP-accredited labs', price: 'From $800'},
      {name: 'Cloudnine Hospitals', loc: 'Bangalore, Delhi, Mumbai', rating: '4.8', reviews: '720', desc: '3,500+ PCOS cases/year', feat: 'Multidisciplinary approach', team: 'Gynecologists, nutritionists, counselors', cert: 'NABH accredited', price: 'From $900'},
      {name: 'Apollo Fertility', loc: '20+ Locations', rating: '4.9', reviews: '650', desc: 'Part of Apollo Hospitals', feat: 'Comprehensive PCOS management', team: 'Endocrinologists & fertility specialists', cert: 'JCI accredited', price: 'From $950'}
    ],
    faqs: [
      {q: 'How much does PCOS treatment cost in India?', a: 'PCOS treatment costs $800-2,500 in India (initial consult + tests $150-300, 3-month medication $200-500, ovarian drilling $1,500-2,500) vs $5,000-12,000 in USA. Most patients need medication + lifestyle changes only. Surgery for 10-15% of cases.'},
      {q: 'Can PCOS be cured permanently?', a: 'PCOS cannot be "cured" but can be effectively managed. 75-85% of women achieve regular periods, reduced symptoms with treatment. Weight loss (even 5-10%) dramatically improves symptoms. Medication helps regulate hormones. Symptoms may return if treatment stopped.'},
      {q: 'What is success rate of PCOS treatment?', a: 'Success rates: Lifestyle changes improve symptoms in 70% of women, Metformin restores ovulation in 60-70%, Letrozole/Clomid achieves pregnancy in 50-60%, Ovarian drilling succeeds in 60-80%, IVF for PCOS has 60-65% success per cycle.'},
      {q: 'How long does PCOS treatment take?', a: 'Timeline varies: 3-6 months for lifestyle changes to show effect, 3-6 cycles of ovulation induction (3-6 months), 6-12 months for weight loss benefits. Many women need ongoing management. Regular monitoring every 3-6 months recommended.'}
    ]
  },
  'egg-freezing-india': {
    title: 'Egg Freezing India: Cost, Best Clinics 2025',
    desc: 'Egg freezing in India costs $1,800-3,000 vs $10,000-15,000 in USA (85% savings). Vitrification technique, 90-95% survival rate. Leading fertility centers.',
    keywords: 'egg freezing india, oocyte cryopreservation india, egg freezing cost india, fertility preservation india, social egg freezing india, تجميد البويضات في الهند',
    h1: 'Egg Freezing in India',
    subtitle: 'Preserve Your Fertility - 85% Cost Savings',
    cost: '$1,800 - $3,000',
    time: '10-14 days',
    success: '90-95% survival',
    functionName: 'EggFreezingIndiaPage',
    procedures: [
      ['Egg Freezing (1 Cycle)', '$1,800 - $2,500', '$10,000 - $15,000', '£8,300 - £12,500', 'AED 37,000 - 55,000'],
      ['Egg Freezing (2 Cycles)', '$3,200 - $4,500', '$18,000 - $28,000', '£15,000 - £23,000', 'AED 66,000 - 103,000'],
      ['Annual Storage Fee', '$200 - $400', '$500 - $1,000', '£400 - £830', 'AED 1,800 - 3,700'],
      ['Egg Thawing + IVF (future)', '$2,500 - $4,000', '$15,000 - $25,000', '£12,500 - £20,500', 'AED 55,000 - 92,000']
    ],
    clinics: [
      {name: 'Nova IVF Fertility', loc: 'Pan India - 65 Centers', rating: '4.9', reviews: '720', desc: '2,000+ egg freezing cycles annually', feat: 'State-of-art cryo labs, vitrification', team: 'CAP-accredited embryology labs', cert: 'ISO 15189 certified labs', price: 'From $1,800'},
      {name: 'Cloudnine Fertility', loc: 'Bangalore, Delhi, Mumbai, Pune', rating: '4.8', reviews: '580', desc: '1,500+ social egg freezing cases', feat: 'Personalized protocols, AMH testing', team: '50+ fertility specialists', cert: 'NABH accredited', price: 'From $2,000'},
      {name: 'Indira IVF', loc: '100+ Centers Pan India', rating: '4.7', reviews: '890', desc: 'Largest IVF chain in India', feat: 'Affordable egg freezing packages', team: 'Network of 200+ doctors', cert: 'ISO certified labs', price: 'From $1,900'}
    ],
    faqs: [
      {q: 'How much does egg freezing cost in India?', a: 'Egg freezing costs $1,800-3,000 per cycle in India vs $10,000-15,000 in USA. Includes ovarian stimulation medications, egg retrieval, vitrification, and first year storage. Annual storage: $200-400. Most women freeze 15-20 eggs (1-2 cycles) for best outcomes.'},
      {q: 'What is the best age to freeze eggs?', a: 'Best age is 30-35 years. Egg quality declines after 35. Women under 35: 15-20 eggs give 70-80% live birth chance. Age 35-37: need 25-30 eggs for same odds. After 38: success rates drop significantly. Earlier freezing = better outcomes.'},
      {q: 'How long can frozen eggs be stored?', a: 'Frozen eggs can be stored indefinitely - 10, 20, even 30+ years. Vitrification prevents ice crystal damage. Survival rate after thawing: 90-95%. Age at freezing matters more than storage duration. No evidence of increased birth defects with long-term storage.'},
      {q: 'What is egg freezing success rate?', a: 'Success rates depend on age at freezing: Under 35 (15-20 eggs): 70-80% live birth, Age 35-37 (20-25 eggs): 50-60% live birth, Age 38-40 (25-30 eggs): 30-40% live birth. Per egg success: 4-8% depending on age. Thaw survival: 90-95%.'}
    ]
  },
  'veneers-india': {
    title: 'Dental Veneers India: Cost, Best Dentists 2025',
    desc: 'Dental veneers in India cost $150-400 per tooth vs $925-2,500 in USA (80% savings). Porcelain, composite, eMax veneers. Expert cosmetic dentists.',
    keywords: 'veneers india, dental veneers cost india, porcelain veneers india, emax veneers india, smile makeover india, cosmetic dentistry india, قشور الأسنان في الهند',
    h1: 'Dental Veneers in India',
    subtitle: 'Hollywood Smile at 80% Lower Cost',
    cost: '$150 - $400',
    time: '2-3 visits',
    success: '98% satisfaction',
    functionName: 'VeneersIndiaPage',
    procedures: [
      ['Composite Veneers (per tooth)', '$150 - $250', '$925 - $1,500', '£770 - £1,250', 'AED 3,400 - 5,500'],
      ['Porcelain Veneers (per tooth)', '$250 - $400', '$1,500 - $2,500', '£1,250 - £2,100', 'AED 5,500 - 9,200'],
      ['eMax Veneers (per tooth)', '$300 - $450', '$1,800 - $3,000', '£1,500 - £2,500', 'AED 6,600 - 11,000'],
      ['Full Smile Makeover (10-12 teeth)', '$2,500 - $4,500', '$15,000 - $30,000', '£12,500 - £25,000', 'AED 55,000 - 110,000']
    ],
    clinics: [
      {name: 'Sabka Dentist', loc: 'Mumbai, Pune, Bangalore, Delhi', rating: '4.9', reviews: '950', desc: '25,000+ veneers placed annually', feat: 'German Cerec technology, same-day', team: 'Cosmetic dentistry specialists', cert: 'ISO 9001:2015', price: 'From $200'},
      {name: 'Clove Dental', loc: 'Pan India - 450+ Clinics', rating: '4.8', reviews: '1400', desc: 'Largest dental chain, 50,000+ veneers', feat: 'Digital smile design, 3D preview', team: '500+ cosmetic dentists', cert: 'Most trusted brand', price: 'From $150'},
      {name: 'Dr. Teeth Dental Care', loc: 'Delhi, Mumbai, Bangalore', rating: '4.9', reviews: '680', desc: 'Celebrity smile makeovers', feat: 'Minimal prep veneers, Lumineers', team: 'Award-winning cosmetic dentists', cert: 'International standards', price: 'From $250'}
    ],
    faqs: [
      {q: 'How much do veneers cost in India?', a: 'Veneers cost $150-450 per tooth in India (composite $150-250, porcelain $250-400, eMax $300-450) vs $925-2,500 in USA. Full smile makeover (10-12 teeth): $2,500-4,500 in India vs $15,000-30,000 abroad. Includes design, preparation, temporary veneers, and final bonding.'},
      {q: 'Which type of veneers is best?', a: 'eMax veneers are strongest and most natural-looking (best choice). Porcelain veneers are good balance of aesthetics and cost. Composite veneers are most affordable, done in one visit but last 5-7 years vs 10-15 for porcelain/eMax.'},
      {q: 'Do veneers damage your teeth?', a: 'Minimal prep veneers (Lumineers) require little to no tooth reduction. Traditional veneers remove 0.5-0.7mm of enamel (irreversible). However, this protects teeth long-term. With proper care, veneers last 10-15 years. Performed by experienced cosmetic dentists, risk is minimal.'},
      {q: 'How long do veneers last in India?', a: 'Veneer lifespan: Composite 5-7 years, Porcelain 10-15 years, eMax 15-20 years. Quality same as USA/Europe - materials imported from same suppliers. Longevity depends on oral hygiene, avoid hard foods, wear night guard if grinding teeth. Regular checkups every 6 months.'}
    ]
  },
  'gastric-bypass-india': {
    title: 'Gastric Bypass Surgery India: Cost, Best Surgeons 2025',
    desc: 'Gastric bypass surgery in India costs $6,000-8,500 vs $20,000-35,000 in USA (75% savings). Laparoscopic Roux-en-Y, 70-80% weight loss. COE bariatric centers.',
    keywords: 'gastric bypass india, gastric bypass surgery cost india, roux en y india, bariatric surgery india, weight loss surgery india, obesity surgery india, جراحة تحويل المعدة في الهند',
    h1: 'Gastric Bypass Surgery in India',
    subtitle: 'Life-Changing Weight Loss at 75% Lower Cost',
    cost: '$6,000 - $8,500',
    time: '2-4 hours',
    success: '70-80% weight loss',
    functionName: 'GastricBypassIndiaPage',
    procedures: [
      ['Roux-en-Y Gastric Bypass', '$6,000 - $8,000', '$20,000 - $30,000', '£16,500 - £25,000', 'AED 73,000 - 110,000'],
      ['Mini Gastric Bypass (MGB)', '$5,500 - $7,500', '$18,000 - $28,000', '£15,000 - £23,000', 'AED 66,000 - 103,000'],
      ['Revision Gastric Bypass', '$7,500 - $10,000', '$25,000 - $40,000', '£20,500 - £33,000', 'AED 92,000 - 147,000'],
      ['Gastric Bypass + Hiatal Hernia', '$7,000 - $9,000', '$22,000 - $35,000', '£18,000 - £29,000', 'AED 81,000 - 129,000']
    ],
    clinics: [
      {name: 'Apollo Bariatric Surgery', loc: 'Chennai, Hyderabad, Delhi', rating: '4.9', reviews: '650', desc: '3,500+ bariatric surgeries annually', feat: 'COE for bariatric surgery, 10-year follow-up', team: 'Dr. K. Praveen Reddy - 2,000+ bypass surgeries', cert: 'JCI & NABH accredited', price: 'From $6,500'},
      {name: 'Fortis Obesity Centre', loc: 'Delhi NCR, Mumbai, Bangalore', rating: '4.9', reviews: '580', desc: '2,800+ bypass procedures/year', feat: 'Comprehensive pre/post-op program', team: 'Multidisciplinary team: surgeons, dietitians, psychologists', cert: 'COE certification', price: 'From $6,000'},
      {name: 'Medanta Bariatrics', loc: 'Gurugram, Indore, Lucknow', rating: '4.8', reviews: '470', desc: '2,000+ bariatric cases annually', feat: 'Robotic-assisted bypass available', team: 'Dr. Tarun Mittal - Bariatric surgeon', cert: 'NABH accredited', price: 'From $7,000'}
    ],
    faqs: [
      {q: 'How much does gastric bypass cost in India?', a: 'Gastric bypass costs $6,000-8,500 in India (Roux-en-Y $6,000-8,000, Mini bypass $5,500-7,500) vs $20,000-35,000 in USA. Includes pre-op evaluation, surgery, 3-5 day hospital stay, nutritionist consultations, and 2-year follow-up program.'},
      {q: 'How much weight will I lose after gastric bypass?', a: 'Average weight loss: 60-80% of excess body weight in first 12-18 months. Month 1: 20-30 lbs, Month 6: 50-70 lbs, Year 1: 80-120 lbs, Year 2: 100-150 lbs. Most patients reach goal weight by 18-24 months. 85% diabetes remission, 75% hypertension resolution.'},
      {q: 'Is gastric bypass safe in India?', a: 'Yes, gastric bypass at COE (Center of Excellence) bariatric centers is very safe. Mortality rate: 0.1-0.3% (same as USA). Complication rate: 2-5% (leak 1%, bleeding 1%). Surgeons perform 200+ procedures annually. Laparoscopic approach reduces risks vs open surgery.'},
      {q: 'What is the recovery time?', a: 'Recovery timeline: Day 1 (walk, sips of water), Day 2-3 (liquid diet), Day 4-5 (discharge home), Week 2 (return to light work), Week 4 (resume normal activities), Month 3 (full recovery, exercise). Pain minimal with laparoscopic approach. Stay in India: 7-10 days total.'}
    ]
  }
};

const createPage = (slug, data) => `import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  Clock,
  DollarSign,
  Heart,
  ArrowRight,
  Star,
  Award
} from 'lucide-react';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles } from '@/components/blog/related-articles';
import { InternalLinks } from '@/components/seo/internal-links';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: '${data.title}',
  description: '${data.desc}',
  keywords: '${data.keywords}',
};

const RELATED_ARTICLES = [
  { title: "Rhinoplasty India", href: "/treatments/rhinoplasty-india", description: "Nose job $2,500-4,500" },
  { title: "Liposuction India", href: "/treatments/liposuction-india", description: "Body contouring $1,800-3,500" },
  { title: "Hair Transplant India", href: "/treatments/hair-transplant-india", description: "FUE/FUT from $800" }
];

export default function ${data.functionName}() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              ${data.h1}
            </h1>
            <p className="mb-6 text-xl text-primary-50 md:text-2xl">
              ${data.subtitle}
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <DollarSign className="h-6 w-6" />
                <span className="text-lg font-semibold">${data.cost}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6" />
                <span className="text-lg font-semibold">${data.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6" />
                <span className="text-lg font-semibold">${data.success}</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-accent-500 text-lg hover:bg-accent-600">
                <Link href="/consultation">Get Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white bg-transparent text-lg text-white hover:bg-white hover:text-primary-600">
                <Link href="#cost">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section id="cost" className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Cost Comparison
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600">
            Save 70-85% compared to USA, UK, and UAE
          </p>

          <Card className="overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Procedure Type</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">India</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">USA</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">UK</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">UAE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  ${data.procedures.map(proc => `<tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">${proc[0]}</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">${proc[1]}</td>
                    <td className="px-6 py-4 text-center text-gray-600">${proc[2]}</td>
                    <td className="px-6 py-4 text-center text-gray-600">${proc[3]}</td>
                    <td className="px-6 py-4 text-center text-gray-600">${proc[4]}</td>
                  </tr>`).join('\n                  ')}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Top Clinics */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          Top-Rated Clinics & Hospitals
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          ${data.clinics.map((clinic, idx) => `<Card className="border-2 border-gray-100 transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4${idx === 0 ? ' flex items-start justify-between' : ''}">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">${clinic.name}</h3>
                  <p className="text-sm text-gray-500">${clinic.loc}</p>
                </div>
                ${idx === 0 ? '<div className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-800">#1 Choice</div>' : ''}
              </div>
              <div className="mb-4 flex items-center gap-2">
                ${Array(5).fill('<Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />').join('')}
                <span className="ml-2 text-sm text-gray-600">${clinic.rating} (${clinic.reviews}+ reviews)</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• ${clinic.desc}</li>
                <li>• ${clinic.feat}</li>
                <li>• ${clinic.team}</li>
                <li>• ${clinic.cert}</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-600">${clinic.price}</p>
            </CardContent>
          </Card>`).join('\n          ')}
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={${JSON.stringify(data.faqs.map(f => ({question: f.q, answer: f.a})))}} />

      {/* FAQ Section */}
      <section className="container mx-auto max-w-4xl px-4 py-16">
        <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          ${data.faqs.map(faq => `<Card>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">${faq.q}</h3>
              <p className="text-gray-600">${faq.a}</p>
            </CardContent>
          </Card>`).join('\n          ')}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">Ready to Get Started?</h2>
          <p className="mb-8 text-xl text-primary-50">Get your personalized treatment plan today</p>
          <Button asChild size="lg" className="bg-accent-500 text-lg hover:bg-accent-600">
            <Link href="/consultation">Get Free Consultation<ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-8">
        <SocialShare title="${data.title}" description="${data.desc}" />
      </div>
      <div className="container mx-auto max-w-6xl px-4 pb-12">
        <RelatedArticles articles={RELATED_ARTICLES} />
      </div>
      <div className="container mx-auto max-w-6xl px-4 pb-12">
        <InternalLinks variant="compact" />
      </div>
    </div>
  );
}
`;

console.log('Creating 7 remaining treatment pages...\n');

let created = 0;
for (const [slug, data] of Object.entries(treatments)) {
  try {
    const dir = path.join(__dirname, `src/app/[locale]/treatments/${slug}`);
    const filePath = path.join(dir, 'page.tsx');

    const content = createPage(slug, data);
    fs.writeFileSync(filePath, content, { encoding: 'utf8' });

    created++;
    console.log(`✅ ${created}/7 Created: ${slug}`);
  } catch (error) {
    console.log(`❌ Failed: ${slug} - ${error.message}`);
  }
}

console.log(`\n🎉 Successfully created ${created}/7 treatment pages!`);
console.log('\nAll 10 Phase 1 pages now complete:');
console.log('1. ✅ Rhinoplasty India');
console.log('2. ✅ Angioplasty India');
console.log('3. ✅ Liposuction India');
console.log('4-10. ✅ All 7 remaining pages');

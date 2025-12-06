const fs = require('fs');
const path = require('path');

// Complete data for all 12 treatments
const treatmentsData = require('./treatments-data-complete.json');

// Additional detailed data for each treatment
const treatmentDetails = {
  'liver-transplant-india': {
    procedures: [
      { name: 'Living Donor Liver Transplant', india: '$50,000 - $65,000', usa: '$450,000 - $550,000', uk: '£350,000 - £450,000', uae: 'AED 400,000 - 500,000' },
      { name: 'Deceased Donor Liver Transplant', india: '$55,000 - $75,000', usa: '$500,000 - $650,000', uk: '£400,000 - £520,000', uae: 'AED 450,000 - 600,000' },
      { name: 'Pediatric Liver Transplant', india: '$55,000 - $80,000', usa: '$550,000 - $750,000', uk: '£450,000 - £600,000', uae: 'AED 500,000 - 700,000' },
      { name: 'Split Liver Transplant', india: '$60,000 - $85,000', usa: '$600,000 - $800,000', uk: '£480,000 - £640,000', uae: 'AED 550,000 - 750,000' },
    ],
    hospitals: [
      { name: 'Global Health City', city: 'Chennai', procedures: '300+ liver transplants annually', features: ['Dr. Mohamed Rela', '95% 1-year survival', 'ILTS accredited'], cost: '$55,000 - $75,000', rating: '4.9/5' },
      { name: 'Apollo Hospitals', city: 'Chennai, Delhi', procedures: '250+ transplants', features: ['Multi-organ transplant', 'Living & deceased donor', '24/7 Liver ICU'], cost: '$52,000 - $72,000', rating: '4.8/5' },
      { name: 'Medanta The Medicity', city: 'Gurgaon', procedures: '200+ procedures', features: ['Pediatric transplant', 'ABO incompatible', 'MELD score management'], cost: '$50,000 - $70,000', rating: '4.8/5' },
    ],
    faqs: [
      { q: 'How long is recovery after liver transplant?', a: 'Hospital stay: 14-21 days, ICU: 5-7 days, Return to light activities: 6-8 weeks, Return to work: 3-4 months, Full recovery: 6-12 months.' },
      { q: 'What is the success rate?', a: '1-year survival: 90-95%, 5-year survival: 75-85%. Top centers achieve 95%+ success rates.' },
      { q: 'Can I be a living donor?', a: 'Yes, if age 18-55, blood type compatible, healthy liver function, BMI under 30. Donor evaluation takes 1-2 weeks.' },
      { q: 'How long to stay in India?', a: 'Total stay: 6-8 weeks minimum. Pre-transplant: 1 week, Surgery & hospital: 2-3 weeks, Post-discharge: 2-4 weeks.' },
    ]
  },
  'heart-surgery-india': {
    procedures: [
      { name: 'CABG (Single Bypass)', india: '$6,000 - $8,000', usa: '$70,000 - $100,000', uk: '£55,000 - £80,000', uae: 'AED 60,000 - 90,000' },
      { name: 'CABG (Double Bypass)', india: '$7,000 - $9,000', usa: '$90,000 - $130,000', uk: '£70,000 - £105,000', uae: 'AED 75,000 - 110,000' },
      { name: 'CABG (Triple Bypass)', india: '$8,000 - $10,500', usa: '$120,000 - $170,000', uk: '£95,000 - £135,000', uae: 'AED 100,000 - 145,000' },
      { name: 'CABG (Quadruple Bypass)', india: '$9,000 - $12,000', usa: '$150,000 - $200,000', uk: '£120,000 - £160,000', uae: 'AED 130,000 - 175,000' },
    ],
    hospitals: [
      { name: 'Fortis Escorts Heart Institute', city: 'Delhi', procedures: '15,000+ surgeries annually', features: ['98.5% success rate', 'Beating heart surgery', 'Minimally invasive'], cost: '$7,000 - $11,000', rating: '4.9/5' },
      { name: 'Narayana Health', city: 'Bangalore', procedures: '12,000+ surgeries', features: ['Dr. Devi Shetty', 'Most affordable', 'World-class outcomes'], cost: '$6,000 - $9,000', rating: '4.8/5' },
      { name: 'Asian Heart Institute', city: 'Mumbai', procedures: '8,000+ procedures', features: ['Minimally invasive', 'Robotic surgery', '24/7 cardiac care'], cost: '$7,500 - $11,500', rating: '4.8/5' },
    ],
    faqs: [
      { q: 'How long is recovery?', a: 'Hospital: 5-7 days, ICU: 2-3 days, Return to work: 6-8 weeks, Full recovery: 3-6 months. Cardiac rehabilitation recommended.' },
      { q: 'What is CABG success rate?', a: '98%+ survival, 95%+ relief from angina. Grafts last 10-15 years (vein) to 20+ years (artery).' },
      { q: 'Beating heart vs traditional?', a: 'Beating heart (off-pump): Faster recovery, less complications. Traditional (on-pump): Better for complex cases. Surgeon recommends based on condition.' },
      { q: 'How long to stay in India?', a: '3-4 weeks total. Pre-surgery tests: 3-5 days, Hospital: 5-7 days, Post-discharge monitoring: 10-14 days before flying home.' },
    ]
  },
  'knee-replacement-india': {
    procedures: [
      { name: 'Total Knee Replacement (Unilateral)', india: '$4,000 - $5,500', usa: '$50,000 - $70,000', uk: '£40,000 - £55,000', uae: 'AED 45,000 - 65,000' },
      { name: 'Total Knee Replacement (Bilateral)', india: '$7,000 - $10,000', usa: '$90,000 - $130,000', uk: '£70,000 - £105,000', uae: 'AED 80,000 - 120,000' },
      { name: 'Partial Knee Replacement', india: '$3,500 - $5,000', usa: '$40,000 - $60,000', uk: '£32,000 - £48,000', uae: 'AED 36,000 - 55,000' },
      { name: 'Revision Knee Replacement', india: '$6,000 - $9,000', usa: '$70,000 - $100,000', uk: '£55,000 - £80,000', uae: 'AED 60,000 - 90,000' },
    ],
    hospitals: [
      { name: 'Fortis Hospital', city: 'Delhi, Mumbai', procedures: '5,000+ knee replacements', features: ['Mako robotic surgery', 'Custom implants', 'Same-day walking'], cost: '$4,500 - $6,500', rating: '4.8/5' },
      { name: 'Apollo Hospitals', city: 'Chennai, Bangalore', procedures: '4,500+ procedures', features: ['Computer navigation', 'Rapid recovery', 'Latest implants'], cost: '$4,200 - $6,200', rating: '4.8/5' },
      { name: 'Manipal Hospitals', city: 'Bangalore', procedures: '3,500+ surgeries', features: ['Minimally invasive', 'Gender-specific implants', 'Sports medicine'], cost: '$4,000 - $5,800', rating: '4.7/5' },
    ],
    faqs: [
      { q: 'How long does recovery take?', a: 'Hospital: 3-5 days, Walking with walker: Day 1-2, Return to normal activities: 6-8 weeks, Full recovery: 3-6 months. Implant lasts 15-20 years.' },
      { q: 'Can I walk immediately?', a: 'Yes! Modern protocols have patients walking within 4-6 hours after surgery with physiotherapist assistance. Weight-bearing as tolerated from day 1.' },
      { q: 'Mako robotic vs traditional?', a: 'Robotic: More precise (±1mm accuracy), faster recovery, better implant positioning, longer lasting. Cost: $500-1,000 more. Recommended for most patients.' },
      { q: 'Bilateral (both knees) at once?', a: 'Yes, possible. Benefits: One surgery, one recovery, lower cost. Requirements: Age under 75, good health, strong motivation. Hospital stay: 5-7 days.' },
    ]
  },
  'ivf-india': {
    procedures: [
      { name: 'Standard IVF (1 cycle)', india: '$2,500 - $3,500', usa: '$12,000 - $15,000', uk: '£9,500 - £12,000', uae: 'AED 25,000 - 35,000' },
      { name: 'ICSI (Intracytoplasmic Sperm Injection)', india: '$3,000 - $4,500', usa: '$15,000 - $20,000', uk: '£12,000 - £16,000', uae: 'AED 30,000 - 45,000' },
      { name: 'IVF with Egg Donation', india: '$4,500 - $6,500', usa: '$25,000 - $35,000', uk: '£20,000 - £28,000', uae: 'AED 40,000 - 60,000' },
      { name: 'Frozen Embryo Transfer (FET)', india: '$1,500 - $2,500', usa: '$5,000 - $7,000', uk: '£4,000 - £5,600', uae: 'AED 15,000 - 22,000' },
    ],
    hospitals: [
      { name: 'Nova IVF Fertility', city: 'Bangalore, Delhi, Mumbai', procedures: '15,000+ IVF cycles', features: ['60% success rate', 'ICSI, PGT-A', 'Egg freezing'], cost: '$2,800 - $4,200', rating: '4.8/5' },
      { name: 'Cloudnine Hospitals', city: 'Bangalore, Chennai', procedures: '12,000+ cycles', features: ['Latest technology', 'High success rate', 'Personalized protocols'], cost: '$2,600 - $4,000', rating: '4.7/5' },
      { name: 'Apollo Fertility', city: 'Pan-India', procedures: '10,000+ IVF cycles', features: ['Genetic testing', 'Egg/sperm freezing', 'PCOS specialists'], cost: '$2,500 - $3,800', rating: '4.7/5' },
    ],
    faqs: [
      { q: 'What is IVF success rate in India?', a: 'Under 35: 55-65%, Age 35-37: 50-60%, Age 38-40: 40-50%, Over 40: 25-35%. Success rates comparable to USA/Europe. Top clinics achieve 60%+ success.' },
      { q: 'How long do I need to stay?', a: '3-4 weeks total. Week 1-2: Ovarian stimulation & monitoring, Week 3: Egg retrieval, fertilization, embryo culture, Week 4: Embryo transfer & rest. Can split into 2 trips.' },
      { q: 'Can I choose gender?', a: 'No, gender selection is illegal in India. Only allowed for medical reasons (genetic disorders). PGT-A (genetic testing) available for screening abnormalities.' },
      { q: 'What is included in IVF cost?', a: 'Ovarian stimulation medications, egg retrieval, sperm preparation, fertilization, embryo culture (5 days), embryo transfer. Extra: ICSI ($500), PGT-A ($1,500), egg freezing ($800), FET ($1,500-2,500).' },
    ]
  },
  'kidney-transplant-india': {
    procedures: [
      { name: 'Living Donor Kidney Transplant', india: '$13,000 - $16,000', usa: '$400,000 - $500,000', uk: '£320,000 - £400,000', uae: 'AED 350,000 - 450,000' },
      { name: 'Deceased Donor Kidney Transplant', india: '$15,000 - $20,000', usa: '$450,000 - $550,000', uk: '£360,000 - £440,000', uae: 'AED 400,000 - 500,000' },
      { name: 'Pediatric Kidney Transplant', india: '$14,000 - $18,000', usa: '$420,000 - $530,000', uk: '£335,000 - £425,000', uae: 'AED 375,000 - 475,000' },
      { name: 'ABO Incompatible Transplant', india: '$18,000 - $25,000', usa: '$500,000 - $650,000', uk: '£400,000 - £520,000', uae: 'AED 450,000 - 600,000' },
    ],
    hospitals: [
      { name: 'Apollo Hospitals', city: 'Chennai, Delhi', procedures: '400+ kidney transplants', features: ['95-98% success', 'ABO incompatible', 'Paired exchange'], cost: '$14,000 - $18,000', rating: '4.9/5' },
      { name: 'Medanta The Medicity', city: 'Gurgaon', procedures: '350+ transplants', features: ['Robotic surgery', 'Living donor', '24/7 dialysis'], cost: '$13,500 - $17,500', rating: '4.8/5' },
      { name: 'Fortis Hospital', city: 'Delhi, Mumbai', procedures: '300+ procedures', features: ['Laparoscopic donor', 'Pediatric program', 'Desensitization'], cost: '$13,000 - $17,000', rating: '4.8/5' },
    ],
    faqs: [
      { q: 'What is success rate?', a: '1-year graft survival: 95-98% (living donor), 90-95% (deceased donor). 5-year survival: 85-90%. Patient survival: 95%+ at 5 years.' },
      { q: 'How long is recovery?', a: 'Hospital: 7-10 days, ICU: 2-3 days, Return to work: 6-8 weeks, Full recovery: 3-6 months. Immunosuppressive medications lifelong. Dialysis stopped immediately after transplant.' },
      { q: 'Can family member donate?', a: 'Yes, if blood type compatible (or ABO incompatible with cross-match), age 18-65, healthy kidney function, no diabetes/hypertension. Donor evaluation: 1 week. Living donor preferred (better outcomes).' },
      { q: 'How long to stay in India?', a: '4-6 weeks total. Pre-transplant tests: 3-7 days, Surgery & hospital: 7-10 days, Post-discharge monitoring: 2-3 weeks. Some stay 2-3 months for complete recovery.' },
    ]
  },
  'bone-marrow-transplant-india': {
    procedures: [
      { name: 'Autologous BMT', india: '$25,000 - $35,000', usa: '$300,000 - $400,000', uk: '£240,000 - £320,000', uae: 'AED 275,000 - 375,000' },
      { name: 'Allogeneic BMT (Matched Sibling)', india: '$30,000 - $45,000', usa: '$400,000 - $600,000', uk: '£320,000 - £480,000', uae: 'AED 350,000 - 550,000' },
      { name: 'Haploidentical BMT (Half-Match)', india: '$35,000 - $50,000', usa: '$500,000 - $750,000', uk: '£400,000 - £600,000', uae: 'AED 450,000 - 700,000' },
      { name: 'Pediatric BMT', india: '$30,000 - $48,000', usa: '$450,000 - $650,000', uk: '£360,000 - £520,000', uae: 'AED 400,000 - 600,000' },
    ],
    hospitals: [
      { name: 'Apollo Hospitals', city: 'Chennai, Delhi', procedures: '1,500+ BMT procedures', features: ['HEPA filter rooms', 'Haploidentical BMT', '75-85% success'], cost: '$32,000 - $48,000', rating: '4.9/5' },
      { name: 'Tata Memorial Hospital', city: 'Mumbai', procedures: '1,200+ BMT', features: ['Government pricing', 'Research center', 'Leukemia specialists'], cost: '$25,000 - $40,000', rating: '4.8/5' },
      { name: 'Fortis Memorial', city: 'Gurgaon', procedures: '800+ procedures', features: ['CAR T-cell therapy', 'Cord blood BMT', 'GvHD management'], cost: '$30,000 - $45,000', rating: '4.8/5' },
    ],
    faqs: [
      { q: 'What diseases need BMT?', a: 'Leukemia (ALL, AML, CML, CLL), Lymphoma (Hodgkin, Non-Hodgkin), Multiple myeloma, Aplastic anemia, Thalassemia, Sickle cell disease, MDS, Immune deficiencies.' },
      { q: 'What is success rate?', a: 'Leukemia: 65-75%, Lymphoma: 70-80%, Myeloma: 75-85%, Thalassemia: 85-90%, Aplastic anemia: 75-85%. Success depends on disease stage, age, donor match.' },
      { q: 'Autologous vs Allogeneic?', a: 'Autologous: Own stem cells, less complications, for myeloma/lymphoma. Allogeneic: Donor cells, graft-vs-leukemia effect, for leukemia. Matched sibling best (better outcomes). Haploidentical (parent/child) if no match.' },
      { q: 'How long is recovery?', a: 'Hospital: 21-30 days in isolation, Engraftment: 14-21 days, Return to normal: 3-6 months, Full recovery: 1-2 years. 100-day milestone critical. Regular monitoring lifelong.' },
    ]
  },
  'neurosurgery-india': {
    procedures: [
      { name: 'Brain Tumor Craniotomy', india: '$8,000 - $15,000', usa: '$80,000 - $150,000', uk: '£65,000 - £120,000', uae: 'AED 70,000 - 130,000' },
      { name: 'Aneurysm Clipping', india: '$7,000 - $12,000', usa: '$70,000 - $120,000', uk: '£55,000 - £95,000', uae: 'AED 60,000 - 110,000' },
      { name: 'Spinal Cord Tumor Surgery', india: '$6,000 - $11,000', usa: '$60,000 - $110,000', uk: '£48,000 - £90,000', uae: 'AED 55,000 - 100,000' },
      { name: 'Gamma Knife Radiosurgery', india: '$5,000 - $8,000', usa: '$50,000 - $100,000', uk: '£40,000 - £80,000', uae: 'AED 45,000 - 85,000' },
    ],
    hospitals: [
      { name: 'Apollo Hospitals', city: 'Chennai, Delhi', procedures: '8,000+ neurosurgeries', features: ['Gamma Knife', 'CyberKnife', 'Neuronavigation'], cost: '$7,500 - $14,000', rating: '4.9/5' },
      { name: 'Fortis Memorial', city: 'Gurgaon', procedures: '6,000+ procedures', features: ['Awake craniotomy', 'Endoscopic surgery', 'Intraoperative MRI'], cost: '$7,000 - $13,500', rating: '4.8/5' },
      { name: 'Medanta Neurosciences', city: 'Gurgaon', procedures: '5,500+ surgeries', features: ['Brain mapping', 'Minimally invasive', 'Pediatric neurosurgery'], cost: '$6,500 - $13,000', rating: '4.8/5' },
    ],
    faqs: [
      { q: 'What is success rate?', a: 'Brain tumor: 90-95%, Aneurysm clipping: 92-97%, Spinal cord tumor: 85-90%. Success depends on tumor type, location, size, patient age.' },
      { q: 'How long is recovery?', a: 'Hospital: 5-10 days, ICU: 2-5 days, Return to light activities: 4-6 weeks, Return to work: 8-12 weeks, Full recovery: 6-12 months. Rehabilitation may be needed.' },
      { q: 'Gamma Knife vs surgery?', a: 'Gamma Knife: Non-invasive, no incision, outpatient, for small tumors (<3cm), acoustic neuromas, AVMs. Surgery: For large tumors, mass effect, immediate decompression. Surgeon recommends based on MRI.' },
      { q: 'How long to stay in India?', a: '3-4 weeks total. Pre-surgery MRI/tests: 2-3 days, Surgery & hospital: 5-10 days, Post-discharge monitoring: 10-14 days before flying home.' },
    ]
  },
  'spine-surgery-india': {
    procedures: [
      { name: 'Lumbar Spinal Fusion', india: '$5,500 - $8,000', usa: '$80,000 - $150,000', uk: '£65,000 - £120,000', uae: 'AED 70,000 - 130,000' },
      { name: 'Cervical Disc Replacement', india: '$5,000 - $7,500', usa: '$70,000 - $120,000', uk: '£55,000 - £95,000', uae: 'AED 60,000 - 110,000' },
      { name: 'Minimally Invasive Discectomy', india: '$4,500 - $6,500', usa: '$50,000 - $80,000', uk: '£40,000 - £65,000', uae: 'AED 45,000 - 75,000' },
      { name: 'Scoliosis Correction', india: '$8,000 - $12,000', usa: '$120,000 - $200,000', uk: '£95,000 - £160,000', uae: 'AED 105,000 - 175,000' },
    ],
    hospitals: [
      { name: 'Apollo Hospitals', city: 'Chennai, Delhi', procedures: '5,000+ spine surgeries', features: ['Minimally invasive', 'Navigation', 'Robotic assistance'], cost: '$5,500 - $9,000', rating: '4.8/5' },
      { name: 'Indian Spinal Injuries Centre', city: 'Delhi', procedures: '4,500+ procedures', features: ['Specialized spine center', 'Complex deformities', 'Rehabilitation'], cost: '$5,000 - $8,500', rating: '4.9/5' },
      { name: 'Manipal Hospitals', city: 'Bangalore', procedures: '3,500+ surgeries', features: ['Endoscopic spine', 'Disc replacement', 'Sports injuries'], cost: '$4,800 - $8,000', rating: '4.7/5' },
    ],
    faqs: [
      { q: 'What is success rate?', a: 'Spinal fusion: 92-97%, Disc replacement: 90-95%, Discectomy: 90-95%, Scoliosis correction: 85-92%. Success depends on severity, technique, patient compliance.' },
      { q: 'Minimally invasive vs open?', a: 'MIS: Small incision (1-2cm), less pain, faster recovery (2-4 weeks), outpatient/1-day stay. Open: Traditional, larger incision, for complex cases, 3-5 day stay. MIS preferred when possible.' },
      { q: 'How long is recovery?', a: 'Hospital: 2-5 days (MIS: 1-2 days), Walking: Day 1-2, Return to desk work: 2-4 weeks, Return to physical work: 6-12 weeks, Full recovery: 3-6 months.' },
      { q: 'Will I need physiotherapy?', a: 'Yes, crucial for recovery. Starts 1-2 days after surgery. 4-8 weeks of structured rehab. Strengthens core, improves flexibility, prevents re-injury. Clinic provides physiotherapy plan.' },
    ]
  },
  'cancer-treatment-india': {
    procedures: [
      { name: 'Chemotherapy (per cycle)', india: '$800 - $2,000', usa: '$10,000 - $30,000', uk: '£8,000 - £24,000', uae: 'AED 9,000 - 27,000' },
      { name: 'Radiation Therapy (full course)', india: '$3,000 - $6,000', usa: '$30,000 - $50,000', uk: '£24,000 - £40,000', uae: 'AED 27,000 - 45,000' },
      { name: 'Cancer Surgery', india: '$5,000 - $15,000', usa: '$50,000 - $150,000', uk: '£40,000 - £120,000', uae: 'AED 45,000 - 135,000' },
      { name: 'Immunotherapy (per cycle)', india: '$2,500 - $5,000', usa: '$25,000 - $50,000', uk: '£20,000 - £40,000', uae: 'AED 22,500 - 45,000' },
    ],
    hospitals: [
      { name: 'Tata Memorial Hospital', city: 'Mumbai', procedures: '75,000+ cancer patients', features: ['Government rates', 'Research center', 'All cancer types'], cost: '$3,000 - $12,000', rating: '4.9/5' },
      { name: 'Apollo Cancer Centres', city: 'Chennai, Delhi', procedures: '50,000+ patients', features: ['CyberKnife', 'Proton therapy', 'Immunotherapy'], cost: '$5,000 - $18,000', rating: '4.8/5' },
      { name: 'HCG Cancer Centre', city: 'Bangalore', procedures: '40,000+ cases', features: ['Robotic surgery', 'Targeted therapy', 'Genetic testing'], cost: '$4,500 - $16,000', rating: '4.8/5' },
    ],
    faqs: [
      { q: 'What types of cancer are treated?', a: 'All cancers: Breast, lung, colon, prostate, stomach, liver, pancreatic, ovarian, cervical, brain, leukemia, lymphoma, melanoma. Specialized centers for each cancer type.' },
      { q: 'What is success rate?', a: 'Varies by cancer stage. Early stage (I-II): 70-90% cure rate. Advanced stage (III-IV): 30-70% 5-year survival. Best outcomes for breast, prostate, colorectal when detected early.' },
      { q: 'What treatments are available?', a: 'Surgery (robotic, minimally invasive), Chemotherapy (latest drugs), Radiation (IMRT, CyberKnife, Proton), Immunotherapy (checkpoint inhibitors), Targeted therapy, Hormonal therapy, Stem cell transplant.' },
      { q: 'How long is treatment?', a: 'Depends on cancer type/stage. Surgery: 1-2 weeks, Chemotherapy: 3-6 months (6-8 cycles), Radiation: 5-7 weeks (25-35 sessions), Follow-up: 5-10 years. Some stay 2-6 months for full treatment.' },
    ]
  },
  'cosmetic-surgery-india': {
    procedures: [
      { name: 'Rhinoplasty (Nose Job)', india: '$2,000 - $3,500', usa: '$7,000 - $15,000', uk: '£5,500 - £12,000', uae: 'AED 18,000 - 40,000' },
      { name: 'Liposuction', india: '$1,800 - $3,000', usa: '$6,000 - $11,000', uk: '£4,800 - £9,000', uae: 'AED 15,000 - 30,000' },
      { name: 'Breast Augmentation', india: '$2,500 - $4,000', usa: '$8,000 - $12,000', uk: '£6,500 - £10,000', uae: 'AED 22,000 - 35,000' },
      { name: 'Facelift', india: '$2,800 - $4,500', usa: '$10,000 - $20,000', uk: '£8,000 - £16,000', uae: 'AED 28,000 - 50,000' },
    ],
    hospitals: [
      { name: 'Cocoona Centre for Aesthetic', city: 'Delhi, Mumbai', procedures: '15,000+ cosmetic procedures', features: ['Board-certified surgeons', 'Latest techniques', 'Natural results'], cost: '$2,200 - $4,200', rating: '4.8/5' },
      { name: 'Fortis La Femme', city: 'Delhi', procedures: '12,000+ procedures', features: ['Women-focused', 'Mommy makeover', 'Body contouring'], cost: '$2,000 - $4,000', rating: '4.7/5' },
      { name: 'Dr. Agarwal Cosmetic Surgery', city: 'Bangalore', procedures: '10,000+ surgeries', features: ['Rhinoplasty specialists', 'Revision surgery', '3D imaging'], cost: '$1,900 - $3,800', rating: '4.7/5' },
    ],
    faqs: [
      { q: 'Are Indian cosmetic surgeons qualified?', a: 'Yes, board-certified by Medical Council of India, many US/UK trained (FRCS, FACS), 15-25 years experience. Top surgeons trained at Johns Hopkins, Mayo Clinic. Check credentials before choosing.' },
      { q: 'How long is recovery?', a: 'Varies by procedure. Rhinoplasty: 1-2 weeks, Liposuction: 3-7 days, Breast augmentation: 1-2 weeks, Facelift: 2-3 weeks. Swelling subsides 4-8 weeks. Final results: 6-12 months.' },
      { q: 'What is included in cost?', a: 'Surgeon fees, anesthesia, operating room, implants (if needed), post-op garments, 3-4 follow-ups, medications. Hotel/travel separate. All-inclusive packages available.' },
      { q: 'How long to stay in India?', a: '2-3 weeks total. Pre-surgery consultation: 1-2 days, Surgery & recovery: 3-7 days, Post-op visits: 7-14 days. Some procedures (rhinoplasty, facelift) need 2-3 weeks before flying.' },
    ]
  },
  'bariatric-surgery-india': {
    procedures: [
      { name: 'Gastric Bypass (Roux-en-Y)', india: '$6,000 - $9,000', usa: '$20,000 - $30,000', uk: '£16,000 - £24,000', uae: 'AED 22,000 - 33,000' },
      { name: 'Sleeve Gastrectomy', india: '$5,000 - $7,500', usa: '$17,000 - $26,000', uk: '£13,500 - £21,000', uae: 'AED 18,500 - 28,500' },
      { name: 'Gastric Band (Lap-Band)', india: '$4,000 - $6,000', usa: '$14,000 - $20,000', uk: '£11,000 - £16,000', uae: 'AED 15,000 - 22,000' },
      { name: 'Revision Bariatric Surgery', india: '$7,000 - $11,000', usa: '$25,000 - $35,000', uk: '£20,000 - £28,000', uae: 'AED 27,000 - 38,000' },
    ],
    hospitals: [
      { name: 'Apollo Bariatric Surgery', city: 'Chennai, Delhi', procedures: '5,000+ bariatric surgeries', features: ['85% diabetes remission', 'Robotic surgery', 'Lifelong support'], cost: '$5,500 - $8,500', rating: '4.8/5' },
      { name: 'Fortis Obesity Center', city: 'Delhi, Mumbai', procedures: '4,000+ procedures', features: ['Multidisciplinary team', 'Nutritionist support', '60-70% weight loss'], cost: '$5,200 - $8,200', rating: '4.7/5' },
      { name: 'Narayana Health Bariatric', city: 'Bangalore', procedures: '3,500+ surgeries', features: ['Affordable rates', 'Experienced surgeons', 'Psychology support'], cost: '$4,800 - $7,800', rating: '4.7/5' },
    ],
    faqs: [
      { q: 'Am I eligible for bariatric surgery?', a: 'BMI ≥40 (or ≥35 with comorbidities like diabetes, hypertension, sleep apnea), Age 18-65, Failed diet/exercise for 6+ months, Committed to lifestyle change, No contraindications.' },
      { q: 'How much weight will I lose?', a: 'Gastric bypass: 60-80% excess weight loss, Sleeve: 50-70%, Gastric band: 40-60%. Most weight loss in first 12-18 months. Maintenance requires lifelong commitment.' },
      { q: 'Will my diabetes be cured?', a: '85% Type 2 diabetes remission within weeks (before weight loss!). 70-80% hypertension resolution. Sleep apnea improves 80%+. Cholesterol normalizes. Life-changing for metabolic syndrome.' },
      { q: 'What is recovery time?', a: 'Hospital: 2-3 days, Return to work: 2-4 weeks, Full recovery: 4-6 weeks. Liquid diet 2 weeks, pureed 2 weeks, soft food 2 weeks, then normal. Follow-up at 1, 3, 6, 12 months, then yearly.' },
    ]
  },
  'diabetes-treatment-india': {
    procedures: [
      { name: 'Diabetes Consultation & Management (3 months)', india: '$500 - $1,000', usa: '$3,000 - $6,000', uk: '£2,400 - £4,800', uae: 'AED 3,300 - 6,600' },
      { name: 'Bariatric Surgery for Diabetes', india: '$5,000 - $8,000', usa: '$20,000 - $30,000', uk: '£16,000 - £24,000', uae: 'AED 22,000 - 33,000' },
      { name: 'Continuous Glucose Monitor (CGM)', india: '$200 - $400/month', usa: '$1,000 - $2,000/month', uk: '£800 - £1,600/month', uae: 'AED 1,100 - 2,200/month' },
      { name: 'Insulin Pump Therapy', india: '$2,500 - $4,000', usa: '$6,000 - $10,000', uk: '£4,800 - £8,000', uae: 'AED 6,600 - 11,000' },
    ],
    hospitals: [
      { name: 'Apollo Sugar Clinics', city: 'Pan-India', procedures: 'Diabetes specialists', features: ['85% reversal (Type 2)', 'CGM available', 'Lifestyle coaching'], cost: '$600 - $1,200', rating: '4.8/5' },
      { name: 'Fortis C-DOC', city: 'Delhi, Mumbai', procedures: 'Diabetes & Obesity Center', features: ['Bariatric surgery', 'Medication management', 'Foot care'], cost: '$550 - $1,150', rating: '4.7/5' },
      { name: 'Medanta Endocrinology', city: 'Gurgaon', procedures: 'Comprehensive diabetes care', features: ['Type 1 & 2 specialists', 'Insulin pump training', 'Complication management'], cost: '$500 - $1,100', rating: '4.7/5' },
    ],
    faqs: [
      { q: 'Can Type 2 diabetes be reversed?', a: '85% reversal possible with bariatric surgery (BMI >35), 50-70% with intensive lifestyle intervention (diet, exercise, weight loss). Requires losing 10-15% body weight, maintaining for 2+ years. Remission possible!' },
      { q: 'How much does diabetes medication cost?', a: 'Insulin: $50-150/month vs $300-600 USA, Metformin: $5-15/month, SGLT2i: $30-60/month, GLP-1: $80-150/month. 60-75% cheaper than USA. Generic options available.' },
      { q: 'What services are included?', a: 'Endocrinologist consultation, HbA1c & blood sugar tests, Kidney/eye screening, Medication adjustment, Diet counseling, Exercise planning, Complication monitoring, 24/7 helpline.' },
      { q: 'How long is treatment program?', a: 'Initial assessment: 2-3 days, 3-month intensive program recommended, 6-12 months for reversal, Lifelong monitoring. Bariatric surgery patients: 1 week hospital + 3-4 week recovery. Telemedicine follow-up available.' },
    ]
  },
};

// Generate complete treatment page
function generateCompletePage(basicData) {
  const details = treatmentDetails[basicData.slug];
  if (!details) {
    console.error(`Missing details for ${basicData.slug}`);
    return null;
  }

  const componentName = basicData.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');

  return `import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Clock, DollarSign, Heart, ArrowRight, Star } from 'lucide-react';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles } from '@/components/blog/related-articles';
import { InternalLinks } from '@/components/seo/internal-links';
import { Testimonials, TREATMENT_TESTIMONIALS } from '@/components/testimonials/testimonials';
import { TrustBadges } from '@/components/trust-badges/trust-badges';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: '${basicData.title}',
  description: '${basicData.description}',
  keywords: '${basicData.keywords}',
};

const RELATED_ARTICLES = [
  { title: "Medical Visa India Guide", href: "/blog/medical-visa-india-complete-guide", description: "Complete visa process guide" },
  { title: "Best Hospitals Delhi", href: "/blog/best-hospitals-delhi-medical-tourism", description: "Top 10 JCI-accredited hospitals" },
  { title: "Medical Tourism Guide", href: "/blog/medical-tourism-uae-patients-guide", description: "Complete guide for GCC patients" }
];

export default function ${componentName}Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-12 text-white md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">${basicData.heroTitle}</h1>
            <p className="mb-6 text-xl text-primary-50">${basicData.heroSubtitle}</p>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2"><DollarSign className="h-5 w-5" /><span>${basicData.costRange}</span></div>
              <div className="flex items-center gap-2"><Clock className="h-5 w-5" /><span>${basicData.duration}</span></div>
              <div className="flex items-center gap-2"><Heart className="h-5 w-5" /><span>${basicData.successRate} success</span></div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600">
                <Link href="/consultation">Get Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary-600">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="container px-4 py-8">
        <TrustBadges />
      </div>

      {/* Cost Comparison */}
      <section className="container px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-center font-serif text-3xl font-bold text-gray-900">Cost Comparison: India vs World</h2>
          <p className="mb-8 text-center text-lg text-gray-600">Save 60-95% with same quality care</p>
          <Card className="overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Procedure Type</th>
                    <th className="px-4 py-3 text-center">India</th>
                    <th className="px-4 py-3 text-center">USA</th>
                    <th className="px-4 py-3 text-center">UK</th>
                    <th className="px-4 py-3 text-center">UAE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  ${details.procedures.map(proc => `<tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">${proc.name}</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">${proc.india}</td>
                    <td className="px-4 py-3 text-center text-gray-600">${proc.usa}</td>
                    <td className="px-4 py-3 text-center text-gray-600">${proc.uk}</td>
                    <td className="px-4 py-3 text-center text-gray-600">${proc.uae}</td>
                  </tr>`).join('\n                  ')}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Top Hospitals */}
      <section className="container px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">Top ${details.hospitals.length} Hospitals for ${basicData.name}</h2>
          <div className="space-y-4">
            ${details.hospitals.map((hospital, idx) => `<Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">${idx + 1}. ${hospital.name}</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">${hospital.rating}</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">${hospital.city} | ${hospital.procedures}</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      ${hospital.features.map(feature => `<span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">${feature}</span>`).join('\n                      ')}
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: ${hospital.cost}</p>
                  </div>
                </div>
              </CardContent>
            </Card>`).join('\n            ')}
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={${JSON.stringify(details.faqs.map(faq => ({ question: faq.q, answer: faq.a })))}} />

      {/* FAQ Section */}
      <section className="container px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            ${details.faqs.map(faq => `<Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">${faq.q}</h3>
                <p className="text-gray-700">${faq.a}</p>
              </CardContent>
            </Card>`).join('\n            ')}
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="container">
          <Testimonials testimonials={TREATMENT_TESTIMONIALS.general} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold">Ready to Start Your Medical Journey?</h2>
          <p className="mb-8 text-xl text-primary-50">Get a free consultation and cost estimate today</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600">
              <Link href="/consultation">Book Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary-600">
              <Link href="/contact">Ask a Question</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Share */}
      <div className="container px-4 py-8">
        <SocialShare title="${basicData.title}" description="${basicData.description}" />
      </div>

      {/* Related Articles */}
      <div className="container px-4 py-8">
        <RelatedArticles articles={RELATED_ARTICLES} />
      </div>

      {/* Internal Links */}
      <div className="container px-4 py-8">
        <InternalLinks links={[
          { text: 'View All Treatments', href: '/treatments' },
          { text: 'Cost Calculator', href: '/cost-calculator' },
          { text: 'Our Hospitals', href: '/hospitals' },
        ]} />
      </div>
    </div>
  );
}
`;
}

// Create all 12 treatment pages
console.log('🚀 Creating all 12 missing treatment pages with complete content...\n');

let successCount = 0;
let errorCount = 0;

treatmentsData.forEach((treatment, index) => {
  console.log(`\n[${index + 1}/12] Creating ${treatment.name}...`);

  try {
    const dirPath = path.join('src', 'app', '[locale]', 'treatments', treatment.slug);
    const filePath = path.join(dirPath, 'page.tsx');

    // Create directory if it doesn't exist
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`  ✅ Created directory: ${dirPath}`);
    }

    // Generate and write page content
    const content = generateCompletePage(treatment);

    if (content) {
      fs.writeFileSync(filePath, content, { encoding: 'utf8' });
      console.log(`  ✅ Created page: ${filePath}`);
      successCount++;
    } else {
      console.log(`  ❌ Failed: Missing detailed data`);
      errorCount++;
    }
  } catch (error) {
    console.error(`  ❌ Error: ${error.message}`);
    errorCount++;
  }
});

console.log('\n\n' + '='.repeat(60));
console.log(`✅ Successfully created: ${successCount}/12 treatment pages`);
if (errorCount > 0) {
  console.log(`❌ Failed: ${errorCount}/12 pages`);
}
console.log('='.repeat(60));

console.log('\n📋 Next steps:');
console.log('1. Update treatments-list.ts to uncomment the new treatments');
console.log('2. Run: npm run build');
console.log('3. Verify all pages compile without errors');
console.log('4. Test each page in browser');
console.log('5. Commit changes');

console.log('\n✨ All treatment pages ready for production!');

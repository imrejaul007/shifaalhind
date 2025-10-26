/**
 * Automation Script: Add FAQ Schema to All 20 Blog Articles
 *
 * This script adds FAQ schema markup to all blog articles for rich snippets in Google.
 * It extracts existing FAQ sections and adds the FAQSchema component.
 */

const fs = require('fs');
const path = require('path');

// Article configurations with their FAQ data
const articles = [
  {
    name: 'heart-surgery-cost-comparison-india-vs-world',
    faqs: [
      { q: "How much does heart surgery cost in India vs USA?", a: "Heart bypass surgery costs $5,000-8,000 in India vs $70,000-150,000 in USA (93-95% savings). India offers JCI-accredited hospitals with experienced cardiac surgeons at a fraction of Western costs." },
      { q: "Are Indian hospitals safe for heart surgery?", a: "Yes. Top Indian hospitals like Apollo, Fortis, and Medanta have JCI/NABH accreditation, success rates of 98%+, and cardiac surgeons trained at Harvard, Cleveland Clinic, and Mayo Clinic." },
      { q: "How long do I need to stay in India for heart surgery?", a: "Typically 10-14 days total: 3-5 days pre-surgery (tests, consultation), 5-7 days post-surgery (hospital + recovery), plus 2-3 follow-up days." },
      { q: "What is included in the heart surgery package cost?", a: "Hospital stay, surgeon fees, anesthesia, ICU care, medications, pre/post-surgery tests, and 1-2 follow-up consultations. International coordinators and airport pickup often included." },
      { q: "Can I bring a family member for heart surgery?", a: "Yes, most packages allow 1 companion to stay with you. Medical attendant visa ($80) is easily obtained. Some hospitals provide free companion accommodation." }
    ]
  },
  {
    name: 'medical-tourism-india-uae-patients-guide',
    faqs: [
      { q: "How much can UAE patients save on treatment in India?", a: "60-80% savings on most procedures. Heart surgery: Save AED 220,000-260,000, Knee replacement: Save AED 44,000-52,000, IVF: Save AED 16,500-20,000 compared to Dubai/Abu Dhabi prices." },
      { q: "How do I get a medical visa for India from UAE?", a: "Apply online at indianvisaonline.gov.in ($80, 3-5 days). Need hospital invitation letter (Shifa AlHind provides FREE), passport copy, and photo. Visa on arrival available at Mumbai, Delhi, Bangalore, Chennai airports." },
      { q: "Which Indian cities are best for UAE medical tourists?", a: "Mumbai (3h flight from Dubai), Delhi (3.5h), Bangalore (4h), Chennai (4.5h). All have JCI-accredited hospitals, direct flights, and Arabic-speaking coordinators." },
      { q: "Do Indian hospitals have Arabic-speaking staff?", a: "Yes, top hospitals treating UAE patients have Arabic coordinators, interpreters available 24/7, halal food options, and prayer facilities. Many doctors speak basic Arabic." },
      { q: "Is travel insurance required for medical tourism?", a: "Recommended but not mandatory. Medical tourism insurance costs $50-200 for 2 weeks, covers post-procedure complications, emergency evacuation, and trip cancellation." }
    ]
  },
  {
    name: 'knee-replacement-cost-india-vs-world',
    faqs: [
      { q: "How much does knee replacement cost in India?", a: "Total knee replacement costs $4,000-7,000 in India vs $35,000-50,000 in USA (85-90% savings). Price includes hospital stay, surgery, high-quality implants (DePuy, Stryker), physiotherapy, and follow-up." },
      { q: "What knee implant brands are used in India?", a: "Top hospitals use international brands: DePuy (J&J), Stryker, Zimmer Biomet, and Smith & Nephew. Same implants used in USA/Europe with 15-20 year lifespan." },
      { q: "How long is recovery after knee replacement in India?", a: "Hospital stay: 3-5 days, India stay: 10-14 days total. Walk with assistance after 1-2 days, resume normal activities in 6-12 weeks. Physiotherapy starts day after surgery." },
      { q: "Are Indian orthopedic surgeons qualified?", a: "Yes. Top surgeons have 15-25 years experience, trained at Mayo Clinic, Johns Hopkins, Cleveland Clinic. Perform 200-500 knee replacements annually with 95-98% success rates." },
      { q: "Can I fly back home after knee replacement?", a: "Yes, safe to fly 10-14 days post-surgery with doctor clearance. Book aisle seat, do in-flight exercises, wear compression stockings. Follow-up via video call with surgeon." }
    ]
  },
  {
    name: 'ivf-fertility-treatment-india-complete-guide',
    faqs: [
      { q: "How much does IVF cost in India?", a: "Standard IVF cycle costs $2,500-4,000 in India vs $12,000-15,000 in USA (75-85% savings). ICSI: $3,000-4,500, Egg donation: $4,500-6,500, FET: $1,500-2,500." },
      { q: "What are IVF success rates in India?", a: "Under 35: 55-65%, Age 35-37: 50-60%, Age 38-40: 40-50%, Over 40: 25-35%. Comparable to USA/Europe. Top clinics like Nova IVF and Cloudnine achieve 60%+ success rates." },
      { q: "How long do I need to stay in India for IVF?", a: "3-4 weeks total: Week 1-2 (ovarian stimulation, monitoring), Week 3 (egg retrieval, fertilization, embryo culture), Week 4 (embryo transfer, rest). Can split into 2 trips if needed." },
      { q: "Can I choose gender through IVF in India?", a: "No, gender selection is illegal in India (Pre-Conception and Pre-Natal Diagnostic Techniques Act). Only allowed for medical reasons like genetic disorders. Focus is on healthy pregnancy." },
      { q: "What if my first IVF cycle fails in India?", a: "Most clinics offer discounted second cycle (20-30% off). Shared-risk programs available: Pay upfront for 3 cycles, get 70-80% refund if unsuccessful. Frozen embryos from first cycle reduce second cycle cost to $1,500-2,500." }
    ]
  },
  {
    name: 'how-to-choose-best-hospital-india-medical-tourism',
    faqs: [
      { q: "What accreditation should I look for in Indian hospitals?", a: "JCI (Joint Commission International) is gold standard for international patients. NABH (National Accreditation Board) is India's top certification. ISO 9001 certification also good. Look for all three." },
      { q: "How do I verify a surgeon's credentials in India?", a: "Check: Medical Council of India registration, fellowship training (FRCS, FACS), years of experience (15+), hospital affiliations, patient testimonials, and publications. Shifa AlHind pre-verifies all partner surgeons." },
      { q: "Should I choose a hospital or individual doctor first?", a: "Choose hospital first (JCI accreditation, specialization, infrastructure), then doctor within that hospital (experience, success rates, communication). Top hospitals have multiple excellent doctors." },
      { q: "What questions should I ask before choosing a hospital?", a: "Success rates for your procedure, complication rates, post-surgery care, international patient services, payment terms, what's included in package cost, cancellation policy, emergency protocols, and doctor availability." },
      { q: "Can Shifa AlHind help me choose the right hospital?", a: "Yes, we partner with 50+ JCI/NABH accredited hospitals. We analyze your medical condition, budget, preferred city, and match you with 2-3 best options. FREE consultation and unbiased recommendations." }
    ]
  },
  {
    name: 'cancer-treatment-cost-india-vs-world',
    faqs: [
      { q: "How much does cancer treatment cost in India?", a: "Chemotherapy: $500-1,500/cycle (vs $10,000-30,000 USA), Radiation: $3,000-6,000 (vs $50,000-100,000), Surgery: $5,000-15,000 (vs $50,000-150,000). Total savings: 70-90%." },
      { q: "Are Indian cancer hospitals as good as USA?", a: "Yes. Hospitals like Tata Memorial, Apollo Cancer Centre, and HCG have 85-92% early-stage cancer cure rates (comparable to USA's 88-95%). JCI-accredited with latest equipment (PET-CT, CyberKnife, immunotherapy)." },
      { q: "What types of cancer can be treated in India?", a: "All major cancers: Breast, lung, prostate, colorectal, blood (leukemia, lymphoma), brain, liver, kidney, ovarian, cervical, pancreatic. Specialized centers for pediatric cancer and rare cancers." },
      { q: "How long does cancer treatment take in India?", a: "Depends on type: Surgery (2-3 weeks total stay), Chemotherapy (6-12 cycles over 4-6 months, can do some cycles at home), Radiation (3-7 weeks daily treatment). Many patients split treatment into phases." },
      { q: "Can I get second opinion for cancer in India?", a: "Yes, most hospitals offer virtual second opinions ($100-300). Send medical records/scans for expert review by oncologists. Helps confirm diagnosis and explore treatment options before traveling." },
      { q: "What if I need ongoing treatment after returning home?", a: "Indian oncologists coordinate with your home country doctors. Get complete treatment plan, prescriptions for 3-6 months of medications, follow-up via video call, and send scans for remote monitoring." }
    ]
  },
  {
    name: 'dental-tourism-india-complete-guide',
    faqs: [
      { q: "How much do dental implants cost in India?", a: "Single implant: $400-800 (vs $3,000-6,000 USA, 85-90% savings). Full mouth reconstruction: $3,000-8,000 (vs $30,000-80,000 USA). Includes implant, abutment, crown, all consultations." },
      { q: "Are Indian dentists qualified for complex procedures?", a: "Yes. Top dentists have BDS/MDS degrees, 10-20 years experience, trained at NYU, UCLA, King's College London. Many are members of American Dental Association, International Congress of Oral Implantologists." },
      { q: "How long do I need to stay for dental treatment?", a: "Depends on procedure: Implants (5-7 days for temporary crowns, return after 3-4 months for permanent), Veneers (2-3 visits over 5-7 days), Root canal (1-2 days), Smile makeover (7-10 days)." },
      { q: "What dental materials are used in India?", a: "Same brands as USA/Europe: Straumann, Nobel Biocare (implants), 3M ESPE, IPS e.max (crowns/veneers), Dentsply Sirona (materials). FDA/CE certified materials with 10-25 year warranties." },
      { q: "Is dental work in India painful?", a: "No. Modern pain management with local anesthesia, laughing gas, IV sedation, or general anesthesia for complex procedures. Many clinics offer pain-free laser dentistry for gum treatments." },
      { q: "What if I have problems after returning home?", a: "Most clinics offer 1-5 year warranties on dental work. If issues arise, they'll coordinate with local dentist for repairs or offer free revision on return visit. Tele-dentistry follow-up available." }
    ]
  },
  {
    name: 'diabetes-treatment-india-guide',
    faqs: [
      { q: "Can diabetes be reversed in India?", a: "Type 2 diabetes can often be reversed (60-75% success with comprehensive programs). Programs combine: Personalized diet, exercise plans, medications, continuous glucose monitoring, and lifestyle coaching over 3-6 months." },
      { q: "How much does diabetes treatment cost in India?", a: "Initial assessment: $200-500, Insulin therapy: $50-150/month (vs $300-600 USA), CGM device: $200-400 (vs $1,000-2,000), Diabetes reversal program: $2,000-4,000 for 3 months (vs $10,000-20,000 USA)." },
      { q: "What is a diabetes reversal program?", a: "Intensive 3-6 month program to achieve HbA1c <6.5% without medications. Includes: Daily glucose monitoring, personalized meal plans, fitness coaching, medication tapering, weekly doctor consultations, and behavioral therapy." },
      { q: "Can bariatric surgery cure Type 2 diabetes?", a: "Yes, 85% of Type 2 patients achieve diabetes remission after bariatric surgery. Weight loss improves insulin sensitivity. Best for BMI >35 with diabetes or BMI >30 with complications." },
      { q: "Are Indian diabetes centers world-class?", a: "Yes. Centers like Dr. Mohan's Diabetes Specialities Centre (Chennai), Apollo Sugar Clinics, and Fortis C-DOC are internationally recognized. Use advanced technology (CGM, insulin pumps) and research-backed protocols." },
      { q: "Can I manage diabetes long-term after returning home?", a: "Yes. Get 6-12 month treatment plan, prescriptions for medications/insulin, diet/exercise plans. Follow-up via video call every 1-3 months. Send blood test results for remote monitoring and medication adjustments." },
      { q: "What's the difference between Type 1 and Type 2 diabetes management?", a: "Type 1 requires lifelong insulin (can't be reversed), focus on tight control with pumps/CGM. Type 2 may not need insulin initially, can be reversed with lifestyle changes, medications can be reduced/stopped. Both benefit from India's low-cost care." },
      { q: "Do Indian hospitals help with diabetic foot ulcers?", a: "Yes. Specialized wound care centers use advanced treatments: Hyperbaric oxygen therapy, negative pressure therapy, bioengineered skin grafts, and vascular surgery if needed. Success rate: 80-90% healing without amputation." }
    ]
  },
  {
    name: 'liver-transplant-india-cost-guide',
    faqs: [
      { q: "How much does liver transplant cost in India?", a: "Living donor transplant: $45,000-70,000 (vs $400,000-800,000 USA, 85-90% savings). Deceased donor: $35,000-55,000. Includes all surgery, 30-day hospital stay, medications, and 3-6 month follow-up." },
      { q: "What is the success rate of liver transplant in India?", a: "1-year survival: 85-90% (living donor), 80-85% (deceased donor). 5-year survival: 75-80%. Comparable to USA/Europe. Top centers like Global Health City perform 200+ transplants/year." },
      { q: "How long is the waiting time for liver transplant in India?", a: "Living donor: 4-8 weeks (once donor approved). Deceased donor: 6-18 months depending on blood type, urgency. Many international patients bring living donor (family member) for faster treatment." },
      { q: "Can a family member be a living donor?", a: "Yes. Must be 18-55 years old, blood type compatible, healthy (BMI <30, no chronic diseases), and pass medical/psychological evaluation. Donor surgery is safe with <1% risk." },
      { q: "How long do I need to stay in India after liver transplant?", a: "3-4 months total: 3-4 weeks in hospital (ICU + ward), 8-10 weeks nearby for monitoring, follow-up appointments, medication adjustments. Can return home after 12-16 weeks with doctor approval." },
      { q: "What medications are needed after liver transplant?", a: "Immunosuppressants (tacrolimus, mycophenolate) for life to prevent rejection. Cost: $200-400/month in India (vs $2,000-3,000 USA). First 3-6 months of medications included in package price." },
      { q: "What if liver rejection occurs after returning home?", a: "Indian transplant team coordinates with your home hepatologist. Most rejection episodes manageable with medication adjustments. Emergency video consultation available 24/7. Serious cases may need return to India." },
      { q: "Are deceased donor organs available for international patients?", a: "No, deceased donor organs prioritized for Indian citizens per THOA (Transplantation of Human Organs Act). International patients must bring living donor or wait long periods. Living donor transplant is standard for medical tourists." }
    ]
  },
  {
    name: 'spine-surgery-india-cost-hospitals',
    faqs: [
      { q: "How much does spine surgery cost in India?", a: "Lumbar discectomy: $4,000-7,000 (vs $50,000-100,000 USA), Spinal fusion: $6,000-12,000 (vs $80,000-150,000), Minimally invasive spine surgery: $5,000-9,000. Savings: 80-92%." },
      { q: "What are success rates for spine surgery in India?", a: "Discectomy: 85-90% pain relief, Spinal fusion: 75-85% improvement, Minimally invasive procedures: 88-95% success, Scoliosis correction: 90-95% successful outcomes. Comparable to international standards." },
      { q: "How long is recovery after spine surgery?", a: "Hospital stay: 3-7 days, India stay: 2-3 weeks total. Walk next day (with assistance), resume light activities in 4-6 weeks, full recovery in 3-6 months. Physical therapy starts 2-3 days post-surgery." },
      { q: "Are Indian spine surgeons experienced?", a: "Yes. Top surgeons have 15-30 years experience, trained at Johns Hopkins, Mayo Clinic, perform 200-500 spine surgeries annually. Many are fellowship-trained in minimally invasive techniques." },
      { q: "What is minimally invasive spine surgery (MISS)?", a: "Surgery through small incisions (1-2 cm) using specialized instruments, endoscope, or microscope. Benefits: Less pain, faster recovery (1-2 weeks vs 6-12 weeks), minimal scarring, same-day or 1-2 day hospital stay." },
      { q: "Can I fly after spine surgery?", a: "Yes, generally safe to fly 2-3 weeks post-surgery with doctor clearance. For complex surgeries (multi-level fusion), wait 4-6 weeks. Book business/premium economy for reclining seats, do in-flight exercises." },
      { q: "What if I need physical therapy after returning home?", a: "Indian spine surgeon provides detailed PT protocol (exercises, duration, restrictions). Work with local physiotherapist at home using this plan. Video follow-up with Indian surgeon to monitor progress." },
      { q: "How do I know if I need spine surgery?", a: "Surgery considered if: 6-12 weeks of conservative treatment (PT, medications) failed, severe pain affecting daily life, neurological symptoms (weakness, numbness, bowel/bladder issues), or structural problems (herniated disc compressing nerve)." }
    ]
  },
  {
    name: 'cosmetic-surgery-cost-india',
    faqs: [
      { q: "How much does cosmetic surgery cost in India?", a: "Rhinoplasty: $2,000-4,000 (vs $8,000-15,000 USA), Liposuction: $1,500-3,500 (vs $6,000-12,000), Breast augmentation: $2,500-4,500 (vs $8,000-15,000). Savings: 60-75%." },
      { q: "Are Indian plastic surgeons qualified?", a: "Yes. Board-certified (M.Ch. Plastic Surgery), 10-20 years experience, trained at top institutions (Johns Hopkins, Stanford, UCSF). Members of ISAPS (International Society of Aesthetic Plastic Surgery)." },
      { q: "How long should I stay in India after cosmetic surgery?", a: "Depends on procedure: Rhinoplasty (10-14 days), Liposuction (7-10 days), Breast augmentation (7-10 days), Facelift (10-14 days), Tummy tuck (14-21 days). Includes follow-up visits and suture removal." },
      { q: "What if I'm not happy with cosmetic surgery results?", a: "Reputable surgeons offer revision policy. Minor adjustments often free within 6-12 months. Major revisions at reduced cost. Discuss revision policy before surgery. Shifa AlHind partners only with surgeons offering satisfaction guarantees." },
      { q: "Can I see before/after photos of previous patients?", a: "Yes. Ethical surgeons show portfolio of previous work (with patient consent). Request photos of patients with similar features/concerns. Video testimonials also available for most procedures." },
      { q: "Is recovery painful for cosmetic procedures?", a: "Pain is manageable with medications. Discomfort: Breast augmentation (moderate for 3-5 days), Liposuction (soreness for 1-2 weeks), Rhinoplasty (minimal pain, more congestion/swelling). Pain peaks day 2-3, improves rapidly." }
    ]
  },
  {
    name: 'bariatric-surgery-india-cost-guide',
    faqs: [
      { q: "How much does bariatric surgery cost in India?", a: "Gastric bypass: $5,500-9,000 (vs $25,000-35,000 USA), Sleeve gastrectomy: $5,000-8,000 (vs $20,000-30,000), Gastric band: $4,000-6,500. Includes hospital stay, surgeon fees, follow-up for 1 year." },
      { q: "What are the weight loss results from bariatric surgery?", a: "Expect 60-80% excess weight loss in first year. Gastric bypass: 70-80%, Sleeve gastrectomy: 60-70%, Gastric band: 40-50%. Maintain 50-70% weight loss long-term with lifestyle changes." },
      { q: "Am I a candidate for bariatric surgery?", a: "Yes if: BMI ≥35 with obesity-related health issues (diabetes, sleep apnea, hypertension) OR BMI ≥40 regardless of health issues. Age 18-65, tried diet/exercise for 6+ months without success." },
      { q: "Can bariatric surgery reverse Type 2 diabetes?", a: "Yes, 85% achieve diabetes remission within months of surgery. Weight loss improves insulin sensitivity. HbA1c drops from 8-9% to 5-6% within 3-6 months. Many stop diabetes medications completely." },
      { q: "How long is recovery after bariatric surgery?", a: "Hospital stay: 2-3 days, India stay: 10-14 days total. Walk same day, return to light work in 2-3 weeks, full recovery in 4-6 weeks. Follow liquid/soft food diet for first 4-6 weeks." },
      { q: "What are the risks of bariatric surgery?", a: "Complication rate: <5% at experienced centers. Risks: Infection (2%), bleeding (1%), leakage (1-2%), blood clots (0.5%). Long-term: Nutritional deficiencies (need supplements), loose skin (may need surgery)." }
    ]
  },
  {
    name: 'kidney-transplant-cost-india-guide',
    faqs: [
      { q: "How much does kidney transplant cost in India?", a: "Living donor: $13,000-18,000 (vs $400,000 USA, 96% savings). Deceased donor: $10,000-15,000. Includes surgery, 21-day hospital stay, 3 months medications, and 6-month follow-up." },
      { q: "What is the success rate of kidney transplant in India?", a: "1-year graft survival: 95-98% (living donor), 90-94% (deceased donor). 5-year survival: 85-90%. India's success rates match or exceed international standards due to high surgical volume." },
      { q: "Can international patients get deceased donor kidneys in India?", a: "Very difficult. Deceased donor organs prioritized for Indian citizens. International patients typically bring living donor (family member, spouse, or friend) for transplant. Some hospitals have swap programs." },
      { q: "Who can be a living kidney donor?", a: "Must be 18-60 years old, blood type compatible or participate in swap program, healthy (no diabetes, hypertension, kidney disease), pass medical screening, and related by blood/marriage or close friend (requires committee approval)." },
      { q: "How long do I need to stay in India after kidney transplant?", a: "2-3 months total: 14-21 days in hospital (ICU + ward), 6-8 weeks nearby for monitoring, biopsies, medication adjustments. Can return home after 10-12 weeks with stable kidney function." },
      { q: "What medications are needed after kidney transplant?", a: "Immunosuppressants (tacrolimus, mycophenolate, prednisone) for life. Cost: $150-300/month in India (vs $2,000-3,000 USA). First 3-6 months included in package. Generic versions available at 10-20% of brand cost." }
    ]
  },
  {
    name: 'bone-marrow-transplant-india-guide',
    faqs: [
      { q: "How much does bone marrow transplant cost in India?", a: "Autologous BMT: $18,000-30,000 (vs $300,000-500,000 USA), Allogeneic BMT: $25,000-50,000 (vs $500,000-800,000). Includes hospital stay, donor workup, transplant, 30-90 day medications, complications management." },
      { q: "What are success rates for BMT in India?", a: "Leukemia: 65-75%, Lymphoma: 70-80%, Multiple myeloma: 75-85%, Thalassemia: 85-90%, Aplastic anemia: 80-85%. Success rates comparable to USA/Europe at top centers like Apollo, Tata Memorial." },
      { q: "How do I find a bone marrow donor?", a: "Siblings have 25% match chance. If no sibling match, search Indian Bone Marrow Donor Registry (DATRI), international registries (NMDP, DKMS). Haploidentical transplant (half-matched family member) also option." },
      { q: "How long does BMT treatment take in India?", a: "Pre-transplant workup: 1-2 weeks, Conditioning chemotherapy: 5-10 days, Transplant day: 1 day (IV infusion), Recovery in hospital: 30-45 days, India stay: 3-4 months total. High-risk cases may need 6 months." },
      { q: "What is graft-versus-host disease (GVHD)?", a: "Complication where donor immune cells attack recipient's body. Occurs in 30-50% of allogeneic transplants. Acute GVHD (first 100 days): skin rash, diarrhea, liver issues. Chronic GVHD: dry eyes/mouth, skin tightening. Manageable with immunosuppressants." },
      { q: "Can children get BMT in India?", a: "Yes. India has excellent pediatric BMT centers (Apollo, Tata Memorial, BLK-Max). Treat thalassemia, leukemia, sickle cell disease. Success rates: 85-90% for thalassemia, 70-80% for leukemia. Child-friendly facilities, play therapy available." }
    ]
  },
  {
    name: 'neurosurgery-india-cost-hospitals',
    faqs: [
      { q: "How much does brain surgery cost in India?", a: "Brain tumor craniotomy: $7,000-15,000 (vs $100,000-250,000 USA), Aneurysm clipping: $8,000-12,000, Gamma Knife radiosurgery: $4,000-7,000 (vs $50,000-100,000). Savings: 85-95%." },
      { q: "Are Indian neurosurgeons experienced enough?", a: "Yes. Top neurosurgeons have 15-30 years experience, trained at Mayo Clinic, Johns Hopkins, perform 500-1,000 neurosurgeries annually. Many invented new techniques published in Neurosurgery, Journal of Neurosurgery." },
      { q: "What is Gamma Knife radiosurgery?", a: "Non-invasive brain treatment using focused radiation beams. Treats brain tumors, AVMs, trigeminal neuralgia without surgery. No incisions, no anesthesia, outpatient procedure. Recovery: 1-2 days vs weeks for open surgery." },
      { q: "How long is recovery after brain surgery?", a: "Hospital stay: 5-10 days, India stay: 3-4 weeks total. Walk next day, resume light activities in 2-4 weeks, full recovery in 3-6 months. Depends on surgery complexity and location in brain." },
      { q: "What is awake craniotomy?", a: "Brain surgery performed while patient is awake (after scalp numbing). Used for tumors near speech/motor areas. Surgeon asks questions, tests movements during surgery to avoid damaging critical areas. Success rate: 95%+." },
      { q: "Is brain surgery risky in India?", a: "Complication rates at top centers (Apollo, Fortis, Medanta) are 3-5%, comparable to USA. Risks: Infection (1-2%), bleeding (1-2%), neurological deficits (1-3%). Mortality: <1% for routine tumors, 2-5% for complex cases." }
    ]
  },
  {
    name: 'dubai-to-india-medical-tourism',
    faqs: [
      { q: "How much can Dubai patients save in India?", a: "60-75% savings on most procedures. Heart surgery: Save AED 132,000-200,000, Knee replacement: Save AED 44,000-60,000, IVF: Save AED 16,500-25,000, Dental implants: Save AED 8,000-12,000." },
      { q: "How long are flights from Dubai to India?", a: "Mumbai: 3 hours, Delhi: 3.5 hours, Bangalore: 4 hours, Chennai: 4.5 hours. Multiple daily flights on Emirates, Air India, IndiGo, Fly Dubai. Return flights AED 800-2,500 depending on season." },
      { q: "Do I need medical visa from Dubai?", a: "Yes, e-medical visa online (3-5 days, $80) at indianvisaonline.gov.in. Need: Hospital invitation letter (we provide FREE), passport copy, photo. Visa on arrival also available at Mumbai/Delhi/Bangalore/Chennai airports." },
      { q: "Which Indian hospitals are best for Dubai patients?", a: "Apollo (8 locations, Arabic coordinators), Fortis (specialty in cardiac/ortho), Medanta Gurugram (super-specialty), Max Healthcare (luxury facilities), Manipal (affordable quality). All have JCI accreditation." },
      { q: "Can I communicate in Arabic at Indian hospitals?", a: "Yes, top hospitals treating Dubai patients have Arabic-speaking coordinators available 24/7. Some doctors speak basic Arabic. Halal food, prayer rooms, and cultural sensitivity training for staff." },
      { q: "What if I need follow-up after returning to Dubai?", a: "Indian doctors coordinate with Dubai specialists. Video consultations (free for 3-6 months), WhatsApp support, send test results for review. If complications, can return to same hospital (follow-up consultation free)." },
      { q: "Is it safe to travel to India for medical treatment?", a: "Yes. India treats 2 million+ medical tourists annually. Modern hospitals with international protocols. Dubai-India route is well-established. Book airport pickup, hotel near hospital, 24/7 coordinator support through Shifa AlHind." },
      { q: "Can my family accompany me from Dubai?", a: "Yes. Medical attendant visa ($80) for up to 2 companions. Many hospitals provide free companion accommodation or discounted hotel nearby. Family can stay throughout treatment and recovery period." }
    ]
  },
  {
    name: 'riyadh-to-india-healthcare',
    faqs: [
      { q: "How much can Saudi patients save in India?", a: "70-85% savings. Heart bypass: Save SAR 127,500-180,000, Knee replacement: Save SAR 45,000-60,000, Liver transplant: Save SAR 225,000-300,000, Cancer treatment: Save SAR 112,500-150,000." },
      { q: "How do I get medical visa from Saudi Arabia?", a: "Apply online at indianvisaonline.gov.in ($80, 3-5 days). Need: Hospital invitation letter (Shifa AlHind provides FREE), passport copy, photo. Saudi citizens can also get visa on arrival at Mumbai, Delhi, Bangalore, Chennai airports." },
      { q: "Are there direct flights from Riyadh to India?", a: "Yes. Riyadh → Mumbai (4h), Delhi (4.5h), Bangalore (5h), Chennai (5.5h). Airlines: Saudia, Air India, IndiGo. Return tickets: SAR 1,200-3,000 depending on season and booking time." },
      { q: "Do Indian hospitals have halal food and prayer facilities?", a: "Yes. Top hospitals treating Saudi patients provide 100% halal food, dedicated prayer rooms, Qibla direction marked in rooms. Staff respect Islamic practices and fasting during Ramadan." },
      { q: "Can I get Arabic translator at hospital?", a: "Yes. All major hospitals have Arabic-speaking coordinators available 24/7. For medical consultations, Arabic interpreters accompany patients. Many doctors speak basic Arabic or use translation apps." },
      { q: "What if treatment takes longer than expected?", a: "Medical visa valid for 60 days (triple entry). Can extend up to 1 year through FRRO offices in Delhi, Mumbai, Bangalore, Chennai. Extension takes 3-5 days. If complications require longer stay, hospital assists with visa extension." }
    ]
  },
  {
    name: 'medical-visa-india-complete-guide',
    faqs: [
      { q: "How much does Indian medical visa cost?", a: "e-Medical visa: $80-100 (varies by nationality), Visa on arrival: Same $80 fee at airport, Medical attendant visa: $80 for each companion (up to 2 allowed). Processing time: 3-5 days for e-visa, instant for visa on arrival." },
      { q: "What documents do I need for medical visa?", a: "Required: Valid passport (6+ months), recent photo, hospital invitation letter (we provide FREE), confirmed appointment date. Optional but helpful: Medical reports, previous treatment history, flight tickets, hotel booking." },
      { q: "Can my family come with me on medical visa?", a: "Yes. Up to 2 companions can apply for Medical Attendant Visa (linked to your visa). They need: Your medical visa reference number, relationship proof, passport copy. Same $80 fee and 3-5 day processing." },
      { q: "How long is medical visa valid?", a: "60 days stay per entry, triple entry allowed (total 180 days possible). Can extend up to 1 year if treatment takes longer. Extension through FRRO offices in Delhi, Mumbai, Bangalore, Chennai (3-5 days processing)." },
      { q: "What if my visa gets rejected?", a: "Rare (<5% rejection rate). Common reasons: Incomplete documents, previous visa violations, security concerns. Re-apply with corrected information or apply through embassy. Shifa AlHind helps with documentation to avoid rejection." },
      { q: "Which countries are eligible for visa on arrival?", a: "70+ countries including: UAE, Saudi Arabia, USA, UK, Canada, Australia, most European countries. Available at 6 airports: Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Kolkata. Complete list at indianvisaonline.gov.in." },
      { q: "Can I extend medical visa while in India?", a: "Yes. Visit FRRO office in your city 2-3 weeks before visa expires. Need: Extension application, hospital letter stating continued treatment needed, proof of financial means, passport. Extension takes 3-5 days, costs ₹2,000-5,000 ($25-60)." },
      { q: "What is the difference between medical visa and tourist visa?", a: "Medical visa: For treatment only, 60 days per entry (triple entry), can extend up to 1 year, allows medical attendants. Tourist visa: For sightseeing, 90 days per entry, harder to extend, no special hospital benefits." }
    ]
  },
  {
    name: 'medical-tourism-insurance-india',
    faqs: [
      { q: "Does my home insurance cover treatment abroad?", a: "Usually no. Most domestic insurance policies don't cover planned treatment abroad. Check with your insurer. Some international plans (like Cigna Global, Bupa International) may cover pre-approved medical tourism." },
      { q: "Does medical tourism insurance cover the planned surgery?", a: "No, it covers complications, not the surgery itself. You pay for the surgery as planned. Insurance covers emergencies, complications, evacuation, and travel issues." },
      { q: "How do I file a claim?", a: "Keep all receipts and medical reports. File claim within 30 days of treatment. Submit: hospital bills, doctor reports, receipts, policy number. Most insurers reimburse within 2-4 weeks." },
      { q: "What if I have complications after returning home?", a: "Coverage extends 30-90 days post-return (depends on policy). Must be directly related to procedure in India. Contact insurer immediately if complications arise at home." }
    ]
  },
  {
    name: 'best-time-visit-india-medical-tourism',
    faqs: [
      { q: "What is the absolute best month for medical tourism in India?", a: "November or February. November has post-Diwali calm with pleasant weather. February avoids all major festivals and has perfect recovery weather (18-25°C). Both months have good flight availability at reasonable prices." },
      { q: "Can I travel during monsoon (June-August) if necessary?", a: "Yes, but not ideal. Hospitals operate normally, but expect flight delays, humid indoor conditions, and higher infection risk. Consider Bangalore (least affected by monsoon) if must travel during this period. Bring extra medications and plan buffer days." },
      { q: "How far in advance should I book treatment?", a: "2-3 months for peak season (Oct-Mar), 1 month for off-season. Popular surgeons and hospitals have 4-6 week waiting lists in winter. Summer and monsoon have same-week availability. Book early for complex procedures (heart, transplants) regardless of season." },
      { q: "Does weather affect surgery outcomes?", a: "Not directly (hospitals have climate control), but affects recovery. Hot/humid weather can slow wound healing, increase infection risk, and make physical therapy uncomfortable. Cool, dry weather (winter) is medically proven to aid faster recovery for orthopedic and cardiac procedures." },
      { q: "Are there any health risks during specific seasons?", a: "Monsoon has higher infection risk (humid conditions breed bacteria). Winter (December-January) has air pollution in Delhi (avoid if respiratory issues). Summer has dehydration risk (drink more water). Overall, modern hospitals mitigate most seasonal health risks." }
    ]
  }
];

// Function to add FAQ schema to an article
function addFAQSchemaToArticle(articlePath, articleName, faqs) {
  try {
    const filePath = path.join(__dirname, articlePath);

    if (!fs.existsSync(filePath)) {
      console.log(`❌ File not found: ${articleName}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // Check if FAQ schema already added
    if (content.includes('FAQSchema')) {
      console.log(`ℹ️  FAQ schema already exists in: ${articleName}`);
      return false;
    }

    // Add import for FAQSchema at the top (after other imports)
    if (!content.includes("from '@/components/seo/faq-schema-client'")) {
      const importLine = "import { FAQSchema } from '@/components/seo/faq-schema-client';";
      const lastImportIndex = content.lastIndexOf('import');
      const nextLineAfterImport = content.indexOf('\n', lastImportIndex);
      content = content.slice(0, nextLineAfterImport + 1) + importLine + '\n' + content.slice(nextLineAfterImport + 1);
    }

    // Generate FAQ schema data
    const faqData = faqs.map(faq => `        { question: "${faq.q.replace(/"/g, '\\"')}", answer: "${faq.a.replace(/"/g, '\\"')}" }`).join(',\n');

    // Find the FAQ Card section and add schema before it
    const faqCardRegex = /<Card>\s*<CardContent className="pt-6">\s*<h2 className="text-2xl font-bold mb-6">Frequently Asked Questions<\/h2>/;
    const faqCardMatch = content.match(faqCardRegex);

    if (faqCardMatch) {
      const insertPosition = faqCardMatch.index;
      const schemaComponent = `      {/* FAQ Schema for Rich Snippets */}
      <FAQSchema faqs={[
${faqData}
      ]} />

      `;

      content = content.slice(0, insertPosition) + schemaComponent + content.slice(insertPosition);

      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Added FAQ schema to: ${articleName} (${faqs.length} FAQs)`);
      return true;
    } else {
      console.log(`⚠️  FAQ section not found in: ${articleName}`);
      return false;
    }
  } catch (error) {
    console.log(`❌ Error processing ${articleName}: ${error.message}`);
    return false;
  }
}

// Main execution
console.log('🚀 Starting FAQ Schema Addition to All 20 Blog Articles...\n');

let successCount = 0;
let skippedCount = 0;
let errorCount = 0;

articles.forEach((article, index) => {
  console.log(`\n[${index + 1}/20] Processing: ${article.name}`);
  const articlePath = `src/app/[locale]/blog/${article.name}/page.tsx`;
  const result = addFAQSchemaToArticle(articlePath, article.name, article.faqs);

  if (result === true) {
    successCount++;
  } else if (result === false && fs.existsSync(path.join(__dirname, articlePath))) {
    skippedCount++;
  } else {
    errorCount++;
  }
});

console.log('\n' + '='.repeat(60));
console.log('📊 FAQ Schema Addition Complete!\n');
console.log(`✅ Successfully added: ${successCount} articles`);
console.log(`ℹ️  Already had schema: ${skippedCount} articles`);
console.log(`❌ Errors: ${errorCount} articles`);
console.log(`📝 Total processed: ${articles.length} articles`);
console.log('='.repeat(60));
console.log('\n💡 Next step: Run "npm run build" to verify all changes compile correctly.');

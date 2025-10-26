/**
 * Automation Script: Add FAQ Schema to Remaining 18 Blog Articles
 *
 * This script handles the section-based FAQ structure used in Articles 1-18.
 * Pattern: <section className="mb-12"><h2>Frequently Asked Questions</h2>
 */

const fs = require('fs');
const path = require('path');

// Article configurations with their FAQ data (Articles 1-18 only)
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
      { q: "Is travel insurance required for medical tourism?", a: "Recommended but not mandatory. Medical tourism insurance costs $50-200 for 2 weeks, covers post-procedure complications, emergency evacuation, and trip cancellation." },
      { q: "What currency should I bring to India?", a: "Indian Rupees (INR) or US Dollars. Major hospitals accept credit cards, USD, EUR. ATMs widely available. Hospital cashier can exchange currency. Most treatment payments via bank transfer before arrival." },
      { q: "How do I arrange airport pickup from UAE?", a: "Shifa AlHind provides FREE airport pickup for all patients. Share flight details 2-3 days before arrival. Driver will meet you at arrivals with name board. WhatsApp number provided for easy contact." },
      { q: "Can I combine treatment with tourism in India?", a: "Yes, but prioritize recovery first. Plan 2-3 days sightseeing after doctor clearance. Popular: Mumbai (Gateway of India, Marine Drive), Delhi (Taj Mahal 3h away), Bangalore (gardens, temples). Avoid strenuous activities." }
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
      { q: "What if my first IVF cycle fails in India?", a: "Most clinics offer discounted second cycle (20-30% off). Shared-risk programs available: Pay upfront for 3 cycles, get 70-80% refund if unsuccessful. Frozen embryos from first cycle reduce second cycle cost to $1,500-2,500." },
      { q: "Are Indian fertility clinics safe and hygienic?", a: "Yes. Top clinics have ISO-certified embryology labs with HEPA filtration, strict quality control, and regular inspections. Success rates published transparently. Many doctors trained at UK/USA fertility centers." },
      { q: "Can I use donor eggs or sperm in India?", a: "Yes, egg and sperm donation is legal in India. Egg donation costs $4,500-6,500 (vs $25,000-40,000 USA). Donors are anonymous, screened for genetic diseases, typically 21-30 years old. Sperm banks have extensive screening." },
      { q: "What's the difference between IVF and ICSI?", a: "IVF: Eggs and sperm mixed in dish, fertilization happens naturally. ICSI: Single sperm injected directly into egg (better for male infertility, low sperm count). ICSI costs $500-1,000 more than IVF." },
      { q: "Can I freeze embryos for future use?", a: "Yes. Embryo freezing costs $300-500/year for storage. Good option if first cycle produces multiple embryos. Frozen embryo transfer (FET) costs $1,500-2,500, no need for ovarian stimulation again." },
      { q: "What tests are required before IVF?", a: "Women: AMH, FSH, LH, estradiol, TSH, prolactin, ultrasound. Men: Semen analysis. Both: Infectious disease screening (HIV, Hepatitis B/C), blood type. Most tests can be done at home country and shared with clinic." }
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
      { q: "How much does liver transplant cost in India?", a: "Living donor: $40,000-60,000, Deceased donor: $50,000-70,000 (vs $500,000-800,000 USA, 85-92% savings). Price includes surgery, ICU, medications, 6-12 month follow-up." },
      { q: "How long is waiting time for deceased donor liver in India?", a: "Average 6-12 months (varies by blood type, urgency). Living donor transplant can be scheduled within 2-4 weeks after evaluation. Many patients opt for living donor to avoid waiting." },
      { q: "Can a family member donate part of their liver?", a: "Yes. Healthy adults can donate right lobe (60-70% of liver). Donor liver regenerates to full size in 2-3 months. Must be blood type compatible, age 18-55, healthy, and emotionally willing." },
      { q: "What is liver transplant success rate in India?", a: "95-98% 1-year survival, 85-90% 5-year survival (comparable to USA's 90-95% and 85-90%). Top centers like Apollo and Medanta perform 200-300 transplants annually with excellent outcomes." },
      { q: "How long do I need to stay in India after liver transplant?", a: "4-6 weeks total: 10-14 days in hospital (5-7 days ICU), 3-4 weeks outpatient recovery near hospital. Can travel home after surgeon clearance with immunosuppression medications for life." },
      { q: "What are risks and complications of liver transplant?", a: "Rejection (10-15%, manageable with medications), infections (immunosuppression), bleeding, bile duct issues. Indian hospitals have 24/7 transplant teams to manage complications immediately. Overall complication rate: 15-25%." },
      { q: "Will I need lifelong medications after transplant?", a: "Yes. Immunosuppression drugs (tacrolimus, cyclosporine) prevent rejection. Cost in India: $100-300/month (vs $2,000-3,000 USA). Many patients get 6-12 month supply from India, then source generics at home." },
      { q: "Can I work after liver transplant?", a: "Yes. Most patients return to work 3-6 months post-transplant. Avoid heavy lifting for 6 months. Desk jobs can resume at 2-3 months. Follow doctor's advice on activity restrictions." }
    ]
  },
  {
    name: 'spine-surgery-india-cost-hospitals',
    faqs: [
      { q: "How much does spine surgery cost in India?", a: "Discectomy: $3,500-6,000, Spinal fusion: $6,000-10,000, Laminectomy: $4,000-7,000, Minimally invasive spine surgery: $5,000-9,000 (70-85% savings vs USA)." },
      { q: "Are Indian spine surgeons qualified?", a: "Yes. Top surgeons have 20+ years experience, trained at USA/Europe spine centers, perform 300-500 surgeries annually. Many are members of American Association of Neurological Surgeons (AANS)." },
      { q: "What is minimally invasive spine surgery?", a: "Small incision (1-2 cm) surgery using endoscope, faster recovery, less pain, same-day discharge possible. India has latest equipment (surgical navigation, intraoperative CT). Cost: $5,000-9,000 vs $50,000-100,000 USA." },
      { q: "How long is recovery after spine surgery?", a: "Hospital stay: 3-5 days, India stay: 10-14 days. Walk with assistance next day, resume light activities in 4-6 weeks, full recovery in 3-6 months. Physical therapy starts immediately." },
      { q: "Can I fly after spine surgery?", a: "Yes, safe to fly 10-14 days post-surgery with surgeon clearance. Avoid lifting luggage, take regular walking breaks during flight, use neck pillow for support. Long flights (6+ hours) may need compression stockings." },
      { q: "What if surgery doesn't relieve my pain?", a: "Modern imaging (MRI, CT) has 95% accuracy in diagnosing spine issues. Success rate for properly diagnosed patients: 85-95%. If pain persists, revision surgery may be needed (rare, <5% of cases). Get second opinion before surgery." }
    ]
  },
  {
    name: 'cosmetic-surgery-cost-india',
    faqs: [
      { q: "How much does cosmetic surgery cost in India?", a: "Rhinoplasty: $1,500-3,000, Liposuction: $1,200-2,500, Breast augmentation: $2,000-4,000, Facelift: $2,500-5,000, Tummy tuck: $2,000-4,000 (60-75% savings vs USA)." },
      { q: "Are Indian cosmetic surgeons qualified?", a: "Yes. Board-certified plastic surgeons with MCh (Plastic Surgery) degrees, 10-20 years experience, trained at USA/UK centers. Many are members of International Society of Aesthetic Plastic Surgery (ISAPS)." },
      { q: "How long do I need to stay for cosmetic surgery?", a: "Depends on procedure: Rhinoplasty (7-10 days), Liposuction (5-7 days), Breast augmentation (7-10 days), Facelift (10-14 days), Tummy tuck (10-14 days). Includes pre-op consultation, surgery, recovery monitoring." },
      { q: "Is cosmetic surgery safe in India?", a: "Yes, when done at JCI-accredited hospitals by board-certified surgeons. Complication rates comparable to USA/Europe (2-5%). Choose experienced surgeons, see before/after photos, check patient reviews." },
      { q: "Can I see results of previous patients?", a: "Yes. Ethical surgeons show extensive before/after photo galleries. Ask to speak with 2-3 previous patients (with consent). Shifa AlHind provides verified patient testimonials and photo galleries for partner clinics." },
      { q: "What if I'm not happy with results?", a: "Most surgeons offer free revision within 6-12 months if outcome doesn't match agreed plan. Minor touch-ups often free, major revisions at reduced cost. Choose surgeon with clear revision policy in writing." }
    ]
  },
  {
    name: 'bariatric-surgery-india-cost-guide',
    faqs: [
      { q: "How much does bariatric surgery cost in India?", a: "Gastric bypass: $5,000-8,000, Sleeve gastrectomy: $4,500-7,000, Gastric band: $3,500-5,500, Mini gastric bypass: $4,500-7,000 (70-80% savings vs USA)." },
      { q: "What is the success rate of bariatric surgery in India?", a: "60-80% excess weight loss within 1-2 years. Diabetes remission: 85%, Hypertension resolution: 70%, Sleep apnea improvement: 85%. Long-term success depends on lifestyle changes and follow-up." },
      { q: "Am I eligible for bariatric surgery?", a: "BMI ≥35 with obesity-related conditions (diabetes, hypertension, sleep apnea) or BMI ≥40 without other conditions. Age 18-65, failed diet/exercise attempts, psychologically prepared for lifestyle changes." },
      { q: "What's the difference between gastric bypass and sleeve?", a: "Gastric bypass: Smaller stomach pouch + rerouted intestines, 70-80% excess weight loss, higher diabetes remission. Sleeve: Remove 80% of stomach, 60-70% weight loss, simpler surgery. Surgeon recommends based on your condition." },
      { q: "How long is recovery after bariatric surgery?", a: "Hospital stay: 2-4 days, India stay: 7-10 days. Return to work in 2-4 weeks, resume exercise in 4-6 weeks. Follow liquid → pureed → soft → solid food progression over 6-8 weeks." },
      { q: "Will I need plastic surgery after weight loss?", a: "Many patients have excess skin after losing 100+ lbs. Body contouring (tummy tuck, arm lift, thigh lift) can be done 12-18 months post-bariatric surgery once weight stabilizes. India offers affordable plastic surgery packages." }
    ]
  },
  {
    name: 'kidney-transplant-cost-india-guide',
    faqs: [
      { q: "How much does kidney transplant cost in India?", a: "Living donor: $13,000-18,000, Deceased donor: $15,000-20,000 (vs $400,000-450,000 USA, 95% savings). Includes surgery, dialysis before/after, medications, 1-year follow-up." },
      { q: "Can a family member donate a kidney to me?", a: "Yes. Living donor must be blood type compatible, age 18-65, healthy (eGFR >80), and emotionally willing. Can live normal life with one kidney. Donors thoroughly evaluated for 2-4 weeks before surgery." },
      { q: "What is kidney transplant success rate in India?", a: "95-98% 1-year graft survival (living donor), 90-95% (deceased donor). 5-year survival: 85-90%. Comparable to USA rates. Top centers perform 200+ transplants annually with excellent outcomes." },
      { q: "How long is waiting time for kidney in India?", a: "Deceased donor: 2-5 years (depends on blood type, urgency). Living donor: 2-4 weeks after evaluation. Many patients opt for living donor from family to avoid long wait." },
      { q: "Will I need dialysis after transplant?", a: "Most living donor kidneys function immediately (no dialysis). Deceased donor kidneys may need 1-2 weeks dialysis while kidney starts working. Plan for 2-4 dialysis sessions during India stay." },
      { q: "How long do I stay in India after kidney transplant?", a: "3-4 weeks total: 7-10 days in hospital (3-5 days ICU), 2-3 weeks outpatient recovery. Need close monitoring for rejection/infection. Can travel home with immunosuppression medications and clear follow-up plan." }
    ]
  },
  {
    name: 'bone-marrow-transplant-india-guide',
    faqs: [
      { q: "How much does bone marrow transplant cost in India?", a: "Autologous: $20,000-30,000, Allogeneic: $30,000-50,000, Haploidentical: $35,000-60,000, Pediatric: $25,000-45,000 (70-80% savings vs USA). Includes mobilization, transplant, isolation room, 100-day follow-up." },
      { q: "What is success rate of BMT in India for different diseases?", a: "Leukemia: 65-75%, Lymphoma: 70-80%, Multiple Myeloma: 75-85%, Thalassemia: 85-90%, Sickle Cell: 85-90%, Aplastic Anemia: 80-85%. Rates comparable to USA. Best outcomes in younger patients (<50) with matched donors." },
      { q: "Can I use a family member as bone marrow donor?", a: "Yes. Siblings have 25% chance of perfect match. Parents/children are half-matches (haploidentical transplant possible). India has advanced haploidentical BMT protocols with 70-80% success rates." },
      { q: "How long does bone marrow transplant take in India?", a: "Total 60-100 days: Pre-transplant workup (1-2 weeks), Conditioning chemotherapy (7-10 days), Transplant day, Isolation/recovery (3-4 weeks), Outpatient monitoring (4-6 weeks). Can't fly home until day +60-100." },
      { q: "What are risks of bone marrow transplant?", a: "Infection (immunosuppression), Graft-versus-host disease (GVHD, 30-50% in allogeneic), Graft failure (5-10%), Organ damage. Indian centers have experienced BMT teams, 24/7 support, and state-of-the-art isolation units to minimize risks." },
      { q: "Will I need to stay near hospital during recovery?", a: "Yes. Stay in guest house/apartment within 10-15 minutes of hospital for 60-100 days. Daily/twice-weekly visits for blood tests, monitoring. Hospital provides international patient accommodation recommendations nearby." }
    ]
  },
  {
    name: 'neurosurgery-india-cost-hospitals',
    faqs: [
      { q: "How much does brain surgery cost in India?", a: "Brain tumor craniotomy: $8,000-15,000, Aneurysm clipping: $7,000-12,000, Spinal fusion: $6,000-10,000, Gamma Knife radiosurgery: $5,000-8,000 (65-80% savings vs USA)." },
      { q: "Do Indian hospitals have advanced neurosurgery technology?", a: "Yes. Top centers have Gamma Knife, CyberKnife, intraoperative MRI (iMRI), neuronavigation systems, brain mapping, endoscopic neurosurgery. Technology equivalent to USA's best hospitals." },
      { q: "Are Indian neurosurgeons qualified for complex brain surgery?", a: "Yes. Leading neurosurgeons have 20-30 years experience, trained at USA/Europe centers (Johns Hopkins, Mayo Clinic), perform 200-400 brain surgeries annually. Many publish in international neurosurgery journals." },
      { q: "What is Gamma Knife radiosurgery?", a: "Non-invasive radiation treatment for brain tumors (<3 cm), AVMs, trigeminal neuralgia. Single-day outpatient procedure, no incision, minimal side effects. Success rate: 90-95%. Much cheaper in India: $5,000-8,000 vs $50,000-100,000 USA." },
      { q: "How long is recovery after brain surgery?", a: "Hospital stay: 5-7 days (2-3 days ICU), India stay: 14-21 days for monitoring. Can fly home after 2-3 weeks with doctor clearance. Full recovery: 6-12 weeks. Avoid heavy lifting for 3 months." },
      { q: "What if brain surgery complications occur?", a: "Top hospitals have 24/7 neuro-ICU, immediate imaging (CT/MRI), on-call neurosurgeons for emergencies. Complication rate: 5-10% for complex surgeries (comparable to USA). All complications managed at no extra cost if within 30-day period." }
    ]
  },
  {
    name: 'dubai-to-india-medical-tourism',
    faqs: [
      { q: "How much can Dubai residents save on treatment in India?", a: "Heart bypass: Save AED 144,000-180,000 (68-73%), Knee replacement: Save AED 44,000-52,000 (73-75%), Liver transplant: Save AED 220,000-260,000 (74-76%), IVF: Save AED 16,500-22,000 (75-80%)." },
      { q: "How do I get medical visa for India from Dubai?", a: "Apply online at indianvisaonline.gov.in ($80-100, 3-5 days). Need hospital invitation letter (Shifa AlHind provides FREE), passport, photo. Visa on arrival available at Mumbai, Delhi, Bangalore, Chennai airports for UAE residents." },
      { q: "Which Indian city is closest to Dubai?", a: "Mumbai (3h direct flight), then Delhi (3.5h), Bangalore (4h), Chennai (4.5h). Emirates, Air India, IndiGo, and SpiceJet have multiple daily flights. Round-trip tickets: AED 800-1,500." },
      { q: "Do Indian hospitals have Arabic-speaking staff for Dubai patients?", a: "Yes. Top hospitals treating Dubai patients have dedicated Arabic coordinators, 24/7 interpreters, halal food in hospital cafeteria, prayer rooms, and culturally sensitive care. Many doctors speak basic Arabic." },
      { q: "Can I combine medical treatment with visiting family in India?", a: "Yes, many Dubai residents have family in India. After doctor clearance (usually 7-14 days post-procedure), you can travel within India. Avoid strenuous activities during recovery. Keep follow-up appointments." },
      { q: "How do I transfer money for treatment from Dubai?", a: "Bank transfer (SWIFT/IBAN), credit card (3% fee), Western Union, or bring USD/AED cash. Most hospitals accept AED at competitive exchange rates. Pay 30-50% advance, balance before discharge." },
      { q: "What if I need to return to Dubai urgently during treatment?", a: "Most procedures allow flying 7-14 days post-surgery with doctor clearance. For emergencies, hospitals coordinate with Dubai hospitals for continued care. Travel insurance recommended to cover cancellation/return costs." },
      { q: "Are there direct flights from Dubai to Indian medical cities?", a: "Yes. Dubai to Mumbai (10+ daily flights), Dubai to Delhi (15+ daily), Dubai to Bangalore (8+ daily), Dubai to Chennai (5+ daily). Major airlines: Emirates, Air India, IndiGo, SpiceJet, Flydubai." }
    ]
  },
  {
    name: 'riyadh-to-india-healthcare',
    faqs: [
      { q: "How much can Riyadh patients save in India?", a: "Heart bypass: Save SAR 142,500-168,750 (71-73%), Knee replacement: Save SAR 43,125-51,250 (71-73%), Liver transplant: Save SAR 225,000-256,250 (72-74%), IVF: Save SAR 16,875-19,125 (73-75%)." },
      { q: "How do I get medical visa for India from Saudi Arabia?", a: "Apply online at indianvisaonline.gov.in ($80-100, 3-5 days for e-visa). Need hospital invitation letter (Shifa AlHind provides FREE), passport, photo. Alternatively, apply at Indian Embassy in Riyadh (7-10 days)." },
      { q: "Which Indian city is best for Saudi patients?", a: "Delhi (4.5h direct flight) has many hospitals with Saudi patient services. Mumbai (4h), Bangalore (5h), Chennai (5.5h) also excellent. Saudia, Air India, IndiGo have direct flights from Riyadh." },
      { q: "Do Indian hospitals provide halal food and prayer facilities?", a: "Yes. Top hospitals have halal-certified kitchens, in-room prayer mats, qibla direction indicated, prayer rooms, and staff trained in cultural sensitivity. Many hospitals have dedicated Saudi patient coordinators." },
      { q: "Can I bring my family for treatment?", a: "Yes. Medical attendant visa ($80) for up to 2 family members. Many hospitals provide free companion accommodation or discounted rates. Families can stay in patient room (most hospitals allow 1 companion 24/7)." },
      { q: "How do I pay for treatment from Saudi Arabia?", a: "Bank transfer (SWIFT), credit card (Visa/Mastercard, 2-3% fee), Western Union, or cash (USD/SAR). Most hospitals accept SAR at current exchange rates. Pay 30-50% advance via bank transfer, balance before discharge." }
    ]
  },
  {
    name: 'medical-visa-india-complete-guide',
    faqs: [
      { q: "How much does India medical visa cost?", a: "E-medical visa: $80-100 (depending on nationality), Medical attendant visa: $80, Regular medical visa (embassy): $100-150. Visa on arrival: Same as e-visa. Processing fee non-refundable if rejected (rare, 95%+ approval rate)." },
      { q: "How long does it take to get medical visa for India?", a: "E-medical visa: 3-5 business days (95% of applications). Visa on arrival: 5-10 minutes at airport. Embassy visa: 7-10 business days. Apply 2-3 weeks before travel for safety margin." },
      { q: "Can I extend my medical visa in India?", a: "Yes. E-medical visa valid for 60 days (triple entry). Can extend up to 1 year through FRRO (Foreigner Regional Registration Office) in major cities. Extension costs $50-100, takes 7-10 days. Need hospital letter stating continued treatment needed." },
      { q: "Can my family accompany me on medical visa?", a: "Yes. Up to 2 family members can apply for Medical Attendant Visa ($80 each, same validity as your medical visa). They can stay with you during treatment. Apply online simultaneously with your medical visa." },
      { q: "What documents are required for medical visa?", a: "Passport (6+ months validity), Recent photo, Hospital invitation letter with treatment details and cost estimate, Proof of sufficient funds (bank statement showing $2,000+ for self, $1,000+ per attendant)." },
      { q: "What if my medical visa is rejected?", a: "Very rare (<5% rejection rate). Common reasons: Incomplete hospital letter, insufficient funds proof, passport validity <6 months. Fee is non-refundable, but you can reapply immediately after fixing issues. Shifa AlHind helps with proper documentation." },
      { q: "Can I travel to multiple cities in India on medical visa?", a: "Yes. Medical visa allows travel throughout India. You can visit family, do tourism after treatment (with doctor clearance). Must register at FRRO if staying >180 days. Keep hospital documents for immigration checks." },
      { q: "Do I need COVID-19 vaccination for India medical visa?", a: "No longer required as of 2024. However, check latest travel advisories as rules can change. Recommended: Valid travel insurance covering medical emergencies, COVID-19 treatment if needed during stay." }
    ]
  }
];

// Function to add FAQ schema to an article with section-based FAQ structure
function addFAQSchemaToArticle(articlePath, articleName, faqs) {
  const filePath = path.join(articlePath, articleName, 'page.tsx');

  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${filePath}`);
    return false;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if FAQ schema already exists
  if (content.includes('import { FAQSchema }') && content.includes('<FAQSchema faqs={[')) {
    console.log(`⏭️  FAQ schema already exists in: ${articleName}`);
    return false;
  }

  // Add import statement if not present
  if (!content.includes("import { FAQSchema }")) {
    // Find the last import statement
    const importRegex = /import .+ from ['"].+['"];?\n/g;
    const imports = content.match(importRegex);
    if (imports && imports.length > 0) {
      const lastImport = imports[imports.length - 1];
      const lastImportIndex = content.lastIndexOf(lastImport);
      const insertPosition = lastImportIndex + lastImport.length;

      const importLine = "import { FAQSchema } from '@/components/seo/faq-schema-client';\n";
      content = content.slice(0, insertPosition) + importLine + content.slice(insertPosition);
    }
  }

  // Generate FAQ data with proper escaping
  const faqData = faqs.map(faq => {
    // Escape special characters in answers
    const escapedAnswer = faq.a
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .replace(/\n/g, ' ');

    const escapedQuestion = faq.q
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .replace(/\n/g, ' ');

    return `        { question: "${escapedQuestion}", answer: "${escapedAnswer}" }`;
  }).join(',\n');

  // Find FAQ section pattern for section-based structure
  // Pattern: <section className="mb-12"> followed by <h2 with "Frequently Asked Questions"
  const sectionFAQRegex = /<section className="mb-12">\s*<h2 [^>]*>Frequently Asked Questions<\/h2>/;

  if (!sectionFAQRegex.test(content)) {
    console.log(`⚠️  FAQ section not found in: ${articleName}`);
    return false;
  }

  const match = content.match(sectionFAQRegex);
  const insertPosition = match.index;

  // Create FAQ schema component
  const schemaComponent = `      {/* FAQ Schema for Rich Snippets */}
      <FAQSchema faqs={[
${faqData}
      ]} />

      `;

  // Insert schema before FAQ section
  content = content.slice(0, insertPosition) + schemaComponent + content.slice(insertPosition);

  // Write back to file
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Added FAQ schema to: ${articleName}`);
  return true;
}

// Main execution
console.log('🚀 Starting FAQ schema addition for remaining 18 articles...\n');

const basePath = path.join(__dirname, 'src/app/[locale]/blog');
let successCount = 0;
let skippedCount = 0;
let failedCount = 0;

articles.forEach(article => {
  const result = addFAQSchemaToArticle(basePath, article.name, article.faqs);
  if (result) {
    successCount++;
  } else if (fs.existsSync(path.join(basePath, article.name, 'page.tsx'))) {
    skippedCount++;
  } else {
    failedCount++;
  }
});

console.log('\n📊 Summary:');
console.log(`✅ Successfully added FAQ schema: ${successCount} articles`);
console.log(`⏭️  Skipped (already exists): ${skippedCount} articles`);
console.log(`❌ Failed: ${failedCount} articles`);
console.log(`\n🎉 Total processed: ${articles.length} articles`);

import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrustBadges } from '@/components/trust-badges/trust-badges';
import {
  Heart, Brain, Bone, Baby, Sparkles, Eye, SmilePlus, Weight,
  Stethoscope, Award, Building2, Users, CheckCircle, Star,
  ArrowRight, MessageCircle, ChevronDown, ChevronUp, Shield,
  Clock, Globe, BadgeCheck
} from 'lucide-react';

export const dynamic = 'force-dynamic';

// ---------------------------------------------------------------------------
// Specialty Data
// ---------------------------------------------------------------------------

interface Doctor {
  name: string;
  hospital: string;
  experience: number;
  specialization: string;
  proceduresPerformed: number;
}

interface FAQ {
  question: string;
  questionAr: string;
  answer: string;
  answerAr: string;
}

interface SpecialtyData {
  name: string;
  nameAr: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  topDoctors: Doctor[];
  relatedTreatments: { slug: string; label: string; labelAr: string }[];
  faqs: FAQ[];
}

const SPECIALTIES: Record<string, SpecialtyData> = {
  cardiologists: {
    name: 'Cardiologists',
    nameAr: 'أطباء القلب',
    title: 'Best Cardiologists in India',
    titleAr: 'أفضل أطباء القلب في الهند',
    description:
      'India is home to world-renowned cardiologists who perform over 500,000 cardiac procedures annually. Our network includes surgeons trained at top US and European institutions, offering bypass surgery, angioplasty, valve replacement, and complex paediatric cardiac care at 70-90% lower cost than Western countries.',
    descriptionAr:
      'الهند موطن لأطباء قلب عالميين يجرون أكثر من 500,000 عملية قلبية سنوياً. شبكتنا تشمل جراحين متدربين في أفضل المؤسسات الأمريكية والأوروبية، يقدمون جراحة القلب المفتوح وتركيب الدعامات واستبدال الصمامات بتكلفة أقل 70-90% من الدول الغربية.',
    topDoctors: [
      { name: 'Dr. Devi Prasad Shetty', hospital: 'Narayana Health, Bangalore', experience: 35, specialization: 'CABG & Paediatric Cardiac Surgery', proceduresPerformed: 15000 },
      { name: 'Dr. Ramakanta Panda', hospital: 'Asian Heart Institute, Mumbai', experience: 30, specialization: 'Beating Heart Surgery', proceduresPerformed: 12000 },
      { name: 'Dr. Naresh Trehan', hospital: 'Medanta, Gurugram', experience: 38, specialization: 'Coronary Artery Bypass & Valve Surgery', proceduresPerformed: 14000 },
      { name: 'Dr. Ashok Seth', hospital: 'Fortis Escorts, Delhi', experience: 33, specialization: 'Interventional Cardiology & Angioplasty', proceduresPerformed: 11000 },
      { name: 'Dr. K. M. Cherian', hospital: 'Frontier Lifeline, Chennai', experience: 40, specialization: 'Heart Transplant & Complex Cardiac Care', proceduresPerformed: 13000 },
    ],
    relatedTreatments: [
      { slug: 'angioplasty-india', label: 'Angioplasty & Stent Placement', labelAr: 'القسطرة وتركيب الدعامات' },
      { slug: 'heart-bypass-surgery-india', label: 'Heart Bypass Surgery (CABG)', labelAr: 'جراحة القلب المفتوح' },
      { slug: 'heart-valve-replacement-india', label: 'Heart Valve Replacement', labelAr: 'استبدال صمامات القلب' },
    ],
    faqs: [
      { question: 'What is the success rate of heart surgery in India?', questionAr: 'ما نسبة نجاح جراحة القلب في الهند؟', answer: 'Indian cardiac centres report a 98-99% success rate for routine bypass and angioplasty procedures, comparable to the best hospitals in the US and Europe.', answerAr: 'تسجل مراكز القلب الهندية نسبة نجاح 98-99% لعمليات القلب المفتوح والقسطرة الروتينية، مماثلة لأفضل المستشفيات في أمريكا وأوروبا.' },
      { question: 'How much does bypass surgery cost in India?', questionAr: 'كم تكلفة جراحة القلب المفتوح في الهند؟', answer: 'Bypass surgery in India costs $5,000-$8,000 compared to $70,000-$150,000 in the USA, saving patients up to 90% without compromising quality.', answerAr: 'تتراوح تكلفة جراحة القلب المفتوح في الهند من 5,000 إلى 8,000 دولار مقارنة بـ 70,000-150,000 دولار في أمريكا، مما يوفر للمرضى حتى 90%.' },
      { question: 'Do Indian cardiologists speak Arabic?', questionAr: 'هل يتحدث أطباء القلب الهنود العربية؟', answer: 'While most doctors communicate in English, our team provides dedicated Arabic-speaking coordinators who assist throughout your medical journey, from consultation to discharge.', answerAr: 'يتواصل معظم الأطباء بالإنجليزية، لكن فريقنا يوفر منسقين ناطقين بالعربية يرافقونكم طوال رحلتكم العلاجية من الاستشارة حتى الخروج.' },
      { question: 'How long is the recovery after heart surgery in India?', questionAr: 'كم مدة التعافي بعد جراحة القلب في الهند؟', answer: 'Most patients can fly home 7-10 days after bypass surgery. Angioplasty patients are typically discharged within 24 hours and can travel within 3-5 days.', answerAr: 'يمكن لمعظم المرضى السفر بعد 7-10 أيام من جراحة القلب المفتوح. مرضى القسطرة عادة يخرجون خلال 24 ساعة ويمكنهم السفر خلال 3-5 أيام.' },
      { question: 'Are Indian cardiac hospitals JCI accredited?', questionAr: 'هل مستشفيات القلب الهندية معتمدة من JCI؟', answer: 'Yes, over 40 Indian hospitals hold JCI (Joint Commission International) accreditation, the gold standard for healthcare quality worldwide.', answerAr: 'نعم، أكثر من 40 مستشفى هندي حاصل على اعتماد JCI، المعيار الذهبي لجودة الرعاية الصحية عالمياً.' },
      { question: 'Can I get a second opinion from an Indian cardiologist before travelling?', questionAr: 'هل يمكنني الحصول على رأي ثاني من طبيب قلب هندي قبل السفر؟', answer: 'Absolutely. We arrange free teleconsultations with our cardiologists so you can review your reports, ask questions, and plan your treatment before booking flights.', answerAr: 'بالتأكيد. نرتب لكم استشارات مجانية عبر الفيديو مع أطباء القلب لمراجعة تقاريركم والإجابة على أسئلتكم والتخطيط للعلاج قبل حجز الرحلة.' },
    ],
  },
  oncologists: {
    name: 'Oncologists',
    nameAr: 'أطباء الأورام',
    title: 'Best Oncologists in India',
    titleAr: 'أفضل أطباء الأورام في الهند',
    description:
      'India offers cutting-edge cancer treatment with proton therapy, robotic surgery, immunotherapy and CAR-T cell therapy. Leading oncologists trained at Memorial Sloan Kettering, MD Anderson, and Johns Hopkins deliver world-class cancer care at a fraction of Western costs.',
    descriptionAr:
      'تقدم الهند علاجات سرطان متطورة تشمل العلاج البروتوني والجراحة الروبوتية والعلاج المناعي وعلاج CAR-T. أطباء أورام رائدون متدربون في أفضل مراكز السرطان العالمية يقدمون رعاية عالمية بجزء من التكلفة الغربية.',
    topDoctors: [
      { name: 'Dr. Harit Chaturvedi', hospital: 'Max Super Speciality, Delhi', experience: 28, specialization: 'Surgical Oncology & Robotic Surgery', proceduresPerformed: 9000 },
      { name: 'Dr. Shyam Aggarwal', hospital: 'Sir Ganga Ram Hospital, Delhi', experience: 32, specialization: 'Medical Oncology & Chemotherapy', proceduresPerformed: 10000 },
      { name: 'Dr. Vinod Raina', hospital: 'Fortis Memorial, Gurugram', experience: 35, specialization: 'Breast & Gastrointestinal Oncology', proceduresPerformed: 8500 },
      { name: 'Dr. Suresh Advani', hospital: 'Jaslok Hospital, Mumbai', experience: 40, specialization: 'Haematological Oncology', proceduresPerformed: 11000 },
      { name: 'Dr. Ashok Vaid', hospital: 'Medanta, Gurugram', experience: 30, specialization: 'Bone Marrow Transplant & Blood Cancer', proceduresPerformed: 7500 },
    ],
    relatedTreatments: [
      { slug: 'blood-cancer-treatment-india', label: 'Blood Cancer Treatment', labelAr: 'علاج سرطان الدم' },
      { slug: 'lung-cancer-treatment-india', label: 'Lung Cancer Treatment', labelAr: 'علاج سرطان الرئة' },
      { slug: 'breast-cancer-treatment-india', label: 'Breast Cancer Treatment', labelAr: 'علاج سرطان الثدي' },
    ],
    faqs: [
      { question: 'What types of cancer treatment are available in India?', questionAr: 'ما أنواع علاج السرطان المتاحة في الهند؟', answer: 'India offers the full spectrum: surgery, chemotherapy, radiation (IMRT, CyberKnife), immunotherapy, targeted therapy, proton therapy, and CAR-T cell therapy at JCI-accredited centres.', answerAr: 'تقدم الهند جميع العلاجات: الجراحة، الكيماوي، الإشعاعي، العلاج المناعي، العلاج الموجه، العلاج البروتوني وعلاج CAR-T في مراكز معتمدة من JCI.' },
      { question: 'How much does cancer treatment cost in India vs USA?', questionAr: 'كم تكلفة علاج السرطان في الهند مقارنة بأمريكا؟', answer: 'Cancer treatment in India costs 60-80% less. For example, chemotherapy cycles cost $500-$1,500 vs $5,000-$12,000 in the USA per cycle.', answerAr: 'تكلفة علاج السرطان في الهند أقل بـ 60-80%. مثلاً، دورة الكيماوي تكلف 500-1,500 دولار مقارنة بـ 5,000-12,000 دولار في أمريكا.' },
      { question: 'Is robotic cancer surgery available in India?', questionAr: 'هل الجراحة الروبوتية متاحة في الهند؟', answer: 'Yes, leading hospitals use the Da Vinci robotic system for prostate, colorectal, head and neck, and gynaecological cancers with faster recovery and smaller incisions.', answerAr: 'نعم، المستشفيات الرائدة تستخدم نظام دافنشي الروبوتي لسرطانات البروستاتا والقولون والرأس والرقبة وأمراض النساء مع تعافي أسرع.' },
      { question: 'Can GCC patients get cancer second opinions from Indian oncologists?', questionAr: 'هل يمكن لمرضى الخليج الحصول على رأي ثاني من أطباء أورام هنود؟', answer: 'Yes, we arrange free teleconsultations with our oncologists within 24-48 hours so you can review your biopsy reports, scans, and treatment options.', answerAr: 'نعم، نرتب استشارات مجانية عبر الفيديو مع أطباء الأورام خلال 24-48 ساعة لمراجعة تقارير الخزعة والأشعة وخيارات العلاج.' },
      { question: 'What is the success rate of cancer treatment in India?', questionAr: 'ما نسبة نجاح علاج السرطان في الهند؟', answer: 'Success rates depend on the cancer type and stage. For early-stage cancers, Indian centres achieve 85-95% five-year survival rates, on par with leading US hospitals.', answerAr: 'تعتمد نسب النجاح على نوع ومرحلة السرطان. للسرطانات المبكرة، تحقق المراكز الهندية نسب نجاة 85-95% لخمس سنوات، مماثلة لأفضل المستشفيات الأمريكية.' },
      { question: 'Is halal food and Arabic support available during cancer treatment?', questionAr: 'هل يتوفر طعام حلال ودعم عربي أثناء علاج السرطان؟', answer: 'Absolutely. Our hospitals provide halal meals, prayer facilities, and dedicated Arabic-speaking coordinators for GCC patients throughout the treatment journey.', answerAr: 'بالتأكيد. مستشفياتنا توفر وجبات حلال ومصليات ومنسقين ناطقين بالعربية لمرضى الخليج طوال فترة العلاج.' },
    ],
  },
  'orthopedic-surgeons': {
    name: 'Orthopedic Surgeons',
    nameAr: 'جراحو العظام',
    title: 'Best Orthopedic Surgeons in India',
    titleAr: 'أفضل جراحي العظام في الهند',
    description:
      'India is a global leader in joint replacement, spine surgery, and sports medicine. Orthopaedic surgeons use robotic-arm assisted technology, 3D-printed implants, and minimally invasive techniques that cut recovery time by 40%. Patients save 70-85% compared to the UK and USA.',
    descriptionAr:
      'الهند رائدة عالمياً في استبدال المفاصل وجراحة العمود الفقري والطب الرياضي. يستخدم جراحو العظام تقنيات الذراع الروبوتية والطباعة ثلاثية الأبعاد والجراحة طفيفة التوغل التي تقلل وقت التعافي 40%.',
    topDoctors: [
      { name: 'Dr. Ashok Rajgopal', hospital: 'Medanta, Gurugram', experience: 35, specialization: 'Knee & Hip Replacement', proceduresPerformed: 12000 },
      { name: 'Dr. S. K. S. Marya', hospital: 'Max Super Speciality, Delhi', experience: 38, specialization: 'Robotic Joint Replacement', proceduresPerformed: 10000 },
      { name: 'Dr. B. Shivashankar', hospital: 'Manipal Hospital, Bangalore', experience: 25, specialization: 'Spine Surgery & Disc Replacement', proceduresPerformed: 7000 },
      { name: 'Dr. Kaushal Malhan', hospital: 'Fortis Hospital, Mumbai', experience: 28, specialization: 'Minimally Invasive Joint Surgery', proceduresPerformed: 8500 },
      { name: 'Dr. Yash Gulati', hospital: 'Indraprastha Apollo, Delhi', experience: 30, specialization: 'Sports Medicine & Arthroscopy', proceduresPerformed: 9000 },
    ],
    relatedTreatments: [
      { slug: 'knee-replacement-india', label: 'Knee Replacement Surgery', labelAr: 'جراحة استبدال الركبة' },
      { slug: 'hip-replacement-india', label: 'Hip Replacement Surgery', labelAr: 'جراحة استبدال الورك' },
      { slug: 'spine-surgery-india', label: 'Spine Surgery', labelAr: 'جراحة العمود الفقري' },
    ],
    faqs: [
      { question: 'How much does knee replacement cost in India?', questionAr: 'كم تكلفة استبدال الركبة في الهند؟', answer: 'Total knee replacement in India costs $4,000-$6,000 compared to $35,000-$50,000 in the USA, with the same implant brands (Zimmer, Stryker, Smith & Nephew).', answerAr: 'تكلفة استبدال الركبة الكامل في الهند 4,000-6,000 دولار مقارنة بـ 35,000-50,000 دولار في أمريكا، بنفس ماركات الزرعات (Zimmer, Stryker).' },
      { question: 'Is robotic knee replacement available in India?', questionAr: 'هل جراحة الركبة الروبوتية متاحة في الهند؟', answer: 'Yes, top hospitals use the MAKO and ROSA robotic systems for joint replacement, offering greater precision, less pain, and faster recovery.', answerAr: 'نعم، أفضل المستشفيات تستخدم أنظمة MAKO وROSA الروبوتية لاستبدال المفاصل، مما يوفر دقة أعلى وألم أقل وتعافي أسرع.' },
      { question: 'How long do I need to stay in India after joint replacement?', questionAr: 'كم مدة الإقامة في الهند بعد استبدال المفاصل؟', answer: 'Plan for 10-14 days total. You will be in hospital 3-5 days and need a few days of physiotherapy before flying home.', answerAr: 'خطط لـ 10-14 يوماً إجمالاً. ستكون في المستشفى 3-5 أيام وتحتاج بضعة أيام من العلاج الطبيعي قبل السفر.' },
      { question: 'What implant brands are used in Indian hospitals?', questionAr: 'ما ماركات الزرعات المستخدمة في المستشفيات الهندية؟', answer: 'Indian hospitals use the same FDA-approved implants as US and European hospitals: Zimmer Biomet, Stryker, Smith & Nephew, DePuy Synthes, and Johnson & Johnson.', answerAr: 'تستخدم المستشفيات الهندية نفس الزرعات المعتمدة من FDA: Zimmer Biomet وStryker وSmith & Nephew وDePuy Synthes وJohnson & Johnson.' },
      { question: 'Can I do physiotherapy in India after joint replacement?', questionAr: 'هل يمكنني إجراء العلاج الطبيعي في الهند بعد الجراحة؟', answer: 'Yes, we arrange in-hospital and post-discharge physiotherapy with trained therapists. We also provide a home exercise programme for continued recovery after you return.', answerAr: 'نعم، نرتب جلسات علاج طبيعي داخل المستشفى وبعد الخروج. كما نوفر برنامج تمارين منزلية لاستمرار التعافي بعد العودة.' },
      { question: 'Is there Arabic-speaking support for orthopaedic patients?', questionAr: 'هل يوجد دعم عربي لمرضى العظام؟', answer: 'Yes, our Arabic-speaking coordinators assist with hospital visits, physiotherapy sessions, and help you communicate your pain levels and recovery progress to your surgeon.', answerAr: 'نعم، منسقونا الناطقون بالعربية يساعدونكم في زيارات المستشفى وجلسات العلاج الطبيعي والتواصل مع الجراح حول مستوى الألم وتقدم التعافي.' },
    ],
  },
  neurosurgeons: {
    name: 'Neurosurgeons',
    nameAr: 'جراحو الأعصاب',
    title: 'Best Neurosurgeons in India',
    titleAr: 'أفضل جراحي الأعصاب في الهند',
    description:
      'Indian neurosurgeons perform complex brain tumour removals, spinal cord surgeries, deep brain stimulation, and endoscopic procedures using Gamma Knife, CyberKnife, and intraoperative MRI. Costs are 75-85% lower than Western countries with equally advanced technology.',
    descriptionAr:
      'يجري جراحو الأعصاب الهنود عمليات معقدة لإزالة أورام الدماغ وجراحات الحبل الشوكي والتحفيز العميق للدماغ باستخدام جاما نايف وسايبر نايف والرنين المغناطيسي أثناء العملية. التكلفة أقل 75-85% من الدول الغربية.',
    topDoctors: [
      { name: 'Dr. Rana Patir', hospital: 'Fortis Memorial, Gurugram', experience: 30, specialization: 'Brain Tumour & Skull Base Surgery', proceduresPerformed: 8000 },
      { name: 'Dr. Arun Saroha', hospital: 'Max Super Speciality, Delhi', experience: 25, specialization: 'Spine & Minimally Invasive Neurosurgery', proceduresPerformed: 7000 },
      { name: 'Dr. V. P. Singh', hospital: 'Medanta, Gurugram', experience: 35, specialization: 'Gamma Knife & Stereotactic Radiosurgery', proceduresPerformed: 9500 },
      { name: 'Dr. Sandeep Vaishya', hospital: 'Fortis Memorial, Gurugram', experience: 28, specialization: 'Endoscopic Brain Surgery', proceduresPerformed: 6500 },
      { name: 'Dr. B. K. Misra', hospital: 'Hinduja Hospital, Mumbai', experience: 38, specialization: 'Skull Base & Vascular Neurosurgery', proceduresPerformed: 10000 },
    ],
    relatedTreatments: [
      { slug: 'brain-tumour-surgery-india', label: 'Brain Tumour Surgery', labelAr: 'جراحة أورام الدماغ' },
      { slug: 'spine-surgery-india', label: 'Spine Surgery', labelAr: 'جراحة العمود الفقري' },
      { slug: 'deep-brain-stimulation-india', label: 'Deep Brain Stimulation', labelAr: 'التحفيز العميق للدماغ' },
    ],
    faqs: [
      { question: 'What neurosurgical procedures are performed in India?', questionAr: 'ما العمليات الجراحية العصبية المتاحة في الهند؟', answer: 'India offers brain tumour surgery, aneurysm clipping, spinal fusion, disc replacement, deep brain stimulation, Gamma Knife radiosurgery, and endoscopic skull base surgery.', answerAr: 'تقدم الهند جراحة أورام الدماغ وقص تمدد الأوعية ودمج الفقرات واستبدال الأقراص والتحفيز العميق للدماغ وجاما نايف وجراحة قاع الجمجمة بالمنظار.' },
      { question: 'How much does brain surgery cost in India?', questionAr: 'كم تكلفة جراحة الدماغ في الهند؟', answer: 'Brain tumour surgery in India costs $6,000-$12,000 compared to $50,000-$150,000 in the USA, with the same advanced imaging and surgical technology.', answerAr: 'تكلفة جراحة أورام الدماغ في الهند 6,000-12,000 دولار مقارنة بـ 50,000-150,000 دولار في أمريكا، بنفس تقنيات التصوير والجراحة المتقدمة.' },
      { question: 'Is Gamma Knife available in India?', questionAr: 'هل جاما نايف متاح في الهند؟', answer: 'Yes, multiple centres across Delhi, Mumbai, and Bangalore offer Gamma Knife and CyberKnife radiosurgery for brain tumours, AVMs, and trigeminal neuralgia.', answerAr: 'نعم، عدة مراكز في دلهي ومومباي وبنغالور تقدم جاما نايف وسايبر نايف لأورام الدماغ والتشوهات الشريانية الوريدية وألم العصب الثلاثي.' },
      { question: 'How long is the recovery after brain surgery in India?', questionAr: 'كم مدة التعافي بعد جراحة الدماغ في الهند؟', answer: 'Hospital stay is typically 5-7 days. Most patients can travel home after 2-3 weeks, depending on the complexity of the procedure.', answerAr: 'الإقامة في المستشفى عادة 5-7 أيام. معظم المرضى يمكنهم السفر بعد 2-3 أسابيع، حسب تعقيد العملية.' },
      { question: 'Can Indian neurosurgeons treat paediatric brain conditions?', questionAr: 'هل يعالج جراحو الأعصاب الهنود حالات الدماغ لدى الأطفال؟', answer: 'Yes, our neurosurgeons specialise in paediatric brain tumours, hydrocephalus, craniosynostosis, and spina bifida with dedicated paediatric ICU facilities.', answerAr: 'نعم، جراحو الأعصاب لدينا متخصصون في أورام دماغ الأطفال واستسقاء الرأس وتعظم الدروز والعمود الفقري المشقوق مع وحدات عناية مركزة متخصصة للأطفال.' },
      { question: 'Is teleconsultation available with Indian neurosurgeons?', questionAr: 'هل الاستشارة عن بعد متاحة مع جراحي الأعصاب الهنود؟', answer: 'Yes, we arrange free video consultations so our neurosurgeons can review your MRI and CT scans, discuss treatment options, and give you a clear plan before you travel.', answerAr: 'نعم، نرتب استشارات مجانية عبر الفيديو ليراجع جراحو الأعصاب صور الرنين المغناطيسي والأشعة المقطعية ويناقشوا خيارات العلاج ويضعوا خطة واضحة قبل السفر.' },
    ],
  },
  'ivf-specialists': {
    name: 'IVF Specialists',
    nameAr: 'أطباء أطفال الأنابيب',
    title: 'Best IVF Specialists in India',
    titleAr: 'أفضل أطباء أطفال الأنابيب في الهند',
    description:
      'India has become a top IVF destination with success rates of 55-65% per cycle at leading clinics. Fertility specialists use advanced techniques including ICSI, PGT-A, embryo freezing, and donor programmes. Treatment costs 70-80% less than the UK and USA.',
    descriptionAr:
      'أصبحت الهند وجهة رائدة لأطفال الأنابيب بنسب نجاح 55-65% لكل دورة في العيادات المتقدمة. يستخدم أطباء الخصوبة تقنيات متطورة تشمل الحقن المجهري والفحص الجيني وتجميد الأجنة. التكلفة أقل 70-80% من بريطانيا وأمريكا.',
    topDoctors: [
      { name: 'Dr. Firuza Parikh', hospital: 'Jaslok Hospital, Mumbai', experience: 35, specialization: 'IVF & Reproductive Medicine', proceduresPerformed: 8000 },
      { name: 'Dr. Hrishikesh Pai', hospital: 'Bloom IVF, Mumbai', experience: 30, specialization: 'IVF, ICSI & Fertility Preservation', proceduresPerformed: 7500 },
      { name: 'Dr. Kamini Rao', hospital: 'Milann Fertility, Bangalore', experience: 33, specialization: 'IVF & Preimplantation Genetic Testing', proceduresPerformed: 9000 },
      { name: 'Dr. Anjali Malpani', hospital: 'Malpani Infertility Clinic, Mumbai', experience: 28, specialization: 'Natural Cycle IVF & Egg Freezing', proceduresPerformed: 6000 },
      { name: 'Dr. Shivani Sachdev Gour', hospital: 'SCI Healthcare, Delhi', experience: 22, specialization: 'High-Risk IVF & Donor Programmes', proceduresPerformed: 5500 },
    ],
    relatedTreatments: [
      { slug: 'ivf-treatment-india', label: 'IVF Treatment', labelAr: 'علاج أطفال الأنابيب' },
      { slug: 'fertility-treatment-india', label: 'Fertility Treatment', labelAr: 'علاج العقم' },
    ],
    faqs: [
      { question: 'What is the IVF success rate in India?', questionAr: 'ما نسبة نجاح أطفال الأنابيب في الهند؟', answer: 'Leading IVF clinics in India achieve 55-65% success rates per cycle for women under 35, comparable to top clinics in the US and Europe.', answerAr: 'تحقق عيادات أطفال الأنابيب الرائدة في الهند نسب نجاح 55-65% لكل دورة للنساء تحت 35 عاماً، مماثلة لأفضل العيادات في أمريكا وأوروبا.' },
      { question: 'How much does IVF cost in India?', questionAr: 'كم تكلفة أطفال الأنابيب في الهند؟', answer: 'A single IVF cycle in India costs $2,500-$4,000 compared to $12,000-$20,000 in the USA, including medications, monitoring, and the procedure.', answerAr: 'تتراوح تكلفة دورة أطفال أنابيب واحدة في الهند من 2,500 إلى 4,000 دولار مقارنة بـ 12,000-20,000 دولار في أمريكا، شاملة الأدوية والمتابعة والعملية.' },
      { question: 'Is ICSI available in India?', questionAr: 'هل الحقن المجهري متاح في الهند؟', answer: 'Yes, ICSI (Intracytoplasmic Sperm Injection) is standard at all leading IVF centres in India, along with advanced techniques like IMSI and PICSI.', answerAr: 'نعم، الحقن المجهري (ICSI) متاح في جميع مراكز أطفال الأنابيب الرائدة في الهند، بالإضافة إلى تقنيات متقدمة مثل IMSI وPICSI.' },
      { question: 'How long do I need to stay in India for IVF?', questionAr: 'كم مدة الإقامة في الهند لعلاج أطفال الأنابيب؟', answer: 'A typical IVF cycle requires 2-3 weeks in India: 10-12 days for ovarian stimulation, egg retrieval, and embryo transfer, plus a few days of rest.', answerAr: 'تتطلب دورة أطفال الأنابيب النموذجية 2-3 أسابيع في الهند: 10-12 يوماً لتحفيز المبايض وسحب البويضات ونقل الأجنة، بالإضافة لبضعة أيام راحة.' },
      { question: 'Is genetic testing of embryos available in India?', questionAr: 'هل الفحص الجيني للأجنة متاح في الهند؟', answer: 'Yes, PGT-A (Preimplantation Genetic Testing for Aneuploidy) is available at top IVF centres. This screens embryos for chromosomal abnormalities before transfer.', answerAr: 'نعم، الفحص الجيني قبل الزرع (PGT-A) متاح في أفضل مراكز أطفال الأنابيب. يفحص الأجنة للتأكد من سلامتها الكروموسومية قبل النقل.' },
      { question: 'Is there privacy and cultural sensitivity for GCC IVF patients?', questionAr: 'هل هناك خصوصية وحساسية ثقافية لمرضى الخليج؟', answer: 'Absolutely. Our clinics provide private consultation rooms, female doctors upon request, Arabic-speaking coordinators, and full confidentiality throughout the treatment.', answerAr: 'بالتأكيد. عياداتنا توفر غرف استشارة خاصة وطبيبات عند الطلب ومنسقات ناطقات بالعربية وسرية تامة طوال فترة العلاج.' },
    ],
  },
  'cosmetic-surgeons': {
    name: 'Cosmetic Surgeons',
    nameAr: 'جراحو التجميل',
    title: 'Best Cosmetic Surgeons in India',
    titleAr: 'أفضل جراحي التجميل في الهند',
    description:
      'Indian cosmetic surgeons are internationally trained in rhinoplasty, liposuction, facelifts, hair transplants, and body contouring. Using the latest laser and minimally invasive techniques, they deliver natural-looking results at 60-80% lower cost than the Middle East and Western countries.',
    descriptionAr:
      'جراحو التجميل الهنود متدربون دولياً في تجميل الأنف وشفط الدهون وشد الوجه وزراعة الشعر ونحت الجسم. يستخدمون أحدث تقنيات الليزر والجراحة طفيفة التوغل لنتائج طبيعية بتكلفة أقل 60-80% من الشرق الأوسط والدول الغربية.',
    topDoctors: [
      { name: 'Dr. Mohan Thomas', hospital: 'Cosmetic Surgery Institute, Mumbai', experience: 30, specialization: 'Rhinoplasty & Facelift', proceduresPerformed: 10000 },
      { name: 'Dr. Debraj Shome', hospital: 'The Esthetic Clinics, Mumbai', experience: 20, specialization: 'Facial Plastic Surgery & Oculoplasty', proceduresPerformed: 8000 },
      { name: 'Dr. Rashmi Shetty', hospital: 'Ra Skin & Aesthetics, Mumbai', experience: 18, specialization: 'Non-Surgical Aesthetics & Dermatology', proceduresPerformed: 12000 },
      { name: 'Dr. Aniketh Venkataram', hospital: 'Venkat Centre, Bangalore', experience: 22, specialization: 'Liposuction & Body Contouring', proceduresPerformed: 6000 },
      { name: 'Dr. Ajaya Kashyap', hospital: 'MedSpa, Delhi', experience: 28, specialization: 'Breast Surgery & Tummy Tuck', proceduresPerformed: 7500 },
    ],
    relatedTreatments: [
      { slug: 'rhinoplasty-india', label: 'Rhinoplasty (Nose Job)', labelAr: 'تجميل الأنف' },
      { slug: 'hair-transplant-india', label: 'Hair Transplant', labelAr: 'زراعة الشعر' },
      { slug: 'liposuction-india', label: 'Liposuction', labelAr: 'شفط الدهون' },
    ],
    faqs: [
      { question: 'What cosmetic procedures are most popular in India?', questionAr: 'ما أكثر عمليات التجميل شيوعاً في الهند؟', answer: 'Rhinoplasty, liposuction, hair transplant, facelift, breast augmentation, and tummy tuck are the most sought-after procedures by international patients.', answerAr: 'تجميل الأنف وشفط الدهون وزراعة الشعر وشد الوجه وتكبير الثدي وشد البطن هي أكثر العمليات طلباً من المرضى الدوليين.' },
      { question: 'How much does rhinoplasty cost in India?', questionAr: 'كم تكلفة تجميل الأنف في الهند؟', answer: 'Rhinoplasty in India costs $2,000-$4,000 compared to $8,000-$15,000 in the USA and $5,000-$10,000 in the UAE, with board-certified plastic surgeons.', answerAr: 'تكلفة تجميل الأنف في الهند 2,000-4,000 دولار مقارنة بـ 8,000-15,000 دولار في أمريكا و5,000-10,000 دولار في الإمارات.' },
      { question: 'Are cosmetic surgery results in India natural-looking?', questionAr: 'هل نتائج جراحة التجميل في الهند طبيعية؟', answer: 'Yes, top Indian cosmetic surgeons are known for delivering natural, proportional results. Many are trained in the US, UK, and South Korea in the latest techniques.', answerAr: 'نعم، أفضل جراحي التجميل الهنود معروفون بتقديم نتائج طبيعية ومتناسقة. كثيرون منهم متدربون في أمريكا وبريطانيا وكوريا الجنوبية.' },
      { question: 'How long should I stay in India after cosmetic surgery?', questionAr: 'كم مدة الإقامة في الهند بعد جراحة التجميل؟', answer: 'Plan for 7-14 days depending on the procedure. Rhinoplasty requires 7-10 days, liposuction 5-7 days, and facelifts 10-14 days before flying home.', answerAr: 'خطط لـ 7-14 يوماً حسب العملية. تجميل الأنف يتطلب 7-10 أيام، شفط الدهون 5-7 أيام، وشد الوجه 10-14 يوماً قبل السفر.' },
      { question: 'Is there a risk of infection after cosmetic surgery in India?', questionAr: 'هل هناك خطر عدوى بعد جراحة التجميل في الهند؟', answer: 'Top hospitals maintain strict infection control protocols. JCI-accredited facilities meet the same hygiene standards as leading Western hospitals, with infection rates under 1%.', answerAr: 'تلتزم المستشفيات الكبرى ببروتوكولات صارمة لمكافحة العدوى. المنشآت المعتمدة من JCI تلتزم بنفس معايير النظافة الغربية، بنسب عدوى أقل من 1%.' },
      { question: 'Can I combine multiple cosmetic procedures in one trip?', questionAr: 'هل يمكنني الجمع بين عدة عمليات تجميل في رحلة واحدة؟', answer: 'Yes, many patients combine procedures like rhinoplasty with liposuction or facelift with eyelid surgery to save on travel costs and recovery time.', answerAr: 'نعم، كثير من المرضى يجمعون عمليات مثل تجميل الأنف مع شفط الدهون أو شد الوجه مع جراحة الجفون لتوفير تكاليف السفر ووقت التعافي.' },
    ],
  },
  ophthalmologists: {
    name: 'Ophthalmologists',
    nameAr: 'أطباء العيون',
    title: 'Best Ophthalmologists in India',
    titleAr: 'أفضل أطباء العيون في الهند',
    description:
      'India is a leader in LASIK, cataract surgery, retinal treatments, and corneal transplants. Ophthalmologists use femtosecond lasers, phacoemulsification, and micro-incision techniques. Patients save 80-90% compared to Western eye care costs.',
    descriptionAr:
      'الهند رائدة في الليزك وجراحة المياه البيضاء وعلاجات الشبكية وزراعة القرنية. يستخدم أطباء العيون ليزر فيمتوثانية وتقنية الفاكو والشقوق الدقيقة. يوفر المرضى 80-90% من تكاليف العلاج الغربية.',
    topDoctors: [
      { name: 'Dr. Mahipal Singh Sachdev', hospital: 'Centre for Sight, Delhi', experience: 30, specialization: 'LASIK & Refractive Surgery', proceduresPerformed: 15000 },
      { name: 'Dr. Nishant Kumar', hospital: 'Eye7 Hospitals, Delhi', experience: 22, specialization: 'Cataract & Lens Implants', proceduresPerformed: 10000 },
      { name: 'Dr. Rajesh Fogla', hospital: 'Narayana Nethralaya, Bangalore', experience: 25, specialization: 'Cornea Transplant & Keratoconus', proceduresPerformed: 8000 },
      { name: 'Dr. Amar Agarwal', hospital: 'Dr. Agarwals Eye Hospital, Chennai', experience: 35, specialization: 'Retinal Surgery & Glaucoma', proceduresPerformed: 12000 },
      { name: 'Dr. Cyres Mehta', hospital: 'Mehta Eye Clinic, Mumbai', experience: 28, specialization: 'Vitreoretinal Surgery', proceduresPerformed: 7000 },
    ],
    relatedTreatments: [
      { slug: 'cataract-surgery-india', label: 'Cataract Surgery', labelAr: 'جراحة المياه البيضاء' },
      { slug: 'lasik-surgery-india', label: 'LASIK Eye Surgery', labelAr: 'عملية الليزك' },
    ],
    faqs: [
      { question: 'How much does LASIK cost in India?', questionAr: 'كم تكلفة الليزك في الهند؟', answer: 'LASIK in India costs $500-$1,500 per eye compared to $3,000-$5,000 per eye in the USA, using the same Carl Zeiss and Alcon laser platforms.', answerAr: 'تكلفة الليزك في الهند 500-1,500 دولار للعين مقارنة بـ 3,000-5,000 دولار للعين في أمريكا، باستخدام نفس أجهزة Carl Zeiss وAlcon.' },
      { question: 'What is the success rate of cataract surgery in India?', questionAr: 'ما نسبة نجاح جراحة المياه البيضاء في الهند؟', answer: 'Cataract surgery has a 99% success rate in India. Most procedures use phacoemulsification with premium IOL implants for clear vision at all distances.', answerAr: 'نسبة نجاح جراحة المياه البيضاء 99% في الهند. معظم العمليات تستخدم الفاكو مع عدسات متميزة لرؤية واضحة على جميع المسافات.' },
      { question: 'Can I fly after eye surgery in India?', questionAr: 'هل يمكنني السفر بالطائرة بعد جراحة العيون في الهند؟', answer: 'After LASIK, you can fly within 2-3 days. After cataract surgery, wait 3-5 days. Retinal surgery may require 2-4 weeks before air travel.', answerAr: 'بعد الليزك يمكنك السفر خلال 2-3 أيام. بعد المياه البيضاء انتظر 3-5 أيام. جراحة الشبكية قد تتطلب 2-4 أسابيع قبل السفر.' },
      { question: 'Is femtosecond LASIK available in India?', questionAr: 'هل الليزك بالفيمتوثانية متاح في الهند؟', answer: 'Yes, leading eye hospitals offer bladeless femtosecond LASIK, SMILE, and Contoura Vision for customised vision correction with greater precision.', answerAr: 'نعم، مستشفيات العيون الرائدة تقدم ليزك الفيمتوثانية بدون شفرة وSMILE وContoura Vision لتصحيح الرؤية المخصص بدقة أعلى.' },
      { question: 'Do Indian eye hospitals treat retinal conditions?', questionAr: 'هل تعالج مستشفيات العيون الهندية أمراض الشبكية؟', answer: 'Yes, top centres treat diabetic retinopathy, macular degeneration, retinal detachment, and vitreous haemorrhage using laser and vitreoretinal surgery.', answerAr: 'نعم، المراكز الرائدة تعالج اعتلال الشبكية السكري والتنكس البقعي وانفصال الشبكية ونزيف الجسم الزجاجي بالليزر وجراحة الشبكية.' },
      { question: 'Is there Arabic support for GCC eye patients?', questionAr: 'هل يتوفر دعم عربي لمرضى العيون من الخليج؟', answer: 'Yes, our Arabic-speaking coordinators guide you through pre-operative tests, surgery day, post-operative care, and follow-up appointments.', answerAr: 'نعم، منسقونا الناطقون بالعربية يرافقونكم في الفحوصات قبل العملية ويوم الجراحة والرعاية بعدها ومواعيد المتابعة.' },
    ],
  },
  dentists: {
    name: 'Dentists',
    nameAr: 'أطباء الأسنان',
    title: 'Best Dentists in India',
    titleAr: 'أفضل أطباء الأسنان في الهند',
    description:
      'India offers world-class dental care including dental implants, veneers, crowns, root canals, and full-mouth rehabilitation at 60-80% savings. Top dentists use CEREC same-day crowns, 3D digital scanning, and Nobel Biocare implants.',
    descriptionAr:
      'تقدم الهند رعاية أسنان عالمية تشمل زراعة الأسنان والقشور والتيجان وعلاج الجذور وإعادة تأهيل الفم الكامل بتوفير 60-80%. أفضل أطباء الأسنان يستخدمون تيجان CEREC الفورية والمسح الرقمي ثلاثي الأبعاد وزرعات Nobel Biocare.',
    topDoctors: [
      { name: 'Dr. Sandesh Mayekar', hospital: 'Smile Care, Mumbai', experience: 28, specialization: 'Cosmetic Dentistry & Veneers', proceduresPerformed: 12000 },
      { name: 'Dr. Arun Chamria', hospital: 'Royal Dental Clinics, Mumbai', experience: 22, specialization: 'Full Mouth Rehabilitation', proceduresPerformed: 8000 },
      { name: 'Dr. Sween Kathuria', hospital: 'Dental Kraft, Delhi', experience: 20, specialization: 'Dental Implants & Bone Grafting', proceduresPerformed: 6000 },
      { name: 'Dr. Trivikram Rao', hospital: 'All Smiles Dental, Bangalore', experience: 25, specialization: 'Dental Implants & Same-Day Teeth', proceduresPerformed: 9000 },
      { name: 'Dr. Deepak Rai', hospital: 'Apollo Dental, Delhi', experience: 18, specialization: 'Orthodontics & Invisalign', proceduresPerformed: 5000 },
    ],
    relatedTreatments: [
      { slug: 'dental-implants-india', label: 'Dental Implants', labelAr: 'زراعة الأسنان' },
      { slug: 'dental-veneers-india', label: 'Dental Veneers', labelAr: 'قشور الأسنان' },
    ],
    faqs: [
      { question: 'How much do dental implants cost in India?', questionAr: 'كم تكلفة زراعة الأسنان في الهند؟', answer: 'A single dental implant in India costs $400-$800 (Nobel Biocare or Straumann) compared to $3,000-$5,000 in the USA and $2,000-$4,000 in UAE.', answerAr: 'تكلفة زرعة أسنان واحدة في الهند 400-800 دولار (Nobel Biocare أو Straumann) مقارنة بـ 3,000-5,000 دولار في أمريكا و2,000-4,000 في الإمارات.' },
      { question: 'Can I get same-day dental implants in India?', questionAr: 'هل يمكنني الحصول على زراعة أسنان فورية في الهند؟', answer: 'Yes, select clinics offer same-day implants (immediate loading) and All-on-4/All-on-6 full arch restoration that can be completed in a single visit.', answerAr: 'نعم، عيادات مختارة تقدم زراعة فورية وترميم القوس الكامل All-on-4/All-on-6 التي يمكن إكمالها في زيارة واحدة.' },
      { question: 'What implant brands are used in Indian dental clinics?', questionAr: 'ما ماركات الزرعات المستخدمة في عيادات الأسنان الهندية؟', answer: 'Top clinics use Nobel Biocare, Straumann, Osstem, and BioHorizons -- the same premium brands used in the US and Europe.', answerAr: 'العيادات الرائدة تستخدم Nobel Biocare وStraumann وOsstem وBioHorizons -- نفس الماركات المتميزة المستخدمة في أمريكا وأوروبا.' },
      { question: 'How long do I need to stay in India for dental treatment?', questionAr: 'كم مدة الإقامة في الهند للعلاج السني؟', answer: 'For dental implants, plan 5-7 days. For veneers or crowns, 3-5 days is sufficient. Full-mouth rehabilitation may require 7-10 days or two visits.', answerAr: 'لزراعة الأسنان خطط لـ 5-7 أيام. للقشور أو التيجان 3-5 أيام كافية. إعادة تأهيل الفم الكامل قد تتطلب 7-10 أيام أو زيارتين.' },
      { question: 'Are dental veneers in India the same quality as the US?', questionAr: 'هل جودة قشور الأسنان في الهند بنفس مستوى أمريكا؟', answer: 'Yes, top Indian dentists use E.max and zirconia veneers from the same manufacturers. Many cosmetic dentists trained in the US and UK.', answerAr: 'نعم، أفضل أطباء الأسنان الهنود يستخدمون قشور E.max وزركونيا من نفس الشركات المصنعة. كثيرون متدربون في أمريكا وبريطانيا.' },
      { question: 'Is there Arabic support for dental patients from GCC?', questionAr: 'هل يتوفر دعم عربي لمرضى الأسنان من الخليج؟', answer: 'Yes, our Arabic-speaking team coordinates your dental appointments, translates during consultations, and helps with travel and accommodation arrangements.', answerAr: 'نعم، فريقنا الناطق بالعربية ينسق مواعيد الأسنان ويترجم أثناء الاستشارات ويساعد في ترتيبات السفر والإقامة.' },
    ],
  },
  'bariatric-surgeons': {
    name: 'Bariatric Surgeons',
    nameAr: 'جراحو السمنة',
    title: 'Best Bariatric Surgeons in India',
    titleAr: 'أفضل جراحي السمنة في الهند',
    description:
      'India is a top destination for weight-loss surgery with laparoscopic gastric sleeve, gastric bypass, and mini bypass at 70-80% lower cost. Bariatric surgeons use single-incision and robotic techniques for faster recovery. JCI hospitals provide comprehensive pre- and post-operative support.',
    descriptionAr:
      'الهند وجهة رائدة لجراحة إنقاص الوزن بالمنظار تشمل تكميم المعدة وتحويل المسار والمسار المصغر بتكلفة أقل 70-80%. يستخدم جراحو السمنة تقنيات الشق الواحد والروبوتية لتعافي أسرع.',
    topDoctors: [
      { name: 'Dr. Muffazal Lakdawala', hospital: 'Saifee Hospital, Mumbai', experience: 25, specialization: 'Laparoscopic Bariatric Surgery', proceduresPerformed: 8000 },
      { name: 'Dr. Randeep Wadhawan', hospital: 'BLK-Max Hospital, Delhi', experience: 22, specialization: 'Gastric Sleeve & Bypass', proceduresPerformed: 6000 },
      { name: 'Dr. Mahendra Narwaria', hospital: 'Apollo Hospital, Delhi', experience: 20, specialization: 'Robotic Bariatric Surgery', proceduresPerformed: 5500 },
      { name: 'Dr. Jayashree Todkar', hospital: 'Asian Bariatrics, Pune', experience: 18, specialization: 'Mini Gastric Bypass & Revision Surgery', proceduresPerformed: 5000 },
      { name: 'Dr. Aparna Govil Bhasker', hospital: 'Saifee Hospital, Mumbai', experience: 16, specialization: 'Single Incision Sleeve Gastrectomy', proceduresPerformed: 4500 },
    ],
    relatedTreatments: [
      { slug: 'gastric-sleeve-india', label: 'Gastric Sleeve Surgery', labelAr: 'تكميم المعدة' },
      { slug: 'gastric-bypass-india', label: 'Gastric Bypass Surgery', labelAr: 'تحويل مسار المعدة' },
    ],
    faqs: [
      { question: 'How much does gastric sleeve cost in India?', questionAr: 'كم تكلفة تكميم المعدة في الهند؟', answer: 'Gastric sleeve surgery in India costs $4,000-$6,000 compared to $15,000-$25,000 in the USA and $8,000-$12,000 in the UAE.', answerAr: 'تكلفة تكميم المعدة في الهند 4,000-6,000 دولار مقارنة بـ 15,000-25,000 دولار في أمريكا و8,000-12,000 في الإمارات.' },
      { question: 'What is the minimum BMI for bariatric surgery in India?', questionAr: 'ما الحد الأدنى لمؤشر كتلة الجسم لجراحة السمنة في الهند؟', answer: 'Most surgeons operate on patients with BMI 35+ or BMI 30+ with obesity-related conditions like diabetes, hypertension, or sleep apnoea.', answerAr: 'معظم الجراحين يجرون العملية لمرضى مؤشر كتلة الجسم 35+ أو 30+ مع حالات مرتبطة بالسمنة كالسكري وارتفاع الضغط وتوقف التنفس أثناء النوم.' },
      { question: 'Is robotic bariatric surgery available in India?', questionAr: 'هل جراحة السمنة الروبوتية متاحة في الهند؟', answer: 'Yes, select hospitals offer robotic-assisted bariatric surgery using the Da Vinci system for greater precision, smaller incisions, and faster recovery.', answerAr: 'نعم، مستشفيات مختارة تقدم جراحة السمنة بمساعدة الروبوت باستخدام نظام دافنشي لدقة أعلى وشقوق أصغر وتعافي أسرع.' },
      { question: 'How much weight can I lose after surgery?', questionAr: 'كم من الوزن يمكنني خسارته بعد الجراحة؟', answer: 'Patients typically lose 60-80% of excess body weight within 12-18 months. Gastric sleeve patients average 25-35 kg loss in the first year.', answerAr: 'يفقد المرضى عادة 60-80% من الوزن الزائد خلال 12-18 شهراً. مرضى التكميم يفقدون بمعدل 25-35 كجم في السنة الأولى.' },
      { question: 'How long should I stay in India after bariatric surgery?', questionAr: 'كم مدة الإقامة في الهند بعد جراحة السمنة؟', answer: 'Plan for 7-10 days in India. Hospital stay is 2-3 days, followed by dietary counselling and post-operative check-ups before flying home.', answerAr: 'خطط لـ 7-10 أيام في الهند. الإقامة في المستشفى 2-3 أيام، تليها استشارات غذائية وفحوصات متابعة قبل السفر.' },
      { question: 'Will I get diet support after returning to GCC?', questionAr: 'هل سأحصل على دعم غذائي بعد العودة للخليج؟', answer: 'Yes, our team provides a 12-month post-surgery nutrition plan, virtual dietician consultations, and WhatsApp support for ongoing guidance after you return home.', answerAr: 'نعم، فريقنا يوفر خطة تغذية لمدة 12 شهراً بعد الجراحة واستشارات أخصائي تغذية افتراضية ودعم عبر واتساب للمتابعة المستمرة بعد العودة.' },
    ],
  },
  'transplant-surgeons': {
    name: 'Transplant Surgeons',
    nameAr: 'جراحو زراعة الأعضاء',
    title: 'Best Transplant Surgeons in India',
    titleAr: 'أفضل جراحي زراعة الأعضاء في الهند',
    description:
      'India is a global hub for organ transplant surgery including liver, kidney, bone marrow, heart, and lung transplants. Transplant surgeons have 90-95% success rates, use living donor programmes, and offer comprehensive post-transplant care at 60-80% lower costs.',
    descriptionAr:
      'الهند مركز عالمي لجراحة زراعة الأعضاء تشمل الكبد والكلى ونخاع العظم والقلب والرئة. يحقق جراحو الزراعة نسب نجاح 90-95%، ويقدمون برامج متبرعين أحياء ورعاية شاملة بعد الزراعة بتكلفة أقل 60-80%.',
    topDoctors: [
      { name: 'Dr. A. S. Soin', hospital: 'Medanta, Gurugram', experience: 30, specialization: 'Liver Transplant Surgery', proceduresPerformed: 4000 },
      { name: 'Dr. Anant Kumar', hospital: 'Max Super Speciality, Delhi', experience: 28, specialization: 'Kidney Transplant & Urology', proceduresPerformed: 5000 },
      { name: 'Dr. Dharma Choudhary', hospital: 'BLK-Max Hospital, Delhi', experience: 25, specialization: 'Bone Marrow Transplant', proceduresPerformed: 3500 },
      { name: 'Dr. Sandeep Attawar', hospital: 'KIMS Hospital, Hyderabad', experience: 22, specialization: 'Heart & Lung Transplant', proceduresPerformed: 1500 },
      { name: 'Dr. Subhash Gupta', hospital: 'Max Super Speciality, Delhi', experience: 32, specialization: 'Living Donor Liver Transplant', proceduresPerformed: 3800 },
    ],
    relatedTreatments: [
      { slug: 'liver-transplant-india', label: 'Liver Transplant', labelAr: 'زراعة الكبد' },
      { slug: 'kidney-transplant-india', label: 'Kidney Transplant', labelAr: 'زراعة الكلى' },
      { slug: 'bone-marrow-transplant-india', label: 'Bone Marrow Transplant', labelAr: 'زراعة نخاع العظم' },
    ],
    faqs: [
      { question: 'What types of organ transplants are performed in India?', questionAr: 'ما أنواع زراعة الأعضاء المتاحة في الهند؟', answer: 'India performs liver, kidney, heart, lung, bone marrow, cornea, and pancreas transplants at JCI-accredited hospitals with dedicated transplant units.', answerAr: 'تجري الهند زراعة الكبد والكلى والقلب والرئة ونخاع العظم والقرنية والبنكرياس في مستشفيات معتمدة من JCI مع وحدات زراعة متخصصة.' },
      { question: 'How much does a liver transplant cost in India?', questionAr: 'كم تكلفة زراعة الكبد في الهند؟', answer: 'Liver transplant in India costs $30,000-$45,000 compared to $300,000-$500,000 in the USA, saving patients up to 90% with the same outcomes.', answerAr: 'تكلفة زراعة الكبد في الهند 30,000-45,000 دولار مقارنة بـ 300,000-500,000 دولار في أمريكا، مما يوفر للمرضى حتى 90% بنفس النتائج.' },
      { question: 'What is the success rate of organ transplants in India?', questionAr: 'ما نسبة نجاح زراعة الأعضاء في الهند؟', answer: 'Indian transplant centres achieve 90-95% success rates for kidney and liver transplants, matching leading US and European centres.', answerAr: 'تحقق مراكز الزراعة الهندية نسب نجاح 90-95% لزراعة الكلى والكبد، مماثلة لأفضل المراكز الأمريكية والأوروبية.' },
      { question: 'Can GCC patients bring a living donor to India?', questionAr: 'هل يمكن لمرضى الخليج إحضار متبرع حي إلى الهند؟', answer: 'Yes, living donor transplants are legal in India for blood relatives and spouses. Our team assists with all documentation and government approvals.', answerAr: 'نعم، زراعة الأعضاء من متبرع حي قانونية في الهند لأقارب الدم والأزواج. فريقنا يساعد في جميع المستندات والموافقات الحكومية.' },
      { question: 'How long is the recovery after organ transplant in India?', questionAr: 'كم مدة التعافي بعد زراعة الأعضاء في الهند؟', answer: 'Plan for 4-8 weeks in India after transplant. Kidney transplant patients stay 3-4 weeks; liver transplant patients need 6-8 weeks of monitoring.', answerAr: 'خطط لـ 4-8 أسابيع في الهند بعد الزراعة. مرضى زراعة الكلى يحتاجون 3-4 أسابيع ومرضى زراعة الكبد 6-8 أسابيع للمتابعة.' },
      { question: 'Is post-transplant care available remotely for GCC patients?', questionAr: 'هل الرعاية بعد الزراعة متاحة عن بعد لمرضى الخليج؟', answer: 'Yes, our team provides teleconsultations, medication management, blood test monitoring, and coordinates with your local doctors for ongoing care after you return.', answerAr: 'نعم، فريقنا يوفر استشارات عن بعد وإدارة الأدوية ومتابعة فحوصات الدم والتنسيق مع أطبائكم المحليين للرعاية المستمرة بعد العودة.' },
    ],
  },
};

const SPECIALTY_SLUGS = Object.keys(SPECIALTIES);

// ---------------------------------------------------------------------------
// Static Params & Metadata
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  return SPECIALTY_SLUGS.map((specialty) => ({ specialty }));
}

type PageProps = { params: Promise<{ locale: string; specialty: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale, specialty } = await params;
  const data = SPECIALTIES[specialty];
  if (!data) return { title: 'Specialists | Shifa AlHind' };

  return generateSEOMetadata({
    title_en: `Best ${data.name} in India for GCC Patients | Top Doctors 2026`,
    title_ar: `أفضل ${data.nameAr} في الهند لمرضى الخليج | أفضل الأطباء 2026`,
    description_en: data.description,
    description_ar: data.descriptionAr,
    locale,
    path: `/specialists/${specialty}`,
    keywords: [
      `best ${data.name.toLowerCase()} India`,
      `top ${data.name.toLowerCase()} India GCC`,
      `${data.name.toLowerCase()} India cost`,
      `${data.name.toLowerCase()} India for UAE patients`,
      `${data.name.toLowerCase()} India for Saudi patients`,
      `Indian ${data.name.toLowerCase()} for Gulf patients`,
    ],
  });
}

// ---------------------------------------------------------------------------
// Helper: icon for specialty
// ---------------------------------------------------------------------------

function specialtyIcon(slug: string) {
  const map: Record<string, React.ReactNode> = {
    cardiologists: <Heart className="h-6 w-6" />,
    oncologists: <Sparkles className="h-6 w-6" />,
    'orthopedic-surgeons': <Bone className="h-6 w-6" />,
    neurosurgeons: <Brain className="h-6 w-6" />,
    'ivf-specialists': <Baby className="h-6 w-6" />,
    'cosmetic-surgeons': <SmilePlus className="h-6 w-6" />,
    ophthalmologists: <Eye className="h-6 w-6" />,
    dentists: <SmilePlus className="h-6 w-6" />,
    'bariatric-surgeons': <Weight className="h-6 w-6" />,
    'transplant-surgeons': <Stethoscope className="h-6 w-6" />,
  };
  return map[slug] || <Stethoscope className="h-6 w-6" />;
}

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default async function SpecialtyPage({ params }: PageProps) {
  const { locale, specialty } = await params;
  const data = SPECIALTIES[specialty];
  if (!data) notFound();

  const isAr = locale === 'ar';
  const dir = isAr ? 'rtl' : 'ltr';

  // Bilingual labels
  const t = {
    heroStats: isAr
      ? [
          { label: '25+', value: 'سنة خبرة' },
          { label: '50,000+', value: 'عملية ناجحة' },
          { label: '40+', value: 'مستشفى JCI' },
          { label: '10,000+', value: 'مريض من الخليج' },
        ]
      : [
          { label: '25+', value: 'Years Experience' },
          { label: '50,000+', value: 'Procedures Done' },
          { label: '40+', value: 'JCI Hospitals' },
          { label: '10,000+', value: 'GCC Patients Served' },
        ],
    topDoctorsTitle: isAr ? `أفضل 5 ${data.nameAr} في الهند` : `Top 5 ${data.name} in India`,
    topDoctorsSubtitle: isAr
      ? 'أطباء معتمدون دولياً بخبرة عقود في خدمة مرضى الخليج'
      : 'Internationally trained, board-certified specialists with decades of experience serving GCC patients',
    experience: isAr ? 'سنة خبرة' : 'Years Experience',
    procedures: isAr ? 'عملية ناجحة' : 'Procedures',
    hospital: isAr ? 'المستشفى' : 'Hospital',
    specialization: isAr ? 'التخصص' : 'Specialization',
    whyTitle: isAr ? `لماذا تختار ${data.nameAr} في الهند؟` : `Why Choose Indian ${data.name}?`,
    whyReasons: isAr
      ? [
          { icon: <Award className="h-8 w-8 text-primary-600" />, title: 'تدريب عالمي', desc: 'أطباء متدربون في هارفارد ومايو كلينك وجونز هوبكنز مع شهادات أمريكية وبريطانية.' },
          { icon: <Shield className="h-8 w-8 text-primary-600" />, title: 'مستشفيات معتمدة JCI', desc: 'أكثر من 40 مستشفى حاصل على اعتماد JCI الدولي، المعيار الذهبي للجودة الصحية.' },
          { icon: <Globe className="h-8 w-8 text-primary-600" />, title: 'دعم عربي كامل', desc: 'منسقون ناطقون بالعربية عاشوا في الخليج 5-15 سنة يفهمون ثقافتكم واحتياجاتكم.' },
          { icon: <BadgeCheck className="h-8 w-8 text-primary-600" />, title: 'توفير 70-90%', desc: 'نفس الجودة والتقنيات العالمية بأسعار أقل 70-90% من أمريكا وأوروبا والخليج.' },
        ]
      : [
          { icon: <Award className="h-8 w-8 text-primary-600" />, title: 'World-Class Training', desc: 'Doctors trained at Harvard, Mayo Clinic, and Johns Hopkins with US and UK board certifications.' },
          { icon: <Shield className="h-8 w-8 text-primary-600" />, title: 'JCI Accredited Hospitals', desc: '40+ hospitals with Joint Commission International accreditation, the global gold standard for healthcare quality.' },
          { icon: <Globe className="h-8 w-8 text-primary-600" />, title: 'Full Arabic Support', desc: 'Arabic-speaking coordinators who lived in GCC for 5-15 years understand your culture and needs.' },
          { icon: <BadgeCheck className="h-8 w-8 text-primary-600" />, title: 'Save 70-90%', desc: 'Same technology and quality as Western hospitals at 70-90% lower cost for GCC patients.' },
        ],
    relatedTitle: isAr ? 'علاجات ذات صلة' : 'Related Treatments',
    relatedSubtitle: isAr
      ? 'استكشف العلاجات المتوفرة من أفضل المتخصصين'
      : 'Explore treatments available from our top specialists',
    viewTreatment: isAr ? 'عرض التفاصيل' : 'View Treatment',
    faqTitle: isAr ? 'الأسئلة الشائعة' : 'Frequently Asked Questions',
    faqSubtitle: isAr
      ? `إجابات على أهم أسئلتكم حول ${data.nameAr} في الهند`
      : `Answers to your most important questions about ${data.name} in India`,
    ctaTitle: isAr ? 'احجز استشارتك المجانية اليوم' : 'Book Your Free Consultation Today',
    ctaSubtitle: isAr
      ? `تواصل مع أفضل ${data.nameAr} في الهند. فريقنا الناطق بالعربية جاهز لمساعدتك.`
      : `Connect with the best ${data.name} in India. Our Arabic-speaking team is ready to help you.`,
    ctaWhatsApp: isAr ? 'تواصل عبر واتساب' : 'Chat on WhatsApp',
    ctaViewDoctors: isAr ? 'عرض جميع الأطباء' : 'View All Doctors',
    breadcrumbHome: isAr ? 'الرئيسية' : 'Home',
    breadcrumbDoctors: isAr ? 'الأطباء' : 'Doctors',
  };

  // JSON-LD Schemas
  const baseUrl = 'https://shifaalhind.onrender.com';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/${locale}` },
      { '@type': 'ListItem', position: 2, name: 'Doctors', item: `${baseUrl}/${locale}/doctors` },
      { '@type': 'ListItem', position: 3, name: data.name, item: `${baseUrl}/${locale}/specialists/${specialty}` },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((faq) => ({
      '@type': 'Question',
      name: isAr ? faq.questionAr : faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: isAr ? faq.answerAr : faq.answer,
      },
    })),
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: isAr ? data.titleAr : data.title,
    numberOfItems: data.topDoctors.length,
    itemListElement: data.topDoctors.map((doc, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Physician',
        name: doc.name,
        medicalSpecialty: doc.specialization,
        worksFor: { '@type': 'Hospital', name: doc.hospital },
        description: `${doc.experience} years experience, ${doc.proceduresPerformed.toLocaleString()} procedures performed`,
      },
    })),
  };

  const medicalSpecialtySchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalSpecialty',
    name: data.name,
    description: data.description,
    url: `${baseUrl}/${locale}/specialists/${specialty}`,
  };

  return (
    <div dir={dir} className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSpecialtySchema) }} />

      {/* ----------------------------------------------------------------- */}
      {/* Hero Section */}
      {/* ----------------------------------------------------------------- */}
      <section className="relative bg-gradient-to-r from-primary-700 to-primary-900 px-4 py-16 text-white md:py-24">
        <div className="container mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-primary-200">
            <Link href={`/${locale}`} className="hover:text-white">{t.breadcrumbHome}</Link>
            <span>/</span>
            <Link href={`/${locale}/doctors`} className="hover:text-white">{t.breadcrumbDoctors}</Link>
            <span>/</span>
            <span className="text-white font-medium">{isAr ? data.nameAr : data.name}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-xl bg-white/20 p-3">{specialtyIcon(specialty)}</div>
            <h1 className="text-3xl font-bold md:text-5xl">{isAr ? data.titleAr : data.title}</h1>
          </div>
          <p className="mt-4 max-w-3xl text-lg text-primary-100 leading-relaxed">
            {isAr ? data.descriptionAr : data.description}
          </p>

          {/* Trust Stats */}
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {t.heroStats.map((stat, i) => (
              <div key={i} className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm">
                <div className="text-2xl font-bold md:text-3xl">{stat.label}</div>
                <div className="mt-1 text-sm text-primary-200">{stat.value}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600"
            >
              <MessageCircle className="h-5 w-5" />
              {t.ctaWhatsApp}
            </Link>
            <Link
              href={`/${locale}/doctors`}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              {t.ctaViewDoctors}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Top Doctors Grid */}
      {/* ----------------------------------------------------------------- */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900">{t.topDoctorsTitle}</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">{t.topDoctorsSubtitle}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.topDoctors.map((doc, i) => (
              <Card key={i} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-primary-50 to-blue-50 pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg text-gray-900">{doc.name}</CardTitle>
                      <p className="mt-1 text-sm text-gray-600 flex items-center gap-1">
                        <Building2 className="h-4 w-4" />
                        {doc.hospital}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-800">
                      <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                      {isAr ? 'متميز' : 'Top'}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-primary-600" />
                      <span className="font-medium">{t.specialization}:</span> {doc.specialization}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-gray-700">
                        <Clock className="h-4 w-4 text-primary-600" />
                        {doc.experience} {t.experience}
                      </span>
                      <span className="flex items-center gap-2 text-gray-700">
                        <Users className="h-4 w-4 text-primary-600" />
                        {doc.proceduresPerformed.toLocaleString()} {t.procedures}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Why Choose Indian Specialists */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">{t.whyTitle}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.whyReasons.map((reason, i) => (
              <Card key={i} className="border-0 shadow-md text-center p-6">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50">
                  {reason.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{reason.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{reason.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Related Treatments */}
      {/* ----------------------------------------------------------------- */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900">{t.relatedTitle}</h2>
            <p className="mt-3 text-gray-600">{t.relatedSubtitle}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.relatedTreatments.map((treatment, i) => (
              <Link key={i} href={`/${locale}/treatments/${treatment.slug}`}>
                <Card className="group border-0 shadow-md transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer h-full">
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-primary-100 p-2 text-primary-700">
                        {specialtyIcon(specialty)}
                      </div>
                      <span className="font-semibold text-gray-900">
                        {isAr ? treatment.labelAr : treatment.label}
                      </span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* FAQ Section */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900">{t.faqTitle}</h2>
            <p className="mt-3 text-gray-600">{t.faqSubtitle}</p>
          </div>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <Card key={i} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {isAr ? faq.questionAr : faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {isAr ? faq.answerAr : faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* WhatsApp CTA */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 px-4 py-16 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <MessageCircle className="mx-auto mb-4 h-12 w-12" />
          <h2 className="text-3xl font-bold">{t.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-green-100">{t.ctaSubtitle}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-bold text-green-700 transition hover:bg-green-50"
            >
              <MessageCircle className="h-6 w-6" />
              {t.ctaWhatsApp}
            </Link>
            <Link
              href={`/${locale}/doctors`}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
            >
              {t.ctaViewDoctors}
              <ArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Trust Badges */}
      {/* ----------------------------------------------------------------- */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-6xl">
          <TrustBadges />
        </div>
      </section>
    </div>
  );
}

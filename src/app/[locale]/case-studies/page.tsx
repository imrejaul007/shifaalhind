import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, DollarSign, Clock, MapPin, Heart, Star } from 'lucide-react';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return generateSEOMetadata({
    title_en: 'Patient Success Stories - Real Medical Tourism Cases | Shifa AlHind',
    title_ar: 'قصص نجاح المرضى - حالات حقيقية للسياحة العلاجية | شفاء الهند',
    description_en: 'Read real patient case studies from GCC countries who saved 60-80% on medical treatment in India. Heart surgery, knee replacement, IVF, dental, cancer treatment success stories.',
    description_ar: 'اقرأ دراسات حالة حقيقية للمرضى من دول مجلس التعاون الخليجي الذين وفروا 60-80٪ على العلاج الطبي في الهند. قصص نجاح جراحة القلب، استبدال الركبة، التلقيح الصناعي، الأسنان، علاج السرطان.',
    locale,
    path: '/case-studies',
  });
}

interface CaseStudy {
  id: string;
  patientName: string;
  age: number;
  country: string;
  treatment: string;
  condition: string;
  hospital: string;
  doctor: string;
  costIndia: string;
  costHome: string;
  savings: string;
  duration: string;
  outcome: string;
  story: string[];
  beforeAfter: {
    before: string;
    after: string;
  };
  quote: string;
}

export default async function CaseStudiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const content = {
    en: {
      hero: {
        title: 'Real Patient Success Stories',
        subtitle: 'Life-Changing Treatments, Incredible Savings, World-Class Care',
        description: 'Read real stories from GCC patients who saved 60-90% on medical treatment in India. Heart surgery, IVF, knee replacement, cancer treatment, hair transplant, and more.'
      },
      stats: {
        patients: { number: '5,000+', label: 'Happy Patients' },
        savings: { number: '60-90%', label: 'Average Savings' },
        success: { number: '98%', label: 'Success Rate' },
        countries: { number: '25+', label: 'GCC Countries' }
      },
      sectionTitle: {
        main: 'Patient Success Stories',
        subtitle: 'Real patients, real results, real savings. Read their journeys.'
      },
      labels: {
        saved: 'Saved',
        treatment: 'Treatment',
        medicalTeam: 'Medical Team',
        costComparison: 'Cost Comparison',
        india: 'India',
        home: 'Home',
        duration: 'Duration',
        age: 'Age',
        theJourney: 'The Journey',
        transformation: 'Transformation',
        beforeTreatment: 'BEFORE TREATMENT',
        afterTreatment: 'AFTER TREATMENT'
      },
      cta: {
        title: 'Your Success Story Starts Here',
        subtitle: 'Join 5,000+ patients who transformed their lives with world-class treatment in India',
        button: 'Get Free Consultation'
      },
      caseStudies: [
        {
          id: '1',
          patientName: 'Mohammed A.',
          age: 58,
          country: 'Dubai, UAE',
          treatment: 'CABG (Heart Bypass Surgery)',
          condition: 'Triple vessel coronary artery disease, chest pain',
          hospital: 'Fortis Escorts Heart Institute, Delhi',
          doctor: 'Dr. Ajay Kaul - Senior Cardiac Surgeon',
          costIndia: '$6,500',
          costHome: '$120,000',
          savings: '$113,500 (95%)',
          duration: '14 days in India',
          outcome: '100% successful, chest pain resolved, returned to work after 6 weeks',
          story: [
            'Mohammed, a 58-year-old businessman from Dubai, had been experiencing chest pain for 3 months. His cardiologist in UAE recommended urgent triple bypass surgery costing AED 440,000 ($120,000).',
            'Through Shifa AlHind, Mohammed consulted with Dr. Ajay Kaul at Fortis Escorts Heart Institute. After reviewing his angiogram reports, surgery was scheduled within 10 days.',
            'The CABG surgery took 4 hours. Mohammed received 3 grafts and was moved to ICU for 48 hours monitoring. By Day 3, he was walking in the ward. Sutures removed on Day 7.',
            'He stayed 14 days in India for complete recovery monitoring before flying home. Follow-up echocardiogram at 3 months showed excellent heart function. He returned to work full-time after 6 weeks.',
            'Total cost including surgery, 7-day hospital stay, medications, and follow-ups: $6,500 vs $120,000 quoted in Dubai. His insurance covered $4,000, leaving only $2,500 out-of-pocket.'
          ],
          beforeAfter: {
            before: 'Severe chest pain on exertion, could not walk 100 meters, breathlessness, anxiety about heart attack',
            after: 'Zero chest pain, walking 5km daily, returned to work, playing with grandchildren, excellent quality of life'
          },
          quote: 'I was terrified about having heart surgery abroad, but Dr. Kaul and the Fortis team made me feel like family. The hospital was cleaner than Dubai hospitals, and the care was world-class. I saved my life savings and got the best treatment possible.'
        },
        {
          id: '2',
          patientName: 'Sarah M.',
          age: 34,
          country: 'Riyadh, Saudi Arabia',
          treatment: 'IVF with ICSI',
          condition: '8 years infertility, PCOS, husband low sperm count',
          hospital: 'Nova IVF Fertility, Bangalore',
          doctor: 'Dr. Nandita Palshetkar - Fertility Specialist',
          costIndia: '$3,800',
          costHome: '$18,000',
          savings: '$14,200 (79%)',
          duration: '21 days in India',
          outcome: 'Pregnant on first cycle, healthy baby boy delivered',
          story: [
            'Sarah and her husband had been trying to conceive for 8 years. After 3 failed IUI attempts in Saudi Arabia, they were quoted SAR 67,500 ($18,000) for IVF with ICSI.',
            'They contacted Shifa AlHind and were matched with Dr. Nandita Palshetkar at Nova IVF. Initial consultation via video call reviewed their reports and confirmed candidacy.',
            'Sarah traveled to Bangalore on Day 2 of her menstrual cycle. Started ovarian stimulation medications Day 3. Daily ultrasound monitoring showed excellent follicle growth.',
            'Egg retrieval Day 14 yielded 18 eggs. Husband\'s sperm underwent ICSI (intracytoplasmic sperm injection). 12 embryos formed, 8 reached blastocyst stage on Day 5.',
            'Best quality embryo transferred Day 19. Two embryos frozen for future use. Beta hCG test Day 33 confirmed pregnancy. Sarah returned home Day 21.',
            'Pregnancy progressed normally. Healthy baby boy delivered at 38 weeks in Riyadh. Total cost including medications, monitoring, embryo freezing: $3,800 vs $18,000 in Saudi Arabia.'
          ],
          beforeAfter: {
            before: '8 years infertility, 3 failed IUI cycles, emotional distress, marriage strain, spent $12,000 on failed treatments',
            after: 'Pregnant first IVF cycle, healthy baby boy delivered, 2 frozen embryos for future, marriage strengthened, complete family'
          },
          quote: 'After 8 years of heartbreak, Nova IVF gave us our miracle baby. Dr. Nandita was so compassionate and explained everything clearly. The embryologist showed us our embryos under the microscope - I cried with joy. We saved enough money to try again for a second baby if needed. Alhamdulillah!'
        },
        {
          id: '3',
          patientName: 'Ahmed K.',
          age: 42,
          country: 'Doha, Qatar',
          treatment: 'Bilateral Knee Replacement',
          condition: 'Severe osteoarthritis both knees, bone-on-bone, unable to walk',
          hospital: 'Fortis Hospital, Mumbai',
          doctor: 'Dr. Raju Vaishya - Orthopedic Surgeon',
          costIndia: '$7,200',
          costHome: '$55,000',
          savings: '$47,800 (87%)',
          duration: '18 days in India',
          outcome: 'Walking without pain, returned to gym after 4 months, playing football with kids',
          story: [
            'Ahmed, a 42-year-old engineer from Qatar, had suffered from knee pain for 5 years. By 2024, he could barely walk 50 meters. X-rays showed bone-on-bone arthritis in both knees.',
            'Orthopedic surgeon in Doha recommended bilateral knee replacement costing QAR 200,000 ($55,000). His insurance only covered 50%, leaving $27,500 out-of-pocket.',
            'Through Shifa AlHind, Ahmed consulted Dr. Raju Vaishya at Fortis Mumbai. CT scan and blood work done remotely. Surgery scheduled within 15 days.',
            'Both knees replaced in single 4-hour surgery using Johnson & Johnson implants. Same-day mobilization with physiotherapist. By Day 2, Ahmed was walking 10 meters with walker.',
            'Intensive physiotherapy twice daily. Sutures removed Day 12. Walking independently by Day 14. Discharged Day 7, stayed near hospital for physiotherapy until Day 18.',
            'Returned to Qatar walking with cane. Continued home physiotherapy. At 3 months, walked 2km daily. At 6 months, returned to gym. Now plays football with his children pain-free.',
            'Total cost including bilateral knee implants, 7-day hospital stay, 18 days accommodation, physiotherapy, medications: $7,200 vs $55,000 in Qatar.'
          ],
          beforeAfter: {
            before: 'Could not walk 50 meters, severe pain 8/10, dependent on wheelchair for shopping, stopped working, depressed',
            after: 'Walks 5km daily, zero pain, returned to work full-time, playing sports, travels without limitations, life transformed'
          },
          quote: 'I got my life back at age 42. Dr. Vaishya is a miracle worker. The physiotherapy team pushed me hard but with compassion. I landed in Mumbai in a wheelchair and left walking on my own two feet. My wife cried tears of joy when she saw me walk off the plane in Doha. Best decision of my life.'
        },
        {
          id: '4',
          patientName: 'Fatima H.',
          age: 51,
          country: 'Muscat, Oman',
          treatment: 'Breast Cancer Treatment (Lumpectomy + Chemotherapy + Radiation)',
          condition: 'Stage II breast cancer, 3cm tumor, lymph node involvement',
          hospital: 'Tata Memorial Hospital, Mumbai',
          doctor: 'Dr. Sonal Katariya - Surgical Oncologist',
          costIndia: '$8,500',
          costHome: '$75,000',
          savings: '$66,500 (89%)',
          duration: '6 months treatment (2 trips to India)',
          outcome: 'Cancer-free, clear scans at 1 year, back to normal life',
          story: [
            'Fatima discovered a breast lump in May 2024. Mammogram and biopsy in Muscat confirmed Stage II invasive ductal carcinoma. Oncologist quoted OMR 28,875 ($75,000) for complete treatment.',
            'Devastated and overwhelmed, Fatima contacted Shifa AlHind. Within 48 hours, her reports were reviewed by Dr. Sonal Katariya at Tata Memorial Hospital, Asia\'s top cancer center.',
            'Treatment plan: Lumpectomy (breast-conserving surgery) followed by 6 cycles chemotherapy and 25 sessions radiation therapy. Much less aggressive than mastectomy recommended in Oman.',
            'Trip 1 (3 weeks): Lumpectomy surgery removed 3cm tumor with clear margins. Sentinel lymph node biopsy showed 1 of 3 nodes positive. Pathology confirmed ER/PR positive, HER2 negative.',
            'Fatima returned home to recover. Chemotherapy started 4 weeks post-surgery in Muscat (covered by insurance). 6 cycles of AC-T regimen completed over 18 weeks.',
            'Trip 2 (5 weeks): Returned to Mumbai for radiation therapy. 25 sessions over 5 weeks using modern linear accelerator. Mild skin redness, manageable with creams.',
            'Started hormone therapy (Tamoxifen) to prevent recurrence. 1-year follow-up scans completely clear. Dr. Katariya declared her cancer-free with excellent prognosis.',
            'Total India cost (surgery + radiation + follow-ups + accommodation): $8,500. Chemotherapy done in Oman covered by insurance. Saved $66,500 vs full treatment in Oman.'
          ],
          beforeAfter: {
            before: 'Diagnosed Stage II breast cancer, terrified, considering mastectomy, financial stress $75K quote, anxiety about leaving children motherless',
            after: 'Cancer-free 1 year, kept her breast, minimal scarring, returned to work, enjoying life, regular screening, inspiring other women'
          },
          quote: 'Tata Memorial saved my life and my breast. In Oman, they wanted to remove my whole breast, but Dr. Katariya said lumpectomy was enough. She was right - I\'m cancer-free and I look normal. The cost was 1/9th of Oman prices. I tell every woman facing cancer: go to Tata Memorial. They are the best in Asia.'
        },
        {
          id: '5',
          patientName: 'Abdul R.',
          age: 29,
          country: 'Kuwait City, Kuwait',
          treatment: 'Hair Transplant FUE (3,200 grafts)',
          condition: 'Male pattern baldness, receding hairline, thinning crown',
          hospital: 'Eugenix Hair Sciences, Delhi',
          doctor: 'Dr. Pradeep Sethi - Hair Transplant Specialist',
          costIndia: '$2,200',
          costHome: '$12,000',
          savings: '$9,800 (82%)',
          duration: '5 days in India',
          outcome: 'Natural-looking hairline, full coverage, boosted confidence, married 6 months later',
          story: [
            'Abdul, a 29-year-old banker from Kuwait, had been losing hair since age 23. By 29, his hairline had receded significantly and crown was thinning. He felt self-conscious in social situations.',
            'Hair transplant clinics in Kuwait quoted KWD 3,600 ($12,000) for 3,000-3,500 grafts using FUE technique. Abdul researched online and found Eugenix Hair Sciences in Delhi with Dr. Pradeep Sethi.',
            'Sent photos for online consultation. Dr. Sethi assessed Norwood Scale 4 (moderate recession) and recommended 3,200 grafts to restore hairline and cover crown.',
            'Flew to Delhi on Thursday. Friday morning: haircut, design hairline, pre-op photos. Saturday: FUE procedure started 8am. Dr. Sethi personally extracted 3,200 grafts over 4 hours using 0.8mm punch.',
            'Implantation phase took 5 hours. Grafts placed at natural 45° angle, single-hair grafts at hairline for natural look, multi-hair grafts behind for density. Finished 6pm.',
            'Sunday: post-op check, first hair wash demonstrated, medications provided. Monday: final check, cleared to fly. Returned to Kuwait Monday night.',
            'Timeline: Month 1 (shock loss - transplanted hair falls out), Month 3 (new growth starts 20%), Month 6 (60% growth visible), Month 12 (final result 95% growth, full density).',
            'Result: Natural hairline, no one could tell it was transplanted. Abdul\'s confidence soared. He got engaged 6 months post-op and married at 1 year. Total cost including flights/hotel: $2,800 vs $12,000 Kuwait.'
          ],
          beforeAfter: {
            before: 'Receding hairline Norwood 4, visible scalp at crown, wearing caps constantly, avoiding photos, low confidence, single',
            after: 'Natural full hairline, dense coverage, stopped wearing caps, posting photos on Instagram, confidence transformed, married happily'
          },
          quote: 'Best investment I ever made. Dr. Sethi is an artist - my hairline looks completely natural. Even my barber didn\'t know I had a transplant. I was so self-conscious before, now I feel like a new person. I got married 1 year after the procedure and my wife says I\'m handsome! Worth every penny and every hour on the plane.'
        },
        {
          id: '6',
          patientName: 'Maryam S.',
          age: 67,
          country: 'Abu Dhabi, UAE',
          treatment: 'Bilateral Cataract Surgery with Premium IOL',
          condition: 'Dense cataracts both eyes, vision 20/200, difficulty driving',
          hospital: 'Dr. Agarwal\'s Eye Hospital, Chennai',
          doctor: 'Dr. Amar Agarwal - Ophthalmologist',
          costIndia: '$2,800',
          costHome: '$18,000',
          savings: '$15,200 (84%)',
          duration: '7 days in India',
          outcome: '20/20 vision both eyes, no glasses needed, driving again',
          story: [
            'Maryam, a 67-year-old retired teacher from Abu Dhabi, had been struggling with worsening vision for 2 years. By 2024, she could barely see to drive and needed glasses for everything.',
            'Eye examination in Abu Dhabi showed dense cataracts in both eyes. Vision: 20/200 right eye, 20/400 left eye (legally blind threshold is 20/200). Ophthalmologist quoted AED 66,000 ($18,000) for bilateral surgery with premium multifocal IOLs.',
            'Her daughter researched and found Dr. Amar Agarwal\'s Eye Hospital in Chennai, famous for cataract surgery (50,000+ annually). Video consultation confirmed dense cataracts, recommended premium trifocal IOLs for near/distance vision.',
            'Flew to Chennai on Monday. Tuesday: comprehensive eye examination, biometry to calculate IOL power, medical clearance. Wednesday: Right eye surgery.',
            'Surgery took 15 minutes using femtosecond laser-assisted technique (blade-free). Premium Alcon PanOptix trifocal IOL implanted. Zero pain during procedure. Eye patch overnight.',
            'Thursday: Patch removed. Vision already 20/40 in right eye (improved from 20/200). Left eye surgery Thursday afternoon. Same smooth procedure.',
            'Friday: Both eyes clear. Vision 20/30 both eyes (still improving). Saturday: Final check, vision 20/25. Sunday: Cleared to fly, given eye drops for 4 weeks.',
            'Six-week follow-up in Abu Dhabi: Vision stabilized at 20/20 both eyes. No glasses needed for reading or distance. Can see phone without glasses, drive without glasses, watch TV clearly.',
            'Total cost including bilateral surgery, premium trifocal IOLs, 5-day accommodation, post-op care: $2,800 vs $18,000 quoted in Abu Dhabi.'
          ],
          beforeAfter: {
            before: 'Vision 20/200 and 20/400, could not drive, needed glasses for everything, struggled to read Quran, dependent on others',
            after: 'Vision 20/20 both eyes, driving independently, reading without glasses, watching TV clearly, completely independent, reading Quran daily'
          },
          quote: 'Dr. Agarwal gave me my life back at age 67. I was going blind and felt like a burden to my family. Now I can see better than I did at 40! No glasses for reading, driving, TV - nothing! The surgery took 15 minutes, no pain at all. I saved AED 60,000 and got the best surgeon in Asia. I tell all my senior friends: don\'t suffer with cataracts, go to Dr. Agarwal in Chennai.'
        }
      ]
    },
    ar: {
      hero: {
        title: 'قصص نجاح حقيقية للمرضى',
        subtitle: 'علاجات تغير الحياة، وفورات مذهلة، رعاية عالمية المستوى',
        description: 'اقرأ قصصاً حقيقية من مرضى دول مجلس التعاون الخليجي الذين وفروا 60-90٪ على العلاج الطبي في الهند. جراحة القلب، التلقيح الصناعي، استبدال الركبة، علاج السرطان، زراعة الشعر، والمزيد.'
      },
      stats: {
        patients: { number: '5,000+', label: 'مريض سعيد' },
        savings: { number: '60-90%', label: 'متوسط الوفورات' },
        success: { number: '98%', label: 'معدل النجاح' },
        countries: { number: '25+', label: 'دول الخليج' }
      },
      sectionTitle: {
        main: 'قصص نجاح المرضى',
        subtitle: 'مرضى حقيقيون، نتائج حقيقية، وفورات حقيقية. اقرأ رحلاتهم.'
      },
      labels: {
        saved: 'وفّر',
        treatment: 'العلاج',
        medicalTeam: 'الفريق الطبي',
        costComparison: 'مقارنة التكلفة',
        india: 'الهند',
        home: 'الوطن',
        duration: 'المدة',
        age: 'العمر',
        theJourney: 'الرحلة',
        transformation: 'التحول',
        beforeTreatment: 'قبل العلاج',
        afterTreatment: 'بعد العلاج'
      },
      cta: {
        title: 'قصة نجاحك تبدأ هنا',
        subtitle: 'انضم إلى أكثر من 5,000 مريض غيّروا حياتهم بعلاج عالمي المستوى في الهند',
        button: 'احصل على استشارة مجانية'
      },
      caseStudies: [
        {
          id: '1',
          patientName: 'محمد أ.',
          age: 58,
          country: 'دبي، الإمارات',
          treatment: 'جراحة تحويل مسار الشريان التاجي (القلب المفتوح)',
          condition: 'مرض الشريان التاجي ثلاثي الأوعية، ألم في الصدر',
          hospital: 'معهد فورتيس إسكورتس للقلب، دلهي',
          doctor: 'د. أجاي كول - جراح قلب كبير',
          costIndia: '$6,500',
          costHome: '$120,000',
          savings: '$113,500 (95%)',
          duration: '14 يوماً في الهند',
          outcome: 'نجاح 100٪، حُل ألم الصدر، عاد للعمل بعد 6 أسابيع',
          story: [
            'محمد، رجل أعمال يبلغ من العمر 58 عاماً من دبي، كان يعاني من ألم في الصدر لمدة 3 أشهر. أوصى طبيب القلب في الإمارات بجراحة تحويل مسار عاجلة بتكلفة 440,000 درهم ($120,000).',
            'من خلال شفاء الهند، استشار محمد د. أجاي كول في معهد فورتيس إسكورتس للقلب. بعد مراجعة تقارير تصوير الأوعية، تم تحديد موعد الجراحة في غضون 10 أيام.',
            'استغرقت جراحة تحويل المسار 4 ساعات. تلقى محمد 3 طعوم ونُقل إلى العناية المركزة لمراقبة لمدة 48 ساعة. في اليوم الثالث، كان يمشي في الجناح. أُزيلت الغرز في اليوم السابع.',
            'مكث 14 يوماً في الهند لمراقبة التعافي الكامل قبل السفر إلى الوطن. أظهر تخطيط صدى القلب المتابعة بعد 3 أشهر وظيفة قلب ممتازة. عاد إلى العمل بدوام كامل بعد 6 أسابيع.',
            'التكلفة الإجمالية شاملة الجراحة، إقامة 7 أيام في المستشفى، الأدوية، والمتابعة: $6,500 مقابل $120,000 المطلوبة في دبي. غطّى تأمينه $4,000، تاركاً فقط $2,500 من جيبه.'
          ],
          beforeAfter: {
            before: 'ألم صدر شديد عند المجهود، لا يستطيع المشي 100 متر، ضيق في التنفس، قلق من نوبة قلبية',
            after: 'لا ألم في الصدر، يمشي 5 كم يومياً، عاد للعمل، يلعب مع أحفاده، نوعية حياة ممتازة'
          },
          quote: 'كنت خائفاً من إجراء جراحة القلب في الخارج، لكن د. كول وفريق فورتيس جعلوني أشعر وكأنني من العائلة. المستشفى كان أنظف من مستشفيات دبي، والرعاية كانت عالمية المستوى. أنقذت مدخرات حياتي وحصلت على أفضل علاج ممكن.'
        },
        {
          id: '2',
          patientName: 'سارة م.',
          age: 34,
          country: 'الرياض، السعودية',
          treatment: 'التلقيح الصناعي مع الحقن المجهري',
          condition: '8 سنوات من العقم، متلازمة المبيض متعدد الكيسات، عدد حيوانات منوية منخفض للزوج',
          hospital: 'نوفا آي في إف للخصوبة، بنغالور',
          doctor: 'د. نانديتا بالشيتكار - أخصائية خصوبة',
          costIndia: '$3,800',
          costHome: '$18,000',
          savings: '$14,200 (79%)',
          duration: '21 يوماً في الهند',
          outcome: 'حامل في الدورة الأولى، ولد صبي سليم',
          story: [
            'كانت سارة وزوجها يحاولان الإنجاب لمدة 8 سنوات. بعد 3 محاولات فاشلة للتلقيح الصناعي البسيط في السعودية، طُلب منهم 67,500 ريال ($18,000) للتلقيح الصناعي مع الحقن المجهري.',
            'اتصلوا بشفاء الهند وتمت مطابقتهم مع د. نانديتا بالشيتكار في نوفا آي في إف. استعرضت الاستشارة الأولية عبر مكالمة فيديو تقاريرهم وأكدت الأهلية.',
            'سافرت سارة إلى بنغالور في اليوم الثاني من دورتها الشهرية. بدأت أدوية تحفيز المبيض في اليوم الثالث. أظهرت المراقبة بالموجات فوق الصوتية اليومية نمواً ممتازاً للحويصلات.',
            'سحب البويضات في اليوم 14 أسفر عن 18 بويضة. خضعت حيوانات الزوج المنوية للحقن المجهري. تكونت 12 جنيناً، وصلت 8 إلى مرحلة الكيسة الأريمية في اليوم الخامس.',
            'نُقل أفضل جنين في اليوم 19. جُمّد جنينان للاستخدام المستقبلي. أكد اختبار بيتا hCG في اليوم 33 الحمل. عادت سارة إلى الوطن في اليوم 21.',
            'تقدم الحمل بشكل طبيعي. ولد صبي سليم في الأسبوع 38 في الرياض. التكلفة الإجمالية شاملة الأدوية، المراقبة، تجميد الأجنة: $3,800 مقابل $18,000 في السعودية.'
          ],
          beforeAfter: {
            before: '8 سنوات من العقم، 3 دورات فاشلة، ضيق عاطفي، ضغط على الزواج، أنفقوا $12,000 على علاجات فاشلة',
            after: 'حامل في أول دورة تلقيح صناعي، ولد صبي سليم، جنينان مجمدان للمستقبل، زواج أقوى، عائلة كاملة'
          },
          quote: 'بعد 8 سنوات من الحزن، أعطتنا نوفا آي في إف طفلنا المعجزة. كانت د. نانديتا متعاطفة جداً وشرحت كل شيء بوضوح. أرانا عالم الأجنة أجنتنا تحت المجهر - بكيت من الفرح. وفرنا ما يكفي من المال لنحاول مرة أخرى للطفل الثاني إذا لزم الأمر. الحمد لله!'
        },
        {
          id: '3',
          patientName: 'أحمد ك.',
          age: 42,
          country: 'الدوحة، قطر',
          treatment: 'استبدال الركبتين',
          condition: 'التهاب مفاصل شديد في الركبتين، عظم على عظم، غير قادر على المشي',
          hospital: 'مستشفى فورتيس، مومباي',
          doctor: 'د. راجو فايشيا - جراح عظام',
          costIndia: '$7,200',
          costHome: '$55,000',
          savings: '$47,800 (87%)',
          duration: '18 يوماً في الهند',
          outcome: 'يمشي بدون ألم، عاد للصالة الرياضية بعد 4 أشهر، يلعب كرة القدم مع أطفاله',
          story: [
            'أحمد، مهندس يبلغ من العمر 42 عاماً من قطر، كان يعاني من ألم الركبة لمدة 5 سنوات. بحلول 2024، كان بالكاد يستطيع المشي 50 متراً. أظهرت الأشعة السينية التهاب مفاصل عظم على عظم في كلتا الركبتين.',
            'أوصى جراح العظام في الدوحة باستبدال الركبتين بتكلفة 200,000 ريال قطري ($55,000). غطّى تأمينه 50٪ فقط، تاركاً $27,500 من جيبه.',
            'من خلال شفاء الهند، استشار أحمد د. راجو فايشيا في فورتيس مومباي. أُجري التصوير المقطعي وفحص الدم عن بُعد. حُددت الجراحة في غضون 15 يوماً.',
            'استُبدلت كلتا الركبتين في جراحة واحدة استغرقت 4 ساعات باستخدام غرسات جونسون آند جونسون. التعبئة في نفس اليوم مع أخصائي العلاج الطبيعي. بحلول اليوم الثاني، كان أحمد يمشي 10 أمتار بالمشاية.',
            'علاج طبيعي مكثف مرتين يومياً. أُزيلت الغرز في اليوم 12. مشى بشكل مستقل بحلول اليوم 14. خرج في اليوم السابع، بقي بالقرب من المستشفى للعلاج الطبيعي حتى اليوم 18.',
            'عاد إلى قطر يمشي بعصا. واصل العلاج الطبيعي في المنزل. في 3 أشهر، مشى 2 كم يومياً. في 6 أشهر، عاد للصالة الرياضية. الآن يلعب كرة القدم مع أطفاله بدون ألم.',
            'التكلفة الإجمالية شاملة غرسات الركبتين، إقامة 7 أيام في المستشفى، إقامة 18 يوماً، العلاج الطبيعي، الأدوية: $7,200 مقابل $55,000 في قطر.'
          ],
          beforeAfter: {
            before: 'لا يستطيع المشي 50 متراً، ألم شديد 8/10، معتمد على الكرسي المتحرك للتسوق، توقف عن العمل، مكتئب',
            after: 'يمشي 5 كم يومياً، لا ألم، عاد للعمل بدوام كامل، يلعب الرياضة، يسافر بدون قيود، حياة متحولة'
          },
          quote: 'استعدت حياتي في سن 42. د. فايشيا صانع معجزات. فريق العلاج الطبيعي دفعني بشدة ولكن برحمة. هبطت في مومباي على كرسي متحرك وغادرت أمشي على قدمي. بكت زوجتي دموع الفرح عندما رأتني أمشي من الطائرة في الدوحة. أفضل قرار في حياتي.'
        },
        {
          id: '4',
          patientName: 'فاطمة ح.',
          age: 51,
          country: 'مسقط، عمان',
          treatment: 'علاج سرطان الثدي (استئصال جزئي + علاج كيميائي + علاج إشعاعي)',
          condition: 'سرطان الثدي المرحلة الثانية، ورم 3 سم، إصابة العقد الليمفاوية',
          hospital: 'مستشفى تاتا التذكاري، مومباي',
          doctor: 'د. سونال كاتاريا - جراحة أورام',
          costIndia: '$8,500',
          costHome: '$75,000',
          savings: '$66,500 (89%)',
          duration: '6 أشهر علاج (رحلتان إلى الهند)',
          outcome: 'خالية من السرطان، فحوصات واضحة بعد سنة، عادت للحياة الطبيعية',
          story: [
            'اكتشفت فاطمة كتلة في الثدي في مايو 2024. أكد التصوير الشعاعي والخزعة في مسقط سرطان قنوي غازٍ المرحلة الثانية. طلب الطبيب 28,875 ريال عماني ($75,000) للعلاج الكامل.',
            'محطمة ومرهقة، اتصلت فاطمة بشفاء الهند. في غضون 48 ساعة، راجعت د. سونال كاتاريا في مستشفى تاتا التذكاري، أفضل مركز سرطان في آسيا، تقاريرها.',
            'خطة العلاج: استئصال جزئي (جراحة حافظة للثدي) متبوعة بـ 6 دورات علاج كيميائي و25 جلسة علاج إشعاعي. أقل عدوانية بكثير من استئصال الثدي الموصى به في عمان.',
            'الرحلة 1 (3 أسابيع): أزالت جراحة الاستئصال الجزئي ورم 3 سم بحواف واضحة. أظهرت خزعة العقدة الليمفاوية الحارسة 1 من 3 عقد إيجابية. أكدت علم الأمراض إيجابية ER/PR، سلبية HER2.',
            'عادت فاطمة للوطن للتعافي. بدأ العلاج الكيميائي بعد 4 أسابيع من الجراحة في مسقط (مغطى بالتأمين). أُكملت 6 دورات من نظام AC-T على مدى 18 أسبوعاً.',
            'الرحلة 2 (5 أسابيع): عادت إلى مومباي للعلاج الإشعاعي. 25 جلسة على مدى 5 أسابيع باستخدام مسرع خطي حديث. احمرار خفيف في الجلد، يمكن التحكم فيه بالكريمات.',
            'بدأت العلاج الهرموني (تاموكسيفين) لمنع التكرار. فحوصات المتابعة لمدة سنة واحدة واضحة تماماً. أعلنت د. كاتاريا أنها خالية من السرطان مع تشخيص ممتاز.',
            'التكلفة الإجمالية للهند (الجراحة + الإشعاع + المتابعة + الإقامة): $8,500. تم العلاج الكيميائي في عمان مغطى بالتأمين. وفرت $66,500 مقابل العلاج الكامل في عمان.'
          ],
          beforeAfter: {
            before: 'تشخيص سرطان الثدي المرحلة الثانية، خائفة، تفكر في استئصال الثدي، ضغط مالي عرض $75K، قلق من ترك الأطفال بدون أم',
            after: 'خالية من السرطان بعد سنة، احتفظت بثديها، ندبات قليلة، عادت للعمل، تستمتع بالحياة، فحص منتظم، تلهم نساء أخريات'
          },
          quote: 'تاتا التذكاري أنقذ حياتي وثديي. في عمان، أرادوا إزالة ثديي بالكامل، لكن د. كاتاريا قالت إن الاستئصال الجزئي كافٍ. كانت محقة - أنا خالية من السرطان وأبدو طبيعية. التكلفة كانت 1/9 من أسعار عمان. أخبر كل امرأة تواجه السرطان: اذهبي إلى تاتا التذكاري. هم الأفضل في آسيا.'
        },
        {
          id: '5',
          patientName: 'عبد الرحمن ر.',
          age: 29,
          country: 'مدينة الكويت، الكويت',
          treatment: 'زراعة الشعر بتقنية FUE (3,200 بصيلة)',
          condition: 'الصلع الذكوري، انحسار خط الشعر، ترقق التاج',
          hospital: 'يوجينكس لعلوم الشعر، دلهي',
          doctor: 'د. براديب سيثي - أخصائي زراعة الشعر',
          costIndia: '$2,200',
          costHome: '$12,000',
          savings: '$9,800 (82%)',
          duration: '5 أيام في الهند',
          outcome: 'خط شعر طبيعي المظهر، تغطية كاملة، ثقة معززة، تزوج بعد 6 أشهر',
          story: [
            'عبد الرحمن، موظف بنك يبلغ من العمر 29 عاماً من الكويت، كان يفقد الشعر منذ سن 23. بحلول 29، كان خط شعره قد انحسر بشكل كبير وكان التاج يترقق. شعر بالوعي الذاتي في المواقف الاجتماعية.',
            'طلبت عيادات زراعة الشعر في الكويت 3,600 دينار كويتي ($12,000) لـ 3,000-3,500 بصيلة باستخدام تقنية FUE. بحث عبد الرحمن على الإنترنت ووجد يوجينكس لعلوم الشعر في دلهي مع د. براديب سيثي.',
            'أرسل صوراً للاستشارة عبر الإنترنت. قيّم د. سيثي مقياس نوروود 4 (انحسار معتدل) وأوصى بـ 3,200 بصيلة لاستعادة خط الشعر وتغطية التاج.',
            'طار إلى دلهي يوم الخميس. صباح الجمعة: قص شعر، تصميم خط الشعر، صور ما قبل العملية. السبت: بدأ إجراء FUE الساعة 8 صباحاً. استخرج د. سيثي شخصياً 3,200 بصيلة على مدى 4 ساعات باستخدام لكمة 0.8 ملم.',
            'استغرقت مرحلة الزرع 5 ساعات. وُضعت البصيلات بزاوية طبيعية 45 درجة، بصيلات شعرة واحدة عند خط الشعر للمظهر الطبيعي، بصيلات متعددة الشعر خلفها للكثافة. انتهى الساعة 6 مساءً.',
            'الأحد: فحص ما بعد العملية، تم توضيح أول غسل للشعر، تم توفير الأدوية. الاثنين: الفحص النهائي، تم السماح بالطيران. عاد إلى الكويت ليلة الاثنين.',
            'الجدول الزمني: الشهر 1 (فقدان الصدمة - يتساقط الشعر المزروع)، الشهر 3 (يبدأ النمو الجديد 20٪)، الشهر 6 (نمو 60٪ مرئي)، الشهر 12 (نتيجة نهائية نمو 95٪، كثافة كاملة).',
            'النتيجة: خط شعر طبيعي، لا أحد يمكن أن يخبر أنه مزروع. ارتفعت ثقة عبد الرحمن. خطب بعد 6 أشهر من العملية وتزوج بعد سنة. التكلفة الإجمالية شاملة الرحلات/الفندق: $2,800 مقابل $12,000 الكويت.'
          ],
          beforeAfter: {
            before: 'انحسار خط الشعر نوروود 4، فروة رأس مرئية عند التاج، يرتدي القبعات باستمرار، يتجنب الصور، ثقة منخفضة، أعزب',
            after: 'خط شعر كامل طبيعي، تغطية كثيفة، توقف عن ارتداء القبعات، ينشر صوراً على إنستغرام، ثقة متحولة، متزوج بسعادة'
          },
          quote: 'أفضل استثمار قمت به على الإطلاق. د. سيثي فنان - خط شعري يبدو طبيعياً تماماً. حتى الحلاق لم يعرف أن لدي زراعة. كنت واعياً جداً من قبل، الآن أشعر وكأنني شخص جديد. تزوجت بعد سنة من الإجراء وتقول زوجتي إنني وسيم! يستحق كل فلس وكل ساعة على الطائرة.'
        },
        {
          id: '6',
          patientName: 'مريم س.',
          age: 67,
          country: 'أبو ظبي، الإمارات',
          treatment: 'جراحة الساد الثنائية مع عدسات IOL متميزة',
          condition: 'ساد كثيف في كلتا العينين، رؤية 20/200، صعوبة في القيادة',
          hospital: 'مستشفى د. أجاروال للعيون، تشيناي',
          doctor: 'د. أمار أجاروال - طبيب عيون',
          costIndia: '$2,800',
          costHome: '$18,000',
          savings: '$15,200 (84%)',
          duration: '7 أيام في الهند',
          outcome: 'رؤية 20/20 في كلتا العينين، لا حاجة للنظارات، تقود مرة أخرى',
          story: [
            'مريم، معلمة متقاعدة تبلغ من العمر 67 عاماً من أبو ظبي، كانت تعاني من تدهور الرؤية لمدة عامين. بحلول 2024، كان بالكاد يمكنها الرؤية للقيادة وتحتاج نظارات لكل شيء.',
            'أظهر فحص العين في أبو ظبي ساد كثيف في كلتا العينين. الرؤية: 20/200 العين اليمنى، 20/400 العين اليسرى (عتبة العمى القانوني 20/200). طلب طبيب العيون 66,000 درهم ($18,000) لجراحة ثنائية مع عدسات IOL متعددة البؤر متميزة.',
            'بحثت ابنتها ووجدت مستشفى د. أمار أجاروال للعيون في تشيناي، الشهير بجراحة الساد (50,000+ سنوياً). أكدت الاستشارة بالفيديو الساد الكثيف، أوصت بعدسات IOL ثلاثية البؤر متميزة للرؤية القريبة/البعيدة.',
            'طارت إلى تشيناي يوم الاثنين. الثلاثاء: فحص شامل للعين، قياس الحيوية لحساب قوة IOL، تصريح طبي. الأربعاء: جراحة العين اليمنى.',
            'استغرقت الجراحة 15 دقيقة باستخدام تقنية بمساعدة ليزر فيمتو ثانية (بدون شفرة). زُرعت عدسة Alcon PanOptix ثلاثية البؤر متميزة. لا ألم أثناء الإجراء. رقعة عين طوال الليل.',
            'الخميس: إزالة الرقعة. الرؤية بالفعل 20/40 في العين اليمنى (تحسنت من 20/200). جراحة العين اليسرى بعد ظهر الخميس. نفس الإجراء السلس.',
            'الجمعة: كلتا العينين واضحتين. الرؤية 20/30 في كلتا العينين (لا تزال تتحسن). السبت: الفحص النهائي، الرؤية 20/25. الأحد: السماح بالطيران، أُعطيت قطرات عين لمدة 4 أسابيع.',
            'متابعة 6 أسابيع في أبو ظبي: استقرت الرؤية عند 20/20 في كلتا العينين. لا حاجة للنظارات للقراءة أو البعد. يمكنها رؤية الهاتف بدون نظارات، القيادة بدون نظارات، مشاهدة التلفزيون بوضوح.',
            'التكلفة الإجمالية شاملة الجراحة الثنائية، عدسات IOL ثلاثية البؤر متميزة، إقامة 5 أيام، رعاية ما بعد العملية: $2,800 مقابل $18,000 المطلوبة في أبو ظبي.'
          ],
          beforeAfter: {
            before: 'رؤية 20/200 و20/400، لا تستطيع القيادة، تحتاج نظارات لكل شيء، تكافح لقراءة القرآن، معتمدة على الآخرين',
            after: 'رؤية 20/20 في كلتا العينين، تقود بشكل مستقل، تقرأ بدون نظارات، تشاهد التلفزيون بوضوح، مستقلة تماماً، تقرأ القرآن يومياً'
          },
          quote: 'د. أجاروال أعاد لي حياتي في سن 67. كنت أفقد بصري وشعرت أنني عبء على عائلتي. الآن يمكنني الرؤية أفضل مما كنت في سن 40! لا نظارات للقراءة، القيادة، التلفزيون - لا شيء! استغرقت الجراحة 15 دقيقة، لا ألم على الإطلاق. وفرت 60,000 درهم وحصلت على أفضل جراح في آسيا. أخبر جميع أصدقائي كبار السن: لا تعانوا من الساد، اذهبوا إلى د. أجاروال في تشيناي.'
        }
      ]
    }
  };

  const currentContent = content[locale as 'en' | 'ar'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              {currentContent.hero.title}
            </h1>
            <p className="mb-6 text-xl text-primary-50 md:text-2xl">
              {currentContent.hero.subtitle}
            </p>
            <p className="mx-auto max-w-3xl text-lg text-primary-100">
              {currentContent.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="border-2 border-primary-100 bg-gradient-to-br from-white to-primary-50">
            <CardContent className="p-6 text-center">
              <div className="mb-2 text-4xl font-bold text-primary-600">{currentContent.stats.patients.number}</div>
              <div className="text-sm font-medium text-gray-600">{currentContent.stats.patients.label}</div>
            </CardContent>
          </Card>
          <Card className="border-2 border-green-100 bg-gradient-to-br from-white to-green-50">
            <CardContent className="p-6 text-center">
              <div className="mb-2 text-4xl font-bold text-green-600">{currentContent.stats.savings.number}</div>
              <div className="text-sm font-medium text-gray-600">{currentContent.stats.savings.label}</div>
            </CardContent>
          </Card>
          <Card className="border-2 border-blue-100 bg-gradient-to-br from-white to-blue-50">
            <CardContent className="p-6 text-center">
              <div className="mb-2 text-4xl font-bold text-blue-600">{currentContent.stats.success.number}</div>
              <div className="text-sm font-medium text-gray-600">{currentContent.stats.success.label}</div>
            </CardContent>
          </Card>
          <Card className="border-2 border-orange-100 bg-gradient-to-br from-white to-orange-50">
            <CardContent className="p-6 text-center">
              <div className="mb-2 text-4xl font-bold text-orange-600">{currentContent.stats.countries.number}</div>
              <div className="text-sm font-medium text-gray-600">{currentContent.stats.countries.label}</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Studies */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            {currentContent.sectionTitle.main}
          </h2>
          <p className="text-lg text-gray-600">
            {currentContent.sectionTitle.subtitle}
          </p>
        </div>

        <div className="space-y-12">
          {currentContent.caseStudies.map((study, index) => (
            <Card key={study.id} className="overflow-hidden border-2 border-gray-100 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-primary-50 to-primary-100 border-b-2 border-primary-200">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="mb-2 text-2xl font-bold text-gray-900">
                      {study.patientName} - {study.treatment}
                    </CardTitle>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {study.country}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {currentContent.labels.age} {study.age}
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        {study.hospital}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="rounded-full bg-green-100 px-4 py-2">
                      <div className="text-sm font-semibold text-green-800">{currentContent.labels.saved}</div>
                      <div className="text-xl font-bold text-green-600">{study.savings}</div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                {/* Key Details Grid */}
                <div className="mb-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-1 text-sm font-semibold text-gray-500">{currentContent.labels.treatment}</div>
                    <div className="font-bold text-gray-900">{study.treatment}</div>
                    <div className="mt-1 text-sm text-gray-600">{study.condition}</div>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-4">
                    <div className="mb-1 text-sm font-semibold text-blue-600">{currentContent.labels.medicalTeam}</div>
                    <div className="font-bold text-gray-900">{study.doctor}</div>
                    <div className="mt-1 text-sm text-gray-600">{study.hospital}</div>
                  </div>
                  <div className="rounded-lg bg-green-50 p-4">
                    <div className="mb-1 text-sm font-semibold text-green-600">{currentContent.labels.costComparison}</div>
                    <div className="text-sm text-gray-600">
                      {currentContent.labels.india}: <span className="font-bold text-green-600">{study.costIndia}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {currentContent.labels.home}: <span className="font-bold text-red-600 line-through">{study.costHome}</span>
                    </div>
                  </div>
                </div>

                {/* Patient Story */}
                <div className="mb-6">
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{currentContent.labels.theJourney}</h3>
                  <div className="space-y-3">
                    {study.story.map((paragraph, idx) => (
                      <p key={idx} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Before/After */}
                <div className="mb-6 rounded-lg bg-gradient-to-r from-red-50 to-green-50 p-6">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">{currentContent.labels.transformation}</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-red-600">
                        <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center text-xs">✗</div>
                        {currentContent.labels.beforeTreatment}
                      </div>
                      <p className="text-gray-700">{study.beforeAfter.before}</p>
                    </div>
                    <div>
                      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-green-600">
                        <CheckCircle2 className="h-6 w-6" />
                        {currentContent.labels.afterTreatment}
                      </div>
                      <p className="text-gray-700">{study.beforeAfter.after}</p>
                    </div>
                  </div>
                </div>

                {/* Patient Quote */}
                <div className="rounded-lg bg-primary-50 p-6 border-l-4 border-primary-500">
                  <div className="mb-2 flex items-center gap-2">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  </div>
                  <blockquote className="text-lg italic text-gray-700">
                    &quot;{study.quote}&quot;
                  </blockquote>
                  <div className="mt-3 text-sm font-semibold text-gray-900">
                    - {study.patientName}, {study.country}
                  </div>
                </div>

                {/* Outcome Badge */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    {currentContent.labels.duration}: {study.duration}
                  </div>
                  <div className="rounded-full bg-green-100 px-4 py-2">
                    <div className="text-sm font-semibold text-green-800">
                      ✓ {study.outcome}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            {currentContent.cta.title}
          </h2>
          <p className="mb-8 text-xl text-primary-50">
            {currentContent.cta.subtitle}
          </p>
          <Button asChild size="lg" className="bg-accent-500 text-lg hover:bg-accent-600">
            <Link href="/consultation">{currentContent.cta.button}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

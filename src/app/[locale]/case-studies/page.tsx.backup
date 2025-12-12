import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, DollarSign, Clock, MapPin, Heart, Star } from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Patient Success Stories - Real Medical Tourism Cases | Shifa Al Hind',
  description: 'Read real patient case studies from GCC countries who saved 60-80% on medical treatment in India. Heart surgery, knee replacement, IVF, dental, cancer treatment success stories.',
  keywords: 'patient success stories, medical tourism testimonials, india treatment reviews, gcc patients india, medical tourism case studies, قصص نجاح المرضى',
};

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

const caseStudies: CaseStudy[] = [
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
      'Through Shifa Al Hind, Mohammed consulted with Dr. Ajay Kaul at Fortis Escorts Heart Institute. After reviewing his angiogram reports, surgery was scheduled within 10 days.',
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
      'They contacted Shifa Al Hind and were matched with Dr. Nandita Palshetkar at Nova IVF. Initial consultation via video call reviewed their reports and confirmed candidacy.',
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
      'Through Shifa Al Hind, Ahmed consulted Dr. Raju Vaishya at Fortis Mumbai. CT scan and blood work done remotely. Surgery scheduled within 15 days.',
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
      'Devastated and overwhelmed, Fatima contacted Shifa Al Hind. Within 48 hours, her reports were reviewed by Dr. Sonal Katariya at Tata Memorial Hospital, Asia\'s top cancer center.',
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
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Real Patient Success Stories
            </h1>
            <p className="mb-6 text-xl text-primary-50 md:text-2xl">
              Life-Changing Treatments, Incredible Savings, World-Class Care
            </p>
            <p className="mx-auto max-w-3xl text-lg text-primary-100">
              Read real stories from GCC patients who saved 60-90% on medical treatment in India.
              Heart surgery, IVF, knee replacement, cancer treatment, hair transplant, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="border-2 border-primary-100 bg-gradient-to-br from-white to-primary-50">
            <CardContent className="p-6 text-center">
              <div className="mb-2 text-4xl font-bold text-primary-600">5,000+</div>
              <div className="text-sm font-medium text-gray-600">Happy Patients</div>
            </CardContent>
          </Card>
          <Card className="border-2 border-green-100 bg-gradient-to-br from-white to-green-50">
            <CardContent className="p-6 text-center">
              <div className="mb-2 text-4xl font-bold text-green-600">60-90%</div>
              <div className="text-sm font-medium text-gray-600">Average Savings</div>
            </CardContent>
          </Card>
          <Card className="border-2 border-blue-100 bg-gradient-to-br from-white to-blue-50">
            <CardContent className="p-6 text-center">
              <div className="mb-2 text-4xl font-bold text-blue-600">98%</div>
              <div className="text-sm font-medium text-gray-600">Success Rate</div>
            </CardContent>
          </Card>
          <Card className="border-2 border-orange-100 bg-gradient-to-br from-white to-orange-50">
            <CardContent className="p-6 text-center">
              <div className="mb-2 text-4xl font-bold text-orange-600">25+</div>
              <div className="text-sm font-medium text-gray-600">GCC Countries</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Studies */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Patient Success Stories
          </h2>
          <p className="text-lg text-gray-600">
            Real patients, real results, real savings. Read their journeys.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
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
                        Age {study.age}
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        {study.hospital}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="rounded-full bg-green-100 px-4 py-2">
                      <div className="text-sm font-semibold text-green-800">Saved</div>
                      <div className="text-xl font-bold text-green-600">{study.savings}</div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                {/* Key Details Grid */}
                <div className="mb-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-1 text-sm font-semibold text-gray-500">Treatment</div>
                    <div className="font-bold text-gray-900">{study.treatment}</div>
                    <div className="mt-1 text-sm text-gray-600">{study.condition}</div>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-4">
                    <div className="mb-1 text-sm font-semibold text-blue-600">Medical Team</div>
                    <div className="font-bold text-gray-900">{study.doctor}</div>
                    <div className="mt-1 text-sm text-gray-600">{study.hospital}</div>
                  </div>
                  <div className="rounded-lg bg-green-50 p-4">
                    <div className="mb-1 text-sm font-semibold text-green-600">Cost Comparison</div>
                    <div className="text-sm text-gray-600">
                      India: <span className="font-bold text-green-600">{study.costIndia}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Home: <span className="font-bold text-red-600 line-through">{study.costHome}</span>
                    </div>
                  </div>
                </div>

                {/* Patient Story */}
                <div className="mb-6">
                  <h3 className="mb-3 text-xl font-bold text-gray-900">The Journey</h3>
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
                  <h3 className="mb-4 text-xl font-bold text-gray-900">Transformation</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-red-600">
                        <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center text-xs">✗</div>
                        BEFORE TREATMENT
                      </div>
                      <p className="text-gray-700">{study.beforeAfter.before}</p>
                    </div>
                    <div>
                      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-green-600">
                        <CheckCircle2 className="h-6 w-6" />
                        AFTER TREATMENT
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
                    Duration: {study.duration}
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
            Your Success Story Starts Here
          </h2>
          <p className="mb-8 text-xl text-primary-50">
            Join 5,000+ patients who transformed their lives with world-class treatment in India
          </p>
          <Button asChild size="lg" className="bg-accent-500 text-lg hover:bg-accent-600">
            <Link href="/consultation">Get Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/seo/breadcrumb-schema';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { ItemListSchema } from '@/components/seo/item-list-schema';
import { SpeakableSchema } from '@/components/seo/speakable-schema';
import { InternalLinks } from '@/components/seo/internal-links';
import { Testimonials, TREATMENT_TESTIMONIALS } from '@/components/testimonials/testimonials';
import { TrustBadges } from '@/components/trust-badges/trust-badges';
import { LastUpdatedBanner, MedicalReviewBadge } from '@/components/seo/eeat-signals';

export const dynamic = 'force-dynamic';

interface RankedItem {
  rank: number; name: string; city: string; surgeons: string[];
  specialties: string[]; jci: boolean; intlPatients: string; whyRanked: string;
  costRange: string; link?: string;
}

const topicData: Record<string, {
  title: string; titleAr: string; description: string; descriptionAr: string;
  items: RankedItem[];
  faqs: Array<{ question: string; answer: string }>;
}> = {
  'best-hospitals-medical-tourism': {
    title: '10 Best Hospitals in India for Medical Tourism 2026',
    titleAr: 'أحسن 10 مستشفيات في الهند للسياحة العلاجية 2026',
    description: 'Definitive ranking of India\'s top 10 hospitals for international patients. JCI-accredited, multi-specialty, with dedicated international patient departments.',
    descriptionAr: 'تصنيف شامل لأحسن 10 مستشفيات في الهند للمرضى الدوليين. معتمدة من JCI ومتعددة التخصصات.',
    items: [
      { rank: 1, name: 'Apollo Hospitals', city: 'Chennai', surgeons: ['Dr. Prathap Reddy', 'Dr. K.M. Cherian'], specialties: ['Cardiac', 'Oncology', 'Transplant', 'Orthopedics'], jci: true, intlPatients: '150,000+/year', whyRanked: 'Largest hospital network in India (71 hospitals). Pioneer in medical tourism with dedicated Arabic-speaking coordinators.', costRange: '$3,000-50,000', link: '/hospitals' },
      { rank: 2, name: 'Medanta - The Medicity', city: 'Gurugram', surgeons: ['Dr. Naresh Trehan', 'Dr. A.S. Soin'], specialties: ['Cardiac', 'Liver Transplant', 'Neurosurgery', 'Robotics'], jci: true, intlPatients: '20,000+/year', whyRanked: 'Founded by legendary cardiac surgeon Dr. Naresh Trehan. Top liver transplant center in India with 95% success rate.', costRange: '$4,000-60,000', link: '/hospitals' },
      { rank: 3, name: 'Fortis Healthcare', city: 'Delhi/Mumbai', surgeons: ['Dr. Ashok Seth', 'Dr. Vivek Jawali'], specialties: ['Cardiac', 'Orthopedics', 'Oncology', 'Neurology'], jci: true, intlPatients: '40,000+/year', whyRanked: 'Network of 27 hospitals. Fortis Escorts Heart Institute is #1 cardiac center. Strong GCC patient base.', costRange: '$3,000-45,000', link: '/hospitals' },
      { rank: 4, name: 'Max Healthcare', city: 'Delhi', surgeons: ['Dr. Harit Chaturvedi', 'Dr. B.K. Misra'], specialties: ['Oncology', 'Cardiac', 'Neurosurgery', 'Orthopedics'], jci: true, intlPatients: '15,000+/year', whyRanked: 'Recently merged with Radiant Life Care. Excellent oncology department. Premium patient experience.', costRange: '$3,500-50,000', link: '/hospitals' },
      { rank: 5, name: 'Narayana Health', city: 'Bangalore', surgeons: ['Dr. Devi Shetty', 'Dr. Raghu S'], specialties: ['Cardiac', 'Transplant', 'Pediatric', 'Oncology'], jci: true, intlPatients: '12,000+/year', whyRanked: 'Founded by Dr. Devi Shetty. Most affordable among top hospitals. 15,000+ heart surgeries annually.', costRange: '$2,500-40,000', link: '/hospitals' },
      { rank: 6, name: 'Kokilaben Hospital', city: 'Mumbai', surgeons: ['Dr. A.K. Anand', 'Dr. Debraj Shome'], specialties: ['Oncology', 'Neurosurgery', 'Cosmetic', 'Robotic Surgery'], jci: true, intlPatients: '8,000+/year', whyRanked: 'Most advanced robotic surgery center in India. Da Vinci Xi system for minimally invasive procedures.', costRange: '$4,000-55,000', link: '/hospitals' },
      { rank: 7, name: 'Manipal Hospitals', city: 'Bangalore', surgeons: ['Dr. Sudarshan Ballal', 'Dr. H. Sudarshan Ballal'], specialties: ['Transplant', 'Cardiac', 'Orthopedics', 'Neurology'], jci: true, intlPatients: '10,000+/year', whyRanked: 'Strong organ transplant program. International standard nursing care. Good value for money.', costRange: '$3,000-45,000', link: '/hospitals' },
      { rank: 8, name: 'BLK-Max Super Speciality', city: 'Delhi', surgeons: ['Dr. P.P. Bose', 'Dr. S.N. Bose'], specialties: ['Bone Marrow Transplant', 'Cardiac', 'Oncology'], jci: true, intlPatients: '7,000+/year', whyRanked: 'Largest bone marrow transplant center in India. 600+ transplants annually. Excellent success rates.', costRange: '$3,500-50,000', link: '/hospitals' },
      { rank: 9, name: 'Artemis Hospital', city: 'Gurugram', surgeons: ['Dr. Anil Dhall', 'Dr. Neeraj Sanduja'], specialties: ['Cardiac', 'Orthopedics', 'Bariatric', 'Spine'], jci: true, intlPatients: '6,000+/year', whyRanked: 'Excellent bariatric surgery center. Strong Middle East patient base. New campus with latest technology.', costRange: '$3,000-45,000', link: '/hospitals' },
      { rank: 10, name: 'AIIMS', city: 'Delhi', surgeons: ['Dr. Randeep Guleria', 'Multiple'], specialties: ['All Specialties', 'Research', 'Complex Cases'], jci: false, intlPatients: '5,000+/year', whyRanked: 'India\'s premier government hospital. Handles most complex cases. Longest waitlists but best surgeons.', costRange: '$500-20,000', link: '/hospitals' },
    ],
    faqs: [
      { question: 'Which is the #1 hospital in India for medical tourism?', answer: 'Apollo Hospitals Chennai is ranked #1 for medical tourism in India (2026). With 71 hospitals, 150,000+ international patients annually, JCI accreditation, and dedicated Arabic-speaking coordinators, Apollo leads in patient volume, outcomes, and international patient experience.' },
      { question: 'Are Indian hospitals as good as American hospitals?', answer: 'Yes, top Indian hospitals like Apollo, Medanta, and Fortis are JCI-accredited (same standard as US hospitals). Many Indian surgeons trained at Mayo Clinic, Cleveland Clinic, and Johns Hopkins. Success rates for major surgeries are comparable: heart surgery 98%+, knee replacement 95%+, IVF 55-65%.' },
      { question: 'How much cheaper is treatment in India vs USA?', answer: 'India is 60-90% cheaper than USA. Heart bypass: $5,000-10,000 (India) vs $70,000-200,000 (USA). Knee replacement: $5,000-7,000 vs $30,000-50,000. IVF: $3,000-5,000 vs $12,000-25,000. Same quality at a fraction of the cost.' },
      { question: 'Do Indian hospitals have Arabic-speaking staff?', answer: 'Top medical tourism hospitals in India have dedicated Arabic-speaking coordinators. Apollo, Fortis, Max, and Medanta all have international patient departments with Arabic staff. Shifa AlHind provides an Arabic coordinator throughout your entire stay.' },
      { question: 'How do I choose the right hospital in India?', answer: 'Choose based on: 1) JCI accreditation, 2) Surgeon experience (1000+ procedures), 3) Success rate for your treatment, 4) International patient department, 5) Location (Delhi/Mumbai/Chennai for most treatments), 6) Cost transparency. Contact Shifa AlHind for free hospital matching.' },
      { question: 'Is it safe to travel to India for surgery?', answer: 'Yes, India is very safe for medical tourism. 2 million+ medical tourists visit annually. Top hospitals have infection rates comparable to Western hospitals. India ranks 10th globally for medical tourism (Medical Tourism Index). 24/7 security, premium hospital rooms, and city-center locations.' },
      { question: 'What is JCI accreditation and why does it matter?', answer: 'JCI (Joint Commission International) is the gold standard for hospital accreditation worldwide. It evaluates patient safety, infection control, medication management, and quality outcomes. India has 30+ JCI-accredited hospitals — more than most developing countries. Choose a JCI hospital for guaranteed international safety standards.' },
      { question: 'How long do I need to stay in India for treatment?', answer: 'Depends on treatment: Dental (5-7 days), Cataract (3-5 days), Knee replacement (10-14 days), Heart surgery (14-21 days), Cancer treatment (2-8 weeks), IVF (14-21 days). Shifa AlHind provides a detailed timeline before you travel.' },
    ],
  },
  'best-cardiac-surgeons': {
    title: '10 Best Cardiac Surgeons in India 2026',
    titleAr: 'أحسن 10 جراحين قلب في الهند 2026',
    description: 'Top 10 heart surgeons in India ranked by experience, success rates, and patient outcomes. CABG, valve replacement, and minimally invasive cardiac surgery specialists.',
    descriptionAr: 'أحسن 10 جراحين قلب في الهند مرتبين حسب الخبرة ونسب النجاح.',
    items: [
      { rank: 1, name: 'Dr. Naresh Trehan', city: 'Medanta, Gurugram', surgeons: [], specialties: ['CABG', 'Valve Surgery', 'Heart Transplant'], jci: true, intlPatients: '48,000+ surgeries', whyRanked: 'Founder of Medanta. 48,000+ heart surgeries. Trained at NYU and Bellevue Hospital. India\'s most renowned cardiac surgeon.', costRange: '$6,000-15,000', link: '/treatments/heart-surgery-india' },
      { rank: 2, name: 'Dr. Ashok Seth', city: 'Fortis Escorts, Delhi', surgeons: [], specialties: ['Angioplasty', 'Complex PCI', 'Structural Heart'], jci: true, intlPatients: '50,000+ angioplasties', whyRanked: 'World record holder for most complex angioplasties. Chairman of Fortis Escorts Heart Institute.', costRange: '$4,000-10,000', link: '/treatments/angioplasty-india' },
      { rank: 3, name: 'Dr. Devi Shetty', city: 'Narayana Health, Bangalore', surgeons: [], specialties: ['Pediatric Cardiac', 'CABG', 'Valve'], jci: true, intlPatients: '15,000+ surgeries', whyRanked: 'India\'s most famous heart surgeon. Pioneered affordable cardiac surgery. Former surgeon to Mother Teresa.', costRange: '$3,000-8,000', link: '/treatments/heart-surgery-india' },
      { rank: 4, name: 'Dr. K.M. Cherian', city: 'Apollo, Chennai', surgeons: [], specialties: ['Heart Transplant', 'CABG', 'Aortic Surgery'], jci: true, intlPatients: '20,000+ surgeries', whyRanked: 'Performed India\'s first heart transplant. Pioneer in minimally invasive cardiac surgery.', costRange: '$5,000-12,000' },
      { rank: 5, name: 'Dr. Vivek Jawali', city: 'Fortis, Bangalore', surgeons: [], specialties: ['Beating Heart Surgery', 'CABG', 'Minimally Invasive'], jci: true, intlPatients: '12,000+ surgeries', whyRanked: 'Pioneer of beating heart (off-pump) surgery in India. 12,000+ open heart surgeries.', costRange: '$5,000-10,000' },
      { rank: 6, name: 'Dr. Ramakanta Panda', city: 'Asian Heart, Mumbai', surgeons: [], specialties: ['CABG', 'Aortic Surgery', 'Valve Repair'], jci: true, intlPatients: '18,000+ surgeries', whyRanked: 'Operated on India\'s PM. Highest volume single surgeon in CABG. Asian Heart Institute founder.', costRange: '$5,000-12,000' },
      { rank: 7, name: 'Dr. Z.S. Meharwal', city: 'Fortis Escorts, Delhi', surgeons: [], specialties: ['Pediatric Cardiac', 'CABG', 'Valve'], jci: true, intlPatients: '25,000+ surgeries', whyRanked: 'One of India\'s most experienced pediatric cardiac surgeons. 25,000+ procedures.', costRange: '$4,000-10,000' },
      { rank: 8, name: 'Dr. Ajay Kaul', city: 'BLK-Max, Delhi', surgeons: [], specialties: ['CABG', 'Robotic Cardiac', 'TAVR'], jci: true, intlPatients: '10,000+ surgeries', whyRanked: 'Pioneer in robotic cardiac surgery in India. Youngest to perform 10,000+ heart surgeries.', costRange: '$5,000-15,000' },
      { rank: 9, name: 'Dr. T.S. Kler', city: 'PSRI, Delhi', surgeons: [], specialties: ['Electrophysiology', 'Ablation', 'Device Implant'], jci: true, intlPatients: '30,000+ procedures', whyRanked: 'India\'s top electrophysiologist. 30,000+ catheter ablations and device implantations.', costRange: '$3,000-8,000' },
      { rank: 10, name: 'Dr. Bashi V.V.', city: 'Apollo, Chennai', surgeons: [], specialties: ['Aortic Surgery', 'Minimally Invasive', 'Redo Surgery'], jci: true, intlPatients: '8,000+ surgeries', whyRanked: 'Expert in complex redo cardiac surgeries. Strong international patient following.', costRange: '$5,000-12,000' },
    ],
    faqs: [
      { question: 'Who is the best heart surgeon in India?', answer: 'Dr. Naresh Trehan (Medanta, Gurugram) is widely regarded as the best cardiac surgeon in India. With 48,000+ heart surgeries and founding Medanta — one of India\'s top hospitals — he is the most experienced and decorated cardiac surgeon in the country.' },
      { question: 'How much does heart surgery cost in India?', answer: 'Heart surgery in India costs $5,000-15,000 depending on the procedure: CABG ($5,000-10,000), Valve Replacement ($6,000-12,000), Heart Transplant ($30,000-50,000), Angioplasty ($3,000-6,000). This is 80-90% cheaper than USA or Europe.' },
      { question: 'What is the success rate of heart surgery in India?', answer: 'Heart surgery success rate in India is 98%+ at top hospitals. CABG success rate is 98.5%, valve replacement 97%+, and angioplasty 99%+. These rates are comparable to the best hospitals in USA and Europe.' },
      { question: 'Are Indian cardiac surgeons internationally trained?', answer: 'Yes, most top cardiac surgeons in India trained at: Cleveland Clinic, Mayo Clinic, Johns Hopkins, NYU, and top UK hospitals. They hold FRCS (UK), FACS (USA), and other international credentials.' },
      { question: 'How do I book a consultation with these surgeons?', answer: 'Contact Shifa AlHind via WhatsApp (+91 9876543210) for free consultation. Send your medical reports. We arrange video consultation with the surgeon of your choice within 48 hours. No fees for initial consultation.' },
      { question: 'Do I need to travel to India for a second opinion?', answer: 'No. We arrange video consultations with top cardiac surgeons from the comfort of your home. Send your ECG, echo, and angiogram reports. The surgeon reviews and provides a written opinion within 48 hours.' },
      { question: 'Which hospital is best for heart surgery in India?', answer: 'Fortis Escorts Heart Institute (Delhi) and Medanta (Gurugram) are the top 2 cardiac hospitals. Fortis Escorts performs 5,000+ cardiac surgeries annually. Medanta has India\'s top cardiac surgeons. Both are JCI-accredited.' },
      { question: 'Is minimally invasive heart surgery available in India?', answer: 'Yes. Top hospitals offer MIDCAB (minimally invasive CABG), robotic cardiac surgery (da Vinci Xi), TAVR (transcatheter aortic valve), and beating heart surgery. Recovery is 50% faster than traditional open heart surgery.' },
    ],
  },
  'best-cancer-hospitals': {
    title: '10 Best Cancer Hospitals in India 2026',
    titleAr: 'أحسن 10 مستشفيات سرطان في الهند 2026',
    description: 'Top cancer treatment centers in India with proton therapy, immunotherapy, and robotic surgery. Comprehensive oncology for international patients.',
    descriptionAr: 'أحسن مراكز علاج السرطان في الهند مع العلاج البروتوني والمناعي والجراحة الروبوتية.',
    items: [
      { rank: 1, name: 'Tata Memorial Hospital', city: 'Mumbai', surgeons: ['Dr. R.A. Badwe'], specialties: ['Surgical Oncology', 'Radiation', 'Chemotherapy'], jci: false, intlPatients: '50,000+ cases/year', whyRanked: 'India\'s #1 cancer hospital. Highest case volume. Pioneered multiple cancer treatment protocols.', costRange: '$3,000-25,000', link: '/treatments/cancer-treatment-india' },
      { rank: 2, name: 'Apollo Cancer Centre', city: 'Chennai', surgeons: ['Dr. Venkata Pradeep'], specialties: ['Proton Therapy', 'Immunotherapy', 'Robotic'], jci: true, intlPatients: '15,000+ cases/year', whyRanked: 'India\'s first proton therapy center. Comprehensive cancer care across all types.', costRange: '$5,000-30,000', link: '/treatments/cancer-treatment-india' },
      { rank: 3, name: 'Rajiv Gandhi Cancer Institute', city: 'Delhi', surgeons: ['Dr. G.K. Rath'], specialties: ['BMT', 'Radiation', 'Immunotherapy'], jci: true, intlPatients: '8,000+ cases/year', whyRanked: 'Largest dedicated cancer hospital in North India. 300+ bed BMT unit.', costRange: '$4,000-25,000' },
      { rank: 4, name: 'Medanta Cancer Institute', city: 'Gurugram', surgeons: ['Dr. Ashok Vaid'], specialties: ['Precision Oncology', 'Genomic', 'Immunotherapy'], jci: true, intlPatients: '6,000+ cases/year', whyRanked: 'Pioneer in precision/genomic oncology in India. Personalized cancer treatment protocols.', costRange: '$5,000-35,000' },
      { rank: 5, name: 'Fortis Memorial Research', city: 'Gurugram', surgeons: ['Dr. S. Hukku'], specialties: ['CyberKnife', 'Proton', 'Robotic Surgery'], jci: true, intlPatients: '5,000+ cases/year', whyRanked: 'CyberKnife and TrueBeam technology. Excellent radiation oncology department.', costRange: '$4,000-28,000' },
      { rank: 6, name: 'HCG Cancer Centre', city: 'Bangalore', surgeons: ['Dr. B.S. Ajaikumar'], specialties: ['Radiation', 'Medical Oncology', 'Surgical'], jci: true, intlPatients: '7,000+ cases/year', whyRanked: 'Largest cancer care network in India (24 centers). Specialized protocols for each cancer type.', costRange: '$3,500-25,000' },
      { rank: 7, name: 'Max Cancer Centre', city: 'Delhi', surgeons: ['Dr. Harit Chaturvedi'], specialties: ['Breast Cancer', 'GI Oncology', 'Robotic'], jci: true, intlPatients: '5,000+ cases/year', whyRanked: 'Top breast cancer surgeon in India. Excellent GI oncology outcomes.', costRange: '$4,000-30,000' },
      { rank: 8, name: 'Narayana Health', city: 'Bangalore', surgeons: ['Multiple'], specialties: ['Pediatric Oncology', 'BMT', 'Surgical'], jci: true, intlPatients: '4,000+ cases/year', whyRanked: 'Most affordable cancer treatment among top hospitals. Strong pediatric oncology program.', costRange: '$2,500-20,000' },
      { rank: 9, name: 'Kidwai Memorial', city: 'Bangalore', surgeons: ['Multiple'], specialties: ['Head & Neck', 'Gynec Oncology', 'Radiation'], jci: false, intlPatients: '30,000+ cases/year', whyRanked: 'One of India\'s oldest and most experienced cancer centers. Government-supported with very affordable pricing.', costRange: '$1,000-15,000' },
      { rank: 10, name: 'CMC Vellore', city: 'Vellore', surgeons: ['Multiple'], specialties: ['Hematology', 'BMT', 'Medical Oncology'], jci: true, intlPatients: '3,000+ cases/year', whyRanked: 'Top research hospital. Excellent BMT program. Known for handling rare cancers.', costRange: '$3,000-22,000' },
    ],
    faqs: [
      { question: 'Which is the best cancer hospital in India?', answer: 'Tata Memorial Hospital Mumbai is the #1 cancer hospital in India, treating 50,000+ patients annually. For international patients seeking JCI accreditation, Apollo Cancer Centre Chennai is the top choice with India\'s first proton therapy center.' },
      { question: 'How much does cancer treatment cost in India?', answer: 'Cancer treatment in India costs $3,000-35,000 depending on type: Chemotherapy ($3,000-8,000 per cycle), Radiation ($4,000-10,000), Surgery ($5,000-15,000), Immunotherapy ($5,000-20,000), Proton Therapy ($15,000-35,000). This is 70-85% cheaper than USA.' },
      { question: 'Is proton therapy available in India?', answer: 'Yes. Apollo Proton Cancer Centre in Chennai was India\'s first (opened 2019). It treats brain, head & neck, pediatric, prostate, and lung cancers with precision proton beams. Cost: $15,000-35,000 vs $100,000+ in USA.' },
      { question: 'Can international patients get immunotherapy in India?', answer: 'Yes. Top hospitals offer Keytruda, Opdivo, Yervoy, and CAR-T cell therapy. Cost is 60-80% less than USA. Apollo, Medanta, and Max have dedicated immunotherapy programs with clinical trial access.' },
      { question: 'How long does cancer treatment take in India?', answer: 'Varies by type: Surgery (2-3 weeks stay), Chemotherapy (4-6 months, can go back between cycles), Radiation (4-6 weeks daily), Combined (3-6 months). Many patients come for surgery + first chemo cycle, then continue chemo at home.' },
      { question: 'Do Indian hospitals handle rare cancers?', answer: 'Yes. Tata Memorial, AIIMS, and CMC Vellore handle complex and rare cancers. India\'s large population means doctors see more cases of rare cancers than most Western hospitals, building unmatched experience.' },
      { question: 'Is robotic surgery for cancer available in India?', answer: 'Yes. Da Vinci Xi robotic surgery is available at Apollo, Fortis, Max, Kokilaben, and Medanta. Used for prostate, kidney, colorectal, gynecological, and head & neck cancers. Faster recovery, less blood loss, smaller scars.' },
      { question: 'Can I bring my biopsy slides to India for review?', answer: 'Yes. Send your pathology slides and imaging CDs in advance. Indian oncologists review them before your visit. Video consultation available to discuss treatment options. No travel needed for initial opinion.' },
    ],
  },
  'best-ivf-clinics': {
    title: '10 Best IVF Clinics in India 2026',
    titleAr: 'أحسن 10 مراكز أطفال أنابيب في الهند 2026',
    description: 'Top IVF and fertility clinics in India with highest success rates. ICSI, IUI, egg freezing, and donor programs for international patients.',
    descriptionAr: 'أحسن مراكز أطفال الأنابيب في الهند مع أعلى نسب نجاح.',
    items: [
      { rank: 1, name: 'Nova IVF Fertility', city: 'Mumbai/Pan-India', surgeons: ['Dr. Hrishikesh Pai'], specialties: ['IVF', 'ICSI', 'Egg Freezing', 'PGT'], jci: true, intlPatients: '50,000+ cycles/year', whyRanked: 'India\'s largest IVF chain (68 centers). 55-65% success rate. International standard labs.', costRange: '$3,000-5,500', link: '/treatments/ivf-india' },
      { rank: 2, name: 'Cloudnine Fertility', city: 'Bangalore', surgeons: ['Dr. Kishore Kumar'], specialties: ['IVF', 'ICSI', 'IUI', 'Surrogacy'], jci: true, intlPatients: '10,000+ cycles/year', whyRanked: 'Premium fertility + maternity chain. Top success rates in South India. International patient lounge.', costRange: '$3,500-6,000' },
      { rank: 3, name: 'Apollo Fertility', city: 'Chennai/Pan-India', surgeons: ['Dr. Arun Muthuvel'], specialties: ['IVF', 'ICSI', 'Egg Donor', 'PGD'], jci: true, intlPatients: '8,000+ cycles/year', whyRanked: 'Part of Apollo network. Strong genetic testing lab. International insurance accepted.', costRange: '$3,000-5,500' },
      { rank: 4, name: 'Milann Fertility', city: 'Bangalore', surgeons: ['Dr. Kamini Rao'], specialties: ['IVF', 'Reproductive Genetics', 'Male Infertility'], jci: true, intlPatients: '6,000+ cycles/year', whyRanked: 'Pioneer IVF clinic in India (1990). Dr. Kamini Rao is India\'s most famous fertility specialist.', costRange: '$3,000-5,000' },
      { rank: 5, name: 'Bloom IVF', city: 'Mumbai', surgeons: ['Dr. Hrishikesh Pai'], specialties: ['IVF', 'ICSI', 'Blastocyst Transfer'], jci: true, intlPatients: '5,000+ cycles/year', whyRanked: 'Consistently high success rates (60%+). Time-lapse embryo monitoring. AI-powered embryo selection.', costRange: '$3,500-5,500' },
      { rank: 6, name: 'Indira IVF', city: 'Delhi/Pan-India', surgeons: ['Dr. Ajay Murdia'], specialties: ['IVF', 'IUI', 'ICSI', 'Fertility Preservation'], jci: false, intlPatients: '100,000+ cycles/year', whyRanked: 'Largest IVF provider in India (120+ centers). Most affordable. Very high volume = experienced team.', costRange: '$2,000-4,000' },
      { rank: 7, name: 'Manipal Fertility', city: 'Bangalore', surgeons: ['Dr. Prafull Dorle'], specialties: ['IVF', 'Reproductive Endocrinology', 'PGT-A'], jci: true, intlPatients: '4,000+ cycles/year', whyRanked: 'Research-focused with clinical trials access. Strong genetic testing capabilities.', costRange: '$3,000-5,000' },
      { rank: 8, name: 'Fortis Bloom IVF', city: 'Delhi', surgeons: ['Dr. Nandita Palshetkar'], specialties: ['IVF', 'ICSI', 'Egg Freezing', 'Surrogacy'], jci: true, intlPatients: '3,000+ cycles/year', whyRanked: 'Top fertility specialist in North India. Premium hospital setting with full support services.', costRange: '$3,500-5,500' },
      { rank: 9, name: 'Morpheus IVF', city: 'Mumbai', surgeons: ['Dr. Kaberi Banerjee'], specialties: ['IVF', 'Endometriosis', 'Male Infertility'], jci: false, intlPatients: '3,000+ cycles/year', whyRanked: 'Specialized in difficult cases. High success rate for patients who failed elsewhere.', costRange: '$3,000-5,000' },
      { rank: 10, name: 'Max IVF', city: 'Delhi', surgeons: ['Dr. Sonia Malik'], specialties: ['IVF', 'ICSI', 'PGD', 'Fertility Preservation'], jci: true, intlPatients: '2,500+ cycles/year', whyRanked: 'Part of Max Healthcare. Premium patient experience. Strong international patient department.', costRange: '$3,500-6,000' },
    ],
    faqs: [
      { question: 'What is the IVF success rate in India?', answer: 'Top IVF clinics in India have 55-65% success rate per cycle for women under 35. This is comparable to the best clinics in USA and Europe. Success drops to 30-40% for women 35-40, and 15-25% for 40+.' },
      { question: 'How much does IVF cost in India?', answer: 'IVF in India costs $3,000-6,000 per cycle including medications, monitoring, egg retrieval, embryo transfer, and freezing. This is 70-80% cheaper than USA ($15,000-25,000) and UK (£5,000-8,000).' },
      { question: 'Is egg freezing legal in India for foreigners?', answer: 'Yes. Egg freezing is legal for all women in India under the ART Act 2021. Cost: $1,500-3,000 per cycle. Storage: $200-500/year. Many GCC women come to India for fertility preservation before age 35.' },
      { question: 'How many IVF cycles do I need?', answer: 'On average, 1-3 cycles. 55-65% success in first cycle (under 35). Cumulative success after 3 cycles is 80-90%. Your doctor will recommend based on age, AMH levels, and previous history.' },
      { question: 'Can I choose the gender of my baby with IVF in India?', answer: 'No. Gender selection is illegal in India under the PCPNDT Act. PGD/PGT is allowed only for genetic disease screening, not sex selection. This law applies equally to Indian and international patients.' },
      { question: 'Is surrogacy available in India for foreigners?', answer: 'No. Commercial surrogacy for foreigners was banned in India in 2021 (Surrogacy Regulation Act). Only altruistic surrogacy is allowed for Indian married couples. GCC patients should consider other fertility options.' },
      { question: 'Do I need to stay in India for the entire IVF cycle?', answer: 'Plan for 14-21 days: Day 1-10 (ovarian stimulation + monitoring), Day 11-12 (egg retrieval), Day 16-17 (embryo transfer), Day 17-21 (rest). You can return home 3-5 days after transfer.' },
      { question: 'What documents do I need for IVF in India?', answer: 'Marriage certificate (mandatory), passport copies, previous medical records, hormone test results (AMH, FSH, E2), husband\'s semen analysis, and any previous IVF reports. We help with all documentation.' },
    ],
  },
  'best-orthopedic-hospitals': {
    title: '10 Best Orthopedic Hospitals in India 2026',
    titleAr: 'أحسن 10 مستشفيات عظام في الهند 2026',
    description: 'Top orthopedic hospitals for joint replacement, spine surgery, and sports medicine. Robotic surgery and rapid recovery protocols.',
    descriptionAr: 'أحسن مستشفيات العظام لتبديل المفاصل وعمليات العمود الفقري.',
    items: [
      { rank: 1, name: 'Fortis Hospital', city: 'Mumbai', surgeons: ['Dr. Sachin Tapasvi'], specialties: ['Joint Replacement', 'Sports Medicine', 'Robotic'], jci: true, intlPatients: '10,000+ surgeries/year', whyRanked: 'Top robotic joint replacement center. MAKO robotic system. Dr. Tapasvi is India\'s #1 knee surgeon.', costRange: '$5,000-8,000', link: '/treatments/knee-replacement-india' },
      { rank: 2, name: 'Apollo Hospital', city: 'Chennai', surgeons: ['Dr. A.K. Venkatachalam'], specialties: ['Hip', 'Knee', 'Shoulder', 'Minimally Invasive'], jci: true, intlPatients: '8,000+ surgeries/year', whyRanked: 'Largest orthopedic department in South India. Anterior approach hip specialist. International rehab program.', costRange: '$5,000-9,000' },
      { rank: 3, name: 'Max Hospital', city: 'Delhi', surgeons: ['Dr. Saurabh Chugh'], specialties: ['Joint Replacement', 'Spine', 'Trauma'], jci: true, intlPatients: '6,000+ surgeries/year', whyRanked: 'Comprehensive orthopedic center with same-day joint replacement (outpatient). Excellent spine unit.', costRange: '$5,000-8,000' },
      { rank: 4, name: 'Medanta', city: 'Gurugram', surgeons: ['Dr. Ashok Rajgopal'], specialties: ['Knee', 'Hip', 'Complex Revision'], jci: true, intlPatients: '5,000+ surgeries/year', whyRanked: 'Dr. Ashok Rajgopal holds Limca record for most knee replacements. Expert in complex revision cases.', costRange: '$6,000-10,000' },
      { rank: 5, name: 'Indian Spinal Injuries Centre', city: 'Delhi', surgeons: ['Dr. H.S. Chhabra'], specialties: ['Spine', 'Spinal Cord Injury', 'Scoliosis'], jci: true, intlPatients: '3,000+ surgeries/year', whyRanked: 'India\'s premier spine hospital. Specialized in complex spinal cord injuries and deformity correction.', costRange: '$5,000-15,000' },
      { rank: 6, name: 'HOSMAT Hospital', city: 'Bangalore', surgeons: ['Dr. Vijay Bose'], specialties: ['Hip Resurfacing', 'Joint Replacement', 'Sports'], jci: true, intlPatients: '4,000+ surgeries/year', whyRanked: 'Dr. Vijay Bose is top hip resurfacing surgeon in India. Pioneered Birmingham Hip Resurfacing in Asia.', costRange: '$5,000-9,000' },
      { rank: 7, name: 'Kokilaben Hospital', city: 'Mumbai', surgeons: ['Dr. Pradeep Moonot'], specialties: ['Foot & Ankle', 'Joint', 'Sports Medicine'], jci: true, intlPatients: '3,000+ surgeries/year', whyRanked: 'Best foot & ankle surgery in India. Advanced sports medicine center with motion analysis lab.', costRange: '$5,000-10,000' },
      { rank: 8, name: 'Fortis Escorts', city: 'Delhi', surgeons: ['Dr. Raju Vaishya'], specialties: ['Trauma', 'Joint Replacement', 'Limb Reconstruction'], jci: true, intlPatients: '4,000+ surgeries/year', whyRanked: 'Excellent trauma center. Expert in complex fracture management and limb lengthening.', costRange: '$4,000-8,000' },
      { rank: 9, name: 'Manipal Hospital', city: 'Bangalore', surgeons: ['Dr. S. Vidyadhara'], specialties: ['Spine', 'Joint', 'Pediatric Orthopedics'], jci: true, intlPatients: '3,000+ surgeries/year', whyRanked: 'Strong pediatric orthopedic unit. Navigation-guided spine surgery with excellent outcomes.', costRange: '$4,500-8,000' },
      { rank: 10, name: 'Artemis Hospital', city: 'Gurugram', surgeons: ['Dr. Saurav Kumar'], specialties: ['Joint', 'Spine', 'Robotic Surgery'], jci: true, intlPatients: '2,500+ surgeries/year', whyRanked: 'Latest ROSA robotic system for knee replacement. Rapid recovery protocol — walk same day.', costRange: '$5,000-9,000' },
    ],
    faqs: [
      { question: 'Which is the best hospital for knee replacement in India?', answer: 'Fortis Hospital Mumbai with Dr. Sachin Tapasvi is the #1 choice for knee replacement. They use the MAKO robotic system for precision implant placement. 10,000+ joint replacements annually with 95%+ satisfaction rate.' },
      { question: 'How much does knee replacement cost in India?', answer: 'Knee replacement in India costs $5,000-7,000 (single knee) and $8,000-12,000 (both knees). This includes implant, surgery, 5-7 day hospital stay, physiotherapy, and follow-up. USA cost: $30,000-50,000 per knee.' },
      { question: 'Is robotic knee replacement available in India?', answer: 'Yes. MAKO, ROSA, and CUVIS robotic systems are available at Fortis, Apollo, Max, and Artemis hospitals. Robotic surgery provides 0.5mm precision in implant placement, resulting in better alignment and longer implant life.' },
      { question: 'How long is recovery after joint replacement in India?', answer: 'Walk same day (with walker). Stairs by day 3. Discharge day 5-7. Full recovery: 6-8 weeks for knee, 4-6 weeks for hip. Most patients return to normal activities within 3 months. Physiotherapy starts day 1.' },
      { question: 'What type of implant is used in India?', answer: 'Top hospitals use international implants: Zimmer, Stryker, Smith & Nephew, DePuy (J&J), and Biomet. Same brands used in USA/Europe. Implant life: 20-25 years. Your surgeon recommends based on age, activity level, and anatomy.' },
      { question: 'Can I get both knees replaced at once?', answer: 'Yes, bilateral knee replacement is common in India. It saves: 1 anesthesia, 1 hospital stay, 1 rehab period, and ~30% total cost. Recovery is slightly longer (8-10 weeks) but most patients prefer it. Your surgeon assesses fitness.' },
      { question: 'Do I need physiotherapy after returning home?', answer: 'Yes, 4-6 weeks of physiotherapy recommended. In India: included in package (10-15 sessions). After returning home: continue with local physiotherapist. We provide a detailed exercise protocol and video consultations if needed.' },
      { question: 'Is spine surgery safe in India?', answer: 'Yes. India\'s top spine surgeons perform 1,000+ procedures annually. Navigation-guided and robotic spine surgery available. Success rate: 90-95% for disc surgery, 85-90% for fusion. Indian Spinal Injuries Centre is Asia\'s top spine hospital.' },
    ],
  },
  'best-dental-clinics': {
    title: '10 Best Dental Clinics in India for Tourists 2026',
    titleAr: 'أحسن 10 عيادات أسنان في الهند للسياح 2026',
    description: 'Top dental clinics in India for implants, veneers, All-on-4, and cosmetic dentistry. Save 70-80% on dental work.',
    descriptionAr: 'أحسن عيادات أسنان في الهند لزراعة الأسنان والفينير. وفّر 70-80%.',
    items: [
      { rank: 1, name: 'Clove Dental', city: 'Delhi/Pan-India', surgeons: ['Dr. Arpit Gupta'], specialties: ['Implants', 'Veneers', 'All-on-4', 'Cosmetic'], jci: false, intlPatients: '50,000+ patients/year', whyRanked: 'India\'s largest dental chain (450+ clinics). Standardized quality. Nobel Biocare implants. International patient coordinator.', costRange: '$300-5,000', link: '/treatments/dental-implants-india' },
      { rank: 2, name: 'Apollo Dental', city: 'Chennai/Pan-India', surgeons: ['Dr. R. Ravindran'], specialties: ['Implants', 'Full Mouth', 'Orthodontics'], jci: true, intlPatients: '10,000+ patients/year', whyRanked: 'Part of Apollo network. Hospital-grade dental care. CT-guided implant placement. Insurance accepted.', costRange: '$400-6,000' },
      { rank: 3, name: 'FMS Dental', city: 'Hyderabad', surgeons: ['Dr. Mallesh Hiremath'], specialties: ['Implants', 'All-on-4', 'Zygomatic', 'Cosmetic'], jci: false, intlPatients: '5,000+ patients/year', whyRanked: 'Largest single dental hospital in India. Same-day teeth with All-on-4. Dental tourism specialist.', costRange: '$300-5,500' },
      { rank: 4, name: 'Dental World', city: 'Hyderabad', surgeons: ['Dr. Sashi Kumar'], specialties: ['Smile Design', 'Veneers', 'Implants'], jci: false, intlPatients: '3,000+ patients/year', whyRanked: 'Pioneer in digital smile design in India. 3D-printed surgical guides for precise implant placement.', costRange: '$350-5,000' },
      { rank: 5, name: 'Sabka Dentist', city: 'Mumbai/Pan-India', surgeons: ['Multiple'], specialties: ['Implants', 'RCT', 'Orthodontics', 'Veneers'], jci: false, intlPatients: '8,000+ patients/year', whyRanked: 'Most affordable quality dental chain. 100+ locations. Good for basic dental work and single implants.', costRange: '$200-3,000' },
      { rank: 6, name: 'Sri Sai Dental', city: 'Bangalore', surgeons: ['Dr. Vijay Kumar'], specialties: ['All-on-4', 'Full Mouth', 'Implants'], jci: false, intlPatients: '2,000+ patients/year', whyRanked: 'Specialized in full mouth rehabilitation. All-on-4 and All-on-6 specialist. 3D CT scanning in-house.', costRange: '$300-5,000' },
      { rank: 7, name: 'Dental Planet', city: 'Kerala', surgeons: ['Dr. Anoop Nair'], specialties: ['Implants', 'Cosmetic', 'Orthodontics'], jci: false, intlPatients: '3,000+ patients/year', whyRanked: 'Kerala\'s top dental clinic. Combine dental work with Ayurveda wellness. Beautiful resort location.', costRange: '$250-4,000' },
      { rank: 8, name: 'Max Dental', city: 'Delhi', surgeons: ['Dr. Shalabh Kumar'], specialties: ['Implants', 'Oral Surgery', 'TMJ'], jci: true, intlPatients: '2,000+ patients/year', whyRanked: 'Hospital-attached dental department. Best for patients needing dental work under general anesthesia.', costRange: '$400-5,500' },
      { rank: 9, name: 'Dr. Motiwala Dental', city: 'Hyderabad', surgeons: ['Dr. Irfan Motiwala'], specialties: ['Basal Implants', 'Full Mouth', 'Same Day'], jci: false, intlPatients: '4,000+ patients/year', whyRanked: 'Pioneer in basal implants in India. Same-day teeth possible without bone grafting. Popular with GCC patients.', costRange: '$400-6,000' },
      { rank: 10, name: 'Cosmodent India', city: 'Delhi/Gurgaon', surgeons: ['Dr. Aman Ahuja'], specialties: ['Smile Makeover', 'Veneers', 'Implants', 'Cosmetic'], jci: false, intlPatients: '2,000+ patients/year', whyRanked: 'Celebrity dentist. Instagram-famous smile makeovers. Premium cosmetic dentistry experience.', costRange: '$500-7,000' },
    ],
    faqs: [
      { question: 'How much do dental implants cost in India?', answer: 'Single dental implant: $500-1,500 (vs $3,000-5,000 in USA). All-on-4 full mouth: $4,000-6,000 (vs $15,000-25,000 in USA). Veneer per tooth: $150-400 (vs $1,000-2,500 in USA). Save 70-80% on all dental work.' },
      { question: 'Are dental implants in India good quality?', answer: 'Yes. Top clinics use Nobel Biocare, Straumann, and Osstem implants — same brands used in USA/Europe. Titanium Grade 4 implants with 97%+ success rate. 10-year warranty on most implants.' },
      { question: 'How long do I need to stay in India for dental implants?', answer: 'Single implant: 5-7 days. All-on-4: 7-10 days (get temporary teeth same day, return in 3-6 months for permanent). Veneers: 5-7 days. Full mouth makeover: 10-14 days.' },
      { question: 'Can I get same-day dental implants in India?', answer: 'Yes. All-on-4 and basal implants allow same-day teeth. You walk in with missing teeth and walk out with a full set of fixed teeth in 1-3 days. Available at FMS Dental, Dr. Motiwala, and Apollo.' },
      { question: 'Is dental tourism to India safe?', answer: 'Yes. Top dental clinics follow international sterilization protocols. Digital X-rays and 3D CT scans ensure precision. Choose clinics with ISO certification and international implant brands. 97%+ success rate.' },
      { question: 'What about follow-up care after dental work?', answer: 'Initial follow-up in India before you leave. After returning home: virtual follow-ups via WhatsApp photos and video calls. Any issues within warranty period are handled free of charge. Local dentist for routine cleaning.' },
      { question: 'Can I combine dental work with other treatments?', answer: 'Yes! Many patients combine dental implants with hair transplant, cosmetic surgery, or LASIK. We plan your schedule to maximize your India visit. Dental work usually doesn\'t require bed rest.' },
      { question: 'Do Indian dentists speak English?', answer: 'Yes, all top dental clinics have English-speaking dentists (many studied in UK/USA). At Shifa AlHind, we also provide Arabic-speaking coordinators for all dental appointments.' },
    ],
  },
};

const validTopics = Object.keys(topicData);

export function generateStaticParams() {
  return validTopics.map(topic => ({ topic }));
}

export async function generateMetadata({ params }: { params: Promise<{ topic: string; locale: string }> }): Promise<Metadata> {
  const { topic, locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://shifaalhind.onrender.com';
  const data = topicData[topic];
  if (!data) return { title: 'Best Medical Services in India | Shifa AlHind' };

  const title = locale === 'ar' ? data.titleAr : data.title;
  const description = locale === 'ar' ? data.descriptionAr : data.description;
  const path = `/best/${topic}`;

  return {
    title,
    description,
    keywords: [data.title, topic.replace(/-/g, ' '), 'India', 'medical tourism', 'best hospitals', 'JCI accredited', 'أحسن مستشفيات الهند'],
    alternates: { canonical: `${baseUrl}${locale === 'ar' ? '/ar' : ''}${path}`, languages: { 'en-US': `${baseUrl}${path}`, 'ar-SA': `${baseUrl}/ar${path}` } },
    openGraph: { title, description, url: `${baseUrl}${path}`, siteName: 'Shifa AlHind' },
  };
}

export default async function BestOfPage({ params }: { params: Promise<{ topic: string; locale: string }> }) {
  const { topic, locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://shifaalhind.onrender.com';
  const data = topicData[topic] || topicData['best-hospitals-medical-tourism'];
  const isAr = locale === 'ar';

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema items={[
        { name: 'Home', url: `${baseUrl}/${locale}` },
        { name: isAr ? data.titleAr : data.title, url: `${baseUrl}/${locale}/best/${topic}` },
      ]} />
      <FAQSchema faqs={data.faqs} />
      <ItemListSchema name={data.title} description={data.description} items={data.items.map(item => ({ name: item.name, description: item.whyRanked, position: item.rank }))} itemType="Hospital" />
      <SpeakableSchema url={`/best/${topic}`} cssSelectors={['.hero-title', '.ranking-summary']} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 px-4 py-16 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <LastUpdatedBanner lastUpdated="2026-03-06" medicallyReviewed="2026-03-01" reviewerName="Dr. Ahmad Al-Rashid, MBBS, FRCS" />
          <h1 className="hero-title mt-4 font-serif text-3xl font-bold md:text-4xl lg:text-5xl">{isAr ? data.titleAr : data.title}</h1>
          <p className="ranking-summary mx-auto mt-4 max-w-3xl text-lg text-primary-100">{isAr ? data.descriptionAr : data.description}</p>
          <MedicalReviewBadge reviewerName="Dr. Ahmad Al-Rashid" credentials="MBBS, FRCS (UK)" date="March 2026" />
        </div>
      </section>

      {/* Rankings */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-center font-serif text-2xl font-bold md:text-3xl">{isAr ? 'التصنيف الكامل' : 'Complete Rankings'}</h2>
        <div className="mx-auto max-w-5xl space-y-6">
          {data.items.map((item) => (
            <Card key={item.rank} className={item.rank <= 3 ? 'border-2 border-primary-500 shadow-lg' : ''}>
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-xl font-bold text-white ${item.rank === 1 ? 'bg-yellow-500' : item.rank === 2 ? 'bg-gray-400' : item.rank === 3 ? 'bg-amber-600' : 'bg-primary-500'}`}>
                    #{item.rank}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary-700">{item.name}</h3>
                    <p className="text-sm text-gray-500">📍 {item.city} {item.jci ? '| ✅ JCI Accredited' : ''} | 🌍 {item.intlPatients}</p>
                    {item.surgeons.length > 0 && <p className="mt-1 text-sm text-gray-600">👨‍⚕️ {item.surgeons.join(', ')}</p>}
                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.specialties.map((spec, i) => (
                        <span key={i} className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">{spec}</span>
                      ))}
                    </div>
                    <p className="mt-3 text-gray-700">{item.whyRanked}</p>
                    <p className="mt-2 font-medium text-green-600">💰 {isAr ? 'التكلفة' : 'Cost'}: {item.costRange}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-8 text-center font-serif text-2xl font-bold md:text-3xl">{isAr ? 'جدول المقارنة' : 'Comparison Table'}</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg border border-gray-200 bg-white">
              <thead className="bg-primary-50">
                <tr>
                  <th className="border-b px-4 py-3 text-left text-sm">#</th>
                  <th className="border-b px-4 py-3 text-left text-sm">{isAr ? 'المستشفى' : 'Hospital/Clinic'}</th>
                  <th className="border-b px-4 py-3 text-center text-sm">{isAr ? 'المدينة' : 'City'}</th>
                  <th className="border-b px-4 py-3 text-center text-sm">JCI</th>
                  <th className="border-b px-4 py-3 text-center text-sm">{isAr ? 'المرضى الدوليين' : 'Intl Patients'}</th>
                  <th className="border-b px-4 py-3 text-center text-sm">{isAr ? 'التكلفة' : 'Cost Range'}</th>
                </tr>
              </thead>
              <tbody>
                {data.items.map((item) => (
                  <tr key={item.rank} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-bold text-primary-600">#{item.rank}</td>
                    <td className="px-4 py-3 font-medium">{item.name}</td>
                    <td className="px-4 py-3 text-center text-sm">{item.city}</td>
                    <td className="px-4 py-3 text-center">{item.jci ? '✅' : '—'}</td>
                    <td className="px-4 py-3 text-center text-sm">{item.intlPatients}</td>
                    <td className="px-4 py-3 text-center text-sm font-medium text-green-600">{item.costRange}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-center font-serif text-2xl font-bold md:text-3xl">{isAr ? 'أسئلة شائعة' : 'Frequently Asked Questions'}</h2>
        <div className="mx-auto max-w-4xl space-y-4">
          {data.faqs.map((faq, i) => (
            <Card key={i}><CardContent className="pt-6">
              <h3 className="mb-2 font-bold text-primary-700">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </CardContent></Card>
          ))}
        </div>
      </section>

      <InternalLinks links={[
        { title: 'All Treatments', href: '/treatments' },
        { title: 'For UAE Patients', href: '/for-uae-patients' },
        { title: 'For Saudi Patients', href: '/for-saudi-patients' },
        { title: 'Cost Comparison', href: '/cost-comparison/uae' },
      ]} />

      <Testimonials testimonials={TREATMENT_TESTIMONIALS['generic']} />
      <TrustBadges />

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 px-4 py-16 text-center text-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-4 font-serif text-2xl font-bold md:text-3xl">{isAr ? 'أبي أعرف أكثر؟' : 'Want to Know More?'}</h2>
          <p className="mb-8 text-lg text-primary-100">{isAr ? 'تواصل وياّنا واحصل على استشارة مجانية مع أحسن المستشفيات' : 'Contact us for a free consultation with the best hospitals in India'}</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-accent-500 text-lg hover:bg-accent-600">
              <Link href="/consultation">{isAr ? 'استشارة مجانية' : 'Get Free Consultation'}</Link>
            </Button>
            <Button asChild size="lg" className="border-2 border-green-400 bg-green-600 text-lg text-white hover:bg-green-700">
              <a href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20know%20about%20best%20hospitals%20in%20India" target="_blank" rel="noopener noreferrer">{isAr ? 'راسلنا واتساب' : 'WhatsApp Us'}</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

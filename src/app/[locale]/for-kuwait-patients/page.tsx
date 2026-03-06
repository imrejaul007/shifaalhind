import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import {
  Check,
  Heart,
  DollarSign,
  Plane,
  Shield,
  Clock,
  Users,
  Phone,
  Star,
  Stethoscope,
  Baby,
  Bone,
  Eye,
  Brain,
  Syringe
} from 'lucide-react';
import { TrustBadges } from '@/components/trust-badges/trust-badges';
import { GCCTrustBadges, InsurancePartners, GovernmentPartnership, WhatsAppLocalNumber } from '@/components/trust-signals/gcc-trust';
import { LocalBusinessSchema } from '@/components/seo/local-business-schema';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return generateSEOMetadata({
    title_en: 'Medical Tourism India for Kuwait Patients | Save 70-80% on Treatment',
    title_ar: 'السياحة العلاجية في الهند لمرضى الكويت | وفر 70-80% على العلاج',
    description_en: 'Join 20,000+ Kuwait patients who saved 70-80% on medical treatment in India. MOH Kuwait approved, JCI hospitals, direct flights from Kuwait City. Heart surgery KWD 12K→2.5K.',
    description_ar: 'انضم إلى أكثر من 20,000 مريض كويتي وفروا 70-80% على العلاج الطبي في الهند. معتمد من وزارة الصحة الكويتية، مستشفيات JCI، رحلات من مدينة الكويت. جراحة القلب 12 ألف→2.5 ألف دينار.',
    locale,
    path: '/for-kuwait-patients',
  });
}

export const dynamic = 'force-dynamic';

export default async function KuwaitPatientsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const content = {
    en: {
      hero: {
        title: 'Medical Tourism to India for Kuwait Patients',
        subtitle: 'Join 20,000+ Kuwait patients who saved 70-80% on world-class medical treatment in India\'s top JCI-accredited hospitals',
        cta1: 'Get Free Consultation',
        cta2: 'WhatsApp Us Now'
      },
      whyChoose: {
        title: 'Why 20,000+ Kuwait Patients Choose India Every Year',
        reasons: [
          {
            title: 'Save 70-80% on Costs',
            description: 'Heart surgery: KWD 12,000 in Kuwait \u2192 KWD 2,500 in India\nIVF: KWD 4,000 in Kuwait \u2192 KWD 800 in India\nKnee replacement: KWD 6,000 in Kuwait \u2192 KWD 1,200 in India'
          },
          {
            title: 'JCI-Accredited Hospitals',
            description: 'Apollo, Fortis, Max, Manipal hospitals meet international standards. Same quality as Kuwait hospitals at a fraction of the cost.'
          },
          {
            title: 'Direct Flights from Kuwait City',
            description: '4 hour flights to Mumbai and Delhi. Multiple daily flights via Kuwait Airways and Air India from Kuwait International Airport.'
          },
          {
            title: 'No Waiting Times',
            description: 'Book surgery within 7-14 days vs months of waiting in Kuwait. Immediate consultations with top specialists available.'
          },
          {
            title: 'Arabic-Speaking Staff',
            description: 'Many hospitals have Arabic-speaking coordinators, translators, and staff to ensure comfortable communication for Kuwaiti patients.'
          },
          {
            title: '98%+ Success Rates',
            description: 'India\'s top hospitals match or exceed Kuwait success rates. Over 500,000 international patients treated annually with world-class outcomes.'
          }
        ]
      },
      costComparison: {
        title: 'Kuwait vs India: Cost Comparison (KWD)',
        tableHeaders: {
          treatment: 'Treatment',
          localCost: 'Kuwait Cost',
          indiaCost: 'India Cost',
          savings: 'You Save'
        },
        treatments: [
          { name: 'Heart Bypass Surgery (CABG)', local: 'KWD 12,000', india: 'KWD 2,500', save: 'KWD 9,500 (79%)' },
          { name: 'Heart Valve Replacement', local: 'KWD 13,500', india: 'KWD 2,800', save: 'KWD 10,700 (79%)' },
          { name: 'Total Knee Replacement', local: 'KWD 6,000', india: 'KWD 1,200', save: 'KWD 4,800 (80%)' },
          { name: 'IVF Treatment (1 cycle)', local: 'KWD 4,000', india: 'KWD 800', save: 'KWD 3,200 (80%)' },
          { name: 'Spinal Fusion Surgery', local: 'KWD 9,000', india: 'KWD 2,000', save: 'KWD 7,000 (78%)' },
          { name: 'Liver Transplant', local: 'KWD 45,000', india: 'KWD 10,000', save: 'KWD 35,000 (78%)' },
          { name: 'Hip Replacement', local: 'KWD 7,000', india: 'KWD 1,500', save: 'KWD 5,500 (79%)' },
          { name: 'Dental Implants (full mouth)', local: 'KWD 5,000', india: 'KWD 1,000', save: 'KWD 4,000 (80%)' },
          { name: 'Gastric Bypass Surgery', local: 'KWD 6,500', india: 'KWD 1,500', save: 'KWD 5,000 (77%)' },
          { name: 'Kidney Transplant', local: 'KWD 33,000', india: 'KWD 7,500', save: 'KWD 25,500 (77%)' }
        ],
        note: '*Prices include hospital stay, surgeon fees, medications, and post-operative care. Flights and accommodation extra. 1 KWD \u2248 3.26 USD.'
      },
      popularTreatments: {
        title: 'Most Popular Treatments for Kuwait Patients',
        treatments: [
          { name: 'Heart Surgery', description: 'CABG, valve replacement, angioplasty with 98%+ success rates', icon: 'heart' },
          { name: 'IVF & Fertility', description: 'Advanced IVF, ICSI, egg freezing with high success rates', icon: 'baby' },
          { name: 'Orthopedic Surgery', description: 'Knee & hip replacement, spine surgery, sports medicine', icon: 'bone' },
          { name: 'Cancer Treatment', description: 'Chemotherapy, radiation, robotic surgery, immunotherapy', icon: 'syringe' },
          { name: 'Eye Surgery', description: 'LASIK, cataract, retinal surgery, corneal transplant', icon: 'eye' },
          { name: 'Neurosurgery', description: 'Brain tumor, spine surgery, deep brain stimulation', icon: 'brain' }
        ]
      },
      patientJourney: {
        title: 'Your Treatment Journey: Kuwait to India',
        steps: [
          { step: '1', title: 'Free Consultation', description: 'Share your medical reports via WhatsApp. Get doctor recommendations and cost estimate within 24 hours.' },
          { step: '2', title: 'Treatment Plan', description: 'Receive a detailed treatment plan with hospital options, doctor profiles, and transparent pricing in KWD.' },
          { step: '3', title: 'Visa & Travel', description: 'We handle your e-Medical visa application, flight booking assistance, and airport pickup from Kuwait City.' },
          { step: '4', title: 'Hospital Admission', description: 'Dedicated Arabic-speaking coordinator meets you. VIP hospital admission with private room and halal meals.' },
          { step: '5', title: 'Treatment & Recovery', description: 'World-class treatment by top specialists. 24/7 support for you and your family throughout your stay.' },
          { step: '6', title: 'Return to Kuwait', description: 'Post-treatment follow-up plan. Video consultations with your doctor after returning to Kuwait City, Hawalli, or Salmiya.' }
        ]
      },
      faq: {
        title: 'Frequently Asked Questions - Kuwait Patients',
        questions: [
          {
            q: 'How long does medical treatment in India take?',
            a: 'Most procedures take 7-21 days including recovery. Heart surgery: 10-14 days, knee replacement: 10-15 days, IVF: 21-28 days. You can fly back to Kuwait after doctor clearance.'
          },
          {
            q: 'Is the quality of Indian hospitals comparable to Kuwait?',
            a: 'Yes! Apollo, Fortis, Max, and Manipal are JCI-accredited with international standards. Many doctors trained at Harvard, Johns Hopkins, and Mayo Clinic. Success rates match or exceed Kuwait hospitals.'
          },
          {
            q: 'How do I get a medical visa from Kuwait?',
            a: 'Apply online at indianvisaonline.gov.in/evisa. Select e-Medical Visa. Processing takes 3-5 business days. Cost is about KWD 25. We provide complete visa assistance including hospital invitation letter.'
          },
          {
            q: 'Can my family accompany me from Kuwait?',
            a: 'Yes! Medical visa allows 1-2 attendants. We arrange accommodation near the hospital (KWD 10-30/night). Family members can stay with you during recovery.'
          },
          {
            q: 'Does Kuwait government insurance cover treatment in India?',
            a: 'Some Kuwaiti government programs and private insurance plans cover treatment at JCI-accredited hospitals abroad. Check with your insurer or MOH Kuwait. We provide all documentation needed for claims.'
          },
          {
            q: 'What about halal food and prayer facilities?',
            a: 'All top hospitals provide halal meals. Prayer rooms are available. Many hospitals in Mumbai and Delhi have dedicated GCC patient wings with Arabic TV channels and culturally sensitive care.'
          },
          {
            q: 'How much money should I bring from Kuwait?',
            a: 'Most costs are paid in advance via bank transfer. Bring KWD 150-400 for daily expenses, meals outside hospital, and local transport. We accept international credit cards and bank transfers.'
          },
          {
            q: 'Which Indian cities are best for Kuwaiti patients?',
            a: 'Mumbai and Delhi are top choices with multiple direct flights from Kuwait City. Bangalore and Chennai are also excellent for specialized treatments. All have hospitals with dedicated Arabic-speaking staff.'
          }
        ]
      },
      finalCta: {
        title: 'Ready to Save 70-80% on Your Medical Treatment?',
        subtitle: 'Join thousands of Kuwait patients who transformed their health and saved money with India\'s top hospitals',
        cta1: 'Get Free Consultation',
        cta2: 'WhatsApp Us',
        note: 'Free consultation \u2022 No obligation \u2022 Response within 1 hour'
      }
    },
    ar: {
      hero: {
        title: '\u0627\u0644\u0633\u064a\u0627\u062d\u0629 \u0627\u0644\u0639\u0644\u0627\u062c\u064a\u0629 \u0641\u064a \u0627\u0644\u0647\u0646\u062f \u0644\u0645\u0631\u0636\u0649 \u0627\u0644\u0643\u0648\u064a\u062a',
        subtitle: '\u0634\u0644\u0648\u0646 \u0623\u0643\u062b\u0631 \u0645\u0646 20,000 \u0645\u0631\u064a\u0636 \u0643\u0648\u064a\u062a\u064a \u0648\u0641\u0631\u0648\u0627 70-80% \u0639\u0644\u0649 \u0627\u0644\u0639\u0644\u0627\u062c \u0627\u0644\u0637\u0628\u064a \u0639\u0627\u0644\u0645\u064a \u0627\u0644\u0645\u0633\u062a\u0648\u0649 \u0641\u064a \u0623\u0641\u0636\u0644 \u0645\u0633\u062a\u0634\u0641\u064a\u0627\u062a \u0627\u0644\u0647\u0646\u062f \u0627\u0644\u0645\u0639\u062a\u0645\u062f\u0629 \u0645\u0646 JCI',
        cta1: '\u0627\u062d\u0635\u0644 \u0639\u0644\u0649 \u0627\u0633\u062a\u0634\u0627\u0631\u0629 \u0645\u062c\u0627\u0646\u064a\u0629',
        cta2: '\u062a\u0648\u0627\u0635\u0644 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628 \u0627\u0644\u062d\u064a\u0646'
      },
      whyChoose: {
        title: '\u0644\u064a\u0634 \u0623\u0643\u062b\u0631 \u0645\u0646 20,000 \u0645\u0631\u064a\u0636 \u0643\u0648\u064a\u062a\u064a \u064a\u062e\u062a\u0627\u0631\u0648\u0646 \u0627\u0644\u0647\u0646\u062f \u0643\u0644 \u0633\u0646\u0629',
        reasons: [
          {
            title: '\u0648\u0641\u0631 70-80% \u0645\u0646 \u0627\u0644\u062a\u0643\u0627\u0644\u064a\u0641',
            description: '\u062c\u0631\u0627\u062d\u0629 \u0627\u0644\u0642\u0644\u0628: 12 \u0623\u0644\u0641 \u062f\u064a\u0646\u0627\u0631 \u0641\u064a \u0627\u0644\u0643\u0648\u064a\u062a \u2190 2,500 \u062f\u064a\u0646\u0627\u0631 \u0641\u064a \u0627\u0644\u0647\u0646\u062f\n\u0623\u0637\u0641\u0627\u0644 \u0627\u0644\u0623\u0646\u0627\u0628\u064a\u0628: 4 \u0622\u0644\u0627\u0641 \u062f\u064a\u0646\u0627\u0631 \u0641\u064a \u0627\u0644\u0643\u0648\u064a\u062a \u2190 800 \u062f\u064a\u0646\u0627\u0631 \u0641\u064a \u0627\u0644\u0647\u0646\u062f\n\u0627\u0633\u062a\u0628\u062f\u0627\u0644 \u0627\u0644\u0631\u0643\u0628\u0629: 6 \u0622\u0644\u0627\u0641 \u062f\u064a\u0646\u0627\u0631 \u0641\u064a \u0627\u0644\u0643\u0648\u064a\u062a \u2190 1,200 \u062f\u064a\u0646\u0627\u0631 \u0641\u064a \u0627\u0644\u0647\u0646\u062f'
          },
          {
            title: '\u0645\u0633\u062a\u0634\u0641\u064a\u0627\u062a \u0645\u0639\u062a\u0645\u062f\u0629 \u0645\u0646 JCI',
            description: '\u0645\u0633\u062a\u0634\u0641\u064a\u0627\u062a \u0623\u0628\u0648\u0644\u0648 \u0648\u0641\u0648\u0631\u062a\u064a\u0633 \u0648\u0645\u0627\u0643\u0633 \u0648\u0645\u0627\u0646\u064a\u0628\u0627\u0644 \u062a\u0644\u0628\u064a \u0627\u0644\u0645\u0639\u0627\u064a\u064a\u0631 \u0627\u0644\u062f\u0648\u0644\u064a\u0629. \u0646\u0641\u0633 \u0627\u0644\u062c\u0648\u062f\u0629 \u0643\u0645\u0633\u062a\u0634\u0641\u064a\u0627\u062a \u0627\u0644\u0643\u0648\u064a\u062a \u0628\u062c\u0632\u0621 \u0628\u0633\u064a\u0637 \u0645\u0646 \u0627\u0644\u062a\u0643\u0644\u0641\u0629.'
          },
          {
            title: '\u0631\u062d\u0644\u0627\u062a \u0645\u0628\u0627\u0634\u0631\u0629 \u0645\u0646 \u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0643\u0648\u064a\u062a',
            description: '\u0631\u062d\u0644\u0627\u062a \u0645\u0646 4 \u0633\u0627\u0639\u0627\u062a \u0625\u0644\u0649 \u0645\u0648\u0645\u0628\u0627\u064a \u0648\u062f\u0644\u0647\u064a. \u0631\u062d\u0644\u0627\u062a \u064a\u0648\u0645\u064a\u0629 \u0645\u062a\u0639\u062f\u062f\u0629 \u0639\u0628\u0631 \u0627\u0644\u062e\u0637\u0648\u0637 \u0627\u0644\u0643\u0648\u064a\u062a\u064a\u0629 \u0648\u0625\u064a\u0631 \u0625\u0646\u062f\u064a\u0627 \u0645\u0646 \u0645\u0637\u0627\u0631 \u0627\u0644\u0643\u0648\u064a\u062a \u0627\u0644\u062f\u0648\u0644\u064a.'
          },
          {
            title: '\u0628\u062f\u0648\u0646 \u0623\u0648\u0642\u0627\u062a \u0627\u0646\u062a\u0638\u0627\u0631',
            description: '\u0627\u062d\u062c\u0632 \u0627\u0644\u062c\u0631\u0627\u062d\u0629 \u062e\u0644\u0627\u0644 7-14 \u064a\u0648\u0645\u064b\u0627 \u0645\u0642\u0627\u0628\u0644 \u0634\u0647\u0648\u0631 \u0627\u0646\u062a\u0638\u0627\u0631 \u0641\u064a \u0627\u0644\u0643\u0648\u064a\u062a. \u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a \u0641\u0648\u0631\u064a\u0629 \u0645\u0639 \u0623\u0641\u0636\u0644 \u0627\u0644\u0645\u062a\u062e\u0635\u0635\u064a\u0646.'
          },
          {
            title: '\u0637\u0627\u0642\u0645 \u064a\u062a\u062d\u062f\u062b \u0627\u0644\u0639\u0631\u0628\u064a\u0629',
            description: '\u0648\u0627\u064a\u062f \u0645\u0633\u062a\u0634\u0641\u064a\u0627\u062a \u0639\u0646\u062f\u0647\u0627 \u0645\u0646\u0633\u0642\u064a\u0646 \u0648\u0645\u062a\u0631\u062c\u0645\u064a\u0646 \u064a\u062a\u062d\u062f\u062b\u0648\u0646 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0639\u0634\u0627\u0646 \u062a\u0643\u0648\u0646 \u0645\u0631\u062a\u0627\u062d \u0641\u064a \u0627\u0644\u062a\u0648\u0627\u0635\u0644.'
          },
          {
            title: '\u0645\u0639\u062f\u0644\u0627\u062a \u0646\u062c\u0627\u062d \u062a\u0632\u064a\u062f \u0639\u0646 98%',
            description: '\u0623\u0641\u0636\u0644 \u0645\u0633\u062a\u0634\u0641\u064a\u0627\u062a \u0627\u0644\u0647\u0646\u062f \u062a\u0636\u0627\u0647\u064a \u0623\u0648 \u062a\u062a\u062c\u0627\u0648\u0632 \u0645\u0639\u062f\u0644\u0627\u062a \u0646\u062c\u0627\u062d \u0645\u0633\u062a\u0634\u0641\u064a\u0627\u062a \u0627\u0644\u0643\u0648\u064a\u062a. \u0623\u0643\u062b\u0631 \u0645\u0646 500,000 \u0645\u0631\u064a\u0636 \u062f\u0648\u0644\u064a \u064a\u062a\u0645 \u0639\u0644\u0627\u062c\u0647\u0645 \u0633\u0646\u0648\u064a\u064b\u0627.'
          }
        ]
      },
      costComparison: {
        title: '\u0645\u0642\u0627\u0631\u0646\u0629 \u0627\u0644\u062a\u0643\u0627\u0644\u064a\u0641: \u0627\u0644\u0643\u0648\u064a\u062a \u0645\u0642\u0627\u0628\u0644 \u0627\u0644\u0647\u0646\u062f (\u062f\u064a\u0646\u0627\u0631 \u0643\u0648\u064a\u062a\u064a)',
        tableHeaders: {
          treatment: '\u0627\u0644\u0639\u0644\u0627\u062c',
          localCost: '\u062a\u0643\u0644\u0641\u0629 \u0627\u0644\u0643\u0648\u064a\u062a',
          indiaCost: '\u062a\u0643\u0644\u0641\u0629 \u0627\u0644\u0647\u0646\u062f',
          savings: '\u062a\u0648\u0641\u064a\u0631\u0643'
        },
        treatments: [
          { name: '\u062c\u0631\u0627\u062d\u0629 \u0627\u0644\u0642\u0644\u0628 \u0627\u0644\u0645\u0641\u062a\u0648\u062d (CABG)', local: '12,000 \u062f\u064a\u0646\u0627\u0631', india: '2,500 \u062f\u064a\u0646\u0627\u0631', save: '9,500 \u062f\u064a\u0646\u0627\u0631 (79%)' },
          { name: '\u0627\u0633\u062a\u0628\u062f\u0627\u0644 \u0635\u0645\u0627\u0645 \u0627\u0644\u0642\u0644\u0628', local: '13,500 \u062f\u064a\u0646\u0627\u0631', india: '2,800 \u062f\u064a\u0646\u0627\u0631', save: '10,700 \u062f\u064a\u0646\u0627\u0631 (79%)' },
          { name: '\u0627\u0633\u062a\u0628\u062f\u0627\u0644 \u0627\u0644\u0631\u0643\u0628\u0629 \u0627\u0644\u0643\u0627\u0645\u0644', local: '6,000 \u062f\u064a\u0646\u0627\u0631', india: '1,200 \u062f\u064a\u0646\u0627\u0631', save: '4,800 \u062f\u064a\u0646\u0627\u0631 (80%)' },
          { name: '\u0639\u0644\u0627\u062c \u0623\u0637\u0641\u0627\u0644 \u0627\u0644\u0623\u0646\u0627\u0628\u064a\u0628 (\u062f\u0648\u0631\u0629 \u0648\u0627\u062d\u062f\u0629)', local: '4,000 \u062f\u064a\u0646\u0627\u0631', india: '800 \u062f\u064a\u0646\u0627\u0631', save: '3,200 \u062f\u064a\u0646\u0627\u0631 (80%)' },
          { name: '\u062c\u0631\u0627\u062d\u0629 \u062f\u0645\u062c \u0627\u0644\u0639\u0645\u0648\u062f \u0627\u0644\u0641\u0642\u0631\u064a', local: '9,000 \u062f\u064a\u0646\u0627\u0631', india: '2,000 \u062f\u064a\u0646\u0627\u0631', save: '7,000 \u062f\u064a\u0646\u0627\u0631 (78%)' },
          { name: '\u0632\u0631\u0627\u0639\u0629 \u0627\u0644\u0643\u0628\u062f', local: '45,000 \u062f\u064a\u0646\u0627\u0631', india: '10,000 \u062f\u064a\u0646\u0627\u0631', save: '35,000 \u062f\u064a\u0646\u0627\u0631 (78%)' },
          { name: '\u0627\u0633\u062a\u0628\u062f\u0627\u0644 \u0627\u0644\u0648\u0631\u0643', local: '7,000 \u062f\u064a\u0646\u0627\u0631', india: '1,500 \u062f\u064a\u0646\u0627\u0631', save: '5,500 \u062f\u064a\u0646\u0627\u0631 (79%)' },
          { name: '\u0632\u0631\u0627\u0639\u0629 \u0627\u0644\u0623\u0633\u0646\u0627\u0646 (\u0641\u0645 \u0643\u0627\u0645\u0644)', local: '5,000 \u062f\u064a\u0646\u0627\u0631', india: '1,000 \u062f\u064a\u0646\u0627\u0631', save: '4,000 \u062f\u064a\u0646\u0627\u0631 (80%)' },
          { name: '\u062c\u0631\u0627\u062d\u0629 \u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0645\u0639\u062f\u0629', local: '6,500 \u062f\u064a\u0646\u0627\u0631', india: '1,500 \u062f\u064a\u0646\u0627\u0631', save: '5,000 \u062f\u064a\u0646\u0627\u0631 (77%)' },
          { name: '\u0632\u0631\u0627\u0639\u0629 \u0627\u0644\u0643\u0644\u0649', local: '33,000 \u062f\u064a\u0646\u0627\u0631', india: '7,500 \u062f\u064a\u0646\u0627\u0631', save: '25,500 \u062f\u064a\u0646\u0627\u0631 (77%)' }
        ],
        note: '*\u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u062a\u0634\u0645\u0644 \u0627\u0644\u0625\u0642\u0627\u0645\u0629 \u0641\u064a \u0627\u0644\u0645\u0633\u062a\u0634\u0641\u0649 \u0648\u0631\u0633\u0648\u0645 \u0627\u0644\u062c\u0631\u0627\u062d \u0648\u0627\u0644\u0623\u062f\u0648\u064a\u0629 \u0648\u0627\u0644\u0631\u0639\u0627\u064a\u0629 \u0628\u0639\u062f \u0627\u0644\u0639\u0645\u0644\u064a\u0629. \u0627\u0644\u0631\u062d\u0644\u0627\u062a \u0648\u0627\u0644\u0625\u0642\u0627\u0645\u0629 \u0625\u0636\u0627\u0641\u064a\u0629. 1 \u062f\u064a\u0646\u0627\u0631 \u0643\u0648\u064a\u062a\u064a \u2248 3.26 \u062f\u0648\u0644\u0627\u0631.'
      },
      popularTreatments: {
        title: '\u0623\u0643\u062b\u0631 \u0627\u0644\u0639\u0644\u0627\u062c\u0627\u062a \u0634\u064a\u0648\u0639\u064b\u0627 \u0644\u0645\u0631\u0636\u0649 \u0627\u0644\u0643\u0648\u064a\u062a',
        treatments: [
          { name: '\u062c\u0631\u0627\u062d\u0629 \u0627\u0644\u0642\u0644\u0628', description: '\u062c\u0631\u0627\u062d\u0629 \u0627\u0644\u0642\u0644\u0628 \u0627\u0644\u0645\u0641\u062a\u0648\u062d\u060c \u0627\u0633\u062a\u0628\u062f\u0627\u0644 \u0627\u0644\u0635\u0645\u0627\u0645\u060c \u0642\u0633\u0637\u0631\u0629 \u0628\u0645\u0639\u062f\u0644\u0627\u062a \u0646\u062c\u0627\u062d +98%', icon: 'heart' },
          { name: '\u0623\u0637\u0641\u0627\u0644 \u0627\u0644\u0623\u0646\u0627\u0628\u064a\u0628 \u0648\u0627\u0644\u062e\u0635\u0648\u0628\u0629', description: '\u0623\u0637\u0641\u0627\u0644 \u0627\u0644\u0623\u0646\u0627\u0628\u064a\u0628 \u0627\u0644\u0645\u062a\u0642\u062f\u0645\u060c \u0627\u0644\u062d\u0642\u0646 \u0627\u0644\u0645\u062c\u0647\u0631\u064a\u060c \u062a\u062c\u0645\u064a\u062f \u0627\u0644\u0628\u0648\u064a\u0636\u0627\u062a', icon: 'baby' },
          { name: '\u062c\u0631\u0627\u062d\u0629 \u0627\u0644\u0639\u0638\u0627\u0645', description: '\u0627\u0633\u062a\u0628\u062f\u0627\u0644 \u0627\u0644\u0631\u0643\u0628\u0629 \u0648\u0627\u0644\u0648\u0631\u0643\u060c \u062c\u0631\u0627\u062d\u0629 \u0627\u0644\u0639\u0645\u0648\u062f \u0627\u0644\u0641\u0642\u0631\u064a', icon: 'bone' },
          { name: '\u0639\u0644\u0627\u062c \u0627\u0644\u0633\u0631\u0637\u0627\u0646', description: '\u0639\u0644\u0627\u062c \u0643\u064a\u0645\u064a\u0627\u0626\u064a\u060c \u0625\u0634\u0639\u0627\u0639\u064a\u060c \u062c\u0631\u0627\u062d\u0629 \u0631\u0648\u0628\u0648\u062a\u064a\u0629\u060c \u0639\u0644\u0627\u062c \u0645\u0646\u0627\u0639\u064a', icon: 'syringe' },
          { name: '\u062c\u0631\u0627\u062d\u0629 \u0627\u0644\u0639\u064a\u0648\u0646', description: '\u0644\u064a\u0632\u0643\u060c \u0625\u0639\u062a\u0627\u0645 \u0627\u0644\u0639\u062f\u0633\u0629\u060c \u062c\u0631\u0627\u062d\u0629 \u0627\u0644\u0634\u0628\u0643\u064a\u0629\u060c \u0632\u0631\u0627\u0639\u0629 \u0627\u0644\u0642\u0631\u0646\u064a\u0629', icon: 'eye' },
          { name: '\u062c\u0631\u0627\u062d\u0629 \u0627\u0644\u0623\u0639\u0635\u0627\u0628', description: '\u0623\u0648\u0631\u0627\u0645 \u0627\u0644\u062f\u0645\u0627\u063a\u060c \u062c\u0631\u0627\u062d\u0629 \u0627\u0644\u0639\u0645\u0648\u062f \u0627\u0644\u0641\u0642\u0631\u064a\u060c \u062a\u062d\u0641\u064a\u0632 \u0627\u0644\u062f\u0645\u0627\u063a \u0627\u0644\u0639\u0645\u064a\u0642', icon: 'brain' }
        ]
      },
      patientJourney: {
        title: '\u0631\u062d\u0644\u0629 \u0639\u0644\u0627\u062c\u0643: \u0645\u0646 \u0627\u0644\u0643\u0648\u064a\u062a \u0625\u0644\u0649 \u0627\u0644\u0647\u0646\u062f',
        steps: [
          { step: '1', title: '\u0627\u0633\u062a\u0634\u0627\u0631\u0629 \u0645\u062c\u0627\u0646\u064a\u0629', description: '\u0634\u0627\u0631\u0643 \u062a\u0642\u0627\u0631\u064a\u0631\u0643 \u0627\u0644\u0637\u0628\u064a\u0629 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628. \u0627\u062d\u0635\u0644 \u0639\u0644\u0649 \u062a\u0648\u0635\u064a\u0627\u062a \u0627\u0644\u0623\u0637\u0628\u0627\u0621 \u0648\u062a\u0642\u062f\u064a\u0631 \u0627\u0644\u062a\u0643\u0644\u0641\u0629 \u062e\u0644\u0627\u0644 24 \u0633\u0627\u0639\u0629.' },
          { step: '2', title: '\u062e\u0637\u0629 \u0627\u0644\u0639\u0644\u0627\u062c', description: '\u0627\u062d\u0635\u0644 \u0639\u0644\u0649 \u062e\u0637\u0629 \u0639\u0644\u0627\u062c \u0645\u0641\u0635\u0644\u0629 \u0645\u0639 \u062e\u064a\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u0634\u0641\u064a\u0627\u062a \u0648\u0645\u0644\u0641\u0627\u062a \u0627\u0644\u0623\u0637\u0628\u0627\u0621 \u0648\u0623\u0633\u0639\u0627\u0631 \u0634\u0641\u0627\u0641\u0629 \u0628\u0627\u0644\u062f\u064a\u0646\u0627\u0631 \u0627\u0644\u0643\u0648\u064a\u062a\u064a.' },
          { step: '3', title: '\u0627\u0644\u062a\u0623\u0634\u064a\u0631\u0629 \u0648\u0627\u0644\u0633\u0641\u0631', description: '\u0646\u062a\u0648\u0644\u0649 \u0637\u0644\u0628 \u0627\u0644\u062a\u0623\u0634\u064a\u0631\u0629 \u0627\u0644\u0637\u0628\u064a\u0629 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629 \u0648\u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629 \u0641\u064a \u062d\u062c\u0632 \u0627\u0644\u0631\u062d\u0644\u0627\u062a \u0648\u0627\u0644\u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u064a \u0627\u0644\u0645\u0637\u0627\u0631.' },
          { step: '4', title: '\u062f\u062e\u0648\u0644 \u0627\u0644\u0645\u0633\u062a\u0634\u0641\u0649', description: '\u0645\u0646\u0633\u0642 \u064a\u062a\u062d\u062f\u062b \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u064a\u0633\u062a\u0642\u0628\u0644\u0643. \u062f\u062e\u0648\u0644 VIP \u0645\u0639 \u063a\u0631\u0641\u0629 \u062e\u0627\u0635\u0629 \u0648\u0648\u062c\u0628\u0627\u062a \u062d\u0644\u0627\u0644.' },
          { step: '5', title: '\u0627\u0644\u0639\u0644\u0627\u062c \u0648\u0627\u0644\u062a\u0639\u0627\u0641\u064a', description: '\u0639\u0644\u0627\u062c \u0639\u0627\u0644\u0645\u064a \u0627\u0644\u0645\u0633\u062a\u0648\u0649 \u0645\u0646 \u0623\u0641\u0636\u0644 \u0627\u0644\u0645\u062a\u062e\u0635\u0635\u064a\u0646. \u062f\u0639\u0645 \u0639\u0644\u0649 \u0645\u062f\u0627\u0631 24/7 \u0644\u0643 \u0648\u0644\u0639\u0627\u0626\u0644\u062a\u0643.' },
          { step: '6', title: '\u0627\u0644\u0639\u0648\u062f\u0629 \u0625\u0644\u0649 \u0627\u0644\u0643\u0648\u064a\u062a', description: '\u062e\u0637\u0629 \u0645\u062a\u0627\u0628\u0639\u0629 \u0628\u0639\u062f \u0627\u0644\u0639\u0644\u0627\u062c. \u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a \u0641\u064a\u062f\u064a\u0648 \u0645\u0639 \u0637\u0628\u064a\u0628\u0643 \u0628\u0639\u062f \u0627\u0644\u0639\u0648\u062f\u0629 \u0625\u0644\u0649 \u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0643\u0648\u064a\u062a \u0623\u0648 \u062d\u0648\u0644\u064a \u0623\u0648 \u0627\u0644\u0633\u0627\u0644\u0645\u064a\u0629.' }
        ]
      },
      faq: {
        title: '\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629 - \u0645\u0631\u0636\u0649 \u0627\u0644\u0643\u0648\u064a\u062a',
        questions: [
          {
            q: '\u0634\u0644\u0648\u0646 \u0627\u0644\u0639\u0644\u0627\u062c \u0627\u0644\u0637\u0628\u064a \u0641\u064a \u0627\u0644\u0647\u0646\u062f \u0648\u0643\u0645 \u064a\u0627\u062e\u0630 \u0648\u0642\u062a\u061f',
            a: '\u0645\u0639\u0638\u0645 \u0627\u0644\u0625\u062c\u0631\u0627\u0621\u0627\u062a \u062a\u0633\u062a\u063a\u0631\u0642 7-21 \u064a\u0648\u0645\u064b\u0627 \u0628\u0645\u0627 \u0641\u064a \u0630\u0644\u0643 \u0627\u0644\u062a\u0639\u0627\u0641\u064a. \u062c\u0631\u0627\u062d\u0629 \u0627\u0644\u0642\u0644\u0628: 10-14 \u064a\u0648\u0645\u064b\u0627\u060c \u0627\u0633\u062a\u0628\u062f\u0627\u0644 \u0627\u0644\u0631\u0643\u0628\u0629: 10-15 \u064a\u0648\u0645\u064b\u0627\u060c \u0623\u0637\u0641\u0627\u0644 \u0627\u0644\u0623\u0646\u0627\u0628\u064a\u0628: 21-28 \u064a\u0648\u0645\u064b\u0627. \u062a\u0642\u062f\u0631 \u062a\u0631\u062c\u0639 \u0627\u0644\u0643\u0648\u064a\u062a \u0628\u0639\u062f \u0645\u0648\u0627\u0641\u0642\u0629 \u0627\u0644\u0637\u0628\u064a\u0628.'
          },
          {
            q: '\u0647\u0644 \u0627\u0644\u0645\u0633\u062a\u0634\u0641\u064a\u0627\u062a \u0627\u0644\u0647\u0646\u062f\u064a\u0629 \u0632\u064a\u0646\u0629 \u0645\u062b\u0644 \u0645\u0633\u062a\u0634\u0641\u064a\u0627\u062a \u0627\u0644\u0643\u0648\u064a\u062a\u061f',
            a: '\u0625\u064a\u0647! \u0623\u0628\u0648\u0644\u0648 \u0648\u0641\u0648\u0631\u062a\u064a\u0633 \u0648\u0645\u0627\u0643\u0633 \u0648\u0645\u0627\u0646\u064a\u0628\u0627\u0644 \u0645\u0639\u062a\u0645\u062f\u0629 \u0645\u0646 JCI \u0628\u0645\u0639\u0627\u064a\u064a\u0631 \u062f\u0648\u0644\u064a\u0629. \u0648\u0627\u064a\u062f \u0645\u0646 \u0627\u0644\u0623\u0637\u0628\u0627\u0621 \u062a\u062f\u0631\u0628\u0648\u0627 \u0641\u064a \u0647\u0627\u0631\u0641\u0627\u0631\u062f \u0648\u062c\u0648\u0646\u0632 \u0647\u0648\u0628\u0643\u0646\u0632 \u0648\u0645\u0627\u064a\u0648 \u0643\u0644\u064a\u0646\u0643.'
          },
          {
            q: '\u0634\u0644\u0648\u0646 \u0623\u062d\u0635\u0644 \u0639\u0644\u0649 \u062a\u0623\u0634\u064a\u0631\u0629 \u0637\u0628\u064a\u0629 \u0645\u0646 \u0627\u0644\u0643\u0648\u064a\u062a\u061f',
            a: '\u0642\u062f\u0645 \u0639\u0628\u0631 \u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a \u0639\u0644\u0649 indianvisaonline.gov.in/evisa. \u0627\u062e\u062a\u0631 \u0627\u0644\u062a\u0623\u0634\u064a\u0631\u0629 \u0627\u0644\u0637\u0628\u064a\u0629 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629. \u0627\u0644\u0645\u0639\u0627\u0644\u062c\u0629 \u062a\u0627\u062e\u0630 3-5 \u0623\u064a\u0627\u0645 \u0639\u0645\u0644. \u0646\u0648\u0641\u0631 \u0645\u0633\u0627\u0639\u062f\u0629 \u0643\u0627\u0645\u0644\u0629 \u0641\u064a \u0627\u0644\u062a\u0623\u0634\u064a\u0631\u0629.'
          },
          {
            q: '\u064a\u0642\u062f\u0631 \u0623\u0647\u0644\u064a \u064a\u064a\u0648\u0646 \u0645\u0639\u0627\u064a \u0645\u0646 \u0627\u0644\u0643\u0648\u064a\u062a\u061f',
            a: '\u0625\u064a\u0647! \u0627\u0644\u062a\u0623\u0634\u064a\u0631\u0629 \u0627\u0644\u0637\u0628\u064a\u0629 \u062a\u0633\u0645\u062d \u0628\u0645\u0631\u0627\u0641\u0642 \u0648\u0627\u062d\u062f \u0623\u0648 \u0627\u062b\u0646\u064a\u0646. \u0646\u0631\u062a\u0628 \u0627\u0644\u0625\u0642\u0627\u0645\u0629 \u0642\u0631\u064a\u0628 \u0645\u0646 \u0627\u0644\u0645\u0633\u062a\u0634\u0641\u0649 (10-30 \u062f\u064a\u0646\u0627\u0631/\u0644\u064a\u0644\u0629). \u0627\u0644\u0639\u0627\u0626\u0644\u0629 \u062a\u0642\u062f\u0631 \u062a\u0628\u0642\u0649 \u0645\u0639\u0627\u0643 \u0648\u0642\u062a \u0627\u0644\u062a\u0639\u0627\u0641\u064a.'
          },
          {
            q: '\u0647\u0644 \u062a\u0623\u0645\u064a\u0646 \u0627\u0644\u0643\u0648\u064a\u062a \u0627\u0644\u062d\u0643\u0648\u0645\u064a \u064a\u063a\u0637\u064a \u0627\u0644\u0639\u0644\u0627\u062c \u0641\u064a \u0627\u0644\u0647\u0646\u062f\u061f',
            a: '\u0628\u0639\u0636 \u0628\u0631\u0627\u0645\u062c \u0627\u0644\u062d\u0643\u0648\u0645\u0629 \u0627\u0644\u0643\u0648\u064a\u062a\u064a\u0629 \u0648\u062e\u0637\u0637 \u0627\u0644\u062a\u0623\u0645\u064a\u0646 \u0627\u0644\u062e\u0627\u0635\u0629 \u062a\u063a\u0637\u064a \u0627\u0644\u0639\u0644\u0627\u062c \u0641\u064a \u0645\u0633\u062a\u0634\u0641\u064a\u0627\u062a \u0645\u0639\u062a\u0645\u062f\u0629 \u062f\u0648\u0644\u064a\u064b\u0627. \u062a\u0627\u0643\u062f \u0645\u0639 \u0634\u0631\u0643\u0629 \u0627\u0644\u062a\u0623\u0645\u064a\u0646 \u0623\u0648 \u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u0635\u062d\u0629. \u0646\u0648\u0641\u0631 \u0643\u0644 \u0627\u0644\u0645\u0633\u062a\u0646\u062f\u0627\u062a \u0627\u0644\u0644\u0627\u0632\u0645\u0629.'
          },
          {
            q: '\u0634\u0648 \u0628\u062e\u0635\u0648\u0635 \u0627\u0644\u0623\u0643\u0644 \u0627\u0644\u062d\u0644\u0627\u0644 \u0648\u0623\u0645\u0627\u0643\u0646 \u0627\u0644\u0635\u0644\u0627\u0629\u061f',
            a: '\u0643\u0644 \u0627\u0644\u0645\u0633\u062a\u0634\u0641\u064a\u0627\u062a \u0627\u0644\u0643\u0628\u064a\u0631\u0629 \u062a\u0648\u0641\u0631 \u0648\u062c\u0628\u0627\u062a \u062d\u0644\u0627\u0644. \u063a\u0631\u0641 \u0627\u0644\u0635\u0644\u0627\u0629 \u0645\u062a\u0648\u0641\u0631\u0629. \u0648\u0627\u064a\u062f \u0645\u0633\u062a\u0634\u0641\u064a\u0627\u062a \u0641\u064a \u0645\u0648\u0645\u0628\u0627\u064a \u0648\u062f\u0644\u0647\u064a \u0639\u0646\u062f\u0647\u0627 \u0623\u062c\u0646\u062d\u0629 \u062e\u0627\u0635\u0629 \u0644\u0645\u0631\u0636\u0649 \u0627\u0644\u062e\u0644\u064a\u062c.'
          },
          {
            q: '\u0643\u0645 \u0641\u0644\u0648\u0633 \u0644\u0627\u0632\u0645 \u0623\u062c\u064a\u0628 \u0645\u0639\u0627\u064a \u0645\u0646 \u0627\u0644\u0643\u0648\u064a\u062a\u061f',
            a: '\u0645\u0639\u0638\u0645 \u0627\u0644\u062a\u0643\u0627\u0644\u064a\u0641 \u062a\u062f\u0641\u0639 \u0645\u0642\u062f\u0645\u064b\u0627 \u0639\u0628\u0631 \u062a\u062d\u0648\u064a\u0644 \u0628\u0646\u0643\u064a. \u062c\u064a\u0628 \u0645\u0639\u0627\u0643 150-400 \u062f\u064a\u0646\u0627\u0631 \u0644\u0644\u0645\u0635\u0627\u0631\u064a\u0641 \u0627\u0644\u064a\u0648\u0645\u064a\u0629. \u0646\u0642\u0628\u0644 \u0628\u0637\u0627\u0642\u0627\u062a \u0627\u0644\u0627\u0626\u062a\u0645\u0627\u0646 \u0627\u0644\u062f\u0648\u0644\u064a\u0629 \u0648\u0627\u0644\u062a\u062d\u0648\u064a\u0644\u0627\u062a \u0627\u0644\u0628\u0646\u0643\u064a\u0629.'
          },
          {
            q: '\u0634\u0648 \u0623\u0641\u0636\u0644 \u0627\u0644\u0645\u062f\u0646 \u0627\u0644\u0647\u0646\u062f\u064a\u0629 \u0644\u0644\u0645\u0631\u0636\u0649 \u0627\u0644\u0643\u0648\u064a\u062a\u064a\u064a\u0646\u061f',
            a: '\u0645\u0648\u0645\u0628\u0627\u064a \u0648\u062f\u0644\u0647\u064a \u0647\u0645 \u0627\u0644\u0623\u0641\u0636\u0644 \u0645\u0639 \u0631\u062d\u0644\u0627\u062a \u0645\u0628\u0627\u0634\u0631\u0629 \u0645\u062a\u0639\u062f\u062f\u0629 \u0645\u0646 \u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0643\u0648\u064a\u062a. \u0628\u0646\u063a\u0627\u0644\u0648\u0631 \u0648\u062a\u0634\u064a\u0646\u0627\u064a \u0632\u064a\u0646\u064a\u0646 \u0628\u0639\u062f \u0644\u0644\u0639\u0644\u0627\u062c\u0627\u062a \u0627\u0644\u0645\u062a\u062e\u0635\u0635\u0629. \u0643\u0644\u0647\u0645 \u0639\u0646\u062f\u0647\u0645 \u0637\u0627\u0642\u0645 \u064a\u062a\u062d\u062f\u062b \u0627\u0644\u0639\u0631\u0628\u064a\u0629.'
          }
        ]
      },
      finalCta: {
        title: '\u062c\u0627\u0647\u0632 \u062a\u0648\u0641\u0631 70-80% \u0639\u0644\u0649 \u0639\u0644\u0627\u062c\u0643 \u0627\u0644\u0637\u0628\u064a\u061f',
        subtitle: '\u0627\u0646\u0636\u0645 \u0625\u0644\u0649 \u0622\u0644\u0627\u0641 \u0627\u0644\u0645\u0631\u0636\u0649 \u0627\u0644\u0643\u0648\u064a\u062a\u064a\u064a\u0646 \u0627\u0644\u0644\u064a \u063a\u064a\u0631\u0648\u0627 \u0635\u062d\u062a\u0647\u0645 \u0648\u0648\u0641\u0631\u0648\u0627 \u0641\u0644\u0648\u0633\u0647\u0645 \u0645\u0639 \u0623\u0641\u0636\u0644 \u0645\u0633\u062a\u0634\u0641\u064a\u0627\u062a \u0627\u0644\u0647\u0646\u062f',
        cta1: '\u0627\u062d\u0635\u0644 \u0639\u0644\u0649 \u0627\u0633\u062a\u0634\u0627\u0631\u0629 \u0645\u062c\u0627\u0646\u064a\u0629',
        cta2: '\u0648\u0627\u062a\u0633\u0627\u0628',
        note: '\u0627\u0633\u062a\u0634\u0627\u0631\u0629 \u0645\u062c\u0627\u0646\u064a\u0629 \u2022 \u0628\u062f\u0648\u0646 \u0627\u0644\u062a\u0632\u0627\u0645 \u2022 \u0631\u062f \u062e\u0644\u0627\u0644 \u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629'
      }
    }
  };

  const safeLocale = (locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  const currentContent = content[safeLocale];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.en.faq.questions.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://shifaalhind.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'For Kuwait Patients',
        item: 'https://shifaalhind.com/for-kuwait-patients',
      },
    ],
  };

  const treatmentIcons: Record<string, React.ReactNode> = {
    heart: <Heart className="w-8 h-8 text-emerald-600" />,
    baby: <Baby className="w-8 h-8 text-emerald-600" />,
    bone: <Bone className="w-8 h-8 text-emerald-600" />,
    syringe: <Syringe className="w-8 h-8 text-emerald-600" />,
    eye: <Eye className="w-8 h-8 text-emerald-600" />,
    brain: <Brain className="w-8 h-8 text-emerald-600" />,
  };

  return (
    <div className="min-h-screen">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {currentContent.hero.title}
            </h1>
            <p className="text-xl mb-8">
              {currentContent.hero.subtitle}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href={`/${locale}/booking`}>
                <Button size="lg" variant="secondary">
                  {currentContent.hero.cta1}
                </Button>
              </Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="inline-flex">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-emerald-600">
                  <Phone className="w-5 h-5 mr-2" />
                  {currentContent.hero.cta2}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Kuwait Patients Choose India */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {currentContent.whyChoose.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentContent.whyChoose.reasons.map((reason, index) => {
              const icons = [DollarSign, Shield, Plane, Clock, Users, Heart];
              const Icon = icons[index];
              return (
                <Card key={index} className="p-6">
                  <Icon className="w-12 h-12 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line">
                    {reason.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {currentContent.costComparison.title}
          </h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow">
              <thead className="bg-emerald-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">{currentContent.costComparison.tableHeaders.treatment}</th>
                  <th className="px-6 py-4 text-right">{currentContent.costComparison.tableHeaders.localCost}</th>
                  <th className="px-6 py-4 text-right">{currentContent.costComparison.tableHeaders.indiaCost}</th>
                  <th className="px-6 py-4 text-right">{currentContent.costComparison.tableHeaders.savings}</th>
                </tr>
              </thead>
              <tbody>
                {currentContent.costComparison.treatments.map((treatment, index) => (
                  <tr key={index} className={index % 2 === 1 ? 'border-b bg-gray-50' : 'border-b'}>
                    <td className="px-6 py-4 font-medium">{treatment.name}</td>
                    <td className="px-6 py-4 text-right">{treatment.local}</td>
                    <td className="px-6 py-4 text-right text-emerald-600 font-semibold">{treatment.india}</td>
                    <td className="px-6 py-4 text-right text-emerald-600 font-bold">{treatment.save}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center mt-6 text-gray-600">
            {currentContent.costComparison.note}
          </p>
        </div>
      </section>

      {/* Popular Treatments */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {currentContent.popularTreatments.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentContent.popularTreatments.treatments.map((treatment, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {treatmentIcons[treatment.icon]}
                </div>
                <h3 className="text-xl font-semibold mb-3">{treatment.name}</h3>
                <p className="text-gray-600">{treatment.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Journey */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {currentContent.patientJourney.title}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {currentContent.patientJourney.steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GCC Trust Signals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <GCCTrustBadges country="kuwait" locale={safeLocale} />
          <InsurancePartners country="kuwait" locale={safeLocale} />
          <GovernmentPartnership country="kuwait" locale={safeLocale} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {currentContent.faq.title}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {currentContent.faq.questions.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600">
                  {faq.a}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* LocalBusiness Schema */}
      <LocalBusinessSchema
        country="Kuwait"
        countryCode="KW"
        phone="+919876543210"
        currency="KWD"
      />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {currentContent.finalCta.title}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {currentContent.finalCta.subtitle}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href={`/${locale}/booking`}>
              <Button size="lg" variant="secondary">
                {currentContent.finalCta.cta1}
              </Button>
            </Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="inline-flex">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-emerald-600">
                <Phone className="w-5 h-5 mr-2" />
                {currentContent.finalCta.cta2}
              </Button>
            </a>
          </div>
          <p className="mt-6 text-emerald-100">
            {currentContent.finalCta.note}
          </p>
        </div>
      </section>
    </div>
  );
}

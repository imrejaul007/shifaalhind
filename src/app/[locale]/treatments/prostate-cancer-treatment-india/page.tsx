import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Prostate Cancer Treatment in India 2025: Cost, Best Hospitals, Success Rate',
  description: 'Prostate cancer treatment in India. Radical prostatectomy $5,000-8,000, save 70-85% vs USA. 85-95% success rate.',
  keywords: ['prostate cancer treatment india', 'prostate cancer surgery india', 'prostate cancer hospital india'],
};

export const dynamic = 'force-dynamic';

export default function ProstateCancerTreatmentIndiaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <FAQSchema faqs={[
        { question: "How much does prostate cancer treatment cost in India?", answer: "Radical prostatectomy: $5,000-8,000 in India vs $25,000-50,000 in USA (70-85% savings). Robotic prostatectomy: $8,000-12,000. Radiation: $5,000-8,000." },
        { question: "What is the success rate for prostate cancer treatment?", answer: "Early-stage (localized): 95-100% 5-year survival. Locally advanced: 85-90% 5-year survival. Metastatic: 30-40% 5-year survival. Treatment success depends on stage, Gleason score, PSA level." },
      ]} />
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Prostate Cancer Treatment in India</h1>
        <p className="text-xl text-gray-600 mb-6">Robotic prostatectomy $8,000-12,000, save 70-85% vs USA. 85-95% success rate.</p>
        <Button asChild size="lg"><Link href="/booking">Get Free Consultation</Link></Button>
      </div>
      <Card className="bg-green-50">
        <CardContent className="pt-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready for Prostate Cancer Treatment in India?</h2>
          <Button asChild size="lg"><Link href="/booking">Book Consultation</Link></Button>
        </CardContent>
      </Card>
    </div>
  );
}

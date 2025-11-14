import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hysterectomy Surgery in India 2025: Cost, Best Hospitals, Recovery',
  description: 'Hysterectomy in India. Laparoscopic $2,500-4,000, save 75-85% vs USA. 2-6 weeks recovery.',
  keywords: ['hysterectomy surgery india', 'hysterectomy cost india', 'uterus removal india'],
};

export const dynamic = 'force-dynamic';

export default function HysterectomySurgeryIndiaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <FAQSchema faqs={[
        { question: "How much does hysterectomy cost in India?", answer: "Laparoscopic hysterectomy: $2,500-4,000 in India vs $20,000-35,000 in USA (75-85% savings). Abdominal: $2,000-3,500, Vaginal: $1,800-3,000, Robotic: $3,500-5,500." },
        { question: "How long is recovery after hysterectomy?", answer: "Laparoscopic/Robotic: 2-4 weeks. Abdominal: 6-8 weeks. Hospital stay: 1-4 days. Return to work: 2-6 weeks." },
      ]} />
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Hysterectomy Surgery in India</h1>
        <p className="text-xl text-gray-600 mb-6">Laparoscopic hysterectomy $2,500-4,000, save 75-85% vs USA. 2-6 weeks recovery.</p>
        <Button asChild size="lg"><Link href="/booking">Get Free Consultation</Link></Button>
      </div>
      <Card className="bg-green-50">
        <CardContent className="pt-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready for Hysterectomy in India?</h2>
          <Button asChild size="lg"><Link href="/booking">Book Consultation</Link></Button>
        </CardContent>
      </Card>
    </div>
  );
}

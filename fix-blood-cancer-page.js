const fs = require('fs');
const path = require('path');

// Recreate blood-cancer-treatment-india page properly
const treatment = {
  slug: 'blood-cancer-treatment-india',
  name: 'Blood Cancer Treatment',
  title: 'Blood Cancer Treatment India: Cost, Best Hospitals & Success Rate 2025',
  description: 'Blood cancer treatment in India costs 70-85% less than USA. Leukemia, Lymphoma, Myeloma. Top oncology centers, 60-85% success. Chemotherapy, BMT, targeted therapy.',
  keywords: 'blood cancer treatment india, leukemia treatment india, lymphoma treatment india, blood cancer cost india',
  heroTitle: 'Blood Cancer Treatment in India',
  heroSubtitle: 'Comprehensive Oncology Care at Fraction of Cost',
  costRange: '$1,500 - $45,000',
  duration: 'Varies',
  successRate: '60-85%'
};

const details = {
  procedures: [
    { name: 'Chemotherapy (per cycle)', india: '$1,500 - $3,000', usa: '$10,000 - $30,000', uk: '£8,000 - £25,000', uae: 'AED 35,000 - 100,000' },
    { name: 'Bone Marrow Transplant', india: '$25,000 - $45,000', usa: '$300,000 - $500,000', uk: '£250,000 - £400,000', uae: 'AED 350,000 - 550,000' },
    { name: 'Targeted Therapy', india: '$5,000 - $12,000', usa: '$50,000 - $150,000', uk: '£40,000 - £120,000', uae: 'AED 60,000 - 180,000' },
    { name: 'Immunotherapy', india: '$8,000 - $15,000', usa: '$80,000 - $200,000', uk: '£65,000 - £160,000', uae: 'AED 90,000 - 220,000' },
  ],
  hospitals: [
    { name: 'Tata Memorial Hospital', city: 'Mumbai', procedures: '15,000+ blood cancer patients annually', features: ['Asia&apos;s largest cancer center', 'Government-subsidized', 'CAR-T cell therapy'], cost: '$20,000 - $40,000', rating: '4.8/5' },
    { name: 'Apollo Cancer Centre', city: 'Chennai', procedures: '1,500+ BMT annually', features: ['Haploidentical BMT', 'Pediatric blood cancer', 'International accredited'], cost: '$28,000 - $50,000', rating: '4.8/5' },
    { name: 'Fortis Memorial', city: 'Gurgaon', procedures: '1,200+ blood cancer cases', features: ['Advanced BMT unit', 'Flow cytometry', 'Clinical trials'], cost: '$25,000 - $45,000', rating: '4.7/5' },
  ],
  faqs: [
    { q: 'What is success rate?', a: 'Acute Lymphoblastic Leukemia (ALL): 80-90% in children, 40-50% in adults. Acute Myeloid Leukemia (AML): 60-70% complete remission. Hodgkin Lymphoma: 80-85% cure rate. Non-Hodgkin Lymphoma: 60-75%. Multiple Myeloma: 75-85% response rate with novel therapies.' },
    { q: 'How long is treatment?', a: 'Chemotherapy: 4-8 cycles over 3-6 months. BMT: Hospital stay 4-6 weeks, recovery 3-6 months. Maintenance therapy: 1-2 years for some types. Total treatment duration: 1-3 years depending on cancer type and stage.' },
    { q: 'Is BMT necessary?', a: 'Not always. BMT needed for: High-risk leukemia, Relapsed disease, Certain aggressive lymphomas. NOT needed for: Early-stage Hodgkin, Some indolent lymphomas, Elderly patients over 70. Your oncologist will determine based on disease subtype, risk factors, and molecular markers.' },
    { q: 'What are side effects?', a: 'Chemotherapy: Nausea, hair loss, low blood counts, infection risk. BMT: Graft-versus-host disease, infections, organ toxicity. Targeted therapy: Rash, diarrhea, liver issues (generally milder than chemo). Most side effects are manageable with supportive care. Indian hospitals excel at supportive care.' },
  ],
};

const dirPath = path.join('src', 'app', '[locale]', 'treatments', treatment.slug);
fs.mkdirSync(dirPath, { recursive: true });

const procedureRows = details.procedures.map(p => `                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">${p.name}</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-600">${p.india}</td>
                    <td className="px-4 py-3 text-center text-gray-600">${p.usa}</td>
                    <td className="px-4 py-3 text-center text-gray-600">${p.uk}</td>
                    <td className="px-4 py-3 text-center text-gray-600">${p.uae}</td>
                  </tr>`).join('\n');

const hospitalCards = details.hospitals.map((h, i) => `            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">${i+1}. ${h.name}</h3>
                      <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-semibold text-green-700">${h.rating}</span>
                      </div>
                    </div>
                    <p className="mb-3 text-gray-600">${h.city} | ${h.procedures}</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      ${h.features.map(f => `<span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">${f}</span>`).join('\n                      ')}
                    </div>
                    <p className="text-sm font-semibold text-primary-600">Cost: ${h.cost}</p>
                  </div>
                </div>
              </CardContent>
            </Card>`).join('\n');

const faqSchema = details.faqs.map(f => `{"question":"${f.q.replace(/"/g, '\\"')}","answer":"${f.a.replace(/"/g, '\\"')}"}`).join(',');

const faqCards = details.faqs.map(f => `            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">${f.q}</h3>
                <p className="text-gray-700">${f.a}</p>
              </CardContent>
            </Card>`).join('\n');

const content = `import { Metadata } from 'next';
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
  title: '${treatment.title}',
  description: '${treatment.description}',
  keywords: '${treatment.keywords}',
};

const RELATED_ARTICLES = [
  { title: "Medical Visa India Guide", href: "/blog/medical-visa-india-complete-guide", description: "Complete visa process guide" },
  { title: "Best Hospitals Mumbai", href: "/blog/best-hospitals-mumbai-medical-tourism", description: "Top 10 JCI-accredited hospitals" },
  { title: "Medical Tourism Guide", href: "/blog/medical-tourism-uae-patients-guide", description: "Complete guide for GCC patients" }
];

export default function BloodCancerTreatmentIndiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-12 text-white md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">${treatment.heroTitle}</h1>
            <p className="mb-6 text-xl text-primary-50">${treatment.heroSubtitle}</p>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2"><DollarSign className="h-5 w-5" /><span>${treatment.costRange}</span></div>
              <div className="flex items-center gap-2"><Clock className="h-5 w-5" /><span>${treatment.duration}</span></div>
              <div className="flex items-center gap-2"><Heart className="h-5 w-5" /><span>${treatment.successRate} success</span></div>
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
          <p className="mb-8 text-center text-lg text-gray-600">Save 70-85% with same quality care</p>
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
${procedureRows}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Top Hospitals */}
      <section className="container px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">Top 3 Hospitals for Blood Cancer Treatment</h2>
          <div className="space-y-4">
${hospitalCards}
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={[${faqSchema}]} />

      {/* FAQ Section */}
      <section className="container px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
${faqCards}
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
        <SocialShare title="${treatment.title}" description="${treatment.description}" />
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

fs.writeFileSync(path.join(dirPath, 'page.tsx'), content);
console.log('✅ Recreated blood-cancer-treatment-india/page.tsx');

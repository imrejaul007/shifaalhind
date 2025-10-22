import { Metadata } from 'next';
import BlogArticleLayout from '@/components/blog/blog-article-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'IVF & Fertility Treatment in India: Complete 2025 Guide for GCC Patients',
  description: 'Complete guide to IVF and fertility treatment in India. Cost comparison, success rates by age, top clinics, real patient stories, and complete timeline for 2025.',
  keywords: ['IVF cost India', 'fertility treatment India', 'IVF India vs UAE', 'IVF success rates India', 'IVF India for UAE patients', 'affordable IVF treatment'],
};

export const dynamic = 'force-dynamic';

export default function IVFFertilityGuide() {
  return (
    <BlogArticleLayout
      title="IVF & Fertility Treatment in India: Complete 2025 Guide"
      excerpt="Save 50-70% on IVF. Complete guide with costs, success rates, top clinics, and real patient stories."
      author="Shifa AlHind Fertility Team"
      publishedDate="January 2025"
      lastUpdated="January 2025"
      readTime="15 min"
    >
      <section className="mb-8">
        <p className="text-lg">IVF in GCC countries costs $10,000-$20,000+ per cycle. India offers the same quality at $3,500-$6,000, with success rates of 55-65% for patients under 35. Over 15,000 international couples choose India annually.</p>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">IVF Cost Comparison (2025)</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card><CardHeader><CardTitle>Standard IVF</CardTitle></CardHeader><CardContent><div className="space-y-2"><p><strong>India:</strong> $3,500-$5,000</p><p><strong>UAE:</strong> $10,000</p><p><strong>USA:</strong> $15,000</p><p className="font-semibold text-accent-600">Save 60-75%</p></div></CardContent></Card>
          <Card><CardHeader><CardTitle>IVF with ICSI</CardTitle></CardHeader><CardContent><div className="space-y-2"><p><strong>India:</strong> $4,500-$6,000</p><p><strong>UAE:</strong> $12,000</p><p><strong>USA:</strong> $18,000</p><p className="font-semibold text-accent-600">Save 63%</p></div></CardContent></Card>
          <Card><CardHeader><CardTitle>Egg Donation IVF</CardTitle></CardHeader><CardContent><div className="space-y-2"><p><strong>India:</strong> $6,000-$8,000</p><p><strong>UAE:</strong> $15,000</p><p><strong>USA:</strong> $30,000</p><p className="font-semibold text-accent-600">Save 63-78%</p></div></CardContent></Card>
          <Card><CardHeader><CardTitle>Frozen Embryo Transfer</CardTitle></CardHeader><CardContent><div className="space-y-2"><p><strong>India:</strong> $1,500-$2,500</p><p><strong>UAE:</strong> $4,500</p><p><strong>USA:</strong> $6,000</p><p className="font-semibold text-accent-600">Save 64-73%</p></div></CardContent></Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Success Rates by Age</h2>
        <Card className="bg-accent-50"><CardContent className="p-6">
          <table className="w-full bg-white"><thead className="bg-primary-500 text-white"><tr><th className="p-3 text-left">Age</th><th className="p-3 text-left">India</th><th className="p-3 text-left">USA</th><th className="p-3 text-left">UAE</th></tr></thead><tbody>
            <tr className="border-b"><td className="p-3">Under 35</td><td className="p-3 font-semibold text-primary-600">55-65%</td><td className="p-3">50-60%</td><td className="p-3">48-58%</td></tr>
            <tr className="border-b"><td className="p-3">35-37</td><td className="p-3 font-semibold text-primary-600">45-55%</td><td className="p-3">40-50%</td><td className="p-3">38-48%</td></tr>
            <tr className="border-b"><td className="p-3">38-40</td><td className="p-3 font-semibold text-primary-600">35-45%</td><td className="p-3">30-40%</td><td className="p-3">28-38%</td></tr>
            <tr className="border-b"><td className="p-3">41-42</td><td className="p-3 font-semibold text-primary-600">25-35%</td><td className="p-3">20-30%</td><td className="p-3">18-28%</td></tr>
            <tr><td className="p-3">Over 42</td><td className="p-3 font-semibold text-primary-600">15-25%</td><td className="p-3">10-20%</td><td className="p-3">8-18%</td></tr>
          </tbody></table>
        </CardContent></Card>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Top Fertility Clinics</h2>
        <div className="space-y-6">
          <Card><CardHeader><CardTitle>1. Nova IVF Fertility</CardTitle></CardHeader><CardContent><p><strong>Locations:</strong> 65+ centers | <strong>Success:</strong> 60% (under 35) | <strong>Cost:</strong> $4,000-$5,500<br/>Part of Virtus Health Australia. International protocols.</p></CardContent></Card>
          <Card><CardHeader><CardTitle>2. Manipal Fertility</CardTitle></CardHeader><CardContent><p><strong>Location:</strong> Bangalore | <strong>Success:</strong> 65% (highest in India) | <strong>Cost:</strong> $4,500-$6,500<br/>CAP-accredited lab. Best for complex cases.</p></CardContent></Card>
          <Card><CardHeader><CardTitle>3. Cloudnine Fertility</CardTitle></CardHeader><CardContent><p><strong>Locations:</strong> 12 centers | <strong>Success:</strong> 62% | <strong>Cost:</strong> $4,200-$6,000<br/>Time-lapse imaging. Excellent for PCOS.</p></CardContent></Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Real Success Stories</h2>
        <Card className="border-primary-200 bg-primary-50 mb-6"><CardHeader><CardTitle>Fatima & Ahmed, Abu Dhabi - Twins!</CardTitle></CardHeader><CardContent><p className="mb-3"><strong>Issue:</strong> PCOS, 2 failed IUI in UAE<br/><strong>Treatment:</strong> IVF+ICSI at Nova Mumbai<br/><strong>Cost:</strong> $8,110 (vs $15,000 UAE)<br/><strong>Result:</strong> Twins + 10 frozen embryos!</p><p className="italic">&quot;Mumbai gave us twins AND frozen embryos for future siblings. Best decision ever!&quot;</p></CardContent></Card>
        <Card className="border-accent-200 bg-accent-50"><CardHeader><CardTitle>Sarah M., Riyadh - Baby Boy at 40</CardTitle></CardHeader><CardContent><p className="mb-3"><strong>Issue:</strong> Low AMH (0.8), 3 failed cycles Saudi<br/><strong>Treatment:</strong> IVF+PGT-A Manipal Bangalore<br/><strong>Cost:</strong> $10,500 (vs $18,000 Saudi)<br/><strong>Result:</strong> Healthy baby boy!</p><p className="italic">&quot;At 40 with low reserves, Bangalore gave me hope and my baby. Forever grateful!&quot;</p></CardContent></Card>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Complete IVF Timeline</h2>
        <div className="space-y-4">
          <Card><CardHeader><CardTitle>Days 1-3: Arrival & Baseline</CardTitle></CardHeader><CardContent><p>Arrive on cycle day 1-3. Baseline scan, meet team, finalize protocol.</p></CardContent></Card>
          <Card><CardHeader><CardTitle>Days 3-12: Stimulation</CardTitle></CardHeader><CardContent><p>Daily injections, 4-6 monitoring scans, trigger when ready.</p></CardContent></Card>
          <Card><CardHeader><CardTitle>Day 14: Egg Retrieval</CardTitle></CardHeader><CardContent><p>20-min procedure under sedation. Same-day recovery.</p></CardContent></Card>
          <Card><CardHeader><CardTitle>Days 15-19: Culture & Transfer</CardTitle></CardHeader><CardContent><p>Embryos cultured 3-5 days. Transfer takes 10 minutes.</p></CardContent></Card>
          <Card><CardHeader><CardTitle>Days 20-32: Pregnancy Test</CardTitle></CardHeader><CardContent><p>2-week wait. Blood test day 28-32. Can fly home after transfer.</p></CardContent></Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">FAQ</h2>
        <div className="space-y-4">
          <Card><CardHeader><CardTitle>How long to stay in India?</CardTitle></CardHeader><CardContent><p>3-4 weeks total. Can fly 2-3 days after transfer or wait for results.</p></CardContent></Card>
          <Card><CardHeader><CardTitle>Same medications as UAE/USA?</CardTitle></CardHeader><CardContent><p>Yes. Gonal-F, Puregon, Menopur from Merck/Organon. FDA/EMA approved.</p></CardContent></Card>
          <Card><CardHeader><CardTitle>Is egg donation legal?</CardTitle></CardHeader><CardContent><p>Yes, for married couples. $6,000-$8,000 vs $25,000-$40,000 USA.</p></CardContent></Card>
          <Card><CardHeader><CardTitle>Can I fly after transfer?</CardTitle></CardHeader><CardContent><p>Yes, next day is fine. Many wait 2-3 days. Short flights (3-4h) are safe.</p></CardContent></Card>
        </div>
      </section>

      <section className="mb-12">
        <Card className="border-primary-200 bg-primary-50"><CardContent className="p-8"><h2 className="mb-4 text-3xl font-bold">Ready to Start?</h2><p className="mb-4 text-lg">Over 15,000 couples choose India annually. Save 50-70% with 55-65% success rates.</p><div className="grid gap-4 md:grid-cols-3"><div className="bg-white p-4 rounded"><p className="text-3xl font-bold text-primary-600">50-70%</p><p>Cost savings</p></div><div className="bg-white p-4 rounded"><p className="text-3xl font-bold text-primary-600">55-65%</p><p>Success under 35</p></div><div className="bg-white p-4 rounded"><p className="text-3xl font-bold text-primary-600">3-4 weeks</p><p>Total time</p></div></div></CardContent></Card>
      </section>
    </BlogArticleLayout>
  );
}

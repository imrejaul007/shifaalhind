import { Metadata } from 'next';
import BlogArticleLayout from '@/components/blog/blog-article-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'How to Choose the Best Hospital in India for Medical Tourism: Complete 2025 Guide',
  description: 'Complete guide to selecting the best hospital in India for medical tourism. JCI accreditation, doctor credentials, success rates, and how to avoid mistakes.',
  keywords: ['best hospitals India medical tourism', 'how to choose hospital India', 'JCI accredited hospitals India', 'hospital selection guide India', 'international patients India'],
};

export const dynamic = 'force-dynamic';

export default function HospitalSelectionGuide() {
  return (
    <BlogArticleLayout
      title="How to Choose the Best Hospital in India for Medical Tourism"
      excerpt="Complete guide to selecting the right hospital. Learn about JCI accreditation, doctor credentials, and red flags to avoid."
      author="Shifa AlHind Medical Team"
      publishedDate="January 2025"
      lastUpdated="January 2025"
      readTime="12 min"
      breadcrumbTitle="Hospital Selection Guide"
    >
      <section className="mb-8">
        <p className="text-lg">With 1,500+ hospitals in India, choosing the right one is critical. This guide helps you select world-class care and avoid costly mistakes.</p>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">10 Essential Selection Criteria</h2>
        <div className="space-y-6">
          <Card><CardHeader><CardTitle>1. JCI Accreditation (Most Important)</CardTitle></CardHeader><CardContent><p><strong>What:</strong> Gold standard - same as Johns Hopkins, Mayo Clinic<br/><strong>Why:</strong> 40% fewer medical errors, better infection control<br/><strong>Verify:</strong> jointcommissioninternational.org</p></CardContent></Card>
          <Card><CardHeader><CardTitle>2. Doctor Credentials</CardTitle></CardHeader><CardContent><p><strong>Look for:</strong> Fellowship training (FRCS UK, FACS USA)<br/><strong>Experience:</strong> 10-15+ years, 300+ procedures/year<br/><strong>Training:</strong> Johns Hopkins, Mayo, Cleveland Clinic</p></CardContent></Card>
          <Card><CardHeader><CardTitle>3. Success Rates & Outcomes</CardTitle></CardHeader><CardContent><p><strong>Benchmarks:</strong> Heart surgery 98%+, Knee 95-98%, IVF 55-65% (under 35)<br/><strong>Ask for:</strong> Age-adjusted, procedure-specific data<br/><strong>Red flag:</strong> Hospital refuses to share data</p></CardContent></Card>
          <Card><CardHeader><CardTitle>4. Hospital Volume</CardTitle></CardHeader><CardContent><p><strong>Cardiac:</strong> 500+ cases/year (ideal 1,000+)<br/><strong>Joint:</strong> 300+ cases/year<br/><strong>IVF:</strong> 1,000+ cycles/year<br/><strong>Why:</strong> High volume = 20-30% lower complications</p></CardContent></Card>
          <Card><CardHeader><CardTitle>5. Technology & Infrastructure</CardTitle></CardHeader><CardContent><p><strong>Must have:</strong> Robotic surgery, 3T MRI, 128-slice CT<br/><strong>Cardiac:</strong> Hybrid OR, ECMO<br/><strong>IVF:</strong> Time-lapse imaging, PGT capabilities</p></CardContent></Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Top JCI Hospital Chains</h2>
        <div className="space-y-6">
          <Card><CardHeader><CardTitle>1. Apollo Hospitals</CardTitle></CardHeader><CardContent><p><strong>Centers:</strong> 70+ hospitals, 12 JCI-accredited<br/><strong>Best for:</strong> Cardiac (15,000+ surgeries), transplants, cancer<br/><strong>Founded:</strong> 1983 (40+ years experience)</p></CardContent></Card>
          <Card><CardHeader><CardTitle>2. Fortis Healthcare</CardTitle></CardHeader><CardContent><p><strong>Centers:</strong> 28 hospitals, 9 JCI-accredited<br/><strong>Best for:</strong> Heart surgery (Asia&apos;s largest cardiac center), neurosurgery<br/><strong>Fortis Escorts:</strong> 12,000+ cardiac surgeries/year</p></CardContent></Card>
          <Card><CardHeader><CardTitle>3. Max Healthcare</CardTitle></CardHeader><CardContent><p><strong>Centers:</strong> 17 hospitals, 14 JCI-accredited<br/><strong>Best for:</strong> Premium care, robotic surgery, CyberKnife cancer<br/><strong>Tech:</strong> Newest facilities, da Vinci robots</p></CardContent></Card>
          <Card><CardHeader><CardTitle>4. Manipal Hospitals</CardTitle></CardHeader><CardContent><p><strong>Centers:</strong> 27 hospitals, 5 JCI-accredited<br/><strong>Best for:</strong> Orthopedics, fertility, transplants<br/><strong>Value:</strong> Excellent quality, moderate pricing</p></CardContent></Card>
          <Card><CardHeader><CardTitle>5. Medanta - The Medicity</CardTitle></CardHeader><CardContent><p><strong>Center:</strong> Gurgaon (Delhi NCR), JCI-accredited<br/><strong>Best for:</strong> Cardiac surgery (10,000+/year), robotic surgery<br/><strong>Founder:</strong> Dr. Naresh Trehan (India&apos;s top cardiac surgeon)</p></CardContent></Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Common Mistakes to Avoid</h2>
        <div className="space-y-6">
          <Card className="border-red-200 bg-red-50"><CardHeader><CardTitle>❌ Choosing Based Only on Price</CardTitle></CardHeader><CardContent><p><strong>Problem:</strong> Cheapest = less experienced doctors, older equipment<br/><strong>Solution:</strong> Focus on value. 20% more cost with 40% better outcomes is worth it.</p></CardContent></Card>
          <Card className="border-red-200 bg-red-50"><CardHeader><CardTitle>❌ Not Verifying Doctor Credentials</CardTitle></CardHeader><CardContent><p><strong>Problem:</strong> Relying on marketing without independent verification<br/><strong>Solution:</strong> Google doctor + specialty, check publications, ask for references</p></CardContent></Card>
          <Card className="border-red-200 bg-red-50"><CardHeader><CardTitle>❌ Ignoring Infection Rates</CardTitle></CardHeader><CardContent><p><strong>Problem:</strong> Not asking about hospital-acquired infections<br/><strong>Solution:</strong> Ask for infection rates (should be &lt;1% surgical sites)</p></CardContent></Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Questions to Ask</h2>
        <Card className="bg-primary-50"><CardContent className="p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div><h3 className="mb-3 font-bold">About Doctor:</h3><ul className="space-y-2 text-sm"><li>• Training and credentials?</li><li>• Years of experience?</li><li>• How many procedures annually?</li><li>• Success rate for my age/condition?</li><li>• Will you personally perform surgery?</li></ul></div>
            <div><h3 className="mb-3 font-bold">About Hospital:</h3><ul className="space-y-2 text-sm"><li>• JCI or NABH accredited?</li><li>• Infection rates?</li><li>• Annual procedure volume?</li><li>• Technology available?</li><li>• 24/7 emergency services?</li></ul></div>
            <div><h3 className="mb-3 font-bold">About Costs:</h3><ul className="space-y-2 text-sm"><li>• Itemized estimate in writing?</li><li>• What&apos;s included/excluded?</li><li>• What if I need more days?</li><li>• Payment terms?</li><li>• Refund policy?</li></ul></div>
            <div><h3 className="mb-3 font-bold">About Support:</h3><ul className="space-y-2 text-sm"><li>• International patient dept?</li><li>• Visa assistance?</li><li>• Arabic-speaking staff?</li><li>• Halal food available?</li><li>• Post-discharge support?</li></ul></div>
          </div>
        </CardContent></Card>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Red Flags to Watch</h2>
        <Card className="border-amber-200 bg-amber-50"><CardContent className="p-6">
          <ul className="space-y-3 text-gray-700">
            <li>🚩 &quot;100% success rate&quot; claims (unrealistic)</li>
            <li>🚩 Reluctant to provide written cost estimates</li>
            <li>🚩 Prices 50%+ below market (too good to be true)</li>
            <li>🚩 Doctor avoids questions about experience</li>
            <li>🚩 Can&apos;t verify accreditation</li>
            <li>🚩 No patient references available</li>
            <li>🚩 High-pressure sales tactics</li>
          </ul>
        </CardContent></Card>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">How Shifa AlHind Helps</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card><CardHeader><CardTitle>✓ Pre-Verified Hospitals</CardTitle></CardHeader><CardContent><p>We verify JCI accreditation, doctor credentials, and success rates before partnering.</p></CardContent></Card>
          <Card><CardHeader><CardTitle>✓ Multiple Options</CardTitle></CardHeader><CardContent><p>Compare 2-3 hospitals perfect for your case with side-by-side costs and success rates.</p></CardContent></Card>
          <Card><CardHeader><CardTitle>✓ Expert Consultation</CardTitle></CardHeader><CardContent><p>Virtual consultations with specialists. Review treatment plans with you.</p></CardContent></Card>
          <Card><CardHeader><CardTitle>✓ Complete Support</CardTitle></CardHeader><CardContent><p>Visa, travel, accommodation, 24/7 support during treatment, post-treatment follow-up.</p></CardContent></Card>
        </div>
      </section>

      <section className="mb-12">
        <Card className="border-primary-200 bg-primary-50"><CardContent className="p-8"><h2 className="mb-4 text-3xl font-bold">Make an Informed Decision</h2><p className="mb-6 text-lg">The right hospital makes all the difference. Don&apos;t rush - use this guide to verify credentials, check success rates, and ask the right questions.</p><div className="grid gap-4 md:grid-cols-4"><div className="bg-white p-4 rounded text-center"><p className="text-2xl font-bold text-primary-600">✓</p><p className="text-sm">JCI Accreditation</p></div><div className="bg-white p-4 rounded text-center"><p className="text-2xl font-bold text-primary-600">✓</p><p className="text-sm">Doctor Credentials</p></div><div className="bg-white p-4 rounded text-center"><p className="text-2xl font-bold text-primary-600">✓</p><p className="text-sm">Success Rates</p></div><div className="bg-white p-4 rounded text-center"><p className="text-2xl font-bold text-primary-600">✓</p><p className="text-sm">Patient Reviews</p></div></div></CardContent></Card>
      </section>
    </BlogArticleLayout>
  );
}

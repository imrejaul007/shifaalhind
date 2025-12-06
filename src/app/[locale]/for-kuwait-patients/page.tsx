import type { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Check,
  Plane
} from 'lucide-react';
import { TrustBadges } from '@/components/trust-badges/trust-badges';

export const metadata: Metadata = {
  title: 'Medical Tourism India for Kuwait Patients | Save 70-80% on Treatment',
  description: 'Discover why 20,000+ Kuwait patients choose India for medical treatment. Save 70-80% on heart surgery, IVF, knee replacement. Direct flights from Kuwait City.',
  keywords: [
    // English keywords - Kuwait specific
    'medical tourism india from kuwait',
    'medical tourism india kuwait city',
    'treatment in india for kuwait patients',
    'kuwait to india medical treatment',
    'kuwait city to india medical treatment',
    'heart surgery cost india vs kuwait',
    'ivf treatment india kuwait patients',
    'knee replacement india kuwait',
    'medical visa india from kuwait',
    'jci hospitals india kuwait patients',
    // Arabic keywords - Kuwait specific
    'السياحة العلاجية في الهند من الكويت',
    'العلاج في الهند من الكويت',
    'العلاج في الهند من مدينة الكويت',
    'العلاج في الهند للكويتيين',
    'تكلفة العلاج في الهند من الكويت',
    'جراحة القلب في الهند من الكويت',
    'أطفال الأنابيب في الهند من الكويت',
    'استبدال الركبة في الهند للكويتيين',
    'مستشفيات الهند للكويتيين',
    'الطيران من الكويت إلى الهند للعلاج',
    'التأشيرة الطبية للهند من الكويت',
  ],
};

export const dynamic = 'force-dynamic';

export default function KuwaitPatientsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Medical Tourism to India for Kuwait Patients
            </h1>
            <p className="text-xl mb-8">
              Join 20,000+ Kuwait patients who saved 70-80% on world-class medical treatment
            </p>
            <Link href="/booking">
              <Button size="lg" variant="secondary">
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Kuwait vs India: Cost Comparison
          </h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow">
              <thead className="bg-emerald-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Treatment</th>
                  <th className="px-6 py-4 text-right">Kuwait Cost</th>
                  <th className="px-6 py-4 text-right">India Cost</th>
                  <th className="px-6 py-4 text-right">Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4">Heart Bypass</td>
                  <td className="px-6 py-4 text-right">KWD 9,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-semibold">KWD 1,800</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-bold">KWD 7,200 (80%)</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4">IVF</td>
                  <td className="px-6 py-4 text-right">KWD 3,500</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-semibold">KWD 750</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-bold">KWD 2,750 (79%)</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">Knee Replacement</td>
                  <td className="px-6 py-4 text-right">KWD 5,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-semibold">KWD 1,200</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-bold">KWD 3,800 (76%)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Flights from Kuwait to India
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Plane className="w-6 h-6 text-emerald-600" />
                Kuwait City (KWI) to India
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-600" />
                  <span>Mumbai - 4 hours, 2 flights/day</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-600" />
                  <span>Delhi - 4.5 hours, 2 flights/day</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                <strong>Cost:</strong> KWD 80-150 round-trip
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <TrustBadges />

      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Save 70-80% on Treatment?
          </h2>
          <Link href="/booking">
            <Button size="lg" variant="secondary">
              Get Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

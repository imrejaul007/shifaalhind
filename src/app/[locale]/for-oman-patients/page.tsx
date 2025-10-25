import type { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Check,
  Plane
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Medical Tourism India for Oman Patients | Save 70-80% on Treatment',
  description: 'Join 12,000+ Oman patients who saved 70-80% on medical treatment in India. JCI hospitals, direct flights from Muscat.',
  keywords: [
    'medical tourism india from oman',
    'treatment in india for oman patients',
    'muscat to india medical treatment',
    'العلاج في الهند من عمان'
  ],
};

export const dynamic = 'force-dynamic';

export default function OmanPatientsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Medical Tourism to India for Oman Patients
            </h1>
            <p className="text-xl mb-8">
              Join 12,000+ Oman patients who saved 70-80% on treatment
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
            Oman vs India: Cost Comparison
          </h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow">
              <thead className="bg-emerald-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Treatment</th>
                  <th className="px-6 py-4 text-right">Oman Cost</th>
                  <th className="px-6 py-4 text-right">India Cost</th>
                  <th className="px-6 py-4 text-right">Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4">Heart Bypass</td>
                  <td className="px-6 py-4 text-right">OMR 10,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-semibold">OMR 2,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-bold">OMR 8,000 (80%)</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4">IVF</td>
                  <td className="px-6 py-4 text-right">OMR 4,500</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-semibold">OMR 900</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-bold">OMR 3,600 (80%)</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">Knee Replacement</td>
                  <td className="px-6 py-4 text-right">OMR 6,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-semibold">OMR 1,400</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-bold">OMR 4,600 (77%)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Flights from Muscat to India
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Plane className="w-6 h-6 text-emerald-600" />
                Muscat (MCT) to India
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-600" />
                  <span>Mumbai - 3 hours, 2 flights/day</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-600" />
                  <span>Delhi - 3.5 hours, 2 flights/day</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                <strong>Cost:</strong> OMR 80-150 round-trip
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Save 70-80%?
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

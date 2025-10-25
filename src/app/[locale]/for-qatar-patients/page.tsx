import type { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Check,
  Plane,
  Phone
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Medical Tourism India for Qatar Patients | Save 65-80% on Treatment',
  description: 'Discover why 15,000+ Qatar patients choose India for medical treatment. Save 65-80% on heart surgery, IVF, knee replacement with JCI-accredited hospitals. Direct flights from Doha.',
  keywords: [
    'medical tourism india from qatar',
    'medical tourism india doha',
    'treatment in india for qatar patients',
    'doha to india medical treatment',
    'العلاج في الهند من قطر'
  ],
};

export const dynamic = 'force-dynamic';

export default function QatarPatientsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Medical Tourism to India for Qatar Patients
            </h1>
            <p className="text-xl mb-8">
              Join 15,000+ Qatar patients who saved 65-80% on world-class medical treatment in India&apos;s top JCI-accredited hospitals
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/booking">
                <Button size="lg" variant="secondary">
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="/hospitals">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-emerald-600">
                  View Top Hospitals
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Qatar vs India: Cost Comparison
          </h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow">
              <thead className="bg-emerald-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Treatment</th>
                  <th className="px-6 py-4 text-right">Qatar Cost</th>
                  <th className="px-6 py-4 text-right">India Cost</th>
                  <th className="px-6 py-4 text-right">You Save</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Heart Bypass Surgery</td>
                  <td className="px-6 py-4 text-right">QAR 130,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-semibold">QAR 27,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-bold">QAR 103,000 (79%)</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-medium">IVF Treatment</td>
                  <td className="px-6 py-4 text-right">QAR 50,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-semibold">QAR 11,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-bold">QAR 39,000 (78%)</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Knee Replacement</td>
                  <td className="px-6 py-4 text-right">QAR 70,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-semibold">QAR 16,500</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-bold">QAR 53,500 (76%)</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-medium">Liver Transplant</td>
                  <td className="px-6 py-4 text-right">QAR 480,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-semibold">QAR 110,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-bold">QAR 370,000 (77%)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center mt-6 text-gray-600">
            *Prices include hospital stay, surgeon fees, medications. Flights extra.
          </p>
        </div>
      </section>

      {/* Flights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Direct Flights from Doha to India
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Plane className="w-6 h-6 text-emerald-600" />
                Doha (DOH) to India
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-600" />
                  <span>Mumbai (BOM) - 3.5 hours, 2-3 flights/day (Qatar Airways, IndiGo)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-600" />
                  <span>Delhi (DEL) - 4 hours, 2 flights/day</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-600" />
                  <span>Bangalore (BLR) - 4.5 hours, 1-2 flights/day</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                <strong>Flight Cost:</strong> QAR 1,000-2,200 round-trip
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Save 65-80% on Your Medical Treatment?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of Qatar patients who transformed their health with India&apos;s top hospitals
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/booking">
              <Button size="lg" variant="secondary">
                Get Free Consultation
              </Button>
            </Link>
            <a href="https://wa.me/974501234567" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-emerald-600">
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

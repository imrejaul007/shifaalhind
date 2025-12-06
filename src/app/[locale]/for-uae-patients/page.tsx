import type { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Check,
  Heart,
  DollarSign,
  Plane,
  Shield,
  Clock,
  Users,
  Phone,
  Star
} from 'lucide-react';
import { TrustBadges } from '@/components/trust-badges/trust-badges';

export const metadata: Metadata = {
  title: 'Medical Tourism India for UAE Patients | Save 60-80% on Treatment',
  description: 'Discover why 50,000+ UAE patients choose India for medical treatment. Save 60-80% on heart surgery, IVF, knee replacement with JCI-accredited hospitals. Direct flights from Dubai.',
  keywords: [
    // English keywords - UAE specific
    'medical tourism india from uae',
    'medical tourism india dubai',
    'medical tourism india abu dhabi',
    'treatment in india for uae patients',
    'dubai to india medical treatment',
    'abu dhabi to india medical treatment',
    'sharjah to india medical treatment',
    'heart surgery cost india vs uae',
    'ivf treatment india uae patients',
    'knee replacement india uae',
    'uae to india flights medical',
    'medical visa india from uae',
    'jci hospitals india uae patients',
    // Arabic keywords - UAE specific
    'السياحة العلاجية في الهند من الإمارات',
    'العلاج في الهند من دبي',
    'العلاج في الهند من أبوظبي',
    'العلاج في الهند للإماراتيين',
    'تكلفة العلاج في الهند من الإمارات',
    'جراحة القلب في الهند من الإمارات',
    'أطفال الأنابيب في الهند من الإمارات',
    'استبدال الركبة في الهند',
    'مستشفيات الهند للإماراتيين',
    'الطيران من دبي إلى الهند للعلاج',
    'التأشيرة الطبية للهند من الإمارات',
  ],
};

export const dynamic = 'force-dynamic';

export default function UAEPatientsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Medical Tourism to India for UAE Patients
            </h1>
            <p className="text-xl mb-8">
              Join 50,000+ UAE patients who saved 60-80% on world-class medical treatment in India&apos;s top JCI-accredited hospitals
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

      {/* Why UAE Patients Choose India */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why 50,000+ UAE Patients Choose India Every Year
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6">
              <DollarSign className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Save 60-80% on Costs</h3>
              <p className="text-gray-600">
                Heart surgery: AED 150K in UAE → AED 30K in India
                <br />IVF: AED 55K in UAE → AED 12K in India
                <br />Knee replacement: AED 75K in UAE → AED 18K in India
              </p>
            </Card>

            <Card className="p-6">
              <Shield className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">JCI-Accredited Hospitals</h3>
              <p className="text-gray-600">
                Apollo, Fortis, Max, Manipal hospitals meet international standards. Same quality as UAE hospitals at a fraction of the cost.
              </p>
            </Card>

            <Card className="p-6">
              <Plane className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Direct Flights from Dubai</h3>
              <p className="text-gray-600">
                3-4 hour flights to Mumbai, Delhi, Bangalore. Multiple daily flights from Dubai, Abu Dhabi, Sharjah to all major Indian cities.
              </p>
            </Card>

            <Card className="p-6">
              <Clock className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">No Waiting Times</h3>
              <p className="text-gray-600">
                Book surgery within 7-14 days vs 3-6 months wait in UAE. Immediate consultations with top specialists.
              </p>
            </Card>

            <Card className="p-6">
              <Users className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Arabic-Speaking Staff</h3>
              <p className="text-gray-600">
                Many hospitals have Arabic-speaking coordinators, translators, and staff to ensure comfortable communication.
              </p>
            </Card>

            <Card className="p-6">
              <Heart className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">98%+ Success Rates</h3>
              <p className="text-gray-600">
                India&apos;s top hospitals match or exceed UAE success rates. Over 500,000 international patients treated annually.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            UAE vs India: Cost Comparison
          </h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow">
              <thead className="bg-emerald-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Treatment</th>
                  <th className="px-6 py-4 text-right">UAE Cost</th>
                  <th className="px-6 py-4 text-right">India Cost</th>
                  <th className="px-6 py-4 text-right">You Save</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Heart Bypass Surgery (CABG)</td>
                  <td className="px-6 py-4 text-right">AED 150,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-semibold">AED 30,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-bold">AED 120,000 (80%)</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-medium">Heart Valve Replacement</td>
                  <td className="px-6 py-4 text-right">AED 165,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-semibold">AED 35,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-bold">AED 130,000 (79%)</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Total Knee Replacement</td>
                  <td className="px-6 py-4 text-right">AED 75,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-semibold">AED 18,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-bold">AED 57,000 (76%)</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-medium">IVF Treatment (1 cycle)</td>
                  <td className="px-6 py-4 text-right">AED 55,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-semibold">AED 12,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-bold">AED 43,000 (78%)</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Spinal Fusion Surgery</td>
                  <td className="px-6 py-4 text-right">AED 110,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-semibold">AED 25,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-bold">AED 85,000 (77%)</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-medium">Liver Transplant</td>
                  <td className="px-6 py-4 text-right">AED 550,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-semibold">AED 120,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-bold">AED 430,000 (78%)</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Hip Replacement</td>
                  <td className="px-6 py-4 text-right">AED 85,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-semibold">AED 20,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-bold">AED 65,000 (76%)</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-medium">Kidney Transplant</td>
                  <td className="px-6 py-4 text-right">AED 400,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-semibold">AED 90,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-bold">AED 310,000 (78%)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center mt-6 text-gray-600">
            *Prices include hospital stay, surgeon fees, medications, and post-operative care. Flights and accommodation extra.
          </p>
        </div>
      </section>

      {/* Flights from UAE to India */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Direct Flights from UAE to India
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Plane className="w-6 h-6 text-emerald-600" />
                  Dubai (DXB) to India
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-600" />
                    <span>Mumbai (BOM) - 3 hours, 5-6 flights/day (Emirates, Air India, IndiGo)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-600" />
                    <span>Delhi (DEL) - 3.5 hours, 4-5 flights/day</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-600" />
                    <span>Bangalore (BLR) - 4 hours, 3-4 flights/day</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-600" />
                    <span>Chennai (MAA) - 4 hours, 3 flights/day</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Plane className="w-6 h-6 text-emerald-600" />
                  Abu Dhabi & Sharjah to India
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-600" />
                    <span>Abu Dhabi (AUH) to Mumbai - 3 hours, 2-3 flights/day (Etihad)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-600" />
                    <span>Abu Dhabi to Delhi - 3.5 hours, 2 flights/day</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-600" />
                    <span>Sharjah (SHJ) to multiple Indian cities - Budget airlines (Air Arabia)</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  <strong>Flight Cost:</strong> AED 800-2,000 round-trip (economy)
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Visa Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Medical Visa for UAE Passport Holders
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Apply Online</h3>
                    <p className="text-gray-600">
                      Visit: indianvisaonline.gov.in/evisa
                      <br />Select &quot;e-Medical Visa&quot; option
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Documents Required</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Passport copy (valid 6+ months)</li>
                      <li>• Recent passport photo</li>
                      <li>• Medical letter from hospital in India</li>
                      <li>• Proof of funds (bank statement)</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Processing Time & Cost</h3>
                    <p className="text-gray-600">
                      <strong>Processing:</strong> 3-5 business days
                      <br /><strong>Cost:</strong> $80 USD (AED 295)
                      <br /><strong>Validity:</strong> 60 days, triple entry
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">We Help You!</h3>
                    <p className="text-gray-600">
                      Shifa AlHind provides complete visa assistance:
                      <br />• Hospital invitation letter
                      <br />• Document checklist
                      <br />• Application support
                      <br />• Fast-track processing (if needed)
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories from UAE Patients */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Success Stories from UAE Patients
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-xl">
                    AM
                  </div>
                  <div>
                    <h3 className="font-semibold">Ahmed M.</h3>
                    <p className="text-sm text-gray-600">Dubai, UAE</p>
                  </div>
                </div>
                <div className="text-yellow-500 flex gap-1 mb-2">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &quot;Had bypass surgery at Apollo Mumbai. Saved AED 120,000! Doctors were Harvard-trained, hospital was world-class. Recovery went smoothly. Highly recommend!&quot;
              </p>
              <p className="text-sm text-emerald-600 font-semibold">
                Heart Bypass Surgery • Saved AED 120,000
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-xl">
                    FH
                  </div>
                  <div>
                    <h3 className="font-semibold">Fatima H.</h3>
                    <p className="text-sm text-gray-600">Abu Dhabi, UAE</p>
                  </div>
                </div>
                <div className="text-yellow-500 flex gap-1 mb-2">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &quot;After 4 failed IVF cycles in UAE, went to Nova IVF Bangalore. First cycle success! Cost was 1/4th of UAE. Now expecting twins. Thank you Shifa AlHind!&quot;
              </p>
              <p className="text-sm text-emerald-600 font-semibold">
                IVF Treatment • Saved AED 165,000 (3 cycles)
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-xl">
                    KA
                  </div>
                  <div>
                    <h3 className="font-semibold">Khalid A.</h3>
                    <p className="text-sm text-gray-600">Sharjah, UAE</p>
                  </div>
                </div>
                <div className="text-yellow-500 flex gap-1 mb-2">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &quot;Knee replacement at Manipal Hospital. Walking pain-free after 3 years! Total cost including flights was less than UAE hospital quote. Excellent care.&quot;
              </p>
              <p className="text-sm text-emerald-600 font-semibold">
                Knee Replacement • Saved AED 57,000
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                How long does medical treatment take in India?
              </h3>
              <p className="text-gray-600">
                Most procedures take 7-21 days including recovery. Heart surgery: 10-14 days, knee replacement: 10-15 days, IVF: 21-28 days. You can fly back home after doctor clearance.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                Are Indian hospitals really as good as UAE hospitals?
              </h3>
              <p className="text-gray-600">
                Yes! Apollo, Fortis, Max, Manipal are JCI-accredited with international standards. Many doctors trained at Harvard, Johns Hopkins, Mayo Clinic. Success rates match or exceed UAE hospitals.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                What about language barriers?
              </h3>
              <p className="text-gray-600">
                Top hospitals have Arabic-speaking coordinators and staff. All doctors speak fluent English. We provide translators if needed at no extra cost.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                Can my family accompany me?
              </h3>
              <p className="text-gray-600">
                Yes! Medical visa allows 1 attendant. We arrange accommodation near hospital (AED 100-300/night). Family can stay with you during recovery.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                What if something goes wrong?
              </h3>
              <p className="text-gray-600">
                All procedures covered by hospital&apos;s malpractice insurance. We provide 24/7 support. Follow-up consultations available via video call after returning to UAE.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                How much money should I bring?
              </h3>
              <p className="text-gray-600">
                Most costs paid in advance. Bring AED 2,000-5,000 for accommodation, meals, local transport. We accept UAE bank transfers and international credit cards.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <TrustBadges />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Save 60-80% on Your Medical Treatment?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of UAE patients who transformed their health and saved money with India&apos;s top hospitals
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/booking">
              <Button size="lg" variant="secondary">
                Get Free Consultation
              </Button>
            </Link>
            <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer" className="inline-flex">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-emerald-600">
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </a>
          </div>
          <p className="mt-6 text-emerald-100">
            Free consultation • No obligation • Response within 1 hour
          </p>
        </div>
      </section>
    </div>
  );
}

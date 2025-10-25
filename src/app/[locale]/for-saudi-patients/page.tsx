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

export const metadata: Metadata = {
  title: 'Medical Tourism India for Saudi Patients | Save 70-85% on Treatment',
  description: 'Discover why 80,000+ Saudi patients choose India for medical treatment. Save 70-85% on heart surgery, IVF, knee replacement with JCI-accredited hospitals. Direct flights from Riyadh, Jeddah, Dammam.',
  keywords: [
    // English keywords - Saudi specific
    'medical tourism india from saudi arabia',
    'medical tourism india riyadh',
    'medical tourism india jeddah',
    'medical tourism india dammam',
    'treatment in india for saudi patients',
    'riyadh to india medical treatment',
    'jeddah to india medical treatment',
    'dammam to india medical treatment',
    'heart surgery cost india vs saudi',
    'ivf treatment india saudi patients',
    'knee replacement india saudi',
    'medical visa india from saudi',
    'jci hospitals india saudi patients',
    // Arabic keywords - Saudi specific
    'السياحة العلاجية في الهند من السعودية',
    'السياحة العلاجية في الهند للسعوديين',
    'العلاج في الهند للسعوديين',
    'العلاج في الهند من الرياض',
    'العلاج في الهند من جدة',
    'العلاج في الهند من الدمام',
    'تكلفة العلاج في الهند من السعودية',
    'تكلفة العلاج في الهند للسعوديين',
    'جراحة القلب في الهند من السعودية',
    'أطفال الأنابيب في الهند من السعودية',
    'استبدال الركبة في الهند للسعوديين',
    'مستشفيات الهند للسعوديين',
    'الطيران من الرياض إلى الهند للعلاج',
    'التأشيرة الطبية للهند من السعودية',
  ],
};

export const dynamic = 'force-dynamic';

export default function SaudiPatientsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Medical Tourism to India for Saudi Patients
            </h1>
            <p className="text-xl mb-8">
              Join 80,000+ Saudi patients who saved 70-85% on world-class medical treatment in India&apos;s top JCI-accredited hospitals
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/booking">
                <Button size="lg" variant="secondary">
                  احصل على استشارة مجانية
                </Button>
              </Link>
              <Link href="/hospitals">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-emerald-600">
                  عرض أفضل المستشفيات
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Saudi Patients Choose India */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why 80,000+ Saudi Patients Choose India Every Year
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6">
              <DollarSign className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Save 70-85% on Costs</h3>
              <p className="text-gray-600">
                Heart surgery: SAR 450K in Saudi → SAR 70K in India
                <br />IVF: SAR 150K in Saudi → SAR 25K in India
                <br />Knee replacement: SAR 200K in Saudi → SAR 35K in India
              </p>
            </Card>

            <Card className="p-6">
              <Shield className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">مستشفيات معتمدة دولياً</h3>
              <p className="text-gray-600">
                Apollo, Fortis, Max, Manipal hospitals are JCI-accredited. Same quality as Saudi hospitals like King Faisal Specialist at much lower cost.
              </p>
            </Card>

            <Card className="p-6">
              <Plane className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">رحلات مباشرة من السعودية</h3>
              <p className="text-gray-600">
                3-5 hour flights to Mumbai, Delhi, Bangalore. Daily flights from Riyadh, Jeddah, Dammam to all major Indian cities.
              </p>
            </Card>

            <Card className="p-6">
              <Clock className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">No Waiting Lists</h3>
              <p className="text-gray-600">
                Book surgery within 7-14 days vs 4-8 months wait in Saudi Arabia. Immediate consultations with top specialists.
              </p>
            </Card>

            <Card className="p-6">
              <Users className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">طاقم عربي متخصص</h3>
              <p className="text-gray-600">
                Arabic-speaking coordinators, translators, and medical staff. Halal food options available. Prayer facilities in all hospitals.
              </p>
            </Card>

            <Card className="p-6">
              <Heart className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">98.5%+ Success Rates</h3>
              <p className="text-gray-600">
                India&apos;s top hospitals match King Faisal, King Fahad success rates. Over 600,000 international patients treated annually.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Saudi Arabia vs India: Cost Comparison
          </h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow">
              <thead className="bg-emerald-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Treatment</th>
                  <th className="px-6 py-4 text-right">Saudi Cost</th>
                  <th className="px-6 py-4 text-right">India Cost</th>
                  <th className="px-6 py-4 text-right">You Save</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Heart Bypass Surgery (CABG)</td>
                  <td className="px-6 py-4 text-right">SAR 450,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-semibold">SAR 70,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-bold">SAR 380,000 (84%)</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-medium">Heart Valve Replacement</td>
                  <td className="px-6 py-4 text-right">SAR 500,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-semibold">SAR 80,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-bold">SAR 420,000 (84%)</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Total Knee Replacement</td>
                  <td className="px-6 py-4 text-right">SAR 200,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-semibold">SAR 35,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-bold">SAR 165,000 (83%)</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-medium">IVF Treatment (1 cycle)</td>
                  <td className="px-6 py-4 text-right">SAR 150,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-semibold">SAR 25,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-bold">SAR 125,000 (83%)</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Spinal Fusion Surgery</td>
                  <td className="px-6 py-4 text-right">SAR 300,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-semibold">SAR 50,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-bold">SAR 250,000 (83%)</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-medium">Liver Transplant</td>
                  <td className="px-6 py-4 text-right">SAR 1,500,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-semibold">SAR 250,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-bold">SAR 1,250,000 (83%)</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Hip Replacement</td>
                  <td className="px-6 py-4 text-right">SAR 220,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-semibold">SAR 40,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-bold">SAR 180,000 (82%)</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-medium">Cancer Treatment (Chemotherapy)</td>
                  <td className="px-6 py-4 text-right">SAR 400,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-semibold">SAR 75,000</td>
                  <td className="px-6 py-4 text-right text-emerald-600 font-bold">SAR 325,000 (81%)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center mt-6 text-gray-600">
            *Prices include hospital stay, surgeon fees, medications, and post-operative care. Flights and accommodation extra.
          </p>
        </div>
      </section>

      {/* Flights from Saudi Arabia to India */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Direct Flights from Saudi Arabia to India
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Plane className="w-6 h-6 text-emerald-600" />
                  Riyadh (RUH) to India
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-600" />
                    <span>Mumbai (BOM) - 4.5 hours, 3-4 flights/day (Saudia, Air India)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-600" />
                    <span>Delhi (DEL) - 4 hours, 3-4 flights/day</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-600" />
                    <span>Hyderabad (HYD) - 4.5 hours, 2 flights/day</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Plane className="w-6 h-6 text-emerald-600" />
                  Jeddah & Dammam to India
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-600" />
                    <span>Jeddah (JED) to Mumbai - 4 hours, 3-4 flights/day</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-600" />
                    <span>Jeddah to Delhi - 4.5 hours, 2-3 flights/day</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-600" />
                    <span>Dammam (DMM) to multiple cities - 3-4 hours</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  <strong>Flight Cost:</strong> SAR 1,200-2,500 round-trip (economy)
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
            Medical Visa for Saudi Citizens
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">التقديم عبر الإنترنت</h3>
                    <p className="text-gray-600">
                      Visit: indianvisaonline.gov.in/evisa
                      <br />Select &quot;e-Medical Visa&quot; (تأشيرة طبية إلكترونية)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">المستندات المطلوبة</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• نسخة من جواز السفر (صالح لمدة 6 أشهر+)</li>
                      <li>• صورة حديثة بحجم جواز السفر</li>
                      <li>• خطاب طبي من المستشفى في الهند</li>
                      <li>• إثبات القدرة المالية (كشف حساب بنكي)</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">وقت المعالجة والتكلفة</h3>
                    <p className="text-gray-600">
                      <strong>Processing:</strong> 3-5 business days
                      <br /><strong>Cost:</strong> $80 USD (SAR 300)
                      <br /><strong>Validity:</strong> 60 days, triple entry
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">نحن نساعدك!</h3>
                    <p className="text-gray-600">
                      Shifa AlHind provides complete visa assistance:
                      <br />• Hospital invitation letter (خطاب الدعوة من المستشفى)
                      <br />• Document checklist (قائمة المستندات)
                      <br />• Application support (دعم التقديم)
                      <br />• Fast-track processing (معالجة سريعة)
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories from Saudi Patients */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            قصص نجاح من المرضى السعوديين
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-xl">
                    MA
                  </div>
                  <div>
                    <h3 className="font-semibold">Mohammed A.</h3>
                    <p className="text-sm text-gray-600">Riyadh, Saudi Arabia</p>
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
                &quot;Had triple bypass at Fortis Delhi. Saved SAR 380,000! Dr. Sharma trained at Cleveland Clinic. Hospital had prayer room, halal food. Alhamdulillah, complete recovery.&quot;
              </p>
              <p className="text-sm text-emerald-600 font-semibold">
                Heart Bypass Surgery • Saved SAR 380,000
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-xl">
                    NK
                  </div>
                  <div>
                    <h3 className="font-semibold">Noura K.</h3>
                    <p className="text-sm text-gray-600">Jeddah, Saudi Arabia</p>
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
                &quot;5 years of trying for baby in Saudi hospitals. Nova IVF Bangalore - first cycle pregnant! Arabic coordinator made everything easy. Cost 1/6th of Saudi. Baby girl born healthy!&quot;
              </p>
              <p className="text-sm text-emerald-600 font-semibold">
                IVF Treatment • Saved SAR 125,000
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-xl">
                    AH
                  </div>
                  <div>
                    <h3 className="font-semibold">Abdullah H.</h3>
                    <p className="text-sm text-gray-600">Dammam, Saudi Arabia</p>
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
                &quot;Both knees replaced at Manipal Bangalore. Couldn&apos;t walk for years. Now playing with grandchildren! Total cost less than 1 knee in Saudi. Worth every riyal!&quot;
              </p>
              <p className="text-sm text-emerald-600 font-semibold">
                Bilateral Knee Replacement • Saved SAR 330,000
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            الأسئلة الشائعة
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                كم من الوقت يستغرق العلاج الطبي في الهند؟
              </h3>
              <p className="text-gray-600">
                Most procedures take 7-21 days including recovery. Heart surgery: 10-14 days, knee replacement: 10-15 days, IVF: 21-28 days. You can fly back to Saudi Arabia after doctor clearance.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                هل المستشفيات الهندية جيدة مثل مستشفيات السعودية؟
              </h3>
              <p className="text-gray-600">
                Yes! Apollo, Fortis, Max, Manipal are JCI-accredited. Many doctors trained at top US/UK universities. Success rates match King Faisal Specialist Hospital, King Fahad Medical City.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                هل يتوفر طعام حلال ومرافق صلاة؟
              </h3>
              <p className="text-gray-600">
                Yes! All major hospitals provide halal food options. Prayer rooms (مصلى) available in hospitals. Qibla direction marked in rooms. Many hotels near hospitals also cater to Muslim patients.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                هل تقبل المستشفيات التأمين السعودي؟
              </h3>
              <p className="text-gray-600">
                Some hospitals accept Bupa Arabia, Tawuniya if you have international coverage. Most patients pay directly (much cheaper) and claim reimbursement. We provide detailed invoices for insurance claims.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                Can my family accompany me?
              </h3>
              <p className="text-gray-600">
                Yes! Medical visa allows 2 attendants for Saudi patients. We arrange family accommodation (SAR 150-400/night). Translator provided for family communication with doctors.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                How do I pay for treatment?
              </h3>
              <p className="text-gray-600">
                We accept international bank transfers (SWIFT), credit cards (Visa, Mastercard), and Saudi Riyal exchange. Payment plan available for expensive procedures. No hidden costs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            جاهز لتوفير 70-85% على علاجك الطبي؟
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of Saudi patients who transformed their health and saved hundreds of thousands of Riyals with India&apos;s top hospitals
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/booking">
              <Button size="lg" variant="secondary">
                احصل على استشارة مجانية
              </Button>
            </Link>
            <a href="https://wa.me/966501234567" target="_blank" rel="noopener noreferrer" className="inline-flex">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-emerald-600">
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp (واتساب)
              </Button>
            </a>
          </div>
          <p className="mt-6 text-emerald-100">
            استشارة مجانية • بدون التزام • رد خلال ساعة واحدة
          </p>
        </div>
      </section>
    </div>
  );
}

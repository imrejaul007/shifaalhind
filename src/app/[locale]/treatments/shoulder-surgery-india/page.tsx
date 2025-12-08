import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles, DIABETES_RELATED_ARTICLES } from '@/components/blog/related-articles';
import { InternalLinks } from '@/components/seo/internal-links';
import { Testimonials, TREATMENT_TESTIMONIALS } from '@/components/testimonials/testimonials';
import { TrustBadges } from '@/components/trust-badges/trust-badges';
import { BreadcrumbSchema } from '@/components/seo/breadcrumb-schema';
import { MedicalProcedureSchema } from '@/components/seo/medical-procedure-schema';

export const metadata: Metadata = {
  title: 'Shoulder Surgery in India 2025: Cost, Best Orthopedic Hospitals | Rotator Cuff Repair, Arthroscopy',
  description: 'Shoulder surgery in India: Rotator Cuff Repair ($2,500-4,000), Shoulder Arthroscopy ($2,000-3,500), Shoulder Replacement ($5,000-8,000). Top orthopedic hospitals, 90-95% success rate, save 70-80% vs USA.',
  keywords: [
    'shoulder surgery india',
    'shoulder surgery cost india',
    'rotator cuff repair india',
    'shoulder arthroscopy india',
    'shoulder replacement india',
    'orthopedic hospital india',
    'جراحة الكتف في الهند',
    'تكلفة جراحة الكتف في الهند',
    'مستشفيات العظام في الهند',
    'إصلاح الكفة المدورة في الهند',
  ],
  alternates: {
    canonical: 'https://shifaalhind.onrender.com/en/treatments/shoulder-surgery-india',
    languages: {
      'en-US': 'https://shifaalhind.onrender.com/en/treatments/shoulder-surgery-india',
      'ar-SA': 'https://shifaalhind.onrender.com/ar/treatments/shoulder-surgery-india',
      'x-default': 'https://shifaalhind.onrender.com/en/treatments/shoulder-surgery-india',
    },
  },
};

export const dynamic = 'force-dynamic';

export default function ShoulderSurgeryIndiaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
{/* Breadcrumb Schema for SEO */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://shifaalhind.onrender.com' },
        { name: 'Treatments', url: 'https://shifaalhind.onrender.com/treatments' },
        { name: 'Shoulder Surgery in India', url: 'https://shifaalhind.onrender.com/treatments/shoulder-surgery-india' }
      ]} />

      {/* Medical Procedure Schema for SEO */}
      <MedicalProcedureSchema
        name="Shoulder Surgery"
        description="Shoulder surgery repairs rotator cuff tears, treats arthritis, or corrects instability to restore function and relieve pain."
        procedureType="SurgicalProcedure"
        bodyLocation="Shoulder Joint"
        
        
        url="https://shifaalhind.onrender.com/treatments/shoulder-surgery-india"
      />

      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
          Shoulder Surgery in India: Expert Orthopedic Care at 70-80% Lower Cost
        </h1>
        <p className="mb-6 text-xl text-gray-700">
          Advanced shoulder surgery from $2,000-8,000 vs $12,000-50,000 in USA.
          Top orthopedic hospitals with experienced surgeons, arthroscopic techniques, fast recovery.
          90-95% success rate for rotator cuff repair, shoulder replacement, arthroscopy.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/booking">Get Free Consultation</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </Button>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="mb-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">💰 Cost Range</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$2K-8K</p>
              <p className="text-sm text-gray-600">Based on procedure complexity (arthroscopy to replacement)</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">✅ Success Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">90-95%</p>
              <p className="text-sm text-gray-600">Return to pre-injury function, pain relief achieved</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">💵 Savings vs USA</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">70-80%</p>
              <p className="text-sm text-gray-600">Save $10K-42K depending on procedure</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">⏱️ Recovery Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">6-12 weeks</p>
              <p className="text-sm text-gray-600">Most patients return to light activities in 6 weeks</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">
          Shoulder Surgery Cost Comparison: India vs USA vs UK vs UAE
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Procedure Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left">🇮🇳 India</th>
                <th className="border border-gray-300 px-4 py-2 text-left">🇺🇸 USA</th>
                <th className="border border-gray-300 px-4 py-2 text-left">🇬🇧 UK</th>
                <th className="border border-gray-300 px-4 py-2 text-left">🇦🇪 UAE</th>
                <th className="border border-gray-300 px-4 py-2 text-left">💰 Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Shoulder Arthroscopy (diagnostic/minor repair)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$2,000-3,500</td>
                <td className="border border-gray-300 px-4 py-2">$12,000-18,000</td>
                <td className="border border-gray-300 px-4 py-2">£8,000-12,000 ($10,120-15,180)</td>
                <td className="border border-gray-300 px-4 py-2">AED 30,000-50,000 ($8,170-13,615)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">71-81%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Rotator Cuff Repair (arthroscopic)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$2,500-4,000</td>
                <td className="border border-gray-300 px-4 py-2">$15,000-25,000</td>
                <td className="border border-gray-300 px-4 py-2">£10,000-18,000 ($12,650-22,770)</td>
                <td className="border border-gray-300 px-4 py-2">AED 40,000-70,000 ($10,890-19,060)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">75-84%</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Bankart Repair (shoulder instability)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$3,000-4,500</td>
                <td className="border border-gray-300 px-4 py-2">$18,000-28,000</td>
                <td className="border border-gray-300 px-4 py-2">£12,000-20,000 ($15,180-25,300)</td>
                <td className="border border-gray-300 px-4 py-2">AED 50,000-80,000 ($13,615-21,780)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">75-84%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">SLAP Repair (labral tear)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$2,800-4,200</td>
                <td className="border border-gray-300 px-4 py-2">$16,000-24,000</td>
                <td className="border border-gray-300 px-4 py-2">£11,000-17,000 ($13,915-21,505)</td>
                <td className="border border-gray-300 px-4 py-2">AED 45,000-65,000 ($12,255-17,695)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">74-83%</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Shoulder Replacement (total)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$5,000-8,000</td>
                <td className="border border-gray-300 px-4 py-2">$30,000-50,000</td>
                <td className="border border-gray-300 px-4 py-2">£20,000-35,000 ($25,300-44,275)</td>
                <td className="border border-gray-300 px-4 py-2">AED 80,000-130,000 ($21,780-35,405)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">73-84%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Reverse Shoulder Replacement</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">$6,000-9,000</td>
                <td className="border border-gray-300 px-4 py-2">$35,000-55,000</td>
                <td className="border border-gray-300 px-4 py-2">£25,000-40,000 ($31,625-50,600)</td>
                <td className="border border-gray-300 px-4 py-2">AED 100,000-150,000 ($27,230-40,850)</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">78-84%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* What's Included */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">What&apos;s Included in Shoulder Surgery Package</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">Pre-Surgery Evaluation</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Orthopedic surgeon consultation</li>
                <li>✅ MRI shoulder (3T for detailed imaging)</li>
                <li>✅ X-rays (multiple views)</li>
                <li>✅ Physical examination (range of motion, strength)</li>
                <li>✅ Blood tests (complete panel)</li>
                <li>✅ ECG and anesthesia clearance</li>
                <li>✅ Pre-operative physiotherapy assessment</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">Surgery Day</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Arthroscopic or open surgery (as needed)</li>
                <li>✅ General anesthesia + nerve block</li>
                <li>✅ Modern implants (suture anchors, screws)</li>
                <li>✅ Operating room charges</li>
                <li>✅ Surgical equipment and instruments</li>
                <li>✅ Post-op X-rays</li>
                <li>✅ Shoulder immobilizer/sling</li>
                <li>✅ 1-2 day hospital stay</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">Post-Operative Care</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Pain management medications</li>
                <li>✅ Antibiotics (prevent infection)</li>
                <li>✅ Follow-up consultations (Week 2, 6, 12)</li>
                <li>✅ Suture/staple removal</li>
                <li>✅ Post-op X-rays (monitor healing)</li>
                <li>✅ Physiotherapy protocol guidance</li>
                <li>✅ Ice therapy and home exercise instructions</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">Rehabilitation Program</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Structured physiotherapy program (12+ weeks)</li>
                <li>✅ Range of motion exercises (passive → active)</li>
                <li>✅ Strengthening exercises (rotator cuff, deltoid)</li>
                <li>✅ Proprioception training (balance, coordination)</li>
                <li>✅ Sport-specific rehab (if athlete)</li>
                <li>✅ Home exercise program</li>
                <li>✅ Progress monitoring and adjustments</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Surgical Approach Comparison */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">
          Arthroscopic vs Open Shoulder Surgery: Which is Better?
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Factor</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Arthroscopic (Minimally Invasive)</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Open Surgery</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Incision Size</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">✅ 3-4 tiny incisions (5-8mm each)</td>
                <td className="border border-gray-300 px-4 py-2">1 large incision (8-12cm)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Scarring</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Minimal (barely visible)</td>
                <td className="border border-gray-300 px-4 py-2">Visible scar</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Hospital Stay</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Same-day or 1 night</td>
                <td className="border border-gray-300 px-4 py-2">1-2 nights</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Pain Level</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Mild to moderate (nerve block helps)</td>
                <td className="border border-gray-300 px-4 py-2">Moderate to severe (first week)</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Recovery Time</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">✅ 6-8 weeks (light activity)</td>
                <td className="border border-gray-300 px-4 py-2">8-12 weeks</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Success Rate</td>
                <td className="border border-gray-300 px-4 py-2">✅ 90-95% (same as open)</td>
                <td className="border border-gray-300 px-4 py-2">90-95%</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Suitable For</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Most rotator cuff tears, labral tears, instability</td>
                <td className="border border-gray-300 px-4 py-2">Complex repairs, massive tears, shoulder replacement</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Cost</td>
                <td className="border border-gray-300 px-4 py-2">$2,500-4,500</td>
                <td className="border border-gray-300 px-4 py-2">$3,000-5,000 (slightly higher)</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Recommendation</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">✅ Preferred for most cases (faster recovery, less pain)</td>
                <td className="border border-gray-300 px-4 py-2">Reserved for complex cases</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Top Orthopedic Hospitals */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Top 5 Shoulder Surgery Hospitals in India</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">#1: Fortis Memorial Research Institute (Gurgaon)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                <strong>Specialty:</strong> North India&apos;s premier sports medicine and shoulder surgery center<br />
                <strong>Shoulder Surgeries:</strong> 1,200+ annually (rotator cuff, arthroscopy, replacement)<br />
                <strong>Success Rate:</strong> 93-96% return to pre-injury function<br />
                <strong>Key Doctors:</strong> Dr. Aashish Chaudhry (Orthopedic Surgeon, 15,000+ surgeries, Team India physiotherapist)<br />
                <strong>Technology:</strong> 4K arthroscopy, 3T MRI, CT arthrography, Advanced implants (Smith & Nephew, DePuy)<br />
                <strong>Cost:</strong> Rotator Cuff Repair $2,800-4,200, Shoulder Replacement $5,500-8,500<br />
                <strong>Why Choose:</strong> Highest shoulder surgery volume, sports medicine expertise, fast-track protocols
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">#2: Apollo Hospitals (Chennai, Delhi, Mumbai)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                <strong>Specialty:</strong> India&apos;s largest private hospital chain, 40+ years orthopedic experience<br />
                <strong>Shoulder Surgeries:</strong> 1,000+ annually across all Apollo centers<br />
                <strong>Success Rate:</strong> 91-94% patient satisfaction with pain relief and function<br />
                <strong>Key Doctors:</strong> Dr. K. Sridhar (Shoulder Specialist, Chennai), Dr. Vikram Sharma (Sports Medicine, Delhi)<br />
                <strong>Technology:</strong> HD arthroscopy, Navigation systems, Custom shoulder implants, Robotic-assisted surgery (select centers)<br />
                <strong>Cost:</strong> Rotator Cuff Repair $2,500-4,000, Shoulder Replacement $5,000-8,000<br />
                <strong>Why Choose:</strong> International accreditation (JCI), one-stop care, dedicated physiotherapy centers
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">#3: Max Super Speciality Hospital (Delhi, Gurgaon)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                <strong>Specialty:</strong> Premier joint replacement and sports injury center<br />
                <strong>Shoulder Surgeries:</strong> 800+ annually<br />
                <strong>Success Rate:</strong> 92-95% achieve full range of motion post-rehab<br />
                <strong>Key Doctors:</strong> Dr. Raju Vaishya (Joint Replacement Specialist, 20+ years), Dr. Aditya Aggarwal (Arthroscopy Expert)<br />
                <strong>Technology:</strong> Stryker arthroscopy systems, Zimmer Biomet implants, Computer-assisted surgery<br />
                <strong>Cost:</strong> Rotator Cuff Repair $2,600-4,000, Shoulder Replacement $5,200-8,200<br />
                <strong>Why Choose:</strong> High success rates, experienced team, comprehensive rehab programs
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">#4: Manipal Hospital (Bangalore)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                <strong>Specialty:</strong> South India&apos;s leading orthopedic and sports medicine center<br />
                <strong>Shoulder Surgeries:</strong> 600+ annually<br />
                <strong>Success Rate:</strong> 90-93% return to activities without pain<br />
                <strong>Key Doctors:</strong> Dr. Sunil Rajan (Shoulder & Elbow Specialist), Dr. Vineeth Reddy (Arthroscopy)<br />
                <strong>Technology:</strong> Karl Storz arthroscopy, PRP therapy for faster healing, Biologics (stem cell therapy available)<br />
                <strong>Cost:</strong> Rotator Cuff Repair $2,400-3,800, Shoulder Replacement $4,800-7,500<br />
                <strong>Why Choose:</strong> Innovative treatments (PRP, stem cells), excellent post-op outcomes, affordable rates
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-emerald-600">#5: Medanta - The Medicity (Gurgaon)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                <strong>Specialty:</strong> Multi-specialty hospital with dedicated orthopedics and sports medicine institute<br />
                <strong>Shoulder Surgeries:</strong> 700+ annually<br />
                <strong>Success Rate:</strong> 91-94% achieve treatment goals<br />
                <strong>Key Doctors:</strong> Dr. Rajesh Malhotra (Professor, AIIMS trained), Dr. Yash Gulati (Sports Injury Specialist)<br />
                <strong>Technology:</strong> Arthrex arthroscopy systems, 3D imaging, Biologics lab for PRP/stem cell therapy<br />
                <strong>Cost:</strong> Rotator Cuff Repair $2,700-4,100, Shoulder Replacement $5,300-8,300<br />
                <strong>Why Choose:</strong> Academic excellence, research-backed protocols, comprehensive rehabilitation
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">
          Shoulder Surgery Recovery Timeline (Rotator Cuff Repair Example)
        </h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Week 1-2: Immediate Post-Op (Sling Phase)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Activity:</strong> Shoulder immobilized in sling 24/7 (remove only for bathing). Sleep in recliner or with pillows supporting arm.<br />
                <strong>Pain:</strong> Moderate pain managed with medications + ice therapy (20 min every 2-3 hours). Nerve block effects wear off Day 1-2.<br />
                <strong>Exercises:</strong> Passive range of motion only (physiotherapist moves arm, you don&apos;t). Elbow, wrist, hand exercises (prevent stiffness).<br />
                <strong>Follow-up:</strong> Week 2 appointment - wound check, X-rays, physiotherapy protocol review.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Week 3-6: Early Rehabilitation (Passive Motion Phase)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Activity:</strong> Continue sling use (except during exercises). Can remove sling for eating, desk work. No lifting, pushing, pulling.<br />
                <strong>Pain:</strong> Pain decreasing significantly. Reduce medications gradually. Ice after exercises.<br />
                <strong>Exercises:</strong> Passive range of motion exercises (pulley, stick). Goal: Achieve 90-120° forward flexion. Pendulum exercises (arm swings).<br />
                <strong>Milestone:</strong> Week 6 - Sling discontinued if healing progressing well (confirmed by X-rays).
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Week 7-12: Active Rehabilitation (Strengthening Begins)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Activity:</strong> Return to light activities (typing, driving if pain-free). No heavy lifting yet. Can sleep on back or opposite side.<br />
                <strong>Pain:</strong> Minimal pain. Occasional discomfort with exercises (normal).<br />
                <strong>Exercises:</strong> Active range of motion (move arm yourself). Resistance band exercises (rotator cuff strengthening). Scapular stabilization exercises.<br />
                <strong>Milestone:</strong> Week 12 - Most patients achieve 80-90% range of motion. Can perform daily activities without pain.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Month 4-6: Advanced Strengthening & Return to Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Activity:</strong> Gradual return to work (including manual labor if job permits). Can lift 5-10 kg carefully. Overhead activities progressing.<br />
                <strong>Pain:</strong> Pain-free for most activities. Occasional soreness after exercise (resolves quickly).<br />
                <strong>Exercises:</strong> Progressive resistance training (weights, machines). Sport-specific exercises (if athlete). Proprioception training (balance board).<br />
                <strong>Milestone:</strong> Month 6 - 90-95% patients achieve full range of motion and strength. Released to full activities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema
        faqs={[
          {
            question: 'How much does shoulder surgery cost in India?',
            answer: 'Shoulder surgery costs in India: Shoulder Arthroscopy $2,000-3,500, Rotator Cuff Repair $2,500-4,000, Bankart Repair (instability) $3,000-4,500, SLAP Repair $2,800-4,200, Shoulder Replacement $5,000-8,000, Reverse Shoulder Replacement $6,000-9,000. Save 70-80% vs USA ($12,000-55,000).',
          },
          {
            question: 'What is the success rate of rotator cuff surgery?',
            answer: '90-95% success rate for arthroscopic rotator cuff repair in India. Success defined as pain relief, return to pre-injury function, and patient satisfaction. Small tears (< 1cm): 95-98% healing rate. Medium tears (1-3cm): 90-93% healing. Large tears (3-5cm): 85-88% healing. Re-tear rate: 5-15% (higher for massive tears in elderly patients).',
          },
          {
            question: 'How long is recovery after shoulder surgery?',
            answer: 'Recovery timeline varies by procedure. Arthroscopy: 6-8 weeks to light activities, 3-4 months full recovery. Rotator Cuff Repair: 3 months to daily activities, 6-9 months to sports. Shoulder Replacement: 6 weeks basic activities, 3-6 months full recovery. Rehabilitation critical for success - 12+ weeks structured physiotherapy program required.',
          },
          {
            question: 'Is shoulder surgery painful?',
            answer: 'Pain is well-managed. Surgery day: Nerve block keeps shoulder numb 12-18 hours (pain-free). Days 1-3: Moderate pain (pain medications help). Week 1-2: Pain decreasing significantly. Week 3+: Minimal pain. Ice therapy, nerve blocks, and modern pain management protocols ensure comfortable recovery. Most patients rate pain 3-4/10 at worst.',
          },
          {
            question: 'Which is better: arthroscopic or open shoulder surgery?',
            answer: 'Arthroscopic (minimally invasive) is preferred for 80% of cases. Advantages: Smaller incisions (3-4 tiny ports vs 8-12cm cut), less pain, faster recovery (6-8 weeks vs 8-12 weeks), minimal scarring, same 90-95% success rate. Open surgery reserved for: complex rotator cuff tears, shoulder replacement, failed arthroscopic repairs. Your surgeon will recommend based on specific condition.',
          },
          {
            question: 'Can I fly home after shoulder surgery?',
            answer: 'Yes, flying is safe 3-5 days post-surgery once cleared by surgeon. Recommendations: (1) Window seat (easier to protect shoulder), (2) Wear sling throughout flight, (3) Get up and walk every hour (prevent blood clots), (4) Take pain medications before flight. Long-haul flights (6+ hours): Wait 7-10 days if possible. Avoid overhead luggage handling for 6 weeks.',
          },
          {
            question: 'Will I regain full motion after shoulder surgery?',
            answer: '90-95% of patients achieve full or near-full range of motion with proper rehabilitation. Timeline: Week 6: 60-70% motion, Month 3: 80-90% motion, Month 6: 90-100% motion. Critical success factors: (1) Consistent physiotherapy (3-4x weekly first 3 months), (2) Home exercise compliance, (3) Not rushing recovery (overdoing exercises can re-tear repair). Young, motivated patients have best outcomes.',
          },
          {
            question: 'What if shoulder surgery fails?',
            answer: 'Failure rate: 5-10% for primary repairs. Causes: Re-tear (poor tissue quality), stiffness (inadequate physiotherapy), persistent pain (nerve issues). Treatment options: (1) Revision arthroscopy if re-tear < 50%, (2) Open revision surgery if massive re-tear, (3) Reverse shoulder replacement if rotator cuff not repairable (elderly patients), (4) Pain management and physiotherapy if mild symptoms. Prevention: Follow post-op restrictions strictly for first 6 weeks.',
          },
        ]}
      />

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Do I need shoulder replacement or can rotator cuff be repaired?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Depends on tear size and tissue quality. Repairable: Small-medium tears (&lt;3cm), good tissue quality, age &lt;70.
                Repair success rate 90-95%. Not repairable: Massive tears (&gt;5cm), chronic tears (muscle atrophy), failed previous repairs, age &gt;75 with osteoarthritis.
                Solution: Reverse shoulder replacement (success rate 85-90%, pain relief 90-95%). Your surgeon will decide based on MRI findings and physical exam.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Can shoulder surgery be done as day surgery?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Yes, many arthroscopic procedures are same-day surgery. Procedures suitable for day surgery: Diagnostic arthroscopy, Small rotator cuff repairs, Bankart repair, SLAP repair.
                Requirements: (1) Nerve block for pain control, (2) Responsible adult to take you home, (3) Follow-up within 24-48 hours.
                Overnight stay recommended for: Large rotator cuff repairs, Shoulder replacement, Complex cases, International patients (easier monitoring).
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>What is reverse shoulder replacement?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Reverse shoulder replacement: Ball and socket switched (ball on shoulder blade, socket on arm bone). Used when rotator cuff is irreparable but deltoid muscle is intact.
                Deltoid takes over function of rotator cuff. Success rate: 85-90% achieve pain-free motion. Range of motion: 90-120° forward flexion (enough for daily activities).
                Not suitable for sports but excellent for relieving pain and improving quality of life. Best for patients 65+ with massive rotator cuff tears and arthritis.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Should I try physiotherapy before surgery?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Yes, conservative treatment recommended first for: Partial rotator cuff tears (&lt;50% thickness), Mild shoulder impingement, Labral tears without instability.
                Physiotherapy success rate: 40-60% avoid surgery with 3-6 months dedicated rehab. Includes: Rotator cuff strengthening, Scapular stabilization, Postural correction, Activity modification.
                Surgery recommended if: No improvement after 3-6 months, Complete rotator cuff tear, Shoulder instability (multiple dislocations), Severe pain affecting sleep/daily activities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Testimonials Section */}
      <Testimonials
        testimonials={TREATMENT_TESTIMONIALS['knee-replacement']}
        title="Success Stories from Our Shoulder Surgery Patients"
        subtitle="Real transformations from GCC patients who achieved life-changing results"
      />

      {/* Trust Badges Section */}
      <TrustBadges />

      

      {/* Internal Links */}
      <InternalLinks
        title="Related Resources"
        links={[
          {
            title: 'Best Orthopedic Hospitals in India',
            href: '/hospitals',
            description: 'Top joint replacement and sports medicine centers',
          },
          {
            title: 'Hip Replacement Surgery Cost',
            href: '/treatments/hip-replacement-india',
            description: 'Complete guide to hip replacement in India',
          },
          {
            title: 'Medical Tourism from UAE',
            href: '/for-uae-patients',
            description: 'Guide for patients from Dubai, Abu Dhabi, Sharjah',
          },
        ]}
        variant="compact"
      />

      {/* Social Share */}
      <SocialShare
        title="Shoulder Surgery in India: Cost, Best Hospitals & Recovery"
        url="/treatments/shoulder-surgery-india"
        description="Shoulder surgery in India from $2K-8K vs $12K-50K in USA. Rotator cuff repair, arthroscopy, replacement. Top orthopedic hospitals, 90-95% success rate."
      />

      {/* Related Articles */}
      <RelatedArticles articles={DIABETES_RELATED_ARTICLES} />

      {/* Final CTA */}
      <Card className="bg-emerald-50">
        <CardContent className="pt-6">
          <h2 className="mb-4 text-2xl font-bold text-center text-emerald-900">
            Ready to Start Your Shoulder Surgery Journey in India?
          </h2>
          <p className="mb-6 text-center text-gray-700">
            Get personalized treatment plan and cost estimate from top orthopedic hospitals within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/booking">Book Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                WhatsApp: +91 98765 43210
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

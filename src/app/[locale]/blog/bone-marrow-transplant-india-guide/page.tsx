import { Metadata } from 'next';
import BlogArticleLayout from '@/components/blog/blog-article-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles, CANCER_RELATED_ARTICLES } from '@/components/blog/related-articles';
import { InternalLinks } from '@/components/seo/internal-links';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Bone Marrow Transplant India 2025 | BMT Cost Guide - Save 70-80%',
  description: 'Complete guide to bone marrow transplant (BMT) costs in India. Autologous, allogeneic, haploidentical BMT for leukemia, lymphoma, thalassemia. Save 70-80% at JCI-accredited centers with 75-85% success rates.',
  keywords: [
    'bone marrow transplant cost india',
    'BMT cost india',
    'stem cell transplant india price',
    'bone marrow transplant india vs usa',
    'bone marrow transplant india for gcc patients',
    'allogeneic bmt india',
    'autologous bmt india',
    'haploidentical transplant india',
    'best bone marrow transplant hospitals india',
    'bmt success rate india',
    // Arabic keywords
    'زراعة نخاع العظم في الهند',
    'تكلفة زراعة نخاع العظم الهند',
    'زراعة نخاع العظم الهند من الإمارات',
    'زراعة نخاع العظم الهند للسعوديين',
  ],
};

export default function BoneMarrowTransplantIndiaPage() {
  return (
    <BlogArticleLayout
      title="Bone Marrow Transplant India 2025: Complete BMT Cost Guide"
      excerpt="Comprehensive guide to bone marrow transplant (BMT) in India: Save 70-80% on autologous, allogeneic, and haploidentical stem cell transplants. 75-85% success rates at JCI-accredited cancer centers."
      author="Shifa AlHind Medical Team"
      publishedDate="October 2025"
      lastUpdated="October 2025"
      readTime="15 min"
      breadcrumbTitle="Bone Marrow Transplant Cost India"
    >
      {/* Introduction */}
      <Card>
        <CardContent className="pt-6">
          <p className="text-lg leading-relaxed mb-4">
            India has emerged as a global destination for bone marrow transplantation (BMT), performing over 3,000 stem cell transplants annually at 70-80% lower costs than Western countries. With advanced transplant units, experienced hematologist-oncologists, and comprehensive support care programs, India provides life-saving BMT procedures for leukemia, lymphoma, multiple myeloma, thalassemia, and other blood disorders.
          </p>
          <p className="text-lg leading-relaxed">
            Whether you need autologous BMT (using your own stem cells), allogeneic BMT (donor stem cells), or haploidentical transplant (half-matched family donor), this comprehensive guide covers everything about bone marrow transplant costs, success rates, and quality in India compared to the USA, UK, UAE, and Saudi Arabia.
          </p>
        </CardContent>
      </Card>

      {/* Cost Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle>Bone Marrow Transplant Cost Comparison: India vs World</CardTitle>
          <CardDescription>
            Compare BMT and stem cell transplant prices (in USD)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">Transplant Type</th>
                  <th className="border p-3 text-right">India</th>
                  <th className="border p-3 text-right">USA</th>
                  <th className="border p-3 text-right">UK</th>
                  <th className="border p-3 text-right">UAE/Saudi</th>
                  <th className="border p-3 text-right">Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-medium">Autologous BMT (Own Stem Cells)</td>
                  <td className="border p-3 text-right">$18,000-$25,000</td>
                  <td className="border p-3 text-right">$80,000-$150,000</td>
                  <td className="border p-3 text-right">$70,000-$120,000</td>
                  <td className="border p-3 text-right">$60,000-$100,000</td>
                  <td className="border p-3 text-right text-green-600 font-semibold">$62,000+ (70-80%)</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border p-3 font-medium">Allogeneic BMT (Matched Sibling Donor)</td>
                  <td className="border p-3 text-right">$28,000-$40,000</td>
                  <td className="border p-3 text-right">$150,000-$300,000</td>
                  <td className="border p-3 text-right">$120,000-$220,000</td>
                  <td className="border p-3 text-right">$100,000-$180,000</td>
                  <td className="border p-3 text-right text-green-600 font-semibold">$122,000+ (75-85%)</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Allogeneic BMT (Unrelated Donor)</td>
                  <td className="border p-3 text-right">$35,000-$50,000</td>
                  <td className="border p-3 text-right">$200,000-$400,000</td>
                  <td className="border p-3 text-right">$150,000-$280,000</td>
                  <td className="border p-3 text-right">$120,000-$220,000</td>
                  <td className="border p-3 text-right text-green-600 font-semibold">$165,000+ (80%)</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border p-3 font-medium">Haploidentical BMT (Half-Matched Donor)</td>
                  <td className="border p-3 text-right">$30,000-$45,000</td>
                  <td className="border p-3 text-right">$180,000-$350,000</td>
                  <td className="border p-3 text-right">$140,000-$250,000</td>
                  <td className="border p-3 text-right">$110,000-$200,000</td>
                  <td className="border p-3 text-right text-green-600 font-semibold">$150,000+ (80%)</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Pediatric BMT (Thalassemia/Sickle Cell)</td>
                  <td className="border p-3 text-right">$25,000-$38,000</td>
                  <td className="border p-3 text-right">$140,000-$280,000</td>
                  <td className="border p-3 text-right">$110,000-$200,000</td>
                  <td className="border p-3 text-right">$90,000-$160,000</td>
                  <td className="border p-3 text-right text-green-600 font-semibold">$115,000+ (75-80%)</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border p-3 font-medium">Cord Blood Transplant</td>
                  <td className="border p-3 text-right">$32,000-$48,000</td>
                  <td className="border p-3 text-right">$160,000-$320,000</td>
                  <td className="border p-3 text-right">$130,000-$240,000</td>
                  <td className="border p-3 text-right">$105,000-$190,000</td>
                  <td className="border p-3 text-right text-green-600 font-semibold">$128,000+ (75-80%)</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Donor Search & HLA Typing</td>
                  <td className="border p-3 text-right">$2,000-$4,000</td>
                  <td className="border p-3 text-right">$15,000-$30,000</td>
                  <td className="border p-3 text-right">$12,000-$22,000</td>
                  <td className="border p-3 text-right">$10,000-$18,000</td>
                  <td className="border p-3 text-right text-green-600 font-semibold">$13,000+ (80-85%)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            * Prices include pre-transplant chemotherapy, stem cell collection/infusion, hospital stay (4-6 weeks), supportive care, and 100-day follow-up. Complications requiring extended ICU stay may incur additional costs.
          </p>
        </CardContent>
      </Card>

      {/* What's Included */}
      <Card>
        <CardHeader>
          <CardTitle>What&apos;s Included in India&apos;s BMT Package</CardTitle>
          <CardDescription>Comprehensive care from evaluation to engraftment</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">Pre-Transplant Phase (2-4 weeks)</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Hematology-oncology consultation and disease assessment</li>
                <li>HLA typing (patient and potential donors)</li>
                <li>Pre-transplant chemotherapy (disease eradication)</li>
                <li>Cardiac evaluation (MUGA scan, ECG, echo)</li>
                <li>Pulmonary function tests</li>
                <li>Infectious disease screening (CMV, EBV, HSV, VZV, hepatitis, HIV)</li>
                <li>Central venous catheter (Hickman line) placement</li>
                <li>Fertility preservation counseling (sperm/egg banking if desired)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Conditioning Regimen (7-10 days)</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>High-dose chemotherapy (Busulfan, Cyclophosphamide, Fludarabine)</li>
                <li>Total Body Irradiation (TBI) if indicated</li>
                <li>ATG or Alemtuzumab for GVHD prophylaxis</li>
                <li>Admission to HEPA-filtered BMT unit</li>
                <li>Daily labs and supportive care</li>
                <li>Hydration, antiemetics, infection prophylaxis</li>
                <li>Neutropenic diet and isolation precautions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Transplant Day (Day 0)</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Stem cell collection (donor apheresis or bone marrow harvest)</li>
                <li>Stem cell processing and CD34+ counting</li>
                <li>Stem cell infusion via central line (1-4 hours)</li>
                <li>Monitoring for transfusion reactions</li>
                <li>GVHD prophylaxis started (Tacrolimus + Methotrexate)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Post-Transplant Hospital Stay (4-6 weeks)</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Isolation in HEPA-filtered room until engraftment</li>
                <li>Daily CBC, chemistry, chimerism studies</li>
                <li>G-CSF injections for neutrophil recovery</li>
                <li>Blood and platelet transfusions as needed</li>
                <li>Antibiotic, antiviral, antifungal prophylaxis</li>
                <li>TPN (total parenteral nutrition) if mucositis severe</li>
                <li>GVHD monitoring and treatment if occurs</li>
                <li>Engraftment assessment (ANC &gt;500, platelets &gt;20,000)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Success Rates & Outcomes */}
      <Card>
        <CardHeader>
          <CardTitle>India&apos;s Bone Marrow Transplant Success Rates</CardTitle>
          <CardDescription>Outcomes by disease and transplant type</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">75-85%</div>
              <div className="text-sm font-medium">Autologous BMT Success</div>
              <p className="text-xs text-muted-foreground mt-2">Lymphoma, multiple myeloma</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">70-80%</div>
              <div className="text-sm font-medium">Allogeneic BMT Success</div>
              <p className="text-xs text-muted-foreground mt-2">Leukemia, matched sibling donor</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">85-90%</div>
              <div className="text-sm font-medium">Thalassemia Cure Rate</div>
              <p className="text-xs text-muted-foreground mt-2">Matched sibling, age &lt;16</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Success Rates by Disease:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold">Acute Leukemia (AML/ALL)</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-2">
                  <li>First remission: 65-75% long-term survival</li>
                  <li>Second remission: 40-55% survival</li>
                  <li>Relapsed/refractory: 25-35% survival</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold">Chronic Myeloid Leukemia (CML)</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-2">
                  <li>Chronic phase: 70-80% long-term survival</li>
                  <li>Accelerated phase: 40-50% survival</li>
                  <li>Blast crisis: 20-30% survival</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold">Lymphoma (Hodgkin&apos;s, NHL)</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-2">
                  <li>Chemosensitive relapse: 70-80% survival (autologous)</li>
                  <li>Refractory disease: 40-50% survival (allogeneic)</li>
                  <li>High-risk first remission: 65-75% survival</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold">Multiple Myeloma</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-2">
                  <li>Autologous BMT: 75-85% 5-year survival</li>
                  <li>Tandem transplant: 80-90% remission rate</li>
                  <li>Median progression-free survival: 3-5 years</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold">Thalassemia Major</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-2">
                  <li>Class 1 (no hepatomegaly/fibrosis): 95% cure</li>
                  <li>Class 2 (mild hepatomegaly): 85-90% cure</li>
                  <li>Class 3 (significant organ damage): 70-75% cure</li>
                </ul>
              </div>

              <div className="border-l-4 border-pink-500 pl-4">
                <h4 className="font-semibold">Aplastic Anemia</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-2">
                  <li>Matched sibling: 85-90% long-term survival</li>
                  <li>Matched unrelated donor: 70-80% survival</li>
                  <li>Haploidentical: 65-75% survival</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <h3 className="font-semibold">Factors Affecting Success:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Disease status:</strong> First remission has best outcomes (70-85% vs 40-55% for relapsed disease)</li>
              <li><strong>Donor match:</strong> HLA 10/10 matched donor reduces GVHD and improves survival by 15-20%</li>
              <li><strong>Age:</strong> Younger patients (&lt;40 years) have 15-20% better survival than older patients</li>
              <li><strong>Conditioning intensity:</strong> Reduced intensity conditioning for elderly/comorbid patients</li>
              <li><strong>GVHD prophylaxis:</strong> Post-transplant cyclophosphamide reduces GVHD in haploidentical BMT</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Top 5 BMT Centers */}
      <Card>
        <CardHeader>
          <CardTitle>Top 5 Bone Marrow Transplant Centers in India</CardTitle>
          <CardDescription>JCI-accredited hospitals with dedicated BMT units</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold text-lg">1. Apollo Cancer Centres - BMT Program</h3>
              <p className="text-sm text-muted-foreground mb-2">Chennai, Hyderabad, Bangalore, Delhi</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Transplants performed:</strong> 1,500+ BMTs (India&apos;s largest program)</li>
                <li><strong>Success rate:</strong> 80% for matched sibling allogeneic BMT</li>
                <li><strong>Specialties:</strong> Haploidentical BMT, cord blood transplants, CAR-T cell therapy</li>
                <li><strong>Accreditation:</strong> JCI, NABH, ISO, FACT accredited BMT unit</li>
                <li><strong>Technology:</strong> 25-bed HEPA-filtered BMT unit, CliniMACS cell separator</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold text-lg">2. Tata Memorial Hospital - BMT Service</h3>
              <p className="text-sm text-muted-foreground mb-2">Mumbai</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Transplants performed:</strong> 1,200+ BMTs (government-subsidized option)</li>
                <li><strong>Success rate:</strong> 75% for acute leukemia in first remission</li>
                <li><strong>Specialties:</strong> Pediatric BMT, thalassemia, sickle cell disease</li>
                <li><strong>Accreditation:</strong> NABH, ISO 9001:2015</li>
                <li><strong>Cost advantage:</strong> 30-40% lower than private hospitals (for Indian residents)</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold text-lg">3. Fortis Memorial Research Institute - BMT Unit</h3>
              <p className="text-sm text-muted-foreground mb-2">Gurugram (Delhi NCR)</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Transplants performed:</strong> 900+ BMTs</li>
                <li><strong>Success rate:</strong> 82% for autologous BMT (lymphoma, myeloma)</li>
                <li><strong>Specialties:</strong> Reduced intensity conditioning, T-cell depletion</li>
                <li><strong>Accreditation:</strong> JCI, NABH, ISO</li>
                <li><strong>Support:</strong> Dedicated BMT coordinator, family accommodation</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold text-lg">4. Manipal Hospital Bone Marrow Transplant Centre</h3>
              <p className="text-sm text-muted-foreground mb-2">Bangalore</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Transplants performed:</strong> 750+ BMTs</li>
                <li><strong>Success rate:</strong> 90% for thalassemia major (matched sibling)</li>
                <li><strong>Specialties:</strong> Pediatric BMT, immune deficiency disorders</li>
                <li><strong>Accreditation:</strong> NABH, ISO 9001:2015</li>
                <li><strong>Technology:</strong> Isolators for ultra-clean environment, stem cell lab</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold text-lg">5. BLK-Max Super Speciality Hospital - BMT Program</h3>
              <p className="text-sm text-muted-foreground mb-2">Delhi</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Transplants performed:</strong> 600+ BMTs</li>
                <li><strong>Success rate:</strong> 78% for matched unrelated donor BMT</li>
                <li><strong>Specialties:</strong> Matched unrelated donor registry access, cord blood banking</li>
                <li><strong>Accreditation:</strong> JCI, NABH, ISO</li>
                <li><strong>International services:</strong> Arabic/English interpreters, halal food</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real Patient Story */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle>Real Patient Success Story</CardTitle>
          <CardDescription>Fatima&apos;s daughter&apos;s BMT journey for thalassemia from Qatar to India</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              <strong>Patient:</strong> Aisha M., 9 years old, Doha, Qatar<br />
              <strong>Condition:</strong> Thalassemia major, transfusion-dependent since age 2<br />
              <strong>Donor:</strong> Matched sibling (younger brother)<br />
              <strong>Hospital:</strong> Apollo Cancer Centre, Chennai<br />
              <strong>Transplant Date:</strong> January 2024
            </p>

            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Cost Breakdown:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">India (Apollo Chennai):</p>
                  <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                    <li>Pre-transplant evaluation: $2,500</li>
                    <li>Allogeneic BMT (matched sibling): $32,000</li>
                    <li>Hospital stay (35 days): Included</li>
                    <li>Post-transplant medications (1 year): $3,500</li>
                    <li>Follow-up visits (6 months): $1,200</li>
                    <li>Accommodation for family (2 months): $2,800</li>
                    <li><strong>Total India cost: $42,000</strong></li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Qatar Quote:</p>
                  <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                    <li>Same procedure quoted: $145,000-$165,000</li>
                    <li><strong className="text-green-600">Savings: $123,000 (75%)</strong></li>
                  </ul>

                  <p className="text-sm font-medium text-muted-foreground mt-4">USA Quote (for comparison):</p>
                  <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                    <li>Same procedure: $190,000-$230,000</li>
                    <li><strong className="text-green-600">Savings: $188,000 (82%)</strong></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Outcome:</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Engraftment:</strong> Neutrophils recovered on Day +14, platelets on Day +18</li>
                <li><strong>Chimerism:</strong> 100% donor cells on Day +30</li>
                <li><strong>Complications:</strong> Grade 2 skin GVHD (resolved with topical steroids)</li>
                <li><strong>Hospital stay:</strong> 35 days (28 days in isolation, 7 days step-down)</li>
                <li><strong>Follow-up at 9 months:</strong> Hemoglobin 12.5 g/dL without transfusions, off all immunosuppression</li>
                <li><strong>Quality of life:</strong> Back to school, playing sports, no iron overload, thalassemia-free</li>
              </ul>
            </div>

            <p className="italic text-muted-foreground">
              &quot;We traveled from Qatar to India for my daughter&apos;s bone marrow transplant. It was the best decision we ever made. Not only did we save over $100,000, but the care at Apollo Chennai was world-class. The BMT team was exceptional - they explained everything in Arabic, kept us updated daily, and treated Aisha like their own daughter. Nine months later, she&apos;s cured of thalassemia and living a completely normal life.&quot; - Fatima M., mother
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Internal Links */}
      <InternalLinks
        title="Related Cancer Treatment & Transplant Resources"
        links={[
          {
            title: "Top Cancer Hospitals in India",
            href: "/hospitals",
            description: "JCI-accredited cancer centers with BMT programs"
          },
          {
            title: "Cancer Treatment Cost Guide",
            href: "/blog/cancer-treatment-cost-india-vs-world",
            description: "Compare cancer treatment costs and success rates"
          },
          {
            title: "Free Cancer Consultation",
            href: "/consultation",
            description: "Get expert advice for your BMT journey"
          }
        ]}
        variant="compact"
      />

      {/* FAQ Section */}
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>Common questions about bone marrow transplant in India</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">1. How much does bone marrow transplant cost in India compared to other countries?</h3>
              <p className="text-muted-foreground">
                Autologous BMT costs $18,000-$25,000 in India vs $80,000-$150,000 in USA (70-80% savings). Allogeneic BMT (matched sibling) costs $28,000-$40,000 in India vs $150,000-$300,000 in USA (75-85% savings). Haploidentical transplant costs $30,000-$45,000 in India vs $180,000-$350,000 in USA (80% savings). Prices include conditioning chemotherapy, stem cell collection/infusion, hospital stay (4-6 weeks in HEPA-filtered unit), supportive care, GVHD treatment if needed, and 100-day follow-up.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">2. What is the success rate of bone marrow transplants in India?</h3>
              <p className="text-muted-foreground">
                India&apos;s BMT success rates are comparable to Western countries: 75-85% for autologous BMT (lymphoma, myeloma), 70-80% for matched sibling allogeneic BMT (acute leukemia in first remission), 85-90% cure rate for thalassemia major (matched sibling, age &lt;16), and 65-75% for haploidentical transplants. Top centers like Apollo (1,500+ BMTs), Tata Memorial (1,200+ BMTs), and Fortis (900+ BMTs) are FACT-accredited and follow international protocols (EBMT, CIBMTR guidelines).
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">3. How long do I need to stay in India for bone marrow transplant?</h3>
              <p className="text-muted-foreground">
                Plan for 3-4 months total stay: 2-4 weeks pre-transplant for evaluation and conditioning chemotherapy, 4-6 weeks hospital stay post-transplant (in HEPA-filtered isolation until engraftment), and 4-8 weeks nearby monitoring (within 30 minutes of hospital for complications). You can fly home around Day +100 with doctor clearance if stable, but international patients often stay 100-120 days for safety. Arrange long-term accommodations near hospital, as family can visit daily during hospitalization.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">4. Can I find a matched donor in India if I don&apos;t have a sibling donor?</h3>
              <p className="text-muted-foreground">
                Yes, India has access to international donor registries (NMDP, DKMS, Anthony Nolan) with 30+ million registered donors worldwide. Donor search costs $2,000-$4,000 vs $15,000-$30,000 in USA. If no 10/10 matched donor found, haploidentical transplant (half-matched family member like parent, child, or sibling) is an excellent alternative with 65-75% success rates using post-transplant cyclophosphamide. Cord blood transplant is another option for pediatric patients. Donor search typically takes 3-6 months.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">5. What are the main complications of BMT and how are they managed in India?</h3>
              <p className="text-muted-foreground">
                Main complications include: 1) GVHD (graft-vs-host disease) in 30-50% of allogeneic BMT patients, managed with steroids, tacrolimus, or ruxolitinib; 2) Infections during neutropenia (bacterial, viral, fungal), prevented with prophylactic antibiotics and treated aggressively; 3) Veno-occlusive disease (VOD) in 5-10%, treated with defibrotide; 4) Mucositis requiring TPN for nutrition. India&apos;s top BMT centers have 24/7 transplant physicians, dedicated isolation units, and experience managing all complications. Mortality rates are comparable to USA/Europe (10-15% for matched sibling, 20-25% for unrelated donor).
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">6. Is bone marrow transplant in India suitable for children and elderly patients?</h3>
              <p className="text-muted-foreground">
                Yes, India performs BMT across all age groups. Pediatric BMT (for thalassemia, sickle cell, leukemia, immune deficiencies) has excellent outcomes, especially at Apollo (pediatric BMT program), Manipal (90% cure for thalassemia), and Tata Memorial (largest pediatric program). For elderly patients (60-75 years), reduced intensity conditioning (RIC) regimens minimize toxicity while achieving engraftment. Success rates are 10-20% lower than younger patients but still worthwhile for good performance status. India&apos;s experience with diverse patient populations makes it ideal for complex cases.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Sharing */}
      <SocialShare
        title="Bone Marrow Transplant India 2025: Complete BMT Cost Guide - Save 70-80%"
        url="/blog/bone-marrow-transplant-india-guide"
        description="Complete guide to bone marrow transplant (BMT) in India. Autologous, allogeneic, haploidentical stem cell transplants for leukemia, lymphoma, thalassemia. Save 70-80% at JCI-accredited centers with 75-85% success rates. Compare India vs USA/UK/UAE/Saudi prices and learn about the BMT process, recovery timeline, and real patient success stories."
      />

      {/* Related Articles */}
      <RelatedArticles articles={CANCER_RELATED_ARTICLES} />
    </BlogArticleLayout>
  );
}

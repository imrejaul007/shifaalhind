import { Metadata } from 'next';
import BlogArticleLayout from '@/components/blog/blog-article-layout';
import { Card, CardContent } from '@/components/ui/card';
import { InternalLinks } from '@/components/seo/internal-links';
import { FAQSchema } from '@/components/seo/faq-schema-client';
import { SocialShare } from '@/components/blog/social-share';
import { RelatedArticles, DENTAL_RELATED_ARTICLES } from '@/components/blog/related-articles';
import { BreadcrumbSchema } from '@/components/seo/breadcrumb-schema';
import { ArticleSchema, DEFAULT_AUTHOR, DEFAULT_PUBLISHER } from '@/components/seo/article-schema';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Medical Visa India 2025 | Complete Guide - Easy Application, Requirements & Process',
  description: 'Complete guide to Indian medical visa for medical tourism. Online application in 3-5 days, visa on arrival option, required documents, fees, extension process. Step-by-step instructions for GCC, USA, UK patients.',
  keywords: [
    'medical visa india',
    'india medical visa application',
    'medical visa india online',
    'medical visa india requirements',
    'medical attendant visa india',
    'india medical visa for uae',
    'india medical visa for saudi',
    'medical visa india fees',
    'التأشيرة الطبية للهند',
    'تأشيرة العلاج في الهند',
  ],
  alternates: {
    canonical: 'https://shifaalhind.onrender.com/en/blog/medical-visa-india-complete-guide',
    languages: {
      'en-US': 'https://shifaalhind.onrender.com/en/blog/medical-visa-india-complete-guide',
      'ar-SA': 'https://shifaalhind.onrender.com/ar/blog/medical-visa-india-complete-guide',
      'x-default': 'https://shifaalhind.onrender.com/en/blog/medical-visa-india-complete-guide',
    },
  },
};

export default function MedicalVisaIndiaGuidePage() {
  return (
    <BlogArticleLayout
      title="Medical Visa India 2025: Complete Application Guide"
      excerpt="Comprehensive guide to Indian medical visa for medical tourists. Learn about online application (3-5 days), visa on arrival, required documents, fees, medical attendant visa, extension process, and country-specific requirements."
      author="Shifa AlHind Medical Team"
      publishedDate="October 2025"
      lastUpdated="October 2025"
      readTime="16 min"
      breadcrumbTitle="Medical Visa India Guide"
    >
      {/* Breadcrumb Schema for SEO */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://shifaalhind.onrender.com' },
        { name: 'Blog', url: 'https://shifaalhind.onrender.com/blog' },
        { name: 'Medical Visa India - Complete Application Guide 2025', url: 'https://shifaalhind.onrender.com/blog/medical-visa-india-complete-guide' }
      ]} />

      {/* Article Schema for SEO */}
      <ArticleSchema
        headline="Medical Visa India - Complete Application Guide 2025"
        description="Complete guide to medical visa for India including e-visa process, requirements, costs, and step-by-step application."
        image="https://shifaalhind.onrender.com/images/blog/medical-visa.jpg"
        datePublished="2025-10-01"
        dateModified="2025-10-01"
        author={DEFAULT_AUTHOR}
        publisher={DEFAULT_PUBLISHER}
        url="https://shifaalhind.onrender.com/blog/medical-visa-india-complete-guide"
      />

      {/* Introduction */}
      <Card>
        <CardContent className="pt-6">
          <p className="text-lg leading-relaxed mb-4">
            Planning medical treatment in India? The <strong>Indian medical visa</strong> is specifically designed for
            international patients seeking medical treatment at recognized Indian hospitals. Getting a medical visa is
            <strong> simple, fast (3-5 days online), and affordable</strong>, making India one of the most accessible
            destinations for medical tourism.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Over <strong>500,000 international patients</strong> receive Indian medical visas annually, with an approval
            rate of over 95%. The Indian government has streamlined the process with <strong>online applications, visa on
            arrival for 70+ countries</strong>, and special provisions for medical attendants (family members).
          </p>
          <p className="text-lg leading-relaxed">
            This comprehensive guide covers everything you need to know: eligibility, application process (online and on
            arrival), required documents, fees, validity, extension process, medical attendant visa, and country-specific
            information for GCC, USA, UK, and other nations.
          </p>
        </CardContent>
      </Card>

      {/* What is Medical Visa */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">What is an Indian Medical Visa?</h2>

          <p className="text-muted-foreground mb-4">
            An Indian <strong>Medical Visa (M Visa)</strong> is a special category visa issued to foreign nationals
            traveling to India for medical treatment at recognized hospitals, clinics, or Ayurvedic centers. It allows
            patients to enter India for the sole purpose of receiving medical care.
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Key Features:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Validity:</strong> 60 days from date of arrival (triple entry)</li>
                <li><strong>Entries allowed:</strong> 3 entries during validity period</li>
                <li><strong>Extension:</strong> Can be extended up to 1 year for ongoing treatment</li>
                <li><strong>Companion visa:</strong> Up to 2 medical attendants can accompany patient</li>
                <li><strong>Processing time:</strong> 3-5 business days (online), instant (on arrival)</li>
                <li><strong>Cost:</strong> $80 (varies by nationality and application method)</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Who Needs a Medical Visa?</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>International patients seeking medical treatment in India</li>
                <li>Patients undergoing surgery, cancer treatment, transplants, IVF, etc.</li>
                <li>Patients seeking alternative medicine (Ayurveda, Yoga therapy)</li>
                <li>Patients requiring follow-up treatment after previous visits</li>
                <li>Patients from 180+ countries (eligibility varies)</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Difference from Tourist Visa:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Purpose:</strong> Medical visa is specifically for medical treatment (tourist visa is for sightseeing)</li>
                <li><strong>Hospital requirement:</strong> Medical visa requires hospital invitation letter</li>
                <li><strong>Extension:</strong> Medical visa can be extended up to 1 year (tourist visa max 6 months)</li>
                <li><strong>Priority processing:</strong> Medical visas get priority review</li>
                <li><strong>Attendant visa:</strong> Medical visa allows family to accompany (tourist visa does not)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Types of Medical Visa */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">Types of Medical Visa for India</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">1. e-Medical Visa (Online Application)</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Best for:</strong> Most international patients (180+ countries eligible)
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Processing time:</strong> 3-5 business days</li>
                <li><strong>Cost:</strong> $80 (varies by nationality)</li>
                <li><strong>Validity:</strong> 60 days from arrival date</li>
                <li><strong>Entries:</strong> Triple entry (can enter India 3 times)</li>
                <li><strong>Application:</strong> 100% online at indianvisaonline.gov.in</li>
                <li><strong>Documents required:</strong> Passport, photo, hospital letter</li>
                <li><strong>Extension:</strong> Can be extended to 1 year through FRRO</li>
              </ul>
            </div>

            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">2. Medical Visa on Arrival (MVoA)</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Best for:</strong> UAE, Japan, South Korea, and select countries (70+ countries eligible)
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Processing time:</strong> Instant (at airport immigration)</li>
                <li><strong>Cost:</strong> $80-100 (paid at airport)</li>
                <li><strong>Validity:</strong> 60 days from arrival date</li>
                <li><strong>Entries:</strong> Triple entry</li>
                <li><strong>Application:</strong> No prior application needed (bring hospital letter)</li>
                <li><strong>Available airports:</strong> Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Kolkata (6 airports)</li>
                <li><strong>Documents required:</strong> Passport, return ticket, hospital invitation, proof of funds</li>
              </ul>
            </div>

            <div className="border-l-4 border-pink-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">3. Medical Attendant Visa (MX Visa)</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Best for:</strong> Family members or caregivers accompanying medical visa holders
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Limit:</strong> Up to 2 medical attendants per patient</li>
                <li><strong>Processing time:</strong> Same as medical visa (3-5 days online)</li>
                <li><strong>Cost:</strong> $80 (same as medical visa)</li>
                <li><strong>Validity:</strong> Same as patient&apos;s medical visa (60 days, extendable)</li>
                <li><strong>Requirement:</strong> Patient must have valid medical visa</li>
                <li><strong>Application:</strong> Online (linked to patient&apos;s visa application)</li>
                <li><strong>Relationship:</strong> Can be spouse, parent, child, sibling, or hired caregiver</li>
              </ul>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">4. Regular Medical Visa (Embassy/Consulate)</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Best for:</strong> Nationalities not eligible for e-visa or visa on arrival, or long-term treatment
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Processing time:</strong> 7-14 business days (varies by embassy)</li>
                <li><strong>Cost:</strong> Varies by nationality and embassy</li>
                <li><strong>Validity:</strong> Can be issued for 6 months to 1 year initially</li>
                <li><strong>Entries:</strong> Multiple entry</li>
                <li><strong>Application:</strong> In-person at Indian Embassy/Consulate</li>
                <li><strong>Required for:</strong> Pakistan, Afghanistan, China, and some African nations</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Online Application Process */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">e-Medical Visa Online Application Process (Step-by-Step)</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Step 1: Get Hospital Invitation Letter (Before Applying)</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Required document from Indian hospital.</strong> We provide this FREE when you book consultation.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Contact hospital/medical tourism facilitator (like Shifa AlHind)</li>
                <li>Share your medical reports and passport copy</li>
                <li>Hospital issues invitation letter on letterhead (usually within 1-2 days)</li>
                <li>Letter must include: Patient name, passport number, diagnosis, proposed treatment, expected dates</li>
                <li>Letter must be signed by hospital medical superintendent or authorized officer</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Step 2: Visit Indian Visa Online Portal</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Official website:</strong> <span className="text-blue-600">indianvisaonline.gov.in/evisa/</span>
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Click on &quot;e-Medical Visa&quot; option</li>
                <li>Create account or login if returning patient</li>
                <li>Select nationality and current country of residence</li>
                <li>Confirm you have hospital invitation letter</li>
                <li><strong>Warning:</strong> Use only official .gov.in website (beware of fake visa sites)</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Step 3: Fill Online Application Form</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Takes 15-20 minutes.</strong> Have passport, photo, and hospital letter ready.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Personal details:</strong> Full name (as in passport), date of birth, nationality, gender</li>
                <li><strong>Passport details:</strong> Passport number, issue/expiry date, place of issue</li>
                <li><strong>Contact details:</strong> Email, phone number, current address</li>
                <li><strong>Professional details:</strong> Occupation, employer (if applicable)</li>
                <li><strong>Arrival details:</strong> Expected date of arrival, port of entry (airport), duration of stay</li>
                <li><strong>Hospital details:</strong> Hospital name, address, contact person, reference number</li>
                <li><strong>Treatment details:</strong> Type of medical treatment, tentative duration</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Step 4: Upload Required Documents</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>All documents must be clear scans/photos.</strong> Common rejection reason: poor quality documents.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Passport copy:</strong> Bio page (with photo and details), min 6 months validity, 2 blank pages</li>
                <li><strong>Recent photograph:</strong> 2&quot; × 2&quot; (5cm × 5cm), white background, taken within last 3 months</li>
                <li><strong>Hospital invitation letter:</strong> On hospital letterhead, signed and stamped (PDF or JPG)</li>
                <li><strong>Optional:</strong> Medical reports (helpful but not mandatory for visa approval)</li>
                <li><strong>File format:</strong> PDF or JPG, max 1MB per file</li>
              </ul>
            </div>

            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Step 5: Pay Visa Fee Online</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Secure payment via credit/debit card.</strong> Fee varies by nationality.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Most nationalities:</strong> $80 USD</li>
                <li><strong>USA citizens:</strong> $100 USD</li>
                <li><strong>UK citizens:</strong> $80 USD</li>
                <li><strong>GCC citizens:</strong> $80 USD (UAE, Saudi, Qatar, Kuwait, Oman, Bahrain)</li>
                <li><strong>Payment methods:</strong> Visa, MasterCard, American Express, Diners Club</li>
                <li><strong>Receipt:</strong> Save payment confirmation email (needed for tracking)</li>
              </ul>
            </div>

            <div className="border-l-4 border-pink-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Step 6: Submit Application & Wait for Approval</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Processing time: 3-5 business days.</strong> Check status online daily.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Application ID will be generated (save this number)</li>
                <li>You&apos;ll receive email confirmation of submission</li>
                <li>Track status at: <span className="text-blue-600">indianvisaonline.gov.in/evisa/statusEnquiry</span></li>
                <li>Status will show: &quot;Under Process&quot; → &quot;Granted&quot;</li>
                <li><strong>Approval rate:</strong> 95%+ for valid applications with proper documents</li>
                <li>If rejected, reapply with corrected documents (no refund on rejection)</li>
              </ul>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Step 7: Receive ETA (Electronic Travel Authorization)</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Visa approval sent via email.</strong> Print and carry with passport.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Approved visa (ETA) will be emailed to you</li>
                <li><strong>Print 2 copies:</strong> One for Indian immigration, one for your records</li>
                <li>No need to visit embassy or affix sticker in passport</li>
                <li>Carry ETA printout along with passport when traveling to India</li>
                <li>Immigration officer will stamp visa at airport upon arrival</li>
                <li>Visa is valid for 60 days from date of first entry (not application date)</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2">
              💡 Pro Tip: Apply Early
            </p>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              Apply for medical visa at least <strong>2 weeks before</strong> your planned travel date to account for
              processing delays, document issues, or rejections. This gives you time to reapply if needed and ensures
              stress-free travel planning.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Visa on Arrival */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">Medical Visa on Arrival (MVoA)</h2>

          <p className="text-muted-foreground mb-4">
            Citizens of <strong>70+ countries</strong> can get medical visa on arrival at 6 major Indian airports without
            prior online application. This is the <strong>fastest option</strong> (instant approval at airport), but requires
            proper documentation.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Eligible Countries (Selected):</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>GCC:</strong> UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain</li>
                <li><strong>Asia:</strong> Japan, South Korea, Singapore, Thailand, Philippines</li>
                <li><strong>Europe:</strong> Germany, France, Italy, Spain, Netherlands, Belgium, Switzerland</li>
                <li><strong>Others:</strong> USA, UK, Canada, Australia, New Zealand</li>
                <li><strong>Full list:</strong> Check indianvisaonline.gov.in for complete eligibility</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Airports with Visa on Arrival:</h3>
              <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                <li>Mumbai (Chhatrapati Shivaji International Airport)</li>
                <li>Delhi (Indira Gandhi International Airport)</li>
                <li>Bangalore (Kempegowda International Airport)</li>
                <li>Chennai (Chennai International Airport)</li>
                <li>Hyderabad (Rajiv Gandhi International Airport)</li>
                <li>Kolkata (Netaji Subhas Chandra Bose International Airport)</li>
              </ol>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Documents Required at Airport:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Valid passport:</strong> Min 6 months validity, 2 blank pages</li>
                <li><strong>Return ticket:</strong> Confirmed return/onward flight booking</li>
                <li><strong>Hospital invitation letter:</strong> Original or printed copy on hospital letterhead</li>
                <li><strong>Proof of funds:</strong> Bank statement showing sufficient funds (min $2,000)</li>
                <li><strong>Recent photograph:</strong> 2 passport-size photos (2&quot; × 2&quot;)</li>
                <li><strong>Visa fee:</strong> $80-100 in cash (USD) or credit/debit card</li>
                <li><strong>Accommodation proof:</strong> Hotel booking confirmation (helpful but not mandatory)</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Process at Airport:</h3>
              <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                <li>After landing, proceed to &quot;Visa on Arrival&quot; counter (before immigration)</li>
                <li>Submit documents to immigration officer</li>
                <li>Fill visa application form (provided at counter, takes 5-10 minutes)</li>
                <li>Pay visa fee ($80-100) by cash or card</li>
                <li>Immigration officer verifies documents and hospital letter</li>
                <li>Visa sticker affixed in passport (usually takes 15-30 minutes)</li>
                <li>Proceed to regular immigration queue with stamped visa</li>
              </ol>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
              ⚠️ Important: Visa on Arrival Limitations
            </p>
            <ul className="space-y-1 text-sm text-yellow-700 dark:text-yellow-300">
              <li>• Available only at 6 airports (not all Indian airports)</li>
              <li>• Long queues during peak hours (30-60 min wait possible)</li>
              <li>• Rejection risk if documents incomplete (then you must return home)</li>
              <li>• <strong>Recommendation:</strong> Apply online before travel if possible to avoid airport hassles</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Visa Extension */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">Medical Visa Extension Process</h2>

          <p className="text-muted-foreground mb-4">
            If your treatment requires more than 60 days, you can <strong>extend your medical visa up to 1 year</strong>
            through the Foreigners Regional Registration Office (FRRO). Extension must be applied <strong>before your
            current visa expires</strong>.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">When to Apply for Extension:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Apply at least <strong>7-10 days before</strong> your current visa expires</li>
                <li>Do not wait until last day (processing takes 3-5 days)</li>
                <li>Overstaying visa can result in fines (₹100-500/day) and future visa ban</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Where to Apply:</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>FRRO (Foreigners Regional Registration Office)</strong> in the city where you&apos;re receiving treatment:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Mumbai FRRO: Annexe-2, Office of the Commissioner of Police, Dadabhai Naoroji Road</li>
                <li>Delhi FRRO: East Block-VIII, Sector-1, R.K. Puram</li>
                <li>Bangalore FRRO: 2nd Floor, Shanthinagar Police Station Complex</li>
                <li>Chennai FRRO: Haddows Road, Shastri Bhavan Annexe</li>
                <li><strong>Or apply online:</strong> indianfrro.gov.in/eservices (some cities)</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Required Documents for Extension:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Passport:</strong> Original + photocopy (bio page and current visa page)</li>
                <li><strong>Current visa:</strong> Copy of current medical visa (ETA printout)</li>
                <li><strong>Extension application form:</strong> Available at FRRO office or online</li>
                <li><strong>Updated hospital letter:</strong> From treating hospital explaining need for extension, expected duration</li>
                <li><strong>Medical reports:</strong> Latest reports showing ongoing treatment/recovery</li>
                <li><strong>Proof of stay:</strong> Hotel bills or residential proof</li>
                <li><strong>Passport-size photos:</strong> 2 recent photos (2&quot; × 2&quot;)</li>
                <li><strong>Extension fee:</strong> ₹300-500 (varies by extension duration)</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Extension Duration:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>First extension:</strong> Usually granted for 3-6 months (based on hospital letter)</li>
                <li><strong>Maximum total duration:</strong> 1 year from initial entry</li>
                <li><strong>Multiple extensions:</strong> Possible, apply each time before expiry</li>
                <li><strong>Long-term treatment:</strong> For cancer, transplants, complex surgeries requiring follow-up</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2">
              💡 We Help with Extensions
            </p>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              Shifa AlHind assists patients with visa extension process: We prepare updated hospital letters, help fill
              FRRO forms, accompany you to FRRO office if needed, and ensure smooth extension approval. Contact us 10-14
              days before visa expiry.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Internal Links */}
      <InternalLinks
        title="Related Resources"
        links={[
          {
            title: 'Dubai to India Medical Tourism',
            href: '/blog/dubai-to-india-medical-tourism',
            description: 'Complete guide for UAE patients',
          },
          {
            title: 'Riyadh to India Healthcare',
            href: '/blog/riyadh-to-india-healthcare',
            description: 'Guide for Saudi Arabian patients',
          },
          {
            title: 'Free Consultation',
            href: '/consultation',
            description: 'Get hospital letter for visa application',
          },
        ]}
        variant="compact"
      />

            {/* FAQ Schema for Rich Snippets */}
      <FAQSchema faqs={[
        { question: "How long does it take to get medical visa for India?", answer: "e-Medical Visa: 3-5 days online (fastest), Medical Visa on Arrival: Instant at 6 major airports, Regular Medical Visa: 7-10 days at embassy. e-Medical Visa recommended for GCC patients - apply at indianvisaonline.gov.in, receive approval via email, valid for 60 days triple entry." },
        { question: "How much does Indian medical visa cost?", answer: "e-Medical Visa: $80 (AED 294, SAR 300) online payment via credit card. Medical Visa on Arrival: $80 cash/card at airport. Regular Medical Visa (embassy): $50-120 depending on nationality and duration. Medical attendant visa (companion): $80 (up to 2 attendants allowed)." },
        { question: "Can my family accompany me on medical visa?", answer: "Yes, up to 2 family members can apply for Medical Attendant Visa (linked to patient visa). Same process as e-Medical Visa, costs $80 per person, approved within 3-5 days. Family can stay entire treatment duration with patient. Extension possible up to 1 year via FRRO office." },
        { question: "What documents do I need for Indian medical visa?", answer: "Required: Valid passport (6 months validity), Recent photo (white background), Hospital letter (treatment details, estimated cost, duration), Round-trip flight booking, Proof of funds ($50-100/day). Optional but helpful: Medical reports, doctor referral letter, travel insurance. Upload documents during online application." }
      ]} />

      {/* FAQ Section */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions (Medical Visa India)</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">1. How long does it take to get an Indian medical visa?</h3>
              <p className="text-muted-foreground">
                <strong>3-5 business days for e-Medical Visa</strong> (online application). Visa on arrival is instant
                (at airport immigration). Embassy/consulate applications take 7-14 days. Apply at least 2 weeks before
                travel to be safe.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">2. What documents do I need for Indian medical visa?</h3>
              <p className="text-muted-foreground">
                <strong>Required:</strong> Valid passport (6 months validity), recent photo (2&quot; × 2&quot;), hospital
                invitation letter on letterhead. <strong>Optional but helpful:</strong> Medical reports, proof of funds,
                return ticket booking. We provide the hospital invitation letter FREE when you book consultation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">3. How much does Indian medical visa cost?</h3>
              <p className="text-muted-foreground">
                <strong>$80 for most nationalities</strong> (e-Medical Visa). $100 for US citizens. Visa on arrival:
                $80-100 (paid at airport). Medical attendant visa: Same fee as medical visa. Extension fee: ₹300-500
                (approx $5-7). Total visa cost is very affordable compared to other countries.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">4. Can my family accompany me on medical visa?</h3>
              <p className="text-muted-foreground">
                <strong>Yes, up to 2 medical attendants</strong> can accompany you on Medical Attendant Visa (MX Visa).
                Family members apply online, same process as your medical visa. Their visa validity and duration matches
                yours. They can be spouse, parent, child, sibling, or hired caregiver.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">5. What if my treatment takes longer than 60 days?</h3>
              <p className="text-muted-foreground">
                <strong>You can extend medical visa up to 1 year.</strong> Apply for extension at FRRO (Foreigners
                Regional Registration Office) 7-10 days before current visa expires. Need updated hospital letter
                explaining treatment duration. Extension usually granted for 3-6 months at a time. We help with extension
                process.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">6. Do I need a medical visa for short treatments like dental work?</h3>
              <p className="text-muted-foreground">
                <strong>Yes, medical visa is recommended for all medical treatments,</strong> even short ones like dental
                implants, laser eye surgery, or minor procedures. While some patients use tourist visa for very short
                treatments (2-3 days), medical visa ensures you have proper documentation if complications arise and
                allows visa extension if needed. Medical visa also makes hospital admission smoother.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">7. What happens if my medical visa application is rejected?</h3>
              <p className="text-muted-foreground">
                <strong>Rejection rate is low (under 5%)</strong> with proper documents. Common rejection reasons:
                incomplete hospital letter, poor photo quality, passport validity issues. If rejected, you can reapply
                immediately after fixing the issue. <strong>No refund on visa fee if rejected.</strong> To avoid rejection,
                ensure all documents are clear, complete, and accurate before submitting.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">8. Can I work or study in India on a medical visa?</h3>
              <p className="text-muted-foreground">
                <strong>No, medical visa is strictly for medical treatment only.</strong> You cannot work, study, or engage
                in business activities. Violating visa conditions can result in deportation and future visa ban. Medical visa
                holders can only receive medical treatment and stay in India for recovery. If you need to work/study, apply
                for appropriate visa category after treatment.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Share */}
      <SocialShare
        title="Medical Visa India 2025: Complete Application Guide"
        url="/blog/medical-visa-india-complete-guide"
        description="Complete guide to Indian medical visa. Online application in 3-5 days, visa on arrival, required documents, fees, extension process. Step-by-step instructions."
      />

      {/* Related Articles */}
      <RelatedArticles articles={DENTAL_RELATED_ARTICLES} />
    </BlogArticleLayout>
  );
}

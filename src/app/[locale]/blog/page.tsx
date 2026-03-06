export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, User, ArrowRight, Tag, Heart, Plane, Activity, Baby, Building2, TrendingUp, MapPin } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return generateSEOMetadata({
    title_en: 'Medical Tourism Blog - Expert Guides & Resources | Shifa AlHind',
    title_ar: 'مدونة السياحة العلاجية - أدلة الخبراء والموارد | شفاء الهند',
    description_en: 'Comprehensive medical tourism guides for GCC patients. Cost comparisons, treatment guides, hospital selection tips, and patient success stories from India.',
    description_ar: 'أدلة شاملة للسياحة العلاجية لمرضى دول الخليج. مقارنات التكاليف، أدلة العلاج، نصائح اختيار المستشفيات، وقصص نجاح المرضى من الهند.',
    locale,
    path: '/blog',
  });
}

// All 24 SEO-optimized blog articles (20 treatment/travel guides + 4 city hospital guides)
const blogArticles = [
  {
    id: 1,
    title: 'Heart Surgery Cost in India vs USA, UK, UAE & Saudi Arabia: Complete 2025 Guide',
    excerpt: 'Discover how much you can save on heart surgery in India. Complete cost breakdown for CABG, valve replacement, and angioplasty compared to USA, UK, UAE, and Saudi Arabia. Save 60-80% with world-class care.',
    slug: 'heart-surgery-cost-comparison-india-vs-world',
    category: 'Cost Comparison',
    icon: Heart,
    publishedDate: 'October 2025',
    readTime: '12 min read',
    tags: ['Heart Surgery', 'Cost Comparison', 'CABG'],
  },
  {
    id: 2,
    title: 'Medical Tourism India: Complete 2025 Guide for UAE Patients',
    excerpt: 'Complete step-by-step guide for UAE patients seeking medical treatment in India. Visa process, flights, accommodation, cost savings, and real patient success stories from Dubai and Abu Dhabi.',
    slug: 'medical-tourism-india-uae-patients-guide',
    category: 'Destination Guide',
    icon: Plane,
    publishedDate: 'October 2025',
    readTime: '15 min read',
    tags: ['UAE Patients', 'Travel Guide', 'Visa'],
  },
  {
    id: 3,
    title: 'Knee Replacement Cost in India vs World: 2025 Price Comparison',
    excerpt: 'Compare knee replacement costs in India vs USA, UK, UAE, and Saudi Arabia. Total knee, partial, bilateral, and revision surgery prices. Save up to $25,000 with top orthopedic surgeons.',
    slug: 'knee-replacement-cost-india-vs-world',
    category: 'Cost Comparison',
    icon: Activity,
    publishedDate: 'October 2025',
    readTime: '14 min read',
    tags: ['Knee Replacement', 'Orthopedic'],
  },
  {
    id: 4,
    title: 'IVF & Fertility Treatment in India: Complete 2025 Guide',
    excerpt: 'Complete IVF cost guide for GCC patients. Success rates by age, top fertility clinics, ICSI, egg donation, and frozen embryo transfer prices. Real patient success stories.',
    slug: 'ivf-fertility-treatment-india-complete-guide',
    category: 'Treatment Guide',
    icon: Baby,
    publishedDate: 'October 2025',
    readTime: '16 min read',
    tags: ['IVF', 'Fertility', 'Success Rates'],
  },
  {
    id: 5,
    title: 'How to Choose the Best Hospital in India for Medical Tourism',
    excerpt: '10 essential criteria for selecting the right hospital in India. JCI accreditation guide, top hospital chains, common mistakes to avoid, and 20+ questions to ask.',
    slug: 'how-to-choose-best-hospital-india',
    category: 'Hospital Guide',
    icon: Building2,
    publishedDate: 'October 2025',
    readTime: '13 min read',
    tags: ['Hospital Selection', 'JCI Accreditation'],
  },
  {
    id: 6,
    title: 'Cancer Treatment Cost in India vs USA, UK, UAE: Complete 2025 Guide',
    excerpt: 'Compare cancer treatment costs in India vs worldwide. Chemotherapy, radiation, surgery, and targeted therapy prices. Save 60-80% with world-class oncology care.',
    slug: 'cancer-treatment-cost-india-vs-world',
    category: 'Cost Comparison',
    icon: Activity,
    publishedDate: 'October 2025',
    readTime: '14 min read',
    tags: ['Cancer Treatment', 'Oncology'],
  },
  {
    id: 7,
    title: 'Dental Tourism India: Complete Guide for GCC Patients',
    excerpt: 'Complete dental tourism guide for GCC patients. Implants, veneers, root canals, and cosmetic dentistry. Save up to 75% with top dental clinics.',
    slug: 'dental-tourism-india-complete-guide',
    category: 'Treatment Guide',
    icon: Activity,
    publishedDate: 'October 2025',
    readTime: '12 min read',
    tags: ['Dental Tourism', 'Implants'],
  },
  {
    id: 8,
    title: 'Diabetes Treatment in India: Complete 2025 Guide',
    excerpt: 'Complete diabetes treatment guide. Bariatric surgery for diabetes reversal, continuous glucose monitoring, insulin pumps, and comprehensive diabetes management.',
    slug: 'diabetes-treatment-india-guide',
    category: 'Treatment Guide',
    icon: Activity,
    publishedDate: 'October 2025',
    readTime: '11 min read',
    tags: ['Diabetes', 'Bariatric Surgery'],
  },
  {
    id: 9,
    title: 'Liver Transplant in India: Complete Cost & Hospital Guide 2025',
    excerpt: 'Complete liver transplant guide for GCC patients. Living donor vs deceased donor costs, top transplant centers, success rates, and patient stories.',
    slug: 'liver-transplant-india-cost-guide',
    category: 'Cost Comparison',
    icon: Activity,
    publishedDate: 'October 2025',
    readTime: '15 min read',
    tags: ['Liver Transplant', 'Organ Transplant'],
  },
  {
    id: 10,
    title: 'Spine Surgery India: Complete Cost & Hospitals Guide 2025',
    excerpt: 'Complete spine surgery guide. Spinal fusion, disc replacement, minimally invasive procedures, and robotic spine surgery. Top neurosurgeons and orthopedic specialists.',
    slug: 'spine-surgery-india-cost-hospitals',
    category: 'Cost Comparison',
    icon: Activity,
    publishedDate: 'October 2025',
    readTime: '13 min read',
    tags: ['Spine Surgery', 'Neurosurgery'],
  },
  {
    id: 11,
    title: 'Cosmetic Surgery Cost in India: Complete 2025 Guide',
    excerpt: 'Complete cosmetic surgery cost guide. Rhinoplasty, liposuction, breast augmentation, facelift, and tummy tuck. Save 60-75% with top plastic surgeons.',
    slug: 'cosmetic-surgery-cost-india',
    category: 'Cost Comparison',
    icon: Activity,
    publishedDate: 'October 2025',
    readTime: '14 min read',
    tags: ['Cosmetic Surgery', 'Rhinoplasty'],
  },
  {
    id: 12,
    title: 'Bariatric Surgery India: Complete Cost & Guide 2025',
    excerpt: 'Complete bariatric surgery guide. Gastric bypass, sleeve gastrectomy, gastric band, and revision surgery. 85% diabetes remission rate with top bariatric centers.',
    slug: 'bariatric-surgery-india-cost-guide',
    category: 'Treatment Guide',
    icon: Activity,
    publishedDate: 'October 2025',
    readTime: '13 min read',
    tags: ['Bariatric Surgery', 'Weight Loss'],
  },
  {
    id: 13,
    title: 'Kidney Transplant in India: Complete Cost & Hospital Guide 2025',
    excerpt: 'Complete kidney transplant guide. Living donor, deceased donor, pediatric, and ABO incompatible transplants. 95-98% success rates with top nephrology centers.',
    slug: 'kidney-transplant-cost-india-guide',
    category: 'Cost Comparison',
    icon: Activity,
    publishedDate: 'October 2025',
    readTime: '14 min read',
    tags: ['Kidney Transplant', 'Organ Transplant'],
  },
  {
    id: 14,
    title: 'Bone Marrow Transplant India: Complete BMT Guide 2025',
    excerpt: 'Complete BMT guide for leukemia, lymphoma, and thalassemia. Autologous, allogeneic, and haploidentical transplants. Success rates and top BMT centers.',
    slug: 'bone-marrow-transplant-india-guide',
    category: 'Treatment Guide',
    icon: Activity,
    publishedDate: 'October 2025',
    readTime: '15 min read',
    tags: ['BMT', 'Blood Cancer'],
  },
  {
    id: 15,
    title: 'Neurosurgery in India: Complete Cost & Hospitals Guide 2025',
    excerpt: 'Complete neurosurgery guide. Brain tumor, aneurysm, Gamma Knife, CyberKnife, and minimally invasive procedures. Top neuroscience centers.',
    slug: 'neurosurgery-india-cost-hospitals',
    category: 'Cost Comparison',
    icon: Activity,
    publishedDate: 'October 2025',
    readTime: '13 min read',
    tags: ['Neurosurgery', 'Brain Surgery'],
  },
  {
    id: 16,
    title: 'Dubai to India Medical Tourism: Complete 2025 Guide',
    excerpt: 'Complete guide for Dubai patients. Direct flights, medical visa, cost savings, and top hospitals with UAE patient support. Save 60-80% on treatment.',
    slug: 'dubai-to-india-medical-tourism',
    category: 'Destination Guide',
    icon: Plane,
    publishedDate: 'October 2025',
    readTime: '16 min read',
    tags: ['Dubai Patients', 'UAE'],
  },
  {
    id: 17,
    title: 'Riyadh to India Healthcare: Complete Guide for Saudi Patients 2025',
    excerpt: 'Complete guide for Riyadh patients. Direct flights, e-Medical visa, cost savings in SAR, and top hospitals with Arabic coordinators.',
    slug: 'riyadh-to-india-healthcare',
    category: 'Destination Guide',
    icon: Plane,
    publishedDate: 'October 2025',
    readTime: '15 min read',
    tags: ['Riyadh Patients', 'Saudi Arabia'],
  },
  {
    id: 18,
    title: 'Medical Visa India: Complete Application Guide 2025',
    excerpt: 'Complete medical visa guide. E-Medical visa, visa on arrival, medical attendant visa, and extension process. Application guide for GCC patients.',
    slug: 'medical-visa-india-complete-guide',
    category: 'Travel Guide',
    icon: Plane,
    publishedDate: 'October 2025',
    readTime: '18 min read',
    tags: ['Medical Visa', 'Visa Guide'],
  },
  {
    id: 19,
    title: 'Medical Tourism Insurance India: Complete Guide 2025',
    excerpt: 'Complete medical tourism insurance guide. Post-procedure complications, emergency care, evacuation coverage, and best insurance providers.',
    slug: 'medical-tourism-insurance-india',
    category: 'Travel Guide',
    icon: Activity,
    publishedDate: 'October 2025',
    readTime: '10 min read',
    tags: ['Insurance', 'Travel'],
  },
  {
    id: 20,
    title: 'Best Time to Visit India for Medical Tourism: Complete 2025 Guide',
    excerpt: 'Complete seasonal guide for medical tourists. Best months by city, weather considerations, festival calendar, and booking tips for optimal recovery.',
    slug: 'best-time-visit-india-medical-tourism',
    category: 'Travel Guide',
    icon: Calendar,
    publishedDate: 'October 2025',
    readTime: '12 min read',
    tags: ['Travel Planning', 'Weather'],
  },
  {
    id: 21,
    title: 'Best Hospitals in Mumbai for Medical Tourism: Complete 2025 Guide',
    excerpt: 'Top 10 JCI-accredited hospitals in Mumbai for international patients. Apollo Navi Mumbai, Fortis Mulund, Tata Memorial, Kokilaben Ambani. Compare costs, specialties, and success rates.',
    slug: 'best-hospitals-mumbai-medical-tourism',
    category: 'Hospital Guide',
    icon: MapPin,
    publishedDate: 'October 2025',
    readTime: '14 min read',
    tags: ['Mumbai Hospitals', 'JCI Accredited'],
  },
  {
    id: 22,
    title: 'Best Hospitals in Delhi NCR for Medical Tourism: Complete 2025 Guide',
    excerpt: 'Top 10 hospitals in Delhi NCR for international patients. AIIMS, Medanta, Fortis, Max Super Speciality, BLK-Max. World-class infrastructure and affordable government hospital options.',
    slug: 'best-hospitals-delhi-medical-tourism',
    category: 'Hospital Guide',
    icon: MapPin,
    publishedDate: 'October 2025',
    readTime: '15 min read',
    tags: ['Delhi Hospitals', 'NABH Accredited'],
  },
  {
    id: 23,
    title: 'Best Hospitals in Bangalore for Medical Tourism: Complete 2025 Guide',
    excerpt: 'Top 10 hospitals in Bangalore for medical tourists. Narayana Health City, Apollo, Manipal, BGS Gleneagles, Columbia Asia. Innovation hub with year-round perfect weather.',
    slug: 'best-hospitals-bangalore-medical-tourism',
    category: 'Hospital Guide',
    icon: MapPin,
    publishedDate: 'October 2025',
    readTime: '14 min read',
    tags: ['Bangalore Hospitals', 'Innovation'],
  },
  {
    id: 24,
    title: 'Best Hospitals in Chennai for Medical Tourism: Complete 2025 Guide',
    excerpt: 'Top 10 hospitals in Chennai for international patients. Apollo Chennai, Global Health City, Fortis Malar, MIOT International, Sankara Nethralaya. Medical heritage capital and organ transplant leader.',
    slug: 'best-hospitals-chennai-medical-tourism',
    category: 'Hospital Guide',
    icon: MapPin,
    publishedDate: 'October 2025',
    readTime: '13 min read',
    tags: ['Chennai Hospitals', 'Organ Transplant'],
  },
];

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const content = {
    en: {
      hero: {
        title: 'Medical Tourism Resources & Expert Guides',
        subtitle: 'Comprehensive guides on treatment costs, hospital selection, patient experiences, and everything you need to know about medical tourism to India from GCC countries',
        stats: {
          words: 'Words of Content',
          guides: 'Expert Guides',
          topics: 'Topics Covered',
        },
      },
      categories: [
        { name: 'All Articles', count: 24 },
        { name: 'Cost Comparison', count: 7 },
        { name: 'Treatment Guide', count: 5 },
        { name: 'Destination Guide', count: 4 },
        { name: 'Hospital Guide', count: 4 },
        { name: 'Travel Guide', count: 4 },
      ],
      featured: {
        title: 'Featured Guide',
        author: 'Shifa AlHind Team',
        readGuide: 'Read Complete Guide',
      },
      allArticles: {
        title: 'All Guides & Resources',
        subtitle: 'Expert insights to help you make informed decisions about your medical journey',
        readFull: 'Read Full Guide',
      },
      whyRead: {
        title: 'Why Read Our Guides?',
        reasons: [
          {
            title: 'Data-Driven Insights',
            description: 'Real cost comparisons, success rates, and statistics from trusted sources',
          },
          {
            title: 'Real Patient Stories',
            description: 'Actual experiences from GCC patients who saved thousands on treatment',
          },
          {
            title: 'Expert Recommendations',
            description: 'Verified information about JCI-accredited hospitals and qualified doctors',
          },
        ],
      },
      newsletter: {
        title: 'Get the Latest Medical Tourism Insights',
        subtitle: 'Subscribe to receive comprehensive guides, cost comparisons, and exclusive offers for medical treatment in India',
        placeholder: 'Enter your email',
        subscribe: 'Subscribe',
        disclaimer: 'Join 5,000+ subscribers. Unsubscribe anytime.',
      },
      cta: {
        title: 'Ready to Start Your Medical Journey to India?',
        subtitle: 'Get free consultation, personalized treatment plan, and cost estimate from our expert medical tourism coordinators',
        buttons: {
          consultation: 'Get Free Consultation',
          contact: 'Contact Us',
        },
      },
    },
    ar: {
      hero: {
        title: 'موارد السياحة العلاجية وأدلة الخبراء',
        subtitle: 'أدلة شاملة حول تكاليف العلاج، اختيار المستشفيات، تجارب المرضى، وكل ما تحتاج معرفته عن السياحة العلاجية إلى الهند من دول الخليج',
        stats: {
          words: 'كلمات من المحتوى',
          guides: 'أدلة خبراء',
          topics: 'المواضيع المغطاة',
        },
      },
      categories: [
        { name: 'جميع المقالات', count: 24 },
        { name: 'مقارنة التكاليف', count: 7 },
        { name: 'دليل العلاج', count: 5 },
        { name: 'دليل الوجهة', count: 4 },
        { name: 'دليل المستشفيات', count: 4 },
        { name: 'دليل السفر', count: 4 },
      ],
      featured: {
        title: 'الدليل المميز',
        author: 'فريق شفاء الهند',
        readGuide: 'قراءة الدليل الكامل',
      },
      allArticles: {
        title: 'جميع الأدلة والموارد',
        subtitle: 'رؤى الخبراء لمساعدتك على اتخاذ قرارات مستنيرة بشأن رحلتك الطبية',
        readFull: 'قراءة الدليل الكامل',
      },
      whyRead: {
        title: 'لماذا تقرأ أدلتنا؟',
        reasons: [
          {
            title: 'رؤى قائمة على البيانات',
            description: 'مقارنات تكلفة حقيقية، ومعدلات نجاح، وإحصائيات من مصادر موثوقة',
          },
          {
            title: 'قصص مرضى حقيقية',
            description: 'تجارب فعلية من مرضى الخليج الذين وفروا آلاف الدولارات على العلاج',
          },
          {
            title: 'توصيات الخبراء',
            description: 'معلومات موثقة حول المستشفيات المعتمدة من JCI والأطباء المؤهلين',
          },
        ],
      },
      newsletter: {
        title: 'احصل على أحدث رؤى السياحة العلاجية',
        subtitle: 'اشترك لتلقي أدلة شاملة ومقارنات تكاليف وعروض حصرية للعلاج الطبي في الهند',
        placeholder: 'أدخل بريدك الإلكتروني',
        subscribe: 'اشترك',
        disclaimer: 'انضم إلى 5,000+ مشترك. إلغاء الاشتراك في أي وقت.',
      },
      cta: {
        title: 'مستعد لبدء رحلتك الطبية إلى الهند؟',
        subtitle: 'احصل على استشارة مجانية، وخطة علاج مخصصة، وتقدير التكلفة من منسقي السياحة العلاجية الخبراء لدينا',
        buttons: {
          consultation: 'احصل على استشارة مجانية',
          contact: 'اتصل بنا',
        },
      },
    },
  };

  const t = content[locale as 'en' | 'ar'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            {t.hero.title}
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-primary-100">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="rounded-lg bg-white/10 px-6 py-3 backdrop-blur-sm">
              <div className="text-2xl font-bold">65,000+</div>
              <div className="text-sm text-primary-100">{t.hero.stats.words}</div>
            </div>
            <div className="rounded-lg bg-white/10 px-6 py-3 backdrop-blur-sm">
              <div className="text-2xl font-bold">24</div>
              <div className="text-sm text-primary-100">{t.hero.stats.guides}</div>
            </div>
            <div className="rounded-lg bg-white/10 px-6 py-3 backdrop-blur-sm">
              <div className="text-2xl font-bold">120+</div>
              <div className="text-sm text-primary-100">{t.hero.stats.topics}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b bg-white px-4 py-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {t.categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? 'default' : 'outline'}
                size="sm"
                className="gap-2"
              >
                {category.name}
                <span className="rounded-full bg-primary-100 px-2 py-0.5 text-xs text-primary-700">
                  {category.count}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8 flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-primary-600" />
          <h2 className="font-serif text-2xl font-bold text-gray-900">{t.featured.title}</h2>
        </div>
        <Card className="overflow-hidden border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white transition-shadow hover:shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="h-64 bg-gradient-to-br from-primary-400 to-primary-600 md:h-auto" />
            <div className="flex flex-col justify-center p-8">
              <div className="mb-3 flex items-center gap-2 text-sm text-primary-600">
                <Heart className="h-4 w-4" />
                <span className="font-medium">{blogArticles[0].category}</span>
              </div>
              <h3 className="mb-4 font-serif text-3xl font-bold text-gray-900">
                {blogArticles[0].title}
              </h3>
              <p className="mb-6 text-gray-600">
                {blogArticles[0].excerpt}
              </p>
              <div className="mb-6 flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{blogArticles[0].publishedDate}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{t.featured.author}</span>
                </div>
                <span>•</span>
                <span>{blogArticles[0].readTime}</span>
              </div>
              <Link href={`/blog/${blogArticles[0].slug}`}>
                <Button size="lg" className="gap-2">
                  {t.featured.readGuide}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </section>

      {/* All Articles Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="font-serif text-2xl font-bold text-gray-900">{t.allArticles.title}</h2>
          <p className="text-gray-600">{t.allArticles.subtitle}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogArticles.slice(1).map((article) => {
            const IconComponent = article.icon;
            return (
              <Card key={article.id} className="flex flex-col transition-shadow hover:shadow-lg">
                <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600" />
                <CardHeader>
                  <div className="mb-3 flex items-center gap-2 text-sm text-primary-600">
                    <IconComponent className="h-4 w-4" />
                    <span className="font-medium">{article.category}</span>
                  </div>
                  <CardTitle className="line-clamp-2 text-xl">
                    <Link href={`/blog/${article.slug}`} className="hover:text-primary-600">
                      {article.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{article.publishedDate}</span>
                    </div>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {article.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="flex items-center gap-1 rounded-full bg-primary-100 px-3 py-1 text-xs text-primary-700"
                      >
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
                  >
                    {t.allArticles.readFull}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Why Read Our Guides */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-gray-50 to-white p-8 shadow-sm">
          <h3 className="mb-6 text-center font-serif text-2xl font-bold text-gray-900">
            {t.whyRead.title}
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {t.whyRead.reasons.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  {index === 0 && <TrendingUp className="h-8 w-8 text-primary-600" />}
                  {index === 1 && <User className="h-8 w-8 text-primary-600" />}
                  {index === 2 && <Building2 className="h-8 w-8 text-primary-600" />}
                </div>
                <h4 className="mb-2 font-semibold text-gray-900">{reason.title}</h4>
                <p className="text-sm text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900">
            {t.newsletter.title}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600">
            {t.newsletter.subtitle}
          </p>
          <div className="mx-auto max-w-md">
            <form className="flex gap-2">
              <input
                type="email"
                placeholder={t.newsletter.placeholder}
                className="flex-1 rounded-lg border-2 border-gray-300 px-4 py-3 focus:border-primary-500 focus:outline-none"
                required
              />
              <Button type="submit" size="lg">
                {t.newsletter.subscribe}
              </Button>
            </form>
            <p className="mt-3 text-xs text-gray-500">
              {t.newsletter.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold">
            {t.cta.title}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/consultation">{t.cta.buttons.consultation}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700">
              <Link href="/contact">{t.cta.buttons.contact}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

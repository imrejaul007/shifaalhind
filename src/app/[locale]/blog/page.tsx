import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, User, ArrowRight, Tag, Heart, Plane, Activity, Baby, Building2, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Medical Tourism Blog - Expert Guides & Resources | Shifa AlHind',
  description: 'Comprehensive medical tourism guides for GCC patients. Cost comparisons, treatment guides, hospital selection tips, and patient success stories from India.',
  keywords: [
    'medical tourism blog',
    'medical tourism India',
    'medical tourism guides',
    'treatment cost comparison',
    'hospital selection guide',
    'patient success stories',
    'medical tourism UAE',
    'medical tourism Saudi Arabia',
    'medical tourism GCC',
  ],
  openGraph: {
    title: 'Medical Tourism Blog - Expert Guides & Resources',
    description: 'Comprehensive medical tourism guides for GCC patients seeking treatment in India.',
    type: 'website',
  },
};

// Our 5 SEO-optimized blog articles
const blogArticles = [
  {
    id: 1,
    title: 'Heart Surgery Cost in India vs USA, UK, UAE & Saudi Arabia: Complete 2025 Guide',
    excerpt: 'Discover how much you can save on heart surgery in India. Complete cost breakdown for CABG, valve replacement, and angioplasty compared to USA, UK, UAE, and Saudi Arabia. Save 60-80% with world-class care.',
    slug: 'heart-surgery-cost-comparison-india-vs-world',
    category: 'Cost Comparison',
    icon: Heart,
    publishedDate: 'January 2025',
    readTime: '12 min read',
    tags: ['Heart Surgery', 'Cost Comparison', 'CABG', 'Cardiac Care'],
  },
  {
    id: 2,
    title: 'Medical Tourism India: Complete 2025 Guide for UAE Patients',
    excerpt: 'Complete step-by-step guide for UAE patients seeking medical treatment in India. Visa process, flights, accommodation, cost savings, and real patient success stories from Dubai and Abu Dhabi.',
    slug: 'medical-tourism-india-uae-patients-guide',
    category: 'Travel Guide',
    icon: Plane,
    publishedDate: 'January 2025',
    readTime: '15 min read',
    tags: ['UAE Patients', 'Travel Guide', 'Visa Process', 'Patient Stories'],
  },
  {
    id: 3,
    title: 'Knee Replacement Cost in India vs World: 2025 Price Comparison',
    excerpt: 'Compare knee replacement costs in India vs USA, UK, UAE, and Saudi Arabia. Total knee, partial, bilateral, and revision surgery prices. Save up to $25,000 with top orthopedic surgeons.',
    slug: 'knee-replacement-cost-india-vs-world',
    category: 'Cost Comparison',
    icon: Activity,
    publishedDate: 'January 2025',
    readTime: '14 min read',
    tags: ['Knee Replacement', 'Orthopedic Surgery', 'Cost Comparison'],
  },
  {
    id: 4,
    title: 'IVF & Fertility Treatment in India: Complete 2025 Guide',
    excerpt: 'Complete IVF cost guide for GCC patients. Success rates by age, top fertility clinics, ICSI, egg donation, and frozen embryo transfer prices. Real patient success stories and complete timeline.',
    slug: 'ivf-fertility-treatment-india-complete-guide',
    category: 'Treatment Guide',
    icon: Baby,
    publishedDate: 'January 2025',
    readTime: '16 min read',
    tags: ['IVF', 'Fertility Treatment', 'Success Rates', 'Patient Stories'],
  },
  {
    id: 5,
    title: 'How to Choose the Best Hospital in India for Medical Tourism',
    excerpt: '10 essential criteria for selecting the right hospital in India. JCI accreditation guide, top hospital chains, common mistakes to avoid, and 20+ questions to ask before deciding.',
    slug: 'how-to-choose-best-hospital-india',
    category: 'Hospital Guide',
    icon: Building2,
    publishedDate: 'January 2025',
    readTime: '13 min read',
    tags: ['Hospital Selection', 'JCI Accreditation', 'Quality Care'],
  },
];

const categories = [
  { name: 'All Articles', count: 5 },
  { name: 'Cost Comparison', count: 2 },
  { name: 'Treatment Guide', count: 1 },
  { name: 'Travel Guide', count: 1 },
  { name: 'Hospital Guide', count: 1 },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            Medical Tourism Resources & Expert Guides
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-primary-100">
            Comprehensive guides on treatment costs, hospital selection, patient experiences, and everything you need to know about medical tourism to India from GCC countries
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="rounded-lg bg-white/10 px-6 py-3 backdrop-blur-sm">
              <div className="text-2xl font-bold">13,000+</div>
              <div className="text-sm text-primary-100">Words of Content</div>
            </div>
            <div className="rounded-lg bg-white/10 px-6 py-3 backdrop-blur-sm">
              <div className="text-2xl font-bold">5</div>
              <div className="text-sm text-primary-100">Expert Guides</div>
            </div>
            <div className="rounded-lg bg-white/10 px-6 py-3 backdrop-blur-sm">
              <div className="text-2xl font-bold">40+</div>
              <div className="text-sm text-primary-100">Topics Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b bg-white px-4 py-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
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
          <h2 className="font-serif text-2xl font-bold text-gray-900">Featured Guide</h2>
        </div>
        <Card className="overflow-hidden border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white transition-shadow hover:shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="h-64 bg-gradient-to-br from-primary-400 to-primary-600 md:h-auto" />
            <div className="flex flex-col justify-center p-8">
              <div className="mb-3 flex items-center gap-2 text-sm text-primary-600">
                <Heart className="h-4 w-4" />
                <span className="font-medium">Cost Comparison</span>
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
                  <span>Shifa AlHind Team</span>
                </div>
                <span>•</span>
                <span>{blogArticles[0].readTime}</span>
              </div>
              <Link href={`/blog/${blogArticles[0].slug}`}>
                <Button size="lg" className="gap-2">
                  Read Complete Guide
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
          <h2 className="font-serif text-2xl font-bold text-gray-900">All Guides & Resources</h2>
          <p className="text-gray-600">Expert insights to help you make informed decisions about your medical journey</p>
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
                    Read Full Guide
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
            Why Read Our Guides?
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                <TrendingUp className="h-8 w-8 text-primary-600" />
              </div>
              <h4 className="mb-2 font-semibold text-gray-900">Data-Driven Insights</h4>
              <p className="text-sm text-gray-600">
                Real cost comparisons, success rates, and statistics from trusted sources
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                <User className="h-8 w-8 text-primary-600" />
              </div>
              <h4 className="mb-2 font-semibold text-gray-900">Real Patient Stories</h4>
              <p className="text-sm text-gray-600">
                Actual experiences from GCC patients who saved thousands on treatment
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                <Building2 className="h-8 w-8 text-primary-600" />
              </div>
              <h4 className="mb-2 font-semibold text-gray-900">Expert Recommendations</h4>
              <p className="text-sm text-gray-600">
                Verified information about JCI-accredited hospitals and qualified doctors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900">
            Get the Latest Medical Tourism Insights
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600">
            Subscribe to receive comprehensive guides, cost comparisons, and exclusive offers for medical treatment in India
          </p>
          <div className="mx-auto max-w-md">
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border-2 border-gray-300 px-4 py-3 focus:border-primary-500 focus:outline-none"
                required
              />
              <Button type="submit" size="lg">
                Subscribe
              </Button>
            </form>
            <p className="mt-3 text-xs text-gray-500">
              Join 5,000+ subscribers. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold">
            Ready to Start Your Medical Journey to India?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
            Get free consultation, personalized treatment plan, and cost estimate from our expert medical tourism coordinators
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/consultation">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

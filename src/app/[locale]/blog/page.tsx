export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { formatDate } from '@/lib/utils';

export default async function BlogPage() {
  const articles = await prisma.article.findMany({
    where: { published: true },
    take: 12,
    orderBy: { createdAt: 'desc' },
    include: {
      cityTreatment: {
        include: {
          treatment: true,
        },
      },
      city: {
        include: {
          country: true,
        },
      },
    },
  });

  const categories = [
    'All Articles',
    'Treatment Guides',
    'Patient Stories',
    'Medical News',
    'Travel Tips',
    'Hospital Reviews',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            Medical Tourism Blog
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-primary-100">
            Expert insights, treatment guides, and patient stories from India&apos;s top medical tourism destinations
          </p>
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
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.id} className="flex flex-col transition-shadow hover:shadow-lg">
              <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600" />
              <CardHeader>
                <div className="mb-2 flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(article.createdAt, 'en')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>Shifa AlHind Team</span>
                  </div>
                </div>
                <CardTitle className="line-clamp-2 text-xl">{article.title_en}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {article.excerpt_en || 'Read more about this medical tourism guide...'}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="mb-4 flex flex-wrap gap-2">
                  {article.cityTreatment && (
                    <span className="flex items-center gap-1 rounded-full bg-primary-100 px-3 py-1 text-xs text-primary-700">
                      <Tag className="h-3 w-3" />
                      {article.cityTreatment.treatment.title_en}
                    </span>
                  )}
                  {article.city && (
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
                      {article.city.name_en}
                    </span>
                  )}
                </div>
                <Link
                  href={`/blog/${article.city.country.slug}/${article.city.slug}/${article.cityTreatment.treatment.slug}/${article.slug}`}
                  className="flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {articles.length === 0 && (
          <div className="py-12 text-center">
            <p className="mb-4 text-gray-600">No articles found. Check back soon!</p>
            <Button asChild>
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        )}

        {articles.length > 0 && (
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900">
            Subscribe to Our Newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600">
            Get the latest medical tourism insights, treatment guides, and special offers delivered to your inbox
          </p>
          <div className="mx-auto max-w-md">
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border-2 border-gray-300 px-4 py-3 focus:border-primary-500 focus:outline-none"
              />
              <Button type="submit" size="lg">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold">
            Ready to Start Your Medical Journey?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
            Get expert advice and personalized treatment recommendations
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/consultation">Free Consultation</Link>
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

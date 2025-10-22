import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Share2, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

interface BlogArticleLayoutProps {
  title: string;
  excerpt: string;
  author: string;
  publishedDate: string;
  lastUpdated: string;
  readTime: string;
  children: ReactNode;
}

export default function BlogArticleLayout({
  title,
  excerpt,
  author,
  publishedDate,
  lastUpdated,
  readTime,
  children,
}: BlogArticleLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Header */}
      <div className="border-b border-primary-100 bg-white">
        <div className="container mx-auto px-4 py-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-4 font-serif text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mb-6 text-lg text-primary-50 md:text-xl">
              {excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-primary-100">
              <span>By {author}</span>
              <span>•</span>
              <span>{publishedDate}</span>
              <span>•</span>
              <span>{readTime} read</span>
              <span>•</span>
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          {/* Main Content */}
          <article className="prose prose-lg prose-primary max-w-none">
            {children}
          </article>

          {/* CTA Section */}
          <Card className="my-12 border-primary-200 bg-primary-50">
            <CardContent className="p-8">
              <h3 className="mb-4 text-center text-2xl font-bold text-gray-900">
                Ready to Start Your Medical Journey to India?
              </h3>
              <p className="mb-6 text-center text-lg text-gray-700">
                Get a free, personalized consultation and cost estimate from our expert team.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="bg-accent-500 hover:bg-accent-600">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +971 50 123 4567
                </Button>
                <Button size="lg" variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Share Section */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Share this article:</span>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

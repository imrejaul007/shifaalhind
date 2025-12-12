'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, ArrowRight, Loader2, MapPin, Building2, Heart, FileText } from 'lucide-react';

interface SearchResult {
  id: string;
  type: 'treatment' | 'hospital' | 'city' | 'article';
  title: string;
  description: string;
  url: string;
  location?: string;
  category?: string;
  rating?: number;
  accreditations?: string[];
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const locale = useLocale();
  const query = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(query);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (query) {
      performSearch(query);
    }
  }, [query]);

  const performSearch = async (q: string) => {
    if (!q.trim()) return;

    setIsSearching(true);
    setHasSearched(true);

    try {
      const response = await fetch(
        `/api/v1/search?q=${encodeURIComponent(q)}&locale=${locale}&limit=20`
      );

      if (!response.ok) {
        throw new Error('Search failed');
      }

      const data = await response.json();

      if (data.success) {
        // Flatten all results into a single array
        const allResults: SearchResult[] = [
          ...data.results.treatments,
          ...data.results.hospitals,
          ...data.results.cities,
          ...data.results.articles,
        ];

        setResults(allResults);
        setTotalCount(data.totalCount);
      } else {
        console.error('Search error:', data.error);
        setResults([]);
        setTotalCount(0);
      }
    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
      setTotalCount(0);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Update URL with search query using Next.js router
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const getIconForType = (type: string) => {
    switch (type) {
      case 'treatment':
        return <Heart className="h-5 w-5 text-red-500" />;
      case 'hospital':
        return <Building2 className="h-5 w-5 text-blue-500" />;
      case 'city':
        return <MapPin className="h-5 w-5 text-green-500" />;
      case 'article':
        return <FileText className="h-5 w-5 text-purple-500" />;
      default:
        return <Search className="h-5 w-5 text-gray-500" />;
    }
  };

  const getTypeLabel = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
              Search Medical Tourism
            </h1>
            <p className="mb-8 text-lg text-primary-100">
              Find treatments, hospitals, cities, and information
            </p>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="mx-auto max-w-2xl">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search treatments, hospitals, cities..."
                    className="w-full rounded-lg border-2 border-gray-300 bg-white py-3 pl-12 pr-4 text-gray-900 focus:border-primary-500 focus:outline-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  variant="secondary"
                  disabled={isSearching || !searchQuery.trim()}
                >
                  {isSearching ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Searching...
                    </>
                  ) : (
                    'Search'
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Search Results */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          {/* Results Header */}
          {hasSearched && (
            <div className="mb-8">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                {isSearching
                  ? 'Searching...'
                  : totalCount > 0
                  ? `Found ${totalCount} result${totalCount !== 1 ? 's' : ''}`
                  : 'No results found'}
              </h2>
              {query && !isSearching && (
                <p className="text-gray-600">
                  {totalCount > 0 ? (
                    <>Showing results for &quot;{query}&quot;</>
                  ) : (
                    <>No results for &quot;{query}&quot;. Try different keywords.</>
                  )}
                </p>
              )}
            </div>
          )}

          {/* Loading State */}
          {isSearching && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-12 w-12 animate-spin text-primary-500" />
            </div>
          )}

          {/* Results List */}
          {!isSearching && hasSearched && results.length > 0 && (
            <div className="space-y-4">
              {results.map((result) => (
                <Card key={result.id} className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-1">{getIconForType(result.type)}</div>
                        <div>
                          <div className="mb-1 flex items-center gap-2">
                            <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                              {getTypeLabel(result.type)}
                            </span>
                            {result.location && (
                              <span className="text-sm text-gray-500">{result.location}</span>
                            )}
                          </div>
                          <CardTitle className="text-xl">
                            <Link href={result.url} className="hover:text-primary-600">
                              {result.title}
                            </Link>
                          </CardTitle>
                          <CardDescription className="mt-2">{result.description}</CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" size="sm">
                      <Link href={result.url}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* No Results State */}
          {!isSearching && hasSearched && results.length === 0 && (
            <div className="py-12 text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                <Search className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">No results found</h3>
              <p className="mb-6 text-gray-600">
                We couldn&apos;t find any results for &quot;{query}&quot;. Try:
              </p>
              <ul className="mb-8 space-y-2 text-left text-gray-700">
                <li>• Using different keywords</li>
                <li>• Checking your spelling</li>
                <li>• Using more general terms</li>
                <li>• Browsing our popular categories below</li>
              </ul>
              <div className="flex justify-center gap-4">
                <Button asChild variant="outline">
                  <Link href="/treatments">Browse Treatments</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/hospitals">Browse Hospitals</Link>
                </Button>
              </div>
            </div>
          )}

          {/* Initial State - Before Search */}
          {!hasSearched && (
            <div className="py-12">
              <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">
                Popular Categories
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-red-50">
                      <Heart className="h-6 w-6 text-red-600" />
                    </div>
                    <CardTitle>Treatments</CardTitle>
                    <CardDescription>Browse all available medical treatments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/treatments">
                        View All Treatments
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                      <Building2 className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>Hospitals</CardTitle>
                    <CardDescription>Explore our partner hospitals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/hospitals">
                        View All Hospitals
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-green-50">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle>Destinations</CardTitle>
                    <CardDescription>Medical tourism by city</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/medical-tourism">
                        Explore Destinations
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50">
                      <FileText className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle>Articles & Guides</CardTitle>
                    <CardDescription>Read our medical tourism blog</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/blog">
                        Read Blog
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
            Contact our team for personalized assistance with your medical tourism needs
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

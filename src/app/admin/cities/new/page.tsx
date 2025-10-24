'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';
import Link from 'next/link';

type Country = {
  id: string;
  name_en: string;
  name_ar: string;
};

export default function NewCityPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [fetchingCountries, setFetchingCountries] = useState(true);
  const [error, setError] = useState('');
  const [countries, setCountries] = useState<Country[]>([]);

  const [formData, setFormData] = useState({
    name_en: '',
    name_ar: '',
    slug: '',
    countryId: '',
    timezone: '',
    latitude: '',
    longitude: '',
    intro_en: '',
    intro_ar: '',
    keywords_en: '',
    keywords_ar: '',
    seoTitle_en: '',
    seoTitle_ar: '',
    seoDesc_en: '',
    seoDesc_ar: '',
    published: false,
    priority: '50',
  });

  // Fetch countries on mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch('/api/countries');
        if (!res.ok) throw new Error('Failed to fetch countries');
        const data = await res.json();
        setCountries(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setFetchingCountries(false);
      }
    };

    fetchCountries();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const payload = {
        ...formData,
        latitude: formData.latitude ? parseFloat(formData.latitude) : null,
        longitude: formData.longitude ? parseFloat(formData.longitude) : null,
        priority: parseInt(formData.priority),
        keywords_en: formData.keywords_en.split(',').map(k => k.trim()).filter(Boolean),
        keywords_ar: formData.keywords_ar.split(',').map(k => k.trim()).filter(Boolean),
      };

      const response = await fetch('/api/admin/cities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to create city');
      }

      router.push('/admin/cities');
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (fetchingCountries) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary-600" />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <Link href="/admin/cities">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Cities
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Add New City</CardTitle>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="mb-4 rounded-lg bg-red-50 p-4 text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Basic Information</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    City Name (English) *
                  </label>
                  <input
                    type="text"
                    name="name_en"
                    value={formData.name_en}
                    onChange={handleChange}
                    required
                    placeholder="Mumbai"
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    City Name (Arabic)
                  </label>
                  <input
                    type="text"
                    name="name_ar"
                    value={formData.name_ar}
                    onChange={handleChange}
                    placeholder="مومباي"
                    className="w-full rounded-lg border p-2"
                    dir="rtl"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Slug *
                  </label>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    required
                    placeholder="mumbai"
                    className="w-full rounded-lg border p-2"
                  />
                  <p className="mt-1 text-xs text-gray-500">URL-friendly identifier</p>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Country *
                  </label>
                  <select
                    name="countryId"
                    value={formData.countryId}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border p-2"
                  >
                    <option value="">Select country...</option>
                    {countries.map((country) => (
                      <option key={country.id} value={country.id}>
                        {country.name_en}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Timezone
                  </label>
                  <input
                    type="text"
                    name="timezone"
                    value={formData.timezone}
                    onChange={handleChange}
                    placeholder="Asia/Kolkata"
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Priority (for sitemap)
                  </label>
                  <input
                    type="number"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    min="0"
                    max="100"
                    placeholder="50"
                    className="w-full rounded-lg border p-2"
                  />
                  <p className="mt-1 text-xs text-gray-500">0-100, higher = more important</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Location Coordinates</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Latitude
                  </label>
                  <input
                    type="number"
                    step="any"
                    name="latitude"
                    value={formData.latitude}
                    onChange={handleChange}
                    placeholder="19.0760"
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Longitude
                  </label>
                  <input
                    type="number"
                    step="any"
                    name="longitude"
                    value={formData.longitude}
                    onChange={handleChange}
                    placeholder="72.8777"
                    className="w-full rounded-lg border p-2"
                  />
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Introduction</h3>
              <div className="grid gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Introduction (English)
                  </label>
                  <textarea
                    name="intro_en"
                    value={formData.intro_en}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Brief introduction about the city..."
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Introduction (Arabic)
                  </label>
                  <textarea
                    name="intro_ar"
                    value={formData.intro_ar}
                    onChange={handleChange}
                    rows={4}
                    placeholder="مقدمة موجزة عن المدينة..."
                    className="w-full rounded-lg border p-2"
                    dir="rtl"
                  />
                </div>
              </div>
            </div>

            {/* SEO */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">SEO</h3>
              <div className="grid gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Keywords (English, comma-separated)
                  </label>
                  <input
                    type="text"
                    name="keywords_en"
                    value={formData.keywords_en}
                    onChange={handleChange}
                    placeholder="mumbai, medical tourism, hospitals"
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Keywords (Arabic, comma-separated)
                  </label>
                  <input
                    type="text"
                    name="keywords_ar"
                    value={formData.keywords_ar}
                    onChange={handleChange}
                    placeholder="مومباي، السياحة العلاجية"
                    className="w-full rounded-lg border p-2"
                    dir="rtl"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      SEO Title (English)
                    </label>
                    <input
                      type="text"
                      name="seoTitle_en"
                      value={formData.seoTitle_en}
                      onChange={handleChange}
                      placeholder="Medical Tourism in Mumbai"
                      className="w-full rounded-lg border p-2"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      SEO Title (Arabic)
                    </label>
                    <input
                      type="text"
                      name="seoTitle_ar"
                      value={formData.seoTitle_ar}
                      onChange={handleChange}
                      placeholder="السياحة العلاجية في مومباي"
                      className="w-full rounded-lg border p-2"
                      dir="rtl"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    SEO Description (English)
                  </label>
                  <textarea
                    name="seoDesc_en"
                    value={formData.seoDesc_en}
                    onChange={handleChange}
                    rows={2}
                    placeholder="Discover world-class medical care in Mumbai..."
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    SEO Description (Arabic)
                  </label>
                  <textarea
                    name="seoDesc_ar"
                    value={formData.seoDesc_ar}
                    onChange={handleChange}
                    rows={2}
                    placeholder="اكتشف الرعاية الطبية عالمية المستوى في مومباي..."
                    className="w-full rounded-lg border p-2"
                    dir="rtl"
                  />
                </div>
              </div>
            </div>

            {/* Status */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Status</h3>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="published"
                  checked={formData.published}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <span className="text-sm">Published</span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <Button type="submit" disabled={loading} className="bg-primary-600 hover:bg-primary-700">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Create City
                  </>
                )}
              </Button>
              <Link href="/admin/cities">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

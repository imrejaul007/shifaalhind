'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';
import Link from 'next/link';

type CityTreatment = {
  id: string;
  city: { name_en: string };
  treatment: { title_en: string };
};

export default function NewArticlePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [fetchingCityTreatments, setFetchingCityTreatments] = useState(true);
  const [error, setError] = useState('');
  const [cityTreatments, setCityTreatments] = useState<CityTreatment[]>([]);

  const [formData, setFormData] = useState({
    title_en: '',
    title_ar: '',
    slug: '',
    cityTreatmentId: '',
    cityId: '',
    excerpt_en: '',
    excerpt_ar: '',
    content_en: '',
    content_ar: '',
    thumbnail: '',
    images: [] as string[],
    keywords_en: '',
    keywords_ar: '',
    seoTitle_en: '',
    seoTitle_ar: '',
    seoDesc_en: '',
    seoDesc_ar: '',
    published: false,
    publishDate: '',
    needsNativeReview: true,
    needsMedicalReview: false,
    priority: '30',
  });

  // Fetch city treatments on mount
  useEffect(() => {
    const fetchCityTreatments = async () => {
      try {
        const res = await fetch('/api/admin/city-treatments');
        if (!res.ok) throw new Error('Failed to fetch city treatments');
        const data = await res.json();
        setCityTreatments(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setFetchingCityTreatments(false);
      }
    };

    fetchCityTreatments();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    // Special handling for cityTreatmentId - also set cityId
    if (name === 'cityTreatmentId') {
      const selectedCityTreatment = cityTreatments.find(ct => ct.id === value);
      setFormData(prev => ({
        ...prev,
        cityTreatmentId: value,
        cityId: selectedCityTreatment?.city ? (selectedCityTreatment as any).city.id || '' : '',
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const payload = {
        ...formData,
        priority: parseInt(formData.priority),
        publishDate: formData.publishDate ? new Date(formData.publishDate).toISOString() : null,
        keywords_en: formData.keywords_en.split(',').map(k => k.trim()).filter(Boolean),
        keywords_ar: formData.keywords_ar.split(',').map(k => k.trim()).filter(Boolean),
        // For now, store content as simple text in JSON format
        content_en: formData.content_en ? { blocks: [{ type: 'paragraph', data: { text: formData.content_en } }] } : null,
        content_ar: formData.content_ar ? { blocks: [{ type: 'paragraph', data: { text: formData.content_ar } }] } : null,
      };

      const response = await fetch('/api/admin/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to create article');
      }

      router.push('/admin/articles');
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (fetchingCityTreatments) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary-600" />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <Link href="/admin/articles">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Add New Article</CardTitle>
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
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm font-medium">
                    City & Treatment *
                  </label>
                  <select
                    name="cityTreatmentId"
                    value={formData.cityTreatmentId}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border p-2"
                  >
                    <option value="">Select city and treatment...</option>
                    {cityTreatments.map((ct) => (
                      <option key={ct.id} value={ct.id}>
                        {ct.city.name_en} - {ct.treatment.title_en}
                      </option>
                    ))}
                  </select>
                  <p className="mt-1 text-xs text-gray-500">Article will be about this treatment in this city</p>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Title (English) *
                  </label>
                  <input
                    type="text"
                    name="title_en"
                    value={formData.title_en}
                    onChange={handleChange}
                    required
                    placeholder="Heart Surgery in Mumbai: Complete Guide"
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Title (Arabic)
                  </label>
                  <input
                    type="text"
                    name="title_ar"
                    value={formData.title_ar}
                    onChange={handleChange}
                    placeholder="جراحة القلب في مومباي"
                    className="w-full rounded-lg border p-2"
                    dir="rtl"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm font-medium">
                    Slug *
                  </label>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    required
                    placeholder="heart-surgery-mumbai-guide"
                    className="w-full rounded-lg border p-2"
                  />
                  <p className="mt-1 text-xs text-gray-500">URL-friendly identifier</p>
                </div>
              </div>
            </div>

            {/* Excerpt */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Excerpt (Preview)</h3>
              <div className="grid gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Excerpt (English)
                  </label>
                  <textarea
                    name="excerpt_en"
                    value={formData.excerpt_en}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Brief summary that appears in article listings..."
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Excerpt (Arabic)
                  </label>
                  <textarea
                    name="excerpt_ar"
                    value={formData.excerpt_ar}
                    onChange={handleChange}
                    rows={3}
                    placeholder="ملخص موجز يظهر في قوائم المقالات..."
                    className="w-full rounded-lg border p-2"
                    dir="rtl"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Content</h3>
              <div className="grid gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Content (English)
                  </label>
                  <textarea
                    name="content_en"
                    value={formData.content_en}
                    onChange={handleChange}
                    rows={10}
                    placeholder="Full article content..."
                    className="w-full rounded-lg border p-2"
                  />
                  <p className="mt-1 text-xs text-gray-500">Rich text editor can be added later</p>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Content (Arabic)
                  </label>
                  <textarea
                    name="content_ar"
                    value={formData.content_ar}
                    onChange={handleChange}
                    rows={10}
                    placeholder="محتوى المقال الكامل..."
                    className="w-full rounded-lg border p-2"
                    dir="rtl"
                  />
                </div>
              </div>
            </div>

            {/* Images */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Images</h3>
              <div className="grid gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Thumbnail URL
                  </label>
                  <input
                    type="url"
                    name="thumbnail"
                    value={formData.thumbnail}
                    onChange={handleChange}
                    placeholder="https://cloudinary.com/..."
                    className="w-full rounded-lg border p-2"
                  />
                  <p className="mt-1 text-xs text-gray-500">Cloudinary image URL (add image upload component later)</p>
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
                    placeholder="heart surgery, mumbai, medical tourism"
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
                    placeholder="جراحة القلب، مومباي"
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
                      placeholder="Heart Surgery in Mumbai - Complete 2025 Guide"
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
                      placeholder="جراحة القلب في مومباي"
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
                    placeholder="Comprehensive guide to heart surgery in Mumbai..."
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
                    placeholder="دليل شامل لجراحة القلب في مومباي..."
                    className="w-full rounded-lg border p-2"
                    dir="rtl"
                  />
                </div>
              </div>
            </div>

            {/* Publishing & Review */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Publishing & Review</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Publish Date
                  </label>
                  <input
                    type="datetime-local"
                    name="publishDate"
                    value={formData.publishDate}
                    onChange={handleChange}
                    className="w-full rounded-lg border p-2"
                  />
                  <p className="mt-1 text-xs text-gray-500">Leave empty for current date</p>
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
                    placeholder="30"
                    className="w-full rounded-lg border p-2"
                  />
                  <p className="mt-1 text-xs text-gray-500">0-100, higher = more important</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
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
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="needsNativeReview"
                    checked={formData.needsNativeReview}
                    onChange={handleChange}
                    className="h-4 w-4"
                  />
                  <span className="text-sm">Needs Native Language Review</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="needsMedicalReview"
                    checked={formData.needsMedicalReview}
                    onChange={handleChange}
                    className="h-4 w-4"
                  />
                  <span className="text-sm">Needs Medical Review</span>
                </label>
              </div>
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
                    Create Article
                  </>
                )}
              </Button>
              <Link href="/admin/articles">
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

'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Save, Loader2, Trash2 } from 'lucide-react';
import Link from 'next/link';

type CityTreatment = {
  id: string;
  city: { id: string; name_en: string };
  treatment: { title_en: string };
};

export default function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [articleId, setArticleId] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
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

  // Fetch article data and city treatments
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resolvedParams = await params;
        setArticleId(resolvedParams.id);

        // Fetch city treatments
        const cityTreatmentsRes = await fetch('/api/admin/city-treatments');
        if (!cityTreatmentsRes.ok) throw new Error('Failed to fetch city treatments');
        const cityTreatmentsData = await cityTreatmentsRes.json();
        setCityTreatments(cityTreatmentsData);

        // Fetch article
        const articleRes = await fetch(`/api/admin/articles/${resolvedParams.id}`);
        if (!articleRes.ok) throw new Error('Failed to fetch article');
        const article = await articleRes.json();

        // Extract text from JSON content
        const contentEnText = article.content_en?.blocks?.[0]?.data?.text || '';
        const contentArText = article.content_ar?.blocks?.[0]?.data?.text || '';

        // Pre-populate form
        setFormData({
          title_en: article.title_en || '',
          title_ar: article.title_ar || '',
          slug: article.slug || '',
          cityTreatmentId: article.cityTreatmentId || '',
          cityId: article.cityId || '',
          excerpt_en: article.excerpt_en || '',
          excerpt_ar: article.excerpt_ar || '',
          content_en: contentEnText,
          content_ar: contentArText,
          thumbnail: article.thumbnail || '',
          images: article.images || [],
          keywords_en: article.keywords_en?.join(', ') || '',
          keywords_ar: article.keywords_ar?.join(', ') || '',
          seoTitle_en: article.seoTitle_en || '',
          seoTitle_ar: article.seoTitle_ar || '',
          seoDesc_en: article.seoDesc_en || '',
          seoDesc_ar: article.seoDesc_ar || '',
          published: article.published || false,
          publishDate: article.publishDate ? new Date(article.publishDate).toISOString().slice(0, 16) : '',
          needsNativeReview: article.needsNativeReview ?? true,
          needsMedicalReview: article.needsMedicalReview ?? false,
          priority: article.priority?.toString() || '30',
        });
      } catch (err: any) {
        setError(err.message);
      } finally {
        setFetching(false);
      }
    };

    fetchData();
  }, [params]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    // Special handling for cityTreatmentId - also set cityId
    if (name === 'cityTreatmentId') {
      const selectedCityTreatment = cityTreatments.find(ct => ct.id === value);
      setFormData(prev => ({
        ...prev,
        cityTreatmentId: value,
        cityId: selectedCityTreatment?.city?.id || '',
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
        // Store content as simple text in JSON format
        content_en: formData.content_en ? { blocks: [{ type: 'paragraph', data: { text: formData.content_en } }] } : null,
        content_ar: formData.content_ar ? { blocks: [{ type: 'paragraph', data: { text: formData.content_ar } }] } : null,
      };

      const response = await fetch(`/api/admin/articles/${articleId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to update article');
      }

      router.push('/admin/articles');
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this article? This action cannot be undone.')) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`/api/admin/articles/${articleId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to delete article');
      }

      router.push('/admin/articles');
      router.refresh();
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary-600" />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <Link href="/admin/articles">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Button>
        </Link>
        <Button
          variant="outline"
          size="sm"
          onClick={handleDelete}
          className="text-red-600 hover:bg-red-50"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Delete Article
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Edit Article</CardTitle>
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
                    placeholder="Brief summary..."
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
                    placeholder="ملخص موجز..."
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
                    placeholder="heart surgery, mumbai"
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
                    placeholder="جراحة القلب"
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
                      placeholder="Heart Surgery Mumbai Guide"
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
                      placeholder="جراحة القلب مومباي"
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
                    placeholder="Guide to heart surgery..."
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
                    placeholder="دليل جراحة القلب..."
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
                    className="w-full rounded-lg border p-2"
                  />
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
                    Updating...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Update Article
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

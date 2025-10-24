'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Save, Loader2, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function EditTreatmentPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [treatmentId, setTreatmentId] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    title_en: '',
    title_ar: '',
    slug: '',
    category_en: '',
    category_ar: '',
    summary_en: '',
    summary_ar: '',
    costMin: '',
    costMax: '',
    currency: 'USD',
    duration: '',
    recovery: '',
    keywords_en: '',
    keywords_ar: '',
    seoTitle_en: '',
    seoTitle_ar: '',
    seoDesc_en: '',
    seoDesc_ar: '',
    published: false,
    featured: false,
  });

  // Fetch treatment data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resolvedParams = await params;
        setTreatmentId(resolvedParams.id);

        const treatmentRes = await fetch(`/api/admin/treatments/${resolvedParams.id}`);
        if (!treatmentRes.ok) throw new Error('Failed to fetch treatment');

        const treatment = await treatmentRes.json();

        // Pre-populate form
        setFormData({
          title_en: treatment.title_en || '',
          title_ar: treatment.title_ar || '',
          slug: treatment.slug || '',
          category_en: treatment.category_en || '',
          category_ar: treatment.category_ar || '',
          summary_en: treatment.summary_en || '',
          summary_ar: treatment.summary_ar || '',
          costMin: treatment.costMin?.toString() || '',
          costMax: treatment.costMax?.toString() || '',
          currency: treatment.currency || 'USD',
          duration: treatment.duration || '',
          recovery: treatment.recovery || '',
          keywords_en: treatment.keywords_en?.join(', ') || '',
          keywords_ar: treatment.keywords_ar?.join(', ') || '',
          seoTitle_en: treatment.seoTitle_en || '',
          seoTitle_ar: treatment.seoTitle_ar || '',
          seoDesc_en: treatment.seoDesc_en || '',
          seoDesc_ar: treatment.seoDesc_ar || '',
          published: treatment.published || false,
          featured: treatment.featured || false,
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
        costMin: formData.costMin ? parseFloat(formData.costMin) : null,
        costMax: formData.costMax ? parseFloat(formData.costMax) : null,
        keywords_en: formData.keywords_en.split(',').map(k => k.trim()).filter(Boolean),
        keywords_ar: formData.keywords_ar.split(',').map(k => k.trim()).filter(Boolean),
      };

      const response = await fetch(`/api/admin/treatments/${treatmentId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to update treatment');
      }

      router.push('/admin/treatments');
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this treatment? This action cannot be undone and will fail if the treatment is referenced by city treatments, packages, or bookings.')) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`/api/admin/treatments/${treatmentId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to delete treatment');
      }

      router.push('/admin/treatments');
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
        <Link href="/admin/treatments">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Treatments
          </Button>
        </Link>
        <Button
          variant="outline"
          size="sm"
          onClick={handleDelete}
          className="text-red-600 hover:bg-red-50"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Delete Treatment
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Edit Treatment</CardTitle>
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
                    Treatment Title (English) *
                  </label>
                  <input
                    type="text"
                    name="title_en"
                    value={formData.title_en}
                    onChange={handleChange}
                    required
                    placeholder="Heart Surgery"
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Treatment Title (Arabic)
                  </label>
                  <input
                    type="text"
                    name="title_ar"
                    value={formData.title_ar}
                    onChange={handleChange}
                    placeholder="جراحة القلب"
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
                    placeholder="heart-surgery"
                    className="w-full rounded-lg border p-2"
                  />
                  <p className="mt-1 text-xs text-gray-500">URL-friendly identifier</p>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Category (English)
                  </label>
                  <input
                    type="text"
                    name="category_en"
                    value={formData.category_en}
                    onChange={handleChange}
                    placeholder="Cardiology"
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm font-medium">
                    Category (Arabic)
                  </label>
                  <input
                    type="text"
                    name="category_ar"
                    value={formData.category_ar}
                    onChange={handleChange}
                    placeholder="أمراض القلب"
                    className="w-full rounded-lg border p-2"
                    dir="rtl"
                  />
                </div>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Summary</h3>
              <div className="grid gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Summary (English)
                  </label>
                  <textarea
                    name="summary_en"
                    value={formData.summary_en}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Brief description of the treatment..."
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Summary (Arabic)
                  </label>
                  <textarea
                    name="summary_ar"
                    value={formData.summary_ar}
                    onChange={handleChange}
                    rows={4}
                    placeholder="وصف موجز للعلاج..."
                    className="w-full rounded-lg border p-2"
                    dir="rtl"
                  />
                </div>
              </div>
            </div>

            {/* Cost & Duration */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Cost & Duration</h3>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Minimum Cost
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    name="costMin"
                    value={formData.costMin}
                    onChange={handleChange}
                    placeholder="5000"
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Maximum Cost
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    name="costMax"
                    value={formData.costMax}
                    onChange={handleChange}
                    placeholder="15000"
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Currency
                  </label>
                  <select
                    name="currency"
                    value={formData.currency}
                    onChange={handleChange}
                    className="w-full rounded-lg border p-2"
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="AED">AED</option>
                    <option value="SAR">SAR</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Duration
                  </label>
                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="7-10 days"
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Recovery Time
                  </label>
                  <input
                    type="text"
                    name="recovery"
                    value={formData.recovery}
                    onChange={handleChange}
                    placeholder="2-3 weeks"
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
                    placeholder="heart surgery, cardiac surgery"
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
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    SEO Title (English)
                  </label>
                  <input
                    type="text"
                    name="seoTitle_en"
                    value={formData.seoTitle_en}
                    onChange={handleChange}
                    placeholder="Heart Surgery in India"
                    className="w-full rounded-lg border p-2"
                  />
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
                    placeholder="Get world-class heart surgery..."
                    className="w-full rounded-lg border p-2"
                  />
                </div>
              </div>
            </div>

            {/* Status */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Status</h3>
              <div className="space-y-2">
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
                    name="featured"
                    checked={formData.featured}
                    onChange={handleChange}
                    className="h-4 w-4"
                  />
                  <span className="text-sm">Featured</span>
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
                    Update Treatment
                  </>
                )}
              </Button>
              <Link href="/admin/treatments">
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

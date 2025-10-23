'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Save, Loader2, Plus, X } from 'lucide-react';
import Link from 'next/link';

export default function EditPackagePage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [packageId, setPackageId] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState('');
  const [treatments, setTreatments] = useState<any[]>([]);
  const [hospitals, setHospitals] = useState<any[]>([]);

  const [formData, setFormData] = useState({
    name_en: '',
    name_ar: '',
    slug: '',
    treatmentId: '',
    hospitalId: '',
    priceEstimate: '',
    currency: 'USD',
    durationDays: '',
    description_en: '',
    description_ar: '',
    published: false,
    featured: false,
  });

  const [itemsEn, setItemsEn] = useState<string[]>(['']);
  const [itemsAr, setItemsAr] = useState<string[]>(['']);

  // Fetch package data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resolvedParams = await params;
        setPackageId(resolvedParams.id);

        // Fetch package data
        const packageRes = await fetch(`/api/admin/packages/${resolvedParams.id}`);
        if (!packageRes.ok) throw new Error('Failed to fetch package');

        const pkg = await packageRes.json();

        // Pre-populate form
        setFormData({
          name_en: pkg.name_en || '',
          name_ar: pkg.name_ar || '',
          slug: pkg.slug || '',
          treatmentId: pkg.treatmentId || '',
          hospitalId: pkg.hospitalId || '',
          priceEstimate: pkg.priceEstimate?.toString() || '',
          currency: pkg.currency || 'USD',
          durationDays: pkg.durationDays?.toString() || '',
          description_en: pkg.description_en || '',
          description_ar: pkg.description_ar || '',
          published: pkg.published || false,
          featured: pkg.featured || false,
        });

        // Set items (at least one empty item if none exist)
        setItemsEn(pkg.items_en && pkg.items_en.length > 0 ? pkg.items_en : ['']);
        setItemsAr(pkg.items_ar && pkg.items_ar.length > 0 ? pkg.items_ar : ['']);

        // Fetch treatments
        const treatmentsRes = await fetch('/api/admin/treatments');
        if (treatmentsRes.ok) {
          const treatmentsData = await treatmentsRes.json();
          setTreatments(treatmentsData);
        }

        // Fetch hospitals
        const hospitalsRes = await fetch('/api/admin/hospitals');
        if (hospitalsRes.ok) {
          const hospitalsData = await hospitalsRes.json();
          setHospitals(hospitalsData);
        }
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

  const addItem = (lang: 'en' | 'ar') => {
    if (lang === 'en') {
      setItemsEn([...itemsEn, '']);
    } else {
      setItemsAr([...itemsAr, '']);
    }
  };

  const removeItem = (lang: 'en' | 'ar', index: number) => {
    if (lang === 'en') {
      setItemsEn(itemsEn.filter((_, i) => i !== index));
    } else {
      setItemsAr(itemsAr.filter((_, i) => i !== index));
    }
  };

  const updateItem = (lang: 'en' | 'ar', index: number, value: string) => {
    if (lang === 'en') {
      const newItems = [...itemsEn];
      newItems[index] = value;
      setItemsEn(newItems);
    } else {
      const newItems = [...itemsAr];
      newItems[index] = value;
      setItemsAr(newItems);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const payload = {
        ...formData,
        items_en: itemsEn.filter(item => item.trim() !== ''),
        items_ar: itemsAr.filter(item => item.trim() !== ''),
        priceEstimate: formData.priceEstimate ? parseFloat(formData.priceEstimate) : null,
        durationDays: formData.durationDays ? parseInt(formData.durationDays) : null,
        treatmentId: formData.treatmentId || null,
        hospitalId: formData.hospitalId || null,
      };

      const response = await fetch(`/api/admin/packages/${packageId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to update package');
      }

      router.push('/admin/packages');
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
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
      <div className="mb-6">
        <Link href="/admin/packages">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Packages
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Edit Package</CardTitle>
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
                    Package Name (English) *
                  </label>
                  <input
                    type="text"
                    name="name_en"
                    value={formData.name_en}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Package Name (Arabic)
                  </label>
                  <input
                    type="text"
                    name="name_ar"
                    value={formData.name_ar}
                    onChange={handleChange}
                    className="w-full rounded-lg border p-2"
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
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Treatment
                  </label>
                  <select
                    name="treatmentId"
                    value={formData.treatmentId}
                    onChange={handleChange}
                    className="w-full rounded-lg border p-2"
                  >
                    <option value="">Select a treatment (optional)</option>
                    {treatments.map((treatment: any) => (
                      <option key={treatment.id} value={treatment.id}>
                        {treatment.title_en}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Hospital
                  </label>
                  <select
                    name="hospitalId"
                    value={formData.hospitalId}
                    onChange={handleChange}
                    className="w-full rounded-lg border p-2"
                  >
                    <option value="">Select a hospital (optional)</option>
                    {hospitals.map((hospital: any) => (
                      <option key={hospital.id} value={hospital.id}>
                        {hospital.name_en}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Pricing & Duration */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Pricing & Duration</h3>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Price Estimate
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    name="priceEstimate"
                    value={formData.priceEstimate}
                    onChange={handleChange}
                    placeholder="8500.00"
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
                    Duration (days)
                  </label>
                  <input
                    type="number"
                    name="durationDays"
                    value={formData.durationDays}
                    onChange={handleChange}
                    placeholder="14"
                    className="w-full rounded-lg border p-2"
                  />
                </div>
              </div>
            </div>

            {/* What's Included (English) */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">What&apos;s Included (English)</h3>
              <div className="space-y-2">
                {itemsEn.map((item, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => updateItem('en', index, e.target.value)}
                      placeholder="Pre-surgery consultation"
                      className="flex-1 rounded-lg border p-2"
                    />
                    {itemsEn.length > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeItem('en', index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addItem('en')}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add Item
                </Button>
              </div>
            </div>

            {/* What's Included (Arabic) */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">What&apos;s Included (Arabic)</h3>
              <div className="space-y-2">
                {itemsAr.map((item, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => updateItem('ar', index, e.target.value)}
                      placeholder="استشارة ما قبل الجراحة"
                      className="flex-1 rounded-lg border p-2"
                      dir="rtl"
                    />
                    {itemsAr.length > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeItem('ar', index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addItem('ar')}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add Item
                </Button>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Description</h3>
              <div className="grid gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Description (English)
                  </label>
                  <textarea
                    name="description_en"
                    value={formData.description_en}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Description (Arabic)
                  </label>
                  <textarea
                    name="description_ar"
                    value={formData.description_ar}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-lg border p-2"
                    dir="rtl"
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
                    Update Package
                  </>
                )}
              </Button>
              <Link href="/admin/packages">
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

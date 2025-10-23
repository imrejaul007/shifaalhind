'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function EditHospitalPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [hospitalId, setHospitalId] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState('');
  const [cities, setCities] = useState<any[]>([]);

  const [formData, setFormData] = useState({
    name_en: '',
    name_ar: '',
    slug: '',
    cityId: '',
    address_en: '',
    address_ar: '',
    phone: '',
    email: '',
    website: '',
    accreditations: '',
    specialties: '',
    languages: '',
    logo: '',
    about_en: '',
    about_ar: '',
    facilities_en: '',
    facilities_ar: '',
    seoTitle_en: '',
    seoTitle_ar: '',
    seoDesc_en: '',
    seoDesc_ar: '',
    published: false,
    featured: false,
  });

  // Fetch hospital data and cities
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resolvedParams = await params;
        setHospitalId(resolvedParams.id);

        // Fetch hospital data
        const hospitalRes = await fetch(`/api/admin/hospitals/${resolvedParams.id}`);
        if (!hospitalRes.ok) throw new Error('Failed to fetch hospital');

        const hospital = await hospitalRes.json();

        // Pre-populate form with existing data
        setFormData({
          name_en: hospital.name_en || '',
          name_ar: hospital.name_ar || '',
          slug: hospital.slug || '',
          cityId: hospital.cityId || '',
          address_en: hospital.address_en || '',
          address_ar: hospital.address_ar || '',
          phone: hospital.phone || '',
          email: hospital.email || '',
          website: hospital.website || '',
          accreditations: hospital.accreditations?.join(', ') || '',
          specialties: hospital.specialties?.join(', ') || '',
          languages: hospital.languages?.join(', ') || '',
          logo: hospital.logo || '',
          about_en: hospital.about_en || '',
          about_ar: hospital.about_ar || '',
          facilities_en: hospital.facilities_en || '',
          facilities_ar: hospital.facilities_ar || '',
          seoTitle_en: hospital.seoTitle_en || '',
          seoTitle_ar: hospital.seoTitle_ar || '',
          seoDesc_en: hospital.seoDesc_en || '',
          seoDesc_ar: hospital.seoDesc_ar || '',
          published: hospital.published || false,
          featured: hospital.featured || false,
        });

        // Fetch cities for dropdown
        const citiesRes = await fetch('/api/cities');
        if (citiesRes.ok) {
          const citiesData = await citiesRes.json();
          setCities(citiesData);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Convert comma-separated strings to arrays
      const payload = {
        ...formData,
        accreditations: formData.accreditations.split(',').map(s => s.trim()).filter(Boolean),
        specialties: formData.specialties.split(',').map(s => s.trim()).filter(Boolean),
        languages: formData.languages.split(',').map(s => s.trim()).filter(Boolean),
      };

      const response = await fetch(`/api/admin/hospitals/${hospitalId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to update hospital');
      }

      router.push('/admin/hospitals');
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
        <Link href="/admin/hospitals">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Hospitals
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Edit Hospital</CardTitle>
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
                    Name (English) *
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
                    Name (Arabic)
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
                    City *
                  </label>
                  <select
                    name="cityId"
                    value={formData.cityId}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border p-2"
                  >
                    <option value="">Select a city</option>
                    {cities.map((city: any) => (
                      <option key={city.id} value={city.id}>
                        {city.name_en}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact Information</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm font-medium">
                    Website
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Address (English)
                  </label>
                  <input
                    type="text"
                    name="address_en"
                    value={formData.address_en}
                    onChange={handleChange}
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Address (Arabic)
                  </label>
                  <input
                    type="text"
                    name="address_ar"
                    value={formData.address_ar}
                    onChange={handleChange}
                    className="w-full rounded-lg border p-2"
                  />
                </div>
              </div>
            </div>

            {/* Hospital Details */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Hospital Details</h3>
              <div className="grid gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Accreditations (comma-separated)
                  </label>
                  <input
                    type="text"
                    name="accreditations"
                    value={formData.accreditations}
                    onChange={handleChange}
                    placeholder="JCI, NABH, ISO 9001"
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Specialties (comma-separated)
                  </label>
                  <input
                    type="text"
                    name="specialties"
                    value={formData.specialties}
                    onChange={handleChange}
                    placeholder="Cardiology, Neurology, Orthopedics"
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Languages (comma-separated)
                  </label>
                  <input
                    type="text"
                    name="languages"
                    value={formData.languages}
                    onChange={handleChange}
                    placeholder="English, Arabic, Hindi"
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Logo URL
                  </label>
                  <input
                    type="url"
                    name="logo"
                    value={formData.logo}
                    onChange={handleChange}
                    placeholder="https://example.com/logo.png"
                    className="w-full rounded-lg border p-2"
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
                    About (English)
                  </label>
                  <textarea
                    name="about_en"
                    value={formData.about_en}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    About (Arabic)
                  </label>
                  <textarea
                    name="about_ar"
                    value={formData.about_ar}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Facilities (English)
                  </label>
                  <textarea
                    name="facilities_en"
                    value={formData.facilities_en}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Facilities (Arabic)
                  </label>
                  <textarea
                    name="facilities_ar"
                    value={formData.facilities_ar}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-lg border p-2"
                  />
                </div>
              </div>
            </div>

            {/* SEO */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">SEO</h3>
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
                    Update Hospital
                  </>
                )}
              </Button>
              <Link href="/admin/hospitals">
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

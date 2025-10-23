'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function EditDoctorPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [doctorId, setDoctorId] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState('');
  const [hospitals, setHospitals] = useState<any[]>([]);

  const [formData, setFormData] = useState({
    name_en: '',
    name_ar: '',
    slug: '',
    title_en: 'Dr.',
    title_ar: 'د.',
    hospitalId: '',
    specialties: '',
    qualifications: '',
    experience: '',
    languages: '',
    bio_en: '',
    bio_ar: '',
    consultationFee: '',
    available: true,
    published: false,
    featured: false,
  });

  // Fetch doctor data and hospitals
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resolvedParams = await params;
        setDoctorId(resolvedParams.id);

        // Fetch doctor data
        const doctorRes = await fetch(`/api/admin/doctors/${resolvedParams.id}`);
        if (!doctorRes.ok) throw new Error('Failed to fetch doctor');

        const doctor = await doctorRes.json();

        // Pre-populate form
        setFormData({
          name_en: doctor.name_en || '',
          name_ar: doctor.name_ar || '',
          slug: doctor.slug || '',
          title_en: doctor.title_en || 'Dr.',
          title_ar: doctor.title_ar || 'د.',
          hospitalId: doctor.hospitalId || '',
          specialties: doctor.specialties?.join(', ') || '',
          qualifications: doctor.qualifications?.join(', ') || '',
          experience: doctor.experience?.toString() || '',
          languages: doctor.languages?.join(', ') || '',
          bio_en: doctor.bio_en || '',
          bio_ar: doctor.bio_ar || '',
          consultationFee: doctor.consultationFee?.toString() || '',
          available: doctor.available ?? true,
          published: doctor.published || false,
          featured: doctor.featured || false,
        });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const payload = {
        ...formData,
        specialties: formData.specialties.split(',').map(s => s.trim()).filter(Boolean),
        qualifications: formData.qualifications.split(',').map(s => s.trim()).filter(Boolean),
        languages: formData.languages.split(',').map(s => s.trim()).filter(Boolean),
        experience: formData.experience ? parseInt(formData.experience) : null,
        consultationFee: formData.consultationFee ? parseFloat(formData.consultationFee) : null,
      };

      const response = await fetch(`/api/admin/doctors/${doctorId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to update doctor');
      }

      router.push('/admin/doctors');
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
        <Link href="/admin/doctors">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Doctors
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Edit Doctor</CardTitle>
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
                    Title (English) *
                  </label>
                  <select
                    name="title_en"
                    value={formData.title_en}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border p-2"
                  >
                    <option value="Dr.">Dr.</option>
                    <option value="Prof.">Prof.</option>
                    <option value="Prof. Dr.">Prof. Dr.</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Title (Arabic) *
                  </label>
                  <select
                    name="title_ar"
                    value={formData.title_ar}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border p-2"
                  >
                    <option value="د.">د.</option>
                    <option value="أ.د.">أ.د.</option>
                    <option value="بروفيسور">بروفيسور</option>
                  </select>
                </div>
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
                    Hospital *
                  </label>
                  <select
                    name="hospitalId"
                    value={formData.hospitalId}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border p-2"
                  >
                    <option value="">Select a hospital</option>
                    {hospitals.map((hospital: any) => (
                      <option key={hospital.id} value={hospital.id}>
                        {hospital.name_en}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Professional Details */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Professional Details</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Specialties (comma-separated)
                  </label>
                  <input
                    type="text"
                    name="specialties"
                    value={formData.specialties}
                    onChange={handleChange}
                    placeholder="Cardiology, Heart Surgery"
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Qualifications (comma-separated)
                  </label>
                  <input
                    type="text"
                    name="qualifications"
                    value={formData.qualifications}
                    onChange={handleChange}
                    placeholder="MBBS, MD, FRCS"
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Experience (years)
                  </label>
                  <input
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="15"
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Consultation Fee (USD)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    name="consultationFee"
                    value={formData.consultationFee}
                    onChange={handleChange}
                    placeholder="100.00"
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div className="sm:col-span-2">
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
              </div>
            </div>

            {/* Biography */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Biography</h3>
              <div className="grid gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Bio (English)
                  </label>
                  <textarea
                    name="bio_en"
                    value={formData.bio_en}
                    onChange={handleChange}
                    rows={6}
                    className="w-full rounded-lg border p-2"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Bio (Arabic)
                  </label>
                  <textarea
                    name="bio_ar"
                    value={formData.bio_ar}
                    onChange={handleChange}
                    rows={6}
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
                    name="available"
                    checked={formData.available}
                    onChange={handleChange}
                    className="h-4 w-4"
                  />
                  <span className="text-sm">Available for consultations</span>
                </label>
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
                    Update Doctor
                  </>
                )}
              </Button>
              <Link href="/admin/doctors">
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

export const dynamic = 'force-dynamic';

import { prisma } from '@/lib/prisma';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

export default async function AdminDoctorsPage() {
  const doctors = await prisma.doctor.findMany({
    include: {
      hospital: {
        include: {
          city: {
            include: {
              country: true,
            },
          },
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-gray-900">Doctors</h1>
          <p className="text-gray-600">Manage doctor profiles and information</p>
        </div>
        <Link href="/admin/doctors/new">
          <Button className="bg-primary-600 hover:bg-primary-700">
            <Plus className="mr-2 h-4 w-4" />
            Add Doctor
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Doctors ({doctors.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left text-sm text-gray-600">
                  <th className="pb-3">Doctor</th>
                  <th className="pb-3">Hospital</th>
                  <th className="pb-3">Specialties</th>
                  <th className="pb-3">Experience</th>
                  <th className="pb-3">Fee</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((doctor) => (
                  <tr key={doctor.id} className="border-b hover:bg-gray-50">
                    <td className="py-4">
                      <div>
                        <div className="font-medium">
                          {doctor.title_en} {doctor.name_en}
                        </div>
                        <div className="text-sm text-gray-600">{doctor.slug}</div>
                      </div>
                    </td>
                    <td className="py-4 text-sm">
                      <div>{doctor.hospital.name_en}</div>
                      <div className="text-xs text-gray-600">
                        {doctor.hospital.city.name_en}, {doctor.hospital.city.country.name_en}
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex flex-wrap gap-1">
                        {doctor.specialties.slice(0, 2).map((spec, idx) => (
                          <span
                            key={idx}
                            className="rounded bg-purple-100 px-2 py-0.5 text-xs text-purple-700"
                          >
                            {spec}
                          </span>
                        ))}
                        {doctor.specialties.length > 2 && (
                          <span className="text-xs text-gray-600">
                            +{doctor.specialties.length - 2}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 text-sm">
                      {doctor.experience ? `${doctor.experience} years` : '-'}
                    </td>
                    <td className="py-4 text-sm">
                      {doctor.consultationFee ? `$${doctor.consultationFee}` : '-'}
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        {doctor.published ? (
                          <span className="flex items-center gap-1 text-sm text-green-600">
                            <Eye className="h-3 w-3" />
                            Published
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-sm text-gray-500">
                            <EyeOff className="h-3 w-3" />
                            Draft
                          </span>
                        )}
                        {doctor.featured && (
                          <span className="rounded bg-yellow-100 px-2 py-0.5 text-xs text-yellow-700">
                            Featured
                          </span>
                        )}
                        {!doctor.available && (
                          <span className="rounded bg-red-100 px-2 py-0.5 text-xs text-red-700">
                            Unavailable
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <Link href={`/admin/doctors/${doctor.id}/edit`}>
                          <Button variant="outline" size="sm">
                            <Edit className="h-3 w-3" />
                          </Button>
                        </Link>
                        <form action={`/api/admin/doctors/${doctor.id}`} method="DELETE">
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 hover:bg-red-50"
                            type="submit"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </form>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {doctors.length === 0 && (
              <div className="py-12 text-center text-gray-500">
                <p className="mb-4">No doctors yet</p>
                <Link href="/admin/doctors/new">
                  <Button variant="outline">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Your First Doctor
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

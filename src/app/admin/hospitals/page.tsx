export const dynamic = 'force-dynamic';

import { prisma } from '@/lib/prisma';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

export default async function AdminHospitalsPage() {
  const hospitals = await prisma.hospital.findMany({
    include: {
      city: {
        include: {
          country: true,
        },
      },
      _count: {
        select: {
          doctors: true,
          packages: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-gray-900">Hospitals</h1>
          <p className="text-gray-600">Manage hospital listings and information</p>
        </div>
        <Link href="/admin/hospitals/new">
          <Button className="bg-primary-600 hover:bg-primary-700">
            <Plus className="mr-2 h-4 w-4" />
            Add Hospital
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Hospitals ({hospitals.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left text-sm text-gray-600">
                  <th className="pb-3">Hospital</th>
                  <th className="pb-3">Location</th>
                  <th className="pb-3">Accreditations</th>
                  <th className="pb-3">Doctors</th>
                  <th className="pb-3">Packages</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {hospitals.map((hospital) => (
                  <tr key={hospital.id} className="border-b hover:bg-gray-50">
                    <td className="py-4">
                      <div>
                        <div className="font-medium">{hospital.name_en}</div>
                        <div className="text-sm text-gray-600">{hospital.slug}</div>
                      </div>
                    </td>
                    <td className="py-4 text-sm">
                      {hospital.city.name_en}, {hospital.city.country.name_en}
                    </td>
                    <td className="py-4">
                      <div className="flex flex-wrap gap-1">
                        {hospital.accreditations.slice(0, 3).map((acc, idx) => (
                          <span
                            key={idx}
                            className="rounded bg-blue-100 px-2 py-0.5 text-xs text-blue-700"
                          >
                            {acc}
                          </span>
                        ))}
                        {hospital.accreditations.length > 3 && (
                          <span className="text-xs text-gray-600">
                            +{hospital.accreditations.length - 3}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 text-sm text-center">{hospital._count.doctors}</td>
                    <td className="py-4 text-sm text-center">{hospital._count.packages}</td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        {hospital.published ? (
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
                        {hospital.featured && (
                          <span className="rounded bg-yellow-100 px-2 py-0.5 text-xs text-yellow-700">
                            Featured
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <Link href={`/admin/hospitals/${hospital.id}/edit`}>
                          <Button variant="outline" size="sm">
                            <Edit className="h-3 w-3" />
                          </Button>
                        </Link>
                        <form action={`/api/admin/hospitals/${hospital.id}`} method="DELETE">
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

            {hospitals.length === 0 && (
              <div className="py-12 text-center text-gray-500">
                <p className="mb-4">No hospitals yet</p>
                <Link href="/admin/hospitals/new">
                  <Button variant="outline">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Your First Hospital
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

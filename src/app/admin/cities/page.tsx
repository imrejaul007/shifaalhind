export const dynamic = 'force-dynamic';

import { prisma } from '@/lib/prisma';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Edit } from 'lucide-react';
import Link from 'next/link';

export default async function AdminCitiesPage() {
  const cities = await prisma.city.findMany({
    include: {
      country: true,
      _count: {
        select: {
          hospitals: true,
          cityTreatments: true,
          articles: true,
        },
      },
    },
    orderBy: { name_en: 'asc' },
  });

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-gray-900">Cities</h1>
          <p className="text-gray-600">Manage cities for medical tourism destinations</p>
        </div>
        <Link href="/admin/cities/new">
          <Button className="bg-primary-600 hover:bg-primary-700">
            <Plus className="mr-2 h-4 w-4" />
            Add City
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Cities ({cities.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left text-sm text-gray-600">
                  <th className="pb-3">City</th>
                  <th className="pb-3">Country</th>
                  <th className="pb-3">Hospitals</th>
                  <th className="pb-3">Treatments</th>
                  <th className="pb-3">Articles</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cities.map((city) => (
                  <tr key={city.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 font-medium">{city.name_en}</td>
                    <td className="py-3 text-sm text-gray-600">
                      {city.country.name_en}
                    </td>
                    <td className="py-3 text-sm text-gray-600">
                      {city._count.hospitals}
                    </td>
                    <td className="py-3 text-sm text-gray-600">
                      {city._count.cityTreatments}
                    </td>
                    <td className="py-3 text-sm text-gray-600">
                      {city._count.articles}
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        {city.published && (
                          <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                            Published
                          </span>
                        )}
                        {!city.published && (
                          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700">
                            Draft
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <Link href={`/admin/cities/${city.id}/edit`}>
                          <Button variant="outline" size="sm">
                            <Edit className="h-3 w-3" />
                          </Button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {cities.length === 0 && (
              <div className="py-12 text-center text-gray-500">
                <p className="mb-4">No cities yet</p>
                <Link href="/admin/cities/new">
                  <Button className="bg-primary-600 hover:bg-primary-700">
                    <Plus className="mr-2 h-4 w-4" />
                    Add First City
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

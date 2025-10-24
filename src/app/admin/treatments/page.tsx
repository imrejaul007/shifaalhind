export const dynamic = 'force-dynamic';

import { prisma } from '@/lib/prisma';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Edit } from 'lucide-react';
import Link from 'next/link';

export default async function AdminTreatmentsPage() {
  const treatments = await prisma.treatment.findMany({
    orderBy: { title_en: 'asc' },
  });

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-gray-900">Treatments</h1>
          <p className="text-gray-600">Manage medical treatments and procedures</p>
        </div>
        <Link href="/admin/treatments/new">
          <Button className="bg-primary-600 hover:bg-primary-700">
            <Plus className="mr-2 h-4 w-4" />
            Add Treatment
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Treatments ({treatments.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left text-sm text-gray-600">
                  <th className="pb-3">Treatment</th>
                  <th className="pb-3">Category</th>
                  <th className="pb-3">Cost Range</th>
                  <th className="pb-3">Duration</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {treatments.map((treatment) => (
                  <tr key={treatment.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 font-medium">{treatment.title_en}</td>
                    <td className="py-3 text-sm text-gray-600">
                      {treatment.category_en || 'N/A'}
                    </td>
                    <td className="py-3 text-sm">
                      {treatment.costMin && treatment.costMax
                        ? `$${treatment.costMin.toLocaleString()} - $${treatment.costMax.toLocaleString()}`
                        : treatment.costMin
                        ? `From $${treatment.costMin.toLocaleString()}`
                        : treatment.costMax
                        ? `Up to $${treatment.costMax.toLocaleString()}`
                        : 'N/A'}
                    </td>
                    <td className="py-3 text-sm text-gray-600">
                      {treatment.duration || 'N/A'}
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        {treatment.published && (
                          <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                            Published
                          </span>
                        )}
                        {!treatment.published && (
                          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700">
                            Draft
                          </span>
                        )}
                        {treatment.featured && (
                          <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-700">
                            Featured
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <Link href={`/admin/treatments/${treatment.id}/edit`}>
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

            {treatments.length === 0 && (
              <div className="py-12 text-center text-gray-500">
                <p className="mb-4">No treatments yet</p>
                <Link href="/admin/treatments/new">
                  <Button className="bg-primary-600 hover:bg-primary-700">
                    <Plus className="mr-2 h-4 w-4" />
                    Add First Treatment
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

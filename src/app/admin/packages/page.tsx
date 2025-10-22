export const dynamic = 'force-dynamic';

import { prisma } from '@/lib/prisma';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

export default async function AdminPackagesPage() {
  const packages = await prisma.package.findMany({
    include: {
      treatment: true,
      hospital: {
        include: {
          city: {
            include: {
              country: true,
            },
          },
        },
      },
      _count: {
        select: {
          bookings: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-gray-900">Medical Packages</h1>
          <p className="text-gray-600">Manage treatment packages and pricing</p>
        </div>
        <Link href="/admin/packages/new">
          <Button className="bg-primary-600 hover:bg-primary-700">
            <Plus className="mr-2 h-4 w-4" />
            Add Package
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Packages ({packages.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left text-sm text-gray-600">
                  <th className="pb-3">Package</th>
                  <th className="pb-3">Treatment</th>
                  <th className="pb-3">Hospital</th>
                  <th className="pb-3">Price</th>
                  <th className="pb-3">Duration</th>
                  <th className="pb-3">Bookings</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {packages.map((pkg) => (
                  <tr key={pkg.id} className="border-b hover:bg-gray-50">
                    <td className="py-4">
                      <div>
                        <div className="font-medium">{pkg.name_en}</div>
                        <div className="text-sm text-gray-600">{pkg.slug}</div>
                      </div>
                    </td>
                    <td className="py-4 text-sm">
                      {pkg.treatment?.title_en || '-'}
                    </td>
                    <td className="py-4 text-sm">
                      {pkg.hospital ? (
                        <div>
                          <div>{pkg.hospital.name_en}</div>
                          <div className="text-xs text-gray-600">
                            {pkg.hospital.city.name_en}
                          </div>
                        </div>
                      ) : (
                        '-'
                      )}
                    </td>
                    <td className="py-4 text-sm font-medium">
                      {pkg.priceEstimate ? `$${pkg.priceEstimate.toLocaleString()}` : '-'}
                    </td>
                    <td className="py-4 text-sm">
                      {pkg.durationDays ? `${pkg.durationDays} days` : '-'}
                    </td>
                    <td className="py-4 text-sm text-center">
                      {pkg._count.bookings}
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        {pkg.published ? (
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
                        {pkg.featured && (
                          <span className="rounded bg-yellow-100 px-2 py-0.5 text-xs text-yellow-700">
                            Featured
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <Link href={`/admin/packages/${pkg.id}/edit`}>
                          <Button variant="outline" size="sm">
                            <Edit className="h-3 w-3" />
                          </Button>
                        </Link>
                        <form action={`/api/admin/packages/${pkg.id}`} method="DELETE">
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

            {packages.length === 0 && (
              <div className="py-12 text-center text-gray-500">
                <p className="mb-4">No packages yet</p>
                <Link href="/admin/packages/new">
                  <Button variant="outline">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Your First Package
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

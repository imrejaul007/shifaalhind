export const dynamic = 'force-dynamic';

import { prisma } from '@/lib/prisma';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Edit } from 'lucide-react';
import Link from 'next/link';

export default async function AdminArticlesPage() {
  const articles = await prisma.article.findMany({
    include: {
      city: true,
      cityTreatment: {
        include: {
          treatment: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-gray-900">Blog Articles</h1>
          <p className="text-gray-600">Manage blog articles and content</p>
        </div>
        <Link href="/admin/articles/new">
          <Button className="bg-primary-600 hover:bg-primary-700">
            <Plus className="mr-2 h-4 w-4" />
            Add Article
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Articles ({articles.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left text-sm text-gray-600">
                  <th className="pb-3">Title</th>
                  <th className="pb-3">City</th>
                  <th className="pb-3">Treatment</th>
                  <th className="pb-3">Views</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article) => (
                  <tr key={article.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 font-medium">{article.title_en}</td>
                    <td className="py-3 text-sm text-gray-600">
                      {article.city.name_en}
                    </td>
                    <td className="py-3 text-sm text-gray-600">
                      {article.cityTreatment.treatment.title_en}
                    </td>
                    <td className="py-3 text-sm text-gray-600">
                      {article.views.toLocaleString()}
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        {article.published && (
                          <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                            Published
                          </span>
                        )}
                        {!article.published && (
                          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700">
                            Draft
                          </span>
                        )}
                        {article.needsNativeReview && (
                          <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-700">
                            Native Review
                          </span>
                        )}
                        {article.needsMedicalReview && (
                          <span className="rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-700">
                            Medical Review
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <Link href={`/admin/articles/${article.id}/edit`}>
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

            {articles.length === 0 && (
              <div className="py-12 text-center text-gray-500">
                <p className="mb-4">No articles yet</p>
                <Link href="/admin/articles/new">
                  <Button className="bg-primary-600 hover:bg-primary-700">
                    <Plus className="mr-2 h-4 w-4" />
                    Add First Article
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

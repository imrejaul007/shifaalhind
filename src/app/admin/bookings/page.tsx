import { prisma } from '@/lib/prisma';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDate } from '@/lib/utils';

export default async function AdminBookingsPage() {
  const bookings = await prisma.booking.findMany({
    take: 20,
    orderBy: { createdAt: 'desc' },
    include: {
      treatment: true,
      user: true,
    },
  });

  const statusColors: Record<string, string> = {
    PENDING: 'bg-yellow-100 text-yellow-700',
    CONTACTED: 'bg-blue-100 text-blue-700',
    CONFIRMED: 'bg-green-100 text-green-700',
    CANCELLED: 'bg-red-100 text-red-700',
    COMPLETED: 'bg-gray-100 text-gray-700',
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">Bookings</h1>
        <p className="text-gray-600">Manage patient booking requests</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Bookings ({bookings.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left text-sm text-gray-600">
                  <th className="pb-3">Patient</th>
                  <th className="pb-3">Email</th>
                  <th className="pb-3">Phone</th>
                  <th className="pb-3">Treatment</th>
                  <th className="pb-3">Country</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 font-medium">{booking.userName}</td>
                    <td className="py-3 text-sm text-gray-600">{booking.email}</td>
                    <td className="py-3 text-sm text-gray-600">{booking.phone}</td>
                    <td className="py-3 text-sm">
                      {booking.treatment?.title_en || 'N/A'}
                    </td>
                    <td className="py-3 text-sm">{booking.countryOrigin}</td>
                    <td className="py-3">
                      <span
                        className={`rounded-full px-2 py-1 text-xs ${
                          statusColors[booking.status] || 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>
                    <td className="py-3 text-sm text-gray-600">
                      {formatDate(booking.createdAt, 'en')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {bookings.length === 0 && (
              <div className="py-12 text-center text-gray-500">
                No bookings yet
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

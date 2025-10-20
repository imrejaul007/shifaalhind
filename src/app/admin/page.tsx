import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileText, Building2, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    {
      title: 'Total Bookings',
      value: '156',
      change: '+12%',
      icon: FileText,
      color: 'text-blue-600',
    },
    {
      title: 'Active Patients',
      value: '89',
      change: '+8%',
      icon: Users,
      color: 'text-green-600',
    },
    {
      title: 'Partner Hospitals',
      value: '52',
      change: '+3',
      icon: Building2,
      color: 'text-purple-600',
    },
    {
      title: 'Monthly Revenue',
      value: '$125K',
      change: '+15%',
      icon: TrendingUp,
      color: 'text-orange-600',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here&apos;s your overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-green-600">{stat.change} from last month</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between border-b pb-3">
                  <div>
                    <div className="font-medium">Patient {i}</div>
                    <div className="text-sm text-gray-600">Heart Surgery • Dubai</div>
                  </div>
                  <div className="rounded-full bg-yellow-100 px-3 py-1 text-xs text-yellow-700">
                    Pending
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <button className="w-full rounded-lg border p-3 text-left hover:bg-gray-50">
                + Add New Booking
              </button>
              <button className="w-full rounded-lg border p-3 text-left hover:bg-gray-50">
                + Create Content
              </button>
              <button className="w-full rounded-lg border p-3 text-left hover:bg-gray-50">
                + Add Hospital
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

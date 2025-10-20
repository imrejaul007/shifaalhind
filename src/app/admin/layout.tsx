'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  FileText,
  Building2,
  Users,
  Settings,
  LogOut
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 text-2xl">Loading...</div>
        </div>
      </div>
    );
  }

  if (!session) {
    redirect('/admin/login');
  }

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Bookings', href: '/admin/bookings', icon: FileText },
    { name: 'Content', href: '/admin/content', icon: FileText },
    { name: 'Hospitals', href: '/admin/hospitals', icon: Building2 },
    { name: 'Users', href: '/admin/users', icon: Users },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="font-serif text-2xl font-bold text-primary-600">
            Shifa AlHind
          </h1>
          <p className="text-sm text-gray-600">Admin Panel</p>
        </div>

        <nav className="px-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="mb-1 flex items-center gap-3 rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-700"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 w-64 border-t p-4">
          <div className="mb-2 text-sm">
            <div className="font-medium">{session.user?.name}</div>
            <div className="text-gray-600">{session.user?.email}</div>
          </div>
          <Button variant="outline" size="sm" className="w-full">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-8">{children}</main>
    </div>
  );
}

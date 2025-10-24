'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Save, Loader2, MessageSquare, Trash2 } from 'lucide-react';
import Link from 'next/link';

const BOOKING_STATUSES = [
  { value: 'PENDING', label: 'Pending', color: 'bg-yellow-100 text-yellow-700' },
  { value: 'CONTACTED', label: 'Contacted', color: 'bg-blue-100 text-blue-700' },
  { value: 'CONSULTATION_SCHEDULED', label: 'Consultation Scheduled', color: 'bg-purple-100 text-purple-700' },
  { value: 'DOCUMENTS_REQUESTED', label: 'Documents Requested', color: 'bg-indigo-100 text-indigo-700' },
  { value: 'DOCUMENTS_RECEIVED', label: 'Documents Received', color: 'bg-teal-100 text-teal-700' },
  { value: 'QUOTE_SENT', label: 'Quote Sent', color: 'bg-cyan-100 text-cyan-700' },
  { value: 'CONFIRMED', label: 'Confirmed', color: 'bg-green-100 text-green-700' },
  { value: 'CANCELLED', label: 'Cancelled', color: 'bg-red-100 text-red-700' },
  { value: 'COMPLETED', label: 'Completed', color: 'bg-gray-100 text-gray-700' },
];

interface Note {
  text: string;
  author: string;
  createdAt: string;
}

export default function EditBookingPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [bookingId, setBookingId] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState('');
  const [booking, setBooking] = useState<any>(null);
  const [status, setStatus] = useState('');
  const [newNote, setNewNote] = useState('');
  const [notes, setNotes] = useState<Note[]>([]);

  // Fetch booking data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resolvedParams = await params;
        setBookingId(resolvedParams.id);

        // Fetch booking data
        const bookingRes = await fetch(`/api/admin/bookings/${resolvedParams.id}`);
        if (!bookingRes.ok) throw new Error('Failed to fetch booking');

        const bookingData = await bookingRes.json();
        setBooking(bookingData);
        setStatus(bookingData.status);
        setNotes((bookingData.notes as Note[]) || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setFetching(false);
      }
    };

    fetchData();
  }, [params]);

  const handleStatusUpdate = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`/api/admin/bookings/${bookingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to update status');
      }

      const updatedBooking = await response.json();
      setBooking(updatedBooking);
      alert('Status updated successfully!');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddNote = async () => {
    if (!newNote.trim()) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`/api/admin/bookings/${bookingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notes: newNote }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to add note');
      }

      const updatedBooking = await response.json();
      setBooking(updatedBooking);
      setNotes((updatedBooking.notes as Note[]) || []);
      setNewNote('');
      alert('Note added successfully!');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this booking? This action cannot be undone.')) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`/api/admin/bookings/${bookingId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete booking');
      }

      router.push('/admin/bookings');
      router.refresh();
    } catch (err: any) {
      setError(err.message);
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

  if (!booking) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Booking not found</p>
        <Link href="/admin/bookings">
          <Button className="mt-4">Back to Bookings</Button>
        </Link>
      </div>
    );
  }

  const currentStatusColor = BOOKING_STATUSES.find(s => s.value === status)?.color || 'bg-gray-100 text-gray-700';

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <Link href="/admin/bookings">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Bookings
          </Button>
        </Link>
        <Button
          variant="outline"
          size="sm"
          onClick={handleDelete}
          className="text-red-600 hover:bg-red-50"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Delete Booking
        </Button>
      </div>

      {error && (
        <div className="mb-4 rounded-lg bg-red-50 p-4 text-red-700">
          {error}
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - Booking Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Patient Information */}
          <Card>
            <CardHeader>
              <CardTitle>Patient Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-gray-600">Name</label>
                  <p className="mt-1 text-base">{booking.userName}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Email</label>
                  <p className="mt-1 text-base">{booking.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Phone</label>
                  <p className="mt-1 text-base">{booking.phone}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Country</label>
                  <p className="mt-1 text-base">{booking.countryOrigin}</p>
                </div>
                {booking.cityOrigin && (
                  <div>
                    <label className="text-sm font-medium text-gray-600">City</label>
                    <p className="mt-1 text-base">{booking.cityOrigin}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Treatment Information */}
          <Card>
            <CardHeader>
              <CardTitle>Treatment Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                {booking.treatment && (
                  <div>
                    <label className="text-sm font-medium text-gray-600">Treatment</label>
                    <p className="mt-1 text-base">{booking.treatment.title_en}</p>
                  </div>
                )}
                {booking.package && (
                  <div>
                    <label className="text-sm font-medium text-gray-600">Package</label>
                    <p className="mt-1 text-base">{booking.package.name_en}</p>
                  </div>
                )}
                {booking.preferredDate && (
                  <div>
                    <label className="text-sm font-medium text-gray-600">Preferred Date</label>
                    <p className="mt-1 text-base">
                      {new Date(booking.preferredDate).toLocaleDateString()}
                    </p>
                  </div>
                )}
              </div>
              {booking.message && (
                <div>
                  <label className="text-sm font-medium text-gray-600">Message</label>
                  <p className="mt-1 text-base whitespace-pre-wrap">{booking.message}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Notes / Comments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Notes & Comments ({notes.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Existing Notes */}
              <div className="mb-4 space-y-3 max-h-96 overflow-y-auto">
                {notes.length === 0 ? (
                  <p className="text-sm text-gray-500">No notes yet</p>
                ) : (
                  notes.map((note, index) => (
                    <div key={index} className="rounded-lg bg-gray-50 p-3 border border-gray-200">
                      <p className="text-sm whitespace-pre-wrap">{note.text}</p>
                      <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                        <span className="font-medium">{note.author}</span>
                        <span>•</span>
                        <span>{new Date(note.createdAt).toLocaleString()}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Add Note Form */}
              <div className="space-y-2">
                <textarea
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  placeholder="Add a note or comment..."
                  rows={3}
                  className="w-full rounded-lg border p-2 text-sm"
                />
                <Button
                  onClick={handleAddNote}
                  disabled={loading || !newNote.trim()}
                  size="sm"
                >
                  {loading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <MessageSquare className="mr-2 h-4 w-4" />
                  )}
                  Add Note
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Status & Actions */}
        <div className="space-y-6">
          {/* Current Status */}
          <Card>
            <CardHeader>
              <CardTitle>Current Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className={`rounded-full px-3 py-1 text-sm font-medium ${currentStatusColor}`}>
                  {BOOKING_STATUSES.find(s => s.value === status)?.label || status}
                </span>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Update Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full rounded-lg border p-2"
                >
                  {BOOKING_STATUSES.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>

                <Button
                  onClick={handleStatusUpdate}
                  disabled={loading || status === booking.status}
                  className="w-full bg-primary-600 hover:bg-primary-700"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Updating...
                    </>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Update Status
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Booking Metadata */}
          <Card>
            <CardHeader>
              <CardTitle>Booking Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <label className="font-medium text-gray-600">Booking ID</label>
                <p className="mt-1 font-mono text-xs text-gray-500">{booking.id}</p>
              </div>
              <div>
                <label className="font-medium text-gray-600">Created</label>
                <p className="mt-1">{new Date(booking.createdAt).toLocaleString()}</p>
              </div>
              <div>
                <label className="font-medium text-gray-600">Last Updated</label>
                <p className="mt-1">{new Date(booking.updatedAt).toLocaleString()}</p>
              </div>
            </CardContent>
          </Card>

          {/* Status Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Status Flow</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-xs">
                {BOOKING_STATUSES.map((s, index) => {
                  const isCurrentOrPast = BOOKING_STATUSES.findIndex(st => st.value === status) >= index;
                  return (
                    <div
                      key={s.value}
                      className={`flex items-center gap-2 ${
                        s.value === status
                          ? 'font-bold text-primary-600'
                          : isCurrentOrPast
                          ? 'text-gray-600'
                          : 'text-gray-400'
                      }`}
                    >
                      <div
                        className={`h-2 w-2 rounded-full ${
                          s.value === status
                            ? 'bg-primary-600'
                            : isCurrentOrPast
                            ? 'bg-gray-400'
                            : 'bg-gray-300'
                        }`}
                      />
                      <span>{s.label}</span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

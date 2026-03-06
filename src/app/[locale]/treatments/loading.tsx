export default function TreatmentsLoading() {
  return (
    <div className="min-h-screen bg-gray-50 animate-pulse">
      {/* Hero skeleton */}
      <div className="bg-gray-200 px-4 py-16">
        <div className="container text-center">
          <div className="mx-auto mb-4 h-10 w-80 rounded bg-gray-300" />
          <div className="mx-auto h-5 w-96 rounded bg-gray-300" />
        </div>
      </div>

      {/* Grid skeleton */}
      <div className="container px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 h-40 rounded-lg bg-gray-200" />
              <div className="mb-2 h-6 w-3/4 rounded bg-gray-200" />
              <div className="mb-4 h-4 w-full rounded bg-gray-200" />
              <div className="h-10 w-32 rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

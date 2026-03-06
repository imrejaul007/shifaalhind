export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-gray-50 animate-pulse">
      <div className="bg-gray-200 px-4 py-16">
        <div className="container text-center">
          <div className="mx-auto mb-4 h-10 w-48 rounded bg-gray-300" />
          <div className="mx-auto h-5 w-72 rounded bg-gray-300" />
        </div>
      </div>

      <div className="container px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-xl bg-white shadow-sm overflow-hidden">
              <div className="h-48 bg-gray-200" />
              <div className="p-6">
                <div className="mb-2 h-4 w-20 rounded bg-gray-200" />
                <div className="mb-2 h-6 w-full rounded bg-gray-200" />
                <div className="mb-4 h-4 w-3/4 rounded bg-gray-200" />
                <div className="h-3 w-24 rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

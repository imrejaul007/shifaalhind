export default function DoctorsLoading() {
  return (
    <div className="min-h-screen bg-gray-50 animate-pulse">
      <div className="bg-gray-200 px-4 py-16">
        <div className="container text-center">
          <div className="mx-auto mb-4 h-10 w-64 rounded bg-gray-300" />
          <div className="mx-auto h-5 w-80 rounded bg-gray-300" />
        </div>
      </div>

      <div className="container px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="rounded-xl bg-white p-6 shadow-sm text-center">
              <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gray-200" />
              <div className="mx-auto mb-2 h-5 w-32 rounded bg-gray-200" />
              <div className="mx-auto mb-2 h-4 w-24 rounded bg-gray-200" />
              <div className="mx-auto h-3 w-40 rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

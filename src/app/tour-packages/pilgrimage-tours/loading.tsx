export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />

        <p className="mt-5 text-lg font-semibold text-gray-700">
          Loading Pilgrimage Tours...
        </p>
      </div>
    </div>
  );
}

export default async function PaymentSuccess({
  searchParams,
}: {
  searchParams: Promise<{ booking?: string }>;
}) {
  const { booking } = await searchParams;

  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-6 text-center">
      <div className="rounded-full bg-green-100 p-5">
        ✅
      </div>

      <h1 className="mt-6 text-4xl font-bold">
        Payment Successful
      </h1>

      <p className="mt-4 text-slate-600">
        Thank you for choosing Kuldeep Travels.
      </p>

      <p className="mt-2 font-semibold">
        Booking ID: {booking}
      </p>
    </main>
  );
}
export default function PaymentFailed() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-6 text-center">
      <div className="rounded-full bg-red-100 p-5">
        ❌
      </div>

      <h1 className="mt-6 text-4xl font-bold">
        Payment Failed
      </h1>

      <p className="mt-4 text-slate-600">
        Your payment was not completed. Please try again.
      </p>
    </main>
  );
}
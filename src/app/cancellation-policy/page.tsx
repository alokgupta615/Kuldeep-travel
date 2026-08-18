import React from "react";

export const metadata = {
  title: "Refund & Cancellation Policy | Kuldeep Travels",
  description: "Read our combined refund and cancellation policy.",
};

export default function CancellationPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 border-b pb-6">
          Refund & Cancellation Policy
        </h1>
        
        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Token Money</h2>
            <p>
              Token money paid for confirming a booking is strictly <strong>non-refundable</strong>. However, the service for the token amount can be availed in the future.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Sedans & SUVs (e.g., Ertiga, Swift Dzire, Innova)</h2>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Cancellation before 1 week:</strong> The booking amount is refundable if the cancellation is made more than one week prior to the journey date.
              </li>
              <li>
                <strong>Cancellation within 1 week:</strong> If cancelled within one week of the journey, the booking amount is <strong>non-refundable</strong>. However, the amount is not forfeited. You can use the paid amount for any future service within <strong>one year</strong> (the amount will be adjusted into your future booking).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Large Vehicles (Buses, Tempo Travellers, Urbania)</h2>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Cancellation before 30 days:</strong> Money is fully refundable if the cancellation is made 30 days prior to the journey.
              </li>
              <li>
                <strong>Cancellation within 30 days:</strong> If not cancelled 30 days in advance, the money is non-refundable. However, similar to smaller vehicles, the service can be availed in the future and the amount will be adjusted towards your next trip.
              </li>
            </ul>
          </section>

          <section className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mt-8">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Note regarding future services</h3>
            <p className="text-blue-800">
              Any non-refunded amount due to late cancellation is safely kept with us as credit. You can use this credit to book any vehicle within 1 year of your original cancellation date. The credit amount will be adjusted against your new total fare.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

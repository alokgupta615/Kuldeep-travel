import React from "react";

export const metadata = {
  title: "Terms & Conditions | Kuldeep Travels",
  description: "Read the terms and conditions for using Kuldeep Travels services.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 border-b pb-6">
          Terms & Conditions
        </h1>
        
        <div className="space-y-6 text-slate-700 leading-relaxed">
          <p>
            Welcome to Kuldeep Travels. By booking a taxi or tour with us, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Booking and Confirmation</h2>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>A booking is considered confirmed only after the token money or required advance payment is received.</li>
              <li>The token money is non-refundable, but it can be adjusted towards future services as outlined in our Cancellation Policy.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Fare and Payment</h2>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Fares are estimated based on standard distances and time. Extra kilometers, waiting charges, toll taxes, parking fees, and state border taxes (unless explicitly stated as included) will be charged additionally as per actuals.</li>
              <li>The remaining balance must be paid to the driver before the completion of the trip.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">3. Passenger Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Passengers must carry valid ID proof during travel.</li>
              <li>Kuldeep Travels is not responsible for any loss or damage to luggage or personal belongings left in the vehicle.</li>
              <li>Any damage caused to the vehicle by the passenger will be borne by the passenger.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Delays and Interruptions</h2>
            <p>
              While we strive to provide punctual service, Kuldeep Travels shall not be held liable for delays caused by heavy traffic, roadblocks, adverse weather conditions, vehicle breakdowns, or any other unforeseen circumstances beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Right to Refuse Service</h2>
            <p>
              We reserve the right to refuse service to any passenger who is intoxicated, behaves aggressively, or poses a threat to the safety of the driver or the vehicle.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

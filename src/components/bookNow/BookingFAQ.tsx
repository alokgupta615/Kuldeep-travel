"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I book a taxi?",
    answer:
      "Simply fill out the booking form with your pickup location, destination, travel date, time, and vehicle preference. Once submitted, our team will review and confirm your booking.",
  },
  {
    question: "When will my booking be confirmed?",
    answer:
      "Most bookings are confirmed within 5–15 minutes during business hours. You'll receive confirmation via WhatsApp and email.",
  },
  {
    question: "Can I pay after my trip?",
    answer:
      "Yes. You can choose 'Pay After Trip' while booking or pay online in advance using our secure payment gateway.",
  },
  {
    question: "Do you provide airport pickup and drop?",
    answer:
      "Yes. We provide reliable airport transfers with professional drivers and timely pickups for all major airports.",
  },
  {
    question: "Can I cancel or modify my booking?",
    answer:
      "Yes. Contact us as early as possible. Depending on the timing and booking status, cancellation or modification may be possible.",
  },
  {
    question: "Are tolls and parking charges included?",
    answer:
      "Tolls, parking fees, and state taxes (if applicable) are generally charged separately unless otherwise mentioned in your booking confirmation.",
  },
];

export default function BookingFAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto max-w-4xl px-6">

        {/* Heading */}

        <div className="mb-14 text-center">

          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            Have Questions?
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Find answers to the most common questions about booking with
            Kuldeep Travels.
          </p>

        </div>

        {/* FAQ */}

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  active === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-slate-600 leading-7">
                    {faq.answer}
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
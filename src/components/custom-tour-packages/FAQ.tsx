"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Can I completely customise my itinerary?",
    a: "Yes. Every destination, hotel, vehicle, sightseeing plan, and travel schedule can be personalised.",
  },
  {
    q: "Can I choose my own hotel?",
    a: "Absolutely. You can either book your own accommodation or let us arrange it.",
  },
  {
    q: "Is there a minimum number of travellers?",
    a: "No. We organise tours for solo travellers, couples, families, and large groups.",
  },
  {
    q: "Can I modify my itinerary after booking?",
    a: "Yes. Subject to availability, we'll do our best to accommodate changes.",
  },
  {
    q: "How do I get a quotation?",
    a: "Share your destination, travel dates, number of travellers, and budget. We'll prepare a customised quotation.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-3xl font-black sm:text-4xl lg:text-5xl">
            Got Questions?
          </h2>
        </div>

        <div className="mt-14 space-y-5">
          {faqs.map((faq, index) => (
            <div key={faq.q} className="overflow-hidden rounded-3xl border">
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-slate-900">{faq.q}</span>

                <ChevronDown
                  className={`transition ${open === index ? "rotate-180" : ""}`}
                />
              </button>

              {open === index && (
                <div className="border-t bg-slate-50 px-6 py-5 text-slate-600 leading-7">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

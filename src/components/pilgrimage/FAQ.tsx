"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/pilgrimage";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
            Everything You Need To Know
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Find answers about our pilgrimage tour packages, customization,
            vehicles, booking process, and travel assistance.
          </p>
        </div>

        {/* FAQ LIST */}

        <div className="mt-14 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 ${
                open === index
                  ? "border-yellow-400 shadow-lg"
                  : "border-gray-200 hover:border-blue-300"
              }`}
            >
              {/* Question */}

              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left md:px-8"
              >
                <h3 className="text-lg font-bold text-gray-900 md:text-xl">
                  {faq.question}
                </h3>

                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                    open === index
                      ? "bg-yellow-400 text-black"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      open === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Answer */}

              <div
                className={`grid transition-all duration-300 ${
                  open === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-gray-100 px-6 py-5 text-base leading-7 text-gray-600 md:px-8">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

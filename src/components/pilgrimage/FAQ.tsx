"use client";

import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { faqs } from "@/data/pilgrimage";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-xs font-semibold text-yellow-700 sm:px-5 sm:text-sm">
            <Sparkles className="h-4 w-4" />
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-2xl font-black leading-tight text-slate-900 sm:text-3xl lg:text-5xl">
            Everything You Need To Know
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base lg:text-lg">
            Find answers about our pilgrimage tour packages, customization,
            vehicles, booking process and travel assistance.
          </p>
        </div>

        {/* FAQ */}

        <div className="mt-8 space-y-3 sm:mt-10 lg:mt-14 lg:space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:shadow-md sm:rounded-2xl ${
                open === index
                  ? "border-blue-600 shadow-lg"
                  : "border-slate-200"
              }`}
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:px-6 sm:py-5 lg:px-8"
              >
                <h3 className="pr-2 text-[15px] font-semibold leading-6 text-slate-900 sm:text-lg lg:text-xl">
                  {faq.question}
                </h3>

                <div
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-10 sm:w-10 ${
                    open === index
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      open === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  open === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-slate-100 px-4 py-4 text-sm leading-7 text-slate-600 sm:px-6 sm:text-base lg:px-8">
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

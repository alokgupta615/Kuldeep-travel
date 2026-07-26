"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Which are the best weekend getaways from Lucknow?",
    answer:
      "Popular destinations include Ayodhya, Varanasi, Prayagraj, Naimisharanya, Dudhwa National Park, Agra, Mussoorie, Nainital, Haridwar and Rishikesh.",
  },
  {
    question: "Can I customise my weekend package?",
    answer:
      "Yes. Every itinerary is customised according to your travel dates, interests and budget.",
  },
  {
    question: "Do you provide transportation only?",
    answer:
      "Yes. You can book only a vehicle or choose a complete weekend package with hotel assistance and sightseeing.",
  },
  {
    question: "Which vehicle should I choose?",
    answer:
      "Our travel experts recommend the most suitable vehicle based on your group size, luggage and destination.",
  },
  {
    question: "Do you organise group tours?",
    answer:
      "Absolutely. We arrange trips for families, schools, corporate teams, friends and religious groups.",
  },
  {
    question: "How do I book a weekend tour?",
    answer:
      "Simply contact Kuldeep Travels or use our online booking form. We'll prepare a customised itinerary and quotation.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
            Have Questions?
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Everything you need to know before booking your weekend getaway.
          </p>
        </div>

        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border bg-white shadow-sm"
            >
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between px-7 py-6 text-left"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`h-6 w-6 transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  open === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-7 pb-6 text-slate-600 leading-7">
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

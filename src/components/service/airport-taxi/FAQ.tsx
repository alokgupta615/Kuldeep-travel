"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you provide airport pickup and drop services?",
    answer:
      "Yes. We provide both airport pickup and airport drop services across Lucknow with professional drivers and comfortable vehicles.",
  },
  {
    question: "Is your airport taxi service available 24×7?",
    answer:
      "Yes. Our airport taxi service is available throughout the day and night. We recommend booking in advance for early morning or late-night flights.",
  },
  {
    question: "Can I pre-book my airport cab?",
    answer:
      "Absolutely. Advance booking helps ensure better vehicle availability and a hassle-free travel experience.",
  },
  {
    question: "What if my flight is delayed?",
    answer:
      "Please inform our booking team about any changes. We will make reasonable adjustments based on your updated arrival time.",
  },
  {
    question: "Which vehicle should I choose?",
    answer:
      "Our team will recommend the best vehicle depending on the number of passengers, luggage and travel requirements.",
  },
  {
    question: "Do you provide airport taxis for business travellers?",
    answer:
      "Yes. We regularly provide airport transportation for corporate executives, business meetings and company guests.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-gray-600">
            Answers to the most common questions about our Airport Taxi Service.
          </p>
        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-2xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 bg-gray-50"
              >
                <span className="font-semibold text-gray-900 text-left">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="p-6 bg-white text-gray-600 leading-8">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
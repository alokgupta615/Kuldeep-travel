"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you provide cab service throughout Lucknow?",
    answer:
      "Yes, we provide cab services across major residential areas, commercial locations, hotels, hospitals, railway stations and the airport.",
  },
  {
    question: "Can I book an airport taxi anytime?",
    answer:
      "Yes, airport pickup and drop services are available 24×7. Advance booking is recommended.",
  },
  {
    question: "Do you offer outstation taxi services?",
    answer:
      "Yes, we provide one-way and round-trip taxi services across Uttar Pradesh and nearby states.",
  },
  {
    question: "Can I make multiple stops?",
    answer:
      "Yes, simply inform our booking team while making your reservation.",
  },
  {
    question: "Which payment methods are accepted?",
    answer:
      "We support UPI, Cash, Bank Transfer and other available payment options.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-semibold">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {active === index && (
                <div className="px-6 pb-6 text-gray-600 leading-7">
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
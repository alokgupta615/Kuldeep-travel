"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I book a cab or tour package?",
    answer:
      "You can call us directly, send us a WhatsApp message, email us, or fill out the contact form. Share your travel details, and our team will guide you through the booking process.",
  },
  {
    question: "How quickly will I receive a quotation?",
    answer:
      "Most quotations are shared shortly after we receive your travel details. Customized tours or large group bookings may take a little longer depending on your requirements.",
  },
  {
    question: "Can I book transportation for a large group?",
    answer:
      "Yes. We arrange transportation for families, corporate teams, wedding guests, schools, colleges, and other group travel requirements using Tempo Travellers, Mini Buses, and Luxury Coaches.",
  },
  {
    question: "Do you arrange customized tour packages?",
    answer:
      "Yes. We create personalized travel itineraries based on your destination, travel duration, group size, and budget.",
  },
  {
    question: "Is advance booking recommended?",
    answer:
      "Yes. We recommend booking as early as possible, especially during weekends, long holidays, wedding season, and major festivals, to ensure better vehicle availability.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We provide travel services across Lucknow, including local transportation, airport transfers, outstation taxi services, and tour packages to destinations across North India.",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            FAQs
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Find answers to common questions about our taxi services, tour
            packages, and booking process.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-14 space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={22}
                    className={`text-gray-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-gray-200 px-6 py-5">
                    <p className="leading-8 text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
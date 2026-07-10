"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I book a cab or tour package?",
    answer:
      "You can call us, send a WhatsApp message, email us, or fill out the contact form. Our team will guide you through the booking process.",
  },
  {
    question: "How quickly will I receive a quotation?",
    answer:
      "Most quotations are shared shortly after receiving your travel details. Customized tours may require additional planning.",
  },
  {
    question: "Can I book transportation for a large group?",
    answer:
      "Yes. We provide Tempo Travellers, Mini Buses, and Luxury Coaches for families, corporate teams, weddings, schools, and other group travel.",
  },
  {
    question: "Do you arrange customized tour packages?",
    answer:
      "Yes. We prepare personalized itineraries based on your destination, budget, group size, and travel duration.",
  },
  {
    question: "Is advance booking recommended?",
    answer:
      "Yes. Booking early helps ensure better vehicle availability, especially during weekends, holidays, festivals, and wedding season.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We provide local taxi services across Lucknow, airport transfers, outstation taxi services, and tour packages throughout North India.",
  },
];

export default function ContactFAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center">

          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            FAQs
          </span>

          <h2 className="mt-3 text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-gray-600">
            Find answers to common questions about our taxi services,
            tour packages, and booking process.
          </p>

        </div>

        <div className="mt-14 space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border"
            >

              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    active === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {active === index && (

                <div className="px-6 pb-6 text-gray-600 leading-8">

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
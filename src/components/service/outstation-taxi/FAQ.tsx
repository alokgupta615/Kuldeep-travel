"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Which cities do you provide outstation cab services to?",
    answer:
      "We provide outstation taxi services from Lucknow to Ayodhya, Varanasi, Prayagraj, Kanpur, Agra, Delhi, Jaipur, Nainital, Mussoorie, Jim Corbett and hundreds of other destinations across North India.",
  },
  {
    question: "Can I book a one-way outstation cab?",
    answer:
      "Yes. We offer both one-way and round-trip outstation cab services with transparent pricing and no hidden charges.",
  },
  {
    question: "Which vehicles are available for outstation travel?",
    answer:
      "You can choose from Sedan, SUV, Innova Crysta and Tempo Traveller depending on your group size, luggage and travel requirements.",
  },
  {
    question: "Are toll taxes and parking charges included?",
    answer:
      "Our team will clearly explain what is included in your quotation before booking. Any additional charges, if applicable, are communicated in advance.",
  },
  {
    question: "Can I make multiple stops during my journey?",
    answer:
      "Yes. You can plan multiple stops for meals, sightseeing, shopping or meetings. Let us know your itinerary while booking.",
  },
  {
    question: "Are your drivers verified?",
    answer:
      "Yes. All our drivers are experienced, professionally trained and verified to ensure a safe and comfortable travel experience.",
  },
  {
    question: "How can I book an outstation cab?",
    answer:
      "You can book through our website, call us directly or contact us on WhatsApp. Our team will confirm your booking immediately.",
  },
  {
    question: "Is customer support available during the trip?",
    answer:
      "Yes. Our support team is available 24×7 to assist you before, during and after your journey.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
            Have Questions?
            <span className="block text-blue-700">
              We Have Answers.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Find answers to the most common questions about our
            outstation cab services in Lucknow.
          </p>

        </div>

        {/* FAQ List */}

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => {

            const open = active === index;

            return (

              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >

                <button
                  onClick={() =>
                    setActive(open ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left transition hover:bg-slate-50"
                >

                  <div className="flex items-center gap-4">

                    <div className="rounded-xl bg-blue-100 p-3">

                      <HelpCircle className="text-blue-600" />

                    </div>

                    <h3 className="text-lg font-semibold text-slate-900">

                      {faq.question}

                    </h3>

                  </div>

                  <ChevronDown
                    className={`transition duration-300 ${
                      open ? "rotate-180 text-blue-600" : ""
                    }`}
                  />

                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    open
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">

                    <p className="px-6 pb-6 pl-20 leading-8 text-slate-600">

                      {faq.answer}

                    </p>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}
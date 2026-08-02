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
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700 md:px-5 md:text-sm">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-3xl font-black text-slate-900 md:text-5xl">
            Have Questions?
            <span className="block text-blue-700">We Have Answers.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            Everything you need to know before booking your outstation cab.
          </p>
        </div>

        {/* FAQ */}

        <div className="mt-10 space-y-4 md:mt-14">
          {faqs.map((faq, index) => {
            const open = active === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-blue-200 hover:shadow-lg"
              >
                <button
                  onClick={() => setActive(open ? null : index)}
                  className="flex w-full items-start justify-between gap-4 p-4 md:p-6 text-left"
                >
                  <div className="flex flex-1 items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                      <HelpCircle className="h-5 w-5 text-blue-700" />
                    </div>

                    <h3 className="text-base font-semibold leading-7 text-slate-900 md:text-lg">
                      {faq.question}
                    </h3>
                  </div>

                  <ChevronDown
                    className={`mt-1 h-5 w-5 shrink-0 transition-transform duration-300 ${
                      open ? "rotate-180 text-blue-700" : "text-slate-500"
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-5 text-sm leading-7 text-slate-600 md:px-6 md:pb-6 md:pl-[4.5rem] md:text-base md:leading-8">
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

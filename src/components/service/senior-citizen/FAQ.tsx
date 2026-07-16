"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can I book a cab for my parents if I won't be traveling with them?",
    answer:
      "Yes. Many of our customers arrange transportation for elderly parents or relatives who are traveling independently. Simply share the passenger's pickup and drop details, and we'll coordinate the journey accordingly.",
  },
  {
    question: "Is your senior citizen cab service available for outstation travel?",
    answer:
      "Absolutely. We provide both local and outstation transportation for medical visits, pilgrimages, family functions, vacations, airport transfers, and other travel requirements.",
  },
  {
    question: "Which vehicle is most comfortable for elderly passengers?",
    answer:
      "The ideal vehicle depends on the travel distance and number of passengers. For longer journeys, many families prefer the Innova Crysta because of its spacious seating, comfortable ride, and easy entry and exit.",
  },
  {
    question: "Can I book a cab for regular hospital visits?",
    answer:
      "Yes. If regular transportation is required for ongoing treatments, physiotherapy, dialysis, or routine medical appointments, we're happy to arrange bookings whenever needed.",
  },
  {
    question: "Are your drivers experienced?",
    answer:
      "Yes. Our drivers are professional, courteous, and experienced. They are familiar with local routes in Lucknow as well as major outstation destinations, ensuring a safe and comfortable journey.",
  },
  {
    question: "How do I book a senior citizen cab?",
    answer:
      "Simply call us or send us a WhatsApp message with your pickup location, destination, travel date, and preferred pickup time. We'll recommend the right vehicle, share the fare estimate, and confirm your booking.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Everything You Need to Know
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Here are answers to some of the most common questions families ask
            before booking our Senior Citizen Cab Service in Lucknow.
          </p>

        </div>

        {/* FAQ */}

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left transition hover:bg-blue-50"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`h-6 w-6 text-blue-700 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 leading-8 text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Notice */}

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 p-10 text-center">

          <h3 className="text-3xl font-bold text-white">
            Still Have Questions?
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Our team is happy to help you choose the right vehicle, explain the
            booking process, and answer any questions about senior citizen
            travel. Contact us anytime for friendly assistance.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="/contact"
              className="rounded-xl bg-yellow-400 px-7 py-4 font-semibold text-blue-950 transition hover:bg-yellow-300"
            >
              Book Now
            </a>

            <a
              href="tel:+919999999999"
              className="rounded-xl border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-900"
            >
              Call Now
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
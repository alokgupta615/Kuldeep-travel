"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can I customize my holiday package?",
    answer:
      "Yes. We create personalized holiday packages based on your preferred destinations, travel dates, number of travelers, accommodation preferences, sightseeing plans, and budget.",
  },
  {
    question: "Do your holiday packages include hotel accommodation?",
    answer:
      "Yes. Hotel accommodation can be included according to your selected package and budget. We offer standard, deluxe, and premium hotel options.",
  },
  {
    question: "Which destinations do you cover?",
    answer:
      "Our holiday packages cover Ayodhya, Varanasi, Prayagraj, Agra, Delhi, Haridwar, Rishikesh, Mussoorie, Nainital, Jim Corbett, and many other destinations across North India.",
  },
  {
    question: "Which vehicles are available for holiday trips?",
    answer:
      "You can choose from Hatchbacks, Sedans, SUVs, Ertiga, Innova Crysta, Tempo Travellers, Mini Buses, and Luxury Coaches depending on your group size.",
  },
  {
    question: "Can I book a package for a large group?",
    answer:
      "Absolutely. We regularly arrange holiday tours for families, corporate groups, schools, colleges, pilgrimage groups, and social organizations.",
  },
  {
    question: "How do I get the package price?",
    answer:
      "Simply share your destination, travel dates, number of travelers, and preferred package. We'll provide a customized quotation with complete pricing details.",
  },
  {
    question: "Are toll tax and parking charges included?",
    answer:
      "Depending on your selected package, toll tax, parking charges, and driver allowance may already be included in the quotation.",
  },
  {
    question: "Can I change my itinerary after booking?",
    answer:
      "Yes. Minor itinerary changes can usually be accommodated based on availability. Our team will assist you with any modifications.",
  },
  {
    question: "Is advance booking required?",
    answer:
      "We recommend booking in advance to secure your preferred travel dates, hotels, and vehicle selection, especially during peak holiday seasons.",
  },
  {
    question: "How do I book my holiday package?",
    answer:
      "You can contact us by phone, WhatsApp, or through our online booking form. Our travel experts will guide you through the complete booking process.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Everything You Need to Know
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Find answers to the most common questions about our holiday
            packages, bookings, vehicles, pricing, and travel planning.
          </p>
        </div>

        {/* FAQ */}

        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between p-6 text-left transition hover:bg-slate-50"
                >
                  <h3 className="pr-5 text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`h-6 w-6 flex-shrink-0 text-blue-700 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-gray-100 px-6 py-5">
                      <p className="leading-8 text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 p-10 text-center text-white">
          <h3 className="text-3xl font-bold">
            Still Have Questions?
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Our travel experts are happy to help you choose the perfect holiday
            package, recommend destinations, and answer any questions about your
            upcoming trip.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-blue-950 transition hover:bg-yellow-300"
          >
            Contact Our Travel Experts
          </a>
        </div>
      </div>
    </section>
  );
}
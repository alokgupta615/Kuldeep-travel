"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question:
      "What destinations are included in your Family Tour Packages from Lucknow?",
    answer:
      "We offer family tour packages to popular destinations including Nainital, Mussoorie, Jim Corbett, Jaipur, Agra, Ayodhya, Varanasi, Haridwar, Rishikesh, Shimla, Manali, and many other locations across North India. Custom destinations are also available.",
  },
  {
    question: "Can I customise my family tour package?",
    answer:
      "Yes. Every package can be customised according to your travel dates, budget, destinations, hotel preferences, sightseeing plans, and vehicle requirements.",
  },
  {
    question: "Which vehicles are available for family tours?",
    answer:
      "We provide Sedan, SUV, Innova Crysta, Tempo Traveller, Mini Bus, and Luxury Coaches depending on your group size and travel requirements.",
  },
  {
    question: "Do you provide hotel booking assistance?",
    answer:
      "Yes. We can assist with hotel bookings ranging from budget hotels to premium resorts based on your preferences and budget.",
  },
  {
    question: "Are your drivers experienced?",
    answer:
      "Absolutely. All our drivers are experienced, professionally trained, verified, and familiar with major tourist destinations to ensure a safe and comfortable journey.",
  },
  {
    question: "Can senior citizens and children travel comfortably?",
    answer:
      "Yes. Our family tour packages are suitable for travellers of all ages. We recommend spacious vehicles and flexible itineraries for families travelling with children or senior citizens.",
  },
  {
    question: "How do I book a family tour package?",
    answer:
      "Simply contact us through our website, call us directly, or use the online booking form. Our travel consultant will prepare a customised itinerary and quotation for you.",
  },
  {
    question: "What payment options are available?",
    answer:
      "We support secure online payments and other available payment methods. Payment schedules depend on the selected package and booking policy.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-100 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Family Tour Package
            <span className="block text-blue-700">
              Frequently Asked Questions
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Find answers to the most common questions about our Family Tour
            Packages from Lucknow. If you need more information, our travel
            experts are always happy to help.
          </p>
        </div>

        {/* FAQ List */}

        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-7 py-6 text-left"
                >
                  <h3 className="pr-6 text-lg font-semibold text-slate-900">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`h-6 w-6 text-blue-700 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-100 px-7 py-6 text-slate-600 leading-8">
                      {faq.answer}
                    </div>
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

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is a one-way cab service?",
    answer:
      "A one-way cab service allows you to travel from one city to another without paying for a return journey. You pay only for the trip you actually take, making it an economical choice for intercity travel.",
  },
  {
    question: "Do I have to pay return charges?",
    answer:
      "No. With our one-way cab service, you pay only for your planned journey. The fare is confirmed before booking so you know the cost in advance.",
  },
  {
    question: "Can I book a one-way cab in advance?",
    answer:
      "Yes. We recommend booking in advance, especially during weekends, holidays, and festive seasons, to ensure better vehicle availability.",
  },
  {
    question: "Which cities can I travel to from Lucknow?",
    answer:
      "We provide one-way cab services from Lucknow to Ayodhya, Varanasi, Prayagraj, Kanpur, Gorakhpur, Agra, Delhi, Bareilly, and many other destinations across Uttar Pradesh and neighbouring states.",
  },
  {
    question: "Can I stop during the journey?",
    answer:
      "Yes. Short stops for refreshments, fuel, or personal requirements are generally possible. If you expect multiple or longer stops, please let us know during booking.",
  },
  {
    question: "Which vehicles are available?",
    answer:
      "You can choose from comfortable Sedans, spacious SUVs, and premium Innova Crysta vehicles depending on the number of passengers, luggage, and your travel preferences.",
  },
  {
    question: "Can I book a cab for someone else?",
    answer:
      "Absolutely. You can arrange a cab for your family members, friends, guests, or colleagues. Simply share the passenger details while booking.",
  },
  {
    question: "Is the service available every day?",
    answer:
      "Yes. Our one-way cab service operates seven days a week, including weekends and public holidays, subject to vehicle availability.",
  },
  {
    question: "How can I book a one-way cab?",
    answer:
      "You can book by calling us, sending a WhatsApp message, or submitting an enquiry through our website. We'll confirm the fare and booking details before your trip.",
  },
  {
    question: "Can I choose the vehicle?",
    answer:
      "Yes. Based on your travel requirements, passenger count, and luggage, you can choose the vehicle that best suits your journey.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Everything You Need to Know
            <span className="block text-blue-700">
              Before Booking
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Here are answers to some of the most common questions about our
            One Way Cab Service in Lucknow.
          </p>

        </div>

        {/* Accordion */}

        <div className="mt-14 space-y-5">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 text-blue-700 transition-transform duration-300 ${
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
                    <p className="px-6 pb-6 leading-8 text-gray-600">
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
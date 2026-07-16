"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Which cars are available for weddings?",
    answer:
      "We offer Luxury Sedans, Premium SUVs, Innova Crysta, Tempo Travellers, Mini Buses and Luxury Coaches depending on your wedding transportation requirements.",
  },
  {
    question: "Can I book more than one vehicle?",
    answer:
      "Yes. Many of our clients reserve separate vehicles for the bride, groom, close family members, VIP guests and wedding attendees. We can coordinate the entire fleet for your event.",
  },
  {
    question: "Do you provide decorated wedding cars?",
    answer:
      "Absolutely. We offer fresh flower decoration, ribbon styling, traditional Indian decoration, minimalist luxury themes and customized decoration based on your wedding colors.",
  },
  {
    question: "How early should I reserve my wedding car?",
    answer:
      "We recommend booking as early as possible, especially during the wedding season, to secure your preferred vehicle and decoration style.",
  },
  {
    question: "Can I book vehicles for all wedding events?",
    answer:
      "Yes. We arrange transportation for engagement ceremonies, haldi, mehendi, sangeet, wedding, reception and post-wedding celebrations.",
  },
  {
    question: "Do you provide outstation wedding transportation?",
    answer:
      "Yes. We regularly provide transportation for destination weddings across Uttar Pradesh and nearby states, including guest transfers and complete fleet coordination.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-gradient-to-b from-[#FFFCF7] to-white py-24">
      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">

            Everything You Need To Know

            <span className="block text-blue-700">

              Before Booking

            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">

            Here are some of the most common questions couples ask before
            reserving a wedding car with Kuldeep Travels.

          </p>

        </div>

        {/* FAQ */}

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => {

            const active = open === index;

            return (

              <div
                key={faq.question}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all"
              >

                <button
                  onClick={() => setOpen(active ? -1 : index)}
                  className="flex w-full items-center justify-between p-7 text-left"
                >

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-yellow-400">

                      <HelpCircle size={22} />

                    </div>

                    <h3 className="text-xl font-bold text-slate-900">

                      {faq.question}

                    </h3>

                  </div>

                  <ChevronDown
                    size={24}
                    className={`transition duration-300 ${
                      active ? "rotate-180 text-yellow-500" : "text-slate-400"
                    }`}
                  />

                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    active
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >

                  <div className="overflow-hidden">

                    <div className="border-t border-slate-100 px-7 pb-7 pt-6">

                      <p className="leading-8 text-slate-600">

                        {faq.answer}

                      </p>

                    </div>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

        {/* Bottom Note */}

        <div className="mt-16 rounded-[32px] bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 p-10 text-center shadow-2xl">

          <h3 className="text-3xl font-black text-white">

            Still Have Questions?

          </h3>

          <p className="mt-5 text-lg leading-8 text-blue-100">

            Every wedding is unique. If you have specific transportation,
            decoration or scheduling requirements, our team is happy to
            provide personalized guidance.

          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex rounded-xl bg-yellow-400 px-8 py-4 font-bold text-slate-900 transition hover:bg-yellow-500"
          >
            Talk To Our Wedding Experts
          </a>

        </div>

      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Phone, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "How do I book a cab or tour with Kuldeep Travels?",
    answer:
      "You can book instantly by calling us at +91 99364 08109, chatting on WhatsApp, or submitting the online booking form on this page. Our travel coordinator will confirm vehicle availability and send you driver details promptly.",
  },
  {
    question: "Are your fares fixed with no hidden charges?",
    answer:
      "Yes. We practice 100% transparent pricing. Your quotation includes driver allowance, fuel, and vehicle charges. Toll taxes and state entry permits are clearly specified in advance so you face zero surprises.",
  },
  {
    question: "How early should I book for airport transfers and outstation trips?",
    answer:
      "For local and airport transfers, we recommend booking at least 1-2 hours in advance. For outstation trips, Tempo Travellers, and luxury buses, booking 24-48 hours ahead ensures you get your preferred vehicle model and best rates.",
  },
  {
    question: "What group transportation options do you provide?",
    answer:
      "We operate 12-seater, 17-seater, 20-seater, and 26-seater luxury Tempo Travellers, as well as 35, 45, and 55-seater luxury AC tourist buses for weddings, corporate outings, school trips, and pilgrimages.",
  },
  {
    question: "Can I customize my tour itinerary (e.g. Ayodhya, Varanasi, Nepal)?",
    answer:
      "Absolutely! We specialize in tailored itineraries. Tell us your departure dates, family or group size, and points of interest, and our travel specialists will curate a custom trip plan.",
  },
  {
    question: "What is your cancellation and refund policy?",
    answer:
      "We offer flexible cancellation. If your travel plans change, notify us before the chauffeur is dispatched for a hassle-free cancellation or rescheduling.",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-14 md:py-20 border-t border-slate-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3.5 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-800">
            <HelpCircle size={14} className="text-blue-600" />
            Common Queries
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-600 leading-relaxed">
            Quick answers about booking cabs, outstation trips, Tempo Travellers,
            and custom tour packages in Lucknow.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-10 space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? "border-blue-300 bg-blue-50/40 shadow-sm"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-4 sm:p-5 text-left gap-3"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.question}
                  </span>

                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                      isOpen
                        ? "bg-blue-600 text-white rotate-180"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-blue-100/80 px-4 sm:px-5 pb-5 pt-3">
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-10 rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-6 text-center">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Have a question not listed above?
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            Speak directly with our 24×7 customer support team.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+919936408109"
              className="inline-flex items-center gap-1.5 rounded-xl bg-blue-700 px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-blue-800 transition"
            >
              <Phone size={14} />
              <span>Call +91 99364 08109</span>
            </a>

            <a
              href="https://wa.me/919936408109"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-2 text-xs sm:text-sm font-semibold text-emerald-800 hover:bg-emerald-100 transition"
            >
              <MessageCircle size={14} className="text-emerald-600" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
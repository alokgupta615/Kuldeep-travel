"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How do I confirm my taxi booking?",
    answer:
      "Simply fill in your travel route, select your vehicle, and choose whether to pay online or pay after the trip. Once submitted, our 24×7 dispatch team immediately confirms your booking via WhatsApp and SMS.",
  },
  {
    question: "Can I book a cab without paying advance?",
    answer:
      "Yes! Select the 'Pay After Trip' option in Step 6 of the booking form. You can pay the chauffeur directly via UPI, Card, or Cash after reaching your destination.",
  },
  {
    question: "When will I receive driver and vehicle details?",
    answer:
      "For scheduled bookings, driver contact number and cab license plate are shared 1–2 hours before your pickup time via WhatsApp and SMS. For immediate bookings, details are shared within 5 minutes.",
  },
  {
    question: "What if my flight arrives late at Lucknow Airport?",
    answer:
      "We monitor live flight statuses for Chaudhary Charan Singh International Airport (LKO). There are no extra waiting fees for flight delays, and our driver will be waiting at the arrival gate.",
  },
  {
    question: "Can I modify or cancel my booking?",
    answer:
      "Yes. You can modify your travel date, time, or route by contacting our 24×7 helpline at +91 99364 08109 or via WhatsApp. Cancellation is 100% free up to 6 hours before pickup.",
  },
  {
    question: "Are toll taxes and state permits included?",
    answer:
      "For standard outstation and airport fares, toll taxes, state border permits, and parking charges are charged transparently as per actual receipts unless included in a fixed package rate.",
  },
];

export default function BookingFAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="bg-white py-14 md:py-24">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 md:mb-14 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-3.5 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-yellow-800">
            <HelpCircle size={14} className="text-yellow-600" />
            Booking Help
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Everything you need to know about booking with Kuldeep Travels.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = active === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-200"
              >
                <button
                  onClick={() => setActive(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-4 sm:p-5 text-left bg-slate-50/50 hover:bg-slate-50 transition"
                >
                  <span className="text-xs sm:text-sm md:text-base font-bold text-slate-900 pr-4">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`text-slate-500 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-blue-700" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 pt-0 bg-slate-50/50 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
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
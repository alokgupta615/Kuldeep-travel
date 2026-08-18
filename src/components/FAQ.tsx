"use client";

import { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  PhoneCall,
  MessageCircle,
  ShieldCheck,
  Plane,
  CreditCard,
  Car,
  Clock3,
  MapPin,
  Sparkles,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  icon: typeof Car;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "Pricing & Payments",
    icon: CreditCard,
    question: "Are your taxi fares fixed, or are there hidden charges & surge pricing?",
    answer:
      "All Kuldeep Travels fares are 100% fixed and transparent. We never charge peak-hour surge pricing or hidden booking fees. Toll taxes, state border permits, and parking are shared upfront with clear GST receipts.",
  },
  {
    category: "Payments",
    icon: CreditCard,
    question: "Can I book now and pay after my trip is completed?",
    answer:
      "Yes, absolutely! You can choose 'Pay After Trip' during booking and pay the driver directly using Cash, UPI (Google Pay, PhonePe, Paytm), or Card once you safely reach your destination.",
  },
  {
    category: "Airport Transfers",
    icon: Plane,
    question: "How do Lucknow Airport (LKO) pickups and flight delays work?",
    answer:
      "We provide 24×7 pickup & drop at Chaudhary Charan Singh International Airport (Terminal 1, 2, and 3). Our automated flight tracking monitors incoming flights in real-time — meaning 0 extra waiting charges even if your flight lands late.",
  },
  {
    category: "Safety & Fleet",
    icon: ShieldCheck,
    question: "What types of vehicles do you provide, and are they sanitized?",
    answer:
      "Our fleet includes Prime Sedans (Dzire, Etios), Spacious SUVs (Ertiga, XL6), Luxury MPVs (Innova, Innova Crysta), and Tempo Travellers (12 to 26 seaters). Every vehicle is deep-cleaned, sanitized, and equipped with chilled AC before every journey.",
  },
  {
    category: "Chauffeurs",
    icon: Clock3,
    question: "Who will be driving the cab, and when will I get driver details?",
    answer:
      "All our chauffeurs are background-verified, licensed highway experts with over 5+ years of driving experience. You will receive the driver's contact number, live GPS tracking, and cab number via SMS and WhatsApp well before your pickup time.",
  },
  {
    category: "Outstation & Tours",
    icon: MapPin,
    question: "Do you provide outstation cabs and customized holiday tour packages?",
    answer:
      "Yes! We specialize in intercity one-way and round trips from Lucknow to Ayodhya, Varanasi, Prayagraj, Gorakhpur, Delhi, Naimisharanya, Dudhwa, and Nepal, as well as customized family holiday tour packages with hotel bookings.",
  },
  {
    category: "Cancellation",
    icon: ShieldCheck,
    question: "What is your cancellation policy if my travel plan changes?",
    answer:
      "We offer free cancellation up to 6 hours before your scheduled pickup time with zero cancellation penalties. You can easily modify your travel dates or timings by messaging our 24×7 WhatsApp desk.",
  },
  {
    category: "Immediate Dispatch",
    icon: Sparkles,
    question: "Can I book a cab for immediate or early morning / midnight travel?",
    answer:
      "Yes. Our 24×7 active dispatch desk in Lucknow operates day and night. For urgent rides (including 3:00 AM airport drops), we can dispatch a verified sanitized vehicle to your doorstep within 15–20 minutes.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 sm:py-24">
      {/* Decorative Glows */}
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-100/50 blur-[130px] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3.5 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-800">
            <HelpCircle size={14} className="text-blue-600" />
            Clear & Transparent
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked <span className="text-blue-700">Questions</span>
          </h2>

          <p className="mt-3.5 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about taxi booking, pricing, airport transfers,
            and safety with Kuldeep Travels.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-10 sm:mt-14 space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const Icon = faq.icon;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl sm:rounded-3xl border transition-all duration-300 ${
                  isOpen
                    ? "border-blue-600 bg-white shadow-lg shadow-blue-900/5 ring-1 ring-blue-600/20"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-4 sm:p-6 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <div
                      className={`flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isOpen
                          ? "bg-blue-700 text-white shadow-sm"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      <Icon size={18} />
                    </div>

                    <div>
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-blue-700 block mb-0.5">
                        {faq.category}
                      </span>
                      <h3 className="text-xs sm:text-sm md:text-base font-bold text-slate-900 leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-blue-50 text-blue-700 rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 pt-0 sm:px-6 sm:pb-6">
                    <div className="border-t border-slate-100 pt-3.5 pl-0 sm:pl-[58px]">
                      <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Concierge Help Box */}
        <div className="mt-12 sm:mt-16 rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 p-6 sm:p-8 md:p-10 text-white shadow-xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-yellow-400/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-yellow-300 mb-2">
              <Sparkles size={13} />
              <span>Still Have Questions?</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Our 24×7 Travel Concierge is Ready to Help
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-blue-100 max-w-xl leading-relaxed">
              Get immediate assistance with custom quotes, outstation routes, wedding fleets, or luxury coach rentals.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="tel:+919936408109"
              className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-xs sm:text-sm font-bold text-slate-950 shadow hover:bg-yellow-300 active:scale-95 transition"
            >
              <PhoneCall size={16} />
              <span>Call +91 99364 08109</span>
            </a>

            <a
              href="https://wa.me/919936408109?text=Hello%20Kuldeep%20Travels,%20I%20have%20a%20question%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow hover:bg-emerald-700 active:scale-95 transition"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* SEO Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </section>
  );
}
"use client";

import Link from "next/link";
import {
  ShieldCheck,
  CircleDollarSign,
  Clock3,
  BadgeCheck,
  ChevronRight,
  PhoneCall,
  MessageCircle,
} from "lucide-react";

const policies = [
  {
    icon: ShieldCheck,
    title: "Zero Cancellation Penalty",
    desc: "Cancel up to 6 hours before scheduled pickup time without any cancellation fees.",
  },
  {
    icon: CircleDollarSign,
    title: "100% Transparent Fares",
    desc: "All estimated fares are clear upfront. Tolls, state tax, and parking are shared transparently.",
  },
  {
    icon: Clock3,
    title: "Flight Delay Grace Period",
    desc: "45 minutes complimentary waiting on airport arrivals with real-time flight tracking.",
  },
  {
    icon: BadgeCheck,
    title: "Sanitized & Verified Fleet",
    desc: "Verified highway chauffeurs, chilled AC cabs, and 24×7 customer care support.",
  },
];

export default function BookingPolicy() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-14 md:py-24">
      {/* Background Accents */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-yellow-300/15 blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-300/15 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 md:mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-yellow-100 px-4 py-1 text-xs sm:text-sm font-bold uppercase tracking-wider text-yellow-800">
            Fair & Transparent
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Booking Policies & Guarantees
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            We believe in honest, predictable taxi bookings. Review our customer-first
            policies designed to give you total peace of mind.
          </p>
        </div>

        {/* Policy Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {policies.map((policy) => {
            const Icon = policy.icon;

            return (
              <div
                key={policy.title}
                className="group rounded-3xl border border-slate-200 bg-white/90 p-6 sm:p-8 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="flex h-13 w-13 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-slate-950 shadow-md">
                    <Icon size={26} />
                  </div>

                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-slate-900">
                      {policy.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {policy.desc}
                    </p>

                    <Link
                      href="/terms-and-conditions"
                      className="mt-3.5 inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900 transition"
                    >
                      <span>Read Terms</span>
                      <ChevronRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <div className="mt-12 md:mt-16 rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-slate-950 p-6 sm:p-10 text-center text-white shadow-2xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Have Questions Before Booking?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm text-blue-100 leading-relaxed">
            Our Lucknow operations team is available 24×7 to assist with custom quotes,
            intercity outstation routes, or wedding car rentals.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+919936408109"
              className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 transition hover:bg-yellow-300 active:scale-95"
            >
              <PhoneCall size={16} />
              <span>Call +91 99364 08109</span>
            </a>

            <a
              href="https://wa.me/919936408109?text=Hello%20Kuldeep%20Travels,%20I%20have%20questions%20regarding%20booking."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-xs sm:text-sm font-semibold text-white backdrop-blur hover:bg-white hover:text-slate-950 transition active:scale-95"
            >
              <MessageCircle size={16} className="text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
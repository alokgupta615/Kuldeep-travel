"use client";

import {
  ShieldCheck,
  CircleDollarSign,
  Clock3,
  BadgeCheck,
  ChevronRight,
} from "lucide-react";

const policies = [
  {
    icon: ShieldCheck,
    title: "Free Cancellation",
    desc: "Cancel up to 6 hours before pickup without cancellation charges.",
  },
  {
    icon: CircleDollarSign,
    title: "Transparent Pricing",
    desc: "No hidden costs. Toll, parking and state taxes are charged separately when applicable.",
  },
  {
    icon: Clock3,
    title: "Waiting Charges",
    desc: "30 minutes complimentary waiting at airports. Additional waiting is chargeable.",
  },
  {
    icon: BadgeCheck,
    title: "Safe & Secure Travel",
    desc: "Professional drivers, sanitized vehicles and 24×7 customer assistance.",
  },
];

export default function BookingPolicy() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-24">

      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-yellow-300/20 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
            Booking Policies
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Important Information
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-yellow-500"></div>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Please review our booking policies before confirming your ride.
            These guidelines ensure a smooth, transparent and hassle-free travel experience.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2">

          {policies.map((policy) => {
            const Icon = policy.icon;

            return (
              <div
                key={policy.title}
                className="
                group
                rounded-3xl
                border border-slate-200
                bg-white/90
                p-8
                shadow-md
                backdrop-blur
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-yellow-400
                hover:shadow-2xl
              "
              >
                <div className="flex items-start gap-5">

                  <div
                    className="
                    flex h-16 w-16 items-center justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-yellow-400
                    to-yellow-500
                    shadow-lg
                    transition
                    group-hover:rotate-6
                  "
                  >
                    <Icon
                      size={30}
                      className="text-white"
                    />
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-slate-900">
                      {policy.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {policy.desc}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-yellow-600">

                      Learn More

                      <ChevronRight
                        size={16}
                        className="transition group-hover:translate-x-1"
                      />

                    </div>

                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Box */}

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 p-10 text-center text-white shadow-2xl">

          <h3 className="text-3xl font-bold">
            Need Help Before Booking?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Our travel experts are available 24×7 to answer your questions
            regarding fares, cancellation policies, payments or itinerary planning.
          </p>

          <button
            className="
            mt-8
            rounded-full
            bg-yellow-400
            px-8
            py-4
            font-semibold
            text-slate-900
            transition
            hover:bg-yellow-300
          "
          >
            Contact Our Team
          </button>

        </div>

      </div>

    </section>
  );
}
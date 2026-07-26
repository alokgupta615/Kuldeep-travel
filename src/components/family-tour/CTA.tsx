"use client";

import Link from "next/link";
import {
  ArrowRight,
  Phone,
  CalendarCheck2,
  ShieldCheck,
  BadgeCheck,
  Star,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-cyan-600 py-24">
      {/* Background Effects */}

      <div className="absolute inset-0">
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-[120px]" />

        <div className="absolute -right-24 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-400/20 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_40%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[40px] border border-white/15 bg-white/10 p-10 backdrop-blur-xl lg:p-16">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* LEFT */}

            <div>
              <div className="inline-flex items-center rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-cyan-200">
                <Star className="mr-2 h-4 w-4 fill-current" />
                Trusted by Thousands of Families
              </div>

              <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-6xl">
                Ready for Your
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Next Family Vacation?
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-blue-100">
                Let Kuldeep Travels create a memorable family holiday with
                comfortable vehicles, experienced drivers, customised
                itineraries, and complete travel assistance from start to
                finish.
              </p>

              {/* CTA Buttons */}

              <div className="mt-10 flex flex-col gap-5 sm:flex-row">
                <Link
                  href="/book-now"
                  className="inline-flex items-center justify-center rounded-2xl bg-yellow-400 px-8 py-4 font-bold text-slate-900 transition duration-300 hover:bg-yellow-300"
                >
                  <CalendarCheck2 className="mr-3 h-5 w-5" />
                  Book Your Tour
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur transition duration-300 hover:bg-white/20"
                >
                  <Phone className="mr-3 h-5 w-5" />
                  Contact Us
                </Link>
              </div>
            </div>

            {/* RIGHT */}

            <div className="grid gap-6">
              <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
                <div className="flex items-center">
                  <BadgeCheck className="mr-4 h-10 w-10 text-green-300" />

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Verified Travel Service
                    </h3>

                    <p className="mt-2 text-blue-100">
                      Professional drivers and well-maintained vehicles.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
                <div className="flex items-center">
                  <ShieldCheck className="mr-4 h-10 w-10 text-cyan-300" />

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Safe & Comfortable Journey
                    </h3>

                    <p className="mt-2 text-blue-100">
                      Clean vehicles, transparent pricing, and reliable support.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/15 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-8 backdrop-blur">
                <h3 className="text-3xl font-black text-white">
                  Why Book with Kuldeep Travels?
                </h3>

                <div className="mt-6 space-y-4">
                  {[
                    "✔ Custom Family Tour Packages",
                    "✔ Luxury & Budget Vehicles",
                    "✔ Hotel Booking Assistance",
                    "✔ Experienced Drivers",
                    "✔ 24×7 Customer Support",
                    "✔ Transparent Pricing",
                  ].map((item) => (
                    <div key={item} className="flex items-center text-blue-100">
                      <ArrowRight className="mr-3 h-4 w-4 text-yellow-300" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

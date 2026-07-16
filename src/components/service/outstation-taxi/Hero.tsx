"use client";

import Link from "next/link";
import {
  ShieldCheck,
  PhoneCall,
  Star,
  MapPinned,
  Car,
  Clock3,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-blue-700">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[url('/images/pattern/grid.svg')] opacity-5" />
    </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <div>

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-yellow-300">

              <ShieldCheck className="h-5 w-5" />

              <span className="text-sm font-semibold tracking-wide">

                Trusted Since 2012

              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl">

              Outstation

              <span className="block text-yellow-400">

                Cabs in Lucknow

              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">

              Comfortable Outstation Travel for Every Journey Beyond the City.

              Whether you're travelling to Ayodhya, Delhi, Jaipur,

              Nainital or anywhere across North India, Kuldeep Travels

              provides reliable, affordable and premium outstation taxi

              services with experienced drivers and transparent pricing.

            </p>

            {/* Features */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-md">

                <Clock3 className="h-6 w-6 text-yellow-400" />

                <span className="font-medium text-white">

                  24×7 Availability

                </span>

              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-md">

                <Car className="h-6 w-6 text-yellow-400" />

                <span className="font-medium text-white">

                  Premium Fleet

                </span>

              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-md">

                <MapPinned className="h-6 w-6 text-yellow-400" />

                <span className="font-medium text-white">

                  Doorstep Pickup

                </span>

              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-md">

                <Star className="h-6 w-6 text-yellow-400" />

                <span className="font-medium text-white">

                  Rated by Happy Customers

                </span>

              </div>

            </div>

            {/* CTA */}

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                href="/book-now"
                className="rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-slate-900 transition hover:bg-yellow-300"
              >
                Book Now
              </Link>

              <Link
                href="tel:+919999999999"
                className="flex items-center gap-3 rounded-xl border border-white/20 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-blue-900"
              >
                <PhoneCall className="h-5 w-5" />

                Call Now
              </Link>

            </div>

            {/* Stats */}

            <div className="mt-14 grid grid-cols-3 gap-6">

              <div>

                <h3 className="text-4xl font-black text-yellow-400">

                  12+

                </h3>

                <p className="mt-2 text-slate-300">

                  Years Experience

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-black text-yellow-400">

                  10K+

                </h3>

                <p className="mt-2 text-slate-300">

                  Happy Travellers

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-black text-yellow-400">

                  24×7

                </h3>

                <p className="mt-2 text-slate-300">

                  Customer Support

                </p>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          {/* Next response: Premium Booking Form */}

          <div className="relative">

  <div className="rounded-3xl border border-white/20 bg-white/10 p-10 text-center backdrop-blur-xl">

    <h2 className="text-3xl font-bold text-white">
      Booking Form
    </h2>

    <p className="mt-4 text-slate-300">
      We'll build the premium booking form in the next file.
    </p>

  </div>

</div>

        </div>

      </div>

    </section>
  );
}
"use client";

import Link from "next/link";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  HeartHandshake,
  CarFront,
  BadgeCheck,
} from "lucide-react";

const highlights = [
  "Safe & Comfortable Travel",
  "Professional Drivers",
  "Well-Maintained Vehicles",
  "Transparent Pricing",
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">

          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-blue-100 backdrop-blur">
            <HeartHandshake className="mr-2 h-4 w-4 text-yellow-400" />
            Caring Travel for Senior Citizens
          </span>

          <h2 className="mt-8 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
            Book a Senior Citizen Cab
            <span className="block text-yellow-400">
              in Lucknow Today
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">
            Whether it's a hospital appointment, airport transfer, temple visit,
            family function, or outstation journey, Kuldeep Travels is committed
            to providing safe, comfortable, and dependable transportation for
            senior citizens. Travel with confidence knowing every journey is
            planned with care.
          </p>

          {/* Trust Highlights */}

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center justify-center rounded-2xl bg-white/10 px-5 py-4 backdrop-blur"
              >
                <ShieldCheck className="mr-3 h-5 w-5 text-yellow-400" />
                <span className="font-medium text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-yellow-400 px-8 py-4 text-lg font-semibold text-blue-950 transition hover:bg-yellow-300"
            >
              Book Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="tel:+919999999999"
              className="inline-flex items-center rounded-xl border border-white/30 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-blue-900"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Link>

          </div>

          {/* Bottom Trust Box */}

          <div className="mt-16 rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">
            <div className="grid gap-8 md:grid-cols-3">

              <div className="flex items-start">
                <div className="rounded-xl bg-yellow-400 p-3">
                  <CarFront className="h-7 w-7 text-blue-950" />
                </div>

                <div className="ml-4 text-left">
                  <h3 className="text-lg font-bold text-white">
                    Comfortable Vehicles
                  </h3>

                  <p className="mt-2 text-blue-100">
                    Clean, spacious, and regularly maintained vehicles for
                    local and outstation travel.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="rounded-xl bg-yellow-400 p-3">
                  <HeartHandshake className="h-7 w-7 text-blue-950" />
                </div>

                <div className="ml-4 text-left">
                  <h3 className="text-lg font-bold text-white">
                    Caring Service
                  </h3>

                  <p className="mt-2 text-blue-100">
                    Courteous drivers who understand the importance of patience,
                    safety, and comfort.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="rounded-xl bg-yellow-400 p-3">
                  <BadgeCheck className="h-7 w-7 text-blue-950" />
                </div>

                <div className="ml-4 text-left">
                  <h3 className="text-lg font-bold text-white">
                    Trusted Since 2012
                  </h3>

                  <p className="mt-2 text-blue-100">
                    A reliable travel partner for families across Lucknow,
                    providing dependable transportation every day.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
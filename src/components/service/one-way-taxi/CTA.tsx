"use client";

import Link from "next/link";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  CarFront,
} from "lucide-react";

const highlights = [
  {
    icon: Clock3,
    title: "24×7 Booking Support",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Pricing",
  },
  {
    icon: CarFront,
    title: "Clean & Comfortable Cabs",
  },
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 py-20">
      {/* Background Glow */}

      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100 backdrop-blur">
            <CheckCircle2 className="mr-2 h-4 w-4 text-yellow-400" />
            Ready to Book Your One Way Cab?
          </span>

          <h2 className="mt-8 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
            Comfortable Intercity
            <span className="block text-yellow-400">
              Travel Starts Here
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">
            Whether you're travelling for business, visiting family,
            planning a religious trip, or exploring a new city,
            Kuldeep Travels provides safe, comfortable, and reliable
            one-way cab services from Lucknow with experienced drivers,
            transparent pricing, and well-maintained vehicles.
          </p>

          {/* CTA Buttons */}

          <div className="mt-10 flex flex-wrap justify-center gap-5">

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

        </div>

        {/* Trust Highlights */}

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400">
                  <Icon className="h-7 w-7 text-blue-950" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
            );
          })}

        </div>

        {/* Bottom Trust Statement */}

        <div className="mt-16 border-t border-white/10 pt-10 text-center">

          <p className="text-lg text-blue-100">
            Trusted by individuals, families, tourists, students,
            and businesses since <span className="font-bold text-yellow-400">2012</span>.
          </p>

          <p className="mt-3 text-blue-200">
            Book your one-way cab today and enjoy a safe, smooth,
            and hassle-free journey with Kuldeep Travels.
          </p>

        </div>

      </div>
    </section>
  );
}
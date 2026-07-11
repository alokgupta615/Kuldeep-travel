"use client";

import Link from "next/link";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="relative z-10 max-w-2xl">

      {/* Badge */}

      <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-300 backdrop-blur">
        <CheckCircle className="h-4 w-4" />
        Trusted Taxi & Travel Company in Lucknow
      </div>

      {/* Heading */}

      <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
        About{" "}
        <span className="text-yellow-400">
          Kuldeep Travels
        </span>
      </h1>

      {/* Description */}

      <p className="mt-6 text-lg leading-8 text-slate-200">
        Every journey has a purpose. Whether you're travelling for
        business, family, tourism, weddings, or corporate events,
        Kuldeep Travels delivers safe, reliable, and comfortable
        transportation across Lucknow and North India.
      </p>

      <p className="mt-4 text-slate-300 leading-7">
        From local taxi services and airport transfers to outstation
        cabs and customized tour packages, we make every journey
        stress-free with professional drivers, transparent pricing,
        and customer-first service.
      </p>

      {/* CTA */}

      <div className="mt-10 flex flex-wrap gap-4">

        <Link
          href="/book-now"
          className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-4 font-semibold text-slate-900 transition hover:bg-yellow-300"
        >
          Book Your Ride
          <ArrowRight size={20} />
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
        >
          <Phone size={18} />
          Contact Us
        </Link>

      </div>

    </div>
  );
}
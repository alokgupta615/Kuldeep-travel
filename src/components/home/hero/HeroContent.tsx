"use client";

import Link from "next/link";
import {
  ArrowRight,
  Phone,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

export default function HeroContent() {
  return (
    <div className="relative z-10 max-w-2xl">

      {/* Badge */}

      <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-5 py-2 text-sm font-semibold text-yellow-300 backdrop-blur">
        <CheckCircle className="h-4 w-4" />
        Trusted Since 2012
      </div>

      {/* Heading */}

      <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl">
        Best Travel
        <br />
        Agency in
        <br />
        <span className="text-yellow-400">
          Lucknow
        </span>
      </h1>

      {/* Description */}

      <p className="mt-8 text-xl leading-9 text-slate-200">
        Book safe, comfortable and affordable taxi services
        for Airport Transfers, Local Cabs, Outstation Trips,
        Corporate Travel and Family Tour Packages.
      </p>

      <p className="mt-4 text-lg leading-8 text-slate-300">
        Verified drivers, transparent pricing, well-maintained
        vehicles, and 24×7 customer support for every journey.
      </p>

      {/* CTA */}

      <div className="mt-10 flex flex-wrap gap-4">

        <Link
          href="/book-online"
          className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-7 py-4 font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300"
        >
          Book Your Ride
          <ArrowRight size={20} />
        </Link>

        <Link
          href="tel:+919876543210"
          className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-blue-900"
        >
          <Phone size={18} />
          Call Now
        </Link>

        <Link
          href="https://wa.me/919876543210"
          className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-7 py-4 font-semibold text-white transition hover:bg-green-500"
        >
          <MessageCircle size={18} />
          WhatsApp
        </Link>

      </div>

    </div>
  );
}
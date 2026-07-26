"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 py-24 text-white">
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <span className="rounded-full bg-white/10 px-5 py-2 font-semibold backdrop-blur">
          Start Your Spiritual Journey
        </span>

        <h2 className="mt-8 text-5xl font-black leading-tight">
          Ready To Plan Your
          <span className="block text-yellow-300">Pilgrimage Tour?</span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">
          Let Kuldeep Travels take care of your transportation while you focus
          on your faith. From nearby temple visits to multi-day spiritual
          journeys, we're here to make every trip comfortable and memorable.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <Link
            href="/book-now"
            className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-blue-950 transition hover:scale-105"
          >
            Book Your Tour
            <ArrowRight size={20} />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white/20"
          >
            <Phone size={20} />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[36px] bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 px-8 py-14 text-center text-white shadow-2xl sm:px-12">
          <h2 className="text-3xl font-black sm:text-4xl lg:text-5xl">
            Let's Start Planning
            <span className="block text-yellow-400">Your Dream Journey</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Tell us where you want to travel, your preferred dates, group size,
            and budget. We'll prepare a personalised itinerary designed just for
            you.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/book-now"
              className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-slate-900 hover:bg-yellow-300"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur hover:bg-white/20"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/weekend-getaway/cta.jpg"
        alt="Weekend Tour"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-blue-950/80" />

      <div className="relative container mx-auto px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
            Book Your Next Adventure
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight text-white lg:text-6xl">
            Your Perfect Weekend
            <span className="block text-yellow-400">Starts Here</span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">
            Escape the city, discover beautiful destinations and create
            unforgettable memories with Kuldeep Travels. Let our experts plan a
            personalised weekend trip that suits your budget, schedule and
            travel style.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              href="/book-now"
              className="inline-flex items-center rounded-xl bg-yellow-400 px-8 py-4 font-bold text-blue-950 transition hover:bg-yellow-300"
            >
              Book Weekend Tour
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-900"
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

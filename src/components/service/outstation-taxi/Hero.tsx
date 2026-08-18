"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  PhoneCall,
  MapPinned,
  Car,
  Clock3,
  Plane,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Background Image */}
      <Image
        src="/images/heroimg/outstation.png"
        alt="Outstation Taxi"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center] md:object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#04132D]/95 via-[#04132D]/85 to-[#04132D]/55" />

      {/* Decorative Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-14 sm:px-6 sm:pt-24 sm:pb-16 lg:px-8 lg:pt-32 lg:pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-gray-900">
            <Plane className="h-4 w-4" />
            Premium Outstation Taxi Service
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Outstation
            <span className="block text-yellow-400">Cabs in Lucknow</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
            Comfortable outstation travel for every journey beyond the city.
            Travel to Ayodhya, Varanasi, Prayagraj, Delhi, Agra, Jaipur,
            Nainital and many more destinations with professional drivers, clean
            vehicles and transparent pricing.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/book-now"
              className="rounded-xl bg-yellow-400 px-7 py-4 text-center font-semibold text-gray-900 transition hover:bg-yellow-500"
            >
              Book Now
            </Link>

            <a
              href="tel:+919936408109"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/30 px-7 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-blue-900"
            >
              <PhoneCall className="h-5 w-5" />
              Call Now
            </a>
          </div>

          {/* Features */}
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <Clock3 className="h-6 w-6 text-yellow-400" />
              <span className="font-medium">24×7 Availability</span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <Car className="h-6 w-6 text-yellow-400" />
              <span className="font-medium">Premium Fleet</span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <MapPinned className="h-6 w-6 text-yellow-400" />
              <span className="font-medium">Doorstep Pickup</span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <ShieldCheck className="h-6 w-6 text-yellow-400" />
              <span className="font-medium">Verified Drivers</span>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-5 border-t border-white/20 pt-8">
            <div>
              <h3 className="text-3xl font-black text-yellow-400 sm:text-4xl">
                12+
              </h3>
              <p className="mt-2 text-sm text-blue-100">Years Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-yellow-400 sm:text-4xl">
                51K+
              </h3>
              <p className="mt-2 text-sm text-blue-100">Happy Travellers</p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-yellow-400 sm:text-4xl">
                24×7
              </h3>
              <p className="mt-2 text-sm text-blue-100">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

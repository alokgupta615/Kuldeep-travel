import Link from "next/link";
import Image from "next/image";
import { Plane, Phone, ShieldCheck, Clock3, PlaneLanding } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white">
      <Image
        src="/images/heroimg/airport-hero-image.png"
        alt="Airport Terminal"
        fill
        priority
        sizes="100vw"
        // className="object-cover object-[82%_center] md:object-right"
        className="object-cover object-[82%_center] md:object-right"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#04132D]/95 via-[#04132D]/80 to-[#04132D]/45" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-10 lg:px-8 lg:pt-28 lg:pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-gray-900">
            <Plane size={16} />
            Airport Taxi Service
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Lucknow Airport
            <span className="block text-yellow-400">Taxi & Cab Service</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            24×7 airport pickup and drop service with professional drivers,
            clean vehicles, flight tracking, and transparent pricing.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/book-now"
              className="rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-gray-900 transition hover:bg-yellow-500"
            >
              Book Airport Taxi
            </Link>

            <a
              href="tel:+919936408109"
              className="flex items-center gap-2 rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-blue-900"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>

          {/* Features */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-3 md:p-4 backdrop-blur">
              <Clock3 className="mb-3 h-6 w-6 text-yellow-400" />
              <p className="text-sm font-semibold">24×7 Availability</p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 p-3 md:p-4 backdrop-blur">
              <PlaneLanding className="mb-3 h-6 w-6 text-yellow-400" />
              <p className="text-sm font-semibold">Flight Tracking</p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 p-3 md:p-4 backdrop-blur">
              <ShieldCheck className="mb-3 h-6 w-6 text-yellow-400" />
              <p className="text-sm font-semibold">Safe & Reliable</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

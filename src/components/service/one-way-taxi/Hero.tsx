"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  CheckCircle,
  Clock3,
  ShieldCheck,
  Car,
  MapPin,
} from "lucide-react";

const highlights = [
  {
    icon: Clock3,
    title: "24×7 Availability",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Pricing",
  },
  {
    icon: Car,
    title: "Well Maintained Cabs",
  },
  {
    icon: CheckCircle,
    title: "Professional Drivers",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>

            {/* Badge */}

            <div className="mb-6 inline-flex items-center rounded-full border border-blue-300/30 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur">
              <MapPin className="mr-2 h-4 w-4 text-yellow-400" />
              Trusted One Way Cab Service in Lucknow
            </div>

            {/* Heading */}

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
              One Way Cab Service
              <span className="block text-yellow-400">
                in Lucknow
              </span>
            </h1>

            {/* Description */}

            <p className="mt-8 max-w-2xl text-lg leading-8 text-blue-100">
              Travel comfortably and pay only for the journey you need.
              Whether you're heading to Ayodhya, Prayagraj, Varanasi,
              Delhi, Kanpur, Agra or any nearby city, Kuldeep Travels
              offers safe, reliable and affordable one-way taxi services
              with experienced drivers and clean, well-maintained vehicles.
            </p>

            {/* Features */}

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur"
                  >
                    <div className="mr-4 rounded-lg bg-yellow-400 p-2">
                      <Icon className="h-5 w-5 text-blue-900" />
                    </div>

                    <span className="font-medium text-white">
                      {item.title}
                    </span>
                  </div>
                );
              })}

            </div>

            {/* CTA */}

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-yellow-400 px-7 py-4 text-base font-semibold text-blue-950 transition hover:bg-yellow-300"
              >
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="tel:+919999999999"
                className="inline-flex items-center rounded-xl border border-white/30 px-7 py-4 text-base font-semibold text-white transition hover:bg-white hover:text-blue-900"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Link>

            </div>

            {/* Trust Stats */}

            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">

              <div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  10+
                </h3>

                <p className="mt-2 text-sm text-blue-100">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  5000+
                </h3>

                <p className="mt-2 text-sm text-blue-100">
                  Happy Travellers
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  24×7
                </h3>

                <p className="mt-2 text-sm text-blue-100">
                  Customer Support
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="relative">

            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">

              <Image
                src="/images/one-way-cab-hero.jpg"
                alt="One Way Cab Service in Lucknow"
                width={700}
                height={700}
                priority
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent" />
                            {/* Floating Card - Popular Routes */}
              <div className="absolute left-6 top-6 rounded-2xl bg-white p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 p-3">
                    <MapPin className="h-6 w-6 text-blue-700" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Popular Routes
                    </p>
                    <p className="font-bold text-gray-900">
                      Ayodhya • Delhi
                    </p>
                    <p className="font-bold text-gray-900">
                      Varanasi • Agra
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Card - Support */}
              <div className="absolute bottom-6 right-6 rounded-2xl bg-white p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-3">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Booking Support
                    </p>

                    <p className="font-bold text-gray-900">
                      Available 24×7
                    </p>

                    <p className="text-sm text-gray-600">
                      Quick confirmation
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Card - Verified */}
              <div className="absolute -left-5 bottom-20 hidden rounded-2xl bg-blue-900 p-4 text-white shadow-2xl lg:block">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-10 w-10 text-yellow-400" />

                  <div>
                    <p className="text-sm font-semibold">
                      Verified Drivers
                    </p>
                    <p className="text-xs text-blue-100">
                      Safe & Professional
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
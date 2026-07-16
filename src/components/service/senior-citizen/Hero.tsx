"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  HeartHandshake,
  Clock3,
  CarFront,
  CalendarDays,
  Users,
} from "lucide-react";

const highlights = [
  "Safe & Comfortable Travel",
  "Professional Drivers",
  "Clean Vehicles",
  "Doorstep Pickup & Drop",
];

const stats = [
  {
    icon: CalendarDays,
    value: "Since 2012",
    label: "Trusted Travel Service",
  },
  {
    icon: Users,
    value: "1000+",
    label: "Happy Families",
  },
  {
    icon: Clock3,
    value: "24×7",
    label: "Booking Support",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700">
      {/* Background Glow */}

      <div className="absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}

          <div>

            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100 backdrop-blur">
              <HeartHandshake className="mr-2 h-4 w-4 text-yellow-400" />
              Dedicated Senior Citizen Travel
            </span>

            <h1 className="mt-8 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
              Senior Citizen Cab
              <span className="block text-yellow-400">
                Service in Lucknow
              </span>
            </h1>

            <p className="mt-6 text-xl font-medium text-blue-100">
              Safe, Comfortable & Reliable Travel for Every Journey
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Whether it's a hospital visit, airport transfer, temple trip,
              family function, or everyday travel, Kuldeep Travels provides
              dependable cab services specially designed for senior citizens.
              Our courteous drivers, clean vehicles, and punctual service help
              make every journey comfortable and stress-free.
            </p>

            {/* Highlights */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center rounded-xl bg-white/10 p-4 backdrop-blur"
                >
                  <ShieldCheck className="mr-3 h-5 w-5 text-yellow-400" />
                  <span className="font-medium text-white">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-blue-950 transition hover:bg-yellow-300"
              >
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="tel:+919999999999"
                className="inline-flex items-center rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-900"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Link>

            </div>

          </div>

          {/* Right Image */}

          <div className="relative">

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur">

              <Image
                src="/images/services/senior-citizen-hero.jpg"
                alt="Senior Citizen Cab Service in Lucknow"
                width={700}
                height={650}
                priority
                className="h-full w-full object-cover"
              />

            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 left-6 right-6 rounded-2xl bg-white p-6 shadow-2xl">

              <div className="flex items-center">

                <div className="rounded-full bg-blue-100 p-4">
                  <CarFront className="h-8 w-8 text-blue-700" />
                </div>

                <div className="ml-4">

                  <h3 className="text-xl font-bold text-gray-900">
                    Comfort Comes First
                  </h3>

                  <p className="mt-1 text-gray-600">
                    Professional drivers, clean vehicles, and thoughtful
                    service for senior travellers.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Stats */}

        <div className="mt-24 grid gap-6 md:grid-cols-3">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur"
              >
                <div className="flex items-center">

                  <div className="rounded-xl bg-yellow-400 p-3">
                    <Icon className="h-7 w-7 text-blue-950" />
                  </div>

                  <div className="ml-4">

                    <h3 className="text-2xl font-bold text-white">
                      {item.value}
                    </h3>

                    <p className="text-blue-100">
                      {item.label}
                    </p>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
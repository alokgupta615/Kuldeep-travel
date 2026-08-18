"use client";

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

const stats = [
  {
    value: "10+",
    label: "Years Experience",
  },
  {
    value: "5000+",
    label: "Happy Travellers",
  },
  {
    value: "24×7",
    label: "Customer Support",
  },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/heroimg/one-way.png')",
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/80 to-slate-900/70" />

      {/* Decorative Glow */}

      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-5 py-16 sm:min-h-[700px] sm:px-6 sm:py-20 lg:min-h-[820px] lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          {/* Badge */}

          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-blue-100 backdrop-blur-md sm:px-5 sm:py-2.5 sm:text-sm">
            <MapPin className="mr-2 h-4 w-4 text-yellow-400" />
            Trusted One Way Cab Service in Lucknow
          </div>

          {/* Heading */}

          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
            One Way Cab Service
            <span className="mt-2 block text-yellow-400">in Lucknow</span>
          </h1>

          {/* Description */}

          <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
            Travel comfortably and pay only for the journey you need. Whether
            you're heading to Ayodhya, Prayagraj, Varanasi, Delhi, Kanpur, Agra
            or any nearby city, Kuldeep Travels offers safe, reliable and
            affordable one-way taxi services with experienced drivers, sanitized
            vehicles and transparent pricing.
          </p>

          {/* Features */}

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex items-center rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:border-yellow-400/40 hover:bg-white/15 hover:shadow-xl"
                >
                  <div className="mr-4 rounded-xl bg-yellow-400 p-2.5 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-blue-950" />
                  </div>

                  <span className="text-sm font-semibold text-white">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* CTA */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-xl bg-yellow-400 px-8 text-base font-semibold text-blue-950 transition-all duration-300 hover:scale-[1.02] hover:bg-yellow-300"
            >
              Book Your Cab
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="tel:+919936408109"
              className="inline-flex h-14 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-blue-900"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Link>
          </div>

          {/* Trust Text */}

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              Instant Booking Confirmation
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              Verified Drivers
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              No Hidden Charges
            </div>
          </div>

          {/* Stats */}

          <div className="mt-14 grid grid-cols-3 gap-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur-md transition duration-300 hover:bg-white/15"
              >
                <h3 className="text-2xl font-black text-yellow-400 sm:text-4xl">
                  {item.value}
                </h3>

                <p className="mt-2 text-xs leading-5 text-blue-100 sm:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/60 to-transparent" />
    </section>
  );
}

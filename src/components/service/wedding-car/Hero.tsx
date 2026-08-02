"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Heart,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Luxury Wedding Fleet",
  },
  {
    icon: Heart,
    title: "Perfect For Every Ceremony",
  },
  {
    icon: ShieldCheck,
    title: "Professional Chauffeurs",
  },
  {
    icon: Star,
    title: "Premium Experience",
  },
];

const stats = [
  {
    number: "500+",
    label: "Wedding Bookings",
  },
  {
    number: "10+",
    label: "Years Experience",
  },
  {
    number: "24×7",
    label: "Support",
  },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background */}

      <Image
        src="/images/heroimg/wedding.png"
        alt="Luxury Wedding Car Rental Lucknow"
        fill
        priority
        className="
          object-cover
          object-[80%_center]
          sm:object-[85%_center]
          lg:object-right
        "
        // className="
        //   object-cover
        //   object-[88%_center]
        //   sm:object-[92%_center]
        //   lg:object-[100%_center]
        // "
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-blue-950/80 to-slate-900/70" />

      {/* Decorative Glow */}

      <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-yellow-400/15 blur-[130px]" />

      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-amber-300/10 blur-[130px]" />

      <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-5 py-16 sm:px-6 sm:py-20 lg:min-h-[760px] lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          {/* Badge */}

          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-yellow-300 backdrop-blur-md sm:px-5 sm:text-sm">
            <Sparkles className="h-4 w-4" />
            Premium Wedding Transportation
          </span>

          {/* Heading */}

          <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
            Wedding Car Rental
            <span className="mt-2 block text-yellow-400">Lucknow</span>
          </h1>

          {/* Description */}

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
            Make your grand entrance unforgettable with premium wedding
            transportation from Kuldeep Travels. From elegant bridal arrivals
            and royal groom entries to luxury guest transportation and
            destination weddings, we ensure every journey reflects the
            importance of your special day.
          </p>
          {/* Features */}

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex items-center rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl transition-all duration-300 hover:border-yellow-400/40 hover:bg-white/15"
                >
                  <div className="mr-4 rounded-xl bg-yellow-400 p-3 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-slate-900" />
                  </div>

                  <span className="font-semibold text-white">{item.title}</span>
                </div>
              );
            })}
          </div>

          {/* CTA */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-xl bg-yellow-400 px-8 text-base font-bold text-slate-900 transition-all duration-300 hover:scale-[1.02] hover:bg-yellow-300"
            >
              Book Your Wedding Car
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-slate-900"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Trust Points */}

          <div className="mt-10 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-6">
            <div className="flex items-center gap-2 text-sm text-slate-200">
              <CheckCircle className="h-5 w-5 text-green-400" />
              Luxury Vehicles
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-200">
              <CheckCircle className="h-5 w-5 text-green-400" />
              Professional Chauffeurs
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-200">
              <CheckCircle className="h-5 w-5 text-green-400" />
              Transparent Pricing
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-200">
              <CheckCircle className="h-5 w-5 text-green-400" />
              On-Time Arrival
            </div>
          </div>

          {/* Quick Contact */}

          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl">
            <div className="rounded-full bg-yellow-400 p-3">
              <Phone className="h-5 w-5 text-slate-900" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-slate-300">
                Wedding Booking Support
              </p>

              <a
                href="tel:+919999999999"
                className="text-lg font-bold text-white hover:text-yellow-300"
              >
                +91 99999 99999
              </a>
            </div>
          </div>

          {/* Stats */}

          <div className="mt-14 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/10 p-5 text-center backdrop-blur-xl transition-all duration-300 hover:bg-white/15"
              >
                <h3 className="text-2xl font-black text-yellow-400 sm:text-4xl">
                  {stat.number}
                </h3>

                <p className="mt-2 text-xs text-slate-200 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/5 to-transparent" />
    </section>
  );
}

"use client";

import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Mail,
  ChevronRight,
  CheckCircle2,
  Star,
  ArrowRight,
} from "lucide-react";

import SectionWrapper from "@/components/ui/SectionWrapper";

const stats = [
  {
    value: "24×7",
    label: "Customer Support",
  },
  {
    value: "10K+",
    label: "Happy Travellers",
  },
  {
    value: "100+",
    label: "Travel Destinations",
  },
  {
    value: "4.9★",
    label: "Customer Rating",
  },
];

const features = [
  "Verified & Professional Drivers",
  "Transparent Fixed Pricing",
  "Instant Booking Confirmation",
  "Well-Maintained Premium Vehicles",
  "24×7 Travel Assistance",
];

export default function ContactHero() {
  return (
    <SectionWrapper
      background="hero"
      className="relative overflow-hidden pt-36 pb-24 text-white"
    >
      {/* Background Blur */}

      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-yellow-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Breadcrumb */}

        <div className="mb-8 flex items-center text-sm text-blue-200">

          <Link
            href="/"
            className="transition hover:text-yellow-400"
          >
            Home
          </Link>

          <ChevronRight className="mx-2 h-4 w-4" />

          <span>Contact Us</span>

        </div>

        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">

          {/* LEFT */}

          <div>

            {/* Badge */}

            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-2 backdrop-blur-xl">

              <div className="flex">

                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <span className="text-sm font-medium">
                Trusted by 10,000+ Travellers
              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-6xl">

              Let's Plan Your

              <span className="mt-2 block bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">

                Perfect Journey

              </span>

              Together

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-2xl text-lg leading-9 text-blue-100">

              Whether you're planning a local taxi ride,
              airport transfer, outstation journey,
              Tempo Traveller booking, luxury bus rental,
              or a customized holiday package,
              our dedicated travel specialists are ready
              to assist you with the perfect travel solution.

            </p>

            {/* Features */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              {features.map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-3"
                >

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur">

                    <CheckCircle2
                      size={18}
                      className="text-yellow-400"
                    />

                  </div>

                  <span className="text-blue-50">

                    {feature}

                  </span>

                </div>

              ))}

            </div>

            {/* CTA */}

            <div className="mt-12 flex flex-wrap gap-4">

              <Link
                href="/book-taxi"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-8 py-4 font-semibold text-slate-900 shadow-[0_20px_50px_rgba(250,204,21,.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(250,204,21,.45)]"
              >

                Get Free Quote

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </Link>

              <Link
                href="https://wa.me/919936408109"
                target="_blank"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-blue-900"
              >

                <MessageCircle size={20} />

                Chat on WhatsApp

              </Link>

            </div>
                        {/* Trust Note */}

            <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-slate-900">
                <Phone size={20} />
              </div>

              <div>
                <p className="text-sm text-blue-100">
                  Need immediate assistance?
                </p>

                <a
                  href="tel:+919936408109"
                  className="text-lg font-bold text-white hover:text-yellow-400"
                >
                  +91 99364 08109
                </a>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="relative">

            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">

              {/* Gold Line */}

              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400" />

              {/* Badge */}

              <span className="inline-flex rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-900">
                Available 24×7
              </span>

              <h3 className="mt-6 text-3xl font-bold">
                Need Immediate Assistance?
              </h3>

              <p className="mt-4 leading-8 text-blue-100">
                Contact our travel specialists for instant bookings,
                fare estimates, vehicle availability, and personalized
                travel recommendations.
              </p>

              {/* Contact Cards */}

              <div className="mt-8 space-y-5">

                <Link
                  href="tel:+919936408109"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:bg-white hover:text-slate-900"
                >

                  <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white group-hover:bg-blue-700">

                      <Phone size={22} />

                    </div>

                    <div>

                      <p className="text-sm opacity-80">
                        Call Us
                      </p>

                      <h4 className="text-lg font-bold">
                        +91 99364 08109
                      </h4>

                    </div>

                  </div>

                  <ArrowRight size={20} />

                </Link>

                <Link
                  href="https://wa.me/919936408109"
                  target="_blank"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:bg-white hover:text-slate-900"
                >

                  <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white">

                      <MessageCircle size={22} />

                    </div>

                    <div>

                      <p className="text-sm opacity-80">
                        WhatsApp
                      </p>

                      <h4 className="text-lg font-bold">
                        Chat Instantly
                      </h4>

                    </div>

                  </div>

                  <ArrowRight size={20} />

                </Link>

                <Link
                  href="mailto:kuldeeptravelslko@gmail.com"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:bg-white hover:text-slate-900"
                >

                  <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white">

                      <Mail size={22} />

                    </div>

                    <div>

                      <p className="text-sm opacity-80">
                        Email
                      </p>

                      <h4 className="text-base font-bold break-all">
                        kuldeeptravelslko@gmail.com
                      </h4>

                    </div>

                  </div>

                  <ArrowRight size={20} />

                </Link>

              </div>

              {/* Divider */}

              <div className="my-8 border-t border-white/10" />

              {/* Office */}

              <div className="rounded-2xl bg-white/5 p-5">

                <p className="text-sm text-blue-200">
                  Office Location
                </p>

                <h4 className="mt-2 text-xl font-bold">
                  Lucknow, Uttar Pradesh
                </h4>

                <p className="mt-3 leading-7 text-blue-100">
                  Visit our office for travel planning,
                  corporate bookings, tour packages,
                  and personalized travel consultation.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Premium Stats */}

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (

            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-white/10 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/15"
            >

              <h3 className="text-4xl font-extrabold text-yellow-400">
                {item.value}
              </h3>

              <p className="mt-3 text-blue-100">
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </SectionWrapper>
  );
}
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
  Clock,
  MapPin,
  Sparkles,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const stats = [
  {
    value: "24×7",
    label: "Customer Support",
  },
  {
    value: "51K+",
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
  "Well-Maintained AC Fleet",
  "24×7 Roadside & Trip Assistance",
];

export default function ContactHero() {
  return (
    <SectionWrapper
      background="hero"
      className="relative overflow-hidden pt-28 pb-14 md:pt-36 md:pb-20 text-white"
    >
      {/* Background Ambient Glows */}
      <div className="absolute -left-32 top-10 h-72 w-72 md:h-96 md:w-96 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -right-32 bottom-0 h-72 w-72 md:h-96 md:w-96 rounded-full bg-amber-400/15 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Breadcrumb & Live Status Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center text-blue-200">
            <Link href="/" className="transition hover:text-yellow-400">
              Home
            </Link>
            <ChevronRight className="mx-1.5 h-3.5 w-3.5 opacity-60" />
            <span className="text-white font-medium">Contact Us</span>
          </div>

          {/* Live Dispatch Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/50 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>Available 24/7 • Avg Response &lt; 15 mins</span>
          </div>
        </div>

        <div className="grid items-center gap-10 lg:gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT COLUMN */}
          <div>
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-xl shadow-sm">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={14}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-medium text-blue-50">
                Trusted by 51,000+ Travellers
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15]">
              Let's Plan Your{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Perfect Journey
              </span>{" "}
              Together
            </h1>

            {/* Description */}
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-blue-100/90 max-w-2xl">
              Planning a local cab in Lucknow, airport transfer, outstation trip,
              Tempo Traveller rental, luxury bus, or customized tour? Our
              experienced travel specialists are ready 24×7 to assist you.
            </p>

            {/* Features Grid */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2.5">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-400/20 text-yellow-400">
                    <CheckCircle2 size={15} />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-blue-50">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Main Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3.5">
              <a
                href="#contact-form"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-7 py-3.5 font-bold text-slate-900 shadow-lg shadow-yellow-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/35 hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base"
              >
                <span>Request Free Quote</span>
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="https://wa.me/919936408109?text=Hello%20Kuldeep%20Travels,%20I%20want%20to%20inquire%20about%20a%20booking."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-slate-900 active:bg-white/90 text-sm sm:text-base"
              >
                <MessageCircle size={19} className="text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:+919936408109"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-400/30 bg-blue-600/30 px-5 py-3.5 font-medium text-blue-100 backdrop-blur-md transition-all hover:bg-blue-600/50 hover:text-white text-sm"
              >
                <Phone size={16} className="text-yellow-400" />
                <span>+91 99364 08109</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Quick Reach Card */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/15 to-white/5 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              {/* Golden Top Accent */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-300" />

              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-400/20 border border-yellow-400/30 px-3 py-1 text-xs font-bold text-yellow-300">
                  <Sparkles size={13} />
                  Instant Direct Reach
                </span>
                <span className="text-xs text-blue-200 flex items-center gap-1">
                  <Clock size={12} /> 24×7 Active
                </span>
              </div>

              <h2 className="mt-4 text-xl sm:text-2xl font-bold text-white">
                Speak with our Travel Specialist
              </h2>

              <p className="mt-2 text-xs sm:text-sm text-blue-100/80 leading-relaxed">
                Connect directly for instant cab quotes, fleet selection, or
                itinerary assistance in Lucknow and North India.
              </p>

              {/* Direct Channels */}
              <div className="mt-5 space-y-3">
                {/* Call Link */}
                <a
                  href="tel:+919936408109"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3.5 sm:p-4 transition-all duration-300 hover:bg-white hover:text-slate-900"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md group-hover:bg-blue-700">
                      <Phone size={19} />
                    </div>
                    <div>
                      <p className="text-xs text-blue-200 group-hover:text-slate-500 font-medium">
                        Call Directly (24×7)
                      </p>
                      <p className="text-sm sm:text-base font-bold text-white group-hover:text-slate-900">
                        +91 99364 08109
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className="opacity-70 group-hover:opacity-100 transition-transform group-hover:translate-x-1"
                  />
                </a>

                {/* WhatsApp Link */}
                <a
                  href="https://wa.me/919936408109?text=Hello%20Kuldeep%20Travels,%20I%20need%20a%20quick%20taxi%20/%20tour%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3.5 sm:p-4 transition-all duration-300 hover:bg-white hover:text-slate-900"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md group-hover:bg-emerald-700">
                      <MessageCircle size={19} />
                    </div>
                    <div>
                      <p className="text-xs text-blue-200 group-hover:text-slate-500 font-medium">
                        WhatsApp Booking
                      </p>
                      <p className="text-sm sm:text-base font-bold text-white group-hover:text-slate-900">
                        Chat on WhatsApp
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className="opacity-70 group-hover:opacity-100 transition-transform group-hover:translate-x-1"
                  />
                </a>

                {/* Email Link */}
                <a
                  href="mailto:kuldeeptravelslko@gmail.com"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3.5 sm:p-4 transition-all duration-300 hover:bg-white hover:text-slate-900"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-600 text-white shadow-md group-hover:bg-rose-700">
                      <Mail size={19} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-blue-200 group-hover:text-slate-500 font-medium">
                        Official Email
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-white group-hover:text-slate-900 truncate">
                        kuldeeptravelslko@gmail.com
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className="opacity-70 group-hover:opacity-100 shrink-0 transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>

              {/* Office Location Mini Pill */}
              <div className="mt-4 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 flex items-center justify-between text-xs text-blue-100">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-yellow-400 shrink-0" />
                  Lucknow, Uttar Pradesh
                </span>
                <a
                  href="#map"
                  className="text-yellow-300 hover:underline font-semibold"
                >
                  View on Map →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row - Ultra Responsive */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/15 bg-white/10 p-4 sm:p-5 md:p-6 text-center backdrop-blur-xl transition-all duration-300 hover:bg-white/15 hover:-translate-y-1"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-yellow-400">
                {item.value}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-blue-100 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
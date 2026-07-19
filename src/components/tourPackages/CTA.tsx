"use client";

import Link from "next/link";
import {
  Phone,
  MessageCircle,
  CalendarCheck2,
  ShieldCheck,
  BadgeIndianRupee,
  Clock3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const highlights = [
  "Customized Holiday Packages",
  "Experienced Drivers",
  "Clean & Comfortable Vehicles",
  "Transparent Pricing",
  "24×7 Travel Assistance",
  "Flexible Itineraries",
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Safe & Reliable",
    desc: "Professional drivers and well-maintained vehicles.",
  },
  {
    icon: BadgeIndianRupee,
    title: "No Hidden Charges",
    desc: "Transparent quotations with fair pricing.",
  },
  {
    icon: Clock3,
    title: "Always Available",
    desc: "Dedicated support before and during your trip.",
  },
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 py-24">

      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div className="text-white">

            <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur">
              Plan Your Next Holiday
            </span>

            <h2 className="mt-8 text-4xl font-extrabold leading-tight lg:text-5xl">
              Ready for Your Next
              <span className="block text-yellow-400">
                Memorable Vacation?
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-blue-100">
              Whether you're planning a family vacation, honeymoon,
              pilgrimage, weekend getaway, or group tour, Kuldeep Travels
              helps you travel comfortably with customized holiday packages,
              experienced drivers, and complete travel assistance.
            </p>

            {/* Highlights */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              {highlights.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-yellow-400" />

                  <span className="text-blue-100">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Right */}

          <div className="rounded-3xl bg-white p-10 shadow-2xl">

            <div className="text-center">

              <CalendarCheck2 className="mx-auto h-14 w-14 text-blue-700" />

              <h3 className="mt-5 text-3xl font-bold text-gray-900">
                Book Your Holiday Today
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Contact our travel experts to receive a customized itinerary,
                transparent quotation, and the best holiday package for your
                destination.
              </p>

            </div>

            {/* Buttons */}

            <div className="mt-10 space-y-4">

              <Link
                href="/book-now"
                className="flex w-full items-center justify-center rounded-xl bg-blue-700 px-6 py-4 text-lg font-semibold text-white transition hover:bg-blue-800"
              >
                Book Holiday Package

                <ArrowRight className="ml-2 h-5 w-5" />

              </Link>

              <Link
                href="/contact"
                className="flex w-full items-center justify-center rounded-xl border-2 border-blue-700 px-6 py-4 text-lg font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Contact Us
              </Link>

              <a
                href="tel:+919999999999"
                className="flex w-full items-center justify-center rounded-xl bg-green-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
              >
                <Phone className="mr-2 h-5 w-5" />

                Call Now

              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-xl bg-green-500 px-6 py-4 text-lg font-semibold text-white transition hover:bg-green-600"
              >
                <MessageCircle className="mr-2 h-5 w-5" />

                WhatsApp Us

              </a>

            </div>

            {/* Trust */}

            <div className="mt-10 space-y-5 border-t pt-8">

              {trustPoints.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4"
                  >

                    <div className="rounded-xl bg-blue-100 p-3">

                      <Icon className="h-6 w-6 text-blue-700" />

                    </div>

                    <div>

                      <h4 className="font-semibold text-gray-900">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        {item.desc}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
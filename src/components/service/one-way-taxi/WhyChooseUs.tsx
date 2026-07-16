"use client";

import Link from "next/link";
import {
  CalendarDays,
  BadgeDollarSign,
  ShieldCheck,
  CarFront,
  MapPinned,
  BriefcaseBusiness,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const reasons = [
  {
    icon: CalendarDays,
    title: "Serving Travellers Since 2012",
    description:
      "With more than a decade of experience, Kuldeep Travels has earned the trust of individuals, families, and businesses for dependable local and outstation travel.",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent Pricing",
    description:
      "Know your fare before your journey begins. We provide clear pricing with no hidden surprises, helping you plan your travel budget confidently.",
  },
  {
    icon: ShieldCheck,
    title: "Experienced & Professional Drivers",
    description:
      "Our courteous drivers are familiar with major highways and intercity routes, ensuring a safe, smooth, and comfortable journey.",
  },
  {
    icon: CarFront,
    title: "Clean & Well-Maintained Vehicles",
    description:
      "Every vehicle is regularly inspected and maintained to provide a clean, comfortable, and reliable travel experience.",
  },
  {
    icon: MapPinned,
    title: "Doorstep Pickup & Drop",
    description:
      "Whether it's your home, office, hotel, airport, or railway station, we'll pick you up and drop you exactly where you need to be.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business & Personal Travel",
    description:
      "Ideal for business meetings, religious trips, family visits, tourism, student travel, and medical appointments.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-Focused Service",
    description:
      "From your first enquiry until you reach your destination, our support team is always available to assist with your travel requirements.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Why Choose Kuldeep Travels
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            A Reliable Travel Partner
            <span className="block text-blue-700">
              for Every Journey
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            When you book a one-way cab, you're trusting someone with an
            important part of your journey. We focus on dependable service,
            professional drivers, comfortable vehicles, and transparent
            communication from pickup to drop-off.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
              >
                <div className="inline-flex rounded-2xl bg-blue-100 p-4 transition group-hover:bg-blue-700">
                  <Icon className="h-8 w-8 text-blue-700 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

        {/* Trust Banner */}

        <div className="mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700">

          <div className="grid items-center gap-10 p-10 lg:grid-cols-2">

            {/* Left */}

            <div>

              <h3 className="text-3xl font-bold text-white">
                Why Thousands of Travellers Trust Kuldeep Travels
              </h3>

              <p className="mt-5 text-lg leading-8 text-blue-100">
                Whether you're travelling for work, family, tourism,
                education, or religious purposes, our goal is to make every
                journey safe, comfortable, and hassle-free.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center text-white">
                  <CheckCircle2 className="mr-3 h-5 w-5 text-yellow-400" />
                  Professional & Verified Drivers
                </div>

                <div className="flex items-center text-white">
                  <CheckCircle2 className="mr-3 h-5 w-5 text-yellow-400" />
                  Fixed & Transparent Pricing
                </div>

                <div className="flex items-center text-white">
                  <CheckCircle2 className="mr-3 h-5 w-5 text-yellow-400" />
                  Comfortable Private Vehicles
                </div>

                <div className="flex items-center text-white">
                  <CheckCircle2 className="mr-3 h-5 w-5 text-yellow-400" />
                  On-Time Pickup & Drop
                </div>

              </div>

            </div>

            {/* Right */}

            <div className="rounded-3xl bg-white/10 p-10 backdrop-blur">

              <h4 className="text-2xl font-bold text-white">
                Ready to Travel?
              </h4>

              <p className="mt-4 leading-8 text-blue-100">
                Book your one-way cab today and enjoy dependable intercity
                travel with experienced drivers, clean vehicles, and
                transparent pricing.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center rounded-xl bg-yellow-400 px-7 py-4 font-semibold text-blue-950 transition hover:bg-yellow-300"
              >
                Book Your Cab
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CarFront,
  Headphones,
  ShieldCheck,
  Star,
  Users,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Personalized Planning",
    description:
      "Every itinerary is designed around your destinations, travel dates, budget, and interests.",
  },
  {
    icon: CarFront,
    title: "Comfortable Vehicles",
    description:
      "Choose from Sedan, SUV, Innova Crysta, Tempo Traveller, Mini Bus, or Luxury Coach.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Reliable Travel",
    description:
      "Professional drivers and well-maintained vehicles ensure a smooth and comfortable journey.",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    description:
      "Receive a detailed quotation with no hidden charges before confirming your booking.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Our travel experts are available before, during, and after your trip whenever you need assistance.",
  },
  {
    icon: Users,
    title: "Trusted by Travellers",
    description:
      "Hundreds of happy travellers have trusted Kuldeep Travels for memorable holidays.",
  },
];

const stats = [
  {
    number: "500+",
    label: "Custom Tours",
  },
  {
    number: "20+",
    label: "Popular Destinations",
  },
  {
    number: "4.9★",
    label: "Customer Rating",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-24">
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-70" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-100 blur-3xl opacity-70" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}

          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-[32px] shadow-2xl">
              <Image
                src="/images/home/about.png"
                alt="Kuldeep Travels"
                width={700}
                height={800}
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Rating */}

            <div className="absolute left-4 top-4 rounded-2xl bg-white p-4 shadow-xl sm:left-6 sm:top-6">
              <div className="flex items-center gap-3">
                <Star className="h-9 w-9 fill-yellow-400 text-yellow-400" />

                <div>
                  <h4 className="font-bold text-slate-900">
                    4.9 Google Rating
                  </h4>

                  <p className="text-sm text-slate-500">
                    Trusted by Happy Customers
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Tours */}

            <div className="absolute bottom-4 right-4 rounded-2xl bg-white p-5 shadow-xl sm:bottom-6 sm:right-6">
              <h3 className="text-3xl font-black text-blue-700">500+</h3>

              <p className="text-slate-600">Successful Tours</p>
            </div>
          </div>

          {/* Content */}

          <div className="order-1 lg:order-2">
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Why Choose Kuldeep Travels?
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Personalized Travel
              <span className="block text-blue-700">Designed Around You</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Planning a customised holiday is about more than choosing
              destinations. It's about creating a journey that matches your
              travel style, schedule, comfort, and budget. That's exactly what
              we do at Kuldeep Travels.
            </p>

            {/* Features */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl"
                  >
                    <div className="inline-flex rounded-xl bg-gradient-to-br from-blue-700 to-cyan-500 p-3">
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Stats */}

            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-blue-50 p-5 text-center"
                >
                  <h3 className="text-2xl font-black text-blue-700">
                    {stat.number}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}

            <Link
              href="/book-now"
              className="mt-10 inline-flex items-center rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
            >
              Plan My Custom Tour
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import {
  CheckCircle2,
  MapPinned,
  Users,
  CarFront,
} from "lucide-react";

const highlights = [
  "Reliable taxi and tour services across Lucknow and North India",
  "Professional drivers with customer-first service",
  "Transparent pricing with no hidden charges",
  "Customized travel solutions for every journey",
];

const achievements = [
  {
    icon: Users,
    value: "15K+",
    label: "Happy Travelers",
  },
  {
    icon: CarFront,
    value: "100+",
    label: "Vehicles",
  },
  {
    icon: MapPinned,
    value: "50+",
    label: "Destinations",
  },
];

export default function CompanyIntro() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/about/company-intro.jpg"
                alt="Kuldeep Travels Team"
                width={700}
                height={800}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Floating Experience Card */}
            <div className="absolute -bottom-8 left-8 rounded-2xl bg-yellow-400 px-6 py-5 shadow-xl">
              <p className="text-3xl font-bold text-slate-900">10+</p>
              <p className="text-sm font-medium text-slate-800">
                Years of Trusted Service
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              About Kuldeep Travels
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Your Trusted Travel Partner in Lucknow
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Every journey has a purpose. Whether it's a business trip,
              family vacation, pilgrimage, airport transfer, or wedding,
              Kuldeep Travels is committed to making every journey safe,
              comfortable, and memorable.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              We provide local taxi services, outstation travel,
              airport transfers, customized tour packages, wedding
              transportation, and corporate travel solutions with
              dependable service and well-maintained vehicles.
            </p>

            {/* Highlights */}
            <div className="mt-8 space-y-4">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-1 h-6 w-6 text-yellow-500" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            {/* Achievement Cards */}
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {achievements.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-4 text-2xl font-bold text-slate-900">
                      {item.value}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {item.label}
                    </p>
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
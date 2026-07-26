"use client";

import {
  ShieldCheck,
  Car,
  BadgeCheck,
  Wallet,
  RefreshCcw,
  Headphones,
} from "lucide-react";

import { whyChooseUs } from "@/data/pilgrimage";

const icons = [ShieldCheck, Car, BadgeCheck, Wallet, RefreshCcw, Headphones];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-yellow-100 px-5 py-2 font-semibold text-yellow-700">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-black text-gray-900">
            Why Thousands of Pilgrims Trust Kuldeep Travels
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Every journey is planned with safety, comfort and devotion in mind.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseUs.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-700 to-blue-500">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

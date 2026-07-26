"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  Users,
  ShieldCheck,
  MapPinned,
} from "lucide-react";

const highlights = [
  "Customized Family Tour Packages",
  "Comfortable & Sanitized Vehicles",
  "Experienced Professional Drivers",
  "Flexible Travel Itineraries",
  "Hotel Booking Assistance",
  "24×7 Customer Support",
];

const features = [
  {
    icon: Users,
    title: "Family-Friendly Planning",
    desc: "Travel plans designed for children, adults, and senior citizens.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Reliable Travel",
    desc: "Well-maintained vehicles with experienced drivers.",
  },
  {
    icon: Heart,
    title: "Memorable Experiences",
    desc: "Create lifelong memories with personalized holidays.",
  },
];

export default function Introduction() {
  return (
    <section className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT IMAGE */}

          <div className="relative">
            <div className="overflow-hidden rounded-[32px] shadow-2xl">
              <Image
                src="/images/family-tour/family1.jpg"
                alt="Family Tour Packages from Lucknow"
                width={700}
                height={850}
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 -right-8 hidden rounded-3xl bg-white p-6 shadow-2xl lg:block">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-blue-100 p-4">
                  <MapPinned className="h-8 w-8 text-blue-700" />
                </div>

                <div>
                  <h4 className="text-3xl font-black text-slate-900">100+</h4>

                  <p className="text-slate-500">Family Destinations</p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT */}

          <div>
            <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              Family Holidays from Lucknow
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
              Create Beautiful Memories with
              <span className="block text-blue-700">
                Family Tour Packages from Lucknow
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Every family deserves a vacation filled with joy, comfort, and
              unforgettable experiences. At <strong>Kuldeep Travels</strong>, we
              offer carefully planned{" "}
              <strong>Family Tour Packages from Lucknow</strong> that combine
              comfortable transportation, flexible itineraries, and personalized
              travel planning for families of every size.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Whether you're planning a relaxing hill station holiday, a
              spiritual pilgrimage, a wildlife adventure, or a weekend getaway,
              our experienced team takes care of every travel detail so your
              family can focus on spending quality time together.
            </p>

            {/* Highlights */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition hover:border-blue-600 hover:bg-blue-50"
                >
                  <CheckCircle2 className="h-6 w-6 text-green-500" />

                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/book-now"
              className="mt-12 inline-flex items-center rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
            >
              Plan Your Family Tour
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Feature Cards */}

        <div className="mt-24 grid gap-8 md:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4">
                <item.icon className="h-8 w-8 text-blue-700" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { Plane, Car, Route, Heart, User } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Airport Taxi",
    href: "/services/airport-taxi",
    description:
      "Reliable airport pickup and drop services with professional drivers and comfortable vehicles.",
  },
  {
    icon: Car,
    title: "Outstation Taxi",
    href: "/services/outstation-taxi",
    description:
      "Travel comfortably to Ayodhya, Prayagraj, Agra, Delhi and other destinations with our premium cabs.",
  },
  {
    icon: Route,
    title: "One Way Taxi",
    href: "/services/one-way-taxi",
    description:
      "Affordable one-way taxi services with transparent pricing and hassle-free travel.",
  },
  {
    icon: Heart,
    title: "Wedding Car Rental",
    href: "/services/wedding-car-rental",
    description:
      "Luxury wedding cars and guest transportation services to make your special day memorable.",
  },
  {
    icon: User,
    title: "Senior Citizen Travel",
    href: "/services/senior-citizen-travel",
    description:
      "Safe and comfortable travel assistance specially designed for elderly passengers.",
  },
];

export default function WhoWeServe() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Who We Serve
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Travel Solutions for Every Type of Traveler
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            From solo travelers and families to corporate organizations and
            government departments, Kuldeep Travels provides dependable
            transportation tailored to every travel need.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group block rounded-3xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white transition duration-300 group-hover:bg-yellow-400 group-hover:text-slate-900">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-700">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-600 transition-all group-hover:translate-x-1">
                    Learn More →
                  </span>

                  <div className="h-1 w-12 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-24" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-yellow-400 to-yellow-300 p-10 text-center shadow-xl">
          <h3 className="text-3xl font-bold text-slate-900">
            No Matter Where You're Going, We're Ready to Take You There.
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            Whether it's a short city ride, a family vacation, a corporate
            event, or a religious pilgrimage, our team is committed to
            delivering a safe, comfortable, and memorable travel experience.
          </p>

          <div className="mt-8">
            <Link
              href="/book-now"
              className="inline-flex items-center rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
            >
              Book Your Ride →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

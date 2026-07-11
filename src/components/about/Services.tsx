"use client";

import Link from "next/link";
import {
  Car,
  Plane,
  MapPinned,
  Mountain,
  HeartHandshake,
  Bus,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Local Cab Service",
    description:
      "Comfortable city rides for shopping, office travel, business meetings, hospitals, and daily transportation across Lucknow.",
    href: "/services/local-taxi-service",
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    description:
      "Reliable pickup and drop services to and from Chaudhary Charan Singh International Airport with on-time arrivals.",
    href: "/services/airport-taxi-service",
  },
  {
    icon: MapPinned,
    title: "Outstation Taxi",
    description:
      "Travel comfortably to Ayodhya, Varanasi, Prayagraj, Agra, Delhi, Jaipur, Nainital, and many more destinations.",
    href: "/services/outstation-taxi-service",
  },
  {
    icon: Mountain,
    title: "Tour Packages",
    description:
      "Customized family holidays, pilgrimage tours, weekend getaways, and sightseeing packages with experienced travel planning.",
    href: "/tour-packages",
  },
  {
    icon: HeartHandshake,
    title: "Wedding Transportation",
    description:
      "Premium wedding cars, guest transportation, Tempo Travellers, and luxury buses for weddings and special occasions.",
    href: "/services/wedding-transportation",
  },
  {
    icon: Bus,
    title: "Group Travel",
    description:
      "Transportation solutions for corporate events, school trips, family gatherings, religious tours, and large groups.",
    href: "/services/group-travel",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            What We Do
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Complete Travel & Transportation Solutions
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Whether you need a local taxi, airport transfer, outstation cab,
            wedding transportation, or a customized tour package, Kuldeep
            Travels offers reliable travel solutions designed around your
            needs.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white transition duration-300 group-hover:bg-yellow-400 group-hover:text-slate-900">
                  <Icon className="h-8 w-8" />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 flex-grow leading-7 text-slate-600">
                  {service.description}
                </p>

                {/* Link */}
                <Link
                  href={service.href}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-yellow-500"
                >
                  Learn More
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                {/* Bottom Accent */}
                <div className="mt-6 h-1 w-12 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-900 to-blue-700 px-8 py-12 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold">
            Looking for a Customized Travel Solution?
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-blue-100">
            Our team can help you choose the right vehicle and travel plan
            based on your destination, group size, schedule, and budget.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-yellow-300"
            >
              Contact Our Team
            </Link>

            <Link
              href="/book-now"
              className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Book Your Ride
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
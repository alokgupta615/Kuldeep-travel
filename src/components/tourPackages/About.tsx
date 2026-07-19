"use client";

import Image from "next/image";
import {
  MapPinned,
  Car,
  Hotel,
  Route,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: MapPinned,
    title: "Popular Destinations",
    description:
      "Explore North India's famous tourist destinations with carefully planned itineraries.",
  },
  {
    icon: Car,
    title: "Comfortable Transportation",
    description:
      "Travel in clean, air-conditioned vehicles driven by experienced chauffeurs.",
  },
  {
    icon: Hotel,
    title: "Hotel Assistance",
    description:
      "Choose holiday packages with or without accommodation based on your budget.",
  },
  {
    icon: Route,
    title: "Flexible Itineraries",
    description:
      "Customize sightseeing, travel duration, and destinations according to your preferences.",
  },
];

export default function About() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}

          <div>
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              About Our Holiday Packages
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900">
              Explore Lucknow & Beyond with Carefully Planned Holiday Packages
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              A well-planned holiday is more than simply reaching a destination.
              It's about enjoying every moment of the journey. At Kuldeep
              Travels, we create personalized holiday packages from Lucknow that
              combine comfort, convenience, affordability, and flexibility.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you're planning a family vacation, honeymoon, pilgrimage,
              corporate outing, or weekend getaway, our experienced travel team
              designs customized itineraries that perfectly match your schedule,
              interests, and budget.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-blue-100 p-3">
                  <ShieldCheck className="h-6 w-6 text-blue-700" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Safe & Reliable Travel
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Experienced drivers, clean vehicles, punctual service, and
                    complete customer support throughout your journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-yellow-100 p-3">
                  <BadgeCheck className="h-6 w-6 text-yellow-600" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Customized Travel Plans
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Every package is designed around your travel dates, group
                    size, preferred destinations, and sightseeing interests.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/tour-packages/about.jpg"
              alt="Holiday Packages from Lucknow"
              width={700}
              height={700}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Feature Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-blue-100 p-4">
                  <Icon className="h-8 w-8 text-blue-700" />
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
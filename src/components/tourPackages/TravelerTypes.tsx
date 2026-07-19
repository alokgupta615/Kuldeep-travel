"use client";

import {
  Users,
  Heart,
  BriefcaseBusiness,
  GraduationCap,
  UserRound,
  Church,
  ShieldCheck,
} from "lucide-react";

const travelers = [
  {
    icon: Users,
    title: "Families",
    description:
      "Comfortable holiday packages designed for parents, children, and multi-generation family trips.",
  },
  {
    icon: Heart,
    title: "Couples",
    description:
      "Romantic getaways, honeymoon packages, anniversary vacations, and peaceful retreats.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Groups",
    description:
      "Corporate outings, team trips, conferences, and employee group travel solutions.",
  },
  {
    icon: GraduationCap,
    title: "School & College Tours",
    description:
      "Safe and well-organized educational trips with spacious vehicles and planned itineraries.",
  },
  {
    icon: Church,
    title: "Pilgrimage Groups",
    description:
      "Specially designed religious tours for devotees, spiritual travelers, and temple groups.",
  },
  {
    icon: UserRound,
    title: "Solo Travelers",
    description:
      "Flexible travel plans for individual travelers looking for convenience and comfort.",
  },
];

const benefits = [
  "Customized itineraries",
  "Comfortable vehicles",
  "Experienced drivers",
  "Flexible travel plans",
  "Transparent pricing",
  "24×7 customer support",
];

export default function TravelerTypes() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Perfect For Everyone
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Holiday Packages for Every Kind of Traveler
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you're traveling alone, with family, friends, colleagues,
            or a large pilgrimage group, we have holiday packages tailored to
            your travel style and comfort requirements.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {travelers.map((traveler) => {
            const Icon = traveler.icon;

            return (
              <div
                key={traveler.title}
                className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4 transition-all duration-300 group-hover:bg-blue-700">
                  <Icon className="h-8 w-8 text-blue-700 group-hover:text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {traveler.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {traveler.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}

        <div className="mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600">
          <div className="grid gap-10 p-10 lg:grid-cols-2 lg:p-14">

            <div className="text-white">
              <h3 className="text-3xl font-bold">
                No Matter Your Group Size, We Have the Right Travel Solution
              </h3>

              <p className="mt-6 text-lg leading-8 text-blue-100">
                From solo travelers to groups of 50+, we'll recommend the most
                suitable vehicle, itinerary, and package to ensure a safe,
                enjoyable, and memorable holiday.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-white backdrop-blur"
                >
                  <ShieldCheck className="h-5 w-5 text-yellow-400" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
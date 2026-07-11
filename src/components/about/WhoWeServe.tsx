"use client";

import {
  Users,
  BriefcaseBusiness,
  Hotel,
  GraduationCap,
  Landmark,
  Heart,
  Plane,
  Church,
  User,
  Building2,
} from "lucide-react";

const customers = [
  {
    icon: Users,
    title: "Families",
    description:
      "Comfortable and safe transportation for family vacations, functions, shopping, and weekend trips.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Organizations",
    description:
      "Professional travel solutions for meetings, conferences, employee transportation, and business events.",
  },
  {
    icon: Hotel,
    title: "Hotels & Hospitality",
    description:
      "Reliable guest pickup, airport transfers, and sightseeing transportation for hotel partners.",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description:
      "Transportation for school trips, college tours, educational visits, and academic events.",
  },
  {
    icon: Landmark,
    title: "Government Departments",
    description:
      "Dependable travel arrangements for official visits, meetings, inspections, and public events.",
  },
  {
    icon: Heart,
    title: "Wedding Planners",
    description:
      "Premium wedding cars, guest transportation, Tempo Travellers, and luxury buses.",
  },
  {
    icon: Plane,
    title: "Tourists",
    description:
      "Explore Lucknow and North India with customized sightseeing tours and holiday packages.",
  },
  {
    icon: Church,
    title: "Religious Groups",
    description:
      "Pilgrimage transportation to Ayodhya, Varanasi, Prayagraj, Naimisharanya, and more.",
  },
  {
    icon: User,
    title: "Solo Travelers",
    description:
      "Safe, affordable, and convenient transportation for individual travelers and professionals.",
  },
  {
    icon: Building2,
    title: "Event Organizers",
    description:
      "Group transportation for conferences, exhibitions, cultural events, and special occasions.",
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
            From solo travelers and families to corporate organizations
            and government departments, Kuldeep Travels provides
            dependable transportation tailored to every travel need.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

          {customers.map((customer) => {
            const Icon = customer.icon;

            return (
              <div
                key={customer.title}
                className="group rounded-3xl bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Icon */}

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white transition duration-300 group-hover:bg-yellow-400 group-hover:text-slate-900">

                  <Icon className="h-8 w-8" />

                </div>

                {/* Title */}

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {customer.title}
                </h3>

                {/* Description */}

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {customer.description}
                </p>

                {/* Accent */}

                <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-full" />

              </div>
            );
          })}

        </div>

        {/* Bottom Banner */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-yellow-400 to-yellow-300 p-10 text-center shadow-xl">

          <h3 className="text-3xl font-bold text-slate-900">
            No Matter Where You're Going, We're Ready to Take You There.
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            Whether it's a short city ride, a family vacation,
            a corporate event, or a religious pilgrimage,
            our team is committed to delivering a safe,
            comfortable, and memorable travel experience.
          </p>

        </div>

      </div>
    </section>
  );
}
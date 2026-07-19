"use client";

import {
  Sun,
  CloudRain,
  Snowflake,
  Flower2,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

const seasons = [
  {
    icon: Flower2,
    title: "Spring",
    months: "February – April",
    color: "bg-green-100 text-green-700",
    description:
      "Pleasant weather makes spring ideal for sightseeing, religious tours, family vacations, and city exploration.",
    destinations: [
      "Ayodhya",
      "Varanasi",
      "Prayagraj",
      "Agra",
    ],
  },
  {
    icon: Sun,
    title: "Summer",
    months: "May – June",
    color: "bg-yellow-100 text-yellow-700",
    description:
      "Escape the heat with relaxing trips to hill stations offering cool weather and scenic landscapes.",
    destinations: [
      "Mussoorie",
      "Nainital",
      "Jim Corbett",
      "Ranikhet",
    ],
  },
  {
    icon: CloudRain,
    title: "Monsoon",
    months: "July – September",
    color: "bg-blue-100 text-blue-700",
    description:
      "Experience lush greenery, waterfalls, and peaceful surroundings during the rainy season.",
    destinations: [
      "Mussoorie",
      "Nainital",
      "Rishikesh",
      "Corbett",
    ],
  },
  {
    icon: Snowflake,
    title: "Winter",
    months: "October – January",
    color: "bg-cyan-100 text-cyan-700",
    description:
      "Perfect season for pilgrimage tours, heritage sightseeing, festivals, and comfortable family vacations.",
    destinations: [
      "Ayodhya",
      "Haridwar",
      "Delhi",
      "Varanasi",
    ],
  },
];

export default function BestTimeToVisit() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Travel Guide
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Best Time to Book Your Holiday Package
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every season offers a unique travel experience. Choose the perfect
            destination based on weather, sightseeing opportunities, and your
            travel preferences.
          </p>

        </div>

        {/* Season Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {seasons.map((season) => {
            const Icon = season.icon;

            return (
              <div
                key={season.title}
                className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className={`inline-flex rounded-2xl p-4 ${season.color}`}>
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {season.title}
                </h3>

                <p className="mt-2 font-medium text-blue-700">
                  {season.months}
                </p>

                <p className="mt-5 leading-7 text-gray-600">
                  {season.description}
                </p>

                <div className="mt-6 space-y-3">

                  {season.destinations.map((place) => (
                    <div
                      key={place}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      <span>{place}</span>
                    </div>
                  ))}

                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom Info */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 p-10 text-white">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>

              <CalendarDays className="mb-5 h-12 w-12 text-yellow-400" />

              <h3 className="text-3xl font-bold">
                Not Sure When to Travel?
              </h3>

              <p className="mt-6 text-lg leading-8 text-blue-100">
                Our travel experts can recommend the best destinations based on
                your preferred travel month, budget, weather, and holiday
                duration.
              </p>

            </div>

            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">

              <h4 className="text-2xl font-semibold">
                Travel Planning Includes
              </h4>

              <div className="mt-6 space-y-4">

                {[
                  "Season-wise destination suggestions",
                  "Hotel recommendations",
                  "Weather guidance",
                  "Vehicle recommendations",
                  "Customized itinerary",
                  "Budget planning",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-yellow-400" />
                    <span>{item}</span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
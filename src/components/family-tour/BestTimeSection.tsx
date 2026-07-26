"use client";

import { Sun, Flower2, CloudRain, Snowflake, CheckCircle2 } from "lucide-react";

const seasons = [
  {
    icon: Flower2,
    title: "Spring",
    months: "February – March",
    color: "from-pink-500 to-rose-400",
    destinations: ["Nainital", "Mussoorie", "Jaipur"],
    description:
      "Spring offers pleasant weather, blooming landscapes, and comfortable sightseeing, making it an excellent time for family vacations.",
  },
  {
    icon: Sun,
    title: "Summer",
    months: "April – June",
    color: "from-amber-500 to-orange-500",
    destinations: ["Nainital", "Shimla", "Manali"],
    description:
      "Escape the heat by visiting cool hill stations where families can enjoy scenic beauty, boating, trekking, and outdoor activities.",
  },
  {
    icon: CloudRain,
    title: "Monsoon",
    months: "July – September",
    color: "from-cyan-500 to-blue-600",
    destinations: ["Jim Corbett", "Rishikesh", "Lansdowne"],
    description:
      "Enjoy lush green valleys, waterfalls, peaceful surroundings, and fewer crowds during the refreshing monsoon season.",
  },
  {
    icon: Snowflake,
    title: "Winter",
    months: "October – January",
    color: "from-sky-500 to-indigo-600",
    destinations: ["Varanasi", "Ayodhya", "Haridwar"],
    description:
      "Winter is ideal for pilgrimage tours, heritage sightseeing, cultural festivals, and comfortable family road trips.",
  },
];

export default function BestTimeSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-100 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-100 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Best Time to Travel
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Best Season for
            <span className="block text-blue-700">Family Tour Packages</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every season offers a unique travel experience. Choose the perfect
            time for your family vacation based on weather, destinations, and
            activities.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {seasons.map((season) => (
            <div
              key={season.title}
              className="group rounded-[30px] border border-slate-200 bg-white shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Header */}

              <div
                className={`rounded-t-[30px] bg-gradient-to-r ${season.color} p-8 text-white`}
              >
                <season.icon className="h-12 w-12" />

                <h3 className="mt-6 text-3xl font-bold">{season.title}</h3>

                <p className="mt-2 text-white/90">{season.months}</p>
              </div>

              {/* Content */}

              <div className="p-8">
                <p className="leading-7 text-slate-600">{season.description}</p>

                <div className="mt-8">
                  <h4 className="font-bold text-slate-900">
                    Recommended Destinations
                  </h4>

                  <div className="mt-4 space-y-3">
                    {season.destinations.map((place) => (
                      <div key={place} className="flex items-center">
                        <CheckCircle2 className="mr-3 h-5 w-5 text-green-500" />

                        <span className="text-slate-700">{place}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

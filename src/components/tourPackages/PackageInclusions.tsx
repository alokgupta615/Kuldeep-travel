"use client";

import {
  Car,
  Hotel,
  MapPinned,
  UserCheck,
  Clock3,
  ShieldCheck,
  Wallet,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";

const inclusions = [
  {
    icon: Car,
    title: "Pickup & Drop",
    description:
      "Convenient pickup and drop-off from your preferred location in Lucknow.",
  },
  {
    icon: UserCheck,
    title: "Experienced Chauffeur",
    description:
      "Professional, courteous, and experienced drivers for a safe journey.",
  },
  {
    icon: MapPinned,
    title: "Sightseeing",
    description:
      "Visit popular attractions according to your selected travel itinerary.",
  },
  {
    icon: Hotel,
    title: "Hotel Accommodation",
    description:
      "Comfortable hotel stay can be included based on your package.",
  },
  {
    icon: Wallet,
    title: "Toll & Parking",
    description:
      "Toll taxes, parking charges, and driver allowance included where applicable.",
  },
  {
    icon: Clock3,
    title: "Flexible Timings",
    description:
      "Choose pickup times that match your travel schedule.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Journey",
    description:
      "Well-maintained vehicles with regular safety inspections.",
  },
  {
    icon: PhoneCall,
    title: "Travel Support",
    description:
      "Dedicated assistance before and throughout your holiday.",
  },
];

export default function PackageInclusions() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Package Inclusions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            What's Included in Our Holiday Packages?
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Depending on the package you choose, your holiday can include
            transportation, sightseeing, hotel accommodation, travel planning,
            and dedicated customer support.
          </p>
        </div>

        {/* Inclusion Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {inclusions.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4 transition-all duration-300 group-hover:bg-blue-700">
                  <Icon className="h-8 w-8 text-blue-700 group-hover:text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Included Services */}

        <div className="mt-20 rounded-3xl bg-slate-50 p-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-3xl font-bold text-gray-900">
                Every Journey is Carefully Planned
              </h3>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our team manages every important aspect of your trip so you can
                enjoy a smooth and stress-free holiday experience.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Customized travel itinerary",
                  "Comfortable AC vehicle",
                  "Professional chauffeur",
                  "Flexible pickup timings",
                  "Multi-day travel planning",
                  "Dedicated customer support",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card */}

            <div className="rounded-3xl bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 p-10 text-white">
              <h3 className="text-3xl font-bold">
                Need a Customized Holiday Package?
              </h3>

              <p className="mt-6 leading-8 text-blue-100">
                Want to include additional sightseeing, premium hotels,
                adventure activities, or special destinations? We'll customize
                your holiday package according to your travel requirements and
                budget.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  "Personalized itinerary",
                  "Hotel booking assistance",
                  "Flexible destinations",
                  "Group discounts",
                  "Transparent pricing",
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

              <button className="mt-10 rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-blue-950 transition hover:bg-yellow-300">
                Request Custom Package
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
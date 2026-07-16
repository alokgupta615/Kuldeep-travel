"use client";

import {
  HeartHandshake,
  ShieldCheck,
  Clock3,
  Users,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: HeartHandshake,
    title: "Comfort Comes First",
    description:
      "As people grow older, a smooth and comfortable journey becomes more important than simply reaching the destination quickly.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Dependable Travel",
    description:
      "Our drivers focus on careful driving, punctual pickups, and a calm travel experience that gives passengers confidence throughout the journey.",
  },
  {
    icon: Clock3,
    title: "No Rush, No Stress",
    description:
      "We understand that elderly passengers may require extra time while boarding or getting out of the vehicle. Our drivers are patient and never rush the journey.",
  },
  {
    icon: Users,
    title: "Peace of Mind for Families",
    description:
      "Whether you're booking for yourself or an elderly family member, you can rely on us to provide dependable transportation planned with care.",
  },
];

const highlights = [
  "Comfortable transportation for local & outstation travel",
  "Courteous and experienced drivers",
  "Suitable for independent senior travellers",
  "Ideal for hospital visits, family functions & pilgrimages",
  "Clean, well-maintained vehicles",
  "Thoughtfully planned journeys from pickup to drop-off",
];

export default function TravelNeeds() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Understanding Senior Travel
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Understanding the
            <span className="block text-blue-700">
              Travel Needs of Senior Citizens
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            As people grow older, their travel priorities naturally change.
            Comfort, safety, and reliability become more important than speed.
            Our senior citizen cab service is designed to provide a relaxed,
            dependable journey for every passenger.
          </p>
        </div>

        {/* Feature Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
              >
                <div className="inline-flex rounded-2xl bg-blue-100 p-4 transition group-hover:bg-blue-700">
                  <Icon className="h-8 w-8 text-blue-700 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Two Column Content */}

        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">

          {/* Left */}

          <div>
            <h3 className="text-3xl font-bold text-gray-900">
              Transportation Planned Around the Passenger
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Public transport can often be crowded and physically demanding,
              while finding reliable transportation at the last minute isn't
              always easy. Families also want reassurance that their loved ones
              will travel safely when they cannot accompany them.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              At Kuldeep Travels, we don't simply provide a cab—we provide a
              thoughtfully planned travel experience. From the moment our driver
              arrives until the passenger reaches the destination, every journey
              is handled with patience, professionalism, and care.
            </p>
          </div>

          {/* Right */}

          <div className="rounded-3xl bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 p-10">
            <h3 className="text-3xl font-bold text-white">
              Why Families Choose Us
            </h3>

            <div className="mt-8 space-y-5">
              {highlights.map((item) => (
                <div key={item} className="flex items-start">
                  <CheckCircle2 className="mt-1 mr-3 h-5 w-5 flex-shrink-0 text-yellow-400" />
                  <span className="text-lg text-blue-100">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
"use client";

import {
  Trees,
  Landmark,
  Building2,
  Users,
  Heart,
  MountainSnow,
} from "lucide-react";

const styles = [
  {
    icon: Trees,
    title: "Nature Escapes",
    description:
      "Relax in scenic hill stations, riverside towns, forests, and peaceful natural surroundings away from city life.",
  },
  {
    icon: Landmark,
    title: "Spiritual Tours",
    description:
      "Visit famous temples, sacred rivers, and pilgrimage destinations for a peaceful and meaningful weekend.",
  },
  {
    icon: Building2,
    title: "Heritage Trips",
    description:
      "Explore magnificent forts, palaces, monuments, museums, and historic cities rich in culture and architecture.",
  },
  {
    icon: Users,
    title: "Family Holidays",
    description:
      "Fun-filled destinations with sightseeing, shopping, boating, gardens, and attractions suitable for all ages.",
  },
  {
    icon: Heart,
    title: "Couple Escapes",
    description:
      "Enjoy romantic hill stations, lakes, cafés, sunset viewpoints, and relaxing destinations with your partner.",
  },
  {
    icon: MountainSnow,
    title: "Adventure Weekends",
    description:
      "Experience trekking, wildlife safaris, camping, river adventures, and exciting outdoor activities.",
  },
];

export default function TravelStyles() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Find Your Perfect Trip
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            Weekend Getaways for Every Travel Style
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you love mountains, temples, history, wildlife, or road
            trips, we have a carefully designed weekend package to match your
            interests and travel preferences.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {styles.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 transition group-hover:bg-blue-700">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

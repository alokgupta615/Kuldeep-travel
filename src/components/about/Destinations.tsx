"use client";

import {
  MapPin,
  ArrowRight,
  Landmark,
  Building2,
  Mountain,
  Trees,
} from "lucide-react";
import Link from "next/link";

const destinations = [
  {
    name: "Ayodhya",
    icon: Landmark,
    type: "Religious Destination",
    description:
      "Comfortable taxi service for Ram Mandir, Hanuman Garhi, and nearby attractions.",
  },
  {
    name: "Varanasi",
    icon: Landmark,
    type: "Spiritual City",
    description:
      "Travel to Kashi Vishwanath Temple, Dashashwamedh Ghat, and Sarnath.",
  },
  {
    name: "Prayagraj",
    icon: Landmark,
    type: "Pilgrimage",
    description:
      "Convenient transportation for Sangam, Kumbh Mela, and city sightseeing.",
  },
  {
    name: "Agra",
    icon: Building2,
    type: "Historic City",
    description:
      "Visit the Taj Mahal, Agra Fort, and Fatehpur Sikri with comfortable travel.",
  },
  {
    name: "Delhi",
    icon: Building2,
    type: "Capital City",
    description:
      "Reliable intercity taxi service for business, tourism, and airport transfers.",
  },
  {
    name: "Jaipur",
    icon: Building2,
    type: "Pink City",
    description:
      "Explore forts, palaces, heritage sites, and vibrant local markets.",
  },
  {
    name: "Nainital",
    icon: Mountain,
    type: "Hill Station",
    description:
      "Enjoy scenic mountain roads, Naini Lake, and family vacations.",
  },
  {
    name: "Jim Corbett",
    icon: Trees,
    type: "Wildlife Destination",
    description:
      "Safe transportation for jungle safaris, resorts, and weekend getaways.",
  },
];

export default function Destinations() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Destinations We Serve
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Travel Across North India with Confidence
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            From Lucknow to religious destinations, hill stations,
            business cities, and tourist attractions, Kuldeep Travels
            provides reliable transportation wherever your journey takes you.
          </p>
        </div>

        {/* Destination Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {destinations.map((destination) => {
            const Icon = destination.icon;

            return (
              <div
                key={destination.name}
                className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white transition duration-300 group-hover:bg-yellow-400 group-hover:text-slate-900">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {destination.name}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-sm text-blue-600">
                  <MapPin className="h-4 w-4" />
                  {destination.type}
                </div>

                <p className="mt-4 leading-7 text-slate-600">
                  {destination.description}
                </p>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-yellow-500"
                >
                  Plan Your Trip
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <div className="mt-6 h-1 w-12 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-900 to-blue-700 px-8 py-12 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold">
            Don't See Your Destination?
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-blue-100">
            We serve many more destinations across Uttar Pradesh and North India.
            Contact us with your travel plan, and we'll arrange the perfect ride.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-yellow-300"
          >
            Get a Custom Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
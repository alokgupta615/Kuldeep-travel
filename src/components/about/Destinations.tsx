"use client";

import Link from "next/link";
import {
  ArrowRight,
  Landmark,
  Building2,
  Mountain,
  Trees,
  CheckCircle2,
} from "lucide-react";

const destinations = [
  {
    name: "Ayodhya",
    icon: Landmark,
    type: "Religious Destination",
    description:
      "Comfortable taxi service for Ram Mandir, Hanuman Garhi, Kanak Bhawan, and nearby attractions with experienced drivers.",
    highlights: ["One Way Taxi", "Round Trip", "Sightseeing"],
  },
  {
    name: "Varanasi",
    icon: Landmark,
    type: "Spiritual City",
    description:
      "Travel comfortably to Kashi Vishwanath Temple, Dashashwamedh Ghat, Sarnath, and other sacred locations.",
    highlights: ["Airport Pickup", "Local Tour", "Hotel Drop"],
  },
  {
    name: "Prayagraj",
    icon: Landmark,
    type: "Pilgrimage",
    description:
      "Reliable transportation for Sangam, Kumbh Mela, Anand Bhavan, and city sightseeing.",
    highlights: ["Sangam Tour", "Round Trip", "Family Travel"],
  },
  {
    name: "Agra",
    icon: Building2,
    type: "Historic City",
    description:
      "Visit the Taj Mahal, Agra Fort, Fatehpur Sikri, and enjoy comfortable intercity travel.",
    highlights: ["One Day Trip", "Weekend Tour", "Luxury Taxi"],
  },
  {
    name: "Delhi",
    icon: Building2,
    type: "Capital City",
    description:
      "Professional taxi services for business meetings, sightseeing, airport transfers, and family travel.",
    highlights: ["Airport Transfer", "Business Travel", "Outstation"],
  },
  {
    name: "Jaipur",
    icon: Building2,
    type: "Pink City",
    description:
      "Explore Amber Fort, Hawa Mahal, City Palace, and Jaipur's vibrant markets comfortably.",
    highlights: ["Heritage Tour", "Luxury Cab", "Weekend Trip"],
  },
  {
    name: "Nainital",
    icon: Mountain,
    type: "Hill Station",
    description:
      "Relax with scenic mountain drives, Naini Lake visits, and comfortable family vacations.",
    highlights: ["Hill Tour", "Family Package", "Round Trip"],
  },
  {
    name: "Jim Corbett",
    icon: Trees,
    type: "Wildlife Destination",
    description:
      "Safe transportation for jungle safaris, resorts, wildlife photography, and weekend getaways.",
    highlights: ["Safari Trip", "Resort Drop", "Weekend Tour"],
  },
];

export default function Destinations() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Popular Destinations
          </span>

          <h2 className="mt-6 text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
            Explore North India With Confidence
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Whether you're planning a pilgrimage, family vacation, business
            trip, or weekend getaway, we provide safe and comfortable taxi
            services from Lucknow to the most popular destinations.
          </p>
        </div>

        {/* Destination List */}
        <div className="mt-16 divide-y divide-slate-200">
          {destinations.map((destination) => {
            const Icon = destination.icon;

            return (
              <div
                key={destination.name}
                className="group relative py-10 transition-all duration-300"
              >
                {/* Hover Accent */}
                <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 rounded-full bg-yellow-400 transition-transform duration-300 group-hover:scale-y-100" />

                <div className="pl-4 sm:pl-8">
                  {/* Top Row */}
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    {/* Left */}
                    <div className="flex items-start gap-5">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg transition duration-300 group-hover:bg-yellow-400 group-hover:text-slate-900">
                        <Icon className="h-8 w-8" />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                          {destination.name}
                        </h3>

                        <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-blue-600">
                          {destination.type}
                        </p>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/book-now"
                      className="inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:text-yellow-500"
                    >
                      Book Now
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* Description */}
                  <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600">
                    {destination.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    {destination.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition group-hover:bg-blue-50"
                      >
                        <CheckCircle2 className="h-4 w-4 text-yellow-500" />

                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Bottom CTA */}
        <div className="mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 p-8 text-center text-white shadow-2xl sm:p-12 lg:p-16">
          <div className="mx-auto max-w-4xl">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
              Need a Custom Destination?
            </span>

            <h3 className="mt-6 text-3xl font-black sm:text-4xl">
              We'll Take You Anywhere Across North India
            </h3>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
              Planning a trip that's not listed above? We provide customized
              taxi services for religious tours, family vacations, business
              travel, hill stations, and outstation journeys throughout North
              India.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/book-now"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:bg-yellow-300"
              >
                Book Your Ride
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-blue-900"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

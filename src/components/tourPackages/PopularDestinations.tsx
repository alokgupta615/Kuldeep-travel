"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Landmark,
  Mountain,
  Trees,
  Building2,
} from "lucide-react";

const destinations = [
  {
    title: "Ayodhya",
    image: "/images/tour-packages/destinations/ayodhya.jpg",
    icon: Landmark,
    description:
      "Visit Ram Janmabhoomi, Hanuman Garhi, Kanak Bhawan, and other sacred temples.",
    duration: "1–2 Days",
    href: "/tour-packages/religious-tours",
  },
  {
    title: "Varanasi",
    image: "/images/tour-packages/destinations/varanasi.jpg",
    icon: Landmark,
    description:
      "Experience Kashi Vishwanath Temple, Ganga Aarti, ghats, and spiritual heritage.",
    duration: "2–3 Days",
    href: "/tour-packages/religious-tours",
  },
  {
    title: "Prayagraj",
    image: "/images/tour-packages/destinations/prayagraj.jpg",
    icon: Landmark,
    description:
      "Explore Triveni Sangam, Anand Bhavan, Allahabad Fort, and religious landmarks.",
    duration: "1–2 Days",
    href: "/tour-packages/religious-tours",
  },
  {
    title: "Agra",
    image: "/images/tour-packages/destinations/agra.jpg",
    icon: Building2,
    description:
      "Discover the Taj Mahal, Agra Fort, Mehtab Bagh, and Mughal heritage.",
    duration: "2 Days",
    href: "/tour-packages/custom-tour-packages",
  },
  {
    title: "Delhi",
    image: "/images/tour-packages/destinations/delhi.jpg",
    icon: Building2,
    description:
      "Visit India Gate, Red Fort, Qutub Minar, Lotus Temple, and vibrant markets.",
    duration: "2–3 Days",
    href: "/tour-packages/custom-tour-packages",
  },
  {
    title: "Mussoorie",
    image: "/images/tour-packages/destinations/mussoorie.jpg",
    icon: Mountain,
    description:
      "Enjoy scenic mountain views, Kempty Falls, Mall Road, and peaceful weather.",
    duration: "3–5 Days",
    href: "/tour-packages/weekend-getaways",
  },
  {
    title: "Nainital",
    image: "/images/tour-packages/destinations/nainital.jpg",
    icon: Mountain,
    description:
      "Relax beside Naini Lake with boating, shopping, ropeway rides, and sightseeing.",
    duration: "3–5 Days",
    href: "/tour-packages/weekend-getaways",
  },
  {
    title: "Jim Corbett",
    image: "/images/tour-packages/destinations/jim-corbett.jpg",
    icon: Trees,
    description:
      "Experience wildlife safaris, forests, rivers, and unforgettable nature adventures.",
    duration: "3 Days",
    href: "/tour-packages/custom-tour-packages",
  },
  {
    title: "Haridwar & Rishikesh",
    image: "/images/tour-packages/destinations/haridwar.jpg",
    icon: Landmark,
    description:
      "Enjoy Ganga Aarti, temples, yoga retreats, rafting, and spiritual experiences.",
    duration: "3–4 Days",
    href: "/tour-packages/religious-tours",
  },
];

export default function PopularDestinations() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Popular Destinations
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Explore the Best Holiday Destinations from Lucknow
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover spiritual destinations, hill stations, wildlife parks,
            heritage cities, and weekend getaways with our customized holiday
            packages.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {destinations.map((destination) => {
            const Icon = destination.icon;

            return (
              <div
                key={destination.title}
                className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image */}

                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-xl bg-white/90 p-3">
                    <Icon className="h-6 w-6 text-blue-700" />
                  </div>
                </div>

                {/* Content */}

                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {destination.title}
                    </h3>

                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                      {destination.duration}
                    </span>
                  </div>

                  <p className="mt-5 leading-7 text-gray-600">
                    {destination.description}
                  </p>

                  <div className="mt-6 flex items-center text-blue-700">
                    <MapPin className="mr-2 h-5 w-5" />
                    <span>Starting from Lucknow</span>
                  </div>

                  <Link
                    href={destination.href}
                    className="mt-8 inline-flex items-center font-semibold text-blue-700 hover:text-blue-900"
                  >
                    Explore Package
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 p-10 text-center text-white">
          <h3 className="text-3xl font-bold">
            Looking for Another Destination?
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            We also organize customized holiday packages to Rajasthan,
            Himachal Pradesh, Uttarakhand, Madhya Pradesh, and many other
            destinations across India.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-xl bg-yellow-400 px-8 py-4 text-lg font-semibold text-blue-950 transition hover:bg-yellow-300"
          >
            Plan My Holiday
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, MapPin, Star } from "lucide-react";

const destinations = [
  {
    name: "Nainital",
    image: "/images/destinations/nainital.png",
    duration: "3N / 4D",
    description:
      "Experience peaceful lakes, boating, ropeway rides, Mall Road shopping, and breathtaking Himalayan views with your family.",
    highlights: ["Naini Lake", "Boating", "Snow View Point"],
  },
  {
    name: "Mussoorie",
    image: "/images/destinations/mussoorie.png",
    duration: "3N / 4D",
    description:
      "Enjoy pleasant weather, waterfalls, Gun Hill, Camel's Back Road, and beautiful mountain scenery together.",
    highlights: ["Kempty Falls", "Gun Hill", "Mall Road"],
  },
  {
    name: "Jim Corbett",
    image: "/images/destinations/jim corbett.png",
    duration: "2N / 3D",
    description:
      "A perfect wildlife getaway offering jungle safaris, riverside resorts, and exciting outdoor adventures.",
    highlights: ["Safari", "Wildlife", "Nature"],
  },
  {
    name: "Agra",
    image: "/images/destinations/agra.png",
    duration: "2N / 3D",
    description:
      "Discover India's iconic Taj Mahal, Agra Fort, local markets, and Mughal heritage with your loved ones.",
    highlights: ["Taj Mahal", "Agra Fort", "Mehtab Bagh"],
  },
  {
    name: "Jaipur",
    image: "/images/destinations/jaipur.png",
    duration: "4N / 5D",
    description:
      "Explore royal palaces, magnificent forts, colourful markets, and Rajasthan's vibrant culture.",
    highlights: ["Amber Fort", "Hawa Mahal", "City Palace"],
  },
  {
    name: "Ayodhya",
    image: "/images/destinations/ayodhya.png",
    duration: "2N / 3D",
    description:
      "Visit Ram Janmabhoomi, Hanuman Garhi, Kanak Bhawan, and other sacred places with your family.",
    highlights: ["Ram Mandir", "Hanuman Garhi", "Saryu Aarti"],
  },
  {
    name: "Varanasi",
    image: "/images/destinations/varanasi.png",
    duration: "3N / 4D",
    description:
      "Witness the spiritual beauty of Kashi Vishwanath Temple, Ganga Aarti, and ancient ghats.",
    highlights: ["Ganga Aarti", "Ghats", "Kashi Temple"],
  },
  {
    name: "Haridwar & Rishikesh",
    image: "/images/destinations/haridwar.png",
    duration: "4N / 5D",
    description:
      "Experience spirituality, yoga, riverfronts, adventure activities, and scenic Himalayan surroundings.",
    highlights: ["Har Ki Pauri", "Laxman Jhula", "Ganga Aarti"],
  },
];

export default function PopularDestinations() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Popular Destinations
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Explore Amazing Places with Our
            <span className="block text-blue-700">
              Family Tour Packages from Lucknow
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From peaceful hill stations and wildlife adventures to historical
            cities and sacred pilgrimage destinations, we organise memorable
            family holidays across North India.
          </p>
        </div>

        {/* Destination Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="group overflow-hidden rounded-[28px] bg-white shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Image */}

              <div className="relative overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  width={500}
                  height={600}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold backdrop-blur">
                  <Clock3 className="mr-2 inline h-4 w-4 text-blue-700" />

                  {destination.duration}
                </div>
              </div>

              {/* Content */}

              <div className="p-7">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {destination.name}
                  </h3>

                  <div className="flex items-center text-yellow-500">
                    <Star className="mr-1 h-4 w-4 fill-current" />

                    <span className="text-sm font-semibold">4.9</span>
                  </div>
                </div>

                <p className="mt-5 leading-7 text-slate-600">
                  {destination.description}
                </p>

                {/* Highlights */}

                <div className="mt-6 flex flex-wrap gap-2">
                  {destination.highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Footer */}

                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500">
                      Popular Family Destination
                    </p>

                    <div className="mt-1 flex items-center font-semibold text-blue-700">
                      <MapPin className="mr-1 h-4 w-4" />
                      From Lucknow
                    </div>
                  </div>

                  <Link
                    href="/book-now"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-700 text-white transition hover:bg-blue-800"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Heart,
  Building2,
  Landmark,
  Mountain,
  Sparkles,
} from "lucide-react";

const packages = [
  {
    title: "Family Holiday Packages",
    description:
      "Enjoy memorable vacations with your loved ones through comfortable transportation, sightseeing, and flexible itineraries.",
    image: "/images/tour-packages/family.jpg",
    icon: Users,
    href: "/tour-packages/family-tours",
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Couple Holiday Packages",
    description:
      "Perfect for honeymoon trips, anniversaries, and romantic getaways to beautiful destinations across North India.",
    image: "/images/tour-packages/couple.jpg",
    icon: Heart,
    href: "/tour-packages/custom-tour-packages",
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Group Tour Packages",
    description:
      "Ideal for friends, corporate teams, clubs, schools, colleges, and social groups with spacious vehicles.",
    image: "/images/tour-packages/group.jpg",
    icon: Building2,
    href: "/tour-packages/custom-tour-packages",
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Religious Tour Packages",
    description:
      "Visit sacred destinations including Ayodhya, Varanasi, Prayagraj, Haridwar, Rishikesh, and more.",
    image: "/images/tour-packages/religious.jpg",
    icon: Landmark,
    href: "/tour-packages/religious-tours",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Weekend Getaway Packages",
    description:
      "Short vacations to nearby hill stations, heritage cities, wildlife parks, and peaceful destinations.",
    image: "/images/tour-packages/weekend.jpg",
    icon: Mountain,
    href: "/tour-packages/weekend-getaways",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    title: "Customized Holiday Packages",
    description:
      "Create your own itinerary with personalized destinations, hotels, sightseeing, and travel duration.",
    image: "/images/tour-packages/custom.jpg",
    icon: Sparkles,
    href: "/tour-packages/custom-tour-packages",
    color: "bg-orange-100 text-orange-700",
  },
];

export default function PackageCategories() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Holiday Packages
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Holiday Packages We Offer
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            From family vacations and romantic getaways to pilgrimage tours and
            corporate outings, we offer customized holiday packages designed for
            every travel style.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((pkg) => {
            const Icon = pkg.icon;

            return (
              <div
                key={pkg.title}
                className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image */}

                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div
                    className={`absolute left-5 top-5 rounded-xl p-3 ${pkg.color}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                {/* Content */}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {pkg.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {pkg.description}
                  </p>

                  <Link
                    href={pkg.href}
                    className="mt-8 inline-flex items-center font-semibold text-blue-700 transition hover:text-blue-900"
                  >
                    Learn More
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
            Can't Find Your Perfect Holiday Package?
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Tell us your preferred destination, travel dates, budget, and group
            size. We'll create a fully customized holiday package designed just
            for you.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-xl bg-yellow-400 px-8 py-4 text-lg font-semibold text-blue-950 transition hover:bg-yellow-300"
          >
            Request Custom Package
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
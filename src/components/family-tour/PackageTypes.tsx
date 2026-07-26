"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Mountain,
  Church,
  Trees,
  Backpack,
  Sparkles,
} from "lucide-react";

const packages = [
  {
    title: "Weekend Family Getaways",
    image: "/images/family-tour/weekend.jpg",
    icon: CalendarDays,
    description:
      "Take a refreshing short break with your loved ones by exploring nearby destinations around Lucknow. Perfect for long weekends and quick family vacations.",
    highlights: ["1–3 Day Trips", "Nearby Destinations", "Relaxed Itinerary"],
  },
  {
    title: "Summer Holiday Packages",
    image: "/images/family-tour/summer.jpg",
    icon: Mountain,
    description:
      "Escape the summer heat with customized hill station holidays featuring scenic landscapes, pleasant weather, and family-friendly attractions.",
    highlights: ["Hill Stations", "Nature Experiences", "Comfortable Stay"],
  },
  {
    title: "Religious Family Tours",
    image: "/images/family-tour/religious.jpg",
    icon: Church,
    description:
      "Visit sacred destinations including Ayodhya, Varanasi, Haridwar, Prayagraj, and Rishikesh with well-planned pilgrimage tours.",
    highlights: ["Pilgrimage", "Senior Friendly", "Flexible Schedule"],
  },
  {
    title: "Wildlife & Nature Tours",
    image: "/images/family-tour/wildlife.jpg",
    icon: Trees,
    description:
      "Enjoy jungle safaris, forests, rivers, and unforgettable outdoor adventures with destinations like Jim Corbett National Park.",
    highlights: ["Safari", "Nature Walks", "Photography"],
  },
  {
    title: "School Holiday Trips",
    image: "/images/family-tour/school.jpg",
    icon: Backpack,
    description:
      "Plan exciting vacations during school holidays with educational, historical, cultural, and recreational destinations.",
    highlights: ["Kid Friendly", "Educational", "Fun Activities"],
  },
  {
    title: "Customized Family Tours",
    image: "/images/family-tour/custom.jpg",
    icon: Sparkles,
    description:
      "Already have destinations in mind? We'll design a completely personalized family holiday according to your travel dates and budget.",
    highlights: ["Fully Customized", "Flexible Budget", "Your Choice"],
  },
];

export default function PackageTypes() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Tour Categories
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Family Tour Packages
            <span className="block text-blue-700">
              Designed Around Your Travel Style
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you're planning a weekend getaway, a summer vacation, a
            spiritual journey, or a customized holiday, our Family Tour Packages
            from Lucknow are tailored to suit every travel preference.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Image */}

              <div className="relative overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 p-4 backdrop-blur-md">
                  <pkg.icon className="h-8 w-8 text-blue-700" />
                </div>
              </div>

              {/* Content */}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900">
                  {pkg.title}
                </h3>

                <p className="mt-5 leading-7 text-slate-600">
                  {pkg.description}
                </p>

                {/* Highlights */}

                <div className="mt-6 flex flex-wrap gap-2">
                  {pkg.highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <Link
                  href="/book-now"
                  className="mt-8 inline-flex items-center font-semibold text-blue-700 transition group-hover:translate-x-1"
                >
                  Book This Package
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

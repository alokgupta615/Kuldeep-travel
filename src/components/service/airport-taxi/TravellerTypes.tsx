import Link from "next/link";
import {
  Briefcase,
  Users,
  User,
  GraduationCap,
  HeartHandshake,
  Camera,
  ArrowRight,
} from "lucide-react";

const travellers = [
  {
    icon: Briefcase,
    title: "Business Travellers",
    description:
      "Reliable airport transfers for meetings, conferences and corporate travel.",
  },
  {
    icon: Users,
    title: "Families",
    description:
      "Comfortable vehicles with ample space for passengers and luggage.",
  },
  {
    icon: User,
    title: "Solo Travellers",
    description:
      "Safe, comfortable and dependable airport rides for individuals.",
  },
  {
    icon: GraduationCap,
    title: "Students",
    description:
      "Affordable airport transportation for college and university students.",
  },
  {
    icon: HeartHandshake,
    title: "Senior Citizens",
    description:
      "Courteous drivers with luggage assistance and comfortable travel.",
  },
  {
    icon: Camera,
    title: "Tourists",
    description:
      "Convenient airport pickup and drop for visitors exploring Lucknow.",
  },
];

export default function TravellerTypes() {
  return (
    <section className="bg-gray-50 py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
            Who We Serve
          </span>

          <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-5xl">
            Perfect for Every Traveller
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg md:leading-8">
            Whether you're travelling for business, family vacations or leisure,
            our airport taxi service is tailored for every journey.
          </p>
        </div>

        {/* List */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {travellers.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href="/book-now"
                className="group block rounded-2xl"
                aria-label={`Book airport taxi for ${item.title}`}
              >
                <div className="flex h-full items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:shadow-xl">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 transition-colors duration-300 group-hover:bg-blue-700">
                    <Icon className="h-6 w-6 text-blue-700 transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-gray-900">
                        {item.title}
                      </h3>

                      <ArrowRight className="h-5 w-5 text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-700" />
                    </div>

                    <p className="mt-2 text-sm leading-7 text-gray-600 md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

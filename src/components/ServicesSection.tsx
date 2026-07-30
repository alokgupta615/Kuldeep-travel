import Link from "next/link";
import {
  Plane,
  Car,
  MapPinned,
  ArrowRightLeft,
  CarFront,
  HeartHandshake,
} from "lucide-react";

const services = [
  {
    title: "Airport Taxi",
    description:
      "24×7 airport pickup & drop with flight tracking and professional drivers.",
    icon: Plane,
    href: "/services/airport-taxi",
  },
  {
    title: "Local Cab",
    description:
      "Reliable city taxi services for office, shopping and daily travel.",
    icon: Car,
    href: "/services/local-cab",
  },
  {
    title: "Outstation Taxi",
    description:
      "Comfortable outstation rides to Ayodhya, Varanasi, Delhi, Agra & more.",
    icon: MapPinned,
    href: "/services/outstation-taxi",
  },
  {
    title: "One Way Taxi",
    description: "One-way trips without paying unnecessary return charges.",
    icon: ArrowRightLeft,
    href: "/services/one-way-taxi",
  },
  {
    title: "Wedding Car Rental",
    description:
      "Luxury chauffeur-driven wedding cars for your special occasions.",
    icon: CarFront,
    href: "/services/wedding-car-rental",
  },
  {
    title: "Senior Citizen Travel",
    description:
      "Safe, comfortable travel with patient and experienced drivers.",
    icon: HeartHandshake,
    href: "/services/senior-citizen-travel",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 md:text-sm">
            Our Services
          </span>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Complete Travel Solutions
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-600 md:mt-5 md:text-lg md:leading-8">
            Whether you're traveling within Lucknow or planning an outstation
            journey, Kuldeep Travels provides safe, comfortable and affordable
            taxi services for every travel need.
          </p>
        </div>

        {/* Services */}

        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:rounded-2xl md:p-7"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 transition group-hover:bg-blue-700 md:mb-6 md:h-16 md:w-16">
                  <Icon className="h-6 w-6 text-blue-700 group-hover:text-white md:h-8 md:w-8" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 md:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600 md:mt-4 md:text-base md:leading-7">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-amber-500 md:mt-6 md:text-base"
                >
                  Learn More →
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA */}

        <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-900 p-6 text-white md:mt-20 md:rounded-3xl md:p-10 lg:p-14">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold md:text-3xl">
                Need a Taxi Today?
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100 md:mt-4 md:text-lg md:leading-8">
                Book your ride in minutes with verified drivers, transparent
                pricing and 24×7 customer support.
              </p>
            </div>

            <Link
              href="/book-now"
              className="w-full rounded-xl bg-amber-400 px-6 py-3 text-center font-semibold text-black transition hover:bg-amber-300 md:w-auto md:px-8 md:py-4"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

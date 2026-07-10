import Link from "next/link";
import {
  Plane,
  Car,
  MapPinned,
  ArrowRightLeft,
  RefreshCw,
  Bus,
  Building2,
  Briefcase,
  Mountain,
} from "lucide-react";

const services = [
  {
    title: "Airport Taxi",
    description:
      "24×7 airport pickup and drop with flight tracking and professional drivers.",
    icon: Plane,
    href: "/services/airport-taxi",
  },
  {
    title: "Local Cab",
    description:
      "Comfortable city rides for shopping, office, meetings, and daily travel.",
    icon: Car,
    href: "/services/local-cab",
  },
  {
    title: "Outstation Taxi",
    description:
      "Travel safely to Ayodhya, Varanasi, Prayagraj, Delhi, Agra and more.",
    icon: MapPinned,
    href: "/services/outstation-taxi",
  },
  {
    title: "One Way Taxi",
    description:
      "Pay only for your destination without worrying about return charges.",
    icon: ArrowRightLeft,
    href: "/services/one-way-taxi",
  },
  {
    title: "Round Trip",
    description:
      "Book return journeys with the same trusted driver and comfortable vehicle.",
    icon: RefreshCw,
    href: "/services/round-trip",
  },
  {
    title: "Tempo Traveller",
    description:
      "Ideal for family vacations, group tours, weddings, and corporate outings.",
    icon: Bus,
    href: "/services/tempo-traveller",
  },
  {
    title: "Corporate Travel",
    description:
      "Reliable transport solutions for businesses, executives, and employees.",
    icon: Briefcase,
    href: "/services/corporate-travel",
  },
  {
    title: "Luxury Bus Rental",
    description:
      "Premium buses for weddings, events, school trips, and large groups.",
    icon: Building2,
    href: "/services/luxury-bus",
  },
  {
    title: "Tour Packages",
    description:
      "Customized family, religious, and holiday packages across North India.",
    icon: Mountain,
    href: "/tour-packages",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-14">

          <span className="text-blue-600 uppercase font-semibold tracking-widest">
            Our Services
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Complete Travel Solutions Under One Roof
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-8">
            Whether you're traveling within Lucknow or planning an outstation
            journey, Kuldeep Travels offers reliable taxi services and customized
            tour packages to suit every travel need.
          </p>

        </div>

        {/* Service Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >

                <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition">

                  <Icon
                    size={32}
                    className="text-blue-700 group-hover:text-white"
                  />

                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-7 mb-6">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-amber-500 transition"
                >
                  Learn More →
                </Link>

              </div>
            );
          })}

        </div>

        {/* CTA Banner */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-700 to-blue-900 text-white p-10 lg:p-14">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            <div>
              <h3 className="text-3xl font-bold">
                Need a Taxi Today?
              </h3>

              <p className="mt-4 text-blue-100 text-lg max-w-2xl">
                Book your ride in minutes with verified drivers, transparent
                pricing, and 24×7 customer support.
              </p>
            </div>

            <Link
              href="/booking"
              className="bg-amber-400 hover:bg-amber-300 text-black font-semibold px-8 py-4 rounded-xl transition"
            >
              Book Now
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
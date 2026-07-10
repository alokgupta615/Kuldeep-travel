import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const destinations = [
  {
    name: "Ayodhya",
    image: "/images/destinations/ayodhya.jpg",
    distance: "135 km",
    description: "Visit the holy city of Lord Ram with comfortable taxi service.",
    href: "/destinations/lucknow-to-ayodhya",
  },
  {
    name: "Varanasi",
    image: "/images/destinations/varanasi.jpg",
    distance: "320 km",
    description: "Travel to Kashi with safe, reliable, and comfortable rides.",
    href: "/destinations/lucknow-to-varanasi",
  },
  {
    name: "Prayagraj",
    image: "/images/destinations/prayagraj.jpg",
    distance: "205 km",
    description: "Convenient trips for business, tourism, and religious visits.",
    href: "/destinations/lucknow-to-prayagraj",
  },
  {
    name: "Agra",
    image: "/images/destinations/agra.jpg",
    distance: "335 km",
    description: "Explore the Taj Mahal with our premium taxi service.",
    href: "/destinations/lucknow-to-agra",
  },
  {
    name: "Delhi",
    image: "/images/destinations/delhi.jpg",
    distance: "550 km",
    description: "Comfortable long-distance travel with experienced drivers.",
    href: "/destinations/lucknow-to-delhi",
  },
  {
    name: "Mathura & Vrindavan",
    image: "/images/destinations/mathura.jpg",
    distance: "470 km",
    description: "Religious and family trips with customized packages.",
    href: "/destinations/lucknow-to-mathura",
  },
];

export default function Destinations() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            Popular Routes
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Explore Our Popular Destinations
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            We provide safe and comfortable taxi services from Lucknow to major
            religious, tourist, and business destinations across North India.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <h3 className="text-2xl font-bold text-white">
                    {destination.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4 flex items-center gap-2 text-blue-700">
                  <MapPin size={18} />
                  <span className="font-medium">
                    Approx. {destination.distance} from Lucknow
                  </span>
                </div>

                <p className="mb-6 text-gray-600 leading-7">
                  {destination.description}
                </p>

                <Link
                  href={destination.href}
                  className="inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:text-amber-500"
                >
                  Explore Route
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-700 to-blue-900 p-8 text-center text-white sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold">
            Can't Find Your Destination?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            We provide taxi services to hundreds of destinations across Uttar
            Pradesh and North India. Contact us for a customized travel quote.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:+919999999999"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:bg-gray-100"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919999999999"
              className="rounded-xl bg-amber-400 px-8 py-4 font-semibold text-black transition hover:bg-amber-300"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
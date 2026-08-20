import Image from "next/image";
import Link from "next/link";
import { Users, Briefcase, Snowflake } from "lucide-react";

const fleet = [
  // Row 1
  {
    name: "Swift Dzire (CNG)",
    image: "/images/fleet/sedan.png",
    passengers: "4 Passengers",
    luggage: "2 Bags",
    ac: "Air Conditioned",
    price: "Starting ₹10/km",
  },
  {
    name: "Toyota Etios",
    image: "/images/fleet/sedan.png",
    passengers: "4 Passengers",
    luggage: "2 Bags",
    ac: "Air Conditioned",
    price: "Starting ₹10/km",
  },
  {
    name: "Honda Amaze",
    image: "/images/fleet/sedan.png",
    passengers: "4 Passengers",
    luggage: "2 Bags",
    ac: "Air Conditioned",
    price: "Starting ₹10/km",
  },
  // Row 2
  {
    name: "Maruti Ertiga",
    image: "/images/fleet/ertiga.png",
    passengers: "6 Passengers",
    luggage: "4 Bags",
    ac: "Air Conditioned",
    price: "Starting ₹15/km",
  },
  {
    name: "Kia Carens",
    image: "/images/fleet/suv.png",
    passengers: "6 Passengers",
    luggage: "4 Bags",
    ac: "Air Conditioned",
    price: "Starting ₹16/km",
  },
  {
    name: "Toyota Innova Crysta",
    image: "/images/fleet/innova.png",
    passengers: "7 Passengers",
    luggage: "5 Bags",
    ac: "Premium AC",
    price: "Starting ₹18/km",
  },
  // Row 3
  {
    name: "Tempo Traveller",
    image: "/images/fleet/tempo.png",
    passengers: "17 & 25 Seater options available",
    luggage: "Large Luggage Space",
    ac: "Luxury AC",
    price: "Call for Price",
  },
  {
    name: "Force Urbania",
    image: "/images/fleet/urbania.png",
    passengers: "17 Seater",
    luggage: "Large Luggage Space",
    ac: "Premium AC",
    price: "Call for Price",
  },
  {
    name: "Luxury Bus",
    image: "/images/fleet/bus.png",
    passengers: "35 & 50 Seater options available",
    luggage: "Large Storage",
    ac: "Luxury AC",
    price: "Call for Price",
  },
];

export default function Fleet() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}

        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 md:text-sm">
            Our Fleet
          </span>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:mt-4 md:text-5xl">
            Comfortable Vehicles For Every Journey
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600 md:mt-6 md:text-lg md:leading-8">
            From economical sedans to luxury buses, choose the perfect vehicle
            for airport transfers, local travel, outstation trips, weddings,
            corporate events and family vacations.
          </p>
        </div>

        {/* Fleet Grid */}

        <div className="grid gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {fleet.map((vehicle, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:rounded-3xl"
            >
              {/* Desktop Image */}

              {/* Vehicle Image */}

              {/* <div className="relative h-40 overflow-hidden rounded-t-2xl bg-gradient-to-br from-blue-50 to-white sm:h-48 md:h-60">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-contain p-4 transition-transform duration-300 hover:scale-105 md:object-cover md:p-0"
                />
              </div> */}

              <div className="relative h-52 overflow-hidden rounded-t-2xl bg-gradient-to-br from-blue-50 via-white to-gray-50 sm:h-56 md:h-60">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* <div className="relative h-52 overflow-hidden rounded-t-2xl bg-gradient-to-br from-blue-50 via-white to-gray-50 sm:h-56 md:h-60">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain"
                />
              </div> */}

              <div className="p-4 md:p-7">
                {/* Mobile Icon */}

                <h3 className="text-xl font-bold text-gray-900 md:text-2xl">
                  {vehicle.name}
                </h3>

                <p className="mt-1 text-sm font-semibold text-blue-700 md:mt-2 md:text-base">
                  {vehicle.price}
                </p>

                <div className="mt-5 space-y-3 md:mt-6 md:space-y-4">
                  <div className="flex items-center gap-3 text-sm text-gray-700 md:text-base">
                    <Users className="h-4 w-4 text-blue-600 md:h-5 md:w-5" />
                    {vehicle.passengers}
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-700 md:text-base">
                    <Briefcase className="h-4 w-4 text-blue-600 md:h-5 md:w-5" />
                    {vehicle.luggage}
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-700 md:text-base">
                    <Snowflake className="h-4 w-4 text-blue-600 md:h-5 md:w-5" />
                    {vehicle.ac}
                  </div>
                </div>

                <Link
                  href="/book-now"
                  className="mt-6 block rounded-xl bg-blue-700 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-800 md:mt-8 md:py-4 md:text-base"
                >
                  Book This Vehicle
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}

        <div className="mt-14 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-900 p-6 text-center text-white md:mt-20 md:rounded-3xl md:p-12">
          <h3 className="text-2xl font-bold md:text-3xl">
            Need Help Choosing the Right Vehicle?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100 md:mt-5 md:text-lg md:leading-8">
            Our travel experts are available 24×7 to recommend the best vehicle
            based on your destination, number of passengers, and luggage.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center md:mt-8 md:gap-4">
            <a
              href="tel:+919936408109"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-gray-100 md:px-8 md:py-4"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919936408109"
              className="rounded-xl bg-amber-400 px-6 py-3 font-semibold text-black transition hover:bg-amber-300 md:px-8 md:py-4"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

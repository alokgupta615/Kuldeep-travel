import Image from "next/image";
import Link from "next/link";
import { Users, Briefcase, Snowflake } from "lucide-react";

const fleet = [
  {
    name: "Sedan",
    image: "/images/fleet/sedan.jpg",
    passengers: "4 Passengers",
    luggage: "2 Bags",
    ac: "Air Conditioned",
    price: "Starting ₹12/km",
  },
  {
    name: "SUV",
    image: "/images/fleet/suv.jpg",
    passengers: "6 Passengers",
    luggage: "4 Bags",
    ac: "Air Conditioned",
    price: "Starting ₹16/km",
  },
  {
    name: "Toyota Innova Crysta",
    image: "/images/fleet/innova.jpg",
    passengers: "7 Passengers",
    luggage: "5 Bags",
    ac: "Premium AC",
    price: "Starting ₹18/km",
  },
  {
    name: "Ertiga",
    image: "/images/fleet/ertiga.jpg",
    passengers: "6 Passengers",
    luggage: "4 Bags",
    ac: "Air Conditioned",
    price: "Starting ₹15/km",
  },
  {
    name: "Tempo Traveller",
    image: "/images/fleet/tempo.jpg",
    passengers: "12 / 17 / 26 Seats",
    luggage: "Large Luggage Space",
    ac: "Luxury AC",
    price: "Call for Price",
  },
  {
    name: "Luxury Bus",
    image: "/images/fleet/bus.jpg",
    passengers: "35–50 Seats",
    luggage: "Large Storage",
    ac: "Luxury AC",
    price: "Call for Price",
  },
];

export default function Fleet() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="text-blue-600 uppercase font-semibold tracking-widest">
            Our Fleet
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-gray-900">
            Comfortable Vehicles For Every Journey
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            From economical sedans to luxury buses, choose the perfect vehicle
            for airport transfers, local travel, outstation trips, weddings,
            corporate events, and family vacations.
          </p>

        </div>

        {/* Fleet Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {fleet.map((vehicle, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 border border-gray-100"
            >

              <div className="relative h-60">

                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-7">

                <h3 className="text-2xl font-bold text-gray-900">
                  {vehicle.name}
                </h3>

                <p className="text-blue-700 font-semibold mt-2">
                  {vehicle.price}
                </p>

                <div className="space-y-4 mt-6">

                  <div className="flex items-center gap-3 text-gray-700">
                    <Users size={20} className="text-blue-600" />
                    {vehicle.passengers}
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <Briefcase size={20} className="text-blue-600" />
                    {vehicle.luggage}
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <Snowflake size={20} className="text-blue-600" />
                    {vehicle.ac}
                  </div>

                </div>

                <Link
                  href="/booking"
                  className="mt-8 block text-center bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-semibold transition"
                >
                  Book This Vehicle
                </Link>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl p-12 text-center text-white">

          <h3 className="text-3xl font-bold">
            Need Help Choosing the Right Vehicle?
          </h3>

          <p className="mt-5 text-blue-100 max-w-2xl mx-auto text-lg">
            Our travel experts are available 24×7 to recommend the best vehicle
            based on your destination, number of passengers, and luggage.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">

            <a
              href="tel:+919999999999"
              className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919999999999"
              className="bg-amber-400 text-black px-8 py-4 rounded-xl font-semibold hover:bg-amber-300 transition"
            >
              WhatsApp Us
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Briefcase,
  Snowflake,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const vehicles = [
  {
    name: "Sedan",
    image: "/images/fleet/sedan.webp",
    passengers: "4 Passengers",
    luggage: "2 Bags",
    bestFor: "Business Travel • Couples • Small Families",
    features: [
      "Air Conditioned",
      "Comfortable Seats",
      "Professional Driver",
      "Fuel Efficient",
    ],
  },
  {
    name: "SUV",
    image: "/images/fleet/suv.webp",
    passengers: "6 Passengers",
    luggage: "4 Bags",
    bestFor: "Family Trips • Group Travel",
    features: [
      "Extra Legroom",
      "Premium Interior",
      "AC",
      "Large Boot Space",
    ],
  },
  {
    name: "Innova Crysta",
    image: "/images/fleet/innova.webp",
    passengers: "7 Passengers",
    luggage: "5 Bags",
    bestFor: "Luxury Family Trips • Corporate",
    features: [
      "Captain Seats",
      "Luxury Ride",
      "Powerful AC",
      "Premium Comfort",
    ],
  },
  {
    name: "Tempo Traveller",
    image: "/images/fleet/tempo.webp",
    passengers: "12–17 Passengers",
    luggage: "Large Capacity",
    bestFor: "Tours • Weddings • Group Travel",
    features: [
      "Push Back Seats",
      "Large Luggage Space",
      "Music System",
      "Perfect for Groups",
    ],
  },
];

export default function VehicleOptions() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Our Fleet
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
            Choose The Perfect
            <span className="block text-blue-700">
              Vehicle For Your Journey
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Whether you're travelling alone or with a large group,
            Kuldeep Travels has the right vehicle for every outstation trip.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {vehicles.map((vehicle) => (

            <div
              key={vehicle.name}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl"
            >

              {/* Image */}

              <div className="relative h-72 overflow-hidden">

                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">

                  <h3 className="text-4xl font-black text-white">
                    {vehicle.name}
                  </h3>

                </div>

              </div>

              {/* Content */}

              <div className="p-8">

                <div className="grid grid-cols-2 gap-4">

                  <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">

                    <Users className="text-blue-600" />

                    <div>

                      <p className="text-xs uppercase text-slate-500">
                        Capacity
                      </p>

                      <h4 className="font-semibold text-slate-900">
                        {vehicle.passengers}
                      </h4>

                    </div>

                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">

                    <Briefcase className="text-blue-600" />

                    <div>

                      <p className="text-xs uppercase text-slate-500">
                        Luggage
                      </p>

                      <h4 className="font-semibold text-slate-900">
                        {vehicle.luggage}
                      </h4>

                    </div>

                  </div>

                </div>

                {/* Best For */}

                <div className="mt-6 rounded-xl bg-blue-50 p-5">

                  <h4 className="font-bold text-blue-700">
                    Best For
                  </h4>

                  <p className="mt-2 text-slate-600">
                    {vehicle.bestFor}
                  </p>

                </div>

                {/* Features */}

                <div className="mt-8 space-y-4">

                  {vehicle.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >

                      <CheckCircle2
                        size={20}
                        className="text-green-600"
                      />

                      <span className="text-slate-700">
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

                {/* Extra */}

                <div className="mt-8 flex items-center gap-3 rounded-xl bg-yellow-50 p-4">

                  <Snowflake className="text-blue-600" />

                  <span className="font-medium text-slate-700">
                    Fully Air Conditioned Vehicle
                  </span>

                </div>

                {/* Button */}

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-slate-900 transition hover:bg-yellow-500"
                >

                  Book This Vehicle

                  <ArrowRight size={18} />

                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
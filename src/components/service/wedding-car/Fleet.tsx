import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Briefcase,
  Crown,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const fleet = [
  {
    title: "Luxury Sedans",
    image: "/images/wedding/fleet/sedan.jpg",
    description:
      "Elegant luxury sedans for sophisticated wedding arrivals and timeless photographs.",
    suitable: [
      "Bride Arrival",
      "Groom Entry",
      "Couple Photoshoot",
      "Reception Entry",
    ],
    capacity: "2-4 Passengers",
  },
  {
    title: "Premium SUVs",
    image: "/images/wedding/fleet/suv.jpg",
    description:
      "A perfect combination of luxury, comfort and commanding presence for modern weddings.",
    suitable: [
      "Bride & Groom",
      "VIP Guests",
      "Luxury Entry",
      "Family Members",
    ],
    capacity: "6-7 Passengers",
  },
  {
    title: "Innova Crysta",
    image: "/images/wedding/fleet/crysta.jpg",
    description:
      "Premium interiors with exceptional comfort for families and airport transfers.",
    suitable: [
      "Parents",
      "Close Relatives",
      "Airport Pickup",
      "Wedding Guests",
    ],
    capacity: "6-7 Passengers",
  },
  {
    title: "Tempo Traveller",
    image: "/images/wedding/fleet/traveller.jpg",
    description:
      "Ideal for transporting family members and wedding guests between venues comfortably.",
    suitable: [
      "Family Groups",
      "Friends",
      "Guest Transfers",
      "Hotels",
    ],
    capacity: "12-26 Passengers",
  },
  {
    title: "Mini Bus & Luxury Coach",
    image: "/images/wedding/fleet/coach.jpg",
    description:
      "The ideal choice for weddings with large guest lists requiring coordinated transportation.",
    suitable: [
      "Large Guest Groups",
      "Destination Weddings",
      "Corporate Guests",
      "Hotel Transfers",
    ],
    capacity: "27-50 Passengers",
  },
];

export default function Fleet() {
  return (
    <section className="bg-gradient-to-b from-[#FFFCF7] to-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
            Premium Wedding Fleet
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
            Choose The Perfect
            <span className="block text-blue-700">
              Wedding Vehicle
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every wedding deserves the perfect vehicle. Our premium fleet
            combines elegance, comfort and reliability to complement your
            celebration.
          </p>

        </div>

        {/* Fleet Cards */}

        <div className="mt-20 space-y-12">

          {fleet.map((vehicle, index) => (

            <div
              key={vehicle.title}
              className={`grid items-center gap-10 rounded-[32px] bg-white shadow-xl overflow-hidden lg:grid-cols-2 ${
                index % 2 !== 0
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }`}
            >

              {/* Image */}

              <div className="relative h-[350px] lg:h-[450px]">

                <Image
                  src={vehicle.image}
                  alt={vehicle.title}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                <div className="absolute bottom-6 left-6">

                  <span className="rounded-full bg-yellow-400 px-4 py-2 font-semibold text-slate-900">

                    {vehicle.capacity}

                  </span>

                </div>

              </div>

              {/* Content */}

              <div className="p-10 lg:p-14">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700 text-white">

                  <Crown size={30} />

                </div>

                <h3 className="mt-6 text-4xl font-bold text-slate-900">

                  {vehicle.title}

                </h3>

                <p className="mt-6 leading-8 text-slate-600">

                  {vehicle.description}

                </p>

                <div className="mt-10">

                  <h4 className="flex items-center gap-2 text-lg font-semibold text-slate-900">

                    <Users size={20} />

                    Suitable For

                  </h4>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">

                    {vehicle.suitable.map((item) => (

                      <div
                        key={item}
                        className="flex items-center gap-3"
                      >

                        <CheckCircle2
                          className="text-yellow-500"
                          size={18}
                        />

                        <span className="text-slate-700">

                          {item}

                        </span>

                      </div>

                    ))}

                  </div>

                </div>

                <div className="mt-10 flex flex-wrap gap-4">

                  <Link
                    href="/fleet"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
                  >

                    <Briefcase size={18} />

                    View Fleet

                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 font-bold text-slate-900 transition hover:bg-yellow-500"
                  >

                    Book This Vehicle

                    <ArrowRight size={18} />

                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-24 text-center">

          <Link
            href="/fleet"
            className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 px-10 py-5 text-lg font-bold text-white shadow-xl transition hover:scale-105"
          >

            Explore Our Complete Fleet

            <ArrowRight size={20} />

          </Link>

        </div>

      </div>
    </section>
  );
}
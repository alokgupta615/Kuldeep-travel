import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Briefcase,
  Crown,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const fleet = [
  {
    title: "Luxury Sedans",
    image: "/images/fleet/sedan.png",
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
    image: "/images/fleet/suv.png",
    description:
      "A perfect combination of luxury, comfort and commanding presence for modern weddings.",
    suitable: ["Bride & Groom", "VIP Guests", "Luxury Entry", "Family Members"],
    capacity: "6-7 Passengers",
  },
  {
    title: "Innova Crysta",
    image: "/images/fleet/innova.png",
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
    image: "/images/fleet/tempo.png",
    description:
      "Ideal for transporting family members and wedding guests between venues comfortably.",
    suitable: ["Family Groups", "Friends", "Guest Transfers", "Hotels"],
    capacity: "12-26 Passengers",
  },
  {
    title: "Mini Bus & Luxury Coach",
    image: "/images/fleet/bus.png",
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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-white to-[#F8FAFC] py-16 sm:py-20 lg:py-24">
      {/* Background Decorations */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-yellow-200/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-50 px-5 py-2 text-sm font-semibold text-yellow-700 shadow-sm">
            <Sparkles size={16} />
            Premium Wedding Fleet
          </div>

          <h2 className="mt-6 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Choose The Perfect
            <span className="mt-2 block bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 bg-clip-text text-transparent">
              Wedding Vehicle
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Every wedding deserves the perfect vehicle. Our premium fleet
            combines elegance, luxury and reliability to make your special day
            even more memorable.
          </p>
        </div>

        {/* Fleet Cards */}

        <div className="mt-14 space-y-10 lg:mt-20">
          {fleet.map((vehicle, index) => (
            <div
              key={vehicle.title}
              className={`group overflow-hidden rounded-3xl border border-yellow-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl lg:grid lg:grid-cols-2 lg:items-center ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Luxury Top Border */}

              <div className="h-1 w-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 lg:col-span-2" />

              {/* Image */}

              <div className="relative h-64 overflow-hidden lg:h-[460px]">
                <Image
                  src={vehicle.image}
                  alt={vehicle.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Premium Badge */}

                <div className="absolute left-5 top-5">
                  <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-widest text-yellow-700 shadow backdrop-blur-xl">
                    Premium Wedding Fleet
                  </span>
                </div>

                {/* Capacity */}

                <div className="absolute bottom-5 left-5">
                  <span className="rounded-full border border-white/30 bg-white/20 px-5 py-2 text-sm font-bold text-white backdrop-blur-xl">
                    {vehicle.capacity}
                  </span>
                </div>
              </div>

              {/* Content */}

              <div className="p-6 sm:p-8 lg:p-14">
                {/* Icon */}

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-900 to-blue-600 text-white shadow-lg">
                  <Crown size={28} />
                </div>

                {/* Title */}

                <h3 className="mt-6 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
                  {vehicle.title}
                </h3>

                {/* Description */}

                <p className="mt-5 text-[15px] leading-7 text-slate-600 sm:text-base">
                  {vehicle.description}
                </p>

                {/* Suitable */}

                <div className="mt-8">
                  <h4 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                    <Users size={20} />
                    Suitable For
                  </h4>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {vehicle.suitable.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 transition hover:border-yellow-300 hover:bg-yellow-50"
                      >
                        <CheckCircle2 size={18} className="text-yellow-500" />

                        <span className="text-sm font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buttons */}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/fleet"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-blue-700 bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white sm:w-auto"
                  >
                    <Briefcase size={18} />
                    View Fleet
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-3 font-bold text-slate-900 shadow-lg transition duration-300 hover:scale-[1.03] hover:shadow-xl sm:w-auto"
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

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 px-6 py-10 text-center text-white shadow-2xl sm:mt-20 sm:px-10 lg:mt-24">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
              <Sparkles size={16} />
              Premium Wedding Transportation
            </span>

            <h3 className="mt-5 text-3xl font-black sm:text-4xl">
              Arrive In Style On Your Special Day
            </h3>

            <p className="mt-5 text-base leading-8 text-blue-100 sm:text-lg">
              From luxury sedans for the bride and groom to premium coaches for
              wedding guests, we provide elegant transportation that makes every
              wedding unforgettable.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/fleet"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-blue-900 transition hover:scale-105 sm:w-auto"
              >
                <Briefcase size={18} />
                Explore Complete Fleet
              </Link>

              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur transition hover:bg-white/20 sm:w-auto"
              >
                Book Wedding Vehicle
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

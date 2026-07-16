import {
  Crown,
  Heart,
  Users,
  CarFront,
  Plane,
  MapPinned,
  CalendarDays,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Crown,
    title: "Groom Entry Car Rental",
    description:
      "Create a memorable royal entrance with luxury sedans and premium SUVs that perfectly complement your wedding celebration.",
    features: [
      "Luxury Sedans",
      "Premium SUVs",
      "Professional Chauffeur",
      "Grand Entrance",
    ],
  },
  {
    icon: Heart,
    title: "Bride Transportation",
    description:
      "Elegant, comfortable and punctual transportation so the bride arrives relaxed, beautifully and right on schedule.",
    features: [
      "Elegant Arrival",
      "Comfort First",
      "Decorated Vehicle",
      "On-Time Pickup",
    ],
  },
  {
    icon: Users,
    title: "Wedding Guest Transportation",
    description:
      "Coordinated transportation for guests arriving from different hotels, homes and venues without confusion.",
    features: [
      "Multiple Pickups",
      "Hotel Transfers",
      "Group Travel",
      "Professional Coordination",
    ],
  },
  {
    icon: CarFront,
    title: "Family Vehicle Arrangements",
    description:
      "Premium transportation for parents, grandparents, close relatives and VIP guests throughout every wedding function.",
    features: [
      "Premium Comfort",
      "VIP Guests",
      "Flexible Schedule",
      "Multiple Vehicles",
    ],
  },
  {
    icon: Plane,
    title: "Airport & Railway Pickups",
    description:
      "Reliable pickup and drop services from Lucknow Airport and railway stations for guests arriving from other cities.",
    features: [
      "Airport Pickup",
      "Railway Pickup",
      "Hotel Drop",
      "Meet & Greet",
    ],
  },
  {
    icon: MapPinned,
    title: "Destination Wedding",
    description:
      "Transportation planning for destination weddings across Uttar Pradesh and nearby states with complete coordination.",
    features: [
      "Outstation Travel",
      "Guest Transfers",
      "Fleet Management",
      "Dedicated Support",
    ],
  },
  {
    icon: CalendarDays,
    title: "Multi-Day Wedding Events",
    description:
      "Vehicle arrangements for engagement, haldi, mehendi, sangeet, wedding, reception and post-wedding celebrations.",
    features: [
      "All Functions",
      "Same Fleet",
      "Flexible Booking",
      "Event Planning",
    ],
  },
];

export default function Services() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
            Wedding Transportation Services
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
            Transportation Designed For
            <span className="block text-blue-700">
              Every Wedding Celebration
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From the groom's grand entry to guest transportation and
            destination weddings, Kuldeep Travels provides reliable,
            elegant and professionally managed transportation services
            for every celebration.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <div
                key={service.title}
                className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-yellow-300 hover:shadow-2xl"
              >

                {/* Icon */}

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700 text-white transition duration-300 group-hover:bg-yellow-400 group-hover:text-slate-900">

                  <Icon size={30} />

                </div>

                {/* Title */}

                <h3 className="mt-6 text-2xl font-bold text-slate-900">

                  {service.title}

                </h3>

                {/* Description */}

                <p className="mt-4 leading-8 text-slate-600">

                  {service.description}

                </p>

                {/* Features */}

                <div className="mt-8 space-y-3">

                  {service.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >

                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />

                      <span className="text-slate-700">

                        {feature}

                      </span>

                    </div>

                  ))}

                </div>

                {/* CTA */}

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-700 transition group-hover:text-yellow-600"
                >
                  Enquire Now

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

              </div>

            );

          })}

        </div>

        {/* Bottom Banner */}

        <div className="mt-24 overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 p-12 shadow-2xl">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>

              <h3 className="text-4xl font-black text-white">

                One Transportation Partner

                <span className="block text-yellow-400">

                  For Your Entire Wedding

                </span>

              </h3>

              <p className="mt-6 text-lg leading-8 text-blue-100">

                Whether your celebration lasts one day or several,
                our team coordinates every vehicle, every pickup and
                every guest movement so you can focus on enjoying your
                special moments.

              </p>

            </div>

            <div className="flex flex-wrap justify-center gap-5 lg:justify-end">

              <Link
                href="/contact"
                className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-slate-900 transition hover:bg-yellow-500"
              >
                Book Wedding Transport
              </Link>

              <Link
                href="/fleet"
                className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white hover:text-slate-900 transition"
              >
                View Fleet
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
import Link from "next/link";
import {
  ShieldCheck,
  BadgeCheck,
  Clock3,
  CarFront,
  IndianRupee,
  Headphones,
  Users,
  ArrowRight,
  Star,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Experienced Drivers",
    description:
      "Professional, verified and courteous drivers with years of long-distance driving experience.",
  },
  {
    icon: CarFront,
    title: "Well-Maintained Fleet",
    description:
      "Clean, sanitized and regularly serviced vehicles for a smooth and safe journey.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    description:
      "No hidden charges. Get clear pricing before your journey begins.",
  },
  {
    icon: Clock3,
    title: "24×7 Availability",
    description:
      "Book an outstation cab anytime with round-the-clock customer support.",
  },
  {
    icon: BadgeCheck,
    title: "Reliable Service",
    description:
      "On-time pickup, comfortable rides and dependable service for every trip.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Our support team is available before, during and after your journey.",
  },
];

const stats = [
  {
    number: "12+",
    label: "Years Experience",
  },
  {
    number: "10K+",
    label: "Successful Trips",
  },
  {
    number: "5K+",
    label: "Happy Customers",
  },
  {
    number: "24×7",
    label: "Customer Support",
  },
];

export default function WhyChooseKuldeep() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-blue-700 py-24">

      {/* Background */}

      <div className="absolute inset-0 bg-[url('/images/pattern/grid.svg')] opacity-10" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-yellow-400/20 px-5 py-2 text-sm font-semibold text-yellow-300">

            Why Choose Kuldeep Travels?

          </span>

          <h2 className="mt-6 text-4xl font-black text-white lg:text-5xl">

            Trusted Travel Partner

            <span className="block text-yellow-400">

              Since 2012

            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">

            Thousands of travellers trust Kuldeep Travels for safe,
            comfortable and affordable outstation journeys. Our focus
            is on customer satisfaction, punctuality and reliable service.

          </p>

        </div>

        {/* Stats */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => (

            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/10 p-8 text-center backdrop-blur-xl"
            >

              <h3 className="text-5xl font-black text-yellow-400">

                {stat.number}

              </h3>

              <p className="mt-3 text-slate-300">

                {stat.label}

              </p>

            </div>

          ))}

        </div>

        {/* Features */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-slate-900 transition group-hover:bg-blue-600 group-hover:text-white">

                  <Icon size={30} />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-white group-hover:text-slate-900">

                  {item.title}

                </h3>

                <p className="mt-4 leading-8 text-slate-300 group-hover:text-slate-600">

                  {item.description}

                </p>

              </div>

            );

          })}

        </div>

        {/* Customer Trust */}

        <div className="mt-20 rounded-3xl bg-white p-10 shadow-2xl">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>

              <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

                Customer Satisfaction

              </span>

              <h3 className="mt-6 text-4xl font-black text-slate-900">

                Travel With Complete Peace Of Mind

              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-600">

                Every journey is planned carefully to ensure safety,
                comfort and punctuality. Whether you're travelling
                with family, friends or colleagues, we strive to
                deliver a premium travel experience every time.

              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Verified Drivers",
                  "Premium Vehicles",
                  "Transparent Pricing",
                  "24×7 Support",
                ].map((point) => (

                  <div
                    key={point}
                    className="flex items-center gap-3"
                  >

                    <Star
                      className="text-yellow-500"
                      size={18}
                    />

                    <span className="font-medium text-slate-700">

                      {point}

                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* CTA */}

            <div className="rounded-3xl bg-gradient-to-br from-blue-900 to-blue-600 p-10 text-center text-white">

              <Users
                className="mx-auto text-yellow-400"
                size={60}
              />

              <h3 className="mt-6 text-3xl font-bold">

                Ready For Your Next Journey?

              </h3>

              <p className="mt-4 leading-8 text-blue-100">

                Book your outstation cab today and enjoy a safe,
                comfortable and affordable road trip with Kuldeep Travels.

              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-slate-900 transition hover:bg-yellow-500"
              >

                Book Your Cab

                <ArrowRight size={18} />

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
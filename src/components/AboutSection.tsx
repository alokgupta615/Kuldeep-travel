import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Users,
  Car,
  MapPinned,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

const highlights = [
  "Verified & Professional Drivers",
  "Well-Maintained Premium Vehicles",
  "Transparent Fixed Pricing",
  "24×7 Customer Support",
];

const stats = [
  {
    icon: CalendarDays,
    value: "14+",
    label: "Years Experience",
  },
  {
    icon: Users,
    value: "51K+",
    label: "Happy Customers",
  },
  {
    icon: Car,
    value: "500+",
    label: "Trips Every Month",
  },
  {
    icon: MapPinned,
    value: "100+",
    label: "Destinations Covered",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-slate-50 py-10 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left Image */}

          <div className="relative">
            <Image
              src="/images/home/about.png"
              alt="Kuldeep Travels"
              width={650}
              height={650}
              className="h-56 w-full rounded-2xl object-cover shadow-xl sm:h-80 lg:h-[620px] text-slate-900"
            />

            {/* Floating Card */}

            <div className="absolute bottom-3 left-3 rounded-xl bg-white p-3 shadow-lg sm:bottom-6 sm:left-6 sm:rounded-2xl sm:p-6">
              <h3 className="text-lg font-bold text-blue-700 sm:text-3xl">
                Since 2012
              </h3>

              <p className="mt-1 text-xs text-gray-600 sm:text-base">
                Trusted Travel Partner
              </p>
            </div>
          </div>

          {/* Right Content */}

          <div>
            <span className="text-xs font-semibold uppercase tracking-[3px] text-blue-600 sm:text-sm">
              About Kuldeep Travels
            </span>

            <h2 className="mt-3 text-2xl font-bold leading-tight text-gray-900 sm:mt-4 sm:text-4xl lg:text-5xl">
              Your Trusted Travel Partner
              <br />
              <span className="text-blue-700">in Lucknow</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
              Since 2012, Kuldeep Travels has been providing reliable taxi
              services, airport transfers, outstation cabs, corporate travel,
              and customized tour packages across Lucknow and North India.
            </p>

            <p className="mt-3 text-sm leading-7 text-gray-600 sm:mt-4 sm:text-lg sm:leading-8">
              Our mission is simple—to provide every customer with a safe,
              comfortable, and hassle-free travel experience backed by
              professional drivers, clean vehicles, and transparent pricing.
            </p>

            {/* Features */}

            <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-5">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 rounded-xl bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-4"
                >
                  <CheckCircle
                    className="mt-0.5 shrink-0 text-green-600"
                    size={18}
                  />

                  <span className="text-sm font-medium text-gray-700 sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}

            <Link
              href="/about"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-800 hover:shadow-lg sm:mt-10 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              Learn More
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Stats */}

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-6 lg:mt-20 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-xl bg-white p-4 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-2xl sm:p-8"
              >
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 sm:mb-5 sm:h-16 sm:w-16">
                  <Icon className="h-5 w-5 text-blue-700 sm:h-8 sm:w-8" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
                  {stat.value}
                </h3>

                <p className="mt-1 text-xs leading-5 text-gray-600 sm:mt-2 sm:text-base">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

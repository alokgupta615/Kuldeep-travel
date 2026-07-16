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
    value: "10K+",
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
    <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Grid */}

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left Image */}

          <div className="relative">

            <Image
              src="/images/about.jpg"
              alt="Kuldeep Travels"
              width={650}
              height={650}
              className="h-[320px] w-full rounded-3xl object-cover shadow-2xl sm:h-[450px] lg:h-[620px]"
            />

            {/* Floating Card */}

            <div className="absolute bottom-4 left-4 rounded-2xl bg-white p-4 shadow-xl sm:bottom-6 sm:left-6 sm:p-6">

              <h3 className="text-2xl font-bold text-blue-700 sm:text-3xl">
                Since 2012
              </h3>

              <p className="mt-1 text-sm text-gray-600 sm:text-base">
                Trusted Travel Partner
              </p>

            </div>

          </div>

          {/* Right Content */}

          <div>

            <span className="text-sm font-semibold uppercase tracking-[3px] text-blue-600">
              About Kuldeep Travels
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">

              Your Trusted Travel Partner
              <br />

              <span className="text-blue-700">
                in Lucknow
              </span>

            </h2>

            <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">

              Since 2012, Kuldeep Travels has been providing reliable taxi
              services, airport transfers, outstation cabs, corporate travel,
              and customized tour packages across Lucknow and North India.

            </p>

            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">

              Our mission is simple—to provide every customer with a safe,
              comfortable, and hassle-free travel experience backed by
              professional drivers, clean vehicles, and transparent pricing.

            </p>

            {/* Features */}

            <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5">

              {highlights.map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >

                  <CheckCircle
                    className="mt-0.5 shrink-0 text-green-600"
                    size={22}
                  />

                  <span className="font-medium text-gray-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            {/* Button */}

            <Link
              href="/about"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-800 hover:shadow-lg sm:mt-10 sm:w-auto"
            >

              Learn More

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>

        {/* Stats */}

        <div className="mt-14 grid grid-cols-2 gap-4 sm:mt-16 sm:gap-6 lg:mt-20 lg:grid-cols-4 lg:gap-8">

          {stats.map((stat) => {

            const Icon = stat.icon;

            return (

              <div
                key={stat.label}
                className="rounded-2xl bg-white p-5 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8"
              >

                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 sm:mb-5 sm:h-16 sm:w-16">

                  <Icon
                    className="text-blue-700"
                    size={28}
                  />

                </div>

                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
                  {stat.value}
                </h3>

                <p className="mt-2 text-sm text-gray-600 sm:text-base">
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
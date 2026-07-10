import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Users,
  Car,
  MapPinned,
  CalendarDays,
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
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}

          <div className="relative">

            <Image
              src="/images/about.jpg"
              alt="Kuldeep Travels"
              width={650}
              height={650}
              className="rounded-3xl shadow-2xl object-cover"
            />

            <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl p-6">

              <p className="text-blue-700 font-bold text-3xl">
                Since 2012
              </p>

              <p className="text-gray-600">
                Trusted Travel Partner
              </p>

            </div>

          </div>

          {/* Right Content */}

          <div>

            <span className="text-blue-600 uppercase font-semibold tracking-widest">
              About Kuldeep Travels
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">

              Your Trusted Travel Partner in Lucknow

            </h2>

            <p className="mt-6 text-gray-600 leading-8 text-lg">

              Since 2012, Kuldeep Travels has been providing reliable taxi
              services, airport transfers, outstation cabs, corporate travel,
              and customized tour packages across Lucknow and North India.

              Our mission is simple—to provide every customer with a safe,
              comfortable, and hassle-free travel experience backed by
              professional drivers, clean vehicles, and transparent pricing.

            </p>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-5 mt-8">

              {highlights.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3"
                >

                  <CheckCircle
                    className="text-green-600"
                    size={22}
                  />

                  <span className="text-gray-700 font-medium">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            <Link
              href="/about"
              className="inline-block mt-10 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Learn More
            </Link>

          </div>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {stats.map((stat, index) => {

            const Icon = stat.icon;

            return (

              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md text-center hover:shadow-xl transition"
              >

                <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-5">

                  <Icon
                    className="text-blue-700"
                    size={30}
                  />

                </div>

                <h3 className="text-4xl font-bold text-gray-900">
                  {stat.value}
                </h3>

                <p className="text-gray-600 mt-2">
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
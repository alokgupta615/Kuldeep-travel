import {
  ShieldCheck,
  BadgeCheck,
  Users,
  Headphones,
  Star,
  CarTaxiFront,
} from "lucide-react";

const features = [
  {
    title: "10+ Years Experience",
    description:
      "Providing trusted taxi services with thousands of satisfied customers.",
    icon: Star,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Verified Drivers",
    description:
      "Professional, experienced, and background-verified drivers.",
    icon: BadgeCheck,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "15,000+ Happy Customers",
    description:
      "Thousands of successful trips completed across multiple cities.",
    icon: Users,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Safe & Sanitized Vehicles",
    description:
      "Clean, comfortable, and regularly maintained vehicles for every ride.",
    icon: CarTaxiFront,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Secure Booking",
    description:
      "Your booking details are protected and securely stored.",
    icon: ShieldCheck,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "24×7 Customer Support",
    description:
      "Our support team is available anytime to assist with your booking.",
    icon: Headphones,
    color: "bg-cyan-100 text-cyan-600",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-14 max-w-3xl text-center">

          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            Why Choose Kuldeep Travels
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            Trusted by Thousands of Travelers
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            We are committed to providing reliable, affordable, and comfortable
            taxi services with professional drivers and well-maintained vehicles.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`mb-6 inline-flex rounded-2xl p-4 ${feature.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>

                <div className="mt-8 h-1 w-12 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-3xl bg-slate-900 px-8 py-12 text-center text-white">

          <h3 className="text-3xl font-bold">
            Ready to Start Your Journey?
          </h3>

          <p className="mt-4 text-slate-300">
            Book your taxi today and enjoy a safe, comfortable, and hassle-free
            travel experience with Kuldeep Travels.
          </p>

          <a
            href="#booking-form"
            className="mt-8 inline-flex rounded-xl bg-yellow-400 px-8 py-4 font-bold text-slate-900 transition hover:bg-yellow-300"
          >
            Book Your Taxi Now
          </a>

        </div>

      </div>
    </section>
  );
}
import {
  BadgeCheck,
  Wallet,
  Clock3,
  ShieldCheck,
  Car,
  Headphones,
  Languages,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Fixed Pricing",
    description:
      "No hidden charges or surge pricing. Know your fare before you travel.",
  },
  {
    icon: BadgeCheck,
    title: "Pay After Service",
    description: "Pay only after your trip is completed and you're satisfied.",
  },
  {
    icon: Clock3,
    title: "On-Time Pickup",
    description:
      "We value your time with punctual pickups and timely drop-offs.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Drivers",
    description:
      "Professional, background-verified, experienced, and courteous drivers.",
  },
  {
    icon: Car,
    title: "Clean Vehicles",
    description:
      "Well-maintained, sanitized, air-conditioned, and comfortable cars.",
  },
  {
    icon: Languages,
    title: "English Drivers",
    description:
      "English-speaking drivers available on request for tourists and business travelers.",
  },
  {
    icon: Users,
    title: "Family Friendly",
    description:
      "Safe travel solutions for families, senior citizens, and children.",
  },
  {
    icon: Headphones,
    title: "24×7 Support",
    description:
      "Our support team is always available to help before and during your journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Why Thousands Trust Kuldeep Travels
          </h2>

          <p className="mt-4 text-sm md:text-lg leading-7 md:leading-8 text-gray-600">
            We combine reliable service, experienced drivers, transparent
            pricing, and well-maintained vehicles to make every journey safe,
            comfortable, and stress-free.
          </p>
        </div>

        {/* Feature Cards */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="rounded-2xl border border-gray-100 bg-white p-5 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-blue-100">
                  <Icon className="h-6 w-6 md:h-8 md:w-8 text-blue-700" />
                </div>

                <h3 className="mb-2 text-lg md:text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="text-sm md:text-base leading-6 md:leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}

        <div className="mt-14 md:mt-20 rounded-2xl md:rounded-3xl bg-gradient-to-r from-blue-700 to-blue-900 p-6 md:p-10 text-white">
          <div className="grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-4 text-center">
            <div>
              <h3 className="text-2xl md:text-4xl font-bold">14+</h3>
              <p className="mt-1 md:mt-2 text-xs md:text-base text-blue-100">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-4xl font-bold">10K+</h3>
              <p className="mt-1 md:mt-2 text-xs md:text-base text-blue-100">
                Happy Customers
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-4xl font-bold">100%</h3>
              <p className="mt-1 md:mt-2 text-xs md:text-base text-blue-100">
                Verified Drivers
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-4xl font-bold">24×7</h3>
              <p className="mt-1 md:mt-2 text-xs md:text-base text-blue-100">
                Customer Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

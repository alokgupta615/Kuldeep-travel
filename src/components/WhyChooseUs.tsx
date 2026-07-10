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
    description:
      "Pay only after your trip is completed and you're satisfied.",
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
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Why Choose Us
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Why Thousands Trust Kuldeep Travels
          </h2>

          <p className="text-gray-600 mt-5 text-lg leading-8">
            We combine reliable service, experienced drivers, transparent
            pricing, and well-maintained vehicles to make every journey safe,
            comfortable, and stress-free.
          </p>
        </div>

        {/* Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Icon size={30} className="text-blue-700" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}

        <div className="mt-20 bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl p-10 text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold">14+</h3>
              <p className="mt-2 text-blue-100">Years Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">10K+</h3>
              <p className="mt-2 text-blue-100">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">100%</h3>
              <p className="mt-2 text-blue-100">Verified Drivers</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">24×7</h3>
              <p className="mt-2 text-blue-100">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
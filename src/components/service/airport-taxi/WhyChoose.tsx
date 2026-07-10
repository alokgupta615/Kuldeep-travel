import {
  Clock3,
  IndianRupee,
  CarFront,
  ShieldCheck,
  Users,
  Headset,
} from "lucide-react";

const features = [
  {
    icon: Clock3,
    title: "On-Time Airport Transfers",
    description:
      "We carefully schedule every pickup and drop to help you reach the airport on time.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    description:
      "Know your estimated fare before your trip with no hidden charges.",
  },
  {
    icon: Users,
    title: "Professional Drivers",
    description:
      "Experienced, courteous and verified drivers for a safe journey.",
  },
  {
    icon: CarFront,
    title: "Clean Vehicles",
    description:
      "Travel in regularly maintained and sanitized vehicles.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Since 2012",
    description:
      "Serving individuals, families, tourists and businesses across Lucknow.",
  },
  {
    icon: Headset,
    title: "24×7 Customer Support",
    description:
      "Our team is always available to assist before, during and after your trip.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Kuldeep Travels?
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            We focus on providing dependable airport transportation with
            professional service, comfortable vehicles and transparent pricing.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl border p-8 shadow-sm hover:shadow-xl transition"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <Icon
                    className="text-blue-700"
                    size={30}
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
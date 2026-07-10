import {
  ShieldCheck,
  Sparkles,
  UserCheck,
  Snowflake,
  Briefcase,
  CarFront,
} from "lucide-react";

const safetyFeatures = [
  {
    icon: ShieldCheck,
    title: "Regularly Maintained Vehicles",
    description:
      "Our vehicles undergo regular inspections and maintenance for a dependable travel experience.",
  },
  {
    icon: Sparkles,
    title: "Clean Interiors",
    description:
      "Every cab is cleaned and sanitized regularly for a pleasant journey.",
  },
  {
    icon: UserCheck,
    title: "Professional Drivers",
    description:
      "Experienced, courteous and verified drivers committed to safe driving.",
  },
  {
    icon: Snowflake,
    title: "Air-Conditioned Vehicles",
    description:
      "Travel comfortably throughout the year with well-maintained AC vehicles.",
  },
  {
    icon: Briefcase,
    title: "Luggage Assistance",
    description:
      "Our drivers assist you with your luggage during pickup and drop.",
  },
  {
    icon: CarFront,
    title: "Comfortable Long-Distance Travel",
    description:
      "Enjoy smooth rides whether you're travelling within Lucknow or outstation.",
  },
];

export default function SafetySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 style={{ color: "#111827" }}
  className="text-4xl font-bold">
            Safety & Comfort Come First
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            We focus on providing a safe, clean and comfortable journey
            for every customer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {safetyFeatures.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 border hover:shadow-lg transition"
              >
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                  <Icon className="text-blue-700" size={28} />
                </div>

                <h3 style={{ color: "#111827" }}
  className="mt-6 text-xl font-bold">
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
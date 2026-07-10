import {
  Briefcase,
  Users,
  User,
  GraduationCap,
  HeartHandshake,
  Camera,
} from "lucide-react";

const travellers = [
  {
    icon: Briefcase,
    title: "Business Travellers",
    description:
      "Reliable airport transfers for meetings, conferences and corporate travel.",
  },
  {
    icon: Users,
    title: "Families",
    description:
      "Comfortable vehicles with enough space for family members and luggage.",
  },
  {
    icon: User,
    title: "Solo Travellers",
    description:
      "Safe and dependable airport rides for individual travellers.",
  },
  {
    icon: GraduationCap,
    title: "Students",
    description:
      "Affordable airport transportation for university and college students.",
  },
  {
    icon: HeartHandshake,
    title: "Senior Citizens",
    description:
      "Comfortable travel with courteous drivers and luggage assistance.",
  },
  {
    icon: Camera,
    title: "Tourists",
    description:
      "Convenient airport pickups and drops for visitors exploring Lucknow.",
  },
];

export default function TravellerTypes() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Perfect for Every Traveller
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            Our airport taxi service is designed for different travel
            needs with comfortable vehicles and professional drivers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {travellers.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl border p-8 shadow-sm hover:shadow-xl transition"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <Icon className="text-blue-700" size={30} />
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

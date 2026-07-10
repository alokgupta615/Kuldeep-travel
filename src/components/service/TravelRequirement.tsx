import {
  Plane,
  Briefcase,
  Users,
  HeartPulse,
  ShoppingBag,
  GraduationCap,
  Camera,
  CarFront,
  MapPinned,
  Church,
} from "lucide-react";

const requirements = [
  {
    icon: Plane,
    title: "Airport Transfers",
  },
  {
    icon: Briefcase,
    title: "Office Commute",
  },
  {
    icon: Users,
    title: "Business Meetings",
  },
  {
    icon: Church,
    title: "Wedding Transportation",
  },
  {
    icon: HeartPulse,
    title: "Hospital Visits",
  },
  {
    icon: ShoppingBag,
    title: "Shopping Trips",
  },
  {
    icon: GraduationCap,
    title: "Student Travel",
  },
  {
    icon: Camera,
    title: "Tourist Sightseeing",
  },
  {
    icon: CarFront,
    title: "Family Outings",
  },
  {
    icon: MapPinned,
    title: "Outstation Tours",
  },
];

export default function TravelRequirement() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 style={{ color: "#111827" }}
  className="text-4xl font-bold">
            Perfect for Every Travel Requirement
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            Our cab service is designed to meet a wide range of travel
            needs with professional drivers and comfortable vehicles.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {requirements.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-xl border p-6 text-center hover:shadow-lg transition"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                  <Icon className="text-blue-700" size={28} />
                </div>

                <h3 style={{ color: "#111827" }}
  className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
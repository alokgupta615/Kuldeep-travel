import {
  MapPin,
  Clock3,
  Users,
  CarFront,
  IndianRupee,
  CalendarCheck,
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Doorstep Pickup",
  },
  {
    icon: Clock3,
    title: "24×7 Availability",
  },
  {
    icon: Users,
    title: "Professional Drivers",
  },
  {
    icon: CarFront,
    title: "Clean Vehicles",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
  },
  {
    icon: CalendarCheck,
    title: "Advance Booking",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="text-4xl font-bold text-gray-900">
            What's Included With Every Airport Booking
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            Every airport booking includes reliable service,
            comfortable vehicles and professional assistance
            throughout your journey.
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
                    size={30}
                    className="text-blue-700"
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  Enjoy dependable airport transportation backed by
                  transparent pricing, clean vehicles and experienced
                  drivers.
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
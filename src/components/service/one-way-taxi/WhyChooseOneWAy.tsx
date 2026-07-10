import {
  IndianRupee,
  Clock3,
  MapPinned,
  CarFront,
  Route,
} from "lucide-react";

const features = [
  {
    icon: IndianRupee,
    title: "Pay Only for One Side",
    text: "Avoid paying unnecessary return charges.",
  },
  {
    icon: Clock3,
    title: "Travel Your Schedule",
    text: "Choose your preferred pickup time.",
  },
  {
    icon: MapPinned,
    title: "Doorstep Pickup",
    text: "Pickup and drop from your preferred location.",
  },
  {
    icon: CarFront,
    title: "Comfortable Ride",
    text: "Travel in clean AC private vehicles.",
  },
  {
    icon: Route,
    title: "Short & Long Routes",
    text: "Suitable for nearby cities and long-distance travel.",
  },
];

export default function WhyChooseOneWay() {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Travellers Choose One Way Cabs
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow p-6 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 mx-auto flex items-center justify-center">
                  <Icon className="text-blue-700" size={28} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {item.text}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
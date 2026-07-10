import {
  IndianRupee,
  Users,
  CarFront,
  Clock3,
  Car,
  Headset,
} from "lucide-react";

const features = [
  {
    icon: IndianRupee,
    title: "Fixed Pricing",
    description:
      "Know your fare before your journey begins with transparent pricing and no hidden charges.",
  },
  {
    icon: Users,
    title: "Experienced Drivers",
    description:
      "Our courteous and verified drivers know Lucknow city roads and major highways.",
  },
  {
    icon: CarFront,
    title: "Comfortable Vehicles",
    description:
      "Travel in clean, air-conditioned and well-maintained vehicles for every trip.",
  },
  {
    icon: Clock3,
    title: "On-Time Pickup",
    description:
      "We value your time and ensure timely pickups for airport, local and outstation rides.",
  },
  {
    icon: Car,
    title: "Multiple Vehicle Options",
    description:
      "Choose from Sedan, SUV, Innova, Tempo Traveller and premium vehicles.",
  },
  {
    icon: Headset,
    title: "Customer Support",
    description:
      "Our booking team is available before, during and after your journey.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Kuldeep Travels?
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            Finding a taxi is easy. Finding one that arrives on time,
            offers clean vehicles and dependable service every time
            is what makes the difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-xl transition"
              >
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                  <Icon className="text-blue-700" size={28} />
                </div>

                <h3 style={{ color: "#111827" }}
  className="mt-6 text-xl font-bold"
className="mt-6 text-2xl font-bold !text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
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
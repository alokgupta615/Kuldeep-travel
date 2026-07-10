import { CheckCircle2 } from "lucide-react";

const promises = [
  "Transparent Pricing",
  "No Hidden Charges",
  "Driver Details Shared Before Pickup",
  "Clean Vehicles",
  "Verified Drivers",
  "On-Time Pickup",
  "Friendly Customer Support",
  "Journey Assistance",
];

export default function BookingPromise() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">

          <h2 style={{ color: "#111827" }}
  className="text-4xl font-bold">
            Our Booking Promise
          </h2>

          <p className="text-gray-600 mt-5">
            When you book with Kuldeep Travels,
            you always know what to expect.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

          {promises.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 bg-gray-50 rounded-xl p-5 border"
            >
              <CheckCircle2
                className="text-green-600 flex-shrink-0"
                size={22}
              />

              <span className="font-medium text-gray-900">
                {item}
              </span>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
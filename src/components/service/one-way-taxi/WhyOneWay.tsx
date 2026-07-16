import {
  ArrowRightLeft,
  Wallet,
  Clock3,
  MapPinned,
  Car,
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Pay Only for Your Journey",
    description:
      "Avoid unnecessary return-trip charges. Pay only for the distance you actually travel.",
  },
  {
    icon: Clock3,
    title: "Travel on Your Schedule",
    description:
      "Choose your preferred pickup time instead of adjusting your plans around bus or train schedules.",
  },
  {
    icon: MapPinned,
    title: "Doorstep Pickup & Drop",
    description:
      "Get picked up from your home, office, hotel, railway station, or airport and dropped directly at your destination.",
  },
  {
    icon: Car,
    title: "Private & Comfortable Ride",
    description:
      "Enjoy a clean, air-conditioned cab with complete privacy for a relaxed intercity journey.",
  },
];

export default function WhyOneWay() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            <ArrowRightLeft className="mr-2 h-4 w-4" />
            Travel Smarter
          </div>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Why Pay for a Return Trip
            <span className="block text-blue-700">
              You Don't Need?
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Not every journey requires you to return to your starting point.
            If you're travelling only one way, paying round-trip charges simply
            doesn't make sense.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Kuldeep Travels offers affordable one-way cab services from
            Lucknow, allowing you to enjoy comfortable door-to-door travel,
            flexible pickup timings, experienced drivers, and transparent
            pricing while paying only for the journey you actually take.
          </p>
        </div>

        {/* Feature Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
              >
                <div className="inline-flex rounded-2xl bg-blue-100 p-4 transition group-hover:bg-blue-700">
                  <Icon className="h-8 w-8 text-blue-700 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

        {/* Bottom Highlight */}

        <div className="mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 p-10 text-white">

          <div className="grid items-center gap-8 lg:grid-cols-2">

            <div>
              <h3 className="text-3xl font-bold">
                Travel Comfortably Across Cities
              </h3>

              <p className="mt-5 text-lg leading-8 text-blue-100">
                Whether you're travelling for a business meeting, family
                function, religious trip, weekend getaway, or personal work,
                our one-way cab service gives you the freedom to travel
                comfortably without paying for an unnecessary return journey.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                <h4 className="text-3xl font-bold text-yellow-400">
                  100%
                </h4>
                <p className="mt-2 text-blue-100">
                  Transparent Pricing
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                <h4 className="text-3xl font-bold text-yellow-400">
                  24×7
                </h4>
                <p className="mt-2 text-blue-100">
                  Booking Support
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                <h4 className="text-3xl font-bold text-yellow-400">
                  Doorstep
                </h4>
                <p className="mt-2 text-blue-100">
                  Pickup & Drop
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                <h4 className="text-3xl font-bold text-yellow-400">
                  Safe
                </h4>
                <p className="mt-2 text-blue-100">
                  Professional Drivers
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
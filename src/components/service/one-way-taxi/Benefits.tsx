import {
  Wallet,
  Clock3,
  Home,
  CarFront,
  Route,
} from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "Pay Only for One Side of the Journey",
    description:
      "A one-way cab is the perfect option when you don't plan to return immediately. Instead of paying for a vehicle to travel back empty, you pay only for your planned journey, making intercity travel far more economical.",
  },
  {
    icon: Clock3,
    title: "Travel on Your Own Schedule",
    description:
      "Forget fixed bus and train timings. Choose the pickup time that suits your plans, and our driver will arrive on time so you can begin your journey comfortably.",
  },
  {
    icon: Home,
    title: "Doorstep Pickup & Drop",
    description:
      "We'll pick you up directly from your home, office, hotel, airport, or railway station in Lucknow and drop you safely at your destination without unnecessary transfers.",
  },
  {
    icon: CarFront,
    title: "Comfortable Private Ride",
    description:
      "Travel in a clean, air-conditioned cab with complete privacy. Whether you're travelling alone, with family, or colleagues, enjoy a peaceful journey from start to finish.",
  },
  {
    icon: Route,
    title: "Ideal for Short & Long-Distance Travel",
    description:
      "Whether your destination is a nearby city or several hundred kilometres away, we provide the right vehicle and experienced drivers for a smooth intercity journey.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            One Way Cab Benefits
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Why Travellers Choose
            <span className="block text-blue-700">
              One Way Cabs
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            A one-way cab is designed for travellers who value comfort,
            flexibility, and cost-effective transportation. Pay only for the
            distance you travel while enjoying a private ride with professional
            drivers and doorstep convenience.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
              >
                <div className="inline-flex rounded-2xl bg-blue-100 p-4 transition-all duration-300 group-hover:bg-blue-700">
                  <Icon className="h-8 w-8 text-blue-700 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {benefit.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}

        </div>

        {/* Bottom Banner */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 p-10 text-center text-white">

          <h3 className="text-3xl font-bold">
            Private Intercity Travel Made Simple
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Whether you're travelling for work, a family function, a religious
            visit, or a weekend getaway, Kuldeep Travels provides dependable
            one-way taxi services with transparent pricing, experienced drivers,
            and well-maintained vehicles.
          </p>

        </div>

      </div>
    </section>
  );
}
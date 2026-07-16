import Image from "next/image";
import {
  Clock3,
  MapPinned,
  Users,
  Coffee,
  CarFront,
} from "lucide-react";

const features = [
  {
    icon: Clock3,
    title: "Travel According to Your Schedule",
    description:
      "Leave whenever it suits you without depending on train or bus timings.",
  },
  {
    icon: MapPinned,
    title: "Doorstep Pickup",
    description:
      "Get picked up from your home, office, hotel, airport or railway station.",
  },
  {
    icon: Users,
    title: "Travel Together",
    description:
      "Enjoy the journey with family, friends or colleagues in one comfortable vehicle.",
  },
  {
    icon: Coffee,
    title: "Freedom to Stop",
    description:
      "Take breaks whenever you want for meals, sightseeing or refreshments.",
  },
];

export default function JourneyIntro() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Image */}

          <div className="relative">

            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-yellow-400/20 blur-3xl" />

            <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="overflow-hidden rounded-3xl shadow-2xl">

              <Image
                src="/images/outstation/outstation-trip.jpg"
                alt="Outstation Cab Service"
                width={700}
                height={650}
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

            <div className="absolute bottom-8 left-8 rounded-2xl bg-white p-6 shadow-xl">

              <div className="flex items-center gap-3">

                <CarFront className="h-10 w-10 text-blue-600" />

                <div>

                  <h4 className="text-3xl font-bold text-slate-900">
                    10K+
                  </h4>

                  <p className="text-slate-500">
                    Happy Travellers
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right Content */}

          <div>

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

              Every Great Journey Starts with the Right Ride

            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">

              Comfortable Outstation Travel

              <span className="block text-blue-700">

                Beyond Lucknow

              </span>

            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">

              Travelling to another city should be enjoyable from the moment
              you leave your doorstep. Whether you're planning a religious
              journey, a business trip, a family vacation or a weekend
              getaway, Kuldeep Travels offers reliable outstation cab services
              with experienced drivers and comfortable vehicles.

            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">

              Unlike public transport, a private cab gives you complete
              flexibility. Choose your departure time, stop whenever you wish
              and travel comfortably with your family, friends or colleagues.

            </p>

            {/* Feature Grid */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-white hover:shadow-xl"
                  >

                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white">

                      <Icon className="h-7 w-7" />

                    </div>

                    <h3 className="mt-5 text-lg font-bold text-slate-900">

                      {item.title}

                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">

                      {item.description}

                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
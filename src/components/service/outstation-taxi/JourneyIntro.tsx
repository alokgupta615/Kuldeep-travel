import Image from "next/image";
import { Clock3, MapPinned, Users, Coffee, CarFront } from "lucide-react";

const features = [
  {
    icon: Clock3,
    title: "Travel on Your Schedule",
    description:
      "Leave whenever it suits you without depending on train or bus timings.",
  },
  {
    icon: MapPinned,
    title: "Doorstep Pickup",
    description:
      "Pickup from your home, office, hotel, airport or railway station.",
  },
  {
    icon: Users,
    title: "Travel Together",
    description: "Comfortably travel with your family, friends or colleagues.",
  },
  {
    icon: Coffee,
    title: "Freedom to Stop",
    description:
      "Take breaks for food, sightseeing or refreshments whenever you wish.",
  },
];

export default function JourneyIntro() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Image */}

          <div className="relative order-1 lg:order-none">
            {/* Background Glow */}

            <div className="absolute -left-6 top-8 h-24 w-24 rounded-full bg-yellow-400/20 blur-3xl" />

            <div className="absolute -right-6 bottom-8 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />

            {/* Image */}

            <div className="overflow-hidden rounded-3xl shadow-[0_25px_60px_rgba(15,23,42,0.15)]">
              <Image
                src="/images/outstation/outstationimg.png"
                alt="Outstation Cab Service"
                width={700}
                height={650}
                className="h-[270px] w-full object-cover transition duration-700 hover:scale-105 md:h-[520px]"
              />
            </div>

            {/* Floating Badge */}

            <div className="absolute -bottom-5 left-5 rounded-2xl bg-white px-5 py-4 shadow-2xl md:bottom-8 md:left-8 md:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                  <CarFront className="h-6 w-6 text-blue-700" />
                </div>

                <div>
                  <h4 className="text-2xl font-black text-slate-900">10K+</h4>

                  <p className="text-sm text-slate-500">Happy Travellers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}

          <div className="order-2">
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700 md:px-5 md:text-sm">
              Every Great Journey Starts with the Right Ride
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900 md:text-5xl">
              Comfortable Outstation Travel
              <span className="block text-blue-700">Beyond Lucknow</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              Travelling to another city should be enjoyable from the moment you
              leave your doorstep. Whether you're planning a religious journey,
              business trip, family vacation or weekend getaway, Kuldeep Travels
              offers reliable outstation cab services with experienced drivers
              and comfortable vehicles.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              Unlike public transport, a private cab gives you complete
              flexibility. Choose your departure time, stop whenever you wish
              and travel comfortably with your family, friends or colleagues.
            </p>

            {/* Features */}

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:shadow-xl"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white transition group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Stats */}

            <div className="mt-10 flex flex-wrap gap-6 border-t border-slate-200 pt-8">
              <div>
                <h4 className="text-2xl font-black text-blue-700">12+</h4>
                <p className="text-sm text-slate-500">Years Experience</p>
              </div>

              <div>
                <h4 className="text-2xl font-black text-blue-700">10K+</h4>
                <p className="text-sm text-slate-500">Trips Completed</p>
              </div>

              <div>
                <h4 className="text-2xl font-black text-blue-700">24×7</h4>
                <p className="text-sm text-slate-500">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

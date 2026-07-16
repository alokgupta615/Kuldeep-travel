import {
  Clock3,
  MapPinned,
  CarFront,
  Users,
  Coffee,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Clock3,
    title: "Travel According to Your Schedule",
    description:
      "Skip fixed departure times and crowded stations. Leave whenever it suits your travel plans and enjoy complete flexibility.",
  },
  {
    icon: MapPinned,
    title: "Doorstep Pickup",
    description:
      "Start your journey from your home, hotel, office, airport or railway station anywhere in Lucknow.",
  },
  {
    icon: CarFront,
    title: "Comfortable Long-Distance Travel",
    description:
      "Travel in clean, air-conditioned vehicles designed to make long road trips relaxing and enjoyable.",
  },
  {
    icon: Users,
    title: "Travel Together",
    description:
      "Stay together with family, friends or colleagues throughout the journey without changing vehicles.",
  },
  {
    icon: Coffee,
    title: "Freedom to Stop Anytime",
    description:
      "Take breaks for meals, tea, sightseeing or photographs whenever you like during your trip.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Reliable Journey",
    description:
      "Experienced drivers and well-maintained vehicles ensure a dependable travel experience every time.",
  },
];

export default function WhyChooseOutstation() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Why Choose an Outstation Cab?
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 lg:text-5xl">
            Travel Beyond Lucknow
            <span className="block text-blue-700">
              With Comfort & Freedom
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Unlike trains or buses, a private outstation cab lets you travel on
            your own schedule with complete comfort, flexibility and privacy.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
              >
                {/* Icon */}

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white transition group-hover:bg-yellow-400 group-hover:text-slate-900">
                  <Icon size={30} />
                </div>

                {/* Title */}

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                {/* Description */}

                <p className="mt-4 leading-8 text-slate-600">
                  {feature.description}
                </p>

                {/* Divider */}

                <div className="mt-8 h-1 w-16 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}

        <div className="mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 p-10 text-white shadow-2xl">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-3xl font-bold">
                Travel at Your Own Pace
              </h3>

              <p className="mt-4 text-lg leading-8 text-blue-100">
                Stop for sightseeing, meals, shopping or simply to enjoy the
                view. A private outstation cab gives you the freedom that public
                transport simply can't offer.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-lg">
                <h4 className="text-4xl font-black text-yellow-400">
                  24×7
                </h4>

                <p className="mt-2 text-blue-100">
                  Booking Support
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-lg">
                <h4 className="text-4xl font-black text-yellow-400">
                  100%
                </h4>

                <p className="mt-2 text-blue-100">
                  Transparent Pricing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
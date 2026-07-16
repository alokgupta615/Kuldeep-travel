import {
  Route,
  Coffee,
  Camera,
  Mountain,
  Clock3,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    icon: Route,
    title: "Travel Your Own Route",
    description:
      "Choose the roads, destinations and stops that suit your travel plans instead of fixed public transport routes.",
  },
  {
    icon: Coffee,
    title: "Take Breaks Anytime",
    description:
      "Pause for meals, refreshments, shopping or rest whenever you need without worrying about schedules.",
  },
  {
    icon: Camera,
    title: "Explore Hidden Places",
    description:
      "Stop at scenic viewpoints, local attractions and photography spots along your journey.",
  },
  {
    icon: Mountain,
    title: "Enjoy Every Journey",
    description:
      "Travel isn't only about reaching the destination. Relax and enjoy the road trip experience with your loved ones.",
  },
  {
    icon: Clock3,
    title: "No Time Restrictions",
    description:
      "Leave early morning, late evening or at midnight according to your convenience.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Comfortable",
    description:
      "Experienced chauffeurs and well-maintained vehicles ensure a stress-free long-distance journey.",
  },
];

export default function RoadTripBenefits() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Road Trip Benefits
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
            Why Road Trips Are
            <span className="block text-blue-700">
              More Enjoyable With Us
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A private outstation cab gives you complete flexibility, comfort
            and freedom to enjoy every kilometre of your journey.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-20">

          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-blue-200 lg:block" />

          <div className="space-y-12">

            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const reverse = index % 2 !== 0;

              return (
                <div
                  key={benefit.title}
                  className={`grid items-center gap-10 lg:grid-cols-2 ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Card */}

                  <div className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white">
                      <Icon size={30} />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-slate-900">
                      {benefit.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {benefit.description}
                    </p>

                  </div>

                  {/* Timeline Dot */}

                  <div className="hidden justify-center lg:flex">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-8 border-white bg-yellow-400 shadow-xl">
                      <span className="text-xl font-bold text-slate-900">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                </div>
              );
            })}

          </div>

        </div>

        {/* Statistics */}

        <div className="mt-24 rounded-3xl bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 p-12 text-white shadow-2xl">

          <div className="grid gap-8 text-center md:grid-cols-4">

            <div>
              <h3 className="text-5xl font-black text-yellow-400">
                10K+
              </h3>

              <p className="mt-3 text-blue-100">
                Successful Trips
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-yellow-400">
                12+
              </h3>

              <p className="mt-3 text-blue-100">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-yellow-400">
                24×7
              </h3>

              <p className="mt-3 text-blue-100">
                Customer Support
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-yellow-400">
                100%
              </h3>

              <p className="mt-3 text-blue-100">
                Transparent Pricing
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
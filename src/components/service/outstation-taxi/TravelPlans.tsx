import {
  Briefcase,
  HeartHandshake,
  Mountain,
  GraduationCap,
  Stethoscope,
  Church,
  Users,
} from "lucide-react";

const plans = [
  {
    icon: Mountain,
    title: "Weekend Getaways",
    description:
      "Escape the busy city life with comfortable cab services to nearby hill stations, heritage cities and tourist attractions.",
    color: "bg-blue-600",
  },
  {
    icon: Users,
    title: "Family Vacations",
    description:
      "Spacious vehicles with ample luggage space for enjoyable family holidays and memorable road trips.",
    color: "bg-indigo-600",
  },
  {
    icon: Church,
    title: "Religious Tours",
    description:
      "Visit Ayodhya, Varanasi, Prayagraj, Chitrakoot, Naimisharanya and other sacred destinations with experienced drivers.",
    color: "bg-yellow-500",
  },
  {
    icon: Briefcase,
    title: "Business Travel",
    description:
      "Reliable transportation for meetings, conferences, factory visits and corporate travel across North India.",
    color: "bg-slate-700",
  },
  {
    icon: HeartHandshake,
    title: "Wedding & Family Events",
    description:
      "Travel together comfortably for weddings, family functions and special occasions with premium vehicles.",
    color: "bg-pink-600",
  },
  {
    icon: GraduationCap,
    title: "Educational Trips",
    description:
      "Safe and comfortable transport for students, colleges, educational institutions and industrial visits.",
    color: "bg-green-600",
  },
  {
    icon: Stethoscope,
    title: "Medical Travel",
    description:
      "Comfortable long-distance travel for hospital visits, medical consultations and health check-ups.",
    color: "bg-red-600",
  },
];

export default function TravelPlans() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

            Travel Plans We Serve

          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">

            Every Journey Has

            <span className="block text-blue-700">

              A Different Purpose

            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">

            Whether you're travelling for business, leisure, family,
            pilgrimage or education, we provide reliable outstation
            cab services designed around your travel needs.

          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {plans.map((plan, index) => {

            const Icon = plan.icon;

            return (

              <div
                key={index}
                className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl text-white ${plan.color}`}
                >

                  <Icon size={30} />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">

                  {plan.title}

                </h3>

                <p className="mt-4 leading-8 text-slate-600">

                  {plan.description}

                </p>

                <div className="mt-8 h-1 w-14 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-full" />

              </div>

            );

          })}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 p-10 text-white">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>

              <h3 className="text-3xl font-bold">

                Planning Something Special?

              </h3>

              <p className="mt-5 text-lg leading-8 text-blue-100">

                Our travel experts can help you customize your trip,
                choose the perfect vehicle and create a travel plan
                that matches your schedule and budget.

              </p>

            </div>

            <div className="grid grid-cols-2 gap-6">

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

                <h4 className="text-4xl font-black text-yellow-400">

                  500+

                </h4>

                <p className="mt-2 text-blue-100">

                  Trips Every Month

                </p>

              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

                <h4 className="text-4xl font-black text-yellow-400">

                  24×7

                </h4>

                <p className="mt-2 text-blue-100">

                  Customer Assistance

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
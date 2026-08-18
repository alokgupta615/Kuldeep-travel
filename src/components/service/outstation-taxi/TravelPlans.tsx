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
    <section className="bg-slate-50 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700 md:px-5 md:text-sm">
            Travel Plans We Serve
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900 md:text-5xl">
            Every Journey Has
            <span className="block text-blue-700">A Different Purpose</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            Whether you're travelling for business, leisure, family, pilgrimage
            or education, we provide reliable outstation cab services designed
            around your travel needs.
          </p>
        </div>
        {/* Cards */}

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:shadow-xl"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl text-white ${plan.color}`}
                >
                  <Icon size={24} />
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {plan.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {plan.description}
                </p>

                <div className="mt-5 h-1 w-12 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-full text-slate-900" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

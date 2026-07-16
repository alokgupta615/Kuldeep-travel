import {
  BriefcaseBusiness,
  Users,
  Landmark,
  GraduationCap,
  HeartPulse,
  Plane,
} from "lucide-react";

const travelPurposes = [
  {
    icon: BriefcaseBusiness,
    title: "Business Travel",
    description:
      "Attend meetings, conferences, client visits, and official events with punctual pickup, professional drivers, and a comfortable private cab.",
  },
  {
    icon: Users,
    title: "Family Visits",
    description:
      "Whether you're attending a wedding, family gathering, or visiting relatives, travel together in a spacious and comfortable cab.",
  },
  {
    icon: Landmark,
    title: "Religious Trips",
    description:
      "Visit Ayodhya, Varanasi, Prayagraj, Chitrakoot, and other spiritual destinations with a peaceful and comfortable journey.",
  },
  {
    icon: GraduationCap,
    title: "Student Travel",
    description:
      "Perfect for students travelling between colleges, universities, coaching centres, and hometowns with luggage.",
  },
  {
    icon: HeartPulse,
    title: "Medical Travel",
    description:
      "Comfortable transportation for hospital appointments, medical consultations, treatments, and accompanying family members.",
  },
  {
    icon: Plane,
    title: "Tourism & Leisure",
    description:
      "Explore new destinations, enjoy weekend getaways, or plan memorable holidays with flexible and comfortable intercity travel.",
  },
];

export default function TravelPurpose() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            One Service for Every Journey
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Designed Around Different
            <span className="block text-blue-700">
              Travel Needs
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every traveller has a different destination and purpose. Whether
            you're travelling for work, family, education, healthcare, or
            leisure, Kuldeep Travels provides reliable one-way taxi services
            designed around your schedule and comfort.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {travelPurposes.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
              >
                <div className="inline-flex rounded-2xl bg-blue-100 p-4 transition duration-300 group-hover:bg-blue-700">
                  <Icon className="h-8 w-8 text-blue-700 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

        {/* Bottom Highlight */}

        <div className="mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700">

          <div className="grid items-center gap-10 p-10 lg:grid-cols-2">

            <div>

              <h3 className="text-3xl font-bold text-white">
                Ready for Your Next Journey?
              </h3>

              <p className="mt-5 text-lg leading-8 text-blue-100">
                No matter where you're travelling, choosing a one-way cab
                means you can focus on your destination instead of worrying
                about transportation.
              </p>

              <p className="mt-4 text-lg leading-8 text-blue-100">
                With experienced drivers, clean vehicles, transparent pricing,
                and convenient doorstep pickup, Kuldeep Travels makes every
                intercity journey comfortable and hassle-free.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-5">

              <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur">
                <h4 className="text-3xl font-bold text-yellow-400">
                  24×7
                </h4>
                <p className="mt-2 text-blue-100">
                  Booking Assistance
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur">
                <h4 className="text-3xl font-bold text-yellow-400">
                  100%
                </h4>
                <p className="mt-2 text-blue-100">
                  Private Travel
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur">
                <h4 className="text-3xl font-bold text-yellow-400">
                  Safe
                </h4>
                <p className="mt-2 text-blue-100">
                  Verified Drivers
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur">
                <h4 className="text-3xl font-bold text-yellow-400">
                  Clean
                </h4>
                <p className="mt-2 text-blue-100">
                  Well Maintained Fleet
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
import {
  Route,
  CarFront,
  CalendarDays,
  ReceiptIndianRupee,
  ListChecks,
} from "lucide-react";

const cards = [
  {
    icon: Route,
    title: "Travel Distance",
    desc: "Fare depends on pickup and destination distance.",
  },
  {
    icon: CarFront,
    title: "Vehicle Category",
    desc: "Choose Sedan, SUV, Premium or Tempo Traveller.",
  },
  {
    icon: CalendarDays,
    title: "Trip Type",
    desc: "Local, Airport, One-way, Round-trip or Full Day.",
  },
  {
    icon: ReceiptIndianRupee,
    title: "Toll & Parking",
    desc: "Applicable charges are shared in advance.",
  },
  {
    icon: ListChecks,
    title: "Special Requirements",
    desc: "Waiting time, multiple stops and custom plans.",
  },
];

export default function PricingSection() {
  return (
    <section className="py-20 bg-blue-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <h2  style={{ color: "#111827" }}
  className="text-4xl font-bold">
            Transparent Pricing Process
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            Before confirming your booking,
            we share the estimated fare so
            there are no unexpected surprises.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {cards.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
              >
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Icon className="text-yellow-600" size={28} />
                </div>

                <h3 style={{ color: "#111827" }}
  className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>

        <div className="mt-16 rounded-2xl bg-blue-900 text-white p-10 text-center">

          <h3 className="text-3xl font-bold">
            Pricing Promise
          </h3>

          <p className="mt-5 text-blue-100 max-w-3xl mx-auto leading-8">
            Before every booking, we share the complete trip details
            along with the estimated fare so you know exactly what
            you're paying for before your journey begins.
          </p>

        </div>

      </div>

    </section>
  );
}
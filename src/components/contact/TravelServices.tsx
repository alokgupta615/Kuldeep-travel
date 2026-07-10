import {
  Car,
  Plane,
  Map,
  Route,
  Bus,
  Building2,
  Briefcase,
  Users,
  Heart,
  Mountain,
  School,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Local Cab Service",
    description: "Comfortable city rides across Lucknow.",
  },
  {
    icon: Plane,
    title: "Airport Pickup & Drop",
    description: "On-time airport transfers with professional drivers.",
  },
  {
    icon: Route,
    title: "Outstation Taxi",
    description: "Reliable taxi services to nearby cities and destinations.",
  },
  {
    icon: Map,
    title: "One-Way & Round Trip",
    description: "Affordable intercity travel with flexible booking options.",
  },
  {
    icon: Bus,
    title: "Tempo Traveller",
    description: "Perfect for family vacations and group tours.",
  },
  {
    icon: Building2,
    title: "Luxury Bus Rental",
    description: "Premium coaches for large groups and events.",
  },
  {
    icon: Heart,
    title: "Family Tour Packages",
    description: "Memorable holiday experiences for every family.",
  },
  {
    icon: Mountain,
    title: "Pilgrimage Tours",
    description: "Comfortable religious and spiritual travel packages.",
  },
  {
    icon: Sparkles,
    title: "Weekend Getaways",
    description: "Short vacations to popular nearby destinations.",
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    description: "Professional transportation solutions for businesses.",
  },
  {
    icon: Users,
    title: "Wedding Transportation",
    description: "Elegant transport arrangements for wedding events.",
  },
  {
    icon: School,
    title: "School & College Tours",
    description: "Safe and organized transportation for educational trips.",
  },
];

export default function TravelServices() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center max-w-3xl mx-auto">
          <span className="font-semibold uppercase tracking-widest text-blue-600">
            Our Services
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Travel Services We Can Help You With
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Whether you're planning a local ride, airport transfer,
            outstation trip, family vacation, corporate event, or group tour,
            Kuldeep Travels has the right transportation solution.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100">
                  <Icon className="h-8 w-8 text-blue-700" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl bg-blue-900 p-10 text-center text-white">
          <h3 className="text-3xl font-bold">
            Need Help Choosing the Right Travel Service?
          </h3>

          <p className="mt-5 max-w-3xl mx-auto text-blue-100 leading-8">
            No matter the size or purpose of your journey, our team will
            recommend the most suitable vehicle and travel solution based on
            your destination, group size, and budget.
          </p>
        </div>
      </div>
    </section>
  );
}
import {
  ShieldCheck,
  CircleDollarSign,
  Clock3,
  BadgeCheck,
} from "lucide-react";

const policies = [
  {
    icon: ShieldCheck,
    title: "Free Cancellation",
    desc: "Cancel up to 6 hours before pickup without any cancellation charges.",
  },
  {
    icon: CircleDollarSign,
    title: "Transparent Pricing",
    desc: "No hidden charges. Toll, parking, and state tax are charged separately when applicable.",
  },
  {
    icon: Clock3,
    title: "Waiting Charges",
    desc: "30 minutes of complimentary waiting at airports. Additional waiting is chargeable.",
  },
  {
    icon: BadgeCheck,
    title: "Safe Travel",
    desc: "Professional drivers, sanitized vehicles, and 24×7 customer support.",
  },
];

export default function BookingPolicy() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-6">

        <div className="text-center mb-14">
          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            Booking Policies
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            Important Information
          </h2>

          <p className="mt-4 text-slate-600">
            Please read our booking policies before confirming your ride.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {policies.map((policy) => {
            const Icon = policy.icon;

            return (
              <div
                key={policy.title}
                className="rounded-3xl border p-8 shadow-sm hover:shadow-xl transition"
              >
                <div className="inline-flex rounded-2xl bg-yellow-100 p-4">
                  <Icon className="text-yellow-600" size={30} />
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {policy.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {policy.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
import {
  CalendarClock,
  Clock3,
  ShieldCheck,
  BadgeIndianRupee,
  CarTaxiFront,
  MapPinned,
} from "lucide-react";

const features = [
  {
    icon: CalendarClock,
    title: "Since 2012",
    desc: "Trusted taxi service provider.",
  },
  {
    icon: Clock3,
    title: "24×7 Support",
    desc: "Book anytime with ease.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Drivers",
    desc: "Experienced & verified.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Transparent Pricing",
    desc: "No hidden charges.",
  },
  {
    icon: CarTaxiFront,
    title: "Clean Vehicles",
    desc: "Well-maintained fleet.",
  },
  {
    icon: MapPinned,
    title: "Local & Outstation",
    desc: "Travel across North India.",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-gray-50 py-16">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-xl border p-6 text-center hover:shadow-xl transition"
              >

                <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                  <Icon className="text-blue-700" size={30} />
                </div>

                <h3 style={{ color: "#111827" }}
  className="mt-6 text-xl font-bold"
>
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
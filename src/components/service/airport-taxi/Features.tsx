import {
  MapPin,
  Clock3,
  Users,
  CarFront,
  IndianRupee,
  CalendarCheck,
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Doorstep Pickup",
    description: "Pickup directly from your home, hotel or office.",
  },
  {
    icon: Clock3,
    title: "24×7 Availability",
    description: "Airport transfers available any time, day or night.",
  },
  {
    icon: Users,
    title: "Professional Drivers",
    description: "Experienced, courteous and verified chauffeurs.",
  },
  {
    icon: CarFront,
    title: "Clean Vehicles",
    description: "Well-maintained, sanitized and comfortable cars.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    description: "No hidden charges with clear upfront fares.",
  },
  {
    icon: CalendarCheck,
    title: "Advance Booking",
    description: "Reserve your airport cab in just a few minutes.",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-5xl">
            What's Included With Every Airport Booking
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg md:leading-8">
            Every airport ride includes professional service, comfortable
            vehicles, and complete peace of mind.
          </p>
        </div>

        {/* Features */}
        <div className="mt-12 divide-y divide-gray-200 border-y border-gray-200">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group flex items-start gap-4 py-5 transition-all duration-300 hover:border-l-4 hover:border-blue-600 hover:bg-blue-50/40 md:gap-6 md:py-7"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 transition group-hover:bg-blue-600 md:h-14 md:w-14">
                  <Icon className="h-5 w-5 text-blue-700 transition group-hover:text-white md:h-7 md:w-7" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 md:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-600 md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

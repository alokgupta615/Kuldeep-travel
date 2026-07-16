import {
  Clock3,
  CarFront,
  UserCheck,
  CalendarClock,
  IndianRupee,
  Headphones,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Clock3,
    title: "Reliable Scheduling",
    description:
      "Wedding events follow strict timelines. We carefully coordinate pickup and arrival schedules so every ceremony begins on time.",
  },
  {
    icon: CarFront,
    title: "Clean & Well-Maintained Vehicles",
    description:
      "Every vehicle is professionally cleaned, sanitized and inspected before reaching your location.",
  },
  {
    icon: UserCheck,
    title: "Professional Chauffeurs",
    description:
      "Experienced, courteous and professionally dressed chauffeurs who understand the importance of punctuality during weddings.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Booking",
    description:
      "Whether you require a vehicle for a single ceremony or several wedding events, we offer flexible rental options.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    description:
      "Receive a detailed quotation before confirming your booking with no hidden charges or unexpected costs.",
  },
  {
    icon: Headphones,
    title: "Dedicated Booking Support",
    description:
      "Our team stays connected before your event to reconfirm timings, vehicle allocation and special instructions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 py-24">

      {/* Background Glow */}

      <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-yellow-400/10 blur-[120px]" />
      <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-white/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm font-semibold text-yellow-300">

            Why Couples Choose Kuldeep Travels

          </span>

          <h2 className="mt-6 text-4xl font-black text-white lg:text-5xl">

            Trusted Wedding Transportation

            <span className="block text-yellow-400">

              Designed Around Your Celebration

            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-blue-100">

            Every wedding deserves flawless planning and dependable
            transportation. Our experienced team works behind the scenes
            to ensure every journey is elegant, comfortable and perfectly
            coordinated.

          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-20">

          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-yellow-400/30 lg:block" />

          <div className="space-y-12">

            {features.map((feature, index) => {
              const Icon = feature.icon;
              const reverse = index % 2 !== 0;

              return (
                <div
                  key={feature.title}
                  className={`grid items-center gap-10 lg:grid-cols-2 ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Content */}

                  <div className="rounded-[30px] border border-white/10 bg-white/10 p-8 backdrop-blur-xl transition duration-300 hover:bg-white hover:shadow-2xl group">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-slate-900 transition group-hover:bg-blue-700 group-hover:text-white">

                      <Icon size={30} />

                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-white group-hover:text-slate-900">

                      {feature.title}

                    </h3>

                    <p className="mt-5 leading-8 text-blue-100 group-hover:text-slate-600">

                      {feature.description}

                    </p>

                  </div>

                  {/* Timeline */}

                  <div className="hidden justify-center lg:flex">

                    <div className="flex h-20 w-20 items-center justify-center rounded-full border-8 border-blue-900 bg-yellow-400 shadow-2xl">

                      <span className="text-2xl font-black text-slate-900">

                        {index + 1}

                      </span>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

        {/* Bottom Trust Section */}

        <div className="mt-24 rounded-[36px] bg-white p-12 shadow-2xl">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* Left */}

            <div>

              <span className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">

                Wedding Promise

              </span>

              <h3 className="mt-6 text-4xl font-black text-slate-900">

                We Handle The Transportation

                <span className="block text-blue-700">

                  So You Can Enjoy Every Moment

                </span>

              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-600">

                From the first pickup until the final guest reaches home,
                our team manages every transportation detail with precision,
                professionalism and care.

              </p>

            </div>

            {/* Right */}

            <div className="grid gap-5">

              {[
                "Luxury & Well-Maintained Fleet",
                "Experienced Wedding Chauffeurs",
                "Punctual Pickup & Drop",
                "Dedicated Event Coordinator",
                "Transparent Pricing",
                "24×7 Booking Assistance",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5"
                >

                  <ShieldCheck
                    className="text-yellow-500"
                    size={22}
                  />

                  <span className="font-medium text-slate-700">

                    {item}

                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  CarFront,
  Users,
  Plane,
  CalendarHeart,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const highlights = [
  {
    icon: CarFront,
    title: "Luxury Wedding Cars",
    description:
      "Elegant vehicles for the bride, groom and couple's grand entrance.",
  },
  {
    icon: Users,
    title: "Guest Transportation",
    description:
      "Comfortable transportation for family members, relatives and wedding guests.",
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    description:
      "Professional pickup and drop services for guests arriving from different cities.",
  },
  {
    icon: CalendarHeart,
    title: "Multi-Day Events",
    description:
      "Transportation for engagement, haldi, mehendi, sangeet, wedding and reception.",
  },
];

export default function StorySection() {
  return (
    <section className="bg-gradient-to-b from-[#FFFCF7] via-white to-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-2">
          {/* Left Content */}

          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
              <Heart size={16} />
              Tailored Wedding Transportation
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Every Wedding Has
              <span className="block text-blue-700">A Different Story</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 lg:text-lg">
              No two weddings are alike. Some couples envision a grand
              traditional celebration surrounded by family, while others prefer
              an intimate ceremony or a destination wedding. Every event has
              unique transportation requirements, and that's where thoughtful
              planning makes all the difference.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Instead of offering fixed packages, our team understands your
              wedding schedule, guest movement, venue locations and vehicle
              preferences before recommending the most suitable transportation
              plan.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600 lg:text-lg lg:leading-9">
              Whether you require a luxury car for the groom, elegant
              transportation for the bride, airport pickups for guests or
              multiple vehicles across several wedding events, every booking is
              carefully coordinated in advance so your celebration runs
              smoothly.
            </p>

            {/* Benefits */}

            <div className="mt-8 space-y-4">
              {[
                "Customized transportation planning",
                "Professional event coordination",
                "Luxury & family vehicle options",
                "On-time arrival for every ceremony",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="text-yellow-500" />

                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/fleet"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-blue-700 px-6 py-4 font-semibold text-white transition hover:bg-blue-800 sm:w-auto"
            >
              Explore Our Fleet
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right Image */}

          {/* Right Image */}

          <div className="order-1 relative pb-6 lg:order-2 lg:pb-0">
            {/* Gold Border */}
            <div className="absolute -left-2 -top-2 hidden h-full w-full rounded-[32px] border border-yellow-300 lg:-left-5 lg:-top-5 lg:block lg:border-2" />

            {/* Image */}
            <div className="relative overflow-hidden rounded-[28px] shadow-[0_25px_60px_rgba(0,0,0,0.18)] lg:rounded-[32px]">
              <Image
                src="/images/heroimg/weddingcar.png"
                alt="Decorated Wedding Car"
                width={700}
                height={900}
                className="
        h-[260px]
        w-full
        object-cover
        object-center
        transition
        duration-700
        hover:scale-105

        sm:h-[360px]

        lg:h-[720px]
      "
              />
            </div>

            {/* Mobile Card */}
            <div className="mt-5 rounded-3xl bg-white p-6 shadow-xl lg:hidden">
              <h3 className="text-xl font-bold text-slate-900">
                Planned Before Your Wedding Day
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                By the time your wedding begins, your transportation schedule is
                already finalized—allowing you to enjoy every celebration
                without worrying about vehicles or logistics.
              </p>
            </div>

            {/* Desktop Floating Card */}
            <div className="absolute bottom-6 left-10 right-10 hidden rounded-3xl bg-white/95 p-6 shadow-2xl backdrop-blur lg:block">
              <h3 className="text-xl font-bold text-slate-900">
                Planned Before Your Wedding Day
              </h3>

              <p className="mt-3 text-[15px] leading-7 text-slate-600">
                By the time your wedding begins, your transportation schedule is
                already finalized—allowing you to enjoy every celebration
                without worrying about vehicles or logistics.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Cards */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4 lg:mt-24">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-yellow-300 hover:shadow-2xl lg:p-8"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700 text-white transition group-hover:bg-yellow-400 group-hover:text-slate-900">
                  <Icon size={30} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900 lg:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 lg:text-base lg:leading-8">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

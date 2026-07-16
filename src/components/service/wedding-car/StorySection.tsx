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
    <section className="bg-gradient-to-b from-[#FFFCF7] to-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left Content */}

          <div>

            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">

              <Heart size={16} />

              Tailored Wedding Transportation

            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 lg:text-5xl">

              Every Wedding Has

              <span className="block text-blue-700">

                A Different Story

              </span>

            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">

              No two weddings are alike. Some couples envision a grand
              traditional celebration surrounded by family, while others
              prefer an intimate ceremony or a destination wedding. Every
              event has unique transportation requirements, and that's where
              thoughtful planning makes all the difference.

            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">

              Instead of offering fixed packages, our team understands your
              wedding schedule, guest movement, venue locations and vehicle
              preferences before recommending the most suitable
              transportation plan.

            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">

              Whether you require a luxury car for the groom, elegant
              transportation for the bride, airport pickups for guests or
              multiple vehicles across several wedding events, every booking
              is carefully coordinated in advance so your celebration runs
              smoothly.

            </p>

            {/* Benefits */}

            <div className="mt-10 space-y-5">

              {[
                "Customized transportation planning",
                "Professional event coordination",
                "Luxury & family vehicle options",
                "On-time arrival for every ceremony",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4"
                >

                  <CheckCircle2 className="text-yellow-500" />

                  <span className="font-medium text-slate-700">

                    {item}

                  </span>

                </div>

              ))}

            </div>

            <Link
              href="/fleet"
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
            >

              Explore Our Fleet

              <ArrowRight size={18} />

            </Link>

          </div>

          {/* Right Image */}

          <div className="relative">

            {/* Gold Border */}

            <div className="absolute -left-6 -top-6 h-full w-full rounded-[40px] border-2 border-yellow-300" />

            <div className="relative overflow-hidden rounded-[40px] shadow-2xl">

              <Image
                src="/images/wedding/story.jpg"
                alt="Decorated Wedding Car"
                width={700}
                height={900}
                className="h-[650px] w-full object-cover"
              />

            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-10 left-8 right-8 rounded-3xl bg-white p-8 shadow-2xl">

              <h3 className="text-2xl font-bold text-slate-900">

                Planned Before Your Wedding Day

              </h3>

              <p className="mt-4 leading-8 text-slate-600">

                By the time your wedding begins, your transportation
                schedule is already finalized—allowing you to enjoy every
                celebration without worrying about vehicles or logistics.

              </p>

            </div>

          </div>

        </div>

        {/* Bottom Cards */}

        <div className="mt-28 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {highlights.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-yellow-300 hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700 text-white transition group-hover:bg-yellow-400 group-hover:text-slate-900">

                  <Icon size={30} />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">

                  {item.title}

                </h3>

                <p className="mt-4 leading-8 text-slate-600">

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
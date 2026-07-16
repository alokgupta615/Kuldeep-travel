import Image from "next/image";
import Link from "next/link";
import {
  Flower2,
  Sparkles,
  Palette,
  Heart,
  Ribbon,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const decorations = [
  {
    title: "Fresh Flower Arrangements",
    image: "/images/wedding/decor/fresh-flowers.jpg",
    icon: Flower2,
    description:
      "Beautiful fresh roses, orchids, lilies and seasonal flowers arranged by experienced decorators for a luxurious wedding appearance.",
  },
  {
    title: "Premium Ribbon Styling",
    image: "/images/wedding/decor/ribbon.jpg",
    icon: Ribbon,
    description:
      "Elegant ribbon work combined with floral accents to create a sophisticated and timeless wedding car decoration.",
  },
  {
    title: "Traditional Indian Decoration",
    image: "/images/wedding/decor/traditional.jpg",
    icon: Heart,
    description:
      "Classic Indian wedding decorations with vibrant flowers and traditional styling that perfectly suit cultural ceremonies.",
  },
  {
    title: "Minimal Luxury Theme",
    image: "/images/wedding/decor/minimal.jpg",
    icon: Sparkles,
    description:
      "Clean and elegant decoration using subtle flowers, ribbons and premium finishing for modern weddings.",
  },
  {
    title: "Theme-Based Decoration",
    image: "/images/wedding/decor/theme.jpg",
    icon: Palette,
    description:
      "Customized decoration matching your wedding colors, venue theme and overall event styling.",
  },
];

const features = [
  "Fresh Flower Decoration",
  "Artificial Floral Styling",
  "Premium Ribbon Work",
  "Traditional Wedding Theme",
  "Minimal Luxury Design",
  "Customized Theme Colors",
  "Professional Decoration Team",
  "Decorator Coordination",
];

export default function DecorationOptions() {
  return (
    <section className="bg-gradient-to-b from-white to-[#FFFCF7] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
            Wedding Car Decoration
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
            Decoration That Complements
            <span className="block text-blue-700">
              Your Wedding Theme
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every wedding is unique. Whether you prefer a grand floral
            arrangement, elegant minimal styling or traditional Indian
            decoration, we'll help ensure your wedding car perfectly
            matches your celebration.
          </p>

        </div>

        {/* Gallery */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {decorations.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="group overflow-hidden rounded-[32px] bg-white shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="relative h-72 overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-slate-900">

                    <Icon size={28} />

                  </div>

                </div>

                <div className="p-8">

                  <h3 className="text-2xl font-bold text-slate-900">

                    {item.title}

                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">

                    {item.description}

                  </p>

                </div>

              </div>

            );

          })}

        </div>

        {/* Bottom Section */}

        <div className="mt-24 grid gap-12 lg:grid-cols-2">

          {/* Left */}

          <div className="rounded-[32px] bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 p-10 text-white shadow-2xl">

            <h3 className="text-4xl font-black">

              What's Included?

            </h3>

            <p className="mt-6 text-lg leading-8 text-blue-100">

              Our wedding decoration options can be customized according
              to your venue, ceremony and personal preferences.

            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              {features.map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2
                    className="text-yellow-400"
                    size={20}
                  />

                  <span>{feature}</span>

                </div>

              ))}

            </div>

          </div>

          {/* Right */}

          <div className="rounded-[32px] border border-yellow-200 bg-[#FFFCF7] p-10">

            <h3 className="text-3xl font-black text-slate-900">

              Already Have A Decorator?

            </h3>

            <p className="mt-6 leading-8 text-slate-600">

              No problem.

              We coordinate directly with your wedding decorator to
              ensure the vehicle is available at the right place and
              time for decoration before your ceremony.

            </p>

            <p className="mt-6 leading-8 text-slate-600">

              This coordination helps avoid delays and ensures your
              wedding car is fully prepared before the scheduled
              departure.

            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-8 py-4 font-bold text-slate-900 transition hover:bg-yellow-500"
            >
              Discuss Decoration Options

              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
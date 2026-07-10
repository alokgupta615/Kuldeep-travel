import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BookDirectSection() {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold">
          Why Book Directly with Kuldeep Travels?
        </h2>

        <p className="mt-6 text-blue-100 leading-8">
          Speak directly with our booking team, receive personalized
          vehicle recommendations, enjoy flexible travel planning and
          dedicated customer support from booking to destination.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 mt-10 bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          Book Your Cab
          <ArrowRight size={20} />
        </Link>

      </div>
    </section>
  );
}
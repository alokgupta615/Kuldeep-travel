"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    city: "Lucknow",
    text: "Kuldeep Travels planned our family holiday perfectly. The itinerary was flexible, the vehicle was clean, and the driver was extremely professional.",
  },
  {
    name: "Priya & Aman",
    city: "Kanpur",
    text: "Our honeymoon trip was customised exactly the way we wanted. Every destination and hotel matched our expectations.",
  },
  {
    name: "Neha Verma",
    city: "Prayagraj",
    text: "Excellent service from start to finish. Transparent pricing and outstanding support throughout the journey.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Testimonials
          </span>

          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
            Loved by
            <span className="text-blue-700"> Happy Travellers</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <Quote className="h-10 w-10 text-blue-600" />

              <div className="mt-6 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>

              <p className="mt-6 leading-8 text-slate-600">"{item.text}"</p>

              <div className="mt-8">
                <h4 className="font-bold">{item.name}</h4>
                <p className="text-sm text-slate-500">{item.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

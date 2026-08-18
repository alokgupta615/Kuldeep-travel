"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    name: "Amit Sharma",
    date: "2 weeks ago",
    rating: 5,
    initials: "AS",
    color: "from-blue-600 to-indigo-600",
    text: "Excellent service by Kuldeep Travels. We booked a Tempo Traveller for a family trip to Ayodhya. The vehicle was very clean and the driver was polite and punctual. Highly recommended!",
  },
  {
    name: "Priya Gupta",
    date: "1 month ago",
    rating: 5,
    initials: "PG",
    color: "from-pink-600 to-rose-600",
    text: "Booked an Innova Crysta for outstation. Best travel agency in Lucknow! Very professional behavior and reasonable pricing. The journey to Delhi was very comfortable.",
  },
  {
    name: "Rahul Singh",
    date: "2 months ago",
    rating: 5,
    initials: "RS",
    color: "from-emerald-600 to-teal-600",
    text: "Using their cab service for corporate meetings for the past year. Always on time and very reliable. The customer support is also very responsive 24x7.",
  },
];

export default function Testimonial() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-xs sm:text-sm font-semibold text-blue-700">
            Customer Reviews
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
            What Our Travellers Say
          </h2>
          <div className="mt-4 flex flex-col items-center justify-center gap-1.5">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-gray-900">4.9</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-amber-400" size={20} />
                ))}
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-500">Based on 500+ Verified Google Reviews</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm transition hover:shadow-lg hover:border-blue-200"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3.5">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${review.color} text-white font-bold text-sm shadow-sm`}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">{review.name}</h3>
                    <p className="text-xs text-gray-400">{review.date}</p>
                  </div>
                </div>

                {/* Google G icon */}
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                  <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex mb-3.5 text-amber-400">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="fill-amber-400" size={15} />
                ))}
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

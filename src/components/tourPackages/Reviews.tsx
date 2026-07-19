"use client";

import {
  Star,
  Quote,
  MapPin,
  Users,
  BadgeCheck,
} from "lucide-react";

const reviews = [
  {
    name: "Amit Sharma",
    location: "Lucknow",
    destination: "Nainital Family Tour",
    rating: 5,
    review:
      "Excellent service from Kuldeep Travels. The vehicle was clean, the driver was punctual, and the entire trip was perfectly managed. Highly recommended.",
  },
  {
    name: "Priya Verma",
    location: "Kanpur",
    destination: "Haridwar & Rishikesh",
    rating: 5,
    review:
      "Our pilgrimage tour was very comfortable. Hotels, sightseeing, and transportation were well organized. We will definitely book again.",
  },
  {
    name: "Rahul Singh",
    location: "Ayodhya",
    destination: "Mussoorie Holiday",
    rating: 5,
    review:
      "The customized itinerary was exactly what we wanted. Great pricing, polite driver, and excellent customer support throughout the journey.",
  },
];

const stats = [
  {
    value: "500+",
    label: "Happy Travelers",
  },
  {
    value: "150+",
    label: "Holiday Packages",
  },
  {
    value: "4.9/5",
    label: "Customer Rating",
  },
  {
    value: "24×7",
    label: "Travel Support",
  },
];

export default function Reviews() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            What Our Travelers Say
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Customer satisfaction is our biggest achievement. Here's what our
            travelers have to say about their holiday experience with Kuldeep
            Travels.
          </p>

        </div>

        {/* Statistics */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (

            <div
              key={item.label}
              className="rounded-3xl bg-white p-8 text-center shadow-sm"
            >

              <h3 className="text-4xl font-bold text-blue-700">
                {item.value}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.label}
              </p>

            </div>

          ))}

        </div>

        {/* Review Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {reviews.map((review) => (

            <div
              key={review.name}
              className="relative rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <Quote className="absolute right-8 top-8 h-10 w-10 text-blue-100" />

              {/* Stars */}

              <div className="flex gap-1">

                {[...Array(review.rating)].map((_, index) => (

                  <Star
                    key={index}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />

                ))}

              </div>

              <p className="mt-6 leading-8 text-gray-600">
                "{review.review}"
              </p>

              <div className="mt-8 border-t pt-6">

                <h4 className="text-xl font-bold text-gray-900">
                  {review.name}
                </h4>

                <div className="mt-3 flex items-center gap-2 text-blue-700">

                  <MapPin className="h-4 w-4" />

                  <span>{review.location}</span>

                </div>

                <div className="mt-3 flex items-center gap-2 text-gray-600">

                  <BadgeCheck className="h-4 w-4 text-green-600" />

                  <span>{review.destination}</span>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Banner */}

        <div className="mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600">

          <div className="grid items-center gap-10 p-10 lg:grid-cols-2 lg:p-14">

            <div className="text-white">

              <Users className="mb-5 h-12 w-12 text-yellow-400" />

              <h3 className="text-3xl font-bold">
                Join Hundreds of Happy Travelers
              </h3>

              <p className="mt-6 text-lg leading-8 text-blue-100">
                From family vacations and pilgrimage tours to weekend getaways,
                Kuldeep Travels has helped hundreds of travelers enjoy safe,
                comfortable, and memorable holidays across North India.
              </p>

            </div>

            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">

              <h4 className="text-2xl font-bold text-white">
                Why Customers Trust Us
              </h4>

              <div className="mt-8 space-y-4">

                {[
                  "Professional Drivers",
                  "Clean & Comfortable Vehicles",
                  "Customized Packages",
                  "Transparent Pricing",
                  "On-Time Pickup",
                  "Dedicated Customer Support",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 text-white"
                  >
                    <BadgeCheck className="h-5 w-5 text-yellow-400" />
                    <span>{item}</span>
                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
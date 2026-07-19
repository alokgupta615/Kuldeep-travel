"use client";

import {
  Backpack,
  ShieldCheck,
  MapPinned,
  Smartphone,
  Wallet,
  Camera,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";

const tips = [
  {
    icon: Backpack,
    title: "Pack Smart",
    description:
      "Carry light luggage with essential clothing, toiletries, medicines, and weather-appropriate outfits.",
  },
  {
    icon: Smartphone,
    title: "Keep Important Documents",
    description:
      "Carry your ID proofs, hotel confirmations, booking details, and emergency contact numbers.",
  },
  {
    icon: Wallet,
    title: "Carry Multiple Payment Options",
    description:
      "Keep cash along with UPI, debit cards, or credit cards for a hassle-free travel experience.",
  },
  {
    icon: ShieldCheck,
    title: "Prioritize Safety",
    description:
      "Follow local guidelines, stay alert, and always travel with trusted transportation services.",
  },
  {
    icon: MapPinned,
    title: "Plan Your Itinerary",
    description:
      "Plan sightseeing in advance to avoid unnecessary travel and make the most of your vacation.",
  },
  {
    icon: Camera,
    title: "Capture Every Moment",
    description:
      "Carry your camera or smartphone to preserve unforgettable memories during your holiday.",
  },
];

const checklist = [
  "Government ID proof",
  "Hotel booking confirmation",
  "Mobile charger & power bank",
  "Comfortable walking shoes",
  "Personal medicines",
  "Light snacks & water bottle",
  "Weather-appropriate clothing",
  "Emergency contact information",
];

export default function TravelTips() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Travel Tips
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Essential Tips for a Comfortable Holiday
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            A little preparation goes a long way. Follow these simple travel
            tips to enjoy a safe, comfortable, and memorable holiday with your
            family and friends.
          </p>
        </div>

        {/* Tips */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {tips.map((tip) => {
            const Icon = tip.icon;

            return (
              <div
                key={tip.title}
                className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4 transition-all group-hover:bg-blue-700">
                  <Icon className="h-8 w-8 text-blue-700 group-hover:text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {tip.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {tip.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Travel Checklist */}

        <div className="mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600">
          <div className="grid items-center gap-10 p-10 lg:grid-cols-2 lg:p-14">
            {/* Left */}

            <div className="text-white">
              <Lightbulb className="mb-5 h-12 w-12 text-yellow-400" />

              <h3 className="text-3xl font-bold">
                Holiday Travel Checklist
              </h3>

              <p className="mt-6 text-lg leading-8 text-blue-100">
                Before starting your journey, make sure you've packed everything
                you need for a smooth and stress-free vacation.
              </p>
            </div>

            {/* Right */}

            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">
              <h4 className="text-2xl font-bold text-white">
                Don't Forget
              </h4>

              <div className="mt-8 space-y-4">
                {checklist.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-white"
                  >
                    <CheckCircle2 className="h-5 w-5 text-yellow-400" />
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
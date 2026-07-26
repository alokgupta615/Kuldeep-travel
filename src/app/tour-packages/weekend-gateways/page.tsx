import type { Metadata } from "next";

import Hero from "@/components/weekend-gateway/Hero";
import Intro from "@/components/weekend-gateway/Intro";
import TravelStyles from "@/components/weekend-gateway/TravelStyles";
import Destinations from "@/components/weekend-gateway/Destinations";
import WhyChooseUs from "@/components/weekend-gateway/WhyChooseUs";
import Packages from "@/components/weekend-gateway/Packages";
import Fleet from "@/components/weekend-gateway/Fleet";
import TravelTips from "@/components/weekend-gateway/TravelTips";
import FAQ from "@/components/weekend-gateway/FAQ";
import CTA from "@/components/weekend-gateway/CTA";

export const metadata: Metadata = {
  title:
    "Best Weekend Getaway from Lucknow | Weekend Tour Packages | Kuldeep Travels",
  description:
    "Discover the best weekend getaways from Lucknow with Kuldeep Travels. Explore Ayodhya, Varanasi, Nainital, Mussoorie, Agra, Haridwar, Rishikesh and more with customised weekend tour packages.",
  keywords: [
    "Best Weekend Getaway from Lucknow",
    "Weekend Tour Packages from Lucknow",
    "Weekend Trips from Lucknow",
    "Short Trips from Lucknow",
    "Family Weekend Tour",
    "Couple Weekend Packages",
    "Lucknow Tour Operator",
    "Kuldeep Travels",
  ],
  alternates: {
    canonical: "/weekend-getaway",
  },
  openGraph: {
    title: "Best Weekend Getaway from Lucknow | Kuldeep Travels",
    description:
      "Plan your perfect weekend escape with customised tour packages from Lucknow.",
    type: "website",
    images: [
      {
        url: "/images/weekend-getaway/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Weekend Getaway from Lucknow",
      },
    ],
  },
};

export default function WeekendGetawayPage() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <Intro />

      <TravelStyles />

      <Destinations />

      <WhyChooseUs />

      <Packages />

      <Fleet />

      <TravelTips />

      <FAQ />

      <CTA />
    </main>
  );
}

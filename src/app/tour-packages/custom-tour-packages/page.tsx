import type { Metadata } from "next";

import {
  Hero,
  BuildYourTrip,
  TourTypes,
  Customization,
  Destinations,
  WhyChooseUs,
  Testimonials,
  FAQ,
  CTA,
} from "@/components/custom-tour-packages";
import GetQuoteForm from "@/components/GetQuoteForm";

export const metadata: Metadata = {
  title:
    "Custom Tour Packages from Lucknow | Personalized Holiday Packages | Kuldeep Travels",

  description:
    "Plan your dream holiday with Kuldeep Travels. We offer fully customized tour packages from Lucknow for families, couples, groups, pilgrimage, adventure, and corporate travel across North India.",

  keywords: [
    "Custom Tour Packages",
    "Customized Tour Packages",
    "Tour Packages from Lucknow",
    "Personalized Holiday Packages",
    "Family Tour Packages",
    "Pilgrimage Tour Packages",
    "North India Tours",
    "Holiday Packages",
    "Kuldeep Travels",
  ],

  alternates: {
    canonical: "/custom-tour-packages",
  },

  openGraph: {
    title: "Custom Tour Packages | Kuldeep Travels",
    description:
      "Travel your way with personalised holiday packages from Lucknow.",
    images: ["/images/tour-package/tour.png"],
  },
};

export default function CustomTourPackagesPage() {
  return (
    <main className="overflow-hidden bg-white">
      <Hero />

      <BuildYourTrip />

      <TourTypes />

      <Customization />

      <Destinations />

      <WhyChooseUs />

      <Testimonials />

      <FAQ />

      <GetQuoteForm />

      <CTA />
    </main>
  );
}

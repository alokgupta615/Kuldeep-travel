import type { Metadata } from "next";

import HeroSection from "@/components/about/hero/HeroSection";
import CompanyIntro from "@/components/about/CompanyIntro";
import CompanyStats from "@/components/about/CompanyStats";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import Services from "@/components/about/Services";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import FleetSection from "@/components/about/FleetSection";
import Destinations from "@/components/about/Destinations";
import BookingProcess from "@/components/about/BookingProcess";
import Commitment from "@/components/about/Commitment";
import WhoWeServe from "@/components/about/WhoWeServe";

// Uncomment after generating these components
// import Testimonials from "@/components/about/Testimonials";
// import FAQ from "@/components/about/FAQ";
// import CTASection from "@/components/about/CTASection";

export const metadata: Metadata = {
  title: "About Kuldeep Travels | Trusted Taxi & Tour Operator in Lucknow",
  description:
    "Learn about Kuldeep Travels, a trusted taxi and travel company in Lucknow offering local cabs, airport transfers, outstation taxis, tour packages, wedding transportation, and group travel across North India.",
  keywords: [
    "About Kuldeep Travels",
    "Taxi Service Lucknow",
    "Cab Service Lucknow",
    "Travel Agency Lucknow",
    "Airport Taxi Lucknow",
    "Outstation Taxi Lucknow",
    "Tour Packages Lucknow",
    "Wedding Car Rental Lucknow",
    "Tempo Traveller Lucknow",
  ],
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <HeroSection />

      {/* Company Introduction */}
      <CompanyIntro />

      {/* Company Statistics */}
      <CompanyStats />

      {/* Our Story */}
      <OurStory />

      {/* Mission & Vision */}
      <MissionVision />

      {/* Services */}
      <Services />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Fleet */}
      <FleetSection />

      {/* Destinations */}
      <Destinations />

      {/* Booking Process */}
      <BookingProcess />

      {/* Commitment */}
      <Commitment />

      {/* Who We Serve */}
      <WhoWeServe />

      {/*
      ===============================
      Add these after generating them
      ===============================
      */}

      {/* <Testimonials /> */}

      {/* <FAQ /> */}

      {/* <CTASection /> */}
    </main>
  );
}
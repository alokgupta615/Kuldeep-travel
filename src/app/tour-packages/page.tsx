import type { Metadata } from "next";

import Hero from "@/components/tourPackages/Hero";
import Stats from "@/components/tourPackages/Stats";
import About from "@/components/tourPackages/About";
import WhyChooseUs from "@/components/tourPackages/WhyChooseUs";
import PackageCategories from "@/components/tourPackages/PackageCategories";
import PopularDestinations from "@/components/tourPackages/PopularDestinations";
import VehicleSection from "@/components/tourPackages/VehicleSection";
import PackageInclusions from "@/components/tourPackages/PackageInclusions";
import TravelerTypes from "@/components/tourPackages/TravelerTypes";
import TripDuration from "@/components/tourPackages/TripDuration";
import BestTimeToVisit from "@/components/tourPackages/BestTimeToVisit";
import BookingBenefits from "@/components/tourPackages/BookingBenefits";
import TravelTips from "@/components/tourPackages/TravelTips";
import HolidayThemes from "@/components/tourPackages/HolidayThemes";
import DepartureCities from "@/components/tourPackages/DepartureCities";
import BookingProcess from "@/components/tourPackages/BookingProcess";
import Reviews from "@/components/tourPackages/Reviews";
import FAQ from "@/components/tourPackages/FAQ";
import CTA from "@/components/tourPackages/CTA";

import FeaturedPackageRates from "@/components/tourPackages/FeaturedPackageRates";

export const metadata: Metadata = {
  title: "Tour Packages from Lucknow | Family, Religious & Holiday Tours",
  description:
    "Explore premium tour packages from Lucknow including family holidays, religious tours, weekend getaways and customized travel packages with Kuldeep Travels.",
  keywords: [
    "Lucknow tour packages",
    "family tour packages",
    "religious tours from Lucknow",
    "holiday packages India",
    "custom travel packages",
  ],
};

export default function TourPackagesPage() {
  return (
    <main className="overflow-x-hidden bg-white">
      {/* Hero */}
      <Hero />

      {/* Trust Metrics */}
      <Stats />

      {/* Verified Packages & Discount Rates */}
      <FeaturedPackageRates />

      {/* Company Introduction */}
      <section>
        <About />
        <WhyChooseUs />
      </section>

      {/* Tour Discovery */}
      <section className="space-y-0">
        {/* <PackageCategories /> */}
        {/* <PopularDestinations /> */}
      </section>

      {/* Travel Experience */}
      <section>
        {/* <VehicleSection /> */}
        <PackageInclusions />
      </section>

      {/* Planning Guide */}
      <section>
        <TravelerTypes />
        {/* <TripDuration /> */}
        <BestTimeToVisit />
      </section>

      {/* Conversion Sections */}
      <section>
        <BookingBenefits />
        <BookingProcess />
      </section>

      {/* Content Marketing */}
      <section>
        <TravelTips />
        <HolidayThemes />
        {/* <DepartureCities /> */}
      </section>

      {/* Social Proof */}
      <section>
        <Reviews />
        <FAQ />
      </section>

      {/* Final CTA */}
      <CTA />
    </main>
  );
}

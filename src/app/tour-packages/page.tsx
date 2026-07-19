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

export default function TourPackagesPage() {
  return (
    <main className="overflow-x-hidden bg-white">
      <Hero />

      <Stats />

      <About />

      <WhyChooseUs />

      <PackageCategories />

      <PopularDestinations />

      <VehicleSection />

      <PackageInclusions />

      <TravelerTypes />

      <TripDuration />

      <BestTimeToVisit />

      <BookingBenefits />

      <TravelTips />

      <HolidayThemes />

      <DepartureCities />

      <BookingProcess />

      <Reviews />

      <FAQ />

      <CTA />
    </main>
  );
}
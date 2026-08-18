import type { Metadata } from "next";

import Hero from "@/components/service/airport-taxi/Hero";
import PickupDrop from "@/components/service/airport-taxi/PickupDrop";
import VehicleOptions from "@/components/service/airport-taxi/VehicleOptions";
import Features from "@/components/service/airport-taxi/Features";
import BookingProcess from "@/components/service/airport-taxi/BookingProcess";
import PreBookingBenefits from "@/components/service/airport-taxi/PreBookingBenefits";
import TravellerTypes from "@/components/service/airport-taxi/TravellerTypes";
import ServiceAreas from "@/components/service/airport-taxi/ServiceAreas";
import WhyChoose from "@/components/service/airport-taxi/WhyChoose";
import FAQ from "@/components/service/airport-taxi/FAQ";
import CTA from "@/components/service/airport-taxi/CTA";

export const metadata: Metadata = {
  title: "Lucknow Airport Taxi & Cab Service | 24x7 Pickup & Drop | Kuldeep Travels",
  description:
    "Book 24x7 airport taxi in Lucknow for Chaudhary Charan Singh International Airport (CCSI). Fixed pricing starting ₹549, flight tracking, sanitized AC cabs, and verified drivers. Call +91 99364 08109.",
  keywords: [
    "Lucknow Airport Taxi",
    "Lucknow Airport Cab Service",
    "Chaudhary Charan Singh Airport Taxi",
    "Airport Pickup Drop Lucknow",
    "Gomti Nagar to Lucknow Airport Cab",
    "Pre-book Airport Taxi Lucknow",
  ],
};

export default function AirportTaxiPage() {
  return (
    <main className="bg-white">
      <Hero />
      <PickupDrop />
      <VehicleOptions />
      <Features />
      <BookingProcess />
      <PreBookingBenefits />
      <TravellerTypes />
      <ServiceAreas />
      <WhyChoose />
      <FAQ />
      <CTA />
    </main>
  );
}

import type { Metadata } from "next";

import Hero from "@/components/service/senior-citizen/Hero";
import TravelNeeds from "@/components/service/senior-citizen/TravelNeeds";
import ServiceTypes from "@/components/service/senior-citizen/ServiceTypes";
import VehicleOptions from "@/components/service/senior-citizen/VehicleOptions";
import CommonTrips from "@/components/service/senior-citizen/CommonTrips";
import BookingProcess from "@/components/service/senior-citizen/BookingProcess";
import FAQ from "@/components/service/senior-citizen/FAQ";
import WhyChooseUs from "@/components/service/senior-citizen/WhyChooseUs";
import CTA from "@/components/service/senior-citizen/CTA";

export const metadata: Metadata = {
  title: "Senior Citizen Cab Service in Lucknow | Safe & Comfortable Travel",
  description:
    "Book a Senior Citizen Cab Service in Lucknow with Kuldeep Travels. Safe, comfortable, and reliable transportation for hospital visits, airport transfers, temple visits, family functions, and outstation travel.",
};

export default function SeniorCitizenCabPage() {
  return (
    <>
      <Hero />
      <TravelNeeds />
      <ServiceTypes />
      <VehicleOptions />
      <CommonTrips />
      <BookingProcess />
      <FAQ />
      <WhyChooseUs />
      <CTA />
    </>
  );
}
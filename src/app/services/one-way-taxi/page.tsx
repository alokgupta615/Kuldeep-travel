import type { Metadata } from "next";
import Hero from "@/components/service/one-way-taxi/Hero";
import WhyOneWay from "@/components/service/one-way-taxi/WhyOneWay";
import Benefits from "@/components/service/one-way-taxi/Benefits";
import PopularRoutes from "@/components/service/one-way-taxi/PopularRoutes";
import TravelPurpose from "@/components/service/one-way-taxi/TravelPurpose";
import VehicleOptions from "@/components/service/one-way-taxi/VehicleOptions";
import BookingProcess from "@/components/service/one-way-taxi/BookingProcess";
import DistanceTable from "@/components/service/one-way-taxi/DistanceTable";
import WhyChooseUs from "@/components/service/one-way-taxi/WhyChooseUs";
import ReturnTrip from"@/components/service/one-way-taxi/ReturnTrip";

import FAQ from "@/components/service/one-way-taxi/FAQ";
import CTA from "@/components/service/one-way-taxi/CTA";

export const metadata: Metadata = {
  title: "One Way Cab Service in Lucknow | Affordable Intercity Taxi",
  description:
    "Book One Way Cab Service in Lucknow with Kuldeep Travels. Comfortable sedans, SUVs & Innova Crysta. Transparent fares, professional drivers, doorstep pickup & drop.",
};

export default function OneWayCabPage() {
  return (
    <>
      <Hero/>
      <WhyOneWay />
      <Benefits />
      <PopularRoutes />
      <TravelPurpose />
      <VehicleOptions />
      <BookingProcess />
      <DistanceTable />
      <WhyChooseUs />
      <ReturnTrip/>
      <FAQ />
      <CTA />
    </>
  );
}
import Hero from "@/components/service/airport-taxi/Hero";
import PickupDrop from "@/components/service/airport-taxi/PickupDrop";
import Features from "@/components/service/airport-taxi/Features";
import BookingProcess from "@/components/service/airport-taxi/BookingProcess";
import PreBookingBenefits from "@/components/service/airport-taxi/PreBookingBenefits";
import VehicleOptions from "@/components/service/airport-taxi/VehicleOptions";
import TravellerTypes from "@/components/service/airport-taxi/TravellerTypes";
import ServiceAreas from "@/components/service/airport-taxi/ServiceAreas";
import WhyChoose from "@/components/service/airport-taxi/WhyChoose";
import FAQ from "@/components/service/airport-taxi/FAQ";
import CTA from "@/components/service/airport-taxi/CTA";

export default function AirportTaxiPage() {
  return (
    <main className="bg-white">
      <Hero />
      <PickupDrop />
      <Features />
      <BookingProcess />
      <PreBookingBenefits />
      <VehicleOptions />
      <TravellerTypes />
      <ServiceAreas />
      <WhyChoose />
      <FAQ />
      <CTA />
    </main>
  );
}
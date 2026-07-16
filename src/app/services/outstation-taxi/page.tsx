import {
  Hero,
  JourneyIntro,
  WhyChooseOutstation,
  PopularDestinations,
  TravelPlans,
  VehicleOptions,
  RoadTripBenefits,
  TripPlanning,
  WhyChooseKuldeep,
  FAQ,
  CTA,
} from  "@/components/service/outstation-taxi"

export default function OutstationCabPage() {
  return (
    <>
      <Hero />
      <JourneyIntro />
      <WhyChooseOutstation />
      <PopularDestinations />
      <TravelPlans />
      <VehicleOptions />
      <RoadTripBenefits />
      <TripPlanning />
      <WhyChooseKuldeep />
      <FAQ />
      <CTA />
    </>
  );
}
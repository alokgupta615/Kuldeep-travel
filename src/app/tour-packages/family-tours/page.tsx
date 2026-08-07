import {
  HeroSection,
  Introduction,
  WhyChooseUs,
  PackageTypes,
  PopularDestinations,
  VehicleSection,
  IncludedSection,
  BestTimeSection,
  BookingProcess,
  FAQ,
  CTA,
} from "@/components/family-tour";

export default function FamilyTourPackagesPage() {
  return (
    <>
      <HeroSection />
      <Introduction />
      <WhyChooseUs />
      <PackageTypes />
      <PopularDestinations />
      {/* <VehicleSection /> */}
      <IncludedSection />
      <BestTimeSection />
      <BookingProcess />
      <FAQ />
      <CTA />
    </>
  );
}

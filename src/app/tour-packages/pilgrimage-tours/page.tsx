// import {
//   Hero,
//   FaithJourney,
//   Destinations,
//   PackageTypes,
//   WhyChooseUs,
//   PackageIncludes,
//   VehicleSection,
//   BookingSteps,
//   FAQ,

import {
  BookingSteps,
  CTA,
  Destinations,
  FaithJourney,
  FAQ,
  Hero,
  PackageIncludes,
  PackageTypes,
  VehicleSection,
  WhyChooseUs,
} from "@/components/pilgrimage";

export default function PilgrimageToursPage() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <FaithJourney />

      <Destinations />

      <PackageTypes />

      <WhyChooseUs />

      <PackageIncludes />

      <VehicleSection />

      <BookingSteps />

      <FAQ />

      <CTA />
    </main>
  );
}

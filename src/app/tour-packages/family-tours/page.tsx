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

export const metadata = {
  title: "Family Tour Packages from Lucknow | Affordable Customized Holiday Trips",
  description:
    "Book customized family tour packages from Lucknow to Nainital, Mussoorie, Jim Corbett, Ayodhya, Varanasi, Agra, and Rajasthan. AC cabs & Tempo Travellers with verified drivers. Call +91 99364 08109.",
  keywords: [
    "Family Tour Packages from Lucknow",
    "Lucknow to Nainital Family Trip",
    "Family Holiday Packages Lucknow",
    "Lucknow to Ayodhya Varanasi Family Tour",
    "Tempo Traveller Family Booking Lucknow",
  ],
};

export default function FamilyTourPackagesPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <Introduction />
      <PackageTypes />
      <PopularDestinations />
      <VehicleSection />
      <WhyChooseUs />
      <IncludedSection />
      <BestTimeSection />
      <BookingProcess />
      <FAQ />
      <CTA />
    </main>
  );
}

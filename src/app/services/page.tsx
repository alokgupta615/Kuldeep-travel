import BookDirectSection from "@/components/service/BookDirectSection";
import BookingPromise from "@/components/service/BookingPromise";
import ContactStrip from "@/components/service/CantactStrip";
import CoverageSection from "@/components/service/Coverage";
import FAQSection from "@/components/service/FAQSection";
import PricingSection from "@/components/service/PricingSection";
import SafetySection from "@/components/service/SafetySection";
import ServiceHero from "@/components/service/ServiceHero";
import TravelRequirement from "@/components/service/TravelRequirement";
import TrustBar from "@/components/service/TrustBar";
import WhyChooseSection from "@/components/service/WhyChooseSection";
import ServicesSection from "@/components/ServicesSection";


export default function ServicesPage() {
  return (
    <main>
      <ServiceHero/>
      <TrustBar/>
      <WhyChooseSection/>
      <ServicesSection/>
      <CoverageSection/>
      <TravelRequirement/>
      <BookingPromise/>
      <PricingSection/>
      <SafetySection/>
      <BookDirectSection/>
      {/* <FAQSection/> */}
      <ContactStrip/>
    </main>
  );
}
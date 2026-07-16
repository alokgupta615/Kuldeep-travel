import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/ServicesSection";
import Fleet from "@/components/Fleet";
// import Destinations from "@/components/Destinations";
// import BookingProcess from "@/components/BookingProcess";
// import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Destinations from "@/components/Destinations";
import BookingProcess from "@/components/BookingProcess";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <Services/>
      <AboutSection />
      <Fleet />
      <Destinations/>
      {/* <BookingProcess/> */}
      {/* <Testimonial /> */}
      <FAQ />
      <CTA />
    </>
  );
}
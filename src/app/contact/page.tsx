import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import TravelServices from "@/components/contact/TravelServices";
import BeforeContact from "@/components/contact/BeforeContact";
import ContactMap from "@/components/contact/ContactMap";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactCTA from "@/components/contact/ContactCTA";
import MobileQuickContact from "@/components/contact/MobileQuickContact";

export const metadata = {
  title: "Contact Kuldeep Travels | Taxi & Tour Booking in Lucknow (24/7 Available)",
  description:
    "Contact Kuldeep Travels in Lucknow for 24/7 local taxi booking, airport transfers, outstation cabs, luxury Tempo Travellers, buses, and custom holiday tour packages. Call +91 99364 08109.",
  keywords: [
    "Contact Kuldeep Travels",
    "Taxi Booking Lucknow Contact Number",
    "Lucknow Airport Cab Booking Phone",
    "Tempo Traveller Booking Lucknow",
    "Outstation Taxi Lucknow",
  ],
};

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <ContactHero />

      {/* Direct Contact Channels */}
      <ContactInfo />

      {/* Interactive Booking & Quote Form */}
      <ContactForm />

      {/* Specialized Fleets & Services */}
      <TravelServices />

      {/* What to Keep Ready Checklist */}
      <BeforeContact />

      {/* Google Map & Office Location */}
      <ContactMap />

      {/* Frequently Asked Questions */}
      <ContactFAQ />

      {/* Closing CTA */}
      <ContactCTA />

      {/* Mobile Sticky Quick Contact Action Bar */}
      <MobileQuickContact />
    </main>
  );
}
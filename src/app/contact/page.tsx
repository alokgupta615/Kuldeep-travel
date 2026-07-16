import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
// import ContactForm from "@/components/contact/ContactForm";
import TravelServices from "@/components/contact/TravelServices";
import BeforeContact from "@/components/contact/BeforeContact";
import ContactMap from "@/components/contact/ContactMap";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactCTA from "@/components/contact/ContactCTA";
import ContactForm from "@/components/contact/ContactForn";

export const metadata = {
  title: "Contact Kuldeep Travels | Taxi & Tour Booking in Lucknow",
  description:
    "Contact Kuldeep Travels for local taxi services, airport transfers, outstation cabs, Tempo Traveller bookings, luxury buses, and customized tour packages in Lucknow.",
};

export default function ContactPage() {
  return (
    <main className="bg-white">

      <ContactHero />

      <ContactInfo />
      
      <ContactForm/>

      {/* <ContactForm/> */}

      <TravelServices />

      <BeforeContact />

      <ContactMap />

      <ContactFAQ />

      <ContactCTA />

    </main>
  );
}
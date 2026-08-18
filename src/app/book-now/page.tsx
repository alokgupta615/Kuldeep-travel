import BookingHero from "@/components/bookNow/BookingHero";
import BookingForm from "@/components/bookNow/BookingForm";
import BookingSteps from "@/components/bookNow/BookingSteps";
import TrustSection from "@/components/bookNow/TrustSection";
import BookingPolicy from "@/components/bookNow/BookingPolicy";
import BookingFAQ from "@/components/bookNow/BookingFAQ";
import ContactSupport from "@/components/bookNow/ContactSupport";

export const metadata = {
  title: "Book Taxi | Kuldeep Travels",
  description:
    "Book safe, comfortable and affordable taxi services with Kuldeep Travels. Airport transfers, local cabs, outstation trips and tour packages.",
};

export default function BookNowPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <BookingHero />

      <BookingForm />

      <BookingSteps />
      <TrustSection />
      <BookingPolicy />
      <BookingFAQ />
      <ContactSupport />
    </main>
  );
}

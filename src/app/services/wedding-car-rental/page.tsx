import type { Metadata } from "next";

import Hero from "@/components/service/wedding-car/Hero";
import StorySection from "@/components/service/wedding-car/StorySection";
import Services from "@/components/service/wedding-car/Services";
import Fleet from "@/components/service/wedding-car/Fleet";
import DecorationOptions from "@/components/service/wedding-car/DecorationOptions";
import WhyChooseUs from "@/components/service/wedding-car/WhyChooseUs";
import BookingProcess from "@/components/service/wedding-car/BookingProcess";
import ServiceAreas from "@/components/service/wedding-car/ServiceAreas";
import FAQ from "@/components/service/wedding-car/FAQ";
import CTA from "@/components/service/wedding-car/CTA";

export const metadata: Metadata = {
  title:
    "Wedding Car Rental Lucknow | Luxury Wedding Cars | Kuldeep Travels",

  description:
    "Book premium wedding car rental in Lucknow with Kuldeep Travels. Luxury sedans, SUVs, Innova Crysta, Tempo Travellers, Mini Buses and destination wedding transportation with professional chauffeurs.",

  keywords: [
    "Wedding Car Rental Lucknow",
    "Luxury Wedding Car Lucknow",
    "Wedding Cab Service Lucknow",
    "Bridal Car Rental",
    "Wedding Transportation Lucknow",
    "Wedding Vehicle Rental",
    "Luxury Wedding Cars",
    "Wedding Car Booking Lucknow",
    "Bride Car Rental",
    "Groom Entry Car",
    "Wedding Tempo Traveller",
    "Wedding Innova Crysta",
    "Destination Wedding Transport",
  ],

  alternates: {
    canonical:
      "https://kuldeeptravels.com/services/wedding-car-rental",
  },

  openGraph: {
    title:
      "Wedding Car Rental Lucknow | Kuldeep Travels",

    description:
      "Luxury wedding cars with professional chauffeurs for weddings, receptions, engagements and destination weddings.",

    url:
      "https://kuldeeptravels.com/services/wedding-car-rental",

    siteName: "Kuldeep Travels",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/images/wedding/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Wedding Car Rental Lucknow",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Wedding Car Rental Lucknow | Kuldeep Travels",

    description:
      "Premium Wedding Transportation in Lucknow.",

    images: ["/images/wedding/hero.jpg"],
  },
};

export default function WeddingCarRentalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Wedding Car Rental",

              provider: {
                "@type": "LocalBusiness",
                name: "Kuldeep Travels",
                url: "https://kuldeeptravels.com",
              },

              areaServed: {
                "@type": "City",
                name: "Lucknow",
              },

              description:
                "Luxury wedding car rental services including sedans, SUVs, Innova Crysta, Tempo Traveller, Mini Bus and destination wedding transportation.",
            },

            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",

              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://kuldeeptravels.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Services",
                  item: "https://kuldeeptravels.com/services",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Wedding Car Rental",
                  item:
                    "https://kuldeeptravels.com/services/wedding-car-rental",
                },
              ],
            },

            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",
                  name: "Which cars are available for weddings?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Luxury Sedans, Premium SUVs, Innova Crysta, Tempo Traveller, Mini Bus and Luxury Coaches.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I book multiple wedding vehicles?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes. Separate vehicles can be arranged for bride, groom, family members and wedding guests.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide decorated wedding cars?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes. We provide flower decoration, ribbon styling and customized wedding themes.",
                  },
                },
                {
                  "@type": "Question",
                  name:
                    "Do you provide destination wedding transportation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes. Transportation is available throughout Uttar Pradesh and nearby destinations.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <main className="overflow-hidden bg-white">
        <Hero />
        <StorySection />
        <Services />
        <Fleet />
        <DecorationOptions />
        <WhyChooseUs />
        <BookingProcess />
        <ServiceAreas />
        <FAQ />
        <CTA />
      </main>
    </>
  );
}
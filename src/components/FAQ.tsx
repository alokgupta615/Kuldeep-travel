import React from "react";

const faqs = [
  {
    question: "Why should I choose Kuldeep Travels?",
    answer:
      "We offer fixed pricing, verified drivers, clean cars, and reliable pay-after-service taxi booking in Lucknow.",
  },
  {
    question: "Do you provide airport pickup and drop service?",
    answer:
      "Yes, we provide airport pickup and drop with flight tracking and a name placard service at Lucknow Airport.",
  },
  {
    question: "Are your prices fixed or dynamic?",
    answer:
      "All our taxi fares are fixed and transparent. We do not use surge pricing or hidden charges.",
  },
  {
    question: "Can I pay after the trip?",
    answer:
      "Yes, you can pay after the service is completed using UPI, cash, card, or net banking.",
  },
];

export default function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <section className="bg-blue-50 py-16 px-4">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="bg-white border border-blue-200 rounded-lg shadow-sm p-5"
          >
            <summary className="cursor-pointer font-semibold text-blue-900">
              {faq.question}
            </summary>

            <p className="mt-3 text-gray-700 leading-relaxed">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </section>
  );
}
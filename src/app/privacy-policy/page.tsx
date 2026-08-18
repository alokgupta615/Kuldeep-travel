import React from "react";

export const metadata = {
  title: "Privacy Policy | Kuldeep Travels",
  description: "Read our privacy policy to understand how we collect and use your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 border-b pb-6">
          Privacy Policy
        </h1>
        
        <div className="space-y-6 text-slate-700 leading-relaxed">
          <p>
            At Kuldeep Travels, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our services.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Information We Collect</h2>
            <p>
              We collect personal information that you provide directly to us when making a booking or inquiry. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Name and contact details (email address, phone number).</li>
              <li>Pickup and drop-off locations, travel dates, and journey details.</li>
              <li>Payment and transaction details (processed securely via third-party gateways).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Process and manage your taxi or tour bookings.</li>
              <li>Communicate with you regarding your trip details, updates, and confirmations.</li>
              <li>Improve our services and enhance the user experience.</li>
              <li>Comply with legal and regulatory obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">3. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no data transmission over the internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Sharing Your Information</h2>
            <p>
              We do not sell or rent your personal data to third parties. We may share necessary information with our drivers and service partners strictly for the purpose of fulfilling your booking.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at <strong>kuldeeptravelslko@gmail.com</strong> or call us at <strong>09936408109</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

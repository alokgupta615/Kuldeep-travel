"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroFeatures from "./HeroFeatures";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <HeroBackground />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-8 lg:pt-40">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <HeroContent />

          {/* Right Side */}
          <HeroImage />
        </div>

        {/* Trust Features */}
        <div className="mt-20">
          <HeroFeatures />
        </div>
      </div>
    </section>
  );
}
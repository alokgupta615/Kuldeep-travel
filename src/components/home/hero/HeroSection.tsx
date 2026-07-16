"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroBooking from "./HeroBooking";
import HeroStats from "./HeroStats";
import HeroFeatures from "./HeroFeatures";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-8 lg:pt-40">

        {/* Hero Grid */}

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>
            <HeroContent />
            <HeroStats />
          </div>

          {/* Right */}

          <HeroBooking />

        </div>

        {/* Features */}

        <HeroFeatures />

      </div>
    </section>
  );
}
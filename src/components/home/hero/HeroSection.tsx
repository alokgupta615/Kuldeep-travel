"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent/HeroContent";
import HeroStats from "./HeroStats";
import HeroFeatures from "./HeroFeatures";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-8 lg:pt-40">

        <HeroContent />

        <HeroStats />

        <HeroFeatures />

      </div>
    </section>
  );
}
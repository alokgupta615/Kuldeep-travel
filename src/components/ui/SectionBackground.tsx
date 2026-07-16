"use client";

import AnimatedShapes from "./AnimatedShapes";

interface SectionBackgroundProps {
  variant?: "hero" | "light" | "blue" | "dark";
  animated?: boolean;
}

export default function SectionBackground({
  variant = "light",
  animated = false,
}: SectionBackgroundProps) {
  if (variant === "hero") {
    return (
      <>
        {/* Premium Hero Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050816] via-[#0B1438] to-[#1E3A8A]" />

        {/* Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_65%)]" />

        {/* Top Left Glow */}
        <div className="absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-yellow-400/12 blur-[180px]" />

        {/* Bottom Right Glow */}
        <div className="absolute -bottom-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-blue-500/18 blur-[200px]" />

        {/* Center Glow */}
        <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[180px]" />

        {/* Dot Pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Soft Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

        {animated && <AnimatedShapes />}
      </>
    );
  }

  if (variant === "blue") {
    return (
      <>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700" />

        <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-blue-500/20 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-yellow-400/10 blur-[160px]" />

        {animated && <AnimatedShapes />}
      </>
    );
  }

  if (variant === "dark") {
    return (
      <>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />

        <div className="absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-[160px]" />

        {animated && <AnimatedShapes />}
      </>
    );
  }

  // Light Section Background
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-yellow-400/5 blur-[140px]" />

      {animated && <AnimatedShapes />}
    </>
  );
}
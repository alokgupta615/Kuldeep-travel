"use client";

import AnimatedShapes from "./AnimatedShapes";
import GlowEffects from "./GlowEffects";

interface SectionBackgroundProps {
  variant?: "light" | "blue" | "dark";
  animated?: boolean;
  glow?: boolean;
}

export default function SectionBackground({
  variant = "light",
  animated = true,
  glow = true,
}: SectionBackgroundProps) {
  const backgrounds = {
    light:
      "bg-gradient-to-br from-slate-50 via-white to-blue-50",

    blue:
      "bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700",

    dark:
      "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800",
  };

  return (
    <>
      <div
        className={`absolute inset-0 ${backgrounds[variant]}`}
      />

      {glow && (
        <GlowEffects
          color={variant === "light" ? "blue" : "mixed"}
        />
      )}

      {animated && <AnimatedShapes />}
    </>
  );
}
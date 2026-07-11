"use client";

interface GlowEffectsProps {
  color?: "blue" | "yellow" | "mixed";
}

export default function GlowEffects({
  color = "mixed",
}: GlowEffectsProps) {
  return (
    <>
      {(color === "blue" || color === "mixed") && (
        <>
          <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-[120px]" />

          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-700/20 blur-[140px]" />
        </>
      )}

      {(color === "yellow" || color === "mixed") && (
        <>
          <div className="absolute right-24 top-20 h-60 w-60 rounded-full bg-yellow-400/20 blur-[120px]" />

          <div className="absolute bottom-16 left-32 h-72 w-72 rounded-full bg-yellow-300/10 blur-[120px]" />
        </>
      )}
    </>
  );
}
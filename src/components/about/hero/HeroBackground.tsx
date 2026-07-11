"use client";

export default function HeroBackground() {
  return (
    <>
      {/* Main Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Top Left Glow */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-yellow-400/20 blur-3xl animate-pulse" />

      {/* Bottom Right Glow */}
      <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-blue-400/20 blur-3xl animate-pulse" />

      {/* Center Glow */}
      <div className="absolute top-1/3 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      {/* Decorative Dot Pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

      {/* Subtle Border */}
      <div className="absolute inset-0 border border-white/5" />
    </>
  );
}
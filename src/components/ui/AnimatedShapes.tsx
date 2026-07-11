"use client";

export default function AnimatedShapes() {
  return (
    <>
      {/* Circle */}
      <div className="absolute left-10 top-24 h-24 w-24 animate-[float_8s_ease-in-out_infinite] rounded-full border border-white/10 bg-white/5 backdrop-blur-sm" />

      {/* Square */}
      <div className="absolute right-20 top-40 h-16 w-16 animate-[float_10s_ease-in-out_infinite] rotate-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm" />

      {/* Small Circle */}
      <div className="absolute bottom-32 left-1/4 h-10 w-10 animate-[float_6s_ease-in-out_infinite] rounded-full bg-yellow-400/20" />

      {/* Diamond */}
      <div className="absolute bottom-24 right-1/4 h-20 w-20 animate-[float_12s_ease-in-out_infinite] rotate-45 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm" />

      {/* Large Circle */}
      <div className="absolute right-10 bottom-16 h-40 w-40 animate-[float_14s_ease-in-out_infinite] rounded-full border border-white/5 bg-white/5 blur-sm" />
    </>
  );
}
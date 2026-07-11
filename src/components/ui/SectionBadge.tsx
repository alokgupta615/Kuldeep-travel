"use client";

import clsx from "clsx";

interface SectionBadgeProps {
  children: React.ReactNode;
  color?: "blue" | "yellow" | "white";
}

export default function SectionBadge({
  children,
  color = "blue",
}: SectionBadgeProps) {
  const colors = {
    blue:
      "bg-blue-100 text-blue-700",
    yellow:
      "bg-yellow-100 text-yellow-700",
    white:
      "bg-white/20 text-white backdrop-blur",
  };

  return (
    <span
      className={clsx(
        "inline-flex rounded-full px-4 py-2 text-sm font-semibold",
        colors[color]
      )}
    >
      {children}
    </span>
  );
}
"use client";

import SectionBadge from "./SectionBadge";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
  badgeColor?: "blue" | "yellow" | "white";
}

export default function SectionHeading({
  badge,
  title,
  description,
  center = true,
  badgeColor = "blue",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${
        center ? "mx-auto text-center" : ""
      }`}
    >
      {badge && (
        <SectionBadge color={badgeColor}>
          {badge}
        </SectionBadge>
      )}

      <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}
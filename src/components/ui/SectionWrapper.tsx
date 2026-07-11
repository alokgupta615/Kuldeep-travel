"use client";

import { ReactNode } from "react";
import clsx from "clsx";

import Container from "./Container";
import SectionBackground from "./SectionBackground";

interface SectionWrapperProps {
  children: ReactNode;

  className?: string;

  background?: "light" | "blue" | "dark";

  animated?: boolean;

  glow?: boolean;

  container?: boolean;
}

export default function SectionWrapper({
  children,
  className,
  background = "light",
  animated = false,
  glow = false,
  container = true,
}: SectionWrapperProps) {
  return (
    <section
      className={clsx(
        "relative overflow-hidden py-24",
        className
      )}
    >
      <SectionBackground
        variant={background}
        animated={animated}
        glow={glow}
      />

      {container ? (
        <Container className="relative z-10">
          {children}
        </Container>
      ) : (
        <div className="relative z-10">{children}</div>
      )}
    </section>
  );
}
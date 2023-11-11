"use client";
import { useGradient } from "@/hooks/useGradient";
import { useRef } from "react";

type PageHeaderProps = {
  children?: React.ReactNode;
};

export const PageHeader = ({ children }: PageHeaderProps) => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const gradientColors = useGradient(headingRef, [
    "#ffd597",
    "#e77d8d",
    "#110b57",
  ]);

  return (
    <h1
      ref={headingRef}
      style={{
        background: `linear-gradient(0deg, ${gradientColors})`,
        WebkitTextFillColor: "transparent",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        wordSpacing: 5,
        transition: "all ease-in-out 0.2s",
        fontWeight: "800",
      }}
    >
      {children}
    </h1>
  );
};

"use client";
import { useGradient } from "@/hooks/useGradient";
import { useRef } from "react";

type SectionHeaderProps = {
  title: string;
};

export const SectionHeader = ({ title }: SectionHeaderProps) => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const gradientColors = useGradient(headingRef, [
    "#ffd597",
    "#e77d8d",
    "#110b57",
  ]);

  return <h1 ref={headingRef}>{title}</h1>;
};

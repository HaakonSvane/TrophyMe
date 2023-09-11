import { useGradient } from "@/hooks/useGradient";
import { Heading } from "@primer/react";
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

  return (
    <Heading
      as="h3"
      ref={headingRef}
      sx={{
        background: `linear-gradient(0deg, ${gradientColors})`,
        WebkitTextFillColor: "transparent",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        wordSpacing: 5,
        transition: "all ease-in-out 0.2s",
        fontWeight: "800",
      }}
      //   style={{
      //     background: `linear-gradient(${90}deg, ${"white"})`,
      //     backgroundClip: "text",
      //     WebkitBackgroundClip: "text",
      //     WebkitTextFillColor: "transparent",
      //     color: "transparent",
      //     transition: "all ease-in-out 0.2s",
      //   }}
    >
      {title}
    </Heading>
  );
};

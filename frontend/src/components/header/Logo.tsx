import { Heading } from "@primer/react";

export const Logo = () => {
  return (
    <Heading
      sx={{
        background:
          "-webkit-gradient(linear,left top, left bottom,from(#ffd597),to(#e77d8d))",
        WebkitTextFillColor: "transparent",
        WebkitBackgroundClip: "text",
        fontWeight: "800",
        textTransform: "lowercase",
        wordSpacing: 5,
      }}
    >
      troji.me
    </Heading>
  );
};

"use client";

import { BaseStyles, ThemeProvider, theme } from "@primer/react";
import { PropsWithChildren } from "react";
import { HeaderComponent } from "./HeaderComponents";
import { merge } from "@primer/react";

export const MainComponent = ({ children }: PropsWithChildren) => {
  const customTheme = merge(theme, {});
  return (
    <ThemeProvider>
      <BaseStyles>
        <HeaderComponent />
        {children}
      </BaseStyles>
    </ThemeProvider>
  );
};

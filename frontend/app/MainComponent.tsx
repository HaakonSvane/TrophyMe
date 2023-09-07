"use client";

import { BaseStyles, ThemeProvider, theme } from "@primer/react";
import { PropsWithChildren } from "react";
import { Header } from "./_components/header";
import { merge } from "@primer/react";
import { Poppins } from "next/font/google";
import { RelayEnvironmentProvider } from "react-relay";
import { getCurrentEnvironment } from "./_relay/environment";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const MainComponent = ({ children }: PropsWithChildren) => {
  const customTheme = merge(theme, {
    fonts: {
      normal: `${poppins.style.fontFamily}`,
    },
  });
  const relayEnvironment = getCurrentEnvironment();
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <ThemeProvider
        colorMode="night"
        nightScheme="dark_dimmed"
        preventSSRMismatch
        theme={customTheme}
      >
        <BaseStyles>
          <Header />
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 py-6">
            {children}
          </div>
        </BaseStyles>
      </ThemeProvider>
    </RelayEnvironmentProvider>
  );
};

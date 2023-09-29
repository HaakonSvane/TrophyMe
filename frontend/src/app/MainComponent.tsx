"use client";

import { BaseStyles, ThemeProvider, theme } from "@primer/react";
import { PropsWithChildren } from "react";
import { merge } from "@primer/react";
import { Poppins } from "next/font/google";
import { RelayEnvironmentProvider } from "react-relay";
import { getCurrentEnvironment } from "@/relay/environment";
import { DefaultToastOptions } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { HiCheckBadge, HiExclamationTriangle } from "react-icons/hi2";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { FatalError } from "@/components/errors/FatalError";
import { SessionProvider } from "next-auth/react";

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

  const toastOptions: DefaultToastOptions = {
    style: {
      fontFamily: poppins.style.fontFamily,
    },
    success: {
      icon: HiCheckBadge,
      style: {
        background: "bg-success",
      },
    },
    error: {
      icon: HiExclamationTriangle,
      style: {
        background: "bg-danger",
      },
    },
  };

  const fallbackRender = ({ error }: FallbackProps) => (
    <FatalError error={error} />
  );

  const relayEnvironment = getCurrentEnvironment();
  return (
    <SessionProvider>
      <RelayEnvironmentProvider environment={relayEnvironment}>
        <ThemeProvider
          colorMode="night"
          nightScheme="dark_dimmed"
          preventSSRMismatch
          theme={customTheme}
        >
          <BaseStyles>
            <ErrorBoundary fallbackRender={fallbackRender}>
              <Toaster toastOptions={toastOptions} />
              {children}
            </ErrorBoundary>
          </BaseStyles>
        </ThemeProvider>
      </RelayEnvironmentProvider>
    </SessionProvider>
  );
};

"use client";
import { PropsWithChildren } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { getCurrentEnvironment } from "@/relay/environment";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { FatalError } from "@/components/errors/FatalError";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export const MainComponent = ({ children }: PropsWithChildren) => {
  const fallbackRender = ({ error }: FallbackProps) => (
    <FatalError error={error} />
  );

  const relayEnvironment = getCurrentEnvironment();
  return (
    <SessionProvider>
      <RelayEnvironmentProvider environment={relayEnvironment}>
        <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <ErrorBoundary fallbackRender={fallbackRender}>
            {children}
          </ErrorBoundary>
        </NextThemesProvider>
      </RelayEnvironmentProvider>
    </SessionProvider>
  );
};

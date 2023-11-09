import "./globals.css";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { MainComponent } from "./MainComponent";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "troji",
  description: "Track your emoji trophies!",
};

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--poppins",
});

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background poppins antialiased",
          poppins.variable
        )}
      >
        <MainComponent>{children}</MainComponent>
      </body>
    </html>
  );
};

export default RootLayout;

import "./globals.css";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { MainComponent } from "./MainComponent";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";

export const metadata: Metadata = {
    title: "troji",
    description: "Track your emoji trophies!",
};

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
    variable: "--font-sans",
});

const RootLayout = ({ children }: PropsWithChildren) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn("min-h-screen bg-background font-sans antialiased", poppins.variable)}
            >
                <Toaster richColors />
                <MainComponent>{children}</MainComponent>
            </body>
        </html>
    );
};

export default RootLayout;

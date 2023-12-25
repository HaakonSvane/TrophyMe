"use client";
import { useGradient } from "@/hooks/useGradient";
import { cn } from "@/lib/utils";
import { HTMLProps, useRef } from "react";

type PageHeaderProps = {
    children?: React.ReactNode;
};

export const PageHeader = ({ children, ...rest }: PageHeaderProps & HTMLProps<HTMLElement>) => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const gradientColors = useGradient(headingRef, ["#ffd597", "#e77d8d", "#110b57"]);

    return (
        <h1
            {...rest}
            ref={headingRef}
            style={{
                background: `linear-gradient(0deg, ${gradientColors})`,
                wordSpacing: 5,
                transition: "all ease-in-out 0.2s",
            }}
            className={cn("inline-block text-transparent !bg-clip-text", rest.className)}
        >
            {children}
        </h1>
    );
};

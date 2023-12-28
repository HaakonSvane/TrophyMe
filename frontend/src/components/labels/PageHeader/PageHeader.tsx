"use client";
import { cn } from "@/lib/utils";

export const PageHeader = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("flex flex-col space-y-1.5", props.className)} {...props} />
);

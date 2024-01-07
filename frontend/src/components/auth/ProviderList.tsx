"use client";
import { ProviderButton } from "./ProviderButton";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { useProviders } from "@/lib/auth";

export const ProviderList = () => {
    const searchParams = useSearchParams();
    const from = searchParams.get("from") ?? "/dashboard";
    const providers = useProviders();
    if (!providers) return;
    return (
        <>
            {Object.values(providers).map(provider => (
                <ProviderButton
                    key={provider.id}
                    provider={provider}
                    callbackUrl={from}
                    className={cn("w-full", "justify-center")}
                />
            ))}
        </>
    );
};

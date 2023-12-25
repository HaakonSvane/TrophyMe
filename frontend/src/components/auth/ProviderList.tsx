"use client";
import { suspendablePromise } from "@/lib/suspendablePromise";
import { getProviders } from "next-auth/react";
import { ProviderButton } from "./ProviderButton";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

const providerResource = suspendablePromise(getProviders());

export const ProviderList = () => {
    const searchParams = useSearchParams();
    const from = searchParams.get("from") ?? "/dashboard";
    const providers = providerResource.read();
    if (!providers) return;
    return (
        <>
            {Object.values(providers).map(provider => (
                <ProviderButton
                    key={provider.name}
                    provider={provider}
                    callbackUrl={from}
                    className={cn("w-full", "justify-center")}
                />
            ))}
        </>
    );
};

"use client";

import { suspendablePromise } from "../suspendablePromise";

type ProviderInfo = {
    id: string;
    name: string;
    type: string;
    signinUrl: string;
    callbackUrl: string;
};
const getProviders = async () => {
    const response = await fetch("api/auth/providers");
    if (!response.ok) throw new Error("Could not fetch providers from server side!");
    return (await response.json()) as Record<string, ProviderInfo>;
};
const providerResource = suspendablePromise(getProviders());

export const useProviders = () => {
    return providerResource.read();
};

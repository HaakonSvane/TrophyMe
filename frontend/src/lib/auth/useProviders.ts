import { AuthProvider } from "@/types/auth";
import { useSuspendablePromise } from "@/hooks/useSuspendablePromise";

const getProviders = async () => {
    const response = await fetch("/api/auth/providers");
    if (!response.ok) throw new Error("Could not fetch providers from server side!");
    return (await response.json()) as Record<string, AuthProvider>;
};

export const useProviders = () => {
    const providerResource = useSuspendablePromise(getProviders);
    return providerResource?.read();
};

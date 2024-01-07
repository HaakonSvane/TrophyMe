"use client";
import { signIn } from "next-auth/react";
import { Button, ButtonProps } from "@/components/ui/button";
import { AiOutlineGoogle, AiOutlineQuestion } from "react-icons/ai";
import { LucideIcon } from "lucide-react";
import { AuthProvider } from "@/types/auth";

const getIconForProviderName = (name: string): LucideIcon => {
    const normalizedName = name.toLowerCase();
    switch (normalizedName) {
        case "google":
            return AiOutlineGoogle;
        default:
            return AiOutlineQuestion;
    }
};

export type ProviderButtonProps = {
    provider: AuthProvider;
    callbackUrl?: string;
};

export const ProviderButton = ({
    provider,
    callbackUrl,
    ...rest
}: ProviderButtonProps & ButtonProps) => {
    console.log("callbackurl", callbackUrl);
    return (
        <Button
            {...rest}
            variant="secondary"
            aria-label={`Sign in with ${provider.name}`}
            onClick={() => signIn(provider.id, { callbackUrl })}
            leadingIcon={getIconForProviderName(provider.name)}
        >
            {`Sign in with ${provider.name}`}
        </Button>
    );
};

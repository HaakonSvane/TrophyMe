import { signIn, type ClientSafeProvider } from "next-auth/react";
import { Button, ButtonProps } from "@/components/ui/button";
import { AiOutlineGoogle, AiOutlineQuestion } from "react-icons/ai";
import { HTMLProps } from "react";

const getIconForProviderName = (name: string) => {
    switch (name) {
        case "google":
            return AiOutlineGoogle;
        default:
            AiOutlineQuestion;
    }
};
type ProviderIconProps = {
    name: string;
};
const ProviderIcon = ({ name }: ProviderIconProps) => {
    const Icon = getIconForProviderName(name.toLowerCase());
    return <Icon />;
};

export type ProviderButtonProps = {
    provider: ClientSafeProvider;
    callbackUrl?: string;
};

export const ProviderButton = ({
    provider,
    callbackUrl,
    ...rest
}: ProviderButtonProps & ButtonProps) => {
    return (
        <Button
            {...rest}
            variant="secondary"
            aria-label={`Sign in with ${provider.name}`}
            onClick={() => signIn(provider.id, { callbackUrl })}
            leadingIcon={<ProviderIcon name={provider.name} />}
        >
            {`Sign in with ${provider.name}`}
        </Button>
    );
};

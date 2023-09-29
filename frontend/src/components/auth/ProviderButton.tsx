"use client";
import { signIn, type ClientSafeProvider } from "next-auth/react";
import { Button } from "@primer/react";
import { AiOutlineGoogle, AiOutlineQuestion } from "react-icons/ai";

const getIconForProviderName = (name: string) => {
  switch (name) {
    case "google":
      return AiOutlineGoogle;
    default:
      AiOutlineQuestion;
  }
};

export type ProviderButtonProps = {
  provider: ClientSafeProvider;
  callbackUrl?: string;
};

export const ProviderButton = ({
  provider,
  callbackUrl,
}: ProviderButtonProps) => {
  return (
    <Button
      aria-label={`Sign in with ${provider.name}`}
      size="large"
      block
      onClick={() => signIn(provider.id, { callbackUrl })}
      leadingIcon={getIconForProviderName(provider.name.toLowerCase())}
    >{`Sign in with ${provider.name}`}</Button>
  );
};

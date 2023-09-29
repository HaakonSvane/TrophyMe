"use client";
import { suspendablePromise } from "@/lib/suspendablePromise";
import { getProviders } from "next-auth/react";
import { ProviderButton } from "./ProviderButton";
import { useParams, useSearchParams } from "next/navigation";

const providerResource = suspendablePromise(getProviders());

export const ProviderList = () => {
  const searchParams = useSearchParams();
  const from = searchParams.get("from") ?? undefined;
  const providers = providerResource.read();
  if (!providers) return;
  return (
    <>
      {Object.values(providers).map((provider) => (
        <ProviderButton
          key={provider.name}
          provider={provider}
          callbackUrl={from}
        />
      ))}
    </>
  );
};

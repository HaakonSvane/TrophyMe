"use client";
import { suspendablePromise } from "@/lib/suspendablePromise";
import { DependencyList, useEffect, useState } from "react";

export const useSuspendablePromise = <T>(
    asyncFunction: () => Promise<T>,
    dependencies: DependencyList = [],
) => {
    const [resource, setResource] = useState<ReturnType<typeof suspendablePromise<T>>>();

    useEffect(() => {
        const promise = asyncFunction();
        const suspendable = suspendablePromise<T>(promise);
        setResource(suspendable);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);

    return resource;
};

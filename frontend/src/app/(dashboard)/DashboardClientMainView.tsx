"use client";

import { Header } from "@/components/header";
import DashboardQueryNode, { pageDashboardQuery } from "@/generated/pageDashboardQuery.graphql";
import { getCurrentEnvironment } from "@/relay/environment";
import { SerializablePreloadedQuery } from "@/relay/loadSerializableQuery";
import { useSerializablePreloadedQuery } from "@/relay/useSerializablePreloadedQuery";
import { PropsWithChildren } from "react";
import { DashboardQueryProvider } from "./DashboardQueryProvider";

type DashboardClientMainViewProps = {
    preloadedQuery: SerializablePreloadedQuery<typeof DashboardQueryNode, pageDashboardQuery>;
};

export const DashboardClientMainView = ({
    children,
    preloadedQuery,
}: PropsWithChildren<DashboardClientMainViewProps>) => {
    const environment = getCurrentEnvironment();
    const queryRef = useSerializablePreloadedQuery(environment, preloadedQuery);
    return (
        <DashboardQueryProvider queryRef={queryRef}>
            <Header queryRef={queryRef} />
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 py-6">{children}</div>
        </DashboardQueryProvider>
    );
};

import { pageDashboardQuery } from "@/generated/pageDashboardQuery.graphql";
import { PropsWithChildren, createContext, useContext } from "react";
import { PreloadedQuery } from "react-relay";

type DashboardRootQueryRef = PreloadedQuery<pageDashboardQuery>;

const DashboardQueryContext = createContext<{
    queryRef?: DashboardRootQueryRef;
}>({});

export const DashboardQueryProvider = ({
    queryRef,
    children,
}: PropsWithChildren<{ queryRef: DashboardRootQueryRef }>) => {
    return (
        <DashboardQueryContext.Provider value={{ queryRef }}>
            {children}
        </DashboardQueryContext.Provider>
    );
};

export function useDashboardQuery() {
    const context = useContext(DashboardQueryContext);
    if (context === undefined) {
        throw new Error("useCounter must be used within a CounterProvider");
    }

    if (!context.queryRef) {
        throw new Error("tried accessing the root query ref but got undefined");
    }
    return context.queryRef;
}

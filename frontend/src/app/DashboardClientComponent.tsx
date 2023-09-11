"use client";
import { Dashboard } from "@/components/dashboard";
import DashboardQueryNode, {
  dashboardQuery,
} from "@/generated/dashboardQuery.graphql";
import { SerializablePreloadedQuery } from "@/relay/loadSerializableQuery";
import { useSerializablePreloadedQuery } from "@/relay/useSerializablePreloadedQuery";
import { ErrorBoundary } from "react-error-boundary";
import { useRelayEnvironment } from "react-relay";

type DashboardClientComponentProps = {
  preloadedQuery: SerializablePreloadedQuery<
    typeof DashboardQueryNode,
    dashboardQuery
  >;
};

export const DashboardClientComponent = ({
  preloadedQuery,
}: DashboardClientComponentProps) => {
  const environment = useRelayEnvironment();
  const queryRef = useSerializablePreloadedQuery(environment, preloadedQuery);
  return <Dashboard queryRef={queryRef} />;
};

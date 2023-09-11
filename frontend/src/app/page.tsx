import { loadSerializableQuery } from "@/relay/loadSerializableQuery";
import DashboardQueryNode, {
  dashboardQuery,
} from "../__generated__/dashboardQuery.graphql";
import { Dashboard } from "@/components/dashboard";

const Page = async () => {
  const preloadedQuery = await loadSerializableQuery<
    typeof DashboardQueryNode,
    dashboardQuery
  >(DashboardQueryNode.params, {});
  return <Dashboard preloadedQuery={preloadedQuery} />;
};
export default Page;

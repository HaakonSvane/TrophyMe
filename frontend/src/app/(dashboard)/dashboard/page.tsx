import { loadSerializableQuery } from "@/relay/loadSerializableQuery";
import DashboardQueryNode, {
  dashboardQuery,
} from "@/generated/dashboardQuery.graphql";
import { DashboardClientComponent } from "./DashboardClientComponent";

const DashboardPage = async () => {
  const preloadedQuery = await loadSerializableQuery<
    typeof DashboardQueryNode,
    dashboardQuery
  >(DashboardQueryNode.params, {});
  return <DashboardClientComponent preloadedQuery={preloadedQuery} />;
};
export default DashboardPage;

import { loadSerializableQuery } from "@/relay/loadSerializableQuery";
import DashboardQueryNode, {
  dashboardQuery,
} from "@/generated/dashboardQuery.graphql";
import { DashboardClientComponnet } from "./DashboardClientComponent";

const DashboardPage = async () => {
  const preloadedQuery = await loadSerializableQuery<
    typeof DashboardQueryNode,
    dashboardQuery
  >(DashboardQueryNode.params, {});
  return <DashboardClientComponnet preloadedQuery={preloadedQuery} />;
};
export default DashboardPage;

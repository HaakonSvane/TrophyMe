import { loadSerializableQuery } from "@/relay/loadSerializableQuery";
import DashboardQueryNode, {
  dashboardQuery,
} from "../__generated__/dashboardQuery.graphql";
import { DashboardClientComponent } from "./DashboardClientComponent";

const Page = async () => {
  const preloadedQuery = await loadSerializableQuery<
    typeof DashboardQueryNode,
    dashboardQuery
  >(DashboardQueryNode.params, {});
  return <DashboardClientComponent preloadedQuery={preloadedQuery} />;
};
export default Page;

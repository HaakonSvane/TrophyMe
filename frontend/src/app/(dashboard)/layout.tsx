import DashboardQueryNode, { pageDashboardQuery } from "@/generated/pageDashboardQuery.graphql";
import { loadSerializableQuery } from "@/relay/loadSerializableQuery";
import { DashboardClientMainView } from "./DashboardClientMainView";

const MainSiteLayout = async ({ children }: React.PropsWithChildren) => {
    const preloadedQuery = await loadSerializableQuery<
        typeof DashboardQueryNode,
        pageDashboardQuery
    >(DashboardQueryNode.params, {});
    return (
        <DashboardClientMainView preloadedQuery={preloadedQuery}>
            {children}
        </DashboardClientMainView>
    );
};

export default MainSiteLayout;

export const revalidate = 0;

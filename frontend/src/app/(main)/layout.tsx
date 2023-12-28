import { loadSerializableQuery } from "@/relay/loadSerializableQuery";
import { DashboardClientMainView } from "./DashboardClientMainView";
import HeaderQueryNode, { HeaderQuery } from "@/generated/HeaderQuery.graphql";

const MainSiteLayout = async ({ children }: React.PropsWithChildren) => {
    const preloadedQuery = await loadSerializableQuery<typeof HeaderQueryNode, HeaderQuery>(
        HeaderQueryNode.params,
        {},
    );
    return (
        <DashboardClientMainView preloadedHeaderQuery={preloadedQuery}>
            {children}
        </DashboardClientMainView>
    );
};

export default MainSiteLayout;

export const revalidate = 0;

import { loadSerializableQuery } from "@/relay/loadSerializableQuery";
import { GroupsQuery } from "./Groups";
import GroupsPageQueryNode, { GroupsPageQuery } from "@/__generated__/GroupsPageQuery.graphql";

const GroupPage = async () => {
    const preloadedDashboardQuery = await loadSerializableQuery<
        typeof GroupsPageQueryNode,
        GroupsPageQuery
    >(GroupsPageQueryNode.params, {});
    return <GroupsQuery preloadedQuery={preloadedDashboardQuery} />;
};

export default GroupPage;

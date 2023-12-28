import GroupQueryNode, { GroupPageQuery } from "@/__generated__/GroupPageQuery.graphql";
import { loadSerializableQuery } from "@/relay/loadSerializableQuery";
import { GroupQuery } from "./Group";

const GroupPage = async ({ params }: { params: { id: string } }) => {
    const preloadedGroupQuery = await loadSerializableQuery<typeof GroupQueryNode, GroupPageQuery>(
        GroupQueryNode.params,
        { groupId: params.id },
    );
    return <GroupQuery preloadedQuery={preloadedGroupQuery} />;
};

export default GroupPage;

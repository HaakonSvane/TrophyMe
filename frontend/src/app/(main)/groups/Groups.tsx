"use client";

import { PageDescription, PageHeader, PageTitle } from "@/components/labels/PageHeader";
import { graphql, usePreloadedQuery } from "react-relay";
import { MyGroups } from "./components/MyGroups";
import { getCurrentEnvironment } from "@/relay/environment";
import { useSerializablePreloadedQuery } from "@/relay/useSerializablePreloadedQuery";
import { SerializablePreloadedQuery } from "@/relay/loadSerializableQuery";
import GroupsPageQueryNode, { GroupsPageQuery } from "@/__generated__/GroupsPageQuery.graphql";

const GroupsPageQuery = graphql`
    query GroupsPageQuery {
        me {
            ...MyGroupsFragment
        }
    }
`;

type GroupsQueryProps = {
    preloadedQuery: SerializablePreloadedQuery<typeof GroupsPageQueryNode, GroupsPageQuery>;
};

export const GroupsQuery = ({ preloadedQuery }: GroupsQueryProps) => {
    const environment = getCurrentEnvironment();
    const queryRef = useSerializablePreloadedQuery(environment, preloadedQuery);
    const data = usePreloadedQuery(GroupsPageQuery, queryRef);

    return (
        <>
            <PageHeader>
                <PageTitle>Groups</PageTitle>
                <PageDescription>All your groups, joined or created</PageDescription>
            </PageHeader>
            <MyGroups fragmentKey={data.me} />
        </>
    );
};

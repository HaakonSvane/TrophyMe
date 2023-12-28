"use client";

import { SerializablePreloadedQuery } from "@/relay/loadSerializableQuery";
import { graphql, usePreloadedQuery } from "react-relay";
import GroupPageQueryNode, { GroupPageQuery } from "@/__generated__/GroupPageQuery.graphql";
import { getCurrentEnvironment } from "@/relay/environment";
import { useSerializablePreloadedQuery } from "@/relay/useSerializablePreloadedQuery";

const GroupPageQuery = graphql`
    query GroupPageQuery($groupId: ID!) {
        groupById(id: $groupId) {
            id
            name
        }
    }
`;

type GroupQueryProps = {
    preloadedQuery: SerializablePreloadedQuery<typeof GroupPageQueryNode, GroupPageQuery>;
};

export const GroupQuery = ({ preloadedQuery }: GroupQueryProps) => {
    const environment = getCurrentEnvironment();
    const queryRef = useSerializablePreloadedQuery(environment, preloadedQuery);
    const data = usePreloadedQuery(GroupPageQuery, queryRef);
    console.log(data.groupById?.id);
    return <p>{data.groupById?.name}</p>;
};

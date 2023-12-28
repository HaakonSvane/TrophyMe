import { MyGroupsFragment$key } from "@/__generated__/MyGroupsFragment.graphql";
import { graphql, useFragment } from "react-relay";
import { GroupBox } from "./GroupBox";

const MyGroupsFragment = graphql`
    fragment MyGroupsFragment on User {
        groups(first: 10) @connection(key: "GroupsFragment_groups") {
            __id
            totalCount
            edges {
                node {
                    id
                    ...GroupBoxFragment
                }
            }
        }
    }
`;

type MyGroupsProps = {
    fragmentKey: MyGroupsFragment$key;
};

export const MyGroups = ({ fragmentKey }: MyGroupsProps) => {
    const data = useFragment(MyGroupsFragment, fragmentKey);
    return (
        <div className="grid gap-16">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {data.groups?.totalCount ? (
                    data.groups?.edges?.map(group => (
                        <GroupBox key={group.node.id} queryReference={group.node} />
                    ))
                ) : (
                    <p>
                        {
                            "You don't seem to be a member of a group yet. Create one and invite your friends!"
                        }
                    </p>
                )}
            </div>
        </div>
    );
};

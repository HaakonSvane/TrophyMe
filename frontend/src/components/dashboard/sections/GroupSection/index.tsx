import { graphql, useFragment } from "react-relay";
import { Section } from "../../Section";
import { DashboardGroup } from "./DashboardGroup";
import { GroupSectionFragment$key } from "@/__generated__/GroupSectionFragment.graphql";
import { cn } from "@/lib/utils";
import { AddGroupButton } from "./AddGroupButton";

const DashboardGroupSectionFragment = graphql`
    fragment GroupSectionFragment on User {
        groups(first: 50) @connection(key: "GroupSectionFragment_groups") {
            __id
            edges {
                node {
                    id
                    ...DashboardGroupFragment
                }
            }
        }
    }
`;

type GroupSectionProps = { queryReference: GroupSectionFragment$key };

export const GroupSection = ({ queryReference }: GroupSectionProps) => {
    const data = useFragment(DashboardGroupSectionFragment, queryReference);
    return (
        <Section
            title="groups"
            description={
                !data.groups?.edges?.length
                    ? "You don't seem to be a member of a group yet. Create one and invite your friends!"
                    : "Your most active groups"
            }
            trailingAdornment={
                <div className={cn("ml-4")}>
                    {<AddGroupButton groupsConnectionId={data.groups?.__id ?? ""} />}
                </div>
            }
        >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {data.groups?.edges?.map(group => (
                    <DashboardGroup key={group.node.id} queryReference={group.node} />
                ))}
            </div>
        </Section>
    );
};

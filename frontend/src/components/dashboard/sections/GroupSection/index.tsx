import { graphql, useFragment } from "react-relay";
import { Section } from "../../Section";
import { DashboardGroup } from "./DashboardGroup";
import { GroupSectionFragment$key } from "@/__generated__/GroupSectionFragment.graphql";
import { cn } from "@/lib/utils";
import { AddGroupButton } from "./AddGroupButton";

const DashboardGroupSectionFragment = graphql`
    fragment GroupSectionFragment on User {
        groups {
            id
            ...DashboardGroupFragment
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
                data.groups.length === 0
                    ? "You don't seem to be a member of a group yet. Create one and invite your friends!"
                    : "Your most active groups"
            }
            trailingAdornment={<div className={cn("ml-4")}>{<AddGroupButton />}</div>}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {data.groups.map(group => (
                    <DashboardGroup key={group.id} queryReference={group} />
                ))}
            </div>
        </Section>
    );
};

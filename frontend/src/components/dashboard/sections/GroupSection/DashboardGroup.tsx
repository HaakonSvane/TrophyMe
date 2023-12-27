import { graphql, useFragment } from "react-relay";
import { OutlinedBox } from "@/components/containers/OutlinedBox";
import { DashboardGroupFragment$key } from "@/generated/DashboardGroupFragment.graphql";
import { MemberRow } from "./MemberRow";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const DashboardFragment = graphql`
    fragment DashboardGroupFragment on Group {
        id
        name
        members {
            id
            ...MemberRowFragment
        }
    }
`;

type DashboardGroupProps = {
    queryReference: DashboardGroupFragment$key;
};

export const DashboardGroup = ({ queryReference }: DashboardGroupProps) => {
    const data = useFragment(DashboardFragment, queryReference);

    const renderGroupsSeleton = () =>
        [1, 2, 3].map(index => <Skeleton key={index} className="flex flex-1 h-6" />);

    return (
        <OutlinedBox title={data.name}>
            <div style={{ flexDirection: "row" }}>
                <Suspense fallback={renderGroupsSeleton()}>
                    {data.members.map(member => (
                        <MemberRow groupId={data.id} key={member.id} queryReference={member} />
                    ))}
                </Suspense>
            </div>
        </OutlinedBox>
    );
};

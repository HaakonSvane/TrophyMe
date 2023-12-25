import { graphql, useFragment } from "react-relay";
import { OutlinedBox } from "@/components/containers/OutlinedBox";
import { DashboardGroupFragment$key } from "@/generated/DashboardGroupFragment.graphql";
import { MemberRow } from "./MemberRow";

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
    return (
        <OutlinedBox title={data.name}>
            <div style={{ flexDirection: "row" }}>
                {data.members.map(member => (
                    <MemberRow groupId={data.id} key={member.id} queryReference={member} />
                ))}
            </div>
        </OutlinedBox>
    );
};

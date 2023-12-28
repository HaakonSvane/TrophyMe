import { graphql, useFragment } from "react-relay";
import { OutlinedBox } from "@/components/containers/OutlinedBox";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { MemberRow } from "./MemberRow";
import { GroupBoxFragment$key } from "@/__generated__/GroupBoxFragment.graphql";

const GroupBoxFragment = graphql`
    fragment GroupBoxFragment on Group {
        id
        name
        members {
            id
            ...MemberRowFragment
        }
    }
`;

type GroupBoxProps = {
    queryReference: GroupBoxFragment$key;
};

export const GroupBox = ({ queryReference }: GroupBoxProps) => {
    const data = useFragment(GroupBoxFragment, queryReference);

    const renderGroupsSeleton = () =>
        [1, 2, 3].map(index => <Skeleton key={index} className="flex flex-1 h-6" />);

    return (
        <OutlinedBox title={data.name}>
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <Suspense fallback={renderGroupsSeleton()}>
                        {data.members.map(member => (
                            <MemberRow groupId={data.id} key={member.id} queryReference={member} />
                        ))}
                    </Suspense>
                </div>
            </div>
        </OutlinedBox>
    );
};

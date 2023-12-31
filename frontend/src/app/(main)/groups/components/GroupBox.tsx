import { graphql, useFragment } from "react-relay";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { MemberRow } from "./MemberRow";
import { GroupBoxFragment$key } from "@/__generated__/GroupBoxFragment.graphql";
import Link from "next/link";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const GroupBoxFragment = graphql`
    fragment GroupBoxFragment on Group {
        id
        name
        description
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

    const renderCardHeader = () => (
        <div className="flex flex-row gap-4">
            <Avatar>
                <AvatarImage src={undefined} />
                <AvatarFallback>{data.name.at(0)?.toUpperCase() ?? "?"}</AvatarFallback>
            </Avatar>
            <div className="flex flex-1 flex-col">
                <CardTitle className="text-l line-clamp-1">{data.name}</CardTitle>
                <CardDescription className="line-clamp-2">{data.description}</CardDescription>
            </div>
        </div>
    );

    return (
        <>
            <Link href={`/groups/${data.id}`}>
                <Card className={"gap-2 p-3 text-left text-sm transition-all hover:bg-accent"}>
                    {renderCardHeader()}
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <Suspense fallback={renderGroupsSeleton()}>
                                {data.members.map(member => (
                                    <MemberRow
                                        groupId={data.id}
                                        key={member.id}
                                        queryReference={member}
                                    />
                                ))}
                            </Suspense>
                        </div>
                    </div>
                </Card>
            </Link>
        </>
    );
};

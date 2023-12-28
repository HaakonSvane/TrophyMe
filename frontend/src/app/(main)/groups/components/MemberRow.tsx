import { TrophyStack } from "@/components/trophies/TrophyStack";
import { MemberRowFragment$key } from "@/generated/MemberRowFragment.graphql";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { graphql, useFragment } from "react-relay";

const DashboardGroupMemberRowFragment = graphql`
    fragment MemberRowFragment on User {
        username
        userProfile {
            firstName
            lastName
        }
        ...TrophyStackFragment
    }
`;

type MemberRowProps = {
    queryReference: MemberRowFragment$key;
    groupId: string;
};

export const MemberRow = ({ queryReference, groupId }: MemberRowProps) => {
    const data = useFragment(DashboardGroupMemberRowFragment, queryReference);

    const UserNameText = () => (
        <div className="px-1 py-1">
            <p>{data.username}</p>
        </div>
    );

    const name: Name | undefined = data.userProfile ? new Name(data.userProfile) : undefined;

    return (
        <div className="flex flex-auto flex-row justify-between">
            {name ? (
                <TooltipProvider>
                    <Tooltip aria-label={`${name.fullName}`}>
                        <TooltipTrigger>{UserNameText()}</TooltipTrigger>
                        <TooltipContent>{name.fullName}</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            ) : (
                UserNameText()
            )}
            <div>
                <TrophyStack groupId={groupId} queryReference={data} />
            </div>
        </div>
    );
};

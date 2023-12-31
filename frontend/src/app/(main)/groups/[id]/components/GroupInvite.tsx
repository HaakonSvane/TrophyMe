import { GroupInviteFragment$key } from "@/__generated__/GroupInviteFragment.graphql";
import { GroupInviteMutation } from "@/__generated__/GroupInviteMutation.graphql";
import { Button } from "@/components/ui/button";
import { CardDescription } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { UserPlus2 } from "lucide-react";
import { graphql, useFragment, useMutation } from "react-relay";
import { toast } from "sonner";
import { GroupInviteDetails } from "./GroupInviteDetails";

const GroupInviteFragment = graphql`
    fragment GroupInviteFragment on Group {
        id
        invite {
            inviteCode
            expirationDate
        }
    }
`;

const CreateGroupInviteMutation = graphql`
    mutation GroupInviteMutation($groupId: ID!) {
        createGroupInvite(input: { groupId: $groupId }) {
            invite {
                inviteCode
                expirationDate
            }
        }
    }
`;

type GroupInviteProps = {
    fragmentKey: GroupInviteFragment$key;
};

export const GroupInvite = ({ fragmentKey }: GroupInviteProps) => {
    const { id: groupId, invite } = useFragment(GroupInviteFragment, fragmentKey);
    const [createInvite, isCreatingInvite] =
        useMutation<GroupInviteMutation>(CreateGroupInviteMutation);

    const expirationDate = new Date(invite?.expirationDate);

    const onCreateInviteClick = () => {
        createInvite({
            variables: {
                groupId,
            },
        });
        toast.success("Invite code created");
    };

    if (isCreatingInvite) {
        return <Spinner />;
    }
    if (!invite || !invite.expirationDate || expirationDate.getTime() <= new Date().getTime()) {
        return (
            <div className="flex flex-col gap-2">
                <CardDescription>Your invite has expired. Please create a new</CardDescription>
                <Button
                    aria-busy={isCreatingInvite}
                    variant="outline"
                    leadingIcon={UserPlus2}
                    onClick={onCreateInviteClick}
                >
                    Create invite
                </Button>
            </div>
        );
    }
    return <GroupInviteDetails inviteCode={invite.inviteCode} />;
};

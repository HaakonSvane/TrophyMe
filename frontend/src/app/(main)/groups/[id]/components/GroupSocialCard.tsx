import { GroupSocialCardFragment$key } from "@/__generated__/GroupSocialCardFragment.graphql";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { graphql, useFragment } from "react-relay";
import { GroupInvite } from "./GroupInvite";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Swords } from "lucide-react";

const GroupSocialCardFragment = graphql`
    fragment GroupSocialCardFragment on Group {
        name
        description
        ...GroupInviteFragment
    }
`;

type GroupSocialProps = {
    fragmentKey: GroupSocialCardFragment$key;
};

export const GroupSocialCard = ({ fragmentKey }: GroupSocialProps) => {
    const data = useFragment(GroupSocialCardFragment, fragmentKey);

    return (
        <Card>
            <CardHeader className="flex flex-col items-center">
                <Avatar>
                    <AvatarImage src={undefined} />
                    <AvatarFallback>HS</AvatarFallback>
                </Avatar>
                <>
                    <CardTitle>{data.name}</CardTitle>
                    <CardDescription>{data.description}</CardDescription>
                </>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
                <Separator />
                <Button leadingIcon={Swords}>New challenge</Button>
                <Separator />
                <GroupInvite fragmentKey={data} />
            </CardContent>
        </Card>
    );
};

"use client";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
import {
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { User, LogOut, MessageSquarePlus } from "lucide-react";
import { cn } from "@/lib/utils";
import { signOut } from "next-auth/react";
import { graphql, useFragment } from "react-relay";
import { UserMenuFragment$key } from "@/__generated__/UserMenuFragment.graphql";

const UserMenuFragment = graphql`
    fragment UserMenuFragment on User {
        username
        userProfile {
            firstName
            lastName
        }
    }
`;

type UserMenuProps = {
    fragmentKey: UserMenuFragment$key;
};

export const UserMenu = ({ fragmentKey }: UserMenuProps) => {
    const data = useFragment(UserMenuFragment, fragmentKey);
    const name: Name | undefined = data.userProfile ? new Name(data.userProfile) : undefined;

    return (
        <>
            <DropdownMenuArrow />
            <DropdownMenuLabel>{name?.fullName ?? data.username}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <DropdownMenuItem>
                    <User className={cn("mr-4")} />
                    <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className={cn("text-destructive")} onClick={() => signOut()}>
                    <LogOut className={cn("mr-4")} />
                    <span>Sign out</span>
                </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
                <DropdownMenuItem>
                    <MessageSquarePlus className={cn("mr-4")} />
                    <span>Provide feedback</span>
                </DropdownMenuItem>
            </DropdownMenuGroup>
        </>
    );
};

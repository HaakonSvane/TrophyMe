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

export const UserMenu = () => (
    <>
        <DropdownMenuArrow />
        <DropdownMenuLabel>User menu</DropdownMenuLabel>
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

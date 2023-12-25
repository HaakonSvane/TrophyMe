import { Button, ButtonProps } from "@/components/ui/button";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type UserButtonProps = {
    userId: string;
};

export const UserButton = forwardRef<HTMLButtonElement, Omit<ButtonProps, "children">>(
    ({ onClick, asChild, ...rest }, ref) => {
        return (
            <Button
                ref={ref}
                variant="ghost"
                aria-label="See user actions"
                className={cn("w-10 h-10 rounded-full p-2")}
                onClick={onClick}
                asChild={false}
                {...rest}
            >
                <Avatar className={cn("w-8 h-8")}>
                    <AvatarImage src="https://avatars.githubusercontent.com/primer" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </Button>
        );
    },
);

UserButton.displayName = "UserButton";

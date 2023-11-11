import { Button, ButtonProps } from "@/components/ui/button";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type UserButtonProps = {
  userId: string;
};

export const UserButton = forwardRef<
  HTMLButtonElement,
  Omit<ButtonProps, "children">
>(({ onClick, ...rest }, ref) => {
  return (
    <Button
      ref={ref}
      variant="ghost"
      aria-label="See user actions"
      className={cn("w-12 h-12 rounded-full p-2")}
      onClick={onClick}
      {...rest}
    >
      <Image
        alt="This is you!"
        width={28}
        height={28}
        src="https://avatars.githubusercontent.com/primer"
      />
    </Button>
  );
});

UserButton.displayName = "UserButton";

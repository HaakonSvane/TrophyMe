import { Avatar, Button, ButtonProps } from "@primer/react";
import { forwardRef } from "react";

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
      size="large"
      variant="invisible"
      aria-label="See user actions"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        height: 50,
        minWidth: 0,
        borderRadius: "50%",
      }}
      onClick={onClick}
      {...rest}
    >
      <Avatar size={32} src="https://avatars.githubusercontent.com/primer" />
    </Button>
  );
});

UserButton.displayName = "UserButton";

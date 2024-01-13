import { Button, ButtonProps } from "@/components/ui/button";
import { Key } from "lucide-react";
import Link from "next/link";

export const LoginButton = ({ ...buttonProps }: ButtonProps) => {
    return (
        <Button {...buttonProps} asChild variant="secondary" aria-label={`Sign in to troji.me`}>
            <a href="/api/auth/login">Press me please</a>
        </Button>
    );
};

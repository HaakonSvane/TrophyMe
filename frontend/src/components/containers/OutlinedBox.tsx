import React, { PropsWithChildren } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { cn } from "@/lib/utils";

type OutlinedBoxProps = {
    title?: string;
    windowed?: boolean;
};

export const OutlinedBox = ({
    title,
    children,
    className,
}: PropsWithChildren<OutlinedBoxProps> & React.HTMLProps<HTMLDivElement>) => {
    return (
        <Card className={cn(className)}>
            {title && (
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>noe her</CardDescription>
                </CardHeader>
            )}
            <CardContent>{children}</CardContent>
        </Card>
    );
};

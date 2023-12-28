import React, { PropsWithChildren } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { cn } from "@/lib/utils";

type OutlinedBoxProps = {
    title?: string;
    description?: string;
    windowed?: boolean;
};

export const OutlinedBox = ({
    title,
    description,
    children,
    className,
}: PropsWithChildren<OutlinedBoxProps> & React.HTMLProps<HTMLDivElement>) => {
    return (
        <Card className={cn(className)}>
            {title && (
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
            )}
            <CardContent>{children}</CardContent>
        </Card>
    );
};

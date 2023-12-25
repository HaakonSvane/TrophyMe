import React, { PropsWithChildren } from "react";
import { Card } from "../ui/card";

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
        <Card
            className={`px-4 md:px-6 ${className}`}
            style={{
                borderColor: "border.default",
                borderWidth: 1,
                borderRadius: 8,
                backgroundColor: "menu.bgActive",
            }}
        >
            {title && (
                <legend>
                    <small>{title}</small>
                </legend>
            )}
            {children}
        </Card>
    );
};

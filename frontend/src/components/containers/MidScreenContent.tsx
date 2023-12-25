type MidScreenContentProps = {
    children: React.ReactNode;
};

export const MidScreenContent = ({
    children,
    className,
    style,
}: MidScreenContentProps & React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={`h-screen flex m-auto max-w-md flex-col ${className}`} style={style}>
            {children}
        </div>
    );
};

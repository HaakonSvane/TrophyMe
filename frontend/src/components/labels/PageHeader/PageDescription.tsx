import { cn } from "@/lib/utils";

export const PageDescription = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <p className={cn("text-l text-muted-foreground", props.className)} {...props} />
);

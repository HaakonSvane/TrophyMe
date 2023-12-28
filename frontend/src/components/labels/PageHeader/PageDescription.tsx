import { cn } from "@/lib/utils";

export const PageDescription = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <p className={cn("text-sm text-muted-foreground", props.className)} {...props} />
);

import { PropsWithChildren, ReactNode } from "react";
import { SectionHeader } from "@/components/labels/SectionHeader";
import { cn } from "@/lib/utils";

type SectionProps = {
  title: string;
  description?: string;
  trailingAdornment?: ReactNode;
};

export const Section = ({
  title,
  description,
  trailingAdornment,
  children,
}: PropsWithChildren<SectionProps>) => (
  <div className={cn("flex flex-col gap-2")}>
    <div className={cn("flex flex-row")}>
      <SectionHeader title={title} />
      {trailingAdornment}
    </div>
    {description && (
      <small className={cn("text-sm text-muted-foreground")}>
        {description}
      </small>
    )}
    {children}
  </div>
);

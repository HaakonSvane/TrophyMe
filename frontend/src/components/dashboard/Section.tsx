import { PropsWithChildren } from "react";
import { SectionHeader } from "@/components/labels/SectionHeader";

export const Section = (props: PropsWithChildren<{ title: string }>) => (
  <div>
    <SectionHeader title={props.title} />
    {props.children}
  </div>
);

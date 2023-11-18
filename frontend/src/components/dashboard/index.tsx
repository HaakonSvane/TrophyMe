"use client";

import { PreloadedQuery, graphql, usePreloadedQuery } from "react-relay";
import { dashboardQuery } from "@/generated/dashboardQuery.graphql";
import { Suspense } from "react";
import { PageHeader } from "@/components/labels/PageHeader";
import { MyTimeline } from "./MyTimeline";
import { Section } from "./Section";
import { GroupSection } from "./sections/GroupSection";
import { cn } from "@/lib/utils";

const DashboardQuery = graphql`
  query dashboardQuery {
    me {
      ...GroupSectionFragment
    }
  }
`;

type DashboardProps = {
  queryRef: PreloadedQuery<dashboardQuery>;
};

export const Dashboard = ({ queryRef }: DashboardProps) => {
  const data = usePreloadedQuery(DashboardQuery, queryRef);
  return (
    <Suspense fallback="Loading client side...">
      <PageHeader className={cn("mb-10")}>{`Welcome`}</PageHeader>
      <div className="grid gap-16">
        <GroupSection queryReference={data.me} />
        <Section title="recent activity">
          <MyTimeline />
        </Section>
      </div>
    </Suspense>
  );
};

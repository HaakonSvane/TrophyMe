"use client";

import { PreloadedQuery, graphql, usePreloadedQuery } from "react-relay";
import { dashboardQuery } from "@/generated/dashboardQuery.graphql";
import { Suspense } from "react";
import { PageHeader } from "@/components/labels/PageHeader";
import { MyTimeline } from "./MyTimeline";
import { DashboardGroup } from "./DashboardGroup";
import { Section } from "./Section";

const DashboardQuery = graphql`
  query dashboardQuery {
    me {
      groups {
        id
        ...DashboardGroupFragment
      }
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
      <PageHeader>{`Welcome`}</PageHeader>

      <div className="grid gap-16">
        <Section
          title="groups"
          description={
            data.me.groups.length === 0
              ? "You don't seem to be a member of a group yet. Create one and invite your friends!"
              : "Your most active groups"
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {data.me.groups.map((group) => (
              <DashboardGroup key={group.id} queryReference={group} />
            ))}
          </div>
        </Section>

        <Section title="recent activity">
          <MyTimeline />
        </Section>
      </div>
    </Suspense>
  );
};

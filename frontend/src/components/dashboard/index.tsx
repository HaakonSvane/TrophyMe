"use client";

import { PageHeader } from "@primer/react/drafts";
import { Section } from "./Section";
import { DashboardGroup } from "./DashboardGroup";
import {
  PreloadedQuery,
  graphql,
  usePreloadedQuery,
  useRelayEnvironment,
} from "react-relay";
import { dashboardQuery } from "@/generated/dashboardQuery.graphql";
import { MyTimeline } from "./MyTimeline";
import { Suspense } from "react";

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
      <PageHeader>
        <PageHeader.TitleArea>
          <PageHeader.Title>Haakon Hafsahl Svane</PageHeader.Title>
        </PageHeader.TitleArea>
      </PageHeader>

      <div className="grid gap-16">
        <Section title="groups">
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

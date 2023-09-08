"use client";

import { PageHeader } from "@primer/react/drafts";
import { SectionHeader } from "./_components/labels/SectionHeader";
import { PropsWithChildren } from "react";
import { MyTimeline } from "./_components/dashboard/MyTimeline";
import { DashboardGroup } from "./_components/dashboard/DashboardGroup";
import { graphql, useLazyLoadQuery } from "react-relay";
import { pageQuery as PageQueryType } from "./__generated__/pageQuery.graphql";

const Section = (props: PropsWithChildren<{ title: string }>) => (
  <div>
    <SectionHeader title={props.title} />
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {props.children}
    </div>
  </div>
);

const DashboardQuery = graphql`
  query pageQuery {
    me {
      groups {
        id
        ...DashboardGroupFragment
      }
    }
  }
`;

const Page = () => {
  const data = useLazyLoadQuery<PageQueryType>(DashboardQuery, {});
  return (
    <>
      <PageHeader>
        <PageHeader.TitleArea>
          <PageHeader.Title>Haakon Hafsahl Svane</PageHeader.Title>
        </PageHeader.TitleArea>
      </PageHeader>

      <div className="grid gap-16">
        <Section title="groups">
          {data.me.groups.map((group) => (
            <DashboardGroup key={group.id} group={group} />
          ))}
        </Section>

        <Section title="recent activity">
          <MyTimeline />
        </Section>
      </div>
    </>
  );
};

export default Page;

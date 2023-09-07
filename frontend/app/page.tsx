"use client";

import { Text } from "@primer/react";
import { OutlinedBox } from "./_components/containers/OutlinedBox";
import { PageHeader } from "@primer/react/drafts";
import { SectionHeader } from "./_components/labels/SectionHeader";
import { PropsWithChildren } from "react";
import { MyTimeline } from "./_components/dashboard/MyTimeline";
import { loadSerializableQuery } from "./_relay/loadSerializableQuery";
import { DashboardGroup } from "./_components/dashboard/DashboardGroup";
import { graphql, useLazyLoadQuery } from "react-relay";

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
  const data = useLazyLoadQuery<any>(DashboardQuery, {});
  const groups = data.groups;
  return (
    <>
      <PageHeader>
        <PageHeader.TitleArea>
          <PageHeader.Title>Haakon Hafsahl Svane</PageHeader.Title>
        </PageHeader.TitleArea>
      </PageHeader>

      <div className="grid gap-16">
        <Section title="groups">
          {groups.map((group) => (
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

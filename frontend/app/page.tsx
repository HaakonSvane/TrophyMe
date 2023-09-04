"use client";

import { Text } from "@primer/react";
import { OutlinedBox } from "./_components/containers/OutlinedBox";
import { PageHeader } from "@primer/react/drafts";
import { SectionHeader } from "./_components/labels/SectionHeader";
import { PropsWithChildren } from "react";
import { MyTimeline } from "./_components/dashboard/MyTimeline";

const Section = (props: PropsWithChildren<{ title: string }>) => (
  <div>
    <SectionHeader title={props.title} />
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {props.children}
    </div>
  </div>
);

const Test = () => {
  return (
    <>
      <PageHeader>
        <PageHeader.TitleArea>
          <PageHeader.Title>Haakon Hafsahl Svane</PageHeader.Title>
        </PageHeader.TitleArea>
      </PageHeader>

      <div className="grid gap-16">
        <Section title="groups">
          <OutlinedBox title="First group">
            <Text>This is some content!</Text>
          </OutlinedBox>
          <OutlinedBox title="Second group">
            <Text>This is some content!</Text>
          </OutlinedBox>
          <OutlinedBox title="Third group">
            <Text>This is some content!</Text>
          </OutlinedBox>
        </Section>

        <Section title="recent activity">
          <MyTimeline />
        </Section>
      </div>
    </>
  );
};

export default Test;

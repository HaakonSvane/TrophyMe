import { graphql, useFragment } from "react-relay";
import { Text } from "@primer/react";
import { OutlinedBox } from "../containers/OutlinedBox";
import { DashboardGroupFragment$key } from "./__generated__/DashboardGroupFragment.graphql";

const GroupFragment = graphql`
  fragment DashboardGroupFragment on Group {
    name
  }
`;

type DashboardGroupProps = {
  group: DashboardGroupFragment$key;
};

export const DashboardGroup = ({ group }: DashboardGroupProps) => {
  const data = useFragment(GroupFragment, group);
  return (
    <OutlinedBox title={"Test group"}>
      <Text>Some content!</Text>
    </OutlinedBox>
  );
};

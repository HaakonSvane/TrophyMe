import { graphql, useFragment } from "react-relay";
import { Text } from "@primer/react";
import { OutlinedBox } from "../containers/OutlinedBox";

const GroupFragment = graphql`
  fragment DashboardGroupFragment on Group {
    name
  }
`;

export const DashboardGroup = ({ group }: { group: any }) => {
  const data = useFragment(GroupFragment, group);
  return (
    <OutlinedBox title={"Test group"}>
      <Text>Some content!</Text>
    </OutlinedBox>
  );
};
